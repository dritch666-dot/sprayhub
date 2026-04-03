productDatabase['methomyl'] = {
    "name": "Nufarm Methomyl 225",
    "company": "Nufarm",

    "category": "Insecticides",
    "activeIngredient": "Methomyl (225 g/L)",
    "group": "Group 1A (Insecticide)",
    "modeOfAction": "Anticholinesterase inhibitor",
    "formulation": "Liquid (EC/SL)",
    "color": "#dc2626",
    "apvma": "47336",
    "labelPdf": "Source labels/Nufarm_Methomyl_Label.pdf",
    "sdsPdf": "SDS Labels/NUFARM_METHOMYL_225_INSECTICIDE.pdf",
    "signalHeading": "Dangerous Poison",
    "classification": {
        "type": "Insecticide",
        "target": [
            "Caterpillars",
            "Bugs",
            "Thrips",
            "Aphids"
        ],
        "timing": [
            "Curative",
            "Ovicide"
        ]
    },
    "crops": [
        {
            "crop": "Broadacre (Canola, Cereals, Cotton, Lucerne, Pulses)",
            cropList: ["Broadacre","Canola","Cereals","Cotton","Lucerne","Pulses"],
            "weeds": [
                {
                    "weed": "Armyworm",
                    pestList: ["Armyworm"],
                    "states": [
                        "All"
                    ],
                    "rate": "1000",
                    "rateMax": "1500",
                    "unit": "mL/ha",
                    "rates": {
                        "boom": "1 - 1.5 L/ha"
                    },
                    "stage": "Active",
                    "note": "Spray at dusk (night feeders)."
                },
                {
                    "weed": "Budworm / Helicoverpa",
                    pestList: ["Budworm / Helicoverpa"],
                    "states": [
                        "All"
                    ],
                    "rate": "1500",
                    "rateMax": "2000",
                    "unit": "mL/ha",
                    "rates": {
                        "boom": "1.5 - 2 L/ha"
                    },
                    "stage": "Larvicide"
                },
                {
                    "weed": "Cotton Bollworm",
                    pestList: ["Cotton Bollworm"],
                    "states": [
                        "Qld",
                        "NSW",
                        "WA"
                    ],
                    "rate": "1800",
                    "rateMax": "2400",
                    "unit": "mL/ha",
                    "rates": {
                        "boom": "1.8 - 2.4 L/ha (Larvicide)",
                        "boom_ovicide": "0.5 - 1 L/ha (Ovicide)"
                    },
                    "stage": "Egg/Larva"
                },
                {
                    "weed": "Green Vegetable Bug",
                    pestList: ["Green Vegetable Bug"],
                    "states": [
                        "All"
                    ],
                    "rate": "1500",
                    "rateMax": "1500",
                    "unit": "mL/ha",
                    "rates": {
                        "boom": "1.5 L/ha"
                    },
                    "stage": "Active"
                }
            ]
        },
        {
            "crop": "Vegetables (Beans, Brassicas, Capsicum, Lettuce, Potatoes, Tomatoes, Sweetcorn)",
            cropList: ["Vegetables","Beans","Brassicas","Capsicum","Lettuce","Potatoes","Tomatoes","Sweetcorn"],
            "weeds": [
                {
                    "weed": "Cabbage White Butterfly",
                    pestList: ["Cabbage White Butterfly"],
                    "states": [
                        "All"
                    ],
                    "rate": "100",
                    "rateMax": "100",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "100 mL/100L",
                        "boom": "1 - 2 L/ha"
                    },
                    "stage": "Active"
                },
                {
                    "weed": "Corn Earworm",
                    pestList: ["Corn Earworm"],
                    "states": [
                        "All"
                    ],
                    "rate": "150",
                    "rateMax": "200",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "150 - 200 mL/100L",
                        "boom": "1.5 - 2 L/ha"
                    },
                    "stage": "Silking"
                },
                {
                    "weed": "Diamondback Moth",
                    pestList: ["Diamondback Moth"],
                    "states": [
                        "All"
                    ],
                    "rate": "100",
                    "rateMax": "100",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "100 mL/100L",
                        "boom": "1 - 2 L/ha"
                    },
                    "stage": "Active"
                },
                {
                    "weed": "Potato Moth",
                    pestList: ["Potato Moth"],
                    "states": [
                        "All"
                    ],
                    "rate": "1500",
                    "rateMax": "2000",
                    "unit": "mL/ha",
                    "rates": {
                        "boom": "1.5 - 2 L/ha"
                    },
                    "stage": "Active"
                },
                {
                    "weed": "Thrips",
                    pestList: ["Thrips"],
                    "states": [
                        "All"
                    ],
                    "rate": "200",
                    "rateMax": "200",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "200 mL/100L",
                        "boom": "2 L/ha"
                    },
                    "stage": "Active"
                },
                {
                    "weed": "Tomato Grub",
                    pestList: ["Tomato Grub"],
                    "states": [
                        "All"
                    ],
                    "rate": "150",
                    "rateMax": "200",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "150 - 200 mL/100L (Larvicide)",
                        "boom": "1.5 - 2 L/ha (Larvicide)"
                    },
                    "stage": "Active",
                    "note": "Ovicide rate: 50-100mL/100L"
                }
            ]
        },
        {
            "crop": "Tree Crops (Apples, Citrus, Pears, Stone Fruit)",
            cropList: ["Tree Crops","Apples","Citrus","Pears","Stone Fruit"],
            "weeds": [
                {
                    "weed": "Citrus Bug / Bronze Orange Bug",
                    pestList: ["Citrus Bug / Bronze Orange Bug"],
                    "states": [
                        "Qld",
                        "Vic",
                        "WA",
                        "SA"
                    ],
                    "rate": "25",
                    "rateMax": "25",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "25 mL/100L"
                    },
                    "stage": "Before winged adult"
                },
                {
                    "weed": "Codling Moth",
                    pestList: ["Codling Moth"],
                    "states": [
                        "NSW",
                        "Vic",
                        "WA"
                    ],
                    "rate": "150",
                    "rateMax": "200",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "150 - 200 mL/100L"
                    },
                    "stage": "Late season light infestation only"
                },
                {
                    "weed": "Lightbrown Apple Moth",
                    pestList: ["Lightbrown Apple Moth"],
                    "states": [
                        "All"
                    ],
                    "rate": "150",
                    "rateMax": "200",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "150 - 200 mL/100L"
                    },
                    "stage": "Calyx stage"
                },
                {
                    "weed": "Long-tailed Mealybug",
                    pestList: ["Long-Tailed Mealybug"],
                    "states": [
                        "SA",
                        "WA"
                    ],
                    "rate": "200",
                    "rateMax": "200",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "200 mL/100L"
                    },
                    "stage": "Aug or Nov-Dec"
                },
                {
                    "weed": "Thrips",
                    pestList: ["Thrips"],
                    "states": [
                        "All"
                    ],
                    "rate": "200",
                    "rateMax": "200",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "200 mL/100L"
                    },
                    "stage": "Petal fall"
                }
            ]
        },
        {
            "crop": "Berries (Blueberries, Strawberries)",
            cropList: ["Berries"],
            "weeds": [
                {
                    "weed": "Budworm / Helicoverpa",
                    pestList: ["Budworm / Helicoverpa"],
                    "states": [
                        "All"
                    ],
                    "rate": "150",
                    "rateMax": "150",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "150 mL/100L",
                        "boom": "1.5 L/ha"
                    },
                    "stage": "Active"
                },
                {
                    "weed": "Monolepta Beetle",
                    pestList: ["Monolepta Beetle"],
                    "states": [
                        "NSW",
                        "WA"
                    ],
                    "rate": "100",
                    "rateMax": "100",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "100 mL/100L"
                    },
                    "stage": "Pest incidence"
                }
            ]
        },
        {
            "crop": "Grapes",
            cropList: ["Grapes"],
            "weeds": [
                {
                    "weed": "Lightbrown Apple Moth",
                    pestList: ["Lightbrown Apple Moth"],
                    "states": [
                        "All"
                    ],
                    "rate": "150",
                    "rateMax": "150",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "150 mL/100L"
                    },
                    "stage": "Early shoot / Flowering"
                }
            ]
        },
    {
      crop: "Avocado",
      cropList: ["Avocado"],
      permitNumber: "PER14597",
      weeds: [
          { weed: "ECTROPIS LOOPER", pestList: ["Lepidopteran Pests", "Ectropis Looper"], states: ["All"], rate: "50-100", rateMax: "50-100", unit: "mL/100L", rateText: "50-100ml/100L", stage: "Apply as per permit directions", note: "WHP: 3 days. Use higher rate on larger loopers" }
      ]
    },
    {
      crop: "Mango",
      cropList: ["Mango"],
      permitNumber: "PER84427",
      weeds: [
          { weed: "Redbanded thrips Chilli thrips Banana flower thrips Tomato thrips", pestList: ["Thrips", "Redbanded Thrips", "Chilli Thrips", "Banana Flower Thrips", "Tomato Thrips"], states: ["All"], rate: "200", rateMax: "200", unit: "mL/100L", rateText: "200ml/100L", stage: "Apply as per permit directions", note: "WHP: na. no more than 3 applications per season. do not apply after early fruit set" }
      ]
    },
    {
      crop: "Cucurbits",
      cropList: ["Cucurbits"],
      weeds: [
          { weed: "Fall armyworm", pestList: ["Lepidopteran Pests", "Fall Armyworm"], states: ["All"], rate: "1-2", unit: "L/ha", rateText: "1-2L/ha", notes: "WHP: 3 days. No more then 6 applications per crop" },
          { weed: "Cucumber moth, Cluster caterpillar, loopers, webworm, Rutherglen bug, Thrips, western flower thrip", pestList: ["Cucumber Moth", "Cluster Caterpillar", "Loopers", "Webworm", "Rutherglen Bug", "Thrips", "Western Flower Thrip"], states: ["All"], rate: "1-2", unit: "L/ha", rateText: "1-2L/ha a a wetter at 0.025%", notes: "WHP: 3 days. No more then 6 applications per crop" }
      ]
    },

    // ═══════════════════════════════════════════════
    // ═══ PERMIT USES ═══
    // ═══════════════════════════════════════════════

    // ── PER13566: Tomatoes & Capsicums — Fruit Fly ──
{
  crop: "Tomatoes — Fruit Fly (PER13566)",
  cropList: ["Tomatoes", "Capsicums"],
  permitNumber: "PER13566",
  weeds: [
    {
      weed: "Fruit Fly (Bactrocera spp.)",
      pestList: ["Fruit Fly", "Queensland Fruit Fly", "Lesser Queensland Fruit Fly"],
      states: ["QLD"],
      rate: "1.5",
      rateMax: "1.5",
      unit: "L/ha",
      stage: "As an aid in management of fruit fly",
      note: "PERMIT PER13566 (exp. 31/01/2031). Rate: 1.5 L/ha. Field grown crops only. Max 6 applications with 5-day re-treatment interval. WHP: 1 day (harvest). QLD Bowen, Gumlu and Burdekin districts only."
    }
  ]
},

