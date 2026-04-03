// ─────────────────────────────────────────────────────────────────────────────
// Nufarm Activator® Adjuvant — Label Data
// Soluble Concentrate (SL) | Adjuvant (Non-Ionic Surfactant)
// APVMA Approval No. 41517/132870
// Source: Nufarm_Activator_Adjuvant_Label.pdf
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['nufarmactivator'] = {
  name:             "Nufarm Activator Adjuvant",

  category:         "Adjuvants / Surfactants",
  activeIngredient: "900 g/L Non-Ionic Surfactant",
  group:            "Adjuvant",
  modeOfAction:     "Non-ionic wetting agent — reduces surface tension for improved spray coverage, rainfast qualities, low foaming",
  formulation:      "Soluble Concentrate (SL)",
  color:            "#d97706",
  company: "Nufarm",
  labelPdf:         "Source labels/Nufarm_Activator_Adjuvant_Label.pdf",
  sdsPdf:           "SDS Labels/NU043_NUFARM-ACTIVATOR-ADJUVANT-21.02.2025.pdf",
  signalHeading:    "READ SAFETY DIRECTIONS",
  apvma:            "41517/132870",
  classification: {
    type: "Adjuvant",
    target: ["Spray Enhancement", "Wetting", "Rainfast"],
    timing: ["Tank Mix"]
  },

  crops: [
    // ══════════════════════════════════════════════════════════════════
    // NON-SELECTIVE HERBICIDES — FOLIAR ACTIVE
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Non-Selective Herbicides — Foliar Active",
      cropList: ["Non-Selective Herbicides", "Herbicides", "Foliar Active Herbicides"],
      weeds: [
        {
          weed: "Foliar active non-selective herbicides (e.g. Revolter, Glyphosate 360, Roundup, Amicide T, Kamba 500, MCPA)",
          pestList: ["Glyphosate", "Roundup", "MCPA", "Amicide", "Kamba"],
          states: ["All"],
          rate: "70", rateMax: "125", unit: "mL/100L",
          stage: "Add to spray tank when using foliar active non-selective herbicides",
          note: "Use the higher rate on wavy, hairy or hard to wet surfaces. Increase rate for dry soils."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // NON-SELECTIVE HERBICIDES — SOIL ACTIVE
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Non-Selective Herbicides — Soil Active",
      cropList: ["Non-Selective Herbicides", "Herbicides", "Soil Active Herbicides"],
      weeds: [
        {
          weed: "Soil active non-selective herbicides (e.g. Diuron, Nu-trazine, Simazine, Tornado)",
          pestList: ["Diuron", "Simazine", "Atrazine", "Triazine"],
          states: ["All"],
          rate: "75", rateMax: "100", unit: "mL/100L",
          stage: "Add to spray tank when using soil active non-selective herbicides",
          note: "Use the higher rate on wavy, hairy or hard to wet surfaces. Increase rate for dry soils."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // SELECTIVE HERBICIDES — IN CROP USE
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Selective Herbicides — In Crop Use",
      cropList: ["Selective Herbicides", "Herbicides", "In Crop"],
      weeds: [
        {
          weed: "Selective herbicides where a surfactant is recommended on the herbicide label",
          pestList: ["Selective Herbicides"],
          states: ["All"],
          rate: "75", rateMax: "125", unit: "mL/100L",
          stage: "Add to spray tank when a surfactant is required or recommended on herbicide labels",
          note: "Use when a surfactant is recommended on herbicide labels. Use the higher rate on waxy, hairy or hard to wet surfaces."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // DICLOFOP-METHYL HERBICIDES (Nugrass, Hoegrass)
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Diclofop-methyl Herbicides (Nugrass, Hoegrass)",
      cropList: ["Herbicides", "Diclofop-methyl"],
      weeds: [
        {
          weed: "Use with Nugrass or Hoegrass when mixing with bromoxynil and MCPA, LVE MCPA, Tigrex, Associate or Ally herbicides",
          pestList: ["Nugrass", "Hoegrass", "Diclofop-methyl"],
          states: ["All"],
          rate: "150", unit: "mL/100L",
          stage: "Only when mixing Nugrass or Hoegrass with specific tank mix partners",
          note: "Use only when mixing Nugrass or Hoegrass with bromoxynil and MCPA, LVE MCPA, Tigrex, Associate or Ally herbicides."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // INSECTICIDES
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Insecticides",
      cropList: ["Insecticides"],
      weeds: [
        {
          weed: "Insecticides — Boom Spray (e.g. Carbaryl, Chlorpyrifos, Endosulfan, Dimethoate, Trichlorfon, Maldison, Sonic)",
          pestList: ["Carbaryl", "Chlorpyrifos", "Dimethoate", "Trichlorfon", "Maldison"],
          states: ["All"],
          rate: "50", rateMax: "125", unit: "mL/100L",
          stage: "Add to spray tank — boom spray application",
          note: "Boom spray rate: 50–125 mL/100 L. Use the higher rate on hairy, waxy, dusty or hard to wet surfaces. Also increase the rate when spraying onto dry soils."
        },
        {
          weed: "Insecticides — Misters",
          pestList: ["Insecticides"],
          states: ["All"],
          rate: "30", rateMax: "100", unit: "mL/100L",
          stage: "Add to spray tank — mister application",
          note: "Mister rate: 30–100 mL/100 L."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // FUNGICIDES
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Fungicides",
      cropList: ["Fungicides"],
      weeds: [
        {
          weed: "Fungicides — Boom Spray (e.g. Penncozeb 750 DF, Unite 720)",
          pestList: ["Penncozeb", "Mancozeb", "Fungicides"],
          states: ["All"],
          rate: "50", rateMax: "125", unit: "mL/100L",
          stage: "Add to spray tank — boom spray application",
          note: "Boom spray rate: 50–125 mL/100 L."
        },
        {
          weed: "Fungicides — Misters",
          pestList: ["Fungicides"],
          states: ["All"],
          rate: "30", rateMax: "100", unit: "mL/100L",
          stage: "Add to spray tank — mister application",
          note: "Mister rate: 30–100 mL/100 L."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // SUGAR CANE HERBICIDES
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Sugar Cane Herbicides",
      cropList: ["Sugar Cane", "Sugarcane", "Herbicides"],
      weeds: [
        {
          weed: "Herbicide applications in sugar cane",
          pestList: ["Sugar Cane Herbicides"],
          states: ["All"],
          rate: "60", rateMax: "120", unit: "mL/100L",
          stage: "Add to spray tank for sugar cane herbicide applications",
          note: "Increase the rate of Nufarm Activator as the rate of water sprayed per hectare increases. For example, if you apply 400 L of water per hectare, 400–480 mL of Nufarm Activator should be added to the spray solution. Spray only to the point where leaves are fully covered. Spraying beyond this allows runoff, which will increase costs by losing chemical onto the ground."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // KNOCKDOWN + RESIDUAL HERBICIDE MIXTURES
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Knockdown and Residual Herbicide Mixtures",
      cropList: ["Herbicides", "Knockdown Herbicides", "Residual Herbicides"],
      weeds: [
        {
          weed: "Mixtures of knockdown and residual herbicides (e.g. Naquot plus Nu-trazine 900DF or Amicide 625 plus Diuron 900DF)",
          pestList: ["Paraquat", "Naquot", "Amicide", "Diuron"],
          states: ["All"],
          rate: "70", rateMax: "125", unit: "mL/100L",
          stage: "Add to spray tank when mixing knockdown and residual herbicides",
          note: "Use the higher rate when spraying waxy, hairy, dusty or hard to wet leaves. Also if the soil is dry, a higher rate of Nufarm Activator should be used. Consult product labels for individual recommendations."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // WOODY WEED SPRAYING
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Woody Weed Spraying",
      cropList: ["Woody Weeds", "Spot Spraying", "Aerial Spraying"],
      weeds: [
        {
          weed: "Woody weed spot and aerial spraying (e.g. Lantana DP 600, Kamba 500, Baton, Amicide 625, Glyphosate 360, Roundup DST, Associate)",
          pestList: ["Lantana", "Woody Weeds", "Blackberry", "Gorse"],
          states: ["All"],
          rate: "100", rateMax: "125", unit: "mL/100L",
          stage: "Spot spraying or aerial spraying of woody weeds",
          note: "SPOT SPRAYING: When spot spraying with chemicals such as Lantana DP 600, Kamba 500, Baton, Amicide 625, Glyphosate 360, Roundup DST, Associate, etc. Add at these rates depending on growth conditions and likely rainfall conditions. AERIAL SPRAYING: Aerial spraying of woody weeds is often difficult by air due to the difficulty of reaching the target effectively. Normal water volumes of 30–50 L per hectare should include at least 40 mL of Nufarm Activator per 100 L of water."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // FIRE FIGHTING
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Fire Fighting",
      cropList: ["Fire Fighting"],
      weeds: [
        {
          weed: "Fire fighting — improves efficiency of water in fire fighting",
          pestList: ["Fire Fighting"],
          states: ["All"],
          rate: "10", unit: "mL/100L",
          stage: "Add to water tanker or knapsack for fire fighting",
          note: "Water tanker: 10 mL/100 L of water. Knapsack: 1 mL/10 L. Nufarm Activator improves the efficiency of water in fire fighting by increasing the wetting power and assisting in faster control."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // PARAQUAT & DIQUAT HERBICIDES
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Paraquat & Diquat Herbicides",
      cropList: ["Herbicides", "Paraquat", "Diquat"],
      weeds: [
        {
          weed: "Paraquat and Diquat herbicides — important when grasses are the major target",
          pestList: ["Paraquat", "Diquat", "Gramoxone"],
          states: ["All"],
          rate: "60", rateMax: "120", unit: "mL/100L",
          stage: "Add to spray tank when using Paraquat or Diquat herbicides",
          note: "Vary rate according to spray volume. Select rate in accordance with product labels. Important when grasses are the major target."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // PASTURE TOPPING
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Pasture Topping",
      cropList: ["Pasture Topping", "Pastures"],
      weeds: [
        {
          weed: "Pasture topping — for use with Glyphosate CT",
          pestList: ["Pasture Topping", "Glyphosate"],
          states: ["All"],
          rate: "150", unit: "mL/100L",
          stage: "Add to spray tank when pasture topping with Glyphosate CT",
          note: "For use with Glyphosate CT."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // WATERING OF TURF AND DUST ABATEMENT
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Turf Watering & Dust Abatement",
      cropList: ["Turf", "Dust Abatement"],
      weeds: [
        {
          weed: "Watering of turf and dust abatement — as additive to water",
          pestList: ["Turf Wetting", "Dust Abatement"],
          states: ["All"],
          rate: "50", rateMax: "125", unit: "mL/100L",
          stage: "Add to water as a wetting agent for turf or dust control",
          note: "Use the higher rate when watering turf."
        }
      ]
    }
  ],

  restraints: [
    "Harmful to fish. DO NOT contaminate ponds, waterways or ditches with the chemical or used containers."
  ],

  withholding: {
    harvest: "Not applicable — adjuvant",
    grazing: "Not applicable — adjuvant"
  },

  mixing: "When Nufarm Activator is being used as a low foaming agent for wettable powders and water soluble products, add Nufarm Activator into water before adding the agricultural chemical to the spray tank. When Nufarm Activator is being used as a general purpose surfactant for all other formulation types, add Nufarm Activator last.",

  generalInfo: "Nufarm Activator is a low foaming, non-ionic type spreader adjuvant, providing quick wetting, more uniform distribution. Nufarm Activator increases retention of spray by reducing surface tension of the spray droplets. Nufarm Activator is a water soluble adjuvant that may also be used as an interfacing agent for wettable powders. Where product labels recommend the addition of a non-ionic wetting agent at a specific percentage dilution, use the following guidelines: 0.1% = 100 mL per 100 litres of final spray volume, or 0.125% = 125 mL per 100 litres of final spray volume.",

  sprayerCleanup: ""
};
