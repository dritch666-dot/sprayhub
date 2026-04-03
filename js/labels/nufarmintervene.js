// ─────────────────────────────────────────────────────────────────────────────
// Nufarm Intervene® Fungicide — Label Data
// Water-Dispersible Granule (WG) | Group 19 Fungicide
// Source: Nufarm_Intervene_Fungicide_Label.pdf
// Nufarm Australia Limited
// Certified Allowed Input — ACO Cert. No. 11540
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['nufarmintervene'] = {
  name:             "Nufarm Intervene Fungicide",

  category:         "Fungicides",
  activeIngredient: "113 g/kg Polyoxin-D Zinc Salt",
  group:            "Group 19 Fungicide",
  modeOfAction:     "Chitin synthesis inhibitor — limits production of chitin for fungal cell walls",
  formulation:      "Water-Dispersible Granule (WG)",
  color:            "#0ea5e9",
  company: "Nufarm",
  labelPdf:         "Source labels/Nufarm_Intervene_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/3NV6F-NUFARM-INTERVENE-FUNGICIDE.pdf",
  signalHeading:    "CAUTION",
  apvma:            "90033/142337",
  classification: {
    type: "Fungicide",
    target: ["Botrytis", "Powdery Mildew", "Alternaria", "Shot Hole"],
    timing: ["Preventative", "Protective"]
  },

  crops: [
    // ══════════════════════════════════════════════════════════════════
    // APPLES
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Apples — Powdery Mildew",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Powdery mildew (Podosphaera leucotricha)",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "22", rateMax: "40", unit: "g/100L",
          stage: "Flowering through until harvest — preventative",
          note: "Apply as a protective treatment from flowering through until harvest. DO NOT use more than 800 g/ha of Nufarm Intervene per application. Higher use rates are recommended when conditions favour high risk of disease infection. Apply up to 6 applications per season (refer to resistance management guidelines). Reapplication should be conducted on 10–14 day intervals. A retreatment interval of 7 days is recommended if rainfall occurs between treatment applications."
        }
      ]
    },
    {
      crop: "Apples — Alternaria Leaf and Fruit Spot",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Alternaria leaf and fruit spot (Alternaria mali)",
          pestList: ["Alternaria", "Alternaria Leaf Spot", "Alternaria Fruit Spot"],
          states: ["All"],
          rate: "40", rateMax: "40", unit: "g/100L",
          stage: "Flowering through until harvest — preventative",
          note: "Apply as a protective treatment from flowering through until harvest. DO NOT use more than 800 g/ha of Nufarm Intervene per application. Higher use rates are recommended when conditions favour high risk of disease infection. Apply up to 6 applications per season (refer to resistance management guidelines). Reapplication should be conducted on 10–14 day intervals. A retreatment interval of 7 days is recommended if rainfall occurs between treatment applications."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // ALMONDS
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Almonds — Shot Hole",
      cropList: ["Almonds"],
      weeds: [
        {
          weed: "Shot hole (Wilsonomyces carpophilus)",
          pestList: ["Shot Hole"],
          states: ["All"],
          rate: "33", rateMax: "40", unit: "g/100L",
          stage: "Early flowering (shot hole) OR early hull split (hull rot) through to harvest",
          note: "Apply as a protective treatment from early flowering (shot hole) OR early hull split (hull rot) through to harvest. DO NOT use more than 800 g/ha of Nufarm Intervene per application. Higher use rates are recommended at sites with a history of frequent shot hole or hull rot epidemics, when disease levels were high the previous season or when conditions favour high risk of disease infection. Apply up to 6 applications per season (refer to resistance management guidelines). Reapplication should be conducted on 10–14 day intervals. A retreatment interval of 7 days is recommended if rainfall occurs between treatment applications."
        }
      ]
    },
    {
      crop: "Almonds — Hull Rot (Suppression)",
      cropList: ["Almonds"],
      weeds: [
        {
          weed: "Hull rot (Rhizopus spp., Botrytis spp.) — Suppression only",
          pestList: ["Hull Rot"],
          states: ["All"],
          rate: "33", rateMax: "40", unit: "g/100L",
          stage: "Early hull split through to harvest — suppression only",
          note: "Suppression only. Rate: 33–40 g/100 L + 50 mL/100 L Nufarm Activator* (* or other non-ionic surfactant used in accordance with label instructions for contact fungicides in almonds). Apply as a protective treatment from early hull split through to harvest. DO NOT use more than 800 g/ha per application. Apply up to 6 applications per season. Reapplication on 10–14 day intervals. Retreatment interval of 7 days is recommended if rainfall occurs between treatment applications."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // BERRIES
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Berries — Grey Mould & Powdery Mildew",
      cropList: ["Berries", "Blackberries", "Blueberries", "Raspberries", "Strawberries"],
      weeds: [
        {
          weed: "Grey mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis"],
          states: ["All"],
          rate: "22", rateMax: "40", unit: "g/100L",
          stage: "Preventative — fruit, stems, foliage and flowers",
          note: "Apply as a protective treatment for fruit, stems, foliage and flowers in line with climatic conditions that favour infection. Higher use rates are recommended when conditions favour high risk of disease infection. Reapplication should be conducted on 7–10 day intervals where consecutive treatments are being applied. A retreatment interval of 7 days is recommended if rainfall occurs between treatment applications. Nufarm Intervene can be applied up to 6 times through a growing season (refer to resistance management guidelines). Nufarm Intervene can be applied up to the day of harvest. Pre-harvest applications can assist with reducing disease expression during post-harvest storage. Alternative rate: 220–400 g/ha."
        },
        {
          weed: "Powdery mildew (Podosphaera aphanis)",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "22", rateMax: "40", unit: "g/100L",
          stage: "Preventative — fruit, stems, foliage and flowers",
          note: "Apply as a protective treatment for fruit, stems, foliage and flowers in line with climatic conditions that favour infection. Higher use rates are recommended when conditions favour high risk of disease infection. Reapplication on 7–10 day intervals. Retreatment interval of 7 days if rainfall occurs. Up to 6 applications per season. Alternative rate: 220–400 g/ha."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // CHERRIES
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Cherries — Grey Mould (Suppression)",
      cropList: ["Cherries"],
      weeds: [
        {
          weed: "Grey mould (Botrytis cinerea) — Suppression only",
          pestList: ["Grey Mould", "Botrytis"],
          states: ["All"],
          rate: "40", rateMax: "40", unit: "g/100L",
          stage: "Early flowering through to fruit development — suppression only",
          note: "For use in Tasmania and other cool climate regions only. Suppression only. Apply as a protective treatment from early flowering through until harvest. DO NOT use more than 800 g/ha of Nufarm Intervene per application. Apply up to 6 applications per season (refer to resistance management guidelines). Reapplication should be conducted on 10–14 day intervals. A retreatment interval of 7 days is recommended if rainfall occurs between treatment applications."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // GRAPES — Grey Mould
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Grapes — Grey Mould (High Risk)",
      cropList: ["Grapes", "Wine Grapes", "Table Grapes", "Dried Fruit"],
      weeds: [
        {
          weed: "Grey Mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis"],
          states: ["All"],
          rate: "40", rateMax: "40", unit: "g/100L",
          stage: "Critical growth stages — target botrytis expression",
          note: "Production zones frequently experience botrytis expression. Target critical growth stages susceptible to botrytis infection. Apply Nufarm Intervene as part of a disease management program, prior to the onset of disease. Ensure effective coverage of all surfaces for maximum performance. Apply no more than 4 applications per season (refer to resistance management guidelines). Reapplication should be conducted on 10–14 day intervals. A retreatment interval of 7 days is recommended if rainfall occurs between treatment applications."
        }
      ]
    },
    {
      crop: "Grapes — Grey Mould (Low–Moderate Risk)",
      cropList: ["Grapes", "Wine Grapes", "Table Grapes", "Dried Fruit"],
      weeds: [
        {
          weed: "Grey Mould (Botrytis cinerea) — low to moderate frequency",
          pestList: ["Grey Mould", "Botrytis"],
          states: ["All"],
          rate: "22", rateMax: "22", unit: "g/100L",
          stage: "Around sporadic infection events — low to moderate botrytis frequency",
          note: "Production zones with low to moderate frequency of botrytis expression between seasons. Ideally suited to application around sporadic infection events. Apply no more than 4 applications per season (refer to resistance management guidelines). Reapplication should be conducted on 10–14 day intervals. A retreatment interval of 7 days is recommended if rainfall occurs between treatment applications."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // GRAPES — Powdery Mildew
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Grapes — Powdery Mildew (High Risk)",
      cropList: ["Grapes", "Wine Grapes", "Table Grapes", "Dried Fruit"],
      weeds: [
        {
          weed: "Powdery Mildew (Erysiphe necator)",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "40", rateMax: "40", unit: "g/100L",
          stage: "Preventative — high severity of infection",
          note: "Production zones frequently experience powdery mildew expression. Use while severity of infection remains low. Apply as a protective treatment. Higher use rates are recommended when conditions favour high risk of disease infection. Apply up to 4 applications per season (refer to resistance management guidelines). Reapplication should be conducted on 10 day intervals. A retreatment interval of 7 days is recommended if rainfall occurs between treatment applications."
        }
      ]
    },
    {
      crop: "Grapes — Powdery Mildew (Low–Moderate Risk)",
      cropList: ["Grapes", "Wine Grapes", "Table Grapes", "Dried Fruit"],
      weeds: [
        {
          weed: "Powdery Mildew (Erysiphe necator) — low to moderate frequency",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "22", rateMax: "22", unit: "g/100L",
          stage: "Preventative — low to moderate infection pressure",
          note: "Production zones experience low to moderate frequency of powdery mildew expression. Use while severity of infection remains low. Apply as a protective treatment. Apply up to 4 applications per season (refer to resistance management guidelines). Reapplication should be conducted on 10 day intervals. A retreatment interval of 7 days is recommended if rainfall occurs between treatment applications."
        }
      ]
    },

    // ══════════════════════════════════════════════════════════════════
    // BASIL & THYME (protected cropping only)
    // ══════════════════════════════════════════════════════════════════
    {
      crop: "Basil — Powdery Mildew",
      cropList: ["Basil", "Herbs"],
      weeds: [
        {
          weed: "Powdery mildew (Golovinomyces monardae)",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "40", rateMax: "40", unit: "g/100L",
          stage: "Preventative — protected cropping systems only",
          note: "Protected cropping systems only. Apply as a protective treatment in line with climatic conditions that favour infection. Apply no more than 4 applications per season (refer to resistance management guidelines). Reapplication should be conducted on 7–10 day intervals. A retreatment interval of 7 days is recommended. Alternative rate: 400 g/ha."
        }
      ]
    },
    {
      crop: "Thyme — Powdery Mildew",
      cropList: ["Thyme", "Herbs"],
      weeds: [
        {
          weed: "Powdery mildew (Golovinomyces monardae)",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "40", rateMax: "40", unit: "g/100L",
          stage: "Preventative — protected cropping systems only",
          note: "Protected cropping systems only. Apply as a protective treatment in line with climatic conditions that favour infection. Apply no more than 4 applications per season (refer to resistance management guidelines). Reapplication should be conducted on 7–10 day intervals. A retreatment interval of 7 days is recommended. Alternative rate: 400 g/ha."
        }
      ]
    },
    {
      crop: "Basil & Thyme — Grey Mould (Suppression)",
      cropList: ["Basil", "Thyme", "Herbs"],
      weeds: [
        {
          weed: "Grey mould (Botrytis cinerea) — Suppression only",
          pestList: ["Grey Mould", "Botrytis"],
          states: ["All"],
          rate: "40", rateMax: "40", unit: "g/100L",
          stage: "Preventative — protected cropping systems only — suppression only",
          note: "Protected cropping systems only. Suppression only. Apply as a protective treatment in line with climatic conditions that favour infection. Apply no more than 4 applications per season (refer to resistance management guidelines). Reapplication should be conducted on 7–10 day intervals. A retreatment interval of 7 days is recommended. Alternative rate: 400 g/ha."
        }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by aircraft.",
    "DO NOT apply if heavy rains or storms are forecast within 24 hours.",
    "DO NOT irrigate to the point of runoff from the treatment area for at least 24 hours after application.",
    "DO NOT allow bystanders to come into contact with the spray cloud.",
    "DO NOT apply unless the wind speed is between 3 and 20 kilometres per hour at the application site during the time of application.",
    "DO NOT apply if there are hazardous surface temperature inversion conditions present at the application site.",
    "DO NOT apply by a boom sprayer unless spray droplets not smaller than a MEDIUM spray droplet size category.",
    "DO NOT apply by a vertical sprayer unless spray is not directed above the target canopy and the outside of the sprayer is turned off when turning at the end of rows."
  ],

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "Not required when used as directed"
  },

  compatibility: {
    compatible:   ["Various commercial fungicides and insecticides — contact Nufarm for details"],
    incompatible: [],
    notes: ["Contact your local Nufarm representative for a detailed account of compatible tank mixture partners."]
  },

  surfactant:     "Nufarm Activator (50 mL/100 L) — recommended when treating hull rot in almonds. Use a non-ionic surfactant in accordance with label instructions for contact fungicides.",
  sprayerCleanup: ""
};
