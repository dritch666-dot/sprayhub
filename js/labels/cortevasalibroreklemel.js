// ─────────────────────────────────────────────────────────────────────────────
// CORTEVA SALIBRO REKLEMEL NEMATICIDE — Label Data
// Nematicide | Suspension Concentrate
// Source: Corteva_Salibro_Reklemel_Nematicide_Label.pdf
// APVMA Approval No: 89013/123165
// Corteva Agriscience
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['cortevasalibroreklemel'] = {
  name:             "Corteva Salibro Reklemel Nematicide",
  company: "Corteva",

  category:         "Insecticides",
  activeIngredient: "500 g/L Fluazaindolizine",
  group:            "Group N Nematicide",
  modeOfAction:     "Contact nematicide",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#8B7355",
  apvma:            "89013",
  labelPdf:         "Source labels/Corteva_Salibro_Reklemel_Nematicide_Label.pdf",
  sdsPdf:         "SDS Labels/Salibro Reklemel Nematicide SDS.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Insecticide",
    target: ["Root Knot Nematode"],
    timing: ["Pre-plant", "At plant", "Post-plant"]
  },

  crops: [
    {
      crop: "Cucurbits",
      cropList: ["Bitter melon", "Cantaloupe", "Chokos", "Cucumber", "Gherkin", "Gourds", "Marrow", "Melons", "Pumpkins", "Rockmelon", "Squash", "Watermelon", "Zucchini"],
      weeds: [
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "4", rateMax: "4", unit: "L/ha", stage: "At establishment drip/trickle irrigation", note: "Apply 3 days before to 1 day after planting" },
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "4", rateMax: "4", unit: "L/ha", stage: "Soil applied and incorporated", note: "Apply up to 3 days before transplanting" },
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "2", rateMax: "2", unit: "L/ha", stage: "Pre & post plant drip irrigation", note: "2+2 L/ha split application over 2-4 week period" },
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "2", rateMax: "4", unit: "L/ha", stage: "Post-plant drip", note: "Following another nematicide treatment; use low rate if prior treatment effective" }
      ]
    },
    {
      crop: "Fruiting vegetables",
      cropList: ["Bush tomato", "Capsicum", "Pepper", "Cherry tomato", "Chilli", "Eggplant", "Ground cherries", "Okra", "Sunberry", "Tomatillo", "Tomato"],
      weeds: [
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "4", rateMax: "4", unit: "L/ha", stage: "At establishment drip/trickle irrigation", note: "Apply 3 days before to 1 day after planting" },
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "4", rateMax: "4", unit: "L/ha", stage: "Soil applied and incorporated", note: "Apply up to 3 days before transplanting" },
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "2", rateMax: "2", unit: "L/ha", stage: "Pre & post plant drip irrigation", note: "2+2 L/ha split application; apply 14-28 days apart" },
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "2", rateMax: "4", unit: "L/ha", stage: "Post-plant drip", note: "Use low rate where prior treatment effective" }
      ]
    },
    {
      crop: "Root and Tuber vegetables",
      cropList: ["Arrowroot", "Beetroot", "Carrot", "Cassava", "Celeriac", "Galangal", "Ginseng", "Horseradish", "Parsnip", "Potato", "Radish", "Swede", "Taro", "Turnip", "Yams"],
      weeds: [
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "4", rateMax: "4", unit: "L/ha", stage: "Pre-plant incorporated or in-furrow", note: "Apply up to 3 days before planting" }
      ]
    },
    {
      crop: "Sweet Potato",
      cropList: ["Sweet Potato"],
      weeds: [
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "4", rateMax: "4", unit: "L/ha", stage: "At establishment drip/trickle irrigation", note: "Apply 3 days before to 3 days after planting; DO NOT apply later than 21 days after transplanting" },
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "4", rateMax: "4", unit: "L/ha", stage: "Soil applied and incorporated", note: "Apply up to 3 days before transplanting" },
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "2", rateMax: "2", unit: "L/ha", stage: "Pre & post plant drip irrigation", note: "2+2 L/ha split application; 14-21 days apart" },
        { weed: "Root Knot Nematode (Meloidogyne spp.)", pestList: ["Root Knot Nematode"], states: ["All"], rate: "2", rateMax: "4", unit: "L/ha", stage: "Post-plant drip", note: "Apply up to 21 days after transplanting" }
      ]
    }
  ],

  restraints: [
    "DO NOT use in hydroponic systems",
    "DO NOT directly soak or drench bare transplant roots during planting",
    "DO NOT apply if heavy rains or storms forecast within 3 days",
    "DO NOT irrigate to point of runoff for at least 3 days after application",
    "DO NOT apply to sweet potatoes later than 21 days after transplanting",
    "DO NOT apply by vertical sprayer or aircraft",
    "DO NOT apply unless wind speed 3-20 km/hr",
    "DO NOT apply if hazardous surface temperature inversions present"
  ],

  compatibility: "Compatible with most fungicides and insecticides. Perform jar test before tank mixing.",

  mixing: "Fill spray tank 1/4 to 1/2 full with water. Add Salibro directly to tank during filling. Maintain mechanical or hydraulic agitation. Do not allow to sit overnight.",

  withholding: {
    harvest: "Cucurbits, fruiting vegetables: Nil; Root and tuber vegetables: Not required when used as directed",
    grazing: "Not specified for most applications"
  },

  surfactant:     "Surfactant/wetting agent not required",
  sprayerCleanup: "Clean equipment thoroughly before use. Triple or pressure rinse containers for disposal."
};
