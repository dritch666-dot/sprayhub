// Nufarm Archer 750 - Clopyralid-based herbicide
// Product Label: Source labels/Nufarm-Archer-750-Label.pdf
// SDS: SDS Labels/NUFARM-ARCHER-750-SDS.pdf
// Active Ingredient: 750 g/kg Clopyralid
// Chemical Group: Group 4 (Pyridine herbicides - disruptor of plant cell growth)
// Company: Nufarm Australia Limited
// APVMA Approval No.: 85247/133651

productDatabase['nufarmarcher750'] = {
    name: "Nufarm Archer® 750 Herbicide",
    company: "Nufarm",

    category:         "Herbicides",
    activeIngredient: "750 g/kg Clopyralid (as monoethanolamine salt)",
    group: "Group 4 Herbicide (Pyridine carboxylic acid)",
    modeOfAction: "Disruptor of plant cell growth",
    formulation: "Soluble Granule (SG)",
    color: "#1e293b",
    apvma: "85247",
    labelPdf: "Source labels/Nufarm-Archer-750-Label.pdf",
    sdsPdf: "SDS Labels/NUFARM-ARCHER-750-SDS.pdf",
    signalHeading: "Caution",
    classification: {
      type: "Herbicide",
      target: ["Broadleaf Weeds"],
      timing: ["Pre-emergent", "Post-emergent"]
    },

    crops: [
      {
        crop: "Canola (conventional and herbicide tolerant varieties)",
        cropList: [
          "Canola - conventional",
          "Canola - herbicide tolerant (imidazolinone)",
          "Canola - herbicide tolerant (triazine)",
          "Canola - Roundup Ready"
        ],
        weeds: [
          {
            weed: "Annual medic",
            pestList: ["Annual medic"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Volunteer plants, 1 to 8 leaf",
            note: "Roundup Ready canola only; use higher rate in situations of high weed population or large weed size. Tank mix with Nufarm weedmaster DST."
          },
          {
            weed: "Annual ryegrass",
            pestList: ["Annual ryegrass"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Grass weeds 3 leaf - 2 tiller; suppression for Group 1/2 resistant populations",
            note: "Imidazolinone tolerant canola with Nufarm Intercept. Consider pre-emergent herbicide where population exceeds 200 plants/m2."
          },
          {
            weed: "Bedstraw",
            pestList: ["Bedstraw"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "2 - 6 leaf stage",
            note: "Imidazolinone tolerant canola. Suppression species in tank mix with Nufarm Intercept and Sequence 360."
          },
          {
            weed: "Capeweed",
            pestList: ["Capeweed"],
            states: ["All"],
            rate: 60,
            rateMax: 240,
            unit: "mL/ha",
            stage: "Pre-emergence to 10 cm diameter",
            note: "Multiple stages: 60 mL/ha pre-sowing with knockdown herbicide; 120-240 mL/ha post-sowing pre-emergence; 120 mL/ha at 2-8 leaf; 120 mL/ha in triazine tolerant canola; 60-120 mL/ha in Roundup Ready canola with Nufarm weedmaster DST."
          },
          {
            weed: "Charlock",
            pestList: ["Charlock"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "2 - 6 leaf stage",
            note: "Imidazolinone tolerant canola. Tank mix with Nufarm Intercept and Sequence 360."
          },
          {
            weed: "Chickpea (volunteer)",
            pestList: ["Chickpea"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 6 leaf",
            note: "Pre-sowing, post-sowing pre-emergence, and 2-8 leaf stages. Various tank mixes for different canola types."
          },
          {
            weed: "Cotula",
            pestList: ["Cotula"],
            states: ["All"],
            rate: 120,
            rateMax: 120,
            unit: "mL/ha",
            stage: "4 - 8 leaf, up to 10 cm diameter",
            note: "Conventional and herbicide tolerant canola at 2-8 leaf stage."
          },
          {
            weed: "Dense flowered fumitory",
            pestList: ["Dense flowered fumitory"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "2 - 6 leaf stage",
            note: "Imidazolinone tolerant canola. Tank mix with Nufarm Intercept and Sequence 360."
          },
          {
            weed: "Doublegee, Spiny emex",
            pestList: ["Doublegee", "Spiny emex"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "2 - 6 leaf stage",
            note: "Imidazolinone tolerant canola. Suppression species in tank mix with Nufarm Intercept and Sequence 360."
          },
          {
            weed: "Faba bean (volunteer)",
            pestList: ["Faba bean"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 4 leaf",
            note: "Multiple stages and canola types. Rates vary from 60-120 mL/ha depending on crop stage and weed growth."
          },
          {
            weed: "Field pea (volunteer)",
            pestList: ["Field pea"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 6 nodes or 10 cm high",
            note: "Conventional and herbicide tolerant canola, 2-8 leaf stage. Roundup Ready canola with Nufarm weedmaster DST."
          },
          {
            weed: "Indian hedge mustard",
            pestList: ["Indian hedge mustard"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "2 - 6 leaf stage",
            note: "Imidazolinone tolerant canola. Tank mix with Nufarm Intercept."
          },
          {
            weed: "Lentil (volunteer)",
            pestList: ["Lentil"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 6 leaf",
            note: "Imidazolinone tolerant canola and Roundup Ready canola. Tank mixes as specified for each crop type."
          },
          {
            weed: "Lupin (volunteer)",
            pestList: ["Lupin"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 4 leaf",
            note: "Multiple canola types. Faba beans and lupins will only be suppressed."
          },
          {
            weed: "Marshmallow",
            pestList: ["Marshmallow"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "2 - 6 leaf stage",
            note: "Imidazolinone tolerant canola. Tank mix with Nufarm Intercept and Sequence 360."
          },
          {
            weed: "Medic (volunteer), Lucerne (seedling)",
            pestList: ["Medic", "Lucerne"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 8 leaf",
            note: "Conventional and herbicide tolerant canola, 2-8 leaf stage."
          },
          {
            weed: "Muskweed",
            pestList: ["Muskweed"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "2 - 6 leaf stage",
            note: "Imidazolinone tolerant canola. Tank mix with Nufarm Intercept."
          },
          {
            weed: "Saffron thistle",
            pestList: ["Saffron thistle"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 10 cm diameter, 4 - 8 leaf",
            note: "Various canola types at different growth stages. Rates from 60-200 mL/ha."
          },
          {
            weed: "Safflower (volunteer)",
            pestList: ["Safflower"],
            states: ["All"],
            rate: 100,
            rateMax: 100,
            unit: "mL/ha",
            stage: "Up to 6 leaf",
            note: "Conventional and herbicide tolerant canola, 2-8 leaf stage."
          },
          {
            weed: "Skeleton weed",
            pestList: ["Skeleton weed"],
            states: ["All"],
            rate: 120,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 10 cm diameter, 4 - 8 leaf",
            note: "Conventional and triazine tolerant canola. Controlled until harvest only. Will only be controlled until harvest."
          },
          {
            weed: "Soldier thistle",
            pestList: ["Soldier thistle"],
            states: ["All"],
            rate: 120,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 10 cm diameter, 4 - 8 leaf",
            note: "Conventional and triazine tolerant canola, 2-8 leaf stage."
          },
          {
            weed: "Star thistle (golden, St Barnaby's)",
            pestList: ["Star thistle"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "4 - 8 leaf, 5 - 10 cm diameter",
            note: "Conventional and herbicide tolerant canola, 2-8 leaf stage. Use higher rates for high density and/or large weeds."
          },
          {
            weed: "Sub clover",
            pestList: ["Sub clover"],
            states: ["All"],
            rate: 60,
            rateMax: 240,
            unit: "mL/ha",
            stage: "Pre-emergence to 10 cm diameter",
            note: "Multiple stages from pre-sowing to 2-8 leaf stage. Rates vary from 60-240 mL/ha."
          },
          {
            weed: "Thistle (nodding, scotch, spear, variegated)",
            pestList: ["Thistle"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Rosettes, 4 - 8 leaf",
            note: "Roundup Ready canola. Tank mix with Nufarm weedmaster DST."
          },
          {
            weed: "Turnip (wild)",
            pestList: ["Wild turnip"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "2 - 6 leaf stage",
            note: "Imidazolinone tolerant canola. Tank mix with Nufarm Intercept."
          },
          {
            weed: "Vetch",
            pestList: ["Vetch"],
            states: ["All"],
            rate: 40,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Runners up to 10 cm, various leaf stages",
            note: "Pre-sowing through 2-8 leaf stage. Various rates depending on crop and weed stage."
          },
          {
            weed: "Wild radish",
            pestList: ["Wild radish"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "2 - 6 leaf stage",
            note: "Imidazolinone tolerant canola and Roundup Ready canola. Tank mixes as specified."
          }
        ]
      },
      {
        crop: "Cereals",
        cropList: [
          "Barley",
          "Cereals",
          "Oats",
          "Triticale",
          "Wheat"
        ],
        weeds: [
          {
            weed: "Capeweed",
            pestList: ["Capeweed"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Pre-emergence to 10 cm diameter",
            note: "Pre-sowing 60 mL/ha with knockdown herbicide; post-sowing pre-emergence 120-240 mL/ha; early post-emergence 60 mL/ha; 4-5 leaf onwards 120 mL/ha. Various tank mixes available."
          },
          {
            weed: "Fleabane (flaxleaf)",
            pestList: ["Fleabane"],
            states: ["All"],
            rate: 150,
            rateMax: 150,
            unit: "mL/ha",
            stage: "5 cm rosettes, 5 leaf through to booting",
            note: "Rosette stage preferred."
          },
          {
            weed: "Lentil (volunteer)",
            pestList: ["Lentil"],
            states: ["All"],
            rate: 100,
            rateMax: 100,
            unit: "mL/ha",
            stage: "Up to 6 leaf",
            note: "Cereals at 4-5 leaf onwards stage."
          },
          {
            weed: "Lupin (volunteer)",
            pestList: ["Lupin"],
            states: ["All"],
            rate: 100,
            rateMax: 100,
            unit: "mL/ha",
            stage: "Up to 4 leaf",
            note: "Cereals at 4-5 leaf onwards stage. Will only be suppressed."
          },
          {
            weed: "Safflower (volunteer)",
            pestList: ["Safflower"],
            states: ["All"],
            rate: 100,
            rateMax: 100,
            unit: "mL/ha",
            stage: "Up to 6 leaf",
            note: "Cereals at 4-5 leaf onwards stage."
          },
          {
            weed: "Saffron thistle",
            pestList: ["Saffron thistle"],
            states: ["All"],
            rate: 120,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 10 cm diameter",
            note: "Cereals at 4-5 leaf onwards stage."
          },
          {
            weed: "Skeleton weed",
            pestList: ["Skeleton weed"],
            states: ["All"],
            rate: 200,
            rateMax: 200,
            unit: "mL/ha",
            stage: "5 - 15 cm rosettes",
            note: "Tank mix with Agritone 750, 4-5 leaf to 1st node crop stage. Minimum 5 cm diameter, actively growing."
          },
          {
            weed: "Soldier thistle",
            pestList: ["Soldier thistle"],
            states: ["All"],
            rate: 120,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 10 cm diameter",
            note: "Cereals at 4-5 leaf onwards stage."
          },
          {
            weed: "Sub clover",
            pestList: ["Sub clover"],
            states: ["All"],
            rate: 60,
            rateMax: 240,
            unit: "mL/ha",
            stage: "Pre-emergence to 10 cm diameter",
            note: "Pre-sowing to post-emergence stages. Rates range 60-240 mL/ha."
          },
          {
            weed: "Thistle (nodding, saffron, scotch, slender, spear, stemless, variegated)",
            pestList: ["Thistle"],
            states: ["All"],
            rate: 20,
            rateMax: 40,
            unit: "mL/ha",
            stage: "Rosettes up to 10 cm diameter",
            note: "Tank mixes: 20 mL/ha with Agritone 750 or Polo 570 LVE; 20-40 mL/ha with Nufarm Amicide Advance 700 or Agritone 750. Apply 4-5 leaf to 1st node crop stage."
          },
          {
            weed: "Thistle (common sow)",
            pestList: ["Sow thistle"],
            states: ["All"],
            rate: 40,
            rateMax: 40,
            unit: "mL/ha",
            stage: "Young rosettes up to 8 true leaves",
            note: "Tank mixes: 40 mL/ha with Trooper 242 or with Associate + Polo 570 LVE. Apply 4-5 leaf to 1st node crop stage."
          },
          {
            weed: "Thistle (St Barnaby's, golden star)",
            pestList: ["Star thistle"],
            states: ["All"],
            rate: 20,
            rateMax: 40,
            unit: "mL/ha",
            stage: "4 - 8 leaf, 5 - 10 cm diameter",
            note: "Tank mix with Nufarm Amicide Advance 700 or Agritone 750. Rate depends on density, growth stage, and conditions."
          },
          {
            weed: "Vetch",
            pestList: ["Vetch"],
            states: ["All"],
            rate: 40,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 10 cm, runners, various leaf stages",
            note: "Multiple stages from pre-sowing to 4-5 leaf onwards. Rates 40-120 mL/ha depending on stage."
          },
          {
            weed: "Chickpea (volunteer)",
            pestList: ["Chickpea"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 6 leaf",
            note: "Pre-sowing to 4-5 leaf onwards. Various tank mixes for cereal tank mix applications."
          },
          {
            weed: "Faba bean (volunteer)",
            pestList: ["Faba bean"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 4 leaf, pre-emergence",
            note: "Pre-sowing through post-emergence stages. Rates 60-120 mL/ha."
          },
          {
            weed: "Medic (volunteer), Lucerne (seedling)",
            pestList: ["Medic", "Lucerne"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Up to 8 leaf",
            note: "Pre-sowing through 4-5 leaf onwards stage."
          },
          {
            weed: "Field pea (volunteer)",
            pestList: ["Field pea"],
            states: ["All"],
            rate: 60,
            rateMax: 120,
            unit: "mL/ha",
            stage: "Max 10 cm high or 6 nodes",
            note: "4-5 leaf onwards stage. Various tank mixes available."
          },
          {
            weed: "Lettuce (wild/prickly)",
            pestList: ["Lettuce"],
            states: ["All"],
            rate: 60,
            rateMax: 60,
            unit: "mL/ha",
            stage: "4 - 6 leaf, max 8 cm diameter",
            note: "Tank mix with Polo 570 LVE, 4-5 leaf to 1st node crop stage."
          }
        ]
      },
      {
        crop: "Fallow",
        cropList: [
          "Fallow land",
          "Optical spot spray fallow"
        ],
        weeds: [
          {
            weed: "Capeweed",
            pestList: ["Capeweed"],
            states: ["All"],
            rate: 100,
            rateMax: 200,
            unit: "mL/100L",
            stage: "Rosette to flowering",
            note: "Optical spot spray. Use higher rate on late flowering/mature plants or plants under moisture stress."
          },
          {
            weed: "Hardhead thistle (creeping knapweed, Russian knapweed)",
            pestList: ["Hardhead thistle"],
            states: ["All"],
            rate: 100,
            rateMax: 200,
            unit: "mL/100L",
            stage: "Rosette to flowering",
            note: "Optical spot spray. Use higher rate on late flowering/mature plants."
          },
          {
            weed: "Lucerne",
            pestList: ["Lucerne"],
            states: ["All"],
            rate: 100,
            rateMax: 200,
            unit: "mL/100L",
            stage: "Rosette to flowering",
            note: "Optical spot spray. Use higher rate for better control."
          },
          {
            weed: "Sub clover",
            pestList: ["Sub clover"],
            states: ["All"],
            rate: 100,
            rateMax: 200,
            unit: "mL/100L",
            stage: "Rosette to flowering",
            note: "Optical spot spray. Use higher rate for better control."
          },
          {
            weed: "Thistle (Californian, nodding, saffron, scotch, slender, spear, St Barnaby's, variegated)",
            pestList: ["Thistle"],
            states: ["All"],
            rate: 100,
            rateMax: 200,
            unit: "mL/100L",
            stage: "Rosette to flowering",
            note: "Optical spot spray. Use higher rate on late flowering/mature plants."
          },
          {
            weed: "Vetch",
            pestList: ["Vetch"],
            states: ["All"],
            rate: 100,
            rateMax: 200,
            unit: "mL/100L",
            stage: "Rosette to flowering",
            note: "Optical spot spray."
          },
          {
            weed: "Chickpea (volunteer)",
            pestList: ["Chickpea"],
            states: ["All"],
            rate: 100,
            rateMax: 200,
            unit: "mL/100L",
            stage: "Rosette to flowering",
            note: "Optical spot spray."
          },
          {
            weed: "Faba bean (volunteer)",
            pestList: ["Faba bean"],
            states: ["All"],
            rate: 100,
            rateMax: 200,
            unit: "mL/100L",
            stage: "Rosette to flowering",
            note: "Optical spot spray."
          }
        ]
      },
      {
        crop: "Pastures and fallow land",
        cropList: [
          "Fallow land (post-emergence)",
          "Pastures (post-emergence)"
        ],
        weeds: [
          {
            weed: "Californian thistle",
            pestList: ["Californian thistle"],
            states: ["All"],
            rate: 800,
            rateMax: 800,
            unit: "mL/ha",
            stage: "Early buds to flowering (December to February)",
            note: "Boom spray only. DO NOT apply to thistles over 20 cm diameter. Apply September to October. Clover damage less than Nufarm Archer 750 + Agritone 750."
          },
          {
            weed: "Groundsel bush",
            pestList: ["Groundsel bush"],
            states: ["All"],
            rate: 130,
            rateMax: 200,
            unit: "mL/100L",
            stage: "Young seedlings to mature plants",
            note: "Hand gun application. Spray foliage when growth is active. Lower rate for young seedlings, higher for plants over 2 m tall or slow growth."
          },
          {
            weed: "Hardhead thistle (creeping knapweed, Russian knapweed)",
            pestList: ["Hardhead thistle"],
            states: ["All"],
            rate: 800,
            rateMax: 1600,
            unit: "mL/ha",
            stage: "Actively growing plants",
            note: "Hand gun: 200 mL/100L; Boom spray: 0.8-1.6 L/ha. Victoria: use lower rate on light soils, higher on all soils for complete control. Add Activator Surfactant 125 mL/100L. Apply Sept-April."
          },
          {
            weed: "Lucerne",
            pestList: ["Lucerne"],
            states: ["All"],
            rate: 120,
            rateMax: 120,
            unit: "mL/ha",
            stage: "30 - 40 cm high, pre-flowering",
            note: "Tank mix: 120 mL/ha + 1.5-2 L/ha Gladiator + 1.3 L/ha Agritone 750 or 1.5 L/ha Nufarm Amicide Advance 700. Add Activator Surfactant 125 mL/100L. Clovers and medics eliminated 1+ year."
          },
          {
            weed: "Silver wattle",
            pestList: ["Silver wattle"],
            states: ["All"],
            rate: 200,
            rateMax: 3400,
            unit: "mL/ha",
            stage: "Active growth spring to summer",
            note: "Hand gun 200 mL/100L; Boom 2 L/ha (0.5-2 m), 2.8 L/ha (2-4 m), 3.4 L/ha (4-8 m). Add Pulse Penetrant 200 mL/100L. Clovers and legumes eliminated 1+ year."
          },
          {
            weed: "Thistle (nodding, saffron, scotch, slender, spear, St Barnaby's, variegated)",
            pestList: ["Thistle"],
            states: ["All"],
            rate: 20,
            rateMax: 28,
            unit: "mL/ha",
            stage: "Rosette stage prior to stem elongation",
            note: "Multiple application methods: Boom 20-28 mL/ha + 0.67-1 L/ha Agritone 750; Drench gun 20 mL/1L water; Hand gun 100 mL/100L. Apply when actively growing."
          },
          {
            weed: "Thistle (nodding) alone",
            pestList: ["Nodding thistle"],
            states: ["All"],
            rate: 40,
            rateMax: 40,
            unit: "mL/ha",
            stage: "Rosettes up to 20 cm diameter",
            note: "Boom spray application."
          }
        ]
      },
      {
        crop: "Forests and plantations",
        cropList: [
          "Eucalyptus",
          "Forests",
          "Pinus radiata",
          "Plantation trees"
        ],
        weeds: [
          {
            weed: "Capeweed",
            pestList: ["Capeweed"],
            states: ["All"],
            rate: 200,
            rateMax: 3400,
            unit: "mL/ha",
            stage: "Pre-emergence and post-emergence",
            note: "Pre-planting: 0.8-2.4 L/ha (use higher for extended control). Post-planting boom/aerial: 0.2-0.4 L/ha (small weeds), 0.8 L/ha (larger weeds)."
          },
          {
            weed: "Cape ivy",
            pestList: ["Cape ivy"],
            states: ["All"],
            rate: 1300,
            rateMax: 1300,
            unit: "mL/ha",
            stage: "Any growth stage",
            note: "Apply when foliage is dry. Avoid non-target plants. Low volume: 100 mL/L water dilution for weed wiper/CDA."
          },
          {
            weed: "Fleabane (Canadian)",
            pestList: ["Fleabane"],
            states: ["All"],
            rate: 200,
            rateMax: 800,
            unit: "mL/ha",
            stage: "Actively growing to stem elongation",
            note: "Boom/aerial: 0.2-0.8 L/ha + 0.2% Pulse Penetrant. Use lower rate (0.2-0.4 L/ha) for small weeds, 0.6 L/ha at 15 cm, 0.8 L/ha to 30 cm for suppression."
          },
          {
            weed: "Fleabanes",
            pestList: ["Fleabanes"],
            states: ["All"],
            rate: 800,
            rateMax: 2400,
            unit: "mL/ha",
            stage: "Pre-emergence and post-emergence",
            note: "Pre-planting: 0.8-2.4 L/ha. Post-planting: 0.8 L/ha (large weeds)."
          },
          {
            weed: "Flatweed",
            pestList: ["Flatweed"],
            states: ["All"],
            rate: 200,
            rateMax: 3400,
            unit: "mL/ha",
            stage: "Pre-emergence and post-emergence",
            note: "Pre-planting: 0.8-2.4 L/ha. Post-planting: 0.2-0.4 L/ha (small), 0.8 L/ha (large weeds)."
          },
          {
            weed: "Groundsel bush",
            pestList: ["Groundsel bush"],
            states: ["All"],
            rate: 130,
            rateMax: 200,
            unit: "mL/100L",
            stage: "Young seedlings to mature plants",
            note: "Hand gun application. Use lower rate on young seedlings, higher on mature plants over 2 m or slow growth."
          },
          {
            weed: "Ragwort",
            pestList: ["Ragwort"],
            states: ["All"],
            rate: 80,
            rateMax: 1200,
            unit: "mL/ha",
            stage: "Rosettes to stem elongation, before flowering",
            note: "Hand gun: 80-120 mL/100L. Boom/aerial: 0.4-0.8 L/ha. Use lower rate for small seedlings, higher for large multi-crown. Add BS1000 0.1% v/v. Add Diquat after flowering to prevent seed."
          },
          {
            weed: "Silver wattle",
            pestList: ["Silver wattle"],
            states: ["All"],
            rate: 200,
            rateMax: 3400,
            unit: "mL/ha",
            stage: "Active growth spring to summer",
            note: "Pre-planting (Pinus radiata only): 2.4 L/ha. Post-planting hand gun 200 mL/100L. Boom/aerial: 2 L/ha (0.5-2 m), 2.8 L/ha (2-4 m), 3.4 L/ha (4-8 m). Add Pulse Penetrant 200 mL/100L."
          },
          {
            weed: "Skeleton weed",
            pestList: ["Skeleton weed"],
            states: ["All"],
            rate: 200,
            rateMax: 400,
            unit: "mL/ha",
            stage: "Actively growing seedlings to 15 cm",
            note: "Post-planting: 0.2-0.4 L/ha (small). Clovers, legumes eliminated 1+ year."
          },
          {
            weed: "Sorrel",
            pestList: ["Sorrel"],
            states: ["All"],
            rate: 2400,
            rateMax: 3200,
            unit: "mL/ha",
            stage: "Actively growing rosettes, seedlings up to 15 cm",
            note: "Suppression only. Higher rates give better suppression. Use directed spray above 2.4 L/ha to avoid tree injury."
          },
          {
            weed: "Thistle (Californian)",
            pestList: ["Californian thistle"],
            states: ["All"],
            rate: 800,
            rateMax: 800,
            unit: "mL/ha",
            stage: "Early bud to flowering (December to February)",
            note: "Boom/aerial: 0.8 L/ha. Add BS1000 0.1% v/v. Second annual application may be needed."
          },
          {
            weed: "Thistle (Hardhead, and others)",
            pestList: ["Thistle"],
            states: ["All"],
            rate: 200,
            rateMax: 800,
            unit: "mL/ha",
            stage: "Actively growing seedlings to 15 cm, rosettes to flowering",
            note: "Pre-planting: 0.8-2.4 L/ha. Post-planting: 0.2-0.4 L/ha (small), 0.8 L/ha (larger)."
          },
          {
            weed: "Volunteer legumes",
            pestList: ["Legumes"],
            states: ["All"],
            rate: 200,
            rateMax: 800,
            unit: "mL/ha",
            stage: "Pre-emergence and post-emergence",
            note: "Pre-planting: 0.8-2.4 L/ha. Post-planting: 0.2-0.4 L/ha (small), 0.8 L/ha (larger)."
          }
        ]
      },
      {
        crop: "Industrial/commercial areas, rights of way, fence lines",
        cropList: [
          "Commercial areas",
          "Industrial areas",
          "Rights of way",
          "Fence lines"
        ],
        weeds: [
          {
            weed: "Capeweed",
            pestList: ["Capeweed"],
            states: ["All"],
            rate: 200,
            rateMax: 2400,
            unit: "mL/ha",
            stage: "Pre-emergence and post-emergence",
            note: "Pre-emergence: 0.8-2.4 L/ha (higher rate for extended control). Post-emergence: 0.2-0.4 L/ha (small weeds), 0.8 L/ha (larger weeds)."
          },
          {
            weed: "Fleabane",
            pestList: ["Fleabane"],
            states: ["All"],
            rate: 200,
            rateMax: 2400,
            unit: "mL/ha",
            stage: "Pre-emergence and post-emergence",
            note: "Pre-emergence: 0.8-2.4 L/ha. Post-emergence: 0.8 L/ha."
          },
          {
            weed: "Flatweed",
            pestList: ["Flatweed"],
            states: ["All"],
            rate: 200,
            rateMax: 2400,
            unit: "mL/ha",
            stage: "Pre-emergence and post-emergence",
            note: "Pre-emergence: 0.8-2.4 L/ha. Post-emergence: 0.2-0.4 L/ha (small), 0.8 L/ha (larger)."
          },
          {
            weed: "Skeleton weed",
            pestList: ["Skeleton weed"],
            states: ["All"],
            rate: 200,
            rateMax: 800,
            unit: "mL/ha",
            stage: "Actively growing seedlings to 15 cm, larger weeds",
            note: "Post-emergence: 0.2-0.4 L/ha (small), 0.8 L/ha (larger)."
          },
          {
            weed: "Thistle",
            pestList: ["Thistle"],
            states: ["All"],
            rate: 200,
            rateMax: 2400,
            unit: "mL/ha",
            stage: "Pre-emergence and post-emergence",
            note: "Pre-emergence: 0.8-2.4 L/ha. Post-emergence: 0.2-0.4 L/ha (small), 0.8 L/ha (larger)."
          },
          {
            weed: "Volunteer legumes",
            pestList: ["Legumes"],
            states: ["All"],
            rate: 200,
            rateMax: 2400,
            unit: "mL/ha",
            stage: "Pre-emergence and post-emergence",
            note: "Pre-emergence: 0.8-2.4 L/ha. Post-emergence: 0.2-0.4 L/ha (small), 0.8 L/ha (larger)."
          }
        ]
      },
      {
        crop: "Non-crop areas (stem injection on Acacia)",
        cropList: [
          "Acacia (stem injection)",
          "Agricultural non-crop",
          "Commercial non-crop",
          "Forest non-crop",
          "Industrial non-crop",
          "Pasture non-crop",
          "Rights of way non-crop"
        ],
        weeds: [
          {
            weed: "Acacia species",
            pestList: ["Acacia"],
            states: ["All"],
            rate: 1,
            rateMax: 2,
            unit: "mL/cut stump",
            stage: "Single/multiple stems",
            note: "Stem injection. Mix 1 part product with 9 parts water. Single stems <25 cm: 1 mL per cut. Multiple stems or >25 cm: 2 mL per cut at 10-13 cm centres. Inject at waist height."
          }
        ]
      }
    ],

    restraints: [
      "DO NOT apply to stressed weeds (extreme heat, cold, drought, waterlogging, previous herbicide treatment)",
      "DO NOT spray if rain likely within 3 hours",
      "DO NOT apply later than 8 leaf stage of canola",
      "DO NOT compost treated plant/crop material before reading protection of crops section",
      "DO NOT apply more than one application of clopyralid-containing products per crop except as specified",
      "DO NOT apply immediately before sowing susceptible crops without observing plant back periods",
      "DO NOT allow wind speeds below 3 or above 20 km/h during application",
      "DO NOT apply during temperature inversion conditions",
      "DO NOT use on lucerne in pastures/fallow (clovers and medics eliminated 1+ year)"
    ],

    withholding: {
      harvest: "Cereals: DO NOT apply later than 10 weeks before harvest. Canola: Not required when used as directed.",
      grazing: "DO NOT graze or cut treated cereals or canola for stockfeed for 7 days after application. Pastures, fallow, industrial and commercial: 7 days. Pinus radiata: 14 days. Other forests: 7 days."
    },

    plantBack: {
      southernAustralia: {
        description: "Winter dominant rainfall (Sth NSW, VIC, SA, WA)",
        minRain: "150 mm from application to planting",
        intervals: {
          "Clover, chickpea, faba bean, field pea, lentils, lupins, medics, vetch up to 120 mL/ha": "9 months",
          "120-200 mL/ha": "12 months",
          ">200 mL/ha": "24 months"
        }
      },
      northernAustralia: {
        description: "Summer dominant rainfall (Nth NSW, QLD)",
        intervals: {
          "Cotton/soybean/sunflower up to 30 mL/ha": "3 months",
          "Cotton/soybean/sunflower >30-120 mL/ha": "6 months",
          "Chickpea up to 30 mL/ha": "6 months",
          "Chickpea >30-120 mL/ha": "9 months",
          "Lucerne": "9 months",
          "Maize/sorghum up to 30 mL/ha": "1 week",
          "Maize/sorghum >30-120 mL/ha": "2 weeks"
        }
      }
    },

    surfactant: "Supercharge Elite, Banjo, BS1000, Activator Surfactant, Pulse Penetrant (product and application dependent)",

    compatibility: {
      canola: ["Exert 520", "Banjo", "Atrazine", "Atradex WG", "Simagranz", "Nufarm Intercept", "Nufarm Sentry", "Sequence 360", "Nufarm weedmaster DST"],
      cereals: ["Agritone 750", "Nufarm Amicide Advance 700", "Polo 570 LVE", "Eclipse", "Associate", "Bromicide MA", "Tigrex", "Exert 520"],
      broadleaf: ["Agritone 750", "Nufarm Amicide Advance 700", "Polo 570 LVE", "Gladiator", "Revolver", "Nufarm weedmaster DST", "Nufarm weedmaster Duo"],
      grassHerbicides: ["Exert 520", "Sequence 360", "Nufarm Intercept"]
    },

    sprayerCleanup: {
      partial: "Empty tank, wash thoroughly, quarter fill with water, circulate through system, drain and repeat twice. Use before spraying other labelled crops.",
      complete: "Empty tank, wash thoroughly, quarter fill with water and alkaline detergent (Nufarm Tank & Equipment Cleaner), circulate 15 minutes, drain, clean filters/nozzles separately, rinse thoroughly. Use before spraying susceptible crops."
    }
};
