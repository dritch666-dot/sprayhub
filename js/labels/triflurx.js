productDatabase['triflurx'] = {
    "id": "triflurx",
    "name": "Nufarm TriflurX Herbicide",
    "company": "Nufarm",

    "category": "Herbicides",
    "activeIngredient": "480 g/L Trifluralin",
    "group": "Group 3 (Herbicide)",
    "formulation": "Liquid Concentrate",
    "modeOfAction": "Microtubule assembly inhibitor (Dinitroaniline)",
    "targetPests": [
        "Annual ryegrass",
        "Wireweed",
        "Wild oats",
        "Canary grass",
        "Pigweed",
        "Fumitory",
        "Brome grass",
        "Corn gromwell",
        "Phalaris spp.",
        "Silvergrass",
        "Winter grass",
        "Paradoxa grass",
        "Rough poppy",
        "Sand fescue"
    ],
    "crops": [
        {
            "crop": "Wheat, Barley, Triticale, Oats",
            cropList: ["Wheat","Barley","Triticale","Oats"],
            "weeds": [
                {
                    "weed": "Annual ryegrass, Wireweed, Phalaris, Fumitory",
                    pestList: ["Annual Ryegrass","Wireweed","Phalaris","Fumitory"],
                    "rate": "800",
                    "rateMax": "3000",
                    "unit": "mL/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Apply 1-4 weeks before sowing or as IBS (Incorporated by Sowing) using knife/blade points."
                },
                {
                    "weed": "Wild oats, Brome grass, Cereal oats",
                    pestList: ["Wild Oats","Brome Grass","Cereal Oats"],
                    "rate": "1.5",
                    "rateMax": "2",
                    "unit": "L/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Pre-Sowing / IBS. May be tank-mixed with Avadex Xtra for improved control."
                }
            ]
        },
        {
            "crop": "Chickpeas, Faba beans, Lentils, Field peas, Lupins, Vetch",
            cropList: ["Chickpeas","Faba Beans","Lentils","Field Peas","Lupins","Vetch"],
            "weeds": [
                {
                    "weed": "Annual grasses and selected broadleaf weeds",
                    pestList: ["Annual Grasses And Selected Broadleaf Weeds"],
                    "rate": "800",
                    "rateMax": "1700",
                    "unit": "mL/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Apply up to 4 weeks prior to sowing. Needs thorough incorporation."
                }
            ]
        },
        {
            "crop": "Cotton, Sunflowers, Soybeans, Navy beans, Peanuts",
            cropList: ["Cotton","Sunflowers","Soybeans","Navy Beans","Peanuts"],
            "weeds": [
                {
                    "weed": "Barnyard grass, Pigweed, Summer grass",
                    pestList: ["Barnyard Grass","Pigweed","Summer Grass"],
                    "rate": "1.2",
                    "rateMax": "2.3",
                    "unit": "L/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Spray between 4-6 weeks and just before sowing. Must cross-incorporate."
                }
            ]
        },
        {
            "crop": "Canola, Mustard, Safflower, Linseed",
            cropList: ["Canola","Mustard","Safflower","Linseed"],
            "weeds": [
                {
                    "weed": "Annual ryegrass, Wireweed",
                    pestList: ["Annual Ryegrass","Wireweed"],
                    "rate": "1.2",
                    "rateMax": "1.7",
                    "unit": "L/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Spray between 4 weeks and just before sowing."
                }
            ]
        },
        {
            "crop": "Sugar Cane",
            cropList: ["Sugar Cane"],
            "weeds": [
                {
                    "weed": "Annual grasses",
                    pestList: ["Annual Grasses"],
                    "rate": "2.3",
                    "rateMax": "3.0",
                    "unit": "L/ha",
                    "states": [
                        "Qld",
                        "NSW"
                    ],
                    "note": "Apply to plant cane after emergence to 'out of hand' stage."
                }
            ]
        },
        {
            "crop": "Broccoli, Cabbage, Cauliflower, Tomatoes, Carrots",
            cropList: ["Broccoli","Cabbage","Cauliflower","Tomatoes","Carrots"],
            "weeds": [
                {
                    "weed": "Annual ryegrass, Barnyard grass, Pigweed",
                    pestList: ["Annual Ryegrass","Barnyard Grass","Pigweed"],
                    "rate": "1.2",
                    "rateMax": "2.3",
                    "unit": "L/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Spray between 4 weeks and just before transplanting or direct seeding."
                }
            ]
        }
    ],
    "note": "Pre-emergent soil incorporated herbicide. Must be properly incorporated.",
    "labelPdf": "Source labels/Nufarm_TriflurX_Label.pdf",
    "sdsPdf": "SDS Labels/NUFARM_TRIFLURX_HERBICIDE.pdf",
    "signalHeading": "Caution",
    "apvma": "56421",
    "classification": {
        "type": "Herbicide",
        "target": [
            "Annual Grasses",
            "Certain Broadleaf Weeds"
        ],
        "timing": [
            "Pre-emergent",
            "Pre-plant incorporated"
        ]
    },
    "restraints": [
        "DO NOT apply by a boom sprayer unless coarse droplets are used.",
        "DO NOT apply if hazardous surface temperature inversion conditions are present."
    ],
    "withholding": {
        "harvest": "Not required when used as directed",
        "grazing": "Not specified"
    },
    "compatibility": {
        "compatible": ["Avadex Xtra", "Simazine", "Diuron", "Terrain Flow"],
        "incompatible": [],
        "notes": ["Often tank-mixed with Avadex Xtra, simazine, diuron, or Terrain Flow depending on crop and weeds."]
    },
    "surfactant": "Not normally required.",
    "sprayerCleanup": "Standard triple rinse."
};
