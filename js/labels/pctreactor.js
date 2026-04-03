// ─────────────────────────────────────────────────────────────────────────────
// PCT REACTOR SPRAY ADJUVANT — Label Data
// Adjuvant | Liquid Concentrate
// Source: PCT_Holdings_Pct_Reactor_Spray_Adjuvant_Label.pdf
// APVMA Approval No: 86258/115145
// PCT Holdings Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['pctreactor'] = {
  name:             "PCT Reactor Spray Adjuvant",
  company: "PCT",

  category:         "Adjuvants / Surfactants",
  activeIngredient: "417 g/L Ammonium Sulfate",
  group:            "Adjuvant",
  modeOfAction:     "Spray adjuvant for use with glyphosate-based herbicides to minimise antagonism and improve performance under adverse environmental conditions",
  formulation:      "Liquid Concentrate",
  color:            "#7f1d1d",
  apvma:            "86258",
  labelPdf:         "Source labels/Pct_Holdings_Pct_Reactor_Spray_Adjuvant_Label.pdf",
  sdsPdf:           "SDS Labels/PCT_Reactor_Surfactant_700.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Adjuvant",
    target: ["Non-selective herbicide antagonism suppression"],
    timing: ["Pre-mixing"]
  },

  crops: [
    {
      crop: "Tank mixes with non-selective herbicides",
      cropList: ["Tank Mixes With Non-Selective Herbicides"],
      weeds: [
        { weed: "Use with glyphosate-based herbicides", pestList: ["Use with Glyphosate-Based Herbicides"], states: ["All"], rate: "2", rateMax: "2", unit: "L/100L", stage: "Application", note: "Half fill spray tank with clean water and start agitation, add PCT Reactor, add flowable herbicide with agitation, add glyphosate and remaining water" }
      ]
    }
  ],

  restraints: [
    "DO NOT use with selective herbicides as loss of selectivity may occur",
    "DO NOT use for any other purpose except with non-selective herbicides",
    "Ammonium sulfate may be corrosive to metal parts of sprayer - flush thoroughly after use"
  ],

  compatibility: {
    compatible:   ["Glyphosate-based herbicides (non-selective)"],
    incompatible: ["Selective herbicides"],
    notes:        ["Thoroughly flush tanks, pumps and nozzles with water after use"]
  },

  withholding: {
    harvest: "Not applicable",
    grazing: "Not applicable"
  },

  surfactant:     "May add surfactant near end of filling process to minimise foaming",
  sprayerCleanup: "Thoroughly flush tanks, pumps and nozzles with water after use due to corrosive nature of ammonium sulfate"
};
