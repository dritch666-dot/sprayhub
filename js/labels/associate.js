// ─────────────────────────────────────────────────────────
// NUFARM ASSOCIATE® HERBICIDE — Label Data
// Group 2 Herbicide (Metsulfuron-methyl)
// Source: Nufarm_Associate_Label.pdf
// APVMA Approval No: 46361/121951
// ─────────────────────────────────────────────────────────

productDatabase['associate'] = {
  name: "Nufarm Associate®",
  company: "Nufarm",

  category:         "Herbicides",
  activeIngredient: "Metsulfuron-methyl (600 g/kg)",
  group: "Group 2 Herbicide (Sulfonylurea)",
  modeOfAction: "Inhibits acetolactate synthase (ALS)",
  formulation: "Water Dispersible Granule (WDG)",
  color: "#10b981",
  apvma: "46361",
  labelPdf: "Source labels/Nufarm_Associate_Label.pdf",
  sdsPdf: "SDS Labels/ASSOCIATE.pdf",
  signalHeading: "Caution",
  classification: {
    type: "Herbicide",
    target: ["Broadleaf Weeds"],
    timing: ["Post-emergent", "Pre-plant"]
  },

  crops: [

    // ═══════════════════════════════════════════════════════
    // 1. CEREALS — POST-EMERGENCE (ASSOCIATE ONLY)
    // ═══════════════════════════════════════════════════════
    {
      crop: "Wheat, Barley, Triticale, Cereal Rye — Post-emergence (Associate Only)",
      cropList: ["Wheat", "Barley", "Triticale", "Cereal Rye"],
      weeds: [
        { weed: "African turnip weed (Sisymbrium thellungii)", pestList: ["African Turnip Weed"], states: ["Qld"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "Apply before the 6 leaf stage." },
        { weed: "Amsinckia/Yellow burweed (Amsinckia spp.)", pestList: ["Amsinckia", "Yellow Burweed"], states: ["WA", "SA", "Vic", "NSW", "Tas"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5 or 7 g/ha", notes: "Apply when weeds are small (no greater than 5 cm) and actively growing." },
        { weed: "Ball mustard (Neslia paniculata)", pestList: ["Ball Mustard"], states: ["SA"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Boggabri weed/Dwarf amaranth (Amaranthus macrocarpus)", pestList: ["Boggabri Weed", "Dwarf Amaranth"], states: ["Qld"], rate: "7", rateMax: "7", unit: "g/ha", rateText: "7 g/ha", notes: "Apply at cotyledon to 10 cm height or diameter stage." },
        { weed: "Calomba daisy (Pentzia suffruticosa)", pestList: ["Calomba Daisy"], states: ["SA"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Cape tulip (Homeria spp.)", pestList: ["Cape Tulip"], states: ["WA"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Charlock (Sinapsis arvensis)", pestList: ["Charlock"], states: ["Vic", "NSW", "SA", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Chickpeas — Volunteer (Cicer arietinum)", pestList: ["Volunteer Chickpeas"], states: ["Qld", "NSW", "Vic", "SA"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Chickweed (Stellaria media)", pestList: ["Chickweed"], states: ["NSW", "Vic", "SA", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Chicory (Cichorium intybus)", pestList: ["Chicory"], states: ["Qld"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Clover — Subterranean (Trifolium subterraneum)", pestList: ["Subterranean Clover"], states: ["All"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Common sowthistle (Sonchus oleraceus)", pestList: ["Common Sowthistle"], states: ["Qld", "NSW", "Tas", "Vic"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "Apply up to 4 leaf stage." },
        { weed: "Cutleaf mignonette (Reseda lutea)", pestList: ["Cutleaf Mignonette"], states: ["SA", "Tas"], rate: "7", rateMax: "7", unit: "g/ha", rateText: "7 g/ha", notes: "Spray actively growing large plants, up to early flowering stage. Plants emerging after spraying may not be controlled." },
        { weed: "Deadnettle (Lamium amplexicaule)", pestList: ["Deadnettle"], states: ["All"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Denseflower fumitory (Fumaria densiflora)", pestList: ["Denseflower Fumitory"], states: ["SA", "NSW"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Dock — Broadleaf (Rumex obtusifolius)", pestList: ["Broadleaf Dock", "Dock"], states: ["WA", "Qld", "NSW", "Vic", "SA", "Tas"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5 or 7 g/ha" },
        { weed: "Faba beans — Volunteer (Vicia faba)", pestList: ["Volunteer Faba Beans"], states: ["Vic", "SA"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "Apply after 3 node stage." },
        { weed: "Field peas — Volunteer (Pisum sativum)", pestList: ["Volunteer Field Peas"], states: ["Vic", "SA", "WA", "Tas", "NSW"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5 g/ha (Vic/SA/WA/Tas); 7 g/ha (NSW)" },
        { weed: "Hare's ear/Treacle mustard (Conringia orientalis)", pestList: ["Hare's Ear", "Treacle Mustard"], states: ["Vic"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "Apply before 5 leaf stage." },
        { weed: "Hogweed/Wireweed (Polygonum aviculare)", pestList: ["Hogweed", "Wireweed"], states: ["WA", "Vic", "SA", "NSW", "Tas", "Qld"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5 or 7 g/ha", notes: "Apply before 4 leaf stage. Use the higher rate when weed populations are dense." },
        { weed: "Indian hedge mustard (Sisymbrium orientale)", pestList: ["Indian Hedge Mustard"], states: ["All"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "Heavy populations and/or those suffering cold or moisture stress may not be completely controlled — tank mix with MCPA LVE 570 recommended." },
        { weed: "Lincoln weed (Diplotaxis tenuifolia)", pestList: ["Lincoln Weed"], states: ["SA"], rate: "7", rateMax: "7", unit: "g/ha", rateText: "7 g/ha", notes: "Apply to actively growing plants from late winter to spring." },
        { weed: "Lupins — Volunteer (Lupinus albus)", pestList: ["Volunteer Lupins"], states: ["WA", "SA", "NSW", "Vic"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Mallee catchfly (Silene apetala)", pestList: ["Mallee Catchfly"], states: ["SA"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Medic (Medicago spp.)", pestList: ["Medic"], states: ["All"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "New Zealand spinach (Tetragonia tetragonoides)", pestList: ["New Zealand Spinach"], states: ["Qld"], rate: "7", rateMax: "7", unit: "g/ha", rateText: "7 g/ha", notes: "Apply before 4 leaf stage." },
        { weed: "Parthenium weed (Parthenium hysterophorus)", pestList: ["Parthenium Weed"], states: ["Qld"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5–7 g/ha", notes: "5 g/ha up to 4 leaf stage; 7 g/ha at 4 leaf to rosette stage." },
        { weed: "Paterson's curse/Salvation Jane (Echium plantagineum)", pestList: ["Paterson's Curse", "Salvation Jane"], states: ["Tas", "WA", "SA", "NSW"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5 or 7 g/ha" },
        { weed: "Prickly lettuce (Lactuca serriola)", pestList: ["Prickly Lettuce"], states: ["Qld", "SA", "Vic", "Tas", "WA"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5 or 7 g/ha" },
        { weed: "Red pigweed (Portulaca oleracea)", pestList: ["Red Pigweed"], states: ["Qld"], rate: "7", rateMax: "7", unit: "g/ha", rateText: "7 g/ha", notes: "Apply before 6 leaf stage." },
        { weed: "Rough poppy (Papaver hybridum)", pestList: ["Rough Poppy"], states: ["NSW", "Vic", "SA", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Saltbush (Atriplex muelleri)", pestList: ["Saltbush"], states: ["Qld"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5–7 g/ha", notes: "5 g/ha up to 4 leaf stage; 7 g/ha at 4–6 leaf stage." },
        { weed: "Shepherd's purse (Capsella bursa-pastoris)", pestList: ["Shepherd's Purse"], states: ["NSW", "Vic", "SA", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Skeleton weed (Chondrilla juncea) — Suppression only", pestList: ["Skeleton Weed"], states: ["NSW", "Vic", "SA", "WA"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5–7 g/ha", notes: "Suppression only." },
        { weed: "Slender celery (Apium leptophyllum)", pestList: ["Slender Celery"], states: ["Qld"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Smallflower fumitory (Fumaria parviflora)", pestList: ["Smallflower Fumitory"], states: ["SA"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Sorrell (Rumex acetosella)", pestList: ["Sorrel"], states: ["SA", "Vic", "NSW", "WA", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "Some regeneration from underground rootstocks and new germinations may occur late in the season." },
        { weed: "Soursob (Oxalis pes-caprae)", pestList: ["Soursob"], states: ["Vic", "SA", "WA", "Tas", "NSW"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "Apply after majority of soursobs have emerged and are actively growing." },
        { weed: "Spiny emex/Doublegee/Three-comered Jack (Emex australis)", pestList: ["Spiny Emex", "Doublegee", "Three-Cornered Jack"], states: ["WA", "SA", "Vic", "NSW", "Tas", "Qld"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5 or 7 g/ha" },
        { weed: "Stagger weed (Stachys arvensis)", pestList: ["Stagger Weed"], states: ["All"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Storksbill/Wild geranium (Erodium spp.)", pestList: ["Storksbill", "Wild Geranium", "Erodium"], states: ["Vic", "SA", "WA", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Turnip weed (Rapistrum rugosum)", pestList: ["Turnip Weed"], states: ["All"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" },
        { weed: "Volunteer sunflower (Helianthus annuus)", pestList: ["Volunteer Sunflower"], states: ["Qld", "NSW"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5–7 g/ha", notes: "Qld: 5 g/ha cotyledon to 4 leaf, 7 g/ha 4 to 8 leaf. NSW: 5 g/ha cotyledon to 8 leaf." },
        { weed: "Wild/Crow garlic (Allium vineale)", pestList: ["Wild Garlic", "Crow Garlic"], states: ["Vic", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "Apply at 1–2 leaf stage." },
        { weed: "Wild turnip (Brassica tournefortii)", pestList: ["Wild Turnip"], states: ["All"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha" }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // 2. CEREALS — POST-EMERGENCE MIXTURES
    // ═══════════════════════════════════════════════════════
    {
      crop: "Wheat, Barley, Triticale, Cereal Rye — Post-emergence Mixtures",
      cropList: ["Wheat", "Barley", "Triticale", "Cereal Rye"],
      weeds: [
        { weed: "Capeweed (Arctotheca calendula)", pestList: ["Capeweed"], states: ["NSW", "Vic", "SA", "WA", "Qld", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha + Diuron or Agritone 750 or Terbutryn or Agtryne or Bromicide MA at label rates", notes: "Tank mix with Diuron, Agritone 750, Terbutryn/Igran, Agtryne, or Bromicide MA. Timing 3–5 leaf to full tillering depending on state and mix partner. Apply when weeds are 2–6 leaf." },
        { weed: "Wild radish (Raphanus raphanistrum)", pestList: ["Wild Radish"], states: ["NSW", "Vic", "SA", "WA", "Qld", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha + Agritone 750 or Tigrex or Bromicide MA at label rates", notes: "Tank mix with Agritone 750, Tigrex, or Bromicide MA. Timing early tillering to before boot. Apply lower rate to seedling weeds (3–6 leaf), higher rate on well-developed weeds up to rosette." },
        { weed: "Volunteer canola incl. Roundup Ready varieties (Brassica napus)", pestList: ["Volunteer Canola"], states: ["All"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha + LVE Agritone 440–880 mL/ha", notes: "Crop stage 3–5 leaf (Z13–15). Use 440 mL/ha for up to 4 leaf canola, 880 mL/ha for up to 6 leaf canola." },
        { weed: "Saffron thistle (Carthamus lanatus)", pestList: ["Saffron Thistle"], states: ["NSW", "Vic", "Tas", "SA", "WA", "Qld"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha + LVE Agritone or Agritone 750 or Archer at label rates", notes: "Spray young rosettes before leaves become spiny." },
        { weed: "Variegated thistle (Silybum marianum)", pestList: ["Variegated Thistle"], states: ["Tas", "NSW", "Qld"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha + 2,4-D Amicide 625 or Agritone 750 at label rates", notes: "Apply to weeds at seedling to rosette stage." },
        { weed: "Slender thistle (Carduus tenuiflorus)", pestList: ["Slender Thistle"], states: ["NSW", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha + LVE Agritone or Amicide 625 at label rates", notes: "Moderately susceptible. Spray young rosettes." },
        { weed: "Slender thistles (Carduus tenuiflorus & C. pycnocephalus)", pestList: ["Slender Thistles"], states: ["Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha + 1.4 L/ha Amicide 625", notes: "Apply to weeds at seedling to young rosette stage." },
        { weed: "Climbing buckwheat/Black bindweed (Fallopia convolvulus)", pestList: ["Climbing Buckwheat", "Black Bindweed"], states: ["Qld", "NSW"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5–7 g/ha + 1 L/ha Trooper 242/Tordon 242", notes: "Apply from early tillering to start of jointing. For best control apply at early tillering as this weed becomes increasingly difficult to control as it becomes larger." }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // 3. CEREALS — FALLOW/PREPLANT KNOCKDOWN (with Crucial/DST)
    // ═══════════════════════════════════════════════════════
    {
      crop: "Wheat — Fallow/Preplant Knockdown (with Crucial or weedmaster DST)",
      cropList: ["Wheat"],
      weeds: [
        { weed: "Broadleaf weeds as per Post-emergence Table", pestList: ["Broadleaf Weeds"], states: ["All"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5 or 7 g/ha + Crucial or weedmaster DST at label rates", notes: "DO NOT apply less than 10 days prior to sowing. Apply when weeds are actively growing. WA: 5 g/ha only." }
      ]
    },
    {
      crop: "Barley, Cereal Rye, Triticale — Fallow/Preplant Knockdown (with Crucial or weedmaster DST)",
      cropList: ["Barley", "Cereal Rye", "Triticale"],
      weeds: [
        { weed: "Broadleaf weeds as per Post-emergence Table", pestList: ["Broadleaf Weeds"], states: ["All"], rate: "5", rateMax: "7", unit: "g/ha", rateText: "5 or 7 g/ha + Crucial or weedmaster DST at label rates", notes: "DO NOT apply less than 6 weeks prior to sowing. Apply when weeds are actively growing. WA: 5 g/ha only." }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // 4. CHICKPEAS — PRE-HARVEST DESICCATION
    // ═══════════════════════════════════════════════════════
    {
      crop: "Chickpeas — Pre-harvest Desiccation (with Crucial or weedmaster DST)",
      cropList: ["Chickpeas"],
      weeds: [
        { weed: "Crop desiccant and broadleaf weed knockdown", pestList: ["Broadleaf Weeds", "Crop Desiccant"], states: ["All"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha + Crucial 450–950 mL/ha or weedmaster DST 580–1200 mL/ha", notes: "Apply when chickpeas are physiologically mature and less than 15% green pods present. Use higher rate of Crucial/DST when crops or weeds are dense. Application to crops intended for seed production or sprouting may reduce germination." }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // 5. NATIVE PASTURES, RIGHTS OF WAY, COMMERCIAL &
    //    INDUSTRIAL AREAS — BOOM APPLICATION
    // ═══════════════════════════════════════════════════════
    {
      crop: "Native Pastures, Rights of Way, Commercial and Industrial Areas — Boom Application",
      cropList: ["Native Pastures", "Rights Of Way", "Commercial Areas", "Industrial Areas"],
      weeds: [
        { weed: "Alligator weed (Alternanthera philoxeroides)", pestList: ["Alligator Weed"], states: ["NSW"], rate: "80", rateMax: "80", unit: "g/ha", rateText: "80 g/ha", notes: "Apply in terrestrial situations only. Follow-up applications over at least two seasons are essential for complete control." },
        { weed: "Common bracken (Pteridium esculentum)", pestList: ["Common Bracken", "Bracken"], states: ["All"], rate: "60", rateMax: "60", unit: "g/ha", rateText: "60 g/ha", notes: "Spray after full frond expansion. Adjust boom height to ensure correct spray overlap. Avoid spraying when plants are stressed." },
        { weed: "Darling pea (Swainsona spp.)", pestList: ["Darling Pea"], states: ["NSW"], rate: "10", rateMax: "10", unit: "g/ha", rateText: "10 g/ha", notes: "Apply during spring." },
        { weed: "Great mullein (Verbascum thapsus)", pestList: ["Great Mullein"], states: ["NSW"], rate: "20", rateMax: "20", unit: "g/ha", rateText: "20 g/ha + Pulse Penetrant 200 mL/100L", notes: "Regrowth may occur if growing conditions are not good. Apply during spring at times of good soil moisture to rosettes before stem elongation." },
        { weed: "Parthenium (Parthenium hysterophorus)", pestList: ["Parthenium"], states: ["Qld"], rate: "7", rateMax: "7", unit: "g/ha", rateText: "7 g/ha", notes: "Boom — Pastures only. Apply up to rosette stage. Spray to thoroughly wet all foliage. Adjust boom height to ensure complete overlap." },
        { weed: "Paterson's curse/Salvation Jane (Echium plantagineum)", pestList: ["Paterson's Curse", "Salvation Jane"], states: ["All"], rate: "15", rateMax: "15", unit: "g/ha", rateText: "15 g/ha", notes: "Spray to thoroughly wet all foliage. WA only: Spray plants at early flowering stage (Aug–Sep)." },
        { weed: "Ragwort (Senecio jacobaea)", pestList: ["Ragwort"], states: ["Vic", "Tas", "NSW"], rate: "15", rateMax: "15", unit: "g/ha", rateText: "15 g/ha", notes: "Apply to actively growing plants at rosette to cabbage stage." }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // 6. NATIVE PASTURES, RIGHTS OF WAY, COMMERCIAL &
    //    INDUSTRIAL AREAS — HANDGUN APPLICATION
    // ═══════════════════════════════════════════════════════
    {
      crop: "Native Pastures, Rights of Way, Commercial and Industrial Areas — Handgun Application",
      cropList: ["Native Pastures", "Rights Of Way", "Commercial Areas", "Industrial Areas"],
      weeds: [
        { weed: "Apple box, Messmate stringybark, Peppermint gum, Red gum, Yellow box", pestList: ["Apple Box", "Messmate Stringybark", "Peppermint Gum", "Red Gum", "Yellow Box"], states: ["All"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L + Pulse Penetrant 200 mL/100L", notes: "Apply to plants up to 4 m high. Avoid spraying when plants are stressed. Ensure thorough foliage cover." },
        { weed: "Australian blackthorn (Bursaria spinosa)", pestList: ["Australian Blackthorn"], states: ["NSW", "Qld", "Tas", "Vic"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L", notes: "Apply when bushes are actively growing. Spray to thoroughly wet all foliage, but not to cause run-off." },
        { weed: "Bellyache bush (Jatropha glossypifolia)", pestList: ["Bellyache Bush"], states: ["Qld"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L + Pulse Penetrant 200 mL/100L" },
        { weed: "Blackberry (Rubus spp.)", pestList: ["Blackberry"], states: ["All"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L + mineral crop oil 1 L/100L", notes: "Apply when bushes are actively growing. Tas: Apply after petal fall. Vic: Apply between December and April. Spray to thoroughly wet all foliage and canes." },
        { weed: "Bitou bush/Boneseed (Chrysanthemoides monilifera)", pestList: ["Bitou Bush", "Boneseed"], states: ["NSW", "Qld", "Vic", "SA"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L", notes: "Spray to thoroughly wet all foliage. Minimise contact with desirable species." },
        { weed: "Bridal creeper (Myrisphyllum asparagoides)", pestList: ["Bridal Creeper"], states: ["SA"], rate: "5", rateMax: "5", unit: "g/100L", rateText: "5 g/100L", notes: "Apply during mid June to late August. Follow-up applications over at least 2 seasons required. Water volumes of 500–800 L/ha recommended." },
        { weed: "Common bracken (Pteridium esculentum)", pestList: ["Common Bracken", "Bracken"], states: ["All"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L", notes: "Spray after full frond expansion. Spray to thoroughly wet all foliage, but not to cause run-off." },
        { weed: "Crofton weed (Eupatorium adenophorum)", pestList: ["Crofton Weed"], states: ["Qld", "NSW"], rate: "15", rateMax: "15", unit: "g/100L", rateText: "15 g/100L", notes: "Spray to thoroughly wet all foliage. Apply to actively growing weeds up to early flowering. Best results on younger plants." },
        { weed: "Fennel (Foeniculum vulgare)", pestList: ["Fennel"], states: ["NSW"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L", notes: "Apply to actively growing plants." },
        { weed: "Golden dodder (Cuscuta australis)", pestList: ["Golden Dodder"], states: ["SA", "NSW", "Qld", "Vic"], rate: "1", rateMax: "1", unit: "g/100L", rateText: "1 g/100L", notes: "Apply as a spot spray to point of run-off. Ensure correct coverage. Apply pre-flowering." },
        { weed: "Gorse (Ulex europaeus)", pestList: ["Gorse"], states: ["Vic", "Tas", "SA", "NSW"], rate: "15", rateMax: "15", unit: "g/100L", rateText: "15 g/100L + Pulse Penetrant 200 mL/100L", notes: "Apply to bushes up to 2 m tall. Ensure thorough spray penetration and coverage of the whole plant." },
        { weed: "Hawthorn (Crataegus laevigata)", pestList: ["Hawthorn"], states: ["NSW"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L", notes: "Apply when bushes are actively growing. Spray to thoroughly wet all foliage, but not to cause run-off." },
        { weed: "Inkweed (Phytolacca octandra)", pestList: ["Inkweed"], states: ["Qld", "NSW"], rate: "5", rateMax: "5", unit: "g/100L", rateText: "5 g/100L", notes: "Spray to thoroughly wet all foliage but not to cause run-off." },
        { weed: "Japanese sunflower (Tihonia diversifolia)", pestList: ["Japanese Sunflower"], states: ["NSW"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L" },
        { weed: "Lantana (Lantana camara)", pestList: ["Lantana"], states: ["Qld", "NSW"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L", notes: "Apply to bushes up to 2 m tall. Spray to thoroughly wet all foliage and stems. Should regrowth occur, retreatment will be necessary." },
        { weed: "Mistflower (Eupatorium riparium)", pestList: ["Mistflower"], states: ["Qld", "NSW"], rate: "5", rateMax: "5", unit: "g/100L", rateText: "5 g/100L", notes: "Apply to actively growing weeds up to early flowering." },
        { weed: "Noogoora burr (Xanthium pungens)", pestList: ["Noogoora Burr"], states: ["NSW"], rate: "7.5", rateMax: "7.5", unit: "g/100L", rateText: "7.5 g/100L", notes: "Apply to actively growing plants. Plants under moisture stress will not be controlled." },
        { weed: "Parthenium (Parthenium hysterophorus)", pestList: ["Parthenium"], states: ["Qld", "NSW"], rate: "5", rateMax: "5", unit: "g/100L", rateText: "5 g/100L", notes: "Spray to thoroughly wet all foliage but not to cause run-off." },
        { weed: "Privet (Ligustrum spp.)", pestList: ["Privet"], states: ["Qld", "NSW"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L", notes: "Apply to bushes up to 3 m high. Complete foliar spray coverage is essential for control." },
        { weed: "Ragwort (Senecio jacobaea)", pestList: ["Ragwort"], states: ["Vic", "Tas", "NSW"], rate: "5", rateMax: "5", unit: "g/100L", rateText: "5 g/100L", notes: "Apply to actively growing plants at rosette to cabbage stage." },
        { weed: "Rubber vine (Cryptostegia grandiflora)", pestList: ["Rubber Vine"], states: ["Qld"], rate: "15", rateMax: "15", unit: "g/100L", rateText: "15 g/100L", notes: "Apply to bushes up to 3 m tall. Apply Oct–Apr when bushes are actively growing. Ensure thorough spray coverage." },
        { weed: "Singapore daisy (Sphagneticola trilobata)", pestList: ["Singapore Daisy"], states: ["Qld"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L", notes: "Spray thoroughly to wet all foliage. Minimise contact with desirable species." },
        { weed: "Sweet briar (Rosa rubiginosa)", pestList: ["Sweet Briar"], states: ["NSW", "Tas", "SA", "Vic"], rate: "10", rateMax: "10", unit: "g/100L", rateText: "10 g/100L", notes: "Apply when bushes are actively growing. Avoid spraying when stressed or after leaf fall." },
        { weed: "Wild turnip (Brassica tournefortii)", pestList: ["Wild Turnip"], states: ["NSW"], rate: "5", rateMax: "5", unit: "g/100L", rateText: "5 g/100L", notes: "Apply to actively growing plants." }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // 7. NATIVE PASTURES — AERIAL APPLICATION (HELICOPTER)
    // ═══════════════════════════════════════════════════════
    {
      crop: "Native Pastures, Rights of Way — Aerial Application (Helicopter)",
      cropList: ["Native Pastures", "Rights Of Way", "Commercial Areas", "Industrial Areas"],
      weeds: [
        { weed: "Blackberry", pestList: ["Blackberry"], states: ["NSW", "Tas", "Vic"], rate: "160", rateMax: "160", unit: "g/ha", rateText: "160 g/ha", notes: "Apply when bushes are actively growing. Tas: Apply after petal fall. Vic: Apply Dec–Apr. Use not less than 100 L prepared spray/ha." }
      ]
    },
    {
      crop: "Flood Plains — Aerial Application (Helicopter)",
      cropList: ["Flood Plains"],
      weeds: [
        { weed: "Mimosa pigra", pestList: ["Mimosa Pigra"], states: ["NT"], rate: "50", rateMax: "60", unit: "g/ha", rateText: "50 or 60 g/ha", notes: "Use the higher rate when air temperature exceeds 35°C. Apply in at least 60 L/ha of clean water. Add a non-ionic surfactant. Apply when plant is actively growing." }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // 8. PASTURES, FORESTS, COMMERCIAL AREAS — WITH
    //    WEEDMASTER DUO / DST / CRUCIAL (TANK MIX)
    // ═══════════════════════════════════════════════════════
    {
      crop: "Pastures, Forests, Commercial Areas — with Weedmaster/Crucial Tank Mix",
      cropList: ["Pastures", "Forests", "Commercial Areas", "Rights Of Way", "Domestic Areas"],
      weeds: [
        { weed: "Blackberry (Rubus spp.) / Volunteer pine wildings (suppression only)", pestList: ["Blackberry", "Volunteer Pine Wildings"], states: ["All"], rate: "3", rateMax: "3", unit: "g/100L", rateText: "Handgun: 3 g/100L + Weedmaster Duo 4 L or DST 3.1 L or Crucial 2.4 L per 100 L. Boom: 60 g/ha + mix partners per ha", notes: "For blackberries, apply from flowering until prior to leaf yellowing. Use Pulse Penetrant at 500 mL per 100 L water. Pine wildings: apply to plants <50 cm when actively growing." },
        { weed: "Bracken (Pteridium esculentum)", pestList: ["Bracken"], states: ["All"], rate: "30", rateMax: "60", unit: "g/ha", rateText: "30–60 g/ha + Weedmaster Duo or DST or Crucial at label rates", notes: "Apply when fronds are fully unfurled but prior to first frosts. Use 60 g/ha rate in spring, tank mixture in autumn for best control. DO NOT disturb bracken for minimum 6 weeks after application." },
        { weed: "Fog grass (Holcus lanatus)", pestList: ["Fog Grass"], states: ["All"], rate: "30", rateMax: "30", unit: "g/ha", rateText: "30 g/ha + Weedmaster Duo or DST or Crucial at label rates", notes: "Apply when actively growing." },
        { weed: "Gorse (Ulex europaeus)", pestList: ["Gorse"], states: ["All"], rate: "30", rateMax: "30", unit: "g/ha", rateText: "30 g/ha + Weedmaster Duo or DST or Crucial at label rates", notes: "Apply when actively growing at any time of year, except spring." },
        { weed: "Lantana (Lantana camara)", pestList: ["Lantana"], states: ["All"], rate: "30", rateMax: "30", unit: "g/ha", rateText: "30 g/ha + Weedmaster Duo or DST or Crucial at label rates", notes: "Apply when actively growing. DO NOT apply during periods of summer drought stress." },
        { weed: "St John's wort (Hypericum perforatum)", pestList: ["St John's Wort"], states: ["All"], rate: "30", rateMax: "30", unit: "g/ha", rateText: "30 g/ha + Weedmaster Duo or DST or Crucial at label rates", notes: "Apply when actively growing from spring to summer." },
        { weed: "Sorrel (Rumex acetosella)", pestList: ["Sorrel"], states: ["All"], rate: "10", rateMax: "30", unit: "g/ha", rateText: "10–30 g/ha + Weedmaster Duo or DST or Crucial at label rates", notes: "Apply when actively growing. DO NOT apply during periods of summer drought stress." },
        { weed: "Sweet briar (Rosa rubiginosa)", pestList: ["Sweet Briar"], states: ["All"], rate: "30", rateMax: "30", unit: "g/ha", rateText: "30 g/ha + Weedmaster Duo or DST or Crucial at label rates", notes: "Apply when in full leaf, prior to leaf fall." },
        { weed: "Topped lavender (Lavandula stoechas)", pestList: ["Topped Lavender"], states: ["All"], rate: "30", rateMax: "30", unit: "g/ha", rateText: "30 g/ha + Weedmaster Duo or DST or Crucial at label rates", notes: "Apply when actively growing." }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // 9. ESTABLISHED PASTURES / PASTURE RENOVATION
    // ═══════════════════════════════════════════════════════
    {
      crop: "Established Pastures (Perennial Phalaris/Cocksfoot) or Pasture Renovation",
      cropList: ["Pastures", "Perennial Phalaris", "Perennial Cocksfoot", "Pasture Renovation"],
      weeds: [
        { weed: "Cape tulip (Homeria spp.)", pestList: ["Cape Tulip"], states: ["Vic", "SA", "NSW", "WA", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "Apply at bulb exhaustion usually during July/early August. More than one year of application may be required to obtain control." },
        { weed: "Annual clover (Trifolium spp.)", pestList: ["Annual Clover"], states: ["Vic", "SA", "NSW", "WA", "Qld", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "Apply before flowering." },
        { weed: "Dock spp. (Rumex spp.)", pestList: ["Dock"], states: ["All"], rate: "5", rateMax: "10", unit: "g/ha", rateText: "5 g/ha (seedlings), 10 g/ha (established)", notes: "Best results when applied in spring prior to bolting." },
        { weed: "Doublegee/Spiny emex/Three Cornered Jack (Emex australis)", pestList: ["Doublegee", "Spiny Emex", "Three Cornered Jack"], states: ["WA"], rate: "5", rateMax: "10", unit: "g/ha", rateText: "5–10 g/ha", notes: "Apply up to the 6 leaf stage. Use the higher rate on dense populations." },
        { weed: "Erodium/Storksbill/Wild geranium (Erodium spp.)", pestList: ["Erodium", "Storksbill", "Wild Geranium"], states: ["Vic", "SA", "NSW", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "Use the higher rate on dense populations. Spray before flowering." },
        { weed: "Annual medics (Medicago spp.)", pestList: ["Annual Medics"], states: ["Vic", "SA", "NSW", "WA", "Tas"], rate: "5", rateMax: "5", unit: "g/ha", rateText: "5 g/ha", notes: "For best results apply before flowering." },
        { weed: "Onion grass/Guildford grass (Romulea rosea)", pestList: ["Onion Grass", "Guildford Grass"], states: ["All"], rate: "15", rateMax: "15", unit: "g/ha", rateText: "15 g/ha", notes: "Apply at bulb exhaustion usually late June/July before onset of browning off. When mixing with glyphosate use 10 g/ha." },
        { weed: "Paterson's curse/Salvation Jane (Echium plantagineum)", pestList: ["Paterson's Curse", "Salvation Jane"], states: ["Vic", "SA", "NSW", "WA", "Qld", "Tas"], rate: "10", rateMax: "15", unit: "g/ha", rateText: "10 or 15 g/ha", notes: "Apply lower rate to small plants. Apply higher rate before bolting/flowering." },
        { weed: "Ragwort (Senecio jacobaea)", pestList: ["Ragwort"], states: ["Vic", "SA", "NSW", "Tas"], rate: "15", rateMax: "15", unit: "g/ha", rateText: "15 g/ha", notes: "Apply to actively growing plants at rosette to cabbage stage." },
        { weed: "Sorrel (Rumex acetosella)", pestList: ["Sorrel"], states: ["Vic", "SA", "NSW", "WA", "Tas"], rate: "5", rateMax: "10", unit: "g/ha", rateText: "5 g/ha (seedlings), 10 g/ha (established)", notes: "Best results when applied in spring prior to seed heads appearing." },
        { weed: "Soursob (Oxalis pes-caprae)", pestList: ["Soursob"], states: ["All"], rate: "5", rateMax: "10", unit: "g/ha", rateText: "5–10 g/ha", notes: "Use the higher rate on dense stands. Spray before flowering for best results." },
        { weed: "Wild garlic (Allium vineale)", pestList: ["Wild Garlic"], states: ["All"], rate: "15", rateMax: "15", unit: "g/ha", rateText: "15 g/ha", notes: "Apply at bulb exhaustion usually July to early August. More than one year of application may be required." }
      ]
    }
  ,

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER14357: Striga control — Non-crop/pasture/fence line/machinery ──
{
  crop: "Sugarcane — Exotic Striga spp. (PER14357)",
  cropList: ["Sugarcane"],
  permitNumber: "PER14357",
  weeds: [
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Broadleaf Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "1",
      rateMax: "1.5",
      unit: "kg/ha",
      stage: "Pre-emergent application",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Pendimethalin (1-1.5 kg/ha). As per label instructions."
    },
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Broadleaf Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "1.1",
      rateMax: "1.4",
      unit: "kg/ha",
      stage: "Pre-emergent application",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Trifluralin (1.1-1.4 kg/ha). As per label instructions."
    },
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Broadleaf Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "300",
      rateMax: "300",
      unit: "g/ha",
      stage: "Direct spraying of crop foliage",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Dicamba. Apply from underground attachment phase until 2 weeks before Striga flowering. WHP: No harvest, graze or cut for stock food for 7 days after application."
    },
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Broadleaf Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "1",
      rateMax: "2",
      unit: "kg/ha",
      stage: "Foliar spray",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). 2,4-D (amine salts, 1-2 kg/ha). As per label instructions."
    },
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Broadleaf Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "200",
      rateMax: "300",
      unit: "g/ha",
      stage: "Foliar spray",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Fluroxypyr (200-300 g/ha). As per label instructions."
    }
  ]
},
{
  crop: "Non-crop areas, forests, pastures — Exotic Striga spp. (PER14357)",
  cropList: ["Pasture", "Non-crop"],
  permitNumber: "PER14357",
  weeds: [
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Grass Weeds", "Woody Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "500",
      rateMax: "750",
      unit: "g/ha",
      stage: "Pre-emergent application",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Oxyfluorfen (500-750 g/ha). As per label instructions. WHP: No grazing until pasture re-established."
    },
    {
      weed: "Exotic Striga spp. (parasitic weed) among host grasses",
      pestList: ["Grass Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "280",
      rateMax: "280",
      unit: "g/ha",
      stage: "Direct spraying with surfactant",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Paraquat (280 g/ha) combined with oxyfluorfen. Improves Striga control and broadens spectrum. WHP: No grazing until pasture re-established."
    },
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Grass Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "300",
      rateMax: "300",
      unit: "g/ha",
      stage: "Direct spraying of non-crop plant foliage",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Dicamba. Apply from underground attachment phase until 2 weeks before Striga flowering. WHP: No grazing or cutting for stock feed for 7 days."
    },
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Grass Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "0.5",
      rateMax: "2",
      unit: "kg/ha",
      stage: "Foliar spray",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). 2,4-D (0.5-2 kg/ha). As per label instructions."
    },
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Grass Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "30",
      rateMax: "45",
      unit: "g/ha",
      stage: "Application for non-grazing after treatment",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Imazapyr (30-45 g/ha). WHP: No grazing or cutting treated vegetation for stock feed."
    },
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Grass Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "200",
      rateMax: "300",
      unit: "g/ha",
      stage: "Foliar spray",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Fluroxypyr (200-300 g/ha). As per label instructions."
    },
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Grass Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "5",
      rateMax: "10",
      unit: "g/ha",
      stage: "Foliar spray",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Metsulfuron-methyl (5-10 g/ha). As per label instructions."
    },
    {
      weed: "Exotic Striga spp. (parasitic weed)",
      pestList: ["Woody Weeds", "Parasitic Weeds"],
      states: ["QLD"],
      rate: "960",
      rateMax: "1680",
      unit: "g/ha",
      stage: "Herbicide application",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Triclopyr (960-1680 g/ha). As per label instructions."
    }
  ]
},
{
  crop: "Fence lines, non-arable areas — Glyphosate (PER14357)",
  cropList: ["Non-crop"],
  permitNumber: "PER14357",
  weeds: [
    {
      weed: "General vegetation control",
      pestList: ["Broadleaf Weeds", "Grass Weeds"],
      states: ["QLD"],
      rate: "270",
      rateMax: "540",
      unit: "g/ha",
      stage: "Foliar spray",
      note: "PERMIT PER14357 (exp. 31 Aug 2028). Glyphosate (270-540 g/ha) for fence lines and non-arable areas. As per label instructions."
    }
  ]
},

],

  // ═══════════════════════════════════════════════════════
  // RESTRAINTS, WITHHOLDING, COMPATIBILITY
  // ═══════════════════════════════════════════════════════
  restraints: [
    "DO NOT store a suspension of Associate for more than two days",
    "DO NOT apply to crops under stress",
    "DO NOT store tank mixes of Associate",
    "DO NOT apply if rainfall is expected within 2 hours (for woody weeds 4 hours)",
    "DO NOT use on furrow or flood irrigated crops",
    "DO NOT apply before the three leaf stage of the crop (post-emergent)",
    "DO NOT treat newly sown pastures as severe damage may occur",
    "DO NOT use on pasture seed crops",
    "DO NOT apply to weeds that are under stress or not actively growing"
  ],

  withholding: {
    harvest: "Cereals (solo): Not required when used as directed. Chickpeas (with Crucial/DST): 7 days. Cereals (mixtures with Agtryne/Agritone/Amicide/Tigrex/Tordon/Igran): 7 days. Cereals (mixtures with Bromicide MA): 14 days.",
    grazing: "Cereals (solo): Not required. Pastures: Not required. Cereals (mixtures with Agtryne/Agritone/Amicide/Tigrex/Tordon/Igran): 7 days. Cereals (mixtures with Bromicide MA): 14 days. Chickpeas: 7 days."
  },

  compatibility: {
    compatible: [
      "Nufarm Agtryne",
      "Bromicide MA",
      "Nufarm Kamba 750",
      "Broadstrike",
      "Fluroxypyr products",
      "Eclipse",
      "Diuron WG (900 g/kg)",
      "Nufarm Igran 500",
      "Jaguar",
      "Nufarm Archer 750/Lontrel",
      "Nufarm Agritone 750",
      "Metribuzin",
      "Starane",
      "Tigrex",
      "Tordon 242",
      "Tordon 75-D",
      "Nufarm Trooper 242",
      "Nufarm 2,4-D Amine 625",
      "Nufarm Amicide Advance 700",
      "Glyphosate (Nufarm Crucial, Weedmaster DST, Weedmaster Duo, Weedmaster Argo)",
      "Chlorpyrifos",
      "Omethoate"
    ],
    incompatible: [
      "Achieve",
      "Mataven 90",
      "Wildcat (reduced phalaris control)",
      "Tristar Advance (reduced phalaris control)"
    ],
    notes: [
      "DO NOT mix with Achieve or Mataven 90",
      "Reduced grass control when mixed with diclofop-methyl products",
      "DO NOT add surfactant when mixed with Diuron or Igran",
      "Some temporary crop yellowing may occur with chlorpyrifos or omethoate tank mixes"
    ]
  },

  recropping: {
    ph_56_85: {
      "10_days": ["Wheat"],
      "6_weeks": ["Barley", "Cereal Rye", "Triticale"],
      "9_months": ["Chickpeas", "Faba Beans", "Linseed", "Lucerne", "Lupins", "Medics", "Oats", "Peas", "Canola", "Safflower", "Subterranean Clover"],
      "14_months": ["Japanese Millet", "Maize", "Panorama Millet", "White French Millet", "Sorghum", "Soybeans", "Sunflower"]
    },
    ph_86_plus: "Tolerance of crops should be determined on a small scale before sowing into larger areas",
    ph_55_below: "12 months before oversowing grasses/legumes for rates >15 g/ha"
  },

  surfactant: {
    cereals: "Non-ionic surfactant (1000 g/L) at 100 mL/100L (0.1%)",
    pastures: "Non-ionic surfactant (1000 g/L) at 200 mL/100L (0.2%)",
    brushweeds: "Organosilicone penetrant (Pulse) at 200 mL/100L (0.2%) OR Mineral Oil at 1 L/100L (1%)",
    exceptions: "DO NOT add surfactant when mixed with Diuron or Igran"
  },

  sprayerCleanup: [
    "Drain tank, flush tank, boom, hoses with clean water (10 mins minimum)",
    "Fill tank with clean water + 300 mL household chlorine bleach (4%) per 100 L",
    "Flush through boom/hoses, stand for 15 mins with agitation",
    "Drain and repeat step 2",
    "Remove nozzles/screens and clean separately",
    "Rinse thoroughly with clean water to remove chlorine",
    "CAUTION: DO NOT use bleach with ammonia"
  ]
};
