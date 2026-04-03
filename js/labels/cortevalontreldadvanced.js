// ─────────────────────────────────────────────────────────────────────────────
// LONTREL ADVANCED HERBICIDE — Label Data
// Amine Salt | Group I Herbicide
// Source: Corteva_LontrelAdvanced_Label.pdf
// APVMA Approval No: 65587/110938
// Corteva Agriscience
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['cortevalontreldadvanced'] = {
  name:             "Lontrel Advanced Herbicide",
  company: "Corteva",

  category:         "Herbicides",
  activeIngredient: "600 g/L Clopyralid (as dimethylammonium salt)",
  group:            "Group I Herbicide",
  modeOfAction:     "Disrupters of plant cell growth - broadleaf weed control",
  formulation:      "Amine Salt",
  color:            "#4338ca",
  apvma:            "65587",
  labelPdf:         "Source labels/Corteva_LontrelAdvanced_Label.pdf",
  sdsPdf:           "SDS Labels/LONTREL_ADVANCED_HERBICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Herbicide",
    target: ["Broadleaf weeds", "Thistles", "Capeweed"],
    timing: ["Active growth stage", "Prior to flowering"]
  },

  crops: [
    {
      crop: "Fallow / Pre-sowing — Weed Table",
      cropList: ["Fallow / Pre-sowing \u2014 Weed Table"],
      weeds: [
        { weed: "Up to 4 leaf, 10 cm diameter", pestList: [], states: ["All"], rate: "100", rateMax: "150", unit: "mL/ha", notes: "Chlorosulfuron mixes – 2 leaf to 1st node crop stage." },
        { weed: "Up to 6 node, 10 cm diameter Up to 4 branch, 10 cm diameter", pestList: [], states: ["All"], rate: "50", unit: "mL/ha", notes: "Bromoxynil/MCPA mixes – 3 leaf to 1st node crop stage." },
        { weed: "Runners up to 10 cm, maximum 16 leaf", pestList: [], states: ["All"], rate: "40", unit: "mL/ha", notes: "4 to 5 leaf through to booting crop stage. Weeds should be young and actively growing. Weeds will become stunted and non-competitive soon after application although final results may not show for some weeks." },
        { weed: "Up to 4 branch, 10 cm diameter Up to 4 node, 10 cm tall Up to 6 leaf, 10 cm tall Up to 5 trifoliate, 5 cm diameter Up to 6 leaf, maximum. 10 cm diameter Up to 6 leaf, maximum. 5cm diameter", pestList: [], states: ["All"], rate: "50", unit: "mL/ha", notes: "Bromoxynil/MCPA mixes – 3 leaf to 1st node crop stage." },
        { weed: "4 to 6 leaf and maximum. 8 cm diameter", pestList: [], states: ["All"], rate: "75", unit: "mL/ha", notes: "4 to 5 leaf through to booting crop stage. Weeds should be young and actively growing. Weeds will become stunted and non- competitive soon after application although final results may not show for some weeks." },
        { weed: "Up to 6 leaf, maximum. 10 cm diameter", pestList: [], states: ["All"], rate: "75", unit: "mL/ha", notes: "Lontrel Advanced + LVE MCPA mixes – 4 to 5 leaf to 1st node crop stage." },
        { weed: "Rosettes up to 10 cm maximum diameter", pestList: [], states: ["All"], rate: "25", unit: "mL/ha", notes: "4 to 5 leaf through to booting crop stage. For thistle control, Lontrel Advanced rate will depend on density, growth stage, climatic conditions and time of application. Use higher rates for best control where high density and/or large weeds occur. MCPA or 2, 4-D mixes apply from 4 to 5 leaf to 1st node crop stage. Weeds should be young and actively growing. Weeds will become stunted and non- competitive soon after application although final results may not show for some weeks." },
        { weed: "4 to 8 leaf, 5 to 10 cm diameter", pestList: [], states: ["All"], rate: "25", rateMax: "50", unit: "mL/ha" },
        { weed: "Young rosettes up to 8 true leaves", pestList: [], states: ["All"], rate: "50", unit: "mL/ha", notes: "Apply to actively growing young rosettes. Use UptakeTM Spraying Oil at 500 mL/100 L of water for improved control with picloram/MCPA tank-mixes or BS1000 with Ally/LVE MCPA tank-mixes. Apply tank-mixes from 4 to 5 leaf to 1st node crop stage." },
        { weed: "5 to 15 cm rosettes", pestList: [], states: ["All"], rate: "250", unit: "mL/ha", notes: "Weeds should be a minimum 5 cm in diameter, and growing actively. This rate will give control until harvest and substantially reduce weed numbers the following season. Apply from 4 to 5 leaf to 1st node crop stage." },
        { weed: "Small rosettes to larger rosettes up to stem elongation and before flowering", pestList: [], states: ["All"], rate: "500", unit: "mL/ha", notes: "Spray from the rosette to the shooting stage of growth. For small rosette seedling plants use the lower rate. For large rosette multi-crown and/or perennial plants use the higher rate. Addition of a 100% non-ionic surfactant such as BS1000 at 0.1% v/v is recommended. Add diquat (200 g/L) at 1 L/100 L water plus a surfactant after opening of the first flowers, to prevent the formation of viable seed. Where diquat is added use a directed spray to avoid tree injury." },
        { weed: "Actively growing rosettes, seedlings up to 15 cm diameter or height", pestList: [], states: ["All"], rate: "3 - 4.25 L/ha", rateMax: "4.25", unit: "mL/ha", rateText: "3 - 4.25 L/ha", notes: "Higher rates give better suppression. At rates greater than 3 L/ha use a directed spray to avoid tree injury." },
        { weed: "Pre-emergent", pestList: [], states: ["All"], rate: "1", rateMax: "3", unit: "L/ha", notes: "Use the higher rate for extended pre-emergence control (greater than three (3) months)" },
        { weed: "Actively growing rosettes, seedlings up to 15 cm diameter or height", pestList: [], states: ["All"], rate: "250", rateMax: "500", unit: "mL/ha", notes: "Use the low rate only under ideal conditions with excellent weed growth and where knockdown control of small weeds is desired. Use the high rate where longer control is required of larger weeds. For the control of annual and certain perennial grasses Lontrel Advanced can be tank-mixed with Verdict 520 Herbicide. See also comments on mixing in DIRECTIONS FOR USE." },
        { weed: "Actively growing rosettes and seedlings greater than 15 cm diameter or height up to stem elongation and before flowering", pestList: [], states: ["All"], rate: "1", unit: "L/ha" },
        { weed: "From early bud to flowering (December to February)", pestList: ["From Early Bud To Flowering"], states: ["All"], rate: "500", rateMax: "1000", unit: "mL/ha", notes: "For best control of California thistle use a wetter such as B S1000 at 0.1% v/v. A second annual application may also be required for best control." },
        { weed: "5 cm rosettes", pestList: [], states: ["All"], rate: "1", unit: "L/ha" },
        { weed: "Small rosettes to larger rosettes up to stem elongation and before flowering", pestList: [], states: ["All"], rate: "500", unit: "mL/ha", notes: "Spray from the rosette to the shooting stage of growth. For small rosette seedling plants use the lower rate. For large rosette multi-crown and/or perennial plants use the higher rate. Addition of a 100% non-ionic surfactant such as BS1000 at 0.1% v/v is recommended. Add diquat (200 g/L) at 1 L/100 L water plus a surfactant after opening of the first flowers, to prevent the formation of viable seed. Where diquat is added use a directed spray to avoid injury to non-target plants." },
        { weed: "Young seedlings to mature plants", pestList: ["Young Seedlings To Mature Plants"], states: ["All"], rate: "160", rateMax: "250", unit: "mL/100L", rateText: "160 or 250 mL/100 L water", notes: "Spray foliage when growth is active. Use the lower rate on young seedlings and the higher rate on plants more than 2 metres tall or when growth is slow." },
        { weed: "Actively growing rosettes up to stem elongation and before flowering", pestList: [], states: ["All"], rate: "100 to 150 mL/100 L water", rateMax: "150", unit: "mL/100L", rateText: "100 to 150 mL/100 L water", notes: "Spray from the rosette to the shooting stage of growth. Use the higher rate on large multi-crown plants. Addition of a 100% non- ionic surfactant such as BS1000 at 0.1% v/v is recommended. Add diquat (200 g/L) at 1 L/100 L water plus a surfactant after opening of the first flowers, to prevent the formation of viable seed. Where diquat is added use a directed spray to avoid injury to non-target plants." },
        { weed: "Active growth spring to summer", pestList: ["Active Growth Spring To Summer"], states: ["All"], rate: "250", unit: "mL/100L", notes: "For effective control apply when bushes are growing actively. Large trees will not show complete necrosis. HAND GUN: Means high volume NOT low volume knapsack. (See GENERAL INSTRUCTIONS – Application). Spray to the point of run-off to give full coverage of leaves and stems. Add organosilicone surfactant (e.g. Pulse) at 200 mL/100 L for optimum results." },
        { weed: "Any growth stage", pestList: ["Any Growth Stage"], states: ["All"], rate: "1.6 L/ha", rateMax: "1.6", unit: "L/ha", rateText: "1.6 L/ha", notes: "Application may be made at any time of the year providing foliage is dry at the time. Avoid spraying non-target plants. Low volume application. For application by hand held weed wiper or C.D.A. use at dilution with water of 125 mL/L." },
        { weed: "Single stems less than 25 cm diameter at base", pestList: [], states: ["All"], rate: "1 mL of the diluted mix per cut at 10 to 13 cm cen", rateMax: "1", unit: "mL/cut", rateText: "1 mL of the diluted mix per cut at 10 to 13 cm centres", notes: "Apply to waist high cuts. See GENERAL INSTRUCTIONS - APPLICATION SECTION for application method details. DO NOT exceed the recommended spacings from the centre of one cut to the centre of the next cut. Inject each stem of a multi-stem tree where possible." },
        { weed: "Multiple stems or more than 25 cm diameter at base", pestList: [], states: ["All"], rate: "2 mL of the diluted mix per cut at 10 to 13 cm cen", rateMax: "2", unit: "mL/cut", rateText: "2 mL of the diluted mix per cut at 10 to 13 cm centres" }
      ]
    },
    {
      crop: "Pre-sowing",
      cropList: ["Pre-sowing"],
      weeds: [
        { weed: "Up to 8 leaf and maximum 10 cm diameter", pestList: [], states: ["All"], rate: "75", unit: "mL/ha", notes: "Pre-sowing: This rate should only be used in tank mixture with Spray.Seed® or glyphosate. Rates of 150-300 mL/ha give good suppression (reduced seed set and up to 80% weed control). 300 mL/ha is required for good control of capeweed and sub-clover. Apply to moist soil and time treatment for major germination of weeds. Good soil moisture and application close to time of weed germination is essential for best control." },
        { weed: "Up to 8 leaf and maximum 10 cm diameter", pestList: [], states: ["All"], rate: "75", unit: "mL/ha", notes: "Pre-sowing: This rate should only be used in tank mixture with Spray.Seed or glyphosate." }
      ]
    },
    {
      crop: "Post-sowing pre- emergence through to 3 leaf",
      cropList: ["Post-sowing pre- emergence through to 3 leaf"],
      weeds: [
        { weed: "Pre-emergence", pestList: ["Pre-Emergence"], states: ["All"], rate: "150", rateMax: "300", unit: "mL/ha" },
        { weed: "Up to 8 leaf and maximum 10cm diameter", pestList: [], states: ["All"], rate: "75", unit: "mL/ha", notes: "Post sowing pre-emergent to 3 leaf: This rate should only be used in tank mixture with diuron for control of transplants." }
      ]
    },
    {
      crop: "Early post- emergence (2 leaf to jointing)",
      cropList: ["Early post- emergence (2 leaf to jointing)"],
      weeds: [
        { weed: "Cotyledons to 6 leaf and maximum 5 cm diameter", pestList: [], states: ["All"], rate: "75", unit: "mL/ha", notes: "Early post-emergent: Weeds should be growing actively and not larger than 5 cm diameter." }
      ]
    },
    {
      crop: "4 to 5 leaf through to booting",
      cropList: ["4 to 5 leaf through to booting"],
      weeds: [
        { weed: "Up to 10 cm diameter (4 to 8 leaf)", pestList: [], states: ["All"], rate: "150", unit: "mL/ha", notes: "Weeds should be young and actively growing. Weeds will become stunted and non-competitive soon after application although final results may not show for some weeks. Faba beans and lupins will only be suppressed." },
        { weed: "Up to 6 leaf", pestList: [], states: ["All"], rate: "125", unit: "mL/ha" },
        { weed: "Up to 4 leaf", pestList: [], states: ["All"], rate: "75", unit: "mL/ha" },
        { weed: "Maximum 10 cm high or 6 nodes", pestList: [], states: ["All"], rate: "75", unit: "mL/ha" },
                { weed: "Up to 8 leaf", pestList: [], states: ["All"], rate: "75", unit: "mL/ha", notes: "continued" },
        { weed: "Up to 6 leaf (continued)", pestList: [], states: ["All"], rate: "125", unit: "mL/ha" },
        { weed: "Runners up to 10 cm, maximum 16 leaf", pestList: [], states: ["All"], rate: "50", unit: "mL/ha" }
      ]
    },
    {
      crop: "5 leaf through to booting",
      cropList: ["5 leaf through to booting"],
      weeds: [
        { weed: "5 cm rosettes", pestList: [], states: ["All"], rate: "150", unit: "mL/ha" }
      ]
    },
    {
      crop: "Post-sowing Pre- emergence to 3 leaf",
      cropList: ["Post-sowing Pre- emergence to 3 leaf"],
      weeds: [
        { weed: "Pre-emergence", pestList: ["Pre-Emergence"], states: ["All"], rate: "150", rateMax: "300", unit: "mL/ha", notes: "Rates of 150 - 250 mL/ha give good suppression (reduced seed set and up to 80% weed control). 300 mL/ha is required for good control of capeweed and sub-clover. Apply to moist soil and time treatment for major germination of weeds. Good soil moisture and application close to time of weed germination is essential for best control." }
      ]
    },
    {
      crop: "2 to 8 leaf",
      cropList: ["2 to 8 leaf"],
      weeds: [
        { weed: "Up to 10 cm diameter (4 to 8 leaf)", pestList: [], states: ["All"], rate: "150", unit: "mL/ha", notes: "Weeds should be young and actively growing. Weeds will become stunted and will not be competitive soon after application although final results may not show for some weeks. Skeleton weed will only be controlled until harvest. Faba beans and lupins will only be suppressed. For the control of annual grasses, Lontrel Advanced may be tank mixed with Verdict™ 520 Herbicide." },
        { weed: "Up to 6 leaf", pestList: [], states: ["All"], rate: "125", unit: "mL/ha" },
        { weed: "Up to 4 leaf", pestList: [], states: ["All"], rate: "75", unit: "mL/ha" },
        { weed: "Maximum 10 cm high or 6 nodes", pestList: [], states: ["All"], rate: "75", unit: "mL/ha" },
        { weed: "Up to 8 leaf", pestList: [], states: ["All"], rate: "125", unit: "mL/ha" },
        { weed: "Up to 6 leaf (continued)", pestList: [], states: ["All"], rate: "125", unit: "mL/ha" },
        { weed: "Runners up to 10 cm maximum 16 leaf", pestList: [], states: ["All"], rate: "50", unit: "mL/ha" },
        { weed: "4 to 8 leaf, 5 to 10 cm diameter", pestList: [], states: ["All"], rate: "75", rateMax: "150", unit: "mL/ha", notes: "Lontrel Advanced rate will depend on weed density, growth stage, climatic conditions and time of application. Use higher rates for best control where high density and/or large weeds occur." }
      ]
    },
    {
      crop: "Clearfield Canola",
      cropList: ["Clearfield Canola"],
      weeds: [
        { weed: "Up to 6 leaf", pestList: [], states: ["All"], rate: "75", unit: "mL/ha", notes: "Where capeweed is a significant component of the weed spectrum, a tank-mix with Lontrel Advanced may be needed post-emergence. DO NOT exceed this rate of Lontrel Advanced, as reduced control of grass weeds may occur." }
      ]
    },
    {
      crop: "Triazine Tolerant Canola",
      cropList: ["Triazine Tolerant Canola"],
      weeds: [
        { weed: "Up to 6 leaf", pestList: [], states: ["All"], rate: "150", unit: "mL/ha", notes: "Lontrel Advanced is compatible with atrazine and simazine for use in triazine tolerant canola. Uptake Spraying Oil at 500 mL/100 L of water should be added to this mix for best grass and broadleaf weed control. For the control of annual grass weeds, Lontrel Advanced + atrazine + Verdict 520 + Uptake Spraying Oil are compatible and selective to triazine tolerant canola." }
      ]
    },
    {
      crop: "Post- emergence",
      cropList: ["Post- emergence"],
      weeds: [
        { weed: "Actively growing plants. Treat rosette stage prior to stem elongation.", pestList: [], states: ["All"], rate: "250 mL/100 L or 1 to 2 L/ha", rateMax: "2", unit: "L/ha", rateText: "Motorised Hand gun: 250 mL/100 L of water. Boom spray: 1 or 2 L/ha", notes: "NOTE: DO NOT USE ON LUCERNE. CLOVERS AND MEDICS WILL BE ELIMINATED FOR AT LEAST ONE YEAR. Victoria only: Use the lower rate only on light soils (sand and sandy loam) where a slightly lower degree of control is acceptable. Use the higher rate on all soil types where complete control is required. Addition of BS1000 at 0.2%v/v is recommended for treatment of hardhead thistle. Spray between September and April on actively growing plants for effective control. Thorough coverage is essential. Apply..." },
                { weed: "Treat rosette stage prior to stem elongation.", pestList: [], states: ["All"], rate: "25 or 35 mL/ha", rateMax: "35", unit: "mL/ha", rateText: "25 or 35 mL/ha + 700 mL/ha to 1 L/ha Canvas 750 (MCPA) Drench gun: 25 mL/1 L of water Motorised Hand" },
        { weed: "5 to 8 leaf and to 5 to 10 cm diameter", pestList: [], states: ["All"], rate: "25", rateMax: "50", unit: "mL/ha", notes: "continued Gramoxone mixes are for lucerne pasture use only. Simazine mixes are for silver grass control and for lucerne based pastures only." },
        { weed: "Rosettes up to 20 cm in diameter", pestList: [], states: ["All"], rate: "50", unit: "mL/ha", notes: "Apply the spray from September to October. Apply by boom spray only. DO NOT apply to thistles over 20 cm in diameter. When thistles are over 20 cm in diameter use Lontrel Advanced plus MCPA (referred to above). Clover Damage: Damage to white clover will be no greater than damage with MCPA alone and less than damage from Lontrel plus MCPA mixtures. Damage to sub-clover may be greater than with MCPA or 2, 4-D alone. DO NOT use for spot treatment." },
        { weed: "From early buds to flowering (December to February)", pestList: ["From Early Buds To Flowering"], states: ["All"], rate: "125 mL/100 L or 1 L/ha", rateMax: "1", unit: "L/ha", rateText: "Motorised Hand gun: 125 mL/100 L of water Boom spray: 1 L/ha", notes: "Addition of BS1000 at 0.2%v/v is recommended. Retreatment of regrowth in the year following treatment will usually be necessary to achieve a high level of control. NOTE: Clovers and medics will be eliminated for at least one (1) year." },
        { weed: "30 to 40 cm high preflowering", pestList: [], states: ["All"], rate: "150", unit: "mL/ha", notes: "Treat healthy, actively growing lucerne in early spring prior to flowering. After grazing or cutting, allow lucerne to regrow for approximately four (4) weeks before treatment. For best control, DO NOT re-graze for greater than two (2) weeks after application. For complete control of lucerne in pasture, cultivate approximately one (1) month after herbicide treatment." },
        { weed: "Young seedlings to mature plants", pestList: ["Young Seedlings To Mature Plants"], states: ["All"], rate: "165 – 250 mL/100 L", rateMax: "250", unit: "mL/100L", rateText: "Motorised Hand gun: 165 – 250 mL/100 L of water", notes: "Spray foliage when growth is active. Use the lower rate on young seedlings and the higher rate on plants more than 2 metre tall or when growth is slow." }
      ]
    },
    {
      crop: "See CRITICAL COMMENTS",
      cropList: ["See CRITICAL COMMENTS"],
      weeds: [
        { weed: "5 cm rosettes", pestList: [], states: ["All"], rate: "150", unit: "mL/ha", notes: "Pasture – The lower rate of 150 mL/ha will give knockdown control. For residual control use the 1 L/ha rate. NOTE: Clovers and medics will be eliminated for at least one (1) year. Where pasture removal is required use 1 L/ha + 2.4 L glyphosate (450 g/L) + BS1000 0.2%v/v." }
      ]
    },
  ],

  restraints: [
    "DO NOT apply to weeds stressed by heat, cold, moisture, or previous herbicide treatment",
    "DO NOT apply later than 8-leaf stage of canola",
    "DO NOT compost treated plant material before reading label",
    "DO NOT spray if rain is likely within 3 hours",
    "DO NOT apply more than one application per crop per season",
    "DO NOT apply with spray droplets smaller than COARSE category",
    "DO NOT apply when wind speed is less than 3 or more than 20 km/h",
    "DO NOT apply during surface temperature inversion conditions"
  ],

  compatibility: {
    compatible:   ["Most herbicides", "Insecticides", "Fungicides"],
    incompatible: [],
    notes:        ["Always test tank mixes on small area first", "Maintain accurate spray records for 2 years"]
  },

  withholding: {
    harvest: "Cereals/Canola: 10 weeks before harvest. Not required for canola with directed spray.",
    grazing: "7 days after application for pastures, fallow, cereals"
  },

  surfactant:     "Non-ionic surfactant such as BS1000 at 0.1% v/v recommended for sensitive weeds",
  sprayerCleanup: "Thoroughly clean spray equipment after use. Rinse with clean water and dispose of rinsate according to local regulations."
};