// ── PER13700: Carrot — Budworm ──
{
  crop: "Carrot — Budworm (PER13700)",
  cropList: ["Carrot"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Budworm (Lepidopteran Pests)",
      pestList: ["Lepidopteran Pests", "Budworm"],
      states: ["NSW", "SA", "TAS"],
      rate: "1.5",
      rateMax: "2.0",
      unit: "L/ha",
      stage: "Seed production crops",
      note: "PERMIT PER13700 (exp. 30/09/2027). Rate: 1.5–2.0 L/ha. Seed production only. Max 2 applications per crop. WHP: Do not allow commodity for human/animal consumption. NSW, SA, TAS only."
    }
  ]
},

// ── PER13700: Lettuce — Budworm ──
{
  crop: "Lettuce — Budworm (PER13700)",
  cropList: ["Lettuce"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Budworm (Lepidopteran Pests)",
      pestList: ["Lepidopteran Pests", "Budworm"],
      states: ["NSW", "SA", "TAS"],
      rate: "1.5",
      rateMax: "2.0",
      unit: "L/ha",
      stage: "Seed production crops",
      note: "PERMIT PER13700 (exp. 30/09/2027). Rate: 1.5–2.0 L/ha. Seed production only. Max 2 applications per crop. WHP: Do not allow commodity for human/animal consumption. NSW, SA, TAS only."
    }
  ]
},

