// ─────────────────────────────────────────────────────────
// MAGNATE FUNGICIDE — Label Data
// Group C (DMI / Imidazole) | Emulsifiable Concentrate (EC)
// Source: ColinCampbell_Magnate_Label.pdf
// APVMA Approval No: 59648
// Colin Campbell (Chemicals) Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['magnate'] = {

  name:             "Magnate® Fungicide",
  company: "Albaugh",


  category:         "Fungicides",
  activeIngredient: "500 g/L Imazalil",
  group:            "Group C (DMI Fungicide / Imidazole)",
  modeOfAction:     "Inhibits C14-demethylation in sterol biosynthesis",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#7e22ce",
  apvma:            "59648",
  labelPdf:         "Source labels/ColinCampbell_Magnate_Label.pdf",
  sdsPdf:           "SDS Labels/Campbell_Magnate_500EC_Fungicide.pdf",
  signalHeading:    "Caution",

  classification: {
    type: "Fungicide",
    target: ["Post-Harvest Disease", "Blue Mould", "Green Mould"],
    timing: ["Post-Harvest — apply within 24 hours of harvest"]
  },

  crops: [

    {
      crop: "Citrus — Post-Harvest (Water Treatment)",
      cropList: ["Citrus","Post-Harvest"],
      weeds: [
        {
          weed: "Blue Mould (Penicillium italicum), Green Mould (Penicillium digitatum) — storage decays",
          pestList: ["Blue Mould","Green Mould — Storage Decays"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Post-harvest — apply to fruit preferably within 24 hours of harvest",
          note: "In water: 100 mL per 100 litres of water. Apply to fruit preferably within 24 hours of harvest. Use as a bulk dip, flood or spray before waxing. Mixing: make up a premix of at least 5 parts water to one part product, stir thoroughly, then fill to required volume with water and agitate. The emulsion remains stable if agitated every four hours. At the indicated rate Magnate has curative (up to maximum 24 hours) and preventative action. At the higher use rate Magnate has antisporulating properties. Compatible with most fungicides including iprodione (Ippon)."
        }
      ]
    },

    {
      crop: "Citrus — Post-Harvest (Wax Treatment)",
      cropList: ["Citrus","Post-Harvest"],
      weeds: [
        {
          weed: "Blue Mould (Penicillium italicum), Green Mould (Penicillium digitatum) — storage decays",
          pestList: ["Blue Mould","Green Mould — Storage Decays"],
          states: ["All"],
          rate: "1000",
          rateMax: "1600",
          unit: "mL/ha",
          stage: "Post-harvest — apply in citrus wax without further dilution using conventional waxing equipment",
          note: "In citrus wax: 1000–1600 mL per 200 litres of wax (provides a concentration of 2500–4000 ppm). Apply without further dilution using conventional waxing equipment. Sporulation control can be obtained at 1600 mL per 200 litres of wax (4000 ppm). No top-up for wax. Mixing in wax: make a premix of at least 5 parts wax to one part product, stir thoroughly, add premix to the wax and stir until creaming has disappeared. Constant agitation advisable during application. For disease control it is not necessary to apply consecutive applications using both methods — one application in water or wax at the label rate is sufficient. Compatible with most fungicides including iprodione (Ippon)."
        }
      ]
    }

  ],

  restraints: [
    "DO NOT feed treated produce or byproducts to food producing animals, including poultry.",
    "DO NOT contaminate ponds, rivers, waterways or dams with the chemical or used container.",
    "Compatible with most fungicides — because of diversity of field conditions, small tests should be carried out in the first instance."
  ],

  compatibility: {
    compatible:   [
      "Most fungicides including iprodione (Ippon)"
    ],
    incompatible: [],
    notes:        [
      "Because of diversity of field conditions, small compatibility tests should be carried out in the first instance.",
      "For citrus wax mixtures: ensure thorough pre-mixing before adding to bulk wax; maintain constant agitation during application.",
      "For water treatments: the emulsion remains stable if agitated every four hours."
    ]
  },

  withholding: {
    harvest: "Not required when used as directed.",
    grazing:  "DO NOT feed treated produce or byproducts to food producing animals including poultry."
  },

  surfactant:     "Not required.",
  sprayerCleanup: "Triple or preferably pressure rinse containers before disposal. Add rinsings to spray tank. Dispose of spent treatment solutions in a suitable waste pit clear of waterways, desirable vegetation and tree roots."

};
