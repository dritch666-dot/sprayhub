// ─────────────────────────────────────────────────────────
// BASF Seclira® Pressurised Insecticide — Label Data
// Group 4A (Neonicotinoid) | Pressurised Aerosol (System III compatible)
// Source: BASF_Seclira_Label.pdf
// APVMA Approval No: 83032/150676
// BASF Australia Ltd
// ─────────────────────────────────────────────────────────
productDatabase['basfseclira'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "BASF Seclira® Pressurised Insecticide",
  company: "BASF",

  category:         "Insecticides",
  activeIngredient: "5 g/kg Dinotefuran",
  group:            "Group 4A Insecticide",
  modeOfAction:     "Third-generation neonicotinoid — systemic nicotinic acetylcholine receptor (nAChR) agonist; non-repellent with an unsurpassed transfer effect allowing foraging insects to spread lethal doses back to the harbourage/nest",
  formulation:      "Pressurised Aerosol (System III dispenser compatible)",
  color:            "#7e22ce",
  apvma:            "83032/150676",
  labelPdf:         "Source labels/BASF_Seclira_Label.pdf",
  sdsPdf:           "SDS Labels/BASF_Seclira_SDS.pdf",
  signalHeading:    "Read Safety Directions",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Cockroaches", "Ants", "Bed Bugs", "Flies", "Mosquitoes", "Stored Product Pests", "Pill Bugs", "House Crickets", "Spiders"],
    timing: ["Residual surface application", "Spot treatment", "Crack and crevice"]
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply as a space (aerosol) spray.",
    "DO NOT apply directly to food, food utensils, food packaging or food preparation surfaces.",
    "DO NOT spray pet food and water bowls and containers.",
    "DO NOT spray moving parts of any machinery, electric motors or switchgear.",
    "DO NOT puncture or incinerate this can, even when empty.",
    "BEWARE: Deliberately sniffing or inhaling concentrated spray can be harmful or fatal.",
    "Avoid contact with food, food utensils and food preparation surfaces. These items should be removed or covered prior to application where a risk of contamination exists.",
    "Surfaces should have a small hidden area sprayed and checked for any discoloration before widespread use."
  ],

  // ── Withholding ─────────────────────────────────────────────
  withholding: {
    harvest: "Not applicable — not for use on food crops.",
    grazing: "Not applicable — not for use on pasture or grazing land."
  },

  // ── Surfactant ──────────────────────────────────────────────
  surfactant: "Ready-to-use aerosol — no adjuvant required.",

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Cockroaches & Ants ───────────────────────────────────
    {
      crop: "Cockroaches and Ants — Domestic, Industrial & Public Health Situations",
      cropList: ["Domestic Situations", "Commercial Buildings", "Industrial Situations", "Public Health Situations", "Food Processing Facilities", "Hospitals", "Schools"],
      weeds: [
        {
          weed: "Cockroaches (American Cockroach, Australian Cockroach, Oriental Cockroach, Smokybrown Cockroach and Domestic Cockroaches) and Ants (including Argentine Ant, Black House Ant, Coastal Brown Ant, Odorous House Ant, Pharaoh's Ant and other nuisance/nesting ants)",
          pestList: ["American Cockroach", "Australian Cockroach", "Oriental Cockroach", "Smokybrown Cockroach", "Domestic Cockroaches", "Argentine Ant", "Black House Ant", "Coastal brown ant", "Odorous House Ant", "Pharaoh's Ant", "Nesting Ants", "Nuisance Ants"],
          states: ["All"],
          rate: "—",
          rateMax: "—",
          unit: "",
          stage: "Residual surface application and spot treatment",
          note: "Spray from a distance of 20-30cm. For spot application, apply directly onto pest for a 1-2 second burst. For crack and crevice or surface treatment, spray across surface at rate of 60cm/1 sec spray. Apply onto surfaces and into cracks and crevices where insects may be harbouring, living and breeding for up to 3 months residual control. Apply as a surface application up to but not exceeding the point of run off. Use crack and crevice nozzle to direct spray into cracks, crevices and other hard to reach places. Live activity can be treated as a spot treatment. Carpets should have a small hidden area sprayed and checked for any discolouration before widespread use."
        }
      ]
    },

    // ── Bed Bugs ──────────────────────────────────────────────
    {
      crop: "Bed Bugs — Domestic, Industrial & Public Health Situations",
      cropList: ["Domestic Situations", "Accommodation", "Hotels", "Hospitals"],
      weeds: [
        {
          weed: "Bed bugs",
          pestList: ["Bed bugs"],
          states: ["All"],
          rate: "—",
          rateMax: "—",
          unit: "",
          stage: "Spot treatment and surface treatment",
          note: "Spray from a distance of 20-30cm. For spot application, apply directly onto pest for a 1-2 second burst. For crack and crevice or surface treatment, spray across surface at rate of 60cm/1 sec spray. Apply directly onto bed bug activity as a spot treatment or as a surface treatment to skirting boards, carpet edge, cracks, crevices, in and behind bed heads and bed frames, bedside tables and cupboards. An IPM approach should be followed for the control of bed bugs. For more information refer to the Code of Practice for the Control of Bed bug Infestations in Australia."
        }
      ]
    },

    // ── Flies ─────────────────────────────────────────────────
    {
      crop: "Flies — Domestic, Industrial & Public Health Situations",
      cropList: ["Domestic Situations", "Commercial Buildings", "Food Processing Facilities", "Public Health Situations", "Outdoor Situations"],
      weeds: [
        {
          weed: "Flies (including house flies)",
          pestList: ["Adult Houseflies"],
          states: ["All"],
          rate: "—",
          rateMax: "—",
          unit: "",
          stage: "Residual surface application and spot treatment",
          note: "Spray from a distance of 20-30cm. For spot application, apply directly onto pest for a 1-2 second burst. For crack and crevice or surface treatment, spray across surface at rate of 60cm/1 sec spray. Apply to surfaces where flies are likely to rest. For outdoor fly control, apply to surfaces where flies tend to be a nuisance. SECLIRA PRESSURISED INSECTICIDE can also be applied directly as a spot treatment."
        }
      ]
    },

    // ── Stored Product Pests ──────────────────────────────────
    {
      crop: "Stored Product Pests — Domestic, Industrial & Public Health Situations",
      cropList: ["Storage Facilities", "Warehouses", "Food Processing Facilities", "Domestic Situations"],
      weeds: [
        {
          weed: "Stored product pests (beetles and adult moths)",
          pestList: ["Stored Product Pests"],
          states: ["All"],
          rate: "—",
          rateMax: "—",
          unit: "",
          stage: "Residual surface application",
          note: "Spray from a distance of 20-30cm. For spot application, apply directly onto pest for a 1-2 second burst. For crack and crevice or surface treatment, spray across surface at rate of 60cm/1 sec spray. The use of this product in the control of Stored product pests should be considered part of an integrated strategy to prevent development of insect populations. Best results will be obtained where good hygiene is maintained. Infested areas should be cleaned prior to application and regularly cleaned thereafter to reduce food sources for pests. When treating for beetle pests pay special attention to sheltered areas such as cracks and crevices and in and around shelves. Adult moths can be controlled by applying this product to walls and surfaces where the flying adult moths come to rest. DO NOT apply to food or onto food preparation areas. Best results are achieved when treating non-porous surfaces."
        }
      ]
    },

    // ── Mosquitoes ────────────────────────────────────────────
    {
      crop: "Mosquitoes — Domestic, Industrial & Public Health Situations",
      cropList: ["Domestic Situations", "Commercial Buildings", "Public Health Situations", "Outdoor Situations"],
      weeds: [
        {
          weed: "Mosquitoes",
          pestList: ["Mosquitoes"],
          states: ["All"],
          rate: "—",
          rateMax: "—",
          unit: "",
          stage: "Residual surface application and spot treatment",
          note: "Spray from a distance of 20-30cm. For spot application, apply directly onto pest for a 1-2 second burst. For crack and crevice or surface treatment, spray across surface at rate of 60cm/1 sec spray. Apply onto surfaces where mosquitoes settle. Apply directly to live activity as a spot treatment."
        }
      ]
    },

    // ── Pill Bugs (Slaters) ───────────────────────────────────
    {
      crop: "Pill Bugs (Slaters) — Domestic, Industrial & Public Health Situations",
      cropList: ["Domestic Situations", "Commercial Buildings", "Outdoor Situations"],
      weeds: [
        {
          weed: "Pill bugs (slaters)",
          pestList: ["Pill Bugs"],
          states: ["All"],
          rate: "—",
          rateMax: "—",
          unit: "",
          stage: "Spot treatment",
          note: "Spray from a distance of 20-30cm. For spot application, apply directly onto pest for a 1-2 second burst. For crack and crevice or surface treatment, spray across surface at rate of 60cm/1 sec spray. Apply directly onto slaters or pill bugs as a spot treatment."
        }
      ]
    },

    // ── House Crickets ────────────────────────────────────────
    {
      crop: "House Crickets — Domestic, Industrial & Public Health Situations",
      cropList: ["Domestic Situations", "Commercial Buildings", "Outdoor Situations"],
      weeds: [
        {
          weed: "House crickets",
          pestList: ["House Crickets"],
          states: ["All"],
          rate: "—",
          rateMax: "—",
          unit: "",
          stage: "Spot treatment",
          note: "Spray from a distance of 20-30cm. For spot application, apply directly onto pest for a 1-2 second burst. For crack and crevice or surface treatment, spray across surface at rate of 60cm/1 sec spray. Apply directly onto house crickets as a spot treatment."
        }
      ]
    },

    // ── Spiders ───────────────────────────────────────────────
    {
      crop: "Spiders — Domestic, Industrial & Public Health Situations",
      cropList: ["Domestic Situations", "Commercial Buildings", "Outdoor Situations"],
      weeds: [
        {
          weed: "Spiders (including Black House Spider, Daddy-long-legs Spider, Redback Spider and web-spinning spiders)",
          pestList: ["Black House Spider", "Daddy-long-legs Spiders", "Redback Spider", "Web-Spinning Spiders"],
          states: ["All"],
          rate: "—",
          rateMax: "—",
          unit: "",
          stage: "Spot treatment",
          note: "Spray from a distance of 20-30cm. For spot application, apply directly onto pest for a 1-2 second burst. For crack and crevice or surface treatment, spray across surface at rate of 60cm/1 sec spray. Apply directly onto spiders as a spot treatment."
        }
      ]
    }

  ],

  // ── General Instructions ────────────────────────────────────
  generalInstructions: "This product is ideally suited to be used with the System III Pressurised dispenser unit. If using without System III, hold container upright whilst spraying. After use with the System III Pressurised Dispenser, ensure that the valve is closed and that the hose line is drained to avoid leaking. SECLIRA PRESSURISED INSECTICIDE is not a synthetic pyrethroid and can be used to control insect pests in internal and external situations in and around domestic, commercial and public buildings: including food processing facilities, hospitals and schools. Spray from a distance of 20-30 cm directly onto insects or spray onto surfaces for residual protection as per the Directions for Use table. Pay particular attention to harbourages and cracks and crevices. SECLIRA PRESSURISED INSECTICIDE will control insects within a few days of application. Apply SECLIRA PRESSURISED INSECTICIDE to clean surfaces, free of dirt, dust, oils, grease and other residues.",

  // ── Resistance Warning ──────────────────────────────────────
  resistanceWarning: "For insecticide resistance management SECLIRA PRESSURISED INSECTICIDE is a Group 4A insecticide. Some naturally occurring insect biotypes resistant to SECLIRA PRESSURISED INSECTICIDE and other Group 4A insecticides may exist through normal genetic variability in any insect population. The resistant individuals can eventually dominate the insect population if SECLIRA PRESSURISED INSECTICIDE or other Group 4A insecticides are used repeatedly. The effectiveness of SECLIRA PRESSURISED INSECTICIDE on resistant individuals could be significantly reduced. Since occurrence of resistant individuals is difficult to detect prior to use, BASF Australia Ltd accepts no liability for any losses that may result from failure of SECLIRA PRESSURISED INSECTICIDE to control resistant insects. For further information on managing insecticide resistance contact your local supplier or BASF Australia Ltd representative.",

  // ── Safety ──────────────────────────────────────────────────
  safety: {
    precautions: "Keep out of reach of children. DO NOT apply as a space (aerosol) spray. DO NOT apply directly to food, food utensils, food packaging or food preparation surfaces. DO NOT spray pet food and water bowls and containers. BEWARE: Deliberately sniffing or inhaling concentrated spray can be harmful or fatal.",
    protections: "PROTECTION OF WILDLIFE, FISH, CRUSTACEANS AND ENVIRONMENT — Very toxic to aquatic organisms. Cover fish tanks during spraying. DO NOT contaminate watercourses, ponds, wetlands, reserves or parks with product or used containers.",
    storageAndDisposal: "Keep in a cool place out of the sun and out of the reach of children. DO NOT puncture or incinerate this can, even when empty. Recycle empty cans if a facility is available or place used can in household rubbish.",
    safetyDirections: "May irritate the eyes. Avoid contact with eyes. Wash hands after use.",
    firstAid: "If poisoning occurs, contact a doctor or Poisons Information Centre. Phone Australia 13 11 26. New Zealand 0800 764 766."
  }
};
