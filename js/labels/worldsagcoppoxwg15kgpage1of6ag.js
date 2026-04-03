// ─────────────────────────────────────────────────────────
// 7 Worlds Ag Coppox WG — Label Data
// Group M1 (Copper Fungicide) | Wettable Granule
// Source: WorldsAg_Coppox_WG_Label.pdf
// APVMA Approval No: 59562
// 7 Worlds Ag
// ─────────────────────────────────────────────────────────
productDatabase['worldsagcoppoxwg15kgpage1of6ag'] = {

  name:             "7 Worlds Ag Coppox WG",
  company: "7 Worlds Ag",


  category:         "Fungicides",
  activeIngredient: "500 g/kg Copper (as Copper Oxychloride)",
  group:            "Group M1 (Copper Fungicide)",
  modeOfAction:     "Contact fungicide and bactericide; prevents spore germination",
  formulation:      "Wettable Granule (WG)",
  color:            "#0ea5e9",
  apvma:            "59562",
  labelPdf:         "Source labels/WorldsAg_Coppox_WG_Label.pdf",
  sdsPdf:           "SDS Labels/COPPOX_WG_AGRICULTURAL_FUNGICIDE_BACTERICIDE.pdf",
  signalHeading:    "Poison",

  classification: {
    type: "Fungicide",
    target: ["Anthracnose", "Black Spot", "Downy Mildew", "Leaf Curl", "Leaf Spot", "Shothole"],
    timing: ["Preventive"]
  },

  crops: [
    {
      crop: "Tree Fruits (Almonds, Apples, Citrus, Stonefruit)",
      cropList: ["Tree Fruits","Almonds","Apples","Citrus","Stonefruit"],
      weeds: [
        {
          weed: "Shothole, Leaf Curl, Anthracnose, Black Spot, Scab",
          pestList: ["Shothole","Leaf Curl","Anthracnose","Black Spot","Scab"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Bud swell to post-flowering (timing critical)",
          note: "Do NOT apply to copper-shy varieties. Repeat 5-7 days post petal fall. Do NOT spray in hot (>35°C) or poor drying conditions."
        }
      ]
    },
    {
      crop: "Berries (Blueberries, Strawberries)",
      cropList: ["Berries","Blueberries","Strawberries"],
      weeds: [
        {
          weed: "Anthracnose, Blueberry Rust, Leaf Spot",
          pestList: ["Anthracnose","Blueberry Rust","Leaf Spot"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "g/100L",
          stage: "First sign of disease; repeat 10-14 days",
          note: "Apply by boom spray or air-assisted sprayer. Do NOT apply if rain expected within 4 hours or if temp >35°C."
        }
      ]
    },
    {
      crop: "Bananas",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Cercospora Leaf Spot",
          pestList: ["Cercospora Leaf Spot"],
          states: ["NSW", "QLD", "WA"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "December-May during disease season; 3-4 week intervals",
          note: "Tank-mix with summer oil (600mL/100L). Apply at least 800L/ha for thorough coverage."
        }
      ]
    },
    {
      crop: "Avocados",
      cropList: ["Avocados"],
      weeds: [
        {
          weed: "Anthracnose",
          pestList: ["Anthracnose"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "4-weekly from flowering to harvest; reduce to 2 weeks in wet periods",
          note: "Do NOT apply to copper-shy varieties. Monitor spray coverage."
        }
      ]
    },
    {
      crop: "Mango",
      cropList: ["Mango"],
      weeds: [
          { weed: "Anthracnose, Bacterial black spot", pestList: ["Anthracnose", "Bacterial Black Spot"], states: ["All"], rate: "200", unit: "g/100L", rateText: "200g/100L", notes: "WHP: 1 day. Spray every 4 weeks from the end of flowering to harvest. During extended wet weather, spray every 14 days. Do not apply over 35 degrees celsius" }
      ]
    }
    
  ],

  restraints: [
    "DO NOT spray when hot conditions (>35°C) or frosts likely",
    "DO NOT apply to copper-shy varieties",
    "DO NOT apply to wet foliage",
    "DO NOT use in poor drying conditions",
    "DO NOT apply if rain expected within 4 hours"
  ],

  compatibility: {
    compatible:   ["Summer oil (can be tank-mixed)", "Most fungicides"],
    incompatible: [],
    notes:        ["Do NOT use in spray solutions with pH <6.5"]
  },

  withholding: {
    harvest: "Varies by crop; consult label for specific withholding periods.",
    grazing: "Consult label for pasture/grazing restrictions."
  },

  surfactant:     "A wetting agent may improve coverage; can be tank-mixed with summer oil.",
  sprayerCleanup: "Rinse sprayer thoroughly with water after use to prevent blockages."
};
