// ─────────────────────────────────────────────────────────────────────────────
// INFINITY® ULTRA — Label Data
// Pyrasulfotole + Diflufenican Herbicide (250 g/L Pyrasulfotole + 125 g/L Diflufenican)
// Source: Infinity Ultra Product Label.pdf
// APVMA Approval No: 91984/146943
// Bayer CropScience Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['infinityultra'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Bayer Infinity® Ultra Herbicide",

  category:         "Herbicides",
  activeIngredient: "250 g/L Pyrasulfotole + 125 g/L Diflufenican",
  group:            "Group 27 + Group 12 Herbicide (HPPD Inhibitor + Carotenoid Biosynthesis Inhibitor)",
  modeOfAction:     "Dual mode of action: Pyrasulfotole inhibits 4-hydroxyphenylpyruvate dioxygenase (HPPD, Group 27). Diflufenican inhibits carotenoid biosynthesis via phytoene desaturase (PDS, Group 12). Predominantly foliar herbicide with limited soil activity.",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#155e75",
  apvma:            "91984/146943",
  company: "Bayer",
  labelPdf:         "Source labels/Infinity Ultra Product Label.pdf",
  sdsPdf:           "SDS Labels/Infinity Ultra Herbicide SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Wild Radish", "Common Sowthistle", "Wireweed", "Capeweed", "Medic", "Flaxleaf Fleabane", "Volunteer Canola", "Bifora", "Prickly Lettuce", "Marshmallow"],
    timing: ["Post-emergence from 2-leaf to commencement of stem elongation (Z12–Z30)"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Wheat/Barley/Oats/Triticale — Wild radish (up to 4 leaf) ──
    {
      crop: "Wheat (including durum), Barley, Oats, Triticale (2-leaf to Z30)",
      cropList: ["Wheat", "Durum Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        {
          weed: "Wild radish (Raphanus raphanistrum)",
          pestList: ["Wild Radish", "Raphanus raphanistrum"],
          states: ["All"],
          rate: "110",
          rateMax: "140",
          unit: "mL/ha",
          stage: "Weed: Up to 4 leaf. Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 0.5–1.0% v/v. Use higher rate (140 mL/ha) and Hasten 1.0% v/v where excellent coverage is not possible due to shading from crop canopy or where weeds overlap each other (e.g. populations >150 plants/m²). Do NOT tank mix with bromoxynil when applying to oats."
        },
        {
          weed: "Wild radish (Raphanus raphanistrum) — advanced",
          pestList: ["Wild Radish"],
          states: ["All"],
          rate: "170",
          rateMax: "170",
          unit: "mL/ha",
          stage: "Weed: Up to 6 leaf. Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 1.0% v/v."
        },
        {
          weed: "Wild radish (Raphanus raphanistrum) — with MCPA LVE tank mix",
          pestList: ["Wild Radish"],
          states: ["All"],
          rate: "140",
          rateMax: "140",
          unit: "mL/ha",
          stage: "Weed: Up to 8 leaf. Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 0.5–1.0% v/v. Tank mix with 440 mL/ha MCPA LVE 570. The preferred option where spray coverage is likely to be impeded due to shading from crop or weeds. NOT for use in oats with bromoxynil."
        }
      ]
    },

    // ── 2. Wheat/Barley/Oats/Triticale — Common sowthistle, wireweed, capeweed, Australian stone crop, Indian hedge mustard ──
    {
      crop: "Wheat (including durum), Barley, Oats, Triticale (2-leaf to Z30)",
      cropList: ["Wheat", "Durum Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        {
          weed: "Common sowthistle, Wireweed, Capeweed, Australian stone crop, Indian hedge mustard",
          pestList: ["Common Sowthistle", "Sonchus oleraceus", "Wireweed", "Polygonum aviculare", "Capeweed", "Arctotheca calendula", "Australian Stone Crop", "Crassula sieberiana", "Indian Hedge Mustard", "Sisymbrium orientale"],
          states: ["All"],
          rate: "110",
          rateMax: "110",
          unit: "mL/ha",
          stage: "Weed: Up to 6 leaf. Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 0.5–1.0% v/v."
        }
      ]
    },

    // ── 3. Wheat/Barley/Oats/Triticale — Medic ──
    {
      crop: "Wheat (including durum), Barley, Oats, Triticale (2-leaf to Z30)",
      cropList: ["Wheat", "Durum Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        {
          weed: "Medic (Medicago spp.)",
          pestList: ["Medic", "Medicago spp."],
          states: ["All"],
          rate: "140",
          rateMax: "140",
          unit: "mL/ha",
          stage: "Weed: Up to 6 leaf. Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 0.5–1.0% v/v."
        }
      ]
    },

    // ── 4. Wheat/Barley/Oats/Triticale — Black bindweed ──
    {
      crop: "Wheat (including durum), Barley, Oats, Triticale (2-leaf to Z30)",
      cropList: ["Wheat", "Durum Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        {
          weed: "Black bindweed (Fallopia convolvulus)",
          pestList: ["Black Bindweed", "Fallopia convolvulus"],
          states: ["All"],
          rate: "110",
          rateMax: "110",
          unit: "mL/ha",
          stage: "Weed: Up to 6 leaf. Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 0.5–1.0% v/v. Tank mix with 500 mL/ha bromoxynil 200 g/L (n-octanoyl ester). NOT for use in oats with bromoxynil."
        }
      ]
    },

    // ── 5. Wheat/Barley/Oats/Triticale — Bastard's fumitory, Matricaria/Globe chamomile ──
    {
      crop: "Wheat (including durum), Barley, Oats, Triticale (2-leaf to Z30)",
      cropList: ["Wheat", "Durum Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        {
          weed: "Bastard's fumitory (Fumaria bastardii), Matricaria / Globe chamomile (Oncosiphon pilulifer)",
          pestList: ["Bastard's Fumitory", "Fumaria bastardii", "Matricaria", "Globe Chamomile", "Oncosiphon pilulifer"],
          states: ["All"],
          rate: "110",
          rateMax: "110",
          unit: "mL/ha",
          stage: "Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 0.5–1.0% v/v. Tank mix with 700 mL/ha bromoxynil 200 g/L (n-octanoyl ester). NOT for use in oats with bromoxynil."
        }
      ]
    },

    // ── 6. Wheat/Barley/Oats/Triticale — Flaxleaf fleabane, Dense-flowered fumitory, Common fumitory, Volunteer canola ──
    {
      crop: "Wheat (including durum), Barley, Oats, Triticale (2-leaf to Z30)",
      cropList: ["Wheat", "Durum Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        {
          weed: "Flaxleaf fleabane (Conyza bonariensis), Dense-flowered fumitory (Fumaria densiflora), Common fumitory (Fumaria officinalis), Volunteer canola (Brassica napus)",
          pestList: ["Flaxleaf Fleabane", "Conyza bonariensis", "Dense-flowered Fumitory", "Fumaria densiflora", "Common Fumitory", "Fumaria officinalis", "Volunteer Canola", "Brassica napus"],
          states: ["All"],
          rate: "110",
          rateMax: "110",
          unit: "mL/ha",
          stage: "Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 0.5–1.0% v/v. Tank mix with 440 mL/ha MCPA LVE 570."
        }
      ]
    },

    // ── 7. Wheat/Barley/Oats/Triticale — Prickly lettuce, Marshmallow ──
    {
      crop: "Wheat (including durum), Barley, Oats, Triticale (2-leaf to Z30)",
      cropList: ["Wheat", "Durum Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        {
          weed: "Prickly lettuce (Lactuca serriola), Marshmallow (Malva parviflora)",
          pestList: ["Prickly Lettuce", "Lactuca serriola", "Marshmallow", "Malva parviflora"],
          states: ["All"],
          rate: "110",
          rateMax: "110",
          unit: "mL/ha",
          stage: "Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 0.5–1.0% v/v. Tank mix with either 440 mL/ha MCPA LVE 570 OR 700 mL/ha bromoxynil 200 g/L (n-octanoyl ester). NOT for use in oats with bromoxynil."
        }
      ]
    },

    // ── 8. Wheat/Barley/Oats/Triticale — Bifora ──
    {
      crop: "Wheat (including durum), Barley, Oats, Triticale (2-leaf to Z30)",
      cropList: ["Wheat", "Durum Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        {
          weed: "Bifora (Bifora testiculata)",
          pestList: ["Bifora", "Bifora testiculata"],
          states: ["All"],
          rate: "110",
          rateMax: "110",
          unit: "mL/ha",
          stage: "Weed: Up to 4 leaf. Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 0.5–1.0% v/v. Tank mix with 900 mL/ha bromoxynil 200 g/L (n-octanoyl ester). NOT for use in oats with bromoxynil."
        },
        {
          weed: "Bifora (Bifora testiculata) — advanced",
          pestList: ["Bifora"],
          states: ["All"],
          rate: "110",
          rateMax: "110",
          unit: "mL/ha",
          stage: "Weed: Up to 8 leaf. Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 0.5–1.0% v/v. Tank mix with 900–1200 mL/ha bromoxynil 200 g/L (n-octanoyl ester). Use higher rate of bromoxynil (1200 mL/ha) and Hasten 1.0% v/v where excellent coverage is not possible. NOT for use in oats with bromoxynil."
        }
      ]
    },

    // ── 9. Wheat/Barley/Oats/Triticale — Volunteer lentils ──
    {
      crop: "Wheat (including durum), Barley, Oats, Triticale (2-leaf to Z30)",
      cropList: ["Wheat", "Durum Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        {
          weed: "Volunteer lentils (Lens culinaris)",
          pestList: ["Volunteer Lentils", "Lens culinaris"],
          states: ["All"],
          rate: "110",
          rateMax: "110",
          unit: "mL/ha",
          stage: "Weed: Up to 6 leaf. Crop: 2-leaf to commencement of stem elongation (Z12–Z30).",
          note: "Apply with Hasten 0.5–1.0% v/v. Tank mix with either 37.5 mL/ha clopyralid 600 g/L (dimethylamine salt) OR 115 g/ha dicamba 700 g/kg (sodium salt)."
        }
      ]
    },

    // ── 10. Fallow — Common sowthistle, Bladder ketmia ──
    {
      crop: "Fallow",
      cropList: ["Fallow"],
      weeds: [
        {
          weed: "Common sowthistle (Sonchus oleraceus), Bladder ketmia (Hibiscus trionum)",
          pestList: ["Common Sowthistle", "Bladder Ketmia", "Hibiscus trionum"],
          states: ["All"],
          rate: "110",
          rateMax: "110",
          unit: "mL/ha",
          stage: "Weed: Up to 8 leaf.",
          note: "Apply with Hasten 0.5% v/v. Tank mix with 1.6 L/ha glyphosate 450 g/L or 1.26 L/ha Roundup UltraMax Herbicide (with or without Plantshield)."
        }
      ]
    },

    // ── 11. Fallow — Volunteer canola ──
    {
      crop: "Fallow",
      cropList: ["Fallow"],
      weeds: [
        {
          weed: "Volunteer canola (Brassica napus) — Conventional, TT, IT (Clearfield), LibertyLink varieties only",
          pestList: ["Volunteer Canola", "Brassica napus"],
          states: ["All"],
          rate: "110",
          rateMax: "110",
          unit: "mL/ha",
          stage: "Weed: Up to 6 leaf.",
          note: "Apply with Hasten 0.5% v/v. Tank mix with 1.26 L/ha Roundup UltraMax Herbicide (with or without Plantshield). Conventional, triazine tolerant, imidazolinone tolerant (Clearfield) and glufosinate tolerant (LibertyLink) varieties only."
        }
      ]
    },

    // ── 12. Fallow — Flaxleaf fleabane ──
    {
      crop: "Fallow",
      cropList: ["Fallow"],
      weeds: [
        {
          weed: "Flaxleaf fleabane (Conyza bonariensis)",
          pestList: ["Flaxleaf Fleabane", "Conyza bonariensis"],
          states: ["All"],
          rate: "110",
          rateMax: "110",
          unit: "mL/ha",
          stage: "Weed: Rosettes prior to stem elongation.",
          note: "Apply with Hasten 0.5–1.0% v/v. Tank mix with glyphosate. Incomplete control of fleabane may occur in dense infestations, plants >1 month old, or plants under moisture/temperature stress. A double-knock with paraquat 7–14 days after application may be required."
        }
      ]
    },

    // ── 13. Fallow — Common sowthistle (Optical Spot Spray) ──
    {
      crop: "Fallow (Optical Spot Spray)",
      cropList: ["Fallow"],
      weeds: [
        {
          weed: "Common sowthistle (Sonchus oleraceus) — Optical Spot Spray",
          pestList: ["Common Sowthistle"],
          states: ["All"],
          rate: "240",
          rateMax: "240",
          unit: "mL/150L",
          stage: "Weed: Prior to flowering.",
          note: "Optical spot spray technology only. Calibrate sprayer to spray equivalent of 150 L/ha. For weed cover 0–40% of field only. Do not apply >60 L spray mixture/ha (96 mL/ha of Infinity Ultra + 1.2 L/ha Roundup UltraMax). Apply with Hasten 0.5% v/v. Tank mix with 3.0 L/150L Roundup UltraMax (with or without Plantshield)."
        }
      ]
    }
  ],

  // ── Withholding ──────────────────────────────────────────────
  withholding: {
    harvest: "Not required when used as directed",
    grazing: "4 weeks after application"
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply by aircraft.",
    "DO NOT apply if heavy rains or storms are forecast within 3 days.",
    "DO NOT irrigate to the point of field runoff for at least 3 days after application.",
    "DO NOT apply after commencement of crop stem elongation (Z30).",
    "DO NOT follow a fallow application with an in-crop application of a pyrasulfotole-containing product.",
    "DO NOT apply to crops undersown with legumes.",
    "DO NOT apply if crop or weeds are not actively growing or stressed.",
    "DO NOT tank mix Infinity Ultra with bromoxynil when applying to oats."
  ],

  // ── General Notes ──────────────────────────────────────────
  generalNotes: [
    "Crop safener: 62.5 g/L Mefenpyr-diethyl.",
    "Requires Hasten Spray Adjuvant or equivalent (e.g. Kwickin) — do not use non-ionic surfactants or paraffin-based adjuvants.",
    "Minimum spray volume 70 L water/ha with medium to coarse spray quality for broadcast spraying.",
    "For advanced/dense weeds use 100–150 L water/ha with medium spray quality.",
    "Oats are more sensitive than wheat, barley or triticale — avoid spraying during frosty weather.",
    "Some crop yellowing or bleaching expected following application — transient and does not affect yield.",
    "Compatible with Atlantis OD, Axial 100 EC, Arcade, Aviator Xpro, Buctril 200 EC (not in oats), MCPA LVE 570, Associate, Starane Advanced, and others — see label for full list.",
    "Detailed crop rotation recropping intervals apply — check label for specific soil pH and rainfall requirements."
  ]
};
