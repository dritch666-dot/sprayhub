// js/labels/versys.js
// ─────────────────────────────────────────────────────────
// VERSYS Insecticide — Label Data
// Group 9D Insecticide | Dispersion Concentrate (DC)
// Source: BASF_Versys_Label.pdf
// APVMA Approval No: 82738
// BASF Australia Ltd
// ─────────────────────────────────────────────────────────
productDatabase['versys'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Versys Insecticide",
  company: "Syngenta",

  category:         "Insecticides",
  activeIngredient: "100 g/L Afidopyropen",
  group:            "Group 9D Insecticide",
  modeOfAction:     "Chordotonal organ modulator — inhibits insect behaviour, disrupts orientation and ability to feed",
  formulation:      "Dispersion Concentrate (DC)",
  color:            "#059669",
  apvma:            "82738",
  labelPdf:         "Source labels/BASF_Versys_Label.pdf",
  sdsPdf:           "SDS Labels/Versys®Insecticide SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Aphids", "Whitefly", "Mealybug"],
    timing: ["Foliar"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    // ── VEGETABLES — Aphids @ 100 mL/ha, WHP 7 days ──────────────
    {
      crop: "Sweet Corn, Rhubarb, Artichokes",
      cropList: ["Artichokes", "Rhubarb", "Sweet Corn"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Currant lettuce aphid (Nasonovia ribis-nigri), Cotton/Melon aphid (Aphis gossypii), Corn aphid (Rhopalosiphum maydis)",
          pestList: ["Cabbage Aphid", "Corn Aphid", "Cotton Aphid", "Currant Lettuce Aphid", "Green Peach Aphid", "Melon Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "When local threshold levels are reached",
          note: "WHP: 7 days. Disrupts insect behaviour/feeding — slow knockdown. Residual control out to 21 days. Re-apply after 14 days if necessary. Max 2 sprays before rotating to alternative chemistry. Max 4 applications per crop. Apply in sufficient water to ensure thorough coverage. Addition of an adjuvant may aid knockdown."
        }
      ]
    },

    // ── VEGETABLES — Aphids @ 100 mL/ha, WHP 1 day ──────────────
    {
      crop: "Brassica Vegetables (Broccoli, Broccolini, Brussels Sprouts, Cabbage, Cauliflower, Kohlrabi)",
      cropList: ["Brassicas", "Broccoli", "Brussels Sprouts", "Cabbage", "Cauliflower", "Kohlrabi"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Currant lettuce aphid (Nasonovia ribis-nigri), Cotton/Melon aphid (Aphis gossypii), Corn aphid (Rhopalosiphum maydis)",
          pestList: ["Cabbage Aphid", "Corn Aphid", "Cotton Aphid", "Currant Lettuce Aphid", "Green Peach Aphid", "Melon Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "When local threshold levels are reached",
          note: "WHP: 1 day. Disrupts insect behaviour/feeding — slow knockdown. Residual control out to 21 days. Re-apply after 14 days if necessary. Max 2 sprays before rotating to alternative chemistry. Max 4 applications per crop."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci Biotype B) [Suppression only]",
          pestList: ["Silverleaf Whitefly"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "When local thresholds are reached",
          note: "WHP: 1 day. Suppression only. Add Hasten at 0.2% v/v. Apply a single spray before rotating to alternative chemistry. Max 2 applications for whitefly per crop. If also using for whitefly, do not apply more than 2 additional applications at 100 mL/ha rate for aphids. Best activity against nymph stage."
        }
      ]
    },

    {
      crop: "Celery",
      cropList: ["Celery"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Currant lettuce aphid (Nasonovia ribis-nigri), Cotton/Melon aphid (Aphis gossypii), Corn aphid (Rhopalosiphum maydis)",
          pestList: ["Cabbage Aphid", "Corn Aphid", "Cotton Aphid", "Currant Lettuce Aphid", "Green Peach Aphid", "Melon Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "When local threshold levels are reached",
          note: "WHP: 1 day. Disrupts insect behaviour/feeding — slow knockdown. Residual control out to 21 days. Re-apply after 14 days if necessary. Max 2 sprays before rotating. Max 4 applications per crop."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci Biotype B) [Suppression only]",
          pestList: ["Silverleaf Whitefly"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "When local thresholds are reached",
          note: "WHP: 1 day. Suppression only. Add Hasten at 0.2% v/v. Apply a single spray before rotating. Max 2 applications for whitefly per crop."
        }
      ]
    },

    {
      crop: "Cucurbits (Field and Protected)",
      cropList: ["Cucumbers", "Cucurbits", "Melons", "Pumpkin", "Squash", "Watermelon", "Zucchini"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Currant lettuce aphid (Nasonovia ribis-nigri), Cotton/Melon aphid (Aphis gossypii), Corn aphid (Rhopalosiphum maydis)",
          pestList: ["Cabbage Aphid", "Corn Aphid", "Cotton Aphid", "Currant Lettuce Aphid", "Green Peach Aphid", "Melon Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "When local threshold levels are reached",
          note: "WHP: 1 day. Field and protected cropping. Disrupts insect behaviour/feeding — slow knockdown. Residual control out to 21 days. Re-apply after 14 days if necessary. Max 2 sprays before rotating. Max 4 applications per crop."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci Biotype B) [Suppression only]",
          pestList: ["Silverleaf Whitefly"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "When local thresholds are reached",
          note: "WHP: 1 day. Suppression only. Add Hasten at 0.2% v/v. Apply a single spray before rotating. Max 2 applications for whitefly per crop."
        }
      ]
    },

    {
      crop: "Fruiting Vegetables excl. Cucurbits — Capsicum, Chilli, Eggplant, Okra, Tomato (Field and Protected)",
      cropList: ["Capsicum", "Chilli", "Eggplant", "Okra", "Tomatoes"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Currant lettuce aphid (Nasonovia ribis-nigri), Cotton/Melon aphid (Aphis gossypii), Corn aphid (Rhopalosiphum maydis)",
          pestList: ["Cabbage Aphid", "Corn Aphid", "Cotton Aphid", "Currant Lettuce Aphid", "Green Peach Aphid", "Melon Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "When local threshold levels are reached",
          note: "WHP: 1 day. Field and protected cropping. Disrupts insect behaviour/feeding — slow knockdown. Residual control out to 21 days. Re-apply after 14 days if necessary. Max 2 sprays before rotating. Max 4 applications per crop."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci Biotype B) [Suppression only]",
          pestList: ["Silverleaf Whitefly"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "When local thresholds are reached",
          note: "WHP: 1 day. Suppression only. Add Hasten at 0.2% v/v. Apply a single spray before rotating. Max 2 applications for whitefly per crop."
        }
      ]
    },

    {
      crop: "Strawberry (Field and Protected)",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Currant lettuce aphid (Nasonovia ribis-nigri), Cotton/Melon aphid (Aphis gossypii), Corn aphid (Rhopalosiphum maydis)",
          pestList: ["Cabbage Aphid", "Corn Aphid", "Cotton Aphid", "Currant Lettuce Aphid", "Green Peach Aphid", "Melon Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "When local threshold levels are reached",
          note: "WHP: 1 day. Field and protected cropping. Disrupts insect behaviour/feeding — slow knockdown. Residual control out to 21 days. Re-apply after 14 days if necessary. Max 2 sprays before rotating. Max 4 applications per crop."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci Biotype B) [Suppression only]",
          pestList: ["Silverleaf Whitefly"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "When local thresholds are reached",
          note: "WHP: 1 day. Suppression only. Add Hasten at 0.2% v/v. Apply a single spray before rotating. Max 2 applications for whitefly per crop."
        }
      ]
    },

    {
      crop: "Leafy Vegetables and Brassica Leafy Vegetables (Chard/Silver Beet, Cress, Spinach, Lettuce, Bok Choy, Chinese Cabbage, Choy Sum, Gai Lan, Kale, Leafy Mustard, Pak Choy, Rocquette)",
      cropList: ["Bok Choy", "Chinese Cabbage", "Kale", "Lettuce", "Pak Choy", "Silver Beet", "Spinach"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Currant lettuce aphid (Nasonovia ribis-nigri), Cotton/Melon aphid (Aphis gossypii), Corn aphid (Rhopalosiphum maydis)",
          pestList: ["Cabbage Aphid", "Corn Aphid", "Cotton Aphid", "Currant Lettuce Aphid", "Green Peach Aphid", "Melon Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "When local threshold levels are reached",
          note: "WHP: 1 day. Disrupts insect behaviour/feeding — slow knockdown. Residual control out to 21 days. Re-apply after 14 days if necessary. Max 2 sprays before rotating. Max 4 applications per crop."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci Biotype B) [Suppression only]",
          pestList: ["Silverleaf Whitefly"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "When local thresholds are reached",
          note: "WHP: 1 day. Suppression only. Add Hasten at 0.2% v/v. Apply a single spray before rotating. Max 2 applications for whitefly per crop."
        }
      ]
    },

    {
      crop: "Parsley",
      cropList: ["Parsley"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Currant lettuce aphid (Nasonovia ribis-nigri), Cotton/Melon aphid (Aphis gossypii), Corn aphid (Rhopalosiphum maydis)",
          pestList: ["Cabbage Aphid", "Corn Aphid", "Cotton Aphid", "Currant Lettuce Aphid", "Green Peach Aphid", "Melon Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "When local threshold levels are reached",
          note: "WHP: 1 day. Disrupts insect behaviour/feeding — slow knockdown. Residual control out to 21 days. Re-apply after 14 days if necessary. Max 2 sprays before rotating. Max 4 applications per crop."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci Biotype B) [Suppression only]",
          pestList: ["Silverleaf Whitefly"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "When local thresholds are reached",
          note: "WHP: 1 day. Suppression only. Add Hasten at 0.2% v/v. Apply a single spray before rotating. Max 2 applications for whitefly per crop."
        }
      ]
    },

    // ── COTTON — 50 mL/ha ─────────────────────────────────────────
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Currant lettuce aphid (Nasonovia ribis-nigri), Cotton/Melon aphid (Aphis gossypii)",
          pestList: ["Cabbage Aphid", "Cotton Aphid", "Currant Lettuce Aphid", "Green Peach Aphid", "Melon Aphid"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "mL/ha",
          stage: "When local threshold levels are reached",
          note: "WHP: 7 days. Disrupts insect behaviour/feeding — slow knockdown. Residual control out to 21 days. Re-apply after 14 days if necessary. Max 2 sprays before rotating. Max 4 applications per crop. DO NOT feed cotton fodder, cotton stubble or cotton trash to livestock."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci Biotype B) [Suppression only]",
          pestList: ["Silverleaf Whitefly"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "When local thresholds are reached",
          note: "WHP: 7 days. Suppression only. Add Hasten at 0.2% v/v. Apply a single spray before rotating. Max 2 applications for whitefly per crop. If also using for whitefly, do not apply more than 2 additional applications at 50 mL/ha rate."
        }
      ]
    },

    // ── POTATO, SWEET POTATO, GINGER — 100 mL/ha, WHP 7 days ─────
    {
      crop: "Potato, Sweet Potato, Ginger",
      cropList: ["Ginger", "Potatoes", "Sweet Potatoes"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Currant lettuce aphid (Nasonovia ribis-nigri), Cotton/Melon aphid (Aphis gossypii)",
          pestList: ["Cabbage Aphid", "Cotton Aphid", "Currant Lettuce Aphid", "Green Peach Aphid", "Melon Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "When local threshold levels are reached",
          note: "WHP: 7 days. Disrupts insect behaviour/feeding — slow knockdown. Residual control out to 21 days. Re-apply after 14 days if necessary. Max 2 sprays before rotating. Max 4 applications per crop."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci Biotype B) [Suppression only]",
          pestList: ["Silverleaf Whitefly"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "When local thresholds are reached",
          note: "WHP: 7 days. Suppression only. Add Hasten at 0.2% v/v. Apply a single spray before rotating. Max 2 applications for whitefly per crop."
        }
      ]
    },

    // ── ORNAMENTALS — mL/100L rates ───────────────────────────────
    {
      crop: "Ornamentals and Nursery Stock (Non-food) — Seedlings, Tubes, Plugs, Potted Colour, Trees, Shrubs, Foliage, Cut Flowers, Palms, Grasses, Non-bearing Fruiting Plants (Field and Protected)",
      cropList: ["Ornamentals", "Nursery Stock", "Seedlings", "Cut Flowers", "Trees", "Shrubs", "Foliage", "Palms", "Grasses"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Currant lettuce aphid (Nasonovia ribis-nigri), Cotton/Melon aphid (Aphis gossypii), Rose aphid (Macrosiphum rosae)",
          pestList: ["Cabbage Aphid", "Cotton Aphid", "Currant Lettuce Aphid", "Green Peach Aphid", "Melon Aphid", "Rose Aphid"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "When local threshold levels are reached",
          note: "No WHP required (non-food). Disrupts insect behaviour/feeding — slow knockdown. Residual control out to 21 days. Re-apply after 14 days if necessary. Max 2 sprays before rotating. Max 4 applications per crop."
        },
        {
          weed: "Greenhouse whitefly (Trialeurodes spp.), Silverleaf whitefly (Bemisia tabaci Biotype B), Citrus mealybug (Planococcus spp.), Long-tailed mealybug (Pseudococcus spp.)",
          pestList: ["Citrus Mealybug", "Greenhouse Whitefly", "Long-tailed Mealybug", "Silverleaf Whitefly"],
          states: ["All"],
          rate: "35",
          rateMax: "50",
          unit: "mL/100L",
          stage: "When local threshold levels are reached",
          note: "No WHP required (non-food). Apply in sufficient water to ensure thorough coverage. Addition of an adjuvant may aid knockdown and overall control."
        }
      ]
    },

    // ── CEREALS — 50 mL/ha ────────────────────────────────────────
    {
      crop: "Barley, Wheat",
      cropList: ["Barley", "Wheat"],
      weeds: [
        {
          weed: "Russian wheat aphid (Diuraphis noxia), Oat aphid (Rhopalosiphum padi), Corn aphid (Rhopalosiphum maydis), Aphids (Aphis spp.)",
          pestList: ["Corn Aphid", "Oat Aphid", "Russian Wheat Aphid"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "mL/ha",
          stage: "When threshold levels are reached",
          note: "No WHP when used as directed. Add 0.2% Hasten or other MSO, or 0.1% Agral. Good residual control of aphids. Re-apply after 14 days if necessary. Max 2 sprays before rotating. Apply by ground or air. Ground: min 100 L/ha water. Aerial: min 50 L/ha water. Entrenched aphids at base of plant may not be adequately controlled. DO NOT apply after BBCH 71 (watery ripe). DO NOT graze forage for 7 days."
        }
      ]
    },

    // ── CANOLA — 50 mL/ha ─────────────────────────────────────────
    {
      crop: "Canola",
      cropList: ["Canola"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Cabbage aphid (Brevicoryne brassicae), Aphids (Aphis spp.)",
          pestList: ["Cabbage Aphid", "Green Peach Aphid"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "mL/ha",
          stage: "When threshold levels are reached",
          note: "No WHP when used as directed. Add 0.2% Hasten or other MSO. Good residual control of aphids. Re-apply after 14 days if necessary. Max 2 sprays before rotating. DO NOT apply after end of flowering (BBCH 69). Dense aphid colonies (clusters) around growing tips/flowering spikes may be difficult to cover — for best results, apply at budding/early flowering before heavy infestations. DO NOT graze forage for 7 days."
        }
      ]
    },

    // ── GRAPE — 25 mL/100L ────────────────────────────────────────
    {
      crop: "Grape — Wine and Table",
      cropList: ["Grapes", "Table Grapes", "Wine Grapes"],
      weeds: [
        {
          weed: "Long-tailed mealybug (Pseudococcus longispinus) [Suppression only]",
          pestList: ["Long-tailed Mealybug"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/100L",
          stage: "At early flowering or when conditions favour crawler emergence; target 2nd and 3rd instar",
          note: "No WHP required when used as directed. Suppression only. Disrupts insect behaviour/feeding — slow knockdown of mealybugs. Most active against 2nd and 3rd instar long-tailed mealybugs — target application when these life stages are present. Reduction of 2nd/3rd instar results in overall lifecycle interference. Max 2 sprays before rotating. Max 3 applications per crop. DO NOT apply after growth stage EL-32 (bunch closure). Apply in sufficient water to point of runoff. Addition of a non-ionic wetter may aid coverage (e.g. Agral)."
        }
      ]
    },

    // ── BANANA — 100 mL/ha ────────────────────────────────────────
    {
      crop: "Banana",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Banana aphid (Pentalonia nigronervosa)",
          pestList: ["Banana Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "When threshold levels are reached",
          note: "WHP: TBC. Max 2 sprays before rotating. Max 4 applications per crop. Apply in sufficient water to ensure thorough coverage to point of runoff. Re-apply after 14 days if necessary."
        }
      ]
    }
  ],

  // ── Restraints ────────────────────────────────────────────────
  restraints: [
    "DO NOT apply if heavy rains or storms are forecast within 3 days.",
    "DO NOT irrigate to the point of run-off from the treatment area for at least 3 days after application.",
    "DO NOT feed cotton fodder, cotton stubble or cotton trash to livestock.",
    "DO NOT use the product in protected cropping situations unless otherwise specified.",
    "DO NOT apply unless the wind speed is between 3 and 20 km/h at the application site.",
    "DO NOT apply if there are hazardous surface temperature inversion conditions present.",
    "DO NOT apply by boom sprayer with spray droplets smaller than a COARSE category.",
    "DO NOT apply while bees are actively foraging. Risk to bees is reduced by spraying in early morning and late evening.",
    "DO NOT enter treated areas until spray has dried."
  ],

  // ── Withholding ───────────────────────────────────────────────
  withholding: {
    harvest: "Brassica vegetables, celery, cucurbits, fruiting vegetables (other than cucurbits), leafy vegetables (incl. brassica leafy vegetables), strawberry, carrots, banana, parsley: 1 day. Cotton, ginger, potato, sweet potato, sweet corn, artichoke, rhubarb: 7 days. Grape (wine and table): not required when used as directed. Wheat, barley, canola: not required when used as directed.",
    grazing: "Sweet corn: 7 days. Wheat, barley, canola forage: 7 days."
  },

  // ── Compatibility ─────────────────────────────────────────────
  compatibility: {
    compatible: [
      "Herbicides: Amicide Advance 700 (SC), Crucial (SC), Estercide Xtra 680 (EC), Frequency (SE), Intervix (SC), Jaguar (EC), Maxentis EC, Polo 570 LVE (EC), RoundUp (SL), RoundUp Ultra Max (SC), RoundUp PL (WG), Triathlon (EC), Velocity (EC), Weedmaster DST (SC)",
      "Fungicides: Acrobat SC, Aviator Xpro (EC), Belanty (SC), Bumper 625 EC, Cabrio (EC), Collis (SC), Danisaraba (SC), Elatus Ace (EC), Polyram DF, Vivando (SC), Bravo Weather Stik (SC), Switch (WG), Dithane Rainshield (WG), Amistar Xtra (SC), Tri-Base Blue (L)",
      "Insecticides: Fastac CS, Talstar 100 EC, Durivo (SC), Lorsban 500 SC, Proclaim (WG), Belt 480 EC, Steward EC, Karate Zeon (CS), Success Neo (SC), Delegate (WG), Movento 240 SC, Actara (WG), Altacor (WG), Coragen (SC)",
      "Fertilizers: Copper Sulphate pentahydrate, Flexi N, Hi-Boron",
      "Adjuvants: Hasten Spray Adjuvant, Agral Spray Adjuvant, Agridex Non-ionic Surfactant"
    ],
    incompatible: [
      "Aero (WG)",
      "Filan (WG)",
      "Opera (SE)",
      "Opus (SC)",
      "Orius 430 SC",
      "Pristine (WG)",
      "Zampro (SC)"
    ],
    notes: [
      "Partially compatible with Miravis Star (SC), Prosaro 420 SC, Champ DP (may form slight sedimentation — requires constant agitation).",
      "Versys is a dispersion concentrate (DC). When tank mixing, add WDG/WP/DF/SG products first, then flowable SC, then Versys (DC), then EC/ME, then SL, then adjuvants, then fertilizers.",
      "All mixtures should be tested prior to mixing commercial quantities. Physical compatibility does not guarantee biological compatibility."
    ]
  },

  // ── Surfactant ────────────────────────────────────────────────
  surfactant: "Always add Hasten Spray Adjuvant at 0.2% v/v when applying for suppression of silverleaf whitefly. For cereals and canola, add 0.2% Hasten or other MSO, or 0.1% Agral. Addition of an adjuvant may aid in speed of knockdown and overall control for other uses.",

  // ── Sprayer cleanup ───────────────────────────────────────────
  sprayerCleanup: "Triple rinse containers before disposal. Add rinsings to spray tank. Do not dispose of undiluted chemicals on site. Store in closed, original container in a dry, cool, well-ventilated area out of direct sunlight."
};
