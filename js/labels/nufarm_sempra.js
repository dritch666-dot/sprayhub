// ─────────────────────────────────────────────────────────────────────────────
// NUFARM SEMPRA HERBICIDE — Label Data
// Group 2 Herbicide | Water Dispersible Granule (WG)
// Source: Nufarm_Sempra_Label.pdf
// APVMA Approval No: 56620/141248
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['nufarm_sempra'] = {
  name:             "Nufarm Sempra Herbicide",
  company: "Nufarm",

  category:         "Herbicides",
  activeIngredient: "750 g/kg Halosulfuron-methyl",
  group:            "Group 2 Herbicide",
  modeOfAction:     "Inhibits acetolactate synthase (ALS); sulfonylurea",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#16a34a",
  apvma:            "56620",
  labelPdf:         "Source labels/Nufarm_Sempra_Label.pdf",
  sdsPdf:           "SDS Labels/SEMPRA_HERBICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Herbicide",
    target: ["Nutgrass", "Mullumbimby Couch", "Navua Sedge"],
    timing: ["Post-emergent", "Actively growing weeds"]
  },

  crops: [
    // ── 0: Turf (All States, ACT, NT) ──
    {
      crop: "Turf — Bent Grass, Buffalo Grass, Carpet Grass, Couch, Couch Hybrid, Durban Grass, Kikuyu Grass, Perennial Ryegrass, Qld Blue Couch, Tall Fescue (All States, ACT, NT)",
      cropList: ["Bent Grass", "Buffalo Grass", "Carpet Grass", "Couch", "Couch Hybrid", "Durban Grass", "Kikuyu Grass", "Perennial Ryegrass", "Queensland Blue Couch", "Tall Fescue", "Turf"],
      weeds: [
        {
          weed: "Mullumbimby couch, Nutgrass",
          pestList: ["Mullumbimby Couch", "Nutgrass"],
          states: ["All"],
          rate: "65",
          rateMax: "130",
          unit: "g/ha",
          stage: "Apply to actively growing weeds when new leaf growth has reached min 5 cm (Nutgrass) or 2 cm (Mullumbimby couch).",
          note: "Boom spray with flat fan nozzles, min 80 L/ha water. ALWAYS add Banjo or Supercharge Elite at 1 L/100L. Delay mowing 2 days after treatment. Do not use on newly seeded, sodded or sprigged turf that is not well established. Spot treatment: 1.3 g/100 m² in 10 L water + 100 mL Banjo/Supercharge Elite."
        }
      ]
    },

    // ── 1: Sugarcane (NSW and QLD only) ──
    {
      crop: "Sugarcane (NSW and QLD only)",
      cropList: ["Sugarcane"],
      weeds: [
        {
          weed: "Nutgrass",
          pestList: ["Nutgrass"],
          states: ["NSW", "Qld"],
          rate: "65",
          rateMax: "130",
          unit: "g/ha",
          stage: "Post-emergent. Plant and ratoon sugarcane.",
          note: "Use higher rate for dense infestations or maximum control from single application. Boom spray min 80 L/ha as broadcast or directed treatment. ALWAYS add Banjo or Supercharge Elite at 1 L/100L. Avoid streaking, skips or overlaps. Delay cultivation at least 2 days. Spot treatment: 1.3 g/100 m² in 10 L water."
        }
      ]
    },

    // ── 2: Corn/Maize (All States, ACT, NT) ──
    {
      crop: "Corn/Maize (All States, ACT, NT)",
      cropList: ["Corn", "Maize"],
      weeds: [
        {
          weed: "Nutgrass",
          pestList: ["Nutgrass"],
          states: ["All"],
          rate: "65",
          rateMax: "130",
          unit: "g/ha",
          stage: "Post-emergent up to crop height 60 cm. Time to max emergence of Nutgrass at 3–4 leaf stage.",
          note: "Boom spray min 80 L/ha as broadcast or directed treatment. ALWAYS add Banjo or Supercharge Elite at 1 L/100L. Some transient yellowing and growth reduction may occur at higher rate. DO NOT apply to sweetcorn or popcorn. DO NOT apply if crop under severe stress (drought, waterlogging, low fertility)."
        }
      ]
    },

    // ── 3: Sorghum (NSW and QLD only) ──
    {
      crop: "Sorghum (NSW and QLD only)",
      cropList: ["Sorghum"],
      weeds: [
        {
          weed: "Nutgrass",
          pestList: ["Nutgrass"],
          states: ["NSW", "Qld"],
          rate: "65",
          rateMax: "130",
          unit: "g/ha",
          stage: "Post-emergent up to crop height 60 cm. Time to max emergence of Nutgrass at 3–4 leaf stage.",
          note: "Boom spray min 80 L/ha as broadcast or directed treatment. ALWAYS add Banjo or Supercharge Elite at 1 L/100L. DO NOT apply more than 200 g/ha per season. Use directed spray if rates greater than 65 g/ha. Some transient yellowing and growth reduction may occur at higher rate. WHP Grazing: 4 weeks."
        }
      ]
    },

    // ── 4: Cotton — Shielded sprayer (NSW and QLD only) ──
    {
      crop: "Cotton — Shielded Sprayer (NSW and QLD only)",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Nutgrass",
          pestList: ["Nutgrass"],
          states: ["NSW", "Qld"],
          rate: "65",
          rateMax: "130",
          unit: "g/ha",
          stage: "Apply to Nutgrass growing between cotton rows. Crops must be at least 20 cm high but before first flower.",
          note: "SHIELDED SPRAYER ONLY — spray or drift contacting cotton plant may cause severe injury. ALWAYS add Banjo or Supercharge Elite at 1 L/100L. Delay cultivation at least 2 days. Delay first irrigation as long as possible to minimise herbicide runoff. Spot treatment (shielded/directed handgun): 1.3 g/100 m²."
        }
      ]
    },

    // ── 5: Pasture (Nth QLD only) ──
    {
      crop: "Pasture (Nth QLD only)",
      cropList: ["Pasture"],
      weeds: [
        {
          weed: "Navua sedge (Cyperus aromaticus)",
          pestList: ["Navua Sedge"],
          states: ["Qld"],
          rate: "65",
          rateMax: "100",
          unit: "g/ha",
          stage: "2 applications required. Remove grazing cattle at least 2 weeks prior to allow Navua sedge to regrow. ONLY apply to actively growing weeds.",
          note: "ALWAYS add Banjo or Supercharge Elite at 1 L/100L. DO NOT apply after seed maturation. Boom spray min 150 L/ha, Coarse spray quality. Follow-up treatments 8–12 weeks later for new germinations. DO NOT graze for 10 weeks after application. Avoid mowing, slashing & discing during treatment period. Spot treatment: 1.0 g/100 m² or 50 g/5000 m²."
        }
      ]
    }
  ],

  // ── Additional info ──
  restraints: [
    "DO NOT apply more than 200 g/ha per season for Turf, Sugarcane, Corn/Maize, Sorghum, Cotton and Pasture.",
    "DO NOT apply after the onset of frosts.",
    "DO NOT apply this product through any type of irrigation system.",
    "DO NOT apply if heavy rain is expected within at least 48 hours."
  ],
  withholdingPeriods: {
    harvest: "Turf: Do not use clippings for mulching around vegetables or fruit trees. All other crops: Not required when used as directed.",
    grazing: "Sorghum: 4 weeks. Turf: Do not graze treated turf. Pasture: 10 weeks. All other crops: Not required when used as directed."
  },
  compatibility: "Compatible with Nufarm Weedmaster DUO, Weedmaster DST, Weedmaster ARGO, Nufarm Kamba M, Nufarm Bromicide MA, Nufarm Amicide Advance 700, diclofop-methyl, Banjo, Supercharge Elite, Nufarm CanDo Adjuvant. Tank mixing with paraquat or ametryn may reduce weed control. Do not tank-mix with organophosphate insecticides or apply within 7 days prior / 3 days after.",
  surfactant: "Banjo or Supercharge Elite at 1 L/100L (mandatory). For handgun/knapsack: 100 mL/10 L water.",
  sprayerCleanup: "1) Drain and flush equipment 10 min. 2) Fill with clean water + chlorine bleach (4% chlorine) at 300 mL/100L, flush boom, agitate 15 min. 3) Repeat step 2. 4) Remove and clean nozzles/screens. 5) Rinse with clean water. DO NOT use chlorine bleach with ammonia.",
  plantBack: "Corn/Maize, Sorghum, Sugarcane: 2 months. Wheat: 3 months. Cotton: 4 months. All other crops (except sugarbeet): 24 months. Sugarbeet: 36 months."
};
