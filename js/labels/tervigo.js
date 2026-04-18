// ─────────────────────────────────────────────────────────────────────────────
// SYNGENTA TERVIGO® — Label Data
// Nematicide (20 g/L Abamectin, Group 6 Insecticide)
// Source: Syngenta_Tervigo_Label.pdf
// APVMA Approval No: 80620/130037
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['tervigo'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Syngenta Tervigo® Nematicide",

  category:         "Insecticides",
  activeIngredient: "20 g/L Abamectin",
  group:            "Group 6 Insecticide",
  modeOfAction:     "Chloride channel activator. Abamectin binds to glutamate-gated chloride channels in invertebrate nerve and muscle cells, causing paralysis and death of Root-knot nematodes.",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#7e22ce",
  apvma:            "80620/130037",
  company:          "Syngenta",
  labelPdf:         "Source labels/Syngenta_Tervigo_Label.pdf",
  sdsPdf:           "SDS Labels/Syngenta_Tervigo_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Root-knot nematode", "Meloidogyne spp."],
    timing: ["At transplant / planting", "In-crop via drip irrigation"]
  },

  // ── Withholding ──────────────────────────────────────────
  withholding: {
    harvest: "Tomato, Capsicum, Chilli, Eggplant, Cucurbits, Potato, Sweet potato: NOT REQUIRED WHEN USED AS DIRECTED.",
    grazing: "Not applicable — vegetable and root crop uses only."
  },

  // ── Restraints ──────────────────────────────────────────
  restraints: [
    "DO NOT apply by aircraft.",
    "DO NOT apply using hand held equipment (including low & high pressure hand wand / gun).",
    "DO NOT apply using spraying equipment carried on the back of the user.",
    "DO NOT apply to waterlogged soils.",
    "DO NOT apply if heavy rains or storms that are likely to cause runoff are forecast within 3 days.",
    "DO NOT irrigate to the point of runoff for at least 3 days after application.",
    "DO NOT allow bystanders to come into contact with the spray cloud.",
    "DO NOT apply unless the wind speed is between 3 and 20 kilometres per hour at the application site during the time of application.",
    "DO NOT apply if there are hazardous surface temperature inversion conditions present at the application site during the time of application.",
    "DO NOT apply by a boom sprayer unless boom height is no higher than 0.5 m and spray droplets not smaller than COARSE spray droplet size category.",
    "DO NOT apply more than five (5) applications per crop.",
    "DO NOT manually transplant fruiting vegetable and cucurbit seedlings or sweet potato runners after initial treatment unless wearing chemical resistant gloves.",
    "DO NOT use TERVIGO while bees are actively foraging — highly toxic to bees.",
    "DO NOT contaminate streams, rivers, or watercourses with the chemical or used containers — very toxic to aquatic life."
  ],

  // ── Surfactant / Mixing ──────────────────────────────────────────
  surfactant: "No additional surfactant required. TERVIGO mixes completely with water and should only be mixed with compatible fertilisers as it has been formulated with an iron chelate.",

  // ── Sprayer Cleanup ──────────────────────────────────────────
  sprayerCleanup: "Triple rinse containers before disposal. Add rinsings to the spray tank. For drip/trickle injection systems, flush the system with clean water at the end of the application cycle.",

  // ── Compatibility ──────────────────────────────────────────
  compatibility: "As formulations of other manufacturer's products are beyond the control of Syngenta Australia Pty Ltd, and water quality varies with location, all mixtures should be tested prior to mixing commercial quantities. Check compatibility prior to use and contact your local Syngenta representative for further information.",

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Fruiting Vegetables (non-cucurbit) — Planting Hole Drench ──
    {
      crop: "Fruiting Vegetables — Planting Hole Drench (Tomato, Capsicum, Chilli, Eggplant)",
      cropList: ["Tomato", "Capsicum", "Chilli", "Eggplant", "Fruiting Vegetables"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.) — Planting hole drench",
          pestList: ["Root Knot Nematode", "Meloidogyne spp."],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "mL/1000 plants",
          stage: "At transplanting",
          note: "Apply TERVIGO® as a planting hole drench via a waterwheel at transplanting or via a trickle irrigation system immediately following transplanting. Apply in a minimum total diluted volume of 50 mL per seedling directly at the base of transplanted seedlings or into the planting hole immediately before transplanting. Actual total volume will vary depending on equipment used, pre-existing soil moisture levels and soil type but should be sufficient to ensure uniform application and distribution."
        }
      ]
    },

    // ── 2. Fruiting Vegetables (non-cucurbit) — Drip/Trickle Irrigation ──
    {
      crop: "Fruiting Vegetables — Drip/Trickle Irrigation (Tomato, Capsicum, Chilli, Eggplant)",
      cropList: ["Tomato", "Capsicum", "Chilli", "Eggplant", "Fruiting Vegetables"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.) — Initial drip application at transplant",
          pestList: ["Root Knot Nematode", "Meloidogyne spp."],
          states: ["All"],
          rate: "120",
          rateMax: "120",
          unit: "mL/100m row",
          stage: "Immediately after transplanting",
          note: "Apply TERVIGO® via a drip/trickle irrigation system immediately following transplanting. Product placement is important and trickle irrigation should be positioned around the plant roots. TERVIGO® application through drip/trickle irrigation should occur in the second quarter of the irrigation cycle after the soil has been partially wetted up."
        },
        {
          weed: "Root-knot nematode (Meloidogyne spp.) — Follow-up in-crop drip applications",
          pestList: ["Root Knot Nematode", "Meloidogyne spp."],
          states: ["All"],
          rate: "60",
          rateMax: "120",
          unit: "mL/100m row",
          stage: "14-day intervals after initial treatment",
          note: "Follow initial transplant treatment with up to 4 in-crop applications via the drip/trickle irrigation system of 60 to 120 mL/100 metres of row at 14 day intervals. Use more applications and the high rate for longer growing cycles or under moderate to high root-knot nematode pressure where nematode counts or paddock history indicate that the population is above economic threshold and yield loss is expected. DO NOT apply more than five (5) applications per crop."
        }
      ]
    },

    // ── 3. Cucurbits ──
    {
      crop: "Cucurbits (Cucumber, Zucchini, Rockmelon, Melon, Watermelon, Pumpkin, Asian melon)",
      cropList: ["Cucumber", "Zucchini", "Rockmelon", "Melon", "Watermelon", "Pumpkin", "Asian melon", "Cucurbits"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.) — Drip/trickle irrigation",
          pestList: ["Root Knot Nematode", "Meloidogyne spp."],
          states: ["All"],
          rate: "60",
          rateMax: "120",
          unit: "mL/100m row",
          stage: "Up to 4 applications at 14-day intervals",
          note: "Follow initial transplant treatment with up to 4 in crop applications via the drip/trickle irrigation system of 60 to 120 mL/100 metres of row at 14 day intervals. Use more applications and the high rate for longer growing cycles or under moderate to high root-knot nematode pressure where nematode counts, or paddock history indicate that the population is above economic threshold and yield loss is expected. DO NOT apply more than five (5) applications per crop. Refer to Mixing and Application under General Instructions for detailed information on application methods."
        }
      ]
    },

    // ── 4. Potato — In-furrow at planting ──
    {
      crop: "Potato — In-furrow at planting",
      cropList: ["Potato", "Potatoes"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.) — In-furrow spray",
          pestList: ["Root Knot Nematode", "Meloidogyne spp."],
          states: ["All"],
          rate: "60",
          rateMax: "60",
          unit: "mL/100m row",
          stage: "At planting, in-furrow",
          note: "Apply as an in-furrow spray at planting. Mount the nozzle so the spray is directed into the furrow at the seed as a 15-20 cm band applied just before the seed is covered. Alternatively, use a two-nozzle system spraying the furrow prior to seed drop and after it has dropped just prior to covering. Apply TERVIGO® in 1 – 2 L of water/100 m of row. Ensure the water volume applied does not wash off any previously applied seed treatments. DO NOT apply TERVIGO® if conditions or poor seed quality favour seed piece breakdown (eg high soil temperature and moisture, high relative humidity, light textured soils, insect damaged seed) as the addition of any moisture to the seed may enhance the problem."
        }
      ]
    },

    // ── 5. Potato — Banded follow-up ──
    {
      crop: "Potato — Banded follow-up spray",
      cropList: ["Potato", "Potatoes"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.) — Banded over-row spray",
          pestList: ["Root Knot Nematode", "Meloidogyne spp."],
          states: ["All"],
          rate: "60",
          rateMax: "60",
          unit: "mL/100m row",
          stage: "14 to 30 days after planting",
          note: "Apply a second application as a banded spray over the row between 14 to 30 days after planting, maximising contact with the soil. Apply sufficient overhead irrigation immediately after treatment (whilst avoiding surface runoff), to allow the product to reach the root zone. Banded over-the-row application after planting requires boom height no higher than 0.5 m, COARSE droplet size, and adherence to mandatory downwind buffer zones (145 m natural aquatic, 60 m pollinator, 25 m livestock)."
        }
      ]
    },

    // ── 6. Sweet Potato ──
    {
      crop: "Sweet Potato — Drip/trickle irrigation",
      cropList: ["Sweet potato", "Sweet potatoes"],
      weeds: [
        {
          weed: "Root-knot nematode (Meloidogyne spp.) — Initial transplant treatment",
          pestList: ["Root Knot Nematode", "Meloidogyne spp."],
          states: ["All"],
          rate: "120",
          rateMax: "120",
          unit: "mL/100m row",
          stage: "Within 3 days after transplanting",
          note: "Apply TERVIGO® via a drip/trickle irrigation system no later than 3-days after transplanting. Product placement is important, and the drip/trickle irrigation tape and drip points should be positioned near the transplanted runner. The TERVIGO® application through drip/trickle irrigation should occur in the second quarter of the irrigation cycle after the soil has been partially wetted up."
        },
        {
          weed: "Root-knot nematode (Meloidogyne spp.) — Follow-up drip applications",
          pestList: ["Root Knot Nematode", "Meloidogyne spp."],
          states: ["All"],
          rate: "60",
          rateMax: "120",
          unit: "mL/100m row",
          stage: "14-day intervals after initial treatment",
          note: "Follow the initial transplant treatment with up to 4 applications via the drip/trickle irrigation system of 60 to 120 mL/100 meters of row at 14-day intervals. Use more applications and the high rate for longer growing cycles or under moderate to high root-knot nematode pressure where nematode counts, or paddock history indicate that the population is above economic threshold and yield loss is expected. DO NOT apply more than five (5) applications per crop."
        }
      ]
    }
  ],

  // ── Resistance Management ──────────────────────────────────────────
  resistanceManagement: "GROUP 6 INSECTICIDE — For insecticide resistance management TERVIGO® Nematicide is a Group 6 insecticide. Some naturally occurring nematode biotypes resistant to TERVIGO® and other Group 6 insecticides may exist through normal genetic variability in any nematode population. The resistant individuals can eventually dominate the nematode population if TERVIGO® and other Group 6 insecticides are used repeatedly. The effectiveness of TERVIGO® on resistant individuals could be significantly reduced.",

  // ── Storage ──────────────────────────────────────────
  storage: "Store in the closed original container in a cool, well ventilated area. DO NOT store for prolonged periods in direct sunlight."
};
