// js/labels/reactor.js
productDatabase.reactor = {
  "id": "reactor",
  "name": "PCT REACTOR SURFACTANT 700",
  "company": "PCT",
  "active": "350 g/L SOYAL PHOSPHOLIPIDS, 350 g/L PROPIONIC ACID",
  "group": "adjuvants",
  "formulation": "Liquid surfactant blend",
  "modeOfAction": "Spray adjuvant — enhances spray deposition and uptake",
  "category": "Adjuvants / Surfactants",
  "signalHeading": "CAUTION",
  "apvma": "60791",
  "classification": {
      "type": "Adjuvant",
      "target": [],
      "timing": []
  },
  "labelPdf": "Source labels/Pct_Holdings_Pct_Reactor_Surfactant_700_Label.pdf",
    "sdsPdf": "SDS Labels/PCT_Reactor_Surfactant_700.pdf",
  "crops": [
    {
      "crop": "Addition to herbicides to improve spreading and penetration.",
      cropList: ["Addition To Herbicides To Improve Spreading And Penetration."],
      "weeds": [
        {
          "weed": "Glyphosate, 2,4-D, MCPA, Metsulfuron-methyl",
          pestList: ["Glyphosate","4-D","MCPA","Metsulfuron-Methyl"],
          "states": ["All"],
          "rate": 250,
          "rateMax": 500,
          "unit": "mL/100L",
          note: "Use high rate on stressed or difficult to control weeds."
        }
      ]
    },
    {
      "crop": "Reduction of pH to reduce alkaline hydrolysis.",
      cropList: ["Reduction Of PH To Reduce Alkaline Hydrolysis."],
      "weeds": [
        {
          "weed": "Dimethoate",
          pestList: ["Dimethoate"],
          "states": ["All"],
          "rate": 100,
          "rateMax": 100,
          "unit": "mL/100L",
          note: "Add to water in spray tank before adding Dimethoate."
        }
      ]
    },
    {
      "crop": "To improve uptake of foliar fertilizers",
      cropList: ["To Improve Uptake Of Foliar Fertilizers"],
      "weeds": [
        {
          "weed": "Foliar fertilizers",
          "pestList": [],
          "states": ["All"],
          "rate": 300,
          "rateMax": 500,
          "unit": "mL/100L",
          note: "Tank mixing with other agricultural chemicals may increase the potential for crop damage; check with supplier."
        }
      ]
    },
    {
      "crop": "Assistance in droplet size management to partially reduce the number of fine droplets produced from hydraulic nozzles by air and ground.",
      cropList: ["Assistance In Droplet Size Management To Partially Reduce The Number Of Fine Droplets Produced From Hydraulic Nozzles By Air And Ground."],
      "weeds": [
        {
          "weed": "Spray oils and surfactants",
          pestList: ["Spray Oils","Surfactants"],
          "pestList": [],
          "states": ["All"],
          "rate": 300,
          "rateMax": 500,
          "unit": "mL/100L",
          note: "Helps reduce fine droplets but does not eliminate off-target movement. Good spraying practice and nozzle choice are critical. Refer to PCT representative for advice."
        }
      ]
    }
  ],
  "restraints": [
    "DO NOT use with copper products."
  ],
  "withholding": "",
  "compatibility": "Do not use with copper products.",
  "surfactant": "",
  "sprayerCleanup": ""
};
