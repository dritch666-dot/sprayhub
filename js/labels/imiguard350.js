// ─────────────────────────────────────────────────────────────────────────────
// IMIGUARD 350 INSECTICIDE — Label Data
// Insecticide | Suspension Concentrate
// Source: Rainbow_Imiguard_350_Insecticide_Label.pdf
// APVMA Approval No: (not specified in provided label)
// Rainbow Agroscience Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['imiguard350'] = {
  name:             "Rainbow Imiguard 350 Insecticide",

  category:         "Insecticides",
  activeIngredient: "350 g/L Imidacloprid",
  group:            "Group 4A Insecticide",
  modeOfAction:     "Neonicotinoid - nicotinic acetylcholine receptor agonist",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#1e3a8a",
  company: "Imtrade",
  apvma:            "66688",
  labelPdf:         "Source labels/Rainbow_Imiguard_350_Insecticide_Label.pdf",
  sdsPdf:         "SDS Labels/imiguard 350 sds.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Insecticide",
    target: ["Aphids", "Leafminer", "Scale", "Canegrub", "Fruit pests"],
    timing: ["Foliar spray or soil application"]
  },

  crops: [
    {
      crop: "Sugarcane",
      cropList: ["Sugarcane"],
      weeds: [
        { weed: "Greyback canegrub (plant cane)", pestList: ["Greyback canegrub"], states: ["All"], rate: "16", rateMax: "22", unit: "mL/100m row", stage: "Planting to hilling-up", note: "21 weeks withholding. Moderate-high pest pressure applications August-November. Spray band in planted row" },
        { weed: "Canegrubs (ratoon cane)", pestList: ["Canegrubs"], states: ["All"], rate: "16", rateMax: "22", unit: "mL/100m row", stage: "September-November", note: "21 weeks withholding. Apply subsurface behind coulters. Soil must have moisture" }
      ]
    },
    {
      crop: "Peanuts",
      cropList: ["Peanuts"],
      weeds: [
        { weed: "Canegrubs and white grub", pestList: ["Greyback canegrub", "Childers canegrub", "White grub"], states: ["QLD", "NSW", "NT"], rate: "6.5", rateMax: "13", unit: "mL/100m row", stage: "At planting", note: "In-furrow band spray. DO NOT expose to sunlight. Cover immediately with soil. 12 weeks withholding (H); Nil (H)" }
      ]
    },
    {
      crop: "Apples",
      cropList: ["Apples"],
      weeds: [
        { weed: "Woolly aphid", pestList: ["Woolly aphid"], states: ["All"], rate: "3.5", rateMax: "3.5", unit: "mL/1L water per tree", stage: "Green tip to petal fall", note: "For trees up to 7 years old. Do not treat more than once per 2 years. Soil drench application" }
      ]
    },
    {
      crop: "Bananas",
      cropList: ["Bananas"],
      weeds: [
        { weed: "Banana rust thrips", pestList: ["Banana rust thrips"], states: ["QLD", "NT", "WA"], rate: "2.5", rateMax: "3.5", unit: "mL/stool", stage: "Injection timing varies", note: "Inject undiluted or 50:50 with water. Select best follower. Do not inject bunched plants or any follower more than once" },
        { weed: "Banana weevil borer", pestList: ["Banana weevil borer"], states: ["QLD", "NSW", "NT", "WA"], rate: "2.5", rateMax: "3.5", unit: "mL/stool", stage: "Injection", note: "Inject at 15cm from base, downward angle to 5-10cm depth. Do not inject centre of plant" }
      ]
    },
    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
        { weed: "Black citrus aphid", pestList: ["Black citrus aphid"], states: ["All"], rate: "9", rateMax: "9", unit: "mL/tree", stage: "Late spring post-flowering", note: "20 weeks withholding. Soil drench via micro-sprinkler or drip. For trees up to 4m height. Do not apply more than once per season" },
        { weed: "Citrus leafminer", pestList: ["Citrus leafminer"], states: ["All"], rate: "9", rateMax: "6", unit: "mL/tree", stage: "Late spring post-flowering", note: "Apply prior to pest establishment or first signs. Non-bearing trees use 6mL/tree by drip. Do not apply more than once per season" },
        { weed: "Pink wax scale and Red scale", pestList: ["Pink wax scale", "Red scale"], states: ["All"], rate: "9", rateMax: "9", unit: "mL/tree", stage: "After main flowering", note: "Monitor late spring to early summer. Apply after main flowering and at onset of crawler emergence" }
      ]
    },
    {
      crop: "Stone Fruit",
      cropList: ["Peaches", "Nectarines", "Stone Fruit"],
      weeds: [
        { weed: "Green peach aphid", pestList: ["Green peach aphid"], states: ["All"], rate: "15", rateMax: "15", unit: "mL/100L or concentrate", stage: "First sign of infestation", note: "21 days withholding. Apply thorough cover spray. Can use dilute or concentrate spraying. Do not exceed 75mL/100L concentrate" },
        { weed: "Black peach aphid", pestList: ["Black peach aphid"], states: ["All"], rate: "15", rateMax: "15", unit: "mL/100L", stage: "First sign of infestation", note: "Full cover spray ensuring thorough coverage" }
      ]
    },
    {
      crop: "Brassicas",
      cropList: ["Broccoli", "Brussels sprouts", "Cabbage", "Cauliflower", "Kohlrabi"],
      weeds: [
        { weed: "Grey Cabbage Aphid", pestList: ["Grey Cabbage Aphid"], states: ["All"], rate: "15", rateMax: "170", unit: "mL/100L or mL/ha", stage: "First sign of infestation", note: "7 days withholding. Add wetting agent" },
        { weed: "Turnip Aphid", pestList: ["Turnip Aphid"], states: ["All"], rate: "15", rateMax: "170", unit: "mL/100L or mL/ha", stage: "First sign of infestation", note: "" },
        { weed: "Silverleaf whitefly and Green peach aphid", pestList: ["Silverleaf whitefly", "Green peach aphid"], states: ["All"], rate: "35", rateMax: "35", unit: "mL/1000 seedlings", stage: "At or post-transplanting", note: "Plant hole drench or furrow spray. Monitor crops for pests following planting" }
      ]
    },
    {
      crop: "Capsicum",
      cropList: ["Capsicum", "Sweet Peppers"],
      weeds: [
        { weed: "Green peach aphid", pestList: ["Green peach aphid"], states: ["All"], rate: "15", rateMax: "170", unit: "mL/100L or mL/ha", stage: "First sign of infestation", note: "7 days withholding. Apply at first sign of aphid infestation" }
      ]
    },
    {
      crop: "Cucurbits",
      cropList: ["Cucurbits"],
      weeds: [
        { weed: "Aphids", pestList: ["Aphids"], states: ["All"], rate: "0", rateMax: "0", unit: "Special rates apply", stage: "Early establishment", note: "Organosilicone adjuvant is critical for performance. Apply early when numbers are low (no more than 1-2 leaves with honeydew)" }
      ]
    },
    {
      crop: "Vegetables - Cotton equivalent",
      cropList: ["Vegetables"],
      weeds: [
        { weed: "Silverleaf whitefly", pestList: ["Silverleaf whitefly"], states: ["All"], rate: "0", rateMax: "0", unit: "Variable rates", stage: "Plant hole drench or furrow spray", note: "Provides effective management but may not control for entire growing period. Additional chemical control with different mode of action may be required" }
      ]
    }
  ],

  restraints: [
    "DO NOT use on crops produced hydroponically or in glasshouses",
    "DO NOT apply foliar spray after soil application in same crop",
    "DO NOT apply more than one soil application per crop per season (per 2 years for apples)",
    "DO NOT apply more than one application to bananas per season",
    "Spray drift restrictions apply",
    "DO NOT apply unless wind speed 3-20 km/hr",
    "DO NOT apply if surface temperature inversion conditions present",
    "DO NOT allow first-flush irrigation or storm run-off into waterways"
  ],

  compatibility: "Refer to specific label for tank mix compatibility information",

  withholding: {
    harvest: "Various: Sugarcane 21 weeks (G) or Nil (H); Peanuts 12 weeks (G) or Nil (H); Apples: Not specified; Citrus 20 weeks (H); Stone Fruit 21 days; Vegetables 7 days",
    grazing: "DO NOT graze or feed treated crops to livestock"
  },

  surfactant:     "Organosilicone adjuvant critical for some applications; Wetting agent for brassicas",
  sprayerCleanup: "Triple rinse containers before disposal"
};
