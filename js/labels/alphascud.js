// ─────────────────────────────────────────────────────────
// ADAMA ALPHA-SCUD® 300 SC INSECTICIDE — Label Data
// Group 3A Insecticide (Alpha-Cypermethrin)
// Source: ADAMA_AlphaScud300SC_Label.pdf
// APVMA Approval No: 82944/107182
// ADAMA Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['alphascud'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Alpha-Scud® 300 SC Insecticide",

  category:         "Insecticides",
  activeIngredient: "300 g/L Alpha-Cypermethrin",
  group:            "Group 3A Insecticide",
  modeOfAction:     "Synthetic pyrethroid — contact and residual insecticide. Can be used as a protective treatment when applied at regular intervals or as a knockdown treatment to control existing infestations. Ineffective against synthetic pyrethroid resistant Helicoverpa armigera larvae longer than 5 mm.",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#8b0000",
  apvma:            "82944/107182",
  company: "Adama",
  labelPdf:         "Source labels/ADAMA_AlphaScud300SC_Label.pdf",
  sdsPdf:           "SDS Labels/ADAMA_AlphaScud300SC_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Helicoverpa", "Armyworm", "Cutworm", "Mites", "Aphids", "Weevils", "Caterpillars", "Mirids", "Midge", "Thrips"],
    timing: ["Knockdown", "Protectant", "Residual"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Cereals (Winter) ──
    {
      crop: "Cereals (Winter)",
      cropList: ["Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        {
          weed: "Cutworm (Agrotis spp.)",
          pestList: ["Cutworm", "Agrotis"],
          states: ["Vic", "SA", "WA", "Qld", "NSW", "ACT"],
          rate: "25",
          rateMax: "50",
          unit: "mL/ha",
          stage: "Check emerging and establishing crops late afternoon/evening for caterpillars on soil surface",
          note: "25 mL/ha (Vic, SA, WA); 25–50 mL/ha (Qld, NSW, ACT). Max 180 mL/ha per season. Use higher rate when infestation is severe, larvae longer than 10 mm, or longer residual required. In NSW, do NOT apply before May or after August. Spray late afternoon or evening. WHP: 7 days harvest, 14 days stubble grazing."
        },
        {
          weed: "Webworm (Hednota spp.)",
          pestList: ["Webworm", "Hednota"],
          states: ["NSW", "ACT", "Vic", "SA", "WA"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Pre-planting or post-crop emergence — apply at first sign of pest activity",
          note: "25 mL/ha. May be applied with knock-down herbicides prior to planting. Apply from last week in May when larvae have emerged. Do NOT apply to dense pasture — closely graze prior to application. Min 100 L water/ha. Repeat as required. WHP: 7 days harvest, 14 days stubble grazing."
        },
        {
          weed: "Common Armyworm (Mythimna convecta), Southern Armyworm (Persectania ewingii)",
          pestList: ["Common Armyworm", "Mythimna Convecta", "Southern Armyworm", "Persectania Ewingii"],
          states: ["All"],
          rate: "80",
          rateMax: "80",
          unit: "mL/ha",
          stage: "Apply before head lopping occurs when larval numbers exceed 2 or more per square metre",
          note: "80 mL/ha. Effective against small (6 mm) and large (20 mm) grubs. Spray in cool of day (late afternoon) when larvae most active. Good crop penetration essential. Monitor and retreat if necessary. Poor control may occur on lodged crops. WHP: 7 days harvest, 14 days stubble grazing."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor) — pre-emergence",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Pre-emergence: apply by ground rig only after sowing but prior to crop emergence when soil is moist",
          note: "35 mL/ha. Ground rig only. Monitor RLEM numbers and re-treat if necessary. WHP: 7 days harvest, 14 days stubble grazing."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor), Blue Oat Mite (Penthaleus major)",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor", "Blue Oat Mite", "Penthaleus Major"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Apply when mite numbers reach damaging levels — do NOT apply as pre-emergence treatment",
          note: "20 mL/ha. Spray seedling crops if silvering or whitening of leaves is causing reduced crop growth. Spray on a calm, mild morning when mites are actively feeding. WHP: 7 days harvest, 14 days stubble grazing."
        },
        {
          weed: "Aphids — Barley Yellow Dwarf Virus (BYDV) prevention",
          pestList: ["Aphids", "BYDV", "Barley Yellow Dwarf Virus"],
          states: ["All"],
          rate: "40",
          rateMax: "40",
          unit: "mL/ha",
          stage: "Apply at 5–6 weeks after sowing, repeat 4–5 weeks later",
          note: "40 mL/ha. Two applications to maintain protection against aphid transmission of BYDV until after stem elongation. WHP: 7 days harvest, 14 days stubble grazing."
        }
      ]
    },

    // ── 2. Maize ──
    {
      crop: "Maize",
      cropList: ["Maize"],
      weeds: [
        {
          weed: "Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Corn Earworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["Qld", "NSW", "ACT", "Vic", "WA", "NT"],
          rate: "100",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Apply from early silking according to pest incidence",
          note: "100–135 mL/ha. Use higher rate if larvae longer than 10 mm. In Qld, NSW and NT preferably apply to eggs or larvae less than 5 mm only. Best results at egg hatch. WHP: 7 days harvest."
        }
      ]
    },

    // ── 3. Rice ──
    {
      crop: "Rice",
      cropList: ["Rice"],
      weeds: [
        {
          weed: "Common Armyworm (Mythimna convecta)",
          pestList: ["Common Armyworm", "Mythimna Convecta"],
          states: ["NSW", "WA"],
          rate: "70",
          rateMax: "70",
          unit: "mL/ha",
          stage: "Inspect crops regularly from flowering onwards — apply when pests first appear",
          note: "70 mL/ha. Max 135 mL/ha per season. Apply by aircraft in 20–30 L water/ha to drained fields only. Spray in cool of day when larvae most active. Monitor and re-treat if necessary. Poor control on lodged crops. WHP: 7 days harvest."
        },
        {
          weed: "Bloodworm",
          pestList: ["Bloodworm"],
          states: ["NSW", "WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Apply to water immediately after sowing using helicopter or fixed-wing aircraft",
          note: "35 mL/ha. Aerial application. A second treatment may be required 10–14 days later. Plants not vulnerable after secondary roots develop. Do NOT release water from treated areas off-farm until retention period met. WHP: 7 days harvest."
        }
      ]
    },

    // ── 4. Sorghum ──
    {
      crop: "Sorghum",
      cropList: ["Sorghum"],
      weeds: [
        {
          weed: "Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Corn Earworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["Qld", "NSW", "ACT", "WA", "NT"],
          rate: "100",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Commence checking when head emerges from boot — apply when 2+ actively feeding larvae per head",
          note: "100–135 mL/ha. Do NOT apply to tight headed varieties. Use higher rate for longer residual. Preferably apply to eggs. In Qld and NSW do NOT apply to H. armigera larvae >5 mm. Repeat as required. WHP: 7 days harvest."
        },
        {
          weed: "Green Mirid (Creontiades dilutus)",
          pestList: ["Green Mirid", "Creontiades Dilutus"],
          states: ["Qld", "NSW", "ACT", "WA", "NT"],
          rate: "100",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Apply when pest levels reach economically damaging levels",
          note: "100–135 mL/ha. Use higher rate when pest pressure is high and when increased residual protection is required. WHP: 7 days harvest."
        },
        {
          weed: "Sorghum Midge (Contarinia sorghicola)",
          pestList: ["Sorghum Midge", "Contarinia Sorghicola"],
          states: ["Qld", "NSW", "ACT", "WA", "NT"],
          rate: "35",
          rateMax: "70",
          unit: "mL/ha",
          stage: "Apply when midge numbers reach 1–2 per head, between head emergence and end of flowering",
          note: "35–70 mL/ha. Repeat as required. Use higher rate for increased residual protection. WHP: 7 days harvest."
        }
      ]
    },

    // ── 5. Cotton ──
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Cotton Bollworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Cotton Bollworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "100",
          rateMax: "170",
          unit: "mL/ha",
          stage: "Apply timed to coincide with egg hatching, before larvae are in protected feeding sites",
          note: "100 mL/ha (light egg laying: 5–20 brown eggs/m); 135 mL/ha (heavy egg laying and/or larvae up to 5 mm); 170 mL/ha (continuous egg laying, larvae up to 5 mm, longer residual needed). WHP: 14 days harvest."
        },
        {
          weed: "Rough Bollworm (Earias huegeli)",
          pestList: ["Rough Bollworm", "Earias Huegeli"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "100",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Apply when average of 2+ larvae per 100 bolls",
          note: "100–135 mL/ha. Detect and treat early before larvae are concealed in bolls. Use higher rate if larvae longer than 10 mm. Best results at egg hatch. WHP: 14 days harvest."
        },
        {
          weed: "Green Mirid (Creontiades dilutus), Apple Dimpling Bug (Campylomma liebknechti)",
          pestList: ["Green Mirid", "Creontiades Dilutus", "Apple Dimpling Bug", "Campylomma Liebknechti"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "100",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Apply at recommended threshold levels as indicated by field checks",
          note: "100–135 mL/ha. Use higher rate when pest pressure is high and when increased residual protection is required. WHP: 14 days harvest."
        }
      ]
    },

    // ── 6. Chickpeas ──
    {
      crop: "Chickpeas",
      cropList: ["Chickpeas"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["Qld", "NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "55",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Apply when damaging pest numbers appear — best results at egg hatch",
          note: "55 mL/ha (WA only — open, less dense crops at first hatch); 70–100 mL/ha (Qld, NSW, ACT, Vic, Tas, SA, WA — use higher rate if larvae >10 mm). WHP: 21 days harvest, 5 weeks grazing."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor) — pre-emergence",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Pre-emergence: apply by ground rig only after sowing when soil is moist",
          note: "35 mL/ha. Ground rig only. Monitor RLEM numbers and re-treat if necessary. WHP: 21 days harvest, 5 weeks grazing."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor), Blue Oat Mite (Penthaleus major)",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor", "Blue Oat Mite", "Penthaleus Major"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Apply when mite numbers reach damaging levels — do NOT apply as pre-emergence",
          note: "20 mL/ha. WHP: 21 days harvest, 5 weeks grazing."
        },
        {
          weed: "Cutworm (Agrotis spp.)",
          pestList: ["Cutworm", "Agrotis"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Check emerging crops late afternoon/evening for caterpillars on soil surface",
          note: "25 mL/ha. Spray late afternoon and evening. WHP: 21 days harvest, 5 weeks grazing."
        }
      ]
    },

    // ── 7. Faba Beans ──
    {
      crop: "Faba Beans",
      cropList: ["Faba Beans"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "55",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Apply when damaging pest numbers appear — best results at egg hatch",
          note: "55 mL/ha (WA only — open, less dense crops at first hatch); 70–100 mL/ha (NSW, ACT, Vic, Tas, SA, WA — use higher rate if larvae >10 mm). WHP: 4 weeks harvest, 5 weeks grazing."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor) — pre-emergence",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Pre-emergence: apply by ground rig only after sowing when soil is moist",
          note: "35 mL/ha. Ground rig only. Monitor RLEM numbers and re-treat if necessary. WHP: 4 weeks harvest, 5 weeks grazing."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor), Blue Oat Mite (Penthaleus major)",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor", "Blue Oat Mite", "Penthaleus Major"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Apply when mite numbers reach damaging levels — do NOT apply as pre-emergence",
          note: "20 mL/ha. WHP: 4 weeks harvest, 5 weeks grazing."
        },
        {
          weed: "Cutworm (Agrotis spp.)",
          pestList: ["Cutworm", "Agrotis"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Check emerging crops late afternoon/evening for caterpillars on soil surface",
          note: "25 mL/ha. Spray late afternoon and evening. WHP: 4 weeks harvest, 5 weeks grazing."
        }
      ]
    },

    // ── 8. Lupins ──
    {
      crop: "Lupins",
      cropList: ["Lupins"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["NSW", "ACT", "Vic", "SA", "WA"],
          rate: "40",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Apply when damaging pest numbers first appear and repeat if necessary",
          note: "Max 200 mL/ha per season. 70–100 mL/ha (NSW, ACT, Vic, SA — use higher rate if larvae >10 mm, best at egg hatch); 40–70 mL/ha (WA only — time to precede first visible pod damage, higher rate when severe or residual needed). WHP: 4 weeks harvest."
        },
        {
          weed: "Cutworm (Agrotis spp.)",
          pestList: ["Cutworm", "Agrotis"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Check emerging crops late afternoon/evening for caterpillars on soil surface",
          note: "25 mL/ha. Spray late afternoon and evening. WHP: 4 weeks harvest."
        },
        {
          weed: "Common Armyworm (Mythimna convecta), Southern Armyworm (Persectania ewingii)",
          pestList: ["Common Armyworm", "Mythimna Convecta", "Southern Armyworm", "Persectania Ewingii"],
          states: ["NSW", "ACT", "WA"],
          rate: "80",
          rateMax: "80",
          unit: "mL/ha",
          stage: "Spray in the cool of the day (late afternoon) when larvae are most active",
          note: "80 mL/ha. WHP: 4 weeks harvest."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor) — pre-emergence",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Pre-emergence: apply by ground rig only after sowing when soil is moist",
          note: "35 mL/ha. Ground rig only. Monitor RLEM numbers and re-treat if necessary. WHP: 4 weeks harvest."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor), Blue Oat Mite (Penthaleus major)",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor", "Blue Oat Mite", "Penthaleus Major"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Apply when mite numbers reach damaging levels — do NOT apply as pre-emergence",
          note: "20 mL/ha. WHP: 4 weeks harvest."
        }
      ]
    },

    // ── 9. Field Peas ──
    {
      crop: "Field Peas",
      cropList: ["Field Peas"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "55",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Check crops every 3–4 days from beginning of flowering — apply when pest numbers reach damaging levels",
          note: "55 mL/ha (open, less dense crops at first hatch); 70–100 mL/ha (when pest numbers reach damaging levels, use higher rate if larvae >10 mm). Best results at egg hatch. WHP: 4 weeks harvest."
        },
        {
          weed: "Pea Weevil (Bruchus pisorum)",
          pestList: ["Pea Weevil", "Bruchus Pisorum"],
          states: ["NSW", "ACT", "Vic", "SA", "WA"],
          rate: "55",
          rateMax: "70",
          unit: "mL/ha",
          stage: "Apply during flowering prior to egg laying when adult weevil population reaches 1+ per 25 sweeps",
          note: "55–70 mL/ha. Use higher rate for longer residual protection. WHP: 4 weeks harvest."
        },
        {
          weed: "Cutworm (Agrotis spp.)",
          pestList: ["Cutworm", "Agrotis"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Check emerging crops late afternoon/evening for caterpillars on soil surface",
          note: "25 mL/ha. Spray late afternoon and evening. WHP: 4 weeks harvest."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor) — pre-emergence",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Pre-emergence: apply by ground rig only after sowing when soil is moist",
          note: "35 mL/ha. Ground rig only. Monitor RLEM numbers and re-treat if necessary. WHP: 4 weeks harvest."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor), Blue Oat Mite (Penthaleus major)",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor", "Blue Oat Mite", "Penthaleus Major"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Apply when mite numbers reach damaging levels — do NOT apply as pre-emergence",
          note: "20 mL/ha. WHP: 4 weeks harvest."
        }
      ]
    },

    // ── 10. Soybeans ──
    {
      crop: "Soybeans",
      cropList: ["Soybeans"],
      weeds: [
        {
          weed: "Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Corn Earworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["Qld", "NSW", "ACT", "WA", "NT"],
          rate: "100",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Apply when flower or pod feeding numbers reach 1–2 per metre of row",
          note: "100–135 mL/ha. Use higher rate when canopy is dense or longer residual needed. To help contain pyrethroid resistance in H. armigera in summer crops, do NOT apply to larvae >5 mm in Northern NSW and Qld. Best results at egg hatch. WHP: 7 days harvest."
        }
      ]
    },

    // ── 11. Grapevines (non-bearing) ──
    {
      crop: "Grapevines (non-bearing)",
      cropList: ["Grapevines"],
      weeds: [
        {
          weed: "Pink Cutworm (Agrotis munda), Apple Weevil (Otiorhynchus cribricollis), Garden Weevil (Phlyctinus callosus)",
          pestList: ["Pink Cutworm", "Agrotis Munda", "Apple Weevil", "Otiorhynchus Cribricollis", "Garden Weevil", "Phlyctinus Callosus"],
          states: ["NSW", "Vic", "Tas", "SA", "WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/100L",
          stage: "Monitor young vines during spring and early summer — apply at first signs of leaf damage",
          note: "Dilute: 35 mL/100L water. Spray leaves, canes and soil around each vine to 30 cm diameter. 70–80 mL of dilute spray per vine. If pest persists, repeat after 3 weeks. Concentrate spraying: refer to mixing/application section — apply same total product per target. Non-bearing vines only. No WHP."
        }
      ]
    },

    // ── 12. Canola ──
    {
      crop: "Canola",
      cropList: ["Canola"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Tobacco Looper (Chrysodeixis argentifera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera", "Tobacco Looper", "Chrysodeixis Argentifera"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "70",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Inspect crop during and after flowering — apply when damaging pest numbers first appear",
          note: "70–100 mL/ha. Max 135 mL/ha per season. Use higher rate if larvae >10 mm. For aerial application use 30–35 L water/ha in cooler part of day. WHP: 21 days harvest, 21 days grazing."
        },
        {
          weed: "Vegetable Weevil (Listroderes difficilis)",
          pestList: ["Vegetable Weevil", "Listroderes Difficilis"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "135",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Inspect crops as they emerge — apply when cotyledons and leaves are being eaten",
          note: "135 mL/ha. Border sprays required to control invading adults. Repeat as necessary. WHP: 21 days harvest, 21 days grazing."
        },
        {
          weed: "Cabbage White Butterfly (Pieris rapae), Cabbage Moth (Plutella xylostella)",
          pestList: ["Cabbage White Butterfly", "Pieris Rapae", "Cabbage Moth", "Plutella Xylostella"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "135",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Apply according to pest pressure",
          note: "135 mL/ha. WHP: 21 days harvest, 21 days grazing."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor) — pre-emergence",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Pre-emergence: apply by ground rig only after sowing when soil is moist",
          note: "35 mL/ha. Ground rig only. Monitor RLEM numbers and re-treat if necessary. WHP: 21 days harvest, 21 days grazing."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor), Blue Oat Mite (Penthaleus major)",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor", "Blue Oat Mite", "Penthaleus Major"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Apply when mite numbers reach damaging levels — do NOT apply as pre-emergence",
          note: "20 mL/ha. WHP: 21 days harvest, 21 days grazing."
        }
      ]
    },

    // ── 13. Linola ──
    {
      crop: "Linola",
      cropList: ["Linola"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["NSW", "Vic", "Tas", "SA", "WA"],
          rate: "55",
          rateMax: "70",
          unit: "mL/ha",
          stage: "Inspect crop during and after flowering — apply when damaging pest numbers first appear",
          note: "55–70 mL/ha. Max 135 mL/ha per season. Use higher rate if larvae >10 mm. Aerial: apply in cooler part of day in 30–35 L water/ha. WHP: 12 weeks harvest."
        }
      ]
    },

    // ── 14. Linseed ──
    {
      crop: "Linseed",
      cropList: ["Linseed"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "70",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Inspect crop during and after flowering — apply when damaging pest numbers first appear",
          note: "70–100 mL/ha. Use higher rate if larvae >10 mm. Best results at egg hatch. WHP: 14 days harvest."
        },
        {
          weed: "Cutworm (Agrotis spp.)",
          pestList: ["Cutworm", "Agrotis"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "25",
          rateMax: "25",
          unit: "mL/ha",
          stage: "Check emerging crops late afternoon/evening for caterpillars on soil surface",
          note: "25 mL/ha. Spray late afternoon and evening. WHP: 14 days harvest."
        }
      ]
    },

    // ── 15. Sunflowers ──
    {
      crop: "Sunflowers",
      cropList: ["Sunflowers"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Corn Earworm (Helicoverpa armigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera", "Corn Earworm", "Helicoverpa Armigera"],
          states: ["Qld", "NSW", "Vic", "ACT", "WA", "NT"],
          rate: "100",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Apply when infestation reaches average of 2–3 larvae per head — apply before heads turn downwards",
          note: "100–135 mL/ha. TO PROTECT BEES: avoid application during flowering; if necessary, apply early morning or late afternoon when bees not foraging. Use higher rate if larvae >10 mm. Best results at egg hatch. For H. armigera in NSW and Qld, apply to larvae only if <5 mm. WHP: 21 days harvest."
        },
        {
          weed: "Grey Cluster Bug (Nysius clevelandensis), Rutherglen Bug (Nysius vinitor)",
          pestList: ["Grey Cluster Bug", "Nysius Clevelandensis", "Rutherglen Bug", "Nysius Vinitor"],
          states: ["Qld", "NSW", "ACT", "Vic", "Tas", "WA", "NT"],
          rate: "85",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Apply from budding when adult numbers reach 10–15 per plant (dryland) or 20–25 (irrigated)",
          note: "100–135 mL/ha (Qld, NSW, ACT, Vic, Tas, WA, NT); 85 mL/ha (Rutherglen Bug — Vic, Tas, WA only). After flowering apply when adult numbers on face of heads reach 20–25. Repeat as required. Higher rate when numbers very high. WHP: 21 days harvest."
        }
      ]
    },

    // ── 16. Lucerne (Seed and forage crops) ──
    {
      crop: "Lucerne (Seed and forage crops)",
      cropList: ["Lucerne"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "55",
          rateMax: "55",
          unit: "mL/ha",
          stage: "Apply when pest populations reach economically damaging levels — apply to larvae less than 5 mm",
          note: "55 mL/ha. Max 1 application per cut or grazing for animal feed. WHP: 14 days grazing or cutting for stockfeed."
        },
        {
          weed: "Green Mirid (Creontiades dilutus)",
          pestList: ["Green Mirid", "Creontiades Dilutus"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "55",
          rateMax: "55",
          unit: "mL/ha",
          stage: "Apply when pest populations reach economically damaging levels",
          note: "55 mL/ha. Max 1 application per cut or grazing for animal feed. WHP: 14 days grazing or cutting for stockfeed."
        }
      ]
    },

    // ── 17. Pastures (Legume and grass based) ──
    {
      crop: "Pastures (Legume and grass based)",
      cropList: ["Pastures"],
      weeds: [
        {
          weed: "Wingless Grasshopper (Phaulacridium vittatum)",
          pestList: ["Wingless Grasshopper", "Phaulacridium Vittatum"],
          states: ["All"],
          rate: "35",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Apply to infested areas — most effective on newly emerged hoppers before dispersing",
          note: "Max 110 mL/ha per season. Repeat as necessary. Later sprays should be applied before egglaying begins. Good coverage essential. WHP: 3 days grazing, 14 days cut for stockfeed."
        },
        {
          weed: "Brown Pasture Looper (Ciampa arietaria)",
          pestList: ["Brown Pasture Looper", "Ciampa Arietaria"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Apply when pest infestation reaches economically damaging level",
          note: "20 mL/ha. WHP: 3 days grazing, 14 days cut for stockfeed."
        },
        {
          weed: "Blackheaded Pasture Cockchafer (Aphodius tasmaniae)",
          pestList: ["Blackheaded Pasture Cockchafer", "Aphodius Tasmaniae"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Dig suspect paddocks after first substantial rain in April/May and inspect for grubs",
          note: "35 mL/ha. Most effective when larvae detected and treated early. Spraying after June will give poorer results. WHP: 3 days grazing, 14 days cut for stockfeed."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor) — pre-emergence",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/ha",
          stage: "Pre-emergence: apply by ground rig only after sowing when soil is moist",
          note: "35 mL/ha. Ground rig only. Monitor RLEM numbers and re-treat if necessary. WHP: 3 days grazing, 14 days cut for stockfeed."
        },
        {
          weed: "Redlegged Earth Mite (Halotydeus destructor), Blue Oat Mite (Penthaleus major)",
          pestList: ["Redlegged Earth Mite", "RLEM", "Halotydeus Destructor", "Blue Oat Mite", "Penthaleus Major"],
          states: ["NSW", "ACT", "Vic", "Tas", "SA", "WA"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Apply when mite numbers reach damaging levels",
          note: "20 mL/ha. Autumn/Winter: apply 2–3 weeks after egg hatch following opening rains. Rainfast after spray dries. Can mix with herbicides for winter cleaning. Spring: spray again if numbers increase before diapause egg production. Do NOT apply as pre-emergence treatment. WHP: 3 days grazing, 14 days cut for stockfeed."
        }
      ]
    },

    // ── 18. Pome Fruit (Apples, Pears) ──
    {
      crop: "Pome Fruit (Apples, Pears)",
      cropList: ["Apples", "Pears"],
      weeds: [
        {
          weed: "Apple Weevil (Otiorhynchus cribricollis), Garden Weevil (Phlyctinus callosus)",
          pestList: ["Apple Weevil", "Otiorhynchus Cribricollis", "Garden Weevil", "Phlyctinus Callosus"],
          states: ["NSW", "Vic", "SA", "WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/100L",
          stage: "Spray trunk, crotch and soil at base of each tree at peak weevil emergence (late Oct–mid Dec)",
          note: "Dilute: 35 mL/100L water. Spray approx 1–2 L solution onto crotch, trunk and soil at base of each tree. Garden Weevil: late Oct–late Nov; Apple Weevil: late Nov–mid Dec. Monitor using cardboard trunk bands. Second spray may be needed 3–4 weeks later. Concentrate spraying: apply same total product per target. WHP: 14 days harvest."
        }
      ]
    },

    // ── 19. Stone Fruit (Apricots, Nectarines, Peaches, Plums) ──
    {
      crop: "Stone Fruit (Apricots, Nectarines, Peaches, Plums)",
      cropList: ["Apricots", "Nectarines", "Peaches", "Plums"],
      weeds: [
        {
          weed: "Apple Weevil (Otiorhynchus cribricollis), Garden Weevil (Phlyctinus callosus)",
          pestList: ["Apple Weevil", "Otiorhynchus Cribricollis", "Garden Weevil", "Phlyctinus Callosus"],
          states: ["WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/100L",
          stage: "Spray trunk, crotch and soil at base of each tree at peak weevil emergence",
          note: "Dilute: 35 mL/100L water. WA only. Same application method as pome fruit. Concentrate spraying: apply same total product per target. WHP: 14 days harvest."
        }
      ]
    },

    // ── 20. Eucalypt Plantations ──
    {
      crop: "Eucalypt Plantations",
      cropList: ["Eucalypts", "Eucalypt Plantations"],
      weeds: [
        {
          weed: "Tasmanian Eucalyptus Leaf Beetle (Chrysophtharta bimaculata), Eucalyptus Weevil (Gonipterus spp.), Autumn Gum Moth (Mnesampela spp.), Bronzed Field Beetle (Adelium spp.), Liparetrus spp., Cadmus spp.",
          pestList: ["Eucalyptus Leaf Beetle", "Chrysophtharta Bimaculata", "Eucalyptus Weevil", "Gonipterus", "Autumn Gum Moth", "Mnesampela", "Bronzed Field Beetle", "Adelium", "Liparetrus", "Cadmus"],
          states: ["All"],
          rate: "85",
          rateMax: "100",
          unit: "mL/ha",
          stage: "Apply before insect damage causes severe defoliation",
          note: "85–100 mL/ha. Ground or aerial application. Micronair application in 5 L water/ha has proved effective. Controls small and large larvae as well as adult beetles. No WHP."
        }
      ]
    },

    // ── 21. Banksias & Ornamentals ──
    {
      crop: "Banksias & Ornamentals",
      cropList: ["Banksias", "Ornamentals"],
      weeds: [
        {
          weed: "Banksia Moth (Danima banksiae)",
          pestList: ["Banksia Moth", "Danima Banksiae"],
          states: ["WA"],
          rate: "7",
          rateMax: "7",
          unit: "mL/100L",
          stage: "Apply on regular programme at 2-week intervals at early flower development",
          note: "7 mL/100L water. WA only. Commence spraying when blooms are immature and continue until flowers are fully developed. No WHP."
        }
      ]
    },

    // ── 22. Tobacco ──
    {
      crop: "Tobacco",
      cropList: ["Tobacco"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Tobacco Budworm (Helicoverpa armigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera", "Tobacco Budworm", "Helicoverpa Armigera"],
          states: ["Qld", "Vic", "WA"],
          rate: "10",
          rateMax: "13",
          unit: "mL/100L",
          stage: "Apply from just after transplanting on a 7–10 day schedule according to pest incidence",
          note: "10–13 mL/100L. Medium to fine spray using hollow/solid cone nozzles. Spray volume increases from 200 L/ha after transplanting to 1000 L/ha at maturity. Use higher rate when larvae >10 mm or egg laying intense. WHP: 7 days harvest."
        }
      ]
    },

    // ── 23. Asparagus ──
    {
      crop: "Asparagus (not for use on White Asparagus)",
      cropList: ["Asparagus"],
      weeds: [
        {
          weed: "Garden Weevil (Phlyctinus callosus)",
          pestList: ["Garden Weevil", "Phlyctinus Callosus"],
          states: ["WA"],
          rate: "35",
          rateMax: "35",
          unit: "mL/100L",
          stage: "Apply in spring after weevil emergence at up to 500 L spray solution per hectare",
          note: "35 mL/100L water. WA only. Caution: not for white asparagus — reports of phytotoxicity with alpha-cypermethrin. Day time spraying is effective but superior control at night. Repeat if pest pressure continues. Application to fern after spear harvest may reduce carry-over. WHP: 1 day harvest."
        }
      ]
    },

    // ── 24. Mung Beans & Navy Beans ──
    {
      crop: "Mung Beans & Navy Beans",
      cropList: ["Mung Beans", "Navy Beans"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Corn Earworm (Helicoverpa armigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera", "Corn Earworm", "Helicoverpa Armigera"],
          states: ["Qld", "NSW", "ACT", "WA", "NT"],
          rate: "100",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Apply when larvae feeding on flowers or pods reach 1–2 per metre of row",
          note: "100–135 mL/ha. Use higher rate when larvae >10 mm or canopy dense. To help contain pyrethroid resistance in H. armigera, do NOT apply to larvae >5 mm in Northern Qld and NSW. Best results at egg hatch. WHP: 7 days harvest."
        },
        {
          weed: "Green Mirid (Creontiades dilutus)",
          pestList: ["Green Mirid", "Creontiades Dilutus"],
          states: ["Qld", "NSW", "ACT", "WA", "NT"],
          rate: "100",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Target nymphs and/or adults when they reach economically damaging levels",
          note: "100–135 mL/ha. Use higher rate when pest pressure is high and increased residual needed. Repeat as necessary. WHP: 7 days harvest."
        },
        {
          weed: "Green Vegetable Bug (Nezara viridula)",
          pestList: ["Green Vegetable Bug", "Nezara Viridula"],
          states: ["Qld", "NSW", "ACT", "WA", "NT"],
          rate: "135",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Apply with Agral (10 mL/100L) from flowering using medium spray quality",
          note: "135 mL/ha. Repeat as necessary. WHP: 7 days harvest."
        }
      ]
    },

    // ── 25. Brassica Vegetables ──
    {
      crop: "Brassica Vegetables (Cabbages, Cauliflowers, Brussels Sprouts, Broccoli, Kale, Kohlrabi, Chinese Cabbage, Turnips)",
      cropList: ["Cabbages", "Cauliflowers", "Brussels Sprouts", "Broccoli", "Kale", "Kohlrabi", "Chinese Cabbage", "Turnips"],
      weeds: [
        {
          weed: "Cabbage White Butterfly (Pieris rapae), Cabbage Moth (Plutella xylostella), Cluster Caterpillar (Spodoptera litura), Helicoverpa punctigera, Helicoverpa armigera",
          pestList: ["Lepidopteran Pests", "Cabbage White Butterfly", "Pieris Rapae", "Cabbage Moth", "Plutella Xylostella", "Cluster Caterpillar", "Spodoptera Litura", "Helicoverpa Punctigera", "Helicoverpa Armigera"],
          states: ["All"],
          rate: "20",
          rateMax: "135",
          unit: "mL/100L or mL/ha",
          stage: "Apply according to pest incidence — when reinfestation is continuous, treat every 7–10 days",
          note: "LOW VOLUME: 135 mL/ha — ground rig in 100–600 L water/ha as fine spray (100–200 microns); aerial in 20–60 L water/ha (100–150 microns). HIGH VOLUME: 20 mL/100L — increase from 600 L/ha after transplanting to 1000 L/ha at maturity as medium spray (200–400 microns VMD). Add Wetspray Wetting Agent at 30 mL/100L. For H. armigera in NSW and Qld: apply to larvae only if <5 mm. WHP: 1 day harvest."
        }
      ]
    },

    // ── 26. Cauliflowers — Staphylinid Beetle ──
    {
      crop: "Cauliflowers — Staphylinid Beetle",
      cropList: ["Cauliflowers"],
      weeds: [
        {
          weed: "Staphylinid Beetle (up to 3 mm length)",
          pestList: ["Staphylinid Beetle"],
          states: ["WA"],
          rate: "20",
          rateMax: "135",
          unit: "mL/100L or mL/ha",
          stage: "Apply by boomspray when pests first appear",
          note: "LOW VOLUME: 135 mL/ha. HIGH VOLUME: 20 mL/100L. WA only. WHP: 1 day harvest."
        }
      ]
    },

    // ── 27. Lettuce ──
    {
      crop: "Lettuce",
      cropList: ["Lettuce"],
      weeds: [
        {
          weed: "Helicoverpa spp.",
          pestList: ["Helicoverpa", "Helicoverpa Armigera", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "20",
          rateMax: "135",
          unit: "mL/100L or mL/ha",
          stage: "Spray at first sign of activity — good spray coverage essential",
          note: "LOW VOLUME: 135 mL/ha. HIGH VOLUME: 20 mL/100L. Recheck crop at regular intervals. Do not use same MoA group for consecutive sprays. To help contain pyrethroid resistance in H. armigera, do NOT apply to larvae >5 mm in Northern NSW and Qld. WHP: 3 days harvest."
        }
      ]
    },

    // ── 28. Sweet Corn ──
    {
      crop: "Sweet Corn",
      cropList: ["Sweet Corn"],
      weeds: [
        {
          weed: "Corn Earworm (Helicoverpa armigera), Native Budworm (Helicoverpa punctigera)",
          pestList: ["Corn Earworm", "Helicoverpa Armigera", "Native Budworm", "Helicoverpa Punctigera"],
          states: ["All"],
          rate: "100",
          rateMax: "135",
          unit: "mL/ha",
          stage: "Fresh market: apply at 5–8 day intervals from tassel emergence until silks wither. Processing: apply from early silking.",
          note: "100–135 mL/ha. Use higher rate if larvae >10 mm. Larvae in protected feeding sites within the cob are not effectively controlled — apply before this occurs. Best results at egg hatch. To help contain pyrethroid resistance, do NOT apply to H. armigera >5 mm. WHP: 7 days harvest."
        }
      ]
    },

    // ── 29. Tomatoes (bush and trellis) ──
    {
      crop: "Tomatoes (bush and trellis)",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Native Budworm (Helicoverpa punctigera), Tomato Grub (Helicoverpa armigera)",
          pestList: ["Native Budworm", "Helicoverpa Punctigera", "Tomato Grub", "Helicoverpa Armigera"],
          states: ["All"],
          rate: "7",
          rateMax: "135",
          unit: "mL/100L or mL/ha",
          stage: "Programme: apply on 7–10 day schedule whilst pests active. Established infestations: apply to escape situations.",
          note: "PROGRAMME APPLICATION — LOW VOLUME: 70–100 mL/ha (ground 100–400 L/ha, aerial min 10 L/ha). HIGH VOLUME: 7–10 mL/100L (200 L/ha after transplanting increasing to 1000 L/ha at maturity). ESTABLISHED INFESTATIONS — LOW VOLUME: 135 mL/ha. HIGH VOLUME: 20 mL/100L. Use higher rate when egg laying intense. Do NOT apply to Tomato Grub larvae >5 mm. Do NOT apply to trellis tomatoes by aircraft. WHP: 1 day harvest."
        },
        {
          weed: "Cluster Caterpillar (Spodoptera litura)",
          pestList: ["Cluster Caterpillar", "Spodoptera Litura"],
          states: ["Qld", "NSW", "ACT", "WA", "NT"],
          rate: "7",
          rateMax: "135",
          unit: "mL/100L or mL/ha",
          stage: "Apply as per Native Budworm programme or established infestation rates",
          note: "Same rates and methods as Native Budworm/Tomato Grub above. WHP: 1 day harvest."
        },
        {
          weed: "Plague Thrips (Thrips imaginis)",
          pestList: ["Plague Thrips", "Thrips Imaginis", "Thrips"],
          states: ["All"],
          rate: "6",
          rateMax: "45",
          unit: "mL/100L or mL/ha",
          stage: "Check crop frequently during flowering — apply when infestation reaches economically damaging level",
          note: "LOW VOLUME: 45 mL/ha. HIGH VOLUME: 6 mL/100L. Use same application methods as described for Native Budworm. WHP: 1 day harvest."
        }
      ]
    },

    // ═══ PERMIT USES ═══

    // ── PER80099: Fruiting Vegetables (except cucurbits) — QLD/Med Fruit Fly ──
    {
      crop: "Fruiting Vegetables (except cucurbits) — QLD & Med Fruit Fly (PER80099)",
      cropList: ["Tomatoes", "Capsicums", "Eggplants", "Chillies"],
      permitNumber: "PER80099",
      weeds: [
        {
          weed: "Queensland Fruit Fly (Bactrocera tryoni), Mediterranean Fruit Fly (Ceratitis capitata)",
          pestList: ["Queensland Fruit Fly", "Bactrocera Tryoni", "Mediterranean Fruit Fly", "Ceratitis Capitata", "Fruit Fly"],
          states: ["All"],
          rate: "95",
          rateMax: "95",
          unit: "mL/ha",
          stage: "Apply as ground-based foliar spray when fruit fly activity detected",
          note: "PERMIT PER80099 (exp. 30 Nov 2029). 95 mL/ha (300 g/L products). Ground-based foliar spray using calibrated airblast, boom or similar. 100–600 L water/ha. Max 4 applications per crop at 7-day intervals. May be used as part of a broader strategic spray program with monitoring. Do NOT apply if rain expected within 6 hours. WHP: 1 day harvest."
        }
      ]
    },

    // ── PER80138: Cucurbit Vegetables — Cucumber Fruit Fly ──
    {
      crop: "Cucurbit Vegetables — Cucumber Fruit Fly (PER80138)",
      cropList: ["Cucurbits", "Cucumber", "Zucchini", "Pumpkin", "Melons", "Squash"],
      permitNumber: "PER80138",
      weeds: [
        {
          weed: "Cucumber Fruit Fly",
          pestList: ["Cucumber Fruit Fly", "Fruit Fly"],
          states: ["All"],
          rate: "95",
          rateMax: "95",
          unit: "mL/ha",
          stage: "Apply as ground-based foliar spray when fruit fly activity detected",
          note: "PERMIT PER80138 (exp. 31 Dec 2029). 95 mL/ha (300 g/L products). Field and protected cropping. Ground-based foliar spray using calibrated airblast, boom or similar. 100–600 L water/ha. Max 4 applications per crop at 7-day intervals. Do NOT use EC formulations containing xylene in protected cropping unless adequate ventilation. WHP: 1 day harvest."
        }
      ]
    },

    // ── PER91921: Nursery Stock & Ornamentals — Psyllids, Stink Bugs, Aphids etc. ──
    {
      crop: "Nursery Stock & Ornamentals — Psyllids, Stink Bugs, Leafhoppers, Whiteflies (PER91921)",
      cropList: ["Nursery Stock", "Cut Flowers", "Ornamentals"],
      permitNumber: "PER91921",
      weeds: [
        {
          weed: "Psyllids, Stink Bugs, Leafhoppers, Whiteflies",
          pestList: ["Psyllids", "Stink Bugs", "Leafhoppers", "Whiteflies"],
          states: ["All"],
          rate: "42",
          rateMax: "42",
          unit: "mL/ha",
          stage: "Apply at first sign of pests using ground boom spray equipment only",
          note: "PERMIT PER91921 (exp. 28 Feb 2030). 42 mL product/ha (300 g/L alpha-cypermethrin). Ground boom spray only. Non-ionic wetting agent required. Max 4 applications per crop. Non-food nursery stock, cut flowers and ornamentals only. Do NOT use on plants grown for human or animal consumption."
        },
        {
          weed: "Aphids, Rutherglen Bug (Nysius vinitor)",
          pestList: ["Aphids", "Rutherglen Bug", "Nysius Vinitor"],
          states: ["All"],
          rate: "83",
          rateMax: "83",
          unit: "mL/ha",
          stage: "Apply at first sign of pests using ground boom spray equipment only",
          note: "PERMIT PER91921 (exp. 28 Feb 2030). 83 mL product/ha (300 g/L alpha-cypermethrin). Ground boom spray only. Non-ionic wetting agent required. Max 4 applications per crop. Non-food nursery stock, cut flowers and ornamentals only. Do NOT use on plants grown for human or animal consumption."
        }
      ]
    },

    // ── PER91944: Nursery Stock & Ornamentals — Grasshoppers, Beetles, Weevils ──
    {
      crop: "Nursery Stock & Ornamentals — Grasshoppers, Locusts, Beetles, Weevils, Stem Borers (PER91944)",
      cropList: ["Nursery Stock", "Cut Flowers", "Ornamentals"],
      permitNumber: "PER91944",
      weeds: [
        {
          weed: "Grasshoppers, Locusts, Beetles, Weevils, Stem Borers",
          pestList: ["Grasshoppers", "Locusts", "Beetles", "Weevils", "Stem Borers"],
          states: ["All"],
          rate: "42",
          rateMax: "83",
          unit: "mL/ha",
          stage: "Apply at first sign of pests using ground boom spray equipment only",
          note: "PERMIT PER91944 (exp. 30 Sep 2030). 42–83 mL product/ha (300 g/L alpha-cypermethrin). Ground boom spray only. Non-ionic wetting agent required. Max 4 applications per crop. Non-food nursery stock, cut flowers and ornamentals only. Do NOT use on plants grown for human or animal consumption."
        }
      ]
    }

  ],

  // ── General notes ──────────────────────────────────────────
  restraints: [
    "Do NOT apply if rain is expected within 6 hours after application.",
    "This product is ineffective against synthetic pyrethroid resistant Helicoverpa armigera larvae longer than 5 mm. All H. armigera in NSW and QLD should be treated as being resistant to synthetic pyrethroids.",
    "Do NOT apply more than the maximum seasonal rate specified for each crop (e.g. 180 mL/ha for winter cereals, 135 mL/ha for rice/canola/linola, 200 mL/ha for lupins, 110 mL/ha for pastures).",
    "Do NOT apply to tight headed sorghum varieties.",
    "Do NOT apply to trellis tomatoes by aircraft.",
    "Dangerous to bees — do NOT spray on any plants in flower while bees are foraging. Risk reduced by spraying early morning or late evening.",
    "Dangerous to fish and aquatic life — do NOT contaminate streams, rivers or waterways. Maintain buffer distances from downwind non-target water bodies."
  ],

  // ── Withholding periods ──────────────────────────────────────
  withholding: {
    harvest: "Asparagus, brassicas, tomatoes: 1 day. Lettuce: 3 days. Maize, mung beans, navy beans, rice, sorghum, soybeans, sweet corn, tobacco, winter cereals: 7 days. Cotton, linseed, pome fruit, stone fruit: 14 days. Canola, chickpeas, sunflowers: 21 days. Faba beans, field peas, lupins: 4 weeks. Linola: 12 weeks.",
    grazing: "Canola: 21 days. Chickpeas, faba beans: 5 weeks. Lucerne: 14 days. Pastures: 3 days grazing, 14 days cut for stockfeed. Winter cereals: 14 days stubble grazing."
  },

  // ── Compatibility ────────────────────────────────────────────
  compatibility: {
    compatible: [],
    incompatible: [],
    note: [
      "Alpha-Scud 300 SC can be mixed with herbicides used for winter cleaning of sub clover pastures and spray topping pastures. Always apply with a non-ionic surfactant unless detailed on the label of a tank mix partner. Consult the compatibility section of this label for specific tank mix details."
    ]
  }

};
