// ─────────────────────────────────────────────────────────
// SYNERTROL HORTI BOTANICAL OIL CONCENTRATE — Label Data
// Adjuvant / Botanical Oil | Emulsifiable Concentrate (EC)
// Source: OCP_SynertrolHorti_Label.pdf
// APVMA Approval No: 50067
// Organic Crop Protectants Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['synertrolhorti'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Synertrol Horti Botanical Oil Concentrate",
  company: "Nufarm",

  category:         "Herbicides",
  activeIngredient: "850 g/L emulsifiable botanical oil",
  group:            "Adjuvant / Botanical Oil",
  modeOfAction:     "Improves wetting, spreading, penetration, rainfastness and drift reduction of co-applied pesticides",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#1e40af",
  apvma:            "50067",
  labelPdf: "Source labels/Duluxgroup_Synertrol_Horti_Botanical_Oil_Concentrate_Label.pdf",
  sdsPdf:           "SDS Labels/SYNERTROL_HORTI_BOTANICAL_OIL_CONCENTRATE.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Spray adjuvant — improves performance of co-applied pesticides and fertilisers"],
    timing: ["Tank mix additive"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Boom Spray — Broadacre and Row Crops",
      cropList: ["Boom Spray","Broadacre And Row Crops"],
      weeds: [
        {
          weed: "For addition to foliar agrochemical, horticultural pesticide and fertiliser sprays",
          pestList: ["For Addition To Foliar Agrochemical","Horticultural Pesticide And Fertiliser Sprays"],
          states: ["All"],
          rate: "250",
          rateMax: "500",
          unit: "mL/ha",
          stage: "Tank mix addition prior to spraying",
          note: "Rate: 250–500 mL/ha. Use the lower rate when using low dose rate chemicals. Increases wetting, penetration, rainfastness and drift reduction. DO NOT spray in high temperatures or in the middle of the day. No additional wetting agent or surfactant required when using Synertrol Horti."
        }
      ]
    },

    {
      crop: "Hand Gun / Spot Spraying",
      cropList: ["Hand Gun / Spot Spraying"],
      weeds: [
        {
          weed: "For addition to foliar agrochemical, horticultural pesticide and fertiliser sprays",
          pestList: ["For Addition To Foliar Agrochemical","Horticultural Pesticide And Fertiliser Sprays"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/100L",
          stage: "Tank mix addition prior to spraying",
          note: "Rate: 250 mL/100L. Pre-mix with spray concentrate before adding to spray tank. Jar test with new product combinations."
        }
      ]
    },

    {
      crop: "Orchard, Plantation, Vineyard and Tree Crops",
      cropList: ["Orchard","Plantation","Vineyard And Tree Crops"],
      weeds: [
        {
          weed: "For addition to foliar agrochemical, horticultural pesticide and fertiliser sprays",
          pestList: ["For Addition To Foliar Agrochemical","Horticultural Pesticide And Fertiliser Sprays"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/100L",
          stage: "Tank mix addition prior to spraying; maintain agitation during application",
          note: "Rate: 250 mL/100L or 2–3 L/ha. Maintain agitation during application. Mixtures are rainfast within minutes of application."
        }
      ]
    },

    {
      crop: "Knapsack / Backpack Sprayer",
      cropList: ["Knapsack / Backpack Sprayer"],
      weeds: [
        {
          weed: "For addition to foliar agrochemical, horticultural pesticide and fertiliser sprays",
          pestList: ["For Addition To Foliar Agrochemical","Horticultural Pesticide And Fertiliser Sprays"],
          states: ["All"],
          rate: "30",
          rateMax: "50",
          unit: "mL/100L",
          stage: "Tank mix addition prior to spraying",
          note: "Rate: 30–50 mL/10L (i.e. 300–500 mL/100L). Shake knapsack if it has been allowed to stand for any length of time."
        }
      ]
    },

    {
      crop: "CDA / Aerial / ULV / Misting Machine",
      cropList: ["CDA / Aerial / ULV / Misting Machine"],
      weeds: [
        {
          weed: "For addition to foliar agrochemical, horticultural pesticide and fertiliser sprays",
          pestList: ["For Addition To Foliar Agrochemical","Horticultural Pesticide And Fertiliser Sprays"],
          states: ["All"],
          rate: "1",
          rateMax: "2",
          unit: "L/ha",
          stage: "Tank mix addition; allows chemical application when plants are wet with dew in ULV applications",
          note: "CDA, Aerial, ULV, Misting Machine: 1–2 L/ha. Protects unstable or volatile products from sunlight breakdown and slows spray evaporation."
        }
      ]
    }

  ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "DO NOT spray in high temperatures or in the middle of the day.",
    "Always test the rate to be applied on a small trial area prior to full-scale spraying with a new product.",
    "DO NOT mix products together and then add Synertrol Horti — mix each individual product into Synertrol Horti one by one.",
    "DO NOT contaminate streams, rivers or waterways with the chemical or used containers."
  ],

  compatibility: {
    compatible:   ["Most commonly applied horticultural, agricultural pesticides and foliar fertiliser sprays.", "No additional wetting agent or surfactant required when using Synertrol Horti."],
    incompatible: [],
    notes:        ["Pre-mix Synertrol Horti with the chosen spray concentrate before adding to water in spray tank. Initially test-mix a small quantity. For wettable powder or dispersible granular formulations: add water to foliar spray on 1:1 basis, mix into slurry, then add to Synertrol Horti.", "Always pre-test new applications of mixtures of foliar sprays and Synertrol Horti."]
  },

  withholding: {
    harvest: "No withholding period specified — refer to label of co-applied product.",
    grazing:  "No grazing restriction specified — refer to label of co-applied product."
  },

  surfactant:     "No additional wetting agent or surfactant required when using Synertrol Horti.",
  sprayerCleanup: "Triple or preferably pressure rinse containers before disposal. Add rinsings to spray tank."

};
