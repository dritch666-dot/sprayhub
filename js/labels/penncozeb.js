// ─────────────────────────────────────────────────────────
// PENNCOZEB® FUNGICIDE (800 g/kg MANCOZEB) — Label Data
// Group M3 (Multi-site) | Wettable Powder (WP)
// Source: Nufarm_Penncozeb_Label.pdf
// APVMA Approval No: 53986
// Nufarm Australia Limited / Atofina (Australia) Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['penncozeb'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Penncozeb® Fungicide",
  company: "AMVAC",

  category:         "Fungicides",
  activeIngredient: "800 g/kg mancozeb",
  group:            "Group M3 (Multi-site Fungicide)",
  modeOfAction:     "Multi-site dithiocarbamate — inhibits sulphydryl groups in enzymes involved in fungal cellular respiration and metabolism",
  formulation:      "Wettable Powder (WP)",
  color:            "#1c1917",
  apvma:            "53986",
  labelPdf:         "Source labels/Nufarm_Penncozeb_Label.pdf",
  sdsPdf:           "SDS Labels/PENNCOZEB_750_DF_BY_NUFARM.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Apple Scab", "Black Spot", "Downy Mildew", "Rust", "Blight", "Anthracnose",
             "Shot hole", "Brown Rot", "Leaf Spot", "Sigatoka", "Blue Mould"],
    timing: ["Preventative", "Pre-infection", "Regular protectant program"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Field Crops — Peanuts",
      cropList: ["Field Crops","Peanuts"],
      weeds: [
        {
          weed: "Cercospora leaf spot, Rust",
          pestList: ["Cercospora Leaf Spot","Rust"],
          states: ["Qld", "NSW", "WA"],
          rate: "1.7",
          rateMax: "1.7",
          unit: "kg/ha",
          stage: "Apply at 10–14 day intervals commencing when disease symptoms first appear",
          note: "Use higher rate and shorter intervals during weather conditions favourable to disease development. Add surfactant such as Spraymate Bond or Chemwet 1000 at 40 mL/ha. WHP: 14 days."
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
          note: "Spray in 200–400 L water/ha for ground equipment and 50 L water for aerial application. Add surfactant such as Chemwet 1000. WHP: 7 days."
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
          states: ["NSW", "ACT", "Qld", "Vic", "WA"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at 7-day intervals following a spray at transplanting; seedbed: spray when plants are 1.5 cm across then twice weekly; field: 7-day intervals commencing 10 days after transplanting, ceasing 7–10 days before first harvest",
          note: "Seedbed treatments: spray to wet seedlings without runoff. Field treatments: increase spray volume as plant size increases. Frog eye leaf spot: Qld and WA only. WHP: 7 days."
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
          states: ["Tas"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Apply as a protectant spray when weather conditions favour disease development; repeat on 14-day intervals if conditions persist",
          note: "WHP: 7 weeks."
        }
      ]
    },

    {
      crop: "Vegetables — Beans and Broadbeans",
      cropList: ["Vegetables","Beans And Broadbeans"],
      weeds: [
        {
          weed: "Rust, Anthracnose, Angular leaf spot",
          pestList: ["Rust","Anthracnose","Angular Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at first sign of disease; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. For improved coverage and spray retention add Spraymate Bond or Chemwet 1000 adjuvant. WHP: 7 days."
        },
        {
          weed: "Chocolate spot (Botrytis fabae), Suppression of leaf blight (Ascochyta fabae), Rust (Uromyces viciae-fabae)",
          pestList: ["Chocolate Spot","Suppression Of Leaf Blight","Rust"],
          states: ["NSW", "ACT", "Tas", "Vic", "WA", "SA"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at first sign of disease; repeat at 7–10 day intervals",
          note: "1.7–2.5 kg/ha. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Vegetables — Carrots",
      cropList: ["Vegetables","Carrots"],
      weeds: [
        {
          weed: "Cercospora leaf spot, Alternaria leaf spot",
          pestList: ["Cercospora Leaf Spot","Alternaria Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at first sign of disease, then at 7–10 day intervals or more frequently depending on blight conditions",
          note: "1.7–2.2 kg/ha. WHP: 7 days."
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
          note: "1.7–2.2 kg/ha. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Cole Crops (Cabbage, Cauliflower, Brussels Sprouts, Broccoli)",
      cropList: ["Cole Crops","Cabbage","Cauliflower","Brussels Sprouts","Broccoli"],
      weeds: [
        {
          weed: "Anthracnose, Downy Mildew, Alternaria spot, Ring spot",
          pestList: ["Anthracnose","Downy Mildew","Alternaria Spot","Ring Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at first sign of disease; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Add surfactant such as Chemwet 1000. Broccoli: all states except Vic. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Cucurbits (Cucumber, Cantaloupe, Pumpkin, Melons, Zucchini, Squash)",
      cropList: ["Cucurbits","Cucumber","Cantaloupe","Pumpkin","Melons","Zucchini","Squash"],
      weeds: [
        {
          weed: "Downy Mildew, Anthracnose, Gummy stem blight, Septoria spot (Pumpkins — Qld and WA only)",
          pestList: ["Downy Mildew","Anthracnose","Gummy Stem Blight","Septoria Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Use higher rate and shorter intervals during weather conditions favourable to disease development. Add surfactant such as Chemwet 1000 for improved coverage and spray retention. WHP: 7 days."
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
          note: "2–3 kg/ha. Use higher rate and shorter intervals during weather conditions favourable to disease development. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Vegetables — Lettuce",
      cropList: ["Vegetables","Lettuce"],
      weeds: [
        {
          weed: "Downy Mildew, Anthracnose, Septoria leaf blight or spot",
          pestList: ["Downy Mildew","Anthracnose","Septoria Leaf Blight Or Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Use higher rate and shorter intervals during weather conditions favourable to disease development. WHP: 14 days."
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
          note: "2.2–3.5 kg/ha. WHP: 7 days."
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
          note: "1.7–2.2 kg/ha. Use higher rate and shorter intervals during weather conditions favourable to disease development. WHP: 7 days."
        },
        {
          weed: "Fusarium seed piece decay",
          pestList: ["Fusarium Seed Piece Decay"],
          states: ["WA"],
          rate: "250",
          rateMax: "250",
          unit: "g/100L",
          stage: "Dip whole or cut potato tubers before planting",
          note: "Place treated pieces in clean containers and plant as soon as possible. Spread in cool place if held before planting. DO NOT use treated seed potatoes for human consumption or stockfeed. WHP: not applicable."
        }
      ]
    },

    {
      crop: "Vegetables — Rhubarb",
      cropList: ["Vegetables","Rhubarb"],
      weeds: [
        {
          weed: "Downy mildew, Rust",
          pestList: ["Downy Mildew","Rust"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Rust: NSW, ACT, WA and Tas only. Use higher rate and shorter intervals during weather conditions favourable to disease. Add surfactant such as Chemwet 1000. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Vegetables — Spinach, Silverbeet, Beetroot",
      cropList: ["Vegetables","Spinach","Silverbeet","Beetroot"],
      weeds: [
        {
          weed: "Downy mildew, Cercospora leaf spot",
          pestList: ["Downy Mildew","Cercospora Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Tomatoes",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Early blight (Target spot), Late blight (Irish blight), Anthracnose, Leaf mould (Fulvia fulva), Grey leaf spot, Phoma rot",
          pestList: ["Early Blight","Late Blight","Anthracnose","Leaf Mould","Grey Leaf Spot","Phoma Rot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at first sign of disease; repeat at 7–10 day intervals",
          note: "Do not apply to tomato seedlings before transplanting. Use higher rate and shorter intervals during weather conditions favourable to disease development. Grey leaf spot and Phoma rot: NSW, ACT, WA and Qld only. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Pome Fruits (Apples, Pears)",
      cropList: ["Pome Fruits","Apples","Pears"],
      weeds: [
        {
          weed: "Apple scab (Black spot), Target spot, Bitter rot, Sooty blotch, Fly speck, Ripe fruit spot",
          pestList: ["Apple Scab","Target Spot","Bitter Rot","Sooty Blotch","Fly Speck","Ripe Fruit Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at 7–14 day intervals following green tip copper spray; apply by dilute or concentrate spraying",
          note: "Ripe fruit spot: Qld and WA only. Use higher rate and shorter spray interval during prolonged wet conditions. Product not suitable for use in integrated mite control programs (Tas. only). Apply the same total amount of product whether dilute or concentrate spraying. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Stone Fruits (Peaches, Apricots, Plums, Cherries, Nectarines)",
      cropList: ["Stone Fruits","Peaches","Apricots","Plums","Cherries","Nectarines"],
      weeds: [
        {
          weed: "Rust, Shothole, Freckle, Brown rot",
          pestList: ["Rust","Shothole","Freckle","Brown Rot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at early bloom (1–10%), mid to full bloom (50–100%), petal and shuck fall, then at intervals of 14 days",
          note: "Brown rot: Vic, Tas, WA, SA, NSW, ACT only. Cherries: Vic, Tas, WA only. Apply by dilute or concentrate spraying. Apply the same total amount whether dilute or concentrate spraying. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Grapevines",
      cropList: ["Grapevines"],
      weeds: [
        {
          weed: "Blackspot, Downy mildew",
          pestList: ["Blackspot","Downy Mildew"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "For black spot: spray commencing at bud burst, repeat every 14 days. For downy mildew: begin spray application at 10–15 cm stage of shoot growth; continue at 10–14 day intervals until disease threat is over",
          note: "Apply by dilute or concentrate spraying. Apply the same total amount whether dilute or concentrate spraying. WHP: 30 days."
        },
        {
          weed: "Deadarm",
          pestList: ["Deadarm"],
          states: ["Qld", "WA"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at bud burst and repeat 7–10 days later",
          note: "Apply by dilute or concentrate spraying. WHP: 30 days."
        },
        {
          weed: "Phomopsis Cane and Leaf spot",
          pestList: ["Phomopsis Cane And Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at bud burst and then repeat 7–10 days later",
          note: "Apply by dilute or concentrate spraying. Apply the same total amount whether dilute or concentrate spraying. WHP: 30 days."
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
          states: ["Qld", "NSW", "WA"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at weekly intervals during flowering then monthly until harvest",
          note: "Use sufficient water for good coverage. Add surfactant such as Chemwet 1000. Apply by dilute or concentrate spraying. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Passionfruit",
      cropList: ["Passionfruit"],
      weeds: [
        {
          weed: "Septoria spot, Brown spot (Memaria passiflorae)",
          pestList: ["Septoria Spot","Brown Spot"],
          states: ["Qld", "WA"],
          rate: "150",
          rateMax: "150",
          unit: "g/100L",
          stage: "Apply at 10–14 day intervals from October to May; every 21–28 days for remainder of year",
          note: "Apply by dilute or concentrate spraying. WHP: 14 days."
        },
        {
          weed: "Anthracnose",
          pestList: ["Anthracnose"],
          states: ["NSW", "ACT", "WA"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray at weekly intervals during flowering; then fortnightly near harvest",
          note: "Mix with 500 mL miscible summer oil per 100 L. Apply by dilute or concentrate spraying. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
        {
          weed: "Black spot",
          pestList: ["Black Spot"],
          states: ["NSW", "ACT", "Tas", "Vic", "WA"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Heavy soil: spray at 8 and 15 weeks following a Bordeaux spray (5-5-100) at petal fall. Light soil: spray at 6 and 13 weeks following a Bordeaux spray (3.5-3.5-100)",
          note: "Add 250 mL white oil per 100 L. Plus 100–140 mL Spraymate Bond Adjuvant per 100 L for light soils. Apply by dilute or concentrate spraying. WHP: not required when used as directed."
        },
        {
          weed: "Black spot",
          pestList: ["Black Spot"],
          states: ["Qld"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray 6–12 weeks after a copper spray at 0.5–0.75 petal fall",
          note: "Add 600 mL white oil per 100 L. Apply by dilute or concentrate spraying. WHP: not required when used as directed."
        },
        {
          weed: "Citrus rust mite, Brown citrus mite, Citrus bud mite",
          pestList: ["Citrus Rust Mite","Brown Citrus Mite","Citrus Bud Mite"],
          states: ["Qld", "WA"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Rust mite: spray at first sign of rust or citrus mite (usually December to May). Bud mite: apply when blossom malformation is observed (usually February)",
          note: "Apply by dilute or concentrate spraying. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Bananas",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Cercospora leaf spot (Sigatoka disease, Mycosphaerella musicola)",
          pestList: ["Cercospora Leaf Spot"],
          states: ["NSW", "WA"],
          rate: "200",
          rateMax: "400",
          unit: "g/100L",
          stage: "Apply when weather conditions favour disease outbreak; repeat in accordance with locally recommended spray schedules. NSW/South Qld: apply at 3-week intervals from December/January until May",
          note: "Add 3.5–4.0 L miscible summer oil per 2.2 kg. North Queensland: apply every 2 weeks during wet season; extend to 3 weeks then 4–5 weeks during drier months. Use sufficient water to ensure coverage. WHP: 14 days."
        },
        {
          weed: "Leaf spot, Leaf speckle, Cordana leaf spot, Fruit freckle and Black pit",
          pestList: ["Leaf Spot","Leaf Speckle","Cordana Leaf Spot","Fruit Freckle And Black Pit"],
          states: ["Qld", "WA"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply at 3-week intervals from December/January to May; North Qld: every 2 weeks during wet season",
          note: "Add 600 mL summer oil per 100 L (2.2–4.5 kg/ha + 3.5–4.2 L summer oil or water-miscible oil). WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Ornamentals — Diseases",
      cropList: ["Ornamentals"],
      weeds: [
        {
          weed: "Rust, Alternaria leaf spot — Carnations",
          pestList: ["Rust","Alternaria Leaf Spot — Carnations"],
          states: ["Tas", "WA"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–14 day intervals",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "Septoria leaf spot — Flowers, Shrubs",
          pestList: ["Septoria Leaf Spot — Flowers","Shrubs"],
          states: ["NSW", "ACT", "WA"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "Botrytis leaf spot — Roses and general",
          pestList: ["Botrytis Leaf Spot — Roses And General"],
          states: ["All"],
          rate: "75",
          rateMax: "100",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "Grey mould (Botrytis), Septoria leaf spot, Rust — Gladioli, Chrysanthemums",
          pestList: ["Grey Mould","Septoria Leaf Spot","Rust — Gladioli","Chrysanthemums"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear",
          note: "Rust: Tas and WA only. WHP: not required when used as directed."
        },
        {
          weed: "Black spot — Roses",
          pestList: ["Black Spot — Roses"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when disease symptoms first appear; repeat at 7–10 day intervals",
          note: "WHP: not required when used as directed."
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
          note: "Spray in sufficient water for adequate coverage. DO NOT feed grass clippings from treated turf areas to poultry or animals. WHP: not required when used as directed."
        }
      ]
    }

  ,
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      weeds: [
          { weed: "pepper spot", pestList: ["Pepper Spot"], states: ["All"], rate: "213", unit: "g/100L", rateText: "213g/100L", notes: "WHP: 7 days. Spray every 4 weeks from the end of flowering to harvest. During extended wet weather, spray every 14 days" }
      ]
    }
    ,

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER13958: Rubus/Ribes/Blueberries — Botrytis & Rust ──
  {
    crop: "Rubus spp. — Grey Mould (PER13958)",
    cropList: ["Rubus spp."],
    permitNumber: "PER13958",
    weeds: [
      {
        weed: "Grey Mould (Botrytis cinerea)",
        pestList: ["Fungal Diseases", "Botrytis", "Grey Mould"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "200",
        rateMax: "200",
        unit: "g/100L",
        stage: "Apply early bloom; repeat at 10-14 day interval; air blast, boom or knapsack units",
        note: "PERMIT PER13958 (exp. 31 August 2030). Mancozeb fungicide on brambles. DO NOT exceed 4.0 kg ac/ha per season. WHP: 7 days."
      }
    ]
  },

  {
    crop: "Ribes spp. — Grey Mould (PER13958)",
    cropList: ["Ribes spp."],
    permitNumber: "PER13958",
    weeds: [
      {
        weed: "Grey Mould (Botrytis cinerea)",
        pestList: ["Fungal Diseases", "Botrytis", "Grey Mould"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "200",
        rateMax: "200",
        unit: "g/100L",
        stage: "Apply early bloom; repeat at 10-14 day interval; use lower interval during higher disease threat",
        note: "PERMIT PER13958 (exp. 31 August 2030). Mancozeb fungicide on Ribes. DO NOT exceed 4.0 kg ac/ha per season. WHP: 7 days."
      }
    ]
  },

  {
    crop: "Blueberries — Grey Mould (PER13958)",
    cropList: ["Blueberries"],
    permitNumber: "PER13958",
    weeds: [
      {
        weed: "Grey Mould (Botrytis cinerea)",
        pestList: ["Fungal Diseases", "Botrytis", "Grey Mould"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "200",
        rateMax: "200",
        unit: "g/100L",
        stage: "Apply early bloom; repeat at 10-14 day interval; shorter interval during higher disease threat",
        note: "PERMIT PER13958 (exp. 31 August 2030). Mancozeb 750/800 DF on blueberries. DO NOT exceed 4.0 kg ac/ha per season. WHP: 7 days."
      }
    ]
  },

  {
    crop: "Blueberries — Rust (PER13958)",
    cropList: ["Blueberries"],
    permitNumber: "PER13958",
    weeds: [
      {
        weed: "Rust (Fungal Disease)",
        pestList: ["Fungal Diseases", "Rust"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "187",
        rateMax: "188",
        unit: "g/100L",
        stage: "Apply early bloom; repeat at 10-14 day intervals; continue spraying until disease threat has passed",
        note: "PERMIT PER13958 (exp. 31 August 2030). Mancozeb 800 DF fungicide on blueberries. DO NOT exceed 4.0 kg ac/ha per season. WHP: 7 days."
      }
    ]
  },

  {
    crop: "Blueberries — Mildew (PER13958)",
    cropList: ["Blueberries"],
    permitNumber: "PER13958",
    weeds: [
      {
        weed: "Mildew (Fungal Disease)",
        pestList: ["Fungal Diseases", "Mildew"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "187",
        rateMax: "188",
        unit: "g/100L",
        stage: "Apply early bloom; 10-14 day intervals; lower interval when disease threat is higher; use adequate water volume",
        note: "PERMIT PER13958 (exp. 31 August 2030). Mancozeb on blueberries. DO NOT exceed 4.0 kg ac/ha per season. WHP: 7 days."
      }
    ]
  },

  // ── PER14958: Brassica Leafy Vegetables & Other Vegetables ──
  {
    crop: "Brassica Leafy Vegetables — Downy Mildew (PER14958)",
    cropList: ["Brassica Leafy Vegetables", "Silverbeet", "Spinach", "Leafy Lettuce", "Chicory", "Endive", "Parsley", "Radicchio", "Rocket"],
    permitNumber: "PER14958",
    weeds: [
      {
        weed: "Downy Mildew (Peronospora parasitica, Peronospora spp., Pseudoperonospora spp., Bremia lactucae)",
        pestList: ["Fungal Diseases", "Downy Mildew"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "1500",
        rateMax: "1500",
        unit: "g/ha",
        stage: "Preventative treatment when conditions favour disease; 7-10 day intervals; thorough coverage essential; DO NOT apply more than 4 applications per crop",
        note: "PERMIT PER14958 (exp. 31 October 2027). Mancozeb 800 DF on brassicas and leafy vegetables. WHP: 14 days."
      }
    ]
  },

  {
    crop: "Brassica Leafy Vegetables — White Blister (PER14958)",
    cropList: ["Brassica Leafy Vegetables"],
    permitNumber: "PER14958",
    weeds: [
      {
        weed: "White Blister (Albugo candida)",
        pestList: ["Fungal Diseases", "White Blister"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "1500",
        rateMax: "1500",
        unit: "g/ha",
        stage: "Preventative treatment; 7-10 day intervals; shorter interval during high infection risk; minimum 7-day gap between applications",
        note: "PERMIT PER14958 (exp. 31 October 2027). Mancozeb fungicide on brassicas. WHP: 14 days."
      }
    ]
  },

  {
    crop: "Vegetables — Alternaria Leaf Spots (PER14958)",
    cropList: ["Parsley", "Radicchio", "Radish"],
    permitNumber: "PER14958",
    weeds: [
      {
        weed: "Alternaria Leaf Spots (Alternaria spp.)",
        pestList: ["Fungal Diseases", "Alternaria"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "1500",
        rateMax: "1500",
        unit: "g/ha",
        stage: "Preventative treatment; 7-10 day intervals; thorough foliage coverage including under-leaf surfaces",
        note: "PERMIT PER14958 (exp. 31 October 2027). Mancozeb on vegetables. WHP: 14 days."
      }
    ]
  },

  // ── PER80538: Brassica Vegetables, Chicory, Parsley, Root Crops ──
  {
    crop: "Radish, Swede & Turnip — Cercospora Leaf Spot (PER80538)",
    cropList: ["Radish", "Swede", "Turnip"],
    permitNumber: "PER80538",
    weeds: [
      {
        weed: "Cercospora Leaf Spot (Cercospora spp.)",
        pestList: ["Fungal Diseases", "Cercospora"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "200",
        rateMax: "200",
        unit: "g/100L",
        stage: "Preventative treatment when wet/humid weather favours disease; spray volume 200-1,100 L/ha; thorough coverage essential",
        note: "PERMIT PER80538 (exp. 31 May 2030). Mancozeb 750/800 DF on root crops. DO NOT apply more than 4 applications per crop; minimum 7-day interval. WHP: 14 days."
      }
    ]
  },

  {
    crop: "Radish, Swede & Turnip — Alternaria (PER80538)",
    cropList: ["Radish", "Swede", "Turnip"],
    permitNumber: "PER80538",
    weeds: [
      {
        weed: "Alternaria (Alternaria spp.)",
        pestList: ["Fungal Diseases", "Alternaria"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "2200",
        rateMax: "2200",
        unit: "g/ha",
        stage: "Preventative treatment; 7-day minimum retreatment interval; use higher rate during disease-favourable weather",
        note: "PERMIT PER80538 (exp. 31 May 2030). Mancozeb on root crops. DO NOT apply more than 4 applications per crop. WHP: 14 days."
      }
    ]
  },

  {
    crop: "Radish, Swede & Turnip — White Blister (PER80538)",
    cropList: ["Radish", "Swede", "Turnip"],
    permitNumber: "PER80538",
    weeds: [
      {
        weed: "White Blister (Albugo candida)",
        pestList: ["Fungal Diseases", "White Blister"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "2200",
        rateMax: "2200",
        unit: "g/ha",
        stage: "Preventative when conditions favour disease; 7-day minimum intervals; shorter interval during high risk",
        note: "PERMIT PER80538 (exp. 31 May 2030). Mancozeb 750/800 DF on root crops. DO NOT apply more than 4 applications. WHP: 14 days."
      }
    ]
  },

  {
    crop: "Parsley, Chicory & Brassica Leafy Vegetables — Anthracnose (PER80538)",
    cropList: ["Parsley", "Chicory", "Brassica Leafy Vegetables"],
    permitNumber: "PER80538",
    weeds: [
      {
        weed: "Anthracnose (Colletotrichum spp.)",
        pestList: ["Fungal Diseases", "Anthracnose"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "1700",
        rateMax: "2200",
        unit: "g/ha",
        stage: "Preventative treatment; 7-day minimum intervals; DO NOT apply more than 8 applications per crop; thorough foliage coverage",
        note: "PERMIT PER80538 (exp. 31 May 2030). Mancozeb on brassicas and leafy crops. Use higher rate when disease conditions favourable. WHP: 14 days."
      }
    ]
  },

  {
    crop: "Parsley, Chicory & Brassica Leafy Vegetables — Septoria (PER80538)",
    cropList: ["Parsley", "Chicory", "Brassica Leafy Vegetables"],
    permitNumber: "PER80538",
    weeds: [
      {
        weed: "Septoria (Septoria spp.)",
        pestList: ["Fungal Diseases", "Septoria"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "1700",
        rateMax: "2200",
        unit: "g/ha",
        stage: "Preventative treatment; 7-day minimum intervals; DO NOT apply more than 8 applications per crop; use shorter interval during disease-favourable weather",
        note: "PERMIT PER80538 (exp. 31 May 2030). Mancozeb on parsley, chicory, brassicas. WHP: 14 days."
      }
    ]
  },

  // ── PER93622: Jojoba — Black Scab ──
  {
    crop: "Jojoba — Black Scab (PER93622)",
    cropList: ["Jojoba"],
    permitNumber: "PER93622",
    weeds: [
      {
        weed: "Black Scab (Elsinoe australis)",
        pestList: ["Fungal Diseases", "Scab"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "200",
        rateMax: "200",
        unit: "g/100L",
        stage: "Protectant spray; apply bud swell to flowering (August-September) and post-harvest (March-June); air-blast or knapsack sprayer; 14-day minimum intervals",
        note: "PERMIT PER93622 (exp. 31 January 2031). Mancozeb 750/800 DF on jojoba. DO NOT apply more than 4 applications per season. DO NOT supply commodities for human or animal consumption. No WHP."
      }
    ]
  }

  ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "Dangerous to fish. DO NOT contaminate streams, rivers or waterways with the chemical or used containers.",
    "DO NOT feed crops or trash to livestock.",
    "This product may be harmful to Typholodromus pyri — do not use in orchards where integrated control methods are practiced.",
    "DO NOT graze livestock on crops including peanuts and soybeans treated with this product.",
    "DO NOT feed grass clippings from treated turf areas to poultry or animals.",
    "Grapevines: WHP 30 days. Poppies: WHP 49 days."
  ],

  compatibility: {
    compatible:   ["Most commonly used agricultural fungicides and insecticides."],
    incompatible: ["Methidathion (Supracide) with mangoes — may cause phytotoxicity."],
    notes:        ["Partly fill spray tank with water and agitate while adding this product slowly. The use of Spraymate Bond Adjuvant may improve spray deposition and rainfastness."]
  },

  withholding: {
    harvest: "Beans, Carrots, Celery, Cole Crops, Cucurbits, Garlic, Onion, Potatoes, Soybeans, Tobacco: 7 days. Almonds, Bananas, Beetroot, Capsicum, Lettuce, Mangoes, Nectarines, Passionfruit, Peanuts, Pome Fruit, Rhubarb, Silverbeet, Spinach, Stone Fruit, Tomatoes: 14 days. Grapevines: 30 days. Poppies: 49 days.",
    grazing: "DO NOT graze livestock on crops treated with this product. DO NOT feed treated crops and/or trash to livestock."
  },

  surfactant:     "Spraymate Bond Adjuvant or Chemwet 1000 recommended for peanuts, soybeans, cole crops, cucurbits, and mangoes to improve spray deposition and rainfastness.",
  sprayerCleanup: "Single rinse before disposal. Add rinsings to spray tank. DO NOT dispose of undiluted chemical on site. Rinse out spray tank pumps and nozzles at the end of the day."

};
