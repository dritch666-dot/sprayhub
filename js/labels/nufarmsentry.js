// ─────────────────────────────────────────────────────────────────────────────
// Nufarm Sentry® Herbicide — Label Data
// Water-Dispersible Granule (WDG) | Group 2 Herbicide (ALS Inhibitor)
// Source: Nufarm-Sentry-Label.pdf
// Nufarm Australia Limited
// APVMA Approval No.: 67951/142681 (Effective: 05-02-2024)
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['nufarmsentry'] = {
  name:             "Nufarm Sentry Herbicide",

  category:         "Herbicides",
  activeIngredient: "Imidazolinone herbicide combination (ALS inhibitor)",
  group:            "Group 2 Herbicide",
  modeOfAction:     "Acetolactate synthase (ALS) inhibitor — inhibits branched-chain amino acid synthesis in weeds",
  formulation:      "Water-Dispersible Granule (WDG)",
  color:            "#701a75",
  company: "Nufarm",
  labelPdf:         "Source labels/Nufarm-Sentry-Label.pdf",
  sdsPdf:           "SDS Labels/Nufarm-Sentry-SDS.pdf",
  signalHeading:    "Caution",
  apvma:            "67951/142681",
  classification: {
    type: "Herbicide",
    target: ["Annual Weeds", "Perennial Weeds", "Broadleaf Weeds", "Grass Weeds"],
    timing: ["Pre-emergence", "Post-emergence"]
  },

  crops: [
    // PRE-EMERGENCE USE
    {
      crop: "Imidazolinone Herbicide Tolerant Barley — Pre-emergence",
      cropList: ["Barley"],
      weeds: [
        { weed: "Barley grass (Hordeum spp.)", pestList: ["Barley Grass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "DO NOT apply Nufarm Sentry® more than once per season. Apply pre-emergence only. Best control achieved on moist, friable soil immediately prior to sowing." },
        { weed: "Brome grass (Bromus spp.)", pestList: ["Brome Grass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed. Apply pre-emergence only." },
        { weed: "Climbing buckwheat (Fallopia convolvulus)", pestList: ["Climbing Buckwheat"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed. Apply pre-emergence only." },
        { weed: "Hedge mustard (Sisymbrium officinale)", pestList: ["Hedge Mustard"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed. Apply pre-emergence only." },
        { weed: "Indian hedge mustard (S. orientale)", pestList: ["Indian Hedge Mustard"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed. Apply pre-emergence only." },
        { weed: "Wild radish (Raphanus raphanistrum)", pestList: ["Wild Radish"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed. Apply pre-emergence only." },
        { weed: "Wireweed (Polygonum aviculare)", pestList: ["Wireweed"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed. Apply pre-emergence only." },
        { weed: "Annual ryegrass (Lolium rigidum) — Suppression", pestList: ["Annual Ryegrass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence (Suppression only)", note: "Suppression only. May not provide adequate control in heavy stubble or high weed density. Tank mix with pre-emergence grass herbicide recommended." },
        { weed: "Capeweed (Arctotheca calendula) — Suppression", pestList: ["Capeweed"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence (Suppression only)", note: "Suppression only." },
        { weed: "Clover (Trifolium spp.) — Suppression", pestList: ["Clover"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence (Suppression only)", note: "Suppression only." },
        { weed: "Fumitory (Fumaria spp.) — Suppression", pestList: ["Fumitory"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence (Suppression only)", note: "Suppression only." },
        { weed: "Long storksbill (Erodium botrys) — Suppression", pestList: ["Long Storksbill"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence (Suppression only)", note: "Suppression only." },
        { weed: "Paterson's curse (Echium plantagineum) — Suppression", pestList: ["Paterson's Curse"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence (Suppression only)", note: "Suppression only." },
        { weed: "Phalaris (Phalaris spp.) — Suppression", pestList: ["Phalaris"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence (Suppression only)", note: "Suppression only." }
      ]
    },
    {
      crop: "Imidazolinone Herbicide Tolerant Canola — Pre-emergence",
      cropList: ["Canola"],
      weeds: [
        { weed: "Barley grass (Hordeum spp.)", pestList: ["Barley Grass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "DO NOT apply more than once per season. Apply pre-emergence only." },
        { weed: "Brome grass (Bromus spp.)", pestList: ["Brome Grass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Climbing buckwheat (Fallopia convolvulus)", pestList: ["Climbing Buckwheat"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Hedge mustard (Sisymbrium officinale)", pestList: ["Hedge Mustard"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Indian hedge mustard (S. orientale)", pestList: ["Indian Hedge Mustard"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Wild radish (Raphanus raphanistrum)", pestList: ["Wild Radish"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Wireweed (Polygonum aviculare)", pestList: ["Wireweed"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Annual ryegrass (Lolium rigidum) — Suppression", pestList: ["Annual Ryegrass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence (Suppression only)", note: "Suppression only. Tank mix with pre-emergence grass herbicide recommended." }
      ]
    },
    {
      crop: "Imidazolinone Herbicide Tolerant Wheat — Pre-emergence",
      cropList: ["Wheat"],
      weeds: [
        { weed: "Barley grass (Hordeum spp.)", pestList: ["Barley Grass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "DO NOT apply more than once per season. Apply pre-emergence only." },
        { weed: "Brome grass (Bromus spp.)", pestList: ["Brome Grass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Climbing buckwheat (Fallopia convolvulus)", pestList: ["Climbing Buckwheat"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Hedge mustard (Sisymbrium officinale)", pestList: ["Hedge Mustard"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Indian hedge mustard (S. orientale)", pestList: ["Indian Hedge Mustard"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Wild radish (Raphanus raphanistrum)", pestList: ["Wild Radish"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Wireweed (Polygonum aviculare)", pestList: ["Wireweed"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Controlled weed." },
        { weed: "Annual ryegrass (Lolium rigidum) — Suppression", pestList: ["Annual Ryegrass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence (Suppression only)", note: "Suppression only." }
      ]
    },
    {
      crop: "Imidazolinone Herbicide Tolerant Oats (Kingbale, Archer) — Pre-emergence",
      cropList: ["Oats"],
      weeds: [
        { weed: "Barley grass (Hordeum spp.)", pestList: ["Barley Grass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Only Kingbale and Archer oat varieties approved. DO NOT apply to other oat varieties." },
        { weed: "Brome grass (Bromus spp.)", pestList: ["Brome Grass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Kingbale and Archer varieties only." },
        { weed: "Climbing buckwheat (Fallopia convolvulus)", pestList: ["Climbing Buckwheat"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Kingbale and Archer varieties only." },
        { weed: "Hedge mustard (Sisymbrium officinale)", pestList: ["Hedge Mustard"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Kingbale and Archer varieties only." },
        { weed: "Indian hedge mustard (S. orientale)", pestList: ["Indian Hedge Mustard"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Kingbale and Archer varieties only." },
        { weed: "Wild radish (Raphanus raphanistrum)", pestList: ["Wild Radish"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Kingbale and Archer varieties only." },
        { weed: "Wireweed (Polygonum aviculare)", pestList: ["Wireweed"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence", note: "Kingbale and Archer varieties only." },
        { weed: "Annual ryegrass (Lolium rigidum) — Suppression", pestList: ["Annual Ryegrass"], states: ["All"], rate: "40", rateMax: "50", unit: "g/ha", stage: "Pre-emergence (Suppression only)", note: "Kingbale and Archer varieties only. Suppression only." }
      ]
    },
    // POST-EMERGENCE USE
    {
      crop: "Imidazolinone Herbicide Tolerant Canola — Post-emergence (20 g/ha)",
      cropList: ["Canola"],
      weeds: [
        { weed: "Hedge mustard (Sisymbrium officinale)", pestList: ["Hedge Mustard"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (2–6 leaf canola)", note: "DO NOT use if pre-emergence Nufarm Sentry® applied. DO NOT apply more than once per season. Use with Nufarm CanDo™ Adjuvant* at 0.5 L/100L spray volume." },
        { weed: "Indian hedge mustard (S. orientale)", pestList: ["Indian Hedge Mustard"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (2–6 leaf canola)", note: "Apply to 2–6 leaf stage canola." },
        { weed: "London rocket (S. irio)", pestList: ["London Rocket"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (2–6 leaf canola)", note: "Apply to 2–6 leaf stage canola." },
        { weed: "Shepherd's purse (Capsella bursa-pastoris)", pestList: ["Shepherd's Purse"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (2–6 leaf canola)", note: "Apply to 2–6 leaf stage canola." },
        { weed: "Wild radish (Raphanus raphanistrum)", pestList: ["Wild Radish"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (2–6 leaf canola)", note: "Apply to 2–6 leaf stage canola." },
        { weed: "Wild turnip (Brassica tournefortii)", pestList: ["Wild Turnip"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (2–6 leaf canola)", note: "Apply to 2–6 leaf stage canola." }
      ]
    },
    {
      crop: "Imidazolinone Herbicide Tolerant Canola — Post-emergence (40–55 g/ha)",
      cropList: ["Canola"],
      weeds: [
        { weed: "Amsinckia (Amsinckia spp.)", pestList: ["Amsinckia"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Grass weeds 3 leaf to 2 tillers; broadleaf 2–6 leaf. Use with Nufarm CanDo™ Adjuvant* at 0.5 L/100L spray volume. Where annual ryegrass is significant, use 55 g/ha rate." },
        { weed: "Barley grass (Hordeum leporinum)", pestList: ["Barley Grass"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Grass weeds 3 leaf to 2 tillers; broadleaf 2–6 leaf." },
        { weed: "Bedstraw (Galium tricornutum)", pestList: ["Bedstraw"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Brome grass (Bromus spp.)", pestList: ["Brome Grass"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Climbing buckwheat (Fallopia convolvulus)", pestList: ["Climbing Buckwheat"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Clover (Trifolium spp.)", pestList: ["Clover"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Corn gromwell (Buglossoides arvense)", pestList: ["Corn Gromwell"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Crassula (Crassula spp.)", pestList: ["Crassula"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Dead nettle (Lamium amplexicaule)", pestList: ["Dead Nettle"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Double gee (Emex australis)", pestList: ["Double Gee"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Fumitory (Fumaria spp.)", pestList: ["Fumitory"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Hedge mustard (Sisymbrium officinale)", pestList: ["Hedge Mustard"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Indian hedge mustard (S. orientale)", pestList: ["Indian Hedge Mustard"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "London rocket (S. irio)", pestList: ["London Rocket"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Paterson's curse (Echium plantagineum)", pestList: ["Paterson's Curse"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Phalaris (Phalaris spp.)", pestList: ["Phalaris"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Shepherd's purse (Capsella bursa-pastoris)", pestList: ["Shepherd's Purse"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Toadrush (Juncus bufonius)", pestList: ["Toadrush"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Wild oats (Avena spp.)", pestList: ["Wild Oats"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Wild radish (Raphanus raphanistrum)", pestList: ["Wild Radish"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Wild turnip (Brassica tournefortii)", pestList: ["Wild Turnip"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Wireweed (Polygonum aviculare)", pestList: ["Wireweed"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence", note: "Post-emergence control." },
        { weed: "Annual ryegrass (Lolium rigidum) — Suppression", pestList: ["Annual Ryegrass"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence (Suppression only)", note: "Suppression only. Use 55 g/ha for effective suppression when annual ryegrass is significant." },
        { weed: "Medics (Medicago spp.) — Suppression", pestList: ["Medics"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence (Suppression only)", note: "Suppression only." },
        { weed: "Silver grass (Vulpia spp.) — Suppression (1–2 leaf)", pestList: ["Silver Grass"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence (1–2 leaf only)", note: "Suppression only — 1–2 leaf stage only." },
        { weed: "Storksbill (Erodium spp.) — Suppression", pestList: ["Storksbill"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence (Suppression only)", note: "Suppression only." },
        { weed: "Volunteer vetch (Vicia spp.) — Suppression", pestList: ["Volunteer Vetch"], states: ["All"], rate: "40", rateMax: "55", unit: "g/ha", stage: "Post-emergence (Suppression only)", note: "Suppression only." }
      ]
    },
    {
      crop: "Imidazolinone Herbicide Tolerant Wheat (Single Gene) — Post-emergence (20 g/ha)",
      cropList: ["Wheat"],
      weeds: [
        { weed: "Hedge mustard (Sisymbrium officinale)", pestList: ["Hedge Mustard"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "DO NOT use if pre-emergence Nufarm Sentry® applied. Apply to 4 leaf (Z14) to flag leaf (Z37). Use with Nufarm CanDo™ Adjuvant* at 0.5 L/100L spray volume." },
        { weed: "Indian hedge mustard (S. orientale)", pestList: ["Indian Hedge Mustard"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply to Z14–Z37 stage." },
        { weed: "London rocket (S. irio)", pestList: ["London Rocket"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply to Z14–Z37 stage." },
        { weed: "Shepherd's purse (Capsella bursa-pastoris)", pestList: ["Shepherd's Purse"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply to Z14–Z37 stage." },
        { weed: "Wild radish (Raphanus raphanistrum)", pestList: ["Wild Radish"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply to Z14–Z37 stage." },
        { weed: "Wild turnip (Brassica tournefortii)", pestList: ["Wild Turnip"], states: ["All"], rate: "20", rateMax: "20", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply to Z14–Z37 stage." }
      ]
    },
    {
      crop: "Imidazolinone Herbicide Tolerant Wheat (Single Gene) — Post-emergence (40 g/ha)",
      cropList: ["Wheat"],
      weeds: [
        { weed: "Amsinckia (Amsinckia spp.)", pestList: ["Amsinckia"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Grass weeds 3 leaf to 2 tillers; broadleaf 2–6 leaf. Use with Nufarm CanDo™ Adjuvant* at 0.5 L/100L spray volume." },
        { weed: "Barley grass (Hordeum leporinum)", pestList: ["Barley Grass"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Bedstraw (Galium tricornutum)", pestList: ["Bedstraw"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Brome grass (Bromus spp.)", pestList: ["Brome Grass"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Climbing buckwheat (Fallopia convolvulus)", pestList: ["Climbing Buckwheat"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Clover (Trifolium spp.)", pestList: ["Clover"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Corn gromwell (Buglossoides arvense)", pestList: ["Corn Gromwell"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Crassula (Crassula spp.)", pestList: ["Crassula"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Dead nettle (Lamium amplexicaule)", pestList: ["Dead Nettle"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Double gee (Emex australis)", pestList: ["Double Gee"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Fumitory (Fumaria spp.)", pestList: ["Fumitory"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Hedge mustard (Sisymbrium officinale)", pestList: ["Hedge Mustard"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Indian hedge mustard (S. orientale)", pestList: ["Indian Hedge Mustard"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "London rocket (S. irio)", pestList: ["London Rocket"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Paterson's curse (Echium plantagineum)", pestList: ["Paterson's Curse"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Phalaris (Phalaris spp.)", pestList: ["Phalaris"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Shepherd's purse (Capsella bursa-pastoris)", pestList: ["Shepherd's Purse"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Toadrush (Juncus bufonius)", pestList: ["Toadrush"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Wild oats (Avena spp.)", pestList: ["Wild Oats"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Wild radish (Raphanus raphanistrum)", pestList: ["Wild Radish"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Wild turnip (Brassica tournefortii)", pestList: ["Wild Turnip"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Wireweed (Polygonum aviculare)", pestList: ["Wireweed"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Post-emergence control." },
        { weed: "Annual ryegrass (Lolium rigidum) — Suppression", pestList: ["Annual Ryegrass"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression only)", note: "Suppression only." },
        { weed: "Medics (Medicago spp.) — Suppression", pestList: ["Medics"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression only)", note: "Suppression only." },
        { weed: "Silver grass (Vulpia spp.) — Suppression (1–2 leaf)", pestList: ["Silver Grass"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (1–2 leaf only)", note: "Suppression only — 1–2 leaf stage only." },
        { weed: "Storksbill (Erodium spp.) — Suppression", pestList: ["Storksbill"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression only)", note: "Suppression only." },
        { weed: "Volunteer vetch (Vicia spp.) — Suppression", pestList: ["Volunteer Vetch"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression only)", note: "Suppression only." }
      ]
    },
    {
      crop: "Imidazolinone Herbicide Tolerant Wheat (Single Gene) — Post-emergence with MCPA (40 g/ha)",
      cropList: ["Wheat"],
      weeds: [
        { weed: "African turnip weed (Sisymbrium thellungii)", pestList: ["African Turnip Weed"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply with 455 mL/ha Nufarm MCPA LVE 570 + Nufarm CanDo™ Adjuvant* at 0.5 L/100L spray volume." },
        { weed: "Capeweed (Arctotheca calendula)", pestList: ["Capeweed"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply with MCPA as noted above." },
        { weed: "Spear thistle (Cirsium vulgare)", pestList: ["Spear Thistle"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply with MCPA as noted above." },
        { weed: "Spreading night phlox (Zaluzianskya divaricata)", pestList: ["Spreading Night Phlox"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply with MCPA as noted above." },
        { weed: "Turnip weed (Rapistrum rugosum)", pestList: ["Turnip Weed"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply with MCPA as noted above." },
        { weed: "Variegated thistle (Silybum marianum)", pestList: ["Variegated Thistle"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply with MCPA as noted above." },
        { weed: "Volunteer canola (Brassica napus)", pestList: ["Volunteer Canola"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Z14–Z37)", note: "Apply with MCPA as noted above." },
        { weed: "Cat's-ear (Hypochaeris radicata) — Suppression", pestList: ["Cat's-ear"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression)", note: "Suppression only." },
        { weed: "Common vetch (Vicia spp.) — Suppression", pestList: ["Common Vetch"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression)", note: "Suppression only." },
        { weed: "Cotula (Cotula australis) — Suppression", pestList: ["Cotula"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression)", note: "Suppression only." },
        { weed: "Mintweed (Salvia reflexa) — Suppression", pestList: ["Mintweed"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression)", note: "Suppression only." },
        { weed: "Medics (Medicago spp.) — Suppression", pestList: ["Medics"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression)", note: "Suppression only." },
        { weed: "Prickly lettuce (Lactuca serriola) — Suppression", pestList: ["Prickly Lettuce"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression)", note: "Suppression only." },
        { weed: "Saffron thistle (Carthamus lanatus) — Suppression", pestList: ["Saffron Thistle"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression)", note: "Suppression only." },
        { weed: "Sowthistle (Sonchus oleraceus) — Suppression", pestList: ["Sowthistle"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression)", note: "Suppression only." },
        { weed: "Volunteer faba beans (Vicia faba) — Suppression", pestList: ["Volunteer Faba Beans"], states: ["All"], rate: "40", rateMax: "40", unit: "g/ha", stage: "Post-emergence (Suppression)", note: "Suppression only." }
      ]
    }
  ],

  withholding: {
    grazing: "Varies by crop: Barley & Canola (6 weeks), Wheat (4 weeks), Oats (8 weeks) — DO NOT GRAZE OR CUT FOR STOCK FOOD FOR THE SPECIFIED PERIOD AFTER APPLICATION.",
    harvest: "NOT REQUIRED WHEN USED AS DIRECTED FOR GRAIN HARVEST (all crops)."
  },

  restraints: [
    "DO NOT apply to barley, wheat or canola varieties that lack imidazolinone tolerance or oats other than Kingbale and Archer varieties.",
    "DO NOT apply post-emergence to imidazolinone tolerant barley or oats.",
    "DO NOT apply to crops or weeds which are suffering moisture stress (waterlogged or drought affected) or stressed from previous herbicide or foliar fertiliser treatment.",
    "DO NOT apply by aircraft.",
    "DO NOT apply unless the wind speed is between 3 and 20 kilometres per hour at the application site during the time of application.",
    "DO NOT apply if there are hazardous surface temperature inversion conditions present at the application site.",
    "DO NOT use a post emergence application if a pre-emergence Nufarm Sentry® application was applied.",
    "DO NOT apply more than once per season to any one crop.",
    "DO NOT use Nufarm Sentry® at 40–55 g/ha on shallow, strongly duplex soils in Western Australia.",
    "Spray overlapping can heighten crop injury and can be severe in CL STL and CL JNZ wheat varieties."
  ],

  recrop: {
    "0 months (immediate)": ["Imidazolinone herbicide tolerant crops only (all rates)"],
    "8 months": ["Chickpeas, Faba beans, Field peas, Lucerne, Lupins, Pasture legumes, Vetch, Oats, Triticale, Barley, Wheat (at 20–40 g/ha rates only)"],
    "22 months": ["Safflower (at 20–40 g/ha rates only)", "Lucerne, Lupins, Oats, Pasture legumes, Safflower, Vetch (at 50–55 g/ha rates only)"],
    "34 months": ["All other crops including conventional, TT and RR canola varieties (all rates)"]
  },

  notes: [
    "Formulation: Water-Dispersible Granule (WDG) — provides both soil (pre-emergence) and foliar (post-emergence) activity.",
    "Post-emergence applications must be mixed with Nufarm CanDo™ Adjuvant* at 0.5 L/100L spray volume (* or other registered high quality methylated seed oil adjuvant or paraffinic oil according to label instructions).",
    "Apply in a minimum of 70 L water per hectare for pre-emergence and post-emergence use; 100 L/ha for post-emergence where grass weed populations exceed 200 plants per m².",
    "When used post-emergence alone, apply a minimum of 2 hours before rainfall or overhead irrigation; with Nufarm Archer® 750 or 240 g/L clethodim formulation, apply 3–6 hours before rainfall.",
    "Harvest Weed Seed Set Control (HWSSC) measures are recommended to limit Group 2 resistant seed survival, especially where pre- and post-emergence treatments have been applied.",
    "Tank mixing with alternate mode of action herbicides is recommended for herbicide resistance management.",
    "This product is broken down in the soil by microbes in wet, aerobic conditions. Under drought, anaerobic or low organic matter conditions, soil residues may persist longer.",
    "Growers exporting treated produce should check with Nufarm Australia Limited or their Industry Association for maximum residue limits (MRLs) and import tolerances before use."
  ]
};
