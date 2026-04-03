// ─────────────────────────────────────────────────────────────────────────────
// ABSOLVE PERACETIC ACID BIOCIDE — Label Data
// Liquid | Biocide for post-harvest applications
// Source: Colin_Campbell_chemicals_Campbell_Absolve_Peracetic_Acid_Biocide_Label.txt
// APVMA Approval No: 87664/125254
// Colin Campbell (Chemicals) Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['campbellabsolve'] = {
  name:             "Absolve Peracetic Acid Biocide",
  company: "Campbell",

  category:         "Fungicides",
  activeIngredient: "160 g/L Peroxyacetic Acid, 110 g/L Hydrogen Peroxide",
  group:            "Biocide",
  modeOfAction:     "Peracetic acid oxidative microbicide for bacterial growth control in process water",
  formulation:      "Liquid Concentrate",
  color:            "#1d4ed8",
  apvma:            "87664/125254",
  labelPdf:         "Source labels/Colin_Campbell_chemicals_Campbell_Absolve_Peracetic_Acid_Biocide_Label.pdf",
  sdsPdf:           "SDS Labels/CAMPBELL_ABSOLVE_PERACETIC_ACID_BIOCIDE.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Fungicide",
    target: ["Bacterial growth"],
    timing: ["45 seconds minimum contact"]
  },

  crops: [
    {
      crop: "Fruit and Vegetables (post-harvest) — Bacterial control in process water",
      cropList: ["Fruit And Vegetables (Post-Harvest)","Bacterial Control In Process Water"],
      weeds: [
        { weed: "Bacterial growth in process water", pestList: ["Bacterial Growth in Process Water"], states: ["All"], rate: "48", rateMax: "48", unit: "mL/100L", stage: "Post-harvest processing", note: "Spray or submerge fruit and vegetables, minimum 45 seconds contact time" }
      ]
    }
  ],

  restraints: [
    "For post-harvest processing use only",
    "Ensure adequate draining time after treatment",
    "Not for pre-harvest application"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Biocide for controlling bacterial growth in post-harvest treatment water"]
  },

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "Not applicable - post-harvest use only"
  },

  surfactant:     "Use as aqueous solution for spraying or submersion",
  sprayerCleanup: "Rinse equipment after use. Do not dispose of undiluted chemicals on site"
};
