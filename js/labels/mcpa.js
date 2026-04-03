productDatabase['mcpa'] = {
    "id": "mcpa",
    "name": "Nufarm MCPA Amine 750 Herbicide",
    "company": "Nufarm",

    "category": "Herbicides",
    "activeIngredient": "750 g/L MCPA (present as the dimethylamine salt)",
    "group": "Group 4 (Herbicide)",
    "formulation": "Liquid Concentrate",
    "modeOfAction": "Synthetic auxin (plant hormone mimic)",
    "targetPests": [
        "Capeweed",
        "Double gee",
        "Wild radish",
        "Wild turnip",
        "Mustards",
        "Charlock",
        "Dead nettle",
        "Erodium spp.",
        "Skeleton weed",
        "Soldier thistle",
        "Paterson's curse",
        "Variegated thistle",
        "Saffron thistle",
        "Fat hen",
        "Docks"
    ],
    "crops": [
        {
            "crop": "Wheat, Barley, Oats, Triticale, Cereal rye",
            cropList: ["Wheat","Barley","Oats","Triticale","Cereal Rye"],
            "weeds": [
                {
                    "weed": "Various broadleaf weeds",
                    pestList: ["Various Broadleaf Weeds"],
                    "rate": "460",
                    "rateMax": "1450",
                    "unit": "mL/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Apply at the 2 - 5 leaf stage. DO NOT apply to undersown medics or lucerne."
                },
                {
                    "weed": "Skeleton weed",
                    pestList: ["Skeleton Weed"],
                    "rate": "660",
                    "unit": "mL/ha",
                    "states": [
                        "SA",
                        "NSW",
                        "VIC",
                        "WA"
                    ],
                    "note": "Apply to rosettes from 5-15cm diameter. Tank mix with Nufarm Archer 750."
                }
            ]
        },
        {
            "crop": "Field peas",
            cropList: ["Field Peas"],
            "weeds": [
                {
                    "weed": "Prickly lettuce, Charlock",
                    pestList: ["Prickly Lettuce","Charlock"],
                    "rate": "80",
                    "rateMax": "100",
                    "unit": "mL/ha",
                    "states": [
                        "NSW",
                        "Vic",
                        "Tas",
                        "SA"
                    ],
                    "note": "Apply early post-emergence after the third node stage. Tank mix with diflufenican."
                }
            ]
        },
        {
            "crop": "Sugar Cane",
            cropList: ["Sugar Cane"],
            "weeds": [
                {
                    "weed": "Various vines and broadleaf weeds",
                    pestList: ["Various Vines And Broadleaf Weeds"],
                    "rate": "930",
                    "rateMax": "1450",
                    "unit": "mL/ha",
                    "states": [
                        "Qld"
                    ],
                    "note": "POST-EMERGENT: Apply as a directed inter-row spray."
                }
            ]
        },
        {
            "crop": "Rice",
            cropList: ["Rice"],
            "weeds": [
                {
                    "weed": "Dirty Dora, Starfruit, Sedges",
                    pestList: ["Dirty Dora","Starfruit","Sedges"],
                    "rate": "485",
                    "rateMax": "970",
                    "unit": "mL/ha",
                    "states": [
                        "NSW",
                        "QLD",
                        "VIC"
                    ],
                    "note": "Apply by aircraft at early/mid tillering stage of rice. Weed should not be covered by water."
                }
            ]
        },
        {
            "crop": "Grass Pastures, Turf",
            cropList: ["Grass Pastures","Turf"],
            "weeds": [
                {
                    "weed": "Broadleaf weeds",
                    pestList: ["Broadleaf Weeds"],
                    "rate": "460",
                    "rateMax": "2700",
                    "unit": "mL/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Apply to established pastures. Legume damage may occur."
                }
            ]
        }
    ],
    "note": "Phenoxy group herbicide. Can cause severe damage to susceptible plants via spray drift.",
    "labelPdf": "Source labels/Nufarm_MCPAAmine750_Label.pdf",
    "sdsPdf":           "SDS Labels/NUFARM_MCPA_AMINE_750_HERBICIDE.pdf",
    "signalHeading": "Poison",
    "apvma": "60505",
    "classification": {
        "type": "Herbicide",
        "target": [
            "Broadleaf Weeds"
        ],
        "timing": [
            "Post-emergent"
        ]
    },
    "restraints": [
        "DO NOT apply if crop or weeds are stressed due to dry or excessively moist conditions.",
        "DO NOT apply if rain is likely within 6 hours.",
        "DO NOT apply by a vertical sprayer."
    ],
    "withholding": {
        "harvest": "Cereals, Pasture: DO NOT GRAZE OR CUT FOR STOCK FOOD FOR 7 DAYS AFTER APPLICATION.",
        "grazing": "DO NOT GRAZE OR CUT FOR STOCK FOOD FOR 7 DAYS AFTER APPLICATION."
    },
    "compatibility": {
        "compatible": [],
        "incompatible": [],
        "notes": ["Compatible with diflufenican, diuron, dicamba, bromoxynil, and clopyralid."]
    },
    "surfactant": "Follow tank mix partner instructions.",
    "sprayerCleanup": "Thoroughly clean equipment with a 2% solution of cloudy ammonia or Tank & Equipment Cleaner."
};
