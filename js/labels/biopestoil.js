// ─────────────────────────────────────────────────────────
// Biopest Cinagro Paraffinic Oil — Label Data
// Adjuvant (Spray Oil) | Emulsifiable Concentrate
// Source: Agrion_Crop_Solutions_Sacoa_Biopest_Paraffinic_Oil_Label.pdf
// APVMA Approval No: 54179
// Agrion Crop Solutions (SACOA)
// ─────────────────────────────────────────────────────────
productDatabase['biopestoil'] = {

  name:             "Biopest Cinagro Paraffinic Oil",
  company: "Nufarm",


  category:         "Insecticides",
  activeIngredient: "815 g/L Paraffinic Oil",
  group:            "Adjuvant (Spray Oil)",
  modeOfAction:     "Contact action - smothers and desiccates pests",
  formulation:      "Emulsifiable Concentrate",
  color:            "#84cc16",
  apvma:            "54179",
  labelPdf:         "Source labels/Agrion_Crop_Solutions_Sacoa_Biopest_Paraffinic_Oil_Label.pdf",
  sdsPdf:           "SDS Labels/SACOA_BIOPEST_PARAFFINIC_OIL.pdf",
  signalHeading:    "Caution",

  classification: {
    type: "Insecticide",
    target: ["Aphids", "Lace Bugs", "Leaf Hoppers", "Mealybugs", "Mites", "Plant Bugs", "Scale", "Whitefly"],
    timing: ["Protective"]
  },

  crops: [
    {
      crop: "Bananas",
      cropList: ["Bananas"],
      weeds: [
        { weed: "Cercospora Leaf Spot", pestList: ["Cercospora Leaf Spot"], states: ["All"], rate: "4", unit: "L/ha", notes: "Apply in combination with mancozeb at 2.2 – 4.5 kg/ha in 200 to 500 L of water via appropriate ground rig or 30 litres via aerial application. Apply at 3–4 week intervals, from December until late April. In North Queensland the interval may be reduced to 10-14 days in the wet season." },
                { weed: "Cercospora Leaf Spot, Leaf Speckle", pestList: ["Cercospora Leaf Spot", "Leaf Speckle"], states: ["All"], rate: "5", unit: "L/ha", notes: "Apply in combination with Tilt 250 EC. Commence spraying in December and apply 4 to5 times at 21 day intervals. Later use alternative fungicides if needed. Spray both sides of leaves." },
        { weed: "Cercospora Leaf Spot, Leaf Speckle, Cordana Leaf spot", pestList: ["Cercospora Leaf Spot", "Leaf Speckle", "Cordana Leaf Spot"], states: ["All"], rate: "5", unit: "L/ha", notes: "Apply in combination with Tilt 250 EC. Spray every two weeks from the start of the wet season in December and make a maximum of 6 applications. Later use alternative fungicides if needed. Spray both sides of leaves." }
      ]
    },
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        { weed: "Cotton Aphids", pestList: ["Cotton Aphids"], states: ["All"], rate: "2 to 5 L/ha", rateMax: "5", unit: "L/ha", rateText: "2 to 5 L/ha", notes: "Apply by ground rig using minimum of 80 L/ha of water. Use alone to control early to mid-season populations of less than 20 aphids per terminal. Do not rely on Biopest Cinagro Paraffinic Oil’ alone to control more than 20 aphids per terminal shoot. If populations of aphids exceed 20 per terminal, use Biopest Cinagro Paraffinic Oil’ in a mixture with a registered aphicide." },
        { weed: "Defoliation Aid", pestList: ["Defoliation Aid"], states: ["All"], rate: "2", unit: "L/ha", notes: "Apply in combination with thidiazuron (e.g. DROPP) defoliant." },
        { weed: "Carrier for certain ULV insecticides", pestList: ["Carrier For Certain Ulv Insecticides"], states: ["All"], rate: "3 to 5 L/ha", rateMax: "5", unit: "L/ha", rateText: "3 to 5 L/ha", notes: "Apply in combination with ULV insecticide as specified on the insecticide label to ensure insecticide reaches its target." }
      ]
    },
    {
      crop: "Apples",
      cropList: ["Apples"],
      weeds: [
        { weed: "Mites (Eggs), including European Red Mite, Scales (Hard & Soft)", pestList: ["Mites (Eggs)", "Including European Red Mite", "Scales (Hard & Soft)"], states: ["All"], rate: "2", unit: "L/100L", rateText: "2 L", notes: "Dormant or delayed dormant to half green tip." },
                { weed: "Mites", pestList: ["Mites"], states: ["All"], rate: "1", unit: "L/100L", rateText: "1 L", notes: "Summer (Foliar or Cover) or Post Harvest." }
      ]
    },
    {
      crop: "Wetting agent/adjuvant/ carrier as recommended on fungicide and insecticide labels",
      cropList: ["Wetting agent/adjuvant/ carrier as recommended on fungicide", "insecticide labels"],
      weeds: [
        { weed: "Refer to particular pesticide label", pestList: ["Refer To Particular Pesticide Label"], states: ["All"], rate: "500 mL to 5 L", rateMax: "5", unit: "L/100L", rateText: "500 mL to 5 L", notes: "Biopest Cinagro Paraffinic Oil’ acts as a carrier/adjuvant/wetting agent which may improve the performance of certain pesticides. Always check pesticide label for correct rates." }
      ]
    },
    {
      crop: "Pears",
      cropList: ["Pears"],
      weeds: [
        { weed: "European Red Mite, Eggs, Scales", pestList: ["European Red Mite", "Eggs", "Scales"], states: ["All"], rate: "1 to 2 L", rateMax: "2", unit: "L/100L", rateText: "1 to 2 L", notes: "Dormant or delayed dormant (up to and including petal fall)." },
                        { weed: "Two Spotted Spider Mite", pestList: ["Two Spotted Spider Mite"], states: ["All"], rate: "1", unit: "L/100L", rateText: "1 L", notes: "Summer (Foliar or Cover) or Post Harvest." },
        { weed: "Brown Mite, Pear Rust Mite", pestList: ["Brown Mite", "Pear Rust Mite"], states: ["All"], rate: "1 to 2 L", rateMax: "2", unit: "L/100L", rateText: "1 to 2 L" },
        { weed: "Pear Leaf Blister Mite", pestList: ["Pear Leaf Blister Mite"], states: ["All"], rate: "1.5 to 2 L", rateMax: "2", unit: "L/100L", rateText: "1.5 to 2 L" }
      ]
    },
    {
      crop: "Apricots, Cherries",
      cropList: ["Apricots", "Cherries"],
      weeds: [
        { weed: "San Jose Scale", pestList: ["San Jose Scale"], states: ["All"], rate: "2", unit: "L/100L", rateText: "2 L", notes: "Dormant." },
                { weed: "Mites and Scales", pestList: ["Mites And Scales"], states: ["All"], rate: "1 to 1.5 L", rateMax: "1.5", unit: "L/100L", rateText: "1 to 1.5 L", notes: "Summer (Foliar or Cover) or Post Harvest. Applications should not be made over oil sensitive varieties. Do not apply to tress lacking adequate moisture." }
      ]
    },
    {
      crop: "Almonds, Peaches, Nectarines",
      cropList: ["Almonds", "Peaches", "Nectarines"],
      weeds: [
        { weed: "Aphids (Eggs), Mites (Eggs)", pestList: ["Aphids (Eggs)", "Mites (Eggs)"], states: ["All"], rate: "3", unit: "L/100L", rateText: "3 L", notes: "Dormant or delayed dormant." },
        { weed: "San Jose Scales", pestList: ["San Jose Scales"], states: ["All"], rate: "2", unit: "L/100L", rateText: "2 L", notes: "Dormant." },
        { weed: "Mites and Scales", pestList: ["Mites And Scales"], states: ["All"], rate: "1 to 2 L", rateMax: "2", unit: "L/100L", rateText: "1 to 2 L", notes: "Summer (Foliar or Cover) or Post Harvest." }
      ]
    },
    {
      crop: "Blueberries",
      cropList: ["Blueberries"],
      weeds: [
        { weed: "Mites, Scales", pestList: ["Mites", "Scales"], states: ["All"], rate: "2", unit: "L/100L", rateText: "2 L", notes: "Foliage." }
              ]
    },
    {
      crop: "Strawberries",
      cropList: ["Strawberries"],
      weeds: [
        { weed: "Aphids, Mites", pestList: ["Aphids", "Mites"], states: ["All"], rate: "1", unit: "L/100L", rateText: "1 L", notes: "Dormant and Foliage." }
      ]
    },
    {
      crop: "Olives",
      cropList: ["Olives"],
      weeds: [
        { weed: "Scales (Black Scale, Soft Brown, etc)", pestList: ["Scales (Black Scale", "Soft Brown", "Etc)"], states: ["All"], rate: "1", unit: "L/100L", rateText: "1L", notes: "Best results are achieved when applied to crawlers in spring. Minimum of 1000 L water per Ha." }
      ]
    },
    {
      crop: "Grapes",
      cropList: ["Grapes"],
      weeds: [
        { weed: "Mealybugs", pestList: ["Mealybugs"], states: ["All"], rate: "4 to 6 Litres with 300 to 500 Litres Water per Hec", rateMax: "6", unit: "L/ha", rateText: "4 to 6 Litres with 300 to 500 Litres Water per Hectare", notes: "Dormant – A tank mix using insecticides improves control." },
                { weed: "Grapevine Scale", pestList: ["Grapevine Scale"], states: ["All"], rate: "3", unit: "L/100L", rateText: "3 L", notes: "Apply as a post pruning spray in mid-winter when vines are fully dormant." },
                { weed: "Powdery Mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "1", unit: "L/100L", rateText: "1 L", notes: "Commence spraying just after woolly bud stage. Follow-up sprays should be applied every 14-21 days until bunch closure." }
      ]
    },
    {
      crop: "Asparagus, Beans, Beet, Corn, Cucurbits, Peppers/Capsicums, Radish, Squash, Tomatoes",
      cropList: ["Asparagus", "Beans", "Beet", "Corn", "Cucurbits", "Peppers/Capsicums", "Radish", "Squash", "Tomatoes"],
      weeds: [
        { weed: "Aphids, Mites, Thrips, Leafhopper", pestList: ["Aphids", "Mites", "Thrips", "Leafhopper"], states: ["All"], rate: "1 to 2 L", rateMax: "2", unit: "L/100L", rateText: "1 to 2 L", notes: "As needed." }
      ]
    },
    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
        { weed: "Redscale", pestList: ["Redscale"], states: ["All"], rate: "0.6 – 1.0 L", rateMax: "1.0", unit: "L/100L", rateText: "0.6 – 1.0 L", notes: "Apply in December and/or February – March." },
                        { weed: "White Wax Scale, Pink Wax Scale", pestList: ["White Wax Scale", "Pink Wax Scale"], states: ["All"], rate: "0.5 – 1.0 L", rateMax: "1.0", unit: "L/100L", rateText: "0.5 – 1.0 L", notes: "Apply in December/early January period." },
                        { weed: "White Wax Scale, Pink Wax Scale, Black Scale", pestList: ["White Wax Scale", "Pink Wax Scale", "Black Scale"], states: ["All"], rate: "0.5 – 1.0 L", rateMax: "1.0", unit: "L/100L", rateText: "0.5 – 1.0 L", notes: "Apply December/early January. Repeat in February." },
        { weed: "Soft Brown Scale", pestList: ["Soft Brown Scale"], states: ["All"], rate: "0.5 – 1.0 L", rateMax: "1.0", unit: "L/100L", rateText: "0.5 – 1.0 L", notes: "Apply in January/April." },
        { weed: "Circular Black Scale", pestList: ["Circular Black Scale"], states: ["All"], rate: "0.5 to 1.0 L", rateMax: "1.0", unit: "L/100L", rateText: "0.5 to 1.0 L", notes: "Apply between August – December. A second application may be necessary for heavy infestations." },
                { weed: "Citrus Leaf- miner", pestList: ["Citrus Leaf- Miner"], states: ["All"], rate: "250 mL – 1 L (f", rateMax: "1", unit: "L/100L", rateText: "250 mL – 1 L (for Citrus Leaf-miner control only) 500 mL – 1 L (when combining with Scale & Black Sp", notes: "Apply thoroughly and evenly to flush growth, wetting both sides of all immature leaves to point of run-off. Spray every 5 – 14 days during flush periods, commencing as soon as pest’s silvery mites are observed on young leaves. The interval will be shorter during summer and early autumn. Cease spraying when leaves become mature. Four sprays in one year should be sufficient to achieve control and no more than 8 sprays should be applied." }
      ]
    },
    {
      crop: "Mango",
      cropList: ["Mango"],
      weeds: [
          { weed: "scale insects,wax scale, mango plant hopper", pestList: ["Scale Insects", "Wax Scale", "Mango Plant Hopper"], states: ["All"], rate: "1-2", unit: "L/", rateText: "1-2L/100L", notes: "WHP: na. Spray no more than 4 applications per season. do not spray onto pruned trees and when trees are under stress" }
      ]
    }
    
  ],

  restraints: [
    "DO NOT spray when shade temperature exceeds 32°C or soil is dry",
    "DO NOT spray if trees suffering from moisture stress",
    "DO NOT apply when high rate of natural fruit drop expected",
    "DO NOT apply after sulphur/lime sulphur for 1 month (severe injury risk)",
    "DO NOT apply with Propargite or within 4 weeks of Propargite",
    "DO NOT apply with chlorothalonil",
    "DO NOT apply on mangoes during flowering or fruit set",
    "DO NOT use with Dimethoate or sulphur-containing products"
  ],

  compatibility: {
    compatible:   ["Most fungicides (DMI, dithiocarbamates)", "Some herbicides (tank mixes)"],
    incompatible: ["Dimethoate", "Sulphur products", "Carbaryl (on deciduous fruit)", "Propargite"],
    notes:        ["Read labels of all tank-mixed products", "Thoroughly clean sprayer between products"]
  },

  withholding: {
    harvest: "NIL — May be applied up to 1 day before harvest.",
    grazing: "Consult label for treated pasture restrictions."
  },

  surfactant:     "Product contains emulsifying agents; no additional wetter typically required.",
  sprayerCleanup: "After each day's use, wash gloves and faceshield/goggles. Flush sprayer hose if fluid stands >20 minutes. Triple-rinse containers."
};
