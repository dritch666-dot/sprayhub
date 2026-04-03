// ─────────────────────────────────────────────────────────
// Bayer Flint® 500 WG Fungicide — Label Data
// Group 11 (Strobilurin) | Water Dispersible Granule (WG)
// Source: Bayer_Flint 500 WG Fungicide_Label.pdf
// APVMA Approval No: 53871/111093
// Bayer CropScience Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['bayerflint500wg'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Bayer Flint® 500 WG Fungicide",
  company: "Bayer",

  category:         "Fungicides",
  activeIngredient: "500 g/kg Trifloxystrobin",
  group:            "Group 11 (Strobilurin Fungicide)",
  modeOfAction:     "QoI — inhibits mitochondrial respiration at complex III",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#0284c7",
  apvma:            "53871/111093",
  labelPdf:         "Source labels/Bayer_Flint 500 WG Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/Bayer_Flint 500 WG Fungicide_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Powdery Mildew", "Scab", "Sigatoka", "Cordana Leaf Spot"],
    timing: ["Preventative", "At first sign of disease"]
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT mix this product with any type of spray additive in any crop, with the exception of water miscible crop oil in bananas only.",
    "DO NOT apply by air to apples, pears, grapevines or strawberries."
  ],

  // ── Withholding ─────────────────────────────────────────────
  withholding: {
    harvest: "Apples, Pears, Grapes: 5 weeks. Strawberries: 1 day. Bananas: Not required when used as directed.",
    grazing: "DO NOT allow stock to graze in any treated areas."
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Apples and Pears ─────────────────────────────────────
    {
      crop: "Apples and Pears",
      cropList: ["Apples", "Pears"],
      weeds: [
        {
          weed: "Powdery Mildew of Apples, Protective control of Apple Scab, Pear Scab",
          pestList: ["Powdery Mildew", "Apple Scab", "Pear Scab"],
          states: ["All"],
          rate: "10",
          rateMax: "10",
          unit: "g/100L",
          stage: "Apply as a block of 3 treatments at 7 to 10 day intervals over flowering and into early fruit development",
          note: "Subject to CropLife Australia resistance management strategy. Follow a complete disease management program for scab by rotating with fungicides from unrelated chemical groups. DO NOT apply more than 3 applications per season. When used over flowering, apply alone. Apply with a DMI (Group 3) scab fungicide if intervals are longer than 10 days. Apply by dilute or concentrate spraying. Do not use in equipment that requires rates greater than 50 g/100 L (5X). WHP: 5 weeks."
        }
      ]
    },

    // ── Grapevines ───────────────────────────────────────────
    {
      crop: "Grapevines",
      cropList: ["Grapevines"],
      weeds: [
        {
          weed: "Powdery Mildew, Suppression of Downy Mildew",
          pestList: ["Powdery Mildew", "Downy Mildew"],
          states: ["All"],
          rate: "15",
          rateMax: "15",
          unit: "g/100L",
          stage: "Apply as part of a powdery mildew spray program from early flowering to pre bunch closure",
          note: "Dilute spraying: 15 g/100 L water. Critical crop timing for powdery mildew control is from early flowering to pre bunch closure. DO NOT allow spray intervals to exceed 14 days. DO NOT apply more than 2 applications per season. Apply by dilute or concentrate spraying equipment. Do not use in equipment requiring rates greater than 75 g/100 L (5X). Do not apply in water volumes less than 250 L/ha. Subject to CropLife Australia resistance management strategy. WHP: 5 weeks."
        }
      ]
    },

    // ── Bananas ───────────────────────────────────────────────
    {
      crop: "Bananas (Qld, NSW, WA and NT only)",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Yellow Sigatoka, Black Sigatoka, Cordana Leaf Spot",
          pestList: ["Yellow Sigatoka", "Black Sigatoka", "Cordana Leaf Spot"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "150",
          rateMax: "150",
          unit: "g/ha",
          stage: "Apply as part of a regular program of fungicide sprays, alternating with fungicides from different chemical groups",
          note: "150 g/ha plus a high quality water miscible mineral crop oil at up to 5 L/ha. For optimum disease control maintain thorough de-leafing practices. Remove old leaves and leaves with advanced lesions before application. Intervals between applications generally 14–21 days. Flint should be diluted with sufficient water to ensure thorough coverage of all leaf surfaces (minimum 20 L/ha spray volume when applied by air). When conditions are favourable for disease, a high quality (narrow-range) mineral crop oil should be applied with Flint. Max 4 applications of Flint (or other Group 11 fungicides) per banana block in a 12-month period. In the Tropics (North Qld, NT, Northern WA) DO NOT apply Group 11 sprays in May, June, July, August and September. Subject to CropLife Australia resistance management strategy. WHP: Not required when used as directed."
        }
      ]
    },

    // ── Strawberries ─────────────────────────────────────────
    {
      crop: "Strawberries",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Powdery Mildew (Sphaerotheca macularis)",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "20",
          rateMax: "25",
          unit: "g/100L",
          stage: "Commence from early flowering as part of a powdery mildew program when conditions favour disease development",
          note: "Dilute spraying: 20–25 g/100 L water when spray volume exceeds 800 L/ha. OR Low volume: 200–300 g/ha when spray volume is less than 800 L/ha (do not apply in volumes less than 500 L/ha). Subject to CropLife Australia resistance management strategy. DO NOT apply consecutive Flint treatments. Always alternate with a registered fungicide of a different chemical group. Do not allow the interval between Flint and an alternative group fungicide to exceed 10 days. Use a shorter application interval when disease pressure is high. Max 3 applications per season. Use the higher rate where disease pressure is high. Addition of a non-ionic wetting agent is not required. WHP: 1 day."
        }
      ]
    }
  ]
};
