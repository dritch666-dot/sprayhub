// ─────────────────────────────────────────────────────────────────────────────
// SUREFIRE VISTA 200SC INSECTICIDE — Label Data
// Insecticide | Suspension Concentrate
// Source: PCT_Holdings_Surefire_Vista_200sc_Insecticide_Label.pdf
// APVMA Approval No: 63581/110165
// PCT Holdings Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['surefiresvista200sc'] = {
  name:             "Surefire Vista 200SC Insecticide",
  company: "Surefire",

  category:         "Insecticides",
  activeIngredient: "200 g/L Fipronil",
  group:            "Group 2B Insecticide",
  modeOfAction:     "Blocks GABA-regulated chloride channels in insect nervous system; broad-spectrum insecticide",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#065f46",
  apvma:            "63581",
  labelPdf:         "Source labels/Pct_Holdings_Surefire_Vista_200sc_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/SureFire_Vista_200SC_Insecticide.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Insecticide",
    target: ["Various insect pests"],
    timing: ["Post-emergent"]
  },

  crops: [
    {
      crop: "Asparagus",
      cropList: ["Asparagus"],
      weeds: [
        { weed: "Garden weevil", pestList: ["Garden Weevil"], states: ["WA", "Vic"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "Post-emergent", note: "Apply 500 L spray solution per hectare; superior control if applied at night" }
      ]
    },
    {
      crop: "Bananas",
      cropList: ["Bananas"],
      weeds: [
        { weed: "Banana rust thrips, banana weevil borer", pestList: ["Banana Rust Thrips", "Banana Weevil Borer"], states: ["Qld", "NSW", "WA", "NT"], rate: "150", rateMax: "150", unit: "mL/100L", stage: "Butt application", note: "Apply 500 mL solution per stool or band application; 40 mL/100 m2" }
      ]
    },
    {
      crop: "Brassicas",
      cropList: ["Brassicas"],
      weeds: [
        { weed: "Diamondback moth, cabbage white butterfly, cabbage cluster caterpillar", pestList: ["Diamondback Moth", "Cabbage White Butterfly", "Cabbage Cluster Caterpillar"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "Post-emergent", note: "Limit to 4 applications per year within 8-week period; use non-ionic wetting agent" }
      ]
    },
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        { weed: "Cotton thrips, green mirid", pestList: ["Cotton Thrips", "Green Mirid"], states: ["Qld", "NSW", "WA"], rate: "62.5", rateMax: "125", unit: "mL/ha", stage: "Post-emergent", note: "Apply at first sign of pest; takes 3-4 days to full effectiveness" }
      ]
    },
    {
      crop: "Sugarcane",
      cropList: ["Sugarcane"],
      weeds: [
        { weed: "Sugarcane weevil borer, sugarcane wireworm", pestList: ["Sugarcane Weevil Borer", "Sugarcane Wireworm"], states: ["Qld", "NSW", "WA", "NT"], rate: "2", rateMax: "5.7", unit: "mL/100m row", stage: "Summer", note: "Apply December-February when crop produces first millable internode" }
      ]
    }
  ],

  restraints: [
    "Dangerous to bees - DO NOT apply where bees from managed hives are foraging and crops are in flower",
    "DO NOT apply for 28 days before expected flowering or 7 days for pastures/sorghum",
    "Highly toxic to fish and aquatic organisms",
    "DO NOT contaminate waterways with spray drift",
    "DO NOT apply aerially to brassicas and potatoes"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Check compatibility with other products before tank mixing"]
  },

  withholding: {
    harvest: "Various by crop: 1 day asparagus, 4 weeks cotton, 7 days brassicas/swedes/turnips, 12 weeks sugarcane",
    grazing: "14 days pasture/sorghum; 21 days livestock from slaughter after application if stock present"
  },

  surfactant:     "Non-ionic wetting agent recommended for brassicas at specified rate",
  sprayerCleanup: "Triple rinse containers before disposal; add rinsings to spray tank"
};
