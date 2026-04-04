// ─────────────────────────────────────────────────────────
// LABEL SEARCH ENGINE
// Builds a flat index from all products at startup.
// Provides live search + filtering used by the Search tab.
// ─────────────────────────────────────────────────────────

let searchIndex = [];      // flat list — one entry per weed × product
let searchDebounce = null; // debounce timer handle

// ── Master crop, pest, product & state lists (built at index time) ──
window.allCrops = [];      // sorted unique crop names from all cropList arrays
window.allPests = [];      // sorted unique pest names from all pestList arrays
window.allProducts = [];   // sorted unique {id, name} pairs for product autocomplete
window.allProductNames = []; // sorted unique product names (strings only)
window.allStates = ['NSW', 'Victoria', 'South Australia', 'Western Australia', 'Queensland', 'Tasmania', 'Northern Territory'];

// Helper to decode HTML entities (like &reg; or &trade;) so native JS string matches work correctly
function decodeHtmlEntities(str) {
  if (!str) return '';
  var textarea = document.createElement('textarea');
  textarea.innerHTML = str;
  return textarea.value;
}

// ── Format permit expiry date as DD/MM/YYYY ───────────────
function formatPermitExpiry(dateStr) {
  if (!dateStr) return '';
  const months = {
    'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
    'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11,
    'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'jun': 5, 'jul': 6, 'aug': 7,
    'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11
  };
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length === 3) {
    const day = parseInt(parts[0]);
    const month = months[parts[1].toLowerCase()];
    const year = parseInt(parts[2]);
    if (!isNaN(day) && month !== undefined && !isNaN(year)) {
      return String(day).padStart(2, '0') + '/' + String(month + 1).padStart(2, '0') + '/' + year;
    }
  }
  return dateStr;
}

// ── Build flat search index from all loaded products ─────
function buildSearchIndex() {
  searchIndex = [];
  for (const productId in productDatabase) {
    const product = productDatabase[productId];

    // Flatten classification object for easier searching
    // classification.type is a string (build 139+); target and timing are arrays
    const classifications = product.classification
      ? [
        (typeof product.classification.type === 'string' ? product.classification.type : (Array.isArray(product.classification.type) ? product.classification.type.join(' ') : '')),
        ...(Array.isArray(product.classification.target) ? product.classification.target : []),
        ...(Array.isArray(product.classification.timing) ? product.classification.timing : [])
      ].join(" ").toLowerCase()
      : "";

    // Determine category: prefer the explicit product.category field (set on all 237 products
    // as of build 139), fall back to getProductCategory() inference from database.js
    const category = product.category || getProductCategory(product);

    // MAP APVMA PERMITS — explicit appProducts links only (no fuzzy matching)
    let assignedPermits = [];
    if (window.permitsRegistry && window.permitsRegistry.permits) {
      assignedPermits = window.permitsRegistry.permits.filter(function (permit) {
        return permit.appProducts && permit.appProducts.includes(productId);
      });
    }

    // Collect all permit crops, pests, and numbers for this product (from linked permits)
    var permitCrops = [];
    var permitPests = [];
    var permitNumbers = [];
    assignedPermits.forEach(function (permit) {
      if (permit.crops) permitCrops = permitCrops.concat(permit.crops);
      if (permit.pests) permitPests = permitPests.concat(permit.pests);
      if (permit.permitNumber) permitNumbers.push(permit.permitNumber);
    });
    // Deduplicate and lowercase
    var permitCropsLower = permitCrops.map(function (c) { return c.toLowerCase(); }).filter(function (v, i, a) { return a.indexOf(v) === i; });
    var permitPestsLower = permitPests.map(function (p) { return p.toLowerCase(); }).filter(function (v, i, a) { return a.indexOf(v) === i; });
    // Combined searchable string for permit data (crops, pests, permit numbers)
    // NOTE: Do NOT include permit.products or permit.activeIngredients here —
    // those list ALL products/actives on the permit, causing false matches
    // (e.g. searching "fipronil" would match Altacor because a shared permit
    // also covers a fipronil product). The product's own name and active are
    // already indexed in their own fields.
    var permitParts = permitCrops.concat(permitPests).concat(permitNumbers);
    var permitSearchStr = permitParts.join(' ').toLowerCase();

    for (const cropId in product.crops) {
      const crop = product.crops[cropId];
      if (!crop) continue; // skip undefined entries (e.g. from trailing commas)
      // Normalised crop list for exact-match search (falls back to empty)
      const cropList = crop.cropList || [];
      (crop.weeds || []).forEach(function (w) {
        // Normalised pest list for exact-match search (falls back to empty)
        const pestList = w.pestList || [];
        searchIndex.push({
          productId: productId,
          productName: decodeHtmlEntities(product.name),
          productColor: product.color || '#10b981',
          activeIngredient: product.activeIngredient || product.active || '',
          group: product.group || '',
          modeOfAction: product.modeOfAction || '',
          classification: product.classification || null,
          signalHeading: product.signalHeading || null,
          classificationsStr: classifications,
          category: category,
          labelPdf: product.labelPdf || null,
          sdsPdf: product.sdsPdf || null,
          permits: assignedPermits,
          permitCropsLower: permitCropsLower,
          permitPestsLower: permitPestsLower,
          permitSearchStr: permitSearchStr,
          // Product-level detail fields
          apvma: product.apvma || '',
          company: product.company || '',
          formulation: product.formulation || '',
          withholding: product.withholding || null,
          grazing: product.grazing || (product.withholding && product.withholding.grazing) || '',
          harvest: product.harvest || (product.withholding && product.withholding.harvest) || '',
          restraints: product.restraints || [],
          restraintsStr: (Array.isArray(product.restraints) ? product.restraints.join(' ') : (product.restraints || '')).toLowerCase(),
          surfactant: typeof product.surfactant === 'string' ? product.surfactant : (product.surfactant ? JSON.stringify(product.surfactant) : ''),
          signalHeading: product.signalHeading || '',
          sprayerCleanup: product.sprayerCleanup || '',
          sprayerCleanupStr: (typeof product.sprayerCleanup === 'string' ? product.sprayerCleanup : '').toLowerCase(),
          compatibility: product.compatibility || null,
          compatibilityStr: (function() {
            var c = product.compatibility;
            if (!c) return '';
            var parts = [];
            if (Array.isArray(c.compatible)) parts = parts.concat(c.compatible);
            if (Array.isArray(c.incompatible)) parts = parts.concat(c.incompatible);
            if (Array.isArray(c.notes)) parts = parts.concat(c.notes);
            if (typeof c === 'string') parts.push(c);
            return parts.join(' ').toLowerCase();
          })(),
          cropId: cropId,
          cropName: crop.name || crop.crop || 'Consult Label for Use Situation',
          cropList: cropList,
          cropListLower: cropList.map(function (c) { return c.toLowerCase(); }),
          weed: w.weed,
          weedLower: w.weed.toLowerCase(),
          pestList: pestList,
          pestListLower: pestList.map(function (p) { return p.toLowerCase(); }),
          rate: w.rate,
          rateMax: w.rateMax,
          unit: w.unit,
          rates: w.rates || null,
          stage: w.stage || '',
          states: w.states,
          note: w.note || w.notes || '',
          withholdingStr: (function() {
            var parts = [];
            var wh = product.withholding;
            if (wh) {
              if (typeof wh === 'string') { parts.push(wh); }
              else {
                if (wh.grazing) parts.push('grazing ' + wh.grazing);
                if (wh.harvest) parts.push('harvest ' + wh.harvest);
              }
            }
            if (product.grazing) parts.push('grazing ' + product.grazing);
            if (product.harvest) parts.push('harvest ' + product.harvest);
            return parts.join(' ').toLowerCase();
          })(),
          rateStr: [w.rate || '', w.rateMax || '', w.unit || '', (w.rates ? [w.rates.boom || '', w.rates.spot || '', w.rates.knapsack || ''].join(' ') : '')].join(' ').toLowerCase(),
          permitNumber: crop.permitNumber || w.permitNumber || null
        });
      });
    }
  }

  // ── Build master crop & pest lists for autocomplete ──────
  // Includes both label crops/pests AND permit crops/pests
  var cropSet = {};
  var pestSet = {};
  searchIndex.forEach(function (entry) {
    entry.cropList.forEach(function (c) { cropSet[c] = true; });
    entry.pestList.forEach(function (p) { pestSet[p] = true; });
    // Also add permit crops/pests so they appear in autocomplete
    if (entry.permitCropsLower) {
      entry.permitCropsLower.forEach(function (c) {
        // Capitalise first letter for display
        var display = c.charAt(0).toUpperCase() + c.slice(1);
        cropSet[display] = true;
      });
    }
    if (entry.permitPestsLower) {
      entry.permitPestsLower.forEach(function (p) {
        var display = p.charAt(0).toUpperCase() + p.slice(1);
        pestSet[display] = true;
      });
    }
  });
  window.allCrops = Object.keys(cropSet).sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  window.allPests = Object.keys(pestSet).sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  // ── Build thumbnail lookup map from Identify registries ──
  window.thumbMap = {};
  var registries = [
    { data: window.weedsRegistry || [], prefix: 'images/weeds/' },
    { data: window.pestsRegistry || [], prefix: 'images/pests/' },
    { data: window.diseasesRegistry || [], prefix: 'images/diseases/' }
  ];
  registries.forEach(function (reg) {
    (reg.data || []).forEach(function (entry) {
      if (entry.thumbnail && entry.commonName) {
        window.thumbMap[entry.commonName.toLowerCase()] = entry.thumbnail;
      }
    });
  });
}

// ── Parse search query into tokens (supports exact phrases) ──
// Phrase syntax: "Group M" or Group%M → matched as one token "group m"
// Regular words are matched individually as before.
function parseSearchTokens(raw) {
  if (!raw) return [];
  var tokens = [];
  // 1) Convert % between non-space chars into spaces inside a phrase
  //    e.g. Group%M → "Group M" (treated as a phrase)
  var processed = raw.replace(/(\S)%(\S)/g, '$1 $2');
  // But we need to know which parts were %-joined so we treat them as phrases.
  // Simpler approach: extract "quoted" phrases first, then %-phrases, then loose words.
  tokens = [];
  var remaining = raw;

  // Extract "quoted phrases" first
  var quoteRe = /"([^"]+)"/g;
  var match;
  while ((match = quoteRe.exec(remaining)) !== null) {
    tokens.push(match[1].trim().toLowerCase());
  }
  remaining = remaining.replace(quoteRe, ' ');

  // Extract %-joined phrases (e.g. Group%M or Group%M%Fungicide)
  var pctRe = /(\S+(%\S+)+)/g;
  while ((match = pctRe.exec(remaining)) !== null) {
    tokens.push(match[1].replace(/%/g, ' ').trim().toLowerCase());
  }
  remaining = remaining.replace(pctRe, ' ');

  // Remaining loose words become individual tokens
  remaining.trim().split(/\s+/).forEach(function (w) {
    if (w) tokens.push(w.toLowerCase());
  });

  return tokens;
}

// ── Simple plural stemmer for crop/pest matching ─────────
// Returns an array of forms to try: [original, stem1, stem2, ...]
function pluralForms(tok) {
  var forms = [tok];
  // "berries" → "berry", "flies" → "fly"
  if (tok.endsWith('ies') && tok.length > 4) {
    forms.push(tok.slice(0, -3) + 'y');
  }
  // "leaves" → "leaf", "halves" → "half"
  else if (tok.endsWith('ves') && tok.length > 4) {
    forms.push(tok.slice(0, -3) + 'f');
  }
  // "peaches" → "peach", "grasses" → "grass"
  else if (tok.endsWith('shes') || tok.endsWith('ches') || tok.endsWith('xes') || tok.endsWith('sses') || tok.endsWith('zes')) {
    forms.push(tok.slice(0, -2));
  }
  // "tomatoes" → "tomato", "potatoes" → "potato"
  else if (tok.endsWith('oes') && tok.length > 4) {
    forms.push(tok.slice(0, -2));
  }
  // Simple trailing "s": "mites" → "mite", "aphids" → "aphid", "grapes" → "grape"
  if (tok.endsWith('s') && !tok.endsWith('ss') && tok.length > 3) {
    forms.push(tok.slice(0, -1));
  }
  // Deduplicate
  var seen = {};
  return forms.filter(function (f) {
    if (seen[f] || f.length < 2) return false;
    seen[f] = true;
    return true;
  });
}

