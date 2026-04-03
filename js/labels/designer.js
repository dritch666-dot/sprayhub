// ─────────────────────────────────────────────────────────
// DESIGNER ENHANCED WETTER AND STICKER — Label Data
// Adjuvant / Wetter | Emulsifiable Liquid
// Source: Nufarm_Designer_Label.pdf
// APVMA Approval No: 58920
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────
productDatabase['designer'] = {

  name:             "Designer® Enhanced Wetter and Sticker",
  company: "AMVAC",


  category:         "Adjuvants / Surfactants",
  activeIngredient: "385 g/L Organosilicone Surfactant Fluid, 255 g/L Synthetic Latex",
  group:            "Adjuvant — Organosilicone Wetter and Sticker",
  modeOfAction:     "Reduces surface tension; enhances spreading, deposition and adhesion of spray",
  formulation:      "Emulsifiable Liquid",
  color:            "#78350f",
  apvma:            "58920",
  labelPdf: "Source labels/Loveland_Products_Inc_Designer_Enhanced_Wetter_And_Sticker_Label.pdf",
  sdsPdf:           "SDS Labels/DESIGNER.pdf",
  signalHeading:    "Caution",

  classification: {
    type: "Adjuvant",
    target: ["Spray Adjuvant"],
    timing: ["With fungicides, insecticides, plant growth regulators, foliar nutrients"]
  },

  crops: [

    {
      crop: "Vines",
      cropList: ["Vines"],
      weeds: [
        {
          weed: "Use with fungicides, insecticides, plant growth regulators and foliar nutrients — foliage application",
          pestList: ["Use With Fungicides","Insecticides","Plant Growth Regulators And Foliar Nutrients — Foliage Application"],
          states: ["All"],
          rate: "300",
          rateMax: "700",
          unit: "mL/ha",
          stage: "Apply with compatible agricultural chemical sprays — apply at least 30 minutes before anticipated rain or overhead irrigation",
          note: "Designer is applied at a per hectare rate, NOT at a per 100 L water rate. Spray volume for vines: 100–300 L/ha. Use higher rate for lower water volumes and as amount of pesticide in spray mix increases. Increase water volume as canopy density increases. Adjust rates of Designer and/or water volumes to obtain thorough coverage to the point of run-off. DO NOT use with herbicides or products where the label prohibits surfactant use."
        },
        {
          weed: "Use with fungicides, insecticides, plant growth regulators and foliar nutrients — bunches application",
          pestList: ["Use With Fungicides","Insecticides","Plant Growth Regulators And Foliar Nutrients — Bunches Application"],
          states: ["All"],
          rate: "800",
          rateMax: "1200",
          unit: "mL/ha",
          stage: "Apply with compatible agricultural chemical sprays to bunches",
          note: "Designer applied at per hectare rate for bunch application: 800–1200 mL/ha. DO NOT mix Designer with spray oils as phytotoxicity may occur."
        }
      ]
    },

    {
      crop: "Vegetables",
      cropList: ["Vegetables"],
      weeds: [
        {
          weed: "Hard-to-wet vegetables (e.g. onion) — use with fungicides, insecticides, plant growth regulators and foliar nutrients",
          pestList: ["Hard-To-Wet Vegetables — Use With Fungicides","Insecticides","Plant Growth Regulators And Foliar Nutrients"],
          states: ["All"],
          rate: "300",
          rateMax: "1200",
          unit: "mL/ha",
          stage: "Apply with compatible agricultural chemical spray at 150–200 L/ha spray volume",
          note: "Designer applied at per hectare rate: 300–1200 mL/ha for hard-to-wet vegetables (e.g. onion). Spray volume: 150–200 L/ha. Use higher rate for lower water volumes and as amount of pesticide in spray mix increases. Optimum spreading and wetting occurs between pH 6 and pH 8 — spray mixtures outside this range should be sprayed immediately or pH adjusted."
        },
        {
          weed: "Easy-to-wet vegetables (e.g. potatoes) — use with fungicides, insecticides, plant growth regulators and foliar nutrients",
          pestList: ["Easy-To-Wet Vegetables — Use With Fungicides","Insecticides","Plant Growth Regulators And Foliar Nutrients"],
          states: ["All"],
          rate: "200",
          rateMax: "800",
          unit: "mL/ha",
          stage: "Apply with compatible agricultural chemical spray at 150–200 L/ha spray volume",
          note: "Designer applied at per hectare rate: 200–800 mL/ha for easy-to-wet vegetables (e.g. potatoes). Spray volume: 150–200 L/ha. Designer will break down rapidly when mixed with highly acidic or highly alkaline chemicals — poor wetting may result."
        }
      ]
    },

    {
      crop: "Blueberries",
      cropList: ["Blueberries"],
      weeds: [
        {
          weed: "Use with fungicides, insecticides, plant growth regulators and foliar nutrients",
          pestList: ["Use With Fungicides","Insecticides","Plant Growth Regulators And Foliar Nutrients"],
          states: ["All"],
          rate: "400",
          rateMax: "800",
          unit: "mL/ha",
          stage: "Apply with compatible agricultural chemical spray — spray volume 200–700 L/ha",
          note: "Designer applied at per hectare rate: 400–800 mL/ha with spray volume 200–700 L/ha. If more than 2–3 kg or litres of pesticide are being added to the spray tank, the rate of Designer will need to be increased to counter antagonism with formulated surfactants."
        }
      ]
    },

    {
      crop: "Macadamia",
      cropList: ["Macadamia"],
      weeds: [
        {
          weed: "Use with fungicides, insecticides, plant growth regulators and foliar nutrients",
          pestList: ["Use With Fungicides","Insecticides","Plant Growth Regulators And Foliar Nutrients"],
          states: ["All"],
          rate: "400",
          rateMax: "800",
          unit: "mL/ha",
          stage: "Apply with compatible agricultural chemical spray — spray volume 400–1700 L/ha",
          note: "Designer applied at per hectare rate: 400–800 mL/ha with spray volume 400–1700 L/ha. Before treating large areas, test a small area for crop phytotoxicity. Trials on sensitive plants have shown potential for phytotoxicity — always test previously untried mixtures before large-scale use."
        }
      ]
    }

  ],

  restraints: [
    "DO NOT use with herbicides.",
    "DO NOT use with products where the label prohibits use of surfactants.",
    "DO NOT mix Designer with spray oils as phytotoxicity may occur.",
    "DO NOT use on plants that are not listed on this label without prior testing for phytotoxicity.",
    "Apply sprays containing Designer at least 30 minutes before anticipated rain or overhead irrigation.",
    "Refer to the label of the agricultural chemical being mixed with Designer for all other restraints and withholding periods."
  ],

  compatibility: {
    compatible:   [
      "Most commonly used fungicides",
      "Most insecticides",
      "Plant growth regulators",
      "Foliar nutrients"
    ],
    incompatible: [
      "Herbicides — DO NOT use with herbicides",
      "Spray oils — DO NOT mix with spray oils (phytotoxicity may occur)",
      "Highly acidic chemicals — Designer breaks down rapidly",
      "Highly alkaline chemicals — Designer breaks down rapidly",
      "Products where the label prohibits surfactant use"
    ],
    notes:        [
      "As Designer is affected by many product formulations, always refer to product label compatibility section for more information.",
      "If more than 2–3 kg or litres of pesticide are being added to the tank, increase the rate of Designer to counter antagonism with formulated surfactants.",
      "Optimum spreading and wetting occurs between pH 6 and pH 8; spray mixtures outside this range should be sprayed immediately or pH adjusted.",
      "Consult your local Nufarm representative for up-to-date compatibility information."
    ]
  },

  withholding: {
    harvest: "Refer to the label of the agricultural chemical that is to be mixed with Designer.",
    grazing:  "Refer to the label of the agricultural chemical that is to be mixed with Designer."
  },

  surfactant:     "Designer IS the adjuvant/surfactant. Applied at per hectare rates, not per 100 L rates.",
  sprayerCleanup: "Triple-rinse containers before disposal. Add rinsings to spray tank. DO NOT dispose of undiluted chemical on site."

};