// ── PER13700: Onion — Budworm ──
{
  crop: "Onion — Budworm (PER13700)",
  cropList: ["Onion"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Budworm (Lepidopteran Pests)",
      pestList: ["Lepidopteran Pests", "Budworm"],
      states: ["NSW", "SA", "TAS"],
      rate: "1.5",
      rateMax: "2.0",
      unit: "L/ha",
      stage: "Seed production crops",
      note: "PERMIT PER13700 (exp. 30/09/2027). Rate: 1.5–2.0 L/ha. Seed production only. Max 2 applications per crop. WHP: Do not allow commodity for human/animal consumption. NSW, SA, TAS only."
    }
  ]
},

// ── PER13700: Lettuce — Thrip ──
{
  crop: "Lettuce — Thrip (PER13700)",
  cropList: ["Lettuce"],
  permitNumber: "PER13700",
  weeds: [
    {
      weed: "Thrip (Thripidae)",
      pestList: ["Thrips", "Thrip"],
      states: ["NSW", "SA", "TAS"],
      rate: "200",
      rateMax: "200",
      unit: "mL/ha",
      stage: "Seed production crops",
      note: "PERMIT PER13700 (exp. 30/09/2027). Rate: 200 mL/ha. Seed production only. Max 2 applications per crop. WHP: Do not allow commodity for human/animal consumption. NSW, SA, TAS only."
    }
  ]
},

