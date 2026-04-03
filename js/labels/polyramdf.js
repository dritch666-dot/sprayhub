// ─────────────────────────────────────────────────────────
// POLYRAM® DF FUNGICIDE SPRAY — Label Data
// Group M3 (Multi-site) | Water Dispersible Granule (WDG)
// Source: BASF_PolyramDF_Label.pdf
// APVMA Approval No: 30467
// BASF Australia Ltd
// ─────────────────────────────────────────────────────────
productDatabase['polyramdf'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Polyram® DF Fungicide Spray",
  company: "AMVAC",

  category:         "Fungicides",
  activeIngredient: "700 g/kg metiram",
  group:            "Group M3 (Multi-site Fungicide)",
  modeOfAction:     "Multi-site inhibitor — disrupts multiple enzyme systems in fungal cells",
  formulation:      "Water Dispersible Granule (WDG)",
  color:            "#059669",
  apvma:            "30467",
  labelPdf: "Source labels/Basf_Polyram_Df_Fungicide_Spray_Label.pdf",
  sdsPdf:           "SDS Labels/POLYRAM_DF.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Apple Scab", "Black Spot", "Downy Mildew", "Rust", "Anthracnose", "Leaf Spot",
             "Blight", "Shothole", "Phomopsis"],
    timing: ["Preventative", "Pre-infection"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Pome Fruits (Apples, Pears)",
      cropList: ["Pome Fruits","Apples","Pears"],
      weeds: [
        {
          weed: "Apple scab (Black spot, Venturia inaequalis), Bitter rot, Fly speck, Pear scab, Ripe fruit spot, Sooty blotch, Target spot",
          pestList: ["Apple Scab","Bitter Rot","Fly Speck","Pear Scab","Ripe Fruit Spot","Sooty Blotch","Target Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "After early copper sprays; repeat every 7–14 days",
          note: "Dilute spray: 150–200 g/100L. Apply by dilute or concentrate spraying. Apply same total amount whether dilute or concentrate method used. WHP: 14 days. Use the higher rate and shorter interval when weather conditions favour disease development. NOT compatible with integrated mite control programs (IMCP) using predatory mite Typhlodromus pyri."
        }
      ]
    },

    {
      crop: "Grapevines — Black Spot, Downy Mildew",
      cropList: ["Grapevines"],
      weeds: [
        {
          weed: "Black spot (Elsinoe ampelina), Downy mildew (Plasmopara viticola)",
          pestList: ["Black Spot","Downy Mildew"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "At bud burst (first spray if carryover expected); then 2 weeks after bud burst or as disease pressure requires",
          note: "Dilute spray: 200 g/100L. Apply by dilute or concentrate spraying. WHP: 14 days. Grapevine leaves treated must NOT be used for human consumption."
        },
        {
          weed: "Phomopsis cane and leaf spot",
          pestList: ["Phomopsis Cane And Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "At bud burst; repeat 7–10 days later",
          note: "Dilute spray: 150–200 g/100L. Apply by dilute or concentrate spraying. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Mangoes",
      cropList: ["Mangoes"],
      weeds: [
        {
          weed: "Anthracnose (Colletotrichum gloeosporiodes)",
          pestList: ["Anthracnose"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Weekly intervals during flowering; then monthly until near harvest",
          note: "Dilute spray: 200 g/100L. WHP: 1 day."
        }
      ]
    },

    {
      crop: "Stone Fruit (Apricots, Nectarines, Peaches, Plums, Cherries)",
      cropList: ["Stone Fruit","Apricots","Nectarines","Peaches","Plums","Cherries"],
      weeds: [
        {
          weed: "Rust, Shothole",
          pestList: ["Rust","Shothole"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "g/100L",
          stage: "Rust: at petal fall, shuck fall, then 4 weeks after shuck fall. WA only: 3rd spray 4 further weeks later. Shothole: first spray at petal fall, 3 further applications at 10–14 day intervals. WA only: first spray at pink bud, then petal fall",
          note: "Dilute spray: 150 g/100L. Apply by dilute or concentrate spraying. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Asparagus",
      cropList: ["Asparagus"],
      weeds: [
        {
          weed: "Rust (Puccinia spp.)",
          pestList: ["Rust"],
          states: ["Qld", "Vic", "Tas", "SA", "WA"],
          rate: "200",
          rateMax: "300",
          unit: "g/100L",
          stage: "Begin when disease first apparent; repeat at 7–10 day intervals",
          note: "High volume: 200–300 g/100L. Low volume: 2.2–3.5 kg/ha. WHP: 7 days. Use higher rate and shorter interval when weather conditions favour disease development."
        }
      ]
    },

    {
      crop: "Bananas",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Leaf spot (Mycosphaerella musicola), Black pit, Cordana leaf spot, Fruit speckle",
          pestList: ["Leaf Spot","Black Pit","Cordana Leaf Spot","Fruit Speckle"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when weather conditions favour disease; repeat per locally recommended schedules",
          note: "High volume: 200 g/100L + spray oil. Low volume: 2.2–4.5 kg/ha + spray oil. Use only on BAGGED bananas. NSW/South Qld: 3-week intervals Dec–May. North Qld/NT: every 2 weeks during wet season, extending to 3 weeks then 4–5 weeks in drier months. WHP: not required when used as directed. DO NOT apply by aerial application."
        }
      ]
    },

    {
      crop: "Beans (Vegetables)",
      cropList: ["Beans"],
      weeds: [
        {
          weed: "Rust (Uromyces appendiculatus), Anthracnose (Colletotrichum lindemuthianum)",
          pestList: ["Rust","Anthracnose"],
          states: ["All"],
          rate: "200",
          rateMax: "300",
          unit: "g/100L",
          stage: "Begin when disease first apparent; repeat at 7–10 day intervals",
          note: "High volume: 200–300 g/100L. Low volume: 2.2–3.5 kg/ha. WHP: 7 days. Use higher rate and shorter interval when weather favours disease."
        }
      ]
    },

    {
      crop: "Brassicas (Cabbages, Cauliflowers, Brussels Sprouts, Broccoli)",
      cropList: ["Brassicas","Cabbage","Cauliflower","Brussels Sprouts","Broccoli"],
      weeds: [
        {
          weed: "Downy mildew (Peronospora parasitica)",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "200",
          rateMax: "300",
          unit: "g/100L",
          stage: "Begin when disease first apparent; repeat at 7–10 day intervals",
          note: "High volume: 200–300 g/100L. Low volume: 2.2–3.5 kg/ha. WHP: 7 days. Add non-ionic surfactant at label rates. Use higher rate and shorter interval when weather favours disease."
        },
        {
          weed: "Ring spot (Mycosphaerella brassicicola)",
          pestList: ["Ring Spot"],
          states: ["Qld", "Vic", "Tas", "SA", "WA"],
          rate: "200",
          rateMax: "300",
          unit: "g/100L",
          stage: "Begin when disease first apparent; repeat at 7–10 day intervals",
          note: "High volume: 200–300 g/100L. Low volume: 2.2–3.5 kg/ha. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Capsicum, Eggplant, Peppers",
      cropList: ["Capsicum","Eggplant","Peppers"],
      weeds: [
        {
          weed: "Alternaria leaf spot, Cercospora leaf spot",
          pestList: ["Alternaria Leaf Spot","Cercospora Leaf Spot"],
          states: ["All"],
          rate: "2",
          rateMax: "3",
          unit: "kg/ha",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "Low volume: 2–3 kg/ha. WHP: 14 days. Use higher rate and shorter interval when weather favours disease."
        }
      ]
    },

    {
      crop: "Carrots",
      cropList: ["Carrots"],
      weeds: [
        {
          weed: "Cercospora leaf spot (Cercospora carotae), Alternaria leaf spot (Alternaria spp.)",
          pestList: ["Cercospora Leaf Spot","Alternaria Leaf Spot"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Begin when disease first apparent; repeat at 7–10 day intervals",
          note: "High volume: 200 g/100L. Low volume: 2.2 kg/ha. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Celery",
      cropList: ["Celery"],
      weeds: [
        {
          weed: "Early blight (Cercospora apii), Late blight (Septoria apiicola)",
          pestList: ["Early Blight","Late Blight"],
          states: ["Qld", "NSW", "Vic", "Tas", "WA"],
          rate: "2.2",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "Begin when disease first apparent; repeat at weekly intervals",
          note: "Low volume: 2.2 kg/ha. WHP: 2 days."
        }
      ]
    },

    {
      crop: "Cucumbers and Other Cucurbits",
      cropList: ["Cucumbers And Other Cucurbits"],
      weeds: [
        {
          weed: "Downy mildew (Pseudoperonospora cubensis), Gummy stem blight (Didymella bryoniae)",
          pestList: ["Downy Mildew","Gummy Stem Blight"],
          states: ["All"],
          rate: "200",
          rateMax: "300",
          unit: "g/100L",
          stage: "Begin when disease first apparent; repeat at weekly intervals",
          note: "High volume: 200–300 g/100L. Low volume: 2.2–3.5 kg/ha. Cucumbers WHP: 2 days. Other cucurbits WHP: 7 days. Spray both sides of leaves. Add non-ionic surfactant at label rates."
        }
      ]
    },

    {
      crop: "Lettuce",
      cropList: ["Lettuce"],
      weeds: [
        {
          weed: "Downy mildew (Bremia lactucae), Septoria (Septoria lactucae)",
          pestList: ["Downy Mildew","Septoria"],
          states: ["All"],
          rate: "200",
          rateMax: "300",
          unit: "g/100L",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "High volume: 200–300 g/100L. Low volume: 2.2–3.5 kg/ha. WHP: 7 days. Septoria restricted to NSW, Vic, Tas, SA, WA only."
        }
      ]
    },

    {
      crop: "Bulb Onions and Garlic",
      cropList: ["Bulb Onions And Garlic"],
      weeds: [
        {
          weed: "Downy mildew, Purple blotch",
          pestList: ["Downy Mildew","Purple Blotch"],
          states: ["All"],
          rate: "2.2",
          rateMax: "3.5",
          unit: "kg/ha",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "Low volume: 2.2–3.5 kg/ha. WHP: 7 days. Use higher rate and shorter interval when weather favours disease."
        }
      ]
    },

    {
      crop: "Poppies",
      cropList: ["Poppies"],
      weeds: [
        {
          weed: "Downy mildew",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Apply as protectant spray when weather conditions favour disease; repeat at 14-day intervals if conditions persist",
          note: "Low volume: 2.5 kg/ha. WHP: 7 weeks."
        }
      ]
    },

    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Early blight (target spot, Alternaria solani), Late blight (Irish blight, Phytophthora infestans)",
          pestList: ["Early Blight","Late Blight"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "When disease symptoms first appear; repeat every 7–10 days",
          note: "High volume: 150–200 g/100L. Low volume: 1.7–2.5 kg/ha. WHP: 7 days. Use higher rate and shorter interval when weather favours disease. Apply immediately following overhead irrigation if used."
        }
      ]
    },

    {
      crop: "Broadbeans, Faba Beans, Chickpeas, Field Peas, Lentils and Vetch",
      cropList: ["Broadbeans","Faba Beans","Chickpeas","Field Peas","Lentils And Vetch"],
      weeds: [
        {
          weed: "Ascochyta blight, Chocolate spot, Rust, Cercospora, Botrytis grey mould, Black spot",
          pestList: ["Ascochyta Blight","Chocolate Spot","Rust","Cercospora","Botrytis Grey Mould","Black Spot"],
          states: ["All"],
          rate: "1.0",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "Spray when leaves, flowers or pods show first signs of infection and weather conditions are humid or wet",
          note: "Low volume: 1.0–2.2 kg/ha. WHP Harvest: 6 weeks. WHP Grazing: 21 days. Repeat at 2–3 weeks under severe disease or humid conditions. Use high rate for dense crops or severe disease. For improved coverage add registered surfactant at 10–20 mL/100L."
        }
      ]
    },

    {
      crop: "Tobacco",
      cropList: ["Tobacco"],
      weeds: [
        {
          weed: "Blue mould (Peronospora hyoscyami)",
          pestList: ["Blue Mould"],
          states: ["Qld", "NSW", "Vic", "WA"],
          rate: "200",
          rateMax: "250",
          unit: "g/100L",
          stage: "Apply as a complete cover spray at weekly intervals",
          note: "High volume: 200–250 g/100L. Low volume: 2.2–2.7 kg/ha. WHP: not required when used as directed."
        },
        {
          weed: "Brown spot (Alternaria spp.), Frog-eye leaf spot (Cercospora nicotianae)",
          pestList: ["Brown Spot","Frog-eye leaf spot"],
          states: ["Qld", "WA"],
          rate: "200",
          rateMax: "250",
          unit: "g/100L",
          stage: "When disease symptoms first appear; repeat every 7–10 days",
          note: "High volume: 200–250 g/100L. Low volume: 2.2–2.7 kg/ha. WHP: not required when used as directed. Use higher rate and shorter interval in weather favourable to disease."
        }
      ]
    },

    {
      crop: "Tomatoes",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Early blight (target spot, Alternaria solani), Septoria (Septoria lycopersici), Late blight (Irish blight, Phytophthora infestans)",
          pestList: ["Early Blight","Septoria","Late Blight"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "When disease symptoms first appear; repeat at recommended intervals",
          note: "High volume: 150–200 g/100L. Low volume: 2–3 kg/ha. WHP: 14 days. Late blight NOT registered for ACT or NT."
        }
      ]
    }

  ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply by aerial application to bananas.",
    "NOT compatible with integrated mite control programs (IMCP) using predatory mite Typhlodromus pyri in apples/pears.",
    "Grapevine leaves treated must NOT be used for human consumption."
  ],

  compatibility: {
    compatible:   ["Most insecticides and fungicides — check with local dealer first."],
    incompatible: [],
    notes:        ["Jar test recommended before mixing with unfamiliar products."]
  },

  withholding: {
    harvest: "Mangoes: 1 day. Celery, Cucumbers: 2 days. Potatoes, Other cucurbits and other vegetables (incl. onions): 7 days. Pome fruit, Stone fruit, Capsicum, Eggplant, Peppers, Tomatoes and Grapevines: 14 days. Poppies: 7 weeks. Pulses (Broadbeans, Chickpeas, Field Peas, Lentils, Vetch): 6 weeks. Bananas, Tobacco: not required when used as directed.",
    grazing: "DO NOT graze or cut for stockfood for 21 days after application."
  },

  surfactant:     "Non-ionic surfactant at label rates required for Brassicas and Cucumbers. Also beneficial for Pulses (registered surfactant at 10–20 mL/100L) and Bananas (spray oil added to mix).",
  sprayerCleanup: "Rinse spray equipment thoroughly with clean water after use."

};
