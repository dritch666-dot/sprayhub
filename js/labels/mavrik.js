// ─────────────────────────────────────────────────────────
// Mavrik Aquaflo — Label Data
// Group 3 (Synthetic Pyrethroid) | Oil in Water Emulsion
// Source: Adama_Mavrik_Label.pdf
// Approval No: Not listed (NZ product)
// ADAMA New Zealand Limited
// ─────────────────────────────────────────────────────────
productDatabase['mavrik'] = {

  name:             "Mavrik Aquaflo",
  company: "FMC",


  category:         "Herbicides",
  activeIngredient: "240 g/L Tau-Fluvalinate",
  group:            "Group 3 (Synthetic Pyrethroid)",
  modeOfAction:     "Disrupts insect nervous system; rapid knockdown and control",
  formulation:      "Oil in Water Emulsion",
  color:            "#4338ca",
  apvma:            "",
  labelPdf:         "Source labels/Adama_Mavrik_Label.pdf",
  sdsPdf:           "SDS Labels/ADAMA_MAVRIK_AQUAFLO_INSECTICIDE.pdf",
  signalHeading:    "Poison",

  classification: {
    type: "Herbicide",
    target: ["Aphids", "Caterpillars", "Fruit Flies", "Mites", "Thrips", "Whitefly"],
    timing: ["Curative"]
  },

  crops: [
    {
      crop: "Fruit Crops (Apples, Pears, Stone Fruit)",
      cropList: ["Fruit Crops","Apples","Pears","Stone Fruit"],
      weeds: [
        {
          weed: "Codling Moth, Leafrollers, Aphids, Mites",
          pestList: ["Codling Moth","Leafrollers","Aphids","Mites"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Target timing: early morning or late evening",
          note: "Pyrethroid resistance present in some regions. Avoid repeat applications within 7 days. Follow anti-resistance strategy."
        }
      ]
    },
    {
      crop: "Vegetable Crops",
      cropList: ["Vegetable Crops","Tomato","Capsicum","Eggplant","Lettuce","Beans","Peas","Brassicas","Broccoli","Cabbage","Cauliflower"],
      weeds: [
        {
          weed: "Thrips, Aphids, Whitefly, Caterpillars",
          pestList: ["Thrips","Aphids","Whitefly","Caterpillars"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "mL/100L",
          stage: "As required during season",
          note: "Do not apply within harvest interval specified on label. Application during flowering should be timed to minimise impact on beneficial insects."
        }
      ]
    },
    {
      crop: "Arable & Cereal Crops",
      cropList: ["Arable & Cereal Crops"],
      weeds: [
        {
          weed: "Armyworms, Aphids, Heliothis",
          pestList: ["Armyworms","Aphids","Heliothis"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "mL/100L",
          stage: "During pest activity; monitor for resistance",
          note: "Part of broader IPM strategy. Do NOT apply more than 3 times per season."
        }
      ]
    },
    {
      crop: "Ornamental & Nursery Plants",
      cropList: ["Ornamental & Nursery Plants"],
      weeds: [
        {
          weed: "General insect pests",
          pestList: ["General Insect Pests"],
          states: ["All"],
          rate: "40",
          rateMax: "100",
          unit: "mL/100L",
          stage: "As required",
          note: "Test on sensitive cultivars before broad application."
        }
      ]
    },
    {
      crop: "Avocado",
      cropList: ["Avocado"],
      weeds: [
          { weed: "Leafrollers", pestList: ["Leafrollers"], states: ["All"], rate: "20", unit: "mL/100L", rateText: "20ml/100L + a non ionic surfactant", notes: "WHP: 14 days. Apply at early flowering, with a second application 3-4 weeks later if required." }
      ]
    }
    
  ,

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER13700: Seed crop pests — Carrot, onion, celery, parsley, lettuce, brassica, coriander ──
{
  crop: "Carrot (seed production) — Red legged earth mite (PER13700)",
  cropList: ["Carrot"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Red legged earth mite (Halotydeus destructor)",
      pestList: ["Insect Pests", "Mite"],
      states: ["NSW", "SA", "TAS"],
      rate: "50",
      rateMax: "50",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Alpha-cypermethrin option. Seed production only. Spray drift restraints apply. WHP: Not for human/animal consumption."
    },
    {
      weed: "Red legged earth mite (Halotydeus destructor)",
      pestList: ["Insect Pests", "Mite"],
      states: ["NSW", "SA", "TAS"],
      rate: "9",
      rateMax: "9",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Lambda-cyhalothrin option. Seed production only. WHP: Not for human/animal consumption."
    }
  ]
},
{
  crop: "Carrot (seed production) — Rutherglen bug (PER13700)",
  cropList: ["Carrot"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Rutherglen bug (Riptortus serripes)",
      pestList: ["Insect Pests", "True Bug"],
      states: ["NSW", "SA", "TAS"],
      rate: "250",
      rateMax: "250",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Alpha-cypermethrin option. Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Rutherglen bug (Riptortus serripes)",
      pestList: ["Insect Pests", "True Bug"],
      states: ["NSW", "SA", "TAS"],
      rate: "400",
      rateMax: "600",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Bifenthrin option (400-600 mL/ha range). Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Rutherglen bug (Riptortus serripes)",
      pestList: ["Insect Pests", "True Bug"],
      states: ["NSW", "SA", "TAS"],
      rate: "36",
      rateMax: "36",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Lambda-cyhalothrin option. Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Rutherglen bug (Riptortus serripes)",
      pestList: ["Insect Pests", "True Bug"],
      states: ["NSW", "SA", "TAS"],
      rate: "375",
      rateMax: "500",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Cypermethrin option (375-500 mL/ha range). Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    }
  ]
},
{
  crop: "Carrot/Onion (seed production) — Budworm & thrip (PER13700)",
  cropList: ["Onion"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Budworm (Helicoverpa spp.)",
      pestList: ["Insect Pests", "Caterpillar"],
      states: ["NSW", "SA", "TAS"],
      rate: "1.5",
      rateMax: "2.0",
      unit: "L/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Methomyl 225 g/L product (1.5-2.0 L/ha). Onion seed crop. Max 2 applications per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Budworm (Helicoverpa spp.)",
      pestList: ["Insect Pests", "Caterpillar"],
      states: ["NSW", "SA", "TAS"],
      rate: "300",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Tau-fluvalinate option (300-400 mL/ha). Onion seed crop. Max 2 applications per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Onion thrip (Thrips tabaci)",
      pestList: ["Insect Pests", "Thrip"],
      states: ["NSW", "SA", "TAS"],
      rate: "130",
      rateMax: "130",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Alpha-cypermethrin option. Onion seed crop. Max 2 applications per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Onion thrip (Thrips tabaci)",
      pestList: ["Insect Pests", "Thrip"],
      states: ["NSW", "SA", "TAS"],
      rate: "200",
      rateMax: "200",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Tau-fluvalinate option. Onion seed crop. Max 2 applications per crop. WHP: Not for human/animal consumption."
    }
  ]
},
{
  crop: "Celery (seed production) — Vegetable weevil (PER13700)",
  cropList: ["Celery"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Vegetable weevil (Listroderes costirostris)",
      pestList: ["Insect Pests", "Weevil"],
      states: ["NSW", "SA", "TAS"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Alpha-cypermethrin. Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    }
  ]
},
{
  crop: "Parsley (seed production) — Vegetable weevil & cutworm (PER13700)",
  cropList: ["Parsley"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Vegetable weevil (Listroderes costirostris)",
      pestList: ["Insect Pests", "Weevil"],
      states: ["NSW", "SA", "TAS"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Alpha-cypermethrin. Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Cutworm (Agrotis spp.)",
      pestList: ["Insect Pests", "Caterpillar"],
      states: ["NSW", "SA", "TAS"],
      rate: "75",
      rateMax: "75",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Alpha-cypermethrin. Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    }
  ]
},
{
  crop: "Lettuce (seed production) — Budworm & Rutherglen bug (PER13700)",
  cropList: ["Lettuce"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Budworm (Helicoverpa spp.)",
      pestList: ["Insect Pests", "Caterpillar"],
      states: ["NSW", "SA", "TAS"],
      rate: "1.5",
      rateMax: "2.0",
      unit: "L/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Methomyl 225 g/L (1.5-2.0 L/ha). Seed production only. Max 1 application per crop for phorate. Max 2 applications for other actives. WHP: Not for human/animal consumption."
    },
    {
      weed: "Rutherglen bug (Riptortus serripes)",
      pestList: ["Insect Pests", "True Bug"],
      states: ["NSW", "SA", "TAS"],
      rate: "400",
      rateMax: "600",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Bifenthrin (400-600 mL/ha). Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    }
  ]
},
{
  crop: "Lettuce (seed production) — Aphid (PER13700)",
  cropList: ["Lettuce"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Aphid (Aphididae family)",
      pestList: ["Insect Pests", "Sap-sucking Insects"],
      states: ["NSW", "SA", "TAS"],
      rate: "300",
      rateMax: "300",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Imidacloprid 200 g/L option. Seed production only. Max 1 application per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Aphid (Aphididae family)",
      pestList: ["Insect Pests", "Sap-sucking Insects"],
      states: ["NSW", "SA", "TAS"],
      rate: "170",
      rateMax: "170",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Imidacloprid 350 g/L option. Seed production only. Max 1 application per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Aphid (Aphididae family)",
      pestList: ["Insect Pests", "Sap-sucking Insects"],
      states: ["NSW", "SA", "TAS"],
      rate: "10",
      rateMax: "22",
      unit: "kg/ha",
      stage: "Soil/granular application",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Phorate 100 g/kg granular option. Seed production only. Max 1 application per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Aphid (Aphididae family)",
      pestList: ["Insect Pests", "Sap-sucking Insects"],
      states: ["NSW", "SA", "TAS"],
      rate: "5",
      rateMax: "11",
      unit: "kg/ha",
      stage: "Soil/granular application",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Phorate 200 g/kg granular option. Seed production only. Max 1 application per crop. WHP: Not for human/animal consumption."
    }
  ]
},
{
  crop: "Lettuce (seed production) — Thrip (PER13700)",
  cropList: ["Lettuce"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Thrip (Thripidae family)",
      pestList: ["Insect Pests", "Thrip"],
      states: ["NSW", "SA", "TAS"],
      rate: "130",
      rateMax: "130",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Esfenvalerate option. Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Thrip (Thripidae family)",
      pestList: ["Insect Pests", "Thrip"],
      states: ["NSW", "SA", "TAS"],
      rate: "200",
      rateMax: "200",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Methomyl 225 g/L option. Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    }
  ]
},
{
  crop: "Brassica (seed production) — Budworm & two spotted mite (PER13700)",
  cropList: ["Brassica"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Budworm (Helicoverpa spp.) / Two spotted mite (Tetranychus urticae)",
      pestList: ["Insect Pests", "Caterpillar Mite"],
      states: ["NSW", "SA", "TAS"],
      rate: "400",
      rateMax: "600",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Bifenthrin (400-600 mL/ha). Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    }
  ]
},
{
  crop: "Coriander (seed production) — Thrip & caterpillar/budworm (PER13700)",
  cropList: ["Coriander"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Thrip (Thripidae family)",
      pestList: ["Insect Pests", "Thrip"],
      states: ["NSW", "SA", "TAS"],
      rate: "130",
      rateMax: "130",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Esfenvalerate option. Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    },
    {
      weed: "Caterpillar / Budworm (Lepidoptera family)",
      pestList: ["Insect Pests", "Caterpillar"],
      states: ["NSW", "SA", "TAS"],
      rate: "36",
      rateMax: "36",
      unit: "mL/ha",
      stage: "Foliar spray",
      note: "PERMIT PER13700 (exp. 30 Sep 2027). Lambda-cyhalothrin option. Seed production only. Max 2 applications per crop. WHP: Not for human/animal consumption."
    }
  ]
},

],

  restraints: [
    "Harmful if swallowed",
    "May cause damage to organs through prolonged/repeated exposure",
    "Very toxic to aquatic life with long-lasting effects",
    "Harmful to terrestrial vertebrates",
    "Do not breathe spray mist",
    "Do not eat, drink or smoke while using",
    "Anyone applying by air or ground must be suitably qualified"
  ],

  compatibility: {
    compatible:   ["Most fungicides", "Selected herbicides"],
    incompatible: [],
    notes:        ["Read all tank mix product labels", "Secondary containment required if storing 100L+"]
  },

  withholding: {
    harvest: "Consult product label for specific crop harvest intervals (typically 3-21 days).",
    grazing: "Consult product label for grazing restrictions."
  },

  surfactant:     "Oil in water formulation provides good spreading. Additional wetter may not be required.",
  sprayerCleanup: "Thoroughly clean equipment after use. Store tightly sealed in cool, dry place away from sunlight."
};
