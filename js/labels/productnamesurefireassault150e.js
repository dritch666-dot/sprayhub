// ─────────────────────────────────────────────────────────
// Surefire Assault 150 EC — Label Data
// Group 22A (Oxadiazine) | Emulsifiable Concentrate
// Source: Pct_Holdings_Surefire_Assault_150_Ec_Insecticide_Label.pdf
// APVMA Approval No: 89722
// PCT Holdings Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['productnamesurefireassault150e'] = {

  name:             "Surefire Assault 150 EC",
  company: "Surefire",


  category:         "Insecticides",
  activeIngredient: "150 g/L Indoxacarb (S-isomer)",
  group:            "Group 22A (Oxadiazine)",
  modeOfAction:     "Activates insect sodium channels; causes paralysis",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#1c1917",
  apvma:            "89722",
  labelPdf:         "Source labels/Pct_Holdings_Surefire_Assault_150_Ec_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/SUREFIRE_ASSAULT_150EC_INSECTICIDE.pdf",
  signalHeading:    "Poison",

  classification: {
    type: "Insecticide",
    target: ["Armyworms", "Caterpillars", "Cutworms", "Diamondback Moth", "Leafminers", "Loopers"],
    timing: ["Curative"]
  },

  crops: [
    {
      crop: "Leafy Vegetables (Brassicas, Lettuce)",
      cropList: ["Leafy Vegetables","Brassicas","Lettuce"],
      weeds: [
        {
          weed: "Diamondback Moth, Armyworms, Loopers",
          pestList: ["Diamondback Moth","Armyworms","Loopers"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Early instar caterpillars; repeat 7-10 days if needed",
          note: "3 day harvest withholding. Monitor for resistance development. Excellent for DBM control."
        }
      ]
    },
    {
      crop: "Pod Vegetables & Legumes",
      cropList: ["Pod Vegetables & Legumes"],
      weeds: [
        {
          weed: "Caterpillars, Loopers, Leafminers",
          pestList: ["Caterpillars","Loopers","Leafminers"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "mL/100L",
          stage: "As pests appear; repeat interval 7-10 days",
          note: "3 day harvest withholding. Good stomach and contact action."
        }
      ]
    },
    {
      crop: "Grapes",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Light Brown Apple Moth, Leafrollers",
          pestList: ["Light Brown Apple Moth","Leafrollers"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "mL/100L",
          stage: "During pest activity",
          note: "14 day harvest withholding. Apply at 7-day intervals if required."
        }
      ]
    },
    {
      crop: "Citrus, Tree Fruit",
      cropList: ["Citrus","Tree Fruit"],
      weeds: [
        {
          weed: "Caterpillar species",
          pestList: ["Caterpillar Species"],
          states: ["All"],
          rate: "75",
          rateMax: "100",
          unit: "mL/100L",
          stage: "During pest pressure",
          note: "Harvest withholding varies by crop (7-21 days). Read label."
        }
      ]
    }
  ],

  restraints: [
    "Harmful if swallowed",
    "May irritate eyes and skin",
    "Avoid contact with eyes and skin",
    "Do not breathe spray mist",
    "Very toxic to aquatic life with long-lasting effects"
  ],

  compatibility: {
    compatible:   ["Most fungicides and insecticides"],
    incompatible: [],
    notes:        ["Check label of tank mix products"]
  },

  withholding: {
    harvest: "Varies by crop: Leafy vegetables 3 days, Grapes 14 days, Other crops 7-21 days (consult label).",
    grazing: "Consult label for pasture restrictions."
  },

  surfactant:     "A suitable spreader/sticker is recommended for optimal coverage.",
  sprayerCleanup: "Rinse sprayer thoroughly with water after each application."
};
