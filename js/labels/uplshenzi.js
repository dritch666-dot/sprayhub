// ─────────────────────────────────────────────────────────────────────────────
// SHENZI INSECTICIDE — Label Data
// Suspension Concentrate | Group 28 Insecticide
// Source: Upl_Shenzi_Insecticide_Label.pdf
// APVMA Approval No: 92656/136242
// UPL Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['uplshenzi'] = {
  name:             "Shenzi Insecticide",
  company: "UPL",

  category:         "Insecticides",
  activeIngredient: "400 g/L Chlorantraniliprole",
  group:            "Group 28 Insecticide",
  modeOfAction:     "Anthranilic diamide insecticide targeting Lepidopteran larvae through ingestion",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#064e3b",
  apvma:            "92656/136242",
  labelPdf:         "Source labels/Upl_Shenzi_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/SHENZI_400SC_INSECTICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Insecticide",
    target: ["Helicoverpa spp.", "Plutella xylostella", "Spodoptera litura"],
    timing: ["Egg hatching", "Early larval stages"]
  },

  crops: [
    {
      crop: "Brassica Vegetables — Cabbage pests control",
      cropList: ["Brassica Vegetables","Cabbage","Broccoli","Cauliflower","Brussels Sprouts"],
      weeds: [
        { weed: "Cabbage-centre grub, Cabbage cluster caterpillar, Diamondback moth, Native budworm", pestList: ["Cabbage-Centre Grub", "Cabbage Cluster Caterpillar", "Diamondback Moth", "Native Budworm"], states: ["All"], rate: "50", rateMax: "50", unit: "mL + 15 gai/100L non-ionic surfactant", stage: "Egg hatching and early larvae", note: "Monitor for pest populations. Target brown eggs and 1st instar larvae before entrenchment. Withholding period: 7 days." }
      ]
    },
    {
      crop: "Brassica Leafy Vegetables — Various caterpillars",
      cropList: ["Brassica Leafy Vegetables"],
      weeds: [
        { weed: "Cabbage leafminer, Cabbage white butterfly, Cluster caterpillar, Cotton bollworm, Diamondback moth, Native budworm, Soybean looper", pestList: ["Cabbage Leafminer", "Cabbage White Butterfly", "Cluster Caterpillar", "Cotton Bollworm", "Diamondback Moth", "Native Budworm", "Soybean Looper"], states: ["All"], rate: "5", rateMax: "5", unit: "mL/100L dilute + 15 gai/100L non-ionic surfactant", stage: "Early larval stages", note: "Withholding period: 3 days. Field and protected cropping systems." }
      ]
    },
    {
      crop: "Leafy Vegetables — Cotton bollworm, Native budworm",
      cropList: ["Leafy Vegetables"],
      weeds: [
        { weed: "Cotton bollworm, Native budworm", pestList: ["Cotton Bollworm", "Native Budworm"], states: ["All"], rate: "50", rateMax: "50", unit: "mL + 15 gai/100L non-ionic surfactant", stage: "Early larvae", note: "Excluding lettuce. Withholding period: 3 days." }
      ]
    },
    {
      crop: "Lettuce — Cotton bollworm, Native budworm",
      cropList: ["Lettuce"],
      weeds: [
        { weed: "Cotton bollworm, Native budworm", pestList: ["Cotton Bollworm", "Native Budworm"], states: ["All"], rate: "75", rateMax: "75", unit: "mL + 15 gai/100L non-ionic surfactant", stage: "Early larvae", note: "Leaf and closed head varieties. Withholding period: 3 days." }
      ]
    },
    {
      crop: "Fruiting Vegetables (excluding Cucurbits) — Cotton bollworm control",
      cropList: ["Fruiting Vegetables (Excluding Cucurbits)"],
      weeds: [
        { weed: "Cotton bollworm, Native budworm, Tomato leaf miner, Eggfruit caterpillar", pestList: ["Cotton Bollworm", "Native Budworm", "Tomato Leaf Miner", "Eggfruit Caterpillar"], states: ["All"], rate: "50", rateMax: "50", unit: "mL + 15 gai/100L non-ionic surfactant", stage: "Egg laying/hatching", note: "Capsicum, Eggplant, Peppers, Tomato. Withholding period: 3 days. Ensure spray timing coincides with egg laying/hatching." }
      ]
    },
    {
      crop: "Fruiting Vegetables (Cucurbits) — Cotton bollworm control",
      cropList: ["Fruiting Vegetables (Cucurbits)"],
      weeds: [
        { weed: "Cotton bollworm, Native budworm, Cucumber moth", pestList: ["Cotton Bollworm", "Native Budworm", "Cucumber Moth"], states: ["All"], rate: "50", rateMax: "50", unit: "mL + 15 gai/100L non-ionic surfactant", stage: "Egg hatching to early larvae", note: "Cucumbers, Melons, Pumpkin, Squash, Zucchini. Withholding period: 1 day. Minimum 5-day spray interval." }
      ]
    },
    {
      crop: "Legume Vegetables — Cotton bollworm, Native budworm",
      cropList: ["Legume Vegetables"],
      weeds: [
        { weed: "Cotton bollworm, Native budworm", pestList: ["Cotton Bollworm", "Native Budworm"], states: ["All"], rate: "50", rateMax: "50", unit: "mL + 15 gai/100L non-ionic surfactant", stage: "Early larvae", note: "Green beans, Green peas, Processing peas, Snow peas, Sugar snap peas. Withholding period: 1 day." }
      ]
    },
    {
      crop: "Potatoes — Cotton bollworm, Native budworm, Potato moth control",
      cropList: ["Potatoes"],
      weeds: [
        { weed: "Cotton bollworm, Native budworm, Potato moth", pestList: ["Cotton Bollworm", "Native Budworm", "Potato Moth"], states: ["All"], rate: "50", rateMax: "50", unit: "mL + 15 gai/100L non-ionic surfactant", stage: "Foliar infestation", note: "Target foliar infestations only. Soil/stem infestations not controlled. Withholding period: Not required. Spray interval: 10-14 days." }
      ]
    },
    {
      crop: "Strawberries — Cluster caterpillar, Cotton bollworm control",
      cropList: ["Strawberries"],
      weeds: [
        { weed: "Cluster caterpillar, Cotton bollworm, Native budworm", pestList: ["Cluster Caterpillar", "Cotton Bollworm", "Native Budworm"], states: ["All"], rate: "50", rateMax: "50", unit: "mL + 15 gai/100L non-ionic surfactant", stage: "Early larvae", note: "Field and protected cropping. Withholding period: 1 day." }
      ]
    },
    {
      crop: "Sweet Corn — Cotton bollworm control",
      cropList: ["Sweet Corn"],
      weeds: [
        { weed: "Cotton bollworm", pestList: ["Cotton Bollworm"], states: ["All"], rate: "50", rateMax: "50", unit: "mL + 15 gai/100L non-ionic surfactant", stage: "Egg laying/hatching", note: "Ensure spray timing coincides with egg laying/hatching. Withholding period: 7 days." }
      ]
    },
    {
      crop: "Cotton — Cotton bollworm, Native budworm, Cluster caterpillar",
      cropList: ["Cotton"],
      weeds: [
        { weed: "Cotton bollworm, Native budworm, Cluster caterpillar, Northern rough bollworm, Rough bollworm", pestList: ["Cotton Bollworm", "Native Budworm", "Cluster Caterpillar", "Northern Rough Bollworm", "Rough Bollworm"], states: ["All"], rate: "80", rateMax: "130", unit: "mL + 125 gai/100L non-ionic surfactant", stage: "Brown eggs to small larvae (1st-2nd instar)", note: "Use low rate on threshold pressure (2 larvae/metre row), high rate on high pressure. Withholding period: 28 days. Maximum 3 applications per season." }
      ]
    },
    {
      crop: "Pulse Crops — Cotton bollworm, Native budworm, Bean podborer",
      cropList: ["Pulse Crops"],
      weeds: [
        { weed: "Cotton bollworm, Native budworm, Bean podborer, Soybean looper, Bean looper", pestList: ["Cotton Bollworm", "Native Budworm", "Bean Podborer", "Soybean Looper", "Bean Looper"], states: ["All"], rate: "60", rateMax: "60", unit: "mL + 125 gai/100L non-ionic surfactant", stage: "Early larvae", note: "Chickpea, Mung bean, Soybean: max 2 applications/season. Other pulses: max 1 application/season. Withholding period: 14-28 days." }
      ]
    },
    {
      crop: "Almonds — Carob moth control",
      cropList: ["Almonds"],
      weeds: [
        { weed: "Carob moth (Ectomyelois ceratoniae)", pestList: ["Carob Moth"], states: ["All"], rate: "16", rateMax: "16", unit: "mL/100L + 15 gai/100L non-ionic surfactant", stage: "Moth flight/mummy targeting", note: "Dilute or concentrate spraying. Maximum 2 applications per season. Minimum 7-day retreat interval. Withholding period: 14 days." }
      ]
    },
    {
      crop: "Pome Fruit — Codling moth, Oriental fruit moth control",
      cropList: ["Pome Fruit"],
      weeds: [
        { weed: "Codling moth, Oriental fruit moth, Budworms, Lightbrown apple moth", pestList: ["Codling Moth", "Oriental Fruit Moth", "Budworms", "Lightbrown Apple Moth"], states: ["All"], rate: "8", rateMax: "8", unit: "mL/100L + 15 gai/100L non-ionic surfactant", stage: "Petal fall onwards", note: "Maximum 3 applications per season at 14-21 day intervals from petal fall. Withholding period: 14 days." }
      ]
    },
    {
      crop: "Stone Fruit — Oriental fruit moth control",
      cropList: ["Stone Fruit"],
      weeds: [
        { weed: "Oriental fruit moth", pestList: ["Oriental Fruit Moth"], states: ["All"], rate: "11", rateMax: "11", unit: "mL/100L + 15 gai/100L non-ionic surfactant", stage: "Before 110 Degree Days from trap detection", note: "Apricots, Cherries, Nectarines, Peaches, Plums. Maximum 2 applications per season, minimum 14 days between. Withholding period: Not specified." }
      ]
    },
    {
      crop: "Grapes — Lightbrown apple moth, Grapevine moth",
      cropList: ["Grapes"],
      weeds: [
        { weed: "Lightbrown apple moth, Grapevine moth", pestList: ["Lightbrown Apple Moth", "Grapevine Moth"], states: ["All"], rate: "8", rateMax: "8", unit: "mL/100L + 15 gai/100L non-ionic surfactant", stage: "140 Degree Days after detected moth flight", note: "Maximum 2 applications per season. Withholding period: 8 weeks. Do not re-treat within 14 days." }
      ]
    },
    {
      crop: "Tomato",
      cropList: ["Tomato"],
      weeds: [
          { weed: "Cotton bollworm, Native budworm and Eggfruit caterpillar", pestList: ["Cotton Bollworm", "Native Budworm and Eggfruit Caterpillar"], states: ["All"], rate: "50", unit: "mL/ha", rateText: "50ml/ha", notes: "WHP: 3 days. Ensure spray timing coincides with egg laying/ hatching. The pest hatches from the egg and burrows directly into fruit. Larvae entrenched in the fruit at the time of spraying will not be controlled. add a non ionic" }
      ]
    }
    
  ],

  restraints: [
    "DO NOT make more than 3 applications per cotton crop per season, maximum 2 consecutive sprays per field",
    "DO NOT make more than 1 application per pulse crop per season (except chickpea, soybean, mung bean: max 2)",
    "DO NOT apply if heavy rains or storms forecast within 3 days",
    "DO NOT irrigate to field runoff for at least 3 days after application",
    "DO NOT apply by aircraft on almonds, pome fruit, stone fruit and grapes"
  ],

  compatibility: {
    compatible:   ["Most tank mix partners when pre-tested"],
    incompatible: ["BS1000", "Activator (causes crop phytotoxicity)"],
    notes:        ["Do not add non-ionic surfactant if mixing with products already containing surfactant or liquid fertiliser. Pre-mix test recommended. Physical compatibility does not guarantee biological compatibility."]
  },

  withholding: {
    harvest: "Potatoes: Not required. Vegetables: 1-7 days. Brassica: 7 days. Corn: 7 days. Almonds/Pome/Stone fruit/Grapes: 14 days. Cotton: 28 days. Pulses: 14-28 days.",
    grazing: "Legume vegetables: 1 day. Sweet corn: 7 days. Cotton stubble: Do not graze. Pulse crops: 14 days. Almonds/Pome/Stone fruit/Grapes: Do not graze."
  },

  surfactant:     "Non-ionic surfactant required: 15 gai/100L (use high quality non-ionic wetter)",
  sprayerCleanup: "Immediately after application, thoroughly clean all spray equipment with water to avoid hardened deposits. Drain equipment, rinse hoses, boom and nozzles thoroughly."
};
