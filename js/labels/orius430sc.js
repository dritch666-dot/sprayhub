// ─────────────────────────────────────────────────────────
// ORIUS 430 SC FUNGICIDE — Label Data
// Group 3 (DMI / Triazole) | Suspension Concentrate (SC)
// Source: Adama_Orius430SC_Label.pdf
// APVMA Approval No: 58773
// ADAMA Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['orius430sc'] = {

  name:             "Orius® 430 SC Fungicide",
  company: "Gowan",


  category:         "Fungicides",
  activeIngredient: "430 g/L Tebuconazole",
  group:            "Group 3 (DMI Fungicide / Triazole)",
  modeOfAction:     "Inhibits C14-demethylation in sterol biosynthesis",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#059669",
  apvma:            "58773",
  labelPdf:         "Source labels/Adama_Orius_430_Sc_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/ORIUS_430SC.pdf",
  signalHeading:    "Caution",

  classification: {
    type: "Fungicide",
    target: ["Leaf Spot", "Rust", "Powdery Mildew", "Sclerotinia", "Sigatoka", "Blight"],
    timing: ["Preventative", "Curative", "At first sign of disease"]
  },

  crops: [

    {
      crop: "Bananas (Qld, NSW, WA, NT only)",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Leaf Spot (Yellow Sigatoka), Leaf Speckle, Black Sigatoka",
          pestList: ["Leaf Spot","Leaf Speckle","Black Sigatoka"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "230",
          rateMax: "230",
          unit: "mL/ha",
          stage: "Preventative spray schedule — regular programme",
          note: "Add 3–6 L water-miscible oil/ha. Ground application by misting machine or airblast sprayer in a convenient volume of water; aerial application at least 20 L spray mixture/ha. Maintain good deleafing practices; remove very old leaves and leaves with advanced lesions prior to application. Tropical areas (Nth Qld, NT, Ord River): apply 2–3 consecutive sprays at 14-day intervals when conditions favour disease; DO NOT exceed 6 sprays in 12 months; DO NOT apply in July, August, September. Sub-tropical (Sth Qld, NSW): commence at onset of warm/humid/wet weather (normally December); repeat at 21–28 day intervals; minimum 2 consecutive sprays; DO NOT exceed 5 sprays in 12 months. Approved for use in banana plantations interplanted with avocados. NEVER include adjuvants other than water-miscible oils — wetting agents cause phytotoxicity to young fruit."
        }
      ]
    },

    {
      crop: "Pawpaw",
      cropList: ["Pawpaw"],
      weeds: [
        {
          weed: "Black Spot",
          pestList: ["Black Spot"],
          states: ["All"],
          rate: "290",
          rateMax: "290",
          unit: "mL/ha",
          stage: "14-day intervals — alternate with protectant fungicide (e.g. Dithane)",
          note: "Ensure thorough coverage of leaves and fruit. Regularly remove and destroy infected plant material to reduce inoculum. Spray equipment must be properly calibrated. Apply at 14-day intervals; alternate with a protectant fungicide (e.g. Dithane). DO NOT apply more than 6 sprays of Orius 430 SC (or any DMI fungicide) on any block in any 12-month period."
        }
      ]
    },

    {
      crop: "Grapevines",
      cropList: ["Grapevines","Nursery Stock","Commercial Forests","Native Vegetation"],
      weeds: [
        {
          weed: "Powdery Mildew",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/100L",
          stage: "5-spray programme: shoots 10–20 cm, pre-flowering, flowering, after fruit set, before bunches close",
          note: "Dilute spraying: 30 mL/100 L. Concentrate spraying: refer to Special Instructions for Grapevines in Application section. Apply thoroughly as part of a 5-spray programme. Resistance strategy: DO NOT apply more than 2 consecutive sprays; DO NOT apply more than 3 sprays per season; DO NOT use curatively. DO NOT use in equipment requiring concentrate rates greater than 150 mL/100 L (5x). DO NOT apply in volumes less than 250 L/ha. Add non-ionic wetting agent at 10 mL/100 L regardless of application method. Apply the same total amount of product whether applying by dilute or concentrate spraying."
        }
      ]
    },

    {
      crop: "Garlic",
      cropList: ["Garlic"],
      weeds: [
        {
          weed: "Orange Rust (Puccinia allii)",
          pestList: ["Orange Rust"],
          states: ["All"],
          rate: "290",
          rateMax: "290",
          unit: "mL/ha",
          stage: "From 2-leaf stage up to start of bulbing — DO NOT apply once bulbing has commenced",
          note: "290 mL/ha plus spray adjuvant. Apply from 2-leaf stage, up to start of bulbing. Monitor crop closely at least weekly when climatic conditions favour disease. Apply early in disease development. Use boom sprayer in 150–400 L/ha spray volume. Maximum 2 foliar applications per crop with minimum 14-day re-treatment interval. DO NOT apply if rainfall is imminent within 24 hours. DO NOT apply to plants stressed by moisture or extremes of temperature."
        }
      ]
    },

    {
      crop: "Onions (Tasmania only) — Soil Application",
      cropList: ["Onions (Tasmania Only)","Soil Application"],
      weeds: [
        {
          weed: "White Root Rot",
          pestList: ["White Root Rot"],
          states: ["Tas"],
          rate: "1.45",
          rateMax: "1.45",
          unit: "mL/100L",
          stage: "Before sowing — apply Orius 430 SC onto lime super at sowing",
          note: "1.45 mL/100 m of row mixed with 145–218 g lime super/100 m of row. Apply Orius 430 SC treated lime super when sowing onion seed. Seed and lime super can be mixed in same box or different boxes and sown down the same tube. Apply in a band width of 2 cm. Ensure correct rate is used — incorrect rate may cause delay in emergence and reduced seedling stands."
        }
      ]
    },

    {
      crop: "Lettuce",
      cropList: ["Lettuce"],
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia sclerotiorum)",
          pestList: ["Sclerotinia Rot"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "Early stages of plant development only — 5-week WHP limits timing",
          note: "Apply by boom spray. Apply only during early stages of plant development (note 5-week WHP). Maximum 2 applications at 7–10 day intervals in rotation with other registered chemicals (azoxystrobin, iprodione etc.). Field crops only — DO NOT apply in greenhouse/protected cropping situations or to hydroponically grown lettuce. Control should not rely solely on fungicides; use crop rotations, resistant varieties and planting techniques."
        }
      ]
    },

    {
      crop: "Peanuts (South Qld and NSW only)",
      cropList: ["Peanuts"],
      weeds: [
        {
          weed: "Early Leaf Spot, Late Leaf Spot, Rust, Net Blotch — Low disease pressure",
          pestList: ["Early Leaf Spot","Late Leaf Spot","Rust","Net Blotch — Low Disease Pressure"],
          states: ["Qld", "NSW"],
          rate: "175",
          rateMax: "175",
          unit: "mL/ha",
          stage: "Preventative — spray immediately after or just before disease-conducive weather",
          note: "175 mL/ha + Agridex 1 L/ha. Ground application in at least 100 L water/ha; aerial in at least 30 L spray mixture/ha. Spray immediately after last disease-conducive weather (e.g. rain or heavy dews) or before next disease-conducive weather. Repeat after 14 days if conditions remain favourable. For resistance strategy see General Instructions on label."
        },
        {
          weed: "Early Leaf Spot, Late Leaf Spot, Rust, Net Blotch — High disease or wet weather",
          pestList: ["Early Leaf Spot","Late Leaf Spot","Rust","Net Blotch — High Disease Or Wet Weather"],
          states: ["Qld", "NSW"],
          rate: "290",
          rateMax: "440",
          unit: "mL/ha",
          stage: "High disease pressure or wet weather conditions",
          note: "290 mL/ha (high disease or wet weather) or 440 mL/ha (high disease AND wet weather), each plus Agridex 1 L/ha. Repeat at 14-day intervals. If prolonged cool moist weather, shorten interval to 10–12 days. Apply no more than 3 consecutive DMI sprays before switching to non-DMI fungicide; apply no more than 5 DMI sprays per season."
        }
      ]
    },

    {
      crop: "Peanuts (North Qld, WA, NT only)",
      cropList: ["Peanuts"],
      weeds: [
        {
          weed: "Early Leaf Spot, Late Leaf Spot, Rust, Net Blotch",
          pestList: ["Early Leaf Spot","Late Leaf Spot","Rust","Net Blotch"],
          states: ["Qld", "WA", "NT"],
          rate: "230",
          rateMax: "440",
          unit: "mL/ha",
          stage: "From 3–4 weeks after planting at 14-day intervals",
          note: "230 mL/ha (low disease), 290 mL/ha (moderate disease), 440 mL/ha (severe disease), each plus Agridex 1 L/ha. Begin spraying 3–4 weeks after planting. Band spraying: apply half rate as a 45 cm band over the row; do not band after 6 weeks from planting. Repeat at 14-day intervals; shorten to 10–12 days during prolonged wet weather or heavy rains. For resistance strategy see General Instructions."
        }
      ]
    },

    {
      crop: "Faba Beans and Broad Beans",
      cropList: ["Faba Beans And Broad Beans"],
      weeds: [
        {
          weed: "Cercospora Leaf Spot, Faba Bean Rust",
          pestList: ["Cercospora Leaf Spot","Faba Bean Rust"],
          states: ["All"],
          rate: "145",
          rateMax: "145",
          unit: "mL/ha",
          stage: "At first sign of disease or when conditions favour disease development",
          note: "145 mL/ha plus 1 L/ha non-ionic surfactant. Ground application in at least 100 L/ha; aerial in at least 30 L/ha. Maximum 3 spray treatments per season at 14–21 day intervals. Complete and thorough coverage of all foliage is essential. DO NOT apply under conditions that may cause spray drift onto nearby susceptible plants or crops."
        }
      ]
    },

    {
      crop: "Green Beans",
      cropList: ["Green Beans"],
      weeds: [
        {
          weed: "Rust",
          pestList: ["Rust"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "When rust infection begins or at budding, whichever is earlier",
          note: "350 mL/ha + Agridex 1 L/ha. Spray when rust infection begins or at budding. Repeat application 10–14 days later. A third application may be necessary when infection occurs early or disease pressure is high. WHP: 3 days harvest, 3 days grazing."
        }
      ]
    },

    {
      crop: "Mung Beans",
      cropList: ["Mung Beans"],
      weeds: [
        {
          weed: "Powdery Mildew (Erysiphe polygoni or Podosphaera xanthii)",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "145",
          rateMax: "145",
          unit: "mL/ha",
          stage: "At first sign of disease; second spray 14 days later if necessary",
          note: "Ground application in at least 50 L/ha; aerial in at least 10 L/ha. Apply at first sign of disease. Maximum 3 applications per crop with minimum 14-day re-treatment interval. WHP: 21 days harvest, 21 days grazing."
        }
      ]
    },

    {
      crop: "Peas",
      cropList: ["Peas"],
      weeds: [
        {
          weed: "Powdery Mildew",
          pestList: ["Powdery Mildew"],
          states: ["All"],
          rate: "145",
          rateMax: "145",
          unit: "mL/ha",
          stage: "At flowering or at first sign of disease, whichever occurs first",
          note: "Ground application in at least 50 L water/ha; aerial in at least 10 L water/ha. Apply at flowering or first sign of disease. Second spray 14 days later may be necessary. WHP: 3 days harvest, 3 days grazing."
        }
      ]
    },

    {
      crop: "Soybeans",
      cropList: ["Soybeans"],
      weeds: [
        {
          weed: "Powdery Mildew (Erisyphe diffusa), Soybean Rust (Phakopsora pachyrhizi)",
          pestList: ["Powdery Mildew","Soybean Rust"],
          states: ["All"],
          rate: "184",
          rateMax: "245",
          unit: "mL/ha",
          stage: "Preventative when disease-conducive conditions present, or at first visible symptoms — DO NOT apply after R5 growth stage",
          note: "Ground application in at least 100 L/ha; aerial in at least 50 L/ha. Spray as preventative when cool, humid conditions are highly favourable, or at first visible symptoms. Use higher rate when varieties are susceptible or disease pressure is severe. Maximum 2 applications per season; DO NOT retreat for at least 10 days after last application. Add non-ionic wetter/surfactant (e.g. Wetspray 1000 or BS1000) at 100 mL product/100 L spray volume — DO NOT add crop oils or other adjuvants as phytotoxic effects can result. Use MEDIUM spray quality or larger. Downwind buffer zone for aerial application only: DO NOT apply by air when livestock, pasture or livestock feed land is downwind within 20 metres. WHP: 21 days harvest, 14 days grazing."
        }
      ]
    },

    {
      crop: "Beetroot, Chicory, Endive, Radish, Silverbeet and Spinach",
      cropList: ["Beetroot","Chicory","Endive","Radish","Silverbeet And Spinach"],
      weeds: [
        {
          weed: "Sclerotinia Rot (Sclerotinia species)",
          pestList: ["Sclerotinia Rot"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "Early stages of plant development — boom spray",
          note: "Apply by boom spray or similar equipment during early stages of plant development. Ensure thorough foliage coverage; increase water volume as crop grows. Maximum 2 applications per crop with 7–10 day re-treatment interval. DO NOT use in protected cropping or hydroponic situations. WHP: 5 weeks harvest. DO NOT graze or cut for stock food."
        }
      ]
    },

    {
      crop: "Carrots",
      cropList: ["Carrots"],
      weeds: [
        {
          weed: "Powdery Mildew — suppression only (Erysiphe heraclei)",
          pestList: ["Powdery Mildew — Suppression Only"],
          states: ["All"],
          rate: "580",
          rateMax: "580",
          unit: "mL/ha",
          stage: "At first sign of disease — ground application only",
          note: "Apply using ground-based equipment only in 400–600 L water/ha. Apply at first sign of disease ensuring good coverage of all leaf surfaces. Use higher water volume in dense or mature crops. Maximum 3 applications per crop with 14–21 day intervals between successive treatments. WHP: 21 days harvest."
        }
      ]
    },

    {
      crop: "Barley, Oats, Wheat",
      cropList: ["Barley","Oats","Wheat"],
      weeds: [
        {
          weed: "Barley: Scald, Powdery Mildew; Oats: Crown Rust; Wheat: Leaf Rust, Stripe Rust, Septoria Nodorum Blotch, Yellow Leaf Spot",
          pestList: ["Barley: Scald","Powdery Mildew; Oats: Crown Rust; Wheat: Leaf Rust","Stripe Rust","Septoria Nodorum Blotch","Yellow Leaf Spot"],
          states: ["All"],
          rate: "145",
          rateMax: "290",
          unit: "mL/ha",
          stage: "Later tillering to early jointing (Barley Scald); full flag leaf emergence to early head emergence (other diseases)",
          note: "Ground application in at least 50 L water/ha; aerial in at least 10 L water/ha. Barley Scald: apply at later tillering to early jointing. Powdery Mildew: apply when 5% of leaf area infected; use higher rate when longer disease control required. Other diseases: apply from full flag leaf emergence to early head emergence. Stripe Rust — see spray timings under General Instructions. The addition of mineral crop oil (e.g. D-C-Trate) at 1% may improve performance on wheat, oats and barley. DO NOT apply to cereal crops more than once in a season. Economic responses most likely with crops yielding over 3 t/ha potential. Septoria Tritici Blotch: 290 mL/ha. WHP: 5 weeks harvest, 14 days grazing."
        },
        {
          weed: "Wheat, Oats: Stem Rust",
          pestList: ["Wheat","Oats: Stem Rust"],
          states: ["All"],
          rate: "145",
          rateMax: "290",
          unit: "mL/ha",
          stage: "When more than 5% of stems infected — full flag leaf emergence to late flowering",
          note: "Apply if more than 5% of stems are infected between full flag leaf emergence to late flowering. Where Stem Rust is the major disease, yield responses are optimised by delaying application until full head emergence and using the higher rate. In severe cases if majority of stems are infected prior to full head emergence, apply at 145 mL/ha as soon as possible and repeat after 3 weeks at full head emergence."
        }
      ]
    },

    {
      crop: "Ryegrass and Fescue Seed Crops",
      cropList: ["Ryegrass And Fescue Seed Crops"],
      weeds: [
        {
          weed: "Leaf Rust, Stem Rust",
          pestList: ["Leaf Rust","Stem Rust"],
          states: ["All"],
          rate: "290",
          rateMax: "290",
          unit: "mL/ha",
          stage: "At first signs of disease — apply in at least 100 L water/ha",
          note: "Monitor crops closely and spray at first signs of disease. Continuing disease pressure or reinfection may require a further application 3–4 weeks later. Ensure thorough coverage; use higher water volumes in dense or advanced crops."
        }
      ]
    },

    {
      crop: "Sugar Cane (variety Q124 only)",
      cropList: ["Sugar Cane"],
      weeds: [
        {
          weed: "Orange Rust",
          pestList: ["Orange Rust"],
          states: ["All"],
          rate: "290",
          rateMax: "290",
          unit: "mL/ha",
          stage: "When disease begins to escalate rapidly — repeat after 14 days if conditions remain favourable",
          note: "290 mL/ha plus Agridex 1 L/ha. Ground: use droppers and directed sprays with sufficient water for thorough coverage. Aerial: minimum 20 L spray volume/ha. Even low levels of Orange Rust suppress yields — begin monitoring early and apply as disease begins to escalate. Check crops at least weekly when conditions favour disease. Maximum 2 Orius 430 SC sprays per season. DO NOT apply if heavy rains/storms forecast with greater than 50% probability within 24 hours (48 hours if possible). WHP: 4 weeks harvest, 4 weeks grazing."
        }
      ]
    },

    {
      crop: "Walnuts",
      cropList: ["Walnuts"],
      weeds: [
        {
          weed: "Apical Necrosis (Alternaria spp., Fusarium spp.)",
          pestList: ["Apical Necrosis"],
          states: ["All"],
          rate: "35",
          rateMax: "35",
          unit: "mL/100L",
          stage: "Preventative only — from bud-burst to shell hardening",
          note: "Ground application: 35 mL/100 L, apply by vertical sprayer (airblast, airshear or equivalent) in 500–2000 L/ha ensuring thorough coverage of all foliage and fruit. Aerial (helicopter and fixed wing): 525–700 mL/ha, minimum 30 L/ha. Only apply as preventative treatment. Apply from bud-burst to shell hardening. Maximum 4 applications per crop with minimum 14-day re-treatment interval. Spray drift restraints apply (vertical sprayers and aircraft) — see label for mandatory buffer zones. WHP: 6 weeks harvest."
        }
      ]
    },

    {
      crop: "Pyrethrum",
      cropList: ["Pyrethrum"],
      weeds: [
        {
          weed: "Sclerotinia sclerotiorum",
          pestList: ["Sclerotinia Sclerotiorum"],
          states: ["All"],
          rate: "350",
          rateMax: "350",
          unit: "mL/ha",
          stage: "Commence at 1–2% flowering — apply twice in rotation with other control measures",
          note: "Apply twice at 7–10 day intervals, commencing at 1–2% flowering. Use in rotation with other control measures. Use under direction of pyrethrum advisers."
        }
      ]
    },

    {
      crop: "Anise Myrtle, Lemon Myrtle, Oil Tea Tree",
      cropList: ["Anise Myrtle","Lemon Myrtle","Oil Tea Tree"],
      weeds: [
        {
          weed: "Myrtle Rust (Uredo rangelii)",
          pestList: ["Myrtle Rust"],
          states: ["All"],
          rate: "128",
          rateMax: "192",
          unit: "mL/ha",
          stage: "On appearance of myrtle rust or when conditions favour development — ground application only, max 400 L/ha spray volume",
          note: "Ground application only in a maximum spray volume of 400 L/ha. Apply 3 applications per crop with minimum 21-day re-treatment interval. Apply no more than 2 consecutive Group 3 fungicides. Oil tea tree (Melaleuca alternifolia): G 14 days. The use of Orius 430 SC has not been fully evaluated in all species or situations — recommended to treat a sample area and assess appropriately prior to whole crop treatment. WHP: 4 weeks harvest."
        }
      ]
    },

    {
      crop: "Non-Food Producing Plants (Nursery Stock, Commercial Forests, Native Vegetation)",
      cropList: ["Non-Food Producing Plants"],
      weeds: [
        {
          weed: "Myrtle Rust (Austropuccinia psidii)",
          pestList: ["Myrtle Rust"],
          states: ["All"],
          rate: "30",
          rateMax: "30",
          unit: "mL/100L",
          stage: "At first signs of disease or when conditions favour disease development — ground application only, spray to run-off in 200–1000 L/ha",
          note: "30 mL/100 L. Ground application only in 200–1000 L/ha. Apply at first signs of disease. Allow at least 14 days between applications. Spray to run-off ensuring thorough coverage of all foliage including underside of leaves. Young foliage is most at risk of infection. DO NOT apply more than 2 consecutive applications from the same chemical class (Mode of Action Group)."
        }
      ]
    },

    {
      crop: "Duboisia",
      cropList: ["Duboisia"],
      weeds: [
        {
          weed: "Cercospora Leaf Spot (Cercospora zonata)",
          pestList: ["Cercospora Leaf Spot"],
          states: ["All"],
          rate: "440",
          rateMax: "440",
          unit: "mL/ha",
          stage: "Foliar spray — up to 3 times per season with minimum 60-day re-treatment interval",
          note: "Apply as foliar spray up to three times per season with minimum 60-day re-treatment interval between applications. WHP: 21 days grazing."
        }
      ]
    }

  ],

  restraints: [
    "DO NOT apply more than 2 consecutive sprays of Orius 430 SC in grapevines.",
    "DO NOT apply more than 3 consecutive DMI sprays in peanuts before switching to non-DMI fungicide.",
    "DO NOT apply more than 5 DMI sprays per season in peanuts (South Qld, NSW).",
    "DO NOT apply more than 6 sprays per 12 months in bananas.",
    "DO NOT apply Orius 430 SC sprays to bananas in July, August or September.",
    "DO NOT apply curatively in grapevines.",
    "DO NOT apply more than once in a season to cereal crops.",
    "DO NOT apply after R5 growth stage in soybeans.",
    "DO NOT add wetting agents to Orius 430 SC banana sprays — only water-miscible oils are permitted (causes phytotoxicity to young fruit).",
    "DO NOT add crop oils or adjuvants other than non-ionic wetter to soybean sprays (phytotoxic).",
    "DO NOT apply to cereal crops with potential yield under 2 t/ha except under conditions of very severe disease.",
    "DO NOT allow entry into treated areas until spray has dried."
  ],

  compatibility: {
    compatible:   [
      "Agridex oil at 1 L/ha (peanuts, beans, sugar cane)",
      "Water-miscible oil (bananas only)",
      "Non-ionic wetting agent at 10 mL/100 L (grapevines)",
      "Non-ionic surfactant/wetter at 1 L/ha non-ionic surfactant (faba beans)",
      "Non-ionic wetter/surfactant (Wetspray 1000, BS1000) at 100 mL/100 L (soybeans)",
      "Spray adjuvant at label rate (garlic)"
    ],
    incompatible: [
      "Wetting agents with banana sprays — causes phytotoxicity to young fruit",
      "Crop oils or adjuvants with soybean sprays — phytotoxic effects can result"
    ],
    notes:        [
      "Shake container vigorously before use. Add required quantity to water in spray vat while stirring or with agitators in motion.",
      "Export trade advice: consult ADAMA Australia for current MRL information before applying to export crops.",
      "Re-entry: do not allow entry into treated areas until spray has dried."
    ]
  },

  withholding: {
    harvest: "Anise/Lemon Myrtle, Sugar Cane: 4 weeks. Bananas, Avocados: 1 day. Beans, Pawpaw, Peas: 3 days. Beetroot, Cereals, Chicory, Endive, Lettuce, Radish, Silverbeet, Spinach: 5 weeks. Broad Beans, Carrots, Faba Beans, Garlic, Mung Beans, Peanuts, Soybeans: 21 days. Grapevines: 8 weeks. Onions, Non-Food Producing Plants: not required. Walnuts: 6 weeks.",
    grazing: "Beans, Peas: 3 days. Beetroot, Chicory, Endive, Radish, Silverbeet, Spinach: DO NOT graze or cut for stock food. Broad Beans, Cereals, Faba Beans, Soybeans, Tea Tree: 14 days. Duboisia, Mung Beans, Peanuts: 21 days. Garlic: DO NOT graze any treated area or cut for stock food. Sugar Cane: 4 weeks. Walnuts: DO NOT graze treated areas. Anise/Lemon Myrtle, Non-Food Producing Plants: not required."
  },

  surfactant:     "Non-ionic wetting agent at 10 mL/100 L required for grapevines (regardless of dilute or concentrate application). Non-ionic surfactant/wetter at label rates for faba beans. Agridex at 1 L/ha for peanuts, green beans, sugar cane. Water-miscible oil only for bananas (no wetting agents). Non-ionic wetter (Wetspray 1000 or BS1000) at 100 mL/100 L for soybeans — DO NOT add crop oils or other adjuvants.",
  sprayerCleanup: "Triple rinse containers before disposal. Add rinsings to spray tank."

};
