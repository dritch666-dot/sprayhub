// ─────────────────────────────────────────────────────────
// ADAMA CAPTAN 800 WG Fungicide — Label Data
// Group M4 Fungicide (Captan)
// Source: Adama_Adama_Captan_800_Wg_Fungicide_Label.pdf
// APVMA Approval No: 60244/62732
// ADAMA Australia Pty Limited
// ─────────────────────────────────────────────────────────
productDatabase['captan800wg'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "ADAMA Captan 800 WG Fungicide",
  company: "Adama",

  category:         "Fungicides",
  activeIngredient: "800 g/kg Captan",
  group:            "Group M4 Fungicide",
  modeOfAction:     "Multi-site contact fungicide for preventative control of certain diseases in fruit crops, almonds, pistachios, turf and ornamentals.",
  formulation:      "Water-Dispersible Granule (WG)",
  color:            "#16a34a",
  apvma:            "60244",
  labelPdf:         "Source labels/Adama_Adama_Captan_800_Wg_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/ADAMA_CAPTAN_800_WG_FUNGICIDE.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Black Spot", "Grey Mould", "Brown Rot", "Downy Mildew", "Anthracnose", "Phomopsis"],
    timing: ["Preventive"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ═══ TREE AND VINE CROPS ═══

    // ── Apples ────────────────────────────────────────────────
    {
      crop: "Apples",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Black spot (Venturia inaequalis)",
          pestList: ["Black Spot", "Venturia Inaequalis"],
          states: ["All"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          stage: "Apply from pink stage onwards following a copper spray at green tip, then at 7-day intervals until petal fall; after petal fall apply as cover spray at 10–14-day intervals",
          note: "Dilute rate: 125 g/100 L. For concentrate spraying refer to Mixing/Application section — apply same total product per hectare. DO NOT use at concentrate rates greater than 250 g/100 L. Risk of russet may be increased in some varieties — use alternative materials between full bloom and second cover if concerned. Apply to point of run-off. Max 5 applications per season. WHP: 7 days harvest."
        }
      ]
    },

    // ── Almonds and Pistachios ───────────────────────────────
    {
      crop: "Almonds and Pistachios",
      cropList: ["Almonds", "Pistachios"],
      weeds: [
        {
          weed: "Anthracnose (Colletotrichum spp.)",
          pestList: ["Anthracnose", "Colletotrichum"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Almonds: apply at pink bud, full bloom, petal fall, or 2–3 and 4–6 weeks post petal fall. Pistachios: apply from bud swell through full bloom",
          note: "Dilute rate: 200 g/100 L. For concentrate spraying refer to Mixing/Application section. Use shorter intervals under heavy pressure. Further applications may be applied during spring and summer where favourable disease conditions exist. Apply in a protective program alone or with other approved fungicides. Max 5 applications per season. WHP: 28 days harvest."
        }
      ]
    },

    // ── Pears ─────────────────────────────────────────────────
    {
      crop: "Pears",
      cropList: ["Pears"],
      weeds: [
        {
          weed: "Black spot (Venturia pirina)",
          pestList: ["Black Spot", "Venturia Pirina"],
          states: ["All"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          stage: "Apply from pink stage onwards following a copper spray at green tip, then at 7-day intervals until petal fall; after petal fall apply as cover spray at 10–14-day intervals",
          note: "Dilute rate: 125 g/100 L. For concentrate spraying refer to Mixing/Application section. Risk of russet may be increased in some varieties — use alternative materials between full bloom and second cover if concerned. Apply to point of run-off. Max 5 applications per season. DO NOT tank mix with propargite + Gusathion (without calcium nitrate) on pears. WHP: 7 days harvest."
        }
      ]
    },

    // ── Grapes ────────────────────────────────────────────────
    {
      crop: "Grapes — Black Spot",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Black spot (Elsinoe ampelina)",
          pestList: ["Black Spot", "Elsinoe Ampelina"],
          states: ["All"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          stage: "Apply at 50% bud-burst and repeat 10–14 days later",
          note: "Dilute rate: 125 g/100 L. For concentrate spraying refer to Mixing/Application section. Apply to point of run-off. Max 5 applications per season."
        }
      ]
    },
    {
      crop: "Grapes — Grey Mould",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Grey mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis Cinerea"],
          states: ["All"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          stage: "Apply at early flowering, 80–100% cap fall, pre-bunch closure, veraison and pre-harvest",
          note: "Dilute rate: 125 g/100 L. For concentrate spraying refer to Mixing/Application section. Apply to point of run-off. Max 5 applications per season."
        }
      ]
    },
    {
      crop: "Grapes — Downy Mildew",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Downy mildew (Plasmopara viticola)",
          pestList: ["Downy Mildew", "Plasmopara Viticola"],
          states: ["All"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          stage: "Apply from flowering onwards at 10–14-day intervals",
          note: "Dilute rate: 125 g/100 L. For concentrate spraying refer to Mixing/Application section. Apply to point of run-off. Max 5 applications per season."
        }
      ]
    },
    {
      crop: "Grapes — Phomopsis",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Phomopsis cane and leaf blight (Phomopsis viticola)",
          pestList: ["Phomopsis Cane and Leaf Blight", "Phomopsis Viticola"],
          states: ["All"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          stage: "Commence at early budburst and repeat at 7–14-day intervals until prior to flowering",
          note: "Dilute rate: 125 g/100 L. For concentrate spraying refer to Mixing/Application section. Use shorter interval where there is rapid shoot growth and conditions favour Phomopsis infection (wet weather). Adjust spray equipment for thorough coverage of grape buds and shoots. Max 5 applications per season."
        }
      ]
    },

    // ── Stone Fruit (except Apricots) ────────────────────────
    {
      crop: "Stone Fruit (except Apricots)",
      cropList: ["Peaches", "Nectarines", "Plums", "Cherries"],
      weeds: [
        {
          weed: "Blossom blight and brown rot (Sclerotinia laxa, S. fructicola)",
          pestList: ["Blossom Blight", "Brown Rot", "Sclerotinia Laxa", "Sclerotinia Fructicola"],
          states: ["All"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          stage: "Apply at pink bud, 10% blossom, full bloom, petal fall, shuck fall, and pre-harvest (6, 3 and 1 week prior to harvest)",
          note: "Dilute rate: 125 g/100 L (same rate as other tree crops in the dilute table). For concentrate spraying refer to Mixing/Application section. DO NOT apply to apricots as damage to fruit and foliage may occur. Apply to point of run-off. Max 5 applications per season. WHP: 7 days harvest."
        }
      ]
    },

    // ═══ NON TREE AND VINE CROPS ═══

    // ── Strawberries — Grey Mould / Gloeosporium ─────────────
    {
      crop: "Strawberries — Grey Mould",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Grey mould (Botrytis cinerea) / Gloeosporium fruit rot",
          pestList: ["Grey Mould", "Botrytis Cinerea", "Gloeosporium Fruit Rot"],
          states: ["All"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          stage: "Apply every 10 days commencing at blossom stage",
          note: "Apply to point of run-off. Max 5 applications per season. WHP: 1 day harvest."
        }
      ]
    },

    // ── Strawberries — Phytophthora / Black Spot / Scorch / Leaf Blight ──
    {
      crop: "Strawberries — Phytophthora / Black Spot / Scorch",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Phytophthora fruit rot / Black spot (Anthracnose) / Scorch / Leaf blight",
          pestList: ["Phytophthora Fruit Rot", "Black Spot", "Anthracnose", "Scorch", "Leaf Blight"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply every 10 days commencing at blossom stage",
          note: "Apply to point of run-off. Max 5 applications per season. WHP: 1 day harvest."
        }
      ]
    },

    // ── Turf ──────────────────────────────────────────────────
    {
      crop: "Turf",
      cropList: ["Turf"],
      weeds: [
        {
          weed: "Brown patch (Rhizoctonia solani)",
          pestList: ["Brown Patch", "Rhizoctonia Solani"],
          states: ["All"],
          rate: "100",
          rateMax: "150",
          unit: "g/100L",
          stage: "For preventative treatment September to April, apply every 5–6 weeks",
          note: "Use 100–150 g in 25–50 L water per 100 m² turf. Max 5 applications per season. No WHP stated."
        }
      ]
    },

    // ── Seedlings (Ornamentals and Tobacco) ───────────────────
    {
      crop: "Seedlings (Ornamentals and Tobacco)",
      cropList: ["Seedlings", "Ornamentals", "Tobacco"],
      weeds: [
        {
          weed: "Damping-off (Pythium spp.)",
          pestList: ["Damping-Off", "Pythium"],
          states: ["All"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          stage: "Apply every 7–14 days when weather conditions favour disease",
          note: "Use 3 L of solution per m² of seedbed. Pay particular attention to bases of seedlings. When treating tobacco seedbeds, wait until seedlings are at least 5 cm high. No WHP stated."
        }
      ]
    },

    // ── Roses ─────────────────────────────────────────────────
    {
      crop: "Roses",
      cropList: ["Roses"],
      weeds: [
        {
          weed: "Black spot (Diplocarpon rosae)",
          pestList: ["Black Spot", "Diplocarpon Rosae"],
          states: ["All"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          stage: "Apply every 7–14 days; use shorter interval during showery weather",
          note: "Apply to thoroughly wet both surfaces of foliage. Max 5 applications per season. No WHP stated."
        }
      ]
    },

    // ═══ PERMIT USES ═══

    // ── PER13958: Rubus/Ribes/Blueberries — Fungal Blights ───
    {
      crop: "Rubus / Ribes / Blueberries (PER13958)",
      cropList: ["Rubus", "Boysenberries", "Loganberries", "Blackberries", "Raspberries", "Ribes", "Currants", "Gooseberries", "Blueberries"],
      permitNumber: "PER13958",
      weeds: [
        {
          weed: "Cane spot / Spur blights / Botrytis flower and fruit rot",
          pestList: ["Cane Spot", "Spur Blight", "Botrytis Flower Rot", "Botrytis Fruit Rot"],
          states: ["All (except VIC)"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          note: "PERMIT PER13958 (exp. 31 Aug 2030). 800 g/kg captan: 125 g/100L. Spray foliage with air blast, boom or knapsack. First application after green tip, repeat every 10–14 days. Max 5 applications/year. WHP: 1 day harvest."
        },
        {
          weed: "Anthracnose (Colletotrichum spp.) — Blueberries only",
          pestList: ["Anthracnose", "Colletotrichum"],
          states: ["All (except VIC)"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          note: "PERMIT PER13958 (exp. 31 Aug 2030). Blueberries only. 800 g/kg captan: 125 g/100L. Spray foliage with air blast, boom or knapsack. First application after green tip, repeat every 10–14 days. Max 5 applications/year. WHP: 1 day harvest."
        }
      ]
    },

    // ── PER14326: Capsicum/Chilli/Cucumber/Lettuce — Grey Mould
    {
      crop: "Capsicum / Chilli / Cucumber / Leafy Lettuce (PER14326)",
      cropList: ["Capsicums", "Chilli Peppers", "Cucumbers", "Leafy Lettuce"],
      permitNumber: "PER14326",
      weeds: [
        {
          weed: "Grey mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis Cinerea"],
          states: ["All (except VIC)"],
          rate: "125",
          rateMax: "125",
          unit: "g/100L",
          note: "PERMIT PER14326 (exp. 31 Mar 2027). 800 g/kg captan: 125 g/100L. Apply as foliar spray; field or protected crops. WHP: 7 days harvest."
        }
      ]
    },

    // ── PER82043: Mandarins & Tangelos — Emperor Brown Spot ───
    {
      crop: "Mandarins & Tangelos (PER82043)",
      cropList: ["Mandarins", "Tangelos"],
      permitNumber: "PER82043",
      weeds: [
        {
          weed: "Emperor brown spot (Alternaria alternata)",
          pestList: ["Emperor Brown Spot", "Alternaria Alternata"],
          states: ["All (except VIC)"],
          rate: "180",
          rateMax: "180",
          unit: "g/100L",
          note: "PERMIT PER82043 (exp. 31 Jul 2027). 800 g/kg captan: 180 g/100L. Apply in March and repeat at 4-week intervals until harvest. Use sufficient water for thorough coverage. Max 4 applications per season. WHP: 28 days harvest."
        }
      ]
    }

  ],

  // ── General notes ──────────────────────────────────────────
  restraints: [
    "DO NOT apply this product by aircraft.",
    "DO NOT use at concentrate rates greater than 250 g/100 L water.",
    "DO NOT apply to apricots as damage to fruit and foliage may occur.",
    "DO NOT apply in combination with or within 14 days before or after winter or summer oil sprays.",
    "DO NOT graze any treated area or cut any treated area for stockfood."
  ],
  withholding: {
    harvest: "Almonds, Pistachios: 28 days. Apples, Pears, Grapes, Stone Fruit (except apricots): 7 days. Strawberries: 1 day.",
    grazing: "DO NOT graze any treated area or cut any treated area for stockfood."
  },
  compatibility: {
    compatible: [
      "Aphidex", "Carbaryl", "Chlorpyrifos", "Dimethoate", "Hexaconazole",
      "Insegar", "Kohinor", "Maldison", "Mavrik Aquaflow", "Myclobutanil",
      "Penconazole", "Propargite (apples only)", "Pyranica", "Sanmite",
      "Sulphur", "Triadimenol"
    ],
    incompatible: [
      "Copper mixtures", "Spray lime", "Lime sulphur", "Oils (or within 14 days of oil sprays)",
      "Emulsifiable concentrates (except listed products)"
    ],
    note: [
      "DO NOT use sulphur combinations on sulphur-sensitive crops.",
      "On pears, DO NOT tank mix propargite + Gusathion (without calcium nitrate).",
      "Mixtures with more than one compatible product or any unlisted product may be ineffective or cause damage — consult Adama for advice."
    ]
  }
};
