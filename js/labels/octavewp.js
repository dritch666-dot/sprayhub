// ─────────────────────────────────────────────────────────
// OCTAVE WP FUNGICIDE — Label Data
// Group 3 (DMI/Imidazole) | Wettable Powder (WP)
// Source: FMC_OctaveWP_Label.pdf
// APVMA Approval No: 30485
// FMC Australasia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['octavewp'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Octave WP Fungicide",
  company: "AMVAC",

  category:         "Fungicides",
  activeIngredient: "462 g/kg prochloraz (as the manganese chloride complex)",
  group:            "Group 3 (Imidazole)",
  modeOfAction:     "Inhibits ergosterol biosynthesis (demethylation inhibitor)",
  formulation:      "Wettable Powder (WP)",
  color:            "#78350f",
  apvma:            "30485",
  labelPdf: "Source labels/Fmc_Australasia_Octave_Wp_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/OCTAVE_50WP.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Anthracnose", "Blossom Blight", "Colletotrichum", "Dry Bubble", "Wet Bubble",
             "Cobweb Disease", "Damping-off", "Crown Rot", "Stolon Rot", "Botrytis"],
    timing: ["Preventative", "Curative"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Lettuce — Field Grown (Closed Head Varieties) and Nursery Stock Prior to Transplantation",
      cropList: ["Lettuce","Field Grown  And Nursery Stock Prior To Transplantation"],
      weeds: [
        {
          weed: "Anthracnose (Microdochium panattonianum)",
          pestList: ["Anthracnose"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply as foliar spray on 7–14 day schedule",
          note: "Rate: 50 g/100L applied in 800 L water/ha (i.e. 400 g/ha high volume). WHP: 7 days. Use shorter interval when continual wet, cloudy conditions favour disease development. Closed head varieties only."
        }
      ]
    },

    {
      crop: "Mangoes",
      cropList: ["Mangoes"],
      weeds: [
        {
          weed: "Anthracnose, Blossom blight (Colletotrichum gloeosporioides var. minor)",
          pestList: ["Anthracnose","Blossom Blight"],
          states: ["Qld", "NSW", "WA"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "3–4 week schedule throughout the flowering period",
          note: "Dilute spraying: 100 g/100L + 200 g/100L of an 800 g/kg formulation of mancozeb (tank mix required). Concentrate spraying: refer to General Instructions section for both Octave and mancozeb rates. WHP: not required when used as directed. Use shorter interval when weather conditions favour disease. Ensure thorough coverage of blossoms. For concentrate spraying DO NOT apply Octave at more than 500 g/100L (concentration factor greater than 5X). DO NOT allow spray mix to stand overnight."
        }
      ]
    },

    {
      crop: "Mushrooms",
      cropList: ["Mushrooms"],
      weeds: [
        {
          weed: "Dry bubble (Verticillium fungicola var. fungicola), Wet bubble (Mycogone perniciosa), Cobweb disease (Hypomyces rosellus)",
          pestList: ["Dry Bubble","Wet Bubble","Cobweb Disease"],
          states: ["All"],
          rate: "24",
          rateMax: "24",
          unit: "g/100L",
          stage: "Incorporation into peat prior to casing OR spray application after harvest of first flush",
          note: "Incorporation: 24 g/0.3 m3 of peat. Mix with water used to wet peat and incorporate prior to casing. Spray application: 3 g/m2 of casing surface. Spray the casing immediately after harvest of first flush if disease becomes a problem. Use adequate water to thoroughly wet the casing. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Proteas",
      cropList: ["Proteas"],
      weeds: [
        {
          weed: "Damping-off and Dieback (Colletotrichum spp.)",
          pestList: ["Damping-Off And Dieback"],
          states: ["NSW", "Qld", "Vic", "SA", "WA", "Tas"],
          rate: "300",
          rateMax: "300",
          unit: "g/100L",
          stage: "Commence spraying early Spring; apply at 10–14 day intervals",
          note: "Rate: 300 g/100L. WHP: not required when used as directed. Use shorter interval when conditions favour disease. Spray the entire plant with sufficient volume to ensure thorough coverage (just before point of run-off). NOT registered in ACT or NT."
        }
      ]
    },

    {
      crop: "Strawberries — Non-Fruiting Runners Only",
      cropList: ["Strawberries","Non-Fruiting Runners Only"],
      weeds: [
        {
          weed: "Colletotrichum crown rot, Stolon rot (Colletotrichum gloeosporioides)",
          pestList: ["Colletotrichum Crown Rot","Stolon Rot"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Apply as foliar spray on 7–14 day schedule",
          note: "Rate: 100 g/100L. WHP: not required when used as directed. Use shorter interval when continual wet, cloudy conditions favour disease. Ensure thorough spray coverage on both leaf surfaces and into the crown of the plants. NON-FRUITING STRAWBERRY RUNNERS ONLY — not for use on fruiting strawberry crops."
        }
      ]
    },

    {
      crop: "Violas",
      cropList: ["Violas"],
      weeds: [
        {
          weed: "Anthracnose (Colletotrichum violae-tricoloris), Spot anthracnose (Sphaceloma violae)",
          pestList: ["Anthracnose","Spot Anthracnose"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "g/100L",
          stage: "Spray at 7–28 day intervals",
          note: "Rate: 300 g/100L. WHP: not required when used as directed. Use shorter intervals when conditions favour disease development."
        }
      ]
    }

  ,
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      permitNumber: "PER80369",
      weeds: [
          { weed: "Anthracnose, pepper spot", pestList: ["Anthracnose", "Pepper Spot"], states: ["All"], rate: "100", rateMax: "100", unit: "g/100L", rateText: "100g/100L + 213g/100L of Mancozeb", stage: "Apply as per permit directions", note: "WHP: 28 days. consult permit" }
      ]
    }
    ,

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER81131: PDF not available ──
// PER81131: PDF not available

// ── PER83212: Custard Apples & Annona Species — Anthracnose ──
{
  crop: "Custard Apples & Annona Species — Anthracnose (PER83212)",
  cropList: ["Custard Apple", "Annona"],
  permitNumber: "PER83212",
  weeds: [
    {
      weed: "Anthracnose (Colletotrichum gloeosporioides & other Annona species)",
      pestList: ["Fungal Diseases", "Anthracnose"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "100",
      rateMax: "100",
      unit: "g/100L",
      stage: "During flowering and early fruit set (BBCH 71 max)",
      note: "PERMIT PER83212 (exp. 31/01/2028). Version 3. Prochloraz 462 g/kg product. Apply at 21–28-day intervals; reduce to 14 days in prolonged wet weather. DO NOT apply more than 3 applications per crop. DO NOT apply more than 2 consecutive sprays before changing MoA group. WHP: Not required (harvest). Caution: Prochloraz may cause tainting of certain commodities; test small area first."
    }
  ]
}

,

// ── PER81131: Lettuce — Anthracnose ──
{
  crop: "Lettuce (Open-Head) — Anthracnose (PER81131)",
  cropList: ["Lettuce", "Leafy Lettuce"],
  permitNumber: "PER81131",
  weeds: [
    {
      weed: "Anthracnose (Microdochium panattonianum)",
      pestList: ["Fungal Diseases", "Anthracnose"],
      states: ["NSW", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
      rate: "200",
      rateMax: "200",
      unit: "g/ha",
      stage: "Foliar spray in 800 L/ha water. Apply near to but below point of run-off.",
      note: "PERMIT PER81131 (exp. 31/12/2028). Octave WP (462 g/kg prochloraz). Max 4 apps per crop, max 2 consecutive before rotating fungicide group. Retreatment interval 7-14 days. Field only. Do NOT treat for export. Potential taste taint risk — trial small area first. WHP: 7 days harvest. Do not graze."
    }
  ]
},

],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "DO NOT allow the spray mix to stand overnight.",
    "DO NOT apply under weather conditions or from spraying equipment which could be expected to cause spray to drift onto adjacent crops, crop lands, pastures or livestock.",
    "DO NOT apply to non-fruiting strawberry runners at a concentration factor greater than 5X.",
    "DO NOT feed treated crop to livestock or allow livestock to graze treated areas."
  ],

  compatibility: {
    compatible:   ["Dimethoate, mancozeb, carbaryl WP, demeton-S-methyl, methomyl, fenbutatin oxide, methiocarb and dicofol."],
    incompatible: [],
    note:        ["Mangoes: tank mix with mancozeb (800 g/kg formulation at 200 g/100L) is required. Agitate while spraying and if suspension is allowed to stand."]
  },

  withholding: {
    harvest: "Lettuce (closed head varieties): 7 days. Mangoes, Mushrooms, Proteas, Strawberry runners, Violas: not required when used as directed.",
    grazing: "DO NOT feed treated crop to livestock or allow livestock to graze treated areas."
  },

  surfactant:     "Not specified. Ensure thorough spray coverage. Continue to agitate while spraying.",
  sprayerCleanup: "Single-rinse or shake remainder into spray tank. DO NOT burn empty containers."

};