// ── PER14548: Japanese Persimmon — Thrips ──
{
  crop: "Japanese Persimmon — Thrips (PER14548)",
  cropList: ["Japanese Persimmon"],
  permitNumber: "PER14548",
  weeds: [
    {
      weed: "Thrips (Thripidae spp.)",
      pestList: ["Thrips"],
      states: ["All"],
      rate: "200",
      rateMax: "200",
      unit: "mL/100L",
      stage: "Early flowering to early fruit development (BBCH 61-72)",
      note: "PERMIT PER14548 (exp. 31/05/2028). Rate: 200 mL/100L. Apply foliar cover spray BBCH 61-72 only. Max 3 applications per season, 10–14 day intervals. WHP: 0 days (not required). Add non-ionic wetting agent. All states."
    }
  ]
},

// ── PER14890: Shallots — Western Flower Thrips ──
{
  crop: "Shallots — Western Flower Thrips (PER14890)",
  cropList: ["Shallots"],
  permitNumber: "PER14890",
  weeds: [
    {
      weed: "Western Flower Thrips (Frankliniella occidentalis)",
      pestList: ["Thrips", "Western Flower Thrips"],
      states: ["All"],
      rate: "2",
      rateMax: "2",
      unit: "L/ha",
      stage: "At first signs of infestation",
      note: "PERMIT PER14890 (exp. 31/07/2029). Rate: 2 L/ha. Apply at first signs, thorough coverage essential. Monitor with yellow sticky traps. WHP: 3 days (harvest). Field grown only. All states."
    }
  ]
},

// ── PER14890: Spring Onions — Western Flower Thrips ──
{
  crop: "Spring Onions — Western Flower Thrips (PER14890)",
  cropList: ["Spring Onions"],
  permitNumber: "PER14890",
  weeds: [
    {
      weed: "Western Flower Thrips (Frankliniella occidentalis)",
      pestList: ["Thrips", "Western Flower Thrips"],
      states: ["All"],
      rate: "2",
      rateMax: "2",
      unit: "L/ha",
      stage: "At first signs of infestation",
      note: "PERMIT PER14890 (exp. 31/07/2029). Rate: 2 L/ha. Apply at first signs, thorough coverage essential. Monitor with yellow sticky traps. WHP: 3 days (harvest). Field grown only. All states."
    }
  ]
},

// ── PER81814: Oilseed Poppies — Cutworm ──
{
  crop: "Oilseed Poppies — Cutworm (PER81814)",
  cropList: ["Oilseed Poppies"],
  permitNumber: "PER81814",
  weeds: [
    {
      weed: "Cutworm (Agrotis spp.)",
      pestList: ["Lepidopteran Pests", "Cutworm"],
      states: ["TAS"],
      rate: "150",
      rateMax: "150",
      unit: "mL/ha",
      stage: "From 4-leaf stage onwards",
      note: "PERMIT PER81814 (exp. 30/11/2030). Rate: 150 mL/ha. Max 1 application per crop, foliar spray from 4-leaf stage. Apply dusk/late afternoon. Use >150 L/ha spray volume, COARSE droplets. WHP: 12 weeks. TAS only. DO NOT apply if heavy rains forecast within 3 days."
    }
  ]
},

// ── PER82428: Fruiting Vegetables (Cucurbits) — Helicoverpa ──
{
  crop: "Fruiting Vegetables (Cucurbits) — Helicoverpa (PER82428)",
  cropList: ["Cucumber", "Melon", "Pumpkin", "Squash", "Zucchini", "Choko", "Gherkin"],
  permitNumber: "PER82428",
  weeds: [
    {
      weed: "Helicoverpa spp. (Lepidopteran Pests)",
      pestList: ["Lepidopteran Pests", "Helicoverpa", "Cluster Caterpillar", "Loopers", "Webworm"],
      states: ["All"],
      rate: "100",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When infestation reaches economically damaging level",
      note: "PERMIT PER82428 (exp. 31/01/2029). Rate: 100–200 mL/100L (max 1–2 L/ha). Max 6 applications, 7-day intervals. WHP: 3 days. Add non-ionic wetting agent 0.025%. Ground cover spray. All states."
    }
  ]
},

