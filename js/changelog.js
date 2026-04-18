// ─────────────────────────────────────────────────────────
// PRODUCT UPDATE CHANGELOG (v1)
// Shows "What's New" panel with recent changes to the app.
// Data is stored inline (updated during builds) and can
// optionally fetch from a published Google Sheet CSV.
// Badge shows count of unseen updates.
// ─────────────────────────────────────────────────────────

(function () {
  'use strict';

  var SEEN_KEY = 'changelogLastSeen';

  // ── CHANGELOG DATA (updated during builds) ─────────────
  // Add newest entries at the TOP of this array.
  // type: 'new-label' | 'permit-update' | 'sds-added' | 'feature' | 'fix' | 'data-correction'
  var changelogEntries = [
    {
      date: '2026-04-03',
      type: 'new-label',
      title: 'Adama Priority® Herbicide Added',
      description: 'Group 2 (Florasulam) broadleaf herbicide for cereals, ryegrass pastures and fallow. 72 weed entries across 3 crop sections, 65 unique weeds linked. SDS included.'
    },
    {
      date: '2026-04-03',
      type: 'feature',
      title: 'Google Sheets Integration Suite',
      description: 'Added feedback system, usage analytics, permit expiry alerts, product changelog, and label extraction queue. Label requests now collect optional email for notifications.'
    },
    {
      date: '2026-04-03',
      type: 'feature',
      title: 'Label Request System v2',
      description: 'Label requests now search the APVMA registry. Only products not already in the app can be requested. Auto-fills product details from PubCRIS.'
    },
    {
      date: '2026-04-02',
      type: 'new-label',
      title: 'Build 187 — 4 New Labels',
      description: 'Added Campbell Lonhro 100WG, Campbell Poachek, BASF Termidor Residual, Kenso Ethephon 720.'
    },
    {
      date: '2026-04-01',
      type: 'feature',
      title: 'Identify Tab — Pests & Diseases',
      description: 'Added Pests (529 entries) and Diseases (497 entries) identification tabs with linked product search.'
    },
    {
      date: '2026-03-30',
      type: 'feature',
      title: 'Identify Tab — Weeds',
      description: 'Added 771 weeds with botanical data, filter pills (leaf arrangement, flower color, control methods), and linked product buttons.'
    }
  ];

  // ── TYPE ICONS & COLORS ────────────────────────────────
  var typeConfig = {
    'new-label':       { icon: '📋', color: '#16a34a', label: 'New Label' },
    'permit-update':   { icon: '📄', color: '#0284c7', label: 'Permit Update' },
    'sds-added':       { icon: '🛡️', color: '#7e22ce', label: 'SDS Added' },
    'feature':         { icon: '✨', color: '#ea580c', label: 'Feature' },
    'fix':             { icon: '🔧', color: '#dc2626', label: 'Bug Fix' },
    'data-correction': { icon: '📝', color: '#ca8a04', label: 'Data Correction' }
  };

  // ── UNSEEN COUNT ───────────────────────────────────────
  function getLastSeen() {
    return localStorage.getItem(SEEN_KEY) || '2000-01-01';
  }

  function markSeen() {
    localStorage.setItem(SEEN_KEY, new Date().toISOString().split('T')[0]);
    updateBadge();
  }

  function getUnseenCount() {
    var lastSeen = getLastSeen();
    var count = 0;
    for (var i = 0; i < changelogEntries.length; i++) {
      if (changelogEntries[i].date > lastSeen) count++;
      else break; // entries are newest-first, so we can stop
    }
    return count;
  }

  function updateBadge() {
    var badge = document.getElementById('changelog-badge');
    var count = getUnseenCount();
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
  }

  // ── BUILD MODAL ────────────────────────────────────────
  var modalCreated = false;

  function createModal() {
    if (modalCreated) return;
    modalCreated = true;

    var overlay = document.createElement('div');
    overlay.id = 'changelog-overlay';
    overlay.className = 'modal-overlay hidden';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'What\'s New');

    overlay.innerHTML =
      '<div class="label-request-modal cl-modal">' +
        '<div class="label-request-header">' +
          '<div class="label-request-header-icon">📰</div>' +
          '<h3 class="label-request-title">What\'s New</h3>' +
          '<p class="label-request-subtitle">Recent updates to Product Label Search</p>' +
          '<button class="close-modal-btn" id="close-changelog" aria-label="Close">&times;</button>' +
        '</div>' +
        '<div class="label-request-form cl-entries" id="cl-entries"></div>' +
      '</div>';

    document.body.appendChild(overlay);

    document.getElementById('close-changelog').addEventListener('click', function () {
      overlay.classList.add('hidden');
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.classList.add('hidden');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
        overlay.classList.add('hidden');
      }
    });
  }

  function renderEntries() {
    var container = document.getElementById('cl-entries');
    if (!container) return;

    var lastSeen = getLastSeen();
    var html = '';

    changelogEntries.forEach(function (entry) {
      var cfg = typeConfig[entry.type] || typeConfig['feature'];
      var isNew = entry.date > lastSeen;

      html += '<div class="cl-entry' + (isNew ? ' cl-entry-new' : '') + '">' +
        '<div class="cl-entry-header">' +
          '<span class="cl-entry-icon">' + cfg.icon + '</span>' +
          '<span class="cl-entry-type" style="color:' + cfg.color + ';background:' + cfg.color + '14;">' + cfg.label + '</span>' +
          '<span class="cl-entry-date">' + formatDate(entry.date) + '</span>' +
          (isNew ? '<span class="cl-new-badge">NEW</span>' : '') +
        '</div>' +
        '<div class="cl-entry-title">' + escapeHtml(entry.title) + '</div>' +
        '<div class="cl-entry-desc">' + escapeHtml(entry.description) + '</div>' +
      '</div>';
    });

    if (html === '') {
      html = '<div class="pa-empty">No updates yet.</div>';
    }

    container.innerHTML = html;
  }

  function formatDate(dateStr) {
    var d = new Date(dateStr + 'T00:00:00');
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ── PUBLIC API ─────────────────────────────────────────
  window.openChangelog = function () {
    if (!modalCreated) createModal();
    renderEntries();
    document.getElementById('changelog-overlay').classList.remove('hidden');
    markSeen();
  };

  window.getChangelogUnseenCount = function () {
    return getUnseenCount();
  };

  // Add a new changelog entry programmatically (for Claude use during builds)
  window.addChangelogEntry = function (entry) {
    changelogEntries.unshift(entry);
    updateBadge();
  };

  // ── INIT ───────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(updateBadge, 300);
  });

})();
