// ─────────────────────────────────────────────────────────
// AC Tipster 500 SL — Label Data
// Group 1B (Acetylcholinesterase Inhibitor) | Soluble Liquid
// Source: Axichem_Ac_Tipster_500_Sl_Insecticide_Label.pdf
// APVMA Approval No: 88049
// Axichem Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['productnameactipster500sl'] = {

  name:             "AC Tipster 500 SL",
  company: "Agria",


  category:         "Insecticides",
  activeIngredient: "500 g/L Trichlorfon",
  group:            "Group 1B (Acetylcholinesterase Inhibitor)",
  modeOfAction:     "Inhibits acetylcholinesterase; disrupts nervous system function",
  formulation:      "Soluble Liquid (SL)",
  color:            "#b45309",
  apvma:            "88049",
  labelPdf:         "Source labels/Axichem_Ac_Tipster_500_Sl_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/AC_Tipster_500_SL_Insecticide.pdf",
  signalHeading:    "Poison",

  classification: {
    type: "Insecticide",
    target: ["Bloodworms", "Leaf Hoppers", "Plant Hoppers", "Scale Crawlers", "Whitefly"],
    timing: ["Curative"]
  },

  crops: [
    {
      crop: "Rice",
      cropList: ["Rice"],
      weeds: [
        {
          weed: "Rice Bloodworm",
          pestList: ["Rice Bloodworm"],
          states: ["QLD", "NSW"],
          rate: "100",
          rateMax: "150",
          unit: "mL/100L",
          stage: "At sowing or within 24 hours; when water depth 150mm or less",
          note: "Apply to flooded bays. Use higher rate if depth >150mm or high organic matter. For aerial-sown seed: treat pre-germinated seed in hopper, sow within 1 hour. Treated seed NOT for food/animal consumption."
        }
      ]
    },
    {
      crop: "Grapes, Hops, Fruit Trees",
      cropList: ["Grapes","Hops","Fruit Trees"],
      weeds: [
        {
          weed: "Mites, Scales, Leaf Hoppers",
          pestList: ["Mites","Scales","Leaf Hoppers"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "mL/100L",
          stage: "During active pest period",
          note: "Edible crops (except leafy): 2 day WHD. Leafy vegetables: 5 day WHD. Pastures/forage: 2 day grazing restriction."
        }
      ]
    },
    {
      crop: "Horticulture (Mixed)",
      cropList: ["Horticulture"],
      weeds: [
        {
          weed: "Whitefly, Thrips, Psyllids",
          pestList: ["Whitefly","Thrips","Psyllids"],
          states: ["All"],
          rate: "100",
          rateMax: "150",
          unit: "mL/100L",
          stage: "As required; repeat 7-10 days if needed",
          note: "MRLs/import tolerances may not exist in all export markets. Check with Axichem before export."
        }
      ]
    },
    {
      crop: "Dried Fruit",
      cropList: ["Dried Fruit"],
      weeds: [
        {
          weed: "General pests",
          pestList: ["General Pests"],
          states: ["All"],
          rate: "100",
          rateMax: "150",
          unit: "mL/100L",
          stage: "During growing season",
          note: "DO NOT use treated produce for human/animal consumption within 2 days of treatment."
        }
      ]
    },
    {
      crop: "Avocado",
      cropList: ["Avocado"],
      weeds: [
          { weed: "Fruit spotting bug, Monolepta beetle", pestList: ["Fruit Spotting Bug", "Monolepta Beetle"], states: ["All"], rate: 200, rateMax: 200, unit: "mL/100L", rateText: "200ml/100L", notes: "WHP: 2 days. Make sure the PH is neutral" },
          { weed: "Queensland Fruit Fly", pestList: ["Queensland Fruit Fly"], states: ["All"], rate: 125, rateMax: 125, unit: "mL/16L water + yeast", rateText: "125ml AC Tipster per 16L of water PLUS 320mL yeast autolysate", notes: "WHP: 7 days. no more then 4 applications per season. Fruit fly foliage bait. do not spray over flowers. Make sure PH is neutral" }
      ]
    },
    {
      crop: "Mango",
      cropList: ["Mango"],
      weeds: [
          { weed: "Flatid Planthopper, Flower-eating Caterpillar, Loopers, Yellow Peach Moth, Suppression only: Fruit-spotting Bug, Banana-spotting Bug, Green Vegetable Bug, Lychee Stink Bug", pestList: ["Flatid Planthopper", "Flower-eating Caterpillar", "Loopers", "Yellow Peach Moth", "Suppression Only: Fruit-spotting Bug", "Banana-spotting Bug", "Green Vegetable Bug", "Lychee Stink Bug"], states: ["All"], rate: 100, rateMax: 100, unit: "mL/100L", rateText: "100 ml/100L", notes: "WHP: 7 days. no more than 6 applications per season. do not spray over flowers. Make sure PH is neutral" },
          { weed: "Queensland Fruit Fly", pestList: ["Queensland Fruit Fly"], states: ["All"], rate: 250, rateMax: 250, unit: "mL/100L", rateText: "First spray 250ml/100L, Repeat sprays 125ml/100L", notes: "WHP: 7 days. no more than 4 applications per season. do not spray over flowers. Make sure PH is neutral" }
      ]
    },
    {
      crop: "Cucurbits",
      cropList: ["Cucurbits"],
      weeds: [
          { weed: "Cutworm", pestList: ["Cutworm"], states: ["All"], rate: 95, rateMax: 95, unit: "mL/100L", rateText: "95ml/100L", notes: "WHP: 2 days. Apply when pests are first seen and repeat if necessary." }
      ]
    },
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      weeds: [
          { weed: "Flatid Planthopper, Flower-eating Caterpillar, Loopers, Yellow Peach Moth, Suppression only: Fruit-spotting Bug, Banana-spotting Bug, Green Vegetable Bug, Lychee Stink Bug", pestList: ["Flatid Planthopper", "Flower-eating Caterpillar", "Loopers", "Yellow Peach Moth", "Suppression Only: Fruit-spotting Bug", "Banana-spotting Bug", "Green Vegetable Bug", "Lychee Stink Bug"], states: ["All"], rate: 100, rateMax: 100, unit: "mL/100L", rateText: "100 ml/100L", notes: "WHP: 7 days. no more then 6 applications per season. do not spray over flowers. Make sure PH is neutral" },
          { weed: "Queensland Fruit Fly", pestList: ["Queensland Fruit Fly"], states: ["All"], rate: 250, rateMax: 250, unit: "mL/100L", rateText: "First spray 250ml/100L, Repeat sprays 125ml/100L", notes: "WHP: 7 days. no more then 4 applications per season. do not spray over flowers. Make sure PH is neutral" }
      ]
    },
    {
      crop: "Longan",
      cropList: ["Longan"],
      weeds: [
          { weed: "Queensland Fruit Fly", pestList: ["Queensland Fruit Fly"], states: ["All"], rate: 250, rateMax: 250, unit: "mL/100L", rateText: "First spray 250ml/100L, Repeat sprays 125ml/100L", notes: "WHP: 7 days. no more then 4 applications per season. do not spray over flowers. Make sure PH is neutral" }
      ]
    },
    {
      crop: "Capsicum",
      cropList: ["Capsicum"],
      weeds: [
          { weed: "Fruit fly, Rutherglen bug, green vege bug, cabbage moth, cabage white butterfly", pestList: ["Fruit Fly", "Rutherglen Bug", "Green Vege Bug", "Cabbage Moth", "Cabage White Butterfly"], states: ["All"], rate: 100, rateMax: 250, unit: "mL/100L", rateText: "100-250ml/100L consult label further", notes: "WHP: 2 days. consult label" }
      ]
    },
    {
      crop: "Passionfruit",
      cropList: ["Passionfruit"],
      weeds: [
          { weed: "Passion vine bug and Green vegetable bug", pestList: ["Passion Vine Bug", "Green Vegetable Bug"], states: ["All"], rate: 100, rateMax: 100, unit: "mL/100L", rateText: "100 ml/100L", notes: "WHP: 2 days. Make sure PH is slightly acidic" }
      ]
    },
    {
      crop: "Papaya",
      cropList: ["Papaya"],
      weeds: [
          { weed: "Fruit spotting bug, Banana spotting bug", pestList: ["Fruit Spotting Bug", "Banana Spotting Bug"], states: ["All"], rate: 100, rateMax: 100, unit: "mL/100L", rateText: "100ml/100L", notes: "WHP: 2 days. Make sure the PH is neutral" },
          { weed: "Queensland Fruit Fly", pestList: ["Queensland Fruit Fly"], states: ["All"], rate: 250, rateMax: 250, unit: "mL/100L", rateText: "First spray 250ml/100L, Repeat sprays 125ml/100L", notes: "WHP: 7 days. no more than 4 applications per season. do not spray over flowers. Make sure PH is neutral" }
      ]
    }
    
  ],

  restraints: [
    "Highly toxic if swallowed",
    "May cause skin and eye irritation",
    "Avoid contact with eyes and skin",
    "Do not breathe vapors or spray mist",
    "Do not eat, drink or smoke while handling",
    "Restricted to suitably qualified applicators (some regions)"
  ],

  compatibility: {
    compatible:   ["Most fungicides"],
    incompatible: [],
    notes:        ["Check label of all tank mix products"]
  },

  withholding: {
    harvest: "Edible crops (except leafy): 2 days. Leafy vegetables: 5 days. Dried fruit: 2 days.",
    grazing: "Pastures/forage crops: Do NOT graze or cut for stock food for 2 days."
  },

  surfactant:     "A suitable surfactant/wetter is recommended; consult label for options.",
  sprayerCleanup: "Thoroughly rinse sprayer with water after use. Do not dispose of rinsings on site."
};
