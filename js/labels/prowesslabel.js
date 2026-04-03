// ─────────────────────────────────────────────────────────
// Prowess Fungicide — Label Data
// Group P07 (Phosphorous Acid) | Water Dispersible Granule
// Source: Upl_Prowess_Fungicide_Label.pdf
// APVMA Approval No: 93201
// UPL Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['prowesslabel'] = {

  name:             "Prowess Fungicide",
  company: "AMVAC",


  category:         "Fungicides",
  activeIngredient: "300 g/L Phosphorous (Phosphonic) Acid (mono and di-ammonium phosphite)",
  group:            "Group P07 (Phosphorous Acid)",
  modeOfAction:     "Systemic fungicide; acts through plant physiology to induce resistance",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#0d9488",
  apvma:            "93201",
  labelPdf:         "Source labels/Upl_Prowess_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/UPL_PROWESS_FUNGICIDE.pdf",
  signalHeading:    "Caution",

  classification: {
    type: "Fungicide",
    target: ["Phytophthora", "Downy Mildew", "Root Rot Diseases"],
    timing: ["Preventive", "Curative"]
  },

  crops: [
    {
      crop: "Avocados",
      cropList: ["Avocados"],
      weeds: [
        {
          weed: "Phytophthora cinnamomi (Root Rot), Anthracnose",
          pestList: ["Phytophthora Cinnamomi","Anthracnose"],
          states: ["QLD", "NSW"],
          rate: "1.5",
          rateMax: "2.5",
          unit: "kg/100L",
          stage: "Preventive program; start before disease pressure",
          note: "No harvest withholding. Induces plant systemic resistance. Ground application only."
        }
      ]
    },
    {
      crop: "Other High-Value Crops",
      cropList: ["Other High-Value Crops"],
      weeds: [
        {
          weed: "Phytophthora and oomycete diseases",
          pestList: ["Phytophthora And Oomycete Diseases"],
          states: ["All"],
          rate: "1.5",
          rateMax: "2.5",
          unit: "kg/100L",
          stage: "Preventive; repeat 14-21 days during disease season",
          note: "Improves plant vigor and disease resistance. Do NOT apply by aircraft."
        }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by aircraft",
    "DO NOT apply if heavy rain forecast within 3 days",
    "DO NOT irrigate to runoff for 3 days post-application",
    "DO NOT allow excessive spray runoff",
    "DO NOT apply if surface temperature inversion present",
    "Wind speed must be 3-20 km/h during application"
  ],

  compatibility: {
    compatible:   ["Most fungicides (check label)"],
    incompatible: [],
    notes:        ["Requires thorough spray coverage", "Buffer zones apply for spray drift (check label)"]
  },

  withholding: {
    harvest: "NIL — No harvest withholding period.",
    grazing: "Consult label for grazing restrictions."
  },

  surfactant:     "A wetter/spreader is recommended for optimal coverage and uptake.",
  sprayerCleanup: "Rinse sprayer with water after use. Triple-rinse containers for disposal. Refillable drumMUSTER containers can be recycled when clean."
};
