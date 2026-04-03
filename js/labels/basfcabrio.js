// ─────────────────────────────────────────────────────────────────────────────
// CABRIO FUNGICIDE — Label Data
// Emulsifiable Concentrate (EC) | Group 11 Fungicide
// Source: Basf_Cabrio_Fungicide_Label.pdf
// APVMA Approval No: 55733/58739
// BASF Australia Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['basfcabrio'] = {
  name:             "CABRIO Fungicide",
  company: "BASF",

  category:         "Fungicides",
  activeIngredient: "250 g/L Pyraclostrobin",
  group:            "Group 11 Fungicide",
  modeOfAction:     "Strobilurin fungicide - mitochondrial respiration inhibitor for broad-spectrum control",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#7e22ce",
  apvma:            "55733/58739",
  labelPdf:         "Source labels/Basf_Cabrio_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/Cabrio_Fungicide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Leaf speckle", "Leaf spot", "Downy mildew", "Powdery mildew", "Husk spot", "Rust"],
    timing: ["10-14 day intervals"]
  },

  crops: [
    {
      crop: "Bananas (bagged) — Leaf speckle, leaf spot and black sigatoka control",
      cropList: ["Bananas (Bagged)","Bananas"],
      weeds: [
        { weed: "Leaf speckle (Mycosphaerella musae), leaf spot (Mycosphaerella musicola), Black Sigatoka (Mycosphaerella fijiensis)", pestList: ["Leaf Speckle","Leaf Spot","Black Sigatoka"], states: ["All"], rate: "300", rateMax: "400", unit: "mL plus 3-5L water miscible oil/ha", stage: "Preventive program", note: "Maintain good crop hygiene by regularly removing old and diseased leaves to reduce the source of disease inoculum. DO NOT use on bananas unless bunch covers are in place. Ground application and aerial application: Apply by airblast sprayer or misting machine. Use the higher rates under conditions favouring disease infection. Apply up to four sprays per season, as part of a preventive disease control programme, commencing early in the season and using alternative mode-of-action products in between CABRIO applications. Do NOT apply consecutive sprays of CABRIO or other Group 11 fungicides. This use is subject to an CropLife Australia resistance management strategy." }
      ]
    },
    {
      crop: "Grapevines — Downy and powdery mildew control",
      cropList: ["Grapevines","Grapes"],
      weeds: [
        { weed: "Downy mildew (Plasmopara viticola), powdery mildew (Uncinula necator)", pestList: ["Downy Mildew","Powdery Mildew"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L water", stage: "At flowering", note: "Also see 'CAUTION' section re export commodities. Apply up to three sprays per season as part of a complete disease control programme. Ideally, apply in a block of three sprays at 10 to 14 day intervals, commencing at flowering. Use the shorter intervals under conditions favouring disease infection. Apply by dilute or concentrate spraying equipment. Apply the same total amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. This use is subject to an CropLife Australia resistance management strategy. WHP: 21 days." }
      ]
    },
    {
      crop: "Macadamia — Husk spot control",
      cropList: ["Macadamia"],
      weeds: [
        { weed: "Husk spot (Pseudocercospora macadamiae)", pestList: ["Husk Spot"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "Match head stage to 14-28 days later", note: "Apply up to two sprays per season as part of a complete disease control program. Commence CABRIO application at match head timing stage and repeat application at 14 to 28 days later. Ensure that fungicides from an alternative chemical group are included in the spray program each season." }
      ]
    },
    {
      crop: "Almond — Rust control",
      cropList: ["Almond"],
      weeds: [
        { weed: "Rust (Tranzschelia discolor)", pestList: ["Rust"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "At flowering to 10-14 days later", note: "Apply up to two sprays per season as part of a complete disease control program. Commence application at flowering and repeat application at 10 to 14 days later. Ensure that fungicides from an alternative chemical group are included in the spray program each season." }
      ]
    },
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      weeds: [
        { weed: "Anthracnose, pepper spot", pestList: ["Anthracnose", "Pepper Spot"], states: ["All"], rate: "40", unit: "mL/100L", rateText: "40ml/100L", note: "WHP: 3 days. No more than 3 applications per season." }
      ]
    }
  ],

  restraints: [
    "DO NOT use by aerial application in grapevines, almond and macadamia crops",
    "DO NOT apply within 48 hours of heavy rainfall",
    "DO NOT irrigate to the point of run-off",
    "DO NOT apply to water-logged soil"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["For information on compatibility contact your local BASF representative"]
  },

  withholding: {
    harvest: "Almond, Bananas (bagged), Macadamia: Not required when used as directed; Grapes: 21 days",
    grazing: "Not applicable"
  },

  surfactant:     "Apply by dilute or concentrate spraying equipment as specified in directions",
  sprayerCleanup: "Half-fill spray tank with water, add product, agitate thoroughly, then add remainder of water"
};
