// Diseases UI — search, filter, and render disease identification cards
// 497 diseases with text search + multi-select disease type filters

(function () {
  'use strict';

  // ── Filter state ──────────────────────────────────────────
  var activeDiseaseType = {};   // key: disease type value, val: true

  // ── Constants ─────────────────────────────────────────────
  var DISEASE_TYPE_ICONS = {
    'Fungal': '🍄', 'Oomycete': '💧', 'Bacterial': '🦠', 'Viral': '🧬'
  };

  var DISEASE_TYPE_COLORS = {
    'Fungal':     { bg: '#e0f2fe', text: '#075985', border: '#7dd3fc' },
    'Oomycete':   { bg: '#f0fdf4', text: '#166534', border: '#86efac' },
    'Bacterial':  { bg: '#fef3c7', text: '#92400e', border: '#fcd34d' },
    'Viral':      { bg: '#fce7f3', text: '#9d174d', border: '#f9a8d4' }
  };

  // ── Plural / stem helper (matches Labels tab logic) ──────
  function pluralForms(tok) {
    var forms = [tok];
    if (tok.endsWith('ies') && tok.length > 4) forms.push(tok.slice(0, -3) + 'y');
    else if (tok.endsWith('ves') && tok.length > 4) forms.push(tok.slice(0, -3) + 'f');
    else if (tok.endsWith('shes') || tok.endsWith('ches') || tok.endsWith('xes') || tok.endsWith('sses') || tok.endsWith('zes')) forms.push(tok.slice(0, -2));
    else if (tok.endsWith('oes') && tok.length > 4) forms.push(tok.slice(0, -2));
    if (tok.endsWith('s') && !tok.endsWith('ss') && tok.length > 3) forms.push(tok.slice(0, -1));
    if (!tok.endsWith('s')) {
      if (tok.endsWith('sh') || tok.endsWith('ch') || tok.endsWith('x') || tok.endsWith('ss') || tok.endsWith('z')) forms.push(tok + 'es');
      else if (tok.endsWith('y') && tok.length > 2 && !'aeiou'.includes(tok[tok.length - 2])) forms.push(tok.slice(0, -1) + 'ies');
      else forms.push(tok + 's');
    }
    var seen = {};
    return forms.filter(function (f) { if (seen[f] || f.length < 2) return false; seen[f] = true; return true; });
  }

  function normalise(str) {
    return str.replace(/-/g, ' ').toLowerCase();
  }

  function parseSearchTokens(raw) {
    if (!raw) return [];
    var tokens = [];
    var remaining = raw;
    var quoteRe = /"([^"]+)"/g;
    var match;
    while ((match = quoteRe.exec(remaining)) !== null) {
      tokens.push(match[1].trim().toLowerCase());
    }
    remaining = remaining.replace(quoteRe, ' ');
    var pctRe = /(\S+(%\S+)+)/g;
    while ((match = pctRe.exec(remaining)) !== null) {
      tokens.push(match[1].replace(/%/g, ' ').trim().toLowerCase());
    }
    remaining = remaining.replace(pctRe, ' ');
    remaining.trim().split(/\s+/).forEach(function (w) {
      if (w) tokens.push(w.toLowerCase());
    });
    return tokens;
  }

  function hl(text, query) {
    if (!query || !text) return text || '';
    var clean = query.replace(/%/g, ' ').replace(/"/g, '');
    var terms = clean.trim().toLowerCase().split(/\s+/);
    var result = text;
    terms.forEach(function (term) {
      if (!term) return;
      var escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      var re = new RegExp('(' + escaped + ')', 'gi');
      result = result.replace(re, '<mark>$1</mark>');
    });
    return result;
  }

  // ── Build filter pill rows ────────────────────────────────
  function buildFilterPills() {
    var typeRow = document.getElementById('diseases-type-pills');
    if (typeRow) {
      var types = ['Fungal', 'Oomycete', 'Bacterial', 'Viral'];
      typeRow.innerHTML = types.map(function (t) {
        return '<button class="disease-pill disease-pill-type" data-value="' + t + '" onclick="toggleDiseasePill(this,\'type\')">'
          + (DISEASE_TYPE_ICONS[t] || '🦠') + ' ' + t + '</button>';
      }).join('');
    }
  }

  // ── Toggle pill selection ─────────────────────────────────
  window.toggleDiseasePill = function (btn, type) {
    var val = btn.getAttribute('data-value');
    var map = activeDiseaseType;

    if (map[val]) {
      delete map[val];
      btn.classList.remove('active');
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    } else {
      map[val] = true;
      btn.classList.add('active');
      var tc = DISEASE_TYPE_COLORS[val];
      if (tc) {
        btn.style.background = tc.border;
        btn.style.borderColor = tc.border;
        btn.style.color = '#fff';
      }
    }
    updateDiseaseFilterBadge();
    runDiseasesSearch();
  };

  // ── Clear all filters ─────────────────────────────────────
  window.clearAllDiseaseFilters = function () {
    activeDiseaseType = {};
    document.querySelectorAll('.disease-pill.active').forEach(function (p) {
      p.classList.remove('active');
      p.style.background = '';
      p.style.borderColor = '';
      p.style.color = '';
    });
    var input = document.getElementById('diseases-search-input');
    if (input) input.value = '';
    updateDiseaseFilterBadge();
    runDiseasesSearch();
  };

  // ── Active filter badge ───────────────────────────────────
  function updateDiseaseFilterBadge() {
    var bar = document.getElementById('diseases-filter-bar');
    if (!bar) return;
    var count = Object.keys(activeDiseaseType).length;
    var input = document.getElementById('diseases-search-input');
    var hasText = input && input.value.trim();
    if (count === 0 && !hasText) {
      bar.style.display = 'none';
      return;
    }
    var parts = [];
    if (hasText) parts.push('Text: "' + input.value.trim() + '"');
    if (Object.keys(activeDiseaseType).length) parts.push('Type: ' + Object.keys(activeDiseaseType).join(', '));
    bar.style.display = 'flex';
    bar.innerHTML = '<span class="disease-filter-badge">' + count + ' filter' + (count !== 1 ? 's' : '') + ' active</span>'
      + '<span class="disease-filter-desc">' + parts.join(' · ') + '</span>'
      + '<button class="disease-filter-clear" onclick="clearAllDiseaseFilters()">Clear all ✕</button>';
  }

  // ── Search + filter logic ─────────────────────────────────
  window.runDiseasesSearch = function () {
    var registry = window.diseasesRegistry;
    if (!registry) return;

    var input = document.getElementById('diseases-search-input');
    var rawQ = input ? input.value.trim() : '';
    var preNorm = rawQ.replace(/-/g, ' ');
    var terms = parseSearchTokens(preNorm);
    var q = normalise(rawQ);

    var typeKeys = Object.keys(activeDiseaseType);

    var results = registry.filter(function (d) {
      // Text search
      if (terms.length > 0) {
        var linkedStr = (d.linkedProducts || []).map(function (lp) {
          return (lp.productName || '') + ' ' + (lp.productId || '');
        }).join(' ');
        var rawBlob = [
          d.commonName || '', d.scientificName || '', d.diseaseType || '',
          (d.cropsAffected || []).join(' '),
          d.symptoms || '', d.favourableConditions || '',
          (d.controlMethods || []).join(' '),
          linkedStr
        ].join(' ');
        var blob = normalise(rawBlob);
        var blobClean = blob.replace(/[''\u2019]s\b/g, '').replace(/[''\u2019`]/g, '');
        var blobNoSpaces = blob.replace(/\s+/g, '');
        var blobCleanNoSpaces = blobClean.replace(/\s+/g, '');

        var textMatch = terms.every(function (t) {
          var tClean = t.replace(/['\u2019]s\b/g, '').replace(/['\u2019`]/g, '');
          if (blob.includes(t) || blobClean.includes(tClean)) return true;
          if (t.length > 3 && (blobNoSpaces.includes(t) || blobCleanNoSpaces.includes(tClean))) return true;
          var forms = pluralForms(t);
          var formsClean = pluralForms(tClean);
          return forms.some(function (f) {
            return blob.includes(f) || (f.length > 3 && blobNoSpaces.includes(f));
          }) || formsClean.some(function (f) {
            return blobClean.includes(f) || (f.length > 3 && blobCleanNoSpaces.includes(f));
          });
        });
        if (!textMatch) return false;
      }

      // Disease type filter: OR within
      if (typeKeys.length > 0) {
        if (!typeKeys.includes(d.diseaseType)) return false;
      }

      return true;
    });

    renderDiseaseResults(results, q);
    updateDiseaseFilterBadge();
  };

  // ── Clear search input ────────────────────────────────────
  window.clearDiseasesSearch = function () {
    var input = document.getElementById('diseases-search-input');
    if (input) input.value = '';
    if (window._productNavSource) window._productNavSource.active = false;
    updateDiseaseFilterBadge();
    runDiseasesSearch();
  };

  // ── Render result cards ───────────────────────────────────
  function renderDiseaseResults(results, query) {
    var container = document.getElementById('diseases-results');
    var countEl = document.getElementById('diseases-result-count');
    if (!container) return;

    if (countEl) {
      countEl.textContent = results.length + ' disease' + (results.length !== 1 ? 's' : '');
    }

    if (results.length === 0) {
      var hasFilters = Object.keys(activeDiseaseType).length > 0;
      container.innerHTML = '<div class="no-results" style="text-align:center;padding:40px 20px;">'
        + '<div style="font-size:2rem;margin-bottom:10px;">🦠</div>'
        + '<div style="font-weight:600;color:var(--text,#1e293b);margin-bottom:6px;">No diseases found</div>'
        + '<div style="color:var(--text-sub,#64748b);font-size:0.85rem;">'
        + (hasFilters || query ? 'Try removing some filters or changing your search terms.' : 'No disease data loaded.')
        + '</div>'
        + (hasFilters ? '<button onclick="clearAllDiseaseFilters()" style="margin-top:12px;padding:8px 16px;border-radius:8px;border:none;background:var(--primary,#16a34a);color:#fff;font-weight:600;cursor:pointer;">Clear all filters</button>' : '')
        + '</div>';
      return;
    }

    container.innerHTML = results.map(function (d, _idx) {
      // Disease type badge
      var tc = DISEASE_TYPE_COLORS[d.diseaseType] || { bg: '#f1f5f9', text: '#475569', border: '#cbd5e1' };
      var typeBadge = d.diseaseType
        ? '<span class="disease-badge disease-badge-type" style="background:' + tc.bg + ';color:' + tc.text + ';border:1px solid ' + tc.border + ';">'
          + (DISEASE_TYPE_ICONS[d.diseaseType] || '🦠') + ' ' + hl(d.diseaseType, query) + '</span>'
        : '';

      // Scientific name (pathogen)
      var sciName = d.scientificName
        ? '<div class="disease-sci-name">' + hl(d.scientificName, query) + '</div>'
        : '';

      // Crops affected chips
      var cropsSection = '';
      if (d.cropsAffected && d.cropsAffected.length > 0) {
        var cropChips = d.cropsAffected.slice(0, 6).map(function (c) {
          return '<span class="disease-crop-chip">' + hl(c, query) + '</span>';
        }).join('');
        var moreText = d.cropsAffected.length > 6 ? ' <span style="color:var(--text-sub);font-size:0.7rem;">+' + (d.cropsAffected.length - 6) + ' more</span>' : '';
        cropsSection = '<div class="disease-meta-row"><strong>Crops affected:</strong> ' + cropChips + moreText + '</div>';
      }

      // Symptoms
      var symptomsRow = d.symptoms
        ? '<div class="disease-meta-row"><strong>Symptoms:</strong> ' + hl(d.symptoms, query) + '</div>'
        : '';

      // Favourable conditions
      var conditionsRow = d.favourableConditions
        ? '<div class="disease-meta-row"><strong>Conditions:</strong> ' + hl(d.favourableConditions, query) + '</div>'
        : '';

      // Control methods
      var controlTags = (d.controlMethods || []).map(function (m) {
        return '<span class="disease-control-tag">' + hl(m, query) + '</span>';
      }).join('');

      // Linked products section
      var productsSection = '';
      if (d.linkedProducts && d.linkedProducts.length > 0) {
        var labelLinks = d.linkedProducts.filter(function (lp) { return lp.source !== 'permit'; });
        var permitLinks = d.linkedProducts.filter(function (lp) { return lp.source === 'permit'; });
        var safeDiseaseName = d.commonName.replace(/'/g, "\\'");

        var labelBtns = labelLinks.map(function (lp) {
          var cropsText = (lp.crops || []).length > 0 ? ' (' + (lp.crops || []).join(', ') + ')' : '';
          return '<button class="disease-product-btn" onclick="diseaseViewProduct(\'' + lp.productId + '\',\'' + safeDiseaseName + '\')" title="' + lp.productName + cropsText + '">'
            + '🏷️ ' + hl(lp.productName, query)
            + '</button>';
        }).join('');

        var permitBtns = permitLinks.map(function (lp) {
          var cropsText = (lp.crops || []).length > 0 ? ' — ' + (lp.crops || []).join(', ') : '';
          return '<button class="disease-product-btn disease-product-btn-permit" onclick="diseaseViewProduct(\'' + lp.productId + '\',\'' + safeDiseaseName + '\')" title="Permit: ' + (lp.permitNumber || '') + cropsText + '">'
            + '📋 ' + hl(lp.productName, query) + ' <span class="disease-permit-tag">' + (lp.permitNumber || 'Permit') + '</span>'
            + '</button>';
        }).join('');

        var labelSection = labelLinks.length > 0
          ? '<div class="disease-products-label">🏷️ On Label <span class="disease-products-count">' + labelLinks.length + '</span></div>'
            + '<div class="disease-products-list">' + labelBtns + '</div>'
          : '';

        var permitSection = permitLinks.length > 0
          ? '<div class="disease-products-label" style="margin-top:6px;">📋 APVMA Permits <span class="disease-products-count">' + permitLinks.length + '</span></div>'
            + '<div class="disease-products-list">' + permitBtns + '</div>'
          : '';

        productsSection = '<div class="disease-products-section">'
          + labelSection + permitSection
          + '</div>';
      }

      var backBtn = (window._productNavSource && window._productNavSource.active)
        ? '<button class="disease-back-btn" onclick="window.navigateBackToProduct()">← Back to ' + (window._productNavSource.productName || 'product').replace(/</g, '&lt;') + '</button>'
        : '';

      var thumbId = 'disease-thumb-' + _idx;
      var hasLocal = d.thumbnail ? true : false;
      var thumbHtml = hasLocal
        ? '<div class="wiki-thumb-wrap">'
          + '<img id="' + thumbId + '" class="wiki-thumb" src="' + d.thumbnail + '" alt="" loading="lazy" '
          + 'onerror="this.closest(\'.wiki-thumb-wrap\').style.display=\'none\'">'
          + '</div>'
        : '<div class="wiki-thumb-wrap" style="display:none;">'
          + '<img id="' + thumbId + '" class="wiki-thumb" alt="" loading="lazy" style="display:none;" '
          + 'onerror="this.closest(\'.wiki-thumb-wrap\').style.display=\'none\'">'
          + '</div>';

      return '<div class="disease-card' + (d.linkedProducts && d.linkedProducts.length > 0 ? ' disease-card-linked' : '') + '">'
        + backBtn
        + '<div class="disease-card-header">'
        + '<div class="disease-card-title">' + hl(d.commonName, query) + '</div>'
        + '<div class="disease-card-badges">' + typeBadge
        + (d.linkedProducts && d.linkedProducts.length > 0 ? '<span class="disease-badge disease-badge-linked">🏷️ ' + d.linkedProducts.length + ' product' + (d.linkedProducts.length !== 1 ? 's' : '') + '</span>' : '')
        + '</div>'
        + '</div>'
        + '<div class="disease-card-body">'
        + thumbHtml
        + '<div class="disease-card-details">'
        + sciName
        + cropsSection
        + symptomsRow
        + conditionsRow
        + (controlTags ? '<div class="disease-meta-row"><strong>Control:</strong> ' + controlTags + '</div>' : '')
        + productsSection
        + '</div>'
        + '</div>'
        + '<div class="disease-card-actions">'
        + '<a href="' + d.imageUrl + '" target="_blank" rel="noopener" class="disease-img-btn">📷 View Images</a>'
        + '</div>'
        + '</div>';
    }).join('');

    // Trigger Wikipedia/iNat thumbnail fetches for entries without local thumbs
    if (typeof getWikiThumb === 'function') {
      results.forEach(function (d, idx) {
        if (!d.thumbnail) {
          // Disease common names often include crop prefix ("Almonds — Leaf Curl")
          // Strip the crop prefix for better Wikipedia lookup
          var lookupName = d.commonName || '';
          var dashIdx = lookupName.indexOf(' — ');
          if (dashIdx > 0) lookupName = lookupName.substring(dashIdx + 3).trim();
          getWikiThumb(d.scientificName, lookupName, 'disease-thumb-' + idx);
        }
      });
    }
  }

  // ── Navigate to Labels tab and show a specific product ───
  window.diseaseViewProduct = function (productId, diseaseName) {
    window._diseaseNavSource = {
      active: true,
      diseaseName: diseaseName || '',
      scrollY: window.scrollY || window.pageYOffset || 0
    };

    if (typeof switchAgriSubTab === 'function') switchAgriSubTab('search');
    setTimeout(function () {
      if (diseaseName) {
        var pestFil = document.getElementById('pest-filter-input');
        if (pestFil) pestFil.value = diseaseName;
      }
      if (typeof filterByProduct === 'function') {
        filterByProduct(productId);
      }
    }, 100);
  };

  // ── Initialize ────────────────────────────────────────────
  window.initDiseasesTab = function () {
    buildFilterPills();
    runDiseasesSearch();
  };

})();
