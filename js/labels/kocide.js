productDatabase['kocide'] = {
    "id": "kocide",
    "name": "Kocide® Blue Xtra® Fungicide",
    "company": "Koppernielsen",

    "category": "Fungicides",
    "activeIngredient": "350 g/kg COPPER (Cu) present as Cupric hydroxide",
    "group": "Group M1 (Fungicide)",
    "formulation": "Water Dispersible Granule (WG)",
    "modeOfAction": "Multi-site contact activity",
    "targetPests": [
        "Shothole",
        "Leaf curl",
        "Black spot (scab)",
        "Anthracnose",
        "Freckle",
        "Bacterial gummosis",
        "Cercospora leaf spot",
        "Melanose",
        "Smoky blotch",
        "Scab",
        "Parasitic algae",
        "Husk spot",
        "Pink limb blight",
        "Bacterial black spot",
        "Downy mildew",
        "Walnut blight",
        "Phytophthora stem canker",
        "Common blight",
        "Halo blight",
        "Bacterial brown spot",
        "Rust",
        "Black rot",
        "Ring spot"
    ],
    "crops": [
        {
            "crop": "Almonds",
            cropList: ["Almonds"],
            "weeds": [
                {
                    "weed": "Shothole, Leaf curl",
                    pestList: ["Shothole","Leaf Curl"],
                    "rate": "150",
                    "unit": "g/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply when buds are swelling but BEFORE AND WITHIN ONE WEEK OF BUD OPENING."
                }
            ]
        },
        {
            "crop": "Apples, Pears",
            cropList: ["Apples","Pears"],
            "weeds": [
                {
                    "weed": "Black spot (scab)",
                    pestList: ["Black Spot"],
                    "rate": "150",
                    "unit": "g/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply at green tip. Discontinue use when green tip reaches 1 cm."
                }
            ]
        },
        {
            "crop": "Avocados",
            cropList: ["Avocados"],
            "weeds": [
                {
                    "weed": "Anthracnose",
                    pestList: ["Anthracnose"],
                    "rate": "150",
                    "unit": "g/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Spray every 4 weeks from end of flowering to harvest."
                }
            ]
        },
        {
            "crop": "Apricots, Cherries, Nectarines, Peaches, Plums",
            cropList: ["Apricots","Cherries","Nectarines","Peaches","Plums"],
            "weeds": [
                {
                    "weed": "Shothole, Leaf curl, Freckle",
                    pestList: ["Shothole","Leaf Curl","Freckle"],
                    "rate": "150",
                    "unit": "g/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply at bud swell but before earliest sign of leaf bud development."
                }
            ]
        },
        {
            "crop": "Bananas",
            cropList: ["Bananas"],
            "weeds": [
                {
                    "weed": "Cercospora leaf spot",
                    pestList: ["Cercospora Leaf Spot"],
                    "rate": "150",
                    "unit": "g/100L",
                    "states": [
                        "Qld",
                        "NSW",
                        "WA"
                    ],
                    "note": "Apply at 3 to 4 weekly intervals from December to May. Tank mix with oil."
                }
            ]
        },
        {
            "crop": "Citrus",
            cropList: ["Citrus"],
            "weeds": [
                {
                    "weed": "Black spot, Melanose, Smoky blotch, Scab",
                    pestList: ["Black Spot","Melanose","Smoky Blotch","Scab"],
                    "rate": "150",
                    "rateMax": "225",
                    "unit": "g/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply at petal fall. Use higher rates in coastal districts."
                }
            ]
        },
        {
            "crop": "Macadamias",
            cropList: ["Macadamias"],
            "weeds": [
                {
                    "weed": "Husk spot, Anthracnose, Pink limb blight",
                    pestList: ["Husk Spot","Anthracnose","Pink Limb Blight"],
                    "rate": "150",
                    "unit": "g/100L",
                    "states": [
                        "Qld",
                        "NT",
                        "NSW"
                    ],
                    "note": "Apply from nut set (late September) to December at 3-4 week intervals."
                }
            ]
        },
        {
            "crop": "Mangoes",
            cropList: ["Mangoes"],
            "weeds": [
                {
                    "weed": "Anthracnose, Bacterial black spot",
                    pestList: ["Anthracnose","Bacterial Black Spot"],
                    "rate": "150",
                    "rateMax": "225",
                    "unit": "g/100L",
                    "states": [
                        "NSW",
                        "Qld",
                        "SA",
                        "WA",
                        "NT"
                    ],
                    "note": "Spray every 4 weeks from end of flowering to harvest."
                }
            ]
        },
        {
            "crop": "Vines",
            cropList: ["Vines"],
            "weeds": [
                {
                    "weed": "Downy mildew",
                    pestList: ["Downy Mildew"],
                    "rate": "135",
                    "rateMax": "190",
                    "unit": "g/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply when shoots are 10 cm long and repeat at 10-14 day intervals."
                }
            ]
        },
        {
            "crop": "Beans (Vegetables)",
            cropList: ["Beans"],
            "weeds": [
                {
                    "weed": "Common blight, Halo blight, Bacterial brown spot",
                    pestList: ["Common Blight","Halo Blight","Bacterial Brown Spot"],
                    "rate": "150",
                    "unit": "g/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply as preventative spray. Repeat at 10-14 day intervals."
                }
            ]
        },

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER11943: Custard Apple — Anthracnose ──
  {
    crop: "Custard Apple — Anthracnose (PER11943)",
    cropList: ["Custard Apple"],
    permitNumber: "PER11943",
    weeds: [
      {
        weed: "Anthracnose (Colletotrichum gloeosporioides)",
        pestList: ["Fungal Diseases", "Anthracnose"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "280",
        rateMax: "430",
        unit: "g/100L",
        stage: "From flowering to harvest; apply when conditions favour disease development; DO NOT apply more than 6 applications per crop; air-blast sprayer or similar ground equipment",
        note: "PERMIT PER11943 (exp. 30 April 2027). Copper hydroxide fungicide for custard apples. WHP: 1 day."
      }
    ]
  },

  // ── PER84176: Blueberries — Anthracnose & Rust ──
  {
    crop: "Blueberries — Anthracnose (PER84176)",
    cropList: ["Blueberries"],
    permitNumber: "PER84176",
    weeds: [
      {
        weed: "Anthracnose (Collectotrichum spp.)",
        pestList: ["Fungal Diseases", "Anthracnose"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "150",
        rateMax: "150",
        unit: "g/100L",
        stage: "Apply at first sign of disease; foliar application by boomspray or air-blast; 10-14 day intervals",
        note: "PERMIT PER84176 (exp. 30 September 2030). Copper fungicide on blueberries. WHP: 1 day."
      }
    ]
  },

  {
    crop: "Blueberries — Rust (PER84176)",
    cropList: ["Blueberries"],
    permitNumber: "PER84176",
    weeds: [
      {
        weed: "Blueberry Rust (Thekospora minima)",
        pestList: ["Fungal Diseases", "Rust"],
        states: ["NSW", "QLD", "WA", "SA", "NT", "TAS"],
        rate: "140",
        rateMax: "140",
        unit: "g/100L",
        stage: "Apply at first sign of disease; 10-14 day intervals; DO NOT apply less than 10 days after previous treatment",
        note: "PERMIT PER84176 (exp. 30 September 2030). Copper fungicide on blueberries. WHP: 1 day."
      }
    ]
  },

  // ── PER85013: Tea — Grey Mould, Anthracnose, Shoot Blight ──
  {
    crop: "Tea — Grey Mould (PER85013)",
    cropList: ["Tea"],
    permitNumber: "PER85013",
    weeds: [
      {
        weed: "Grey Mould (Botrytis cinerea)",
        pestList: ["Fungal Diseases", "Botrytis", "Grey Mould"],
        states: ["All"],
        rate: "135",
        rateMax: "190",
        unit: "g/100L",
        stage: "Apply no more than 7 foliar applications; minimum 7-day retreatment interval; boom spray application",
        note: "PERMIT PER85013 (exp. 31 July 2027). Copper fungicide on tea crops. WHP: 21 days."
      }
    ]
  },

  {
    crop: "Tea — Anthracnose (PER85013)",
    cropList: ["Tea"],
    permitNumber: "PER85013",
    weeds: [
      {
        weed: "Anthracnose (Colletotrichum gloeosporiodes)",
        pestList: ["Fungal Diseases", "Anthracnose"],
        states: ["All"],
        rate: "95",
        rateMax: "135",
        unit: "g/100L",
        stage: "Apply when conditions favour disease; minimum 7-day retreatment interval; spray volume 400-1,000 L/ha",
        note: "PERMIT PER85013 (exp. 31 July 2027). Copper fungicide on tea. WHP: 21 days."
      }
    ]
  },

  {
    crop: "Tea — Shoot Blight (PER85013)",
    cropList: ["Tea"],
    permitNumber: "PER85013",
    weeds: [
      {
        weed: "Shoot Blight (Pestalotiopsis spp.)",
        pestList: ["Fungal Diseases", "Shoot Blight"],
        states: ["All"],
        rate: "250",
        rateMax: "250",
        unit: "g/100L",
        stage: "Copper oxychloride formulation; apply when conditions favour disease; minimum 7-day retreatment interval",
        note: "PERMIT PER85013 (exp. 31 July 2027). Copper oxychloride fungicide on tea. WHP: 21 days."
      }
    ]
  },

  // ── PER94006: Tropical Fruit Crops — Diplodia & Pink Disease ──
  {
    crop: "Tropical Fruit Crops — Diplodia (PER94006)",
    cropList: ["Tropical Fruit Crops"],
    permitNumber: "PER94006",
    weeds: [
      {
        weed: "Diplodia (Diplodia phoenicum)",
        pestList: ["Fungal Diseases", "Diplodia"],
        states: ["NSW", "QLD", "NT", "WA"],
        rate: "135",
        rateMax: "190",
        unit: "g/100L",
        stage: "Apply early summer (December) to May; air-blast or knapsack equipment; DO NOT apply more than 6 applications per season",
        note: "PERMIT PER94006 (exp. 31 August 2029). Copper fungicide on tropical fruit crops (excl. mango, banana, avocado). WHP: 1 day."
      }
    ]
  },

  {
    crop: "Tropical Fruit Crops — Pink Disease (PER94006)",
    cropList: ["Tropical Fruit Crops"],
    permitNumber: "PER94006",
    weeds: [
      {
        weed: "Pink Disease (Erythricium salmonicolor)",
        pestList: ["Fungal Diseases", "Pink Disease"],
        states: ["NSW", "QLD", "NT", "WA"],
        rate: "125",
        rateMax: "175",
        unit: "g/100L",
        stage: "Apply early summer (December) to May; focus on infected limbs; DO NOT apply less than 28 days after initial treatment",
        note: "PERMIT PER94006 (exp. 31 August 2029). Copper fungicide on tropical fruit crops. WHP: 1 day."
      }
    ]
  }

    ,
    {
      crop: "Cucurbits",
      cropList: ["Cucurbits"],
      weeds: [
          { weed: "Angular leaf spot, Bacterial leaf spot", pestList: ["Angular Leaf Spot", "Bacterial Leaf Spot"], states: ["All"], rate: "150", unit: "g/100L", rateText: "150g/100L", notes: "WHP: 1 day. to be used as a preventitive spray. Do not apply to wet crops and in very hot conditions. Do not spray in solutions less then PH 6.5" }
      ]
    },
    {
      crop: "Capsicum",
      cropList: ["Capsicum"],
      weeds: [
          { weed: "Bacterial spot and Bacterial canker", pestList: ["Bacterial Spot", "Bacterial Canker"], states: ["All"], rate: "1.65", unit: "kg/ha", rateText: "1.65kg/ha", notes: "WHP: 1 day. to be used as a preventitive spray. Do not apply to wet crops and in very hot conditions. Do not spray in solutions less then PH 6.5" }
      ]
    },
    {
      crop: "Papaya",
      cropList: ["Papaya"],
      weeds: [
          { weed: "Papaya Fruit Rot", pestList: ["Papaya Fruit Rot"], states: ["All"], rate: "1.1", unit: "kg/100L", rateText: "1.1kg/100L", notes: "WHP: 1 day. Spray every 4 weeks from the end of flowering to harvest. During extended wet weather, spray every 14 days. Do not apply over 35 degrees celsius" }
      ]
    },
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      permitNumber: "PER13660",
      weeds: [
          { weed: "Parasitic algae, Phytophthora stem canker", pestList: ["Parasitic Algae", "Phytophthora Stem", "Canker"], states: ["All"], rate: "300", rateMax: "300", unit: "g/100", rateText: "300 g/100 L plus a suitable Wetting Agent", stage: "Apply as per permit directions", note: "WHP: 1 day. Spray on the trunks" },
          { weed: "pepper spot", pestList: ["Pepper Spot"], states: ["All"], rate: "150", rateMax: "150", unit: "g/100L", rateText: "150g/100L", stage: "Apply as per permit directions", note: "WHP: 1 day. Spray every 4 weeks from the end of flowering to harvest. During extended wet weather, spray every 14 days" }
      ]
    }
    ],
    "note": "A fine dry flowable fungicide for the control of various diseases. Protectant copper fungicide.",
    "labelPdf": "Source labels/Corteva_KocideBlueXtra_Label.pdf",
    "sdsPdf": "SDS Labels/CORTEVA_KOCIDE_BLUE_XTRA_FUNGICIDE.pdf",
    "signalHeading": "Caution",
    "apvma": "58989",
    "classification": {
        "type": "Fungicide",
        "target": ["Fungal Diseases", "Bacterial Diseases"],
        "timing": ["Preventative", "Pre-infection"]
    },
    "restraints": [
        "DO NOT apply when temperatures exceed 35°C.",
        "DO NOT apply to copper-shy crops or cultivars.",
        "DO NOT use in spray solutions with a pH of less than 6.5"
    ],
    "withholding": {
        "harvest": "Not required when used as directed",
        "grazing": "Refer to label"
    },
    "compatibility": {
        "compatible": [],
        "incompatible": [],
        "notes": ["Do not mix with products where copper is known to cause issues without checking compatibility."]
    },
    "surfactant": "Follow specific crop guidelines. Oil required for bananas and some other crops.",
    "sprayerCleanup": "Thoroughly rinse equipment with clean water."
};
