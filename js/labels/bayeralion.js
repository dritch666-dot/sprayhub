// ─────────────────────────────────────────────────────────────────────────────
// ALION 500 SC HERBICIDE — Label Data
// Suspension Concentrate (SC) | Group 29 Herbicide
// Source: Bayer_Alion_Herbicide_Label.txt
// APVMA Approval No: 92296/138632
// Bayer CropScience Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['bayeralion'] = {
  name:             "Alion 500 SC Herbicide",
  company: "Bayer",

  category:         "Herbicides",
  activeIngredient: "500 g/L Indaziflam",
  group:            "Group 29 Herbicide",
  modeOfAction:     "Cellulose biosynthesis inhibitor (CB inhibitor) for pre-emergent weed control",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#92400e",
  apvma:            "92296/138632",
  labelPdf:         "Source labels/Bayer_Alion_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/Alion_500_SC_Herbicide.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Herbicide",
    target: ["Grass weeds", "Broadleaf weeds"],
    timing: ["Before emergence"]
  },

  crops: [
    {
      crop: "Almond Orchards — Broadleaf and grass weed control",
      cropList: ["Almond Orchards","Broadleaf And Grass Weed Control"],
      weeds: [
        { weed: "Various broadleaf weeds", pestList: ["Various Broadleaf Weeds"], states: ["All"], rate: "50-100", rateMax: "100", unit: "mL/ha", stage: "Prior to emergence", note: "Uniform broadcast application, broadcast max 100 mL/ha per 12 months" },
        { weed: "Various grasses", pestList: ["Various Grasses"], states: ["All"], rate: "50-100", rateMax: "100", unit: "mL/ha", stage: "Prior to emergence", note: "Use higher rate in year 1 or if weed pressure high" }
      ]
    },
    {
      crop: "Citrus Orchards — Broadleaf and grass weed control",
      cropList: ["Citrus Orchards","Broadleaf And Grass Weed Control"],
      weeds: [
        { weed: "Various broadleaf weeds", pestList: ["Various Broadleaf Weeds"], states: ["All"], rate: "50-100", rateMax: "100", unit: "mL/ha", stage: "Prior to emergence", note: "Can be applied as band application between rows at 150 mL/ha" },
        { weed: "Various grasses", pestList: ["Various Grasses"], states: ["All"], rate: "50-100", rateMax: "100", unit: "mL/ha", stage: "Prior to emergence", note: "Lower rate for subsequent years if low weed pressure" }
      ]
    },
    {
      crop: "Vineyards — Broadleaf and grass weed control",
      cropList: ["Vineyards","Broadleaf And Grass Weed Control"],
      weeds: [
        { weed: "Various broadleaf weeds", pestList: ["Various Broadleaf Weeds"], states: ["All"], rate: "50-100", rateMax: "100", unit: "mL/ha", stage: "Prior to emergence", note: "Maximum 100 mL/ha broadcast or 150 mL/ha band application per 12 months" },
        { weed: "Various grasses", pestList: ["Various Grasses"], states: ["All"], rate: "50-100", rateMax: "100", unit: "mL/ha", stage: "Prior to emergence", note: "Avoid use in sandy soils or heavily cracked clay soils" }
      ]
    },
    {
      crop: "Agricultural Fence Lines — Weed control",
      cropList: ["Agricultural Fence Lines","Weed Control"],
      weeds: [
        { weed: "Various weeds", pestList: ["Various Weeds"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/ha", stage: "Prior to emergence", note: "Apply prior to weed emergence, maximum 150 mL/ha per 6 months" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by aerial spraying",
    "DO NOT apply with a nozzle height greater than 50 cm above the ground",
    "DO NOT apply through any type of irrigation equipment",
    "DO NOT irrigate to the point of runoff for at least 3 days after application",
    "DO NOT apply to waterlogged soil",
    "DO NOT apply if heavy rains or storms are forecast within 3 days"
  ],

  compatibility: {
    compatible:   ["Glyphosate", "Paraquat", "Glufosinate-ammonium", "Metsulfuron-methyl", "Simazine", "Sulfometuron-methyl"],
    incompatible: [],
    notes:        ["For knockdown of emerged weeds, use with post-emergent herbicides", "Conduct compatibility test before mixing commercial quantities"]
  },

  withholding: {
    harvest: "Almonds, Citrus, Grapes: 14 days; Agricultural fence lines: 7 days",
    grazing: "Do not graze or cut for stockfood for 7 days after application"
  },

  surfactant:     "Use coarse droplet-producing nozzle tips and drift-control additives",
  sprayerCleanup: "Spray tank must be thoroughly decontaminated using bleach solution (300 mL per 100L water with 4% chlorine). Apply uniform broadcast application with proper equipment calibration"
};
