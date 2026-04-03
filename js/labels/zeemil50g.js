// ─────────────────────────────────────────────────────────────────────────────
// ZEE-MIL 50G FUNGICIDE — Label Data
// Fungicide | Granular
// Source: UPL_Zeemil_50G_Fungicide_Label.pdf
// APVMA Approval No: 50433/10/0604
// UPL Australia Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['zeemil50g'] = {
  name:             "UPL Zee-Mil 50G Systemic Granular Fungicide",

  category:         "Fungicides",
  activeIngredient: "50 g/kg Metalaxyl",
  group:            "Group D Fungicide",
  modeOfAction:     "Phenylamide fungicide",
  formulation:      "Granular",
  color:            "#4a5568",
  company: "UPL",
  apvma:            "50433",
  labelPdf:         "Source labels/UPL_Zeemil_50G_Fungicide_Label.pdf",
  sdsPdf:         "SDS Labels/ZEEMIL_50G_SYSTEMIC_GRANULAR_FUNGICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Phytophthora diseases", "Damping-off", "Pink Rot"],
    timing: ["Soil application"]
  },

  crops: [
    {
      crop: "Avocados",
      cropList: ["Avocados"],
      weeds: [
        { weed: "Phytophthora Root Rot - Replanting", pestList: ["Phytophthora Root Rot"], states: ["QLD", "NSW", "SA", "WA"], rate: "100", rateMax: "100", unit: "g/m2", stage: "At planting", note: "Apply at planting and repeat 8-12 weeks later. DO NOT use on unsterilised potting soil" },
        { weed: "Phytophthora Root Rot - Curative", pestList: ["Phytophthora Root Rot"], states: ["All"], rate: "100", rateMax: "100", unit: "g/m2", stage: "Summer wet season", note: "For established trees with decline symptoms. Apply at beginning of summer wet season and again 8-12 weeks later" },
        { weed: "Phytophthora Root Rot - Protective", pestList: ["Phytophthora Root Rot"], states: ["All"], rate: "25", rateMax: "50", unit: "g/m2", stage: "Summer wet season", note: "For healthy trees at risk. Apply 3-6 month intervals. Apply in alternate years only" }
      ]
    },
    {
      crop: "Macadamia Nuts",
      cropList: ["Macadamia Nuts"],
      weeds: [
        { weed: "Phytophthora Root Rot and Trunk Canker - Maintenance", pestList: ["Phytophthora Root Rot", "Trunk Canker"], states: ["QLD", "NSW", "WA"], rate: "25", rateMax: "50", unit: "g/m2", stage: "Summer wet season", note: "3-6 month intervals. Apply in alternate years only" },
        { weed: "Phytophthora Root Rot and Trunk Canker - Curative", pestList: ["Phytophthora Root Rot", "Trunk Canker"], states: ["All"], rate: "100", rateMax: "100", unit: "g/m2", stage: "Summer wet season", note: "Apply at beginning and again 8-12 weeks later. Further treatment at 6 monthly intervals" }
      ]
    },
    {
      crop: "Peaches",
      cropList: ["Peaches", "Stone Fruit"],
      weeds: [
        { weed: "Phytophthora Trunk Rot", pestList: ["Phytophthora Trunk Rot"], states: ["Vic", "SA", "WA", "QLD"], rate: "100", rateMax: "100", unit: "g per tree", stage: "Autumn / Spring", note: "Apply in autumn after harvest and spring with good leaf cover. Apply in shallow gutter around tree base. Irrigate within 24 hours" }
      ]
    },
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        { weed: "Pink Rot", pestList: ["Pink Rot"], states: ["Tas", "Vic", "WA"], rate: "20", rateMax: "20", unit: "kg/ha", stage: "At sowing", note: "For fields with previous disease history. Apply in seed furrows. Follow with Zee-Mil MZB 720 WP foliar 4-6 weeks after" }
      ]
    },
    {
      crop: "Brassicas",
      cropList: ["Cabbage", "Cauliflower", "Broccoli", "Brussels Sprouts", "Capsicums", "Cucurbits"],
      weeds: [
        { weed: "Damping-off", pestList: ["Damping-off", "Pythium", "Phytophthora"], states: ["NSW", "QLD", "WA"], rate: "2.5", rateMax: "120", unit: "g per 10L or 120g per 100m", stage: "Container / Pre-transplant", note: "Container: 2.5g per 10L potting mix. Pre-transplant: in 30cm band along rows" }
      ]
    },
    {
      crop: "Carrots",
      cropList: ["Carrots"],
      weeds: [
        { weed: "Damping-off", pestList: ["Damping-off", "Pythium", "Phytophthora"], states: ["All"], rate: "40", rateMax: "120", unit: "kg/ha or g per 100m", stage: "At planting", note: "Apply dry granules in 30cm band at planting. Rainfall or irrigation required" }
      ]
    },
    {
      crop: "Tomatoes",
      cropList: ["Tomatoes"],
      weeds: [
        { weed: "Damping-off", pestList: ["Damping-off", "Pythium", "Phytophthora"], states: ["All"], rate: "2.5", rateMax: "120", unit: "g per 10L or 120g per 100m", stage: "Seedbeds / Pre-transplant", note: "Seedbeds: 5-10g per 10m2. Pre-transplant: in 30cm band. Repeat after 21 days at highest rate" }
      ]
    }
  ],

  restraints: [
    "Group D fungicide - resistance management important",
    "Do not use on crops produced hydroponically",
    "DO NOT contaminate waterways"
  ],

  compatibility: "Not specified",

  withholding: {
    harvest: "Avocados, Cabbage, Cauliflower, Broccoli, Brussels Sprouts: 7 days; Macadamia: 4 weeks; Peaches: 6 weeks; Potatoes, Carrots, Tomatoes: Not required",
    grazing: "Not applicable"
  },

  surfactant:     "Not applicable - granular formulation",
  sprayerCleanup: "Single rinse disposal. Do not burn containers"
};
