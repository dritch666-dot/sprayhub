// ─────────────────────────────────────────────────────────
// ADAMA NIMITZ® 480 EC NEMATICIDE — Label Data
// Group UN Nematicide (Fluensulfone)
// Source: ADAMA_Nimitz480EC_Label.pdf
// APVMA Approval No: 66678/110170
// ADAMA Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['nimitz'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Nimitz® 480 EC Nematicide",

  category:         "Insecticides",
  activeIngredient: "480 g/L Fluensulfone",
  group:            "Group UN Nematicide",
  modeOfAction:     "Nematicide — controls nematodes active in the soil at time of application. Pre-plant soil treatment; does not provide season-long control. Applied by broadcast, banded spray or drip irrigation (fruiting vegetables only) with mechanical incorporation to 15–20 cm depth.",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#6b3a2a",
  apvma:            "66678/110170",
  company: "Adama",
  labelPdf:         "Source labels/ADAMA_Nimitz480EC_Label.pdf",
  sdsPdf:           "SDS Labels/ADAMA_Nimitz480EC_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Root-knot Nematode", "Root Lesion Nematode"],
    timing: ["Pre-plant"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Table 1: Fruiting Vegetables (transplanted) — Root-knot Nematode ──
    {
      crop: "Fruiting Vegetables (transplanted) — Root-knot Nematode",
      cropList: ["Cucurbits", "Tomatoes", "Capsicum", "Chilli", "Eggplant", "Okra"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.)",
          pestList: ["Root-Knot Nematode", "Meloidogyne"],
          states: ["All"],
          rate: "4",
          rateMax: "8",
          unit: "L/ha",
          stage: "Apply minimum 7 days before transplanting. Transplanted crops only — not for direct seeded crops.",
          note: "4–8 L/ha. Use low rate in less susceptible crops and/or low nematode pressure; high rate in more susceptible crops and/or moderate–high pressure. Apply as broadcast spray, banded spray or drip irrigation. Mechanically incorporate to 15–20 cm depth on day of application. Seedlings must have min 2 true leaves at planting. Irrigate within 3–5 days as per Table 6 on label. Max 1 application per crop, max 8 L/ha per year. No WHP required when used as directed."
        }
      ]
    },

    // ── Table 2: Carrots — Root-knot Nematode ──
    {
      crop: "Carrots — Root-knot Nematode",
      cropList: ["Carrots"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.)",
          pestList: ["Root-Knot Nematode", "Meloidogyne"],
          states: ["All"],
          rate: "4",
          rateMax: "8",
          unit: "L/ha",
          stage: "Apply minimum 7 days prior to sowing",
          note: "4–8 L/ha. Use low rate under low nematode pressure; high rate under moderate–high pressure. Apply as broadcast or banded spray — do NOT apply via drip irrigation. Mechanically incorporate to 15–20 cm on day of application. Irrigate to field capacity immediately after planting to 15–20 cm depth. Max 1 application per crop, max 8 L/ha per year. No WHP required when used as directed."
        }
      ]
    },

    // ── Table 2: Potatoes — Root-knot Nematode ──
    {
      crop: "Potatoes — Root-knot Nematode",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.)",
          pestList: ["Root-Knot Nematode", "Meloidogyne"],
          states: ["All"],
          rate: "4",
          rateMax: "8",
          unit: "L/ha",
          stage: "Apply minimum 7 days prior to sowing",
          note: "4–8 L/ha. Use low rate under low nematode pressure; high rate under moderate–high pressure. Apply as broadcast or banded spray — do NOT apply via drip irrigation. Mechanically incorporate to 15–20 cm on day of application. Irrigate to field capacity immediately after planting to 15–20 cm depth. Max 1 application per crop, max 8 L/ha per year. No WHP required when used as directed."
        }
      ]
    },

    // ── Table 2: Sweet Potatoes — Root-knot Nematode ──
    {
      crop: "Sweet Potatoes — Root-knot Nematode",
      cropList: ["Sweet Potatoes"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.)",
          pestList: ["Root-Knot Nematode", "Meloidogyne"],
          states: ["All"],
          rate: "4",
          rateMax: "8",
          unit: "L/ha",
          stage: "Apply minimum 7 days prior to planting vine cuttings (transplanted crop only)",
          note: "4–8 L/ha. Use low rate under low nematode pressure; high rate under moderate–high pressure. Transplanted crops only — vine cuttings 25–45 cm at planting. Apply as broadcast or banded spray — do NOT apply via drip irrigation. Mechanically incorporate to 15–20 cm on day of application. Irrigate to field capacity immediately after planting to 15–20 cm depth. Max 1 application per crop, max 8 L/ha per year. No WHP required when used as directed."
        }
      ]
    },

    // ── Table 3: Sugarcane — Root-knot Nematode & Root Lesion Nematode ──
    {
      crop: "Sugarcane — Root-knot & Root Lesion Nematode",
      cropList: ["Sugarcane"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.) and Root lesion nematode (Pratylenchus zeae)",
          pestList: ["Root-Knot Nematode", "Meloidogyne", "Root Lesion Nematode", "Pratylenchus Zeae"],
          states: ["QLD", "NSW", "NT", "WA"],
          rate: "4",
          rateMax: "4",
          unit: "L/ha",
          stage: "Apply as spray into the furrow at planting",
          note: "4 L/ha. QLD, NSW, NT, WA only. Apply as spray into furrow at planting using coarse spray nozzle in min 100 L/ha, in a band 30–50 cm wide over centre of row immediately prior to soil cover. No irrigation required to incorporate post-planting. Max 1 application per crop. No WHP required when used as directed."
        }
      ]
    }

  ],

  // ── General notes ──────────────────────────────────────────
  restraints: [
    "Do NOT apply by aircraft.",
    "Do NOT apply more than one application per crop and no more than 8 L/ha per year.",
    "Do NOT irrigate to point of runoff within 72 hours of application.",
    "Do NOT apply if heavy rains or storms likely to cause runoff are forecast within 72 hours.",
    "Do NOT apply via flood irrigation or overhead irrigation systems.",
    "Do NOT apply when soil temperature is below 16°C — nematodes are not active and will not absorb the product.",
    "Do NOT plant oats into treated land for 2 years after last application. Other rotational crop restrictions apply (see label Table 4).",
    "When applying to cucurbits, tomatoes, capsicum, chilli, eggplant, okra and sweet potatoes — use only prior to planting transplanted crops, not with direct seeded crops.",
    "Spray application records must be kept for at least 2 years (date, location, rate, crop, weather, equipment details)."
  ],

  // ── Withholding periods ──────────────────────────────────────
  withholding: {
    harvest: "Not required when used as directed.",
    grazing: "Not required when used as directed."
  },

  // ── Compatibility ────────────────────────────────────────────
  compatibility: {
    compatible: [],
    incompatible: [],
    notes: [
      "Do not apply Nimitz in a mixture with other products or fertilisers unless the physical compatibility of the mixture has been confirmed. Contact ADAMA for further information."
    ]
  }

};
