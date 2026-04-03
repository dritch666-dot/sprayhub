// ─────────────────────────────────────────────────────────────────────────────
// RANMAN 400 SC FUNGICIDE — Label Data
// Fungicide | Suspension Concentrate
// Source: AgNova_Ranman_400_SC_Fungicide.pdf
// APVMA Approval No: 66411/142290
// AgNova Technologies
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['uplranman400sc'] = {
  name:             "AgNova Ranman 400 SC Fungicide",
  company: "UPL",

  category:         "Fungicides",
  activeIngredient: "400 g/L Cyazofamid",
  group:            "Group 21 Fungicide",
  modeOfAction:     "Mitochondrial electron transport inhibitor",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#163547",
  apvma:            "66411",
  labelPdf:         "Source labels/UPL_Ranman_400_Sc_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/RANMAN_400_SC_FUNGICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Late blight", "Downy mildew", "White blister"],
    timing: ["7-10 day intervals"]
  },

  crops: [
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        { weed: "Late blight", pestList: ["Late Blight"], states: ["All"], rate: "150", rateMax: "200", unit: "mL/ha", stage: "Disease pressure", note: "7-10 day interval; max 6 applications per season; max 3 consecutive applications" }
      ]
    },
    {
      crop: "Broccoli",
      cropList: ["Broccoli"],
      weeds: [
        { weed: "White Blister", pestList: ["White Blister"], states: ["All"], rate: "150", rateMax: "200", unit: "mL/ha", stage: "Disease pressure", note: "7-10 day interval; max 6 applications per season; max 3 consecutive applications" }
      ]
    },
    {
      crop: "Brassicas (Cabbage, Broccoli seedlings)",
      cropList: ["Brassicas","Cabbage","Broccoli"],
      weeds: [
        { weed: "Downy mildew", pestList: ["Downy Mildew"], states: ["All"], rate: "150", rateMax: "200", unit: "mL/ha", stage: "Disease development", note: "7-10 day interval; can tank-mix with organosilicone surfactant; max 6 applications per season" }
      ]
    },
    {
      crop: "Spinach",
      cropList: ["Spinach"],
      weeds: [
        { weed: "Downy mildew", pestList: ["Downy Mildew"], states: ["All"], rate: "200", rateMax: "200", unit: "mL/ha", stage: "Disease pressure", note: "As directed post-transplant application; max 6 applications per crop" }
      ]
    },
    {
      crop: "Poppies",
      cropList: ["Poppies"],
      weeds: [
        { weed: "Systemic downy mildew", pestList: ["Systemic Downy Mildew"], states: ["All"], rate: "200", rateMax: "200", unit: "mL/ha", stage: "4-leaf to row closure", note: "Apply with Activator Surfactant at 100 mL/100L; max 4 applications per crop" }
      ]
    },
    {
      crop: "Nursery stock (non-food)",
      cropList: ["Nursery Stock"],
      weeds: [
        { weed: "Pythium and Phytophthora diseases", pestList: ["Pythium and Phytophthora Diseases"], states: ["All"], rate: "15", rateMax: "40", unit: "mL/100L", stage: "Disease pressure", note: "Foliar or soil surface spray; max 2 treatments per crop with 14-21 days between sprays" }
      ]
    },
    {
      crop: "Basil",
      cropList: ["Basil"],
      weeds: [
        { weed: "Downy mildew", pestList: ["Downy Mildew"], states: ["All"], rate: "175", rateMax: "200", unit: "mL/ha", stage: "Before disease appearance", note: "Max 6 applications per crop; max 3 consecutive applications; use non-ionic surfactant" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply through irrigation equipment",
    "DO NOT use on forage brassicas",
    "DO NOT allow drift onto sensitive vegetation",
    "DO NOT apply unless wind 3-20 km/hr",
    "DO NOT apply during temperature inversion"
  ],

  compatibility: {
    compatible:   ["Organosilicone surfactant"],
    incompatible: [],
    notes:        ["Contact AgNova Technologies for product compatibility information"]
  },

  withholding: {
    harvest: "Potatoes: 7 days; Spinach: 3 days; Basil: 1 day; Brassicas/Poppies: Not required",
    grazing: "DO NOT graze or feed treated crops to animals"
  },

  surfactant:     "Organosilicone surfactant (optional but recommended); Activator Surfactant for poppies",
  sprayerCleanup: "Triple-rinse containers before disposal. Do not dispose of undiluted chemicals on-site."
};
