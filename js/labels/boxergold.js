// ─────────────────────────────────────────────────────────────────────────────
// SYNGENTA BOXER GOLD® — Label Data
// Pre-emergent Herbicide (800 g/L Prosulfocarb + 120 g/L S-Metolachlor)
// Source: Syngenta_BOXER GOLD_Label.pdf
// APVMA Approval No: 61234/144408
// Syngenta Australia Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────

productDatabase['boxergold'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Syngenta Boxer Gold® Herbicide",

  category:         "Herbicides",
  activeIngredient: "800 g/L Prosulfocarb + 120 g/L S-Metolachlor",
  group:            "Group 15 Herbicide (Inhibitors of Very Long Chain Fatty Acid Synthesis)",
  modeOfAction:     "Inhibition of very long chain fatty acid synthesis. Absorbed by roots and shoots (coleoptile) of germinating seedlings with inhibition of growth in the meristematic region.",
  formulation:      "Emulsifiable Concentrate (EC)",
  color:            "#4d7c0f",
  apvma:            "61234/144408",
  company:          "Syngenta",
  labelPdf:         "Source labels/Syngenta_BOXER GOLD_Label.pdf",
  sdsPdf:           "SDS Labels/Syngenter_Boxer Gold_SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Herbicide",
    target: ["Annual Ryegrass", "Grass Weeds", "Broadleaf Weeds"],
    timing: ["Pre-emergent (IBS)", "Early post-emergent (suppression)"]
  },

  // ── Withholding ──────────────────────────────────────────
  withholding: {
    harvest: "Barley, Chickpeas, Faba Beans, Field Peas, Lentils, Lupins, Oats, Triticale, Wheat: NOT REQUIRED WHEN USED AS DIRECTED. Potatoes: NOT REQUIRED WHEN USED AS DIRECTED.",
    grazing: "DO NOT GRAZE OR CUT FOR STOCK FOOD FOR 10 WEEKS AFTER APPLICATION."
  },

  // ── Restraints ──────────────────────────────────────────
  restraints: [
    "DO NOT apply by aircraft.",
    "DO NOT apply to vetch or other pulse crops not listed.",
    "DO NOT use in seeding/tillage systems that cannot ensure accurate seed placement and adequate spatial separation of seed and herbicide.",
    "DO NOT apply to soils prone to waterlogging, sodic soils or soils affected by physical compaction.",
    "DO NOT apply if heavy rains or storms that are likely to cause runoff are forecast within 2 days of application.",
    "DO NOT irrigate treated fields to the point of runoff within three days of application.",
    "DO NOT apply to potato fields where slopes exceed 4%.",
    "Barley, Oats, Triticale, Wheat: DO NOT apply more than 2.5 L/ha per single growing season when applied pre-emergent, IBS or as a split application.",
    "DO NOT apply more than 3.0 L/ha per single growing season when applied post-emergent.",
    "Potatoes: DO NOT apply more than once per crop.",
    "DO NOT sow susceptible crops within 6 months of herbicide application."
  ],

  // ── Surfactant / Tank mix ──────────────────────────────────────────
  surfactant: "No surfactant required. Tank mix with trifluralin (480 g/L) at 0.8–1.5 L/ha for additional weed species and on sandy soils. Tank mix with Monza Herbicide (25 g/ha) in wheat only for wild turnip control.",

  // ── Sprayer Cleanup ──────────────────────────────────────────
  sprayerCleanup: "Empty tank completely and drain the whole system. Thoroughly wash inside the tank using a pressure hose, drain the tank and clean any filters in the tank, pump, line and nozzles. Quarter fill with clean water and circulate through pump, lines, hoses and nozzles. Drain and repeat rinsing procedure twice.",

  // ── Compatibility ──────────────────────────────────────────
  compatibility: "Physical compatibility has been assessed for a range of products. Follow correct mixing order with strong agitation. All mixtures should be tested prior to mixing commercial quantities. Tank mix spray solutions should NOT be left standing in the vat overnight.",

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── 1. Cereals — Pre-emergent IBS (2.5 L/ha) ──
    {
      crop: "Barley, Oats, Triticale, Wheat — Pre-emergent IBS",
      cropList: ["Barley", "Oats", "Triticale", "Wheat"],
      weeds: [
        {
          weed: "Annual Ryegrass (Lolium rigidum) including control of Group 3 resistant populations, Silver Grass (Vulpia spp.), Stone Crop (Crassula spp.)",
          pestList: ["Annual Ryegrass", "Silver Grass", "Stone Crop"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "L/ha",
          stage: "Pre-emergent, apply up to 7 days prior to sowing (IBS)",
          note: "Apply pre-emergent and incorporate mechanically by sowing operation (IBS). Application should be made to a moist seedbed up to 7 days prior to sowing and sufficient rain to thoroughly wet the top 3 to 4 cm of soil should occur within 10 days after spraying. Avoid soil throw into adjacent seeding rows or sites where furrow walls may collapse. Refer to crop tolerance, incorporation and tillage requirements under General Instructions."
        },
        {
          weed: "Barley Grass (Hordeum spp.) [Suppression only]",
          pestList: ["Barley Grass"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "L/ha",
          stage: "Pre-emergent, apply up to 7 days prior to sowing (IBS)",
          note: "Suppression only. Where a high weed density is expected, delay application and sowing until after the emergence of the first barley grass germination following planting rains. Control with cultivation or the application of a registered non-selective herbicide such as glyphosate. Where sowing following a pasture phase, it is recommended that spray topping with GRAMOXONE 360 Pro Herbicide or glyphosate is carried out in the previous year to reduce barley grass seed set."
        }
      ]
    },

    // ── 2. Cereals — Pre-plant Split Application (1.75 L + 750 mL) ──
    {
      crop: "Barley, Oats, Triticale, Wheat — Split Application (Pre-plant + Post-plant Pre-emergent)",
      cropList: ["Barley", "Oats", "Triticale", "Wheat"],
      weeds: [
        {
          weed: "Annual Ryegrass (Lolium rigidum) including control of Group 3 resistant populations, Silver Grass (Vulpia spp.), Stone Crop (Crassula spp.)",
          pestList: ["Annual Ryegrass", "Silver Grass", "Stone Crop"],
          states: ["All"],
          rate: "1.75",
          rateMax: "1.75",
          unit: "L/ha",
          stage: "1.75 L/ha pre-plant followed by 750 mL/ha post-plant pre-emergent",
          note: "Apply pre-plant and incorporate mechanically by the sowing operation (IBS). Application should be made to a moist seedbed up to 7 days prior to planting. Follow with the post-plant application as soon after sowing as possible, but before the crop and weeds emerge. Sufficient rain to thoroughly wet the top 3 to 4 cm of soil should occur within 10 days after each application. At planting, avoid soil throw into adjacent seeding rows or sites where furrow walls may collapse. Split application in oat crops may result in biomass reduction (reduction in dry matter yield). Impacts will be exacerbated in areas of double overlap. Crops generally recover well under good growing conditions."
        },
        {
          weed: "Barley Grass (Hordeum spp.) [Suppression only]",
          pestList: ["Barley Grass"],
          states: ["All"],
          rate: "1.75",
          rateMax: "1.75",
          unit: "L/ha",
          stage: "1.75 L/ha pre-plant followed by 750 mL/ha post-plant pre-emergent",
          note: "Suppression only. Barley Grass Management: Refer to IBS recommendation."
        }
      ]
    },

    // ── 3. Cereals — Early Post-emergent Suppression (2.5–3.0 L/ha) ──
    {
      crop: "Barley, Oats, Triticale, Wheat — Early Post-emergent (Suppression)",
      cropList: ["Barley", "Oats", "Triticale", "Wheat"],
      weeds: [
        {
          weed: "Annual Ryegrass (Lolium rigidum) [Suppression only]",
          pestList: ["Annual Ryegrass"],
          states: ["All"],
          rate: "2.5",
          rateMax: "3.0",
          unit: "L/ha",
          stage: "1 to 3 leaf growth stage, early post-emergent",
          note: "The use of BOXER GOLD is intended as part of an integrated annual ryegrass management strategy that includes varied means to reduce ryegrass survival and seed-set, to sustain low seed bank numbers. Early post-emergent use of BOXER GOLD should not be the primary means of managing ryegrass numbers. Surviving plants not controlled by BOXER GOLD may be stunted and uncompetitive but may still set seed. Apply only to annual ryegrass growing where the soil moisture profile and growing conditions since planting have been good. A follow-up rainfall within 14 days of application is required to achieve a high level of weed suppression. Use the higher rate under moderate to high ryegrass densities. DO NOT apply BOXER GOLD after growth stage Z25 (GS25). DO NOT apply BOXER GOLD post-emergent to crops that have been treated with a pre-emergent or split application of BOXER GOLD. DO NOT apply to crops that are waterlogged or may be subject to waterlogging. DO NOT apply to annual ryegrass that has been stressed due to either a period of marginal moisture or waterlogging. DO NOT apply to crops under stress, such as herbicide damage."
        }
      ]
    },

    // ── 4. Cereals — Toad Rush (1.25–2.5 L/ha) ──
    {
      crop: "Barley, Oats, Triticale, Wheat — Toad Rush",
      cropList: ["Barley", "Oats", "Triticale", "Wheat"],
      weeds: [
        {
          weed: "Toad Rush (Juncus bufonius)",
          pestList: ["Toad Rush"],
          states: ["All"],
          rate: "1.25",
          rateMax: "2.5",
          unit: "L/ha",
          stage: "Pre-emergent IBS, apply up to 7 days prior to sowing",
          note: "Apply pre-emergent and incorporate mechanically by the sowing operation (IBS). Application should be made to a moist seedbed up to 7 days prior to sowing and sufficient rain to thoroughly wet the top 3 to 4 cm of soil should occur within 10 days after spraying. Avoid soil throw into adjacent seeding rows or sites where furrow walls may collapse. Use upper label rate where longer residual control is required or in situations where crop competition is minimal. Refer to crop tolerance, incorporation and tillage requirements under General Instructions."
        }
      ]
    },

    // ── 5. Barley, Wheat + Trifluralin Tank Mix (1.5–2.5 L + trifluralin) ──
    {
      crop: "Barley, Wheat — Pre-emergent IBS with Trifluralin Tank Mix",
      cropList: ["Barley", "Wheat"],
      weeds: [
        {
          weed: "Annual Ryegrass (Lolium rigidum), Paradoxa Grass (Canary Grass), Phalaris spp., Red Fumitory, White Fumitory, Sand Fescue, Silver Grass (Vulpia spp.), Stone Crop (Crassula spp.), Wild Oats, Wireweed (Hogweed)",
          pestList: ["Annual Ryegrass", "Paradoxa Grass", "Phalaris", "Red Fumitory", "White Fumitory", "Sand Fescue", "Silver Grass", "Stone Crop", "Wild Oats", "Wireweed"],
          states: ["All"],
          rate: "1.5",
          rateMax: "2.5",
          unit: "L/ha",
          stage: "Pre-emergent IBS, plus 0.8–1.5 L/ha of 480 g/L trifluralin",
          note: "DO NOT use less than 2.5 L/ha BOXER GOLD where Group 3 resistance is confirmed or suspected. Use of BOXER GOLD below 2.5 L/ha alone or in a tank mix WILL NOT be effective in the control of Group 3 resistant annual ryegrass nor to delay the onset of herbicide resistance development. Apply pre-emergent and incorporate mechanically by sowing operation (IBS). Application should be made to a moist seedbed up to 24 hours prior to sowing and sufficient rain to thoroughly wet the top 3 to 4 cm of soil should occur within 10 days after spraying. Use 1.5 L/ha of a 480 g/L trifluralin in minimum tillage knife/blade point systems only as per trifluralin label. This mixture is recommended for control or suppression of additional weeds, on sandy soils where product movement into the seeding zone poses a crop safety risk or where good soil moisture cannot be assured."
        },
        {
          weed: "Barley Grass (Hordeum spp.), Brome Grass, Deadnettle, Rough Poppy, Yellow Burr Weed [Suppression only]",
          pestList: ["Barley Grass", "Brome Grass", "Deadnettle", "Rough Poppy", "Yellow Burr Weed"],
          states: ["All"],
          rate: "1.5",
          rateMax: "2.5",
          unit: "L/ha",
          stage: "Pre-emergent IBS, plus 0.8–1.5 L/ha of 480 g/L trifluralin",
          note: "Suppression only. Tank mix with 0.8–1.5 L/ha of 480 g/L trifluralin. This mixture is recommended for suppression of additional weeds, on sandy soils where product movement into the seeding zone poses a crop safety risk or where good soil moisture cannot be assured."
        }
      ]
    },

    // ── 6. Wheat + Monza Tank Mix (2.5 L + 25 g Monza) ──
    {
      crop: "Wheat — Pre-emergent IBS with Monza Herbicide Tank Mix",
      cropList: ["Wheat"],
      weeds: [
        {
          weed: "Annual Ryegrass (Lolium rigidum), Silver Grass (Vulpia spp.), Stone Crop (Crassula spp.), Wild Turnip",
          pestList: ["Annual Ryegrass", "Silver Grass", "Stone Crop", "Wild Turnip"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "L/ha",
          stage: "Pre-emergent IBS, plus 25 g/ha Monza Herbicide",
          note: "Apply pre-emergent and incorporate mechanically by sowing operation (IBS). Application should be made to a moist seedbed prior to sowing and sufficient rain to thoroughly wet the top 3 to 4 cm of soil should occur within 10 days after spraying. Avoid soil throw into adjacent seeding rows or sites where furrow walls may collapse. Observe crop rotation guidelines detailed on Monza label."
        },
        {
          weed: "Barley Grass, Brome Grass [Suppression only]",
          pestList: ["Barley Grass", "Brome Grass"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "L/ha",
          stage: "Pre-emergent IBS, plus 25 g/ha Monza Herbicide",
          note: "Suppression only. Observe crop rotation guidelines detailed on Monza label."
        }
      ]
    },

    // ── 7. Potatoes (4–5 L/ha) ──
    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Annual Ryegrass including control of Group 3 resistant populations, Barnyard Grass, Blackberry Nightshade, Fat Hen, Fumitory, Glossy Nightshade, Redroot Amaranth, Summer Grass, Toad Rush",
          pestList: ["Annual Ryegrass", "Barnyard Grass", "Blackberry Nightshade", "Fat Hen", "Fumitory", "Glossy Nightshade", "Redroot Amaranth", "Summer Grass", "Toad Rush"],
          states: ["All"],
          rate: "4",
          rateMax: "5",
          unit: "L/ha",
          stage: "After planting, after first cultivation but no later than 25% potato shoot emergence",
          note: "Apply after planting, after the first cultivation but no later than 25% potato shoot emergence. Application should be made to moist soil. Good soil moisture in the top 3 to 5 cm of soil is required for weed uptake to occur. Drying of the top soil can result in less effective weed control. Cultivation after herbicide application may be detrimental to weed control and crop safety if it results in the herbicide being unevenly distributed in the soil. Crop yellowing may occur where BOXER GOLD is used on soils that have a low organic matter content and which contain more than 60% of fines and silt (crops will recover fully). On these soil types, use rates towards the lower end of the rate range. DO NOT apply more than once per crop. DO NOT apply after 25% potato shoot emergence."
        },
        {
          weed: "Common Thornapple, Fierce Thornapple [Suppression only]",
          pestList: ["Common Thornapple", "Fierce Thornapple"],
          states: ["All"],
          rate: "4",
          rateMax: "5",
          unit: "L/ha",
          stage: "After planting, after first cultivation but no later than 25% potato shoot emergence",
          note: "Suppression only."
        },
        {
          weed: "Capeweed",
          pestList: ["Capeweed"],
          states: ["All"],
          rate: "5",
          rateMax: "5",
          unit: "L/ha",
          stage: "After planting, after first cultivation but no later than 25% potato shoot emergence",
          note: "May be tank mixed with registered knockdown herbicide (e.g. SPRAY.SEED 250 Herbicide) at recommended label rates and timing for control of additional weeds."
        }
      ]
    },

    // ── 8. Pulses — Chickpeas, Faba Beans, Field Peas, Lentils, Lupins (2.5 L/ha) ──
    {
      crop: "Chickpeas, Faba Beans, Field Peas, Lentils, Lupins — Pre-emergent IBS",
      cropList: ["Chickpeas", "Faba Beans", "Field Peas", "Lentils", "Lupins"],
      weeds: [
        {
          weed: "Annual Ryegrass (Lolium rigidum), Silver Grass (Vulpia spp.), Stone Crop (Crassula spp.), Toad Rush (Juncus bufonius)",
          pestList: ["Annual Ryegrass", "Silver Grass", "Stone Crop", "Toad Rush"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "L/ha",
          stage: "Pre-emergent, apply up to 7 days prior to sowing (IBS)",
          note: "Apply as a pre-emergent application to the soil surface up to 7 days prior to sowing and incorporate mechanically by the sowing operation (IBS). Application should be made to a moist seedbed and sufficient rain to thoroughly wet the top 3 to 4 cm of soil should occur within 10 days after spraying. Accuracy of seed placement is critical in ensuring crop selectivity. Unacceptable crop injury, including a reduction in crop vigour and yield loss, may occur where adequate positional selectivity of the herbicide is not maintained or where heavy rainfall occurs during the early stages of crop establishment. Avoid soil throw into adjacent seeding rows or sites where furrow walls may collapse. Shallow sowing is not recommended. Field peas and faba beans have been found to be more susceptible to herbicide injury. Late germinating weeds may not be adequately controlled and a post-emergent graminicide or registered spray-topping herbicide treatment (e.g. GRAMOXONE 360 Pro) may be required to control later germinating weed cohorts or to reduce weed seed set."
        }
      ]
    }

  ]

};
