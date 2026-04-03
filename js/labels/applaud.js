productDatabase['applaud'] = {
    "id": "applaud",
    "name": "Corteva Applaud® Insecticide",
    "company": "Corteva",

    "category": "Insecticides",
    "activeIngredient": "Buprofezin (440 g/L)",
    "group": "Group 16 (Insecticide)",
    "formulation": "Liquid Concentrate",
    "modeOfAction": "Acetylcholinesterase (AChE) inhibitor",
    "targetPests": [
        "Red scale",
        "White louse scale",
        "Longtail mealybug",
        "Citrus mealybug",
        "Citrophilous mealybug",
        "Jassids (leafhoppers)",
        "Mealybugs",
        "Scale insects",
        "Tuber mealybug",
        "Mango scale",
        "Greenhouse whitefly",
        "Silverleaf whitefly",
        "Cotton mealybug"
    ],
    "crops": [
        {
            "crop": "Citrus (Oranges, Lemons, Mandarins, Grapefruit, Limes)",
            cropList: ["Citrus","Oranges","Lemons","Mandarins","Grapefruit","Limes"],
            "weeds": [
                {
                    "weed": "Red scale, White louse scale, Longtail mealybug, Citrus mealybug, Citrophilous mealybug",
                    pestList: ["Red Scale","White Louse Scale","Longtail Mealybug","Citrus Mealybug","Citrophilous Mealybug"],
                    "rate": "30",
                    "rateMax": "60",
                    "unit": "mL/100L",
                    "states": [
                        "All",

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER82467: Cucurbits (Cucumber, Zucchini, Squash, Marrow, Choko) ──
{
  crop: "Cucurbits (Cucumber, Zucchini, Squash, Marrow, Choko) — Greenhouse Whitefly (PER82467)",
  cropList: ["Cucumber","Zucchini","Squash","Marrow","Choko"],
  permitNumber: "PER82467",
  weeds: [
      { weed: "Greenhouse Whitefly (Trialeurodes vaporariorum)", pestList: ["Insects","Whitefly","Greenhouse Whitefly"], states: ["NSW","QLD","SA","TAS","WA"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Early nymph stages (max 600 mL/ha)", note: "PERMIT PER82467 (exp. 31/03/2030). Version 4. DO NOT apply more than twice per year. DO NOT apply within 14 days of previous treatment. WHP: 3 days harvest. Critical: Ensure good coverage, especially leaf undersides. Use boom sprayers or hand wands. Rotate with non-Group 16 products." }
  ]
},

// ── PER82467: Eggplant, Peppers, Capsicum ──
{
  crop: "Eggplant, Peppers, Capsicum — Greenhouse Whitefly (PER82467)",
  cropList: ["Eggplant","Peppers","Capsicum"],
  permitNumber: "PER82467",
  weeds: [
      { weed: "Greenhouse Whitefly (Trialeurodes vaporariorum)", pestList: ["Insects","Whitefly","Greenhouse Whitefly"], states: ["NSW","QLD","SA","TAS","WA"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Early nymph stages (max 600 mL/ha)", note: "PERMIT PER82467 (exp. 31/03/2030). Version 4. Protected & field cropping. DO NOT apply more than twice per year; minimum 14 days between applications. WHP: 3 days harvest. Apply as foliar spray when pest appears." }
  ]
},

// ── PER82467: Lettuce (Leafy Varieties) ──
{
  crop: "Lettuce (Leafy Varieties) — Jassids & Greenhouse Whitefly (PER82467)",
  cropList: ["Lettuce"],
  permitNumber: "PER82467",
  weeds: [
      { weed: "Jassids / Leafhoppers (Austroasca viridigrisea) & Greenhouse Whitefly (Trialeurodes vaporariorum)", pestList: ["Insects","Leafhoppers","Jassids","Whitefly"], states: ["NSW","QLD","SA","TAS","WA"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Early nymph stages (max 600 mL/ha)", note: "PERMIT PER82467 (exp. 31/03/2030). Version 4. Field & protected cropping. DO NOT apply more than twice per year; 14-day minimum interval. WHP: 3 days harvest." }
  ]
},

// ── PER82467: Celery ──
{
  crop: "Celery — Greenhouse Whitefly (PER82467)",
  cropList: ["Celery"],
  permitNumber: "PER82467",
  weeds: [
      { weed: "Greenhouse Whitefly (Trialeurodes vaporariorum)", pestList: ["Insects","Whitefly","Greenhouse Whitefly"], states: ["NSW","QLD","SA","TAS","WA"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Early nymph stages (max 600 mL/ha)", note: "PERMIT PER82467 (exp. 31/03/2030). Version 4. Field & protected cropping. DO NOT apply more than twice per year; 14-day interval between applications. WHP: 3 days harvest." }
  ]
},

// ── PER91816: Nursery Stock (Non-Food) ──
{
  crop: "Nursery Stock (Non-Food) — Hemiptera Complex (Leafhoppers, Mealybugs, Scale Insects, Whiteflies) (PER91816)",
  cropList: ["Nursery Stock","Ornamentals"],
  permitNumber: "PER91816",
  weeds: [
      { weed: "Leafhoppers (Cicadellidae), Mealybugs (Pseudococcidae), Scale Insects (Coccoidea), Greenhouse Whitefly (Trialeurodes vaporariorum), Silverleaf Whitefly (Bemsia spp.)", pestList: ["Insects","Hemiptera","Leafhoppers","Mealybugs","Scale Insects","Whitefly"], states: ["All"], rate: "30", rateMax: "60", unit: "mL/100L", stage: "Nymph stages present", note: "PERMIT PER91816 (exp. 30/04/2027). Version 1. DO NOT use more than 2 applications per annual production cycle. DO NOT re-apply within 14 days; rotate with different chemical groups. WHP: DO NOT use on food crops. Critical: Spray to adequate penetration and coverage, especially leaf undersides." }
  ]
},

// ── PER88401: Lychee ──
{
  crop: "Lychee",
  cropList: ["Lychee"],
  permitNumber: "PER88401",
  weeds: [
      { weed: "Scale insects, mealybugs, flatid planthoppers", pestList: ["Scale Insects","Mealybugs","Flatid Planthoppers"], states: ["All"], rate: "30-60", rateMax: "30-60", rateText: "30-60ml/100L", unit: "mL/100L", stage: "Apply as per permit directions", note: "WHP: 14 days. no more then 2 applications per season. apply again 14 days after first treatment" }
  ]
}

    ],
    "note": "Scales: Apply when there is heavy crawler emergence, particularly in late summer. Mealybugs: Apply if thresholds are exceeded in spring-summer."
                },
                {
                    "weed": "Jassids (leafhoppers)",
                    pestList: ["Jassids"],
                    "rate": "30",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply when thresholds are exceeded in January and again in February if required."
                }
            ]
        },
        {
            "crop": "Custard apples",
            cropList: ["Custard Apples"],
            "weeds": [
                {
                    "weed": "Mealybugs, Scale insects",
                    pestList: ["Mealybugs","Scale Insects"],
                    "rate": "30",
                    "rateMax": "60",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply a maximum of two (2) sprays per season, 21 days apart, as a high volume cover spray."
                }
            ]
        },
        {
            "crop": "Grapes",
            cropList: ["Grapes"],
            "weeds": [
                {
                    "weed": "Longtail mealybug, Tuber mealybug",
                    pestList: ["Longtail Mealybug","Tuber Mealybug"],
                    "rate": "30",
                    "rateMax": "60",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply twice, 14-21 days apart, starting when the first emergence of crawlers is observed."
                }
            ]
        },
        {
            "crop": "Mangoes",
            cropList: ["Mangoes"],
            "weeds": [
                {
                    "weed": "Mango scale",
                    pestList: ["Mango Scale"],
                    "rate": "60",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Monitor scales and apply when the majority of crawlers have emerged."
                }
            ]
        },
        {
            "crop": "Passionfruit",
            cropList: ["Passionfruit"],
            "weeds": [
                {
                    "weed": "Mealybugs, Scale insects",
                    pestList: ["Mealybugs","Scale Insects"],
                    "rate": "30",
                    "rateMax": "60",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply a maximum of two (2) sprays per season, 21 days apart when significant pest infestations develop."
                }
            ]
        },
        {
            "crop": "Pears",
            cropList: ["Pears"],
            "weeds": [
                {
                    "weed": "Longtail mealybug",
                    pestList: ["Longtail Mealybug"],
                    "rate": "30",
                    "rateMax": "60",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply twice, 10-14 days apart between swollen bud and the end of flowering."
                }
            ]
        },
        {
            "crop": "Persimmons",
            cropList: ["Persimmons"],
            "weeds": [
                {
                    "weed": "Mealybugs, Scale insects",
                    pestList: ["Mealybugs","Scale Insects"],
                    "rate": "60",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply a maximum of two (2) sprays per season, 14 days apart."
                }
            ]
        },
        {
            "crop": "Basil, Chives, Mint, Oregano, Thyme (Protected cropping)",
            cropList: ["Basil","Chives","Mint","Oregano","Thyme"],
            "weeds": [
                {
                    "weed": "Greenhouse whitefly, Silverleaf whitefly",
                    pestList: ["Greenhouse Whitefly","Silverleaf Whitefly"],
                    "rate": "30",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply when pest first appears and make a second application 14 days later if required."
                }
            ]
        },
        {
            "crop": "Tomatoes (Protected cropping)",
            cropList: ["Tomatoes"],
            "weeds": [
                {
                    "weed": "Greenhouse whitefly, Silverleaf whitefly",
                    pestList: ["Greenhouse Whitefly","Silverleaf Whitefly"],
                    "rate": "30",
                    "unit": "mL/100L",
                    "states": [
                        "All"
                    ],
                    "note": "Apply using boom spray equipment when pest first appears and make a second application 14 days later."
                }
            ]
        },
        {
            "crop": "Cotton",
            cropList: ["Cotton"],
            "weeds": [
                {
                    "weed": "Silverleaf whitefly, Cotton mealybug",
                    pestList: ["Silverleaf Whitefly","Cotton Mealybug"],
                    "rate": "1",
                    "unit": "L/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Apply as part of a season long spray programme targeting pests early in the crop."
                }
            ]
        }
    ],
    "note": "Insecticide Resistance Warning: Group 16 Insecticide.",
    "labelPdf": "Source labels/Corteva_Applaud_Label.pdf",
    "sdsPdf": "SDS Labels/APPLAUD_INSECTICIDE.pdf",
    "signalHeading": "Caution",
  "apvma": "51547",
        "classification": {
        "type": "Insecticide",
        "target": ["Scales","Mealybugs","Whiteflies","Leafhoppers"],
        "timing": ["Post-emergent"]
    },
    "restraints": [
        "DO NOT apply more than twice per year in any crop.",
        "DO NOT apply if heavy rains or storms are forecast within 3 days.",
        "DO NOT irrigate to the point of runoff for at least 3 days after application."
    ],
    "withholding": {
        "harvest": "FOR 1 DAY AFTER APPLICATION Tomatoes (protected cropping): DO NOT HARVEST FOR 3 DAYS AFTER APPLICATION Herbs: DO NOT HARVEST FOR 7 DAYS AFTER APPLICATION Cotton: DO NOT HARVEST FOR 14 DAYS AFTER LAST APPLICATION Custard apple: DO NOT HARVEST FOR 2 WEEKS AFTER APPLICATION Citrus, Mango & Persimmon: DO NOT HARVEST FOR 4 WEEKS AFTER APPLICATION Pears & Table grapes: DO NOT HARVEST FOR 8 WEEKS AFTER APPLICATION Wine grapes: NOT REQUIRED when used as directed",
        "grazing": "Refer to label"
    },
    "compatibility": {
        "compatible": [],
        "incompatible": [],
        "notes": ["Applaud Insecticide is compatible with Dithane Rainshield NeoTec Fungicide.","NOT compatible with Sacoa BioPest Oil or with products that are highly alkaline or highly acidic."]
    },
    "surfactant": "Not normally required unless specified for a particular mixture.",
    "sprayerCleanup": "Empty tank completely and drain the whole system. Quarter fill tank with clean water and circulate. Drain and repeat the rinsing procedure twice."
};