// ── PER82428: Fruiting Vegetables (Cucurbits) — Rutherglen Bug ──
{
  crop: "Fruiting Vegetables (Cucurbits) — Rutherglen Bug (PER82428)",
  cropList: ["Cucumber", "Melon", "Pumpkin", "Squash", "Zucchini", "Choko", "Gherkin"],
  permitNumber: "PER82428",
  weeds: [
    {
      weed: "Rutherglen Bug",
      pestList: ["Rutherglen Bug"],
      states: ["All"],
      rate: "100",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When late stage immature and adult bugs present",
      note: "PERMIT PER82428 (exp. 31/01/2029). Rate: 100–200 mL/100L (max 1–2 L/ha). Max 6 applications, 7-day intervals. WHP: 3 days. Add non-ionic wetting agent 0.025%. Ground cover spray. All states."
    }
  ]
},

// ── PER82428: Fruiting Vegetables (Cucurbits) — Thrips ──
{
  crop: "Fruiting Vegetables (Cucurbits) — Thrips (PER82428)",
  cropList: ["Cucumber", "Melon", "Pumpkin", "Squash", "Zucchini", "Choko", "Gherkin"],
  permitNumber: "PER82428",
  weeds: [
    {
      weed: "Thrips including Japanese WFT (Thripidae)",
      pestList: ["Thrips", "Western Flower Thrips"],
      states: ["All"],
      rate: "100",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When monitoring shows pest incidence",
      note: "PERMIT PER82428 (exp. 31/01/2029). Rate: 100–200 mL/100L (max 1–2 L/ha). Max 6 applications, 7-day intervals. WHP: 3 days. Add non-ionic wetting agent 0.025%. Ground cover spray. All states."
    }
  ]
},

// ── PER82428: Fruiting Vegetables (Other) — Helicoverpa/Rutherglen/Thrips ──
{
  crop: "Fruiting Vegetables (Eggplant, Okra, Peppers, Tomatoes) — Multiple Pests (PER82428)",
  cropList: ["Eggplant", "Okra", "Peppers", "Capsicum", "Chilli", "Paprika", "Tomatoes"],
  permitNumber: "PER82428",
  weeds: [
    {
      weed: "Helicoverpa spp., Rutherglen Bug, Thrips (Multiple Pests)",
      pestList: ["Lepidopteran Pests", "Helicoverpa", "Rutherglen Bug", "Thrips"],
      states: ["All"],
      rate: "100",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When pest incidence warrants treatment",
      note: "PERMIT PER82428 (exp. 31/01/2029). Rate: 100–200 mL/100L (max 1–2 L/ha). Max 6 applications, 7-day intervals. WHP: 3 days. Add non-ionic wetting agent 0.025%. Ground cover spray. All states."
    }
  ]
},

// ── PER82428: Legume Vegetables — Multiple Pests ──
{
  crop: "Legume Vegetables — Multiple Pests (PER82428)",
  cropList: ["Green Soyabean", "Faba Bean", "Flower Bean", "Snake Bean", "Snow Peas", "Sugar Snap Peas", "Winged Bean"],
  permitNumber: "PER82428",
  weeds: [
    {
      weed: "Helicoverpa spp., Rutherglen Bug, Thrips (Multiple Pests)",
      pestList: ["Lepidopteran Pests", "Helicoverpa", "Rutherglen Bug", "Thrips"],
      states: ["All"],
      rate: "100",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When pest incidence warrants treatment",
      note: "PERMIT PER82428 (exp. 31/01/2029). Rate: 100–200 mL/100L (max 1–2 L/ha). Max 6 applications, 7-day intervals. WHP: 3 days. Grazing: do not graze/cut for stockfood for 3 days. Add non-ionic wetting agent. All states."
    }
  ]
},

// ── PER82428: Root & Tuber Vegetables — Helicoverpa/Rutherglen/Thrips ──
{
  crop: "Root & Tuber Vegetables — Helicoverpa (PER82428)",
  cropList: ["Beetroot", "Burdock", "Daikon", "Galangal", "Taro", "Yam", "Yam Bean"],
  permitNumber: "PER82428",
  weeds: [
    {
      weed: "Helicoverpa spp. (Lepidopteran Pests)",
      pestList: ["Lepidopteran Pests", "Helicoverpa", "Cluster Caterpillar", "Loopers", "Webworm"],
      states: ["All"],
      rate: "100",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When infestation reaches economically damaging level",
      note: "PERMIT PER82428 (exp. 31/01/2029). Rate: 100–200 mL/100L (max 1–2 L/ha). Max 3 applications, 7-day intervals. WHP: 7 days. Add non-ionic wetting agent 0.025%. All states."
    }
  ]
},

