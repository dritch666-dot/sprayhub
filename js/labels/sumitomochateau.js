// ─────────────────────────────────────────────────────────────────────────────
// CHATEAU HERBICIDE — Label Data
// Herbicide | Water Dispersible Granule
// Source: Sumitomo_Chemical_Chateau_Herbicide_Label.pdf
// APVMA Approval No: 80647/119442
// Sumitomo Chemical Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['sumitomochateau'] = {
  name:             "Chateau Herbicide",
  company: "Sumitomo",

  category:         "Herbicides",
  activeIngredient: "500 g/kg Flumioxazin",
  group:            "Group G Herbicide",
  modeOfAction:     "Inhibits protoporphyrinogen oxidase (PPO); residual control of grass and broadleaved weeds in orchards and vineyards",
  formulation:      "Water Dispersible Granule (WDG) in water-soluble bags",
  color:            "#6b3500",
  apvma:            "80647",
  labelPdf:         "Source labels/Sumitomo_Chemical_Chateau_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/CHATEAU.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Herbicide",
    target: ["Grass weeds", "Broadleaf weeds"],
    timing: ["Post-harvest", "Dormant season"]
  },

  crops: [
    {
      crop: "Wine and Table Grapes",
      cropList: ["Wine And Table Grapes"],
      weeds: [
        { weed: "Annual ryegrass, barnyard grass, blackberry nightshade, capeweed, crowsfoot, fleabane and others", pestList: ["Annual Ryegrass", "Barnyard Grass", "Blackberry Nightshade", "Capeweed", "Crowsfoot", "Fleabane and Others"], states: ["All"], rate: "560", rateMax: "700", unit: "g/ha", stage: "Dormant", note: "Apply to bare soil during main rainfall period; apply after final harvest to bud break" }
      ]
    },
    {
      crop: "Pome Fruit (apples, pears)",
      cropList: ["Pome Fruit","Apples","Pears"],
      weeds: [
        { weed: "Refer weed table", pestList: ["Refer Weed Table"], states: ["All"], rate: "560", rateMax: "700", unit: "g/ha", stage: "Dormant period", note: "DO NOT apply between bud break/green tip and final harvest; apply only to dormant trees" }
      ]
    },
    {
      crop: "Stone Fruit",
      cropList: ["Stone Fruit"],
      weeds: [
        { weed: "Refer weed table", pestList: ["Refer Weed Table"], states: ["All"], rate: "560", rateMax: "700", unit: "g/ha", stage: "Dormant", note: "DO NOT apply between bud break and final harvest" }
      ]
    },
    {
      crop: "Citrus Fruit",
      cropList: ["Citrus Fruit"],
      weeds: [
        { weed: "Refer weed table", pestList: ["Refer Weed Table"], states: ["All"], rate: "560", rateMax: "700", unit: "g/ha", stage: "Growing season", note: "DO NOT apply between flowering and final harvest unless using shielded equipment" }
      ]
    },
    {
      crop: "Tree Nuts",
      cropList: ["Tree Nuts"],
      weeds: [
        { weed: "Refer weed table", pestList: ["Refer Weed Table"], states: ["All"], rate: "560", rateMax: "700", unit: "g/ha", stage: "Dormant", note: "Trees must have low branches removed to prevent spray contact" }
      ]
    },
    {
      crop: "Olives, Avocados, Berries",
      cropList: ["Olives","Avocados","Berries"],
      weeds: [
        { weed: "Various grasses and broadleaf weeds", pestList: ["Various Grasses and Broadleaf Weeds"], states: ["All"], rate: "560", rateMax: "700", unit: "g/ha", stage: "Post-harvest to bud break", note: "Best application timing after final harvest through bud break" }
      ]
    },
    {
      crop: "Irrigation Channel Banks and Drainage Ditches",
      cropList: ["Irrigation Channel Banks And Drainage Ditches"],
      weeds: [
        { weed: "Amaranthus, barnyard grass, various broadleaf weeds", pestList: ["Amaranthus", "Barnyard Grass", "Various Broadleaf Weeds"], states: ["All"], rate: "560", rateMax: "700", unit: "g/ha", stage: "Pre-rainfall", note: "Apply during main rainfall when 15 mm rain expected within 3 weeks" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by air or misting machines",
    "DO NOT disturb treated soil surface after application",
    "DO NOT treat weeds under poor growing or dormant conditions",
    "DO NOT apply in high pH water (>7)",
    "DO NOT allow spray mix to stand overnight",
    "DO NOT irrigate to point of runoff for 3 days after application",
    "Spray droplets must be COARSE or larger size category",
    "DO NOT apply when wind speed less than 3 or more than 20 km/h"
  ],

  compatibility: {
    compatible:   ["Glyphosate 450", "Roundup Max", "Spray Seed 250", "Gramoxone", "Hasten", "Kwickin", "Banjo", "Uptake"],
    incompatible: [],
    notes:        ["Compatible with knockdown herbicides for enhanced control"]
  },

  withholding: {
    harvest: "14 weeks (9 weeks macadamia nuts)",
    grazing: "4 weeks grazing/cutting treated weeds; 8 weeks irrigation channel banks"
  },

  surfactant:     "Knockdown herbicide should be used with Chateau for improved coverage and control",
  sprayerCleanup: "After application: drain tank, rinse including inside/outside; flush all hoses, booms, screens, nozzles; add 1 L 3% household ammonia per 100 L water, circulate 5 minutes, flush 15 minutes minimum; drain and rinse with clean water 2 minutes"
};
