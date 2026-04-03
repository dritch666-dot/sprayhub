// ─────────────────────────────────────────────────────────────────────────────
// SCHOLAR FUNGICIDE — Label Data
// Suspension Concentrate | Group 12 Fungicide
// Source: Syngenta_Scholar_Fungicide_Label.pdf
// APVMA Approval No: 63391/124945
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['syngentascholar'] = {
  name:             "Scholar Fungicide",
  company: "Syngenta",

  category:         "Fungicides",
  activeIngredient: "230 g/L Fludioxonil",
  group:            "Group 12 Fungicide",
  modeOfAction:     "Phenylpyrrole fungicide for post-harvest disease control",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#065f46",
  apvma:            "63391/124945",
  labelPdf:         "Source labels/Syngenta_Scholar_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/SCHOLAR_FUNGICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Penicillium spp.", "Botrytis spp.", "Diplodia spp."],
    timing: ["Post-harvest", "Dip treatment"]
  },

  crops: [
    {
      crop: "Citrus — Blue Mould, Green Mould, Diplodia control",
      cropList: ["Citrus","Blue Mould","Green Mould","Diplodia Control"],
      weeds: [
        { weed: "Blue Mould (Penicillium italicum)", pestList: ["Blue Mould"], states: ["All"], rate: "260", rateMax: "520", unit: "mL/100L water", stage: "Post-harvest dip or spray", note: "Can heat to 50°C for up to 1 minute. Use in alternation with other products for low-moderate disease pressure." },
        { weed: "Green Mould (Penicillium digitatum)", pestList: ["Green Mould"], states: ["All"], rate: "260", rateMax: "520", unit: "mL/100L water", stage: "Post-harvest dip or spray", note: "Applied alone or with other postharvest fungicides under high disease pressure." },
        { weed: "Diplodia Stem End Rot", pestList: ["Diplodia Stem End Rot"], states: ["All"], rate: "260", rateMax: "520", unit: "mL/100L water", stage: "Post-harvest dip or spray", note: "For citrus applied in 5-15 L water per 10,000 kg fruit for low volume application." }
      ]
    },
    {
      crop: "Mangoes — Anthracnose, Stem End Rot, Dendritic Spot control",
      cropList: ["Mangoes"],
      weeds: [
        { weed: "Anthracnose (Colletotrichum gleosporoides)", pestList: ["Anthracnose"], states: ["All"], rate: "60", rateMax: "120", unit: "mL/100L water (52°C for 5 minutes)", stage: "Hot dip or flood spray", note: "Use low rate for low disease pressure, high rate for high disease pressure." },
        { weed: "Stem end rot and Dendritic spot", pestList: ["Stem End Rot and Dendritic Spot"], states: ["All"], rate: "60", rateMax: "120", unit: "mL/100L water (52°C)", stage: "Hot dip or flood spray", note: "For anthracnose by low volume: 260 mL/100L non-recirculating spray only." }
      ]
    },
    {
      crop: "Kiwi Fruit — Grey Mould control",
      cropList: ["Kiwi Fruit","Grey Mould Control"],
      weeds: [
        { weed: "Grey Mould (Botrytis cinerea)", pestList: ["Grey Mould"], states: ["All"], rate: "130", rateMax: "260", unit: "mL/100L water", stage: "Post-harvest dip or spray", note: "30-60 second dip ensures complete fruit contact." }
      ]
    },
    {
      crop: "Pome Fruit — Blue Mould, Grey Mould control",
      cropList: ["Pome Fruit","Blue Mould","Grey Mould Control"],
      weeds: [
        { weed: "Blue Mould (Penicillium expansum, P. solitum)", pestList: ["Blue Mould"], states: ["All"], rate: "130", rateMax: "260", unit: "mL/100L water", stage: "Post-harvest dip", note: "30-60 second dip ensures complete contact." },
        { weed: "Grey Mould (Botrytis cinerea)", pestList: ["Grey Mould"], states: ["All"], rate: "130", rateMax: "260", unit: "mL/100L water", stage: "Post-harvest dip", note: "Refer to application section for specific instructions." }
      ]
    },
    {
      crop: "Stone Fruit — Brown Rot, Grey Mould, Rhizopus Rot control",
      cropList: ["Stone Fruit"],
      weeds: [
        { weed: "Brown Rot (Monilinia spp.)", pestList: ["Brown Rot"], states: ["All"], rate: "130", rateMax: "260", unit: "mL/100L water", stage: "Post-harvest dip", note: "30-60 second dip treatment." },
        { weed: "Grey Mould (Botrytis cinerea)", pestList: ["Grey Mould"], states: ["All"], rate: "130", rateMax: "260", unit: "mL/100L water", stage: "Post-harvest dip", note: "All stone fruit except apricots and peaches." },
        { weed: "Rhizopus Rot (Rhizopus stolonifer)", pestList: ["Rhizopus Rot"], states: ["All"], rate: "130", rateMax: "130", unit: "mL/100L water", stage: "Post-harvest dip", note: "Apricots and peaches only." }
      ]
    },
    {
      crop: "Chestnuts — Surface moulds and fungal rots suppression",
      cropList: ["Chestnuts"],
      weeds: [
        { weed: "Surface moulds and fungal rots", pestList: ["Surface Moulds and Fungal Rots"], states: ["All"], rate: "130", rateMax: "130", unit: "mL/100L water", stage: "Post-harvest dip or low volume spray", note: "Ensure nuts are clean of soil debris prior to treatment." }
      ]
    },
    {
      crop: "Pomegranates — Botrytis fruit rot control",
      cropList: ["Pomegranates"],
      weeds: [
        { weed: "Botrytis fruit rot (Botrytis cinerea)", pestList: ["Botrytis Fruit Rot"], states: ["All"], rate: "260", rateMax: "260", unit: "mL/100L water", stage: "Dip or flood spray", note: "High volume application for 30 seconds. Dip may be heated to 49°C to increase efficacy." }
      ]
    }
  ],

  restraints: [
    "DO NOT re-handle treated produce until product has dried unless wearing chemical resistant gloves"
  ],

  compatibility: {
    compatible:   ["Tecto", "Imazalil (Fungaflor)", "Calcium hypochlorite", "DPA"],
    incompatible: [],
    notes:        ["Reduction in efficacy may occur when Scholar is applied with DPA at rates above 500 ppm. Test all mixtures prior to commercial use."]
  },

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "Not applicable"
  },

  surfactant:     "Not required for post-harvest dip applications",
  sprayerCleanup: "Rinse application equipment with water after use. Spread rinsings over flat land away from desirable vegetation, waterways and drainage."
};
