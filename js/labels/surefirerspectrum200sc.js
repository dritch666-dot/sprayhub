// ─────────────────────────────────────────────────────────────────────────────
// SUREFIRE SPECTRUM 200SC INSECTICIDE — Label Data
// Insecticide | Suspension Concentrate
// Source: PCT_Holdings_Surefire_Spectrum_200sc_Insecticide_Label.pdf
// APVMA Approval No: 60124/0909
// PCT Holdings Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['surefirerspectrum200sc'] = {
  name:             "Surefire Spectrum 200SC Insecticide",
  company: "Surefire",

  category:         "Insecticides",
  activeIngredient: "200 g/L Imidacloprid",
  group:            "Group 4A Insecticide",
  modeOfAction:     "Neonicotinoid insecticide; acts on insect nervous system causing paralysis and death",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#4c1d95",
  apvma:            "60124",
  labelPdf:         "Source labels/Pct_Holdings_Surefire_Spectrum_200sc_Insecticide_Label.pdf",
  sdsPdf:           "SDS Labels/Surefire_Spectrum_200_SC_Insecticide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Insecticide",
    target: ["Aphids", "Mirids", "Flea beetles", "Scale insects", "Termites"],
    timing: ["Pre-emergent application to buds for management of termites"]
  },

  crops: [
    {
      crop: "Cotton",
      cropList: ["Cotton"],
      weeds: [
        { weed: "Aphids", pestList: ["Aphids"], states: ["All"], rate: "250", unit: "mL/ha", stage: "Early in establishment of aphid infestation", note: "The addition of Reactor Penetrant or equivalent is critical for the performance of Surefire Spectrum 200SC Insecticide. Apply early in the establishment of an aphid infestation when numbers are low (ie no more than 1 or 2 leaves per plant with honeydew present). Applications made later than this may result in reduced control. Shorter residual control may be evident and a repeat application of a registered aphicide (follow the Cotton Insecticide Resistance Management Strategy for cotton aphid) may be required to achieve complete control. Aphids treated with Surefire Spectrum 200SC Insecticide plus Reactor or equivalent may still be present on the plant but will not be feeding. Control of aphids should initially be assessed by a reduction in fresh honeydew and not on the presence of aphids on the plant. After ingesting Surefire Spectrum 200SC Insecticide, aphids may take up to 5 days to die. WHP: 13 weeks." },
        { weed: "Mirids, Brown flea beetle", pestList: ["Mirids","Brown Flea Beetle"], states: ["All"], rate: "250", unit: "mL/ha", stage: "When pest numbers reach treatment threshold levels", note: "Apply when pest numbers reach treatment threshold levels as determined by field checks. WHP: 13 weeks." }
      ]
    },
    {
      crop: "Stone fruit",
      cropList: ["Stone Fruit"],
      weeds: [
        { weed: "Green peach aphid, Black peach aphid", pestList: ["Green Peach Aphid","Black Peach Aphid"], states: ["All"], rate: "25", unit: "mL/100L", stage: "At first sign of aphid infestation", note: "Apply at first sign of aphid infestation. Apply as a full cover spray, ensuring thorough coverage. Apply by dilute or concentrate spraying equipment. Apply the same total amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Do not use in equipment that requires rates greater than 125 mL/100 L of water. WHP: 21 days." }
      ]
    },
    {
      crop: "Apples",
      cropList: ["Apples"],
      weeds: [
        { weed: "Woolly aphid", pestList: ["Woolly Aphid"], states: ["All"], rate: "12", unit: "mL/1L water/tree", stage: "Chemical control, for trees up to 7 years of age", note: "For application method, see General Instructions. If aerial colonies are present at application, maximum effectiveness may not be achieved until the following season. Do not treat more than once in any 3 year period." }
      ]
    },
    {
      crop: "Cucurbits",
      cropList: ["Cucurbits"],
      weeds: [
        { weed: "Green peach aphid", pestList: ["Green Peach Aphid"], states: ["All"], rate: "25", unit: "mL/100L", stage: "At first sign of aphid infestation", note: "Apply at first sign of aphid infestation. WHP: 1 day." }
      ]
    },
    {
      crop: "Capsicum, Egg plant, Potato, Tomato",
      cropList: ["Capsicum","Egg Plant","Potato","Tomato"],
      weeds: [
        { weed: "Green peach aphid", pestList: ["Green Peach Aphid"], states: ["All"], rate: "25", unit: "mL/100L", stage: "At first sign of aphid infestation", note: "Apply at first sign of aphid infestation. WHP: Capsicum 3 days. Egg plant 1 day. Potato 7 days. Tomato 3 days." }
      ]
    },
    {
      crop: "Brassicas",
      cropList: ["Brassicas"],
      weeds: [
        { weed: "Grey cabbage aphid, Turnip aphid", pestList: ["Grey Cabbage Aphid","Turnip Aphid"], states: ["All"], rate: "25", unit: "mL/100L", stage: "At first sign of aphid infestation", note: "Apply at first sign of aphid infestation. Add a wetting agent. WHP: 7 days." }
      ]
    },
    {
      crop: "Sweet potato, Cucumber, Egg plant",
      cropList: ["Sweet Potato","Cucumber","Egg Plant"],
      weeds: [
        { weed: "Silverleaf whitefly, including type B, Melon thrips", pestList: ["Silverleaf Whitefly","Melon Thrips"], states: ["All"], rate: "25", unit: "mL/100L", stage: "At first sign of whitefly or melon thrips infestation", note: "Apply at first sign of whitefly or melon thrips infestation. Apply dilute sprays (25 mL/100 L) to run off. Ensure thorough coverage of underside of leaves. Use of droppers will improve coverage of underside of leaves. WHP: Sweet potato 7 days. Cucumber 1 day. Egg plant 7 days." }
      ]
    },
    {
      crop: "Turf",
      cropList: ["Turf"],
      weeds: [
        { weed: "First instar larvae of African black beetle, Argentinian scarab, Pruinose scarab", pestList: ["African Black Beetle","Argentinian Scarab","Pruinose Scarab"], states: ["All"], rate: "2.5", unit: "L/ha", stage: "Peak egg hatch, mid spring to mid summer", note: "Apply at peak egg hatch, which is mid spring to mid summer depending on species. Spray with at least 400 L water per hectare to ensure even coverage. Preferably spray on to wet or damp grass. Irrigate with 12 mm of water commencing within one hour of application." },
        { weed: "Larvae of wet or damp grass billbug", pestList: ["Billbug"], states: ["All"], rate: "2.5", unit: "L/ha", stage: "Late spring and early summer", note: "Monitor adult activity through late spring and early summer. Spray when numbers peak, when small larvae (4 mm) are found in the thatch or surface soil. Early application is essential to minimise grass damage due to feeding." }
      ]
    },
    {
      crop: "Roses, Ornamental plants",
      cropList: ["Roses","Ornamental Plants","Ornamentals"],
      weeds: [
        { weed: "Aphids, Azalea lace bug, Bronze orange bug, Harlequin bug, Citrus mealybug, Greenhouse thrips, Fullers rose weevil", pestList: ["Aphids","Azalea Lace Bug","Bronze Orange Bug","Harlequin Bug","Citrus Mealybug","Greenhouse Thrips","Fullers Rose Weevil"], states: ["All"], rate: "25", unit: "mL/100L", stage: "At first sign of insect infestation", note: "Apply as a thorough cover spray at first sign of insect infestation." },
        { weed: "Hibiscus flower beetle", pestList: ["Hibiscus Flower Beetle"], states: ["All"], rate: "50", unit: "mL/100L", stage: "When present", note: "Spray buds and flowers as needed." },
        { weed: "Longtailed mealybug", pestList: ["Longtailed Mealybug"], states: ["All"], rate: "50", unit: "mL/100L", stage: "At first sign", note: "Apply 3 sprays 2 weeks apart. Use a non-ionic surfactant at label rate." },
        { weed: "Psyllids", pestList: ["Psyllids"], states: ["All"], rate: "25", unit: "mL/100L", stage: "At first sign", note: "Spray at first sign and then a week later." },
        { weed: "Soft scales", pestList: ["Soft Scales"], states: ["All"], rate: "25", unit: "mL/100L", stage: "When small scales first seen", note: "Spray in late spring or when small scales are first seen. Apply 3 sprays 2 weeks apart. Add a wetting agent." }
      ]
    },
    {
      crop: "Termite management — Pre-construction and post-construction",
      cropList: ["Termite Management"],
      weeds: [
        { weed: "Subterranean termites (except Mastotermes)", pestList: ["Subterranean Termites"], states: ["All"], rate: "40", unit: "mL/100L", stage: "Pre-construction or post-construction treatment", note: "Commercial use has shown that a correctly administered application of Surefire Spectrum 200SC can deter concealed entry by subterranean termites (except Mastotermes) for at least two years and Mastotermes for at least one year. Regular competent inspection is recommended as part of an ongoing termite management programme. Inspections should be carried out at least annually and concurrently, efforts be made to eliminate termite colonies in the area. Re-inspection within 3 months of treatment is recommended." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply more than specified rates",
    "Dangerous to bees - refer to protection requirements",
    "DO NOT contaminate waterways with spray drift"
  ],

  compatibility: {
    compatible:   [],
    incompatible: [],
    notes:        ["Check compatibility with tank mix partners before mixing commercial quantities"]
  },

  withholding: {
    harvest: "Apples: Not required when used as directed. Cotton: 13 weeks. Cucurbits: 1 day. Tomatoes: 3 days. Brassicas, Capsicum, Egg plant, Potatoes, Sweet Potatoes: see individual crop WHPs. Stone Fruit: 21 days.",
    grazing: "DO NOT graze any treated area, or cut for stock food. DO NOT feed produce harvested from treated area to animals, including poultry."
  },

  surfactant:     "May improve control under certain conditions",
  sprayerCleanup: "Flush sprayer thoroughly after use"
};
