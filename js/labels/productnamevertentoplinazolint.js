// ─────────────────────────────────────────────────────────
// Vertento Plinazolin Technology — Label Data
// Group 30 (Peptide) | Suspension Concentrate
// Source: Syngenta_Vertento_Plinazolin_Technology_Insecticide_Label.pdf
// APVMA Approval No: 93995
// Syngenta
// ─────────────────────────────────────────────────────────
productDatabase['productnamevertentoplinazolint'] = {

  name:             "Vertento Plinazolin Technology",
  company: "Albaugh",


  category:         "Insecticides",
  activeIngredient: "95 g/L Plinazolin (peptide technology)",
  group:            "Group 30 (Peptide)",
  modeOfAction:     "Selective chitin synthesis inhibitor; peptide-based bioinsecticide",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#84cc16",
  apvma:            "93995",
  labelPdf:         "Source labels/Syngenta_Vertento_Plinazolin_Technology_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/SYNGENTA_VERTENTO_INSECTICIDE.pdf",
  signalHeading:    "Poison",

  classification: {
    type: "Insecticide",
    target: ["Caterpillars", "Leaf Beetles", "Leafminer", "Mites", "Thrips", "Whitefly"],
    timing: ["Curative"]
  },

  crops: [
    {
      crop: "Vegetables (Mixed Crops)",
      cropList: ["Vegetables"],
      weeds: [
        {
          weed: "Diamondback Moth, Caterpillars, Whitefly, Leafminers",
          pestList: ["Diamondback Moth","Caterpillars","Whitefly","Leafminers"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Early during pest activity; repeat 7-10 days",
          note: "Low harvest withholding (consult label). Novel peptide mode - useful for resistance management."
        }
      ]
    },
    {
      crop: "Grapes",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Leafrollers, Japanese Beetle",
          pestList: ["Leafrollers","Japanese Beetle"],
          states: ["All"],
          rate: "75",
          rateMax: "100",
          unit: "mL/100L",
          stage: "During pest pressure",
          note: "Harvest withholding applies; consult label. Can be tank-mixed with fungicides."
        }
      ]
    },
    {
      crop: "Stone Fruit & Pome Fruit",
      cropList: ["Stone Fruit & Pome Fruit"],
      weeds: [
        {
          weed: "Caterpillar species, Japanese Beetle",
          pestList: ["Caterpillar Species","Japanese Beetle"],
          states: ["All"],
          rate: "75",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Post-bloom during pest activity",
          note: "Harvest withholding varies by crop; consult label."
        }
      ]
    },
    {
      crop: "Berries & Other Fruits",
      cropList: ["Berries & Other Fruits"],
      weeds: [
        {
          weed: "Pest insects (consult label)",
          pestList: ["Pest Insects"],
          states: ["All"],
          rate: "50",
          rateMax: "100",
          unit: "mL/100L",
          stage: "During growing season as needed",
          note: "Low toxicity to beneficial insects. Compatible with IPM programs."
        }
      ]
    },
    {
      crop: "Avocado",
      cropList: ["Avocado"],
      weeds: [
          { weed: "Banana spotting bug and Fruit Spotting Bug", pestList: ["Banana Spotting Bug and Fruit Spotting Bug"], states: ["All"], rate: "5", unit: "mL/100", rateText: "5 mL/100 L + a non ionic surfacctant", notes: "WHP: 3 days. No more then 3 applications per year and not exceeding 150ml/ha per application" }
      ]
    },
    {
      crop: "Mango",
      cropList: ["Mango"],
      weeds: [
          { weed: "Banana spotting bug and Fruit Spotting Bug", pestList: ["Banana Spotting Bug and Fruit Spotting Bug"], states: ["All"], rate: "5", unit: "mL/100", rateText: "5 mL/100 L + a non ionic surfacctant", notes: "WHP: 3 days. No more then 3 applications per year and not exceeding 150ml/ha per application" }
      ]
    },
    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
          { weed: "Fuller's rose weevil, Kelly's citrus thrips and Light brown apple moth", pestList: ["Fuller\u2019s Rose Weevil", "Kelly\u2019s Citrus Thrips and Light Brown Apple Moth"], states: ["All"], rate: "5", unit: "mL/100", rateText: "5 mL/100 L + a non ionic surfacctant", notes: "WHP: 14 days. No more then 2 applications per year and not exceeding 200ml/ha per application" }
      ]
    },
    {
      crop: "Papaya",
      cropList: ["Papaya"],
      weeds: [
          { weed: "Suppresion of banana spotting bug", pestList: ["Suppresion of Banana Spotting Bug"], states: ["All"], rate: "75", unit: "ml/Ha", rateText: "75ml/Ha plus an adjuvent", notes: "WHP: 7 days. No more then 3 applications per year and not exceeding 150ml/ha per application" }
      ]
    }
    
  ],

  restraints: [
    "May cause eye irritation",
    "Avoid contact with eyes",
    "Use appropriate PPE",
    "Do not breathe spray mist"
  ],

  compatibility: {
    compatible:   ["Most fungicides", "Compatible with biological controls"],
    incompatible: [],
    notes:        ["Novel peptide mode; excellent resistance management tool", "Check tank mix product labels"]
  },

  withholding: {
    harvest: "Varies by crop (typically 1-7 days). Consult label for specific crop intervals.",
    grazing: "Consult label for pasture restrictions."
  },

  surfactant:     "A spreader/sticker may improve coverage on waxy foliage.",
  sprayerCleanup: "Rinse sprayer thoroughly with water after use."
};
