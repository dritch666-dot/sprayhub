// ─────────────────────────────────────────────────────────────────────────────
// RIDOMIL GOLD 480 SL SYSTEMIC FUNGICIDE — Label Data
// Suspension Concentrate | Group 4 Fungicide
// Source: Syngenta_Ridomil_Gold_480_Sl_Systemic_Fungicide_Label.pdf
// APVMA Approval No: 64812/146695
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['syngentaridomilgold'] = {
  name:             "Ridomil Gold 480 SL Systemic Fungicide",
  company: "Syngenta",

  category:         "Fungicides",
  activeIngredient: "480 g/L Metalaxyl-M",
  group:            "Group 4 Fungicide",
  modeOfAction:     "Phenylamide fungicide for control of Phytophthora species",
  formulation:      "Suspension Concentrate (SL)",
  color:            "#1e3a8a",
  apvma:            "64812/146695",
  labelPdf:         "Source labels/Syngenta_Ridomil_Gold_480_Sl_Systemic_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/RIDOMIL_GOLD_480_SL_SYSTEMIC_FUNGICIDE.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Fungicide",
    target: ["Phytophthora megasperma", "Phytophthora spp."],
    timing: ["Early season", "Preventative"]
  },

  crops: [
    {
      crop: "Asparagus — Phytophthora Crown and Spear Rot control",
      cropList: ["Asparagus"],
      weeds: [
        { weed: "Phytophthora Crown and Spear Rot (Phytophthora megasperma)", pestList: ["Phytophthora Crown and Spear Rot"], states: ["All"], rate: "1", rateMax: "1.3", unit: "L/ha", stage: "Late winter or early spring prior to spear emergence", note: "Apply as broadcast application. Light rain or irrigation required within 48 hours. Maximum 2 applications per season with 14-day minimum interval." }
      ]
    },
    {
      crop: "Pineapples — Heart Rot and Root Rot control",
      cropList: ["Pineapples"],
      weeds: [
        { weed: "Heart Rot and Root Rot (Phytophthora spp.)", pestList: ["Heart Rot and Root Rot"], states: ["All"], rate: "500", rateMax: "5000", unit: "mL/2000-5000L water/ha", stage: "Immediately after planting, repeat 4-8 week intervals", note: "Use 2000 L/ha for young plants, 5000 L/ha for large plants. Apply alternate years only." }
      ]
    },
    {
      crop: "Potatoes — Pink Rot control",
      cropList: ["Potatoes"],
      weeds: [
        { weed: "Pink Rot (Phytophthora erythroseptica)", pestList: ["Pink Rot"], states: ["Vic", "SA", "WA", "Tas"], rate: "8.5", rateMax: "8.5", unit: "mL/100m row", stage: "At planting as in-furrow spray", note: "Apply as 15-20 cm band in 1-3 L water per 100m row. Do not apply if bacterial rot conditions favoured." }
      ]
    },
    {
      crop: "Tobacco Seedbed — Blue Mould control",
      cropList: ["Tobacco Seedbed","Blue Mould Control"],
      weeds: [
        { weed: "Blue Mould", pestList: ["Blue Mould"], states: ["Qld", "NSW", "Vic", "WA"], rate: "1.5", rateMax: "1.5", unit: "mL/15L water per 60-80m²", stage: "7 day intervals from 7-10 days after emergence", note: "Final application 4 weeks after emergence. Spray to thoroughly wet leaves. Do not drench." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply using backpack spraying equipment",
    "DO NOT apply by aerial application to potato, pineapple or asparagus crops",
    "DO NOT allow bystanders to come into contact with the spray cloud",
    "DO NOT apply unless wind speed is between 3 and 20 kilometres per hour",
    "DO NOT apply if surface temperature inversion conditions are present"
  ],

  compatibility: {
    compatible:   ["Ridomil Gold MZ"],
    incompatible: [],
    notes:        ["Some naturally occurring fungi resistant to Group 4 fungicides may exist"]
  },

  withholding: {
    harvest: "Asparagus: 14 days; Pineapples: 4 weeks; Potatoes and Tobacco: Not required when used as directed",
    grazing: "Not applicable"
  },

  surfactant:     "",
  sprayerCleanup: "Triple rinse containers before disposal. Add rinsings to spray tank. Do not dispose of undiluted chemicals on site."
};