// ── Run a search and return matching results ─────────────
function runSearch(query, filterProduct, filterState, filterCategory, filterCrop, filterPest) {
  const q = query.trim().toLowerCase();
  const tokens = parseSearchTokens(query.trim());
  const cropQ = (filterCrop || '').trim().toLowerCase();
  const pestQ = (filterPest || '').trim().toLowerCase();
  const cropTokens = cropQ ? cropQ.split(/\s+/) : [];
  const pestTokens = pestQ ? pestQ.split(/\s+/) : [];

  // ── Match-source field definitions ──
  // "primary" fields are visible on the product card already (no callout needed)
  // "secondary" fields are hidden data — matches need a highlight + source pill
  var matchFields = [
    { key: 'weedLower',         label: null,                  get: function(e) { return e.weedLower; } },
    { key: 'cropName',          label: null,                  get: function(e) { return e.cropName ? e.cropName.toLowerCase() : ''; } },
    { key: 'productName',       label: null,                  get: function(e) { return e.productName ? e.productName.toLowerCase() : ''; } },
    { key: 'group',             label: null,                  get: function(e) { return e.group ? e.group.toLowerCase() : ''; } },
    { key: 'activeIngredient',  label: null,                  get: function(e) { return e.activeIngredient ? e.activeIngredient.toLowerCase() : ''; } },
    { key: 'modeOfAction',      label: null,                  get: function(e) { return e.modeOfAction ? e.modeOfAction.toLowerCase() : ''; } },
    { key: 'classificationsStr',label: null,                  get: function(e) { return e.classificationsStr || ''; } },
    { key: 'apvma',             label: null,                  get: function(e) { return e.apvma ? e.apvma.toLowerCase() : ''; } },
    { key: 'company',           label: null,                  get: function(e) { return e.company ? e.company.toLowerCase() : ''; } },
    { key: 'formulation',       label: null,                  get: function(e) { return e.formulation ? e.formulation.toLowerCase() : ''; } },
    { key: 'signalHeading',     label: null,                  get: function(e) { return e.signalHeading ? e.signalHeading.toLowerCase() : ''; } },
    { key: 'note',              label: 'Critical Comments',   get: function(e) { return e.note ? e.note.toLowerCase() : ''; }, raw: function(e) { return e.note || ''; } },
    { key: 'stage',             label: 'Growth Stage',        get: function(e) { return e.stage ? e.stage.toLowerCase() : ''; }, raw: function(e) { return e.stage || ''; } },
    { key: 'restraintsStr',     label: 'Restraints',          get: function(e) { return e.restraintsStr || ''; }, raw: function(e) { return (Array.isArray(e.restraints) ? e.restraints.join('; ') : (e.restraints || '')); } },
    { key: 'surfactant',        label: 'Surfactant',          get: function(e) { return e.surfactant ? e.surfactant.toLowerCase() : ''; }, raw: function(e) { return e.surfactant || ''; } },
    { key: 'withholdingStr',    label: 'Withholding',         get: function(e) { return e.withholdingStr || ''; }, raw: function(e) { return e.withholdingStr || ''; } },
    { key: 'rateStr',           label: 'Rate',                get: function(e) { return e.rateStr || ''; }, raw: function(e) { return e.rateStr || ''; } },
    { key: 'compatibilityStr',  label: 'Compatibility',       get: function(e) { return e.compatibilityStr || ''; }, raw: function(e) { var c = e.compatibility; if (!c) return ''; var p = []; if (Array.isArray(c.notes)) p = p.concat(c.notes); if (Array.isArray(c.compatible)) p = p.concat(c.compatible.map(function(x){return 'Compatible: '+x;})); if (Array.isArray(c.incompatible)) p = p.concat(c.incompatible.map(function(x){return 'Incompatible: '+x;})); return p.join('. '); } },
    { key: 'sprayerCleanupStr', label: 'Sprayer Cleanup',     get: function(e) { return e.sprayerCleanupStr || ''; }, raw: function(e) { return e.sprayerCleanup || ''; } },
    { key: 'permitSearchStr',   label: 'Permit',              get: function(e) { return e.permitSearchStr || ''; }, raw: function(e) { return e.permitSearchStr || ''; } }
  ];

  return searchIndex.filter(function (entry) {
    // Text match: every token must match somewhere in the entry
    // Also tracks WHICH secondary fields matched for UI highlighting
    var textMatch = true;  // default: pass if no query tokens
    var secondarySources = {};

    if (tokens.length > 0) {
      var anyTokenSecondaryOnly = false;

      textMatch = tokens.every(function(token) {
        var matched = false;
        var matchedPrimary = false;
        for (var fi = 0; fi < matchFields.length; fi++) {
          var f = matchFields[fi];
          var val = f.get(entry);
          if (val && val.includes(token)) {
            matched = true;
            if (f.label) {
              // Secondary field match — track it
              if (!secondarySources[f.key]) {
                secondarySources[f.key] = { label: f.label, raw: f.raw ? f.raw(entry) : val };
              }
            } else {
              matchedPrimary = true;
            }
            break; // first match wins for this token
          }
        }
        if (matched && !matchedPrimary) anyTokenSecondaryOnly = true;
        return matched;
      });

      // Only show match-source pills when at least one token was found ONLY in secondary fields
      entry._matchSources = (textMatch && anyTokenSecondaryOnly) ? Object.values(secondarySources) : [];
    } else {
      entry._matchSources = [];
    }

    // Crop filter: prefer exact match against cropList, fall back to substring on cropName
    // ALSO checks permit crops so products with crop-specific permits are discoverable
    // Uses flexible plural stemming: "grapes" matches "grape", "berries" matches "berry", etc.
    var cropMatch;
    if (cropTokens.length === 0) {
      cropMatch = true;
    } else {
      // Check label cropList first
      var labelCropMatch = false;
      if (entry.cropListLower && entry.cropListLower.length > 0) {
        labelCropMatch = cropTokens.every(function (tok) {
          var forms = pluralForms(tok);
          return entry.cropListLower.some(function (c) {
            return forms.some(function (f) { return c.includes(f); });
          });
        });
      } else {
        labelCropMatch = cropTokens.every(function (tok) {
          var forms = pluralForms(tok);
          var cn = entry.cropName ? entry.cropName.toLowerCase() : '';
          return forms.some(function (f) { return cn.includes(f); });
        });
      }
      // Also check permit crops (linked via appProducts)
      var permitCropMatch = false;
      if (entry.permitCropsLower && entry.permitCropsLower.length > 0) {
        permitCropMatch = cropTokens.every(function (tok) {
          var forms = pluralForms(tok);
          return entry.permitCropsLower.some(function (c) {
            return forms.some(function (f) { return c.includes(f); });
          });
        });
      }
      cropMatch = labelCropMatch || permitCropMatch;
    }

    // Pest / disease filter: prefer exact match against pestList, fall back to substring on weed
    // ALSO checks permit pests so products with pest-specific permits are discoverable
    // Uses flexible plural stemming: "mites" matches "mite", "flies" matches "fly", etc.
    var pestMatch;
    if (pestTokens.length === 0) {
      pestMatch = true;
    } else {
      var labelPestMatch = false;
      if (entry.pestListLower && entry.pestListLower.length > 0) {
        labelPestMatch = pestTokens.every(function (tok) {
          var forms = pluralForms(tok);
          return entry.pestListLower.some(function (p) {
            return forms.some(function (f) { return p.includes(f); });
          });
        });
      } else {
        labelPestMatch = pestTokens.every(function (tok) {
          var forms = pluralForms(tok);
          return entry.weedLower && forms.some(function (f) { return entry.weedLower.includes(f); });
        });
      }
      // Also check permit pests (linked via appProducts)
      var permitPestMatch = false;
      if (entry.permitPestsLower && entry.permitPestsLower.length > 0) {
        permitPestMatch = pestTokens.every(function (tok) {
          var forms = pluralForms(tok);
          return entry.permitPestsLower.some(function (p) {
            return forms.some(function (f) { return p.includes(f); });
          });
        });
      }
      pestMatch = labelPestMatch || permitPestMatch;
    }

    // Product filter (Specific Product overrides Category)
    const productMatch = !filterProduct || entry.productId === filterProduct;

    // Category filter (Only apply if NO specific product is selected)
    const categoryMatch = !filterCategory || entry.category === filterCategory;

    // State filter
    const safeStates = Array.isArray(entry.states) ? entry.states : (typeof entry.states === 'string' ? [entry.states] : ['All']);
    const stateMatch = !filterState ||
      safeStates.includes(filterState) ||
      safeStates.includes('All');

    return textMatch && cropMatch && pestMatch && productMatch && stateMatch && categoryMatch;
  }).sort(function (a, b) {
    // Multi-field relevance scoring — higher = better match
    const scoreEntry = function (entry) {
      let s = 0;
      // Score main query tokens
      if (q) {
        var toks = parseSearchTokens(query.trim());
        toks.forEach(function (tok) {
          if (entry.weedLower === tok) s += 100;
          else if (entry.weedLower.startsWith(tok)) s += 60;
          else if (entry.weedLower.includes(tok)) s += 30;
          var pn = entry.productName ? entry.productName.toLowerCase() : '';
          if (pn === tok) s += 90;
          else if (pn.startsWith(tok)) s += 55;
          else if (pn.includes(tok)) s += 25;
          var ai = entry.activeIngredient ? entry.activeIngredient.toLowerCase() : '';
          if (ai === tok) s += 80;
          else if (ai.includes(tok)) s += 40;
          var cn = entry.cropName ? entry.cropName.toLowerCase() : '';
          if (cn.startsWith(tok)) s += 20;
          else if (cn.includes(tok)) s += 10;
          if (entry.apvma && entry.apvma.toLowerCase().startsWith(tok)) s += 50;
          else if (entry.apvma && entry.apvma.toLowerCase().includes(tok)) s += 20;
          if (entry.group && entry.group.toLowerCase().includes(tok)) s += 15;
          if (entry.formulation && entry.formulation.toLowerCase().includes(tok)) s += 10;
          if (entry.company && entry.company.toLowerCase().includes(tok)) s += 10;
          if (entry.stage && entry.stage.toLowerCase().includes(tok)) s += 8;
          if (entry.note && entry.note.toLowerCase().includes(tok)) s += 5;
          if (entry.restraintsStr && entry.restraintsStr.includes(tok)) s += 5;
        });
      }
      // Boost for crop filter matches
      cropTokens.forEach(function (tok) {
        var cn = entry.cropName ? entry.cropName.toLowerCase() : '';
        if (cn === tok) s += 50;
        else if (cn.startsWith(tok)) s += 30;
        else if (cn.includes(tok)) s += 15;
      });
      // Boost for pest filter matches
      pestTokens.forEach(function (tok) {
        if (entry.weedLower === tok) s += 50;
        else if (entry.weedLower.startsWith(tok)) s += 30;
        else if (entry.weedLower.includes(tok)) s += 15;
      });
      return s;
    };
    const diff = scoreEntry(b) - scoreEntry(a);
    if (diff !== 0) return diff;
    return a.weed.localeCompare(b.weed);
  });
}

// ── Populate the category filter dropdown + pill buttons ───────────────
function populateSearchCategoryFilter() {
  var sel = document.getElementById('search-category-filter');

  // Count products per category
  var categoryCounts = {};
  var uniqueProducts = {};
  searchIndex.forEach(function (item) {
    if (!uniqueProducts[item.productId]) {
      uniqueProducts[item.productId] = true;
      categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
    }
  });

  // Keep hidden select in sync for compatibility
  if (sel) {
    while (sel.options.length > 1) sel.remove(1);
    var categories = ["Herbicides", "Insecticides", "Fungicides", "Miticides", "Adjuvants / Surfactants", "Plant Growth Regulators"];
    categories.forEach(function (cat) {
      if (categoryCounts[cat]) sel.add(new Option(cat, cat));
    });
  }

  // Build pill buttons
  var pillRow = document.getElementById('category-pills');
  if (!pillRow) return;
  pillRow.innerHTML = '';

  // "All" pill
  var totalProducts = Object.keys(uniqueProducts).length;
  var allBtn = document.createElement('button');
  allBtn.className = 'category-pill active';
  allBtn.setAttribute('data-category', '');
  allBtn.setAttribute('onclick', 'selectCategoryPill(this)');
  allBtn.innerHTML = 'All <span class="pill-count">(' + totalProducts + ')</span>';
  pillRow.appendChild(allBtn);

  // Category pills in order
  var catOrder = ["Herbicides", "Insecticides", "Fungicides", "Miticides", "Adjuvants / Surfactants", "Plant Growth Regulators"];
  var catIcons = { Herbicides: "🌿", Insecticides: "🐛", Fungicides: "🍄", Miticides: "🕷️", "Adjuvants / Surfactants": "💧", "Plant Growth Regulators": "🌱" };
  var catColors = { Herbicides: "#16a34a", Insecticides: "#7e22ce", Fungicides: "#0284c7", Miticides: "#dc2626", "Adjuvants / Surfactants": "#ea580c", "Plant Growth Regulators": "#ec4899" };
  var catShort = { "Adjuvants / Surfactants": "Adjuvants", "Plant Growth Regulators": "PGRs" };
  catOrder.forEach(function (cat) {
    if (!categoryCounts[cat]) return;
    var btn = document.createElement('button');
    btn.className = 'category-pill';
    btn.setAttribute('data-category', cat);
    btn.setAttribute('onclick', 'selectCategoryPill(this)');
    if (catColors[cat]) btn.style.setProperty('--pill-color', catColors[cat]);
    var label = catShort[cat] || cat;
    btn.innerHTML = (catIcons[cat] || '') + ' ' + label + ' <span class="pill-count">(' + categoryCounts[cat] + ')</span>';
    pillRow.appendChild(btn);
  });
}

// ── Handle category pill click ──────────────────────────
window.selectCategoryPill = function (btn) {
  var category = btn.getAttribute('data-category');

  // Toggle: if already active, deselect → show All
  var pills = document.querySelectorAll('.category-pill');
  pills.forEach(function (p) { p.classList.remove('active'); });

  if (category === '') {
    // Clicked "All"
    btn.classList.add('active');
  } else {
    btn.classList.add('active');
  }

  // Sync the hidden category select
  var sel = document.getElementById('search-category-filter');
  if (sel) {
    sel.value = category;
    // Fire change event so existing wiring kicks in
    sel.dispatchEvent(new Event('change'));
  }
};

// ── Populate the product filter dropdown in search tab ───
function populateSearchProductFilter() {
  // Build the hidden <select> for legacy compatibility
  const sel = document.getElementById('search-product-filter');
  if (sel) {
    const firstText = sel.options.length > 0 ? sel.options[0].text : 'All Products';
    sel.innerHTML = '';
    sel.add(new Option(firstText, ''));
  }

  const productsMap = {};
  searchIndex.forEach(item => {
    if (!productsMap[item.productId]) {
      productsMap[item.productId] = {
        id: item.productId,
        name: item.productName,
        category: item.category
      };
    }
  });

  const products = Object.values(productsMap);

  const grouped = {};
  products.forEach(p => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push(p);
  });

  const categoryOrder = ["Herbicides", "Insecticides", "Fungicides", "Miticides", "Adjuvants / Surfactants", "Plant Growth Regulators"];

  // Populate hidden <select> (legacy)
  if (sel) {
    categoryOrder.forEach(cat => {
      if (grouped[cat] && grouped[cat].length > 0) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = cat;
        grouped[cat].sort((a, b) => a.name.localeCompare(b.name));
        grouped[cat].forEach(p => {
          optgroup.appendChild(new Option(p.name, p.id));
        });
        sel.appendChild(optgroup);
      }
    });

    Object.keys(grouped).forEach(cat => {
      if (!categoryOrder.includes(cat)) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = cat;
        grouped[cat].sort((a, b) => a.name.localeCompare(b.name));
        grouped[cat].forEach(p => optgroup.appendChild(new Option(p.name, p.id)));
        sel.appendChild(optgroup);
      }
    });
  }

  // Build allProducts + allProductNames for text-input autocomplete
  var allP = products.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
  window.allProducts = allP;
  window.allProductNames = allP.map(function (p) { return p.name; });
}

// ── Refresh product dropdown to show only a specific category ──
// Called whenever the category filter changes. Rebuilds the product
// list so only products from the chosen category appear.
function refreshProductFilter(category) {
  const sel = document.getElementById('search-product-filter');
  if (!sel) return;

  if (!category) {
    // No category selected — restore the full list
    populateSearchProductFilter();
    return;
  }

  // Clear everything
  sel.innerHTML = '';

  // Add the default option
  const defaultOpt = new Option('All Products', '');
  sel.add(defaultOpt);
  sel.value = '';

  // Collect unique products for this category only
  const productsMap = {};
  searchIndex.forEach(item => {
    if (item.category === category && !productsMap[item.productId]) {
      productsMap[item.productId] = { id: item.productId, name: item.productName };
    }
  });

  Object.values(productsMap)
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(p => sel.appendChild(new Option(p.name, p.id)));
}

// ── Agronomic Truncation Helpers ─────────────────────────
function buildAgroListHtml(items, limit = 3) {
  if (typeof items === 'string') items = [items];
  if (!items || !Array.isArray(items)) return '';

  if (items.length <= limit) return '<ul class="agro-list">' + items.map(i => '<li>' + i + '</li>').join('') + '</ul>';

  const visible = items.slice(0, limit).map(i => '<li>' + i + '</li>').join('');
  const hidden = items.slice(limit).map(i => '<li class="agro-hidden-item hidden">' + i + '</li>').join('');
  const toggle = '<li class="agro-more-toggle" style="color:var(--primary);cursor:pointer;font-weight:500;list-style:none;margin-top:4px;font-size:0.85em;" onclick="toggleAgroItems(this, event, ' + (items.length - limit) + ')">... +' + (items.length - limit) + ' more</li>';

  return '<ul class="agro-list">' + visible + hidden + toggle + '</ul>';
}

window.toggleAgroItems = function (btn, event, count) {
  event.stopPropagation();
  const hiddenItems = btn.parentElement.querySelectorAll('.agro-hidden-item');
  if (hiddenItems[0].classList.contains('hidden')) {
    hiddenItems.forEach(el => el.classList.remove('hidden'));
    btn.textContent = ' (show less)';
  } else {
    hiddenItems.forEach(el => el.classList.add('hidden'));
    btn.textContent = '... +' + count + ' more';
  }
};

function buildAgroTextHtml(text, limit = 150) {
  if (text.length <= limit) return '<div class="agro-text">' + text + '</div>';

  let breakPoint = text.lastIndexOf(' ', limit);
  if (breakPoint === -1) breakPoint = limit;

  const visible = text.substring(0, breakPoint);
  const hidden = text.substring(breakPoint);

  return '<div class="agro-text">' + visible +
    '<span class="agro-hidden-text hidden">' + hidden + '</span>' +
    '<span class="agro-more-toggle-text" style="color:var(--primary);cursor:pointer;font-weight:500;margin-left:4px;font-size:0.85em;" onclick="toggleAgroText(this, event)">... (show more)</span>' +
    '</div>';
}

