// js/labels/sivantoprime.js
productDatabase['sivantoprime'] = {
  name:             "Sivanto Prime 200 SL Insecticide",
  company: "Syngenta",

  category:         "Insecticides",
  activeIngredient: "200 g/L Flupyradifurone",
  group:            "Group 4D Insecticide",
  modeOfAction:     "Butenolide — acts on nicotinic acetylcholine receptors (nAChR)",
  formulation:      "Soluble Liquid (SL)",
  color:            "#0284c7",
  apvma:            "84727",
  labelPdf:         "Source labels/Bayer_SivantoPrime_Label.pdf",
  sdsPdf:           "SDS Labels/Sivanto_Prime_200_SL_Insecticide.pdf",
  signalHeading:    "Poison",

  classification: {
    type: "Insecticide",
    target: ["Sucking Insects", "Aphids", "Whitefly", "Scale", "Lace Bug", "Planthopper"],
    timing: ["Foliar"]
  },

  crops: [
    {
      crop: "Macadamias",
      cropList: ["Macadamias"],
      weeds: [
        {
          weed: "Macadamia lace bug (Ulonemia concava or Ulonemia decoris)",
          pestList: ["Macadamia Lace Bug"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "mL/100L",
          stage: "From early flowering once local thresholds are reached",
          note: "WHP: H 20 days. Max 1 application per block per 12 months. DO NOT exceed 1 L/ha per application during flowering. Concentrate spraying not appropriate — use dilute spraying equipment. Ensure thorough coverage of all racemes, foliage and nuts."
        },
        {
          weed: "Banana spotting bug (Amblypelta lutescens), Fruit spotting bug (Amblypelta nitida)",
          pestList: ["Banana Spotting Bug", "Fruit Spotting Bug"],
          states: ["All"],
          rate: "75",
          rateMax: "100",
          unit: "mL/100L",
          stage: "From early nut set once local thresholds are reached",
          note: "WHP: H 20 days. Use higher rate during high pest pressure or when longer residual control is desired. Max 1 application per block per 12 months. DO NOT exceed 2 L/ha per application. Concentrate spraying not appropriate — use dilute spraying equipment."
        },
        {
          weed: "Scirtothrips (Scirtothrips dorsalis) [Suppression only]",
          pestList: ["Scirtothrips"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "After flowering, once local thresholds are reached",
          note: "WHP: H 20 days. Suppression only. Max 1 application per block per 12 months. DO NOT exceed 2 L/ha per application. Concentrate spraying not appropriate — use dilute spraying equipment."
        }
      ]
    },
    {
      crop: "Avocados, Mangoes, Papayas and other Tropical and Sub-tropical Fruits, Inedible Peel (excluding Bananas, Pineapples)",
      cropList: ["Avocado", "Mango", "Papaya", "Tropical Fruits"],
      weeds: [
        {
          weed: "Banana spotting bug (Amblypelta lutescens), Fruit spotting bug (Amblypelta nitida), Green planthopper, Mango planthopper",
          pestList: ["Banana Spotting Bug", "Fruit Spotting Bug", "Green Planthopper", "Mango Planthopper"],
          states: ["All"],
          rate: "75",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Once local thresholds are reached",
          note: "WHP: Avocado H 1 day; Other tropical/sub-tropical fruits inedible peel (excl. bananas, pineapples) H 3 days. Use higher rate during high pest pressure or when longer residual control is desired. Do not re-apply within 14 days of previous spray. Adjuvant NOT recommended for tropical fruit crops. Max 2 applications per block per 12 months. DO NOT exceed 1 L/ha per application. DO NOT apply more than one application during flowering. Calibrate spray equipment for thorough coverage to point of run-off. Papaya: min 360 L/ha water volume. Concentrate spraying not appropriate."
        }
      ]
    },
    {
      crop: "Olives",
      cropList: ["Olives"],
      weeds: [
        {
          weed: "Olive lace bug, Black scale",
          pestList: ["Black Scale", "Olive Lace Bug"],
          states: ["All"],
          rate: "75",
          rateMax: "75",
          unit: "mL/100L",
          stage: "Olive lace bug: once local thresholds reached. Black scale: at onset of crawler emergence or economic thresholds.",
          note: "WHP: H 14 days. Max 2 applications (at least 2 months apart) per block per 12 months. DO NOT exceed 1 L/ha per application."
        }
      ]
    },
    {
      crop: "Cucurbits, Eggplant, Peppers (Capsicum and Chili), Tomatoes (includes protected cropping)",
      cropList: ["Capsicum", "Chilli", "Cucumbers", "Cucurbits", "Eggplant", "Melons", "Peppers", "Pumpkin", "Squash", "Tomatoes", "Zucchini"],
      weeds: [
        {
          weed: "Cotton aphid (Aphis gossypii), Green peach aphid (Myzus persicae), Greenhouse whitefly (Trialeurodes vaporariorum), Silverleaf whitefly (Bemisia tabaci Biotype B)",
          pestList: ["Cotton Aphid", "Green Peach Aphid", "Greenhouse Whitefly", "Silverleaf Whitefly"],
          states: ["All"],
          rate: "750",
          rateMax: "750",
          unit: "mL/ha",
          stage: "Once local thresholds are reached; continue to monitor and re-apply as necessary",
          note: "WHP: H 1 day. OR Dilute spraying: 75 mL/100 L. Do not re-apply within 7 days. Max 2 applications per hectare per year to the same cropping ground (including double-cropped areas). Dilute spraying recommended for trellised and protected crops — apply to point of run-off, up to 1000 L/ha. Leaf scorch in cucurbits (especially cucumbers and melons) may occur — use care on young plants. Subject to CropLife resistance management strategy."
        }
      ]
    },
    {
      crop: "Green Beans, Potatoes, Sweet Potatoes",
      cropList: ["Green Beans", "Potatoes", "Sweet Potatoes"],
      weeds: [
        {
          weed: "Green peach aphid (Myzus persicae), Silverleaf whitefly (Bemisia tabaci Biotype B)",
          pestList: ["Green Peach Aphid", "Silverleaf Whitefly"],
          states: ["All"],
          rate: "750",
          rateMax: "750",
          unit: "mL/ha",
          stage: "Once local thresholds are reached; continue to monitor and re-apply as necessary",
          note: "WHP: H 7 days, G (Beans) 7 days. Do not re-apply within 7 days. Max 2 applications per hectare per year to the same cropping ground (including double-cropped areas). Ensure thorough coverage. Subject to CropLife resistance management strategy."
        }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by aircraft.",
    "DO NOT apply if heavy rain or storms are forecast within 3 days.",
    "DO NOT irrigate to the point of field run-off from the treated area for at least 3 days after application.",
    "DO NOT apply more than one application of Sivanto Prime to a macadamia block in a twelve-month period.",
    "Fitzroy region (WA): DO NOT apply in April or July to September. DO NOT apply in orchards with bare soil inter-row.",
    "Northern Gulf region (NT): DO NOT apply in November."
  ],

  withholding: {
    harvest: "Avocados, cucurbits, eggplant, peppers, tomatoes: 1 day. Mangoes, papayas and other tropical/sub-tropical fruits (inedible peel, excl. avocado, banana, pineapple): 3 days. Green beans, potatoes, sweet potatoes: 7 days. Olives: 14 days. Macadamias: 20 days.",
    grazing: "Tree crops: DO NOT graze treated orchards. Green beans: 7 days."
  },

  compatibility: {
    compatible: [
      "Blue Shield DF Copper Fungicide (macadamias)",
      "Kocide Blue Xtra Fungicide (macadamias & vegetables)",
      "Spin Flo Systemic Fungicide (macadamias)",
      "Cabrio Fungicide (macadamias)",
      "Agridex Non-ionic Surfactant (macadamias)",
      "Maxx Organosilicone Surfactant (macadamias)",
      "Belt 480 SC (vegetables)",
      "Dithane Rainshield Neo Tec (vegetables)"
    ],
    incompatible: [],
    notes: [
      "Caution — bees: Do not mix Sivanto Prime with Group 3 (DMI) Fungicides when applied to crops during flowering.",
      "Contact Bayer Crop Science for latest compatibility information."
    ]
  },

  surfactant: "The use of an adjuvant is NOT recommended for tropical fruit crops. For vegetables, ensure thorough coverage using MEDIUM spray quality droplets.",

  sprayerCleanup: "Triple rinse containers before disposal. Add rinsings to spray tank. Do not dispose of undiluted chemicals on site."
};
