// ALA Species Search — Live search against Atlas of Living Australia API
// Adds online species lookup when local registry returns zero results.
// 153,000+ Australian species · free API · no auth required.
// This file is purely additive — no existing code paths are modified.

(function () {
  'use strict';

  var ALA_SEARCH_URL = 'https://api.ala.org.au/species/search';
  var ALA_IMAGE_BASE = 'https://images.ala.org.au/image/';
  var ALA_SPECIES_BASE = 'https://bie.ala.org.au/species/';

  // ── Public API ─────────────────────────────────────────────
  // Called from the zero-results blocks in weeds-ui, pests-ui, diseases-ui
  window.alaSearch = function (query, type) {
    if (!query || query.trim().length < 2) return;
    var containerId = type + '-ala-results';
    var btnId = type + '-ala-btn';
    var btn = document.getElementById(btnId);
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<span class="ala-spinner"></span> Searching ALA...';
    }

    // Map type to ALA kingdom/group filters
    var fq = '';
    if (type === 'weeds') fq = '&fq=speciesGroup:Plants';
    else if (type === 'pests') fq = '&fq=speciesGroup:Insects+OR+speciesGroup:Arthropods+OR+speciesGroup:Molluscs+OR+speciesGroup:Animals';
    else if (type === 'diseases') fq = '&fq=speciesGroup:Fungi+OR+speciesGroup:Chromista+OR+speciesGroup:Bacteria';

    var url = ALA_SEARCH_URL + '?q=' + encodeURIComponent(query.trim()) + '&fq=idxtype:TAXON&pageSize=12' + fq;

    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('ALA returned ' + res.status);
        return res.json();
      })
      .then(function (data) {
        renderAlaResults(data, query, type, containerId);
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = '🌏 Search ALA Australia';
        }
      })
      .catch(function (err) {
        var container = document.getElementById(containerId);
        if (container) {
          container.innerHTML = '<div style="text-align:center;padding:16px;color:var(--text-sub,#64748b);font-size:0.85rem;">'
            + '⚠️ Could not reach ALA — check your internet connection.'
            + '</div>';
        }
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = '🌏 Search ALA Australia';
        }
        console.warn('ALA search failed:', err.message);
      });
  };

  // ── Render results ─────────────────────────────────────────
  function renderAlaResults(data, query, type, containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var results = (data.searchResults || data.results || []);

    // Filter to actual species/subspecies (skip higher taxa)
    results = results.filter(function (r) {
      var rank = (r.rank || '').toLowerCase();
      return rank === 'species' || rank === 'subspecies' || rank === 'variety' || rank === 'genus';
    });

    if (results.length === 0) {
      container.innerHTML = '<div style="text-align:center;padding:16px;color:var(--text-sub,#64748b);font-size:0.85rem;">'
        + 'No species found on ALA for "' + escHtml(query) + '".'
        + '</div>';
      return;
    }

    var heading = '<div style="padding:8px 12px;font-weight:600;font-size:0.9rem;color:var(--text,#1e293b);border-bottom:1px solid var(--border,#e2e8f0);">'
      + '🌏 ALA Results <span style="font-weight:400;color:var(--text-sub,#64748b);font-size:0.8rem;">(' + results.length + ' species · live from Atlas of Living Australia)</span>'
      + '</div>';

    var cards = results.map(function (r) {
      return buildAlaCard(r, query, type);
    }).join('');

    container.innerHTML = heading + '<div class="ala-results-grid">' + cards + '</div>';
  }

  // ── Build a single ALA species card ────────────────────────
  function buildAlaCard(r, query, type) {
    var name = r.commonNameSingle || r.commonName || '';
    var sciName = r.name || r.scientificName || '';
    var family = r.family || '';
    var kingdom = r.kingdom || '';
    var rank = r.rank || '';
    var guid = r.guid || r.id || '';

    // Image
    var imgHtml = '';
    if (r.smallImageUrl || r.thumbnailUrl || r.imageUrl) {
      var imgSrc = r.smallImageUrl || r.thumbnailUrl || r.imageUrl;
      imgHtml = '<div class="ala-card-img">'
        + '<img src="' + escHtml(imgSrc) + '" alt="' + escHtml(name || sciName) + '" loading="lazy" onerror="this.parentElement.style.display=\'none\'">'
        + '</div>';
    }

    // ALA profile link
    var profileUrl = guid ? ALA_SPECIES_BASE + encodeURIComponent(guid) : '';

    // Badges
    var badges = '';
    if (family) badges += '<span class="ala-badge ala-badge-family">' + escHtml(family) + '</span>';
    if (kingdom) badges += '<span class="ala-badge ala-badge-kingdom">' + escHtml(kingdom) + '</span>';
    if (rank) badges += '<span class="ala-badge ala-badge-rank">' + escHtml(rank) + '</span>';

    // Conservation status
    var statusHtml = '';
    if (r.conservationStatuses && Object.keys(r.conservationStatuses).length > 0) {
      var statuses = Object.values(r.conservationStatuses);
      statusHtml = '<div class="ala-status">' + statuses.map(function (s) {
        return '<span class="ala-badge ala-badge-status">' + escHtml(String(s)) + '</span>';
      }).join('') + '</div>';
    }

    return '<div class="ala-card">'
      + imgHtml
      + '<div class="ala-card-body">'
      + '<div class="ala-card-title">' + hlAla(name || sciName, query) + '</div>'
      + (name && sciName ? '<div class="ala-card-sci">' + hlAla(sciName, query) + '</div>' : '')
      + '<div class="ala-card-badges">' + badges + '</div>'
      + statusHtml
      + (profileUrl ? '<a href="' + escHtml(profileUrl) + '" target="_blank" rel="noopener" class="ala-profile-link">🌏 View ALA Profile</a>' : '')
      + '</div>'
      + '</div>';
  }

  // ── Helpers ────────────────────────────────────────────────
  function escHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function hlAla(text, query) {
    if (!query || !text) return escHtml(text);
    var safe = escHtml(text);
    var terms = query.trim().split(/\s+/).filter(function (t) { return t.length > 1; });
    terms.forEach(function (term) {
      var re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      safe = safe.replace(re, '<mark>$1</mark>');
    });
    return safe;
  }

})();