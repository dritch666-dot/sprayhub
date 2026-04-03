// ─────────────────────────────────────────────────────────
// Salibro® Reklemel® active Nematicide — Label Data
// Group N-UN (Sulfonamide) | Suspension Concentrate (SC)
// Source: Corteva_Salibro_Reklemel_Nematicide_Label.pdf
// APVMA Approval No: 89013
// Corteva Agriscience Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['salibro'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Salibro® Reklemel® active Nematicide",
  company: "Corteva",

  category:         "Insecticides",
  activeIngredient: "500 g/L Fluazaindolizine",
  group:            "Group N-UN Nematicide",
  modeOfAction:     "Contact action on nematodes in soil pore water — not systemic in plants by soil application. Intrinsic sensitivity differs, with plant parasitic nematodes being of higher sensitivity than other soil nematode groups.",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#34d399",
  apvma:            "89013",
  labelPdf:         "Source labels/Corteva_Salibro_Reklemel_Nematicide_Label.pdf",
  sdsPdf:           "SDS Labels/Corteva_Salibro_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Nematodes"],
    timing: ["Pre-plant", "At-plant", "Post-plant"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Cucurbits — At Establishment (Single Application) ────
    {
      crop: "Cucurbits — At Establishment (Drip/Trickle Irrigation or Soil Incorporated)",
      cropList: ["Bitter Melons", "Cantaloupes", "Chokos", "Cucumbers", "Gherkins", "Gourds", "Marrows", "Melons", "Pumpkins", "Rockmelons", "Squash", "Watermelons", "Zucchini"],
      weeds: [
        {
          weed: "Root knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "4",
          rateMax: "4",
          unit: "L/ha",
          stage: "Apply up to 3 days before planting to 1 day after planting via drip/trickle irrigation, or soil applied and incorporated by irrigation or mechanical means up to 3 days before transplanting",
          note: "Apply only to the portion of the field requiring protection. DO NOT apply more than 4 L/ha per year. Field and protected crops. WHP: Nil."
        }
      ]
    },

    // ── Cucurbits — Pre- & Post-Plant Split Application ──────
    {
      crop: "Cucurbits — Pre- & Post-Plant Split (Drip Irrigation)",
      cropList: ["Bitter Melons", "Cantaloupes", "Chokos", "Cucumbers", "Gherkins", "Gourds", "Marrows", "Melons", "Pumpkins", "Rockmelons", "Squash", "Watermelons", "Zucchini"],
      weeds: [
        {
          weed: "Root knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "2",
          rateMax: "2",
          unit: "L/ha",
          stage: "Apply 2 L/ha up to 3 days before planting to 1 day after planting, then second application of 2 L/ha at 14–28 days after transplanting for extended control",
          note: "Split application: 2 L/ha + 2 L/ha = 4 L/ha total. DO NOT apply more than 4 L/ha per year. Field and protected crops. WHP: Nil."
        }
      ]
    },

    // ── Cucurbits — Post-Plant Top-Up ────────────────────────
    {
      crop: "Cucurbits — Post-Plant Top-Up (Drip, Following Prior Nematicide)",
      cropList: ["Bitter Melons", "Cantaloupes", "Chokos", "Cucumbers", "Gherkins", "Gourds", "Marrows", "Melons", "Pumpkins", "Rockmelons", "Squash", "Watermelons", "Zucchini"],
      weeds: [
        {
          weed: "Root knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "2",
          rateMax: "4",
          unit: "L/ha",
          stage: "Post-plant drip following a pre-plant or at-plant application of another effective nematicide",
          note: "Use the low rate where prior nematicide has provided effective control and extended residual control ('top-up'). Use the higher rate where nematode pressure is high. DO NOT apply more than 4 L/ha per year. WHP: Nil."
        }
      ]
    },

    // ── Fruiting Vegetables — At Establishment (Single) ──────
    {
      crop: "Fruiting Vegetables — At Establishment (Drip/Trickle Irrigation or Soil Incorporated)",
      cropList: ["Bush Tomatoes", "Capsicums", "Cherry Tomatoes", "Chillies", "Eggplant", "Ground Cherries", "Okra", "Sunberries", "Tomatillos", "Tomatoes"],
      weeds: [
        {
          weed: "Root knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "4",
          rateMax: "4",
          unit: "L/ha",
          stage: "Apply up to 3 days before planting to 1 day after planting via drip/trickle irrigation, or soil applied and incorporated by irrigation or mechanical means up to 3 days before transplanting",
          note: "Apply only to the portion of the field requiring protection. DO NOT apply more than 4 L/ha per year. Field and protected crops. WHP: Nil."
        }
      ]
    },

    // ── Fruiting Vegetables — Pre- & Post-Plant Split ────────
    {
      crop: "Fruiting Vegetables — Pre- & Post-Plant Split (Drip Irrigation)",
      cropList: ["Bush Tomatoes", "Capsicums", "Cherry Tomatoes", "Chillies", "Eggplant", "Ground Cherries", "Okra", "Sunberries", "Tomatillos", "Tomatoes"],
      weeds: [
        {
          weed: "Root knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "2",
          rateMax: "2",
          unit: "L/ha",
          stage: "Apply 2 L/ha up to 3 days before planting to 1 day after planting, then second application of 2 L/ha at 14–28 days after transplanting for extended control",
          note: "Split application: 2 L/ha + 2 L/ha = 4 L/ha total. DO NOT apply more than 4 L/ha per year. Field and protected crops. WHP: Nil."
        }
      ]
    },

    // ── Fruiting Vegetables — Post-Plant Top-Up ──────────────
    {
      crop: "Fruiting Vegetables — Post-Plant Top-Up (Drip, Following Prior Nematicide)",
      cropList: ["Bush Tomatoes", "Capsicums", "Cherry Tomatoes", "Chillies", "Eggplant", "Ground Cherries", "Okra", "Sunberries", "Tomatillos", "Tomatoes"],
      weeds: [
        {
          weed: "Root knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "2",
          rateMax: "4",
          unit: "L/ha",
          stage: "Post-plant drip following a pre-plant or at-plant application of another effective nematicide",
          note: "Use the low rate where prior nematicide has provided effective control and extended residual control ('top-up'). Use the higher rate where nematode pressure is high. DO NOT apply more than 4 L/ha per year. WHP: Nil."
        }
      ]
    },

    // ── Root and Tuber Vegetables — Pre-Plant ────────────────
    {
      crop: "Root and Tuber Vegetables — Pre-Plant (Incorporated or In-Furrow)",
      cropList: ["Arrowroot", "Beetroot", "Carrots", "Cassava", "Celeriac", "Galangal", "Ginseng", "Horseradish", "Parsnips", "Potatoes", "Radishes", "Swedes", "Taro", "Turnips", "Yams"],
      weeds: [
        {
          weed: "Root knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "4",
          rateMax: "4",
          unit: "L/ha",
          stage: "Pre-plant incorporated or in-furrow soil treatment — apply up to 3 days before planting",
          note: "Refer to the Application section for detailed instructions. DO NOT apply more than 4 L/ha per year. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Sweet Potato — At Establishment (Single) ─────────────
    {
      crop: "Sweet Potato — At Establishment (Drip/Trickle Irrigation or Soil Incorporated)",
      cropList: ["Sweet Potatoes"],
      weeds: [
        {
          weed: "Root knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "4",
          rateMax: "4",
          unit: "L/ha",
          stage: "Apply 3 days before planting to 3 days after planting via drip/trickle irrigation, or soil applied and incorporated by irrigation or mechanical means up to 3 days before transplanting",
          note: "DO NOT apply to sweet potatoes later than 21 days after transplanting. DO NOT apply more than 4 L/ha per year. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Sweet Potato — Pre- & Post-Plant Split ───────────────
    {
      crop: "Sweet Potato — Pre- & Post-Plant Split (Drip Irrigation)",
      cropList: ["Sweet Potatoes"],
      weeds: [
        {
          weed: "Root knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "2",
          rateMax: "2",
          unit: "L/ha",
          stage: "Apply 2 L/ha 3 days before planting to 3 days after planting, then second application of 2 L/ha at 14–21 days after transplanting for extended control",
          note: "Split application: 2 L/ha + 2 L/ha = 4 L/ha total. DO NOT apply to sweet potatoes later than 21 days after transplanting. DO NOT apply more than 4 L/ha per year. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Sweet Potato — Post-Plant Top-Up ─────────────────────
    {
      crop: "Sweet Potato — Post-Plant Top-Up (Drip, Following Prior Nematicide)",
      cropList: ["Sweet Potatoes"],
      weeds: [
        {
          weed: "Root knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "2",
          rateMax: "4",
          unit: "L/ha",
          stage: "Post-plant drip up to 21 days after transplanting, following a pre-plant or at-plant application of another effective nematicide",
          note: "Use the low rate where prior nematicide has provided effective control and extended residual control ('top-up'). Use the higher rate where nematode pressure is high. DO NOT apply to sweet potatoes later than 21 days after transplanting. DO NOT apply more than 4 L/ha per year. WHP: Not required when used as directed."
        }
      ]
    },

  ],  // end crops array

  // ── Agronomic fields ──────────────────────────────────────
  restraints: [
    "DO NOT use in hydroponic systems.",
    "DO NOT directly soak or drench bare transplant roots during the planting process.",
    "DO NOT apply if heavy rains or storms are forecast within 3 days.",
    "DO NOT irrigate to the point of water run-off from the treatment area for at least 3 days after application.",
    "DO NOT apply to sweet potatoes later than 21 days after transplanting.",
    "DO NOT apply by a vertical sprayer.",
    "DO NOT apply by aircraft.",
    "DO NOT apply more than 4 L/ha per year.",
    "Apply only to the portion of the field/greenhouse requiring protection from nematode infestation — calculate treated area accordingly."
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Physically compatible with most commonly used fungicide and insecticide products. Perform a jar test to confirm compatibility before tank mixing. Recommended tank-mix order: water soluble bags, dry flowables/WDGs, wettable powders, SC (e.g. Salibro), water soluble concentrates, oil-based SCs, ECs, adjuvants/surfactants, soluble fertilisers, drift retardants."]
  },

  withholding: {
    harvest: "Cucurbits, Fruiting vegetables: Nil. Root and Tuber vegetables: Not required when used as directed.",
    grazing: "Not specified."
  },

  surfactant:     "Not required.",
  sprayerCleanup: "Ensure spray equipment is clean and free of previous pesticide deposits before application. DO NOT allow spray mix to sit overnight. Use mechanical or hydraulic agitation — DO NOT use air agitation."

};
