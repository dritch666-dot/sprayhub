// Weeds UI — search, filter, and render weed identification cards
// 771 weeds with text search + multi-select visual characteristic filters

(function () {
  'use strict';

  // ── Filter state ──────────────────────────────────────────
  var activeLeaf = {};      // key: leafArrangement value, val: true
  var activeFlower = {};    // key: flower color, val: true
  var activeControl = {};   // key: control method, val: true

  // ── Constants ─────────────────────────────────────────────
  var FLOWER_COLORS = {
    'Yellow':          { bg: '#fef9c3', text: '#854d0e', dot: '#eab308' },
    'White':           { bg: '#f8fafc', text: '#475569', dot: '#e2e8f0' },
    'Pink':            { bg: '#fce7f3', text: '#9d174d', dot: '#ec4899' },
    'Purple':          { bg: '#f3e8ff', text: '#6b21a8', dot: '#a855f7' },
    'Red':             { bg: '#fee2e2', text: '#991b1b', dot: '#ef4444' },
    'Blue':            { bg: '#dbeafe', text: '#1e40af', dot: '#3b82f6' },
    'Orange':          { bg: '#ffedd5', text: '#9a3412', dot: '#f97316' },
    'Cream':           { bg: '#fefce8', text: '#713f12', dot: '#fde68a' },
    'Green':           { bg: '#dcfce7', text: '#166534', dot: '#22c55e' },
    'Brown':           { bg: '#fdf4e7', text: '#78350f', dot: '#a16207' },
    'Grey':            { bg: '#f1f5f9', text: '#475569', dot: '#94a3b8' },
    'Inconspicuous':   { bg: '#f1f5f9', text: '#64748b', dot: '#cbd5e1' },
    'Multi-coloured':  { bg: 'linear-gradient(90deg,#fce7f3,#dbeafe,#fef9c3)', text: '#6b21a8', dot: '#a855f7' }
  };

  var LEAF_ICONS = {
    'Alternate': '🌿', 'Basal': '🌱', 'Opposite': '🍃', 'Palmate': '🖐️', 'Whorled': '🔄'
  };

  var CONTROL_ICONS = {
    'Foliar spray': '💨', 'Wick wipe': '🖌️', 'Complete removal': '🗑️',
    'Slashing and mowing': '✂️', 'Cut stump method': '🪓', 'Stem injection': '💉',
    'Basal bark treatment': '🌳', 'Stem scraping': '🔪'
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

    return '<div class="weed-meta-row ala-dist-row">'
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
    // Reverse: add plural from singular — "tree" → "trees", "grass" → "grasses"
    if (!tok.endsWith('s')) {
      if (tok.endsWith('sh') || tok.endsWith('ch') || tok.endsWith('x') || tok.endsWith('ss') || tok.endsWith('z')) forms.push(tok + 'es');
      else if (tok.endsWith('y') && tok.length > 2 && !'aeiou'.includes(tok[tok.length - 2])) forms.push(tok.slice(0, -1) + 'ies');
      else forms.push(tok + 's');
    }
    var seen = {};
    return forms.filter(function (f) { if (seen[f] || f.length < 2) return false; seen[f] = true; return true; });
  }

  // ── Normalise compound words ────────────────────────────
  // "raintree" → "rain tree", "rain-tree" → "rain tree", etc.
  function normalise(str) {
    return str.replace(/-/g, ' ').toLowerCase();
  }

  // ── Parse search tokens (supports "quoted phrases" and % joiner) ──
  // "rain tree" or rain%tree → single token "rain tree" (phrase match)
  // Matches Labels tab parseSearchTokens() behaviour
  function parseSearchTokens(raw) {
    if (!raw) return [];
    var tokens = [];
    var remaining = raw;
    // 1) Extract "quoted phrases" first
    var quoteRe = /"([^"]+)"/g;
    var match;
    while ((match = quoteRe.exec(remaining)) !== null) {
      tokens.push(match[1].trim().toLowerCase());
    }
    remaining = remaining.replace(quoteRe, ' ');
    // 2) Extract %-joined phrases (e.g. rain%tree or Group%M%Fungicide)
    var pctRe = /(\S+(%\S+)+)/g;
    while ((match = pctRe.exec(remaining)) !== null) {
      tokens.push(match[1].replace(/%/g, ' ').trim().toLowerCase());
    }
    remaining = remaining.replace(pctRe, ' ');
    // 3) Remaining loose words become individual tokens
    remaining.trim().split(/\s+/).forEach(function (w) {
      if (w) tokens.push(w.toLowerCase());
    });
    return tokens;
  }

  // ── Highlight helper ──────────────────────────────────────
  function hl(text, query) {
    if (!query || !text) return text || '';
    // Strip % and quotes for highlight purposes
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
    // Leaf arrangement pills
    var leafRow = document.getElementById('weeds-leaf-pills');
    if (leafRow) {
      var leafTypes = ['Alternate', 'Basal', 'Opposite', 'Palmate', 'Whorled'];
      leafRow.innerHTML = leafTypes.map(function (l) {
        return '<button class="weed-pill weed-pill-leaf" data-value="' + l + '" onclick="toggleWeedPill(this,\'leaf\')">'
          + (LEAF_ICONS[l] || '') + ' ' + l + '</button>';
      }).join('');
    }

    // Flower color pills
    var flowerRow = document.getElementById('weeds-flower-pills');
    if (flowerRow) {
      var colors = ['Yellow', 'White', 'Pink', 'Purple', 'Red', 'Blue', 'Orange', 'Cream', 'Green', 'Brown', 'Grey', 'Inconspicuous', 'Multi-coloured'];
      flowerRow.innerHTML = colors.map(function (c) {
        var fc = FLOWER_COLORS[c] || {};
        var dotStyle = 'display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:4px;';
        if (c === 'Multi-coloured') {
          dotStyle += 'background:linear-gradient(135deg,#ec4899,#3b82f6,#eab308);';
        } else if (c === 'White') {
          dotStyle += 'background:#e2e8f0;border:1px solid #cbd5e1;';
        } else {
          dotStyle += 'background:' + (fc.dot || '#94a3b8') + ';';
        }
        return '<button class="weed-pill weed-pill-flower" data-value="' + c + '" data-color="' + (fc.dot || '#94a3b8') + '" onclick="toggleWeedPill(this,\'flower\')">'
          + '<span style="' + dotStyle + '"></span>' + c + '</button>';
      }).join('');
    }

    // Control method pills
    var controlRow = document.getElementById('weeds-control-pills');
    if (controlRow) {
      var methods = ['Foliar spray', 'Complete removal', 'Wick wipe', 'Slashing and mowing', 'Cut stump method', 'Stem injection', 'Basal bark treatment', 'Stem scraping'];
      controlRow.innerHTML = methods.map(function (m) {
        return '<button class="weed-pill weed-pill-control" data-value="' + m + '" onclick="toggleWeedPill(this,\'control\')">'
          + (CONTROL_ICONS[m] || '') + ' ' + m + '</button>';
      }).join('');
    }
  }

  // ── Toggle pill selection ─────────────────────────────────
  window.toggleWeedPill = function (btn, type) {
    var val = btn.getAttribute('data-value');
    var map = type === 'leaf' ? activeLeaf : type === 'flower' ? activeFlower : activeControl;

    if (map[val]) {
      delete map[val];
      btn.classList.remove('active');
      if (type === 'flower') { btn.style.background = ''; btn.style.borderColor = ''; btn.style.color = ''; }
    } else {
      map[val] = true;
      btn.classList.add('active');
      if (type === 'flower') {
        var fc = FLOWER_COLORS[val];
        if (fc && val !== 'White' && val !== 'Inconspicuous' && val !== 'Grey') {
          btn.style.background = fc.dot;
          btn.style.borderColor = fc.dot;
          btn.style.color = '#fff';
        }
      }
    }
    updateWeedFilterBadge();
    runWeedsSearch();
  };

  // ── Clear all filters ─────────────────────────────────────
  window.clearAllWeedFilters = function () {
    activeLeaf = {};
    activeFlower = {};
    activeControl = {};
    document.querySelectorAll('.weed-pill.active').forEach(function (p) { p.classList.remove('active'); });
    var input = document.getElementById('weeds-search-input');
    if (input) input.value = '';
    updateWeedFilterBadge();
    runWeedsSearch();
  };

  // ── Active filter badge ───────────────────────────────────
  function updateWeedFilterBadge() {
    var bar = document.getElementById('weeds-filter-bar');
    if (!bar) return;
    var count = Object.keys(activeLeaf).length + Object.keys(activeFlower).length + Object.keys(activeControl).length;
    var input = document.getElementById('weeds-search-input');
    var hasText = input && input.value.trim();
    if (count === 0 && !hasText) {
      bar.style.display = 'none';
      return;
    }
    var parts = [];
    if (hasText) parts.push('Text: "' + input.value.trim() + '"');
    if (Object.keys(activeLeaf).length) parts.push('Leaf: ' + Object.keys(activeLeaf).join(', '));
    if (Object.keys(activeFlower).length) parts.push('Flower: ' + Object.keys(activeFlower).join(', '));
    if (Object.keys(activeControl).length) parts.push('Control: ' + Object.keys(activeControl).join(', '));
    bar.style.display = 'flex';
    bar.innerHTML = '<span class="weed-filter-badge">' + count + ' filter' + (count !== 1 ? 's' : '') + ' active</span>'
      + '<span class="weed-filter-desc">' + parts.join(' · ') + '</span>'
      + '<button class="weed-filter-clear" onclick="clearAllWeedFilters()">Clear all ✕</button>';
  }

  // ── Search + filter logic ─────────────────────────────────
  window.runWeedsSearch = function () {
    var registry = window.weedsRegistry;
    if (!registry) return;

    var input = document.getElementById('weeds-search-input');
    var rawQ = input ? input.value.trim() : '';
    // Normalise hyphens to spaces BEFORE parsing (so "rain-tree" → "rain tree" → 2 tokens)
    // but preserve % and "quotes" for phrase parsing
    var preNorm = rawQ.replace(/-/g, ' ');
    // Parse tokens: supports "quoted phrases" and % joiner (rain%tree → phrase "rain tree")
    var terms = parseSearchTokens(preNorm);
    var q = normalise(rawQ);

    var leafKeys = Object.keys(activeLeaf);
    var flowerKeys = Object.keys(activeFlower);
    var controlKeys = Object.keys(activeControl);

    var results = registry.filter(function (w) {
      // Text search: every term (with plural stemming) must appear somewhere
      if (terms.length > 0) {
        // Build search blob from all fields + linked product names
        var linkedStr = (w.linkedProducts || []).map(function (lp) {
          return (lp.productName || '') + ' ' + (lp.productId || '');
        }).join(' ');
        var rawBlob = [
          w.commonName || '', w.scientificName || '', w.family || '',
          (w.synonyms || []).join(' '), w.leafArrangement || '',
          (w.flowerColors || []).join(' '), (w.foliageColors || []).join(' '),
          (w.controlMethods || []).join(' '), w.floweringPeriod || '',
          linkedStr
        ].join(' ');
        // Normalise blob: hyphens→spaces, lowercase
        var blob = normalise(rawBlob);
        // Strip possessives for flexible phrase matching: "rat's" → "rat", then remaining apostrophes
        var blobClean = blob.replace(/[''\u2019]s\b/g, '').replace(/[''\u2019`]/g, '');
        // No-space version for compound matching (e.g. "raintree" matches "rain tree")
        var blobNoSpaces = blob.replace(/\s+/g, '');
        var blobCleanNoSpaces = blobClean.replace(/\s+/g, '');

        var textMatch = terms.every(function (t) {
          // Strip apostrophes from search term too for flexible matching
          var tClean = t.replace(/['\u2019]s\b/g, '').replace(/['\u2019`]/g, '');
          // Try exact match first
          if (blob.includes(t) || blobClean.includes(tClean)) return true;
          // Try compound match (user typed "raintree", blob has "rain tree")
          if (t.length > 3 && (blobNoSpaces.includes(t) || blobCleanNoSpaces.includes(tClean))) return true;
          // Try plural stems
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

      // Leaf filter: OR within (match any selected leaf type)
      if (leafKeys.length > 0) {
        if (!leafKeys.includes(w.leafArrangement)) return false;
      }

      // Flower filter: OR within (weed must have at least one selected color)
      if (flowerKeys.length > 0) {
        var hasFlower = flowerKeys.some(function (fc) {
          return (w.flowerColors || []).includes(fc);
        });
        if (!hasFlower) return false;
      }

      // Control filter: OR within (weed must have at least one selected method)
      if (controlKeys.length > 0) {
        var hasControl = controlKeys.some(function (cm) {
          return (w.controlMethods || []).includes(cm);
        });
        if (!hasControl) return false;
      }

      return true;
    });

    renderWeedResults(results, q);
    updateWeedFilterBadge();
  };

  // ── Clear search input ────────────────────────────────────
  window.clearWeedsSearch = function () {
    var input = document.getElementById('weeds-search-input');
    if (input) input.value = '';
    // Clear product nav source so back button disappears
    if (window._productNavSource) window._productNavSource.active = false;
    updateWeedFilterBadge();
    runWeedsSearch();
  };

  // ── Render result cards ───────────────────────────────────
  function renderWeedResults(results, query) {
    var container = document.getElementById('weeds-results');
    var countEl = document.getElementById('weeds-result-count');
    if (!container) return;

    if (countEl) {
      countEl.textContent = results.length + ' weed' + (results.length !== 1 ? 's' : '');
    }

    if (results.length === 0) {
      var hasFilters = Object.keys(activeLeaf).length + Object.keys(activeFlower).length + Object.keys(activeControl).length > 0;
      var alaBtn = query && query.trim().length >= 2
        ? '<div class="ala-search-section">'
          + '<div style="color:var(--text-sub,#64748b);font-size:0.8rem;margin-bottom:8px;">Not in our database? Search 153,000+ Australian species online:</div>'
          + '<button id="weeds-ala-btn" class="ala-search-btn" onclick="alaSearch(\'' + query.replace(/'/g, "\\'") + '\', \'weeds\')">🌏 Search ALA Australia</button>'
          + '</div>'
          + '<div id="weeds-ala-results"></div>'
        : '';
      container.innerHTML = '<div class="no-results" style="text-align:center;padding:40px 20px;">'
        + '<div style="font-size:2rem;margin-bottom:10px;">🌿</div>'
        + '<div style="font-weight:600;color:var(--text,#1e293b);margin-bottom:6px;">No weeds found</div>'
        + '<div style="color:var(--text-sub,#64748b);font-size:0.85rem;">'
        + (hasFilters || query ? 'Try removing some filters or changing your search terms.' : 'No weed data loaded.')
        + '</div>'
        + (hasFilters ? '<button onclick="clearAllWeedFilters()" style="margin-top:12px;padding:8px 16px;border-radius:8px;border:none;background:var(--primary,#16a34a);color:#fff;font-weight:600;cursor:pointer;">Clear all filters</button>' : '')
        + alaBtn
        + '</div>';
      return;
    }

    container.innerHTML = results.map(function (w) {
      // Family badge
      var familyBadge = w.family
        ? '<span class="weed-badge weed-badge-family">' + hl(w.family, query) + '</span>'
        : '';

      // Leaf badge
      var leafBadge = w.leafArrangement
        ? '<span class="weed-badge weed-badge-leaf">' + (LEAF_ICONS[w.leafArrangement] || '') + ' ' + hl(w.leafArrangement, query) + '</span>'
        : '';

      // Flower color chips
      var flowerChips = (w.flowerColors || []).map(function (c) {
        var fc = FLOWER_COLORS[c] || { bg: '#f1f5f9', text: '#64748b', dot: '#94a3b8' };
        var bgStyle = c === 'Multi-coloured' ? 'background:' + fc.bg : 'background:' + fc.bg;
        return '<span class="weed-color-chip" style="' + bgStyle + ';color:' + fc.text + ';">'
          + '<span class="weed-color-dot" style="background:' + fc.dot + ';' + (c === 'White' ? 'border:1px solid #cbd5e1;' : '') + '"></span>'
          + c + '</span>';
      }).join('');

      // Foliage color chips
      var foliageChips = (w.foliageColors || []).length > 0
        ? '<div class="weed-meta-row"><strong>Foliage:</strong> ' + (w.foliageColors || []).map(function (c) {
            return '<span class="weed-foliage-chip">' + hl(c, query) + '</span>';
          }).join('') + '</div>'
        : '';

      // Control method tags
      var controlTags = (w.controlMethods || []).map(function (m) {
        return '<span class="weed-control-tag">' + (CONTROL_ICONS[m] || '') + ' ' + hl(m, query) + '</span>';
      }).join('');

      // Synonyms
      var synonymsRow = (w.synonyms || []).length > 0
        ? '<div class="weed-synonyms"><strong>Also known as:</strong> ' + hl((w.synonyms || []).join(', '), query) + '</div>'
        : '';

      // Flowering period
      var floweringRow = w.floweringPeriod
        ? '<div class="weed-meta-row"><strong>Flowering:</strong> ' + hl(w.floweringPeriod, query) + '</div>'
        : '';

      // Scientific name
      var sciName = w.scientificName
        ? '<div class="weed-sci-name">' + hl(w.scientificName, query) + '</div>'
        : '';

      // Linked products section — separate label links from permit links
      var productsSection = '';
      if (w.linkedProducts && w.linkedProducts.length > 0) {
        var labelLinks = w.linkedProducts.filter(function (lp) { return lp.source !== 'permit'; });
        var permitLinks = w.linkedProducts.filter(function (lp) { return lp.source === 'permit'; });
        var safeWeedName = w.commonName.replace(/'/g, "\\'");

        var labelBtns = labelLinks.map(function (lp) {
          var cropsText = (lp.crops || []).length > 0 ? ' (' + (lp.crops || []).join(', ') + ')' : '';
          return '<button class="weed-product-btn" onclick="weedViewProduct(\'' + lp.productId + '\',\'' + safeWeedName + '\')" title="' + lp.productName + cropsText + '">'
            + '🏷️ ' + hl(lp.productName, query)
            + '</button>';
        }).join('');

        var permitBtns = permitLinks.map(function (lp) {
          var permitText = lp.permitNumber ? ' (' + lp.permitNumber + ')' : '';
          var cropsText = (lp.crops || []).length > 0 ? ' — ' + (lp.crops || []).join(', ') : '';
          return '<button class="weed-product-btn weed-product-btn-permit" onclick="weedViewProduct(\'' + lp.productId + '\',\'' + safeWeedName + '\')" title="Permit: ' + (lp.permitNumber || '') + cropsText + '">'
            + '📋 ' + hl(lp.productName, query) + ' <span class="weed-permit-tag">' + (lp.permitNumber || 'Permit') + '</span>'
            + '</button>';
        }).join('');

        var labelSection = labelLinks.length > 0
          ? '<div class="weed-products-label">🏷️ On Label <span class="weed-products-count">' + labelLinks.length + '</span></div>'
            + '<div class="weed-products-list">' + labelBtns + '</div>'
          : '';

        var permitSection = permitLinks.length > 0
          ? '<div class="weed-products-label" style="margin-top:6px;">📋 APVMA Permits <span class="weed-products-count">' + permitLinks.length + '</span></div>'
            + '<div class="weed-products-list">' + permitBtns + '</div>'
          : '';

        productsSection = '<div class="weed-products-section">'
          + labelSection + permitSection
          + '</div>';
      }

      var backBtn = (window._productNavSource && window._productNavSource.active)
        ? '<button class="weed-back-btn" onclick="window.navigateBackToProduct()">← Back to ' + (window._productNavSource.productName || 'product').replace(/</g, '&lt;') + '</button>'
        : '';

      // Local thumbnail (from images/ folder) or ALA thumbnail fallback
      var thumbSrc = w.thumbnail || w.alaThumbnail || '';
      var thumbGoogleUrl = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(w.commonName + ' weed australia');
      var alaThumbnailHtml = '';
      if (thumbSrc) {
        alaThumbnailHtml = '<a href="' + thumbGoogleUrl + '" target="_blank" rel="noopener" class="weed-ala-thumb" title="Search images: ' + w.commonName.replace(/"/g, '&quot;') + '">'
          + '<img src="' + thumbSrc + '" alt="' + w.commonName.replace(/"/g, '&quot;') + '" loading="lazy" onerror="this.parentElement.style.display=\'none\'">'
          + '</a>';
      }

      var alaLink = w.alaUrl
        ? '<a href="' + w.alaUrl + '" target="_blank" rel="noopener" class="weed-img-btn weed-ala-btn">🌏 ALA Profile</a>'
        : '';

      return '<div class="weed-card' + (w.linkedProducts && w.linkedProducts.length > 0 ? ' weed-card-linked' : '') + '">'
        + backBtn
        + alaThumbnailHtml
        + '<div class="weed-card-header">'
        + '<div class="weed-card-title">' + hl(w.commonName, query) + '</div>'
        + '<div class="weed-card-badges">' + familyBadge + leafBadge
        + (w.linkedProducts && w.linkedProducts.length > 0 ? '<span class="weed-badge weed-badge-linked">🏷️ ' + w.linkedProducts.length + ' product' + (w.linkedProducts.length !== 1 ? 's' : '') + '</span>' : '')
        + '</div>'
        + '</div>'
        + sciName
        + synonymsRow
        + (flowerChips ? '<div class="weed-meta-row"><strong>Flowers:</strong> ' + flowerChips + '</div>' : '')
        + foliageChips
        + floweringRow
        + (controlTags ? '<div class="weed-meta-row"><strong>Control:</strong> ' + controlTags + '</div>' : '')
        + buildDistributionRow(w.alaDistribution)
        + productsSection
        + '<div class="weed-card-actions">'
        + '<a href="' + w.imageUrl + '" target="_blank" rel="noopener" class="weed-img-btn">📷 View Images</a>'
        + alaLink
        + '</div>'
        + '</div>';
    }).join('');
  }

  // ── Navigate to Labels tab and show a specific product ───
  window.weedViewProduct = function (productId, weedName) {
    // Save scroll position so we can restore it when user clicks "Back to Weeds"
    window._weedNavSource = {
      active: true,
      weedName: weedName || '',
      scrollY: window.scrollY || window.pageYOffset || 0
    };

    if (typeof switchAgriSubTab === 'function') switchAgriSubTab('search');
    // Small delay to let the search tab initialize if needed
    setTimeout(function () {
      // Set the pest filter to the weed name so it highlights on the product card
      if (weedName) {
        var pestFil = document.getElementById('pest-filter-input');
        if (pestFil) pestFil.value = weedName;
      }
      if (typeof filterByProduct === 'function') {
        filterByProduct(productId);
      }
    }, 100);
  };

  // ── Initialize ────────────────────────────────────────────
  window.initWeedsTab = function () {
    buildFilterPills();
    runWeedsSearch();
  };

})();
