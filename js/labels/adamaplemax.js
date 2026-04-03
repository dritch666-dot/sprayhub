// ─────────────────────────────────────────────────────────────────────────────
// PLEMAX Insecticide (Quali-Pro® Twister®) — Label Data
// Suspension Concentrate | Group 15 22A Insecticide
// Source: Adama_Plemax_Insecticide_Label.pdf
// APVMA Approval No: 88077/138324
// Adama Australia (distributed by)
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['adamaplemax'] = {
  name:             "PLEMAX Insecticide (Quali-Pro® Twister®)",
  company: "Adama",

  category:         "Insecticides",
  activeIngredient: "320 g/L Indoxacarb (75:25) + 80 g/L Novaluron (as Suspension Concentrate)",
  group:            "Group 15 + 22A Insecticide",
  modeOfAction:     "Sodium channel blocker (Indoxacarb, Group 22A) + Insect Growth Regulator / benzoylurea (Novaluron, Group 15)",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#65a30d",
  apvma:            "88077/138324",
  labelPdf:         "Source labels/Adama_Plemax_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/Plemax_Insecticide.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Insecticide",
    target: ["Argentine Stem Weevil", "African Black Beetle", "Billbug", "Cutworm", "Armyworm", "Sod Webworm"],
    timing: ["Spring", "Summer", "When pest populations monitored and threshold reached"]
  },

  crops: [
    {
      crop: "Turf — Argentine Stem Weevil",
      cropList: ["Turf"],
      weeds: [
        { weed: "Argentine Stem Weevil (Listronotus bonariensis)", pestList: ["Argentine Stem Weevil"], states: ["All"], rate: "3", rateMax: "", unit: "L/ha", stage: "Late September to January", note: "Monitor adult activity through spring and early summer. Spray when peak numbers observed or when first visual symptoms appear. Apply up to 3 applications per season. Irrigate with at least 3 mm of water commencing within 1 hour of application. DO NOT irrigate to point of runoff." }
      ]
    },
    {
      crop: "Turf — African Black Beetle",
      cropList: ["Turf"],
      weeds: [
        { weed: "African Black Beetle (Heteronychus arator)", pestList: ["African Black Beetle"], states: ["All"], rate: "3", rateMax: "", unit: "L/ha", stage: "Late September to mid-November", note: "Apply at peak egg hatch or when small larvae are present. Ensure product placement as close to soil surface as possible. Apply up to 3 applications per season. Irrigate with at least 3 mm water within 1 hour of application." }
      ]
    },
    {
      crop: "Turf — Billbug (La Plata Weevil)",
      cropList: ["Turf"],
      weeds: [
        { weed: "Billbug / La Plata Weevil (Sphenophorus brunnipennis)", pestList: ["Billbug / La Plata Weevil"], states: ["All"], rate: "3", rateMax: "", unit: "L/ha", stage: "Late November to early December", note: "Monitor adult activity in late spring and early summer. Apply when numbers peak or when small larvae (4 mm) found in thatch or surface soil. Apply up to 3 applications per season. Irrigate with at least 3 mm water within 1 hour of application." }
      ]
    },
    {
      crop: "Turf — Lepidoptera",
      cropList: ["Turf","Lepidoptera"],
      weeds: [
        { weed: "Cutworm, Armyworm, Sod Webworm", pestList: ["Cutworm", "Armyworm", "Sod Webworm"], states: ["All"], rate: "3", rateMax: "", unit: "L/ha", stage: "When pests present", note: "Apply after careful monitoring of pest populations to determine need based on locally determined thresholds. For sensitive turf species (e.g. Buffalo), test small areas for turf safety before large-scale application. Apply up to 3 applications per season." }
      ]
    },
    {
      crop: "Capsicum",
      cropList: ["Capsicum"],
      weeds: [
          { weed: "Cotton Bollworm, Native budworm, potato moth (tomato leafminer)", pestList: ["Cotton Bollworm", "Native Budworm", "Potato Moth (tomato Leafminer)"], states: ["All"], rate: "20", unit: "mL/100L", rateText: "20ml/100L or 200-300ml/ha", notes: "WHP: 3 days. Do not apply if heavy rain is forecasted within 3 days" }
      ]
    },
    {
      crop: "Tomato",
      cropList: ["Tomato"],
      weeds: [
          { weed: "Cotton bollworm, Native budworm and Potato moth (tobacco leafminer)", pestList: ["Cotton Bollworm", "Native Budworm and Potato Moth (tobacco Leafminer)"], states: ["All"], rate: "200-300", unit: "mL/ha", rateText: "200-300ml/ha", notes: "WHP: 3 days. no more then 3 applications per crop. add a wetter" }
      ]
    }
    
  ],

  restraints: [
    "DO NOT apply if heavy rains or storms are forecast within 3 days",
    "DO NOT irrigate to point of runoff for at least 3 days after application",
    "DO NOT apply by aircraft",
    "FOR PROFESSIONAL USE ONLY",
    "DO NOT apply by spraying equipment carried on the back of the user",
    "DO NOT allow children up to 2 years of age to enter treated recreational turf areas for 9 days after application",
    "DO NOT apply unless wind speed is between 3 and 14 km/h at application site",
    "DO NOT apply under surface temperature inversion conditions (typically 1-2 hours before sunset to 1-2 hours after sunrise)",
    "DO NOT apply by boom sprayer unless spray droplets are not smaller than ULTRA COARSE category and minimum buffer zone distances are observed",
    "DO NOT graze treated turf or lawn; or feed turf/lawn clippings to poultry or livestock"
  ],

  compatibility: {
    compatible:   ["Contact Adama Australia representative for information on product compatibility"],
    incompatible: [],
    notes:        ["DO NOT premix or slurry. Add product directly to water in tank. Use only clean water."]
  },

  withholding: {
    harvest: "Not applicable (turf only)",
    grazing: "DO NOT GRAZE TREATED TURF OR LAWN; OR FEED TURF OR LAWN CLIPPINGS FROM ANY TREATED AREA TO POULTRY OR LIVESTOCK"
  },

  surfactant:     "A credible soil surfactant may improve performance. Preferably spray onto wet or dewy turf. Irrigate with at least 3 mm water within 1 hour of application.",
  sprayerCleanup: "Immediately following application, thoroughly clean all spray equipment using a specialist cleaning agent such as All Clear DS Spray Tank Cleaner and Decontaminator. Clean all other associated application equipment."
};
