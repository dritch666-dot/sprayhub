// ─────────────────────────────────────────────────────────
// CAMPBELL TRIDIM 250 EC FUNGICIDE — Label Data
// Group 3 (DMI/Triazole) | Emulsifiable Concentrate (EC)
// Source: ColinCampbell_Tridim250EC_Label.pdf
// APVMA Approval No: 51580
// Colin Campbell (Chemicals) Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['campbelltridim'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Campbell Tridim 250 EC Fungicide",
  company: "Campbell",

  category:         "Fungicides",
  activeIngredient: "250 g/L triadimenol",
  group:            "Group 3 (DMI Triazole)",
  modeOfAction:     "Inhibits ergosterol biosynthesis (demethylation inhibitor) — systemic foliar fungicide",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#1c1917",
  apvma:            "51580",
  labelPdf: "Source labels/Tridim_250EC_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/CAMPBELL_TRIDIM_250EC_FUNGICIDE.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Powdery Mildew", "Ring Spot", "Pineapple Disease", "Dollar Spot", "Myrtle Rust",
             "Take-all Patch", "Black Helminthosporium", "Winter Fusarium"],
    timing: ["Preventative", "Curative"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Brassica Vegetables (Cabbage, Cauliflower, Broccoli, Brussels Sprouts)",
      cropList: ["Brassica Vegetables","Cabbage","Cauliflower","Broccoli","Brussels Sprouts"],
      weeds: [
        {
          weed: "Ring spot",
          pestList: ["Ring Spot"],
          states: ["All"],
          rate: "200",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply every 10 days; start immediately following the first two consecutive days of rain after transplanting",
          note: "Rate: 200 or 400 mL/ha + non-ionic wetter 200 mL/ha. WHP: 7 days. Use higher rate under heavy disease pressure or when weather conditions favour development of the disease. DO NOT apply more than 2 consecutive applications of any Group 3 fungicide — rotate with different activity groups."
        }
      ]
    },

    {
      crop: "Cucurbits — Powdery Mildew",
      cropList: ["Cucurbits"],
      weeds: [
        {
          weed: "Powdery mildew",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply non-group 3 fungicide from emergence until fruit set; then either tank mix or alternate Tridim with non-group 3 fungicide on 5–10 day schedule",
          note: "Rate: 40 mL/100L or 400 mL/ha. WHP: 1 day. Use short spray intervals when disease pressure is higher or plants are growing rapidly. Good coverage essential. DO NOT apply more than 4 sprays of Tridim 250EC per crop. Apply in sufficient volume to ensure thorough coverage — for volumes above 1000 L/ha apply as dilute spray to point of incipient run-off on per 100L basis."
        }
      ]
    },

    {
      crop: "Tomatoes, Peppers (Capsicums and Chillies), Eggplants — Powdery Mildew",
      cropList: ["Tomatoes","Peppers","Capsicums","Chillies","Eggplants"],
      weeds: [
        {
          weed: "Powdery mildew",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply prior to, or at first sign of disease; best control as part of well-planned preventative program. Spray intervals 5–10 days",
          note: "Rate: 40 mL/100L or 400 mL/ha. WHP: 1 day. Tridim 250EC should be either tank mixed or alternated with fungicides from different activity groups (NOT Group 3 Fungicides). Short spray intervals when disease pressure is high, plants growing rapidly or weather conditions favour disease. DO NOT apply more than 4 sprays of Tridim 250EC per crop. Good coverage essential."
        }
      ]
    },

    {
      crop: "Grapevines — Powdery Mildew",
      cropList: ["Grapevines"],
      weeds: [
        {
          weed: "Powdery mildew",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Apply at maximum 3 sprays per season: (1) when shoots 10–20 cm long; (2) pre-flowering; (3) at flowering; (4) after fruit set; (5) before bunches close",
          note: "Dilute spraying: 10 mL/100L or 100 mL/ha. Concentrate spraying: refer to Application section (max concentration factor as specified). WHP: 7 days. Subject to CropLife Resistance Management strategy. Apply maximum 3 sprays per season as part of a spray program. A non-Group 3 fungicide should be used after a maximum of 2 consecutive Tridim 250EC sprays. DO NOT allow spray intervals to exceed 21 days. DO NOT use in equipment that requires rates greater than 50 mL/100L water. DO NOT apply in water volumes less than 250 L/ha."
        }
      ]
    },

    {
      crop: "Papaws (Powdery Mildew) — Qld, NSW, WA",
      cropList: ["Papaws (Powdery Mildew)","Qld","NSW","WA"],
      weeds: [
        {
          weed: "Powdery mildew",
          pestList: ["Powdery Mildew"],
          states: ["Qld", "NSW", "WA"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Spray when powdery mildew infection begins or when conditions favour the disease; repeat every 14 days while conditions favour disease",
          note: "Dilute spraying: 20 mL/100L or 200 mL/ha. Concentrate spraying: refer to Application section. WHP: 7 days. Ensure thorough coverage of foliage particularly the crown region."
        }
      ]
    },

    {
      crop: "Sugar Cane — Pineapple Disease — Qld, NSW",
      cropList: ["Sugar Cane"],
      weeds: [
        {
          weed: "Pineapple disease",
          pestList: ["Pineapple Disease"],
          states: ["Qld", "NSW"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply to setts by dipping or spraying; ensure thorough wetting of cut ends",
          note: "Rate: 20 mL/100L. WHP: not required. Apply to setts (seed pieces) at planting."
        }
      ]
    },

    {
      crop: "Parsnips, Radish, Swede, Turnip — Powdery Mildew",
      cropList: ["Parsnips","Radish","Swede","Turnip"],
      weeds: [
        {
          weed: "Powdery mildew",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply when first sign of infection evident or conditions highly conducive; maximum 2 foliar applications with minimum 10-day re-treatment interval",
          note: "Rate: 400 mL/ha or 40 mL/100L. WHP Harvest: 7 days. Grazing: DO NOT graze or cut for feed. Maximum 2 applications, minimum 10-day re-treatment interval. Apply using boom sprayer, hand wands, side-mounted boom or equivalent."
        }
      ]
    },

    {
      crop: "Riberries, Anise Myrtle, Lemon Myrtle — Myrtle Rust",
      cropList: ["Riberries","Anise Myrtle","Lemon Myrtle"],
      weeds: [
        {
          weed: "Myrtle rust",
          pestList: ["Myrtle Rust"],
          states: ["All"],
          rate: "100",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Apply 2 sprays per crop 4 weeks apart on appearance of myrtle rust or when conditions favour development; minimum re-treatment interval 14–21 days",
          note: "Rate: 100–150 mL/ha. WHP Fruit (Riberries): 4 weeks. WHP Leaf (Anise Myrtle, Lemon Myrtle): 4 months. Grazing: DO NOT allow livestock to graze treated area during season of application. Apply via ground-based equipment on appearance of myrtle rust or when conditions favour disease. Use maximum spray volume 400 L/ha."
        }
      ]
    },

    {
      crop: "Nursery Stock, Ornamentals, Non-Bearing Fruit Trees (Myrtle Rust)",
      cropList: ["Nursery Stock","Ornamentals","Non-Bearing Fruit Trees"],
      weeds: [
        {
          weed: "Myrtle rust",
          pestList: ["Myrtle Rust"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "mL/100L",
          stage: "Apply by ground application; minimum re-treatment interval 14–21 days",
          note: "Rate: 50 mL/100L. WHP Non-bearing fruit trees: DO NOT graze during season of application. Apply by ground application only — knapsack, powered hand-gun, boom, air-assisted. Apply in sufficient volume for thorough coverage of all plant surfaces. Treat sample area and assess appropriately prior to whole crop treatment to minimise potential phytotoxic damage — particularly important for crops in bloom. DO NOT apply to non-bearing fruit trees less than 6 months prior to first harvest. For interstate quarantine requirements apply in accordance with appropriate State Import Requirement or ICA document."
        }
      ]
    },

    {
      crop: "Tea Tree — Myrtle Rust",
      cropList: ["Tea Tree"],
      weeds: [
        {
          weed: "Myrtle rust",
          pestList: ["Myrtle Rust"],
          states: ["All"],
          rate: "100",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Apply 2 sprays per crop 4 weeks apart on appearance of myrtle rust or when conditions favour development",
          note: "Rate: 100–150 mL/ha. WHP: DO NOT graze during the season of application. Apply via ground-based equipment. Maximum spray volume 400 L/ha."
        }
      ]
    },

    {
      crop: "Turf — Dollar Spot, Black Helminthosporium, Take-all Patch, Winter Fusarium",
      cropList: ["Turf"],
      weeds: [
        {
          weed: "Dollar spot (preventative)",
          pestList: ["Dollar Spot"],
          states: ["NSW", "Vic", "Qld", "SA", "WA"],
          rate: "30",
          rateMax: "30",
          unit: "mL/100m2",
          stage: "Apply thoroughly on monthly programme starting immediately when disease appears",
          note: "Rate: 30 mL/100m2 preventative. WHP: not required. Do not apply to turf earlier than 5 weeks after sowing."
        },
        {
          weed: "Dollar spot (curative)",
          pestList: ["Dollar Spot"],
          states: ["NSW", "Vic", "Qld", "SA", "WA"],
          rate: "60",
          rateMax: "60",
          unit: "mL/100m2",
          stage: "Apply thoroughly under conditions of heavy disease pressure; treat as necessary",
          note: "Rate: 60 mL/100m2 curative. WHP: not required."
        },
        {
          weed: "Black Helminthosporium",
          pestList: ["Black Helminthosporium"],
          states: ["Qld", "NSW", "Tas"],
          rate: "60",
          rateMax: "60",
          unit: "mL/100m2",
          stage: "Apply during period of turf growth on monthly programme",
          note: "Rate: 60 mL/100m2. Use high volume equipment. Low volume may be used provided turf is irrigated thoroughly after spraying."
        },
        {
          weed: "Take-all patch (preventive only)",
          pestList: ["Take-All Patch"],
          states: ["NSW", "Vic", "Qld", "WA"],
          rate: "60",
          rateMax: "60",
          unit: "mL/100m2",
          stage: "After soil fumigation with methyl bromide; apply 6–8 weeks after seeding; repeat every 8 weeks in first 2 years",
          note: "Rate: 60 mL/100m2. Preventive only after soil fumigation with methyl bromide. Apply thoroughly using high volume equipment. Repeat applications every 8 weeks in first two years for continued protection."
        },
        {
          weed: "Winter Fusarium",
          pestList: ["Winter Fusarium"],
          states: ["NSW", "Vic", "Tas"],
          rate: "60",
          rateMax: "60",
          unit: "mL/100m2",
          stage: "Apply thoroughly on monthly programme from end of March until danger of infection has passed",
          note: "Rate: 60 mL/100m2. Do not apply to turf earlier than 5 weeks after sowing."
        }
      ]
    }

  ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "Do not apply to turf earlier than 5 weeks after sowing.",
    "DO NOT apply more than 2 consecutive applications of any Group 3 fungicide.",
    "Rotate approved products from different chemical mode of action groups at regular intervals within a structured disease management plan.",
    "Grapevines: DO NOT use in equipment that requires rates greater than 50 mL/100L water.",
    "Grapevines: DO NOT apply in water volumes less than 250 L/ha.",
    "Grapevines: DO NOT allow spray intervals to exceed 21 days.",
    "DO NOT apply more than 4 sprays of Tridim 250EC per crop (Cucurbits, Tomatoes, Peppers, Eggplants)."
  ],

  compatibility: {
    compatible:   ["Compatible with most commonly used fungicides and pesticides — jar test recommended."],
    incompatible: ["DO NOT tank mix or alternate with Group 3 fungicides (other DMIs) during resistance management rotation."],
    notes:        ["Systemic — less affected by rainfall or irrigation than contact-type fungicides. Half fill spray tank with clean water, add required amount of Tridim with agitator running, then top up with water. Agitate thoroughly prior to and during spraying."]
  },

  withholding: {
    harvest: "Cucurbits, Eggplant, Peppers (Capsicum and Chilli), Tomatoes: 1 day. Brassica vegetables, Grapevines, Pawpaws, Parsnips, Radish, Swede, Turnip: 7 days. Riberries (fruit): 4 weeks. Anise Myrtle, Lemon Myrtle (leaves): 4 months. Sugar cane, Turf: not required.",
    grazing: "Brassica vegetables: DO NOT graze or cut for stock food. Parsnips, Radish, Swede, Turnip: DO NOT graze or cut for animal feed. Anise Myrtle, Lemon Myrtle, Riberries, Non-bearing fruit trees, Tea tree: DO NOT allow livestock to graze treated area during season of application."
  },

  surfactant:     "Brassica vegetables: add non-ionic wetter at 200 mL/ha. Refer to label for specific crop requirements.",
  sprayerCleanup: "Triple-rinse containers before disposal. Add rinsings to spray tank. DO NOT dispose of undiluted chemicals on site."

};
