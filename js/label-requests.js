// ─────────────────────────────────────────────────────────
// LABEL REQUEST SYSTEM (v3 — APVMA Registry + Email + Status)
// Users search the APVMA PubCRIS registry, pick a product,
// optionally provide email for notifications, and submit.
// Submissions go to Google Sheet via Apps Script endpoint.
// Queues offline submissions in localStorage for retry.
// ─────────────────────────────────────────────────────────

(function () {
  'use strict';

  // ── CONFIG ──────────────────────────────────────────────
  var DEFAULT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzpD4pwShiS_7R5CS_5uaN19j-UMJ4agHvP8vJQk-4G5Sq8J8tYkyzyH1yRTCFyoY1Z/exec';
  var ENDPOINT = localStorage.getItem('labelRequestEndpoint') || DEFAULT_ENDPOINT;
  var EMAIL_KEY = 'labelRequestEmail';
  var REQUESTED_KEY = 'labelRequestedIds'; // track submitted APVMA IDs

  function getRequestedIds() {
    try { return JSON.parse(localStorage.getItem(REQUESTED_KEY) || '{}'); }
    catch (e) { return {}; }
  }

  function markRequested(apvmaId) {
    var ids = getRequestedIds();
    ids[String(apvmaId)] = new Date().toISOString();
    localStorage.setItem(REQUESTED_KEY, JSON.stringify(ids));
  }

  function isAlreadyRequested(apvmaId) {
    return !!getRequestedIds()[String(apvmaId)];
  }

  // ── OFFLINE QUEUE ──────────────────────────────────────
  var QUEUE_KEY = 'labelRequestQueue';

  function getQueue() {
    try { return JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]'); }
    catch (e) { return []; }
  }

  function saveQueue(queue) {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
    updateQueueBadge();
  }

  function addToQueue(data) {
    var queue = getQueue();
    queue.push(data);
    saveQueue(queue);
  }

  function updateQueueBadge() {
    var badge = document.getElementById('request-queue-badge');
    var count = getQueue().length;
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
  }

  // ── SUBMIT TO GOOGLE SHEET ─────────────────────────────
  function submitRequest(data) {
    if (!ENDPOINT) {
      addToQueue(data);
      return Promise.resolve({ status: 'queued' });
    }

    return fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data),
      mode: 'no-cors'
    }).then(function () {
      return { status: 'ok' };
    }).catch(function () {
      addToQueue(data);
      return { status: 'queued' };
    });
  }

  // ── FLUSH OFFLINE QUEUE ────────────────────────────────
  function flushQueue() {
    if (!ENDPOINT) return;
    var queue = getQueue();
    if (queue.length === 0) return;

    var remaining = [];
    var promises = queue.map(function (item) {
      return fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(item),
        mode: 'no-cors'
      }).catch(function () {
        remaining.push(item);
      });
    });

    Promise.all(promises).then(function () {
      saveQueue(remaining);
    });
  }

  window.addEventListener('online', flushQueue);
  if (navigator.onLine) {
    setTimeout(flushQueue, 3000);
  }

  // ── APVMA CATEGORY CODE → LABEL ───────────────────────
  function mapApvmaCategory(code) {
    if (!code) return '';
    var c = code.toUpperCase();
    if (c === 'A') return 'Agricultural';
    if (c === 'V') return 'Veterinary';
    if (c === 'VM') return 'Veterinary';
    return code;
  }

  // ── APVMA SEARCH (queries pubcrisRegistry) ─────────────
  var searchDebounce = null;
  var selectedEntry = null;

  function searchApvma(query) {
    if (!window.pubcrisRegistry || !query || query.length < 2) return [];

    var inAppIds = {};
    if (typeof productDatabase !== 'undefined') {
      for (var id in productDatabase) {
        var prod = productDatabase[id];
        if (prod.apvma) {
          String(prod.apvma).split('/').forEach(function (num) {
            var trimmed = num.trim();
            if (trimmed) inAppIds[trimmed] = true;
          });
        }
      }
    }

    var tokens = query.toLowerCase().split(/\s+/).filter(function (t) { return t.length > 0; });

    var results = window.pubcrisRegistry.filter(function (entry) {
      if (inAppIds[String(entry.id)]) return false;
      var name = (entry.name || '').toLowerCase();
      var holder = (entry.holder || '').toLowerCase();
      var idStr = String(entry.id);
      return tokens.every(function (token) {
        return name.includes(token) || holder.includes(token) || idStr.includes(token);
      });
    });

    results.sort(function (a, b) {
      var sa = 0, sb = 0;
      var q = query.toLowerCase();
      var an = (a.name || '').toLowerCase();
      var bn = (b.name || '').toLowerCase();
      if (an.startsWith(q)) sa += 100;
      else if (an.includes(q)) sa += 50;
      if (bn.startsWith(q)) sb += 100;
      else if (bn.includes(q)) sb += 50;
      if (sb !== sa) return sb - sa;
      return an.localeCompare(bn);
    });

    return results.slice(0, 30);
  }

  // ── BUILD MODAL HTML ───────────────────────────────────
  function createModal() {
    var savedEmail = localStorage.getItem(EMAIL_KEY) || '';
    var overlay = document.createElement('div');
    overlay.id = 'label-request-overlay';
    overlay.className = 'modal-overlay hidden';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Request a product label');

    overlay.innerHTML =
      '<div class="label-request-modal">' +
        '<div class="label-request-header">' +
          '<div class="label-request-header-icon">📬</div>' +
          '<h3 class="label-request-title">Request a Product Label</h3>' +
          '<p class="label-request-subtitle">Search the APVMA registry to find the product you need.</p>' +
          '<button class="close-modal-btn" id="close-label-request" aria-label="Close">&times;</button>' +
        '</div>' +

        // ── SEARCH STEP ──
        '<div id="lr-search-step" class="label-request-form">' +
          '<div class="label-req-field">' +
            '<label for="lr-apvma-search">Search APVMA Registry</label>' +
            '<input type="text" id="lr-apvma-search" placeholder="Type product name, company, or APVMA number..." autocomplete="off">' +
            '<div class="lr-search-hint">Only products not already in the app will appear</div>' +
          '</div>' +
          '<div id="lr-apvma-results" class="lr-apvma-results"></div>' +
        '</div>' +

        // ── CONFIRM STEP ──
        '<div id="lr-confirm-step" class="label-request-form hidden">' +
          '<div class="lr-selected-product" id="lr-selected-card">' +
            '<div class="lr-selected-name" id="lr-sel-name"></div>' +
            '<div class="lr-selected-details">' +
              '<span class="lr-sel-tag" id="lr-sel-apvma"></span>' +
              '<span class="lr-sel-tag" id="lr-sel-holder"></span>' +
              '<span class="lr-sel-tag" id="lr-sel-cat"></span>' +
              '<span class="lr-sel-tag" id="lr-sel-status"></span>' +
            '</div>' +
            '<button type="button" class="lr-change-btn" id="lr-change">Change</button>' +
          '</div>' +
          // Email field
          '<div class="label-req-field">' +
            '<label for="lr-email">Your email <span style="font-weight:normal;color:var(--text-sub);">(optional — get notified when added)</span></label>' +
            '<input type="email" id="lr-email" placeholder="you@example.com" value="' + escapeHtml(savedEmail) + '" autocomplete="email">' +
          '</div>' +
          // Notify checkbox
          '<div class="lr-notify-row">' +
            '<label class="lr-checkbox-label">' +
              '<input type="checkbox" id="lr-notify" ' + (savedEmail ? 'checked' : '') + '>' +
              '<span>Notify me when this label is added</span>' +
            '</label>' +
          '</div>' +
          // Notes
          '<div class="label-req-field">' +
            '<label for="lr-notes">Any extra details <span style="font-weight:normal;color:var(--text-sub);">(optional)</span></label>' +
            '<textarea id="lr-notes" rows="2" placeholder="e.g. Need it for mangoes, seen it at local ag store"></textarea>' +
          '</div>' +
          '<div class="label-req-actions">' +
            '<button type="button" class="label-req-cancel" id="lr-cancel">Cancel</button>' +
            '<button type="button" class="label-req-submit" id="lr-submit">Send Request</button>' +
          '</div>' +
        '</div>' +

        // ── SUCCESS STEP ──
        '<div id="label-request-success" class="label-request-success hidden">' +
          '<div class="label-req-success-icon">✅</div>' +
          '<p class="label-req-success-msg">Thanks! Your request has been submitted.</p>' +
          '<p class="label-req-success-sub" id="lr-success-sub"></p>' +
          '<button class="label-req-done" id="lr-done">Done</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);

    // ── EVENT LISTENERS ──────────────────────────────────
    var closeBtn = document.getElementById('close-label-request');
    var cancelBtn = document.getElementById('lr-cancel');
    var doneBtn = document.getElementById('lr-done');
    var changeBtn = document.getElementById('lr-change');
    var submitBtn = document.getElementById('lr-submit');
    var searchInput = document.getElementById('lr-apvma-search');
    var resultsContainer = document.getElementById('lr-apvma-results');
    var emailInput = document.getElementById('lr-email');
    var notifyCheckbox = document.getElementById('lr-notify');

    function resetModal() {
      selectedEntry = null;
      searchInput.value = '';
      resultsContainer.innerHTML = '';
      document.getElementById('lr-notes').value = '';
      // Keep email — it persists
      document.getElementById('lr-search-step').classList.remove('hidden');
      document.getElementById('lr-confirm-step').classList.add('hidden');
      document.getElementById('label-request-success').classList.add('hidden');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Request';
    }

    function closeModal() {
      overlay.classList.add('hidden');
      setTimeout(resetModal, 300);
    }

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    doneBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
        closeModal();
      }
    });

    // Auto-check notify when email is entered
    emailInput.addEventListener('input', function () {
      if (emailInput.value.trim().length > 0) {
        notifyCheckbox.checked = true;
      }
    });

    changeBtn.addEventListener('click', function () {
      selectedEntry = null;
      document.getElementById('lr-search-step').classList.remove('hidden');
      document.getElementById('lr-confirm-step').classList.add('hidden');
      setTimeout(function () { searchInput.focus(); }, 100);
    });

    // ── APVMA SEARCH INPUT ───────────────────────────────
    searchInput.addEventListener('input', function () {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(function () {
        var q = searchInput.value.trim();
        if (q.length < 2) {
          resultsContainer.innerHTML = q.length > 0
            ? '<div class="lr-search-msg">Type at least 2 characters...</div>'
            : '';
          return;
        }

        var results = searchApvma(q);

        if (results.length === 0) {
          resultsContainer.innerHTML = '<div class="lr-search-msg">No matching products found in APVMA registry.<br><span style="font-size:0.8rem;color:var(--text-sub);">Products already in the app are excluded.</span></div>';
          return;
        }

        var requestedIds = getRequestedIds();
        var html = '<div class="lr-search-hint" style="margin-bottom:6px;font-style:normal;font-weight:600;color:var(--text-main);font-size:0.78rem;">Tap a product to select it</div>';
        html += results.map(function (entry) {
          var statusClass = (entry.status === 'R' || entry.status === 'Registered') ? 'lr-status-active' : 'lr-status-archived';
          var statusLabel = (entry.status === 'R' || entry.status === 'Registered') ? 'Registered' : 'Archived';
          var catLabel = mapApvmaCategory(entry.category);
          var alreadyReq = !!requestedIds[String(entry.id)];

          if (alreadyReq) {
            return '<div class="lr-apvma-item lr-apvma-item-requested">' +
              '<div class="lr-apvma-item-name">' + escapeHtml(entry.name || '') + '</div>' +
              '<div class="lr-apvma-item-meta">' +
                '<span class="lr-apvma-id">' + entry.id + '</span>' +
                '<span class="lr-apvma-holder">' + escapeHtml(entry.holder || '') + '</span>' +
                '<span class="lr-requested-badge">Request Pending</span>' +
              '</div>' +
            '</div>';
          }

          return '<button type="button" class="lr-apvma-item" data-id="' + entry.id + '">' +
            '<div class="lr-apvma-item-name">' + escapeHtml(entry.name || '') + '</div>' +
            '<div class="lr-apvma-item-meta">' +
              '<span class="lr-apvma-id">' + entry.id + '</span>' +
              '<span class="lr-apvma-holder">' + escapeHtml(entry.holder || '') + '</span>' +
              (catLabel ? '<span class="lr-apvma-cat">' + catLabel + '</span>' : '') +
              '<span class="' + statusClass + '">' + statusLabel + '</span>' +
            '</div>' +
          '</button>';
        }).join('');

        if (results.length >= 30) {
          html += '<div class="lr-search-msg" style="margin-top:8px;">Showing first 30 results. Refine your search for more specific matches.</div>';
        }

        resultsContainer.innerHTML = html;
      }, 200);
    });

    // ── CLICK ON A RESULT ────────────────────────────────
    resultsContainer.addEventListener('click', function (e) {
      var btn = e.target.closest('.lr-apvma-item');
      if (!btn) return;
      var apvmaId = btn.getAttribute('data-id');
      if (!apvmaId || !window.pubcrisRegistry) return;
      var entry = window.pubcrisRegistry.find(function (r) {
        return String(r.id) === apvmaId;
      });
      if (!entry) return;
      selectProduct(entry);
    });

    // ── SUBMIT ───────────────────────────────────────────
    submitBtn.addEventListener('click', function () {
      if (!selectedEntry) return;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Save email for next time
      var email = emailInput.value.trim();
      if (email) {
        localStorage.setItem(EMAIL_KEY, email);
      }

      var statusLabel = (selectedEntry.status === 'R' || selectedEntry.status === 'Registered') ? 'Registered' : 'Archived';

      var data = {
        type: 'label-request',
        timestamp: new Date().toISOString(),
        product: selectedEntry.name || '',
        company: selectedEntry.holder || '',
        category: mapApvmaCategory(selectedEntry.category),
        searchQuery: searchInput.value.trim(),
        notes: document.getElementById('lr-notes').value.trim(),
        apvmaNumber: String(selectedEntry.id),
        apvmaStatus: statusLabel,
        apvmaExpiry: selectedEntry.expiry || '',
        email: email,
        notifyWhenAdded: notifyCheckbox.checked ? 'Yes' : 'No'
      };

      submitRequest(data).then(function (result) {
        // Mark as requested to prevent duplicates
        markRequested(selectedEntry.id);

        document.getElementById('lr-search-step').classList.add('hidden');
        document.getElementById('lr-confirm-step').classList.add('hidden');
        var successEl = document.getElementById('label-request-success');
        var subEl = document.getElementById('lr-success-sub');
        successEl.querySelector('.label-req-success-icon').textContent = '✅';
        successEl.querySelector('.label-req-success-msg').textContent = 'Thanks! Your request has been submitted.';

        if (result.status === 'queued') {
          subEl.textContent = 'You\'re offline \u2014 request saved and will send automatically when you\'re back online.';
        } else {
          var msg = 'We\'ll review this and add it to the database.';
          if (email && notifyCheckbox.checked) {
            msg += ' You\'ll be notified at ' + email + ' when it\'s added.';
          }
          subEl.textContent = msg;
        }

        successEl.classList.remove('hidden');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Request';
      });
    });
  }

  // ── SELECT A PRODUCT ───────────────────────────────────
  function selectProduct(entry) {
    // Check for duplicate
    if (isAlreadyRequested(entry.id)) {
      document.getElementById('lr-search-step').classList.add('hidden');
      document.getElementById('lr-confirm-step').classList.add('hidden');
      var successEl = document.getElementById('label-request-success');
      document.getElementById('label-request-success').querySelector('.label-req-success-icon').textContent = '📋';
      document.getElementById('label-request-success').querySelector('.label-req-success-msg').textContent = 'Request Already Pending';
      document.getElementById('lr-success-sub').textContent = 'You\'ve already requested ' + (entry.name || 'this product') + '. We\'ll get to it — no need to submit again!';
      successEl.classList.remove('hidden');
      return;
    }

    selectedEntry = entry;

    document.getElementById('lr-sel-name').textContent = entry.name || '';
    document.getElementById('lr-sel-apvma').textContent = 'APVMA ' + entry.id;
    document.getElementById('lr-sel-holder').textContent = entry.holder || '';
    document.getElementById('lr-sel-cat').textContent = mapApvmaCategory(entry.category);

    var statusLabel = (entry.status === 'R' || entry.status === 'Registered') ? 'Registered' : 'Archived';
    var statusEl = document.getElementById('lr-sel-status');
    statusEl.textContent = statusLabel;
    statusEl.className = 'lr-sel-tag ' + ((entry.status === 'R' || entry.status === 'Registered') ? 'lr-status-active' : 'lr-status-archived');

    document.getElementById('lr-search-step').classList.add('hidden');
    document.getElementById('lr-confirm-step').classList.remove('hidden');
  }

  // ── HTML ESCAPE ────────────────────────────────────────
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ── PUBLIC: Open the request modal ─────────────────────
  window.openLabelRequest = function (searchQuery) {
    var overlay = document.getElementById('label-request-overlay');
    if (!overlay) {
      createModal();
      overlay = document.getElementById('label-request-overlay');
    }

    selectedEntry = null;
    var searchStep = document.getElementById('lr-search-step');
    var confirmStep = document.getElementById('lr-confirm-step');
    var successEl = document.getElementById('label-request-success');
    searchStep.classList.remove('hidden');
    confirmStep.classList.add('hidden');
    successEl.classList.add('hidden');

    // Refresh saved email
    var emailInput = document.getElementById('lr-email');
    var notifyCheckbox = document.getElementById('lr-notify');
    if (emailInput) {
      var saved = localStorage.getItem(EMAIL_KEY) || '';
      emailInput.value = saved;
      if (notifyCheckbox) notifyCheckbox.checked = !!saved;
    }

    var searchInput = document.getElementById('lr-apvma-search');
    if (searchInput) {
      searchInput.value = searchQuery || '';
      if (searchQuery && searchQuery.length >= 2) {
        setTimeout(function () {
          searchInput.dispatchEvent(new Event('input'));
        }, 100);
      }
    }

    overlay.classList.remove('hidden');
    setTimeout(function () {
      searchInput.focus();
    }, 150);
  };

  // ── PUBLIC: Set endpoint ───────────────────────────────
  window.setLabelRequestEndpoint = function (url) {
    localStorage.setItem('labelRequestEndpoint', url);
    ENDPOINT = url;
    flushQueue();
  };

  window.getLabelRequestQueueCount = function () {
    return getQueue().length;
  };

  document.addEventListener('DOMContentLoaded', function () {
    updateQueueBadge();
  });

})();
