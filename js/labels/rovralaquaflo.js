// ─────────────────────────────────────────────────────────
// FMC ROVRAL® AQUAFLO FUNGICIDE — Label Data
// Group 2 Fungicide (Iprodione)
// Source: FMC_RovralAquaflo_Label.pdf
// APVMA Approval No: 45725/132407
// FMC Australasia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['rovralaquaflo'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Rovral® Aquaflo Fungicide",

  category:         "Fungicides",
  activeIngredient: "500 g/L Iprodione",
  group:            "Group 2 Fungicide",
  modeOfAction:     "Dicarboximide — contact fungicide for control of various fungal diseases. May be unstable at pH 7 or higher; check pH of spray solution before adding and use a buffering agent if necessary.",
  formulation:      "Aqueous Flowable Suspension",
  color:            "#4a7c59",
  apvma:            "45725/132407",
  company: "Bayer",
  labelPdf:         "Source labels/FMC_RovralAquaflo_Label.pdf",
  sdsPdf:           "SDS Labels/FMC_RovralAquaflo_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Botrytis", "Sclerotinia", "Monilinia", "Alternaria", "Rhizoctonia", "Fusarium", "Brown Rot", "Grey Mould"],
    timing: ["Protectant", "Curative"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ═══════════════════════════════════════════════════════════
    //  TREE CROPS / VINES
    // ═══════════════════════════════════════════════════════════

    // ── 1. Almonds ──
    {
      crop: "Almonds",
      cropList: ["Almonds"],
      weeds: [
        {
          weed: "Blossom Blight, Brown Rot (Monilinia spp., Sclerotinia spp.)",
          pestList: ["Blossom Blight", "Brown Rot", "Monilinia", "Sclerotinia"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "mL/100L",
          stage: "Apply first at full bloom",
          note: "50 mL/100 L water (dilute spraying). Apply first at full bloom; if conditions favour disease, up to two subsequent applications at petal fall and up to four weeks after petal fall. WHP: Nil."
        }
      ]
    },

    // ── 2. Grapes ──
    {
      crop: "Grapes",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Grey Mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis", "Botrytis Cinerea"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply during flowering/pre-harvest as per CropLife resistance management strategy",
          note: "100 mL/100 L water (dilute spraying). Good crop hygiene will aid disease control. Subject to CropLife Australia fungicide resistance management strategy — number of consecutive and total Group 2 applications is limited. WHP: 7 days."
        }
      ]
    },

    // ── 3. Kiwifruit ──
    {
      crop: "Kiwifruit",
      cropList: ["Kiwifruit"],
      weeds: [
        {
          weed: "Botrytis Blight (Botrytis spp.)",
          pestList: ["Botrytis Blight", "Botrytis"],
          states: ["NSW", "Vic", "WA"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply every 10–14 days ensuring all fruit is thoroughly wet",
          note: "100 mL/100 L water (dilute spraying). Apply 3 applications at 10–14 day intervals from 10% bloom to petal fall for flower/young fruit protection. Apply a further 2 applications to control late season Botrytis. WHP: 7 days."
        }
      ]
    },

    // ── 4. Macadamias ──
    {
      crop: "Macadamias",
      cropList: ["Macadamias"],
      weeds: [
        {
          weed: "Botrytis Blight (Botrytis spp.)",
          pestList: ["Botrytis Blight", "Botrytis"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "mL/100L",
          stage: "Apply as thorough cover spray to flower racemes when they open",
          note: "50 mL/100 L water (dilute spraying). Apply to flower racemes when they open. Follow-up spray may be needed one week later if wet conditions persist during flowering. Remove nuts under trees prior to spraying. WHP: Nil."
        }
      ]
    },

    // ── 5. Mandarins (Non-bearing) ──
    {
      crop: "Mandarins (Non-bearing)",
      cropList: ["Mandarins"],
      weeds: [
        {
          weed: "Alternaria Leaf Spot — Brown Spot",
          pestList: ["Alternaria Leaf Spot", "Brown Spot", "Alternaria"],
          states: ["Qld", "WA", "NT"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply to non-bearing trees of Murcott variety monthly from first flush in spring",
          note: "100 mL/100 L water (dilute spraying). Apply monthly from first flush in spring until flushing ceases in autumn. Reduce intervals to fortnightly during wet weather. Non-bearing trees only (Murcott variety). WHP: Not required (non-bearing)."
        }
      ]
    },

    // ── 6. Passionfruit ──
    {
      crop: "Passionfruit",
      cropList: ["Passionfruit"],
      weeds: [
        {
          weed: "Alternata Spot — Brown Spot",
          pestList: ["Alternata Spot", "Brown Spot", "Alternaria"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Strategic periods — before, during and after extended wet periods",
          note: "100 mL/100 L water (dilute spraying). Maintain protective cover with protectant fungicide such as mancozeb. Limit Rovral use to strategic periods (before, during and after extended wet periods). Always tank mix with protectant (mancozeb). Do NOT apply more than 4 Rovral (or other Group 2 fungicide) sprays per season. WHP: 1 day."
        }
      ]
    },

    // ── 7. Stone Fruit — Orchard Spraying ──
    {
      crop: "Stone Fruit — Orchard Spraying",
      cropList: ["Apricots", "Cherries", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "Blossom Blight (Monilinia fructicola, Monilinia laxa)",
          pestList: ["Blossom Blight", "Monilinia Fructicola", "Monilinia Laxa"],
          states: ["Qld", "NSW", "Vic", "Tas", "SA", "WA"],
          rate: "50",
          rateMax: "75",
          unit: "mL/100L",
          stage: "Critical timings: 10% blossom, full bloom, petal/shuck fall",
          note: "50–75 mL/100 L water (dilute spraying). Critical timings: 10% blossom, full bloom and petal/shuck fall for blossom blight; 3 weeks and 1 week pre-harvest for brown rot in fruit. Use higher rate under severe conditions or for single applications. Subject to CropLife resistance management — consecutive Group 2 applications limited. WHP: Nil."
        },
        {
          weed: "Brown Rot (Monilinia fructicola, Monilinia laxa)",
          pestList: ["Brown Rot", "Monilinia Fructicola", "Monilinia Laxa"],
          states: ["Qld", "NSW", "Vic", "Tas", "SA", "WA"],
          rate: "50",
          rateMax: "75",
          unit: "mL/100L",
          stage: "Apply 3 weeks and 1 week pre-harvest",
          note: "50–75 mL/100 L water (dilute spraying). Apply 3 weeks and 1 week pre-harvest. Use higher rate under severe conditions. Subject to CropLife resistance management strategy. WHP: Nil."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  POST-HARVEST DIPPING
    // ═══════════════════════════════════════════════════════════

    // ── 8. Pome Fruit — Post-harvest Dipping ──
    {
      crop: "Pome Fruit — Post-harvest Dipping",
      cropList: ["Apples", "Pears"],
      weeds: [
        {
          weed: "Storage Rots (Penicillium spp., Botrytis spp., Gloeosporium spp.)",
          pestList: ["Storage Rots", "Penicillium", "Botrytis", "Gloeosporium"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Post-harvest dip — dip promptly after harvest",
          note: "100 mL/100 L water post-harvest dip. Handle fruit carefully to avoid injury; dip promptly after harvest. Remove infected fruit immediately. Top up dip with 100 mL per 100 L water. Do NOT use a Group 2 fungicide as the final pre-harvest spray. Rotation between different modes of action in post-harvest dips is advised. WHP: Nil."
        }
      ]
    },

    // ── 9. Stone Fruit — Post-harvest Dipping ──
    {
      crop: "Stone Fruit — Post-harvest Dipping",
      cropList: ["Apricots", "Cherries", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "Brown Rot (Monilinia fructicola, Monilinia laxa)",
          pestList: ["Brown Rot", "Monilinia Fructicola", "Monilinia Laxa"],
          states: ["Qld", "NSW", "Vic", "Tas", "SA", "WA"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Post-harvest dip",
          note: "100 mL/100 L water post-harvest dip. Handle fruit carefully; dip promptly after harvest. Top up dip with 200 mL per 100 L water. Add a non-ionic wetting agent. Do NOT use a Group 2 fungicide as the final pre-harvest field spray. WHP: Nil (post-harvest)."
        },
        {
          weed: "Transit Rot (Rhizopus spp.) — Suppression only",
          pestList: ["Transit Rot", "Rhizopus"],
          states: ["Qld", "NSW", "Vic", "Tas", "SA", "WA"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Post-harvest dip — suppression only",
          note: "100 mL/100 L water post-harvest dip. Transit rot is suppressed only at this rate. WHP: Nil (post-harvest)."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  BERRIES
    // ═══════════════════════════════════════════════════════════

    // ── 10. Strawberries ──
    {
      crop: "Strawberries",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Grey Mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis", "Botrytis Cinerea"],
          states: ["All"],
          rate: "1.0",
          rateMax: "1.0",
          unit: "L/ha",
          stage: "Apply during flowering when conditions favour disease development",
          note: "1.0 L/ha (spray volume <1000 L/ha) OR 100 mL/100 L water (spray volume ≥1000 L/ha). Apply protectant fungicides during flowering; use Rovral if conditions favour disease. Do NOT apply more than two successive sprays of Rovral (or other Group 2 Fungicide). WHP: 1 day."
        }
      ]
    },

    // ── 11. Blueberries ──
    {
      crop: "Blueberries",
      cropList: ["Blueberries"],
      weeds: [
        {
          weed: "Grey Mould (Botrytis spp.)",
          pestList: ["Grey Mould", "Botrytis"],
          states: ["NSW", "Qld", "Tas", "WA"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply every 10–14 days from flowering",
          note: "100 mL/100 L water (dilute spraying). Apply every 10–14 days from flowering. WHP: 1 day."
        }
      ]
    },

    // ── 12. Raspberries ──
    {
      crop: "Raspberries",
      cropList: ["Raspberries"],
      weeds: [
        {
          weed: "Grey Mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis", "Botrytis Cinerea"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Spray at 10% blossom and full bloom; for fruit protection apply 2–3 weeks pre-harvest",
          note: "100 mL/100 L water (dilute spraying). Spray at 10% blossom and full bloom. For fruit protection, apply at 2–3 weeks pre-harvest. WHP: 1 day."
        }
      ]
    },

    // ── 13. Youngberries ──
    {
      crop: "Youngberries",
      cropList: ["Youngberries"],
      weeds: [
        {
          weed: "Grey Mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis", "Botrytis Cinerea"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Spray at 10% blossom and full bloom; for fruit protection apply 2–3 weeks pre-harvest",
          note: "100 mL/100 L water (dilute spraying). Spray at 10% blossom and full bloom. For fruit protection, apply at 2–3 weeks pre-harvest. WHP: 1 day."
        }
      ]
    },

    // ── 14. Boysenberries ──
    {
      crop: "Boysenberries",
      cropList: ["Boysenberries"],
      weeds: [
        {
          weed: "Grey Mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis", "Botrytis Cinerea"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Spray at 10% blossom and full bloom; for fruit protection apply 2–3 weeks pre-harvest",
          note: "100 mL/100 L water (dilute spraying). Spray at 10% blossom and full bloom. For fruit protection, apply at 2–3 weeks pre-harvest. WHP: 1 day."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  VEGETABLES
    // ═══════════════════════════════════════════════════════════

    // ── 15. Celery ──
    {
      crop: "Celery",
      cropList: ["Celery"],
      weeds: [
        {
          weed: "Sclerotinia Rot — Pink Rot (Sclerotinia sclerotiorum)",
          pestList: ["Sclerotinia Rot", "Pink Rot", "Sclerotinia", "Sclerotinia Sclerotiorum"],
          states: ["All"],
          rate: "1.0",
          rateMax: "1.0",
          unit: "L/ha",
          stage: "Commence 1–2 weeks post-transplanting, then every 2–3 weeks",
          note: "1.0 L/ha (spray volume <1000 L/ha) OR 100 mL/100 L water (spray volume ≥1000 L/ha). Commence spraying 1–2 weeks post-transplanting then every 2–3 weeks. Use only five sprays. WHP: 1 day."
        }
      ]
    },

    // ── 16. Lettuces ──
    {
      crop: "Lettuces",
      cropList: ["Lettuces", "Lettuce"],
      weeds: [
        {
          weed: "Sclerotinia Rot — Drop (Sclerotinia sclerotiorum, Sclerotinia minor)",
          pestList: ["Sclerotinia Rot", "Drop", "Sclerotinia", "Sclerotinia Sclerotiorum", "Sclerotinia Minor"],
          states: ["All"],
          rate: "1.0",
          rateMax: "1.0",
          unit: "L/ha",
          stage: "Direct spray to stems at ground level and underside of lower leaves",
          note: "1.0 L/ha (spray volume <1000 L/ha) OR 100 mL/100 L water (spray volume ≥1000 L/ha). Direct spray to stems at ground level and underside of lower leaves. Apply as seedling drench soon after emergence; apply protectant as high volume foliar spray before planting out, then Rovral immediately after planting. Maintain cover with protectant sprays at 7–10 day intervals. Do NOT apply Rovral (or other Group 2) more than four times per season. WHP: 7 days."
        },
        {
          weed: "Grey Mould (Botrytis spp.)",
          pestList: ["Grey Mould", "Botrytis"],
          states: ["Tas", "WA"],
          rate: "1.0",
          rateMax: "1.0",
          unit: "L/ha",
          stage: "If weather conditions favour Botrytis infection, tank mix protectant with Rovral",
          note: "1.0 L/ha (spray volume <1000 L/ha) OR 100 mL/100 L water (spray volume ≥1000 L/ha). If weather favours Botrytis infection, tank mix protectant with Rovral. Do NOT apply more than four Group 2 sprays per season irrespective of target disease. WHP: 7 days."
        }
      ]
    },

    // ── 17. Potatoes ──
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia sclerotiorum)",
          pestList: ["Sclerotinia Rot", "Sclerotinia", "Sclerotinia Sclerotiorum"],
          states: ["All"],
          rate: "500",
          rateMax: "1000",
          unit: "mL/ha",
          stage: "Apply 2 sprays — once immediately before and once immediately after hilling-up",
          note: "500 mL–1.0 L/ha (spray volume <1000 L/ha) OR 50–100 mL/100 L water (spray volume ≥1000 L/ha). Apply once before and once after hilling-up. Concentrate spray at base of stems and surrounding soil. Use higher rate where disease is severe. WHP: Nil."
        },
        {
          weed: "Target Spot — Early Blight (Alternaria solani)",
          pestList: ["Target Spot", "Early Blight", "Alternaria Solani", "Alternaria"],
          states: ["All"],
          rate: "500",
          rateMax: "1000",
          unit: "mL/ha",
          stage: "Treatment generally not required until after flowering",
          note: "500 mL–1.0 L/ha (spray volume <1000 L/ha) OR 50–100 mL/100 L water (spray volume ≥1000 L/ha). Ensure thorough coverage of whole plant. Treatment generally not required until after flowering. Use higher rate where disease is severe. Limit use to periods when conditions favour disease. Subject to CropLife resistance management — consecutive Group 2 applications limited. WHP: Nil."
        },
        {
          weed: "Hypocotyl Rot — Black Scurf (Rhizoctonia solani)",
          pestList: ["Hypocotyl Rot", "Black Scurf", "Rhizoctonia", "Rhizoctonia Solani"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "mL/tonne",
          stage: "Seed treatment — apply at time of planting",
          note: "400 mL/tonne seed material. Protects emerging shoots from hypocotyl rot, improving germination. May also reduce black scurf on harvested potatoes. Ensure good coverage of seed material and planting furrow. Apply as fine spray to seed at planting using equipment mounted on planter with nozzles at three points on each row. Minimum 80 L water/tonne seed. Do NOT plant into waterlogged soil. WHP: Nil."
        }
      ]
    },

    // ── 18. Tomatoes ──
    {
      crop: "Tomatoes",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia sclerotiorum)",
          pestList: ["Sclerotinia Rot", "Sclerotinia", "Sclerotinia Sclerotiorum"],
          states: ["Qld", "NSW", "Tas", "SA", "WA"],
          rate: "1.0",
          rateMax: "1.0",
          unit: "L/ha",
          stage: "Spray at 14-day intervals from transplanting",
          note: "1.0 L/ha (spray volume <1000 L/ha) OR 100 mL/100 L water (spray volume ≥1000 L/ha). Spray at 14-day intervals from transplanting throughout disease pressure period. WHP: 7 days."
        },
        {
          weed: "Grey Mould (Botrytis spp.)",
          pestList: ["Grey Mould", "Botrytis"],
          states: ["All"],
          rate: "1.0",
          rateMax: "1.0",
          unit: "L/ha",
          stage: "Commence 3–4 weeks after transplanting or at onset of disease; repeat at 14-day intervals",
          note: "1.0 L/ha (spray volume <1000 L/ha) OR 100 mL/100 L water (spray volume ≥1000 L/ha). Commence 3–4 weeks after transplanting or at disease onset. Repeat at 14-day intervals or when conditions favour spread (at trimming/deleafing). Alternate or tank mix with protectant (chlorothalonil). Avoid two consecutive Group 2 sprays unless tank mixed with protectant. Do NOT apply more than four Group 2 sprays per season. WHP: 7 days."
        },
        {
          weed: "Target Spot — Early Blight (Alternaria solani)",
          pestList: ["Target Spot", "Early Blight", "Alternaria Solani", "Alternaria"],
          states: ["Qld", "Tas", "WA", "NT"],
          rate: "1.0",
          rateMax: "1.0",
          unit: "L/ha",
          stage: "Commence 1 week post-transplanting; use high volume spray equipment",
          note: "1.0 L/ha (spray volume <1000 L/ha) OR 100 mL/100 L water (spray volume ≥1000 L/ha). Commence 1 week post-transplanting. Use adequate water for thorough coverage with high volume spray equipment. Limit use to periods when conditions favour disease. Do NOT apply more than four Group 2 sprays per season; apply no more than two consecutive Group 2 sprays. WHP: 7 days."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  FIELD CROPS
    // ═══════════════════════════════════════════════════════════

    // ── 19. Lucerne ──
    {
      crop: "Lucerne",
      cropList: ["Lucerne"],
      weeds: [
        {
          weed: "Lucerne Leaf Spot (Stemphylium botryosum)",
          pestList: ["Lucerne Leaf Spot", "Stemphylium", "Stemphylium Botryosum"],
          states: ["Qld", "WA"],
          rate: "250",
          rateMax: "500",
          unit: "mL/ha",
          stage: "Spray every 10–14 days when cool, damp weather favours disease",
          note: "250–500 mL/ha (spray volume <1000 L/ha) OR 25–50 mL/100 L water (spray volume ≥1000 L/ha). Spray every 10–14 days when cool damp weather favours disease. Use higher rate under high disease pressure. WHP: 7 days (do not graze or cut for stock food within 7 days of treatment)."
        },
        {
          weed: "Leptosphaerulina Leaf Spot (Leptosphaerulina trifolii)",
          pestList: ["Leptosphaerulina Leaf Spot", "Leptosphaerulina", "Leptosphaerulina Trifolii"],
          states: ["Qld", "WA"],
          rate: "250",
          rateMax: "500",
          unit: "mL/ha",
          stage: "Apply in at least 300 L water/ha every 10–14 days",
          note: "250–500 mL/ha (spray volume <1000 L/ha) OR 25–50 mL/100 L water (spray volume ≥1000 L/ha). Apply in at least 300 L water/ha every 10–14 days when cool damp weather favours disease. Use higher rate under high disease pressure. WHP: 7 days (do not graze or cut for stock food within 7 days of treatment)."
        }
      ]
    },

    // ── 20. Peanuts ──
    {
      crop: "Peanuts",
      cropList: ["Peanuts"],
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia sclerotiorum, Sclerotinia minor)",
          pestList: ["Sclerotinia Rot", "Sclerotinia", "Sclerotinia Sclerotiorum", "Sclerotinia Minor"],
          states: ["All"],
          rate: "1.0",
          rateMax: "1.0",
          unit: "L/ha",
          stage: "Apply when disease first appears; repeat if necessary",
          note: "1.0 L/ha OR 220 mL/100 L water (spot application). Apply when disease first appears; repeat if necessary. Use high water volume for good coverage of foliage and stem at ground level. Do NOT mix with a foliar fungicide due to different target positions on the plant. WHP: 12 days."
        }
      ]
    },

    // ── 21. Soybeans ──
    {
      crop: "Soybeans",
      cropList: ["Soybeans"],
      weeds: [
        {
          weed: "Black Leaf Blight (Arkoola nigra)",
          pestList: ["Black Leaf Blight", "Arkoola Nigra"],
          states: ["NSW", "WA"],
          rate: "1.0",
          rateMax: "1.0",
          unit: "L/ha",
          stage: "Apply initial spray at early pod set (pods approx. 5 mm long)",
          note: "1.0 L/200–400 L water/ha. If disease present on leaves, apply initial spray at early pod set (pods ~5 mm long). An additional spray 14 days later may be required if wet conditions prevail. WHP: 7 weeks."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  ORNAMENTALS
    // ═══════════════════════════════════════════════════════════

    // ── 22. Ornamentals ──
    {
      crop: "Ornamentals",
      cropList: ["Ornamentals"],
      weeds: [
        {
          weed: "Botrytis Blight (Botrytis cinerea)",
          pestList: ["Botrytis Blight", "Botrytis", "Botrytis Cinerea"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Spray at 14-day intervals from disease onset",
          note: "100 mL/100 L water. Spray at 14-day intervals from when disease first becomes apparent, continuing until conditions no longer favour disease. Spraying saintpaulia and poinsettia flowers may cause some petal scorch — use tepid water and protect wet plants from direct sunlight. Do NOT apply more than two consecutive Group 2 sprays."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  RECREATIONAL TURF
    // ═══════════════════════════════════════════════════════════

    // ── 23. Recreational Turf — Brown Patch / Dollar Spot ──
    {
      crop: "Recreational Turf — Brown Patch / Dollar Spot",
      cropList: ["Recreational Turf", "Turf"],
      weeds: [
        {
          weed: "Brown Patch (Rhizoctonia solani)",
          pestList: ["Brown Patch", "Rhizoctonia", "Rhizoctonia Solani"],
          states: ["Qld", "NSW", "Tas", "SA", "WA"],
          rate: "60",
          rateMax: "90",
          unit: "mL/100m²",
          stage: "Curative: repeat after 14 days. Preventative: monthly spray program",
          note: "60–90 mL in 10–150 L water per 100 m². Curative: repeat after 14 days; use higher rate under severe pressure. Preventative: apply as monthly spray program. Do NOT apply more than 2 consecutive Rovral or dicarboximide sprays unless tank mixed with different activity group. Do NOT graze treated areas or feed clippings to animals."
        },
        {
          weed: "Dollar Spot (Sclerotinia homooeocarpa)",
          pestList: ["Dollar Spot", "Sclerotinia Homooeocarpa"],
          states: ["Qld", "NSW", "Tas", "SA", "WA"],
          rate: "60",
          rateMax: "90",
          unit: "mL/100m²",
          stage: "Curative: repeat after 14 days. Preventative: monthly spray program",
          note: "60–90 mL in 10–150 L water per 100 m². Curative: repeat after 14 days; use higher rate under severe pressure. Preventative: apply as monthly spray program. Do NOT apply more than 2 consecutive Rovral or dicarboximide sprays unless tank mixed with different activity group."
        }
      ]
    },

    // ── 24. Recreational Turf — Brown Patch (Vic only) ──
    {
      crop: "Recreational Turf — Brown Patch (Vic)",
      cropList: ["Recreational Turf", "Turf"],
      weeds: [
        {
          weed: "Brown Patch (Curvularia spp., Dreschlera spp., Fusarium culmorum)",
          pestList: ["Brown Patch", "Curvularia", "Dreschlera", "Fusarium Culmorum"],
          states: ["Vic"],
          rate: "90",
          rateMax: "90",
          unit: "mL/100m²",
          stage: "Apply in 10–150 L water per 100 m²",
          note: "90 mL in 10–150 L water per 100 m². Do NOT graze treated areas or feed clippings to animals."
        }
      ]
    },

    // ── 25. Recreational Turf — Fusarium Patch ──
    {
      crop: "Recreational Turf — Fusarium Patch",
      cropList: ["Recreational Turf", "Turf"],
      weeds: [
        {
          weed: "Fusarium Patch (Fusarium nivale)",
          pestList: ["Fusarium Patch", "Fusarium Nivale", "Fusarium"],
          states: ["NSW", "Vic", "Tas", "SA", "WA"],
          rate: "90",
          rateMax: "90",
          unit: "mL/100m²",
          stage: "Curative: repeat after 14 days. Preventative: monthly spray program",
          note: "90 mL in 10–150 L water per 100 m². Curative: repeat after 14 days; use higher rate under severe pressure. Preventative: apply as monthly spray program. Do NOT apply more than 2 consecutive Rovral or dicarboximide sprays unless tank mixed with different activity group."
        }
      ]
    },

    // ── 26. Recreational Turf — Leaf Spot ──
    {
      crop: "Recreational Turf — Leaf Spot",
      cropList: ["Recreational Turf", "Turf"],
      weeds: [
        {
          weed: "Leaf Spot (Dreschlera spp.)",
          pestList: ["Leaf Spot", "Dreschlera"],
          states: ["Qld", "NSW", "Vic", "SA", "WA"],
          rate: "60",
          rateMax: "60",
          unit: "mL/100m²",
          stage: "Apply in 10–150 L water per 100 m²",
          note: "60 mL in 10–150 L water per 100 m². Do NOT graze treated areas or feed clippings to animals."
        }
      ]
    },

    // ── 27. Recreational Turf — Spring Dead Spot (Leptosphaeria) ──
    {
      crop: "Recreational Turf — Spring Dead Spot (Leptosphaeria)",
      cropList: ["Recreational Turf", "Turf"],
      weeds: [
        {
          weed: "Spring Dead Spot (Leptosphaeria spp.)",
          pestList: ["Spring Dead Spot", "Leptosphaeria"],
          states: ["NSW", "SA"],
          rate: "65",
          rateMax: "65",
          unit: "mL/100m²",
          stage: "Preventative: monthly soil drench throughout the year; water in thoroughly",
          note: "65 mL in 10–150 L water per 100 m². Preventative: apply as monthly soil drench throughout the year; water in thoroughly after application. Will limit development of Leptosphaeria and improve rate of turf recovery. Do NOT apply more than 2 consecutive Rovral or dicarboximide sprays unless tank mixed with different activity group."
        }
      ]
    },

    // ── 28. Recreational Turf — Spring Dead Spot (Helminthosporium) ──
    {
      crop: "Recreational Turf — Spring Dead Spot (Helminthosporium)",
      cropList: ["Recreational Turf", "Turf"],
      weeds: [
        {
          weed: "Spring Dead Spot (Helminthosporium spp.)",
          pestList: ["Spring Dead Spot", "Helminthosporium"],
          states: ["Vic", "WA"],
          rate: "65",
          rateMax: "65",
          unit: "mL/100m²",
          stage: "Apply in 10–150 L water per 100 m²",
          note: "65 mL in 10–150 L water per 100 m². Do NOT graze treated areas or feed clippings to animals."
        }
      ]
    },

    // ── 29. Recreational Turf — Helminthosporium Disease ──
    {
      crop: "Recreational Turf — Helminthosporium Disease",
      cropList: ["Recreational Turf", "Turf"],
      weeds: [
        {
          weed: "Helminthosporium Disease — Black & White Spot (Bipolaris spp., Dreschlera spp.)",
          pestList: ["Helminthosporium", "Black Spot", "White Spot", "Bipolaris", "Dreschlera"],
          states: ["Qld", "NSW", "Vic", "SA", "WA"],
          rate: "45",
          rateMax: "45",
          unit: "mL/100m²",
          stage: "Curative: foliar spray, repeat after 7–14 days. Preventative: monthly from February to May",
          note: "45 mL in 10–150 L water per 100 m². Curative: apply as foliar spray, repeat after 7–14 days. For white spot on couch grass (Cynodon dactylon) only, use higher water volumes of 100–150 L per 100 m². Preventative: apply as high volume foliar spray, repeat monthly from February to May. Do NOT apply more than 2 consecutive Rovral or dicarboximide sprays unless tank mixed with different activity group."
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  PERMIT USES
    // ═══════════════════════════════════════════════════════════

    // ── 30. Peppers / Capsicum / Chillies / Paprika (PER14353) ──
    {
      crop: "Peppers / Capsicum / Chillies / Paprika (PER14353)",
      cropList: ["Peppers", "Capsicum", "Chillies", "Paprika"],
      permitNumber: "PER14353",
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia sclerotiorum)",
          pestList: ["Sclerotinia Rot", "Sclerotinia", "Sclerotinia Sclerotiorum"],
          states: ["Qld", "NSW", "SA", "WA", "Tas", "NT", "ACT"],
          rate: "500",
          rateMax: "1000",
          unit: "mL/ha",
          stage: "Apply as foliar spray when conditions favour disease development",
          note: "PERMIT PER14353 (exp. 31 Mar 2027). 500 g/L products: 0.5–1 L/ha (spray vol <1000 L/ha) OR 50–100 mL/100 L (spray vol ≥1000 L/ha). Apply as foliar spray using boomspray, knapsack, handgun or equivalent. Use higher rate when disease pressure is severe. Max 2 applications per crop; min 14 days between treatments. WHP: 7 days. Not Vic."
        }
      ]
    },

    // ── 31. Celeriac (PER14353) ──
    {
      crop: "Celeriac (PER14353)",
      cropList: ["Celeriac"],
      permitNumber: "PER14353",
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia sclerotiorum)",
          pestList: ["Sclerotinia Rot", "Sclerotinia", "Sclerotinia Sclerotiorum"],
          states: ["Qld", "NSW", "SA", "WA", "Tas", "NT", "ACT"],
          rate: "1.0",
          rateMax: "1.0",
          unit: "L/ha",
          stage: "Apply as foliar spray when conditions favour disease development",
          note: "PERMIT PER14353 (exp. 31 Mar 2027). 500 g/L products: 1 L/ha (spray vol <1000 L/ha) OR 75–100 mL/100 L (spray vol ≥1000 L/ha). Use higher rate when disease pressure severe. Max 3 applications per crop; min 14 days between treatments. WHP: 1 day. Not Vic."
        }
      ]
    },

    // ── 32. Brussels Sprouts (PER80910) ──
    {
      crop: "Brussels Sprouts (PER80910)",
      cropList: ["Brussels Sprouts"],
      permitNumber: "PER80910",
      weeds: [
        {
          weed: "Grey Mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis", "Botrytis Cinerea"],
          states: ["Qld", "NSW", "SA", "WA", "Tas", "NT", "ACT"],
          rate: "1.0",
          rateMax: "1.0",
          unit: "L/ha",
          stage: "Commence 3–4 weeks after transplanting or at disease onset; repeat at 14-day intervals",
          note: "PERMIT PER80910 (exp. 31 May 2030). 500 g/L products: 1 L/ha. Apply as per label instructions for tomatoes. Commence 3–4 weeks after transplanting or at disease onset; repeat at 14-day intervals. Max 4 Group 2 sprays per season. WHP: 7 days harvest. Do NOT graze or cut for stock food. Not Vic."
        }
      ]
    },

    // ── 33. Eggplant (PER80910) ──
    {
      crop: "Eggplant — Field Only (PER80910)",
      cropList: ["Eggplant"],
      permitNumber: "PER80910",
      weeds: [
        {
          weed: "Grey Mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Botrytis", "Botrytis Cinerea"],
          states: ["Qld", "NSW", "SA", "WA", "Tas", "NT", "ACT"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply at 7–10 day intervals during high disease pressure, alternating with different MoA",
          note: "PERMIT PER80910 (exp. 31 May 2030). 500 g/L products: 100 mL/100 L (dilute spray). Apply at 7–10 day intervals during high disease pressure, alternating with fungicide of different MoA group. Max 3 applications per crop. Max 4 Group 2 sprays per season. WHP: 7 days. Field only. Not Vic."
        }
      ]
    },

    // ── 34. Snow Peas & Sugar Snap Peas (PER81589) ──
    {
      crop: "Snow Peas & Sugar Snap Peas (PER81589)",
      cropList: ["Snow Peas", "Sugar Snap Peas"],
      permitNumber: "PER81589",
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia spp.), Grey Mould (Botrytis spp.)",
          pestList: ["Sclerotinia Rot", "Sclerotinia", "Grey Mould", "Botrytis"],
          states: ["Qld", "NSW", "SA", "WA", "Tas", "NT", "ACT"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply first as seedling drench soon after emergence/transplanting, second foliar 10–14 days later",
          note: "PERMIT PER81589 (exp. 30 Jun 2026). 500 g/L products: 100 mL/100 L water OR 1 L/ha. Apply first as seedling drench soon after emergence/transplanting, second foliar application 10–14 days later. Max 3 applications per crop. Max 4 Group 2 sprays per season. WHP: 7 days harvest. Do NOT cut/graze for stock food. Not Vic."
        }
      ]
    },

    // ── 35. Parsley — Field (PER81589) ──
    {
      crop: "Parsley — Field Only (PER81589)",
      cropList: ["Parsley"],
      permitNumber: "PER81589",
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia spp.), Grey Mould (Botrytis spp.)",
          pestList: ["Sclerotinia Rot", "Sclerotinia", "Grey Mould", "Botrytis"],
          states: ["Qld", "NSW", "SA", "WA", "Tas", "NT", "ACT"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply as foliar spray when conditions favour disease, directed to stems and underside of lower leaves",
          note: "PERMIT PER81589 (exp. 30 Jun 2026). 500 g/L products: 100 mL/100 L water OR 1 L/ha. Apply as foliar spray directed to stems at ground level and underside of lower leaves. Max 3 applications per crop. Max 4 Group 2 sprays per season. WHP: 7 days. Do NOT graze. Field grown only. Not Vic."
        }
      ]
    },

    // ── 36. Cucumber (PER81589) ──
    {
      crop: "Cucumber — Protected & Field (PER81589)",
      cropList: ["Cucumber"],
      permitNumber: "PER81589",
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia spp.), Grey Mould (Botrytis spp.)",
          pestList: ["Sclerotinia Rot", "Sclerotinia", "Grey Mould", "Botrytis"],
          states: ["Qld", "NSW", "SA", "WA", "Tas", "NT", "ACT"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply as foliar spray when conditions favour disease; 14-day interval between treatments",
          note: "PERMIT PER81589 (exp. 30 Jun 2026). 500 g/L products: 100 mL/100 L water OR 1 L/ha. Apply as foliar spray with boom sprayer; max 3 applications per crop with 14-day interval. Max 4 Group 2 sprays per season. WHP: 7 days. Do NOT use treated plants/fruit as stock feed. Protected and field grown. Not Vic."
        }
      ]
    },

    // ── 37. Beetroot (PER81589) ──
    {
      crop: "Beetroot (PER81589)",
      cropList: ["Beetroot"],
      permitNumber: "PER81589",
      weeds: [
        {
          weed: "Alternaria Leaf Spot (Alternaria spp.), Sclerotinia Rot (Sclerotinia spp.), Grey Mould (Botrytis spp.)",
          pestList: ["Alternaria Leaf Spot", "Alternaria", "Sclerotinia Rot", "Sclerotinia", "Grey Mould", "Botrytis"],
          states: ["Qld", "NSW", "SA", "WA", "Tas", "NT", "ACT"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply as foliar spray when conditions favour disease; 14-day interval",
          note: "PERMIT PER81589 (exp. 30 Jun 2026). 500 g/L products: 100 mL/100 L water OR 1 L/ha. Apply as foliar spray with boom sprayer; max 2 applications per crop with 14-day interval. Max 4 Group 2 sprays per season. WHP: 14 days (beetroot root). Not Vic."
        }
      ]
    },

    // ── 38. Beetroot Leaves, Chicory, Endive (PER81589) ──
    {
      crop: "Beetroot Leaves / Chicory / Endive — Field (PER81589)",
      cropList: ["Beetroot Leaves", "Chicory", "Endive"],
      permitNumber: "PER81589",
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia spp.), Grey Mould (Botrytis spp.)",
          pestList: ["Sclerotinia Rot", "Sclerotinia", "Grey Mould", "Botrytis"],
          states: ["Qld", "NSW", "SA", "WA", "Tas", "NT", "ACT"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply as foliar spray directed to stems and underside of leaves; 14-day intervals",
          note: "PERMIT PER81589 (exp. 30 Jun 2026). 500 g/L products: 100 mL/100 L water OR 1 L/ha. Apply as foliar spray directed to stems at ground level and underside of leaves. Spray at 14-day intervals, alternating with different MoA group. Max 3 applications per crop. Max 4 Group 2 sprays per season. WHP: 7 days. Do NOT cut/graze for stock food for 7 days. Field grown only. Not Vic."
        }
      ]
    },

    // ── 39. Chestnuts — Post-harvest (PER83636) ──
    {
      crop: "Chestnuts — Post-harvest (PER83636)",
      cropList: ["Chestnuts"],
      permitNumber: "PER83636",
      weeds: [
        {
          weed: "Surface Moulds, Fungal Rots (suppression only)",
          pestList: ["Surface Moulds", "Fungal Rots"],
          states: ["Qld", "NSW", "SA", "WA", "Tas", "NT", "ACT"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Post-harvest dip or low volume concentrate spray — 1 application per batch",
          note: "PERMIT PER83636 (exp. 31 Mar 2027). 500 g/L products: 100 mL/100 L. Post-harvest dip for 1 minute (do NOT dip longer); allow to drain and dry thoroughly before storage. Max 1 application per batch. Do NOT use Group 2 as final pre-harvest spray. Fungal rots suppressed only. WHP: Nil. Not Vic."
        }
      ]
    },

    // ── 40. Garlic — Field (PER91948) ──
    {
      crop: "Garlic — Field (PER91948)",
      cropList: ["Garlic"],
      permitNumber: "PER91948",
      weeds: [
        {
          weed: "Botrytis (Botrytis spp.)",
          pestList: ["Botrytis", "Botrytis Blight"],
          states: ["NSW", "SA", "Tas"],
          rate: "500",
          rateMax: "1000",
          unit: "mL/ha",
          stage: "Apply as cover spray from end of crop emergence",
          note: "PERMIT PER91948 (exp. 31 May 2027). 500 mL–1 L/ha. Apply as cover spray from end of crop emergence. Apply by ground boom sprayer in ~400 L water/ha. Max 2 foliar sprays per season; min 21-day retreatment interval. Do NOT apply to stressed plants or if rain/irrigation expected within 24 hours. WHP: 7 days (field). Do NOT graze or cut for stock food. NSW, SA, Tas only."
        }
      ]
    },

    // ── 41. Garlic & Onions (PER92121) ──
    {
      crop: "Garlic & Onions (PER92121)",
      cropList: ["Garlic", "Onions"],
      permitNumber: "PER92121",
      weeds: [
        {
          weed: "Botrytis (Botrytis spp.)",
          pestList: ["Botrytis", "Botrytis Blight"],
          states: ["NSW"],
          rate: "500",
          rateMax: "1000",
          unit: "mL/ha",
          stage: "Apply as cover spray from end of crop emergence",
          note: "PERMIT PER92121 (exp. 31 Jul 2027). 500 mL–1 L/ha. Apply as cover spray from end of crop emergence. Apply by ground boom sprayer in ~400 L water/ha. Max 2 foliar sprays per season; min 21-day retreatment interval. Do NOT apply to stressed plants or if rain/irrigation expected within 24 hours. WHP: 7 days (field). Do NOT graze or cut for stock food. NSW only."
        }
      ]
    },

    // ── 42. Onion — Neck Rot (PER94740) ──
    {
      crop: "Onion — Neck Rot (PER94740)",
      cropList: ["Onions"],
      permitNumber: "PER94740",
      weeds: [
        {
          weed: "Neck Rot (Botrytis allii)",
          pestList: ["Neck Rot", "Botrytis Allii", "Botrytis"],
          states: ["All"],
          rate: "2.0",
          rateMax: "2.0",
          unit: "L/ha",
          stage: "Apply 7–10 days apart between flag leaf and 5-true leaf stage, or at commencement of bulbing",
          note: "PERMIT PER94740 (exp. 30 Apr 2029). 500 g/L iprodione: 2 L/ha PLUS 720 g/L chlorothalonil: 2.3 L/ha (tank mix required). Max 2 applications per crop; apply 7–10 days apart. Apply between flag leaf and 5-true leaf stage depending on conditions, OR at commencement of bulbing. Do NOT apply later than 10 days after commencement of bulbing. WHP: Nil."
        }
      ]
    },

    // ── 43. Mandarins & Tangelos — Emperor Brown Spot (PER14772) ──
    {
      crop: "Mandarins & Tangelos (PER14772)",
      cropList: ["Mandarins", "Tangelos"],
      permitNumber: "PER14772",
      weeds: [
        {
          weed: "Emperor Brown Spot (Alternaria citri)",
          pestList: ["Emperor Brown Spot", "Alternaria Citri", "Alternaria"],
          states: ["Qld"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply at spring flush/fruit set, after thinning, and autumn flush",
          note: "PERMIT PER14772 (exp. 31 Jan 2031). 500 g/L products: 100 mL/100 L water. Apply at: spring flush–fruit set (Sep/Oct), after thinning (fruit 20–30 mm, Jan), autumn flush (fruit 30–40 mm, Apr). Spray volume 3000–4000 L/ha depending on tree size. Max 3 applications per season; min 60-day retreatment interval. Do NOT use curatively. WHP: 8 weeks. Qld only."
        }
      ]
    },

    // ── 44. Ornamentals — Flowering Annuals (PER14728) ──
    {
      crop: "Ornamentals — Flowering Annuals (PER14728)",
      cropList: ["Ornamentals", "Flowering Annuals"],
      permitNumber: "PER14728",
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia sclerotiorum)",
          pestList: ["Sclerotinia Rot", "Sclerotinia", "Sclerotinia Sclerotiorum"],
          states: ["Qld"],
          rate: "100",
          rateMax: "100",
          unit: "mL/100L",
          stage: "Apply as foliar application targeting stems and lower leaves when canopy favours disease",
          note: "PERMIT PER14728 (exp. 31 Jul 2029). 100 mL/100 L water. Apply as foliar application with spray tank/hand-held wand targeting stems and lower leaves. Apply when canopy cover favours disease and when disease first apparent. Max 3 applications; min 14-day retreatment interval. Do NOT apply more than two consecutive Group 2 sprays. Qld only."
        }
      ]
    }

  ],

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT graze treated areas or feed turf clippings from treated areas to animals including poultry."
  ],

  // ── Withholding ─────────────────────────────────────────────
  withholding: {
    harvest: "Almonds, macadamias, mandarins, pome fruit, potatoes, stone fruit: Nil. Boysenberries, celery, passionfruit, raspberries, strawberries, blueberries, youngberries: 1 day. Grapes, kiwifruit, lettuce, tomatoes: 7 days. Peanuts: 12 days. Soybeans: 7 weeks.",
    grazing: "Lucerne: 7 days. Turf: Do not graze treated areas or feed turf clippings to animals including poultry."
  },

  // ── Compatibility ───────────────────────────────────────────
  compatibility: {
    compatible: [
      "Aliette WG (may result in some settling out)",
      "Bugmaster Flowable",
      "Calcium chloride",
      "Chlorpyrifos 500 g/L EC",
      "Copper oxychloride",
      "Dimethoate",
      "Dithane DF",
      "Dithane M-45",
      "DPA",
      "Endosulfan",
      "Fenitrothion",
      "Kelthane EC",
      "Maldison",
      "Metalaxyl",
      "Methomyl",
      "Parathion-methyl"
    ],
    incompatible: [
      "Fertilisers (DO NOT tank mix with fertilisers)"
    ],
    note: [
      "May be unstable in conditions where pH is 7 or higher — check spray solution pH before adding Rovral and use a buffering agent to bring pH below 7 if necessary.",
      "Mixing with Aliette WG may result in some settling out.",
      "Do not mix with more than one compatible chemical in the tank.",
      "All mixtures should be tested prior to mixing commercial quantities."
    ]
  }
};
