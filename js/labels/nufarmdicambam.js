// ─────────────────────────────────────────────────────────────────────────────
// SUREFIRE DICAMBA M SELECTIVE HERBICIDE — Label Data
// Herbicide | Group I | Liquid
// Source: Nufarm_Dicamba_M_Herbicide_Label.pdf
// APVMA Approval No: 62657/0108 (various container sizes)
// Manufacturer: PCT Holdings Pty Ltd / Surefire brand
// Active Constituents: MCPA + Dicamba
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['nufarmdicambam'] = {
  name:             "Surefire Dicamba M Selective Herbicide",
  company: "Surefire",

  category:         "Herbicides",
  activeIngredient: "340 g/L MCPA (present as dimethylamine salt) + 80 g/L Dicamba (present as dimethylamine salt)",
  group:            "Group I Herbicide",
  modeOfAction:     "Synthetic auxin - selective broadleaf herbicide",
  formulation:      "Liquid",
  color:            "#7c2d12",
  apvma:            "62657",
  labelPdf:         "Source labels/Nufarm_Dicamba_M_Herbicide_Label.pdf",
  sdsPdf:         "SDS Labels/Surefire_Dicamba_M_Selective_Herbicide.pdf",
  signalHeading:    "CAUTION",
  classification: {
    type: "Herbicide",
    target: ["Broadleaf weeds"],
    timing: ["Active growth stage"]
  },

  crops: [
    {
      crop: "Winter cereals",
      cropList: ["Winter cereals"],
      weeds: [
        { weed: "Broadleaf weeds", pestList: ["Broadleaf weeds"], states: ["All"], rate: "As per directions", rateMax: "As per directions", unit: "mL/ha", stage: "Active growth", note: "For control of certain broadleaf weeds in winter cereals" }
      ]
    },
    {
      crop: "Pastures",
      cropList: ["Pastures"],
      weeds: [
        { weed: "Broadleaf weeds", pestList: ["Broadleaf weeds"], states: ["All"], rate: "As per directions", rateMax: "As per directions", unit: "mL/ha", stage: "Active growth", note: "For control of certain broadleaf weeds in pastures" }
      ]
    },
    {
      crop: "Turf",
      cropList: ["Turf"],
      weeds: [
        { weed: "Broadleaf weeds", pestList: ["Broadleaf weeds"], states: ["All"], rate: "As per directions", rateMax: "As per directions", unit: "mL/ha", stage: "Active growth", note: "For control of certain broadleaf weeds in turf" }
      ]
    },
    {
      crop: "Non-crop areas",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Broadleaf weeds", pestList: ["Broadleaf weeds"], states: ["All"], rate: "As per directions", rateMax: "As per directions", unit: "mL/ha", stage: "Active growth", note: "For control of certain broadleaf weeds in non-crop areas" }
      ]
    }
  ],

  restraints: [
    "DO NOT inhale vapour",
    "DO NOT store below 5°C for extended periods",
    "DO NOT store for prolonged periods in direct sunlight",
    "Harmful if absorbed by skin contact, inhaled or swallowed",
    "Will irritate the eyes and skin",
    "Repeated exposure may cause allergic disorders"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Read attached leaflet before using this product"]
  },

  withholding: {
    harvest: "Not specified - herbicide only",
    grazing: "Not specified in label"
  },

  surfactant:     "Not specified",
  sprayerCleanup: "Triple or preferably pressure rinse containers before disposal; add rinsings to spray tank; do not dispose of undiluted chemicals on site; if recycling, replace cap and return clean containers to recycler; if not recycling, break, crush or puncture and bury in local authority landfill or approved waste facility"
};
