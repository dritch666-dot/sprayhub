// ─────────────────────────────────────────────────────────────────────────────
// TRIDIM 250 EC FUNGICIDE — Label Data
// Fungicide | Emulsifiable Concentrate
// Source: Tridim_250EC_Fungicide_Label.pdf
// APVMA Approval No: 51580/122652
// Colin Campbell (Chemicals) Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['tridim250ec'] = {
  name:             "Tridim 250 EC Fungicide",
  company: "Campbell",

  category:         "Fungicides",
  activeIngredient: "250 g/L Triadimenol",
  group:            "Group 3 Fungicide",
  modeOfAction:     "Sterol demethylation inhibitor (DMI)",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#8B6914",
  apvma:            "51580",
  labelPdf:         "Source labels/Tridim_250EC_Fungicide_Label.pdf",
  sdsPdf:         "SDS Labels/SDS-Tridim-250-EC-Fungicide-2017.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Ring spot", "Powdery mildew", "Myrtle rust", "Dollar spot"],
    timing: ["10-14 day intervals"]
  },

  crops: [
    {
      crop: "Brassica vegetables",
      cropList: ["Cabbage", "Cauliflower", "Broccoli", "Brussels sprouts"],
      weeds: [
        { weed: "Ring Spot", pestList: ["Ring Spot"], states: ["All"], rate: "200", rateMax: "400", unit: "mL/ha", stage: "After rain", note: "Plus 200 mL/ha non-ionic wetter; apply every 10 days; max 2 consecutive applications" },
        { weed: "Ring Spot", pestList: ["Ring Spot"], states: ["All"], rate: "200", rateMax: "400", unit: "mL/ha", stage: "Disease pressure", note: "Start program immediately following first 2 consecutive rainy days after transplanting" }
      ]
    },
    {
      crop: "Cucurbits",
      cropList: ["Cucumber", "Melon", "Pumpkin", "Squash", "Zucchini"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "40", rateMax: "400", unit: "mL/100L", stage: "Disease development", note: "Alternate with non-Group 3 fungicide on 5-10 day schedule; DO NOT apply more than 4 sprays" }
      ]
    },
    {
      crop: "Tomatoes, Peppers, Eggplants",
      cropList: ["Tomatoes", "Peppers", "Capsicums", "Chillies", "Eggplants"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "40", rateMax: "40", unit: "mL/100L", stage: "First sign of disease", note: "Tank mix or alternate with non-Group 3 fungicides; 5-10 day intervals; max 4 sprays per crop" }
      ]
    },
    {
      crop: "Grapevines",
      cropList: ["Grapevines", "Grapes"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "10", rateMax: "10", unit: "mL/100L", stage: "Preventative program", note: "Dilute spraying; max 3 sprays per season; DO NOT exceed 50 mL/100L in any equipment; minimum 250 L/ha water volume" }
      ]
    },
    {
      crop: "Papaws",
      cropList: ["Papaws", "Papayas"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["Qld", "NSW", "WA"], rate: "20", rateMax: "200", unit: "mL/100L", stage: "Disease development", note: "Repeat every 14 days while conditions favor disease; ensure thorough coverage" }
      ]
    },
    {
      crop: "Sugar Cane",
      cropList: ["Sugar Cane"],
      weeds: [
        { weed: "Pineapple disease", pestList: ["Pineapple Disease"], states: ["Qld", "NSW"], rate: "20", rateMax: "20", unit: "mL/100L", stage: "Setts treatment", note: "Apply to setts by dipping or spraying; ensure thorough wetting of cut ends" }
      ]
    },
    {
      crop: "Parsnips, Radish, Swede, Turnip",
      cropList: ["Parsnips", "Radish", "Swede", "Turnip"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "40", rateMax: "400", unit: "mL/100L", stage: "First sign of infection", note: "Maximum 2 foliar applications; 10 day minimum interval; boom sprayer, hand wands, or side-mounted boom" }
      ]
    },
    {
      crop: "Riberries, Anise Myrtle, Lemon Myrtle",
      cropList: ["Riberries", "Anise Myrtle", "Lemon Myrtle"],
      weeds: [
        { weed: "Myrtle rust", pestList: ["Myrtle Rust"], states: ["All"], rate: "100", rateMax: "150", unit: "mL/ha", stage: "Disease appearance", note: "Apply 2 sprays per crop 4 weeks apart; 14-21 day minimum interval; maximum 400 L/ha spray volume" }
      ]
    },
    {
      crop: "Nursery stock and Ornamentals",
      cropList: ["Ornamentals", "Cut flowers", "Nursery stock"],
      weeds: [
        { weed: "General disease control", pestList: ["Powdery Mildew", "Rust"], states: ["All"], rate: "50", rateMax: "50", unit: "mL/100L", stage: "Disease development", note: "Ground application only; test sample area for phytotoxicity; 14-21 day interval" }
      ]
    },
    {
      crop: "Tea Tree",
      cropList: ["Tea Tree", "Oil tea tree"],
      weeds: [
        { weed: "Myrtle rust", pestList: ["Myrtle Rust"], states: ["All"], rate: "100", rateMax: "150", unit: "mL/ha", stage: "Disease appearance", note: "2 sprays per crop 4 weeks apart; maximum 400 L/ha spray volume; ground application only" }
      ]
    },
    {
      crop: "Turf",
      cropList: ["Turf", "Lawn"],
      weeds: [
        { weed: "Dollar spot", pestList: ["Dollar Spot"], states: ["NSW", "Vic", "Qld", "SA", "WA"], rate: "30", rateMax: "60", unit: "mL/100m2", stage: "Preventative or curative", note: "DO NOT apply earlier than 5 weeks after sowing; monthly program" },
        { weed: "Black Helminthosporium", pestList: ["Black Helminthosporium"], states: ["Qld", "NSW", "TAS"], rate: "60", rateMax: "60", unit: "mL/100m2", stage: "Growth period", note: "Use high volume equipment or irrigate thoroughly; monthly program" },
        { weed: "Take-all patch", pestList: ["Take-all Patch"], states: ["NSW", "Vic", "Qld", "WA"], rate: "Variable", rateMax: "Variable", unit: "per label", stage: "After soil fumigation", note: "Apply 6-8 weeks after seeding; repeat every 8 weeks in first 2 years" },
        { weed: "Winter Fusarium", pestList: ["Winter Fusarium"], states: ["NSW", "Vic", "TAS"], rate: "Variable", rateMax: "Variable", unit: "per label", stage: "Monthly program", note: "From end of March until danger passes" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply more than 2 consecutive applications of any Group 3 fungicide",
    "DO NOT apply more than 4 sprays per crop (except turf)",
    "DO NOT apply to turf earlier than 5 weeks after sowing",
    "DO NOT use in equipment requiring rates >50 mL/100L (grapevines)",
    "DO NOT apply in water volumes <250 L/ha (grapevines)",
    "Rotate with fungicides from different activity groups"
  ],

  compatibility: "Tank mix compatible with many pesticides. Always consult label before mixing.",

  mixing: "Half fill spray tank with water. Add Tridim with agitator running. Top up with water. Agitate prior to and during spraying.",

  withholding: {
    harvest: "Cucurbits, eggplant, peppers, tomatoes: 1 day; Brassicas, grapevines, pawpaws, parsnips, radish, swede, turnip: 7 days; Riberries: 4 weeks (fruit); Anise/Lemon myrtle: 4 months (leaves)",
    grazing: "Brassicas: DO NOT graze; Parsnips, radish, swede, turnip: DO NOT graze; Anise/Lemon myrtle, Riberries: DO NOT graze during application season; Tea tree: DO NOT graze during application season"
  },

  surfactant:     "Not explicitly required but compatible with adjuvants",
  sprayerCleanup: "Triple rinse container before disposal; add rinsings to spray tank"
};
