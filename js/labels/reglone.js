// ─────────────────────────────────────────────────────────
// REGLONE® NON-RESIDUAL HERBICIDE — Label Data
// Group L (Bipyridyl) | Soluble Liquid (SL)
// Source: Syngenta_Reglone_Label.pdf
// APVMA Approval No: 46534
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['reglone'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Reglone® Non-Residual Herbicide",
  company: "Syngenta",

  category:         "Herbicides",
  activeIngredient: "200 g/L diquat (as diquat dibromide monohydrate)",
  group:            "Group L (Bipyridyl)",
  modeOfAction:     "Photosynthesis inhibitor at Photosystem I",
  formulation:      "Soluble Liquid (SL)",
  color:            "#7e22ce",
  apvma:            "46534",
  labelPdf: "Source labels/Syngenta_Reglone_Nonresidual_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/REGLONE_NON-RESIDUAL_HERBICIDE.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Broadleaf Weeds", "Aquatic Weeds", "Pre-harvest Desiccation"],
    timing: ["Pre-harvest", "Pre-planting", "Post-emergent inter-row"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Pre-harvest Desiccation — Cotton (Short Stapled Varieties)",
      cropList: ["Pre-Harvest Desiccation","Cotton"],
      weeds: [
        {
          weed: "Crop desiccation / weed control at harvest",
          pestList: ["Crop Desiccation / Weed Control At Harvest"],
          states: ["Qld", "NSW", "WA"],
          rate: "2",
          rateMax: "3",
          unit: "L/ha",
          stage: "When 85% of the bolls are open and remaining bolls are mature",
          note: "Rate: 2–3 L/ha. Alternative: 700 mL/ha + 16.5 L/ha Leafex. Add Agral at 200 mL/100L or BS1000 at 160 mL/100L unless otherwise specified. WHP: not required. REGLONE can damage green bolls. Short stapled varieties only."
        }
      ]
    },

    {
      crop: "Pre-harvest Desiccation — Pulses (Dry Beans, Dry Peas, Lentils, Chickpeas, Faba Beans, Lupins, Mung Beans, Pigeon Peas)",
      cropList: ["Pre-Harvest Desiccation","Dry Beans","Dry Peas","Lentils","Chickpeas","Faba Beans","Lupins","Mung Beans","Pigeon Peas"],
      weeds: [
        {
          weed: "Crop desiccation / weed control at harvest",
          pestList: ["Crop Desiccation / Weed Control At Harvest"],
          states: ["All"],
          rate: "2",
          rateMax: "3",
          unit: "L/ha",
          stage: "Crop at full maturity; Mung Beans: 80–90% pods black or brown; Lentils/Chickpeas/Faba Beans WHP 2 days",
          note: "Rate: 2–3 L/ha. Add Agral 200 mL/100L or BS1000 160 mL/100L unless otherwise specified. WHP: Lentils, Chickpeas, Faba Beans: 2 days. Dry Beans, Dry Peas, Lupins, Mung Beans, Pigeon Peas: not required. Mung Beans: harvest 2–5 days after spraying."
        }
      ]
    },

    {
      crop: "Pre-harvest Desiccation — Linseed",
      cropList: ["Pre-Harvest Desiccation","Linseed"],
      weeds: [
        {
          weed: "Crop desiccation",
          pestList: ["Crop Desiccation"],
          states: ["All"],
          rate: "2",
          rateMax: "3",
          unit: "L/ha",
          stage: "When majority of seed heads mature — 90–95% changed from yellow to brown and seeds rattle inside bolls",
          note: "Rate: 2–3 L/ha. Add Agral 200 mL/100L. WHP: not required. Desiccation reduces period from maturity to harvest, particularly under wet or humid conditions."
        }
      ]
    },

    {
      crop: "Pre-harvest Desiccation — Perennial Legume Seed Crops (Lucerne, Red Clover, White Clover)",
      cropList: ["Pre-Harvest Desiccation","Lucerne","Red Clover","White Clover"],
      weeds: [
        {
          weed: "Crop desiccation",
          pestList: ["Crop Desiccation"],
          states: ["All"],
          rate: "1.5",
          rateMax: "3",
          unit: "L/ha",
          stage: "Lucerne: 60–70% pods brown/bluish, seeds yellow/brown. Red Clover: majority seed heads brown. White Clover: majority seeds hard and yellow. Harvest 3–4 days after spraying",
          note: "Rate: 1.5–3 L/ha. Add Agral 200 mL/100L. WHP: not required. Enables direct harvesting instead of cutting and windrowing."
        }
      ]
    },

    {
      crop: "Pre-harvest Desiccation — Canola",
      cropList: ["Pre-Harvest Desiccation","Canola"],
      weeds: [
        {
          weed: "Crop desiccation",
          pestList: ["Crop Desiccation"],
          states: ["All"],
          rate: "1.5",
          rateMax: "3",
          unit: "L/ha",
          stage: "When 70% of pods are yellow and seeds are browny/bluish and pliable. Direct harvest 4–7 days after spraying",
          note: "Rate: 1.5–3 L/ha. Add Agral 200 mL/100L. WHP: 4 days. Canola ripens unevenly and is prone to pod shatter."
        }
      ]
    },

    {
      crop: "Pre-harvest Desiccation — Poppies",
      cropList: ["Pre-Harvest Desiccation","Poppies"],
      weeds: [
        {
          weed: "Crop desiccation",
          pestList: ["Crop Desiccation"],
          states: ["Tas"],
          rate: "3",
          rateMax: "4",
          unit: "L/ha",
          stage: "After poppies have reached the stripy capsule stage",
          note: "Rate: 3–4 L/ha. Add Agral 200 mL/100L. WHP: 2 days. Helps overcome slow and uneven ripening and weed problems at harvest."
        }
      ]
    },

    {
      crop: "Pre-harvest Desiccation — Potatoes (Haulm Desiccation)",
      cropList: ["Pre-Harvest Desiccation","Potatoes"],
      weeds: [
        {
          weed: "Potato haulm desiccation",
          pestList: ["Potato Haulm Desiccation"],
          states: ["All"],
          rate: "3",
          rateMax: "4",
          unit: "L/ha",
          stage: "As soon as crop is ready to harvest",
          note: "Rate: 3–4 L/ha. Add Agral 200 mL/100L. WHP: 7 days. DO NOT apply during drought periods when tops will wilt during the day. Leaf kill rapid and usually complete within 4 days; stem kill may take 10–14 days. Lift when desiccation complete; where possible wait 14 days to allow skin to harden. Use high water volumes for dense haulm."
        },
        {
          weed: "Ground-stored potato pre-harvest weed control",
          pestList: ["Ground-Stored Potato Pre-Harvest Weed Control"],
          states: ["All"],
          rate: "1.5",
          rateMax: "1.5",
          unit: "L/ha",
          stage: "Approximately 7 days prior to harvest; weed growth heavy and impeding mechanical diggers",
          note: "Rate: 1.5 L/ha + 1.2 L/ha Gramoxone 250. Add Agral 200 mL/100L. WHP: 7 days."
        }
      ]
    },

    {
      crop: "Pre-harvest Desiccation — Rice, Sorghum, Soya Beans, Sunflowers, Sweet Potatoes, Sugarcane",
      cropList: ["Pre-Harvest Desiccation","Rice","Sorghum","Soya Beans","Sunflowers","Sweet Potatoes","Sugarcane"],
      weeds: [
        {
          weed: "Crop desiccation",
          pestList: ["Crop Desiccation"],
          states: ["All"],
          rate: "2",
          rateMax: "3",
          unit: "L/ha",
          stage: "Rice: grain moisture <25%, not more than 2–3% milky stage. Sorghum: seed mature, moisture ~25%. Soya Beans: 80% pods yellow/brown, seeds ripe. Sunflowers: seed moisture 35% or below. Sweet Potatoes: 2 weeks prior to harvest",
          note: "Rice WHP: 5 days. Soya Beans and Sugarcane WHP: 4 days. Sunflowers, Sorghum: not required. Sweet Potatoes: 3–4 L/ha, WHP 14 days. Sugarcane (Qld/NSW only): spray all accessible faces a few days prior to burning to depth of 30 m. High volume hand spraying: 200 mL/200L water."
        }
      ]
    },

    {
      crop: "Pre-harvest Desiccation — Winter Cereals (Pre-harvest Weed Control)",
      cropList: ["Pre-Harvest Desiccation","Winter Cereals"],
      weeds: [
        {
          weed: "Weed control at harvest (cereals fully mature)",
          pestList: ["Weed Control At Harvest"],
          states: ["All"],
          rate: "1",
          rateMax: "3",
          unit: "L/ha",
          stage: "Spray as soon as crop is fully mature and ready for harvesting",
          note: "Rate: 1–3 L/ha. Add Agral 200 mL/100L. WHP: not required. Under wet spring conditions, crops become infested with weeds which interfere with harvest operations. REGLONE will control these weeds. NSW Wheat only: Light–moderate stands 2 L/ha; moderate–heavy stands 3 L/ha — ensure spray penetrates deep into crop canopy."
        }
      ]
    },

    {
      crop: "Wheat — Suppression of Wild Radish",
      cropList: ["Wheat","Suppression Of Wild Radish"],
      weeds: [
        {
          weed: "Wild Radish (Raphanus raphanistrum) — suppression",
          pestList: ["Wild Radish — Suppression"],
          states: ["All"],
          rate: "700",
          rateMax: "700",
          unit: "mL/ha",
          stage: "Wheat up to early tillering stage GS22; target Wild Radish at 2-leaf stage (GS10–12)",
          note: "Rate: 700 mL/ha in 200 L water. DO NOT add adjuvant, water conditioner or tank mix with any other pesticide or fertiliser. DO NOT apply later than early tillering (GS22). DO NOT apply to a crop that is not actively growing and healthy. DO NOT apply more than once per crop. Crop Phytotoxicity: severe phytotoxicity can occur — apply earlier in day, in sunny conditions, to a younger crop to reduce severity. Crop will recover within 21–28 days. Double Knock: applying REGLONE 14–21 days prior to a wild radish herbicide (e.g. Jaguar, Tigrex, Velocity) may improve overall control."
        }
      ]
    },

    {
      crop: "Wheat, Oats — Capeweed Control (In-Crop Post-Emergent)",
      cropList: ["Wheat","Oats","Capeweed Control"],
      weeds: [
        {
          weed: "Capeweed (small seedlings)",
          pestList: ["Capeweed"],
          states: ["Qld", "NSW", "Vic", "Tas", "SA"],
          rate: "550",
          rateMax: "550",
          unit: "mL/ha",
          stage: "Spray when crop is between 4-leaf (wheat) or 3-leaf (oats) and early tillering stage",
          note: "Rate: 550 mL/ha in 200 L water. DO NOT add wetting agent for this use."
        },
        {
          weed: "Capeweed (older seedlings)",
          pestList: ["Capeweed"],
          states: ["Qld", "NSW", "Vic", "Tas", "SA"],
          rate: "700",
          rateMax: "700",
          unit: "mL/ha",
          stage: "Spray when crop is between 4-leaf (wheat) or 3-leaf (oats) and early tillering stage",
          note: "Rate: 700 mL/ha in 200 L water. DO NOT add wetting agent for this use."
        }
      ]
    },

    {
      crop: "Aquatic Areas — Aquatic Weed Control",
      cropList: ["Aquatic Areas","Aquatic Weed Control"],
      weeds: [
        {
          weed: "Duck Weeds, Red Azolla, Water Hyacinth, Salvinia, Marsilea, Water Lilies, Water Lettuce",
          pestList: ["Duck Weeds","Red Azolla","Water Hyacinth","Salvinia","Marsilea","Water Lilies","Water Lettuce"],
          states: ["All"],
          rate: "5",
          rateMax: "10",
          unit: "L/ha",
          stage: "Apply as overall spray wetting foliage thoroughly",
          note: "Rate: 5–10 L/ha. Add Agral 150 mL/100L. Use higher rate for heavy infestations or deep or dirty water. A repeat application 7–14 days later may be needed. Oxygen depletion of decaying weeds may occur — treat not more than 1/4 of area at once. Clear water is necessary for best results. Small areas: 400 mL/ha + 150 mL Agral/100L."
        },
        {
          weed: "Cattail, Pond Weeds",
          pestList: ["Cattail","Pond Weeds"],
          states: ["All"],
          rate: "5",
          rateMax: "5",
          unit: "L/ha",
          stage: "Apply by injection below the surface or as a surface spray",
          note: "Rate: 5 L/megalitre water. DO NOT USE TREATED WATER for human consumption, livestock watering or irrigation for 10 days after application."
        }
      ]
    },

    {
      crop: "Asparagus — Weed Control (Pre-spear Emergence)",
      cropList: ["Asparagus","Weed Control"],
      weeds: [
        {
          weed: "Broadleaf weeds",
          pestList: ["Broadleaf Weeds"],
          states: ["All"],
          rate: "1.4",
          rateMax: "1.4",
          unit: "L/ha",
          stage: "Apply to control seedling weeds before spears have emerged",
          note: "Rate: 1.4 L/ha + 800 mL Agral in 400 L water. WHP: not required."
        }
      ]
    },

    {
      crop: "Hops — Inter-Row Weed Control (Pre-Emergence)",
      cropList: ["Hops","Inter-Row Weed Control"],
      weeds: [
        {
          weed: "Annual broadleaf and grass weeds",
          pestList: ["Annual Broadleaf And Grass Weeds"],
          states: ["Vic", "Tas"],
          rate: "0.7",
          rateMax: "1.4",
          unit: "L/ha",
          stage: "Apply as directed inter-row spray prior to crop emerging from winter dormancy",
          note: "Rate: 700 mL to 1.4 L/ha. Minimum 250 L/ha spray volume. May be mixed with 1.2–1.6 L/ha Gramoxone 250 and/or 1.1 kg Gesatop Granules. WHP: not required."
        }
      ]
    },

    {
      crop: "Lucerne — Weed Control (Capeweed, Erodium)",
      cropList: ["Lucerne","Capeweed","Erodium"],
      weeds: [
        {
          weed: "Capeweed and Erodium spp.",
          pestList: ["Capeweed And Erodium Spp."],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "Early autumn application — after heavy grazing to reduce Lucerne to 2 cm height",
          note: "Rate: 350 mL/ha in 200 L water. Add Agral 200 mL/100L. Heavy grazing necessary to reduce Lucerne to 2 cm in height before spraying."
        },
        {
          weed: "Capeweed and Erodium spp.",
          pestList: ["Capeweed And Erodium Spp."],
          states: ["All"],
          rate: "700",
          rateMax: "700",
          unit: "mL/ha",
          stage: "Late winter application",
          note: "Rate: 700 mL/ha in 200 L water. Add Agral 200 mL/100L."
        }
      ]
    },

    {
      crop: "Orchards and Vineyards — Under-Tree/Under-Vine Capeweed Control",
      cropList: ["Orchards And Vineyards","Under-Tree/Under-Vine Capeweed Control"],
      weeds: [
        {
          weed: "Capeweed",
          pestList: ["Capeweed"],
          states: ["All"],
          rate: "1.5",
          rateMax: "1.5",
          unit: "L/ha",
          stage: "Apply as directed spray under trees or vines",
          note: "Rate: 1.5 L/ha + 1.4 L Agral in 700 L water + 1.6 L/ha Gramoxone 250. WHP: not required. Directed spray only. Gramoxone 250, Spray.Seed 250 and REGLONE have no effect on brown bark but care should be taken to avoid spray contacting green bark."
        }
      ]
    },

    {
      crop: "Pasture Renovation and Establishment — Weed Control",
      cropList: ["Pasture Renovation And Establishment","Weed Control"],
      weeds: [
        {
          weed: "Capeweed and Erodium spp. (Storksbill)",
          pestList: ["Capeweed And Erodium Spp."],
          states: ["All"],
          rate: "0.75",
          rateMax: "1.5",
          unit: "L/ha",
          stage: "Apply by boom spray on run-down pasture after heavy grazing; pasture not greater than 4 cm",
          note: "Rate: 750 mL–1.5 L/ha + Agral in minimum 100 L water. Where Capeweed in very young seedling stage (2–3 true leaves) rates may be reduced to 350 mL/ha. Direct drill 3–7 days after spraying."
        },
        {
          weed: "Barley Grass, Brome Grass, Silver Grass, Sweet Vernal Grass",
          pestList: ["Barley Grass","Brome Grass","Silver Grass","Sweet Vernal Grass"],
          states: ["All"],
          rate: "0.75",
          rateMax: "1.5",
          unit: "L/ha",
          stage: "Apply by boom spray on run-down pasture after heavy grazing",
          note: "Rate: 750 mL–1.5 L/ha + 1–2 L/ha Gramoxone 250 in minimum 100 L water."
        }
      ]
    },

    {
      crop: "Row Crops, Vegetables, Market Gardens — Broadleaf Weed Control",
      cropList: ["Row Crops","Vegetables","Market Gardens","Broadleaf Weed Control"],
      weeds: [
        {
          weed: "Broadleaf weeds — seedlings",
          pestList: ["Broadleaf Weeds — Seedlings"],
          states: ["All"],
          rate: "1.4",
          rateMax: "1.4",
          unit: "L/ha",
          stage: "Seedling weeds; pre-planting or post-sowing pre-crop emergence; or inter-row post-emergence with shielded nozzles",
          note: "Rate: 1.4 L/ha. Add Agral 200 mL/100L. Apply as blanket spray prior to crop emergence. Once crops have emerged, apply as shielded spray between crop rows. Do not allow spray to contact any part of the crop."
        },
        {
          weed: "Broadleaf weeds — mature",
          pestList: ["Broadleaf Weeds — Mature"],
          states: ["All"],
          rate: "2.8",
          rateMax: "4",
          unit: "L/ha",
          stage: "Mature weeds; pre-planting or as shielded inter-row spray",
          note: "Rate: 2.8–4 L/ha per 200–300 L water. Add Agral 200 mL/100L."
        }
      ]
    },

    {
      crop: "Oil Seed Poppies — Weed Control",
      cropList: ["Oil Seed Poppies","Weed Control"],
      weeds: [
        {
          weed: "Weed control in poppies",
          pestList: ["Weed Control In Poppies"],
          states: ["Tas"],
          rate: "0.3",
          rateMax: "1.5",
          unit: "L/ha",
          stage: "Use in accordance with recommendations from Department of Primary Industries or the poppy contracting company",
          note: "Rate: 300 mL–1.5 L/ha. DO NOT add Agral or any other wetting agent to the spray solution."
        }
      ]
    },

    {
      crop: "Cotton Thistle — Infested Areas",
      cropList: ["Cotton Thistle","Infested Areas"],
      weeds: [
        {
          weed: "Cotton Thistle (Onopordum acanthium)",
          pestList: ["Cotton Thistle"],
          states: ["Tas"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Spot spray at rosette stage before the centre shoot is 15 cm tall",
          note: "Rate: 300 mL/ha + 150 mL Agral in 100 L water. Spray to give complete wetting of leaf surface. DO NOT use a lower rate or treat at a later growth stage."
        }
      ]
    },

    {
      crop: "Saffron Thistle — General Weed Control",
      cropList: ["Saffron Thistle","General Weed Control"],
      weeds: [
        {
          weed: "Saffron Thistle",
          pestList: ["Saffron Thistle"],
          states: ["All"],
          rate: "2.8",
          rateMax: "2.8",
          unit: "L/ha",
          stage: "Apply as overall treatment to prevent seeding",
          note: "Rate: 2.8 L/ha + 1 L Agral in 200 L water. Alternatively spot spray: 100 mL + 70 mL Agral per 15 L knapsack."
        }
      ]
    },

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER86924: Hemp — Pre-harvest crop desiccation ──
{
  crop: "Hemp — Pre-harvest crop desiccation (PER86924)",
  cropList: ["Hemp", "Cannabis sativa"],
  permitNumber: "PER86924",
  weeds: [
    {
      weed: "Pre-harvest crop desiccation",
      pestList: ["Crop Desiccation", "Pre-harvest Treatment"],
      states: ["All"],
      rate: "2",
      rateMax: "3",
      unit: "L/ha",
      stage: "Apply prior to harvest for crop desiccation. One application per crop.",
      note: "PERMIT PER86924 (exp. 31/01/2026). 200 g/L diquat products (Reglone). Boom spray 100-300 L/ha, aerial 30-60 L/ha. Add Agral 200 mL/100L or BS 1000 160 mL/100L. Max 1 application per crop. WHP: 7 days harvest. Seed and fibre use only."
    }
  ]
},

],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "DO NOT spray when weeds are under drought stress or when covered with dust or soil.",
    "DO NOT apply with misting machines or CDA applicators.",
    "DO NOT USE TREATED WATER FOR HUMAN CONSUMPTION, LIVESTOCK WATERING OR IRRIGATION PURPOSES FOR 10 DAYS AFTER APPLICATION.",
    "DO NOT apply under weather conditions or from spraying equipment which may cause spray to drift onto nearby susceptible plants/crops, cropping lands or pastures.",
    "DO NOT add adjuvant or water conditioner when used for Wild Radish suppression in Wheat.",
    "DO NOT tank mix for Wild Radish suppression use in Wheat.",
    "DO NOT apply more than once per crop (Wild Radish suppression use).",
    "DO NOT add wetting agent for in-crop Capeweed control in Wheat/Oats.",
    "DO NOT add Agral or any wetting agent for Oil Seed Poppy use.",
    "Minimum boom sprayer spray volume 100 L/ha. Use flat fan nozzles for boom spraying."
  ],

  compatibility: {
    compatible:   ["Can be mixed with Gramoxone 250, Gesatop Granules (for Hops use), Leafex (for Cotton use)."],
    incompatible: ["DO NOT tank mix for Wild Radish suppression in Wheat."],
    notes:        ["Agral at 200 mL/100L or BS1000 at 160 mL/100L required for all uses except Wild Radish in Wheat, Capeweed in Wheat/Oats, and Oil Seed Poppies.", "For high volume spot spraying: 250 mL/100L water; knapsack: 50 mL + 30 mL Agral per 15 L."]
  },

  withholding: {
    harvest: "Cotton, Dry Beans, Dry Peas, Mung Beans, Asparagus, Hops, Orchards/Vineyards, Row Crops, Vegetables, Market Gardens, Oats, Wheat, Winter Cereals: not required. Lentils, Chickpeas, Faba Beans, Poppies: 2 days. Pigeon Peas, Canola, Sunflower, Soya Beans, Sugarcane: 4 days. Rice: 5 days. Potatoes: 7 days. Sweet Potatoes: 14 days.",
    grazing: "DO NOT graze or cut sprayed vegetation for stock food for 1 day after application."
  },

  surfactant:     "Agral at 200 mL/100L or BS1000 at 160 mL/100L required for most uses unless otherwise specified. DO NOT add wetting agent for Wild Radish suppression in Wheat or Capeweed control in Wheat/Oats. DO NOT add wetting agent for Oil Seed Poppies.",
  sprayerCleanup: "Triple or preferably pressure rinse containers before disposal. Add rinsings to spray tank."

};
