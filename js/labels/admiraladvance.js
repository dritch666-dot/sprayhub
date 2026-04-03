// ─────────────────────────────────────────────────────────────────────────────
// ADMIRAL ADVANCE INSECT GROWTH REGULATOR — Label Data
// Insecticide | Liquid Concentrate
// Source: Sumitomo_Chemical_Admiral_Advance_Insect_Growth_Regulator_Label.pdf
// APVMA Approval No: 67264/62307
// Sumitomo Chemical Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['admiraladvance'] = {
  name:             "Admiral Advance Insect Growth Regulator",
  company: "Brandt",

  category:         "Plant Growth Regulators",
  activeIngredient: "100 g/L Pyriproxyfen",
  group:            "Group 7C Insecticide",
  modeOfAction:     "Insect growth regulator; suppresses embryogenesis in insect eggs and inhibits metamorphosis and adult emergence of target insects",
  formulation:      "Liquid Concentrate",
  color:            "#2d4b1e",
  apvma:            "67264",
  labelPdf:         "Source labels/Sumitomo_Chemical_Admiral_Advance_Insect_Growth_Regulator_Label.pdf",
  sdsPdf:           "SDS Labels/ADMIRAL_ADVANCE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Plant Growth Regulator",
    target: ["Silverleaf whitefly", "Greenhouse whitefly", "Scale insects"],
    timing: ["Post-emergent application"]
  },

  crops: [
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        { weed: "Silverleaf whitefly", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "When thresholds exceeded", note: "Ground application 100-150 L/ha or aerial 20-30 L/ha; maximum 2 applications per crop" }
      ]
    },
    {
      crop: "Cucurbits (melons, pumpkin, cucumber, zucchini)",
      cropList: ["Cucurbits","Melons","Pumpkin","Cucumber","Zucchini"],
      weeds: [
        { weed: "Silverleaf whitefly", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "At first appearance", note: "Apply by foliar spray 100-150 L/ha; high water volume 500-1000 L/ha for dense crops" }
      ]
    },
    {
      crop: "Fruiting Vegetables (tomato, capsicum, eggplant)",
      cropList: ["Fruiting Vegetables","Tomato","Capsicum","Eggplant"],
      weeds: [
        { weed: "Silverleaf and greenhouse whitefly", pestList: ["Silverleaf and Greenhouse Whitefly"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "Post-emergent", note: "Thorough coverage essential; maximum 2 applications per crop with 14-day minimum interval" }
      ]
    },
    {
      crop: "Leafy Lettuce",
      cropList: ["Leafy Lettuce"],
      weeds: [
        { weed: "Silverleaf whitefly", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "Post-emergent", note: "Follow SLW Resistance Management Strategy" }
      ]
    },
    {
      crop: "Sweet Potatoes",
      cropList: ["Sweet Potatoes"],
      weeds: [
        { weed: "Silverleaf whitefly", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "Post-emergent", note: "Subject to SLW Resistance Management Strategy" }
      ]
    },
    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
        { weed: "Red scale, black scale, citrus snow scale, cottony cushion scale", pestList: ["Red Scale", "Black Scale", "Citrus Snow Scale", "Cottony Cushion Scale"], states: ["All"], rate: "50", rateMax: "50", unit: "mL/100L", stage: "Crawler release", note: "Apply at time of crawler release; maximum 2 applications per season on tree crops" }
      ]
    },
    {
      crop: "Mangoes",
      cropList: ["Mangoes"],
      weeds: [
        { weed: "Mango scale, pink wax scale", pestList: ["Mango Scale", "Pink Wax Scale"], states: ["All"], rate: "50", rateMax: "50", unit: "mL/100L", stage: "Crawler release", note: "Apply at crawler release from spring to autumn; maximum 2 applications per season" }
      ]
    },
    {
      crop: "Olives",
      cropList: ["Olives"],
      weeds: [
        { weed: "Black scale, pink wax scale", pestList: ["Black Scale", "Pink Wax Scale"], states: ["All"], rate: "50", rateMax: "50", unit: "mL/100L", stage: "Crawler release", note: "Pink wax scale: apply spring to early summer" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply if rain forecast within 48 hours",
    "DO NOT apply to soils where surface water is evident",
    "DO NOT use more than twice per season",
    "DO NOT apply on back sprayers for cotton",
    "DO NOT apply more than 2 applications per crop",
    "Minimum 14-day interval between applications"
  ],

  compatibility: {
    compatible:   ["Other approved chemistry for SLW management (non-IGR products)"],
    incompatible: [],
    notes:        ["Should be alternated with other suitable products to maintain beneficial insects"]
  },

  withholding: {
    harvest: "Cotton 28 days; fruiting vegetables/cucurbits 1 day; leafy lettuce/sweet potatoes 7 days; citrus/mangoes/olives 7-28 days depending on crop",
    grazing: "Cotton: do not graze treated crop or cut for stock feed; do not feed cotton trash to livestock"
  },

  surfactant:     "Not typically required",
  sprayerCleanup: "Empty tank and completely drain system; rinse tank, pump, lines, hoses, filters and nozzles by circulating clean water; repeat rinse procedure twice"
};
