// ─────────────────────────────────────────────────────────────────────────────
// TYRANEX 500 VeripHy SL INSECTICIDE — Label Data
// Insecticide | Suspension Liquid
// Source: Imtrade_Tyranex_500_Insecticide_Label.pdf
// APVMA Approval No: 87790/135000v
// Imtrade Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['imtradetyranex500'] = {
  name:             "Imtrade Tyranex 500 VeripHy SL Insecticide",

  category:         "Insecticides",
  activeIngredient: "500 g/L Trichlorfon",
  group:            "Group 1B Insecticide",
  modeOfAction:     "Anticholinesterase compound",
  formulation:      "Suspension Liquid (SL)",
  color:            "#2c3e50",
  company: "Imtrade",
  apvma:            "87790",
  labelPdf:         "Source labels/Imtrade_Tyranex_500_Insecticide_Label.pdf",
  sdsPdf:         "SDS Labels/Imt-TYRANEX®-500-VeripHy®-SL-Insecticide-Issue-Date-Apr-2022.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Insecticide",
    target: ["Armyworms", "Cutworm", "Webworm", "Fruit Fly", "Fruit Spotting Bug"],
    timing: ["As per pest monitoring"]
  },

  crops: [
    {
      crop: "Canola",
      cropList: ["Canola"],
      weeds: [
        { weed: "Common Armyworm", pestList: ["Common Armyworm"], states: ["NSW", "Vic", "WA"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "Re-spray may be necessary depending on pest population" },
        { weed: "Southern Armyworm (Barley Grub)", pestList: ["Southern Armyworm", "Barley Grub"], states: ["NSW", "Vic", "WA"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "Re-spray may be necessary depending on pest population" }
      ]
    },
    {
      crop: "Cereal Crops",
      cropList: ["Cereal Crops", "Barley", "Wheat"],
      weeds: [
        { weed: "Armyworms", pestList: ["Armyworms"], states: ["All"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "Includes Common Armyworm, Southern Armyworm (Barley Grub)" },
        { weed: "Cutworm", pestList: ["Cutworm"], states: ["QLD", "NT"], rate: "1", rateMax: "1", unit: "L/ha", stage: "When pests active", note: "Spray late afternoon or night. Re-spray may be necessary" },
        { weed: "Cutworm, Native Budworm", pestList: ["Cutworm", "Native Budworm"], states: ["WA", "NT"], rate: "1.7", rateMax: "1.7", unit: "L/ha", stage: "When pests active", note: "" }
      ]
    },
    {
      crop: "Grass Seed Crops",
      cropList: ["Grass Seed Crops"],
      weeds: [
        { weed: "Armyworms", pestList: ["Armyworms"], states: ["All"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "Includes Common Armyworm, Southern Armyworm (Barley Grub)" }
      ]
    },
    {
      crop: "Legumes",
      cropList: ["Legumes", "Linseed", "Lupins"],
      weeds: [
        { weed: "Common Armyworm", pestList: ["Common Armyworm"], states: ["NSW", "Vic", "WA"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "Southern Armyworm (Barley Grub)" },
        { weed: "Southern Armyworm (Barley Grub)", pestList: ["Southern Armyworm", "Barley Grub"], states: ["NSW", "Vic", "WA"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "" }
      ]
    },
    {
      crop: "Lucerne",
      cropList: ["Lucerne"],
      weeds: [
        { weed: "Native Budworm", pestList: ["Native Budworm"], states: ["SA"], rate: "0.9", rateMax: "0.9", unit: "L/ha", stage: "When pests active", note: "Spray late afternoon or night. Re-spray may be necessary" },
        { weed: "Native Budworm", pestList: ["Native Budworm"], states: ["QLD"], rate: "1", rateMax: "1", unit: "L/ha", stage: "When pests active", note: "Spray late afternoon or night" }
      ]
    },
    {
      crop: "Maize",
      cropList: ["Maize", "Corn"],
      weeds: [
        { weed: "Armyworms", pestList: ["Armyworms"], states: ["QLD", "NT"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "Spray when pests are active. Re-spray may be necessary" },
        { weed: "Cutworm", pestList: ["Cutworm"], states: ["QLD", "NT", "Vic"], rate: "1", rateMax: "1", unit: "L/ha", stage: "When pests active", note: "Spray late afternoon or night. Re-spray may be necessary" }
      ]
    },
    {
      crop: "Pastures",
      cropList: ["Pastures", "Forage"],
      weeds: [
        { weed: "Armyworms", pestList: ["Armyworms"], states: ["All"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "Spray when pests are active. Re-spray may be necessary" },
        { weed: "Cutworm", pestList: ["Cutworm"], states: ["QLD", "NT"], rate: "1", rateMax: "1", unit: "L/ha", stage: "When pests active", note: "Spray late afternoon or night" },
        { weed: "Webworm, Sod Webworm", pestList: ["Webworm", "Sod Webworm"], states: ["QLD", "NT"], rate: "1.3", rateMax: "1.3", unit: "L/ha", stage: "When pests active", note: "Spray when pests are active. Re-spray may be necessary" }
      ]
    },
    {
      crop: "Rice",
      cropList: ["Rice"],
      weeds: [
        { weed: "Bloodworm", pestList: ["Bloodworm"], states: ["NSW"], rate: "0.6", rateMax: "0.85", unit: "L/ha", stage: "At sowing", note: "For application details see General Instructions" },
        { weed: "Leaf Miner", pestList: ["Leaf Miner"], states: ["All"], rate: "0.85", rateMax: "0.85", unit: "L/ha", stage: "At first sign of larvae", note: "Apply at first sign of larvae activity" }
      ]
    },
    {
      crop: "Safflower",
      cropList: ["Safflower"],
      weeds: [
        { weed: "Cutworm", pestList: ["Cutworm"], states: ["QLD", "NT"], rate: "1", rateMax: "1", unit: "L/ha", stage: "When pests active", note: "Spray late afternoon or night. Re-spray may be necessary" },
        { weed: "Rutherglen Bug, Grey Cluster Bug", pestList: ["Rutherglen Bug", "Grey Cluster Bug"], states: ["All"], rate: "1.1", rateMax: "1.1", unit: "L/ha", stage: "When pests first seen", note: "Apply when pests are first seen and repeat if necessary" }
      ]
    },
    {
      crop: "Small Grains",
      cropList: ["Small Grains"],
      weeds: [
        { weed: "Armyworms", pestList: ["Armyworms"], states: ["QLD", "NT"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "Spray when pests are active. Re-spray may be necessary" }
      ]
    },
    {
      crop: "Sorghum",
      cropList: ["Sorghum"],
      weeds: [
        { weed: "Cutworm", pestList: ["Cutworm"], states: ["All"], rate: "1.1", rateMax: "1.1", unit: "L/ha", stage: "When pests first seen", note: "Apply when pests are first seen and repeat if necessary. Spray late afternoon or night" },
        { weed: "Sorghum Head Caterpillar", pestList: ["Sorghum Head Caterpillar"], states: ["All"], rate: "1.1", rateMax: "1.1", unit: "L/ha", stage: "When pests first seen", note: "" }
      ]
    },
    {
      crop: "Soybeans",
      cropList: ["Soybeans"],
      weeds: [
        { weed: "Green Vegetable Bug", pestList: ["Green Vegetable Bug"], states: ["QLD", "NSW"], rate: "1.25", rateMax: "1.25", unit: "L/ha", stage: "When pests first seen", note: "Apply when pests are first seen and repeat if necessary. Spray late afternoon or night" }
      ]
    },
    {
      crop: "Sugarcane",
      cropList: ["Sugarcane"],
      weeds: [
        { weed: "Armyworms", pestList: ["Armyworms"], states: ["All"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "Spray when pests are active. Re-spray may be necessary" }
      ]
    },
    {
      crop: "Sunflowers",
      cropList: ["Sunflowers"],
      weeds: [
        { weed: "Common Armyworm", pestList: ["Common Armyworm"], states: ["NSW", "Vic", "WA"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "" },
        { weed: "Southern Armyworm (Barley Grub)", pestList: ["Southern Armyworm", "Barley Grub"], states: ["NSW", "Vic", "WA"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "When pests active", note: "" },
        { weed: "Cutworm", pestList: ["Cutworm"], states: ["QLD", "NT"], rate: "1", rateMax: "1", unit: "L/ha", stage: "When pests active", note: "Spray late afternoon or night. Re-spray may be necessary" },
        { weed: "Rutherglen Bug", pestList: ["Rutherglen Bug"], states: ["QLD", "NSW", "SA"], rate: "1.1", rateMax: "1.1", unit: "L/ha", stage: "When pests first seen", note: "Apply when pests are first seen and repeat if necessary. Spray late afternoon or night" }
      ]
    },
    {
      crop: "Fruit - Avocados",
      cropList: ["Avocados"],
      weeds: [
        { weed: "Fruit Spotting Bug", pestList: ["Fruit Spotting Bug"], states: ["QLD", "NSW", "NT"], rate: "200", rateMax: "200", unit: "mL/100L", stage: "When pests first seen", note: "Apply when pests are first seen and repeat if necessary" },
        { weed: "Monolepta Beetle", pestList: ["Monolepta Beetle"], states: ["QLD", "NSW", "NT"], rate: "200", rateMax: "200", unit: "mL/100L", stage: "When pests first seen", note: "" }
      ]
    },
    {
      crop: "Grapevines",
      cropList: ["Grapevines", "Grapes"],
      weeds: [
        { weed: "Grapevine Moth", pestList: ["Grapevine Moth"], states: ["QLD", "SA", "WA", "NT"], rate: "250", rateMax: "250", unit: "mL/100L", stage: "When pests first seen", note: "Spray when pests are first seen and repeat if necessary" }
      ]
    },
    {
      crop: "Macadamia",
      cropList: ["Macadamia Nuts"],
      weeds: [
        { weed: "Fruit Spotting Bug", pestList: ["Fruit Spotting Bug"], states: ["QLD", "NSW", "NT"], rate: "100", rateMax: "100", unit: "mL/100L", stage: "When premature nut fall evident", note: "A second application 2 weeks later may be necessary" },
        { weed: "Banana Spotting Bug", pestList: ["Banana Spotting Bug"], states: ["QLD", "NT"], rate: "100", rateMax: "100", unit: "mL/100L", stage: "When damaging levels occur", note: "" }
      ]
    },
    {
      crop: "Pawpaw",
      cropList: ["Pawpaw", "Papaya"],
      weeds: [
        { weed: "Fruit Spotting Bug", pestList: ["Fruit Spotting Bug"], states: ["QLD", "NT"], rate: "100", rateMax: "100", unit: "mL/100L", stage: "When fruit spotting noticed", note: "Second application 2 weeks later may be necessary" },
        { weed: "Banana Spotting Bug", pestList: ["Banana Spotting Bug"], states: ["QLD", "NT"], rate: "100", rateMax: "100", unit: "mL/100L", stage: "When fruit spotting noticed", note: "" }
      ]
    },
    {
      crop: "Passionfruit",
      cropList: ["Passionfruit"],
      weeds: [
        { weed: "Passion Vine Bug", pestList: ["Passion Vine Bug"], states: ["QLD", "NT"], rate: "100", rateMax: "100", unit: "mL/100L", stage: "When pests first seen", note: "Apply when pests are first seen and repeat if necessary" },
        { weed: "Green Vegetable Bug", pestList: ["Green Vegetable Bug"], states: ["QLD", "NT"], rate: "100", rateMax: "100", unit: "mL/100L", stage: "When pests first seen", note: "" }
      ]
    },
    {
      crop: "Pome Fruit",
      cropList: ["Pome Fruit", "Apples", "Pears"],
      weeds: [
        { weed: "Fruit Fly", pestList: ["Fruit Fly"], states: ["QLD", "NSW", "Vic", "WA", "NT"], rate: "500", rateMax: "500", unit: "mL/100L", stage: "At start of stinging", note: "Repeat at half concentration every 7-10 days" },
        { weed: "Rutherglen Bug", pestList: ["Rutherglen Bug"], states: ["NSW", "Vic", "Tas", "SA", "WA"], rate: "125", rateMax: "125", unit: "mL/100L", stage: "When pest outbreak occurs", note: "Repeat if reinvaded. Also spray nearby weeds" }
      ]
    },
    {
      crop: "Stone Fruit",
      cropList: ["Stone Fruit", "Peaches", "Nectarines"],
      weeds: [
        { weed: "Queensland Fruit Fly", pestList: ["Queensland Fruit Fly"], states: ["QLD", "NSW", "Vic", "WA", "NT"], rate: "250", rateMax: "250", unit: "mL/100L", stage: "At start of stinging", note: "Repeat at half concentration every 7-10 days" },
        { weed: "Rutherglen Bug", pestList: ["Rutherglen Bug"], states: ["NSW", "Vic", "Tas", "SA", "WA"], rate: "125", rateMax: "125", unit: "mL/100L", stage: "When pest outbreak occurs", note: "Repeat if reinvaded. Also spray nearby weeds" }
      ]
    },
    {
      crop: "Blueberries",
      cropList: ["Blueberries"],
      weeds: [
        { weed: "Queensland Fruit Fly", pestList: ["Queensland Fruit Fly"], states: ["NSW"], rate: "250", rateMax: "250", unit: "mL/100L", stage: "21, 14, 7 days before harvest", note: "Apply when fruit fly numerous. Treat late afternoon after bees finish foraging" }
      ]
    },
    {
      crop: "Strawberries",
      cropList: ["Strawberries"],
      weeds: [
        { weed: "Cluster Caterpillar", pestList: ["Cluster Caterpillar"], states: ["QLD", "NT"], rate: "200", rateMax: "200", unit: "mL/100L", stage: "When pests first seen", note: "Apply when pests are first seen" },
        { weed: "Cutworm", pestList: ["Cutworm"], states: ["QLD"], rate: "95", rateMax: "95", unit: "mL/100L", stage: "Late afternoon or night", note: "Thoroughly spray bases of plants and surrounding soil. Spray late afternoon or night" }
      ]
    },
    {
      crop: "Vegetables - General",
      cropList: ["Vegetables", "Beans", "Celery", "Crucifers", "Cucurbits", "Lettuce", "Peas", "Potatoes", "Tomato"],
      weeds: [
        { weed: "Cutworm", pestList: ["Cutworm"], states: ["QLD", "NT"], rate: "95", rateMax: "95", unit: "mL/100L", stage: "Late afternoon or night", note: "Thoroughly spray bases of plants and surrounding soil" }
      ]
    },
    {
      crop: "Capsicum (Sweet Peppers), Chillies",
      cropList: ["Capsicum", "Chillies", "Peppers"],
      weeds: [
        { weed: "Fruit Fly", pestList: ["Fruit Fly"], states: ["QLD", "NSW", "Vic", "WA", "NT"], rate: "250", rateMax: "125", unit: "mL/100L", stage: "At start of stinging", note: "1st spray 250 mL/100L, repeat sprays 125 mL/100L. Repeat at half concentration every 7-10 days. DO NOT use on Capsicums or Chillies in glass or shade house" }
      ]
    },
    {
      crop: "Tomatoes",
      cropList: ["Tomatoes"],
      weeds: [
        { weed: "Fruit Fly", pestList: ["Fruit Fly"], states: ["All"], rate: "125", rateMax: "125", unit: "mL/100L", stage: "At start of stinging", note: "Apply at start of stinging. Repeat at half concentration every 7-10 days" },
        { weed: "Rutherglen Bug", pestList: ["Rutherglen Bug"], states: ["QLD"], rate: "100", rateMax: "100", unit: "mL/100L", stage: "When pests first seen", note: "Apply when pests are first seen" }
      ]
    },
    {
      crop: "Vegetables - Brassicas",
      cropList: ["Brassicas", "Cabbage", "Cauliflower", "Broccoli"],
      weeds: [
        { weed: "Cabbage White Butterfly", pestList: ["Cabbage White Butterfly"], states: ["All"], rate: "150", rateMax: "1.7", unit: "mL/100L or L/ha", stage: "When pests first seen", note: "Apply when pests are first seen and repeat at 7-10 day intervals" },
        { weed: "Cabbage Moth", pestList: ["Cabbage Moth"], states: ["All"], rate: "150", rateMax: "1.7", unit: "mL/100L or L/ha", stage: "When pests first seen", note: "" },
        { weed: "Green Vegetable Bug", pestList: ["Green Vegetable Bug"], states: ["All"], rate: "150", rateMax: "1.7", unit: "mL/100L or L/ha", stage: "When pests first seen", note: "" },
        { weed: "Rutherglen Bug", pestList: ["Rutherglen Bug"], states: ["All"], rate: "125", rateMax: "125", unit: "mL/100L", stage: "When pest outbreak occurs", note: "Spray when pest outbreak occurs and repeat if reinvaded. Also spray nearby weeds" }
      ]
    },
    {
      crop: "Fowl Houses, Piggeries, Stables, Dairies",
      cropList: ["Fowl Houses", "Piggeries", "Stables", "Dairies"],
      weeds: [
        { weed: "Flies (Maggots)", pestList: ["Flies", "Maggots"], states: ["All"], rate: "25", rateMax: "25", unit: "mL/10L", stage: "At breeding sites", note: "Spray or water onto areas where flies breed at 5L spray mix/10m2" },
        { weed: "Flies (Adults)", pestList: ["Flies", "Adults"], states: ["All"], rate: "180", rateMax: "180", unit: "mL/10L", stage: "On surfaces", note: "Apply as residual spray to walls and surfaces where flies alight at 5L spray mix/40m2" }
      ]
    },
    {
      crop: "Lawn, Turf",
      cropList: ["Lawn", "Turf", "Grass"],
      weeds: [
        { weed: "Lawn Grub", pestList: ["Lawn Grub"], states: ["QLD", "NSW", "WA", "NT"], rate: "12", rateMax: "12", unit: "mL/10L per 100m2", stage: "When pest present", note: "Apply with sprayer or watering can as soon as pest is present. Repeat as new hatchings occur" },
        { weed: "Lawn Armyworm", pestList: ["Lawn Armyworm"], states: ["QLD", "NSW", "WA", "NT"], rate: "12", rateMax: "12", unit: "mL/10L per 100m2", stage: "When pest present", note: "" }
      ]
    }
  ],

  restraints: [
    "Product is poisonous if absorbed by skin, inhaled or swallowed",
    "Repeated minor exposure may have cumulative poisoning effect",
    "DO NOT allow drift onto sensitive vegetation",
    "DO NOT apply unless wind speed between 3-20 km/hr",
    "DO NOT apply during temperature inversion conditions",
    "Phytotoxic to some Sorghum varieties (Alpha and Pioneer 846)",
    "May be subject to alkaline hydrolysis at high pH; use acidifying agent if pH > 8"
  ],

  compatibility: "Compatible with most commonly used insecticides and fungicides including Antracol. All mixtures should be tested prior to mixing commercial quantities",

  withholding: {
    harvest: "Edible Crops (except Leafy Vegetables): 2 days; Leafy Vegetables: 5 days; Dried Fruit: 2 days",
    grazing: "Pastures, Forage Crops: 2 days; DO NOT use treated produce for human consumption or stock food within 2 days"
  },

  surfactant:     "Organosilicone surfactant recommended for some applications",
  sprayerCleanup: "Triple rinse containers before disposal. Do not dispose of undiluted chemicals on-site. For Envirodrum units, disconnect and triple rinse delivery system and hoses"
};
