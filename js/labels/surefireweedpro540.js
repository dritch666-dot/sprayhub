// ─────────────────────────────────────────────────────────────────────────────
// SUREFIRE WEEDPRO 540 BIO HERBICIDE — Label Data
// Herbicide | Liquid
// Source: PCT_Holdings_Surefire_Weedpro_540_Bio_Herbicide_Label.pdf
// APVMA Approval No: 70106/125311
// PCT Holdings Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['surefireweedpro540'] = {
  name:             "Surefire WeedPro 540 Bio Herbicide",
  company: "Surefire",

  category:         "Herbicides",
  activeIngredient: "540 g/L Glyphosate (present as the isopropylamine salt)",
  group:            "Group M Herbicide",
  modeOfAction:     "Non-selective herbicide; inhibits EPSP synthase enzyme; translocated through plant to root system causing death",
  formulation:      "Liquid",
  color:            "#92400e",
  apvma:            "70106",
  labelPdf:         "Source labels/Pct_Holdings_Surefire_Weedpro_540_Bio_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/Surefire_Weedpro_540_Bio_Herbicide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Herbicide",
    target: ["Annual and perennial weeds", "Aquatic weeds"],
    timing: ["Post-emergent", "Pre-sowing"]
  },

  crops: [
    {
      crop: "Southern Australia Before sowing a crop or pasture For weed control prior to sowing a crop or pasture with full soil disturbance by cultivation or sowing with a tined implement.",
      cropList: ["Southern Australia Before sowing a crop or pasture For weed control prior to sowing a crop or pasture with full soil disturbance by cultivation or sowing with a tined implement."],
      weeds: [
        { weed: "Barley grass, brome grass, volunteer cereals, wild oats", pestList: ["Barley Grass", "Brome Grass", "Volunteer Cereals", "Wild Oats"], states: ["All"], rate: "330", rateMax: "660", unit: "mL/ha", notes: "Use the higher rate when applying in cold/overcast conditions or when applying late in the season. Use the lower rate on young weeds and the higher rate on mature weeds i.e. fully tillered grasses, or broadleaf weeds at budding or stem elongation. If weeds have been grazed heavily remove stock prior to spraying to ensure regrowth to 6- 8 cm before treatment and use the higher rate. To allow for herbicide uptake DO NOT begin sowing for 1 day after application for annual weeds and 7-10 days for..." },
        { weed: "Annual phalaris, annual ryegrass, silver grass, winter grass", pestList: ["Annual Phalaris", "Annual Ryegrass", "Silver Grass", "Winter Grass"], states: ["All"], rate: "660", rateMax: "850", unit: "mL/ha" },
        { weed: "Capeweed, doublegee (spiny emex)", pestList: ["Capeweed", "Doublegee (Spiny Emex)"], states: ["All"], rate: "330", rateMax: "660", unit: "mL/ha" },
        { weed: "Amsinkia, fumitory, Paterson's curse (Salvation Jane), saffron thistle, scotch thistle, spear thistle, variegated thistle, volunteer lupins, wild turnip", pestList: ["Amsinkia", "Fumitory", "Paterson\u2019S Curse (Salvation Jane)", "Saffron Thistle", "Scotch Thistle", "Spear Thistle", "Variegated Thistle", "Volunteer Lupins", "Wild Turnip"], states: ["All"], rate: "660", rateMax: "850", unit: "mL/ha" },
        { weed: "Dock (seedling)", pestList: ["Dock (Seedling)"], states: ["All"], rate: "660", rateMax: "950", unit: "mL/ha" },
        { weed: "Perennial phalaris, sorrel sub-clover, soursob, skeleton weed – fully emerged rosettes (NSW only)", pestList: ["Perennial Phalaris", "Sorrel Sub-Clover", "Soursob", "Skeleton Weed \u2013 Fully Emerged Rosettes (Nsw Only)"], states: ["All"], rate: "950", rateMax: "950", unit: "mL/ha" },
        { weed: "All weeds listed above (for other States)", pestList: [], states: ["All"], rate: "950", rateMax: "1900", unit: "mL/ha", rateText: "950 mL-1.9 L/ha", notes: "TASMANIA ONLY: Use 950 mL/ha on annual weeds and 1.9 L/ha on perennial weeds. The product may also be tank mixed with dicamba (200 g/L) to improve control of sorrel, dock and white clover. Observe dicamba label directions and plant-back periods. Addition of a high quality non-ionic surfactant at the rate recommended on the label for that product may improve control." }
      ]
    },
    {
      crop: "Southern Australia Before sowing a crop or pasture For weed control prior to sowing a crop or pasture with minimal or no soil disturbance",
      cropList: ["Southern Australia Before sowing a crop or pasture For weed control prior to sowing a crop or pasture with minimal or no soil disturbance"],
      weeds: [
        { weed: "Barley grass, volunteer cereals, wild oats", pestList: ["Barley Grass", "Volunteer Cereals", "Wild Oats"], states: ["All"], rate: "660", rateMax: "950", unit: "mL/ha", notes: "Use the higher rate when applying in cold/overcast conditions, or when applying late in the season. Use the lower rate on young weeds and the higher rate on mature weeds, i.e. fully tillered grasses, or broadleaf weeds at budding or stem elongation. If weeds have been grazed heavily remove stock prior to spraying to ensure regrowth to 6-8 cm before treatment and use the higher rate. Annual ryegrass, silver grass and perennial grasses – it is recommended to use a water volume of 70 L/ha or mor..." },
        { weed: "Brome grass, capeweed, variegated thistle, winter grass", pestList: ["Brome Grass", "Capeweed", "Variegated Thistle", "Winter Grass"], states: ["All"], rate: "850", rateMax: "850", unit: "mL/ha" },
        { weed: "Annual ryegrass, Paterson's curse (Salvation Jane), saffron thistle, scotch thistle, silver grass, spear thistle, wild mustard, wild turnip", pestList: ["Annual Ryegrass", "Paterson\u2019S Curse (Salvation Jane)", "Saffron Thistle", "Scotch Thistle", "Silver Grass", "Spear Thistle", "Wild Mustard", "Wild Turnip"], states: ["All"], rate: "950", rateMax: "1250", unit: "mL/ha", rateText: "950 mL- 1.25 L/ha"},
        { weed: "Erodium, plantain, perennial phalaris, sorrel, sub-clover", pestList: ["Erodium", "Plantain", "Perennial Phalaris", "Sorrel", "Sub-Clover"], states: ["All"], rate: "1150", rateMax: "1700", unit: "mL/ha", rateText: "1.15- 1.7 L/ha"},
        { weed: "Dock, Flat weed", pestList: ["Dock", "Flat Weed"], states: ["All"], rate: "1700", rateMax: "1700", unit: "mL/ha", rateText: "1.7 L/ha"},
        { weed: "All weeds listed above", pestList: [], states: ["All"], rate: "950", rateMax: "1900", unit: "mL/ha", rateText: "950 mL- 1.9 L/ha", notes: "TASMANIA ONLY: Use 950 mL/ha on annual weeds and 1.9 L/ha on perennial weeds. The product may also be tank mixed with dicamba to improve control of sorrel, dock and white clover. Observe dicamba label directions and plant-back periods. The addition of a high quality non-ionic surfactant at the rate recommended on the label for that product may improve control." }
      ]
    },
    {
      crop: "Southern Australia For weed control before a fallow",
      cropList: ["Southern Australia For weed control before a fallow"],
      weeds: [
        { weed: "Barley grass, volunteer cereals, wild oats", pestList: ["Barley Grass", "Volunteer Cereals", "Wild Oats"], states: ["All"], rate: "660", rateMax: "950", unit: "mL/ha", notes: "Use the lower rate on young weeds or where cultivation is to take place within 21 days. Use the higher rate where broadleaf weeds reach stem elongation/budding or where grasses are fully tillered. If weeds have been grazed heavily remove stock prior to spraying to ensure regrowth to 6-8 cm before treatment and use the higher rate. Soursob – Treat at tuber exhaustion Hoary cress – Treat from late rosette to early flowering. Annual ryegrass, silver grass and perennial grasses – it is recommende..." },
        { weed: "Annual ryegrass, brome grass, capeweed, Paterson's curse (Salvation Jane) (rosette), saffron thistle, scotch thistle, silver grass, spear thistle, wild mustard, wild radish wild turnip", pestList: ["Annual Ryegrass", "Brome Grass", "Capeweed", "Paterson\u2019S Curse (Salvation Jane) (Rosette)", "Saffron Thistle", "Scotch Thistle", "Silver Grass", "Spear Thistle", "Wild Mustard", "Wild Radish Wild Turnip"], states: ["All"], rate: "950", rateMax: "1250", unit: "mL/ha", rateText: "950 mL- 1.25 L/ha"},
        { weed: "Hoary cress, soursob", pestList: ["Hoary Cress", "Soursob"], states: ["All"], rate: "950", rateMax: "950", unit: "mL/ha" }
      ]
    },
    {
      crop: "Northern Australia For weed control prior to sowing a summer or winter crop or in a fallow",
      cropList: ["Northern Australia For weed control prior to sowing a summer or winter crop or in a fallow"],
      weeds: [
        { weed: "Annual phalaris, barley grass, volunteer cereals, wild oats", pestList: ["Annual Phalaris", "Barley Grass", "Volunteer Cereals", "Wild Oats"], states: ["All"], rate: "330", rateMax: "660", unit: "mL/ha", notes: "Use the lower rate on young weeds or where cultivation is to take place within 21 days. Use the higher rate where broadleaf weeds reach stem elongation/budding or where grasses are fully tillered. At more advanced stages certain broadleaf weeds may require the higher rate range or the addition of 2,4- D. In winter (cold) conditions, symptoms on deadnettle may be slow to develop. If weeds have been grazed heavily remove stock prior to spraying to ensure regrowth to 6-8 cm before treatment and ..." },
        { weed: "Barnyard grass, liverseed grass, lovegrass/stink grass, sweet summer grass, volunteer sorghum", pestList: ["Barnyard Grass", "Liverseed Grass", "Lovegrass/Stink Grass", "Sweet Summer Grass", "Volunteer Sorghum"], states: ["All"], rate: "660", rateMax: "1350", unit: "mL/ha", rateText: "660 mL-1.35 L/ha"},
        { weed: "Australian bluebell (Qld only) cudweed, fumitory, Mexican poppy, mintweed, New Zealand spinach, *Noogoora burr, saffron thistle, spear thistle, spurge, *variegated thistle, *volunteer sunflower, yellowvine/caltrop, wireweed", pestList: ["Australian Bluebell Cudweed", "Fumitory", "Mexican Poppy", "Mintweed", "New Zealand Spinach", "*Noogoora Burr", "Saffron Thistle", "Spear Thistle", "Spurge", "*Variegated Thistle", "*Volunteer Sunflower", "Yellowvine/Caltrop", "Wireweed"], states: ["All"], rate: "660", rateMax: "950", unit: "mL/ha" },
        { weed: "Boggabri weed, caltrop, Indian hedge mustard, mintweed, summer grass", pestList: ["Boggabri Weed", "Caltrop", "Indian Hedge Mustard", "Mintweed", "Summer Grass"], states: ["All"], rate: "290", rateMax: "660", unit: "mL/ha" },
        { weed: "Annual ground cherry, bladder ketmia, sowthistle, turnip weed, wild lettuce, wild turnip", pestList: ["Annual Ground Cherry", "Bladder Ketmia", "Sowthistle", "Turnip Weed", "Wild Lettuce", "Wild Turnip"], states: ["All"], rate: "660", rateMax: "950", unit: "mL/ha" }
      ]
    },
    {
      crop: "Pasture with poa tussock present as a weed For pasture renovation",
      cropList: ["Pasture with poa tussock present as a weed For pasture renovation"],
      weeds: [
        { weed: "Annual weeds (see Annual Weeds table) and poa tussock", pestList: ["Annual Weeds (See Annual Weeds Table) And Poa Tussock"], states: ["All"], rate: "2000", rateMax: "2650", unit: "mL/ha", rateText: "2.0-2.65 L/ha", notes: "Before spraying * graze heavily * remove stock 14 days or more before treatment * apply after autumn break when plants are actively growing but before frosts begin (March-May) Increasing to the higher rate may give more effective reductions. Sowing of new pasture may begin 14 days after treatment. It is essential that correct follow-up pasture establishment and management occurs after treatment. Spot treatment will limit re-infestation. May be aerially applied." }
      ]
    },
    {
      crop: "Pasture with bent grass present as a weed For control/ suppression of bent grass before sowing a crop or pasture",
      cropList: ["Pasture with bent grass present as a weed For control/ suppression of bent grass before sowing a crop or pasture"],
      weeds: [
        { weed: "Annual weeds (see Annual Weeds table) and bent grass", pestList: ["Annual Weeds (See Annual Weeds Table) And Bent Grass"], states: ["All"], rate: "1700", rateMax: "1700", unit: "mL/ha", rateText: "1.7 L/ha", notes: "Apply late spring when seed heads have developed but before the onset of summer moisture stress. Remove stock prior to spraying to achieve good foliage cover. Ensure plants are actively growing. 10-21 days after spraying fully disturb soil with a tined implement and then sow summer crop and/or re-seeded pasture, or crop the following autumn." }
      ]
    },
    {
      crop: "Pasture topping for the reduction of seed set of annual grasses, capeweed and calomba daisy",
      cropList: ["Pasture topping for the reduction of seed set of annual grasses", "capeweed", "calomba daisy"],
      weeds: [
        { weed: "Annual ryegrass, calomba daisy", pestList: ["Annual Ryegrass", "Calomba Daisy"], states: ["All"], rate: "310", rateMax: "310", unit: "mL/ha", notes: "Use the higher rate for heavy infestation or where annual ryegrass is present. Apply before haying off. Annual ryegrass and capeweed apply at flowering. Other weeds apply at head to milky dough stage. Stock should be removed before spraying to allow regrowth. Pasture legumes may be affected. Do not apply to medic/clover crops to be used for hay or seed. Apply a mixture of 50 L/ha water. Above this water volume add a high quality non-ionic surfactant at the rate recommended on the label..." },
        { weed: "Barley grass, Brome grass, capeweed, silver grass", pestList: ["Barley Grass", "Brome Grass", "Capeweed", "Silver Grass"], states: ["All"], rate: "200", rateMax: "310", unit: "mL/ha" }
      ]
    },
    {
      crop: "Pasture manipulation for the control/ suppression of certain grasses before sowing soybeans, forage crops or leucaena",
      cropList: ["Pasture manipulation for the control/ suppression of certain grasses before sowing soybeans", "forage crops or leucaena"],
      weeds: [
        { weed: "Carpet grass, Kikuyu Paspalum", pestList: ["Carpet Grass", "Kikuyu Paspalum"], states: ["All"], rate: "950", rateMax: "4000", unit: "mL/ha", rateText: "950 mL-4.0 L/ha", notes: "Apply the lower rate for suppression only. The higher rate will provide control. Leucaena – (Qld ONLY) Rows should be 4m apart. Use 1.7 L/ha with single taper fan nozzle LFI-80 mounted at the rear of a single row planter giving a 1m swath." },
        { weed: "Carpet grass, paspalum", pestList: ["Carpet Grass", "Paspalum"], states: ["All"], rate: "950", rateMax: "4000", unit: "mL/ha", rateText: "950 mL-4.0 L/ha"},
        { weed: "Kikuyu", pestList: ["Kikuyu"], states: ["All"], rate: "420", rateMax: "4000", unit: "mL/ha", rateText: "420 mL-4.0 L/ha"},
        { weed: "Black spear grass, wire grasses, love grasses, red natal grass, barbed wire grass", pestList: ["Black Spear Grass", "Wire Grasses", "Love Grasses", "Red Natal Grass", "Barbed Wire Grass"], states: ["All"], rate: "2000", rateMax: "2000", unit: "mL/ha", rateText: "2.0 L/ha"}
      ]
    },
    {
      crop: "Agricultural areas",
      cropList: ["Agricultural areas"],
      weeds: [
        { weed: "See Weeds Controlled Tables for Annual and Perennial Weeds and Brush and Woody Weeds", pestList: ["See Weeds Controlled Tables For Annual And Perennial Weeds And Brush And Woody Weeds"], states: ["All"], rate: "330", rateMax: "2000", unit: "mL/ha", rateText: "See Weeds Controlled tables", notes: "For the control of weeds listed in Weeds Controlled section prior to sowing of any crop." }
      ]
    },
    {
      crop: "Weed Table — All Situations",
      cropList: ["Weed Table \u2014 All Situations"],
      weeds: [
        { weed: "Amaranth, annual ryegrass, barley grass, barnyard grass, brome grass, caltrop, canary grass, capeweed, chickweed, cobbler's peg, fumitory, ground cherry, lesser swinecress, liverseed grass, mintweed, paradoxa grass, Paterson's curse (Salvation Jane), pigweed, potato weed, saffron thistle, silver grass, sowthistle, spear thistle, spiny burr grass, spurge, subterranean clover, variegated thistle, volunteer cereals (barley, wheat, oats, sorghum), wild mustard, wild oats, wild turnip, winter grass", pestList: ["Amaranth", "Annual Ryegrass", "Barley Grass", "Barnyard Grass", "Brome Grass", "Caltrop", "Canary Grass", "Capeweed", "Chickweed", "Cobbler\u2019S Peg", "Fumitory", "Ground Cherry", "Lesser Swinecress", "Liverseed Grass", "Mintweed", "Paradoxa Grass", "Paterson\u2019S Curse (Salvation Jane)", "Pigweed", "Potato Weed", "Saffron Thistle", "Silver Grass", "Sowthistle", "Spear Thistle", "Spiny Burr Grass", "Spurge", "Subterranean Clover", "Variegated Thistle", "Volunteer Cereals (Barley", "Wheat", "Oats", "Sorghum)", "Wild Mustard", "Wild Oats", "Wild Turnip", "Winter Grass"], states: ["All"], rate: "1250", rateMax: "2000", unit: "mL/ha", rateText: "BOOM 1.25-2.0 L/ha HANDGUN 330-460 mL/100 L KNAPSACK 50-70 mL per 15 L", notes: "Apply only to plants which are actively growing and not suffering stress. Use the lower rate for weeds up to 15 cm and the higher rate for weeds over 15 cm. The effects of the product may take 3-7 days to appear under normal conditions and up to 20-30 days in cool conditions. NO residual control will be provided by this product. Germinations after initial treatment may have to be resprayed. For residual control the product should be tank-mixed with a suitable residual herbicide." }
      ]
    }
  ],

  restraints: [
    "DO NOT spray if rainfall expected within 1 hour - may cause runoff",
    "DO NOT disturb treated weeds for 1 day (annual) or 7 days (perennial) after application",
    "DO NOT treat weeds under stress from frost, cold, disease, waterlogging, drought or insect damage",
    "Plants must be actively growing for optimum uptake",
    "DO NOT store mixed solution for more than 2 days",
    "Maximum rate 2.8 L/ha",
    "DO NOT spray in galvanised or unlined steel containers - forms combustible hydrogen gas"
  ],

  compatibility: {
    compatible:   ["Atrazine", "Simazine", "Diuron", "Dicamba", "2,4-D", "Tribenuron-methyl", "Triclopyr", "Chlorsulfuron", "Metsulfuron-methyl", "Oxyfluorfen", "Pendimethalin", "Triasulfuron", "MCPA", "Trifluralin", "Chlorpyrifos", "Dimethoate", "Fenitrothion", "Omethoate"],
    incompatible: [],
    notes:        ["Add ammonium sulphate to minimize antagonism when mixed with flowable triazine herbicides (crystalline form only)"]
  },

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "1 day annual weeds; 7 days perennial weeds (stock should be removed)"
  },

  surfactant:     "High quality non-ionic surfactant may improve control (200-500 mL/100L); essential for aquatic weed control",
  sprayerCleanup: "Use only plastic or plastic-lined stainless steel, aluminium, copper, brass or fibreglass containers; thoroughly wash equipment after use to prevent corrosion"
};
