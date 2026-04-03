// ─────────────────────────────────────────────────────────────────────────────
// ATLANTIS® OD — Label Data
// Mesosulfuron-methyl Selective Herbicide (30 g/L Mesosulfuron-methyl)
// Source: Atlantis OD Selective Herbicide Product Label.pdf
// APVMA Approval No: 62551/B/0209
// Bayer CropScience Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['atlantisod'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Bayer Atlantis® OD Selective Herbicide",

  category:         "Herbicides",
  activeIngredient: "30 g/L Mesosulfuron-methyl",
  group:            "Group 2 Herbicide (Sulfonylurea — ALS Inhibitor)",
  modeOfAction:     "Inhibitor of acetolactate synthase (ALS). Predominantly foliar herbicide with less activity via the soil. Controls wild oats and annual phalaris, and suppresses brome grass, barley grass and annual ryegrass in wheat.",
  formulation:      "Oil Dispersion (OD)",
  color:            "#155e75",
  apvma:            "62551/B/0209",
  company: "Bayer",
  labelPdf:         "Source labels/Atlantis OD Selective Herbicide Product Label.pdf",
  sdsPdf:           "SDS Labels/Atlantis OD Selective Herbicide SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Wild Oats", "Annual Phalaris", "Brome Grass", "Barley Grass", "Annual Ryegrass"],
    timing: ["Post-emergence from 3-leaf stage (Z13) of wheat"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Wheat — Brome grass (suppression) ──
    {
      crop: "Wheat",
      cropList: ["Wheat"],
      weeds: [
        {
          weed: "Brome grass (great brome, Bromus diandrus) — Suppression",
          pestList: ["Brome Grass", "Great Brome", "Bromus diandrus"],
          states: ["All"],
          rate: "330",
          rateMax: "330",
          unit: "mL/ha",
          stage: "Weed: 1 leaf to 3 leaf, 1 tiller (Z11 to Z13,21). Crop: 3-leaf stage (Z13) or more advanced.",
          note: "Suppression only. Will substantially reduce the growth of brome grass and its ability to compete with the crop and will reduce seed set but may not give a significant reduction in plant numbers. Apply generally within 4 to 7 weeks after sowing. Efficacy on larger plants that may have emerged before the crop may be poor. Do not use for suppression of dense brome grass populations (>150 plants/m²). Suppression may be improved with the use of Hasten at 1% v/v."
        }
      ]
    },

    // ── 2. Wheat — Annual ryegrass (suppression) ──
    {
      crop: "Wheat",
      cropList: ["Wheat"],
      weeds: [
        {
          weed: "Annual ryegrass (Lolium rigidum) — Suppression",
          pestList: ["Annual Ryegrass", "Lolium rigidum"],
          states: ["All"],
          rate: "330",
          rateMax: "330",
          unit: "mL/ha",
          stage: "Weed: 1 leaf to 3 leaf, 1 tiller (Z11 to Z13,21). Crop: 3-leaf stage (Z13) or more advanced.",
          note: "Suppression only. Will substantially reduce the growth of annual ryegrass and its ability to compete with the crop and will reduce seed set but may not give a significant reduction in plant numbers. Apply generally within 4 to 7 weeks after sowing. Do not use for control of dense annual ryegrass populations (>200 plants/m²)."
        }
      ]
    },

    // ── 3. Wheat — Barley grass (suppression) ──
    {
      crop: "Wheat",
      cropList: ["Wheat"],
      weeds: [
        {
          weed: "Barley grass (Hordeum leporinum) — Suppression",
          pestList: ["Barley Grass", "Hordeum leporinum"],
          states: ["All"],
          rate: "330",
          rateMax: "330",
          unit: "mL/ha",
          stage: "Weed: 1 to 4 leaf, 2 tillers (Z11 to Z14,22). Crop: 3-leaf stage (Z13) or more advanced.",
          note: "Suppression only. Will substantially reduce the growth of barley grass and its ability to compete with the crop and will reduce seed set but may not give a significant reduction in plant numbers. Apply generally within 4 to 7 weeks after sowing. Apply when the majority of barley grass is less than the early tillering stage (Z14,22). Efficacy on larger plants may be poor. Suppression may be improved with the use of Hasten at 1% v/v."
        }
      ]
    },

    // ── 4. Wheat — Wild oats (control) ──
    {
      crop: "Wheat",
      cropList: ["Wheat"],
      weeds: [
        {
          weed: "Wild oats (Avena spp.)",
          pestList: ["Wild Oats", "Avena spp."],
          states: ["All"],
          rate: "330",
          rateMax: "330",
          unit: "mL/ha",
          stage: "Weed: 1 leaf to 3 leaf, 1 tiller (Z11 to Z13,21). Crop: 3-leaf stage (Z13) or more advanced.",
          note: "Apply generally within 4 to 7 weeks after sowing. Do not use for control of dense wild oat populations (>150 plants/m²). Application to wild oats at more advanced growth stages or to dense populations will result in suppression only."
        }
      ]
    },

    // ── 5. Wheat — Annual phalaris / paradoxa grass (control) ──
    {
      crop: "Wheat",
      cropList: ["Wheat"],
      weeds: [
        {
          weed: "Annual phalaris, paradoxa grass (Phalaris paradoxa only)",
          pestList: ["Annual Phalaris", "Paradoxa Grass", "Phalaris paradoxa"],
          states: ["All"],
          rate: "330",
          rateMax: "330",
          unit: "mL/ha",
          stage: "Weed: 1 leaf to 3 leaf, 1 tiller (Z11 to Z13,21). Crop: 3-leaf stage (Z13) or more advanced.",
          note: "Apply generally within 4 to 7 weeks after sowing. Do not use for control of dense phalaris populations (>300 plants/m²). Other phalaris species may not be adequately controlled with Atlantis OD."
        }
      ]
    }
  ],

  // ── Withholding ──────────────────────────────────────────────
  withholding: {
    harvest: "8 weeks after application",
    grazing: "4 weeks after application"
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT use if rainfall or irrigation is to occur within 8 hours of application.",
    "DO NOT apply to crops undersown with legumes.",
    "DO NOT apply to wheat before the 3-leaf stage (Z13).",
    "DO NOT apply without surfactant/wetting agent, as detailed under 'Use of Surfactant/Wetting Agent' in the General Instructions.",
    "DO NOT apply to paddocks where there is a high risk of weeds resistant to Group 2 herbicides.",
    "DO NOT apply to the wheat variety Brookton.",
    "DO NOT apply by aircraft.",
    "DO NOT overlap when spraying or double spray corners."
  ],

  // ── General Notes ──────────────────────────────────────────
  generalNotes: [
    "Crop safener: 90 g/L Mefenpyr-diethyl. Solvent: 660 g/L Hydrocarbon liquid.",
    "Apply with BS1000 at 0.25% v/v or Hasten or Rocket crop oil concentrates at 1% v/v. When applying for suppression of brome grass or barley grass, only use Hasten or Rocket.",
    "Westonia wheat may show reduced tolerance in some situations, especially during a dry finish to the season.",
    "Application: Ground sprayers only. 50–80 L water/ha, 200–300 micron droplet size (FINE/MEDIUM spray).",
    "Decontaminate sprayer before use on non-cereal crops (chlorine bleach wash procedure required).",
    "Compatible with Lontrel, Dimethoate (max 500 mL/ha), Tigrex (max 500 mL/ha), Jaguar (max 500 mL/ha), Buctril MA (max 1.0 L/ha), LVE MCPA (max 500 mL/ha), Precept (max 1.0 L/ha). Do NOT mix with zinc-based foliar fertilisers or chlorpyrifos-based formulations."
  ]
};
