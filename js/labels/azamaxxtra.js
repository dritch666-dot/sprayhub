// ─────────────────────────────────────────────────────────────────────────────
// AZAMAX XTRA INSECTICIDE — Label Data
// Extract | Group UN Insecticide
// Source: Duluxgroup_Azamax_Xtra_Insecticide_Label.pdf
// APVMA Approval No: 90426/143138
// Duluxgroup / OCP
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['azamaxxtra'] = {
  name:             "AzaMax Xtra Insecticide",
  company: "OCP",

  category:         "Insecticides",
  activeIngredient: "11.82 g/L Azadirachtin A & B (from 29.55 g/L Azadirachta indica extract)",
  group:            "Group UN Insecticide",
  modeOfAction:     "Neem-based biopesticide - growth regulator and repellent for insect pests",
  formulation:      "Extract",
  color:            "#b54708",
  apvma:            "90426",
  labelPdf:         "Source labels/Duluxgroup_Azamax_Xtra_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/AZAMAX_INSECTICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Insecticide",
    target: ["Mites", "Whitefly", "Aphids", "Caterpillars", "Beetles"],
    timing: ["Regular schedule during active pest"]
  },

  crops: [
    {
      crop: "Ornamentals and Nursery plants — Spray application",
      cropList: ["Ornamentals And Nursery Plants","Spray Application"],
      weeds: [
        { weed: "Two-Spotted Mites, Whitefly, Aphids, Western flower thrips", pestList: ["Two-Spotted Mites","Whitefly","Aphids","Western Flower Thrips"], states: ["All"], rate: "200", rateMax: "300", unit: "mL/100L", stage: "Early infestation", note: "Regularly monitor plants for presence of pests. Use a 7 to 10 day spray regime when pests are present. Multiple applications (3-5) may be required." }
      ]
    },
    {
      crop: "Potting soil (for floriculture and ornamentals only)",
      cropList: ["Potting Soil","Floriculture","Ornamentals"],
      weeds: [
        { weed: "Fungus Gnats, African black beetle", pestList: ["Fungus Gnats","African Black Beetle"], states: ["All"], rate: "30", unit: "mL/10L water", stage: "Pre-potting or established plants", note: "Apply as a soil drench using approximately 1 litre mixture per 8 litres potting soil." }
      ]
    }
  ],

  restraints: [
    "DO NOT graze treated turf or lawn",
    "DO NOT feed turf or lawn clippings from treated areas to poultry or livestock",
    "Test on sensitive plant species (ferns, poinsettias, African violets) before broad application",
    "Minor phytotoxic effects may occur on some species",
    "DO NOT apply during extreme heat stress",
    "DO NOT apply in strong sunlight for best results"
  ],

  compatibility: {
    compatible:   ["Most fungicides", "Approved fertilizers"],
    incompatible: ["Strong alkaline products", "Copper-based fungicides"],
    notes:        ["Test on small plant area first", "Organic-approved product", "Not compatible with IPM using beneficial arthropods"]
  },

  withholding: {
    harvest: "Non-food use only",
    grazing: "DO NOT graze treated turf or allow livestock to feed on clippings"
  },

  surfactant:     "Spreader-sticker recommended to improve coverage and adhesion",
  sprayerCleanup: "Rinse spray equipment with clean water after each use. Triple-rinse before storage."
};
