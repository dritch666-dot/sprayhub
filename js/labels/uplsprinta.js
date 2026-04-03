// ─────────────────────────────────────────────────────────────────────────────
// SPRINTA SUPERWETTER — Label Data
// Organosilicone Surfactant | Spray Adjuvant
// Source: Upl_Sprinta_Fungicide_Label.txt
// APVMA Approval No: 60730/0606
// UPL Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['uplsprinta'] = {
  name:             "Sprinta Superwetter",
  company: "UPL",

  category:         "Adjuvants / Surfactants",
  activeIngredient: "1020 g/L Polyether Modified Polysiloxane",
  group:            "Spray Adjuvant",
  modeOfAction:     "Organosilicone-based wetter, spreader and penetrant for improved pesticide uptake",
  formulation:      "Liquid Concentrate",
  color:            "#3730a3",
  apvma:            "60730/0606",
  labelPdf:         "Source labels/Upl_Sprinta_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/SPRINTA_SUPERWETTER.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Adjuvant",
    target: [],
    timing: ["Pre-spray preparation"]
  },

  crops: [
    {
      crop: "Fungicides — General use",
      cropList: ["Fungicides","General Use"],
      weeds: [
        { weed: "All crops using fungicides", pestList: ["All Crops Using Fungicides"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L spray mixture", stage: "Tank mix preparation", note: "Enhances retention of spray droplets and wetting/spreading. Assists uptake of fungicides." }
      ]
    },
    {
      crop: "Insecticides and Miticides — General use",
      cropList: ["Insecticides And Miticides","General Use"],
      weeds: [
        { weed: "All crops using insecticides or miticides", pestList: ["All Crops Using Insecticides or Miticides"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L spray mixture", stage: "Tank mix preparation", note: "Improves spray droplet retention and spreading on target surfaces." }
      ]
    },
    {
      crop: "Foliar Micro-nutrients — Application",
      cropList: ["Foliar Micro-Nutrients","Application"],
      weeds: [
        { weed: "Crops requiring foliar nutrient application", pestList: ["Crops Requiring Foliar Nutrient Application"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L spray mixture", stage: "Tank mix preparation", note: "Enhances wetting and spreading of nutrient solutions." }
      ]
    },
    {
      crop: "Herbicides (Post-emergent) — General use",
      cropList: ["Herbicides (Post-Emergent)","General Use"],
      weeds: [
        { weed: "Annual and perennial weeds in general post-emergent use", pestList: ["Annual and Perennial Weeds in General Post-Emergent Use"], states: ["All"], rate: "50", rateMax: "100", unit: "mL/100L spray mixture", stage: "Tank mix preparation", note: "Improves herbicide efficacy through enhanced wetting and spreading." }
      ]
    },
    {
      crop: "Herbicides (Low volume) — Concentrated application",
      cropList: ["Herbicides (Low Volume)","Concentrated Application"],
      weeds: [
        { weed: "Weeds in low volume spray applications", pestList: ["Weeds in Low Volume Spray Applications"], states: ["All"], rate: "100", rateMax: "200", unit: "mL/100L spray mixture", stage: "Tank mix preparation", note: "Higher rates for concentrated spray applications." }
      ]
    },
    {
      crop: "Glyphosate and other weak acid herbicides — Hard water situations",
      cropList: ["Glyphosate And Other Weak Acid Herbicides","Hard Water Situations"],
      weeds: [
        { weed: "Gorse and bracken fern", pestList: ["Gorse and Bracken Fern"], states: ["All"], rate: "100", rateMax: "100", unit: "mL/100L handgun application", stage: "Tank mix preparation", note: "Use 100 mL/100L for handgun application." },
        { weed: "Brushy and woody weeds", pestList: ["Brushy and Woody Weeds"], states: ["All"], rate: "200", rateMax: "200", unit: "mL/100L boom spray", stage: "Tank mix preparation", note: "Use 200 mL/100L for boom spray application on challenging weeds." }
      ]
    },
    {
      crop: "Turf — Dew retardant for sports fields",
      cropList: ["Turf","Dew Retardant For Sports Fields"],
      weeds: [
        { weed: "Dew formation control on athletic fields", pestList: ["Dew Formation Control on Athletic Fields"], states: ["All"], rate: "200", rateMax: "200", unit: "mL/100L spray mixture", stage: "Application to turf surfaces", note: "Effective on athletic fields, tees and greens. Prevents dew formation and improves playability." }
      ]
    },
    {
      crop: "Soil Application — Soil wetting agent",
      cropList: ["Soil Application","Soil Wetting Agent"],
      weeds: [
        { weed: "Hydrophobic soil conditions", pestList: ["Hydrophobic Soil Conditions"], states: ["All"], rate: "1400", rateMax: "1400", unit: "mL/ha in 500L/ha water", stage: "Soil injection or boom spray prior to irrigation", note: "Apply through irrigation injection or boom spray. For hydrophobic areas: up to 100 mL/100m². Re-apply every 14 days as needed." }
      ]
    }
  ],

  restraints: [
    "DO NOT use if pesticide manufacturer prohibits surfactants",
    "Always follow pesticide label directions where organosilicone recommended"
  ],

  compatibility: {
    compatible:   ["Most agricultural pesticides"],
    incompatible: [],
    notes:        ["Highly effective with most agricultural chemicals unless otherwise stated on pesticide label. Pre-test mixtures recommended. Follow all pesticide label precautions."]
  },

  withholding: {
    harvest: "Not applicable (adjuvant only)",
    grazing: "Not applicable (adjuvant only)"
  },

  surfactant:     "Sprinta is an organosilicone-based surfactant — provides wetting, spreading and penetrant properties",
  sprayerCleanup: "Triple rinse containers before disposal. Mix pesticide product with water when tank is about 30% full. When tank nearly full, add Sprinta. Complete tank filling."
};
