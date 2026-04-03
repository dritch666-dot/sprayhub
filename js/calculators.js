// Units Database
const units = {
  length: { units: { meter: 1, kilometer: 1000, centimeter: 0.01, millimeter: 0.001, mile: 1609.34, yard: 0.9144, foot: 0.3048, inch: 0.0254 } },
  weight: { units: { gram: 1, kilogram: 1000, milligram: 0.001, pound: 453.592, ounce: 28.3495 } },
  temperature: { units: { celsius: 'C', fahrenheit: 'F', kelvin: 'K' } },
  volume: { units: { liter: 1, milliliter: 0.001, gallon_us: 3.78541, quart_us: 0.946353 } },
  area: { units: { sq_meter: 1, sq_kilometer: 1000000, hectare: 10000, acre: 4046.86, sq_foot: 0.092903 } },
  speed: { units: { 'm/s': 1, 'km/h': 0.277778, 'mph': 0.44704, 'knot': 0.514444 } },
  time: { units: { second: 1, millisecond: 0.001, minute: 60, hour: 3600, day: 86400, week: 604800 } }
};

// Unit Converter Functions
function updateUnits() {
  const cat = document.getElementById('category').value;
  const data = units[cat];
  const from = document.getElementById('unit-from');
  const to = document.getElementById('unit-to');
  from.innerHTML = ''; to.innerHTML = '';
  for (let key in data.units) {
    const label = key.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
    from.add(new Option(label, key));
    to.add(new Option(label, key));
  }
  if (to.options.length > 1) to.selectedIndex = 1;
  calculate();
}

function swapUnits() {
  const temp = document.getElementById('unit-from').value;
  document.getElementById('unit-from').value = document.getElementById('unit-to').value;
  document.getElementById('unit-to').value = temp;
  calculate();
}

function calculate() {
  const cat = document.getElementById('category').value;
  const from = document.getElementById('unit-from').value;
  const to = document.getElementById('unit-to').value;
  const val = parseFloat(document.getElementById('input-val').value);
  const outVal = document.getElementById('output-val');
  const outLabel = document.getElementById('output-unit-label');
  if (isNaN(val)) { outVal.innerText = "---"; return; }
  let result;
  if (cat === 'temperature') {
    result = convertTemp(val, from, to);
  } else {
    result = (val * units[cat].units[from]) / units[cat].units[to];
  }
  const formatted = (result % 1 !== 0) ? parseFloat(result.toFixed(4)) : result;
  outVal.innerText = formatted;
  outLabel.innerText = to.replace('_', ' ').toUpperCase();
  if (val > 0) saveHistory('Unit Conversion', `${val} ${from} → ${to}`, `${formatted} ${to}`);
}

function convertTemp(val, from, to) {
  if (from === to) return val;
  let c = (from === 'celsius') ? val : (from === 'fahrenheit') ? (val - 32) * 5 / 9 : val - 273.15;
  return (to === 'celsius') ? c : (to === 'fahrenheit') ? (c * 9 / 5) + 32 : c + 273.15;
}

// Agri Functions
let searchInitialised = false;
let tankMixInitialised = false;
let currentRateUnit = 'g/mL'; // updated when a label rate is applied

let sdsInitialised = false;
let permitsInitialised = false;
let weedsInitialised = false;
let pestsInitialised = false;
let diseasesInitialised = false;

function switchAgriSubTab(tab) {
  // Update active state on the new nav tabs
  document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));
  // Tank Mix, Cost Compare, Container live inside the Calculators dropdown
  const calcTabs = ['tank', 'cost', 'container'];
  // Weeds, Pests, Diseases live inside the Identify dropdown
  const idTabs = ['weeds', 'pests', 'diseases'];
  // APVMA, SDS, Permits live inside the Registries dropdown
  const regTabs = ['apvma', 'sds', 'permits'];

  if (calcTabs.includes(tab)) {
    const calcBtn = document.getElementById('nav-calc-menu');
    if (calcBtn) calcBtn.classList.add('active');
  } else if (idTabs.includes(tab)) {
    const idBtn = document.getElementById('nav-id-menu');
    if (idBtn) idBtn.classList.add('active');
  } else if (regTabs.includes(tab)) {
    const regBtn = document.getElementById('nav-reg-menu');
    if (regBtn) regBtn.classList.add('active');
  } else {
    const activeTab = document.getElementById('nav-' + tab);
    if (activeTab) activeTab.classList.add('active');
  }

  // Update dropdown button labels to show the selected sub-tab name
  function setDropdownLabel(btnId, labelMap, defaultIcon, defaultText, currentTab) {
    var btn = document.getElementById(btnId);
    if (!btn) return;
    if (labelMap[currentTab]) {
      btn.innerHTML = '<span class="nav-icon">' + labelMap[currentTab].icon + '</span> ' + labelMap[currentTab].text + ' <span class="dropdown-arrow">▼</span>';
    } else {
      btn.innerHTML = '<span class="nav-icon">' + defaultIcon + '</span> ' + defaultText + ' <span class="dropdown-arrow">▼</span>';
    }
  }
  var idMap = { weeds: {icon:'🌾', text:'Weeds'}, pests: {icon:'🐛', text:'Pests'}, diseases: {icon:'🦠', text:'Diseases'} };
  var regMap = { apvma: {icon:'🏛️', text:'APVMA'}, sds: {icon:'🛡️', text:'SDS'}, permits: {icon:'📋', text:'Permits'} };
  var calcMap = { tank: {icon:'🚜', text:'Tank Mix'}, cost: {icon:'💰', text:'Cost Compare'}, container: {icon:'🛢️', text:'Container'} };
  setDropdownLabel('nav-id-menu', idMap, '🔬', 'Identify', tab);
  setDropdownLabel('nav-reg-menu', regMap, '🏛️', 'Registries', tab);
  setDropdownLabel('nav-calc-menu', calcMap, '🚜', 'Calculators', tab);

  // Hide all Ag content sections
  document.getElementById('agri-tank').classList.add('hidden');
  document.getElementById('agri-container').classList.add('hidden');
  document.getElementById('agri-cost').classList.add('hidden');
  document.getElementById('agri-nozzle').classList.add('hidden');
  document.getElementById('agri-search').classList.add('hidden');
  document.getElementById('agri-apvma').classList.add('hidden');
  document.getElementById('agri-apvma').style.display = ''; // Clear inline styles
  document.getElementById('agri-sds').classList.add('hidden');
  document.getElementById('agri-sds').style.display = ''; // Clear inline styles
  document.getElementById('agri-permits').classList.add('hidden');
  var weedsEl = document.getElementById('agri-weeds');
  if (weedsEl) weedsEl.classList.add('hidden');
  var pestsEl = document.getElementById('agri-pests');
  if (pestsEl) pestsEl.classList.add('hidden');
  var diseasesEl = document.getElementById('agri-diseases');
  if (diseasesEl) diseasesEl.classList.add('hidden');

  // Show the selected section
  document.getElementById('agri-' + tab).classList.remove('hidden');

  // Initialize specific logic per tab
  if (tab === 'tank' && !tankMixInitialised) { initProductDropdown(); tankMixInitialised = true; }
  if (tab === 'container') calculateContainerCoverage();
  if (tab === 'cost') {
    renderComparisonGrid();   // always re-render (handles both empty list and product list)
    calculateCostComparison();
  }
  if (tab === 'nozzle') calculateNozzle();
  if (tab === 'search' && !searchInitialised) { initSearch(); searchInitialised = true; }
  if (tab === 'sds' && !sdsInitialised) {
    // Initialize SDS registry display
    if (window.sdsRegistry && typeof renderSdsRegistry === 'function') {
      renderSdsRegistry(window.sdsRegistry);
    }
    sdsInitialised = true;
  }
  if (tab === 'permits' && !permitsInitialised) {
    if (window.permitsRegistry && typeof renderPermitsRegistry === 'function') {
      renderPermitsRegistry(window.permitsRegistry.permits);
    }
    permitsInitialised = true;
  }
  if (tab === 'apvma') {
    runApvmaSearch();
  }
  if (tab === 'weeds' && !weedsInitialised) {
    if (typeof initWeedsTab === 'function') initWeedsTab();
    weedsInitialised = true;
  }
  if (tab === 'pests' && !pestsInitialised) {
    if (typeof initPestsTab === 'function') initPestsTab();
    pestsInitialised = true;
  }
  if (tab === 'diseases' && !diseasesInitialised) {
    if (typeof initDiseasesTab === 'function') initDiseasesTab();
    diseasesInitialised = true;
  }
}

