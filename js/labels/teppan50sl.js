// ─────────────────────────────────────────────────────────
// Nufarm Teppan 50 SL Insecticide — Label Data
// Group 28 Insecticide | Soluble Concentrate
// Source: Nufarm_Teppan_Label.pdf
// APVMA Approval No: 68689/142978
// Nufarm Australia Limited (manufactured by ISK)
// ─────────────────────────────────────────────────────────
productDatabase['teppan50sl'] = {

  name:             "Nufarm Teppan 50 SL Insecticide",
  company: "Nufarm",


  category:         "Insecticides",
  activeIngredient: "50 g/L Cyclaniliprole",
  group:            "Group 28 Insecticide",
  modeOfAction:     "Ryanodine receptor modulator — controls lepidoptera, hemiptera and coleoptera in tree crops and vegetables",
  formulation:      "Soluble Concentrate (SL)",
  color:            "#831843",
  apvma:            "68689",
  labelPdf:         "Source labels/Nufarm_Teppan_Label.pdf",
  sdsPdf:           "SDS Labels/TEPPAN_50SL_INSECTICIDE.pdf",
  signalHeading:    "Poison",

  classification: {
    type: "Insecticide",
    target: ["Codling Moth", "Caterpillars", "Fruit Spotting Bugs", "Weevils", "Beetles", "Diamondback Moth"],
    timing: ["Curative"]
  },

  crops: [
    // ── TREE CROPS ──────────────────────────────────────
    {
      crop: "Pome Fruit (Apples, Pears)",
      cropList: ["Pome Fruit", "Apples", "Pears"],
      weeds: [
        {
          weed: "Codling Moth",
          pestList: ["Codling Moth"],
          states: ["All"],
          rate: "60",
          rateMax: "80",
          unit: "mL/100L",
          stage: "Apply just prior to or at beginning of egg hatch. Use trap catches and degree day timing.",
          note: "WHP: 7 days. Max 3 applications/crop with 14 day minimum interval. Use high rate for heavy infestations. Rotate to non-Group 28 between codling moth generations."
        },
        {
          weed: "Apple Looper, Light Brown Apple Moth",
          pestList: ["Apple Looper", "Light Brown Apple Moth"],
          states: ["All"],
          rate: "60",
          unit: "mL/100L",
          stage: "Thorough coverage essential. Apply 1500–2000 L water/ha.",
          note: "WHP: 7 days. Max 3 applications/crop with 14 day minimum interval."
        }
      ]
    },
    {
      crop: "Macadamias",
      cropList: ["Macadamias"],
      weeds: [
        {
          weed: "Macadamia Seed Weevil, Fruit Spotting Bug, Banana Spotting Bug",
          pestList: ["Macadamia Seed Weevil", "Fruit Spotting Bug", "Banana Spotting Bug"],
          states: ["All"],
          rate: "100",
          unit: "mL/100L",
          stage: "Seed weevil: commence after petal fall until shell hardening. Spotting bugs: apply from early nut set at economic threshold.",
          note: "WHP: 14 days. Max 3 applications/crop with 14 day minimum interval. Apply with non-ionic adjuvant such as Activator at 50 mL/100L. Alternate to non-Group 28 between each application."
        },
        {
          weed: "Macadamia Nut Borer",
          pestList: ["Macadamia Nut Borer"],
          states: ["All"],
          rate: "80",
          unit: "mL/100L",
          stage: "Target eggs and newly hatched larvae at economic threshold. Clean up fallen nuts to reduce carryover.",
          note: "WHP: 14 days. Max 3 applications/crop with 14 day minimum interval. Thorough coverage critical — apply to point of runoff."
        }
      ]
    },
    {
      crop: "Avocado",
      cropList: ["Avocado", "Avocados"],
      weeds: [
        {
          weed: "Fruit Spotting Bug, Banana Spotting Bug",
          pestList: ["Fruit Spotting Bug", "Banana Spotting Bug"],
          states: ["All"],
          rate: "100",
          unit: "mL/100L",
          stage: "Monitor and apply at economic threshold from after flowering. Apply to point of runoff.",
          note: "WHP: 14 days. Max 3 applications/crop with 14 day minimum interval. Apply with non-ionic adjuvant such as Activator at 50 mL/100L. Alternate to non-Group 28 between each application."
        }
      ]
    },
    {
      crop: "Almonds",
      cropList: ["Almonds"],
      weeds: [
        {
          weed: "Carob Moth, Carpophilus Beetle",
          pestList: ["Carob Moth", "Carpophilus Beetle"],
          states: ["All"],
          rate: "80",
          unit: "mL/100L",
          stage: "Carob moth: 1st gen Sept–Nov; 2nd gen at early hull split (1–5%). Carpophilus: apply at 10–50% hull split before shell split.",
          note: "WHP: 7 days. Max 3 applications/crop with 14 day minimum interval. Apply with non-ionic adjuvant such as Activator at 50 mL/100L. Practice good IPM — shake mummy nuts off during winter."
        }
      ]
    },
    {
      crop: "Walnuts",
      cropList: ["Walnuts"],
      weeds: [
        {
          weed: "Codling Moth, Carob Moth, Carpophilus Beetle",
          pestList: ["Codling Moth", "Carob Moth", "Carpophilus Beetle"],
          states: ["All"],
          rate: "80",
          unit: "mL/100L",
          stage: "Codling moth: apply at beginning of egg hatch. Carob moth: 1st gen Sept–Nov, 2nd gen at hull split. Carpophilus: at 10–50% hull split.",
          note: "WHP: 7 days. Max 3 applications/crop with 14 day minimum interval. Apply with non-ionic adjuvant such as Activator at 50 mL/100L. Rotate to non-Group 28 between codling moth generations."
        }
      ]
    },
    // ── VEGETABLE CROPS ─────────────────────────────────
    {
      crop: "Fruiting Vegetables — Protected Cropping (excl. Cucurbits)",
      cropList: ["Fruiting Vegetables", "Capsicum", "Tomato", "Eggplant", "Protected Cropping"],
      weeds: [
        {
          weed: "Heliothis, Armyworms",
          pestList: ["Heliothis", "Helicoverpa", "Armyworms"],
          states: ["All"],
          rate: "80",
          unit: "mL/100L",
          rateMax: "800",
          stage: "Protected cropping only. Re-entry: 4 hours.",
          note: "WHP: 1 day. Max 3 applications/crop with 14 day minimum interval. Also 800 mL/ha boom rate."
        }
      ]
    },
    {
      crop: "Brassica Vegetables (Broccoli, Brussels Sprouts, Cabbage, Cauliflower)",
      cropList: ["Brassica Vegetables", "Broccoli", "Brussels Sprouts", "Cabbage", "Cauliflower"],
      weeds: [
        {
          weed: "Diamondback Moth, Cluster Caterpillar, Cabbage Cluster Caterpillar, Cabbage White, Cabbage Centre Grub",
          pestList: ["Diamondback Moth", "Cluster Caterpillar", "Cabbage Cluster Caterpillar", "Cabbage White", "Cabbage Centre Grub"],
          states: ["All"],
          rate: "40",
          unit: "mL/100L",
          stage: "Target newly hatched eggs and early larval stages at threshold. Also 400 mL/ha boom rate.",
          note: "WHP: 1 day. Max 3 applications/season with 7 day minimum interval. Apply with non-ionic adjuvant such as Activator at 50 mL/100L. Use successive applications within a single pest generation only."
        }
      ]
    },
    {
      crop: "Brassica Leafy Vegetables (Chinese Cabbage, Kale, Bok Choy, Pak-choi, Tat Soy, Mibuna)",
      cropList: ["Brassica Leafy Vegetables", "Chinese Cabbage", "Kale", "Bok Choy", "Pak-choi", "Tat Soy", "Celery Mustard", "Mibuna"],
      weeds: [
        {
          weed: "Diamondback Moth, Cluster Caterpillar, Cabbage Cluster Caterpillar, Cabbage White, Cabbage Centre Grub",
          pestList: ["Diamondback Moth", "Cluster Caterpillar", "Cabbage Cluster Caterpillar", "Cabbage White", "Cabbage Centre Grub"],
          states: ["All"],
          rate: "40",
          unit: "mL/100L",
          stage: "Target newly hatched eggs and early larval stages at threshold. Also 400 mL/ha boom rate.",
          note: "WHP: 1 day. Max 3 applications/season with 7 day minimum interval. Apply with non-ionic adjuvant such as Activator at 50 mL/100L. DO NOT use on leafy vegetables in protected cropping."
        }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by aircraft",
    "DO NOT apply if heavy rains or storms forecast within 3 days",
    "DO NOT irrigate to point of runoff for 3 days after application",
    "DO NOT use on leafy vegetables in protected cropping",
    "DO NOT apply to pome and nut trees by boom sprayer",
    "Toxic to bees — DO NOT apply to orchard crops from onset of flowering until complete",
    "Very toxic to aquatic life"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Contact Nufarm for compatibility information with other products"]
  },

  withholding: {
    harvest: "Avocados, Macadamias: 14 days. Pome fruit, Almonds, Walnuts: 7 days. Brassica vegetables, Brassica leafy vegetables, Fruiting vegetables (protected cropping): 1 day.",
    grazing: "Tree crops: DO NOT graze treated orchards. Vegetables: DO NOT graze treated crops or cut for stockfood."
  },

  surfactant:     "Apply with non-ionic adjuvant such as Activator at 50 mL/100L for best results (macadamias, avocados, almonds, walnuts, brassicas).",
  sprayerCleanup: "Rinse sprayer thoroughly with clean water after each use."
};
