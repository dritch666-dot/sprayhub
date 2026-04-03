// ─────────────────────────────────────────────────────────
// AG Copp 750 WG — Safety Data Sheet
// Group M1 (Copper Fungicide) | Wettable Granule
// Source: AG-Copp-750-WG-SDS-GrochemAustralia.pdf
// APVMA Approval No: 92457
// Grochem Australia (7 Worlds Ag)
// ─────────────────────────────────────────────────────────
productDatabase['agcopp750wgsdsgrochemaustralia'] = {

  name:             "AG Copp 750 WG",
  company: "Grochem Australia",


  category:         "Fungicides",
  activeIngredient: "750 g/kg Copper (as Dicopper Oxide)",
  group:            "Group M1 (Fungicide)",
  modeOfAction:     "Contact fungicide - inhibits fungal spore germination",
  formulation:      "Wettable Granule (WG)",
  color:            "#d946ef",
  apvma:            "92457",
  labelPdf:         "Source labels/AG-Copp-750-WG-SDS-GrochemAustralia.pdf",
  sdsPdf:           "SDS Labels/AG_COPP_750WG_FUNGICIDE.pdf",
  signalHeading:    "Poison",

  classification: {
    type: "Fungicide",
    target: ["Fungal Diseases"],
    timing: ["Preventive"]
  },

  crops: [
    {
      crop: "General Agricultural Use",
      cropList: ["General Agricultural Use"],
      weeds: [
        {
          weed: "Fungal disease control (refer to product label for specific diseases)",
          pestList: ["Fungal Disease Control"],
          states: ["All"],
          rate: "Consult label",
          rateMax: "Consult label",
          unit: "g/100L",
          stage: "As per label directions",
          note: "This is a Safety Data Sheet (SDS), not a product label with directions for use. For application rates and crop-specific directions, consult the full product label. GHS Hazard: Causes serious eye damage. Harmful if swallowed or inhaled. Very toxic to aquatic life with long-lasting effects."
        }
      ]
    },
    {
      crop: "Mango",
      cropList: ["Mango"],
      weeds: [
          { weed: "Anthracnose, Bacterial black spot", pestList: ["Anthracnose", "Bacterial Black Spot"], states: ["All"], rate: "160-200", unit: "g/", rateText: "160-200g/100L", notes: "WHP: 1 day. Spray every 4 weeks from the end of flowering to harvest. During extended wet weather, spray every 14 days. Do not apply over 35 degrees celsius" }
      ]
    }
    
  ],

  restraints: [
    "Do not get in eyes, on skin, or on clothing",
    "Avoid breathing dusts",
    "Do not eat, drink or smoke when using this product",
    "Avoid release to the environment",
    "Store locked up in a closed container"
  ],

  compatibility: {
    compatible:   [],
    incompatible: ["Acids", "Oxidising agents"],
    notes:        ["Consult product label for tank mix compatibility"]
  },

  withholding: {
    harvest: "Consult product label.",
    grazing: "Consult product label."
  },

  surfactant:     "Consult product label for wetter recommendations.",
  sprayerCleanup: "Thoroughly clean sprayer after use. Triple-rinse containers before disposal."
};
