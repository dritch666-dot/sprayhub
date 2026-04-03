// ─────────────────────────────────────────────────────────────────────────────
// GP FLUPROPANATE GRANULAR HERBICIDE — Label Data
// Granular Herbicide | Granular Formulation
// Source: GP_Flupropanate_Granular_Herbicide.pdf
// APVMA Approval No: 61689/140935
// Granular Products Assets Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['gpflupropanategranular'] = {
  name:             "GP Flupropanate Granular Herbicide",
  company: "Trecora",

  category:         "Herbicides",
  activeIngredient: "86.9 g/kg Flupropanate (sodium salt)",
  group:            "Group 0 Herbicide",
  modeOfAction:     "Inhibitor of fat synthesis - alkonic acid herbicide",
  formulation:      "Granular (GR)",
  color:            "#991b1b",
  apvma:            "61689",
  labelPdf:         "Source labels/Granular_Products_Assets_Gp_Flupropanate_Granular_Herbicide_Label.pdf",
  sdsPdf:           "SDS Labels/GP_Flupropanate_Granular_Herbicide.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Herbicide",
    target: ["Serrated Tussock", "Giant Parramatta Grass", "Giant Rats Tail Grass", "Chilean Needle Grass", "African Lovegrass"],
    timing: ["February to December"]
  },

  crops: [
    {
      crop: "Industrial use",
      cropList: ["Industrial Use"],
      weeds: [
        { weed: "Paspalum, Kikuyu grass, Couch", pestList: ["Paspalum","Kikuyu Grass","Couch"], states: ["Tas", "WA", "SA", "Vic"], rate: "67.5", rateMax: "67.5", unit: "kg/ha", stage: "Active growth", note: "Apply February to December inclusive. Spot Application: Apply all year round" },
        { weed: "African Feathergrass (Pennisetum macrourum)", pestList: ["African Feathergrass"], states: ["Tas", "WA"], rate: "67.5", rateMax: "67.5", unit: "kg/ha", stage: "Active growth", note: "Apply February to December inclusive. Spot Application: Apply all year round" }
      ]
    },
    {
      crop: "Pastures and non-crop situations",
      cropList: ["Pastures","Pastures And Non-Crop Situations"],
      weeds: [
        { weed: "Weedy Sporobolus species such as Parramatta grass (Sporobolus africanus), Giant Parramatta Grass (Sporobolus fertilis), Giant Rat's Tail grasses (Sporobolus pyramidalis and Sporobolus natalensis)", pestList: ["Parramatta Grass Species","Sporobolus Species","Giant Parramatta Grass","Giant Rats Tail Grass"], states: ["All"], rate: "15", rateMax: "15", unit: "kg/ha", stage: "Active growth", note: "To obtain better herbicide selectivity and less damage to desirable pasture species, apply when the pasture is dormant, semi-dormant. For example in NSW, the optimum application time is autumn and early spring. DO NOT apply in severe droughts or to weeds retarded by burning. Spot Application: Apply all year round." },
        { weed: "African Lovegrass (Eragrostis curvula)", pestList: ["African Lovegrass"], states: ["All"], rate: "22.5", rateMax: "22.5", unit: "kg/ha", stage: "Active growth", note: "Apply February to December inclusive. Refer to Critical Comments as for Serrated Tussock. Spot Application: Apply all year round." },
        { weed: "Coolatai Grass (Small patchy infestations) (Hyparrhenia spp.)", pestList: ["Coolatai Grass"], states: ["NSW", "Qld", "Vic", "SA", "WA"], rate: "22.5", rateMax: "22.5", unit: "kg/ha", stage: "Winter-spring", note: "Apply in winter and spring between the months of April and October. SUPPRESSION ONLY: Graze to reduce cover of desirable species before application. Desirable pasture species such as phalaris, cocksfoot, ryegrass, red and white clovers, subterranean clovers and lucerne must not be sown until at least 100 mm of leaching rain has fallen. If drought conditions prevail defer sowing until next season. Spot Application: Apply all year round." },
        { weed: "Serrated Tussock (Nassella trichotoma)", pestList: ["Serrated Tussock"], states: ["All"], rate: "15", rateMax: "15", unit: "kg/ha", stage: "Vegetative", note: "Apply February to December inclusive. Graze to reduce cover of desirable species before application. Desirable pasture species such as phalaris, cocksfoot, ryegrass, red and white clovers, subterranean clovers and lucerne must not be sown until at least 100 mm of leaching rain has fallen. If drought conditions prevail defer sowing until next season. Timing: Ideally, apply GP Flupropanate during the vegetative stage of growth of Serrated tussock to allow sufficient time for herbicide to take effect prior to flowering. This may be at least 3 months before flowering, depending on rainfall. Spot Application: Apply all year round." },
        { weed: "Cane grass/Thatch grass, Jaragua grass", pestList: ["Cane Grass","Thatch Grass","Jaragua Grass"], states: ["Qld"], rate: "22.5", rateMax: "22.5", unit: "kg/ha", stage: "Active growth", note: "Apply February to December inclusive. Spot Application: Apply all year round." }
      ]
    },
    {
      crop: "Urban open space, woodlands, roadsides, nature reserves, pastures and non-crop situations",
      cropList: ["Urban Spaces","Woodlands","Roadsides","Nature Reserves"],
      weeds: [
        { weed: "Needle grasses (Nassella neesiana, N. leucotricha, N. hyalina, N. charruana, N. tenuissima)", pestList: ["Needle Grasses","Chilean Needle Grass"], states: ["All"], rate: "22.5", rateMax: "22.5", unit: "kg/ha", stage: "Active growth", note: "Apply February to December inclusive. Apply to actively growing and stress free plants. Graze to reduce cover of desirable species before application. Desirable pasture species such as phalaris, cocksfoot, ryegrass, red and white clovers, subterranean clovers and lucerne must not be sown until at least 100 mm of leaching rain has fallen. If drought conditions prevail defer sowing until next season. Spot Application: Apply all year round." }
      ]
    },
    {
      crop: "Commercial Forestry (Araucaria, Corymbia, Eucalyptus and Pinus species)",
      cropList: ["Commercial Forestry"],
      weeds: [
        { weed: "Serrated Tussock (Nassella trichotoma), Sporobolus sp. (Giant Rat's Tail Grass, Giant Parramatta grass)", pestList: ["Serrated Tussock","Sporobolus Species"], states: ["All"], rate: "15", rateMax: "15", unit: "kg/ha", stage: "Active growth", note: "Apply February to December inclusive. Optimal control of invasive grasses will be achieved with aerial control and when canopy has not fully enclosed. Best results with light to medium canopies. Spot Application: Apply all year round." },
        { weed: "African Love Grass (Eragrostis curvula), Needle grasses (Nassella sp.)", pestList: ["African Lovegrass","Needle Grasses"], states: ["All"], rate: "22.5", rateMax: "22.5", unit: "kg/ha", stage: "Active growth", note: "Spot Application: Apply all year round." }
      ]
    },
    {
      crop: "Non Crop Situations",
      cropList: ["Non Crop Situations"],
      weeds: [
        { weed: "Paspalum, Couch, Kikuyu grass", pestList: ["Paspalum","Couch","Kikuyu Grass"], states: ["Qld", "NSW", "WA"], rate: "67.5", rateMax: "67.5", unit: "kg/ha", stage: "Active growth", note: "Apply February to December inclusive. Spot Application: Apply all year round" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply near desirable susceptible trees - damage to seedling trees possible",
    "DO NOT allow drift onto susceptible crops or ornamentals",
    "DO NOT apply in dry winters, severe droughts or to weeds retarded by burning",
    "DO NOT apply onto desirable perennial or annual grasses (phalaris, ryegrass, tall fescue)",
    "DO NOT apply in areas where granules are accessible to the general public",
    "DO NOT use dust-prone application methods"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["GP Flupropanate Granular Herbicide should be applied alone."]
  },

  withholding: {
    harvest: "Not applicable - non-food use",
    grazing: "14 days after grazing/cutting; 4 months after blanket treatment for slaughter"
  },

  surfactant:     "",
  sprayerCleanup: "Equipment should be cleaned after use. Do not dispose of undiluted chemicals on site."
};
