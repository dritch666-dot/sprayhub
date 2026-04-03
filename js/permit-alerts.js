// ─────────────────────────────────────────────────────────
// PERMIT EXPIRY ALERTS (v1)
// Scans permitsRegistry for expiring permits and shows
// an alert badge + panel in the app. Also provides data
// for the Apps Script weekly email trigger.
// ─────────────────────────────────────────────────────────

(function () {
  'use strict';

  var ALERTS_KEY = 'permitAlertsDismissed';

  // ── PARSE PERMIT DATE ──────────────────────────────────
  // Permit dates come as "31 July 2029" or "30-Jun-2025" etc.
  function parsePermitDate(dateStr) {
    if (!dateStr) return null;
    var d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d;
    // Try "DD Month YYYY" manually
    var parts = dateStr.replace(/-/g, ' ').split(/\s+/);
    if (parts.length >= 3) {
      var rebuilt = parts[1] + ' ' + parts[0] + ', ' + parts[2];
      d = new Date(rebuilt);
      if (!isNaN(d.getTime())) return d;
    }
    return null;
  }

  // ── DAYS UNTIL EXPIRY ──────────────────────────────────
  function daysUntil(dateStr) {
    var d = parsePermitDate(dateStr);
    if (!d) return null;
    var now = new Date();
    now.setHours(0, 0, 0, 0);
    d.setHours(0, 0, 0, 0);
    return Math.floor((d - now) / 86400000);
  }

  // ── GET EXPIRING PERMITS ───────────────────────────────
  function getExpiringPermits(withinDays) {
    if (!window.permitsRegistry || !window.permitsRegistry.permits) return [];

    var results = [];
    var permits = window.permitsRegistry.permits;

    for (var i = 0; i < permits.length; i++) {
      var p = permits[i];
      var days = daysUntil(p.expiryDate);
      if (days !== null && days >= 0 && days <= withinDays) {
        results.push({
          permitNumber: p.permitNumber,
          expiryDate: p.expiryDate,
          daysLeft: days,
          products: p.products || [],
          crops: p.crops || [],
          pests: p.pests || [],
          activeIngredients: p.activeIngredients || [],
          appProducts: p.appProducts || []
        });
      }
    }

    // Sort by soonest first
    results.sort(function (a, b) { return a.daysLeft - b.daysLeft; });
    return results;
  }

  // ── GET RECENTLY EXPIRED ───────────────────────────────
  function getRecentlyExpired(withinDays) {
    if (!window.permitsRegistry || !window.permitsRegistry.permits) return [];

    var results = [];
    var permits = window.permitsRegistry.permits;

    for (var i = 0; i < permits.length; i++) {
      var p = permits[i];
      var days = daysUntil(p.expiryDate);
      if (days !== null && days < 0 && days >= -withinDays) {
        results.push({
          permitNumber: p.permitNumber,
          expiryDate: p.expiryDate,
          daysAgo: Math.abs(days),
          products: p.products || [],
          crops: p.crops || [],
          appProducts: p.appProducts || []
        });
      }
    }

    results.sort(function (a, b) { return a.daysAgo - b.daysAgo; });
    return results;
  }

  // ── DISMISSED STATE ────────────────────────────────────
  function getDismissed() {
    try { return JSON.parse(localStorage.getItem(ALERTS_KEY) || '{}'); }
    catch (e) { return {}; }
  }

  function dismissAlert(permitNumber) {
    var d = getDismissed();
    d[permitNumber] = new Date().toISOString().split('T')[0];
    localStorage.setItem(ALERTS_KEY, JSON.stringify(d));
  }

  // ── BUILD ALERTS PANEL ─────────────────────────────────
  function buildAlertsPanel() {
    var expiring30 = getExpiringPermits(30);
    var expiring90 = getExpiringPermits(90);
    var recentlyExpired = getRecentlyExpired(30);
    var dismissed = getDismissed();

    // Filter out dismissed
    var undismissed30 = expiring30.filter(function (p) { return !dismissed[p.permitNumber]; });

    // Update badge
    var badge = document.getElementById('permit-alerts-badge');
    if (badge) {
      var count = undismissed30.length;
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }

    return {
      expiring30: expiring30,
      expiring90: expiring90,
      recentlyExpired: recentlyExpired,
      undismissedCount: undismissed30.length
    };
  }

  // ── RENDER ALERTS MODAL ────────────────────────────────
  function createAlertsModal() {
    var overlay = document.createElement('div');
    overlay.id = 'permit-alerts-overlay';
    overlay.className = 'modal-overlay hidden';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Permit expiry alerts');

    overlay.innerHTML =
      '<div class="label-request-modal pa-modal">' +
        '<div class="label-request-header">' +
          '<div class="label-request-header-icon">⚠️</div>' +
          '<h3 class="label-request-title">Permit Expiry Alerts</h3>' +
          '<p class="label-request-subtitle">Permits expiring soon or recently expired.</p>' +
          '<button class="close-modal-btn" id="close-permit-alerts" aria-label="Close">&times;</button>' +
        '</div>' +
        '<div class="label-request-form" id="pa-content"></div>' +
      '</div>';

    document.body.appendChild(overlay);

    document.getElementById('close-permit-alerts').addEventListener('click', function () {
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

  function renderAlerts() {
    var data = buildAlertsPanel();
    var container = document.getElementById('pa-content');
    if (!container) return;

    var html = '';

    // Expiring within 30 days
    if (data.expiring30.length > 0) {
      html += '<div class="pa-section">';
      html += '<h4 class="pa-section-title pa-urgent">Expiring within 30 days (' + data.expiring30.length + ')</h4>';
      data.expiring30.forEach(function (p) {
        html += renderPermitCard(p, 'urgent');
      });
      html += '</div>';
    }

    // Expiring 31-90 days
    var expiring31to90 = data.expiring90.filter(function (p) { return p.daysLeft > 30; });
    if (expiring31to90.length > 0) {
      html += '<div class="pa-section">';
      html += '<h4 class="pa-section-title pa-warning">Expiring 31-90 days (' + expiring31to90.length + ')</h4>';
      expiring31to90.forEach(function (p) {
        html += renderPermitCard(p, 'warning');
      });
      html += '</div>';
    }

    // Recently expired
    if (data.recentlyExpired.length > 0) {
      html += '<div class="pa-section">';
      html += '<h4 class="pa-section-title pa-expired">Recently expired (' + data.recentlyExpired.length + ')</h4>';
      data.recentlyExpired.forEach(function (p) {
        html += '<div class="pa-card pa-card-expired">' +
          '<div class="pa-card-header">' +
            '<span class="pa-permit-num">' + p.permitNumber + '</span>' +
            '<span class="pa-days-tag pa-tag-expired">Expired ' + p.daysAgo + 'd ago</span>' +
          '</div>' +
          '<div class="pa-card-detail">' + p.products.slice(0, 2).join(', ') + '</div>' +
          (p.crops.length ? '<div class="pa-card-crops">' + p.crops.slice(0, 4).join(', ') + '</div>' : '') +
        '</div>';
      });
      html += '</div>';
    }

    if (html === '') {
      html = '<div class="pa-empty">No permits expiring within 90 days. All good!</div>';
    }

    container.innerHTML = html;
  }

  function renderPermitCard(p, level) {
    var tagClass = level === 'urgent' ? 'pa-tag-urgent' : 'pa-tag-warning';
    var daysText = p.daysLeft === 0 ? 'Expires TODAY' :
                   p.daysLeft === 1 ? 'Expires tomorrow' :
                   p.daysLeft + ' days left';
    var linkedText = p.appProducts.length > 0 ? ' · ' + p.appProducts.length + ' linked product' + (p.appProducts.length > 1 ? 's' : '') : '';

    return '<div class="pa-card">' +
      '<div class="pa-card-header">' +
        '<span class="pa-permit-num">' + p.permitNumber + '</span>' +
        '<span class="pa-days-tag ' + tagClass + '">' + daysText + '</span>' +
      '</div>' +
      '<div class="pa-card-detail">' + p.products.slice(0, 2).join(', ') + linkedText + '</div>' +
      '<div class="pa-card-meta">' +
        '<span>Expires: ' + p.expiryDate + '</span>' +
        (p.crops.length ? ' · Crops: ' + p.crops.slice(0, 3).join(', ') : '') +
      '</div>' +
    '</div>';
  }

  // ── PUBLIC API ─────────────────────────────────────────
  window.openPermitAlerts = function () {
    if (!document.getElementById('permit-alerts-overlay')) {
      createAlertsModal();
    }
    renderAlerts();
    document.getElementById('permit-alerts-overlay').classList.remove('hidden');
  };

  window.getPermitAlertCount = function () {
    var data = buildAlertsPanel();
    return data.undismissedCount;
  };

  window.getExpiringPermitsData = function (days) {
    return getExpiringPermits(days || 90);
  };

  // ── INIT: Update badge on load ─────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    // Slight delay to let permits registry load
    setTimeout(function () {
      buildAlertsPanel();
    }, 500);
  });

})();
