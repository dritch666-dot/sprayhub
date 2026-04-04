// ─────────────────────────────────────────────────────────────────────────────
// ADAMA GRINDSTONE® HERBICIDE — Label Data
// Aminopyralid Herbicide (240 g/L Aminopyralid, present as the triisopropanolamine salt)
// Source: Adama_Grindstone_Label.pdf
// APVMA Approval No: 91978/134072
// Adama Australia
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['adamagrindstone'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Adama Grindstone® Herbicide",

  category:         "Herbicides",
  activeIngredient: "240 g/L Aminopyralid (present as the triisopropanolamine salt)",
  group:            "Group 4 Herbicide (Synthetic Auxin)",
  modeOfAction:     "Plant cell growth disruptor (synthetic auxin). Causes abnormal growth, distortion and death of susceptible broadleaf weeds.",
  formulation:      "Soluble Concentrate (SL)",
  color:            "#16a34a",
  apvma:            "91978/134072",
  company:          "Adama",
  labelPdf:         "Source labels/Adama_Grindstone_Label.pdf",
  sdsPdf:           "SDS Labels/Adama_Grindstone_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Broadleaf Weeds", "Thistles", "Docks", "Climbing Buckwheat"],
    timing: ["Post-emergence seedling to 6-8 leaf stage", "Apply from 3 leaf to early jointing"]
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply to crops or weeds which are not actively growing or to plants stressed by prolonged periods of extreme cold, moisture stress or previous herbicide treatment.",
    "When treatment followed by severe stress such as drought, prolonged cold, waterlogging or frost, growth retardation may occur. Crops normally recover without loss of yield.",
    "DO NOT spray if rain likely within 1 hour or if foliage wet or heavy rain likely within 48 hours.",
    "DO NOT burn off, cut or clear blackberry or other woody weeds for at least 6 months after spraying.",
    "AVOID double overlaps to reduce risk of injury to rotational crops the following season.",
    "DO NOT sow susceptible crops into paddocks treated the previous season until required plantback period has elapsed.",
    "In areas prone to flooding, commence treatment after annual flooding as flooded areas within 9 months may have reduced results.",
    "For tank mixtures with Flagship 400 EC: DO NOT apply by boom sprayer with droplets smaller than medium spray droplet size; DO NOT apply by aerial application.",
    "For tank mixtures with Metsulfuron-methyl: DO NOT use on furrow or flood irrigated crops; DO NOT store tank mix, apply immediately after preparing; DO NOT apply before three-leaf stage; DO NOT treat newly sown pastures; DO NOT use on pasture seed crops; DO NOT apply more than one application per season; DO NOT apply to blackberry with mature fruit; DO NOT use in winter cereals undersown with legume pasture species; DO NOT use in grass pasture containing legume species; DO NOT apply other sulfonylurea herbicides in tank mix as preplant application.",
    "Use of product on land with soil pH 5.5 or less may result in crop retardation, particularly if crop stressed.",
    "DO NOT apply to wheat varieties King, Jacup, Miling and Harrier or durum wheat varieties.",
    "Care should be taken if applying GRINDSTONE + Metsulfuron-methyl in same season to crop already treated with another sulfonylurea herbicide.",
    "DO NOT allow bystanders to contact spray cloud.",
    "DO NOT apply in manner causing unacceptable impact to native vegetation, agricultural crops, landscaped gardens or aquaculture production.",
    "DO NOT apply unless wind speed between 3 and 20 kilometres per hour at application site.",
    "DO NOT apply if hazardous surface temperature inversion conditions present at application site."
  ],

  surfactant: "BS-1000 at 0.1% or equivalent wetting agent. Uptake® Spraying Oil recommended for some applications.",

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── CEREALS + FLAGSHIP 400 ──
    {
      crop: "Wheat, Barley, Oats, Triticale (Northern NSW and QLD only)",
      cropList: ["Wheat", "Barley", "Oats", "Triticale"],
      weeds: [
        {
          weed: "Climbing Buckwheat (black bindweed), Prickly Lettuce, Vetch, Volunteer Chickpea, Volunteer Faba Bean, Volunteer Field Pea",
          pestList: ["Climbing Buckwheat", "Prickly Lettuce", "Vetch", "Volunteer Chickpea", "Volunteer Faba Bean", "Volunteer Field Pea"],
          states: ["All"],
          rate: "20",
          rateMax: "32",
          unit: "mL/ha",
          stage: "Seedling up to 2-4 leaf (or up to 6-8 leaf)",
          note: "Apply from 3 leaf to first node (Z13 to Z31). Use higher rate on larger weeds (6-8 leaf)."
        },
        {
          weed: "Common Sowthistle, Deadnettle, Wireweed",
          pestList: ["Common Sowthistle", "Deadnettle", "Wireweed"],
          states: ["All"],
          rate: "20",
          rateMax: "32",
          unit: "mL/ha",
          stage: "Seedling up to 2-4 leaf (or up to 6-8 leaf)",
          note: "Apply from 3 leaf to first node (Z13 to Z31). DO NOT use in oats. Add BS-1000 or alternative at 0.1%. Mixture will also control non-ALS resistant weeds such as mustards, turnip weed, volunteer canola and wild turnip."
        },
        {
          weed: "Flax-leaf Fleabane",
          pestList: ["Flax-leaf Fleabane"],
          states: ["All"],
          rate: "32",
          rateMax: "32",
          unit: "mL/ha",
          stage: "Up to 6-8 leaf",
          note: "Apply from 3 leaf to first node (Z13 to Z31)."
        },
        {
          weed: "Wild Oats (Avena sterilis, Avena fatua, non-fop resistant)",
          pestList: ["Wild Oats"],
          states: ["Northern NSW and QLD only"],
          rate: "20",
          rateMax: "32",
          unit: "mL/ha",
          stage: "2 to 4 leaf",
          note: "Apply from 3 leaf to first node (Z13 to Z31). Add Uptake Spraying Oil at 0.5%. Refer to MANDATE label for adjuvant recommendations."
        }
      ]
    },

    // ── CEREALS + METSULFURON-METHYL (Northern NSW, QLD) ──
    {
      crop: "Winter Cereals - Wheat, Barley, Triticale, Cereal Rye (Northern NSW, QLD)",
      cropList: ["Wheat", "Barley", "Triticale", "Cereal Rye"],
      weeds: [
        {
          weed: "African Turnip Weed, Deadnettle, Volunteer Chickpea, Chicory, Subterranean Clover, Indian Hedge Mustard, Medic, Slender Celery, Stagger Weed, Wild Turnip",
          pestList: ["African Turnip Weed", "Deadnettle", "Volunteer Chickpea", "Chicory", "Subterranean Clover", "Indian Hedge Mustard", "Medic", "Slender Celery", "Stagger Weed", "Wild Turnip"],
          states: ["Northern NSW", "QLD"],
          rate: "16",
          rateMax: "16",
          unit: "mL/ha",
          stage: "Up to 6 leaf",
          note: "Apply from 3 leaf up to 1st node stage (Z13-Z31). Weed growth stage: apply when weeds are small (not greater than 5 cm height/diameter) and actively growing. Always add BS-1000 at 0.1% or alternative."
        },
        {
          weed: "Volunteer Faba Bean",
          pestList: ["Volunteer Faba Bean"],
          states: ["Northern NSW", "QLD"],
          rate: "16",
          rateMax: "16",
          unit: "mL/ha",
          stage: "Up to the 3 node",
          note: "Apply from 3 leaf up to 1st node stage (Z13-Z31). Always add BS-1000 at 0.1% or alternative."
        },
        {
          weed: "Boggabri Weed, Climbing Buckwheat, New Zealand Spinach",
          pestList: ["Boggabri Weed", "Climbing Buckwheat", "New Zealand Spinach"],
          states: ["Northern NSW", "QLD"],
          rate: "16",
          rateMax: "22",
          unit: "mL/ha",
          stage: "Up to 10 cm diameter (or up to 4 leaf)",
          note: "Apply from 3 leaf up to 1st node (Z13-Z31). Use higher rate on rosette stage plants. Always add BS-1000 at 0.1% or alternative."
        },
        {
          weed: "Broadleaf Dock, Parthenium Weed, Prickly Lettuce, Spiny Emex (Doublegee)",
          pestList: ["Broadleaf Dock", "Parthenium Weed", "Prickly Lettuce", "Spiny Emex"],
          states: ["Northern NSW", "QLD"],
          rate: "16",
          rateMax: "22",
          unit: "mL/ha",
          stage: "Up to 4-6 leaf",
          note: "Apply from 3 leaf up to 1st node (Z13-Z31). Use higher rate on larger weeds. Always add BS-1000 at 0.1% or alternative."
        },
        {
          weed: "Hogweed (Wireweed), Red Pigweed, Saltbush, Volunteer Sunflower",
          pestList: ["Hogweed", "Red Pigweed", "Saltbush", "Volunteer Sunflower"],
          states: ["Northern NSW", "QLD"],
          rate: "16",
          rateMax: "22",
          unit: "mL/ha",
          stage: "Up to 3-6 leaf",
          note: "Apply from 3 leaf up to 1st node (Z13-Z31). Use higher rate on larger weeds and heavy weed pressures. Always add BS-1000 at 0.1% or alternative."
        },
        {
          weed: "Turnip Weed",
          pestList: ["Turnip Weed"],
          states: ["Northern NSW", "QLD"],
          rate: "16",
          rateMax: "16",
          unit: "mL/ha",
          stage: "4 to 6 leaf stage",
          note: "Apply from 4 leaf through to the start of jointing (Z14-Z30). Tank mix with LVE MCPA 570 at 420 mL/ha."
        },
        {
          weed: "Saffron Thistle Weed, Variegated Thistle",
          pestList: ["Saffron Thistle Weed", "Variegated Thistle"],
          states: ["Northern NSW", "QLD"],
          rate: "16",
          rateMax: "16",
          unit: "mL/ha",
          stage: "Rosette to early growth",
          note: "Apply from 5 leaf through to the start of jointing (Z15-Z30). Tank mix with LVE MCPA 570 at 1 L/ha."
        },
        {
          weed: "Climbing Buckwheat",
          pestList: ["Climbing Buckwheat"],
          states: ["Northern NSW", "QLD"],
          rate: "16",
          rateMax: "16",
          unit: "mL/ha",
          stage: "Up to 4 leaf stage",
          note: "Apply from early tillering (when main shoot has 4-5 leaves plus 2+ tillers formed) to start of jointing (1st node). Tank mix with Enforcer 242 or equivalent at 26 g/L picloram, 420 g/L MCPA formulations. For best control apply at early tillering as this weed becomes increasingly difficult to control as it becomes larger."
        }
      ]
    },

    // ── FALLOW + METSULFURON-METHYL ──
    {
      crop: "Fallow (Northern NSW, QLD) - Metsulfuron-methyl + Wipe-Out Pro",
      cropList: ["Fallow"],
      weeds: [
        {
          weed: "Broadleaf Weeds - Refer to Table 2",
          pestList: ["Broadleaf Weeds"],
          states: ["Northern NSW", "QLD"],
          rate: "16",
          rateMax: "24",
          unit: "mL/ha",
          stage: "Refer to Table 2 and Wipe-Out Pro label",
          note: "Refer to Table 2 and Wipe-Out Pro label for Directions for Use. DO NOT apply less than 4 months prior to sowing as crop injury may occur, particularly under dry, cold conditions. Apply when weeds are actively growing."
        }
      ]
    },

    // ── FALLOW + FLAGSHIP 400 ──
    {
      crop: "Fallow - Flagship 400 Boom Application",
      cropList: ["Fallow"],
      weeds: [
        {
          weed: "Climbing Buckwheat (black bindweed), Red Pigweed",
          pestList: ["Climbing Buckwheat", "Red Pigweed"],
          states: ["Northern NSW", "QLD"],
          rate: "20",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Seedling up to 2-4 leaf",
          note: "When mixing with Wipe-Out Pro to control both grass and broadleaf weeds, refer to Wipe-Out Pro label for use rates and adjuvants recommended for grasses."
        }
      ]
    },

    // ── FALLOW + FIGHTBACK ──
    {
      crop: "Fallow - Fightback Boom Application (Northern NSW, NT, QLD)",
      cropList: ["Fallow"],
      weeds: [
        {
          weed: "Blackberry Nightshade (suppression only)",
          pestList: ["Blackberry Nightshade"],
          states: ["Northern NSW", "NT", "QLD"],
          rate: "7",
          rateMax: "15",
          unit: "mL/ha",
          stage: "10 to 25 cm tall, prior to flowering",
          note: "For use by ground equipment only. Apply in minimum spray volume of 70 L/ha to produce coarse spray droplets. Boom height must ensure double overlap of nozzle patterns. Plants must be actively growing. Use lower rate on smaller weeds."
        },
        {
          weed: "Camel Melon, Cucumber Melon, Prickly Paddy Melon",
          pestList: ["Camel Melon", "Cucumber Melon", "Prickly Paddy Melon"],
          states: ["Northern NSW", "NT", "QLD"],
          rate: "7",
          rateMax: "15",
          unit: "mL/ha",
          stage: "From 2 leaf to 50 cm diameter",
          note: "For use by ground equipment only. Apply in minimum spray volume of 70 L/ha with coarse droplets. Plants must be actively growing."
        },
        {
          weed: "Common Sowthistle",
          pestList: ["Common Sowthistle"],
          states: ["Northern NSW", "NT", "QLD"],
          rate: "7",
          rateMax: "15",
          unit: "mL/ha",
          stage: "From 8 leaf to flowering",
          note: "For use by ground equipment only. Apply in minimum spray volume of 70 L/ha with coarse droplets."
        },
        {
          weed: "Cowvine",
          pestList: ["Cowvine"],
          states: ["Northern NSW", "NT", "QLD"],
          rate: "7",
          rateMax: "15",
          unit: "mL/ha",
          stage: "From 2 to 5 leaf up to 15 cm diameter, prior to flowering",
          note: "For use by ground equipment only. Apply in minimum spray volume of 70 L/ha with coarse droplets."
        },
        {
          weed: "Lucerne (established)",
          pestList: ["Lucerne"],
          states: ["Northern NSW", "NT", "QLD"],
          rate: "10",
          rateMax: "20",
          unit: "mL/ha",
          stage: "Active growth, 15 to 25 cm high, during spring",
          note: "For use by ground equipment only. DO NOT plant susceptible crops for up to 9 months after application. Tank mix with Wipe-Out Pro. Dry conditions after application will increase re-cropping interval."
        },
        {
          weed: "Polymeria Pusilla",
          pestList: ["Polymeria Pusilla"],
          states: ["Northern NSW", "NT", "QLD"],
          rate: "7",
          rateMax: "15",
          unit: "mL/ha",
          stage: "2 to 12 leaf up to 20 cm diameter, prior to flowering",
          note: "For use by ground equipment only. Tank mix with Wipe-Out Pro. DO NOT plant susceptible crops for up to 9 months after application."
        }
      ]
    },

    // ── PASTURE + FLAGSHIP 400 ──
    {
      crop: "Pasture, Forestry, Non-Agricultural Areas - High volume/Spot Spray + Flagship 400",
      cropList: ["Pasture", "Forestry", "Non-crop"],
      weeds: [
        {
          weed: "Fireweed",
          pestList: ["Fireweed"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Flowering plants up to 30 cm tall",
          note: "Note: Will damage legumes present in grass pastures."
        },
        {
          weed: "Thistles, Spear Thistle",
          pestList: ["Thistles", "Spear Thistle"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Rosette stage prior to stem elongation",
          note: "Note: Will damage legumes present in grass pastures."
        },
        {
          weed: "Lantana",
          pestList: ["Lantana"],
          states: ["All"],
          rate: "20",
          rateMax: "30",
          unit: "mL/100L",
          stage: "Seedlings and regrowth 0.5 to 1.2 m high (or mature plants 1.2 to 2 m high)",
          note: "Apply to actively growing plants from October to April. Spray to ensure thorough coverage of all foliage, including stems, to point of runoff. Note: Will damage legumes present in grass pastures."
        },
        {
          weed: "Cockspur Thorn",
          pestList: ["Cockspur Thorn"],
          states: ["All"],
          rate: "20",
          rateMax: "30",
          unit: "mL/100L",
          stage: "Up to 3 m high",
          note: "Note: Will damage legumes present in grass pastures."
        }
      ]
    },

    // ── PASTURE + METSULFURON-METHYL ──
    {
      crop: "Non-Agricultural Areas - High Volume Handgun + Metsulfuron-methyl",
      cropList: ["Pasture", "Forestry", "Non-crop"],
      weeds: [
        {
          weed: "Saint John's Wort, Tree-of-Heaven",
          pestList: ["Saint John's Wort", "Tree-of-Heaven"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/100L",
          stage: "Actively growing",
          note: "Spray to wet, but not to cause run-off. Note: Will damage legumes present in grass pastures. Always add BS-1000 at 0.1% or alternative."
        },
        {
          weed: "Lantana",
          pestList: ["Lantana"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/100L",
          stage: "Up to 2 m tall",
          note: "Apply to bushes up to 2 m tall. Spray to thoroughly wet all foliage and stems, penetrating through bush. Should regrowth occur, retreatment necessary. Tank mix with Metsulfuron-methyl + Pulse Penetrant or Wipe-Out Pro. Note: Will damage legumes."
        },
        {
          weed: "Alligator Weed",
          pestList: ["Alligator Weed"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/100L",
          stage: "Actively growing",
          note: "Apply in terrestrial situations only. Follow-up applications over at least two seasons are essential for complete control. Tank mix with Metsulfuron-methyl + Wipe-Out Pro."
        },
        {
          weed: "Australian Blackthorn, Bitou Bush/Boneseed, Bracken Fern, Fennel, Hawthorn, Japanese Sunflower, Kangaroo Thorn, Privet, Smartweed, Sweet Briar, Wait-a-while",
          pestList: ["Australian Blackthorn", "Bitou Bush", "Boneseed", "Bracken Fern", "Fennel", "Hawthorn", "Japanese Sunflower", "Kangaroo Thorn", "Privet", "Smartweed", "Sweet Briar", "Wait-a-while"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/100L",
          stage: "Actively growing (height/size dependent)",
          note: "Spray to thoroughly wet all foliage but not cause run-off. Apply to bushes up to specified heights (2.5-3 m). Note: Will damage legumes. Avoid spraying sweet briar when leaf fall commenced or after end of February. Tank mix with Metsulfuron-methyl + BS-1000 or alternative at 0.1%."
        },
        {
          weed: "Apple Box, Messmate Stringybark, Peppermint Gum, Red Gum, Yellow Box",
          pestList: ["Apple Box", "Messmate Stringybark", "Peppermint Gum", "Red Gum", "Yellow Box"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/100L",
          stage: "Up to 4 m high",
          note: "Apply to plants up to 4 m high. Ensure thorough foliage cover. Results cannot be guaranteed where suckers originate from large lignotubers. Tank mix with Metsulfuron-methyl + Pulse Penetrant at 0.2%."
        },
        {
          weed: "Blackberry",
          pestList: ["Blackberry"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/100L",
          stage: "Actively growing",
          note: "Spray to thoroughly wet all foliage and canes. Ensure peripheral runners sprayed. Follow-up applications over at least two seasons essential. Due to widespread picking by public, not recommended for bushes with mature fruit. Tank mix with Metsulfuron-methyl with/without Wipe-Out Pro. Can also use with Uptake spraying oil at 0.5% or Pulse Penetrant at 0.2%. Apply in terrestrial situations only."
        },
        {
          weed: "Bridal Creeper, Inkweed, Mistflower, Parthenium, Paterson's Curse, Ragwort, Wild Turnip",
          pestList: ["Bridal Creeper", "Inkweed", "Mistflower", "Parthenium", "Paterson's Curse", "Ragwort", "Wild Turnip"],
          states: ["All"],
          rate: "15",
          rateMax: "50",
          unit: "mL/100L",
          stage: "Mid-June to late August (bridal creeper); actively growing (others)",
          note: "Spray to thoroughly wet foliage but not cause run-off. For bridal creeper, apply mid-June to late August; water volumes 500-800 L/ha recommended to minimise damage to native vegetation. Follow-up applications over two seasons for bridal creeper. Tank mix with Metsulfuron-methyl and BS-1000 at 0.1%."
        },
        {
          weed: "Crofton Weed",
          pestList: ["Crofton Weed"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "mL/100L",
          stage: "Actively growing",
          note: "Spray to thoroughly wet all foliage but not cause run-off. Extra care for good spray penetration in thickets. Best results on younger plants. If regrowth occurs, retreat in subsequent growth period. Tank mix with Metsulfuron-methyl at 15 g/100L."
        },
        {
          weed: "Rubber Vine",
          pestList: ["Rubber Vine"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/100L",
          stage: "October through April when actively growing, up to 3 m height",
          note: "Apply from October through April when bushes actively growing. Ensure thorough spray coverage of all foliage and leaders. Incomplete coverage results in regrowth. Tank mix with Metsulfuron-methyl."
        },
        {
          weed: "Golden Dodder",
          pestList: ["Golden Dodder"],
          states: ["All"],
          rate: "3",
          rateMax: "3",
          unit: "mL/100L",
          stage: "Pre-flowering",
          note: "Apply as spot spray to point of run-off. Ensure correct coverage of infested area. Apply pre-flowering. Tank mix with Metsulfuron-methyl at 1.5 g/100L."
        },
        {
          weed: "Gorse",
          pestList: ["Gorse"],
          states: ["All"],
          rate: "30",
          rateMax: "50",
          unit: "mL/100L",
          stage: "Up to 2 m tall",
          note: "Apply to bushes up to 2 m tall. Ensure thorough spray penetration and coverage of whole plant. Tank mix with Metsulfuron-methyl at 15-20 g/100L. Can use with Pulse Penetrant at 0.2%, Wipe-Out Pro, or Uptake oil. Apply in terrestrial situations only."
        },
        {
          weed: "Harrisia Cactus",
          pestList: ["Harrisia Cactus"],
          states: ["All"],
          rate: "60",
          rateMax: "60",
          unit: "mL/100L",
          stage: "Actively growing",
          note: "Spray to thoroughly wet using water volumes of 1000-1400 L/ha. Follow-up treatment may be necessary. Tank mix with Metsulfuron-methyl at 20 g/100L."
        },
        {
          weed: "Noogoora Burr",
          pestList: ["Noogoora Burr"],
          states: ["All"],
          rate: "22",
          rateMax: "22",
          unit: "mL/100L",
          stage: "Actively growing",
          note: "Tank mix with Metsulfuron-methyl at 7 g/100L."
        }
      ]
    },

    // ── PASTURE + FIGHTBACK ──
    {
      crop: "Agricultural Non-Crop Areas, Commercial & Industrial, Forests, Pastures - High Volume + Fightback",
      cropList: ["Pasture", "Forestry", "Non-crop"],
      weeds: [
        {
          weed: "African Boxthorn",
          pestList: ["African Boxthorn"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Less than 2 m tall",
          note: "Apply when bushes have good leaf cover, growth and no leaf fall. Tank mix with Fightback at 500 mL/100L. Will damage legumes in grass pastures."
        },
        {
          weed: "Angophora spp.",
          pestList: ["Angophora"],
          states: ["All"],
          rate: "12",
          rateMax: "12",
          unit: "mL/100L",
          stage: "1 to 3 m tall",
          note: "Tank mix with Fightback at 350 mL/100L. Will damage legumes in grass pastures."
        },
        {
          weed: "Australian Blackthorn",
          pestList: ["Australian Blackthorn"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Less than 2 m tall",
          note: "Apply from late spring to early autumn. Tank mix with Fightback at 500 mL/100L. Will damage legumes in grass pastures."
        },
        {
          weed: "Banksia spp.",
          pestList: ["Banksia"],
          states: ["All"],
          rate: "12",
          rateMax: "12",
          unit: "mL/100L",
          stage: "1 to 3 m tall",
          note: "Tank mix with Fightback at 350 mL/100L. Will damage legumes in grass pastures."
        },
        {
          weed: "Biddy Bush (Chinese Shrub, Sifton Bush)",
          pestList: ["Biddy Bush"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Autumn when actively growing",
          note: "Tank mix with Fightback at 500 mL/100L. Add BS-1000 or alternative at 0.125% for best results. Will damage legumes in grass pastures."
        },
        {
          weed: "Blackberry in association with Docks, Ragwort, Smartweed, Thistles",
          pestList: ["Blackberry"],
          states: ["All"],
          rate: "12",
          rateMax: "17",
          unit: "mL/100L",
          stage: "Late spring to autumn",
          note: "Use higher rate on plants damaged by grazing stock or insects, and on difficult to kill blackberry. Where herbicides other than Group 4 used, allow 2 seasons regrowth before respraying with GRINDSTONE + Fightback. Tank mix with Fightback at 350 or 500 mL/100L. Will damage legumes in grass pastures."
        },
        {
          weed: "Blue Heliotrope",
          pestList: ["Blue Heliotrope"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Flowering",
          note: "Tank mix with Fightback at 500 mL/100L. Apply in minimum spray volume of 1250 L/ha. Will damage legumes in grass pastures."
        },
        {
          weed: "Brooms (Cape, English, Flax Leaf, Montpellier)",
          pestList: ["Cape Broom", "English Broom", "Flax Leaf Broom", "Montpellier Broom"],
          states: ["All"],
          rate: "8",
          rateMax: "12",
          unit: "mL/100L",
          stage: "Spring to mid-summer prior to pod formation (or autumn to winter)",
          note: "Apply as thorough foliage spray. Use lower rate in spring/early summer, higher in autumn/winter. Tank mix with Fightback at 250 or 350 mL/100L. Will damage legumes in grass pastures."
        },
        {
          weed: "Camphor Laurel",
          pestList: ["Camphor Laurel"],
          states: ["All"],
          rate: "12",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Anytime when actively growing",
          note: "Apply as thorough foliage spray. Use higher rate for weed above 2 m tall. Tank mix with Fightback at 350 or 500 mL/100L. Will damage legumes in grass pastures."
        },
        {
          weed: "Capeweed",
          pestList: ["Capeweed"],
          states: ["All"],
          rate: "5",
          rateMax: "5",
          unit: "mL/100L",
          stage: "Flowering",
          note: "Apply as thorough foliage spray. Tank mix with Fightback at 150 mL/100L. Will damage legumes in grass pastures."
        },
        {
          weed: "Casuarina spp.",
          pestList: ["Casuarina"],
          states: ["All"],
          rate: "12",
          rateMax: "12",
          unit: "mL/100L",
          stage: "1 to 3 m tall",
          note: "Tank mix with Fightback at 350 mL/100L. Will damage legumes in grass pastures."
        },
        {
          weed: "Chinee Apple",
          pestList: ["Chinee Apple"],
          states: ["All"],
          rate: "12",
          rateMax: "12",
          unit: "mL/100L",
          stage: "Less than 2 m tall",
          note: "Tank mix with Fightback at 350 mL/100L. Add BS-1000 or alternative at 0.1% for best results. Will damage legumes in grass pastures."
        },
        {
          weed: "Cockspur Thorn, Crofton Weed",
          pestList: ["Cockspur Thorn", "Crofton Weed"],
          states: ["All"],
          rate: "12",
          rateMax: "12",
          unit: "mL/100L",
          stage: "Spring to autumn",
          note: "Apply as thorough foliage spray. Tank mix with Fightback at 350 mL/100L. Will damage legumes in grass pastures."
        },
        {
          weed: "Common Sensitive Plant",
          pestList: ["Common Sensitive Plant"],
          states: ["All"],
          rate: "7",
          rateMax: "7",
          unit: "mL/100L",
          stage: "Any time when actively growing",
          note: "Tank mix with Fightback at 200 mL/100L. Add BS-1000 or alternative at 0.1% for best results. To avoid leaves closing during application, spray plants while moving forward. Will damage legumes in grass pastures."
        },
        {
          weed: "Eastern Cotton Bush",
          pestList: ["Eastern Cotton Bush"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Spring to Autumn",
          note: "Tank mix with Fightback at 500 mL/100L. Add Uptake Spraying Oil at 0.5%. Some bushes may require follow-up spray to control regrowth. Will damage legumes in grass pastures."
        },
        {
          weed: "Eucalyptus spp.",
          pestList: ["Eucalyptus"],
          states: ["All"],
          rate: "12",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Seedling and regrowth from small lignotubers, 1 to 3 m tall",
          note: "Apply high rate where difficult to control species or regrowth present. Tank mix with Fightback at 350 or 500 mL/100L. Addition of adjuvant may improve results. Will damage legumes in grass pastures."
        },
        {
          weed: "Fireweed",
          pestList: ["Fireweed"],
          states: ["All"],
          rate: "12",
          rateMax: "12",
          unit: "mL/100L",
          stage: "Flowering",
          note: "Apply as thorough foliage spray. Tank mix with Fightback at 350 mL/100L. Will damage legumes in grass pastures."
        },
        {
          weed: "Galenia",
          pestList: ["Galenia"],
          states: ["All"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Fresh growth in spring to summer",
          note: "Tank mix with Fightback at 500 mL/100L. Use 2000 L of spray mixture/ha. Will damage legumes in grass pastures."
        },
        {
          weed: "Giant Bramble",
          pestList: ["Giant Bramble"],
          states: ["All"],
          rate: "12",
          rateMax: "12",
          unit: "mL/100L",
          stage: "Spring to autumn",
          note: "Penetration of thick clumps may be difficult and respraying necessary. Tank mix with Fightback. Add BS-1000 or alternative at 0.1% for best results. Will damage legumes in grass pastures."
        },
        {
          weed: "Gorse",
          pestList: ["Gorse"],
          states: ["All"],
          rate: "8",
          rateMax: "20",
          unit: "mL/100L",
          stage: "1 to 1.5 m tall (or over 1.5 m, or winter treatment)",
          note: "Tank mix with Fightback at 250-500 mL/100L depending on height and season. Add BS-1000 or alternative at 0.1% for best results (except winter when only recommend at 0.1%). Spring and summer treatment only for smaller bushes. Brownout may not be complete until summer (winter treatment). Will damage legumes in grass pastures."
        },
        {
          weed: "Groundsel Bush",
          pestList: ["Groundsel Bush"],
          states: ["All"],
          rate: "8",
          rateMax: "12",
          unit: "mL/100L",
          stage: "1 to 1.5 m tall in spring to summer (or over 1.5 m, autumn treatment)",
          note: "Apply as thorough foliage spray. Tank mix with Fightback at 250 or 350 mL/100L. Will damage legumes in grass pastures."
        }
      ]
    }

  ],

  // ── Withholding Periods ──────────────────────────────────────
  withholding: {
    harvest: "CEREALS + Flagship 400: NOT REQUIRED WHEN USED AS DIRECTED. CEREALS + Metsulfuron-methyl: NOT REQUIRED WHEN USED AS DIRECTED.",
    grazing: "CEREALS + Flagship 400: DO NOT GRAZE OR CUT CROPS FOR STOCK FOOD FOR 7 DAYS AFTER APPLICATION. CEREALS + Metsulfuron-methyl: Meat production - DO NOT GRAZE FOR 21 DAYS AFTER APPLICATION; Milk production - NOT REQUIRED WHEN USED AS DIRECTED; Cutting - DO NOT CUT FOR 21 DAYS AFTER APPLICATION. CEREALS + Metsulfuron-methyl + MCPA or Enforcer 242: Meat - DO NOT GRAZE 21 DAYS; Milk - DO NOT GRAZE 7 DAYS; Cutting - DO NOT CUT 21 DAYS. PASTURE + Flagship 400 or Fightback: NOT REQUIRED WHEN USED AS DIRECTED. PASTURE + Metsulfuron-methyl: Meat - DO NOT GRAZE 56 DAYS; Milk - DO NOT GRAZE 3 DAYS; Cutting - DO NOT CUT 56 DAYS. Export Grazing Interval: DO NOT GRAZE FOR 42 DAYS. Export Animal Feed Interval: DO NOT CUT FOR 42 DAYS."
  }

};
