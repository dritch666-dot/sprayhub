// ─────────────────────────────────────────────────────────────────────────────
// VERPIXO ADAVELT ACTIVE FUNGICIDE — Label Data
// Suspension Concentrate | Group 21 Fungicide
// Source: Corteva_Agriscience_Verpixo_Adavelt_Active_Fungicide_Label.pdf
// APVMA Approval No: 91871/142508
// Corteva Agriscience
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['cortevaverpixo'] = {
  name:             "Verpixo Adavelt Active Fungicide",
  company: "Corteva",

  category:         "Fungicides",
  activeIngredient: "100 g/L Florylpicoxamid",
  group:            "Group 21 Fungicide",
  modeOfAction:     "Quinone inside Inhibitor (QiI) - novel fungicide for disease control",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#166534",
  apvma:            "91871",
  labelPdf:         "Source labels/Corteva_Agriscience_Verpixo_Adavelt_Active_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/VERPIXO_ADAVELT_ACTIVE_FUNGICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Powdery mildew", "Downy mildew", "Leaf spots"],
    timing: ["Early season", "At first disease signs"]
  },

  crops: [
    {
      crop: "Cucurbits (field and protected cropping)",
      cropList: ["Cucurbits","Cucumber","Melons","Honeydew","Rockmelon","Pumpkin","Squash","Watermelon","Zucchini"],
      weeds: [
        { weed: "Powdery mildew (Podosphaera xanthii)", pestList: ["Powdery Mildew"], states: ["All"], rate: "1250", rateMax: "1500", unit: "mL/ha", stage: "Pre-disease or early symptoms", note: "Use as a protectant spray. Apply prior to disease infection or when conditions favour disease development (wet and cloudy conditions). A second application can be made 7-10 days later. Use a shorter interval when disease pressure is high. DO NOT apply more than two consecutive sprays or more than three sprays per crop. See General Instructions - Fungicide Resistance Management. Powdery mildew: Use the high rate under high disease pressure. In broadcast situations ensure 1.25 - 1.5 L Verpixo is applied per hectare. DO NOT apply in greater than 1000 L water per ha. Protected cropping situations is permitted with a robust FRMS in place. WHP: 1 day." },
        { weed: "Gummy stem blight (Stagonosporopsis cucurbitacearum, Stagonosporopsis citrulli and Stagonosporopsis caricae) known as Didymella bryoniae — Suppression only", pestList: ["Gummy Stem Blight"], states: ["All"], rate: "1500", unit: "mL/ha", stage: "Pre-disease", note: "Use as a protectant spray. Apply prior to disease infection or when conditions favour disease development (wet and cloudy conditions). A second application can be made 7-10 days later. Use a shorter interval when disease pressure is high. DO NOT apply more than two consecutive sprays or more than three sprays per crop. See General Instructions - Fungicide Resistance Management. Use the high rate under high disease pressure. In broadcast situations ensure 1.25 - 1.5 L Verpixo is applied per hectare. DO NOT apply in greater than 1000 L water per ha. Protected cropping situations is permitted with a robust FRMS in place. WHP: 1 day." }
      ]
    },
    {
      crop: "Capsicum, chilli, eggplant, okra and tomato (field and protected cropping)",
      cropList: ["Capsicum","Chilli","Eggplant","Okra","Tomato","Fruiting Vegetables"],
      weeds: [
        { weed: "Powdery mildew of capsicum (Leveillula taurica), Powdery mildew of tomato (Oidium lycopersici), Target Spot/Early Blight (Alternaria Solani), Anthracnose (Colletotrichum capsica), Grey mould (Botrytis cinerea)", pestList: ["Powdery Mildew","Target Spot","Early Blight","Anthracnose","Grey Mould"], states: ["All"], rate: "1500", unit: "mL/ha", stage: "Early detection", note: "Use as a protectant spray. Apply prior to disease infection or when conditions favour disease development (wet and cloudy conditions). A second application can be made 7-10 days later. Use a shorter interval when disease pressure is high. DO NOT apply more than two consecutive sprays or more than three sprays per crop. See General Instructions - Fungicide Resistance Management. In broadcast situations ensure 1.5 L Verpixo is applied per hectare. DO NOT apply in greater than 1000 L water per ha. Protected cropping situations is permitted with a robust FRMS in place. WHP: 1 day." }
      ]
    },
    {
      crop: "Head lettuce, Leaf lettuce (field crops only)",
      cropList: ["Head Lettuce","Leaf Lettuce","Lettuce"],
      weeds: [
        { weed: "Sclerotinia rot (Sclerotinia minor, Sclerotinia sclerotiorum), Grey mould (Botrytis cinerea), Septoria spot or late blight (Septoria lactucae), Anthracnose (Microdochium panattonianum)", pestList: ["Sclerotinia Rot","Grey Mould","Septoria Spot","Late Blight","Anthracnose"], states: ["All"], rate: "1500", unit: "mL/ha", stage: "Early growth", note: "Use as a protectant spray. Apply before first sign of disease or when conditions are conducive to disease as part of a disease management program and continue with a 7-10 day interval between sprays. Use the shorter interval when disease pressure is high. DO NOT apply more than two consecutive sprays or more than three sprays per crop. See General Instructions - Fungicide Resistance Management. WHP: 1 day." }
      ]
    },
    {
      crop: "Strawberry (field and protected cropping)",
      cropList: ["Strawberry"],
      weeds: [
        { weed: "Grey mould (Botrytis cinerea), Powdery mildew (Sphaerotheca macularis)", pestList: ["Grey Mould","Powdery Mildew"], states: ["All"], rate: "1500", unit: "mL/ha", stage: "Flowering blossom", note: "Use a program of protectant fungicides during flowering (blossom) when conditions favour disease. Repeat applications of Verpixo on a 7 - 10 day interval. Use the shorter interval when conditions favour disease development. DO NOT apply more than two consecutive sprays or more than three sprays per crop. See General Instructions - Fungicide Resistance Management. Reduce background levels of disease by removing infected plant debris and rotten fruit. Thorough coverage of the crop is essential. Ensure 1.5 L Verpixo is applied per hectare whether broadcast or dilute spraying is used. If less than 1000 L/ha water volume is applied, use concentrate spraying. DO NOT apply in greater than 1000 L water per ha. Adjuvants: Always apply Verpixo with an adjuvant at the recommended rate e.g. Agral at 10 mL/100L. See General Instructions - Adjuvants. WHP: 1 day." }
      ]
    },
    {
      crop: "Grapevines",
      cropList: ["Grapevines","Grapes"],
      weeds: [
        { weed: "Powdery mildew (Erysiphe necator), Grey mould (Botrytis cinerea)", pestList: ["Powdery Mildew","Grey Mould"], states: ["All"], rate: "150", unit: "mL/100L", stage: "To give good coverage adjust water rate to growth stage and size of foliage", note: "Use as a protectant spray only, and rotate with fungicides of different mode of action for resistance management. See General Instructions - Fungicide Resistance Management. Apply as a preventative program when conditions favour disease. Apply a maximum of two applications per season using a minimum 10-day spray interval. Verpixo is not systemically mobile. Thorough coverage is required to ensure control. Apply as part of a botrytis control spray program, where critical application timings are 5% capfall, 80% capfall, pre-bunch closure or veraison. DO NOT apply in greater than 1000 L water per ha. Adjuvants: Always apply Verpixo with an adjuvant at the recommended rate e.g. Agral at 10 mL/100L. See General Instructions - Adjuvants. WHP: 10 days. DO NOT graze treated vineyards." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply if rainfall expected within 1 hour",
    "DO NOT use on hydroponic crops",
    "DO NOT apply by air",
    "DO NOT apply during extreme heat (above 32°C)",
    "DO NOT apply to oil-sensitive crops without prior testing",
    "Chemical residues may remain on harvested produce"
  ],

  compatibility: {
    compatible:   ["Most fungicides and approved insecticides"],
    incompatible: [],
    notes:        ["Test tank mixes on small crop area first", "May require longer withholding for export crops", "Subject to resistance management strategies"]
  },

  withholding: {
    harvest: "Cucurbits, fruiting vegetables, leafy vegetables, strawberry: 1 day. Grapes: 10 days",
    grazing: "DO NOT graze treated vineyards"
  },

  surfactant:     "Non-ionic surfactant may improve coverage and efficacy",
  sprayerCleanup: "Thoroughly clean spray equipment immediately after use. Rinse with clean water. Triple-rinse before storage."
};
