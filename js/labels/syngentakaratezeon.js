// ─────────────────────────────────────────────────────────────────────────────
// SYNGENTA KARATE ZEON® Insecticide — Label Data
// Group 3A (Synthetic Pyrethroid) | Capsule Suspension
// Source: Syngenta_KARATE ZEON _label.pdf
// APVMA Approval No: 51422/113164
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['syngentakaratezeon'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Syngenta Karate Zeon® Insecticide",

  category:         "Insecticides",
  activeIngredient: "250 g/L Lambda-cyhalothrin",
  group:            "Group 3A (Synthetic Pyrethroid)",
  modeOfAction:     "Sodium channel modulator. Contact and residual insecticide.",
  formulation:      "Capsule Suspension (CS)",
  color:            "#047857",
  apvma:            "51422/113164",
  company: "Syngenta",
  labelPdf:         "Source labels/Syngenta_KARATE ZEON _label.pdf",
  sdsPdf:           "SDS Labels/Syngenta_Karate Zeon_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Helicoverpa", "Caterpillars", "Aphids", "Mites", "Bugs", "Cutworms", "Weevils", "Thrips"],
    timing: ["Curative", "Protective"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Barley, Wheat ──────────────────────────────────
    {
      crop: "Barley, Wheat",
      cropList: ["Barley", "Wheat"],
      weeds: [
        {
          weed: "Blackhead Pasture Cockchafer (Aphodius tasmaniae)",
          pestList: ["Blackhead Pasture Cockchafer"],
          states: ["All"],
          rate: "20",
          rateMax: "40",
          unit: "mL/ha",
          stage: "Treat as soon as possible after autumn rains stimulate egg hatching and activity of existing larvae",
          note: "20–40 mL/ha. Monitor soil populations in known areas. Best results when larvae have surfaced to feed after rain. Boom spray 70–100 L water/ha. Lower rate until early June, higher rate after mid-late June. DO NOT USE ULV APPLICATION FOR THIS PEST. WHP: 14 days (H/G)."
        },
        {
          weed: "Brown or Pink Cutworm (Agrotis munda), Common Cutworm (Agrotis infusa)",
          pestList: ["Brown Cutworm", "Pink Cutworm", "Common Cutworm"],
          states: ["All"],
          rate: "12",
          rateMax: "18",
          unit: "mL/ha",
          stage: "Apply at first sign of infestation before larvae are 10 mm long",
          note: "12–18 mL/ha. Use higher rate if larvae are larger than 10 mm. Minimum 50 L water. WHP: 14 days (H/G)."
        },
        {
          weed: "Pasture Webworm (Hednota spp.)",
          pestList: ["Pasture Webworm"],
          states: ["All"],
          rate: "12",
          rateMax: "12",
          unit: "mL/ha",
          stage: "Pre-seeding or post-crop emergence at first sign of damage",
          note: "12 mL/ha. Can be tank mixed with knockdown herbicides pre-seeding. Post-crop emergence: spray at first sign of damage, minimum 50 L water/ha. Apply at first sign of infestation before larvae are 10 mm long. WHP: 14 days (H/G)."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "9",
          rateMax: "9",
          unit: "mL/ha",
          stage: "Apply at first sign of crop emergence if mites are present on establishing crop",
          note: "9 mL/ha. Monitor crop regularly for reinfestation and respray if necessary. Note: Blue Oat Mites often co-occur with Redlegged Earth Mites and 9 mL/ha may be less effective against Blue Oat Mites. WHP: 14 days (H/G)."
        },
        {
          weed: "Aphids (Rhopalosiphum spp.) — Barley Yellow Dwarf Virus vectors",
          pestList: ["Aphids", "Barley Yellow Dwarf Virus"],
          states: ["All"],
          rate: "12",
          rateMax: "18",
          unit: "mL/ha",
          stage: "Apply at 4 and 8 weeks after emergence to reduce aphid colonisation and suppress Barley Yellow Dwarf Virus",
          note: "12–18 mL/ha. Use higher rate when >15 aphids on 50% of tillers expected during the season. WHP: 14 days (H/G)."
        },
        {
          weed: "Russian Wheat Aphid (Diuraphis noxia)",
          pestList: ["Russian Wheat Aphid"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/ha",
          stage: "Begin when action thresholds are reached",
          note: "40 mL/ha. Thorough coverage is essential: ensure water volume is adequate to thoroughly cover all parts of the crop canopy, including undersides of and in between leaves. WHP: 14 days (H/G)."
        }
      ]
    },

    // ── 2. Brassicas (Broccoli, Brussels Sprouts, Cabbages, Cauliflowers, Forage Brassicas) ──
    {
      crop: "Brassicas (Broccoli, Brussels Sprouts, Cabbages, Cauliflowers, Forage Brassicas)",
      cropList: ["Broccoli", "Brussels Sprouts", "Cabbages", "Cauliflowers", "Forage Brassicas", "Brassicas"],
      weeds: [
        {
          weed: "Cabbage Cluster Caterpillar (Crocidolomia pavonana), Cabbage White Butterfly (Pieris rapae), Diamondback Moth (Plutella xylostella)",
          pestList: ["Cabbage Cluster Caterpillar", "Cabbage White Butterfly", "Diamondback Moth"],
          states: ["All"],
          rate: "24",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Apply at first sign of infestation, schedule spraying on a weekly basis",
          note: "24–36 mL/ha plus Agral Spray Adjuvant at 10 mL/100 L. Use the lower rate, use the higher rate for longer persistence. Minimum 500 L water/ha. WHP: 2 days (H/G). Forage Brassicas grazing WHP: 2 days."
        }
      ]
    },

    // ── 3. Canola ──────────────────────────────────
    {
      crop: "Canola",
      cropList: ["Canola"],
      weeds: [
        {
          weed: "Cabbage White Butterfly (Pieris rapae), Cabbage Moth / Diamondback Moth (Plutella xylostella)",
          pestList: ["Cabbage White Butterfly", "Cabbage Moth", "Diamondback Moth"],
          states: ["All"],
          rate: "24",
          rateMax: "24",
          unit: "mL/ha",
          stage: "Apply as soon as larvae reach threshold numbers",
          note: "24 mL/ha. Check with local officer of the Department of Agriculture for thresholds applicable to the particular growth stage of the crop. WHP: 7 days (H/G)."
        },
        {
          weed: "Grey Cluster Bug, Rutherglen Bug (Nysius spp.)",
          pestList: ["Grey Cluster Bug", "Rutherglen Bug"],
          states: ["All"],
          rate: "36",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Apply only near maturity when severe infestations are likely to downgrade yields",
          note: "36 mL/ha. WHP: 7 days (H/G)."
        },
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["All"],
          rate: "24",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Apply at hatching or soon after",
          note: "24–36 mL/ha. Use higher rate if the crop is dense or larvae are larger than 10 mm. WHP: 7 days (H/G)."
        },
        {
          weed: "Thrips (Thrips tabaci)",
          pestList: ["Thrips"],
          states: ["All"],
          rate: "36",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Apply only near maturity when severe infestations are likely to downgrade yields",
          note: "36 mL/ha. WHP: 7 days (H/G)."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "9",
          rateMax: "9",
          unit: "mL/ha",
          stage: "Apply at first sign of crop emergence if mites are present",
          note: "9 mL/ha. Monitor crop regularly for reinfestation and respray if necessary. Note: 9 mL/ha may be less effective against Blue Oat Mites. WHP: 7 days (H/G)."
        }
      ]
    },

    // ── 4. Chickpeas, Faba Beans, Lentils, Vetch ──────────────────────────────────
    {
      crop: "Chickpeas, Faba Beans, Lentils, Vetch",
      cropList: ["Chickpeas", "Faba Beans", "Lentils", "Vetch"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["All"],
          rate: "24",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Apply at hatching or soon after",
          note: "24–36 mL/ha. Use higher rate if crop is dense or larvae are larger than 10 mm. WHP: 7 days (H/G). Control of Lucerne Flea will not be obtained with this application."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "9",
          rateMax: "9",
          unit: "mL/ha",
          stage: "Apply at first sign of crop emergence if mites are present",
          note: "9 mL/ha. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained with this application. Note: 9 mL/ha may be less effective against Blue Oat Mites. WHP: 7 days (H/G)."
        }
      ]
    },

    // ── 5. Cotton ──────────────────────────────────
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Apple Dimpling Bug (Campylomma liebknechti), Brokenbacked Bug (Taylorilygus pallidulus), Brown Mirid (C. pacificus), Cottonseed Bug (Oxycarenus luctuosus), Green Mirid (Creontiades dilutus), Leafhoppers (Austroasca viridigrisea, Amrasca terraereginae), Pale Cotton Stainer (Dysdercus sidae)",
          pestList: ["Apple Dimpling Bug", "Brokenbacked Bug", "Brown Mirid", "Cottonseed Bug", "Green Mirid", "Leafhoppers", "Pale Cotton Stainer"],
          states: ["All"],
          rate: "60",
          rateMax: "60",
          unit: "mL/ha",
          stage: "Apply at recommended threshold levels as indicated by field checks",
          note: "60 mL/ha. WHP: 21 days (H)."
        },
        {
          weed: "Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera) — Light egg laying",
          pestList: ["Cotton Bollworm", "Native Budworm", "Helicoverpa"],
          states: ["All"],
          rate: "60",
          rateMax: "60",
          unit: "mL/ha",
          stage: "Apply when egg laying is light, less than 25 eggs/100 terminals and no larvae present",
          note: "60 mL/ha. Light egg laying: <25 eggs/100 terminals, no larvae. WHP: 21 days (H)."
        },
        {
          weed: "Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera) — Moderate egg laying",
          pestList: ["Cotton Bollworm", "Native Budworm", "Helicoverpa"],
          states: ["All"],
          rate: "70",
          rateMax: "70",
          unit: "mL/ha",
          stage: "Apply when egg laying is moderate, >25 eggs/100 terminals and/or when <12 newly hatched larvae/100 terminals",
          note: "70 mL/ha. Moderate egg laying: >25 eggs/100 terminals and/or <12 newly hatched larvae/100 terminals. WHP: 21 days (H)."
        },
        {
          weed: "Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera) — Heavy egg laying",
          pestList: ["Cotton Bollworm", "Native Budworm", "Helicoverpa"],
          states: ["All"],
          rate: "85",
          rateMax: "85",
          unit: "mL/ha",
          stage: "Apply when egg laying is heavy and continuous and/or when H. punctigera larvae are >10 mm. For H. armigera, apply only to larvae <5 mm",
          note: "85 mL/ha. Heavy/continuous egg laying. Qld, Nth NSW: DO NOT apply to resistant H. armigera larvae larger than 5 mm in length. WHP: 21 days (H)."
        },
        {
          weed: "Pink-Spotted Bollworm (Pectinophora scutigera)",
          pestList: ["Pink-Spotted Bollworm"],
          states: ["All"],
          rate: "70",
          rateMax: "70",
          unit: "mL/ha",
          stage: "Controlled with the Helicoverpa spp. program when used at this rate",
          note: "70 mL/ha. If Pink-Spotted Bollworm is the only pest present, apply when >10 adult moths caught in pheromone traps on 2 consecutive nights. WHP: 21 days (H)."
        }
      ]
    },

    // ── 6. Field Peas ──────────────────────────────────
    {
      crop: "Field Peas",
      cropList: ["Field Peas"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["All"],
          rate: "24",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Apply at hatching or soon after",
          note: "24–36 mL/ha. Use higher rate if crop is dense or larvae are larger than 10 mm. WHP: 7 days (H/G)."
        },
        {
          weed: "Pea Weevil (Bruchus pisorum)",
          pestList: ["Pea Weevil"],
          states: ["NSW", "SA"],
          rate: "24",
          rateMax: "24",
          unit: "mL/ha",
          stage: "Monitor crops regularly once flowering commences, apply as soon as adult weevils are detected",
          note: "24 mL/ha (NSW, SA only). SA: follow State Department of Agriculture guidelines. Adults must be controlled before egg laying begins. WHP: 7 days (H/G)."
        },
        {
          weed: "Pea Weevil (Bruchus pisorum)",
          pestList: ["Pea Weevil"],
          states: ["Vic", "WA"],
          rate: "36",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Monitor crops regularly once flowering commences, apply as soon as adult weevils are detected",
          note: "36 mL/ha (Vic, WA only). WA: commence monitoring using sweep net prior to flowering. Spray when 1 weevil/100 sweeps for milling grade seed, or 1 weevil/25 sweeps for feed grade seed. Use border or whole crop spray depending on Pea Weevil penetration. WHP: 7 days (H/G)."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "9",
          rateMax: "9",
          unit: "mL/ha",
          stage: "Apply at first sign of crop emergence if mites are present",
          note: "9 mL/ha. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained. Note: 9 mL/ha may be less effective against Blue Oat Mites. WHP: 7 days (H/G)."
        }
      ]
    },

    // ── 7. Lemons, Oranges ──────────────────────────────────
    {
      crop: "Lemons, Oranges",
      cropList: ["Lemons", "Oranges", "Citrus"],
      weeds: [
        {
          weed: "Fullers Rose Weevil (Asynonychus cervinus)",
          pestList: ["Fullers Rose Weevil"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/100L",
          stage: "Trees must be treated in the early stages of the adult weevils emerging from the ground",
          note: "300 mL/100 L as a directed spray. Apply 250 mL spray solution to the tree trunk at about 300 mm from the ground in a 100 mm band. Deliver spray through a U shaped wand fitted with 4 nozzles evenly spaced around the tree. Ensure trees are skirted and all weeds under the trees are removed. WHP: 4 weeks (H)."
        }
      ]
    },

    // ── 8. Lucerne ──────────────────────────────────
    {
      crop: "Lucerne",
      cropList: ["Lucerne"],
      weeds: [
        {
          weed: "Blackhead Pasture Cockchafer (Aphodius tasmaniae)",
          pestList: ["Blackhead Pasture Cockchafer"],
          states: ["All"],
          rate: "20",
          rateMax: "40",
          unit: "mL/ha",
          stage: "Treat as soon as possible after autumn rains stimulate egg hatching",
          note: "20–40 mL/ha. Monitor soil populations in known areas. Best results when larvae have surfaced to feed after rain. Boom spray 70–100 L water/ha. Lower rate until early June, higher rate after mid-late June. DO NOT USE ULV APPLICATION FOR THIS PEST. WHP: 14 days (H/G)."
        },
        {
          weed: "Lucerne Leaf Roller (Merophyas divulsana)",
          pestList: ["Lucerne Leaf Roller"],
          states: ["All"],
          rate: "24",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Apply at hatching or soon after, use higher rate if crop is dense or larvae >10 mm",
          note: "24–36 mL/ha. Apply the first spray when about 30% of the terminals are rolled. WHP: 14 days (H/G)."
        },
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["All"],
          rate: "24",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Apply at hatching or soon after",
          note: "24–36 mL/ha. Use higher rate if crop is dense or larvae are larger than 10 mm. WHP: 14 days (H/G)."
        },
        {
          weed: "Pea Aphid (Acyrthosiphon pisum)",
          pestList: ["Pea Aphid"],
          states: ["All"],
          rate: "24",
          rateMax: "24",
          unit: "mL/ha",
          stage: "Good coverage, particularly the stems, is essential",
          note: "24 mL/ha. Use hollow cone nozzles. WHP: 14 days (H/G)."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "9",
          rateMax: "9",
          unit: "mL/ha",
          stage: "Apply at first sign of crop emergence if mites are present",
          note: "9 mL/ha. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained. Note: 9 mL/ha may be less effective against Blue Oat Mites. WHP: 14 days (H/G)."
        }
      ]
    },

    // ── 9. Lupins ──────────────────────────────────
    {
      crop: "Lupins",
      cropList: ["Lupins"],
      weeds: [
        {
          weed: "Brown Pasture Looper (Ciampa arietaria)",
          pestList: ["Brown Pasture Looper"],
          states: ["All"],
          rate: "12",
          rateMax: "12",
          unit: "mL/ha",
          stage: "Once crop has emerged, inspect regularly and apply at the first sign of damage",
          note: "12 mL/ha. Minimum 50 L water/ha. DO NOT USE ULV APPLICATION FOR THIS PEST. WHP: 14 days (H)."
        },
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["All"],
          rate: "24",
          rateMax: "24",
          unit: "mL/ha",
          stage: "Apply at hatching or soon after when larvae are small",
          note: "24 mL/ha. WA only: environmental factors may cause populations of small caterpillars to decline, reducing damage potential. Spraying should commence once caterpillars are 12 mm in length. WHP: 14 days (H)."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "9",
          rateMax: "9",
          unit: "mL/ha",
          stage: "Apply at first sign of crop emergence if mites are present",
          note: "9 mL/ha. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained. Note: 9 mL/ha may be less effective against Blue Oat Mites. WHP: 14 days (H)."
        }
      ]
    },

    // ── 10. Mung Beans, Navy Beans ──────────────────────────────────
    {
      crop: "Mung Beans, Navy Beans",
      cropList: ["Mung Beans", "Navy Beans"],
      weeds: [
        {
          weed: "Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Corn Earworm", "Native Budworm", "Helicoverpa"],
          states: ["All"],
          rate: "60",
          rateMax: "70",
          unit: "mL/ha",
          stage: "Apply when flower or pod feeding larvae reach a population of 1 to 2/m of row in navy beans and 1/m of row in mung beans",
          note: "60–70 mL/ha. Use higher rate if pest numbers are high or larvae are larger than 10 mm. Qld, Nth NSW: where Corn Earworm has established resistance to pyrethroids DO NOT apply to Corn Earworm larvae larger than 5 mm. WHP: 1 day (H/G) if harvested green; 14 days (H/G) if harvested dry."
        }
      ]
    },

    // ── 11. Onions (bulb) ──────────────────────────────────
    {
      crop: "Onions (bulb)",
      cropList: ["Onions"],
      weeds: [
        {
          weed: "Onion Thrips (Thrips tabaci)",
          pestList: ["Onion Thrips"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/ha",
          stage: "Apply when thrips first appear",
          note: "40 mL/ha. Apply via ground equipment in a minimum 300 L water/ha. DO NOT exceed a maximum of 4 applications per crop with a minimum retreatment interval of 7 days between consecutive sprays. WHP: 14 days (H)."
        }
      ]
    },

    // ── 12. Pasture ──────────────────────────────────
    {
      crop: "Pasture",
      cropList: ["Pasture"],
      weeds: [
        {
          weed: "Blackhead Pasture Cockchafer (Aphodius tasmaniae)",
          pestList: ["Blackhead Pasture Cockchafer"],
          states: ["All"],
          rate: "20",
          rateMax: "40",
          unit: "mL/ha",
          stage: "Treat as soon as possible after autumn rains stimulate egg hatching",
          note: "20–40 mL/ha. Monitor soil populations in known areas. Best results when larvae have surfaced to feed after rain. Boom spray 70–100 L water/ha. Lower rate until early June, higher rate after mid-late June. DO NOT USE ULV APPLICATION FOR THIS PEST. WHP: 14 days (H/G)."
        },
        {
          weed: "Brown Pasture Looper (Ciampa arietaria)",
          pestList: ["Brown Pasture Looper"],
          states: ["All"],
          rate: "12",
          rateMax: "12",
          unit: "mL/ha",
          stage: "Apply at first sign of damage",
          note: "12 mL/ha. DO NOT USE ULV APPLICATION FOR THIS PEST. WHP: 14 days (H/G)."
        },
        {
          weed: "Brown or Pink Cutworm (Agrotis munda), Common Cutworm (Agrotis infusa)",
          pestList: ["Brown Cutworm", "Pink Cutworm", "Common Cutworm"],
          states: ["All"],
          rate: "12",
          rateMax: "18",
          unit: "mL/ha",
          stage: "Apply at first sign of infestation before larvae are 10 mm long",
          note: "12–18 mL/ha. Use higher rate if larvae are larger than 10 mm. Minimum 50 L water. WHP: 14 days (H/G)."
        },
        {
          weed: "Pasture Webworm (Hednota spp.)",
          pestList: ["Pasture Webworm"],
          states: ["All"],
          rate: "12",
          rateMax: "12",
          unit: "mL/ha",
          stage: "Apply once larvae are present using adequate water to ensure good penetration",
          note: "12 mL/ha. WHP: 14 days (H/G)."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "9",
          rateMax: "9",
          unit: "mL/ha",
          stage: "Apply at first sign of crop emergence if mites are present",
          note: "9 mL/ha. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained. Note: 9 mL/ha may be less effective against Blue Oat Mites. WHP: 14 days (H/G)."
        }
      ]
    },

    // ── 13. Potatoes ──────────────────────────────────
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Vegetable Jassid (Austroasca viridigrisea)",
          pestList: ["Vegetable Jassid"],
          states: ["All"],
          rate: "24",
          rateMax: "24",
          unit: "mL/ha",
          stage: "Apply only when numbers are excessive",
          note: "24 mL/ha. WHP: 7 days (H)."
        }
      ]
    },

    // ── 14. Sorghum ──────────────────────────────────
    {
      crop: "Sorghum",
      cropList: ["Sorghum"],
      weeds: [
        {
          weed: "Corn Earworm (Helicoverpa armigera)",
          pestList: ["Corn Earworm", "Helicoverpa"],
          states: ["All"],
          rate: "60",
          rateMax: "70",
          unit: "mL/ha",
          stage: "Apply when larval numbers reach 2/head. Use the higher rate if pest pressure is severe",
          note: "60–70 mL/ha. Best results are achieved on small larvae. WHP: 14 days (H/G)."
        },
        {
          weed: "Sorghum Midge (Contarinia sorghicola)",
          pestList: ["Sorghum Midge"],
          states: ["All"],
          rate: "18",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Apply when midge numbers reach 1 to 2/head",
          note: "18–36 mL/ha. Use the higher rate for residual protection. WHP: 14 days (H/G)."
        }
      ]
    },

    // ── 15. Soybeans ──────────────────────────────────
    {
      crop: "Soybeans",
      cropList: ["Soybeans"],
      weeds: [
        {
          weed: "Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Corn Earworm", "Native Budworm", "Helicoverpa"],
          states: ["All"],
          rate: "60",
          rateMax: "70",
          unit: "mL/ha",
          stage: "Apply when flower or pod feeding larvae reach a population of 2/m of row in soybeans",
          note: "60–70 mL/ha. Use higher rate if pest numbers are high or larvae are larger than 10 mm. Qld, Nth NSW: DO NOT apply to resistant H. armigera larvae larger than 5 mm. WHP: 21 days (H/G)."
        }
      ]
    },

    // ── 16. Sunflowers ──────────────────────────────────
    {
      crop: "Sunflowers",
      cropList: ["Sunflowers"],
      weeds: [
        {
          weed: "Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Corn Earworm", "Native Budworm", "Helicoverpa"],
          states: ["Qld", "NSW"],
          rate: "60",
          rateMax: "70",
          unit: "mL/ha",
          stage: "Apply when an average of 2 to 3 larvae are present/head or when larvae are damaging plants",
          note: "60–70 mL/ha (Qld, Nth NSW). Use the higher rate if pest numbers are high and/or H. punctigera larvae are larger than 10 mm in length. Qld, Nth NSW: DO NOT apply to resistant H. armigera larvae larger than 5 mm. If flowering has started, application should be deferred until after flowering but before the heads turn down. WHP: 28 days (H)."
        },
        {
          weed: "Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Corn Earworm", "Native Budworm", "Helicoverpa"],
          states: ["Vic"],
          rate: "48",
          rateMax: "60",
          unit: "mL/ha",
          stage: "Apply when an average of 2 to 3 larvae are present/head or when larvae are damaging plants",
          note: "48–60 mL/ha (Sth NSW, Vic). Use the higher rate if pest numbers are high and/or H. punctigera larvae are larger than 10 mm. WHP: 28 days (H)."
        },
        {
          weed: "Grey Cluster Bug, Rutherglen Bug (Nysius spp.)",
          pestList: ["Grey Cluster Bug", "Rutherglen Bug"],
          states: ["All"],
          rate: "36",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Apply when numbers reach 10 to 15 adults/plant at budding in dry land crops or 20 to 25 in irrigated crops",
          note: "36 mL/ha. Qld, Nth NSW: if Helicoverpa armigera also present, use a minimum 60 mL product. WHP: 28 days (H)."
        }
      ]
    },

    // ── 17. Tomatoes bush ──────────────────────────────────
    {
      crop: "Tomatoes bush",
      cropList: ["Tomatoes", "Bush Tomatoes"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["All"],
          rate: "30",
          rateMax: "36",
          unit: "mL/ha",
          stage: "Treat plants on a 7 to 14 day schedule",
          note: "4–5 mL/100 L or 30–36 mL/ha. Qld, Nth NSW: DO NOT apply to H. armigera larvae larger than 5 mm. To help contain resistance, alternate sprays between different chemical groups. WHP: 1 day (H)."
        },
        {
          weed: "Tomato Grub (Helicoverpa armigera)",
          pestList: ["Tomato Grub", "Helicoverpa"],
          states: ["Vic", "Tas", "SA", "WA"],
          rate: "4",
          rateMax: "4",
          unit: "mL/100L",
          stage: "Apply soon after egg lay",
          note: "4 mL/100 L (Vic, Tas, SA, WA only). Check the crop every few days and follow the Summer Crop Insecticide Strategy. Some varieties especially Floradade may show phytotoxicity. WHP: 1 day (H)."
        },
        {
          weed: "Tomato Grub (Helicoverpa armigera)",
          pestList: ["Tomato Grub", "Helicoverpa"],
          states: ["Qld", "NSW", "NT"],
          rate: "60",
          rateMax: "60",
          unit: "mL/ha",
          stage: "Apply soon after egg lay",
          note: "60 mL/ha (Qld, NSW, NT only). Check the crop every few days and follow the Summer Crop Insecticide Strategy. Some varieties especially Floradade may show phytotoxicity. WHP: 1 day (H)."
        }
      ]
    },

    // ── 18. Tomatoes trellis ──────────────────────────────────
    {
      crop: "Tomatoes trellis",
      cropList: ["Tomatoes", "Trellis Tomatoes"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Tomato Grub (Helicoverpa armigera)",
          pestList: ["Native Budworm", "Tomato Grub", "Helicoverpa"],
          states: ["All"],
          rate: "4",
          rateMax: "5",
          unit: "mL/100L",
          stage: "Apply on a 7 to 14 day schedule",
          note: "4–5 mL/100 L. Check the crop every few days and follow the Summer Crop Insecticide Strategy. Some varieties especially Floradade may show phytotoxicity."
        }
      ]
    }

  ],

  // ── Withholding ──────────────────────────────────────────
  withholding: {
    harvest: "Mung Beans/Navy Beans (green), Tomatoes: 1 day. Brassicas (Cabbages, Cauliflowers, Broccoli, Brussels Sprouts): 2 days. Canola, Chickpeas, Faba Beans, Field Peas, Lentils, Potatoes, Vetch: 7 days. Barley, Lucerne, Mung Beans (dry), Navy Beans (dry), Onions, Pasture, Sorghum, Wheat: 14 days. Cotton, Soybeans: 21 days. Lemons, Oranges, Sunflowers: 4 weeks.",
    grazing: "Mung Beans/Navy Beans (green): 1 day. Forage Brassicas: 2 days. Canola, Chickpeas, Faba Beans, Field Peas, Lentils, Vetch: 7 days. Barley, Lucerne, Mung Beans (dry), Navy Beans (dry), Pasture, Sorghum, Wheat: 14 days. Soybeans: 21 days."
  },

  // ── Notes ──────────────────────────────────────────
  note: "Contact and residual insecticide. For ULV application, KARATE ZEON can be bulked up with spraying oils for all uses except those indicated in Critical Comments (Blackhead Pasture Cockchafer, Brown Pasture Looper). Toxic to bees — DO NOT spray when bees are actively foraging. Dangerous to fish and aquatic invertebrates. DO NOT contaminate streams, rivers or waterways. DO NOT apply if rain is expected within 6 hours. For ground rigs, volume of liquid applied should be 50 to 100 L/ha. Aerial: at least 10 to 20 L water/ha.",

  // ── Restraints ──────────────────────────────────────────
  restraints: [
    "DO NOT apply if rain is expected within 6 hours",
    "Toxic to bees — DO NOT spray when bees are actively foraging. Reduce risk by spraying early morning or late evening.",
    "Dangerous to fish and aquatic invertebrates — DO NOT contaminate streams, rivers or waterways",
    "DO NOT allow entry into treated areas until the spray has dried",
    "Re-entry: wear cotton overalls and chemical resistant gloves",
    "Helicoverpa armigera resistance: In Nth NSW and Qld, DO NOT apply to resistant H. armigera larvae larger than 5 mm. Follow Summer Crop Insecticide Strategy."
  ]

};
