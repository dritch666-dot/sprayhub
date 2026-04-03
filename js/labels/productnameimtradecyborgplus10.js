// ─────────────────────────────────────────────────────────
// Imtrade Cyborg Plus 100 EC — Label Data
// Group 3A (Synthetic Pyrethroid) | Emulsifiable Concentrate
// Source: Imtrade_Imtrade_Cyborg_Plus_100_Ec_Insecticide_Label.pdf
// APVMA Approval No: 88914
// Imtrade CropScience
// ─────────────────────────────────────────────────────────
productDatabase['productnameimtradecyborgplus10'] = {

  name:             "Imtrade Cyborg Plus 100 EC",
  company: "Imtrade",


  category:         "Insecticides",
  activeIngredient: "100 g/L Betacyfluthrin + 400 g/L Piperonyl Butoxide",
  group:            "Group 3A (Synthetic Pyrethroid)",
  modeOfAction:     "Disrupts insect nervous system; rapid knockdown; enhanced by synergist",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#78350f",
  apvma:            "88914",
  labelPdf:         "Source labels/Imtrade_Imtrade_Cyborg_Plus_100_Ec_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/IMTRADE_CYBORG_PLUS_100EC_INSECTICIDE.pdf",
  signalHeading:    "Poison",

  classification: {
    type: "Insecticide",
    target: ["Fruit Flies", "Rust Mites", "Leafrollers", "Scale Crawlers"],
    timing: ["Curative"]
  },

  crops: [
    {
      crop: "Avocados",
      cropList: ["Avocados"],
      weeds: [
        {
          weed: "Queensland Fruit Fly, Avocado Lace Bug, Mites",
          pestList: ["Queensland Fruit Fly","Avocado Lace Bug","Mites"],
          states: ["QLD", "NSW"],
          rate: "50",
          rateMax: "100",
          unit: "mL/100L",
          stage: "During fruit development; timing depends on target pest",
          note: "7 day harvest withholding. Monitor for pyrethroid resistance. Follow anti-resistance strategy if using other Group 3 products."
        }
      ]
    },
    {
      crop: "Macadamias",
      cropList: ["Macadamias"],
      weeds: [
        {
          weed: "Macadamia Nut Borer, Stem Borers, Flower Caterpillars",
          pestList: ["Macadamia Nut Borer","Stem Borers","Flower Caterpillars"],
          states: ["QLD", "NSW"],
          rate: "50",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Timing per integrated pest management plan",
          note: "7 day harvest withholding. Check with Imtrade before export regarding MRLs in target markets."
        }
      ]
    }
  ],

  restraints: [
    "Harmful if swallowed",
    "May cause skin and eye irritation",
    "Avoid contact with eyes and skin",
    "Do not breathe spray mist",
    "Very toxic to aquatic life with long-lasting effects"
  ],

  compatibility: {
    compatible:   ["Most fungicides (consult label)"],
    incompatible: [],
    notes:        ["Read label of all tank mix products before mixing"]
  },

  withholding: {
    harvest: "Avocados and Macadamias: 7 days after last application.",
    grazing: "Not applicable to these crops."
  },

  surfactant:     "A suitable wetter/spreader is recommended for optimal coverage.",
  sprayerCleanup: "Rinse sprayer thoroughly with water after each use. Do not dispose of rinsings on site."
};
