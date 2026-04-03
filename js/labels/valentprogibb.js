// ─────────────────────────────────────────────────────────────────────────────
// ProGibb LV Plus PLANT GROWTH REGULATOR — Label Data
// Liquid Concentrate | Gibberellic Acid
// Source: Valent_Biosciences_A_Div_Of_Sumitomo_Chemical_Progibb_Lv_Plus_Plant_Growth_Regulator_Liquid_Label.pdf
// APVMA Approval No: 83632/126170
// Valent Biosciences (A Division of Sumitomo Chemical)
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['valentprogibb'] = {
  name:             "ProGibb LV Plus Plant Growth Regulator",
  company: "Valent",

  category:         "Plant Growth Regulators",
  activeIngredient: "100 g/L Gibberellic Acid",
  group:            "Plant Growth Regulator",
  modeOfAction:     "Gibberellic acid promotes cell elongation and fruit development",
  formulation:      "Liquid Concentrate (LC)",
  color:            "#15803d",
  apvma:            "83632/126170",
  labelPdf:         "Source labels/Valent_Biosciences_A_Div_Of_Sumitomo_Chemical_Progibb_Lv_Plus_Plant_Growth_Regulator_Liquid_Label.pdf",
  sdsPdf:           "SDS Labels/VALENT_PROGIBB_LV_PLUS.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Plant Growth Regulator",
    target: ["Grapes", "Citrus", "Prunes", "Cherries", "Stone fruit", "Pastures"],
    timing: ["Bloom stage", "Berry development", "Winter application"]
  },

  crops: [
    {
      crop: "Citrus — Navel Oranges, Valencia Oranges",
      cropList: ["Citrus","Navel Oranges","Valencia Oranges"],
      weeds: [
        { weed: "Creasing reduction in Navel/Valencia oranges", pestList: ["Creasing Reduction in Navel/Valencia Oranges"], states: ["All"], rate: "10", rateMax: "20", unit: "mL/100L water", stage: "30-50mm fruit size (golf-ball stage), January-February", note: "Use higher rate if disease evident previous season. Lower rates for early markets. Apply to point of runoff in 5000 L/ha minimum." },
        { weed: "Rind ageing delay in Navel oranges", pestList: ["Rind Ageing Delay in Navel Oranges"], states: ["All"], rate: "10", rateMax: "10", unit: "mL/100L water", stage: "Colour break (green to silver)", note: "For late marketing or storage >2 weeks. Compatible with 2,4-D stop-drop sprays." }
      ]
    },
    {
      crop: "Citrus — Mandarins, Grapefruit, Lemons",
      cropList: ["Citrus","Mandarins","Grapefruit","Lemons"],
      weeds: [
        { weed: "Rind ageing delay in Mandarins", pestList: ["Rind Ageing Delay in Mandarins"], states: ["All"], rate: "10", rateMax: "10", unit: "mL/100L water", stage: "3/4 to full colour", note: "Apply for late marketing and reduced rind blemish." },
        { weed: "Rind ageing delay in Grapefruit", pestList: ["Rind Ageing Delay in Grapefruit"], states: ["All"], rate: "10", rateMax: "10", unit: "mL/100L water", stage: "Colour break or mid-June for December/January harvest", note: "Timing depends on target harvest period." },
        { weed: "Rind ageing delay in Lemons", pestList: ["Rind Ageing Delay in Lemons"], states: ["All"], rate: "10", rateMax: "10", unit: "mL/100L water", stage: "4-6 weeks before maturity", note: "Applied to delay rind ageing." }
      ]
    },
    {
      crop: "Cherries — Berry development",
      cropList: ["Cherries","Berry Development"],
      weeds: [
        { weed: "Size and colour enhancement in Cherries", pestList: ["Size and Colour Enhancement in Cherries"], states: ["All"], rate: "10", rateMax: "20", unit: "mL/100L water", stage: "Early to mid-straw coloured fruit", note: "Single spray produces larger, brighter, firmer fruit. May slightly delay colour development and harvest. 750-2000 L/ha." }
      ]
    },
    {
      crop: "Grapes — Sultanas (dried fruit)",
      cropList: ["Grapes","Sultanas"],
      weeds: [
        { weed: "Berry thinning in Sultanas", pestList: ["Berry Thinning in Sultanas"], states: ["All"], rate: "10", rateMax: "10", unit: "mL/100L water", stage: "100% capfall (full flowering)", note: "Single or split application. Combined with 100-300ppm Cycocel depending on vine vigour." }
      ]
    },
    {
      crop: "Grapes — Sultanas (fresh fruit)",
      cropList: ["Grapes","Sultanas"],
      weeds: [
        { weed: "Bunch elongation/stretch in fresh Sultanas", pestList: ["Bunch Elongation/Stretch in Fresh Sultanas"], states: ["All"], rate: "10", rateMax: "10", unit: "mL/100L water", stage: "Bunches 10-15cm (half to 2/3 final length)", note: "Applied 10-14 days before bloom. Minimum 2250 L/ha directed at bunch area." },
        { weed: "Berry thinning in fresh Sultanas", pestList: ["Berry Thinning in Fresh Sultanas"], states: ["All"], rate: "10", rateMax: "10", unit: "mL/100L water", stage: "Two applications: 40% capfall and 80% capfall", note: "Two separate applications within same season required." },
        { weed: "Berry size increase in fresh Sultanas", pestList: ["Berry Size Increase in Fresh Sultanas"], states: ["All"], rate: "30", rateMax: "30", unit: "mL/100L water", stage: "Two applications: 4mm smallest berry, 5-7 days later", note: "Two separate applications of 30 mL required for size increase effect." }
      ]
    },
    {
      crop: "Grapes — Other varieties (Perlette, Flame Seedless, Early Madeleine)",
      cropList: ["Grapes","Perlette","Flame Seedless","Early Madeleine"],
      weeds: [
        { weed: "Thinning and berry size in Perlette", pestList: ["Thinning and Berry Size in Perlette"], states: ["All"], rate: "12", rateMax: "20", unit: "mL/100L water", stage: "12 mL at 70% capfall; 20 mL at 4-5mm berry size", note: "Two-step application: thinning followed by size increase." },
        { weed: "Thinning and berry size in Flame Seedless", pestList: ["Thinning and Berry Size in Flame Seedless"], states: ["All"], rate: "10", rateMax: "30", unit: "mL/100L water", stage: "10 mL at 70% capfall; 30 mL at 7-9mm then 9-10mm", note: "Two applications of 30 mL at different berry size stages for size increase." },
        { weed: "Berry size in Early Madeleine", pestList: ["Berry Size in Early Madeleine"], states: ["All"], rate: "20", rateMax: "20", unit: "mL/100L water", stage: "When berries reach 4mm diameter", note: "Vigorous vines should be cinctured 3-5 days before treatment." }
      ]
    },
    {
      crop: "Prunes — Harvest delay and quality",
      cropList: ["Prunes","Harvest Delay And Quality"],
      weeds: [
        { weed: "Harvest delay in Prunes", pestList: ["Harvest Delay in Prunes"], states: ["All"], rate: "10", rateMax: "10", unit: "mL/100L water", stage: "3-4 weeks before normal harvest (~14% soluble solids)", note: "Delays harvest 14-17 days, increases sugar content and dry-out ratio. Minimum 1000 L/ha." }
      ]
    },
    {
      crop: "Pastures — Winter dormant grass-dominant, high intensity grazing",
      cropList: ["Pastures","Winter Dormant Grass-Dominant","High Intensity Grazing"],
      weeds: [
        { weed: "Growth stimulation in winter pastures", pestList: ["Growth Stimulation in Winter Pastures"], states: ["All"], rate: "10", rateMax: "80", unit: "mL/100L water", stage: "Single or multiple applications June to mid-August", note: "Lower rates (10-40 mL/100L) for phalaris-dominant pastures. Higher rates (40-80 mL/100L) for perennial ryegrass, cocksfoot. Minimum 100 L/ha application volume." }
      ]
    },
    {
      crop: "Stone fruit — Apricots, Nectarines, Peaches (thinning for next season)",
      cropList: ["Stone Fruit","Apricots","Nectarines","Peaches"],
      weeds: [
        { weed: "Flowering and fruiting reduction (thinning)", pestList: ["Flowering and Fruiting Reduction (Thinning)"], states: ["All"], rate: "30", rateMax: "160", unit: "mL/100L water in 1000L/ha minimum", stage: "Flower bud initiation (early December to late January)", note: "Single spray application. Timing varies by variety and region. Fully bearing mature trees only. Increase rate to increase efficacy but do not exceed 160 mL/100L." }
      ]
    }
  ],

  restraints: [
    "Use with a non-ionic wetter",
    "DO NOT apply if rain likely within 6 hours",
    "DO NOT apply in combination with other growth regulators or pesticides unless stated in directions",
    "DO NOT apply to low vigour trees under pest, nutritional, water stress or extreme weather events (frosts)",
    "For thinning use only: Use only on fully bearing mature trees"
  ],

  compatibility: {
    compatible:   ["2,4-D sodium salt (stop-drop sprays)", "Cycocel"],
    incompatible: [],
    notes:        ["Citrus: Maintain spray tank pH 4.0-4.5. Pre-mix test recommended with other products."]
  },

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "Not applicable for stone fruit; for pastures keep stock off for 3-4 weeks to maximize production"
  },

  surfactant:     "Non-ionic spreader required at 10 mL/100L solution (except for thinning applications)",
  sprayerCleanup: "Triple-rinse containers before disposal. Add rinsings to spray tank. Do not dispose of undiluted chemicals on site."
};