window.toggleAgroText = function (btn, event) {
  event.stopPropagation();
  const hiddenSpan = btn.previousElementSibling;
  if (hiddenSpan.classList.contains('hidden')) {
    hiddenSpan.classList.remove('hidden');
    btn.textContent = ' (show less)';
  } else {
    hiddenSpan.classList.add('hidden');
    btn.textContent = '... (show more)';
  }
};

// ── Note Truncation Helper (Critical Comments) ───────────
function buildNoteHtml(text, limit = 150) {
  if (!text) return '';
  if (text.length <= limit) return text;

  let breakPoint = text.lastIndexOf(' ', limit);
  if (breakPoint === -1) breakPoint = limit;

  const visible = text.substring(0, breakPoint);
  const hidden = text.substring(breakPoint);

  return visible +
    '<span class="hidden">' + hidden + '</span>' +
    '<span class="agro-more-toggle-text" style="color:var(--product-color, var(--primary)); cursor:pointer; font-weight:600; margin-left:6px;" onclick="toggleAgroText(this, event)">... (show more)</span>';
}

// ── Agronomic Details Panel Builder ──────────────────────
function buildAgronomicPanelHtml(productId, uniqueId) {
  const prod = productDatabase[productId];
  if (!prod) return '';

  const restraints = prod.restraints || [];
  const comp = prod.compatibility || {};

  // 1. Withholding extraction
  const withHRaw = prod.withholding;
  let hasWithholding = false;
  let withHType = 'object';
  let withHList = [];

  if (withHRaw) {
    if (typeof withHRaw === 'string' && withHRaw !== 'Not specified') {
      hasWithholding = true;
      withHType = 'string';
    } else if (typeof withHRaw === 'object' && Object.keys(withHRaw).length > 0 && Object.values(withHRaw).some(v => v !== 'Not specified')) {
      hasWithholding = true;
      for (const [k, val] of Object.entries(withHRaw)) {
        if (val && val !== 'Not specified') {
          let cleanKey = k.replace(/_/g, ' ');
          cleanKey = cleanKey.charAt(0).toUpperCase() + cleanKey.slice(1);
          withHList.push('<strong>' + cleanKey + ':</strong> ' + val);
        }
      }
    }
  }

  // 2. Compatibility extraction
  let compList = [];
  const hasComp = (comp.compatible && comp.compatible.length > 0) || (comp.incompatible && comp.incompatible.length > 0) || (comp.notes && comp.notes.length > 0);
  if (hasComp) {
    if (comp.compatible && comp.compatible.length > 0) compList.push('<strong>Compatible:</strong> ' + comp.compatible.join(', '));
    if (comp.incompatible && comp.incompatible.length > 0) compList.push('<strong>Incompatible:</strong> ' + comp.incompatible.join(', '));
    if (comp.notes && comp.notes.length > 0) comp.notes.forEach(n => compList.push(n));
  }

  // 3. Surfactant extraction
  const surfRaw = prod.surfactant;
  let surfStr = '';
  let surfList = [];
  if (surfRaw) {
    if (typeof surfRaw === 'string') surfStr = surfRaw;
    else if (typeof surfRaw === 'object') surfList = Object.values(surfRaw);
  }
  const hasSurf = surfStr !== '' && surfStr !== 'Not specified' || surfList.length > 0;

  // 4. Cleanup extraction
  const cleanRaw = prod.sprayerCleanup;
  let cleanStr = '';
  let cleanList = [];
  if (cleanRaw) {
    if (typeof cleanRaw === 'string') cleanStr = cleanRaw;
    else if (Array.isArray(cleanRaw)) cleanList = cleanRaw;
  }
  const hasCleanup = cleanStr !== '' && cleanStr !== 'Not specified' || cleanList.length > 0;

  const hasRestraints = restraints.length > 0;
  if (!hasRestraints && !hasWithholding && !hasComp && !hasSurf && !hasCleanup) return '';

  let html = '<div class="agro-details-wrapper">';
  html += '<button class="agro-toggle-btn" onclick="toggleAgroPanel(\'agro-' + uniqueId + '\', this)">';
  html += '<span class="btn-icon">📋</span> Show Agronomic Details';
  html += '</button>';

  html += '<div id="agro-' + uniqueId + '" class="agro-panel hidden">';

  // -- NEW ORDER: Compatibility, Surfactant, Withholding, Restraints, Cleanup --

  if (hasComp) {
    html += '<div class="agro-section">';
    html += '<div class="agro-sec-title">🧪 Compatibility</div>';
    html += buildAgroListHtml(compList);
    html += '</div>';
  }

  if (hasSurf) {
    html += '<div class="agro-section">';
    html += '<div class="agro-sec-title">💧 Surfactant / Adjuvant</div>';
    if (surfList.length > 0) html += buildAgroListHtml(surfList);
    else html += buildAgroTextHtml(surfStr);
    html += '</div>';
  }

  if (hasWithholding) {
    html += '<div class="agro-section">';
    html += '<div class="agro-sec-title">⏳ Withholding Periods</div>';
    if (withHType === 'string') html += buildAgroTextHtml(withHRaw);
    else html += buildAgroListHtml(withHList);
    html += '</div>';
  }

  if (hasRestraints) {
    html += '<div class="agro-section">';
    html += '<div class="agro-sec-title">⚠️ Restraints</div>';
    html += buildAgroListHtml(restraints);
    html += '</div>';
  }

  if (hasCleanup) {
    html += '<div class="agro-section">';
    html += '<div class="agro-sec-title">🚿 Sprayer Cleanup</div>';
    if (cleanList.length > 0) html += buildAgroListHtml(cleanList);
    else html += buildAgroTextHtml(cleanStr);
    html += '</div>';
  }

  html += '</div></div>';
  return html;
}

window.toggleAgroPanel = function (id, btn) {
  event.stopPropagation(); // prevent clicking through to product filters
  const panel = document.getElementById(id);
  if (!panel) return;
  if (panel.classList.contains('hidden')) {
    panel.classList.remove('hidden');
    btn.innerHTML = '<span class="btn-icon">➖</span> Hide Agronomic Details';
  } else {
    panel.classList.add('hidden');
    btn.innerHTML = '<span class="btn-icon">📋</span> Show Agronomic Details';
  }
};

// ── Spot Rate Hunter ─────────────────────────────────────
function findSpotRate(productId, weedName) {
  const prod = productDatabase[productId];
  if (!prod) return null;

  let bestMatch = null;

  // 1. Try to find a spot rate for this exact weed
  for (const cropId in prod.crops) {
    prod.crops[cropId].weeds.forEach(w => {
      if (w.unit && (w.unit.includes('/100L') || w.unit.includes('/L') || w.unit.includes(' 100 L'))) {
        if (w.weed.toLowerCase().includes(weedName.toLowerCase())) {
          bestMatch = { rate: w.rate, rateMax: w.rateMax, unit: w.unit, label: 'Spot Spray (' + w.weed + ')' };
        }
      }
    });
  }
  if (bestMatch) return bestMatch;

  // 2. Fall back to ANY general spot rate
  for (const cropId in prod.crops) {
    prod.crops[cropId].weeds.forEach(w => {
      if (w.unit && (w.unit.includes('/100L') || w.unit.includes('/L') || w.unit.includes(' 100 L'))) {
        if (!bestMatch) {
          bestMatch = { rate: w.rate, rateMax: w.rateMax, unit: w.unit, label: 'General Spot Spray' };
        }
      }
    });
  }

  return bestMatch;
}

// ── Quick-Mix UI Builder ─────────────────────────────────
function buildQuickMixHtml(r) {
  // ── SAFETY BLOCK: Prohibit Spot Spraying for Dangerous Poisons ──
  if (r.signalHeading && r.signalHeading.toUpperCase().includes('DANGEROUS POISON')) {
    return [
      '<div class="quick-mix-panel" style="background: rgba(220, 38, 38, 0.05); border-color: rgba(220, 38, 38, 0.3);">',
      '  <div class="quick-mix-header" style="color: #dc2626;">',
      '    <span class="qm-icon">🚫</span> Spot Spraying Prohibited',
      '  </div>',
      '  <div class="quick-mix-label" style="color: var(--text-sub); font-size: 0.8rem; margin-bottom: 0;">',
      '    This chemical is classified as a <strong>DANGEROUS POISON</strong>. Application via hand-held equipment (e.g. knapsacks) is highly restricted due to extreme over-exposure risk. Consult the full label for authorized broadacre configurations.',
      '  </div>',
      '</div>'
    ].join('\n');
  }

  let spotData = null;

  // Is the current result ALREADY a spot rate?
  if (r.unit && (r.unit.includes('/100L') || r.unit.includes('/L') || r.unit.includes('/10 L') || r.unit.includes(' 100 L'))) {
    spotData = { rate: r.rate, rateMax: r.rateMax, unit: r.unit, label: 'Selected Rate' };
  } else {
    // Current result is /ha or broadacre. Hunt for a spot rate.
    spotData = findSpotRate(r.productId, r.weed);
  }

  if (!spotData) return ''; // No spot rate found anywhere for this chemical

  // Parse the number (using rateMax for highest kill guarantee)
  const rateStr = spotData.rateMax ? String(spotData.rateMax) : String(spotData.rate);
  const match = rateStr.match(/[\d.]+/);
  if (!match) return '';
  const rateNum = parseFloat(match[0]);
  if (isNaN(rateNum)) return '';

  // Normalize everything to "amount per 100L"
  let amtPer100L = 0;
  let unitName = 'mL'; // Default to mL

  const unitLower = spotData.unit.toLowerCase();
  if (unitLower.includes('g')) unitName = 'g';
  else if (unitLower.includes('l') && !unitLower.includes('ml')) {
    if (rateNum < 10) unitName = 'L';
  }

  // Calculate based on the denominator
  if (unitLower.includes('/100l') || unitLower.includes(' 100 l') || unitLower.includes('/100 l')) {
    amtPer100L = rateNum;
  } else if (unitLower.includes('/10l') || unitLower.includes(' 10 l') || unitLower.includes('/10 l')) {
    amtPer100L = rateNum * 10;
  } else if (unitLower.includes('/l') || unitLower.includes(' 1 l') || unitLower.includes('/ 1 l') || unitLower === 'ml/l' || unitLower === 'g/l') {
    amtPer100L = rateNum * 100;
  } else if (unitLower.includes('1500l') || unitLower.includes('1500 l')) {
    amtPer100L = (rateNum / 1500) * 100;
  } else {
    return ''; // Unknown volume unit
  }

  const atvAmt = amtPer100L;
  const backAmt = amtPer100L * 0.15; // 15L backpack

  function formatAmt(amt) {
    if (amt >= 1000 && unitName === 'mL') return (amt / 1000).toFixed(1) + ' L';
    if (amt >= 1000 && unitName === 'g') return (amt / 1000).toFixed(1) + ' kg';
    return (amt % 1 === 0 ? amt : amt.toFixed(1)) + ' ' + unitName;
  }

  return [
    '<div class="quick-mix-panel">',
    '  <div class="quick-mix-header">',
    '    <span class="qm-icon">🧪</span> Quick-Mix (Spot Spraying)',
    '  </div>',
    '  <div class="quick-mix-label">' + spotData.label + ': <strong>' + spotData.rate + (spotData.rateMax && spotData.rateMax !== spotData.rate ? '–' + spotData.rateMax : '') + ' ' + spotData.unit + '</strong></div>',
    '  <div class="quick-mix-grid">',
    '    <div class="qm-item">',
    '      <div class="qm-title">🚜 ATV (100L)</div>',
    '      <div class="qm-value">' + formatAmt(atvAmt) + '</div>',
    '    </div>',
    '    <div class="qm-item">',
    '      <div class="qm-title">🎒 Backpack (15L)</div>',
    '      <div class="qm-value">' + formatAmt(backAmt) + '</div>',
    '    </div>',
    '  </div>',
    '</div>'
  ].join('\n');
}

// ── Weed List Truncation Toggle ────────────────────────
window.toggleWeedText = function (btn, event) {
  event.stopPropagation();
  const hiddenText = btn.previousElementSibling;

  if (hiddenText.classList.contains('hidden')) {
    hiddenText.classList.remove('hidden');
    btn.textContent = ' (show less)';
  } else {
    hiddenText.classList.add('hidden');
    const totalMore = hiddenText.textContent.split(',').length;
    btn.textContent = '... +' + totalMore + ' more';
  }
};

