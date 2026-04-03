// ─────────────────────────────────────────────────────────
// BASF ZAMPRO® FUNGICIDE — Label Data
// Group 45 + 40 Fungicide (Ametoctradin + Dimethomorph)
// Source: BASF_Zampro_Label.pdf
// APVMA Approval No: 63651/126172
// BASF Australia Ltd
// ─────────────────────────────────────────────────────────
productDatabase['zampro'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Zampro® Fungicide",

  category:         "Fungicides",
  activeIngredient: "300 g/L Ametoctradin + 225 g/L Dimethomorph",
  group:            "Group 45 + Group 40 Fungicide",
  modeOfAction:     "Combination of triazolo-pyrimidine (Group 45 — inhibits mitochondrial complex III) and cinnamic acid amide (Group 40 — inhibits cellulose synthase). Protectant for downy mildew control.",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#1e3a5f",
  apvma:            "63651/126172",
  company: "BASF",
  labelPdf:         "Source labels/BASF_Zampro_Label.pdf",
  sdsPdf:           "SDS Labels/BASF_Zampro_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Downy Mildew"],
    timing: ["Preventative", "Protectant"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Grapevines — Downy Mildew (dilute) ──
    {
      crop: "Grapevines — Downy Mildew (dilute spray)",
      cropList: ["Grapevines", "Grapes"],
      weeds: [
        {
          weed: "Downy mildew (Plasmopara viticola)",
          pestList: ["Downy Mildew", "Plasmopara Viticola"],
          states: ["All"],
          rate: "80",
          rateMax: "80",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when humid or wet conditions favour infection, before disease is evident",
          note: "Dilute spraying: 80 mL/100L. Spray to the point of run-off. Do NOT use in crops intended for drying. Max 2 consecutive sprays before rotating to alternative mode of action. Max 2 sprays per season. Do NOT use in equipment requiring greater than 400 mL/100L (5×). Products containing metalaxyl or metalaxyl-M recommended if downy mildew infection may have already occurred. WHP: 4 weeks harvest."
        }
      ]
    },

    // ── Grapevines — Downy Mildew (concentrate) ──
    {
      crop: "Grapevines — Downy Mildew (concentrate spray)",
      cropList: ["Grapevines", "Grapes"],
      weeds: [
        {
          weed: "Downy mildew (Plasmopara viticola)",
          pestList: ["Downy Mildew", "Plasmopara Viticola"],
          states: ["All"],
          rate: "80",
          rateMax: "400",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when humid or wet conditions favour infection, before disease is evident",
          note: "Concentrate spraying: calculate rate from dilute rate (80 mL/100L) × concentration factor. Do NOT exceed 400 mL/100L (5× concentration). Do NOT use in crops intended for drying. Max 2 consecutive sprays before rotating to alternative mode of action. Max 2 sprays per season. Apply the same total amount of product whether dilute or concentrate. WHP: 4 weeks harvest."
        }
      ]
    },

    // ── Bulb Vegetables — Downy Mildew ──
    {
      crop: "Bulb Vegetables — Downy Mildew",
      cropList: ["Onions", "Garlic", "Shallots", "Leeks", "Spring Onions"],
      weeds: [
        {
          weed: "Downy mildew (Peronospora destructor)",
          pestList: ["Downy Mildew", "Peronospora Destructor"],
          states: ["All"],
          rate: "800",
          rateMax: "800",
          unit: "mL/ha",
          stage: "Apply when conditions favour disease development, before disease is evident. 7–14 day intervals.",
          note: "800 mL/ha in 250–500 L water/ha. Add a registered non-ionic adjuvant at label rates. Maintain a regular protectant spray program. Max 2 applications per crop for resistance management. WHP: 7 days harvest."
        }
      ]
    },

    // ── Leafy Vegetables incl. Head Lettuce & Brassica Leafy Veg — Downy Mildew ──
    {
      crop: "Leafy Vegetables, Head Lettuce & Brassica Leafy Veg — Downy Mildew",
      cropList: ["Lettuce", "Brassica Leafy Vegetables", "Spinach", "Silverbeet", "Rocket", "Endive"],
      weeds: [
        {
          weed: "Downy mildew (Hyaloperonospora parasitica, Peronospora farinosa, Bremia lactucae)",
          pestList: ["Downy Mildew", "Hyaloperonospora Parasitica", "Peronospora Farinosa", "Bremia Lactucae"],
          states: ["All"],
          rate: "800",
          rateMax: "800",
          unit: "mL/ha",
          stage: "Apply when conditions favour disease development, before disease is evident. 7–10 day intervals.",
          note: "800 mL/ha in 250–500 L water/ha. Field and protected cropping. Maintain a regular protectant spray program. Use shorter interval when conditions favouring infection create high risk. Max 2 applications per crop for resistance management. WHP: 3 days harvest."
        }
      ]
    },

    // ── Beetroot — Downy Mildew ──
    {
      crop: "Beetroot — Downy Mildew",
      cropList: ["Beetroot"],
      weeds: [
        {
          weed: "Downy mildew (Peronospora spp.)",
          pestList: ["Downy Mildew", "Peronospora"],
          states: ["All"],
          rate: "800",
          rateMax: "800",
          unit: "mL/ha",
          stage: "Apply when conditions favour disease development, before disease is evident",
          note: "800 mL/ha. Maintain a regular protectant spray program. Max 2 applications per crop for resistance management. WHP: 14 days harvest."
        }
      ]
    },

    // ── Cucurbits — Downy Mildew ──
    {
      crop: "Cucurbits — Downy Mildew",
      cropList: ["Cucurbits", "Cucumber", "Zucchini", "Pumpkin", "Melons", "Squash", "Gourds"],
      weeds: [
        {
          weed: "Downy mildew (Pseudoperonospora cubensis)",
          pestList: ["Downy Mildew", "Pseudoperonospora Cubensis"],
          states: ["All"],
          rate: "800",
          rateMax: "800",
          unit: "mL/ha",
          stage: "Apply when conditions favour disease development, before disease is evident. Two consecutive sprays 7–10 days apart, then change to a fungicide from another chemical group.",
          note: "800 mL/ha. Field and protected cropping. Maintain a regular protectant spray program. Use shorter interval when conditions favouring infection create high risk. Max 2 applications per crop for resistance management. WHP: 1 day harvest."
        }
      ]
    },

    // ── Poppies — Downy Mildew ──
    {
      crop: "Poppies — Downy Mildew",
      cropList: ["Poppies"],
      weeds: [
        {
          weed: "Downy mildew (Peronospora meconopsidis)",
          pestList: ["Downy Mildew", "Peronospora Meconopsidis"],
          states: ["All"],
          rate: "800",
          rateMax: "800",
          unit: "mL/ha",
          stage: "Commence spraying early, before main disease infection period. Apply from ground cover crop stage until start of flowering.",
          note: "800 mL/ha in 250–500 L water/ha. Apply when conditions favour disease development (humid or wet). 7–14 day intervals. Max 2 applications per crop for resistance management. WHP: 6 weeks harvest."
        }
      ]
    },

    // ═══ PERMIT USES ═══

    // ── PER89211: Basil (field) — Downy Mildew ──
    {
      crop: "Basil (field grown) — Downy Mildew (PER89211)",
      cropList: ["Basil"],
      permitNumber: "PER89211",
      weeds: [
        {
          weed: "Downy mildew (Peronospora belbahrii)",
          pestList: ["Downy Mildew", "Peronospora Belbahrii"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply as part of a protectant spray program. 7–14 day intervals. Use shorter interval when conditions favour infection.",
          note: "PERMIT PER89211 (exp. 30 Nov 2028). 100 mL/100L (max 1 L/ha). Field grown basil only — do NOT use in protected cropping (glasshouses, greenhouses, plastic tunnels, shade houses). Apply via airblast, airshear or equivalent. Thorough coverage of all foliage and stems essential. Max 3 applications per crop. Max 2 consecutive sprays before rotating to a non-Group 40/45 fungicide. Apply at least the same number of sprays from a different MoA group before returning to Zampro. Do not apply if rainfall expected before spray dries. WHP: 5 days harvest. Do not graze."
        }
      ]
    }

  ],

  // ── General notes ──────────────────────────────────────────
  restraints: [
    "Do NOT apply with aircraft.",
    "Do NOT apply unless wind speed is between 3 and 20 km/h at the application site.",
    "Do NOT apply if hazardous surface temperature inversion conditions are present (most evenings 1–2 hours before sunset until 1–2 hours after sunrise).",
    "Do NOT use in grapevine crops intended for drying.",
    "Do NOT apply more than 2 sprays of Zampro per season (grapevines) or per crop (other uses) — resistance management."
  ],

  // ── Withholding periods ──────────────────────────────────────
  withholding: {
    harvest: "Cucurbits: 1 day. Leafy vegetables/head lettuce/brassica leafy vegetables: 3 days. Bulb vegetables: 7 days. Beetroot: 14 days. Grapes: 4 weeks. Poppies: 6 weeks.",
    grazing: "Not specified."
  },

  // ── Compatibility ────────────────────────────────────────────
  compatibility: {
    compatible: [],
    incompatible: [],
    note: [
      "Zampro (suspension concentrate) is regarded as widely compatible with other agrochemicals. Conduct small-scale mixing tests before use. When tank mixing, refer to all product labels and observe all directions, precautions and limitations."
    ]
  }

};
