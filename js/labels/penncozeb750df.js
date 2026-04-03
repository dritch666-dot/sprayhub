// ─────────────────────────────────────────────────────────
// PENNCOZEB® 750 DF FUNGICIDE (750 g/kg MANCOZEB) — Label Data
// Group M3 (Multi-site) | Dry Flowable (DF)
// Source: UPL_Penncozeb750DF_Label.pdf
// APVMA Approval No: 53987
// UPL Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['penncozeb750df'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Penncozeb® 750 DF Fungicide",
  company: "AMVAC",

  category:         "Fungicides",
  activeIngredient: "750 g/kg mancozeb",
  group:            "Group M3 (Multi-site Fungicide)",
  modeOfAction:     "Multi-site dithiocarbamate — inhibits sulphydryl groups in enzymes involved in fungal cellular respiration and metabolism",
  formulation:      "Dry Flowable (DF)",
  color:            "#4338ca",
  apvma:            "53987",
  labelPdf:         "Source labels/Upl_Penncozeb_750_Df_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/PENNCOZEB_750_DF_BY_NUFARM.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Apple Scab", "Black Spot", "Downy Mildew", "Rust", "Blight", "Anthracnose",
             "Shot hole", "Brown Rot", "Leaf Spot", "Sigatoka", "Blue Mould", "Phomopsis"],
    timing: ["Preventative", "Pre-infection", "Regular protectant program"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Field Crops — Cotton",
      cropList: ["Field Crops","Cotton"],
      weeds: [
        {
          weed: "Alternaria leaf spot — Cotton (Pima var. only)",
          pestList: ["Alternaria Leaf Spot — Cotton"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Begin applications as soon as disease symptoms appear; repeat before each infection period but no later than 7–10 days after last application",
          note: "Ensure thorough coverage of all plant surfaces. DO NOT apply more than 4 sprays per season. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Field Crops — Peanuts",
      cropList: ["Field Crops","Peanuts"],
      weeds: [
        {
          weed: "Cercospora leaf spot, Rust",
          pestList: ["Cercospora Leaf Spot","Rust"],
          states: ["All"],
          rate: "1.7",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "Apply at 10–14 day intervals commencing when disease symptoms first appear",
          note: "Use higher rate and shorter intervals during weather conditions favourable to disease development. WHP: 14 days (H); 14 days (G)."
        }
      ]
    },

    {
      crop: "Field Crops — Pulse Crops",
      cropList: ["Field Crops","Pulse Crops"],
      weeds: [
        {
          weed: "Ascochyta blight, Blackspot, Botrytis grey mould, Chocolate spot, Rust — Broadbeans, Chickpeas, Faba beans, Field peas, Lentils, Lupins, Vetches",
          pestList: ["Ascochyta Blight","Blackspot","Botrytis Grey Mould","Chocolate Spot","Rust — Broadbeans","Chickpeas","Faba Beans","Field Peas","Lentils","Lupins","Vetches"],
          states: ["All"],
          rate: "1.0",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "Spray when leaves, flowers or pods on plants first show signs of infection and weather conditions are likely to remain humid or wet and favour disease development",
          note: "Faba beans: also Cercospora. Lupins: also Anthracnose. If disease pressure is severe, repeat at 2–3 weeks. Use higher rate for dense crops or severe disease. For improved coverage add Bond Adjuvant at 100–140 mL/100 L. WHP: 4 weeks (H); 14 days (G)."
        }
      ]
    },

    {
      crop: "Field Crops — Tobacco",
      cropList: ["Field Crops","Tobacco"],
      weeds: [
        {
          weed: "Blue mould, Brown spot, Frog eye leaf spot",
          pestList: ["Blue Mould","Brown Spot","Frog-eye leaf spot"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at 7-day intervals following a spray at transplanting; seedbed: when plants are 1.5 cm across then twice weekly; field: 7-day intervals commencing 10 days after transplanting, ceasing 7–10 days before first harvest",
          note: "2.2 kg/ha. Spray to wet seedlings without runoff. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Field Crops — Poppies",
      cropList: ["Field Crops","Poppies"],
      weeds: [
        {
          weed: "Downy mildew",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Apply as a protectant spray when weather conditions favour disease development; repeat on 14-day intervals if conditions persist",
          note: "WHP: 7 weeks."
        }
      ]
    },

    {
      crop: "Field Crops — Soybeans",
      cropList: ["Field Crops","Soybeans"],
      weeds: [
        {
          weed: "Rust",
          pestList: ["Rust"],
          states: ["All"],
          rate: "2.2",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "Commence spraying at first sign of disease; then at 7–10 day intervals while warm, rainy weather conditions prevail",
          note: "WHP: 7 days (H); 14 days (G)."
        }
      ]
    },

    {
      crop: "Vegetables — Beans (Green, Broadbeans, Faba Beans, Peas)",
      cropList: ["Vegetables","Green","Broadbeans","Faba Beans","Peas"],
      weeds: [
        {
          weed: "Anthracnose, Rust, Angular leaf spot, Rust (Uromyces viciae-fabae)",
          pestList: ["Anthracnose","Rust","Angular Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Volume for ground equipment: apply 100 L/ha; aircraft: at least 30 L/ha. Add Bond Adjuvant at 100–140 mL/100 L for improved coverage. WHP: 7 days (H); 14 days (G)."
        },
        {
          weed: "Chocolate spot (Botrytis fabae), Suppression of Leaf blight (Ascochyta fabae)",
          pestList: ["Chocolate Spot","Suppression Of Leaf Blight"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.5 kg/ha. If disease is severe repeat at 2–3 week intervals. WHP: 7 days (H); 14 days (G)."
        },
        {
          weed: "Downy mildew — Peas",
          pestList: ["Downy Mildew — Peas"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. WHP: 7 days (H)."
        }
      ]
    },

    {
      crop: "Vegetables — Capsicum",
      cropList: ["Vegetables","Capsicum"],
      weeds: [
        {
          weed: "Target spot",
          pestList: ["Target Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at first sign of disease; repeat at 7–10 day intervals",
          note: "2–3 kg/ha. WHP: 14 days (H)."
        }
      ]
    },

    {
      crop: "Vegetables — Carrots",
      cropList: ["Vegetables","Carrots"],
      weeds: [
        {
          weed: "Alternaria leaf spot, Cercospora leaf spot",
          pestList: ["Alternaria Leaf Spot","Cercospora Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at first sign of disease; then at 7–10 day intervals or more frequently depending on blight conditions",
          note: "1.7–2.2 kg/ha. WHP: 7 days (H)."
        }
      ]
    },

    {
      crop: "Vegetables — Celery",
      cropList: ["Vegetables","Celery"],
      weeds: [
        {
          weed: "Septoria leaf spot (leaf blight)",
          pestList: ["Septoria Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at first sign of disease; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. WHP: 7 days (H)."
        }
      ]
    },

    {
      crop: "Cole Crops (Broccoli, Brussels Sprouts, Cabbage, Cauliflower)",
      cropList: ["Cole Crops","Broccoli","Brussels Sprouts","Cabbage","Cauliflower"],
      weeds: [
        {
          weed: "Alternaria spot, Anthracnose, Downy mildew, Ring spot",
          pestList: ["Alternaria Spot","Anthracnose","Downy Mildew","Ring Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at first sign of disease; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Add surfactant such as Chemwet 1000. WHP: 7 days (H)."
        }
      ]
    },

    {
      crop: "Cucurbits (Cantaloupe, Cucumber, Melons, Pumpkin, Squash, Zucchini)",
      cropList: ["Cucurbits","Cantaloupe","Cucumber","Melons","Pumpkin","Squash","Zucchini"],
      weeds: [
        {
          weed: "Anthracnose, Downy mildew, Gummy stem blight, Septoria spot",
          pestList: ["Anthracnose","Downy Mildew","Gummy Stem Blight","Septoria Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Use higher rate and shorter intervals during weather conditions favourable to disease. WHP: 7 days (H)."
        }
      ]
    },

    {
      crop: "Vegetables — Fennel (Tas only)",
      cropList: ["Vegetables","Fennel"],
      weeds: [
        {
          weed: "Leaf blight (Cercosporidium)",
          pestList: ["Leaf Blight"],
          states: ["Tas"],
          rate: "2.2",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "Apply as a ground spray if disease symptoms are present in November; allow for one repeat treatment 10–14 days later",
          note: "Aerial application may be required in prolonged wet periods. WHP: 14 days (H)."
        }
      ]
    },

    {
      crop: "Vegetables — Potatoes",
      cropList: ["Vegetables","Potatoes"],
      weeds: [
        {
          weed: "Early blight (Target spot), Late blight (Irish blight)",
          pestList: ["Early Blight","Late Blight"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Use higher rate and shorter intervals during weather conditions favourable to disease. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Vegetables — Rhubarb, Spinach, Silverbeet, Beetroot",
      cropList: ["Vegetables","Rhubarb","Spinach","Silverbeet","Beetroot"],
      weeds: [
        {
          weed: "Downy mildew, Rust — Rhubarb",
          pestList: ["Downy Mildew","Rust — Rhubarb"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. WHP: 14 days (H)."
        },
        {
          weed: "Cercospora leaf spot, Downy mildew — Spinach, Silverbeet, Beetroot",
          pestList: ["Cercospora Leaf Spot","Downy Mildew — Spinach","Silverbeet","Beetroot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. WHP: 14 days (H)."
        }
      ]
    },

    {
      crop: "Tomatoes",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Anthracnose, Early blight (Target spot), Grey leaf spot, Late blight (Irish blight), Leaf mould (Fulvia fulva), Phoma rot",
          pestList: ["Anthracnose","Early Blight","Grey Leaf Spot","Late Blight","Leaf Mould","Phoma Rot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at first sign of disease; repeat at 7–10 day intervals",
          note: "2–3 kg/ha. Do not apply to tomato seedlings before transplanting. WHP: 7 days (H)."
        }
      ]
    },

    {
      crop: "Vegetables — Lettuce",
      cropList: ["Vegetables","Lettuce"],
      weeds: [
        {
          weed: "Anthracnose, Downy mildew, Septoria leaf spot",
          pestList: ["Anthracnose","Downy Mildew","Septoria Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Use higher rate and shorter intervals during weather conditions favourable to disease. WHP: 14 days (H)."
        }
      ]
    },

    {
      crop: "Vegetables — Onion and Garlic",
      cropList: ["Vegetables","Onion And Garlic"],
      weeds: [
        {
          weed: "Downy mildew, Purple blotch",
          pestList: ["Downy Mildew","Purple Blotch"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "2.2–3.5 kg/ha. WHP: 7 days (H)."
        }
      ]
    },

    {
      crop: "Fruit — Bananas",
      cropList: ["Fruit","Bananas"],
      weeds: [
        {
          weed: "Leaf spot / Sigatoka (Mycosphaerella musicola)",
          pestList: ["Leaf Spot / Sigatoka"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when weather conditions favour disease outbreak; repeat per locally recommended spray schedules. NSW: ground at 3-week intervals Dec–May. South Qld: 3-week intervals Dec–May",
          note: "Add 600 mL summer oil per 100 L. 2.2–4.5 kg/ha + 3.5–4.2 L summer oil (NSW: 2.2 kg/ha). North Qld, WA, NT: every 2 weeks during wet season, extending to 3 weeks then 4–5 weeks in drier months. Under certain conditions, bag bunches prior to spraying to minimise fruit marking risk. WHP: not required when used as directed."
        },
        {
          weed: "Black pit, Cordana leaf spot, Fruit speckle, Leaf speckle",
          pestList: ["Black Pit","Cordana Leaf Spot","Fruit Speckle","Leaf Speckle"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "North Qld, WA, NT: apply every 2 weeks during wet season, extending to 3 weeks then 4–5 weeks during drier months",
          note: "2.2 kg/ha. WHP: not required when used as directed."
        },
        {
          weed: "Anthracnose (Colletotrichum musae)",
          pestList: ["Anthracnose"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at weekly intervals during flowering then at two-week intervals until near harvest",
          note: "Add 600 mL miscible summer oil. 2.2 kg/ha + 3.5–4 L miscible summer oil. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Citrus",
      cropList: ["Tree And Vine Crops","Citrus"],
      weeds: [
        {
          weed: "Black spot",
          pestList: ["Black Spot"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Heavy soil: spray at 8 and 15 weeks following Bordeaux (5-5-100) spray at petal fall. Light soil: spray at 6 and 13 weeks following Bordeaux (3.5-3.5-100) at petal fall",
          note: "Add 250 mL polyphase summer oil per 100 L (light soil: plus adjuvant per label). Qld, NT: add 600 mL polyphase summer oil or miscible summer oil per 100 L and spray 6–12 weeks after copper spray at 0.5–0.75 petal fall. WHP: not required when used as directed."
        },
        {
          weed: "Brown citrus mite, Citrus rust mite",
          pestList: ["Brown Citrus Mite","Citrus Rust Mite"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at first sign of rust or citrus mite (usually December to May)",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "Citrus bud mite",
          pestList: ["Citrus Bud Mite"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when blossom malformation is observed, usually February",
          note: "WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Custard Apples",
      cropList: ["Tree And Vine Crops","Custard Apples"],
      weeds: [
        {
          weed: "Pseudocercospora fruit spot",
          pestList: ["Pseudocercospora Fruit Spot"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Do not apply during flowering; apply at 3–4 week intervals from first fruit set until harvest; apply at 2-week intervals in wet cloudy weather",
          note: "WHP: 1 day (H)."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Grapevines",
      cropList: ["Tree And Vine Crops","Grapevines"],
      weeds: [
        {
          weed: "Black spot, Downy mildew",
          pestList: ["Black Spot","Downy Mildew"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "For black spot: spray commencing at bud burst, repeat every 14 days. For downy mildew: begin spray at 10–15 cm stage of shoot growth; continue at 10–14 day intervals until disease threat is over",
          note: "WHP: 30 days."
        },
        {
          weed: "Phomopsis, Cane and Leaf spot",
          pestList: ["Phomopsis","Cane And Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at bud burst and repeat 7–10 days later",
          note: "WHP: 30 days."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Mangoes",
      cropList: ["Tree And Vine Crops","Mangoes"],
      weeds: [
        {
          weed: "Anthracnose (Colletotrichum gloeosporiodes)",
          pestList: ["Anthracnose"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at weekly intervals during flowering then monthly until harvest",
          note: "Use sufficient water for good coverage. DO NOT apply as a tank mix with methidathion (Supracide) as phytotoxicity may result. WHP: 1 day."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Passionfruit",
      cropList: ["Tree And Vine Crops","Passionfruit"],
      weeds: [
        {
          weed: "Brown spot (Alternaria passiflorae), Septoria spot",
          pestList: ["Brown Spot","Septoria Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "g/100L",
          stage: "Apply at 10–14 day intervals from October to May; every 21–28 days for remainder of year",
          note: "WHP: 1 day."
        },
        {
          weed: "Anthracnose (NSW only)",
          pestList: ["Anthracnose"],
          states: ["NSW"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at weekly intervals during flowering then fortnightly near harvest",
          note: "Add 600 mL miscible summer oil per 100 L. WHP: not stated."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Pawpaws (Papaya)",
      cropList: ["Tree And Vine Crops","Pawpaws"],
      weeds: [
        {
          weed: "Blackspot",
          pestList: ["Blackspot"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply at 10–14 day intervals during periods conducive to disease",
          note: "Add mancozeb plus a wetting agent. WHP: 1 day (H)."
        }
      ]
    },

    {
      crop: "Pome Fruits (Apples, Pears)",
      cropList: ["Pome Fruits","Apples","Pears"],
      weeds: [
        {
          weed: "Apple Scab (Black spot), Bitter rot, Fly speck, Pear Scab, Ripe fruit spot, Sooty blotch, Target spot",
          pestList: ["Apple Scab","Bitter Rot","Fly Speck","Pear Scab","Ripe Fruit Spot","Sooty Blotch","Target Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at 7–14 day intervals following green tip copper spray",
          note: "Use higher rate and shorter spray interval during prolonged wet conditions. Product not suitable for use in integrated mite control programs (Tas. only). Apply by dilute or concentrate spraying — apply same total amount whether dilute or concentrate. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Stone Fruits (Almonds, Apricots, Cherries, Nectarines, Peaches, Plums)",
      cropList: ["Stone Fruits","Almonds","Apricots","Cherries","Nectarines","Peaches","Plums"],
      weeds: [
        {
          weed: "Brown rot, Freckle rust, Shot hole",
          pestList: ["Brown Rot","Freckle Rust","Shot Hole"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at early bloom (1–10%), mid to full bloom (50–100%), petal and shuck fall, then at intervals of 14 days",
          note: "Apply by dilute or concentrate spraying. Apply same total amount whether dilute or concentrate. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Ornamentals — Diseases",
      cropList: ["Ornamentals"],
      weeds: [
        {
          weed: "Rust, Alternaria leaf spot — Carnations; Septoria leaf spot — Flowers, Shrubs; Botrytis leaf spot — Ferns; Grey mould (Botrytis), Septoria leaf spot, Rust — Gladioli, Chrysanthemums; Black spot — Roses",
          pestList: ["Rust","Alternaria Leaf Spot — Carnations; Septoria Leaf Spot — Flowers","Shrubs; Botrytis Leaf Spot — Ferns; Grey Mould","Septoria Leaf Spot","Rust — Gladioli","Chrysanthemums; Black Spot — Roses"],
          states: ["All"],
          rate: "75",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–14 day intervals",
          note: "Ferns (Botrytis leaf spot): 75–100 g/100 L. Carnations (Rust, Alternaria): 150–200 g/100 L. All others: 150–200 g/100 L. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Turf",
      cropList: ["Turf"],
      weeds: [
        {
          weed: "Fusarium, Rhizoctonia, Helminthosporium",
          pestList: ["Fusarium","Rhizoctonia","Helminthosporium"],
          states: ["All"],
          rate: "200",
          rateMax: "250",
          unit: "g/100m2",
          stage: "Apply every 7 days throughout susceptible periods",
          note: "Spray in sufficient water for adequate coverage. DO NOT feed grass clippings from treated areas to poultry or animals. WHP: not required when used as directed."
        }
      ]
    }

  ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "Dangerous to fish. DO NOT contaminate streams, rivers or waterways with the chemical or used containers.",
    "DO NOT allow entry into treated areas until spray has dried.",
    "DO NOT use human flaggers/markers unless protected by engineering controls such as enclosed cabs.",
    "This product may be harmful to Typholodromus pyri — do not use in orchards where integrated control methods are practiced.",
    "DO NOT apply as a tank mix with methidathion (Supracide) with mango crops as phytotoxicity may result.",
    "Cotton, Peanuts, Pulse crops, Soybeans: DO NOT graze or cut for stockfood for 14 days after last application."
  ],

  compatibility: {
    compatible:   ["Most commonly used agricultural fungicides and insecticides."],
    incompatible: ["Methidathion (Supracide) with mangoes — may cause phytotoxicity."],
    notes:        ["Partly fill spray tank with water and agitate while adding this product slowly. The use of Bond® Adjuvant may improve spray deposition and rainfastness."]
  },

  withholding: {
    harvest: "Green Beans, Carrots, Celery, Cole Crops, Cucurbits, Garlic, Onion, Peas, Soybeans, Tomatoes: 7 days. Almonds, Beetroot, Capsicum, Cotton, Fennel, Lettuce, Peanuts, Pome Fruit, Rhubarb, Silverbeet, Spinach, Stone Fruit: 14 days. Custard Apple, Mangoes, Passionfruit, Pawpaws (Papaya): 1 day. Pulse Crops (green): 7 days; (grain): 4 weeks. Grapevines: 30 days. Poppies: 49 days. Bananas, Citrus, Potatoes, Tobacco: not required when used as directed.",
    grazing: "Cotton: DO NOT allow livestock to graze cotton crop, stubble or gin trash. Green Legumes, Peanuts, Pulse Crops, Soybeans: DO NOT graze or cut for stockfood for 14 days after last application. Papaya: DO NOT use or supply treated papaya including leaves for stock food."
  },

  surfactant:     "Bond® Adjuvant recommended to improve spray deposition and rainfastness. Add Chemwet 1000 or Spraymate Bond for cole crops, cucurbits, and legumes.",
  sprayerCleanup: "Partly fill spray tank with water and agitate while adding this product slowly. Continue agitation after filling and during spraying. Rinse out spray tank pumps and nozzles at the end of the day."

};
