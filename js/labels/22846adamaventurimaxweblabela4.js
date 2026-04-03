// ─────────────────────────────────────────────────────────────────────────────
// VENTURI® MAX INSECTICIDE — Label Data
// Group 18 Insecticide | Suspension Concentrate (SC)
// Source: Adama_Venturi_Max_Insecticide_Label.pdf
// NOTE: Duplicate entry — same product as key readsafety...group
// APVMA Approval No: 89849/126232
// Adama Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['22846adamaventurimaxweblabela4'] = {
  name:             "Venturi® Max Insecticide",
  company: "Adama",

  category:         "Insecticides",
  activeIngredient: "480 g/L Methoxyfenozide",
  group:            "Group 18 Insecticide",
  modeOfAction:     "Ecdysone agonist / moulting accelerant (diacylhydrazine) — moult-accelerating insecticide requiring ingestion for control",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#0e7490",
  apvma:            "89849",
  labelPdf:         "Source labels/Adama_Venturi_Max_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/Venturi_Max_Insecticide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Insecticide",
    target: ["Carob moth", "Lightbrown apple moth", "Avocado leafroller", "Loopers", "Macadamia nut borer", "Native budworm", "Tomato grub", "Yellow peach moth", "Caterpillars", "Lepidoptera"],
    timing: ["At egg hatch", "At petal fall", "At hull split", "When pest threshold exceeded"]
  },

  crops: [
    {
      crop: "Almonds",
      cropList: ["Almonds"],
      weeds: [
        { weed: "Carob moth — 1st generation (Ectomyelois ceratoniae)", pestList: ["Carob Moth"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "Early post-flower (Aug–Sept): Monitor pheromone traps for peak adult 1st generation. Once field scouting indicates egg laying and newly hatched larvae apply maximum 3 sprays at minimum 10 day intervals.", note: "Add wetter (refer WETTING AGENTS section). Apply to complete coverage. DO NOT apply more than 3 times to any almond crop." },
        { weed: "Carob moth — 2nd generation / Hull split (Ectomyelois ceratoniae)", pestList: ["Carob Moth"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "Apply at start of hull split (2–5% of almond hull sutures open). Monitor pheromone traps for peak 2nd generation activity; apply to coincide with initiation of egg hatch.", note: "DO NOT apply more than once at hull split stage. Concentrate spraying not appropriate for this pest. Apply minimum 2000 L/ha water. Ensure complete coverage of all foliage and fruit (hull/shell)." }
      ]
    },
    {
      crop: "Apples and Pears (Pome Fruit)",
      cropList: ["Apples And Pears"],
      weeds: [
        { weed: "Lightbrown apple moth (Epiphyas postvittana)", pestList: ["Lightbrown Apple Moth"], states: ["All"], rate: "12.5", rateMax: "12.5", unit: "mL/100L", stage: "Spring generation: Commence at petal fall; apply 3 applications at 14 day intervals. Summer generation: Spray when moth activity indicated by pheromone traps/lure pots — minimum 2 sprays at 21 day interval.", note: "Ensure thorough coverage of developing fruit clusters. In high insect pressure with large vase-shaped trees, apply by dilute spraying to ensure run-off into fruit clusters." },
        { weed: "Loopers", pestList: ["Loopers"], states: ["All"], rate: "12.5", rateMax: "12.5", unit: "mL/100L", stage: "Best achieved using a schedule of 3 sprays in spring (as per lightbrown apple moth program above).", note: "NOTE: Venturi® MAX requires ingestion for control. Feeding ceases almost immediately after ingestion. Mortality not evident until 4–6 days after application." }
      ]
    },
    {
      crop: "Avocado",
      cropList: ["Avocado"],
      weeds: [
        { weed: "Avocado leafroller", pestList: ["Avocado Leafroller"], states: ["All"], rate: "12.5", rateMax: "12.5", unit: "mL/100L", stage: "Monitor from pre-bloom. Apply at first sign of pest incidence; target eggs and newly hatched larvae.", note: "Additional sprays may be required if re-infestation occurs." }
      ]
    },
    {
      crop: "Blueberry",
      cropList: ["Blueberry"],
      weeds: [
        { weed: "Lightbrown apple moth (Epiphyas postvittana)", pestList: ["Lightbrown Apple Moth"], states: ["All"], rate: "12.5", rateMax: "12.5", unit: "mL/100L", stage: "Apply when locally determined thresholds are exceeded.", note: "Thorough coverage of the plant is essential. Target eggs and newly hatched larvae." }
      ]
    },
    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
        { weed: "Lightbrown apple moth (Epiphyas postvittana)", pestList: ["Lightbrown Apple Moth"], states: ["All"], rate: "12.5", rateMax: "12.5", unit: "mL/100L", stage: "Apply when eggs and very small larvae are first seen in flower clusters or developing fruitlets. A second spray may be required 2–3 weeks later if larvae hatch over an extended period.", note: "Use with high volume spraying equipment only. Thorough coverage is essential — spray to runoff. Add wetting agent at 10 mL/100L. WHP: 1 day." }
      ]
    },
    {
      crop: "Coffee",
      cropList: ["Coffee"],
      weeds: [
        { weed: "Avocado leafroller", pestList: ["Avocado Leafroller"], states: ["All"], rate: "12.5", rateMax: "12.5", unit: "mL/100L", stage: "Monitor from pre-bloom. Apply at first sign of pest incidence, targeting eggs and very small larvae before they are protected in retreats.", note: "Additional sprays may be required if re-infestation occurs." }
      ]
    },
    {
      crop: "Custard Apple",
      cropList: ["Custard Apple"],
      weeds: [
        { weed: "Yellow peach moth (Carposina niponensis)", pestList: ["Yellow Peach Moth"], states: ["All"], rate: "12.5", rateMax: "12.5", unit: "mL/100L", stage: "Apply when locally determined pest thresholds are exceeded as indicated by field checks.", note: "Additional sprays may be required if re-infestation occurs. Spray to thoroughly cover the fruit. WHP: 14 days." }
      ]
    },
    {
      crop: "Grapevines",
      cropList: ["Grapevines"],
      weeds: [
        { weed: "Lightbrown apple moth (Epiphyas postvittana)", pestList: ["Lightbrown Apple Moth"], states: ["All"], rate: "12.5", rateMax: "12.5", unit: "mL/100L", stage: "Spring generation: Apply from pre-flowering onwards targeting eggs and small (5–6 mm) larvae (up to 3rd instar). Apply a second spray 14–21 days later. Summer generation: Apply at first sign of activity targeting eggs and larvae up to 5–6 mm (up to 3rd instar).", note: "Thorough leaf tip and bunch coverage is essential. Summer generation can only be detected by monitoring. WHP: 21 days (domestic); consult winery for export." }
      ]
    },
    {
      crop: "Kiwi Fruit",
      cropList: ["Kiwi Fruit"],
      weeds: [
        { weed: "Lightbrown apple moth (Epiphyas postvittana)", pestList: ["Lightbrown Apple Moth"], states: ["All"], rate: "12.5", rateMax: "12.5", unit: "mL/100L", stage: "Monitor pest activity from bud burst onwards. Target sprays at eggs and first instar larvae.", note: "WHP: 14 days." }
      ]
    },
    {
      crop: "Longan, Lychee",
      cropList: ["Longan","Lychee"],
      weeds: [
        { weed: "Macadamia nut borer (Cryptophlebia ombrodelta)", pestList: ["Macadamia Nut Borer"], states: ["All"], rate: "20", rateMax: "20", unit: "mL/100L", stage: "Spray thoroughly when pest numbers reach economic threshold levels according to field checks.", note: "Target sprays against eggs and early instar larvae. WHP: Longan 3 days; Lychee 14 days." }
      ]
    },
    {
      crop: "Macadamia",
      cropList: ["Macadamia"],
      weeds: [
        { weed: "Macadamia flower caterpillar", pestList: ["Macadamia Flower Caterpillar"], states: ["All"], rate: "12.5", rateMax: "12.5", unit: "mL/100L", stage: "Monitor for eggs and very small larvae on flowers. Apply at a threshold of 50–80% of racemes infested.", note: "WHP: 28 days." },
        { weed: "Macadamia nut borer (Cryptophlebia ombrodelta)", pestList: ["Macadamia Nut Borer"], states: ["All"], rate: "20", rateMax: "20", unit: "mL/100L", stage: "Spray to thoroughly cover nuts when pest numbers reach economic threshold levels according to field checks.", note: "Target sprays against eggs and early instar larvae. WHP: 28 days." }
      ]
    },
    {
      crop: "Persimmons",
      cropList: ["Persimmons"],
      weeds: [
        { weed: "Leaf roller, Yellow peach moth, Lightbrown apple moth, Orange fruitborer", pestList: ["Leaf Roller", "Yellow Peach Moth", "Lightbrown Apple Moth", "Orange Fruitborer"], states: ["All"], rate: "12.5", rateMax: "12.5", unit: "mL/100L", stage: "Monitor crop; commence applications once eggs and newly hatched larvae are present. Apply when locally determined thresholds are exceeded.", note: "Additional sprays may be required if re-infestation occurs; re-apply at 2–3 week interval if necessary. Ensure thorough coverage. WHP: 7 days." }
      ]
    },
    {
      crop: "Tomatoes, Peppers (Capsicum and Chilli), Eggplant and Okra",
      cropList: ["Tomatoes","Peppers (Capsicum And Chilli)","Eggplant And Okra"],
      weeds: [
        { weed: "Native budworm (Helicoverpa punctigera), Tomato grub (Helicoverpa armigera), Cluster caterpillar (Spodoptera litura)", pestList: ["Native Budworm", "Tomato Grub", "Cluster Caterpillar"], states: ["All"], rate: "63", rateMax: "85", unit: "mL/100L", stage: "Apply to brown eggs or at egg hatch when pest numbers reach treatment threshold levels as determined by field checks. Reapply after 7 days if necessary.", note: "Use higher rate (85 mL/100L or 850 mL/ha) under heavy egg pressure. Ensure thorough coverage of plants. WHP: Not required when used as directed. Buffer zone: 15 m from livestock areas." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply if rain or overhead irrigation is expected within 6 hours.",
    "DO NOT use more than 3 sprays per season in any single crop.",
    "DO NOT use in covered or protected situations such as glasshouses, greenhouses, shade houses or plastic tunnels.",
    "DO NOT apply by air.",
    "DO NOT apply more than three times to any Almond crop.",
    "DO NOT apply more than once at the hull split stage.",
    "DO NOT apply using spraying equipment carried on the back of the user.",
    "DO NOT enter treated areas until the spray has dried.",
    "DO NOT apply unless wind speed is between 3 and 20 km/h at the application site.",
    "DO NOT apply if hazardous surface temperature inversion conditions are present.",
    "Retain the first flush of irrigation tailwater/storm water in the tailwater dam after application.",
    "Buffer zones: Grapes, Blueberries and Coffee — 5 m from livestock areas. Tomato, Peppers, Eggplants and Okra — 15 m from livestock areas."
  ],

  compatibility: {
    compatible:   [],
    incompatible: ["Mineral spray oils"],
    notes:        ["DO NOT mix concentrates together — add each to spray tank separately.", "All mixtures should be tested prior to mixing commercial quantities.", "Adama Australia cannot be responsible for behaviour of mixtures due to climatic variability."]
  },

  withholding: {
    harvest: "Almond, Blueberry, Persimmons: DO NOT HARVEST FOR 7 DAYS. | Avocado, Coffee, Custard Apple, Kiwifruit, Lychee, Pome Fruit: DO NOT HARVEST FOR 14 DAYS. | Citrus fruits: DO NOT HARVEST FOR 1 DAY. | Grapes (domestic): DO NOT HARVEST FOR 21 DAYS. Grapes (export/wine): Consult winery/peak industry body for EHI. | Longan: DO NOT HARVEST FOR 3 DAYS. | Macadamia: DO NOT HARVEST FOR 28 DAYS. | Tomato, Peppers, Eggplant, Okra: NOT REQUIRED WHEN USED AS DIRECTED.",
    grazing:  "DO NOT GRAZE TREATED CROPS. DO NOT ALLOW LIVESTOCK TO GRAZE WITHIN TREATED ORCHARDS, PLANTATIONS OR VINEYARDS."
  },

  surfactant:     "Where recommended (Almonds 1st generation, Citrus): apply with Agral® Spray Adjuvant, Wetspray® 1000 or equivalent non-ionic surfactant. Add at 10 mL/100L for Citrus. Almonds: add wetter as directed in WETTING AGENTS section of label. Adama Australia does not support use of alternative products.",
  sprayerCleanup: "After use, thoroughly rinse sprayer and flush hoses, boom and nozzles with clean water. Triple rinse containers. Add rinsate to spray tank. Do not dispose of undiluted chemicals on site."
};
