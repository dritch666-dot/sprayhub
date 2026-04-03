// ─────────────────────────────────────────────────────────────────────────────
// AERO FUNGICIDE — Label Data
// Wettable Granule (WG) | Group 11 M3 Fungicide
// Source: Basf_Aero_Fungicide_Label.pdf
// APVMA Approval No: 59616/58738
// BASF Australia Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['basfaero'] = {
  name:             "AERO Fungicide",
  company: "BASF",

  category:         "Fungicides",
  activeIngredient: "550 g/kg Metiram, 50 g/kg Pyraclostrobin",
  group:            "Group 11 M3 Fungicide",
  modeOfAction:     "Multi-site protectant fungicide with strobilurin activity for broad-spectrum disease control",
  formulation:      "Wettable Granule (WG)",
  color:            "#b45309",
  apvma:            "59616/58738",
  labelPdf:         "Source labels/Basf_Aero_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/Aero_Fungicide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Early blight", "Late blight", "Downy mildew", "Powdery mildew", "Anthracnose"],
    timing: ["Early season", "7-10 day intervals"]
  },

  crops: [
    {
      crop: "Potatoes — Early and late blight control",
      cropList: ["Potatoes"],
      weeds: [
        { weed: "Early blight (Alternaria solani)", pestList: ["Early Blight"], states: ["All"], rate: "1.0", rateMax: "2.0", unit: "kg/ha", stage: "When disease symptoms first appear", note: "Apply when disease symptoms first appear and repeat 7 to 10 days later if required. Use the higher rate and the shorter spray interval when weather conditions favour disease development. If overhead irrigation is used, apply immediately following irrigation. Aero may be applied by ground or aerial application equipment in potatoes. Apply in sufficient water to thoroughly cover the crop. The water volume should increase as the crop size and bulk increases. Ground application: A volume of 200 - 300 L/ha is suggested at the start of the season, increasing to 500 - 600 L/ha in a vigorous crop at full canopy. Aerial application: A volume of 30 - 40 L/ha is recommended. Use of Aero is subject to a CropLife Australia Resistance Management Strategy. DO NOT apply more than two consecutive applications of this product or other Group 11 products. If consecutive applications of Group 11 fungicides are used, then they must be followed by at least the same number of applications of fungicide(s) from a different group(s) before a Group 11 fungicide is used again, either in the current or following season. WHP: 7 days." },
        { weed: "Late (Irish) blight (Phytophthora infestans)", pestList: ["Late (Irish) Blight"], states: ["All"], rate: "1.5", rateMax: "3.0", unit: "kg/ha", stage: "When disease symptoms first appear", note: "Use the higher rate and the shorter spray interval when weather conditions favour disease development. If overhead irrigation is used, apply immediately following irrigation. Aero may be applied by ground or aerial application equipment in potatoes. Apply in sufficient water to thoroughly cover the crop. The water volume should increase as the crop size and bulk increases. Ground application: A volume of 200 - 300 L/ha is suggested at the start of the season, increasing to 500 - 600 L/ha in a vigorous crop at full canopy. Aerial application: A volume of 30 - 40 L/ha is recommended. Use of Aero is subject to a CropLife Australia Resistance Management Strategy. DO NOT apply more than two consecutive applications of this product or other Group 11 products. If consecutive applications of Group 11 fungicides are used, then they must be followed by at least the same number of applications of fungicide(s) from a different group(s) before a Group 11 fungicide is used again, either in the current or following season. WHP: 7 days." }
      ]
    },
    {
      crop: "Capsicum, Eggplant, Peppers (except greenhouse), Tomatoes (except greenhouse) — Early blight control",
      cropList: ["Capsicum","Eggplant","Peppers","Tomatoes"],
      weeds: [
        { weed: "Early blight (Alternaria solani)", pestList: ["Early Blight"], states: ["All"], rate: "1.0", rateMax: "2.0", unit: "kg/ha", stage: "Protectant program", note: "Apply as part of a protectant program using two sprays 10 to 14 days apart. AERO should be used when conditions favour disease development. Use the shorter interval when disease pressure remains high. This use is subject to a CropLife Australia Resistance Management Strategy. DO NOT apply more than two consecutive applications of this product or other Group 11 products. If consecutive applications are used, then they must be followed by at least the same number of applications of fungicide(s) from a different group(s) before a Group 11 fungicide is used again, either in the current or following season. WHP: Capsicum, Eggplant, Peppers: 28 days. Tomatoes: 14 days." }
      ]
    },
    {
      crop: "Mangoes — Disease control",
      cropList: ["Mangoes"],
      weeds: [
        { weed: "Anthracnose (Colletotrichum gloeosporioides), Stem end rots (Botryosphaeria spp.), Powdery mildew (Oidium spp.)", pestList: ["Anthracnose","Stem End Rots","Powdery Mildew"], states: ["All"], rate: "200", rateMax: "300", unit: "g/100L", stage: "Early fruit set to 14 days pre-harvest", note: "Apply as part of a protectant program containing fungicides from a different chemical group. A maximum of 2 sprays can be applied. For best results these should be targeted at early fruit set and 14 days prior to harvest. Follow with applications of an approved fungicide from a different chemical group. This use is subject to a CropLife Australia Resistance Management Strategy and must only be applied as a foliar spray. DO NOT apply more than two consecutive applications of this product or other Group 11 products. If consecutive applications are used, then they must be followed by at least the same number of applications of fungicide(s) from a different group(s) before a Group 11 fungicide is used again, either in the current or following season. WHP: 14 days." }
      ]
    },
    {
      crop: "Poppies — Downy mildew control",
      cropList: ["Poppies"],
      weeds: [
        { weed: "Downy mildew", pestList: ["Downy Mildew"], states: ["All"], rate: "1.0", rateMax: "2.0", unit: "kg/ha", stage: "Early to mid running up and at hook stage", note: "Apply as part of a protectant program containing fungicides from a different chemical group. A maximum of two Aero sprays can be applied per crop. For best results these should be targeted at early - mid running up and at hook stage. DO NOT apply after hook stage. Apply AERO preventatively before disease symptoms appear. Ensure thorough spray coverage. Apply in sufficient water to thoroughly cover the crop. The water volume should increase as the crop size and bulk increases. This use is subject to a CropLife Australia Resistance Management Strategy. Start disease control early and maintain a regular program, with a fungicide from groups other than Group 11, using the spray interval recommended on the label. When conditions favour disease development (high humidity, still weather, overcast skies), do not wait for symptoms (white downy growth on the underside of leaves followed by brown, angular lesions) to appear, but apply two consecutive sprays of a Group 11 product, at the interval recommended on the label. Then resume the program of sprays using products from a different group to the Group 11 product just applied. DO NOT apply more than two sprays per season of a product containing a Group 11 fungicide." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply with aircraft with spray droplets smaller than COARSE droplet size",
    "DO NOT apply with ground sprayers with spray droplets smaller than MEDIUM droplet size",
    "DO NOT apply when wind speed is less than 3 or more than 20 kilometres per hour",
    "DO NOT apply during surface temperature inversion conditions",
    "DO NOT apply more than 2 consecutive applications of this product or other Group 11 products"
  ],

  compatibility: {
    compatible:   ["Du-Wett", "Designer"],
    incompatible: [],
    notes:        ["Compatible with most insecticides and fungicides", "Contact BASF for compatibility information"]
  },

  withholding: {
    harvest: "Potatoes: 7 days; Mangoes, Tomatoes: 14 days; Capsicums, Eggplant, Peppers: 28 days; Poppies: Not required when used as directed",
    grazing: "DO NOT graze or cut for stockfood"
  },

  surfactant:     "Du-Wett or Designer (silicone-based adjuvants) recommended when spray volumes are less than required for dilute spraying",
  sprayerCleanup: "Ensure spray tank is clean before use. Maintain agitation throughout spraying"
};
