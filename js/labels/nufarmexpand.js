// ─────────────────────────────────────────────────────────────────────────────
// NUFARM EXPAND ADJUVANT — Label Data
// Adjuvant | Organosilicone Surfactant
// Source: Nufarm_Expand_Adjuvant.pdf
// APVMA Approval No: 90892/136341
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['nufarmexpand'] = {
  name:             "Nufarm Expand Adjuvant",
  company: "Nufarm",

  category:         "Adjuvants / Surfactants",
  activeIngredient: "500 g/L Trisiloxane ethoxylate",
  group:            "Adjuvant",
  modeOfAction:     "Non-ionic organosilicone surfactant - enhances spreading and foliage deposition",
  formulation:      "Liquid Concentrate",
  color:            "#7c5c1d",
  apvma:            "90892",
  labelPdf:         "Source labels/Nufarm_Nufarm_Expand_Adjuvant_Label.pdf",
  sdsPdf:           "SDS Labels/NUFARM_EXPAND_ADJUVANT.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Adjuvant",
    target: ["Low volume spraying"],
    timing: ["Dry weather or light showers forecast"]
  },

  crops: [
    {
      crop: "Vines (fungicides, insecticides, PGR, foliar nutrients)",
      cropList: ["Vines"],
      weeds: [
        { weed: "Foliage coverage", pestList: ["Foliage Coverage"], states: ["All"], rate: "150", rateMax: "300", unit: "mL/ha", stage: "Application timing", note: "Unlike many other adjuvants, Nufarm Expand is applied at a per hectare rate not at a per 100 L water rate. Adjust rates of Nufarm Expand and/or water volumes to obtain thorough coverage. As Nufarm Expand is affected by many product formulations, always refer to product label compatibility section for more information. Use higher rate for lower water volumes, or when more than two pesticides are included in the tank mix. Increase water volume as canopy density increases. Apply in spray volumes of 20-30% of the dilute spray volume (5x-3x)." },
        { weed: "Hard to wet bunches", pestList: ["Hard to Wet Bunches"], states: ["All"], rate: "400", rateMax: "600", unit: "mL/ha", stage: "Application timing", note: "Unlike many other adjuvants, Nufarm Expand is applied at a per hectare rate not at a per 100 L water rate. Adjust rates of Nufarm Expand and/or water volumes to obtain thorough coverage. Use higher rate for lower water volumes, or when more than two pesticides are included in the tank mix. Apply in spray volumes of 20-30% of the dilute spray volume (5x-3x)." }
      ]
    },
    {
      crop: "Vegetables (fungicides, insecticides, PGR, foliar nutrients)",
      cropList: ["Vegetables"],
      weeds: [
        { weed: "Hard to wet vegetables (e.g. onion)", pestList: ["Hard to Wet Vegetables"], states: ["All"], rate: "150", rateMax: "600", unit: "mL/ha", stage: "Application timing", note: "Unlike many other adjuvants, Nufarm Expand is applied at a per hectare rate not at a per 100 L water rate. Adjust rates of Nufarm Expand and/or water volumes to obtain thorough coverage. As Nufarm Expand is affected by many product formulations, always refer to product label compatibility section for more information. Use higher rate for lower water volumes, or when more than two pesticides are included in the tank mix. DO NOT use in water volumes greater than 250 L/ha for vegetables." },
        { weed: "Easy to wet vegetables (e.g. potatoes)", pestList: ["Easy to Wet Vegetables"], states: ["All"], rate: "100", rateMax: "400", unit: "mL/ha", stage: "Application timing", note: "Unlike many other adjuvants, Nufarm Expand is applied at a per hectare rate not at a per 100 L water rate. Adjust rates of Nufarm Expand and/or water volumes to obtain thorough coverage. DO NOT use in water volumes greater than 250 L/ha for vegetables." }
      ]
    },
    {
      crop: "Horticultural tree crops (mangoes, avocados, apples, citrus, olives)",
      cropList: ["Horticultural Tree Crops","Mangoes","Avocados","Apples","Citrus","Olives"],
      weeds: [
        { weed: "Tree crop coverage", pestList: ["Tree Crop Coverage"], states: ["All"], rate: "150", rateMax: "600", unit: "mL/ha", stage: "Application timing", note: "Unlike many other adjuvants, Nufarm Expand is applied at a per hectare rate not at a per 100 L water rate. Adjust rates of Nufarm Expand and/or water volumes to obtain thorough coverage. The performance of some products may be affected by application in low volume with Nufarm Expand, refer to the Compatibility section of this label. Nufarm Expand may be used with plant growth regulators in Horticultural tree crops provided the PGR is suitable for use in reduced spray volumes. Growers should check the performance of Nufarm Expand with a PGR on a small scale before wider use. Increase water volume as canopy density increases." }
      ]
    }
  ],

  restraints: [
    "DO NOT use with products where label prohibits surfactant use",
    "DO NOT use if heavy rain or overhead irrigation expected",
    "DO NOT use in dilute spraying volumes as excessive run-off may occur"
  ],

  compatibility: {
    compatible:   ["Fungicides", "Insecticides", "Plant growth regulators", "Foliar nutrients"],
    incompatible: ["Spray oils", "Herbicides"],
    notes:        ["Nufarm Expand will break down in highly acidic or alkaline chemicals"]
  },

  withholding: {
    harvest: "Refer to withholding period of the agricultural chemical mixed with this adjuvant",
    grazing: "Refer to withholding period of the agricultural chemical mixed with this adjuvant"
  },

  surfactant:     "This product IS an adjuvant - do NOT mix with other surfactants",
  sprayerCleanup: "Triple-rinse containers before disposal. Do not dispose of undiluted chemicals on-site."
};
