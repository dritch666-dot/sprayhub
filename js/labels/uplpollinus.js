// ─────────────────────────────────────────────────────────────────────────────
// UPL POLLINUS HONEYBEE ATTRACTANT — Label Data
// Honeybee Attractant | Pollination Enhancer | Liquid
// Source: UPL_Pollinus_Honeybee_Attractant_Label.pdf
// APVMA Approval No: Not listed on label
// UPL Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['uplpollinus'] = {
  name:             "UPL Pollinus Honeybee Attractant",
  company: "UPL",

  category:         "Herbicides",
  activeIngredient: "505 g/L Allelochemicals (Geraniol 30-60%, Citral 10-<30%, Trans-anethole <10%, Linalool <10%)",
  group:            "Non-classified attractant",
  modeOfAction:     "Honeybee attractant - reproduces scents to attract pollen-gathering bees",
  formulation:      "Liquid (L)",
  color:            "#f59e0b",
  apvma:            "",
  labelPdf:         "Source labels/UPL_Pollinus_Honeybee_Attractant_Label.pdf",
  sdsPdf:         "SDS Labels/pollinus sds.pdf",
  signalHeading:    "POISON",
  classification: {
    type: "Herbicide",
    target: ["Honeybee activity increase", "Pollination improvement", "Fruit set increase"],
    timing: ["At hive introduction", "Full bloom"]
  },

  crops: [
    {
      crop: "Horticultural crops (Tomato, Capsicum, Cucurbits, Berries)",
      cropList: ["Tomato", "Capsicum", "Cucurbits", "Berries"],
      weeds: [
        { weed: "Honeybee attraction", pestList: ["Pollination support"], states: ["All"], rate: "1", rateMax: "1", unit: "L/ha", stage: "Flowering period", note: "Apply with 400 L/ha minimum water volume in field horticulture" }
      ]
    },
    {
      crop: "Fruit Trees (Apple, Pear, Cherry, Stone Fruit)",
      cropList: ["Apple", "Pear", "Cherry", "Stone Fruit"],
      weeds: [
        { weed: "Honeybee attraction", pestList: ["Pollination support"], states: ["All"], rate: "1", rateMax: "1", unit: "L/ha", stage: "Flowering period", note: "Apply with 600 L/ha minimum water volume in fruit trees" }
      ]
    },
    {
      crop: "Nut Trees (Almond, Macadamia, Walnut)",
      cropList: ["Almond", "Macadamia", "Walnut"],
      weeds: [
        { weed: "Honeybee attraction", pestList: ["Pollination support"], states: ["All"], rate: "1", rateMax: "1", unit: "L/ha", stage: "Flowering period", note: "Apply with 600 L/ha minimum water volume" }
      ]
    },
    {
      crop: "Greenhouse Crops",
      cropList: ["Greenhouse Crops"],
      weeds: [
        { weed: "Honeybee attraction", pestList: ["Pollination support"], states: ["All"], rate: "0.6", rateMax: "0.6", unit: "L/ha", stage: "Flowering period", note: "Apply 2 treatments at 7-10 day intervals; if long flowering period, third treatment possible; minimum 400 L/ha water volume" }
      ]
    }
  ],

  restraints: [
    "Keep out of reach of children",
    "Read carefully and follow all instructions",
    "Avoid breathing dust, fumes, gas, mist, vapours or spray",
    "Contaminated work clothing should not be allowed out of workplace",
    "Do not burn empty containers or product"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Shake well before use"]
  },

  withholding: {
    harvest: "Not applicable - pollination enhancer only",
    grazing: "Not applicable"
  },

  applicationInstructions: {
    timing: "Apply in early morning when weather conditions are favourable; apply on day of hive introduction (normally at beginning of flowering: 10% open flowers) and at full bloom (90% open flowers); in greenhouse, carry out 2 applications at 7-10 day intervals",
    method: "Apply with sprayers or atomizers during flowering period with minimum water volume of 600 L/ha (fruit trees) or 400 L/ha (field horticulture)"
  },

  surfactant:     "Not specified",
  sprayerCleanup: "Triple-rinse plastic or drumMUSTER containers before disposal; add rinsings to spray tank; do not dispose of undiluted chemicals on site"
};
