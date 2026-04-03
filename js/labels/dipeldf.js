// ─────────────────────────────────────────────────────────
// DiPel® DF BIOLOGICAL INSECTICIDE DRY FLOWABLE — Label Data
// Group 11 (Insecticide) | Dry Flowable (DF)
// Source: Valent_DipelDF_Label.pdf
// APVMA Approval No: 53431
// Valent BioSciences Corporation
// ─────────────────────────────────────────────────────────
productDatabase['dipeldf'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "DiPel® DF Biological Insecticide",
  company: "Valent",

  category:         "Insecticides",
  activeIngredient: "Bacillus thuringiensis subsp. kurstaki, strain ABTS-351, fermentation solids and solubles",
  group:            "Group 11 (Biological Insecticide)",
  modeOfAction:     "Microbial — Bt delta-endotoxin disrupts midgut lining of Lepidopteran larvae, causing cessation of feeding and death within 3–5 days",
  formulation:      "Dry Flowable (DF)",
  color:            "#059669",
  apvma:            "53431",
  labelPdf: "Source labels/Valent_Biosciences_A_Div_Of_Sumitomo_Chemical_Dipel_Df_Biological_Insecticide_Dry_Flowable_Label.pdf",
  sdsPdf:           "SDS Labels/DIPEL_DF.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Armyworm", "Cotton Bollworm", "Native Budworm", "Cabbage Moth", "Cabbage White Butterfly",
             "Green Looper", "Lightbrown Apple Moth", "Pear Looper", "Soybean Looper", "Vine Moth",
             "Tobacco Looper", "Diamondback Moth"],
    timing: ["At egg hatch", "First instar larvae"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Agricultural and Non-Agricultural Uses — Boom/Hectare Rates",
      cropList: ["Agricultural And Non-Agricultural Uses","Boom/Hectare Rates"],
      weeds: [
        {
          weed: "Armyworm (Spodoptera spp.), Cotton bollworm (Helicoverpa armigera), Native budworm (Helicoverpa punctigera), Cabbage moth (Plutella xylostella), Cabbage white butterfly (Pieris rapae), Green looper (Chrysodeixis eriosoma), Lightbrown apple moth (Epiphyas postvittana), Pear looper (Ectropis excursaria), Soybean looper (Thysanoplusia orichalcea), Vine moth (Phalaenoides glycinae, Agarista agricola), Tobacco looper (Chrysodeixis argentifera)",
          pestList: ["Armyworm","Cotton Bollworm","Native Budworm","Cabbage Moth","Cabbage White Butterfly","Green Looper","Lightbrown Apple Moth","Pear Looper","Soybean Looper","Vine Moth","Tobacco Looper"],
          states: ["All"],
          rate: "0.5",
          rateMax: "2.0",
          unit: "kg/ha",
          stage: "At egg hatch or first instar larvae stage, before damage to the plant",
          note: "Crops: Vegetables, Fruits, Vines, Oilseeds, Cereal Grains, Herbs, Tobacco, Ornamentals, Forestry, Amenity Trees, Turf. Monitor crops regularly for lepidopteran eggs or first instar larvae. Time spraying to coincide with egg hatch or first instar larvae and before damage to the plant. Activity commences to decline immediately after application — under continual pest pressure apply minimum 2 sprays no more than 3 days apart initially, then reapply at 3–5 day intervals. Use higher rates against Helicoverpa spp. (larvae less than 8 mm) and Spodoptera (larvae less than 15 mm). Spray late afternoon or early evening when larvae are actively feeding. Reapplication after rainfall or overhead sprinkler irrigation may be necessary. DiPel DF is safe to beneficial arthropods. DO NOT use broad spectrum insecticides before and during DiPel DF program. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Agricultural and Non-Agricultural Uses — Dilute Spray (per 100 L)",
      cropList: ["Agricultural And Non-Agricultural Uses","Dilute Spray"],
      weeds: [
        {
          weed: "Armyworm (Spodoptera spp.), Cotton bollworm (Helicoverpa armigera), Native budworm (Helicoverpa punctigera), Cabbage moth (Plutella xylostella), Cabbage white butterfly (Pieris rapae), Green looper (Chrysodeixis eriosoma), Lightbrown apple moth (Epiphyas postvittana), Pear looper (Ectropis excursaria), Soybean looper (Thysanoplusia orichalcea), Vine moth (Phalaenoides glycinae, Agarista agricola), Tobacco looper (Chrysodeixis argentifera)",
          pestList: ["Armyworm","Cotton Bollworm","Native Budworm","Cabbage Moth","Cabbage White Butterfly","Green Looper","Lightbrown Apple Moth","Pear Looper","Soybean Looper","Vine Moth","Tobacco Looper"],
          states: ["All"],
          rate: "25",
          rateMax: "100",
          unit: "g/100L",
          stage: "At egg hatch or first instar larvae stage, before damage to the plant",
          note: "Dilute spraying (to the point of run-off): 25–100 g/100 L. Concentrate spraying: 100–1000 g/100 L. Ensure complete and thorough coverage of all plant surfaces. A non-ionic wetting agent (e.g. Agral) may be needed for difficult-to-wet plants. Larvae in sheltered positions (sweet corn whorls, lettuce heart leaves) will not be controlled — spraying to run-off may improve reach. DiPel DF can be applied with 0.01% wetting agent to assist coverage of crucifer crops. WHP: not required when used as directed."
        }
      ]
    }

  ,
    {
      crop: "Cucurbits",
      cropList: ["Cucurbits"],
      weeds: [
          { weed: "Armyworm, Cotton bollworm, Native budworm, Cabbage moth, Cabbage white butterfly, Green looper, Lightbrown apple moth, Pear looper, Soybean looper, Vine moth, Tobacco looper", pestList: ["Armyworm", "Cotton Bollworm", "Native Budworm", "Cabbage Moth", "Cabbage White Butterfly", "Green Looper", "Lightbrown Apple Moth", "Pear Looper", "Soybean Looper", "Vine Moth", "Tobacco Looper"], states: ["All"], rate: "0.5-2", unit: "kg/ha", rateText: "0.5-2kg/ha", notes: "Consult label for critical comments" }
      ]
    },
    {
      crop: "Basil",
      cropList: ["Basil"],
      weeds: [
          { weed: "Armyworm, Cotton bollworm, Native budworm, Cabbage moth, Cabbage white butterfly, Green looper, Lightbrown apple moth, Pear looper, Soybean looper, Vine moth, Tobacco looper", pestList: ["Armyworm", "Cotton Bollworm", "Native Budworm", "Cabbage Moth", "Cabbage White Butterfly", "Green Looper", "Lightbrown Apple Moth", "Pear Looper", "Soybean Looper", "Vine Moth", "Tobacco Looper"], states: ["All"], rate: "0.5-2", unit: "kg/ha", rateText: "0.5-2kg/ha", notes: "WHP: 0 Days" }
      ]
    },
    {
      crop: "Tomato",
      cropList: ["Tomato"],
      weeds: [
          { weed: "Armyworm, Cotton bollworm, Native budworm, Cabbage moth, Cabbage white butterfly, Green looper, Lightbrown apple moth, Pear looper, Soybean looper, Vine moth, Tobacco looper", pestList: ["Armyworm", "Cotton Bollworm", "Native Budworm", "Cabbage Moth", "Cabbage White Butterfly", "Green Looper", "Lightbrown Apple Moth", "Pear Looper", "Soybean Looper", "Vine Moth", "Tobacco Looper"], states: ["All"], rate: "0.5-2", unit: "kg/ha", rateText: "0.5-2kg/ha", notes: "Consult label for critical comments" }
      ]
    }
    ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "Do NOT use the product if rain is forecast within 8 hours.",
    "DO NOT spray past the point of run-off.",
    "Treat when larvae are young.",
    "To obtain maximum assistance from beneficial insects, avoid use of broad spectrum insecticides during a program of DiPel DF sprays.",
    "Do NOT apply as a tank mix with, or within 2 days of application of alkaline products such as foliar nutrients, liquid fertilisers or Bordeaux mixtures.",
    "Store in a cool (below 15°C) well-ventilated area. Stable for 2 years if stored correctly."
  ],

  compatibility: {
    compatible:   ["Most insecticides and fungicides."],
    incompatible: ["Alkaline products (foliar nutrients, liquid fertilisers, Bordeaux mixtures) — do not mix or apply within 2 days."],
    notes:        ["If mixing with cupric hydroxide, use immediately. Do not allow mixture to stand. Use spray within 12 hours of mixing."]
  },

  withholding: {
    harvest: "NOT REQUIRED WHEN USED AS DIRECTED.",
    grazing: "NOT REQUIRED WHEN USED AS DIRECTED."
  },

  surfactant:     "Non-ionic wetting agent (e.g. Agral) may improve coverage on difficult-to-wet crops. Apply at 0.01% (10 mL/100 L) for crucifers.",
  sprayerCleanup: "Triple rinse containers before disposal. Add rinsings to spray tank."

};
