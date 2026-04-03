// ─────────────────────────────────────────────────────────────────────────────
// SYNGENTA MIRAVIS DUO FUNGICIDE — Label Data
// Fungicide | Suspension Concentrate
// Source: Syngenta_MIRAVIS_Duo_Fungicide_Label.pdf
// APVMA Approval No: 91192/131168
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['syngentamiravisduo'] = {
  name:             "Syngenta MIRAVIS Duo Fungicide",
  company: "Syngenta",

  category:         "Fungicides",
  activeIngredient: "125 g/L Difenoconazole, 75 g/L Pydiflumetofen",
  group:            "Group 3 and Group 7 Fungicide",
  modeOfAction:     "Sterol demethylation inhibitor and Succinate dehydrogenase inhibitor",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#1565C0",
  apvma:            "91192",
  labelPdf:         "Source labels/Syngenta_MIRAVIS_Duo_Fungicide_Label.pdf",
  sdsPdf:         "SDS Labels/MIRAVIS Duo SDS 0822.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Early blight", "Powdery mildew", "Leaf spot", "Gummy stem blight"],
    timing: ["7-10 day intervals"]
  },

  crops: [
    {
      crop: "Fruiting vegetables",
      cropList: ["Tomatoes", "Capsicums", "Peppers", "Chillies", "Eggplants"],
      weeds: [
        { weed: "Early blight (Alternaria spp.)", pestList: ["Early Blight"], states: ["All"], rate: "80", rateMax: "100", unit: "mL/100L", stage: "Disease development", note: "Trellised crops dilute spray; non-trellised 800-1000 mL/ha; max 2 applications per year" },
        { weed: "Powdery mildew (Leveillula taurica, Odiopsis spp., Oidium spp.)", pestList: ["Powdery Mildew"], states: ["All"], rate: "800", rateMax: "1000", unit: "mL/ha", stage: "Disease development", note: "Apply minimum 7-10 days between applications" },
        { weed: "Cercospora leaf spot (Cercospora spp.)", pestList: ["Cercospora Leaf Spot"], states: ["All"], rate: "800", rateMax: "1000", unit: "mL/ha", stage: "Disease development", note: "Use higher rate under high disease pressure" }
      ]
    },
    {
      crop: "Cucurbits",
      cropList: ["Asian melons", "Bitter melon", "Chokos", "Cucumber", "Gherkin", "Marrow", "Melons", "Pumpkin", "Squash", "Rockmelon", "Watermelon", "Zucchini"],
      weeds: [
        { weed: "Powdery mildew (Sphaerotheca fuliginea, Erysiphe spp., Podosphora xanthii)", pestList: ["Powdery Mildew"], states: ["All"], rate: "80", rateMax: "100", unit: "mL/100L", stage: "Disease development", note: "Trellised crops dilute; non-trellised 800-1000 mL/ha; max 2 applications per year" },
        { weed: "Gummy stem blight (Stagonosporopsis cucurbitacearum nee Didymella bryoniae)", pestList: ["Gummy Stem Blight"], states: ["All"], rate: "800", rateMax: "1000", unit: "mL/ha", stage: "Disease development", note: "Apply minimum 7-10 days between applications" },
        { weed: "Alternaria leaf spot (Alternaria spp.)", pestList: ["Alternaria Leaf Spot"], states: ["All"], rate: "800", rateMax: "1000", unit: "mL/ha", stage: "Disease development", note: "Use higher rate for high disease pressure" },
        { weed: "Cercospora leaf spot (Cercospora spp.)", pestList: ["Cercospora Leaf Spot"], states: ["All"], rate: "800", rateMax: "1000", unit: "mL/ha", stage: "Disease development", note: "" }
      ]
    },
    {
      crop: "Root vegetables",
      cropList: ["Beetroot", "Carrots", "Celeriac", "Parsnips", "Potatoes", "Radish", "Swedes", "Sweet potato", "Turnip"],
      weeds: [
        { weed: "Early blight (Alternaria spp.)", pestList: ["Early Blight"], states: ["All"], rate: "700", rateMax: "1000", unit: "mL/ha", stage: "Disease development", note: "Apply minimum 7-10 days between applications; max 2 applications per year" },
        { weed: "Powdery mildew (Erysiphe spp., Oidium spp.)", pestList: ["Powdery Mildew"], states: ["All"], rate: "700", rateMax: "1000", unit: "mL/ha", stage: "Disease development", note: "Group 7 max 2 sequential applications before switching fungicide groups" }
      ]
    },
    {
      crop: "Celery",
      cropList: ["Celery"],
      weeds: [
        { weed: "Cercospora leaf spot (Cercospora apii)", pestList: ["Cercospora Leaf Spot"], states: ["All"], rate: "750", rateMax: "1000", unit: "mL/ha", stage: "Disease development", note: "Apply minimum 7-10 days between applications; max 2 applications per year" },
        { weed: "Septoria leaf spot (Septoria apiicola)", pestList: ["Septoria Leaf Spot"], states: ["All"], rate: "750", rateMax: "1000", unit: "mL/ha", stage: "Disease development", note: "Use higher rate for high disease pressure" }
      ]
    },
    {
      crop: "Peanuts",
      cropList: ["Peanuts", "Groundnuts"],
      weeds: [
        { weed: "Early leaf spot (Mycosphaerella arachidis)", pestList: ["Early Leaf Spot"], states: ["All"], rate: "300", rateMax: "600", unit: "mL/ha", stage: "Disease development", note: "Apply minimum 7-10 days between applications; max 2 applications per year" },
        { weed: "Late leaf spot (Mycosphaerella berkeleyi)", pestList: ["Late Leaf Spot"], states: ["All"], rate: "300", rateMax: "600", unit: "mL/ha", stage: "Disease development", note: "Group 7 max 2 sequential applications" },
        { weed: "Net blotch (Didymella arachidicola)", pestList: ["Net Blotch"], states: ["All"], rate: "300", rateMax: "600", unit: "mL/ha", stage: "Disease development", note: "" },
        { weed: "Rust suppression (Puccinia arachidis)", pestList: ["Rust"], states: ["All"], rate: "300", rateMax: "600", unit: "mL/ha", stage: "Disease development", note: "Suppression only" }
      ]
    }
  ],

  restraints: [
    "For professional use only",
    "DO NOT apply to nursery crops",
    "DO NOT apply with aircraft except on potatoes and processing tomatoes",
    "DO NOT apply if heavy rains or storms forecast within 3 days",
    "DO NOT irrigate to point of runoff for at least 3 days after application",
    "DO NOT apply more than 2 sequential applications of Group 7 fungicides before switching",
    "Maximum 2 applications per crop per year",
    "DO NOT allow bystanders to contact spray cloud"
  ],

  compatibility: "Compatible with range of commonly used fungicides and insecticides. Test before tank mixing. Always consult Syngenta before mixing.",

  mixing: "Add to partly filled spray tank, then add water. Wetting agent not required. SC formulation mixes readily with water.",

  withholding: {
    harvest: "Fruiting vegetables, celery, cucurbits: 1 day; Potatoes, root and tuber vegetables: 7 days; Peanuts: 14 days",
    grazing: "Potatoes and root vegetables: DO NOT graze after application; Peanuts: DO NOT graze for 14 days; Peanut forage NOT for lactating dairy"
  },

  surfactant:     "Wetting agent not required",
  sprayerCleanup: "Clean equipment thoroughly before use"
};
