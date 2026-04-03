// ─────────────────────────────────────────────────────────
// Avatar® eVo Insecticide — Label Data
// Group 22A Insecticide (Indoxacarb)
// Source: FMC_AvatarEvo_Label.pdf
// APVMA Approval No: 86106
// FMC Australasia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['avatarevo'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Avatar® eVo Insecticide",

  category:         "Insecticides",
  activeIngredient: "303 g/kg Indoxacarb (equivalent to 300 g/kg active S-isomer)",
  group:            "Group 22A Insecticide",
  modeOfAction:     "Oxadiazine insecticide — primarily a larvicide active on Lepidopteran and other insect pests. Active ingredient enters insects by ingestion and cuticle penetration; insects cease feeding and die 3–5 days later.",
  formulation:      "Water-Dispersible Granule (WG)",
  color:            "#475569",
  apvma:            "86106",
  company: "BASF",
  labelPdf:         "Source labels/FMC_AvatarEvo_Label.pdf",
  sdsPdf:           "SDS Labels/FMC_AvatarEvo_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Lepidoptera", "Weevils", "Earwigs"],
    timing: ["Foliar"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ═══ VEGETABLE CROPS ═══

    // ── Asparagus ─────────────────────────────────────────────
    {
      crop: "Asparagus",
      cropList: ["Asparagus"],
      weeds: [
        {
          weed: "Garden weevil (Phlyctinus callosus)",
          pestList: ["Garden Weevil", "Phlyctinus Callosus"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Apply to crop carrying fern leaf only, as a post-harvest application within 8 weeks following end of harvest",
          note: "Also 17 g/100 L dilute. Monitor weevil emergence; treat early in emergence stages. Thorough coverage essential. Max 2 applications per season; min 10-day retreatment interval. DO NOT use for more than 2 consecutive seasons. WHP: not required when used as directed."
        }
      ]
    },

    // ── Brassica Vegetables ───────────────────────────────────
    {
      crop: "Brassica Vegetables",
      cropList: ["Broccoli", "Brussels Sprouts", "Cabbages", "Cauliflower"],
      weeds: [
        {
          weed: "Cabbage white butterfly (Pieris rapae)",
          pestList: ["Cabbage White Butterfly", "Pieris Rapae"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Apply as eggs and larvae reach threshold numbers",
          note: "Use in accordance with AIRAC IRM strategy. Thorough coverage essential; adjust water volume 200–1000 L/ha to crop stage. Add non-ionic surfactant at 75 g active/100 L (e.g. Agral 600 @ 125 mL/100 L or Citowett @ 75 mL/100 L). Contact local Dept of Agriculture for DBM management advice. Max 4 applications per crop; min 7-day retreatment interval. Recommended up to 3 sequential applications then rotate mode of action. Pupae bust after harvest for Helicoverpa IRM. Cabbage: closed head varieties only. WHP: 7 days."
        },
        {
          weed: "Cotton bollworm (Helicoverpa armigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Apply as eggs and larvae reach threshold numbers",
          note: "Use in accordance with AIRAC IRM strategy. Thorough coverage essential; adjust water volume 200–1000 L/ha. Add surfactant at 75 g active/100 L for brassicas. Max 4 applications per crop; min 7-day retreatment interval. Pupae bust after harvest for Helicoverpa IRM. WHP: 7 days."
        },
        {
          weed: "Native budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Apply as eggs and larvae reach threshold numbers",
          note: "Use in accordance with AIRAC IRM strategy. Add surfactant at 75 g active/100 L. Max 4 applications per crop; min 7-day retreatment interval. WHP: 7 days."
        },
        {
          weed: "Cluster caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "g/ha",
          stage: "Apply as eggs and larvae reach threshold numbers",
          note: "Higher rate for cluster caterpillar. Add surfactant at 75 g active/100 L. Max 4 applications per crop; min 7-day retreatment interval. WHP: 7 days."
        },
        {
          weed: "Cabbage centre grub (Hellula hydralis)",
          pestList: ["Cabbage Centre Grub", "Hellula Hydralis"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "g/ha",
          stage: "Time sprays early to ensure larvae are exposed before they become entrenched in protected feeding sites",
          note: "Add surfactant at 75 g active/100 L. Max 4 applications per crop; min 7-day retreatment interval. WHP: 7 days."
        },
        {
          weed: "Diamondback moth (Plutella xylostella)",
          pestList: ["Diamondback Moth", "Plutella Xylostella"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "g/ha",
          stage: "Apply as eggs and larvae reach threshold numbers; contact local Dept of Agriculture for DBM management",
          note: "Use in accordance with AIRAC IRM strategy. Add surfactant at 75 g active/100 L. Max 4 applications per crop; min 7-day retreatment interval. WHP: 7 days."
        }
      ]
    },

    // ── Leafy Vegetables ──────────────────────────────────────
    {
      crop: "Leafy Vegetables",
      cropList: ["Chicory", "Cress", "Endive", "Fennel", "Kale", "Lettuce", "Mustard", "Silverbeet", "Spinach", "Bok Choy", "Choy Sum", "Chinese Cabbage"],
      weeds: [
        {
          weed: "Cotton bollworm (Helicoverpa armigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Scout crops regularly; target sprays against eggs and newly hatched larvae before they become entrenched",
          note: "Adjust water volume 200–1000 L/ha to crop stage. Add non-ionic surfactant at 15 g active/100 L (e.g. Agral 600 @ 25 mL/100 L or Citowett @ 15 mL/100 L). Max 3 applications per crop; min 7-day retreatment interval. Rotate to alternative mode of action after treatment window. Pupae bust after harvest for Helicoverpa IRM. WHP: 3 days."
        },
        {
          weed: "Native budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Add surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. WHP: 3 days."
        },
        {
          weed: "Lucerne leafroller (Merophyas divulsana)",
          pestList: ["Lucerne Leafroller", "Merophyas Divulsana"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Add surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. WHP: 3 days."
        }
      ]
    },

    // ── Fruiting Vegetables (Solanaceae) ──────────────────────
    {
      crop: "Fruiting Vegetables — Helicoverpa / Soybean Looper / Cluster Caterpillar",
      cropList: ["Capsicums", "Eggplant", "Peppers", "Tomatoes"],
      weeds: [
        {
          weed: "Cotton bollworm (Helicoverpa armigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera"],
          states: ["All"],
          rate: "170",
          rateMax: "250",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae before they become entrenched",
          note: "Also 17 g/100 L dilute. Use 250 g/ha during heavy insect pressure or aerial application (tomatoes only). Add non-ionic surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. Tomatoes: field, trellis and protected cropping. WHP: 3 days (capsicum, eggplant, peppers, tomatoes field/trellis)."
        },
        {
          weed: "Native budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "170",
          rateMax: "250",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Use 250 g/ha during heavy pressure or aerial application (tomatoes only). Add surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. WHP: 3 days."
        },
        {
          weed: "Soybean looper (Thysanoplusia orichalcae)",
          pestList: ["Soybean Looper", "Thysanoplusia Orichalcae"],
          states: ["All"],
          rate: "170",
          rateMax: "250",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Use 250 g/ha during heavy pressure. Add surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. WHP: 3 days."
        },
        {
          weed: "Cluster caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "170",
          rateMax: "250",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Use 250 g/ha during heavy pressure. Add surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. WHP: 3 days."
        }
      ]
    },

    // ── Fruiting Vegetables — Potato Moth ─────────────────────
    {
      crop: "Fruiting Vegetables — Potato Moth",
      cropList: ["Capsicums", "Eggplant", "Peppers", "Tomatoes"],
      weeds: [
        {
          weed: "Potato moth / Tomato leaf miner (Phthorimaea operculella)",
          pestList: ["Potato Moth", "Tomato Leaf Miner", "Phthorimaea Operculella"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Also 17 g/100 L dilute. Add surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. WHP: 3 days."
        }
      ]
    },

    // ── Celery ────────────────────────────────────────────────
    {
      crop: "Celery",
      cropList: ["Celery"],
      weeds: [
        {
          weed: "Beet web worm (Spoladea recurvalis)",
          pestList: ["Beet Web Worm", "Spoladea Recurvalis"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae before they become entrenched",
          note: "Adjust water volume 200–1000 L/ha. Add non-ionic surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. Pupae bust after harvest. WHP: 7 days."
        },
        {
          weed: "Cotton bollworm (Helicoverpa armigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Add surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. WHP: 7 days."
        },
        {
          weed: "Native budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Add surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. WHP: 7 days."
        },
        {
          weed: "Lightbrown apple moth (Epiphyas postvittana)",
          pestList: ["Lightbrown Apple Moth", "Epiphyas Postvittana"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Add surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. WHP: 7 days."
        },
        {
          weed: "Vegetable weevil (Listroderes obliquus)",
          pestList: ["Vegetable Weevil", "Listroderes Obliquus"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Add surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. WHP: 7 days."
        }
      ]
    },

    // ── Cucurbits ─────────────────────────────────────────────
    {
      crop: "Fruiting Vegetables (Cucurbits)",
      cropList: ["Cucumbers", "Melons", "Pumpkins", "Squash", "Zucchini"],
      weeds: [
        {
          weed: "Cotton bollworm (Helicoverpa armigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera"],
          states: ["All"],
          rate: "170",
          rateMax: "250",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae; larvae in hidden feeding sites at time of spraying will not be controlled",
          note: "Use 250 g/ha during moderate or heavy insect pressure. Thorough spray coverage critical. Add non-ionic surfactant at 15 g active/100 L. Max 3 applications per crop; no more than 2 consecutive before rotating mode of action; min 7-day retreatment interval. Where more than one crop per year, max 3 sprays per year. Pupae bust after harvest. WHP: 3 days."
        },
        {
          weed: "Native budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "170",
          rateMax: "250",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Use 250 g/ha during moderate or heavy pressure. Max 3 applications; no more than 2 consecutive; min 7-day retreatment. WHP: 3 days."
        },
        {
          weed: "Cluster caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "170",
          rateMax: "250",
          unit: "g/ha",
          stage: "Scout crops regularly; target eggs and newly hatched larvae",
          note: "Use 250 g/ha during moderate or heavy pressure. Max 3 applications; no more than 2 consecutive; min 7-day retreatment. WHP: 3 days."
        }
      ]
    },

    // ── Sweet Corn ────────────────────────────────────────────
    {
      crop: "Sweet Corn",
      cropList: ["Sweet Corn"],
      weeds: [
        {
          weed: "Corn earworm / Cotton bollworm (Helicoverpa armigera)",
          pestList: ["Corn Earworm", "Cotton Bollworm", "Helicoverpa Armigera"],
          states: ["All"],
          rate: "170",
          rateMax: "250",
          unit: "g/ha",
          stage: "Best results when applied prior to start of silking (vegetative – early tasselling); larvae within silks or cob will not be controlled",
          note: "Use 250 g/ha during moderate or heavy Heliothis pressure. Thorough spray coverage critical. Add non-ionic surfactant at 15 g active/100 L. Max 3 applications per crop; min 7-day retreatment interval. Where more than one crop per year, max 3 sprays per year. Pupae bust after harvest. WHP: 3 days harvest. Grazing: 3 days."
        }
      ]
    },

    // ═══ TREE AND VINE CROPS ═══

    // ── Blueberries and Rubus spp. ────────────────────────────
    {
      crop: "Blueberries and Rubus spp. (field grown only)",
      cropList: ["Blueberries", "Raspberries", "Blackberries"],
      weeds: [
        {
          weed: "Lightbrown apple moth (Epiphyas postvittana)",
          pestList: ["Lightbrown Apple Moth", "Epiphyas Postvittana"],
          states: ["All"],
          rate: "17",
          rateMax: "17",
          unit: "g/100L",
          stage: "Apply when eggs and larvae reach economic thresholds and damage is observed",
          note: "Field grown only. For concentrate spraying refer to Mixing/Application section. Apply by air-blast application; adequate coverage essential; spray volume 1000–1200 L/ha. Use in accordance with existing IPM strategy. Max 2 applications per crop; min 7-day retreatment interval. Add non-ionic surfactant at 15 g active/100 L. WHP: Blueberries 7 days; Rubus spp. 3 days."
        }
      ]
    },

    // ── Pome Fruit — Codling Moth / Budworms ──────────────────
    {
      crop: "Pome Fruit — Codling Moth / Budworms",
      cropList: ["Apples", "Nashi Pears", "Pears"],
      weeds: [
        {
          weed: "Codling moth (Cydia pomonella)",
          pestList: ["Lepidopteran Pests", "Codling Moth", "Cydia Pomonella"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Commence at petal fall (or before 80 degree days after codling moth detected in traps); apply at 10-day intervals until late December",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough fruit coverage essential. Max 6 applications at 10-day intervals. This programme also controls budworms when commenced at petal fall. Add non-ionic surfactant at 15 g active/100 L. WHP: 14 days."
        },
        {
          weed: "Budworms (Helicoverpa spp.)",
          pestList: ["Budworms", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Commence at petal fall; apply at 10-day intervals",
          note: "Controlled by codling moth programme commenced at petal fall. Max 6 applications. Add surfactant at 15 g active/100 L. WHP: 14 days."
        }
      ]
    },

    // ── Pome Fruit — LBAM ─────────────────────────────────────
    {
      crop: "Pome Fruit — Lightbrown Apple Moth",
      cropList: ["Apples", "Nashi Pears", "Pears"],
      weeds: [
        {
          weed: "Lightbrown apple moth (Epiphyas postvittana)",
          pestList: ["Lightbrown Apple Moth", "Epiphyas Postvittana"],
          states: ["All"],
          rate: "12.5",
          rateMax: "12.5",
          unit: "g/100L",
          stage: "Commence at petal fall or at 140 degree days after LBAM detected in traps; apply at 14-day intervals",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough fruit coverage essential. Max 6 applications. Best results when applied consecutively. Add surfactant at 15 g active/100 L. WHP: 14 days."
        }
      ]
    },

    // ── Pome Fruit — Weevils ──────────────────────────────────
    {
      crop: "Pome Fruit — Weevils",
      cropList: ["Apples", "Nashi Pears", "Pears"],
      weeds: [
        {
          weed: "Apple weevil (Otiorhynchus cribricollis)",
          pestList: ["Apple Weevil", "Otiorhynchus Cribricollis"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Monitor emergence (usually late Nov – late Dec); treat early in emergence stages",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. Max 2 applications per season; min 10-day retreatment interval. DO NOT use for more than 2 consecutive seasons. WHP: 14 days."
        },
        {
          weed: "Fuller's rose weevil (Asynonychus cervinus)",
          pestList: ["Fuller's Rose Weevil", "Asynonychus Cervinus"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Spray after peak weevil emergence when leaf damage is obvious (usually late Nov – late Dec)",
          note: "For concentrate spraying refer to Mixing/Application section. Max 2 applications per season; min 10-day retreatment interval. DO NOT use for more than 2 consecutive seasons. WHP: 14 days."
        },
        {
          weed: "Garden weevil (Phlyctinus callosus)",
          pestList: ["Garden Weevil", "Phlyctinus Callosus"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Monitor emergence (usually late Oct – late Nov); treat early in emergence stages",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. Max 2 applications per season; min 10-day retreatment interval. DO NOT use for more than 2 consecutive seasons. WHP: 14 days."
        }
      ]
    },

    // ── Pome Fruit — Wingless Grasshopper ─────────────────────
    {
      crop: "Pome Fruit — Wingless Grasshopper",
      cropList: ["Apples", "Nashi Pears", "Pears"],
      weeds: [
        {
          weed: "Wingless grasshopper (Phaulacridium vittatum)",
          pestList: ["Wingless Grasshopper", "Phaulacridium Vittatum"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Spray when local thresholds reached and damage observed",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. Min 10-day retreatment interval. WHP: 14 days."
        }
      ]
    },

    // ── Stone Fruit — Budworms ────────────────────────────────
    {
      crop: "Stone Fruit — Budworms",
      cropList: ["Apricots", "Cherries", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "Budworms (Helicoverpa spp.)",
          pestList: ["Budworms", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Target sprays against eggs and newly hatched larvae before they become entrenched",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. Max 3 applications at 10-day intervals. Best results when applied consecutively. Add surfactant at 15 g active/100 L. WHP: 7 days stone fruit excluding cherries; 14 days cherries."
        }
      ]
    },

    // ── Stone Fruit — Oriental Fruit Moth ─────────────────────
    {
      crop: "Stone Fruit — Oriental Fruit Moth",
      cropList: ["Apricots", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "Oriental fruit moth (Grapholita molesta)",
          pestList: ["Oriental Fruit Moth", "Grapholita Molesta"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "First generation: apply initial treatment before 110 degree days after OFM detected in traps; target eggs and newly hatched larvae",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. Max 3 applications at 10-day intervals. Best results when applied consecutively. Add surfactant at 15 g active/100 L. WHP: 7 days stone fruit excluding cherries."
        }
      ]
    },

    // ── Stone Fruit — European Earwig ─────────────────────────
    {
      crop: "Stone Fruit — European Earwig",
      cropList: ["Apricots", "Cherries", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "European earwig (Forficula auricularia) — SUPPRESSION ONLY",
          pestList: ["European Earwig", "Forficula Auricularia"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Spray when local thresholds reached and damage observed",
          note: "SUPPRESSION ONLY. For concentrate spraying refer to Mixing/Application section. Min 10-day retreatment interval. Max 2 applications per season. Add surfactant at 15 g active/100 L. WHP: 7 days stone fruit excluding cherries; 14 days cherries."
        }
      ]
    },

    // ── Stone Fruit — Inland Katydid ──────────────────────────
    {
      crop: "Stone Fruit — Inland Katydid",
      cropList: ["Apricots", "Cherries", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "Inland katydid (Caedicia simplex)",
          pestList: ["Inland Katydid", "Caedicia Simplex"],
          states: ["All"],
          rate: "12.5",
          rateMax: "12.5",
          unit: "g/100L",
          stage: "Spray when local thresholds reached",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. WHP: 7 days stone fruit excluding cherries; 14 days cherries."
        }
      ]
    },

    // ── Stone Fruit — LBAM ────────────────────────────────────
    {
      crop: "Stone Fruit — Lightbrown Apple Moth",
      cropList: ["Apricots", "Cherries", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "Lightbrown apple moth (Epiphyas postvittana)",
          pestList: ["Lightbrown Apple Moth", "Epiphyas Postvittana"],
          states: ["All"],
          rate: "12.5",
          rateMax: "12.5",
          unit: "g/100L",
          stage: "Commence at 140 degree days after LBAM detected in traps; apply at 14-day intervals",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough fruit coverage essential. Max 3 applications. Best results when applied consecutively. Add surfactant at 15 g active/100 L. WHP: 7 days stone fruit excluding cherries; 14 days cherries."
        }
      ]
    },

    // ── Stone Fruit — Pear and Cherry Slug ────────────────────
    {
      crop: "Stone Fruit — Pear and Cherry Slug",
      cropList: ["Cherries", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "Pear and cherry slug (Caliroa cerasi)",
          pestList: ["Pear and Cherry Slug", "Caliroa Cerasi"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Spray when local thresholds reached and damage observed",
          note: "For concentrate spraying refer to Mixing/Application section. Min 10-day retreatment interval. Add surfactant at 15 g active/100 L. WHP: 7 days stone fruit excluding cherries; 14 days cherries."
        }
      ]
    },

    // ── Stone Fruit — Weevils ─────────────────────────────────
    {
      crop: "Stone Fruit — Weevils",
      cropList: ["Apricots", "Cherries", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "Apple weevil (Otiorhynchus cribricollis)",
          pestList: ["Apple Weevil", "Otiorhynchus Cribricollis"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Monitor emergence (late Nov – late Dec); treat early in emergence stages",
          note: "For concentrate spraying refer to Mixing/Application section. Max 2 applications per season; min 10-day retreatment interval. DO NOT use for more than 2 consecutive seasons. WHP: 7 days stone fruit excluding cherries; 14 days cherries."
        },
        {
          weed: "Fuller's rose weevil (Asynonychus cervinus)",
          pestList: ["Fuller's Rose Weevil", "Asynonychus Cervinus"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Spray after peak weevil emergence when leaf damage obvious (late Nov – late Dec)",
          note: "For concentrate spraying refer to Mixing/Application section. Max 2 applications per season; min 10-day retreatment interval. DO NOT use for more than 2 consecutive seasons. WHP: 7 days stone fruit excluding cherries; 14 days cherries."
        },
        {
          weed: "Garden weevil (Phlyctinus callosus)",
          pestList: ["Garden Weevil", "Phlyctinus Callosus"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Monitor emergence (late Oct – late Nov); treat early in emergence stages",
          note: "For concentrate spraying refer to Mixing/Application section. Max 2 applications per season; min 10-day retreatment interval. DO NOT use for more than 2 consecutive seasons. WHP: 7 days stone fruit excluding cherries; 14 days cherries."
        }
      ]
    },

    // ── Stone Fruit — Wingless Grasshopper ────────────────────
    {
      crop: "Stone Fruit — Wingless Grasshopper",
      cropList: ["Apricots", "Cherries", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "Wingless grasshopper (Phaulacridium vittatum)",
          pestList: ["Wingless Grasshopper", "Phaulacridium Vittatum"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "Spray when local thresholds reached and damage observed",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. Min 10-day retreatment interval. WHP: 7 days stone fruit excluding cherries; 14 days cherries."
        }
      ]
    },

    // ── Strawberries ──────────────────────────────────────────
    {
      crop: "Strawberries",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Garden weevil (Phlyctinus callosus)",
          pestList: ["Garden Weevil", "Phlyctinus Callosus"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "g/ha",
          stage: "Apply just after peak weevil emergence in spring; a second application may be required if sufficient weevils emerge in early summer",
          note: "Also 17 g/100 L dilute. Thorough spray coverage essential (300–1000 L/ha); adjust water volume to crop stage. Max 2 applications per cropping cycle; min 7-day retreatment interval. WHP: 3 days."
        }
      ]
    },

    // ── Grapes ────────────────────────────────────────────────
    {
      crop: "Grapes — European Earwig",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "European earwig (Forficula auricularia) — SUPPRESSION ONLY",
          pestList: ["European Earwig", "Forficula Auricularia"],
          states: ["All"],
          rate: "17",
          rateMax: "17",
          unit: "g/100L",
          stage: "Apply only if damage is likely; DO NOT apply after pre-bunch closure (E-L31)",
          note: "SUPPRESSION ONLY. For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. Min 10-day retreatment interval. Add surfactant at 15 g active/100 L. WHP: 8 weeks. DO NOT harvest treated grape leaves for human consumption."
        }
      ]
    },
    {
      crop: "Grapes — Garden Weevil",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Garden weevil (Phlyctinus callosus)",
          pestList: ["Garden Weevil", "Phlyctinus Callosus"],
          states: ["All"],
          rate: "17",
          rateMax: "17",
          unit: "g/100L",
          stage: "Monitor weevil emergence; delay application until canopy damage observed (usually late Oct – late Nov); DO NOT apply after pre-bunch closure (E-L31)",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. Max 2 applications per season; min 10-day retreatment interval. DO NOT use for more than 2 consecutive seasons. WHP: 8 weeks."
        }
      ]
    },
    {
      crop: "Grapes — Grapevine Moth",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Grapevine moth (Phalaenoides glycinae)",
          pestList: ["Grapevine Moth", "Phalaenoides Glycinae"],
          states: ["All"],
          rate: "8",
          rateMax: "8",
          unit: "g/100L",
          stage: "Spray when local thresholds reached; DO NOT apply after pre-bunch closure (E-L31); post-harvest infestations can be treated",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. Min 10-day retreatment interval. Add surfactant at 15 g active/100 L. WHP: 8 weeks."
        }
      ]
    },
    {
      crop: "Grapes — Inland Katydid",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Inland katydid (Caedicia simplex)",
          pestList: ["Inland Katydid", "Caedicia Simplex"],
          states: ["All"],
          rate: "17",
          rateMax: "17",
          unit: "g/100L",
          stage: "Spray when local thresholds reached; DO NOT apply after pre-bunch closure (E-L31)",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. Min 10-day retreatment interval. Add surfactant at 15 g active/100 L. WHP: 8 weeks."
        }
      ]
    },
    {
      crop: "Grapes — Lightbrown Apple Moth",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Lightbrown apple moth (Epiphyas postvittana)",
          pestList: ["Lightbrown Apple Moth", "Epiphyas Postvittana"],
          states: ["All"],
          rate: "17",
          rateMax: "17",
          unit: "g/100L",
          stage: "Time applications for egg hatch (140 degree days after detected moth flight); apply 2 at flowering/fruit set, final up to bunch closure; DO NOT apply after pre-bunch closure (E-L31)",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough fruit coverage essential. Max 3 applications per crop; min 10-day retreatment interval. Add surfactant at 15 g active/100 L. WHP: 8 weeks."
        }
      ]
    },
    {
      crop: "Grapes — Wingless Grasshopper",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Wingless grasshopper (Phaulacridium vittatum)",
          pestList: ["Wingless Grasshopper", "Phaulacridium Vittatum"],
          states: ["All"],
          rate: "17",
          rateMax: "17",
          unit: "g/100L",
          stage: "Spray when local thresholds reached and damage observed; DO NOT apply between pre-bunch closure (E-L31) and harvest",
          note: "For concentrate spraying refer to Mixing/Application section. Thorough coverage essential. Min 10-day retreatment interval. Add surfactant at 15 g active/100 L. WHP: 8 weeks."
        }
      ]
    },

    // ── Macadamia ─────────────────────────────────────────────
    {
      crop: "Macadamias",
      cropList: ["Macadamias"],
      weeds: [
        {
          weed: "Macadamia seed weevil (Kuschelorhynchus macadamiae)",
          pestList: ["Macadamia Seed Weevil", "Kuschelorhynchus Macadamiae"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          stage: "First application at beginning of nut set when nuts are pea sized; second application min 10–14 days later if required",
          note: "For concentrate spraying refer to Mixing/Application section. Field monitoring key to optimise spray timings. Max 2 applications per crop per season. Add non-ionic surfactant at label rates. Apply 1500–3000 L/ha by air-blast or equivalent for thorough uniform coverage. Combine with good farm hygiene — remove infested nuts, sweep and mulch windrows Sep–Dec. WHP: 14 days."
        }
      ]
    },

    // ═══ PERMIT USES ═══

    // ── PER88949: Walnuts — Codling Moth ──────────────────────
    {
      crop: "Walnuts (PER88949)",
      cropList: ["Walnuts"],
      permitNumber: "PER88949",
      weeds: [
        {
          weed: "Codling moth (Cydia pomonella)",
          pestList: ["Codling Moth", "Cydia Pomonella"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/100L",
          note: "PERMIT PER88949 (exp. 31 Jan 2028). Ground-based: 25 g/100L. Aerial: 250 g/ha. Max 3 applications per season; min 14-day retreatment. WHP: 14 days harvest. DO NOT graze treated area."
        }
      ]
    },

    // ── PER93815: Sweet Corn — Fall Armyworm ──────────────────
    {
      crop: "Sweet Corn — Fall Armyworm (PER93815)",
      cropList: ["Sweet Corn"],
      permitNumber: "PER93815",
      weeds: [
        {
          weed: "Fall armyworm (Spodoptera frugiperda)",
          pestList: ["Lepidopteran Pests", "Fall Armyworm", "Spodoptera Frugiperda"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "g/ha",
          note: "PERMIT PER93815 (exp. 31 Dec 2028). Apply 250 g/ha in min 100 L water/ha. Target early instar larvae. Max 3 applications per crop; min 7-day retreatment. WHP: 3 days harvest and grazing. Always add dry Avatar eVo to water; add surfactant."
        }
      ]
    },

    // ── PER96125: Tomato Glasshouses — Cockroaches ────────────
    {
      crop: "Tomato Glasshouses — Cockroaches (PER96125)",
      cropList: ["Tomatoes (Glasshouse)"],
      permitNumber: "PER96125",
      weeds: [
        {
          weed: "Cockroaches (Blattodea)",
          pestList: ["Cockroaches", "Blattodea"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "g/ha",
          note: "PERMIT PER96125 (exp. 31 Jan 2029). Apply 250 g/ha (300 g/kg product). Use in conjunction with registered residual surface spray outside glasshouses for optimum control. May not provide long-lasting residual control. WHP: 3 days harvest. DO NOT allow livestock to graze treated crop waste."
        }
      ]
    }

  ],

  // ── General notes ──────────────────────────────────────────
  restraints: [
    "DO NOT apply if heavy dew is present or rainfall expected within 2 hours.",
    "DO NOT use on greenhouse or glasshouse crops unless indicated in Directions for Use.",
    "DO NOT apply by aerial application except for tomatoes only.",
    "For tree crops except cherries, DO NOT apply in spray volume exceeding 3000 L/ha.",
    "For cherries, DO NOT apply in spray volume exceeding 2000 L/ha.",
    "Dangerous to bees — DO NOT apply when bees are actively foraging.",
    "DO NOT use BS1000 or Activator-90 as surfactant — may cause phytotoxicity."
  ],
  withholding: {
    harvest: "Asparagus: not required. Capsicum, cucurbits, eggplant, leafy veg, peppers, Rubus spp., strawberries, sweet corn, tomatoes (field/trellis): 3 days. Broccoli, brussels sprout, cabbage, cauliflower, celery, stone fruit (excl. cherries): 7 days. Cherries, pome fruit, macadamias: 14 days. Grapes: 8 weeks (DO NOT harvest treated grape leaves).",
    grazing: "DO NOT allow livestock to graze treated crops (except sweet corn forage/fodder) or vegetable waste (except tomato pomace). Sweet corn: 3 days grazing. ESI: 49 days after grazing WHP."
  },
  compatibility: {
    compatible: [
      "Captan", "Dextrolac", "Delan", "Fulasin", "Mancozeb", "Omite", "Polyram", "Systhane"
    ],
    incompatible: [],
    note: [
      "Premix a small quantity of desired tank mix and observe for settling or flocculation before use.",
      "Avoid complex tank mixtures of several products or very concentrated spray mixtures.",
      "DO NOT add a non-ionic surfactant if mixing with a product that already contains a surfactant or if mixing with liquid fertiliser."
    ]
  },
  surfactant: "Most crops: non-ionic surfactant at 15 g active/100 L (e.g. Agral 600 @ 25 mL/100 L or Citowett @ 15 mL/100 L). Brassica vegetables: 75 g active/100 L (e.g. Agral 600 @ 125 mL/100 L or Citowett @ 75 mL/100 L). DO NOT use BS1000 or Activator-90.",
  sprayerCleanup: "Immediately following application, thoroughly clean all spray equipment. Drain, rinse and flush hoses, boom and nozzles with clean water. Loosen and physically remove all visible deposits."
};
