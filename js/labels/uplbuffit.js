// ─────────────────────────────────────────────────────────────────────────────
// BUFF-IT SPRAY ADJUVANT — Label Data
// Water Conditioner | Wetter and Spreader
// Source: Upl_Buffit_Water_Conditioner_Label.pdf
// APVMA Approval No: 60131/0206
// Victorian Chemical Company Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['uplbuffit'] = {
  name:             "Buff-It Spray Adjuvant",
  company: "UPL",

  category:         "Adjuvants / Surfactants",
  activeIngredient: "545 g/L Non-ionic Fatty Acid Ethoxylates, 383 g/L Propionic Acid, 192 g/L Triethanolamine",
  group:            "Water Conditioner",
  modeOfAction:     "pH buffering agent and wetting/spreading agent for spray solutions",
  formulation:      "Liquid Concentrate",
  color:            "#0369a1",
  apvma:            "60131/0206",
  labelPdf:         "Source labels/Upl_Buffit_Water_Conditioner_Label.pdf",
  sdsPdf:           "SDS Labels/BUFF-IT_SPRAY_ADJUVANT.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Adjuvant",
    target: [],
    timing: ["Pre-spray preparation"]
  },

  crops: [
    {
      crop: "Herbicides, Insecticides, Fungicides — Spray tank additive",
      cropList: ["Herbicides","Insecticides","Fungicides","Spray Tank Additive"],
      weeds: [
        { weed: "All crop situations", pestList: ["All Crop Situations"], states: ["All"], rate: "125", rateMax: "250", unit: "mL/100L", stage: "Tank mix preparation", note: "Add to spray tank first to ensure optimal pH (4-5). Maintains wetting and spreading, improves spray coverage on target plants." }
      ]
    }
  ],

  restraints: [
    "DO NOT use with foliar nutrient mixtures",
    "Not recommended for aerial application",
    "Consult pesticide label for specific usage restrictions"
  ],

  compatibility: {
    compatible:   ["Most herbicides", "Insecticides", "Fungicides"],
    incompatible: [],
    notes:        ["Buff-It buffers spray water to pH 4-5. Indicator shows pink/red when below pH 5, faint orange when above pH 5."]
  },

  withholding: {
    harvest: "Not applicable",
    grazing: "Not applicable"
  },

  surfactant:     "Buff-It is itself a surfactant/wetter - provides non-ionic surfactants and pH buffering",
  sprayerCleanup: "Triple rinse containers before disposal. Do not dispose of undiluted chemicals on site. Add rinsings to spray tank."
};