// ── HTML Entity Escape (prevents XSS in highlight output) ─
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ── Text Highlight Helper ──────────────────────────────
// Highlights with a specific CSS class. Used for crop/pest/general highlighting.
function highlightWithClass(escaped, tokens, cssClass) {
  if (!tokens || tokens.length === 0) return escaped;
  var safeTokens = tokens.map(function (t) {
    return escapeHtml(t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  });
  var regex = new RegExp('(' + safeTokens.join('|') + ')', 'gi');
  return escaped.replace(regex, '<mark class="' + cssClass + '">$1</mark>');
}

// Original highlight — backward compatible (uses general yellow highlight)
window.highlightSearchTerm = function (text, query) {
  if (!text) return '';
  var escaped = escapeHtml(text);
  if (!query) return escaped;
  var q = query.trim();
  if (!q) return escaped;
  var tokens = parseSearchTokens(q);
  return highlightWithClass(escaped, tokens, 'search-highlight');
};

// Enhanced highlight — applies crop (green), pest (orange), and general (yellow) highlights
// Pass the active crop/pest filter values; falls back to general highlight if none
window.highlightSearchTermEnhanced = function (text, query, cropFilter, pestFilter, fieldType) {
  if (!text) return '';
  var escaped = escapeHtml(text);
  var hasGeneral = query && query.trim().length > 0;
  var hasCrop = cropFilter && cropFilter.trim().length > 0;
  var hasPest = pestFilter && pestFilter.trim().length > 0;
  if (!hasGeneral && !hasCrop && !hasPest) return escaped;

  // Apply crop highlight to crop-type fields
  if (hasCrop && (fieldType === 'crop' || !fieldType)) {
    var cropTokens = cropFilter.trim().split(/\s+/).filter(function (t) { return t.length > 0; });
    escaped = highlightWithClass(escaped, cropTokens, 'search-highlight-crop');
  }
  // Apply pest highlight to pest-type fields
  if (hasPest && (fieldType === 'pest' || !fieldType)) {
    var pestTokens = pestFilter.trim().split(/\s+/).filter(function (t) { return t.length > 0; });
    escaped = highlightWithClass(escaped, pestTokens, 'search-highlight-pest');
  }
  // Apply general highlight for main search bar tokens (phrase-aware)
  if (hasGeneral) {
    var generalTokens = parseSearchTokens(query.trim());
    escaped = highlightWithClass(escaped, generalTokens, 'search-highlight');
  }
  return escaped;
};

// ── Render search result cards ───────────────────────────
function renderSearchResults(results, query) {
  const container = document.getElementById('search-results');
  const countEl = document.getElementById('search-result-count');

  if (!container) return;

  if (results.length === 0) {
    // ── Smart zero-results: detect which filters are blocking ──
    var activeFilterDescs = [];
    var cropEl = document.getElementById('crop-filter-input');
    var pestEl = document.getElementById('pest-filter-input');
    var prodEl = document.getElementById('product-filter-input');
    var stateEl = document.getElementById('state-filter-input');
    if (cropEl && cropEl.value.trim()) activeFilterDescs.push({ label: 'Crop', value: cropEl.value.trim(), icon: '🌱' });
    if (pestEl && pestEl.value.trim()) activeFilterDescs.push({ label: 'Pest', value: pestEl.value.trim(), icon: '🐛' });
    if (prodEl && prodEl.value.trim()) activeFilterDescs.push({ label: 'Product', value: prodEl.value.trim(), icon: '📦' });
    if (stateEl && stateEl.value.trim()) activeFilterDescs.push({ label: 'State', value: stateEl.value.trim(), icon: '📍' });

    var hasFilters = activeFilterDescs.length > 0;
    var unfilteredCount = 0;

    if (hasFilters) {
      // Run search again with just the text query (no filters) to see how many results exist
      var textOnly = query.trim();
      var catVal = document.getElementById('search-category-filter');
      var catFilter = catVal ? catVal.value : '';
      var unfilteredResults = runSearch(textOnly, '', '', catFilter, '', '');
      // Count unique products
      var uProds = new Set();
      unfilteredResults.forEach(function (r) { uProds.add(r.productId); });
      unfilteredCount = uProds.size;
    }

    var html = '<div class="search-no-results-smart">';
    html += '<div class="no-results-icon">🔍</div>';
    html += '<div class="no-results-title">No results found</div>';

    if (hasFilters && unfilteredCount > 0) {
      html += '<div class="no-results-explanation">Your search ' +
        (query.trim() ? 'for <strong>"' + query.trim() + '"</strong> ' : '') +
        'returned 0 results with these filters active:</div>';
      html += '<div class="no-results-filters">';
      activeFilterDescs.forEach(function (f) {
        html += '<span class="no-results-filter-chip">' + f.icon + ' ' + f.label + ': <strong>' + f.value + '</strong></span>';
      });
      html += '</div>';
      html += '<div class="no-results-hint">Without filters: <strong>' + unfilteredCount + ' product' + (unfilteredCount !== 1 ? 's' : '') + '</strong> found</div>';
      html += '<button class="no-results-clear-btn" onclick="window.smartClearFilters()">Search without filters →</button>';
    } else if (hasFilters && unfilteredCount === 0) {
      html += '<div class="no-results-explanation">No products match ' +
        (query.trim() ? '<strong>"' + query.trim() + '"</strong>' : 'this search') +
        ', even without filters.</div>';
      html += '<div class="no-results-filters">';
      activeFilterDescs.forEach(function (f) {
        html += '<span class="no-results-filter-chip">' + f.icon + ' ' + f.label + ': <strong>' + f.value + '</strong></span>';
      });
      html += '</div>';
      html += '<button class="no-results-clear-btn" onclick="window.clearAllFilters()">Clear everything and start fresh →</button>';
    } else {
      html += '<div class="no-results-explanation">Try a different weed, crop, active ingredient, or group name.</div>';
    }

    // ── "Request a Label" prompt on every zero-results screen ──
    var escapedQuery = (query || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    html += '<div class="no-results-request-section">';
    html += '<p style="margin:0 0 10px;font-size:0.85rem;color:var(--text-sub);">Can\'t find the product you need?</p>';
    html += '<button class="no-results-request-btn" onclick="window.openLabelRequest(\'' + escapedQuery + '\')">📬 Request a Label</button>';
    html += '</div>';

    html += '</div>';
    container.innerHTML = html;
    if (countEl) countEl.textContent = '0 results';
    return;
  }

  // ── GROUPING LOGIC ──
  // Check how many unique products are in the results
  const uniqueProducts = new Set();
  results.forEach(r => uniqueProducts.add(r.productId));

  const getCategoryColor = (cat) => {
    if (!cat) return '#64748b'; // Slate
    const c = cat.toLowerCase();
    if (c.includes('herbicide')) return '#16a34a'; // Green
    if (c.includes('insecticide')) return '#7e22ce'; // Purple
    if (c.includes('fungicide')) return '#0284c7'; // Blue
    if (c.includes('adjuvant') || c.includes('surfactant') || c.includes('wetter')) return '#ea580c'; // Orange
    if (c.includes('miticide')) return '#dc2626'; // Red
    if (c.includes('termiticide')) return '#b45309'; // Amber/Brown
    if (c.includes('regulator')) return '#ec4899'; // Pink
    return '#64748b'; // Default Slate
  };

  // If more than 1 product found, show PRODUCT SUMMARY view
  if (uniqueProducts.size > 1) {
    if (countEl) countEl.textContent = uniqueProducts.size + ' products found';

    // Get active crop/pest filter values for highlighting
    const af = window._activeFilters || {};

    // Group results by product to get counts/details
    const productGroups = {};
    results.forEach(r => {
      if (!productGroups[r.productId]) {
        productGroups[r.productId] = {
          id: r.productId,
          name: r.productName,
          color: r.productColor,
          active: r.activeIngredient,
          category: r.category,
          group: r.group,
          modeOfAction: r.modeOfAction || '',
          labelPdf: r.labelPdf || null,
          sdsPdf: r.sdsPdf || null,
          permits: r.permits || [],
          classification: r.classification || null,
          signalHeading: r.signalHeading || null,
          apvma: r.apvma || '',
          company: r.company || '',
          formulation: r.formulation || '',
          harvest: r.harvest || '',
          grazing: r.grazing || '',
          surfactant: r.surfactant || '',
          matchCount: 0,
          matchedCrops: new Set(),
          matchedPests: new Set(),
          matchSources: {}
        };
      }
      var pg = productGroups[r.productId];
      pg.matchCount++;
      if (r.cropName) pg.matchedCrops.add(r.cropName);
      if (r.weed) pg.matchedPests.add(r.weed);
      // Collect secondary match sources (deduplicate by label)
      if (r._matchSources) {
        r._matchSources.forEach(function(src) {
          if (!pg.matchSources[src.label]) {
            pg.matchSources[src.label] = src;
          }
        });
      }
    });

    const products = Object.values(productGroups).sort((a, b) => a.name.localeCompare(b.name));

    container.innerHTML = products.map(p => {
      // Check if already selected
      const isSelected = window.comparisonList && window.comparisonList.includes(p.id) ? 'checked' : '';
      const labelBtn = p.labelPdf
        ? '<a href="' + encodeURI(p.labelPdf) + '" target="_blank" class="view-label-btn" style="flex:1; text-align:center;" onclick="event.stopPropagation()">📄 Label</a>'
        : '';

      const sdsBtn = p.sdsPdf
        ? '<a href="' + encodeURI(p.sdsPdf) + '" target="_blank" class="view-sds-btn" style="flex:1;" onclick="event.stopPropagation()"><span class="btn-icon">🛡️</span> SDS</a>'
        : '';

      let badgesHtml = '';
      let tagsHtml = '';

      const getSignalBadge = (signal) => {
        if (!signal) return '';
        const s = signal.toLowerCase();
        let bg = 'rgba(239, 68, 68, 0.1)';
        let color = '#dc2626';
        if (s.includes('dangerous poison')) {
          bg = '#dc2626'; color = '#fff';
        } else if (s.includes('poison')) {
          bg = '#fca5a5'; color = '#991b1b';
        } else if (s.includes('caution')) {
          bg = '#fef3c7'; color = '#d97706';
        } else if (s.includes('warning')) {
          bg = '#ffedd5'; color = '#c2410c';
        }
        return `<span class="res-badge" style="background:${bg}; color:${color}; border:none; font-weight:700;">${signal.toUpperCase()}</span>`;
      };

      if (p.classification) {
        const types = typeof p.classification.type === 'string' ? [p.classification.type] : (Array.isArray(p.classification.type) ? p.classification.type : []);
        const timings = Array.isArray(p.classification.timing) ? p.classification.timing : [];
        const allTags = [...types, ...timings];
        if (allTags.length > 0) {
          tagsHtml = allTags.map(tag => `<span class="res-badge">${tag}</span>`).join('');
        }
      }

      const signalHtml = getSignalBadge(p.signalHeading);
      if (signalHtml || tagsHtml) {
        badgesHtml = '<div class="result-badges" style="margin-bottom: 12px; margin-top: 4px;">' +
          signalHtml + tagsHtml +
          '</div>';
      }

      // Build compact meta row for summary card
      const sumMetaItems = [];
      if (p.apvma) sumMetaItems.push('<span class="sum-meta-chip">🏷️ ' + escapeHtml(p.apvma) + '</span>');
      if (p.formulation) sumMetaItems.push('<span class="sum-meta-chip">🧪 ' + escapeHtml(p.formulation) + '</span>');
      if (p.company) sumMetaItems.push('<span class="sum-meta-chip">🏢 ' + escapeHtml(p.company) + '</span>');
      const sumMetaHtml = sumMetaItems.length > 0
        ? '<div class="sum-meta-row">' + sumMetaItems.join('') + '</div>'
        : '';

      // Withholding summary for card
      const whSummaryParts = [];
      if (p.harvest) whSummaryParts.push('🌾 WHP: ' + escapeHtml(p.harvest.substring(0, 80)) + (p.harvest.length > 80 ? '…' : ''));
      if (p.grazing) whSummaryParts.push('🐄 Grazing: ' + escapeHtml(p.grazing.substring(0, 80)) + (p.grazing.length > 80 ? '…' : ''));
      const whSummaryHtml = whSummaryParts.length > 0
        ? '<div class="sum-whp-row">' + whSummaryParts.map(function (s) { return '<div class="sum-whp-item">' + s + '</div>'; }).join('') + '</div>'
        : '';

      // Build matched crops/pests snippet when crop/pest filters are active
      var matchedSnippetHtml = '';
      if (af.crop || af.pest) {
        var snippetParts = [];
        if (af.crop && p.matchedCrops.size > 0) {
          var cropArr = Array.from(p.matchedCrops).slice(0, 3);
          var cropItems = cropArr.map(function (c) { return window.highlightSearchTermEnhanced(c, '', af.crop, '', 'crop'); });
          snippetParts.push('<div style="font-size:0.82rem; margin-bottom:4px;"><strong>🌱 Crops:</strong> ' + cropItems.join(', ') + (p.matchedCrops.size > 3 ? ' <span style="color:var(--text-sub)">+' + (p.matchedCrops.size - 3) + ' more</span>' : '') + '</div>');
        }
        if (af.pest && p.matchedPests.size > 0) {
          var pestArr = Array.from(p.matchedPests).slice(0, 4);
          var pestItems = pestArr.map(function (w) { return window.highlightSearchTermEnhanced(w, '', '', af.pest, 'pest'); });
          snippetParts.push('<div style="font-size:0.82rem; margin-bottom:4px;"><strong>🐛 Pests/Weeds:</strong> ' + pestItems.join(', ') + (p.matchedPests.size > 4 ? ' <span style="color:var(--text-sub)">+' + (p.matchedPests.size - 4) + ' more</span>' : '') + '</div>');
        }
        if (snippetParts.length > 0) {
          matchedSnippetHtml = '<div style="background:var(--bg); border-radius:8px; padding:8px 10px; margin-bottom:8px; border:1px solid var(--border);">' + snippetParts.join('') + '</div>';
        }
      }

      // ── Match-source pills: show WHERE the search term was found ──
      // Only for secondary fields (not product name, active, crop, weed etc.)
      var matchSourceHtml = '';
      var sources = Object.values(p.matchSources);
      if (sources.length > 0 && query.trim()) {
        var sourceItems = sources.map(function(src) {
          // Build snippet: find the search term in context and highlight it
          var raw = src.raw || '';
          var snippet = '';
          if (raw) {
            var qLower = query.trim().toLowerCase();
            var qTerms = qLower.split(/\s+/).filter(function(t) { return t.length > 0; });
            // Find the first matching term's position in raw text
            var rawLower = raw.toLowerCase();
            var bestIdx = -1;
            var bestTerm = '';
            for (var ti = 0; ti < qTerms.length; ti++) {
              var idx = rawLower.indexOf(qTerms[ti]);
              if (idx !== -1 && (bestIdx === -1 || idx < bestIdx)) {
                bestIdx = idx;
                bestTerm = qTerms[ti];
              }
            }
            if (bestIdx !== -1) {
              // Extract a window around the match
              var start = Math.max(0, bestIdx - 40);
              var end = Math.min(raw.length, bestIdx + bestTerm.length + 60);
              snippet = (start > 0 ? '…' : '') + raw.substring(start, end) + (end < raw.length ? '…' : '');
              // HTML-escape the snippet BEFORE adding <mark> tags
              // Raw product data may contain < > " ' & characters (e.g. "<33°C", ">50%")
              // which would break the card DOM structure if inserted unescaped
              snippet = escapeHtml(snippet);
              // Highlight all matching terms in the escaped snippet
              for (var hi = 0; hi < qTerms.length; hi++) {
                var re = new RegExp('(' + qTerms[hi].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
                snippet = snippet.replace(re, '<mark style="background:#fde68a; color:#92400e; padding:0 2px; border-radius:2px; font-weight:600;">$1</mark>');
              }
            }
          }

          // Icon per source type
          var icon = '📋';
          var pillColor = '#6366f1'; // indigo default
          if (src.label === 'Permit') { icon = '🏛️'; pillColor = '#0891b2'; }
          else if (src.label === 'Compatibility') { icon = '🔄'; pillColor = '#7c3aed'; }
          else if (src.label === 'Sprayer Cleanup') { icon = '🧹'; pillColor = '#059669'; }
          else if (src.label === 'Critical Comments') { icon = '📝'; pillColor = '#d97706'; }
          else if (src.label === 'Restraints') { icon = '⚠️'; pillColor = '#dc2626'; }
          else if (src.label === 'Withholding') { icon = '⏱️'; pillColor = '#0284c7'; }
          else if (src.label === 'Surfactant') { icon = '💧'; pillColor = '#0d9488'; }
          else if (src.label === 'Growth Stage') { icon = '🌱'; pillColor = '#16a34a'; }
          else if (src.label === 'Rate') { icon = '📊'; pillColor = '#64748b'; }

          var html = '<div class="match-source-item" style="margin-bottom:6px;">';
          html += '<span class="match-source-pill" style="display:inline-block; font-size:0.7rem; font-weight:700; background:' + pillColor + '; color:#fff; padding:2px 8px; border-radius:10px; margin-right:6px; vertical-align:middle;">' + icon + ' ' + src.label + '</span>';
          if (snippet) {
            html += '<span class="match-source-snippet" style="font-size:0.78rem; color:var(--text-sub); line-height:1.35;">' + snippet + '</span>';
          }
          html += '</div>';
          return html;
        });
        matchSourceHtml = '<div class="match-source-box" style="background:var(--bg); border:1px solid var(--border); border-radius:8px; padding:8px 10px; margin-bottom:8px;">' +
          '<div style="font-size:0.72rem; font-weight:700; color:var(--text-sub); margin-bottom:4px; text-transform:uppercase; letter-spacing:0.5px;">Matched in</div>' +
          sourceItems.join('') +
          '</div>';
      }

      return [
        '<div class="product-summary-card" data-product-id="' + p.id + '" style="--product-color:' + getCategoryColor(p.category) + '">',
        '  <div class="prod-sum-header" onclick="filterByProduct(\'' + p.id + '\')">',
        '      <div class="prod-sum-name">' + window.highlightSearchTermEnhanced(p.name, query, af.crop, af.pest) + '</div>',
        '    <div class="prod-sum-badge">' + p.matchCount + ' matches</div>',
        '  </div>',
        '  <div class="prod-sum-details" onclick="filterByProduct(\'' + p.id + '\')">',
        '    <div style="margin-bottom:8px;"><span style="font-size:0.75rem; font-weight:700; background:var(--product-color); color:#ffffff; padding:3px 8px; border-radius:12px; display:inline-block; line-height:1;">' + p.category + '</span></div>',
        '    <div>' + window.highlightSearchTermEnhanced(p.active, query, af.crop, af.pest) + '</div>',
        '    <div style="font-size:0.75rem; color:var(--text-sub); margin-top:2px; margin-bottom:8px;">' + window.highlightSearchTermEnhanced(p.group, query, af.crop, af.pest) + (p.modeOfAction ? ' • ' + window.highlightSearchTermEnhanced(p.modeOfAction, query, af.crop, af.pest) : '') + '</div>',
        matchedSnippetHtml,
        matchSourceHtml,
        sumMetaHtml,
        whSummaryHtml,
        '    ' + badgesHtml,
        '    <label class="compare-products-btn" style="margin-top:6px;" onclick="event.stopPropagation();">',
        '      <input type="checkbox" class="compare-checkbox" ' + isSelected + ' onchange="toggleCompare(\'' + p.id + '\', this)">',
        '      <span>Select to compare products</span>',
        '    </label>',
        '  </div>',
        '  <div class="prod-sum-actions" style="display:flex; justify-content:space-between; margin-bottom:10px;">',
        '    ' + labelBtn,
        p.sdsPdf ? '    ' + sdsBtn : '',
        '  </div>',
        p.permits && p.permits.length > 0 ? '  <div class="prod-sum-actions" style="margin-top:4px;">' + p.permits.map(function (perm) { return '    <a href="' + (perm.pdfUrl || encodeURI('APVMA - Permits/' + perm.pdfFilename)) + '" target="_blank" class="view-permit-btn" style="flex:1; text-align:center;" onclick="event.stopPropagation()"><span class="btn-icon">🏛️</span> ' + perm.permitNumber + (perm.expiryDate ? ' ' + formatPermitExpiry(perm.expiryDate) : '') + (perm.pdfUrl ? ' (Online)' : '') + '</a>'; }).join('\n') + '  </div>' : '',
        '  <div class="prod-sum-actions">',
        buildAgronomicPanelHtml(p.id, 'sum-' + p.id),
        '  </div>',
        '</div>'
      ].join('\n');
    }).join('\n');

    // ── "Request a Label" prompt at bottom of multi-product results ──
    var escapedQ = (query || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    container.innerHTML += '<div class="request-label-footer" style="text-align:center; padding:18px 12px 8px; margin-top:8px;">' +
      '<p style="margin:0 0 8px; font-size:0.82rem; color:var(--text-sub);">Can\'t find what you\'re looking for?</p>' +
      '<button class="no-results-request-btn" onclick="window.openLabelRequest(\'' + escapedQ + '\')" style="font-size:0.82rem;">📬 Request a Label</button>' +
      '</div>';
    return;
  }

  // ── SINGLE PRODUCT — Grouped Use Situations View ──
  const r0 = results[0];
  const cropSet = new Set(results.map(r => r.cropName));
  if (countEl) {
    countEl.textContent = cropSet.size + ' crop' + (cropSet.size !== 1 ? 's' : '') +
      ' · ' + results.length + ' use situation' + (results.length !== 1 ? 's' : '');
  }

  // Signal badge helper (product-level, used once on hero)
  const getSignalBadge = (signal) => {
    if (!signal) return '';
    const s = signal.toLowerCase();
    let bg = 'rgba(239, 68, 68, 0.1)', color = '#dc2626';
    if (s.includes('dangerous poison')) { bg = '#dc2626'; color = '#fff'; }
    else if (s.includes('poison')) { bg = '#fca5a5'; color = '#991b1b'; }
    else if (s.includes('caution')) { bg = '#fef3c7'; color = '#d97706'; }
    else if (s.includes('warning')) { bg = '#ffedd5'; color = '#c2410c'; }
    return '<span class="res-badge" style="background:' + bg + '; color:' + color + '; border:none; font-weight:700;">' + signal.toUpperCase() + '</span>';
  };

  // Classification + signal badges (shown once)
  let heroBadgesHtml = '';
  if (r0.classification) {
    const types = typeof r0.classification.type === 'string' ? [r0.classification.type] : (Array.isArray(r0.classification.type) ? r0.classification.type : []);
    const timings = Array.isArray(r0.classification.timing) ? r0.classification.timing : [];
    const allTags = [...types, ...timings];
    const signalHtml = getSignalBadge(r0.signalHeading);
    const tagsHtml = allTags.map(tag => '<span class="res-badge">' + tag + '</span>').join('');
    if (signalHtml || tagsHtml) {
      heroBadgesHtml = '<div class="result-badges" style="margin-bottom:12px; margin-top:4px;">' + signalHtml + tagsHtml + '</div>';
    }
  }

  const labelBtn = r0.labelPdf
    ? '<a href="' + encodeURI(r0.labelPdf) + '" target="_blank" class="view-label-btn"><span class="btn-icon">📄</span> View Full PDF Label</a>'
    : '<div class="no-label-btn">No PDF Label Attached</div>';
  const sdsBtn = r0.sdsPdf
    ? '<a href="' + encodeURI(r0.sdsPdf) + '" target="_blank" class="view-sds-btn" style="margin-top:0.5rem;"><span class="btn-icon">🛡️</span> View Safety Data Sheet (SDS)</a>'
    : '';

  // ── Build product detail info rows ──────────────────────
  function buildDetailRow(icon, label, value) {
    if (!value) return '';
    var safeValue = escapeHtml(String(value));
    // Stack label above value when text is long (>80 chars) to avoid wasted whitespace
    if (String(value).length > 80) {
      return '<div class="prod-detail-row prod-detail-row--stacked"><span class="prod-detail-label">' + icon + ' ' + label + '</span><span class="prod-detail-value">' + safeValue + '</span></div>';
    }
    return '<div class="prod-detail-row"><span class="prod-detail-label">' + icon + ' ' + label + '</span><span class="prod-detail-value">' + safeValue + '</span></div>';
  }

  const whHarvest = r0.harvest || (r0.withholding && r0.withholding.harvest) || '';
  const whGrazing = r0.grazing || (r0.withholding && r0.withholding.grazing) || '';

  let restraintsHtml = '';
  if (r0.restraints && r0.restraints.length > 0) {
    const items = r0.restraints.map(function (rx) { return '<li>' + escapeHtml(String(rx)) + '</li>'; }).join('');
    restraintsHtml = [
      '<div class="prod-detail-section">',
      '  <details>',
      '    <summary class="prod-detail-summary"><span class="prod-detail-label">⚠️ Restraints</span> <span style="font-size:0.75rem; color:var(--text-sub);">(' + r0.restraints.length + ' item' + (r0.restraints.length !== 1 ? 's' : '') + ' — click to expand)</span></summary>',
      '    <ul class="prod-detail-list">' + items + '</ul>',
      '  </details>',
      '</div>'
    ].join('\n');
  }

  const compatHtml = (function () {
    if (!r0.compatibility) return '';
    const comp = r0.compatibility;
    const parts = [];
    if (comp.compatible && comp.compatible.length > 0)
      parts.push('<span style="color:#16a34a;">✔ Compatible: </span>' + escapeHtml(comp.compatible.join(', ')));
    if (comp.incompatible && comp.incompatible.length > 0)
      parts.push('<span style="color:#dc2626;">✘ Incompatible: </span>' + escapeHtml(comp.incompatible.join(', ')));
    if (comp.notes && comp.notes.length > 0)
      parts.push(escapeHtml(comp.notes.join(' ')));
    return parts.length > 0 ? parts.join('<br>') : '';
  })();

  const prodDetailsHtml = (function () {
    const rows = [
      r0.apvma ? buildDetailRow('🏷️', 'APVMA No.', r0.apvma) : '',
      r0.company ? buildDetailRow('🏢', 'Registrant', r0.company) : '',
      r0.formulation ? buildDetailRow('🧪', 'Formulation', r0.formulation) : '',
      whHarvest ? buildDetailRow('🌾', 'Harvest WHP', whHarvest) : '',
      whGrazing ? buildDetailRow('🐄', 'Grazing WHP', whGrazing) : '',
      r0.surfactant ? buildDetailRow('💧', 'Surfactant / Adjuvant', r0.surfactant) : '',
      r0.sprayerCleanup ? buildDetailRow('🚿', 'Sprayer Cleanup', r0.sprayerCleanup) : '',
      compatHtml ? '<div class="prod-detail-row" style="flex-direction:column; align-items:flex-start; gap:4px;"><span class="prod-detail-label">🔀 Compatibility</span><span class="prod-detail-value" style="margin-left:0;">' + compatHtml + '</span></div>' : '',
    ].filter(Boolean).join('\n');
    if (!rows) return '';
    return '<div class="prod-detail-section" style="margin-top:10px; padding-top:10px; border-top: 1px solid var(--border);">' + rows + restraintsHtml + '</div>';
  })();

  // ── Hero card — product-level info shown exactly once ──
  const heroIsSelected = (window.comparisonList || []).includes(r0.productId) ? 'checked' : '';
  const heroHtml = [
    '<div class="search-result-card prod-detail-hero" style="--product-color:' + getCategoryColor(r0.category) + '">',
    // ── Back button + Compare toggle bar ──
    '  <div style="display:flex;gap:8px;margin-bottom:10px;">',
    '    <button onclick="goBackToResults()" class="hero-action-pill hero-action-back" style="flex:1;justify-content:center;">' + (window._weedNavSource && window._weedNavSource.active ? '← Back to Weeds' : window._pestNavSource && window._pestNavSource.active ? '← Back to Pests' : window._diseaseNavSource && window._diseaseNavSource.active ? '← Back to Diseases' : '← Back to results') + '</button>',
    '    <label class="hero-action-pill hero-action-compare" style="flex:1;justify-content:center;" title="Add to Cost Compare">',
    '      <input type="checkbox" class="compare-checkbox" ' + heroIsSelected + ' onchange="toggleCompare(\'' + r0.productId + '\', this)">',
    '      <span>⚖️ Add to Compare</span>',
    '    </label>',
    '  </div>',
    '  <div class="result-header">',
    '    <div class="result-title-row">',
    '      <div class="result-product-name">' + window.highlightSearchTermEnhanced(r0.productName, query, (window._activeFilters||{}).crop, (window._activeFilters||{}).pest) + '</div>',
    '    </div>',
    r0.activeIngredient
      ? '    <div class="result-subtitle">' + window.highlightSearchTermEnhanced(r0.activeIngredient, query, (window._activeFilters||{}).crop, (window._activeFilters||{}).pest) + ' (' + window.highlightSearchTermEnhanced(r0.group, query, (window._activeFilters||{}).crop, (window._activeFilters||{}).pest) + ')' + (r0.modeOfAction ? ' • ' + window.highlightSearchTermEnhanced(r0.modeOfAction, query, (window._activeFilters||{}).crop, (window._activeFilters||{}).pest) : '') + '</div>'
      : '',
    '    ' + heroBadgesHtml,
    prodDetailsHtml,
    '  </div>',
    '  <div class="result-card-actions">',
    '    ' + labelBtn,
    r0.sdsPdf ? '    ' + sdsBtn : '',
    r0.permits && r0.permits.length > 0
      ? r0.permits.map(p => '    <a href="' + (p.pdfUrl || encodeURI('APVMA - Permits/' + p.pdfFilename)) + '" target="_blank" class="view-permit-btn"><span class="btn-icon">🏛️</span> View APVMA Permit [' + p.permitNumber + ']' + (p.expiryDate ? ' ' + formatPermitExpiry(p.expiryDate) : '') + (p.pdfUrl ? ' (Online)' : '') + '</a>').join('\n')
      : '',
    '  </div>',
    // ── Permit crops/pests summary (so users know WHY a permit match appeared) ──
    (function () {
      if (!r0.permits || r0.permits.length === 0) return '';
      var permitSections = r0.permits.map(function (p) {
        var crops = (p.crops || []).join(', ') || 'Not specified';
        var pests = (p.pests || []).join(', ') || 'Not specified';
        var statusClass = '';
        var statusLabel = '';
        if (p.expiryDate) {
          var exp = new Date(p.expiryDate);
          var now = new Date();
          var daysLeft = Math.floor((exp - now) / 86400000);
          if (daysLeft < 0) { statusClass = 'permit-status-expired'; statusLabel = ' (Expired)'; }
          else if (daysLeft < 180) { statusClass = 'permit-status-expiring'; statusLabel = ' (Expiring soon)'; }
          else { statusClass = 'permit-status-active'; statusLabel = ''; }
        }
        return [
          '<div class="permit-detail-card">',
          '  <div class="permit-detail-header">',
          '    <a href="' + (p.pdfUrl || encodeURI('APVMA - Permits/' + p.pdfFilename)) + '" target="_blank" class="permit-detail-pill" title="View Permit PDF">' + p.permitNumber + statusLabel + '</a>',
          p.expiryDate ? '    <span class="permit-detail-expiry ' + statusClass + '">Expires: ' + p.expiryDate + '</span>' : '',
          '  </div>',
          '  <div class="permit-detail-body">',
          '    <div class="permit-detail-row"><span class="permit-detail-label">Crops:</span> <span class="permit-detail-value">' + window.highlightSearchTermEnhanced(crops, query, (window._activeFilters||{}).crop, '') + '</span></div>',
          '    <div class="permit-detail-row"><span class="permit-detail-label">Pests:</span> <span class="permit-detail-value">' + window.highlightSearchTermEnhanced(pests, query, '', (window._activeFilters||{}).pest) + '</span></div>',
          '  </div>',
          '</div>'
        ].filter(Boolean).join('\n');
      }).join('\n');
      return [
        '<div class="permit-detail-section">',
        '  <div class="permit-detail-section-heading">🏛️ APVMA Permits (' + r0.permits.length + ')</div>',
        permitSections,
        '</div>'
      ].join('\n');
    })(),
    // ── Linked Weeds from weeds registry (reverse lookup) ──
    (function () {
      if (!window.weedsRegistry) return '';
      var linked = [];
      window.weedsRegistry.forEach(function (w) {
        var lps = w.linkedProducts || [];
        for (var i = 0; i < lps.length; i++) {
          if (lps[i].productId === r0.productId) {
            linked.push(w);
            break;
          }
        }
      });
      if (linked.length === 0) return '';
      // Sort alphabetically
      linked.sort(function (a, b) { return a.commonName.localeCompare(b.commonName); });
      var weedChips = linked.map(function (w) {
        return '<button class="weed-link-chip" onclick="window.navigateToWeed(\'' + (w.commonName || '').replace(/'/g, "\\'") + '\', \'' + r0.productId + '\', \'' + (r0.productName || '').replace(/'/g, "\\'") + '\')" title="' + (w.scientificName || '') + '">'
          + '<span class="weed-link-name">' + w.commonName + '</span>'
          + (w.scientificName ? '<span class="weed-link-sci">' + w.scientificName + '</span>' : '')
          + '</button>';
      }).join('\n');
      return [
        '<div class="linked-weeds-section">',
        '  <div class="linked-weeds-heading">🌾 Linked Weeds (' + linked.length + ')</div>',
        '  <div class="linked-weeds-chips">' + weedChips + '</div>',
        '</div>'
      ].join('\n');
    })(),
    // ── Linked Pests from pests registry (reverse lookup) ──
    (function () {
      if (!window.pestsRegistry) return '';
      var linked = [];
      window.pestsRegistry.forEach(function (p) {
        var lps = p.linkedProducts || [];
        for (var i = 0; i < lps.length; i++) {
          if (lps[i].productId === r0.productId) {
            linked.push(p);
            break;
          }
        }
      });
      if (linked.length === 0) return '';
      linked.sort(function (a, b) { return a.commonName.localeCompare(b.commonName); });
      var pestChips = linked.map(function (p) {
        return '<button class="pest-link-chip" onclick="window.navigateToPest(\'' + (p.commonName || '').replace(/'/g, "\\'") + '\', \'' + r0.productId + '\', \'' + (r0.productName || '').replace(/'/g, "\\'") + '\')" title="' + (p.scientificName || '') + '">'
          + '<span class="pest-link-name">' + p.commonName + '</span>'
          + (p.scientificName ? '<span class="pest-link-sci">' + p.scientificName + '</span>' : '')
          + '</button>';
      }).join('\n');
      return [
        '<div class="linked-pests-section">',
        '  <div class="linked-pests-heading">🐛 Linked Pests (' + linked.length + ')</div>',
        '  <div class="linked-pests-chips">' + pestChips + '</div>',
        '</div>'
      ].join('\n');
    })(),
    // ── Linked Diseases from diseases registry (reverse lookup) ──
    (function () {
      if (!window.diseasesRegistry) return '';
      var linked = [];
      window.diseasesRegistry.forEach(function (d) {
        var lps = d.linkedProducts || [];
        for (var i = 0; i < lps.length; i++) {
          if (lps[i].productId === r0.productId) {
            linked.push(d);
            break;
          }
        }
      });
      if (linked.length === 0) return '';
      linked.sort(function (a, b) { return a.commonName.localeCompare(b.commonName); });
      var diseaseChips = linked.map(function (d) {
        return '<button class="disease-link-chip" onclick="window.navigateToDisease(\'' + (d.commonName || '').replace(/'/g, "\\'") + '\', \'' + r0.productId + '\', \'' + (r0.productName || '').replace(/'/g, "\\'") + '\')" title="' + (d.scientificName || '') + '">'
          + '<span class="disease-link-name">' + d.commonName + '</span>'
          + (d.scientificName ? '<span class="disease-link-sci">' + d.scientificName + '</span>' : '')
          + '</button>';
      }).join('\n');
      return [
        '<div class="linked-diseases-section">',
        '  <div class="linked-diseases-heading">🦠 Linked Diseases (' + linked.length + ')</div>',
        '  <div class="linked-diseases-chips">' + diseaseChips + '</div>',
        '</div>'
      ].join('\n');
    })(),
    buildAgronomicPanelHtml(r0.productId, 'det-hero'),
    '</div>'
  ].join('\n');

  // ── Determine target-type label ──
  let targetTypeLabel = 'Weeds';
  if (r0.category === 'Fungicides') targetTypeLabel = 'Diseases';
  else if (r0.category === 'Insecticides' || r0.category === 'Miticides') targetTypeLabel = 'Pests';
  else if (r0.category === 'Plant Growth Regulators') targetTypeLabel = 'Use Situations';
  else if (r0.category === 'Adjuvants / Surfactants') targetTypeLabel = 'Uses';

  // ── Group results by cropName preserving order ──
  const cropGroups = {};
  const cropOrder = [];
  results.forEach(function (r, idx) {
    if (!cropGroups[r.cropName]) {
      cropGroups[r.cropName] = [];
      cropOrder.push(r.cropName);
    }
    cropGroups[r.cropName].push({ r: r, idx: idx });
  });

  // ── Split crop groups across two panels — balanced by entry count ──
  const totalEntries = results.length;
  const halfEntries = totalEntries / 2;
  let runningCount = 0;
  let splitAt = 1; // always put at least one crop in the left panel
  for (let i = 0; i < cropOrder.length - 1; i++) {
    runningCount += cropGroups[cropOrder[i]].length;
    if (runningCount >= halfEntries) { splitAt = i + 1; break; }
    splitAt = i + 1;
  }
  const leftCrops = cropOrder.slice(0, splitAt);
  const rightCrops = cropOrder.slice(splitAt);

  function buildPanel(crops, isFirst) {
    var _af = window._activeFilters || {};
    const panelCropGroupsHtml = crops.map(function (cropName) {
      const entries = cropGroups[cropName];
      const pestRowsHtml = entries.map(function (entry) {
        const r = entry.r, idx = entry.idx;
        let rateStr = '';
        if (r.rates) {
          const parts = [];
          if (r.rates.boom) parts.push('Boom: ' + r.rates.boom);
          if (r.rates.spot) parts.push('Spot: ' + r.rates.spot);
          if (r.rates.knapsack) parts.push('Knapsack: ' + r.rates.knapsack);
          rateStr = parts.join(' · ');
        } else {
          rateStr = (r.rateMax && r.rateMax !== r.rate ? r.rate + '–' + r.rateMax : r.rate) +
            (r.unit ? ' ' + r.unit : '');
        }
        const safeStates = Array.isArray(r.states) ? r.states : [r.states || 'All'];
        const stateTag = safeStates.includes('All') ? '' :
          ' <span class="use-state-tag">' + safeStates.join(', ') + '</span>';
        const noteHtml = r.note ? '<div class="use-row-note">📝 ' + window.highlightSearchTermEnhanced(r.note, query, _af.crop, _af.pest) + '</div>' : '';
        // Thumbnail lookup — try first pestList name, then full weed string
        var thumbSrc = '';
        if (window.thumbMap) {
          var thumbNames = r.pestList && r.pestList.length > 0 ? r.pestList : [r.weed];
          for (var ti = 0; ti < thumbNames.length && !thumbSrc; ti++) {
            var tn = thumbNames[ti].toLowerCase();
            thumbSrc = window.thumbMap[tn] || '';
            // Fuzzy: strip "spp.", "spp", trailing parenthetical
            if (!thumbSrc) {
              tn = tn.replace(/\s*spp\.?\s*$/i, '').replace(/\s*\(.*?\)\s*$/, '').trim();
              thumbSrc = window.thumbMap[tn] || '';
            }
          }
        }
        var thumbHtml = thumbSrc
          ? '<img class="use-pest-thumb" src="' + thumbSrc + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
          : '<span class="use-pest-thumb use-pest-thumb-empty"></span>';
        return [
          '<div class="use-pest-row">',
          thumbHtml,
          '  <div class="use-pest-info">',
          '    <div class="use-pest-name">' + window.highlightSearchTermEnhanced(r.weed, query, '', _af.pest, 'pest') + stateTag + '</div>',
          '    <div class="use-pest-rate">' + rateStr + (r.stage ? ' · ' + window.highlightSearchTermEnhanced(r.stage, query, _af.crop, _af.pest) : '') + '</div>',
          noteHtml,
          '  </div>',
          '</div>'
        ].join('\n');
      }).join('\n');
      // Check if any entry in this crop group has a permit number
      var permitNum = null;
      entries.forEach(function (entry) { if (entry.r.permitNumber) permitNum = entry.r.permitNumber; });
      var permitBadge = '';
      if (permitNum) {
        var permitFile = 'APVMA - Permits/' + permitNum + '.pdf';
        permitBadge = ' <a href="' + encodeURI(permitFile) + '" target="_blank" class="crop-permit-badge" title="View APVMA Permit ' + permitNum + '">🏛️ ' + permitNum + '</a>';
      }
      return [
        '<div class="use-crop-group">',
        '  <div class="use-crop-header">' + window.highlightSearchTermEnhanced(cropName, query, _af.crop, '', 'crop') + permitBadge + '</div>',
        pestRowsHtml,
        '</div>'
      ].join('\n');
    }).join('\n');

    const headingText = isFirst
      ? targetTypeLabel + ' by Crop / Use Situation'
      : targetTypeLabel + ' (continued)';
    const countText = isFirst
      ? '<span class="use-situations-count">' + cropOrder.length + ' crop' + (cropOrder.length !== 1 ? 's' : '') + ' · ' + results.length + ' entr' + (results.length !== 1 ? 'ies' : 'y') + '</span>'
      : '';

    return [
      '<div class="use-situations-panel">',
      '  <div class="use-situations-heading">',
      '    <span>' + headingText + '</span>',
      '    ' + countText,
      '  </div>',
      panelCropGroupsHtml,
      '</div>'
    ].join('\n');
  }

  const leftPanelHtml = buildPanel(leftCrops, true);
  const rightPanelHtml = rightCrops.length > 0 ? buildPanel(rightCrops, false) : '';

  container.innerHTML = heroHtml + '\n' + leftPanelHtml + (rightPanelHtml ? '\n' + rightPanelHtml : '');

  // ── "Request a Label" prompt at bottom of single-product results ──
  var escapedQ2 = (query || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
  container.innerHTML += '<div class="request-label-footer" style="text-align:center; padding:18px 12px 8px; margin-top:8px;">' +
    '<p style="margin:0 0 8px; font-size:0.82rem; color:var(--text-sub);">Not the product you were looking for?</p>' +
    '<button class="no-results-request-btn" onclick="window.openLabelRequest(\'' + escapedQ2 + '\')" style="font-size:0.82rem;">📬 Request a Label</button>' +
    '</div>';
}

// ── Helper to filter by product when clicking summary card ──
// Sets all values directly + calls _doSearch (bypasses change event chain)
function filterByProduct(productId) {
  try {
    var prodFil = document.getElementById('search-product-filter');
    var catFil = document.getElementById('search-category-filter');
    var productInput = document.getElementById('product-filter-input');

    // Clear category filter first — the product may not be in the current category subset
    if (catFil && catFil.value) {
      catFil.value = '';
      // Also reset the visual category pills so they don't stay highlighted
      var catPills = document.querySelectorAll('.category-pill');
      catPills.forEach(function (p) { p.classList.remove('active'); });
      var allPill = document.querySelector('.category-pill[data-category=""]');
      if (allPill) allPill.classList.add('active');
      populateSearchProductFilter(); // rebuild full product list in hidden select
    }

    // Clear other narrow filters so the product view isn't blocked
    // Preserve pest filter if coming from Weeds, Pests, or Diseases tab (used for name highlighting)
    var fromWeeds = window._weedNavSource && window._weedNavSource.active;
    var fromPests = window._pestNavSource && window._pestNavSource.active;
    var fromDiseases = window._diseaseNavSource && window._diseaseNavSource.active;
    var cropFil = document.getElementById('crop-filter-input');
    var pestFil = document.getElementById('pest-filter-input');
    var stateInput = document.getElementById('state-filter-input');
    var searchInput = document.getElementById('search-input');
    if (cropFil) cropFil.value = '';
    if (pestFil && !fromWeeds && !fromPests && !fromDiseases) pestFil.value = '';
    if (stateInput) stateInput.value = '';
    if (searchInput) searchInput.value = '';

    // Set the hidden select to the exact product key
    if (prodFil) {
      prodFil.value = productId;

      // If prodFil.value is empty, the option wasn't found — rebuild the full list and retry
      if (!prodFil.value) {
        populateSearchProductFilter();
        prodFil.value = productId;
      }
    }

    // Set the visible text input directly (don't rely on change event)
    if (productInput) {
      if (prodFil && prodFil.value && prodFil.selectedIndex >= 0) {
        var opt = prodFil.options[prodFil.selectedIndex];
        productInput.value = (opt && opt.text !== 'All Products') ? opt.text : productId;
      } else {
        // Fallback: look up name from productDatabase
        var prod = window.productDatabase && window.productDatabase[productId];
        productInput.value = prod ? prod.name : productId;
      }
    }

    // Call doSearch DIRECTLY — do not rely on change event dispatching
    if (typeof window._doSearch === 'function') {
      window._doSearch();
    } else {
      if (prodFil) prodFil.dispatchEvent(new Event('change'));
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    console.error('[filterByProduct] error:', err.message, err.stack);
  }
}

// ── Autocomplete helpers for crop/pest filter inputs ─────
function showAutocomplete(inputEl, masterList, dropdownId, searchCallback) {
  var query = inputEl.value.trim().toLowerCase();
  var dropdown = document.getElementById(dropdownId);

  // Create dropdown if it doesn't exist
  if (!dropdown) {
    dropdown = document.createElement('div');
    dropdown.id = dropdownId;
    dropdown.className = 'autocomplete-dropdown';
    inputEl.parentElement.appendChild(dropdown);
  }

  if (!query || query.length < 1) {
    dropdown.innerHTML = '';
    dropdown.classList.remove('visible');
    return;
  }

  // Filter master list — items that contain the query
  var matches = masterList.filter(function (item) {
    return item.toLowerCase().includes(query);
  });

  // Sort: exact start matches first, then contains
  matches.sort(function (a, b) {
    var aStarts = a.toLowerCase().startsWith(query) ? 0 : 1;
    var bStarts = b.toLowerCase().startsWith(query) ? 0 : 1;
    if (aStarts !== bStarts) return aStarts - bStarts;
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  // Cap at 12 suggestions
  matches = matches.slice(0, 12);

  if (matches.length === 0) {
    dropdown.innerHTML = '<div class="autocomplete-empty">No matches</div>';
    dropdown.classList.add('visible');
    return;
  }

  dropdown.innerHTML = matches.map(function (item) {
    // Highlight the matching part
    var idx = item.toLowerCase().indexOf(query);
    var before = item.substring(0, idx);
    var match = item.substring(idx, idx + query.length);
    var after = item.substring(idx + query.length);
    return '<div class="autocomplete-item" data-value="' + item + '">' +
      before + '<strong>' + match + '</strong>' + after + '</div>';
  }).join('');

  dropdown.classList.add('visible');

  // Wire click handlers on items
  dropdown.querySelectorAll('.autocomplete-item').forEach(function (el) {
    el.addEventListener('mousedown', function (e) {
      e.preventDefault(); // prevent blur before value is set
      inputEl.value = el.getAttribute('data-value');
      dropdown.classList.remove('visible');
      dropdown.innerHTML = '';
      if (searchCallback) searchCallback();
    });
  });
}

function hideAutocomplete(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdown.classList.remove('visible');
    dropdown.innerHTML = '';
  }
}

// ── Helper: resolve product name text → product ID ──────
function resolveProductId(name) {
  if (!name) return '';
  var lowerName = name.trim().toLowerCase();
  for (var i = 0; i < window.allProducts.length; i++) {
    if (window.allProducts[i].name.toLowerCase() === lowerName) {
      return window.allProducts[i].id;
    }
  }
  return ''; // no exact match — don't filter by product
}

// ── Helper: resolve state text input → state code ───────
function resolveStateCode(name) {
  if (!name) return '';
  var lower = name.trim().toLowerCase();
  var map = {
    'nsw': 'NSW', 'new south wales': 'NSW',
    'victoria': 'Vic', 'vic': 'Vic',
    'south australia': 'SA', 'sa': 'SA',
    'western australia': 'WA', 'wa': 'WA',
    'queensland': 'Qld', 'qld': 'Qld',
    'tasmania': 'Tas', 'tas': 'Tas',
    'northern territory': 'NT', 'nt': 'NT'
  };
  return map[lower] || '';
}

// ── Helper: update filter-has-value class on all filter inputs ──
function updateFilterInputStyles() {
  var fields = [
    'crop-filter-input', 'pest-filter-input',
    'product-filter-input', 'state-filter-input'
  ];
  fields.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      if (el.value.trim()) {
        el.classList.add('filter-has-value');
      } else {
        el.classList.remove('filter-has-value');
      }
    }
  });
}

// ── Wire up live search input + filters ─────────────────
function initSearch() {
  buildSearchIndex();
  populateSearchCategoryFilter();
  populateSearchProductFilter();

  const input = document.getElementById('search-input');
  const catFil = document.getElementById('search-category-filter');
  const cropFil = document.getElementById('crop-filter-input');
  const pestFil = document.getElementById('pest-filter-input');
  const productInput = document.getElementById('product-filter-input');
  const stateInput = document.getElementById('state-filter-input');

  // Legacy hidden selects — kept for filterByProduct() etc.
  const prodFil = document.getElementById('search-product-filter');
  const stateFil = document.getElementById('search-state-filter');

  function doSearch() {
    const q = input ? input.value : '';
    const cf = catFil ? catFil.value : '';
    const cropQ = cropFil ? cropFil.value : '';
    const pestQ = pestFil ? pestFil.value : '';

    // Resolve product filter — prefer the hidden select value (set directly by
    // filterByProduct with the exact product key). Only fall back to resolving
    // from the text input when the select is empty (i.e. user typed a name).
    var pf = '';
    if (prodFil && prodFil.value) {
      pf = prodFil.value;
    } else if (productInput && productInput.value.trim()) {
      pf = resolveProductId(productInput.value);
      if (prodFil) prodFil.value = pf;
    }
    var sf = '';
    if (stateInput && stateInput.value.trim()) {
      sf = resolveStateCode(stateInput.value);
      if (stateFil) stateFil.value = sf;
    } else if (stateFil) {
      sf = stateFil.value;
    }

    const results = runSearch(q, pf, sf, cf, cropQ, pestQ);
    window._lastSearchResults = results;
    window._activeFilters = { query: q, crop: cropQ, pest: pestQ };
    renderSearchResults(results, q);
    doCrossSearch(q.trim().toLowerCase(), cropQ.trim().toLowerCase(), pestQ.trim().toLowerCase());
    updateActiveFilterBadge();
    updateFilterInputStyles();
  }

  // Expose so filterByProduct() can call it without triggering resets
  window._doSearch = doSearch;

  // ── Event delegation for product card clicks ──
  // Instead of relying on inline onclick attributes (which can break if HTML
  // content inside the card contains special characters), we use a single
  // delegated click handler on the results container.
  var resultsContainer = document.getElementById('search-results');
  if (resultsContainer) {
    resultsContainer.addEventListener('click', function(e) {
      // Don't intercept clicks on buttons, links, checkboxes, labels, or details/summary
      var tag = e.target.tagName;
      if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT' || tag === 'SUMMARY') return;
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('label.compare-products-btn') || e.target.closest('.view-label-btn') || e.target.closest('.view-sds-btn') || e.target.closest('.view-permit-btn') || e.target.closest('details') || e.target.closest('.agronomic-panel')) return;

      // Find the nearest product-summary-card parent
      var card = e.target.closest('.product-summary-card');
      if (!card) return;
      var productId = card.getAttribute('data-product-id');
      if (!productId) return;
      // Prevent double-fire if inline onclick also works
      e.stopPropagation();
      filterByProduct(productId);
    });
  }

  function debouncedSearch() {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(doSearch, 280);
  }

  // ── New search intent detection ──
  // Track the previous value so we know when the user cleared the box and started fresh
  var _prevSearchValue = '';

  function hasActiveNarrowFilters() {
    return (cropFil && cropFil.value.trim()) ||
           (pestFil && pestFil.value.trim()) ||
           (productInput && productInput.value.trim()) ||
           (stateInput && stateInput.value.trim());
  }

  function autoClearNarrowFilters() {
    if (cropFil) cropFil.value = '';
    if (pestFil) pestFil.value = '';
    if (productInput) productInput.value = '';
    if (stateInput) stateInput.value = '';
    if (prodFil) prodFil.value = '';
    if (stateFil) stateFil.value = '';
    refreshProductFilter('');
    hideAutocomplete('crop-autocomplete');
    hideAutocomplete('pest-autocomplete');
    hideAutocomplete('product-autocomplete');
    hideAutocomplete('state-autocomplete');
    updateActiveFilterBadge();
    updateFilterInputStyles();
  }

  if (input) {
    input.addEventListener('input', function () {
      var currentVal = input.value;
      // Detect "new search intent": user had a search, cleared it, and is now typing fresh
      // This fires when text goes from empty to non-empty (length 1) and filters are active
      if (_prevSearchValue === '' && currentVal.length === 1 && hasActiveNarrowFilters()) {
        autoClearNarrowFilters();
      }
      _prevSearchValue = currentVal;
      debouncedSearch();
    });

    input.addEventListener('focus', function () {
      if (catFil && catFil.value !== '') {
        catFil.value = '';
        refreshProductFilter('');
        var pills = document.querySelectorAll('.category-pill');
        pills.forEach(function (p) { p.classList.remove('active'); });
        var allPill = document.querySelector('.category-pill[data-category=""]');
        if (allPill) allPill.classList.add('active');
        doSearch();
      }
    });
  }

  function updateFilterClearBtns() {}

  // Wire crop and pest filter inputs with autocomplete
  // NOTE (build 153): crop/pest input no longer auto-clears the product filter.
  // This lets users select a product first, then narrow by crop/pest within that
  // product. If the combination returns 0 results, the smart zero-results UI
  // (build 133) tells the user which filters are blocking and offers one-click clear.
  if (cropFil) {
    cropFil.addEventListener('input', function () {
      showAutocomplete(cropFil, window.allCrops, 'crop-autocomplete', debouncedSearch);
      debouncedSearch();
    });
    cropFil.addEventListener('focus', function () {
      showAutocomplete(cropFil, window.allCrops, 'crop-autocomplete', debouncedSearch);
    });
  }
  if (pestFil) {
    pestFil.addEventListener('input', function () {
      showAutocomplete(pestFil, window.allPests, 'pest-autocomplete', debouncedSearch);
      debouncedSearch();
    });
    pestFil.addEventListener('focus', function () {
      showAutocomplete(pestFil, window.allPests, 'pest-autocomplete', debouncedSearch);
    });
  }

  // Wire product filter input with autocomplete
  if (productInput) {
    productInput.addEventListener('input', function () {
      // When user types in the text input, sync the hidden select so doSearch
      // picks up the new value. Clear select so doSearch falls through to resolveProductId.
      if (prodFil) prodFil.value = '';
      showAutocomplete(productInput, window.allProductNames, 'product-autocomplete', debouncedSearch);
      debouncedSearch();
    });
    productInput.addEventListener('focus', function () {
      showAutocomplete(productInput, window.allProductNames, 'product-autocomplete', debouncedSearch);
    });
  }

  // Wire state filter input with autocomplete
  if (stateInput) {
    stateInput.addEventListener('input', function () {
      showAutocomplete(stateInput, window.allStates, 'state-autocomplete', debouncedSearch);
      debouncedSearch();
    });
    stateInput.addEventListener('focus', function () {
      showAutocomplete(stateInput, window.allStates, 'state-autocomplete', debouncedSearch);
    });
  }

  // Expose for legacy compatibility
  window._updateFilterClearBtns = updateFilterClearBtns;

  // Close autocomplete dropdowns when clicking elsewhere
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#crop-filter-input') && !e.target.closest('#crop-autocomplete')) {
      hideAutocomplete('crop-autocomplete');
    }
    if (!e.target.closest('#pest-filter-input') && !e.target.closest('#pest-autocomplete')) {
      hideAutocomplete('pest-autocomplete');
    }
    if (!e.target.closest('#product-filter-input') && !e.target.closest('#product-autocomplete')) {
      hideAutocomplete('product-autocomplete');
    }
    if (!e.target.closest('#state-filter-input') && !e.target.closest('#state-autocomplete')) {
      hideAutocomplete('state-autocomplete');
    }
  });

  if (catFil) catFil.addEventListener('change', function () {
    refreshProductFilter(catFil.value);
    // Rebuild product autocomplete list for new category
    populateSearchProductFilter();
    if (productInput) productInput.value = '';
    doSearch();
  });

  // Legacy hidden selects — kept but not primary
  if (prodFil) prodFil.addEventListener('change', function () {
    // Sync text input from hidden select (for filterByProduct calls)
    if (productInput) {
      if (prodFil.value) {
        var opt = prodFil.options[prodFil.selectedIndex];
        if (opt) productInput.value = opt.text === 'All Products' ? '' : opt.text;
      } else {
        productInput.value = '';
      }
    }
    doSearch();
  });
  if (stateFil) stateFil.addEventListener('change', function () {
    doSearch();
  });

  // Re-run cross-search when scope pills are toggled
  ['scope-sds', 'scope-permits', 'scope-apvma'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', function () {
      var cropVal = cropFil ? cropFil.value.trim().toLowerCase() : '';
      var pestVal = pestFil ? pestFil.value.trim().toLowerCase() : '';
      doCrossSearch(input ? input.value.trim().toLowerCase() : '', cropVal, pestVal);
    });
  });

  // Trigger default search on load to render the full catalog
  doSearch();
}

