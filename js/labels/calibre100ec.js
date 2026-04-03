// ─────────────────────────────────────────────────────────
// Nufarm CALIBRE® 100 EC — Label Data
// Group 10A Insecticide (Hexythiazox) — Miticide
// Source: Nufarm_Calibre100EC_Label.pdf
// APVMA Approval No: 58856/112784
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────
productDatabase['calibre100ec'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Nufarm Calibre® 100 EC Miticide",

  category:         "Miticides",
  activeIngredient: "100 g/L Hexythiazox",
  group:            "Group 10A Insecticide",
  modeOfAction:     "Mite growth inhibitor (ovicide/larvicide). Controls eggs and immature motile stages of twospotted mite and European red mite. Does not kill adult mites — must be used with a recommended adulticide where adults are present, or rely on biological control predators.",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#854d0e",
  apvma:            "58856/112784",
  company: "Albaugh",
  labelPdf:         "Source labels/Nufarm_Calibre100EC_Label.pdf",
  sdsPdf:           "SDS Labels/Nufarm_Calibre100EC_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Miticide",
    target: ["Twospotted Mite", "European Red Mite"],
    timing: ["Foliar"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ═══ POME FRUIT ═══

    // ── Programme #1: Pears — Twospotted Mite (with adulticide) ──
    {
      crop: "Pears — Twospotted Mite (Programme #1, with adulticide)",
      cropList: ["Pears"],
      weeds: [
        {
          weed: "Twospotted mite (Tetranychus urticae)",
          pestList: ["Twospotted Mite", "Tetranychus Urticae"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Apply when mites are evident but WELL BEFORE infestation reaches economic damage level",
          note: "Programme #1: Use irrespective of whether biological control is being practised. 25 mL/100L plus a recommended adulticide (Torque, dicofol, or summer spraying oil at 500 mL/100L). Apply by dilute or concentrate spraying. DO NOT apply before 20 October or after January. Max 1 application per season. WHP: 3 days harvest."
        }
      ]
    },

    // ── Programme #1: Apples & Stone Fruit — Twospotted Mite (no biocontrol) ──
    {
      crop: "Apples & Stone Fruit — Twospotted Mite (Programme #1, no biocontrol)",
      cropList: ["Apples", "Stone Fruit"],
      weeds: [
        {
          weed: "Twospotted mite (Tetranychus urticae)",
          pestList: ["Twospotted Mite", "Tetranychus Urticae"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Apply when mites are evident but WELL BEFORE infestation reaches economic damage level",
          note: "Programme #1: For where biological control is NOT being practised. 25 mL/100L plus a recommended adulticide (Torque, dicofol, or summer spraying oil at 500 mL/100L). Apply by dilute or concentrate spraying. DO NOT apply before 20 October or after January. Max 1 application per season. WHP: 3 days harvest."
        }
      ]
    },

    // ── Programme #2: Apples & Stone Fruit — Twospotted Mite (biocontrol) ──
    {
      crop: "Apples & Stone Fruit — Twospotted Mite (Programme #2, with biocontrol)",
      cropList: ["Apples", "Stone Fruit"],
      weeds: [
        {
          weed: "Twospotted mite (Tetranychus urticae)",
          pestList: ["Twospotted Mite", "Tetranychus Urticae"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Apply when mites are evident but WELL BEFORE infestation reaches economic damage level, accounting for biocontrol effectiveness from frequent field checks",
          note: "Programme #2: For where biological control of twospotted mite IS being practised. 25 mL/100L plus a non-ionic surfactant at the label rate. Apply by dilute or concentrate spraying. Requires established predatory mites (T. occidentalis, T. pyri, P. persimilis, or A. womersleyi). DO NOT apply before 20 October or after January. Max 1 application per season. WHP: 3 days harvest."
        }
      ]
    },

    // ── Programme #3: Apples, Pears & Stone Fruit — European Red Mite ──
    {
      crop: "Apples, Pears & Stone Fruit — European Red Mite (Programme #3)",
      cropList: ["Apples", "Pears", "Stone Fruit"],
      weeds: [
        {
          weed: "European red mite (Panonychus ulmi)",
          pestList: ["European Red Mite", "Panonychus Ulmi"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Following oil treatment prior to bud-burst; apply to infestations of predominantly EGGS and IMMATURE MOTILES in November",
          note: "Programme #3: Use irrespective of whether biological control is being practised. 25 mL/100L plus a non-ionic surfactant at the label rate. Must follow treatment with oil at recommended rates PRIOR to bud-burst. Apply by dilute or concentrate spraying. DO NOT apply before 20 October or after January. Max 1 application per season. WHP: 3 days harvest."
        }
      ]
    },

    // ── Mixed Infestations: Pears — Both Mites ──
    {
      crop: "Pears — Twospotted Mite & European Red Mite (mixed infestation)",
      cropList: ["Pears"],
      weeds: [
        {
          weed: "Twospotted mite & European red mite (mixed infestation)",
          pestList: ["Twospotted Mite", "European Red Mite"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Where both mite species present — choose programme based on dominant species",
          note: "Mixed infestation guidance: Where European red mite is dominant, use Programme #3 (25 mL/100L + non-ionic surfactant after oil at bud-burst, apply in November). Where twospotted mite is dominant, use Programme #1 (25 mL/100L + recommended adulticide). DO NOT apply before 20 October or after January. Max 1 application per season. WHP: 3 days harvest."
        }
      ]
    },

    // ── Mixed Infestations: Apples & Stone Fruit — Both Mites ──
    {
      crop: "Apples & Stone Fruit — Twospotted Mite & European Red Mite (mixed infestation)",
      cropList: ["Apples", "Stone Fruit"],
      weeds: [
        {
          weed: "Twospotted mite & European red mite (mixed infestation)",
          pestList: ["Twospotted Mite", "European Red Mite"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Where both mite species present — choose programme based on dominant species and biocontrol status",
          note: "Mixed infestation guidance (no biocontrol): Where twospotted mite dominant, use Programme #1 (+ adulticide). Where European red mite dominant, use Programme #3 (+ surfactant, after oil at bud-burst). With biocontrol of twospotted mite: use Programme #3. With biocontrol of European red mite: use Programme #1. With biocontrol of both: twospotted mite dominant → Programme #2; European red mite dominant → Programme #3. Max 1 application per season. WHP: 3 days harvest."
        }
      ]
    },

    // ═══ STRAWBERRIES ═══

    // ── Strawberries — Twospotted Mite (no biocontrol) ──
    {
      crop: "Strawberries — Twospotted Mite (no biocontrol)",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Twospotted mite (Tetranychus urticae)",
          pestList: ["Twospotted Mite", "Tetranychus Urticae"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Apply when mites are evident but WELL BEFORE infestation reaches economic damage level",
          note: "No biocontrol programme: 25 mL/100L plus 40 mL/100L Torque Miticide. Do NOT apply as concentrate spray. Dilute spray only. Increase volume from ~1000 L/ha (small pre-flowering plants) to ~2500 L/ha (large fully developed fruiting plants). Direct spray to ensure undersides of leaves are thoroughly covered. Max 1 application per season. WHP: 1 day harvest."
        }
      ]
    },

    // ── Strawberries — Twospotted Mite (with biocontrol) ──
    {
      crop: "Strawberries — Twospotted Mite (with biocontrol)",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Twospotted mite (Tetranychus urticae)",
          pestList: ["Twospotted Mite", "Tetranychus Urticae"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Apply when mites are evident but WELL BEFORE infestation reaches economic damage level",
          note: "Biocontrol programme: 25 mL/100L plus a non-ionic surfactant at the label rate. Do NOT apply as concentrate spray. Dilute spray only. Increase volume from ~1000 L/ha (small pre-flowering plants) to ~2500 L/ha (large fully developed fruiting plants). Direct spray to ensure undersides of leaves are thoroughly covered. Requires established predatory mites. Max 1 application per season. WHP: 1 day harvest."
        }
      ]
    },

    // ═══ ORNAMENTALS ═══

    // ── Ornamentals — Twospotted Mite and/or European Red Mite (no biocontrol) ──
    {
      crop: "Ornamentals — Mites (no biocontrol)",
      cropList: ["Ornamentals"],
      weeds: [
        {
          weed: "Twospotted mite (Tetranychus urticae) and/or European red mite (Panonychus ulmi)",
          pestList: ["Twospotted Mite", "European Red Mite"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Apply when mites are evident but WELL BEFORE infestation reaches economic damage level",
          note: "No biocontrol programme: 25 mL/100L plus a recommended adulticide. Do NOT apply as concentrate spray. Dilute spray only. Use sufficient volume to ensure undersides of leaves are thoroughly covered. Due to diversity of ornamentals and growing conditions, test plant reactions to Calibre before large-scale applications — Nufarm not responsible for adverse plant reactions. Max 1 application per season. No WHP."
        }
      ]
    },

    // ── Ornamentals — Twospotted Mite and/or European Red Mite (with biocontrol) ──
    {
      crop: "Ornamentals — Mites (with biocontrol)",
      cropList: ["Ornamentals"],
      weeds: [
        {
          weed: "Twospotted mite (Tetranychus urticae) and/or European red mite (Panonychus ulmi)",
          pestList: ["Twospotted Mite", "European Red Mite"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Apply when mites are evident but WELL BEFORE infestation reaches economic damage level",
          note: "Biocontrol programme: 25 mL/100L plus a non-ionic surfactant at the label rate. Do NOT apply as concentrate spray. Dilute spray only. Use sufficient volume to ensure undersides of leaves are thoroughly covered. Requires established predatory mites. Due to diversity of ornamentals and growing conditions, test plant reactions to Calibre before large-scale applications. Max 1 application per season. No WHP."
        }
      ]
    },

    // ═══ PERMIT USES ═══

    // ── PER95343: Hops — Two-spotted Mite ──
    {
      crop: "Hops — Twospotted Mite (PER95343)",
      cropList: ["Hops"],
      permitNumber: "PER95343",
      weeds: [
        {
          weed: "Twospotted mite (Tetranychus urticae)",
          pestList: ["Mites", "Twospotted Mite", "Tetranychus Urticae"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Apply when mites are evident but well before the infestation reaches economic damage level",
          note: "PERMIT PER95343 (exp. 31 July 2028). 25 mL/100L via air-blast or air-shear sprayer. Spray volume 600–1000 L/ha. Ensure thorough coverage of upper and lower leaf surfaces through entire canopy. Where biological control is not being practised, consider use with a registered adulticide. Follow label recommendations for surfactants. Max 1 application per season. WHP: 28 days harvest. Do not graze or cut for stock food."
        }
      ]
    },

    // ── PER95394: Cucurbits & Fruiting Vegetables — Mites (no biocontrol) ──
    {
      crop: "Cucurbits & Fruiting Vegetables — Mites, no biocontrol (PER95394)",
      cropList: ["Cucurbits", "Capsicum", "Chilli", "Eggplant", "Tomato"],
      permitNumber: "PER95394",
      weeds: [
        {
          weed: "Tomato russet mite (Aculops lycopersici), Broad mite (Polyphagotarsonemus latus), Twospotted mite (Tetranychus urticae)",
          pestList: ["Mites", "Tomato Russet Mite", "Broad Mite", "Twospotted Mite"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Apply when mites are evident and well before infestation reaches economic damage level",
          note: "PERMIT PER95394 (exp. 30 Sep 2029). No biocontrol programme: 25 mL/100L plus an approved adulticide. Protected and field situations. For tomatoes, fresh market crops only. Ground airblast, boomsprayer or similar — high volume to point of run-off. Thorough coverage essential including undersides of leaves. Max 1 application per crop. WHP: 3 days harvest."
        }
      ]
    },

    // ── PER95394: Cucurbits & Fruiting Vegetables — Mites (with biocontrol) ──
    {
      crop: "Cucurbits & Fruiting Vegetables — Mites, with biocontrol (PER95394)",
      cropList: ["Cucurbits", "Capsicum", "Chilli", "Eggplant", "Tomato"],
      permitNumber: "PER95394",
      weeds: [
        {
          weed: "Tomato russet mite (Aculops lycopersici), Broad mite (Polyphagotarsonemus latus), Twospotted mite (Tetranychus urticae)",
          pestList: ["Mites", "Tomato Russet Mite", "Broad Mite", "Twospotted Mite"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Apply when mites are evident and well before infestation reaches economic damage level",
          note: "PERMIT PER95394 (exp. 30 Sep 2029). Biocontrol programme: 25 mL/100L plus a non-ionic surfactant. Protected and field situations. For tomatoes, fresh market crops only. Ground airblast, boomsprayer or similar — high volume to point of run-off. Thorough coverage essential including undersides of leaves. Max 1 application per crop. WHP: 3 days harvest."
        }
      ]
    },

    // ── PER95394: Fruiting Vegetables — Tomato Red Spider Mite ──
    {
      crop: "Fruiting Vegetables — Tomato Red Spider Mite (PER95394)",
      cropList: ["Capsicum", "Chilli", "Eggplant", "Tomato"],
      permitNumber: "PER95394",
      weeds: [
        {
          weed: "Tomato red spider mite (Tetranychus evansi)",
          pestList: ["Mites", "Tomato Red Spider Mite", "Tetranychus Evansi"],
          states: ["All"],
          rate: "25",
          rateMax: "60",
          unit: "mL/100L",
          stage: "Apply when mites are evident and well before infestation reaches economic damage level",
          note: "PERMIT PER95394 (exp. 30 Sep 2029). Option A: 25 mL/100L plus an approved adulticide. Option B: 50–60 mL/100L plus a non-ionic surfactant. Protected and field situations. For tomatoes, fresh market crops only. Thorough coverage essential. Max 1 application per crop. WHP: 3 days harvest."
        }
      ]
    },

    // ── PER95394: Snow Peas & Sugar Snap Peas — Twospotted Mite ──
    {
      crop: "Snow Peas & Sugar Snap Peas — Twospotted Mite (PER95394)",
      cropList: ["Snow Peas", "Sugar Snap Peas"],
      permitNumber: "PER95394",
      weeds: [
        {
          weed: "Twospotted mite (Tetranychus urticae)",
          pestList: ["Mites", "Twospotted Mite", "Tetranychus Urticae"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "Apply when mites are evident and well before infestation reaches economic damage level",
          note: "PERMIT PER95394 (exp. 30 Sep 2029). 25 mL/100L plus a non-ionic surfactant. Protected and field situations. Do NOT apply as concentrate spray. Thorough coverage essential including undersides of leaves. Max 1 application per crop. WHP: 14 days harvest. Do not graze or cut for stock food for 14 days."
        }
      ]
    },

    // ── PER95394: Potatoes — Tomato Red Spider Mite ──
    {
      crop: "Potatoes — Tomato Red Spider Mite (PER95394)",
      cropList: ["Potatoes"],
      permitNumber: "PER95394",
      weeds: [
        {
          weed: "Tomato red spider mite (Tetranychus evansi)",
          pestList: ["Mites", "Tomato Red Spider Mite", "Tetranychus Evansi"],
          states: ["All"],
          rate: "135",
          rateMax: "135",
          unit: "mL/100L",
          stage: "Apply when mites are evident and well before infestation reaches economic damage level",
          note: "PERMIT PER95394 (exp. 30 Sep 2029). 135 mL/100L plus a non-ionic surfactant. Ground airblast, boomsprayer or similar — high volume to point of run-off. Thorough coverage essential. Max 1 application per crop. WHP: 21 days harvest."
        }
      ]
    }

  ],

  // ── General notes ──────────────────────────────────────────
  restraints: [
    "DO NOT apply by aircraft.",
    "DO NOT apply to any crop more than once per season.",
    "DO NOT apply to any crop treated earlier in the same season with clofentezine.",
    "DO NOT apply to deciduous fruit before October 20 or after January in any season.",
    "DO NOT use in orchards where products likely to cause mite flaring have been used or are planned to be used."
  ],
  withholding: {
    harvest: "Apples, pears and stone fruit: 3 days. Strawberries: 1 day.",
    grazing: "Not stated."
  },
  compatibility: {
    compatible: [
      "Torque Miticide (propargite)",
      "Dicofol EC",
      "Summer spraying oils (C21 NR/C23 NR grades, 500 mL/100L — pears and peaches for canning only, dilute spray only, max once per season)",
      "Commonly used pesticides (when mixed with non-ionic surfactant or recommended adulticide)"
    ],
    incompatible: [],
    note: [
      "When Calibre 100 EC is applied with an adulticide, the method of application should comply with the recommendations for both materials.",
      "Sprays containing Calibre 100 EC should be used within 3 hours of preparation.",
      "Refer to Nufarm Australia Limited personnel for specific compatibility details."
    ]
  },
  surfactant: "Add a non-ionic surfactant at the label rate for Programmes #2 and #3 (biocontrol and European red mite uses). Do not use surfactant with Programme #1 — use recommended adulticide instead.",
  sprayerCleanup: "Triple or preferably pressure rinse containers before disposal. Add rinsings to spray tank."
};