// ─────────────────────────────────────────────────────────────────────────────
// MERIVON FUNGICIDE — Label Data
// Suspension Concentrate (SC) | Group 7 11 Fungicides
// Source: Basf_Merivon_Fungicide_Label.pdf
// APVMA Approval No: 85698/141409
// BASF Australia Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['basfmerivon'] = {
  name:             "MERIVON Fungicide",
  company: "BASF",

  category:         "Fungicides",
  activeIngredient: "250 g/L Pyraclostrobin, 250 g/L Fluxapyroxad",
  group:            "Group 7 11 Fungicides",
  modeOfAction:     "SDHI and Strobilurin combination for broad-spectrum foliar disease control",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#15803d",
  apvma:            "85698/141409",
  labelPdf:         "Source labels/Basf_Merivon_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/Merivon_Fungicide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Shot hole", "Blossom blight", "Rust", "Anthracnose", "Powdery mildew", "Target spot"],
    timing: ["7-14 day intervals"]
  },

  crops: [
    {
      crop: "Macadamia — Husk spot and flower blight control",
      cropList: ["Macadamia"],
      weeds: [
        { weed: "Husk spot (Pseudocercospora macadamiae)", pestList: ["Husk Spot"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "Match head growth stage", note: "Repeat at 21 day intervals, maximum 3 applications per year" },
        { weed: "Flower blight complex (dry flower, raceme blight)", pestList: ["Flower Blight Complex (Dry Flower", "Raceme Blight"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "Flowering stage 1", note: "Follow up with second application at stage 3, maximum 2 consecutive per year" }
      ]
    },
    {
      crop: "Almond — Multiple disease control",
      cropList: ["Almond"],
      weeds: [
        { weed: "Shot hole (Wilsonomyces carpophilus)", pestList: ["Shot Hole"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "Preventive program", note: "10-21 day intervals, apply 1500-2500 L/ha" },
        { weed: "Blossom blight/Brown rot (Monilinia spp.)", pestList: ["Blossom Blight/Brown Rot"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "Early flowering", note: "Preventive program, maximum 3 applications per year" },
        { weed: "Leaf Rust (Transchelia discolor)", pestList: ["Leaf Rust"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "As required", note: "Maximum 2 consecutive applications per year" },
        { weed: "Alternaria Leaf Spot (Alternaria alternate)", pestList: ["Alternaria Leaf Spot"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "As required", note: "Part of integrated program" },
        { weed: "Anthracnose (Colletotrichum acutatum)", pestList: ["Anthracnose"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "As required", note: "Hull rot: 2 applications at 7-14 day intervals from hull split" },
        { weed: "Scab or Freckle (Cladosporium carpophila)", pestList: ["Scab or Freckle"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "As required", note: "Part of disease control program" }
      ]
    },
    {
      crop: "Cherries — Blossom blight control",
      cropList: ["Cherries"],
      weeds: [
        { weed: "Blossom blight/Brown rot (Monilinia spp.)", pestList: ["Blossom Blight/Brown Rot"], states: ["All"], rate: "25", rateMax: "25", unit: "mL/100L", stage: "Early flowering to full bloom", note: "7-14 day intervals, maximum 3 applications per year, 21 days WHC" }
      ]
    },
    {
      crop: "Fruiting Vegetables — Powdery mildew and target spot control",
      cropList: ["Fruiting Vegetables","Tomato","Capsicum","Eggplant"],
      weeds: [
        { weed: "Powdery mildews (Leveillula taurica, Oidium lycopersici)", pestList: ["Powdery Mildew"], states: ["All"], rate: "240", rateMax: "240", unit: "mL/ha", stage: "Preventive program", note: "7-14 day intervals, apply 300-700 L/ha, no withholding" },
        { weed: "Target spot (Alternaria solani)", pestList: ["Target Spot"], states: ["All"], rate: "240", rateMax: "240", unit: "mL/ha", stage: "As required", note: "Maximum 2 consecutive applications of Group 7 & 11" }
      ]
    },
    {
      crop: "Cucurbits — Powdery mildew and gummy stem blight control",
      cropList: ["Cucurbits"],
      weeds: [
        { weed: "Gummy stem blight (Didymella bryoniae)", pestList: ["Gummy Stem Blight"], states: ["All"], rate: "240", rateMax: "240", unit: "mL/ha", stage: "Preventive program", note: "7-14 day intervals, apply 300-700 L/ha" },
        { weed: "Powdery mildew (Sphaerotheca fuliginea)", pestList: ["Powdery Mildew"], states: ["All"], rate: "240", rateMax: "240", unit: "mL/ha", stage: "As required", note: "Ensure fungicides from alternative chemical group in program" }
      ]
    },
    {
      crop: "Citrus (Lemon, Tangelo) — Brown spot and blossom blight control",
      cropList: ["Citrus","Lemon","Tangelo"],
      weeds: [
        { weed: "Emperor brown spot (Alternaria alternata)", pestList: ["Emperor Brown Spot"], states: ["All"], rate: "25", rateMax: "25", unit: "mL/100L", stage: "Preventive program", note: "7-14 day intervals, apply up to point of runoff, maximum 2000L/ha" },
        { weed: "Blossom blight/mould (Botrytis cinerea)", pestList: ["Blossom Blight/Mould"], states: ["All"], rate: "25", rateMax: "25", unit: "mL/100L", stage: "As required", note: "Maximum 3 applications per year" }
      ]
    },
    {
      crop: "Mango — Anthracnose and powdery mildew control",
      cropList: ["Mango"],
      weeds: [
        { weed: "Anthracnose (Colletotrichum spp.)", pestList: ["Anthracnose"], states: ["All"], rate: "25", rateMax: "25", unit: "mL/100L", stage: "Preventive program", note: "14 day intervals, maximum 4 applications per year" },
        { weed: "Powdery Mildew (Oidium spp.)", pestList: ["Powdery Mildew"], states: ["All"], rate: "25", rateMax: "25", unit: "mL/100L", stage: "As required", note: "Maximum 2 consecutive applications per year" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply with aerial spraying",
    "DO NOT apply if heavy rains or storms are forecast within 3 days",
    "DO NOT irrigate to the point of field runoff for at least 3 days after application",
    "DO NOT apply to water-logged soil"
  ],

  compatibility: {
    compatible:   ["Acrobat SC", "Bravo Weather Stik (SC)", "Captan 900 WG", "Switch (WG)", "Zampro (SC)"],
    incompatible: ["Blue Shield DF Copper (DF)", "Ziram (WG)"],
    notes:        ["Physical compatibility does not guarantee biological compatibility", "Conduct jar test before mixing commercial quantities"]
  },

  withholding: {
    harvest: "Fruiting vegetables, Cucurbits, Citrus, Mango: Not required; Almonds, Macadamias: 21 days; Cherries: 2 days",
    grazing: "Not applicable"
  },

  surfactant:     "Apply by dilute or concentrate spraying equipment as specified",
  sprayerCleanup: "Half-fill spray tank with water, add product, agitate thoroughly, then add remainder of water. Maintain agitation throughout"
};
