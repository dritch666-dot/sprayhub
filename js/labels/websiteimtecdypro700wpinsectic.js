// ─────────────────────────────────────────────────────────
// Imtrade Ecdypro 700 WP — Label Data
// Group 18 (Ecdysone Agonist) | Wettable Powder
// Source: Imtrade_Imtrade_Ecdypro_700_Wp_Insecticide_Label.pdf
// APVMA Approval No: 88780
// Imtrade CropScience
// ─────────────────────────────────────────────────────────
productDatabase['websiteimtecdypro700wpinsectic'] = {

  name:             "Imtrade Ecdypro 700 WP",
  company: "Imtrade",


  category:         "Insecticides",
  activeIngredient: "700 g/kg Tebufenozide",
  group:            "Group 18 (Ecdysone Agonist)",
  modeOfAction:     "Ecdysone receptor agonist; triggers premature molting in insects",
  formulation:      "Wettable Powder (WP)",
  color:            "#7e22ce",
  apvma:            "88780",
  labelPdf:         "Source labels/Imtrade_Imtrade_Ecdypro_700_Wp_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/IMTRADE_ECDYPRO_700WP_INSECTICIDE.pdf",
  signalHeading:    "Caution",

  classification: {
    type: "Insecticide",
    target: ["Armyworms", "Budworms", "Caterpillars", "Leafrollers", "Light Brown Apple Moth", "Loopers"],
    timing: ["Curative"]
  },

  crops: [
    {
      crop: "Apples & Pears",
      cropList: ["Apples & Pears"],
      weeds: [
        {
          weed: "Light Brown Apple Moth, Leafrollers, Codling Moth (early instars)",
          pestList: ["Light Brown Apple Moth","Leafrollers","Codling Moth"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "g/100L",
          stage: "During egg hatch and early larval stage",
          note: "21 day harvest withholding. Excellent selectivity - minimal impact on beneficials."
        }
      ]
    },
    {
      crop: "Berries (Grapes, Strawberries, Blueberries)",
      cropList: ["Berries","Grapes","Strawberries","Blueberries"],
      weeds: [
        {
          weed: "Caterpillars, Leafrollers",
          pestList: ["Caterpillars","Leafrollers"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "g/100L",
          stage: "During pest activity; repeat 7-10 days",
          note: "Harvest withholding varies (3-7 days). Works on early to mid-instar larvae."
        }
      ]
    },
    {
      crop: "Vegetables (Brassicas, Legumes)",
      cropList: ["Vegetables","Brassicas","Legumes"],
      weeds: [
        {
          weed: "Diamondback Moth, Caterpillars, Armyworms",
          pestList: ["Diamondback Moth","Caterpillars","Armyworms"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "g/100L",
          stage: "Early during pest activity",
          note: "3-7 day harvest withholding. Very safe for beneficial insects."
        }
      ]
    },
    {
      crop: "Avocado",
      cropList: ["Avocado"],
      weeds: [
          { weed: "Leafrollers", pestList: ["Leafrollers"], states: ["All"], rate: "8.6", unit: "g/100L", rateText: "8.6g/100L", notes: "WHP: 14 days. Apply at first sign of pest" }
      ]
    },
    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
          { weed: "Light brown apple moth", pestList: ["Light Brown Apple Moth"], states: ["All"], rate: "4.3-8.6", unit: "g/", rateText: "4.3-8.6g/100L", notes: "WHP: 1 day. Spray on 1st to 3rd instar" }
      ]
    },
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      weeds: [
          { weed: "Macadamia Nut Borer", pestList: ["Macadamia Nut Borer"], states: ["All"], rate: "12.9", unit: "g/100L", rateText: "12.9g/100L", notes: "WHP: 14 days. Apply 2 sprays 6 and 12 weeks prior to harvest." }
      ]
    },
    {
      crop: "Longan",
      cropList: ["Longan"],
      weeds: [
          { weed: "Macadamia Nut Borer", pestList: ["Macadamia Nut Borer"], states: ["All"], rate: "12.9", unit: "g/100L", rateText: "12.9g/100L", notes: "WHP: 3 days. Apply 2 sprays 6 and 12 weeks prior to harvest." }
      ]
    }
    
  ],

  restraints: [
    "Do not use on crops not listed on label",
    "Do not apply more than 2-3 times per season",
    "May irritate eyes",
    "Do not inhale dust during application"
  ],

  compatibility: {
    compatible:   ["Most fungicides", "Many insecticides", "Beneficial organisms"],
    incompatible: [],
    notes:        ["Check tank mix product labels before combining"]
  },

  withholding: {
    harvest: "Varies by crop: Apples 21 days, Berries 3-7 days, Vegetables 3-7 days.",
    grazing: "Consult label for pasture restrictions."
  },

  surfactant:     "A wetting agent may improve coverage and efficacy.",
  sprayerCleanup: "Rinse sprayer thoroughly with water after use."
};
