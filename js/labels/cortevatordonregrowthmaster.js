// ─────────────────────────────────────────────────────────────────────────────
// Corteva Tordon® RegrowthMaster Herbicide — Label Data
// Liquid (L) | Group 4 Herbicide
// APVMA Approval No. 67378/145117
// Source: Corteva_Tordon_RegrowthMaster_Herbicide_Label.pdf
// Corteva Agriscience
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['cortevatordonregrowthmaster'] = {
  name:             "Corteva Tordon RegrowthMaster Herbicide",

  category:         "Herbicides",
  activeIngredient: "200 g/L Triclopyr + 100 g/L Picloram + 25 g/L Aminopyralid",
  group:            "Group 4 Herbicide",
  modeOfAction:     "Synthetic auxin (plant growth regulator disruptor)",
  formulation:      "Liquid (L)",
  color:            "#16a34a",
  company: "Corteva",
  labelPdf:         "Source labels/Corteva_Tordon_RegrowthMaster_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/Tordon-Regrowth-Master-Herbicide-SDS.pdf",
  signalHeading:    "POISON",
  apvma:            "67378/145117",
  classification: {
    type: "Herbicide",
    target: ["Timber", "Blackberry", "Gorse", "Harrisia Cactus", "Woody Weeds"],
    timing: ["Post-emergent"]
  },

  crops: [
    // ══════════════════════════════════════════════════════════════════
    // STEM INJECTION — NATIVE TREES (Single Stems < 25 cm, Waist Height)
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Stem Injection — Unwanted Timber (Single Stems < 25 cm, Waist Height)",
      cropList: [
        "Agricultural Non-Crop Areas", "Commercial and Industrial Areas",
        "Forests", "Pastures", "Rights-of-Way"
      ],
      weeds: [
        {
          weed: "Acacia, Angophora, Casuarina, Corymbia, Eucalyptus (except Yellow Box), Lophostemon, Melaleuca species, Camphor Laurel",
          pestList: [
            "Acacia", "Angophora", "Casuarina", "Corymbia",
            "Eucalyptus", "Lophostemon", "Melaleuca", "Camphor Laurel"
          ],
          states: ["All"],
          rate: "1", unit: "mL/cut",
          stage: "Single stems less than 25 cm diameter at base — waist height application",
          note: "Dilution rate: Mix 1 part Tordon RegrowthMaster with 4 parts water. Apply 1 mL of diluted chemical per cut at 10 to 13 cm centres. Control of Casuarina and Lophostemon species may be variable. Use ground level application to reduce variability. DO NOT exceed the spacing shown from the centre of one cut to the centre of the next. Inject each stem of a multi-stem tree where possible. Injection at or near ground level is essential in the Traprock area of south-eastern Queensland and is preferred for optimum results in Poplar box areas."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // STEM INJECTION — NATIVE TREES (Single Stems < 25 cm, Ground Level)
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Stem Injection — Unwanted Timber (Single Stems < 25 cm, Ground Level)",
      cropList: [
        "Agricultural Non-Crop Areas", "Commercial and Industrial Areas",
        "Forests", "Pastures", "Rights-of-Way"
      ],
      weeds: [
        {
          weed: "Acacia, Angophora, Casuarina, Corymbia, Eucalyptus (except Yellow Box), Lophostemon, Melaleuca species, Camphor Laurel",
          pestList: [
            "Acacia", "Angophora", "Casuarina", "Corymbia",
            "Eucalyptus", "Lophostemon", "Melaleuca", "Camphor Laurel"
          ],
          states: ["All"],
          rate: "1", unit: "mL/cut",
          stage: "Single stems less than 25 cm diameter at base — ground level application",
          note: "Dilution rate: Mix 1 part Tordon RegrowthMaster with 4 parts water. Apply 1 mL of diluted chemical per cut at 12 to 15 cm centres. Ground level application is preferred for Casuarina and Lophostemon as it reduces variability in control."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // STEM INJECTION — NATIVE TREES (Multiple Stems > 25 cm, Waist Height)
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Stem Injection — Unwanted Timber (Multiple Stems > 25 cm, Waist Height)",
      cropList: [
        "Agricultural Non-Crop Areas", "Commercial and Industrial Areas",
        "Forests", "Pastures", "Rights-of-Way"
      ],
      weeds: [
        {
          weed: "Acacia, Angophora, Casuarina, Corymbia, Eucalyptus (except Yellow Box), Lophostemon, Melaleuca species, Camphor Laurel",
          pestList: [
            "Acacia", "Angophora", "Casuarina", "Corymbia",
            "Eucalyptus", "Lophostemon", "Melaleuca", "Camphor Laurel"
          ],
          states: ["All"],
          rate: "2", unit: "mL/cut",
          stage: "Multiple stems or more than 25 cm diameter at base — waist height application",
          note: "Dilution rate: Mix 1 part Tordon RegrowthMaster with 4 parts water. Apply 2 mL of diluted chemical per cut at 10 to 13 cm centres. In areas where experience has shown that results are variable because species are harder to kill or due to marginal soil and/or climate factors, higher doses may improve control. Contact Corteva Agriscience for more detail."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // STEM INJECTION — NATIVE TREES (Multiple Stems > 25 cm, Ground Level)
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Stem Injection — Unwanted Timber (Multiple Stems > 25 cm, Ground Level)",
      cropList: [
        "Agricultural Non-Crop Areas", "Commercial and Industrial Areas",
        "Forests", "Pastures", "Rights-of-Way"
      ],
      weeds: [
        {
          weed: "Acacia, Angophora, Casuarina, Corymbia, Eucalyptus (except Yellow Box), Lophostemon, Melaleuca species, Camphor Laurel",
          pestList: [
            "Acacia", "Angophora", "Casuarina", "Corymbia",
            "Eucalyptus", "Lophostemon", "Melaleuca", "Camphor Laurel"
          ],
          states: ["All"],
          rate: "2", unit: "mL/cut",
          stage: "Multiple stems or more than 25 cm diameter at base — ground level application",
          note: "Dilution rate: Mix 1 part Tordon RegrowthMaster with 4 parts water. Apply 2 mL of diluted chemical per cut at 12 to 15 cm centres. In areas where experience has shown that results are variable because species are harder to kill or due to marginal soil and/or climate factors, higher doses may improve control."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // CUT STUMP / BRUSHCUTTER APPLICATION — NATIVE TREES
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Cut Stump/Brushcutter — Unwanted Timber",
      cropList: [
        "Agricultural Non-Crop Areas", "Commercial and Industrial Areas",
        "Forests", "Pastures", "Rights-of-Way"
      ],
      weeds: [
        {
          weed: "Acacia, Angophora, Casuarina, Corymbia, Eucalyptus (except Yellow Box), and Lophostemon species",
          pestList: [
            "Acacia", "Angophora", "Casuarina", "Corymbia",
            "Eucalyptus", "Lophostemon"
          ],
          states: ["All"],
          rate: "500", unit: "mL/10L water",
          stage: "Cut stem as close to ground as possible, leaving stump no higher than 10 cm — apply immediately to freshly cut stump",
          note: "Immediately apply Tordon RegrowthMaster/water mixture liberally to the freshly cut stump by spraying/painting the cut surface and sides of the stem. Control of Casuarina and Lophostemon species may be variable. If cut surface is oily, add a 100% non-ionic surfactant (e.g. BS1000) at 100 mL/100 L water to improve penetration."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // HIGH VOLUME SPRAYING — BLACKBERRY
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "High Volume Spray — Blackberry",
      cropList: [
        "Agricultural Non-Crop Areas", "Commercial and Industrial Areas",
        "Forests", "Pastures", "Rights-of-Way"
      ],
      weeds: [
        {
          weed: "Blackberry",
          pestList: ["Blackberry"],
          states: ["NSW", "Vic", "Qld", "SA", "WA", "Tas"],
          rate: "500", unit: "mL/100L water",
          stage: "Late spring to autumn",
          note: "Always add an adjuvant (see Compatibility section). Where herbicides other than Group 4 herbicides have been used, allow two seasons regrowth to occur before re-spraying with Tordon RegrowthMaster Herbicide. Compatible adjuvants for high volume application: Hasten @ 500 mL/100 L, Supercharge @ 500 mL/100 L, or Uptake Spraying Oil @ 500 mL/100 L water."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // HIGH VOLUME SPRAYING — GORSE
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "High Volume Spray — Gorse",
      cropList: [
        "Agricultural Non-Crop Areas", "Commercial and Industrial Areas",
        "Forests", "Pastures", "Rights-of-Way"
      ],
      weeds: [
        {
          weed: "Gorse",
          pestList: ["Gorse"],
          states: ["NSW", "Vic", "SA", "Tas"],
          rate: "375", unit: "mL/100L water",
          stage: "September to March when actively growing",
          note: "Treat any regrowth in the following season. Use a minimum of 3,000–4,000 L of spray mixture/ha for dense gorse. Compatible adjuvants for high volume application: Hasten @ 500 mL/100 L, Supercharge @ 500 mL/100 L, or Uptake Spraying Oil @ 500 mL/100 L water."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // HIGH VOLUME SPRAYING — HARRISIA CACTUS
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "High Volume Spray — Harrisia Cactus",
      cropList: [
        "Agricultural Non-Crop Areas", "Commercial and Industrial Areas",
        "Forests", "Pastures", "Rights-of-Way"
      ],
      weeds: [
        {
          weed: "Harrisia cactus",
          pestList: ["Harrisia Cactus"],
          states: ["Qld"],
          rate: "2.5", unit: "L/100L water",
          stage: "Actively growing",
          note: "Treat all stems thoroughly. Qld only."
        }
      ]
    }
  ],

  restraints: [
    "DO NOT treat trees with poor sap flow.",
    "DO NOT apply to plants which may be stressed (not actively growing) due to prolonged periods of extreme cold, moisture stress (water-logged or drought affected) or previous herbicide treatment, as reduced levels of control may result.",
    "DO NOT apply close to, or on areas containing roots of desirable vegetation, where treated soil may be washed to areas growing, or to be planted with desirable plants.",
    "DO NOT apply on sites where surface water from heavy rain can be expected to run off to areas containing or to be planted to susceptible crops or plants.",
    "DO NOT move soil which has been sprayed, to areas where desirable plants are to be grown.",
    "DO NOT burn treated areas for 9 months after application or mechanically clear treated areas for at least 12 months after application.",
    "For High Volume spraying, DO NOT spray if rain is likely within 1 hour or if foliage is wet from rain or dew."
  ],

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "Not required when used as directed"
  },

  exportIntervals: "Export Slaughter Interval (ESI): 3 days. Export Grazing Interval (EGI): 42 days (6 weeks). Export Animal Feed Interval (EAFI): 42 days (6 weeks).",

  compatibility: "High Volume application: Hasten @ 500 mL/100 L water, Supercharge @ 500 mL/100 L water, Uptake Spraying Oil @ 500 mL/100 L water. Cut Stump application: BS1000 @ 100 mL/100 L water. Mix only with water — will not mix with oil or diesel fuel.",

  mixing: "Mix 1 part Tordon RegrowthMaster with 4 parts clean water for stem injection and cut stump applications. For high volume spraying, half-fill spray unit with water, add required amount of product, then add remaining water with agitator running. Add spray oils or wetters last. Maintain mechanical or by-pass agitation during spraying.",

  nativeVegetation: "Use of Tordon RegrowthMaster Herbicide on native vegetation must be done in accordance with STATE and/or LOCAL legislation.",

  recropping: "Aminopyralid remains active in the soil for extended periods depending on rate of application, soil type (clay content), rainfall, temperature, humidity, soil moisture and soil organic matter. Contact Corteva Agriscience for applicable re-cropping intervals."
};
