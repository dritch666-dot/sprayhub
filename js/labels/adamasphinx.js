// ─────────────────────────────────────────────────────────────────────────────
// SPHINX® FUNGICIDE — Label Data
// Group 40 Fungicide | 500 g/L Dimethomorph
// Source: Adama_Sphinx_Fungicide_Label.pdf
// APVMA Approval No: 63373/140421
// ADAMA Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['adamasphinx'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Adama Sphinx Fungicide",
  activeIngredient: "500 g/L Dimethomorph",
  group:            "Group 40 Fungicide",
  modeOfAction:     "Carboxylic acid amide (CAA) — inhibits cellulose synthase in oomycetes",
  formulation:      "Emulsifiable Concentrate",
  company: "Adama",
  color:            "#0891b2",
  apvma:            "63373/140421",
  labelPdf:         "Source labels/Adama_Sphinx_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/SPHINX.pdf",
  signalHeading:    "Caution",
  category:         "Fungicides",

  // ── Classification ────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Downy Mildew", "Late Blight", "Early Blight", "Anthracnose", "Gummy Stem Blight", "Alternaria Leaf Spot", "Septoria Leaf Spot", "Purple Blotch", "Leaf Blight"],
    timing: ["Preventative", "Before disease is evident"]
  },

  // ── Use situations ────────────────────────────────────────────
  crops: [

    {
      crop: "Cucurbits — Downy Mildew",
      cropList: ["Cucurbits"],
      weeds: [
        {
          weed: "Downy Mildew (Pseudoperonospora cubensis)",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "360",
          rateMax: "360",
          unit: "mL/ha",
          note: "Apply plus mancozeb (1.5 kg/ha of Mancozeb 800 or 1.6 kg/ha of Mancozeb 750 DF) or plus Polyram at 2.2 kg/ha. Maintain a regular protectant spray programme. Apply when conditions favour disease development but before the disease is evident. Apply two consecutive sprays 7–10 days apart, then change to a fungicide from another chemical group. Add a non-ionic surfactant at label rate. Ensure thorough coverage including undersides of leaves. DO NOT apply more than 4 sprays per crop. Note: In some states, Polyram can only be used on cucumbers and not other cucurbits. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Cucurbits — Anthracnose, Gummy Stem Blight, Alternaria Leaf Spot, Septoria Spot (QLD & NT only)",
      cropList: ["Cucurbits"],
      weeds: [
        {
          weed: "Anthracnose (Colletotrichum spp.), Gummy Stem Blight (Didymella bryoniae), Alternaria Leaf Spot (Alternaria spp.), Septoria Spot (Septoria spp.)",
          pestList: ["Anthracnose", "Gummy Stem Blight", "Alternaria Leaf Spot", "Septoria Spot"],
          states: ["QLD", "NT"],
          rate: "360",
          rateMax: "360",
          unit: "mL/ha",
          note: "Apply plus mancozeb (1.5 kg/ha of Mancozeb 800 or 1.6 kg/ha of Mancozeb 750 DF) or plus Polyram at 2.2 kg/ha. Same application method as Downy Mildew. QLD and NT only. DO NOT apply more than 4 sprays per crop. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Grapevines",
      cropList: ["Grapevines"],
      weeds: [
        {
          weed: "Downy Mildew (Plasmopara viticola)",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "36",
          rateMax: "36",
          unit: "mL/100L",
          note: "Dilute spraying: 36 mL/100L plus mancozeb (120 g/100L of Mancozeb 800 or 160 g/100L of Mancozeb 750 DF) or plus Polyram at 150–200 g/100L. For concentrate spraying refer to Application section on label. DO NOT use in crops intended for drying. Apply at 7–14 day intervals when humid or wet conditions favour infection but before disease is evident. Max 3 consecutive sprays before changing to another fungicide. DO NOT use rates greater than 180 mL/100L (5X). DO NOT apply in volumes less than 250 L/ha. Add a non-ionic wetting agent. DO NOT apply more than 6 sprays per season. DO NOT use a tank mix with Polyram on vines in ACT or NT. WHP: 4 weeks."
        }
      ]
    },

    {
      crop: "Lettuce (Head Varieties Only)",
      cropList: ["Lettuce"],
      weeds: [
        {
          weed: "Downy Mildew (Bremia lactucae), Anthracnose (Marssonina panattoniana), Septoria Leaf Spot (Septoria spp.)",
          pestList: ["Downy Mildew", "Anthracnose", "Septoria Leaf Spot"],
          states: ["All"],
          rate: "360",
          rateMax: "360",
          unit: "mL/ha",
          note: "Apply plus mancozeb (1.5 kg/ha of Mancozeb 800 or 1.6 kg/ha of Mancozeb 750 DF) or plus Polyram at 2.2 kg/ha. Maintain a regular protectant spray programme. Apply when conditions favour disease development but before the disease is evident. Apply two consecutive sprays 7–10 days apart, then change to a fungicide from another chemical group. Apply in 250–500 L water/ha. Add a non-ionic surfactant at label rates. DO NOT apply more than 4 sprays per crop. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Oilseed Poppies",
      cropList: ["Oilseed Poppies"],
      weeds: [
        {
          weed: "Downy Mildew (Peronospora arborescens)",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "360",
          rateMax: "360",
          unit: "mL/ha",
          note: "Apply plus mancozeb (1.5 kg/ha of Mancozeb 800). Maintain a protective spray programme at early run-up stage of crop growth. Apply when conditions favour disease development during the late run-up to hook stage. Re-apply 10 days later if required. Apply in 250–500 L water/ha. Add a non-ionic surfactant at the label rate. DO NOT apply later than early flowering stage. DO NOT apply more than 2 sprays per crop. WHP: 6 weeks."
        }
      ]
    },

    {
      crop: "Onions — Downy Mildew, Leaf Blight",
      cropList: ["Onions"],
      weeds: [
        {
          weed: "Downy Mildew (Peronospora destructor), Leaf Blight",
          pestList: ["Downy Mildew", "Leaf Blight"],
          states: ["All"],
          rate: "360",
          rateMax: "360",
          unit: "mL/ha",
          note: "Apply plus mancozeb (1.5 kg/ha of Mancozeb 800 or 1.6 kg/ha of Mancozeb 750 DF). Maintain a regular protectant spray programme. Apply when conditions favour disease development but before the disease is evident. Apply two consecutive sprays 7–14 days apart, then change to a fungicide from another chemical group. Apply in 250–500 L water/ha. Add a non-ionic surfactant at the label rate. DO NOT apply more than 4 sprays per crop. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Onions — Purple Blotch (QLD & NT only)",
      cropList: ["Onions"],
      weeds: [
        {
          weed: "Purple Blotch (Alternaria porri)",
          pestList: ["Purple Blotch"],
          states: ["QLD", "NT"],
          rate: "360",
          rateMax: "360",
          unit: "mL/ha",
          note: "Apply plus mancozeb (1.5 kg/ha of Mancozeb 800 or 1.6 kg/ha of Mancozeb 750 DF). QLD and NT only. Same application method as Downy Mildew. DO NOT apply more than 4 sprays per crop. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Late Blight (Phytophthora infestans), Early Blight (Alternaria solani)",
          pestList: ["Late Blight", "Early Blight"],
          states: ["All"],
          rate: "360",
          rateMax: "360",
          unit: "mL/ha",
          note: "Apply plus mancozeb (1.5 kg/ha of Mancozeb 800 or 1.6 kg/ha of Mancozeb 750 DF) or plus Polyram at 1.7–2.5 kg/ha. Maintain a regular protectant spray programme. Apply on a protectant schedule at 7–10 day intervals when conditions favour disease development but before the disease is evident. Add a non-ionic surfactant at the label rate. Apply in 250–500 L water/ha. DO NOT apply more than 4 sprays per crop. WHP: 14 days."
        }
      ]
    }

  ],

  // ── Restraints ────────────────────────────────────────────────
  restraints: [
    "DO NOT apply by aircraft."
  ],

  // ── Withholding ───────────────────────────────────────────────
  withholding: {
    harvest: "Cucurbits, Onions: 7 days. Lettuce (head varieties only), Potatoes: 14 days. Grapevines: 4 weeks. Oilseed Poppies: 6 weeks.",
    grazing: "Not specified"
  },

  // ── Compatibility ─────────────────────────────────────────────
  compatibility: "Must always be used in conjunction with mancozeb or Polyram DF Fungicide Spray (protectant fungicides). DO NOT use a tank mix with Polyram on vines in ACT or NT. In some states, Polyram can only be used on cucumbers and not other cucurbits.",

  // ── Surfactant ────────────────────────────────────────────────
  surfactant: "Add a non-ionic surfactant at label rate (e.g. Activator Surfactant, Bond Adjuvant or Chemwet 1000).",

  // ── Sprayer cleanup ───────────────────────────────────────────
  sprayerCleanup: "Triple rinse container for disposal. Add rinsings to spray tank. Ensure thorough mixing and constant agitation to keep the product in suspension."
};