// ── Toggle search tips popup ────────────────────────────
window.toggleSearchTips = function () {
  var popup = document.getElementById('search-tips-popup');
  if (popup) popup.classList.toggle('hidden');
};

// ── Toggle collapsible filters panel (legacy no-op — filters are always visible now) ──
window.toggleSearchFilters = function () {};

// ── Update active filter summary bar ────────────────────
function updateActiveFilterBadge() {
  var count = 0;
  var parts = [];
  var labels = { crop: 'Crop', pest: 'Pest', product: 'Product', state: 'State' };
  var ids = {
    crop: 'crop-filter-input',
    pest: 'pest-filter-input',
    product: 'product-filter-input',
    state: 'state-filter-input'
  };

  Object.keys(ids).forEach(function (key) {
    var el = document.getElementById(ids[key]);
    if (el && el.value.trim()) {
      count++;
      parts.push(labels[key] + ': ' + el.value.trim());
    }
  });

  // Update the summary bar
  var bar = document.getElementById('filter-active-bar');
  var summary = document.getElementById('filter-active-summary');
  if (bar && summary) {
    if (count > 0) {
      bar.classList.remove('hidden');
      summary.innerHTML = '<strong>' + count + ' filter' + (count > 1 ? 's' : '') + '</strong> — ' + parts.join(', ');
    } else {
      bar.classList.add('hidden');
    }
  }

  // Legacy badge (hidden, but update for completeness)
  var badge = document.getElementById('active-filter-count');
  if (badge) {
    badge.textContent = count;
    if (count > 0) { badge.classList.remove('hidden'); } else { badge.classList.add('hidden'); }
  }
}

