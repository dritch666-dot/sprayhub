// ─────────────────────────────────────────────────────────────────────────────
// IMTRADE CLETHODIM 240 EC — Label Data
// Clethodim Herbicide (240 g/L Clethodim)
// Source: Imtrade-Clethodim-240-EC-Label.pdf
// APVMA Approval No: 63680/106769
// Imtrade Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['imtradeclethodim240ec'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Imtrade Clethodim 240 EC Herbicide",

  category:         "Herbicides",
  activeIngredient: "240 g/L Clethodim",
  group:            "Group 1 Herbicide (ACCase Inhibitor)",
  modeOfAction:     "Inhibitor of acetyl CoA carboxylase (ACCase). A cyclohexanedione oxime derivative ('dim') herbicide selective to broadleaf crops and lethal to grass weeds.",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#155e75",
  apvma:            "63680/106769",
  company: "Imtrade",
  labelPdf:         "Source labels/Imtrade-Clethodim-240-EC-Label.pdf",
  sdsPdf:           "SDS Labels/Imtrade-Clethodim-240-EC-SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Annual Ryegrass", "Wild Oats", "Barley Grass", "Brome Grass", "Volunteer Cereals", "Barnyard Grass"],
    timing: ["Post-emergence of weeds", "2-leaf to fully tillered"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Canola, Chickpeas, Faba Beans, Field Peas, Lentils, Lupins ──
    {
      crop: "Canola, Chickpeas, Faba Beans, Field Peas, Lentils, Lupins",
      cropList: ["Canola", "Chickpeas", "Faba Beans", "Field Peas", "Lentils", "Lupins"],
      weeds: [
        {
          weed: "Annual Ryegrass (Lolium rigidum)",
          pestList: ["Annual Ryegrass"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "150–250 mL/ha. Always apply with D-C Trate at 2L/100L or Hasten at 1L/100L or Kwickin at 1L/100L or Uptake at 500 mL/100L spray volume. WHP: Not required when used as directed."
        },
        {
          weed: "Annual Phalaris (Phalaris minor)",
          pestList: ["Annual Phalaris"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "150–250 mL/ha. Always apply with adjuvant. WHP: Not required when used as directed."
        },
        {
          weed: "Barley Grass (Hordeum leporinum)",
          pestList: ["Barley Grass"],
          states: ["All"],
          rate: "175",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "175–250 mL/ha. Always apply with adjuvant. WHP: Not required when used as directed."
        },
        {
          weed: "Brome Grass (Bromus diandrus)",
          pestList: ["Brome Grass"],
          states: ["All"],
          rate: "175",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "175–250 mL/ha. Always apply with adjuvant. WHP: Not required when used as directed."
        },
        {
          weed: "Wild Oats (Avena spp.)",
          pestList: ["Wild Oats"],
          states: ["All"],
          rate: "200",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "200–250 mL/ha. Always apply with adjuvant. WHP: Not required when used as directed."
        },
        {
          weed: "Volunteer Wheat (Triticum aestivum)",
          pestList: ["Volunteer Wheat"],
          states: ["All"],
          rate: "200",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "200–250 mL/ha (*175–250 mL/ha in WA only). Always apply with adjuvant. WHP: Not required when used as directed."
        },
        {
          weed: "Volunteer Oats (Avena sativa)",
          pestList: ["Volunteer Oats"],
          states: ["All"],
          rate: "200",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "200–250 mL/ha. Always apply with adjuvant. WHP: Not required when used as directed."
        },
        {
          weed: "Volunteer Barley (Hordeum vulgare)",
          pestList: ["Volunteer Barley"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "250 mL/ha. Always apply with adjuvant. WHP: Not required when used as directed."
        },
        {
          weed: "Silver Grass (Vulpia bromoides) — suppression only",
          pestList: ["Silver Grass"],
          states: ["NSW", "ACT", "Vic", "Tas"],
          rate: "250",
          rateMax: "500",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "250–500 mL/ha. Suppression only (not Qld, WA). Always apply with adjuvant. WHP: Not required when used as directed."
        },
        {
          weed: "Paradoxa Grass (Phalaris paradoxa)",
          pestList: ["Paradoxa Grass"],
          states: ["NSW", "ACT"],
          rate: "250",
          rateMax: "375",
          unit: "mL/ha",
          stage: "2-leaf to 5-leaf stage only",
          note: "250–375 mL/ha. 5-leaf stage only; not Qld. Application up to 7-node/early ear-branching crop growth stage only. Always apply with adjuvant. WHP: Not required when used as directed."
        }
      ]
    },

    // ── 2. Cotton, Mung Beans, Peanuts, Soybeans ──
    {
      crop: "Cotton, Mung Beans, Peanuts, Soybeans",
      cropList: ["Cotton", "Mung Beans", "Peanuts", "Soybeans"],
      weeds: [
        {
          weed: "Barnyard Grass (Echinochloa spp.)",
          pestList: ["Barnyard Grass"],
          states: ["Qld", "NSW", "ACT", "Vic", "WA", "NT"],
          rate: "250",
          rateMax: "375",
          unit: "mL/ha",
          stage: "2 to 5-leaf stage",
          note: "250–375 mL/ha. Always apply with D-C Trate at 2L/100L or Hasten at 1L/100L or Kwickin at 1L/100L or Uptake at 500 mL/100L. The lower doses will provide effective control if applied under ideal conditions to weeds that are smaller, actively growing and free from temperature or water stress. WHP: Not required when used as directed."
        },
        {
          weed: "Brown Grass (Agrostis avenacea)",
          pestList: ["Brown Grass"],
          states: ["Qld", "NSW", "ACT", "Vic", "WA", "NT"],
          rate: "375",
          rateMax: "375",
          unit: "mL/ha",
          stage: "5-leaf to fully tillered",
          note: "375 mL/ha. Always apply with adjuvant. WHP: Not required when used as directed."
        },
        {
          weed: "Crowsfoot Grass (Eleusine indica)",
          pestList: ["Crowsfoot Grass"],
          states: ["Qld", "NSW", "ACT", "Vic", "WA", "NT"],
          rate: "375",
          rateMax: "375",
          unit: "mL/ha",
          stage: "5-leaf to fully tillered",
          note: "375 mL/ha. Always apply with adjuvant. WHP: Not required when used as directed."
        },
        {
          weed: "Feathertop Rhodes Grass (Chloris virgata), Liverseed Grass (Urochloa panicoides), Red Spanglegrass (Leptochloa filiformis), Seedling Johnson Grass (Sorghum halepense), Summer Grass (Digitaria spp.), Volunteer Sorghum (Sorghum spp.)",
          pestList: ["Feathertop Rhodes Grass", "Liverseed Grass", "Red Spanglegrass", "Seedling Johnson Grass", "Summer Grass", "Volunteer Sorghum"],
          states: ["Qld", "NSW", "ACT", "Vic", "WA", "NT"],
          rate: "250",
          rateMax: "375",
          unit: "mL/ha",
          stage: "2 to 5-leaf stage",
          note: "250–375 mL/ha. Always apply with adjuvant. WHP: Not required when used as directed."
        }
      ]
    },

    // ── 3. Beetroot, Cabbage, Celery, Lettuce, Potatoes, Onions ──
    {
      crop: "Beetroot, Cabbage, Celery, Lettuce, Potatoes, Onions",
      cropList: ["Beetroot", "Cabbage", "Celery", "Lettuce", "Potatoes", "Onions"],
      weeds: [
        {
          weed: "Barnyard Grass (Echinochloa spp.), Brown Grass (Agrostis avenacea), Crowsfoot Grass (Eleusine indica), Feathertop Rhodes Grass (Chloris virgata), Liverseed Grass (Urochloa panicoides), Red Spanglegrass (Leptochloa filiformis), Seedling Johnson Grass (Sorghum halepense), Summer Grass (Digitaria spp.), Volunteer Sorghum (Sorghum spp.)",
          pestList: ["Barnyard Grass", "Brown Grass", "Crowsfoot Grass", "Feathertop Rhodes Grass", "Liverseed Grass", "Red Spanglegrass", "Seedling Johnson Grass", "Summer Grass", "Volunteer Sorghum"],
          states: ["All"],
          rate: "250",
          rateMax: "375",
          unit: "mL/ha",
          stage: "2 to 5-leaf to fully tillered",
          note: "250–375 mL/ha. Always apply with adjuvant. Use a spray volume of 150 L/ha when spraying dense grass populations. WHP: Beetroot/Cabbage 7 days. Onions 14 days. Lettuce/Potatoes 4 weeks. Celery 9 weeks."
        },
        {
          weed: "Annual Ryegrass (Lolium rigidum), Annual Phalaris (Phalaris minor)",
          pestList: ["Annual Ryegrass", "Annual Phalaris"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "150–250 mL/ha. Always apply with adjuvant. WHP: Beetroot/Cabbage 7 days. Onions 14 days. Lettuce/Potatoes 4 weeks. Celery 9 weeks."
        },
        {
          weed: "Barley Grass (Hordeum leporinum), Brome Grass (Bromus diandrus), Wild Oats (Avena spp.)",
          pestList: ["Barley Grass", "Brome Grass", "Wild Oats"],
          states: ["All"],
          rate: "175",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "175–250 mL/ha. Always apply with adjuvant. WHP: Beetroot/Cabbage 7 days. Onions 14 days. Lettuce/Potatoes 4 weeks. Celery 9 weeks."
        },
        {
          weed: "Volunteer Wheat (Triticum aestivum), Volunteer Oats (Avena sativa)",
          pestList: ["Volunteer Wheat", "Volunteer Oats"],
          states: ["All"],
          rate: "200",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "200–250 mL/ha. Always apply with adjuvant. WHP: Beetroot/Cabbage 7 days. Onions 14 days. Lettuce/Potatoes 4 weeks. Celery 9 weeks."
        },
        {
          weed: "Volunteer Barley (Hordeum vulgare)",
          pestList: ["Volunteer Barley"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "250 mL/ha. Always apply with adjuvant. WHP: Beetroot/Cabbage 7 days. Onions 14 days. Lettuce/Potatoes 4 weeks. Celery 9 weeks."
        },
        {
          weed: "Silver Grass (Vulpia bromoides) — suppression only",
          pestList: ["Silver Grass"],
          states: ["NSW", "ACT", "Vic", "Tas"],
          rate: "250",
          rateMax: "500",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "250–500 mL/ha. Suppression only (not Qld, WA). Always apply with adjuvant. WHP: Beetroot/Cabbage 7 days. Onions 14 days. Lettuce/Potatoes 4 weeks. Celery 9 weeks."
        },
        {
          weed: "Winter Grass (Poa annua)",
          pestList: ["Winter Grass"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/ha",
          stage: "2-leaf to fully tillered",
          note: "500 mL/ha. Always apply with adjuvant. WHP: Beetroot/Cabbage 7 days. Onions 14 days. Lettuce/Potatoes 4 weeks. Celery 9 weeks."
        }
      ]
    },

    // ── 4. Forestry, Non-bearing Fruit Trees, Ornamentals ──
    {
      crop: "Forestry, Non-bearing Fruit Trees, Ornamentals",
      cropList: ["Forestry", "Non-bearing Fruit Trees", "Ornamentals"],
      weeds: [
        {
          weed: "Annual Ryegrass (Lolium rigidum), Annual Phalaris (Phalaris minor), Barley Grass (Hordeum leporinum), Barnyard Grass (Echinochloa spp.), Brome Grass (Bromus diandrus), Brown Grass (Agrostis avenacea), Crowsfoot Grass (Eleusine indica), Feathertop Rhodes Grass (Chloris virgata), Liverseed Grass (Urochloa panicoides), Paradoxa Grass (Phalaris paradoxa), Red Spanglegrass (Leptochloa filiformis), Seedling Johnson Grass (Sorghum halepense), Silver Grass (Vulpia bromoides), Summer Grass (Digitaria spp.), Volunteer Sorghum (Sorghum spp.), Volunteer Barley (Hordeum vulgare), Volunteer Oats (Avena sativa), Volunteer Wheat (Triticum aestivum), Winter Grass (Poa annua)",
          pestList: ["Annual Ryegrass", "Annual Phalaris", "Barley Grass", "Barnyard Grass", "Brome Grass", "Brown Grass", "Crowsfoot Grass", "Feathertop Rhodes Grass", "Liverseed Grass", "Paradoxa Grass", "Red Spanglegrass", "Seedling Johnson Grass", "Silver Grass", "Summer Grass", "Volunteer Sorghum", "Volunteer Barley", "Volunteer Oats", "Volunteer Wheat", "Winter Grass"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/ha",
          stage: "Apply after plants have recovered from transplant shock and are showing signs of active growth, 2-leaf to fully tillered",
          note: "500 mL/ha. Use a spray volume of 150 L/ha when spraying dense grass populations. DO NOT use on Gymnosperms (pines, conifers etc) unless a prior test has been conducted to check safety on the relevant species. Always apply with adjuvant. WHP: Forestry — not required."
        }
      ]
    }

  ],

  // ── Withholding ──────────────────────────────────────────
  withholding: {
    harvest: "Canola, Chickpeas, Cotton, Faba Beans, Field Peas, Lentils, Lupins, Mung Beans, Peanuts, Soybeans: Not required when used as directed. Forestry: Not required. Beetroot, Cabbage: 7 days. Onions: 14 days. Lettuce, Potatoes: 4 weeks. Celery: 9 weeks.",
    grazing: "Canola, Chickpeas, Faba Beans, Field Peas, Lentils, Lupins, Mung Beans, Peanuts, Soybeans: Do not graze or cut for stock feed for 21 days. Cotton: Do not graze or cut for cotton forage or stubble for stockfeed."
  },

  // ── Notes ──────────────────────────────────────────
  note: "Always apply with an adjuvant: D-C Trate at 2L/100L, or Hasten at 1L/100L, or Kwickin at 1L/100L, or Uptake at 500 mL/100L spray volume. The lower doses will provide effective control if applied under ideal conditions to weeds that are smaller, actively growing and free from temperature or water stress. DO NOT apply without an adjuvant. DO NOT apply to plants that are stressed by moisture or temperature extremes. DO NOT apply if rain is expected within 1 hour of application. DO NOT apply Imtrade Clethodim 240 EC Herbicide more than once to any one crop. Apply in a minimum of 50 litres of water per hectare. Use 150 L/ha when spraying dense grass populations.",

  // ── Restraints ──────────────────────────────────────────
  restraints: [
    "DO NOT apply without an adjuvant",
    "DO NOT apply to plants that are stressed by moisture or temperature extremes",
    "DO NOT apply if rain is expected within 1 hour of application",
    "DO NOT apply Imtrade Clethodim 240 EC Herbicide more than once to any one crop",
    "DO NOT use on Gymnosperms (pines, conifers etc) unless a prior test has been conducted",
    "Generally selective to broadleaf plants — is active against grasses only"
  ]

};
