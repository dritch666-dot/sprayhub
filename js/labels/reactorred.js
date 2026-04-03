// js/labels/reactorred.js
productDatabase.reactorred = {
  "id": "reactorred",
  "name": "PCT REACTOR RED DYE SPRAY MARKER DYE LIQUID MARKING DYE",
  "company": "PCT",
  "active": "Rhodamine B 150 g/L",
  "group": "Spray Marker Dye",
  "formulation": "Liquid dye concentrate",
  "modeOfAction": "Spray marker dye — visual indicator for spray coverage",
  "category": "Adjuvants / Surfactants",
  "signalHeading": "",
  "apvma": "64663",
  "classification": {
      "type": "Adjuvant",
      "target": [],
      "timing": []
  },
  "labelPdf": "Source labels/PCT_RedDyeMarker_Label.pdf",
    "sdsPdf": "SDS Labels/Reactor_RED_Spray_Marker_Dye.pdf",
  "crops": [
    {
      "crop": "Spray Marking",
      cropList: ["Spray Marking"],
      "weeds": [
        {
          "weed": "To identify sprayed areas",
          pestList: ["To Identify Sprayed Areas"],
          "states": ["All"],
          "rate": "50-100",
          "rateMax": "100",
          "unit": "mL/100L",
          "note": "Use higher rate if more intense colour marking is required."
        }
      ]
    },
    {
      "crop": "Foam marker dye",
      cropList: ["Foam Marker Dye"],
      "weeds": [
        {
          "weed": "Foam marker diluted mixture",
          pestList: ["Foam Marker Diluted Mixture"],
          "states": ["All"],
          "rate": "20-30",
          "rateMax": "30",
          "unit": "mL/10L",
          "note": "Will convert white foam to pink for easier identification in specific situations."
        }
      ]
    }
  ],
  "restraints": "",
  "withholding": "",
  "compatibility": {
    compatible: ["Amine-based herbicides (2,4-D, MCPA 500)"],
    incompatible: [],
    notes: ["Ensure Reactor Red Dye is thoroughly mixed with water before adding the herbicide"]
  },
  "surfactant": "",
  "sprayerCleanup": "Wash out spray equipment thoroughly after use to avoid colouration of subsequent sprays."
};