// ── PER82428: Celery — Multiple Pests ──
{
  crop: "Celery — Multiple Pests (PER82428)",
  cropList: ["Celery"],
  permitNumber: "PER82428",
  weeds: [
    {
      weed: "Helicoverpa, Rutherglen Bug, Thrips (Multiple Pests)",
      pestList: ["Lepidopteran Pests", "Helicoverpa", "Rutherglen Bug", "Thrips"],
      states: ["All"],
      rate: "100",
      rateMax: "100",
      unit: "mL/100L",
      stage: "When pest incidence warrants treatment",
      note: "PERMIT PER82428 (exp. 31/01/2029). Rate: 100 mL/100L (max 1 L/ha). Max 3 applications, 7-day intervals. WHP: 1 day. Add non-ionic wetting agent. All states."
    }
  ]
},

// ── PER84229: Tomato — Tomato Potato Psyllid ──
{
  crop: "Tomato — Tomato Potato Psyllid (PER84229)",
  cropList: ["Tomato"],
  permitNumber: "PER84229",
  weeds: [
    {
      weed: "Tomato Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Tomato Potato Psyllid"],
      states: ["All"],
      rate: "200",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When pests first appear",
      note: "PERMIT PER84229 (exp. 31/12/2029). Rate: 200 mL/100L (2 L/ha). Max 6 applications, 7-day intervals. WHP: 1 day (harvest). Field grown only. Thorough coverage essential. All states."
    }
  ]
},

// ── PER84229: Eggplant — Tomato Potato Psyllid ──
{
  crop: "Eggplant — Tomato Potato Psyllid (PER84229)",
  cropList: ["Eggplant"],
  permitNumber: "PER84229",
  weeds: [
    {
      weed: "Tomato Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Tomato Potato Psyllid"],
      states: ["All"],
      rate: "200",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When pests first appear",
      note: "PERMIT PER84229 (exp. 31/12/2029). Rate: 200 mL/100L (2 L/ha). Max 6 applications, 7-day intervals. WHP: 3 days (harvest). Field grown only. Thorough coverage essential. All states."
    }
  ]
},

// ── PER84229: Capsicum — Tomato Potato Psyllid ──
{
  crop: "Capsicum — Tomato Potato Psyllid (PER84229)",
  cropList: ["Capsicum"],
  permitNumber: "PER84229",
  weeds: [
    {
      weed: "Tomato Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Tomato Potato Psyllid"],
      states: ["All"],
      rate: "200",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When pests first appear",
      note: "PERMIT PER84229 (exp. 31/12/2029). Rate: 200 mL/100L (2 L/ha). Max 6 applications, 7-day intervals. WHP: 3 days (harvest). Field grown only. Thorough coverage essential. All states."
    }
  ]
},

// ── PER84229: Chilli Pepper — Tomato Potato Psyllid ──
{
  crop: "Chilli Pepper — Tomato Potato Psyllid (PER84229)",
  cropList: ["Chilli Pepper"],
  permitNumber: "PER84229",
  weeds: [
    {
      weed: "Tomato Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Tomato Potato Psyllid"],
      states: ["All"],
      rate: "200",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When pests first appear",
      note: "PERMIT PER84229 (exp. 31/12/2029). Rate: 200 mL/100L (2 L/ha). Max 6 applications, 7-day intervals. WHP: 3 days (harvest). Field grown only. Thorough coverage essential. All states."
    }
  ]
},

// ── PER87495: Blueberries — Red-Shouldered Leaf Beetle ──
{
  crop: "Blueberries — Red-Shouldered Leaf Beetle (PER87495)",
  cropList: ["Blueberries"],
  permitNumber: "PER87495",
  weeds: [
    {
      weed: "Red-Shouldered Leaf Beetle (Monolepta australis)",
      pestList: ["Red-Shouldered Leaf Beetle"],
      states: ["QLD", "TAS", "SA", "VIC", "ACT", "NT"],
      rate: "100",
      rateMax: "100",
      unit: "mL/100L",
      stage: "According to pest incidence",
      note: "PERMIT PER87495 (exp. 31/12/2028). Rate: 100 mL/100L. Apply coarse spray with low pressure ground equipment. WHP: 5 days (harvest). QLD, TAS, SA, VIC, ACT, NT only."
    }
  ]
},

