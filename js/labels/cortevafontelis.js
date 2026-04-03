// ─────────────────────────────────────────────────────────────────────────────
// FONTELIS FUNGICIDE — Label Data
// Suspension Concentrate | Group 7 Fungicide
// Source: Corteva_Agriscience_Fontelis_Fungicide_Label.pdf
// APVMA Approval No: 65510/133739
// Corteva Agriscience
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['cortevafontelis'] = {
  name:             "Fontelis Fungicide",
  company: "Corteva",

  category:         "Fungicides",
  activeIngredient: "200 g/L Penthiopyrad",
  group:            "Group 7 Fungicide",
  modeOfAction:     "SDHI fungicide for control of fungal diseases in fruit, nut and vegetable crops",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#0f766e",
  apvma:            "65510",
  labelPdf:         "Source labels/Corteva_Agriscience_Fontelis_Fungicide_Label.pdf",
  sdsPdf:           "SDS Labels/FONTELIS_.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Apple black spot", "Powdery mildew", "Brown rot", "Botrytis", "Scab"],
    timing: ["Early season", "Protectant spray program"]
  },

  crops: [
    {
      crop: "Pome fruit (Apples, Nashi pears, Pears) — Dilute spraying",
      cropList: ["Pome Fruit","Apples","Nashi Pears","Pears","Dilute Spraying"],
      weeds: [
        { weed: "Apple black spot (Venturia inaequalis), Apple powdery mildew (Podosphaera leucotricha), Pear scab (Venturia pirina), Alternaria leaf blotch and Alternaria fruit spot of apples (Alternaria spp.) (Suppression only)", pestList: ["Apple Black Spot","Apple Powdery Mildew","Pear Scab","Alternaria Leaf Blotch","Alternaria Fruit Spot"], states: ["All"], rate: "75", rateMax: "75", unit: "mL/100L", stage: "Protectant program prior to disease development", note: "Protectant program: Begin applications prior to disease development and continue on a seven (7) to twenty-one (21) day interval depending on the targeted diseases. Application interval for Apple black spot (Scab) and Pear scab is seven (7) to ten (10) days. Application interval for Powdery mildew is fourteen (14) to twenty-one (21) days. Application intervals for Alternaria leaf blotch and Alternaria fruit spot are ten (10) to fourteen (14) days. Application for control of this disease should begin after blossom and during early fruit development to prevent establishment of the disease on the leaves. Use the shorter spray interval when weather conditions favour disease development. Apply by dilute or concentrate spraying equipment. Apply the same total amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Thorough fruit coverage is essential. DO NOT use a concentration factor greater than 3X, for concentrate application. Use in accordance with CropLife Fungicide Resistance Management Strategy guidelines - see Resistance Management Strategy, General Instructions section. WHP: 28 days." }
      ]
    },
    {
      crop: "Strawberry — Dilute spraying",
      cropList: ["Strawberry","Dilute Spraying"],
      weeds: [
        { weed: "Grey mold (Botrytis cinerea), Powdery mildew (Sphaerotheca spp.)", pestList: ["Grey Mould","Powdery Mildew"], states: ["All"], rate: "175", rateMax: "175", unit: "mL/100L", stage: "Prior to disease development", note: "Begin applications prior to disease development and continue on a seven (7) to ten (10) day interval. Use shorter spray interval when disease pressure is high. Maximum seasonal use rate is 5.25 L/ha. WHP: Nil." }
      ]
    },
    {
      crop: "Stone fruits (Apricots, Cherries, Nectarines, Peaches, Plums, Prunes) — Dilute spraying",
      cropList: ["Stone Fruits","Apricots","Cherries","Nectarines","Peaches","Plums","Prunes","Dilute Spraying"],
      weeds: [
        { weed: "Brown rot (Blossom blight) (Monilinia spp.), Scab (Freckle) (Cladosporium carpophilum, Venturia carpophila)", pestList: ["Brown Rot Blossom Blight","Scab/Freckle"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/100L", stage: "Prior to disease development", note: "Begin applications prior to disease development and continue on a seven (7) to fourteen (14) day interval. Use shorter spray interval when disease pressure is high. Apply by dilute or concentrate spraying equipment. Apply the same total amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Thorough fruit coverage is essential. DO NOT use a concentration factor greater than 3X, for concentrate application. Use in accordance with CropLife Fungicide Resistance Management Strategy guidelines - see Resistance Management Strategy, General Instructions section." }
      ]
    },
    {
      crop: "Tree nuts (Almonds, Chestnut, Filbert/Hazelnut) — Dilute spraying",
      cropList: ["Tree Nuts","Almonds","Chestnut","Filbert","Hazelnut","Dilute Spraying"],
      weeds: [
        { weed: "Brown rot (Blossom blight) (Monilinia spp.)", pestList: ["Brown Rot Blossom Blight"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/100L", stage: "Bud break to bloom", note: "Apply by dilute or concentrate spraying equipment. Apply the same total amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. Thorough fruit coverage is essential. DO NOT use a concentration factor greater than 3X, for concentrate application. Use in accordance with CropLife Fungicide Resistance Management Strategy guidelines - see Resistance Management Strategy, General Instructions section. WHP: 14 days." }
      ]
    },
    {
      crop: "Macadamias — Dilute spraying",
      cropList: ["Macadamias","Dilute Spraying"],
      weeds: [
        { weed: "Flower blight (dry flower, raceme blight) (Pestalotiopsis sp., Neopestalotiopsis sp.)", pestList: ["Flower Blight"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/100L", stage: "Bud break", note: "Apply the first application at bud break and the second application fourteen (14) to twenty-one (21) days later when conditions are conducive to disease development, to protect flower formation and retention. Under high disease pressure use the shorter spray interval. Apply sufficient water volume to enable thorough coverage of flower racemes - see Application section." },
        { weed: "Husk spot (Pseudocercospora macadamiae)", pestList: ["Husk Spot"], states: ["All"], rate: "150", rateMax: "150", unit: "mL/100L", stage: "Match head stage", note: "Apply the first application at the match head stage of the crop and apply the second application fourteen (14) to twenty-eight (28) days later when conditions are conducive to disease development. Under high disease pressure use shorter spray intervals. Apply sufficient water volume to enable thorough coverage of flower racemes - see Application section." }
      ]
    },
    {
      crop: "Brassica vegetables (Broccoli, Brussels sprout, Cabbage, Cauliflower)",
      cropList: ["Brassica Vegetables","Broccoli","Brussels Sprout","Cabbage","Cauliflower"],
      weeds: [
        { weed: "White mould (Sclerotinia stem rot) (Sclerotinia spp.)", pestList: ["White Mould"], states: ["All"], rate: "1.75", rateMax: "1.75", unit: "L/ha", stage: "Prior to disease development", note: "Begin applications prior to disease development and continue on a seven (7) to fourteen (14) day interval. Maximum seasonal use rate is 5.25 L/ha. Use shorter spray interval when disease pressure is high. Use in accordance with CropLife Fungicide Resistance Management Strategy guidelines - see Resistance Management Strategy, General Instructions section. WHP: Nil." }
      ]
    },
    {
      crop: "Brassica leafy vegetables (Buk choy, Chinese broccoli, Chinese cabbage, Choy sum, Gai choy, Kai choy, Kale, Mibuna, Leafy mustard, Mustard spinach, Pak choy, Tat soy)",
      cropList: ["Brassica Leafy Vegetables","Buk Choy","Chinese Broccoli","Chinese Cabbage","Choy Sum","Gai Choy","Kai Choy","Kale","Mibuna","Leafy Mustard","Mustard Spinach","Pak Choy","Tat Soy"],
      weeds: [
        { weed: "White mould (Sclerotinia stem rot) (Sclerotinia spp.)", pestList: ["White Mould"], states: ["All"], rate: "1.75", rateMax: "1.75", unit: "L/ha", stage: "Prior to disease development", note: "Begin applications prior to disease development and continue on a seven (7) to fourteen (14) day interval. Maximum seasonal use rate is 5.25 L/ha. Use shorter spray interval when disease pressure is high. Use in accordance with CropLife Fungicide Resistance Management Strategy guidelines - see Resistance Management Strategy, General Instructions section." }
      ]
    },
    {
      crop: "Cucurbit vegetables (field and protected crops) (Bitter melon, Chokos, Cucumber, Gherkin, Marrow, Melons, Pumpkin, Squash, Zucchini)",
      cropList: ["Cucurbit Vegetables","Bitter Melon","Chokos","Cucumber","Gherkin","Marrow","Melons","Pumpkin","Squash","Zucchini"],
      weeds: [
        { weed: "Grey mould (Botrytis cinerea), Powdery mildew (Sphaerotheca fuliginea, Erysiphe cichoracearum)", pestList: ["Grey Mould","Powdery Mildew"], states: ["All"], rate: "1.75", rateMax: "1.75", unit: "L/ha", stage: "Prior to disease development", note: "Begin applications prior to disease development and continue on a seven (7) to fourteen (14) day interval. Use shorter spray interval when disease pressure is high. Maximum seasonal use rate is 3.5 L/ha. Use in accordance with CropLife Fungicide Resistance Management Strategy guidelines - see Resistance Management Strategy, General Instructions section. WHP: 1 day." },
        { weed: "Gummy stem blight (Didymella bryoniae)", pestList: ["Gummy Stem Blight"], states: ["All"], rate: "1.75", rateMax: "1.75", unit: "L/ha", stage: "Prior to disease development", note: "Begin applications prior to disease development and continue on a seven (7) to ten (10) day interval. Use shorter spray interval when disease pressure is high. Use in accordance with CropLife Fungicide Resistance Management Strategy guidelines - see Resistance Management Strategy, General Instructions section. WHP: 1 day." }
      ]
    },
    {
      crop: "Fruiting vegetables (field and protected crops) (Egg plants, Capsicums, Pepper, Chillies, Tomatillo, Tomatoes)",
      cropList: ["Fruiting Vegetables","Egg Plants","Capsicums","Capsicum","Pepper","Chillies","Tomatillo","Tomatoes","Tomato","Eggplant"],
      weeds: [
        { weed: "Early blight (Alternaria solani), Grey mould (Botrytis cinerea), Powdery mildew (Leveillula taurica)", pestList: ["Early Blight","Grey Mould","Powdery Mildew"], states: ["All"], rate: "1.75", rateMax: "1.75", unit: "L/ha", stage: "Prior to disease development", note: "Begin applications prior to disease development and continue on a seven (7) to ten (10) day interval. Use shorter spray interval when disease pressure is high. Maximum seasonal use rate is 5.25 L/ha. Use in accordance with CropLife Fungicide Resistance Management Strategy guidelines - see Resistance Management Strategy, General Instructions section. WHP: Nil." }
      ]
    },
    {
      crop: "Leafy vegetables (Chinese cabbage, Endive, Fennel, Kale, Cress, Lettuce, Mustard, Silverbeet, Spinach)",
      cropList: ["Leafy Vegetables","Chinese Cabbage","Endive","Fennel","Kale","Cress","Lettuce","Mustard","Silverbeet","Spinach"],
      weeds: [
        { weed: "Sclerotina rot (Lettuce drop) (Sclerotinia spp.), Grey mould (Botrytis cinerea), Powdery mildew (Erysiphe cichoracearum)", pestList: ["Sclerotinia Rot","Grey Mould","Powdery Mildew"], states: ["All"], rate: "1.75", rateMax: "1.75", unit: "L/ha", stage: "Prior to disease development", note: "Begin applications prior to disease development and continue on a seven (7) to ten (10) day interval. Use shorter spray interval when disease pressure is high. Maximum seasonal use rate is 5.25 L/ha. Use in accordance with CropLife Fungicide Resistance Management Strategy guidelines - see Resistance Management Strategy, General Instructions section. WHP: 3 days." }
      ]
    },
    {
      crop: "Onions, Shallots, Spring onions",
      cropList: ["Onions","Shallots","Spring Onions"],
      weeds: [
        { weed: "Botrytis blight and Neck rot (Botrytis spp.), Purple blotch (Alternaria porri)", pestList: ["Botrytis Blight","Neck Rot","Purple Blotch"], states: ["All"], rate: "1.75", rateMax: "1.75", unit: "L/ha", stage: "Prior to disease development", note: "Begin applications prior to disease development and continue on a seven (7) to fourteen (14) day interval. Maximum seasonal use rate is 5.25 L/ha. Use shorter spray interval when disease pressure is high. Use in accordance with CropLife Fungicide Resistance Management Strategy guidelines - see Resistance Management Strategy, General Instructions section." }
      ]
    },
    {
      crop: "Root and Tuber vegetables (Beetroot, Carrots, Celeriac, Galangal, Parsnips, Potatoes, Radish, Swedes, Sweet potato, Turnips)",
      cropList: ["Root And Tuber Vegetables","Beetroot","Carrots","Celeriac","Galangal","Parsnips","Potatoes","Potato","Radish","Swedes","Sweet Potato","Turnips"],
      weeds: [
        { weed: "Early blight (Target spot, Leaf spot) (Alternaria spp.), Powdery mildew (Erysiphe spp.)", pestList: ["Early Blight","Target Spot","Leaf Spot","Powdery Mildew"], states: ["All"], rate: "1.75", rateMax: "1.75", unit: "L/ha", stage: "Prior to disease development", note: "Begin applications prior to disease development and continue on a seven (7) to fourteen (14) day interval. Use shorter spray interval when disease pressure is high. Maximum seasonal use rate is 3.5 L/ha. Use in accordance with CropLife Fungicide Resistance Management Strategy guidelines - see Resistance Management Strategy, General Instructions section. WHP: 7 days." }
      ]
    }
  ],

  restraints: [
    "DO NOT apply if rainfall is expected within 1 hour of application",
    "DO NOT use on hydroponic crops",
    "DO NOT apply by air",
    "DO NOT allow bystanders to come into contact with spray cloud",
    "DO NOT apply unless wind speed is between 3-20 km/h",
    "DO NOT apply if hazardous surface temperature inversion conditions exist"
  ],

  compatibility: {
    compatible:   ["Altacor", "Avatar", "Dithane", "Polyram", "Systhane"],
    incompatible: ["Captan (oil sensitive)"],
    notes:        ["Always test tank mix compatibility on small crop area first", "Fontelis contains mineral oil - check oil restrictions on other products"]
  },

  withholding: {
    harvest: "Pome fruit: 28 days. Tree nuts: 14 days. Root and Tuber vegetables: 7 days. Leafy vegetables: 3 days. Cucurbit vegetables: 1 day. Brassica vegetables, Strawberry, Fruiting vegetables: Nil.",
    grazing: "DO NOT graze or cut for stock food"
  },

  surfactant:     "Use of a surfactant/wetting agent is not required.",
  sprayerCleanup: "Immediately following application, thoroughly clean all spray equipment to reduce the risk of forming hardened deposits which might become difficult to remove. Drain spray equipment. Thoroughly rinse sprayer and flush hoses, boom, and nozzles with clean water. DO NOT clean near wells, water sources or desirable vegetation."
};
