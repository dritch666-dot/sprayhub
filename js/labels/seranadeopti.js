// ─────────────────────────────────────────────────────────
// Serenade Opti Biofungicide — Label Data
// Group 44 Fungicide | Wettable Powder (WP)
// Source: Bayer_Serenade_Opti_Biofungicide_Label.pdf
// APVMA Approval No: 82242
// Bayer CropScience Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['seranadeopti'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Bayer Serenade Opti Biofungicide",

  category:         "Fungicides",
  activeIngredient: "Not less than 1.3 x 10^10 CFU/g Bacillus amyloliquefaciens strain QST 713 (formerly Bacillus subtilis strain QST 713)",
  group:            "Group 44 Fungicide",
  modeOfAction:     "Multi-site biological fungicide; prevents spore germination, germ tube elongation and penetration; activates plant systemic resistance",
  formulation:      "Wettable Powder (WP)",
  color:            "#10b981",
  apvma:            "82242",
  company: "AgraQuest",
  labelPdf:         "Source labels/Bayer_Serenade_Opti_Biofungicide_Label.pdf",
  sdsPdf:           "SDS Labels/SERENADE_OPTI_BIOFUNGICIDE.pdf",
  signalHeading:    "Caution",

  // ── Classification ─────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Botrytis Bunch Rot", "Botrytis", "Bacterial Spot", "Xanthomonas"],
    timing: ["Preventive", "During Season", "At Flowering", "Pre-bunch Closure", "Veraison"]
  },

  // ── Use situations ─────────────────────────────────────────────
  crops: [

    {
      crop: "Grapevines",
      cropList: ["Grapevines"],
      weeds: [
        {
          weed: "Botrytis Bunch Rot (Botrytis cinerea)",
          pestList: ["Botrytis Bunch Rot"],
          states: ["All"],
          rate: "250",
          rateMax: "500",
          unit: "g/100L",
          stage: "Flowering, pre-bunch closure, veraison through to harvest",
          note: "No WHP required. Apply as part of a preventative spray program at, but not limited to, flowering, pre-bunch closure, veraison through to harvest. DO NOT apply to an existing disease infection. Ensure thorough coverage of all foliage and fruit. For dilute spraying: spray to point of runoff. For concentrate spraying (grapevines only): do not use at rates greater than 2x the dilute rate (max 500 g/100L at concentration factor 2X). Visual residues may be left on grapes. Spray pH must be between pH 4.5 and pH 8.5. Do not allow spray mixture to stand overnight or for prolonged periods. Use ground spray equipment only."
        }
      ]
    },

    {
      crop: "Strawberries (field and protected cropping systems)",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Botrytis (Botrytis cinerea)",
          pestList: ["Botrytis"],
          states: ["All"],
          rate: "1500",
          rateMax: "1500",
          unit: "g/ha",
          stage: "Early flowering; every 5-10 days",
          note: "No WHP required. Reduce background disease levels by removing plant debris and rotted fruit before application. Serenade Opti provides more effective disease prevention than curative control. Apply every 5 to 10 days commencing at early flowering stage. If conditions favour botrytis development, apply every 5 days. As part of a preventative botrytis program, rotate applications with other registered botryticides. Spray to point of runoff, ensuring thorough coverage of all foliage and fruit."
        }
      ]
    },

    {
      crop: "Tomatoes, Capsicums, Chillies (field and protected cropping systems)",
      cropList: ["Tomatoes","Capsicums","Chillies"],
      weeds: [
        {
          weed: "Bacterial Spot (Xanthomonas spp.) - suppression only",
          pestList: ["Bacterial Spot - Suppression Only"],
          states: ["All"],
          rate: "150",
          rateMax: "2000",
          unit: "g/100L (or 1.5-2.0 kg/ha)",
          stage: "Soon after emergence or transplant; repeat every 3-7 days",
          note: "No WHP required. SUPPRESSION ONLY - will not control existing infections. Begin applications soon after emergence or transplant as part of a preventative bacterial spot spray program. Rotate applications with other registered bactericides; repeat every 3 to 7 days. These applications will help reduce the spread of bacterial spot but will not control existing infections. Serenade Opti should be applied preventatively before disease symptoms are visible. Use shortest interval and highest rate when conditions are very favourable for infection (wet weather, high inoculum levels, physical damage from pruning or harvesting). Use lowest rate when used in rotation with protectant fungicides (e.g. copper-based fungicides). Continue applications at 3-7 day intervals following a protectant fungicide if conditions are conducive to disease development. Apply as high volume spray at water volume appropriate to crop stage to ensure good coverage of all foliage, flowers and fruit. Concentrate spraying not recommended for this crop."
        }
      ]
    },
    {
      crop: "Avocado",
      cropList: ["Avocado"],
      weeds: [
          { weed: "Anthracnose, Stem end rot (suppression only)", pestList: ["Anthracnose", "Stem End Rot (suppression Only)"], states: ["All"], rate: "150-200", unit: "g/", rateText: "150-200g/100L", notes: "Use as a preventitive" }
      ]
    },
    {
      crop: "Mango",
      cropList: ["Mango"],
      weeds: [
          { weed: "Anthracnose, Stem end rot (suppression only)", pestList: ["Anthracnose", "Stem End Rot (suppression Only)"], states: ["All"], rate: "200", unit: "g/100L", rateText: "200g/100L", notes: "Use as a preventative" }
      ]
    }
    

  ],

  restraints: [
    "DO NOT apply with aircraft.",
    "DO NOT apply when wind speed is less than 3 km/h or more than 20 km/h as measured at the application site.",
    "Users MUST make an accurate written record of each spray application within 24 hours of application and keep records for a minimum of 2 years. Records must include: date and start/finish times; location address and paddock/s sprayed; full product name; amount used per hectare and number of hectares; crop/situation and pest; wind speed and direction; air temperature and relative humidity; nozzle brand, type, spray angle, nozzle capacity and spray system pressure; name and address of applicator.",
    "DO NOT allow spray mixture to stand overnight or for prolonged periods.",
    "Spray pH must be not less than pH 4.5 and not greater than pH 8.5.",
    "Group 44 fungicide - some naturally occurring individual fungi resistant to this product may exist through normal genetic variability. Rotate with other registered fungicides of different modes of action to manage resistance.",
    "Serenade Opti should not be applied to an existing disease infection - apply preventatively only."
  ]

};
