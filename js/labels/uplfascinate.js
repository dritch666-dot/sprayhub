// ─────────────────────────────────────────────────────────────────────────────
// FASCINATE DRY HERBICIDE — Label Data
// Dry Powder | Group N Herbicide
// Source: Upl_Fascinate_Dry_Herbicide_Label.pdf
// APVMA Approval No: 85197/124905
// UPL Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['uplfascinate'] = {
  name:             "Fascinate Dry Herbicide",
  company: "UPL",

  category:         "Herbicides",
  activeIngredient: "500 g/kg Glufosinate-Ammonium",
  group:            "Group N Herbicide",
  modeOfAction:     "Glutamine synthetase inhibitor for non-residual weed control",
  formulation:      "Dry Powder (DP)",
  color:            "#78350f",
  apvma:            "85197/124905",
  labelPdf:         "Source labels/Upl_Fascinate_Dry_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/FASCINATE_DRY_HERBICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Herbicide",
    target: ["Annual weeds", "Perennial weeds"],
    timing: ["Post-emergence", "Contact herbicide"]
  },

  crops: [
    {
      crop: "Orchards and Plantations — Inter-row weed control",
      cropList: ["Orchards And Plantations","Inter-Row Weed Control"],
      weeds: [
        { weed: "General weeds in citrus, olive, pome and stone fruit orchards", pestList: ["General Weeds in Citrus", "Olive", "Pome and Stone Fruit Orchards"], states: ["All"], rate: "400", rateMax: "2000", unit: "g/ha", stage: "Active growth, 2-6 leaf stage optimal", note: "Apply as directed or shielded spray. Use lower rate on young weeds, higher rate on mature weeds. Complete coverage essential." },
        { weed: "Blackberry, boysenberry, loganberry, raspberry primocanes", pestList: ["Blackberry", "Boysenberry", "Loganberry", "Raspberry Primocanes"], states: ["NSW", "ACT", "Vic", "Tas"], rate: "200", rateMax: "200", unit: "g/100L water", stage: "Directed spray to suckers <15cm high", note: "Non-ionic wetting agent (1000 g/L) may be added at 25 mL/100L. Grazing: 8 weeks after application." }
      ]
    },
    {
      crop: "Strawberries, Cane Berries, Tomatoes — Inter-row control",
      cropList: ["Strawberries","Cane Berries","Tomatoes","Inter-Row Control"],
      weeds: [
        { weed: "General inter-row weeds", pestList: ["General Inter-Row Weeds"], states: ["All"], rate: "400", rateMax: "2000", unit: "g/ha", stage: "Active growth, 2-6 leaf stage", note: "Apply as directed/shielded spray to inter-row area only. Avoid contact with crop foliage. Grazing: 8 weeks after application." }
      ]
    },
    {
      crop: "Commercial and Industrial Areas, Rights-of-Way — General use",
      cropList: ["Commercial And Industrial Areas","Rights-Of-Way","General Use"],
      weeds: [
        { weed: "General weeds in non-agricultural areas", pestList: ["General Weeds in Non-Agricultural Areas"], states: ["All"], rate: "400", rateMax: "2400", unit: "g/ha", stage: "Active growth", note: "Non-selective herbicide affecting most weeds. Determine rate based on weed species, stage, density and climatic conditions." }
      ]
    },
    {
      crop: "Forestry Plantations — Pinus spp. control (pre-plant)",
      cropList: ["Forestry Plantations","Pinus Spp. Control"],
      weeds: [
        { weed: "Volunteer or wildling Pinus spp.", pestList: ["Volunteer or Wildling Pinus Spp."], states: ["All"], rate: "2000", rateMax: "2000", unit: "g/ha", stage: "Pre-plant establishment", note: "Handgun/knapsack: 200 g/100L water based on 1000 L/ha application. Apply with adjuvant (Nu-Film P or Exit). May mix with glyphosate and metsulfuron-methyl." }
      ]
    },
    {
      crop: "Sports Grounds — Line-marking",
      cropList: ["Sports Grounds","Line-Marking"],
      weeds: [
        { weed: "Turf grasses and weeds for line-marking", pestList: ["Turf Grasses and Weeds for Line-Marking"], states: ["All"], rate: "100", rateMax: "200", unit: "g/100L water", stage: "Regular marking", note: "Apply at 6-8 week intervals depending on turf growth. Non-residual herbicide ideal for precise weed control on sports fields." }
      ]
    },
    {
      crop: "Summer Fallow — Annual and perennial weed control",
      cropList: ["Summer Fallow","Annual And Perennial Weed Control"],
      weeds: [
        { weed: "Amaranthus, Bellvine, Bladder ketmia, Caltrop, Dwarf amaranth, Field bindweed, Flax-leaf fleabane, Paddy melon", pestList: ["Amaranthus", "Bellvine", "Bladder Ketmia", "Caltrop", "Dwarf Amaranth", "Field Bindweed", "Flax-Leaf Fleabane", "Paddy Melon"], states: ["All"], rate: "1500", rateMax: "1500", unit: "g/ha in 100L minimum water", stage: "2-6 leaf stage", note: "Apply to actively growing weeds. Do not apply more than 3 applications per season. Grazing: 6 weeks after application. Do not sow until 14+ days after final application." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by aircraft",
    "DO NOT apply when rain expected within 6 hours",
    "DO NOT apply to weeds under stress (dry, wet, frosty, diseased)",
    "DO NOT apply under hot dry conditions (>33°C with <50% humidity)",
    "DO NOT allow spray or drift to contact desirable foliage or green uncalloused bark"
  ],

  compatibility: {
    compatible:   ["Residual herbicides", "Simazine", "Diuron", "Oxyfluorfen (Goal)", "Norfluazuron (Solicam)", "Oryzalin (Surflan)"],
    incompatible: [],
    notes:        ["Non-ionic wetting agent may be added on hard-to-wet weeds when using >500 L/ha water. Do not use with CDA equipment fitted with bristle skirts."]
  },

  withholding: {
    harvest: "Most crops: Not required when used as directed. Pome and stone fruit: 21 days. Grazing: 8 weeks after application. Summer fallow: 6 weeks after sowing.",
    grazing: "Most situations: 8 weeks. Summer fallow: Do not graze for stock food until 6 weeks after sowing following fallow spray."
  },

  surfactant:     "Non-ionic wetting agent optional; add at 25 mL/100L of 1000 g/L formulation on hard-to-wet weeds",
  sprayerCleanup: "Flush all equipment thoroughly with water after use. Plastic containers: triple-rinse before disposal."
};
