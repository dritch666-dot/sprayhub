// js/labels/copit.js
// ─────────────────────────────────────────────────────────
// AGSPEC Cop-IT — Label Data
// Group M1 (Multi-site activity) | Solution
// Source: Agspec_CopIT_Label.pdf
// APVMA Approval No: 63940
// Agspec Australia Pty Ltd (now Azelis Australia Pty Ltd)
// ─────────────────────────────────────────────────────────
productDatabase['copit'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "AGSPEC Cop-IT",
  company: "AgSpec",

  category:         "Fungicides",
  activeIngredient: "93 g/L Copper (Cu) present as Copper Ammonium Acetate Complex",
  group:            "Group M1 Fungicide",
  modeOfAction:     "Multi-site activity — copper-based protectant; disrupts enzyme function in fungal and bacterial cells",
  formulation:      "Solution (SL)",
  color:            "#0d9488",
  apvma:            "63940",
  labelPdf:         "Source labels/Agspec_CopIT_Label.pdf",
  sdsPdf:           "SDS Labels/COP-IT-FUNGICIDE_SDS_2023.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Fungicide",
    target: ["Bacterial Diseases", "Fungal Diseases", "Downy Mildew", "Black Spot", "Leaf Spot", "Anthracnose"],
    timing: ["Preventative", "Foliar"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    // ── VEGETABLES ────────────────────────────────────────────────

    {
      crop: "Beans",
      cropList: ["Beans"],
      weeds: [
        {
          weed: "Common blight (Xanthomonas campestris pv. phaseoli), Bacterial brown spot (Pseudomonas syringae pv. syringae), Chocolate spot (Botrytis spp.), Rust (Uromyces spp.)",
          pestList: ["Bacterial Brown Spot", "Chocolate Spot", "Common Blight", "Rust"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At first sign of infection or as preventative",
          note: "Repeat every 7–14 days depending on disease pressure. Spray immediately after heavy rains, hail or dust storms. Bacterial brown spot: apply within 21 days of emergence, repeat every 10–14 days. Chocolate spot/Rust: spray at first sign of infection, repeat every 10–14 days. Aerial: 2.5 L/ha in 40 L water."
        },
        {
          weed: "Halo blight (Pseudomonas syringae pv. phaseolicola)",
          pestList: ["Halo Blight"],
          states: ["All"],
          rate: "500",
          rateMax: "750",
          unit: "mL/100L",
          stage: "When crop is 15–30 cm high",
          note: "Apply every 10–14 days while conditions allow infection. Use the higher rate when conditions are highly favourable for infection. Aerial: 2.5–2.9 L/ha in 40 L water."
        }
      ]
    },

    {
      crop: "Brassicas (Broccoli, Brussels Sprouts, Cabbage, Cauliflower, Chinese Cabbage, Collards, Kale, Kohlrabi, Mustard, Rape, Turnip)",
      cropList: ["Brassicas", "Broccoli", "Brussels Sprouts", "Cabbage", "Cauliflower", "Chinese Cabbage", "Kale", "Kohlrabi", "Mustard", "Turnip"],
      weeds: [
        {
          weed: "Downy mildew (Peronospora parasitica), Black rot (Xanthomonas campestris pv. campestris), Peppery leaf spot (Pseudomonas syringae pv. maculicola), Ring spot (Mycosphaerella brassicicola)",
          pestList: ["Black Rot", "Downy Mildew", "Peppery Leaf Spot", "Ring Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "From seedling stage until maturity",
          note: "Spray every 10–14 days depending on weather conditions and disease pressure. Do not use on copper sensitive varieties. Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    {
      crop: "Capsicums",
      cropList: ["Capsicum"],
      weeds: [
        {
          weed: "Bacterial spot (Xanthomonas campestris pv. vesicatoria), Bacterial canker (Corynebacterium michiganense pv. michiganense)",
          pestList: ["Bacterial Canker", "Bacterial Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At first sign of disease",
          note: "SEED BEDS: Apply every 7 days during wet weather. FIELD CROPS: Begin spraying at first sign of disease, repeat every 7–14 days depending on weather conditions and disease pressure. Use shortest interval when conditions are highly favourable for infection. These applications will reduce the spread of bacterial canker but will not control seed or soil-borne infection. Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    {
      crop: "Carrots",
      cropList: ["Carrots"],
      weeds: [
        {
          weed: "Leaf spot (Alternaria, Septoria, Cercospora)",
          pestList: ["Leaf Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At first sign of disease",
          note: "Begin spraying at first sign of disease, repeat every 10–14 days depending on weather conditions and disease pressure. Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    {
      crop: "Celery",
      cropList: ["Celery"],
      weeds: [
        {
          weed: "Leaf spot (Septoria apiicola), Bacterial soft rot (Erwinia carotovora pv. carotovora)",
          pestList: ["Bacterial Soft Rot", "Leaf Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "Preventative, during cool wet weather",
          note: "Spray every 7–14 days. Use the shortest interval when weather conditions favour disease (i.e. cool and wet weather). Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    {
      crop: "Cucurbits (Cucumbers, Melons, Pumpkin, Squash, Watermelon, Zucchini)",
      cropList: ["Cucumbers", "Cucurbits", "Melons", "Pumpkin", "Squash", "Watermelon", "Zucchini"],
      weeds: [
        {
          weed: "Downy mildew (Pseudoperonospora cubensis)",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "400",
          rateMax: "400",
          unit: "mL/100L",
          stage: "Early vining stage or when infestation expected; preventative only",
          note: "Only use as a preventative spray. After the disease has established itself, a systemic fungicide must be used. Do not spray when plants are under stress (i.e. hot, dry conditions). Aerial/ULV: 2.5 L/ha."
        },
        {
          weed: "Angular leaf spot (Pseudomonas syringae pv. lachrymans), Bacterial leaf spot (Xanthomonas campestris pv. cucurbitae)",
          pestList: ["Angular Leaf Spot", "Bacterial Leaf Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At first sign of disease",
          note: "Spray at first sign of disease and repeat every 7–10 days."
        }
      ]
    },

    {
      crop: "Lettuce",
      cropList: ["Lettuce"],
      weeds: [
        {
          weed: "Downy mildew (Bremia lactucae), Bacterial leaf spot (Xanthomonas campestris pv. vitians), Anthracnose (Microdochium panattonianum)",
          pestList: ["Anthracnose", "Bacterial Leaf Spot", "Downy Mildew"],
          states: ["All"],
          rate: "300",
          rateMax: "300",
          unit: "mL/100L",
          stage: "At first sign of disease",
          note: "Begin spraying at first sign of disease, repeat every 7–10 days depending on weather conditions and disease pressure. This product predisposes lettuce to frost damage — do not treat if frosts are likely since crop damage may occur. Do not use on copper sensitive varieties. Aerial/ULV: 1 L/ha maximum."
        }
      ]
    },

    {
      crop: "Onions",
      cropList: ["Onions"],
      weeds: [
        {
          weed: "Downy mildew (Peronospora destructor)",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At first sign of disease",
          note: "Begin spraying at first sign of disease, repeat every 10 days depending on weather conditions and disease pressure. Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    {
      crop: "Parsnips",
      cropList: ["Parsnips"],
      weeds: [
        {
          weed: "Leaf spot (Septoria spp.)",
          pestList: ["Leaf Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At first sign of disease",
          note: "Begin spraying at first sign of disease, repeat every 10–14 days depending on weather conditions and disease pressure. Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    {
      crop: "Peas",
      cropList: ["Peas"],
      weeds: [
        {
          weed: "Ascochyta blight (Ascochyta spp.), Bacterial blight (Pseudomonas syringae pv. pisi)",
          pestList: ["Ascochyta Blight", "Bacterial Blight"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At first sign of disease",
          note: "Begin spraying at first sign of disease, repeat every 10–14 days depending on weather conditions and disease pressure. Aerial: 2.5 L/ha in 40 L water in a preventative program."
        }
      ]
    },

    {
      crop: "Potatoes",
      cropList: ["Potatoes"],
      weeds: [
        {
          weed: "Early blight / Target spot (Alternaria solani)",
          pestList: ["Early Blight", "Target Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "From crop emergence to maturity",
          note: "Apply at 7–10 day intervals while conditions favour disease development. Depending on plant size, apply in high enough water volume to ensure good coverage. Ensure both upper and lower surfaces are treated. Aerial/ULV: 2.5 L/ha."
        },
        {
          weed: "Late blight / Irish blight (Phytophthora infestans)",
          pestList: ["Late Blight"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "From crop emergence to maturity",
          note: "Apply 500 mL Cop-IT plus 200 g mancozeb per 100 L water (or 2.5 L/ha plus 1 kg/ha mancozeb). Aerial: 2.5 L/ha in 40 L water in a preventative program; commence at 5-leaf stage, repeat at 7–10 day intervals."
        }
      ]
    },

    {
      crop: "Red Beet",
      cropList: ["Red Beet"],
      weeds: [
        {
          weed: "Downy mildew (Peronospora farinosa), Rust (Uromyces betae)",
          pestList: ["Downy Mildew", "Rust"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "From seedling stage until maturity",
          note: "Apply every 10–14 days while conditions allow infection. Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    {
      crop: "Rhubarb",
      cropList: ["Rhubarb"],
      weeds: [
        {
          weed: "Crown rot (Phytophthora spp.)",
          pestList: ["Crown Rot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "Before planting",
          note: "Dip rhubarb crowns before planting."
        },
        {
          weed: "Downy mildew (Peronospora jaapiana)",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "From seedling stage until maturity",
          note: "Spray at 14-day intervals while conditions allow infection. Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    {
      crop: "Silver Beet",
      cropList: ["Silver Beet"],
      weeds: [
        {
          weed: "Downy mildew (Peronospora farinosa)",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "From seedling stage until maturity",
          note: "Begin spraying from seedling stage until maturity, repeat every 10–14 days depending on weather conditions and disease pressure. Do not use on copper sensitive varieties. Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    {
      crop: "Spinach",
      cropList: ["Spinach"],
      weeds: [
        {
          weed: "Downy mildew (Peronospora farinosa)",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At first sign of disease",
          note: "Begin spraying at first sign of disease, repeat every 10–14 days depending on weather conditions and disease pressure. Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    {
      crop: "Tomatoes",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Bacterial spot (Xanthomonas campestris pv. vesicatoria), Bacterial speck (Pseudomonas syringae pv. tomato), Bacterial canker (Clavibacter michiganensis pv. michiganensis)",
          pestList: ["Bacterial Canker", "Bacterial Speck", "Bacterial Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "Preventative, at 7–10 day intervals",
          note: "Depending on plant size, apply at high enough volume to ensure good coverage. Ensure both upper and lower surfaces are treated. Use shortest interval when conditions are very favourable for infection (wet weather, high inoculum levels). These applications will reduce the spread of bacterial canker but will not control seed or soil-borne infection. Aerial/ULV: 2.5 L/ha."
        },
        {
          weed: "Early blight / Target spot (Alternaria solani), Septoria leaf spot (Septoria spp.)",
          pestList: ["Early Blight", "Septoria Leaf Spot", "Target Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "Shortly after transplant when plants are 15 cm high, before symptoms appear",
          note: "Apply every 7–10 days depending on weather conditions. Depending on plant size, apply at high enough volume to ensure good coverage. Ensure both upper and lower surfaces are treated. Use shortest interval when conditions are highly favourable for infection (wet weather, high inoculum)."
        },
        {
          weed: "Late blight / Irish blight (Phytophthora infestans)",
          pestList: ["Late Blight"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At first sign of disease",
          note: "Begin spraying at first sign of disease, repeat every 10–14 days."
        }
      ]
    },

    {
      crop: "Tomato Seedlings",
      cropList: ["Tomatoes"],
      weeds: [
        {
          weed: "Bacterial speck (Pseudomonas syringae pv. tomato)",
          pestList: ["Bacterial Speck"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "Seedling stage, weekly intervals",
          note: "Spray seedlings at weekly intervals with a hollow cone spray. Ensure both upper and lower surfaces are treated."
        }
      ]
    },

    // ── FRUIT ─────────────────────────────────────────────────────

    {
      crop: "Bananas — Yellow Sigatoka",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Yellow sigatoka (Mycosphaerella musicola)",
          pestList: ["Yellow Sigatoka"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "December to May when weather conditions favour disease",
          note: "Spray monthly from December to May. Ensure good coverage. Add 300–600 mL/ha Nu-Film-17. Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    {
      crop: "Bananas — Phytophthora Stem Canker",
      cropList: ["Bananas"],
      weeds: [
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["NSW", "WA"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Mix to a smooth consistency. Apply only to pseudostems wherever cankers appear. Repeat applications up to 5 per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 treatments."
        }
      ]
    },

    {
      crop: "Strawberries",
      cropList: ["Strawberries"],
      weeds: [
        {
          weed: "Leaf spot (Mycosphaerella fragariae), Grey mould (Botrytis cinerea)",
          pestList: ["Grey Mould", "Leaf Spot"],
          states: ["Vic", "SA", "Tas", "WA"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "When plants are established",
          note: "Spray when plants are established and repeat every 7–10 days throughout the season. Discontinue application if signs of phytotoxicity appear (reddening of leaf veins or new growth inhibition). Early in the season, alternating with Spin Flo will assist in reducing grey mould development. Aerial/ULV: 2.5 L/ha."
        }
      ]
    },

    // ── TREE AND VINE CROPS ────────────────────────────────────────

    {
      crop: "Apples",
      cropList: ["Apples"],
      weeds: [
        {
          weed: "Black spot / Scab (Venturia inaequalis)",
          pestList: ["Black Spot", "Scab"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At green tip",
          note: "Apply as a dilute or concentrate spray. Do not use a concentration factor greater than 2. NOTE: Crop injury (russetting) may occur from late application. Discontinue use when green tip on earliest developing buds reaches 1 cm. Before applying to recently introduced varieties, ascertain their tolerance of copper sprays from relevant authorities."
        }
      ]
    },

    {
      crop: "Apricots",
      cropList: ["Apricots"],
      weeds: [
        {
          weed: "Shothole (Wilsonomyces carpophilus), Freckle (Venturia carpophila)",
          pestList: ["Freckle", "Shothole"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At bud swell, before earliest signs of leaf/bud movement",
          note: "Spray at least one post-harvest application. Apply as a dilute or concentrate spray. Do not use a concentration factor greater than 2."
        },
        {
          weed: "Bacterial gummosis (Pseudomonas syringae)",
          pestList: ["Bacterial Gummosis"],
          states: ["NSW"],
          rate: "325",
          rateMax: "625",
          unit: "mL/100L",
          stage: "Autumn through spring",
          note: "625 mL/100L: Autumn — apply at 25–50% leaf fall, again at 90–100% leaf fall. Winter — apply in mid-winter. Spring — apply at first sign of bud movement, repeat 7–10 days later. 500 mL/100L (NSW only). 325 mL/100L (NSW, Vic, SA, WA): Apply 1 week after petal fall, repeat 7–10 days later — controls high leaf population of bacteria in mid to late spring. Apply as dilute or concentrate spray, max concentration factor 2."
        }
      ]
    },

    {
      crop: "Avocados",
      cropList: ["Avocado"],
      weeds: [
        {
          weed: "Anthracnose (Colletotrichum gloeosporioides), Cercospora spot (Pseudocercospora purpurea), Sooty blotch (Akaropeltopsis sp.)",
          pestList: ["Anthracnose", "Cercospora Spot", "Sooty Blotch"],
          states: ["Qld", "NSW", "Vic", "SA", "WA"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "From end of flowering to harvest",
          note: "Spray every 4 weeks from end of flowering to harvest. During extended wet weather, spray every 14 days. Start using Cop-IT preferably during low infestation and preferably as a last spray in a spray program. Apply as dilute or concentrate spray. Do not use a concentration factor greater than 3."
        },
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Mix to a smooth consistency. Repeat up to 5 applications per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 treatments."
        }
      ]
    },

    {
      crop: "Cherries",
      cropList: ["Cherries"],
      weeds: [
        {
          weed: "Shothole (Wilsonomyces carpophilus)",
          pestList: ["Shothole"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "When buds are swelling, BEFORE and within one week of bud opening",
          note: "Apply as dilute or concentrate spray. Do not use a concentration factor greater than 2."
        },
        {
          weed: "Bacterial gummosis / canker (Pseudomonas syringae)",
          pestList: ["Bacterial Gummosis"],
          states: ["Vic", "Tas", "SA", "WA"],
          rate: "325",
          rateMax: "625",
          unit: "mL/100L",
          stage: "Autumn through spring",
          note: "625 mL/100L (Vic, Tas, SA, WA): Autumn — apply at 25–50% leaf fall, again at 90–100% leaf fall. Winter — apply in mid-winter. Spring — apply at first sign of bud movement. 500 mL/100L (NSW only). 325 mL/100L (NSW, Vic, SA, WA): Apply 1 week after petal fall, repeat 7–10 days later — controls high leaf population of bacteria in mid to late spring. Apply as dilute or concentrate spray, max concentration factor 2."
        }
      ]
    },

    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
        {
          weed: "Black spot (Guignardia citricarpa), Melanose (Diaporthe citri), Smoky blotch (Gloeodes pomigena), Scab (Elsinoe fawcettii)",
          pestList: ["Black Spot", "Melanose", "Scab", "Smoky Blotch"],
          states: ["All"],
          rate: "500",
          rateMax: "750",
          unit: "mL/100L",
          stage: "At petal fall",
          note: "Apply the higher rate in coastal districts. Apply as a DILUTE spray only. Add 300–600 mL/ha Nu-Film-17."
        },
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Mix to a smooth consistency. Repeat up to 5 applications per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 treatments. Dilute application only for citrus."
        }
      ]
    },

    {
      crop: "Kiwifruit",
      cropList: ["Kiwifruit"],
      weeds: [
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Spray only to stems of vines wherever cankers appear. Repeat up to 5 sprays per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 sprays."
        }
      ]
    },

    {
      crop: "Lychees (Litchis)",
      cropList: ["Lychees"],
      weeds: [
        {
          weed: "Parasitic algae (Cephaleuros virescens)",
          pestList: ["Parasitic Algae"],
          states: ["Qld", "NSW"],
          rate: "1000",
          rateMax: "1000",
          unit: "mL/100L",
          stage: "Monthly during wet season",
          note: "Spray affected trunk and limbs until runoff occurs. Apply monthly during the wet season. Add 300–600 mL/ha Nu-Film-17. Apply as a DILUTE spray only."
        },
        {
          weed: "Lychee pepper spot (Colletotrichum gloeosporioides)",
          pestList: ["Pepper Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "From end of flowering to harvest",
          note: "Spray every 4 weeks from end of flowering to harvest. During extended wet weather, spray every 14 days. Apply as a DILUTE spray only."
        },
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Repeat up to 5 sprays per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 sprays. Dilute application only."
        }
      ]
    },

    {
      crop: "Mangoes",
      cropList: ["Mango"],
      weeds: [
        {
          weed: "Anthracnose (Colletotrichum gloeosporioides, C. acutatum)",
          pestList: ["Anthracnose"],
          states: ["NSW", "Qld", "SA", "WA", "NT"],
          rate: "750",
          rateMax: "750",
          unit: "mL/100L",
          stage: "From end of flowering to harvest",
          note: "Spray every 4 weeks from end of flowering to harvest. During extended wet weather, spray every 14 days. Use in rotation with alternate chemistry. Apply as dilute or concentrate spray. Do not use a concentration factor greater than 3."
        },
        {
          weed: "Bacterial black spot (Xanthomonas campestris pv. mangiferaeindicae)",
          pestList: ["Bacterial Black Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "From just after fruit set until harvest",
          note: "Apply at 2–4 week intervals from just after fruit set until harvest. Especially suited for application as the last two sprays at end of a spray program to minimise visible residues. Apply as dilute or concentrate spray. Do not use a concentration factor greater than 3."
        }
      ]
    },

    {
      crop: "Nectarines",
      cropList: ["Nectarines"],
      weeds: [
        {
          weed: "Shothole (Wilsonomyces carpophilus)",
          pestList: ["Shothole"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "When buds are swelling, BEFORE and within one week of bud opening",
          note: "Apply as dilute or concentrate spray. Do not use a concentration factor greater than 2."
        },
        {
          weed: "Leaf curl (Taphrina deformans)",
          pestList: ["Leaf Curl"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "CRITICAL TIMING: at bud swell, BEFORE and within one week of bud opening",
          note: "CORRECT TIMING IS CRITICAL FOR EFFECTIVE CONTROL. For a given variety, time of bud opening varies year to year. Monitor bud development of each variety. Blocks with multiple varieties may need more than one treatment. Where leaf curl is severe or likely: 1) AUTUMN — apply at leaf fall. 2) Apply at FIRST SIGN of BUD SWELL and REPEAT ONE WEEK LATER. Apply as dilute or concentrate spray. Max concentration factor 2."
        },
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Repeat up to 5 sprays per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 sprays."
        }
      ]
    },

    {
      crop: "Passionfruit",
      cropList: ["Passionfruit"],
      weeds: [
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Repeat up to 5 sprays per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 sprays."
        }
      ]
    },

    {
      crop: "Peaches",
      cropList: ["Peaches"],
      weeds: [
        {
          weed: "Shothole (Wilsonomyces carpophilus)",
          pestList: ["Shothole"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "When buds are swelling, BEFORE and within one week of bud opening",
          note: "Apply as dilute or concentrate spray. Do not use a concentration factor greater than 2."
        },
        {
          weed: "Leaf curl (Taphrina deformans)",
          pestList: ["Leaf Curl"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "CRITICAL TIMING: at bud swell, BEFORE and within one week of bud opening",
          note: "CORRECT TIMING IS CRITICAL FOR EFFECTIVE CONTROL. For a given variety, time of bud opening varies year to year. Monitor bud development of each variety. Blocks with multiple varieties may need more than one treatment. Where leaf curl is severe or likely: 1) AUTUMN — apply at leaf fall. 2) Apply at FIRST SIGN of BUD SWELL and REPEAT ONE WEEK LATER. Apply as dilute or concentrate spray. Max concentration factor 2."
        },
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Repeat up to 5 sprays per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 sprays."
        }
      ]
    },

    {
      crop: "Pears",
      cropList: ["Pears"],
      weeds: [
        {
          weed: "Black spot / Scab (Venturia pirina)",
          pestList: ["Black Spot", "Scab"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At green tip",
          note: "Apply as dilute or concentrate spray. Do not use a concentration factor greater than 2. NOTE: Crop injury (russetting) may occur from late application. Discontinue use when green tip on earliest developing buds reaches 1 cm. Before applying to recently introduced varieties, ascertain their tolerance of copper sprays from relevant authorities."
        }
      ]
    },

    {
      crop: "Plums",
      cropList: ["Plums"],
      weeds: [
        {
          weed: "Shothole (Wilsonomyces carpophilus)",
          pestList: ["Shothole"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "When buds are swelling, BEFORE and within one week of bud opening",
          note: "Apply as dilute or concentrate spray. Do not use a concentration factor greater than 2."
        },
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Repeat up to 5 sprays per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 sprays."
        }
      ]
    },

    {
      crop: "Tropical Fruit — Phytophthora Stem Canker",
      cropList: ["Tropical Fruits"],
      weeds: [
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Repeat up to 5 per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 treatments."
        }
      ]
    },

    {
      crop: "Vines — Wine Grapes and Table Grapes",
      cropList: ["Grapes", "Table Grapes", "Wine Grapes"],
      weeds: [
        {
          weed: "Downy mildew (Plasmopara viticola), Powdery mildew (Uncinula necator)",
          pestList: ["Downy Mildew", "Powdery Mildew"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "When shoots are 10 cm long",
          note: "Repeat at 10–14 day intervals or as necessary while weather conditions favour infection. Use the higher rate when conditions are highly favourable. Leaf damage may occur on copper sensitive varieties. Apply as dilute or concentrate spray. Do not use a concentration factor greater than 3. WHP: Wine grapes — do not harvest for 4 weeks after application. Table grapes — do not harvest for 1 day after application."
        }
      ]
    },

    // ── NUTS ──────────────────────────────────────────────────────

    {
      crop: "Almonds",
      cropList: ["Almonds"],
      weeds: [
        {
          weed: "Shothole (Wilsonomyces carpophilus)",
          pestList: ["Shothole"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "When buds are swelling, BEFORE and within one week of bud opening",
          note: "Apply as dilute or concentrate spray. Do not use a concentration factor greater than 2."
        },
        {
          weed: "Leaf curl (Taphrina deformans)",
          pestList: ["Leaf Curl"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "CRITICAL TIMING: at bud swell, BEFORE and within one week of bud opening",
          note: "CORRECT TIMING IS CRITICAL FOR EFFECTIVE CONTROL. Monitor bud development of each variety. Where leaf curl is severe or likely: 1) AUTUMN — apply at leaf fall. 2) Apply at FIRST SIGN of BUD SWELL and REPEAT ONE WEEK LATER. Apply as dilute or concentrate spray. Max concentration factor 2."
        }
      ]
    },

    {
      crop: "Macadamias",
      cropList: ["Macadamias"],
      weeds: [
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["Qld", "WA"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Mix to a smooth consistency. Repeat up to 5 applications per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 treatments. Max concentration factor 2."
        },
        {
          weed: "Husk spot (Pseudocercospora sp.)",
          pestList: ["Husk Spot"],
          states: ["Qld", "NSW", "WA", "NT"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "From nut set (late September) to December",
          note: "Good spray penetration of foliage is essential. Apply at least 3 sprays at 3–4 week intervals. Apply as dilute or concentrate spray. Do not use a concentration factor greater than 2."
        }
      ]
    },

    {
      crop: "Pecans",
      cropList: ["Pecans"],
      weeds: [
        {
          weed: "Phytophthora stem canker",
          pestList: ["Phytophthora Stem Canker"],
          states: ["All"],
          rate: "250",
          rateMax: "250",
          unit: "mL/L",
          stage: "When cankers appear, after removing dead tissue",
          note: "Stem application: 250 mL/L water or 250 mL/L water-based paint. Repeat up to 5 per season until natural healing has commenced. Application with paint carrier may only require 1 or 2 treatments."
        }
      ]
    },

    {
      crop: "Walnuts",
      cropList: ["Walnuts"],
      weeds: [
        {
          weed: "Walnut blight (Xanthomonas campestris pv. juglandis)",
          pestList: ["Walnut Blight"],
          states: ["All"],
          rate: "750",
          rateMax: "750",
          unit: "mL/100L",
          stage: "When catkins are partially opened",
          note: "Spray a minimum of 3 sprays at 7–10 day intervals, commencing when catkins are partially opened. Further sprays may be necessary if conditions allow infection. Add 300 mL/ha Nu-Film-17. Apply as a DILUTE spray only."
        }
      ]
    },

    // ── OTHER CROPS ──────────────────────────────────────────────

    {
      crop: "Ornamentals",
      cropList: ["Ornamentals"],
      weeds: [
        {
          weed: "Bacterial leaf spot",
          pestList: ["Bacterial Leaf Spot"],
          states: ["All"],
          rate: "500",
          rateMax: "500",
          unit: "mL/100L",
          stage: "At first sign of disease",
          note: "Begin spraying at first sign of disease, repeat every 7–10 days depending on weather conditions and disease pressure. Do not use on copper sensitive varieties. Small scale evaluations consisting of 2 sprays at a 14-day interval should be applied first to test for phytotoxicity."
        },
        {
          weed: "Downy mildew",
          pestList: ["Downy Mildew"],
          states: ["All"],
          rate: "750",
          rateMax: "750",
          unit: "mL/100L",
          stage: "At first sign of disease",
          note: "Begin spraying at first sign of disease, repeat every 7–10 days depending on weather conditions and disease pressure. Do not use on copper sensitive varieties. Small scale evaluations consisting of 2 sprays at a 14-day interval should be applied first to test for phytotoxicity."
        }
      ]
    },

    {
      crop: "Tobacco Seed Beds",
      cropList: ["Tobacco"],
      weeds: [
        {
          weed: "Wildfire / Angular leaf spot (Pseudomonas syringae pv. tabaci)",
          pestList: ["Angular Leaf Spot", "Wildfire"],
          states: ["Qld", "NSW", "Vic"],
          rate: "1000",
          rateMax: "1000",
          unit: "mL/100L",
          stage: "Every 7 days",
          note: "Apply every 7 days."
        },
        {
          weed: "Algae",
          pestList: ["Algae"],
          states: ["Qld", "WA"],
          rate: "1000",
          rateMax: "1000",
          unit: "mL/100L",
          stage: "When algae first appears",
          note: "Apply when algae first appears."
        }
      ]
    }
  ],

  // ── Restraints ────────────────────────────────────────────────
  restraints: [
    "DO NOT apply when either hot (above 35°C) or frost prone conditions prevail.",
    "DO NOT apply when poor drying conditions exist or if it is likely to rain before the spray is dry.",
    "DO NOT apply to wet crops.",
    "DO NOT apply to copper-shy crops or cultivars.",
    "DO NOT mix with acidifying/buffering agents unless they are required to maintain the pH between 6 & 7. The stability and efficacy of Cop-IT is pH dependent.",
    "DO NOT mix with phosphate-based acidifiers or buffers.",
    "DO NOT apply in a spray solution having a pH of < 6.0 as phytotoxicity may occur.",
    "DO NOT apply in water volumes resulting in application rates of less than 2.5 L Cop-IT/ha unless otherwise specified.",
    "DO NOT contaminate streams, rivers or waterways with the chemical or used containers."
  ],

  // ── Withholding ───────────────────────────────────────────────
  withholding: {
    harvest: "Wine grapes: 4 weeks. All other registered crops (almonds, apples, apricots, avocados, bananas, beans, brassicas, capsicums, carrots, celery, cherries, citrus, cucurbits, kiwifruit, lettuce, lychees, macadamias, mangoes, nectarines, onions, parsnips, passionfruit, peaches, pears, peas, pecans, plums, potatoes, red beet, rhubarb, silver beet, spinach, strawberries, table grapes, tobacco, tomatoes, walnuts): 1 day.",
    grazing: "Not applicable — not for use on grazing crops."
  },

  // ── Compatibility ─────────────────────────────────────────────
  compatibility: {
    compatible: [
      "Wettable powder, water dispersible granule, suspension concentrate and emulsifiable concentrate formulations of commonly used fungicides, insecticides and miticides"
    ],
    incompatible: [
      "Ca-EDTA",
      "Bavistin",
      "Thiovit Jet (at higher rates only)",
      "Phosphate-based acidifiers or buffers",
      "Some foliar fertilizers (primarily because of pH — test before use)"
    ],
    notes: [
      "The stability and efficacy of Cop-IT is pH dependent — should not be mixed with acidifying agents unless required to decrease pH above 7.",
      "Mixtures with more than one other product are not recommended — may be ineffective or cause serious damage.",
      "Contact Agspec for latest compatibility information."
    ]
  },

  // ── Surfactant ────────────────────────────────────────────────
  surfactant: "Addition of a sticker-spreader such as Nu-Film-17 is recommended, especially when applying to brassicas, faba beans, peas and onions, irrespective of application method. Use of oils and wetting agents is not recommended as these may enhance uptake of copper and increase phytotoxicity.",

  // ── Sprayer cleanup ───────────────────────────────────────────
  sprayerCleanup: "Triple or preferably pressure rinse containers before disposal. Add rinsings to spray tank. Do not dispose of undiluted chemicals on site. Cop-IT must be kept agitated throughout entire mixing and spraying operation. Apply within one hour of dilution. All containers containing concentrated product must be sealed once opened to prevent loss of ammonia and formation of crystals."
};
