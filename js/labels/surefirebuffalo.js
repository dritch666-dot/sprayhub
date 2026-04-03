// ─────────────────────────────────────────────────────────────────────────────
// SUREFIRE BUFFALO, BINDI & BROADLEAF WEEDKILLER — Label Data
// Bromoxynil / MCPA Herbicide (200 g/L Bromoxynil + 200 g/L MCPA)
// Source: Surefire_Buffalo_label.pdf
// APVMA Approval No: 80024/102915
// PCT Holdings Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['surefirebuffalo'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Surefire Buffalo, Bindi & Broadleaf Weedkiller",

  category:         "Herbicides",
  company:          "Surefire",
  activeIngredient: "200 g/L Bromoxynil (as n-octanoyl ester) + 200 g/L MCPA (as ethyl hexyl ester)",
  group:            "Group 6 + Group 4 Herbicide",
  modeOfAction:     "Inhibitor of photosynthesis at photosystem II (nitriles, Group 6) and disruptor of plant cell growth (phenoxys, Group 4).",
  formulation:      "Emulsifiable Concentrate",
  color:            "#155e75",
  apvma:            "80024/102915",
  labelPdf:         "Source labels/Surefire_Buffalo_label.pdf",
  sdsPdf:           "SDS Labels/Surefire_Buffalo_sds.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Broadleaf Weeds"],
    timing: ["Post-emergence", "3 leaf to fully tillered stage (Z13-30)"]
  },

  // ── Restraints ────────────────────────────────────────────────
  restraints: [
    "DO NOT apply if weeds are wilted by dry or cold weather or if crops are at a susceptible stage, or if rain is likely within 4 hours.",
    "DO NOT apply if frosts are imminent.",
    "DO NOT apply to diseased or frost affected crops or turf."
  ],

  // ── Withholding periods ───────────────────────────────────────
  withholding: {
    harvest: "DO NOT HARVEST, GRAZE OR CUT FOR STOCK FOOD FOR 8 WEEKS AFTER APPLICATION"
  },

  // ── Surfactant ───────────────────────────────────────────────
  surfactant: "None specified",

  // ── Spray equipment cleanup ───────────────────────────────────
  cleanup: "After use wash application equipment thoroughly with Spraymate Tank and Equipment Cleaner and rinse several times.",

  // ── Compatibility ──────────────────────────────────────────────
  compatibility: "This product is physically compatible in the spray tank with one of the following herbicides or insecticides in wheat and barley only: Metsulfuron methyl (600g/L), diclofop-methyl (500g/L), dicamba (500g/L), MCPA, dimethoate, omethoate, endosulfan or chlorpyrifos. When mixed with metsulfuron methyl or dicamba, DO NOT apply to cereals undersown with lucerne. When mixed with diclofop methyl, DO NOT exceed 1.4L of this product per hectare.",

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Cereals & Grass Pastures — Main broadleaf weeds (WA) ──
    {
      crop: "Wheat, Barley, Cereal Rye, Oats, Triticale, Linseed, Grass Pastures (WA — 3 leaf to fully tillered, Z13-30)",
      cropList: ["Wheat", "Barley", "Cereal Rye", "Oats", "Triticale", "Linseed", "Grass Pastures"],
      weeds: [
        {
          weed: "Amsinckia, Capeweed, Chamomile, Charlock, Corn Gromwell, Fat Hen, Field Madder, Hexham Scent, Horned Poppy, Indian Hedge Mustard, Lesser Swinecress, Mexican Poppy, Mintweed, Paterson's Curse, Rough Poppy, Saffron Thistle, Shepherd's Purse, Slender Thistles, Tree Hogweed, Turnip Weed, Wild Radish, Wild Turnip",
          pestList: ["Amsinckia", "Capeweed", "Chamomile", "Charlock", "Corn Gromwell", "Fat Hen", "Field Madder", "Hexham Scent", "Horned Poppy", "Indian Hedge Mustard", "Lesser Swinecress", "Mexican Poppy", "Mintweed", "Paterson's Curse", "Rough Poppy", "Saffron Thistle", "Shepherd's Purse", "Slender Thistles", "Tree Hogweed", "Turnip Weed", "Wild Radish", "Wild Turnip"],
          states: ["WA"],
          rate: "750",
          rateMax: "1400",
          unit: "mL/ha",
          stage: "Plants up to the 6 leaf stage but not more than 50 mm in diameter (750 mL); up to 8 leaf stage, <75 mm (1.4 L)",
          note: "CROP STAGE: Wheat, Barley, Cereal Rye, Oats and Triticale: 3 leaf to fully tillered stage (Zadok Scale Z13-30) for rates of 750mL to 1.4L/ha. Linseed: 50 to 150 mm high. DO NOT apply to linseed by aircraft. For optimal control, apply only when the weeds are actively growing. In the early stages following spraying, temporary wilting of crop and pasture may occur. Crop scorch may occur, particularly on oats if treatment is delayed to later stages of growth. Avoid application when maximum daily temperatures above 20°C occur, or are likely to occur for a few days after application. DO NOT apply to crops or pastures undersown with lucerne, clover or medics unless some damage is acceptable."
        }
      ]
    },

    // ── 2. Cereals & Grass Pastures — Main broadleaf weeds (Qld, NSW, ACT, Vic, Tas, SA, NT) ──
    {
      crop: "Wheat, Barley, Cereal Rye, Oats, Triticale, Linseed, Grass Pastures (Qld/NSW/ACT/Vic/Tas/SA/NT — 3 leaf to fully tillered, Z13-30)",
      cropList: ["Wheat", "Barley", "Cereal Rye", "Oats", "Triticale", "Linseed", "Grass Pastures"],
      weeds: [
        {
          weed: "Amsinckia, Capeweed, Chamomile, Charlock, Corn Gromwell, Fat Hen, Field Madder, Hexham Scent, Horned Poppy, Indian Hedge Mustard, Lesser Swinecress, Mexican Poppy, Mintweed, Paterson's Curse, Rough Poppy, Saffron Thistle, Shepherd's Purse, Slender Thistles, Tree Hogweed, Turnip Weed, Wild Radish, Wild Turnip",
          pestList: ["Amsinckia", "Capeweed", "Chamomile", "Charlock", "Corn Gromwell", "Fat Hen", "Field Madder", "Hexham Scent", "Horned Poppy", "Indian Hedge Mustard", "Lesser Swinecress", "Mexican Poppy", "Mintweed", "Paterson's Curse", "Rough Poppy", "Saffron Thistle", "Shepherd's Purse", "Slender Thistles", "Tree Hogweed", "Turnip Weed", "Wild Radish", "Wild Turnip"],
          states: ["Qld", "NSW", "ACT", "Vic", "Tas", "SA", "NT"],
          rate: "1400",
          rateMax: "2000",
          unit: "mL/ha",
          stage: "Plants up to the 8 leaf stage but not more than 75 mm in diameter",
          note: "CROP STAGE: Wheat, Barley, Cereal Rye, Oats and Triticale: 3 leaf to fully tillered stage (Zadok Scale Z13-30) for rates of 750mL to 1.4L/ha; 5 leaf to fully tillered stage (Z15-30) for rate of 2.0 L/ha (NSW, ACT, Vic, SA, WA, Tas only); or early tillering to fully tillered stage (Z21-30) (Qld only). Linseed: 50 to 150 mm high. DO NOT apply to linseed by aircraft. For optimal control, apply only when the weeds are actively growing. In the early stages following spraying, temporary wilting of crop and pasture may occur. Crop scorch may occur, particularly on oats if treatment is delayed to later stages of growth. Avoid application when maximum daily temperatures above 20°C occur, or are likely to occur for a few days after application. DO NOT apply to crops or pastures undersown with lucerne, clover or medics unless some damage is acceptable."
        }
      ]
    },

    // ── 3. Cereals & Grass Pastures — Black Bindweed, Common Peppercress, Mustards, Purple Calandrinia (All States) ──
    {
      crop: "Wheat, Barley, Cereal Rye, Oats, Triticale, Linseed, Grass Pastures (All States — 3 leaf to fully tillered, Z13-30)",
      cropList: ["Wheat", "Barley", "Cereal Rye", "Oats", "Triticale", "Linseed", "Grass Pastures"],
      weeds: [
        {
          weed: "Black Bindweed (Climbing Buckwheat), Common Peppercress, Mustards, Purple Calandrinia",
          pestList: ["Black Bindweed", "Climbing Buckwheat", "Common Peppercress", "Mustards", "Purple Calandrinia"],
          states: ["All"],
          rate: "1000",
          rateMax: "2000",
          unit: "mL/ha",
          stage: "Plants up to the 4 leaf stage, <35 mm (1.0 L); up to 6 leaf, <50 mm (1.4 L); up to 8 leaf, <75 mm (2.0 L)",
          note: "If spraying Black Bindweed when wheat, barley, cereal rye, oats, triticale or linseed is more than 300mm high, increase spray volume to 200 L/ha. For optimal control, apply only when the weeds are actively growing. DO NOT apply to crops or pastures undersown with lucerne, clover or medics unless some damage is acceptable."
        }
      ]
    },

    // ── 4. Cereals & Grass Pastures — Fumitory, Threecornered Jack ──
    {
      crop: "Wheat, Barley, Cereal Rye, Oats, Triticale, Linseed, Grass Pastures — Fumitory & Threecornered Jack",
      cropList: ["Wheat", "Barley", "Cereal Rye", "Oats", "Triticale", "Linseed", "Grass Pastures"],
      weeds: [
        {
          weed: "Fumitory, Threecornered Jack (Doublegee, Spiny Emex)",
          pestList: ["Fumitory", "Threecornered Jack", "Doublegee", "Spiny Emex"],
          states: ["Qld", "NSW", "ACT", "Vic", "Tas", "SA"],
          rate: "1400",
          rateMax: "2000",
          unit: "mL/ha",
          stage: "Plants up to the 3 leaf stage, <50 mm (1.4 L); up to 5 leaf, <75 mm (2.0 L)",
          note: "CROP STAGE: Wheat, Barley, Cereal Rye, Oats and Triticale: 3 leaf to fully tillered stage (Zadok Scale Z13-30) for rates of 750mL to 1.4L/ha; 5 leaf to fully tillered stage (Z15-30) for rate of 2.0 L/ha (NSW, ACT, Vic, SA, WA, Tas only); or early tillering to fully tillered stage (Z21-30) (Qld only). For optimal control, apply only when the weeds are actively growing."
        },
        {
          weed: "Fumitory, Threecornered Jack (Doublegee, Spiny Emex)",
          pestList: ["Fumitory", "Threecornered Jack", "Doublegee", "Spiny Emex"],
          states: ["WA"],
          rate: "750",
          rateMax: "1400",
          unit: "mL/ha",
          stage: "Plants up to the 4 leaf stage, <60 mm (750 mL); up to 6 leaf, <85 mm (1.4 L)",
          note: "CROP STAGE: Wheat, Barley, Cereal Rye, Oats and Triticale: 3 leaf to fully tillered stage (Zadok Scale Z13-30). For optimal control, apply only when the weeds are actively growing."
        }
      ]
    },

    // ── 5. Cereals & Grass Pastures — Variegated Thistle, Wireweed ──
    {
      crop: "Wheat, Barley, Cereal Rye, Oats, Triticale, Linseed, Grass Pastures — Variegated Thistle & Wireweed",
      cropList: ["Wheat", "Barley", "Cereal Rye", "Oats", "Triticale", "Linseed", "Grass Pastures"],
      weeds: [
        {
          weed: "Variegated Thistle, Wireweed (Hogweed)",
          pestList: ["Variegated Thistle", "Wireweed", "Hogweed"],
          states: ["Qld", "NSW", "ACT", "Vic", "Tas", "SA", "NT"],
          rate: "750",
          rateMax: "2000",
          unit: "mL/ha",
          stage: "Plants up to the 4 leaf stage, <35 mm (750 mL); up to 6 leaf, <50 mm (1.4 L or 2.0 L)",
          note: "Where Wireweed (Hogweed) occurs in red soils of low fertility, it has been found to be less susceptible. In these circumstances use 2.0 L/ha. For optimal control, apply only when the weeds are actively growing. Avoid application when maximum daily temperatures above 20°C occur."
        },
        {
          weed: "Variegated Thistle, Wireweed (Hogweed)",
          pestList: ["Variegated Thistle", "Wireweed", "Hogweed"],
          states: ["WA"],
          rate: "750",
          rateMax: "1400",
          unit: "mL/ha",
          stage: "Plants up to the 4 leaf stage, <35 mm (750 mL); up to 6 leaf, <50 mm (1.4 L)",
          note: "Where Wireweed (Hogweed) occurs in red soils of low fertility, it has been found to be less susceptible. In these circumstances use 2.0 L/ha."
        }
      ]
    },

    // ── 6. Cereals & Grass Pastures — Mountain Sorrel, Three-horned Bedstraw, Cleavers ──
    {
      crop: "Wheat, Barley, Cereal Rye, Oats, Triticale, Linseed, Grass Pastures — Mountain Sorrel, Three-horned Bedstraw & Cleavers",
      cropList: ["Wheat", "Barley", "Cereal Rye", "Oats", "Triticale", "Linseed", "Grass Pastures"],
      weeds: [
        {
          weed: "Mountain Sorrel, Three-horned Bedstraw",
          pestList: ["Mountain Sorrel", "Three-horned Bedstraw"],
          states: ["All"],
          rate: "750",
          rateMax: "1400",
          unit: "mL/ha",
          stage: "Plants up to the 6 leaf stage (750 mL); up to 8 leaf stage (1.4 L)",
          note: "For optimal control, apply only when the weeds are actively growing. Avoid application when maximum daily temperatures above 20°C occur, or are likely to occur for a few days after application."
        },
        {
          weed: "Cleavers",
          pestList: ["Cleavers"],
          states: ["All"],
          rate: "750",
          rateMax: "750",
          unit: "mL/ha",
          stage: "2-4 stem stage and 1-3 whorls of leaves per stem",
          note: "For optimal control, apply only when the weeds are actively growing."
        }
      ]
    },

    // ── 7. Wheat, Barley, Oats, Cereal Rye, Triticale — Common Sowthistle (Northern NSW & Qld only) ──
    {
      crop: "Wheat, Barley, Oats, Cereal Rye, Triticale (Northern NSW & Qld — 3 leaf to full tillering, Z13-Z30)",
      cropList: ["Wheat", "Barley", "Oats", "Cereal Rye", "Triticale"],
      weeds: [
        {
          weed: "Common Sowthistle",
          pestList: ["Common Sowthistle"],
          states: ["NSW", "Qld"],
          rate: "1400",
          rateMax: "2100",
          unit: "mL/ha",
          stage: "Up to 4 leaves (1.4 L); 4 to 8 leaves (2.1 L)",
          note: "Apply under good growing conditions. Avoid spraying when soil is dry. DO NOT spray under frosty conditions. In early stages following spraying, temporary wilting of crop may occur. Avoid application when maximum daily temperatures above 20°C or are likely to occur for a few days after application. DO NOT apply to crops undersown with lucerne, clover or medics unless some damage is acceptable. Crop Stages: Wheat, Barley, Oats, Triticale: 3 leaf to full tillering (Z13-Z30). Use as early as possible to avoid shading of weeds by the crop. Strictly for use on small weeds early in crop before shading out. If Group B resistance is suspected, or weeds have grown through a previous application of chlorsulfuron apply 2.1L/ha. Use a minimum spray volume of 70L/ha."
        }
      ]
    },

    // ── 8. Turf ──
    {
      crop: "Turf — Established Couch (including Queensland Blue), Kikuyu, Paspalum, Buffalo, Fescue, Bent and Rye Lawns",
      cropList: ["Turf", "Couch", "Kikuyu", "Paspalum", "Buffalo Grass", "Fescue", "Bent Grass", "Rye Grass"],
      weeds: [
        {
          weed: "Bindy-eye, Jo-Jo (Onehunga), Cudweed, Dandelion, Catsear, Plantains, Thistles, Oxalis, Capeweed, Creeping Buttercup, Fleabane, Clover (not Tas.)",
          pestList: ["Bindy-eye", "Jo-Jo", "Onehunga", "Cudweed", "Dandelion", "Catsear", "Plantains", "Thistles", "Oxalis", "Capeweed", "Creeping Buttercup", "Fleabane", "Clover"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/100L",
          stage: "-",
          note: "Apply evenly over the area to be treated. DO NOT mow turf for 2 days after treatment. Rate: 300 mL/100 L water or 60 mL/100 m². Turf: Apply a minimum of 500 L of water per hectare."
        }
      ]
    }
  ]
};
