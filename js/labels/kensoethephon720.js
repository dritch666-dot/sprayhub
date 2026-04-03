// ─────────────────────────────────────────────────────────
// Kenso Agcare Ethephon 720 Growth Regulator — Label Data
// Anti-cholinesterase Compound | Soluble Concentrate
// Source: Kenso_Ethephon-720_label.pdf
// APVMA Approval No: 55022/59941
// Kenso Corporation (M) Sdn Bhd
// ─────────────────────────────────────────────────────────
productDatabase['kensoethephon720'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "Kenso Agcare Ethephon 720 Growth Regulator",
  company: "Kenso",

  category:         "Plant Growth Regulators",
  activeIngredient: "720 g/L Ethephon",
  group:            "Plant Growth Regulator (Anticholinesterase Compound)",
  modeOfAction:     "Releases ethylene within plant tissue to promote ripening, thinning, defoliation",
  formulation:      "Soluble Concentrate (SL)",
  color:            "#ec4899",
  apvma:            "55022/59941",
  labelPdf:         "Source labels/Kenso_Ethephon-720_label.pdf",
  sdsPdf:           "SDS Labels/Kenso_Ethephon-720-SDS.pdf",
  signalHeading:    "Poison",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Plant Growth Regulator",
    target: ["Fruit Thinning", "Ripening", "Defoliation", "Colour Development"],
    timing: ["Pre-harvest", "Post-bloom"]
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply to weak or stressed plants.",
    "DO NOT apply following application of sodium chlorate, magnesium chlorate or diquat.",
    "DO NOT apply to cotton if bolls have been killed by frost.",
    "DO NOT apply if rain is expected within 8 hours of application.",
    "DO NOT apply if day/night temperature is expected to be below 18°C.",
    "DO NOT mix with hard (alkaline) water.",
    "DO NOT apply before sufficient mature unopened bolls have developed to produce the desired yield."
  ],

  // ── Withholding ─────────────────────────────────────────────
  withholding: {
    harvest: "Apples, Cherries, Macadamia Nuts, Pineapples, Tomatoes, Wine Grapes: 7 days. Table Grapes: 14 days. Peaches and Sugar Cane: 6 weeks. Cotton: 7 days.",
    grazing: "DO NOT feed cotton stubble or gin trash treated with Kenso Agcare Ethephon 720 to livestock. DO NOT graze livestock on treated areas."
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Apples — Advancement of Maturity ─────────────────────
    {
      crop: "Apples — Advancement of Maturity (Jonathan, Delicious)",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Advancement of maturity, improvement or red colour",
          pestList: ["Fruit Ripening", "Colour Improvement"],
          states: ["Qld", "NSW", "Vic", "SA", "WA"],
          rate: "35",
          rateMax: "65",
          unit: "mL/100L",
          stage: "Ensure fruit has reached marketable size before spraying. Apply 2 to 3 weeks before normal harvest period and 7 to 14 days before desired harvest date.",
          note: "35–65 mL PLUS 20 mL of registered non-ionic wetter containing 370 g/L Alcohol ethoxylate/100 L water (add 'stop drop'). Tas only: 25 mL/100 L water (add 'stop drop'). Ensure fruit is picked at the correct stage of maturity. Temperatures between 15° and 32°C give best results. Fruit not harvested will quickly become over-ripe. WHP: 7 days."
        }
      ]
    },

    // ── Apples — Thinning ────────────────────────────────────
    {
      crop: "Apples — Thinning (Gravenstein, Golden Delicious, Jonathan, Red Delicious)",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Thinning of fruit",
          pestList: ["Fruit Thinning"],
          states: ["Vic", "Tas", "WA"],
          rate: "15",
          rateMax: "35",
          unit: "mL/100L",
          stage: "Apply at full bloom OR up to 1 week following full bloom. A second thinning spray 7 to 14 days after may be necessary.",
          note: "Vic only: 15 mL PLUS 20 mL registered non-ionic wetter containing 370 g/L Alcohol ethoxylate/100 L water. Tas only: 35 mL PLUS 20 mL wetter/100 L water. WA only: 35 mL PLUS 20 mL wetter/100 L water. On Gravenstein and Golden Delicious apply carbaryl or 5:6 7.5 ppm NAA. On Jonathan and Red Delicious use higher rate for maximum thinning. Apply at the balloon blossom stage using a high volume sprayer at 4000 L/ha. DO NOT apply if rain is imminent. DO NOT use in sequence or in mixtures with NAA. If maximum temperatures are below 13°C after spraying, inadequate thinning may result. Only use high concentration when heavy set expected. WHP: 7 days."
        }
      ]
    },

    // ── Apples — Aid Complete Removal of Fruit ───────────────
    {
      crop: "Apples — Aid Complete Removal of Fruit (All Varieties)",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Aid complete removal of fruit from trees and encourage a biennial bearing habit",
          pestList: ["Fruit Removal", "Biennial Bearing"],
          states: ["NSW", "SA", "WA"],
          rate: "45",
          rateMax: "65",
          unit: "mL/100L",
          stage: "Apply just prior to full bloom OR 5 to 6 weeks later during early morning or late afternoon when slow drying conditions occur",
          note: "45–65 mL PLUS 25 mL of registered non-ionic wetter containing 370 g/L Alcohol ethoxylate/100 L water. Ensure thorough coverage of foliage and flowers or fruit. Under normal weather conditions use lower rate for Delicious and higher rate for Jonathans. Warm weather following treatment will improve results. If temperatures below 18°C prevail after spraying, fruit removal may be reduced — use higher dose rate. Fruit will loosen in 7 to 10 days and thinning should be complete within 2 to 3 weeks. Limbs can be lightly shaken to aid removal after this time. WHP: 7 days."
        }
      ]
    },

    // ── Apples — Retard Vegetative Growth ────────────────────
    {
      crop: "Apples — Retard Vegetative Growth (Young Trees)",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Retard vegetative growth and stimulate flowering of young apple trees in the following season",
          pestList: ["Vegetative Growth Control", "Flowering Stimulation"],
          states: ["NSW", "SA", "WA"],
          rate: "65",
          rateMax: "135",
          unit: "mL/100L",
          stage: "Apply from full bloom to 6 weeks after full bloom",
          note: "65–135 mL PLUS 25 mL of registered non-ionic wetter containing 370 g/L Alcohol ethoxylate/100 L water. Ensure thorough coverage. Trees should be large enough to support an increased crop. Increase rate towards 135 mL/100 L to maximise thinning and stimulation of blooms during the following season. Note: better results if daminozide at 1000 ppm is added. DO NOT apply if harvesting fruit in same season as flowers or fruitlets will be partially or completely thinned. WHP: 7 days."
        }
      ]
    },

    // ── Cherries ─────────────────────────────────────────────
    {
      crop: "Cherries (Ron's Seedling, St. Margaret, Napoleon, Florence)",
      cropList: ["Cherries"],
      weeds: [
        {
          weed: "Promotes evenness of maturity, early colour development",
          pestList: ["Fruit Ripening", "Colour Development"],
          states: ["NSW"],
          rate: "20",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Treatment with Ethephon 720: apply when approximately 20% of the fruit show pink to red colour development, normally 7 to 10 days before harvest",
          note: "NSW only: Young district 20 mL/100 L water. Orange/Bathurst district 40 mL/100 L water. Ensure thorough coverage of leaves and fruit. Note: high temperature at spraying or following spraying may accelerate results. DO NOT spray when mean daily temperatures exceed 32°C. DO NOT spray when rain is expected within 24 hours OR when temperatures are low (17°C or less). Fruit will mature 3 to 5 days earlier than normal and will be loosened to allow easier harvesting. WHP: 7 days."
        }
      ]
    },

    // ── Table Grapes ─────────────────────────────────────────
    {
      crop: "Table Grapes (Barlinka)",
      cropList: ["Table Grapes"],
      weeds: [
        {
          weed: "Promote early uniform colouring",
          pestList: ["Colour Development"],
          states: ["NSW", "SA"],
          rate: "15",
          rateMax: "20",
          unit: "mL/100L",
          stage: "Apply when 5 to 30% of the berries are coloured (2–4 weeks prior to expected harvest)",
          note: "PLUS 20 mL registered non-ionic wetter containing 370 g/L Alcohol ethoxylate/100 L water. Use the higher rate to maximise the colouring effects required. Ensure thorough coverage of bunches although the foliage need not to be completely covered. WHP: 14 days."
        }
      ]
    },

    // ── Table Grapes — Red Varieties ─────────────────────────
    {
      crop: "Table Grapes — Red Varieties (Red Emperor, Red Prince, Red Malaga, Cardinal, Hamburg, Muscat of Flame, Seedless)",
      cropList: ["Table Grapes"],
      weeds: [
        {
          weed: "Promote early uniform colouring",
          pestList: ["Colour Development"],
          states: ["NSW", "Vic", "SA", "WA"],
          rate: "25",
          rateMax: "40",
          unit: "mL/100L",
          stage: "Apply when 5 to 30% of the berries are coloured",
          note: "25–40 mL PLUS 20 mL registered non-ionic wetter containing 370 g/L Alcohol ethoxylate/100 L water. WA only. WHP: 14 days."
        }
      ]
    },

    // ── Wine Grapes ──────────────────────────────────────────
    {
      crop: "Wine Grapes (Aids Mechanical Harvesting — Semillon)",
      cropList: ["Wine Grapes"],
      weeds: [
        {
          weed: "Aids mechanical harvesting",
          pestList: ["Harvest Aid"],
          states: ["NSW"],
          rate: "40",
          rateMax: "130",
          unit: "mL/100L",
          stage: "Apply 7 days before expected harvest",
          note: "40–130 mL PLUS 100 mL of registered non-ionic wetter containing 370 g/L Alcohol ethoxylate/100 L water. Thorough coverage of upper and lower leaf surfaces is essential. NOTE: Some leaf yellowing and leaf fall, which is not detrimental to vines, may occur. The concentration to use will depend on a number of factors such as seasonal conditions, crop size, weather conditions before and after application, and trellis type. Therefore, before applying consult the local Department of Agriculture for specific recommendations. WHP: 7 days."
        }
      ]
    },

    // ── Mandarins and Imperial Oranges ────────────────────────
    {
      crop: "Mandarins and Oranges (Navel, Valencia)",
      cropList: ["Mandarins", "Oranges"],
      weeds: [
        {
          weed: "Thinning to increase fruit size, reduce size of heavy crop and to even out the production cycle",
          pestList: ["Fruit Thinning"],
          states: ["Qld", "NSW", "SA", "WA", "Vic"],
          rate: "25",
          rateMax: "45",
          unit: "mL/100L",
          stage: "Apply during the early stage of fruit development for thinning and correction of the habit of alternate heavy and light crops",
          note: "Mandarins (Qld, NSW, SA, WA): 35–40 mL/100 L water. Imperial (NSW, WA and intermediate in NSW, WA and Vic): 25–35 mL/100 L water. Oranges Navel (NSW, SA, WA only): 35–40 mL/100 L. Valencia (Vic only): 40–45 mL/100 L. Apply as a foliar spray when fruitlets are about 10 to 15 mm in diameter and when natural fruit drop is occurring. This is usually in November in Qld, December in SA and intermediate in NSW, WA and Vic. Weather conditions influence the degree of thinning and care must be taken not to over-thin. Fruitlets fall off 7 to 14 days after application. Aim to apply 13 to 15 L of spray per 4 to 5 m high tree. Use the higher rate where a very heavy crop is evident. DO NOT apply in cold weather (less than 18°C) OR when rain is likely within 1 to 2 days of spraying. DO NOT add surfactants or wetting agents as leaf fall may be increased. WHP: Not required."
        }
      ]
    },

    // ── Macadamia Nuts ───────────────────────────────────────
    {
      crop: "Macadamia Nuts",
      cropList: ["Macadamia Nuts"],
      weeds: [
        {
          weed: "Aid harvesting by promoting uniform nutfall",
          pestList: ["Harvest Aid"],
          states: ["NSW", "WA"],
          rate: "165",
          rateMax: "165",
          unit: "mL/100L",
          stage: "Apply late March to early May when nuts are mature",
          note: "165 mL PLUS 20 mL of registered non-ionic wetter containing 370 g/L Alcohol ethoxylate/100 L water. H2 variety: 55 to 70 mL/20 mL wetter/370 g/L Alcohol ethoxylate/100 L water. Vary rate according to degree of loosening required. Note: Nuts will be stimulated to fall within 10 to 14 days after spraying. Mechanical shaking may be used 7 to 10 days after spraying. Ensure thorough coverage of foliage and nuts. Ensure tops and insides of trees are adequately sprayed. A small quantity of older leaves will fall after treatment, but production will not be adversely affected. DO NOT use on Teddington variety. WHP: 7 days."
        }
      ]
    },

    // ── Peaches ──────────────────────────────────────────────
    {
      crop: "Peaches",
      cropList: ["Peaches"],
      weeds: [
        {
          weed: "Advancement and concentration of maturity",
          pestList: ["Fruit Ripening"],
          states: ["Vic"],
          rate: "15",
          rateMax: "15",
          unit: "mL/100L",
          stage: "Apply once as foliar spray after commencement of the final fast growth stage",
          note: "15 mL PLUS 20 mL of registered non-ionic wetter containing 370 g/L Alcohol ethoxylate/100 L water. Goulburn Valley only. Timing depends on variety. Determine by measuring twice weekly, fruit circumference, of 20 tagged fruit/block. After rapid growth stage determined, wait 3 to 4 days for further confirmation, then spray. Thorough coverage is essential. Note: instances have been recorded where this product, when applied in peaches at apparently the correct time, has resulted in premature fruit drop, fruit gumming and fruit splitting. WHP: 6 weeks."
        }
      ]
    },

    // ── Pineapples ───────────────────────────────────────────
    {
      crop: "Pineapples (plus Urea) — Initiation of Flowering",
      cropList: ["Pineapples"],
      weeds: [
        {
          weed: "Initiation of flowering",
          pestList: ["Flowering Initiation"],
          states: ["Qld", "WA"],
          rate: "25",
          rateMax: "80",
          unit: "mL/100L",
          stage: "Apply in March or in May–June OR September–October depending on Urea rate",
          note: "With Urea: 80 mL + 5 kg Urea/100 L water/ha (apply 30 mL solution/plant) in March. 0.8 + 100 kg Urea in 2000 L water/ha by boom spray in May–June or September–October. Without Urea: 25 mL/1 OL water (apply 30 mL solution/plant) in February–March. Apply 6.0 L in 2000 L water/ha by boom spray. NOTE: rate should be doubled for plant crops. Pineapples treated with Ethephon in the above time will be ready for picking 7 to 10 months after application."
        }
      ]
    },

    // ── Pineapples — Fruit Ripening ──────────────────────────
    {
      crop: "Pineapples — Fruit Ripening",
      cropList: ["Pineapples"],
      weeds: [
        {
          weed: "Fruit ripening",
          pestList: ["Fruit Ripening"],
          states: ["Qld", "WA"],
          rate: "1700",
          rateMax: "1700",
          unit: "mL/ha",
          stage: "Apply to the final crop in the block before eradication of the crop",
          note: "1.7 L in 1000 L water/ha. For ripening should only be used on even crops successfully induced for flowering with Ethephon. DO NOT use on fields intended for ratoon production. Treatment should be made when the forced fruit are beginning to show their first colour break. An initial harvest may be necessary to remove more advanced fruit. NOTE: DO NOT use on fruit intended for the fresh fruit market. Ethephon is NOT SUITABLE FOR USE ON SUMMER PLANT CROPS because of scattered fruiting. WHP: 7 days."
        }
      ]
    },

    // ── Sugar Cane ───────────────────────────────────────────
    {
      crop: "Sugar Cane",
      cropList: ["Sugar Cane"],
      weeds: [
        {
          weed: "Cane ripening to accelerate ripening in cane and increase c.c.s.",
          pestList: ["Cane Ripening"],
          states: ["Qld", "NSW", "WA"],
          rate: "1000",
          rateMax: "1000",
          unit: "mL/ha",
          stage: "Use in March–April to accelerate ripening in cane planted for early harvest, with harvest no later than August",
          note: "1 L/ha. Apply to actively growing and non-stressed cane with at least eight non-stressed green leaves. Cane varieties Q115, Q119, Q137, Q124, Q96, H56-752 and CP44-101 have all shown high to moderate response to ethephon. Shortening of some internodes and yellowing of leaves may occur without any effect on cane yield. Test any new varieties prior to application. Apply by air or ground spray equipment. Apply in 30 L water/ha by air, and 110–150 L water/ha by ground spray. WHP: 6 weeks."
        }
      ]
    },

    // ── Tomatoes ─────────────────────────────────────────────
    {
      crop: "Tomatoes",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Accelerate ripening, increase g yield",
          pestList: ["Fruit Ripening"],
          states: ["All"],
          rate: "1200",
          rateMax: "1200",
          unit: "mL/ha",
          stage: "Apply once in the season when fruit is 5 to 30% pink or red",
          note: "1.2 L in 440 to 880 L water per hectare. Ensure thorough coverage of fruit and foliage. To determine this, pull a few plants, shake off fruit, weigh and determine above percentage. Optimum harvest maturity is expected 14 to 21 days after spraying. DO NOT use on greenhouse crops. Note: temperature below 18°C may retard colour development and may extend the interval between treatment and harvest. Treatment may cause some yellowing of foliage or defoliation. Sun scald of exposed fruit may occur under high temperature conditions following treatment. WHP: 7 days."
        }
      ]
    },

    // ── Cotton — Acceleration of Boll Opening ────────────────
    {
      crop: "Cotton — Acceleration of Boll Opening",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Acceleration of boll opening, defoliation",
          pestList: ["Boll Opening", "Defoliation"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "2000",
          rateMax: "3000",
          unit: "mL/ha",
          stage: "Apply when there are sufficient mature unopened bolls to produce the desired yield",
          note: "2–3 L in min 20 L water/ha. Use higher rates on stressed plants, on heavy crop canopy, and if day/night temperature 5–7 days after treatment is expected to be below 22°C. Ensure thorough and uniform coverage of bolls. WHP: 7 days."
        }
      ]
    },

    // ── Cotton — Pre-conditioning Before Defoliation ─────────
    {
      crop: "Cotton — Pre-conditioning Before Defoliation",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Pre-conditioning before defoliation",
          pestList: ["Pre-conditioning"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "1300",
          rateMax: "1300",
          unit: "mL/ha",
          stage: "Apply when there are sufficient mature unopened bolls. Apply defoliant 4 to 7 days later.",
          note: "1.3 L in min 20 L water/ha. Ensure thorough and uniform coverage of bolls. WHP: 7 days."
        }
      ]
    },

    // ── Cotton — Defoliation ─────────────────────────────────
    {
      crop: "Cotton — Defoliation (with Thidiazuron)",
      cropList: ["Cotton"],
      weeds: [
        {
          weed: "Defoliation (tank mix with a registered rate of Thidiazuron eg DROPP)",
          pestList: ["Defoliation"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "500",
          rateMax: "1000",
          unit: "mL/ha",
          stage: "Apply when there are sufficient mature unopened bolls to produce the desired yield",
          note: "0.5–1.0 L/ha. Use in a tank with a registered rate of Thidiazuron (eg DROPP). Apply when there are sufficient mature unopened bolls. Total application volume should be no less than 200 L/ha. Ensure thorough and uniform coverage of bolls and leaves. This mixture will also provide some acceleration of boll opening, however a subsequent application of a boll opener may be required to complete boll opening. WHP: 7 days."
        }
      ]
    }
  ]
};
