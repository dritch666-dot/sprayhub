productDatabase['vigilant'] = {
    "id": "vigilant",
    "name": "Corteva Vigilant® II",
    "company": "Corteva",

    "category": "Herbicides",
    "activeIngredient": "4.47 g/L Aminopyralid, 44.7 g/L Picloram",
    "group": "Group 4 (Herbicide)",
    "formulation": "Liquid Concentrate",
    "modeOfAction": "Synthetic auxin (plant hormone mimic)",
    "targetPests": [
        "Cotoneaster",
        "Gorse",
        "Japanese honeysuckle",
        "Tree privet",
        "Wild tobacco tree",
        "Willows",
        "Agapanthus",
        "Canna lily",
        "Bull thistle",
        "Capeweed",
        "Docks",
        "Paterson's curse",
        "Prickly lettuce"
    ],
    "crops": [
        {
            "crop": "Non-crop areas (native vegetation, conservation areas, gullies, reserves, parks)",
            cropList: ["Non-Crop Areas"],
            "weeds": [
                {
                    "weed": "Woody weeds (cotoneaster, gorse, Japanese honeysuckle, etc.)",
                    pestList: ["Woody Weeds"],
                    "rate": "3-5",
                    "rateMax": "5",
                    "unit": "mm/cut",
                    "states": [
                        "All",

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER12436: Ginger (exotic) control ──
{
  crop: "Ginger (exotic) control — Multiple weeds (PER12436)",
  cropList: ["Ginger (exotic)"],
  permitNumber: "PER12436",
  weeds: [
      { weed: "Kahili ginger, White ginger, Yellow ginger (Hedychium spp. and invasive Zingiberaceae)", pestList: ["Woody Weeds"], states: ["QLD"], rate: "25", rateMax: "25", unit: "g/100L", stage: "Foliar spray (handgun) or cut stump applications", note: "PERMIT PER12436 (exp. 30 Jun 2030). Non-crop, commercial, forest, pasture situations. Metsulfuron-methyl foliar spray. Cut stump (spring/summer 1 g/1L, winter 6 g/1L). Thoroughly wet foliage. Apply 2-3 applications/year during spring/summer. WHP: Grazing per product label." },
      { weed: "Kahili ginger, White ginger, Yellow ginger (Hedychium spp. and invasive Zingiberaceae)", pestList: ["Woody Weeds"], states: ["QLD"], rate: "1", rateMax: "6", unit: "g/1L", stage: "Cut stump (spring/summer 1 g/1L, winter 6 g/1L)", note: "PERMIT PER12436 (exp. 30 Jun 2030). Imazapyr 240 g/L or 250 g/L cut stump: 1:1 mixture in water. Cut horizontally for best results. WHP: Grazing per product label." },
      { weed: "Kahili ginger, White ginger, Yellow ginger (Hedychium spp. and invasive Zingiberaceae)", pestList: ["Woody Weeds"], states: ["QLD"], rate: "Undiluted", rateMax: "Undiluted", unit: "Gel", stage: "Cut stump application", note: "PERMIT PER12436 (exp. 30 Jun 2030). Aminopyralid 4.47 g/L + Picloram 44.7 g/L gel (Vigilant II). Apply 3-5mm thick layer over cut surfaces. Cut horizontally. WHP: Grazing per product label." },
      { weed: "Kahili ginger, White ginger, Yellow ginger (Hedychium spp. and invasive Zingiberaceae)", pestList: ["Woody Weeds"], states: ["QLD"], rate: "1:30", rateMax: "1:30", unit: "ratio in diesel", stage: "Basal bark spray (knapsack)", note: "PERMIT PER12436 (exp. 30 Jun 2030). Triclopyr 600 g/L. Spray stems and surface rhizomes thoroughly. Ground-based application only. WHP: Grazing per product label." }
  ]
}

    ],
    "note": "Cut stems horizontally. Apply 3-5mm thick layer of Vigilant over cut surface."
                },
                {
                    "weed": "Rhizomatous plants (agapanthus, canna lily)",
                    pestList: ["Rhizomatous Plants"],
                    "rate": "3-5",
                    "rateMax": "5",
                    "unit": "mm/cut",
                    "states": [
                        "All"
                    ],
                    "note": "Prune shoots horizontally. Apply 3-5mm thick layer of Vigilant across cut surface."
                },
                {
                    "weed": "Herbaceous weeds (thistle, capeweed, docks, etc.)",
                    pestList: ["Herbaceous Weeds"],
                    "rate": "neat",
                    "rateMax": "neat",
                    "unit": "mL/plant",
                    "states": [
                        "All"
                    ],
                    "note": "Apply neat Vigilant to at least 50% of the leaves by wiping along the middle of each leaf."
                }
            ]
        }
    ],
    "note": "Weed Resistance Warning: Group 4 Herbicide.",
    "labelPdf": "Source labels/Corteva_VigilantII_Label.pdf",
    "sdsPdf": "SDS Labels/VIGILANT_II_HERBICIDE.pdf",
    "signalHeading": "Caution",
    "apvma": "68484",
        "classification": {
        "type": "Herbicide",
        "target": ["Woody Weeds","Rhizomatous Plants","Herbaceous Weeds"],
        "timing": ["Post-emergent"]
    },
    "restraints": [
        "DO NOT use if rain is likely to fall within 12 hours of application.",
        "DO NOT use in turf or lawns.",
        "DO NOT use in the urban home garden."
    ],
    "withholding": {
        "harvest": "DO NOT allow public entry into treated areas until the gel has dried.",
        "grazing": "Refer to label"
    },
    "compatibility": {
        "compatible": [],
        "incompatible": [],
        "notes": ["Applied locally as a direct-application gel. Mixing is not required."]
    },
    "surfactant": "Included in the formulation.",
    "sprayerCleanup": "No sprayer. Dispose of brush-bottle responsibly."
};
