productDatabase['ficam'] = {
    "id": "ficam",
    "name": "Bayer Ficam® W Insecticide",
    "company": "Bayer",

    "category": "Insecticides",
    "activeIngredient": "Bendiocarb (800 g/kg)",
    "group": "Group 1A (Insecticide)",
    "formulation": "Wettable Powder (WP)",
    "modeOfAction": "Acetylcholinesterase (AChE) inhibitor",
    "targetPests": [
        "Ants",
        "Bed bugs",
        "Carpet beetles",
        "Cockroaches",
        "Fleas",
        "Spiders",
        "Silverfish",
        "Black Portuguese Millipedes",
        "European wasps",
        "Flies",
        "Seed harvesting ants",
        "Black Beetle"
    ],
    "crops": [
        {
            "crop": "Food processing factories, restaurants, hospitals, domestic & commercial buildings",
            cropList: ["Food Processing Factories","Restaurants","Hospitals","Domestic & Commercial Buildings"],
            "weeds": [
                {
                    "weed": "Ants, Bed bugs, Carpet beetles, Cockroaches, Fleas, Spiders, Silverfish",
                    pestList: ["Ants","Bed Bugs","Carpet Beetles","Cockroaches","Fleas","Spiders","Silverfish"],
                    "rate": "15",
                    "rateMax": "30",
                    "unit": "g/5L water",
                    "states": [
                        "All"
                    ],
                    "note": "Spray in and around nests, runs and forage areas, or cracks and crevices where pests hide. Do NOT spray bedding."
                },
                {
                    "weed": "Black Portuguese Millipedes",
                    pestList: ["Black Portuguese Millipedes"],
                    "rate": "15",
                    "rateMax": "30",
                    "unit": "g/10L water",
                    "states": [
                        "All"
                    ],
                    "note": "Spray paths and to a height of 1 m on walls around buildings to prevent invasion."
                }
            ]
        },
        {
            "crop": "Wasp nests",
            cropList: ["Wasp Nests"],
            "weeds": [
                {
                    "weed": "European wasps",
                    pestList: ["European Wasps"],
                    "rate": "15",
                    "unit": "g/5L water",
                    "states": [
                        "All"
                    ],
                    "note": "Spray between 1 and 2 L of mixture per nest, depending on size. Treat at night whenever possible."
                }
            ]
        },
        {
            "crop": "Walls, ceilings, fences, yards, animal houses, abattoirs, garbage dumps",
            cropList: ["Walls","Ceilings","Fences","Yards","Animal Houses","Abattoirs","Garbage Dumps"],
            "weeds": [
                {
                    "weed": "Flies (common housefly, stable fly, brown blowfly, etc.)",
                    pestList: ["Flies"],
                    "rate": "15",
                    "unit": "g+50g sugar/5L water",
                    "states": [
                        "All"
                    ],
                    "note": "Apply as a bait to all surfaces where flies may contact the spray deposits."
                }
            ]
        },
        {
            "crop": "Pasture seed (phalaris, lucerne, etc)",
            cropList: ["Pasture Seed"],
            "weeds": [
                {
                    "weed": "Seed harvesting ants",
                    pestList: ["Seed Harvesting Ants"],
                    "rate": "200",
                    "unit": "g/2-4L water/100kg seed",
                    "states": [
                        "All"
                    ],
                    "note": "Use 2L water for Legume seed, 4L water for Grass seed (Cocksfoot)."
                }
            ]
        },
        {
            "crop": "Turf (Golf greens, fairways, bowling greens)",
            cropList: ["Turf"],
            "weeds": [
                {
                    "weed": "Black Beetle",
                    pestList: ["Black Beetle"],
                    "rate": "1.3",
                    "rateMax": "1.8",
                    "unit": "kg/ha",
                    "states": [
                        "Qld",
                        "NSW",
                        "Vic",
                        "SA",
                        "WA",
                        "NT"
                    ],
                    "note": "Apply in sufficient water to give uniform coverage (minimum 10 L per 100 m²). Not for TAS."
                }
            ]
        }
    ],
    "note": "Insecticide Resistance Warning: Group 1A Insecticide.",
    "labelPdf": "Source labels/Bayer_Ficam_Label.pdf",
    "sdsPdf": "SDS Labels/FICAM_W_INSECTICIDE.pdf",
    "signalHeading": "Poison",
  "apvma": "31988",
    "classification": {
        "type": "Insecticide",
        "target": [
            "Insects",
            "Spiders",
            "Ants"
        ],
        "timing": [
            "Post-emergent"
        ]
    },
    "restraints": [
        "DO NOT spray directly on humans or animals.",
        "DO NOT use on vegetation for consumption by humans or animals.",
        "DO NOT allow contact with mattresses, bedclothes or clothing.",
        "DO NOT allow treated seed to contaminate grain / other seed intended for consumption."
    ],
    "withholding": {
        "harvest": "DO NOT use treated seed for animal or human consumption. To allow establishment of pastures, stock should be excluded for at least 3 months from areas sown with treated seed.",
        "grazing": "Refer to label"
    },
    "compatibility": {
        "compatible": [],
        "incompatible": [],
        "notes": ["Compatible with some inoculums and seed adhesives. Check with supplier."]
    },
    "surfactant": "Not required.",
    "sprayerCleanup": "Wash out sprayers containing oily residues with water and detergent before use."
};