function initProductDropdown() {
  const select = document.getElementById('product-select');
  if (!select) return;

  // Clear existing options except default
  select.innerHTML = '<option value="">-- Select Product --</option>';

  const products = getAllProducts().map(p => {
    const data = getProductData(p.id);
    // Determine category using shared helper (database.js)
    const category = getProductCategory(data);

    return {
      id: p.id,
      name: p.name,
      category: category
    };
  });

  // Group products by Category
  const grouped = {};
  products.forEach(p => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push(p);
  });

  // Define Category Order
  const categoryOrder = ["Herbicides", "Insecticides", "Fungicides", "Miticides", "Rodenticides", "Wetter/Dye"];

  categoryOrder.forEach(cat => {
    if (grouped[cat] && grouped[cat].length > 0) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = cat;

      // Sort products alphabetically
      grouped[cat].sort((a, b) => a.name.localeCompare(b.name));

      grouped[cat].forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.name;
        optgroup.appendChild(option);
      });

      select.appendChild(optgroup);
    }
  });

  // Handle any uncategorized items
  Object.keys(grouped).forEach(cat => {
    if (!categoryOrder.includes(cat)) {
      const optgroup = document.createElement('optgroup');
      optgroup.label = cat;
      grouped[cat].sort((a, b) => a.name.localeCompare(b.name));
      grouped[cat].forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.name;
        optgroup.appendChild(option);
      });
      select.appendChild(optgroup);
    }
  });
}

// ── Shared helper: convert a split rate (amt / denom) to base units per ha ────
// amtUnit: mL | L | g | kg
// denomUnit: L (per litre of water) | ha (per hectare)
// denomVal: the number in the denominator, e.g. 100 for "per 100L", 1 for "per 1 ha"
function rateToBasePerHa(amtVal, amtUnit, denomVal, denomUnit, sprayVol) {
  const amt = parseFloat(amtVal) || 0;
  const dv = parseFloat(denomVal) || 1;
  if (!amt) return 0;
  const base = (amtUnit === 'L' || amtUnit === 'kg') ? amt * 1000 : amt; // → mL or g
  if (denomUnit === 'ha') return base / dv;                               // already per ha
  return (base / dv) * (parseFloat(sprayVol) || 100);                    // per L → per ha
}

// ── Parse a compound unit string like 'mL/100L' or 'g/ha' into components ────
function parseRateUnit(unitStr) {
  if (!unitStr) return { amtUnit: 'mL', denomVal: 100, denomUnit: 'L' };
  const i = unitStr.indexOf('/');
  if (i === -1) return { amtUnit: unitStr, denomVal: 100, denomUnit: 'L' };
  const amtUnit = unitStr.slice(0, i);
  const denomStr = unitStr.slice(i + 1);
  if (denomStr === 'ha') return { amtUnit, denomVal: 1, denomUnit: 'ha' };
  return { amtUnit, denomVal: parseFloat(denomStr) || 100, denomUnit: 'L' };
}

// ── Smart default when user switches the denominator unit ─────────────────────
function onDenomUnitChange(denomUnitEl, denomValEl) {
  if (!denomUnitEl || !denomValEl) return;
  const v = parseFloat(denomValEl.value);
  if (denomUnitEl.value === 'ha' && (isNaN(v) || v > 10)) denomValEl.value = '1';
  if (denomUnitEl.value === 'L' && (isNaN(v) || v <= 1)) denomValEl.value = '100';
}

