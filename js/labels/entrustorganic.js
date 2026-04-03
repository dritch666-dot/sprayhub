// ─────────────────────────────────────────────────────────
// Entrust® Organic* Qalcova® active Insecticide — Label Data
// Group 5 (Spinosyns) | Suspension Concentrate (SC)
// Source: Corteva_Entrust_Organic_Insecticide_Label.pdf
// APVMA Approval No: 88118
// Corteva Agriscience Australia Limited
// ─────────────────────────────────────────────────────────
productDatabase['entrustorganic'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Entrust® Organic* Qalcova® active Insecticide",
  company: "Valent",

  category:         "Insecticides",
  activeIngredient: "240 g/L Spinosad",
  group:            "Group 5 Insecticide",
  modeOfAction:     "Acts on insect nervous system via contact and ingestion — exposed insects stop feeding almost immediately",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#22d3ee",
  apvma:            "88118",
  labelPdf:         "Source labels/Corteva_Entrust_Organic_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/Corteva_EntrustOrganic_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Caterpillars", "Thrips", "Leafrollers", "Loopers", "Heliothis", "Beetles"],
    timing: ["Post-emergent"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Bananas ─────────────────────────────────────────────
    {
      crop: "Bananas",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Banana rust thrip, Sugarcane bud moth",
          pestList: ["Banana Rust Thrip", "Sugarcane Bud Moth"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/10L",
          stage: "Bunch spray — apply as a bunch spray at bunch emergence and repeat at 7–14 day intervals",
          note: "Direct spray at the bunch. Ensure thorough coverage."
        }
      ]
    },

    // ── Brassica Vegetables ─────────────────────────────────
    {
      crop: "Brassica Vegetables (Broccoli, Brussels Sprouts, Cabbage, Cauliflower)",
      cropList: ["Broccoli", "Brussels Sprouts", "Cabbages", "Cauliflowers"],
      weeds: [
        {
          weed: "Diamondback moth, Cabbage white butterfly, Cabbage cluster caterpillar, Cabbage centre grub, Loopers",
          pestList: ["Cabbage Centre Grub", "Cabbage Cluster Caterpillar", "Cabbage White Butterfly", "Diamondback Moth", "Loopers"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "Add a non-ionic wetting agent at the recommended rate. Use a maximum spray volume of 250 L/ha. Ensure thorough coverage by increasing water volume with plant growth stage."
        },
        {
          weed: "Heliothis",
          pestList: ["Heliothis"],
          states: ["All"],
          rate: "200",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "Add wetter. Use the lower rate when good coverage can be achieved and the high rate in maturing crops if crop canopies prevent good coverage."
        },
        {
          weed: "Western flower thrip",
          pestList: ["Western Flower Thrip"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply as part of WFT Resistance Management Strategy",
          note: "Add wetter. Make 3 consecutive applications at 3–5 day intervals (>20°C) or 6–12 day intervals (<20°C). Then switch to another chemical group. WHP: 3 days."
        }
      ]
    },

    // ── Cucurbits ───────────────────────────────────────────
    {
      crop: "Cucurbits (Cucumber, Melon, Squash, Zucchini)",
      cropList: ["Cucumbers", "Melons", "Squash", "Zucchini"],
      weeds: [
        {
          weed: "Cucumber moth, Heliothis",
          pestList: ["Cucumber Moth", "Heliothis"],
          states: ["All"],
          rate: "200",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "Use higher rates during periods of high insect pressure or when crop coverage is difficult. WHP: 3 days."
        },
        {
          weed: "Western flower thrip",
          pestList: ["Western Flower Thrip"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply as part of WFT Resistance Management Strategy",
          note: "WHP: 3 days."
        }
      ]
    },

    // ── Culinary Herbs ──────────────────────────────────────
    {
      crop: "Culinary Herbs (Basil, Coriander, Dill, Parsley, Rosemary, etc.)",
      cropList: ["Basil", "Bay Leaves", "Borage", "Chervil", "Chives", "Coriander", "Dill", "Fennel", "Galangal", "Lemon Balm", "Lemon Grass", "Lemon Verbena", "Marjoram", "Mints", "Mizuna", "Nasturtium Leaves", "Oregano", "Parsley", "Rosemary", "Sage", "Savory", "Sorrel", "Tarragon", "Thyme", "Turmeric"],
      weeds: [
        {
          weed: "Diamondback moth, Loopers, Lightbrown apple moth",
          pestList: ["Diamondback Moth", "Lightbrown Apple Moth", "Loopers"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "Add a non-ionic wetting agent at the recommended rate. Use a maximum spray volume of 250 L/ha. Ensure thorough coverage by increasing water volume with plant growth stage. WHP: 3 days."
        },
        {
          weed: "Heliothis",
          pestList: ["Heliothis"],
          states: ["All"],
          rate: "200",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "Add wetter. Use the lower rate when good coverage can be achieved and the high rate in maturing crops if crop canopies prevent good coverage. WHP: 3 days."
        }
      ]
    },

    // ── Fruiting Vegetables ─────────────────────────────────
    {
      crop: "Fruiting Vegetables (Eggplant, Okra, Capsicum, Chilli, Sweet Corn, Tomato)",
      cropList: ["Capsicums", "Chillies", "Eggplant", "Okra", "Sweet Corn", "Tomatoes"],
      weeds: [
        {
          weed: "Potato moth (tomato leaf miner), Heliothis",
          pestList: ["Heliothis", "Potato Moth"],
          states: ["All"],
          rate: "200",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "Or dilute 20–40 mL/100 L. Use per hectare rate for bush tomato and sweet corn; dilute rate in trellised crops. Use lower rate as part of IPM when heliothis is dominant and good coverage is possible. WHP: Tomato 1 day, Sweet corn Not required, All others 3 days."
        },
        {
          weed: "Western flower thrip",
          pestList: ["Western Flower Thrip"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply as part of WFT Resistance Management Strategy",
          note: "Or dilute 40 mL/100 L. WHP: Tomato 1 day, Sweet corn Not required, All others 3 days."
        }
      ]
    },

    // ── Leafy Vegetables ────────────────────────────────────
    {
      crop: "Leafy Vegetables (Lettuce, Endive, Silverbeet, Spinach, Brassica Leafy Vegetables)",
      cropList: ["Bok Choi", "Chinese Broccoli", "Chinese Cabbage", "Endive", "Kale", "Lettuce", "Pak Choi", "Silverbeet", "Spinach"],
      weeds: [
        {
          weed: "Loopers",
          pestList: ["Loopers"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "WHP: 3 days."
        },
        {
          weed: "Heliothis",
          pestList: ["Heliothis"],
          states: ["All"],
          rate: "200",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "Use the lower rate as part of an IPM program when heliothis is the dominant pest and good coverage is possible. Use higher rates during periods of high insect pressure or when crop coverage is difficult. WHP: 3 days."
        },
        {
          weed: "Western flower thrip",
          pestList: ["Western Flower Thrip"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply as part of WFT Resistance Management Strategy",
          note: "WHP: 3 days."
        }
      ]
    },

    // ── Legume Vegetables ───────────────────────────────────
    {
      crop: "Legume Vegetables — Succulent Seeds and Immature Pods (Beans, Peas, Snow Pea, Sugar Snap Pea)",
      cropList: ["Beans", "Peas", "Snow Peas", "Sugar Snap Peas"],
      weeds: [
        {
          weed: "Loopers",
          pestList: ["Loopers"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "DO NOT make more than 3 applications per crop. Entrenched larvae will not be controlled. WHP: 3 days."
        },
        {
          weed: "Heliothis",
          pestList: ["Heliothis"],
          states: ["All"],
          rate: "200",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "Use higher rates during periods of high insect pressure or when crop coverage is difficult. Max 3 applications per crop. WHP: 3 days."
        },
        {
          weed: "Western flower thrip",
          pestList: ["Western Flower Thrip"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply as part of WFT Resistance Management Strategy",
          note: "Max 3 applications per crop. WHP: 3 days."
        }
      ]
    },

    // ── Root and Tuber Vegetables ────────────────────────────
    {
      crop: "Root and Tuber Vegetables (Beetroot, Carrot, Celeriac, Galangal, Parsnip, Potato, Radish, Sweet Potato, Swede, Turnip)",
      cropList: ["Beetroot", "Carrots", "Celeriac", "Galangal", "Parsnips", "Potatoes", "Radishes", "Sweet Potatoes", "Swedes", "Turnips"],
      weeds: [
        {
          weed: "Lightbrown apple moth, Loopers",
          pestList: ["Lightbrown Apple Moth", "Loopers"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "Use the lower rate when good coverage can be achieved and the high rate in maturing crops if crop canopies prevent good coverage. WHP: 3 days."
        },
        {
          weed: "Heliothis",
          pestList: ["Heliothis"],
          states: ["All"],
          rate: "200",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "WHP: 3 days."
        },
        {
          weed: "Potato moth",
          pestList: ["Potato Moth"],
          states: ["All"],
          rate: "200",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply when pests first detected — target foliar infestations only",
          note: "Add a non-ionic wetting agent at the recommended rate. Entrenched larvae will not be controlled. Potato moth larvae within stems or below the soil will not be controlled. WHP: 3 days."
        }
      ]
    },

    // ── Stalk and Stem Vegetables ───────────────────────────
    {
      crop: "Stalk and Stem Vegetables (Celery, Rhubarb)",
      cropList: ["Celery", "Rhubarb"],
      weeds: [
        {
          weed: "Heliothis",
          pestList: ["Heliothis"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "WHP: 1 day."
        }
      ]
    },

    // ── Sweet Corn (separate listing) ───────────────────────
    {
      crop: "Sweet Corn",
      cropList: ["Sweet Corn"],
      weeds: [
        {
          weed: "Heliothis",
          pestList: ["Heliothis"],
          states: ["All"],
          rate: "200",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply when pests first detected",
          note: "Use higher rates during periods of high insect pressure or when crop coverage is difficult. WHP: Not required."
        }
      ]
    },

    // ── Ornamentals ─────────────────────────────────────────
    {
      crop: "Ornamentals",
      cropList: ["Ornamentals"],
      weeds: [
        {
          weed: "Pear and cherry slug",
          pestList: ["Pear Slug", "Cherry Slug"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Apply when infestation first identified",
          note: "Repeat applications at no less than 10 day intervals. Caterpillars feeding in entrenched sites may not be controlled. WHP: Not applicable."
        },
        {
          weed: "Caterpillars",
          pestList: ["Caterpillars"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply when infestation first identified",
          note: "Repeat at no less than 10 day intervals. WHP: Not applicable."
        },
        {
          weed: "Western flower thrip",
          pestList: ["Western Flower Thrip"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply as part of WFT Resistance Management Strategy",
          note: "WHP: Not applicable."
        }
      ]
    },

    // ── Avocado ─────────────────────────────────────────────
    {
      crop: "Avocado",
      cropList: ["Avocados"],
      weeds: [
        {
          weed: "Leafrollers (Avocado leafroller, Ivy leafroller, Lightbrown apple moth), Loopers (Ectropis looper)",
          pestList: ["Avocado Leafroller", "Ectropis Looper", "Ivy Leafroller", "Lightbrown Apple Moth", "Loopers"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Add a wetting agent. Dilute spray rate. Monitor crops regularly by field scouting. Target mature eggs and newly hatched larvae. WHP: Not required."
        }
      ]
    },

    // ── Berryfruit ──────────────────────────────────────────
    {
      crop: "Berryfruit (Blackberry, Blueberry, Boysenberry, Cranberry, Currant, Gooseberry, Raspberry, Strawberry)",
      cropList: ["Blackberries", "Blueberries", "Boysenberries", "Cranberries", "Currants", "Gooseberries", "Raspberries", "Strawberries"],
      weeds: [
        {
          weed: "Loopers",
          pestList: ["Loopers"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Dilute spray rate. WHP: 1 day."
        },
        {
          weed: "Lightbrown apple moth, Heliothis",
          pestList: ["Heliothis", "Lightbrown Apple Moth"],
          states: ["All"],
          rate: "20",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Dilute spray rate. Use the higher rate in dense canopies and when larvae have begun webbing leaves and fruit. Use the lower rate under an IPM system or where good coverage is assured. WHP: 1 day."
        },
        {
          weed: "Western flower thrip",
          pestList: ["Western Flower Thrip"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply as part of WFT Resistance Management Strategy",
          note: "Dilute spray rate. WHP: 1 day."
        }
      ]
    },

    // ── Citrus Fruits ───────────────────────────────────────
    {
      crop: "Citrus Fruits (Grapefruit, Lemon, Lime, Mandarin, Orange)",
      cropList: ["Citrus","Grapefruits", "Lemons", "Limes", "Mandarins", "Oranges"],
      weeds: [
        {
          weed: "Citrus leafminer, Lightbrown apple moth",
          pestList: ["Citrus Leafminer", "Lightbrown Apple Moth"],
          states: ["All"],
          rate: "10",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Add wetting agent. For citrus leafminer best results achieved when horticultural oil is used in place of a wetting agent. Only use oils when applying to non-bearing trees due to risk of fruit phytotoxicity. WHP: Not required."
        },
        {
          weed: "Heliothis (Corn earworm, Native budworm)",
          pestList: ["Corn Earworm", "Heliothis", "Native Budworm"],
          states: ["All"],
          rate: "20",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Add wetting agent. Use higher rates for heavy infestations. WHP: Not required."
        }
      ]
    },

    // ── Coffee ──────────────────────────────────────────────
    {
      crop: "Coffee",
      cropList: ["Coffee"],
      weeds: [
        {
          weed: "Avocado leafroller",
          pestList: ["Avocado Leafroller"],
          states: ["All"],
          rate: "20",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Add wetting agent. Use higher rates for heavy infestations. WHP: 7 days."
        }
      ]
    },

    // ── Grapes ──────────────────────────────────────────────
    {
      crop: "Grapes",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Lightbrown apple moth",
          pestList: ["Lightbrown Apple Moth"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Dilute spray rate. WHP: 14 days. For wine grapes refer to AWRI."
        },
        {
          weed: "Grapevine moth",
          pestList: ["Grapevine Moth"],
          states: ["All"],
          rate: "5",
          rateMax: "5",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Dilute spray rate. WHP: 14 days."
        }
      ]
    },

    // ── Kiwifruit ───────────────────────────────────────────
    {
      crop: "Kiwifruit",
      cropList: ["Kiwifruit"],
      weeds: [
        {
          weed: "Lightbrown apple moth",
          pestList: ["Lightbrown Apple Moth"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Dilute spray rate. WHP: 7 days."
        }
      ]
    },

    // ── Mango ───────────────────────────────────────────────
    {
      crop: "Mango",
      cropList: ["Mangoes"],
      weeds: [
        {
          weed: "Flower-eating caterpillars, Small mango tip borer",
          pestList: ["Flower-Eating Caterpillars", "Small Mango Tip Borer"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Add wetting agent. Dilute spray rate. WHP: Not required."
        },
        {
          weed: "Large mango tipborer",
          pestList: ["Large Mango Tipborer"],
          states: ["All"],
          rate: "5",
          rateMax: "5",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Add wetting agent. Dilute spray rate. WHP: Not required."
        }
      ]
    },

    // ── Pome Fruit ──────────────────────────────────────────
    {
      crop: "Pome Fruit (Apples, Pears, Nashi, Loquat, Quince)",
      cropList: ["Apples", "Loquats", "Nashi", "Pears", "Quinces"],
      weeds: [
        {
          weed: "Lightbrown apple moth, Loopers, Pear slug, Heliothis",
          pestList: ["Heliothis", "Lightbrown Apple Moth", "Loopers", "Pear Slug"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Dilute spray rate. WHP: 3 days."
        },
        {
          weed: "Western flower thrip",
          pestList: ["Western Flower Thrip"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply as part of WFT Resistance Management Strategy",
          note: "Dilute spray rate. WHP: 3 days."
        }
      ]
    },

    // ── Stone Fruit (except Peach/Plum) ─────────────────────
    {
      crop: "Stone Fruit (Apricot, Cherry, Nectarine)",
      cropList: ["Apricots", "Cherries", "Nectarines"],
      weeds: [
        {
          weed: "Cherry slug",
          pestList: ["Cherry Slug"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Dilute spray rate. WHP: 3 days."
        },
        {
          weed: "Lightbrown apple moth",
          pestList: ["Lightbrown Apple Moth"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Dilute spray rate. WHP: 3 days."
        },
        {
          weed: "Western flower thrip",
          pestList: ["Western Flower Thrip"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply as part of WFT Resistance Management Strategy",
          note: "Dilute spray rate. WHP: 3 days."
        }
      ]
    },

    // ── Peach and Plum ──────────────────────────────────────
    {
      crop: "Peach and Plum",
      cropList: ["Peaches", "Plums"],
      weeds: [
        {
          weed: "Oriental fruit moth",
          pestList: ["Oriental Fruit Moth"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply to coincide with egg hatch of OFM",
          note: "In orchards employing mating disruption, use in rotation for OFM management. Addition of a wetting agent may improve control under less than ideal conditions. WHP: 7 days."
        }
      ]
    },

    // ── Tropical and Sub-Tropical Fruit Crops ───────────────
    {
      crop: "Tropical and Sub-Tropical Fruit Crops — Inedible Peel (Avocado, Cherimoya, Custard Apple, Durian, Feijoa, Guava, Jackfruit, Kiwifruit, Longan, Lychee, Mango, Mangosteen, Papaya, Passionfruit, Persimmon, Rambutan, Star Apple)",
      cropList: ["Avocados", "Cherimoya", "Custard Apples", "Durian", "Feijoas", "Guavas", "Jackfruit", "Kiwifruit", "Longan", "Lychees", "Mangoes", "Mangosteen", "Papaya", "Passionfruit", "Persimmons", "Rambutan", "Star Apples"],
      weeds: [
        {
          weed: "Flower-eating caterpillars, Leafrollers, Loopers, Yellow peach moth",
          pestList: ["Flower-Eating Caterpillars", "Leafrollers", "Loopers", "Yellow Peach Moth"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Dilute spray rate. Addition of a non-ionic wetting agent at recommended rate may improve control on difficult to wet foliage and fruit. WHP: Not required (except Kiwifruit 7 days)."
        },
        {
          weed: "Red-banded thrip, Sorghum head caterpillar",
          pestList: ["Red-Banded Thrip", "Sorghum Head Caterpillar"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply at 7–14 day intervals when numbers exceed spray threshold",
          note: "Dilute spray rate. WHP: Not required (except Kiwifruit 7 days)."
        }
      ]
    },

    // ── Eucalyptus Plantations (Forestry) ───────────────────
    {
      crop: "Eucalyptus Plantations (Forestry)",
      cropList: ["Eucalyptus"],
      weeds: [
        {
          weed: "Eucalyptus chrysomelid leaf beetle larvae",
          pestList: ["Eucalyptus Chrysomelid Leaf Beetle"],
          states: ["All"],
          rate: "25",
          rateMax: "50",
          unit: "mL/ha",
          stage: "Apply when larvae detected",
          note: "Add sticker or wetter. Use higher concentration for larger larvae and older trees. Larval mortality will not occur for at least 4 days after spraying. Not effective against adult beetles. DO NOT spray if rain expected in following 24 hours. Follow code of practice for aerial spraying. WHP: Not applicable."
        }
      ]
    },

    // ── Tea Tree (Forestry) ─────────────────────────────────
    {
      crop: "Tea Tree — Melaleuca spp. (Forestry)",
      cropList: ["Tea Tree"],
      weeds: [
        {
          weed: "Pyrgo beetle",
          pestList: ["Pyrgo Beetle"],
          states: ["All"],
          rate: "100",
          rateMax: "250",
          unit: "mL/ha",
          stage: "Monitor plantation for egg and larval numbers",
          note: "Add wetting agent. Use higher rate for heavy infestations and for larger tea trees. Apply by ground-based equipment only in minimum 100 L/ha water. 1st–2nd instar: 100 mL/ha; 3rd–4th instar: 100–150 mL/ha; adults: 150–250 mL/ha. WHP: Not applicable."
        }
      ]
    },

  ],  // end crops array

  // ── Agronomic fields ──────────────────────────────────────
  restraints: [
    "DO NOT apply more than 4 applications per season.",
    "DO NOT apply to seedlings grown in trays.",
    "DO NOT allow entry into treated areas until the spray has dried.",
    "DO NOT apply when conditions are unsuitable for water-based spray applications.",
    "DO NOT apply in strong winds, inversion conditions or any conditions that may result in drift.",
    "Toxic to bees — avoid direct application or drift of spray mix onto beehives. Once spray deposit has dried, foraging bees will not be affected.",
    "Highly toxic to aquatic invertebrates and algae — DO NOT allow product to enter waterways or drains."
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Use only clean water within pH 5–9 to dilute. Agitate or shake container immediately prior to use. Ensure thorough agitation during mixing and application."]
  },

  withholding: {
    harvest: "Citrus, Sweet corn, Tropical/Sub-tropical fruit (except Kiwifruit): Not required. Berries (except Grapes), Celery, Rhubarb, Tomatoes: 1 day. Brassicas, Brassica leafy veg, Culinary herbs, Cucurbits, Legumes, Leafy veg, Eggplant, Capsicums/Chillies, Pome fruit, Root & tuber veg, Stone fruit (except Peach): 3 days. Coffee, Kiwifruit, Peaches: 7 days. Grapes: 14 days.",
    grazing: "DO NOT allow livestock to graze crop stubble, or in orchards, plantations or vineyards for 14 days after application."
  },

  surfactant:     "Non-ionic wetting agent at recommended rate — required for brassicas, culinary herbs, root/tuber vegetables (potato moth) and citrus applications.",
  sprayerCleanup: "Empty tank and completely drain system. Rinse tank, pumps, lines, hoses, filters and nozzles by circulating clean water through the system. Drain and repeat rinsing procedure twice."

};
