// ─────────────────────────────────────────────────────────
// VANIVA® 450SC TYMIRIUM™ technology Nematicide — Label Data
// Group N-3 (Nematicide) / Group 7 (SDHI Fungicide)
// Suspension Concentrate (SC)
// Source: Syngenta_Vaniva_Label.pdf
// APVMA Approval No: 91437
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['vaniva'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "VANIVA® 450SC TYMIRIUM™ technology Nematicide",
  company: "Syngenta",

  category:         "Insecticides",
  activeIngredient: "450 g/L Cyclobutrifluram",
  group:            "Group N-3 Nematicide / Group 7 Fungicide",
  modeOfAction:     "Controls nematodes present in the treated soil zone that are active in the soil. Also a Group 7 SDHI fungicide.",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#a3e635",
  apvma:            "91437",
  labelPdf:         "Source labels/Syngenta_Vaniva_Label.pdf",
  sdsPdf:           "SDS Labels/Syngenta_Vaniva_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Nematodes"],
    timing: ["At-plant"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Fruiting Vegetables (other than Cucurbits) ──────────
    {
      crop: "Fruiting Vegetables — Other Than Cucurbits (Field and Protected Cropping)",
      cropList: ["Capsicums", "Chillies", "Eggplant", "Tomatoes"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "550",
          rateMax: "550",
          unit: "mL/ha",
          stage: "Apply as a single trickle/drip application within 3 days of transplanting seedlings or planting seeds",
          note: "Only apply where pre-planting soil counts or paddock history indicate root-knot nematode population is above economic threshold. Drip tape must be positioned no greater than 12 cm from plant. Inject during second quarter of irrigation cycle after soil is partially wetted. Does not provide season-long control. To limit disease resistance, DO NOT use any Group 7 SDHI fungicide for the first two foliar fungicide applications. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Fruiting Vegetables — Cucurbits ─────────────────────
    {
      crop: "Fruiting Vegetables — Cucurbits (Field and Protected Cropping)",
      cropList: ["Cucumbers", "Zucchini", "Rockmelons", "Melons", "Watermelons", "Pumpkins", "Asian Melons"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.)",
          pestList: ["Root Knot Nematode"],
          states: ["All"],
          rate: "550",
          rateMax: "550",
          unit: "mL/ha",
          stage: "Apply as a single trickle/drip application within 3 days of transplanting seedlings or planting seeds",
          note: "Only apply where pre-planting soil counts or paddock history indicate root-knot nematode population is above economic threshold. Drip tape must be positioned no greater than 12 cm from plant. Inject during second quarter of irrigation cycle after soil is partially wetted. Does not provide season-long control. To limit disease resistance, DO NOT use any Group 7 SDHI fungicide for the first two foliar fungicide applications. WHP: Not required when used as directed."
        }
      ]
    },

  ],  // end crops array

  // ── Agronomic fields ──────────────────────────────────────
  restraints: [
    "DO NOT apply more than one application per crop.",
    "DO NOT apply to dry soil.",
    "DO NOT apply to waterlogged soils.",
    "DO NOT apply via flood irrigation or overhead irrigation systems.",
    "DO NOT apply in tank mixture with other products including fertilisers.",
    "DO NOT apply if heavy rains or storms are forecast within 3 days.",
    "DO NOT irrigate to the point of field runoff for at least 3 days after application.",
    "DO NOT apply when soil temperature does not allow root-knot nematode activity, generally below 8.5°C.",
    "Very toxic to aquatic life — DO NOT contaminate wetlands or watercourses."
  ],

  compatibility: {
    compatible:   [],
    incompatible: ["All products", "Fertilisers"],
    notes:        ["VANIVA should NOT be mixed with any other products including fertilisers during application."]
  },

  withholding: {
    harvest: "Fruiting Vegetables, Cucurbits: Not required when used as directed.",
    grazing: "Not specified."
  },

  plantBack: {
    "Cereals, Pulses, Oil Seed Crops": "15 months",
    "All Other Crops": "None"
  },

  surfactant:     "Not required.",
  sprayerCleanup: "Triple-rinse containers before disposal. Add rinsings to treatment tank."

};
