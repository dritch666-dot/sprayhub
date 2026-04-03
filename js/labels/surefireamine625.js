// ─────────────────────────────────────────────────────────────────────────────
// SUREFIRE AMINE 625 SELECTIVE HERBICIDE — Label Data
// Herbicide | Amine Liquid
// Source: PCT_Holdings_Surefire_Amine_625_Selective_Herbicide_Label.pdf
// APVMA Approval No: 82835/128812
// PCT Holdings Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['surefireamine625'] = {
  name:             "Surefire Amine 625 Selective Herbicide",
  company: "Surefire",

  category:         "Herbicides",
  activeIngredient: "625 g/L 2,4-D (as dimethylamine and diethanolamine salts)",
  group:            "Group I Herbicide",
  modeOfAction:     "Disruptors of plant cell growth; post-emergent selective herbicide for control of broadleaf weeds",
  formulation:      "Amine Liquid",
  color:            "#1e3a5f",
  apvma:            "82835",
  labelPdf:         "Source labels/Pct_Holdings_Surefire_Amine_625_Selective_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/SUREFIRE_AMINE_625_HERBICIDE.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Herbicide",
    target: ["Broadleaf weeds"],
    timing: ["Post-emergent"]
  },

  crops: [
    {
      crop: "Wheat",
      cropList: ["Wheat"],
      weeds: [
        { weed: "Refer Weed Table", pestList: ["Refer Weed Table"], states: ["All"], rate: "320", rateMax: "1700", unit: "mL/ha", rateText: "320 mL-1.7 L", notes: "Apply after the first node can be felt at the base of a tiller and before swelling of the head can be felt in a tiller (NSW, SA only) Apply from tillering to boot stage (Vic only) Apply from mid tillering to before boot stage (Qld only). Apply at 5 leaf to fully tillered (Tas only)" }
      ]
    },
    {
      crop: "Cereals: Wheat, Oats, Barley",
      cropList: ["Cereals: Wheat", "Oats", "Barley"],
      weeds: [
        { weed: "Cape Tulip", pestList: ["Cape Tulip"], states: ["All"], rate: "640", rateMax: "1300", unit: "mL/ha", rateText: "640 mL-1.3L", notes: "Apply from the 5 leaf stage up to joining stage (Zadoks 15-33). Apply after the 6 leaf stage (Z.16) for Cranbrook, Jacup, Aroona and Spear Wheat and Mortlock Oats to avoid possible damage. DO NOT spray if lucerne is present. WEED STAGE: 10-15 cm. Docks should be sprayed before 5 leaf stage. Cape Tulip - low rate for cormils only." },
        { weed: "Dock, Flatweed, Saffron Thistle", pestList: ["Dock", "Flatweed", "Saffron Thistle"], states: ["All"], rate: "1100", rateMax: "1100", unit: "mL/ha", rateText: "1.1 L" },
        { weed: "Indian Hedge Mustard, London Rocket, Lupin, Matricans, Rapistrum, Wild Radish", pestList: ["Indian Hedge Mustard", "London Rocket", "Lupin", "Matricans", "Rapistrum", "Wild Radish"], states: ["All"], rate: "800", rateMax: "800", unit: "mL/ha", rateText: "800 mL" },
        { weed: "Wild Turnip", pestList: ["Wild Turnip"], states: ["All"], rate: "640", rateMax: "640", unit: "mL/ha", rateText: "640 mL" },
        { weed: "Capeweed, Doublegee, Erodium, London Rocket, Lupin, Mustard, Rapistrum, Wild Radish, Wild Turnip", pestList: ["Capeweed", "Doublegee", "Erodium", "London Rocket", "Lupin", "Mustard", "Rapistrum", "Wild Radish", "Wild Turnip"], states: ["All"], rate: "200", rateMax: "200", unit: "mL/ha", notes: "Apply when crop has 4-5 leaves and most weeds have germinated and are in 2-5 leaf stage. Crop and weeds should be dry at time of application. Some temporary yellowing of crop may occur after application. Undersown sub-clovers may be slightly retarded. DO NOT apply to undersown medics." }
      ]
    },
    {
      crop: "Wheat, Barley",
      cropList: ["Wheat", "Barley"],
      weeds: [
        { weed: "Wild Radish", pestList: ["Wild Radish"], states: ["All"], rate: "80", rateMax: "80", unit: "mL/ha", notes: "Spray 2-6 weeks after sowing and not later. DO NOT use on crops undersown with lucerne." }
      ]
    },
    {
      crop: "Fallow",
      cropList: ["Fallow"],
      weeds: [
        { weed: "Control of Lucerne", pestList: ["Control Of Lucerne"], states: ["All"], rate: "2400", rateMax: "2400", unit: "mL/ha", rateText: "2.4 L/ha", notes: "•Spray in spring when lucerne is actively growing using a minimum spray volume of 50 L/ha. •Heavily graze lucerne during winter and early spring to reduce crown and root reserves. •Allow lucerne to regrow to 15-30 cm tall before spraying. •Successful lucerne stand reduction is more likely if >70 mm of rain falls in the 6-8 weeks prior to application. •Add either 0.5% Uptake spray oil or a non- ionic surfactant. •Maximum air temperature should not exceed 30°C." }
      ]
    },
    {
      crop: "Fallow, Stubble Spray prior to direct drilling or sowing. Winter cereals, grain legumes (peanuts QLD only) and canola. USAGE RESTRICTIONS APPLY: See Table 1: Timing restrictions for spraying peanuts and Table 5: Risk mitigation measures for Dryland cropping, pre-emergent uses.",
      cropList: ["Fallow", "Stubble Spray prior to direct drilling or sowing. Winter cereals", "grain legumes (peanuts QLD only)", "canola. USAGE RESTRICTIONS APPLY: See Table 1: Timing restrictions for spraying peanuts", "Table 5: Risk mitigation measures for Dryland cropping", "pre-emergent uses."],
      weeds: [
        { weed: "Refer Weed Table", pestList: ["Refer Weed Table"], states: ["All"], rate: "225 mL - 1.7 L", rateMax: "225", unit: "mL/ha", rateText: "225 mL - 1.7 L", notes: "Observe plant back periods given in the table on this leaflet. Can be mixed with chlorsulfuron, paraquat, paraquat/diquat where grasses are present. Select appropriate rate from Weed Table. For Skeleton Weed spraying should only be done 6-8 weeks before anticipated sowing date and subsequent cultivation limited to a minimum." }
      ]
    },
    {
      crop: "Saccaline, Broom Millet, Millet, Grain Sorghum",
      cropList: ["Saccaline", "Broom Millet", "Millet", "Grain Sorghum"],
      weeds: [
        { weed: "Cape Tulip, Dock, Saffron Thistle, Indian Hedge Mustard, London Rocket, Rapistrum, Lupin, Wild Radish, Wild Turnip", pestList: ["Cape Tulip", "Dock", "Saffron Thistle", "Indian Hedge Mustard", "London Rocket", "Rapistrum", "Lupin", "Wild Radish", "Wild Turnip"], states: ["All"], rate: "1.1 L", rateMax: "1100", unit: "mL/ha", rateText: "1.1 L", notes: "Spray when crop is 10-30 cm high and secondary roots have developed and before tasselling. Apply as direct spray to weeds." }
      ]
    },
    {
      crop: "Sugar Cane (Q80, Q96 & H56 varieties) USAGE RESTRICTIONS APPLY. SEE Table 3: Timing restrictions for spraying SUGARCANE",
      cropList: ["Sugar Cane (Q80", "Q96 & H56 varieties) USAGE RESTRICTIONS APPLY. SEE Table 3: Timing restrictions for spraying SUGARCANE"],
      weeds: [
        { weed: "Bellvine", pestList: ["Bellvine"], states: ["All"], rate: "280", rateMax: "280", unit: "mL/ha", notes: "Apply in spring, using directed spray." },
        { weed: "Morning Glory", pestList: ["Morning Glory"], states: ["All"], rate: "560 mL to 1.1 L", rateMax: "560", unit: "mL/ha", rateText: "560 mL to 1.1 L", notes: "Apply in summer, using high clearance tractor." },
        { weed: "Pink Convolvulus, Star of Bethlehem", pestList: ["Pink Convolvulus", "Star Of Bethlehem"], states: ["All"], rate: "1.1 L", rateMax: "1100", unit: "mL/ha", rateText: "1.1 L", notes: "Apply in autumn by aircraft or misters" }
      ]
    },
    {
      crop: "Sugar Cane USAGE RESTRICTIONS APPLY. SEE Table 3: Timing restrictions for spraying SUGARCANE",
      cropList: ["Sugar Cane USAGE RESTRICTIONS APPLY. SEE Table 3: Timing restrictions for spraying SUGARCANE"],
      weeds: [
        { weed: "Bindy Eye (Star Burr), Blue Top, Cobblers Pegs, Flea- banes, Jute, Leucas, Needle Burr, Spear Thistle, Water Primrose, Ipomoea Vines, Convolvulus Vines", pestList: ["Bindy Eye (Star Burr)", "Blue Top", "Cobblers Pegs", "Flea- Banes", "Jute", "Leucas", "Needle Burr", "Spear Thistle", "Water Primrose", "Ipomoea Vines", "Convolvulus Vines"], states: ["All"], rate: "1.8-3.5 L", rateMax: "3500", unit: "mL/ha", rateText: "1.8-3.5 L", notes: "Add 60-120 mL Spray Sure Difuser/100 L of spray mixture. Agitate well. DO NOT use on Q63, Q67, Q80 or Q96 Varieties." },
        { weed: "Chinese Mint, Blue Snakeweed", pestList: ["Chinese Mint", "Blue Snakeweed"], states: ["All"], rate: "3500", rateMax: "3500", unit: "mL/ha", rateText: "3.5 L" }
      ]
    },
    {
      crop: "Peanuts USAGE RESTRICTIONS APPLY. SEE Table 1: Timing restrictions for spraying peanuts.",
      cropList: ["Peanuts USAGE RESTRICTIONS APPLY. SEE Table 1: Timing restrictions for spraying peanuts."],
      weeds: [
        { weed: "Broadleaf Weeds, except Noogoora Burr, Grasses except Mossman Burr", pestList: ["Broadleaf Weeds", "Except Noogoora Burr", "Grasses Except Mossman Burr"], states: ["All"], rate: "1.8-3.6 L", rateMax: "3600", unit: "mL/ha", rateText: "1.8-3.6 L", notes: "LOWER RATE: Apply as BAND SPRAY as soon as possible after planting in a 55 cm band. HIGHER RATE: Apply as OVERALL SPRAY after planting and before crop emergence. Some crop damage may occur if heavy rain falls between application and crop emergence." }
      ]
    },
    {
      crop: "Harvest Aid or Salvage Spray -Winter Cereals",
      cropList: ["Harvest Aid or Salvage Spray -Winter Cereals"],
      weeds: [
        { weed: "Desiccate Broadleaf Weeds Refer Weed Table", pestList: ["Desiccate Broadleaf Weeds Refer Weed Table"], states: ["All"], rate: "1.2-1.7 L", rateMax: "1700", unit: "mL/ha", rateText: "1.2-1.7 L", notes: "Apply after dough stage." }
      ]
    },
    {
      crop: "Bananas",
      cropList: ["Bananas"],
      weeds: [
        { weed: "To destroy Banana suckers", pestList: ["To Destroy Banana Suckers"], states: ["All"], rate: "160", rateMax: "160", unit: "mL/10L", notes: "Inject at the rate of 15 mL per fully grown plant, 10 mL per medium sized plant and 5 mL for small suckers." }
      ]
    },
    {
      crop: "Cavendish bananas",
      cropList: ["Cavendish bananas"],
      weeds: [
        { weed: "Banana suckers", pestList: ["Banana Suckers"], states: ["All"], rate: "160 mL / 10 L water INJECT AT THE RATE OF: 15 mL p", rateMax: "160", unit: "mL/ha", rateText: "160 mL / 10 L water INJECT AT THE RATE OF: 15 mL per fully grown plant, 10 mL per medium sized plant", notes: "Apply by stem injection only" }
      ]
    },
    {
      crop: "Common Stylo forage or seed crops",
      cropList: ["Common Stylo forage or seed crops"],
      weeds: [
        { weed: "Refer to Weeds Table", pestList: ["Refer To Weeds Table"], states: ["All"], rate: "800", rateMax: "800", unit: "mL/ha", rateText: "800 mL", notes: "Apply post-emergence when weeds are 3 weeks old and crop is at least 3 weeks old." }
      ]
    },
    {
      crop: "Pastures and non-agricultural USAGE RESTRICTIONS APPLY. SEE Table 2: Application and timing restrictions for application to pastures",
      cropList: ["Pastures", "non-agricultural USAGE RESTRICTIONS APPLY. SEE Table 2: Application", "timing restrictions for application to pastures"],
      weeds: [
        { weed: "Refer to Weed Table", pestList: ["Refer To Weed Table"], states: ["All"], rate: "560", rateMax: "1700", unit: "mL/ha", rateText: "560 mL-1.7 L", notes: "Pasture legumes including lucerne, clovers and medics may be damaged unless well protected by grasses. Spot spraying is preferred." },
        { weed: "Galvanised Burr", pestList: ["Galvanised Burr"], states: ["All"], rate: "320", rateMax: "320", unit: "mL/ha", notes: "Apply to young actively growing weeds. Ensure thorough and even coverage of plants. Note: treated plants need to be burnt to destroy seeds." },
        { weed: "Amsinckia, Docks, Bindweed, Caltrop, Flatweed, Spear Thistle, Capeweed, Doublegee, Saffron Thistle, Mustard, Wild Radish, Wild Turnip, Annual Thistles, Paterson’s Curse, Heliotrope.", pestList: ["Amsinckia", "Docks", "Bindweed", "Caltrop", "Flatweed", "Spear Thistle", "Capeweed", "Doublegee", "Saffron Thistle", "Mustard", "Wild Radish", "Wild Turnip", "Annual Thistles", "Paterson\u2019S Curse", "Heliotrope."], states: ["All"], rate: "1.1-2.4 L", rateMax: "2400", unit: "mL/ha", rateText: "1.1-2.4 L", notes: "For pastures not containing legumes. Only seedling Docks, Spear Thistle and Saffron Thistle will be controlled. SUMMER WEEDS: Use low rate for seedlings, 1.6-2.4 L/ha for larger plants. Stock poisoning may occur when grazed after spraying if large amounts present, particularly Heliotrope. WINTER WEEDS: Use low rate for seedlings, 1.6-2.4 L/ha for larger plants. If stock present, use spray/grazing rates." },
        { weed: "Afghan Melons", pestList: ["Afghan Melons"], states: ["All"], rate: "1.6 L plus 1% crop oil", rateMax: "1600", unit: "mL/ha", rateText: "1.6 L plus 1% crop oil", notes: "Spray when plants are actively growing preferably before flowering or vining." },
        { weed: "Paddy Melons", pestList: ["Paddy Melons"], states: ["All"], rate: "800", rateMax: "1100", unit: "mL/ha", rateText: "800 mL-1.1 L" },
        { weed: "Prickly Saltwort (Roly Poly)", pestList: ["Prickly Saltwort (Roly Poly)"], states: ["All"], rate: "1.6 L", rateMax: "1600", unit: "mL/ha", rateText: "1.6 L", notes: "Spray when plants are small." },
        { weed: "Stinkwort", pestList: ["Stinkwort"], states: ["All"], rate: "1.6-3.2 L plus surfactant", rateMax: "3200", unit: "mL/ha", rateText: "1.6-3.2 L plus surfactant", notes: "Best results are obtained when plants are small. Use high rate on larger plants." },
        { weed: "Dove Weed", pestList: ["Dove Weed"], states: ["All"], rate: "3.2L", rateMax: "3200", unit: "mL/ha", rateText: "3.2L", notes: "Spray after good emergence of seedlings." }
      ]
    },
    {
      crop: "Pastures, Rights of Way & Industrial",
      cropList: ["Pastures", "Rights of Way & Industrial"],
      weeds: [
        { weed: "Boxthorn, Boneseed, Hawthorn", pestList: ["Boxthorn", "Boneseed", "Hawthorn"], states: ["All"], rate: "100", rateMax: "100", unit: "mL/ha", rateText: "Undiluted", notes: "Cut stump: Apply or paint undiluted Surefire Amine 625 to freshly cut stumps." },
        { weed: "Groundsel", pestList: ["Groundsel"], states: ["All"], rate: "320", rateMax: "320", unit: "mL/ha", notes: "HIGH VOLUME: Thoroughly wet plants" },
        { weed: "Lantana", pestList: ["Lantana"], states: ["All"], rate: "320", rateMax: "320", unit: "mL/ha", notes: "Use a coarse spray with sufficient pressure to penetrate canopy and wet stems as well as foliage. Spray at the end of a wet summer (March to May). Defoliation should occur but respraying of new growth will be necessary in following Autumn. Broadcast grass seed and keep stock off following summer to allow the pasture to establish. Damage may result to pasture legumes." },
        { weed: "Mother of Millions", pestList: ["Mother Of Millions"], states: ["All"], rate: "400", rateMax: "400", unit: "mL/ha", notes: "Handgun only. A thorough coverage of leaves and plantlets is necessary. Use 1000 g/L non-ionic wetter at the rate of 1.0mL of surfactant per 1L of mixture." }
      ]
    },
    {
      crop: "Pastures - Spray/Graze Techniques USAGE RESTRICTIONS APPLY. SEE Table 2: Application and timing restrictions for application to pastures",
      cropList: ["Pastures - Spray/Graze Techniques USAGE RESTRICTIONS APPLY. SEE Table 2: Application", "timing restrictions for application to pastures"],
      weeds: [
        { weed: "Amsinckia, Thistles, Capeweed, Doublegee, Mustard, Paterson’s Curse, Wild Turnip, Wild Radish Docks, Geranium, Erodium", pestList: ["Amsinckia", "Thistles", "Capeweed", "Doublegee", "Mustard", "Paterson\u2019S Curse", "Wild Turnip", "Wild Radish Docks", "Geranium", "Erodium"], states: ["All"], rate: "560", rateMax: "560", unit: "mL/ha", rateText: "560 mL", notes: "Apply from 6 weeks after opening rains in Autumn until the end of August. Seven days after spraying stock paddock at 4-5 times normal rate, preferably with sheep. Maintain this level of grazing for 6 weeks or until pasture shows signs of over grazing, then return to normal stocking levels. Use high stocking rates in following Spring to prevent weeds from flowering. Repeat treatments may be required for 2-3 years for complete control." },
        { weed: "Annual Thistles, Capeweed Doublegee, Mustards, Paterson’s Curse, Wild Turnip, Saffron Thistle, Spear Thistle, Geranium, Slender Thistle", pestList: ["Annual Thistles", "Capeweed Doublegee", "Mustards", "Paterson\u2019S Curse", "Wild Turnip", "Saffron Thistle", "Spear Thistle", "Geranium", "Slender Thistle"], states: ["All"], rate: "600", rateMax: "600", unit: "mL/ha" },
        { weed: "Amsinckia, Docks (seeding only), Capeweed, Doublegee, Mustard, Wild Radish, Wild Turnip, Paterson’s Curse, Annual Thistles.", pestList: ["Amsinckia", "Docks (Seeding Only)", "Capeweed", "Doublegee", "Mustard", "Wild Radish", "Wild Turnip", "Paterson\u2019S Curse", "Annual Thistles."], states: ["All"], rate: "600", rateMax: "800", unit: "mL/ha", rateText: "600-800 mL" },
        { weed: "Spear Thistle, Saffron Thistle", pestList: ["Spear Thistle", "Saffron Thistle"], states: ["All"], rate: "1.2 L", rateMax: "1200", unit: "mL/ha", rateText: "1.2 L", notes: "Apply to Saffron Thistle at the end of September when plants are running up to flower. Sub-clovers may be damaged at this rate and use is not recommended for all medic pastures." },
        { weed: "Melons", pestList: ["Melons"], states: ["All"], rate: "1.6 L + 1% oil", rateMax: "1600", unit: "mL/ha", rateText: "1.6 L + 1% oil", notes: "Heavy stocking on young plants sprayed with 800 mL/ha provides effective control." },
        { weed: "Docks", pestList: ["Docks"], states: ["All"], rate: "1.1 L", rateMax: "1100", unit: "mL/ha", rateText: "1.1 L", notes: "Apply in September only and follow other recommendations above." }
      ]
    },
    {
      crop: "Pastures - Spray/Graze Techniques (continued)",
      cropList: ["Pastures - Spray/Graze Techniques (continued)"],
      weeds: [
        { weed: "Caltrop, Capeweed, Charlock, Mustards, Paterson’s Curse, Shepherd’s Purse, Saffron, Slender, Spear or Variegated Thistles*, Turnip Weed, Wild Radish, Wild Turnip", pestList: ["Caltrop", "Capeweed", "Charlock", "Mustards", "Paterson\u2019S Curse", "Shepherd\u2019S Purse", "Saffron", "Slender", "Spear Or Variegated Thistles*", "Turnip Weed", "Wild Radish", "Wild Turnip"], states: ["All"], rate: "280", rateMax: "1100", unit: "mL/ha", rateText: "280 mL-1.1 L", notes: "Spray actively growing 6-8 week old weeds. Introduce stock 7-10 days after spraying, preferably sheep (cattle are less effective). Stocking rate should be at least 5 times heavier than normal until weeds have been reduced, but before survival of desirable pasture species is threatened. Lucerne and Medics may be damaged and should be grazed short before spraying. Other legumes may be affected. *Warning: treated plants may become toxic to stock" }
      ]
    },
    {
      crop: "Hardwood and Softwood plantations",
      cropList: ["Hardwood", "Softwood plantations"],
      weeds: [
        { weed: "Broadleaf and woody weeds as per Weed Table including grounsel and pinus spp. wildings", pestList: ["Broadleaf And Woody Weeds As Per Weed Table Including Grounsel And Pinus Spp. Wildings"], states: ["All"], rate: "Maximum rate 1.6 L/ha", rateMax: "1600", unit: "mL/ha", rateText: "Maximum rate 1.6 L/ha", notes: "Apply a single preplant application and/or a maximum of 2 post plant applications using shielded sprayers within the first 2 years following planting. Apply using aircraft (rotary wing only) or ground based equipment. DO NOT spray over or into watercourses. Product may be mixed with glyphosate for pre-plant spray operations." }
      ]
    },
    {
      crop: "Oil Tea Tree",
      cropList: ["Oil Tea Tree"],
      weeds: [
        { weed: "Refer to Weed Table", pestList: ["Refer To Weed Table"], states: ["All"], rate: "Apply at a maximum of 960 mL/ha as per label direc", rateMax: "960", unit: "mL/ha", rateText: "Apply at a maximum of 960 mL/ha as per label directions", notes: "Apply as a shielded spray. Avoid contact with foliage, green stems, exposed non-woody roots, desirable plants and trees as severe injury or destruction may result. Apply following harvest as a blanket spray only after: •All residual tea tree foliage has been removed by mechanical shaving, or by using a burner, •No swollen buds are present on stumps. NOTE that buds can burst 8 days after harvest in summer and •Surfaces of cut stumps are dry before spraying commences." },
        { weed: "Purple Top (Verbena bonariensis)", pestList: ["Purple Top"], states: ["All"], rate: "Apply at 960 mL/ha plus 720 g ai glyphosate/ha in ", rateMax: "960", unit: "mL/ha", rateText: "Apply at 960 mL/ha plus 720 g ai glyphosate/ha in tank mix", notes: "Apply as a shielded spray. Avoid contact with foliage, green stems, exposed non-woody roots, desirable plants and trees as severe injury or destruction may result." }
      ]
    },
    {
      crop: "Lawns, Playing fields",
      cropList: ["Lawns", "Playing fields"],
      weeds: [
        { weed: "Refer Weed Table", pestList: ["Refer Weed Table"], states: ["All"], rate: "1.5-3.0 mL/1 L water", rateMax: "3.2", unit: "mL/ha", rateText: "1.5-3.0 mL/1 L water or 1.6-3.2 L/ha", notes: "Wet foliage thoroughly. DO NOT mow lawn for 1 week before and at least 1 week after application. DO NOT use on Buffalo grass (WA only)" }
      ]
    },
    {
      crop: "High volume spraying",
      cropList: ["High volume spraying"],
      weeds: [
        { weed: "Refer to Weed Table", pestList: ["Refer To Weed Table"], states: ["All"], rate: "140", rateMax: "140", unit: "mL/ha", rateText: "Add 1/10th of rate on Weed Table to 150 litres of water. Each 150 litres of mix will cover 1000 m2 (1/10th ha) eg. if rate in Weed Table is 1.4 L, use 140 mL/150 L water.", notes: "Add 1/10th of rate on Weed Table to 150 litres of water. Each 150 litres of mix will cover 1000 m2 (1/10th ha) eg. if rate in Weed Table is 1.4 L, use 140 mL/150 L water." }
      ]
    }
  ],

  restraints: [
    "THIS IS A PHENOXY HERBICIDE THAT CAN CAUSE SEVERE DAMAGE TO COTTON, GRAPES, TOMATOES, OILSEED CROPS AND ORNAMENTALS",
    "DO NOT apply under weather conditions or equipment that may cause spray drift onto nearby susceptible plants/crops",
    "Avoid spray drift and vapour movement onto susceptible crops",
    "IN TASMANIA: May only be used from 15 April to 15 September unless permitted by Registrar",
    "DO NOT hand harvest sugar cane for at least 1 day after application"
  ],

  compatibility: {
    compatible:   ["Dicamba", "Diuron", "Chlorsulfuron", "Paraquat", "2,2-DPA", "Atrazine", "Paraquat/diquat", "Picloram", "Propiconazole"],
    incompatible: [],
    notes:        ["Equipment used for this product should not be applied to sensitive plants unless well washed out with hot soapy water or 1% ammonia solution"]
  },

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "Fallow 21 days; Pasture/cereals 7 days"
  },

  surfactant:     "Non-ionic surfactant may assist control of some weeds",
  sprayerCleanup: "Equipment maintenance: wash thoroughly with hot soapy water or 1% ammonia solution followed by clear water rinses"
};
