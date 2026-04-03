// ─────────────────────────────────────────────────────────────────────────────
// KELPIE A-ZINE 900 HERBICIDE — Label Data
// Herbicide | Granule
// Source: Kelpie_A-Zine_900_Herbicide_Label.pdf
// APVMA Approval No: 83069/107431
// Sinochem International Crop Care (Overseas) Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['kelpieazine900'] = {
  name:             "Kelpie A-Zine 900 Herbicide",
  company: "Zinetech",

  category:         "Herbicides",
  activeIngredient: "900 g/kg Atrazine",
  group:            "Group C Herbicide",
  modeOfAction:     "Photosystem II inhibitor (Triazine herbicide)",
  formulation:      "Granule (WG)",
  color:            "#4CAF50",
  apvma:            "83069",
  labelPdf:         "Source labels/Kelpie_A-Zine_900_Herbicide_Label.pdf",
  sdsPdf:         "SDS Labels/KELPIE-A-ZINE-900-HERBICIDE-SDS-v2.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Herbicide",
    target: ["Broadleaf weeds", "Grasses"],
    timing: ["Pre-emergent", "Post-emergent"]
  },

  crops: [
    {
      crop: "Canola — Triazine Tolerant (TT) and TT-RR varieties — Pre-emergence or post-sowing pre-emergence",
      cropList: ["Canola TT", "Triazine Tolerant Canola", "Canola TT-RR", "Roundup Ready Canola", "Canola"],
      weeds: [
        { weed: "Capeweed, Charlock, Clover, Corn Gromwell, Doublegee, Fumitories, Geraniums, Ivy-Leaf Speedwell, London Rocket, Mustards, Turnips, Paterson's Curse, Shepherd's Purse, Silver Grass (Vulpia). Suppression of: Annual Ryegrass, Barley Grass, Brome Grass, Wild Oats, Wild Radish", pestList: ["Capeweed","Charlock","Clover","Corn Gromwell","Doublegee","Fumitories","Geraniums","Ivy-Leaf Speedwell","London Rocket","Mustards","Turnips","Patersons Curse","Shepherds Purse","Silver Grass","Annual Ryegrass","Barley Grass","Brome Grass","Wild Oats","Wild Radish"], states: ["All"], rate: "1.1", rateMax: "2.2", unit: "kg/ha", stage: "Pre-emergence or post-sowing pre-emergence only", note: "Important: This use is subject to adherence to the INTEGRATED WEED MANAGEMENT STRATEGY FOR TT AND TT-RR CANOLA. See GENERAL INSTRUCTIONS: INTEGRATED WEED MANAGEMENT STRATEGY FOR TT AND TT-RR CANOLA. Can be applied up to a week before sowing or post-sowing pre-emergence (ideally incorporated by harrows). For best results, apply to bare moist soil, either immediately before seeding or as a pre-emergence treatment at or within 7 days of planting. Sufficient rainfall (20-30 mm) to wet the soil through the weed root zone is necessary within 2-3 weeks of application. Application should not be made to ridged or excessively cloddy soil. When applied before seeding, incorporate to a depth of 5 cm." }
      ]
    },
    {
      crop: "Canola — TT and TT-RR varieties — Post-emergence application",
      cropList: ["Canola TT","Canola TT-RR","Canola"],
      weeds: [
        { weed: "Annual Ryegrass (1-2 leaf stage only), Mustards, Wild Radish, Turnips", pestList: ["Annual Ryegrass","Mustards","Wild Radish","Turnips"], states: ["All"], rate: "0.5", rateMax: "1.1", unit: "kg/ha", stage: "Post-emergence (1-2 leaf stage)", note: "Important: This use is subject to adherence to the INTEGRATED WEED MANAGEMENT STRATEGY FOR TT AND TT-RR CANOLA. See GENERAL INSTRUCTIONS: INTEGRATED WEED MANAGEMENT STRATEGY FOR TT AND TT-RR CANOLA. Apply to moist soil when weeds are actively growing. The addition of 0.5-1% v/v of crop oil will enhance post emergence activity. Cold Water: Under cold water conditions (10°C or less), use 0.5-1% v/v crop oil. DO NOT apply more than one post-emergence application. Tank Mixes: KELPIE A-ZINE 900 HERBICIDE may be tank mixed with Roundup Ready Herbicide with Plantshield by Monsanto for post-emergence application in TT-RR canola up to the 6 leaf stage. DO NOT tank mix KELPIE A-ZINE 900 HERBICIDE with Roundup Ready Herbicide with Plantshield by Monsanto when spraying Triazine Tolerant (TT) canola only." }
      ]
    },
    {
      crop: "Sorghum, Broom Millet, Saccaline, Forage Sorghum — Dryland",
      cropList: ["Sorghum","Broom Millet","Saccaline","Forage Sorghum"],
      weeds: [
        { weed: "Amaranths, Annual Ground Cherry, Barnyard Grass, Blackberry Nightshade, Bladder Ketmia, Burrs, Caltrop, Common Thornapple, Crowsfoot Grass, Dwarf Marigold, Fat-Hen, Love Grass, Mintweed, Parthenium Weed, Pigeon Grass, Pigweed, Plains Grass, Potato Weed, Prickly Paddy Melon, Spring Grass, Summer Grass, Wireweed", pestList: ["Amaranths","Annual Ground Cherry","Barnyard Grass","Blackberry Nightshade","Bladder Ketmia","Burrs","Caltrop","Common Thornapple","Crowsfoot Grass","Dwarf Marigold","Fat-Hen","Love Grass","Mintweed","Parthenium Weed","Pigeon Grass","Pigweed","Plains Grass","Potato Weed","Prickly Paddy Melon","Spring Grass","Summer Grass","Wireweed"], states: ["All"], rate: "2.0", rateMax: "2.5", unit: "kg/ha", stage: "Pre-planting, pre-emergence or post-emergence", note: "Pre-planting or pre-emergence only: Use this technique where grasses are likely to be the major problem. Pre-plant or pre-emergence followed by a post-emergence application: Use this technique where long term weed control is required because of heavy rainfall or prolonged wet conditions following the initial application; or because dry weather follows sowing and spraying and weed and weed growth and grass growth occurs. Post-emergence only: Use the lower rate where only a broadleaf weed problem occurs and the higher rate where grasses are the major problem. Add 1000 g/L non-ionic surfactant." }
      ]
    },
    {
      crop: "Sorghum, Broom Millet, Saccaline, Forage Sorghum — Irrigated",
      cropList: ["Sorghum Irrigated","Sorghum","Broom Millet","Saccaline","Forage Sorghum"],
      weeds: [
        { weed: "Amaranths, Annual Ground Cherry, Barnyard Grass, Blackberry Nightshade, Bladder Ketmia, Burrs, Caltrop, Common Thornapple, Crowsfoot Grass, Dwarf Marigold, Fat-Hen, Love Grass, Mintweed, Parthenium Weed, Pigeon Grass, Pigweed, Plains Grass, Potato Weed, Prickly Paddy Melon, Spring Grass, Summer Grass, Wireweed", pestList: ["Amaranths","Annual Ground Cherry","Barnyard Grass","Blackberry Nightshade","Bladder Ketmia","Burrs","Caltrop","Common Thornapple","Crowsfoot Grass","Dwarf Marigold","Fat-Hen","Love Grass","Mintweed","Parthenium Weed","Pigeon Grass","Pigweed","Plains Grass","Potato Weed","Prickly Paddy Melon","Spring Grass","Summer Grass","Wireweed"], states: ["All"], rate: "1.7", rateMax: "1.6", unit: "kg/ha", stage: "Pre-plant or pre-emergence followed by post-emergence", note: "Pre-plant or pre-emergence followed by a post-emergence application (See GENERAL INSTRUCTIONS): Use the lower rate on medium textured soils and the higher rate where grasses are a major problem or on heavy soils." },
        { weed: "Black Bindweed (Climbing Buckwheat), Cobbler's Peg, Sesbania Pea, Wild Oats", pestList: ["Black Bindweed","Cobbler's Peg","Sesbania Pea","Wild Oats"], states: ["NSW","Vic","SA","WA"], rate: "2.5", rateMax: "3.3", unit: "kg/ha", stage: "Pre-plant or pre-emergence only", note: "Pre-plant or pre-emergence only (See GENERAL INSTRUCTIONS): Use the lower rate on medium textured soils and the higher rate where grasses are a major problem or on heavy soils. DO NOT apply as a pre-emergent application to light sandy soils. Add a 1000 g/L non-ionic surfactant to post-emergent applications. NOTE: Not recommended in the Murrumbidgee Irrigation Area (M.I.A.)." }
      ]
    },
    {
      crop: "Sorghum, Broom Millet, Saccaline, Forage Sorghum — Irrigated and dryland (Qld only)",
      cropList: ["Sorghum","Broom Millet","Saccaline","Forage Sorghum"],
      weeds: [
        { weed: "Black Pigweed, Mintweed", pestList: ["Black Pigweed","Mintweed"], states: ["Qld"], rate: "1.3", rateMax: "1.3", unit: "kg/ha", stage: "Pre-plant, pre-emergence or post-emergence", note: "Pre-plant, pre-emergence or post-emergence application: Apply when weeds are young (4-6 true leaves) and actively growing." }
      ]
    },
    {
      crop: "Sorghum — Parthenium Weed and Black Pigweed/Sesbania Pea",
      cropList: ["Sorghum"],
      weeds: [
        { weed: "Parthenium Weed", pestList: ["Parthenium Weed"], states: ["All"], rate: "3.3", rateMax: "3.3", unit: "kg/ha", stage: "Pre-emergence blanket spray", note: "Apply as a pre-emergence blanket spray. Add 150 mL of a non-ionic surfactant to each 100 L spray." },
        { weed: "Black Pigweed, Sesbania Pea", pestList: ["Black Pigweed","Sesbania Pea"], states: ["All"], rate: "1.1", rateMax: "1.1", unit: "kg/ha", stage: "Post-emergence", note: "Post-emergence. Apply with 400 mL 2,4-D amine (625 g/L)." }
      ]
    },
    {
      crop: "Maize and Sweet Corn — Irrigated and dryland",
      cropList: ["Maize", "Sweet Corn", "Corn"],
      weeds: [
        { weed: "Amaranths, Annual Ground Cherry, Barnyard Grass, Blackberry Nightshade, Bladder Ketmia, Burrs, Caltrop, Common Thornapple, Crowsfoot Grass, Dwarf Marigold, Fat-Hen, Lovegrass, Mintweed, Parthenium Weed, Pigeon Grass, Pigweed, Plains Grass, Potato Weed, Prickly Paddy Melon, Spring Grass, Summer Grass, Wireweed", pestList: ["Amaranths","Annual Ground Cherry","Barnyard Grass","Blackberry Nightshade","Bladder Ketmia","Burrs","Caltrop","Common Thornapple","Crowsfoot Grass","Dwarf Marigold","Fat-Hen","Lovegrass","Mintweed","Parthenium Weed","Pigeon Grass","Pigweed","Plains Grass","Potato Weed","Prickly Paddy Melon","Spring Grass","Summer Grass","Wireweed"], states: ["All"], rate: "2.5", rateMax: "3.3", unit: "kg/ha", stage: "Pre-plant, pre-emergence or post-emergence", note: "Pre-plant, pre-emergence or post-emergence application: Use the lower rate where broadleaf weeds are the major problem and the higher rate where grasses are the major problem or on heavy soils. Post-emergence application: Add a 1000 g/L non-ionic surfactant." },
        { weed: "Black Pigweed (Maize and Sorghum)", pestList: ["Black Pigweed"], states: ["Central Qld"], rate: "1.2", rateMax: "1.2", unit: "kg/ha", stage: "Pre-emergence or post-emergence", note: "Pre-emergence. Post-emergence: Use the lower rate for seedlings (2 true leaves). For plants up to 3 cm in diameter use higher rate. Add a non-ionic surfactant." },
        { weed: "Thornapple and other broadleaf weeds including: Annual Ground Cherry, Bladder Ketmia, Caltrop, Bellvine, Mintweed, Noogoora Burr, Wild Gooseberry, Pigweed, Black pigweed, Amaranthus spp., Sesbania Pea, Wandering Jew", pestList: ["Thornapple","Annual Ground Cherry","Bladder Ketmia","Caltrop","Bellvine","Mintweed","Noogoora Burr","Wild Gooseberry","Pigweed","Black Pigweed","Amaranthus","Sesbania Pea","Wandering Jew"], states: ["Qld","NSW"], rate: "0.83", rateMax: "1.1", unit: "kg/ha", stage: "Post-emergence", note: "Use the lower rate when weeds are small and actively growing. Use the higher rate for larger weeds or when plants are not growing actively. Spray when the crop has 4-6 fully expanded leaves and secondary roots have developed. DO NOT add surfactants or crop oil. If rotating to Winter Cereal crops, DO NOT apply this tank mixture within 6 months of the expected sowing date. For other crops or situations, observe plant back information on the respective product labels. Apply with 300-500 mL/ha picloram + 2,4-D." }
      ]
    },
    {
      crop: "Sugar Cane",
      cropList: ["Sugar Cane"],
      weeds: [
        { weed: "Giant Sensitive Plant", pestList: ["Giant Sensitive Plant"], states: ["Qld","WA"], rate: "2.2", rateMax: "3.3", unit: "kg/ha", stage: "When soil is moist", note: "Apply when soil is moist. Avoid spraying weeds under stress. Apply by ground rig only and obtain good cover of target weeds." },
        { weed: "Barnyard Grass, Blue Top, Borreria (Square Weed), Budda Pea, Cobbler's Pegs, Crowsfoot Grass, Flannel Weed, Paddy's Lucerne (Common sida), Pigweed, Sesbania, Sida Retusa, Spiny Spider Flower (Wild Rose), Stinking Passion Vine, Summer Grass, Sweet Briar, Thickhead, Vines", pestList: ["Barnyard Grass","Blue Top","Borreria","Budda Pea","Cobbler's Pegs","Crowsfoot Grass","Flannel Weed","Paddys Lucerne","Pigweed","Sesbania","Sida Retusa","Spiny Spider Flower","Stinking Passion Vine","Summer Grass","Sweet Briar","Thickhead","Vines"], states: ["Qld","WA","NSW"], rate: "2.2", rateMax: "3.3", unit: "kg/ha", stage: "Pre-emergent or post-emergent", note: "Use high rates towards the higher end of the range where heavy soil or high trash levels are present. Use higher rates for grasses. Approximate period of weed control: 2.2 kg - up to 4 weeks. 3.3 kg - up to 10 weeks. A pre-emergent application is preferred for grasses. Control of emerging broadleaf weeds: Where plants are large or conditions dry add 800 mL of 2,4-D amine (625 g/L) plus 1000 g/L non-ionic surfactant. Good coverage is essential. Use the higher rate when up to 14 weeks residual control of broadleaf weeds is required. If grasses are a problem this product should be applied prior to weed emergence. If emerged grasses are present add 250 g/L Paraquat herbicide at 1.2 to 1.7 L/ha." }
      ]
    },
    {
      crop: "Lucerne",
      cropList: ["Lucerne", "Alfalfa"],
      weeds: [
        { weed: "Mintweed", pestList: ["Mintweed"], states: ["All"], rate: "0.6", rateMax: "0.6", unit: "kg/ha", stage: "When first germination of Mintweed seedlings are 5-8 cm high", note: "Apply when the first germination of Mintweed seedlings are 5-8 cm high and actively growing. Using the low volume boom spray, apply 140-170 litres spray mixture per hectare. DO NOT TREAT LUCERNE STANDS UNDER ONE YEAR OLD." }
      ]
    },
    {
      crop: "Grass Seed Crops (Established Seed Crops of Sirocco, Phalaris, Demeter Fescue and Currie Cocksfoot)",
      cropList: ["Grass Seed Crops","Sirocco","Phalaris","Demeter Fescue","Currie Cocksfoot"],
      weeds: [
        { weed: "Brome Grass", pestList: ["Brome Grass"], states: ["All"], rate: "1.0", rateMax: "1.2", unit: "kg/ha", stage: "After Autumn break when Brome Grass is just emerging", note: "Apply after Autumn break when Brome Grass is just emerging. Apply by low volume boom spray." },
        { weed: "Billygoat Weed (Blue Top), Cobbler's Pegs, Crowsfoot Grass, Fleabane, Love Grass, Mexican Poppy, Setaria spp., Sida spp., Stinking Roger, Thickhead, Wild Hops, Wild Radish, Woolly Top, Rhodes Grass", pestList: ["Billygoat Weed","Cobbler's Pegs","Crowsfoot Grass","Fleabane","Love Grass","Mexican Poppy","Setaria","Sida","Stinking Roger","Thickhead","Wild Hops","Wild Radish","Woolly Top","Rhodes Grass"], states: ["Qld"], rate: "2.5", rateMax: "3.3", unit: "kg/ha", stage: "Pre-emergence or post-emergence (Seedling Signal Grass and Panicum maximum)", note: "Pre-emergence: Apply at or immediately after planting, preferably to a moist soil, and before crop and weeds germinate. Use the lower rate on Panicum maximum seed crops and the higher rate on Signal Grass when grasses are likely to be the major problem. Guinea Grass, Panics and Green Summer Grasses (Brachiaria spp.) are not controlled. Warning - Damage can occur to Panicum maximum when application is made under cool, moist conditions. NOTE: When used in Signal Grass and Panicum maximum, user accepts all responsibility should any damage occur." }
      ]
    },
    {
      crop: "Seedling Ryegrass Crops",
      cropList: ["Seedling Ryegrass"],
      weeds: [
        { weed: "Winter Grass, Toad Rush", pestList: ["Winter Grass","Toad Rush"], states: ["Vic"], rate: "0.48", rateMax: "0.55", unit: "kg/ha", stage: "At 2-3 leaves and at early tillering", note: "Use the lower rate at 2-3 leaves and the higher rate at early tillering." },
        { weed: "Winter Grass, Toad Rush, Broadleaf Weeds", pestList: ["Winter Grass","Toad Rush","Broadleaf Weeds"], states: ["Vic"], rate: "0.55", rateMax: "0.55", unit: "kg/ha", stage: "At the tillering stage", note: "Use at the tillering stage. Apply with 500 mL/ha MCPA (500 g/L) and 160 mL/ha Dicamba (500 g/L)." }
      ]
    },
    {
      crop: "Established Ryegrass Seed Crops",
      cropList: ["Established Ryegrass"],
      weeds: [
        { weed: "Winter Grass, Toad Rush, Loosestrife, Sorrel, Barley Grass, Docks, Soft Brome, Silver Grass", pestList: ["Winter Grass","Toad Rush","Loosestrife","Sorrel","Barley Grass","Docks","Soft Brome","Silver Grass"], states: ["All"], rate: "0.83", rateMax: "1.1", unit: "kg/ha", stage: "After good Autumn rains", note: "Apply after good Autumn rains have fallen and conditions are becoming cooler around late May to mid-June. Graze heavily prior to application. Note: Some crop damage may occur on sandy soils or if crop water stressed. DO NOT apply Nitrogen prior to spraying." }
      ]
    },
    {
      crop: "Fallow Area Maintenance — Prior to planting a Sorghum crop in a conservation tillage system",
      cropList: ["Fallow"],
      weeds: [
        { weed: "Amaranths, Annual Ground Cherry, Barnyard Grass, Black Bindweed (Climbing Buckwheat), Blackberry Nightshade, Bladder Ketmia, Burrs, Caltrop, Cobbler's Pegs, Common Thornapple, Crowsfoot Grass, Dwarf Marigold, Fat Hen, Lovegrass, Mintweed, Parthenium Weed, Pigeon Grass, Pigweed, Plains Grass, Potato Weed, Prickly Paddy Melon, Sesbania Pea, Spring Grass, Summer Grass, Wireweed", pestList: ["Amaranths","Annual Ground Cherry","Barnyard Grass","Black Bindweed","Blackberry Nightshade","Bladder Ketmia","Burrs","Caltrop","Cobbler's Pegs","Common Thornapple","Crowsfoot Grass","Dwarf Marigold","Fat Hen","Lovegrass","Mintweed","Parthenium Weed","Pigeon Grass","Pigweed","Plains Grass","Potato Weed","Prickly Paddy Melon","Sesbania Pea","Spring Grass","Summer Grass","Wireweed"], states: ["Qld","NSW"], rate: "2.0", rateMax: "3.3", unit: "kg/ha", stage: "Pre-plant", note: "Pre-plant: Apply to moist soil or when rain is imminent and prior to the germination of weeds and grasses, or as a tank mixture with a specific knockdown herbicide if weeds and grasses are present. Use the lower rate when short-term control of weeds and grasses is required or where a Wheat crop will follow Sorghum in the rotation. Use the higher rate when longer term control of weeds and grasses is required." }
      ]
    },
    {
      crop: "Fallow Area Maintenance — Prior to sowing Wheat, Peas, Lupins",
      cropList: ["Fallow"],
      weeds: [
        { weed: "Broadleaf Weeds and Grasses", pestList: ["Broadleaf Weeds","Grasses"], states: ["All"], rate: "0.65", rateMax: "0.87", unit: "kg/ha", stage: "Late July to mid September for May-June sowing", note: "Apply late July-mid September for May-June sowing. Use the higher rate for a 14 month fallow - apply in February/April before Autumn rains." }
      ]
    },
    {
      crop: "Roadside and Rights of Way — Parthenium Weed",
      cropList: ["Roadside","Rights of Way"],
      weeds: [
        { weed: "Parthenium Weed", pestList: ["Parthenium Weed"], states: ["Qld","NSW","NT"], rate: "3.3", rateMax: "3.3", unit: "kg/ha", stage: "Pre- and post-emergence", note: "Pre- and post-emergence: Apply to moist soil, following germinating rains and when further follow up rain is imminent. Where germination has occurred, ensure application is made to seedling plants." }
      ]
    },
    {
      crop: "Lupins — Weed Free Seedbed (WA only)",
      cropList: ["Lupins"],
      weeds: [
        { weed: "Capeweed, Turnip, Wild Radish, Doublegee, Clovers and Medics, Mustard, Wireweed. Suppression of: Annual Grass Weeds", pestList: ["Capeweed","Turnip","Wild Radish","Doublegee","Clovers","Medics","Mustard","Wireweed","Annual Grass Weeds"], states: ["WA"], rate: "0.28", rateMax: "0.56", unit: "kg/ha", stage: "Before or at seeding", note: "Apply to bare moist soil immediately before or at seeding. Application should not be made to ridged or excessively cloddy soil. Incorporation by the sowing operation should not exceed 5 cm. Sufficient rainfall (20-30 mm) to wet the soil through the weed root zone is necessary within 2-3 weeks of application. Results can be variable if seasonal conditions are dry prior to sowing and Lupins are sown into a dry or low moisture seedbed. Apply a maximum of 930 g/ha of the mixture on yellow sands. Apply 1.2 kg/ha on all other soil types. NOTE: Some early crop phytotoxicity may be observed particularly on yellow sands carrying native pear and pine vegetation. Caution: DO NOT use on white or grey sands. Apply with 280-560 g 900 g/kg Simazine." }
      ]
    },
    {
      crop: "Eucalyptus and Pinus radiata plantations",
      cropList: ["Eucalyptus","Pinus Radiata","Plantation Forestry"],
      weeds: [
        { weed: "Common Sowthistle, Mouse-eared Chickweed, Sand Brome, Silver Grass, Wild Oats, Yorkshire Fog Grass", pestList: ["Common Sowthistle","Mouse-eared Chickweed","Sand Brome","Silver Grass","Wild Oats","Yorkshire Fog Grass"], states: ["All"], rate: "5.0", rateMax: "8.8", unit: "kg/ha", stage: "Pre-planting or post-planting", note: "Pre-planting: Graze the area heavily and apply by boom spray or aircraft no more than two weeks before planting. Post-planting: Apply by boom spray either immediately after or within one month of planting. When applying by aircraft, the pines must be at least one month old. Application must be made before the spring flush commences. Use rates towards the lower end of the range where broadleaf weeds are the major problem and rates towards the higher end of the range where grasses are the major problem. Use up to 8.8 kg/ha on clay loams and heavy textured soils. For sandy soils and soils described as highly erodible, apply a maximum of 5 kg per hectare. DO NOT apply with a knapsack sprayer." },
        { weed: "Wild Oats, Silver Grass, Rye Grass, Yorkshire Fog Grass, Sand Brome, Mouse-eared Chickweed, Capeweed, Clovers, Sow Thistle Seedlings (Pinus radiata only)", pestList: ["Wild Oats","Silver Grass","Rye Grass","Yorkshire Fog Grass","Sand Brome","Mouse-eared Chickweed","Capeweed","Clovers","Sow Thistle Seedlings"], states: ["NSW","Vic","SA","WA","Tas"], rate: "1.6", rateMax: "2.2", unit: "kg/ha", stage: "Pre-planting or Post-planting (Pinus radiata)", note: "Pre-planting or Post-planting: Spray to pine seedlings. Use the higher rate where grasses are a major problem. Preferably apply as a strip, rather than a blanket application. Method of application - refer to METHOD OF APPLICATION TABLE. Apply with 5.6-8 L Amitrole." }
      ]
    }
  ],

  restraints: [
    "DO NOT use as a pre-emergent spray on light sandy soils",
    "DO NOT use on weeds over 4 cm tall",
    "DO NOT apply to waterlogged soil",
    "DO NOT apply if heavy rains or storms that are likely to cause surface run off are forecast within two days of application",
    "DO NOT irrigate to the point of run off for at least two days after application",
    "DO NOT use a pre-emergence application in Sorghum, Broom Millet or Saccaline during the wet season in the northern irrigation areas of Western Australia",
    "DO NOT use or apply this product post-emergence on raised beds or where furrows have been created in the soil for the purposes of holding or channelling water",
    "DO NOT apply this product to any drainage line. Drainage lines show evidence of the action of periodically flowing water (for example gravel, pebble, rock or sand bed, scour hole or nick point) and/or incised channel at least 30 cm deep",
    "The maximum rate of KELPIE A-ZINE 900 HERBICIDE application in all crops except plantation forestry is limited to an amount of product equivalent to 3 kg a.i. Atrazine/ha per year"
  ],

  compatibility: {
    compatible:   ["Roundup Ready Herbicide with Plantshield (for TT-RR canola)", "2,4-D amine", "Paraquat", "Simazine", "Amitrole"],
    incompatible: [],
    notes:        ["DO NOT tank mix KELPIE A-ZINE 900 HERBICIDE with Roundup Ready Herbicide with Plantshield by Monsanto when spraying Triazine Tolerant (TT) canola only", "Always consult label before tank mixing"]
  },

  withholding: {
    harvest: "Not required when used as directed.",
    grazing: "Canola - Pre-emergence application: DO NOT GRAZE OR CUT FOR STOCK FOOD FOR 15 WEEKS AFTER APPLICATION. Canola - Post-emergence application: DO NOT GRAZE OR CUT FOR STOCK FOOD FOR 6 WEEKS AFTER APPLICATION. Other Crops (except Canola): DO NOT APPLY TO AREAS THAT WILL OR MAY BE GRAZED OR CUT FOR STOCK FOOD WITHIN 28 DAYS AFTER APPLICATION."
  },

  surfactant:     "Non-ionic surfactant 1000 g/L recommended for post-emergent applications; crop oil 0.5-1% v/v for cold water conditions",
  sprayerCleanup: "Clean all equipment after use by washing thoroughly with water or with a high quality tank and boom cleaner such as ALL CLEAR DS."
};