// ── PER87495: Blueberries — Helicoverpa ──
{
  crop: "Blueberries — Helicoverpa (PER87495)",
  cropList: ["Blueberries"],
  permitNumber: "PER87495",
  weeds: [
    {
      weed: "Helicoverpa spp. (Lepidopteran Pests)",
      pestList: ["Lepidopteran Pests", "Helicoverpa"],
      states: ["QLD", "TAS", "SA", "VIC", "ACT", "NT"],
      rate: "100",
      rateMax: "100",
      unit: "mL/100L",
      stage: "When infestation reaches economically damaging level",
      note: "PERMIT PER87495 (exp. 31/12/2028). Rate: 100 mL/100L. Apply coarse spray with low pressure ground equipment. WHP: 5 days (harvest). QLD, TAS, SA, VIC, ACT, NT only."
    }
  ]
},

// ── PER87495: Blueberries — Plague Thrips ──
{
  crop: "Blueberries — Plague Thrips (PER87495)",
  cropList: ["Blueberries"],
  permitNumber: "PER87495",
  weeds: [
    {
      weed: "Plague Thrips (Thrips imaginis)",
      pestList: ["Thrips", "Plague Thrips"],
      states: ["QLD", "TAS", "SA", "VIC", "ACT", "NT"],
      rate: "100",
      rateMax: "100",
      unit: "mL/100L",
      stage: "When numerous on flowers",
      note: "PERMIT PER87495 (exp. 31/12/2028). Rate: 100 mL/100L. Apply coarse spray with low pressure ground equipment. WHP: 5 days (harvest). QLD, TAS, SA, VIC, ACT, NT only."
    }
  ]
},

// ── PER90592: Macadamia — Banana Fruit Caterpillar ──
{
  crop: "Macadamia — Banana Fruit Caterpillar (PER90592)",
  cropList: ["Macadamia"],
  permitNumber: "PER90592",
  weeds: [
    {
      weed: "Banana Fruit Caterpillar (Tiracola plagiata)",
      pestList: ["Lepidopteran Pests", "Banana Fruit Caterpillar"],
      states: ["QLD"],
      rate: "1.5",
      rateMax: "2.0",
      unit: "L/ha",
      stage: "During late flowering/early fruit development",
      note: "PERMIT PER90592 (exp. 30/04/2026). Rate: 1.5–2.0 L/ha. Ground surface treatment to mulch/soil only up to treelines. Max 1 application when larvae first observed. Do NOT spray foliage/flowers/nutlets. WHP: 0 days. QLD only."
    }
  ]
},

// ── PER91054: Cotton — Pests as per registered label ──
{
  crop: "Cotton — Pests as per registered label (PER91054)",
  cropList: ["Cotton"],
  permitNumber: "PER91054",
  weeds: [
    {
      weed: "Pests as per registered label",
      pestList: ["Lepidopteran Pests", "Mirids", "Whiteflies", "Spider Mites"],
      states: ["NSW", "QLD"],
      rate: "As per",
      rateMax: "As per",
      unit: "product label",
      stage: "As per registered cotton uses",
      note: "PERMIT PER91054 (exp. 31/08/2027). This permit allows feeding of cotton gin trash to livestock. Uses must comply with product label. Clean-feeding interval: 60 days pre-slaughter. NSW, QLD only."
    }
  ]
},

// ── PER92701: Commercial Nursery Stock (Non-food) — Green Snail ──
{
  crop: "Commercial Nursery Stock (Non-food) — Green Snail (PER92701)",
  cropList: ["Nursery Stock"],
  permitNumber: "PER92701",
  weeds: [
    {
      weed: "Green Snail (Cantareus apertus)",
      pestList: ["Green Snail"],
      states: ["WA"],
      rate: "200",
      rateMax: "200",
      unit: "mL/100L",
      stage: "Quarantine treatment",
      note: "PERMIT PER92701 (exp. 31/10/2029). Rate: 200 mL/100L + wetter 25 mL/100L. Quarantine treatment of nursery stock (non-food) only. Max 1 application. Apply by ground boomspray only. Do NOT handle/package/ship for 24 hours post-application. WA only (ICA-25 facilities)."
    }
  ]
},

// ── PER91921: Nursery Stock — Hemiptera (Stink Bugs, Psyllids, Leafhoppers, Whiteflies) ──
{
  crop: "Non-food Nursery Stock — Hemiptera (Stink Bugs, Psyllids, Leafhoppers, Whiteflies) (PER91921)",
  cropList: ["Nursery Stock", "Ornamentals"],
  permitNumber: "PER91921",
  weeds: [
    {
      weed: "Stink Bugs (Pentatomidae), Psyllids (Psyllidae), Leafhoppers (Cicadellidae), Whiteflies (Aleyrodidae)",
      pestList: ["Hemipteran Pests", "Stink Bugs", "Psyllids", "Leafhoppers", "Whiteflies"],
      states: ["All"],
      rate: "100",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When pest thresholds reached or first signs of infestation",
      note: "PERMIT PER91921 (exp. 28/02/2030). NUDRIN 225 INSECTICIDE (400 g/L methomyl). Do not use on vegetable or herb seedlings. Do not use in glasshouses, greenhouses or plastic tunnels. WHP: Non-food crop (no harvest WHP)."
    }
  ]
},

