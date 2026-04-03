// ─────────────────────────────────────────────────────────
// VIVUS MAX® Helicoverpa Biocontrol — Label Data
// Biological Insecticide (Nucleopolyhedrovirus)
// Source: AgBiTech_VivusMax_Label.pdf
// APVMA Approval No: 60905
// AgBiTech Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['vivusmax'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "VIVUS MAX® Helicoverpa Biocontrol",
  company: "AgBiTech",

  category:         "Herbicides",
  activeIngredient: "5 × 10⁹ Polyhedral Inclusion Bodies of Nucleopolyhedrovirus of Helicoverpa armigera per mL",
  group:            "Biological Insecticide",
  modeOfAction:     "Nucleopolyhedrovirus (NPV) — must be ingested by Helicoverpa spp. larvae to be effective. Most effective on larvae less than 7 mm in length.",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#fbbf24",
  apvma:            "60905",
  labelPdf:         "Source labels/AgBiTech_VivusMax_Label.pdf",
  sdsPdf:           "SDS Labels/AgBiTech_VivusMax_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Helicoverpa armigera", "Helicoverpa punctigera"],
    timing: ["Foliar"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Cereal Grains ─────────────────────────────────────────
    {
      crop: "Cereal Grains",
      cropList: ["Maize", "Popcorn"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Thorough coverage of the crop is essential — NPV must be ingested by larvae. Provides 60–90% control; greater control on smaller larvae under ideal conditions. Larvae continue feeding 1–3 days after infection and take 3–8 days to die. Short residual activity; re-treat at 2–3 day intervals. Avoid applying if heavy rain expected within 1 hour. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Lucerne ───────────────────────────────────────────────
    {
      crop: "Lucerne (Alfalfa)",
      cropList: ["Lucerne"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Thorough coverage of the crop is essential — NPV must be ingested by larvae. Provides 60–90% control; greater control on smaller larvae under ideal conditions. Short residual activity; re-treat at 2–3 day intervals. Avoid applying if heavy rain expected within 1 hour. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Oilseeds ──────────────────────────────────────────────
    {
      crop: "Oilseeds",
      cropList: ["Linseed", "Peanuts", "Canola", "Safflower", "Sunflower"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Thorough coverage of the crop is essential — NPV must be ingested by larvae. Provides 60–90% control. Linseed: Use a non-ionic surfactant at the manufacturer's specified rate to improve coverage. Short residual activity; re-treat at 2–3 day intervals. Avoid applying if heavy rain expected within 1 hour. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Potatoes ──────────────────────────────────────────────
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Thorough coverage of the crop is essential — NPV must be ingested by larvae. Provides 60–90% control. Short residual activity; re-treat at 2–3 day intervals. Avoid applying if heavy rain expected within 1 hour. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Pulses ────────────────────────────────────────────────
    {
      crop: "Pulses",
      cropList: ["Azuki Beans", "Broad Beans", "Cowpeas", "Faba Beans", "Field Peas", "Kidney Beans", "Lablab", "Lentils", "Lima Beans", "Lupins", "Mung Beans", "Navy Beans", "Pigeon Peas", "Soybeans", "Vetch"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Thorough coverage of the crop is essential — NPV must be ingested by larvae. Provides 60–90% control. The addition of Optimol is likely to improve the performance of Vivus Max in pulse crops. Short residual activity; re-treat at 2–3 day intervals. Avoid applying if heavy rain expected within 1 hour. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Sorghum ───────────────────────────────────────────────
    {
      crop: "Sorghum",
      cropList: ["Sorghum"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "75",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Target applications when 50% of heads have reached 100% flowering",
          note: "Use lower rates when targeting larvae smaller than 7 mm (1st and 2nd instar) or under lower pressure (near threshold) situations. Use higher rates for larvae larger than 7 mm (3rd instar). When applied in 10 L/ha total volume, include Optimol at 1 L/ha. Short residual activity; re-treat at 2–3 day intervals. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Chickpeas ─────────────────────────────────────────────
    {
      crop: "Chickpeas",
      cropList: ["Chickpeas"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "75",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Always include Optimol. Use lower rates as a preventive measure in pre-podding chickpeas. Use the high rate when pest population has reached economic threshold. Vivus Max is unlikely to reduce larval numbers below threshold if the initial population exceeds 6 per metre of row — use alternative control options. Short residual activity; re-treat at 2–3 day intervals. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Cotton (standalone) ───────────────────────────────────
    {
      crop: "Cotton — Standalone Application",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Cotton Bollworm"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply when majority of larvae are less than 7 mm in length",
          note: "Always include Optimol. DO NOT apply on larvae larger than 7 mm in cotton. As a stand-alone insecticide, Vivus Max is unlikely to reduce larval numbers below threshold if the initial population exceeds 4 per metre of row. Use in accordance with the Cotton Best Management Practices Manual. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Cotton (+ registered larvicide) ───────────────────────
    {
      crop: "Cotton — With Registered Larvicide",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Cotton Bollworm"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply when majority of larvae are less than 7 mm in length",
          note: "Apply with Optimol PLUS a registered larvicide at its label rate. DO NOT apply on larvae larger than 7 mm in cotton. Use in accordance with the Cotton Best Management Practices Manual. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Sweetcorn ─────────────────────────────────────────────
    {
      crop: "Sweetcorn",
      cropList: ["Sweetcorn"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "mL/ha",
          stage: "Apply from early vegetative growth stage through to tasselling, prior to emergence of silks",
          note: "Short residual activity; re-treatment may be required at 2–3 day intervals depending on egg counts and crop growth rates. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Horticultural Crops (150–300 mL/ha) ───────────────────
    {
      crop: "Berryfruit",
      cropList: ["Blackberries", "Blueberries", "Boysenberries", "Cranberries", "Currants", "Gooseberries", "Raspberries", "Strawberries"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Use higher rates when flowers, fruit or economic parts of the crop are present, under high pest pressure, or to control larvae larger than 7 mm. Use lower rates during vegetative stages. Short residual activity; re-treat at 2–3 day intervals. Use a non-ionic surfactant at the manufacturer's specified rate to improve coverage. The addition of Optimol may increase speed of kill and improve performance against larger larvae. Apply by ground rig in minimum 400 L water/ha. WHP: Not required when used as directed."
        }
      ]
    },

    {
      crop: "Brassica Vegetables",
      cropList: ["Broccoli", "Brussels Sprouts", "Cabbages", "Cauliflower", "Chinese Broccoli", "Brassica Leafy Vegetables"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Use higher rates when flowers, fruit or economic parts of the crop are present, under high pest pressure, or to control larvae larger than 7 mm. Use lower rates during vegetative stages. Short residual activity; re-treat at 2–3 day intervals. Use a non-ionic surfactant at the manufacturer's specified rate to improve coverage. The addition of Optimol may increase speed of kill and improve performance against larger larvae. Apply by ground rig in minimum 400 L water/ha. WHP: Not required when used as directed."
        }
      ]
    },

    {
      crop: "Celery",
      cropList: ["Celery"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Use higher rates when economic parts of the crop are present, under high pest pressure, or to control larvae larger than 7 mm. Use lower rates during vegetative stages. Short residual activity; re-treat at 2–3 day intervals. Use a non-ionic surfactant at the manufacturer's specified rate to improve coverage. Apply by ground rig in minimum 400 L water/ha. WHP: Not required when used as directed."
        }
      ]
    },

    {
      crop: "Cucurbits",
      cropList: ["Cucumbers", "Melons", "Pumpkins", "Squash", "Watermelons", "Zucchini"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Use higher rates when flowers, fruit or economic parts of the crop are present, under high pest pressure, or to control larvae larger than 7 mm. Use lower rates during vegetative stages. Short residual activity; re-treat at 2–3 day intervals. Use a non-ionic surfactant at the manufacturer's specified rate to improve coverage. Apply by ground rig in minimum 400 L water/ha. WHP: Not required when used as directed."
        }
      ]
    },

    {
      crop: "Fruiting Vegetables",
      cropList: ["Eggplant", "Capsicums", "Chillies", "Tomatoes"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Use higher rates when flowers, fruit or economic parts of the crop are present, under high pest pressure, or to control larvae larger than 7 mm. Use lower rates during vegetative stages. Short residual activity; re-treat at 2–3 day intervals. Use a non-ionic surfactant at the manufacturer's specified rate to improve coverage. Apply by ground rig in minimum 400 L water/ha. WHP: Not required when used as directed."
        }
      ]
    },

    {
      crop: "Leafy Vegetables",
      cropList: ["Endive", "Lettuce", "Roquette", "Silver Beet", "Spinach"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Use higher rates when economic parts of the crop are present, under high pest pressure, or to control larvae larger than 7 mm. Use lower rates during vegetative stages. Short residual activity; re-treat at 2–3 day intervals. Use a non-ionic surfactant at the manufacturer's specified rate to improve coverage. Apply by ground rig in minimum 400 L water/ha. WHP: Not required when used as directed."
        }
      ]
    },

    {
      crop: "Legume Vegetables",
      cropList: ["Green Beans", "Green Peas", "Snow Peas", "Sugar Snap Peas"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Use higher rates when flowers, fruit or economic parts of the crop are present, under high pest pressure, or to control larvae larger than 7 mm. Use lower rates during vegetative stages. Short residual activity; re-treat at 2–3 day intervals. Use a non-ionic surfactant at the manufacturer's specified rate to improve coverage. Apply by ground rig in minimum 400 L water/ha. WHP: Not required when used as directed."
        }
      ]
    },

    {
      crop: "Ornamental Flowers and Plants",
      cropList: ["Ornamental Flowers", "Ornamental Plants"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Use higher rates when flowers or economic parts of the crop are present, under high pest pressure, or to control larvae larger than 7 mm. Use lower rates during vegetative stages. Short residual activity; re-treat at 2–3 day intervals. Use a non-ionic surfactant at the manufacturer's specified rate to improve coverage. Apply by ground rig in minimum 400 L water/ha. WHP: Not required when used as directed."
        }
      ]
    },

    {
      crop: "Pome Fruit",
      cropList: ["Apples", "Nashi", "Pears"],
      weeds: [
        {
          weed: "Helicoverpa spp. larvae (Corn earworm, Cotton bollworm, Tobacco budworm, Native budworm)",
          pestList: ["Helicoverpa Armigera", "Helicoverpa Punctigera", "Corn Earworm", "Cotton Bollworm"],
          states: ["All"],
          rate: "150",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Target application when the majority of larvae are less than 7 mm in length",
          note: "Use higher rates when flowers, fruit or economic parts of the crop are present, under high pest pressure, or to control larvae larger than 7 mm. Use lower rates during vegetative stages. Short residual activity; re-treat at 2–3 day intervals. Use a non-ionic surfactant at the manufacturer's specified rate to improve coverage. Apply by ground rig in minimum 400 L water/ha. WHP: Not required when used as directed."
        }
      ]
    },

  ],  // end crops array

  // ── Agronomic fields ──────────────────────────────────────
  restraints: [
    "DO NOT use to control larvae larger than 13 mm in length.",
    "DO NOT apply if heavy rain is expected within 1 hour after application.",
    "DO NOT apply when daytime temperatures are below 18°C, as this may cause reduced larval activity and feeding.",
    "DO NOT tank mix with other pesticides or fertilisers in ULV oil mixes (compatible in water mixes only).",
    "Spray water pH must be neutral (pH 7.0) or less — pH above 8 may damage the virus.",
    "Do not contaminate streams, rivers or waterways with the product."
  ],

  compatibility: {
    compatible:   ["Most herbicides", "Most insecticides", "Most fungicides", "Most fertilisers (in water)", "Optimol (in water and ULV)"],
    incompatible: ["Other pesticides in ULV oil mixes (undiluted solvents damage the virus)"],
    notes:        ["Ensure mixture pH is 7 or less before adding Vivus Max. Vivus Max is compatible with Optimol in ULV mixtures. Apply as soon after mixing as possible — virus can be rendered inactive if left to stand overnight."]
  },

  withholding: {
    harvest: "Not required when used as directed.",
    grazing: "Not specified."
  },

  surfactant:     "Non-ionic surfactant at manufacturer's specified rate recommended for linseed and horticultural crops. Optimol (molasses/sugar/oil additive) recommended for pulses, chickpeas, cotton, and sorghum (10 L/ha ULV). Optimol rate: less than 100 L/ha water = 1 L/ha; greater than 100 L/ha water = 2 L/ha.",
  sprayerCleanup: "Triple or preferably pressure rinse containers before disposal. Add rinsings to spray tank."

};
