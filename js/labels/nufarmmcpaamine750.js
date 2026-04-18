// ─────────────────────────────────────────────────────────────────────────────
// NUFARM MCPA AMINE 750 HERBICIDE — Label Data
// Herbicide | Group 4 | Selective | Broadleaf Weed Control
// Source: Nufarm-MCPA-Amine-750-Label.pdf
// APVMA Approval No: 60505/134311
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['nufarmmcpaamine750'] = {
  name:             "Nufarm MCPA Amine 750 Herbicide",
  company: "Nufarm",

  category:         "Herbicides",
  activeIngredient: "750 g/L MCPA (present as amine salt)",
  group:            "Group 4 Herbicide",
  modeOfAction:     "Disruptors of plant cell growth (synthetic auxin - phenoxy)",
  formulation:      "Liquid Concentrate (LC)",
  color:            "#164e63",
  apvma:            "60505",
  labelPdf:         "Source labels/Nufarm-MCPA-Amine-750-Label.pdf",
  sdsPdf:           "SDS Labels/NUFARM-MCPA-AMINE-750-SDS.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Herbicide",
    target: ["Broadleaf weeds"],
    timing: ["Post-emergent"]
  },

  crops: [
    {
      crop: "Wheat, Barley, Oats, Triticale",
      cropList: ["Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        { weed: "General broadleaf weeds (refer to weed table for specific species)", pestList: ["Broadleaf weeds"], states: ["All"], rate: "460", rateMax: "1450", unit: "mL/ha", stage: "2-4 leaf or 5 leaf to before booting", note: "Apply at 2-4 leaf stage when weeds marked # in the weed table have reached 2-6 leaf stage, otherwise wait until crop is at 5 leaf stage and use higher rates as listed in weed table" }
      ]
    },
    {
      crop: "Wheat, Barley, Triticale, Cereal rye (WA only)",
      cropList: ["Wheat", "Barley", "Triticale", "Cereal rye"],
      weeds: [
        { weed: "Capeweed, Double gee, Erodium, Mustard, Rapistrum, Wild turnip, Wild radish", pestList: ["Capeweed", "Double gee", "Erodium", "Mustard", "Rapistrum", "Wild turnip", "Wild radish"], states: ["WA"], rate: "270", rateMax: "330", unit: "mL/ha", stage: "Crop 3-4 leaf or 4-5 leaf", note: "Apply by aircraft or boom with 20-100 L/ha water, when most weeds have germinated and are in 2-5 leaf stage. Crop and weeds should be dry at time of application. Some temporary yellowing of crop may occur after application. Undersown sub-clovers may be slightly retarded. DO NOT apply to undersown medics" }
      ]
    },
    {
      crop: "Wheat, Barley, Triticale, Cereal rye (NSW, ACT, VIC, SA)",
      cropList: ["Wheat", "Barley", "Triticale", "Cereal rye"],
      weeds: [
        { weed: "Amsinckia (Yellow burr), Capeweed, Charlock, Dead nettle, Double gee (Spiny emex, Three-cornered Jack), Erodium spp., Mustard, Turnip weed, White ironweed (Corn gromwell, Sheepweed), Wild radish, Wild turnip, Ward's weed, Common ice plant, Pimpernel", pestList: ["Amsinckia", "Capeweed", "Charlock", "Dead nettle", "Double gee", "Spiny emex", "Three-cornered Jack", "Erodium", "Mustard", "Turnip weed", "White ironweed", "Corn gromwell", "Sheepweed", "Wild radish", "Wild turnip", "Ward's weed", "Common ice plant", "Pimpernel"], states: ["NSW", "ACT", "VIC", "SA"], rate: "230", rateMax: "330", unit: "mL/ha", stage: "Crop 3-5 leaf stage (NSW and SA), 5 leaf stage (VIC)", note: "Apply by boom spray or aircraft. Weeds must be in 2-5 leaf stage. DO NOT apply to undersown medic or lucerne. DO NOT use on Durati, Kamilaroi, Kite, Olympic or Shortim wheat. DO NOT use on very light sandy soils" }
      ]
    },
    {
      crop: "Wheat, Barley, Triticale, Cereal rye (Soldier thistle - SA only)",
      cropList: ["Wheat", "Barley", "Triticale", "Cereal rye"],
      weeds: [
        { weed: "Soldier thistle", pestList: ["Soldier thistle"], states: ["SA"], rate: "460", rateMax: "460", unit: "mL/ha", stage: "Crop at tillering stage after 5 leaves and before jointing, plus Nufarm Archer 750 Herbicide 80 mL/ha", note: "Apply to crop at tillering stage after the crop has 5 leaves and before the crop commences jointing" }
      ]
    },
    {
      crop: "Wheat, Barley, Triticale, Cereal rye (Skeleton weed - SA, NSW, VIC, WA)",
      cropList: ["Wheat", "Barley", "Triticale", "Cereal rye"],
      weeds: [
        { weed: "Skeleton weed (rosettes 5-15cm diameter)", pestList: ["Skeleton weed"], states: ["SA", "NSW", "VIC", "WA"], rate: "660", rateMax: "660", unit: "mL/ha", stage: "Rosettes 5-15cm diameter, crop 5 leaf to late tillering, plus Nufarm Archer 750 Herbicide 200 mL/ha", note: "Apply to rosettes from 5-15cm diameter when crop is between 5 leaf and late tillering growth stages. It is essential that all Skeleton weed is emerged and minimum of 5cm diameter which is usually not before August. This rate will provide control until harvest and will substantially reduce seed numbers the following season" }
      ]
    },
    {
      crop: "Wheat, Barley, Oats, Triticale, Cereal rye (Volunteer canola)",
      cropList: ["Wheat", "Barley", "Oats", "Triticale", "Cereal rye"],
      weeds: [
        { weed: "Volunteer canola (Brassica napus) including Roundup Ready varieties and canola hybrids with Optimum GLY herbicide tolerance trait (4 leaf weed stage)", pestList: ["Volunteer canola"], states: ["All"], rate: "330", rateMax: "330", unit: "mL/ha", stage: "Canola 4 leaf stage, plus Unity 240 EW 85 mL/ha", note: "DO NOT apply the tank mix of Unity 240 EW + Nufarm MCPA Amine 750 before the three leaf stage of cereals. DO NOT apply mixtures containing Unity to cereals by Aircraft" }
      ]
    },
    {
      crop: "Wheat, Barley, Oats, Triticale, Cereal rye (Volunteer canola 6 leaf)",
      cropList: ["Wheat", "Barley", "Oats", "Triticale", "Cereal rye"],
      weeds: [
        { weed: "Volunteer canola (Brassica napus) including Roundup Ready varieties and canola hybrids with Optimum GLY herbicide tolerance trait (6 leaf weed stage)", pestList: ["Volunteer canola"], states: ["All"], rate: "330", rateMax: "330", unit: "mL/ha", stage: "Canola 6 leaf stage, plus Unity 240 EW 100 mL/ha", note: "DO NOT apply the tank mix of Unity 240 EW + Nufarm MCPA Amine 750 before the three leaf stage of cereals. DO NOT apply mixtures containing Unity to cereals by Aircraft" }
      ]
    },
    {
      crop: "Field peas (4 leaf)",
      cropList: ["Field peas"],
      weeds: [
        { weed: "Prickly lettuce (Lactuca serriola) (4 leaf stage)", pestList: ["Prickly lettuce"], states: ["NSW", "VIC", "TAS", "SA"], rate: "80", rateMax: "80", unit: "mL/ha", stage: "4 leaf stage, plus diflufenican 500 g/L SC 125 mL/ha", note: "Apply early post-emergence after the third node stage and before the start of flowering. Warning: Field peas grown on high pH soils in the presence of free lime may be less tolerant to diflufenican. Apply when weeds are actively growing. For optimum results apply 4-6 weeks post-sowing" }
      ]
    },
    {
      crop: "Field peas (6 leaf)",
      cropList: ["Field peas"],
      weeds: [
        { weed: "Prickly lettuce (Lactuca serriola) (6 leaf stage)", pestList: ["Prickly lettuce"], states: ["NSW", "VIC", "TAS", "SA"], rate: "100", rateMax: "100", unit: "mL/ha", stage: "6 leaf stage, plus diflufenican 500 g/L SC 150 mL/ha", note: "Apply early post-emergence after the third node stage and before the start of flowering. Warning: Field peas grown on high pH soils in the presence of free lime may be less tolerant to diflufenican. Application beyond 8 weeks post-sowing may result in reduced levels of weed control" }
      ]
    },
    {
      crop: "Field peas (Charlock 4 leaf)",
      cropList: ["Field peas"],
      weeds: [
        { weed: "Charlock (Wild mustard) (Sinapis arvensis) (4 leaf stage)", pestList: ["Charlock", "Wild mustard"], states: ["NSW", "VIC", "TAS", "SA"], rate: "80", rateMax: "80", unit: "mL/ha", stage: "4 leaf stage, plus diflufenican 500 g/L SC 125 mL/ha", note: "Apply when weeds are actively growing. For optimum results apply 4-6 weeks post-sowing" }
      ]
    },
    {
      crop: "Field peas (Charlock 6 leaf)",
      cropList: ["Field peas"],
      weeds: [
        { weed: "Charlock (Wild mustard) (Sinapis arvensis) (6 leaf stage)", pestList: ["Charlock", "Wild mustard"], states: ["NSW", "VIC", "TAS", "SA"], rate: "100", rateMax: "100", unit: "mL/ha", stage: "6 leaf stage, plus diflufenican 500 g/L SC 150 mL/ha", note: "Apply early post-emergence after third node stage and before start of flowering. Application beyond 8 weeks post-sowing may result in reduced levels of weed control. Under certain conditions such as high crop and weed density, late season germinations, or abnormal weed growth (including early flowering), higher rates of product (up to the maximum rate of application specified for that weed) may be required" }
      ]
    },
    {
      crop: "Linseed (Queensland)",
      cropList: ["Linseed"],
      weeds: [
        { weed: "Broadleaf weeds (refer to weed table)", pestList: ["Broadleaf weeds"], states: ["QLD"], rate: "460", rateMax: "1450", unit: "mL/ha", stage: "Crop 10-15cm tall", note: "Apply when crop is 10-15cm tall with at least 170 L/ha of water. DO NOT spray after buds appear. Some wilting effect may be seen following application but crop usually recovers quickly. DO NOT apply by aircraft" }
      ]
    },
    {
      crop: "Linseed (NSW, ACT, VIC, SA, TAS)",
      cropList: ["Linseed"],
      weeds: [
        { weed: "Broadleaf weeds (refer to weed table)", pestList: ["Broadleaf weeds"], states: ["NSW", "ACT", "VIC", "SA", "TAS"], rate: "460", rateMax: "730", unit: "mL/ha", stage: "Crop 10-15cm tall", note: "Apply when crop is 10-15cm tall with at least 170 L/ha of water. DO NOT spray after buds appear. Some wilting effect may be seen following application but crop usually recovers quickly" }
      ]
    },
    {
      crop: "Sugar Cane (Blue top, Chinese burr, Flannel weed, etc.)",
      cropList: ["Sugar Cane"],
      weeds: [
        { weed: "Blue top, Chinese burr, Flannel weed, Gambia pea, Bell vine, Streaked rattle pod, Bindweed, Pink convolvulus, Cupid's flower, Merremia vine, Morning glory", pestList: ["Blue top", "Chinese burr", "Flannel weed", "Gambia pea", "Bell vine", "Streaked rattle pod", "Bindweed", "Pink convolvulus", "Cupid's flower", "Merremia vine", "Morning glory"], states: ["QLD"], rate: "930", rateMax: "930", unit: "mL/ha", stage: "Post-emergent", note: "Apply as a directed inter-row spray. DO NOT exceed rates with phenoxy sensitive varieties" }
      ]
    },
    {
      crop: "Sugar Cane (With Fat hen, Noogoora burr)",
      cropList: ["Sugar Cane"],
      weeds: [
        { weed: "Blue top, Chinese burr, Flannel weed, Gambia pea, Bell vine, Streaked rattle pod, Bindweed, Pink convolvulus, Cupid's flower, Merremia vine, Morning glory plus Fat hen, Noogoora burr", pestList: ["Blue top", "Chinese burr", "Flannel weed", "Gambia pea", "Bell vine", "Streaked rattle pod", "Bindweed", "Pink convolvulus", "Cupid's flower", "Merremia vine", "Morning glory", "Fat hen", "Noogoora burr"], states: ["QLD"], rate: "1450", rateMax: "1450", unit: "mL/ha", stage: "Post-emergent", note: "Apply as a directed inter-row spray. DO NOT exceed rates with phenoxy sensitive varieties" }
      ]
    },
    {
      crop: "Oilseed Poppies (Papaver somniferum)",
      cropList: ["Oilseed Poppies"],
      weeds: [
        { weed: "Fat hen (Chenopodium album), Spear thistle (Cirsium vulgare)", pestList: ["Fat hen", "Spear thistle"], states: ["TAS"], rate: "1000", rateMax: "1000", unit: "mL/ha", stage: "Late germinating, bud or early flowering stage", note: "Use only in consultation with the poppy contracting company. Apply at least one week after petal fall after poppy seed has been set. Apply by aircraft in 30-40 L of water/ha. This treatment will control late germinating weeds if they are green and at the bud or early flowering stage. Spraying at this time will twist weeds below the crop canopy. DO NOT apply in horticultural areas where there is a risk of spray or vapour drift over susceptible crops" }
      ]
    },
    {
      crop: "Rice (485 mL/ha rate)",
      cropList: ["Rice"],
      weeds: [
        { weed: "Dirty Dora, Starfruit, Sedges, Buddah (Butter) pea, Docks", pestList: ["Dirty Dora", "Starfruit", "Sedges", "Buddah pea", "Butter pea", "Docks"], states: ["NSW", "QLD", "VIC"], rate: "485", rateMax: "485", unit: "mL/ha", stage: "Early/mid tillering, 35 days after aerial sowing (approx. 2 tillers per rice plant)", note: "Apply by aircraft at early/mid tillering stage of rice but not later than panicle initiation. Use 485 mL/ha at 35 days after aerial sowing (approx. 2 tillers per rice plant). The crop should be sprayed before flowering of the weeds. WATER MANAGEMENT: Before herbicide application, lower water level in the bays to at least two thirds of the weed growth for direct contact with Nufarm MCPA Amine 750. Weeds covered by water will not be controlled. Raise water depth to normal levels 24 hours following spraying" }
      ]
    },
    {
      crop: "Rice (970 mL/ha rate)",
      cropList: ["Rice"],
      weeds: [
        { weed: "Dirty Dora, Starfruit, Sedges, Buddah (Butter) pea, Docks", pestList: ["Dirty Dora", "Starfruit", "Sedges", "Buddah pea", "Butter pea", "Docks"], states: ["NSW", "QLD", "VIC"], rate: "970", rateMax: "970", unit: "mL/ha", stage: "Mid/late tillering, 45 days or more after cereal sowing (3 tillers or more per rice plant)", note: "Apply by aircraft at early/mid tillering stage of rice but not later than panicle initiation. Use 970 mL/ha at 45 days or more after cereal sowing (3 tillers or more per rice plant). The crop should be sprayed before flowering of the weeds. WATER MANAGEMENT: Before herbicide application, lower water level in the bays to at least two thirds of the weed growth for direct contact with Nufarm MCPA Amine 750. Weeds covered by water will not be controlled. Raise water depth to normal levels 24 hours following spraying" }
      ]
    },
    {
      crop: "Flax",
      cropList: ["Flax"],
      weeds: [
        { weed: "Broadleaf weeds (refer to weed table)", pestList: ["Broadleaf weeds"], states: ["VIC", "TAS"], rate: "325", rateMax: "325", unit: "mL/ha", stage: "Crop 8-20cm high", note: "Apply to crop when 8-20cm high" }
      ]
    },
    {
      crop: "Grass Pastures",
      cropList: ["Grass Pastures", "Pasture"],
      weeds: [
        { weed: "Broadleaf weeds (refer to weed table)", pestList: ["Broadleaf weeds"], states: ["All"], rate: "460", rateMax: "2700", unit: "mL/ha", stage: "Established grass pasture", note: "Apply to established grass based pastures. Damage may occur to legumes if present. See Legume Tolerance. NOTE: Capeweed, Paterson's curse and Variegated thistle may be poisonous to stock after spraying" }
      ]
    },
    {
      crop: "Grass Pastures (Soldier thistle - SA only)",
      cropList: ["Grass Pastures", "Pasture"],
      weeds: [
        { weed: "Soldier thistle", pestList: ["Soldier thistle"], states: ["SA"], rate: "460", rateMax: "1450", unit: "mL/ha", stage: "Seedling stage with no more than 2 true leaves or established", note: "Use low rate on seedlings with no more than 2 true leaves. Use 100 L of water for best results. If clover present, DO NOT exceed 575 mL/ha" }
      ]
    },
    {
      crop: "Grass Pastures (Horehound - NSW, ACT)",
      cropList: ["Grass Pastures", "Pasture"],
      weeds: [
        { weed: "Seedling and established Horehound", pestList: ["Horehound"], states: ["NSW", "ACT"], rate: "2000", rateMax: "2000", unit: "mL/ha", stage: "Seedling stage", note: "Apply in Autumn when horehound plants are at the seedling stage. If sub clover or medic plants are present they will be damaged by this application" }
      ]
    },
    {
      crop: "Grass Seed Crops",
      cropList: ["Grass Seed Crops"],
      weeds: [
        { weed: "Broadleaf weeds (refer to weed table)", pestList: ["Broadleaf weeds"], states: ["QLD", "SA", "TAS", "VIC", "WA"], rate: "460", rateMax: "2700", unit: "mL/ha", stage: "Established grass seed crops", note: "Apply to established grass seed crops" }
      ]
    },
    {
      crop: "Sub. clover seed crops",
      cropList: ["Sub. clover seed crops", "Clover"],
      weeds: [
        { weed: "Broadleaf weeds (refer to weed table)", pestList: ["Broadleaf weeds"], states: ["VIC", "SA"], rate: "460", rateMax: "960", unit: "mL/ha", stage: "Autumn and early Winter", note: "DO NOT exceed rate specified. Spray in Autumn and early Winter" }
      ]
    },
    {
      crop: "Pastures - Spray/Graze Technique (NSW, ACT, VIC, TAS)",
      cropList: ["Pasture", "Spray/Graze"],
      weeds: [
        { weed: "Caltrop, Capeweed, Charlock, Mustards, Paterson's curse, Shepherd's purse, Saffron, Slender, Spear or Variegated thistle, Turnip weed, Wild radish, Wild turnip", pestList: ["Caltrop", "Capeweed", "Charlock", "Mustards", "Paterson's curse", "Shepherd's purse", "Saffron", "Slender thistle", "Spear thistle", "Variegated thistle", "Turnip weed", "Wild radish", "Wild turnip"], states: ["NSW", "ACT", "VIC"], rate: "230", rateMax: "930", unit: "mL/ha", stage: "Active growth, 6-8 weeks old", note: "Spray actively growing 6-8 week old weeds. Introduce stock 7-10 days after spraying, preferably sheep as cattle are less effective. Use stocking rate at least 5 times heavier than normal until weeds have been reduced but before survival of desirable pasture species is threatened. Lucerne and medics may be damaged and should be grazed short before spraying. PRECAUTION: An increased quantity of poisonous plants may be eaten by stock, eg. Caltrop, Capeweed, Paterson's curse and Variegated thistle and deaths could result from causes such as nitrate poisoning. With Paterson's curse preferably graze stock soon destined for slaughter and avoid extended periods of grazing. Avoid grazing with young or breeding stock. DO NOT graze horses or pigs on Paterson's curse. Observe Withholding Period of at least 7 days after spraying" }
      ]
    },
    {
      crop: "Pastures - Spray/Graze Technique (TAS only)",
      cropList: ["Pasture", "Spray/Graze"],
      weeds: [
        { weed: "Caltrop, Capeweed, Charlock, Mustards, Paterson's curse, Shepherd's purse, Saffron, Slender, Spear or Variegated thistle, Turnip weed, Wild radish, Wild turnip", pestList: ["Caltrop", "Capeweed", "Charlock", "Mustards", "Paterson's curse", "Shepherd's purse", "Saffron", "Slender thistle", "Spear thistle", "Variegated thistle", "Turnip weed", "Wild radish", "Wild turnip"], states: ["TAS"], rate: "460", rateMax: "460", unit: "mL/ha", stage: "Active growth", note: "Spray actively growing weeds. Introduce stock 7-10 days after spraying" }
      ]
    },
    {
      crop: "Pastures - Spray/Graze Technique (WA only)",
      cropList: ["Pasture", "Spray/Graze"],
      weeds: [
        { weed: "Broadleaf weeds (refer to weed table)", pestList: ["Broadleaf weeds"], states: ["WA"], rate: "610", rateMax: "1250", unit: "mL/ha", stage: "Active growth", note: "Spray actively growing weeds" }
      ]
    },
    {
      crop: "Pastures - Spray/Graze Technique (SA only)",
      cropList: ["Pasture", "Spray/Graze"],
      weeds: [
        { weed: "Capeweed, Dandelion, Seedling dock, Three-cornered Jack, Geranium, Erodium, Mustard, Annual thistles, Turnip weed, Wild radish, Wild turnip", pestList: ["Capeweed", "Dandelion", "Seedling dock", "Three-cornered Jack", "Geranium", "Erodium", "Mustard", "Annual thistles", "Turnip weed", "Wild radish", "Wild turnip"], states: ["SA"], rate: "330", rateMax: "330", unit: "mL/ha", stage: "Active growth", note: "Spray actively growing weeds" }
      ]
    },
    {
      crop: "Pastures - Spray/Graze Technique (SA - Soldier Thistle)",
      cropList: ["Pasture", "Spray/Graze"],
      weeds: [
        { weed: "Soldier Thistle", pestList: ["Soldier Thistle"], states: ["SA"], rate: "395", rateMax: "395", unit: "mL/ha", stage: "Active growth", note: "Spray actively growing weeds" }
      ]
    },
    {
      crop: "Turf (Newly laid)",
      cropList: ["Turf"],
      weeds: [
        { weed: "Broadleaf weeds (refer to weed table)", pestList: ["Broadleaf weeds"], states: ["All"], rate: "330", rateMax: "330", unit: "mL/ha", stage: "Newly laid turf (at least 2 months old)", note: "Delay until well established or at least two months old. Apply in high volume to actively growing weeds. See Legume Tolerance. Buffalo grass is more easily damaged than other grasses. Alternative rate: 2.8 mL/100 m2" }
      ]
    },
    {
      crop: "Turf (Established)",
      cropList: ["Turf"],
      weeds: [
        { weed: "Broadleaf weeds (refer to weed table)", pestList: ["Broadleaf weeds"], states: ["All"], rate: "930", rateMax: "1800", unit: "mL/ha", stage: "Established turf", note: "Apply in high volume to actively growing weeds. DO NOT mow for 2 days before application. Some transitory damage may occur to fine turf grasses and strawberry clover. See Legume Tolerance. Buffalo grass is more easily damaged than other grasses. Alternative rates: 10-19 mL/100 m2" }
      ]
    },
    {
      crop: "Spot Spraying (High Volume)",
      cropList: ["Spot Spraying"],
      weeds: [
        { weed: "Easy to kill weeds such as Wild turnip, Mustards and Wild radish", pestList: ["Wild turnip", "Mustards", "Wild radish"], states: ["All"], rate: "130", rateMax: "130", unit: "mL/100L", stage: "Active growth", note: "Use 130 mL/100 L of water for easy to kill weeds" }
      ]
    },
    {
      crop: "Spot Spraying (High Volume - difficult weeds)",
      cropList: ["Spot Spraying"],
      weeds: [
        { weed: "Difficult to control weeds such as Docks, Hoary cress and Bindweed", pestList: ["Docks", "Hoary cress", "Bindweed"], states: ["All"], rate: "270", rateMax: "270", unit: "mL/100L", stage: "Active growth", note: "Use 270 mL/100 L of water for more difficult to control weeds" }
      ]
    },
    {
      crop: "Spot Spraying (Knapsack - easy weeds)",
      cropList: ["Spot Spraying"],
      weeds: [
        { weed: "Easy to kill weeds such as Wild turnip, Mustards and Wild radish", pestList: ["Wild turnip", "Mustards", "Wild radish"], states: ["All"], rate: "130", rateMax: "130", unit: "mL/100L", stage: "Active growth", note: "Use 13 mL/10 L of water for easy to kill weeds (converted to 130 mL/100L)" }
      ]
    },
    {
      crop: "Spot Spraying (Knapsack - difficult weeds)",
      cropList: ["Spot Spraying"],
      weeds: [
        { weed: "Difficult to control weeds such as Docks, Hoary cress and Bindweed", pestList: ["Docks", "Hoary cress", "Bindweed"], states: ["All"], rate: "270", rateMax: "270", unit: "mL/100L", stage: "Active growth", note: "Use 27 mL/10 L of water for more difficult to control weeds (converted to 270 mL/100L)" }
      ]
    },
    {
      crop: "Non-crop areas (Ball mustard)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Ball mustard", pestList: ["Ball mustard"], states: ["SA"], rate: "1150", rateMax: "1150", unit: "mL/ha", stage: "Rosette stage", note: "Apply at rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Bathurst burr)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Bathurst burr", pestList: ["Bathurst burr"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "QLD", "WA"], rate: "660", rateMax: "1350", unit: "mL/ha", stage: "Young seedling stage", note: "Spray young seedlings only" }
      ]
    },
    {
      crop: "Non-crop areas (Black bindweed)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Black bindweed", pestList: ["Black bindweed"], states: ["NSW", "ACT", "QLD", "WA"], rate: "970", rateMax: "1350", unit: "mL/ha", stage: "Young stage prior to flowering", note: "Apply at young stage prior to flowering" }
      ]
    },
    {
      crop: "Non-crop areas (California burr)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "California burr", pestList: ["California burr"], states: ["NSW", "ACT", "TAS"], rate: "660", rateMax: "1450", unit: "mL/ha", stage: "Young seedling stage", note: "Spray young seedlings only" }
      ]
    },
    {
      crop: "Non-crop areas (Cape tulip)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Cape tulip", pestList: ["Cape tulip"], states: ["WA"], rate: "1350", rateMax: "1350", unit: "mL/ha", stage: "Just prior to flowering", note: "Apply just prior to flowering. Gives mild suppression only" }
      ]
    },
    {
      crop: "Non-crop areas (Capeweed)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Capeweed", pestList: ["Capeweed"], states: ["NSW", "ACT", "SA", "TAS", "QLD"], rate: "1450", rateMax: "1450", unit: "mL/ha", stage: "Seedling stage", note: "Apply at seedling stage" }
      ]
    },
    {
      crop: "Non-crop areas (Carrot weed)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Carrot weed", pestList: ["Carrot weed"], states: ["VIC", "QLD"], rate: "1350", rateMax: "1350", unit: "mL/ha", stage: "Seedling stage", note: "Apply at seedling stage" }
      ]
    },
    {
      crop: "Non-crop areas (Charlock)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Charlock", pestList: ["Charlock"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "WA"], rate: "460", rateMax: "1450", unit: "mL/ha", stage: "Rosette stage", note: "Apply at rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Cutleaf mignonette)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Cutleaf mignonette", pestList: ["Cutleaf mignonette"], states: ["SA"], rate: "1450", rateMax: "1450", unit: "mL/ha", stage: "Young rosette stage", note: "Apply at young rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Dandelion)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Dandelion", pestList: ["Dandelion"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "QLD", "WA"], rate: "1350", rateMax: "1350", unit: "mL/ha", stage: "Young rosette stage", note: "Apply at young rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Dead nettle)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Dead nettle", pestList: ["Dead nettle"], states: ["NSW", "ACT", "QLD"], rate: "1450", rateMax: "1450", unit: "mL/ha", stage: "Seedling stage", note: "Moderately susceptible. Apply at seedling stage" }
      ]
    },
    {
      crop: "Non-crop areas (Docks)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Docks", pestList: ["Docks"], states: ["VIC", "SA", "TAS"], rate: "690", rateMax: "1450", unit: "mL/ha", stage: "Rosette stage and before flower heads emerge", note: "Apply at rosette stage and before flower heads emerge. Only the top growth of old established plants will be affected" }
      ]
    },
    {
      crop: "Non-crop areas (Fat hen)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Fat hen", pestList: ["Fat hen"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "WA"], rate: "660", rateMax: "1350", unit: "mL/ha", stage: "Up to rosette stage", note: "Spray up to rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Fennel)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Fennel", pestList: ["Fennel"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "QLD"], rate: "1800", rateMax: "1800", unit: "mL/ha", stage: "Young stage", note: "Apply at young stage" }
      ]
    },
    {
      crop: "Non-crop areas (Field bindweed)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Field bindweed", pestList: ["Field bindweed"], states: ["VIC", "SA", "TAS", "QLD"], rate: "1350", rateMax: "1350", unit: "mL/ha", stage: "Bud stage, repeating over several seasons", note: "Apply at bud stage, repeating over several seasons" }
      ]
    },
    {
      crop: "Non-crop areas (Field cress)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Field cress", pestList: ["Field cress"], states: ["SA"], rate: "1450", rateMax: "1450", unit: "mL/ha", stage: "Young stage", note: "Apply at young stage" }
      ]
    },
    {
      crop: "Non-crop areas (Flatweed or Cat's-ear)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Flatweed or Cat's-ear", pestList: ["Flatweed", "Cat's-ear"], states: ["SA", "WA"], rate: "930", rateMax: "1450", unit: "mL/ha", stage: "10-15cm high", note: "Apply when weeds are 10-15cm high" }
      ]
    },
    {
      crop: "Non-crop areas (Fumitory)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Fumitory (red)", pestList: ["Fumitory"], states: ["VIC", "NSW", "ACT", "SA", "QLD"], rate: "930", rateMax: "930", unit: "mL/ha", stage: "Young stage prior to flowering", note: "Apply at young stage prior to flowering" }
      ]
    },
    {
      crop: "Non-crop areas (Hoary cress)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Hoary cress", pestList: ["Hoary cress"], states: ["VIC", "SA", "QLD"], rate: "1450", rateMax: "3000", unit: "mL/ha", stage: "Before flowering", note: "Apply before flowering" }
      ]
    },
    {
      crop: "Non-crop areas (Horehound)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Horehound", pestList: ["Horehound"], states: ["NSW", "ACT", "SA"], rate: "1450", rateMax: "2000", unit: "mL/ha", stage: "Rosette stage", note: "Apply at rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Hedge mustard)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Hedge mustard", pestList: ["Hedge mustard"], states: ["VIC", "SA", "TAS", "QLD", "WA"], rate: "460", rateMax: "825", unit: "mL/ha", stage: "Rosette stage", note: "Apply at rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Hexham scent or Melilotus)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Hexham scent or Melilotus", pestList: ["Hexham scent", "Melilotus"], states: ["VIC", "NSW", "ACT", "SA", "QLD"], rate: "800", rateMax: "960", unit: "mL/ha", stage: "Young seedling stage", note: "Apply at young seedling stage" }
      ]
    },
    {
      crop: "Non-crop areas (Lesser swinecress)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Lesser swinecress", pestList: ["Lesser swinecress"], states: ["SA"], rate: "1450", rateMax: "1450", unit: "mL/ha", stage: "Young stage", note: "Apply at young stage" }
      ]
    },
    {
      crop: "Non-crop areas (Lincoln weed)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Lincoln weed", pestList: ["Lincoln weed"], states: ["SA"], rate: "460", rateMax: "460", unit: "mL/ha", stage: "Rosette stage", note: "Apply at rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (London rocket)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "London rocket", pestList: ["London rocket"], states: ["WA"], rate: "825", rateMax: "825", unit: "mL/ha", stage: "Rosette stage", note: "Apply at rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Lupins)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Lupins", pestList: ["Lupins"], states: ["NSW", "ACT", "WA"], rate: "460", rateMax: "960", unit: "mL/ha", stage: "Up to 10cm high", note: "Spray up to 10cm high" }
      ]
    },
    {
      crop: "Non-crop areas (Mintweed)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Mintweed", pestList: ["Mintweed"], states: ["VIC", "NSW", "ACT", "QLD"], rate: "1350", rateMax: "1350", unit: "mL/ha", stage: "Young seedling stage", note: "Spray young seedlings only" }
      ]
    },
    {
      crop: "Non-crop areas (Mustards)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Mustards", pestList: ["Mustards"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "WA"], rate: "660", rateMax: "825", unit: "mL/ha", stage: "Up to rosette stage", note: "Spray up to rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Noogoora burr)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Noogoora burr", pestList: ["Noogoora burr"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "QLD", "WA"], rate: "660", rateMax: "1350", unit: "mL/ha", stage: "Young seedling stage", note: "Spray young seedlings only" }
      ]
    },
    {
      crop: "Non-crop areas (Opium poppy)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Opium poppy", pestList: ["Opium poppy"], states: ["SA"], rate: "1450", rateMax: "1450", unit: "mL/ha", stage: "Young stage", note: "Apply at young stage" }
      ]
    },
    {
      crop: "Non-crop areas (Paterson's curse)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Paterson's curse", pestList: ["Paterson's curse"], states: ["NSW", "ACT", "QLD"], rate: "660", rateMax: "2700", unit: "mL/ha", stage: "Early rosette stage", note: "Apply early rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Pimpernel)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Pimpernel", pestList: ["Pimpernel"], states: ["SA"], rate: "460", rateMax: "460", unit: "mL/ha", stage: "Rosette stage", note: "Apply at rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Plantains)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Plantains", pestList: ["Plantains"], states: ["NSW", "ACT", "SA", "TAS"], rate: "1350", rateMax: "1350", unit: "mL/ha", stage: "Young stage", note: "Apply at young stage" }
      ]
    },
    {
      crop: "Non-crop areas (Rapeseed)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Rapeseed", pestList: ["Rapeseed"], states: ["NSW", "ACT"], rate: "660", rateMax: "960", unit: "mL/ha", stage: "Up to rosette stage", note: "Spray up to rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Rough poppy)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Rough poppy", pestList: ["Rough poppy"], states: ["NSW", "ACT"], rate: "460", rateMax: "960", unit: "mL/ha", stage: "Up to rosette stage", note: "Spray up to rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Safflower)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Safflower", pestList: ["Safflower"], states: ["NSW", "ACT"], rate: "460", rateMax: "660", unit: "mL/ha", stage: "Up to rosette stage", note: "Spray up to rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Shepherd's purse)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Shepherd's purse", pestList: ["Shepherd's purse"], states: ["SA"], rate: "1450", rateMax: "1450", unit: "mL/ha", stage: "Rosette stage", note: "Apply at rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Skeleton weed)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Skeleton weed", pestList: ["Skeleton weed"], states: ["NSW", "ACT"], rate: "960", rateMax: "1350", unit: "mL/ha", stage: "Rosettes before aerial growth commences", note: "Spray rosettes before aerial growth commences" }
      ]
    },
    {
      crop: "Non-crop areas (Sorrel)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Sorrel", pestList: ["Sorrel"], states: ["SA"], rate: "1450", rateMax: "1450", unit: "mL/ha", stage: "Rosette stage", note: "Apply to rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Stinkwort)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Stinkwort", pestList: ["Stinkwort"], states: ["VIC", "NSW", "ACT", "SA", "WA"], rate: "660", rateMax: "1350", unit: "mL/ha", stage: "10-15cm high", note: "Apply when weeds are 10-15cm high" }
      ]
    },
    {
      crop: "Non-crop areas (Sunflower seedlings)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Sunflower (seedlings)", pestList: ["Sunflower"], states: ["NSW", "ACT"], rate: "690", rateMax: "1000", unit: "mL/ha", stage: "Up to rosette stage", note: "Spray up to rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Artichoke thistle)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Thistles - Artichoke", pestList: ["Artichoke thistle"], states: ["VIC", "SA", "TAS", "WA"], rate: "460", rateMax: "1450", unit: "mL/ha", stage: "Rosette stage", note: "Apply at rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Nodding thistle)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Thistles - Nodding", pestList: ["Nodding thistle"], states: ["NSW", "ACT"], rate: "1650", rateMax: "1650", unit: "mL/ha", stage: "Early rosettes", note: "Spray early rosettes. Repeat spray required in following Spring or Autumn" }
      ]
    },
    {
      crop: "Non-crop areas (Saffron thistle)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Thistles - Saffron", pestList: ["Saffron thistle"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "QLD", "WA"], rate: "660", rateMax: "1650", unit: "mL/ha", stage: "Up to rosette stage", note: "Spray up to rosette stage. (September WA)" }
      ]
    },
    {
      crop: "Non-crop areas (Scotch or Cotton thistle)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Thistles - Scotch or Cotton", pestList: ["Scotch thistle", "Cotton thistle"], states: ["VIC", "NSW", "ACT", "SA", "TAS"], rate: "460", rateMax: "1450", unit: "mL/ha", stage: "Seedling stage", note: "Apply at seedling stage" }
      ]
    },
    {
      crop: "Non-crop areas (Slender thistle)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Thistles - Slender", pestList: ["Slender thistle"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "WA"], rate: "660", rateMax: "2000", unit: "mL/ha", stage: "Young seedling stage", note: "Spray young seedlings only" }
      ]
    },
    {
      crop: "Non-crop areas (Soldier thistle)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Thistles - Soldier", pestList: ["Soldier thistle"], states: ["VIC", "SA"], rate: "730", rateMax: "730", unit: "mL/ha", stage: "Young seedling stage", note: "Spray young seedlings. Use higher rate for larger weeds" }
      ]
    },
    {
      crop: "Non-crop areas (Spear thistle)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Thistles - Spear", pestList: ["Spear thistle"], states: ["NSW", "ACT", "TAS"], rate: "960", rateMax: "1450", unit: "mL/ha", stage: "Rosette stage", note: "Apply at rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Star thistle)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Thistles - Star", pestList: ["Star thistle"], states: ["SA"], rate: "730", rateMax: "930", unit: "mL/ha", stage: "Seedling stage", note: "Apply at seedling stage. Use higher rate for larger weeds" }
      ]
    },
    {
      crop: "Non-crop areas (Variegated thistle)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Thistles - Variegated", pestList: ["Variegated thistle"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "QLD", "WA"], rate: "460", rateMax: "1350", unit: "mL/ha", stage: "Young seedling stage", note: "Spray young seedlings only. Use 1.35L/ha (SA) for well developed weeds" }
      ]
    },
    {
      crop: "Non-crop areas (Turnip weed)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Turnip weed", pestList: ["Turnip weed"], states: ["VIC", "NSW", "ACT", "SA"], rate: "660", rateMax: "730", unit: "mL/ha", stage: "Up to rosette stage", note: "Spray up to rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Wild artichoke)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Wild artichoke", pestList: ["Wild artichoke"], states: ["SA"], rate: "1450", rateMax: "1450", unit: "mL/ha", stage: "Rosette stage", note: "Apply at rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Wild radish)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Wild radish", pestList: ["Wild radish"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "QLD", "WA"], rate: "460", rateMax: "930", unit: "mL/ha", stage: "Up to rosette stage", note: "Spray up to rosette stage" }
      ]
    },
    {
      crop: "Non-crop areas (Wild turnip)",
      cropList: ["Non-crop areas"],
      weeds: [
        { weed: "Wild turnip", pestList: ["Wild turnip"], states: ["VIC", "NSW", "ACT", "SA", "TAS", "QLD", "WA"], rate: "460", rateMax: "1350", unit: "mL/ha", stage: "Up to rosette stage", note: "Spray up to rosette stage" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply if crop or weeds are stressed due to dry or excessively moist conditions",
    "DO NOT apply if rain is likely within 6 hours",
    "DO NOT apply by a vertical sprayer",
    "DO NOT allow bystanders to come into contact with the spray cloud",
    "DO NOT apply in a manner that may cause unacceptable impact to native vegetation, agricultural crops, landscaped gardens and aquaculture production, or cause contamination of plant or livestock commodities from spray drift",
    "DO NOT apply unless wind speed is between 3 and 20 kilometres per hour at application site during time of application",
    "DO NOT apply if hazardous surface temperature inversion conditions exist at application site during time of application",
    "DO NOT spray crops or weeds outside the stages indicated in Critical Comments as damage, loss of yield or inadequate weed control may result",
    "DO NOT spray in high winds"
  ],

  compatibility: {
    compatible:   ["Diflufenican 500g/L SC", "Associate", "Diuron 900 WG formulations", "Nufarm Kamba 750", "Nufarm Bromicide 200", "Nufarm Archer 750 Herbicide", "Revolver", "Igran 500 Flowable", "Trooper"],
    incompatible: ["Not specified"],
    notes:        ["The effectiveness of Imidan and Dimethoate may be reduced by alkaline hydrolysis if tank mixed with this product. For these situations, the addition of COLLIDE 700 is recommended. When tank mixing, add the required amount of compatible product (and surfactant if recommended) when the spray tank is nearly full and while continuously agitating. If left overnight, agitate thoroughly before spraying"]
  },

  withholding: {
    harvest: "Withholding period NOT required when used as directed (cereals and oilseed poppies have specific restrictions)",
    grazing: "DO NOT graze or cut for stock food for 7 days after application (cereals and pastures). Observe withholding period of at least 7 days after spraying for spray/graze situations"
  },

  surfactant:     "Not specified",
  sprayerCleanup: "Triple-rinse containers before disposal. Add rinsings to spray tank. DO NOT dispose of undiluted chemicals on site. If recycling, replace cap and return clean containers to recycler or designated collection point. If not recycling, break, crush, or puncture and deliver empty packaging to an approved waste management facility. If an approved waste management facility is not available, bury the empty packaging 500 mm below the surface in a disposal pit specifically marked and set up for this purpose, clear of waterways, desirable vegetation and tree roots, in compliance with relevant local, state or territory government regulations. DO NOT burn empty containers or product"
};
