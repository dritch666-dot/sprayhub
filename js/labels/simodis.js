// ─────────────────────────────────────────────────────────
// SIMODIS® PLINAZOLIN® technology Insecticide — Label Data
// Group 30 Insecticide (Isocycloseram)
// Source: Syngenta_Simodis_Label.pdf
// APVMA Approval No: 89460
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['simodis'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "SIMODIS® PLINAZOLIN® technology Insecticide",
  company: "Gowan",

  category:         "Insecticides",
  activeIngredient: "100 g/L Isocycloseram",
  group:            "Group 30 Insecticide",
  modeOfAction:     "Isoxazoline insecticide/miticide for control of certain insect and mite pests in vegetables. Contact activity — thorough coverage essential.",
  formulation:      "Dispersible Concentrate (DC)",
  color:            "#f87171",
  apvma:            "89460",
  labelPdf:         "Source labels/Syngenta_Simodis_Label.pdf",
  sdsPdf:           "SDS Labels/Syngenta_Simodis_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Lepidoptera", "Mites", "Thrips"],
    timing: ["Foliar"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Brassica Vegetables ───────────────────────────────────
    {
      crop: "Brassica Vegetables",
      cropList: ["Broccoli", "Broccolini", "Brussels Sprouts", "Cabbages", "Cauliflower", "Kohlrabi"],
      weeds: [
        {
          weed: "Diamondback moth (Plutella xylostella)",
          pestList: ["Diamondback Moth", "Plutella Xylostella"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply at egg hatch or very soon after egg hatch to target young larvae",
          note: "Always add a specified non-ionic surfactant (e.g. AGRAL Spray Adjuvant at 10 mL/100 L). Avoid applying to established populations dominated by large, late instar larvae. Max 2 applications per crop; min 7-day retreatment interval. CropLife resistance management strategy applies. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Cabbage white butterfly (Pieris rapae)",
          pestList: ["Cabbage White Butterfly", "Pieris Rapae"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply at egg hatch or very soon after egg hatch to target young larvae",
          note: "Always add a specified non-ionic surfactant (e.g. AGRAL Spray Adjuvant at 10 mL/100 L). Avoid applying to established populations dominated by large, late instar larvae. Max 2 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Heliothis (Helicoverpa spp.) — Suppression only",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply at egg hatch or very soon after egg hatch to target young larvae",
          note: "SUPPRESSION ONLY. Always add a specified non-ionic surfactant (e.g. AGRAL Spray Adjuvant at 10 mL/100 L). Max 2 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        }
      ]
    },

    // ── Brassica Leafy Vegetables ─────────────────────────────
    {
      crop: "Brassica Leafy Vegetables",
      cropList: ["Bok Choy", "Chinese Broccoli", "Chinese Cabbage", "Choy Sum", "Gai Choy", "Kale", "Mibuna", "Mustard (Leafy)", "Indian Mustard", "Mustard Spinach (Komatsuma)", "Pak Choy", "Tat Soy"],
      weeds: [
        {
          weed: "Diamondback moth (Plutella xylostella)",
          pestList: ["Diamondback Moth", "Plutella Xylostella"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply at egg hatch or very soon after egg hatch to target young larvae",
          note: "Always add a specified non-ionic surfactant (e.g. AGRAL Spray Adjuvant at 10 mL/100 L). Avoid applying to established populations dominated by large, late instar larvae. Max 2 applications per crop; min 7-day retreatment interval. CropLife resistance management strategy applies. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Cabbage white butterfly (Pieris rapae)",
          pestList: ["Cabbage White Butterfly", "Pieris Rapae"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply at egg hatch or very soon after egg hatch to target young larvae",
          note: "Always add a specified non-ionic surfactant (e.g. AGRAL Spray Adjuvant at 10 mL/100 L). Max 2 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Heliothis (Helicoverpa spp.) — Suppression only",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply at egg hatch or very soon after egg hatch to target young larvae",
          note: "SUPPRESSION ONLY. Always add a specified non-ionic surfactant (e.g. AGRAL Spray Adjuvant at 10 mL/100 L). Max 2 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        }
      ]
    },

    // ── Bulb Vegetables ───────────────────────────────────────
    {
      crop: "Bulb Vegetables",
      cropList: ["Garlic", "Onions", "Spring Onions", "Leeks"],
      weeds: [
        {
          weed: "Onion thrips (Thrips tabaci) — Suppression only",
          pestList: ["Onion Thrips", "Thrips Tabaci"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Monitor crops and commence applications once local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Always add Maxx Organosilicone Surfactant at 60 mL/100 L of spray mixture. Max 2 applications per crop; min 7-day retreatment interval. DO NOT apply in Mackay/Whitsunday in August to end of December. WHP: 7 days harvest."
        },
        {
          weed: "Plague thrips (Thrips imaginis) — Suppression only",
          pestList: ["Plague Thrips", "Thrips Imaginis"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Monitor crops and commence applications once local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Always add Maxx Organosilicone Surfactant at 60 mL/100 L of spray mixture. Max 2 applications per crop; min 7-day retreatment interval. DO NOT apply in Mackay/Whitsunday in August to end of December. WHP: 7 days harvest."
        }
      ]
    },

    // ── Cucurbits — Mites ─────────────────────────────────────
    {
      crop: "Cucurbits — Mites (open field only)",
      cropList: ["Cucumbers", "Melons", "Pumpkins", "Squash", "Watermelons", "Zucchini"],
      weeds: [
        {
          weed: "Two-spotted mite (Tetranychus urticae)",
          pestList: ["Two-Spotted Mite", "Tetranychus Urticae"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply to low mite populations when local economic spray thresholds are reached",
          note: "Open field only. Always add a non-ionic surfactant (e.g. AGRAL at 10 mL/100 L). Best results on low mite populations — avoid applying to high, established populations. DO NOT apply sequential applications for mite control; if retreatment needed, use a miticide from a different group first. Max 2 applications per crop. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Broad mite (Polyphagotarsonemus latus) — Suppression only",
          pestList: ["Broad Mite", "Polyphagotarsonemus Latus"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply to low mite populations when local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. DO NOT apply sequential applications for mite control. Max 2 applications per crop. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Bean red spider mite (Tetranychus ludeni) — Suppression only",
          pestList: ["Bean Red Spider Mite", "Tetranychus Ludeni"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply to low mite populations when local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. DO NOT apply sequential applications for mite control. Max 2 applications per crop. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        }
      ]
    },

    // ── Cucurbits — Insects ───────────────────────────────────
    {
      crop: "Cucurbits — Insects (open field only)",
      cropList: ["Cucumbers", "Melons", "Pumpkins", "Squash", "Watermelons", "Zucchini"],
      weeds: [
        {
          weed: "Cucumber moth (Diaphania indica)",
          pestList: ["Cucumber Moth", "Diaphania Indica"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Monitor crops and commence applications once local economic spray thresholds are reached",
          note: "Open field only. Always add a non-ionic surfactant (e.g. AGRAL at 10 mL/100 L). Max 2 applications per crop; min 7-day retreatment interval. CropLife resistance management strategy applies. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Western flower thrips (Frankliniella occidentalis) — Suppression only",
          pestList: ["Western Flower Thrips", "WFT", "Frankliniella Occidentalis"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Monitor crops and commence applications once local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Tomato thrips (Frankliniella schultzei) — Suppression only",
          pestList: ["Tomato Thrips", "Frankliniella Schultzei"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Monitor crops and commence applications once local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Melon thrips (Thrips palmi) — Suppression only",
          pestList: ["Melon Thrips", "Thrips Palmi"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Monitor crops and commence applications once local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Plague thrips (Thrips imaginis) — Suppression only",
          pestList: ["Plague Thrips", "Thrips Imaginis"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Monitor crops and commence applications once local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Heliothis (Helicoverpa spp.) — Suppression only",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply at egg hatch or very soon after egg hatch to target young larvae",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        }
      ]
    },

    // ── Fruiting Vegetables ───────────────────────────────────
    {
      crop: "Fruiting Vegetables (open field only)",
      cropList: ["Capsicums", "Chillies", "Eggplant", "Tomatoes"],
      weeds: [
        {
          weed: "Two-spotted mite (Tetranychus urticae)",
          pestList: ["Two-Spotted Mite", "Tetranychus Urticae"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply to low mite populations when local economic spray thresholds are reached",
          note: "Open field only. Always add a non-ionic surfactant (e.g. AGRAL at 10 mL/100 L). Best results on low mite populations — avoid applying to high, established populations. DO NOT apply sequential applications for mite control; if retreatment needed, use a miticide from a different group first. Max 2 applications per crop. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Broad mite (Polyphagotarsonemus latus)",
          pestList: ["Broad Mite", "Polyphagotarsonemus Latus"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply to low mite populations when local economic spray thresholds are reached",
          note: "Open field only. Always add a non-ionic surfactant. Best results on low mite populations. DO NOT apply sequential applications for mite control. Max 2 applications per crop. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Tomato russet mite (Aculops lycopersici) — Suppression only",
          pestList: ["Tomato Russet Mite", "Aculops Lycopersici"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply to low mite populations when local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. DO NOT apply sequential applications for mite control. Max 2 applications per crop. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Western flower thrips (Frankliniella occidentalis) — Suppression only",
          pestList: ["Western Flower Thrips", "WFT", "Frankliniella Occidentalis"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Monitor crops and commence applications once local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Tomato thrips (Frankliniella schultzei) — Suppression only",
          pestList: ["Tomato Thrips", "Frankliniella Schultzei"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Monitor crops and commence applications once local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Melon thrips (Thrips palmi) — Suppression only",
          pestList: ["Melon Thrips", "Thrips Palmi"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Monitor crops and commence applications once local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Plague thrips (Thrips imaginis) — Suppression only",
          pestList: ["Plague Thrips", "Thrips Imaginis"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Monitor crops and commence applications once local economic spray thresholds are reached",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Heliothis (Helicoverpa spp.) — Suppression only",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/ha",
          stage: "Apply at egg hatch or very soon after egg hatch to target young larvae",
          note: "SUPPRESSION ONLY. Open field only. Always add a non-ionic surfactant. Max 2 applications per crop; min 7-day retreatment interval. WHP: 1 day harvest; DO NOT use treated crop for stock food."
        }
      ]
    },

  ],  // end crops array

  // ── Agronomic fields ──────────────────────────────────────
  restraints: [
    "DO NOT apply by aircraft.",
    "DO NOT apply if heavy rains or storms likely to cause runoff are forecast within 3 days.",
    "DO NOT apply to bulb vegetables in Mackay/Whitsunday in August to end of December.",
    "DO NOT apply to leafy vegetables in Mackay/Whitsunday in October to end of November.",
    "DO NOT irrigate to the point of water runoff for at least 3 days after application.",
    "DO NOT apply more than 2 applications per crop.",
    "DO NOT apply to nursery crops.",
    "DO NOT apply sequential applications for mite control — rotate with a different group miticide.",
    "Toxic to bees and harmful to bee brood — DO NOT apply from onset of flowering until flowering is complete unless between 2 hours prior to sunset and 8 hours prior to sunrise.",
    "Toxic to beneficial arthropods — not compatible with IPM programs utilising beneficial arthropods.",
    "Very toxic to aquatic life — DO NOT contaminate wetlands or watercourses."
  ],

  withholding: {
    harvest: "Brassica veg, Brassica leafy veg: 3 days. Bulb veg: 7 days. Cucurbits, Fruiting veg: 1 day.",
    grazing: "Brassica veg, Brassica leafy veg, Cucurbits, Fruiting veg: DO NOT use treated crop for stock food."
  },

  compatibility: {
    compatible:   ["ORONDIS Flexi Fungicide", "AMISTAR 250 SC Fungicide", "AGRAL Spray Adjuvant", "ADIGOR Spray Adjuvant", "Maxx Organosilicone Surfactant"],
    incompatible: [],
    notes:        ["Contact Syngenta representative for latest compatibility information on other products."]
  },

  surfactant:     "Vegetables (except bulb veg): Non-ionic adjuvant such as AGRAL Spray Adjuvant at 10 mL/100 L. Bulb vegetables: Maxx Organosilicone Surfactant at 60 mL/100 L.",
  sprayerCleanup: "Triple rinse containers before disposal. Add rinsings to treatment tank."

};
