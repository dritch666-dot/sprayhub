// ─────────────────────────────────────────────────────────
// USAGE ANALYTICS (v1)
// Lightweight event tracking — batches events in memory and
// flushes to Google Sheet every 30s or on page unload.
// No user identification. Just event counts and patterns.
// ─────────────────────────────────────────────────────────

(function () {
  'use strict';

  var DEFAULT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzpD4pwShiS_7R5CS_5uaN19j-UMJ4agHvP8vJQk-4G5Sq8J8tYkyzyH1yRTCFyoY1Z/exec';
  var ENDPOINT = localStorage.getItem('labelRequestEndpoint') || DEFAULT_ENDPOINT;
  var BATCH_KEY = 'analyticsBatch';
  var SESSION_KEY = 'analyticsSession';
  var FLUSH_INTERVAL = 30000; // 30 seconds

  // ── SESSION ID (anonymous, rotates daily) ──────────────
  function getSessionId() {
    try {
      var stored = JSON.parse(localStorage.getItem(SESSION_KEY) || '{}');
      var today = new Date().toISOString().split('T')[0];
      if (stored.date === today && stored.id) return stored.id;
      var id = 's_' + today + '_' + Math.random().toString(36).substr(2, 6);
      localStorage.setItem(SESSION_KEY, JSON.stringify({ date: today, id: id }));
      return id;
    } catch (e) {
      return 's_' + Date.now();
    }
  }

  // ── EVENT BUFFER ───────────────────────────────────────
  var buffer = [];
  var sessionId = getSessionId();

  // Load any unflushed events from previous session
  try {
    var stored = JSON.parse(localStorage.getItem(BATCH_KEY) || '[]');
    if (Array.isArray(stored)) buffer = stored;
  } catch (e) { buffer = []; }

  function saveBuffer() {
    try {
      localStorage.setItem(BATCH_KEY, JSON.stringify(buffer));
    } catch (e) { /* storage full — drop oldest */ buffer = buffer.slice(-50); }
  }

  // ── TRACK EVENT ────────────────────────────────────────
  function trackEvent(action, detail) {
    buffer.push({
      type: 'analytics',
      session: sessionId,
      timestamp: new Date().toISOString(),
      action: action,
      detail: (detail || '').substring(0, 200),
      screen: window.innerWidth + 'x' + window.innerHeight
    });
    saveBuffer();
  }

  // ── FLUSH TO SHEETS ────────────────────────────────────
  var flushing = false;

  function flush() {
    if (flushing || buffer.length === 0 || !ENDPOINT) return;
    flushing = true;

    // Take a snapshot of current buffer
    var batch = buffer.slice();
    buffer = [];
    saveBuffer();

    // Send as a single batch POST
    var data = {
      type: 'analytics-batch',
      events: batch
    };

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data),
      mode: 'no-cors'
    }).then(function () {
      flushing = false;
    }).catch(function () {
      // Put events back
      buffer = batch.concat(buffer);
      saveBuffer();
      flushing = false;
    });
  }

  // Periodic flush
  setInterval(flush, FLUSH_INTERVAL);

  // Flush on page unload
  window.addEventListener('beforeunload', function () {
    if (buffer.length === 0) return;
    var data = { type: 'analytics-batch', events: buffer };
    // Use sendBeacon for reliability on unload
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, JSON.stringify(data));
      buffer = [];
      saveBuffer();
    }
  });

  // Flush when coming back online
  window.addEventListener('online', function () {
    setTimeout(flush, 2000);
  });

  // ── AUTO-TRACK COMMON EVENTS ───────────────────────────
  document.addEventListener('DOMContentLoaded', function () {

    // Track page load
    trackEvent('page_load', document.title);

    // Track search queries (debounced)
    var searchTimeout = null;
    var searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(function () {
          var q = searchInput.value.trim();
          if (q.length >= 2) {
            trackEvent('search', q);
          }
        }, 1500); // Only log after 1.5s pause (they've stopped typing)
      });
    }

    // Track tab switches
    var origSwitch = window.switchAgriSubTab;
    if (typeof origSwitch === 'function') {
      window.switchAgriSubTab = function (tab) {
        trackEvent('tab_switch', tab);
        return origSwitch.apply(this, arguments);
      };
    }

    // Track product detail views
    var origShowDetail = window.showProductDetail;
    if (typeof origShowDetail === 'function') {
      window.showProductDetail = function () {
        var productName = arguments[0] || '';
        trackEvent('product_view', typeof productName === 'string' ? productName : '');
        return origShowDetail.apply(this, arguments);
      };
    }

    // Track calculator use via form submits
    var calcBtns = document.querySelectorAll('[onclick*="calculate"], [onclick*="Calculate"]');
    calcBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var label = btn.textContent || btn.getAttribute('aria-label') || 'calc';
        trackEvent('calculator_use', label.trim().substring(0, 50));
      });
    });

    // Track category pill clicks
    document.addEventListener('click', function (e) {
      var pill = e.target.closest('.category-pill');
      if (pill) {
        trackEvent('category_filter', pill.textContent.trim());
      }
    });

    // Track filter usage
    var cropInput = document.getElementById('crop-filter-input');
    var pestInput = document.getElementById('pest-filter-input');
    if (cropInput) {
      cropInput.addEventListener('change', function () {
        if (cropInput.value) trackEvent('crop_filter', cropInput.value);
      });
    }
    if (pestInput) {
      pestInput.addEventListener('change', function () {
        if (pestInput.value) trackEvent('pest_filter', pestInput.value);
      });
    }

    // Track label request opens
    var origOpenLR = window.openLabelRequest;
    if (typeof origOpenLR === 'function') {
      window.openLabelRequest = function () {
        trackEvent('label_request_open', arguments[0] || '');
        return origOpenLR.apply(this, arguments);
      };
    }

    // Track feedback opens
    var origOpenFB = window.openFeedback;
    if (typeof origOpenFB === 'function') {
      window.openFeedback = function () {
        trackEvent('feedback_open', '');
        return origOpenFB.apply(this, arguments);
      };
    }

    // Track PDF views
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href*=".pdf"]');
      if (link) {
        trackEvent('pdf_view', link.href.split('/').pop());
      }
    });

    // Initial flush after 5 seconds
    setTimeout(flush, 5000);
  });

  // ── PUBLIC API ─────────────────────────────────────────
  window.trackAnalytics = trackEvent;

})();
