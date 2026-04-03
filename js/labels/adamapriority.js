// ─────────────────────────────────────────────────────────────────────────────
// ADAMA PRIORITY® — Label Data
// Florasulam Herbicide (200 g/L Florasulam)
// Source: Adama_Priority_Label.pdf
// APVMA Approval No: 89643/138036
// ADAMA Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['adamapriority'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Adama Priority® Herbicide",

  category:         "Herbicides",
  activeIngredient: "200 g/L Florasulam",
  group:            "Group 2 Herbicide (ALS Inhibitor — Triazolopyrimidine)",
  modeOfAction:     "Inhibits acetolactate synthase (ALS) enzyme. Controls susceptible broadleaf weeds in cereals, established ryegrass pastures and fallow.",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#155e75",
  apvma:            "89643/138036",
  company:          "Adama",
  labelPdf:         "Source labels/Adama_Priority_Label.pdf",
  signalHeading:    "Caution",
  sdsPdf:           "SDS Labels/Adama_Priority_SDS.pdf",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Broadleaf Weeds", "Thistles", "Volunteer Crops", "Burrs"],
    timing: ["Post-emergence", "3 leaf (GS13) to flag leaf just visible (GS37)"]
  },

  // ── Surfactant / Adjuvant ─────────────────────────────────
  surfactant: "Always apply with Uptake Spraying Oil at 500 mL/100 L (0.5% v/v), except for tank-mix with Triathlon or Quadrant — use BS1000 at 200 mL/100 L.",

  // ── Restraints ───────────────────────────────────────────────
  restraints: [
    "DO NOT apply if heavy rains or storms are forecast within 48 hours.",
    "DO NOT irrigate to the point of field runoff from the treatment area for at least 48 hours after application.",
    "DO NOT apply to crops or weeds which may be stressed due to prolonged periods of extreme cold, sustained high temperature within 48 hours of application, moisture stress (water-logging or drought), nutritional stress, root disease or previous herbicide treatments.",
    "DO NOT apply more than once per season.",
    "Spray droplets must not be smaller than a COARSE spray droplet size category (VERY COARSE when tank mixed with 2,4-D LV ESTER 680 or ZULU XT).",
    "DO NOT apply unless wind speed is between 3 and 20 km/h at the application site.",
    "DO NOT apply if hazardous surface temperature inversion conditions are present."
  ],

  // ── Withholding ──────────────────────────────────────────────
  withholding: {
    harvest: "Not required when used as directed (cereals). Tank mixtures with Cutlass 500: DO NOT harvest for 7 days after application.",
    grazing: "DO NOT graze or cut treated crops for stock feed for 7 days after application. Tank mixtures with Bronco MA-X, Quadrant or Triathlon: DO NOT graze or cut for 8 weeks after application."
  },

  // ── Use situations ──────────────────────────────────────────

  crops: [

    // ── 1. Cereals (Wheat, Barley, Triticale, Oats) — Table 4 Weeds ──
    {
      crop: "Wheat, Barley, Triticale, Oats (3 leaf GS13 to flag leaf just visible GS37)",
      cropList: ["Wheat", "Barley", "Triticale", "Oats"],
      weeds: [
        {
          weed: "Amsinkia spp.",
          pestList: ["Amsinkia"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 6 leaf and not more than 5 cm diameter",
          note: "25 mL PRIORITY + 1 L TRIATHLON OR 25 mL PRIORITY + 800 mL to 1 L QUADRANT. Refer to Table 3 for tank mix approved for a particular cereal and crop stages/situations BEFORE spraying."
        },
        {
          weed: "Annual Ground Cherry, Wild Gooseberry, Thornapples",
          pestList: ["Annual Ground Cherry", "Wild Gooseberry", "Thornapples"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "2 to 8 leaf, up to 15 cm tall",
          note: "20 mL PRIORITY + 375 mL Flagship 400. Always apply with Uptake Spraying Oil at 500 mL/100 L, except for tank-mix with Triathlon or Quadrant — use BS1000 at 200 mL/100 L."
        },
        {
          weed: "Apple of Peru",
          pestList: ["Apple of Peru"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Seedlings up to 15 cm tall",
          note: "20 mL PRIORITY + 375 mL Flagship 400."
        },
        {
          weed: "Bathurst Burr, Noogoora Burr",
          pestList: ["Bathurst Burr", "Noogoora Burr"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "2 to 8 leaf stage, up to 20 cm tall",
          note: "20 mL PRIORITY + 375 mL Flagship 400."
        },
        {
          weed: "Bedstraw",
          pestList: ["Bedstraw"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "1 to 3 whorl (control); up to 6 whorl and 10 cm height",
          note: "Suppression only: 20-25 mL PRIORITY + 375-500 mL Flagship 400. Control: 15-20 mL PRIORITY + 250-375 mL Flagship 400 + 315-630 mL ADAMA LVE MCPA 570. Up to 6 whorl: 25 mL PRIORITY + 440 mL ADAMA LVE MCPA 570 OR 25 mL PRIORITY + 360 mL 2,4-D LV ESTER 680."
        },
        {
          weed: "Bifora spp.",
          pestList: ["Bifora"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf",
          note: "25 mL PRIORITY alone OR + 1 L QUADRANT OR + 1 L TRIATHLON. Addition of PRIORITY at 25 mL/ha in a tank mix with other approved herbicides for Bifora (e.g. Velocity + MCPA, Affinity Force + MCPA, Talinor + MCPA, Bronco MA-X, Mentor + MCPA) will enhance the weed control. DO NOT add adjuvant in tank-mix with Affinity Force + MCPA or Mentor + MCPA as it will increase crop phytotoxicity."
        },
        {
          weed: "Bittercress",
          pestList: ["Bittercress"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 8 leaf and 15 cm diameter",
          note: "15-25 mL PRIORITY + 250-500 mL Flagship 400 + 630 mL ADAMA LVE MCPA 570."
        },
        {
          weed: "Caltrop (Yellow Vine)",
          pestList: ["Caltrop"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 15 cm diameter",
          note: "25 mL PRIORITY + 500 mL Flagship 400."
        },
        {
          weed: "Capeweed",
          pestList: ["Capeweed"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf (6 cm); up to 6 leaf with MCPA",
          note: "Up to 4 leaf/6 cm: 15-20 mL PRIORITY + 250-375 mL Flagship 400 OR 25 mL PRIORITY + 500 mL ZULU XT. Up to 4 leaf/10 cm: 25 mL PRIORITY + 440 mL ADAMA LVE MCPA 570 OR + 500 mL-1 L TRIATHLON. Up to 6 leaf: 25 mL PRIORITY + 500 mL Flagship 400 + 630 mL ADAMA LVE MCPA 570 OR + 600 mL-1.2 L QUADRANT. Control of Capeweed can be expected if actively growing weeds are treated in warm conditions. Control may be reduced by frosts in the 1-2 days preceding application as well as cold, wet conditions that slow plant growth."
        },
        {
          weed: "Chamomile",
          pestList: ["Chamomile"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 6 leaf and not more than 5 cm diameter",
          note: "25 mL PRIORITY + 1 L TRIATHLON OR 25 mL PRIORITY + 800 mL to 1 L QUADRANT."
        },
        {
          weed: "Charlock",
          pestList: ["Charlock"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 6 leaf and not more than 15 cm diameter",
          note: "25 mL PRIORITY + 500 mL to 1 L TRIATHLON OR 25 mL PRIORITY + 600 to 1.2 L QUADRANT."
        },
        {
          weed: "Cleavers",
          pestList: ["Cleavers"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "1 to 3 whorl",
          note: "25 mL PRIORITY + 500 mL Flagship 400 OR + 1 L TRIATHLON OR + 800 mL to 1 L QUADRANT."
        },
        {
          weed: "Climbing Buckwheat / Black Bindweed",
          pestList: ["Climbing Buckwheat", "Black Bindweed"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 2 leaf (control); up to 6 leaf (suppression for some mixes)",
          note: "Up to 2 leaf: 20 mL PRIORITY + 375 mL Flagship 400 OR 25 mL PRIORITY + 1-1.2 L QUADRANT. Up to 6 leaf: Suppression only with 25 mL PRIORITY + 360 mL ADAMA 2,4-D LV ESTER 680. Control: 25 mL PRIORITY + 500 mL Flagship 400 OR 15 mL PRIORITY + 250 mL Flagship 400 + 560 mL ADAMA MCPA 750 + 110 mL PICOFLEX. At the time of application, weeds must be actively growing under conditions of good soil moisture."
        },
        {
          weed: "Corn Gromwell",
          pestList: ["Corn Gromwell"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 6 leaf and not more than 15 cm diameter",
          note: "25 mL PRIORITY + 1 L TRIATHLON OR 25 mL PRIORITY + 800 mL to 1 L QUADRANT."
        },
        {
          weed: "Cowvine",
          pestList: ["Cowvine"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 2-4 leaf",
          note: "25 mL PRIORITY + 1 L TRIATHLON OR 25 mL PRIORITY + 1.2 L QUADRANT."
        },
        {
          weed: "Deadnettle",
          pestList: ["Deadnettle"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 2 leaf",
          note: "25 mL PRIORITY + 1 L TRIATHLON OR 25 mL PRIORITY + 800 mL to 1 L QUADRANT."
        },
        {
          weed: "Doublegee / Spiny Emex",
          pestList: ["Doublegee", "Spiny Emex"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf (10 cm); up to 6-8 leaf with MCPA/Picoflex",
          note: "Up to 4 leaf/10 cm: 15-25 mL PRIORITY + 250-500 mL Flagship 400 OR 25 mL PRIORITY + 440 mL ADAMA LVE MCPA 570 OR + 360 mL ADAMA 2,4-D LV ESTER 680 OR + 1 L TRIATHLON OR + 800 mL-1.2 L QUADRANT. Up to 6-8 leaf: 15 mL PRIORITY + 250 mL Flagship 400 + 420-560 mL ADAMA MCPA 750 + 80-110 mL PICOFLEX. Apply higher rate of MCPA and Picoflex when weeds are >6 leaf."
        },
        {
          weed: "Dwarf Amaranth",
          pestList: ["Dwarf Amaranth"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Seedlings up to 15 cm tall or rosettes up to 15 cm diameter",
          note: "25 mL PRIORITY + 500 mL Flagship 400."
        },
        {
          weed: "Erodium / Common Storks Bill",
          pestList: ["Erodium", "Common Storks Bill"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf and 6 cm diameter",
          note: "25 mL PRIORITY + 500 mL ZULU XT OR 25 mL PRIORITY + 1 L TRIATHLON."
        },
        {
          weed: "Fat Hen, Field Madder, Hexham Scent",
          pestList: ["Fat Hen", "Field Madder", "Hexham Scent"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 6 leaf and not more than 15 cm diameter",
          note: "25 mL PRIORITY + 1 L TRIATHLON OR 25 mL PRIORITY + 800 mL to 1.2 L QUADRANT."
        },
        {
          weed: "Fumitory",
          pestList: ["Fumitory"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 2 leaf; up to 4 leaf with tank mixes",
          note: "Up to 2 leaf: 25 mL PRIORITY + 750 mL TRIATHLON. Up to 4 leaf: 15-20 mL PRIORITY + 250-375 mL Flagship 400 + 315-630 mL ADAMA LVE MCPA 570 OR 25 mL PRIORITY + 1 L TRIATHLON OR + 800 mL-1.2 L QUADRANT."
        },
        {
          weed: "Indian Hedge Mustard",
          pestList: ["Indian Hedge Mustard"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf (6-10 cm); up to 8 leaf (15 cm) with MCPA",
          note: "Up to 4 leaf/6 cm: 25 mL PRIORITY + 500 mL ZULU XT. Up to 4 leaf/10 cm: 25 mL PRIORITY + 360 mL ADAMA 2,4-D LV ESTER 680 OR + 600-800 mL QUADRANT. Up to 8 leaf/15 cm: 15-20 mL PRIORITY + 250-500 mL Flagship 400 + 630 mL ADAMA LVE MCPA 570 OR 25 mL PRIORITY + 440 mL ADAMA LVE MCPA 570 OR + 1 L TRIATHLON OR + 1-1.2 L QUADRANT."
        },
        {
          weed: "Marshmallow, Smallflower Mallow",
          pestList: ["Marshmallow", "Smallflower Mallow"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 8 leaf, or 20 cm",
          note: "25 mL PRIORITY + 500 mL Flagship 400 OR + 1 L TRIATHLON OR + 1 L QUADRANT."
        },
        {
          weed: "Medic (volunteers, Burr)",
          pestList: ["Medic"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 5 leaf (12 cm); up to 6 leaf with MCPA",
          note: "Up to 5 leaf/12 cm: 25 mL PRIORITY + 500 mL ZULU XT OR + 360 mL ADAMA 2,4-D LV ESTER 680. Up to 6 leaf/12 cm: 15-20 mL PRIORITY + 250-375 mL Flagship 400 + 315-630 mL ADAMA LVE MCPA 570."
        },
        {
          weed: "Mexican Poppy",
          pestList: ["Mexican Poppy"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf; up to 6 leaf with tank mixes",
          note: "Up to 4 leaf: 25 mL PRIORITY + 500 mL Flagship 400. Up to 6 leaf: 15-20 mL PRIORITY + 250-375 mL Flagship 400 + 500 mL BRONCO MA-X OR 25 mL PRIORITY + 1 L TRIATHLON OR + 800 mL-1 L QUADRANT. Target up to a maximum diameter of 10 cm, irrespective of the number of leaves."
        },
        {
          weed: "New Zealand Spinach",
          pestList: ["New Zealand Spinach"],
          states: ["All"],
          rate: "15",
          rateMax: "15",
          unit: "mL/ha",
          stage: "Up to 4 leaf",
          note: "15 mL PRIORITY + 250 mL Flagship 400 + 560 mL ADAMA MCPA 750 + 110 mL PICOFLEX."
        },
        {
          weed: "Paterson's Curse",
          pestList: ["Paterson's Curse"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 6 leaf and 5 cm diameter",
          note: "25 mL PRIORITY + 1 L TRIATHLON."
        },
        {
          weed: "Pigweed",
          pestList: ["Pigweed"],
          states: ["All"],
          rate: "15",
          rateMax: "15",
          unit: "mL/ha",
          stage: "Up to 10 cm diameter",
          note: "15 mL PRIORITY + 250 mL Flagship 400."
        },
        {
          weed: "Polymeria",
          pestList: ["Polymeria"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "2 to 10 leaf, up to 20 cm diameter",
          note: "25 mL PRIORITY + 500 mL Flagship 400."
        },
        {
          weed: "Prickly Lettuce",
          pestList: ["Prickly Lettuce"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "2 to 5 leaf; up to 8 leaf with MCPA/Picoflex",
          note: "2-5 leaf: 25 mL PRIORITY + 500 mL Flagship 400. Up to 8 leaf: 15 mL PRIORITY + 250 mL Flagship 400 + 560 mL ADAMA MCPA 750 + 110 mL PICOFLEX OR 25 mL PRIORITY + 1 L TRIATHLON OR + 600 mL-1.2 L QUADRANT."
        },
        {
          weed: "Rhynchosia",
          pestList: ["Rhynchosia"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Seedlings up to early flowering",
          note: "25 mL PRIORITY + 500 mL Flagship 400."
        },
        {
          weed: "Rough Poppy",
          pestList: ["Rough Poppy"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 2 leaf (suppression/control); up to 6 leaf (5 cm) with Triathlon/Quadrant",
          note: "Up to 2 leaf — Suppression only: 25 mL PRIORITY + 500 mL Flagship 400 + 630 mL ADAMA LVE MCPA 570. Control: 25 mL PRIORITY + 500 mL Flagship 400 + 540 mL BRONCO MA-X. Up to 6 leaf/5 cm: 25 mL PRIORITY + 1 L TRIATHLON OR + 800 mL-1.2 L QUADRANT."
        },
        {
          weed: "Saffron Thistle",
          pestList: ["Saffron Thistle"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf; up to 8 leaf with MCPA/Picoflex",
          note: "Up to 4 leaf: 15 mL PRIORITY + 250 mL Flagship 400 + 340 mL ADAMA MCPA 750 + 65 mL PICOFLEX. Up to 6 leaf/5 cm: 25 mL PRIORITY + 1 L TRIATHLON OR + 800 mL-1 L QUADRANT. Up to 8 leaf: 15 mL PRIORITY + 250 mL Flagship 400 + 420-560 mL ADAMA MCPA 750 + 80-110 mL PICOFLEX. Use higher rate of ADAMA MCPA 750 and Picoflex for >6 leaf weed growth stage."
        },
        {
          weed: "Shepherd's Purse, Stonecrop",
          pestList: ["Shepherd's Purse", "Stonecrop"],
          states: ["All"],
          rate: "20",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf; up to 6 leaf with Quadrant",
          note: "Up to 4 leaf: 20-25 mL PRIORITY + 375-500 mL Flagship 400 + 315-630 mL ADAMA LVE MCPA 570 OR 25 mL PRIORITY + 500 mL TRIATHLON. Up to 6 leaf: 25 mL PRIORITY + 800 mL-1.2 L QUADRANT. Apply the lower rates of tank mix partner herbicides on small weeds and higher rates when targeting higher weed densities and/or larger weeds within the specified size range."
        },
        {
          weed: "Skeleton Weed",
          pestList: ["Skeleton Weed"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf",
          note: "15 mL PRIORITY + 250 mL Flagship 400 + 560 mL ADAMA MCPA 750 + 110 mL PICOFLEX OR 25 mL PRIORITY + 1 L QUADRANT."
        },
        {
          weed: "Sowthistle",
          pestList: ["Sowthistle"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "2 to 5 leaf; up to 8 leaf with MCPA/Picoflex",
          note: "2-5 leaf: 25 mL PRIORITY + 500 mL Flagship 400 OR Suppression only: 25 mL PRIORITY + 1 L TRIATHLON OR + 1.2 L QUADRANT. Up to 8 leaf: 15 mL PRIORITY + 250 mL Flagship 400 + 560 mL ADAMA MCPA 750 + 110 mL PICOFLEX."
        },
        {
          weed: "Sub-clover",
          pestList: ["Sub-clover"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 6 trifoliate leaf stage",
          note: "25 mL PRIORITY + 750 mL TRIATHLON."
        },
        {
          weed: "Turnip Weed",
          pestList: ["Turnip Weed"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf (10 cm); up to 8 leaf (15 cm) with MCPA",
          note: "Up to 4 leaf/10 cm: 15-25 mL PRIORITY + 250-500 mL Flagship 400 OR 25 mL PRIORITY + 360 mL ADAMA 2,4-D LV ESTER 680. Up to 4-6 leaf/10 cm: 15 mL PRIORITY + 250 mL Flagship 400 + 420 mL ADAMA MCPA 750 + 80 mL PICOFLEX OR 20 mL PRIORITY + 315 mL ADAMA LVE MCPA 570 OR + 500 mL-1 L TRIATHLON OR + 600 mL-1.2 L QUADRANT. Up to 8 leaf/15 cm: 15-20 mL PRIORITY + 250-375 mL Flagship 400 + 315-630 mL ADAMA LVE MCPA 570. Apply to actively growing weeds. Best results are usually achieved when majority of weeds are small (<4 leaf). Some regrowth can occur when above average spring rainfall occurs. Use higher rate of ADAMA MCPA 750 and Picoflex for weeds >4 leaf stage."
        },
        {
          weed: "Variegated Thistle",
          pestList: ["Variegated Thistle"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf (3.5 cm); up to 8 leaf with MCPA/Picoflex",
          note: "Up to 4 leaf/3.5 cm: 25 mL PRIORITY + 1 L TRIATHLON OR + 1.2 L QUADRANT. Up to 6 leaf: 20 mL PRIORITY + 270 mL ADAMA 2,4-D LV ESTER 680 + 560 mL ADAMA MCPA 750 + 110 mL PICOFLEX OR Suppression only: 25 mL PRIORITY + 360 mL ADAMA 2,4-D LV ESTER 680. Up to 8 leaf: 15 mL PRIORITY + 250 mL Flagship 400 + 560 mL ADAMA MCPA 750 + 110 mL PICOFLEX. At the time of application, weeds must be actively growing under conditions of good soil moisture. Suppression of Variegated thistle is provided for up to 6 leaf plants growing under conditions of good soil moisture."
        },
        {
          weed: "Vetch (volunteers) / Tares",
          pestList: ["Vetch", "Tares"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 6 leaf (12 cm); up to 5 nodes; up to 6 branches",
          note: "Up to 6 leaf/12 cm: 25 mL PRIORITY + 440 mL ADAMA LVE MCPA 570 OR + 500 mL ZULU XT OR + 360 mL ADAMA 2,4-D LV ESTER 680. Up to 5 nodes: 25 mL PRIORITY + 1 L TRIATHLON. Up to 6 branches: 15-25 mL PRIORITY + 250-500 mL Flagship 400. The addition of 315 mL of ADAMA LVE MCPA 570 or Cutlass 500 can improve the control of vetch."
        },
        {
          weed: "Volunteer Canola (conventional/triazine tolerant)",
          pestList: ["Volunteer Canola"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf (10 cm); up to 8 leaf (15 cm) with MCPA",
          note: "Up to 4 leaf/10 cm: 25 mL PRIORITY + 360 mL ADAMA 2,4-D LV ESTER 680 OR + 500 mL-1 L TRIATHLON OR + 600 mL QUADRANT. Up to 8 leaf/15 cm: 25 mL PRIORITY + 440 mL ADAMA LVE MCPA 570."
        },
        {
          weed: "Volunteer Chickpea",
          pestList: ["Volunteer Chickpea"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf (10 cm); up to 6 leaf (12 cm); up to 5 branches",
          note: "Up to 4 leaf/10 cm: 20 mL PRIORITY + 270 mL ADAMA 2,4-D LV ESTER 680 + 110 mL PICOFLEX + 560 mL ADAMA MCPA 750. Up to 6 leaf/12 cm: 20-25 mL PRIORITY + 315-440 mL ADAMA LVE MCPA 570 OR 25 mL PRIORITY + 500 mL ZULU XT OR + 360 mL ADAMA 2,4-D LV ESTER 680. Up to 5 branches: 15-25 mL PRIORITY + 250-500 mL Flagship 400. Apply to actively growing volunteer chickpea. Best results are usually achieved when majority of weeds are small (<4 leaf). Some regrowth can occur when above average spring rainfall occurs."
        },
        {
          weed: "Volunteer Faba Beans",
          pestList: ["Volunteer Faba Beans"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf (10 cm); up to 6 leaf (15 cm)",
          note: "Up to 4 leaf/10 cm: 20 mL PRIORITY + 375 mL Flagship 400 OR 20-25 mL PRIORITY + 375-500 mL Flagship 400 + 315-630 mL ADAMA LVE MCPA 570 OR 15-20 mL PRIORITY + 250-375 mL Flagship 400 + 160 mL CUTLASS 500 OR 20 mL PRIORITY + 270 mL ADAMA 2,4-D LV ESTER 680 + 110 mL PICOFLEX + 560 mL ADAMA MCPA 750. Up to 6 leaf/15 cm: 20-25 mL PRIORITY + 315-440 mL ADAMA LVE MCPA 570 OR 25 mL PRIORITY + 500 mL ZULU XT OR + 360 mL ADAMA 2,4-D LV ESTER 680. For better control of volunteer Faba beans, apply with ADAMA LVE MCPA 570 or Cutlass 500 and at higher rates to control larger weeds."
        },
        {
          weed: "Volunteer Lentils",
          pestList: ["Volunteer Lentils"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 6 leaf (12 cm); up to 5 branches",
          note: "Up to 6 leaf/12 cm: 25 mL PRIORITY + 440 mL ADAMA LVE MCPA 570 OR + 500 mL ZULU XT OR + 360 mL ADAMA 2,4-D LV ESTER 680. Up to 5 branches: 15-25 mL PRIORITY + 250-500 mL Flagship 400."
        },
        {
          weed: "Volunteer Lupins",
          pestList: ["Volunteer Lupins"],
          states: ["All"],
          rate: "20",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 6 leaf (12 cm); up to 5 branches",
          note: "Up to 6 leaf/12 cm: 25 mL PRIORITY + 440 mL ADAMA LVE MCPA 570 OR + 500 mL ZULU XT OR + 360 mL ADAMA 2,4-D LV ESTER 680 OR + 1 L TRIATHLON OR + 1 L QUADRANT. Up to 5 branches: 20 mL PRIORITY + 375 mL Flagship 400. The addition of 315 mL of ADAMA LVE MCPA 570 can improve the control of lupins."
        },
        {
          weed: "Volunteer Field Peas",
          pestList: ["Volunteer Field Peas"],
          states: ["All"],
          rate: "20",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 5 node; up to 6 node (15 cm); up to 5 branches",
          note: "Up to 5 node: 25 mL PRIORITY + 1 L TRIATHLON. Up to 6 node/15 cm: 25 mL PRIORITY + 440 mL ADAMA LVE MCPA 570 OR + 500 mL ZULU XT OR + 360 mL ADAMA 2,4-D LV ESTER 680. Up to 5 branches: 25 mL PRIORITY + 500 mL Flagship 400 OR 20 mL PRIORITY + 375 mL Flagship 400 + 630 mL ADAMA LVE MCPA 570 OR + 160 mL CUTLASS 500."
        },
        {
          weed: "Volunteer Sunflowers",
          pestList: ["Volunteer Sunflowers"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "2 to 5 leaf, up to 20 cm",
          note: "25 mL PRIORITY + 500 mL Flagship 400."
        },
        {
          weed: "Wild Radish",
          pestList: ["Wild Radish"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf (10 cm); up to 8 leaf (15 cm) with various tank mixes",
          note: "Up to 4 leaf/10 cm: 20-25 mL PRIORITY + 375-500 mL Flagship 400. Up to 6 leaf/10 cm: 25 mL PRIORITY + 360 mL ADAMA 2,4-D LV ESTER 680 OR + 250-500 mL TRIATHLON. Up to 8 leaf/15 cm: 25 mL PRIORITY + 440 mL ADAMA LVE MCPA 570 OR 15-25 mL PRIORITY + 250-500 mL Flagship 400 + 630 mL ADAMA LVE MCPA 570 OR 15 mL PRIORITY + 250 mL Flagship 400 + 560 mL ADAMA MCPA 750 + 110 mL PICOFLEX OR 15-20 mL PRIORITY + 250-375 mL Flagship 400 + 500 mL BRONCO MA-X OR 25 mL PRIORITY + 1 L TRIATHLON OR + 600 mL-1.2 L QUADRANT."
        },
        {
          weed: "Wild Turnip Weed",
          pestList: ["Wild Turnip Weed"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4-6 leaf (10 cm); up to 8 leaf (15 cm) with MCPA",
          note: "Up to 4-6 leaf/10 cm: 25 mL PRIORITY + 360 mL ADAMA 2,4-D LV ESTER 680 OR 15 mL PRIORITY + 250 mL Flagship 400 + 340-420 mL ADAMA MCPA 750 + 65-80 mL PICOFLEX OR 25 mL PRIORITY + 500 mL-1 L TRIATHLON OR + 600 mL-1.2 L QUADRANT. Up to 8 leaf/15 cm: 25 mL PRIORITY + 440 mL ADAMA LVE MCPA 570 OR 15-25 mL PRIORITY + 250-500 mL Flagship 400 + 630 mL ADAMA LVE MCPA 570 OR 15 mL PRIORITY + 250 mL Flagship 400 + 560 mL ADAMA MCPA 750 + 110 mL PICOFLEX. Use higher rate of ADAMA MCPA 750 and Picoflex for weeds >4 leaf stage."
        },
        {
          weed: "Wireweed",
          pestList: ["Wireweed"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 3 leaf; up to 4 leaf with MCPA/Picoflex",
          note: "Up to 3 leaf: 20-25 mL PRIORITY + 375-500 mL Flagship 400 + 315-630 mL ADAMA LVE MCPA 570. Up to 4 leaf: 15 mL PRIORITY + 250 mL Flagship 400 + 560 mL ADAMA MCPA 750 + 110 mL PICOFLEX OR 25 mL PRIORITY + 1 L TRIATHLON OR + 800 mL-1.2 L QUADRANT. Where wireweed occurs in red soils of low fertility it has been found to be less susceptible."
        }
      ]
    },

    // ── 2. Established Ryegrass Pastures ──
    {
      crop: "Established Ryegrass Pastures (5 leaf GS15 to 2nd node GS32)",
      cropList: ["Ryegrass Pastures"],
      weeds: [
        {
          weed: "Broadleaf Weeds (as per Table 4 — cereals weed list applies)",
          pestList: ["Capeweed", "Charlock", "Doublegee", "Turnip Weed", "Wild Radish", "Variegated Thistle", "Vetch", "Tares"],
          states: ["All"],
          rate: "20",
          rateMax: "25",
          unit: "mL/ha",
          stage: "As per Table 4 weed stages",
          note: "20-25 mL PRIORITY + 315-440 mL ADAMA LVE MCPA 570. Ryegrass is genetically diverse and not all cultivars have been tested for tolerance to PRIORITY or PRIORITY plus LVE MCPA 570. Test a small area of crop before using PRIORITY tank mixtures over large areas of varieties with which you don't have experience. Minor, transient chlorosis and growth retardation may result."
        }
      ]
    },

    // ── 3. Fallow — Table 5 Weeds ──
    {
      crop: "Fallow (Winter Fallow)",
      cropList: ["Fallow"],
      weeds: [
        {
          weed: "Annual Ground Cherry, Wild Gooseberry",
          pestList: ["Annual Ground Cherry", "Wild Gooseberry"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "2 to 8 leaf, up to 15 cm tall",
          note: "20 mL PRIORITY + 375 mL Flagship 400. Always apply with Uptake Spraying Oil or equivalent formulation at 500 mL/100 L (0.5% v/v)."
        },
        {
          weed: "Apple of Peru",
          pestList: ["Apple of Peru"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Seedlings up to 15 cm tall",
          note: "20 mL PRIORITY + 375 mL Flagship 400."
        },
        {
          weed: "Bathurst Burr, Noogoora Burr",
          pestList: ["Bathurst Burr", "Noogoora Burr"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "2 to 8 leaf stage, up to 20 cm tall",
          note: "20 mL PRIORITY + 375 mL Flagship 400."
        },
        {
          weed: "Bedstraw, Cleavers",
          pestList: ["Bedstraw", "Cleavers"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 5 whorl",
          note: "25 mL PRIORITY + 500 mL Flagship 400."
        },
        {
          weed: "Bellvine",
          pestList: ["Bellvine"],
          states: ["All"],
          rate: "15",
          rateMax: "15",
          unit: "mL/ha",
          stage: "Pre-flowering",
          note: "15 mL PRIORITY + 250 mL Flagship 400 + 1 L Wipe-Out Pro."
        },
        {
          weed: "Bladder Ketmia",
          pestList: ["Bladder Ketmia"],
          states: ["All"],
          rate: "15",
          rateMax: "15",
          unit: "mL/ha",
          stage: "4 to 8 leaf, up to 10 cm tall",
          note: "15 mL PRIORITY + 250 mL Flagship 400 + 1 L Wipe-Out Pro."
        },
        {
          weed: "Caltrop (Yellow Vine)",
          pestList: ["Caltrop"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 15 cm diameter",
          note: "25 mL PRIORITY + 500 mL Flagship 400 OR 15 mL PRIORITY + 250 mL Flagship 400 + 850 mL Wipe-Out Pro."
        },
        {
          weed: "Climbing Buckwheat / Black Bindweed",
          pestList: ["Climbing Buckwheat", "Black Bindweed"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "2 to 8 leaf up to 10 cm diameter",
          note: "20 mL PRIORITY + 375 mL Flagship 400."
        },
        {
          weed: "Cowvine",
          pestList: ["Cowvine"],
          states: ["All"],
          rate: "15",
          rateMax: "15",
          unit: "mL/ha",
          stage: "2 to 10 leaf, up to 10 cm diameter",
          note: "15 mL PRIORITY + 250 mL Flagship 400 + 1 L Wipe-Out Pro."
        },
        {
          weed: "Doublegee / Spiny Emex",
          pestList: ["Doublegee", "Spiny Emex"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 4 leaf",
          note: "15-25 mL PRIORITY + 250-500 mL Flagship 400."
        },
        {
          weed: "Dwarf Amaranth",
          pestList: ["Dwarf Amaranth"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Seedlings up to 15 cm tall or rosettes up to 15 cm diameter",
          note: "25 mL PRIORITY + 500 mL Flagship 400."
        },
        {
          weed: "Marshmallow, Smallflower Mallow",
          pestList: ["Marshmallow", "Smallflower Mallow"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 8 leaf, or 20 cm",
          note: "25 mL PRIORITY + 500 mL Flagship 400."
        },
        {
          weed: "Pigweed",
          pestList: ["Pigweed"],
          states: ["All"],
          rate: "15",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Up to 10 cm diameter; 10-30 cm with Wipe-Out Pro",
          note: "Up to 10 cm: 15 mL PRIORITY + 250 mL Flagship 400. 10-30 cm: 20 mL PRIORITY + 375 mL Flagship 400 + 850 mL Wipe-Out Pro."
        },
        {
          weed: "Polymeria",
          pestList: ["Polymeria"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "2 to 10 leaf, up to 20 cm diameter",
          note: "25 mL PRIORITY + 500 mL Flagship 400 OR 15 mL PRIORITY + 250 mL Flagship 400 + 1 L Wipe-Out Pro."
        },
        {
          weed: "Rhynchosia",
          pestList: ["Rhynchosia"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Seedlings up to early flowering",
          note: "25 mL PRIORITY + 500 mL Flagship 400 OR 15 mL PRIORITY + 200 mL Flagship 400 + 700 mL Wipe-Out Pro."
        },
        {
          weed: "Silverleaf Nightshade",
          pestList: ["Silverleaf Nightshade"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "From onset of flowering to early berry-set",
          note: "20 mL PRIORITY + 375 mL Flagship 400. Apply with Uptake Spraying Oil or equivalent formulation at 1 L/100 L. To ensure maximum effect, delay application until the majority of shoots have emerged. Follow-up treatment will be required to control regrowth and is critical for optimal control."
        },
        {
          weed: "Sowthistle, Prickly Lettuce",
          pestList: ["Sowthistle", "Prickly Lettuce"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "2 to 5 leaf up to 10 cm diameter",
          note: "25 mL PRIORITY + 500 mL Flagship 400 + 500 mL Wipe-Out Pro."
        },
        {
          weed: "Thornapples",
          pestList: ["Thornapples"],
          states: ["All"],
          rate: "15",
          rateMax: "20",
          unit: "mL/ha",
          stage: "2 to 8 leaf, up to 15 cm tall",
          note: "20 mL PRIORITY + 375 mL Flagship 400 OR 15 mL PRIORITY + 250 mL Flagship 400 + 1 L Wipe-Out Pro."
        },
        {
          weed: "Volunteer Sunflowers",
          pestList: ["Volunteer Sunflowers"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "2 to 5 leaf up to 20 cm",
          note: "25 mL PRIORITY + 500 mL Flagship 400."
        },
        {
          weed: "Volunteer Pulses",
          pestList: ["Volunteer Pulses"],
          states: ["All"],
          rate: "15",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Up to 8 cm diameter/height; greater than 8 cm",
          note: "Up to 8 cm: 15-25 mL PRIORITY + 340-660 mL Wipe-Out Pro. Greater than 8 cm: 15-25 mL PRIORITY + 660 mL-1 L Wipe-Out Pro."
        },
        {
          weed: "Wireweed",
          pestList: ["Wireweed"],
          states: ["All"],
          rate: "15",
          rateMax: "15",
          unit: "mL/ha",
          stage: "2 to 3 leaf up to 10 cm tall",
          note: "15 mL PRIORITY + 250 mL Flagship 400 + 500 mL Wipe-Out Pro."
        }
      ]
    }

  ],

  // ── Rotational Crops ──────────────────────────────────────
  note: "PRIORITY and some tank mix partner herbicides have soil residual activity and can damage susceptible rotational crops. Winter re-cropping: Wheat/barley/triticale — 1 week (no min rainfall); Oats — 6 weeks (25 mm); Sub clover/canola/chickpeas/faba bean/field pea/lentils/lupins/medic/vetch — 8 months (100 mm). Summer re-cropping: Maize/sorghum — 4 months (100 mm); Mung beans — 5 months (150 mm); All other summer crops (cotton/sunflowers/soybeans) — 6 months (150 mm)."

};