// ── Shared helper: smart display of an amount ─────────────────────────────────
function formatChemAmount(amount, isLiquid) {
  if (!isFinite(amount) || amount <= 0) return '---';
  if (amount >= 1000) return `${(amount / 1000).toFixed(2)} ${isLiquid ? 'L' : 'kg'}`;
  if (amount >= 100) return `${amount.toFixed(0)} ${isLiquid ? 'mL' : 'g'}`;
  return `${amount.toFixed(1)} ${isLiquid ? 'mL' : 'g'}`;
}

// Takes just the amount unit (mL / L / g / kg)
function unitIsLiquid(amtUnit) {
  return amtUnit === 'mL' || amtUnit === 'L';
}

// ── TANK MIX CALCULATOR ───────────────────────────────────────────────────────

let extraChemCount = 0;

function calculateTankMix() {
  // Read from the visible HTML fields
  const amtVal = document.getElementById('agri-rate-input')?.value;
  const compoundUnit = document.getElementById('agri-rate-unit')?.value || 'mL/ha';
  const parsed = parseRateUnit(compoundUnit);
  const amtUnit = parsed.amtUnit;
  const denomVal = parsed.denomVal;
  const denomUnit = parsed.denomUnit;
  const sprayVol = parseFloat(document.getElementById('agri-spray-vol').value) || 100;
  const tankSize = parseFloat(document.getElementById('agri-tank-size').value);

  const amountEl = document.getElementById('tank-result-amount');
  const haEl = document.getElementById('tank-result-ha');

  if (!parseFloat(amtVal) || !tankSize) {
    if (amountEl) amountEl.innerText = '---';
    if (haEl) haEl.innerText = '---';
    updateTankMixTotal(0, sprayVol, tankSize, true);
    return;
  }

  const haPerTank = tankSize / sprayVol;
  const ratePerHa = rateToBasePerHa(amtVal, amtUnit, denomVal, denomUnit, sprayVol);
  const amountPerTank = ratePerHa * haPerTank;
  const liquid = unitIsLiquid(amtUnit);

  if (amountEl) amountEl.innerText = formatChemAmount(amountPerTank, liquid);
  if (haEl) haEl.innerText = haPerTank >= 10
    ? haPerTank.toFixed(1) + ' ha'
    : haPerTank.toFixed(2) + ' ha';

  saveHistory('Tank Mix',
    `${amtVal} ${compoundUnit}, ${tankSize}L tank`,
    formatChemAmount(amountPerTank, liquid));
  updateTankMixTotal(amountPerTank, sprayVol, tankSize, liquid);
}

function updateTankMixTotal(primaryAmount, sprayVol, tankSize, primaryLiquid) {
  const rows = document.querySelectorAll('.extra-chem-row');
  const totalBox = document.getElementById('tank-total-row');
  if (!rows.length) { if (totalBox) totalBox.classList.add('hidden'); return; }

  let total = primaryAmount || 0;
  rows.forEach(row => {
    const av = row.querySelector('.extra-chem-amt')?.value || 0;
    const au = row.querySelector('.extra-chem-amt-unit')?.value || 'mL';
    const dv = row.querySelector('.extra-chem-denom')?.value || '100';
    const du = row.querySelector('.extra-chem-denom-unit')?.value || 'L';
    const resultEl = row.querySelector('.extra-chem-result');
    const perHa = rateToBasePerHa(av, au, dv, du, sprayVol || 100);
    const perTank = perHa * ((tankSize || 2000) / (sprayVol || 100));
    if (resultEl) resultEl.innerText = parseFloat(av) ? formatChemAmount(perTank, unitIsLiquid(au)) : '—';
    total += perTank;
  });

  if (totalBox) {
    totalBox.classList.remove('hidden');
    const totalEl = document.getElementById('tank-total-amount');
    if (totalEl) totalEl.innerText = formatChemAmount(total, primaryLiquid !== false);
  }
}

