// ─────────────────────────────────────────────────────────
// ALTACOR® X-FORCE INSECTICIDE — Label Data
// Group 28 Insecticide | Water Dispersible Granule (WDG)
// Source: FMC_AltacorXForce_Label.pdf
// APVMA Approval No: 91353
// FMC Australasia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['altacor'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Altacor® X-Force Insecticide",
  company: "FMC",

  category:         "Insecticides",
  activeIngredient: "700 g/kg Chlorantraniliprole",
  group:            "Group 28 Insecticide",
  modeOfAction:     "Ryanodine receptor modulator (anthranilic diamide)",
  formulation:      "Water Dispersible Granule (WDG)",
  color:            "#5b21b6",
  apvma:            "91353",
  labelPdf:         "Source labels/FMC_AltacorXForce_Label.pdf",
  sdsPdf:           "SDS Labels/ALTACOR_HORT_INSECTICIDE.pdf",
  signalHeading:    "Read Safety Directions",

  // ── Classification ─────────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Carob Moth", "Codling Moth", "Budworms", "Oriental Fruit Moth", "Lightbrown Apple Moth", "Grapevine Moth", "Lepidoptera", "Caterpillars"],
    timing: ["During season", "At egg hatch", "At petal fall"]
  },

  // ── Use situations ─────────────────────────────────────────────
  crops: [

    {
      crop: "Almonds",
      cropList: ["Almonds"],
      weeds: [
        {
          weed: "Carob Moth (Ectomyelois ceratoniae)",
          pestList: ["Carob Moth"],
          states: ["All"],
          rate: "9",
          rateMax: "9",
          unit: "g/100L",
          stage: "At 1–5% almond hull suture opening; or targeting mummies pre-season",
          note: "Add non-ionic surfactant at 15 g active/100L (e.g. Agral 600 @ 25 mL/100L). Apply by airblast sprayer or equivalent. Monitor moth flights through trapping. Applications can be aimed at reducing moth numbers by targeting mummies; alternatively apply when 1–5% of almond hull sutures are opening. If required, retreat at minimum 7-day interval. DO NOT apply more than 2 applications of Altacor X-Force per season. DO NOT treat successive generations — alternate with a different mode of action insecticide. WHP: 14 days."
        },
      ]
    },

    {
      crop: "Pome Fruit — Codling Moth, Budworms, Oriental Fruit Moth (Apples, Nashi Pears, Pears)",
      cropList: ["Pome Fruit","Apples","Nashi Pears","Pears"],
      weeds: [
        {
          weed: "Codling Moth (Cydia pomonella), Budworms (Helicoverpa spp.)",
          pestList: ["Codling Moth","Budworms"],
          states: ["All"],
          rate: "4.5",
          rateMax: "4.5",
          unit: "g/100L",
          stage: "At petalfall (or before 110 Degree Days after Codling moth detected in traps) through late December",
          note: "Add non-ionic surfactant at 15 g active/100L (e.g. Agral 600 @ 25 mL/100L). DO NOT make more than 3 applications per crop per season. Apply at 14–21 day intervals commencing at petalfall (or before 110 Degree Days after Codling moth are detected in traps) until late December. Further treatments should be made with an alternate mode of action insecticide. OR a maximum of 3 applications can be applied commencing from end of December at 14–21 day intervals following treatments with an alternate mode of action product. The petal-fall programme will also control Budworms. WHP: 14 days."
        },
        {
          weed: "Oriental Fruit Moth (Grapholita molesta)",
          pestList: ["Oriental Fruit Moth"],
          states: ["All"],
          rate: "4.5",
          rateMax: "4.5",
          unit: "g/100L",
          stage: "First generation: before 110 Degree Days after Oriental fruit moths detected in traps",
          note: "Add non-ionic surfactant at 15 g active/100L (e.g. Agral 600 @ 25 mL/100L). When treating the first generation, apply the initial treatment before 110 Degree Days after Oriental fruit moths are detected in traps. DO NOT make more than 3 applications per crop per season. WHP: 14 days."
        },
        {
          weed: "Lightbrown Apple Moth (Epiphyas postvittana)",
          pestList: ["Lightbrown Apple Moth"],
          states: ["All"],
          rate: "4.5",
          rateMax: "4.5",
          unit: "g/100L",
          stage: "At petal fall or 140 Degree Days after Lightbrown apple moths detected in traps",
          note: "Add non-ionic surfactant at 15 g active/100L (e.g. Agral 600 @ 25 mL/100L). Apply at 14–21 day intervals commencing at petal fall or at 140 Degree Days after Lightbrown apple moths are detected in traps. Maximum 3 applications of Altacor X-Force per season. Further treatments should be made with alternative mode of action insecticides. WHP: 14 days."
        },
      ]
    },

    {
      crop: "Stone Fruit — Oriental Fruit Moth, Lightbrown Apple Moth (Apricot, Cherries, Nectarines, Peaches, Plums)",
      cropList: ["Stone Fruit","Apricot","Cherries","Nectarines","Peaches","Plums"],
      weeds: [
        {
          weed: "Oriental Fruit Moth (Grapholita molesta)",
          pestList: ["Oriental Fruit Moth"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "g/100L",
          stage: "First generation: before 110 Degree Days after Oriental fruit moths detected in traps; minimum 14 days between applications",
          note: "Add non-ionic surfactant at 15 g active/100L (e.g. Agral 600 @ 25 mL/100L). DO NOT make more than 2 applications per crop per season with a minimum 14 days between applications. When treating the first generation, apply the initial treatment before 110 Degree Days after Oriental fruit moths are detected in traps. Further treatments should be made with alternative mode of action insecticides. WHP: 14 days."
        },
        {
          weed: "Lightbrown Apple Moth (Epiphyas postvittana)",
          pestList: ["Lightbrown Apple Moth"],
          states: ["All"],
          rate: "4.5",
          rateMax: "4.5",
          unit: "g/100L",
          stage: "From 140 Degree Days after Lightbrown apple moths detected in traps; minimum 14-day spray interval",
          note: "Add non-ionic surfactant at 15 g active/100L (e.g. Agral 600 @ 25 mL/100L). Maximum 2 applications of Altacor X-Force per season with a minimum spray interval of 14 days, commencing at 140 Degree Days after Lightbrown apple moths are detected in traps. Further treatments should be made with alternative mode of action insecticides. WHP: 14 days."
        },
      ]
    },

    {
      crop: "Grapes",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Lightbrown Apple Moth (Epiphyas postvittana), Grapevine Moth (Phalaenoides glycinae)",
          pestList: ["Lightbrown Apple Moth","Grapevine Moth"],
          states: ["All"],
          rate: "4.5",
          rateMax: "4.5",
          unit: "g/100L",
          stage: "At egg hatch — 140 Degree Days after a detected moth flight; up to bunch closure only",
          note: "Add non-ionic surfactant at 15 g active/100L (e.g. Agral 600 @ 25 mL/100L). DO NOT make more than 2 applications per crop per season. Time applications for egg hatch (140 Degree Days after a detected moth flight). DO NOT re-treat within 14 days. A final application may be applied up to bunch closure. DO NOT apply after bunch closure. Concentrate spray: DO NOT apply in volumes less than 250 L/ha. Mandatory buffer zones for vertical sprayers: 20 metres from natural aquatic areas. WHP: 8 weeks."
        },
      ]
    },

    {
      crop: "Avocado — Lepidopteran Pests (PER81560)",
      cropList: ["Avocado"],
      permitNumber: "PER81560",
      weeds: [
          { weed: "Lepidopteran Pests — Ectropis Looper (Ectropis sabulosa)", pestList: ["Lepidopteran Pests", "Ectropis Looper"], states: ["NSW", "QLD", "WA"], rate: "10.7", rateMax: "10.7", unit: "g/100L", stage: "Apply at first sign of pest infestation. For looper control, apply post-harvest and post-pruning before flush and flowering", note: "Permit PER81560 (NSW, QLD, WA only). 700 g/kg product: 10.7 g/100L (also 350 g/kg: 21.4 g/100L; 825 g/kg: 9.1 g/100L). Add non-ionic surfactant at 15 g ai/100L. Apply via calibrated airblast sprayer in 1,000–1,500 L water/ha. Apply at 21–28 day intervals. Max 3 applications per season, min 21 days between treatments. WHP: 3 days harvest. Do not graze." },
          { weed: "Lepidopteran Pests — Avocado Leaf Roller (Homona spargotis)", pestList: ["Lepidopteran Pests", "Avocado Leaf Roller"], states: ["NSW", "QLD", "WA"], rate: "10.7", rateMax: "10.7", unit: "g/100L", stage: "Apply at first sign of pest infestation. Target eggs and newly hatched larvae", note: "Permit PER81560 (NSW, QLD, WA only). 700 g/kg product: 10.7 g/100L (also 350 g/kg: 21.4 g/100L; 825 g/kg: 9.1 g/100L). Add non-ionic surfactant at 15 g ai/100L. Apply via calibrated airblast sprayer in 1,000–1,500 L water/ha. Apply at 21–28 day intervals. Max 3 applications per season, min 21 days between treatments. WHP: 3 days harvest. Do not graze." }
      ]
    },
    {
      crop: "Citrus — Fall Armyworm (PER81560)",
      cropList: ["Citrus"],
      permitNumber: "PER81560",
      weeds: [
          { weed: "Fall Armyworm (Spodoptera frugiperda)", pestList: ["Lepidopteran Pests", "Fall Armyworm"], states: ["All"], rate: "12", rateMax: "12", unit: "g/100L", stage: "Target eggs and newly hatched larvae", note: "Permit PER81560. Dilute spraying: 12 g/100L + wetting agent. DO NOT apply more than 2 applications per year. DO NOT use Activator. WHP: 14 days." }
      ]
    }
    ,

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER86014: Peanuts — Heliothis, Corn Earworm, Native Budworm, Fall Armyworm ──
{
  crop: "Peanuts — Heliothis (PER86014)",
  cropList: ["Peanuts"],
  permitNumber: "PER86014",
  weeds: [
    {
      weed: "Heliothis (Helicoverpa armigera)",
      pestList: ["Lepidopteran Pests", "Helicoverpa"],
      states: ["QLD", "NT"],
      rate: "70",
      rateMax: "70",
      unit: "g/ha",
      stage: "Apply at or just prior to egg hatch; target mature (brown) eggs and newly hatched larvae",
      note: "PERMIT PER86014 (exp. 31/07/2026). Altacor 350 g/kg product. Max 2 applications per crop, minimum 7 days apart. WHP: 14 days."
    },
    {
      weed: "Corn Earworm (Helicoverpa armigera)",
      pestList: ["Lepidopteran Pests", "Helicoverpa"],
      states: ["QLD", "NT"],
      rate: "70",
      rateMax: "70",
      unit: "g/ha",
      stage: "Apply at or just prior to egg hatch; target mature (brown) eggs and newly hatched larvae",
      note: "PERMIT PER86014 (exp. 31/07/2026). Altacor 350 g/kg product. Max 2 applications per crop, minimum 7 days apart. WHP: 14 days."
    },
    {
      weed: "Native Budworm (Helicoverpa punctigera)",
      pestList: ["Lepidopteran Pests", "Helicoverpa"],
      states: ["QLD", "NT"],
      rate: "40",
      rateMax: "40",
      unit: "mL/ha",
      stage: "Apply at or just prior to egg hatch; target mature (brown) eggs and newly hatched larvae",
      note: "PERMIT PER86014 (exp. 31/07/2026). Vantacor 600 g/L product. Max 2 applications per crop, minimum 7 days apart. WHP: 14 days."
    },
    {
      weed: "Fall Armyworm (Spodoptera frugiperda)",
      pestList: ["Lepidopteran Pests", "Armyworms"],
      states: ["QLD", "NT"],
      rate: "40",
      rateMax: "40",
      unit: "mL/ha",
      stage: "Apply at or just prior to egg hatch; target mature (brown) eggs and newly hatched larvae",
      note: "PERMIT PER86014 (exp. 31/07/2026). Vantacor 600 g/L product. Max 2 applications per crop, minimum 7 days apart. WHP: 14 days."
    }
  ]
},

