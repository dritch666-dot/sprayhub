// ─────────────────────────────────────────────────────────────────────────────
// OCP AZAMAX INSECTICIDE — Label Data
// Insecticide | Liquid Concentrate
// Source: OCP_AzaMax_Label.pdf
// APVMA Approval No: 61980
// OCP Group/EID Parry India Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['ocpazamax'] = {
  name:             "OCP AzaMax Insecticide",
  company: "OCP",

  category:         "Insecticides",
  activeIngredient: "11.82 g/L Azadirachtin A and B (29.55 g/L Azadirachta indica extract)",
  group:            "Group 22A Insecticide",
  modeOfAction:     "Biologically derived product from neem - disrupts insect growth and feeding",
  formulation:      "Liquid Concentrate (EC)",
  color:            "#1d2b64",
  apvma:            "61980",
  labelPdf:         "Source labels/OCP_AzaMax_Label.pdf",
  sdsPdf:           "SDS Labels/AZAMAX_INSECTICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Insecticide",
    target: ["Two-spotted mites", "Aphids", "Whitefly", "Fungus gnats"],
    timing: ["Consistent applications during pest activity"]
  },

  crops: [
    {
      crop: "Floriculture and ornamental plants",
      cropList: ["Floriculture And Ornamental Plants"],
      weeds: [
        { weed: "Two-spotted mites", pestList: ["Two-Spotted Mites"], states: ["All"], rate: "5-10", rateMax: "10", unit: "mL/100L", stage: "Pest activity", note: "Half fill tank; slowly add AzaMax; top up and agitate well. Consistent applications required." },
        { weed: "Aphids", pestList: ["Aphids"], states: ["All"], rate: "5-10", rateMax: "10", unit: "mL/100L", stage: "Pest activity", note: "For ornamental plants only. Consistent applications required." },
        { weed: "Whitefly", pestList: ["Whitefly"], states: ["All"], rate: "5-10", rateMax: "10", unit: "mL/100L", stage: "Pest activity", note: "Not for food-producing plants. Consistent applications required." }
      ]
    },
    {
      crop: "Potting soil",
      cropList: ["Potting Soil"],
      weeds: [
        { weed: "Fungus gnats", pestList: ["Fungus Gnats"], states: ["All"], rate: "5-10", rateMax: "10", unit: "mL/100L", stage: "Pest activity", note: "Biologically derived product - requires consistent applications during pest activity" }
      ]
    }
  ],

  restraints: [
    "DO NOT use on plants that produce food for human or animal consumption",
    "DO NOT contaminate streams, rivers or waterways"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["For ornamental use only - not suitable for edible crops"]
  },

  withholding: {
    harvest: "Not required when used as directed - ornamental use only",
    grazing: "Not applicable - ornamental use only"
  },

  surfactant:     "Mix thoroughly before use",
  sprayerCleanup: "Triple or pressure rinse containers. Do not burn empty containers or product."
};
