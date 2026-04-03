// ─────────────────────────────────────────────────────────────────────────────
// Bugmaster Flowable Insecticide — Label Data
// Insecticide Liquid Concentrate | Insecticide
// Source: Adama_Bugmaster_Flowable_Insecticide_Label.pdf
// APVMA Approval No: 40146/126301
// AgNova Technologies Pty Ltd (Distributed by)
// Tessenderlo Kerley Inc. (Manufactured for)
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['adamabugmaster'] = {
  name:             "Bugmaster Flowable Insecticide",
  company: "Adama",

  category:         "Insecticides",
  activeIngredient: "500 g/L Carbaryl (an anti-cholinesterase compound)",
  group:            "Group 1A Insecticide",
  modeOfAction:     "Acetylcholinesterase inhibitor (carbamate)",
  formulation:      "Liquid Concentrate (Flowable)",
  color:            "#7c3aed",
  apvma:            "40146/126301",
  labelPdf:         "Source labels/Adama_Bugmaster_Flowable_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/BUGMASTER_FLOWABLE_INSECTICIDE.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Insecticide",
    target: ["Grasshoppers", "Codling moth", "Light-brown apple moth", "Caterpillars", "Borers", "Scale insects", "Various insects"],
    timing: ["Growing season", "During pest activity", "As directed"]
  },

  crops: [
    {
      crop: "Avocados",
      cropList: ["Avocados"],
      weeds: [
        { weed: "Red-shouldered leaf beetle, wingless grasshopper", pestList: ["Red-Shouldered Leaf Beetle", "Wingless Grasshopper"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Apply when infestation first observed and repeat as swarms re-infest. DO NOT make more than 4 applications per season." }
      ]
    },
    {
      crop: "Citrus (oranges and lemons only)",
      cropList: ["Citrus","Oranges","Lemons"],
      weeds: [
        { weed: "Light-brown apple moth, yellow peach moth, fruit piercing moth, orange fruit borer, citrus leaf-eating caterpillar, Fuller's rose weevil, wingless grasshopper", pestList: ["Light-Brown Apple Moth", "Yellow Peach Moth", "Fruit Piercing Moth", "Orange Fruit Borer", "Citrus Leaf-Eating Caterpillar", "Fuller's Rose Weevil", "Wingless Grasshopper"], states: ["All"], rate: "160", rateMax: "200", unit: "mL/100L", stage: "Growing season", note: "Apply at first sign of pest activity, repeat at 2-week intervals. Fuller's rose weevil: spray lower parts of tree and ground beneath." },
        { weed: "Spined citrus bug, bronze orange bug", pestList: ["Spined Citrus Bug", "Bronze Orange Bug"], states: ["All"], rate: "100", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Spray trees thoroughly to dripping point late November to early December, second application late January to early February." },
        { weed: "Pink wax scale, white wax scale", pestList: ["Pink Wax Scale", "White Wax Scale"], states: ["All"], rate: "140", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Mix 140 mL + 1.0 L summer spray oil per 100 L water. Add oil to water before product. Concentrate spraying not appropriate for this use." }
      ]
    },
    {
      crop: "Cocoa",
      cropList: ["Cocoa"],
      weeds: [
        { weed: "Swarming leaf beetle", pestList: ["Swarming Leaf Beetle"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Apply as pest reaches economic threshold. Ensure thorough coverage of whole plant. DO NOT apply more than 3 sprays per season." }
      ]
    },
    {
      crop: "Coconut (non-flowering / non-fruiting trees only)",
      cropList: ["Coconut"],
      weeds: [
        { weed: "Palm leaf beetle", pestList: ["Palm Leaf Beetle"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Also can be applied at 2.2 L/ha. Apply at first sign of pest activity and repeat as necessary." }
      ]
    },
    {
      crop: "Feijoa, Guavas (non-flowering / non-fruiting trees only)",
      cropList: ["Feijoa","Guavas"],
      weeds: [
        { weed: "Orange fruit borer, wingless grasshopper", pestList: ["Orange Fruit Borer", "Wingless Grasshopper"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Spray trees thoroughly to dripping point late November to early December, second application late January to early February." }
      ]
    },
    {
      crop: "Grapes (butt treatments only)",
      cropList: ["Grapes"],
      weeds: [
        { weed: "Cutworms", pestList: ["Cutworms"], states: ["All"], rate: "160", rateMax: "200", unit: "mL/100L", stage: "When attack first noticed", note: "Spray around base of plants. Use higher rate where high insect pressure occurs. Butt treatment only — WHP not required." }
      ]
    },
    {
      crop: "Hazelnuts",
      cropList: ["Hazelnuts"],
      weeds: [
        { weed: "Fruit tree borer", pestList: ["Fruit Tree Borer"], states: ["All"], rate: "290", rateMax: "", unit: "mL/100L", stage: "As required", note: "Apply to areas of trunks and limbs showing borer damage. Saturate protective webbing and surrounding bark. Allow spray to enter larvae tunnel. Apply by coarse spray twice at 21-day intervals. Concentrate spraying not appropriate." }
      ]
    },
    {
      crop: "Jaboticaba, Jackfruit (non-flowering / non-fruiting trees only)",
      cropList: ["Jaboticaba","Jackfruit"],
      weeds: [
        { weed: "Swarming leaf beetle, wingless grasshopper", pestList: ["Swarming Leaf Beetle", "Wingless Grasshopper"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Several applications may be needed. DO NOT apply after commencement of flowering." }
      ]
    },
    {
      crop: "Longans, Litchis (non-flowering / non-fruiting trees only)",
      cropList: ["Longans","Litchis"],
      weeds: [
        { weed: "Castor oil looper, leaf eating loopers, macadamia nutborer, red-shouldered leaf beetle, swarming leaf beetle, yellow peach moth, wingless grasshopper", pestList: ["Castor Oil Looper", "Leaf Eating Loopers", "Macadamia Nutborer", "Red-Shouldered Leaf Beetle", "Swarming Leaf Beetle", "Yellow Peach Moth", "Wingless Grasshopper"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Apply at first sign of pest activity and repeat as necessary. Thorough coverage of foliage required." }
      ]
    },
    {
      crop: "Macadamias",
      cropList: ["Macadamias"],
      weeds: [
        { weed: "Macadamia nutborer, macadamia twig-girdler, red-shouldered leaf beetle, cornelian (butterfly), macadamia cup moth, yellow peach moth, wingless grasshopper", pestList: ["Macadamia Nutborer", "Macadamia Twig-Girdler", "Red-Shouldered Leaf Beetle", "Cornelian (Butterfly)", "Macadamia Cup Moth", "Yellow Peach Moth", "Wingless Grasshopper"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Apply as a preventative spray after moths have been flighting. WHP not required." }
      ]
    },
    {
      crop: "Mangoes",
      cropList: ["Mangoes"],
      weeds: [
        { weed: "Fig leafhoppers, wingless grasshopper, flattid planthoppers, pink wax scale, common mango scale", pestList: ["Fig Leafhoppers", "Wingless Grasshopper", "Flattid Planthoppers", "Pink Wax Scale", "Common Mango Scale"], states: ["All"], rate: "140", rateMax: "200", unit: "mL/100L", stage: "October–December", note: "Fig leafhoppers: apply when large populations appear on leaf stalks (Oct–Nov). Scale: apply 140 mL/100L in December. DO NOT make more than 3 applications per season." }
      ]
    },
    {
      crop: "Pecans",
      cropList: ["Pecans"],
      weeds: [
        { weed: "Orange fruit borer, yellow peach moth", pestList: ["Orange Fruit Borer", "Yellow Peach Moth"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Nut development", note: "Apply to mature trees carrying nuts. Direct spray to clusters of nuts when pests build up. WHP not required." }
      ]
    },
    {
      crop: "Pome Fruit — Apples, Pears",
      cropList: ["Pome Fruit","Apples","Pears"],
      weeds: [
        { weed: "Early fruit caterpillars (heliothis), codling moth, light-brown apple moth, pearleaf blister mite, wingless grasshopper", pestList: ["Early Fruit Caterpillars (Heliothis)", "Codling Moth", "Light-Brown Apple Moth", "Pearleaf Blister Mite", "Wingless Grasshopper"], states: ["All"], rate: "160", rateMax: "200", unit: "mL/100L", stage: "Growing season", note: "Apply at first sign of pest activity. Repeat spray at 21-day intervals during season. Use higher rate under high insect pressure. DO NOT apply within 30 days after full bloom if reduction in fruit set is not desired." },
        { weed: "Pear and cherry slug", pestList: ["Pear and Cherry Slug"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "As pest populations indicate", note: "Apply as pest populations indicate." }
      ]
    },
    {
      crop: "Rambutans (non-flowering / non-fruiting trees only)",
      cropList: ["Rambutans"],
      weeds: [
        { weed: "Castor oil looper, red-shouldered leaf beetle, swarming leaf beetle, wingless grasshopper", pestList: ["Castor Oil Looper", "Red-Shouldered Leaf Beetle", "Swarming Leaf Beetle", "Wingless Grasshopper"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Apply at first sign of pests and repeat as required. WHP not required." }
      ]
    },
    {
      crop: "Raspberries",
      cropList: ["Raspberries"],
      weeds: [
        { weed: "Grasshoppers, heliothis, mealybugs, Rutherglen bug, weevils, armyworms, light-brown apple moth, raspberry fruit caterpillar, wingless grasshopper", pestList: ["Grasshoppers", "Heliothis", "Mealybugs", "Rutherglen Bug", "Weevils", "Armyworms", "Light-Brown Apple Moth", "Raspberry Fruit Caterpillar", "Wingless Grasshopper"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Apply at first sign of pest activity. Re-entry period 8 days after treatment." }
      ]
    },
    {
      crop: "Stone Fruit — Apricots, Nectarines, Peaches, Plums, Prunes (NOT cherries)",
      cropList: ["Stone Fruit","Apricots","Nectarines","Peaches","Plums","Prunes"],
      weeds: [
        { weed: "Green treehopper, light-brown apple moth, oriental fruit moth, pear and cherry slug, red-shouldered leaf beetle, orange fruit borer, heliothis (budworms)", pestList: ["Green Treehopper", "Light-Brown Apple Moth", "Oriental Fruit Moth", "Pear and Cherry Slug", "Red-Shouldered Leaf Beetle", "Orange Fruit Borer", "Heliothis (Budworms)"], states: ["All"], rate: "160", rateMax: "200", unit: "mL/100L", stage: "Growing season", note: "Apply at first sign of pest activity, repeat at 2-week intervals. Spot spraying may control red-shouldered leaf beetle. DO NOT use on cherries." },
        { weed: "Wingless grasshopper", pestList: ["Wingless Grasshopper"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "As required", note: "Spray infested area thoroughly as required." },
        { weed: "Fruit tree borer", pestList: ["Fruit Tree Borer"], states: ["All"], rate: "290", rateMax: "", unit: "mL/100L", stage: "Winter", note: "Apply to areas of trunks and limbs showing borer damage. Saturate protective webbing and surrounding bark. Apply by coarse spray twice at 21-day intervals during winter. Concentrate spraying not appropriate." },
        { weed: "European earwig", pestList: ["European Earwig"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "When pests present", note: "Apply when pests are present and repeat as necessary." }
      ]
    },
    {
      crop: "Beetroot",
      cropList: ["Beetroot"],
      weeds: [
        { weed: "Vegetable weevil", pestList: ["Vegetable Weevil"], states: ["All"], rate: "300", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Apply at first sign of pest activity and repeat as necessary." },
        { weed: "Wingless grasshopper, green vegetable bug, heliothis (budworms), leaf eating ladybirds, cutworms, European earwig, potato moth, Rutherglen bug, armyworms", pestList: ["Wingless Grasshopper", "Green Vegetable Bug", "Heliothis (Budworms)", "Leaf Eating Ladybirds", "Cutworms", "European Earwig", "Potato Moth", "Rutherglen Bug", "Armyworms"], states: ["All"], rate: "160", rateMax: "200", unit: "mL/100L", stage: "Growing season", note: "Apply at first sign of pest activity and repeat as necessary. Use higher rate where high insect pressure occurs." }
      ]
    },
    {
      crop: "Cucurbits — Melons and other cucurbits (prior to flowering only)",
      cropList: ["Cucurbits","Melons And Other Cucurbits"],
      weeds: [
        { weed: "Heliothis (budworms), pumpkin beetle, 28-spotted ladybird, cucurbit stemborer, wingless grasshopper, green vegetable bug, leaf eating ladybirds, cutworms, European earwig, potato moth, Rutherglen bug, armyworms", pestList: ["Heliothis (Budworms)", "Pumpkin Beetle", "28-Spotted Ladybird", "Cucurbit Stemborer", "Wingless Grasshopper", "Green Vegetable Bug", "Leaf Eating Ladybirds", "Cutworms", "European Earwig", "Potato Moth", "Rutherglen Bug", "Armyworms"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Prior to flowering only", note: "Only apply prior to flowering. WHP not required when used as directed." }
      ]
    },
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        { weed: "Potato moth, wingless grasshopper, green vegetable bug, heliothis (budworms), leaf eating ladybirds, cutworms, European earwig, Rutherglen bug, armyworms", pestList: ["Potato Moth", "Wingless Grasshopper", "Green Vegetable Bug", "Heliothis (Budworms)", "Leaf Eating Ladybirds", "Cutworms", "European Earwig", "Rutherglen Bug", "Armyworms"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Also can be applied at 2.2 L/ha. Apply at first sign of pest activity. One or two later sprays at 3–4 week intervals may be required." }
      ]
    },
    {
      crop: "Sweet Potato",
      cropList: ["Sweet Potato"],
      weeds: [
        { weed: "Sweet potato weevil", pestList: ["Sweet Potato Weevil"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Apply at first sign of pest activity and repeat as necessary." }
      ]
    },
    {
      crop: "Turnips / Swede",
      cropList: ["Turnips / Swede"],
      weeds: [
        { weed: "Vegetable weevil, wingless grasshopper, cabbage white butterfly, green vegetable bug, heliothis (budworms), pumpkin beetle, leaf eating ladybirds, cutworms, European earwig, potato moth, Rutherglen bug, armyworms, cabbage moth", pestList: ["Vegetable Weevil", "Wingless Grasshopper", "Cabbage White Butterfly", "Green Vegetable Bug", "Heliothis (Budworms)", "Pumpkin Beetle", "Leaf Eating Ladybirds", "Cutworms", "European Earwig", "Potato Moth", "Rutherglen Bug", "Armyworms", "Cabbage Moth"], states: ["All"], rate: "300", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Apply at first sign of pest activity and repeat as necessary." }
      ]
    },
    {
      crop: "Strawberry (runner production only)",
      cropList: ["Strawberry"],
      weeds: [
        { weed: "Grasshoppers", pestList: ["Grasshoppers"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Apply at first sign of pest activity and repeat as necessary. WHP not required." }
      ]
    },
    {
      crop: "Cereals — Wheat, Barley, Sorghum, Maize",
      cropList: ["Cereals","Wheat","Barley","Sorghum","Maize"],
      weeds: [
        { weed: "Armyworms, cutworms, heliothis (budworms), red-shouldered leaf beetle, Rutherglen bug, wingless grasshopper", pestList: ["Armyworms", "Cutworms", "Heliothis (Budworms)", "Red-Shouldered Leaf Beetle", "Rutherglen Bug", "Wingless Grasshopper"], states: ["All"], rate: "160", rateMax: "200", unit: "mL/100L", stage: "Growing season", note: "Also 1.8–2.2 L/ha. Apply when pest appears and repeat as necessary. Use higher rate where high insect pressure occurs." },
        { weed: "Australian plague locust, migratory locust, yellow-winged locust", pestList: ["Australian Plague Locust", "Migratory Locust", "Yellow-Winged Locust"], states: ["All"], rate: "1200", rateMax: "1400", unit: "mL/ha", stage: "When locusts present", note: "Apply 1.2–1.4 L/ha when pest appears. Use higher rate on adults." }
      ]
    },
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        { weed: "Rough bollworm, black sunflower scarab", pestList: ["Rough Bollworm", "Black Sunflower Scarab"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Also 2.2 L/ha. Apply when pest appears, repeat at 7–14 day intervals. DO NOT use after 25% of bolls have opened. DO NOT feed cotton fodder, stubble or trash to livestock." }
      ]
    },
    {
      crop: "Lucerne",
      cropList: ["Lucerne"],
      weeds: [
        { weed: "Lucerne leafroller, sitona weevil", pestList: ["Lucerne Leafroller", "Sitona Weevil"], states: ["All"], rate: "1800", rateMax: "", unit: "mL/ha", stage: "Growing season", note: "1.8 L/ha. Apply at first sign of pest activity and repeat as necessary. Use sufficient water for adequate coverage." },
        { weed: "Heliothis (budworms), leafhoppers (jassids)", pestList: ["Heliothis (Budworms)", "Leafhoppers (Jassids)"], states: ["All"], rate: "2200", rateMax: "", unit: "mL/ha", stage: "Growing season", note: "2.2 L/ha. Apply when pest appears and repeat as necessary." },
        { weed: "Lucerne flea", pestList: ["Lucerne Flea"], states: ["All"], rate: "500", rateMax: "", unit: "mL/ha", stage: "Growing season", note: "Apply at first sign of pest activity." }
      ]
    },
    {
      crop: "Pastures and Pasture Seed Crops",
      cropList: ["Pastures And Pasture Seed Crops"],
      weeds: [
        { weed: "Wingless grasshopper", pestList: ["Wingless Grasshopper"], states: ["All"], rate: "160", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Spray infested areas thoroughly as required." },
        { weed: "Grass caterpillar", pestList: ["Grass Caterpillar"], states: ["All"], rate: "1100", rateMax: "", unit: "mL/ha", stage: "Growing season", note: "1.1 L/ha. Apply when pest appears and repeat when necessary." },
        { weed: "Pasture leafhopper", pestList: ["Pasture Leafhopper"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "Growing season", note: "Also 1.6 L/ha. DO NOT use excessively in areas where grass is germinating." },
        { weed: "Migratory locust, yellow-winged locust, Australian plague locust", pestList: ["Migratory Locust", "Yellow-Winged Locust", "Australian Plague Locust"], states: ["All"], rate: "1200", rateMax: "1400", unit: "mL/ha", stage: "When locusts present", note: "1.2–1.4 L/ha. Use higher rate on adult locusts or under high insect pressure." },
        { weed: "Cutworms, sitona weevil, pasture cockchafer, armyworms, heliothis (budworms)", pestList: ["Cutworms", "Sitona Weevil", "Pasture Cockchafer", "Armyworms", "Heliothis (Budworms)"], states: ["All"], rate: "2200", rateMax: "", unit: "mL/ha", stage: "Growing season", note: "2.2 L/ha. Pasture cockchafer: apply about 4 weeks after opening rains." },
        { weed: "Lucerne flea", pestList: ["Lucerne Flea"], states: ["All"], rate: "500", rateMax: "", unit: "mL/ha", stage: "Autumn", note: "Apply 3–5 weeks after opening autumn rains and repeat as necessary." }
      ]
    },
    {
      crop: "Rice",
      cropList: ["Rice"],
      weeds: [
        { weed: "Brown planthopper", pestList: ["Brown Planthopper"], states: ["All"], rate: "2200", rateMax: "", unit: "mL/ha", stage: "Growing season", note: "2.2 L/ha. Apply as pest populations indicate. Under heavy pressure, re-treatment after 14 days may be necessary. Phytotoxicity may occur if applied within 15 days before or after use of propanil." }
      ]
    },
    {
      crop: "Ornamentals",
      cropList: ["Ornamentals"],
      weeds: [
        { weed: "Beetles, caterpillars, chewing insects, cabbage moth, cabbage white butterfly, cutworms, European earwig, green vegetable bug, heliothis (budworms), leaf eating ladybirds, leafroller moths, loopers, potato moth, pumpkin beetle, Rutherglen bug, sucking insects, tobacco leaf miner", pestList: ["Beetles", "Caterpillars", "Chewing Insects", "Cabbage Moth", "Cabbage White Butterfly", "Cutworms", "European Earwig", "Green Vegetable Bug", "Heliothis (Budworms)", "Leaf Eating Ladybirds", "Leafroller Moths", "Loopers", "Potato Moth", "Pumpkin Beetle", "Rutherglen Bug", "Sucking Insects", "Tobacco Leaf Miner"], states: ["All"], rate: "200", rateMax: "", unit: "mL/100L", stage: "When pests appear", note: "Also 2.2 L/ha. May be used with predatory mites (Phytoseiulus persimilis). Test on small area before widespread use due to wide range of ornamentals." },
        { weed: "Wingless grasshopper", pestList: ["Wingless Grasshopper"], states: ["All"], rate: "175", rateMax: "", unit: "mL/100L", stage: "When pests present", note: "Spray infested areas thoroughly. Test on small area before widespread use." },
        { weed: "White wax scale (on ornamentals)", pestList: ["White Wax Scale"], states: ["All"], rate: "150", rateMax: "", unit: "mL/100L", stage: "November–February", note: "150 mL + 1.0 L summer spray oil per 100 L water. Apply late November to early December, additional application late January to early February if required." }
      ]
    },
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      weeds: [
          { weed: "Castor oil looper, leaf eating loopers, macadamia nutborer, red-shouldered leaf beetle, swarming leaf beetle, yellow peach moth, monolepta beetle, rhyparida beetle, leafroller moths, wingless grasshopper", pestList: ["Castor Oil Looper", "Leaf Eating Loopers", "Macadamia Nutborer", "Red-shouldered Leaf Beetle", "Swarming Leaf Beetle", "Yellow Peach Moth", "Monolepta Beetle", "Rhyparida Beetle", "Leafroller Moths", "Wingless Grasshopper"], states: ["All"], rate: "200", unit: "mL/100L", rateText: "200ml/100L", notes: "do not spray over flowers or fruit" }
      ]
    }
    
  ],

  restraints: [
    "DO NOT make more than 4 applications per season to avocados",
    "DO NOT make more than 3 applications per season to mangoes or cocoa",
    "DO NOT apply by air unless otherwise specified on label",
    "DO NOT allow spray to drift off-target onto streams, rivers, waterways, wetlands or neighbouring properties",
    "DO NOT apply to flowering crops during period 7 days prior to flowering to 30 days post flowering (risk of fruit thinning) unless fruit thinning is desired",
    "DO NOT apply to cotton after 25% of bolls have opened",
    "DO NOT feed cotton fodder, stubble or trash to livestock",
    "DO NOT apply to Kenaf or Rosella crops that will be used for human consumption",
    "DO NOT use on cherries (stone fruit)",
    "DO NOT apply to apples and pears within 30 days AFTER full bloom if reduction in fruit set is not desired",
    "DO NOT apply more than twice in any one year to Indian Sandalwood plantations",
    "Dangerous to bees — DO NOT spray any plants in flower while bees are foraging",
    "DO NOT contaminate streams, rivers or waterways with chemical or used containers"
  ],

  compatibility: {
    compatible:   ["Copper oxychloride", "Dimethoate", "Kelthane", "Rovral Liquid", "Spin Flo", "Summer spray oil", "Wettable sulphur"],
    incompatible: ["Lime Sulphur", "Bordeaux mixture", "Alkaline materials"],
    notes:        ["As formulations of other manufacturers' products are beyond the control of Tessenderlo Kerley Inc., all mixtures should be tested prior to mixing commercial quantities"]
  },

  withholding: {
    harvest: "Not required: Coconut, Cucurbits, Feijoa, Grapes, Guavas, Jaboticaba, Jackfruit, Litchis, Longans, Loquats, Macadamia nuts, Pecan nuts, Rambutans, Strawberries | 3 days: Avocados, Beetroot, Cotton, Lemons, Oranges, Potato, Swede, Sweet Potato, Turnips | 7 days: Mangoes, Raspberries | 14 days: Cereal Grains, Hazelnuts, Cocoa | 5 weeks: Stone Fruit | 11 weeks: Pome Fruit (Apples, Pears)",
    grazing: "Cereal Grains: DO NOT GRAZE OR CUT FOR STOCK FOOD FOR 14 DAYS AFTER APPLICATION | Field crops, Pasture and Lucerne: DO NOT GRAZE OR CUT FOR STOCK FOOD FOR 7 DAYS AFTER APPLICATION"
  },

  surfactant:     "Summer spray oil at 1.0 L/100 L water recommended for scale and wax scale control when specified",
  sprayerCleanup: "After use, empty the tank and rinse thoroughly with clean water. Drain and repeat the rinsing procedure twice. Dispose of rinsate in accordance with local regulations."
};
