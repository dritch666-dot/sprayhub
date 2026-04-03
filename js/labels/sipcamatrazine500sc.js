// ─────────────────────────────────────────────────────────────────────────────
// SIPCAM ATRAZINE 500 SC HERBICIDE — Label Data
// Herbicide | Suspension Concentrate
// Source: Sipcam_Pacific_Sipcam_Atrazine_500_Sc_Herbicide_Label.pdf
// APVMA Approval No: 50164/140824
// Sipcam Pacific Australia Pty Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['sipcamatrazine500sc'] = {
  name:             "Sipcam Atrazine 500 SC Herbicide",
  company: "Sipcam",

  category:         "Herbicides",
  activeIngredient: "500 g/L Atrazine",
  group:            "Group 5 Herbicide",
  modeOfAction:     "Inhibitor of photosynthesis at photosystem II; pre-emergent and post-emergent control of annual grasses and broadleaf weeds",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#1a3c5e",
  apvma:            "50164",
  labelPdf:         "Source labels/Sipcam_Pacific_Sipcam_Atrazine_500_Sc_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/ATRAZINE_500_SC_HERBICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Herbicide",
    target: ["Annual grasses", "Broadleaf weeds"],
    timing: ["Pre-emergent", "Post-emergent"]
  },

  crops: [
    {
      crop: "Sorghum (Irrigated and Dryland)",
      cropList: ["Sorghum"],
      weeds: [
        { weed: "Amaranthus, annual ground cherry, barnyard grass, blackberry nightshade, various broadleaf weeds", pestList: ["Amaranthus", "Annual Ground Cherry", "Barnyard Grass", "Blackberry Nightshade", "Various Broadleaf Weeds"], states: ["All"], rate: "3600", rateMax: "6000", unit: "mL/ha", stage: "Pre-plant or pre-emergence", note: "Use higher rates where grasses are major problem" }
      ]
    },
    {
      crop: "Broom millet, Forage Sorghum",
      cropList: ["Broom Millet","Forage Sorghum"],
      weeds: [
        { weed: "Refer to crop table weeds", pestList: ["Refer to Crop Table Weeds"], states: ["All"], rate: "3600", rateMax: "6000", unit: "mL/ha", stage: "Pre-emergence", note: "Dryland areas only for pre-plant/pre-emergence treatment" }
      ]
    },
    {
      crop: "Maize and Sweet Corn",
      cropList: ["Maize And Sweet Corn"],
      weeds: [
        { weed: "Broadleaf and grass weeds", pestList: ["Broadleaf and Grass Weeds"], states: ["All"], rate: "4500", rateMax: "6000", unit: "mL/ha", stage: "Pre-emergent", note: "Use higher rates where grass weeds are problem; add surfactant for post-emergence" }
      ]
    },
    {
      crop: "Lucerne (established >1 year)",
      cropList: ["Lucerne"],
      weeds: [
        { weed: "Mintweed", pestList: ["Mintweed"], states: ["All"], rate: "1100", rateMax: "1100", unit: "mL/ha", stage: "Post-emergent", note: "Apply by low volume boom to 5-8 cm high seedlings; 140-170 L/ha spray mixture" }
      ]
    },
    {
      crop: "Sugar Cane",
      cropList: ["Sugar Cane"],
      weeds: [
        { weed: "Giant sensitive plant, various broadleaf and grass weeds", pestList: ["Giant Sensitive Plant", "Various Broadleaf and Grass Weeds"], states: ["All"], rate: "4000", rateMax: "6000", unit: "mL/ha", stage: "Pre- or post-emergent", note: "Apply to moist soil when rain likely within 10 days" }
      ]
    },
    {
      crop: "Canola (Triazine Tolerant only)",
      cropList: ["Canola"],
      weeds: [
        { weed: "Capeweed, charlock, clover, mustards, turnips, annual ryegrass", pestList: ["Capeweed", "Charlock", "Clover", "Mustards", "Turnips", "Annual Ryegrass"], states: ["All"], rate: "2000", rateMax: "4000", unit: "mL/ha", stage: "Pre-emergence or post-sowing", note: "Subject to Integrated Weed Management Strategy for TT-Canola" }
      ]
    },
    {
      crop: "Pinus radiata plantations",
      cropList: ["Pinus Radiata Plantations"],
      weeds: [
        { weed: "Capeweed, clovers, ryegrass, wild oats", pestList: ["Capeweed", "Clovers", "Ryegrass", "Wild Oats"], states: ["NSW", "Vic", "Tas", "SA", "WA"], rate: "9000", rateMax: "16000", unit: "mL/ha", stage: "Pre-plant or post-plant", note: "Pre-planting: apply within 2 weeks before planting; post-planting: within 1 month" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply to waterlogged soil",
    "DO NOT apply if heavy rains forecast within 2 days causing surface runoff",
    "DO NOT irrigate to point of runoff for 2 days after application",
    "Sufficient rainfall/irrigation must occur within 10 days to move product into weed root zone",
    "DO NOT apply in wet season in Northern Irrigation areas of WA",
    "DO NOT handle, mix, apply within 20 m of wells, streams, drainage lines with rapid entry to waterways"
  ],

  compatibility: {
    compatible:   ["Glyphosate 360/450", "Paraquat", "Paraquat/diquat", "Amitrole", "Simazine", "Trifluralin", "2,4-D", "Sodium 2,4-D (sugar cane only)"],
    incompatible: [],
    notes:        ["Test compatibility with other products before tank mixing commercial quantities"]
  },

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "15 weeks canola pre-emergence; 6 weeks canola post-emergence; 28 days other crops"
  },

  surfactant:     "Non-ionic surfactant recommended for post-emergence applications (135 mL/100L); may improve control on winter annual weeds",
  sprayerCleanup: "Partially fill tank with water, maintain agitation while adding product, continue agitation after filling and during spraying"
};
