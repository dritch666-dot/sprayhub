// ─────────────────────────────────────────────────────────
// NORDOX 750 WG COPPER FUNGICIDE — Label Data
// Group M1 (Multi-site Contact) | Water Dispersible Granule (WDG)
// Source: Nordox_Nordox750WG_Label.pdf
// APVMA Approval No: 68624
// Nordox Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['nordox750wg'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Nordox 750 WG Copper Fungicide",
  company: "Nufarm",

  category:         "Fungicides",
  activeIngredient: "750 g/kg Copper (Cu) present as Cuprous Oxide",
  group:            "Group M1 Fungicide",
  modeOfAction:     "Multi-site contact fungicide and bactericide; inhibits spore germination and hyphal growth",
  formulation:      "Water Dispersible Granule (WDG)",
  color:            "#b45309",
  apvma:            "68624",
  labelPdf:         "Source labels/Nordox_Nordox750WG_Label.pdf",
  sdsPdf:           "SDS Labels/NORDOX_750_WG_COPPER_FUNGICIDE.pdf",
  signalHeading:    "Caution",

  // ── Classification ────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Fungal Diseases", "Bacterial Diseases", "Downy Mildew", "Anthracnose", "Leaf Curl", "Blight", "Black Spot"],
    timing: ["Preventive", "At first sign of disease"]
  },

  // ── Use Situations ────────────────────────────────────────────
  crops: [

    {
      crop: "Vegetables — Beans",
      cropList: ["Vegetables","Beans"],
      weeds: [
        {
          weed: "Common Blight, Bacterial Brown Spot, Rust, Chocolate Spot",
          pestList: ["Common Blight","Bacterial Brown Spot","Rust","Chocolate Spot"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of infection; plants 15–30 cm high",
          note: "Also 1.2 kg/ha. Apply as a protectant at first sign of infection from the time plants are 15–30 cm high. Repeat every 10–14 days whilst conditions favour infection. Bacterial Brown Spot: spray within 21 days of emergence and repeat at 10–14 day intervals."
        },
        {
          weed: "Halo Blight",
          pestList: ["Halo Blight"],
          states: ["All"],
          rate: "105",
          rateMax: "160",
          unit: "g/100L",
          stage: "Plants 15–20 cm high; preventive",
          note: "Also 1.2–2.1 kg/ha. Apply as a protectant every 10–14 days from when plants are 15–20 cm high. Use higher rate when conditions favour disease."
        }
      ]
    },

    {
      crop: "Vegetables — Brassicas",
      cropList: ["Vegetables","Brassicas"],
      weeds: [
        {
          weed: "Black Rot, Peppery Leaf Spot, Ring Spot, Downy Mildew",
          pestList: ["Black Rot","Peppery Leaf Spot","Ring Spot","Downy Mildew"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "Also 1.2 kg/ha. Spray at first sign of disease. Repeat every 10–14 days while conditions favour disease. Do not use on copper-shy varieties. CROP DAMAGE WARNING: Copper fungicides predispose cabbages to frost damage. DO NOT treat cabbages with this product if frosts are likely, since crop damage may occur."
        }
      ]
    },

    {
      crop: "Vegetables — Capsicum, Carrots, Celery, Cucurbits",
      cropList: ["Vegetables", "Capsicum", "Carrots", "Celery", "Cucurbits"],
      weeds: [
        {
          weed: "Capsicum — Bacterial Spot, Bacterial Canker",
          pestList: ["Capsicum — Bacterial Spot","Bacterial Canker"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "Also 1.2 kg/ha. Field: begin spraying at first sign of disease, repeat every 10–14 days depending on weather conditions and severity. Use shorter intervals when conditions are favourable. This product will reduce the spread of Bacterial Canker but will not control seed or soil-borne infection. Seedbeds: under wet weather conditions spray every 7 days."
        },
        {
          weed: "Carrots — Leaf Spot",
          pestList: ["Carrots — Leaf Spot"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "Spray at first sign of disease. Repeat every 10–14 days if necessary."
        },
        {
          weed: "Celery — Leaf Spot",
          pestList: ["Celery — Leaf Spot"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Preventive",
          note: "Spray every 10–14 days. When weather conditions favour disease (cool weather) spray every 7 days."
        },
        {
          weed: "Celery — Bacterial Soft Rot",
          pestList: ["Celery — Bacterial Soft Rot"],
          states: ["Vic"],
          rate: "150",
          rateMax: "150",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "Vic: 150 g/100L. NSW, Qld, Tas, SA, WA: 105 g/100L."
        },
        {
          weed: "Celery — Bacterial Soft Rot",
          pestList: ["Celery — Bacterial Soft Rot"],
          states: ["NSW", "Qld", "Tas", "SA", "WA"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "NSW, Qld, Tas, SA, WA: 105 g/100L. Vic: 150 g/100L."
        },
        {
          weed: "Cucurbits — Angular Leaf Spot, Bacterial Leaf Spot",
          pestList: ["Cucurbits — Angular Leaf Spot","Bacterial Leaf Spot"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "Spray at first sign of disease. Repeat every 7–10 days when conditions favour infection."
        }
      ]
    },

    {
      crop: "Vegetables — Lettuce, Onions, Parsnips, Peas",
      cropList: ["Vegetables","Lettuce","Onions","Parsnips","Peas"],
      weeds: [
        {
          weed: "Lettuce — Bacterial Leaf Spot, Downy Mildew, Anthracnose",
          pestList: ["Lettuce — Bacterial Leaf Spot","Downy Mildew","Anthracnose"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "Also 1.2 kg/ha. Apply at first sign of disease and repeat every 7–10 days if necessary. Alternating treatment between this product and Mancozeb is desirable. Do not use on copper-shy varieties. This product predisposes lettuce to frost damage — do not treat if frosts are likely. Anthracnose: spray on a 7–10 day schedule."
        },
        {
          weed: "Onions — Downy Mildew",
          pestList: ["Onions — Downy Mildew"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "Also 1.2 kg/ha. Spray at first sign of disease. Repeat at 10–14 day intervals while conditions favour infection."
        },
        {
          weed: "Parsnips — Leaf Spots",
          pestList: ["Parsnips — Leaf Spots"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "Also 1.2 kg/ha. Spray at first sign of disease. Repeat every 10–14 days if necessary."
        },
        {
          weed: "Peas — Ascochyta Blight, Bacterial Blight",
          pestList: ["Peas — Ascochyta Blight","Bacterial Blight"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "Also 1.2 kg/ha. Spray at first sign of disease. Repeat every 10–14 days."
        }
      ]
    },

    {
      crop: "Vegetables — Potatoes, Red Beet, Rhubarb, Silver Beet, Spinach",
      cropList: ["Vegetables","Potatoes","Red Beet","Rhubarb","Silver Beet","Spinach"],
      weeds: [
        {
          weed: "Potatoes — Target Spot (Early Blight), Irish Blight (Late Blight)",
          pestList: ["Potatoes — Target Spot","Irish Blight"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Preventive during conditions favouring infection",
          note: "Also 1.2 kg/ha. Spray every 7–10 days during conditions favouring infection, until maturity. May reduce yield if applied under dry conditions."
        },
        {
          weed: "Red Beet — Downy Mildew, Rust",
          pestList: ["Red Beet — Downy Mildew","Rust"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "From seedling stage",
          note: "Also 1.2 kg/ha. Spray from seedling stage and repeat every 10–14 days while conditions favour infection."
        },
        {
          weed: "Rhubarb — Crown Rot",
          pestList: ["Rhubarb — Crown Rot"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Prior to planting",
          note: "Dip crowns prior to planting."
        },
        {
          weed: "Rhubarb — Downy Mildew",
          pestList: ["Rhubarb — Downy Mildew"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Preventive",
          note: "Also 1.2 kg/ha. Spray every 10–14 days while conditions favour infection."
        },
        {
          weed: "Silver Beet — Downy Mildew",
          pestList: ["Silver Beet — Downy Mildew"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "From seedling stage",
          note: "Also 1.2 kg/ha. Spray from seedling stage and repeat every 10–14 days while conditions favour infection."
        },
        {
          weed: "Spinach — Downy Mildew",
          pestList: ["Spinach — Downy Mildew"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "From seedling stage",
          note: "Also 1.2 kg/ha. Spray from seedling stage and repeat every 10–14 days while conditions favour infection."
        }
      ]
    },

    {
      crop: "Vegetables — Tomatoes",
      cropList: ["Vegetables","Tomatoes"],
      weeds: [
        {
          weed: "Target Spot (Early Blight), Septoria Leaf Spot",
          pestList: ["Target Spot","Septoria Leaf Spot"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At onset of disease",
          note: "Also 1.2 kg/ha. At onset of disease spray every 7–14 days depending on severity of disease and weather conditions. Shortest interval applies during conditions favouring infection."
        },
        {
          weed: "Bacterial Spot, Bacterial Canker, Bacterial Speck",
          pestList: ["Bacterial Spot","Bacterial Canker","Bacterial Speck"],
          states: ["All"],
          rate: "100",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "Also 0.9–1.2 kg/ha. Seedbeds: spray every 7 days under wet weather conditions. Fields: begin applying at first sign of disease and spray every 7–14 days depending on weather and disease severity. This product will minimise the spread of Bacterial Canker but will not control seed or soil-borne infection."
        },
        {
          weed: "Irish Blight (Late Blight)",
          pestList: ["Irish Blight"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "At first sign of disease",
          note: "Also 1.2 kg/ha. Begin applying spray at first sign of disease and repeat every 10–14 days. At seedling stage spray only when necessary as growth may be inhibited."
        }
      ]
    },

    {
      crop: "Fruit Crops — Bananas, Strawberries",
      cropList: ["Fruit Crops","Bananas","Strawberries"],
      weeds: [
        {
          weed: "Bananas — Cercospora Leaf Spot",
          pestList: ["Bananas — Cercospora Leaf Spot"],
          states: ["Qld", "NSW", "WA"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "December to May, 3–4 weekly intervals",
          note: "Spray at 3–4 weekly intervals from December to May when weather conditions favour disease. Ensure thorough coverage. NOTE: Use 600 mL summer oil in conjunction with this product."
        },
        {
          weed: "Strawberries — Leaf Spot, Grey Mould",
          pestList: ["Strawberries — Leaf Spot","Grey Mould"],
          states: ["Vic", "Tas", "SA", "WA"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "When plants are established, throughout season",
          note: "Also 1.2 kg/ha. Spray when plants are established and continue on a 7–10 day schedule throughout season. Discontinue application if signs of phytotoxicity appear (reddening of leaf veins) or new growth inhibition. Early in the season, alternating with Benomyl will assist in reducing the development of Grey Mould."
        }
      ]
    },

    {
      crop: "Tree & Vine Crops — Almonds, Apples, Apricots, Avocados",
      cropList: ["Tree & Vine Crops","Almonds","Apples","Apricots","Avocados"],
      weeds: [
        {
          weed: "Almonds — Leaf Curl, Shothole",
          pestList: ["Almonds — Leaf Curl","Shothole"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Buds swelling, before and within 1 week of bud opening",
          note: "CORRECT TIMING IS CRITICAL. Apply when buds are swelling but BEFORE AND WITHIN ONE WEEK OF OPENING. Monitor bud development of each variety each year. Where leaf curl is severe: 1. AUTUMN — apply at leaf fall. 2. Apply at FIRST SIGN of BUD SWELL and REPEAT ONE WEEK LATER. Apply as a dilute spray or up to 2× concentrate."
        },
        {
          weed: "Apples — Black Spot",
          pestList: ["Apples — Black Spot"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Green tip; repeat if conditions favour disease",
          note: "Apply at green tip and repeat 10–14 days later if conditions favour disease (extended wet weather). Refer to department spray charts for recommendations on timing, rates and precautions. Apply as a dilute spray or up to 2× concentrate."
        },
        {
          weed: "Apricots — Shothole, Freckle",
          pestList: ["Apricots — Shothole","Freckle"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Bud swell, prior to earliest signs of leaf/bud movement",
          note: "Spray at bud swell prior to earliest signs of leaf/bud movement. Spray at least one post-harvest application. Apply as a dilute spray or up to 2× concentrate."
        },
        {
          weed: "Apricots — Bacterial Gummosis",
          pestList: ["Apricots — Bacterial Gummosis"],
          states: ["WA", "SA", "Tas", "Vic"],
          rate: "130",
          rateMax: "130",
          unit: "g/100L",
          stage: "Autumn (25–50% leaf fall), Winter, Spring (bud movement)",
          note: "WA, SA, Tas, Vic: 130 g/100L. NSW: 105 g/100L. Autumn: apply at 25–50% leaf fall, repeat at 90–100% leaf fall. Winter: apply mid-winter. Spring: apply at first sign of bud movement; repeat 7–10 days later. Also apply 1 week after petal fall at 70 g/100L (NSW, ACT, Vic, WA, SA, Tas) to control leaf population of bacteria in mid-late spring. Apply as dilute or up to 2× concentrate."
        },
        {
          weed: "Avocados — Anthracnose",
          pestList: ["Avocados — Anthracnose"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Flowering to harvest, every 30 days",
          note: "Spray every 30 days from flowering to harvest. During extended wet periods spray every 14 days. Apply as a dilute spray or up to 3× concentrate."
        }
      ]
    },

    {
      crop: "Tree & Vine Crops — Cherries, Citrus",
      cropList: ["Tree & Vine Crops","Cherries","Citrus"],
      weeds: [
        {
          weed: "Cherries — Shothole",
          pestList: ["Cherries — Shothole"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Bud swell, within 1 week of bud opening",
          note: "Spray at bud swell prior to early signs of leaf/bud movement. Apply within 1 week of bud opening."
        },
        {
          weed: "Cherries — Bacterial Canker (Bacterial Gummosis)",
          pestList: ["Cherries — Bacterial Canker"],
          states: ["Vic", "Tas", "SA", "WA"],
          rate: "130",
          rateMax: "130",
          unit: "g/100L",
          stage: "Autumn (25–50% leaf fall), Winter, Spring (bud movement)",
          note: "Vic, Tas, SA, WA: 130 g/100L. NSW, ACT: 105 g/100L. Autumn: apply at 25–50% leaf fall, again at 90–100% leaf fall. Winter: apply mid-winter. Spring: apply at first sign of bud movement, repeat 7–10 days later. Also apply at 70 g/100L (NSW, ACT, Vic, Tas, SA, WA) 1 week after petal fall, repeat 7–10 days later to control leaf population in mid to late spring. Apply as dilute or up to 2× concentrate."
        },
        {
          weed: "Citrus — Black Spot, Melanose",
          pestList: ["Citrus — Black Spot","Melanose"],
          states: ["All"],
          rate: "90",
          rateMax: "90",
          unit: "g/100L",
          stage: "After 50–80% petal fall",
          note: "Add 60 mL Polyphase or Miscile Summer Oil per 100L. Apply after 50–80% petal fall. Repeat after 6–8 weeks. To control Melanose especially when weather is wet, also spray 2–3 weeks after the initial application. Use the higher rate in coastal districts. Apply as a dilute spray ONLY."
        },
        {
          weed: "Citrus — Smoky Blotch, Scab",
          pestList: ["Citrus — Smoky Blotch","Scab"],
          states: ["All"],
          rate: "105",
          rateMax: "160",
          unit: "g/100L",
          stage: "Half to three quarter flower petal fall",
          note: "Spray at half to three quarter flower petal fall. Apply the higher rate in coastal districts. NOTE: use 600 mL summer oil in conjunction with this product. Apply as a dilute spray ONLY."
        },
        {
          weed: "Citrus — Septoria Spot",
          pestList: ["Citrus — Septoria Spot"],
          states: ["NSW", "Vic", "SA", "WA"],
          rate: "80",
          rateMax: "80",
          unit: "g/100L",
          stage: "Mid-March",
          note: "Apply mid-March. Apply as a dilute spray ONLY."
        },
        {
          weed: "Lemon — Scab",
          pestList: ["Lemon — Scab"],
          states: ["NSW", "Vic", "SA", "WA"],
          rate: "80",
          rateMax: "80",
          unit: "g/100L",
          stage: "After 50% petal fall",
          note: "For Lemon Scab, apply after 50% petal fall. Apply as a dilute spray ONLY."
        },
        {
          weed: "Citrus — Brown Rot (Phytophthora citrophthora)",
          pestList: ["Citrus — Brown Rot"],
          states: ["Qld"],
          rate: "105",
          rateMax: "160",
          unit: "g/100L",
          stage: "Late autumn when symptoms first emerge",
          note: "Add 600 mL summer oil per 100L. For Brown Rot, apply late autumn when symptoms first emerge. It is important to cover lower half of tree. Apply as a dilute spray ONLY."
        },
        {
          weed: "Mandarins — Brown Spot (Alternaria citri)",
          pestList: ["Mandarins — Brown Spot"],
          states: ["All"],
          rate: "105",
          rateMax: "160",
          unit: "g/100L",
          stage: "Bud burst, petal fall, repeat 6–12 weeks",
          note: "For Brown Spot, apply at bud burst, petal fall and again after 6–12 weeks. In young trees (up to 8 years old) a pre-blossom spray should be used. Apply as a dilute spray ONLY."
        }
      ]
    },

    {
      crop: "Tree & Vine Crops — Macadamias, Mangoes, Nectarines, Peaches, Pears, Plums, Vines, Walnuts",
      cropList: ["Tree & Vine Crops","Macadamias","Mangoes","Nectarines","Peaches","Pears","Plums","Vines","Walnuts"],
      weeds: [
        {
          weed: "Macadamias — Husk Spot",
          pestList: ["Macadamias — Husk Spot"],
          states: ["Qld", "NSW", "NT"],
          rate: "160",
          rateMax: "200",
          unit: "g/100L",
          stage: "Nut set (late September) to December",
          note: "Good spray penetration of foliage is essential. Apply from nut set (late September) to December. Apply at least 3 sprays at 3–4 week intervals. Apply as a dilute spray ONLY."
        },
        {
          weed: "Macadamias — Anthracnose, Pink Limb Blight",
          pestList: ["Macadamias — Anthracnose","Pink Limb Blight"],
          states: ["Qld", "NSW", "NT"],
          rate: "160",
          rateMax: "200",
          unit: "g/100L",
          stage: "Early summer (December) to May, monthly intervals",
          note: "Good coverage inside tree / of infected limbs is essential. Spray from early summer (December) to May at monthly intervals. Apply as a dilute spray ONLY."
        },
        {
          weed: "Mangoes — Bacterial Black Spot",
          pestList: ["Mangoes — Bacterial Black Spot"],
          states: ["Qld", "NSW", "WA", "SA", "NT"],
          rate: "160",
          rateMax: "200",
          unit: "g/100L",
          stage: "Early flowering to fruit set, every 4 weeks",
          note: "Ensure good coverage. Apply every 4 weeks from early flowering to fruit set. Apply as a dilute spray or up to 3× concentrate."
        },
        {
          weed: "Mangoes — Anthracnose",
          pestList: ["Mangoes — Anthracnose"],
          states: ["Qld", "NSW", "WA", "SA", "NT"],
          rate: "160",
          rateMax: "200",
          unit: "g/100L",
          stage: "Flowering to harvest, every 4 weeks",
          note: "Spray every 4 weeks from flowering to harvest. During extended wet weather, spray every 14 days. Use in rotation with alternative chemistry. Apply as a dilute spray or up to 3× concentrate."
        },
        {
          weed: "Nectarines, Peaches — Leaf Curl, Shothole",
          pestList: ["Nectarines","Peaches — Leaf Curl","Shothole"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Buds swelling, before and within 1 week of bud opening",
          note: "CORRECT TIMING IS CRITICAL. Apply when buds are swelling but BEFORE AND WITHIN ONE WEEK OF OPENING. Monitor bud development of each variety. Where leaf curl is severe: 1. AUTUMN — apply at leaf fall. 2. Apply at FIRST SIGN of BUD SWELL and REPEAT ONE WEEK LATER. Apply as dilute or up to 2× concentrate."
        },
        {
          weed: "Pears — Black Spot (Scab)",
          pestList: ["Pears — Black Spot"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Green tip; repeat 10–14 days while conditions favour infection",
          note: "Spray at green tip and repeat 10–14 days while conditions favour infection. Apply as a dilute spray or up to 2× concentrate."
        },
        {
          weed: "Plums — Shothole",
          pestList: ["Plums — Shothole"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "g/100L",
          stage: "Bud swell, prior to early signs of leaf/bloom development",
          note: "Spray at bud swell prior to early signs of leaf/bloom development. Apply within one week of bud opening. Apply as a dilute spray or up to 2× concentrate."
        },
        {
          weed: "Vines — Downy Mildew",
          pestList: ["Vines — Downy Mildew"],
          states: ["All"],
          rate: "100",
          rateMax: "130",
          unit: "g/100L",
          stage: "Shoots 10 cm long; re-apply 10–14 day intervals",
          note: "First spray when shoots are 10 cm long and re-apply at 10–14 day intervals while conditions are favourable for infection. Use the higher rates when infection levels are high. Apply as a dilute spray or up to 3× concentrate."
        },
        {
          weed: "Walnuts — Walnut Blight",
          pestList: ["Walnuts — Walnut Blight"],
          states: ["All"],
          rate: "160",
          rateMax: "200",
          unit: "g/100L",
          stage: "Early pre-bloom (catkins partially expanded) through bloom and early nutlet stage",
          note: "Apply first spray at early pre-bloom when catkins are partially expanded. Make three additional applications during bloom and early nutlet stage at 7–10 day intervals. Additional applications may be necessary when frequent rainfall occurs. Use 175 mL of summer oil in conjunction with this product. Apply as a dilute spray ONLY."
        }
      ]
    },

    {
      crop: "Phytophthora Stem Canker — Trunk/Stem Paint Application",
      cropList: ["Phytophthora Stem Canker","Trunk/Stem Paint Application"],
      weeds: [
        {
          weed: "Phytophthora Stem Canker — Avocados, Bananas, Citrus, Kiwifruit, Litchi, Macadamias, Nectarines, Passionfruit, Plums, Peaches, Pecans, Tropical Fruit",
          pestList: ["Phytophthora Stem Canker — Avocados","Bananas","Citrus","Kiwifruit","Litchi","Macadamias","Nectarines","Passionfruit","Plums","Peaches","Pecans","Tropical Fruit"],
          states: ["All"],
          rate: "65",
          rateMax: "65",
          unit: "g/100L",
          stage: "After removing dead tissue; wherever cankers appear",
          note: "Rate: 65 g per 1L water or 65 g per 1L water-based paint. Mix to a smooth consistency. Apply only to stems, trees or vines wherever cankers appear, after removing dead tissue. Repeat applications up to a maximum of 5 per season until natural healing is commenced. Application with a paint carrier may only require 1–2 treatments per season."
        }
      ]
    }

  ,
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      weeds: [
          { weed: "Phytophthora stem canker", pestList: ["Phytophthora Stem Canker"], states: ["All"], rate: "65", unit: "g/1", rateText: "65 g/1 L water or 65 g/1 L water based paint", notes: "WHP: 1 day. Apply as a paint on the trunk" },
          { weed: "pepper spot", pestList: ["Pepper Spot"], states: ["All"], rate: "100", unit: "g/100L", rateText: "100g/100L", notes: "WHP: 1 day. Spray every 4 weeks from the end of flowering to harvest. During extended wet weather, spray every 14 days" }
      ]
    }
    ],

  // ── Agronomic Fields ──────────────────────────────────────────
  restraints: [
    "DO NOT apply to copper-sensitive crops or cultivars.",
    "DO NOT apply when poor drying conditions exist or when rain is imminent.",
    "DO NOT apply when temperatures are greater than 35°C or frost conditions prevail.",
    "DO NOT treat cabbages if frosts are likely — copper fungicides predispose cabbages to frost damage.",
    "DO NOT treat lettuce if frosts are likely — copper fungicides predispose lettuce to frost damage.",
    "DO NOT use a concentrate factor higher than that specified for each crop (Almonds/Deciduous Fruit: 2×; Avocados/Mangoes/Vines: 3×; Citrus/Macadamias/Walnuts: dilute only).",
    "DO NOT apply later than 1 day before harvest (WHP)."
  ],

  compatibility: {
    compatible:   ["Spray oils", "Most fungicides, insecticides and miticides"],
    incompatible: ["Some foliar fertilizers — conduct jar test before use"],
    notes: [
      "Compatible with spray oils and most commonly used fungicides, insecticides and miticides.",
      "Mixtures with more than one other product are NOT recommended — may be ineffective or cause serious crop damage.",
      "If compatibility is in question, use the compatibility jar test before mixing a whole tank.",
      "Nordox 750 WG may NOT be compatible with some foliar fertilizers — test before use.",
      "If this product is to be used in a mixture with an emulsifiable concentrate, add it to the tank after making the emulsion.",
      "Addition of a wetting agent (Wetter 1000 at label rates) is REQUIRED when applying to BRASSICAS, FABA BEANS, PEAS and ONIONS, and also when applying as a concentrate spray or by aircraft."
    ]
  },

  withholding: {
    harvest: "DO NOT apply later than 1 day before harvest.",
    grazing:  "Not specified on label."
  },

  surfactant:     "Wetting agent (Wetter 1000) required for brassicas, faba beans, peas, onions, and for concentrate or aircraft applications.",
  sprayerCleanup: "Shake and empty contents into spray tank. Rinse equipment with clean water. Do not dispose of undiluted chemical on site."

};
