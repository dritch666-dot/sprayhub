// ─────────────────────────────────────────────────────────────────────────────
// MICROTHIOL DISPERSS FUNGICIDE — Label Data
// Fungicide | Water Dispersable Granule
// Source: Microthiol_Disperss_Label.pdf
// APVMA Approval No: 51784/135806
// Nufarm
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['microthioldisperss'] = {
  name:             "Microthiol Disperss Fungicide",
  company: "Sulfur Mills",

  category:         "Fungicides",
  activeIngredient: "800 g/kg Sulphur",
  group:            "Group M2 Fungicide",
  modeOfAction:     "Multi-site activity - sulfur miticide and insecticide",
  formulation:      "Water Dispersable Granule (WG)",
  color:            "#FFD700",
  apvma:            "51784",
  labelPdf:         "Source labels/Microthiol_Disperss_Fungicide_Label.pdf",
  sdsPdf:         "SDS Labels/MICROTHIOL_DISPERSS_WETTABLE_SULPHUR_FUNGICIDE,_MITICIDE,_INSECTICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Powdery mildew", "Mites", "Rust", "Scale insects"],
    timing: ["7-14 day intervals"]
  },

  crops: [
    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
        { weed: "Brown Citrus Rust Mite (Tegolophus australis)", pestList: ["Brown Citrus Rust Mite"], states: ["NSW", "Vic", "Qld", "SA", "WA"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Spring or Autumn", note: "DO NOT use in hot weather; leave 3 weeks between oil and sulfur sprays" },
        { weed: "Citrus bud mite (Eriophyes sheldoni)", pestList: ["Citrus bud mite"], states: ["NSW", "Vic", "Qld", "SA", "WA"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Spring or Autumn", note: "Use higher rates for heavy infestations" },
        { weed: "Citrus Rust Mite (Phyllocoptruta oleivora)", pestList: ["Citrus Rust Mite"], states: ["NSW", "Vic", "Qld", "SA", "WA"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Spring or Autumn", note: "" },
        { weed: "Citrus bud mite (Tasmania)", pestList: ["Citrus bud mite"], states: ["Tasmania"], rate: "200", rateMax: "300", unit: "g/100L", stage: "Spring or Autumn", note: "" }
      ]
    },
    {
      crop: "Grapevines",
      cropList: ["Grapevines", "Grapes"],
      weeds: [
        { weed: "Powdery mildew (Uncinula necator)", pestList: ["Powdery Mildew"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Before and during disease development", note: "DO NOT apply when temperature >30°C and humidity >75%; use dilute or concentrate spraying" },
        { weed: "Mites", pestList: ["Mites"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Spring or Autumn", note: "Leave 3 weeks between oil sprays" }
      ]
    },
    {
      crop: "Pome and Stone Fruit",
      cropList: ["Apple", "Pear", "Peach", "Plum", "Apricot", "Nectarine"],
      weeds: [
        { weed: "Powdery mildew (Podosphaera clandestina, Venturia inaequalis)", pestList: ["Powdery Mildew"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Pre-bloom to post-bloom", note: "DO NOT use on sulfur-sensitive apple and pear varieties in hot weather" },
        { weed: "Scale insects", pestList: ["Scale insects"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Late Winter to Spring", note: "" },
        { weed: "Mites", pestList: ["Mites"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Spring", note: "" }
      ]
    },
    {
      crop: "Kiwifruit",
      cropList: ["Kiwifruit", "Kiwi"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Disease development", note: "DO NOT use in hot weather (>24°C)" }
      ]
    },
    {
      crop: "Cucurbits",
      cropList: ["Cucumber", "Melon", "Pumpkin", "Squash", "Zucchini"],
      weeds: [
        { weed: "Powdery mildew (Sphaerotheca fuliginosa)", pestList: ["Powdery Mildew"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Disease development", note: "DO NOT apply when temperature >24°C" }
      ]
    },
    {
      crop: "Tomatoes and Peppers",
      cropList: ["Tomatoes", "Peppers", "Capsicums", "Chillies"],
      weeds: [
        { weed: "Powdery mildew (Oidiopsis taurica)", pestList: ["Powdery Mildew"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Disease development", note: "DO NOT apply when temperature >24°C" }
      ]
    },
    {
      crop: "Rosaceous Vegetables",
      cropList: ["Parsnip", "Radish", "Swede", "Turnip"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Disease development", note: "DO NOT apply when temperature >24°C" }
      ]
    },
    {
      crop: "Papaws",
      cropList: ["Papaws", "Papayas"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["Qld", "NSW", "WA"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Disease development", note: "DO NOT use in hot weather (>24°C)" }
      ]
    },
    {
      crop: "Ornamentals",
      cropList: ["Ornamentals", "Roses", "Deciduous trees"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Disease development", note: "" },
        { weed: "Rust", pestList: ["Rust"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Disease development", note: "" },
        { weed: "Mites", pestList: ["Mites"], states: ["All"], rate: "400", rateMax: "500", unit: "g/100L", stage: "Infestation", note: "" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply within 3 weeks of an oil spray except when mixing canola oil as woolly bud spray on grapevines",
    "DO NOT apply in combination with spraying oils except to deciduous fruit trees in dormant period",
    "DO NOT use in hot weather on citrus, kiwifruit or sulfur-sensitive apple and pear varieties",
    "DO NOT use when temperature >30°C and humidity >75% on grapevines; >24°C on other crops",
    "DO NOT allow spray mixture to sit overnight",
    "Use mechanical or hydraulic agitation, not air agitation"
  ],

  compatibility: "May be combined with registered Group M2 fungicides. Tank mix compatible with many fungicides and insecticides.",

  mixing: "Add directly to water in spray tank with agitators running. Maintain agitation throughout spraying. Do not allow mixture to sit overnight.",

  withholding: {
    harvest: "Variable by crop - consult specific crop directions",
    grazing: "Variable by crop - consult specific crop directions"
  },

  surfactant:     "Not required; water dispersable granule formulation",
  sprayerCleanup: "Wash equipment thoroughly with clean water after use"
};
