// ─────────────────────────────────────────────────────────────────────────────
// Campbell Poachek® Herbicide — Label Data
// Group 31 Herbicide (Unknown Mode of Action)
// Source: CAMBBELLS_Poachek_Label.pdf
// APVMA Approval No: 47841
// Colin Campbell (Chemicals) Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['campbellpoachek'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Campbell Poachek\u00ae Herbicide",

  category:         "Herbicides",
  activeIngredient: "175 g/L Endothal (present as the dipotassium salt)",
  group:            "Group 31 Herbicide (Unknown Mode of Action)",
  modeOfAction:     "Unknown mode of action. Selective post-emergence herbicide for control of Winter Grass in turf.",
  formulation:      "Liquid",
  color:            "#155e75",
  apvma:            "47841",
  company: "Campbell",
  labelPdf:         "Source labels/CAMBBELLS_Poachek_Label.pdf",
  sdsPdf:           "SDS Labels/CAMPBELLS-Poachek-Herbicide-SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Winter Grass", "Poa annua"],
    timing: ["Late winter to early spring", "Also autumn and early winter"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Turf — Winter Grass Control ──
    {
      crop: "Turf (Blue Couch, Common Couch, Bent, Buffalo, NZ Brown Top) — Winter Grass",
      cropList: ["Turf", "Blue Couch", "Common Couch", "Bent", "Buffalo", "Brown Top"],
      weeds: [
        {
          weed: "Winter Grass (Poa annua)",
          pestList: ["Winter Grass", "Poa annua"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "mL/1000m\u00b2",
          stage: "Late winter to early spring, before seed heads form",
          note: "Apply 2\u20133 sprays spaced 10\u201314 days apart in late winter to early spring. Apply as a fine mist spray in 50\u2013100 L of water per 1000 m\u00b2. For a full sized bowling green (38 m x 38 m) apply 210 mL in 70 L water. Apply before seed heads form. Can also be applied in autumn and early winter, although new germinations will have to be retreated. Apply when winter grass is becoming evident. One spray may be sufficient."
        }
      ]
    }

  ],

  // ── Withholding / Re-entry ──────────────────────────────────
  withholding: {
    harvest:  "Not applicable (turf only)",
    grazing:  "DO NOT allow stock to graze any treated plants. DO NOT graze treated turf/lawn or feed turf/lawn clippings from any treated area to poultry or livestock",
    reEntry:  "Not specified"
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT use when temperature exceeds 25\u00b0C",
    "DO NOT use on Red Fescues or Kikuyu",
    "DO NOT use a wetting agent",
    "DO NOT apply under weather conditions or from spraying equipment that may cause spray to drift onto nearby susceptible plants/crops, cropping lands or pastures",
    "Dangerous to fish and other aquatic organisms — DO NOT contaminate streams, rivers or waterways"
  ],

  // ── Storage / Safety ────────────────────────────────────────
  storage: "Store in the closed, original container in a cool, well-ventilated area. Do not store for prolonged periods in direct sunlight. Store locked up.",
  safetyDirections: "Product and spray poisonous if swallowed. Will irritate the eyes and skin. Avoid contact with eyes and skin. Do not inhale spray mist. When preparing the spray wear elbow-length PVC gloves and face shield or goggles. Harmful in contact with skin. Fatal if inhaled. Wear respiratory protection.",
  firstAid: "If poisoning occurs, contact a doctor or Poisons Information Centre. If swallowed do not induce vomiting. Give a glass of water."
};
