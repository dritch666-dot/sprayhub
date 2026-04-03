// ─────────────────────────────────────────────────────────────────────────────
// CORTEVA LONTREL ADVANCED HERBICIDE — Label Data
// Herbicide | Group I | Liquid
// Source: Corteva_Lontrel_Advanced_Herbicide_Label.pdf
// APVMA Approval No: Not listed in extracted text
// Corteva Agriscience
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['cortevalontreladvanced'] = {
  name:             "Corteva Lontrel Advanced Herbicide",
  company: "Corteva",

  category:         "Herbicides",
  activeIngredient: "600 g/L Clopyralid (present as dimethylammonium salt)",
  group:            "Group I Herbicide",
  modeOfAction:     "Synthetic auxin - broadleaf weed control",
  formulation:      "Liquid",
  color:            "#059669",
  apvma:            "",
  labelPdf:         "Source labels/Corteva_Lontrel_Advanced_Herbicide_Label.pdf",
  sdsPdf:         "SDS Labels/LONTREL_ADVANCED_HERBICIDE.pdf",
  signalHeading:    "CAUTION",
  classification: {
    type: "Herbicide",
    target: ["Broadleaf weeds"],
    timing: ["Pre-sowing", "Post-emergence", "Active growth stage"]
  },

  crops: [
    {
      crop: "Winter Cereals (Wheat, Barley, Oats, Triticale)",
      cropList: ["Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        { weed: "Capeweed", pestList: ["Capeweed"], states: ["All"], rate: "75", rateMax: "300", unit: "mL/ha", stage: "Pre-emergence to early post-emergence", note: "Pre-sowing: use 75 mL/ha + knockdown herbicide; post-sowing pre-emergence: 150-300 mL/ha; 4-5 leaf: 150 mL/ha for up to 10 cm diameter" },
        { weed: "Volunteer chickpeas", pestList: ["Volunteer chickpeas"], states: ["All"], rate: "75", rateMax: "125", unit: "mL/ha", stage: "Up to 6 leaf", note: "Faba beans and lupins will only be suppressed" },
        { weed: "Volunteer faba beans", pestList: ["Volunteer faba beans"], states: ["All"], rate: "75", rateMax: "75", unit: "mL/ha", stage: "Up to 4 leaf", note: "Only suppressed control" },
        { weed: "Volunteer lupins", pestList: ["Volunteer lupins"], states: ["All"], rate: "75", rateMax: "75", unit: "mL/ha", stage: "Up to 4 leaf", note: "Only suppressed control" },
        { weed: "Soldier thistle", pestList: ["Soldier thistle"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/ha", stage: "4-8 leaf", note: "Up to 10 cm diameter" },
        { weed: "Sub clover", pestList: ["Sub clover"], states: ["All"], rate: "150", rateMax: "300", unit: "mL/ha", stage: "Post-emergence", note: "300 mL/ha required for good control" },
        { weed: "Vetch", pestList: ["Vetch"], states: ["All"], rate: "50", rateMax: "75", unit: "mL/ha", stage: "Runners to 10 cm", note: "Maximum 16 leaf; also available as 40 mL/ha + 600 mL/ha LVE MCPA for 4-5 leaf through booting" },
        { weed: "Flaxleaf fleabane", pestList: ["Flaxleaf fleabane"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/ha", stage: "5 cm rosettes", note: "5 leaf through to booting" }
      ]
    },
    {
      crop: "Canola",
      cropList: ["Canola"],
      weeds: [
        { weed: "Capeweed", pestList: ["Capeweed"], states: ["All"], rate: "75", rateMax: "150", unit: "mL/ha", stage: "Pre-emergence to 2-8 leaf", note: "Pre-sowing: 75 mL/ha + knockdown; 2-8 leaf: 150 mL/ha for young, actively growing weeds" },
        { weed: "Cotula", pestList: ["Cotula"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/ha", stage: "2-8 leaf", note: "Up to 10 cm diameter" },
        { weed: "Saffron thistle", pestList: ["Saffron thistle"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/ha", stage: "4-8 leaf", note: "2-8 leaf stage" },
        { weed: "Skeleton weed", pestList: ["Skeleton weed"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/ha", stage: "2-8 leaf", note: "Only controlled until harvest" },
        { weed: "Soldier thistle", pestList: ["Soldier thistle"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/ha", stage: "2-8 leaf", note: "Up to 10 cm diameter" },
        { weed: "St Barnaby's thistle", pestList: ["St Barnaby's thistle"], states: ["All"], rate: "75", rateMax: "150", unit: "mL/ha", stage: "4-8 leaf", note: "5-10 cm diameter; rate depends on density and growth stage" },
        { weed: "Volunteer field peas", pestList: ["Volunteer field peas"], states: ["All"], rate: "75", rateMax: "75", unit: "mL/ha", stage: "Maximum 10 cm", note: "6 nodes maximum" },
        { weed: "Volunteer medics", pestList: ["Volunteer medics"], states: ["All"], rate: "75", rateMax: "75", unit: "mL/ha", stage: "Up to 8 leaf", note: "Seedling stage" },
        { weed: "Volunteer sub-clover", pestList: ["Volunteer sub-clover"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/ha", stage: "Pre-emergence", note: "Good soil moisture essential for best control" },
        { weed: "Volunteer vetch", pestList: ["Volunteer vetch"], states: ["All"], rate: "50", rateMax: "50", unit: "mL/ha", stage: "Runners to 10 cm", note: "Maximum 16 leaf" }
      ]
    },
    {
      crop: "Pastures and Fallow Land",
      cropList: ["Pastures", "Fallow land"],
      weeds: [
        { weed: "Various broadleaf weeds", pestList: ["Broadleaf weeds"], states: ["All"], rate: "75", rateMax: "250", unit: "mL/ha", stage: "Active growth", note: "Rate selection depends on weed type, density, and growth stage" }
      ]
    },
    {
      crop: "Forests and Industrial Situations",
      cropList: ["Forests", "Industrial situations"],
      weeds: [
        { weed: "Various broadleaf weeds", pestList: ["Broadleaf weeds"], states: ["All"], rate: "75", rateMax: "250", unit: "mL/ha", stage: "Active growth", note: "As specified in directions for use" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply to weeds stressed from heat, cold, moisture stress (waterlogging or drought) or previous herbicide treatment",
    "DO NOT apply later than 8 leaf stage of canola",
    "DO NOT compost material from treated plants or crops before reading the Protection of Crops section",
    "DO NOT spray if rain likely within 3 hours",
    "DO NOT apply more than one application per crop",
    "DO NOT apply Lontrel Advanced with spray droplets smaller than COARSE spray droplet size",
    "DO NOT apply when wind speed less than 3 or more than 20 km/h",
    "DO NOT apply during surface temperature inversion conditions"
  ],

  compatibility: {
    compatible:   ["Tank mixtures with various herbicides including Eclipse, MCPA, Chlorosulfuron, Ally, Canvas, Statesman", "Surfactants such as BS1000"],
    incompatible: [],
    notes:        ["Best results when weeds actively growing at treatment; select rate appropriate to weed size"]
  },

  withholding: {
    harvest: "Not specified - herbicide only",
    grazing: "Not specified in label"
  },

  sprayerCleanup: "Standard spray equipment cleanup procedures",
  recordingRequirement: "ESSENTIAL - Users MUST make accurate written record of each spray application within 24 hours following application and KEEP for minimum 2 years, including: date, location, product name, amount used per hectare, crop/situation and weed, wind speed/direction, air temperature/humidity, nozzle details, applicator name and address"
};
