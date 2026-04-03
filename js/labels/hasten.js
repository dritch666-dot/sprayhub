productDatabase['hasten'] = {
    "name": "Hasten Spray Adjuvant",
    "company": "Victorian Chemical Company",

    "category": "Adjuvants / Surfactants",
    "activeIngredient": "Canola Oil Esters (704 g/L) + Surfactant (196 g/L)",
    "group": "Adjuvant (Esterified Seed Oil)",
    "modeOfAction": "Increases penetration through waxy cuticles",
    "formulation": "Liquid",
    "color": "#f59e0b",
    "apvma": "47999",
    "labelPdf": "Source labels/Victorian_Chemical_Company_Proprietary_Hasten_Spray_Adjuvant_Label.pdf",
    "sdsPdf": "SDS Labels/HASTEN_SPRAY_ADJUVANT.pdf",
    "signalHeading": "Poison",
    "classification": {
        "type": "Adjuvant",
        "target": [
            "Waxy Cuticles",
            "Spray Droplets"
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
                    "weed": "General Herbicides",
                    pestList: ["General Herbicides"],
                    "states": [
                        "All"
                    ],
                    "rate": "1000",
                    "rateMax": "1000",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "0.5 - 2.0 L/100L"
                    },
                    "stage": "Tank Mix",
                    "note": "Typical use rate 0.5 - 1.0 L/ha"
                },
                {
                    "weed": "Clethodim Products",
                    pestList: ["Clethodim Products"],
                    "states": [
                        "All"
                    ],
                    "rate": "500",
                    "rateMax": "1000",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "0.5 - 1.0 L/100L"
                    },
                    "stage": "Tank Mix"
                },
                {
                    "weed": "Imazapic/Imazamox",
                    pestList: ["Imazapic/Imazamox"],
                    "states": [
                        "All"
                    ],
                    "rate": "500",
                    "rateMax": "1000",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "0.5 - 1.0 L/100L"
                    },
                    "stage": "Tank Mix"
                }
            ]
        },
        {
            "crop": "High Volume Spraying (>200 L/ha)",
            cropList: ["High Volume Spraying"],
            "weeds": [
                {
                    "weed": "Fungicides/Insecticides",
                    pestList: ["Fungicides/Insecticides"],
                    "states": [
                        "All"
                    ],
                    "rate": "200",
                    "rateMax": "500",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "200 - 500 mL/100L"
                    },
                    "stage": "Tank Mix"
                }
            ]
        },
        {
            "crop": "Low Volume Spraying (10-20 L/ha)",
            cropList: ["Low Volume Spraying"],
            "weeds": [
                {
                    "weed": "Aerial/Low Volume",
                    pestList: ["Aerial/Low Volume"],
                    "states": [
                        "All"
                    ],
                    "rate": "2000",
                    "rateMax": "5000",
                    "unit": "mL/100L",
                    "rates": {
                        "boom": "2 - 5 L/100L"
                    },
                    "stage": "Tank Mix"
                }
            ]
        },
        {
            "crop": "Cotton Defoliation",
            cropList: ["Cotton Defoliation"],
            "weeds": [
                {
                    "weed": "Defoliants (Thidiazuron)",
                    pestList: ["Defoliants"],
                    "states": [
                        "All"
                    ],
                    "rate": "500",
                    "rateMax": "500",
                    "unit": "mL/ha",
                    "rates": {
                        "boom": "500 mL/ha"
                    },
                    "stage": "Tank Mix",
                    "note": "Assists performance of defoliants."
                }
            ]
        }
    ],
    "restraints": [
        "Do NOT use if oil-based adjuvants are specifically excluded by the pesticide label",
        "Caution with sensitive crops during drought/heat stress"
    ],
    "compatibility": {
        "compatible": [
            "Clethodim",
            "Imazapic",
            "Imazamox",
            "Topik",
            "Verdict",
            "Select",
            "Falcon",
            "Fusilade",
            "Targa",
            "Correct"
        ],
        "incompatible": [],
        "notes": [
            "Add Hasten LAST to the tank."
        ]
    },
    "withholding": "Refer to pesticide label.",
    "surfactant": "This IS a penetrant/surfactant.",
    "sprayerCleanup": "Triple rinse."
};
