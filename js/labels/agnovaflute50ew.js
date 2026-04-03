// ─────────────────────────────────────────────────────────────────────────────
// Agnova Flute 50 EW — Label Data
// Emulsion Oil in Water | Fungicide
// Source: Agnova_Technologies_Flute_50_Ew_Fungicide_Label.pdf
// APVMA Approval No: 66970/123183
// AgNova Technologies Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['agnovaflute50ew'] = {
  name:             "Flute 50 EW Fungicide",
  company: "AgNova",

  category:         "Fungicides",
  activeIngredient: "50 g/L Cyflufenamid",
  group:            "Group U6 Fungicide",
  modeOfAction:     "Inhibitor of sterol C14 reduction",
  formulation:      "Emulsion Oil in Water (EW)",
  color:            "#059669",
  apvma:            "66970/123183",
  labelPdf:         "Source labels/Agnova_Technologies_Flute_50_Ew_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/Flute_50_EW_Fungicide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Powdery mildew"],
    timing: ["Early season to mid-season"]
  },

  crops: [
    {
      crop: "Grapevines — Powdery mildew",
      cropList: ["Grapevines"],
      weeds: [
        { weed: "Powdery mildew (Erysiphe necator)", pestList: ["Powdery Mildew"], states: ["All"], rate: "25", rateMax: "35", unit: "mL/100L", stage: "E-L 18 (caps changing) to E-L 31 (berries pea-size)", note: "Apply 1-2 applications. 10-14 day interval normal; up to 21 days if low pressure and slow vine growth. Do not apply at concentrations greater than 3X" }
      ]
    },
    {
      crop: "Cucurbits — Powdery mildew",
      cropList: ["Cucurbits"],
      weeds: [
        { weed: "Powdery mildew (Podosphaera xanthii)", pestList: ["Powdery Mildew"], states: ["All"], rate: "250", rateMax: "250", unit: "mL/ha", stage: "Growing season", note: "7-10 day spray intervals. Glasshouse: 25 mL/100L. Maximum 2 sprays per crop. For resistance management" }
      ]
    },
    {
      crop: "Strawberries (field and protected) — Powdery mildew",
      cropList: ["Strawberries (Field And Protected)"],
      weeds: [
        { weed: "Powdery mildew (Podosphaera aphanis)", pestList: ["Powdery Mildew"], states: ["All"], rate: "35", rateMax: "350", unit: "mL/100L or mL/ha", stage: "Growing season", note: "7-10 day intervals. Maximum 2 sprays per fruiting season. Dilute when >1000 L/ha spray volume, concentrate when <1000 L/ha" }
      ]
    },
    {
      crop: "Strawberry runners and plug plants — Powdery mildew",
      cropList: ["Strawberry Runners And Plug Plants"],
      weeds: [
        { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "350", rateMax: "350", unit: "mL/ha", stage: "Growing season", note: "Maximum 2 sprays per season. Minimum 2 sprays of different mode of action groups between applications and after last Flute spray prior to digging. 600-800 L/ha water" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply by air - uneven coverage likely",
    "DO NOT apply when wind speed less than 3 or more than 20 km/h",
    "DO NOT apply with spray droplets smaller than MEDIUM size (except vineyard airblast)",
    "DO NOT apply during surface temperature inversion conditions",
    "DO NOT apply at concentrations greater than 3X (concentrate spraying)",
    "DO NOT apply more than 2 sprays per season",
    "DO NOT apply later than EL31 (berries pea-size) for wine export grapes",
    "Accurate spray records MUST be kept (24 hours post-application for minimum 2 years)"
  ],

  compatibility: {
    compatible:   ["CropLife Australia resistance management strategies"],
    incompatible: [],
    notes:        ["Follow published CropLife resistance management guidelines", "Alternate with other fungicide groups"]
  },

  withholding: {
    harvest: "Grapes (domestic): 5 weeks, Grapes (wine export): Contact AgNova Technologies, Cucurbits: 1 day, Strawberries: Nil",
    grazing: "NOT REQUIRED WHEN USED AS DIRECTED"
  },

  surfactant:     "Not required - formulated as emulsion",
  sprayerCleanup: "Add product to partly filled spray tank and agitate. Complete filling while agitating. Ensure proper agitation before restart after stoppage"
};
