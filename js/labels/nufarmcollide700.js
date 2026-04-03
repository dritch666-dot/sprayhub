// ─────────────────────────────────────────────────────────────────────────────
// NUFARM COLLIDE 700 ADJUVANT — Label Data
// Adjuvant | Surfactant | Acidifier | Liquid
// Source: Nufarm_Collide_700_Adjuvant_Label.pdf
// APVMA Approval No: 70329/137064
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['nufarmcollide700'] = {
  name:             "Nufarm Collide 700 Adjuvant",
  company: "Nufarm",

  category:         "Adjuvants / Surfactants",
  activeIngredient: "700 g/L Alkylpolyglucosides + Propionic Acid + Modified Vegetable Oil (Soybean Oil-based)",
  group:            "Non-classified adjuvant",
  modeOfAction:     "Wetter/Spreader, Acidifier, Surfactant",
  formulation:      "Liquid (L)",
  color:            "#0369a1",
  apvma:            "70329",
  labelPdf:         "Source labels/Nufarm_Collide_700_Adjuvant_Label.pdf",
  sdsPdf:         "SDS Labels/COLLIDE_700_ADJUVANT.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Adjuvant",
    target: ["Herbicide spreading", "pH reduction", "Foliar fertilizer uptake", "Droplet size management"],
    timing: ["As required with herbicides, insecticides, fungicides"]
  },

  crops: [
    {
      crop: "Herbicides (Glyphosate, 2,4-D, MCPA, Metsulfuron methyl)",
      cropList: ["Glyphosate", "2,4-D", "MCPA", "Metsulfuron methyl"],
      weeds: [
        { weed: "Addition to herbicides for spreading and penetration", pestList: ["General weed control"], states: ["All"], rate: "250", rateMax: "500", unit: "mL/100L", stage: "Active growth", note: "Use high rate on stressed or difficult to control weeds" }
      ]
    },
    {
      crop: "Dimethoate (for pH reduction)",
      cropList: ["Dimethoate"],
      weeds: [
        { weed: "Reduction of pH to reduce alkaline hydrolysis", pestList: ["pH adjustment"], states: ["All"], rate: "100", rateMax: "100", unit: "mL/100L", stage: "Before mixing", note: "Add to water in spray tank before adding Dimethoate" }
      ]
    },
    {
      crop: "Foliar fertilizers",
      cropList: ["Foliar fertilizers"],
      weeds: [
        { weed: "Improve uptake of foliar fertilizers", pestList: ["Nutrient uptake"], states: ["All"], rate: "300", rateMax: "500", unit: "mL/100L", stage: "Application", note: "Tank mixing may increase potential for crop damage; check with supplier" }
      ]
    },
    {
      crop: "Spray applications (droplet management)",
      cropList: ["Spray applications"],
      weeds: [
        { weed: "Droplet size management to reduce fine droplets", pestList: ["Drift reduction"], states: ["All"], rate: "300", rateMax: "500", unit: "mL/100L", stage: "Application", note: "Reduces fine droplets (<150 micron) without increasing large droplets (>400 micron); contingent on good spraying practice and nozzle choice" }
      ]
    }
  ],

  restraints: [
    "DO NOT use with copper products",
    "DO NOT use in situations conducive to drift",
    "DO NOT store below 5°C for extended periods",
    "DO NOT contaminate streams, rivers or waterways"
  ],

  compatibility: {
    compatible:   ["Herbicides (Glyphosate, 2,4-D, MCPA, Metsulfuron methyl)", "Insecticides", "Fungicides", "Foliar fertilizers", "Plant growth regulators"],
    incompatible: ["Copper products"],
    notes:        ["Can be used where a wetter/spreader or self-emulsifying oil is required"]
  },

  withholding: {
    harvest: "Not applicable - adjuvant only",
    grazing: "Follow withholding periods of the product mixed with Nufarm Collide 700"
  },

  surfactant:     "Self-emulsifying oil (soybean oil-based natural surfactants)",
  sprayerCleanup: "Spray tank with good water supply; triple-rinse containers before disposal"
};
