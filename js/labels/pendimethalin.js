productDatabase['pendimethalin'] = {
    "id": "pendimethalin",
    "name": "Nufarm Pendimethalin 440 Herbicide",
    "company": "Nufarm",

    "category": "Herbicides",
    "activeIngredient": "440 g/L Pendimethalin",
    "group": "Group 3 (Herbicide)",
    "formulation": "Liquid Concentrate",
    "modeOfAction": "Microtubule assembly inhibitor (Dinitroaniline)",
    "targetPests": [
        "Annual ryegrass (Lolium rigidum)",
        "Wireweed (Polygonum aviculare)",
        "Wild oats",
        "Silvergrass",
        "Barnyard grass",
        "Summer grass",
        "Pigweed",
        "Fat hen",
        "Prickly lettuce",
        "Sowthistle",
        "Crowsfoot grass"
    ],
    "crops": [
        {
            "crop": "Barley, Wheat",
            cropList: ["Barley","Wheat"],
            "weeds": [
                {
                    "weed": "Annual ryegrass, Wireweed, Wild oats (suppression)",
                    pestList: ["Annual Ryegrass","Wireweed","Wild Oats"],
                    "rate": "900",
                    "rateMax": "1400",
                    "unit": "mL/ha",
                    "states": [
                        "All",

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER13260: Hops ──
{
  crop: "Hops — Selected Weeds (PER13260)",
  cropList: ["Hops"],
  permitNumber: "PER13260",
  weeds: [
      { weed: "Selected Broadleaf and Grass Weeds", pestList: ["Broadleaf Weeds","Grass Weeds","Wireweed","Polygonum aviculare"], states: ["TAS"], rate: "6.5", rateMax: "9", unit: "L/ha", stage: "Pre-emergent application", note: "PERMIT PER13260 (exp. 30/09/2030). Apply one application only prior to hop plants emerging from winter dormancy. Requires 5mm rainfall within 10 days. Grazing: DO NOT graze for 8 weeks after application. WHP: Not required when used as directed. Product: Stomp 440 (440 g/L), Stomp Xtra (455 g/L), Rallis Panida Max (475 g/L)." }
  ]
},

// ── PER14357: Sugar cane ──
{
  crop: "Sugar cane — Striga (PER14357)",
  cropList: ["Sugar cane","Sugarcane"],
  permitNumber: "PER14357",
  weeds: [
      { weed: "Exotic Striga species", pestList: ["Striga spp."], states: ["QLD"], rate: "1", rateMax: "1.5", unit: "kg/ha", stage: "Pre-emergent application", note: "PERMIT PER14357 (exp. 31/08/2028). Pre-emergent application. Apply as per label instructions. WHP: DO NOT harvest, graze or cut for stock food for 7 days after application. Product: Nufarm Pendimethalin 440 (440 g/L)." }
  ]
},

// ── PER14886: Garlic (field grown) ──
{
  crop: "Garlic (field grown) — Broadleaf and Grass Weeds (PER14886)",
  cropList: ["Garlic"],
  permitNumber: "PER14886",
  weeds: [
      { weed: "Broadleaf and Grass Weeds (post-plant, pre-emergent)", pestList: ["Broadleaf Weeds","Grass Weeds"], states: ["NSW","SA","TAS"], rate: "0.56", rateMax: "0.75", unit: "L/ha", stage: "Post-plant, pre-emergent", note: "PERMIT PER14886 (exp. 31/03/2030). Apply from immediately after sowing until just prior to emergence. Apply to fine, firm seedbed. Minimum planting depth 15mm. Use higher rates on heavy soils or high organic content. DO NOT use on sandy soils or if soil is wet/cold. Requires 5mm rainfall or irrigation within 10 days. WHP: Not required when used as directed. Product: Nufarm Pendimethalin 440 (440 g/L)." },
      { weed: "Broadleaf and Grass Weeds (post-emergent)", pestList: ["Broadleaf Weeds","Grass Weeds"], states: ["NSW","SA","TAS"], rate: "0.75", rateMax: "1.5", unit: "L/ha", stage: "Post-emergent", note: "PERMIT PER14886 (exp. 31/03/2030). Apply from first true leaf until 3 leaf stage. Repeat applications allowed (minimum 14 day interval). Maximum 3 applications per season; total max 2.25 L/ha per season. DO NOT apply if soil is wet/cold. Allow 5-12mm irrigation within day of planting, no more. WHP: Not required when used as directed. Product: Nufarm Pendimethalin 440 (440 g/L)." },
      { weed: "Broadleaf and Grass Weeds (post-plant, pre-emergent, covered/protected)", pestList: ["Broadleaf Weeds","Grass Weeds"], states: ["NSW","SA","TAS"], rate: "0.56", rateMax: "0.75", unit: "L/ha", stage: "Post-plant, pre-emergent", note: "PERMIT PER14886 (exp. 31/03/2030). Covered/protected situations for seed production only. NOT for human/animal consumption. Apply from immediately after sowing until just prior to emergence. Minimum planting depth 15mm. DO NOT use on sandy soils. WHP: Not required when used as directed. Product: Nufarm Pendimethalin 440 (440 g/L)." },
      { weed: "Broadleaf and Grass Weeds (post-emergent, covered/protected)", pestList: ["Broadleaf Weeds","Grass Weeds"], states: ["NSW","SA","TAS"], rate: "0.75", rateMax: "1.5", unit: "L/ha", stage: "Post-emergent", note: "PERMIT PER14886 (exp. 31/03/2030). Covered/protected situations for seed production only. NOT for human/animal consumption. Apply from first true leaf until 3 leaf stage. Repeat applications allowed (minimum 14 day interval). Maximum 3 applications per season; total max 2.25 L/ha per season. WHP: Not required when used as directed. Product: Nufarm Pendimethalin 440 (440 g/L)." }
  ]
},

// ── PER14886: Garlic ──
{
  crop: "Garlic — Hogweed/Wireweed (PER14886)",
  cropList: ["Garlic"],
  permitNumber: "PER14886",
  weeds: [
      { weed: "Hogweed (Wireweed) (Polygonum aviculare) — post-plant, pre-emergent", pestList: ["Hogweed","Wireweed","Polygonum aviculare"], states: ["NSW","SA","TAS"], rate: "0.56", rateMax: "0.75", unit: "L/ha", stage: "Post-plant, pre-emergent", note: "PERMIT PER14886 (exp. 31/03/2030). Apply from immediately after sowing until just prior to emergence. Minimum planting depth 15mm. DO NOT use on sandy soils. WHP: Not required when used as directed. Available on registered product labels. Product: Nufarm Pendimethalin 440 (440 g/L)." },
      { weed: "Hogweed (Wireweed) (Polygonum aviculare) — post-emergent", pestList: ["Hogweed","Wireweed","Polygonum aviculare"], states: ["NSW","SA","TAS"], rate: "0.75", rateMax: "1.5", unit: "L/ha", stage: "Post-emergent", note: "PERMIT PER14886 (exp. 31/03/2030). Apply from first true leaf until 3 leaf stage. Repeat applications allowed (minimum 14 day interval). Maximum 3 applications per season; total max 2.25 L/ha per season. WHP: Not required when used as directed. Available on registered product labels. Product: Nufarm Pendimethalin 440 (440 g/L)." }
  ]
},

// ── PER93692: Potato transplants for seed ──
{
  crop: "Potato transplants for seed — Various Weeds (PER93692)",
  cropList: ["Potato","Potatoes"],
  permitNumber: "PER93692",
  weeds: [
      { weed: "Fathen, Hogweed, Chickweed, Nightshade, Annual Bluegrass, Sowthistle", pestList: ["Chenopodium album","Polygonum aviculare","Stellaria media","Solanum nigrum","Poa annua","Sonchus oleraceus"], states: ["NSW","QLD","SA","TAS","WA"], rate: "2.9", rateMax: "2.9", unit: "L/ha", stage: "Post-transplant", note: "PERMIT PER93692 (exp. 31/05/2027). Apply post transplant up to 21 days. Apply to moist soil before rain or irrigation (12-25mm). Maximum 1 application per crop; 2 applications per area per year. WHP: Not required when used as directed. Product: Stomp Xtra (455 g/L). Seed production only." }
  ]
},

// ── PER94550: Onion seed crops ──
{
  crop: "Onion seed crops — Grass and Broadleaf Weeds (PER94550)",
  cropList: ["Onion"],
  permitNumber: "PER94550",
  weeds: [
      { weed: "Annual Ryegrass, Dock, Chickweed, Sow Thistle, Fat Hen", pestList: ["Annual Ryegrass","Dock","Chickweed","Sow Thistle","Fat Hen","Broadleaf Weeds","Grass Weeds"], states: ["TAS"], rate: "0.5", rateMax: "1.0", unit: "L/ha", stage: "Inflorescence emergence to control emerged weeds", note: "PERMIT PER94550 (exp. 31/01/2028). Apply leading up to or during inflorescence emergence. Foliar spray over onion plants. Maximum 5 applications per crop; minimum 14 day interval between applications; total max 4.5 L/ha per crop. Spray volume 200 L/ha. WHP: Not required when used as directed. Product: Stomp Xtra (455 g/L)." }
  ]
}

    ],
    "note": "Plant seed at least 1cm beneath the treated band."
                }
            ]
        },
        {
            "crop": "Chickpeas, Faba beans, Field peas, Lentils, Lupins",
            cropList: ["Chickpeas","Faba Beans","Field Peas","Lentils","Lupins"],
            "weeds": [
                {
                    "weed": "Annual ryegrass, Wireweed",
                    pestList: ["Annual Ryegrass","Wireweed"],
                    "rate": "1.5",
                    "rateMax": "2.5",
                    "unit": "L/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Incorporate with the combine set to sow to a depth of 3 - 5 cm."
                }
            ]
        },
        {
            "crop": "Cotton (including Roundup Ready)",
            cropList: ["Cotton"],
            "weeds": [
                {
                    "weed": "Broadleaf weeds and Grasses",
                    pestList: ["Broadleaf Weeds And Grasses"],
                    "rate": "2.25",
                    "rateMax": "3.4",
                    "unit": "L/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Pre-plant double incorporation or directed post-emergence spray."
                }
            ]
        },
        {
            "crop": "Carrots, Parsnips, Onions, Garlic, Leeks",
            cropList: ["Carrots","Parsnips","Onions","Garlic","Leeks"],
            "weeds": [
                {
                    "weed": "Wireweed, Wild radish, Sowthistle",
                    pestList: ["Wireweed","Wild Radish","Sowthistle"],
                    "rate": "0.56",
                    "rateMax": "3.0",
                    "unit": "L/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Rates and timing depend on crop and soil type (see label for details)."
                }
            ]
        },
        {
            "crop": "Sugarcane",
            cropList: ["Sugarcane"],
            "weeds": [
                {
                    "weed": "Summer grass, Barnyard grass, Crowsfoot grass",
                    pestList: ["Summer Grass","Barnyard Grass","Crowsfoot Grass"],
                    "rate": "2.25",
                    "rateMax": "3.4",
                    "unit": "L/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Apply as soon as possible after planting and before weed emergence."
                }
            ]
        },
        {
            "crop": "Combine and pasture sod sown rice",
            cropList: ["Combine And Pasture Sod Sown Rice"],
            "weeds": [
                {
                    "weed": "Barnyard grass, Silvertop grass, Sedges",
                    pestList: ["Barnyard Grass","Silvertop Grass","Sedges"],
                    "rate": "2.25",
                    "rateMax": "3.4",
                    "unit": "L/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Apply up to the 3 leaf stage of barnyard grass, before rice emergence."
                }
            ]
        },
        {
            "crop": "Avocados, Bananas, Citrus, Grapevines, Nuts, Pome/Stone Fruit",
            cropList: ["Avocados","Bananas","Citrus","Grapevines","Nuts","Pome/Stone Fruit"],
            "weeds": [
                {
                    "weed": "Annual ryegrass, Crowsfoot, Barnyard grass",
                    pestList: ["Annual Ryegrass","Crowsfoot","Barnyard Grass"],
                    "rate": "6.75",
                    "rateMax": "9",
                    "unit": "L/ha",
                    "states": [
                        "All"
                    ],
                    "note": "Use a directed spray avoiding spray contact with green bark, fruit and foliage."
                }
            ]
        }
    ],
    "note": "Weed Resistance Warning: Group 3 Herbicide. Follow incorporation instructions strictly.",
    "labelPdf": "Source labels/Nufarm_Pendimethalin440_Label.pdf",
  "sdsPdf": "SDS Labels/NUFARM_PENDIMETHALIN_440_HERBICIDE.pdf",
    "signalHeading": "Caution",
    "apvma": "54599",
        "classification": {
        "type": "Herbicide",
        "target": ["Annual Grasses","Certain Broadleaf Weeds"],
        "timing": ["Pre-emergent","Pre-plant incorporated"]
    },
    "restraints": [
        "DO NOT sow sensitive summer crops such as sorghum and millets within 12 months.",
        "DO NOT apply Nufarm Pendimethalin 440 where waterlogging is likely to occur.",
        "DO NOT use mixed with atrazine on heavy clay soils."
    ],
    "withholding": {
        "harvest": "NOT REQUIRED WHEN USED AS DIRECTED",
        "grazing": "NOT REQUIRED WHEN USED AS DIRECTED. Harvest: NOT REQUIRED WHEN USED AS DIRECTED"
    },
    "compatibility": {
        "compatible": [],
        "incompatible": [],
        "notes": ["Compatible with a range of herbicides including simazine, atrazine, propanil, and paraquat."]
    },
    "surfactant": "Usually not required unless specified in a tank mix.",
    "sprayerCleanup": "Thoroughly flush all spray equipment with clean water."
};
