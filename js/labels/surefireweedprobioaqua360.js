// ─────────────────────────────────────────────────────────────────────────────
// SUREFIRE WEEDPRO BIOAQUA 360 HERBICIDE — Label Data
// Herbicide | Liquid
// Source: Weedpro-Bio-Aqua 360_Label.pdf
// APVMA Approval No: 82251/109582
// Surefire
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['surefireweedprobioaqua360'] = {
  name:             "Surefire WeedPro BioAqua 360 Herbicide",
  company:          "Surefire",

  category:         "Herbicides",
  activeIngredient: "360 g/L Glyphosate (present as the isopropylamine salt)",
  group:            "Group M Herbicide",
  modeOfAction:     "Non-selective herbicide; inhibits EPSP synthase enzyme",
  formulation:      "Liquid",
  color:            "#92400e",
  apvma:            "82251/109582",
  labelPdf:         "Source labels/Weedpro-Bio-Aqua 360_Label.pdf",
  sdsPdf:           "SDS Labels/Weedpro_Bioaqua_360_Herbicide.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Herbicide",
    target: ["Annual and perennial weeds", "Aquatic weeds", "Brush and woody weeds"],
    timing: ["Post-emergent", "Pre-sowing"]
  },

  crops: [
    {
      crop: "Annual Weeds",
      cropList: ["Annual Weeds"],
      weeds: [
        { weed: "Amaranth, barley grass, barnyard grass, brome grass, caltrop, canary grass, capeweed, cereals, chickweed, cobbler's pegs, deadnettle, doublegee, fumitory, ground cherry, lesser swinecress, liverseed grass, mintweed, paradoxa grass, Paterson's curse, pigweed, potato weed, ryegrass, saffron thistle, spear thistle, spiny burrgrass, spurge, sub clover, thornapple, variegated thistle, wild mustard, wild oats, wild turnip, winter grass", pestList: ["Amaranth", "Barley Grass", "Barnyard Grass", "Brome Grass", "Caltrop", "Canary Grass", "Capeweed", "Cereals", "Chickweed", "Cobbler's Pegs", "Deadnettle", "Doublegee", "Fumitory", "Ground Cherry", "Lesser Swinecress", "Liverseed Grass", "Mintweed", "Paradoxa Grass", "Paterson's Curse", "Pigweed", "Potato Weed", "Ryegrass", "Saffron Thistle", "Spear Thistle", "Spiny Burrgrass", "Spurge", "Sub Clover", "Thornapple", "Variegated Thistle", "Wild Mustard", "Wild Oats", "Wild Turnip", "Winter Grass"], states: ["All"], rate: "2", rateMax: "3", unit: "L/ha", notes: "All weeds: spray actively growing plants. The taller the weed the higher the rate. As a guide use the higher rate when weeds are higher than 15 cm." }
      ]
    },
    {
      crop: "Bamboo",
      cropList: ["Bamboo"],
      weeds: [
        { weed: "Bamboo (Bambusa spp.)", pestList: ["Bamboo"], states: ["All"], rate: "5", rateMax: "10", unit: "mL/1L", notes: "Cut regrowth 1-2 m tall before treatment" }
      ]
    },
    {
      crop: "Bent Grass",
      cropList: ["Bent Grass"],
      weeds: [
        { weed: "Bent grass (Agrostis capillaris)", pestList: ["Bent Grass"], states: ["All"], rate: "2.5", rateMax: "2.5", unit: "L/ha", notes: "Boom 2.5 L/ha, Knapsack 75 mL/15L, Handgun 500 mL/100L" }
      ]
    },
    {
      crop: "Blady Grass",
      cropList: ["Blady Grass"],
      weeds: [
        { weed: "Blady grass (Imperata cylindrica)", pestList: ["Blady Grass"], states: ["All"], rate: "9", rateMax: "9", unit: "L/ha", notes: "Boom 9 L/ha, Knapsack 200 mL/15L, Handgun 1.3 L/100L" }
      ]
    },
    {
      crop: "Bracken",
      cropList: ["Bracken"],
      weeds: [
        { weed: "Bracken (Pteridium esculentum)", pestList: ["Bracken"], states: ["All"], rate: "9", rateMax: "9", unit: "L/ha", notes: "Boom 9 L/ha, Knapsack 225 mL/15L, Handgun 1.5 L/100L. Slash in Winter/Spring prior to treatment, apply March/May" }
      ]
    },
    {
      crop: "Carpet Grass",
      cropList: ["Carpet Grass"],
      weeds: [
        { weed: "Carpet grass (Axonopus spp.)", pestList: ["Carpet Grass"], states: ["All"], rate: "3", rateMax: "3", unit: "L/ha" }
      ]
    },
    {
      crop: "Cocksfoot",
      cropList: ["Cocksfoot"],
      weeds: [
        { weed: "Cocksfoot (Dactylis glomerata)", pestList: ["Cocksfoot"], states: ["All"], rate: "3", rateMax: "3", unit: "L/ha", notes: "Spray at early head stage" }
      ]
    },
    {
      crop: "Couch",
      cropList: ["Couch"],
      weeds: [
        { weed: "Couch (Cynodon dactylon)", pestList: ["Couch"], states: ["All"], rate: "9", rateMax: "9", unit: "L/ha", notes: "Spray at early head stage (late Spring)" }
      ]
    },
    {
      crop: "Flatweed/Cats Ear",
      cropList: ["Flatweed/Cats Ear"],
      weeds: [
        { weed: "Flatweed/Cats Ear (Hypochaeris radicata)", pestList: ["Flatweed/Cats Ear"], states: ["All"], rate: "3", rateMax: "3", unit: "L/ha", notes: "Spray at early flowering stage" }
      ]
    },
    {
      crop: "Glyceria",
      cropList: ["Glyceria"],
      weeds: [
        { weed: "Glyceria (Glyceria maxima)", pestList: ["Glyceria"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha", notes: "Apply at mature head stage, late summer/autumn. Only in dry drains/channels" }
      ]
    },
    {
      crop: "Guinea Grass",
      cropList: ["Guinea Grass"],
      weeds: [
        { weed: "Guinea grass (Panicum maximum)", pestList: ["Guinea Grass"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha" }
      ]
    },
    {
      crop: "Hoary Cress",
      cropList: ["Hoary Cress"],
      weeds: [
        { weed: "Hoary cress (Cardaria draba)", pestList: ["Hoary Cress"], states: ["All"], rate: "", rateMax: "", unit: "", notes: "Spray late rosette to flowering stage, July-September" }
      ]
    },
    {
      crop: "Johnson Grass",
      cropList: ["Johnson Grass"],
      weeds: [
        { weed: "Johnson grass (Sorghum halepense)", pestList: ["Johnson Grass"], states: ["All"], rate: "9", rateMax: "9", unit: "L/ha", notes: "Spray at early head stage" }
      ]
    },
    {
      crop: "Kangaroo Grass",
      cropList: ["Kangaroo Grass"],
      weeds: [
        { weed: "Kangaroo grass (Themeda australis)", pestList: ["Kangaroo Grass"], states: ["All"], rate: "1.5", rateMax: "1.5", unit: "L/ha" }
      ]
    },
    {
      crop: "Kikuyu",
      cropList: ["Kikuyu"],
      weeds: [
        { weed: "Kikuyu (Pennisetum clandestinum)", pestList: ["Kikuyu"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha" }
      ]
    },
    {
      crop: "Lovegrass, African",
      cropList: ["Lovegrass, African"],
      weeds: [
        { weed: "Lovegrass, African (Eragrostis curvula)", pestList: ["Lovegrass, African"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha" }
      ]
    },
    {
      crop: "Ludwigia Peruviana",
      cropList: ["Ludwigia Peruviana"],
      weeds: [
        { weed: "Ludwigia peruviana", pestList: ["Ludwigia Peruviana"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/15L" }
      ]
    },
    {
      crop: "Nutgrass",
      cropList: ["Nutgrass"],
      weeds: [
        { weed: "Nutgrass (Cyperus rotundus)", pestList: ["Nutgrass"], states: ["All"], rate: "3", rateMax: "3", unit: "L/ha per application", notes: "Split application (apply 3+3 L/ha). Spray when 20-25% have headed" }
      ]
    },
    {
      crop: "Pampas Grass",
      cropList: ["Pampas Grass"],
      weeds: [
        { weed: "Pampas grass (Cortaderia spp.)", pestList: ["Pampas Grass"], states: ["All"], rate: "150", rateMax: "195", unit: "mL/15L", notes: "Spray during Spring/Summer/Autumn" }
      ]
    },
    {
      crop: "Paragrass",
      cropList: ["Paragrass"],
      weeds: [
        { weed: "Paragrass (Brachiaria mutica)", pestList: ["Paragrass"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha", notes: "Apply at early head stage" }
      ]
    },
    {
      crop: "Paspalum",
      cropList: ["Paspalum"],
      weeds: [
        { weed: "Paspalum (Paspalum dilatatum)", pestList: ["Paspalum"], states: ["All"], rate: "9", rateMax: "9", unit: "L/ha" }
      ]
    },
    {
      crop: "Pellitory",
      cropList: ["Pellitory"],
      weeds: [
        { weed: "Pellitory (Parietaria judaica)", pestList: ["Pellitory"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/15L" }
      ]
    },
    {
      crop: "Phalaris",
      cropList: ["Phalaris"],
      weeds: [
        { weed: "Phalaris (Phalaris aquatica)", pestList: ["Phalaris"], states: ["All"], rate: "3", rateMax: "6", unit: "L/ha" }
      ]
    },
    {
      crop: "Plantains",
      cropList: ["Plantains"],
      weeds: [
        { weed: "Plantains (Plantago spp.)", pestList: ["Plantains"], states: ["All"], rate: "3", rateMax: "3", unit: "L/ha" }
      ]
    },
    {
      crop: "Prairie Grass",
      cropList: ["Prairie Grass"],
      weeds: [
        { weed: "Prairie grass (Bromus unioloides)", pestList: ["Prairie Grass"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha" }
      ]
    },
    {
      crop: "Queensland Blue Grass",
      cropList: ["Queensland Blue Grass"],
      weeds: [
        { weed: "Queensland blue grass (Dichanthium sericeum)", pestList: ["Queensland Blue Grass"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha" }
      ]
    },
    {
      crop: "Red-Leg Grass",
      cropList: ["Red-Leg Grass"],
      weeds: [
        { weed: "Red-leg grass (Bothriochloa macra)", pestList: ["Red-Leg Grass"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha" }
      ]
    },
    {
      crop: "Rhodes Grass",
      cropList: ["Rhodes Grass"],
      weeds: [
        { weed: "Rhodes grass (Chloris gayana)", pestList: ["Rhodes Grass"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha" }
      ]
    },
    {
      crop: "Rope Twitch",
      cropList: ["Rope Twitch"],
      weeds: [
        { weed: "Rope Twitch (Agropyron repens)", pestList: ["Rope Twitch"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha" }
      ]
    },
    {
      crop: "Silverleaf Nightshade",
      cropList: ["Silverleaf Nightshade"],
      weeds: [
        { weed: "Silverleaf Nightshade (Solanum elaeagnifolium)", pestList: ["Silverleaf Nightshade"], states: ["All"], rate: "300", rateMax: "300", unit: "mL/15L" }
      ]
    },
    {
      crop: "Sorrel",
      cropList: ["Sorrel"],
      weeds: [
        { weed: "Sorrel (Rumex acetosella)", pestList: ["Sorrel"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha", notes: "Spray at flowering stage" }
      ]
    },
    {
      crop: "Soursob",
      cropList: ["Soursob"],
      weeds: [
        { weed: "Soursob (Oxalis pes-caprae)", pestList: ["Soursob"], states: ["All"], rate: "1.5", rateMax: "1.5", unit: "L/ha", notes: "Spray when 20-50% headed" }
      ]
    },
    {
      crop: "St John's Wort",
      cropList: ["St John's Wort"],
      weeds: [
        { weed: "St John's Wort (Hypericum perforatum)", pestList: ["St John's Wort"], states: ["All"], rate: "3", rateMax: "3", unit: "L/ha", notes: "Spray at flowering to berry stage" }
      ]
    },
    {
      crop: "Thistle, Artichoke",
      cropList: ["Thistle, Artichoke"],
      weeds: [
        { weed: "Thistle, Artichoke (Cynara cardunculus)", pestList: ["Thistle, Artichoke"], states: ["All"], rate: "3", rateMax: "3", unit: "L/ha", notes: "Spray at bud stage" }
      ]
    },
    {
      crop: "Thistle, Californian",
      cropList: ["Thistle, Californian"],
      weeds: [
        { weed: "Thistle, Californian (Cirsium arvense)", pestList: ["Thistle, Californian"], states: ["All"], rate: "6", rateMax: "6", unit: "L/ha", notes: "Spray flowering to post-flowering Summer/Autumn" }
      ]
    },
    {
      crop: "Yorkshire Fog",
      cropList: ["Yorkshire Fog"],
      weeds: [
        { weed: "Yorkshire fog (Holcus lanatus)", pestList: ["Yorkshire Fog"], states: ["All"], rate: "3", rateMax: "3", unit: "L/ha" }
      ]
    },
    {
      crop: "Brush and Woody Weeds",
      cropList: ["Brush and Woody Weeds"],
      weeds: [
        { weed: "Bitou Brush/Boneseed, Blackberry, Boxthorn African, Gorse/Furze, Groundsel Bush, Hawthorn, Lantana, Mistflower, Sifton Bush/Chinese Scrub, Sweet Briar", pestList: ["Bitou Brush/Boneseed", "Blackberry", "Boxthorn African", "Gorse/Furze", "Groundsel Bush", "Hawthorn", "Lantana", "Mistflower", "Sifton Bush/Chinese Scrub", "Sweet Briar"], states: ["All"], rate: "5", rateMax: "20", unit: "mL/L", notes: "Bitou Brush/Boneseed 5-10 mL/L; Blackberry 10-13 mL/L (apply Jan-May flowering to leaf fall); Boxthorn African 7-10 mL/L; Gorse/Furze 10 mL/L plus organosilicone penetrant; Groundsel Bush 7-10 mL/L; Hawthorn 10-13 mL/L; Lantana 10 mL/L; Mistflower 5 mL/L; Sifton Bush 10-13 mL/L; Sweet Briar 15-20 mL/L" }
      ]
    },
    {
      crop: "Unwanted Trees - Stem Injection",
      cropList: ["Unwanted Trees - Stem Injection"],
      weeds: [
        { weed: "Flooded Gum, Ghost Gum, Gum Topped Bloodwood, Messmate Stringybark, Narrowleaf Ironbark, Poplar Box, Privet, Rhus, Silverleaf Ironbark, Swamp Mahogany, White Mahogany, Willows, Camphor Laurel", pestList: ["Flooded Gum", "Ghost Gum", "Gum Topped Bloodwood", "Messmate Stringybark", "Narrowleaf Ironbark", "Poplar Box", "Privet", "Rhus", "Silverleaf Ironbark", "Swamp Mahogany", "White Mahogany", "Willows", "Camphor Laurel"], states: ["All"], rate: "", rateMax: "", unit: "", notes: "Stem injection method" }
      ]
    },
    {
      crop: "Unwanted Trees - Foliar Low Volume",
      cropList: ["Unwanted Trees - Foliar Low Volume"],
      weeds: [
        { weed: "Bullich, Marri, Jarrah, other Eucalyptus spp.", pestList: ["Bullich", "Marri", "Jarrah", "Eucalyptus spp."], states: ["All"], rate: "", rateMax: "", unit: "", notes: "Foliar low volume application" }
      ]
    }
  ],

  restraints: [
    "DO NOT apply under conditions that could cause spray drift onto nearby susceptible plants, adjacent crops, crop lands or pastures",
    "Avoid contact with foliage, green stems or fruit of crops, desirable plants and trees",
    "DO NOT contaminate dams, rivers or streams with the product or used container",
    "DO NOT store in galvanised steel or unlined steel containers"
  ],

  compatibility: {
    compatible:   ["Residual herbicides"],
    incompatible: [],
    notes:        ["Tank-mix compatible with residual herbicides as per label recommendations"]
  },

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "1 day annual weeds; 7 days perennial weeds"
  },

  surfactant:     "Organosilicone penetrant (200 mL/100L) recommended for certain perennial weeds (carpet grass, couch, glyceria, gorse). Non-ionic surfactant may improve control in some situations.",
  sprayerCleanup: "Use only plastic or plastic-lined stainless steel, aluminium, copper, brass or fibreglass containers. Triple or preferably pressure rinse containers before disposal."
};
