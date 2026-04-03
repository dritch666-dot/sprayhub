// ─────────────────────────────────────────────────────────────────────────────
// SYNGENTA VANIVA 450SC NEMATICIDE — Label Data
// Nematicide | Fungicide | Suspension Concentrate (SC)
// Source: Syngenta_VANIVA_450SC_Nematicide_Label.pdf
// APVMA Approval No: 91437/132223
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['syngentavaniva'] = {
  name:             "Syngenta VANIVA 450SC Nematicide",
  company: "Syngenta",

  category:         "Insecticides",
  activeIngredient: "450 g/L Cyclobutrifluram",
  group:            "Group N-3 Nematicide / Group 7 Fungicide",
  modeOfAction:     "TYMIRIUM technology nematicide; SDHI fungicide",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#b45309",
  apvma:            "91437",
  labelPdf:         "Source labels/Syngenta_VANIVA_450SC_Nematicide_Label.pdf",
  sdsPdf:         "SDS Labels/Syngenta_Vaniva_SDS.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Insecticide",
    target: ["Root-knot nematode (Meloidogyne spp.)"],
    timing: ["Within 3 days of transplanting or planting"]
  },

  crops: [
    {
      crop: "Fruiting vegetables (Tomato, Capsicum, Chilli, Eggplant)",
      cropList: ["Tomato", "Capsicum", "Chilli", "Eggplant"],
      weeds: [
        { weed: "Root-knot nematode", pestList: ["Root-knot nematode (Meloidogyne spp.)"], states: ["All"], rate: "550", rateMax: "550", unit: "mL/ha", stage: "Within 3 days of transplanting", note: "Single trickle/drip irrigation application; only apply where pre-planting soil counts or paddock history indicate nematode population above economic threshold; trickle/drip irrigation tape positioned no greater than 12 cm from plant; application in second quarter of irrigation cycle after soil partially wetted; does not provide season-long control" }
      ]
    },
    {
      crop: "Cucurbits (Cucumber, Zucchini, Rockmelon, Melon, Watermelon, Pumpkin, Asian melon)",
      cropList: ["Cucumber", "Zucchini", "Rockmelon", "Melon", "Watermelon", "Pumpkin", "Asian melon"],
      weeds: [
        { weed: "Root-knot nematode", pestList: ["Root-knot nematode (Meloidogyne spp.)"], states: ["All"], rate: "550", rateMax: "550", unit: "mL/ha", stage: "Within 3 days of planting seeds", note: "Single trickle/drip irrigation application; apply where nematode population density above economic threshold; critical: DO NOT use Group 7 SDHI fungicides for first two foliar applications in spray program to limit resistance development" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply more than one application per crop",
    "DO NOT apply to dry soil",
    "DO NOT apply to waterlogged soils",
    "DO NOT apply via flood irrigation or overhead irrigation systems",
    "DO NOT apply in tank mixture with other products including fertilisers",
    "DO NOT apply if heavy rains or storms forecast within 3 days",
    "DO NOT irrigate to point of field runoff for at least 3 days after application",
    "DO NOT use Group 7 SDHI fungicides for first two foliar fungicide applications in spray program",
    "DO NOT apply below 8.5°C soil temperature (generally when nematode activity prevented)"
  ],

  compatibility: {
    compatible:   [],
    incompatible: ["All other products", "Fertilisers", "Group 7 fungicides (for first two foliar applications)"],
    notes:        ["VANIVA must NOT be mixed with other products including fertilisers"]
  },

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "Not applicable"
  },

  plantBackIntervals: {
    "Cereals, pulses, oil seed crops": "15 months",
    "All other crops": "None"
  },

  surfactant:     "Not required",
  sprayerCleanup: "Shake container vigorously before use; prepare injection solution with minimum dilution of 550 mL product in no less than 1 L water; inject during second quarter of irrigation cycle after soil partially wetted; duration of injection critical for uniform distribution"
};
