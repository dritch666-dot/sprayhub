// ─────────────────────────────────────────────────────────
// PROGIBB SG PLANT GROWTH REGULATOR SOLUBLE GRANULE — Label Data
// Plant Growth Regulator | Soluble Granule (SG)
// Source: Valent_ProGibbSG_Label.pdf
// APVMA Approval No: 53027
// Valent BioSciences / Sumitomo Chemical Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['progibbsg'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "ProGibb SG Plant Growth Regulator",
  company: "Valent",

  category:         "Plant Growth Regulators",
  activeIngredient: "400 g/kg gibberellic acid",
  group:            "Plant Growth Regulator (PGR)",
  modeOfAction:     "Gibberellin — promotes cell elongation, delays ripening, stimulates berry size and bunch stretch",
  formulation:      "Soluble Granule (SG)",
  color:            "#065f46",
  apvma:            "53027",
  labelPdf: "Source labels/Valent_Biosciences_A_Div_Of_Sumitomo_Chemical_Progibb_Sg_Plant_Growth_Regulator_Soluble_Granule_Label.pdf",
  sdsPdf:           "SDS Labels/PROGIBB_SG.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Plant Growth Regulator",
    target: ["Berry Size", "Bunch Elongation", "Harvest Delay", "Pasture Stimulation"],
    timing: ["Pre-bloom to post-bloom; crop-stage specific"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Citrus — Navel and Valencia Oranges (Creasing Reduction)",
      cropList: ["Citrus","Navel And Valencia Oranges"],
      weeds: [
        {
          weed: "Creasing reduction — Navel and Valencia Oranges",
          pestList: ["Creasing Reduction — Navel And Valencia Oranges"],
          states: ["All"],
          rate: "2.5",
          rateMax: "5",
          unit: "g/100L",
          stage: "When fruit is 30–50 mm size or golf-ball stage (generally January to February)",
          note: "Apply in a minimum volume of 5000 L/ha to ensure thorough coverage of fruit. Adjust spray tank solution to pH 4.0 to 4.5. Prior to applying ProGibb, remove all previous season Valencia oranges. Use rates lower than 5 g when fruit will be harvested for early markets. DO NOT use where blemish is a problem. WHP: not required when used as directed."
        },
        {
          weed: "Rind ageing delay — Navel Oranges (late marketing, cold storage)",
          pestList: ["Rind Ageing Delay — Navel Oranges"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "g/100L",
          stage: "When oranges turn from green to silver (colourbreak)",
          note: "To delay rind ageing for late marketing or those stored more than 2 weeks prior to sale, and to reduce rind blemish and extend storage life. If fruit drop is a problem apply a stop-drop spray. ProGibb is compatible with stop-drop sprays containing 2,4-D sodium salt (use 2,4-D at 10 ppm). WHP: not required when used as directed."
        },
        {
          weed: "Rind ageing delay — Mandarins",
          pestList: ["Rind Ageing Delay — Mandarins"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "g/100L",
          stage: "At three-quarters to full colour",
          note: "To delay rind ageing for late marketing and reducing rind blemish. Spotting of fruit may occur when applied during or followed by cold weather (2–5°C), frosts or unusually wet weather (late May to mid July). Spotting is transitory and usually disappears within 10–21 days. WHP: not required when used as directed."
        },
        {
          weed: "Rind ageing delay — Grapefruit",
          pestList: ["Rind Ageing Delay — Grapefruit"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "g/100L",
          stage: "When grapefruit turn from green to silver (colour-break) for fruit harvested up to mid-November; or apply mid-June for fruit harvested December or January",
          note: "Apply in a minimum volume of 5000 L/ha. Adjust spray tank solution to pH 4.0 to 4.5. WHP: not required when used as directed."
        },
        {
          weed: "Rind ageing delay — Lemons",
          pestList: ["Rind Ageing Delay — Lemons"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "g/100L",
          stage: "4–6 weeks ahead of maturity of fruit",
          note: "WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Cherries — Berry Size",
      cropList: ["Cherries","Berry Size"],
      weeds: [
        {
          weed: "Berry size — Cherries",
          pestList: ["Berry Size — Cherries"],
          states: ["All"],
          rate: "2.5",
          rateMax: "5",
          unit: "g/100L",
          stage: "Single spray when fruit is early to mid straw coloured",
          note: "Apply in 750–2000 L/ha ensuring thorough coverage of fruit. Good results depend on thorough wetting of fruit and application at correct timing. The use of gibberellic acid may slightly delay colour development and harvest. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Grapes — Currants and Dried Fruit (Berry Thinning)",
      cropList: ["Grapes","Currants And Dried Fruit"],
      weeds: [
        {
          weed: "Berry thinning — Currants (dried fruit)",
          pestList: ["Berry Thinning — Currants"],
          states: ["NSW", "SA"],
          rate: "0.25",
          rateMax: "0.25",
          unit: "g/100L",
          stage: "100% capfall — apply single combined application with 100 ppm Cycocel",
          note: "Ensure thorough coverage of bunches. WHP: not required when used as directed."
        },
        {
          weed: "Berry thinning — Currants (dried fruit, split application)",
          pestList: ["Berry Thinning — Currants"],
          states: ["Vic"],
          rate: "0.25",
          rateMax: "0.25",
          unit: "g/100L",
          stage: "(a) Apply Cycocel 7 days after bunch droop; (b) apply ProGibb SG at 80–100% capfall",
          note: "Use 200 ppm Cycocel on vigorous vines; 300 ppm Cycocel on excessively vigorous Carina vines only. Ensure thorough coverage of bunches. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Grapes — Sultanas (Dried Fruit, Thinning)",
      cropList: ["Grapes","Dried Fruit","Thinning"],
      weeds: [
        {
          weed: "Berry thinning — Sultanas (dried fruit)",
          pestList: ["Berry Thinning — Sultanas"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "g/100L",
          stage: "100% capfall (full flowering)",
          note: "WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Grapes — Sultanas (Fresh Fruit, Bunch Elongation and Thinning)",
      cropList: ["Grapes","Fresh Fruit","Bunch Elongation And Thinning"],
      weeds: [
        {
          weed: "Bunch elongation (stretch) — Sultanas fresh fruit",
          pestList: ["Bunch Elongation — Sultanas Fresh Fruit"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "g/100L",
          stage: "When bunches are half to two-thirds of their final length (10–15 cm), usually 10–14 days before first sign of bloom",
          note: "For adequate coverage of table grapes apply in a minimum volume of 2250 L/ha directed at the bunch area. Prune according to vigour of the vine — avoid exceeding 8 canes. Do NOT exceed 30 bunches per vine. WHP: not required when used as directed."
        },
        {
          weed: "Berry thinning — Sultanas fresh fruit (two applications)",
          pestList: ["Berry Thinning — Sultanas Fresh Fruit"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "g/100L",
          stage: "First application at 40% cap fall; second application at 80% cap fall (usually 2–3 days later)",
          note: "Two separate applications of 2.5 g within the same season are required for thinning. WHP: not required when used as directed."
        },
        {
          weed: "Berry size increase — Sultanas fresh fruit (two applications)",
          pestList: ["Berry Size Increase — Sultanas Fresh Fruit"],
          states: ["All"],
          rate: "7.5",
          rateMax: "7.5",
          unit: "g/100L",
          stage: "First application at 7.5 g when smallest berry size is 4 mm and larger berries up to 6 mm; second application 5–7 days later",
          note: "Two separate applications of 7.5 g within the same season required. Trim bunches within two weeks of shatter to leave 3–4 shoulder sprigs. All spray timing stages judged on top part of bunch. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Grapes — Table Grape Varieties (Perlette, Flame Seedless, Early Madeleine)",
      cropList: ["Grapes","Perlette","Flame Seedless","Early Madeleine"],
      weeds: [
        {
          weed: "Berry thinning — Perlette",
          pestList: ["Berry Thinning — Perlette"],
          states: ["All"],
          rate: "3",
          rateMax: "3",
          unit: "g/100L",
          stage: "At 70% capfall",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "Berry size increase — Perlette",
          pestList: ["Berry Size Increase — Perlette"],
          states: ["All"],
          rate: "5",
          rateMax: "5",
          unit: "g/100L",
          stage: "Following the 3 g thinning application, apply when berries reach 4–5 mm in diameter",
          note: "Trim bunches as required. WHP: not required when used as directed."
        },
        {
          weed: "Berry thinning — Flame Seedless",
          pestList: ["Berry Thinning — Flame Seedless"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "g/100L",
          stage: "At 70% capfall",
          note: "WHP: not required when used as directed."
        },
        {
          weed: "Berry size increase — Flame Seedless (two applications)",
          pestList: ["Berry Size Increase — Flame Seedless"],
          states: ["All"],
          rate: "7.5",
          rateMax: "7.5",
          unit: "g/100L",
          stage: "First application when berries reach 7–9 mm; second application when berries reach 9–10 mm in diameter",
          note: "Two separate applications of 7.5 g required. WHP: not required when used as directed."
        },
        {
          weed: "Berry size increase — Early Madeleine",
          pestList: ["Berry Size Increase — Early Madeleine"],
          states: ["All"],
          rate: "5",
          rateMax: "5",
          unit: "g/100L",
          stage: "When berries reach 4 mm in diameter",
          note: "Excessively vigorous vines should be cinctured 3–5 days before treatment. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Grapes — Wine Grapes (Bunch Elongation / Density Reduction)",
      cropList: ["Grapes","Wine Grapes"],
      weeds: [
        {
          weed: "Bunch elongation / lower bunch density — Wine grapes",
          pestList: ["Bunch Elongation / Lower Bunch Density — Wine Grapes"],
          states: ["All"],
          rate: "1.25",
          rateMax: "1.25",
          unit: "g/100L",
          stage: "Apply once per season only from EL17 (12 leaves separated, inflorescence well developed) to EL25 (80% cap fall)",
          note: "12.5 g/1000 L. Applications at EL17 may stretch the bunch and may be more effective than later applications. Applications at EL25 may result in some bunch thinning. Applications higher than 1.25 g/100 L and later timings may result in reduced bloom in the next season on certain varieties. Apply when temperatures are between 15–30°C. Make sure vines are watered/irrigated prior to application. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Prunes — Harvest Delay",
      cropList: ["Prunes","Harvest Delay"],
      weeds: [
        {
          weed: "Harvest delay — Prunes",
          pestList: ["Harvest Delay — Prunes"],
          states: ["All"],
          rate: "2.5",
          rateMax: "2.5",
          unit: "g/100L",
          stage: "3–4 weeks before normal harvest date (when fruit shows approximately 14% soluble solids)",
          note: "Delays harvest by 14–17 days. Results in increased sugar content and higher dry-out ratio. WHP: not required when used as directed."
        }
      ]
    },

    {
      crop: "Pasture — Winter Dormant Grass-Dominant (Stimulation)",
      cropList: ["Pasture","Winter Dormant Grass-Dominant"],
      weeds: [
        {
          weed: "Pasture stimulation — winter dormant grass-dominant pastures (dairy, sheep lambing)",
          pestList: ["Pasture Stimulation — Winter Dormant Grass-Dominant Pastures"],
          states: ["All"],
          rate: "2.5",
          rateMax: "20",
          unit: "g/100L",
          stage: "Apply from beginning of June to middle of August; multiple applications every 3–4 weeks with final application no later than mid-August",
          note: "Apply in a minimum volume of 100 L/ha. Lower rates 2.5–10 g/100 L on phalaris-dominant pastures; higher rates 10–20 g/100 L on perennial ryegrass, annual ryegrass or cocksfoot-dominant pastures. Growth stimulation usually seen within 7 days and ceases 3–4 weeks after application. Return animals no later than 4 weeks after application to ensure pasture does not become rank. Pastures must be at least 1 year old. Applications in late Winter or early Spring may suppress Spring growth. Ensure adequate soil moisture and nitrogen fertiliser. WHP: not required when used as directed."
        }
      ]
    }

  ,

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER95577: Hops — Growth habit control ──
{
  crop: "Hops — Growth habit control (PER95577)",
  cropList: ["Hops"],
  permitNumber: "PER95577",
  weeds: [
    {
      weed: "Growth habit control (plant regulator)",
      pestList: ["Plant Growth Regulator"],
      states: ["TAS"],
      rate: "35",
      rateMax: "35",
      unit: "g/ha",
      stage: "Spray application after second training (1.5-2m height)",
      note: "PERMIT PER95577 (exp. 30/04/2030). ProGibb SG (gibberellic acid 400 g/kg). Apply 1 application ONLY per year, 3 months prior to normal harvest date. Min 700-1000 L water/ha. Ground-based airblast/airshear sprayer. WHP: Not required."
    }
  ]
},

],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "Apply in water only.",
    "Use with a non-ionic wetter/spreader.",
    "Do NOT use an organosilicone surfactant or any other penetrant.",
    "Do NOT apply to plants under pest, nutritional or water stress.",
    "Do NOT apply when there is insufficient soil moisture to support rapid plant growth.",
    "Use all solutions on the day of preparation.",
    "Do NOT apply within 4 weeks of any oil spray as oil restricts GA uptake (citrus)."
  ],

  compatibility: {
    compatible:   ["2,4-D (as cling spray)", "Cycocel", "Certain insecticides, fungicides, and nutritional sprays"],
    incompatible: ["Organosilicone surfactants or penetrants"],
    notes:        ["Always carry out a small test mix to check compatibility before spraying larger areas. Citrus: if using an adjuvant which includes a spreader, do not add additional spreader."]
  },

  withholding: {
    harvest: "NOT REQUIRED WHEN USED AS DIRECTED.",
    grazing: "Keep stock off treated pasture for 3–4 weeks after application to maximise pasture production."
  },

  surfactant:     "Non-ionic wetter/spreader required at a maximum of 100 ppm. Do NOT use organosilicone surfactant or any other penetrant.",
  sprayerCleanup: "Triple-rinse containers before disposal. Add rinsings to spray tank."

};
