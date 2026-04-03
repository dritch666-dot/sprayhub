// ─────────────────────────────────────────────────────────────────────────────
// ZORVEC ENICADE FUNGICIDE — Label Data
// Suspension Concentrate | Group 49 Fungicide
// Source: Corteva_Agriscience_Zorvec_Enicade_Fungicide_Label.pdf
// APVMA Approval No: 68375/142021
// Corteva Agriscience
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['cortevazorvec'] = {
  name:             "Zorvec Enicade Fungicide",
  company: "Corteva",

  category:         "Fungicides",
  activeIngredient: "100 g/L Oxathiapiprolin",
  group:            "Group 49 Fungicide",
  modeOfAction:     "Oomycete-specific mitochondrial complex III inhibitor - Phytophthora and Pythium control",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#0e4c92",
  apvma:            "68375",
  labelPdf:         "Source labels/Corteva_Agriscience_Zorvec_Enicade_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/ZORVEC_ENICADE_FUNGICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Downy mildew", "Late blight", "Phytophthora diseases"],
    timing: ["Early season", "Pre-disease application"]
  },

  crops: [
    {
      crop: "Brassicas (Broccoli, Cabbage, Cauliflower) — Dilute spraying",
      cropList: ["Brassicas","Broccoli","Cabbage","Cauliflower","Dilute Spraying"],
      weeds: [
        { weed: "Downy mildew (Hyaloperonospora parasitica)", pestList: ["Downy Mildew"], states: ["All"], rate: "350", unit: "mL/ha", stage: "Early growth", note: "Maintain a regular protectant spray programme. Apply when conditions favour disease development but before the disease is evident. Apply up to two consecutive sprays of Zorvec Enicade, 7 to 10 days apart and then change to a fungicide from another chemical group. Use the shorter interval when conditions favouring infection are creating a high risk. Apply in 250 to 500 L of water per hectare. DO NOT apply more than 3 sprays of Zorvec Enicade to each crop as a precaution against development of disease resistance. WHP: 0 days." }
      ]
    },
    {
      crop: "Leafy vegetables and Brassica leafy vegetables",
      cropList: ["Leafy Vegetables","Brassica Leafy Vegetables","Amaranth","Arugula","Buk Choy","Cardoon","Chard","Chervil","Chinese Broccoli","Chinese Cabbage","Choy Sum","Corn Salad","Cress","Dandelion Leaves","Dock","Endive","Kai Choy","Kale","Leafy Mustard","Lettuce","Mibuna","New Zealand Spinach","Orach","Pak Choy","Purslane","Radicchio","Rocket","Spinach","Swiss Chard","Tat Soy"],
      weeds: [
        { weed: "Downy mildew (Bremia lactucae, Peronospora farinose)", pestList: ["Downy Mildew"], states: ["All"], rate: "350", unit: "mL/ha", stage: "Early season", note: "Maintain a regular protectant spray programme. Apply when conditions favour disease development but before the disease is evident. Apply up to two consecutive sprays of Zorvec Enicade, 7 to 10 days apart and then change to a fungicide from another chemical group. Use the shorter interval when conditions favouring infection are creating a high risk. Apply in 250 to 500 L of water per hectare. DO NOT apply more than 3 sprays of Zorvec Enicade to each crop as a precaution against development of disease resistance. WHP: 3 days." }
      ]
    },
    {
      crop: "Cucurbit vegetables (field and protected crops)",
      cropList: ["Cucurbit Vegetables","Bitter Melon","Chokos","Cucumber","Gherkin","Marrow","Melons","Pumpkin","Rockmelon","Squash","Zucchini"],
      weeds: [
        { weed: "Downy mildew (Pseudoperonospora cubensis)", pestList: ["Downy Mildew"], states: ["All"], rate: "350", unit: "mL/ha", stage: "Early growth", note: "Maintain a regular protectant spray programme. Apply when conditions favour disease development but before the disease is evident. Apply up to two consecutive sprays of Zorvec Enicade, 7 to 10 days apart and then change to a fungicide from another chemical group. Use the shorter interval when conditions favouring infection are creating a high risk. Apply in 250 to 500 L of water per hectare. DO NOT apply more than 3 sprays of Zorvec Enicade to each crop as a precaution against development of disease resistance. WHP: 1 day." }
      ]
    },
    {
      crop: "Bulb vegetables (excluding Onions)",
      cropList: ["Bulb Vegetables","Chives","Fennel","Florence Fennel","Garlic","Leeks","Shallots","Spring Onions"],
      weeds: [
        { weed: "Downy mildew (Peronospora destructor)", pestList: ["Downy Mildew"], states: ["All"], rate: "350", unit: "mL/ha", stage: "Early season", note: "Maintain a regular protectant spray programme. Apply when conditions favour disease development but before the disease is evident. Apply in 250 to 500 L of water per hectare. Apply up to two consecutive sprays of Zorvec Enicade, 10 days apart and then change to a fungicide from another chemical group. DO NOT apply more than 3 sprays of Zorvec Enicade to each crop as a precaution against development of disease resistance. WHP: 10 days." }
      ]
    },
    {
      crop: "Onions",
      cropList: ["Onions"],
      weeds: [
        { weed: "Downy mildew (Peronospora destructor)", pestList: ["Downy Mildew"], states: ["All"], rate: "350", unit: "mL/ha", stage: "Early season", note: "Apply up to two consecutive sprays of Zorvec Enicade, 10 to 14 days apart. DO NOT apply more than 2 sprays of Zorvec Enicade to each crop as a precaution against development of disease resistance. WHP: 10 days." }
      ]
    },
    {
      crop: "Oilseed Poppies",
      cropList: ["Oilseed Poppies","Poppies"],
      weeds: [
        { weed: "Downy mildew (Peronospora cristata)", pestList: ["Downy Mildew"], states: ["All"], rate: "350", unit: "mL/ha", stage: "Vegetative to hook stage", note: "Commence spraying early (i.e. before the main disease infection period) with registered non Group 49 fungicides. Apply Zorvec Enicade when conditions favour disease development during the late run-up to hook stage. Apply in 250 to 500 L water per hectare. DO NOT apply later than hook stage. DO NOT apply more than 1 application of Zorvec Enicade to each crop, as a precaution against development of disease resistance. WHP: 6 weeks." }
      ]
    },
    {
      crop: "Cucurbits",
      cropList: ["Cucurbits"],
      weeds: [
          { weed: "Downy mildew", pestList: ["Downy Mildew"], states: ["All"], rate: "350", unit: "mL/ha", rateText: "350ml/ha + a protectant downy mildew fungicide", notes: "WHP: 1 day. No more then 3 applications per crop." }
      ]
    },
    {
      crop: "Basil",
      cropList: ["Basil"],
      weeds: [
          { weed: "Downy Mildew", pestList: ["Downy Mildew"], states: ["All"], rate: "350", unit: "mL/ha", rateText: "350ml/ha", notes: "WHP: 2 Days. CAN ONLY USE WITH COPPER OR REVUS" }
      ]
    }
    
  ],

  restraints: [
    "DO NOT apply if rainfall expected within 20 minutes of spray drying",
    "DO NOT use on hydroponic crops",
    "DO NOT apply in nursery production of transplanted crops",
    "DO NOT apply by air",
    "DO NOT apply with spray droplets smaller than MEDIUM category",
    "DO NOT apply during surface temperature inversion conditions",
    "DO NOT apply when wind speed is less than 3 or more than 20 km/h",
    "Must maintain written spray application records for minimum 2 years"
  ],

  compatibility: {
    compatible:   ["Most approved fungicides and insecticides"],
    incompatible: [],
    notes:        ["Test tank mixes on small area first", "Do not mix with strongly alkaline products"]
  },

  withholding: {
    harvest: "Brassicas: 0 days. Leafy veg: 3 days. Cucurbits: 1 day. Alliums: 10 days. Poppies: 6 weeks",
    grazing: "DO NOT graze or cut for stock food"
  },

  surfactant:     "Non-ionic surfactant may improve coverage",
  sprayerCleanup: "Immediately after application, thoroughly clean all spray equipment. Rinse with clean water and flush all lines."
};
