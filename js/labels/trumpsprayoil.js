// ─────────────────────────────────────────────────────────
// Trump Spray Oil — Label Data
// Adjuvant (Spray Oil) | Emulsifiable Concentrate
// Source: Victorian_Chemical_Company_Proprietary_Trump_Spray_Oil_Label.pdf
// APVMA Approval No: 59092
// Victorian Chemical Company
// ─────────────────────────────────────────────────────────
productDatabase['trumpsprayoil'] = {

  name:             "Trump Spray Oil",
  company: "AMVAC",


  category:         "Insecticides",
  activeIngredient: "830 g/L Paraffinic Oil",
  group:            "Adjuvant (Spray Oil)",
  modeOfAction:     "Contact action - smothers pests; can be used as adjuvant/carrier with pesticides",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#16a34a",
  apvma:            "59092",
  labelPdf:         "Source labels/Victorian_Chemical_Company_Proprietary_Trump_Spray_Oil_Label.pdf",
  sdsPdf:           "SDS Labels/TRUMP_SPRAY_OIL.pdf",
  signalHeading:    "Caution",

  classification: {
    type: "Insecticide",
    target: ["Aphids", "Mites", "Scale", "Whitefly"],
    timing: ["Protective"]
  },

  crops: [
    {
      crop: "Almonds, Peaches, Nectarines",
      cropList: ["Almonds", "Peaches", "Nectarines"],
      weeds: [
        { weed: "Aphids (Eggs), Mites (Eggs)", pestList: ["Aphids (Eggs)", "Mites (Eggs)"], states: ["All"], rate: "3", unit: "L/100L", notes: "Dormant or delayed dormant" },
        { weed: "San Jose Scale", pestList: ["San Jose Scale"], states: ["All"], rate: "2", unit: "L/100L", notes: "Dormant" },
        { weed: "Mites and Scales", pestList: ["Mites And Scales"], states: ["All"], rate: "1", rateMax: "2", unit: "L/100L", notes: "Summer (Foliar or Cover) or Post Harvest." }
      ]
    },
    {
      crop: "Apples",
      cropList: ["Apples"],
      weeds: [
        { weed: "Mites (Eggs), Including European Red Mite, Scales (Hard & Soft)", pestList: ["Mites (Eggs)", "Including European Red Mite", "Scales (Hard & Soft)"], states: ["All"], rate: "2", unit: "L/100L", notes: "Dormant or delayed dormant to half green tip" },
        { weed: "Mites", pestList: ["Mites"], states: ["All"], rate: "1", unit: "L/100L", notes: "Summer (Foliar or Cover) or Post Harvest" }
      ]
    },
    {
      crop: "Apricots, Cherries",
      cropList: ["Apricots", "Cherries"],
      weeds: [
        { weed: "San Jose Scale", pestList: ["San Jose Scale"], states: ["All"], rate: "2", unit: "L/100L", notes: "Dormant" },
        { weed: "Mites and Scales", pestList: ["Mites And Scales"], states: ["All"], rate: "1", rateMax: "1.5", unit: "L/100L", notes: "Summer (Foliar or Cover) or Post Harvest. Applications should not be made over oil sensitive varieties. Do not apply to trees lacking adequate moisture." }
      ]
    },
    {
      crop: "Aspara- gus, Beans, Beet, Corn, Cucurbits, Peppers/ Capsicum, Radish, Squash, Tomatoes",
      cropList: ["Aspara- gus", "Beans", "Beet", "Corn", "Cucurbits", "Peppers/ Capsicum", "Radish", "Squash", "Tomatoes"],
      weeds: [
        { weed: "Aphids Mites Thrips Leafhopper", pestList: ["Aphids Mites Thrips Leafhopper"], states: ["All"], rate: "1", rateMax: "2", unit: "L/100L", notes: "As needed." }
      ]
    },
    {
      crop: "Avocado",
      cropList: ["Avocado"],
      weeds: [
        { weed: "Scale Insects", pestList: ["Scale Insects"], states: ["All"], rate: "1.2", rateMax: "1.6", unit: "L/100L", notes: "Apply when heavy scale populations occur on stem, foliage or fruit. Do not apply if trees need watering. Application is most effective against young crawler stages." }
      ]
    },
    {
      crop: "Bananas",
      cropList: ["Bananas"],
      weeds: [
        { weed: "Cercospora Leaf Spot", pestList: ["Cercospora Leaf Spot"], states: ["All"], rate: "4", unit: "L/ha", notes: "Apply in combination with Mancozeb at 2.2-4.5 kg/ha in 200 to 500L of water. Apply at 3-4 week intervals, from December until late April. In North Queensland the interval may be reduced to 10-14 days in the wet season." },
        { weed: "Cercospora Leaf Spot, Leaf Speckle", pestList: ["Cercospora Leaf Spot", "Leaf Speckle"], states: ["All"], rate: "5", unit: "L/ha", notes: "Apply in combination with Tilt* 250 EC. Com- mence spraying in December and apply 4 to 5 times at 21 day intervals. Later use alternative fungicides if needed. Spray both sides of leaves." },
        { weed: "Cercospora Leaf Spot, Leaf Speckle, Cordana Leaf Spot", pestList: ["Cercospora Leaf Spot", "Leaf Speckle", "Cordana Leaf Spot"], states: ["All"], rate: "6", unit: "L/ha", notes: "Apply in combination with Tilt* 250 EC. Spray every two weeks from the start of the wet season in December and make a maximum of 6 applica- tions. Later use alternative fungicides if needed. Spray both sides of leaves." },
        { weed: "Scale Insects", pestList: ["Scale Insects"], states: ["All"], rate: "2", unit: "L/100L", notes: "Apply when heavy scale populations occur on stem, foliage or fruit." }
      ]
    },
    {
      crop: "Shade Trees* and Shrubs in- cluding Coni- fers, Deciduous Broadleaf Ever- greens and Woody Orna- mentals, Orna- mentals Trees*, Shrubs along city streets, oth- er rights of way including Decid- uous and Broad- leaf Evergreens.",
      cropList: ["Shade Trees*", "Shrubs in- cluding Coni- fers", "Deciduous Broadleaf Ever- greens", "Woody Orna- mentals", "Orna- mentals Trees*", "Shrubs along city streets", "oth- er rights of way including Decid- uous", "Broad- leaf Evergreens."],
      weeds: [
        { weed: "Aphids, Scales (Immature) Spider Mites, Whitefly (Immature)", pestList: ["Aphids", "Scales (Immature) Spider Mites", "Whitefly (Immature)"], states: ["All"], rate: "1", rateMax: "2", unit: "L/100L", notes: "Winter Dormant period as needed for plants that become dormant in Winter. Summer (Foliar or Cover) as needed." }
      ]
    },
    {
      crop: "Chrysanthemum Diffenbachia Dracaena Ferns Gardenias Jade Plant Palms Philodendron",
      cropList: ["Chrysanthemum Diffenbachia Dracaena Ferns Gardenias Jade Plant Palms Philodendron"],
      weeds: [
        { weed: "Aphids Scales Whitefly", pestList: ["Aphids Scales Whitefly"], states: ["All"], rate: "1", rateMax: "2", unit: "L/100L", notes: "Do not apply to plants in direct sunlight behind glass. Do not use on Coconut Palms and Maiden- hair Ferns. Chrysanthemum blooms have shown phytotoxic symptoms at the higher rate. Applicator should conduct a test for phytotoxicity by treating a few specimens before making a large-scale application. Protect floor, floor cover- ings and furnishings from overspray. Do not apply to plants in direct sunlight behind glass." }
      ]
    },
    {
      crop: "Azalea Begonia Camellia Chrysanthemum Crown of Thorns",
      cropList: ["Azalea Begonia Camellia Chrysanthemum Crown of Thorns"],
      weeds: [
        { weed: "Aphids Mealybugs Scale (Soft & Hard) Thrips Whitefly (Immature) Reduces number of Spider Mites", pestList: ["Aphids Mealybugs Scale (Soft & Hard) Thrips Whitefly (Immature) Reduces Number Of Spider Mites"], states: ["All"], rate: "1", rateMax: "2", unit: "L/100L" }
      ]
    },
    {
      crop: "Hardy Plants",
      cropList: ["Hardy Plants"],
      weeds: [
        { weed: "Leaf Polish", pestList: ["Leaf Polish"], states: ["All"], rate: "10", unit: "mL/L" }
      ]
    },
    {
      crop: "Christmas Trees",
      cropList: ["Christmas Trees"],
      weeds: [
        { weed: "Aphids, Scales (Soft & Hard) (Immature) Spider Mites", pestList: ["Aphids", "Scales (Soft & Hard) (Immature) Spider Mites"], states: ["All"], rate: "1", rateMax: "2", unit: "L/100L", notes: "Winter or Summer as needed" }
      ]
    },
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        { weed: "Defoliation Aid", pestList: ["Defoliation Aid"], states: ["All"], rate: "500", rateMax: "1000", unit: "mL/100L" }
      ]
    },
    {
      crop: "Wetting Agent if recommended on Herbicide label",
      cropList: ["Wetting Agent if recommended on Herbicide label"],
      weeds: [
        { weed: "Weeds as specified on herbicide la- bel", pestList: ["Weeds As Specified On Herbicide La- Bel"], states: ["All"], rate: "250", rateMax: "500", unit: "mL/100L", notes: "TRUMP Spray Oil may be used as a crop oil in a spray mixture with selective herbicides to improve their wetting and penetrating properties." }
      ]
    },
    {
      crop: "Wetting agent/ ad- juvant /carrier as recommended on fungicide and in- secticide labels",
      cropList: ["Wetting agent/ ad- juvant /carrier as recommended on fungicide", "in- secticide labels"],
      weeds: [
        { weed: "Refer to par- ticular pesti- cide label", pestList: ["Refer To Par- Ticular Pesti- Cide Label"], states: ["All"], rate: "250", rateMax: "500", unit: "mL/100L", notes: "TRUMP Spray Oil acts as a carrier /adjuvant /wetting agent which may improve the perfor- mance of certain pesticides. Always check pesti- cide label for correct rates." }
      ]
    },
    {
      crop: "Mango",
      cropList: ["Mango"],
      weeds: [
          { weed: "scale insects,wax scale, mango plant hopper", pestList: ["Scale Insects", "Wax Scale", "Mango Plant Hopper"], states: ["All"], rate: "1-2", unit: "L/", rateText: "1-2L/100L", notes: "WHP: na. Spray no more than 4 applications per season. do not spray onto pruned trees and when trees are under stress" }
      ]
    },
    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
          { weed: "Redscale, White wax scale, pink wax scale, circular black scale", pestList: ["Redscale", "White Wax Scale", "Pink Wax Scale", "Circular Black Scale"], states: ["All"], rate: "1-2", unit: "L/", rateText: "1-2L/100L", notes: "do not apply over when its hotter then 32 degrees or when trees are stressed" }
      ]
    }
    
  ],

  restraints: [
    "DO NOT spray when temperatures exceed 32°C (except citrus to 35°C)",
    "DO NOT spray if soil is dry or trees suffering moisture stress",
    "DO NOT apply after sulphur or lime-sulphur for 1 month",
    "Wind speed must be 3-20 km/h; avoid surface temperature inversions",
    "DO NOT apply with aircraft"
  ],

  compatibility: {
    compatible:   ["Most fungicides", "Certain insecticides (check labels)"],
    incompatible: ["Sulphur products (within 1 month)", "Certain wettable powders"],
    notes:        ["Can be used as adjuvant with many products", "Read all tank mix product labels"]
  },

  withholding: {
    harvest: "NIL — May be applied up to harvest in some situations (check label).",
    grazing: "Consult label for pasture restrictions."
  },

  surfactant:     "Product contains emulsifying agents. No additional wetter typically required.",
  sprayerCleanup: "Rinse sprayer thoroughly with water after use. Clean daily if used multiple times."
};
