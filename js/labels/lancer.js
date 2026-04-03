// ─────────────────────────────────────────────────────────
// LANCER® 970 INSECTICIDE — Label Data
// Group 1B Insecticide (Acephate)
// Source: UPL_Lancer970_Label.pdf
// APVMA Approval No: 59305/51519
// Registered to United Phosphorus Limited; Distributed by Nufarm Australia Limited
// ─────────────────────────────────────────────────────────
productDatabase['lancer'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Lancer® 970 Insecticide",

  category:         "Insecticides",
  activeIngredient: "970 g/kg Acephate",
  group:            "Group 1B Insecticide",
  modeOfAction:     "Organophosphate — systemic and contact insecticide for the control of certain insect pests on bananas, crucifers, macadamias, ornamentals, potatoes, tobacco and tomatoes.",
  formulation:      "Soluble Powder (SP)",
  color:            "#8b6914",
  apvma:            "59305/51519",
  company: "Corteva",
  labelPdf:         "Source labels/UPL_Lancer970_Label.pdf",
  sdsPdf:           "SDS Labels/UPL_Lancer970_SDS.pdf",
  signalHeading:    "POISON",
  classification: {
    type: "Insecticide",
    target: ["Heliothis", "Helicoverpa", "Thrips", "Aphids", "Cabbage Moth", "Potato Moth", "Macadamia Nut Borer"],
    timing: ["Contact", "Systemic"]
  },

  // ── Crop Sections ───────────────────────────────────────────
  crops: [

    // ── 1. Bananas — Bell Injection ──
    {
      crop: "Bananas — Bell Injection",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Banana Scab Moth (Nacoleia octasema) & Banana Flower Thrips (Thrips hawaiiensis)",
          pestList: ["Banana Scab Moth", "Nacoleia Octasema", "Banana Flower Thrips", "Thrips Hawaiiensis"],
          states: ["QLD", "NSW", "WA", "NT"],
          rate: "65",
          rateMax: "130",
          unit: "g/100L",
          stage: "Apply 30–60 mL of prepared solution per bell as it emerges from the throat",
          note: "65–130 g/100 L — bell injection only. At 30 mL/bell use 130 g/100 L; at 40 mL/bell use 97.5 g/100 L; at 60 mL/bell use 65 g/100 L. Inject directly into the upright bell as it emerges. WHP: Not required when used as directed."
        }
      ]
    },

    // ── 2. Bananas — Bunch Spray ──
    {
      crop: "Bananas — Bunch Spray",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Banana Rust Thrips (Chaetanaphothrips signipennis)",
          pestList: ["Banana Rust Thrips", "Chaetanaphothrips Signipennis"],
          states: ["QLD", "NSW", "WA", "NT"],
          rate: "130",
          rateMax: "130",
          unit: "g/100L",
          stage: "Apply to point of run-off, up to 50 mL per bunch no later than 2 weeks after bunch emergence",
          note: "130 g/100 L (13 g/10 L) — bunch spray only. Apply up to 50 mL of prepared solution per bunch ensuring thorough, even coverage. Application no later than 2 weeks after bunch emergence. WHP: Not required when used as directed."
        }
      ]
    },

    // ── 3. Brussels Sprouts ──
    {
      crop: "Brussels Sprouts",
      cropList: ["Brussels Sprouts"],
      weeds: [
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Heliothis", "Helicoverpa"],
          states: ["TAS"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Spray when infestation occurs then at 10–14 day intervals or as necessary",
          note: "1.0 kg/ha (low vol) or 100 g/100 L (high vol). Use non-ionic wetting agent at manufacturer's rate for horticultural crops. Tas only. WHP: 3 days."
        },
        {
          weed: "Cabbage Moth & Cabbage White Butterfly",
          pestList: ["Cabbage Moth", "Cabbage White Butterfly"],
          states: ["NSW", "VIC", "TAS", "SA", "WA", "NT"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Spray when infestation occurs then at 10–14 day intervals or as necessary",
          note: "1.0 kg/ha (low vol) or 100 g/100 L (high vol). Use non-ionic wetting agent at manufacturer's rate for horticultural crops. WHP: 3 days."
        },
        {
          weed: "Cabbage Aphid & Heliothis (Helicoverpa spp.)",
          pestList: ["Cabbage Aphid", "Heliothis", "Helicoverpa"],
          states: ["QLD", "WA", "NT"],
          rate: "80",
          rateMax: "80",
          unit: "g/100L",
          stage: "Spray when infestation occurs then at 10–14 day intervals or as necessary",
          note: "0.8 kg/ha (low vol) or 80 g/100 L (high vol). Use non-ionic wetting agent at manufacturer's rate for horticultural crops. WHP: 3 days."
        }
      ]
    },

    // ── 4. Cabbages, Cauliflower, Broccoli ──
    {
      crop: "Cabbages, Cauliflower & Broccoli",
      cropList: ["Cabbages", "Cauliflower", "Broccoli"],
      weeds: [
        {
          weed: "Cabbage Moth & Cabbage White Butterfly",
          pestList: ["Cabbage Moth", "Cabbage White Butterfly"],
          states: ["NSW", "VIC", "TAS", "SA", "WA", "NT"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Spray when infestation occurs then at 10–14 day intervals or as necessary",
          note: "1.0 kg/ha (low vol) or 100 g/100 L (high vol). Use non-ionic wetting agent at manufacturer's rate for horticultural crops. WHP: Cabbages & Cauliflower 3 days; Broccoli 14 days."
        },
        {
          weed: "Cabbage Aphid & Heliothis (Helicoverpa spp.)",
          pestList: ["Cabbage Aphid", "Heliothis", "Helicoverpa"],
          states: ["QLD", "WA", "NT"],
          rate: "80",
          rateMax: "80",
          unit: "g/100L",
          stage: "Spray when infestation occurs then at 10–14 day intervals or as necessary",
          note: "0.8 kg/ha (low vol) or 80 g/100 L (high vol). Use non-ionic wetting agent at manufacturer's rate for horticultural crops. WHP: Cabbages & Cauliflower 3 days; Broccoli 14 days."
        }
      ]
    },

    // ── 5. Macadamias — 80 g/100L ──
    {
      crop: "Macadamias",
      cropList: ["Macadamias"],
      weeds: [
        {
          weed: "Macadamia Nut Borer, Fruit Spotting Bug & Leafminer",
          pestList: ["Macadamia Nut Borer", "Fruit Spotting Bug", "Leafminer", "Macadamia Leafminer"],
          states: ["NSW", "WA"],
          rate: "80",
          rateMax: "80",
          unit: "g/100L",
          stage: "Apply when pest activity first observed; repeat at 14–21 day intervals or as necessary",
          note: "80 g/100 L (dilute) — apply by dilute or concentrate spraying equipment. Apply same total product per hectare for both methods. WHP: Not required when used as directed."
        },
        {
          weed: "Red Shouldered Leaf Beetle",
          pestList: ["Red Shouldered Leaf Beetle"],
          states: ["QLD", "WA", "NT"],
          rate: "80",
          rateMax: "80",
          unit: "g/100L",
          stage: "Apply when pest activity first observed; repeat at 14–21 day intervals or as necessary",
          note: "80 g/100 L (dilute) — apply by dilute or concentrate spraying equipment. WHP: Not required when used as directed."
        },
        {
          weed: "Flower Eating Caterpillar",
          pestList: ["Flower Eating Caterpillar"],
          states: ["NSW", "WA"],
          rate: "80",
          rateMax: "80",
          unit: "g/100L",
          stage: "Apply at early flowering if pests evident; 1–3 sprays may be required. Spray when bees are least active",
          note: "80 g/100 L (dilute) — apply by dilute or concentrate spraying equipment. Apply at early flowering if pests evident. 1–3 sprays depending on severity. Spray when bees are least active. WHP: Not required when used as directed."
        }
      ]
    },

    // ── 6. Macadamias — 50 g/100L ──
    {
      crop: "Macadamias — Low Rate",
      cropList: ["Macadamias"],
      weeds: [
        {
          weed: "Flower Eating Caterpillar, Fruit Spotting Bug, Macadamia Leafminer, Banana Spotting Bug & Flower Thrips",
          pestList: ["Flower Eating Caterpillar", "Fruit Spotting Bug", "Macadamia Leafminer", "Banana Spotting Bug", "Flower Thrips"],
          states: ["QLD", "NT"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply when pest activity first observed; repeat at 14–21 day intervals or as necessary",
          note: "50 g/100 L (dilute) — apply by dilute or concentrate spraying equipment. Apply same total product per hectare for both methods. WHP: Not required when used as directed."
        },
        {
          weed: "Flower Thrips, Banana Spotting Bug & Macadamia Leafminer",
          pestList: ["Flower Thrips", "Banana Spotting Bug", "Macadamia Leafminer"],
          states: ["WA"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply when pest activity first observed; repeat at 14–21 day intervals or as necessary",
          note: "50 g/100 L (dilute) — apply by dilute or concentrate spraying equipment. WA only. WHP: Not required when used as directed."
        }
      ]
    },

    // ── 7. Ornamentals ──
    {
      crop: "Ornamentals",
      cropList: ["Ornamentals"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Spray when infestation occurs then at 14-day intervals",
          note: "1.0 kg/ha (low vol) or 100 g/100 L (high vol). DO NOT spray more than once every 28 days on carnations and chrysanthemums. DO NOT apply to carnations less than 6 days before picking. May cause foliage damage to certain shrubs/trees (crab apple, cotton wood, Lombardy poplar, American elm). WHP: Not required when used as directed."
        }
      ]
    },

    // ── 8. Potatoes ──
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Potato Moth (Tobacco Leafminer)",
          pestList: ["Potato Moth", "Tobacco Leafminer"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Spray every 14–21 days or as necessary",
          note: "0.5 kg/ha (low vol) or 50 g/100 L (high vol). WHP: 3 days."
        }
      ]
    },

    // ── 9. Tobacco ──
    {
      crop: "Tobacco",
      cropList: ["Tobacco"],
      weeds: [
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Heliothis", "Helicoverpa"],
          states: ["VIC"],
          rate: "80",
          rateMax: "80",
          unit: "g/100L",
          stage: "Spray as indicated by crop checking — usually min 7-day interval",
          note: "0.8 kg/ha (low vol) or 80 g/100 L (high vol). Use 130–400 L/ha depending on crop stage, paying attention to the bud heart. Vic only. WHP: 14 days."
        },
        {
          weed: "Heliothis (Helicoverpa spp.), Tobacco Looper, Whitefly, Cluster Caterpillar & Stem Borer",
          pestList: ["Heliothis", "Helicoverpa", "Tobacco Looper", "Whitefly", "Cluster Caterpillar", "Stem Borer"],
          states: ["QLD", "WA"],
          rate: "80",
          rateMax: "80",
          unit: "g/100L",
          stage: "Spray as indicated by crop checking — usually min 7-day interval",
          note: "0.8 kg/ha (low vol) or 80 g/100 L (high vol). Use 130–400 L/ha depending on crop stage. Qld, WA only. WHP: 14 days."
        },
        {
          weed: "Budworm (Helicoverpa armigera)",
          pestList: ["Budworm", "Helicoverpa Armigera"],
          states: ["NSW"],
          rate: "80",
          rateMax: "80",
          unit: "g/100L",
          stage: "Spray at 7–10 day intervals when pest is present",
          note: "0.8 kg/ha (low vol) or 80 g/100 L (high vol). NSW only. WHP: 14 days."
        }
      ]
    },

    // ── 10. Tomatoes ──
    {
      crop: "Tomatoes",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Potato Moth (Tobacco Leafminer) & Heliothis (Helicoverpa spp.)",
          pestList: ["Potato Moth", "Tobacco Leafminer", "Heliothis", "Helicoverpa"],
          states: ["NSW", "VIC", "TAS", "SA", "WA"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Spray when infestation occurs then at 7–14 day intervals or as necessary (ground application only)",
          note: "1.0 kg/ha (low vol) or 100 g/100 L (high vol). Ground application only. WHP: 3 days."
        },
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["NSW", "VIC", "TAS", "SA", "WA"],
          rate: "80",
          rateMax: "80",
          unit: "g/100L",
          stage: "Spray when infestation occurs then at 7–14 day intervals or as necessary (ground application only)",
          note: "0.8 kg/ha (low vol) or 80 g/100 L (high vol). Ground application only. WHP: 3 days."
        },
        {
          weed: "Potato Moth (Tobacco Leafminer), Heliothis (Helicoverpa spp.) & Aphids",
          pestList: ["Potato Moth", "Tobacco Leafminer", "Heliothis", "Helicoverpa", "Aphids"],
          states: ["QLD", "NT"],
          rate: "80",
          rateMax: "100",
          unit: "g/100L",
          stage: "Apply when infestation occurs then at 7-day intervals or as necessary",
          note: "Potato moth & Heliothis: 1.0 kg/ha or 100 g/100 L; Aphids: 0.8 kg/ha or 80 g/100 L. Qld, NT only. WHP: 3 days."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  PERMIT USES
    // ═══════════════════════════════════════════════════════════

    // ── 11. Nursery Stock & Ornamentals — Fall Armyworm (PER91928) ──
    {
      crop: "Nursery Stock & Ornamentals — Fall Armyworm (PER91928)",
      cropList: ["Nursery Stock", "Ornamentals", "Cut Flowers", "Seedlings", "Potted Colour", "Trees", "Shrubs", "Foliage Plants", "Palms", "Grasses"],
      permitNumber: "PER91928",
      weeds: [
        {
          weed: "Fall Armyworm (Spodoptera frugiperda)",
          pestList: ["Lepidopteran Pests", "Fall Armyworm", "Spodoptera Frugiperda"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Scout crops for eggs and larvae; treat when pests appear, targeting eggs at hatch or small larvae (prior to third instar) before pest becomes entrenched",
          note: "PERMIT PER91928 (exp. 30 Sep 2030). 970 g/kg product: 100 g/100 L or 1 kg/ha. Apply by ground-based sprayer (hydraulic spray equipment or equivalent). Apply in sufficient water for thorough coverage (500–1000 L/ha for high volume). Max 2 applications per crop/season at min 14-day intervals. Non-food crops only. WHP: Not required (non-food)."
        }
      ]
    },

    // ── 12. Nursery Stock & Ornamentals — Western Flower Thrips (PER91941) ──
    {
      crop: "Nursery Stock & Ornamentals — Western Flower Thrips (PER91941)",
      cropList: ["Nursery Stock", "Ornamentals", "Cut Flowers", "Seedlings", "Potted Colour", "Trees", "Shrubs", "Foliage Plants", "Palms", "Grasses"],
      permitNumber: "PER91941",
      weeds: [
        {
          weed: "Western Flower Thrips (Frankliniella occidentalis)",
          pestList: ["Western Flower Thrips", "Frankliniella Occidentalis"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Apply by ground-based sprayer with thorough coverage of all plant surfaces",
          note: "PERMIT PER91941 (exp. 30 Sep 2030). 970 g/kg product: 100 g/100 L or 1 kg/ha. Apply by ground-based sprayer (hydraulic spray equipment or equivalent). Apply in 500–1000 L/ha for high volume spraying. Max 3 applications per crop. DO NOT use on crops destined for export. DO NOT apply to carnations later than 6 days before picking. Non-food crops only. WHP: Not required (non-food)."
        }
      ]
    }

  ],

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT allow entry into, or perform agronomic practices in, treated areas until spray deposits have dried.",
    "When prior entry to treated areas is necessary, wear cotton overalls buttoned to neck and wrist and elbow length PVC gloves.",
    "Harmful to bees — DO NOT apply during active foraging of bees and avoid spraying at flowering time.",
    "DO NOT contaminate streams, rivers or waterways with this product or the used container.",
    "DO NOT apply in weather conditions which could cause spray to drift onto adjacent crops, crop lands, pasture or livestock."
  ],

  // ── Withholding ─────────────────────────────────────────────
  withholding: {
    harvest: "Bananas, Macadamias, Ornamentals: Not required when used as directed. Brussels sprouts, Cabbages, Cauliflowers, Potatoes, Tomatoes: 3 days. Broccoli, Tobacco: 14 days.",
    grazing: "Not specified."
  },

  // ── Compatibility ───────────────────────────────────────────
  compatibility: {
    compatible: [
      "Oxydul"
    ],
    incompatible: [],
    note: [
      "A mixture of Lancer 970 with products other than Oxydul may be ineffective or may cause serious damage and hence is not recommended.",
      "Ensure granules are completely dissolved before spraying."
    ]
  }
};