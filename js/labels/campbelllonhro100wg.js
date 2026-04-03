// ─────────────────────────────────────────────────────────────────────────────
// Campbell Lonhro® 100 WG Herbicide — Label Data
// Group 2 Herbicide (Sulfonylurea / ALS Inhibitor)
// Source: CAMPBELL_Lonhro-WG_label.pdf
// APVMA Approval No: 88829
// Colin Campbell (Chemicals) Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['campbelllonhro100wg'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Campbell Lonhro\u00ae 100 WG Herbicide",

  category:         "Herbicides",
  activeIngredient: "100 g/kg Iodosulfuron-Methyl-Sodium",
  group:            "Group 2 Herbicide (Sulfonylurea / ALS Inhibitor)",
  modeOfAction:     "Inhibitor of acetolactate synthase (ALS). Disrupts branched-chain amino acid synthesis in susceptible plants, causing growth inhibition and death.",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#155e75",
  apvma:            "88829",
  company: "Campbell",
  labelPdf:         "Source labels/CAMPBELL_Lonhro-WG_label.pdf",
  sdsPdf:           "SDS Labels/CAMPBELL-LOHNRO-100-WG-SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Broadleaf Weeds", "Grasses", "Winter Grass", "Bahia Grass"],
    timing: ["Post-emergence to actively growing weeds"]
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Turf — Weeds Suppressed (Winter Grass) ──
    {
      crop: "Turf (Kikuyu, Buffalo Grass, Couch Grass) — Winter Grass Suppression",
      cropList: ["Turf", "Kikuyu", "Buffalo Grass", "Couch Grass"],
      weeds: [
        {
          weed: "Winter Grass (Poa annua) — suppression",
          pestList: ["Winter Grass", "Poa annua"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "g/ha",
          stage: "Actively growing weeds, not under stress",
          note: "Weeds suppressed only. Better efficacy on younger weed plants; less than 50% control on mature established plants. Always apply a non-ionic surfactant or Hasten\u00ae at the recommended rate. Use a water rate of 200\u2013500 L/ha. DO NOT use on golf or bowling greens. DO NOT use on Queensland Blue Couch."
        }
      ]
    },

    // ── 2. Turf — Weeds Controlled (Ryegrass) ──
    {
      crop: "Turf (Kikuyu, Buffalo Grass, Couch Grass) — Ryegrass",
      cropList: ["Turf", "Kikuyu", "Buffalo Grass", "Couch Grass"],
      weeds: [
        {
          weed: "Ryegrass (Lolium perenne)",
          pestList: ["Ryegrass", "Lolium perenne"],
          states: ["All"],
          rate: "150",
          rateMax: "150",
          unit: "g/ha",
          stage: "Actively growing weeds, not under stress",
          note: "Weeds controlled. Always apply a non-ionic surfactant or Hasten\u00ae at the recommended rate. Use a water rate of 200\u2013500 L/ha."
        }
      ]
    },

    // ── 3. Turf — Weeds Controlled (Broadleaf weeds at 100 g/ha) ──
    {
      crop: "Turf (Kikuyu, Buffalo Grass, Couch Grass) — Broadleaf Weeds",
      cropList: ["Turf", "Kikuyu", "Buffalo Grass", "Couch Grass"],
      weeds: [
        {
          weed: "Bindii (Salvia sessilis), Black Thistle (Cirsium vulgare), Cat's Ear (Hypochoeris radicata), Cotula (Cotula australis), Cudweed (Gnaphalium sp), Guilford Grass / Onion Grass (Romulea rosea), Medic (Medicago spp.), Mouse Ear Chickweed (Cerastium vulgatum), Oxalis (Oxalis corniculata), White Clover (Trifolium repens)",
          pestList: ["Bindii", "Black Thistle", "Cat's Ear", "Cotula", "Cudweed", "Guilford Grass", "Onion Grass", "Medic", "Mouse Ear Chickweed", "Oxalis", "White Clover"],
          states: ["All"],
          rate: "100",
          rateMax: "100",
          unit: "g/ha",
          stage: "Actively growing weeds, not under stress",
          note: "Weeds controlled. Use a water rate of 200\u2013500 L/ha. Avoid exceeding application rates through overlapping sprayed areas. Safety screening may not have been conducted on all new buffalo varieties \u2014 test small areas first."
        }
      ]
    },

    // ── 4. Turf — False Onion Weed ──
    {
      crop: "Turf (Kikuyu, Buffalo Grass, Couch Grass) — False Onion Weed",
      cropList: ["Turf", "Kikuyu", "Buffalo Grass", "Couch Grass"],
      weeds: [
        {
          weed: "False Onion Weed / Fragrant False Garlic / Onion Weed (Nothoscordum gracile, fragrans or borbonicum)",
          pestList: ["False Onion Weed", "Fragrant False Garlic", "Onion Weed", "Nothoscordum"],
          states: ["All"],
          rate: "25",
          rateMax: "25",
          unit: "g/ha",
          stage: "Actively growing weeds, not under stress",
          note: "Weeds controlled. Always apply a non-ionic surfactant or Hasten\u00ae at the recommended rate. Use a water rate of 200\u2013500 L/ha."
        }
      ]
    },

    // ── 5. Turf — Bahia Grass Suppression ──
    {
      crop: "Turf (Kikuyu, Buffalo Grass, Couch Grass) — Bahia Grass Suppression",
      cropList: ["Turf", "Kikuyu", "Buffalo Grass", "Couch Grass"],
      weeds: [
        {
          weed: "Bahia Grass (Paspalum notatum) — suppression and seed head reduction",
          pestList: ["Bahia Grass", "Paspalum notatum"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/ha",
          stage: "Summer, when turf is actively growing and Bahia grass produces seed heads",
          note: "Apply as soon as seed heads start to form or when it becomes a regular mowing intervention issue. Apply 2\u20133 times at 4-week intervals after mowing. DO NOT apply more than two consecutive applications per season. Always apply with a non-ionic surfactant or Hasten\u00ae at the recommended rate."
        }
      ]
    }

  ],

  // ── Withholding / Re-entry ──────────────────────────────────
  withholding: {
    harvest:  "Not applicable (turf only)",
    grazing:  "DO NOT graze treated turf or feed turf clippings from any treated area to poultry or livestock",
    reEntry:  "DO NOT allow entry into treated areas until the spray has dried"
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply by air or through any type of irrigation equipment",
    "DO NOT apply to turf which is under stress or which is not yet established",
    "DO NOT use if rain is expected within 4 hours",
    "DO NOT use on golf or bowling greens",
    "DO NOT make more than one application of a Group 2 herbicide in a season (except Bahia grass \u2014 max 2\u20133 applications at 4-week intervals)",
    "DO NOT replant any crop or ornamental to treated areas other than the turf grass listed in the directions for use for a period of 12 months after application",
    "Boom sprayer: use MEDIUM spray droplet size minimum",
    "Buffer zone: 40 metres downwind to vegetation areas"
  ],

  // ── Storage / Safety ────────────────────────────────────────
  storage: "Store in the closed, original container in a cool, well-ventilated area. Do not store for prolonged periods in direct sunlight.",
  safetyDirections: "Will irritate the eyes. Avoid contact with eyes. When opening the container and preparing spray wear elbow length PVC gloves and goggles. If product in eyes wash it out immediately with water. Wash hands after use.",
  firstAid: "If poisoning occurs contact a doctor or Poisons Information Centre. Phone 13 11 26."
};
