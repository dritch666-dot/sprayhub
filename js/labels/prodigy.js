productDatabase['prodigy'] = {
    "id": "prodigy",
    "name": "Corteva Prodigy® Insecticide",
    "company": "Corteva",

    "category": "Insecticides",
    "activeIngredient": "240 g/L Methoxyfenozide",
    "group": "Group 18 (Insecticide)",
    "formulation": "Liquid Concentrate",
    "modeOfAction": "Acetylcholinesterase (AChE) inhibitor",
    "targetPests": [
        "Carob moth",
        "Lightbrown apple moth",
        "Loopers",
        "Avocado leafroller",
        "Yellow peach moth",
        "Macadamia nutborer",
        "Macadamia flower caterpillar",
        "Native budworm",
        "Tomato grub",
        "Cluster caterpillar"
    ],
    "crops": [
        {
            "crop": "Almonds",
            cropList: ["Almonds"],
            "weeds": [
                {
                    "weed": "Carob moth",
                    pestList: ["Carob Moth"],
                    "rate": "80",
                    "unit": "mL/100L",
                    "states": [
                        "All",

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER80954: Snow Peas ──
{
  crop: "Snow Peas — Native Budworm, Tomato Grub & Cluster Caterpillar (PER80954)",
  cropList: ["Snow peas"],
  permitNumber: "PER80954",
  weeds: [
      { weed: "Native Budworm (Helicoverpa punctigera)", pestList: ["Lepidopteran Pests","Caterpillars","Helicoverpa","Native Budworm"], states: ["All"], rate: "1250", rateMax: "1700", unit: "mL/ha", stage: "Monitor crops regularly and apply to brown eggs or at egg hatch when pest numbers reach treatment threshold. Use higher rate under heavy egg pressure. Apply with calibrated ground boom sprayer in sufficient volume for thorough coverage.", note: "PERMIT PER80954 (exp. 30/04/2030). PRODIGY 240 g/L: 1.25 or 1.7 L/ha (125 or 170 mL product per 100 L). Max 3 applications per crop, min 7 days re-treatment interval. Do not apply if rain or overhead irrigation expected within 6 hours. Retain first flush irrigation tailwater/storm water in dam after application. Do not use in protected situations (glasshouses, greenhouses, shade houses, plastic tunnels). Do not apply using back-pack sprayers. WHP: Pods—do not harvest for 3 days; Foliage—do not harvest for 14 days. Grazing: Do not allow stock to graze for 3 days; do not send to slaughter if grazed vines unless on clean feed for 10 days first. All states except VIC." },
      { weed: "Tomato Grub / Corn Earworm (Helicoverpa armigera)", pestList: ["Lepidopteran Pests","Caterpillars","Helicoverpa","Corn Earworm"], states: ["All"], rate: "1250", rateMax: "1700", unit: "mL/ha", stage: "Monitor crops and apply when pest thresholds reached. Target eggs at hatch or small larvae. Max 3 applications per crop with min 7 day interval. Efficacy may reduce in rapidly growing crops due to unsprayed new growth—re-spray if necessary with different MoA.", note: "PERMIT PER80954 (exp. 30/04/2030). PRODIGY 240 g/L: 1.25 or 1.7 L/ha. Snow peas and Sugar snap peas. Maintain field checks and re-apply after 7 days if necessary. Efficacy may be reduced in rapidly growing crops. WHP: Pods—3 days; Foliage—14 days. All states except VIC. MRL established for Methoxyfenozide in Podded pea (young pods) and Pea vines (green)." },
      { weed: "Cluster Caterpillar (Spodoptera litura)", pestList: ["Lepidopteran Pests","Caterpillars","Cluster Caterpillar","Spodoptera"], states: ["All"], rate: "1250", rateMax: "1700", unit: "mL/ha", stage: "Monitor crops regularly. Apply to brown eggs or at egg hatch when pest numbers reach treatment threshold. Thorough plant coverage essential. Max 3 applications per crop, min 7 days between applications.", note: "PERMIT PER80954 (exp. 30/04/2030). PRODIGY 240 g/L: 1.25 or 1.7 L/ha. Snow peas and Sugar snap peas. Use higher rate under heavy egg pressure. Ground boom sprayer or similar equipment required for thorough coverage. Spray drift restraints apply (wind 3-20 km/h, do not apply by air, do not apply within 15 m downwind of pasture/livestock feed production). WHP: Pods—3 days; Foliage—14 days. All states except VIC." }
  ]
},

// ── PER80954: Sugar Snap Peas ──
{
  crop: "Sugar Snap Peas — Native Budworm, Tomato Grub & Cluster Caterpillar (PER80954)",
  cropList: ["Sugar snap peas"],
  permitNumber: "PER80954",
  weeds: [
      { weed: "Native Budworm / Tomato Grub / Corn Earworm / Cluster Caterpillar (Helicoverpa punctigera, H. armigera, Spodoptera litura)", pestList: ["Lepidopteran Pests","Caterpillars","Helicoverpa","Spodoptera","Native Budworm","Corn Earworm","Cluster Caterpillar"], states: ["All"], rate: "1250", rateMax: "1700", unit: "mL/ha", stage: "Monitor crops for pest eggs and larvae. Apply at egg hatch or when pest numbers reach treatment thresholds. Use higher rate under heavy infestation or rapid crop growth. Thorough coverage essential. Apply using calibrated ground boom sprayer.", note: "PERMIT PER80954 (exp. 30/04/2030). PRODIGY 240 g/L: 1.25 or 1.7 L/ha (125-170 mL product per 100 L). Max 3 applications per crop, min 7 days re-treatment interval. Do not apply within 6 hours of rainfall or irrigation. Do not use in protected situations. Do not apply using back-pack equipment or by air. Spray drift restraints apply (no livestock/pasture feed within 15 m downwind). WHP: Pods—3 days; Foliage—14 days. Grazing: 3 days; slaughter animals after 10 days on clean feed. All states except VIC. MRL established for Methoxyfenozide in young pods and pea vines." }
  ]
},

// ── PER91923: Nursery Stock (Lepidopteran Larvae & Eggs) ──
{
  crop: "Nursery Stock (Lepidopteran Larvae & Eggs) — Fall Armyworm, Heliothis & Cluster Caterpillar (PER91923)",
  cropList: ["Nursery stock","Seedlings","Tubed plants","Plugs","Potted colour","Trees","Shrubs","Foliage plants","Palms","Grasses","Fruit plants","Cut flowers","Ornamentals"],
  permitNumber: "PER91923",
  weeds: [
      { weed: "Fall Armyworm (Spodoptera frugiperda)", pestList: ["Lepidopteran Pests","Caterpillars","Fall Armyworm","Spodoptera"], states: ["All"], rate: "1250", rateMax: "1750", unit: "mL/100L", stage: "Apply at first signs of infestation or when pest thresholds reached. Target eggs at hatch or small larvae (prior to third instar). Regularly scout crops to monitor eggs and larvae. Max 3 applications per crop per season, min 10-day interval. Thorough coverage of all plant foliage essential; adjust water spray volume to crop density and growth stage.", note: "PERMIT PER91923 (exp. 31/05/2027). PRODIGY INSECTICIDE 240 g/L methoxyfenozide (MoA 18): 125-175 mL per 100 L (1.25-1.75 L/ha, depending on formulation). Do not apply using back-pack sprayers. Do not use in covered/protected situations (glasshouses, greenhouses, shade houses, plastic tunnels). Do not apply if rain or overhead irrigation expected within 6 hours. Retain first flush irrigation tailwater/storm water in dam after application. Do not use more than 3 sprays per season in any single crop. Use higher rate when longer residual control required, high pest pressure, rapid growth, well-advanced crops, or high infestation. Refer to CropLife Resistance Management Strategy for Fall Armyworm. Non-food use only (nursery stock, ornamentals, cut flowers). All states and territories." }
  ]
},

// ── PER91923: Nursery Stock (Non-Food) ──
{
  crop: "Nursery Stock (Non-Food) — Heliothis (PER91923)",
  cropList: ["Nursery stock","Ornamentals","Trees","Shrubs"],
  permitNumber: "PER91923",
  weeds: [
      { weed: "Heliothis (Helicoverpa spp.)", pestList: ["Lepidopteran Pests","Caterpillars","Heliothis","Helicoverpa"], states: ["All"], rate: "1250", rateMax: "1750", unit: "mL/100L", stage: "Apply at first signs of infestation or when pest thresholds reached. Apply maximum 3 foliar spray applications within an annual production cycle. Thorough foliage coverage essential. Target eggs at hatch when larvae reach economic thresholds and damage is observed. Consecutive treatments 7-10 days apart. Do not apply more than 2 consecutive applications.", note: "PERMIT PER91923 (exp. 31/05/2027). PRODIGY INSECTICIDE 240 g/L methoxyfenozide (MoA 18): 125-175 mL per 100 L. Apply spray treatment as egg and larvae reach economic thresholds and damage observed. Ground-based sprayer (hydraulic equipment or equivalent) required. Apply maximum 3 foliar spray applications per annual production cycle. Consecutive treatments 7-10 days apart. Use in accordance with CropLife resistance and IPM strategies. Non-food nursery stock and ornamentals. All states and territories." }
  ]
},

// ── PER91923: Nursery Stock (Non-Food) ──
{
  crop: "Nursery Stock (Non-Food) — Multiple Lepidopteran Pests (PER91923)",
  cropList: ["Nursery stock","Seedlings","Foliage plants","Cut flowers","Ornamentals"],
  permitNumber: "PER91923",
  weeds: [
      { weed: "Apple Looper, Lightbrown Apple Moth, Soybean Looper (Phrissogonus laticostata, Epiphyas postvittana, Chrysodeixis includens)", pestList: ["Lepidopteran Pests","Caterpillars","Loopers","Apple Looper","Lightbrown Apple Moth"], states: ["All"], rate: "1250", rateMax: "1750", unit: "mL/100L", stage: "Apply spray treatment as egg and larvae reach economic thresholds. Apply maximum 3 foliar spray applications within annual production cycle. Thorough coverage of foliage essential. Consecutive treatments 7-10 days apart. Do not apply more than 2 consecutive applications.", note: "PERMIT PER91923 (exp. 31/05/2027). PRODIGY INSECTICIDE 240 g/L methoxyfenozide (MoA 18): 125-175 mL per 100 L. Ground-based sprayer (hydraulic spray equipment or equivalent) required. Apply diluent to point of run-off. Max 3 foliar spray applications within annual production cycle. Use in accordance with CropLife resistance and IPM strategies. Add non-ionic surfactant at specified label rates. Non-food nursery stock and ornamentals only. All states and territories." }
  ]
},

// ── PER84531: Sweet Corn ──
{
  crop: "Sweet Corn — Lepidopteran Pests (PER84531)",
  cropList: ["Sweet Corn","Corn"],
  permitNumber: "PER84531",
  weeds: [
      { weed: "Lepidopteran Pests including Helicoverpa spp. (larvae)", pestList: ["Lepidopteran Pests","Helicoverpa","Corn Earworm","Native Budworm"], states: ["NSW","QLD","SA","WA","TAS","NT","ACT"], rate: "125", rateMax: "170", unit: "mL/100L", stage: "Apply to brown eggs or at egg hatch when pest numbers reach treatment thresholds. Boom spray or equivalent.", note: "PERMIT PER84531 (exp. 30/06/2030). 240 g/L methoxyfenozide (Prodigy): 125-170 mL/100L. Also 480 g/L product: 63-85 mL/100L. Max 3 foliar apps per crop, re-apply after 7 days if needed. Field only — no protected cropping. WHP: 1 day harvest, 1 day grazing. ESI: 10 days clean feed before slaughter." }
  ]
},

// ── Avocado ──
{
  crop: "Avocado",
  cropList: ["Avocado"],
  weeds: [
      { weed: "Avocado leafroller", pestList: ["Lepidopteran Pests","Avocado Leafroller"], states: ["All"], rate: "25", rateText: "25ml/100L", unit: "mL/100L", notes: "WHP: 14 days. Apply at first sign of pest incidence and target eggs and newly hatched larvae. no more then 3 applicatitons per year. 6 hours rainfast" }
  ]
},

// ── PER91798: Mango ──
{
  crop: "Mango",
  cropList: ["Mango"],
  permitNumber: "PER91798",
  weeds: [
      { weed: "Mango shoot looper", pestList: ["Lepidopteran Pests","Mango Shoot Looper"], states: ["All"], rate: "25", rateMax: "25", rateText: "25ml/100L", unit: "mL/100L", stage: "Apply as per permit directions", note: "WHP: 14 days. no more than 3 applications per season." }
  ]
},

// ── Citrus ──
{
  crop: "Citrus",
  cropList: ["Citrus"],
  weeds: [
      { weed: "Lightbrown apple moth", pestList: ["Lepidopteran Pests","Lightbrown Apple Moth"], states: ["All"], rate: "25", rateText: "25ml/100L + 10ml/100L of a wetter", unit: "mL/100L", notes: "WHP: 1 day. apply when larvae is small, apply at high volumes, do not apply with oils" }
  ]
},

// ── PER91798: Lychee ──
{
  crop: "Lychee",
  cropList: ["Lychee"],
  permitNumber: "PER91798",
  weeds: [
      { weed: "Macadamia nutborer", pestList: ["Lepidopteran Pests","Macadamia Nutborer"], states: ["All"], rate: "40", rateMax: "40", rateText: "40ml/100L", unit: "mL/100L", stage: "Apply as per permit directions", note: "WHP: 14 days. Target sprays against eggs and early instar larvae." },
      { weed: "Mango shoot looper", pestList: ["Lepidopteran Pests","Mango Shoot Looper"], states: ["All"], rate: "25", rateMax: "25", rateText: "25ml/100L", unit: "mL/100L", stage: "Apply as per permit directions", note: "WHP: 14 days. no more then 3 applications per season" }
  ]
},

// ── PER91798: Longan ──
{
  crop: "Longan",
  cropList: ["Longan"],
  permitNumber: "PER91798",
  weeds: [
      { weed: "Macadamia nutborer", pestList: ["Lepidopteran Pests","Macadamia Nutborer"], states: ["All"], rate: "40", rateMax: "40", rateText: "40ml/100L", unit: "mL/100L", stage: "Apply as per permit directions", note: "WHP: 3 days. Target sprays against eggs and early instar larvae." },
      { weed: "Mango shoot looper", pestList: ["Lepidopteran Pests","Mango Shoot Looper"], states: ["All"], rate: "25", rateMax: "25", rateText: "25ml/100L", unit: "mL/100L", stage: "Apply as per permit directions", note: "WHP: 3 days. no more then 3 applications per season" }
  ]
}

    ],
    "note": "Apply a maximum of 3 sprays at 10-day intervals targeting eggs and newly hatched larvae."
                }
            ]
        },
        {
            "crop": "Apples & Pears",
            cropList: ["Apples & Pears"],
            "weeds": [
                {
                    "weed": "Lightbrown apple moth, Loopers",
                    pestList: ["Lightbrown Apple Moth","Loopers"],
                    "rate": "25",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Commence spraying at petal fall and apply in a series of 3 applications at 14-day intervals."
                }
            ]
        },
        {
            "crop": "Grapevines",
            cropList: ["Grapevines"],
            "weeds": [
                {
                    "weed": "Lightbrown apple moth",
                    pestList: ["Lightbrown Apple Moth"],
                    "rate": "25",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply from pre-flowering onwards targeting eggs and small larvae. Summer generation requires monitoring."
                }
            ]
        },
        {
            "crop": "Tomatoes, Peppers (capsicum/chilli), Eggplant, Okra",
            cropList: ["Tomatoes","Peppers (Capsicum/Chilli)","Eggplant","Okra"],
            "weeds": [
                {
                    "weed": "Native budworm, Tomato grub, Cluster caterpillar",
                    pestList: ["Native Budworm","Tomato Grub","Cluster Caterpillar"],
                    "rate": "125",
                    "rateMax": "170",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply to brown eggs or at egg hatch. Moult-accelerating insecticide; feeding ceases upon ingestion."
                }
            ]
        },
        {
            "crop": "Macadamia",
            cropList: ["Macadamia"],
            "weeds": [
                {
                    "weed": "Macadamia nutborer",
                    pestList: ["Macadamia Nutborer"],
                    "rate": "40",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Target sprays against eggs and early instar larvae."
                }
            ]
        }
    ],
    "note": "Insecticide Resistance Warning: Group 18 Insecticide.",
    "labelPdf": "Source labels/Corteva_Prodigy_Label.pdf",
    "signalHeading": "Caution",
  "apvma": "61605",
    "sdsPdf": "SDS Labels/PRODIGY.pdf",
        "classification": {
        "type": "Insecticide",
        "target": ["Caterpillars","Moths","Borers"],
        "timing": ["Post-emergent"]
    },
    "restraints": [
        "DO NOT apply if rain or overhead irrigation is expected within 6 hours.",
        "DO NOT use more than 3 sprays per season in any single crop.",
        "DO NOT use in covered/protected situations like glasshouses.",
        "DO NOT apply by air."
    ],
    "withholding": {
        "harvest": "Not required when used as directed",
        "grazing": "Refer to label"
    },
    "compatibility": {
        "compatible": [],
        "incompatible": [],
        "notes": ["Incompatible with mineral spray oils. DO NOT mix concentrates together."]
    },
    "surfactant": "Agral or Nufarm Chemwet 1000 recommended.",
    "sprayerCleanup": "Normal system flush."
};