// ── PER91928: Nursery Stock — Lepidoptera (Fall armyworm, Cutworms, Loopers) ──
{
  crop: "Non-food Nursery Stock — Lepidoptera (Fall armyworm, Cutworms, Loopers) (PER91928)",
  cropList: ["Nursery Stock", "Ornamentals"],
  permitNumber: "PER91928",
  weeds: [
    {
      weed: "Lepidopteran larvae including Fall armyworm (Spodoptera frugiperda), Cutworms (Agrotis spp.), Loopers",
      pestList: ["Lepidopteran Pests", "Fall armyworm", "Cutworms", "Loopers"],
      states: ["All"],
      rate: "100",
      rateMax: "200",
      unit: "mL/100L",
      stage: "At first signs of infestation or when pest thresholds reached",
      note: "PERMIT PER91928 (exp. 30/09/2030). NUDRIN 225 INSECTICIDE (225 g/L methomyl). Do not use on vegetable or herb seedlings. Do not use in covered/protected situations. Apply maximum 2 applications per crop at 7–14 day intervals. WHP: Non-food crop."
    }
  ]
},

// ── PER91941: Nursery Stock — Thrips (Thysanoptera, Western Flower Thrips) ──
{
  crop: "Non-food Nursery Stock — Thrips (Thysanoptera) (PER91941)",
  cropList: ["Nursery Stock", "Ornamentals"],
  permitNumber: "PER91941",
  weeds: [
    {
      weed: "Thrips (Thysanoptera) including Western Flower Thrips (Frankliniella occidentalis)",
      pestList: ["Thysanopteran Pests", "Thrips"],
      states: ["All"],
      rate: "100",
      rateMax: "200",
      unit: "mL/100L",
      stage: "When pest control required for crop management; at hatch or small larvae stage",
      note: "PERMIT PER91941 (exp. 30/09/2030). NUDRIN 225 INSECTICIDE (400 g/L methomyl). Do not use on vegetable or herb seedlings. Do not use in glasshouses, greenhouses or plastic tunnels. Maximum 2 applications per crop at 7–14 day intervals. WHP: Non-food crop."
    }
  ]
},

// ── PER91944: Nursery Stock — Coleoptera (Beetles, Weevils, Stem Borers) ──
{
  crop: "Non-food Nursery Stock — Coleoptera (Beetles, Weevils, Stem Borers) (PER91944)",
  cropList: ["Nursery Stock", "Ornamentals"],
  permitNumber: "PER91944",
  weeds: [
    {
      weed: "Stem borers (Coleoptera), Beetles (Coleoptera suppression)",
      pestList: ["Coleopteran Pests", "Stem borers", "Beetles"],
      states: ["All"],
      rate: "100",
      rateMax: "200",
      unit: "mL/100L",
      stage: "At first signs of infestation or when pest thresholds reached",
      note: "PERMIT PER91944 (exp. 30/09/2030). NUDRIN 225 INSECTICIDE (400 g/L methomyl). Do not use on vegetable or herb seedlings. Do not use in covered/protected situations. Do not use equipment carried on user's back. WHP: Non-food crop."
    }
  ]
},

// PER13353: Generic canola permit — pests as per registered label. Not coded.

    ],
    "restraints": [
        "DO NOT use in covered/protected situations (glasshouses)",
        "DO NOT spray plants in flower while bees are foraging",
        "Dangerous to birds and fish - do not contaminate waterways"
    ],
    "compatibility": {
        "compatible": [
            "Common insecticides/fungicides"
        ],
        "incompatible": [
            "Alkaline materials (Lime Sulfur, Bordeaux)"
        ],
        "notes": [
            "Add wetting agent (25mL/100L) for optimum results."
        ]
    },
    "withholding": {
        "harvest": "Tomatoes/Beans/Stone Fruit/Apples: 1 day. Citrus/Pears: 2 days. Strawberries: 3 days. Canola/Pulses/Grapes: 7 days. Cereals/Maize: 14 days.",
        "grazing": "Lucerne/Pasture: 3 days. Cereals/Maize: 14 days. Cotton: Do not graze."
    },
    "surfactant": "Add Non-ionic Wetting Agent (25mL/100L).",
    "sprayerCleanup": "Triple rinse. Wash with detergent."
};
