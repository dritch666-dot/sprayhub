// ─────────────────────────────────────────────────────────
// Switch Fungicide — Label Data
// Groups 9 + 12 (Fungicides) | Water Dispersible Granule
// Source: Syngenta_Switch_Fungicide_Label.pdf
// APVMA Approval No: 51797
// Syngenta
// ─────────────────────────────────────────────────────────
productDatabase['productnameswitch'] = {

  name:             "Switch Fungicide",
  company: "Syngenta",


  category:         "Fungicides",
  activeIngredient: "375 g/kg Cyprodinil + 250 g/kg Fludioxonil",
  group:            "Groups 9 + 12 (Fungicides)",
  modeOfAction:     "Cyprodinil: systemic (penetrates); Fludioxonil: surface contact; broad spectrum",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#065f46",
  apvma:            "51797",
  labelPdf:         "Source labels/Syngenta_Switch_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/SYNGENTA_SWITCH_FUNGICIDE.pdf",
  signalHeading:    "Caution",

  classification: {
    type: "Fungicide",
    target: ["Botrytis", "Brown Rot", "Monilinia", "Alternaria", "Leaf Spot", "Powdery Mildew"],
    timing: ["Preventive", "Curative"]
  },

  crops: [
    {
      crop: "Strawberries",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Botrytis, Leaf Blotch",
          pestList: ["Botrytis","Leaf Blotch"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "g/100L",
          stage: "Start at first disease sign; repeat 7-10 days if needed",
          note: "3 day harvest withholding. Max 3 apps per season. Excellent Botrytis control."
        }
      ]
    },
    {
      crop: "Grapes",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Powdery Mildew, Botrytis",
          pestList: ["Powdery Mildew","Botrytis"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "g/100L",
          stage: "Preventive from growth stage; curative applications 7-10 day interval",
          note: "4 week harvest withholding. Do NOT feed treated grape forage to lactating dairy. Max 4-5 apps."
        }
      ]
    },
    {
      crop: "Apples",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Sooty Blotch, Flyspeck, Scab",
          pestList: ["Sooty Blotch","Flyspeck","Scab"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "g/100L",
          stage: "Preventive program from petal fall",
          note: "14 day harvest withholding. Do NOT feed treated pasture to livestock. Max 5 apps."
        }
      ]
    },
    {
      crop: "Cucumbers",
      cropList: ["Cucumbers"],
      weeds: [
        {
          weed: "Powdery Mildew, Downy Mildew",
          pestList: ["Powdery Mildew","Downy Mildew"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "g/100L",
          stage: "7-10 day interval; start early",
          note: "3 day harvest withholding. Max 3-4 apps per season."
        }
      ]
    },
    {
      crop: "Capsicums, Alliums, Legumes, Leafy Vegetables",
      cropList: ["Capsicums","Alliums","Legumes","Leafy Vegetables"],
      weeds: [
        {
          weed: "Disease control (various fungal diseases)",
          pestList: ["Disease Control"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "g/100L",
          stage: "As disease pressure dictates",
          note: "7 day harvest withholding. Do NOT feed treated forage to lactating dairy (green beans/peas)."
        }
      ]
    },
    {
      crop: "Cut Flowers, Nursery Stock, Ornamentals",
      cropList: ["Cut Flowers","Nursery Stock","Ornamentals"],
      weeds: [
        {
          weed: "Fungal disease control",
          pestList: ["Fungal Disease Control"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "g/100L",
          stage: "Preventive regime",
          note: "No harvest withholding (non-food use). Apply as needed."
        }
      ]
    },
    {
      crop: "Avocado",
      cropList: ["Avocado"],
      weeds: [
          { weed: "Anthracnose", pestList: ["Anthracnose"], states: ["All"], rate: "80", unit: "g/100L", rateText: "80g/100L", notes: "No more then 4 applications per year." }
      ]
    },
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      weeds: [
          { weed: "Anthracnose, pepper spot", pestList: ["Anthracnose", "Pepper Spot"], states: ["All"], rate: "80-100", unit: "g/", rateText: "80-100g/100L", notes: "WHP: 14 days. no more then 4 applications per season" }
      ]
    },
    {
      crop: "Basil",
      cropList: ["Basil"],
      weeds: [
          { weed: "Alternaria Leaf Spot, Botrytis Leaf blight, Fusarium blight", pestList: ["Alternaria Leaf Spot", "Botrytis Leaf Blight", "Fusarium Blight"], states: ["All"], rate: "0.8-1", unit: "kg/ha", rateText: "0.8-1kg/ha", notes: "WHP: 7 Days. Max 2 applications" }
      ]
    }
    
  ],

  restraints: [
    "Avoid contact with eyes and skin",
    "Do not inhale dust",
    "Use proper hand washing after handling",
    "Check export MRLs before using on export crops"
  ],

  compatibility: {
    compatible:   ["Most insecticides", "Some other fungicides (check labels)"],
    incompatible: [],
    notes:        ["Read all tank mix product labels"]
  },

  withholding: {
    harvest: "Varies by crop: Strawberries/Cucumbers 3 days, Capsicums/Alliums/Legumes 7 days, Apples/Grapes 14 days/4 weeks, Nursery stock NIL.",
    grazing: "Do NOT feed treated forage from green beans/peas/apples to lactating dairy producing milk for human consumption."
  },

  surfactant:     "A spray additive/wetter may improve coverage in some situations.",
  sprayerCleanup: "Rinse sprayer thoroughly with water after use. Clean equipment daily if used multiple times."
};
