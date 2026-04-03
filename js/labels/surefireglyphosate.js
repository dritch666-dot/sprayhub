// ─────────────────────────────────────────────────────────────────────────────
// Surefire Glyphosate 360 HERBICIDE — Label Data
// Water Soluble | Group M Herbicide
// Source: Pct_Holdings_Surefire_Glyphosate_360_Herbicide_Label.pdf
// APVMA Approval No: 63175
// PCT Holdings Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase.surefireglyphosate = {
  name:             "Surefire Glyphosate 360 Herbicide",
  category:         "Herbicides",
  activeIngredient: "360 g/L Glyphosate (present as the isopropylamine salt)",
  group:            "Group M Herbicide",
  modeOfAction: "Inhibitor of EPSP synthase (amino acid synthesis inhibitor)",
  formulation:      "Water Soluble Liquid",
  color:            "#16a34a",
  apvma:            "63175",
  company: "Surefire",
  labelPdf:         "Source labels/Pct_Holdings_Surefire_Glyphosate_360_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/SUREFIRE_GLYPHOSATE_360_HERBICIDE.pdf",
  signalHeading:    "CAUTION",
  classification: {
    type: "Herbicide",
    target: ["Annual Weeds", "Perennial Weeds", "Grasses", "Broadleaf Weeds", "Woody Weeds"],
    timing: ["Post-emergent", "Pre-sowing", "Pre-harvest"]
  },

  crops: [
    // ══════════════════════════════════════════════════════════════════
    // 1. ANNUAL WEED CONTROL (All States) — Non-Cultivated Situations
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Annual Weed Control — Non-Cultivated Situations (All States)",
      cropList: ["Non-Cultivated", "Fallow", "Industrial", "Rights of Way"],
      weeds: [
        {
          weed: "Annual weeds (Amaranth, Barley grass, Barnyard grass, Brome grass, Caltrop, Canary grass, Capeweed, Cereals, Chickweed, Cobbler's pegs, Deadnettle, Doublegee, Fumitory, Ground cherry, Lesser Swinecress, Liverseed grass, Mintweed, Paradoxa grass, Paterson's curse, Pigweed, Potato weed, Ryegrass, Saffron thistle, Silver grass, Sow thistle, Spear thistle, Spiny burrgrass, Spurge, Sub clover, Thornapple, Wild mustard, Wild oats, Wild turnip, Winter grass, Variegated thistle)",
          pestList: ["Amaranth", "Barley Grass", "Barnyard Grass", "Brome Grass", "Caltrop", "Canary Grass", "Capeweed", "Cereals", "Chickweed", "Cobbler's Pegs", "Deadnettle", "Doublegee", "Fumitory", "Ground Cherry", "Lesser Swinecress", "Liverseed Grass", "Mintweed", "Paradoxa Grass", "Paterson's Curse", "Pigweed", "Potato Weed", "Ryegrass", "Saffron Thistle", "Silver Grass", "Sow Thistle", "Spear Thistle", "Spiny Burrgrass", "Spurge", "Sub Clover", "Thornapple", "Wild Mustard", "Wild Oats", "Wild Turnip", "Winter Grass", "Variegated Thistle"],
          states: ["All"],
          rate: "2", rateMax: "3", unit: "L/ha",
          stage: "Actively growing — any time",
          note: "Boom: 2–3 L/ha. Handgun: 500–700 mL/100 L. Knapsack: 75–100 mL/15 L. Use the lower rate on weeds up to 15 cm tall; increase to the higher rate when weeds are over 15 cm. Visible symptoms develop in 3–7 days; complete desiccation may take 20–30 days under cool conditions. This product does not provide residual weed control. Repeat treatments may be necessary to control later germinating weeds. For residual control of annual weeds, this product may be used as a tank mixture with simazine flowable formulations. See TANK MIXTURES for directions."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // 2. PERENNIAL WEED CONTROL
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Perennial Weed Control — Bent Grass",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Bent grass (Agrostis capillaris)",
          pestList: ["Bent Grass"],
          states: ["Tas", "Vic"],
          rate: "2.5", rateMax: "2.5", unit: "L/ha",
          stage: "Late spring — seed head development",
          note: "Boom: 2.5 L/ha. Handgun: 500 mL/100 L. Knapsack: 75 mL/15 L. Apply to actively growing plants in late spring when they have some seed head development but before summer moisture stress. Bent grass should NOT be heavily grazed at spraying. Follow up management is required to limit seedling re-establishment. First disturbance with a tyned implement should follow 10–21 days after spraying. Application should be followed by a summer crop and/or by re-seeding pasture or crop the following autumn."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Blady Grass",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Blady grass (Imperata cylindrica)",
          pestList: ["Blady Grass"],
          states: ["Qld", "NSW"],
          rate: "9", rateMax: "9", unit: "L/ha",
          stage: "Actively growing — head stage",
          note: "Boom: 9 L/ha. Handgun: 1.3 L/100 L. Knapsack: 200 mL/15 L. Apply to actively growing plants when most have reached the head stage."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Bracken",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Bracken (Pteridium esculentum)",
          pestList: ["Bracken"],
          states: ["All"],
          rate: "9", rateMax: "9", unit: "L/ha",
          stage: "March–May — fully unfurled fronds",
          note: "Boom: 9 L plus Pulse 200 mL/100 L spray. Handgun: 1.5 L/100 L. Knapsack: 225 mL/15 L. For boom application always add PULSE, otherwise reduced results will occur. Addition of PULSE (200 mL/100 L spray) may improve control with handgun or boom application. Wiper application is recommended; see Wiper equipment. Double pass application is required for pipework equipment. Bracken should be slashed in winter/spring prior to treatment. Apply March–May to fully unfurled, actively growing fronds but prior to frosts. Visible symptoms may not be fully apparent until the next season. Complete control will not be achieved from one application. Repeat treatment is recommended, preferably associated with pasture improvement."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Brown Beetle Grass",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Brown Beetle grass (Diplachne spp.)",
          pestList: ["Brown Beetle Grass"],
          states: ["NSW"],
          rate: "3", rateMax: "3", unit: "L/ha",
          stage: "Actively growing",
          note: "Boom: 3 L/ha. Handgun: 500 mL/100 L. Knapsack: 75 mL/15 L. Apply to actively growing plants. DO NOT apply to partially submerged plants."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Carpet Grass",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Carpet grass (Axonopus spp.)",
          pestList: ["Carpet Grass"],
          states: ["All"],
          rate: "3", rateMax: "3", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 3 L/ha. Handgun: 500 mL/100 L. Knapsack: 75 mL/15 L. Apply to actively growing plants at the early head stage."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Cocksfoot",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Cocksfoot (Dactylis glomerata)",
          pestList: ["Cocksfoot"],
          states: ["All"],
          rate: "3", rateMax: "3", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 3 L/ha. Handgun: 700 mL/100 L. Knapsack: 100 mL/15 L. Apply to actively growing plants at the early head stage."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Couch",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Couch (Cynodon dactylon)",
          pestList: ["Couch", "Couch Grass"],
          states: ["All"],
          rate: "9", rateMax: "9", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 9 L/ha. Handgun: 1.3 L/100 L. Knapsack: 200 mL/15 L. Apply to actively growing plants when most have reached the early head stage. In SA and WA apply to active plants during October–November for best results."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Cumbungi",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Cumbungi (Typha spp.)",
          pestList: ["Cumbungi"],
          states: ["All"],
          rate: "9", rateMax: "9", unit: "L/ha",
          stage: "Early head to full head stage (summer–autumn)",
          note: "Boom: 9 L/ha. Handgun: 1.3 L/100 L. Knapsack: 200 mL/15 L. Apply to actively growing plants at the early head to full head stage (summer–autumn). Retreatment may be required to restrict seedling re-establishment. Application by wiper equipment is recommended (not Tasmania). Refer to Wiper equipment."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Flatweed",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Flatweed / Cat's Ear (Hypochaeris radicata)",
          pestList: ["Flatweed", "Cat's Ear"],
          states: ["All"],
          rate: "3", rateMax: "3", unit: "L/ha",
          stage: "Fully developed rosettes — early flower stage",
          note: "Boom: 3 L/ha. Handgun: 700 mL/100 L. Knapsack: 100 mL/15 L. Apply to fully developed rosettes at the early flower stage."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Glyceria",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Glyceria (Glyceria maxima)",
          pestList: ["Glyceria"],
          states: ["Tas"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "Mature head stage — late summer–autumn",
          note: "Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants at the mature head stage in late summer–autumn. Add a nonionic surfactant (50–60% a.i.) at 200–250 mL/100 L. No more than ¼ of the weed should be submerged at the time of treatment."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Guinea Grass",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Guinea grass (Panicum maximum)",
          pestList: ["Guinea Grass"],
          states: ["All"],
          rate: "9", rateMax: "9", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 9 L/ha. Handgun: 1.3 L/100 L. Knapsack: 200 mL/15 L. Apply to actively growing plants when most have reached the early head stage. For Wiper application refer to Wiper equipment."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Hoary Cress",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Hoary cress (Lepidium draba)",
          pestList: ["Hoary Cress"],
          states: ["Vic", "NSW", "Tas"],
          rate: "1.5", rateMax: "1.5", unit: "L/ha",
          stage: "Late rosette to flowering stage",
          note: "Boom: 1.5 L/ha. Handgun: 500 mL/100 L. Knapsack: 75 mL/15 L. For maximum long-term reduction, apply from late July to early September when plants are in late rosette to flowering stage. Plants should be actively growing and not under stress of drought, frost or waterlogging. Application may be integrated with long fallows. Wiper equipment may be used where sufficient stem elongation occurs; refer to Wiper equipment. Tas: Add a nonionic surfactant (50–60% a.i.) at 200–250 mL/100 L spray."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Johnson Grass",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Johnson grass (Sorghum halepense)",
          pestList: ["Johnson Grass"],
          states: ["All"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants at the early head stage. For application by wiper equipment on Johnson Grass, off-type and Volunteer Sorghum, refer to Wiper equipment."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Kangaroo Grass",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Kangaroo grass (Themeda australis)",
          pestList: ["Kangaroo Grass"],
          states: ["All"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants at the early head stage."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Kikuyu",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Kikuyu (Pennisetum clandestinum)",
          pestList: ["Kikuyu"],
          states: ["All"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants. Retreatment and/or pasture improvement may be necessary to restrict seedling re-establishment."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Lovegrass",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Lovegrass, African (Eragrostis curvula)",
          pestList: ["Lovegrass", "African Lovegrass"],
          states: ["NSW", "Vic", "WA"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "Actively growing",
          note: "Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants. Retreatment and/or pasture improvement is recommended to restrict seedling re-establishment."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Nutgrass",
      cropList: ["Non-Cultivated", "Arable Land"],
      weeds: [
        {
          weed: "Nutgrass (Cyperus rotundus)",
          pestList: ["Nutgrass"],
          states: ["All"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "Late summer–autumn — at least 20% head stage",
          note: "Non-cultivated situations: Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants in late summer–autumn (February–April) when at least 20% have reached the head stage. Arable land: Make first application to actively growing plants when at least 20% have reached the head stage (normally about February). After allowing maximum re-emergence to occur (normally in 6–8 weeks), it is essential to make a second application. Note: In arable land, Nutgrass may rapidly regenerate from isolated nuts. Follow up treatments should be made as part of a Nutgrass control program. Does not refer to other Cyperus species which may be locally known as nutgrass."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Paragrass",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Paragrass (Brachiaria mutica)",
          pestList: ["Paragrass"],
          states: ["All"],
          rate: "9", rateMax: "9", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 9 L/ha. Handgun: 1.3 L/100 L. Knapsack: 200 mL/15 L. Apply to actively growing plants when most have reached the early head stage."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Paspalum",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Paspalum (Paspalum dilatatum)",
          pestList: ["Paspalum"],
          states: ["All"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "Actively growing — head stage",
          note: "Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants when most have reached the head stage."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Phalaris",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Phalaris (Phalaris aquatica)",
          pestList: ["Phalaris"],
          states: ["SA", "Vic", "NSW"],
          rate: "3", rateMax: "6", unit: "L/ha",
          stage: "Actively growing — winter–spring",
          note: "Boom: 3–6 L/ha. Handgun: 500 mL–1 L/100 L. Knapsack: 75–150 mL/15 L. Apply to actively growing plants during winter–spring. Use the lower rate where only knockdown is required (e.g. prior to burning of firebreaks). Burning can usually start 14–21 days after spraying. For long-term control increase to the higher rate."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Phragmites",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Phragmites, Common reed (Phragmites australis)",
          pestList: ["Phragmites", "Common Reed"],
          states: ["All"],
          rate: "9", rateMax: "9", unit: "L/ha",
          stage: "Actively growing — approaching early head stage",
          note: "Boom: 9 L/ha. Handgun: 1.3 L/100 L. Knapsack: 200 mL/15 L. Apply to actively growing, fully developed plants approaching the early head stage. Visible symptoms of control may be slow to develop and may not be fully apparent until the next season. For application by wiper equipment refer to Wiper equipment."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Plantains",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Plantains (Plantago spp.)",
          pestList: ["Plantains"],
          states: ["All"],
          rate: "3", rateMax: "3", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 3 L/ha. Handgun: 700 mL/100 L. Knapsack: 100 mL/15 L. Apply to actively growing plants at the early head stage. Symptoms may be slow to develop."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Prairie Grass",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Prairie grass (Bromus unioloides)",
          pestList: ["Prairie Grass"],
          states: ["All"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants when most have reached the early head stage."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Old Man Blue Grass & Red Leg Grass",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Old blue grass (Dichanthium sericeum) / Red leg grass (Bothriochloa macra)",
          pestList: ["Old Blue Grass", "Red Leg Grass"],
          states: ["All"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants when most have reached the early head stage."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Rope Twitch",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Rope Twitch (Agropyron repens)",
          pestList: ["Rope Twitch"],
          states: ["Tas", "Vic"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "Late summer–autumn — foliage at least 20 cm high",
          note: "Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply in late summer–autumn to actively growing plants with foliage at least 20 cm high. To ensure maximum shoot emergence the area should NOT be cultivated in the period from the preceding winter until the time of spraying."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Rushes",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Rushes (Juncus spp.)",
          pestList: ["Rushes"],
          states: ["All"],
          rate: "-", rateMax: "-", unit: "Wiper only",
          stage: "Actively growing — adequate regrowth",
          note: "Apply by wiper equipment to actively growing plants. Where there is a large proportion of dead foliage, pre-slashing is recommended. Allow adequate regrowth before treatment. Refer to Wiper equipment for application instruction."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Sedge (Tall)",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Sedge, Tall (Carex appressa)",
          pestList: ["Sedge", "Tall Sedge"],
          states: ["NSW", "Vic", "Tas"],
          rate: "2", rateMax: "4", unit: "L/ha",
          stage: "Flowering to post-flowering (October–April)",
          note: "Boom: 2 or 4 L/ha. Handgun: 500 mL or 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants in flowering to post-flowering period (October–April). Use the lower rate only if the stand has been slashed prior to treatment. Retreatment may be necessary. Visible symptoms may not be fully apparent for up to 3 months. Use of CDA equipment is not recommended."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Silverleaf Nightshade",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Silverleaf Nightshade (Solanum elaeagnifolium)",
          pestList: ["Silverleaf Nightshade"],
          states: ["NSW"],
          rate: "-", rateMax: "-", unit: "Handgun/Knapsack",
          stage: "Late flowering to berry stage",
          note: "Handgun: 2 L/100 L. Knapsack: 300 mL/15 L. Use only under good soil moisture conditions. Apply to actively growing plants at the late flowering to berry stage. Repeat spraying will be necessary to restrict regrowth and seedling re-establishment."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Sorrel",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Sorrel (Rumex acetosella)",
          pestList: ["Sorrel"],
          states: ["All"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "Early bud to flowering stage",
          note: "Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants when most have reached the early bud stage. In Conservation Tillage situations refer to Conservation Tillage Uses table."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Soursob",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Soursob (Oxalis pes-caprae)",
          pestList: ["Soursob"],
          states: ["NSW", "Vic", "Tas", "SA", "WA"],
          rate: "1.5", rateMax: "1.5", unit: "L/ha",
          stage: "Late July–early September — late rosette to flowering",
          note: "Boom: 1.5 L/ha. Handgun: 500 mL/100 L. Knapsack: 75 mL/15 L. For maximum long-term reduction, apply from late July to early September before natural plant yellowing (senescence) occurs. Soursob should be actively growing and not under stress of drought or waterlogging. If heavy frosting has occurred, allow recovery before spraying. If heavy grazing has occurred, allow recovery of foliage to at least 5 cm before spraying. In Conservation Tillage (e.g. direct drilling) situations, application in May, July immediately prior to sowing will give control of top growth and give partial reduction of plant numbers. Refer to Conservation Tillage Uses table."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — St John's Wort",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "St John's Wort (Hypericum perforatum)",
          pestList: ["St John's Wort", "St Johns Wort"],
          states: ["All"],
          rate: "3", rateMax: "3", unit: "L/ha",
          stage: "Flowering to post-flowering (November–May)",
          note: "Boom: 3 L/ha. Handgun: 500 mL/100 L. Knapsack: 75 mL/15 L. Apply to actively growing plants in the flowering to post-flowering, procumbent stem stage (generally November–May). Retreatment or oversowing with improved pasture species may be necessary to restrict seedling re-establishment."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Thistle (Artichoke)",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Thistle, Artichoke (Cynara cardunculus)",
          pestList: ["Artichoke Thistle"],
          states: ["Vic", "SA"],
          rate: "3", rateMax: "3", unit: "L/ha",
          stage: "At the rosette to early head stage",
          note: "Boom: 3 L/ha. Handgun: 500 mL/100 L. Knapsack: 75 mL/15 L. Apply at the rosette to early head stage."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Thistle (Californian)",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Thistle, Californian (Cirsium arvense)",
          pestList: ["Californian Thistle"],
          states: ["Vic", "Tas"],
          rate: "6", rateMax: "6", unit: "L/ha",
          stage: "At the flowering stage",
          note: "Boom: 6 L/ha. Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants at the flowering stage. To ensure maximum shoot emergence the area should not be cultivated prior to spraying. Retreatment and/or pasture improvement may be necessary to restrict seedling re-establishment."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Water Couch",
      cropList: ["Non-Cultivated"],
      weeds: [
        {
          weed: "Water couch (Paspalum distichum)",
          pestList: ["Water Couch"],
          states: ["All"],
          rate: "9", rateMax: "9", unit: "L/ha",
          stage: "Late summer–autumn (February–March)",
          note: "Boom: 9 L/ha. Handgun: 1.3 L/100 L. Knapsack: 200 mL/15 L. Apply to actively growing plants in late summer–autumn (February–March). DO NOT treat after March because of the onset of winter dormancy. Full results may not be visible until the following spring. Not more than ¼ of the weed should be submerged at the time of treatment."
        }
      ]
    },
    {
      crop: "Perennial Weed Control — Yorkshire Fog",
      cropList: ["Non-Cultivated", "Pasture"],
      weeds: [
        {
          weed: "Yorkshire fog (Holcus lanatus)",
          pestList: ["Yorkshire Fog"],
          states: ["All"],
          rate: "3", rateMax: "3", unit: "L/ha",
          stage: "Actively growing — early head stage",
          note: "Boom: 3 L/ha. Handgun: 700 mL/100 L. Knapsack: 100 mL/15 L. Apply to actively growing plants at the early head stage."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // 3. BRUSH AND WOODY WEEDS
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Brush and Woody Weeds — Bitou Bush / Boneseed",
      cropList: ["Non-Cultivated", "Woody Weeds"],
      weeds: [
        {
          weed: "Bitou Bush / Boneseed (Chrysanthemoides monilifera)",
          pestList: ["Bitou Bush", "Boneseed"],
          states: ["Qld", "NSW", "Vic", "Tas"],
          rate: "-", rateMax: "-", unit: "Handgun/Knapsack",
          stage: "Actively growing — wet all foliage",
          note: "Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants. Spray to wet all foliage. DO NOT apply during periods of drought stress. Further treatment may be necessary to restrict seedling re-establishment."
        }
      ]
    },
    {
      crop: "Brush and Woody Weeds — Boxthorn (African)",
      cropList: ["Non-Cultivated", "Woody Weeds"],
      weeds: [
        {
          weed: "Boxthorn, African (Lycium ferocissimum)",
          pestList: ["Boxthorn"],
          states: ["All"],
          rate: "-", rateMax: "-", unit: "Handgun/Knapsack",
          stage: "Young to large bushes — wet all foliage",
          note: "Handgun: 700 mL–1 L/100 L. Knapsack: 100–150 mL/15 L. Use the lower rate for young bushes; increase to the higher rate for large, mature bushes. Spray to wet all foliage. DO NOT spray during hot, dry summer periods. Burning (after complete browning), pasture improvement and/or further treatment are recommended to control seedlings and/or regrowth. Use of CDA equipment is not recommended."
        }
      ]
    },
    {
      crop: "Brush and Woody Weeds — Blackberry",
      cropList: ["Non-Cultivated", "Woody Weeds"],
      weeds: [
        {
          weed: "Blackberry (Rubus fruticosus)",
          pestList: ["Blackberry"],
          states: ["All"],
          rate: "-", rateMax: "-", unit: "Handgun/Knapsack",
          stage: "Flowering to leaf fall (January–May)",
          note: "Handgun: 1–1.3 L/100 L. Knapsack: 150–200 mL/15 L. Apply from flowering to leaf fall (generally January–May). Plants should not be under stress of high temperature, drought or frost. Spray to wet all foliage. Use the higher rate on tall, dense stands of Blackberry. Visible symptoms may not be fully apparent in the next season. Burning (after complete browning), pasture improvement and/or further treatment are recommended to control seedlings and/or regrowth. Use of CDA equipment is not recommended. Tas: Do not treat bushes bearing mature fruit."
        }
      ]
    },
    {
      crop: "Brush and Woody Weeds — Crofton Weed",
      cropList: ["Non-Cultivated", "Woody Weeds"],
      weeds: [
        {
          weed: "Crofton Weed (Eupatorium adenophorum)",
          pestList: ["Crofton Weed"],
          states: ["Qld", "NSW"],
          rate: "-", rateMax: "-", unit: "Handgun/Knapsack",
          stage: "Full foliage — spray to wet all foliage",
          note: "Handgun: 500 mL/100 L. Knapsack: 75 mL/15 L. Apply to actively growing plants with full foliage. Spray to wet all foliage. Further treatment and/or pasture improvement are recommended to restrict seedling re-establishment."
        }
      ]
    },
    {
      crop: "Brush and Woody Weeds — Gorse (Furze)",
      cropList: ["Non-Cultivated", "Woody Weeds"],
      weeds: [
        {
          weed: "Gorse / Furze (Ulex europaeus)",
          pestList: ["Gorse", "Furze"],
          states: ["All"],
          rate: "-", rateMax: "-", unit: "Handgun/Knapsack",
          stage: "Actively growing — all year round",
          note: "Handgun: 1 L plus Pulse 200 mL/100 L. Apply all year round, but only to actively growing plants. Always add PULSE, otherwise reduced results will occur. Spray to wet all foliage. Burning (after complete browning), pasture improvement and/or further treatment are recommended to control seedlings and/or regrowth."
        }
      ]
    },
    {
      crop: "Brush and Woody Weeds — Groundsel Bush",
      cropList: ["Non-Cultivated", "Woody Weeds"],
      weeds: [
        {
          weed: "Groundsel Bush (Baccharis halimifolia)",
          pestList: ["Groundsel Bush"],
          states: ["Qld"],
          rate: "-", rateMax: "-", unit: "Handgun/Knapsack",
          stage: "Actively growing — DO NOT apply during winter or drought",
          note: "Handgun: 700 mL–1 L/100 L. Knapsack: 100–150 mL/15 L. Apply to actively growing plants. DO NOT apply during winter, or during periods of summer drought stress. Use the higher rate on bushes over 2 m tall. Spray to wet all foliage. Treatment and/or pasture improvement are recommended to control seedlings and/or regrowth. Low volume application (e.g. Splatter gun and Gas gun): Use 1:9 (10%) mixture of product: water. Apply 2 x 2 mL dose/0.5 m bush height. Ensure spray contacts all foliage. Use of CDA equipment is not recommended."
        }
      ]
    },
    {
      crop: "Brush and Woody Weeds — Hawthorn",
      cropList: ["Non-Cultivated", "Woody Weeds"],
      weeds: [
        {
          weed: "Hawthorn (Crataegus spp.)",
          pestList: ["Hawthorn"],
          states: ["NSW", "Vic", "SA", "WA", "Tas"],
          rate: "-", rateMax: "-", unit: "Handgun/Knapsack",
          stage: "Flowering to leaf fall",
          note: "Handgun: 1–1.3 L/100 L. Knapsack: 150–200 mL/15 L. Apply to actively growing plants from flowering to leaf fall. Spray to wet all foliage. Use the higher rate on bushes over 2 m tall. Burning (after complete browning), pasture improvement and further treatment are recommended to control seedlings and/or regrowth. Low volume application (e.g. Splatter gun and Gas gun): Use 1:9 (10%) mixture of product: water. Apply 1.5 x 1 mL dose/0.5 m bush height. Ensure spray contacts all foliage."
        }
      ]
    },
    {
      crop: "Brush and Woody Weeds — Lantana",
      cropList: ["Non-Cultivated", "Woody Weeds"],
      weeds: [
        {
          weed: "Lantana (Lantana camara)",
          pestList: ["Lantana"],
          states: ["Qld", "NSW"],
          rate: "-", rateMax: "-", unit: "Handgun/Knapsack",
          stage: "Actively growing — full foliage",
          note: "Handgun: 1 L/100 L. Knapsack: 150 mL/15 L. Apply to actively growing plants with full foliage. Ensure complete treatment of individual plants. DO NOT spray during periods of summer drought stress. Burning (after complete browning), pasture improvement and/or further treatment are recommended to control seedlings and/or regrowth. Low volume application (e.g. Splatter gun and Gas gun): Water: Apply 2 x 2 mL dose/0.5 m bush height. Ensure spray contacts all foliage. Sprinkler sprayer: Apply 5 mL of a 1:9 (10%) solution to every square metre of treated area. Use of CDA equipment is not recommended."
        }
      ]
    }
  ],

  restraints: [
    "DO NOT apply if rain is expected within 6 hours.",
    "DO NOT disturb treated areas in any way for 1 day after application to annual weeds, or for 7 days after treatment of perennial weeds.",
    "DO NOT treat weeds under poor growing or dormant conditions such as occur in drought, water logging, disease, insect damage or following frost.",
    "Reduced control may also occur when treating weeds heavily covered with dust or silt.",
    "Heavy rainfall within 2 hours of application may wash the chemical off the foliage and a repeat treatment may be required.",
    "DO NOT use prior to sowing tomatoes.",
    "DO NOT apply by aircraft when temperature is above 35°C.",
    "DO NOT allow spray to contact any part of desirable plants."
  ],
  withholding: "No withholding period for this product, but removal of stock is recommended for 1 day after treating annual weeds and 7 days after treating perennial weeds. If known toxic plants are present, do not allow stock to graze until complete browning of treated plants has occurred.",
  compatibility: {
    compatible: ["Atrazine (flowable)", "2,4-D Ester", "Dicamba", "Glean", "Simazine (flowable)", "Crystalline Ammonium Sulfate", "Pulse Penetrant", "Wetter TX"],
    incompatible: []
  },
  surfactant: "Pulse Penetrant: 200 mL/100 L spray solution — add when treating Bracken (boom application) and Gorse. Wetter TX Surfactant: 200 mL/100 L spray solution — add when treating annual ryegrass in Spring (from beginning August to end October). Wetter TX is not a general purpose surfactant and should be used only where recommended. Crystalline Ammonium Sulfate: 2% w/v (2 kg/100 L spray solution) — may improve performance on annual weeds under adverse environmental conditions.",
  sprayerCleanup: "Thoroughly flush tanks, pumps and nozzles with water after use. If crystalline ammonium sulfate has been used, ammonium sulfate may be corrosive to metal parts of the sprayer."
};
