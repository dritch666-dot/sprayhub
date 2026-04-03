// ─────────────────────────────────────────────────────────────────────────────
// Adama Diuron 900 WG — Label Data
// Water Dispersible Granule | Herbicide
// Source: Adama_Adama_Diuron_900_Wg_Herbicide_Label.pdf
// APVMA Approval No: 46812/63192
// Adama
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['adamadiuron900wg'] = {
  name:             "Adama Diuron 900 WG",
  company: "Adama",

  category:         "Herbicides",
  activeIngredient: "900 g/kg Diuron",
  group:            "Group C Herbicide",
  modeOfAction:     "Inhibitor of photosynthesis at photosystem II",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#2563eb",
  apvma:            "46812/63192",
  labelPdf:         "Source labels/Adama_Adama_Diuron_900_Wg_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/ADAMA_DIURON_900_WDG_HERBICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Herbicide",
    target: ["Annual broadleaf weeds", "Annual grasses"],
    timing: ["Pre-emergence", "Post-emergence (lay-by)"]
  },

  crops: [
    {
      crop: "Cotton — Pre-emergence",
      cropList: ["Cotton","Pre-Emergence"],
      weeds: [
        { weed: "Annual broadleaf weeds and some annual grasses", pestList: ["Annual Broadleaf Weeds and Some Annual Grasses"], states: ["Qld", "NSW"], rate: "1", rateMax: "2", unit: "kg/ha", stage: "Pre-emergence (apply at planting or within 7 days)", note: "Apply in 300-450 L water/ha. Use high rate on clay/organic soils. DO NOT use on light sandy soils" }
      ]
    },
    {
      crop: "Cotton — Post-emergence (lay-by)",
      cropList: ["Cotton","Post-Emergence"],
      weeds: [
        { weed: "Annual weeds 15 cm or less", pestList: ["Annual Weeds 15 Cm or Less"], states: ["Qld", "NSW"], rate: "1", rateMax: "2", unit: "kg/ha", stage: "Post-emergence lay-by", note: "Apply when cotton at least 30 cm high. Add Wetspray 600 if weeds emerged. Directed spray beneath plants. DO NOT use on light sandy soils" }
      ]
    },
    {
      crop: "Lucerne (established for 1 year or more) — Annual weeds",
      cropList: ["Lucerne (Established For 1 Year Or More)","Annual Weeds"],
      weeds: [
        { weed: "Amsinckia, Charlock, Dead Nettle, Poppies, Sheepweed, Doublegee, Capeweed, Spiny Emex, Wild Radish, Wild Turnip", pestList: ["Amsinckia", "Charlock", "Dead Nettle", "Poppies", "Sheepweed", "Doublegee", "Capeweed", "Spiny Emex", "Wild Radish", "Wild Turnip"], states: ["All"], rate: "830", rateMax: "830", unit: "g/ha", stage: "When lucerne grazed", note: "Weeds very small (2-4 leaf). Use only in areas where lucerne becomes winter dormant" }
      ]
    },
    {
      crop: "Lupins — Annual weeds",
      cropList: ["Lupins","Annual Weeds"],
      weeds: [
        { weed: "Annual Ryegrass, Capeweed, Clovers, Medics, Doublegee, Wild Radish, Wild Turnip, Brome Grass, Dock, Sorrel, Wild Oats", pestList: ["Annual Ryegrass", "Capeweed", "Clovers", "Medics", "Doublegee", "Wild Radish", "Wild Turnip", "Brome Grass", "Dock", "Sorrel", "Wild Oats"], states: ["WA"], rate: "1.1", rateMax: "1.1", unit: "kg/ha", stage: "Prior to crop emergence", note: "Light soils only. Apply via boom spray in minimum 50 L water/ha. DO NOT use on white or grey sands" }
      ]
    },
    {
      crop: "Pulses (Chickpeas, Faba beans, Lentils, Narbon Beans, Field Peas, Vetch) — Annual weeds",
      cropList: ["Pulses","Chickpeas","Faba Beans","Lentils","Narbon Beans","Field Peas","Vetch","Annual Weeds"],
      weeds: [
        { weed: "Cape Weed, Crassula, Double Gee, Erodium, Wild Radish, Wild Turnip, Toad Rush", pestList: ["Cape Weed", "Crassula", "Double Gee", "Erodium", "Wild Radish", "Wild Turnip", "Toad Rush"], states: ["All"], rate: "830", rateMax: "1.1", unit: "g/ha", stage: "Incorporated by sowing or post-sowing pre-emergent", note: "IBS: Apply at 830-1.1 kg/ha. PSPE: Apply at 550-830 g/ha. Lower rates on light sandy soils" }
      ]
    },
    {
      crop: "Wheat, Barley, Triticale, Cereal Rye, Oats — Annual weeds",
      cropList: ["Wheat","Barley","Triticale","Cereal Rye","Oats","Annual Weeds"],
      weeds: [
        { weed: "Capeweed, Doublegee, Mustard, Water Weeds, Wild Radish (suppression)", pestList: ["Capeweed", "Doublegee", "Mustard", "Water Weeds", "Wild Radish"], states: ["WA"], rate: "275", rateMax: "550", unit: "g/ha", stage: "Post-plant pre-emergent (3-4 days of planting)", note: "Full cut sowing systems only. Use lower rate on sandy soils. DO NOT use on grey or white sands" }
      ]
    },
    {
      crop: "Wheat, Barley, Oats — Various broadleaf weeds",
      cropList: ["Wheat","Barley","Oats","Various Broadleaf Weeds"],
      weeds: [
        { weed: "Amsinckia, Capeweed, Charlock, Deadnettle, Iceplant, Melilotus, Mustards, Poppies, Saffron Thistle, Sheepweed, Spiny Emex, Three Corner Jack, Wild Radish, Wild Turnip", pestList: ["Amsinckia", "Capeweed", "Charlock", "Deadnettle", "Iceplant", "Melilotus", "Mustards", "Poppies", "Saffron Thistle", "Sheepweed", "Spiny Emex", "Three Corner Jack", "Wild Radish", "Wild Turnip"], states: ["NSW", "ACT", "Vic", "SA"], rate: "500", rateMax: "500", unit: "g/ha", stage: "2-4 leaf stage of weeds, 2-5 leaf stage of crop", note: "Apply within 6 weeks of sowing. DO NOT spray later than early tillering" }
      ]
    },
    {
      crop: "Bananas — Annual weeds",
      cropList: ["Bananas","Annual Weeds"],
      weeds: [
        { weed: "Amaranthus, Barley Grass, Barnyard Grass, Capeweed, Cobbler's Pegs, Crowsfoot Grass, Fat Hen, Guinea Grass, Mustard, Pigweed, Prince of Wales Feather, Rye Grass, Sow Thistle, Summer Grass, Wild Oats, Wild Radish, Wild Turnip", pestList: ["Amaranthus", "Barley Grass", "Barnyard Grass", "Capeweed", "Cobbler's Pegs", "Crowsfoot Grass", "Fat Hen", "Guinea Grass", "Mustard", "Pigweed", "Prince of Wales Feather", "Rye Grass", "Sow Thistle", "Summer Grass", "Wild Oats", "Wild Radish", "Wild Turnip"], states: ["Qld", "NSW", "WA"], rate: "275", rateMax: "500", unit: "g/ha", stage: "Pre-emergence", note: "Add Spraytop 250 SL at 1.2-1.6 L/ha. Apply to weeds up to 10 cm high" }
      ]
    },
    {
      crop: "Sugarcane — Annual and perennial weeds",
      cropList: ["Sugarcane","Annual And Perennial Weeds"],
      weeds: [
        { weed: "Amaranthus, Barley Grass, Barnyard Grass, Capeweed, Cobbler's Pegs, Crowsfoot Grass, Fat Hen, Guinea Grass, Mustard, Pigweed, Prince of Wales Feather, Ryegrass, Sow Thistle, Summer Grass, Wild Oats, Wild Radish, Wild Turnip", pestList: ["Amaranthus", "Barley Grass", "Barnyard Grass", "Capeweed", "Cobbler's Pegs", "Crowsfoot Grass", "Fat Hen", "Guinea Grass", "Mustard", "Pigweed", "Prince of Wales Feather", "Ryegrass", "Sow Thistle", "Summer Grass", "Wild Oats", "Wild Radish", "Wild Turnip"], states: ["Qld", "NSW"], rate: "1.9", rateMax: "1.9", unit: "kg/ha", stage: "Post-emergence of cane", note: "Directed band spray over maximum 60% of crop area. DO NOT apply in Wet Tropics" }
      ]
    },
    {
      crop: "Asparagus — Annual broadleaf weeds and grasses",
      cropList: ["Asparagus","Annual Broadleaf Weeds And Grasses"],
      weeds: [
        { weed: "Annual broadleaf weeds and some annual grasses", pestList: ["Annual Broadleaf Weeds and Some Annual Grasses"], states: ["Vic"], rate: "1.5", rateMax: "2", unit: "kg/ha", stage: "Pre-emergence", note: "Applied in established beds after hilling up and before spike emergence. DO NOT use on seedling asparagus" }
      ]
    }
  ],

  restraints: [
    "DO NOT use in water-logged areas",
    "DO NOT apply if greater than 50 mm rainfall expected within 3 days",
    "DO NOT irrigate within 3 days of application",
    "DO NOT apply to fields where slope exceeds 3%",
    "DO NOT spot spray more than 5% of total farm areas",
    "DO NOT apply more than once per calendar year",
    "DO NOT use in cotton UNLESS ALL irrigation tailwater and/or rainfall can be captured",
    "DO NOT use in pulse crops UNLESS using no-till farming practices",
    "DO NOT use in lucerne UNLESS ALL irrigation tailwater can be captured",
    "DO NOT apply by air",
    "DO NOT apply with spray droplets smaller than COARSE category",
    "DO NOT apply when wind speed less than 3 or more than 20 km/h"
  ],

  compatibility: {
    compatible:   ["Diquat", "Spraytop 250 SL", "Amitrole", "2,4-D Amine and Ester", "2,4-DB", "MCPA", "Strike-Out 500 EC", "Tackle 750 WP"],
    incompatible: ["Dimethoate", "Flamprop-m-methyl", "Rhino", "Triad", "Tribunil"],
    notes:        ["All tank mixtures should be tested prior to mixing commercial quantities"]
  },

  withholding: {
    harvest: "NOT REQUIRED WHEN USED AS DIRECTED (except pulse crops)",
    grazing: "Pulse crops: DO NOT GRAZE OR CUT FOR STOCK FOOD FOR 35 DAYS AFTER APPLICATION. Other crops: NOT REQUIRED"
  },

  surfactant:     "Wetspray 600 at 170 mL/100 L water (for emerged weeds in cotton post-emergence)",
  sprayerCleanup: "Thoroughly clean all traces from equipment immediately after use. Flush tank, pump, hose and boom with several changes of water after removing nozzle tip and screens"
};