function addTankChemical() {
  extraChemCount++;
  const n = extraChemCount;
  const div = document.createElement('div');
  div.className = 'extra-chem-row';
  div.id = `extra-chem-${n}`;
  div.style.cssText = 'margin-bottom:10px;background:var(--card-bg);border-radius:10px;padding:10px 12px;border:1px solid var(--border);';
  div.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
      <span style="font-size:0.78rem;font-weight:600;color:var(--text-sub);">Additional Chemical</span>
      <button onclick="removeTankChemical(${n})"
        style="background:none;border:none;cursor:pointer;color:var(--text-sub);font-size:1rem;padding:0;line-height:1;">✕</button>
    </div>
    <div style="display:flex;gap:5px;align-items:center;margin-bottom:4px;">
      <input type="number" class="form-input extra-chem-amt" placeholder="Amount"
        oninput="calculateTankMix()" inputmode="decimal" style="flex:2;min-width:0;">
      <select class="form-select extra-chem-amt-unit" onchange="calculateTankMix()" style="flex:1.6;min-width:0;">
        <option value="mL">mL</option><option value="L">L</option>
        <option value="g">g</option><option value="kg">kg</option>
      </select>
      <span style="color:var(--text-sub);font-size:0.78rem;white-space:nowrap;">per</span>
      <input type="number" class="form-input extra-chem-denom" value="100"
        oninput="calculateTankMix()" inputmode="decimal" style="flex:1.6;min-width:0;">
      <select class="form-select extra-chem-denom-unit"
        onchange="onDenomUnitChange(this,this.parentElement.querySelector('.extra-chem-denom'));calculateTankMix()"
        style="flex:1.6;min-width:0;">
        <option value="L">L</option><option value="ha">ha</option>
      </select>
    </div>
    <div style="text-align:right;">
      <span style="font-size:0.82rem;font-weight:600;color:var(--agri-green);" class="extra-chem-result">—</span>
      <span style="font-size:0.72rem;color:var(--text-sub);"> per tank</span>
    </div>`;
  document.getElementById('extra-chemicals-list').appendChild(div);
  if (document.getElementById('tank-total-row')) {
    document.getElementById('tank-total-row').classList.remove('hidden');
  }
  calculateTankMix();
}

function removeTankChemical(id) {
  const el = document.getElementById(`extra-chem-${id}`);
  if (el) el.remove();
  if (!document.querySelectorAll('.extra-chem-row').length) {
    const box = document.getElementById('tank-total-row');
    if (box) box.classList.add('hidden');
  }
  calculateTankMix();
}

// ── CONTAINER COVERAGE CALCULATOR ─────────────────────────────────────────────

function calculateContainerCoverage() {
  const amtVal = document.getElementById('cont-rate-val')?.value;
  const compoundUnit = document.getElementById('cont-rate-unit')?.value || 'mL/ha';
  const parsedUnit = parseRateUnit(compoundUnit);
  const amtUnit = parsedUnit.amtUnit;
  const denomVal = parsedUnit.denomVal;
  const denomUnit = parsedUnit.denomUnit;
  const sizeVal = parseFloat(document.getElementById('cont-size-val').value);
  const sizeUnit = document.getElementById('cont-size-unit').value;
  const sprayVol = parseFloat(document.getElementById('cont-spray-vol').value) || 100;
  const refTank = parseFloat(document.getElementById('cont-ref-tank').value) || 2000;

  const haEl = document.getElementById('cont-ha-result');
  const sprayEl = document.getElementById('cont-spray-result');
  const tanksEl = document.getElementById('cont-tanks-result');
  const labelEl = document.getElementById('cont-tanks-label');

  if (labelEl) labelEl.innerHTML =
    `full tanks&nbsp;<small style="color:var(--text-sub);">(${refTank}L tank)</small>`;

  if (!parseFloat(amtVal) || !sizeVal) {
    [haEl, sprayEl, tanksEl].forEach(el => { if (el) el.innerText = '---'; });
    return;
  }

  const containerBase = (sizeUnit === 'L' || sizeUnit === 'kg') ? sizeVal * 1000 : sizeVal;
  const ratePerHa = rateToBasePerHa(amtVal, amtUnit, denomVal, denomUnit, sprayVol);

  if (!ratePerHa) {
    [haEl, sprayEl, tanksEl].forEach(el => { if (el) el.innerText = '---'; });
    return;
  }

  const haFromCont = containerBase / ratePerHa;
  const totalSprayL = haFromCont * sprayVol;
  const tanksNeeded = totalSprayL / refTank;

  if (haEl) haEl.innerText = haFromCont >= 100 ? haFromCont.toFixed(0) + ' ha' : haFromCont.toFixed(1) + ' ha';
  if (sprayEl) sprayEl.innerText = totalSprayL >= 1000 ? (totalSprayL / 1000).toFixed(1) + ' kL' : totalSprayL.toFixed(0) + ' L';
  if (tanksEl) tanksEl.innerText = tanksNeeded.toFixed(1);

  saveHistory('Container Coverage',
    `${sizeVal}${sizeUnit} @ ${amtVal}${amtUnit}/${denomVal}${denomUnit}`,
    `${haFromCont.toFixed(1)} ha`);
}

// ── Cost Comparison Functions ────────────────────────────

window.comparisonList = [];

function toggleCompare(id, checkbox) {
  if (checkbox.checked) {
    if (window.comparisonList.length >= 4) {
      alert("You can compare a maximum of 4 products.");
      checkbox.checked = false;
      return;
    }
    if (!window.comparisonList.includes(id)) window.comparisonList.push(id);
  } else {
    window.comparisonList = window.comparisonList.filter(item => item !== id);
  }
  updateCompareButton();
}

function updateCompareButton() {
  const btn = document.getElementById('fab-compare');
  if (!btn) return;
  if (window.comparisonList.length > 0) {
    btn.classList.remove('hidden');
    btn.innerHTML = `<span>⚖️ Compare (${window.comparisonList.length})</span>`;
  } else {
    btn.classList.add('hidden');
  }
}

function openComparisonView() {
  if (window.comparisonList.length === 0) return;
  switchAgriSubTab('cost');
  renderComparisonGrid();
}

function resetCostCompare() {
  window.comparisonList = [];
  updateCompareButton();
  document.querySelectorAll('.compare-checkbox').forEach(cb => cb.checked = false);
  renderComparisonGrid();
  const banner = document.getElementById('winner-banner');
  if (banner) banner.classList.add('hidden');
}

function removeFromComparison(productId) {
  window.comparisonList = window.comparisonList.filter(id => id !== productId);
  // Uncheck the matching search-results checkbox (onchange contains the productId)
  document.querySelectorAll('.compare-checkbox').forEach(cb => {
    const oc = cb.getAttribute('onchange') || '';
    if (oc.includes(`'${productId}'`)) cb.checked = false;
  });
  updateCompareButton();
  renderComparisonGrid();
  calculateCostComparison();
}

function renderComparisonGrid() {
  const container = document.querySelector('.chem-grid');
  if (!container) return;
  container.innerHTML = '';

  const contUnitOpts = `<option value="L" selected>L</option><option value="mL">mL</option><option value="kg">kg</option><option value="g">g</option>`;

  // ── Helper: 4-field split-rate block ──────────────────────────────────────
  // Uses this.parentElement.querySelector('.comp-rate-denom') for onDenomUnitChange
  // so it works identically for both A/B (with IDs) and dynamic (classes only) cards.
  function splitRateHtml(amtId, auId, dvId, duId, defAmt, defAu, defDv, defDu) {
    const auOpts = ['mL', 'L', 'g', 'kg'].map(u =>
      `<option value="${u}"${u === defAu ? ' selected' : ''}>${u}</option>`).join('');
    const duOpts = ['L', 'ha'].map(u =>
      `<option value="${u}"${u === defDu ? ' selected' : ''}>${u}</option>`).join('');
    const ai = amtId ? `id="${amtId}"` : '';
    const ui = auId ? `id="${auId}"` : '';
    const di = dvId ? `id="${dvId}"` : '';
    const si = duId ? `id="${duId}"` : '';
    return `
      <div style="display:flex;gap:4px;align-items:center;flex-wrap:wrap;">
        <input type="number" ${ai} class="form-input comp-rate-amt"
          value="${defAmt}" placeholder="Amount" oninput="calculateCostComparison()"
          inputmode="decimal" style="flex:2;min-width:55px;">
        <select ${ui} class="form-select comp-rate-amt-unit"
          onchange="calculateCostComparison()" style="flex:1.3;min-width:0;">${auOpts}</select>
        <span style="color:var(--text-sub);font-size:0.78rem;padding:0 1px;white-space:nowrap;">per</span>
        <input type="number" ${di} class="form-input comp-rate-denom"
          value="${defDv}" oninput="calculateCostComparison()"
          inputmode="decimal" style="flex:1.3;min-width:38px;">
        <select ${si} class="form-select comp-rate-denom-unit"
          onchange="onDenomUnitChange(this,this.parentElement.querySelector('.comp-rate-denom'));calculateCostComparison()"
          style="flex:1.3;min-width:0;">${duOpts}</select>
      </div>
      <div style="font-size:0.68rem;color:var(--text-sub);margin-top:3px;">e.g. 500 mL per 100 L · 2 kg per 1 ha</div>`;
  }

  if (window.comparisonList.length === 0) {
    // ── Default A / B template ──────────────────────────────────────────────
    ['a', 'b'].forEach(letter => {
      const div = document.createElement('div');
      div.className = 'chem-card';
      div.id = `chem-${letter}-card`;
      div.innerHTML = `
        <h3>🧪 Chemical ${letter.toUpperCase()}</h3>
        <div class="form-group">
          <label class="form-label" style="font-size:0.72rem;">Rate</label>
          ${splitRateHtml(
        `chem-${letter}-rate-amt`, `chem-${letter}-rate-amt-unit`,
        `chem-${letter}-rate-denom`, `chem-${letter}-rate-denom-unit`,
        '', 'mL', '100', 'L')}
        </div>
        <div class="form-group">
          <label class="form-label" style="font-size:0.72rem;">Container Size</label>
          <div style="display:flex;gap:6px;">
            <input type="number" id="chem-${letter}-container" class="form-input" placeholder="Size"
              oninput="calculateCostComparison()" inputmode="decimal" style="flex:2;min-width:0;">
            <select id="chem-${letter}-cont-unit" class="form-select" onchange="calculateCostComparison()"
              style="flex:1.8;min-width:0;">${contUnitOpts}</select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" style="font-size:0.72rem;">Container Cost ($)</label>
          <input type="number" id="chem-${letter}-cost" class="form-input" placeholder="$"
            oninput="calculateCostComparison()" inputmode="decimal">
        </div>
        <div style="border-top:1px solid var(--border);margin:8px 0 6px;"></div>
        <div class="cost-result-row">
          <span class="label" style="font-size:0.78rem;">Cost/ha</span>
          <span class="value" id="chem-${letter}-cost-ha" style="font-size:1rem;font-weight:700;">$---</span>
        </div>
        <div class="cost-result-row">
          <span class="label" style="font-size:0.78rem;">Cost/tank <span id="chem-${letter}-tank-label" style="color:var(--text-sub);font-size:0.7rem;"></span></span>
          <span class="value" id="chem-${letter}-cost-tank" style="font-size:1rem;font-weight:700;">$---</span>
        </div>
        <div class="cost-result-row">
          <span class="label" style="font-size:0.78rem;">Tanks/container</span>
          <span class="value" id="chem-${letter}-tanks-cont" style="font-size:0.9rem;color:var(--text-sub);">---</span>
        </div>
        <div class="cost-result-row diff-row" style="margin-top:6px;">
          <span class="value" id="chem-${letter}-percent" style="font-size:0.82rem;">-</span>
        </div>`;
      container.appendChild(div);
    });
    setTimeout(calculateCostComparison, 50);
    return;
  }

  // ── Dynamic product cards ─────────────────────────────────────────────────
  window.comparisonList.forEach((productId, index) => {
    const product = getProductData(productId);
    const pName = product ? product.name : productId;
    let defaultRate = '';
    let defaultUnit = 'mL/100L';
    if (product && product.crops) {
      const firstCrop = Object.values(product.crops)[0];
      if (firstCrop && firstCrop.weeds && firstCrop.weeds.length > 0) {
        const w = firstCrop.weeds[0];
        defaultRate = w.rate || '';
        defaultUnit = w.unit || 'mL/100L';
      }
    }
    const parsed = parseRateUnit(defaultUnit);

    const div = document.createElement('div');
    div.className = 'chem-card';
    div.id = `comp-card-${index}`;
    div.dataset.productId = productId;
    div.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <h3 style="font-size:0.88rem;margin:0;flex:1;padding-right:6px;">${pName}</h3>
        <button onclick="removeFromComparison('${productId}')" title="Remove"
          style="background:none;border:none;cursor:pointer;color:var(--text-sub);font-size:1.1rem;padding:0;line-height:1;flex-shrink:0;">✕</button>
      </div>
      <div class="form-group">
        <label class="form-label" style="font-size:0.72rem;">Rate</label>
        ${splitRateHtml('', '', '', '', defaultRate, parsed.amtUnit, parsed.denomVal, parsed.denomUnit)}
      </div>
      <div class="form-group">
        <label class="form-label" style="font-size:0.72rem;">Container Size</label>
        <div style="display:flex;gap:6px;">
          <input type="number" class="form-input comp-size" data-idx="${index}"
            placeholder="Size" oninput="calculateCostComparison()"
            inputmode="decimal" style="flex:2;min-width:0;">
          <select class="form-select comp-cont-unit" data-idx="${index}"
            onchange="calculateCostComparison()" style="flex:1.8;min-width:0;">${contUnitOpts}</select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" style="font-size:0.72rem;">Container Cost ($)</label>
        <input type="number" class="form-input comp-cost" data-idx="${index}"
          placeholder="$" oninput="calculateCostComparison()" inputmode="decimal">
      </div>
      <div style="border-top:1px solid var(--border);margin:8px 0 6px;"></div>
      <div class="cost-result-row">
        <span class="label" style="font-size:0.78rem;">Cost/ha</span>
        <span class="value comp-ha-result" id="comp-ha-${index}" style="font-size:1rem;font-weight:700;">$---</span>
      </div>
      <div class="cost-result-row">
        <span class="label" style="font-size:0.78rem;">Cost/tank <span class="comp-tank-label" style="color:var(--text-sub);font-size:0.7rem;"></span></span>
        <span class="value comp-tank-result" id="comp-tank-${index}" style="font-size:1rem;font-weight:700;">$---</span>
      </div>
      <div class="cost-result-row">
        <span class="label" style="font-size:0.78rem;">Tanks/container</span>
        <span class="value comp-tanks-cont" id="comp-tanks-cont-${index}" style="font-size:0.9rem;color:var(--text-sub);">---</span>
      </div>`;
    container.appendChild(div);
  });

  setTimeout(calculateCostComparison, 100);
}

