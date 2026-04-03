// ─────────────────────────────────────────────────────────
// NUFARM STRIKER HERBICIDE — Label Data
// Group 14 (Diphenyl Ether) | Emulsifiable Concentrate (EC)
// Source: Nufarm_Striker_Label.pdf
// APVMA Approval No: 56994
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────
productDatabase['striker'] = {

  name:             "Nufarm Striker® Herbicide",
  company: "Nufarm",


  category:         "Herbicides",
  activeIngredient: "240 g/L Oxyfluorfen",
  group:            "Group 14 (Diphenyl Ether)",
  modeOfAction:     "Inhibitor of protoporphyrinogen oxidase (PPO inhibitor)",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#0d9488",
  apvma:            "56994",
  labelPdf: "Source labels/Nufarm_Nufarm_Striker_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/STRIKER_HERBICIDE.pdf",
  signalHeading:    "Caution",

  classification: {
    type: "Herbicide",
    target: ["Annual Grasses", "Broadleaf Weeds"],
    timing: ["Pre-emergent", "Post-emergent", "Pre-plant"]
  },

  crops: [

    {
      crop: "Tree Fruit, Nuts and Vines — Dormant Application (Weed Free Soil)",
      cropList: ["Tree Fruit","Nuts And Vines","Dormant Application"],
      weeds: [
        {
          weed: "Annual grasses, broadleaf weeds (refer to Weeds Controlled list)",
          pestList: ["Annual Grasses","Broadleaf Weeds"],
          states: ["All"],
          rate: "3",
          rateMax: "4",
          unit: "L/ha",
          stage: "Weed free soil — apply prior to weed emergence. Dormant period only.",
          note: "DO NOT apply once budswell has occurred. Apply to freshly cultivated weed free soil. Use higher rate for longer residual control (up to 4 months). Where grass weeds are the major problem, mix lower rate with 4.5 L/ha Surflan 500 or 4.5 kg/ha Devrinol-C. Apply 250–500 L water/ha. For trees/vines less than 3 years old, use rates below 1 L/ha only."
        },
        {
          weed: "Annual grasses, broadleaf seedlings (refer to Weeds Controlled list)",
          pestList: ["Annual Grasses","Broadleaf Seedlings"],
          states: ["All"],
          rate: "3",
          rateMax: "4",
          unit: "L/ha",
          stage: "Weeds at 4–6 true leaf stage — dormant period only.",
          note: "DO NOT apply once budswell has occurred. Tank mix with 250 g/L paraquat, 135 g/L paraquat + 115 g/L diquat, Reglone, weedmaster DST/DUO, or Nufarm Glyphosate 450 for knockdown + residual. Add Activator Surfactant at 125 mL/100 L. Mature established weeds must be eliminated prior to application. Macadamias: apply in 250–500 L water/ha, apply after harvest, avoid spray contact with foliage and stem, DO NOT apply to nuts on the ground."
        }
      ]
    },

    {
      crop: "Tree Fruit, Nuts and Vines — Tank Mix with Paraquat/Diquat (Emerged Weeds)",
      cropList: ["Tree Fruit","Nuts And Vines","Tank Mix With Paraquat/Diquat"],
      weeds: [
        {
          weed: "Small flowered mallow, evening primrose and other weeds sensitive to oxyfluorfen",
          pestList: ["Small Flowered Mallow","Evening Primrose And Other Weeds Sensitive To Oxyfluorfen"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/ha",
          stage: "Emerged weeds present — tank mix with 135 g/L paraquat + 115 g/L diquat product at label rates",
          note: "Alternatively use 25–30 mL/100 L plus paraquat+diquat at recommended rates. Addition of Nufarm Striker improves control of small flowered mallow, evening primrose and other sensitive weeds. Refer to paraquat+diquat label and follow all directions."
        }
      ]
    },

    {
      crop: "Tree Fruit, Nuts and Vines — Tank Mix with Glyphosate (Spike Application)",
      cropList: ["Tree Fruit","Nuts And Vines","Tank Mix With Glyphosate"],
      weeds: [
        {
          weed: "Annual nettles (Urtica spp.), marshmallow (Malva parviflora), general broadleaf/grass weeds",
          pestList: ["Annual Nettles","Marshmallow","General Broadleaf/Grass Weeds"],
          states: ["All"],
          rate: "75",
          rateMax: "75",
          unit: "mL/ha",
          stage: "Tank mix with glyphosate products at recommended label rates",
          note: "Add 75 mL/ha Nufarm Striker to weedmaster DST, weedmaster DUO or Nufarm Glyphosate 450 at recommended rates. Improves knockdown speed and adds control of annual nettles and marshmallow. DO NOT apply near trees or vines less than 3 years old unless effectively shielded from spray and drift."
        }
      ]
    },

    {
      crop: "Pyrethrum — Bare-Rooted Transplants or Seedlings (Pre-plant)",
      cropList: ["Pyrethrum","Bare-Rooted Transplants Or Seedlings"],
      weeds: [
        {
          weed: "Annual grasses, broadleaf weeds (except chickweed) — refer to Weeds Controlled list",
          pestList: ["Annual Grasses","Broadleaf Weeds — Refer To Weeds Controlled List"],
          states: ["All"],
          rate: "4",
          rateMax: "6",
          unit: "L/ha",
          stage: "Pre-plant — incorporated into weed-free soil worked to a fine tilth",
          note: "Apply prior to final soil preparation. Use multiple-tyne cultivator or rotary harrows for final soil preparation. Use 6 L/ha rate for heavy black clay soils only (Derwent and Coal River Valleys, Tasmania). Nufarm Striker will not provide consistent control of chickweed."
        }
      ]
    },

    {
      crop: "Pyrethrum — Established Crops Greater Than 4 True Leaf (Emerged Weeds)",
      cropList: ["Pyrethrum","Established Crops Greater Than 4 True Leaf"],
      weeds: [
        {
          weed: "Blackberry nightshade, fumitory, hogweed, sorrel, volunteer potato, cleavers, field bindweed, groundsel",
          pestList: ["Blackberry Nightshade","Fumitory","Hogweed","Sorrel","Volunteer Potato","Cleavers","Field Bindweed","Groundsel"],
          states: ["All"],
          rate: "100",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Pyrethrum growth stage greater than 4 true leaf — emerged weeds present",
          note: "Apply when pyrethrum growth stage is greater than 4 true leaf."
        },
        {
          weed: "Blackberry nightshade, fumitory, hogweed, sorrel, volunteer potato, cleavers, field bindweed, groundsel, sowthistle, spear thistle",
          pestList: ["Blackberry Nightshade","Fumitory","Hogweed","Sorrel","Volunteer Potato","Cleavers","Field Bindweed","Groundsel","Sowthistle","Spear Thistle"],
          states: ["All"],
          rate: "200",
          rateMax: "4000",
          unit: "mL/ha",
          stage: "Pyrethrum established, greater than 1 year old — emerged weeds, greater than 100 mm rosettes",
          note: "Apply when pyrethrum is greater than 100 mm rosettes. Apply rates greater than 1 L/ha ONLY between 1st of February and 31st of March. DO NOT apply later than 25 weeks before harvest."
        }
      ]
    },

    {
      crop: "Duboisia (Weed-Free Soil or Seedling Weeds)",
      cropList: ["Duboisia"],
      weeds: [
        {
          weed: "Annual grasses, broadleaf weeds — refer to Weeds Controlled list",
          pestList: ["Annual Grasses","Broadleaf Weeds — Refer To Weeds Controlled List"],
          states: ["All"],
          rate: "4",
          rateMax: "8",
          unit: "L/ha",
          stage: "Weed free soil — after transplantation or after harvest",
          note: "Apply after transplantation of young seedlings or after harvest of mature plants. Use higher rate for longer residual control (up to 6 months). Over-the-top application tolerated. For seedling weeds (4–6 true leaf): add Activator Surfactant at recommended rates; established weeds must be eliminated prior to application by mechanical means."
        }
      ]
    },

    {
      crop: "Coffee (Weed-Free Soil or Seedling Weeds)",
      cropList: ["Coffee"],
      weeds: [
        {
          weed: "Annual grasses, broadleaf weeds — refer to Weeds Controlled list",
          pestList: ["Annual Grasses","Broadleaf Weeds — Refer To Weeds Controlled List"],
          states: ["All"],
          rate: "2",
          rateMax: "4",
          unit: "L/ha",
          stage: "Weed free soil or weeds at 2–4 true leaf stage",
          note: "Apply after transplanting or under established bushes. Use higher rate for longer residual activity (up to 4 months). For seedling weeds (2–4 true leaf): tank mix with 250 g/L paraquat; add Activator Surfactant at 125 mL/100 L; apply as directed spray to avoid contact with coffee plants. Mature weeds must be eliminated mechanically prior to application. Best results on moist soil with follow-up irrigation."
        }
      ]
    },

    {
      crop: "Tropical and Subtropical Fruit (Inedible Peel) — Weed-Free Soil",
      cropList: ["Tropical And Subtropical Fruit (Inedible Peel)","Weed-Free Soil"],
      weeds: [
        {
          weed: "Annual grasses, broadleaf weeds — refer to Weeds Controlled list",
          pestList: ["Annual Grasses","Broadleaf Weeds — Refer To Weeds Controlled List"],
          states: ["All"],
          rate: "4",
          rateMax: "4",
          unit: "L/ha",
          stage: "Weed free soil; tank mix with knockdown if weeds present",
          note: "Includes: avocado, cherimoya, custard apple, durian, feijoa, guava, jackfruit, kiwi fruit, longan, lychee, mango, mangosteen, papaya, passionfruit, pawpaw, persimmon, rambutan, star apple. Best results on moist soil followed by rainfall or irrigation. If weeds present, tank mix with weedmaster DST/DUO, Nufarm Glyphosate 450, paraquat+diquat, or 250 g/L paraquat."
        }
      ]
    },

    {
      crop: "Brassica Crops (Broccoli, Cabbage, Cauliflower) — Pre-Plant",
      cropList: ["Brassica Crops","Broccoli","Cabbage","Cauliflower","Pre-Plant"],
      weeds: [
        {
          weed: "Annual grasses, broadleaf weeds — refer to Weeds Controlled list",
          pestList: ["Annual Grasses","Broadleaf Weeds — Refer To Weeds Controlled List"],
          states: ["All"],
          rate: "1.5",
          rateMax: "2",
          unit: "L/ha",
          stage: "Weed free soil — apply 4–7 days prior to transplanting",
          note: "Apply 4–7 days prior to transplanting. If soil is dry, irrigation or rainfall required prior to transplanting for activation. Use transplanting techniques causing minimal soil disturbance — excessive disturbance will lessen activity. Use higher rate when weed pressure is known to be heavy."
        }
      ]
    },

    {
      crop: "Forestry — Eucalyptus and Pinus spp. (Nursery Situations)",
      cropList: ["Forestry","Eucalyptus And Pinus Spp."],
      weeds: [
        {
          weed: "Annual grasses, broadleaf weeds — refer to Weeds Controlled list",
          pestList: ["Annual Grasses","Broadleaf Weeds — Refer To Weeds Controlled List"],
          states: ["All"],
          rate: "2",
          rateMax: "2",
          unit: "L/ha",
          stage: "Cuttings: May–Dec (4 weeks post-setting); Seedlings: Jan–Jun (3 months post-emergence in nursery)",
          note: "Use 2 L/ha/month, maximum of 3 applications. DO NOT use a surfactant. Apply to weed free soil either before or preferably soon after transplanting. Disturbance of the herbicidal barrier may reduce weed control. If air temperature exceeds 20°C, application is not recommended; apply on an overcast day if temperatures exceed 20°C. DO NOT apply under hot or windy conditions."
        }
      ]
    },

    {
      crop: "Forestry — Eucalyptus and Pinus spp. (Established Plantations)",
      cropList: ["Forestry","Eucalyptus And Pinus Spp."],
      weeds: [
        {
          weed: "Annual grasses, broadleaf weeds (weed-free soil or weeds at 4–6 true leaf stage)",
          pestList: ["Annual Grasses","Broadleaf Weeds"],
          states: ["All"],
          rate: "3",
          rateMax: "4",
          unit: "L/ha",
          stage: "Weed-free soil or weeds at 4–6 true leaf stage — apply as directed or over-the-top spray",
          note: "Apply to weed free soil before or preferably soon after transplanting. Use higher rate for longer residual control. May be tank mixed with 900 g/kg simazine to extend spectrum and duration. DO NOT use this tank mix in Eucalyptus plantations grown on sands with no clay or organic matter. Application to soft/not-hardened foliage or when air temperatures exceed 20°C may increase foliar damage risk, especially in eucalypts. Established weeds must be eliminated prior to application. For seedling weeds, add Activator Surfactant at recommended rates."
        }
      ]
    },

    {
      crop: "Forestry Trees — Windbreaks, Erosion Control, Woodlots",
      cropList: ["Forestry Trees","Windbreaks","Erosion Control","Woodlots"],
      weeds: [
        {
          weed: "Broadleaf weeds and grasses",
          pestList: ["Broadleaf Weeds And Grasses"],
          states: ["All"],
          rate: "4",
          rateMax: "4",
          unit: "L/ha",
          stage: "Weeds at 4–6 true leaf stage",
          note: "For the establishment of trees for approved farm practices such as windbreaks, erosion control, woodlots and forestry plantings. When applying as post-plant spray, ensure spray is directed to the base of seedlings or that seedlings are protected. DO NOT apply under hot or windy conditions. Spot rate: 4 mL/10 m²."
        }
      ]
    },

    {
      crop: "Prior to Sowing Winter Cereals or Cotton — Tank Mix with Glyphosate",
      cropList: ["Prior To Sowing Winter Cereals Or Cotton","Tank Mix With Glyphosate"],
      weeds: [
        {
          weed: "Annual nettles (Urtica spp.), marshmallow (Malva parviflora), general broadleaf/grass weeds",
          pestList: ["Annual Nettles","Marshmallow","General Broadleaf/Grass Weeds"],
          states: ["All"],
          rate: "75",
          rateMax: "75",
          unit: "mL/ha",
          stage: "Tank mix with glyphosate products at recommended label rates — apply prior to sowing",
          note: "Add 75 mL/ha to weedmaster DST, weedmaster DUO, or Nufarm Glyphosate 450. Improves knockdown speed and controls annual nettles and marshmallow. Refer to appropriate glyphosate product label and follow all directions."
        }
      ]
    }

  ,

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER94550: Onion seed crop weed control ──
{
  crop: "Onion seed crops — Various grass and broadleaf weeds (PER94550)",
  cropList: ["Onion"],
  permitNumber: "PER94550",
  weeds: [
    {
      weed: "Annual ryegrass, dock, chickweed, sow thistle, fat hen, misc. weeds",
      pestList: ["Grass Weeds", "Broadleaf Weeds", "Annual Weeds"],
      states: ["TAS"],
      rate: "1.125",
      rateMax: "1.125",
      unit: "L/ha",
      stage: "Foliar spray (leading up to or during inflorescence emergence)",
      note: "PERMIT PER94550 (exp. 31 Jan 2028). Clethodim 240 g/L + Hasten 1 L/ha. Seed crop for replanting only. Max 1 application per crop. Toxic to beneficial arthropods. Minimise drift to non-crop areas."
    },
    {
      weed: "Annual ryegrass, dock, chickweed, sow thistle, fat hen, misc. weeds",
      pestList: ["Grass Weeds", "Broadleaf Weeds", "Annual Weeds"],
      states: ["TAS"],
      rate: "0.75",
      rateMax: "0.75",
      unit: "L/ha",
      stage: "Foliar spray (leading up to or during inflorescence emergence)",
      note: "PERMIT PER94550 (exp. 31 Jan 2028). Clethodim 360 g/L option. Seed crop for replanting only. Max 1 application per crop."
    },
    {
      weed: "Annual ryegrass, dock, chickweed, sow thistle, fat hen, misc. weeds",
      pestList: ["Grass Weeds", "Broadleaf Weeds", "Annual Weeds"],
      states: ["TAS"],
      rate: "0.3",
      rateMax: "0.8",
      unit: "kg/ha",
      stage: "Foliar/soil spray (leading up to or during inflorescence emergence)",
      note: "PERMIT PER94550 (exp. 31 Jan 2028). Cyanazine (0.3-0.5 kg/ha standard, up to 0.8 kg/ha/crop). Max 2 applications per crop. Min 14 days between applications."
    },
    {
      weed: "Annual ryegrass, dock, chickweed, sow thistle, fat hen, misc. weeds",
      pestList: ["Grass Weeds", "Broadleaf Weeds", "Annual Weeds"],
      states: ["TAS"],
      rate: "0.15",
      rateMax: "0.15",
      unit: "L/ha",
      stage: "Foliar spray (leading up to or during inflorescence emergence)",
      note: "PERMIT PER94550 (exp. 31 Jan 2028). Haloxyfop. Seed crop for replanting only. Max 1 application per crop."
    },
    {
      weed: "Annual ryegrass, dock, chickweed, sow thistle, fat hen, misc. weeds",
      pestList: ["Grass Weeds", "Broadleaf Weeds", "Annual Weeds"],
      states: ["TAS"],
      rate: "0.3",
      rateMax: "4.9",
      unit: "L/ha",
      stage: "Foliar spray (leading up to or during inflorescence emergence)",
      note: "PERMIT PER94550 (exp. 31 Jan 2028). Ioxynil (0.3-1.5 L/ha standard, up to 4.9 L/ha/crop). Max 5 applications per crop. Min 14 days between applications."
    },
    {
      weed: "Annual ryegrass, dock, chickweed, sow thistle, fat hen, misc. weeds",
      pestList: ["Grass Weeds", "Broadleaf Weeds", "Annual Weeds"],
      states: ["TAS"],
      rate: "0.3",
      rateMax: "2.9",
      unit: "kg/ha",
      stage: "Soil/foliar spray (leading up to or during inflorescence emergence)",
      note: "PERMIT PER94550 (exp. 31 Jan 2028). Methabenzthiazuron (0.3-1.5 kg/ha standard, up to 2.9 kg/ha/crop). Max 3 applications per crop. Min 14 days between applications."
    },
    {
      weed: "Annual ryegrass, dock, chickweed, sow thistle, fat hen, misc. weeds",
      pestList: ["Grass Weeds", "Broadleaf Weeds", "Annual Weeds"],
      states: ["TAS"],
      rate: "0.5",
      rateMax: "1.5",
      unit: "L/ha",
      stage: "Pre-planting bare soil or foliar spray over plants",
      note: "PERMIT PER94550 (exp. 31 Jan 2028). Oxyfluorfen (NUFARM STRIKER) (0.5-1.0 L/ha standard, up to 1.5 L/ha/crop). Max 2 applications per crop. Min 14 days between applications. Apply pre-planting to bare soil or foliar over plants."
    },
    {
      weed: "Annual ryegrass, dock, chickweed, sow thistle, fat hen, misc. weeds",
      pestList: ["Grass Weeds", "Broadleaf Weeds", "Annual Weeds"],
      states: ["TAS"],
      rate: "0.5",
      rateMax: "4.5",
      unit: "L/ha",
      stage: "Soil/foliar spray (leading up to or during inflorescence emergence)",
      note: "PERMIT PER94550 (exp. 31 Jan 2028). Pendimethalin (STOMP XTRA) (0.5-1.0 L/ha standard, up to 4.5 L/ha/crop). Max 5 applications per crop. Min 14 days between applications."
    }
  ]
},

],

  restraints: [
    "DO NOT apply once budswell has occurred when using rates greater than 1 L/ha on tree fruit, nuts and vines.",
    "DO NOT apply when weather conditions or spraying equipment may cause spray drift onto nearby susceptible plants, crops, cropping lands or pastures.",
    "DO NOT contaminate streams, rivers or watercourses with the chemical or used containers.",
    "DO NOT apply under hot or windy conditions (forestry nursery, woodlot situations).",
    "DO NOT use surfactant in Eucalyptus/Pinus nursery situations.",
    "DO NOT apply in volumes less than 250 L/ha on weed-free soil applications.",
    "This product is highly toxic to wildlife and fish."
  ],

  compatibility: {
    compatible:   [
      "250 g/L paraquat (tank mix for knockdown + residual)",
      "135 g/L paraquat + 115 g/L diquat products",
      "Nufarm weedmaster DST, DUO",
      "Nufarm Glyphosate 450",
      "Surflan 500 (oryzalin) at 4.5 L/ha",
      "Devrinol-C at 4.5 kg/ha",
      "900 g/kg simazine (forestry tank mix)",
      "Activator Surfactant at 125 mL/100 L (when directed)"
    ],
    incompatible: [],
    notes:        [
      "When tank mixing, always refer to the appropriate label and read and follow all label directions.",
      "Fill tank at least one-third full with water before adding Striker. Maintain agitation throughout.",
      "Add non-ionic surfactant near the end of filling to minimise foaming.",
      "When tank mixing with glyphosate products, add these after Striker during filling.",
      "DO NOT use surfactant in Eucalyptus/Pinus nursery situations."
    ]
  },

  withholding: {
    harvest: "Not required when used as directed.",
    grazing: "DO NOT graze treated weeds."
  },

  surfactant:     "Non-ionic surfactant (e.g. Activator Surfactant) at 125 mL/100 L — required when applying to seedling weeds (4–6 true leaf stage) where indicated. DO NOT use surfactant in forestry nursery situations.",
  sprayerCleanup: "Triple-rinse containers before disposal. Add rinsings to spray tank. DO NOT dispose of undiluted chemical on site."

};
