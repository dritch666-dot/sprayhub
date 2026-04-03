// ─────────────────────────────────────────────────────────
// FMC Trojan® Insecticide — Label Data
// Group 3A (Synthetic Pyrethroid) | Emulsifiable Concentrate
// Source: FMC_Trojan_Label.pdf
// APVMA Approval No: 63180
// FMC Australasia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['fmctrojan'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "FMC Trojan® Insecticide",
  company: "FMC",

  category:         "Insecticides",
  activeIngredient: "150 g/L Gamma-cyhalothrin",
  group:            "Group 3A (Synthetic Pyrethroid)",
  modeOfAction:     "Sodium channel modulator",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#047857",
  apvma:            "63180",
  labelPdf:         "Source labels/FMC_Trojan_Label.pdf",
  sdsPdf:           "SDS Labels/FMC_TROJAN_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Caterpillars", "Mites", "Aphids", "Bugs", "Helicoverpa"],
    timing: ["Curative"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Brassica Vegetables ──────────────────────────────────
    {
      crop: "Brassica Vegetables (Broccoli, Brussels Sprouts, Cabbage, Cauliflower)",
      cropList: ["Broccoli", "Brussels Sprouts", "Cabbage", "Cauliflower"],
      weeds: [
        {
          weed: "Diamondback Moth (Plutella xylostella)",
          pestList: ["Diamondback Moth"],
          states: ["All"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply when pests first appear",
          note: "20 mL/ha or 30 mL/ha. Use the higher rate if the pest pressure is high or larvae are larger than 10 mm. WHP: 2 days harvest."
        },
        {
          weed: "Cabbage White Butterfly (Pieris rapae)",
          pestList: ["Cabbage White Butterfly"],
          states: ["All"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply when pests first appear",
          note: "20 mL/ha or 30 mL/ha. Use the higher rate if the pest pressure is high or larvae are larger than 10 mm. WHP: 2 days harvest."
        },
        {
          weed: "Cabbage Cluster Caterpillar (Crocidolomia pavonana)",
          pestList: ["Cabbage Cluster Caterpillar"],
          states: ["All"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply when pests first appear",
          note: "20 mL/ha or 30 mL/ha. Use the higher rate if the pest pressure is high or larvae are larger than 10 mm. WHP: 2 days harvest."
        }
      ]
    },

    // ── Forage Brassicas ─────────────────────────────────────
    {
      crop: "Forage Brassicas",
      cropList: ["Forage Brassicas"],
      weeds: [
        {
          weed: "Diamondback Moth (Plutella xylostella)",
          pestList: ["Diamondback Moth"],
          states: ["All"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply when pests first appear",
          note: "20 mL/ha or 30 mL/ha. Use the higher rate if pest pressure is high or larvae are larger than 10 mm. WHP: 2 days grazing."
        },
        {
          weed: "Cabbage White Butterfly (Pieris rapae)",
          pestList: ["Cabbage White Butterfly"],
          states: ["All"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply when pests first appear",
          note: "20 mL/ha or 30 mL/ha. WHP: 2 days grazing."
        },
        {
          weed: "Cabbage Cluster Caterpillar (Crocidolomia pavonana)",
          pestList: ["Cabbage Cluster Caterpillar"],
          states: ["All"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply when pests first appear",
          note: "20 mL/ha or 30 mL/ha. WHP: 2 days grazing."
        }
      ]
    },

    // ── Canola ───────────────────────────────────────────────
    {
      crop: "Canola",
      cropList: ["Canola"],
      weeds: [
        {
          weed: "Cabbage Moth (Plutella xylostella), Cabbage White Butterfly (Pieris rapae)",
          pestList: ["Cabbage Moth", "Cabbage White Butterfly"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Apply when pests first appear",
          note: "WHP: 7 days harvest, grazing."
        },
        {
          weed: "Rutherglen Bug, Grey Cluster Bug (Nysius spp.)",
          pestList: ["Grey Cluster Bug", "Rutherglen Bug"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/ha",
          stage: "When present",
          note: "WHP: 7 days harvest, grazing."
        },
        {
          weed: "Thrips (Thrips tabaci)",
          pestList: ["Thrips"],
          states: ["Qld", "NSW", "ACT", "WA"],
          rate: "30",
          rateMax: "30",
          unit: "mL/ha",
          stage: "When present",
          note: "WHP: 7 days harvest, grazing."
        },
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["NSW", "ACT", "Vic", "SA", "WA"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply at hatching or soon after when larvae are small",
          note: "20 or 30 mL/ha. Use the higher rate if the crop is dense or the larvae are larger than 10 mm. WHP: 7 days harvest, grazing."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "8",
          rateMax: "8",
          unit: "mL/ha",
          stage: "At first sign of crop emergence",
          note: "8 mL/ha. Blue Oat Mites often co-occur with Redlegged Earthmites and the 8 mL/ha rate may be less effective against Blue Oat Mites. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained with this application."
        },
        {
          weed: "Balaustium Mite (Balaustium medicagoense), Blue Oat Mite (Penthaleus major)",
          pestList: ["Balaustium Mite", "Blue Oat Mite"],
          states: ["All"],
          rate: "16",
          rateMax: "24",
          unit: "mL/ha",
          stage: "When mites are present",
          note: "16 or 24 mL/ha. Use the higher rate for more rapid knockdown of Balaustium and Blue Oat Mite."
        }
      ]
    },

    // ── Winter Cereals ───────────────────────────────────────
    {
      crop: "Winter Cereals (Barley, Wheat, Oats, Triticale, Cereal Rye)",
      cropList: ["Barley", "Cereal Rye", "Oats", "Triticale", "Wheat"],
      weeds: [
        {
          weed: "Pasture Webworm (Hednota spp.)",
          pestList: ["Pasture Webworm"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "10",
          rateMax: "10",
          unit: "mL/ha",
          stage: "Apply once larvae are present",
          note: "Use adequate water to ensure good penetration. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Cutworms — Pink or Brown Cutworm (Agrotis munda)",
          pestList: ["Brown Cutworm", "Pink Cutworm"],
          states: ["All"],
          rate: "10",
          rateMax: "15",
          unit: "mL/ha",
          stage: "At first sign of infestation, before larvae are 10 mm long",
          note: "10 or 15 mL/ha. If larvae are longer than 10 mm, use the higher rate in a minimum of 50 L water/ha. DO NOT USE ULV APPLICATION FOR THIS PEST. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Common Cutworm (Agrotis infusa)",
          pestList: ["Common Cutworm"],
          states: ["NSW", "ACT"],
          rate: "10",
          rateMax: "15",
          unit: "mL/ha",
          stage: "At first sign of infestation, before larvae are 10 mm long",
          note: "10 or 15 mL/ha. If larvae are longer than 10 mm, use the higher rate in a minimum of 50 L water/ha. DO NOT USE ULV APPLICATION FOR THIS PEST. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Armyworms (Mythimna convecta, Persectania ewingii)",
          pestList: ["Armyworms"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/ha",
          stage: "When present",
          note: "WHP: 14 days harvest, grazing."
        },
        {
          weed: "Blackhead Pasture Cockchafer (Aphodius tasmaniae)",
          pestList: ["Blackhead Pasture Cockchafer"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "17",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Treat after autumn rains stimulate egg hatching",
          note: "17 or 35 mL/ha. Treat as soon as possible after autumn rains. For best results spray when larvae have surfaced to feed after rain. Preferably use a boom spray delivering 70-100 L water/ha. Use the lower rate until early June and the higher rate after mid-late June. DO NOT USE ULV APPLICATION FOR THIS PEST."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "8",
          rateMax: "8",
          unit: "mL/ha",
          stage: "At first sign of crop emergence",
          note: "8 mL/ha. Blue Oat Mites often co-occur with Redlegged Earthmites and the 8 mL/ha rate may be less effective against Blue Oat Mites. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained with this application."
        },
        {
          weed: "Balaustium Mite (Balaustium medicagoense), Blue Oat Mite (Penthaleus major)",
          pestList: ["Balaustium Mite", "Blue Oat Mite"],
          states: ["All"],
          rate: "16",
          rateMax: "24",
          unit: "mL/ha",
          stage: "When mites are present",
          note: "16 or 24 mL/ha. Use the higher rate for more rapid knockdown of Balaustium and Blue Oat Mite."
        },
        {
          weed: "Cereal Aphids — Oat Aphid (Rhopalosiphum padi), Corn Aphid (Rhopalosiphum maidis), Rose-grain Aphid (Metopolophium dirhodum)",
          pestList: ["Cereal Aphids", "Corn Aphid", "Oat Aphid", "Rose-Grain Aphid"],
          states: ["All"],
          rate: "10",
          rateMax: "35",
          unit: "mL/ha",
          stage: "When present",
          note: "10-35 mL/ha. Rate varies by aphid species and pressure. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Russian Wheat Aphid (Diuraphis noxia)",
          pestList: ["Russian Wheat Aphid"],
          states: ["All"],
          rate: "35",
          rateMax: "35",
          unit: "mL/ha",
          stage: "When present",
          note: "WHP: 14 days harvest, grazing."
        }
      ]
    },

    // ── Citrus ───────────────────────────────────────────────
    {
      crop: "Citrus (Oranges, Lemons)",
      cropList: ["Lemons", "Oranges"],
      weeds: [
        {
          weed: "Fuller's Rose Weevil (Naupactus godmanni)",
          pestList: ["Fullers Rose Weevil"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/100L",
          stage: "Directed spray to trunk and lower scaffold limbs",
          note: "250 mL/100 L as a directed spray applied to trunk and lower scaffold limbs. DO NOT apply to fruit. WHP: 28 days harvest."
        }
      ]
    },

    // ── Cotton ───────────────────────────────────────────────
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Helicoverpa spp. — Low egg pressure (< 2 eggs/m)",
          pestList: ["Corn Earworm", "Native Budworm"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "50",
          rateMax: "50",
          unit: "mL/ha",
          stage: "Low egg pressure (< 2 eggs per metre of row)",
          note: "50 mL/ha for low egg pressure. WHP: 21 days harvest."
        },
        {
          weed: "Helicoverpa spp. — Moderate egg pressure (2-4 eggs/m)",
          pestList: ["Corn Earworm", "Native Budworm"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "60",
          rateMax: "60",
          unit: "mL/ha",
          stage: "Moderate egg pressure (2-4 eggs per metre of row)",
          note: "60 mL/ha for moderate egg pressure. WHP: 21 days harvest."
        },
        {
          weed: "Helicoverpa spp. — High egg pressure (> 4 eggs/m)",
          pestList: ["Corn Earworm", "Native Budworm"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "70",
          rateMax: "70",
          unit: "mL/ha",
          stage: "High egg pressure (> 4 eggs per metre of row)",
          note: "70 mL/ha for high egg pressure. WHP: 21 days harvest."
        },
        {
          weed: "Pink-spotted Bollworm (Pectinophora scutigera)",
          pestList: ["Pink-Spotted Bollworm"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "60",
          rateMax: "60",
          unit: "mL/ha",
          stage: "When present",
          note: "WHP: 21 days harvest."
        },
        {
          weed: "Mirids, Green Mirid (Creontiades dilutus), other Mirid species",
          pestList: ["Green Mirid", "Mirids"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "50",
          rateMax: "50",
          unit: "mL/ha",
          stage: "When present",
          note: "WHP: 21 days harvest."
        }
      ]
    },

    // ── Field Peas ───────────────────────────────────────────
    {
      crop: "Field Peas",
      cropList: ["Field Peas"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["NSW", "ACT", "Vic", "SA", "WA"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply at hatching or soon after when larvae are small",
          note: "20 or 30 mL/ha. Use the higher rate if the crop is dense or the larvae are larger than 10 mm. WHP: 7 days harvest, grazing."
        },
        {
          weed: "Pea Weevil (Bruchus pisorum) — Vic, SA, WA",
          pestList: ["Pea Weevil"],
          states: ["Vic", "SA", "WA"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Apply when 50% of plants have set at least one pod",
          note: "20 mL/ha. Apply when 50% of plants have set at least one pod. Two applications at 10-14 day intervals. WHP: 7 days harvest, grazing."
        },
        {
          weed: "Pea Weevil (Bruchus pisorum) — NSW, ACT",
          pestList: ["Pea Weevil"],
          states: ["NSW", "ACT"],
          rate: "30",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply when 50% of plants have set at least one pod",
          note: "30 mL/ha. Apply when 50% of plants have set at least one pod. Two applications at 10-14 day intervals. WHP: 7 days harvest, grazing."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "8",
          rateMax: "8",
          unit: "mL/ha",
          stage: "At first sign of crop emergence",
          note: "8 mL/ha. Blue Oat Mites often co-occur with Redlegged Earthmites and the 8 mL/ha rate may be less effective against Blue Oat Mites. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained with this application."
        },
        {
          weed: "Balaustium Mite (Balaustium medicagoense), Blue Oat Mite (Penthaleus major)",
          pestList: ["Balaustium Mite", "Blue Oat Mite"],
          states: ["All"],
          rate: "16",
          rateMax: "24",
          unit: "mL/ha",
          stage: "When mites are present",
          note: "16 or 24 mL/ha. Use the higher rate for more rapid knockdown of Balaustium and Blue Oat Mite."
        }
      ]
    },

    // ── Lucerne ──────────────────────────────────────────────
    {
      crop: "Lucerne",
      cropList: ["Lucerne"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["All"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply at hatching or soon after",
          note: "20 or 30 mL/ha. Use higher rate if the crop is dense or the larvae are larger than 10 mm. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Lucerne Leaf Roller (Merophyas divulsana)",
          pestList: ["Lucerne Leaf Roller"],
          states: ["All"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply when about 30% of terminals are rolled",
          note: "20 or 30 mL/ha. For best results apply at hatching or soon after. Use higher rate if the crop is dense or the larvae are larger than 10 mm. Apply the first spray when about 30% of the terminals are rolled. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Pea Aphid (Acyrthosiphon pisum)",
          pestList: ["Pea Aphid"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "When present",
          note: "Good coverage, particularly the stems, is essential. Use hollow cone nozzles. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Blackhead Pasture Cockchafer (Aphodius tasmaniae)",
          pestList: ["Blackhead Pasture Cockchafer"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "17",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Treat after autumn rains stimulate egg hatching",
          note: "17 or 35 mL/ha. For best results spray when larvae have surfaced to feed after rain. Preferably use a boom spray delivering 70-100 L water/ha. Use the lower rate until early June and the higher rate after mid-late June. DO NOT USE ULV APPLICATION FOR THIS PEST."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "8",
          rateMax: "8",
          unit: "mL/ha",
          stage: "At first sign of crop emergence",
          note: "8 mL/ha. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained with this application."
        },
        {
          weed: "Balaustium Mite (Balaustium medicagoense), Blue Oat Mite (Penthaleus major)",
          pestList: ["Balaustium Mite", "Blue Oat Mite"],
          states: ["All"],
          rate: "16",
          rateMax: "24",
          unit: "mL/ha",
          stage: "When mites are present",
          note: "16 or 24 mL/ha. Use the higher rate for more rapid knockdown of Balaustium and Blue Oat Mite."
        }
      ]
    },

    // ── Lupins ───────────────────────────────────────────────
    {
      crop: "Lupins",
      cropList: ["Lupins"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["NSW", "ACT", "Vic", "SA", "WA"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply at hatching or soon after when larvae are small",
          note: "20 or 30 mL/ha. Use the higher rate if the crop is dense or the larvae are larger than 10 mm. WA only: Environmental factors may cause populations of small caterpillars to decline, reducing damage potential; spraying should commence once caterpillars are 12 mm in length. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Brown Pasture Looper (Ciampa arietaria)",
          pestList: ["Brown Pasture Looper"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "10",
          rateMax: "10",
          unit: "mL/ha",
          stage: "At first signs of damage after crop emergence",
          note: "Once crop has emerged, inspect regularly and apply at the first signs of damage. Use a minimum of 50 L water/ha. DO NOT USE ULV APPLICATION FOR THIS PEST."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "8",
          rateMax: "8",
          unit: "mL/ha",
          stage: "At first sign of crop emergence",
          note: "8 mL/ha. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained with this application."
        },
        {
          weed: "Balaustium Mite (Balaustium medicagoense), Blue Oat Mite (Penthaleus major)",
          pestList: ["Balaustium Mite", "Blue Oat Mite"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "16",
          rateMax: "24",
          unit: "mL/ha",
          stage: "When mites are present",
          note: "16 or 24 mL/ha. Use the higher rate for more rapid knockdown of Balaustium and Blue Oat Mite."
        }
      ]
    },

    // ── Pasture ──────────────────────────────────────────────
    {
      crop: "Pasture",
      cropList: ["Pasture"],
      weeds: [
        {
          weed: "Pasture Webworm (Hednota spp.)",
          pestList: ["Pasture Webworm"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "10",
          rateMax: "10",
          unit: "mL/ha",
          stage: "Apply once larvae are present",
          note: "Use adequate water to ensure good penetration. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Brown Pasture Looper (Ciampa arietaria)",
          pestList: ["Brown Pasture Looper"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "mL/ha",
          stage: "At first signs of damage",
          note: "DO NOT USE ULV APPLICATION FOR THIS PEST."
        },
        {
          weed: "Pink or Brown Cutworm (Agrotis munda)",
          pestList: ["Brown Cutworm", "Pink Cutworm"],
          states: ["All"],
          rate: "10",
          rateMax: "15",
          unit: "mL/ha",
          stage: "At first sign of infestation, before larvae are 10 mm long",
          note: "10 or 15 mL/ha. If larvae are longer than 10 mm, use the higher rate in a minimum of 50 L water/ha. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Common Cutworm (Agrotis infusa)",
          pestList: ["Common Cutworm"],
          states: ["NSW", "ACT"],
          rate: "10",
          rateMax: "15",
          unit: "mL/ha",
          stage: "At first sign of infestation, before larvae are 10 mm long",
          note: "10 or 15 mL/ha. If larvae are longer than 10 mm, use the higher rate in a minimum of 50 L water/ha. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Blackhead Pasture Cockchafer (Aphodius tasmaniae)",
          pestList: ["Blackhead Pasture Cockchafer"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "17",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Treat after autumn rains stimulate egg hatching",
          note: "17 or 35 mL/ha. For best results spray when larvae have surfaced to feed after rain. Preferably use a boom spray delivering 70-100 L water/ha. Use the lower rate until early June and the higher rate after mid-late June. DO NOT USE ULV APPLICATION FOR THIS PEST."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["All"],
          rate: "8",
          rateMax: "8",
          unit: "mL/ha",
          stage: "At first sign of crop emergence",
          note: "8 mL/ha. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained with this application."
        },
        {
          weed: "Balaustium Mite (Balaustium medicagoense), Blue Oat Mite (Penthaleus major)",
          pestList: ["Balaustium Mite", "Blue Oat Mite"],
          states: ["All"],
          rate: "16",
          rateMax: "24",
          unit: "mL/ha",
          stage: "When mites are present",
          note: "16 or 24 mL/ha. Use the higher rates for more rapid knockdown of Balaustium or Blue Oat Mite."
        }
      ]
    },

    // ── Potatoes ─────────────────────────────────────────────
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Vegetable Leafhopper / Jassids (Austroasca viridigrisea)",
          pestList: ["Jassids", "Vegetable Leafhopper"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Apply only when numbers are excessive",
          note: "WHP: 7 days harvest."
        }
      ]
    },

    // ── Chickpeas, Faba Beans, Lentils, Vetch ────────────────
    {
      crop: "Chickpeas, Faba Beans, Lentils, Vetch",
      cropList: ["Chickpeas", "Faba Beans", "Lentils", "Vetch"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm"],
          states: ["NSW", "ACT", "Vic", "SA", "WA"],
          rate: "20",
          rateMax: "30",
          unit: "mL/ha",
          stage: "Apply at hatching or soon after",
          note: "20 or 30 mL/ha. Use the higher rate if the crop is dense or the larvae are larger than 10 mm. WHP: 7 days harvest, grazing."
        },
        {
          weed: "Redlegged Earthmite (Halotydeus destructor)",
          pestList: ["Redlegged Earthmite"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "8",
          rateMax: "8",
          unit: "mL/ha",
          stage: "At first sign of crop emergence",
          note: "8 mL/ha. Monitor crop regularly for reinfestation and respray if necessary. Control of Lucerne Flea will not be obtained with this application."
        },
        {
          weed: "Balaustium Mite (Balaustium medicagoense), Blue Oat Mite (Penthaleus major)",
          pestList: ["Balaustium Mite", "Blue Oat Mite"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "16",
          rateMax: "24",
          unit: "mL/ha",
          stage: "When mites are present",
          note: "16 or 24 mL/ha. Use the higher rate for more rapid knockdown of Balaustium and Blue Oat Mite."
        }
      ]
    },

    // ── Navy Beans, Mung Beans ───────────────────────────────
    {
      crop: "Navy Beans, Mung Beans",
      cropList: ["Mung Beans", "Navy Beans"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Corn Earworm (Helicoverpa armigera)",
          pestList: ["Corn Earworm", "Native Budworm"],
          states: ["Qld", "NSW", "NT"],
          rate: "50",
          rateMax: "60",
          unit: "mL/ha",
          stage: "When flower or pod feeding larvae reach threshold",
          note: "50 or 60 mL/ha. Apply when flower or pod feeding larvae have reached a population of 1-2 per metre of row in navy beans and 1 per metre of row in mung beans. Use the higher rate if pest numbers are high or if larvae are larger than 10 mm. In Northern NSW and Qld where Corn Earworm has established resistance to pyrethroids, do not apply to Corn Earworm larvae larger than 5 mm. WHP: 1 day (harvest green); 14 days (harvest dry)."
        }
      ]
    },

    // ── Chickpeas, Faba Beans (Qld/Nth NSW — Helicoverpa) ───
    {
      crop: "Chickpeas, Faba Beans (Qld, Northern NSW — Helicoverpa)",
      cropList: ["Chickpeas", "Faba Beans"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Corn Earworm (Helicoverpa armigera)",
          pestList: ["Corn Earworm", "Native Budworm"],
          states: ["Qld", "NSW", "NT"],
          rate: "50",
          rateMax: "60",
          unit: "mL/ha",
          stage: "When flower or pod feeding larvae reach threshold",
          note: "50 or 60 mL/ha. Use the higher rate if pest numbers are high or if larvae are larger than 10 mm. In Northern NSW and Qld where Corn Earworm has established resistance to pyrethroids, do not apply to Corn Earworm larvae larger than 5 mm. WHP: 7 days harvest, grazing."
        }
      ]
    },

    // ── Sorghum ──────────────────────────────────────────────
    {
      crop: "Sorghum",
      cropList: ["Sorghum"],
      weeds: [
        {
          weed: "Sorghum Midge (Contarinia sorghicola)",
          pestList: ["Sorghum Midge"],
          states: ["Qld", "NSW", "NT"],
          rate: "15",
          rateMax: "30",
          unit: "mL/ha",
          stage: "When midge numbers reach 1-2 per head",
          note: "15 or 30 mL/ha. Use the higher rate for residual control. WHP: 14 days harvest, grazing."
        },
        {
          weed: "Corn Earworm (Helicoverpa armigera)",
          pestList: ["Corn Earworm"],
          states: ["Qld", "NSW", "NT"],
          rate: "50",
          rateMax: "60",
          unit: "mL/ha",
          stage: "When larval numbers reach 2 per head",
          note: "50 or 60 mL/ha. Use the higher rate if pest pressure is severe. Best results are achieved on small larvae. WHP: 14 days harvest, grazing."
        }
      ]
    },

    // ── Sunflower ────────────────────────────────────────────
    {
      crop: "Sunflower",
      cropList: ["Sunflowers"],
      weeds: [
        {
          weed: "Rutherglen Bug, Grey Cluster Bug (Nysius spp.)",
          pestList: ["Grey Cluster Bug", "Rutherglen Bug"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/ha",
          stage: "When numbers reach 10-15 adults per plant at budding",
          note: "30 mL/ha. Apply when numbers reach 10-15 adults per plant at budding in dryland crops or 20-25 in irrigated crops. If Helicoverpa armigera are also present in Northern NSW or Queensland, use a minimum of 50 mL product. WHP: 28 days harvest."
        },
        {
          weed: "Native Budworm (Helicoverpa punctigera), Corn Earworm (Helicoverpa armigera) — Qld, Nth NSW",
          pestList: ["Corn Earworm", "Native Budworm"],
          states: ["Qld", "NSW"],
          rate: "60",
          rateMax: "70",
          unit: "mL/ha",
          stage: "When 2-3 larvae per head or when larvae are damaging plants",
          note: "60 or 70 mL/ha. Use the higher rate if pest numbers are high and/or H. punctigera larvae are larger than 10 mm in length. In Northern NSW and Qld, do not apply to resistant H. armigera larvae larger than 5 mm in length. If flowering has started, defer application until after flowering but before heads turn down. If treatment is unavoidable during flowering and bees are foraging, spray early morning or late afternoon. WHP: 28 days harvest."
        },
        {
          weed: "Native Budworm (Helicoverpa punctigera), Corn Earworm (Helicoverpa armigera) — Sth NSW, ACT, Vic",
          pestList: ["Corn Earworm", "Native Budworm"],
          states: ["NSW", "ACT", "Vic"],
          rate: "40",
          rateMax: "50",
          unit: "mL/ha",
          stage: "When 2-3 larvae per head or when larvae are damaging plants",
          note: "40 or 50 mL/ha. Use the higher rate if pest numbers are high and/or H. punctigera larvae are larger than 10 mm in length. If flowering has started, defer application until after flowering but before heads turn down. If treatment is unavoidable during flowering and bees are foraging, spray early morning or late afternoon. WHP: 28 days harvest."
        }
      ]
    },

    // ── Soybeans ─────────────────────────────────────────────
    {
      crop: "Soybeans",
      cropList: ["Soybeans"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Corn Earworm (Helicoverpa armigera)",
          pestList: ["Corn Earworm", "Native Budworm"],
          states: ["Qld", "NSW", "ACT", "Vic", "NT"],
          rate: "50",
          rateMax: "60",
          unit: "mL/ha",
          stage: "When flower or pod feeding larvae reach 2 per metre of row",
          note: "50 or 60 mL/ha. Use the higher rate if pest numbers are high or if larvae are larger than 10 mm. In Northern NSW and Qld DO NOT apply to resistant H. armigera larvae larger than 5 mm in length. WHP: 21 days harvest, grazing."
        }
      ]
    },

    // ── Tomatoes (Trellis) ───────────────────────────────────
    {
      crop: "Tomatoes (Trellis)",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Tomato Grub (Helicoverpa armigera)",
          pestList: ["Native Budworm", "Tomato Grub"],
          states: ["All"],
          rate: "3.5",
          rateMax: "4",
          unit: "mL/100L",
          stage: "Treat on a 7 to 14 day schedule",
          note: "3.5 or 4 mL/100 L. In Northern NSW and Qld, DO NOT apply to Helicoverpa armigera larvae larger than 5 mm. In other areas, for best results apply soon after egg lay. To help manage resistance, alternate sprays between different chemical groups. Check the crop every few days and follow the Summer Crop Insecticide Strategy. There may be phytotoxicity with some varieties, especially Floradade. WHP: 1 day harvest."
        }
      ]
    },

    // ── Tomatoes (Bush) — Vic, Tas, SA, WA ───────────────────
    {
      crop: "Tomatoes (Bush) — Vic, Tas, SA, WA",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Tomato Grub (Helicoverpa armigera)",
          pestList: ["Native Budworm", "Tomato Grub"],
          states: ["Vic", "Tas", "SA", "WA"],
          rate: "3.5",
          rateMax: "4",
          unit: "mL/100L",
          stage: "Treat on a 7 to 14 day schedule",
          note: "3.5 or 4 mL/100 L or 25 or 30 mL/ha. Check the crop every few days and follow the Summer Crop Insecticide Strategy. There may be phytotoxicity with some varieties, especially Floradade. WHP: 1 day harvest."
        }
      ]
    },

    // ── Tomatoes (Bush) — Qld, NSW, ACT, NT ──────────────────
    {
      crop: "Tomatoes (Bush) — Qld, NSW, ACT, NT",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Tomato Grub (Helicoverpa armigera)",
          pestList: ["Native Budworm", "Tomato Grub"],
          states: ["Qld", "NSW", "ACT", "NT"],
          rate: "3.5",
          rateMax: "50",
          unit: "mL/100L",
          stage: "Treat on a 7 to 14 day schedule",
          note: "3.5 mL/100 L or 50 mL/ha. Check the crop every few days and follow the Summer Crop Insecticide Strategy. There may be phytotoxicity with some varieties, especially Floradade. In Northern NSW and Qld, DO NOT apply to H. armigera larvae larger than 5 mm. WHP: 1 day harvest."
        }
      ]
    },

  ],  // end crops array

  // ── Agronomic fields ──────────────────────────────────────
  restraints: [
    "DO NOT use for any purpose, or in any manner, contrary to this label unless authorised under appropriate legislation.",
    "DO NOT USE ULV APPLICATION for Blackhead Pasture Cockchafer, Cutworms, or Brown Pasture Looper.",
    "In Northern NSW and Qld, DO NOT apply to resistant Helicoverpa armigera larvae larger than 5 mm in length.",
    "DO NOT apply if heavy rain is expected within 2 hours of application."
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Refer to label for specific tank mix compatibility information."]
  },

  withholding: {
    harvest: "Tomatoes, Mung Beans (green), Navy Beans (green): 1 day. Brassica Vegetables, Forage Brassicas: 2 days. Field Peas, Canola, Faba Beans, Chickpeas, Vetch, Lentils, Potatoes: 7 days. Lupins, Sorghum, Mung Beans (dry), Navy Beans (dry), Barley, Wheat, Oats, Cereal Rye, Triticale, Pasture, Lucerne: 14 days. Cotton, Soybeans: 21 days. Sunflower, Oranges, Lemons: 28 days.",
    grazing: "Forage Brassicas, Mung Beans (green), Navy Beans (green): 1-2 days. Field Peas, Canola, Faba Beans, Chickpeas, Vetch, Lentils: 7 days. Lupins, Sorghum, Mung Beans (dry), Navy Beans (dry), Barley, Wheat, Oats, Cereal Rye, Triticale, Pasture, Lucerne: 14 days. Soybeans: 21 days. ESI: 42 days. EGI: 56 days."
  },

  surfactant:     "Refer to label for specific adjuvant requirements per crop situation.",
  sprayerCleanup: "Refer to label for sprayer cleanup instructions."

};
