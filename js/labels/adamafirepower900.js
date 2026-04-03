// ─────────────────────────────────────────────────────────────────────────────
// Adama Firepower 900 — Label Data
// Emulsifiable Concentrate | Herbicide
// Source: Adama_Firepower_900_Herbicide_Label.pdf
// APVMA Approval No: 87107/117566
// Adama
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['adamafirepower900'] = {
  name:             "Adama Firepower 900",
  company: "Adama",

  category:         "Herbicides",
  activeIngredient: "900 g/L Haloxyfop (present as the Haloxyfop-P methyl ester)",
  group:            "Group A Herbicide",
  modeOfAction:     "Acetyl CoA carboxylase (ACCase) inhibitor",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#ea580c",
  apvma:            "87107/117566",
  labelPdf:         "Source labels/Adama_Firepower_900_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/FIREPOWER.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Herbicide",
    target: ["Annual grasses", "Perennial grasses", "Erodium spp."],
    timing: ["Post-emergence"]
  },

  crops: [
    {
      crop: "Winter Crops — Canola, Chickpeas, Faba Beans, Field Peas, Lentils, Linola, Linseed, Lupins, Lucerne, Vetch, Medic and Clover Pastures or Seed Crops, Mustard",
      cropList: ["Winter Crops","Canola","Chickpeas","Faba Beans","Field Peas","Lentils","Linola","Linseed","Lupins","Lucerne","Vetch","Medic And Clover Pastures Or Seed Crops","Mustard"],
      weeds: [
        { weed: "Annual Ryegrass", pestList: ["Annual Ryegrass"], states: ["All"], rate: "45", rateMax: "60", unit: "mL/ha", stage: "2 to 4 leaf (with Uptake Spraying Oil); early tillering 60 mL/ha", note: "Canola, Linola, Linseed and Mustard: DO NOT apply after the 8-leaf stage of the crop or after commencement of stem elongation. DO NOT apply more than 1 application of herbicide containing Haloxyfop per crop" },
        { weed: "Barley Grass, Brome Grass, Paradoxa Grass, Volunteer Cereals", pestList: ["Barley Grass", "Brome Grass", "Paradoxa Grass", "Volunteer Cereals"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/ha", stage: "2 to 4 leaf (30-45 mL/ha); early tillering (45-60 mL/ha)", note: "Rate depends on adjuvant: lower rate with Uptake Spraying Oil, higher rate with non-ionic wetter" },
        { weed: "Wild Oats (WA, SA, Vic, Tas, Southern and Central NSW)", pestList: ["Wild Oats"], states: ["WA", "SA", "Vic", "Tas", "NSW"], rate: "20", rateMax: "45", unit: "mL/ha", stage: "2 to 4 leaf (20-30 mL/ha); early tillering (30-45 mL/ha)", note: "Rate depends on adjuvant used" },
        { weed: "Wild Oats (Northern NSW and Qld)", pestList: ["Wild Oats"], states: ["NSW", "Qld"], rate: "30", rateMax: "60", unit: "mL/ha", stage: "2 to 4 leaf (30-45 mL/ha); early tillering (45-60 mL/ha)", note: "Rate depends on adjuvant used" }
      ]
    },
    {
      crop: "Lucerne, Medic and Clover Seed Crops and Pastures",
      cropList: ["Lucerne","Medic And Clover Seed Crops And Pastures"],
      weeds: [
        { weed: "Prairie Grass (Bromus catharticus)", pestList: ["Prairie Grass"], states: ["All"], rate: "60", rateMax: "60", unit: "mL/ha", stage: "Up to early tillering", note: "With Uptake Spraying Oil" },
        { weed: "Musky or Ferny Leaf Storksbill (Erodium moschatum), Common Crowsfoot or Common Storksbill (Erodium cicutarium)", pestList: ["Musky or Ferny Leaf Storksbill", "Common Crowsfoot or Common Storksbill"], states: ["All"], rate: "30", rateMax: "45", unit: "mL/ha", stage: "Up to 6 leaf or 5 cm diameter", note: "Use lower rate when growing conditions and crop competition are good and weed populations below 100 plants/m². Use higher rate when populations above 100 plants/m² or when crop competition is poor" },
        { weed: "Long or Shiny Leaf Storksbill (Erodium botrys)", pestList: ["Long or Shiny Leaf Storksbill"], states: ["All"], rate: "45", rateMax: "60", unit: "mL/ha", stage: "Up to 8 leaf or 5 cm diameter", note: "With Uptake Spraying Oil" },
        { weed: "Couch Grass (suppression), Rhodes Grass (control)", pestList: ["Couch Grass", "Rhodes Grass"], states: ["All"], rate: "90", rateMax: "90", unit: "mL/ha", stage: "Tillering seedlings", note: "Seed crops only — not for stockfeed. For best suppression of Couch or control of Rhodes grass, make 2 applications 2-4 weeks apart. Time second application to coincide with tillering stage and just after irrigation or significant rain" },
        { weed: "Couch Grass (control), Rhodes Grass (control) — established stands", pestList: ["Couch Grass", "Rhodes Grass — Established Stands"], states: ["All"], rate: "230", rateMax: "460", unit: "mL/ha", stage: "Established stands", note: "Seed crops only — not for stockfeed. Only treat actively growing weeds which are not moisture stressed" }
      ]
    },
    {
      crop: "Summer Crops — Adzuki Bean, Cotton, Cowpea, Lucerne, Mung Bean, Navy Beans, Peanuts, Soybeans, Sunflowers",
      cropList: ["Summer Crops","Adzuki Bean","Cotton","Cowpea","Lucerne","Mung Bean","Navy Beans","Peanuts","Soybeans","Sunflowers"],
      weeds: [
        { weed: "Australian Millet", pestList: ["Australian Millet"], states: ["All"], rate: "90", rateMax: "90", unit: "mL/ha", stage: "2 leaf to tillering up to 15 cm", note: "With Uptake Spraying Oil" },
        { weed: "Barnyard Grass", pestList: ["Barnyard Grass"], states: ["All"], rate: "60", rateMax: "90", unit: "mL/ha", stage: "2 to 5 leaf (60 mL/ha); tillering up to 15 cm (90 mL/ha)", note: "With Uptake Spraying Oil" },
        { weed: "Crowsfoot Grass, Green Panic, Johnson Grass (Rhizome)", pestList: ["Crowsfoot Grass", "Green Panic", "Johnson Grass"], states: ["All"], rate: "90", rateMax: "90", unit: "mL/ha", stage: "2 leaf to tillering up to 15 cm", note: "With Uptake Spraying Oil" },
        { weed: "Johnson Grass (seedling), Liverseed Grass (seedling), Mossman River Grass", pestList: ["Johnson Grass", "Liverseed Grass", "Mossman River Grass"], states: ["All"], rate: "60", rateMax: "90", unit: "mL/ha", stage: "2 to 5 leaf (60 mL/ha); tillering up to 15 cm (90 mL/ha)", note: "With Uptake Spraying Oil" },
        { weed: "Summer Grass", pestList: ["Summer Grass"], states: ["All"], rate: "90", rateMax: "90", unit: "mL/ha", stage: "2 leaf to tillering up to 15 cm", note: "With Uptake Spraying Oil" },
        { weed: "Volunteer Cereals", pestList: ["Volunteer Cereals"], states: ["All"], rate: "60", rateMax: "90", unit: "mL/ha", stage: "2 to 4 leaf (60 mL/ha); tillering up to 15 cm (90 mL/ha)", note: "With Uptake Spraying Oil. Navy Beans, Peanuts, Soybeans: may tank mix with Ardeo or Broadstar (except navy beans). DO NOT add Uptake Spraying Oil when mixing with Ardeo or Broadstar. DO NOT use Ardeo or Broadstar tank-mixes on Cowpea" }
      ]
    },
    {
      crop: "Orchard, Vine and Plantation Crops (Apples, Avocado, Banana, Blueberry, Citrus, Custard apple, Feijoa, Grapevines, Guava, Kiwifruit, Litchi, Longan, Mango, Nashi, Nut trees, Passionfruit, Paw Paw, Pear, Persimmon, Pineapple, Rambutan, Stone Fruit)",
      cropList: ["Orchard","Vine And Plantation Crops","Apples","Avocado","Banana","Blueberry","Citrus","Custard Apple","Feijoa","Grapevines","Guava","Kiwifruit","Litchi","Longan","Mango","Nashi","Nut Trees","Passionfruit","Paw Paw","Pear","Persimmon","Pineapple","Rambutan","Stone Fruit"],
      weeds: [
        { weed: "Perennial Grasses: Couch, Rhodes Grass, Slender Rats Tail Grass — established stands", pestList: ["Perennial Grasses: Couch", "Rhodes Grass", "Slender Rats Tail Grass — Established Stands"], states: ["All"], rate: "230", rateMax: "460", unit: "mL/ha", stage: "Established stands", note: "Spray should be directed to the base of the tree or vine avoiding contact with fruit and foliage. With Uptake Spraying Oil" },
        { weed: "Buffel Grass, Green Panic, Johnson Grass, Kikuyu, Paspalum spp., Setaria spp.", pestList: ["Buffel Grass", "Green Panic", "Johnson Grass", "Kikuyu", "Paspalum Spp.", "Setaria Spp."], states: ["All"], rate: "115", rateMax: "230", unit: "mL/ha", stage: "Vegetative to early tillering (115 mL/ha); late tillering (230 mL/ha)", note: "Spray directed to base of tree or vine. With Uptake Spraying Oil" },
        { weed: "Annual Grasses: Annual Ryegrass, Barley Grass, Barnyard Grass, Brome Grass, Crowsfoot Grass, Lesser Canary Grass, Liverseed Grass, Mossman River Grass, Paradoxa Grass, Summer Grass, Volunteer Cereals, Wild Oats", pestList: ["Annual Grasses: Annual Ryegrass", "Barley Grass", "Barnyard Grass", "Brome Grass", "Crowsfoot Grass", "Lesser Canary Grass", "Liverseed Grass", "Mossman River Grass", "Paradoxa Grass", "Summer Grass", "Volunteer Cereals", "Wild Oats"], states: ["All"], rate: "115", rateMax: "115", unit: "mL/ha", stage: "2 leaf to tillering", note: "Where treated in association with perennial grasses, these annual grasses will be controlled. With Uptake Spraying Oil" }
      ]
    },
    {
      crop: "Forestry — Pinus radiata, Eucalyptus spp.",
      cropList: ["Forestry","Pinus Radiata","Eucalyptus Spp."],
      weeds: [
        { weed: "Annual grasses as per Orchard crops", pestList: ["Annual Grasses as per Orchard Crops"], states: ["All"], rate: "115", rateMax: "115", unit: "mL/ha", stage: "2 leaf to tillering", note: "For annual grasses apply lowest rate to newly emerged grasses, increasing the rate as they develop. With Uptake Spraying Oil" }
      ]
    },
    {
      crop: "Forestry — Pinus pineaster",
      cropList: ["Forestry","Pinus Pineaster"],
      weeds: [
        { weed: "Annual grasses", pestList: ["Annual Grasses"], states: ["All"], rate: "70", rateMax: "145", unit: "mL/ha", stage: "Vegetative to tillering", note: "Phytotoxicity has not been tested for all tree species. Consult ADAMA representative for phytotoxicity issues prior to application" }
      ]
    },
    {
      crop: "Forestry — Pinus elliotii, Pinus carrabea hybrids and subspecies, hardwood and softwood plantation",
      cropList: ["Forestry","Pinus Elliotii","Pinus Carrabea Hybrids And Subspecies","Hardwood And Softwood Plantation"],
      weeds: [
        { weed: "Annual and Perennial grasses", pestList: ["Annual and Perennial Grasses"], states: ["All"], rate: "70", rateMax: "460", unit: "mL/ha", stage: "Vegetative to tillering", note: "Rate depends on weed type and growth stage" }
      ]
    },
    {
      crop: "Sandalwood plantations",
      cropList: ["Sandalwood Plantations"],
      weeds: [
        { weed: "Annual and Perennial grasses, Kikuyu", pestList: ["Annual and Perennial Grasses", "Kikuyu"], states: ["All"], rate: "115", rateMax: "115", unit: "mL/ha", stage: "As per orchard crops", note: "Apply post-planting in Spring or Autumn" }
      ]
    },
    {
      crop: "Pyrethrum",
      cropList: ["Pyrethrum"],
      weeds: [
        { weed: "Barley Grass, Brome Grass, Rope Twitch, Barnard Grass, Erodium spp., Volunteer Cereals", pestList: ["Barley Grass", "Brome Grass", "Rope Twitch", "Barnard Grass", "Erodium Spp.", "Volunteer Cereals"], states: ["Tas"], rate: "60", rateMax: "145", unit: "mL/ha", stage: "Vegetative to tillering", note: "Tasmania only. For Erodium spp. apply 45-60 mL/ha if the main weed is E. botrys. Use 30-45 mL/ha if either E. cicutarium or E. moschatum are the main weeds" }
      ]
    },
    {
      crop: "Firepower 900 + Platinum Xtra 360 Tank-Mixes — Canola, Chickpeas, Faba beans, Field peas, Lupins, Lentils",
      cropList: ["Firepower 900 + Platinum Xtra 360 Tank-Mixes","Canola","Chickpeas","Faba Beans","Field Peas","Lupins","Lentils"],
      weeds: [
        { weed: "FOP/DIM susceptible Annual Ryegrass + Volunteer Barley, Volunteer Wheat, Brome Grass, Wild Oats, Barley Grass, Phalaris", pestList: ["FOP/DIM Susceptible Annual Ryegrass + Volunteer Barley", "Volunteer Wheat", "Brome Grass", "Wild Oats", "Barley Grass", "Phalaris"], states: ["All"], rate: "15", rateMax: "20", unit: "mL/ha", stage: "2 to 4 leaf (15 mL Firepower + 90 mL Platinum Xtra); early tillering (20 mL Firepower + 90 mL Platinum Xtra)", note: "Use Uptake Spraying Oil at 500 mL/100L or Hasten at 0.5-1 L/100L. Apply at same crop growth stages as winter crops. Lentils: apply up to 7 node-early branching. Lupins: Not for Qld" },
        { weed: "FOP resistant Annual Ryegrass + Volunteer Barley, Volunteer Wheat, Brome Grass, Wild Oats, Barley Grass, Phalaris", pestList: ["FOP Resistant Annual Ryegrass + Volunteer Barley", "Volunteer Wheat", "Brome Grass", "Wild Oats", "Barley Grass", "Phalaris"], states: ["All"], rate: "15", rateMax: "20", unit: "mL/ha", stage: "2 to 4 leaf (15 mL Firepower + 115 mL Platinum Xtra); early tillering (20 mL Firepower + 145 mL Platinum Xtra)", note: "Use Uptake Spraying Oil at 500 mL/100L or Hasten at 0.5-1 L/100L" }
      ]
    },
    {
      crop: "Summer Fallow",
      cropList: ["Summer Fallow"],
      weeds: [
        { weed: "Awnless Barnyard Grass, Barnyard Grass, Button Grass, Crowsfoot Grass, Feathertop Rhodes Grass, Liverseed Grass, Rhodes Grass, Summer Grass, Sweet Summer Grass, Stink Grass, Windmill Grass", pestList: ["Awnless Barnyard Grass", "Barnyard Grass", "Button Grass", "Crowsfoot Grass", "Feathertop Rhodes Grass", "Liverseed Grass", "Rhodes Grass", "Summer Grass", "Sweet Summer Grass", "Stink Grass", "Windmill Grass"], states: ["All"], rate: "90", rateMax: "90", unit: "mL/ha", stage: "2 leaf to early tillering (Z12 to Z22)", note: "With Uptake Spraying Oil. Only treat actively growing weeds not under temperature or moisture stress. Must be followed by paraquat at 1.6-2.4 L/ha, 7-14 days after Firepower application (required for resistance management). Min 70 L/ha water volume with medium spray droplets. One application per season only. DO NOT plant cereal crops for 12 weeks after application" }
      ]
    },
    {
      crop: "Non-Agricultural Areas, Domestic and Public Service Areas, Commercial and Industrial Areas, Bushland/Native Forests, Roadsides, Rights of Way, Vacant Lots, Wastelands, Wetlands, Dunal and Coastal Areas (Qld only)",
      cropList: ["Non-Agricultural Areas","Domestic And Public Service Areas","Commercial And Industrial Areas","Bushland/Native Forests","Roadsides","Rights Of Way","Vacant Lots","Wastelands","Wetlands","Dunal And Coastal Areas"],
      weeds: [
        { weed: "Annual and Perennial Grasses as approved for other uses", pestList: ["Annual and Perennial Grasses as Approved for Other Uses"], states: ["Qld"], rate: "60", rateMax: "460", unit: "mL/ha", stage: "As per other approved uses", note: "With Uptake Spraying Oil. Spot spray: 0.6-4.3 mL/15 L water OR 3.5-30 mL/100 L water OR 60-460 mL/ha" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply to weeds which may be stressed (not actively growing) due to prolonged periods of extreme cold, moisture stress (waterlogged or drought affected), poor nutrition or previous herbicide treatment as reduced levels of control may result",
    "DO NOT spray if rain is likely to occur within one hour"
  ],

  compatibility: {
    compatible:   ["Uptake Spraying Oil (0.5 L/100L)", "Hotwire Spraying Oil", "Non-ionic wetters (BS-1000, Wetspray 1000 at 200 mL/100L)", "Dimethoate", "Strike-Out 500 EC", "Orbit 290 SL", "Farmozine", "Broadstar", "Ardeo", "Broadstrike", "Victory", "Victory 750 SG", "MCPA Ester (LVE) — DO NOT exceed 700 mL/ha", "Cameo", "Platinum", "Platinum Xtra 360", "Simanex", "Flagship", "Flagship 400", "Mancozeb 750 DF", "Dithane Rainshield", "Magnesium sulphate", "Zinc sulphate"],
    incompatible: ["2,4-D", "MCPA as sodium or amine salts"],
    notes:        ["Aerial use: No product other than recommended crop oil or wetter should be mixed with Firepower 900 except Victory or Simanex or Farmozine for forestry, and Victory 750 SG in canola only"]
  },

  withholding: {
    harvest: "Adzuki Beans, Canola, Chickpeas, Cotton, Cowpea, Faba Beans, Field Peas, Lentils, Linola, Linseed, Lupins, Mung Beans, Mustard, Navy Beans, Orchard Crops, Peanuts, Plantation Crops, Soybeans, Sunflowers, Vetch or Vine Crops: NOT REQUIRED WHEN USED AS DIRECTED. Medic and Clover Seed Crops: DO NOT harvest for 7 days after application",
    grazing: "Adzuki Beans, Canola, Chickpeas, Cotton, Cowpea, Faba Beans, Field Peas, Lentils, Linola, Linseed, Lupins, Mung Beans, Mustard, Navy Beans, Peanuts, Soybeans, Sunflowers and Vetch: DO NOT graze or cut for stock food for 28 days after application. Lucerne: 21 days. Medic and Clover Pasture: 7 days. Cotton gin trash must not be fed to animals"
  },

  surfactant:     "Uptake Spraying Oil at 0.5 L/100L recommended. Alternative: other crop spraying oils at 1 L/100L plus non-ionic wetter at 200 mL/100L. If no oil used, non-ionic wetter (e.g. BS-1000 or Wetspray 1000) at 200 mL/100L with higher rate of Firepower 900",
  sprayerCleanup: "Empty tank completely and drain whole system. Thoroughly wash inside tank using pressure hose, drain tank and clean filters in tank, pump, line and nozzles. Quarter fill with clean water, circulate through pump, lines, hoses and nozzles. Drain and repeat rinsing twice. To decontaminate before spraying cereals, maize, sorghum or other sensitive crops: wash and rinse as above, then quarter fill and add alkali detergent (e.g. SURF, Cold Water SURF Concentrate, Dynamo Matic Concentrate, OMO or DRIVE) at 500 mL/100L, circulate for at least 15 minutes. Drain, clean filters and nozzles separately, flush with clean water"
};