// ── PER95049: Cane berries — Lepidopteran pests (Cutworm, Fall Armyworm) ──
{
  crop: "Cane berries — Lepidopteran pests (PER95049)",
  cropList: ["Cane berries", "Raspberries", "Blackberries", "Dewberries"],
  permitNumber: "PER95049",
  weeds: [
    {
      weed: "Cutworm (Agrotis spp.)",
      pestList: ["Lepidopteran Pests", "Caterpillars"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "20",
      rateMax: "20",
      unit: "mL/100L",
      stage: "Monitor crops; commence when populations reach economic threshold",
      note: "PERMIT PER95049 (exp. 3/01/2027). Coragen 200 g/L product + non-ionic surfactant 15 g ai/100L. Max 3 applications per crop, minimum 7 days apart. WHP: 3 days."
    },
    {
      weed: "Fall Armyworm (Spodoptera frugiperda)",
      pestList: ["Lepidopteran Pests", "Armyworms"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "12",
      rateMax: "12",
      unit: "g/100L",
      stage: "Monitor crops; commence when populations reach economic threshold",
      note: "PERMIT PER95049 (exp. 3/01/2027). Altacor Hort 350 g/kg product + non-ionic surfactant 15 g ai/100L. Max 3 applications per crop, minimum 7 days apart. WHP: 3 days."
    }
  ]
},

// ── PER95074: Pistachio — Heliocoverpa, Light brown apple moth, Mango shoot looper, Carob moth ──
{
  crop: "Pistachio — Heliocoverpa & Carob moth (PER95074)",
  cropList: ["Pistachio"],
  permitNumber: "PER95074",
  weeds: [
    {
      weed: "Heliocoverpa (Helicoverpa armigera, H. punctigera)",
      pestList: ["Lepidopteran Pests", "Helicoverpa"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "4.5",
      rateMax: "6",
      unit: "g/100L",
      stage: "Target eggs and first instar larvae via field scouting",
      note: "PERMIT PER95074 (exp. 31/08/2027). Altacor X-Force 700 g/kg product + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: 14 days."
    },
    {
      weed: "Light brown apple moth (Epiphyas postvittana)",
      pestList: ["Lepidopteran Pests", "Moths"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "4.5",
      rateMax: "6",
      unit: "g/100L",
      stage: "Target eggs and first instar larvae via field scouting",
      note: "PERMIT PER95074 (exp. 31/08/2027). Altacor X-Force 700 g/kg product + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: 14 days."
    },
    {
      weed: "Mango shoot looper (Perixera illepidaria)",
      pestList: ["Lepidopteran Pests", "Caterpillars"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "4.5",
      rateMax: "6",
      unit: "g/100L",
      stage: "Target eggs and first instar larvae via field scouting",
      note: "PERMIT PER95074 (exp. 31/08/2027). Altacor X-Force 700 g/kg product + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: 14 days."
    },
    {
      weed: "Carob moth (Ectomyelois ceratoniae)",
      pestList: ["Lepidopteran Pests", "Moths"],
      states: ["NSW", "QLD", "SA", "TAS", "WA"],
      rate: "9",
      rateMax: "9",
      unit: "g/100L",
      stage: "Target eggs and first instar larvae via field scouting",
      note: "PERMIT PER95074 (exp. 31/08/2027). Altacor X-Force 700 g/kg product + non-ionic surfactant 15 g ai/100L. Max 2 applications per crop, minimum 7 days apart. WHP: 14 days."
    }
  ]
}

],  // end crops array

  // ── Agronomic fields ──────────────────────────────────────────
  restraints: [
    "DO NOT apply if rainfall is expected within 2 hours of application.",
    "DO NOT apply with aircraft.",
    "DO NOT allow bystanders to come into contact with the spray cloud.",
    "DO NOT apply in a manner that may cause an unacceptable impact to native vegetation, agricultural crops, landscaped gardens and aquaculture production, or cause contamination of plant or livestock commodities outside the application site from spray drift.",
    "DO NOT apply unless the wind speed is between 3 and 20 kilometres per hour at the application site during the time of application.",
    "DO NOT apply if there are hazardous surface temperature inversion conditions present at the application site (exist most evenings 1–2 hours before sunset and persist until 1–2 hours after sunrise).",
    "DO NOT apply by a vertical sprayer unless: spray is not directed above the target canopy; outside nozzles are turned off at row ends and outer rows; and mandatory buffer zone distances are observed.",
    "DO NOT contaminate streams, rivers or waterways with the chemical or used containers.",
    "DO NOT use BS1000 or Activator-90 as they may cause crop phytotoxicity.",
    "DO NOT allow spray mix to sit overnight — resuspension may be difficult.",
    "DO NOT use air agitation, premix or slurry when mixing.",
  ],

  compatibility: {
    compatible:   ["Captan", "Delan", "Mancozeb", "Omite", "Polyram", "Systhane"],
    incompatible: [],
    notes:        ["It is recommended that users premix a small quantity of any desired tank mix and observe for possible adverse changes (settling out, flocculation etc). Avoid complex tank mixtures of several products or very concentrated spray mixtures.", "Mixing sequence: water soluble bags → dry flowable/WDG (Altacor X-Force) → wettable powders → water-based suspension concentrates → water soluble concentrates → oil-based suspension concentrates → emulsifiable concentrates → adjuvants and surfactants → soluble fertilisers."]
  },

  withholding: {
    harvest: "Pome fruit, stone fruit and almond: DO NOT harvest for 14 days after application. Grapes: DO NOT harvest for 8 weeks after application.",
    grazing:  "DO NOT graze or cut for stock food on all treated crops."
  },

  surfactant:     "Non-ionic surfactant at 15 g active/100L (e.g. Agral 600 @ 25 mL/100L). Required for all applications. DO NOT add surfactant if mixing with another product that already contains one, if the co-product label advises against it, or if mixing with a liquid fertiliser.",

  sprayerCleanup: "Prior to application, start with clean, well-maintained equipment. Immediately following application, thoroughly clean all spray equipment to reduce the risk of hardened deposits. Drain spray equipment. Thoroughly rinse sprayer and flush hoses, boom, and nozzles with clean water. DO NOT clean near wells, water sources or desirable vegetation. Dispose of waste rinse water in accordance with local regulations."

};
