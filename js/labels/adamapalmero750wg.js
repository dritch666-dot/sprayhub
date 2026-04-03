// ─────────────────────────────────────────────────────────────────────────────
// Adama Palmero 750 WG HERBICIDE — Label Data
// Water Dispersible Granule | Group 27 Herbicide
// Source: Adama_Palmero_750_Wg_Herbicide_Label.pdf
// APVMA Approval No: 68600/135382
// ADAMA Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['adamapalmero750wg'] = {
  name:             "Palmero 750 WG Herbicide",

  category:         "Herbicides",
  activeIngredient: "750 g/kg Isoxaflutole",
  group:            "Group 27 Herbicide",
  modeOfAction:     "Inhibitor of 4-hydroxyphenyl-pyruvate dioxygenase (4-HPPD) — Isoxazole",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#d97706",
  apvma:            "68600/135382",
  company: "Adama",
  labelPdf:         "Source labels/Adama_Palmero_750_Wg_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/PALMERO_750_WG_HERBICIDE.pdf",
  signalHeading:    "CAUTION",
  classification: {
    type: "Herbicide",
    target: ["Broadleaf Weeds", "Annual Grasses"],
    timing: ["Pre-emergence"]
  },

  crops: [
    // ══════════════════════════════════════════════════════════════════
    // SUGARCANE
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Sugarcane — Pre Weed Emergence (Light Soils)",
      cropList: ["Sugarcane"],
      weeds: [
        {
          weed: "Barnyard Grass, Billygoat Weed (Blue Top), Blackberry Nightshade, Crowsfoot Grass, Green Summer Grass, Guinea Grass, Summer Grass, Thick Head, Turnip Weed",
          pestList: ["Barnyard Grass", "Billygoat Weed", "Blue Top", "Blackberry Nightshade", "Crowsfoot Grass", "Green Summer Grass", "Guinea Grass", "Summer Grass", "Thick Head", "Turnip Weed"],
          states: ["Qld", "NSW", "WA"],
          rate: "100", rateMax: "125", unit: "g/ha",
          stage: "Pre weed emergence",
          note: "Light soils (sands, loamy sand, light sandy loam, light silty loams — less than 15% clay): 100–125 g/ha. PLANT CANE: Broadcast or banded spray applications from planting up to 3–4 leaf crop stage only. May be applied as a broadcast or band spray 'over the top' of plant cane from planting up to the 3 to 4 leaf crop stage. ADD paraquat at label rates where green cane leaf has emerged at application, even if no weeds have emerged. DO NOT apply to shallow planted cane unless there is sufficient soil cover above the sett (minimum 60 mm, preferably 75–100 mm). Use higher rates for longer residual effect."
        }
      ]
    },
    {
      crop: "Sugarcane — Pre Weed Emergence (Medium Soils)",
      cropList: ["Sugarcane"],
      weeds: [
        {
          weed: "Barnyard Grass, Billygoat Weed (Blue Top), Blackberry Nightshade, Crowsfoot Grass, Green Summer Grass, Guinea Grass, Summer Grass, Thick Head, Turnip Weed",
          pestList: ["Barnyard Grass", "Billygoat Weed", "Blue Top", "Blackberry Nightshade", "Crowsfoot Grass", "Green Summer Grass", "Guinea Grass", "Summer Grass", "Thick Head", "Turnip Weed"],
          states: ["Qld", "NSW", "WA"],
          rate: "100", rateMax: "150", unit: "g/ha",
          stage: "Pre weed emergence",
          note: "Medium soils (sandy loam, silty loam, sandy clay loam, loam — 15–33% clay): 100–150 g/ha. See Light Soils critical comments for application guidance. PLANT CANE AND RATOON CANE: Directed spray applications prior to canopy closure — apply as a directed inter-row spray (e.g. Irvin leg) to the soil surface. Best results are obtained after all tillage operations are completed and the row mound surface has consolidated. DO NOT apply to Sugarcane less than 0.75 m in height. If weeds have emerged at application, add a knockdown herbicide at the appropriate label rate."
        }
      ]
    },
    {
      crop: "Sugarcane — Pre Weed Emergence (Heavy Soils)",
      cropList: ["Sugarcane"],
      weeds: [
        {
          weed: "Barnyard Grass, Billygoat Weed (Blue Top), Blackberry Nightshade, Crowsfoot Grass, Green Summer Grass, Guinea Grass, Summer Grass, Thick Head, Turnip Weed",
          pestList: ["Barnyard Grass", "Billygoat Weed", "Blue Top", "Blackberry Nightshade", "Crowsfoot Grass", "Green Summer Grass", "Guinea Grass", "Summer Grass", "Thick Head", "Turnip Weed"],
          states: ["Qld", "NSW", "WA"],
          rate: "100", rateMax: "200", unit: "g/ha",
          stage: "Pre weed emergence",
          note: "Heavy soils (heavy loams, clay loams, clays, dark earths — greater than 33% clay): 100–200 g/ha. See Light Soils critical comments for application guidance. RATOON CANE: Broadcast or banded spray applications (after harvest up to two-leaf crop stage). May be applied 'over the top' of ratoon cane as a broadcast or band spray up to the two-leaf crop stage. Can be applied to burnt or green trash blanketed ratoon cane. If a non-UV stable pre-emergence herbicide is included for extended weed spectrum, heavy trash blanket layers should be removed prior to application to ensure herbicide contact with the soil surface. Avoid soil disturbance (e.g. stool splitting) after application."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // FALLOW — prior to planting of crops
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Fallow — Weeds Controlled",
      cropList: ["Fallow"],
      weeds: [
        {
          weed: "Fleabane, Sowthistle, Feathertop Rhodes Grass",
          pestList: ["Fleabane", "Sowthistle", "Feathertop Rhodes Grass"],
          states: ["All"],
          rate: "100", rateMax: "100", unit: "g/ha",
          stage: "Pre weed emergence — applied to fallow prior to planting of crops",
          note: "Palmero 750 WG may be applied following crop harvest but not less than the period specified under Crop rotation recommendations. Minimum recropping intervals apply for all crops following application. Best results are obtained where a complete and even application is made to weed-free soil prior to weed germination, and sufficient rainfall occurs after application and prior to weed emergence. Use a nozzle configuration to achieve a medium to coarse spray pattern. A minimum spray volume of 50 L/ha is recommended. Cultivation following application may reduce pre-emergence weed control. Will not control emerged weeds — use a knockdown herbicide. Weed control may be reduced by prolonged wet soil conditions."
        }
      ]
    },
    {
      crop: "Fallow — Weeds Suppressed",
      cropList: ["Fallow"],
      weeds: [
        {
          weed: "Barnyard Grass",
          pestList: ["Barnyard Grass"],
          states: ["All"],
          rate: "100", rateMax: "100", unit: "g/ha",
          stage: "Pre weed emergence — suppression only",
          note: "Suppression only. See Weeds Controlled section for full application details."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // CHICKPEAS — alone
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Chickpeas — Weeds Controlled (Palmero alone)",
      cropList: ["Chickpeas"],
      weeds: [
        {
          weed: "Capeweed, Crassula, Indian Hedge Mustard, Medic, Prickly Lettuce, Sowthistle, Turnip Weed, Wild Radish",
          pestList: ["Capeweed", "Crassula", "Indian Hedge Mustard", "Medic", "Prickly Lettuce", "Sowthistle", "Turnip Weed", "Wild Radish"],
          states: ["Qld", "NSW", "ACT", "Vic", "SA", "WA"],
          rate: "100", rateMax: "100", unit: "g/ha",
          stage: "Pre weed emergence — post-sowing pre-emergent",
          note: "Application can be made to dry or damp soil. Application should be made as soon as possible after planting and prior to emergence of the crop. If applied during the planting operation, ensure Palmero 750 WG is applied after furrow closure. Failure to thoroughly close and firm the seed furrow may allow herbicide to directly contact the seed which may cause crop injury. Use a nozzle configuration to achieve a medium to coarse spray pattern. A minimum spray volume of 50 L/ha is recommended. Application of Palmero 750 WG post-sowing pre-emergent to chickpeas planted in sandy or gravelly soils, or soils low in clay or organic matter may result in crop damage. Heavy rains after application may cause crop damage, particularly in sandy or gravelly soils. NOT recommended for use on Yorker chickpeas. See Crop Safety section."
        }
      ]
    },
    {
      crop: "Chickpeas — Weeds Suppressed (Palmero alone)",
      cropList: ["Chickpeas"],
      weeds: [
        {
          weed: "Deadnettle, Slender Celery",
          pestList: ["Deadnettle", "Slender Celery"],
          states: ["Qld", "NSW", "ACT", "Vic", "SA", "WA"],
          rate: "100", rateMax: "100", unit: "g/ha",
          stage: "Pre weed emergence — suppression only",
          note: "Suppression only. See Weeds Controlled section for full application details."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // CHICKPEAS — with Simanex 900 WG tank mix
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Chickpeas — Weeds Controlled (Palmero + Simanex 900 WG)",
      cropList: ["Chickpeas"],
      weeds: [
        {
          weed: "Capeweed, Crassula, Deadnettle, Indian Hedge Mustard, Medic, Prickly Lettuce, Silvergrass, Slender Celery, Sowthistle, Spear Thistle, Turnip Weed, Wild Radish",
          pestList: ["Capeweed", "Crassula", "Deadnettle", "Indian Hedge Mustard", "Medic", "Prickly Lettuce", "Silvergrass", "Slender Celery", "Sowthistle", "Spear Thistle", "Turnip Weed", "Wild Radish"],
          states: ["Qld", "NSW", "ACT", "Vic", "SA", "WA"],
          rate: "100", rateMax: "100", unit: "g/ha",
          stage: "Pre weed emergence — with 830 g/ha Simanex 900 WG",
          note: "Rate: 100 g/ha Palmero 750 WG + 830 g/ha Simanex 900 WG. The Critical Comments for the use of Palmero 750 WG alone in chickpeas also apply to this section. Application of Palmero 750 WG + Simanex 900 WG in sandy or gravelly soils may result in severe crop damage."
        }
      ]
    },
    {
      crop: "Chickpeas — Weeds Suppressed (Palmero + Simanex 900 WG)",
      cropList: ["Chickpeas"],
      weeds: [
        {
          weed: "Saffron Thistle, Spiny Emex, Wireweed",
          pestList: ["Saffron Thistle", "Spiny Emex", "Wireweed"],
          states: ["Qld", "NSW", "ACT", "Vic", "SA", "WA"],
          rate: "100", rateMax: "100", unit: "g/ha",
          stage: "Pre weed emergence — suppression only with 830 g/ha Simanex 900 WG",
          note: "Suppression only. Rate: 100 g/ha Palmero 750 WG + 830 g/ha Simanex 900 WG. See Weeds Controlled (Palmero + Simanex 900 WG) section for full details."
        }
      ]
    }
  ],

  restraints: [
    "All crops: DO NOT apply by aircraft.",
    "Sugarcane: DO NOT apply with wetting agents, crop oils or other adjuvants.",
    "Sugarcane: DO NOT apply to poorly drained soils, e.g. soils prone to waterlogging, sodic soils or soils affected by physical compaction.",
    "Sugarcane: DO NOT apply to crops with poor root development or to crops under stress from waterlogging, drought, nutrient deficiency or disease.",
    "Sugarcane: DO NOT apply at any rate to soils of cation exchange capacity (CEC) less than 3 meq/100 g or with clay content less than 10%, or with organic carbon content of less than 0.8%.",
    "Sugarcane: DO NOT apply at rates of 125 g/ha or higher to soils with organic carbon content of less than 1.0%, unless the CEC is above 9.5 meq/100 g.",
    "Sugarcane: DO NOT apply at rates of 125 g/ha or higher to soils of CEC less than 4.5 meq/100 g.",
    "Spray Drift: DO NOT allow bystanders to come into contact with the spray cloud.",
    "Spray Drift: DO NOT apply unless the wind speed is between 3 and 20 km/h at the application site during the time of application.",
    "Spray Drift: DO NOT apply if there are hazardous surface temperature inversion conditions present at the application site."
  ],

  withholding: {
    sugarcane: {
      harvest: "DO NOT harvest for 19 weeks after application",
      grazing: "DO NOT graze animals on treated crops"
    },
    chickpeas: {
      harvest: "Not required when used as directed",
      grazing: "DO NOT graze or cut for stock food for 6 weeks after application"
    },
    fallow: {
      harvest: "Not required when used as directed (crops planted after summer fallow)",
      grazing: "DO NOT graze treated weeds and stubble in a summer fallow situation. DO NOT graze or cut for stockfood a crop sown following a fallow spray for 6 weeks after sowing."
    }
  },

  compatibility: {
    compatible:   ["Paraquat (Sugarcane)", "Mentor (Sugarcane)", "Farmozine (Sugarcane)", "Simanex 900 WG (Chickpeas)", "Glyphosate (Fallow)", "Farmozine (Fallow)", "Impose (Fallow)"],
    incompatible: ["Trifluralin (Chickpeas)", "Wetting agents (Sugarcane)", "Crop oils (Sugarcane)"],
    notes: ["DO NOT allow spray mixture to stand overnight when tank-mixing with glyphosate — water should be clean and free of clay, silt and algae."]
  },

  surfactant:     "Not required. DO NOT apply with wetting agents, crop oils or other adjuvants in Sugarcane.",
  sprayerCleanup: "After using Palmero 750 WG, empty the tank completely and drain the whole system. Thoroughly wash inside the tank using a pressure hose. Before disassembling nozzles, filters and other parts for cleaning, thoroughly wash down the exterior of the spray equipment with a pressure hose. To rinse: quarter fill the tank with clean water and circulate through the pump, lines, hoses and nozzles. Drain and repeat the rinsing procedure twice. To decontaminate (before spraying sensitive crops e.g. canola, pulses except chickpeas, forage legumes and forage brassicas): wash and rinse the system as above. Quarter fill the tank and add a liquid alkali detergent at 500 mL/100 L of water or a chlorine bleach (4% chlorine) at 300 mL/100 L of water and circulate throughout the system for at least fifteen minutes. Drain the whole system. Finally, flush the system with clean water and allow to drain."
};
