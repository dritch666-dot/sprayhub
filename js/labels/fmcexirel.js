// ─────────────────────────────────────────────────────────
// FMC Exirel® Insecticide — Label Data
// Group 28 (Anthranilic Diamide) | Suspo-emulsion
// Source: fmc_exirel_insecticide_label.pdf
// APVMA Approval No: 64103
// FMC Australasia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['fmcexirel'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "FMC Exirel® Insecticide",
  company: "FMC",

  category:         "Insecticides",
  activeIngredient: "100 g/L Cyantraniliprole",
  group:            "Group 28 (Anthranilic Diamide)",
  modeOfAction:     "Ryanodine receptor modulator",
  formulation:      "Suspo-emulsion (SE)",
  color:            "#1e40af",
  apvma:            "64103",
  labelPdf:         "Source labels/fmc_exirel_insecticide_label.pdf",
  sdsPdf:           "SDS Labels/fmc_exirel_insecticide_sds.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Caterpillars", "Aphids", "Thrips", "Whitefly", "Weevils", "Helicoverpa"],
    timing: ["Curative"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Canola ──────────────────────────────────────────────
    {
      crop: "Canola",
      cropList: ["Canola"],
      weeds: [
        {
          weed: "Diamondback Moth (Plutella xylostella)",
          pestList: ["Diamondback Moth"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Target 1st-3rd instar larvae when they reach the economic spray threshold",
          note: "150 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha). Target before larvae become entrenched in pods. A desiccant can be applied prior to harvest. Max 1 application per season. WHP: 21 days harvest, 14 days grazing. ESI: 2 days."
        },
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Target 1st-3rd instar larvae when they reach the economic spray threshold",
          note: "150 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha). Target before larvae become entrenched in pods. A desiccant can be applied prior to harvest. Max 1 application per season. WHP: 21 days harvest, 14 days grazing. ESI: 2 days."
        },
        {
          weed: "Grey Cabbage Aphid (Brevicoryne brassicae) — Suppression Only",
          pestList: ["Grey Cabbage Aphid"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Apply when aphids first appear before a build up of pest numbers",
          note: "SUPPRESSION ONLY — not a salvage option. 150 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha). Max 1 application per season. Further treatments should use alternative mode of action insecticides. WHP: 21 days harvest, 14 days grazing. ESI: 2 days."
        },
        {
          weed: "Turnip Aphid (Lipaphis erysimi) — Suppression Only",
          pestList: ["Turnip Aphid"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Apply when aphids first appear before a build up of pest numbers",
          note: "SUPPRESSION ONLY — not a salvage option. 150 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha). Max 1 application per season. Further treatments should use alternative mode of action insecticides. WHP: 21 days harvest, 14 days grazing. ESI: 2 days."
        }
      ]
    },

    // ── Cotton ──────────────────────────────────────────────
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Silverleaf Whitefly (Bemisia tabaci B biotype)",
          pestList: ["Silverleaf Whitefly"],
          states: ["All"],
          rate: "600",
          rateMax: "600",
          unit: "mL/ha",
          stage: "Target early developing populations",
          note: "600 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha). Primarily active on the early nymph stage. Max 2 applications per season. Further treatments should use alternative mode of action insecticides. WHP: 14 days harvest. Do not graze."
        },
        {
          weed: "Cotton Aphid (Aphis gossypii) — Suppression Only",
          pestList: ["Cotton Aphid"],
          states: ["All"],
          rate: "600",
          rateMax: "600",
          unit: "mL/ha",
          stage: "Target early developing populations",
          note: "SUPPRESSION ONLY. 600 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha). Max 2 applications per season. Further treatments should use alternative mode of action insecticides. WHP: 14 days harvest. Do not graze."
        },
        {
          weed: "Cotton Bollworm (Helicoverpa armigera)",
          pestList: ["Cotton Bollworm"],
          states: ["All"],
          rate: "600",
          rateMax: "600",
          unit: "mL/ha",
          stage: "Target eggs and hatchling to small larvae (2nd instar) when they reach the economic spray threshold",
          note: "600 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha). Target before larvae become entrenched in hidden feeding sites such as squares, flowers or bolls. Max 2 applications per season. Further treatments should use alternative mode of action insecticides. WHP: 14 days harvest. Do not graze."
        },
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["All"],
          rate: "600",
          rateMax: "600",
          unit: "mL/ha",
          stage: "Target eggs and hatchling to small larvae (2nd instar) when they reach the economic spray threshold",
          note: "600 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha). Target before larvae become entrenched in hidden feeding sites such as squares, flowers or bolls. Max 2 applications per season. Further treatments should use alternative mode of action insecticides. WHP: 14 days harvest. Do not graze."
        }
      ]
    },

    // ── Forage Brassicas ────────────────────────────────────
    {
      crop: "Forage Brassicas",
      cropList: ["Forage Brassicas"],
      weeds: [
        {
          weed: "Cabbage White Butterfly (Pieris rapae)",
          pestList: ["Cabbage White Butterfly"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Apply when insects or damage first appear before a build up of pest numbers",
          note: "150 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha) or non-ionic surfactant. Regularly scout crops. Entrenched larvae may not be controlled. Max 2 applications per season. WHP: 14 days grazing."
        },
        {
          weed: "Centre Grub (Hellula hydralis)",
          pestList: ["Centre Grub"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Apply when insects or damage first appear before a build up of pest numbers",
          note: "150 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha) or non-ionic surfactant. Regularly scout crops. Entrenched larvae may not be controlled. Max 2 applications per season. WHP: 14 days grazing."
        },
        {
          weed: "Diamondback Moth (Plutella xylostella)",
          pestList: ["Diamondback Moth"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Apply when insects or damage first appear before a build up of pest numbers",
          note: "150 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha) or non-ionic surfactant. Regularly scout crops. Entrenched larvae may not be controlled. Max 2 applications per season. WHP: 14 days grazing."
        },
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Apply when insects or damage first appear before a build up of pest numbers",
          note: "150 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha) or non-ionic surfactant. Regularly scout crops. Entrenched larvae may not be controlled. Max 2 applications per season. WHP: 14 days grazing."
        },
        {
          weed: "Soybean Looper (Thysanoplusia orichalcea)",
          pestList: ["Soybean Looper"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Apply when insects or damage first appear before a build up of pest numbers",
          note: "150 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha) or non-ionic surfactant. Regularly scout crops. Entrenched larvae may not be controlled. Max 2 applications per season. WHP: 14 days grazing."
        },
        {
          weed: "Grey Cabbage Aphid (Brevicoryne brassicae) — Suppression Only",
          pestList: ["Grey Cabbage Aphid"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Apply when aphids first appear before a build up of pest numbers",
          note: "SUPPRESSION ONLY — not a salvage option. 150 mL/ha + ethylated seed oil at 0.5% v/v (max 1 L/ha) or non-ionic surfactant. Max 2 applications per season. Further treatments should use alternative mode of action insecticides. WHP: 14 days grazing."
        }
      ]
    },

    // ── Citrus ──────────────────────────────────────────────
    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
        {
          weed: "Kelly's Citrus Thrip (Pezothrips kellyanus)",
          pestList: ["Kelly's Citrus Thrip"],
          states: ["All"],
          rate: "75",
          rateMax: "75",
          unit: "mL/100L",
          stage: "Monitor from flowering onwards; apply after flowering once local pest thresholds are reached",
          note: "Dilute spraying: 75 mL/100L. DO NOT apply more than 3 L/ha. DO NOT add surfactant/wetting agent. Apply after flowering. Where thrip pressure is moderate to high, apply a second application no less than 14 days after the first and prior to calyx closure. Max 2 applications per season. WHP: Nil harvest. Do not graze."
        },
        {
          weed: "Light Brown Apple Moth (Epiphyas postvittana)",
          pestList: ["Light Brown Apple Moth"],
          states: ["All"],
          rate: "75",
          rateMax: "75",
          unit: "mL/100L",
          stage: "Monitor from flowering onwards; apply after flowering once local pest thresholds are reached",
          note: "Dilute spraying: 75 mL/100L. DO NOT apply more than 3 L/ha. DO NOT add surfactant/wetting agent. Apply after flowering. A single application may be suitable where pest pressure is low. Max 2 applications per season. WHP: Nil harvest. Do not graze."
        },
        {
          weed: "Fuller's Rose Weevil (Asynonychus cervinus)",
          pestList: ["Fuller's Rose Weevil"],
          states: ["All"],
          rate: "75",
          rateMax: "75",
          unit: "mL/100L",
          stage: "Monitor for weevil emergence; time at least one application prior to egg lay (late summer through autumn)",
          note: "Dilute spraying: 75 mL/100L. DO NOT apply more than 3 L/ha. DO NOT add surfactant/wetting agent. Continue monitoring after spraying. DO NOT retreat within 14 days. Use in conjunction with other weevil control measures. DO NOT use for trunk band spraying. Max 2 applications per season. WHP: Nil harvest. Do not graze."
        }
      ]
    }
  ],

  // ── Withholding ────────────────────────────────────────────
  withholding: {
    harvest: "Citrus: Nil. Cotton: 14 days. Canola: 21 days.",
    grazing: "Canola and Forage Brassicas: 14 days. Citrus: Do not graze. Cotton: Do not graze."
  },

  // ── Export ──────────────────────────────────────────────────
  export: {
    esi: "2 days",
    note: "Suitable MRLs or import tolerances may not be established in some countries. Consult exporter or FMC before applying to export crops."
  },

  // ── Restraints ─────────────────────────────────────────────
  restraints: [
    "DO NOT apply if heavy rain or storms are forecast within 3 days (Canola, Cotton, Forage brassicas).",
    "DO NOT apply if heavy dew is present on crops, or rainfall is expected within 2 hours of application.",
    "DO NOT irrigate to the point of runoff for at least 3 days after application.",
    "DO NOT apply to citrus until AFTER flowering.",
    "Highly toxic to bees — DO NOT spray where bees are foraging."
  ]
};
