// ─────────────────────────────────────────────────────────────────────────────
// NUFARM COPPER HYDROXIDE 500 FUNGICIDE — Label Data
// Group M1 Fungicide | Wettable Powder (WP)
// Source: Nufarm_CopperHydroxide500_Label.pdf
// APVMA Approval No: 69351/149512
// Nufarm Australia Limited
// ─────────────────────────────────────────────────────────────────────────────
productDatabase['0463nufarmcopperhydroxide500fu'] = {
  name:             "Nufarm Copper Hydroxide 500 Fungicide",
  company: "Nufarm",

  category:         "Fungicides",
  activeIngredient: "500 g/kg Copper (as Cupric Hydroxide)",
  group:            "Group M1 Fungicide",
  modeOfAction:     "Multi-site contact fungicide and bactericide (inorganic copper)",
  formulation:      "Wettable Powder (WP)",
  color:            "#0d9488",
  apvma:            "69351",
  labelPdf:         "Source labels/Nufarm_CopperHydroxide500_Label.pdf",
  sdsPdf:           "SDS Labels/CHAMP_500WG_FUNGICIDE.pdf",
  signalHeading:    "Caution",
  classification: {
    type: "Fungicide",
    target: ["Anthracnose", "Black spot", "Downy mildew", "Leaf curl", "Bacterial blight", "Bacterial spot", "Leaf spot", "Phytophthora"],
    timing: ["Preventive", "At first sign of disease", "At bud swell"]
  },

  crops: [
    {
      crop: "Avocados",
      cropList: ["Avocados"],
      weeds: [
        { weed: "Anthracnose (Glomerella cingulata var. minor)", pestList: ["Anthracnose"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Preventive — spray every 4 weeks from end of flowering to harvest; every 14 days in extended wet weather.", note: "Apply as a dilute or concentrate spray." },
        { weed: "Phytophthora stem canker", pestList: ["Phytophthora Stem Canker"], states: ["Qld", "NSW"], rate: "53", rateMax: "53", unit: "g/100L", stage: "Apply to stems wherever cankers appear, after removing dead tissue.", note: "Alternatively use 53 g/100L water-based paint. Repeat up to 5 applications per season until healing commences." }
      ]
    },
    {
      crop: "Citrus",
      cropList: ["Citrus"],
      weeds: [
        { weed: "Black spot, Melanose, Smoky blotch (Gloeodes pomigena), Scab (lemons) (Elsinoe fawcettii)", pestList: ["Black Spot", "Melanose", "Smoky Blotch", "Scab"], states: ["All"], rate: "105", rateMax: "160", unit: "g/100L", stage: "Apply at petal fall.", note: "Use higher rate in coastal districts. Add 600 mL polyphase or miscible summer oil. Apply as a dilute application only." }
      ]
    },
    {
      crop: "Litchi",
      cropList: ["Litchi"],
      weeds: [
        { weed: "Parasitic algae (Cephaleuros virescens)", pestList: ["Parasitic Algae"], states: ["Qld", "NSW"], rate: "210", rateMax: "210", unit: "g/100L", stage: "Apply monthly during the wet season.", note: "Add a suitable wetting agent. Apply to affected trunks and limbs until runoff. Dilute application only." }
      ]
    },
    {
      crop: "Mangoes",
      cropList: ["Mangoes"],
      weeds: [
        { weed: "Anthracnose (Glomerella sp.)", pestList: ["Anthracnose"], states: ["NSW", "Qld", "SA", "WA", "NT"], rate: "160", rateMax: "160", unit: "g/100L", stage: "Spray every 4 weeks from end of flowering to harvest; every 14 days in extended wet weather.", note: "Use in rotation with alternate chemistry. Apply as dilute or concentrate spray." },
        { weed: "Bacterial Black Spot (Xanthomonas campestris cv mangiferaeindacae)", pestList: ["Bacterial Black Spot"], states: ["NT"], rate: "105", rateMax: "160", unit: "g/100L", stage: "Apply at first sign of infection or as preventative. Repeat at 10–14 day intervals.", note: "Use higher rate when conditions are favourable for infection. Dilute or concentrate spray." }
      ]
    },
    {
      crop: "Olives",
      cropList: ["Olives"],
      weeds: [
        { weed: "Fungal leaf spots including Peacock spot (Spilocea oleaginea), Anthracnose (Colletotrichum spp.)", pestList: ["Fungal Leaf Spots Including Peacock Spot", "Anthracnose"], states: ["All"], rate: "175", rateMax: "240", unit: "g/100L", stage: "Apply prior to onset of warm, humid, wet conditions. Repeat at regular intervals.", note: "Use lower rate for general management; higher rate in coastal or high-pressure orchards. Test tolerance on small area first." }
      ]
    },
    {
      crop: "Vines",
      cropList: ["Vines"],
      weeds: [
        { weed: "Downy mildew (Plasmopara viticola)", pestList: ["Downy Mildew"], states: ["All"], rate: "95", rateMax: "131", unit: "g/100L", stage: "Apply when shoots are 10 cm long; repeat at 10–14 day intervals while conditions allow infection.", note: "Use higher rate when conditions are highly favourable. Leaf damage may occur on copper-shy varieties. Dilute or concentrate spray." }
      ]
    },
    {
      crop: "Pome Fruit — Apples, Pears",
      cropList: ["Pome Fruit","Apples","Pears"],
      weeds: [
        { weed: "Black spot/Scab (Venturia pirina, Venturia inaequalis)", pestList: ["Black Spot/Scab"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Spray at green tip and repeat 10–14 days later if conditions allow infection.", note: "CRITICAL: Discontinue use when green tip reaches 1 cm. Crop injury (russeting) may occur from late applications. Test new varieties before use." }
      ]
    },
    {
      crop: "Stone Fruit — Apricots, Cherries, Nectarines, Peaches, Plums",
      cropList: ["Stone Fruit","Apricots","Cherries","Nectarines","Peaches","Plums"],
      weeds: [
        { weed: "Shothole (Stigmina carpophila), Freckle (Venturia carpophila)", pestList: ["Shothole", "Freckle"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply when buds are swelling but BEFORE AND WITHIN ONE WEEK OF BUD OPENING.", note: "Apply at least 1 post-harvest spray for apricots and cherries. Dilute or concentrate spray." },
        { weed: "Leaf curl (Taphrina deformans)", pestList: ["Leaf Curl"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "CRITICAL: Apply when buds are swelling but BEFORE AND WITHIN ONE WEEK OF BUD OPENING. For severe situations: 1. Apply at leaf fall (Autumn). 2. Apply at FIRST SIGN of BUD SWELL and REPEAT ONE WEEK LATER.", note: "Monitor bud development of each variety each year. Multi-variety blocks may need multiple treatments." },
        { weed: "Bacterial gummosis (Pseudomonas syringae)", pestList: ["Bacterial Gummosis"], states: ["All"], rate: "105", rateMax: "131", unit: "g/100L", stage: "Autumn: Apply at 25–50% leaf fall, then again at 90–100% leaf fall. Winter: Apply in mid-winter. Spring: Apply at first bud movement, repeat 7–10 days later.", note: "Lower rate (71 g/100L) applied 1 week after petal fall, then 7–10 days later, controls late-spring leaf incidence." }
      ]
    },
    {
      crop: "Tree Nuts — Almonds, Macadamias, Walnuts",
      cropList: ["Tree Nuts","Almonds","Macadamias","Walnuts"],
      weeds: [
        { weed: "Anthracnose (Colletotrichum spp.), Pink limb blight (Corticium salmonicolor)", pestList: ["Anthracnose", "Pink Limb Blight"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Spray from early summer (December) to May at monthly intervals (Macadamia).", note: "Good coverage inside the tree is essential." },
        { weed: "Shothole, Leaf curl (Taphrina deformans) — Almonds and Prunus spp.", pestList: ["Shothole", "Leaf Curl"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "CRITICAL: Apply when buds are swelling but BEFORE AND WITHIN ONE WEEK OF BUD OPENING.", note: "For severe leaf curl: 1. Apply at leaf fall (Autumn). 2. Apply at FIRST SIGN of BUD SWELL and REPEAT ONE WEEK LATER." },
        { weed: "Husk spot (Pseudocercospora macadamiae) — Macadamia only", pestList: ["Husk Spot"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply from nut set (late September) to December. Apply at least 3 sprays at 3–4 week intervals.", note: "Good spray penetration of foliage is essential." },
        { weed: "Walnut blight (Xanthomonas campestris pv juglans) — Walnuts", pestList: ["Walnut Blight"], states: ["All"], rate: "160", rateMax: "300", unit: "g/100L", stage: "Apply minimum 3 sprays at 7–10 day intervals commencing when catkins are partially open.", note: "Add 175 mL polyphase or miscible summer oil. Further applications may be needed. Dilute or concentrate up to 2× concentration." }
      ]
    },
    {
      crop: "Bananas",
      cropList: ["Bananas"],
      weeds: [
        { weed: "Cercospora leaf spot (Cercospora musae)", pestList: ["Cercospora Leaf Spot"], states: ["Qld", "NSW", "WA"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply at 3–4 weekly intervals from December to May when weather conditions allow disease outbreaks.", note: "Add 600 mL/ha polyphase or miscible summer oil when or if necessary." },
        { weed: "Phytophthora stem canker", pestList: ["Phytophthora Stem Canker"], states: ["All"], rate: "53", rateMax: "53", unit: "g/100L", stage: "Apply to stems wherever cankers appear, after removing dead tissue.", note: "Alternatively use 53 g/100L water-based paint. Repeat up to 5 applications per season." }
      ]
    },
    {
      crop: "Brassicas",
      cropList: ["Brassicas"],
      weeds: [
        { weed: "Black rot (Xanthomonas campestris), Peppery leaf spot (Pseudomonas syringae pv maculicola), Ring spot (Mycosphaerella brassicicola), Downy mildew (Peronospora parasitica)", pestList: ["Black Rot", "Peppery Leaf Spot", "Ring Spot", "Downy Mildew"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply at first sign of disease; repeat at 10–14 day intervals while conditions allow infection.", note: "CROP DAMAGE WARNING: Cupric hydroxide predisposes cabbages to frost damage. Do not treat if frosts are likely. Add wetting agent. Alternatively 1.2 kg/ha." }
      ]
    },
    {
      crop: "Celery",
      cropList: ["Celery"],
      weeds: [
        { weed: "Leaf spot (Septoria apiicola), Bacterial soft rot (Erwinia carotovora pv carotovora)", pestList: ["Leaf Spot", "Bacterial Soft Rot"], states: ["All"], rate: "105", rateMax: "160", unit: "g/100L", stage: "Apply every 7 to 14 days while conditions allow infection.", note: "Use shortest interval when conditions highly favourable for infection (cool and wet). Add wetting agent." }
      ]
    },
    {
      crop: "Cucurbits",
      cropList: ["Cucurbits"],
      weeds: [
        { weed: "Angular leaf spot (Pseudomonas syringae pv lachrymans), Bacterial leaf spot (Xanthomonas campestris pv cucurbitae)", pestList: ["Angular Leaf Spot", "Bacterial Leaf Spot"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply when disease first appears; repeat at 10–14 day intervals while conditions allow infection.", note: "Add wetting agent." }
      ]
    },
    {
      crop: "Onions",
      cropList: ["Onions"],
      weeds: [
        { weed: "Downy mildew (Peronospora destructor)", pestList: ["Downy Mildew"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply when disease first appears; repeat every 10–14 days while conditions allow infection.", note: "Add wetting agent. Alternatively 1.2 kg/ha." }
      ]
    },
    {
      crop: "Rhubarb",
      cropList: ["Rhubarb"],
      weeds: [
        { weed: "Crown rot (Phytophthora spp.)", pestList: ["Crown Rot"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Dip rhubarb crowns before planting.", note: "Dispose of spent dip carefully. Do not contaminate wetlands or watercourses." },
        { weed: "Downy mildew (Peronospora jaapiana)", pestList: ["Downy Mildew"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply at 14 day intervals while conditions allow infection.", note: "Alternatively 1.2 kg/ha. Add wetting agent." }
      ]
    },
    {
      crop: "Fruiting Vegetables — Tomatoes, Capsicums",
      cropList: ["Fruiting Vegetables","Tomatoes","Capsicums"],
      weeds: [
        { weed: "Bacterial canker, Bacterial spot (Xanthomonas campestris pv vesicatoria), Bacterial speck (Pseudomonas syringae pv tomato)", pestList: ["Bacterial Canker", "Bacterial Spot", "Bacterial Speck"], states: ["All"], rate: "80", rateMax: "105", unit: "g/100L", stage: "Seed beds: Apply every 7 days during wet weather. Field crops: Apply at first sign of disease; repeat at 7–14 day intervals while conditions allow infection.", note: "Use shortest interval when conditions highly favourable. Applications reduce spread of bacterial canker but will not control seed or soil-borne infection. Alternatively 1–1.2 kg/ha." },
        { weed: "Target spot / Early blight (Alternaria solani), Septoria leaf spot, Irish blight / Late blight (Phytophthora infestans)", pestList: ["Target Spot / Early Blight", "Septoria Leaf Spot", "Irish Blight / Late Blight"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply at first sign of disease; repeat every 7–14 days while conditions allow infection.", note: "Shortest interval when conditions highly favourable. Minimise use on seedlings to avoid retarding growth. Alternatively 1.2 kg/ha." }
      ]
    },
    {
      crop: "Leafy Vegetables — Lettuce, Brassica leafy vegetables",
      cropList: ["Leafy Vegetables","Lettuce","Brassica Leafy Vegetables"],
      weeds: [
        { weed: "Anthracnose (Marssonina panattoniana), Bacterial leaf spot (Xanthomonas campestris pv vitians), Downy mildew (Bremia lactucae)", pestList: ["Anthracnose", "Bacterial Leaf Spot", "Downy Mildew"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply at first sign of disease; repeat every 7–10 days while conditions allow infection.", note: "Alternation with Mancozeb is desirable. CROP DAMAGE WARNING: Cupric hydroxide predisposes lettuces to frost damage. Do not treat if frosts are likely. Alternatively 1.2 kg/ha." }
      ]
    },
    {
      crop: "Silver Beet, Spinach",
      cropList: ["Silver Beet","Spinach"],
      weeds: [
        { weed: "Downy mildew (Peronospora farinosa)", pestList: ["Downy Mildew"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply at 10–14 day intervals from the seedling stage until maturity while conditions allow infection.", note: "Add wetting agent." }
      ]
    },
    {
      crop: "Legume Vegetables — Beans, Broad Beans, Peas",
      cropList: ["Legume Vegetables","Beans","Broad Beans","Peas"],
      weeds: [
        { weed: "Bacterial brown spot (Pseudomonas syringae pv syringae)", pestList: ["Bacterial Brown Spot"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply first spray within 3 weeks after emergence; repeat every 10–14 days while conditions allow infection.", note: "Add wetting agent. Alternatively 1.2 kg/ha." },
        { weed: "Common blight (Xanthomonas campestris pv phaseoli)", pestList: ["Common Blight"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply at first sign of infection or as preventative; repeat at 10–14 day intervals while conditions allow infection.", note: "Alternatively 1.2 kg/ha." },
        { weed: "Halo blight (Pseudomonas syringae pv phaseolicola), Ascochyta blight, Chocolate spot (Botrytis spp.), Rust (Uromyces sp.), Bacterial blight", pestList: ["Halo Blight", "Ascochyta Blight", "Chocolate Spot", "Rust", "Bacterial Blight"], states: ["All"], rate: "105", rateMax: "160", unit: "g/100L", stage: "Apply at 10–14 day intervals from when crop is 15–30 cm high while conditions allow infection.", note: "Use higher rate in beans when conditions highly favourable. Add wetting agent. Alternatively 1.2–1.3 kg/ha." }
      ]
    },
    {
      crop: "Root & Tuber Vegetables — Beetroot, Carrots, Parsnips, Potatoes",
      cropList: ["Root & Tuber Vegetables", "Beetroot", "Carrots", "Parsnips", "Potatoes"],
      weeds: [
        { weed: "Downy mildew (Peronospora farinosa), Rust (Uromyces betae), Leaf spot (Alternaria, Cercospora, Septoria)", pestList: ["Downy Mildew", "Rust", "Leaf Spot (Alternaria", "Cercospora", "Septoria"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply at 10–14 day intervals from seedling stage until maturity while conditions allow infection.", note: "DO NOT use on aquatic root and tuber vegetables. Add wetting agent. Alternatively 1.2 kg/ha." },
        { weed: "Target spot / Early blight (Alternaria solani), Irish blight / Late blight (Phytophthora infestans) — Potatoes", pestList: ["Target Spot / Early Blight", "Irish Blight / Late Blight"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply from crop emergence to maturity at 7–10 day intervals while conditions allow infection.", note: "May reduce yield if applied under dry conditions. Alternatively 1.2 kg/ha." }
      ]
    },
    {
      crop: "Ornamentals",
      cropList: ["Ornamentals"],
      weeds: [
        { weed: "Bacterial leaf spot", pestList: ["Bacterial Leaf Spot"], states: ["All"], rate: "105", rateMax: "105", unit: "g/100L", stage: "Apply at first sign of disease; repeat every 10–14 days as required.", note: "Ineffective against bacterial wilt of carnations caused by Pseudomonas andropogonis. Phytotoxicity can occur on some varieties — conduct small-scale evaluation (2 sprays, 14-day interval) before full treatment." }
      ]
    },
  ],

  restraints: [
    "DO NOT apply in spray solutions having a pH of less than 6.5 to avoid crop phytotoxicity.",
    "DO NOT apply during the hottest part of the day when temperatures exceed 35°C.",
    "DO NOT apply when slow drying conditions prevail.",
    "DO NOT apply to copper-shy crops or cultivars.",
    "DO NOT apply if it is likely to rain before the spray is dry.",
    "DO NOT apply to wet crops.",
    "DO NOT apply unless the wind speed is between 3 and 20 kilometres per hour at the application site.",
    "DO NOT apply if there are hazardous surface temperature inversion conditions present.",
    "Spray solutions should be used within 3 hours of preparation and agitated continuously."
  ],

  compatibility: {
    compatible:   ["Most insecticides/pyrethroids", "Dormant spraying oils", "Penncozeb 750 DF", "Manzate", "Ziram 80", "Wettable Sulphur", "Urea"],
    incompatible: ["Some foliar fertilisers (test before use)"],
    notes:        ["Mixtures with more than one of the listed compatible products are not recommended — may be ineffective or cause serious damage.", "Always add and fully mix Copper Hydroxide 500 in the spray tank BEFORE adding other products."]
  },

  withholding: {
    harvest: "DO NOT HARVEST FOR 1 DAY AFTER APPLICATION (all registered uses).",
    grazing:  "No specific withholding period for grazing stated on label. Refer to full label and state regulations."
  },

  surfactant:     "A wetting agent is REQUIRED when applying to Brassicas, Faba Beans, Peas and Onions, and when applying as a concentrate spray or by aircraft. Add at label rates. Suitable for dilute and concentrate spraying.",
  sprayerCleanup: "Thoroughly rinse spray equipment after use. Add rinsings to the spray tank. Triple rinse containers before disposal. Do not dispose of undiluted chemicals on site."
};
