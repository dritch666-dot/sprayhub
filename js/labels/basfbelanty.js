// ─────────────────────────────────────────────────────────────────────────────
// BELANTY FUNGICIDE — Label Data
// Suspension Concentrate (SC) | Group 3 Fungicide
// Source: Basf_Belanty_Fungicide_Label.pdf
// APVMA Approval No: 86413/139445
// BASF Australia Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['basfbelanty'] = {
  name:             "BELANTY Fungicide",
  company: "BASF",

  category:         "Fungicides",
  activeIngredient: "75 g/L Mefentrifluconazole",
  group:            "Group 3 Fungicide",
  modeOfAction:     "DMI fungicide - sterol demethylation inhibitor for systemic disease control",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#0369a1",
  apvma:            "86413/139445",
  labelPdf:         "Source labels/Basf_Belanty_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/Belanty_Fungicide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Powdery mildew", "Black spot", "Scab", "Leaf rust", "Husk spot", "Target spot"],
    timing: ["Pre-infection", "7-21 day intervals"]
  },

  crops: [
    {
      crop: "Grapes — Powdery mildew control",
      cropList: ["Grapes"],
      weeds: [
        { weed: "Powdery mildew (Uncinula necator)", pestList: ["Powdery Mildew"], states: ["All"], rate: "80", rateMax: "80", unit: "mL/100L", stage: "Before development of disease", note: "Also see 'EXPORT OF TREATED FRUIT OR WINE' section re export commodities. Apply up to three sprays per season as part of a complete disease control programme. If applying consecutive applications of Belanty, a spray interval of 7-21 days is required. Use the shorter intervals under conditions favouring disease infection. Apply before development of disease. Apply by dilute or concentrate spraying equipment. Apply the same total amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Do not apply to established powdery mildew infections. DO NOT use in equipment that requires concentrations greater than 400 mL/100 L of water (5x concentration). The use of Belanty Fungicide is subject to the Croplife Australia Resistance Management Strategy. Apply no more than two consecutive sprays of group 3 fungicides, and no more than three in total per season. Use a fungicide of a different mode of action should further applications be required. WHP: 7 days." }
      ]
    },
    {
      crop: "Apples — Black spot/scab, powdery mildew and Alternaria suppression",
      cropList: ["Apples"],
      weeds: [
        { weed: "Black spot/scab (Venturia inequalis), Powdery mildew (Podosphaera leucotricha), Suppression of Alternaria (Alternaria mali)", pestList: ["Black Spot/Scab","Powdery Mildew","Suppression of Alternaria"], states: ["All"], rate: "80", rateMax: "80", unit: "mL/100L", stage: "Spurburst to petal fall and later applications", note: "Application may commence at spurburst and use a 7 to 10 day interval prior to petal fall and during periods of rapid growth. Later applications should be at 10 to 14 day intervals, or according to prevailing weather conditions and disease incidence. Apply by dilute or concentrate spraying equipment. Apply the same total amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. DO NOT use in equipment that requires concentrations greater than 400 mL / 100 L of water (5x concentration). Ensure thorough and even coverage of all plant parts. The use of Belanty Fungicide is subject to the CropLife Australia Resistance Management Strategy. Apply no more than two consecutive sprays of Group 3 fungicides, and no more than three per season. WHP: 7 days." }
      ]
    },
    {
      crop: "Almonds — Blossom blight, brown rot, rust and shot hole control",
      cropList: ["Almonds"],
      weeds: [
        { weed: "Blossom Blight/Brown rot (Monilinia spp.), Suppression of Leaf rust (Tranzschelia discolor), Shot Hole (Wilsonomyces carpophilus)", pestList: ["Blossom Blight/Brown Rot","Leaf Rust","Shot Hole"], states: ["All"], rate: "80", rateMax: "80", unit: "mL/100L", stage: "Early bloom to petal fall/shuck fall", note: "Apply as part of a fungicide spray program, as outlined below according to the disease targeted. DO NOT apply after stage 2B (1% hull split). Blossom Blight/Brown rot and Shot Hole: Apply as part of a spray program, with sprays of BELANTY Fungicide commencing at early bloom and continuing through to petal fall/shuck fall. Apply with a spray interval of 10-14 days. Rust: BELANTY Fungicide will provide good suppression of leaf rust. Best results will be achieved when applied as part of a fungicide program. For best results, apply as part of a program with a product such as MERIVON Fungicide. Apply a maximum of 3 applications of BELANTY per year, and no more than 2 consecutive applications per year. The use of BELANTY Fungicide is subject to CropLife Australia Resistance Management Strategies for Blossom blight/Brown rot and Rust in Almonds. BELANTY Fungicide is best applied in accordance with these recommendations. WHP: Not required when used as directed." }
      ]
    },
    {
      crop: "Macadamia — Husk spot control",
      cropList: ["Macadamia"],
      weeds: [
        { weed: "Husk Spot (Pseudocercospora macadamiae)", pestList: ["Husk Spot"], states: ["All"], rate: "80", rateMax: "80", unit: "mL/100L", stage: "Match head growth stage", note: "Commence BELANTY applications at match head growth stage and repeat applications at 21 days interval. Apply a maximum of 3 applications of BELANTY a year, and no more than 2 consecutive applications per year. Ensure that fungicides from an alternative chemical group are included in the spray program each season. WHP: 14 days." }
      ]
    },
    {
      crop: "Cucurbits (field and protected) — Powdery mildew and gummy stem blight control",
      cropList: ["Cucurbits"],
      weeds: [
        { weed: "Powdery mildew (Podosphaera fuliginea, Podosphaera xanthii), Gummy Stem Blight (Didymella bryoniae, Stagonosporopsis sp.)", pestList: ["Powdery Mildew","Gummy Stem Blight"], states: ["All"], rate: "1.25", rateMax: "1.25", unit: "L/ha", stage: "Prior to infection period", note: "Apply BELANTY prior to an infection period when conditions favour the development of disease. Use a 7-10 day interval, a maximum of 3 sprays per crop and no more than 2 consecutive applications. Use shorter interval when conditions favour high disease pressure. Mix and apply BELANTY in a sufficient volume of water to ensure thorough coverage of all plant parts. The use of Belanty Fungicide is subject to the CropLife Australia Resistance Management Strategy. Apply no more than two consecutive sprays of Group 3 fungicides, and no more than three per season. WHP: Nil." }
      ]
    },
    {
      crop: "Fruiting Vegetables (field and protected) — Powdery mildew and target spot control",
      cropList: ["Fruiting Vegetables","Tomato","Capsicum","Eggplant","Chillies","Tomatillo"],
      weeds: [
        { weed: "Powdery mildew (Leveillula Taurica, Oidium lycopersici), Target spot (Alternaria solani)", pestList: ["Powdery Mildew","Target Spot"], states: ["All"], rate: "1.25", rateMax: "1.25", unit: "L/ha", stage: "As required", note: "The use of Belanty Fungicide is subject to the CropLife Australia Resistance Management Strategy. Apply no more than two consecutive sprays of Group 3 fungicides, and no more than three per season. WHP: Nil." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by aircraft",
    "DO NOT apply if heavy rains or storms are forecast within 3 days",
    "DO NOT irrigate to the point of field runoff for at least 3 days after application",
    "DO NOT apply to established powdery mildew infections (grapes)",
    "DO NOT use in equipment that requires concentrations greater than 400 mL/100 L of water (5x concentration)",
    "DO NOT apply after stage 2B (1% hull split) in almonds"
  ],

  compatibility: {
    compatible:   ["Acrobat SC", "Aero (WG)", "Amistar 250 SC", "Cabrio (EC)", "Captan 900 WG", "Merivon (SC)", "Vivando (SC)", "Switch (WG)"],
    incompatible: ["Dithane Rainshield Neo Tech 750 WG"],
    notes:        ["Physical compatibility does not necessarily guarantee biological compatibility", "Conduct jar test prior to mixing commercial quantities"]
  },

  withholding: {
    harvest: "Apples: 7 days. Grapes: 7 days. Macadamia: 14 days. Fruiting Vegetables and Cucurbits: Nil. Almonds: Not required when used as directed.",
    grazing: "DO NOT GRAZE ANY TREATED AREA OR CUT FOR STOCKFOOD"
  },

  surfactant:     "Ensure thorough coverage of plants, especially the underside of leaves and young grape bunches",
  sprayerCleanup: "To ensure even mixing, half-fill the spray tank with clean water and add the required amount of product. If required, add compatible products and agitate thoroughly, then add the remainder of the water. Agitate again before spraying commences."
};
