// ─────────────────────────────────────────────────────────────────────────────
// VANTACOR INSECTICIDE — Label Data
// Suspension Concentrate | Group 28 Insecticide
// Source: Fmc_Australasia_Vantacor_Insecticide_Label.pdf
// APVMA Approval No: 89966/126560
// FMC Australasia
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['fmcvantacor'] = {
  name:             "Vantacor Insecticide",
  company: "FMC",

  category:         "Insecticides",
  activeIngredient: "600 g/L Chlorantraniliprole",
  group:            "Group 28 Insecticide",
  modeOfAction:     "Ryanodine receptor modulator - selective control of Lepidoptera in cotton and pulses",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#581c87",
  apvma:            "89966",
  labelPdf:         "Source labels/Fmc_Australasia_Vantacor_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/VANTACOR_INSECT_CONTROL.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Insecticide",
    target: ["Lepidoptera", "Helicoverpa armigera", "Budworm"],
    timing: ["Early detection", "Economic threshold"]
  },

  crops: [
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        { weed: "Cotton bollworm (Helicoverpa armigera) Native budworm (Helicoverpa punctigera) Cluster caterpillar (Spodoptera litura)", pestList: ["Cotton Bollworm Native Budworm Cluster Caterpillar"], states: ["All"], rate: 55, rateMax: 90, unit: "mL/ha", rateText: "55 or 90 mL + non ionic surfactant @ 125 gai/100 L", notes: "WHP: 28 days. Target brown eggs and hatchling (neonates or 1st instar) to small larvae (2nd instar) when they reach the economic spray threshold and before they become entrenched in squares, flowers and bolls. Use the low rate on threshold larvae pressure (2 larvae per metre row) and low egg pressure. Use the high rate with high egg and/or larvae pressure (where potential for >2 larvae per metre row produced) and so as to achieve longer residual control of Helicoverpa spp." },
        { weed: "Northern rough bollworm (Earias vittella) Rough bollworm (Earias huegeliana)", pestList: ["Northern Rough Bollworm Rough Bollworm"], states: ["All"], rate: 90, rateMax: 90, unit: "mL/ha", rateText: "90 mL + non ionic surfactant @ 125 gai/100 L", notes: "WHP: 28 days. Target eggs and hatchling (neonates or 1st instar) to small larvae (2nd instar) when they reach the economic spray threshold and before they become entrenched in terminals or bolls." }
      ]
    },
    {
      crop: "Chickpea",
      cropList: ["Chickpea"],
      weeds: [
        { weed: "Cotton bollworm (Helicoverpa armigera) Native budworm (Helicoverpa punctigera)", pestList: ["Cotton Bollworm Native Budworm"], states: ["All"], rate: 40, rateMax: 40, unit: "mL/ha", rateText: "40 mL + non-ionic surfactant @ 125 gai/100 L", notes: "WHP: 14 days. A maximum of two applications are to be applied to any one crop per season. Further treatments should be made with alternative mode of action insecticides. Regularly scout crops to monitor for larvae. Target sprays against larvae. Apply as larvae reach threshold numbers. Larvae in entrenched feeding sites will not be controlled. Use enough water to ensure thorough coverage of the crop. Target a minimum of 100 L/ha by ground rig and a minimum of 30 L/ha by aircraft. Use in accordance with Crop..." }
      ]
    },
    {
      crop: "Mung bean, Soybean",
      cropList: ["Mung bean", "Soybean"],
      weeds: [
        { weed: "Bean podborer (Maruca vitrata) Cotton bollworm (Helicoverpa armigera) Native budworm (Helicoverpa punctigera) Soybean looper (Thysanoplusia orichalcea) Bean looper (Mocis alterna) Irrorated tabby (Anticarsia irrorata)", pestList: ["Bean Podborer Cotton Bollworm Native Budworm Soybean Looper Bean Looper Irrorated Tabby"], states: ["All"], rate: 40, rateMax: 40, unit: "mL/ha", rateText: "40 mL + non-ionic surfactant @ 125 gai/100 L", notes: "14 day WHP. A maximum of two applications per season." }
      ]
    },
    {
      crop: "Winter pulse crops (except Chickpea) including; Faba/Broad bean, Field pea, Lentil, Lupin, Vetch",
      cropList: ["Winter pulse crops including", "Faba/Broad bean", "Field pea", "Lentil", "Lupin", "Vetch"],
      weeds: [
        { weed: "Cotton bollworm (Helicoverpa armigera) Native budworm (Helicoverpa punctigera)", pestList: ["Cotton Bollworm Native Budworm"], states: ["All"], rate: 40, rateMax: 40, unit: "mL/ha", rateText: "40 mL + non-ionic surfactant @ 125 gai/100 L", notes: "14 day WHP. A maximum of two applications per season." }
      ]
    },
    {
      crop: "Summer pulse crops (except Mung bean and Soybean) including; Azuki/Adzuki bean, Cow pea, Navy bean, Pigeon pea,",
      cropList: ["Summer pulse crops including", "Azuki/Adzuki bean", "Cow pea", "Navy bean", "Pigeon pea"],
      weeds: [
        { weed: "Bean podborer (Maruca vitrata) Cotton bollworm (Helicoverpa armigera) Native budworm (Helicoverpa punctigera) Soybean looper (Thysanoplusia orichalcea) Bean looper (Mocis alterna) Irrorated tabby (Anticarsia irrorata)", pestList: ["Bean Podborer Cotton Bollworm Native Budworm Soybean Looper Bean Looper Irrorated Tabby"], states: ["All"], rate: 40, rateMax: 40, unit: "mL/ha", rateText: "40 mL + non-ionic surfactant @ 125 gai/100 L", notes: "14 day WHP. A maximum of two applications per season." }
      ]
    }
  ],

  restraints: [
    "DO NOT use human flaggers/markers without enclosed cab protection",
    "DO NOT allow livestock to graze crops or stubble for specified periods",
    "DO NOT apply more than 8 applications per crop cycle",
    "Total Group 28 exposure should not exceed 50% of crop cycle",
    "DO NOT apply during extreme weather conditions"
  ],

  compatibility: {
    compatible:   ["Most fungicides", "Other approved insecticides"],
    incompatible: [],
    notes:        ["Use window approach with other Group 28 insecticides", "Rotate with different mode of action products", "Incorporate IPM techniques", "Cultivate fields after harvest to destroy overwintering pupae"]
  },

  withholding: {
    harvest: "Cotton: 28 days. Pulse crops: 14 days",
    grazing: "Cotton: DO NOT allow livestock to graze crops, stubble or gin trash. Pulses: 14 days"
  },

  surfactant:     "Spreader-sticker may improve coverage and pest control",
  sprayerCleanup: "Thoroughly clean spray equipment immediately after use. Rinse with clean water and flush all lines."
};
