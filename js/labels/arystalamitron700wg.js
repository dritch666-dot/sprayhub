// ─────────────────────────────────────────────────────────────────────────────
// Arysta Amitron 700 WG — Label Data
// Water Dispersible Granule | Herbicide
// Source: Arysta_Lifescience_North_America_Llc_Amitron_700wg_Herbicide_Label.pdf
// APVMA Approval No: 85031/112127
// Arysta LifeScience Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['arystalamitron700wg'] = {
  name:             "Amitron 700 WG Herbicide",
  company: "Albaugh",

  category:         "Herbicides",
  activeIngredient: "700 g/kg Amicarbazone",
  group:            "Group C Herbicide",
  modeOfAction:     "Inhibitor of photosynthesis at photosystem II",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#6366f1",
  apvma:            "85031/112127",
  labelPdf:         "Source labels/Arysta_Lifescience_North_America_Llc_Amitron_700wg_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/AMITRON_700WG_HERBICIDE.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Herbicide",
    target: ["Annual grasses", "Broadleaf weeds", "Sedges"],
    timing: ["Pre-emergence", "Early post-emergence"]
  },

  crops: [
    {
      crop: "Sugarcane (Plant and Ratoon) — Early post-emergence control",
      cropList: ["Sugarcane (Plant And Ratoon)","Early Post-Emergence Control"],
      weeds: [
        { weed: "Awnless barnyard grass, Bellvine, Calopo, Centro, Crowsfoot grass, Guinea grass", pestList: ["Awnless Barnyard Grass", "Bellvine", "Calopo", "Centro", "Crowsfoot Grass", "Guinea Grass"], states: ["Qld", "NSW"], rate: "500", rateMax: "500", unit: "g/ha", stage: "Early post-emergence (up to 4 leaf stage)", note: "Apply + non-ionic surfactant (600 g/L) at 200 mL/100L. CROP STAGE: Pre-emergence to 8 leaf stage acceptable. May cause transient leaf chlorosis on some varieties" }
      ]
    },
    {
      crop: "Sugarcane (Plant and Ratoon) — Pre-emergence short-term residual control",
      cropList: ["Sugarcane (Plant And Ratoon)","Pre-Emergence Short-Term Residual Control"],
      weeds: [
        { weed: "Bluetop/Billygoat weed, Calopo, Common pigweed, Common sowthistle, Cudweed, Green amaranth, Paddy's lucerne, Pink burr, Wild hops", pestList: ["Bluetop/Billygoat Weed", "Calopo", "Common Pigweed", "Common Sowthistle", "Cudweed", "Green Amaranth", "Paddy's Lucerne", "Pink Burr", "Wild Hops"], states: ["Qld", "NSW"], rate: "500", rateMax: "500", unit: "g/ha", stage: "Pre-emergence (up to 4 weeks residual)", note: "Short-term control period up to 4 weeks. Best on moist soil. May cause transient leaf chlorosis" }
      ]
    },
    {
      crop: "Sugarcane (Plant and Ratoon) — Pre-emergence medium-term residual control",
      cropList: ["Sugarcane (Plant And Ratoon)","Pre-Emergence Medium-Term Residual Control"],
      weeds: [
        { weed: "Annual sedges, Awnless barnyard grass, Bellvine, Bittercress, Bluetop, Calopo, Centro, Crowsfoot grass, Guinea grass, Joint vetch, Morning glory, Paddy's lucerne, Pink convolvulus, Potato weed, Sesbania pea, Summer grass, Thickhead", pestList: ["Annual Sedges", "Awnless Barnyard Grass", "Bellvine", "Bittercress", "Bluetop", "Calopo", "Centro", "Crowsfoot Grass", "Guinea Grass", "Joint Vetch", "Morning Glory", "Paddy's Lucerne", "Pink Convolvulus", "Potato Weed", "Sesbania Pea", "Summer Grass", "Thickhead"], states: ["Qld", "NSW"], rate: "800", rateMax: "800", unit: "g/ha", stage: "Pre-emergence (up to 8 weeks residual)", note: "Medium-term control period up to 8 weeks. Broad spectrum control" }
      ]
    },
    {
      crop: "Sugarcane (Plant and Ratoon) — Pre-emergence long-term residual control",
      cropList: ["Sugarcane (Plant And Ratoon)","Pre-Emergence Long-Term Residual Control"],
      weeds: [
        { weed: "Common pigweed, Cudweed, Phyllanthus", pestList: ["Common Pigweed", "Cudweed", "Phyllanthus"], states: ["Qld", "NSW"], rate: "800", rateMax: "800", unit: "g/ha", stage: "Pre-emergence (10-14 weeks residual)", note: "Long-term control period 10-14 weeks. Extended residual control of difficult species" }
      ]
    },
    {
      crop: "Sugarcane (Plant Cane 30 cm to 1.2 m high, Ratoon Cane up to flowering) — Post-emergence control",
      cropList: ["Sugarcane","Plant Cane 30 Cm To 1.2 M High","Ratoon Cane Up To Flowering","Post-Emergence Control"],
      weeds: [
        { weed: "Bittercress, Blackberry nightshade, Common pigweed, Milkweed, Paddy's lucerne, Common sowthistle, Bellvine, Bluetop, Cudweed, Morning glory, Thickhead", pestList: ["Bittercress", "Blackberry Nightshade", "Common Pigweed", "Milkweed", "Paddy's Lucerne", "Common Sowthistle", "Bellvine", "Bluetop", "Cudweed", "Morning Glory", "Thickhead"], states: ["Qld", "NSW"], rate: "1000", rateMax: "1000", unit: "g/ha", stage: "Post-emergence (up to 6 leaf stage or flowering)", note: "Apply as directed spray minimizing cane foliage contact. May cause transient leaf chlorosis. DO NOT use on very sandy soils (>90% sand)" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply with aircraft",
    "DO NOT use prior to planting any crop other than sugarcane within 24 months",
    "DO NOT apply with spray droplets smaller than MEDIUM size",
    "DO NOT apply when wind speed less than 3 or more than 20 km/h",
    "DO NOT apply during surface temperature inversion conditions",
    "DO NOT apply on slopes steeper than 3% (Mackay/Whitsunday region)",
    "DO NOT apply October-December (Mackay/Whitsunday and Mary/Burnett regions)",
    "DO NOT apply within 10 metres downwind of sensitive crops (all regions)",
    "DO NOT apply within 30 metres downwind of aquatic/wetland areas (all regions)",
    "Accurate spray records MUST be kept for minimum 2 years"
  ],

  compatibility: {
    compatible:   ["2,4-D amine", "Ametryn", "Metribuzin", "Diuron", "Diuron + hexazinone", "Paraquat", "Pendimethalin", "Imazapic"],
    incompatible: ["Multiple products without jar test"],
    notes:        ["Do not tank mix with more than one compatible product without jar testing", "Physical compatibility does not guarantee biological compatibility"]
  },

  withholding: {
    harvest: "NOT REQUIRED WHEN USED AS DIRECTED",
    grazing: "DO NOT GRAZE OR CUT FOR STOCK FOOD FOR 21 WEEKS AFTER APPLICATION. Export markets: 3-day interval before slaughter required"
  },

  surfactant:     "Non-ionic surfactant (600 g/L) at 200 mL/100L (0.2% v/v) required for early post-emergence applications",
  sprayerCleanup: "Add AMITRON 700WG to spray tank 50% full with clean water. After full dispersion, complete filling tank. Agitate during mixing and spraying. Ensure in-line strainer and nozzle screens are 100 mesh or coarser"
};
