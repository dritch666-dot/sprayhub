// ─────────────────────────────────────────────────────────────────────────────
// NUFARM KAMBA® 750 — Label Data
// Dicamba Herbicide (750 g/L Dicamba)
// Source: Nufarm-Kamba-750-Label.pdf
// APVMA Approval No: 69302/142276
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['nufarmkamba750'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Nufarm Kamba® 750 Herbicide",

  category:         "Herbicides",
  activeIngredient: "750 g/L Dicamba",
  group:            "Group 4 Herbicide (Synthetic Auxin)",
  modeOfAction:     "Plant cell growth disruptor (synthetic auxin). Causes abnormal growth, distortion and death of susceptible broadleaf weeds.",
  formulation:      "Liquid (Soluble Concentrate)",
  color:            "#155e75",
  apvma:            "69302/142276",
  company: "Nufarm",
  labelPdf:         "Source labels/Nufarm-Kamba-750-Label.pdf",
  sdsPdf:           "SDS Labels/NUFARM-KAMBA-750-SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Broadleaf Weeds", "Thistles", "Docks", "Clover"],
    timing: ["Post-emergence to young rosette stage", "Up to early boot/joint stage"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Cereals (Wheat, Oats, Barley, Triticale, Commercial Rye) ──
    {
      crop: "Wheat, Oats, Barley, Triticale, Commercial Rye (5 leaf to early tillering, Z15–22)",
      cropList: ["Wheat", "Oats", "Barley", "Triticale", "Commercial Rye"],
      weeds: [
        {
          weed: "Capeweed, Charlock, Common ice-plant, Double gee, Seedling docks, Hexham scent, Mustards, Soldier thistle, Tares, Turnip weed, Vetch, Ward's weed, Wild radish, Wild turnip, Wireweed",
          pestList: ["Capeweed", "Charlock", "Common Ice-Plant", "Double Gee", "Seedling Docks", "Hexham Scent", "Mustards", "Soldier Thistle", "Tares", "Turnip Weed", "Vetch", "Ward's Weed", "Wild Radish", "Wild Turnip", "Wireweed"],
          states: ["All"],
          rate: "105",
          rateMax: "105",
          unit: "mL/ha",
          stage: "5 leaf to early tillering (Z15–22)",
          note: "Mix with 465 mL/ha Nufarm MCPA Amine 750. Spray when most weeds have germinated and are in 2–4 leaf stage. Suppression only of Wireweed (Hogweed) and Capeweed will occur in some instances."
        }
      ]
    },

    // ── 2. Cereals (5 leaf to fully tillered, Z15/21–30) ──
    {
      crop: "Wheat, Oats, Barley, Triticale, Commercial Rye (5 leaf until fully tillered before jointing, Z15/21–30)",
      cropList: ["Wheat", "Oats", "Barley", "Triticale", "Commercial Rye"],
      weeds: [
        {
          weed: "Docks, Double gee, Hexham scent, Sunflower, Tares, Variegated thistle, Vetch, Wireweed",
          pestList: ["Docks", "Double Gee", "Hexham Scent", "Sunflower", "Tares", "Variegated Thistle", "Vetch", "Wireweed"],
          states: ["SA"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "5 leaf until fully tillered before jointing (Z15/21–30)",
          note: "Spray when weeds have germinated and are in young rosette stage. When weeds do not form rosette, spray when they have not more than 8 true leaves. Suppression only in some instances."
        },
        {
          weed: "Climbing buckwheat, Clover, Docks, Double gee, Hexham scent",
          pestList: ["Climbing Buckwheat", "Clover", "Docks", "Double Gee", "Hexham Scent"],
          states: ["WA"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "5 leaf until fully tillered before jointing",
          note: "Spray when weeds have germinated and are in young rosette stage or not more than 8 true leaves."
        },
        {
          weed: "Climbing buckwheat, Clover, Docks, Double gee, Fat hen, Hexham scent, New Zealand spinach, Wireweed, Scotch thistle, Sunflowers, Tree hogweed, Variegated thistle, Vetch",
          pestList: ["Climbing Buckwheat", "Clover", "Docks", "Double Gee", "Fat Hen", "Hexham Scent", "New Zealand Spinach", "Wireweed", "Scotch Thistle", "Sunflowers", "Tree Hogweed", "Variegated Thistle", "Vetch"],
          states: ["Qld", "NSW", "Vic"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "5 leaf until fully tillered before jointing",
          note: "Spray when weeds have germinated and are in young rosette stage or not more than 8 true leaves. Suppression only of Wireweed, Capeweed and Hoary cress in some instances."
        },
        {
          weed: "Capeweed, Charlock, Chickweed, Clover, Common ice-plant, Hoary cress, Mustards, Radish, Saffron thistle, Sorrel, Tares, Turnip weed, Ward's weed, Wild turnip",
          pestList: ["Capeweed", "Charlock", "Chickweed", "Clover", "Common Ice-Plant", "Hoary Cress", "Mustards", "Radish", "Saffron Thistle", "Sorrel", "Tares", "Turnip Weed", "Ward's Weed", "Wild Turnip"],
          states: ["SA"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "5 leaf until fully tillered before jointing",
          note: "Mix with 665 mL/ha Nufarm MCPA Amine 750 OR 715 mL/ha Nufarm Amicide® Advance 700. DO NOT use Nufarm Kamba® 750 plus Nufarm Amicide Advance 700 in Oats in SA. Addition of Nufarm MCPA Amine 750 OR Nufarm Amicide® Advance 700 is essential if these weeds are found alongside the above weeds. Spray when weeds have germinated and are in young rosette stage. A mixture with Nufarm Amicide® Advance 700 must not be used in Tasmania."
        },
        {
          weed: "Common ice-plant",
          pestList: ["Common Ice-Plant"],
          states: ["WA"],
          rate: "215",
          rateMax: "215",
          unit: "mL/ha",
          stage: "5 leaf until fully tillered before jointing",
          note: "Mix with 570 mL/ha Nufarm Amicide® Advance 700."
        },
        {
          weed: "Chickweed, Sorrel, Wireweed",
          pestList: ["Chickweed", "Sorrel", "Wireweed"],
          states: ["All"],
          rate: "270",
          rateMax: "270",
          unit: "mL/ha",
          stage: "5 leaf until fully tillered before jointing",
          note: "Alternative rate: 185 mL/ha + 800 mL/ha Nufarm MCPA Amine 750 or 570 mL/ha Nufarm Amicide® Advance 700."
        },
        {
          weed: "Capeweed, Charlock, Chickweed, Mustards, Radish, Saffron thistle, Sorrel, Tares, Turnip weed, Wild turnip",
          pestList: ["Capeweed", "Charlock", "Chickweed", "Mustards", "Radish", "Saffron Thistle", "Sorrel", "Tares", "Turnip Weed", "Wild Turnip"],
          states: ["Qld", "Vic", "NSW", "Tas"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "5 leaf until fully tillered before jointing",
          note: "Mix with 800 mL/ha Nufarm MCPA Amine 750 or 500 mL/ha Nufarm Amicide® Advance 700."
        },
        {
          weed: "Mintweed",
          pestList: ["Mintweed"],
          states: ["NSW", "Qld"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "5 leaf until fully tillered before jointing",
          note: "Mix with appropriate herbicide as specified above for the relevant state."
        }
      ]
    },

    // ── 3. Cereals (Early tillering to fully tillered, Z21–30) ──
    {
      crop: "Wheat, Barley, Triticale, Commercial Rye (Early tillering to fully tillered before jointing, Z21–30)",
      cropList: ["Wheat", "Barley", "Triticale", "Commercial Rye"],
      weeds: [
        {
          weed: "Climbing buckwheat, Dead nettle, Turnip weed, Wild turnip, Wireweed",
          pestList: ["Climbing Buckwheat", "Dead Nettle", "Turnip Weed", "Wild Turnip", "Wireweed"],
          states: ["NSW", "Qld"],
          rate: "135",
          rateMax: "185",
          unit: "mL/ha",
          stage: "Early tillering (4–5 fully emerged main stem leaves plus one or more tillers) until fully tillered and before start of jointing (Z21–30)",
          note: "Mix with 5–7 g/ha Nufarm Associate®. Spray when weeds have no more than 8 true leaves. Use higher rate on larger weeds. Tank mixes of Nufarm Kamba® 750 and Nufarm Associate® may result in reduced control of Wireweed (Hogweed) in some situations."
        }
      ]
    },

    // ── 4. Barley/Triticale/Rye with Volunteer Peas ──
    {
      crop: "Barley, Triticale, Commercial Rye (5 leaf until fully tillered before jointing, Z21–30)",
      cropList: ["Barley", "Triticale", "Commercial Rye"],
      weeds: [
        {
          weed: "Volunteer peas",
          pestList: ["Volunteer Peas"],
          states: ["SA"],
          rate: "40",
          rateMax: "40",
          unit: "mL/ha",
          stage: "5 leaf until fully tillered before jointing (Z21–30)",
          note: "Mix with 1 L/ha Nufarm Kamba® M. Apply when most peas are 5–7 cm high."
        }
      ]
    },

    // ── 5. Wheat and Oats with Volunteer Peas ──
    {
      crop: "Wheat, Oats (5 leaf until fully tillered before jointing, Z15–30)",
      cropList: ["Wheat", "Oats"],
      weeds: [
        {
          weed: "Volunteer peas (supplementary rate)",
          pestList: ["Volunteer Peas"],
          states: ["All"],
          rate: "80",
          rateMax: "80",
          unit: "mL/ha",
          stage: "5 leaf until fully tillered before jointing (Z15–30)",
          note: "Mix with 1 L/ha Nufarm Kamba® M. For use in regions other than SA."
        }
      ]
    },

    // ── 6. Rice ──
    {
      crop: "Rice (Pre-sowing)",
      cropList: ["Rice"],
      weeds: [
        {
          weed: "Docks (seedling)",
          pestList: ["Seedling Docks"],
          states: ["NSW", "NT", "Qld", "Vic"],
          rate: "270",
          rateMax: "270",
          unit: "mL/ha",
          stage: "Pre-sowing",
          note: "DO NOT cultivate or graze for 14 days after spraying."
        },
        {
          weed: "Docks (mature)",
          pestList: ["Mature Docks"],
          states: ["NSW", "NT", "Qld", "Vic"],
          rate: "375",
          rateMax: "375",
          unit: "mL/ha",
          stage: "Pre-sowing",
          note: "DO NOT cultivate or graze for 14 days after spraying."
        }
      ]
    },

    {
      crop: "Rice (Post-sowing before permanent water or until mid-tillering)",
      cropList: ["Rice"],
      weeds: [
        {
          weed: "Docks",
          pestList: ["Docks"],
          states: ["NSW", "NT", "Qld", "Vic"],
          rate: "270",
          rateMax: "375",
          unit: "mL/ha",
          stage: "Post-sowing either before permanent water or until rice is at mid-tillering stage",
          note: "Preferably apply before permanent water application. If permanent water has been applied, Nufarm Kamba® 750 can be applied up to mid-tillering stage provided docks are exposed. Use 100 L/ha for boom application. Seedling docks: 270 mL/ha. Mature docks: 375 mL/ha."
        }
      ]
    },

    // ── 7. Pinus Radiata Plantations ──
    {
      crop: "Pinus Radiata Plantations (at least 10 months prior to planting pines)",
      cropList: ["Pinus Radiata Plantations"],
      weeds: [
        {
          weed: "Sorrel (in pastures to be planted to pines)",
          pestList: ["Sorrel"],
          states: ["All"],
          rate: "735",
          rateMax: "735",
          unit: "mL/ha",
          stage: "At least 10 months prior to planting pines",
          note: "Apply in September/October period before sorrel flowers. Add Nufarm Activator® or another non-ionic wetting agent to the mixture."
        },
        {
          weed: "Sorrel (combined treatment option)",
          pestList: ["Sorrel"],
          states: ["All"],
          rate: "375",
          rateMax: "375",
          unit: "mL/ha",
          stage: "At least 10 months prior to planting pines",
          note: "Mix with 895 mL/ha Nufarm Amicide® Advance 700. Apply in September/October period before sorrel flowers."
        }
      ]
    },

    {
      crop: "Naturally Regenerated Pines",
      cropList: ["Naturally Regenerated Pines"],
      weeds: [
        {
          weed: "Sorrel and associated weeds",
          pestList: ["Sorrel", "Associated Weeds"],
          states: ["SA", "Vic", "NSW"],
          rate: "1.35",
          rateMax: "5.4",
          unit: "L/ha",
          stage: "Spring application",
          note: "Use high rate where total control is essential. Apply in Spring. L/ha (mL per hectare conversion: 1.35–5.4 L = 1350–5400 mL)"
        }
      ]
    },

    // ── 8. Sugarcane (Post-emergence) ──
    {
      crop: "Sugarcane (Post-emergence)",
      cropList: ["Sugarcane"],
      weeds: [
        {
          weed: "Bathurst burr, Bellvine, Blackberry nightshade, Calopo, Caltrop, Cleome, Cobbler's pegs, Common sow thistle, Convolvulus, Fat hen, Green amaranth, Khaki weed, Noogoora burr, Parthenium weed, Perennial gooseberry, Pigweed, Pinkburr, Redroot amaranth, Sensitive plant, Sida-retusa, Tar vine, Thickhead, Thornapple",
          pestList: ["Bathurst Burr", "Bellvine", "Blackberry Nightshade", "Calopo", "Caltrop", "Cleome", "Cobbler's Pegs", "Common Sow Thistle", "Convolvulus", "Fat Hen", "Green Amaranth", "Khaki Weed", "Noogoora Burr", "Parthenium Weed", "Perennial Gooseberry", "Pigweed", "Pinkburr", "Redroot Amaranth", "Sensitive Plant", "Sida-Retusa", "Tar Vine", "Thickhead", "Thornapple"],
          states: ["NSW", "Qld", "WA", "NT"],
          rate: "375",
          rateMax: "375",
          unit: "mL/ha",
          stage: "Post-emergence",
          note: "Spray when most weeds have germinated and are in young rosette stage or when they have not more than 8 true leaves. Application method: boom spray as overall directed spray applying 100–250 L water/ha or by aircraft applying 45 L/ha."
        },
        {
          weed: "Amaranthus, Black pigweed, Caltrop, Mintweed, Noogoora burr, Pigweed, Thornapple",
          pestList: ["Amaranthus", "Black Pigweed", "Caltrop", "Mintweed", "Noogoora Burr", "Pigweed", "Thornapple"],
          states: ["NSW", "Qld", "NT"],
          rate: "185",
          rateMax: "215",
          unit: "mL/ha",
          stage: "Post-emergence",
          note: "Mix with 1.2 kg/ha of a 900 g/kg atrazine product (185 mL/ha + 1.2 kg/ha) OR 215 mL/ha + 1 kg/ha of a 900 g/kg atrazine product. Apply when weeds have 3–5 true leaves. DO NOT apply in hot dry conditions. Use boom spray as overall spray applying 50–250 L water/ha. Use higher rate Nufarm Kamba® 750 where Caltrop is present."
        }
      ]
    },

    // ── 9. Potatoes ──
    {
      crop: "Potatoes (after haulm senescence)",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Black nightshade, Chickweed, Climbing buckwheat, Clover, Docks, Fat hen, Thistles, Wireweed",
          pestList: ["Black Nightshade", "Chickweed", "Climbing Buckwheat", "Clover", "Docks", "Fat Hen", "Thistles", "Wireweed"],
          states: ["Tas"],
          rate: "335",
          rateMax: "800",
          unit: "mL/ha",
          stage: "After haulm senescence",
          note: "Apply in sufficient water to give even coverage. May be mixed with amitrole or Nufarm Amicide® Advance 700 to improve spectrum of weeds controlled. Refer to respective labels for application rates. Add Nufarm Activator® for improved coverage. NOTE: DO NOT apply when potato haulms are still green."
        }
      ]
    },

    // ── 10. Grass Pastures and Perennial Grass Seed Crops ──
    {
      crop: "Grass Pastures and Perennial Grass Seed Crops",
      cropList: ["Grass Pastures", "Perennial Grass Seed Crops"],
      weeds: [
        {
          weed: "Black or Spear thistle, Caltrop, Cotton thistle, Double gee, Hexham scent, Horehound, Illyrian thistle, Parthenium weed, Rumex spp., Smartweed, Star thistle, Stemless thistle, Variegated thistle (seedlings)",
          pestList: ["Black Thistle", "Spear Thistle", "Caltrop", "Cotton Thistle", "Double Gee", "Hexham Scent", "Horehound", "Illyrian Thistle", "Parthenium Weed", "Rumex Spp.", "Smartweed", "Star Thistle", "Stemless Thistle", "Variegated Thistle"],
          states: ["All"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "Seedling stage",
          note: "When applying by boom spray use 110–280 L mixture per hectare. Add Nufarm Activator® to spray mix."
        },
        {
          weed: "Black or Spear thistle, Caltrop, Cotton thistle, Double gee, Hexham scent, Horehound, Illyrian thistle, Parthenium weed, Rumex spp., Smartweed, Star thistle, Stemless thistle, Variegated thistle (young to mature plants)",
          pestList: ["Black Thistle", "Spear Thistle", "Caltrop", "Cotton Thistle", "Double Gee", "Hexham Scent", "Horehound", "Illyrian Thistle", "Parthenium Weed", "Rumex Spp.", "Smartweed", "Star Thistle", "Stemless Thistle", "Variegated Thistle"],
          states: ["All"],
          rate: "375",
          rateMax: "735",
          unit: "mL/ha",
          stage: "Young to mature plant stage",
          note: "For young to mature plants use 375–735 mL/ha. Boom spray 110–280 L mixture/ha. Add Nufarm Activator® to spray mix."
        },
        {
          weed: "Common ice-plant, Hoary cress, Saffron thistle, Sorrel",
          pestList: ["Common Ice-Plant", "Hoary Cress", "Saffron Thistle", "Sorrel"],
          states: ["All"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "All stages",
          note: "Mix with 570 mL/ha Nufarm Amicide® Advance 700. High volume application: 13.5 mL + 45 mL Amicide per 100 L. Knapsack (15 L): 4 mL + 11 mL Amicide per 15 L."
        }
      ]
    },

    // ── 11. Plantain Pastures ──
    {
      crop: "Plantain Pastures (seedling and established)",
      cropList: ["Plantain Pastures"],
      weeds: [
        {
          weed: "Slender thistle, Variegated thistle",
          pestList: ["Slender Thistle", "Variegated Thistle"],
          states: ["All"],
          rate: "185",
          rateMax: "375",
          unit: "mL/ha",
          stage: "Seedling and established pastures",
          note: "DO NOT apply to pastures with clover. Spray to actively growing weeds when they have no more than 8 true leaves. Use higher rate on larger weeds. Apply to seedling plantain from 4 true leaf stage onwards. In established plantain, if heavy grazing has occurred, allow weed regrowth to 6–8 cm before spraying. Plantain may display temporary visual symptoms of leaf twisting/distortion and loss of biomass. Tolerance of Nufarm Kamba® 750 to plantain varieties other than PGG seeds 'Tonic' have not been tested. The use of adjuvants is not recommended."
        },
        {
          weed: "Capeweed, Paterson's curse, Wireweed (suppression only)",
          pestList: ["Capeweed", "Paterson's Curse", "Wireweed"],
          states: ["All"],
          rate: "185",
          rateMax: "375",
          unit: "mL/ha",
          stage: "Seedling and established pastures",
          note: "Suppression only. Apply at rates specified for Slender/Variegated thistle control."
        }
      ]
    },

    // ── 12. Non-Crop Situations ──
    {
      crop: "Non-Crop Situations (Broadleaf weeds - easiest control)",
      cropList: ["Non-Crop Situations"],
      weeds: [
        {
          weed: "Annual ragweed, Blue heliotrope, Burr ragweed, Galvanised burr, Ground cherry, Ox-Eye daisy, Perennial ragweed, Russian knapweed, Skeleton weed, Wild garlic",
          pestList: ["Annual Ragweed", "Blue Heliotrope", "Burr Ragweed", "Galvanised Burr", "Ground Cherry", "Ox-Eye Daisy", "Perennial Ragweed", "Russian Knapweed", "Skeleton Weed", "Wild Garlic"],
          states: ["All"],
          rate: "5.9",
          rateMax: "5.9",
          unit: "L/ha",
          stage: "Post-emergence",
          note: "Use minimum 1500 L/ha water carrier. Add Nufarm Activator®. Spray Russian knapweed at flowering. Spray Angled onion weed, Bladder campion, Ox-Eye daisy and Paterson's curse before flowering. Spray Wild garlic in Spring before bulbs start to form and respray later if dormant bulbs shoot. Spray prior to flowering. High volume: 400 mL per 100L. Knapsack (15 L): 87 mL."
        }
      ]
    },

    {
      crop: "Non-Crop Situations (Moderate control difficulty)",
      cropList: ["Non-Crop Situations"],
      weeds: [
        {
          weed: "California thistle, Field bindweed, Paterson's curse, Prairie ground cherry, Ragwort, Stinking mayweed",
          pestList: ["California Thistle", "Field Bindweed", "Paterson's Curse", "Prairie Ground Cherry", "Ragwort", "Stinking Mayweed"],
          states: ["All"],
          rate: "2.7",
          rateMax: "2.7",
          unit: "L/ha",
          stage: "Post-emergence, before flowering",
          note: "Use minimum 1500 L/ha water carrier. Add Nufarm Activator®. High volume: 185 mL per 100L. Knapsack: 40 mL."
        },
        {
          weed: "Afghan thistle, Artichoke thistle, Star thistle",
          pestList: ["Afghan Thistle", "Artichoke Thistle", "Star Thistle"],
          states: ["All"],
          rate: "1.1",
          rateMax: "1.1",
          unit: "L/ha",
          stage: "Post-emergence",
          note: "High volume: 67 mL per 100L. Knapsack: 16 mL."
        },
        {
          weed: "Angled onion weed, Bladder campion, Cotton thistle, Docks, Horehound, Sorrel, Stemless thistle, Variegated thistle",
          pestList: ["Angled Onion Weed", "Bladder Campion", "Cotton Thistle", "Docks", "Horehound", "Sorrel", "Stemless Thistle", "Variegated Thistle"],
          states: ["All"],
          rate: "800",
          rateMax: "800",
          unit: "mL/ha",
          stage: "Post-emergence",
          note: "High volume: 53 mL per 100L. Knapsack: 12 mL."
        },
        {
          weed: "Illyrian thistle, Parthenium weed, Smartweed",
          pestList: ["Illyrian Thistle", "Parthenium Weed", "Smartweed"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Post-emergence",
          note: "High volume: 27 mL per 100L. Knapsack: 7 mL."
        }
      ]
    },

    {
      crop: "Non-Crop Situations (Regional weeds)",
      cropList: ["Non-Crop Situations"],
      weeds: [
        {
          weed: "Poverty weed",
          pestList: ["Poverty Weed"],
          states: ["SA"],
          rate: "1.35",
          rateMax: "1.35",
          unit: "L/ha",
          stage: "Post-emergence",
          note: "DO NOT use knapsack application for spot spraying of Poverty weed."
        },
        {
          weed: "Mist flower",
          pestList: ["Mist Flower"],
          states: ["Qld", "NT"],
          rate: "8",
          rateMax: "8",
          unit: "L/ha",
          stage: "Post-emergence",
          note: "High volume: 535 mL per 100L. DO NOT use knapsack application for spot spraying."
        },
        {
          weed: "Blackberry nightshade (seedling stage)",
          pestList: ["Blackberry Nightshade"],
          states: ["WA"],
          rate: "215",
          rateMax: "375",
          unit: "mL/ha",
          stage: "Seedling stage",
          note: "Knapsack: 3.3–6 mL."
        },
        {
          weed: "Creeping knotweed",
          pestList: ["Creeping Knotweed"],
          states: ["All"],
          rate: "800",
          rateMax: "1.6",
          unit: "L/ha",
          stage: "Early Summer when actively growing",
          note: "Apply in early Summer to actively growing plants. Knapsack: 12–24 mL."
        },
        {
          weed: "Slender ice-plant",
          pestList: ["Slender Ice-Plant"],
          states: ["All"],
          rate: "215",
          rateMax: "215",
          unit: "mL/ha",
          stage: "Young rosette stage",
          note: "Mix with 570 mL/ha Nufarm Amicide® Advance 700. Spray when actively growing at young rosette stage. Knapsack: 4 mL."
        },
        {
          weed: "Khaki weed",
          pestList: ["Khaki Weed"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Young rosette stage",
          note: "Spray when actively growing at young rosette stage. Knapsack: 6 mL."
        },
        {
          weed: "Rubber vine",
          pestList: ["Rubber Vine"],
          states: ["Qld", "NT"],
          rate: "935",
          rateMax: "935",
          unit: "mL/ha",
          stage: "Autumn during active growth",
          note: "Apply in Autumn during active growth. Knapsack: 15 mL."
        }
      ]
    },

    // ── 13. Grass Pastures and Non-Crop (Rubber Vine with 2,4-D) ──
    {
      crop: "Grass Pastures and Non-Crop (Rubber Vine with 2,4-D)",
      cropList: ["Grass Pastures", "Non-Crop Situations"],
      weeds: [
        {
          weed: "Rubber vine (with 2,4-D Ester)",
          pestList: ["Rubber Vine"],
          states: ["Qld", "NT"],
          rate: "1.35",
          rateMax: "2.7",
          unit: "L/ha",
          stage: "April or May",
          note: "Mix with 3 L Nufarm 2,4-D Ester 680. Apply during April or May. DO NOT apply by misting machine. High volume: 95–185 mL Kamba + 205 mL 2,4-D per 100L. Knapsack: 13.5–27 mL Kamba + 30 mL 2,4-D per 15L."
        }
      ]
    },

    // ── 14. Turf ──
    {
      crop: "Turf",
      cropList: ["Turf"],
      weeds: [
        {
          weed: "Bindy-Eye, Capeweed, Catsear, Chickweed, Clovers, Cotula, Creeping Oxalis, Cudweeds, Dandelion, Dock, Fat hen, Fleabanes, Fumitory, Jo-Jo, Lamb's tongue, Medics, Pearlwort, Pennyworth, Peppercress, Purple-Top, Red flowered mallow, Scarlet pimpernel, Sorrel, Stagger weed, Swine cress, Trefoil, Toad rush, Wireweed, Yarrow (with Amicide)",
          pestList: ["Bindy-Eye", "Capeweed", "Catsear", "Chickweed", "Clovers", "Cotula", "Creeping Oxalis", "Cudweeds", "Dandelion", "Dock", "Fat Hen", "Fleabanes", "Fumitory", "Jo-Jo", "Lamb's Tongue", "Medics", "Pearlwort", "Pennyworth", "Peppercress", "Purple-Top", "Red Flowered Mallow", "Scarlet Pimpernel", "Sorrel", "Stagger Weed", "Swine Cress", "Trefoil", "Toad Rush", "Wireweed", "Yarrow"],
          states: ["All"],
          rate: "800",
          rateMax: "800",
          unit: "mL/ha",
          stage: "Post-emergence",
          note: "Mix with 3 L Nufarm Amicide® Advance 700. Use minimum 1000 L/ha water carrier. DO NOT spray on Buffalo grass, Bent grass, Lippia or Strawberry clover. Spray when weeds are young and actively growing. High volume: 53 mL Kamba + 180 mL Amicide per 100L. Knapsack: 12 mL + 45 mL Amicide per 15L."
        }
      ]
    },

    // ── 15. Woody Species ──
    {
      crop: "Woody Species",
      cropList: ["Woody Species"],
      weeds: [
        {
          weed: "Mimosa (Mimosa pigra)",
          pestList: ["Mimosa"],
          states: ["NT"],
          rate: "1.35",
          rateMax: "1.6",
          unit: "L/ha",
          stage: "Wet season, actively growing",
          note: "Apply to actively growing plants. Preferably apply during wet season. Retreatment may be necessary to control seeding regrowth. High volume: 270 mL per 100L. Knapsack: 40 mL. Basal bark and cut stump applications also permitted (see General Instructions)."
        }
      ]
    },

    // ── 16. Conservation Tillage - Seed Bed Salvage ──
    {
      crop: "Seed Bed Salvage (Conservation Tillage, Direct Drilling)",
      cropList: ["Seed Bed Salvage", "Conservation Tillage", "Direct Drilling"],
      weeds: [
        {
          weed: "Amaranthus, Apple of Peru, Climbing buckwheat, Capeweed, Docks, Doublegee, Medics, Mintweed, Native amaranth, Noogoora burr, Paterson's curse, Sorrel, Sow thistle, Thornapple, Tree hogweed, Turnip weed, Variegated thistle, Volunteer field peas, Volunteer lentils, Volunteer lupins, Wild mustard, Wild or Prickly lettuce, Wireweed, Yellow vine",
          pestList: ["Amaranthus", "Apple of Peru", "Climbing Buckwheat", "Capeweed", "Docks", "Doublegee", "Medics", "Mintweed", "Native Amaranth", "Noogoora Burr", "Paterson's Curse", "Sorrel", "Sow Thistle", "Thornapple", "Tree Hogweed", "Turnip Weed", "Variegated Thistle", "Volunteer Field Peas", "Volunteer Lentils", "Volunteer Lupins", "Wild Mustard", "Wild Or Prickly Lettuce", "Wireweed", "Yellow Vine"],
          states: ["All"],
          rate: "105",
          rateMax: "160",
          unit: "mL/ha",
          stage: "Young rosette or pre-tillering stage",
          note: "Mix with Nufarm CRUCIAL® at 600–1200 mL/ha (or equivalent glyphosate product). Use lower rate when weeds are prior to tillering or seedlings. Increase to higher rate as weeds reach tillering or are 10–15 cm diameter/high. In grazed situations if heavy grazing has occurred allow regrowth to 6–8 cm high before spraying. Visible symptoms of weed control may not be apparent for 10–21 days. If excessively wet conditions occur shortly after application or sowing some retardation of crop establishment may occur in certain broadleaf crops."
        }
      ]
    },

    // ── 17. Conservation Tillage - Direct Drilling ──
    {
      crop: "Direct Drilling, Conservation Tillage, No-till Fallow, Minimum Tillage",
      cropList: ["Direct Drilling", "Conservation Tillage", "No-Till Fallow", "Minimum Tillage"],
      weeds: [
        {
          weed: "Clover",
          pestList: ["Clover"],
          states: ["All"],
          rate: "135",
          rateMax: "135",
          unit: "mL/ha",
          stage: "All growth stages",
          note: "Add to Nufarm CRUCIAL® (or alternative glyphosate product) or Nufarm Revolver® as required. Mixtures of Nufarm Revolver® plus Nufarm Kamba® 750 must not be used in Tas. Follow label recommended rates."
        },
        {
          weed: "Docks, Double gee, Hexham scent, Sunflower, Tares, Variegated thistle, Vetch, Wireweed",
          pestList: ["Docks", "Double Gee", "Hexham Scent", "Sunflower", "Tares", "Variegated Thistle", "Vetch", "Wireweed"],
          states: ["SA"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "Young rosette stage",
          note: "Spray when most weeds have germinated and are still in young rosette stage, when they have not more than 8 true leaves."
        },
        {
          weed: "Docks, Double gee, Climbing buckwheat, Hexham scent",
          pestList: ["Docks", "Double Gee", "Climbing Buckwheat", "Hexham Scent"],
          states: ["WA"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "Young rosette stage",
          note: "Spray when most weeds have germinated and are still in young rosette stage."
        },
        {
          weed: "New Zealand spinach",
          pestList: ["New Zealand Spinach"],
          states: ["Qld", "NSW", "NT"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "Young rosette stage",
          note: "Spray when weeds have germinated and are in young rosette stage."
        },
        {
          weed: "Climbing buckwheat, Docks, Double gee, Fat hen, Hexham scent, Scotch thistle, Sunflowers, Tree hogweed, Variegated thistle, Vetch, Wireweed",
          pestList: ["Climbing Buckwheat", "Docks", "Double Gee", "Fat Hen", "Hexham Scent", "Scotch Thistle", "Sunflowers", "Tree Hogweed", "Variegated Thistle", "Vetch", "Wireweed"],
          states: ["Qld", "NSW", "Tas", "Vic", "NT"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "Young rosette stage",
          note: "Spray when most weeds have germinated and are still in young rosette stage, when they have not more than 8 true leaves."
        },
        {
          weed: "Chickweed, Sorrel, Wireweed",
          pestList: ["Chickweed", "Sorrel", "Wireweed"],
          states: ["WA"],
          rate: "270",
          rateMax: "270",
          unit: "mL/ha",
          stage: "Young rosette stage",
          note: "Spray when weeds have not more than 8 true leaves."
        },
        {
          weed: "Common ice-plant, Hoary cress, Saffron thistle, Sorrel",
          pestList: ["Common Ice-Plant", "Hoary Cress", "Saffron Thistle", "Sorrel"],
          states: ["All"],
          rate: "185",
          rateMax: "185",
          unit: "mL/ha",
          stage: "Post-emergence",
          note: "Mix with 570 mL/ha Nufarm Amicide® Advance 700."
        },
        {
          weed: "Amaranthus, Annual gooseberry, Bathurst Burr, Bellvine, Blackberry nightshade, Black or Spear thistle, Caltrop, Cobbler's pegs, Datura, Double gee, Fat hen, Horehound, Illyrian thistle, Khaki weed, Mintweed, Noogoora Burr, Parthenium weed, Perennial gooseberry, Rumex spp., Smartweed, Star thistle, Stemless thistle, Sunflower (seedlings)",
          pestList: ["Amaranthus", "Annual Gooseberry", "Bathurst Burr", "Bellvine", "Blackberry Nightshade", "Black Or Spear Thistle", "Caltrop", "Cobbler's Pegs", "Datura", "Double Gee", "Fat Hen", "Horehound", "Illyrian Thistle", "Khaki Weed", "Mintweed", "Noogoora Burr", "Parthenium Weed", "Perennial Gooseberry", "Rumex Spp.", "Smartweed", "Star Thistle", "Stemless Thistle", "Sunflower"],
          states: ["All"],
          rate: "215",
          rateMax: "375",
          unit: "mL/ha",
          stage: "3–5 true leaves, actively growing",
          note: "Apply when weeds have at least 3–5 true leaves and are actively growing. DO NOT treat weeds which are beyond the rosette stage. Use higher rate on large weeds."
        },
        {
          weed: "Centro, Cleome, Convolvulus, Pinkburr, Sensitive Plant, Sida-retusa, Tar vine, Thickhead",
          pestList: ["Centro", "Cleome", "Convolvulus", "Pinkburr", "Sensitive Plant", "Sida-Retusa", "Tar Vine", "Thickhead"],
          states: ["Qld", "NSW", "NT", "Vic", "Tas", "WA"],
          rate: "215",
          rateMax: "375",
          unit: "mL/ha",
          stage: "3–5 true leaves, actively growing",
          note: "Apply when weeds have at least 3–5 true leaves and are actively growing. Use higher rate on large weeds."
        }
      ]
    }
  ],

  // ── Restraints ──────────────────────────────────
  restraints: [
    "DO NOT spray when rain seems likely to occur within 4 hours.",
    "DO NOT spray when weeds are wet with dew or rain or under stress from drought, low soil fertility, extreme cold or water logging.",
    "DO NOT spray outside recommended crop growth as crop damage may result.",
    "DO NOT apply to crops or pastures with clover, lucerne or medics.",
    "DO NOT apply by a vertical sprayer.",
    "DO NOT allow bystanders to come into contact with the spray cloud.",
    "DO NOT apply when wind speed is between 3 and 20 kilometres per hour at the application site during the time of application.",
    "DO NOT apply if there are hazardous surface temperature inversion conditions present at the application site during the time of application.",
    "DO NOT use in intensive horticultural cropping areas.",
    "DO NOT apply to crops or pastures with clover, lucerne or medics.",
    "DO NOT disturb treated weeds by cultivation, sowing or grazing for 1 day after treatment of annual weeds and 7 days for perennial weeds (conservation tillage).",
    "DO NOT treat weeds heavily covered with dust or silt (conservation tillage).",
    "DO NOT apply if rainfall is likely within 6 hours of application (conservation tillage)."
  ],

  // ── Withholding Period ──
  withholding: {
    harvest: "DO NOT HARVEST, GRAZE OR CUT FOR STOCK FOOD FOR 7 DAYS AFTER APPLICATION.",
    grazing:  "DO NOT HARVEST, GRAZE OR CUT FOR STOCK FOOD FOR 7 DAYS AFTER APPLICATION."
  },

  // ── Plant Back Periods (Conservation Tillage) ──
  plantBackPeriods: {
    note: "Wait for specified periods before planting into soils sprayed with the product. If applied to dry soil, at least 15 mm of rainfall is required before the Plant Back Period begins.",
    rates: [
      "135 mL: Wheat, Barley, Oats, Triticale, Rye, Sorghum, Maize, Millet, Sunflowers (1 day); Soybeans, Mung beans, Pigeon peas (5 days); Lupins, Clover/Medics (7 days); Safflower (14 days)",
      "185 mL: All cereals and field crops (7 days except Mung beans); Lupins, Clover/Medics (14 days); Safflower (21 days); Cotton (7 days); Rapeseed, Field peas (10–14 days); Chickpeas (21 days)",
      "375 mL: All cereals and field crops (14 days except Mung beans 10 days); Lupins, Clover/Medics (21 days); Safflower (28 days); Cotton (14 days); Rapeseed, Field peas (14–21 days); Chickpeas (28 days)"
    ]
  },

  // ── Compatibility ──
  compatibility: {
    compatible: [
      "Nufarm CRUCIAL® (or alternative glyphosate products: Nufarm weedmaster® DST®, Nufarm weedmaster® DUO®, Nufarm Glyphosate 450)",
      "Nufarm Associate®",
      "Nufarm Amicide® Advance 700",
      "Nufarm MCPA Amine 750",
      "Nufarm MCPA LVE 570",
      "Nufarm 2,4-D Ester 680",
      "Nufarm DROPZONE®",
      "Nufarm Igran",
      "Nufarm Ordram",
      "Nufarm Revolver® (but not for use in Tasmania with)",
      "900 g/kg atrazine products (temporary visible effects in crop growth may be observed)"
    ],
    incompatible: [],
    notes: [
      "Spray solutions of Nufarm Kamba® 750 and Nufarm CRUCIAL® should be mixed, stored and applied only in stainless steel, aluminium, brass, copper, fibreglass, or plastic-lined containers.",
      "DO NOT mix, store or apply in galvanised steel or unlined steel containers — may produce hydrogen gas which is highly combustible.",
      "Mixing order: Fill tank to 70% full with agitation. Add water conditioners, WG products, SC products, EC products, then Nufarm Kamba® 750, fill to nearly full, add glyphosate products, then adjuvants."
    ]
  },

  // ── Re-entry Periods ──
  reEntry: {
    standard: "Re-entry not allowed until product has dried, unless wearing cotton overalls buttoned to neck and wrist and chemical resistant gloves.",
    povertyWeed: "DO NOT enter treated areas for 16 days (unless wearing protective clothing).",
    mistFlower: "DO NOT enter treated areas for 8 days (unless wearing protective clothing).",
    nonCropHighRate: "For control of weeds (other than poverty weed and mist flower) at application rates above 2.7 L/ha: DO NOT enter for 5 days (unless wearing protective clothing)."
  },

  // ── Application Information ──
  applicationInfo: {
    sprayDropletSize: "USE ONLY COARSE spray droplet size category",
    inCrop: {
      groundSprayer: "50–250 L/ha water",
      aerialApplication: "40–90 L/ha water"
    },
    highVolume: "Minimum 1500 L/ha",
    knapsack: "15 L knapsack treats 150 m²",
    fallow: "Minimum 50 L/ha recommended. With simazine/atrazine: minimum 100 L/ha. Boom height: ensure double overlap of nozzle patterns.",
    aerialBoom: "Minimum 50 L/ha. DO NOT apply when temperature above 35°C.",
    mimosaControl: {
      broadacre: "1.35–1.6 L/ha in 60 L water/ha. Helicopter preferred.",
      highVolume: "270 mL in 110 L water using ground equipment. Thoroughly wet all leaves and stems.",
      basalBark: "40 mL in 15 L water for plants less than 5 cm basal diameter. Spray all around base and 25–40 cm up stem.",
      cutStump: "40 mL in 15 L water for plants up to 10 cm basal diameter. Apply to freshly cut surface before sap dries."
    }
  },

  // ── Crop Safety ──
  cropSafety: "Yield reduction has occurred in some small cereal varieties sprayed with twice label rates at early timings. Observe label rates and timings and avoid excessive spray overlap at early application timings. A temporary wilting may be evident in some crops after application. If seasonal conditions are unusually late or dry, seek further advice as crop damage may result. Growers should seek advice before spraying recently released cereal varieties. Certain maize varieties may develop clubfoot of the prop roots.",

  // ── Equipment Maintenance ──
  sprayerCleanup: "Equipment used for this chemical should not be used for other materials to sensitive plants unless well washed with hot soapy water, 1% ammonia solution, followed by clear water rinses, or use tank and equipment cleaner. If using Sulfonylurea herbicide, follow decontamination procedures on its label. Use 50 mesh primary filter and 80 mesh secondary filter. In-line nozzle filters NOT recommended.",

  // ── Resistant Weeds Warning ──
  resistanceWarning: "Nufarm Kamba® 750 is a Group 4 Herbicide (disruptor of plant cell growth). Some naturally-occurring weed biotypes resistant to Nufarm Kamba® 750 and other Group 4 herbicides may exist through normal genetic variability. Resistant individuals can dominate the weed population if these herbicides are used repeatedly. These resistant weeds will not be controlled by Nufarm Kamba® 750 or other Group 4 herbicides. Nufarm Australia Limited accepts no liability for losses resulting from failure to control resistant weeds.",

  // ── Safety Information ──
  signalWord: "Caution",
  safetyDirections: "Harmful if swallowed. Corrosive. Attacks eyes. Will damage skin. Will irritate nose and throat. Avoid contact with eyes and skin. DO NOT inhale vapour. When opening container and preparing spray, wear cotton overalls buttoned to neck and wrist, elbow-length chemical resistant gloves and face shield. For aerial application: cotton overalls buttoned to neck and wrist. For boom spray: same plus elbow-length gloves in open cab. If over 400 L per day by open cab: add washable hat. For handwand/backpack: add face shield/goggles and half facepiece respirator.",
  firstAid: "If poisoning occurs, contact doctor or Poisons Information Centre. Australia: 13 11 26. New Zealand: 0800 764 766.",
  causesEyeDamage: "Causes serious eye damage. Wash hands and exposed skin after handling. DO NOT eat, drink or smoke. Wear protective gloves, clothing, eye and face protection. IF SWALLOWED: Rinse mouth. IF IN EYES: Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Continue rinsing."

};
