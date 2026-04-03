// ─────────────────────────────────────────────────────────
// THIOVIT® JET MICROGRANULE FUNGICIDE/MITICIDE — Label Data
// Group M2 (Multi-site) | Microgranule (MG)
// Source: Syngenta_ThiovitJet_Label.pdf
// APVMA Approval No: 53904
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['thiovitjet'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Thiovit® Jet Microgranule Fungicide/Miticide",
  company: "BASF",

  category:         "Fungicides",
  activeIngredient: "800 g/kg sulfur (elemental sulphur)",
  group:            "Group M2 (Multi-site Fungicide/Miticide)",
  modeOfAction:     "Multi-site inhibitor — quick fumigant action and long residual effect; sulphur vapour disrupts fungal respiration and mite metabolism",
  formulation:      "Microgranule (MG)",
  color:            "#7e22ce",
  apvma:            "53904",
  labelPdf: "Source labels/Syngenta_Thiovit_Jet_Microgranule_Fungicidemiticide_Label.pdf",
  sdsPdf:           "SDS Labels/THIOVIT_JET_MICROGRANULE_FUNGICIDE___MITICIDE.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Powdery Mildew", "Black Spot", "Rust", "Brown Rot", "Blossom Blight",
             "Vine Mite", "Grapeleaf Blister Mite", "Two-spotted Mite", "Citrus Rust Mite",
             "Brown Citrus Rust Mite", "Bud Mite", "White Louse Scale"],
    timing: ["Preventative", "Pre-infection", "Curative"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Citrus — Mites and Diseases",
      cropList: ["Citrus"],
      weeds: [
        {
          weed: "Citrus Rust Mite, Brown Citrus Rust Mite, Bud Mite, Moss, Lichens",
          pestList: ["Citrus Rust Mite","Brown Citrus Rust Mite","Bud Mite","Moss","Lichens"],
          states: ["All"],
          rate: "400",
          rateMax: "500",
          unit: "g/100L",
          stage: "During July–August; leave at least 3 weeks between sprays of oil and product",
          note: "Apply during July-August. Leave at least 3 weeks between sprays of oil and product. WHP: not required when used as directed."
        },
        {
          weed: "Melanose",
          pestList: ["Melanose"],
          states: ["All"],
          rate: "400",
          rateMax: "500",
          unit: "g/100L",
          stage: "Apply in late August for best results",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "White Louse Scale",
          pestList: ["White Louse Scale"],
          states: ["All"],
          rate: "200",
          rateMax: "300",
          unit: "g/100L",
          stage: "May be added to copper spray at petal fall or applied separately during Spring or Autumn",
          note: "WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Grapes (Table Grapes, Fruit for Drying) — Mites and Powdery Mildew",
      cropList: ["Grapes","Table Grapes","Fruit For Drying"],
      weeds: [
        {
          weed: "Vine Mite, Grapeleaf Blister Mite",
          pestList: ["Vine Mite","Grapeleaf Blister Mite"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "g/100L",
          stage: "Apply before sprouting; ensure thorough coverage",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "Powdery Mildew",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "100",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply immediately after budburst, then every 2–3 weeks or as required; ensure thorough coverage",
          note: "WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Grapevines (Wine Grapes) — Mites and Powdery Mildew",
      cropList: ["Grapevines (Wine Grapes)"],
      weeds: [
        {
          weed: "Vine Mite, Grapeleaf Blister Mite",
          pestList: ["Vine Mite","Grapeleaf Blister Mite"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "g/100L",
          stage: "Apply before sprouting; ensure thorough coverage",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "Powdery Mildew",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "200",
          rateMax: "600",
          unit: "g/100L",
          stage: "Apply immediately after bud burst, then every 14–21 days or as required; ensure thorough coverage",
          note: "Use rates to the upper end of the range when disease pressure is high and/or higher degree of control is required. Crop phytotoxicity may occur when application occurs during hot or humid conditions or when the target crop is suffering from moisture stress. DO NOT apply during the heat of the day. Use lower end of rate range when warm conditions are present at and immediately after application. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Kiwifruit — Two-spotted Mite",
      cropList: ["Kiwifruit"],
      weeds: [
        {
          weed: "Two-spotted Mite",
          pestList: ["Two-Spotted Mite"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "g/100L",
          stage: "Spray only when the pest is present; repeat application only when necessary",
          note: "Avoid spraying during the heat of the day. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Mangosteens and Rambutans — Powdery Mildew and Mites",
      cropList: ["Mangosteens And Rambutans"],
      weeds: [
        {
          weed: "Powdery Mildew, Mites",
          pestList: ["Powdery Mildew","Mites"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "g/100L",
          stage: "Apply as a foliar spray when pests are present; repeat applications only when necessary",
          note: "DO NOT apply during hot weather. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Peaches, Nectarines, Plums — Rust and Brown Rot/Blossom Blight",
      cropList: ["Peaches","Nectarines","Plums"],
      weeds: [
        {
          weed: "Rust",
          pestList: ["Rust"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply as required during November to January",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "Rust",
          pestList: ["Rust"],
          states: ["Qld"],
          rate: "350",
          rateMax: "350",
          unit: "g/100L",
          stage: "Apply at petal fall only",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "Brown Rot, Blossom Blight",
          pestList: ["Brown Rot","Blossom Blight"],
          states: ["All"],
          rate: "200",
          rateMax: "200",
          unit: "g/100L",
          stage: "Apply at petal fall and then as a cover spray at regular intervals beginning 3–4 weeks after petal fall",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "Brown Rot, Blossom Blight",
          pestList: ["Brown Rot","Blossom Blight"],
          states: ["Qld"],
          rate: "350",
          rateMax: "350",
          unit: "g/100L",
          stage: "Apply at petal fall only",
          note: "WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Pome Fruit — Powdery Mildew and Black Spot",
      cropList: ["Pome Fruit"],
      weeds: [
        {
          weed: "Powdery Mildew",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "200",
          rateMax: "400",
          unit: "g/100L",
          stage: "Start spraying early; apply at least 2 sprays before blossom; apply every 2 weeks after blossom or as required",
          note: "Surfactant may be added at 12 mL/100 L. Regular sprays will also aid in the control of Black Spot (Scab). WHP: not required when used as directed."
        },
        {
          weed: "Black Spot (Scab)",
          pestList: ["Black Spot"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "g/100L",
          stage: "Regular spray program during susceptible period",
          note: "WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Ornamentals — Powdery Mildew and Two-spotted Mite",
      cropList: ["Ornamentals"],
      weeds: [
        {
          weed: "Powdery Mildew, Two-spotted Mite",
          pestList: ["Powdery Mildew","Two-Spotted Mite"],
          states: ["All"],
          rate: "200",
          rateMax: "350",
          unit: "g/100L",
          stage: "Apply when pest or disease is first seen; repeat every 10–21 days",
          note: "WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Strawberries — Powdery Mildew",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Powdery Mildew",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "200",
          rateMax: "300",
          unit: "g/100L",
          stage: "Apply when the disease is first noticed; then at 10–14 day intervals during humid weather",
          note: "WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Tomatoes for Processing — Multiple Diseases and Mites",
      cropList: ["Tomatoes For Processing"],
      weeds: [
        {
          weed: "Powdery Mildew, Bean Rust, Tomato Russet Mite, Bean Spider Mite, Two-spotted Mite",
          pestList: ["Powdery Mildew","Bean Rust","Tomato Russet Mite","Bean Spider Mite","Two-Spotted Mite"],
          states: ["All"],
          rate: "2",
          rateMax: "2",
          unit: "kg/ha",
          stage: "Apply when pest or disease is first seen; repeat as necessary",
          note: "Crop phytotoxicity may occur when applications occur during hot conditions. DO NOT apply during the heat of the day. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Vegetables (NOT Cucumber or Rockmelon) — Mites and Diseases",
      cropList: ["Vegetables (NOT Cucumber Or Rockmelon)"],
      weeds: [
        {
          weed: "Powdery Mildew, Bean Rust, Tomato Russet Mite, Bean Spider Mite, Two-spotted Mite",
          pestList: ["Powdery Mildew","Bean Rust","Tomato Russet Mite","Bean Spider Mite","Two-Spotted Mite"],
          states: ["All"],
          rate: "200",
          rateMax: "300",
          unit: "g/100L",
          stage: "Apply when pest or disease is first seen; repeat as necessary",
          note: "Crop phytotoxicity may occur when applications occur during hot conditions. DO NOT apply during the heat of the day. WHP: not required when used as directed."
        }
      ]
    }

  ,
    {
      crop: "Cucurbits",
      cropList: ["Cucurbits"],
      weeds: [
          { weed: "Powdery mildew", pestList: ["Powdery Mildew"], states: ["All"], rate: "300", unit: "g/100L", rateText: "300g/100L", notes: "apply when diesease is first seen and repeat at 14 to 21 day intervals. use higher rate when conditions favour disease or crops with large leaf cover. don not apply in the heat of the day. use wetter with hairy or waxy leaves" }
      ]
    },
    {
      crop: "Lychee",
      cropList: ["Lychee"],
      weeds: [
          { weed: "Erinose mite, White louse scale", pestList: ["Erinose Mite", "White Louse Scale"], states: ["All"], rate: "450", unit: "g/100L", rateText: "450g/100L", notes: "DO NOT apply within 3 weeks of an oil spray or mix with oils or formulation containing mineral oil DO NOT use in hot weather. No more then 4 applications per year" }
      ]
    }
    ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply product in combination with spraying oils except to deciduous fruit in dormant period.",
    "DO NOT use on sulphur sensitive crops when temperature exceeds 24°C.",
    "DO NOT apply during the heat of the day.",
    "Spray solution should NOT be left standing in the vat overnight."
  ],

  compatibility: {
    compatible:   ["Most fungicides and insecticides — use WG/WP formulations first, then add EC or SC products."],
    incompatible: ["Spraying oils (except to deciduous fruit in dormant period)."],
    notes:        ["When mixing with other granule or powder formulations, ensure they are added and mixed well prior to adding EC or SC products. Pour product STEADILY into vat with vigorous agitation — DO NOT dump all at once."]
  },

  withholding: {
    harvest: "NOT REQUIRED WHEN USED AS DIRECTED.",
    grazing: "NOT REQUIRED WHEN USED AS DIRECTED."
  },

  surfactant:     "Surfactant may be added at 12 mL/100 L for Pome Fruit Powdery Mildew applications.",
  sprayerCleanup: "Shake and empty contents into spray tank. Break, crush, or puncture empty packaging and deliver to an approved waste management facility."

};
