// ─────────────────────────────────────────────────────────
// BENEVIA® INSECTICIDE — Label Data
// Group 28 (Diamide) | Oil Dispersion (OD)
// Source: FMC_Benevia_Label.pdf
// APVMA Approval No: 66684
// FMC Australasia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['benevia'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Benevia® Insecticide",
  company: "Valent",

  category:         "Insecticides",
  activeIngredient: "100 g/L cyantraniliprole",
  group:            "Group 28 (Diamide)",
  modeOfAction:     "Ryanodine receptor activator — disrupts calcium regulation in muscle cells",
  formulation:      "Oil Dispersion (OD)",
  color:            "#0d9488",
  apvma:            "66684",
  labelPdf:         "Source labels/FMC_Benevia_Label.pdf",
  sdsPdf:           "SDS Labels/BENEVIA_INSECTICIDE.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Silverleaf Whitefly", "Cotton Bollworm", "Native Budworm", "Tomato Leaf Miner",
             "Green Peach Aphid", "Melon Aphid", "Strawberry Aphid", "Onion Thrips",
             "Western Flower Thrips", "Plague Thrips", "Cluster Caterpillar",
             "Light Brown Apple Moth", "Potato Tuber Moth"],
    timing: ["Pre-threshold", "Early instar"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Bulb Vegetables — Onion Thrips (Chives, Fennel, Garlic, Leeks, Onions, Shallots, Spring Onions)",
      cropList: ["Bulb Vegetables","Chives","Fennel","Garlic","Leeks","Onions","Shallots","Spring Onions"],
      weeds: [
        {
          weed: "Onion thrips (Thrips tabaci) [Suppression only]",
          pestList: ["Onion Thrips"],
          states: ["All"],
          rate: "750",
          rateMax: "750",
          unit: "mL/ha",
          stage: "Newly developing infestation; thrips nymphs stage",
          note: "Add non-ionic surfactant (refer Surfactant/Wetting agent section). WHP: 7 days. Max 3 applications per season; apply on a 7-day interval. Benevia is more active on thrips nymphs than adults. Apply sequentially. Use in conjunction with other mode of action thripicides."
        }
      ]
    },

    {
      crop: "Fruiting Vegetables (excl. Cucurbits) — Sucking & Chewing Pests (Capsicum, Eggplant, Peppers, Tomato)",
      cropList: ["Fruiting Vegetables","Capsicum","Eggplant","Peppers","Tomato"],
      weeds: [
        {
          weed: "Silverleaf whitefly (Bemisia tabaci), Cotton bollworm (Helicoverpa armigera), Native budworm (Helicoverpa punctigera), Tomato leaf miner (Tuta absoluta)",
          pestList: ["Silverleaf Whitefly","Cotton Bollworm","Native Budworm","Tomato Leaf Miner"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/ha",
          stage: "Eggs and early instar stages of newly developing infestation",
          note: "Add ethylated seed oil (e.g. Hasten at 200 mL/100L, max 1 L/ha) OR non-ionic surfactant (refer Surfactant/Wetting agent section). Alternatively: 50 mL/100L dilute + non-ionic surfactant. WHP: 1 day. Max 2 applications per season. Apply on 7–10 day interval. DO NOT tank mix with Amistar or azoxystrobin-based compounds on Tomato or Cucurbit. Primarily active on early nymph stages of Silverleaf whitefly; apply sequentially."
        },
        {
          weed: "Green peach aphid (Myzus persicae), Tomato thrips (Frankliniella schultzei), Western flower thrips (Frankliniella occidentalis) [Suppression only]",
          pestList: ["Green Peach Aphid","Tomato Thrips","Western Flower Thrips"],
          states: ["All"],
          rate: "750",
          rateMax: "750",
          unit: "mL/ha",
          stage: "Newly developing infestation; nymphs stage",
          note: "Add ethylated seed oil OR non-ionic surfactant. Alternatively: 75 mL/100L dilute + non-ionic surfactant. WHP: 1 day (same crop). Benevia more active on thrips nymphs than adults. Apply sequentially."
        }
      ]
    },

    {
      crop: "Fruiting Vegetables — Cucurbits (Cucumbers, Melons, Pumpkin, Squash, Zucchini)",
      cropList: ["Fruiting Vegetables","Cucumbers","Melons","Pumpkin","Squash","Zucchini"],
      weeds: [
        {
          weed: "Melon aphid (Aphis gossypii), Silverleaf whitefly (Bemisia tabaci), Cotton bollworm (Helicoverpa armigera), Cucumber moth (Diaphania indica), Native budworm (Helicoverpa punctigera)",
          pestList: ["Melon Aphid","Silverleaf Whitefly","Cotton Bollworm","Cucumber Moth","Native Budworm"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/ha",
          stage: "Eggs and early instar stages of newly developing infestation",
          note: "Add ethylated seed oil OR non-ionic surfactant. Alternatively: 50 mL/100L dilute + non-ionic surfactant. Max 2 applications per season. Apply on 7–10 day interval. DO NOT tank mix with Amistar or azoxystrobin-based compounds. Apply sequentially."
        },
        {
          weed: "Western flower thrips (Frankliniella occidentalis) [Suppression only]",
          pestList: ["Western Flower Thrips"],
          states: ["All"],
          rate: "750",
          rateMax: "750",
          unit: "mL/ha",
          stage: "Newly developing infestation; nymphs stage",
          note: "Add ethylated seed oil OR non-ionic surfactant. Alternatively: 75 mL/100L dilute + non-ionic surfactant. Benevia more active on nymphs than adults. Apply sequentially."
        }
      ]
    },

    {
      crop: "Potatoes — Sucking & Chewing Pests",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Silverleaf whitefly (Bemisia tabaci), Cotton bollworm (Helicoverpa armigera), Native budworm (Helicoverpa punctigera), Potato tuber moth (Phthorimaea operculella)",
          pestList: ["Silverleaf Whitefly","Cotton Bollworm","Native Budworm","Potato Tuber Moth"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/ha",
          stage: "Eggs and early instar stages of newly developing infestation",
          note: "Add ethylated seed oil OR non-ionic surfactant. WHP: 7 days. Max 3 applications per season; no more than 2 consecutive applications recommended. Apply on 7–10 day interval. Primarily active on early nymph stages of Silverleaf whitefly. Apply sequentially."
        },
        {
          weed: "Green peach aphid (Myzus persicae), Plague thrips (Thrips imaginis) [Suppression only]",
          pestList: ["Green Peach Aphid","Plague Thrips"],
          states: ["All"],
          rate: "750",
          rateMax: "750",
          unit: "mL/ha",
          stage: "Newly developing infestation; nymphs stage",
          note: "Add ethylated seed oil OR non-ionic surfactant. WHP: 7 days. Benevia more active on thrips nymphs than adults. Apply sequentially."
        }
      ]
    },

    {
      crop: "Strawberries (Field) — Chewing & Sucking Pests",
      cropList: ["Strawberries (Field)"],
      weeds: [
        {
          weed: "Cluster caterpillar (Spodoptera litura), Cotton bollworm (Helicoverpa armigera), Light brown apple moth (Epiphysas postvittana), Native budworm (Helicoverpa punctigera)",
          pestList: ["Cluster Caterpillar","Cotton Bollworm","Light Brown Apple Moth","Native Budworm"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/ha",
          stage: "Eggs and early instar stages of newly developing infestation",
          note: "Add non-ionic surfactant (refer Surfactant/Wetting agent section). WHP: 1 day. Max 2 applications per season. Apply on 7–10 day interval. DO NOT tank mix with captan-based compounds, Flint (trifloxystrobin-based) or Omite (propargite-based) on Strawberries. Apply sequentially."
        },
        {
          weed: "Green peach aphid (Myzus persicae), Melon aphid (Aphis gossypii), Strawberry aphid (Chaetosiphon fragaefolii), Onion thrips (Thrips tabaci), Plague thrips (Thrips imaginis), Western flower thrips (Frankliniella occidentalis) [Suppression only]",
          pestList: ["Green Peach Aphid","Melon Aphid","Strawberry Aphid","Onion Thrips","Plague Thrips","Western Flower Thrips"],
          states: ["All"],
          rate: "750",
          rateMax: "750",
          unit: "mL/ha",
          stage: "Newly developing infestation; nymphs stage",
          note: "Add non-ionic surfactant (refer Surfactant/Wetting agent section). WHP: 1 day. Max 2 applications per season. Benevia more active on thrips nymphs than adults. Apply sequentially."
        }
      ]
    }

  ,

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER84805: Fruiting vegetables — Tomato Potato Psyllid ──
{
  crop: "Fruiting vegetables — Tomato Potato Psyllid (PER84805)",
  cropList: ["Fruiting vegetables", "Peppers", "Tomatoes", "Eggplants", "Potatoes", "Sweet potatoes"],
  permitNumber: "PER84805",
  weeds: [
    {
      weed: "Tomato Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Hemiptera Pests", "Tomato Potato Psyllid"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "500",
      rateMax: "500",
      unit: "mL/ha",
      stage: "Upon discovery, early nymph stages predominate",
      note: "PERMIT PER84805 (exp. 31/12/2027). Apply immediately upon discovery. Max 2 applications per crop, minimum 7-10 days apart. Toxic to bees. WHP: Fruiting vegetables 1 day, Potatoes/Sweet potatoes 14 days."
    }
  ]
},

// ── PER92766: Nursery stock — Azalea lace bug, Whitefly, Aphids, Psyllid, Caterpillars, Thrips ──
{
  crop: "Nursery stock — Azalea lace bug & others (PER92766)",
  cropList: ["Nursery stock", "Seedlings", "Potted colour", "Trees", "Shrubs", "Foliage plants", "Palms", "Grasses", "Fruiting plants (non-bearing)", "Cut flowers", "Ornamentals"],
  permitNumber: "PER92766",
  weeds: [
    {
      weed: "Azalea lace bug (Stephanitis pyrioides)",
      pestList: ["Hemiptera Pests", "Lace bugs"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "500",
      rateMax: "750",
      unit: "mL/ha",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 500-750 mL/ha + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Silverleaf whitefly (Bemisia tabaci)",
      pestList: ["Hemiptera Pests", "Whiteflies"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "500",
      rateMax: "750",
      unit: "mL/ha",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 500-750 mL/ha + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Melon aphid (Aphis gossypii)",
      pestList: ["Hemiptera Pests", "Aphids"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "500",
      rateMax: "750",
      unit: "mL/ha",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 500-750 mL/ha + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Green peach aphid (Myzus persicae)",
      pestList: ["Hemiptera Pests", "Aphids"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "500",
      rateMax: "750",
      unit: "mL/ha",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 500-750 mL/ha + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Strawberry aphid (Chaetosiphon fragaefolli)",
      pestList: ["Hemiptera Pests", "Aphids"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "500",
      rateMax: "750",
      unit: "mL/ha",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 500-750 mL/ha + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Tomato potato psyllid (Bactericera cockerelli)",
      pestList: ["Hemiptera Pests", "Tomato Potato Psyllid"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "50",
      rateMax: "75",
      unit: "mL/100L",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 50-75 mL/100L + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Helicoverpa spp.",
      pestList: ["Lepidopteran Pests", "Helicoverpa"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "50",
      rateMax: "75",
      unit: "mL/100L",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 50-75 mL/100L + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Tomato leaf miner (Tuta absoluta)",
      pestList: ["Lepidopteran Pests", "Leaf miners"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "50",
      rateMax: "75",
      unit: "mL/100L",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 50-75 mL/100L + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Cucumber moth (Diaphania indica)",
      pestList: ["Lepidopteran Pests", "Moths"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "50",
      rateMax: "75",
      unit: "mL/100L",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 50-75 mL/100L + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Potato tuber moth (Phthorimaea operculella)",
      pestList: ["Lepidopteran Pests", "Moths"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "50",
      rateMax: "75",
      unit: "mL/100L",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 50-75 mL/100L + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Cluster caterpillar (Spodoptera litura)",
      pestList: ["Lepidopteran Pests", "Caterpillars"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "50",
      rateMax: "75",
      unit: "mL/100L",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 50-75 mL/100L + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Light brown apple moth (Epiphyas postvittana)",
      pestList: ["Lepidopteran Pests", "Moths"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "50",
      rateMax: "75",
      unit: "mL/100L",
      stage: "Apply to newly developing infestations",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 50-75 mL/100L + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food)."
    },
    {
      weed: "Tomato thrips (Thysanoptera)",
      pestList: ["Thrips", "Thrips species"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "50",
      rateMax: "75",
      unit: "mL/100L",
      stage: "Suppression",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 50-75 mL/100L + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food). Suppression only."
    },
    {
      weed: "Western flower thrips (Franklinella occidentalis)",
      pestList: ["Thrips", "Thrips species"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "50",
      rateMax: "75",
      unit: "mL/100L",
      stage: "Suppression",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 50-75 mL/100L + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food). Suppression only."
    },
    {
      weed: "Onion thrips (Thrips tabaci)",
      pestList: ["Thrips", "Thrips species"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "50",
      rateMax: "75",
      unit: "mL/100L",
      stage: "Suppression",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 50-75 mL/100L + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food). Suppression only."
    },
    {
      weed: "Plague thrips (Thrips imagines)",
      pestList: ["Thrips", "Thrips species"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "50",
      rateMax: "75",
      unit: "mL/100L",
      stage: "Suppression",
      note: "PERMIT PER92766 (exp. 31/01/2031). Rate 50-75 mL/100L + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: Not applicable (non-food). Suppression only."
    }
  ]
},

// ── PER93849: Leaf miners in various vegetable crops ──
{
  crop: "Bulb vegetables — Leaf miners (PER93849)",
  cropList: ["Bulb vegetables"],
  permitNumber: "PER93849",
  weeds: [
    {
      weed: "Liriomyza leaf miners (Liriomyza spp., including L. sativae, L. huidobrensis)",
      pestList: ["Leaf miners", "Diptera Pests"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "750",
      rateMax: "750",
      unit: "mL/ha",
      stage: "Apply when leaf miners first appear",
      note: "PERMIT PER93849 (exp. 31/12/2026). Max 3 applications per crop, minimum 7 days apart. WHP: 7 days."
    }
  ]
},

{
  crop: "Fruiting vegetables — Leaf miners (PER93849)",
  cropList: ["Fruiting vegetables", "Cucurbits"],
  permitNumber: "PER93849",
  weeds: [
    {
      weed: "Liriomyza leaf miners (Liriomyza spp., including L. sativae, L. huidobrensis)",
      pestList: ["Leaf miners", "Diptera Pests"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "750",
      rateMax: "750",
      unit: "mL/ha",
      stage: "Apply when leaf miners first appear",
      note: "PERMIT PER93849 (exp. 31/12/2026). Max 2 applications per crop, minimum 7 days apart. WHP: 1 day."
    }
  ]
},

{
  crop: "Potatoes — Leaf miners (PER93849)",
  cropList: ["Potatoes"],
  permitNumber: "PER93849",
  weeds: [
    {
      weed: "Liriomyza leaf miners (Liriomyza spp., including L. sativae, L. huidobrensis)",
      pestList: ["Leaf miners", "Diptera Pests"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "750",
      rateMax: "750",
      unit: "mL/ha",
      stage: "Apply when leaf miners first appear",
      note: "PERMIT PER93849 (exp. 31/12/2026). Max 3 applications per crop, minimum 7 days apart. WHP: 7 days."
    }
  ]
},

// ── PER93850: Celery — Leaf miners ──
{
  crop: "Celery — Leaf miners (PER93850)",
  cropList: ["Celery"],
  permitNumber: "PER93850",
  weeds: [
    {
      weed: "Vegetable leaf miner (Liriomyza sativae)",
      pestList: ["Leaf miners", "Diptera Pests"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "750",
      rateMax: "750",
      unit: "mL/ha",
      stage: "Apply when leaf miners first appear",
      note: "PERMIT PER93850 (exp. 31/12/2026). Max 2 applications per crop, minimum 7 days apart. WHP: 1 day."
    },
    {
      weed: "Pea leaf miner / Serpentine leaf miner (Liriomyza huidobrensis)",
      pestList: ["Leaf miners", "Diptera Pests"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "750",
      rateMax: "750",
      unit: "mL/ha",
      stage: "Apply when leaf miners first appear",
      note: "PERMIT PER93850 (exp. 31/12/2026). Max 2 applications per crop, minimum 7 days apart. WHP: 1 day."
    },
    {
      weed: "American serpentine leaf miner (Liriomyza trifolii)",
      pestList: ["Leaf miners", "Diptera Pests"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "750",
      rateMax: "750",
      unit: "mL/ha",
      stage: "Apply when leaf miners first appear",
      note: "PERMIT PER93850 (exp. 31/12/2026). Max 2 applications per crop, minimum 7 days apart. WHP: 1 day."
    }
  ]
}

],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply if heavy dew is present on crops, if rainfall is expected within 2 hours of application, or if heavy rainfall likely to generate run-off is expected within 48 hours of application.",
    "DO NOT treat plants grown for transplanting.",
    "DO NOT use on container or hydroponic grown crops.",
    "DO NOT use Activator or BS1000 (or equivalents) as it may cause crop phytotoxicity.",
    "DO NOT add a surfactant if mixing with another product which already contains a surfactant or if mixing with a liquid fertiliser.",
    "DO NOT allow bystanders to come into contact with the spray cloud.",
    "DO NOT apply with spray droplets smaller than a MEDIUM droplet size category.",
    "DO NOT apply unless wind speed is between 3 and 20 km/h at application site.",
    "DO NOT store the spray mixture overnight in the spray tank.",
    "DO NOT apply using Ultra Low Volume (ULV) methods.",
    "Fruiting vegetables including cucurbits and Strawberries: max 2 applications per crop per season.",
    "Bulb vegetables and Potatoes: max 3 applications per season; Potatoes: no more than 2 consecutive applications recommended."
  ],

  compatibility: {
    compatible:   ["Most fungicides, liquid fertilisers, herbicides, insecticides and biological control products — jar-test first."],
    incompatible: [
      "Tomato and Cucurbit: DO NOT tank mix Benevia + Amistar (or azoxystrobin-based compounds).",
      "Strawberries: DO NOT tank mix Benevia + captan-based compounds, Flint (trifloxystrobin-based), or Omite (propargite-based).",
      "Activator or BS1000 — phytotoxicity risk."
    ],
    notes: [
      "Spray tank pH must be 8 or below before spraying; adjust with registered acidifying agent if above pH 8.",
      "Jar test before use. Hasten (ethylated seed oil) maximises control of some sucking pests. Hasten may increase risk of leaf staining on capsicums.",
      "Mixing sequence: water-soluble bags, WDG, WP, SC, SL, SE, OD (Benevia), EC, adjuvants, soluble fertilisers, drift retardants."
    ]
  },

  withholding: {
    harvest: "Fruiting vegetables (including cucurbits) and Strawberries: 1 day. Potatoes and Bulb vegetables: 7 days.",
    grazing: "DO NOT graze or cut for stock food."
  },

  surfactant:     "Bulb vegetables and Strawberry: non-ionic surfactant at 15 gai/100L (e.g. Agral at 25 mL/100L). Fruiting vegetables (incl. cucurbits) and Potato: ethylated seed oil (e.g. Hasten at 200 mL/100L, max 1 L/ha) OR non-ionic surfactant at 15 gai/100L (e.g. Agral at 25 mL/100L). Alternatively 50–75 mL/100L dilute + non-ionic surfactant.",
  sprayerCleanup: "Drain spray equipment. Thoroughly rinse sprayer and flush hoses, boom and nozzles with clean water. DO NOT clean near wells, water sources or desirable vegetation."

};
