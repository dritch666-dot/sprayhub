// ─────────────────────────────────────────────────────────────────────────────
// YATES SUCCESS® ULTRA INSECT CONTROL — Label Data
// Group 5 Insecticide | Suspension Concentrate
// Source: Corteva_Agriscience_Yates_Success_Ultra_Insect_Control_Label.pdf
// APVMA Approval No: 67894/57040
// Yates Australia (Trademarks of Dow AgroSciences)
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['cortevasuccessultra'] = {
  name:             "Yates Success Ultra Insect Control",
  activeIngredient: "5 g/L Spinetoram",
  group:            "Group 5 Insecticide",
  modeOfAction:     "Spinosyn — nicotinic acetylcholine receptor agonist; translaminar action moves from upper to lower leaf surfaces; derived from beneficial soil bacteria",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#86198f",
  apvma:            "67894/57040",
  company: "Corteva",
  labelPdf:         "Source labels/Corteva_Agriscience_Yates_Success_Ultra_Insect_Control_Label.pdf",
  sdsPdf:           "SDS Labels/YATES_SUCCESS_ULTRA_INSECT_CONTROL.pdf",
  signalHeading:    "Caution",
  category:         "Insecticides",
  classification: {
    type: "Insecticide",
    target: ["Caterpillars", "Codling Moth", "Thrips", "Tomato Leaf Miner", "Pear & Cherry Slug", "Lightbrown Apple Moth", "Loopers", "Helicoverpa", "Leafrollers"],
    timing: ["When pests first seen", "Repeat at 7-14 day intervals"]
  },

  crops: [
    // ── Vegetables ─────────────────────────────────────────────
    {
      crop: "Brassica vegetables — Caterpillars",
      cropList: ["Broccoli", "Brussels Sprouts", "Cabbage", "Cauliflower", "Radishes", "Swedes", "Turnips", "Chinese Cabbage", "Pak Choy", "Buk Choy", "Chinese Broccoli", "Kale"],
      weeds: [
        { weed: "Caterpillars (cabbage white butterfly, diamond back moth, cabbage centre grub, cabbage cluster caterpillar, loopers, helicoverpa)", pestList: ["Caterpillars (Cabbage White Butterfly", "Diamond Back Moth", "Cabbage Centre Grub", "Cabbage Cluster Caterpillar", "Loopers", "Helicoverpa)"], states: ["All"], rate: "5", unit: "mL/L", whp: "3 days", stage: "When pests first seen; repeat at 7-14 day intervals" }
      ]
    },
    {
      crop: "Cucurbit vegetables — Caterpillars",
      cropList: ["Cucumbers", "Melons", "Squash", "Zucchini"],
      weeds: [
        { weed: "Caterpillars (cucumber moth, helicoverpa)", pestList: ["Caterpillars (Cucumber Moth", "Helicoverpa)"], states: ["All"], rate: "5", unit: "mL/L", whp: "3 days", stage: "When pests first seen; repeat at 7-14 day intervals" }
      ]
    },
    {
      crop: "Culinary herbs — Caterpillars",
      cropList: ["Culinary Herbs"],
      weeds: [
        { weed: "Caterpillars (diamond back moth, loopers, lightbrown apple moth, helicoverpa)", pestList: ["Caterpillars (Diamond Back Moth", "Loopers", "Lightbrown Apple Moth", "Helicoverpa)"], states: ["All"], rate: "5", unit: "mL/L", whp: "3 days", stage: "Spray all foliage including under surfaces of leaves" }
      ]
    },
    {
      crop: "Fruiting vegetables — Heliothis caterpillars & potato moth",
      cropList: ["Tomatoes", "Capsicum", "Chillies", "Eggplant", "Okra"],
      weeds: [
        { weed: "Heliothis caterpillars (eg. tomato grub), potato moth (tomato leaf miner)", pestList: ["Heliothis Caterpillars (Eg. Tomato Grub)", "Potato Moth (Tomato Leaf Miner)"], states: ["All"], rate: "5", unit: "mL/L", whp: "1 day", stage: "Ensure spray coverage is to the point of runoff" }
      ]
    },
    {
      crop: "Leafy vegetables — Caterpillars",
      cropList: ["Lettuce", "Endive", "Silverbeet", "Spinach"],
      weeds: [
        { weed: "Caterpillars (loopers, helicoverpa)", pestList: ["Caterpillars (Loopers", "Helicoverpa)"], states: ["All"], rate: "5", unit: "mL/L", whp: "3 days", stage: "When pests first seen; repeat at 7-14 day intervals" }
      ]
    },
    {
      crop: "Legume vegetables — Caterpillars",
      cropList: ["Beans", "Peas", "Snow Peas", "Sugarsnap Peas"],
      weeds: [
        { weed: "Caterpillars (loopers, heliothis)", pestList: ["Caterpillars (Loopers", "Heliothis)"], states: ["All"], rate: "5", unit: "mL/L", whp: "3 days", stage: "When pests first seen" }
      ]
    },
    {
      crop: "Root and tuber vegetables — Caterpillars",
      cropList: ["Beetroot", "Carrots", "Celeriac", "Galangal", "Parsnips", "Potatoes", "Radishes", "Daikon", "Sweet Potato", "Swedes", "Turnips"],
      weeds: [
        { weed: "Caterpillars (lightbrown apple moth, helicoverpa, potato moth)", pestList: ["Caterpillars (Lightbrown Apple Moth", "Helicoverpa", "Potato Moth)"], states: ["All"], rate: "5", unit: "mL/L", whp: "3 days", stage: "Pests stop feeding immediately, may take up to 3 days to die" }
      ]
    },
    {
      crop: "Stalk and stem vegetables — Caterpillars",
      cropList: ["Celery", "Rhubarb"],
      weeds: [
        { weed: "Caterpillars (helicoverpa)", pestList: ["Caterpillars (Helicoverpa)"], states: ["All"], rate: "10", unit: "mL/L", whp: "1 day", stage: "When pests first seen" }
      ]
    },

    // ── Fruit ──────────────────────────────────────────────────
    {
      crop: "Avocados — Leafrollers & loopers",
      cropList: ["Avocados"],
      weeds: [
        { weed: "Leafrollers (including avocado leafroller, ivy leafroller and light brown apple moth), loopers (including Ectropis looper)", pestList: ["Leafrollers (Including Avocado Leafroller", "Ivy Leafroller and Light Brown Apple Moth)", "Loopers (Including Ectropis Looper)"], states: ["All"], rate: "5", unit: "mL/L", whp: "Not required when used as directed", stage: "When pests first seen" }
      ]
    },
    {
      crop: "Bananas — Banana rust thrips & sugarcane bud moth",
      cropList: ["Bananas"],
      weeds: [
        { weed: "Banana rust thrips, sugarcane bud moth", pestList: ["Banana Rust Thrips", "Sugarcane Bud Moth"], states: ["All"], rate: "50", unit: "mL/L", whp: "Not required when used as directed", stage: "Add a wetting agent to ensure thorough leaf coverage" }
      ]
    },
    {
      crop: "Berryfruit — Caterpillars",
      cropList: ["Blackberries", "Blueberries", "Boysenberries", "Cranberries", "Currants", "Gooseberries", "Raspberries", "Strawberries"],
      weeds: [
        { weed: "Caterpillars (loopers, lightbrown apple moth, helicoverpa)", pestList: ["Caterpillars (Loopers", "Lightbrown Apple Moth", "Helicoverpa)"], states: ["All"], rate: "5", unit: "mL/L", whp: "1 day", stage: "When pests first seen" }
      ]
    },
    {
      crop: "Citrus fruits — Citrus leafminer & caterpillars",
      cropList: ["Citrus","Grapefruit", "Lemons", "Limes", "Mandarins", "Oranges"],
      weeds: [
        { weed: "Citrus leafminer, lightbrown apple moth, helicoverpa (corn earworm and native budworm)", pestList: ["Citrus Leafminer", "Lightbrown Apple Moth", "Helicoverpa (Corn Earworm and Native Budworm)"], states: ["All"], rate: "1.25", unit: "mL/L", whp: "1 day", stage: "For best results on citrus leaf miner mix with white oil at the label rate" }
      ]
    },
    {
      crop: "Coffee — Avocado leaf roller",
      cropList: ["Coffee"],
      weeds: [
        { weed: "Avocado leaf roller", pestList: ["Avocado Leaf Roller"], states: ["All"], rate: "5", unit: "mL/L", whp: "7 days", stage: "When pests first seen" }
      ]
    },
    {
      crop: "Grapes — Light brown apple moth & grapevine moth",
      cropList: ["Grapes"],
      weeds: [
        { weed: "Light brown apple moth, grapevine moth", pestList: ["Light Brown Apple Moth", "Grapevine Moth"], states: ["All"], rate: "5", unit: "mL/L", whp: "7 days", stage: "When pests first seen" }
      ]
    },
    {
      crop: "Kiwifruit — Caterpillars",
      cropList: ["Kiwifruit"],
      weeds: [
        { weed: "Light brown apple moth, flower-eating caterpillars, small mango tipborer", pestList: ["Light Brown Apple Moth", "Flower-Eating Caterpillars", "Small Mango Tipborer"], states: ["All"], rate: "5", unit: "mL/L", whp: "7 days", stage: "When pests first seen" }
      ]
    },
    {
      crop: "Mango — Caterpillars & tipborers",
      cropList: ["Mango"],
      weeds: [
        { weed: "Flower-eating caterpillars, small mango tipborer", pestList: ["Flower-Eating Caterpillars", "Small Mango Tipborer"], states: ["All"], rate: "1.25", unit: "mL/L", whp: "Not required when used as directed", stage: "When pests first seen" },
        { weed: "Large mango tipborer", pestList: ["Large Mango Tipborer"], states: ["All"], rate: "7.5", unit: "mL/L", whp: "Not required when used as directed", stage: "When pests first seen" }
      ]
    },
    {
      crop: "Pome fruit — Caterpillars",
      cropList: ["Apples", "Pears", "Nashi Pears"],
      weeds: [
        { weed: "Caterpillars (codling moth, lightbrown apple moth, oriental fruit moth)", pestList: ["Caterpillars (Codling Moth", "Lightbrown Apple Moth", "Oriental Fruit Moth)"], states: ["All"], rate: "5", unit: "mL/L", whp: "7 days", stage: "When pests first seen" }
      ]
    },
    {
      crop: "Stonefruit — Caterpillars & pear and cherry slug",
      cropList: ["Apricots", "Cherries", "Nectarines", "Peaches", "Plums"],
      weeds: [
        { weed: "Caterpillars (looper, pear and cherry slug, helicoverpa)", pestList: ["Caterpillars (Looper", "Pear and Cherry Slug", "Helicoverpa)"], states: ["All"], rate: "5", unit: "mL/L", whp: "3 days", stage: "When pests first seen" }
      ]
    },
    {
      crop: "Tropical and sub tropical fruit crops (inedible peel) — Caterpillars & leafrollers",
      cropList: ["Avocado", "Custard Apple", "Feijoa", "Guava", "Jackfruit", "Kiwifruit", "Longan", "Lychee", "Mango", "Mangosteen", "Papaya", "Passionfruit", "Persimmon", "Rambutan", "Star Apple"],
      weeds: [
        { weed: "Caterpillars (light brown apple moth, oriental fruit moth), flower-eating caterpillars, leafrollers, loopers, yellow peach moth", pestList: ["Caterpillars (Light Brown Apple Moth", "Oriental Fruit Moth)", "Flower-Eating Caterpillars", "Leafrollers", "Loopers", "Yellow Peach Moth"], states: ["All"], rate: "2.5", rateMax: "5", unit: "mL/L", whp: "Not required when used as directed", stage: "When pests first seen" }
      ]
    },

    // ── Non-food ───────────────────────────────────────────────
    {
      crop: "Eucalypts — Red-banded thrips & sorghum head caterpillar",
      cropList: ["Eucalypts"],
      weeds: [
        { weed: "Red-banded thrips, sorghum head caterpillar", pestList: ["Red-Banded Thrips", "Sorghum Head Caterpillar"], states: ["All"], rate: "10", unit: "mL/L", whp: "Not applicable", stage: "When pests first seen" }
      ]
    },
    {
      crop: "Tea tree — Eucalyptus chrysomelid beetle larvae",
      cropList: ["Tea Tree"],
      weeds: [
        { weed: "Larvae of Eucalyptus chrysomelid beetle", pestList: ["Larvae of Eucalyptus Chrysomelid Beetle"], states: ["All"], rate: "20", unit: "mL/L", whp: "Not applicable", stage: "When larvae first seen" }
      ]
    },
    {
      crop: "Ornamentals — Various pests",
      cropList: ["Ornamentals"],
      weeds: [
        { weed: "Pyrgo beetle, caterpillars, pear & cherry slug", pestList: ["Pyrgo Beetle", "Caterpillars", "Pear & Cherry Slug"], states: ["All"], rate: "5", unit: "mL/L", whp: "Not applicable", stage: "When pests first seen" },
        { weed: "Western flower thrips", pestList: ["Western Flower Thrips"], states: ["All"], rate: "10", unit: "mL/L", whp: "Not applicable", stage: "When pests first seen" }
      ]
    },
    {
      crop: "Brassica, cucurbit, fruiting, leafy and legume vegetables, berryfruit, pomefruit, stonefruit, ornamentals — Various",
      cropList: ["Brassica Vegetables", "Cucurbit Vegetables", "Fruiting Vegetables", "Leafy Vegetables", "Legume Vegetables", "Berryfruit", "Pomefruit", "Stonefruit", "Ornamentals"],
      weeds: [
        { weed: "Western flower thrips", pestList: ["Western Flower Thrips"], states: ["All"], rate: "10", unit: "mL/L", whp: "As per individual crop", stage: "When pests first seen" }
      ]
    }
  ],

  restraints: [
    "DO NOT use when shade temperatures are near 28°C or higher, or when soil is dry and plants are suffering from moisture stress",
    "Avoid spraying under windy conditions or if rain is expected within 6 hours",
    "NOT TO BE USED FOR ANY PURPOSE OR IN ANY MANNER CONTRARY TO THIS LABEL UNLESS AUTHORISED",
    "DO NOT feed sprayed plants to pets or livestock"
  ],

  compatibility: {
    compatible:   ["White oil (for citrus leafminer)", "Most fungicides"],
    incompatible: ["Alkaline products"],
    notes:        ["Derived from beneficial soil bacteria", "Translaminar — moves from upper to lower leaf surfaces", "Rainfast"]
  },

  withholding: {
    harvest: "Bananas/subtropical & tropical fruit (excl. kiwifruit): Not required. Coffee/Grapes/Kiwifruit/Pome fruit: 7 days. Brassicas/Cucurbits/Herbs/Leafy veg/Legume veg/Root & tuber veg/Stonefruit: 3 days. Berryfruit/Citrus/Fruiting veg/Stalk & stem veg: 1 day.",
    grazing: "DO NOT feed sprayed plants to pets or livestock"
  },

  surfactant:     "Add a wetting agent for bananas to ensure thorough leaf coverage. For citrus leafminer, mix with white oil at the label rate.",
  sprayerCleanup: "Rinse spray equipment thoroughly with clean water immediately after use."
};
