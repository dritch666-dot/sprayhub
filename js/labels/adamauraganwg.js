// ─────────────────────────────────────────────────────────────────────────────
// Adama Uragan WG — Label Data
// Water Dispersible Granule | Herbicide
// Source: Adama_Uragan_Wg_Herbicide_Label.pdf
// APVMA Approval No: 62760
// Farmoz Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['adamauraganwg'] = {
  name:             "Uragan WG Herbicide",
  company: "Adama",

  category:         "Herbicides",
  activeIngredient: "800 g/kg Bromacil",
  group:            "Group C Herbicide",
  modeOfAction:     "Inhibitor of photosynthesis at photosystem II",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#dc2626",
  apvma:            "62760",
  labelPdf:         "Source labels/Adama_Uragan_Wg_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/URAGAN_WG.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Herbicide",
    target: ["Annual broadleaf weeds", "Annual grasses"],
    timing: ["Pre-emergence", "Post-emergence"]
  },

  crops: [
    {
      crop: "Asparagus — Annual broadleaf weeds and grasses",
      cropList: ["Asparagus","Annual Broadleaf Weeds And Grasses"],
      weeds: [
        { weed: "Annual ryegrass, Barley grass, Bathurst burr, Brome grass, Caltrop, Capeweed, Cobbler's pegs, Doublegee, Fat-hen, Khaki weed, Noogoora burr, Paterson's curse, Prairie grass, Ragweed, Saffron thistle, Summer grass, Wild mustard, Wild oats, Wild radish, Wild turnip, Winter grass", pestList: ["Annual Ryegrass", "Barley Grass", "Bathurst Burr", "Brome Grass", "Caltrop", "Capeweed", "Cobbler's Pegs", "Doublegee", "Fat-Hen", "Khaki Weed", "Noogoora Burr", "Paterson's Curse", "Prairie Grass", "Ragweed", "Saffron Thistle", "Summer Grass", "Wild Mustard", "Wild Oats", "Wild Radish", "Wild Turnip", "Winter Grass"], states: ["All"], rate: "1.1", rateMax: "2.5", unit: "kg/ha", stage: "Post-emergence (3-4 weeks pre-spear)", note: "Apply after cultivation to established plantings only (older than 1 year). Soil incorporation beneficial. Wild oat control requires minimum 2.5 kg/ha" }
      ]
    },
    {
      crop: "Citrus — Established groves annual broadleaf weeds and grasses",
      cropList: ["Citrus","Established Groves Annual Broadleaf Weeds And Grasses"],
      weeds: [
        { weed: "Various annual weeds as specified in label", pestList: ["Various Annual Weeds as Specified in Label"], states: ["All"], rate: "2.2", rateMax: "4.5", unit: "kg/ha", stage: "Autumn and Spring", note: "Apply to weed-free ground. After 1-2 years, once per year may be adequate. DO NOT apply more than 9 kg/ha/year. For wild oat/caltrop control use minimum 3 kg" }
      ]
    },
    {
      crop: "Pineapples — Broadleaf weeds and grasses",
      cropList: ["Pineapples","Broadleaf Weeds And Grasses"],
      weeds: [
        { weed: "Barnyard grass, Billygoat weed, Cobbler's pegs, Crowsfoot, Guinea grass, Red natal grass, Sourgrass, Stinking roger, Summer grass, Thickhead", pestList: ["Barnyard Grass", "Billygoat Weed", "Cobbler's Pegs", "Crowsfoot", "Guinea Grass", "Red Natal Grass", "Sourgrass", "Stinking Roger", "Summer Grass", "Thickhead"], states: ["Qld", "NT"], rate: "2.2", rateMax: "2.2", unit: "kg/ha", stage: "Prior to weed emergence", note: "Apply as blanket spray immediately after planting or before planting material begins to grow. If needed, apply direct inter-row spray prior to flower differentiation. DO NOT spray over top of plants. Maximum 9 kg/ha/year" }
      ]
    },
    {
      crop: "Industrial weed control — Commercial and industrial areas",
      cropList: ["Industrial Weed Control","Commercial And Industrial Areas"],
      weeds: [
        { weed: "All annual broadleaf weeds and grasses", pestList: ["All Annual Broadleaf Weeds and Grasses"], states: ["All"], rate: "3.5", rateMax: "6.5", unit: "kg/ha", stage: "Pre-emergence", note: "Lowest rate for low rainfall areas (250 mm or less). Apply when weeds and grasses re-appear on previously treated sites" }
      ]
    },
    {
      crop: "Small areas — Spot spray treatment",
      cropList: ["Small Areas"],
      weeds: [
        { weed: "Annual and perennial weeds (various)", pestList: ["Annual and Perennial Weeds (Various)"], states: ["All"], rate: "20", rateMax: "20", unit: "g/10L", stage: "When weeds present", note: "Equivalent to 20 kg/ha concentration. Wet weeds thoroughly to point of run-off. Add non-ionic surfactant at 100 mL/100L if weeds emerged" }
      ]
    }
  ],

  restraints: [
    "DO NOT allow spray to contact foliage or fruit of desirable plants",
    "DO NOT spray under weather conditions that may cause spray drift to susceptible plants",
    "DO NOT use on newly seeded asparagus or young asparagus plants during first growing season after setting",
    "DO NOT replant asparagus or citrus within three (3) years of last application - crop injury may occur",
    "DO NOT replant any crop other than pineapple into pineapple-treated areas within 3 years",
    "DO NOT cultivate soil surface after application - may reduce efficacy and cause crop injury",
    "DO NOT contaminate streams, rivers or waterways",
    "DO NOT apply by air",
    "DO NOT apply unless wind speed between 3 and 20 km/h"
  ],

  compatibility: {
    compatible:   ["Non-ionic surfactants"],
    incompatible: [],
    notes:        ["Add non-ionic surfactant at 100 mL/100L when controlling emerged weeds"]
  },

  withholding: {
    harvest: "NOT REQUIRED WHEN USED AS DIRECTED",
    grazing: "Asparagus: 14 days, Citrus: 3 days, Pineapple: 14 days after treatment"
  },

  surfactant:     "Non-ionic surfactant at 100 mL/100L (0.1% v/v) when weeds present",
  sprayerCleanup: "Thoroughly clean all traces of product from equipment immediately after use. Flush tank, pump, hoses and boom with several changes of water after removing nozzles and screens. Clean screens separately"
};