// ── Reset search and ALL filters (clear everything) ─────
window.resetSearch = function () {
  const input = document.getElementById('search-input');
  const catFil = document.getElementById('search-category-filter');
  const cropFil = document.getElementById('crop-filter-input');
  const pestFil = document.getElementById('pest-filter-input');
  const productInput = document.getElementById('product-filter-input');
  const stateInput = document.getElementById('state-filter-input');
  const prodFil = document.getElementById('search-product-filter');
  const stateFil = document.getElementById('search-state-filter');

  if (input) input.value = '';
  if (catFil) catFil.value = '';
  if (cropFil) cropFil.value = '';
  if (pestFil) pestFil.value = '';
  if (productInput) productInput.value = '';
  if (stateInput) stateInput.value = '';
  if (prodFil) prodFil.value = '';
  if (stateFil) stateFil.value = '';
  refreshProductFilter('');

  // Hide all autocomplete dropdowns
  hideAutocomplete('crop-autocomplete');
  hideAutocomplete('pest-autocomplete');
  hideAutocomplete('product-autocomplete');
  hideAutocomplete('state-autocomplete');

  // Reset category pills to "All"
  var pills = document.querySelectorAll('.category-pill');
  pills.forEach(function (p) { p.classList.remove('active'); });
  var allPill = document.querySelector('.category-pill[data-category=""]');
  if (allPill) allPill.classList.add('active');

  // Remove filter-has-value styling
  updateFilterInputStyles();

  if (input) input.focus();

  if (typeof window._doSearch === 'function') {
    window._doSearch();
  }
};

