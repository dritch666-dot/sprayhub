// ─────────────────────────────────────────────────────────────────────────────
// GRAVITATE 707 SPRAY ADJUVANT — Label Data
// Oil-based Adjuvant | Penetrant and Surfactant
// Source: Victorian_Chemical_Company_Proprietary_Gravitate_707_Spray_Adjuvant_Label.pdf
// APVMA Approval No: 88317/129205
// Victorian Chemical Company Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['gravitateadjuvant707'] = {
  name:             "Gravitate 707 Spray Adjuvant",
  company: "Brandt",

  category:         "Adjuvants / Surfactants",
  activeIngredient: "340 g/L Vegetable Oil Ester, 225 g/L Soyal Phospholipids, 142 g/L Citric Acid",
  group:            "Spray Adjuvant",
  modeOfAction:     "Acidifying and penetrating adjuvant with droplet size management properties",
  formulation:      "Oil-based Liquid Concentrate",
  color:            "#92400e",
  apvma:            "88317/129205",
  labelPdf:         "Source labels/Victorian_Chemical_Company_Proprietary_Gravitate_707_Spray_Adjuvant_Label.pdf",
  sdsPdf:           "SDS Labels/GRAVITATE_707_SPRAY_ADJUVANT.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Adjuvant",
    target: [],
    timing: ["Pre-spray preparation"]
  },

  crops: [
    {
      crop: "Herbicides (non-crop) — General weed control",
      cropList: ["Herbicides (Non-Crop)","General Weed Control"],
      weeds: [
        { weed: "General weeds in non-crop situations", pestList: ["General Weeds in Non-Crop Situations"], states: ["All"], rate: "250", rateMax: "500", unit: "mL/100L spray mixture", stage: "Tank mix preparation", note: "Use high rate on stressed or difficult-to-control weeds or when using hard water. Improves spreading and penetration." }
      ]
    },
    {
      crop: "Glyphosate, 2,4-D, MCPA — Hard water situations",
      cropList: ["Glyphosate","2,4-D","MCPA"],
      weeds: [
        { weed: "All weeds controlled by these herbicides", pestList: ["All Weeds Controlled By These Herbicides"], states: ["All"], rate: "250", rateMax: "500", unit: "mL/100L spray mixture", stage: "Tank mix preparation", note: "Reduces pH to 4-5 and complexes hard water ions. Higher rates recommended for hard water." }
      ]
    },
    {
      crop: "XtendFlex Cotton — Glyphosate in-crop / Over-The-Top application",
      cropList: ["XtendFlex Cotton","Glyphosate In-Crop / Over-The-Top Application"],
      weeds: [
        { weed: "Glyphosate-resistant weeds in XtendFlex cotton", pestList: ["Glyphosate-Resistant Weeds in XtendFlex Cotton"], states: ["All"], rate: "500", rateMax: "500", unit: "mL/100L spray mixture", stage: "In-crop or over-the-top application", note: "For Round-up Ready PL Herbicide with Plantshield Technology application in XtendFlex varieties." }
      ]
    },
    {
      crop: "All Crops — Spray quality management",
      cropList: ["All Crops","Spray Quality Management"],
      weeds: [
        { weed: "Fine droplet management from hydraulic nozzles", pestList: ["Fine Droplet Management from Hydraulic Nozzles"], states: ["All"], rate: "250", rateMax: "500", unit: "mL/100L spray mixture", stage: "Tank mix preparation for air and ground applications", note: "Reduces fine droplets (<150 micron) produced by flat fan nozzles. Contingent upon good spraying practice and appropriate nozzle choice. Does not eliminate drift." }
      ]
    }
  ],

  restraints: [
    "DO NOT use with copper products",
    "Consult spray drift buffer zones on tank mix partner labels",
    "Do not use in situations conducive to drift"
  ],

  compatibility: {
    compatible:   ["Glyphosate", "2,4-D", "MCPA", "Most herbicides"],
    incompatible: ["Copper products"],
    notes:        ["Half fill spray tank with water and commence agitation before adding Gravitate 707. Add herbicide after Gravitate 707 is mixed. Maintain agitation throughout spraying."]
  },

  withholding: {
    harvest: "Not applicable (adjuvant only)",
    grazing: "Consult tank mix partner label"
  },

  surfactant:     "Gravitate 707 is a multipurpose adjuvant containing natural surfactants and penetrants derived from vegetable oils, combined with citric acid",
  sprayerCleanup: "Triple-rinse containers before disposal. Add rinsings to spray tank. Do not dispose of undiluted chemicals on site."
};
