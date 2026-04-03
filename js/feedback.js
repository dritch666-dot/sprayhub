// ─────────────────────────────────────────────────────────
// FEEDBACK & BUG REPORTS (v1)
// In-app feedback modal — users report bugs, suggestions,
// or questions. Auto-captures context (tab, search, device).
// Posts to Google Sheet via shared Apps Script endpoint.
// ─────────────────────────────────────────────────────────

(function () {
  'use strict';

  var DEFAULT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzpD4pwShiS_7R5CS_5uaN19j-UMJ4agHvP8vJQk-4G5Sq8J8tYkyzyH1yRTCFyoY1Z/exec';
  var ENDPOINT = localStorage.getItem('labelRequestEndpoint') || DEFAULT_ENDPOINT;
  var EMAIL_KEY = 'labelRequestEmail'; // share email across systems
  var QUEUE_KEY = 'feedbackQueue';

  // ── OFFLINE QUEUE ──────────────────────────────────────
  function getQueue() {
    try { return JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]'); }
    catch (e) { return []; }
  }

  function saveQueue(queue) {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }

  function addToQueue(data) {
    var q = getQueue();
    q.push(data);
    saveQueue(q);
  }

  function submitFeedback(data) {
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
  if (navigator.onLine) setTimeout(flushQueue, 4000);

  // ── AUTO-DETECT CONTEXT ────────────────────────────────
  function getContext() {
    // Current active tab
    var activeTab = 'unknown';
    var tabs = ['search', 'apvma', 'sds', 'permits', 'weeds', 'pests', 'diseases', 'tank', 'cost', 'container'];
    for (var i = 0; i < tabs.length; i++) {
      var el = document.getElementById('agri-' + tabs[i]);
      if (el && !el.classList.contains('hidden') && el.offsetParent !== null) {
        activeTab = tabs[i];
        break;
      }
    }

    // Last search query
    var lastSearch = '';
    var searchInput = document.getElementById('search-input');
    if (searchInput) lastSearch = searchInput.value || '';

    // Active filters
    var filters = [];
    var cropFilter = document.getElementById('search-crop-filter');
    var pestFilter = document.getElementById('search-pest-filter');
    if (cropFilter && cropFilter.value) filters.push('crop:' + cropFilter.value);
    if (pestFilter && pestFilter.value) filters.push('pest:' + pestFilter.value);

    // Device info
    var device = navigator.userAgent || '';
    var screenSize = window.innerWidth + 'x' + window.innerHeight;

    return {
      tab: activeTab,
      lastSearch: lastSearch,
      filters: filters.join(', '),
      screen: screenSize,
      device: device.substring(0, 200),
      online: navigator.onLine ? 'Yes' : 'No'
    };
  }

  // ── BUILD MODAL ────────────────────────────────────────
  var modalCreated = false;

  function createModal() {
    if (modalCreated) return;
    modalCreated = true;

    var savedEmail = localStorage.getItem(EMAIL_KEY) || '';
    var overlay = document.createElement('div');
    overlay.id = 'feedback-overlay';
    overlay.className = 'modal-overlay hidden';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Send feedback');

    overlay.innerHTML =
      '<div class="label-request-modal fb-modal">' +
        '<div class="label-request-header">' +
          '<div class="label-request-header-icon">💬</div>' +
          '<h3 class="label-request-title">Send Feedback</h3>' +
          '<p class="label-request-subtitle">Report a bug, suggest a feature, or ask a question.</p>' +
          '<button class="close-modal-btn" id="close-feedback" aria-label="Close">&times;</button>' +
        '</div>' +

        '<div id="fb-form-step" class="label-request-form">' +
          // Category
          '<div class="label-req-field">' +
            '<label for="fb-category">Category</label>' +
            '<select id="fb-category">' +
              '<option value="Bug">Bug / Something broken</option>' +
              '<option value="Suggestion">Feature suggestion</option>' +
              '<option value="Data Error">Data error / Wrong info</option>' +
              '<option value="Question">Question</option>' +
              '<option value="Other">Other</option>' +
            '</select>' +
          '</div>' +
          // Description
          '<div class="label-req-field">' +
            '<label for="fb-description">Description <span class="label-req-required">*</span></label>' +
            '<textarea id="fb-description" rows="4" placeholder="What happened? What did you expect?"></textarea>' +
          '</div>' +
          // Email
          '<div class="label-req-field">' +
            '<label for="fb-email">Your email <span style="font-weight:normal;color:var(--text-sub);">(optional — for follow-up)</span></label>' +
            '<input type="email" id="fb-email" placeholder="you@example.com" value="' + escapeHtml(savedEmail) + '" autocomplete="email">' +
          '</div>' +
          // Context preview
          '<div class="fb-context-preview" id="fb-context-preview"></div>' +
          // Actions
          '<div class="label-req-actions">' +
            '<button type="button" class="label-req-cancel" id="fb-cancel">Cancel</button>' +
            '<button type="button" class="label-req-submit" id="fb-submit">Send Feedback</button>' +
          '</div>' +
        '</div>' +

        // Success
        '<div id="fb-success" class="label-request-success hidden">' +
          '<div class="label-req-success-icon">✅</div>' +
          '<p class="label-req-success-msg">Feedback sent!</p>' +
          '<p class="label-req-success-sub" id="fb-success-sub">Thanks for helping improve the app.</p>' +
          '<button class="label-req-done" id="fb-done">Done</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);

    var closeBtn = document.getElementById('close-feedback');
    var cancelBtn = document.getElementById('fb-cancel');
    var doneBtn = document.getElementById('fb-done');
    var submitBtn = document.getElementById('fb-submit');
    var descField = document.getElementById('fb-description');
    var emailInput = document.getElementById('fb-email');

    function closeModal() {
      overlay.classList.add('hidden');
      setTimeout(function () {
        descField.value = '';
        document.getElementById('fb-category').value = 'Bug';
        document.getElementById('fb-form-step').classList.remove('hidden');
        document.getElementById('fb-success').classList.add('hidden');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Feedback';
      }, 300);
    }

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    doneBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closeModal();
    });

    submitBtn.addEventListener('click', function () {
      var desc = descField.value.trim();
      if (!desc) {
        descField.style.borderColor = '#ef4444';
        descField.focus();
        return;
      }
      descField.style.borderColor = '';

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      var email = emailInput.value.trim();
      if (email) localStorage.setItem(EMAIL_KEY, email);

      var ctx = getContext();
      var data = {
        type: 'feedback',
        timestamp: new Date().toISOString(),
        category: document.getElementById('fb-category').value,
        description: desc,
        email: email,
        tab: ctx.tab,
        lastSearch: ctx.lastSearch,
        filters: ctx.filters,
        screen: ctx.screen,
        device: ctx.device,
        online: ctx.online
      };

      submitFeedback(data).then(function (result) {
        document.getElementById('fb-form-step').classList.add('hidden');
        var successEl = document.getElementById('fb-success');
        var subEl = document.getElementById('fb-success-sub');
        if (result.status === 'queued') {
          subEl.textContent = 'You\'re offline \u2014 feedback saved and will send when you\'re back online.';
        } else {
          subEl.textContent = 'Thanks for helping improve the app.';
        }
        successEl.classList.remove('hidden');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Feedback';
      });
    });
  }

  // ── Escape utility ─────────────────────────────────────
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ── PUBLIC: Open feedback modal ────────────────────────
  window.openFeedback = function () {
    if (!modalCreated) createModal();
    var overlay = document.getElementById('feedback-overlay');

    // Refresh email
    var emailInput = document.getElementById('fb-email');
    if (emailInput) {
      emailInput.value = localStorage.getItem(EMAIL_KEY) || '';
    }

    // Show context preview
    var ctx = getContext();
    var preview = document.getElementById('fb-context-preview');
    if (preview) {
      preview.innerHTML =
        '<div class="fb-ctx-title">Auto-captured context:</div>' +
        '<div class="fb-ctx-items">' +
          '<span class="fb-ctx-tag">Tab: ' + ctx.tab + '</span>' +
          (ctx.lastSearch ? '<span class="fb-ctx-tag">Search: "' + escapeHtml(ctx.lastSearch) + '"</span>' : '') +
          (ctx.filters ? '<span class="fb-ctx-tag">Filters: ' + escapeHtml(ctx.filters) + '</span>' : '') +
          '<span class="fb-ctx-tag">Screen: ' + ctx.screen + '</span>' +
        '</div>';
    }

    overlay.classList.remove('hidden');
    setTimeout(function () {
      document.getElementById('fb-description').focus();
    }, 150);
  };

})();
