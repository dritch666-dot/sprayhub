// ─────────────────────────────────────────────────────────────────────────────
// EFFICON INSECTICIDE — Label Data
// Soluble Concentrate (SL) | Group UN Insecticide
// Source: Basf_Efficon_Insecticide_Label.txt
// APVMA Approval No: 90474/129072
// BASF Australia Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['basfefficon'] = {
  name:             "EFFICON Insecticide",
  company: "BASF",

  category:         "Insecticides",
  activeIngredient: "120 g/L Dimpropyridaz",
  group:            "Group UN Insecticide",
  modeOfAction:     "Pyridazine insecticide disrupting insect behaviour, coordination and feeding",
  formulation:      "Soluble Concentrate (SL)",
  color:            "#c2410c",
  apvma:            "90474/129072",
  labelPdf:         "Source labels/Basf_Efficon_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/Efficon_Insecticide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Insecticide",
    target: ["Whiteflies", "Aphids"],
    timing: ["Slow knockdown", "21 day residual"]
  },

  crops: [
    {
      crop: "Cucurbits — Whitefly and aphid control",
      cropList: ["Cucurbits"],
      weeds: [
        { weed: "Silver Leaf White Fly (Bemisia tabaci)", pestList: ["Silver Leaf White Fly"], states: ["All"], rate: "1", rateMax: "1", unit: "L/ha", stage: "Monitor and commence at threshold", note: "Maximum 2 sprays before rotating, residual out to 21 days" },
        { weed: "Greenhouse Whitefly (Trialeurodes spp.)", pestList: ["Greenhouse Whitefly"], states: ["All"], rate: "1", rateMax: "1", unit: "L/ha", stage: "Monitor and commence at threshold", note: "Do not apply more than 4 applications per crop" },
        { weed: "Cotton/melon aphid (Aphis gossypii)", pestList: ["Cotton/Melon Aphid"], states: ["All"], rate: "0.5", rateMax: "0.5", unit: "L/ha", stage: "Monitor and commence at threshold", note: "Continue to monitor crops after 14 days" }
      ]
    },
    {
      crop: "Fruiting Vegetables (capsicum, chilli, eggplant, okra, tomato) — Whitefly control",
      cropList: ["Fruiting Vegetables","Capsicum","Chilli","Eggplant","Okra","Tomato"],
      weeds: [
        { weed: "Silver Leaf White Fly (Bemisia tabaci)", pestList: ["Silver Leaf White Fly"], states: ["All"], rate: "1", rateMax: "1", unit: "L/ha", stage: "Monitor and commence at threshold", note: "Eggplant only for protected cropping, do not apply more than 4 per crop" },
        { weed: "Greenhouse Whitefly (Trialeurodes spp.)", pestList: ["Greenhouse Whitefly"], states: ["All"], rate: "1", rateMax: "1", unit: "L/ha", stage: "Monitor and commence at threshold", note: "Maximum 4 applications per crop" }
      ]
    },
    {
      crop: "Brassica Vegetables (broccoli, broccolini, Brussels sprouts, cabbage, cauliflower, kohlrabi) — Aphid control",
      cropList: ["Brassica Vegetables","Broccoli","Broccolini","Brussels Sprouts","Cabbage","Cauliflower","Kohlrabi"],
      weeds: [
        { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "0.5", rateMax: "0.5", unit: "L/ha", stage: "Monitor and commence at threshold", note: "Residual control out to 21 days" },
        { weed: "Cabbage aphid (Brevicoryne brassicae)", pestList: ["Cabbage Aphid"], states: ["All"], rate: "0.5", rateMax: "0.5", unit: "L/ha", stage: "Monitor and commence at threshold", note: "Reapply after 14 days if necessary" }
      ]
    },
    {
      crop: "Leafy Vegetables and Brassica Leafy Vegetables (chard, cress, spinach, lettuce, bok choy, Chinese cabbage, choy sum, gai lan, kale, mustard, pak choy, rocquette) — Aphid control",
      cropList: ["Leafy Vegetables And Brassica Leafy Vegetables","Chard","Cress","Spinach","Lettuce","Bok Choy","Chinese Cabbage","Choy Sum","Gai Lan","Kale","Mustard","Pak Choy","Rocquette"],
      weeds: [
        { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "0.5", rateMax: "0.5", unit: "L/ha", stage: "Monitor and commence at threshold", note: "Residual control out to 21 days" },
        { weed: "Cabbage aphid (Brevicoryne brassicae)", pestList: ["Cabbage Aphid"], states: ["All"], rate: "0.5", rateMax: "0.5", unit: "L/ha", stage: "Monitor and commence at threshold", note: "Do not apply more than 4 per crop" }
      ]
    },
    {
      crop: "Cotton — Whitefly and aphid control",
      cropList: ["Cotton"],
      weeds: [
        { weed: "Silver Leaf White Fly (Bemisia tabaci)", pestList: ["Silver Leaf White Fly"], states: ["All"], rate: "1", rateMax: "1", unit: "L/ha", stage: "Monitor and commence at threshold", note: "28 day withholding period" },
        { weed: "Greenhouse Whitefly (Trialeurodes spp.)", pestList: ["Greenhouse Whitefly"], states: ["All"], rate: "1", rateMax: "1", unit: "L/ha", stage: "Monitor and commence at threshold", note: "Do not feed cotton fodder to livestock within 28 days" },
        { weed: "Cotton/melon aphid (Aphis gossypii)", pestList: ["Cotton/Melon Aphid"], states: ["All"], rate: "0.5", rateMax: "0.5", unit: "L/ha", stage: "Monitor and commence at threshold", note: "Monitor for secondary flare-up after 14 days" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by aircraft",
    "DO NOT feed cotton fodder, stubble or trash to livestock"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Efficon is a soluble concentrate formulation", "Follow specific mix order when tank mixing with other products"]
  },

  withholding: {
    harvest: "Vegetables: 1 day; Cotton: 28 days",
    grazing: "Do not feed cotton fodder, stubble or trash to livestock"
  },

  surfactant:     "Apply in minimum 200L water/ha for thorough crop coverage",
  sprayerCleanup: "Use MEDIUM or larger droplet size category with boom sprayers. Adjust water volumes according to crop growth stage"
};
