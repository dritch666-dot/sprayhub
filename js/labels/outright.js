productDatabase['outright'] = {
    "name": "Outright 770 Spray Adjuvant",
    "company": "AMVAC",

    "category": "Adjuvants / Surfactants",
    "activeIngredient": "Surfactant (334g/L) + Ammonium Sulphate (300g/L) + Veg Oil (136g/L)",
    "group": "Adjuvant (Water Conditioner)",
    "modeOfAction": "Overcomes hard water, improves wetting & penetration",
    "formulation": "Liquid",
    "color": "#f59e0b",
    "apvma": "67709",
    "labelPdf": "Source labels/VicChem_Outright770_Label.pdf",
    "sdsPdf": "SDS Labels/OUTRIGHT_770_SPRAY_ADJUVANT.pdf",
    "signalHeading": "Poison",
    "classification": {
        "type": "Adjuvant",
        "target": [
            "Hard Water",
            "Weed Surfaces"
        ],
        "timing": [
            "Tank Mix"
        ]
    },
    "crops": [
        {
            "crop": "Non-Crop Situations (Herbicide Spray)",
            cropList: ["Non-Crop Situations"],
            "weeds": [
                {
                    "weed": "Glyphosate Herbicides",
                    pestList: ["Glyphosate Herbicides"],
                    "states": [
                        "All"
                    ],
                    "rate": "100",
                    "rateMax": "1000",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "100 - 1000 mL/100L"
                    },
                    "stage": "Tank Mix",
                    "note": "Use higher rate for hard water (>340ppm) or hot/dry conditions."
                },
                {
                    "weed": "Glufosinate Herbicides",
                    pestList: ["Glufosinate Herbicides"],
                    "states": [
                        "All"
                    ],
                    "rate": "100",
                    "rateMax": "1000",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "100 - 1000 mL/100L"
                    },
                    "stage": "Tank Mix"
                },
                {
                    "weed": "Paraquat Herbicides",
                    pestList: ["Paraquat Herbicides"],
                    "states": [
                        "All"
                    ],
                    "rate": "100",
                    "rateMax": "1000",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "100 - 1000 mL/100L"
                    },
                    "stage": "Tank Mix"
                },
                {
                    "weed": "Knockdown Mixtures (2,4-D, MCPA, etc)",
                    pestList: ["Knockdown Mixtures"],
                    "states": [
                        "All"
                    ],
                    "rate": "100",
                    "rateMax": "1000",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "100 - 1000 mL/100L"
                    },
                    "stage": "Tank Mix"
                }
            ]
        }
    ],
    "restraints": [
        "DO NOT use in or on crops. Use ONLY in non-crop situations.",
        "Mildly corrosive to copper/brass/galvanized parts - flush thoroughly"
    ],
    "compatibility": {
        "compatible": [
            "Glyphosate",
            "Glufosinate",
            "Paraquat",
            "2,4-D",
            "MCPA",
            "Clopyralid",
            "Metsulfuron",
            "Triclopyr"
        ],
        "incompatible": [],
        "notes": [
            "Add Outright 770 to water BEFORE adding the herbicide."
        ]
    },
    "withholding": "Refer to pesticide label.",
    "surfactant": "This IS an adjuvant system.",
    "sprayerCleanup": "Triple rinse. Flush thoroughly due to potential corrosion."
};
