// ─────────────────────────────────────────────────────────
// DUAL GOLD® HERBICIDE — Label Data
// Group 15 (Chloroacetamide) | Emulsifiable Concentrate (EC)
// Source: Syngenta_DualGold_Label.pdf
// APVMA Approval No: 50477
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['dualgold'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Dual Gold® Herbicide",
  company: "Syngenta",

  category:         "Herbicides",
  activeIngredient: "960 g/L S-metolachlor",
  group:            "Group 15 (Chloroacetamide)",
  modeOfAction:     "Inhibits cell division and elongation in germinating seedlings",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#065f46",
  apvma:            "50477",
  labelPdf:         "Source labels/Syngenta_Dual_Gold_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/DUAL_GOLD_HERBICIDE.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Annual Grasses", "Broadleaf Weeds", "Toad Rush"],
    timing: ["Pre-emergent", "Post-emergent (limited crops)"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Barley, Oats — Suppression of Annual Ryegrass",
      cropList: ["Barley","Oats","Suppression Of Annual Ryegrass"],
      weeds: [
        {
          weed: "Suppression of Annual Ryegrass",
          pestList: ["Suppression Of Annual Ryegrass"],
          states: ["NSW", "Vic", "Tas", "SA", "WA", "ACT"],
          rate: "375",
          rateMax: "500",
          unit: "mL/ha",
          stage: "Pre-emergent: apply to moist soils immediately after planting and before crop and weeds emerge",
          note: "Rate: 375–500 mL/ha. Use lower rate on light soils. Sufficient rain to thoroughly wet top 3–4 cm of soil should occur within 10 days. Damage may occur if crop sown too shallow (<4 cm) or on light sandy soils after heavy rain."
        }
      ]
    },

    {
      crop: "Brassicas (Broccoli, Brussels Sprouts, Cabbages, Cauliflowers) — Pre-emergent",
      cropList: ["Brassicas","Broccoli","Brussels Sprouts","Cabbages","Cauliflowers","Pre-Emergent"],
      weeds: [
        {
          weed: "Barnyard Grass, Blackberry Nightshade, Chickweed (suppression), Deadnettle, Fat Hen, Feathertop Rhodes Grass, Love Grass, Pigeon Grass, Pigweed (suppression), Potato Weed, Shepherd's Purse, Stinging Nettle, Summer Grass, Wireweed (suppression) [+ additional state-specific species; see note]",
          states: ["Qld", "NSW", "Vic", "Tas", "NT"],
          rate: "1.5",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: apply immediately after transplanting",
          note: "Rate: 1.5–2 L/ha. Apply immediately after transplanting. Sufficient irrigation to wet top 3–4 cm of soil within 24 hours. Use higher rate where Blackberry Nightshade, Chickweed, Fat Hen, Love Grass, Pigeon Grass, Pigweed, Potato Weed and Wireweed are major problems. NSW only additional species: Crowsfoot Grass, Fierce Thornapple (suppression), Liverseed Grass, Winter Grass. Qld only additional species: Apple of Peru, Awnless Barnyard Grass, Fierce Thornapple (suppression), Liverseed Grass, Yellow Weed, Redroot Amaranth (suppression). Vic/Tas only additional species: Annual Ryegrass, Common Cotula, Common Sowthistle (suppression), Crowsfoot Grass, Fiddle Dock, Italian Ryegrass, Liverseed Grass, Nettleleaf Goosefoot (suppression), Twiggy Turnip (suppression), Winter Grass. WARNING Qld only: stunting and reduced yield may occur in Broccoli in red soils and light alluvial soils."
        }
      ]
    },

    {
      crop: "Brassica Leafy Vegetables (Chinese/Asian Brassicas) — Pre-emergent",
      cropList: ["Brassica Leafy Vegetables (Chinese/Asian Brassicas)","Pre-Emergent"],
      weeds: [
        {
          weed: "Annual Ryegrass, Apple of Peru, Awnless Barnyard Grass, Blackberry Nightshade, Chickweed (suppression), Common Cotula, Common Sowthistle (suppression), Crowsfoot Grass, Deadnettle, Fat Hen, Feathertop Rhodes Grass, Fiddle Dock, Fierce Thornapple (suppression), Italian Ryegrass, Liverseed Grass, Love Grass, Nettleleaf Goosefoot (suppression), Pigeon Grass, Pigweed (suppression), Potato Weed, Redroot Amaranth (suppression), Shepherd's Purse, Stinging Nettle, Summer Grass, Twiggy Turnip (suppression), Winter Grass, Wireweed (suppression), Yellow Weed",
          states: ["All"],
          rate: "1",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: one treatment only, immediately after transplanting",
          note: "Rate: 1–2 L/ha. Apply one treatment only, immediately after transplanting. Apply in minimum 60 L water/ha. Sufficient irrigation to wet top 3–4 cm of soil within 24 hours. Use higher rate where Blackberry Nightshade, Chickweed, Fat Hen, Love Grass, Pigweed, Potato Weed and Wire Weed are major problems. Includes Chinese White Cabbage, Chinese Flowering Cabbage, Chinese Broccoli, Indian Mustard Cabbage, Chinese Cabbage, Mizuna Greens, Red Mustard, Curled Mustard, Mustard Greens, Turnip Greens, Rutabaga Greens, Mibuna Greens and others."
        }
      ]
    },

    {
      crop: "Culinary Herbs — Pre-emergent",
      cropList: ["Culinary Herbs","Pre-Emergent"],
      weeds: [
        {
          weed: "Annual grasses and broadleaf weeds (see note)",
          pestList: ["Annual Grasses And Broadleaf Weeds"],
          states: ["All"],
          rate: "1.5",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: apply before, at, or immediately after planting/transplanting and before crops and weeds have germinated",
          note: "Rate: 1.5–2 L/ha. Sufficient irrigation to wet top 3–4 cm of soil within 24 hours. DO NOT use more than once per season. Includes Basil, Bay Leaves, Borage, Chives, Coriander, Dill, Fennel, Lemon Balm, Lemon Grass, Marjoram (Oregano), Mints, Parsley, Rosemary, Sage, Tarragon, Thyme, Rucola (Rocket), Chervil, Mizuna, Lemon Verbena, Turmeric, Dianthus, Roses and others."
        }
      ]
    },

    {
      crop: "Canola and Mustard (Oilseed Cultivars) — Pre-emergent",
      cropList: ["Canola And Mustard (Oilseed Cultivars)","Pre-Emergent"],
      weeds: [
        {
          weed: "Toad Rush",
          pestList: ["Toad Rush"],
          states: ["All"],
          rate: "0.15",
          rateMax: "0.25",
          unit: "L/ha",
          stage: "Pre-emergent: apply at or immediately after planting and before crops and weeds emerge. Apply to moist soil",
          note: "Rate: 0.15–0.25 L/ha. Use rates toward higher end where longer residual control is required. See General Instructions for use in Zero-Tillage Systems."
        }
      ]
    },

    {
      crop: "Cotton (Pre-emergent) — Qld, NSW, WA",
      cropList: ["Cotton (Pre-Emergent)","Qld","NSW","WA"],
      weeds: [
        {
          weed: "Barnyard Grass, Crowsfoot Grass, Feathertop Rhodes Grass, Liverseed Grass, Love Grass, Pigeon Grass, Summer Grass, Trad (Wandering Jew)",
          pestList: ["Barnyard Grass","Crowsfoot Grass","Feathertop Rhodes Grass","Liverseed Grass","Love Grass","Pigeon Grass","Summer Grass","Trad"],
          states: ["Qld", "NSW", "WA"],
          rate: "1",
          rateMax: "1",
          unit: "L/ha",
          stage: "Pre-emergent: apply before, at or immediately after planting and before crops and weeds have germinated",
          note: "Rate: 1 L/ha. Apply with low volume boom sprayer at 60–120 L mixture/ha. Rain or irrigation necessary within 10 days to wet top 3–4 cm of soil. DO NOT throw untreated soil onto treated areas. DO NOT use on soils where sand content exceeds 70%. Use lower rate where sand content is 50–70%."
        }
      ]
    },

    {
      crop: "Cotton (Post-emergent Over-the-Top or Directed) — Qld, NSW, WA",
      cropList: ["Cotton (Post-Emergent Over-The-Top Or Directed)","Qld","NSW","WA"],
      weeds: [
        {
          weed: "Awnless Barnyard Grass, Barnyard Grass, Dinebra, Crowsfoot Grass, Liverseed Grass, Lovegrass, Pigeon Grass, Summer Grass, Trad (Wandering Jew)",
          pestList: ["Awnless Barnyard Grass","Barnyard Grass","Dinebra","Crowsfoot Grass","Liverseed Grass","Lovegrass","Pigeon Grass","Summer Grass","Trad"],
          states: ["Qld", "NSW", "WA"],
          rate: "1",
          rateMax: "1",
          unit: "L/ha",
          stage: "Post-emergent over-the-top or directed spray; crop 4 node to 18 node stage. Apply only one application per crop",
          note: "Rate: 1 L/ha. Apply as standalone over-the-top or directed spray using boom sprayer at 85–120 L/ha. Apply only ONE application of DUAL GOLD per crop. Rain or irrigation necessary within 10 days. Some minor transient leaf spotting or scorching may occur — use directed or shielded spray to avoid. DO NOT apply more than 2 L/ha in a single season."
        }
      ]
    },

    {
      crop: "Fallows — Pre-emergent Weed Control (Qld/NSW only)",
      cropList: ["Fallows","Pre-Emergent Weed Control"],
      weeds: [
        {
          weed: "Awnless Barnyard Grass, Barnyard Grass, Common Sowthistle, Crowsfoot Grass, Feathertop Rhodes Grass, Liverseed Grass, Love Grass, Pigeon Grass, Stinkgrass, Summer Grass",
          pestList: ["Awnless Barnyard Grass","Barnyard Grass","Common Sowthistle","Crowsfoot Grass","Feathertop Rhodes Grass","Liverseed Grass","Love Grass","Pigeon Grass","Stinkgrass","Summer Grass"],
          states: ["Qld", "NSW"],
          rate: "1",
          rateMax: "2",
          unit: "L/ha",
          stage: "Apply in fallows following crop harvest; before weeds begin germination. Not closer to planting following crop than CROP REPLANTING INTERVAL period",
          note: "Rate: 1–2 L/ha. DUAL GOLD will NOT control emerged weeds — use with recommended knockdown herbicide where weeds are present. Best results on even, weed-free soil before weeds germinate. Sufficient rainfall or irrigation required before weed emergence. Cultivation following application may reduce pre-emergence weed control. Split application option: 1.0–1.5 L/ha followed by 0.5–1.0 L/ha within 4 weeks — DO NOT apply more than 2 L/ha in a single season."
        }
      ]
    },

    {
      crop: "Green Beans and Navy Beans — Pre-emergent",
      cropList: ["Green Beans And Navy Beans","Pre-Emergent"],
      weeds: [
        {
          weed: "Blackberry Nightshade, Common Sowthistle, Fat Hen, Feathertop Rhodes Grass, Potato Weed, Barnyard Grass, Crowsfoot Grass, Liverseed Grass, Love Grass, Pigeon Grass, Stink Grass, Summer Grass, Pigweed (suppression)",
          pestList: ["Blackberry Nightshade","Common Sowthistle","Fat Hen","Feathertop Rhodes Grass","Potato Weed","Barnyard Grass","Crowsfoot Grass","Liverseed Grass","Love Grass","Pigeon Grass","Stink Grass","Summer Grass","Pigweed"],
          states: ["All"],
          rate: "1.5",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: apply before, at or immediately after planting and before crops and weeds have germinated",
          note: "Rate: 1.5–2 L/ha. Rain or irrigation necessary within 10 days. Use higher rate where major problem weeds present. DO NOT throw untreated soil onto treated areas. DO NOT use on soils where sand content exceeds 70%."
        },
        {
          weed: "Powell's Amaranth",
          states: ["All"],
          rate: "2",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: apply before, at or immediately after planting",
          note: "Rate: 2 L/ha. For sufficient Amaranth control, follow DUAL GOLD application with 1 L/ha Basagran (2-leaf Amaranth) or 2 L/ha Basagran (4-leaf Amaranth)."
        }
      ]
    },

    {
      crop: "Maize and Sweet Corn — Pre-emergent",
      cropList: ["Maize And Sweet Corn","Pre-Emergent"],
      weeds: [
        {
          weed: "Awnless Barnyard Grass, Barnyard Grass, Crowsfoot Grass, Feathertop Rhodes Grass, Liverseed Grass, Love Grass, Pigeon Grass, Stinkgrass, Summer Grass, Trad (Wandering Jew)",
          pestList: ["Awnless Barnyard Grass","Barnyard Grass","Crowsfoot Grass","Feathertop Rhodes Grass","Liverseed Grass","Love Grass","Pigeon Grass","Stinkgrass","Summer Grass","Trad"],
          states: ["All"],
          rate: "1",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: apply before, at or immediately after planting using low volume boom sprayer at 60–120 L mixture/ha",
          note: "Rate: 1–2 L/ha. Rain or irrigation necessary within 10 days. Use higher rate on heavy soils or heavy grass population. DO NOT throw untreated soil onto treated areas. DO NOT use on soils where sand content exceeds 70%."
        },
        {
          weed: "Blackberry Nightshade, Caltrop, Common Thornapple, Mintweed, Needle Burr, Noogoora Burr, Pigweed, Redroot Amaranth, Slim Amaranth",
          pestList: ["Blackberry Nightshade","Caltrop","Common Thornapple","Mintweed","Needle Burr","Noogoora Burr","Pigweed","Redroot Amaranth","Slim Amaranth"],
          states: ["All"],
          rate: "1",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent; tank mix with atrazine required for broadleaf control",
          note: "Rate: 1–2 L/ha + 2.5 L/ha atrazine (500 g/L). Tank mix with atrazine required for these broadleaf species."
        }
      ]
    },

    {
      crop: "Mungbeans — Pre-emergent and Post-emergent",
      cropList: ["Mungbeans","Pre-Emergent And Post-Emergent"],
      weeds: [
        {
          weed: "Awnless Barnyard Grass, Barnyard Grass, Common Sowthistle, Crowsfoot Grass, Feathertop Rhodes Grass, Liverseed Grass, Love Grass, Pigeon Grass, Stinkgrass, Summer Grass",
          pestList: ["Awnless Barnyard Grass","Barnyard Grass","Common Sowthistle","Crowsfoot Grass","Feathertop Rhodes Grass","Liverseed Grass","Love Grass","Pigeon Grass","Stinkgrass","Summer Grass"],
          states: ["All"],
          rate: "1",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: apply up to 4 weeks before sowing, immediately after planting, before crop and weeds have germinated",
          note: "Pre-emergent rate: 1–2 L/ha. Post-emergent rate: 1 L/ha (apply before weeds germinated, up to 4-leaf crop stage only). DO NOT apply after 4-leaf growth stage. Post-emergent use may result in necrotic spotting on leaf tissue — new growth unaffected. Split application option: 1.0–1.5 L/ha followed by 0.5–1.0 L/ha — DO NOT apply more than 2 L/ha in a single season. Rain or irrigation necessary within 10 days."
        }
      ]
    },

    {
      crop: "Pastures (Clovers, Phalaris, Cocksfoot) — Toad Rush",
      cropList: ["Pastures","Clovers","Phalaris","Cocksfoot","Toad Rush"],
      weeds: [
        {
          weed: "Toad Rush",
          pestList: ["Toad Rush"],
          states: ["NSW", "Vic", "SA", "Tas", "WA", "NT"],
          rate: "200",
          rateMax: "250",
          unit: "mL/ha",
          stage: "Pre-emergent: apply at or immediately after planting and before pasture species and weeds emerge",
          note: "Rate: 200–250 mL/ha. Apply to moist seed bed. Sufficient rain to wet top 3–4 cm within 10 days. Use higher end of range in wet areas or for longer residual control. DO NOT use in soils where prolonged waterlogging is anticipated. Avoid overlaps and double spraying in headlands where White, Persian and Balansa Clovers are sown."
        }
      ]
    },

    {
      crop: "Peanuts — Pre-emergent",
      cropList: ["Peanuts","Pre-Emergent"],
      weeds: [
        {
          weed: "Awnless Barnyard Grass, Barnyard Grass, Crowsfoot Grass, Feathertop Rhodes Grass, Liverseed Grass, Love Grass, Pigeon Grass, Stinkgrass, Summer Grass, Trad (Wandering Jew)",
          pestList: ["Awnless Barnyard Grass","Barnyard Grass","Crowsfoot Grass","Feathertop Rhodes Grass","Liverseed Grass","Love Grass","Pigeon Grass","Stinkgrass","Summer Grass","Trad"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "1",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: apply before pre-irrigation where soil crusting is likely; before, at or immediately after planting and before weeds germinate",
          note: "Rate: 1–2 L/ha. Rain or irrigation necessary within 10 days. Incorporate if rain does not occur. Use higher rate on heavy soils or heavy grass population."
        }
      ]
    },

    {
      crop: "Rhubarb — Pre-emergent",
      cropList: ["Rhubarb","Pre-Emergent"],
      weeds: [
        {
          weed: "Annual Ryegrass, Apple of Peru, Awnless Barnyard Grass, Blackberry Nightshade, Chickweed (suppression), Common Cotula, Common Sowthistle (suppression), Crowsfoot Grass, Deadnettle, Fat Hen, Feathertop Rhodes Grass, Fiddle Dock, Fierce Thornapple (suppression), Italian Ryegrass, Liverseed Grass, Love Grass, Nettleleaf Goosefoot (suppression), Pigeon Grass, Pigweed (suppression), Potato Weed, Redroot Amaranth (suppression), Shepherd's Purse, Stinging Nettle, Summer Grass, Twiggy Turnip (suppression), Winter Grass, Wireweed (suppression), Yellow Weed",
          states: ["All"],
          rate: "1",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: one application only, immediately before or after transplanting crowns and before weeds have germinated",
          note: "Rate: 1–2 L/ha. Sufficient irrigation to wet soil through weed zone within 24 hours. Further weed germination may occur following re-hilling due to untreated soil exposure."
        }
      ]
    },

    {
      crop: "Soybeans and Sunflowers — Pre-emergent",
      cropList: ["Soybeans And Sunflowers","Pre-Emergent"],
      weeds: [
        {
          weed: "Awnless Barnyard Grass, Barnyard Grass, Crowsfoot Grass, Feathertop Rhodes Grass, Liverseed Grass, Love Grass, Pigeon Grass, Stinkgrass, Summer Grass, Trad (Wandering Jew)",
          pestList: ["Awnless Barnyard Grass","Barnyard Grass","Crowsfoot Grass","Feathertop Rhodes Grass","Liverseed Grass","Love Grass","Pigeon Grass","Stinkgrass","Summer Grass","Trad"],
          states: ["All"],
          rate: "1",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: apply before, at or immediately after planting and before weeds germinate",
          note: "Rate: 1–2 L/ha. Rain or irrigation necessary within 10 days. Incorporate if unavailable. Use higher rate on heavy soils or heavy grass population."
        }
      ]
    },

    {
      crop: "Sorghum (CONCEP® II or EPIVIO® C treated seed only) — Pre-emergent",
      cropList: ["Sorghum (CONCEP® II Or EPIVIO® C Treated Seed Only)","Pre-Emergent"],
      weeds: [
        {
          weed: "Awnless Barnyard Grass, Barnyard Grass, Crowsfoot Grass, Feathertop Rhodes Grass, Liverseed Grass, Love Grass, Pigeon Grass, Stinkgrass, Summer Grass, Trad (Wandering Jew)",
          pestList: ["Awnless Barnyard Grass","Barnyard Grass","Crowsfoot Grass","Feathertop Rhodes Grass","Liverseed Grass","Love Grass","Pigeon Grass","Stinkgrass","Summer Grass","Trad"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "1",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: apply before, at or immediately after planting using low volume boom sprayer at 60–120 L mixture/ha",
          note: "Rate: 1–2 L/ha. DO NOT apply to Sorghum seed NOT previously treated with CONCEP II or EPIVIO C Sorghum Seed Safener. Rain or irrigation necessary within 10 days. Use lower rate on sandy soils. Use higher rate on heavy soils or heavy grass population. DO NOT apply more than 2 L/ha in a single season. DO NOT apply after 6-leaf growth stage. Split application option available: 1.0–1.5 L/ha up to 4 weeks prior to sowing followed by 0.5–1.0 L/ha at or after planting."
        },
        {
          weed: "Blackberry Nightshade, Caltrop, Common Thornapple, Mintweed, Needle Burr, Noogoora Burr, Pigweed, Redroot Amaranth, Slim Amaranth",
          pestList: ["Blackberry Nightshade","Caltrop","Common Thornapple","Mintweed","Needle Burr","Noogoora Burr","Pigweed","Redroot Amaranth","Slim Amaranth"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "1",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent; tank mix with atrazine required for broadleaf control",
          note: "Rate: 1–2 L/ha + 2.5 L/ha atrazine (500 g/L). Tank mix with atrazine required for these broadleaf species."
        }
      ]
    },

    {
      crop: "Spinach and Silverbeet — Pre-emergent",
      cropList: ["Spinach And Silverbeet","Pre-Emergent"],
      weeds: [
        {
          weed: "Annual grasses and broadleaf weeds",
          pestList: ["Annual Grasses And Broadleaf Weeds"],
          states: ["All"],
          rate: "1.5",
          rateMax: "2",
          unit: "L/ha",
          stage: "Pre-emergent: apply with boom spray in minimum 60 L water/ha, immediately before, at or immediately after sowing; if transplanting apply immediately before transplanting. DO NOT apply herbicide over transplants",
          note: "Rate: 1.5–2 L/ha. Crop retardation may occur on soils with low organic matter and >60% fine sand and silt — use lower rate, apply to moist soil, limit post-application irrigation to 25 mm. DO NOT use more than once per year on problem soil types."
        }
      ]
    },

    {
      crop: "Spring Onions and Shallots — Pre-emergent",
      cropList: ["Spring Onions And Shallots","Pre-Emergent"],
      weeds: [
        {
          weed: "Annual grasses and broadleaf weeds",
          pestList: ["Annual Grasses And Broadleaf Weeds"],
          states: ["All"],
          rate: "1",
          rateMax: "1",
          unit: "L/ha",
          stage: "Direct seeded: apply one application before, at or immediately after planting and before crops and weeds have germinated. Transplanted: apply one application before planting",
          note: "Rate: 1 L/ha. Direct seeded or transplanted application options."
        }
      ]
    }

  ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply by aircraft.",
    "DO NOT apply to waterlogged soils.",
    "DO NOT apply if heavy rains or storms likely to cause runoff are forecast within 2 days of application.",
    "DO NOT irrigate to the point of runoff for at least 2 days after application.",
    "Fallows, Mungbeans, Sorghum: DO NOT apply more than 2 L/ha in a single season.",
    "Mungbeans: DO NOT apply after the 4-leaf growth stage.",
    "Sorghum: DO NOT apply after the 6-leaf growth stage.",
    "Sorghum: DO NOT apply to seed NOT previously treated with CONCEP II or EPIVIO C Sorghum Seed Safener.",
    "DO NOT use on soils where sand content exceeds 70%.",
    "DO NOT throw untreated soil onto treated areas as this will reduce weed control.",
    "DUAL GOLD will NOT control emerged weeds — pre-emergent application only in most situations."
  ],

  compatibility: {
    compatible:   ["Atrazine 500 g/L (for broadleaf control in Maize and Sorghum).", "Basagran (follow-up for Amaranth in Beans).", "Weedmaster DST (over-the-top Roundup Ready Flex Cotton use)."],
    incompatible: [],
    notes:        ["Minimum spray volume: 60 L/ha (low volume boom). Minimum spray volume for Spinach/Silverbeet: 60 L water/ha.", "For Zero Tillage Systems refer to General Instructions section."]
  },

  withholding: {
    harvest: "No withholding period specified for most uses — soil-applied pre-emergent. Refer to specific crop label sections.",
    grazing:  "Not specified — refer to crop-specific use sections."
  },

  surfactant:     "Not required for soil-applied pre-emergent uses.",
  sprayerCleanup: "Triple rinse containers before disposal. Add rinsings to spray tank. DO NOT dispose of undiluted chemicals on site."

};
