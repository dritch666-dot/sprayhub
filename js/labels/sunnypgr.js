// ─────────────────────────────────────────────────────────
// SUNNY® PLANT GROWTH REGULATOR — Label Data
// Plant Growth Regulator (PGR) | Emulsifiable Concentrate (EC)
// Source: Sumitomo_Sunny_Label.pdf
// APVMA Approval No: 50806
// Sumitomo Chemical Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['sunnypgr'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Sunny® Plant Growth Regulator",
  company: "Brandt",

  category:         "Plant Growth Regulators",
  activeIngredient: "50 g/L uniconazole-P",
  group:            "Plant Growth Regulator (Triazole)",
  modeOfAction:     "Inhibits gibberellin biosynthesis — reduces vegetative growth and enhances fruit shape and size",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#831843",
  apvma:            "50806",
  labelPdf:         "Source labels/Sumitomo_Sunny_Label.pdf",
  sdsPdf:           "SDS Labels/SUNNY.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Plant Growth Regulator",
    target: ["Avocado fruit shape enhancement", "Avocado fruit size increase", "Vegetative growth reduction"],
    timing: ["At mid-bloom — when 50% of flowers on tree have opened"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Avocados — Fruit Shape, Size and Vegetative Growth",
      cropList: ["Avocados","Fruit Shape","Size And Vegetative Growth"],
      weeds: [
        {
          weed: "Enhances fruit shape, increases average fruit size, reduces vegetative growth",
          pestList: ["Enhances Fruit Shape","Increases Average Fruit Size","Reduces Vegetative Growth"],
          states: ["All"],
          rate: "0.5",
          rateMax: "1",
          unit: "mL/100L",
          stage: "Apply at mid-bloom — when 50% of flowers on tree have opened. DO NOT apply when fewer than 50% or more than 65% of flowers have opened",
          note: "Rate: 0.5 mL/100L with non-ionic wetting agent at 0.05%. Apply during morning or ideally late afternoon, in early flowering period under windless conditions. Add non-ionic wetting agent (e.g. Agral) and Balance NP Buffer if required to adjust pH to 4.5–5.5. Dilute spraying: 65% of spray volume aimed at top 1/3, 25% at centre 1/3, 10% at bottom 1/3 of tree. Apply by dilute or concentrate spraying equipment. WHP: DO NOT harvest fruit for 14 days after application. DO NOT apply to trees that have shed more than 15% of their leaves when flowering — significant Phytophthora infection likely. DO NOT apply to trees under stress from disease, lack of moisture or nutritional deficiencies. Harvest SUNNY-treated trees as soon as fruit reaches maturity — hanging fruit continues to accumulate oil to detriment of next season. Maintain good orchard management and health to minimise stress. DO NOT apply in alkaline water or hard water (>1000 mg/kg solutes) — use buffer agent to reduce pH to 4.5–5.5."
        }
      ]
    }

  ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "DO NOT use on avocado trees that are under stress from disease, lack of moisture or nutritional deficiencies.",
    "DO NOT apply to trees that have shed more than 15% of their leaves when flowering (significant Phytophthora infection likely).",
    "DO NOT apply when fewer than 50% or more than 65% of flowers on the tree have opened.",
    "DO NOT apply in alkaline water or hard water (>1000 mg/kg solutes) — use a buffer agent to reduce pH to 4.5–5.5.",
    "DO NOT allow spray mixture to stand for prolonged periods.",
    "DO NOT use a concentrate rate higher than that specified in the Critical Comments."
  ],

  compatibility: {
    compatible:   ["Non-ionic wetting agent at 0.05% (e.g. Agral).", "Balance NP Buffer (reduces water pH and softens water; also acts as a foliar fertilizer)."],
    incompatible: [],
    notes:        ["Shake container well before use. Half fill spray tank with clean water, add SUNNY while constantly agitating, then add wetting agent and if required Balance NP Buffer. Fill tank to required level with water while agitating. Vigorous agitation required during mixing and spraying.", "For concentrate spraying: refer to Application section — dilute spray volume needed to calculate concentration factor. Maximum concentration factor as specified in Critical Comments."]
  },

  withholding: {
    harvest: "DO NOT harvest fruit for 14 days after application.",
    grazing:  "Not applicable."
  },

  surfactant:     "Non-ionic wetting agent at 0.05% (general rate: 1 L/1000L water) is required — e.g. Agral.",
  sprayerCleanup: "Triple or preferably pressure rinse containers before disposal. Add rinsings to spray tank."

};