function calculateCostComparison() {
  const sprayVol = 100; // fixed: 100 L/ha (AU standard, used to convert per-L rates to per-ha)
  const tankSize = parseFloat(document.getElementById('cost-tank-size')?.value) || 100;
  const tankLabel = `(${tankSize}L tank)`;

  // Update tank label spans in all cards
  document.querySelectorAll('.comp-tank-label').forEach(el => el.innerText = tankLabel);
  ['a', 'b'].forEach(l => {
    const el = document.getElementById(`chem-${l}-tank-label`);
    if (el) el.innerText = tankLabel;
  });

  // Normalise container to base units (mL or g)
  function contToBase(sizeVal, sizeUnit) {
    const v = parseFloat(sizeVal) || 0;
    return (sizeUnit === 'L' || sizeUnit === 'kg') ? v * 1000 : v;
  }

  // Format tanks/container value clearly
  function fmtTanks(t) {
    if (!t || t <= 0) return '---';
    if (t < 1) {
      const n = Math.ceil(1 / t);
      return n + ' container' + (n === 1 ? '' : 's') + '/tank';
    }
    const n = Math.round(t);
    return n + ' tank' + (n === 1 ? '' : 's');
  }

  // Core per-card calculation
  function calcCard(amtVal, amtUnit, denomVal, denomUnit, contBase, contCost) {
    const ratePerHa = rateToBasePerHa(parseFloat(amtVal) || 0, amtUnit, denomVal, denomUnit, sprayVol);
    const amtPerTank = ratePerHa * (tankSize / sprayVol);          // mL or g per tank fill
    const costPerBase = contBase > 0 && parseFloat(contCost) > 0 ? parseFloat(contCost) / contBase : 0;
    const tanksPerCont = amtPerTank > 0 && contBase > 0 ? contBase / amtPerTank : 0;
    return {
      ratePerHa,
      amtPerTank,
      costPerHa: ratePerHa * costPerBase,
      costPerTank: amtPerTank * costPerBase,
      tanksPerCont
    };
  }

  // ── Dynamic product-list mode ─────────────────────────────────────────────
  if (window.comparisonList && window.comparisonList.length > 0) {
    const amtVals = document.querySelectorAll('.comp-rate-amt');
    const amtUnits = document.querySelectorAll('.comp-rate-amt-unit');
    const denomVals = document.querySelectorAll('.comp-rate-denom');
    const denomUnits = document.querySelectorAll('.comp-rate-denom-unit');
    const sizes = document.querySelectorAll('.comp-size');
    const contUnits = document.querySelectorAll('.comp-cont-unit');
    const costs = document.querySelectorAll('.comp-cost');
    const cards = document.querySelectorAll('.chem-card');

    let cheapestIdx = -1, minCost = Infinity, maxCost = 0;
    const costArr = [];
    cards.forEach(c => c.classList.remove('cheaper', 'expensive'));

    for (let i = 0; i < window.comparisonList.length; i++) {
      const av = amtVals[i]?.value || 0;
      const au = amtUnits[i]?.value || 'mL';
      const dv = denomVals[i]?.value || '100';
      const du = denomUnits[i]?.value || 'L';
      const sv = sizes[i]?.value || '1';
      const cu = contUnits[i]?.value || 'L';
      const c = costs[i]?.value || 0;
      const res = calcCard(av, au, dv, du, contToBase(sv, cu), c);
      costArr.push(res.costPerHa);

      const haEl = document.getElementById(`comp-ha-${i}`);
      const tkEl = document.getElementById(`comp-tank-${i}`);
      const tcEl = document.getElementById(`comp-tanks-cont-${i}`);
      if (haEl) haEl.innerText = res.costPerHa > 0 ? '$' + res.costPerHa.toFixed(2) : '$---';
      if (tkEl) tkEl.innerText = res.costPerTank > 0 ? '$' + res.costPerTank.toFixed(2) : '$---';
      if (tcEl) tcEl.innerText = fmtTanks(res.tanksPerCont);

      if (res.costPerHa > 0 && res.costPerHa < minCost) { minCost = res.costPerHa; cheapestIdx = i; }
      if (res.costPerHa > maxCost) maxCost = res.costPerHa;
    }

    if (cheapestIdx !== -1) {
      cards.forEach((card, i) => {
        if (i === cheapestIdx) card.classList.add('cheaper');
        else if (costArr[i] > 0) card.classList.add('expensive');
      });
      document.getElementById('winner-banner').classList.remove('hidden');
      const winnerName = document.querySelectorAll('.chem-card h3')[cheapestIdx].innerText;
      document.getElementById('winner-name').innerText = `🏆 ${winnerName} is Cheapest!`;
      if (maxCost > minCost) {
        const saving = maxCost - minCost;
        const pct = ((saving / maxCost) * 100).toFixed(1);
        document.getElementById('winner-savings').innerText = `Save $${saving.toFixed(2)} per ha vs most expensive`;
        document.getElementById('winner-percent').innerText = `(${pct}% cheaper)`;
      } else {
        document.getElementById('winner-savings').innerText = `Cost per ha: $${minCost.toFixed(2)}`;
        document.getElementById('winner-percent').innerText = '';
      }
    } else {
      document.getElementById('winner-banner').classList.add('hidden');
    }
    return;
  }

  // ── A / B legacy mode ─────────────────────────────────────────────────────
  const abResults = {};
  ['a', 'b'].forEach(letter => {
    const av = document.getElementById(`chem-${letter}-rate-amt`)?.value || 0;
    const au = document.getElementById(`chem-${letter}-rate-amt-unit`)?.value || 'mL';
    const dv = document.getElementById(`chem-${letter}-rate-denom`)?.value || '100';
    const du = document.getElementById(`chem-${letter}-rate-denom-unit`)?.value || 'L';
    const sv = document.getElementById(`chem-${letter}-container`)?.value || '1';
    const cu = document.getElementById(`chem-${letter}-cont-unit`)?.value || 'L';
    const c = document.getElementById(`chem-${letter}-cost`)?.value || 0;
    const res = calcCard(av, au, dv, du, contToBase(sv, cu), c);
    abResults[letter] = res;

    const haEl = document.getElementById(`chem-${letter}-cost-ha`);
    const tkEl = document.getElementById(`chem-${letter}-cost-tank`);
    const tcEl = document.getElementById(`chem-${letter}-tanks-cont`);
    if (haEl) haEl.innerText = res.costPerHa > 0 ? '$' + res.costPerHa.toFixed(2) : '$---';
    if (tkEl) tkEl.innerText = res.costPerTank > 0 ? '$' + res.costPerTank.toFixed(2) : '$---';
    if (tcEl) tcEl.innerText = res.tanksPerCont > 0 ? Math.round(res.tanksPerCont) + ' tanks' : '---';
  });

  const costA = abResults.a.costPerHa;
  const costB = abResults.b.costPerHa;
  const winnerBanner = document.getElementById('winner-banner');
  const cardA = document.getElementById('chem-a-card');
  const cardB = document.getElementById('chem-b-card');
  if (cardA) cardA.classList.remove('cheaper', 'expensive');
  if (cardB) cardB.classList.remove('cheaper', 'expensive');

  if (costA > 0 && costB > 0 && winnerBanner) {
    winnerBanner.classList.remove('hidden');
    if (costA === costB) {
      document.getElementById('winner-name').innerText = '🤝 Equal Cost!';
      document.getElementById('winner-savings').innerText = `Both cost $${costA.toFixed(2)} per ha`;
      document.getElementById('winner-percent').innerText = '';
      if (document.getElementById('chem-a-percent')) document.getElementById('chem-a-percent').innerText = '-';
      if (document.getElementById('chem-b-percent')) document.getElementById('chem-b-percent').innerText = '-';
    } else {
      const saving = Math.abs(costA - costB);
      const pct = ((saving / Math.max(costA, costB)) * 100).toFixed(1);
      const cheaperL = costA < costB ? 'a' : 'b';
      const expL = costA < costB ? 'b' : 'a';
      document.getElementById('winner-name').innerText = `🏆 Chemical ${cheaperL.toUpperCase()} is Cheaper!`;
      document.getElementById('winner-savings').innerText = `Save $${saving.toFixed(2)} per ha`;
      document.getElementById('winner-percent').innerText = `(${pct}% cheaper)`;
      if (document.getElementById(`chem-${cheaperL}-percent`))
        document.getElementById(`chem-${cheaperL}-percent`).innerText = `✅ Cheaper by $${saving.toFixed(2)}/ha`;
      if (document.getElementById(`chem-${expL}-percent`))
        document.getElementById(`chem-${expL}-percent`).innerText = `❌ +$${saving.toFixed(2)}/ha more`;
      if (cardA && cardB) {
        (costA < costB ? cardA : cardB).classList.add('cheaper');
        (costA < costB ? cardB : cardA).classList.add('expensive');
      }
    }
  } else if (winnerBanner) {
    winnerBanner.classList.add('hidden');
    if (document.getElementById('chem-a-percent')) document.getElementById('chem-a-percent').innerText = '-';
    if (document.getElementById('chem-b-percent')) document.getElementById('chem-b-percent').innerText = '-';
  }
}
// ── Nozzle Calibration Functions ─────────────────────────

