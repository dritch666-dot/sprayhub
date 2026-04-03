// ─────────────────────────────────────────────────────────────────────────────
// UBENIQ RINSKOR ACTIVE HERBICIDE — Label Data
// Suspension Concentrate | Group 4 Herbicide
// Source: Corteva_Agriscience_Ubeniq_Rinskor_Active_Herbicide_Label.pdf
// APVMA Approval No: 86450/130952
// Corteva Agriscience
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['cortevaubeniq'] = {
  name:             "Ubeniq Rinskor Active Herbicide",
  company: "Corteva",

  category:         "Herbicides",
  activeIngredient: "300 g/L Florpyrauxifen benzyl",
  group:            "Group 4 Herbicide",
  modeOfAction:     "Disrupters of plant cell growth - selective weed control in rice and pasture",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#78350f",
  apvma:            "86450",
  labelPdf:         "Source labels/Corteva_Agriscience_Ubeniq_Rinskor_Active_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/UBENIQ_HERBICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Herbicide",
    target: ["Sedges", "Broadleaf weeds", "Navua sedge"],
    timing: ["In-flood timing for rice", "Early growth stage"]
  },

  crops: [
    {
      crop: "Rice — SCWIIRT or Bickley boom (in-flood) application",
      cropList: ["Rice","In-Flood Application"],
      weeds: [
        { weed: "Arrowhead (Sagittaria calycina)", pestList: ["Arrowhead"], states: ["All"], rate: "150", unit: "mL/ha", stage: "Up to 4 leaf and not more than 5 cm across", note: "DO NOT apply prior to three leaf growth stage of rice (BBCH 13). DO NOT apply any later than panicle initiation growth stage of rice (BBCH 30). Always use Ubeniq in sequence after foundation herbicide treatments that have a different mode of action. Always apply with Uptake Spraying Oil, Hasten Spray Adjuvant or Loveland Products MSO with Leci-Tech at 2 - 4 L/ha in total spray volume of 5 - 20 L/ha. Pre-mix Ubeniq thoroughly in oil, then once fully dispersed, add remaining water to make up total spray mix volume. See WATER MANAGEMENT in GENERAL INSTRUCTIONS. A follow up treatment with a herbicide having a different mode of action may be required for complete control of weeds larger than label size or growth stage." },
        { weed: "Dirty dora (Cyperus difformis) — Suppression", pestList: ["Dirty Dora"], states: ["All"], rate: "150", unit: "mL/ha", stage: "Up to 2 leaf stage and not more than 3 cm across", note: "DO NOT apply prior to three leaf growth stage of rice (BBCH 13). DO NOT apply any later than panicle initiation growth stage of rice (BBCH 30). Always use Ubeniq in sequence after foundation herbicide treatments that have a different mode of action. Always apply with Uptake Spraying Oil, Hasten Spray Adjuvant or Loveland Products MSO with Leci-Tech at 2 - 4 L/ha in total spray volume of 5 - 20 L/ha. See WATER MANAGEMENT in GENERAL INSTRUCTIONS. A follow up treatment with a herbicide having a different mode of action may be required for complete control of weeds larger than label size or growth stage." },
        { weed: "Jerry Jerry (Ammania multiflora)", pestList: ["Jerry Jerry"], states: ["All"], rate: "150", unit: "mL/ha", stage: "Up to 4 leaf and not more than 5 cm across", note: "DO NOT apply prior to three leaf growth stage of rice (BBCH 13). DO NOT apply any later than panicle initiation growth stage of rice (BBCH 30). Always use Ubeniq in sequence after foundation herbicide treatments that have a different mode of action. See WATER MANAGEMENT in GENERAL INSTRUCTIONS. A follow up treatment with a herbicide having a different mode of action may be required for complete control of weeds larger than label size or growth stage." },
        { weed: "Starfruit (Damasonium minus)", pestList: ["Starfruit"], states: ["All"], rate: "150", unit: "mL/ha", stage: "Up to 4 leaf and not more than 5 cm across", note: "DO NOT apply prior to three leaf growth stage of rice (BBCH 13). DO NOT apply any later than panicle initiation growth stage of rice (BBCH 30). Always use Ubeniq in sequence after foundation herbicide treatments that have a different mode of action. See WATER MANAGEMENT in GENERAL INSTRUCTIONS. A follow up treatment with a herbicide having a different mode of action may be required for complete control of weeds larger than label size or growth stage." },
        { weed: "Water plantain (Alisma plantago-aquatica)", pestList: ["Water Plantain"], states: ["All"], rate: "150", unit: "mL/ha", stage: "Up to 4 leaf and not more than 5 cm across", note: "DO NOT apply prior to three leaf growth stage of rice (BBCH 13). DO NOT apply any later than panicle initiation growth stage of rice (BBCH 30). Always use Ubeniq in sequence after foundation herbicide treatments that have a different mode of action. See WATER MANAGEMENT in GENERAL INSTRUCTIONS. A follow up treatment with a herbicide having a different mode of action may be required for complete control of weeds larger than label size or growth stage." }
      ]
    },
    {
      crop: "Sorghum — Post emergence ground boom application",
      cropList: ["Sorghum","Post-Emergent Application"],
      weeds: [
        { weed: "Caltrop / Yellow vine (Tribulus terrestris)", pestList: ["Caltrop","Yellow Vine"], states: ["All"], rate: "25", unit: "mL/ha", stage: "Seedling plants up to 15 cm diameter", note: "DO NOT apply before the secondary roots are present and before four fully expanded leaves (BBCH 14). DO NOT apply any later than at eight fully expanded leaves of sorghum (BBCH 18). Use Ubeniq + Starane Advanced in tank mixture with atrazine for broadspectrum weed control. Always apply with Hasten Spray Adjuvant at 500 mL/100 L water. Only treat small seedling weeds that are actively growing." }
      ]
    },
    {
      crop: "Fallow — Post emergence ground boom application",
      cropList: ["Fallow","Fallow Land","Post-Emergent Application"],
      weeds: [
        { weed: "Caltrop / Yellow vine (Tribulus terrestris)", pestList: ["Caltrop","Yellow Vine"], states: ["All"], rate: "25", unit: "mL/ha", stage: "Seedling plants up to 15 cm diameter", note: "Always use Ubeniq in tank mixture with glyphosate for broadspectrum weed control. Only treat small seedling weeds that are actively growing. When Ubeniq is applied without a tank mix partner, add Hasten Spray Adjuvant at 500 mL/100 L water." }
      ]
    },
    {
      crop: "Tropical Grass Pastures (Grazing Only), Commercial & Industrial Areas, Rights-of-Way — Post emergence ground boom and spot application",
      cropList: ["Pasture","Tropical Grass Pastures","Commercial Areas","Industrial Areas","Rights-Of-Way","Post-Emergent Application","Spot Application"],
      weeds: [
        { weed: "Navua sedge (Cyperus aromaticus)", pestList: ["Navua Sedge"], states: ["All"], rate: "100", rateMax: "150", unit: "mL/ha", rates: { boom: "100 - 150 mL/ha", spot: "15 mL/100L water" }, stage: "Seedlings prior to flowering", note: "Always apply with Uptake Spraying Oil. Apply to grass pastures 2 weeks after grazing in spring/summer. A second application 10 - 12 weeks later may be required to control the next germination of Navua sedge. Use the higher rate on denser infestations. Add Uptake Spraying Oil at 1 L/100 L water for broadcast applications and 500 mL/100 L for spot applications." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply to crops or weeds which may be stressed (not actively growing) due to a range of factors including extreme cold, sustained high temperatures, moisture stress, poor nutrition, presence of disease, damage or previous herbicide treatment",
    "DO NOT apply if rain is likely within one (1) hour as weed control may be reduced",
    "DO NOT apply if heavy rains or storms are forecast within 3 days",
    "DO NOT irrigate to the point of field runoff for at least 3 days after application",
    "DO NOT apply outside of the recommended application window with regards to the crop growth stage (see Tables 3 and 4)",
    "DO NOT apply more than one (1) application per season in rice, fallow and sorghum",
    "DO NOT apply more than two (2) applications per season in tropical grass pastures, commercial & industrial areas and rights-of-way",
    "In rice DO NOT apply by application methods other than SCWIIRT (Soluble Chemical Water Injection In Rice Technique) or Bickley boom",
    "In rice DO NOT treat weeds if mud, cracks or firm soil have appeared through fields prior to treatment, as poor control will result due to moisture stress"
  ],

  compatibility: {
    compatible:   ["Basagran M60 (for broadleaf weeds follow-up)", "Barnstorm (for grass weeds)"],
    incompatible: [],
    notes:        ["Observe longest withholding period when tank mixing", "Foundation treatment at planting essential for rice", "Use integrated weed management approach"]
  },

  withholding: {
    harvest: "Rice: No WHP when used as directed. Sorghum: No WHP. Pasture/Fallow: Varies",
    grazing: "Pasture: 3 days. Fallow: 1 day. Rice: 7 days"
  },

  surfactant:     "Non-ionic surfactant may improve efficacy on difficult weeds",
  sprayerCleanup: "Thoroughly clean spray equipment after use. Rinse with clean water and drain completely."
};
