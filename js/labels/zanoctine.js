productDatabase['zanoctine'] = {
    "name": "Zanoctine Fungicide",
    "company": "Campbell",

    "category": "Fungicides",
    "activeIngredient": "Guazatine Acetates (400 g/L)",
    "group": "Group M7 (Fungicide)",
    "modeOfAction": "Lipid biosynthesis inhibitor",
    "formulation": "Liquid",
    "color": "#db2777",
    "apvma": "54258",
    "labelPdf": "Source labels/Colin_Campbell_chemicals_Campbell_Zanoctine_Liquid_Fungicide_Label.pdf",
    "sdsPdf": "SDS Labels/CAMPBELL_ZANOCTINE_FUNGICIDE.pdf",
    "signalHeading": "Poison",
    "classification": {
        "type": "Fungicide",
        "target": [
            "Green Mould",
            "Blue Mould",
            "Sour Rot",
            "Transit Rot"
        ],
        "timing": [
            "Post-harvest"
        ]
    },
    "crops": [
        {
            "crop": "Citrus",
            cropList: ["Citrus"],
            "weeds": [
                {
                    "weed": "Blue Mould",
                    pestList: ["Blue Mould"],
                    "states": [
                        "Qld",
                        "NSW",
                        "Vic",
                        "SA",
                        "WA",
                        "NT"
                    ],
                    "rate": "130",
                    "rateMax": "130",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "1.3 L/1000L (Dip)"
                    },
                    "stage": "Post-harvest",
                    "note": "Apply as a bulk dip within 24 hours of harvest. For packing line flood fruit for 30 seconds within 24 hours of harvest. Re-charge dip with solution of 1.3L/1000L water."
                },
                {
                    "weed": "Green Mould",
                    pestList: ["Green Mould"],
                    "states": [
                        "Qld",
                        "NSW",
                        "Vic",
                        "SA",
                        "WA",
                        "NT"
                    ],
                    "rate": "130",
                    "rateMax": "130",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "1.3 L/1000L (Dip)"
                    },
                    "stage": "Post-harvest"
                },
                {
                    "weed": "Sour Rot",
                    pestList: ["Sour Rot"],
                    "states": [
                        "Qld",
                        "NSW",
                        "Vic",
                        "SA",
                        "WA",
                        "NT"
                    ],
                    "rate": "130",
                    "rateMax": "130",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "1.3 L/1000L (Dip)"
                    },
                    "stage": "Post-harvest"
                }
            ]
        },
        {
            "crop": "Tomatoes",
            cropList: ["Tomatoes"],
            "weeds": [
                {
                    "weed": "Alternaria Rot",
                    pestList: ["Alternaria Rot"],
                    "states": [
                        "Qld",
                        "NSW",
                        "Vic",
                        "SA",
                        "WA",
                        "NT"
                    ],
                    "rate": "250",
                    "rateMax": "250",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "250 mL/100L + Wetter"
                    },
                    "stage": "Post-harvest",
                    "note": "For Non-recirculating Spray Only: Post-harvest washing in chlorinated water (50ppm) is recommended. Before spraying with Zanoctine the fruit should be cooled to below 35\u00b0C and dry. Spray fruit for 30 seconds as soon as possible and no later than 24 hours after harvest. Allow fruit to drain thoroughly and dry before packing. Note: The level of disease control may vary between tomato varieties. Zanoctine is most effective on cv. Floradade and Pirate."
                },
                {
                    "weed": "Grey Mould",
                    pestList: ["Grey Mould"],
                    "states": [
                        "Qld",
                        "NSW",
                        "Vic",
                        "SA",
                        "WA",
                        "NT"
                    ],
                    "rate": "250",
                    "rateMax": "250",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "250 mL/100L + Wetter"
                    },
                    "stage": "Post-harvest"
                },
                {
                    "weed": "Transit Rot",
                    pestList: ["Transit Rot"],
                    "states": [
                        "Qld",
                        "NSW",
                        "Vic",
                        "SA",
                        "WA",
                        "NT"
                    ],
                    "rate": "250",
                    "rateMax": "250",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "250 mL/100L + Wetter"
                    },
                    "stage": "Post-harvest"
                },
                {
                    "weed": "Yeasty Rot",
                    pestList: ["Yeasty Rot"],
                    "states": [
                        "Qld",
                        "NSW",
                        "Vic",
                        "SA",
                        "WA",
                        "NT"
                    ],
                    "rate": "250",
                    "rateMax": "250",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "250 mL/100L + Wetter"
                    },
                    "stage": "Post-harvest"
                }
            ]
        },
        {
            "crop": "Rockmelons",
            cropList: ["Rockmelons"],
            "weeds": [
                {
                    "weed": "Post-harvest Rots",
                    pestList: ["Post-Harvest Rots"],
                    "states": [
                        "Qld",
                        "NSW",
                        "Vic",
                        "SA",
                        "WA",
                        "NT"
                    ],
                    "rate": "130",
                    "rateMax": "130",
                    "unit": "mL/100L",
                    "rates": {
                        "spot": "130 mL + 100mL Carbendazim / 100L"
                    },
                    "stage": "Post-harvest",
                    "note": "Dip fruit for 45 seconds within 24 hours of harvest."
                }
            ]
        }
    ],
    "restraints": [
        "Use within 24 hours of harvest",
        "Do not store fruit wet"
    ],
    "compatibility": {
        "compatible": [
            "Carbendazim",
            "Wetting Agents"
        ],
        "incompatible": [],
        "notes": [
            "Do not mix concentrates together."
        ]
    },
    "withholding": {
        "harvest": "Not required when used as directed.",
        "grazing": "N/A"
    },
    "surfactant": "Required for Tomatoes (16mL/100L) and Rockmelons (10mL/100L).",
    "sprayerCleanup": "Triple rinse."
};
