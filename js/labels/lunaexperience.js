// ─────────────────────────────────────────────────────────────────────────────
// Luna Experience® FUNGICIDE — Label Data
// Suspension Concentrate (SC) | Group 3 + Group 7 Fungicide
// Source: BayerCropSciencePtyLtd_LunaExperience_Label.pdf
// APVMA Approval No: 87841
// Bayer CropScience Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['lunaexperience'] = {
  name:             "Luna Experience Fungicide",

  category:         "Fungicides",
  activeIngredient: "200 g/L Tebuconazole + 200 g/L Fluopyram",
  group:            "Group 3 + Group 7 Fungicide",
  modeOfAction:     "DMI (triazole) + SDHI — systemic and curative action",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#0284c7",
  apvma:            "87841",
  company: "Bayer",
  labelPdf:         "Source labels/BayerCropSciencePtyLtd_LunaExperience_Label.pdf",
  sdsPdf:           "SDS Labels/Luna_Experience_Fungicide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Powdery Mildew", "Sigatoka", "Botrytis", "Rust", "Leaf Spot", "Anthracnose", "Black Spot"],
    timing: ["Curative", "Preventive"]
  },

  crops: [
    // ── Bananas ───────────────────────────────────────────────
    {
      crop: "Bananas (Qld, NSW, WA & NT only)",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Yellow Sigatoka, leaf speckle, cordana leaf spot",
          pestList: ["Yellow Sigatoka", "Leaf Speckle", "Cordana Leaf Spot"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "375", rateMax: "375", unit: "mL/ha",
          stage: "Regular fungicide program",
          note: "Applied as part of a regular fungicide program, alternating MOA groups. Intervals 14–21 days. Max 4 applications per 12 months. Min 20 L/ha by aircraft. Use mineral crop oil 3–5 L/ha. Maintain de-leafing. Resistance management applies."
        }
      ]
    },

    // ── Citrus ────────────────────────────────────────────────
    {
      crop: "Citrus",
      cropList: ["Citrus", "Oranges", "Lemons", "Limes", "Mandarins", "Grapefruit"],
      weeds: [
        {
          weed: "Black spot, emperor brown spot, botrytis",
          pestList: ["Black Spot", "Emperor Brown Spot", "Botrytis"],
          states: ["All"],
          rate: "50", rateMax: "50", unit: "mL/100L",
          stage: "After flowering — preventive",
          note: "Apply preventatively from after flowering. Max 1 application per year. DO NOT apply in spray volume > 5,000 L/ha (2.5 L/ha) or during flowering. WHP: 28 days."
        }
      ]
    },

    // ── Grapevines ────────────────────────────────────────────
    {
      crop: "Grapevines",
      cropList: ["Grapevines", "Grapes"],
      weeds: [
        {
          weed: "Powdery mildew, botrytis bunch rot",
          pestList: ["Powdery Mildew", "Botrytis Bunch Rot"],
          states: ["All"],
          rate: "37.5", rateMax: "37.5", unit: "mL/100L",
          stage: "Preventive — up to E-L 29",
          note: "Powdery mildew: up to 2 preventive applications from E-L 11, 10–14 day interval. Botrytis: preventive at 10% and 80% capfall. DO NOT apply after berries 4 mm (E-L 29). Max 2 applications per season. DO NOT apply > 0.5 L/ha or in spray volume > 1,330 L/ha."
        }
      ]
    },

    // ── Custard apples, persimmons ────────────────────────────
    {
      crop: "Custard Apples, Persimmons (American)",
      cropList: ["Custard Apples", "Persimmons"],
      weeds: [
        {
          weed: "Anthracnose (Colletotrichum spp.)",
          pestList: ["Anthracnose"],
          states: ["All"],
          rate: "75", rateMax: "75", unit: "mL/100L",
          stage: "Begin at susceptible stages — preventive",
          note: "Preventive program, alternate MOA groups. Intervals 14–21 days. Max 3 applications (up to 2.5 L/ha total) in 12 months. High volume spray for coverage."
        }
      ]
    },

    // ── Passionfruit ──────────────────────────────────────────
    {
      crop: "Passionfruit",
      cropList: ["Passionfruit"],
      weeds: [
        {
          weed: "Anthracnose, septoria spot, brown spot",
          pestList: ["Anthracnose", "Septoria Spot", "Brown Spot"],
          states: ["All"],
          rate: "75", rateMax: "75", unit: "mL/100L",
          stage: "Begin at susceptible stages — preventive",
          note: "Preventive program, alternate MOA groups. Intervals 14–21 days. Max 3 applications (up to 2.5 L/ha total) in 12 months. High volume spray for coverage. WHP: 1 day."
        }
      ]
    },

    // ── Olives ────────────────────────────────────────────────
    {
      crop: "Olives",
      cropList: ["Olives"],
      weeds: [
        {
          weed: "Anthracnose (Colletotrichum spp.)",
          pestList: ["Anthracnose"],
          states: ["All"],
          rate: "50", rateMax: "50", unit: "mL/100L",
          stage: "Begin at susceptible stages — preventive",
          note: "Preventive program, alternate MOA groups. Intervals 14–21 days. Max 2–3 applications (up to 2.5 L/ha total) in 12 months. WHP: 14 days."
        }
      ]
    },

    // ── Strawberries ──────────────────────────────────────────
    {
      crop: "Strawberries (includes protected cropping)",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Grey mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis"],
          states: ["All"],
          rate: "1000", rateMax: "1000", unit: "mL/ha",
          stage: "Preventive — prior to disease onset",
          note: "Apply preventive prior to disease onset. Follow-up 7–14 days. Thorough coverage. Part of integrated disease control. Max 2 applications per year. WHP: 1 day."
        }
      ]
    },

    // ── Pyrethrum ─────────────────────────────────────────────
    {
      crop: "Pyrethrum",
      cropList: ["Pyrethrum"],
      weeds: [
        {
          weed: "Ray blight, sclerotinia flower blight",
          pestList: ["Ray Blight", "Sclerotinia Flower Blight"],
          states: ["All"],
          rate: "1000", rateMax: "1000", unit: "mL/ha",
          stage: "Preventive — 10–30% open flowers",
          note: "Apply preventive prior to disease onset, 10–30% open flowers. Follow-up 7–14 days. Part of integrated disease control. Max 2 applications per year."
        }
      ]
    },

    // ── Almonds ───────────────────────────────────────────────
    {
      crop: "Almonds",
      cropList: ["Almonds"],
      weeds: [
        {
          weed: "Blossom blight, stone fruit rust, shot hole",
          pestList: ["Blossom Blight", "Stone Fruit Rust", "Shot Hole"],
          states: ["All"],
          rate: "37.5", rateMax: "37.5", unit: "mL/100L",
          stage: "Preventive program — 10–21 day intervals",
          note: "Blossom blight: 1–10% blossom, full bloom, petal fall. Rust: at or prior to first signs. Shot hole: 10–14 day intervals from early pink bud. Max 3 applications per season. DO NOT apply > 1.25 L/ha per application or > 2.5 L/ha per season."
        },
        {
          weed: "Hull rot — Suppression only",
          pestList: ["Hull Rot"],
          states: ["All"],
          rate: "50", rateMax: "50", unit: "mL/100L",
          stage: "Early hull split",
          note: "Apply at early (1–10%) hull split, repeat at 50% hull split if needed. Apply to run-off. Concentrate spraying not recommended."
        }
      ]
    },

    // ── Macadamias ────────────────────────────────────────────
    {
      crop: "Macadamias",
      cropList: ["Macadamias"],
      weeds: [
        {
          weed: "Husk spot",
          pestList: ["Husk Spot"],
          states: ["All"],
          rate: "50", rateMax: "50", unit: "mL/100L",
          stage: "Match head size — preventive",
          note: "Part of regular fungicide program, alternate MOA groups. DO NOT apply later than 14 days after early nut set. Preventive, begin at match head size. Intervals 21–28 days. Max 2 applications per 12 months. DO NOT apply > 1.25 L/ha per application."
        },
        {
          weed: "Botrytis blight",
          pestList: ["Botrytis Blight"],
          states: ["All"],
          rate: "50", rateMax: "50", unit: "mL/100L",
          stage: "Flower bloom — preventive",
          note: "Preventive, begin at flower bloom. Intervals 20–22 days (shorter for high disease). Thorough coverage of fruiting parts."
        }
      ]
    },

    // ── Pistachios ────────────────────────────────────────────
    {
      crop: "Pistachios",
      cropList: ["Pistachios"],
      weeds: [
        {
          weed: "Botrytis blight (suppression), botryosphaeria panicle & shoot blight",
          pestList: ["Botrytis Blight", "Botryosphaeria Panicle Blight", "Shoot Blight"],
          states: ["All"],
          rate: "50", rateMax: "50", unit: "mL/100L",
          stage: "Full bloom — preventive",
          note: "Part of regular fungicide program, alternate MOA groups. Botrytis: preventive from flower bloom, 20–22 day intervals. Botryosphaeria: preventive from full bloom, 21–28 day intervals. Max 2 applications per 12 months. DO NOT apply > 1.25 L/ha per application. WHP: Nil."
        }
      ]
    },

    // ── Bulb vegetables ───────────────────────────────────────
    {
      crop: "Bulb Vegetables (Onions, Spring Onions, Leek, Shallots)",
      cropList: ["Bulb Vegetables", "Onions", "Spring Onions", "Leek", "Shallots"],
      weeds: [
        {
          weed: "White rot (Sclerotium cepivorum) — Suppression only",
          pestList: ["White Rot"],
          states: ["All"],
          rate: "1000", rateMax: "1000", unit: "mL/ha",
          stage: "1-leaf stage — broadcast spray",
          note: "Broadcast spray at 1-leaf stage. Follow with irrigation/rainfall to drench into soil (no field runoff). Second application 21–28 days (shorter for high disease). Part of integrated disease control. Max 2 applications per year. WHP: 7 days."
        }
      ]
    },

    // ── Capsicums & Tomatoes ──────────────────────────────────
    {
      crop: "Capsicums, Tomatoes (includes protected cropping)",
      cropList: ["Capsicums", "Tomatoes", "Tomato"],
      weeds: [
        {
          weed: "Powdery mildew (Leveillula taurica)",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "250", rateMax: "250", unit: "mL/100L",
          stage: "Preventive — prior to disease onset",
          note: "Apply preventive prior to disease onset. Repeat 7–14 days. Thorough coverage. Dilute spraying to run-off (up to 1000 L/ha) for trellised crops. Max 3 applications per year. WHP: 1 day."
        }
      ]
    },

    // ── Cucurbits ─────────────────────────────────────────────
    {
      crop: "Cucurbits (Cucumbers, Rockmelons, Zucchinis — includes protected cropping)",
      cropList: ["Cucurbits", "Cucumbers", "Rockmelons", "Zucchinis"],
      weeds: [
        {
          weed: "Powdery mildew",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "500", rateMax: "500", unit: "mL/ha",
          stage: "Preventive — prior to disease onset",
          note: "Apply preventive prior to disease onset. Repeat 7–14 days. Thorough coverage. Dilute spraying to run-off (up to 1000 L/ha) for trellised crops. Max 3 applications per year. WHP: 1 day."
        },
        {
          weed: "Gummy stem blight (Didymella bryoniae)",
          pestList: ["Gummy Stem Blight"],
          states: ["All"],
          rate: "625", rateMax: "625", unit: "mL/ha",
          stage: "Preventive — prior to disease onset",
          note: "Apply preventive prior to disease onset. Repeat 7–14 days. Thorough coverage. Dilute spraying to run-off (up to 1000 L/ha) for trellised crops. Max 3 applications per year. WHP: 1 day."
        }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by aircraft (except bananas).",
    "DO NOT apply if heavy rains or storms expected within 3 days, or irrigate to runoff for 3 days after application.",
    "Follow strict spray drift restraints: no bystanders, avoid impact to sensitive areas (native vegetation, crops, gardens, aquaculture, livestock).",
    "Apply when wind 3–20 km/h and no temperature inversions.",
    "Adhere to specified buffer zones and droplet size (medium for boom/aerial).",
    "Vertical sprayers: no spray above canopy, turn off outer nozzles when turning or spraying outer rows."
  ],
  withholding: {
    harvest: "Pistachios: Nil. Bananas, capsicums, cucurbits, passionfruit, strawberries, tomatoes: 1 day. Custard apples, persimmons: 3 days. Bulb vegetables: 7 days. Almonds, olives: 14 days. Citrus: 28 days. Grapes, macadamias: Not required when used as directed.",
    grazing: "DO NOT graze livestock in treated vineyards or orchards. ESI: 30 days for livestock fed treated crops."
  },
  compatibility: "For information on compatibility with other products, contact your local retailer or Bayer CropScience representative.",
  surfactant: "Bananas: Must use mineral crop oil (3–5 L/ha), no other adjuvants. Citrus: A suitable non-ionic surfactant (e.g. Agral 600) at normal label rates. Do not use adjuvants/penetrants that may cause phytotoxicity.",
  sprayerCleanup: "Rinse all application, pumping and mixing equipment twice with clean water after use."
};