// ── Shared helper: clear ALL fields (main search + all filters) for fresh start ──
function clearAllFilters() {
  var cropFil = document.getElementById('crop-filter-input');
  var pestFil = document.getElementById('pest-filter-input');
  var productInput = document.getElementById('product-filter-input');
  var stateInput = document.getElementById('state-filter-input');
  var prodFil = document.getElementById('search-product-filter');
  var stateFil = document.getElementById('search-state-filter');
  var mainInput = document.getElementById('search-input');

  // Clear everything — fresh start
  if (mainInput) mainInput.value = '';
  if (cropFil) cropFil.value = '';
  if (pestFil) pestFil.value = '';
  if (productInput) productInput.value = '';
  if (stateInput) stateInput.value = '';
  if (prodFil) prodFil.value = '';
  if (stateFil) stateFil.value = '';
  refreshProductFilter('');

  hideAutocomplete('crop-autocomplete');
  hideAutocomplete('pest-autocomplete');
  hideAutocomplete('product-autocomplete');
  hideAutocomplete('state-autocomplete');

  // Reset category pills
  var pills = document.querySelectorAll('.category-pill');
  pills.forEach(function (p) { p.classList.remove('active'); });
  var allPill = document.querySelector('.category-pill[data-category=""]');
  if (allPill) allPill.classList.add('active');

  updateActiveFilterBadge();
  updateFilterInputStyles();
}

// ── Smart clear: remove only narrow filters (crop/pest/product/state), keep text query ──
window.smartClearFilters = function () {
  var cropFil = document.getElementById('crop-filter-input');
  var pestFil = document.getElementById('pest-filter-input');
  var productInput = document.getElementById('product-filter-input');
  var stateInput = document.getElementById('state-filter-input');
  var prodFil = document.getElementById('search-product-filter');
  var stateFil = document.getElementById('search-state-filter');

  if (cropFil) cropFil.value = '';
  if (pestFil) pestFil.value = '';
  if (productInput) productInput.value = '';
  if (stateInput) stateInput.value = '';
  if (prodFil) prodFil.value = '';
  if (stateFil) stateFil.value = '';
  refreshProductFilter('');

  hideAutocomplete('crop-autocomplete');
  hideAutocomplete('pest-autocomplete');
  hideAutocomplete('product-autocomplete');
  hideAutocomplete('state-autocomplete');

  updateActiveFilterBadge();
  updateFilterInputStyles();

  if (typeof window._doSearch === 'function') window._doSearch();

  // Focus the search box so user can continue
  var mainInput = document.getElementById('search-input');
  if (mainInput) mainInput.focus();
};

window.clearAllFilters = clearAllFilters;

window.clearCropFilter = function () {
  clearAllFilters();
  var cropFil = document.getElementById('crop-filter-input');
  if (cropFil) cropFil.focus();
  if (typeof window._doSearch === 'function') window._doSearch();
};

window.clearPestFilter = function () {
  clearAllFilters();
  var pestFil = document.getElementById('pest-filter-input');
  if (pestFil) pestFil.focus();
  if (typeof window._doSearch === 'function') window._doSearch();
};

window.clearProductFilter = function () {
  clearAllFilters();
  var productInput = document.getElementById('product-filter-input');
  if (productInput) productInput.focus();
  if (typeof window._doSearch === 'function') window._doSearch();
};

window.clearStateFilter = function () {
  clearAllFilters();
  var stateInput = document.getElementById('state-filter-input');
  if (stateInput) stateInput.focus();
  if (typeof window._doSearch === 'function') window._doSearch();
};

