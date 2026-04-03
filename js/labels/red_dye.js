productDatabase['red_dye'] = {
    "name": "Surefire Red Dye Spray Marker",
    "company": "Surefire",

    "category": "Herbicides",
    "activeIngredient": "Rhodamine B (150 g/L)",
    "group": "Marker Dye",
    "modeOfAction": "Visual identification of sprayed areas",
    "formulation": "Liquid",
    "color": "#f43f5e",
    "apvma": "56461",
    "labelPdf": "Source labels/PCT_RedDyeMarker_Label.pdf",
    "signalHeading": "Caution",
    "sdsPdf": "SDS Labels/PCT_REACTOR_RED_DYE_SDS.pdf",
    "signalHeading": "",
    "classification": {
        "type": "Herbicide",
        "target": [
            "Spray Solution Visibility"
        ],
        "timing": [
            "Mixing"
        ]
    },
    "crops": [
        {
            "crop": "Spray Marking (General)",
            cropList: ["Spray Marking"],
            "weeds": [
                {
                    "weed": "Spray Solution Marker",
                    pestList: ["Spray Solution Marker"],
                    "states": [
                        "All"
                    ],
                    "rate": "100",
                    "rateMax": "100",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "50 - 100 mL/100L",
                        "spot": "5 - 10 mL/10L"
                    },
                    "stage": "Mixing",
                    "note": "Use higher rate for more intense colour."
                }
            ]
        },
        {
            "crop": "Foam Marker Colouring",
            cropList: ["Foam Marker Colouring"],
            "weeds": [
                {
                    "weed": "Foam Colouring Agent",
                    pestList: ["Foam Colouring Agent"],
                    "states": [
                        "All"
                    ],
                    "rate": "30",
                    "rateMax": "30",
                    "unit": "mL/10L",
                    "rates": {
                        "spot": "20 - 30 mL/10L foam mix"
                    },
                    "stage": "Mixing",
                    "note": "Turns white foam pink."
                }
            ]
        }
    ],
    "restraints": [
        "DO NOT swallow",
        "Avoid contact with eyes and skin",
        "Wash out equipment thoroughly after use to prevent staining subsequent sprays"
    ],
    "compatibility": {
        "compatible": [
            "Liquid and powder herbicides",
            "2,4-D Amine",
            "MCPA"
        ],
        "incompatible": [],
        "notes": [
            "Premix with water before adding to tank. When mixing with Amine products, ensure dye is thoroughly mixed with water first."
        ]
    },
    "withholding": "Not required.",
    "surfactant": "Not required.",
    "sprayerCleanup": "Thoroughly wash with water to remove dye residues."
};
