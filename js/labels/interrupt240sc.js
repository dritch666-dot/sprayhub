// ─────────────────────────────────────────────────────────────────────────────
// INTERRUPT® 240 SC — Label Data
// Spiromesifen Miticide (240 g/L Spiromesifen)
// Source: Interrupt 240 SC Product Label.pdf
// APVMA Approval No: 92500/135730
// Bayer CropScience Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['interrupt240sc'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Bayer Interrupt® 240 SC Miticide",

  category:         "Miticides",
  activeIngredient: "240 g/L Spiromesifen",
  group:            "Group 23 Insecticide (Lipid Synthesis Inhibitor)",
  modeOfAction:     "Inhibitor of acetyl CoA carboxylase (lipid synthesis). Systemic action. Controls two-spotted mites in pome and stone fruit. Harmful to bees including bee brood.",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#c084fc",
  apvma:            "92500/135730",
  company: "Bayer",
  labelPdf:         "Source labels/Interrupt 240 SC Product Label.pdf",
  sdsPdf:           "SDS Labels/Interrupt 240 SC SDS.PDF",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Miticide",
    target: ["Two-Spotted Mite", "Tetranychus urticae"],
    timing: ["Curative — apply once local thresholds are reached"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Pome fruit — Two-spotted mite ──
    {
      crop: "Pome Fruit",
      cropList: ["Pome Fruit", "Apples", "Pears"],
      weeds: [
        {
          weed: "Two-spotted mite (Tetranychus urticae)",
          pestList: ["Two-Spotted Mite", "Tetranychus urticae"],
          states: ["All"],
          rate: "50",
          rateMax: "60",
          unit: "mL/100L",
          stage: "Monitor orchards and commence applications once local thresholds are reached.",
          note: "Dilute spraying: 50–60 mL/100L to point of run-off. Concentrate spraying: calculate rate based on dilute volume (max 2X concentration factor, e.g. max 120 mL/100L). Use higher rate under conditions of high or persistent pest pressure. Max 1 application per season per crop. Max 1.6 L/ha per application. Complete coverage of all foliage and fruit is essential. Further treatments should use alternate mode-of-action miticides."
        }
      ]
    },

    // ── 2. Stone fruit — Two-spotted mite ──
    {
      crop: "Stone Fruit",
      cropList: ["Stone Fruit", "Peaches", "Nectarines", "Plums", "Cherries", "Apricots"],
      weeds: [
        {
          weed: "Two-spotted mite (Tetranychus urticae)",
          pestList: ["Two-Spotted Mite", "Tetranychus urticae"],
          states: ["All"],
          rate: "50",
          rateMax: "60",
          unit: "mL/100L",
          stage: "Monitor orchards and commence applications once local thresholds are reached.",
          note: "Dilute spraying: 50–60 mL/100L to point of run-off. Concentrate spraying: calculate rate based on dilute volume (max 2X concentration factor). Use higher rate under conditions of high or persistent pest pressure. Max 1 application per season per crop. Max 1.6 L/ha per application. Complete coverage of all foliage and fruit is essential. Further treatments should use alternate mode-of-action miticides."
        }
      ]
    }
  ],

  // ── Withholding ──────────────────────────────────────────────
  withholding: {
    harvest: "14 days after application (pome and stone fruit)",
    grazing: "DO NOT graze treated orchard"
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply by aircraft.",
    "DO NOT apply by ground boom.",
    "DO NOT apply if heavy rains or storms are forecast within 3 days.",
    "DO NOT irrigate to the point of runoff for at least 3 days after application.",
    "DO NOT apply more than one application per season in each crop.",
    "DO NOT apply more than 1.6 L/ha per application.",
    "DO NOT apply while bees are actively foraging.",
    "DO NOT allow spray drift to flowering weeds or flowering crops in the vicinity."
  ],

  // ── General Notes ──────────────────────────────────────────
  generalNotes: [
    "Vertical sprayers only — boom sprayers not permitted.",
    "Shake container well before use. Do not use hard/saline water.",
    "Spiromesifen has systemic action — harmful to bees including bee brood. Notify beekeepers before spraying.",
    "May be toxic to beneficial arthropods — may not be compatible with IPM programs.",
    "Growers should check MRLs/import tolerances before using on export produce.",
    "Spray drift buffer zones apply — see label for canopy height/type specific distances.",
    "GHS classification not required."
  ]
};
