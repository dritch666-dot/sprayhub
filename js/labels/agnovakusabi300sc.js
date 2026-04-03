// ─────────────────────────────────────────────────────────────────────────────
// KUSABI 300 SC FUNGICIDE — Label Data
// Fungicide | Suspension Concentrate
// Source: AgNova_Kusabi_300_SC_Fungicide.pdf
// APVMA Approval No: 68898/121767
// AgNova Technologies
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['agnovakusabi300sc'] = {
  name:             "AgNova Kusabi 300 SC Fungicide",
  company: "AgNova",

  category:         "Fungicides",
  activeIngredient: "300 g/L Pyriofenone",
  group:            "Group 50 Fungicide",
  modeOfAction:     "Actin disruption - fungicide",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#9f1239",
  apvma:            "68898",
  labelPdf:         "Source labels/AgNova_Kusabi_300_Sc_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/Kusabi_300_SC_Fungicide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Powdery mildew"],
    timing: ["7-10 day intervals"]
  },

  crops: [
    {
      crop: "Cucurbits (field)",
      cropList: ["Cucurbits"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "300", rateMax: "500", unit: "mL/ha", stage: "Disease pressure", note: "7-10 day interval; max 3 applications per crop" }
      ]
    },
    {
      crop: "Cucumbers (protected)",
      cropList: ["Cucumbers"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "50", rateMax: "50", unit: "mL/100L", stage: "Disease pressure", note: "7-10 day interval; max 3 applications per crop" }
      ]
    },
    {
      crop: "Grapevines",
      cropList: ["Grapevines"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "30", rateMax: "30", unit: "mL/100L", stage: "Disease pressure", note: "Dilute or concentrate spray; max 2 applications per crop; apply before EL31" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply with aircraft",
    "DO NOT apply through irrigation equipment",
    "DO NOT apply when wind < 3 or > 20 km/hr",
    "DO NOT apply during surface temperature inversion"
  ],

  compatibility: {
    compatible:   ["Du-Wett Low Volume Application Spreader"],
    incompatible: [],
    notes:        ["Not recommended for mixing with other products"]
  },

  withholding: {
    harvest: "Cucurbits: Not required; Grapevines: 5 weeks",
    grazing: "DO NOT graze or feed treated crops to animals"
  },

  surfactant:     "Du-Wett Low Volume Application Spreader optional",
  sprayerCleanup: "Triple rinse containers before disposal. Do not dispose of undiluted chemicals on-site."
};