function toggleNozzleMode() {
  const mode = document.getElementById('nozzle-mode').value;
  document.getElementById('nozzle-mode-check').classList.toggle('hidden', mode !== 'check');
  document.getElementById('nozzle-mode-select').classList.toggle('hidden', mode !== 'select');
  calculateNozzle();
}

function calculateNozzle() {
  const mode = document.getElementById('nozzle-mode').value;
  const speed = parseFloat(document.getElementById('nozzle-speed').value);
  const spacing = parseFloat(document.getElementById('nozzle-spacing').value);

  if (!speed || !spacing) return;

  if (mode === 'check') {
    // Mode: Check Output (Calculate L/ha)
    // Formula: (L/min * 60000) / (km/h * cm)
    const flow = parseFloat(document.getElementById('nozzle-flow').value);
    if (!flow) {
      document.getElementById('nozzle-output-lha').innerText = "---";
      return;
    }
    const l_ha = (flow * 60000) / (speed * spacing);
    document.getElementById('nozzle-output-lha').innerText = l_ha.toFixed(1) + " L/ha";
    saveHistory('Nozzle Check', `${flow} L/min @ ${speed} km/h`, `${l_ha.toFixed(1)} L/ha`);
  }
  else {
    // Mode: Select Nozzle (Calculate Required L/min)
    // Formula: (L/ha * km/h * cm) / 60000
    const target = parseFloat(document.getElementById('nozzle-target').value);
    if (!target) {
      document.getElementById('nozzle-output-lmin').innerText = "---";
      return;
    }
    const l_min = (target * speed * spacing) / 60000;
    document.getElementById('nozzle-output-lmin').innerText = l_min.toFixed(2) + " L/min";
    saveHistory('Nozzle Select', `Target: ${target} L/ha @ ${speed} km/h`, `${l_min.toFixed(2)} L/min`);
  }
}

