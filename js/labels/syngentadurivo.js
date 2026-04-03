// ─────────────────────────────────────────────────────────────────────────────
// DURIVO INSECTICIDE — Label Data
// Insecticide | Liquid
// Source: Syngenta_Durivo_Insecticide_Label.pdf
// APVMA Approval No: 63936/127043
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['syngentadurivo'] = {
  name:             "Durivo Insecticide",
  company: "Syngenta",

  category:         "Insecticides",
  activeIngredient: "100 g/L Chlorantraniliprole + 200 g/L Thiamethoxam",
  group:            "Group 4A and Group 28 Insecticide",
  modeOfAction:     "Combination of ryanodine receptor modulator and neonicotinoid; systemic broad-spectrum insecticide for seedling application",
  formulation:      "Liquid",
  color:            "#1e2e5f",
  apvma:            "63936",
  labelPdf:         "Source labels/Syngenta_Durivo_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/DURIVO_INSECTICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Insecticide",
    target: ["Lepidopteran pests", "Sucking insects", "Chewing insects"],
    timing: ["Seedling drench", "Plant hole drench"]
  },

  crops: [
    {
      crop: "Brassicas (Broccoli, Brussels Sprouts, Cabbage, Cauliflower) — Insect pest control",
      cropList: ["Brassicas", "Broccoli", "Brussels Sprouts", "Cabbage", "Cauliflower"],
      weeds: [
        { weed: "Diamondback Moth (Plutella xylostella), Cabbage White Butterfly (Pieris rapae), Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera), Cabbage Centre Grub (Hellula hydralis), Cabbage Cluster Caterpillar (Crocidolomia pavonana), Cluster Caterpillar (Spodoptera litura), Soybean Looper (Thysanoplusia orichalcea), Cabbage Aphid (Brevicoryne brassicae), Green Peach Aphid (Myzus persicae), Silverleaf Whitefly (Bemisia tabaci), Greenhouse Whitefly (Trialeurodes vaporariorum), Green Vegetable Bug (Nezara viridula), Western Flower Thrips (Frankliniella occidentalis), Onion Thrips (Thrips tabaci)", pestList: ["Diamondback Moth", "Cabbage White Butterfly", "Corn Earworm", "Native Budworm", "Cabbage Centre Grub", "Cabbage Cluster Caterpillar", "Cluster Caterpillar", "Soybean Looper", "Cabbage Aphid", "Green Peach Aphid", "Silverleaf Whitefly", "Greenhouse Whitefly", "Green Vegetable Bug", "Western Flower Thrips", "Onion Thrips"], states: ["All"], rate: "22", rateMax: "30", unit: "mL/1000 seedlings", stage: "Seedling tray or plant hole drench", note: "Apply DURIVO as a seedling tray application prior to transplant, or as a plant hole drench at transplant. Refer to Application section below for further instructions. Where a rate range exists use lower rates when using the planting hole drench application method. Use lower rates when treating crops and varieties with growing seasons of less than 7 weeks duration. Use rates toward the upper end of the range when season conditions favour rapid crop development or high pest pressure is anticipated. Application should occur immediately before transplanting to a maximum of 24 hours before seedling dispatch. Seedlings should be transplanted within 48 hours of application. DO NOT apply the seedling drench within 48 hours of heavy rain being forecast or irrigate to the point of runoff for 48 hours after drenching. After application, continue to monitor crops and apply a foliar insecticide when target pests reach threshold levels. Refer to Resistance Management section below for resistance management strategy information. Planting densities and rate selection: The maximum recommended application rate per 1000 seedlings will depend on the proposed field planting density. Apply DURIVO at the rate corresponding to the desired planting density. DO NOT exceed the maximum rate of DURIVO based on anticipated planting density. DO NOT apply DURIVO where planting density exceeds 56,000 plants/ha for brassicas, 83,000 plants/ha for leafy vegetables, 33,000 plants/ha for fruiting vegetables. Planting densities up to 41,000 plants/ha." }
      ]
    },
    {
      crop: "Brassica Leafy Vegetables (Chinese broccoli, Chinese cabbage, Garden cress, Kale, Rocket) — Insect pest control",
      cropList: ["Brassica Leafy Vegetables", "Chinese Broccoli", "Chinese Cabbage", "Garden Cress", "Kale", "Rocket"],
      weeds: [
        { weed: "Diamondback Moth (Plutella xylostella), Cabbage White Butterfly (Pieris rapae), Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera), Cabbage Centre Grub (Hellula hydralis), Cabbage Cluster Caterpillar (Crocidolomia pavonana), Cluster Caterpillar (Spodoptera litura), Soybean Looper (Thysanoplusia orichalcea), Cabbage Aphid (Brevicoryne brassicae), Green Peach Aphid (Myzus persicae), Silverleaf Whitefly (Bemisia tabaci), Greenhouse Whitefly (Trialeurodes vaporariorum), Green Vegetable Bug (Nezara viridula), Western Flower Thrips (Frankliniella occidentalis), Onion Thrips (Thrips tabaci)", pestList: ["Diamondback Moth", "Cabbage White Butterfly", "Corn Earworm", "Native Budworm", "Cabbage Centre Grub", "Cabbage Cluster Caterpillar", "Cluster Caterpillar", "Soybean Looper", "Cabbage Aphid", "Green Peach Aphid", "Silverleaf Whitefly", "Greenhouse Whitefly", "Green Vegetable Bug", "Western Flower Thrips", "Onion Thrips"], states: ["All"], rate: "22", rateMax: "22", unit: "mL/1000 seedlings", stage: "Seedling tray or plant hole drench", note: "Apply DURIVO as a seedling tray application prior to transplant, or as a plant hole drench at transplant. Refer to Application section below for further instructions. Where a rate range exists use lower rates when using the planting hole drench application method. Use lower rates when treating crops and varieties with growing seasons of less than 7 weeks duration. Use rates toward the upper end of the range when season conditions favour rapid crop development or high pest pressure is anticipated. Application should occur immediately before transplanting to a maximum of 24 hours before seedling dispatch. Seedlings should be transplanted within 48 hours of application. DO NOT apply the seedling drench within 48 hours of heavy rain being forecast or irrigate to the point of runoff for 48 hours after drenching. After application, continue to monitor crops and apply a foliar insecticide when target pests reach threshold levels. Refer to Resistance Management section below for resistance management strategy information. Planting densities from 41,000 to 56,000 plants/ha." }
      ]
    },
    {
      crop: "Leafy Vegetables (Lettuce, Endive, Silverbeet, Spinach, Chard) — Insect pest control",
      cropList: ["Leafy Vegetables", "Lettuce", "Endive", "Silverbeet", "Spinach", "Chard"],
      weeds: [
        { weed: "Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera), Cluster Caterpillar (Spodoptera litura), Looper (Chrysodeixis spp.), Lettuce Aphid (Nasonovia ribis-nigri), Green Peach Aphid (Myzus persicae), Brown Sowthistle Aphid (Uroleucon sonchi), Silverleaf Whitefly (Bemisia tabaci), Western Flower Thrips (Frankliniella occidentalis), Vegetable Leafhopper (Austroasca viridigrisea), Lucerne Leafroller (Merophyas divulsana)", pestList: ["Corn Earworm", "Native Budworm", "Cluster Caterpillar", "Looper", "Lettuce Aphid", "Green Peach Aphid", "Brown Sowthistle Aphid", "Silverleaf Whitefly", "Western Flower Thrips", "Vegetable Leafhopper", "Lucerne Leafroller"], states: ["All"], rate: "15", rateMax: "30", unit: "mL/1000 seedlings", stage: "Seedling tray or plant hole drench", note: "Apply DURIVO as a seedling tray application prior to transplant, or as a plant hole drench at transplant. Refer to Application section below for further instructions. Where a rate range exists use lower rates when using the planting hole drench application method. Use lower rates when treating crops and varieties with growing seasons of less than 7 weeks duration. Use rates toward the upper end of the range when season conditions favour rapid crop development or high pest pressure is anticipated. Application should occur immediately before transplanting to a maximum of 24 hours before seedling dispatch. Seedlings should be transplanted within 48 hours of application. DO NOT apply the seedling drench within 48 hours of heavy rain being forecast or irrigate to the point of runoff for 48 hours after drenching. After application, continue to monitor crops and apply a foliar insecticide when target pests reach threshold levels. Refer to Resistance Management section below for resistance management strategy information. Planting densities up to 41,000 plants/ha: 15 to 30 mL per 1000 seedlings. Planting densities from 41,000 to 83,000 plants/ha: 15 mL per 1000 seedlings." }
      ]
    },
    {
      crop: "Fruiting Vegetables (Tomatoes, Capsicum, Eggplant) — Insect pest control",
      cropList: ["Fruiting Vegetables", "Tomatoes", "Tomato", "Capsicum", "Eggplant"],
      weeds: [
        { weed: "Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera), Potato Moth (Phthorimaea operculella), Cluster Caterpillar (Spodoptera litura), Green Peach Aphid (Myzus persicae), Silverleaf Whitefly (Bemisia tabaci), Greenhouse Whitefly (Trialeurodes vaporariorum), Western Flower Thrips (Frankliniella occidentalis), Tomato Thrips (Frankliniella schultzei)", pestList: ["Corn Earworm", "Native Budworm", "Potato Moth", "Cluster Caterpillar", "Green Peach Aphid", "Silverleaf Whitefly", "Greenhouse Whitefly", "Western Flower Thrips", "Tomato Thrips"], states: ["All"], rate: "37", rateMax: "50", unit: "mL/1000 seedlings", stage: "Seedling tray or plant hole drench", note: "Apply DURIVO as a seedling tray application prior to transplant, or as a plant hole drench at transplant. Refer to Application section below for further instructions. Where a rate range exists use lower rates when using the planting hole drench application method. Use lower rates when treating crops and varieties with growing seasons of less than 7 weeks duration. Use rates toward the upper end of the range when season conditions favour rapid crop development or high pest pressure is anticipated. Application should occur immediately before transplanting to a maximum of 24 hours before seedling dispatch. Seedlings should be transplanted within 48 hours of application. DO NOT apply the seedling drench within 48 hours of heavy rain being forecast or irrigate to the point of runoff for 48 hours after drenching. After application, continue to monitor crops and apply a foliar insecticide when target pests reach threshold levels. Refer to Resistance Management section below for resistance management strategy information. Planting densities and rate selection: The maximum recommended application rate per 1000 seedlings will depend on the proposed field planting density. Apply DURIVO at the rate corresponding to the desired planting density. DO NOT exceed the maximum rate of DURIVO based on anticipated planting density. Planting densities up to 25,000 plants/ha: 37 to 50 mL per 1000 seedlings. Planting densities from 25,000 to 33,000 plants/ha: 37 mL per 1000 seedlings." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply more than 1 application of DURIVO or any other soil applied Group 4A Insecticide per crop",
    "DO NOT apply any other Group 4A Insecticide as a foliar spray after soil application of DURIVO in that crop",
    "DO NOT transplant seedlings treated by seedling drench into hydroponic production systems",
    "DO NOT apply DURIVO where planting density exceeds 56,000 plants/ha for brassicas, 83,000 plants/ha for leafy vegetables or 33,000 plants/ha for fruiting vegetables",
    "DO NOT plant or transplant more than four DURIVO treated crops in the same area in any one year"
  ],

  compatibility: {
    compatible:   ["TERVIGO with drip/trickle irrigation", "Selected fertilisers"],
    incompatible: [],
    notes:        ["As formulations of other manufacturer's products are beyond the control of Syngenta, and water quality varies with location, all mixtures should be tested prior to mixing or using commercial quantities. For applications via drip/trickle irrigation, DURIVO is compatible with TERVIGO and selected fertilisers. For more information, contact your local Syngenta Representative."]
  },

  withholding: {
    harvest: "Brassicas: DO NOT HARVEST FOR 6 WEEKS AFTER APPLICATION. Brassica Leafy Vegetables, Leafy Vegetables: DO NOT HARVEST FOR 4 WEEKS AFTER APPLICATION. Fruiting Vegetables: NOT REQUIRED WHEN USED AS DIRECTED.",
    grazing: "Not applicable"
  },

  surfactant:     "Not required — applied as seedling tray drench or plant hole drench",
  sprayerCleanup: "Flush equipment thoroughly between applications. Add the required amount of DURIVO to clean water in half-filled spray tank with the agitator or by-pass in operation. Maintain agitation while filling tank with remainder of water. Agitate whilst spraying."
};
