productDatabase['access'] = {
    "id": "access",
    "name": "Corteva Access® Herbicide",
    "company": "Corteva",

    "category": "Herbicides",
    "activeIngredient": "240 g/L Triclopyr, 120 g/L Picloram",
    "group": "Group 4 (Herbicide)",
    "formulation": "Liquid Concentrate",
    "modeOfAction": "Synthetic auxin (plant hormone mimic)",
    "targetPests": [
        "Acacia spp.",
        "African boxthorn",
        "Algaroba",
        "Bitterbark",
        "Broadleaf privet",
        "Brush box",
        "Cacti",
        "Calotrope",
        "Camphor laurel",
        "Chinee apple",
        "Cockspur thorn",
        "Corkwood wattle",
        "Eucalyptus spp. regrowth",
        "Green cestrum",
        "Grevillea spp.",
        "Groundsel bush",
        "Guava",
        "Hawthorn",
        "Lantana",
        "Leucaena",
        "Limebush",
        "Oleander",
        "Parkinsonia",
        "Prickly acacia",
        "Rubbervine",
        "Sweet briar",
        "Tea trees",
        "Tree of Heaven",
        "Whitewood",
        "Wild tobacco tree",
        "Wilga",
        "Willow"
    ],
    "crops": [
        {
            "crop": "Agricultural non-crop areas, commercial and industrial areas, fence lines, forestry",
            cropList: ["Agricultural Non-Crop Areas","Commercial And Industrial Areas","Fence Lines","Forestry"],
            "weeds": [
                {
                    "weed": "Acacia spp., Brigalow, Hickory wattle, Mulga",
                    pestList: ["Acacia Spp.","Brigalow","Hickory Wattle","Mulga"],
                    "rate": "1",
                    "unit": "L/60L Diesel",
                    "states": [
                        "All",

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER90342: Domestic residences ──
{
  crop: "Domestic residences — Rubber vine basal bark (PER90342)",
  cropList: ["Non-crop","Domestic","Residential"],
  permitNumber: "PER90342",
  weeds: [
      { weed: "Rubber vine (Cryptostegia grandiflora)", pestList: ["Woody Weeds","Climbing Weeds","Rubber Vine"], states: ["NSW"], rate: "1", rateMax: "1", unit: "L/60L diesel", stage: "Basal bark or cut stump method", note: "PERMIT PER90342 (exp. 31/01/2031). Access herbicide (triclopyr+picloram). Basal bark for stems up to 5cm diameter, cut stump for larger weeds. Apply immediately after cut. Max 3 apps/year. WHP: Entry when spray dried." }
  ]
}

    ],
    "note": "Basal bark method. Ensure all stems on multi-stemmed varieties are treated. Delay until regrowth is 1m high."
                },
                {
                    "weed": "Broadleaf privet",
                    pestList: ["Broadleaf Privet"],
                    "rate": "2",
                    "unit": "L/60L Diesel",
                    "states": [
                        "All"
                    ],
                    "note": "Apply immediately after cut is made."
                },
                {
                    "weed": "Cacti (Prickly pear, Tiger pear)",
                    pestList: ["Cacti"],
                    "rate": "1",
                    "unit": "L/60L Diesel",
                    "states": [
                        "All"
                    ],
                    "note": "Apply as an overall spray, wetting all areas to ground level."
                },
                {
                    "weed": "Lantana, Leucaena, Oleander",
                    pestList: ["Lantana","Leucaena","Oleander"],
                    "rate": "1",
                    "unit": "L/60L Diesel",
                    "states": [
                        "All"
                    ],
                    "note": "Treat single stem plants only."
                },
                {
                    "weed": "Rubbervine",
                    pestList: ["Rubbervine"],
                    "rate": "2",
                    "unit": "L/60L Diesel",
                    "states": [
                        "All"
                    ],
                    "note": "Treat single stemmed seedling plants only."
                }
            ]
        }
    ],
    "note": "Weed Resistance Warning: Group 4 Herbicide.",
    "labelPdf": "Source labels/Corteva_Access_Label.pdf",
    "sdsPdf": "SDS Labels/ACCESS.pdf",
    "signalHeading": "Poison",
  "apvma": "46640",
        "classification": {
        "type": "Herbicide",
        "target": ["Broadleaf Weeds","Woody Weeds","Noxious Weeds"],
        "timing": ["Post-emergent"]
    },
    "restraints": [
        "DO NOT add water to Access® Herbicide. It is designed for use with diesel only.",
        "DO NOT apply to weeds which may be stressed (not actively growing).",
        "DO NOT apply to charcoal coated or wet stems as this can repel the diesel mixture."
    ],
    "withholding": {
        "harvest": "The use pattern of this product is such that no withholding periods are required.",
        "grazing": "Refer to label"
    },
    "compatibility": {
        "compatible": [],
        "incompatible": [],
        "notes": ["Compatible with diesel and Biosafe. Should not be used or diluted with water or other chemicals."]
    },
    "surfactant": "Mixed with Diesel only.",
    "sprayerCleanup": "Use a degreaser (e.g. Caltex Kwik-D-Grease) to remove traces of carrier from the sprayer. Rinse with water, then use an alkali detergent."
};
