productDatabase['deluge'] = {
    "name": "Deluge Low Foam Wetting Agent",
    "company": "AMVAC",

    "category": "Adjuvants / Surfactants",
    "activeIngredient": "Non-Ionic Fatty Acid Ethoxylates (600 g/L)",
    "group": "Adjuvant (Wetting Agent)",
    "modeOfAction": "Increases wetting and spreading of spray droplets",
    "formulation": "Liquid",
    "color": "#0ea5e9",
    "apvma": "59845",
    "labelPdf": "Source labels/VicChem_Deluge_Label.pdf",
    "sdsPdf": "SDS Labels/DELUGE_LOW_FOAM.pdf",
    "signalHeading": "Poison",
    "classification": {
        "type": "Adjuvant",
        "target": [
            "Spray Droplet Retention"
        ],
        "timing": [
            "Tank Mix"
        ]
    },
    "crops": [
        {
            "crop": "Horticulture, Grapevines, Tree Crops",
            cropList: ["Horticulture","Grapevines","Tree Crops"],
            "weeds": [
                {
                    "weed": "General Wetting",
                    pestList: ["General Wetting"],
                    "states": [
                        "All"
                    ],
                    "rate": "10",
                    "rateMax": "10",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "10 mL/100L"
                    },
                    "stage": "Tank Mix",
                    "note": "Recommended for addition to all horticultural, grapevine and tree crop sprays except where formulation has sufficient wetter or where product directs not to add wetter. Use only when spray volume is at least 100L/ha."
                }
            ]
        },
        {
            "crop": "Weedkilling Sprays (General)",
            cropList: ["Weedkilling Sprays"],
            "weeds": [
                {
                    "weed": "General Herbicides",
                    pestList: ["General Herbicides"],
                    "states": [
                        "All"
                    ],
                    "rate": "60",
                    "rateMax": "60",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "60 mL/100L (Low Vol)",
                        "spot": "12 mL/100L (High Vol)",
                        "knapsack": "2 mL/15L"
                    },
                    "stage": "Tank Mix",
                    "note": "DELUGE LOW FOAM Wetting Agent can be used with herbicides in sugar, vineyards and orchard situations where direct contact with the crop is avoided."
                },
                {
                    "weed": "Paraquat / Diquat",
                    pestList: ["Paraquat / Diquat"],
                    "states": [
                        "All"
                    ],
                    "rate": "200",
                    "rateMax": "200",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "200 mL/100L",
                        "knapsack": "30 mL/15L"
                    },
                    "stage": "Tank Mix",
                    "note": "Under very high dilution rates for maximum efficiency, a higher rate of DELUGE LOW FOAM Wetting Agent is used to ensure even coverage of plant foliage and to increase absorption."
                },
                {
                    "weed": "Soil Residuals (e.g. Diuron)",
                    pestList: ["Soil Residuals"],
                    "states": [
                        "All"
                    ],
                    "rate": "125",
                    "rateMax": "500",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "125 - 500 mL/100L"
                    },
                    "stage": "Tank Mix",
                    "note": "When applying to soil active herbicides such as Diuron to standing weeds, add DELUGE LOW FOAM Wetting Agent to thoroughly wet foliage. Consult product labels for individual recommendations."
                }
            ]
        },
        {
            "crop": "Fire Fighting",
            cropList: ["Fire Fighting"],
            "weeds": [
                {
                    "weed": "Water Tank Additive",
                    pestList: ["Water Tank Additive"],
                    "states": [
                        "All"
                    ],
                    "rate": "10",
                    "rateMax": "10",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "10 mL/100L",
                        "knapsack": "2 mL/15L"
                    },
                    "stage": "Tank Mix",
                    "note": "DELUGE LOW FOAM Wetting Agent increases the wetting power of water which assists in quick control and mopping up of fires. In cases where water may not be readily available and a less drenching spray is needed, a tank full will cover a larger area."
                }
            ]
        }
    ],
    "restraints": [
        "Do NOT use where product label directs NOT to use wetting agent"
    ],
    "compatibility": {
        "compatible": [
            "Insecticides",
            "Fungicides",
            "Herbicides"
        ],
        "incompatible": [],
        "notes": [
            "Add Deluge LAST to the spray tank unless directed otherwise."
        ]
    },
    "withholding": "Refer to pesticide label.",
    "surfactant": "This IS a surfactant.",
    "sprayerCleanup": "Triple rinse."
};
