// ─────────────────────────────────────────────────────────────────────────────
// Adama Trivor — Label Data
// Liquid Concentrate | Insecticide
// Source: Adama_Trivor_Insecticide_Label.pdf
// APVMA Approval No: 80807/133546
// Adama Australia Pty Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['adamatrivor'] = {
  name:             "Trivor Insecticide",
  company: "Adama",

  category:         "Insecticides",
  activeIngredient: "186 g/L Acetamiprid + 124 g/L Pyriproxyfen",
  group:            "Group 4A/7C Insecticide",
  modeOfAction:     "Neonicotinoid + Insect Growth Regulator (dual mode of action)",
  formulation:      "Liquid Concentrate",
  color:            "#7c3aed",
  apvma:            "80807/133546",
  labelPdf:         "Source labels/Adama_Trivor_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/TRIVOR_INSECTICIDE.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Insecticide",
    target: ["Scale insects", "Mealybugs", "Leafminers", "Fruit flies", "Thrips"],
    timing: ["Post-flowering"]
  },

  crops: [
    {
      crop: "Avocados — Fruit spotting bug, scale and mealybug",
      cropList: ["Avocados"],
      weeds: [
        { weed: "Fruitspotting bug, Oleander scale, Pink wax scale, Mediterranean fruit fly (suppression), Queensland fruit fly (suppression)", pestList: ["Fruitspotting Bug", "Oleander Scale", "Pink Wax Scale", "Mediterranean Fruit Fly", "Queensland Fruit Fly"], states: ["All"], rate: "20", rateMax: "40", unit: "mL/100L", stage: "Post-flowering", note: "Apply up to 2 applications per season. Use minimum 400 mL/ha, maximum 800 mL/ha" }
      ]
    },
    {
      crop: "Citrus — Scale, mealybug, leafminer and thrips",
      cropList: ["Citrus"],
      weeds: [
        { weed: "Black scale, Citricola scale, Cottony cushion scale, Citrus leafminer, Kelly's citrus thrips, Light brown apple moth, Mealybugs, Fruit spotting bug", pestList: ["Black Scale", "Citricola Scale", "Cottony Cushion Scale", "Citrus Leafminer", "Kelly's Citrus Thrips", "Light Brown Apple Moth", "Mealybugs", "Fruit Spotting Bug"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "Post-flowering and growing season", note: "Multiple applications allowed with appropriate intervals. Maximum 1.6 L/ha per season" }
      ]
    },
    {
      crop: "Grapevines (Table and Wine Grapes) — Scale and light brown apple moth",
      cropList: ["Grapevines (Table And Wine Grapes)"],
      weeds: [
        { weed: "Grapevine scale, Long tailed mealybug, Light brown apple moth", pestList: ["Grapevine Scale", "Long Tailed Mealybug", "Light Brown Apple Moth"], states: ["All"], rate: "400", rateMax: "800", unit: "mL/ha", stage: "Pre-flowering and early season", note: "Apply up to 2 applications per season. Maximum 1.6 L/ha total. DO NOT apply after E-L 31 (wine grapes)" }
      ]
    },
    {
      crop: "Macadamias — Fruit spotting bug and scale",
      cropList: ["Macadamias"],
      weeds: [
        { weed: "Fruit spotting bug, Pink wax scale, Soft brown scale, Mealybugs", pestList: ["Fruit Spotting Bug", "Pink Wax Scale", "Soft Brown Scale", "Mealybugs"], states: ["All"], rate: "20", rateMax: "40", unit: "mL/100L", stage: "Post-flowering", note: "Apply up to 3 applications per season for fruit spotting bug, 2 for scale. Minimum 400 mL/ha" }
      ]
    },
    {
      crop: "Mangoes — Fruit spotting bug and scale",
      cropList: ["Mangoes"],
      weeds: [
        { weed: "Fruit spotting bug, Pink wax scale, Mango scale, Mediterranean fruit fly, Queensland fruit fly (suppression)", pestList: ["Fruit Spotting Bug", "Pink Wax Scale", "Mango Scale", "Mediterranean Fruit Fly", "Queensland Fruit Fly"], states: ["All"], rate: "20", rateMax: "40", unit: "mL/100L", stage: "Post-flowering", note: "Apply up to 3 applications per season. Use minimum 400 mL/ha, maximum 800 mL/ha" }
      ]
    },
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      weeds: [
          { weed: "Fruit spotting bug", pestList: ["Fruit Spotting Bug"], states: ["All"], rate: "20-40", unit: "mL/100L", rateText: "20-40ml/100L", notes: "WHP: 28 days. no more then 2 applications per season. apply again 14 days after first treatment" }
      ]
    },
    {
      crop: "Longan",
      cropList: ["Longan"],
      weeds: [
          { weed: "Fruit spotting Bug", pestList: ["Fruit Spotting Bug"], states: ["All"], rate: "20-40", unit: "mL/100L", rateText: "20-40ml/100L", notes: "WHP: 28 days. Do not apply over flowers. No more then 2 applications per season. permit held by only 2 farms" }
      ]
    }
    
  ],

  restraints: [
    "DO NOT apply by aircraft",
    "DO NOT apply if rainfall forecast within 48 hours that may cause runoff",
    "DO NOT apply during flowering in avocados, citrus, macadamias and mangoes",
    "DO NOT apply in Tasmania to citrus or grapes where inter-row consists of bare soil",
    "DO NOT apply more than twice per season in citrus",
    "DO NOT apply more than 1.6 L/ha per season total",
    "DO NOT allow spray contact with bystanders",
    "DO NOT apply when wind speed less than 3 or greater than 20 km/h",
    "DO NOT apply during surface temperature inversion conditions",
    "DO NOT apply by vertical sprayer above target canopy"
  ],

  compatibility: {
    compatible:   ["Alternative mode of action insecticides (alternation required)"],
    incompatible: [],
    notes:        ["Do not apply TRIVOR consecutively - alternate with different mode of action insecticides", "Minimum 7-14 day spray interval when rotating with other products"]
  },

  withholding: {
    harvest: "Avocados, Mangoes: 28 days, Citrus, Macadamias: 14 days, Table grapes, Wine grapes: Not required when used as directed",
    grazing: "DO NOT GRAZE OR CUT TREATED AREA FOR STOCKFOOD"
  },

  surfactant:     "None required - use as directed spray mixture",
  sprayerCleanup: "Empty tank and completely drain system. Rinse tank, pump, lines, hoses, filters and nozzles by circulating clean water. Drain and repeat rinsing procedure twice"
};
