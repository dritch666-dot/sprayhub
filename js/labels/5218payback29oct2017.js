// ─────────────────────────────────────────────────────────────────────────────
// PAYBACK® PLANT GROWTH REGULATOR — Label Data
// Plant Growth Regulator | Suspension Concentrate (SC)
// Source: Nufarm_Payback_Label.pdf
// APVMA Approval No: 58627/109805
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['5218payback29oct2017'] = {
  name:             "Payback® Plant Growth Regulator",
  company: "Corteva",

  category:         "Plant Growth Regulators",
  activeIngredient: "250 g/L Paclobutrazol",
  group:            "Plant Growth Regulator (Gibberellin Biosynthesis Inhibitor)",
  modeOfAction:     "Inhibits gibberellin biosynthesis — reduces internode lengths, controls vegetative growth, promotes flowering and fruiting",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#10b981",
  apvma:            "58627",
  labelPdf:         "Source labels/Nufarm_Payback_Label.pdf",
  sdsPdf:           "SDS Labels/PAYBACK.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Plant Growth Regulator",
    target: ["Vegetative growth", "Internode elongation", "Fruit tree vigour", "Ornamental height"],
    timing: ["Post-harvest (mango)", "Early autumn or spring at bud burst (stone fruit)", "Post-bloom (apples)", "After pinching (ornamentals)"]
  },

  crops: [
    {
      crop: "Mango — Vegetative growth control",
      cropList: ["Mango","Vegetative Growth Control"],
      weeds: [
        { weed: "Excessive vegetative growth / to promote flowering", pestList: ["Excessive Vegetative Growth / to Promote Flowering"], states: ["Qld", "NT", "NSW"], rate: "8", rateMax: "20", unit: "mL/tree", stage: "Apply within 4 weeks after harvest or no later than mid February. Collar or drench application.", note: "Trees 3–6 yrs (light sands): 8–12 mL/tree. Trees 3–6 yrs (clay/red volcanics): 12–16 mL/tree. Trees over 6 yrs (light sands): 16–20 mL/tree. Trees over 6 yrs (clay/red volcanics): 20 mL/tree. Ensure trees are well watered before and after application. CAUTION: Do not treat young trees with canopy less than 3 m diameter. CAUTION: Excessive compaction of flower panicles may result from late application or dry soil conditions. RETREATMENT: Effects may persist for more than one season — postpone retreatment on sandy soils until after harvest following resumption of normal growth. Retreat clay/red volcanic soils each season." }
      ]
    },
    {
      crop: "Apples — Red Delicious and Granny Smith",
      cropList: ["Apples","Red Delicious And Granny Smith"],
      weeds: [
        { weed: "Excessive vegetative growth / shoot elongation control", pestList: ["Excessive Vegetative Growth / Shoot Elongation Control"], states: ["All"], rate: "500", rateMax: "1000", unit: "mL/ha", stage: "Apply in a sequential spray program commencing 28 days after full bloom (Red Delicious) or 35 days after full bloom (Granny Smith).", note: "Use lower rate on less vigorous trees. Apply subsequent sprays at lower rate at 21-day intervals for as long as growth control required. DO NOT apply more than 4 L/ha per season. Add 18 mL Shirwet 600 or Nufarm Surfactant 600 per 100 L water in final spray volume. Activity results from uptake by young green stem tissue. CAUTION: If using Carbaryl as a chemical thinning agent, allow 21 days between Carbaryl and Payback application. WHP: DO NOT HARVEST FOR 21 DAYS AFTER APPLICATION." }
      ]
    },
    {
      crop: "Peaches, Nectarines — Vegetative growth control",
      cropList: ["Peaches","Nectarines","Vegetative Growth Control"],
      weeds: [
        { weed: "Excessive vegetative growth", pestList: ["Excessive Vegetative Growth"], states: ["All"], rate: "2", rateMax: "4", unit: "L/ha", stage: "Apply by trickle irrigation or collar drench in early Autumn or Spring between 14 days prior to bud burst and full bloom. Late Summer or early Autumn recommended for early maturing cultivars.", note: "Divide rate per ha by trees per ha to determine rate per tree. Use high rate on medium and heavy soils. RETREATMENT: 2 L/ha (trickle) or 2–3 L/ha (collar drench) in subsequent season. On light soils, retreat when normal growth resumes. Use low rate for low vigour varieties in cool districts." }
      ]
    },
    {
      crop: "Apricots, Plums — Vegetative growth control",
      cropList: ["Apricots","Plums","Vegetative Growth Control"],
      weeds: [
        { weed: "Excessive vegetative growth", pestList: ["Excessive Vegetative Growth"], states: ["All"], rate: "2", rateMax: "4", unit: "L/ha", stage: "Apply by trickle irrigation or collar drench in early Autumn or Spring between 14 days prior to bud burst and full bloom.", note: "In plums, ensure pollinator trees are treated at the same time to synchronise flowering. Bloom dates may be advanced. Divide rate per ha by trees per ha for rate per tree. RETREATMENT: Do not retreat until the season in which normal growth resumes." }
      ]
    },
    {
      crop: "Cherries — Vegetative growth control",
      cropList: ["Cherries","Vegetative Growth Control"],
      weeds: [
        { weed: "Excessive vegetative growth", pestList: ["Excessive Vegetative Growth"], states: ["All"], rate: "1", rateMax: "2", unit: "L/ha", stage: "Apply by trickle irrigation or collar drench in early Autumn or Spring between 14 days prior to bud burst and full bloom.", note: "Use high rate on medium and heavy soils. Bloom dates may be advanced. Ensure pollinator trees are treated at the same time. RETREATMENT: Do not retreat until the season in which normal growth resumes." }
      ]
    },
    {
      crop: "Container Grown Ornamentals — Height control",
      cropList: ["Container Grown Ornamentals","Height Control"],
      weeds: [
        { weed: "Chrysanthemums — compact plant production", pestList: ["Chrysanthemums — Compact Plant Production"], states: ["All"], rate: "48", rateMax: "48", unit: "mL dilute stock/1L (foliar spray)", stage: "Apply after pinching when new shoots are 1–2 cm long.", note: "Apply further 1–3 applications at 14-day intervals under rapid growth conditions and for vigorous varieties. IMPORTANT: Multiple applications may delay flowering in some species. Prepare fresh stock solution daily: dilute 10 mL Payback to 1 L water (= dilute stock). See label table for dilution rates per crop." },
        { weed: "Bouvardia — compact plant production", pestList: ["Bouvardia — Compact Plant Production"], states: ["All"], rate: "8", rateMax: "96", unit: "mL dilute stock/1L", stage: "Pot drench (8 mL/1L) or foliar spray (96 mL/1L) — apply after pinching when new shoots are 1–2 cm long.", note: "Apply further 1–2 applications at 14-day intervals under rapid growth conditions." },
        { weed: "Rhododendron — compact plants and earlier flowering", pestList: ["Rhododendron — Compact Plants and Earlier Flowering"], states: ["All"], rate: "200", rateMax: "200", unit: "mL dilute stock/1L", stage: "Apply single spray in January to control autumn growth flush.", note: "Foliar spray application." },
        { weed: "Camellia japonica — compact plants", pestList: ["Camellia Japonica — Compact Plants"], states: ["All"], rate: "200", rateMax: "200", unit: "mL dilute stock/1L", stage: "Apply single spray in spring to control summer growth flush.", note: "Foliar spray application." },
        { weed: "Eucalyptus spp., Grevillea spp. — compact plants", pestList: ["Eucalyptus Spp.", "Grevillea Spp. — Compact Plants"], states: ["All"], rate: "40", rateMax: "40", unit: "mL dilute stock/1L (pot drench)", stage: "Apply 50 mL drench solution per pot when growth control is required.", note: "Pot drench application." },
        { weed: "Zonal geranium — compact plants", pestList: ["Zonal Geranium — Compact Plants"], states: ["All"], rate: "16", rateMax: "16", unit: "mL dilute stock/1L (foliar spray)", stage: "Apply to plants when 7–8 cm high (3–5 leaves expanded). Repeat as required.", note: "Foliar spray application." },
        { weed: "Marigold — compact plants", pestList: ["Marigold — Compact Plants"], states: ["All"], rate: "4", rateMax: "4", unit: "mL dilute stock/1L (pot drench)", stage: "Apply 50 mL drench solution per pot 2 weeks after transplanting.", note: "" },
        { weed: "Geraldton wax flower (Chamelaucium uncinatum) — compact plants", pestList: ["Geraldton Wax Flower — Compact Plants"], states: ["All"], rate: "32", rateMax: "32", unit: "mL dilute stock/1L (pot drench)", stage: "Apply 50 mL drench solution per pot 2 weeks after rooted cutting potted.", note: "Prepare dilute stock solution: dilute 10 mL Payback to 1 L water, then use at rates shown. Prepare fresh stock solution each day." }
      ]
    },
  ],

  restraints: [
    "DO NOT use on trees of low vigour or under stress.",
    "DO NOT use in orchards underplanted with any other crops.",
    "DO NOT apply to young trees which have recently been interplanted in orchards and which are required to make vigorous growth.",
    "DO NOT water over the top of ornamental plants for 24 hours after application.",
    "DO NOT use on cut flowers where successive crops are grown in the same soil/compost.",
    "DO NOT re-use potting media from treated plants for subsequent crops.",
    "DO NOT apply to plants under stress.",
    "DO NOT apply by aircraft.",
    "Mango: DO NOT treat young trees with a canopy of less than 3 m diameter.",
    "Mango: CAUTION — excessive compaction of flower panicles may result from application at times later than recommended, or from delayed uptake caused by dry soil conditions.",
    "Apples: DO NOT apply more than 4 L/ha per season.",
    "Apples: If using Carbaryl as a chemical thinning agent, allow 21 days before application of Payback."
  ],

  compatibility: {
    compatible:   ["Nimrod (one product only)", "Betamite (one product only)", "Pirimor (one product only)", "Dithane (one product only)"],
    incompatible: ["Mixing with more than one of the listed compatible products", "Other chemicals for use on ornamental plants"],
    notes:        ["Payback is compatible with any ONE of: Nimrod, Betamite, Pirimor or Dithane. Mixing with more than one of these products may give unpredictable results or cause crop damage.", "If Carbaryl is used as a thinning spray on apples, allow 21 days before applying Payback.", "DO NOT use with other chemicals on ornamental plants."]
  },

  withholding: {
    harvest: "Apples: DO NOT HARVEST FOR 21 DAYS AFTER APPLICATION. Mango, Stone Fruit, Ornamentals: No withholding period stated — refer to full label.",
    grazing:  "DO NOT contaminate streams, rivers or waterways with the chemical or used container."
  },

  surfactant:     "Apples (foliar spray): Add 18 mL Shirwet 600 or Nufarm Surfactant 600 per 100 L water in final spray volume. Activity results from uptake by young green stem tissue — ensure thorough coverage of young shoots.",
  sprayerCleanup: "Thoroughly rinse spray equipment after use. Triple rinse containers before disposal. Add rinsings to spray tank. Do not dispose of undiluted chemicals on site."
};
