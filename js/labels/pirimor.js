// ─────────────────────────────────────────────────────────
// PIRIMOR® WG Aphicide — Label Data
// Group 1A Insecticide (Pirimicarb)
// Source: Syngenta_Pirimor_Label.pdf
// APVMA Approval No: 49835
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['pirimor'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "PIRIMOR® WG Aphicide",
  company: "Syngenta",

  category:         "Insecticides",
  activeIngredient: "500 g/kg Pirimicarb (an anticholinesterase compound)",
  group:            "Group 1A Insecticide",
  modeOfAction:     "Selective carbamate aphicide — controls aphids with minimal impact on many beneficial insects. Contact and vapour activity.",
  formulation:      "Water-Dispersible Granule (WG)",
  color:            "#e879f9",
  apvma:            "49835",
  labelPdf:         "Source labels/Syngenta_Pirimor_Label.pdf",
  sdsPdf:           "SDS Labels/Syngenta_Pirimor_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Aphids"],
    timing: ["Foliar"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ═══ FRUIT CROPS — TREE AND VINE ═══

    // ── Apples ────────────────────────────────────────────────
    {
      crop: "Apples",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Woolly aphid",
          pestList: ["Woolly Aphid"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply when aphids appear",
          note: "Dilute rate: 50 g/100 L. Per-hectare rate: 1.1–1.7 kg/ha. Use the higher rate when less than 2200 L of spray/ha. Add 18 mL Agral/100 L. Concentrate spraying available — apply same total product per hectare. WHP: 2 days harvest."
        }
      ]
    },

    // ── Citrus ────────────────────────────────────────────────
    {
      crop: "Citrus — Citrus Aphid",
      cropList: ["Citrus"],
      weeds: [
        {
          weed: "Citrus aphid",
          pestList: ["Citrus Aphid"],
          states: ["All"],
          rate: "1100",
          rateMax: "1100",
          unit: "g/ha",
          stage: "Apply when aphids appear",
          note: "Use at least 2200 L spray/ha. WHP: 2 days harvest."
        }
      ]
    },

    {
      crop: "Citrus — Aphids (IPM)",
      cropList: ["Citrus"],
      weeds: [
        {
          weed: "Aphids (IPM use only)",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "g/100L",
          stage: "Apply only where pest management is being implemented",
          note: "Apply only when it is apparent that parasite predators will not control the infestation within a reasonable time. WHP: 2 days harvest."
        }
      ]
    },

    // ── Stone Fruit ───────────────────────────────────────────
    {
      crop: "Stone Fruit",
      cropList: ["Peaches", "Nectarines", "Plums", "Cherries", "Apricots"],
      weeds: [
        {
          weed: "Green peach aphid, Black peach aphid, Cherry aphid",
          pestList: ["Green Peach Aphid", "Black Peach Aphid", "Cherry Aphid"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply at pink bud or when aphids appear",
          note: "Dilute rate: 50 g/100 L. Per-hectare rate: 1.1 kg/ha. Use at least 1100 L spray/ha. Concentrate spraying available. WHP: 2 days harvest."
        }
      ]
    },

    // ═══ FRUIT CROPS — NON-TREE AND VINE ═══

    // ── Blueberries / Pepinos ─────────────────────────────────
    {
      crop: "Blueberries and Pepinos",
      cropList: ["Blueberries", "Pepinos"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply when aphids appear",
          note: "WHP: 2 days harvest."
        }
      ]
    },

    // ── Strawberries ──────────────────────────────────────────
    {
      crop: "Strawberries",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "35",
          rateMax: "35",
          unit: "g/100L",
          stage: "Apply when aphids appear",
          note: "Thorough coverage is necessary. If used in conjunction with predatory mites, apply before release or only after mites have fully established within the crop. WHP: 2 days harvest."
        }
      ]
    },

    // ── Blackberries ──────────────────────────────────────────
    {
      crop: "Blackberries (field and protected crops)",
      cropList: ["Blackberries"],
      weeds: [
        {
          weed: "Aphids including Green peach aphid",
          pestList: ["Aphids", "Green Peach Aphid"],
          states: ["All"],
          rate: "35",
          rateMax: "35",
          unit: "g/100L",
          stage: "Monitor crops and commence applications once local aphid thresholds are reached. Target adults and nymphs.",
          note: "Apply in spray volume up to 900 L/ha by ground-based air blast or boom sprayer. DO NOT use backpack/knapsack sprayer. DO NOT apply consecutive applications — rotate with a different group aphicide. Min 10–14 day retreatment interval. Max 2 applications per year. Test sensitivity on small number of plants before treating whole crop. WHP: 7 days harvest."
        }
      ]
    },

    // ═══ VEGETABLES ═══

    // ── Artichokes / Asparagus ────────────────────────────────
    {
      crop: "Artichokes (Globe) and Asparagus",
      cropList: ["Globe Artichokes", "Asparagus"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply when aphids appear",
          note: "WHP: 2 days harvest."
        }
      ]
    },

    // ── Beetroot ──────────────────────────────────────────────
    {
      crop: "Beetroot",
      cropList: ["Beetroot"],
      weeds: [
        {
          weed: "Green peach aphid",
          pestList: ["Green Peach Aphid"],
          states: ["All"],
          rate: "1000",
          rateMax: "1000",
          unit: "g/ha",
          stage: "Apply when aphids appear",
          note: "Use at least 500 L spray/ha plus 18 mL/100 L Agral. WHP: 2 days harvest."
        }
      ]
    },

    // ── Beans ─────────────────────────────────────────────────
    {
      crop: "Beans",
      cropList: ["Beans"],
      weeds: [
        {
          weed: "Cowpea aphid (Aphis craccivora)",
          pestList: ["Cowpea Aphid", "Aphis Craccivora"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "g/ha",
          stage: "Apply as beans emerge and thereafter whilst aphid attack continues",
          note: "Spray thoroughly. WHP: 2 days harvest."
        }
      ]
    },

    // ── Broad Beans / Lima Beans ──────────────────────────────
    {
      crop: "Broad Beans and Lima Beans",
      cropList: ["Broad Beans", "Lima Beans"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply as beans emerge and thereafter whilst aphid attack continues",
          note: "Spray thoroughly. WHP: 2 days harvest."
        }
      ]
    },

    // ── Brassicas (Cabbage Aphid) ─────────────────────────────
    {
      crop: "Brassica Vegetables — Cabbage Aphid",
      cropList: ["Broccoli", "Brussels Sprouts", "Cabbages", "Cauliflower"],
      weeds: [
        {
          weed: "Cabbage aphid",
          pestList: ["Cabbage Aphid", "Brevicoryne Brassicae"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply every 10–14 days commencing 1 week after planting",
          note: "Per-hectare rate: 500 g–1 kg/ha. Use 500 L spray/ha. Add 18 mL Agral/100 L. If lower spray volumes used, increase rate per 100 L to maintain per-hectare rate. Use higher rate if temperature falls below 20°C. WHP: 2 days harvest."
        }
      ]
    },

    // ── Brassicas (Green Peach Aphid) ─────────────────────────
    {
      crop: "Brassica Vegetables — Green Peach Aphid",
      cropList: ["Brussels Sprouts", "Cabbages", "Cauliflower", "Chinese Cabbages"],
      weeds: [
        {
          weed: "Green peach aphid",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All"],
          rate: "500",
          rateMax: "1000",
          unit: "g/ha",
          stage: "Apply every 10–14 days commencing 1 week after planting",
          note: "Use 500 L spray/ha. Add 18 mL Agral/100 L. Use higher rate if temperature falls below 20°C. WHP: 2 days harvest."
        }
      ]
    },

    // ── Capsicums ─────────────────────────────────────────────
    {
      crop: "Capsicums",
      cropList: ["Capsicums"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "50",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray when aphids are detected and repeat if necessary",
          note: "Per-hectare rate: 500 g–1 kg/ha. Use the higher rates if applied in conditions below 20°C. WHP: 2 days harvest."
        }
      ]
    },

    // ── Cucurbits ─────────────────────────────────────────────
    {
      crop: "Cucurbits",
      cropList: ["Cucumbers", "Melons", "Pumpkins", "Squash", "Zucchini"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "50",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply every 5–10 days during periods of rapid plant growth to delay virus buildup",
          note: "Per-hectare rate: 500 g–1 kg/ha. Use the higher rates if applied in conditions below 20°C. WHP: 2 days harvest."
        }
      ]
    },

    // ── Endive / Garden Cress ─────────────────────────────────
    {
      crop: "Endive and Garden Cress",
      cropList: ["Endive", "Garden Cress"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply when aphids appear",
          note: "WHP: 2 days harvest."
        }
      ]
    },

    // ── Kale ──────────────────────────────────────────────────
    {
      crop: "Kale",
      cropList: ["Kale"],
      weeds: [
        {
          weed: "Cabbage aphid, Green peach aphid",
          pestList: ["Cabbage Aphid", "Green Peach Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply every 10–14 days commencing 1 week after planting",
          note: "Per-hectare rate: 500 g–1 kg/ha. Use 500 L spray/ha. Add 18 mL Agral/100 L. Use higher rate if temperature falls below 20°C. WHP: 2 days harvest."
        }
      ]
    },

    // ── Lettuce ───────────────────────────────────────────────
    {
      crop: "Lettuce",
      cropList: ["Lettuce"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray when aphids are detected and repeat if necessary",
          note: "Per-hectare rate: 500 g–1 kg/ha. Use the higher rates if applied in conditions below 20°C. WHP: 2 days harvest."
        }
      ]
    },

    // ── Okra ──────────────────────────────────────────────────
    {
      crop: "Okra",
      cropList: ["Okra"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply when aphids appear",
          note: "For use in IPM programs where Helicoverpa resistance strategy is being practiced. WHP: 2 days harvest."
        }
      ]
    },

    // ── Peas ──────────────────────────────────────────────────
    {
      crop: "Peas",
      cropList: ["Peas"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray when aphids are detected and repeat if necessary",
          note: "Per-hectare rate: 500 g–1 kg/ha. Use the higher rates if applied in conditions below 20°C. WHP: 2 days harvest."
        }
      ]
    },

    // ── Potatoes ──────────────────────────────────────────────
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Potato aphid",
          pestList: ["Potato Aphid"],
          states: ["All"],
          rate: "250",
          rateMax: "500",
          unit: "g/100L",
          stage: "Apply when aphids first appear",
          note: "Apply in 200 L spray/ha. Per-hectare rate: 500 g or 1 kg/ha. If higher spray volumes used, decrease rate per 100 L. Use higher rate if temperature falls below 20°C. WHP: 2 days harvest."
        }
      ]
    },

    // ── Radishes ──────────────────────────────────────────────
    {
      crop: "Radishes",
      cropList: ["Radishes"],
      weeds: [
        {
          weed: "Cabbage aphid, Green peach aphid",
          pestList: ["Cabbage Aphid", "Green Peach Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply every 10–14 days commencing 1 week after planting",
          note: "Per-hectare rate: 500 g–1 kg/ha. Use 500 L spray/ha. Add 18 mL Agral/100 L. Use higher rate if temperature falls below 20°C. WHP: 2 days harvest."
        }
      ]
    },

    // ── Shallots / Spinach ────────────────────────────────────
    {
      crop: "Shallots and Spinach",
      cropList: ["Shallots", "Spinach"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply when aphids appear",
          note: "WHP: 2 days harvest."
        }
      ]
    },

    // ── Spring Onion ──────────────────────────────────────────
    {
      crop: "Spring Onion (field only)",
      cropList: ["Spring Onions"],
      weeds: [
        {
          weed: "Aphids including Green peach aphid, Onion aphid, Cabbage aphid",
          pestList: ["Aphids", "Green Peach Aphid", "Onion Aphid", "Cabbage Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "g/100L",
          stage: "Monitor crops and apply when local aphid thresholds are reached, before populations reach high infestation levels",
          note: "Field only — NOT for protected cropping. Per-hectare rate: 500 g–1 kg/ha. Use 200–500 L/ha depending on crop density. Always add 18 mL/100 L non-ionic surfactant (e.g. Agral). Use higher rate if temperature falls below 20°C. Ensure thorough coverage including underside of leaves. Max 2 spray applications per crop. DO NOT apply consecutive applications — rotate with different mode of action. WHP: 2 days harvest."
        }
      ]
    },

    // ── Swedes / Turnips ──────────────────────────────────────
    {
      crop: "Swedes and Turnips",
      cropList: ["Swedes", "Turnips"],
      weeds: [
        {
          weed: "Cabbage aphid, Green peach aphid",
          pestList: ["Cabbage Aphid", "Green Peach Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply every 10–14 days commencing 1 week after planting",
          note: "Per-hectare rate: 500 g–1 kg/ha. Use 500 L spray/ha. Add 18 mL Agral/100 L. Use higher rate if temperature falls below 20°C. WHP: 2 days harvest."
        }
      ]
    },

    // ── Sweet Potato ──────────────────────────────────────────
    {
      crop: "Sweet Potato",
      cropList: ["Sweet Potatoes"],
      weeds: [
        {
          weed: "Aphids including Green peach aphid, Melon aphid, Cabbage aphid",
          pestList: ["Aphids", "Green Peach Aphid", "Melon Aphid", "Cabbage Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "g/100L",
          stage: "Monitor crops and apply when local aphid thresholds are reached, before populations reach high infestation levels",
          note: "Per-hectare rate: 500 g–1 kg/ha. Use 200–500 L/ha depending on crop density. Always add 18 mL/100 L non-ionic surfactant (e.g. Agral). Use higher rate if temperature falls below 20°C. Ensure thorough coverage including underside of leaves. Max 2 spray applications per crop. DO NOT apply consecutive applications — rotate with different mode of action. WHP: 2 days harvest; DO NOT graze or cut treated crops for livestock feed."
        }
      ]
    },

    // ── Tomatoes ──────────────────────────────────────────────
    {
      crop: "Tomatoes",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray when aphids are detected and repeat if necessary",
          note: "Per-hectare rate: 500 g–1 kg/ha. Use the higher rates if applied in conditions below 20°C. WHP: 2 days harvest."
        }
      ]
    },

    // ── Watercress / Leeks / Kiwano ───────────────────────────
    {
      crop: "Watercress, Leeks and Kiwano",
      cropList: ["Watercress", "Leeks", "Kiwano"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply when aphids appear",
          note: "Kiwano: Apply every 5–10 days during period of rapid plant growth to delay virus buildup. WHP: 2 days harvest."
        }
      ]
    },

    // ═══ ORNAMENTALS ═══

    {
      crop: "Roses and Chrysanthemums",
      cropList: ["Roses", "Chrysanthemums"],
      weeds: [
        {
          weed: "Rose aphid, Chrysanthemum aphid",
          pestList: ["Rose Aphid", "Chrysanthemum Aphid"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply when aphids appear",
          note: "Spray to give complete coverage of plants. WHP: Not applicable (ornamental)."
        }
      ]
    },

    {
      crop: "Ornamentals",
      cropList: ["Ornamental Flowers", "Ornamental Plants"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["NSW", "WA", "QLD"],
          rate: "35",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply when aphids appear",
          note: "50 g/100 L in NSW and WA; 35 g/100 L in QLD and WA (IPM). If used with predatory mites (P. persimilis), apply before release or after mites are fully established. Max 2 sprays in quick succession where IPM is practiced. Test phytotoxicity on small area before widespread use. WHP: Not applicable (ornamental)."
        }
      ]
    },

    // ═══ BROADACRE CROPS ═══

    // ── Adzuki Bean / Mung Bean / Soybean ─────────────────────
    {
      crop: "Adzuki Bean, Mung Bean and Soybean",
      cropList: ["Adzuki Beans", "Mung Beans", "Soybeans"],
      weeds: [
        {
          weed: "Cowpea aphid (Aphis craccivora), Soya bean aphid (Aphis glycines)",
          pestList: ["Cowpea Aphid", "Soya Bean Aphid", "Aphis Craccivora", "Aphis Glycines"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "g/ha",
          stage: "Apply when thresholds are reached. Soybeans: spray if >250 aphids per plant during R1–R4 (flowering to pod elongation)",
          note: "Ground: min 100 L/ha. Aerial: 30–50 L/ha with Medium spray droplet. Max 2 applications per season; min 10-day retreatment interval. DO NOT apply consecutive applications — rotate with different group. If low humidity, add 1% or 10% Summer Spray Oil for ground and aerial respectively. WHP: 21 days harvest/grazing."
        }
      ]
    },

    // ── Canola / Mustard ──────────────────────────────────────
    {
      crop: "Canola and Mustard (oilseed cultivars)",
      cropList: ["Canola", "Mustard"],
      weeds: [
        {
          weed: "Cabbage aphid (Brevicoryne brassicae), Green peach aphid (Myzus persicae)",
          pestList: ["Cabbage Aphid", "Green Peach Aphid"],
          states: ["All"],
          rate: "500",
          rateMax: "1000",
          unit: "g/ha",
          stage: "Apply when aphids first appear",
          note: "Ground: 30–100 L water/ha. Aerial: 20–50 L/ha. Use higher rate if temperature falls below 20°C. Add 10 mL Agral/100 L spray. WHP: 14 days harvest/grazing."
        }
      ]
    },

    // ── Cotton ────────────────────────────────────────────────
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Cotton aphid (Aphis gossypii), Green peach aphid (Myzus persicae)",
          pestList: ["Cotton Aphid", "Green Peach Aphid", "Aphis Gossypii"],
          states: ["All"],
          rate: "500",
          rateMax: "750",
          unit: "g/ha",
          stage: "Stage I: >90% plants infested; Stage II: >95% infested; Stage III: >50% infested (or >10% if 1% bolls open with honeydew)",
          note: "Aerial: 30–50 L/ha. Ground: min 100 L/ha. Thorough coverage essential. Max 2 per season. DO NOT apply consecutive sprays — rotate chemistry. WHP: 21 days harvest/grazing."
        }
      ]
    },

    // ── Lucerne / Medic Pastures ──────────────────────────────
    {
      crop: "Lucerne and Medic Pastures",
      cropList: ["Lucerne", "Medic Pastures"],
      weeds: [
        {
          weed: "Spotted alfalfa aphid, Blue green aphid",
          pestList: ["Spotted Alfalfa Aphid", "Blue Green Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "150",
          unit: "g/ha",
          stage: "Seedling: treat when 1–2 aphids per plant. Established (spring/summer): spray at 20–40 aphids per stem.",
          note: "Apply in 200–300 L water/ha. Use higher rate with high aphid density or dense crop growth. Complete coverage and crop penetration essential. Note: In some areas SAA has developed tolerance to pirimicarb. WHP: 3 days grazing."
        }
      ]
    },

    // ── Lucerne — Pea Aphid ───────────────────────────────────
    {
      crop: "Lucerne — Pea Aphid",
      cropList: ["Lucerne"],
      weeds: [
        {
          weed: "Pea aphid",
          pestList: ["Pea Aphid"],
          states: ["All"],
          rate: "100",
          rateMax: "150",
          unit: "g/ha",
          stage: "Apply when aphids begin to build up on stems",
          note: "Repeat as necessary. Use 200–300 L/ha. Use higher rate with high aphid density, dense crop, or temperature below 20°C. WHP: 3 days grazing."
        }
      ]
    },

    // ── Lupins ────────────────────────────────────────────────
    {
      crop: "Lupins",
      cropList: ["Lupins"],
      weeds: [
        {
          weed: "Green peach aphid, Cowpea aphid",
          pestList: ["Green Peach Aphid", "Cowpea Aphid"],
          states: ["NSW", "VIC", "WA"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Apply when aphids first appear",
          note: "Ground: 20–100 L/ha. Aerial: 4–15 L/ha. WA rate: 300 g/ha for Green peach aphid with good coverage essential, aerial 30–100 L/ha. Repeat as necessary. If low humidity, add Summer Spray Oil. For best aerial coverage, apply with slight crosswind (min 3 km/h). WHP: 6 weeks harvest/grazing."
        }
      ]
    },

    // ── Vetch ─────────────────────────────────────────────────
    {
      crop: "Vetch",
      cropList: ["Vetch"],
      weeds: [
        {
          weed: "Bean aphid (Megoura crassicauda)",
          pestList: ["Bean Aphid", "Megoura Crassicauda"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "g/ha",
          stage: "Apply when aphids reach local thresholds",
          note: "Apply by boom sprayer or similar in sufficient water for good coverage. Max 2 applications per crop. Min 15-day retreatment interval. WHP: 6 weeks grazing."
        }
      ]
    },

    // ── Winter Cereals ────────────────────────────────────────
    {
      crop: "Winter Cereals — Aphids",
      cropList: ["Wheat", "Barley", "Oats", "Winter Cereals"],
      weeds: [
        {
          weed: "Aphids (Rhopalosiphum maidis)",
          pestList: ["Aphids", "Rhopalosiphum Maidis"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "g/ha",
          stage: "Apply when 20+ aphids per tiller, between emergence of last leaf and flowering",
          note: "WHP: 6 weeks harvest/grazing."
        }
      ]
    },

    {
      crop: "Winter Cereals — Aphids (WA)",
      cropList: ["Wheat", "Barley", "Oats", "Winter Cereals"],
      weeds: [
        {
          weed: "Aphids (R. maidis, R. padi)",
          pestList: ["Aphids", "Rhopalosiphum Maidis", "Rhopalosiphum Padi"],
          states: ["WA"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          stage: "Apply when aphids are located in the crop, especially where Barley Yellow Dwarf virus is a concern",
          note: "Ground: 20–100 L/ha. Aerial: 4–15 L/ha. If low humidity, add Summer Spray Oil. WHP: 6 weeks harvest/grazing."
        }
      ]
    },

    {
      crop: "Winter Cereals — Russian Wheat Aphid",
      cropList: ["Wheat", "Barley", "Oats", "Winter Cereals"],
      weeds: [
        {
          weed: "Russian wheat aphid (Diuraphis noxia)",
          pestList: ["Russian Wheat Aphid", "Diuraphis Noxia"],
          states: ["All"],
          rate: "225",
          rateMax: "300",
          unit: "g/ha",
          stage: "Begin applications when action thresholds are reached",
          note: "Use higher rate under higher pest pressure and/or lower temperatures. Thorough coverage essential — ensure water volume and spray quality covers all canopy including undersides of and between leaves. Non-ionic surfactant (e.g. Agral, BS1000) or esterified crop oil (e.g. Hasten) may assist. Continue monitoring and re-apply as necessary. WHP: 6 weeks harvest/grazing."
        }
      ]
    },

    // ═══ NURSERY STOCK ═══

    {
      crop: "Nursery Stock — Soil Drench",
      cropList: ["Nursery Stock", "Cut Flowers", "Foliage Plants"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply at first signs of infestation or when pest thresholds are reached",
          note: "Soil drench application — apply as targeted drench to soil surface. Non-food crops only: seedlings, plugs, potted colour, trees, shrubs, foliage plants, palms, grasses, fruit trees (non-bearing). DO NOT use more than twice in quick succession where IPM is used. Test sensitivity on small number of plants first. WHP: DO NOT graze or feed material to livestock."
        }
      ]
    },

    {
      crop: "Nursery Stock — Foliar",
      cropList: ["Nursery Stock"],
      weeds: [
        {
          weed: "Aphids",
          pestList: ["Aphids"],
          states: ["All"],
          rate: "35",
          rateMax: "50",
          unit: "g/100L",
          stage: "Apply at first signs of infestation or when pest thresholds are reached",
          note: "Non-food crops only. Ensure thorough foliar coverage. Use higher rate for longer residual control, high pest pressure, rapid crop growth, or advanced crops. Max 2 applications per crop; min 14-day retreatment interval. Test sensitivity on small number of plants first. WHP: DO NOT graze or feed material to livestock."
        }
      ]
    },

    // ═══ PERMIT USES ═══

    // ── PER91921: Non-food Nursery Stock — Aphids (soil drench) ─
    {
      crop: "Non-food Nursery Stock — Aphids (PER91921)",
      cropList: ["Nursery Stock (non-food)", "Seedlings", "Tubes", "Plugs", "Potted Colour", "Trees", "Shrubs", "Foliage Plants", "Palms", "Grasses", "Fruit Plants (non-bearing)", "Cut Flowers", "Ornamentals"],
      permitNumber: "PER91921",
      weeds: [
        {
          weed: "Aphids (Aphididae)",
          pestList: ["Aphids", "Aphididae"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          note: "PERMIT PER91921 (exp. 28 Feb 2030). 500 g/kg pirimicarb: 50 g/100L. Apply as targeted drench to soil surface at first signs of infestation. Use calibrated ground equipment. DO NOT apply by equipment on back of user. Max 2 in quick succession where IPM used. Some green peach aphids are resistant to pirimicarb — DO NOT use if resistance known or suspected. Non-food crops only."
        }
      ]
    },

    // ── PER94884: Sesame — Aphids ─────────────────────────────
    {
      crop: "Sesame (PER94884)",
      cropList: ["Sesame"],
      permitNumber: "PER94884",
      weeds: [
        {
          weed: "Cowpea aphid (Aphis craccivora)",
          pestList: ["Cowpea Aphid", "Aphis Craccivora"],
          states: ["All (except VIC)"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          note: "PERMIT PER94884 (exp. 31 Oct 2026). 500 g/kg product: 250–300 g/ha. Apply at first signs of aphid infestation. Max 2 applications per crop; min 14-day retreatment. Apply in min 50 L water/ha (ground) or 20 L/ha (aerial). WHP: 21 days harvest and grazing."
        },
        {
          weed: "Green peach aphid (Myzus persicae)",
          pestList: ["Green Peach Aphid", "Myzus Persicae"],
          states: ["All (except VIC)"],
          rate: "250",
          rateMax: "300",
          unit: "g/ha",
          note: "PERMIT PER94884 (exp. 31 Oct 2026). 500 g/kg product: 250–300 g/ha. Apply at first signs of aphid infestation. Max 2 applications per crop; min 14-day retreatment. Apply in min 50 L water/ha (ground) or 20 L/ha (aerial). WHP: 21 days harvest and grazing."
        }
      ]
    }

  ],  // end crops array

  // ── Agronomic fields ──────────────────────────────────────
  restraints: [
    "DO NOT apply unless wind speed is between 3 and 20 km/h at the application site.",
    "DO NOT apply by equipment carried on the back of the user.",
    "Anticholinesterase compound — exposure should be minimised.",
    "For resistance management, DO NOT apply consecutive applications of Pirimor — rotate with a different chemical group."
  ],

  withholding: {
    harvest: "Fruit, Vegetables: 2 days. Blackberries: 7 days. Canola, Mustard: 14 days. Adzuki bean, Mung bean, Soybean, Cotton: 21 days. Lupins, Winter cereals, Vetch: 6 weeks.",
    grazing: "Lucerne, Medic pastures: 3 days. Canola, Mustard: 14 days. Adzuki bean, Mung bean, Soybean, Cotton: 21 days. Lupins, Winter cereals: 6 weeks. Vetch: 6 weeks. Sweet potato: NOT for livestock feed."
  },

  compatibility: {
    compatible: [],
    incompatible: [],
    note: [
      "Pirimor WG is compatible with most commonly used fungicides and insecticides. However, as formulations of other manufacturers' products are beyond Syngenta's control, all mixtures should be tested prior to mixing commercial quantities."
    ]
  },

  surfactant:     "Add 18 mL Agral/100 L for apples, beetroot, brassicas, kale, radishes, swedes/turnips, canola/mustard, spring onion, and sweet potato uses. Summer Spray Oil (1% ground, 10% aerial) may be added under low humidity for broadacre crops.",
  sprayerCleanup: "Triple rinse containers before disposal. Add rinsings to spray tank."

};
