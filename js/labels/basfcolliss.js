// ─────────────────────────────────────────────────────────────────────────────
// COLLISS FUNGICIDE — Label Data
// Suspension Concentrate (SC) | Group 7 11 Fungicides
// Source: Basf_Colliss_Fungicide_Label.pdf
// APVMA Approval No: 62695/1-10/0610
// Crop Care Australasia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['basfcolliss'] = {
  name:             "COLLISS Fungicide",
  company: "BASF",

  category:         "Fungicides",
  activeIngredient: "200 g/L Boscalid, 100 g/L Kresoxim-methyl",
  group:            "Group 7 11 Fungicides",
  modeOfAction:     "SDHI and Strobilurin combination for powdery mildew control in cucurbits",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#be185d",
  apvma:            "62695/1-10/0610",
  labelPdf:         "Source labels/Basf_Colliss_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/Colliss_Fungicide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Powdery mildew"],
    timing: ["7-10 day intervals"]
  },

  crops: [
    {
      crop: "Cucurbits (field grown) — Powdery mildew control",
      cropList: ["Cucurbits (Field Grown)"],
      weeds: [
        { weed: "Powdery mildew (Podosphaera xanthii)", pestList: ["Powdery Mildew"], states: ["All"], rate: "250-500", rateMax: "500", unit: "mL/ha", stage: "Before established", note: "Two consecutive applications 7-10 days apart, maximum 4 per year, 2 consecutive maximum" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by aircraft",
    "For use in field grown cucurbits only",
    "DO NOT apply to glasshouse/tunnel house grown cucurbit crops",
    "DO NOT apply more than 4 applications of COLLISS per paddock per year",
    "For resistance management, DO NOT apply more than 2 applications of COLLISS per crop",
    "DO NOT apply if there are aquatic and wetland areas including aquacultural ponds, surface streams and rivers within 10 metres downwind"
  ],

  compatibility: {
    compatible:   ["Du-Wett Low Volume Application Spreader"],
    incompatible: [],
    notes:        ["Du-Wett may assist performance at all spray volumes", "Contact supplier for compatibility information"]
  },

  withholding: {
    harvest: "7 days after application",
    grazing: "Not applicable"
  },

  surfactant:     "Du-Wett Low Volume Application Spreader recommended, especially at reduced water volumes",
  sprayerCleanup: "Half-fill spray tank with water, add product, agitate thoroughly, then add remainder of water. Apply by boom equipment using 250-500 L/ha"
};