// ── Apply a result to the Tank Mix calculator ───────────
// ── Cross-database search ─────────────────────────────────
// Searches SDS, Permits, and APVMA registries based on text query AND crop/pest filters
function doCrossSearch(q, cropFilter, pestFilter) {
  const container = document.getElementById('cross-search-sections');
  if (!container) return;

  // Build a combined query string that includes text, crop and pest terms
  var allTerms = [];
  if (q) allTerms = allTerms.concat(q.split(/\s+/).filter(function(t) { return t.length > 0; }));
  var cropTerms = cropFilter ? cropFilter.split(/\s+/).filter(function(t) { return t.length > 0; }) : [];
  var pestTerms = pestFilter ? pestFilter.split(/\s+/).filter(function(t) { return t.length > 0; }) : [];
  var combinedQ = [q || '', cropFilter || '', pestFilter || ''].filter(function(s) { return s; }).join(' ').trim();

  // Need at least some search input (text, crop, or pest)
  if (allTerms.length === 0 && cropTerms.length === 0 && pestTerms.length === 0) {
    container.innerHTML = '';
    return;
  }

  const scopeSds = document.getElementById('scope-sds');
  const scopePermits = document.getElementById('scope-permits');
  const scopeApvma = document.getElementById('scope-apvma');

  let html = '';

  // ── SDS search ──
  if (scopeSds && scopeSds.checked && window.sdsRegistry && allTerms.length > 0) {
    const matches = window.sdsRegistry.filter(function (s) {
      var blob = [s.displayName || '', s.productName || '', s.activeIngredient || '', s.company || '', s.filename || ''].join(' ').toLowerCase();
      return allTerms.every(function(term) { return blob.includes(term); });
    });
    if (matches.length > 0) {
      const shown = matches.slice(0, 8);
      const rows = shown.map(function (s) {
        return '<div class="cross-result-row">' +
          '<span class="btn-icon">🛡️</span>' +
          '<a href="' + encodeURI(s.filepath) + '" target="_blank" class="cross-result-name">' + window.highlightSearchTerm(s.displayName, q) + '</a>' +
          '</div>';
      }).join('');
      html += buildCrossSectionHtml('SDS', '🛡️ Safety Data Sheets', matches.length, rows, 'sds', q);
    }
  }

  // ── Permits search ──
  if (scopePermits && scopePermits.checked && window.permitsRegistry && window.permitsRegistry.permits) {
    const today = new Date();
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(today.getMonth() + 6);
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);

    const matches = window.permitsRegistry.permits.filter(function (p) {
      // Advanced status match logic (only if text query is present)
      if (q) {
        const parseDate = function (dateStr) {
          if (!dateStr) return null;
          const months = { 'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5, 'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11, 'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'jun': 5, 'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11 };
          const slashMatch = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
          if (slashMatch) return new Date(parseInt(slashMatch[3]), parseInt(slashMatch[2]) - 1, parseInt(slashMatch[1]));
          const parts = dateStr.trim().split(/\s+/);
          if (parts.length === 3) {
            const day = parseInt(parts[0]);
            const month = months[parts[1].toLowerCase()];
            const year = parseInt(parts[2]);
            if (!isNaN(day) && month !== undefined && !isNaN(year)) return new Date(year, month, day);
          }
          return null;
        };
        const expiry = parseDate(p.expiryDate);
        const issue = parseDate(p.issueDate);

        const isExpired = expiry ? expiry < today : false;
        const isExpiringSoon = expiry ? (expiry >= today && expiry <= sixMonthsFromNow) : false;
        const isNew = issue ? (issue >= sixMonthsAgo) : false;
        const isExtended = p.isExtended === true;

        let statusMatch = false;
        if (q.includes('expired') && isExpired) statusMatch = true;
        if (q.includes('expiring soon') && isExpiringSoon) statusMatch = true;
        if (q.includes('expiring in 6 months') && isExpiringSoon) statusMatch = true;
        if (q.includes('new') && isNew) statusMatch = true;
        if (q.includes('extended') && isExtended) statusMatch = true;
        if (statusMatch) return true;
      }

      // Build searchable blob from permit data
      var permitParts = [
        p.permitNumber || '',
        (p.activeIngredients || []).join(' '),
        (p.products || []).join(' '),
        (p.crops || []).join(' '),
        (p.pests || []).join(' ')
      ];
      if (p.appProducts && p.appProducts.length > 0 && typeof productDatabase !== 'undefined') {
        p.appProducts.forEach(function(id) {
          var prod = productDatabase[id];
          if (prod && prod.name) permitParts.push(prod.name);
        });
      }
      var blob = permitParts.join(' ').toLowerCase();

      // Text query terms must all match
      var textOk = allTerms.length === 0 || allTerms.every(function(term) { return blob.includes(term); });

      // Crop filter terms must match permit crops (with plural stemming)
      var cropBlob = (p.crops || []).join(' ').toLowerCase();
      var cropOk = cropTerms.length === 0 || cropTerms.every(function(tok) {
        var forms = pluralForms(tok);
        return forms.some(function(f) { return cropBlob.includes(f); });
      });

      // Pest filter terms must match permit pests (with plural stemming)
      var pestBlob = (p.pests || []).join(' ').toLowerCase();
      var pestOk = pestTerms.length === 0 || pestTerms.every(function(tok) {
        var forms = pluralForms(tok);
        return forms.some(function(f) { return pestBlob.includes(f); });
      });

      return textOk && cropOk && pestOk;
    });
    if (matches.length > 0) {
      const shown = matches.slice(0, 8);
      var highlightQ = combinedQ || q;
      const rows = shown.map(function (p) {
        // Show what matched: prefer crop match for crop/pest filter searches, else text query matches
        var matchedCrop = null;
        var matchedPest = null;
        // Check crop filter terms against permit crops
        if (cropTerms.length > 0 && p.crops) {
          matchedCrop = p.crops.find(function (c) {
            return cropTerms.some(function (tok) {
              return pluralForms(tok).some(function (f) { return c.toLowerCase().includes(f); });
            });
          });
        }
        // Check pest filter terms against permit pests
        if (pestTerms.length > 0 && p.pests) {
          matchedPest = p.pests.find(function (pt) {
            return pestTerms.some(function (tok) {
              return pluralForms(tok).some(function (f) { return pt.toLowerCase().includes(f); });
            });
          });
        }
        // Fall back to text query matches
        if (!matchedCrop && !matchedPest && q) {
          matchedCrop = p.crops && p.crops.find(function (c) { return c.toLowerCase().includes(q); });
          matchedPest = !matchedCrop && p.pests && p.pests.find(function (pt) { return pt.toLowerCase().includes(q); });
        }
        var sub = (matchedCrop || matchedPest)
          ? (matchedCrop || matchedPest)
          : (p.activeIngredients && p.activeIngredients.length > 0
            ? p.activeIngredients.slice(0, 2).join(', ')
            : (p.products && p.products[0] ? p.products[0] : ''));
        return '<div class="cross-result-row">' +
          '<span class="cross-result-mono">' + window.highlightSearchTerm(p.permitNumber, highlightQ) + '</span>' +
          '<span class="cross-result-name">' + window.highlightSearchTerm(sub, highlightQ) + '</span>' +
          '<span class="cross-result-sub">exp. ' + (p.expiryDate || 'N/A') + '</span>' +
          '<a href="' + (p.pdfUrl || encodeURI('APVMA - Permits/' + p.pdfFilename)) + '" target="_blank" class="view-permit-btn" style="padding:4px 10px;font-size:0.78rem;" onclick="event.stopPropagation()">PDF' + (p.pdfUrl ? ' 🌐' : '') + '</a>' +
          '</div>';
      }).join('');
      html += buildCrossSectionHtml('Permits', '📋 APVMA Permits', matches.length, rows, 'permits', combinedQ);
    }
  }

  // ── APVMA PubCRIS search (min 3 chars for 18k-row dataset) ──
  if (combinedQ.length >= 3 && scopeApvma && scopeApvma.checked && window.pubcrisRegistry) {
    const tokens = combinedQ.split(/\s+/);
    const matches = window.pubcrisRegistry.filter(function (e) {
      return tokens.every(function (token) {
        return (e.name && e.name.toLowerCase().includes(token)) ||
          (e.id && String(e.id).includes(token)) ||
          (e.holder && e.holder.toLowerCase().includes(token));
      });
    });
    if (matches.length > 0) {
      const shown = matches.slice(0, 8);
      const rows = shown.map(function (e) {
        return '<div class="cross-result-row">' +
          '<span class="cross-result-mono">' + window.highlightSearchTerm(String(e.id), q) + '</span>' +
          '<span class="cross-result-name">' + window.highlightSearchTerm(e.name, q) + '</span>' +
          '<span class="cross-result-sub">' + window.highlightSearchTerm((e.holder || ''), q) + '</span>' +
          '</div>';
      }).join('');
      html += buildCrossSectionHtml('APVMA Registry', '🏛️ APVMA PubCRIS Registry', matches.length, rows, 'apvma', q);
    }
  }

  container.innerHTML = html;
}

function buildCrossSectionHtml(label, title, total, rowsHtml, tab, q) {
  const viewAllLabel = 'View all ' + total + ' in ' + label + ' →';
  return '<div class="cross-search-section">' +
    '<div class="cross-section-header">' +
    '<span class="cross-section-title">' + title + '</span>' +
    '<span class="cross-section-count">' + total + ' match' + (total !== 1 ? 'es' : '') + '</span>' +
    '</div>' +
    '<div class="cross-section-items">' + rowsHtml + '</div>' +
    (total > 8 ? '<button class="cross-view-all-btn" onclick="viewAllInTab(\'' + tab + '\', \'' + q.replace(/'/g, "\\'") + '\')">' + viewAllLabel + '</button>' : '') +
    '</div>';
}

window.viewAllInTab = function (tab, q) {
  switchAgriSubTab(tab);
  const inputMap = { sds: 'sds-search-input', permits: 'permits-search-input', apvma: 'apvma-search-input' };
  const searchFnMap = { sds: 'runSdsSearch', permits: 'runPermitsSearch', apvma: 'runApvmaSearch' };
  const inputId = inputMap[tab];
  if (inputId) {
    const el = document.getElementById(inputId);
    if (el) {
      el.value = q;
      const fn = window[searchFnMap[tab]];
      if (typeof fn === 'function') fn();
    }
  }
};

// ── Back to Results — clears the product filter and re-runs search ───────────
window.goBackToResults = function () {
  // If user came from the Weeds tab, go back there instead of label results
  if (window._weedNavSource && window._weedNavSource.active) {
    var savedScrollY = window._weedNavSource.scrollY || 0;
    window._weedNavSource.active = false;
    // Clear the pest filter that was set for highlighting
    var pestFil = document.getElementById('pest-filter-input');
    if (pestFil) pestFil.value = '';
    var prodFil = document.getElementById('search-product-filter');
    var productInput = document.getElementById('product-filter-input');
    if (prodFil) prodFil.value = '';
    if (productInput) productInput.value = '';
    if (typeof switchAgriSubTab === 'function') switchAgriSubTab('weeds');
    // Restore scroll position so user lands back where they were
    setTimeout(function () { window.scrollTo({ top: savedScrollY, behavior: 'smooth' }); }, 50);
    return;
  }
  // If user came from the Pests tab, go back there instead of label results
  if (window._pestNavSource && window._pestNavSource.active) {
    var savedScrollYP = window._pestNavSource.scrollY || 0;
    window._pestNavSource.active = false;
    var pestFil2 = document.getElementById('pest-filter-input');
    if (pestFil2) pestFil2.value = '';
    var prodFilP = document.getElementById('search-product-filter');
    var productInputP = document.getElementById('product-filter-input');
    if (prodFilP) prodFilP.value = '';
    if (productInputP) productInputP.value = '';
    if (typeof switchAgriSubTab === 'function') switchAgriSubTab('pests');
    setTimeout(function () { window.scrollTo({ top: savedScrollYP, behavior: 'smooth' }); }, 50);
    return;
  }
  // If user came from the Diseases tab, go back there instead of label results
  if (window._diseaseNavSource && window._diseaseNavSource.active) {
    var savedScrollYD = window._diseaseNavSource.scrollY || 0;
    window._diseaseNavSource.active = false;
    var pestFil3 = document.getElementById('pest-filter-input');
    if (pestFil3) pestFil3.value = '';
    var prodFilD = document.getElementById('search-product-filter');
    var productInputD = document.getElementById('product-filter-input');
    if (prodFilD) prodFilD.value = '';
    if (productInputD) productInputD.value = '';
    if (typeof switchAgriSubTab === 'function') switchAgriSubTab('diseases');
    setTimeout(function () { window.scrollTo({ top: savedScrollYD, behavior: 'smooth' }); }, 50);
    return;
  }
  var prodFil2 = document.getElementById('search-product-filter');
  var productInput2 = document.getElementById('product-filter-input');
  if (prodFil2) prodFil2.value = '';
  if (productInput2) productInput2.value = '';
  // Restore category filter if we came back via weed navigation
  if (window._savedCategoryBeforeWeed) {
    var catFil = document.getElementById('search-category-filter');
    if (catFil) catFil.value = window._savedCategoryBeforeWeed;
    var pills = document.querySelectorAll('.category-pill');
    pills.forEach(function (p) { p.classList.remove('active'); });
    var matchPill = document.querySelector('.category-pill[data-category="' + window._savedCategoryBeforeWeed + '"]');
    if (matchPill) matchPill.classList.add('active');
    window._savedCategoryBeforeWeed = null;
  }
  updateFilterInputStyles();
  updateActiveFilterBadge();
  if (typeof window._doSearch === 'function') window._doSearch();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ── Navigate from product detail card to a weed in the Weeds tab ──
window.navigateToWeed = function (weedName, sourceProductId, sourceProductName) {
  // Save the active category filter so we can restore it on return
  var catFil = document.getElementById('search-category-filter');
  var savedCategory = catFil ? catFil.value : '';
  // Save source product so the weed card can show a "Back to product" button
  window._productNavSource = {
    active: true,
    productId: sourceProductId || '',
    productName: sourceProductName || '',
    savedCategory: savedCategory,
    scrollY: window.scrollY || window.pageYOffset || 0
  };
  // Switch to the Weeds tab
  if (typeof switchAgriSubTab === 'function') switchAgriSubTab('weeds');
  // Set the weed search input and trigger search
  setTimeout(function () {
    var input = document.getElementById('weeds-search-input');
    if (input) {
      input.value = weedName;
      if (typeof runWeedsSearch === 'function') runWeedsSearch();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
};

// ── Navigate back from Weeds tab to the source product detail card ──
window.navigateBackToProduct = function () {
  if (!window._productNavSource || !window._productNavSource.active) return;
  var src = window._productNavSource;
  window._productNavSource = { active: false };
  if (typeof switchAgriSubTab === 'function') switchAgriSubTab('search');
  setTimeout(function () {
    // Save category so goBackToResults can restore it after viewing the product
    if (src.savedCategory) {
      window._savedCategoryBeforeWeed = src.savedCategory;
    }
    if (typeof filterByProduct === 'function') {
      filterByProduct(src.productId);
    }
  }, 100);
};

// ── Navigate from product detail card to a pest in the Pests tab ──
window.navigateToPest = function (pestName, sourceProductId, sourceProductName) {
  var catFil = document.getElementById('search-category-filter');
  var savedCategory = catFil ? catFil.value : '';
  window._productNavSource = {
    active: true,
    productId: sourceProductId || '',
    productName: sourceProductName || '',
    savedCategory: savedCategory,
    scrollY: window.scrollY || window.pageYOffset || 0
  };
  if (typeof switchAgriSubTab === 'function') switchAgriSubTab('pests');
  setTimeout(function () {
    var input = document.getElementById('pests-search-input');
    if (input) {
      input.value = pestName;
      if (typeof runPestsSearch === 'function') runPestsSearch();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
};

// ── Navigate from product detail card to a disease in the Diseases tab ──
window.navigateToDisease = function (diseaseName, sourceProductId, sourceProductName) {
  var catFil = document.getElementById('search-category-filter');
  var savedCategory = catFil ? catFil.value : '';
  window._productNavSource = {
    active: true,
    productId: sourceProductId || '',
    productName: sourceProductName || '',
    savedCategory: savedCategory,
    scrollY: window.scrollY || window.pageYOffset || 0
  };
  if (typeof switchAgriSubTab === 'function') switchAgriSubTab('diseases');
  setTimeout(function () {
    var input = document.getElementById('diseases-search-input');
    if (input) {
      input.value = diseaseName;
      if (typeof runDiseasesSearch === 'function') runDiseasesSearch();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
};
