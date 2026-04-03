// ─────────────────────────────────────────────────────────
// NUFARM BOTECTOR® FUNGICIDE — Label Data
// Biological Fungicide (Aureobasidium pullulans)
// Source: Nufarm_Botector_Label.pdf
// APVMA Approval No: 82495/133066
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────
productDatabase['botector'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Nufarm Botector® Fungicide",

  category:         "Fungicides",
  activeIngredient: "Aureobasidium pullulans (DSM 14940 and DSM 14941)",
  group:            "Group BM02 Fungicide",
  modeOfAction:     "Biological fungicide — colonises entry points on flowers and fruits, competing with Botrytis and other pathogens for space and nutrients. Preventative mode of action only; will not control latent or active infections.",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#4a7c59",
  apvma:            "82495/133066",
  company: "Koppernielsen",
  labelPdf:         "Source labels/Nufarm_Botector_Label.pdf",
  sdsPdf:           "SDS Labels/Nufarm_Botector_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Botrytis", "Grey Mould", "Anthracnose", "Sclerotinia"],
    timing: ["Preventative"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Berries — Botrytis Blight & Fruit Rot / Grey Mould ──
    {
      crop: "Berries — Botrytis Blight & Fruit Rot / Grey Mould",
      cropList: ["Blackberries", "Blueberries", "Raspberries", "Strawberries"],
      weeds: [
        {
          weed: "Botrytis blight and fruit rot / Grey mould (Botrytis cinerea)",
          pestList: ["Botrytis", "Grey Mould", "Botrytis Cinerea"],
          states: ["All"],
          rate: "70",
          rateMax: "100",
          unit: "g/100L",
          stage: "Apply preventatively from beginning of bloom until harvest",
          note: "70–100 g/100L or 0.7–1.0 kg/ha. Field and protected cropping systems. Apply as part of a spray program, up to 6 applications at 5–7 day intervals, particularly when weather conditions favour disease infection. Ensure penetration of canopy and thorough, even coverage. Apply sufficient water to wet all surfaces to point of run-off. Air-assisted sprayers recommended for dense foliage. Apply as MEDIUM spray in min 400 L water/ha. No WHP required when used as directed."
        }
      ]
    },

    // ── Berries — Suppression of Anthracnose, Phomopsis, Rhizopus Fruit Rot ──
    {
      crop: "Berries — Suppression of Anthracnose, Phomopsis & Rhizopus Fruit Rot",
      cropList: ["Blackberries", "Blueberries", "Raspberries", "Strawberries"],
      weeds: [
        {
          weed: "Anthracnose fruit rot (Colletotrichum spp.), Phomopsis fruit rot (Phomopsis spp.), Rhizopus fruit rot (Rhizopus spp.) — SUPPRESSION ONLY",
          pestList: ["Anthracnose", "Colletotrichum", "Phomopsis", "Rhizopus"],
          states: ["All"],
          rate: "70",
          rateMax: "100",
          unit: "g/100L",
          stage: "Apply preventatively from beginning of bloom until harvest — suppression in low disease pressure situations",
          note: "70–100 g/100L or 0.7–1.0 kg/ha. SUPPRESSION ONLY — in low disease pressure situations. Field and protected cropping. Up to 6 applications at 5–7 day intervals. Thorough coverage essential. No WHP required when used as directed."
        }
      ]
    },

    // ── Fruiting Vegetables (cucurbits and non-cucurbits) — Botrytis Grey Mould ──
    {
      crop: "Fruiting Vegetables — Botrytis Grey Mould",
      cropList: ["Capsicums", "Cucumbers", "Eggplants", "Tomatoes", "Zucchinis"],
      weeds: [
        {
          weed: "Botrytis grey mould (Botrytis cinerea)",
          pestList: ["Botrytis", "Grey Mould", "Botrytis Cinerea"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Apply preventatively from flower initiation through to harvest (BBCH 60–89). 7–10 day intervals during infection risk periods.",
          note: "100 g/100L or 1.0 kg/ha. Field and protected cropping systems. Cucurbits and non-cucurbits (except sweet corn and mushrooms). Apply for infections in fruit, stems, foliage and flowers. Up to 5 applications per crop — consecutively or through rotational programs. Pre-harvest applications can reduce disease expression during post-harvest storage. Air-assisted sprayers recommended for dense canopy. No WHP required when used as directed."
        }
      ]
    },

    // ── Fruiting Vegetables — Suppression of Sclerotinia ──
    {
      crop: "Fruiting Vegetables — Suppression of Sclerotinia",
      cropList: ["Capsicums", "Cucumbers", "Eggplants", "Tomatoes", "Zucchinis"],
      weeds: [
        {
          weed: "Sclerotinia (Sclerotinia sclerotiorum) — SUPPRESSION ONLY",
          pestList: ["Sclerotinia", "Sclerotinia Sclerotiorum"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Apply preventatively from flower initiation through to harvest (BBCH 60–89). 7–10 day intervals during infection risk periods.",
          note: "100 g/100L or 1.0 kg/ha. SUPPRESSION ONLY. Field and protected cropping. Up to 5 applications per crop. Thorough coverage of stems, flowers, leaves and fruits essential. No WHP required when used as directed."
        }
      ]
    },

    // ── Grapes (wine, table, dried) — Botrytis Bunch Rot / Grey Mould ──
    {
      crop: "Grapes — Botrytis Bunch Rot / Grey Mould",
      cropList: ["Wine Grapes", "Table Grapes", "Dried Grapes", "Grapes"],
      weeds: [
        {
          weed: "Botrytis bunch rot / Grey mould (Botrytis cinerea)",
          pestList: ["Botrytis", "Botrytis Bunch Rot", "Grey Mould", "Botrytis Cinerea"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Apply preventatively between growth stages EL 19–37 (BBCH 60–88). Key windows: beginning of flowering, 80% caps fallen, bunch closure, berry softening, during ripening.",
          note: "Dilute: 100 g/100L. Per hectare: 0.4–1.0 kg/ha — use lower rates (from 0.4 kg/ha) only when targeting bunch zone where canopy allows adequate coverage; otherwise use 1.0 kg/ha. Up to 4 applications per season. Concentrate spraying: min 400 L/ha water volume, do NOT concentrate more than 2×. Thorough coverage of flowers/bunches critical — air-blast sprayers recommended for dense foliage. Can be applied up to date of harvest. No WHP required when used as directed."
        }
      ]
    },

    // ═══ PERMIT USES ═══

    // ── PER91751: Nursery Stock & Ornamentals — Botrytis / Grey Mould (suppression) ──
    {
      crop: "Nursery Stock & Ornamentals — Botrytis / Grey Mould, suppression (PER91751)",
      cropList: ["Nursery Stock", "Cut Flowers", "Ornamentals", "Foliage Plants", "Potted Colour"],
      permitNumber: "PER91751",
      weeds: [
        {
          weed: "Botrytis / Grey mould (Botrytis cinerea) — SUPPRESSION ONLY",
          pestList: ["Botrytis", "Grey Mould", "Botrytis Cinerea"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "g/100L",
          stage: "Apply preventatively when conditions favour disease development",
          note: "PERMIT PER91751 (exp. 31 Oct 2027). 100 g/100L or 1 kg/ha. SUPPRESSION ONLY — suppresses Botrytis under low to moderate disease pressure; may only partially suppress under high pressure. For high pressure, alternate with other registered/permitted fungicides. Non-food nursery stock, seedlings, tubes, plugs, potted colour, trees, shrubs, foliage, palms, grasses, fruit plants, cut flowers and ornamentals. Apply by air-blast, air-shear, backpack mister, hand lance, sprayboom or equivalent. High volume spray to point of run-off. Max 4 applications per crop. Min 7 days retreatment interval."
        }
      ]
    }

  ],

  // ── General notes ──────────────────────────────────────────
  restraints: [
    "Do NOT apply during the hottest part of the day during summer — apply morning or evening.",
    "Do NOT apply if it is likely to rain before the spray is dry.",
    "Do NOT apply under weather conditions or from equipment that may cause spray drift onto nearby susceptible plants/crops.",
    "Store refrigerated at less than 8°C. Do NOT freeze. Stable for 30 months if stored refrigerated; 10 months at room temperature (20°C or below).",
    "Clean tank to remove chemical residues before use. Do NOT prepare highly concentrated premixtures. Use mixture within 8 hours."
  ],

  // ── Withholding periods ──────────────────────────────────────
  withholding: {
    harvest: "Not required when used as directed.",
    grazing: "Not specified."
  },

  // ── Compatibility ────────────────────────────────────────────
  compatibility: {
    compatible: [],
    incompatible: [],
    note: [
      "Botector is compatible with a variety of commercially available fungicides, insecticides and adjuvants. Incompatible products should not be used during a period of 3 days before until 3 days after application. Detailed compatibility list at www.bio-ferm.com. Contact local Nufarm representative for Australian-specific compatibility results."
    ]
  }

};
