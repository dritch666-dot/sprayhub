// ─────────────────────────────────────────────────────────
// FMC CORAGEN® INSECTICIDE — Label Data
// Group 28 Insecticide (Chlorantraniliprole)
// Source: FMC_Coragen_Label.pdf
// APVMA Approval No: 61519/119647
// FMC Australasia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['corragen'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Coragen® Insecticide",

  category:         "Insecticides",
  activeIngredient: "200 g/L Chlorantraniliprole",
  group:            "Group 28 Insecticide",
  modeOfAction:     "Anthranilic diamide — primarily a larvicide, particularly active on Lepidopteran insect pests. Designed for use in Integrated Pest Management (IPM) schemes.",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#2e6b8a",
  apvma:            "61519/119647",
  company: "FMC",
  labelPdf:         "Source labels/FMC_Coragen_Label.pdf",
  sdsPdf:           "SDS Labels/FMC_Coragen_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Helicoverpa", "Cotton Bollworm", "Native Budworm", "Diamondback Moth", "Caterpillars", "Cluster Caterpillar", "Cabbage White Butterfly", "Potato Moth", "Tomato Leaf Miner"],
    timing: ["Larvicide", "Protectant"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Brassica Vegetables ──
    {
      crop: "Brassica Vegetables",
      cropList: ["Broccoli", "Brussels Sprouts", "Cabbage", "Cauliflower"],
      weeds: [
        {
          weed: "Cabbage-centre Grub (Hellula hydralis)",
          pestList: ["Cabbage-centre Grub", "Hellula Hydralis"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Scout crops to monitor for eggs and larvae; target sprays against eggs and newly hatched larvae",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant at 15 g ai/100 L. Max 3 applications per crop; no more than 2 consecutive sprays with min 7-day interval. Adjust water volume 200–1000 L/ha to crop stage. WHP: 7 days."
        },
        {
          weed: "Cabbage Cluster Caterpillar (Crocidolomia pavonana)",
          pestList: ["Cabbage Cluster Caterpillar", "Crocidolomia Pavonana"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Scout crops to monitor for eggs and larvae; target sprays against eggs and newly hatched larvae",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant. Max 3 applications per crop; no more than 2 consecutive. WHP: 7 days."
        },
        {
          weed: "Cabbage Leafminer (Liriomyza brassicae)",
          pestList: ["Cabbage Leafminer", "Liriomyza Brassicae"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Scout crops to monitor for eggs and larvae",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant. Max 3 applications per crop; no more than 2 consecutive. WHP: 7 days."
        },
        {
          weed: "Cabbage White Butterfly (Pieris rapae)",
          pestList: ["Cabbage White Butterfly", "Pieris Rapae"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Scout crops to monitor for eggs and larvae",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant. Max 3 applications per crop; no more than 2 consecutive. WHP: 7 days."
        },
        {
          weed: "Cluster Caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Scout crops to monitor for eggs and larvae",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant. Max 3 applications per crop; no more than 2 consecutive. WHP: 7 days."
        },
        {
          weed: "Cotton Bollworm (Helicoverpa armigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Scout crops to monitor for eggs and larvae; apply as egg and larvae reach threshold",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant. Max 3 applications per crop; no more than 2 consecutive. Important to plough crops immediately after harvest as part of IRM. WHP: 7 days."
        },
        {
          weed: "Diamondback Moth (Plutella xylostella)",
          pestList: ["Diamondback Moth", "Plutella Xylostella", "DBM"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Scout crops to monitor for eggs and larvae",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant. Max 3 applications per crop; no more than 2 consecutive. WHP: 7 days."
        },
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Scout crops to monitor for eggs and larvae",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant. Max 3 applications per crop; no more than 2 consecutive. WHP: 7 days."
        },
        {
          weed: "Soybean Looper (Thysanoplusia orichalcea)",
          pestList: ["Soybean Looper", "Thysanoplusia Orichalcea"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Scout crops to monitor for eggs and larvae",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant. Max 3 applications per crop; no more than 2 consecutive. WHP: 7 days."
        }
      ]
    },

    // ── 2. Brassica Leafy Vegetables ──
    {
      crop: "Brassica Leafy Vegetables",
      cropList: ["Buk Choy", "Chinese Broccoli", "Chinese Cabbage", "Choy Sum", "Gai Choy", "Kai Choy", "Kale", "Mibuna", "Leafy Mustard", "Pak Choy", "Tat Soy"],
      weeds: [
        {
          weed: "Cabbage-centre Grub (Hellula hydralis), Cabbage Cluster Caterpillar (Crocidolomia pavonana), Cabbage Leafminer (Liriomyza brassicae), Cabbage White Butterfly (Pieris rapae), Cluster Caterpillar (Spodoptera litura), Cotton Bollworm (Helicoverpa armigera), Diamondback Moth (Plutella xylostella), Native Budworm (Helicoverpa punctigera), Soybean Looper (Thysanoplusia orichalcea)",
          pestList: ["Cabbage-centre Grub", "Cabbage Cluster Caterpillar", "Cabbage Leafminer", "Cabbage White Butterfly", "Cluster Caterpillar", "Cotton Bollworm", "Diamondback Moth", "Native Budworm", "Soybean Looper", "Helicoverpa Armigera", "Helicoverpa Punctigera", "Plutella Xylostella", "Spodoptera Litura"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Dilute spray + non-ionic surfactant; for field and protected cropping systems",
          note: "10 mL/100 L (dilute) + non-ionic surfactant at 15 g ai/100 L. For field and protected cropping systems. Max 3 applications per crop; no more than 2 consecutive with min 7-day interval. WHP: 3 days."
        }
      ]
    },

    // ── 3. Stalk & Stem Vegetables ──
    {
      crop: "Stalk & Stem Vegetables",
      cropList: ["Celery", "Rhubarb"],
      weeds: [
        {
          weed: "Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Scout for eggs and larvae; apply when threshold reached",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant at 15 g ai/100 L. Max 3 applications per crop; no more than 2 consecutive with min 7-day interval. WHP: 3 days."
        }
      ]
    },

    // ── 4. Leafy Vegetables (excl. Lettuce) ──
    {
      crop: "Leafy Vegetables (excl. Lettuce)",
      cropList: ["Cress", "Endive", "Silverbeet", "Spinach"],
      weeds: [
        {
          weed: "Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Scout for eggs and larvae; for field and protected cropping systems",
          note: "150 mL/ha OR 15 mL/100 L (dilute) + non-ionic surfactant at 15 g ai/100 L. For field and protected cropping systems. Max 3 applications per crop; no more than 2 consecutive with min 7-day interval. WHP: 3 days."
        }
      ]
    },

    // ── 5. Lettuce ──
    {
      crop: "Lettuce",
      cropList: ["Lettuce"],
      weeds: [
        {
          weed: "Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/ha",
          stage: "Scout for eggs and larvae; for field and protected cropping (leaf and closed head varieties)",
          note: "150 mL/ha OR 15 mL/100 L (dilute) + non-ionic surfactant at 15 g ai/100 L. Leaf and closed head varieties. For field and protected cropping systems. Max 3 applications per crop; no more than 2 consecutive with min 7-day interval. WHP: 3 days."
        }
      ]
    },

    // ── 6. Fruiting Vegetables (excl. Cucurbits) ──
    {
      crop: "Fruiting Vegetables (excl. Cucurbits)",
      cropList: ["Capsicum", "Eggplant", "Peppers", "Tomatoes"],
      weeds: [
        {
          weed: "Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "For field and protected cropping systems (trellis and field tomatoes)",
          note: "100 mL/ha OR 10 mL/100 L (dilute). For field and protected cropping systems. Max 3 applications per crop; no more than 2 consecutive with min 7-day interval. WHP: 3 days."
        },
        {
          weed: "Tomato Leaf Miner (Phthorimaea operculella)",
          pestList: ["Tomato Leaf Miner", "Phthorimaea Operculella"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "For field and protected cropping systems",
          note: "100 mL/ha OR 10 mL/100 L (dilute). Max 3 applications per crop; no more than 2 consecutive with min 7-day interval. WHP: 3 days."
        },
        {
          weed: "Eggfruit Caterpillar (Sceliodes cordalis)",
          pestList: ["Eggfruit Caterpillar", "Sceliodes Cordalis"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Ensure spray timing coincides with egg laying/hatching — larvae entrenched in fruit will not be controlled",
          note: "100 mL/ha OR 10 mL/100 L (dilute). Ensure spray timing coincides with egg laying/hatching. Larvae entrenched in fruit at time of spraying will not be controlled. Max 3 applications per crop; no more than 2 consecutive. WHP: 3 days."
        }
      ]
    },

    // ── 7. Fruiting Vegetables (Cucurbits) ──
    {
      crop: "Fruiting Vegetables (Cucurbits)",
      cropList: ["Cucumbers", "Melons", "Pumpkin", "Squash", "Zucchini"],
      weeds: [
        {
          weed: "Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "For field and protected cropping systems; minimum spray interval 5 days",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant at 15 g ai/100 L. For field and protected cropping systems. Min spray interval 5 days. Max 3 applications per crop; no more than 2 consecutive. WHP: 1 day."
        },
        {
          weed: "Cucumber Moth (Diaphania indica)",
          pestList: ["Cucumber Moth", "Diaphania Indica"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "For field and protected cropping systems; minimum spray interval 5 days",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant. Min spray interval 5 days. Max 3 applications per crop; no more than 2 consecutive. WHP: 1 day."
        }
      ]
    },

    // ── 8. Legume Vegetables ──
    {
      crop: "Legume Vegetables",
      cropList: ["Green Beans", "Green Peas", "Processing Peas", "Snow Peas", "Sugar Snap Peas"],
      weeds: [
        {
          weed: "Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "For field and protected cropping systems",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant at 15 g ai/100 L. For field and protected cropping systems. Max 3 applications per crop; no more than 2 consecutive with min 7-day interval. WHP: 1 day."
        }
      ]
    },

    // ── 9. Potatoes ──
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Apply with spray interval 10–14 days",
          note: "100 mL/ha. Apply with spray interval 10–14 days. Max 3 applications per crop; no more than 2 consecutive. WHP: Not required when used as directed."
        },
        {
          weed: "Potato Moth (Phthorimaea operculella)",
          pestList: ["Potato Moth", "Phthorimaea Operculella"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Only target foliar infestations — moth larvae in soil or within stems will not be controlled",
          note: "100 mL/ha. Only target foliar infestations; moth larvae in soil or within stems will not be controlled. Apply with spray interval 10–14 days. Max 3 applications per crop; no more than 2 consecutive. WHP: Not required."
        }
      ]
    },

    // ── 10. Strawberries ──
    {
      crop: "Strawberries",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Cluster Caterpillar (Spodoptera litura), Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura", "Cotton Bollworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "For field and protected cropping systems",
          note: "100 mL/ha OR 10 mL/100 L (dilute) + non-ionic surfactant at 15 g ai/100 L. For field and protected cropping systems. Max 3 applications per crop; no more than 2 consecutive with min 7-day interval. WHP: 1 day."
        }
      ]
    },

    // ── 11. Sweet Corn ──
    {
      crop: "Sweet Corn",
      cropList: ["Sweet Corn"],
      weeds: [
        {
          weed: "Cotton Bollworm (Helicoverpa armigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Ensure spray timing coincides with egg laying/hatching — larvae in cobs will not be controlled",
          note: "100 mL/ha + non-ionic surfactant at 15 g ai/100 L. Ensure spray timing coincides with egg laying/hatching. Larvae entrenched in cobs at time of spraying will not be controlled. Max 3 applications per crop; no more than 2 consecutive with min 7-day interval. WHP: 7 days."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  PERMIT USES
    // ═══════════════════════════════════════════════════════════

    // ── 12. Capsicum (PER89259) ──
    {
      crop: "Capsicum (PER89259)",
      cropList: ["Capsicum"],
      permitNumber: "PER89259",
      weeds: [
        {
          weed: "Fall Armyworm (Spodoptera frugiperda)",
          pestList: ["Lepidopteran Pests", "Fall Armyworm", "Spodoptera Frugiperda"],
          states: ["NSW", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Apply when pest populations reach economic threshold levels",
          note: "PERMIT PER89259 (exp. 31 Jan 2028). 100 mL/ha + non-ionic surfactant at 15 g ai/100 L. Apply by ground-based equipment. Max 3 applications per crop; no more than 2 consecutive. Min 7-day re-treatment interval. Not Vic. WHP: 3 days."
        }
      ]
    },

    // ── 13. Sweet Corn — Fall Armyworm (PER89259) ──
    {
      crop: "Sweet Corn — Fall Armyworm (PER89259)",
      cropList: ["Sweet Corn"],
      permitNumber: "PER89259",
      weeds: [
        {
          weed: "Fall Armyworm (Spodoptera frugiperda)",
          pestList: ["Lepidopteran Pests", "Fall Armyworm", "Spodoptera Frugiperda"],
          states: ["NSW", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
          rate: "100",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Apply when pest populations reach economic threshold levels",
          note: "PERMIT PER89259 (exp. 31 Jan 2028). 100 mL/ha + non-ionic surfactant at 15 g ai/100 L. Apply by ground-based equipment. Max 3 applications per crop; no more than 2 consecutive. Min 7-day re-treatment interval. Not Vic. WHP: 7 days."
        }
      ]
    },

    // ── 14. Blueberries (PER84178) ──
    {
      crop: "Blueberries (PER84178)",
      cropList: ["Blueberries"],
      permitNumber: "PER84178",
      weeds: [
        {
          weed: "Lepidopteran Pests",
          pestList: ["Lepidopteran Pests"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Monitor crops and commence applications when populations reach economic threshold levels",
          note: "PERMIT PER84178 (exp. 31 Oct 2028). 20 mL/100 L (dilute) + non-ionic surfactant per label directions. Apply by ground airblast or boom sprayer. Thorough coverage to point of first run-off; 600–800 L/ha recommended. Max 3 applications per crop; no more than 2 consecutive. Min 7-day re-treatment interval. Field and protected crops. WHP: 3 days."
        }
      ]
    },

    // ── 15. Nursery Stock & Ornamentals (PER91923) ──
    {
      crop: "Nursery Stock & Ornamentals (PER91923)",
      cropList: ["Nursery Stock", "Ornamentals", "Cut Flowers", "Seedlings", "Potted Colour", "Trees", "Shrubs", "Foliage Plants", "Palms", "Grasses"],
      permitNumber: "PER91923",
      weeds: [
        {
          weed: "Apple Looper (Phrissogonus laticostata)",
          pestList: ["Lepidopteran Pests", "Apple Looper", "Phrissogonus Laticostata"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Apply when egg and larvae reach economic thresholds and damage is observed",
          note: "PERMIT PER91923 (exp. 31 May 2027). 10 mL/100 L (dilute) or 100 mL/ha + non-ionic surfactant per label rates. Apply by ground-based hydraulic spray equipment. Thorough coverage to point of run-off. Max 3 foliar applications per annual production cycle; no more than 2 consecutive, 7–10 days apart. Non-food crops only. WHP: Not required (non-food)."
        },
        {
          weed: "Fall Armyworm (Spodoptera frugiperda)",
          pestList: ["Lepidopteran Pests", "Fall Armyworm", "Spodoptera Frugiperda"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Apply when egg and larvae reach economic thresholds and damage is observed",
          note: "PERMIT PER91923 (exp. 31 May 2027). 10 mL/100 L (dilute) or 100 mL/ha + non-ionic surfactant per label rates. Apply by ground-based hydraulic spray equipment. Max 3 foliar applications per annual production cycle; no more than 2 consecutive, 7–10 days apart. Non-food crops only. WHP: Not required (non-food)."
        },
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Lepidopteran Pests", "Heliothis", "Helicoverpa"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Apply when egg and larvae reach economic thresholds and damage is observed",
          note: "PERMIT PER91923 (exp. 31 May 2027). 10 mL/100 L (dilute) or 100 mL/ha + non-ionic surfactant per label rates. Apply by ground-based hydraulic spray equipment. Max 3 foliar applications per annual production cycle; no more than 2 consecutive, 7–10 days apart. Non-food crops only. WHP: Not required (non-food)."
        },
        {
          weed: "Lightbrown Apple Moth (Epiphyas postvittana)",
          pestList: ["Lepidopteran Pests", "Lightbrown Apple Moth", "Epiphyas Postvittana", "LBAM"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Apply when egg and larvae reach economic thresholds and damage is observed",
          note: "PERMIT PER91923 (exp. 31 May 2027). 10 mL/100 L (dilute) or 100 mL/ha + non-ionic surfactant per label rates. Apply by ground-based hydraulic spray equipment. Max 3 foliar applications per annual production cycle; no more than 2 consecutive, 7–10 days apart. Non-food crops only. WHP: Not required (non-food)."
        },
        {
          weed: "Soybean Looper (Chrysodeixis includens)",
          pestList: ["Lepidopteran Pests", "Soybean Looper", "Chrysodeixis Includens"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "mL/100L",
          stage: "Apply when egg and larvae reach economic thresholds and damage is observed",
          note: "PERMIT PER91923 (exp. 31 May 2027). 10 mL/100 L (dilute) or 100 mL/ha + non-ionic surfactant per label rates. Apply by ground-based hydraulic spray equipment. Max 3 foliar applications per annual production cycle; no more than 2 consecutive, 7–10 days apart. Non-food crops only. WHP: Not required (non-food)."
        }
      ]
    },

    // ── 16. Cane Berries (PER95049) ──
    {
      crop: "Cane Berries (PER95049)",
      cropList: ["Cane Berries", "Raspberries", "Blackberries", "Dewberries"],
      permitNumber: "PER95049",
      weeds: [
        {
          weed: "Lepidopteran Pests incl. Cutworm & Fall Armyworm",
          pestList: ["Lepidopteran Pests", "Cutworm", "Agrotis", "Fall Armyworm", "Spodoptera Frugiperda"],
          states: ["NSW", "QLD", "SA", "WA", "TAS", "NT", "ACT"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Monitor crops and commence applications when populations reach economic threshold levels",
          note: "PERMIT PER95049 (exp. 3 Jan 2027). 20 mL/100 L (dilute) + non-ionic surfactant at 15 g ai/100 L. Apply by boomspray, airblast, or equivalent. Thorough coverage to point of first run-off; 600–800 L/ha recommended. Max 3 applications per crop. Min 7-day re-treatment interval. Field and protected crops. Not Vic. WHP: 3 days. Grazing: Do not graze or cut for stock food."
        }
      ]
    }

  ],

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply if rainfall is expected within 2 hours of application.",
    "DO NOT allow effluent or run-off from protected cropping systems containing this product to enter dams, streams, ponds or other waterways."
  ],

  // ── Withholding ─────────────────────────────────────────────
  withholding: {
    harvest: "Potatoes: Not required when used as directed. Cucurbits, Legume vegetables, Strawberries: 1 day. Brassica leafy vegetables, Fruiting vegetables (excl. cucurbits), Leafy vegetables (incl. lettuce), Stalk & stem vegetables: 3 days. Brassica vegetables (broccoli, brussels sprout, cabbage, cauliflower), Sweet corn: 7 days.",
    grazing: "Legume vegetables: 1 day. Sweet corn: 7 days. Other crops: 7 days."
  },

  // ── Compatibility ───────────────────────────────────────────
  compatibility: {
    compatible: [
      "Captan",
      "Dextrolac",
      "Delan",
      "Fulasin",
      "Mancozeb",
      "Omite",
      "Polyram",
      "Systhane"
    ],
    incompatible: [],
    note: [
      "Premix a small quantity of desired tank mix to check for adverse changes (settling out, flocculation). Avoid complex tank mixtures of several products or very concentrated spray mixtures.",
      "Add non-ionic surfactant at 15 g ai/100 L (e.g. Agral 600 @ 25 mL/100 L) for brassicas, leafy vegetables, strawberries, cucurbits, legumes, and sweet corn.",
      "DO NOT use BS1000 or Activator as surfactant — may cause crop phytotoxicity.",
      "DO NOT add surfactant if mixing with another product that already contains surfactant or if mixing with liquid fertiliser.",
      "DO NOT use air agitation for mixing. Use mechanical or hydraulic means only.",
      "DO NOT allow spray mix to sit overnight."
    ]
  }
};
