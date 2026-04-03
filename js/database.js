// ─────────────────────────────────────────────────────────
// LABEL DATABASE — Container & Helper Functions
// Individual label data lives in js/labels/*.js
// Each label file merges into productDatabase at load time
// ─────────────────────────────────────────────────────────
const productDatabase = {};
window.productDatabase = productDatabase;

// ── Helpers used by the Tank Mix dropdowns ──────────────

function getProductData(productKey) {
  return productDatabase[productKey] || null;
}

function getCrops(productKey) {
  const product = productDatabase[productKey];
  if (!product) return [];
  return Object.keys(product.crops).map(key => ({
    key: key,
    name: product.crops[key].crop
  }));
}

function getWeeds(productKey, cropKey, state) {
  const product = productDatabase[productKey];
  if (!product || !product.crops[cropKey]) return [];
  return product.crops[cropKey].weeds.filter(w =>
    !state || w.states.includes(state) || w.states.includes("All")
  );
}

// ── Returns all registered products as [{id, name, color}] ──
function getAllProducts() {
  return Object.keys(productDatabase).map(id => ({
    id,
    name: productDatabase[id].name,
    color: productDatabase[id].color || '#10b981'
  }));
}

// ── Shared category classification helper ───────────────
// Determines the product category from classification.type and group.
// Used by search.js, calculators.js, and any future code that needs categories.
function getProductCategory(product) {
  let category = "Herbicides"; // Default
  if (product.classification && product.classification.type) {
    // classification.type can be a string (build 139+) or legacy array
    var rawType = product.classification.type;
    const types = Array.isArray(rawType)
      ? rawType.map(t => t.toLowerCase())
      : [String(rawType).toLowerCase()];
    if (types.includes('insecticide')) category = "Insecticides";
    else if (types.includes('fungicide')) category = "Fungicides";
    else if (types.includes('rodenticide')) category = "Rodenticides";
    else if (types.includes('miticide')) category = "Miticides";
    else if (types.some(t =>
      t.includes('surfactant') ||
      t.includes('penetrant') ||
      t.includes('dye') ||
      t.includes('adjuvant') ||
      t.includes('wetter') ||
      t === 'oil' ||
      t.includes('crop oil') ||
      t.includes('mineral oil') ||
      t.includes('conditioner')
    )) category = "Wetter/Dye";
  }
  // Fallback check on group name if classification missing
  if (category === "Herbicides" && product.group) {
    const g = product.group.toLowerCase();
    if (g.includes('insecticide')) category = "Insecticides";
    else if (g.includes('fungicide')) category = "Fungicides";
    else if (g.includes('adjuvant') || g.includes('marker')) category = "Wetter/Dye";
  }
  return category;
}
