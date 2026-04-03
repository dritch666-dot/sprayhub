// ─────────────────────────────────────────────────────────────────────────────
// MAINMAN 500 WG INSECTICIDE — Label Data
// Insecticide | Wettable Granule
// Source: AgNova_Mainman_500_WG_Insecticide.pdf
// APVMA Approval No: 66373/140307
// AgNova Technologies
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['uplmainman500wg'] = {
  name:             "AgNova Mainman 500 WG Insecticide",
  company: "UPL",

  category:         "Insecticides",
  activeIngredient: "500 g/kg Flonicamid",
  group:            "Group 29 Insecticide",
  modeOfAction:     "Selective feeding blocker - affects insect nervousness",
  formulation:      "Wettable Granule (WG)",
  color:            "#3f6212",
  apvma:            "66373",
  labelPdf:         "Source labels/UPL_Mainman_500_Wg_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/MAINMAN_500_WG_INSECTICIDE.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Insecticide",
    target: ["Aphids", "Mealybug", "Mirids", "Whitefly"],
    timing: ["Early signs of infestation"]
  },

  crops: [
    {
      crop: "Apples",
      cropList: ["Apples"],
      weeds: [
        { weed: "Woolly Apple Aphid", pestList: ["Woolly Apple Aphid"], states: ["All"], rate: "10", rateMax: "14", unit: "g/100L", stage: "First signs", note: "Dilute spray; 2 week re-treatment interval; max 3 applications" },
        { weed: "Tuber Mealybug and Longtailed Mealybug", pestList: ["Tuber Mealybug and Longtailed Mealybug"], states: ["All"], rate: "14", rateMax: "20", unit: "g/100L", stage: "Early infestation", note: "Dilute spray" }
      ]
    },
    {
      crop: "Pears",
      cropList: ["Pears"],
      weeds: [
        { weed: "Longtailed Mealybug", pestList: ["Longtailed Mealybug"], states: ["All"], rate: "14", rateMax: "20", unit: "g/100L", stage: "Early infestation", note: "Dilute spray" }
      ]
    },
    {
      crop: "Canola",
      cropList: ["Canola"],
      weeds: [
        { weed: "Aphids", pestList: ["Aphids"], states: ["All"], rate: "100", rateMax: "100", unit: "g/ha", stage: "Early development", note: "Plus wetting agent; max 2 applications per season; do not apply after BBCH 69" }
      ]
    },
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        { weed: "Cotton Aphid and Green Mirid", pestList: ["Cotton Aphid and Green Mirid"], states: ["All"], rate: "100", rateMax: "140", unit: "g/ha", stage: "Early development", note: "Blanket or banded spray; max 2 applications per season" }
      ]
    },
    {
      crop: "Cucurbits",
      cropList: ["Cucurbits"],
      weeds: [
        { weed: "Green Peach Aphid and Melon Aphid", pestList: ["Green Peach Aphid and Melon Aphid"], states: ["All"], rate: "100", rateMax: "140", unit: "g/ha", stage: "First sign", note: "2 week re-treatment interval; max 3 applications" },
        { weed: "Silverleaf Whitefly", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "200", rateMax: "200", unit: "g/ha", stage: "Early population", note: "Plus Hasten at 2 mL/100L" }
      ]
    },
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        { weed: "Aphids", pestList: ["Aphids"], states: ["All"], rate: "140", rateMax: "200", unit: "g/ha", stage: "First sign", note: "2 week re-treatment interval; max 2 applications" }
      ]
    },
    {
      crop: "Strawberries",
      cropList: ["Strawberries"],
      weeds: [
        { weed: "Aphids, Whiteflies and Green Mirid", pestList: ["Aphids", "Whiteflies and Green Mirid"], states: ["All"], rate: "200", rateMax: "200", unit: "g/ha", stage: "First sign", note: "Max 3 applications per crop; 7 day re-treatment interval" }
      ]
    },
    {
      crop: "Tomatoes (protected)",
      cropList: ["Tomatoes"],
      weeds: [
        { weed: "Greenhouse Whitefly and Silverleaf Whitefly", pestList: ["Greenhouse Whitefly and Silverleaf Whitefly"], states: ["All"], rate: "200", rateMax: "200", unit: "g/ha", stage: "Before high population", note: "20 g/100L dilute spray; max 3 applications per year; 7 day interval" }
      ]
    }
  ],

  restraints: [
    "DO NOT enter treated areas until spray has dried",
    "DO NOT spray plants in flower where bees are foraging",
    "DO NOT contaminate streams, rivers or watercourses",
    "DO NOT apply under weather causing drift to nearby crops/pastures"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Contact AgNova Technologies for product compatibility information"]
  },

  withholding: {
    harvest: "Apples/Pears: 21 days; Potatoes: 14 days; Cotton: 7 days; Cucurbits/Strawberries/Tomatoes: 1 day",
    grazing: "Canola: 21 days; Apples/Cucurbits/Pears/Potatoes: No livestock grazing; Cotton: No cotton fodder to livestock"
  },

  surfactant:     "Agral at 10 mL/100L or Spreadwet 600 at 250 mL/100L for canola",
  sprayerCleanup: "Triple-rinse containers before disposal. Do not dispose of undiluted chemicals on-site."
};
