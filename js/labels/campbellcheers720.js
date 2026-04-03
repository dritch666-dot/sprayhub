// ─────────────────────────────────────────────────────────────────────────────
// CHEERS 720 WEATHERSHIELD FUNGICIDE — Label Data
// Liquid | Group M5 Fungicide
// Source: Colin_Campbell_chemicals_Campbell_Cheers_720_Weathershield_Fungicide_Label.pdf
// APVMA Approval No: 63122
// Colin Campbell (Chemicals) Pty Ltd
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['campbellcheers720'] = {
  name:             "CHEERS 720 WEATHERSHIELD Fungicide",
  company: "Campbell",

  category:         "Fungicides",
  activeIngredient: "720 g/L Chlorothalonil",
  group:            "Group M5 Fungicide",
  modeOfAction:     "Multi-site protectant fungicide for broad-spectrum disease control",
  formulation:      "Liquid Concentrate",
  color:            "#9333ea",
  apvma:            "63122",
  labelPdf:         "Source labels/Colin_Campbell_chemicals_Campbell_Cheers_720_Weathershield_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/CAMPBELL_CHEERS_720_WEATHERSHIELD_FUNGICIDE.pdf",
  signalHeading:    "Poison",
  classification: {
    type: "Fungicide",
    target: ["Leaf spot", "Blight", "Mildew", "Rot", "Rust"],
    timing: ["7-14 day intervals"]
  },

  crops: [
    {
      crop: "Artichokes (Globe) — Grey mould control",
      cropList: ["Artichokes", "Globe Artichokes"],
      weeds: [
        { weed: "Grey mould (Botrytis cinerea)", pestList: ["Grey Mould"], states: ["All"], rate: "1.8", rateMax: "2.3", unit: "L/ha", stage: "As required", note: "Apply at 7-10 day intervals as required. Use the higher rate if disease pressure is high." }
      ]
    },
    {
      crop: "Bananas — Leaf spot and leaf speckle control",
      cropList: ["Bananas"],
      weeds: [
        { weed: "Leaf spot (Mycosphaerella musicola)", pestList: ["Leaf Spot"], states: ["Qld", "NSW", "NT"], rate: "1.8", rateMax: "1.8", unit: "L/ha", stage: "Spray schedules based on region", note: "Nth. Qld: Spray every 14 days late January to end of March. Extend to 21 days after March and then 28 to 35 days in the drier months of the year. Sth. Qld: Spray every 21 days from start of December to end of April. NSW: Spray every 21 days from end of November to end of May." },
        { weed: "Leaf spot (Mycosphaerella musicola) — WA", pestList: ["Leaf Spot"], states: ["WA"], rate: "1.5", rateMax: "1.5", unit: "L/ha", stage: "Spray schedules based on region", note: "WA: Spray every 10 to 14 days from November to end of May and extend to 14 to 21 days from May to November." },
        { weed: "Leaf Speckle (Mycosphaerella musae)", pestList: ["Leaf Speckle"], states: ["Qld", "NSW", "WA", "NT"], rate: "3", rateMax: "3", unit: "L/ha", stage: "As required", note: "Spray schedule same as for control of Leaf Spot. Cheers will not eradicate infection already present but will prevent the spread of disease." }
      ]
    },
    {
      crop: "Broccoli, Brussels Sprouts — Ring Spot control",
      cropList: ["Broccoli", "Brussels Sprouts"],
      weeds: [
        { weed: "Ring Spot (Mycosphaerella brassicola)", pestList: ["Ring Spot"], states: ["All"], rate: "1.8", rateMax: "3.5", unit: "L/ha", stage: "As conditions favour", note: "Make the first application as soon as conditions favour development of the disease. Repeat at 14 day intervals. Use higher rate if disease pressure is high." }
      ]
    },
    {
      crop: "Capsicums, Peppers — Grey mould and Anthracnose control",
      cropList: ["Capsicums", "Capsicum", "Peppers"],
      weeds: [
        { weed: "Grey mould (Botrytis cinerea), Anthracnose (Colletotrichum acutatum)", pestList: ["Grey Mould", "Anthracnose"], states: ["All"], rate: "1.8", rateMax: "2.3", unit: "L/ha", stage: "As required", note: "Apply at 7 to 10 day intervals as required. Use the higher rate if the disease pressure is high." }
      ]
    },
    {
      crop: "Cabbages, Cauliflowers — Ring Spot control",
      cropList: ["Cabbages", "Cauliflowers"],
      weeds: [
        { weed: "Ring Spot (Mycosphaerella brassicola)", pestList: ["Ring Spot"], states: ["All"], rate: "1.8", rateMax: "3.5", unit: "L/ha", stage: "As conditions favour", note: "Make the first application as soon as conditions favour development of the disease. Repeat at 14 day intervals. Use higher rate if disease pressure is high." }
      ]
    },
    {
      crop: "Carrots — Leaf Blight control",
      cropList: ["Carrots"],
      weeds: [
        { weed: "Leaf Blight (Alternaria dauci)", pestList: ["Leaf Blight"], states: ["All"], rate: "1.8", rateMax: "1.8", unit: "L/ha", stage: "As conditions favour", note: "Commence application as soon as conditions favour development of the disease and then apply every 7 to 14 days." }
      ]
    },
    {
      crop: "Celery — Septoria leaf spot and Cercospora early blight control",
      cropList: ["Celery"],
      weeds: [
        { weed: "Septoria leaf Spot (Septoria apiicola)", pestList: ["Septoria Leaf Spot"], states: ["All"], rate: "1.8", rateMax: "1.8", unit: "L/ha", stage: "As required", note: "Apply every 7 to 14 days. Apply also to seedbeds." },
        { weed: "Cercospora Early Blight (Cercospora apii)", pestList: ["Cercospora Early Blight"], states: ["NSW", "WA"], rate: "1.2", rateMax: "1.2", unit: "L/ha", stage: "As required", note: "Apply every 10 to 14 days." }
      ]
    },
    {
      crop: "Cucurbits — Multiple disease control",
      cropList: ["Cucurbits", "Cantaloupe", "Cucumbers", "Honeydew", "Muskmelon", "Pumpkin", "Squash", "Rockmelon", "Watermelon", "Zucchini"],
      weeds: [
        { weed: "Downy Mildew (Pseudoperonospora cubensis), Gummy Stem Blight (Didymella bryoniae), Anthracnose (Colletotrichum orbiculare), Leaf Blight (Alternaria cucumerina), Target Leaf Spot (Cercospora citrullina)", pestList: ["Downy Mildew", "Gummy Stem Blight", "Anthracnose", "Leaf Blight", "Target Leaf Spot"], states: ["All"], rate: "1.6", rateMax: "2.5", unit: "L/ha", stage: "At first true leaf", note: "Apply on a 7 to 14 day schedule. Apply rates towards the higher end of the recommended range and at 7 day intervals when disease pressure is high. Commence spray programme early, at first true leaf and before vining or flowering. When used at these rates, Cheers will suppress Powdery Mildew." },
        { weed: "Belly Rot (Rhizoctonia solani)", pestList: ["Belly Rot"], states: ["All"], rate: "1.6", rateMax: "2.5", unit: "L/ha", stage: "As required", note: "If applying Cheers for the above foliar diseases, useful suppression of Belly Rot will be obtained where fruit form on soil covered by earlier recent Cheers spraying." }
      ]
    },
    {
      crop: "Endive — Grey mould control",
      cropList: ["Endive"],
      weeds: [
        { weed: "Grey mould (Botrytis cinerea)", pestList: ["Grey Mould"], states: ["All"], rate: "1.8", rateMax: "2.3", unit: "L/ha", stage: "As required", note: "Apply at 7 to 10 day intervals as required. Use the higher rate if the disease pressure is high." }
      ]
    },
    {
      crop: "Leeks, Shallots — Purple Blotch control",
      cropList: ["Leeks", "Shallots"],
      weeds: [
        { weed: "Purple Blotch (Alternaria porri)", pestList: ["Purple Blotch"], states: ["All"], rate: "1.8", rateMax: "2.3", unit: "L/ha", stage: "As conditions favour", note: "Make the first application as soon as conditions favour development of the disease. Repeat at 7 to 10 day intervals, particularly during wet weather." }
      ]
    },
    {
      crop: "Okra — Leaf Disease/Spot control",
      cropList: ["Okra"],
      weeds: [
        { weed: "Leaf Disease/Spot", pestList: ["Leaf Disease", "Leaf Spot"], states: ["Qld", "WA"], rate: "1.8", rateMax: "2.3", unit: "L/ha", stage: "As conditions favour", note: "Make the first application as soon as conditions favour development of the disease. Repeat at 7 to 10 day intervals." }
      ]
    },
    {
      crop: "Onions (excluding spring onions) — Downy Mildew control",
      cropList: ["Onions"],
      weeds: [
        { weed: "Downy Mildew (Peronospora destructor)", pestList: ["Downy Mildew"], states: ["All"], rate: "2.3", rateMax: "2.3", unit: "L/ha", stage: "As conditions favour", note: "Make the first application as soon as conditions favour development of the disease. Repeat at 14 day intervals." }
      ]
    },
    {
      crop: "Potatoes — Early and late blight control",
      cropList: ["Potatoes"],
      weeds: [
        { weed: "Early Blight or Target Spot (Alternaria solani), Late Blight or Irish Blight (Phytophthora infestans)", pestList: ["Early Blight", "Late Blight", "Target Spot"], states: ["All"], rate: "1.1", rateMax: "1.8", unit: "L/ha", stage: "At flowering", note: "Commence application at flowering time or earlier if weather conditions are favourable for disease infection. Spray every 7 to 14 days until within 14 days of dessication." }
      ]
    },
    {
      crop: "Radish — Grey mould control",
      cropList: ["Radish"],
      weeds: [
        { weed: "Grey mould (Botrytis cinerea)", pestList: ["Grey Mould"], states: ["All"], rate: "1.8", rateMax: "2.3", unit: "L/ha", stage: "As required", note: "Apply at 7 to 10 day intervals as required. Use the higher rate if the disease pressure is high." }
      ]
    },
    {
      crop: "Rhubarb — Ascochyta Leaf Blight control",
      cropList: ["Rhubarb"],
      weeds: [
        { weed: "Ascochyta Leaf Blight (Ascochyta rhei)", pestList: ["Ascochyta Leaf Blight"], states: ["All"], rate: "140", rateMax: "140", unit: "mL/100L", stage: "As required", note: "Apply every 10 to 14 days. Ensure even coverage." }
      ]
    },
    {
      crop: "Sweet Corn — Turcicum Leaf Blight control",
      cropList: ["Sweet Corn"],
      weeds: [
        { weed: "Turcicum Leaf Blight (Exserohilum turcicum)", pestList: ["Turcicum Leaf Blight"], states: ["All"], rate: "1.8", rateMax: "2.3", unit: "L/ha", stage: "As conditions favour", note: "Make the first application as soon as conditions favour development of the disease. Repeat at 7 to 10 day intervals." }
      ]
    },
    {
      crop: "Tomatoes — Multiple disease control",
      cropList: ["Tomatoes"],
      weeds: [
        { weed: "Early Blight or Target Spot (Alternaria solani), Leaf Mould (Fulvia fulva), Grey Leaf Spot (Stemphyllium solani), Botrytis Rot or Grey Mould (Botrytis cinerea)", pestList: ["Early Blight", "Target Spot", "Leaf Mould", "Grey Leaf Spot", "Botrytis Rot", "Grey Mould"], states: ["All"], rate: "1.8", rateMax: "2.3", unit: "L/ha", stage: "As conditions favour", note: "Make the first application as soon as conditions favour development of the disease. Spray at 7 to 14 day intervals. Continue into the picking season to obtain best results against Leaf Mould and Botrytis Rot." }
      ]
    },
    {
      crop: "Water Cress — Cercospora Leaf Spot control",
      cropList: ["Water Cress", "Watercress"],
      weeds: [
        { weed: "Cercospora Leaf Spot", pestList: ["Cercospora Leaf Spot"], states: ["Qld", "WA"], rate: "1.8", rateMax: "2.3", unit: "L/ha", stage: "As required", note: "Apply at 7 to 10 day intervals as required. Use the higher rate if the disease pressure is high." }
      ]
    },
    {
      crop: "Broad Beans, Faba Beans — Chocolate Spot and Rust control",
      cropList: ["Broad Beans", "Faba Beans"],
      weeds: [
        { weed: "Chocolate Spot (Botrytis fabae), Rust (Uromyces viciae-fabae)", pestList: ["Chocolate Spot", "Rust"], states: ["All"], rate: "1.4", rateMax: "2.3", unit: "L/ha", stage: "As conditions favour", note: "Make the first application as soon as conditions favour development of the disease. Repeat at 7 to 14 day intervals. Use higher rate if the crop is dense and disease pressure is high." }
      ]
    },
    {
      crop: "Peanuts — Leaf spot and rust control",
      cropList: ["Peanuts"],
      weeds: [
        { weed: "Early Leaf Spot (Cercospora arachidicola), Late Leaf Spot (Cercosporidium personatum), Peppery Leaf Spot (Leptosphaerulina trifolii), Peanut Rust (Puccinia arachidis), Net Blotch (Didymosphaeria arachidicola)", pestList: ["Early Leaf Spot", "Late Leaf Spot", "Peppery Leaf Spot", "Peanut Rust", "Net Blotch"], states: ["Qld", "NSW", "WA", "NT"], rate: "1.1", rateMax: "1.8", unit: "L/ha", stage: "As conditions favour", note: "Use higher rate for Peanut Rust. South Burnett, NSW, WA: Commence application as soon as conditions favour the development of the disease and repeat as necessary to maintain control. Atherton Tableland: Commence application 6 weeks after planting and repeat every 2 weeks." }
      ]
    },
    {
      crop: "Peas — Downy Mildew control",
      cropList: ["Peas"],
      weeds: [
        { weed: "Downy Mildew (Peronospora viciae)", pestList: ["Downy Mildew"], states: ["Qld", "Tas", "WA", "NT"], rate: "1.1", rateMax: "1.8", unit: "L/ha", stage: "As conditions favour", note: "Make the first application as soon as conditions favour development of the disease. Repeat at 7 to 14 day intervals. Use the higher rate if crop is dense and disease pressure is high." }
      ]
    },
    {
      crop: "Ornamentals — Multiple disease control",
      cropList: ["Ornamentals"],
      weeds: [
        { weed: "Botrytis, Grey Mould, Rust diseases, Septoria, Alternaria Leaf Spot diseases", pestList: ["Botrytis", "Grey Mould", "Rust", "Septoria", "Alternaria Leaf Spot"], states: ["All"], rate: "100", rateMax: "100", unit: "mL/100L", stage: "As required", note: "Apply at 7 to 14 day intervals. Use every 7 days under severe conditions. Avoid application to blooms in Azalea, Hydrangea and Petunia." }
      ]
    },
    {
      crop: "Tobacco — Tobacco Leaf Spot control",
      cropList: ["Tobacco"],
      weeds: [
        { weed: "Tobacco Leaf Spot (Ascochyta arida)", pestList: ["Tobacco Leaf Spot"], states: ["Qld", "WA"], rate: "220", rateMax: "220", unit: "mL/100L", stage: "Seedbed application", note: "Apply every 7 days in seedbed application only." }
      ]
    },
    {
      crop: "Almonds — Shot-hole and Rust control",
      cropList: ["Almonds"],
      weeds: [
        { weed: "Shot-hole (Stigmina carpophila), Stone Fruit Rust (Tranzschella discolor)", pestList: ["Shot Hole", "Stone Fruit Rust"], states: ["NSW", "Vic", "Tas", "SA"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell through season", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell, budburst, pink bud, shuckfall, capfall. Apply every 10 to 14 days. Apply 1 week pre-harvest." }
      ]
    },
    {
      crop: "Apricots — Brown rot, blossom blight, shot-hole and rust control",
      cropList: ["Apricots"],
      weeds: [
        { weed: "Brown Rot (Monolinia fructicola), Blossom Blight (Monolinia laxa)", pestList: ["Brown Rot", "Blossom Blight"], states: ["NSW", "Vic", "Tas", "SA"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell to full bloom", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell, budburst, pink bud, full bloom. Application later than 35 days prior to harvest may result in unacceptable fruit skin damage. See also additional Restraints for stone fruit." },
        { weed: "Shot-hole (Stigmina carpophila), Stone Fruit Rust (Tranzschella discolor), Freckle (Venturia carpophila)", pestList: ["Shot Hole", "Stone Fruit Rust", "Freckle"], states: ["NSW", "Vic", "Tas", "SA"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell through season", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell, budburst, pink bud, shuckfall, capfall, then every 10 to 14 days. Application later than 35 days prior to harvest may result in unacceptable fruit skin damage. See also additional Restraints for stone fruit." }
      ]
    },
    {
      crop: "Cherries — Brown rot, blossom blight, shot-hole, rust and transit rot control",
      cropList: ["Cherries"],
      weeds: [
        { weed: "Brown Rot (Monolinia fructicola), Blossom Blight (Monolinia laxa)", pestList: ["Brown Rot", "Blossom Blight"], states: ["All"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell to full bloom", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell, budburst, pink bud, early blossom, full bloom. Apply 3 weeks pre-harvest and 1 week pre-harvest." },
        { weed: "Shot-hole (Stigmina carpophila), Stone Fruit Rust (Tranzschella discolor)", pestList: ["Shot Hole", "Stone Fruit Rust"], states: ["All"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell through season", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell, budburst, pink bud, shuckfall, capfall, then every 10 to 14 days. Apply 1 week pre-harvest." },
        { weed: "Transit Rot (Rhizopus stonifer)", pestList: ["Transit Rot"], states: ["All"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Pre-harvest", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply 1 week pre-harvest." }
      ]
    },
    {
      crop: "Grapes — Downy mildew, bunch rot and black spot control",
      cropList: ["Grapes", "Table Grapes", "Wine Grapes"],
      weeds: [
        { weed: "Downy Mildew (Plasmopara viticola), Bunch Rot (Botrytis cinerea)", pestList: ["Downy Mildew", "Bunch Rot"], states: ["All"], rate: "160", rateMax: "210", unit: "mL/100L", stage: "As conditions favour", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Make the first application as soon as conditions favour the development of the disease. Apply at 7 to 14 day intervals particularly during wet weather and periods of rapid growth. Bunch Rot: Apply at early full bloom, 2 weeks later, at veraison and 2 weeks prior to harvest. Table Grapes: Russeting of some varieties may occur. Use only up to capfall in these varieties." },
        { weed: "Black Spot (Anthracnose) (Elsinoe ampelina)", pestList: ["Black Spot", "Anthracnose"], states: ["All"], rate: "210", rateMax: "210", unit: "mL/100L", stage: "At budburst if history of infection", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. If Black Spot has occurred in the vineyard in any of the last 3 years, apply at budburst and 14 days later when shoots are 10 to 15 cm long. If wet/humid conditions persist, spray again when shoots are 20 to 30 cm long to protect new growth. Some initial minimal leaf damage on the new shoots of sensitive varieties can occur if spray treatments are applied at budburst and in the first 14 days after budburst. In vineyards with no history of Black Spot, make the first application as soon as conditions favour the development of the disease on the foliage and then at 7 to 14 day intervals if wet/humid conditions persist. Applications up to capfall will not cause russeting in table grape and dried fruit varieties." }
      ]
    },
    {
      crop: "Nectarines — Shot-hole, brown rot and blossom blight control",
      cropList: ["Nectarines"],
      weeds: [
        { weed: "Shot-hole (Stigmina carpophila)", pestList: ["Shot Hole"], states: ["NSW", "Vic", "Tas", "SA", "WA"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell through season", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell, pink bud, shuckfall and then repeat every 14 days if weather conditions favour disease. Application later than 35 days prior to harvest may result in unacceptable fruit skin damage. See also additional Restraints for stone fruit." },
        { weed: "Brown Rot (Monolinia fructicola), Blossom Blight (Monolinia laxa)", pestList: ["Brown Rot", "Blossom Blight"], states: ["All"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell to full bloom", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell, budburst, pink bud, early blossom and full bloom. Application later than 35 days prior to harvest may result in unacceptable fruit skin damage." }
      ]
    },
    {
      crop: "Peaches — Brown rot, blossom blight, shot-hole, rust and leaf curl control",
      cropList: ["Peaches"],
      weeds: [
        { weed: "Brown Rot (Monolinia fructicola), Blossom Blight (Monolinia laxa)", pestList: ["Brown Rot", "Blossom Blight"], states: ["All"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell to full bloom", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell, pinkbud, early blossom and full bloom. See also additional Restraints for stone fruit." },
        { weed: "Shot-hole (Stigmina carpophila), Stone Fruit Rust (Tranzschella discolor)", pestList: ["Shot Hole", "Stone Fruit Rust"], states: ["All"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell through season", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell and continue at 7 to 14 day intervals." },
        { weed: "Leaf Curl (Taphrina deformans)", pestList: ["Leaf Curl"], states: ["All"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell and continue at 7 to 14 day intervals. Qld: Spray only at budswell." }
      ]
    },
    {
      crop: "Plums — Brown rot, blossom blight, shot-hole and rust control",
      cropList: ["Plums"],
      weeds: [
        { weed: "Brown Rot (Monolinia fructicola), Blossom Blight (Monolinia laxa)", pestList: ["Brown Rot", "Blossom Blight"], states: ["All"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell to full bloom", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell, budburst, pink bud, early blossom and full bloom." },
        { weed: "Shot-hole (Stigmina carpophila), Stone Fruit Rust (Tranzschella discolor)", pestList: ["Shot Hole", "Stone Fruit Rust"], states: ["All"], rate: "160", rateMax: "160", unit: "mL/100L", stage: "Budswell through season", note: "Apply by dilute or concentrate spraying equipment. Apply the same amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Apply at budswell, budburst, pink bud, shuckfall and capfall." }
      ]
    },
    {
      crop: "Mango",
      cropList: ["Mango"],
      weeds: [
        { weed: "Anthracnose", pestList: ["Anthracnose"], states: ["All"], rate: "160", rateMax: "210", unit: "mL/100L", note: "Target spray applications during bud burst to late flowering only. Do not apply with oils. No more than 4 applications per year. Do not apply on fruit." },
        { weed: "Queensland Fruit Fly", pestList: ["Queensland Fruit Fly"], states: ["All"], rate: "100", unit: "mL/100L", note: "WHP: 7 days. No more than 3 applications per season. Apply after flowering." },
        { weed: "Mango seed weevil", pestList: ["Mango Seed Weevil"], states: ["All"], rate: "40", rateMax: "60", unit: "mL/tree", note: "WHP: 16 weeks. Irrigate in after application. Apply immediately after flowering." }
      ]
    },
    {
      crop: "Papaya",
      cropList: ["Papaya"],
      weeds: [
        { weed: "Black spot and Brown spot", pestList: ["Black Spot", "Brown Spot"], states: ["All"], rate: "1.8", rateMax: "2.3", unit: "L/ha", note: "WHP: 3 days. Do not apply with oils." }
      ]
    }
  ],

  restraints: [
    "DO NOT mix spraying oils or wetting agents with Cheers WeatherShield",
    "For all stone fruit except Cherries: DO NOT use oils after budswell and during the season if Cheers WeatherShield is to be used after shuckfall",
    "DO NOT tank mix Cheers WeatherShield with EC formulations when spraying after shuckfall"
  ],

  compatibility: {
    compatible:   ["Wettable powder formulations of the most commonly used fungicides, insecticides and miticides"],
    incompatible: ["Oil-based emulsifiable or flowable pesticides"],
    notes:        ["This product should not be mixed with spraying oils or sprayed on to crops that have been sprayed with oil for at least 10 days after the oil spray. Oils should not be sprayed on crops treated with this product for at least 10 days after the last spray. Wetting agents have not improved performance. Under some conditions, certain surfactants can cause plant injury."]
  },

  withholding: {
    harvest: "Artichoke, Bananas, Capsicum, Celery, Cucurbits, Endive, Leek, Okra, Peppers, Plums, Radish, Shallot, Sweet Corn, Tomatoes, Watercress: 1 day; Apricots, Beans, Broccoli, Brussels Sprouts, Cabbage, Carrots, Cauliflowers, Cherries, Nectarines, Peaches, Peas, Rhubarb, Table Grapes: 7 days; Onions, Wine Grapes: 14 days; Almond, Potatoes, Peanuts, Tobacco: Not required when used as directed",
    grazing: "Beans, Peanuts, Peas: Do not graze livestock on treated crops"
  },

  surfactant:     "Cheers is a protectant fungicide only. Cheers must be applied before diseases occur/become established to be highly effective. Use disease warning services or past history to determine timing of first spray. If diseases are already present, then an eradicant product should be used first and mixed with Cheers.",
  sprayerCleanup: "Invert container several times to ensure uniform mixture. Mix the required quantity of product with water in the spray tank with the agitator operating."
};
