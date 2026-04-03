// ─────────────────────────────────────────────────────────────────────────────
// FUZILIER HERBICIDE — Label Data
// Herbicide | Ester
// Source: FMC_Fuzilier_Herbicide_Label.pdf
// APVMA Approval No: 61355/61955
// FMC Corporation
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['fuzilierherbicide'] = {
  name:             "Fuzilier Selective Herbicide",

  category:         "Herbicides",
  activeIngredient: "212 g/L Fluazifop-P present as the Butyl Ester",
  group:            "Group A Herbicide",
  modeOfAction:     "Inhibitor of acetyl CoA carboxylase - fops (aryloxyphenoxypropionate)",
  formulation:      "Ester in Hydrocarbon liquid",
  color:            "#92400e",
  company: "Syngenta",
  apvma:            "61355",
  labelPdf:         "Source labels/FMC_Fuzilier_Herbicide_Label.pdf",
  sdsPdf:         "SDS Labels/FUZILIER_sds.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Herbicide",
    target: ["Annual grasses", "Perennial grasses"],
    timing: ["When weeds actively growing, before late tillering"]
  },

  crops: [
    {
      crop: "Pastures",
      cropList: ["Pastures", "Barrel Clover", "Medic", "Subterranean Clover", "Vetches"],
      weeds: [
        { weed: "Annual Phalaris", pestList: ["Annual Phalaris"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "5 leaf to early tillering", note: "Dense weed populations: use 500mL. DO NOT apply once jointing stage reached. 21 days withholding (G), no withholding (H)" },
        { weed: "Annual Ryegrass", pestList: ["Annual Ryegrass"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "5 leaf to early tillering", note: "Apply in not less than 50 L/ha" },
        { weed: "Barley Grass", pestList: ["Barley Grass"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "5 leaf to early tillering", note: "" },
        { weed: "Brome Grasses", pestList: ["Brome Grasses"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "5 leaf to early tillering", note: "" },
        { weed: "Wild Oats", pestList: ["Wild Oats"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "5 leaf to early tillering", note: "" }
      ]
    },
    {
      crop: "Vegetables",
      cropList: ["Broad Beans", "Broccoli", "Brussels Sprouts", "Cabbage", "Capsicums", "Carrots", "Cauliflower", "Celery", "Green Beans", "Lettuce", "Tomatoes"],
      weeds: [
        { weed: "Barnyard Grass", pestList: ["Barnyard Grass"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "3-5 leaf before tillering", note: "Use 200mL Agral or 120mL BS1000 per 100L. Apply not less than 100 L/ha. 6 days withholding for most crops" },
        { weed: "Crowsfoot Grass", pestList: ["Crowsfoot Grass"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "3-5 leaf before tillering", note: "" },
        { weed: "Liverseed Grass", pestList: ["Liverseed Grass"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "3-5 leaf before tillering", note: "" },
        { weed: "Stinkgrass", pestList: ["Stinkgrass"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/ha", stage: "3-5 leaf before tillering", note: "" }
      ]
    },
    {
      crop: "Canola and Linseed",
      cropList: ["Canola", "Linseed"],
      weeds: [
        { weed: "Annual Phalaris", pestList: ["Annual Phalaris"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "2-5 leaf before tillering", note: "Dense weed: 500mL. DO NOT apply beyond 6 leaf stage. 17 weeks (H), 21 days (G)" },
        { weed: "Annual Ryegrass", pestList: ["Annual Ryegrass"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "2-5 leaf before tillering", note: "" },
        { weed: "Barley Grass", pestList: ["Barley Grass"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "2-5 leaf before tillering", note: "" },
        { weed: "Volunteer Cereals", pestList: ["Volunteer Cereals"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "2-5 leaf before tillering", note: "DO NOT apply once jointing reached" },
        { weed: "Wild Oats", pestList: ["Wild Oats"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "2-5 leaf before tillering", note: "" }
      ]
    },
    {
      crop: "Chickpeas and Field Peas",
      cropList: ["Chickpeas", "Field Peas"],
      weeds: [
        { weed: "Brome Grasses", pestList: ["Brome Grasses"], states: ["All"], rate: "300", rateMax: "300", unit: "mL/ha", stage: "2-5 leaf before tillering", note: "7 weeks withholding. Apply not less than 50 L/ha" }
      ]
    },
    {
      crop: "Cucurbits",
      cropList: ["Cucumber", "Gherkin", "Honeydew Melon", "Pumpkin", "Rockmelon", "Watermelon", "Squash", "Zucchini"],
      weeds: [
        { weed: "Annual and Wimmera Ryegrass", pestList: ["Annual Ryegrass", "Wimmera Ryegrass"], states: ["All"], rate: "500", rateMax: "1000", unit: "mL/ha", stage: "3-5 leaf before tillering", note: "DO NOT apply before 5 true leaf stage of crop. Use 200mL Agral or 120mL BS1000 per 100L. Max 200 L/ha water" },
        { weed: "Barley Grass", pestList: ["Barley Grass"], states: ["All"], rate: "500", rateMax: "1000", unit: "mL/ha", stage: "3-5 leaf before tillering", note: "" },
        { weed: "Barnyard Grass", pestList: ["Barnyard Grass"], states: ["All"], rate: "500", rateMax: "1000", unit: "mL/ha", stage: "3-5 leaf before tillering", note: "" },
        { weed: "Brome Grasses", pestList: ["Brome Grasses"], states: ["All"], rate: "500", rateMax: "1000", unit: "mL/ha", stage: "3-5 leaf before tillering", note: "5 weeks (H), no withholding (G)" },
        { weed: "Johnson Grass and Paspalum seedlings", pestList: ["Johnson Grass", "Paspalum"], states: ["All"], rate: "1000", rateMax: "1000", unit: "mL/ha", stage: "5 leaf to early tillering", note: "Only controls seedlings less than 2 months old establishing from seed. 21 days" }
      ]
    },
    {
      crop: "Faba Beans",
      cropList: ["Faba Beans"],
      weeds: [
        { weed: "Annual Phalaris", pestList: ["Annual Phalaris"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "2-5 leaf before tillering", note: "Dense weed: use 500mL. DO NOT apply once jointing reached. 5 weeks (H & G)" },
        { weed: "Annual Ryegrass", pestList: ["Annual Ryegrass"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "2-5 leaf before tillering", note: "" },
        { weed: "Barley Grass", pestList: ["Barley Grass"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "2-5 leaf before tillering", note: "" },
        { weed: "Volunteer Cereals", pestList: ["Volunteer Cereals"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "2-5 leaf before tillering", note: "" },
        { weed: "Wild Oats", pestList: ["Wild Oats"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "2-5 leaf before tillering", note: "" }
      ]
    }
  ],

  restraints: [
    "RESISTANT WEEDS WARNING: Group A herbicide - continuously use may select resistant biotypes",
    "Some naturally occurring resistant weed biotypes may exist",
    "DO NOT treat weeds not actively growing or under stress",
    "DO NOT allow annual grass weeds to reach late tillering before application",
    "DO NOT apply at flowering stage of weeds",
    "DO NOT apply under high temperature, low humidity, or drought stress conditions",
    "DO NOT plant cereal crops for 12 weeks after application",
    "DO NOT spray if any stress conditions evident just prior to application",
    "DO NOT apply under weather conditions causing spray drift onto susceptible plants",
    "Moderately hazardous to fish - DO NOT contaminate waterways"
  ],

  compatibility: "Compatible with Agral, BS1000, DC Trate, Ulvapron, sethoxydim, imidan, lambda-cyhalothrin and pirimicarb. DO NOT tank mix without prior FMC reference",

  withholding: {
    harvest: "Variable by crop: Pastures 21 days (G), no withholding (H); Vegetables 4-11 days; Canola 17 weeks (H), 21 days (G); Chickpeas 7 weeks; Cucurbits 5 weeks (H), no withholding (G); Faba Beans 5 weeks (H & G)",
    grazing: "Allow 7 days before introducing stock to ensure maximum weed control"
  },

  surfactant:     "Adjuvants ESSENTIAL: Agral at 350mL/100L OR BS1000 at 200mL/100L OR DC Trate at 2L/100L OR BS1000 200mL plus Ulvapron 2L/100L",
  sprayerCleanup: "Thoroughly clean equipment and rinse several times prior to re-use"
};
