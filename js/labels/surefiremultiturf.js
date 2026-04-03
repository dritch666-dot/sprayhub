// ─────────────────────────────────────────────────────────────────────────────
// SUREFIRE MULTI TURF HERBICIDE — Label Data
// MCPA / Clopyralid / Diflufenican Herbicide
// Source: Surefire_Multi-Turf_label.pdf
// APVMA Approval No: 94199/144389
// PCT Holdings Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['surefiremultiturf'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Surefire Multi Turf Herbicide",

  category:         "Herbicides",
  company:          "Surefire",
  activeIngredient: "300 g/L MCPA (as potassium salt) + 20 g/L Clopyralid (as potassium salt) + 15 g/L Diflufenican",
  group:            "Group 4 + Group 12 Herbicide",
  modeOfAction:     "Disruptor of plant cell growth (phenoxy / pyridine, Group 4) and inhibitor of carotenoid biosynthesis (nicotinanilide, Group 12).",
  formulation:      "Suspension Concentrate",
  color:            "#155e75",
  apvma:            "94199/144389",
  labelPdf:         "Source labels/Surefire_Multi-Turf_label.pdf",
  sdsPdf:           "SDS Labels/Surefire-Multi-Turf_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Broadleaf Weeds"],
    timing: ["Post-emergence", "Apply to actively growing weeds"]
  },

  // ── Restraints ────────────────────────────────────────────────
  restraints: [
    "DO NOT apply if weeds or turf are under stress or when frosts are imminent.",
    "DO NOT use if rain is expected within 4 hours.",
    "DO NOT use clippings as mulch around other plants or for composting.",
    "DO NOT use on bent grass or winter grass golf and bowling greens.",
    "DO NOT allow bystanders to come into contact with the spray cloud.",
    "DO NOT apply unless the wind speed is between 3 and 20 kilometres per hour at the application site during the time of application.",
    "DO NOT apply if there are hazardous surface temperature inversion conditions present at the application site during the time of application."
  ],

  // ── Withholding periods ───────────────────────────────────────
  withholding: {
    grazing: "DO NOT GRAZE TREATED TURF OR FEED TURF CLIPPINGS FROM ANY TREATED AREA TO POULTRY OR LIVESTOCK."
  },

  // ── Surfactant ───────────────────────────────────────────────
  surfactant: "Use a surfactant for difficult to wet weeds.",

  // ── Spray equipment cleanup ───────────────────────────────────
  cleanup: "THOROUGHLY CLEAN ALL APPLICATION EQUIPMENT AFTER USE. Partial Cleaning (before spraying tolerant turf): Empty the tank completely and drain the whole system. Thoroughly wash inside the tank with a pressure hose. Quarter fill the tank with clean water and circulate through the pump, line, hoses and nozzles. Drain and repeat procedure twice. Complete Cleaning (before spraying susceptible plants): Quarter fill the tank again and add an alkaline detergent at 500 mL/100 L water and circulate through the system for at least 15 minutes. Drain, remove filters and nozzles and clean separately. Rinse inside the tank thoroughly using a pressure hose and flush system with clean water.",

  // ── Compatibility ──────────────────────────────────────────────
  compatibility: "No information is available that indicates physical compatibility with other products. Tank-mixing other products with Surefire Multi Turf Herbicide cannot therefore be recommended.",

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Turf ──
    {
      crop: "Turf",
      cropList: ["Turf"],
      weeds: [
        {
          weed: "White Clover, Plantain, Capeweed, Cat's Ear, Bin-dii (Jo-Jo, Onehunga), Cudweed, Creeping Oxalis",
          pestList: ["White Clover", "Plantain", "Capeweed", "Cat's Ear", "Bin-dii", "Jo-Jo", "Onehunga", "Cudweed", "Creeping Oxalis"],
          states: ["All"],
          rate: "5000",
          rateMax: "5000",
          unit: "mL/ha",
          stage: "Apply to actively growing weeds",
          note: "Apply in 200-500 L water/ha. Transient discolouration may occur on kikuyu and carpet grass and Queensland blue couch. Varietal differences in certain buffalo grasses (e.g., ST85) may produce more pronounced effects and it is recommended that small areas be tested for turf safety before large-scale application occurs. Avoid exceeding application rates through overlapping sprayed areas. Use a surfactant for difficult to wet weeds. Complete weed death may take up to 6 weeks. Faster results can be expected on smaller weeds. Due to residual effects of diflufenican, overseeding treated areas within 3 months of application may inhibit establishment of the turf grass. Avoid mowing during the 3 to 4 days preceding or following treatment."
        }
      ]
    }
  ]
};
