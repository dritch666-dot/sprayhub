// ─────────────────────────────────────────────────────────
// RIDOMIL GOLD MZ WG SYSTEMIC & PROTECTIVE FUNGICIDE — Label Data
// Group 4 + M3 (Phenylamide + Dithiocarbamate) | Water Dispersible Granule (WDG)
// Source: Syngenta_RidomilGoldMZWG_Label.pdf
// APVMA Approval No: 52926
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['ridomilgoldmzwg'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Ridomil Gold MZ WG Fungicide",
  company: "Syngenta",

  category:         "Fungicides",
  activeIngredient: "640 g/kg mancozeb + 40 g/kg metalaxyl-M",
  group:            "Group 4 + M3 (Phenylamide + Dithiocarbamate Fungicide)",
  modeOfAction:     "Group 4: inhibits RNA polymerase I (systemic). Group M3: multi-site dithiocarbamate (protectant)",
  formulation:      "Water Dispersible Granule (WDG)",
  color:            "#1e40af",
  apvma:            "52926",
  labelPdf: "Source labels/Syngenta_Ridomil_Gold_Mz_Wg_Systemic_Protective_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/RIDOMIL_GOLD_MZ_WG_SYSTEMIC_AND_PROTECTIVE_FUNGICIDE.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Downy Mildew", "Alternaria Leaf Spot", "Anthracnose", "Gummy Stem Blight",
             "Septoria Spot", "Pink Rot", "Blue Mould", "Brown Spot", "Frog-eye leaf spot"],
    timing: ["Preventative", "Pre-infection", "Protectant program"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Grapevines — Downy Mildew",
      cropList: ["Grapevines"],
      weeds: [
        {
          weed: "Downy Mildew (Plasmopara viticola)",
          pestList: ["Downy Mildew"],
          states: ["Qld", "NSW", "Vic", "Tas", "SA", "WA"],
          rate: "250",
          rateMax: "250",
          unit: "g/100L",
          stage: "Commence when grapevine shoots are approximately 20 cm (200 mm) long; continue at 7–21 day intervals using a protectant or non-phenylamide fungicide (not Group 4)",
          note: "Apply by dilute or concentrate spraying — apply the same amount of product whether dilute or concentrate method used. Use in a protectant program commencing before disease occurs. Limit use of Group 4 fungicides to periods when conditions favour disease development. When conditions favour Downy Mildew development, apply 2 consecutive sprays of Ridomil Gold MZ WG. DO NOT apply more than 2 consecutive sprays of a Group 4 product. Apply a maximum of 4 Ridomil Gold MZ WG or Ridomil Gold Plus sprays per season. DO NOT apply to grapevines in flower in Queensland. Minor phytotoxic reactions on some varieties may occur under certain conditions. Dilute spraying: min 500 L/ha before flowering, min 1000 L/ha when vines are in full foliage. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Cucurbits — Downy Mildew and Other Diseases",
      cropList: ["Cucurbits"],
      weeds: [
        {
          weed: "Downy Mildew",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Commence spraying early (before main disease infection period) with a registered non-Group 4 fungicide; when conditions favour disease apply 2 consecutive sprays at 7–10 day intervals, then resume protectant program",
          note: "Boom/low volume: 2.5 kg in 200–500 L water/ha. High volume: 250 g/100 L. Aircraft: 2.5 kg in 20–40 L water/ha. This use is subject to phenylamide anti-resistance strategy. DO NOT wait for disease to appear. Use shorter interval when infection pressure is severe. Ensure thorough coverage. Add non-ionic surfactant to spray mix. WHP: 7 days."
        },
        {
          weed: "Alternaria Leaf Spot, Anthracnose, Gummy Stem Blight, Septoria Spot (Pumpkins)",
          pestList: ["Alternaria Leaf Spot","Anthracnose","Gummy Stem Blight","Septoria Spot"],
          states: ["Qld"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Commence spraying early in protectant program",
          note: "Boom/low volume: 2.5 kg in 200–500 L water/ha. Aircraft: 2.5 kg in 20–40 L water/ha. Add non-ionic surfactant. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Lettuce — Downy Mildew, Anthracnose, Septoria",
      cropList: ["Lettuce"],
      weeds: [
        {
          weed: "Anthracnose, Downy Mildew, Septoria Leaf Spot",
          pestList: ["Anthracnose","Downy Mildew","Septoria Leaf Spot"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Commence spraying early; when conditions favour disease apply 2 consecutive sprays at 7–10 day intervals then resume protectant program",
          note: "Boom: 2.5 kg in 200–500 L water/ha. High volume: 250 g/100 L water; 35 g/15 L water. Aircraft (Qld, Vic, Tas, SA, WA only): 2.5 kg in 20–40 L water/ha. Add non-ionic surfactant. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Onions — Downy Mildew and Purple Blotch",
      cropList: ["Onions"],
      weeds: [
        {
          weed: "Downy Mildew",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Commence spraying early; when conditions favour disease apply 2 consecutive sprays at 7–10 day intervals then resume protectant program",
          note: "Boom: 2.5 kg in 200–500 L water/ha. High volume: 250 g/100 L water. Aircraft: 2.5 kg in 20–40 L water/ha. Add non-ionic surfactant. WHP: 7 days."
        },
        {
          weed: "Purple Blotch",
          pestList: ["Purple Blotch"],
          states: ["Qld"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Commence spraying early in protectant program",
          note: "Boom: 2.5 kg in 500 L water/ha. Add non-ionic surfactant. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Ornamentals — Downy Mildew",
      cropList: ["Ornamentals"],
      weeds: [
        {
          weed: "Downy Mildew (various)",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/100L",
          stage: "Commence spraying early in protectant program",
          note: "Boom: 2.5 kg in 200–500 L water/ha. High volume: 150–250 g/100 L water. WHP: not stated."
        }
      ]
    },

    {
      crop: "Potatoes — Blight and Pink Rot",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Early Blight, Late Blight",
          pestList: ["Early Blight","Late Blight"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "Aircraft: 2.5 kg in 30–50 L water/ha. High volume: 250 g/100 L water. WHP: 7 days."
        },
        {
          weed: "Pink Rot",
          pestList: ["Pink Rot"],
          states: ["Vic", "Tas", "SA", "WA"],
          rate: "250",
          rateMax: "250",
          unit: "g/100L",
          stage: "First application 4–6 weeks after planting to crops previously treated at planting with Ridomil Gold 480 SL; repeat 14 days later then apply protectant program",
          note: "WHP: 7 days."
        }
      ]
    },

    {
      crop: "Poppies — Downy Mildew",
      cropList: ["Poppies"],
      weeds: [
        {
          weed: "Downy Mildew (Peronospora arborens)",
          pestList: ["Downy Mildew"],
          states: ["Tas"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Commence spraying early before main disease infection period with a registered non-Group 4 fungicide; when conditions favour disease apply up to 2 applications at 7–10 day intervals then resume protectant program",
          note: "DO NOT wait for disease to appear. Use shorter interval when infection pressure is severe. Ensure thorough coverage. Add non-ionic surfactant. WHP: 7 weeks."
        }
      ]
    },

    {
      crop: "Rhubarb — Downy Mildew",
      cropList: ["Rhubarb"],
      weeds: [
        {
          weed: "Downy Mildew (Peronospora jaapiana)",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Commence spraying early before main disease infection period; when conditions favour disease apply 2 consecutive sprays at 7–10 day intervals then resume protectant program",
          note: "Boom: 2.5 kg in 200–500 L water/ha. DO NOT wait for disease to appear. Use shorter interval when infection pressure is severe. Ensure thorough coverage. Add non-ionic surfactant. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Strawberries (Non-fruiting) — Runner Dip",
      cropList: ["Strawberries (Non-Fruiting)","Runner Dip"],
      weeds: [
        {
          weed: "Eye Spot (Mycosphaerella fragariae), Leaf Blight (Dendroploma obscurans), Root Rot (Phytophthora nicotianae var. parasitica), Scorch (Diplocarpon earlianus)",
          pestList: ["Eye Spot","Leaf Blight","Root Rot","Scorch"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Apply as a combined dip for runners after digging",
          note: "Use 100 g Ridomil Gold MZ WG plus 50 g Benlate* in 100 L water. For control of diseases only in Strawberry Runner Approval Schemes. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Tobacco Seedbed — Blue Mould",
      cropList: ["Tobacco Seedbed","Blue Mould"],
      weeds: [
        {
          weed: "Blue Mould",
          pestList: ["Blue Mould"],
          states: ["Qld", "NSW", "Vic"],
          rate: "18",
          rateMax: "18",
          unit: "g/100L",
          stage: "Spray at 7-day intervals commencing 5 weeks after emergence; make final application the day before planting out",
          note: "Apply at 18 g per 15 L water per 60–80 m2. Spray to thoroughly wet leaves. DO NOT drench. WHP: not required."
        }
      ]
    },

    {
      crop: "Tobacco Field — Blue Mould, Brown Spot, Frog Eye Leaf Spot",
      cropList: ["Tobacco Field"],
      weeds: [
        {
          weed: "Blue Mould, Brown Spot",
          pestList: ["Blue Mould","Brown Spot"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "g/100L",
          stage: "Spray at 7-day intervals commencing 10 days after transplanting; spray to thoroughly wet leaves",
          note: "Apply: Initially 200 L/ha, plants 1 m high 500 L/ha, fully grown 800 L/ha. WHP: 7 days."
        },
        {
          weed: "Frog-eye leaf spot",
          pestList: ["Frog-eye leaf spot"],
          states: ["Qld"],
          rate: "250",
          rateMax: "250",
          unit: "g/100L",
          stage: "Spray at 7-day intervals commencing 10 days after transplanting",
          note: "Spray to thoroughly wet leaves. Apply: Initially 200 L/ha, plants 1 m high 500 L/ha, fully grown 800 L/ha. WHP: 7 days."
        }
      ]
    }

  ,
    {
      crop: "Capsicum",
      cropList: ["Capsicum"],
      weeds: [
          { weed: "Downy mildew", pestList: ["Downy Mildew"], states: ["All"], rate: "2.5", unit: "kg/ha", rateText: "2.5kg/ha", notes: "WHP: 7 days. add a wetter" }
      ]
    },
    {
      crop: "Basil",
      cropList: ["Basil"],
      weeds: [
          { weed: "Downy Mildew", pestList: ["Downy Mildew"], states: ["All"], rate: "1.9", unit: "kg/ha", rateText: "1.9kg/ha", notes: "WHP: 21 Days. Max 2 applications" }
      ]
    }
    ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply more than four sprays per season (except for tobacco).",
    "DO NOT apply this product as a post-infection curative spray — this will favour development of resistant disease strains.",
    "DO NOT use for disease control in greenhouse crops.",
    "The effect could be diminished if rain falls within 6 hours of application.",
    "DO NOT apply more than 2 consecutive sprays of a Group 4 product.",
    "DO NOT allow entry into treated areas until the spray has dried.",
    "DO NOT use human flaggers unless protected by engineering controls such as vehicles with cabs."
  ],

  compatibility: {
    compatible:   ["Most fungicides and insecticides — always jar test before mixing."],
    incompatible: [],
    notes:        ["When mixing with other WG or WP formulations, ensure they are added and mixed well prior to adding EC or SC products. WP formulations should be pre-mixed separately."]
  },

  withholding: {
    harvest: "Cucurbits, Onions, Potatoes, Strawberries, Tobacco: 7 days. Grapes, Lettuce, Rhubarb: 14 days. Poppies: 7 weeks.",
    grazing: "Not specified."
  },

  surfactant:     "Add a non-ionic surfactant to the spray mix for Onions, Lettuce, Poppies, Rhubarb, and Cucurbits.",
  sprayerCleanup: "Rinse equipment thoroughly with clean water after use."

};
