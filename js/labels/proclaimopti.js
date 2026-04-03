// ─────────────────────────────────────────────────────────
// PROCLAIM® Opti Insecticide — Label Data
// Group 6 Insecticide (Emamectin)
// Source: Syngenta_ProclaimOpti_Label.pdf
// APVMA Approval No: 83844
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['proclaimopti'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "PROCLAIM® Opti Insecticide",
  company: "Syngenta",

  category:         "Insecticides",
  activeIngredient: "44 g/kg Emamectin (present as Emamectin Benzoate)",
  group:            "Group 6 Insecticide",
  modeOfAction:     "Contact insecticide for control of Lepidopteran and chewing insect pests. NOT systemic — good coverage is essential.",
  formulation:      "Water-Dispersible Granule (WG)",
  color:            "#fb923c",
  apvma:            "83844",
  labelPdf:         "Source labels/Syngenta_ProclaimOpti_Label.pdf",
  sdsPdf:           "SDS Labels/Syngenta_ProclaimOpti_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Lepidoptera"],
    timing: ["Foliar"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Brassica Vegetables ───────────────────────────────────
    {
      crop: "Brassica Vegetables",
      cropList: ["Broccoli", "Brussels Sprouts", "Cabbages", "Cauliflower"],
      weeds: [
        {
          weed: "Diamondback moth (cabbage moth) (Plutella xylostella)",
          pestList: ["Diamondback Moth", "Cabbage Moth", "Plutella Xylostella"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Add a non-ionic surfactant (e.g. AGRAL Spray Adjuvant) at recommended label rate. DO NOT target large larvae. Use higher rate during heavy insect pressure, very hot/sunny conditions, or where longer control is desired. Max 4 applications per crop; min 7-day retreatment interval. Max 4 applications of emamectin-containing products per year. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Cabbage white butterfly (Pieris rapae)",
          pestList: ["Cabbage White Butterfly", "Pieris Rapae"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Add a non-ionic surfactant (e.g. AGRAL Spray Adjuvant) at recommended label rate. DO NOT target large larvae. Use higher rate during heavy insect pressure, very hot/sunny conditions, or where longer control is desired. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Add a non-ionic surfactant (e.g. AGRAL Spray Adjuvant) at recommended label rate. DO NOT target large larvae. Use higher rate during heavy insect pressure, very hot/sunny conditions, or where longer control is desired. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Cluster caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Add a non-ionic surfactant (e.g. AGRAL Spray Adjuvant) at recommended label rate. DO NOT target large larvae. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Loopers (Chrysodeixis spp.)",
          pestList: ["Loopers", "Chrysodeixis"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Add a non-ionic surfactant (e.g. AGRAL Spray Adjuvant) at recommended label rate. DO NOT target large larvae. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        }
      ]
    },

    // ── Root & Tuber Vegetables (except potato) ───────────────
    {
      crop: "Root and Tuber Vegetables (except potato)",
      cropList: ["Beetroot", "Carrots", "Parsnips", "Radishes", "Swedes", "Turnips", "Sweet Potatoes"],
      weeds: [
        {
          weed: "Diamondback moth (cabbage moth) (Plutella xylostella)",
          pestList: ["Diamondback Moth", "Cabbage Moth", "Plutella Xylostella"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Add a non-ionic surfactant (e.g. AGRAL Spray Adjuvant) at recommended label rate. DO NOT target large larvae. Use higher rate during heavy insect pressure, very hot/sunny conditions, or where longer control is desired. Max 4 applications per crop; min 7-day retreatment interval. Max 4 applications of emamectin-containing products per year. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Cabbage white butterfly (Pieris rapae)",
          pestList: ["Cabbage White Butterfly", "Pieris Rapae"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Add a non-ionic surfactant at recommended label rate. DO NOT target large larvae. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Add a non-ionic surfactant at recommended label rate. DO NOT target large larvae. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Cluster caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Add a non-ionic surfactant at recommended label rate. DO NOT target large larvae. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Loopers (Chrysodeixis spp.)",
          pestList: ["Loopers", "Chrysodeixis"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Add a non-ionic surfactant at recommended label rate. DO NOT target large larvae. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        }
      ]
    },

    // ── Leafy Vegetables & Brassica Leafy Vegetables (except lettuce) ──
    {
      crop: "Leafy Vegetables and Brassica Leafy Vegetables (except lettuce)",
      cropList: ["Spinach", "Silver Beet", "Kale", "Endive", "Mustard", "Cress", "Chard", "Rocket", "Asian Leafy Greens", "Chinese Cabbage"],
      weeds: [
        {
          weed: "Diamondback moth (cabbage moth) (Plutella xylostella)",
          pestList: ["Diamondback Moth", "Cabbage Moth", "Plutella Xylostella"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Field grown only. Add a non-ionic surfactant (e.g. AGRAL Spray Adjuvant) at recommended label rate. DO NOT target large larvae. Use higher rate during heavy insect pressure, very hot/sunny conditions, or where longer control is desired. Max 4 applications per crop; min 7-day retreatment interval. Max 4 applications of emamectin-containing products per year. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Cabbage white butterfly (Pieris rapae)",
          pestList: ["Cabbage White Butterfly", "Pieris Rapae"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Field grown only. Add a non-ionic surfactant at recommended label rate. DO NOT target large larvae. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Field grown only. Add a non-ionic surfactant at recommended label rate. DO NOT target large larvae. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Cluster caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Field grown only. Add a non-ionic surfactant at recommended label rate. DO NOT target large larvae. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Loopers (Chrysodeixis spp.)",
          pestList: ["Loopers", "Chrysodeixis"],
          states: ["All"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Field grown only. Add a non-ionic surfactant at recommended label rate. DO NOT target large larvae. Max 4 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        }
      ]
    },

    // ── Sweet Corn — Helicoverpa ──────────────────────────────
    {
      crop: "Sweet Corn — Helicoverpa",
      cropList: ["Sweet Corn"],
      weeds: [
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after eggs have hatched when larvae are small",
          note: "DO NOT target large larvae. Apply before larvae enter the cob — larvae within the cob at spraying may not be controlled. Use higher rate during heavy insect pressure or very hot/sunny conditions. Thorough spray coverage is critical. Max 3 sprays per crop; 7–10 day retreatment interval. Max 3 sprays of emamectin-containing products per year. WHP: 3 days harvest; 21 days grazing."
        }
      ]
    },

    // ── Sweet Corn — Fall Armyworm ────────────────────────────
    {
      crop: "Sweet Corn — Fall Armyworm",
      cropList: ["Sweet Corn"],
      weeds: [
        {
          weed: "Fall armyworm (Spodoptera frugiperda)",
          pestList: ["Fall Armyworm", "Spodoptera Frugiperda"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after eggs have hatched when larvae are small. Manage infestations before tasselling.",
          note: "Add a non-ionic surfactant (e.g. AGRAL Spray Adjuvant) at recommended label rate. Thorough spray coverage is critical. Avoid targeting large larvae especially when entrenched in feeding sites (e.g. whorls). Larvae in cobs may not be controlled. Under heavy and sustained pressure, may not prevent all feeding damage. Sample crops twice a week after application. Max 3 sprays per crop; 7–10 day retreatment interval. Max 3 sprays of emamectin-containing products per year. WHP: 3 days harvest; 21 days grazing."
        }
      ]
    },

    // ── Strawberries ──────────────────────────────────────────
    {
      crop: "Strawberries",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Cluster caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after eggs hatch when larvae are small",
          note: "Alternative rate: 15–25 g/100 L water. DO NOT target large larvae. Max 3 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT allow livestock to graze treated crops."
        },
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after eggs hatch when larvae are small",
          note: "Alternative rate: 15–25 g/100 L water. DO NOT target large larvae. Max 3 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT allow livestock to graze treated crops."
        },
        {
          weed: "Lightbrown apple moth (Epiphyas postvittana)",
          pestList: ["Lightbrown Apple Moth", "LBAM", "Epiphyas Postvittana"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after eggs hatch when larvae are small",
          note: "Alternative rate: 15–25 g/100 L water. DO NOT target large larvae. Max 3 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT allow livestock to graze treated crops."
        },
        {
          weed: "Loopers (Chrysodeixis spp.)",
          pestList: ["Loopers", "Chrysodeixis"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after eggs hatch when larvae are small",
          note: "Alternative rate: 15–25 g/100 L water. DO NOT target large larvae. Max 3 applications per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT allow livestock to graze treated crops."
        }
      ]
    },

    // ── Lettuce ───────────────────────────────────────────────
    {
      crop: "Lettuce",
      cropList: ["Lettuce"],
      weeds: [
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "DO NOT target large larvae. Apply before larvae enter lettuce heads. Use higher rate during heavy insect pressure or very hot/sunny conditions. Ensure thorough spray coverage. Best results with dilute applications. Max 4 sprays per crop; min 7-day retreatment interval. Max 4 sprays of emamectin-containing products per year. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        },
        {
          weed: "Cluster caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "DO NOT target large larvae. Apply before larvae enter lettuce heads. Use higher rate during heavy insect pressure or very hot/sunny conditions. Max 4 sprays per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT use treated crop for stock food."
        }
      ]
    },

    // ── Cucurbits ─────────────────────────────────────────────
    {
      crop: "Cucurbits",
      cropList: ["Cucumbers", "Melons", "Pumpkins", "Squash", "Zucchini"],
      weeds: [
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "DO NOT target large larvae. Apply before larvae enter fruit. Use higher rate during heavy insect pressure or very hot/sunny conditions. Ensure thorough spray coverage. Best results with dilute applications. Max 4 sprays per crop; min 7-day retreatment interval. Max 4 sprays of emamectin-containing products per year. WHP: 3 days harvest; DO NOT allow livestock to graze treated crops."
        },
        {
          weed: "Cluster caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "DO NOT target large larvae. Apply before larvae enter fruit. Max 4 sprays per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT allow livestock to graze treated crops."
        },
        {
          weed: "Cucumber moth (Diaphania indica)",
          pestList: ["Cucumber Moth", "Diaphania Indica"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "DO NOT target large larvae. Apply before larvae enter fruit. Max 4 sprays per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT allow livestock to graze treated crops."
        }
      ]
    },

    // ── Legume Vegetables ─────────────────────────────────────
    {
      crop: "Legume Vegetables",
      cropList: ["Green Beans", "Green Peas", "Sugar Snap Peas", "Snow Peas"],
      weeds: [
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "DO NOT target large larvae. Use higher rate during heavy insect pressure or very hot/sunny conditions. Ensure thorough spray coverage. Best results with dilute applications. Max 4 sprays per crop; min 7-day retreatment interval. Max 4 sprays of emamectin-containing products per year. WHP: 3 days harvest; 21 days grazing."
        },
        {
          weed: "Cluster caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "DO NOT target large larvae. Max 4 sprays per crop; min 7-day retreatment interval. WHP: 3 days harvest; 21 days grazing."
        },
        {
          weed: "Loopers (Chrysodeixis spp.)",
          pestList: ["Loopers", "Chrysodeixis"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "DO NOT target large larvae. Max 4 sprays per crop; min 7-day retreatment interval. WHP: 3 days harvest; 21 days grazing."
        }
      ]
    },

    // ── Fruiting Vegetables ───────────────────────────────────
    {
      crop: "Fruiting Vegetables (field grown and protected cropping)",
      cropList: ["Tomatoes", "Eggplant", "Capsicums", "Chillies"],
      weeds: [
        {
          weed: "Heliothis (Helicoverpa spp.)",
          pestList: ["Heliothis", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Dilute rate: 150–250 g/ha. Alternative rate for trellised tomatoes or eggplants: 15–25 g/100 L water. Concentrate spraying also available — refer to label mixing/application section. DO NOT target large larvae. Apply before larvae enter fruit. Use higher rate during heavy insect pressure or very hot/sunny conditions. Ensure thorough spray coverage — best results with dilute applications. Max 4 sprays per crop; min 7-day retreatment interval. Max 4 sprays of emamectin-containing products per year. WHP: 3 days harvest; DO NOT allow livestock to graze treated crops."
        },
        {
          weed: "Cluster caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["All"],
          rate: "150",
          rateMax: "250",
          unit: "g/ha",
          stage: "Spray at first signs of insect infestation; apply just prior to or just after egg hatch when larvae are small",
          note: "Dilute rate: 150–250 g/ha. Alternative rate for trellised tomatoes or eggplants: 15–25 g/100 L water. DO NOT target large larvae. Max 4 sprays per crop; min 7-day retreatment interval. WHP: 3 days harvest; DO NOT allow livestock to graze treated crops."
        }
      ]
    },

    // ── Grapes ────────────────────────────────────────────────
    {
      crop: "Grapes (wine and table — not for dried fruit production)",
      cropList: ["Wine Grapes", "Table Grapes"],
      weeds: [
        {
          weed: "Lightbrown apple moth (Epiphyas postvittana)",
          pestList: ["Lightbrown Apple Moth", "LBAM", "Epiphyas Postvittana"],
          states: ["All"],
          rate: "15",
          rateMax: "15",
          unit: "g/100L",
          stage: "Apply soon after egg lay when larvae are small and before larvae become webbed into bunches. DO NOT apply after bunch closure.",
          note: "Dilute spraying: 15 g/100 L. Concentrate spraying also available — refer to label mixing/application section. Best results with dilute applications for thorough coverage of foliage and bunches. Eggs laid after application on new growth may not be controlled. Monitor pest levels after application; further application may be required. Max 2 sprays per crop; 7-day retreatment interval. WHP: 8 weeks harvest; 8 weeks grazing."
        },
        {
          weed: "Grapevine moth (Phalaenoides glycinae)",
          pestList: ["Grapevine Moth", "Phalaenoides Glycinae"],
          states: ["All"],
          rate: "15",
          rateMax: "15",
          unit: "g/100L",
          stage: "Spray when local threshold levels have been reached. DO NOT apply after bunch closure.",
          note: "Dilute spraying: 15 g/100 L. Concentrate spraying also available — refer to label mixing/application section. Best results with dilute applications for thorough coverage. Monitor pest levels after application; further application may be required. Max 2 sprays per crop; 7-day retreatment interval. WHP: 8 weeks harvest; 8 weeks grazing."
        }
      ]
    },

  ],  // end crops array

  // ── Agronomic fields ──────────────────────────────────────
  restraints: [
    "DO NOT apply by aerial application.",
    "DO NOT target large larvae.",
    "Highly toxic to bees — DO NOT spray plants in flower while bees are foraging. DO NOT allow drift to flowering weeds, hedges, or crops. Residues toxic to bees for 48 hours. Notify beekeepers 48 hours before spraying.",
    "Dangerous to fish and other aquatic organisms — DO NOT contaminate waterways.",
    "Not for use on grapes grown for dried fruit production.",
    "CropLife Resistance Management strategy applies to all uses."
  ],

  withholding: {
    harvest: "Brassica veg, Leafy veg, Lettuce, Root & tuber veg: 3 days. Cucurbits, Fruiting veg, Strawberries: 3 days. Legume veg, Sweet corn: 3 days. Grapes: 8 weeks.",
    grazing: "Brassica veg, Leafy veg, Lettuce, Root & tuber veg: NOT for stock food. Cucurbits, Fruiting veg, Strawberries: NOT for livestock grazing. Legume veg, Sweet corn: 21 days. Grapes: 8 weeks."
  },

  surfactant:     "Add a non-ionic surfactant (e.g. AGRAL Spray Adjuvant) at recommended label rate for brassica veg, root & tuber veg, leafy veg, and sweet corn (fall armyworm) uses.",
  sprayerCleanup: "Triple rinse containers before disposal. Add rinsings to spray tank."

};
