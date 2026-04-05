// Pests & Insects UI — search, filter, and render pest identification cards
// 529 pests with text search + multi-select pest type and order filters

(function () {
  'use strict';

  // ── Filter state ──────────────────────────────────────────
  var activePestType = {};   // key: pest type value, val: true
  var activeOrder = {};      // key: taxonomic order, val: true

  // ── Constants ─────────────────────────────────────────────
  var PEST_TYPE_ICONS = {
    'Chewing insect': '🐛', 'Sucking insect': '🦟', 'Mite': '🕷️',
    'Soil pest': '🪱', 'Stored grain pest': '🌾', 'Fly': '🪰',
    'Mollusc': '🐌', 'Termite': '🪵', 'General pest': '🐜',
    'Borer': '🪲', 'Nematode': '🔬', 'Caterpillar': '🐛'
  };

  var PEST_TYPE_COLORS = {
    'Chewing insect':     { bg: '#fef3c7', text: '#92400e', border: '#fcd34d' },
    'Sucking insect':     { bg: '#fce7f3', text: '#9d174d', border: '#f9a8d4' },
    'Mite':               { bg: '#ede9fe', text: '#5b21b6', border: '#c4b5fd' },
    'Soil pest':          { bg: '#fdf4e7', text: '#78350f', border: '#d6b88c' },
    'Stored grain pest':  { bg: '#fef9c3', text: '#854d0e', border: '#fde68a' },
    'Fly':                { bg: '#e0f2fe', text: '#075985', border: '#7dd3fc' },
    'Mollusc':            { bg: '#f0fdf4', text: '#166534', border: '#86efac' },
    'Termite':            { bg: '#fff7ed', text: '#9a3412', border: '#fdba74' },
    'General pest':       { bg: '#f1f5f9', text: '#475569', border: '#cbd5e1' },
    'Borer':              { bg: '#fef2f2', text: '#991b1b', border: '#fca5a5' },
    'Nematode':           { bg: '#ecfdf5', text: '#064e3b', border: '#6ee7b7' },
    'Caterpillar':        { bg: '#fff7ed', text: '#9a3412', border: '#fdba74' }
  };

  // ── ALA State Distribution Row ───────────────────────────
  var STATE_ORDER = ['QLD', 'NSW', 'VIC', 'SA', 'WA', 'TAS', 'NT', 'ACT'];
  var STATE_COLORS = {
    'QLD': '#7e22ce', 'NSW': '#0284c7', 'VIC': '#1e40af',
    'SA': '#dc2626', 'WA': '#eab308', 'TAS': '#16a34a',
    'NT': '#ea580c', 'ACT': '#6366f1'
  };

  function buildDistributionRow(dist) {
    if (!dist || !dist.states) return '';
    var states = dist.states;
    var max = 0;
    STATE_ORDER.forEach(function (s) { if ((states[s] || 0) > max) max = states[s]; });
    if (max === 0) return '';

    var bars = STATE_ORDER.map(function (s) {
      var count = states[s] || 0;
      var pct = Math.max(count > 0 ? 4 : 0, Math.round((count / max) * 100));
      var color = STATE_COLORS[s] || '#94a3b8';
      return '<div class="ala-dist-col">'
        + '<div class="ala-dist-bar-bg"><div class="ala-dist-bar" style="height:' + pct + '%;background:' + color + '"></div></div>'
        + '<div class="ala-dist-label">' + s + '</div>'
        + '<div class="ala-dist-count">' + (count > 999 ? Math.round(count / 1000) + 'k' : count) + '</div>'
        + '</div>';
    }).join('');

    return '<div class="pest-meta-row ala-dist-row">'
      + '<strong>Distribution:</strong> <span class="ala-dist-total">' + dist.total.toLocaleString() + ' ALA records</span>'
      + '<div class="ala-dist-chart">' + bars + '</div>'
      + '</div>';
  }

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

  // ── Normalise compound words ────────────────────────────
  function normalise(str) {
    return str.replace(/-/g, ' ').toLowerCase();
  }

  // ── Parse search tokens (supports "quoted phrases" and % joiner) ──
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

  // ── Highlight helper ──────────────────────────────────────
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
    // Pest type pills
    var typeRow = document.getElementById('pests-type-pills');
    if (typeRow) {
      var types = ['Chewing insect', 'Sucking insect', 'Mite', 'Soil pest', 'Stored grain pest', 'Fly', 'Mollusc', 'Termite', 'General pest'];
      typeRow.innerHTML = types.map(function (t) {
        return '<button class="pest-pill pest-pill-type" data-value="' + t + '" onclick="togglePestPill(this,\'type\')">'
          + (PEST_TYPE_ICONS[t] || '🐛') + ' ' + t + '</button>';
      }).join('');
    }

    // Order pills — dynamically built from registry
    var orderRow = document.getElementById('pests-order-pills');
    if (orderRow && window.pestsRegistry) {
      var orderCounts = {};
      window.pestsRegistry.forEach(function (p) {
        if (p.order) {
          orderCounts[p.order] = (orderCounts[p.order] || 0) + 1;
        }
      });
      // Sort by count descending, take top orders with > 5 entries
      var orders = Object.keys(orderCounts)
        .filter(function (o) { return orderCounts[o] >= 5; })
        .sort(function (a, b) { return orderCounts[b] - orderCounts[a]; });
      orderRow.innerHTML = orders.map(function (o) {
        return '<button class="pest-pill pest-pill-order" data-value="' + o + '" onclick="togglePestPill(this,\'order\')">'
          + o + ' <span style="opacity:0.6;font-size:0.65rem;">(' + orderCounts[o] + ')</span></button>';
      }).join('');
    }
  }

  // ── Toggle pill selection ─────────────────────────────────
  window.togglePestPill = function (btn, type) {
    var val = btn.getAttribute('data-value');
    var map = type === 'type' ? activePestType : activeOrder;

    if (map[val]) {
      delete map[val];
      btn.classList.remove('active');
      if (type === 'type') { btn.style.background = ''; btn.style.borderColor = ''; btn.style.color = ''; }
    } else {
      map[val] = true;
      btn.classList.add('active');
      if (type === 'type') {
        var tc = PEST_TYPE_COLORS[val];
        if (tc) {
          btn.style.background = tc.border;
          btn.style.borderColor = tc.border;
          btn.style.color = '#fff';
        }
      }
    }
    updatePestFilterBadge();
    runPestsSearch();
  };

  // ── Clear all filters ─────────────────────────────────────
  window.clearAllPestFilters = function () {
    activePestType = {};
    activeOrder = {};
    document.querySelectorAll('.pest-pill.active').forEach(function (p) {
      p.classList.remove('active');
      p.style.background = '';
      p.style.borderColor = '';
      p.style.color = '';
    });
    var input = document.getElementById('pests-search-input');
    if (input) input.value = '';
    updatePestFilterBadge();
    runPestsSearch();
  };

  // ── Active filter badge ───────────────────────────────────
  function updatePestFilterBadge() {
    var bar = document.getElementById('pests-filter-bar');
    if (!bar) return;
    var count = Object.keys(activePestType).length + Object.keys(activeOrder).length;
    var input = document.getElementById('pests-search-input');
    var hasText = input && input.value.trim();
    if (count === 0 && !hasText) {
      bar.style.display = 'none';
      return;
    }
    var parts = [];
    if (hasText) parts.push('Text: "' + input.value.trim() + '"');
    if (Object.keys(activePestType).length) parts.push('Type: ' + Object.keys(activePestType).join(', '));
    if (Object.keys(activeOrder).length) parts.push('Order: ' + Object.keys(activeOrder).join(', '));
    bar.style.display = 'flex';
    bar.innerHTML = '<span class="pest-filter-badge">' + count + ' filter' + (count !== 1 ? 's' : '') + ' active</span>'
      + '<span class="pest-filter-desc">' + parts.join(' · ') + '</span>'
      + '<button class="pest-filter-clear" onclick="clearAllPestFilters()">Clear all ✕</button>';
  }

  // ── Search + filter logic ─────────────────────────────────
  window.runPestsSearch = function () {
    var registry = window.pestsRegistry;
    if (!registry) return;

    var input = document.getElementById('pests-search-input');
    var rawQ = input ? input.value.trim() : '';
    var preNorm = rawQ.replace(/-/g, ' ');
    var terms = parseSearchTokens(preNorm);
    var q = normalise(rawQ);

    var typeKeys = Object.keys(activePestType);
    var orderKeys = Object.keys(activeOrder);

    var results = registry.filter(function (p) {
      // Text search
      if (terms.length > 0) {
        var linkedStr = (p.linkedProducts || []).map(function (lp) {
          return (lp.productName || '') + ' ' + (lp.productId || '');
        }).join(' ');
        var rawBlob = [
          p.commonName || '', p.scientificName || '', p.pestType || '',
          p.order || '', (p.cropsAffected || []).join(' '),
          p.damageType || '', (p.controlMethods || []).join(' '),
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

      // Pest type filter: OR within
      if (typeKeys.length > 0) {
        if (!typeKeys.includes(p.pestType)) return false;
      }

      // Order filter: OR within
      if (orderKeys.length > 0) {
        if (!orderKeys.includes(p.order)) return false;
      }

      return true;
    });

    renderPestResults(results, q);
    updatePestFilterBadge();
  };

  // ── Clear search input ────────────────────────────────────
  window.clearPestsSearch = function () {
    var input = document.getElementById('pests-search-input');
    if (input) input.value = '';
    if (window._productNavSource) window._productNavSource.active = false;
    updatePestFilterBadge();
    runPestsSearch();
  };

  // ── Render result cards ───────────────────────────────────
  function renderPestResults(results, query) {
    var container = document.getElementById('pests-results');
    var countEl = document.getElementById('pests-result-count');
    if (!container) return;

    if (countEl) {
      countEl.textContent = results.length + ' pest' + (results.length !== 1 ? 's' : '');
    }

    if (results.length === 0) {
      var hasFilters = Object.keys(activePestType).length + Object.keys(activeOrder).length > 0;
      var alaBtn = query && query.trim().length >= 2
        ? '<div class="ala-search-section">'
          + '<div style="color:var(--text-sub,#64748b);font-size:0.8rem;margin-bottom:8px;">Not in our database? Search 153,000+ Australian species online:</div>'
          + '<button id="pests-ala-btn" class="ala-search-btn" onclick="alaSearch(\'' + query.replace(/'/g, "\\'") + '\', \'pests\')">🌏 Search ALA Australia</button>'
          + '</div>'
          + '<div id="pests-ala-results"></div>'
        : '';
      container.innerHTML = '<div class="no-results" style="text-align:center;padding:40px 20px;">'
        + '<div style="font-size:2rem;margin-bottom:10px;">🐛</div>'
        + '<div style="font-weight:600;color:var(--text,#1e293b);margin-bottom:6px;">No pests found</div>'
        + '<div style="color:var(--text-sub,#64748b);font-size:0.85rem;">'
        + (hasFilters || query ? 'Try removing some filters or changing your search terms.' : 'No pest data loaded.')
        + '</div>'
        + (hasFilters ? '<button onclick="clearAllPestFilters()" style="margin-top:12px;padding:8px 16px;border-radius:8px;border:none;background:var(--primary,#16a34a);color:#fff;font-weight:600;cursor:pointer;">Clear all filters</button>' : '')
        + alaBtn
        + '</div>';
      return;
    }

    container.innerHTML = results.map(function (p) {
      // Pest type badge
      var tc = PEST_TYPE_COLORS[p.pestType] || { bg: '#f1f5f9', text: '#475569', border: '#cbd5e1' };
      var typeBadge = p.pestType
        ? '<span class="pest-badge pest-badge-type" style="background:' + tc.bg + ';color:' + tc.text + ';border:1px solid ' + tc.border + ';">'
          + (PEST_TYPE_ICONS[p.pestType] || '🐛') + ' ' + hl(p.pestType, query) + '</span>'
        : '';

      // Order badge
      var orderBadge = p.order
        ? '<span class="pest-badge pest-badge-order">' + hl(p.order, query) + '</span>'
        : '';

      // Scientific name
      var sciName = p.scientificName
        ? '<div class="pest-sci-name">' + hl(p.scientificName, query) + '</div>'
        : '';

      // Crops affected chips
      var cropsSection = '';
      if (p.cropsAffected && p.cropsAffected.length > 0) {
        var cropChips = p.cropsAffected.slice(0, 6).map(function (c) {
          return '<span class="pest-crop-chip">' + hl(c, query) + '</span>';
        }).join('');
        var moreText = p.cropsAffected.length > 6 ? ' <span style="color:var(--text-sub);font-size:0.7rem;">+' + (p.cropsAffected.length - 6) + ' more</span>' : '';
        cropsSection = '<div class="pest-meta-row"><strong>Crops affected:</strong> ' + cropChips + moreText + '</div>';
      }

      // Damage type
      var damageRow = p.damageType
        ? '<div class="pest-meta-row"><strong>Damage:</strong> ' + hl(p.damageType, query) + '</div>'
        : '';

      // Control methods
      var controlTags = (p.controlMethods || []).map(function (m) {
        return '<span class="pest-control-tag">' + hl(m, query) + '</span>';
      }).join('');

      // Linked products section
      var productsSection = '';
      if (p.linkedProducts && p.linkedProducts.length > 0) {
        var labelLinks = p.linkedProducts.filter(function (lp) { return lp.source !== 'permit'; });
        var permitLinks = p.linkedProducts.filter(function (lp) { return lp.source === 'permit'; });
        var safePestName = p.commonName.replace(/'/g, "\\'");

        var labelBtns = labelLinks.map(function (lp) {
          var cropsText = (lp.crops || []).length > 0 ? ' (' + (lp.crops || []).join(', ') + ')' : '';
          return '<button class="pest-product-btn" onclick="pestViewProduct(\'' + lp.productId + '\',\'' + safePestName + '\')" title="' + lp.productName + cropsText + '">'
            + '🏷️ ' + hl(lp.productName, query)
            + '</button>';
        }).join('');

        var permitBtns = permitLinks.map(function (lp) {
          var cropsText = (lp.crops || []).length > 0 ? ' — ' + (lp.crops || []).join(', ') : '';
          return '<button class="pest-product-btn pest-product-btn-permit" onclick="pestViewProduct(\'' + lp.productId + '\',\'' + safePestName + '\')" title="Permit: ' + (lp.permitNumber || '') + cropsText + '">'
            + '📋 ' + hl(lp.productName, query) + ' <span class="pest-permit-tag">' + (lp.permitNumber || 'Permit') + '</span>'
            + '</button>';
        }).join('');

        var labelSection = labelLinks.length > 0
          ? '<div class="pest-products-label">🏷️ On Label <span class="pest-products-count">' + labelLinks.length + '</span></div>'
            + '<div class="pest-products-list">' + labelBtns + '</div>'
          : '';

        var permitSection = permitLinks.length > 0
          ? '<div class="pest-products-label" style="margin-top:6px;">📋 APVMA Permits <span class="pest-products-count">' + permitLinks.length + '</span></div>'
            + '<div class="pest-products-list">' + permitBtns + '</div>'
          : '';

        productsSection = '<div class="pest-products-section">'
          + labelSection + permitSection
          + '</div>';
      }

      var backBtn = (window._productNavSource && window._productNavSource.active)
        ? '<button class="pest-back-btn" onclick="window.navigateBackToProduct()">← Back to ' + (window._productNavSource.productName || 'product').replace(/</g, '&lt;') + '</button>'
        : '';

      // Local thumbnail (from images/ folder) or ALA thumbnail fallback
      var thumbSrc = p.thumbnail || p.alaThumbnail || '';
      var thumbGoogleUrl = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(p.commonName + ' pest australia');
      var alaThumbnailHtml = '';
      if (thumbSrc) {
        alaThumbnailHtml = '<a href="' + thumbGoogleUrl + '" target="_blank" rel="noopener" class="pest-ala-thumb" title="Search images: ' + p.commonName.replace(/"/g, '&quot;') + '">'
          + '<img src="' + thumbSrc + '" alt="' + p.commonName.replace(/"/g, '&quot;') + '" loading="lazy" onerror="this.parentElement.style.display=\'none\'">'
          + '</a>';
      }

      var alaLink = p.alaUrl
        ? '<a href="' + p.alaUrl + '" target="_blank" rel="noopener" class="pest-img-btn pest-ala-btn">🌏 ALA Profile</a>'
        : '';

      return '<div class="pest-card' + (p.linkedProducts && p.linkedProducts.length > 0 ? ' pest-card-linked' : '') + '">'
        + backBtn
        + alaThumbnailHtml
        + '<div class="pest-card-header">'
        + '<div class="pest-card-title">' + hl(p.commonName, query) + '</div>'
        + '<div class="pest-card-badges">' + typeBadge + orderBadge
        + (p.linkedProducts && p.linkedProducts.length > 0 ? '<span class="pest-badge pest-badge-linked">🏷️ ' + p.linkedProducts.length + ' product' + (p.linkedProducts.length !== 1 ? 's' : '') + '</span>' : '')
        + '</div>'
        + '</div>'
        + sciName
        + cropsSection
        + damageRow
        + (controlTags ? '<div class="pest-meta-row"><strong>Control:</strong> ' + controlTags + '</div>' : '')
        + buildDistributionRow(p.alaDistribution)
        + productsSection
        + '<div class="pest-card-actions">'
        + '<a href="' + p.imageUrl + '" target="_blank" rel="noopener" class="pest-img-btn">📷 View Images</a>'
        + alaLink
        + '</div>'
        + '</div>';
    }).join('');
  }

  // ── Navigate to Labels tab and show a specific product ───
  window.pestViewProduct = function (productId, pestName) {
    window._pestNavSource = {
      active: true,
      pestName: pestName || '',
      scrollY: window.scrollY || window.pageYOffset || 0
    };

    if (typeof switchAgriSubTab === 'function') switchAgriSubTab('search');
    setTimeout(function () {
      if (pestName) {
        var pestFil = document.getElementById('pest-filter-input');
        if (pestFil) pestFil.value = pestName;
      }
      if (typeof filterByProduct === 'function') {
        filterByProduct(productId);
      }
    }, 100);
  };

  // ── Initialize ────────────────────────────────────────────
  window.initPestsTab = function () {
    buildFilterPills();
    runPestsSearch();
  };

})();
