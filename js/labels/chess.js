// ─────────────────────────────────────────────────────────
// CHESS® Insecticide — Label Data
// Group 9B Insecticide (Pymetrozine)
// Source: Syngenta_Chess_Label.pdf
// APVMA Approval No: 53311
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['chess'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "CHESS® Insecticide",

  category:         "Insecticides",
  activeIngredient: "500 g/kg Pymetrozine",
  group:            "Group 9B Insecticide",
  modeOfAction:     "Selective anti-feeding insecticide — not a knockdown. Inhibits feeding in aphids and whiteflies; insects may remain alive briefly but further plant damage is prevented. Best results when applied before target populations reach high levels.",
  formulation:      "Water-Dispersible Granule (WG)",
  color:            "#0f172a",
  apvma:            "53311",
  company: "Syngenta",
  labelPdf:         "Source labels/Syngenta_Chess_Label.pdf",
  sdsPdf:           "SDS Labels/Syngenta_Chess_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Aphids", "Whiteflies"],
    timing: ["Foliar"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ═══ VEGETABLE CROPS ═══

    // ── Brassica Vegetables — Aphids ──────────────────────────
    {
      crop: "Brassica Vegetables — Aphids",
      cropList: ["Broccoli", "Brussels Sprouts", "Cabbages", "Cauliflower"],
      weeds: [
        {
          weed: "Cabbage aphid (Brevicoryne brassicae)",
          pestList: ["Cabbage Aphid", "Brevicoryne Brassicae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached and before populations reach high levels",
          note: "Add a suitable non-ionic surfactant at recommended rate. Max 2 applications per crop; min 14-day retreatment interval. DO NOT apply using equipment carried on the back of the user. WHP: 7 days harvest."
        },
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached and before populations reach high levels",
          note: "Add a suitable non-ionic surfactant at recommended rate. Max 2 applications per crop; min 14-day retreatment interval. Subject to CropLife resistance management strategies for green peach aphid. WHP: 7 days harvest."
        }
      ]
    },

    // ── Brassica Vegetables — Whitefly ────────────────────────
    {
      crop: "Brassica Vegetables — Whitefly",
      cropList: ["Broccoli", "Brussels Sprouts", "Cabbages", "Cauliflower"],
      weeds: [
        {
          weed: "Silverleaf whitefly (Bemisia tabaci) — SUPPRESSION ONLY",
          pestList: ["Silverleaf Whitefly", "Bemisia Tabaci"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Target adult whitefly; apply before populations reach high levels",
          note: "SUPPRESSION ONLY. DO NOT apply where whitefly populations predominantly consist of eggs, pupae or sessile nymphs unless mixed with another insecticide active against those stages. CHESS has no direct activity on immobile stages. Add surfactant. Max 2 applications per crop; min 14-day retreatment. WHP: 7 days harvest."
        }
      ]
    },

    // ── Tomatoes, Eggplants and Capsicums ─────────────────────
    {
      crop: "Tomatoes, Eggplants and Capsicums",
      cropList: ["Tomatoes", "Eggplant", "Capsicums"],
      weeds: [
        {
          weed: "Potato aphid (Macrosiphum euphorbiae)",
          pestList: ["Potato Aphid", "Macrosiphum Euphorbiae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Open field and protected cropping. Add a suitable non-ionic surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest."
        },
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Open field and protected cropping. Add surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci) — SUPPRESSION ONLY",
          pestList: ["Silverleaf Whitefly", "Bemisia Tabaci"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Target adult whitefly; apply before populations reach high levels",
          note: "SUPPRESSION ONLY. DO NOT apply where whitefly populations predominantly consist of eggs, pupae or sessile nymphs unless mixed with another insecticide active against those stages. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        },
        {
          weed: "Greenhouse whitefly (Trialeurodes vaporariorum) — SUPPRESSION ONLY",
          pestList: ["Greenhouse Whitefly", "Trialeurodes Vaporariorum"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Target adult whitefly; apply before populations reach high levels",
          note: "SUPPRESSION ONLY. DO NOT apply where whitefly populations predominantly consist of eggs, pupae or sessile nymphs. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        }
      ]
    },

    // ── Sweet Corn ────────────────────────────────────────────
    {
      crop: "Sweet Corn",
      cropList: ["Sweet Corn"],
      weeds: [
        {
          weed: "Corn aphid (Rhopalosiphum maidis)",
          pestList: ["Corn Aphid", "Rhopalosiphum Maidis"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Add a suitable non-ionic surfactant. Max 2 applications per crop; min 14-day retreatment interval. WHP: 14 days harvest."
        }
      ]
    },

    // ── Lettuce ───────────────────────────────────────────────
    {
      crop: "Lettuce",
      cropList: ["Lettuce"],
      weeds: [
        {
          weed: "Brown sowthistle aphid (Uroleucon sonchi)",
          pestList: ["Brown Sowthistle Aphid", "Uroleucon Sonchi"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "All types including open field and protected cropping. Add surfactant. Max 2 applications per crop; min 7-day retreatment interval. DO NOT apply using equipment carried on the back of the user. WHP: 3 days harvest."
        },
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "All types including open field and protected cropping. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        },
        {
          weed: "Currant lettuce aphid (Nasonovia ribisnigri)",
          pestList: ["Currant Lettuce Aphid", "Nasonovia Ribisnigri"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "All types including open field and protected cropping. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci) — SUPPRESSION ONLY",
          pestList: ["Silverleaf Whitefly", "Bemisia Tabaci"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Target adult whitefly; apply before populations reach high levels",
          note: "SUPPRESSION ONLY. DO NOT apply where whitefly populations predominantly consist of eggs, pupae or sessile nymphs. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        }
      ]
    },

    // ── Endive, Chicory, Radicchio ────────────────────────────
    {
      crop: "Endive, Chicory, Radicchio",
      cropList: ["Endive", "Chicory", "Radicchio"],
      weeds: [
        {
          weed: "Currant lettuce aphid (Nasonovia ribisnigri)",
          pestList: ["Currant Lettuce Aphid", "Nasonovia Ribisnigri"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Add surfactant. Max 2 applications per crop; min 7-day retreatment interval. DO NOT apply using equipment carried on the back of the user. WHP: 3 days harvest."
        }
      ]
    },

    // ── Leafy Vegetables ──────────────────────────────────────
    {
      crop: "Leafy Vegetables",
      cropList: ["Spinach", "Silverbeet", "Kale", "Mustard", "Cress", "Chard", "Rocket", "Asian Leafy Greens", "Chinese Cabbage"],
      weeds: [
        {
          weed: "Potato aphid (Macrosiphum euphorbiae)",
          pestList: ["Potato Aphid", "Macrosiphum Euphorbiae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Open field and protected cropping. Add surfactant. Max 2 applications per crop; min 7-day retreatment interval. DO NOT apply using equipment carried on the back of the user. WHP: 3 days harvest."
        },
        {
          weed: "Melon aphid (Aphis gossypii)",
          pestList: ["Melon Aphid", "Aphis Gossypii"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Open field and protected cropping. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        },
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Open field and protected cropping. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        }
      ]
    },

    // ── Cucurbits ─────────────────────────────────────────────
    {
      crop: "Cucurbits",
      cropList: ["Cucumbers", "Melons", "Pumpkins", "Squash", "Zucchini"],
      weeds: [
        {
          weed: "Melon aphid (Aphis gossypii)",
          pestList: ["Melon Aphid", "Aphis Gossypii"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Open field and protected cropping. Add surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest."
        },
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Open field and protected cropping. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        },
        {
          weed: "Potato aphid (Macrosiphum euphorbiae)",
          pestList: ["Potato Aphid", "Macrosiphum Euphorbiae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Open field and protected cropping. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        },
        {
          weed: "Cowpea aphid (Aphis craccivora)",
          pestList: ["Aphids", "Cowpea Aphid", "Aphis Craccivora"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Open field and protected cropping. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci) — SUPPRESSION ONLY",
          pestList: ["Silverleaf Whitefly", "Bemisia Tabaci"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Target adult whitefly; apply before populations reach high levels",
          note: "SUPPRESSION ONLY. DO NOT apply where whitefly populations predominantly consist of eggs, pupae or sessile nymphs. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        },
        {
          weed: "Greenhouse whitefly (Trialeurodes vaporariorum) — SUPPRESSION ONLY",
          pestList: ["Greenhouse Whitefly", "Trialeurodes Vaporariorum"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Target adult whitefly; apply before populations reach high levels",
          note: "SUPPRESSION ONLY. DO NOT apply where whitefly populations predominantly consist of eggs, pupae or sessile nymphs. Add surfactant. Max 2 applications per crop; min 7-day retreatment. WHP: 3 days harvest."
        }
      ]
    },

    // ── Cotton ────────────────────────────────────────────────
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Cotton aphid (Aphis gossypii)",
          pestList: ["Cotton Aphid", "Aphis Gossypii"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "g/ha",
          stage: "Apply to a developing population of no greater than 40% infestation and no more than 5 aphids per leaf; apply prior to row closure on an actively growing crop before honeydew damage occurs",
          note: "Add 0.2% v/v organosilicone surfactant. Thorough spray coverage essential. Use in accordance with Cotton Industry's IRM Strategy and Best Management Practices Manual. CHESS is not a knockdown — do not expect significant reduction for at least 3 days. Max 2 applications per crop. DO NOT apply consecutive Group 9B insecticides within or between seasons. WHP: 4 weeks harvest. Grazing: DO NOT graze treated cotton crops, stubble or gin trash."
        }
      ]
    },

    // ── Potatoes ──────────────────────────────────────────────
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Max 2 applications per crop; min 14-day retreatment interval. WHP: not required when used as directed."
        }
      ]
    },

    // ── Stone Fruit ───────────────────────────────────────────
    {
      crop: "Stone Fruit",
      cropList: ["Peaches", "Nectarines", "Plums", "Cherries", "Apricots"],
      weeds: [
        {
          weed: "Black peach aphid (Brachycaudus persicae)",
          pestList: ["Black Peach Aphid", "Brachycaudus Persicae"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Dilute rate: 20 g/100 L. For concentrate spraying refer to Application section. If water volumes exceed 2000 L/ha, total rate must not exceed 400 g/ha. Concentrate spraying: DO NOT use at rates greater than 80 g/100 L. Min 7-day retreatment interval. Max 2 applications per crop. WHP: 4 weeks harvest."
        },
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Dilute rate: 20 g/100 L. For concentrate spraying refer to Application section. If water volumes exceed 2000 L/ha, total rate must not exceed 400 g/ha. Concentrate: DO NOT use > 80 g/100 L. Min 7-day retreatment. Max 2 applications per crop. WHP: 4 weeks harvest."
        }
      ]
    },

    // ── Almonds and Pistachios ────────────────────────────────
    {
      crop: "Almonds and Pistachios",
      cropList: ["Almonds", "Pistachios"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Dilute rate: 20 g/100 L. For concentrate spraying refer to Application section. If water volumes exceed 2000 L/ha, total rate must not exceed 400 g/ha. Concentrate: DO NOT use > 80 g/100 L. Min 7-day retreatment interval. Max 2 applications per crop. WHP: 4 weeks harvest."
        }
      ]
    },

    // ── Beetroot ──────────────────────────────────────────────
    {
      crop: "Beetroot",
      cropList: ["Beetroot"],
      weeds: [
        {
          weed: "Potato aphid (Macrosiphum euphorbiae)",
          pestList: ["Potato Aphid", "Macrosiphum Euphorbiae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Add a suitable non-ionic surfactant. Max 2 applications per crop; min 14-day retreatment interval. WHP: 14 days harvest."
        },
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Add surfactant. Max 2 applications per crop; min 14-day retreatment. WHP: 14 days harvest."
        }
      ]
    },

    // ── Celery ────────────────────────────────────────────────
    {
      crop: "Celery",
      cropList: ["Celery"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/ha",
          stage: "Apply at early stages of infestation",
          note: "Field grown crops only. Ground application equipment only. Max 2 applications per crop; min 14-day retreatment interval. WHP: 14 days harvest."
        }
      ]
    },

    // ── Cut Flowers ───────────────────────────────────────────
    {
      crop: "Cut Flowers (subject to tolerance test)",
      cropList: ["Roses", "Gerberas", "Chrysanthemums"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Subject to tolerance test — always check cultivar susceptibility by treating a small number of plants first under conditions reflective of large-scale use. For concentrate spraying refer to Application section. Spray in sufficient volume for adequate penetration. Add surfactant. Max 2 applications per crop; min 14-day retreatment interval. No WHP."
        },
        {
          weed: "Melon aphid (Aphis gossypii)",
          pestList: ["Melon Aphid", "Aphis Gossypii"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Subject to tolerance test. Add surfactant. Max 2 applications; min 14-day retreatment. No WHP."
        },
        {
          weed: "Cowpea aphid (Aphis craccivora)",
          pestList: ["Cowpea Aphid", "Aphis Craccivora"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Subject to tolerance test. Add surfactant. Max 2 applications; min 14-day retreatment. No WHP."
        },
        {
          weed: "Rose aphid (Macrosiphum rosae)",
          pestList: ["Rose Aphid", "Macrosiphum Rosae"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Subject to tolerance test. Add surfactant. Max 2 applications; min 14-day retreatment. No WHP."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci) — SUPPRESSION ONLY",
          pestList: ["Silverleaf Whitefly", "Bemisia Tabaci"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Target adult whitefly; apply before populations reach high levels",
          note: "SUPPRESSION ONLY. Subject to tolerance test. DO NOT apply where whitefly populations predominantly consist of eggs, pupae or sessile nymphs. Add surfactant. Max 2 applications; min 14-day retreatment. No WHP."
        },
        {
          weed: "Greenhouse whitefly (Trialeurodes vaporariorum) — SUPPRESSION ONLY",
          pestList: ["Greenhouse Whitefly", "Trialeurodes Vaporariorum"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Target adult whitefly; apply before populations reach high levels",
          note: "SUPPRESSION ONLY. Subject to tolerance test. DO NOT apply where whitefly predominantly eggs/pupae/sessile nymphs. Add surfactant. Max 2 applications; min 14-day retreatment. No WHP."
        }
      ]
    },

    // ── Nursery Stock (non-food) ──────────────────────────────
    {
      crop: "Nursery Stock (non-food, subject to tolerance test)",
      cropList: ["Nursery Stock", "Seedlings", "Potted Colour", "Ornamental Trees", "Ornamental Shrubs", "Foliage Plants", "Palms", "Ornamental Grasses"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Subject to tolerance test — always check cultivar susceptibility first. Includes seedlings, plugs, potted colour, trees, shrubs, foliage plants, palms, grasses and fruit trees (non-bearing). For concentrate spraying refer to Application section. Add surfactant. Max 2 applications per crop; min 7-day retreatment interval. No WHP."
        },
        {
          weed: "Melon aphid (Aphis gossypii)",
          pestList: ["Melon Aphid", "Aphis Gossypii"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Subject to tolerance test. Add surfactant. Max 2 applications; min 7-day retreatment. No WHP."
        },
        {
          weed: "Cowpea aphid (Aphis craccivora)",
          pestList: ["Cowpea Aphid", "Aphis Craccivora"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Subject to tolerance test. Add surfactant. Max 2 applications; min 7-day retreatment. No WHP."
        },
        {
          weed: "Rose aphid (Macrosiphum rosae)",
          pestList: ["Rose Aphid", "Macrosiphum Rosae"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Monitor crops; apply when local pest thresholds reached",
          note: "Subject to tolerance test. Add surfactant. Max 2 applications; min 7-day retreatment. No WHP."
        },
        {
          weed: "Silverleaf whitefly (Bemisia tabaci) — SUPPRESSION ONLY",
          pestList: ["Silverleaf Whitefly", "Bemisia Tabaci"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Target adult whitefly; apply before populations reach high levels",
          note: "SUPPRESSION ONLY. Subject to tolerance test. DO NOT apply where whitefly predominantly eggs/pupae/sessile nymphs. Add surfactant. Max 2 applications; min 7-day retreatment. No WHP."
        },
        {
          weed: "Greenhouse whitefly (Trialeurodes vaporariorum) — SUPPRESSION ONLY",
          pestList: ["Greenhouse Whitefly", "Trialeurodes Vaporariorum"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          stage: "Target adult whitefly; apply before populations reach high levels",
          note: "SUPPRESSION ONLY. Subject to tolerance test. DO NOT apply where whitefly predominantly eggs/pupae/sessile nymphs. Add surfactant. Max 2 applications; min 7-day retreatment. No WHP."
        }
      ]
    },

    // ═══ PERMIT USES ═══

    // ── PER14892: Snow Peas & Sugar Snap Peas (Aphids) ────────
    {
      crop: "Snow Peas & Sugar Snap Peas (PER14892)",
      cropList: ["Snow Peas", "Sugar Snap Peas"],
      permitNumber: "PER14892",
      weeds: [
        {
          weed: "Cowpea aphid (Aphis craccivora)",
          pestList: ["Cowpea Aphid", "Aphis Craccivora"],
          states: ["All (except VIC)"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          note: "PERMIT PER14892 (exp. 31 May 2027). Max 200 g/ha. Apply at first sign of aphid infestation. Max 2 sprays per crop; min 14-day retreatment. Add surfactant. Apply in 100–800 L water/ha. WHP: 14 days harvest. DO NOT graze or cut for stock food. DO NOT use on protected crops."
        },
        {
          weed: "Pea aphid (Acyrthosiphon pisum)",
          pestList: ["Pea Aphid", "Acyrthosiphon Pisum"],
          states: ["All (except VIC)"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          note: "PERMIT PER14892 (exp. 31 May 2027). Max 200 g/ha. Apply at first sign of aphid infestation. Max 2 sprays per crop; min 14-day retreatment. Add surfactant. Apply in 100–800 L water/ha. WHP: 14 days harvest. DO NOT graze or cut for stock food. DO NOT use on protected crops."
        },
        {
          weed: "Potato aphid (Macrosiphum euphorbiae)",
          pestList: ["Potato Aphid", "Macrosiphum Euphorbiae"],
          states: ["All (except VIC)"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          note: "PERMIT PER14892 (exp. 31 May 2027). Max 200 g/ha. Apply at first sign of aphid infestation. Max 2 sprays per crop; min 14-day retreatment. Add surfactant. Apply in 100–800 L water/ha. WHP: 14 days harvest. DO NOT graze or cut for stock food. DO NOT use on protected crops."
        },
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All (except VIC)"],
          rate: "20",
          rateMax: "20",
          unit: "g/100L",
          note: "PERMIT PER14892 (exp. 31 May 2027). Max 200 g/ha. Apply at first sign of aphid infestation. Max 2 sprays per crop; min 14-day retreatment. Add surfactant. Apply in 100–800 L water/ha. WHP: 14 days harvest. DO NOT graze or cut for stock food. DO NOT use on protected crops."
        }
      ]
    }

  ],

  // ── General notes ──────────────────────────────────────────
  restraints: [
    "DO NOT apply more than 2 applications of CHESS per crop.",
    "DO NOT apply consecutive applications of CHESS or other Group 9B insecticides within and between seasons.",
    "Use subject to CropLife resistance management strategies for green peach aphid and silverleaf whitefly.",
    "In cotton, use in accordance with Cotton Industry's IRM Strategy."
  ],
  withholding: {
    harvest: "Fruiting vegetables, cucurbits, leafy vegetables, lettuce: 3 days. Brassica vegetables: 7 days. Beetroot, sweet corn, celery: 14 days. Cotton, almonds, pistachios, stone fruit: 4 weeks. Potatoes: not required when used as directed.",
    grazing: "Cotton: DO NOT graze treated cotton crops, stubble or gin trash."
  },
  compatibility: {
    compatible: [
      "Affirm", "Vertimec", "Karate Zeon"
    ],
    incompatible: [],
    note: [
      "As formulations of other manufacturers are beyond Syngenta's control and water quality varies, all mixtures should be tested prior to mixing commercial quantities."
    ]
  },
  surfactant: "Add a suitable non-ionic surfactant at recommended rate for all vegetable, brassica, lettuce, leafy veg, cucurbit, cut flower and nursery uses. Cotton: add 0.2% v/v organosilicone surfactant."
};
