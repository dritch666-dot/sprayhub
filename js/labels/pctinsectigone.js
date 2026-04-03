// ─────────────────────────────────────────────────────────────────────────────
// INSECTIGONE INSECTICIDE — Label Data
// Group 3A Insecticide | Suspension Concentrate
// Source: Pct_Holdings_Insectigone_Insecticide_Label.pdf
// APVMA Approval No: 51943/56006
// PCT Holdings Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['pctinsectigone'] = {
  name:             "PCT Insectigone Insecticide",
  activeIngredient: "10 g/L Deltamethrin",
  group:            "Group 3A Insecticide",
  modeOfAction:     "Synthetic pyrethroid — contact and residual insecticide for a range of insect pests in various situations",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#0d4f3c",
  apvma:            "51943/56006",
  company: "PCT",
  labelPdf:         "Source labels/Pct_Holdings_Insectigone_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/Insectigone_Insecticide.pdf",
  signalHeading:    "Caution",
  category:         "Insecticides",
  classification: {
    type: "Insecticide",
    target: ["Cockroaches", "Spiders", "Ants", "Fleas", "Silverfish", "Bed Bugs", "Bird Mites", "Carpet Beetles", "Clothes Moths", "Houseflies", "Mosquitoes", "Stored Product Insect Pests"],
    timing: ["When pests present", "Preventative barrier treatment"]
  },

  crops: [
    {
      crop: "Domestic, commercial, industrial & public buildings — General pests",
      cropList: ["Domestic Buildings", "Commercial Buildings", "Industrial Buildings", "Public Buildings"],
      weeds: [
        { weed: "Cockroaches, spiders, ants, fleas, silverfish, bed bugs, bird mites, carpet beetles, clothes moths", pestList: ["Cockroaches", "Spiders", "Ants", "Fleas", "Silverfish", "Bed Bugs", "Bird Mites", "Carpet Beetles", "Clothes Moths"], states: ["All"], rate: "150", unit: "mL/5L water", whp: "Not applicable", stage: "Initial treatment: 150 mL in 5 L of water per 100 m². Maintenance: 75 mL" }
      ]
    },
    {
      crop: "Domestic, commercial, industrial & public buildings — Houseflies & mosquitoes",
      cropList: ["Domestic Buildings", "Commercial Buildings", "Industrial Buildings", "Public Buildings"],
      weeds: [
        { weed: "Houseflies, mosquitoes", pestList: ["Houseflies", "Mosquitoes"], states: ["All"], rate: "75", unit: "mL/5L water", whp: "Not applicable", stage: "Spray surfaces where flies and mosquitoes rest. Mosquitoes: spray walls, awnings, fences and vegetated areas near buildings" }
      ]
    },
    {
      crop: "Cut flowers for export — Quarantine pests",
      cropList: ["Cut Flowers"],
      weeds: [
        { weed: "Quarantine pests", pestList: ["Quarantine Pests"], states: ["All"], rate: "250", unit: "mL/100L water", whp: "Not applicable", stage: "Flowers must be totally submerged in diluted product for not less than 1 minute then left to dry naturally for 2 hours" }
      ]
    },
    {
      crop: "Freshly felled pine logs — Fivespined bark beetle",
      cropList: ["Pine Logs"],
      weeds: [
        { weed: "Fivespined bark beetle (Ips grandicollis)", pestList: ["Fivespined Bark Beetle"], states: ["All"], rate: "100", unit: "mL/10L water", whp: "Not applicable", stage: "Apply through knapsack or power sprayer at 10 L per 100 m² of surface area. Apply promptly after felling" }
      ]
    },
    {
      crop: "Freshly felled logs, poles and posts, sawn timber — Timber beetles",
      cropList: ["Timber", "Poles", "Posts"],
      weeds: [
        { weed: "Furniture beetles (F. Anobiidae), auger beetles (F. Bostrichidae), powderpost beetles (F. Lyctinae)", pestList: ["Furniture Beetles (F. Anobiidae)", "Auger Beetles (F. Bostrichidae)", "Powderpost Beetles (F. Lyctinae)"], states: ["All"], rate: "100", unit: "mL/10L water", whp: "Not applicable", stage: "For short term protection of freshly felled logs, poles and posts, and sawn timber including in situ timbers" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply spray treatment outdoors if rain is imminent"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Contact and residual insecticide", "Shake original container before use", "Do not store diluted insecticide"]
  },

  withholding: {
    harvest: "Not applicable — non-crop use",
    grazing: "Not applicable — non-crop use"
  },

  surfactant:     "Not required",
  sprayerCleanup: "Triple or preferably pressure rinse containers before disposal. Add rinsings to spray tank."
};
