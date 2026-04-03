// ─────────────────────────────────────────────────────────────────────────────
// NUFARM SINKER FUNGICIDE — Label Data
// Fungicide | Liquid Concentrate
// Source: Nufarm_Sinker_Fungicide.pdf
// APVMA Approval No: 67732/133927
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['nufarmsinker'] = {
  name:             "Nufarm Sinker Fungicide",
  company: "Nufarm",

  category:         "Fungicides",
  activeIngredient: "500 g/L Flutriafol",
  group:            "Group 3 Fungicide",
  modeOfAction:     "DMI (Sterol demethylation inhibitor) - systemic fungicide",
  formulation:      "Liquid Concentrate (EC)",
  color:            "#0a5c36",
  apvma:            "67732",
  labelPdf:         "Source labels/Nufarm_Sinker_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/SINKER_FUNGICIDE.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Fungicide",
    target: ["Sugarcane smut", "Pineapple disease"],
    timing: ["Pre-planting treatment"]
  },

  crops: [
    {
      crop: "Sugarcane planting material (setts/billets) - SINGLE ROW PLANTING",
      cropList: ["Sugarcane","Sugarcane Planting Material"],
      weeds: [
        { weed: "Pineapple disease (Ceratocystis paradoxa), Sugarcane smut (Sporisorium scitamineum)", pestList: ["Pineapple Disease","Sugarcane Smut"], states: ["All"], rate: "7.5", rateMax: "7.5", unit: "mL/100m row", stage: "Spray planter or planter mounted dip", note: "For the prevention of primary infection of pineapple disease and sugarcane smut in sugarcane, apply as a spray onto setts/billets in the planting chute or with a planter mounted dip. The use of Activator will enhance coverage of the fungicide on the planting material. Calibrate the spray application or planter mounted dip so that the total volume of Nufarm Sinker applied per 100 metre row of cane is 7.5 mL. This can be done by mixing Nufarm Sinker at 125 mL/100 L of water and applying 6L of this mixture per 100 metre row of cane. Wherever possible, calibrate the planter to ensure thorough coverage with this water volume. However, if coverage is not adequate higher water volumes can be used by reducing the rate of Nufarm Sinker per 100 L of water accordingly (refer to Table A in the GENERAL INSTRUCTIONS). For single row planting, DO NOT apply more than 500 mL/ha. For dual row planting, DO NOT apply more than 833 mL/ha. + Activator at 50 mL/100 L spray mixture." }
      ]
    },
    {
      crop: "Sugarcane planting material (setts/billets) - DUAL ROW PLANTING",
      cropList: ["Sugarcane","Sugarcane Planting Material"],
      weeds: [
        { weed: "Pineapple disease (Ceratocystis paradoxa), Sugarcane smut (Sporisorium scitamineum)", pestList: ["Pineapple Disease","Sugarcane Smut"], states: ["All"], rate: "7.5", rateMax: "7.5", unit: "mL/100m row", stage: "Spray planter or planter mounted dip", note: "Split application is not recommended for dual row planting systems. Ensure the rate of 7.5 mL/100 m row is applied in both rows of a dual row planting system. FOR SPRAY PLANTER APPLICATION: The spray should be applied with a minimum of 4 nozzles arranged in the planting chute to give thorough coverage of all surfaces of the setts/billets before they are planted in the furrow (up to the point of run-off). FOR PLANTER MOUNTED DIP APPLICATION: Cane may or may not have previously been hot water treated for disinfection from other diseases. Check dip frequently for dirt and trash as these reduce the effectiveness of the fungicide. If solution colour changes from blue it should be discarded and a fresh dip made up after the dip tank has been cleaned out to extend the life of the dip. Ensure cane is dipped for at least 5-10 seconds for thorough coverage. + Activator at 50 mL/100 L spray mixture." }
      ]
    },
    {
      crop: "Sugarcane planting material (setts/billets, seed cane only) - STATIC DIP APPLICATION",
      cropList: ["Sugarcane","Sugarcane Seed Cane"],
      weeds: [
        { weed: "Pineapple disease (Ceratocystis paradoxa), Sugarcane smut (Sporisorium scitamineum)", pestList: ["Pineapple Disease","Sugarcane Smut"], states: ["All"], rate: "50", rateMax: "125", unit: "mL/100L water", stage: "5-10 minute ambient dip", note: "For the prevention of primary infection of pineapple disease and sugarcane smut of sugarcane planting material apply utilising a static dip as a 5-10 minute ambient dip treatment. For heavy disease pressure, or where superior control is required, use the higher rate and increase the duration of dipping (up to 12 hours). The use of Activator will enhance coverage of the fungicide on the planting material. Cane may or may not have previously been hot water treated for disinfection from other diseases. Check dip frequently for dirt and trash as these reduce the effectiveness of the fungicide. If solution colour changes from blue it should be discarded. + Activator at 50 mL/100 L spray mixture." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply if heavy rains or storms forecast within 24 hours",
    "DO NOT irrigate to point of runoff for at least 24 hours after application"
  ],

  compatibility: {
    compatible:   ["Activator surfactant"],
    incompatible: [],
    notes:        ["Designed for sugarcane planting material treatment - specialized use"]
  },

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "DO NOT graze or cut for stock food for 32 weeks after treatment"
  },

  surfactant:     "Activator surfactant required - 50 mL/100L spray mixture",
  sprayerCleanup: "Triple-rinse containers before disposal. Dip disposal via authorized facility."
};
