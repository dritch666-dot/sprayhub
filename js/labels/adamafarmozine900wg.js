// ─────────────────────────────────────────────────────────────────────────────
// Adama Farmozine 900 WG — Label Data
// Water Dispersible Granule | Herbicide
// Source: Adama_Farmozine_Label.pdf
// APVMA Approval No: 46813/63193
// Adama
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['adamafarmozine900wg'] = {
  name: "Adama Farmozine 900 WG",
  company: "Adama",

  category:         "Herbicides",
  activeIngredient: "900 g/kg Atrazine",
  group: "Group C Herbicide",
  modeOfAction: "Inhibitor of photosynthesis at photosystem II",
  formulation: "Water Dispersible Granule (WG)",
  color: "#db2777",
  apvma: "46813",
  labelPdf: "Source labels/Adama_Farmozine_Label.pdf",
  sdsPdf: "SDS Labels/FARMOZINE_900_WDG.pdf",
  signalHeading: "Caution",
  classification: {
    type: "Herbicide",
    target: ["Annual broadleaf weeds", "Annual grasses"],
    timing: ["Pre-emergence", "Post-emergence"]
  },

  crops: [
    {
      crop: "Citrus — Annual broadleaf weeds and grasses",
      cropList: ["Citrus","Annual Broadleaf Weeds And Grasses"],
      weeds: [
        { weed: "Amaranthus, Barley Grass, Capeweed, Doublegee, Spurge, Wild Oats, Wild Turnip", pestList: ["Amaranthus", "Barley Grass", "Capeweed", "Doublegee", "Spurge", "Wild Oats", "Wild Turnip"], states: ["Qld", "NSW", "Vic"], rate: "1.5", rateMax: "2.2", unit: "kg/ha", stage: "Pre-emergence to early post-emergence", note: "Apply to weed-free ground. Use low rate on light sandy soils, high rate on heavier soils. Apply in autumn or spring" }
      ]
    },
    {
      crop: "Grapes (Vineyards) — Annual broadleaf weeds and grasses",
      cropList: ["Grapes (Vineyards)","Annual Broadleaf Weeds And Grasses"],
      weeds: [
        { weed: "Amaranthus, Barley Grass, Capeweed, Doublegee, Erodium, Wild Radish, Wild Turnip", pestList: ["Amaranthus", "Barley Grass", "Capeweed", "Doublegee", "Erodium", "Wild Radish", "Wild Turnip"], states: ["Vic", "NSW", "SA"], rate: "1.5", rateMax: "2.2", unit: "kg/ha", stage: "Pre-emergence", note: "Apply in late autumn or spring. NOT to be used in young vineyards less than 1 year old" }
      ]
    },
    {
      crop: "Pome fruit — Annual broadleaf weeds and grasses",
      cropList: ["Pome Fruit","Annual Broadleaf Weeds And Grasses"],
      weeds: [
        { weed: "Amaranthus, Barley Grass, Capeweed, Doublegee, Wild Radish, Wild Turnip", pestList: ["Amaranthus", "Barley Grass", "Capeweed", "Doublegee", "Wild Radish", "Wild Turnip"], states: ["Vic", "NSW", "SA"], rate: "1.5", rateMax: "2.2", unit: "kg/ha", stage: "Pre-emergence", note: "Apply to established orchards only. Do not use on young plantings" }
      ]
    },
    {
      crop: "Peaches and Nectarines — Annual broadleaf weeds and grasses",
      cropList: ["Peaches And Nectarines","Annual Broadleaf Weeds And Grasses"],
      weeds: [
        { weed: "Amaranthus, Barley Grass, Capeweed, Doublegee, Erodium, Wild Radish, Wild Turnip", pestList: ["Amaranthus", "Barley Grass", "Capeweed", "Doublegee", "Erodium", "Wild Radish", "Wild Turnip"], states: ["Vic", "NSW", "SA"], rate: "1.5", rateMax: "2.2", unit: "kg/ha", stage: "Pre-emergence", note: "Apply to established orchards. Not suitable for young plantings" }
      ]
    },
    {
      crop: "Nuts (Almonds, Hazelnuts, Walnuts) — Annual broadleaf weeds and grasses",
      cropList: ["Nuts","Almonds","Hazelnuts","Walnuts","Annual Broadleaf Weeds And Grasses"],
      weeds: [
        { weed: "Amaranthus, Barley Grass, Capeweed, Doublegee, Erodium, Wild Radish", pestList: ["Amaranthus", "Barley Grass", "Capeweed", "Doublegee", "Erodium", "Wild Radish"], states: ["Vic", "NSW", "SA"], rate: "1.5", rateMax: "2.2", unit: "kg/ha", stage: "Pre-emergence", note: "For established nut orchards only. Apply in autumn or spring" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply to crops less than 1 year old",
    "DO NOT apply if rainfall expected within 3 days of application",
    "DO NOT apply to light sandy soils in areas with rainfall less than 450 mm annually",
    "DO NOT apply by air",
    "DO NOT apply when wind speed less than 3 km/h or greater than 20 km/h",
    "DO NOT apply in Tasmania",
    "DO NOT apply during surface temperature inversion conditions",
    "DO NOT apply more than once per calendar year",
    "DO NOT contaminate water supplies"
  ],

  compatibility: {
    compatible: ["Glyphosate", "Surfactants"],
    incompatible: [],
    notes: ["Test tank mixtures prior to mixing commercial quantities"]
  },

  withholding: {
    harvest: "NOT REQUIRED WHEN USED AS DIRECTED",
    grazing: "NOT REQUIRED WHEN USED AS DIRECTED"
  },

  surfactant: "Wetting agent may be used at 0.1% v/v",
  sprayerCleanup: "After use, thoroughly clean all traces from equipment. Flush tank, pump, hoses and nozzles with several changes of water"
};
