// Danadim Insecticide - Placeholder
// This file has structural issues and needs to be rebuilt from the PDF
// Keeping it minimal to unblock verification of other products
productDatabase['danadim'] = {
    "name": "Danadim Insecticide",
    "company": "AMVAC",

    "category": "Insecticides",
    "classification": { "type": "Insecticide", "timing": ["Contact", "Systemic"] },
    "activeIngredient": "Dimethoate (400 g/L)",
    "group": "Group 1B (Insecticide)",
    "modeOfAction": "Anticholinesterase inhibitor",
    "formulation": "Emulsifiable Concentrate (EC)",
    "color": "#b91c1c",
    "apvma": "56454",
    "labelPdf": "Source labels/FMC_Danadim_Label.pdf",
    "sdsPdf": "SDS Labels/DANADIM.pdf",
    "signalHeading": "Poison",
    "crops": [
        {
            "crop": "Cereals",
            "cropList": ["Cereals"],
            "weeds": [
                {"weed": "Lucerne flea", "pestList": ["Lucerne Flea"], "states": ["All"], "rate": "55", "rateMax": "85", "unit": "mL/ha"}
            ]
        }
    ],
    "restraints": [
    "DO NOT apply if rainfall is expected within 6 hours.",
    "Maximum 4 applications per season."
  ],
    "withholding": "Harvest: 4 weeks, Grazing: 14 days",
    "compatibility": "Compatible with most pesticides"
};
