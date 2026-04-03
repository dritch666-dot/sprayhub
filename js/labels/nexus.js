productDatabase['nexus'] = {
    "name": "Nexus Spray Adjuvant",
    "company": "AMVAC",

    "category": "Adjuvants / Surfactants",
    "activeIngredient": "Canola Oil (865 g/L)",
    "group": "Adjuvant (Vegetable Oil)",
    "modeOfAction": "Improves wetting, spreading, reduces evaporation",
    "formulation": "Liquid",
    "color": "#f59e0b",
    "apvma": "58840",
    "labelPdf": "Source labels/VicChem_Nexus_Label.pdf",
    "sdsPdf": "SDS Labels/NEXUS_SPRAY_ADJUVANT.pdf",
    "signalHeading": "Poison",
    "classification": {
        "type": "Adjuvant",
        "target": [
            "Spray Droplet Deposition"
        ],
        "timing": [
            "Tank Mix"
        ]
    },
    "crops": [
        {
            "crop": "Broadacre Boom Spraying",
            cropList: ["Broadacre Boom Spraying"],
            "weeds": [
                {
                    "weed": "General Pesticides",
                    pestList: ["General Pesticides"],
                    "states": [
                        "All"
                    ],
                    "rate": "200",
                    "rateMax": "500",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "200 - 500 mL/100L"
                    },
                    "stage": "Tank Mix",
                    "note": "Use lower rate with low application rate products."
                }
            ]
        },
        {
            "crop": "Tree Crops (High Volume)",
            cropList: ["Tree Crops"],
            "weeds": [
                {
                    "weed": "General Pesticides",
                    pestList: ["General Pesticides"],
                    "states": [
                        "All"
                    ],
                    "rate": "100",
                    "rateMax": "200",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "100 - 200 mL/100L"
                    },
                    "stage": "Tank Mix"
                }
            ]
        },
        {
            "crop": "Vegetables",
            cropList: ["Vegetables"],
            "weeds": [
                {
                    "weed": "General Pesticides",
                    pestList: ["General Pesticides"],
                    "states": [
                        "All"
                    ],
                    "rate": "150",
                    "rateMax": "200",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "150 - 200 mL/100L"
                    },
                    "stage": "Tank Mix"
                }
            ]
        },
        {
            "crop": "Hand Gun / Knapsack",
            cropList: ["Hand Gun / Knapsack"],
            "weeds": [
                {
                    "weed": "General Pesticides",
                    pestList: ["General Pesticides"],
                    "states": [
                        "All"
                    ],
                    "rate": "100",
                    "rateMax": "200",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "100 - 200 mL/100L",
                        "knapsack": "20 - 30 mL/10L"
                    },
                    "stage": "Tank Mix"
                }
            ]
        },
        {
            "crop": "CDA or ULV Application",
            cropList: ["CDA Or ULV Application"],
            "weeds": [
                {
                    "weed": "General Pesticides",
                    pestList: ["General Pesticides"],
                    "states": [
                        "All"
                    ],
                    "rate": "1000",
                    "rateMax": "2000",
                    "unit": "mL/ha",
                    "rates": {
                        "boom": "1 - 2 L/ha"
                    },
                    "stage": "Tank Mix"
                }
            ]
        }
    ],
    "restraints": [
        "Caution with sensitive crops during heat/drought stress"
    ],
    "compatibility": {
        "compatible": [
            "Most herbicides, insecticides, fungicides"
        ],
        "incompatible": [],
        "notes": [
            "Add Nexus directly to tank after pesticide. Do not premix."
        ]
    },
    "withholding": "Not required.",
    "surfactant": "This IS an adjuvant.",
    "sprayerCleanup": "Triple rinse."
};
