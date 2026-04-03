// ─────────────────────────────────────────────────────────────────────────────
// VIVANDO® FUNGICIDE — Label Data
// Suspension Concentrate (SC) | Group U8 Fungicide
// Source: Basf_Vivando_Fungicide_Label.pdf
// APVMA Approval No: 63487/53939
// BASF Australia Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['basfvivando'] = {
  name:             "BASF Vivando Fungicide",
  activeIngredient: "500 g/L Metrafenone",
  group:            "Group U8 Fungicide",
  modeOfAction:     "Benzophenone fungicide — unspecified group; for the control of powdery mildew in cucurbits and grapes",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#0e7490",
  apvma:            "63487/53939",
  company: "BASF",
  labelPdf:         "Source labels/Basf_Vivando_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/Vivando_Fungicide.pdf",
  signalHeading:    "Caution",
  category:         "Fungicides",
  classification: {
    type: "Fungicide",
    target: ["Powdery Mildew"],
    timing: ["Preventative", "Before disease is established"]
  },

  crops: [
    {
      crop: "Cucurbits — Powdery mildew",
      cropList: ["Cucurbits"],
      weeds: [
        { weed: "Powdery mildew (Podosphaera xanthii)", pestList: ["Powdery Mildew"], states: ["All"], rate: "150", rateMax: "300", unit: "mL/ha", whp: "7 days", stage: "Apply two consecutive VIVANDO spray applications 7 to 10 days apart commencing before powdery mildew becomes established. VIVANDO should only be applied as a protectant spray. Applications beginning before disease is evident on the undersides of the older leaves are recommended. A second block of two VIVANDO sprays may be applied if required providing that it is preceded and followed by at least two applications of fungicides from a different fungicide Group (e.g. Colliss Fungicide) for resistance management. DO NOT apply more than four applications of VIVANDO per crop and DO NOT exceed more than one third of the total powdery spray program with VIVANDO. Apply by boom equipment using spray volumes between 250 to 500 L/ha. Du-Wett Low Volume Application Spreader recommended especially at reduced water volumes." }
      ]
    },
    {
      crop: "Grapevines — Powdery mildew",
      cropList: ["Grapevines", "Grapes"],
      weeds: [
        { weed: "Powdery mildew (Erysiphe necator)", pestList: ["Powdery Mildew"], states: ["All"], rate: "20", unit: "mL/100L", whp: "5 weeks", stage: "Dilute spray: 20 mL/100L. Concentrate spray: refer to application section. Apply as part of a protectant spray program commencing when shoots are 10 cm in length. DO NOT apply more than two consecutive applications of VIVANDO 7 to 10 days apart before changing to an alternative fungicide group for powdery mildew control (e.g. Cabrio Fungicide). DO NOT apply more than four applications of VIVANDO per crop. Apply by dilute or concentrate spraying equipment. Apply the same amount of total product to the target crop whether applying by dilute or concentrate spraying methods. The addition of Du Wett will assist spray coverage on leaves and bunches especially if spray volumes are less than dilute." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply with aircraft",
    "DO NOT apply with spray droplets smaller than a MEDIUM spray droplet size category according to nozzle manufacturer specifications that refer to the ASAE S572 Standard or the BCPC Guideline",
    "DO NOT apply when wind speed is less than 3 or more than 20 km/h as measured at the application site",
    "DO NOT apply in vineyards when wind speed is less than 3 or more than 20 km/h as measured 15 metres outside of the vineyard on the upwind side",
    "DO NOT direct the spray above vines during airblast applications",
    "TURN OFF outward pointing nozzles at row ends and outer rows during airblast applications",
    "DO NOT apply during surface temperature inversion conditions at the application site",
    "Users MUST make an accurate written record of each spray application within 24 hours and KEEP for a minimum of 2 years"
  ],

  compatibility: {
    compatible:   ["Du-Wett Low Volume Application Spreader"],
    incompatible: [],
    notes:        ["VIVANDO should only be applied as a protectant spray", "Use Du-Wett to assist spray coverage on leaves and bunches especially if spray volumes are less than dilute", "For compatibility information contact your local industry representative"]
  },

  withholding: {
    harvest: "Cucurbits: DO NOT HARVEST FOR 7 DAYS AFTER APPLICATION. Grapes: DO NOT HARVEST FOR 5 WEEKS AFTER APPLICATION.",
    grazing: "Mandatory No Spray Zones for livestock, pasture or any land producing feed for livestock downwind from the application area are not required when used as directed"
  },

  reEntry:      "DO NOT allow entry into treated areas until the spray has dried. When prior entry is necessary, wear cotton overalls buttoned to the neck and wrist and chemical resistant gloves.",
  exportNote:     "MRLs or import tolerances do not exist in all markets for fruit treated with VIVANDO. Check with industry representative or AWRI before use on export crops.",
  surfactant:     "Du-Wett Low Volume Application Spreader recommended, especially at reduced water volumes",
  sprayerCleanup: "Triple or preferably pressure rinse containers before disposal. Add rinsings to spray tank."
};