// Product Database Functions
function updateProductData() {
  const product = document.getElementById('product-select').value;
  const cropSelect = document.getElementById('crop-select');
  cropSelect.innerHTML = '<option value="">-- Select Crop --</option>';
  currentRateUnit = 'g/mL'; // reset unit when product changes

  if (product && productDatabase[product]) {
    const crops = getCrops(product);
    crops.forEach(crop => {
      cropSelect.add(new Option(crop.name, crop.key));
    });
  }
  updateWeedOptions();
}

function updateWeedOptions() {
  const product = document.getElementById('product-select').value;
  const crop = document.getElementById('crop-select').value;
  const state = document.getElementById('state-select').value;
  const weedSelect = document.getElementById('weed-select');
  weedSelect.innerHTML = '<option value="">-- Select Weed --</option>';

  if (product && crop) {
    const weeds = getWeeds(product, crop, state);
    weeds.forEach((w, index) => {
      weedSelect.add(new Option(w.weed, index));
    });
  }
  document.getElementById('label-info').classList.add('hidden');
}

function applyLabelRate() {
  const product = document.getElementById('product-select').value;
  const crop = document.getElementById('crop-select').value;
  const weedIndex = document.getElementById('weed-select').value;

  if (product && crop && weedIndex !== "") {
    const weeds = getWeeds(product, crop, document.getElementById('state-select').value);
    const weed = weeds[weedIndex];
    if (weed) {
      // Populate the visible rate input + compound unit select
      const rateInput = document.getElementById('agri-rate-input');
      const unitSelect = document.getElementById('agri-rate-unit');
      if (rateInput) rateInput.value = weed.rate;

      // Try to match the label unit to a dropdown option (e.g. "mL/ha", "g/100L")
      if (unitSelect && weed.unit) {
        const unitLower = weed.unit.toLowerCase();
        let matched = false;
        for (let i = 0; i < unitSelect.options.length; i++) {
          if (unitSelect.options[i].value.toLowerCase() === unitLower) {
            unitSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
        // If no exact match, try normalizing (e.g. "ml/ha" → "mL/ha")
        if (!matched) {
          const parsed = parseRateUnit(weed.unit);
          const normalized = parsed.amtUnit + '/' +
            (parsed.denomUnit === 'ha' ? 'ha' : parsed.denomVal + parsed.denomUnit);
          for (let i = 0; i < unitSelect.options.length; i++) {
            if (unitSelect.options[i].value.toLowerCase() === normalized.toLowerCase()) {
              unitSelect.selectedIndex = i;
              break;
            }
          }
        }
      }

      document.getElementById('label-rate-display').innerText =
        `${weed.rate}${weed.rateMax != weed.rate ? '–' + weed.rateMax : ''} ${weed.unit}`;
      document.getElementById('label-stage-display').innerText = weed.stage || '';
      document.getElementById('label-info').classList.remove('hidden');
      const parsed = parseRateUnit(weed.unit);
      currentRateUnit = parsed.amtUnit;
      calculateTankMix();
    }
  }
}

// Finance Functions
let gstMode = 'add';

function setGstMode(mode) {
  gstMode = mode;
  document.getElementById('gst-add-btn').style.background = mode === 'add' ? 'var(--card-bg)' : 'var(--bg)';
  document.getElementById('gst-remove-btn').style.background = mode === 'remove' ? 'var(--card-bg)' : 'var(--bg)';
  calculateGST();
}

function calculateGST() {
  const amt = parseFloat(document.getElementById('gst-amount').value);
  if (isNaN(amt)) {
    document.getElementById('gst-total').innerText = '$0.00';
    document.getElementById('gst-tax').innerText = '$0.00';
    return;
  }
  const gst = gstMode === 'add' ? amt * 0.10 : amt / 11;
  const total = gstMode === 'add' ? amt + gst : amt - gst;
  document.getElementById('gst-total').innerText = '$' + total.toFixed(2);
  document.getElementById('gst-tax').innerText = '$' + gst.toFixed(2);
  saveHistory('GST Calculation', `${gstMode} 10% on $${amt}`, '$' + total.toFixed(2));
}

function quickGST(mode) {
  gstMode = mode;
  openPanel('finance');
  document.getElementById('gst-add-btn').style.background = mode === 'add' ? 'var(--card-bg)' : 'var(--bg)';
  document.getElementById('gst-remove-btn').style.background = mode === 'remove' ? 'var(--card-bg)' : 'var(--bg)';
  document.getElementById('gst-amount').focus();
}

function calculatePct() {
  const val = parseFloat(document.getElementById('pct-val').value);
  const rate = parseFloat(document.getElementById('pct-rate').value);
  if (isNaN(val) || isNaN(rate)) {
    document.getElementById('pct-result').innerText = "0";
    return;
  }
  const result = (val * rate) / 100;
  document.getElementById('pct-result').innerText = `${result.toFixed(2)} is ${rate}% of ${val}`;
}

// Calculator Functions
let calcExpression = "";

function appendCalc(v) {
  const last = calcExpression.slice(-1);
  if (['+', '-', '*', '/', '%', '.'].includes(v) && ['+', '-', '*', '/', '%', '.'].includes(last)) {
    calcExpression = calcExpression.slice(0, -1) + v;
  } else {
    calcExpression += v;
  }
  updateCalc();
}

function clearCalc() {
  calcExpression = "";
  document.getElementById('calc-history').innerText = "";
  updateCalc();
}

function deleteChar() {
  calcExpression = calcExpression.slice(0, -1);
  updateCalc();
}

function calculateResult() {
  if (!calcExpression) return;
  try {
    const safeExpr = calcExpression.replace(/[^0-9+\-*/%.]/g, '');
    const originalExpr = calcExpression; // capture before overwriting
    const res = new Function('return ' + safeExpr.replace(/%/g, '/100'))();
    document.getElementById('calc-history').innerText = originalExpr + " =";
    calcExpression = res.toString();
    if (!Number.isInteger(res)) calcExpression = parseFloat(res.toFixed(8)).toString();
    updateCalc();
    saveHistory('Calculator', originalExpr + ' =', calcExpression);
  } catch (e) {
    calcExpression = "Error";
    updateCalc();
    setTimeout(() => { calcExpression = ""; updateCalc(); }, 1500);
  }
}

function updateCalc() {
  document.getElementById('calc-display').innerText = calcExpression || "0";
}