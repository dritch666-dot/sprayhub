// ─────────────────────────────────────────────────────────
// BRAVADO® 720 FUNGICIDE — Label Data
// Group M5 (Multi-site) | Suspension Concentrate (SC)
// Source: Axichem_Bravado720_Label.pdf
// APVMA Approval No: 345814
// Axichem Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['bravado720'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Bravado® 720 Fungicide",
  company: "BASF",

  category:         "Fungicides",
  activeIngredient: "720 g/L chlorothalonil",
  group:            "Group M5 (Multi-site Fungicide)",
  modeOfAction:     "Multi-site inhibitor — reacts with thiol groups in enzymes disrupting multiple metabolic processes",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#0d9488",
  apvma:            "345814",
  labelPdf:         "Source labels/Axichem_Ac_Bravado_720_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/AC_Bravado.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Early Blight", "Late Blight", "Downy Mildew", "Rust", "Leaf Spot", "Anthracnose",
             "Botrytis", "Scab", "Melanose", "Sigatoka"],
    timing: ["Preventative", "Pre-infection"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Almonds",
      cropList: ["Almonds"],
      weeds: [
        {
          weed: "Shot hole, Rust, Leaf curl, Hull rot",
          pestList: ["Shot Hole","Rust","Leaf Curl","Hull Rot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "From green tip; repeat at 7–14 day intervals",
          note: "Apply by dilute or concentrate spraying. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Apricots",
      cropList: ["Apricots"],
      weeds: [
        {
          weed: "Brown rot (Monilinia spp.), Shot hole (Wilsonomyces carpophilus), Rust (Tranzschelia discolor)",
          pestList: ["Brown Rot","Shot Hole","Rust"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "At petal fall and shuck fall, then at 14-day intervals",
          note: "Apply by dilute or concentrate spraying. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Bananas",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Sigatoka (Mycosphaerella musicola), Leaf speckle (Mycosphaerella musae)",
          pestList: ["Sigatoka","Leaf Speckle"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "Apply when weather conditions favour disease; follow locally recommended spray schedules",
          note: "For use on bagged or unbagged bananas. WHP: 1 day. Use sufficient water to ensure coverage."
        }
      ]
    },

    {
      crop: "Carrots",
      cropList: ["Carrots"],
      weeds: [
        {
          weed: "Alternaria leaf blight, Cercospora leaf spot",
          pestList: ["Alternaria Leaf Blight","Cercospora Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "WHP: 7 days."
        }
      ]
    },

    {
      crop: "Celery",
      cropList: ["Celery"],
      weeds: [
        {
          weed: "Early blight (Cercospora apii), Late blight (Septoria apiicola)",
          pestList: ["Early Blight","Late Blight"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "WHP: 7 days."
        }
      ]
    },

    {
      crop: "Cherries",
      cropList: ["Cherries"],
      weeds: [
        {
          weed: "Brown rot (Monilinia spp.), Leaf spot (Blumeriella jaapii)",
          pestList: ["Brown Rot","Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "At petal fall; repeat at 14-day intervals",
          note: "Apply by dilute or concentrate spraying. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Faba Beans",
      cropList: ["Faba Beans"],
      weeds: [
        {
          weed: "Botrytis (Botrytis fabae), Chocolate spot, Ascochyta blight, Rust",
          pestList: ["Botrytis","Chocolate Spot","Ascochyta Blight","Rust"],
          states: ["All"],
          rate: "1.5",
          rateMax: "2.5",
          unit: "L/ha",
          stage: "When disease first appears; repeat at 10–14 day intervals under humid conditions",
          note: "WHP: 14 days. Use higher rate for dense canopies or severe disease pressure."
        }
      ]
    },

    {
      crop: "Grapes (Grapevines)",
      cropList: ["Grapes"],
      weeds: [
        {
          weed: "Anthracnose (Elsinoe ampelina), Downy mildew (Plasmopara viticola), Botrytis bunch rot, Powdery mildew (Uncinula necator)",
          pestList: ["Anthracnose","Downy Mildew","Botrytis Bunch Rot","Powdery Mildew"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "Commence at bud burst; repeat at 7–14 day intervals during susceptible period",
          note: "Apply by dilute or concentrate spraying. WHP: 30 days. Use higher rate and shorter interval when conditions favour disease."
        }
      ]
    },

    {
      crop: "Onions",
      cropList: ["Onions"],
      weeds: [
        {
          weed: "Downy mildew (Peronospora destructor), Purple blotch (Alternaria porri)",
          pestList: ["Downy Mildew","Purple Blotch"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "WHP: 7 days. Add non-ionic surfactant for improved coverage."
        }
      ]
    },

    {
      crop: "Peaches",
      cropList: ["Peaches"],
      weeds: [
        {
          weed: "Brown rot (Monilinia spp.), Shot hole, Rust, Freckle",
          pestList: ["Brown Rot","Shot Hole","Rust","Freckle"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "At petal fall and shuck fall, then at 14-day intervals to pre-harvest",
          note: "Apply by dilute or concentrate spraying. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Peanuts",
      cropList: ["Peanuts"],
      weeds: [
        {
          weed: "Cercospora leaf spot, Rust (Puccinia arachidis)",
          pestList: ["Cercospora Leaf Spot","Rust"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "When disease symptoms first appear; repeat at 10–14 day intervals",
          note: "WHP: 14 days. Use higher rate during weather conditions favourable to disease development."
        }
      ]
    },

    {
      crop: "Plums",
      cropList: ["Plums"],
      weeds: [
        {
          weed: "Brown rot (Monilinia spp.), Shot hole, Rust, Freckle",
          pestList: ["Brown Rot","Shot Hole","Rust","Freckle"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "At petal fall; repeat at 14-day intervals",
          note: "Apply by dilute or concentrate spraying. WHP: 14 days."
        }
      ]
    },

    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Early blight (Alternaria solani), Late blight (Phytophthora infestans)",
          pestList: ["Early Blight","Late Blight"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "WHP: 7 days. Use higher rate and shorter interval when conditions favour disease."
        }
      ]
    },

    {
      crop: "Tomatoes",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Early blight (Alternaria solani), Late blight (Phytophthora infestans), Septoria leaf spot, Anthracnose, Grey leaf spot",
          pestList: ["Early Blight","Late Blight","Septoria Leaf Spot","Anthracnose","Grey Leaf Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "WHP: 7 days. Use higher rate during prolonged wet and humid conditions."
        }
      ]
    },

    {
      crop: "Turf",
      cropList: ["Turf"],
      weeds: [
        {
          weed: "Helminthosporium leaf spot, Fusarium patch, Dollar spot, Brown patch (Rhizoctonia solani)",
          pestList: ["Helminthosporium Leaf Spot","Fusarium Patch","Dollar Spot","Brown Patch"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "When disease symptoms appear; repeat at 14-day intervals during susceptible periods",
          note: "WHP: Not required when used as directed. Spray in sufficient water for adequate coverage."
        }
      ]
    },

    {
      crop: "Vegetables — General (Beans, Brassicas, Cucurbits, Lettuce)",
      cropList: ["Vegetables","Beans","Brassicas","Cucurbits","Lettuce"],
      weeds: [
        {
          weed: "Downy mildew, Anthracnose, Angular leaf spot, Rust, Alternaria leaf spot, Grey mould, Ring spot",
          pestList: ["Downy Mildew","Anthracnose","Angular Leaf Spot","Rust","Alternaria Leaf Spot","Grey Mould","Ring Spot"],
          states: ["All"],
          rate: "150",
          rateMax: "200",
          unit: "mL/100L",
          stage: "When disease symptoms first appear; repeat at 7–10 day intervals",
          note: "WHP: 7 days. Use higher rate and shorter interval during weather favourable to disease. Add non-ionic surfactant to improve coverage on Brassicas and Cucurbits."
        }
      ]
    }

  ,
    {
      crop: "Mango",
      cropList: ["Mango"],
      weeds: [
          { weed: "Anthracnose", pestList: ["Anthracnose"], states: ["All"], rate: "160-210", unit: "mL/100L", rateText: "160-210ml/100L", notes: "Target spray applications during bud burst to late flowering only. do not apply with oils. no more then 4 applications per year. do not apply on fruit" }
      ]
    },
    {
      crop: "Capsicum",
      cropList: ["Capsicum"],
      weeds: [
          { weed: "Grey mould and Anthracnose", pestList: ["Grey Mould and Anthracnose"], states: ["All"], rate: "1.8-2.3", unit: "L/ha", rateText: "1.8-2.3L/ha", notes: "WHP: 1 day. Apply at 7 to 10 day intervals. Do not mix with wetters or oils" }
      ]
    }
    ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "Dangerous to fish. DO NOT contaminate streams, rivers or waterways with chemical or used containers.",
    "DO NOT store for prolonged periods in direct sunlight."
  ],

  compatibility: {
    compatible:   ["Most standard fungicides and insecticides — consult supplier before mixing."],
    incompatible: [],
    notes:        ["Triple or preferably pressure rinse containers before disposal. Add rinsings to spray tank."]
  },

  withholding: {
    harvest: "Almonds, Apricots, Carrots, Celery, Cherries, Grapes, Onions, Peaches, Peanuts, Plums, Potatoes: 7–14 days (see label). Bananas: 1 day. Tomatoes: 7 days. Turf: not required when used as directed.",
    grazing: "DO NOT contaminate feed or foodstuffs with this product or empty containers."
  },

  surfactant:     "Non-ionic surfactant recommended for Brassicas, Cucurbits, and Onions to improve coverage.",
  sprayerCleanup: "Triple or preferably pressure rinse containers before disposal. Add rinsings to spray tank. DO NOT dispose of undiluted chemicals on site."

};
