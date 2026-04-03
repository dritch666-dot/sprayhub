// ─────────────────────────────────────────────────────────────────────────────
// NUFARM PYROXASULFONE 850 WG — Label Data
// Group 15 Herbicide (VLCFA inhibitor) | Water Dispersible Granule (WG)
// Source: Nufarm-Pyroxasulfone-850WG-Label.pdf
// APVMA Approval No: 93314/138710
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['nufarmpyroxasulfone850wg'] = {
  name:             "Nufarm Pyroxasulfone 850 WG",
  company: "Nufarm",

  category:         "Herbicides",
  activeIngredient: "850 g/kg Pyroxasulfone",
  group:            "Group 15 Herbicide",
  modeOfAction:     "VLCFA inhibitor (very long chain fatty acids); inhibits growth in meristematic area of germinating weeds",
  formulation:      "Water Dispersible Granule (WG)",
  color:            "#7c3aed",
  apvma:            "93314",
  labelPdf:         "Source labels/Nufarm-Pyroxasulfone-850WG-Label.pdf",
  sdsPdf:           "SDS Labels/NUFARM-PYROXASULFONE-850WG-SDS.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Herbicide",
    target: ["Annual Grasses", "Broadleaf Weeds", "Rush"],
    timing: ["Pre-sowing", "Pre-emergence"]
  },

  crops: [
    {
      crop: "Wheat (not durum wheat), Triticale",
      cropList: ["Triticale", "Wheat"],
      weeds: [
        { weed: "Annual Phalaris (Phalaris paradoxa only), Annual Ryegrass (Lolium rigidum), Barley grass (Hordeum leporinum), Silver grass (Vulpia bromoides, Vulpia myuros), Toad rush (Juncus bufonius)", pestList: ["Annual Phalaris", "Annual Ryegrass", "Barley Grass", "Silver Grass", "Toad Rush"], states: ["All"], rate: "118", rateMax: "118", unit: "g/ha", stage: "Pre-sowing; apply and incorporate by sowing (IBS) within 3 days", note: "Apply pre-sowing and incorporate by sowing (IBS) using knife points and press wheels or narrow points and harrows. For best results apply just before sowing. Avoid throwing treated soil into adjacent crop rows when sowing with knife points and press wheels. Apply directly to uncultivated soil for optimal weed control. Weed control may be greatly reduced where weed seeds have been buried by cultivation prior to sowing. Weed control may be adversely affected by insufficient rainfall within 7 to 10 days after application. In soils prone to leaching, heavy rainfall may cause movement of herbicide out of weed seed zone." },
        { weed: "Great brome (Bromus diandrus) [Suppression only], Wild oat (Avena fatua) [Suppression only]", pestList: ["Great Brome", "Wild Oat"], states: ["All"], rate: "118", rateMax: "118", unit: "g/ha", stage: "Pre-sowing; suppression of great brome and wild oat", note: "Pyroxasulfone is most effective when grass weed seeds are present on or very close to soil surface at time of application. Control tends to decrease as depth of weed seeds increases. It is rare that all great brome and wild oat seeds will be on soil surface. Plants may germinate from seeds buried by sowing operation, livestock, or weed seed self-burial mechanisms. Therefore only partial control or suppression generally expected. Follow-up application with suitable post-emergence herbicide may be required to control remaining plants. Apply to uncultivated soil and incorporate by sowing within 3 days." }
      ]
    },
    {
      crop: "Chickpeas, Field Peas, Lentils, Lupins",
      cropList: ["Chickpeas", "Field Peas", "Lentils", "Lupins"],
      weeds: [
        { weed: "Annual Phalaris (Phalaris paradoxa only), Annual Ryegrass (Lolium rigidum), Barley grass (Hordeum leporinum), Silver grass (Vulpia bromoides, Vulpia myuros), Toad rush (Juncus bufonius)", pestList: ["Annual Phalaris", "Annual Ryegrass", "Barley Grass", "Silver Grass", "Toad Rush"], states: ["All"], rate: "118", rateMax: "118", unit: "g/ha", stage: "Pre-sowing; apply and incorporate by sowing (IBS) within 3 days", note: "Apply pre-sowing and incorporate by sowing (IBS) using knife points and press wheels or narrow points and harrows. For best results apply just before sowing. Avoid throwing treated soil into adjacent crop rows when sowing with knife points and press wheels. To reduce risk of crop effects refer to Crop Safety section. Apply directly to uncultivated soil for optimal weed control. Chickpea, field pea, lentil and lupin crops may provide less competition than cereal crops; weeds surviving application may grow taller and tiller more, giving appearance of poorer weed control compared to wheat/triticale." },
        { weed: "Great brome (Bromus diandrus) [Suppression only], Wild oat (Avena fatua) [Suppression only]", pestList: ["Great Brome", "Wild Oat"], states: ["All"], rate: "118", rateMax: "118", unit: "g/ha", stage: "Pre-sowing; suppression of great brome and wild oat", note: "Pyroxasulfone is most effective when grass weed seeds are present on or very close to soil surface. Control tends to decrease as depth of weed seeds increases. Only partial control or suppression generally expected. Follow-up application with suitable post-emergence herbicide may be required. Apply to uncultivated soil and incorporate by sowing within 3 days." }
      ]
    }
  ],

  // ═══ AGRONOMIC & SAFETY ═══
  restraints: [
    "DO NOT apply with aircraft.",
    "DO NOT plant durum wheat (Triticum durum) after the application of Nufarm Pyroxasulfone 850WG (refer to Crop Rotation Recommendations for further advice).",
    "DO NOT apply if heavy rain has been forecast within 48 hours.",
    "DO NOT apply unless incorporation by sowing (IBS) can be performed within 3 days of application.",
    "DO NOT apply to waterlogged soil.",
    "DO NOT allow first irrigation tailwater from land treated with Nufarm Pyroxasulfone 850WG to enter aquatic and wetland areas including aquacultural ponds, surface streams and rivers.",
    "DO NOT allow bystanders to come into contact with the spray cloud.",
    "DO NOT apply in a manner that may cause unacceptable impact to native vegetation, agricultural crops, landscaped gardens and aquaculture production from spray drift.",
    "DO NOT apply unless wind speed is between 3 and 20 kilometres per hour at application site during time of application.",
    "DO NOT apply if hazardous surface temperature inversion conditions present at application site.",
    "DO NOT apply by boom sprayer unless spray droplets are not smaller than COARSE spray droplet size category.",
    "DO NOT allow entry into treated areas until spray has dried, unless wearing cotton overalls buttoned to neck and wrist and elbow-length chemical resistant gloves.",
    "DO NOT undersow with pasture species (legumes or grasses) following application of Nufarm Pyroxasulfone 850WG."
  ],

  compatibility: {
    compatible: [
      "Nufarm Associate®",
      "Nufarm Avadex® Xtra",
      "Nufarm Kamba® 750",
      "Diuron 900 WG formulations",
      "960 g/L S-metolachlor formulations",
      "Nufarm 2,4-D Ester 680",
      "Nufarm 2,4-D Amine 625",
      "Glean®",
      "Nufarm Crucial®",
      "Nufarm Glyphosate 450",
      "Nufarm Weedmaster DST®",
      "Nufarm Weedmaster Duo®",
      "Nufarm TriflurX®",
      "Goal® EC",
      "Paraquat",
      "Spray.Seed®",
      "Nufarm Nail®",
      "Triasulfuron",
      "B-Power®",
      "Monza®",
      "Oxyfluorfen",
      "Fastac®",
      "Le-mat®"
    ],
    incompatible: [],
    notes: [
      "For application prior to planting wheat or triticale: compatible with most listed herbicides.",
      "For application prior to planting chickpeas, field peas, lentils or lupins: limited studies show compatible with Nufarm TriflurX®, simazine 900 WG formulations, Nufarm TriflurX® + simazine, simazine + atrazine 900 WG formulations, Nufarm Pendimethalin 440, Nufarm Igran®.",
      "Mixtures with paraquat require particular attention to agitation — ensure Pyroxasulfone remains in suspension.",
      "When Pyroxasulfone is used with other herbicides that may cause crop damage in wet conditions, crop damage may be exacerbated."
    ]
  },

  withholding: {
    harvest: "Not required when used as directed",
    grazing: "Wheat, Triticale — DO NOT GRAZE OR CUT FOR STOCKFOOD FOR 6 WEEKS AFTER APPLICATION. Chickpeas, Field peas, Lentils, Lupins — DO NOT GRAZE OR CUT FOR STOCKFOOD FOR 8 WEEKS AFTER APPLICATION."
  },

  recropping: {
    intervals: [
      { crops: ["Wheat (not durum wheat)", "Triticale"], months: 0, minRainfall: "0 mm" },
      { crops: ["Cotton", "Maize", "Mung beans", "Sorghum", "Soybeans", "Sunflowers"], months: 5, minRainfall: "150 mm" },
      { crops: ["Barley", "Canola", "Chickpeas", "Faba beans", "Field peas", "Lentils", "Lupins", "Vetch", "Subterranean clover"], months: 9, minRainfall: "250 mm" },
      { crops: ["Durum wheat", "Oats", "Lucerne", "Medic"], months: 21, minRainfall: "550 mm" }
    ],
    notes: [
      "CRITICAL — DO NOT plant durum wheat after Pyroxasulfone application; severe damage may occur. Minimum recropping interval is 21 months with 550 mm interim rainfall.",
      "For canola sown year after application: occasional crop stunting may occur but no yield reductions measured.",
      "Chickpeas, field peas, lentils, lupins: can be sown immediately after application where Pyroxasulfone has NOT been incorporated. However, where Pyroxasulfone HAS been incorporated (e.g., by previous sowing of subsequently failed crop), do NOT sow legume crops for at least 9 months after application.",
      "Interim rainfall = total rainfall between application and planting of following crop.",
      "For winter crops (≥250 mm rainfall required): if rain from application to end of spring <125 mm and isolated heavy summer/autumn falls required to achieve 250 mm, extended recropping intervals may apply."
    ]
  },

  surfactant: "Not required — Pyroxasulfone is a water-dispersible granule that disperses readily in water.",

  sprayerCleanup: [
    "Following use of Nufarm Pyroxasulfone 850WG, spraying equipment should be thoroughly cleaned before use for other products.",
    "Cleaning should occur immediately following application.",
    "Spray unit should first be completely emptied.",
    "Sprayer including all filters and lines should be thoroughly rinsed with water to remove all traces of product.",
    "Sprayer clean-up must be carried out in area clear of waterways, desirable vegetation and tree roots.",
    "If using with tank-mix partner, refer to sprayer clean-up instructions for other product which may be more rigorous."
  ],

  // ═══ ADDITIONAL NOTES ═══
  notes: {
    incorporation: "Nufarm Pyroxasulfone 850WG should be applied prior to sowing and incorporated by sowing using knife points and press wheels, or narrow points and harrows. When incorporation is by knife points and press wheels, weeds germinating in seed row may not be controlled. Weeds just about to emerge or emerged weeds not controlled by knockdown herbicide at sowing may not be controlled.",
    applicationTiming: "Incorporate by sowing as soon as practicable after application, but no later than 3 days after application.",
    sandySoils: "Weed control may be reduced in soil prone to leaching where rainfall after application and sowing is sufficiently heavy to cause movement of herbicide out of weed seed zone.",
    modeOfAction: "Pyroxasulfone is a residual, soil-applied, pre-emergence herbicide. It is absorbed by roots and to lesser extent by shoots of germinating weeds, working by inhibiting growth in meristematic area. Weed control is optimised when applied evenly to moist soil just prior to incorporation by sowing with sufficient rainfall soon after sowing to ensure uptake by germinating weeds.",
    resistanceWarning: "Nufarm Pyroxasulfone 850WG is a member of isoxazoline group and is Group 15 herbicide. Some naturally-occurring weed biotypes resistant to this herbicide may exist. These resistant weeds will NOT be controlled by Pyroxasulfone or other Group 15 herbicides. DO NOT rely exclusively on this product for weed control. Use as part of integrated weed management program with herbicides of other modes of action and non-chemical methods. Refer to CropLife Australia resistance management strategies at www.croplife.org.au.",
    waterManagement: "DO NOT allow first irrigation tailwater from treated land to enter aquatic/wetland areas including aquacultural ponds, surface streams and rivers.",
    safetyRe_entry: "DO NOT allow entry into treated areas until spray has dried, unless wearing cotton overalls buttoned to neck and wrist (or equivalent) and elbow-length chemical resistant gloves. Clothing must be laundered after each day's use.",
    signalHeadingInfo: "May cause allergic skin reaction. Causes serious eye irritation. Suspected of causing cancer. May cause damage to organs through prolonged or repeated exposure."
  }
};
