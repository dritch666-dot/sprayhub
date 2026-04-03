// ─────────────────────────────────────────────────────────────────────────────
// MIRAVIS DUO FUNGICIDE — Label Data
// Fungicide | Suspension Concentrate
// Source: Syngenta_MIRAVIS_Duo_Fungicide_Label.pdf
// APVMA Approval No: 91192/131168
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['syngentamiravis'] = {
  name:             "Miravis Duo Fungicide",
  company: "Syngenta",

  category:         "Fungicides",
  activeIngredient: "125 g/L Difenoconazole + 75 g/L Pydiflumetofen",
  group:            "Group 3 and Group 7 Fungicide",
  modeOfAction:     "Combination of sterol biosynthesis inhibitor (triazole) and succinate dehydrogenase inhibitor (SDHI); broad-spectrum preventative fungicide",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#1a4a2e",
  apvma:            "91192",
  labelPdf:         "Source labels/Syngenta_MIRAVIS_Duo_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/MIRAVIS_DUO_FUNGICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Early blight", "Powdery mildew", "Cercospora leaf spot", "Gummy stem blight", "Late leaf spot"],
    timing: ["Preventative program"]
  },

  crops: [
    {
      crop: "Fruiting Vegetables (tomato, capsicum, eggplant)",
      cropList: ["Fruiting Vegetables","Tomato","Capsicum","Eggplant"],
      weeds: [
        { weed: "Early blight, powdery mildew, cercospora leaf spot", pestList: ["Early Blight", "Powdery Mildew", "Cercospora Leaf Spot"], states: ["All"], rate: "80", rateMax: "100", unit: "mL/100L", stage: "Preventative", note: "Trellised crops dilute; non-trellised 800-1000 mL/ha; allow 7-10 days between applications" }
      ]
    },
    {
      crop: "Cucurbits (cucumber, melon, pumpkin, watermelon, zucchini)",
      cropList: ["Cucurbits","Cucumber","Melon","Pumpkin","Watermelon","Zucchini"],
      weeds: [
        { weed: "Powdery mildew, gummy stem blight, alternaria leaf spot, cercospora leaf spot", pestList: ["Powdery Mildew", "Gummy Stem Blight", "Alternaria Leaf Spot", "Cercospora Leaf Spot"], states: ["All"], rate: "80", rateMax: "100", unit: "mL/100L", stage: "Preventative", note: "Trellised crops dilute; non-trellised 800-1000 mL/ha" }
      ]
    },
    {
      crop: "Root Vegetables (potato, carrot, beetroot, parsnip, radish, swede)",
      cropList: ["Root Vegetables","Potato","Carrot","Beetroot","Parsnip","Radish","Swede"],
      weeds: [
        { weed: "Early blight, powdery mildew, cercospora leaf spot", pestList: ["Early Blight", "Powdery Mildew", "Cercospora Leaf Spot"], states: ["All"], rate: "700", rateMax: "1000", unit: "mL/ha", stage: "Preventative", note: "Apply when conditions favour disease development; allow 7-10 days between applications" }
      ]
    },
    {
      crop: "Celery",
      cropList: ["Celery"],
      weeds: [
        { weed: "Cercospora leaf spot, septoria leaf spot", pestList: ["Cercospora Leaf Spot", "Septoria Leaf Spot"], states: ["All"], rate: "750", rateMax: "1000", unit: "mL/ha", stage: "Preventative", note: "Allow 7-10 days between applications; apply before symptom onset" }
      ]
    },
    {
      crop: "Peanuts",
      cropList: ["Peanuts"],
      weeds: [
        { weed: "Early leaf spot, late leaf spot, net blotch, rust (suppression)", pestList: ["Early Leaf Spot", "Late Leaf Spot", "Net Blotch", "Rust"], states: ["All"], rate: "300", rateMax: "600", unit: "mL/ha", stage: "Preventative", note: "Apply at 21-28 day intervals; maximum 2 sequential Group 7 fungicides before switching" }
      ]
    }
  ],

  restraints: [
    "For PROFESSIONAL use only",
    "DO NOT apply to nursery crops",
    "DO NOT apply with aircraft except potatoes and processing tomatoes",
    "DO NOT apply if heavy rains forecast within 3 days",
    "DO NOT irrigate to point of environmental runoff for 3 days after application",
    "DO NOT apply more than 2 applications per crop per year",
    "Spray droplets not smaller than MEDIUM spray droplet size",
    "DO NOT apply when wind speed outside 3-20 km/h",
    "Highly toxic to fish and aquatic organisms"
  ],

  compatibility: {
    compatible:   ["Range of commonly used fungicides, insecticides and fertilisers"],
    incompatible: [],
    notes:        ["Always consult Syngenta before mixing with other products; test compatibility before commercial quantities"]
  },

  withholding: {
    harvest: "Fruiting vegetables/celery/cucurbits 1 day; potatoes/root vegetables 7 days; peanuts 14 days",
    grazing: "Potatoes/root vegetables no grazing; peanuts 14 days; do not feed peanut forage to lactating dairy animals; livestock on treated peanut fodder hold 6 weeks before slaughter"
  },

  surfactant:     "Wetting agent not required; water is sufficient for mixing",
  sprayerCleanup: "Triple rinse containers before disposal; add rinsings to spray tank"
};
