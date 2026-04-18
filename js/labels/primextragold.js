// ─────────────────────────────────────────────────────────────────────────────
// SYNGENTA PRIMEXTRA GOLD® — Label Data
// Pre-emergent Herbicide (370 g/L Atrazine + 290 g/L S-Metolachlor)
// Source: Syngenta_PRIMEXTRA GOLD_Label.pdf
// APVMA Approval No: 50885/127344
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['primextragold'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Syngenta Primextra® Gold Herbicide",

  category:         "Herbicides",
  activeIngredient: "370 g/L Atrazine + 290 g/L S-Metolachlor",
  group:            "Group 5 + 15 Herbicide (Triazine + α-Chloroacetamide)",
  modeOfAction:     "Inhibition of photosynthesis at photosystem II (Group 5, atrazine) combined with inhibition of very long chain fatty acid synthesis (Group 15, S-metolachlor). Residual pre-emergent herbicide absorbed mainly through root and shoot uptake; effectiveness depends on rainfall or irrigation moving it into the weed root zone.",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#4d7c0f",
  apvma:            "50885/127344",
  company:          "Syngenta",
  labelPdf:         "Source labels/Syngenta_PRIMEXTRA GOLD_Label.pdf",
  sdsPdf:           "SDS Labels/Syngenta_Primextra Gold_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Annual Grasses", "Broadleaf Weeds"],
    timing: ["Pre-emergent", "Pre-plant", "Post-plant pre-emergent"]
  },

  // ── Withholding ──────────────────────────────────────────
  withholding: {
    harvest: "NOT REQUIRED WHEN USED AS DIRECTED.",
    grazing: "DO NOT APPLY TO AREAS THAT WILL OR MAY BE GRAZED OR CUT FOR STOCK FOOD WITHIN 28 DAYS AFTER APPLICATION."
  },

  // ── Restraints ──────────────────────────────────────────
  restraints: [
    "DO NOT apply to waterlogged soil.",
    "DO NOT apply if heavy rains or storms that are likely to cause runoff are forecast within 2 days of application.",
    "DO NOT irrigate to the point of runoff for at least 2 days after application.",
    "DO NOT apply when very dry conditions prevail.",
    "DO NOT apply by aircraft.",
    "DO NOT apply product to any drainage line. Drainage lines show evidence of the action of periodically flowing water (eg gravel, pebble, rock or sand bed, scour hole or nick point) and/or an incised channel at least 30 cm deep.",
    "DO NOT handle, mix, apply or conduct testing operations in areas susceptible to runoff where drainage results in rapid entry into waterways, particularly where no specific and effective action has been taken to prevent runoff into waterways. These areas may include areas mounded perpendicular to the contour, roads, access tracks, snig tracks and compacted log dumps.",
    "The maximum rate of atrazine application in all crops except plantation forestry is limited to an amount of product equivalent to 3 kg ai atrazine/ha per year. DO NOT exceed this limit when applying an atrazine herbicide post-emergence, where PRIMEXTRA GOLD® has been applied pre-emergence.",
    "Maize, Sweet Corn: DO NOT use on soils where the sand content exceeds 70%.",
    "DO NOT use tank mixture when the sand content of the soil is greater than 50%.",
    "DO NOT plant crops other than maize, sweet corn, sugarcane or CONCEP® II or EPIVIO® C treated sorghum within 6 months of application of PRIMEXTRA GOLD® at rates up to 3.2 L/ha and for 18 months at rates of PRIMEXTRA GOLD® above 3.2 L/ha. On soils with a pH (CaCl2) greater than 7, a bioassay or analytical test should be undertaken before sowing susceptible crops.",
    "DO NOT apply this product within 60 m of natural or impounded lakes or dams.",
    "DO NOT use in channels and drains.",
    "DO NOT apply to Sorghum seed not previously treated with CONCEP® II or EPIVIO® C.",
    "Re-entry Period: DO NOT enter treated areas without protective clothing until spray has dried."
  ],

  // ── Surfactant / Tank mix ──────────────────────────────────────────
  surfactant: "For sugarcane tank mixes with a knockdown partner where broadleaf weeds and grasses are in the 2 to 4 true leaf stage, add a non-ionic surfactant. Compatible knockdown partners include flowable ametryn (500 g/L) at 2 L/ha, flowable diuron (500 g/L) at 1 L/ha, GRAMOXONE® 360 Pro Herbicide at 0.7 L/ha or SPRAY.SEED® 250 Herbicide at 1 L/ha, applied as a post directed spray. Where broadleaf weeds only have emerged and are at the 2 to 4 true leaf stage, 2,4-D amine (500 g/L) at 2 L/ha can be added.",

  // ── Sprayer Cleanup ──────────────────────────────────────────
  sprayerCleanup: "Triple rinse containers before disposal. Add rinsings to the spray tank. Wash out spray equipment thoroughly after use.",

  // ── Compatibility ──────────────────────────────────────────
  compatibility: "PRIMEXTRA® GOLD is compatible with 2,4-D amine (500 g/L), DUAL GOLD®, flowable ametryn (500 g/L), flowable diuron (500 g/L), GRAMOXONE® 360 Pro and SPRAY.SEED® 250 Herbicide. Settling may occur after storage for some weeks — stir product or invert container several times before opening. Pour the product into the spray vat through a strainer to remove any dry particles or flakes. Add the full quantity of product to the partly filled spray tank while agitating. Continue agitation while spraying.",

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Maize, Sweet Corn — All States — 3.2 L/ha ──
    {
      crop: "Maize, Sweet Corn",
      cropList: ["Maize", "Sweet Corn"],
      weeds: [
        {
          weed: "Barnyard Grass, Blackberry Nightshade, Caltrop, Common Thornapple, Crowsfoot Grass, Liverseed Grass, Lovegrass, Mintweed, Needle Burr, Noogoora Burr, Pigeon Grass, Pigweed, Redroot Amaranth, Slim Amaranth, Summer Grass",
          pestList: [
            "Barnyard Grass",
            "Blackberry Nightshade",
            "Caltrop",
            "Common Thornapple",
            "Crowsfoot Grass",
            "Liverseed Grass",
            "Lovegrass",
            "Mintweed",
            "Needle Burr",
            "Noogoora Burr",
            "Pigeon Grass",
            "Pigweed",
            "Redroot Amaranth",
            "Slim Amaranth",
            "Summer Grass"
          ],
          states: ["All"],
          rate: "3.2",
          rateMax: "3.2",
          unit: "L/ha",
          stage: "Pre-emergent (pre-plant, at planting, or immediately after planting, before crops and weeds have germinated)",
          note: "Apply before, at or immediately after planting and before crops and weeds have germinated using a low volume boom sprayer applying 60 to 120 L/ha. Pre-plant: Apply the product to an even, unridged seedbed and incorporate with suitable harrows (eg 5 row) or when sowing occurs shortly after application by the planting operation trailing covering harrows. Post-plant: If the soil is ridged, cloddy or with heavy trash at application then mechanical incorporation is not recommended. Rainfall or irrigation is then required to incorporate and activate the product. Moisture in the top 3 to 4 cm of soil is required to keep the product activated. In flood or furrow irrigation situations, mechanical incorporation is required to ensure the irrigation water comes in contact with the product to ensure activation. DO NOT throw untreated soil onto treated areas as this will reduce weed control. Apply as a tank mixture as a pre-emergent application where grasses are the major problem. Use rates of DUAL GOLD® towards the higher end of the range on heavy soils where a high grass population is expected. Low grass populations can be achieved by limiting seed production the previous season. Agronomic practices which reduce large grass weed seed banks in the soil before sowing should be used. Maize, Sweet Corn: DO NOT use on soils where the sand content exceeds 70%. DO NOT use tank mixture when the sand content of the soil is greater than 50%. Precaution: Crop retardation or injury can occur when sufficient rainfall is received after application to carry the herbicide to the germinating seed or into the root zone. Under certain unfavourable environmental conditions weed escapes may occur. These should be controlled by an appropriate post-emergent herbicide application. Consult your local Syngenta representative for further details."
        }
      ]
    },

    // ── 2. Sorghum (CONCEP® II / EPIVIO® C seed safener treated) — Qld, NSW only — 3.2 L + 0.5–1 L Dual Gold® tank mix ──
    {
      crop: "Sorghum — Seed treated with CONCEP® II or EPIVIO® C Seed Safener",
      cropList: ["Sorghum"],
      weeds: [
        {
          weed: "Barnyard Grass, Blackberry Nightshade, Caltrop, Common Thornapple, Crowsfoot Grass, Liverseed Grass, Lovegrass, Mintweed, Needle Burr, Noogoora Burr, Pigeon Grass, Pigweed, Redroot Amaranth, Slim Amaranth, Summer Grass",
          pestList: [
            "Barnyard Grass",
            "Blackberry Nightshade",
            "Caltrop",
            "Common Thornapple",
            "Crowsfoot Grass",
            "Liverseed Grass",
            "Lovegrass",
            "Mintweed",
            "Needle Burr",
            "Noogoora Burr",
            "Pigeon Grass",
            "Pigweed",
            "Redroot Amaranth",
            "Slim Amaranth",
            "Summer Grass"
          ],
          states: ["QLD", "NSW"],
          rate: "3.2",
          rateMax: "3.2",
          unit: "L/ha",
          stage: "Pre-emergent (pre-plant, at planting, or immediately after planting)",
          note: "Qld and NSW only. Tank mix: 3.2 L/ha PRIMEXTRA GOLD® plus 0.5 to 1 L/ha DUAL GOLD® Herbicide. DO NOT apply to Sorghum seed not previously treated with CONCEP® II or EPIVIO® C. Apply before, at or immediately after planting using a low volume boom sprayer applying 60 to 120 L/ha. Use rates of DUAL GOLD® towards the higher end of the range on heavy soils where a high grass population is expected. DO NOT use tank mixture when the sand content of the soil is greater than 50%. Pre-plant: apply to an even unridged seedbed and incorporate with harrows or by the planting operation. Post-plant: rainfall or irrigation is required to activate the product; moisture in the top 3 to 4 cm of soil is required. DO NOT throw untreated soil onto treated areas as this will reduce weed control."
        }
      ]
    },

    // ── 3. Sugarcane plant and ratoon — Sth Qld (Bundaberg Sth) & NSW — 3.6–4.8 L/ha ──
    {
      crop: "Sugarcane — Plant and Ratoon — Sth Qld (Bundaberg Sth), NSW",
      cropList: ["Sugarcane"],
      weeds: [
        {
          weed: "Awnless Barnyard Grass, Barnyard Grass, Bellvine, Billygoat Weed (Blue Top), Blackberry Nightshade, Caltrop, Common Sowthistle (Milk Thistle), Common Thornapple, Crowsfoot Grass, Green Summer Grass, Guinea Grass, Liverseed Grass, Mexican Clover, Mintweed, Needle Burr, Passionfruit vines, Pigeon Grass, Pigweed, Redroot Amaranth, Square Weed, Star of Bethlehem, Summer Grass, Wild Rose",
          pestList: [
            "Awnless Barnyard Grass",
            "Barnyard Grass",
            "Bellvine",
            "Billygoat Weed",
            "Blackberry Nightshade",
            "Caltrop",
            "Common Sowthistle",
            "Common Thornapple",
            "Crowsfoot Grass",
            "Green Summer Grass",
            "Guinea Grass",
            "Liverseed Grass",
            "Mexican Clover",
            "Mintweed",
            "Needle Burr",
            "Passionfruit Vine",
            "Pigeon Grass",
            "Pigweed",
            "Redroot Amaranth",
            "Square Weed",
            "Star of Bethlehem",
            "Summer Grass",
            "Wild Rose"
          ],
          states: ["QLD", "NSW"],
          rate: "3.6",
          rateMax: "4.8",
          unit: "L/ha",
          stage: "Pre-emergent or early post-emergent",
          note: "Sth Qld (Bundaberg Sth) and NSW only. Apply as a pre- or post-emergent application to crop. Application should be made to a moist soil before weeds and grasses have germinated. If conditions remain dry for a period of 10 days after spraying, irrigation or a shallow cultivation (2.5 cm) may assist results. DO NOT throw untreated soil onto treated areas as this will reduce weed control. Sth Qld: Use rates toward the higher end of the range on heavy soils where a high grass population is expected. Where broadleaf weeds and grasses have emerged and are in the 2 to 4 true leaf stage, knockdown herbicides such as a flowable ametryn (500 g/L) at 2 L/ha, a flowable diuron (500 g/L) at 1 L/ha, GRAMOXONE® 360 Pro Herbicide at 0.7 L/ha or SPRAY.SEED® 250 Herbicide at 1 L/ha, applied as a post directed spray, can be added. Where broadleaf weeds only have emerged and are at the 2 to 4 true leaf stage then a 2,4-D amine (500 g/L) at 2 L/ha should be added. In all cases, add a non-ionic surfactant. DIURON TANK MIXES: Read and follow all label directions including restraints, spray drift restraints, mandatory no-spray zones, critical comments, withholding periods, regional use restrictions and safety directions for the tank mix products."
        }
      ]
    },

    // ── 4. Sugarcane plant and ratoon — Nth Qld (Mackay Nth) only — 4.8–6 L/ha ──
    {
      crop: "Sugarcane — Plant and Ratoon — Nth Qld (Mackay Nth)",
      cropList: ["Sugarcane"],
      weeds: [
        {
          weed: "Awnless Barnyard Grass, Barnyard Grass, Bellvine, Billygoat Weed (Blue Top), Blackberry Nightshade, Caltrop, Common Sowthistle (Milk Thistle), Common Thornapple, Crowsfoot Grass, Green Summer Grass, Guinea Grass, Liverseed Grass, Mexican Clover, Mintweed, Needle Burr, Passionfruit vines, Pigeon Grass, Pigweed, Redroot Amaranth, Square Weed, Star of Bethlehem, Summer Grass, Wild Rose",
          pestList: [
            "Awnless Barnyard Grass",
            "Barnyard Grass",
            "Bellvine",
            "Billygoat Weed",
            "Blackberry Nightshade",
            "Caltrop",
            "Common Sowthistle",
            "Common Thornapple",
            "Crowsfoot Grass",
            "Green Summer Grass",
            "Guinea Grass",
            "Liverseed Grass",
            "Mexican Clover",
            "Mintweed",
            "Needle Burr",
            "Passionfruit Vine",
            "Pigeon Grass",
            "Pigweed",
            "Redroot Amaranth",
            "Square Weed",
            "Star of Bethlehem",
            "Summer Grass",
            "Wild Rose"
          ],
          states: ["QLD"],
          rate: "4.8",
          rateMax: "6",
          unit: "L/ha",
          stage: "Pre-emergent or early post-emergent",
          note: "Nth Qld (Mackay Nth) only. Apply as a pre- or post-emergent application to crop. Application should be made to a moist soil before weeds and grasses have germinated. Nth Qld: Application must be made to moist soil and rainfall or irrigation should occur within 24 hours of application. Use rates toward the higher end of the range where high Green Summer Grass population is expected. If conditions remain dry for a period of 10 days after spraying, irrigation or a shallow cultivation (2.5 cm) may assist results. DO NOT throw untreated soil onto treated areas as this will reduce weed control. Where broadleaf weeds and grasses have emerged and are in the 2 to 4 true leaf stage, knockdown herbicides such as a flowable ametryn (500 g/L) at 2 L/ha, a flowable diuron (500 g/L) at 1 L/ha, GRAMOXONE® 360 Pro Herbicide at 0.7 L/ha or SPRAY.SEED® 250 Herbicide at 1 L/ha, applied as a post directed spray, can be added. Where broadleaf weeds only have emerged and are at the 2 to 4 true leaf stage then a 2,4-D amine (500 g/L) at 2 L/ha should be added. In all cases, add a non-ionic surfactant. DIURON TANK MIXES: Read and follow all label directions including restraints, spray drift restraints, mandatory no-spray zones, critical comments, withholding periods, regional use restrictions and safety directions for the tank mix products."
        }
      ]
    }

  ]
};
