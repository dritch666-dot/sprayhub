// ─────────────────────────────────────────────────────────────────────────────
// MINECTO FORTE INSECTICIDE — Label Data
// Insecticide | Liquid
// Source: Syngenta_Minecto_Forte_Insecticide_Label.pdf
// APVMA Approval No: 87610/127218
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['syngentaminectoforte'] = {
  name:             "Minecto Forte Insecticide",
  company: "Syngenta",

  category:         "Insecticides",
  activeIngredient: "80 g/L Cyantraniliprole + 400 g/L Diafenthiuron",
  group:            "Group 12A and Group 28 Insecticide",
  modeOfAction:     "Combination of ryanodine receptor modulator and thiadiazine; broad-spectrum mite and insect control with high foliage persistence",
  formulation:      "Liquid",
  color:            "#3b1f5e",
  apvma:            "87610",
  labelPdf:         "Source labels/Syngenta_Minecto_Forte_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/MINECTO_FORTE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Insecticide",
    target: ["Whiteflies", "Aphids", "Bollworms", "Budworms", "Mites", "Thrips"],
    timing: ["Post-emergent spray application"]
  },

  crops: [
    {
      crop: "Cucurbits (including cucumber, zucchini, rockmelon, watermelon, pumpkin, Asian melons) Open field only",
      cropList: ["Cucurbits", "Cucumber", "Zucchini", "Rockmelon", "Watermelon", "Pumpkin", "Asian Melons"],
      weeds: [
        { weed: "Silverleaf whitefly (Bemisia tabaci)", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "500", unit: "mL/ha", notes: "Target immature whitefly stages. Addition of AGRAL at 10 mL/100 L or Hasten at 200 mL/100 L may assist control of silverleaf whitefly in cucurbits. This use is subject to a Croplife Australia Insecticide Resistance Management strategy." },
        { weed: "Melon aphid (Aphis gossypii)", pestList: ["Melon Aphid"], states: ["All"], rate: "500", unit: "mL/ha", notes: "Addition of AGRAL at 10 mL/100 L may assist control of melon aphid. This use is subject to Croplife Australia Insecticide Resistance Management strategy." },
        { weed: "Cotton bollworm (Helicoverpa armigera), Native budworm (Helicoverpa punctigera), Cucumber moth (Diaphania indica), Cluster caterpillar (Spodoptera litura)", pestList: ["Cotton Bollworm", "Native Budworm", "Cucumber Moth", "Cluster Caterpillar"], states: ["All"], rate: "500", unit: "mL/ha", notes: "Target sprays against eggs and newly hatched larvae before they become entrenched. Addition of AGRAL at 10 mL/100 L may assist control of these pests in cucurbits. This use is subject to a Resistance Management strategy for Group 28 insecticides." },
        { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "625", unit: "mL/ha", notes: "Addition of Hasten at 200 mL/100 L may assist control of green peach aphid. This use is subject to Croplife Australia Insecticide Resistance Management strategy" },
        { weed: "Two-spotted mite (Tetranychus urticae)", pestList: ["Two-Spotted Mite"], states: ["All"], rate: "750", unit: "mL/ha", notes: "Addition of Hasten at 200 mL/100 L may assist control of two-spotted mite in cucurbits." },
        { weed: "Suppression of: Western flower thrips (Frankliniella occidentalis), Tomato thrips (Frankliniella schultzei), Plague thrips (Thrips imaginis)", pestList: ["Suppression Of: Western Flower Thrips", "Tomato Thrips", "Plague Thrips"], states: ["All"], rate: "750", unit: "mL/ha" }
      ]
    },
    {
      crop: "Fruiting vegetables (including tomatoes, capsicums, eggplant, chillies) Open field only",
      cropList: ["Fruiting Vegetables", "Tomatoes", "Capsicums", "Eggplant", "Chillies"],
      weeds: [
        { weed: "Silverleaf whitefly (Bemisia tabaci)", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "500", unit: "mL/ha", notes: "Target immature whitefly stages. This use is subject to a Croplife Australia Insecticide Resistance Management strategy" },
        { weed: "Cotton bollworm (Helicoverpa armigera), Native budworm (Helicoverpa punctigera), Potato Moth (Phthorimaea operculella), Cluster caterpillar (Spodoptera litura)", pestList: ["Cotton Bollworm", "Native Budworm", "Potato Moth", "Cluster Caterpillar"], states: ["All"], rate: "500", unit: "mL/ha", notes: "Target sprays against eggs and newly hatched larvae before they become entrenched. The use against Helicoverpa spp. is subject to Croplife Australia Insecticide Resistance Management strategy. Refer also to note below regarding Group 28 insecticides." },
        { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "625", unit: "mL/ha", notes: "Addition of Hasten at 200 mL/100 L may assist control of green peach aphid. This use is subject to Croplife Australia Insecticide Resistance Management strategy." },
        { weed: "Two-spotted mite (Tetranychus urticae)", pestList: ["Two-Spotted Mite"], states: ["All"], rate: "750", unit: "mL/ha" }
      ]
    },
    {
      crop: "UNKNOWN",
      cropList: ["UNKNOWN"],
      weeds: [
        { weed: "Suppression of: Western flower thrips (Frankliniella occidentalis), Tomato thrips (Frankliniella schultzei), Plague thrips (Thrips imaginis)", pestList: ["Suppression Of: Western Flower Thrips", "Tomato Thrips", "Plague Thrips"], states: ["All"], rate: "750", unit: "mL/ha", notes: "Addition of Hasten at 200 mL/100 L, SACOA BioPest* Paraffinic Oil at 1000 mL/100 L or AGRAL at 10 mL/100 L may assist suppression of thrips in fruiting vegetables." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by aircraft",
    "DO NOT apply by backpack application",
    "DO NOT use in protected cropping",
    "DO NOT apply if heavy rains forecast within 3 days",
    "DO NOT irrigate to point of runoff for 3 days after application",
    "DO NOT apply consecutive applications of Minecto Forte",
    "DO NOT apply within 28 days of previous Minecto Forte application",
    "DO NOT apply more than 2 applications per crop",
    "Highly toxic to bees - DO NOT apply to flowering crops except between 2 hours before sunset and 8 hours before sunrise",
    "Spray droplets not smaller than MEDIUM spray droplet size category"
  ],

  compatibility: {
    compatible:   ["AGRAL Spray Adjuvant", "Hasten Spray Adjuvant", "SACOA BioPest Paraffinic Oil (fruiting vegetables only, NOT cucurbits)"],
    incompatible: [],
    notes:        ["Caution with Hasten on sensitive crops during drought/heat/high humidity; not all adjuvants recommended"]
  },

  withholding: {
    harvest: "Cucurbits 1 day; fruiting vegetables 4 days",
    grazing: "Not applicable"
  },

  surfactant:     "Wetting agents may improve control under less than ideal conditions - use AGRAL or Hasten per recommendations",
  sprayerCleanup: "Ground application only; ensure thorough coverage of crop canopy with medium spray quality"
};
