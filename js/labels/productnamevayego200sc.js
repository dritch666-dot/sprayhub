// ─────────────────────────────────────────────────────────
// Vayego 200 SC — Label Data
// Group 28 (Anthranilic Diamide) | Suspension Concentrate
// Source: Bayer_Cropscience_Vayego_200_Sc_Insecticide_Label.pdf
// APVMA Approval No: 86756
// Bayer CropScience
// ─────────────────────────────────────────────────────────
productDatabase['productnamevayego200sc'] = {

  name:             "Vayego 200 SC",
  company: "Albaugh",


  category:         "Insecticides",
  activeIngredient: "200 g/L Cyantraniliprole",
  group:            "Group 28 (Anthranilic Diamide)",
  modeOfAction:     "Ryanodine receptor modulator; systemic and translaminar movement",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#d946ef",
  apvma:            "86756",
  labelPdf:         "Source labels/Bayer_Cropscience_Vayego_200_Sc_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/Vayego__200_SC_Insecticide.pdf",
  signalHeading:    "Caution",

  classification: {
    type: "Insecticide",
    target: ["Caterpillars", "Leafminers", "Sucking Insects", "Thrips", "Weevils", "Whitefly"],
    timing: ["Preventive", "Curative"]
  },

  crops: [
    {
      crop: "Vegetables (Tomatoes, Cucurbits, Brassicas)",
      cropList: ["Vegetables","Tomatoes","Cucurbits","Brassicas"],
      weeds: [
        {
          weed: "Caterpillars, Whitefly, Leafminers, Thrips",
          pestList: ["Caterpillars","Whitefly","Leafminers","Thrips"],
          states: ["All"],
          rate: "40",
          rateMax: "80",
          unit: "mL/100L",
          stage: "Early in season; repeat 7-10 day intervals",
          note: "Harvest withholding varies by crop (3-14 days). Systemic uptake provides residual protection."
        }
      ]
    },
    {
      crop: "Fruit Trees (Apples, Pears, Citrus)",
      cropList: ["Fruit Trees","Apples","Pears","Citrus"],
      weeds: [
        {
          weed: "Codling Moth, Leafrollers, Psyllids",
          pestList: ["Codling Moth","Leafrollers","Psyllids"],
          states: ["All"],
          rate: "50",
          rateMax: "80",
          unit: "mL/100L",
          stage: "Post-bloom through fruit development",
          note: "7-21 day harvest withholding (crop dependent). Good resistance management tool."
        }
      ]
    },
    {
      crop: "Grapes",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Mealybugs, Scale, Thrips",
          pestList: ["Mealybugs","Scale","Thrips"],
          states: ["All"],
          rate: "50",
          rateMax: "80",
          unit: "mL/100L",
          stage: "Dormant period or early growth",
          note: "Harvest withholding varies; consult label. Tank-mixing with fungicides recommended."
        }
      ]
    },
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Helicoverpa, Aphids, Whitefly, Mites",
          pestList: ["Helicoverpa","Aphids","Whitefly","Mites"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "mL/100L",
          stage: "During pest activity; part of IPM program",
          note: "Grazing withholding applies; consult label. Can reduce pesticide inputs in cotton."
        }
      ]
    },
    {
      crop: "Mango",
      cropList: ["Mango"],
      weeds: [
          { weed: "Mango Seed Weevil", pestList: ["Mango Seed Weevil"], states: ["All"], rate: "10", unit: "mL/100L", rateText: "10ml/100L", notes: "WHP: 3 days. no more then 2 applications per season." },
          { weed: "Mango shoot looper", pestList: ["Mango Shoot Looper"], states: ["All"], rate: "10", unit: "mL/100L", rateText: "10ml/100L", notes: "WHP: 3 days. Do not apply over flowers. No more then 2 appliocations per year. Add a non ionic surfactant at 10ml/100L" }
      ]
    },
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      weeds: [
          { weed: "Mango shoot looper", pestList: ["Mango Shoot Looper"], states: ["All"], rate: "10", unit: "mL/100L", rateText: "10ml/100L", notes: "WHP: 3 days. Do not apply over flowers. No more then 2 appliocations per year. Add a non ionic surfactant at 10ml/100L" }
      ]
    }
    
  ],

  restraints: [
    "May irritate eyes",
    "Avoid contact with eyes and skin",
    "Do not breathe spray mist",
    "Use appropriate PPE during handling"
  ],

  compatibility: {
    compatible:   ["Most fungicides", "Many insecticides"],
    incompatible: [],
    notes:        ["Check all tank mix product labels before combining"]
  },

  withholding: {
    harvest: "Varies by crop (3-21 days). Consult label for specific crop withholding periods.",
    grazing: "Cotton: consult label for grazing restrictions."
  },

  surfactant:     "A surfactant/wetter may improve spray coverage and efficacy.",
  sprayerCleanup: "Rinse sprayer thoroughly with water after use. Ensure adequate agitation during application."
};
