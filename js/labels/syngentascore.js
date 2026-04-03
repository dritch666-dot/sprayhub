// ─────────────────────────────────────────────────────────────────────────────
// SCORE FOLIAR FUNGICIDE — Label Data
// Emulsifiable Concentrate | Group C Fungicide
// Source: Syngenta_Score_Foliar_Fungicide_Label.pdf
// APVMA Approval No: 45810/5/0504
// Syngenta Crop Protection Pty Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['syngentascore'] = {
  name:             "Score Foliar Fungicide",
  company: "Syngenta",

  category:         "Fungicides",
  activeIngredient: "250 g/L Difenoconazole",
  group:            "Group C Fungicide",
  modeOfAction:     "DMI (Demethylation Inhibitor) fungicide for foliar disease control",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#7e1d1d",
  apvma:            "45810/5/0504",
  labelPdf:         "Source labels/Syngenta_Score_Foliar_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/SYNGENTA_SCORE_250EC_FUNGICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Mycosphaerella spp.", "Alternaria spp.", "Pseudocercospora spp."],
    timing: ["Growing season", "Protective spray"]
  },

  crops: [
    {
      crop: "Bananas — Yellow Sigatoka, Black Sigatoka control",
      cropList: ["Bananas"],
      weeds: [
        { weed: "Yellow Sigatoka (Mycosphaerella musicola)", pestList: ["Yellow Sigatoka"], states: ["Qld", "NSW", "NT"], rate: "400", rateMax: "400", unit: "mL + 3-5L water miscible oil/ha", stage: "Ground or aerial application starting wet season", note: "Maximum 5 Group C sprays per season (NSW, Sth Qld). Maximum 6 Group C sprays per season (NT, Nth Qld). Apply 2+ consecutive sprays at 21-28 day intervals before switching fungicides." },
        { weed: "Black Sigatoka (Mycosphaerella fijiensis)", pestList: ["Black Sigatoka"], states: ["Qld", "NSW", "NT"], rate: "400", rateMax: "400", unit: "mL + 3-5L water miscible oil/ha", stage: "Ground or aerial application", note: "For NT/Nth Qld: Use lower oil rate, apply 2-3 consecutive sprays at 14-21 day intervals before switching. Do not apply July-October." }
      ]
    },
    {
      crop: "Carrots — Leaf Blight control",
      cropList: ["Carrots"],
      weeds: [
        { weed: "Leaf Blight (Alternaria dauci and Cercospora carotae)", pestList: ["Leaf Blight"], states: ["All"], rate: "300", rateMax: "500", unit: "mL/ha", stage: "Protectant program before disease occurs", note: "Apply 300 mL at 7-day intervals or 500 mL at 10-14 day intervals. Maximum 2 consecutive Score sprays, then alternate with different fungicide. Good crop hygiene recommended." }
      ]
    },
    {
      crop: "Potatoes — Target Spot / Early Blight control",
      cropList: ["Potatoes"],
      weeds: [
        { weed: "Target Spot / Early Blight (Alternaria solani)", pestList: ["Target Spot / Early Blight"], states: ["All"], rate: "300", rateMax: "500", unit: "mL/ha", stage: "Protectant program from row closure", note: "Apply 300 mL at 7-day intervals or 500 mL at 10-14 day intervals. Good crop hygiene essential. Score does not control late blight (Phytophthora infestans). Withholding period: 7 days." }
      ]
    },
    {
      crop: "Tomatoes — Target Spot control",
      cropList: ["Tomatoes"],
      weeds: [
        { weed: "Target Spot (Alternaria solani)", pestList: ["Target Spot"], states: ["All"], rate: "300", rateMax: "500", unit: "mL/ha", stage: "Protectant program from transplanting", note: "Apply 300 mL at 7-day intervals or 500 mL at 10-day intervals. Maximum 2 consecutive Score sprays before switching to different fungicide. Withholding period: 3 days." }
      ]
    },
    {
      crop: "Macadamia nuts — Husk Spot control",
      cropList: ["Macadamia Nuts"],
      weeds: [
        { weed: "Husk Spot (Pseudocercospora macadamiae)", pestList: ["Husk Spot"], states: ["Qld", "NSW", "NT"], rate: "50", rateMax: "50", unit: "mL/100L water", stage: "Protectant program from nut set (late September) to late December", note: "Apply dilute or concentrate spraying. Add Agral Spray Adjuvant at 10 mL/100L. Maximum 2 applications per season at 3-4 week intervals. Withholding period: Not required." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply more than 6 applications per season",
    "DO NOT spray within 5 metres downwind of water bodies",
    "DO NOT apply under meteorological conditions conducive to drift",
    "Rain falling within 2 hours of application may reduce product efficacy"
  ],

  compatibility: {
    compatible:   ["Monitor", "Nitofol", "Rogor", "Supracide", "Lorsban", "Pirimor", "Ambush", "Dominex", "Ridomil MZ", "Bravo", "Sumisclex", "Rovral", "Dithane M-45", "Copper oxychloride", "Pyrethroids", "Organophosphates"],
    incompatible: [],
    notes:        ["Compatibility tested with listed products. Always test tank mixtures."]
  },

  withholding: {
    harvest: "Bananas: 1 day; Potatoes and Carrots: 7 days; Tomatoes: 3 days; Avocados and Macadamias: Not required",
    grazing: "Not applicable"
  },

  surfactant:     "Not typically required; follow individual pesticide label recommendations",
  sprayerCleanup: "Empty containers into spray tank. Triple rinse or pressure rinse containers before disposal. Do not dispose of undiluted chemicals on site."
};
