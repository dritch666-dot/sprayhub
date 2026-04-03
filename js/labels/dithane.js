// ─────────────────────────────────────────────────────────
// DITHANE RAINSHIELD NEO TEC FUNGICIDE — Label Data
// Group M3 (Multi-site / EBDC) | Water Dispersible Granule (WDG)
// Source: Corteva_DithaneRainshieldNeoTec_Label.pdf
// APVMA Approval No: 59688
// Corteva Agriscience Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['dithane'] = {

  name:             "Dithane® Rainshield® Neo Tec® Fungicide",
  company: "AMVAC",


  category:         "Fungicides",
  activeIngredient: "750 g/kg Mancozeb",
  group:            "Group M3 (Multi-site Fungicide / EBDC)",
  modeOfAction:     "Multi-site inhibitor — disrupts multiple enzyme systems in fungal cells",
  formulation:      "Water Dispersible Granule (WDG)",
  color:            "#1e40af",
  apvma:            "59688",
  labelPdf: "Source labels/Upl_Dithane_Rainshield_Neo_Tec_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/DITHANE_RAINSHIELD_NEO_TEC.pdf",
  signalHeading:    "Caution",

  classification: {
    type: "Fungicide",
    target: ["Leaf Spot", "Downy Mildew", "Rust", "Anthracnose", "Scab", "Blight", "Botrytis"],
    timing: ["Preventative — begin before disease infection and continue until threat has passed"]
  },

  crops: [

    {
      crop: "Field Crops — Cotton (Pima variety only)",
      cropList: ["Field Crops","Cotton"],
      weeds: [
        {
          weed: "Alternaria Leaf Spot",
          pestList: ["Alternaria Leaf Spot"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "As soon as disease symptoms appear — repeat before each infection period but no later than 7–10 days after last application",
          note: "Protectant fungicide — ensure thorough coverage of all plant surfaces. Maximum 4 sprays per season. Repeat before each infection period (dew or rain) but no later than 7–10 days after last application. WHP: 14 days harvest."
        }
      ]
    },

    {
      crop: "Field Crops — Peanuts",
      cropList: ["Field Crops","Peanuts"],
      weeds: [
        {
          weed: "Cercospora Leaf Spot, Rust",
          pestList: ["Cercospora Leaf Spot","Rust"],
          states: ["All"],
          rate: "1.7",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "At 10–14 day intervals commencing when disease symptoms first appear",
          note: "Apply at 10–14 day intervals commencing when disease symptoms first appear. If rust is anticipated, apply at 7–10 day intervals. Use higher rate and shorter spray interval during weather conditions favourable to disease development. WHP: 14 days harvest, 14 days grazing."
        }
      ]
    },

    {
      crop: "Field Crops — Poppies",
      cropList: ["Field Crops","Poppies"],
      weeds: [
        {
          weed: "Downy Mildew",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "Protectant spray when weather conditions favour disease development — repeat at 14-day intervals",
          note: "Apply as protectant spray when weather conditions favour disease development. Repeat at 14-day intervals if conditions persist. WHP: 7 weeks harvest."
        }
      ]
    },

    {
      crop: "Field Crops — Pulses (Broadbeans, Faba Beans, Chickpeas, Field Peas, Lentils, Vetch, Lupins, Beans)",
      cropList: ["Field Crops","Broadbeans","Faba Beans","Chickpeas","Field Peas","Lentils","Vetch","Lupins","Beans"],
      weeds: [
        {
          weed: "Ascochyta blight, Botrytis grey mould, Chocolate spot, Rust, Cercospora, Anthracnose, Angular leaf spot, Black spot",
          pestList: ["Ascochyta Blight","Botrytis Grey Mould","Chocolate Spot","Rust","Cercospora","Anthracnose","Angular Leaf Spot","Black Spot"],
          states: ["All"],
          rate: "1.0",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "When leaves, flowers or pods show first signs of infection and weather conditions favour disease development",
          note: "Use 1.0–2.2 kg/ha depending on crop and disease pressure. Spray when leaves, flowers or pods show first signs of infection in humid/wet conditions likely to favour disease development. If disease pressure is severe, repeat at 2–3 week intervals to protect new growth and developing pods. Use higher rate for dense crops and severe disease. For improved coverage add a registered surfactant at 10–20 mL/100 L spray. Volume: ground apply 100 L/ha; aircraft at least 30 L/ha. WHP: 4 weeks (grain), 7 days (fresh) harvest; 14 days grazing."
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
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals in warm rainy conditions",
          note: "Apply when disease symptoms first appear and repeat at 7–10 day intervals while warm rainy weather conditions prevail. WHP: 7 days harvest, 14 days grazing."
        }
      ]
    },

    {
      crop: "Field Crops — Tobacco",
      cropList: ["Field Crops","Tobacco"],
      weeds: [
        {
          weed: "Blue Mould, Brown Spot, Frog Eye Leaf Spot",
          pestList: ["Blue Mould","Brown Spot","Frog-eye leaf spot"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Field: at 7-day intervals from 10 days after transplanting until 7–10 days before first harvest; Seedbed: when seedlings are 1.5 cm across, then twice weekly",
          note: "Rate per hectare: 2.2 kg. Field treatments: apply at 7-day intervals commencing 10 days after transplanting and ceasing 7–10 days before the first harvest. Increase spray volume as plant size increases. Seed bed treatments: apply when seedlings are 1.5 cm across and then repeat twice weekly. Wet the seedlings evenly without runoff. WHP: not required."
        }
      ]
    },

    {
      crop: "Fruit — Bananas",
      cropList: ["Fruit","Bananas"],
      weeds: [
        {
          weed: "Leaf Spot (Mycosphaerella musicola)",
          pestList: ["Leaf Spot"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Per-hectare rate: 2.2–4.5 kg plus spray oil — apply when weather conditions favour disease outbreak",
          note: "200 g per 100 L product plus spray oil used according to its label directions. Rate per hectare: 2.2–4.5 kg plus spray oil. Choose a spray oil appropriate or recommended for use on bananas. NSW: Ground 3-week intervals Dec–May; Aerial 7–10-day intervals Dec–May. South Qld: 3-week intervals Dec–May. North Qld and NT: every 2 weeks during wet season; extend to 3 weeks, then 4–5 weeks during drier months, returning to 3 weeks prior to next wet season. For concentrate spraying using misters, refer to concentrate spraying section. WHP: nil harvest."
        },
        {
          weed: "Black Pit, Cordana Leaf Spot, Fruit Speckle, Leaf Speckle",
          pestList: ["Black Pit","Cordana Leaf Spot","Fruit Speckle","Leaf Speckle"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply when weather conditions favour disease outbreak",
          note: "200 g per 100 L; 2.2 kg/ha. Follow locally recommended spray schedules. Use sufficient water to ensure good coverage. WHP: nil harvest."
        }
      ]
    },

    {
      crop: "Ornamentals — Carnations, Chrysanthemums, Gladioli, Flowers, Shrubs, Roses",
      cropList: ["Ornamentals","Carnations","Chrysanthemums","Gladioli","Flowers","Shrubs","Roses"],
      weeds: [
        {
          weed: "Rust, Alternaria Leaf Spot, Grey Mould (Botrytis), Septoria Leaf Spot, Black Spot",
          pestList: ["Rust","Alternaria Leaf Spot","Grey Mould","Septoria Leaf Spot","Black Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "150–200 g/100 L spray. Apply when disease symptoms first appear and repeat at 7–10 day intervals. During weather conditions favourable to disease development, use higher rate and shorter interval. No WHP."
        }
      ]
    },

    {
      crop: "Ornamentals — Ferns",
      cropList: ["Ornamentals","Ferns"],
      weeds: [
        {
          weed: "Botrytis Leaf Spot",
          pestList: ["Botrytis Leaf Spot"],
          states: ["All"],
          rate: "75",
          rateMax: "100",
          unit: "g/100L",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "75–100 g/100 L spray. Caution: Dithane Rainshield Neo Tec may be phytotoxic to some ornamental species (in particular some varieties of ferns). It is recommended to test a few plants before widespread use."
        }
      ]
    },

    {
      crop: "Turf",
      cropList: ["Turf"],
      weeds: [
        {
          weed: "Fusarium, Helminthosporium, Rhizoctonia",
          pestList: ["Fusarium","Helminthosporium","Rhizoctonia"],
          states: ["All"],
          rate: "200",
          rateMax: "250",
          unit: "g/100L",
          stage: "Protective spray schedule at 7-day intervals throughout the susceptible season",
          note: "200–250 g/100 sq. metres. Apply as a protective spray schedule at 7-day intervals throughout the susceptible season. Use sufficient water for adequate coverage. DO NOT feed grass clippings from treated areas to poultry or animals."
        }
      ]
    },

    {
      crop: "Vegetables — Green Legumes (Broadbeans, Peas, Green Beans)",
      cropList: ["Vegetables","Broadbeans","Peas","Green Beans"],
      weeds: [
        {
          weed: "Rust, Cercospora Leaf Spot, Anthracnose, Angular Leaf Spot (Peas: Ascochyta Leaf Blight suppression)",
          pestList: ["Rust","Cercospora Leaf Spot","Anthracnose","Angular Leaf Spot"],
          states: ["All"],
          rate: "1.7",
          rateMax: "2.5",
          unit: "kg/ha",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha for rust, cercospora, anthracnose, angular leaf spot. 1.7–2.5 kg/ha for chocolate spot and ascochyta blight (suppression only). Apply when disease symptoms first appear and repeat at 7–10 day intervals. Use higher rate and shorter interval in disease-conducive weather. For ground application 100 L/ha; aerial at least 30 L/ha. WHP: 7 days harvest, 14 days grazing."
        }
      ]
    },

    {
      crop: "Vegetables — Beetroot, Silver Beet, Spinach",
      cropList: ["Vegetables","Beetroot","Silver Beet","Spinach"],
      weeds: [
        {
          weed: "Cercospora Leaf Spot, Downy Mildew",
          pestList: ["Cercospora Leaf Spot","Downy Mildew"],
          states: ["All"],
          rate: "1.7",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "Apply when disease symptoms first appear and repeat at 7–10 day intervals. Use higher rate and shorter interval in disease-conducive weather. WHP: 14 days harvest."
        }
      ]
    },

    {
      crop: "Vegetables — Capsicum",
      cropList: ["Vegetables","Capsicum"],
      weeds: [
        {
          weed: "Target Spot",
          pestList: ["Target Spot"],
          states: ["All"],
          rate: "2",
          rateMax: "3",
          unit: "kg/ha",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "2–3 kg/ha. Apply when disease symptoms first appear and repeat at 7–10 day intervals. Use higher rate and shorter interval in disease-conducive weather. WHP: 14 days harvest."
        }
      ]
    },

    {
      crop: "Vegetables — Carrots, Celery",
      cropList: ["Vegetables","Carrots","Celery"],
      weeds: [
        {
          weed: "Carrots: Alternaria and Cercospora Leaf Spot; Celery: Septoria Leaf Spot (Leaf Blight)",
          pestList: ["Carrots: Alternaria And Cercospora Leaf Spot; Celery: Septoria Leaf Spot"],
          states: ["All"],
          rate: "1.7",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Apply when disease symptoms first appear and repeat at 7–10 day intervals. Use higher rate and shorter interval in disease-conducive weather. Carrots WHP: 7 days harvest."
        }
      ]
    },

    {
      crop: "Vegetables — Cole Crops and Cucurbits",
      cropList: ["Vegetables","Cole Crops And Cucurbits"],
      weeds: [
        {
          weed: "Cole Crops (Broccoli, Brussels Sprouts, Cabbage, Cauliflower): Alternaria Spot, Anthracnose, Downy Mildew, Ring Spot; Cucurbits (Cantaloupe, Cucumber, Melons, Pumpkin, Squash, Zucchini): Anthracnose, Downy Mildew, Gummy Stem Blight, Septoria Spot",
          pestList: ["Cole Crops : Alternaria Spot","Anthracnose","Downy Mildew","Ring Spot; Cucurbits : Anthracnose","Gummy Stem Blight","Septoria Spot"],
          states: ["All"],
          rate: "1.7",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Apply when disease symptoms first appear and repeat at 7–10 day intervals. Use higher rate and shorter interval in disease-conducive weather. WHP: 7 days harvest."
        }
      ]
    },

    {
      crop: "Vegetables — Fennel (Tasmania only)",
      cropList: ["Vegetables","Fennel"],
      weeds: [
        {
          weed: "Leaf Blight (Cercosporidium)",
          pestList: ["Leaf Blight"],
          states: ["Tas"],
          rate: "2.2",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "Ground spray if disease symptoms present in November — one repeat treatment 10–14 days later",
          note: "Apply as a ground spray if disease symptoms are present in November, allowing for one repeat treatment 10–14 days later. Aerial application may be required in prolonged wet periods. WHP: 14 days harvest."
        }
      ]
    },

    {
      crop: "Vegetables — Lettuce",
      cropList: ["Vegetables","Lettuce"],
      weeds: [
        {
          weed: "Anthracnose, Downy Mildew, Septoria Leaf Spot",
          pestList: ["Anthracnose","Downy Mildew","Septoria Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "150–200 g/100 L; 1.7–2.2 kg/ha. Apply when disease symptoms first appear and repeat at 7–10 day intervals. Use higher rate and shorter interval in disease-conducive weather."
        }
      ]
    },

    {
      crop: "Vegetables — Onions and Garlic",
      cropList: ["Vegetables","Onions And Garlic"],
      weeds: [
        {
          weed: "Downy Mildew, Purple Blotch",
          pestList: ["Downy Mildew","Purple Blotch"],
          states: ["All"],
          rate: "2.2",
          rateMax: "3.5",
          unit: "kg/ha",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "2.2–3.5 kg/ha. Apply when disease symptoms first appear and repeat at 7–10 day intervals. Use higher rate and shorter interval in disease-conducive weather. WHP: 7 days harvest."
        }
      ]
    },

    {
      crop: "Vegetables — Potatoes",
      cropList: ["Vegetables","Potatoes"],
      weeds: [
        {
          weed: "Early Blight (Target Spot), Late Blight (Irish Blight)",
          pestList: ["Early Blight","Late Blight"],
          states: ["All"],
          rate: "1.7",
          rateMax: "2.2",
          unit: "kg/ha",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "1.7–2.2 kg/ha. Apply when disease symptoms first appear and repeat at 7–10 day intervals. Use higher rate and shorter interval in disease-conducive weather. WHP: not required."
        }
      ]
    },

    {
      crop: "Vegetables — Rhubarb",
      cropList: ["Vegetables","Rhubarb"],
      weeds: [
        {
          weed: "Downy Mildew, Rust",
          pestList: ["Downy Mildew","Rust"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "150–200 g/100 L; 1.7–2.2 kg/ha. Apply when disease symptoms first appear and repeat at 7–10 day intervals. Use higher rate and shorter interval in disease-conducive weather. WHP: 14 days harvest."
        }
      ]
    },

    {
      crop: "Vegetables — Tomatoes",
      cropList: ["Vegetables","Tomatoes"],
      weeds: [
        {
          weed: "Anthracnose, Early Blight (Target Spot), Grey Leaf Spot, Late Blight (Irish Blight), Leaf Mould (Fulvia fulva), Phoma Rot",
          pestList: ["Anthracnose","Early Blight","Grey Leaf Spot","Late Blight","Leaf Mould","Phoma Rot"],
          states: ["All"],
          rate: "2",
          rateMax: "3",
          unit: "kg/ha",
          stage: "When disease symptoms first appear — repeat at 7–10 day intervals",
          note: "2–3 kg/ha. Apply when disease symptoms first appear and repeat at 7–10 day intervals. Use higher rate and shorter interval in disease-conducive weather. WHP: 7 days harvest."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Citrus",
      cropList: ["Tree And Vine Crops","Citrus"],
      weeds: [
        {
          weed: "Black Spot, Brown Citrus Mite, Citrus Rust Mite, Citrus Bud Mite",
          pestList: ["Black Spot","Brown Citrus Mite","Citrus Rust Mite","Citrus Bud Mite"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Dilute/concentrate spraying — apply by dilute or concentrate spraying equipment",
          note: "200 g/100 L plus spray oil used according to its label directions. WHP: not required. Heavy soil: spray at 8 and 15 weeks following Bordeaux (5-5-100) spray at petal fall. Light soil: spray at 6 and 13 weeks following Bordeaux (3.5-3.5-100) at petal fall; add adjuvant at label rate/100 L. Choose a spray oil recommended for use on citrus. Brown citrus mite/Citrus rust mite (Qld, NT): spray at 6 and 12 weeks after a copper spray at half to three-quarter petal fall; apply at first sign of mite activity on fruit (usually Dec–May). Citrus bud mite: apply when blossom malformation observed (usually February)."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Custard Apples",
      cropList: ["Tree And Vine Crops","Custard Apples"],
      weeds: [
        {
          weed: "Pseudocercospora Fruit Spot",
          pestList: ["Pseudocercospora Fruit Spot"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "From first fruit set until harvest — apply at 3–4 week intervals (2 weeks in wet/cloudy weather)",
          note: "200 g/100 L. DO NOT apply during flowering. Apply at 3–4 week intervals from first fruit set until harvest. Apply at 2-week intervals in wet, cloudy weather. WHP: 1 day harvest."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Grapevines",
      cropList: ["Tree And Vine Crops","Grapevines"],
      weeds: [
        {
          weed: "Blackspot, Downy Mildew",
          pestList: ["Blackspot","Downy Mildew"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "From budburst — 10–14 day intervals; shorten interval during disease-conducive conditions",
          note: "150–200 g/100 L. Apply by dilute or concentrate spraying equipment. Apply the same total amount of product to the target crop whether applying by dilute or concentrate. For Black Spot: apply at budburst and repeat 10–14 days later. If Downy Mildew expected, continue spray programme at 10–14 day intervals until disease threat has passed. Use shorter interval during weather conditions favourable to disease development. For Phomopsis/Cane and Leaf spot: 150–200 g/100 L, apply at budburst and repeat 7–10 days later. WHP: 30 days harvest."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Mangos",
      cropList: ["Tree And Vine Crops","Mangos"],
      weeds: [
        {
          weed: "Anthracnose (Colletotrichum gloeosporioides)",
          pestList: ["Anthracnose"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "At weekly intervals during flowering, then monthly until near harvest",
          note: "200 g/100 L. Apply at weekly intervals during flowering and then at monthly intervals until near harvest. WHP: 1 day harvest."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Passion Fruit",
      cropList: ["Tree And Vine Crops","Passion Fruit"],
      weeds: [
        {
          weed: "Brown Spot (Alternaria passiflorae), Septoria Spot; Anthracnose (NSW only)",
          pestList: ["Brown Spot","Septoria Spot; Anthracnose"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "At 10–14 day intervals from October to May, every 21–28 days for remainder of year",
          note: "Brown Spot/Septoria Spot: 150 g/100 L, apply at 10–14 day intervals Oct–May and every 21–28 days for remainder of year. Anthracnose (NSW only): 200 g + 600 mL miscible summer oil, spray at weekly intervals during flowering then fortnightly until near harvest. WHP: 1 day harvest."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Pawpaws (Papaya)",
      cropList: ["Tree And Vine Crops","Pawpaws"],
      weeds: [
        {
          weed: "Black Spot",
          pestList: ["Black Spot"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "At 10–14 day intervals during periods conducive to disease",
          note: "200 g/100 L. Apply mancozeb plus a wetting agent at 10–14 day intervals during periods conducive to disease. WHP: 1 day harvest. Papaya leaves must not be made available for human consumption."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Pome Fruits (Apples, Pears)",
      cropList: ["Tree And Vine Crops","Apples","Pears"],
      weeds: [
        {
          weed: "Apple Scab (Black Spot), Bitter Rot, Fly Speck, Pear Scab, Ripe Fruit Spot, Sooty Blotch, Target Spot",
          pestList: ["Apple Scab","Bitter Rot","Fly Speck","Pear Scab","Ripe Fruit Spot","Sooty Blotch","Target Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "At 7–14 day intervals following a copper spray at green tip",
          note: "150–200 g/100 L. Apply at 7–14 day intervals following a copper spray at green tip. Use higher rate and shorter interval during prolonged wet conditions. Can be tank-mixed with Systhane 400WP for apple scab (black spot) control — read and follow all label recommendations. May be harmful to Typhlodromus pyri — avoid use in orchards where integrated control is practiced. WHP: 14 days harvest."
        }
      ]
    },

    {
      crop: "Tree and Vine Crops — Stone Fruits (Almonds, Apricots, Cherries, Nectarines, Peaches, Plums)",
      cropList: ["Tree And Vine Crops","Almonds","Apricots","Cherries","Nectarines","Peaches","Plums"],
      weeds: [
        {
          weed: "Brown Rot, Freckle, Rust, Shot Hole",
          pestList: ["Brown Rot","Freckle","Rust","Shot Hole"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "From early bloom (1–10%) through petal fall and shuck fall; then protective programme at 2-week intervals",
          note: "Apply at early bloom (1–10%), mid to full bloom (50–100%), petal fall, and shuck fall. Continue with protective spray programme at 2-week intervals. Caution: may be phytotoxic to Wilson, Wickson and Bellarosa varieties of plums — advisable to test new plum varieties on small scale with Dithane before applying to whole crop. WHP: 14 days harvest."
        }
      ]
    },
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

// ── PER14046: Cucumber — Grey Mould ──
  {
    crop: "Cucumber (Field and Protected) — Grey Mould (PER14046)",
    cropList: ["Cucumber"],
    permitNumber: "PER14046",
    weeds: [
      {
        weed: "Grey Mould (Botrytis cinerea)",
        pestList: ["Fungal Diseases", "Grey Mould", "Botrytis"],
        states: ["All"],
        rate: "1700",
        rateMax: "2200",
        unit: "g/ha",
        stage: "Preventative foliar treatment. Apply in sufficient water to cover crop to point of run-off. Re-treatment interval 7-10 days.",
        note: "PERMIT PER14046 (exp. 31/01/2028). DITHANE RAINSHIELD NEO TEC: 1.7-2.2 kg/ha or 150-200 g/100L (max 2.2 kg/ha). Field and protected crops. Max 8 applications per crop; min 7 days between applications. Add surfactant for improved coverage. WHP: Do not harvest for 7 days after application. All states except VIC (Victoria has own Control-of-Use legislation). MRL established for dithiocarbamates in fruiting vegetables/cucurbits."
      }
    ]
  },

  // ── PER14593: Multiple Vegetables — Fungal Diseases (Downy Mildew, Anthracnose, Alternaria) ──
  {
    crop: "Fruiting Vegetables (Brinjal, Chilli, Eggplant) — Downy Mildew & Anthracnose (PER14593)",
    cropList: ["Brinjal", "Chilli peppers", "Eggplant"],
    permitNumber: "PER14593",
    weeds: [
      {
        weed: "Downy Mildew & Anthracnose (Peronospora parasitica, Colletotrichum spp.)",
        pestList: ["Fungal Diseases", "Downy Mildew", "Anthracnose"],
        states: ["All"],
        rate: "1700",
        rateMax: "2200",
        unit: "g/ha",
        stage: "Preventative foliar treatment. Thorough coverage including under-leaf surfaces. Apply in sufficient water to point of run-off.",
        note: "PERMIT PER14593 (exp. 31/05/2030). DITHANE RAINSHIELD NEO TEC 750 g/kg: 1.7-2.2 kg/ha. Brinjal, Ca phao, Chilli peppers, Eggplant, Pea eggplant, Plate brush, Pokak, Thai round eggplant. WHP: Do not harvest for 7 days after application. Grazing: Do not graze or cut for stock food for 14 days. Max 4 dimethomorph/mancozeb applications per crop. Spray drift restraints apply (wind 3-20 km/h, avoid inversion conditions)."
      }
    ]
  },

  // ── PER14593: Legume Vegetables — Fungal Diseases (Downy Mildew, Alternaria) ──
  {
    crop: "Legume Vegetables (Edamame, Flower Bean, Green Soybean, Snake Bean, Winged Bean, Yard Long Bean) — Downy Mildew & Alternaria (PER14593)",
    cropList: ["Edamame", "Flower bean", "Green soybean", "Snake bean", "Winged bean", "Yard long bean"],
    permitNumber: "PER14593",
    weeds: [
      {
        weed: "Downy Mildew & Alternaria (Peronospora spp., Alternaria spp.)",
        pestList: ["Fungal Diseases", "Downy Mildew", "Alternaria Leaf Spots"],
        states: ["All"],
        rate: "1700",
        rateMax: "2200",
        unit: "g/ha",
        stage: "Preventative foliar treatment when wet/humid conditions favour disease. Thorough coverage including under-leaf surfaces. Apply 2 sequential sprays at 7-10 day interval, then alternate to different chemical group.",
        note: "PERMIT PER14593 (exp. 31/05/2030). DITHANE RAINSHIELD NEO TEC 750 g/kg: 1.7-2.2 kg/ha. Edamame, Flower bean, Green soybean, Hanamame, Snake bean, Winged bean, Yard long bean. WHP: Do not harvest for 7 days after application. Grazing: Do not graze or cut for stock food for 14 days. Max 4 dimethomorph/mancozeb applications per crop. All states except VIC. MRL established for dithiocarbamates."
      }
    ]
  },

  // ── PER14593: Cucurbit & Other Vegetables — Downy Mildew & Alternaria ──
  {
    crop: "Cucurbit & Other Vegetables (Angled Luffa, Bitter Gourd, Okra, etc.) — Downy Mildew & Alternaria (PER14593)",
    cropList: ["Angled luffa", "Bitter gourd", "Bitter melon", "Okra", "Smooth luffa", "Snake gourd", "Wax gourd", "White flower gourd"],
    permitNumber: "PER14593",
    weeds: [
      {
        weed: "Downy Mildew & Alternaria (Peronospora spp., Alternaria spp.)",
        pestList: ["Fungal Diseases", "Downy Mildew", "Alternaria Leaf Spots"],
        states: ["All"],
        rate: "1700",
        rateMax: "2200",
        unit: "g/ha",
        stage: "Preventative foliar treatment when wet/humid conditions favour disease. Thorough coverage of foliage, especially under-leaf surfaces. Re-treatment interval 7-10 days; alternate chemical groups after 2 sequential applications.",
        note: "PERMIT PER14593 (exp. 31/05/2030). DITHANE RAINSHIELD NEO TEC 750 g/kg: 1.7-2.2 kg/ha. Angled luffa, Bitter gourd, Bitter melon, Foogwa, Gourd, Hairy melon, Kabocha, Kho qua, Muop huong, Muop Khia, Okra, Smooth luffa, Snake gourd, Wax gourd, White flower gourd. WHP: Do not harvest for 14 days after application. Grazing: Do not graze or cut for stock food for 14 days. Max 4 dimethomorph/mancozeb applications per crop. All states except VIC."
      }
    ]
  },

  // ── PER14958: Brassica Leafy Vegetables — Downy Mildew & White Blister ──
  {
    crop: "Brassica Leafy Vegetables (Bok Choy, Pak Choy, Choi Sum, etc.) — Downy Mildew & White Blister (PER14958)",
    cropList: ["Brassica leafy vegetables", "Bok choy", "Pak choy", "Choi sum", "Gai lum", "Gai lan", "Wong bok", "Mizuna", "Tatsoi"],
    permitNumber: "PER14958",
    weeds: [
      {
        weed: "Downy Mildew & White Blister (Peronospora parasitica, Albugo candida)",
        pestList: ["Fungal Diseases", "Downy Mildew", "White Blister"],
        states: ["All"],
        rate: "1600",
        rateMax: "1600",
        unit: "g/ha",
        stage: "Preventative foliar treatment when wet/humid weather favours disease. Apply 2 sequential dimethomorph/mancozeb sprays at 7-10 day interval, then alternate to fungicide from different chemical group. Thorough coverage including under-leaf surfaces; sufficient water to point of run-off.",
        note: "PERMIT PER14958 (exp. 31/10/2027). DITHANE RAINSHIELD NEO TEC 750 g/kg (mancozeb product): 1.6 kg/ha. Brassica leafy vegetables: Bok choy, Chinese chard, Pak choy, Choi sum, Gai lum, Kai choi, Wong bok, Mizuna, Tatsoi, etc. WHP: Do not harvest for 14 days after application. Grazing: Do not graze or cut for stock food. Max 4 dimethomorph/mancozeb foliar applications per crop. All states except VIC. Refer CropLife Fungicide Resistance Management Strategy for downy mildew."
      }
    ]
  },

  // ── PER14958: Silverbeet, Spinach, Lettuce — Downy Mildew ──
  {
    crop: "Silverbeet, Spinach, Leafy Lettuce — Downy Mildew (PER14958)",
    cropList: ["Silverbeet", "Spinach", "Leafy lettuce"],
    permitNumber: "PER14958",
    weeds: [
      {
        weed: "Downy Mildew (Peronospora spp., Bremia lactucae)",
        pestList: ["Fungal Diseases", "Downy Mildew"],
        states: ["All"],
        rate: "1600",
        rateMax: "1600",
        unit: "g/ha",
        stage: "Preventative foliar treatment when wet/humid weather favours disease. Apply 2 sequential sprays at 7-10 day interval; then alternate to fungicide from different chemical group. Thorough coverage including under-leaf surfaces. Add non-ionic surfactant for head lettuce.",
        note: "PERMIT PER14958 (exp. 31/10/2027). DITHANE RAINSHIELD NEO TEC 750 g/kg (mancozeb product): 1.6 kg/ha. Silverbeet, Spinach, Leafy Lettuce. WHP: Do not harvest for 14 days after application. Grazing: Do not graze or cut for stock food. Max 4 dimethomorph/mancozeb foliar applications per crop. All states except VIC. Refer CropLife Fungicide Resistance Management Strategy for lettuce downy mildew."
      }
    ]
  },

  // ── PER14958: Beetroot, Chicory, Endive, Parsley, Radicchio, Radish, Rocket — Downy Mildew & Alternaria ──
  {
    crop: "Leafy Vegetables (Beetroot, Chicory, Endive, Parsley, Radicchio, Radish, Rocket) — Downy Mildew & Alternaria (PER14958)",
    cropList: ["Beetroot", "Chicory", "Endive", "Parsley", "Radicchio", "Radish", "Rocket"],
    permitNumber: "PER14958",
    weeds: [
      {
        weed: "Downy Mildew & Alternaria (Peronospora spp., Pseudoperonospora spp., Bremia lactucae, Alternaria spp.)",
        pestList: ["Fungal Diseases", "Downy Mildew", "Alternaria Leaf Spots"],
        states: ["All"],
        rate: "1600",
        rateMax: "1600",
        unit: "g/ha",
        stage: "Preventative foliar treatment when conditions favour disease development. Avoid excessive run-off. Apply 2 sequential dimethomorph/mancozeb sprays at 7-10 day interval, then alternate to different chemical group.",
        note: "PERMIT PER14958 (exp. 31/10/2027). DITHANE RAINSHIELD NEO TEC 750 g/kg (mancozeb product): 1.6 kg/ha. Beetroot*, Chicory, Endive, Parsley, Radicchio, Radish*, Rocket. *DO NOT apply to beetroot when grown as leafy vegetable; DO NOT use on Beetroot or Radish crops in protected cropping (glasshouses, greenhouses, plastic houses/tunnels, shade houses). WHP: Do not harvest for 14 days after application. Grazing: Do not graze or cut for stock food. Max 4 dimethomorph/mancozeb applications per crop. All states except VIC. Sensitivity not fully evaluated—test small area first."
      }
    ]
  }
],

  restraints: [
    "DO NOT allow to become wet or overheated in storage — decomposition, impaired activity or fire may result.",
    "DO NOT graze treated turf/grass or feed turf/grass clippings to poultry or livestock.",
    "DO NOT contaminate ponds, waterways or drains with the chemical or used containers.",
    "DO NOT inhale dust or spray mist.",
    "DO NOT apply when wind speed is less than 3 or more than 20 kilometres per hour.",
    "DO NOT allow bystanders to come into contact with the spray cloud.",
    "This product is toxic to fish — drift and run-off may be hazardous to aquatic organisms.",
    "Use before stated expiry date."
  ],

  compatibility: {
    compatible:   [
      "Systhane 400WP Fungicide (tank mix for apple scab/black spot control in pome fruit)",
      "Spray oil appropriate for use on bananas (banana leaf spot only)",
      "Spray oil appropriate for use on citrus (citrus applications)",
      "Miscible summer oil 600 mL/100 L (passion fruit anthracnose, NSW only)",
      "Registered surfactant at 10–20 mL/100 L (pulse crops, improved coverage)"
    ],
    incompatible: [],
    notes:        [
      "Slowly place into spray tank as it is being filled, or thoroughly premix in nurse tank for concentrate/aircraft sprayers. Add other co-applied fungicides, insecticides, surfactants AFTER Dithane Rainshield Neo Tec has been placed into suspension.",
      "Maintain sufficient agitation during mixing and spraying to prevent settling.",
      "For hand sprayer: premix as slurry in small container, then add to sprayer containing one-third to half the desired final water volume.",
      "DO NOT store near food, feedstuffs, fertilisers or seed."
    ]
  },

  withholding: {
    harvest: "Bananas: nil. Mangos, Passion fruit, Custard apples, Pawpaw: 1 day. Beans, Carrots, Celery, Cole crops, Cucurbits, Garlic, Onions, Peas, Soybeans, Tomatoes: 7 days. Almonds, Beetroot, Cotton, Capsicum, Fennel, Lettuce, Peanuts, Pome fruit, Rhubarb, Silver beet, Spinach, Stone fruit: 14 days. Grapevines: 30 days. Poppies: 7 weeks. Green legumes/Pulse crops (fresh): 7 days, (grain): 4 weeks. Citrus, Potatoes, Tobacco: not required.",
    grazing: "Cotton: DO NOT allow livestock to graze cotton crop, stubble or gin trash treated with Dithane. Green legumes, Peanuts, Pulse crops: 14 days. Papaya: DO NOT use or supply treated papaya including leaves for stock food. Soybeans: 14 days."
  },

  surfactant:     "Registered surfactant at 10–20 mL/100 L may be added to pulse crop applications for improved coverage. A wetting agent is required for pawpaw (papaya) applications (apply mancozeb plus a wetting agent). Spray oil required for banana, citrus and passion fruit anthracnose applications. DO NOT add surfactant to turf applications.",
  sprayerCleanup: "Shake and empty contents into spray tank. Break, crush, or puncture and deliver empty packaging to an approved waste management facility."

};
