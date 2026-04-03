// ─────────────────────────────────────────────────────────────────────────────
// ADAMA UPTOWN INSECTICIDE — Label Data
// Insecticide | Suspension Concentrate (SC)
// Source: Adama_Uptown_Insecticide_Label.pdf
// APVMA Approval No: 85223/133949
// Adama Australia
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['adamauptown'] = {
  name:             "Adama Uptown Insecticide",
  company: "Adama",

  category:         "Insecticides",
  activeIngredient: "440 g/L Buprofezin",
  group:            "Group 16 Insecticide",
  modeOfAction:     "Growth regulator for crawlers and nymphs",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#7c3aed",
  apvma:            "85223",
  labelPdf:         "Source labels/Adama_Uptown_Insecticide_Label.pdf",
  sdsPdf:         "SDS Labels/Uptown SDS - Jul 2023.pdf",
  signalHeading:    "CAUTION",
  classification: {
    type: "Insecticide",
    target: ["Red scale", "White louse scale", "Longtailed mealybug", "Citrus mealybug", "Citrophilous mealybug", "Jassids", "Leafhoppers", "Mealybugs", "Scale insects", "Grapevine scale", "Mango scale"],
    timing: ["Crawler emergence", "Spring-Summer", "Juvenile stages"]
  },

  crops: [
    {
      crop: "Citrus (Oranges, Lemons, Mandarins, Grapefruit, Limes)",
      cropList: ["Oranges", "Lemons", "Mandarins", "Grapefruit", "Limes"],
      weeds: [
        { weed: "Red scale", pestList: ["Red scale"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Heavy crawler emergence", note: "Apply in late Summer when heavy crawler emergence occurs; second application may be required 14-28 days later" },
        { weed: "White louse scale", pestList: ["White louse scale"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Crawler emergence", note: "Use high rate with severe infestations; best in IPM programs with Aphytis parasites" },
        { weed: "Longtailed mealybug", pestList: ["Longtailed mealybug"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Crawler emergence", note: "Apply if thresholds exceeded in Spring-Summer; repeat after 21-28 days if necessary" },
        { weed: "Citrus mealybug", pestList: ["Citrus mealybug"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Spring-Summer", note: "Use high rate for heavy infestations or when IPM has not effectively managed populations" },
        { weed: "Citrophilous mealybug", pestList: ["Citrophilous mealybug"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Spring-Summer", note: "Apply if thresholds exceeded" },
        { weed: "Jassids (Leafhoppers)", pestList: ["Jassids", "Leafhoppers"], states: ["All"], rate: "30", rateMax: "30", unit: "mL/100L", stage: "Juvenile stages", note: "Apply when thresholds exceeded in January and February if required; apply when juvenile stages predominate" }
      ]
    },
    {
      crop: "Custard apples",
      cropList: ["Custard apples"],
      weeds: [
        { weed: "Mealybugs", pestList: ["Mealybugs"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Crawler emergence", note: "Apply maximum 2 sprays per season, 21 days apart; high volume cover spray to run-off" },
        { weed: "Scale insects", pestList: ["Scale insects"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Infestation", note: "Use air blast or high volume hydraulic nozzles" }
      ]
    },
    {
      crop: "Grapes (Table and Wine)",
      cropList: ["Table grapes", "Wine grapes"],
      weeds: [
        { weed: "Longtailed mealybug", pestList: ["Longtailed mealybug"], states: ["All"], rate: "60", rateMax: "60", unit: "mL/100L", stage: "Budburst", note: "Monitor crops from budburst; apply when crop monitoring indicates first onset of crawler release; minimum spray interval 14 days between applications" },
        { weed: "Tuber mealybug", pestList: ["Tuber mealybug"], states: ["All"], rate: "60", rateMax: "60", unit: "mL/100L", stage: "Budburst", note: "Use as part of season-long monitoring and spray program; use higher rate when pest pressure is moderate to high" },
        { weed: "Grapevine scale", pestList: ["Grapevine scale"], states: ["All"], rate: "60", rateMax: "60", unit: "mL/100L", stage: "Monitoring period", note: "Suppression only; for optimum control, second insecticide application required no less than 14 days after initial application" }
      ]
    },
    {
      crop: "Mangoes",
      cropList: ["Mangoes"],
      weeds: [
        { weed: "Mango scale", pestList: ["Mango scale"], states: ["All"], rate: "60", rateMax: "60", unit: "mL/100L", stage: "Crawler emergence", note: "Monitor scales and apply when majority of crawlers have emerged (tree flushing after harvest, spring when fruit 1.5-2.0 cm); repeat application within 14-28 days may be necessary; DO NOT use mineral oils" }
      ]
    },
    {
      crop: "Passionfruit",
      cropList: ["Passionfruit"],
      weeds: [
        { weed: "Mealybugs", pestList: ["Mealybugs"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Infestation", note: "Apply maximum 2 sprays per season, 21 days apart when significant infestations develop; high volume cover spray to run-off" },
        { weed: "Scale insects", pestList: ["Scale insects"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Infestation", note: "Air blast or high volume hydraulic nozzles" }
      ]
    },
    {
      crop: "Pears",
      cropList: ["Pears"],
      weeds: [
        { weed: "Longtailed mealybug", pestList: ["Longtailed mealybug"], states: ["All"], rate: "60", rateMax: "60", unit: "mL/100L", stage: "Swollen bud to end of flowering", note: "Apply twice, 10-14 days apart between swollen bud and end of flowering; sufficient volume to soak bark with thorough coverage to run-off; use high rate with heavy infestations" }
      ]
    },
    {
      crop: "Persimmons",
      cropList: ["Persimmons"],
      weeds: [
        { weed: "Mealybugs", pestList: ["Mealybugs"], states: ["All"], rate: "60", rateMax: "60", unit: "mL/100L", stage: "Crawler emergence", note: "Apply maximum 2 sprays per season, 14 days apart; apply when first batch of crawlers occur after Winter" },
        { weed: "Scale insects", pestList: ["Scale insects"], states: ["All"], rate: "60", rateMax: "60", unit: "mL/100L", stage: "Crawler emergence", note: "Apply after Winter crawler emergence; maximum 2 sprays, 14 days apart" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by air",
    "DO NOT apply more than twice per year in any crop",
    "DO NOT apply if heavy rains or storms forecast within 3 days",
    "DO NOT irrigate to point of runoff for at least 3 days after application",
    "Wine grapes: DO NOT apply later than 80% capfall",
    "DO NOT allow bystanders to contact spray cloud",
    "DO NOT apply unless wind speed is 3-20 km/h",
    "DO NOT apply during surface temperature inversion",
    "DO NOT use mineral oils with mango applications",
    "DO NOT target applications on well-established populations with mature adults"
  ],

  compatibility: {
    compatible:   ["Dithane Rainshield NeoTec Fungicide", "Other agricultural chemicals commonly used on same crops"],
    incompatible: ["Sacoa BioPest Oil", "Highly alkaline or acidic products"],
    notes:        ["Contact supplier or Adama for compatibility information"]
  },

  withholding: {
    harvest: "Passionfruit: 1 day; Custard apple: 2 weeks; Citrus/Mango/Persimmon: 4 weeks; Pears/Table grapes: 8 weeks; Wine grapes: Not required when used as directed",
    grazing: "DO NOT allow stock to graze grasses or weeds under treated trees"
  },

  surfactant:     "Not specified; use non-ionic surfactant if needed",
  sprayerCleanup: "Empty tank completely and drain. Wash inside tank using pressure hose. Clean all filters in tank, pump, lines and nozzles. Quarter fill tank with clean water and circulate through all systems. Drain and repeat rinsing twice. Discharge to designated disposal area or unused land away from plants and water courses"
};
