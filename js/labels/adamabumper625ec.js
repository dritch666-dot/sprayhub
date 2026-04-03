// ─────────────────────────────────────────────────────────
// ADAMA Bumper® 625 EC Fungicide — Label Data
// Group 3 (DMI Fungicide) | Emulsifiable Concentrate (EC)
// Source: Adama_Bumper 625 EC_label.pdf
// APVMA Approval No: 69815/134544
// ADAMA Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['adamabumper625ec'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "ADAMA Bumper® 625 EC Fungicide",
  company: "Adama",

  category:         "Fungicides",
  activeIngredient: "625 g/L Propiconazole",
  group:            "Group 3 (DMI Fungicide)",
  modeOfAction:     "Ergosterol biosynthesis inhibitor (DMI)",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#0284c7",
  apvma:            "69815/134544",
  labelPdf:         "Source labels/Adama_Bumper 625 EC_label.pdf",
  sdsPdf:           "SDS Labels/Adama_Bumper 625_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Rust", "Leaf Spot", "Powdery Mildew", "Scald", "Brown Rot", "Sigatoka", "Septoria"],
    timing: ["Preventative", "Curative", "At first sign of disease"]
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply to turf under heat or moisture stress.",
    "DO NOT apply more than one application per year on the following couch varieties: G29, Greenless Park, National Park, Tifway, Sportsway and Wagga City."
  ],

  // ── Withholding ─────────────────────────────────────────────
  withholding: {
    harvest: "Bananas, Stone Fruit: 1 day. Barley, Oats, Poppies, Wheat: 4 weeks. Peppermint, Spearmint: 5 weeks. Peanuts: 14 days. Pineapples, Sugarcane, Turf: Not required when used as directed.",
    grazing: "Perennial Ryegrass: 4 weeks. Forage & Fodder of Cereal Grains (Wheat, Barley Oats): 7 days."
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Apricots ──────────────────────────────────────────────
    {
      crop: "Apricots",
      cropList: ["Apricots"],
      weeds: [
        {
          weed: "Prune Rust (Tranzschelia discolor)",
          pestList: ["Prune Rust"],
          states: ["SA"],
          rate: "13",
          rateMax: "13",
          unit: "mL/100L",
          stage: "Apply when the disease first occurs on new growth",
          note: "Dilute spraying: 13 mL/100 L water. Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop. Curative control: apply when the disease first occurs on new growth. DO NOT make more than 5 applications per season. Protective treatment: spray Mancozeb or Zineb mixed with Bumper 625 EC. This use is subject to a DMI anti-resistance strategy. WHP: 1 day."
        }
      ]
    },

    // ── Bananas (NSW, WA, Sth Qld) ───────────────────────────
    {
      crop: "Bananas including inter-planted with Avocados (NSW, WA, Sth Qld)",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Leaf Spot (Mycosphaerella musicola), Leaf Speckle (Mycosphaerella musae), Cordana Leaf Spot (Cordana johnstonii)",
          pestList: ["Leaf Spot", "Leaf Speckle", "Cordana Leaf Spot"],
          states: ["NSW", "WA", "Qld"],
          rate: "80",
          rateMax: "160",
          unit: "mL/ha",
          stage: "Ground: 80–160 mL + 3–5 L water-miscible oil. Aerial: 160 mL + 3–5 L oil + min 30 L water, or 160 mL + 8–10 L oil (without water)",
          note: "NSW, Sth Qld: commence spraying at the start of the summer rainy season. Max 5 sprays per season at 21–28 day intervals. For effective control apply at least 2 consecutive sprays at 21–28 day intervals before alternative protective fungicide. Nth Qld aerial: commence at start of wet season, max 6 sprays per season at 14–21 day intervals. DO NOT apply during July, August, September and October. WHP: 1 day. This use is subject to a DMI anti-resistance strategy."
        },
        {
          weed: "Black Sigatoka (Mycosphaerella fijiensis var difformis)",
          pestList: ["Black Sigatoka"],
          states: ["Qld", "NT", "WA"],
          rate: "160",
          rateMax: "160",
          unit: "mL/ha",
          stage: "Aerial: 160 mL + 8–10 L spraying oil (no further water dilution required)",
          note: "Apply by aerial application. This use does not require further dilution with water. WHP: 1 day."
        }
      ]
    },

    // ── Barley ────────────────────────────────────────────────
    {
      crop: "Barley",
      cropList: ["Barley"],
      weeds: [
        {
          weed: "Powdery Mildew (Blumeria graminis)",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "60",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Spray at the first sign of disease during the tillering stage",
          note: "A repeat spray 21 to 28 days later may be required. Ensure thorough coverage of stems and leaves. Higher rates provide longer protection. WHP: Harvest 4 weeks, Grazing 7 days."
        },
        {
          weed: "Barley Scald (Rhynchosporium secalis)",
          pestList: ["Barley Scald"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply after flag leaf is around 70% emerged",
          note: "Apply after flag leaf is around 70% emerged and before infection averages 10% on the flag-2 leaf. Ensure thorough coverage of stems and leaves. WHP: Harvest 4 weeks, Grazing 7 days."
        },
        {
          weed: "Spot Form Net Blotch (Pyrenophora teres f. maculata)",
          pestList: ["Spot Form Net Blotch"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply after flag leaf is around 70% emerged",
          note: "Apply after flag leaf is around 70% emerged and before infection averages 10% on the flag-2 leaf. Ensure thorough coverage of stems and leaves. WHP: Harvest 4 weeks, Grazing 7 days."
        }
      ]
    },

    // ── Boronia ───────────────────────────────────────────────
    {
      crop: "Boronia",
      cropList: ["Boronia"],
      weeds: [
        {
          weed: "Rust (Puccinia boroniae)",
          pestList: ["Rust"],
          states: ["WA", "Tas"],
          rate: "200",
          rateMax: "400",
          unit: "mL/ha",
          stage: "Apply 2 to 5 applications at 10 to 14 day intervals during the main disease period",
          note: "Use the lower rate when application is made protectively before disease occurs. Use the higher rate when the disease is first observed and when the minimum number of applications are applied."
        }
      ]
    },

    // ── Oats ──────────────────────────────────────────────────
    {
      crop: "Oats",
      cropList: ["Oats"],
      weeds: [
        {
          weed: "Stem Rust (Puccinia graminis f. sp. avanae)",
          pestList: ["Stem Rust"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply at the first sign of disease and before there is an average of over 2 pustules per tiller",
          note: "Ensure thorough coverage of stems and leaves. WHP: Harvest 4 weeks, Grazing 7 days."
        },
        {
          weed: "Crown Rust (Puccinia coronata f. sp. avanae)",
          pestList: ["Crown Rust"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply after flag blade leaf is fully emerged or Z39 and before disease levels reach 1% of flag leaf area",
          note: "Higher rates under high infection pressure or when longer residual protection is required. Lower rates are effective under low disease pressure but have reduced residual effect. Ensure thorough coverage. WHP: Harvest 4 weeks, Grazing 7 days."
        },
        {
          weed: "Suppression of Septoria Leaf Blotch (Leptosphaeria avenaria)",
          pestList: ["Septoria Leaf Blotch"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply after flag blade leaf is fully emerged or Z39 and if infection averages 10% on the flag-2 leaf",
          note: "The high rate of application gives a longer period of protection than the lower rates. Use higher rates on high potential crops when conditions favour severe disease development during flowering. WHP: Harvest 4 weeks, Grazing 7 days."
        }
      ]
    },

    // ── Peanuts ───────────────────────────────────────────────
    {
      crop: "Peanuts",
      cropList: ["Peanuts"],
      weeds: [
        {
          weed: "Early Leaf Spot (Cercospora arachidicola), Late Leaf Spot (Cercosporidium personatum)",
          pestList: ["Early Leaf Spot", "Late Leaf Spot"],
          states: ["NSW", "WA", "Qld"],
          rate: "160",
          rateMax: "240",
          unit: "mL/ha",
          stage: "Spray when disease symptoms are first observed at 14-day intervals",
          note: "This use is subject to a DMI anti-resistance strategy. Use rates towards the higher end of the range when wet conditions prevail. Use a fungicide from a different activity group (non-DMI) after 3 consecutive sprays using Bumper 625 EC alone. Max 5 sprays per season. Leaves may become darker green and modified in shape. WHP: 14 days."
        },
        {
          weed: "Rust (Puccinia arachidis)",
          pestList: ["Rust"],
          states: ["Qld", "WA"],
          rate: "240",
          rateMax: "240",
          unit: "mL/ha",
          stage: "Spray when disease symptoms are first observed",
          note: "Apply as per Early/Late Leaf Spot recommendations. WHP: 14 days."
        }
      ]
    },

    // ── Peppermint, Spearmint ─────────────────────────────────
    {
      crop: "Peppermint, Spearmint (grown for oil production only)",
      cropList: ["Peppermint", "Spearmint"],
      weeds: [
        {
          weed: "Mint Rust (Puccinia menthae)",
          pestList: ["Mint Rust"],
          states: ["Tas", "Vic", "NSW"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply 2 to 5 applications at 10 to 14 day intervals during the main disease period",
          note: "DO NOT use on mint grown for the fresh market. WHP: 5 weeks."
        }
      ]
    },

    // ── Perennial Ryegrass ────────────────────────────────────
    {
      crop: "Perennial Ryegrass",
      cropList: ["Perennial Ryegrass"],
      weeds: [
        {
          weed: "Stem Rust (Puccinia graminis), Blind Seed Disease (Gloeotinia granigena)",
          pestList: ["Stem Rust", "Blind Seed Disease"],
          states: ["Vic"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply at ear emergence and again at anthesis",
          note: "WHP: Grazing 4 weeks."
        }
      ]
    },

    // ── Plums (for Prune Production) ─────────────────────────
    {
      crop: "Plums for Prune Production",
      cropList: ["Plums"],
      weeds: [
        {
          weed: "Prune Rust (Tranzschelia discolor)",
          pestList: ["Prune Rust"],
          states: ["NSW", "SA", "Vic", "WA"],
          rate: "13",
          rateMax: "13",
          unit: "mL/100L",
          stage: "Apply when the disease first occurs on new growth",
          note: "Dilute spraying: 13 mL/100 L water. Apply by dilute or concentrate spraying equipment. Curative: apply when the disease first occurs on new growth. DO NOT make more than 5 applications per season. Protective: spray Mancozeb or Zineb mixed with Bumper 625 EC. This use is subject to a DMI anti-resistance strategy. WHP: 1 day."
        }
      ]
    },

    // ── Pineapples ────────────────────────────────────────────
    {
      crop: "Pineapples",
      cropList: ["Pineapples"],
      weeds: [
        {
          weed: "Base Rot (Thielaviopsis paradoxa)",
          pestList: ["Base Rot"],
          states: ["Qld", "WA", "NT"],
          rate: "4",
          rateMax: "8",
          unit: "mL/100L",
          stage: "Preplant dip: totally immerse planting material in dip solution",
          note: "Preplant dip: ensure thorough coverage by totally immersing the planting material in the dip solution. Allow 50 mL of dip solution per plant. Apply the higher rate under conditions of high disease pressure. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Poppies ───────────────────────────────────────────────
    {
      crop: "Poppies (Papaver somni-ferum)",
      cropList: ["Poppies"],
      weeds: [
        {
          weed: "Leaf Smut (Entyloma fuscum)",
          pestList: ["Leaf Smut"],
          states: ["Tas"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply as mid season application in the full flower/petal drop period when disease is present",
          note: "Usage recommended by poppy contract-companies. WHP: 4 weeks."
        }
      ]
    },

    // ── Stone Fruit ───────────────────────────────────────────
    {
      crop: "Stone Fruit",
      cropList: ["Stone Fruit"],
      weeds: [
        {
          weed: "Brown Rot — Blossom Blight (Monilinia laxa)",
          pestList: ["Brown Rot"],
          states: ["Vic", "WA", "Tas"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Apply at early (1 to 10%) blossom and again at full bloom",
          note: "Dilute spraying: 10 mL/100 L. This use is subject to a DMI anti-resistance strategy. Only two consecutive applications of DMI fungicides can be made during this period. WHP: 1 day."
        },
        {
          weed: "Brown Rot — Blossom phase (Monilinia fructicola)",
          pestList: ["Brown Rot"],
          states: ["NSW", "SA", "Qld", "Tas", "WA"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Apply at early (1 to 10%) blossom and again at full bloom",
          note: "Dilute spraying: 10 mL/100 L. Only two consecutive applications of DMI fungicides can be made during this period. WHP: 1 day."
        },
        {
          weed: "Brown Rot — Fruit phase (Monilinia fructicola)",
          pestList: ["Brown Rot"],
          states: ["Qld", "NSW", "Tas", "Vic", "SA", "WA"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Apply 3 weeks and 1 week before harvest",
          note: "Only two consecutive DMI applications can be made during this period. The last blossom blight spray and the first Brown Rot (fruit phase) spray should be regarded as consecutive applications. For varieties with extended harvesting periods, a third spray during the picking period may be applied if conditions are favourable for disease development. WHP: 1 day."
        }
      ]
    },

    // ── Sugarcane ─────────────────────────────────────────────
    {
      crop: "Sugarcane",
      cropList: ["Sugarcane"],
      weeds: [
        {
          weed: "Pineapple Disease (Ceratocystis paradoxa)",
          pestList: ["Pineapple Disease"],
          states: ["Qld", "NSW", "WA"],
          rate: "8",
          rateMax: "8",
          unit: "mL/100L",
          stage: "Ensure thorough coverage of the cut ends of sugar cane setts",
          note: "Apply as high volume spray to setts. WHP: Not required."
        }
      ]
    },

    // ── Turf ──────────────────────────────────────────────────
    {
      crop: "Turf",
      cropList: ["Turf"],
      weeds: [
        {
          weed: "Dollar Spot (Sclerotinia homeocarpa)",
          pestList: ["Dollar Spot"],
          states: ["All"],
          rate: "1200",
          rateMax: "2400",
          unit: "mL/ha",
          stage: "Preventative: spray when conditions are favourable for disease development. Curative: spray as soon as possible after first symptoms",
          note: "12 to 24 mL/100 m² in 10 to 20 L water, or 1.2 to 2.4 L/ha. Preventative applications: use rates towards the lower end of the range. A second application 14 to 28 days later if conditions continue to favour disease. Curative: use rates towards the higher end of the range and shorten application intervals. Treatments may cause Bent Grass to be darker green in colour and tighter in texture. DO NOT apply to turf under heat or moisture stress. WHP: Not required when used as directed."
        },
        {
          weed: "Spring Dead Spot (Leptosphaeria spp.)",
          pestList: ["Spring Dead Spot"],
          states: ["All"],
          rate: "2400",
          rateMax: "2400",
          unit: "mL/ha",
          stage: "Apply as a soil drench in January to March, ensuring thorough mixing with the soil",
          note: "24 mL/100 m² in 150 L of water. Apply as a soil drench and water in immediately. Spray in January to March, after renovation and recovery of active growth. Make a second application one month later where infection is severe. DO NOT renovate treated greens until active growth has recommenced in Spring. DO NOT spray in the Spring/Summer period prior to renovation. DO NOT apply more than twice per year. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Wheat ─────────────────────────────────────────────────
    {
      crop: "Wheat",
      cropList: ["Wheat"],
      weeds: [
        {
          weed: "Stripe Rust (Puccinia striiformis)",
          pestList: ["Stripe Rust"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Spray between jointing and end of flowering when 10 to 20% of leaves are infected",
          note: "A repeat spray 21 to 28 days later may be required. Use higher rate under high infection pressure or when longer residual protection is required. WHP: Harvest 4 weeks, Grazing 7 days."
        },
        {
          weed: "Powdery Mildew (Blumeria graminis)",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "60",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Spray at the first sign of the disease during the tillering stage",
          note: "A repeat spray 21 to 28 days later may be required. Ensure thorough coverage of stems and leaves. Higher rates provide longer protection. WHP: Harvest 4 weeks, Grazing 7 days."
        },
        {
          weed: "Stem Rust (Puccinia graminis)",
          pestList: ["Stem Rust"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply at the first sign of disease and before there are more than 2 pustules per tiller",
          note: "Ensure thorough coverage of stems and leaves. WHP: Harvest 4 weeks, Grazing 7 days."
        },
        {
          weed: "Septoria Tritici Blotch (Mycosphaerella graminicola)",
          pestList: ["Septoria Tritici Blotch"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply once between 70% flag leaf emergence and early flowering",
          note: "Use the higher rate under high infection pressure or where longer residual protection is required. WHP: Harvest 4 weeks, Grazing 7 days."
        },
        {
          weed: "Leaf Rust (Puccinia recondita f. sp. tritici; Puccinia triticina)",
          pestList: ["Leaf Rust"],
          states: ["All"],
          rate: "60",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply after flag leaf is 70% emerged and before disease levels reach 1% of flag leaf area",
          note: "Consider control if disease is greater than 5 to 10% on any lower leaf layer. Use higher rates under high infection pressure or when longer residual protection is required. Lower rates are effective under low disease pressure but have reduced residual effect. Ensure thorough coverage. WHP: Harvest 4 weeks, Grazing 7 days."
        },
        {
          weed: "Septoria Nodorum Blotch (Phaeosphaeria nodorum)",
          pestList: ["Septoria Nodorum Blotch"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply after flag leaves are around 70% emerged if infection averages 10% on the flag-2 leaf",
          note: "The high rate of application gives a longer period of protection. Use higher rates on high potential crops when conditions favour severe disease development during flowering. Lower rates are effective under low disease pressure but have reduced residual effect. Ensure thorough coverage. WHP: Harvest 4 weeks, Grazing 7 days."
        },
        {
          weed: "Yellow Spot (Pyrenophora tritici-repentis)",
          pestList: ["Yellow Spot"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply once between 70% flag leaf emergence and early flowering",
          note: "Use the higher rate under high infection pressure or where longer residual protection is required. Apply after 70% flag leaf emergence and before disease levels reach 5% on flag leaf. Higher rates give longer residual protection and often better economic returns. WHP: Harvest 4 weeks, Grazing 7 days."
        }
      ]
    }
  ]
};
