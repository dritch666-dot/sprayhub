// ─────────────────────────────────────────────────────────────────────────────
// INTECO™ — Label Data
// Seed Treatment Additive (80% Soybean Oil Refining Raffinate + 20% Surfactants)
// Source: Inteco Product Label.pdf
// Bayer CropScience Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['inteco'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Bayer Inteco™ Seed Treatment Additive",

  category:         "Herbicides",
  activeIngredient: "80% Soybean Oil Refining Raffinate + 20% Surfactants/Emulsion Agents",
  group:            "Seed Treatment Additive (not classified)",
  modeOfAction:     "Oily, water-miscible solution applied during seed treatment to optimise attachment of active ingredient to seed. Treated seed shows improved handling with a smoother surface and reduced dust from abrasion during transport.",
  formulation:      "Liquid (Oil-based)",
  color:            "#78716c",
  apvma:            "Not APVMA registered (adjuvant)",
  company: "Bayer",
  labelPdf:         "Source labels/Inteco Product Label.pdf",
  sdsPdf:           "SDS Labels/Inteco SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Dust Reduction", "Seed Coating Adhesion"],
    timing: ["Pre-plant (seed treatment)"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Cereal Seed Treatment ──
    {
      crop: "Cereal Seed (all cereals)",
      cropList: ["Wheat", "Barley", "Oats", "Triticale", "Cereals"],
      weeds: [
        {
          weed: "Seed treatment adhesion / dust reduction",
          pestList: ["Seed Treatment", "Dust Reduction"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/100kg seed",
          stage: "Applied during seed treatment process.",
          note: "Apply in combination with chosen cereal seed treatment. When tank mixing insecticidal and/or fungicidal seed treatment into a slurry with water, ensure Inteco is added last while maintaining constant stirring. 300–600 mL of total seed treatment mixture per 100 kg of seed achieves good coverage. Has no influence on germination, vigour, or insecticidal/fungicidal effectiveness of mixing partner."
        }
      ]
    }
  ],

  // ── Withholding ──────────────────────────────────────────────
  withholding: {
    harvest: "Not applicable (seed treatment additive)",
    grazing: "Not applicable (seed treatment additive)"
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "Designed for use with water-based seed treatment formulations only.",
    "For advice on compatibility with other seed treatment products, contact Bayer Crop Science."
  ],

  // ── General Notes ──────────────────────────────────────────
  generalNotes: [
    "Shake well before use.",
    "GHS classification not required.",
    "Total slurry volume of 300–600 mL per 100 kg seed recommended for good coverage.",
    "Amount of water or total slurry volume can be adjusted depending on cereal seed and application equipment."
  ]
};
