productDatabase['terrain'] = {
    "id": "terrain",
    "name": "Nufarm Terrain Flow Herbicide",
    "company": "Nufarm",

    "category": "Herbicides",
    "activeIngredient": "500 g/L Flumioxazin",
    "group": "Group 14 (Herbicide)",
    "formulation": "Liquid Concentrate",
    "modeOfAction": "Acetylcholinesterase (AChE) inhibitor",
    "targetPests": [
        "Annual polymeria",
        "Bellvine",
        "Black bindweed",
        "Black pigweed",
        "Bladder ketmia",
        "Caltrop",
        "Capeweed",
        "Dead nettle",
        "Double gee",
        "Marshmallow",
        "Sowthistle",
        "Wireweed",
        "Volunteer cotton",
        "Feathertop Rhodes grass"
    ],
    "crops": [
        {
            "crop": "Prior to Sowing (Barley, Chickpeas, Cotton, Wheat, etc.)",
            cropList: ["Prior To Sowing"],
            "weeds": [
                {
                    "weed": "Various broadleaf weeds and vines",
                    pestList: ["Various Broadleaf Weeds And Vines"],
                    "rate": "30",
                    "unit": "mL/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Apply as a pre-plant burndown spike with non-selective knockdown herbicides (e.g. glyphosate or paraquat)."
                }
            ]
        },
        {
            "crop": "Wheat (except Durum varieties)",
            cropList: ["Wheat"],
            "weeds": [
                {
                    "weed": "Black bindweed, Capeweed, Wild radish, suppression of ryegrass",
                    pestList: ["Black Bindweed","Capeweed","Wild Radish","Suppression Of Ryegrass"],
                    "rate": "125",
                    "unit": "mL/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Pre-Sowing Incorporation by Sowing (IBS). Sow seed below treated band (3 cm)."
                }
            ]
        },
        {
            "crop": "Established Lucerne",
            cropList: ["Established Lucerne"],
            "weeds": [
                {
                    "weed": "Annual ryegrass, Sowthistle, Winter grass",
                    pestList: ["Annual Ryegrass","Sowthistle","Winter Grass"],
                    "rate": "290",
                    "unit": "mL/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Use after heavy grazing or cutting to control emerged weeds. DO NOT apply to lucerne with >15cm growth."
                }
            ]
        },
        {
            "crop": "Lentils, Faba bean, Chickpea, Field pea",
            cropList: ["Lentils","Faba Bean","Chickpea","Field Pea"],
            "weeds": [
                {
                    "weed": "Black bindweed, Capeweed, Prickly lettuce",
                    pestList: ["Black Bindweed","Capeweed","Prickly Lettuce"],
                    "rate": "125",
                    "rateMax": "190",
                    "unit": "mL/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Pre-sowing Incorporation by Sowing (IBS)."
                }
            ]
        },
        {
            "crop": "Cotton",
            cropList: ["Cotton"],
            "weeds": [
                {
                    "weed": "Caltrop, Noogoora burr, Vines",
                    pestList: ["Caltrop","Noogoora Burr","Vines"],
                    "rate": "60",
                    "rateMax": "95",
                    "unit": "mL/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Apply as a shielded lay-by spray underneath cotton foliage."
                }
            ]
        },
        {
            "crop": "Fallow / Prior to Summer Crops",
            cropList: ["Fallow / Prior To Summer Crops"],
            "weeds": [
                {
                    "weed": "Barnyard grass, Fleabane, Milkweed, Pigweed",
                    pestList: ["Barnyard Grass","Fleabane","Milkweed","Pigweed"],
                    "rate": "220",
                    "rateMax": "290",
                    "unit": "mL/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Apply at fallow commencement or prior to sowing crops like Pigeon pea, Maize, Sorghum."
                }
            ]
        },
        {
            "crop": "Sugarcane",
            cropList: ["Sugarcane"],
            "weeds": [
                {
                    "weed": "Broadleaf weeds and vines",
                    pestList: ["Broadleaf Weeds And Vines"],
                    "rate": "90",
                    "rateMax": "125",
                    "unit": "mL/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Apply as a directed spray to the base of cane plants."
                }
            ]
        }
    ],
    "note": "Weed Resistance Warning: Group 14 Herbicide. Causes rapid defoliation and desiccation.",
    "labelPdf": "Source labels/Nufarm_TerrainFlow_Label.pdf",
    "sdsPdf":           "SDS Labels/NUFARM_TERRAIN_500WG_HERBICIDE.pdf",
    "signalHeading": "Caution",
    "apvma": "92965",
    "classification": {
        "type": "Herbicide",
        "target": [
            "Broadleaf Weeds",
            "Vines",
            "Some Grasses"
        ],
        "timing": [
            "Pre-emergent",
            "Post-emergent (shielded/directed)"
        ]
    },
    "restraints": [
        "DO NOT apply by aircraft.",
        "DO NOT irrigate up to the point of runoff for at least 3 days after application.",
        "DO NOT apply in high pH water (pH > 7)."
    ],
    "withholding": {
        "harvest": "NOT REQUIRED WHEN USED AS DIRECTED for most crops",
        "grazing": "DO NOT GRAZE OR CUT FOR STOCK FOOD FOR 4 WEEKS AFTER APPLICATION for many crops"
    },
    "compatibility": {
        "compatible": [],
        "incompatible": [],
        "notes": ["Can be tank-mixed with glyphosate, paraquat, diquat, trifluralin, atrazine depending on situation."]
    },
    "surfactant": "Nufarm CanDo Adjuvant at 0.5L/100L is recommended for enhanced knockdown.",
    "sprayerCleanup": "Triple rinse container and sprayer flush. Residues left in the tank can severely damage subsequent sensitive crops."
};
