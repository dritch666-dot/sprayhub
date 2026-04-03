// ─────────────────────────────────────────────────────────
// Samurai® Systemic Insecticide — Label Data
// Group 4A (Neonicotinoids) | Water Dispersible Granule (WG)
// Source: Sumitomo_Samurai_Label.pdf
// APVMA Approval No: 60687
// Sumitomo Chemical Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['samurai'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Samurai® Systemic Insecticide",
  company: "AMVAC",

  category:         "Insecticides",
  activeIngredient: "500 g/kg Clothianidin",
  group:            "Group 4A Insecticide",
  modeOfAction:     "Systemic neonicotinoid — acts on the nicotinic acetylcholine receptor of the insect nervous system",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#38bdf8",
  apvma:            "60687",
  labelPdf:         "Source labels/Sumitomo_Samurai_Label.pdf",
  sdsPdf:           "SDS Labels/Sumitomo_Samurai_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Moths", "Beetles", "Mealybugs", "Aphids", "Scale", "Fruit Fly", "Weevils"],
    timing: ["Post-emergent"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Almonds ─────────────────────────────────────────────
    {
      crop: "Almonds",
      cropList: ["Almonds"],
      weeds: [
        {
          weed: "Carob moth, Carpophilus beetle",
          pestList: ["Carob Moth", "Carpophilus Beetle"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "g/100L",
          stage: "Apply as dilute foliar spray at hull-split",
          note: "Two sprays recommended: first at 5–10% hull-split, second at 40–50% hull-split (14 day minimum interval). If only one spray, apply at 10–40% hull-split. Thorough wetting essential. WHP: 14 days. Monitor for mites in lead up to harvest."
        }
      ]
    },

    // ── Apples — Woolly Apple Aphid (foliar) ────────────────
    {
      crop: "Apples — Woolly Apple Aphid (Foliar)",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Woolly apple aphid",
          pestList: ["Woolly Apple Aphid"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "g/100L",
          stage: "Apply at first signs of infestation but after petal fall",
          note: "Dilute foliar spray. Ensure thorough coverage. A second spray may be required 2+ weeks later if aphid survives in sheltered spots. Part of a season-long program. Addition of MAXX Organosilicone Surfactant at 50 mL/100 L may improve efficacy. Concentrate spraying not recommended. WHP: 7 days."
        }
      ]
    },

    // ── Apples — Woolly Apple Aphid (micro-irrigation) ──────
    {
      crop: "Apples — Woolly Apple Aphid (Micro-Irrigation, 1000–3000 trees/ha)",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Woolly apple aphid",
          pestList: ["Woolly Apple Aphid"],
          states: ["All"],
          rate: "2",
          rateMax: "4",
          unit: "kg/ha",
          stage: "Apply between green tip and pink bud stage via micro-irrigation",
          note: "Higher rate gives longer control. Ensure thorough wetting of soil profile to at least 10 cm depth. Soil in irrigation zone should be free of weeds and heavy debris. WHP: 7 days."
        }
      ]
    },

    // ── Apples — Woolly Apple Aphid (soil drench) ───────────
    {
      crop: "Apples — Woolly Apple Aphid (Soil Drench, 666–1000 trees/ha)",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Woolly apple aphid",
          pestList: ["Woolly Apple Aphid"],
          states: ["All"],
          rate: "2.5",
          rateMax: "5",
          unit: "g/tree",
          stage: "Apply between green tip and pink bud stage as soil drench",
          note: "Apply in 1 L water to soil around base of tree. Higher rate for heavier infestations in bigger trees. Coverage around trunk to 15 cm from trunk. Ensure mixture penetrates soil. Equivalent to 2–4 kg/ha at 800 trees/ha. WHP: 7 days."
        }
      ]
    },

    // ── Apples and Pears — Mealybug ────────────────────────
    {
      crop: "Apples and Pears — Mealybug",
      cropList: ["Apples", "Pears"],
      weeds: [
        {
          weed: "Longtailed mealybug, Tuber mealybug",
          pestList: ["Longtailed Mealybug", "Tuber Mealybug"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "g/100L",
          stage: "Apply as dilute foliar spray as soon as crawlers are seen but after petal fall",
          note: "Ensure thorough coverage. Two sprays 14 days apart will give significant knockdown. Part of a season-long program. Addition of MAXX Organosilicone Surfactant at 50 mL/100 L may improve efficacy. Concentrate spraying not recommended. WHP: 7 days."
        }
      ]
    },

    // ── Apples and Pears — Codling Moth ─────────────────────
    {
      crop: "Apples and Pears — Codling Moth",
      cropList: ["Apples", "Pears"],
      weeds: [
        {
          weed: "Codling moth",
          pestList: ["Codling Moth"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "g/100L",
          stage: "Apply when pest monitoring indicates generation egg hatch is taking place",
          note: "Dilute foliar spray or concentrate spraying (refer to mixing/application section). Ensure thorough coverage. Two consecutive sprays 14 days apart per generation. Further sprays should be from a different chemical group. Part of a season-long program. Addition of MAXX Surfactant at 50 mL/100 L may improve efficacy. WHP: 7 days."
        }
      ]
    },

    // ── Citrus ──────────────────────────────────────────────
    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
        {
          weed: "Gall wasp, Leaf miner, Fullers rose weevil, California red scale",
          pestList: ["California Red Scale", "Citrus Gall Wasp", "Citrus Leaf Miner", "Fullers Rose Weevil"],
          states: ["All"],
          rate: "6",
          rateMax: "8",
          unit: "g/tree",
          stage: "Apply 2 weeks after flowering (petal drop) has finished via micro-irrigation",
          note: "Soil application only. Higher rate for larger older trees (3.5 m+), high pest pressure or delayed application. Lower rate for smaller trees, higher density plantings. Ensure thorough wetting of soil profile to at least 15 cm depth. Best results with drippers or micro-sprinklers. Use in conjunction with other chemical or biological control measures. WHP: 20 weeks."
        }
      ]
    },

    // ── Peaches and Nectarines — Oriental Fruit Moth ────────
    {
      crop: "Peaches and Nectarines — Oriental Fruit Moth",
      cropList: ["Peaches", "Nectarines"],
      weeds: [
        {
          weed: "Oriental fruit moth",
          pestList: ["Oriental Fruit Moth"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "g/100L",
          stage: "Apply when pest monitoring indicates generation egg hatch is taking place",
          note: "Dilute foliar spray or concentrate spraying. Two consecutive sprays 14 days apart per generation. Further sprays should be from a different chemical group. Part of a season-long program. Addition of MAXX Surfactant at 50 mL/100 L may improve efficacy. WHP: 7 days."
        }
      ]
    },

    // ── Peaches and Nectarines — Green Peach Aphid ──────────
    {
      crop: "Peaches and Nectarines — Green Peach Aphid",
      cropList: ["Peaches", "Nectarines"],
      weeds: [
        {
          weed: "Green peach aphid",
          pestList: ["Green Peach Aphid"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "g/100L",
          stage: "Apply when monitoring indicates chemical control is necessary",
          note: "Dilute foliar spray or concentrate spraying. Ensure reasonable amount of leaf is present at spraying to enhance uptake. WHP: 7 days."
        }
      ]
    },

    // ── Pome Fruit, Persimmon, Stone Fruit, Table Grapes — Fruit Fly ──
    {
      crop: "Pome Fruit, Persimmon, Stone Fruit, Table Grapes — Fruit Fly",
      cropList: ["Apples", "Pears", "Persimmons", "Apricots", "Cherries", "Nectarines", "Peaches", "Plums", "Table Grapes"],
      weeds: [
        {
          weed: "Queensland fruit fly, Mediterranean fruit fly",
          pestList: ["Mediterranean Fruit Fly", "Queensland Fruit Fly"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "g/100L",
          stage: "Apply 3 consecutive foliar sprays 7 days apart when monitoring indicates fruit fly activity",
          note: "Add MAXX Organosilicone Surfactant at 50 mL/100 L. Part of a broader program involving other approved products, pest monitoring and orchard hygiene. Mow flowering weeds on orchard floor prior to application. Notify beekeepers with hives in or near the area at least 48 hours prior to application. WHP: Pome fruit/Stone fruit/Persimmon 7 days, Grapes (foliar) 7 days."
        }
      ]
    },

    // ── Stone Fruit — Carpophilus Beetle ────────────────────
    {
      crop: "Stone Fruit — Carpophilus Beetle",
      cropList: ["Apricots", "Cherries", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "Carpophilus beetle",
          pestList: ["Carpophilus Beetle"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "g/100L",
          stage: "Apply 2–3 sprays prior to harvest at 7 day intervals",
          note: "Dilute foliar spray or concentrate spraying. Carpophilus beetle can be erratic — timing difficult as WHP is 7 days. WHP: 7 days."
        }
      ]
    },

    // ── Table and Wine Grapes — Longtailed Mealybug (Soil) ──
    {
      crop: "Table and Wine Grapes — Longtailed Mealybug (Soil Application)",
      cropList: ["Table Grapes", "Wine Grapes"],
      weeds: [
        {
          weed: "Longtailed mealybug",
          pestList: ["Longtailed Mealybug"],
          states: ["All"],
          rate: "800",
          rateMax: "800",
          unit: "g/ha",
          stage: "Apply between budburst and beginning of flowering via micro-irrigation or band spraying",
          note: "Equivalent to 26 g per 100 m vine row at 3.3 m row spacing. For micro-irrigation: ensure thorough wetting of soil to 10 cm depth. For band spraying: apply in 0.7 m band centred on row, incorporate within 24 hours with 10–25 mm irrigation. DO NOT apply to wine grapes after beginning of flowering (E-L 19). Max 1 soil application per block per season. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Table Grapes — Longtailed Mealybug (Foliar) ─────────
    {
      crop: "Table Grapes — Longtailed Mealybug (Foliar)",
      cropList: ["Table Grapes"],
      weeds: [
        {
          weed: "Longtailed mealybug",
          pestList: ["Longtailed Mealybug"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "g/100L",
          stage: "Apply as soon as crawlers are seen — max 2 applications at least 21 days apart up to bunch closure",
          note: "Dilute foliar spray in minimum 1000 L/ha to run-off. Increase spray volume as vine foliage becomes bigger. Part of a season-long program. Addition of MAXX Surfactant at 50 mL/100 L may improve efficacy. WHP: 7 days."
        }
      ]
    },

    // ── Wine Grapes — Grapevine Scale (Soil) ────────────────
    {
      crop: "Wine Grapes — Grapevine Scale (Soil Application)",
      cropList: ["Wine Grapes"],
      weeds: [
        {
          weed: "Grapevine scale",
          pestList: ["Grapevine Scale"],
          states: ["All"],
          rate: "600",
          rateMax: "600",
          unit: "g/ha",
          stage: "Apply via micro-irrigation — DO NOT apply after beginning of flowering (E-L 19)",
          note: "Equivalent to 18 g per 100 m vine row at 3 m row spacing. To minimise residue risk DO NOT stress vines. Stressing due to lack of rain or irrigation may cause vine metabolism to shut down, halting clothianidin uptake. If rain or irrigation resumes close to harvest, can result in elevated residues. WHP: Not required when used as directed."
        }
      ]
    },

  ],  // end crops array

  // ── Agronomic fields ──────────────────────────────────────
  restraints: [
    "DO NOT apply by aircraft.",
    "DO NOT apply more than 3 foliar sprays per season.",
    "DO NOT apply more than 1 foliar spray per season if water volumes are greater than 2000 L/ha.",
    "DO NOT apply more than one soil application per grape block per season.",
    "DO NOT apply soil and foliar applications on the same grape block in the same season.",
    "DO NOT apply if heavy rains or storms are forecast within 3 days.",
    "DO NOT irrigate to the point of run-off for at least 3 days after application.",
    "DO NOT allow first-flush irrigation tailwater or storm run-off from treated soil to enter natural waterways.",
    "Highly toxic to bees — DO NOT apply if bees are foraging in the orchard or vineyard. Notify beekeepers with hives within 2 km at least 48 hours prior to application.",
    "Very toxic to aquatic life — DO NOT contaminate wetlands or watercourses.",
    "Toxic to non-target beneficial arthropods — not compatible with IPM programs utilising beneficial arthropods."
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Test water quality and all mixtures prior to mixing commercial quantities. DO NOT let prepared spray solution sit in spray tank overnight."]
  },

  withholding: {
    harvest: "Almonds: 14 days. Pome fruit, Stone fruit (including Cherries), Persimmon: 7 days. Citrus fruit: 20 weeks. Grapes (foliar): 7 days. Grapes (soil): Not required when used as directed.",
    grazing: "DO NOT graze treated area or cut treated area for stock feed."
  },

  surfactant:     "MAXX Organosilicone Surfactant at 50 mL/100 L water — DO NOT exceed this rate. DO NOT use MAXX surfactant on pears and apples in high humidity conditions where russeting may occur. DO NOT use within 7 days of applying copper-based or nutritional products to fruit.",
  sprayerCleanup: "Ensure agitation is maintained during tank filling and spraying."

};
