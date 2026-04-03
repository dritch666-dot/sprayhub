// ─────────────────────────────────────────────────────────────────────────────
// CAMPBELL FLUDY 230SC FUNGICIDE — Label Data
// Suspension Concentrate (SC) | Group 12 Fungicide
// Source: Colin_Campbell_chemicals_Campbell_Fludy_230sc_Fungicide_Label.txt
// APVMA Approval No: 83843/124061
// Colin Campbell (Chemicals) Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['campbellfludy230sc'] = {
  name:             "Campbell Fludy 230SC Fungicide",
  company: "Campbell",

  category:         "Fungicides",
  activeIngredient: "230 g/L Fludioxonil",
  group:            "Group 12 Fungicide",
  modeOfAction:     "Phenylpyrrole fungicide for post-harvest disease control via protective fungal inhibition",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#16a34a",
  apvma:            "83843/124061",
  labelPdf:         "Source labels/Colin_Campbell_chemicals_Campbell_Fludy_230sc_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/CAMPBELL_FLUDY_230SC_FUNGICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Mould rot", "Anthracnose", "Botrytis"],
    timing: ["30-60 seconds dip or 5 minutes hot dip"]
  },

  crops: [
    {
      crop: "Citrus — Blue mould, green mould and stem end rot control",
      cropList: ["Citrus"],
      weeds: [
        { weed: "Blue mould (Penicillium italicum)", pestList: ["Blue Mould"], states: ["All"], rate: "260-520", rateMax: "520", unit: "mL/100L water", stage: "Post-harvest dip/drench", note: "Low volume: 87-174 mL per 10,000kg in 5-15L water" },
        { weed: "Green mould (Penicillium digitatum)", pestList: ["Green Mould"], states: ["All"], rate: "260-520", rateMax: "520", unit: "mL/100L water", stage: "Post-harvest dip/drench", note: "May raise temperature to max 50°C for 1 minute" },
        { weed: "Diplodia Stem End Rot", pestList: ["Diplodia Stem End Rot"], states: ["All"], rate: "260-520", rateMax: "520", unit: "mL/100L water", stage: "Post-harvest dip/drench", note: "Use in alternation with other products for easily protected fruit" }
      ]
    },
    {
      crop: "Kiwi fruit — Grey mould control",
      cropList: ["Kiwi Fruit","Grey Mould Control"],
      weeds: [
        { weed: "Grey mould (Botrytis cinerea)", pestList: ["Grey Mould"], states: ["All"], rate: "130-260", rateMax: "260", unit: "mL/100L water", stage: "Post-harvest dip/drench", note: "Dip fruit in solution for 30-60 seconds, allow to drain" }
      ]
    },
    {
      crop: "Pome fruit — Blue and grey mould control",
      cropList: ["Pome Fruit","Blue And Grey Mould Control"],
      weeds: [
        { weed: "Blue mould (Penicillium expansum, P. solitum)", pestList: ["Blue Mould"], states: ["All"], rate: "130-260", rateMax: "260", unit: "mL/100L water", stage: "Post-harvest dip/drench", note: "Dip fruit for 30-60 seconds" },
        { weed: "Grey mould (Botrytis cinerea)", pestList: ["Grey Mould"], states: ["All"], rate: "130-260", rateMax: "260", unit: "mL/100L water", stage: "Post-harvest dip/drench", note: "Ensure complete contact with dipping solution" }
      ]
    },
    {
      crop: "Stone fruit (except apricots and peaches) — Rot control",
      cropList: ["Stone Fruit (Except Apricots And Peaches)"],
      weeds: [
        { weed: "Brown rot (Monolinia spp.)", pestList: ["Brown Rot"], states: ["All"], rate: "130-260", rateMax: "260", unit: "mL/100L water", stage: "Post-harvest dip/drench", note: "Dip for 30-60 seconds, allow to drain" },
        { weed: "Grey mould (Botrytis cinerea)", pestList: ["Grey Mould"], states: ["All"], rate: "130-260", rateMax: "260", unit: "mL/100L water", stage: "Post-harvest dip/drench", note: "High volume application" },
        { weed: "Rhizopus rot (Rhizopus stolonifer)", pestList: ["Rhizopus Rot"], states: ["All"], rate: "130-260", rateMax: "260", unit: "mL/100L water", stage: "Post-harvest dip/drench", note: "Protect against post-harvest rots" }
      ]
    },
    {
      crop: "Apricots and Peaches — Rot control",
      cropList: ["Apricots And Peaches"],
      weeds: [
        { weed: "Brown rot (Monolinia spp.)", pestList: ["Brown Rot"], states: ["All"], rate: "130", rateMax: "130", unit: "mL/100L water", stage: "Post-harvest dip/drench", note: "Dip for 30-60 seconds" },
        { weed: "Grey mould (Botrytis cinerea)", pestList: ["Grey Mould"], states: ["All"], rate: "130", rateMax: "130", unit: "mL/100L water", stage: "Post-harvest dip/drench", note: "High volume application" }
      ]
    },
    {
      crop: "Mangoes — Anthracnose and stem end rot control",
      cropList: ["Mangoes"],
      weeds: [
        { weed: "Anthracnose (Colletotrichum gleosporoides)", pestList: ["Anthracnose"], states: ["All"], rate: "60-120", rateMax: "120", unit: "mL/100L water (52°C for 5 min)", stage: "Hot dip or flood spray", note: "Low rate for low disease pressure; high rate for high pressure" },
        { weed: "Stem end rot and Dendritic spot (Botrosphaeria family)", pestList: ["Stem End Rot and Dendritic Spot"], states: ["All"], rate: "60-120", rateMax: "120", unit: "mL/100L water", stage: "Hot dip", note: "Also includes Fusicoccum parvum and related species" },
        { weed: "Anthracnose (low volume spray)", pestList: ["Anthracnose"], states: ["All"], rate: "260", rateMax: "260", unit: "mL/100L", stage: "Ambient spray", note: "Low volume non-recirculating spray only; brush rollers may improve efficacy" }
      ]
    },
    {
      crop: "Pomegranates — Botrytis fruit rot control",
      cropList: ["Pomegranates"],
      weeds: [
        { weed: "Botrytis fruit rot (Botrytis cinerea)", pestList: ["Botrytis Fruit Rot"], states: ["All"], rate: "260", rateMax: "260", unit: "mL/100L water", stage: "Dip or flood spray", note: "Dip for 30 seconds, may heat to 49°C to increase efficacy" }
      ]
    },
    {
      crop: "Chestnuts — Surface moulds and fungal rots control",
      cropList: ["Chestnuts"],
      weeds: [
        { weed: "Suppression of surface moulds and fungal rots", pestList: ["Suppression of Surface Moulds and Fungal Rots"], states: ["All"], rate: "130", rateMax: "130", unit: "mL/100L water", stage: "Dip or low volume spray", note: "Dip in solution or spray with 1 minute application time; ensure clean of soil debris" }
      ]
    },
    {
      crop: "Pineapple — Postharvest mould control",
      cropList: ["Pineapple","Postharvest Mould Control"],
      weeds: [
        { weed: "Postharvest moulds (Penicillium spp.)", pestList: ["Postharvest Moulds"], states: ["All"], rate: "230", rateMax: "230", unit: "mL/100L", stage: "Post-harvest spray", note: "Apply treatment immediately after harvest; ensure thorough coverage" }
      ]
    },
    {
      crop: "Papaya",
      cropList: ["Papaya"],
      weeds: [
          { weed: "Anthracnose, Stem end rot and Dendritic spot", pestList: ["Anthracnose", "Stem End Rot and Dendritic Spot"], states: ["All"], rate: "60-120", rateMax: "120", unit: "mL/100L", stage: "Hot dip or flood spray", note: "Dip for 5 minutes at 52°C for dip method, or spray 260 mL/100L for spray method" }
      ]
    }
    
  ],

  restraints: [
    "For post-harvest use only",
    "Do not rehandle treated produce until product has dried unless wearing chemical resistant gloves"
  ],

  compatibility: {
    compatible:   ["Vorlon", "Imazalil (e.g. Magnate)", "Calcium hypochlorite", "DPA"],
    incompatible: [],
    notes:        ["Reduction in efficacy with DPA at rates above 500ppm", "Test mixtures before mixing commercial quantities"]
  },

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "Not applicable - post-harvest use only"
  },

  surfactant:     "May apply in water, wax/oil emulsion, or aqueous dilution of wax/oil emulsion",
  sprayerCleanup: "Rinse application equipment with water after use. Spread rinsings over flat land away from waterways and desirable vegetation"
};
