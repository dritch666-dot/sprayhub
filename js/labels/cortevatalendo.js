// ─────────────────────────────────────────────────────────────────────────────
// TALENDO FUNGICIDE — Label Data
// Suspension Concentrate | Group 13 Fungicide
// Source: Corteva_Agriscience_Talendo_Fungicide_Label.pdf
// APVMA Approval No: 64165/129886
// Corteva Agriscience
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['cortevatalendo'] = {
  name:             "Talendo Fungicide",
  company: "Corteva",

  category:         "Fungicides",
  activeIngredient: "200 g/L Proquinazid",
  group:            "Group 13 Fungicide",
  modeOfAction:     "Aza-naphthalene fungicide - protectant action against powdery mildew",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#0c4a6e",
  apvma:            "64165",
  labelPdf:         "Source labels/Corteva_Agriscience_Talendo_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/TALENDO.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Fungicide",
    target: ["Powdery mildew"],
    timing: ["Early season", "Preventative spray program"]
  },

  crops: [
    {
      crop: "Cucurbits (Cucumber, Melons, Pumpkin, Squash, Zucchini) — Dilute spraying",
      cropList: ["Cucurbits","Cucumber","Melons","Pumpkin","Squash","Zucchini","Dilute Spraying"],
      weeds: [
        { weed: "Powdery mildew (Podosphaera xanthii, Sphaerotheca fuliginea)", pestList: ["Powdery Mildew"], states: ["All"], rate: "250", unit: "mL/ha", stage: "Pre-disease or early symptoms", note: "Use as a protectant treatment only. Talendo fungicide has no curative activity and does not control existing infections (including Powdery mildew between infection and visible stage). Apply Talendo fungicide or at the first sign of infection and repeat at 10 to 14 day intervals using the shorter interval during periods of heavy infection pressure. DO NOT apply more than three (3) applications to any crop in any one season. No more than two (2) consecutive sprays per crop. As a precaution, DO NOT exceed more than one third of the total Powdery mildew spray program with Talendo fungicide. Further treatments should be made with fungicides from a different fungicide group. WHP: 1 day." }
      ]
    },
    {
      crop: "Fruiting vegetables (field grown only)",
      cropList: ["Fruiting Vegetables","Egg Plants","Capsicums","Pepper","Chillies","Tomatillo","Tomatoes"],
      weeds: [
        { weed: "Powdery mildew (Leveillula taurica)", pestList: ["Powdery Mildew"], states: ["All"], rate: "500", unit: "mL/ha", stage: "Early detection", note: "Use as a protectant treatment only. Talendo fungicide has no curative activity and does not control existing infections (including powdery mildew between infection and visible stage). Apply Talendo as part of a preventative programme, or at the first sign of infection. Repeat application at 7 to 14 day intervals using the shorter interval during periods of heavy infection pressure. DO NOT use more than three (3) applications to any crop in any one season. No more than two (2) consecutive sprays per crop. Further treatments should be made with fungicides from a different fungicide group. WHP: Not required when used as directed." }
      ]
    },
    {
      crop: "Grapes",
      cropList: ["Grapes","Grapevines"],
      weeds: [
        { weed: "Powdery mildew (Erysiphe necator)", pestList: ["Powdery Mildew"], states: ["All"], rate: "25", unit: "mL/100L", stage: "Pre-bud burst to fruit set", note: "Use as a protectant treatment only. Talendo fungicide has no curative activity and does not control existing infections (i.e. between infection and visible stage). Apply Talendo at a minimum interval of 14 days. DO NOT apply more than three (3) applications per crop in any one season. DO NOT apply more than two (2) consecutive sprays per crop. Further treatments should be made with fungicides from a different fungicide group. Concentrated spray: DO NOT apply in water volumes less than 250 L/ha, or with a concentration factor greater than 4X. WHP: 28 days. For export wines refer to the AWRI Winegrid." }
      ]
    },
    {
      crop: "Pome fruit (Apples, Nashi Pears, Pears)",
      cropList: ["Pome Fruit","Apples","Nashi Pears","Pears"],
      weeds: [
        { weed: "Powdery mildew (Podosphaera leucotricha)", pestList: ["Powdery Mildew"], states: ["All"], rate: "25", unit: "mL/100L", stage: "Open cluster onwards", note: "Use as a protectant treatment only. Talendo fungicide has no curative activity and does not control existing infections. Apply Talendo at a minimum spray interval of fourteen (14) days from open cluster. DO NOT apply more than three (3) applications to any crop in any one season. DO NOT apply more than two (2) consecutive sprays per crop. Further treatments should be made with fungicides from a different fungicide group. Concentrated spray: DO NOT apply in water volumes less than 400 L/ha, or with a concentration factor greater than 3X. WHP: 28 days." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply if rainfall expected within 2 hours",
    "DO NOT apply by air",
    "DO NOT use on hydroponic crops",
    "DO NOT apply during high temperatures (above 30°C)",
    "DO NOT apply in strong winds"
  ],

  compatibility: {
    compatible:   ["Most fungicides", "Approved insecticides"],
    incompatible: [],
    notes:        ["Always conduct compatibility test on small area first", "Do not mix with oil-containing products"]
  },

  withholding: {
    harvest: "Cucurbits and fruiting vegetables: 1 day. Grapes/Pome fruit: 28 days",
    grazing: "DO NOT graze or cut treated areas for stock food"
  },

  surfactant:     "Non-ionic wetter recommended for improved coverage",
  sprayerCleanup: "Immediately clean spray equipment. Drain and rinse thoroughly with clean water. DO NOT dispose of undiluted chemicals on site."
};
