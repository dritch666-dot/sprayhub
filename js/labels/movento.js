productDatabase['movento'] = {
    "name": "Bayer Movento 240 SC Insecticide",
    "activeIngredient": "240 g/L SPIROTETRAMAT",
    "company": "Bayer",
    "group": "Group 23 Insecticide",
    "formulation": "Suspension Concentrate (SC)",
    "modeOfAction": "Acetolactate synthase (ALS) inhibitor",
    "category": "Insecticides",
    "color": "#7e22ce",
    "apvma": "61864",
    "signalHeading": "Poison",
    "classification": {
        "type": "Insecticide",
        "target": ["Aphids", "Whitefly", "Mealybug", "Scale", "Mites", "Psyllids"],
        "timing": ["Post-emergent"]
    },

    "labelPdf": "Source labels/Bayer_Movento240SC_Label.pdf",
    "sdsPdf": "SDS Labels/MOVENTO_240SC_INSECTICIDE.pdf",

    "restraints": [
        "DO NOT apply if heavy rains or storms are forecast within 3 days.",
        "DO NOT make more than the maximum number of applications per season as specified in the crop directions."
    ],
    "withholding": {
        "harvest": "Citrus 21 days, Stone Fruit 21 days",
        "grazing": "DO NOT graze treated areas or cut for stock food"
    },
    "surfactant": "The addition of a non-ionic surfactant or an adjuvant like Agridex may be required for certain crops.",
    "compatibility": "Compatible with many common fungicides and insecticides. See label for specific tank mix partners.",
    "sprayerCleanup": "Thoroughly flush the sprayer with clean water after use.",

    "crops": [
      {
        crop: "Beans, peas (green) including snow peas and sugar snap peas",
        cropList: ["Beans", "peas (green) including snow peas", "sugar snap peas"],
        weeds: [
          { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H, G 7 days For snow peas and sugar snap peas only H, G 3 days. Monitor crops and commence applications once local thresholds are reached. Continue to monitor crops and make a subsequent application as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than a total of 2 applications per crop. Ensure thorough coverage of the target crop - refer \'Application\' section in GENERAL INSTRUCTIONS. * Always add a specified spray adjuvant - refer \'Adjuvant\' section in GENERAL INSTRUCTIONS. Note: This use is subject to a CropLife..." },
          { weed: "Silverleaf whitefly (Bemisia tabaci Biotype B)", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "400", unit: "mL/ha", notes: "WHP: H, G 7 days For snow peas and sugar snap peas only H, G 3 days." }
        ]
      },
      {
        crop: "Beans (green)",
        cropList: ["Beans (green)"],
        weeds: [
          { weed: "Western flower thrips (Frankliniella occidentalis), tomato thrips (Frankliniella schultzei)", pestList: ["Western Flower Thrips", "Tomato Thrips"], states: ["All"], rate: "300", rateMax: "400", unit: "mL/ha", notes: "WHP: H, G 7 days. Commence applications at the flower budding growth stage. Use the higher rate when periods of high pest pressure or rapid crop growth are evident or when longer residual control is desired. Continue to monitor crops and make a subsequent application as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than a total of 2 applications per crop. Movento 240 SC is not highly effective against the adult stage of thrips, however a decline in the total thrips pop..." }
        ]
      },
      {
        crop: "Brassica vegetables (broccoli, broccolini, Brussels sprouts, cabbage, cauliflower, kohlrabi)",
        cropList: ["Brassica vegetables (broccoli", "broccolini", "Brussels sprouts", "cabbage", "cauliflower", "kohlrabi)"],
        weeds: [
          { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H 3 days. Monitor crops and commence applications once local thresholds are reached. Where applicable, use the higher rate when periods of high pest pressure or rapid crop growth are evident or when longer residual control is desired or when crops are dense or large (e.g. from the commencement of head formation). Continue to monitor crops and make subsequent applications as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than 3 applications per crop. Ensure thoro..." },
          { weed: "Grey cabbage aphid (Brevicoryne brassicae)", pestList: ["Grey Cabbage Aphid"], states: ["All"], rate: "200", rateMax: "300", unit: "mL/ha", notes: "WHP: H 3 days." },
          { weed: "Silverleaf whitefly (Bemisia tabaci Biotype B)", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "400", unit: "mL/ha", notes: "WHP: H 3 days." },
          { weed: "Diamondback moth (Plutella xylostella)", pestList: ["Diamondback Moth"], states: ["All"], rate: "400", unit: "mL/ha", notes: "WHP: H 3 days. Monitor crops and commence insecticide applications once local economic spray thresholds are reached. Apply at egg hatch in crops with nil thresholds for damage. Otherwise, apply at egg hatch or very soon after egg hatch to target young larvae. Continue to monitor crops and make subsequent applications as necessary. Generally, spray intervals of 7-10 days are suitable. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than 3 applications per crop. Concentrate sprayi..." }
        ]
      },
      {
        crop: "Brassica leafy vegetables including bok choy, Chinese broccoli (gai lum/gai lan/kai lan), Chinese cabbage (pet sai/wombok/ haksukai), choy sum, gai choy/am soy/kai choy, kale, mibuna, mustard (leafy) including Indian mustard and mustard spinach (komatsuma), pak choy, tat soy (field and protected cropping systems)",
        cropList: ["Brassica leafy vegetables including bok choy", "Chinese broccoli (gai lum/gai lan/kai lan)", "Chinese cabbage (pet sai/wombok/ haksukai)", "choy sum", "gai choy/am soy/kai choy", "kale", "mibuna", "mustard (leafy) including Indian mustard", "mustard spinach (komatsuma)", "pak choy", "tat soy"],
        weeds: [
          { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H 3 days. Monitor crops and commence applications once local thresholds are reached. Where applicable, use the higher rate when periods of high pest pressure or rapid crop growth are evident or when longer residual control is desired or when crops are dense or large. Continue to monitor crops and make subsequent applications as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than 2 applications per crop. Ensure thorough coverage of the target crop - refer \'Applic..." },
          { weed: "Grey cabbage aphid (Brevicoryne brassicae)", pestList: ["Grey Cabbage Aphid"], states: ["All"], rate: "200", rateMax: "300", unit: "mL/ha", notes: "WHP: H 3 days." },
          { weed: "Silverleaf whitefly (Bemisia tabaci Biotype B)", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "400", unit: "mL/ha", notes: "WHP: H 3 days." },
          { weed: "Diamondback moth (Plutella xylostella)", pestList: ["Diamondback Moth"], states: ["All"], rate: "400", unit: "mL/ha", notes: "WHP: H 3 days. Monitor crops and commence insecticide applications once local economic spray thresholds are reached. Apply at egg hatch in crops with nil thresholds for damage. Otherwise, apply at egg hatch or very soon after egg hatch to target young larvae. Continue to monitor crops and make subsequent applications as necessary. Generally, spray intervals of 7-10 days are suitable. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than 2 applications per crop. Concentrate sprayi..." }
        ]
      },
      {
        crop: "Celery and rhubarb",
        cropList: ["Celery", "rhubarb"],
        weeds: [
          { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H 3 days. Monitor crops and commence applications once local thresholds are reached. Where applicable, use the higher rate when periods of high pest pressure or rapid crop growth are evident or when longer residual control is desired. Continue to monitor crops and make subsequent applications as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than 2 applications per crop. Movento 240 SC is not highly effective against the adult stage of thrips, however a decline ..." },
          { weed: "Cotton aphid (Aphis gossypii)", pestList: ["Cotton Aphid"], states: ["All"], rate: "200", rateMax: "300", unit: "mL/ha", notes: "WHP: H 3 days." },
          { weed: "Western flower thrips (Frankliniella occidentalis), tomato thrips (Frankliniella schultzei), plague thrips (Thrips imaginis)", pestList: ["Western Flower Thrips", "Tomato Thrips", "Plague Thrips"], states: ["All"], rate: "300", rateMax: "400", unit: "mL/ha", notes: "WHP: H 3 days." }
        ]
      },
      {
        crop: "Cucurbits (field and protected cropping systems)",
        cropList: ["Cucurbits"],
        weeds: [
          { weed: "Cotton aphid (Aphis gossypii)", pestList: ["Cotton Aphid"], states: ["All"], rate: "200", rateMax: "300", unit: "mL/ha", notes: "WHP: H 1 day. Monitor crops and commence applications once local thresholds are reached. Where applicable, use the higher rate when periods of high pest pressure or rapid crop growth are evident or when longer residual control is desired or when crops are dense or large. Continue to monitor crops and make subsequent applications as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than 3 applications per crop. Dilute spraying is recommended for trellised crops (e.g. gl..." },
          { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H 1 day." },
          { weed: "Silverleaf whitefly (Bemisia tabaci Biotype B)", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "400", unit: "mL/ha", notes: "WHP: H 1 day." }
        ]
      },
      {
        crop: "Eggplant, peppers (capsicum and chilli), tomatoes (field and protected cropping systems)",
        cropList: ["Eggplant", "peppers (capsicum", "chilli)", "tomatoes"],
        weeds: [
          { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H 1 day. Monitor crops and commence applications once local thresholds are reached. Where applicable, use the higher rate when periods of high pest pressure or rapid crop growth are evident or when longer residual control is desired or when crops are dense or large. Continue to monitor crops and make subsequent applications as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than 3 applications per crop. Movento 240 SC is not highly effective against the adult st..." },
          { weed: "Silverleaf whitefly (Bemisia tabaci Biotype B), western flower thrips (Frankliniella occidentalis)", pestList: ["Silverleaf Whitefly", "Western Flower Thrips"], states: ["All"], rate: "400", unit: "mL/ha", notes: "WHP: H 1 day." }
        ]
      },
      {
        crop: "Herbs (field and protected cropping systems)",
        cropList: ["Herbs"],
        weeds: [
          { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H 3 days. Monitor crops and commence applications once local thresholds are reached. Where applicable, use the higher rate when periods of high pest pressure or rapid crop growth are evident or when longer residual control is desired. Continue to monitor crops and make subsequent applications as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than 3 applications per crop. Movento 240 SC is not highly effective against the adult stage of thrips, however a decline ..." },
          { weed: "Cotton aphid (Aphis gossypii)", pestList: ["Cotton Aphid"], states: ["All"], rate: "200", rateMax: "300", unit: "mL/ha", notes: "WHP: H 3 days." },
          { weed: "Western flower thrips (Frankliniella occidentalis), tomato thrips (Frankliniella schultzei), plague thrips (Thrips imaginis)", pestList: ["Western Flower Thrips", "Tomato Thrips", "Plague Thrips"], states: ["All"], rate: "300", rateMax: "400", unit: "mL/ha", notes: "WHP: H 3 days." }
        ]
      },
      {
        crop: "Leafy vegetables (except lettuce) including chard, cress, rocket, silverbeet, spinach (field and protected cropping systems)",
        cropList: ["Leafy vegetables including chard", "cress", "rocket", "silverbeet", "spinach"],
        weeds: [
          { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H 3 days. Monitor crops and commence applications once local thresholds are reached. Continue to monitor crops and make subsequent applications as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than 3 applications per crop. Ensure thorough coverage of the target crop - refer \'Application\' section in GENERAL INSTRUCTIONS. * Always add a specified spray adjuvant - refer \'Adjuvant\' section in GENERAL INSTRUCTIONS. Note: This use is subject to a CropLife resistance ..." }
        ]
      },
      {
        crop: "Lettuce (head lettuce and leafy lettuce) (field and protected cropping systems)",
        cropList: ["Lettuce (head lettuce", "leafy lettuce)"],
        weeds: [
          { weed: "Brown sowthistle aphid (Uroleucon sonchi), currant lettuce aphid (Nasonovia ribisnigri), green peach aphid (Myzus persicae)", pestList: ["Brown Sowthistle Aphid", "Currant Lettuce Aphid", "Green Peach Aphid"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H 1 day. Monitor crops and commence applications once local thresholds are reached. Continue to monitor crops and make subsequent applications as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than 3 applications per crop. Movento 240 SC is not highly effective against the adult stage of thrips, however, a decline in the total thrips population will occur over time as the juvenile stages are controlled. Ensure thorough coverage of the target crop - refer 'Appli..." },
          { weed: "Western flower thrips (Frankliniella occidentalis)", pestList: ["Western Flower Thrips"], states: ["All"], rate: "300", rateMax: "400", unit: "mL/ha", notes: "WHP: H 1 day." }
        ]
      },
      {
        crop: "Chicory, endive, radicchio (field and protected cropping systems)",
        cropList: ["Chicory", "endive", "radicchio"],
        weeds: [
          { weed: "Brown sowthistle aphid (Uroleucon sonchi), currant lettuce aphid (Nasonovia ribisnigri), green peach aphid (Myzus persicae)", pestList: ["Brown Sowthistle Aphid", "Currant Lettuce Aphid", "Green Peach Aphid"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H 3 days." }
        ]
      },
      {
        crop: "Onions, bulb",
        cropList: ["Onions", "bulb"],
        weeds: [
          { weed: "Onion thrips (Thrips tabaci)", pestList: ["Onion Thrips"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H 7 days. Monitor crops and commence applications once local thresholds are reached. Continue to monitor crops and make a subsequent application as necessary. Do not re-apply within 14 days of a previous Movento spray (onions, bulb). Do not re-apply within 7 days of a previous Movento spray (bulb vegetables excluding onions, bulb). Do not apply more than 2 applications per crop. Movento 240 SC is not highly effective against the adult stage of thrips, however a decline in the total thrips population wi..." }
        ]
      },
      {
        crop: "Bulb vegetables excluding onions, bulb",
        cropList: ["Bulb vegetables excluding onions", "bulb"],
        weeds: [
          { weed: "Onion thrips (Thrips tabaci)", pestList: ["Onion Thrips"], states: ["All"], rate: "200", unit: "mL/ha" },
          { weed: "Western flower thrips (Frankliniella occidentalis), tomato thrips (Frankliniella schultzei), plague thrips (Thrips imaginis)", pestList: ["Western Flower Thrips", "Tomato Thrips", "Plague Thrips"], states: ["All"], rate: "300", rateMax: "400", unit: "mL/ha" }
        ]
      },
      {
        crop: "Potatoes, sweet potatoes",
        cropList: ["Potatoes", "sweet potatoes"],
        weeds: [
          { weed: "Green peach aphid (Myzus persicae)", pestList: ["Green Peach Aphid"], states: ["All"], rate: "200", unit: "mL/ha", notes: "WHP: H 7 days. Monitor crops and commence applications once local thresholds are reached. Continue to monitor crops and make subsequent applications as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than 3 applications per crop. Ensure thorough coverage of the target crop - refer \'Application\' section in GENERAL INSTRUCTIONS. * Always add a specified spray adjuvant - refer \'Adjuvant\' section in GENERAL INSTRUCTIONS. Note: These uses are subject to CropLife resistance..." },
          { weed: "Silverleaf whitefly (Bemisia tabaci Biotype B)", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "400", unit: "mL/ha", notes: "WHP: H 7 days." }
        ]
      },
      {
        crop: "Sweet corn",
        cropList: ["Sweet corn"],
        weeds: [
          { weed: "Corn aphid (Rhopalosiphum maidis)", pestList: ["Corn Aphid"], states: ["All"], rate: "200", rateMax: "300", unit: "mL/ha", notes: "WHP: H, G 7 days. Monitor crops and commence applications once local thresholds are reached. DO NOT apply prior to tassel emergence. Use the higher rate when periods of high pest pressure or rapid crop growth are evident (e.g. during silking) or when longer residual control is desired or when crop (e.g. corn cob) is advanced. Continue to monitor crops and make a subsequent application as necessary. Do not re-apply within 7 days of a previous Movento spray. Do not apply more than a total of 2 applications per c..." }
        ]
      },
      {
        crop: "Blueberries",
        cropList: ["Blueberries"],
        weeds: [
          { weed: "Soft brown scale (Coccus hesperidum), white wax scale (Ceroplastes destructor)", pestList: ["Soft Brown Scale", "White Wax Scale"], states: ["All"], rate: "40", unit: "mL/100L", notes: "WHP: 1 day. Following fruit set, monitor crops and commence applications once local pest thresholds are reached. A follow up application may be required at 14-21 days if monitoring indicates it is necessary. Do not re-apply within 14 days of a previous Movento spray. Do not apply more than 2 applications per crop. Ensure thorough coverage of the target crop - refer \'Application\' section in GENERAL INSTRUCTIONS. * Always add a specified spray adjuvant - refer \'Adjuvant\' section in GENERAL INSTRUCTIONS." }
        ]
      },
      {
        crop: "Citrus",
        cropList: ["Citrus"],
        weeds: [
          { weed: "Red scale, mussel scale, white louse scale (citrus snow scale)", pestList: ["Red Scale", "Mussel Scale", "White Louse Scale (Citrus Snow Scale)"], states: ["All"], rate: "20", rateMax: "30", unit: "mL/100L", notes: "WHP: H 3 weeks. Monitor crops and commence applications after flowering at the onset of crawler emergence or when pest numbers reach economic threshold. Continue to monitor crops and apply a second application 21-35 days after the first application if required. Applications to an established pest population where mature adults are present and dominate the population will be ineffective. Where applicable, use the higher rate under high pest pressure or to provide longer residual control. For red scale the hig..." },
          { weed: "Soft brown scale", pestList: ["Soft Brown Scale"], states: ["All"], rate: "30", unit: "mL/100L", notes: "WHP: H 3 weeks." },
          { weed: "Pink wax scale, citrus mealybug (suppression only)", pestList: ["Pink Wax Scale", "Citrus Mealybug (Suppression Only)"], states: ["All"], rate: "30", rateMax: "40", unit: "mL/100L", notes: "WHP: H 3 weeks." },
          { weed: "Kelly's citrus thrips", pestList: ["Kelly\u2019S Citrus Thrips"], states: ["All"], rate: "20", rateMax: "30", unit: "mL/100L", notes: "WHP: H 3 weeks. Monitor crops from flowering onwards for the presence of Kelly's citrus thrips. Apply Movento, after flowering, once local pest thresholds are reached. A single application may be suitable where thrips pressure is low. Continue to monitor crops and where thrips pressure is moderate to high apply a second application, no less than 14 days after the first, and prior to calyx closure. Use the higher rate under high pest pressure or to provide longer residual control. DO NOT exceed 4.0 L of Moven..." }
        ]
      },
      {
        crop: "Grapes",
        cropList: ["Grapes"],
        weeds: [
          { weed: "Longtailed mealybug (Pseudococcus longispinus), tuber mealybug (Pseudococcus virburni), grapevine scale (Parthenolecani um persicae) (suppression only), plague thrips (Thrips imaginis) (suppression only), northern plague thrips (Thrips safrus) (suppression only)", pestList: ["Longtailed Mealybug", "Tuber Mealybug", "Grapevine Scale (Suppression Only)", "Plague Thrips (Suppression Only)", "Northern Plague Thrips (Suppression Only)"], states: ["All"], rate: "40", unit: "mL/100L", notes: "WHP: H 4 weeks**. Monitor crops following bud burst. Commence applications at the onset of crawler emergence or when pest numbers reach an economic threshold. To ensure there is sufficient foliage for product uptake do not apply prior to 6 leaf stage (EL 13). Mealybug and grapevine scale Continue to monitor crops and apply a second application 21 to 28 days after the first application. Thrips The peak time for thrips damage in grape vines is during flowering and berry set. To obtain optimum thrips suppression,..." }
        ]
      },
      {
        crop: "Mangoes (Post flowering applications)",
        cropList: ["Mangoes"],
        weeds: [
          { weed: "White mango scale, citrus mealybug (suppression only)", pestList: ["White Mango Scale", "Citrus Mealybug (Suppression Only)"], states: ["All"], rate: "30", rateMax: "40", unit: "mL/100L", notes: "WHP: H 14 days. Monitor crops and commence applications from immediately after flowering coinciding with crawler emergence. Continue to monitor crops and apply a second application 21-35 days after the first application if required. Use the higher rate under high pest pressure or to provide longer residual control. Do not apply more than two applications of Movento post-flowering (i.e. between fruit set and harvest)." },
          { weed: "Pink wax scale", pestList: ["Pink Wax Scale"], states: ["All"], rate: "30", rateMax: "40", unit: "mL/100L", notes: "WHP: H 14 days." }
        ]
      },
      {
        crop: "Mangoes (Post harvest applications - no fruit)",
        cropList: ["Mangoes"],
        weeds: [
          { weed: "White mango scale, pink wax scale", pestList: ["White Mango Scale", "Pink Wax Scale"], states: ["All"], rate: "30", rateMax: "40", unit: "mL/100L", notes: "WHP: -. Apply after harvest and after tree pruning (if performed) to ensure good scale control on new growth. Use the higher rate under high pest pressure or to provide longer residual control. Do not apply within two weeks before the beginning of flowering. Apply thoroughly to ensure complete coverage. Apply by dilute or concentrate spraying equipment. Apply the same total amount of product to the target crop whether applying this product by dilute or concentrate spraying methods. For concentrate sp..." }
        ]
      },
      {
        crop: "Passionfruit",
        cropList: ["Passionfruit"],
        weeds: [
          { weed: "Red scale", pestList: ["Red Scale"], states: ["All"], rate: "20", rateMax: "30", unit: "mL/100L", notes: "WHP: H 3 days. Monitor crops and commence applications immediately after peak flowering coinciding with the onset of crawler emergence or when pest numbers reach economic threshold. Continue to monitor crops and apply a second application no less than 21 days after the first application if required. Where applicable, use the higher rate under high pest pressure or to provide longer residual control or when crops are dense. For red scale the higher rate will provide control of an established population of th..." },
          { weed: "Citrus mealybug (suppression only)", pestList: ["Citrus Mealybug (Suppression Only)"], states: ["All"], rate: "40", unit: "mL/100L", notes: "WHP: H 3 days." }
        ]
      },
      {
        crop: "Pineapples",
        cropList: ["Pineapples"],
        weeds: [
          { weed: "Pineapple mealybug (Dysmicoccus brevipes)", pestList: ["Pineapple Mealybug"], states: ["All"], rate: "750", unit: "mL/ha", notes: "WHP: 14 days. Monitor crops and commence applications once local pest thresholds are reached. A follow up application may be required at 14-21 days if monitoring indicates it is necessary. Do not re-apply within 14 days of a previous Movento spray. Do not apply more than 2 applications per crop. Ensure thorough coverage of the target crop - refer \'Application\' section in GENERAL INSTRUCTIONS. * Always add a specified spray adjuvant - refer \'Adjuvant\' section in GENERAL INSTRUCTIONS. Low water volumes are l..." }
        ]
      },
      {
        crop: "Pome fruit",
        cropList: ["Pome fruit"],
        weeds: [
          { weed: "Longtailed mealybug (Pseudococcus longispinus), tuber mealybug (Pseudococcus virburni), woolly apple aphid (Eriosoma lanigerum) (suppression only)", pestList: ["Longtailed Mealybug", "Tuber Mealybug", "Woolly Apple Aphid (Suppression Only)"], states: ["All"], rate: "40", unit: "mL/100L", notes: "WHP: H 3 weeks. Monitor crops following flowering. Commence applications at the onset of crawler emergence or when pest numbers reach an economic threshold. To ensure there is sufficient foliage for product uptake; For apples, do not apply prior to petal fall. For pears, do not apply prior to fruitlets reaching 10 mm in diameter. Mealybug and woolly apple aphid: Continue to monitor crops and apply a second application 14 to 28 days after the first application. San Jose scale: Continue monitoring and apply fu..." },
          { weed: "San Jose scale (Quadraspidiotus perniciosus)", pestList: ["San Jose Scale"], states: ["All"], rate: "30", unit: "mL/100L", notes: "WHP: H 3 weeks." }
        ]
      },
      {
        crop: "Stone fruit",
        cropList: ["Stone fruit"],
        weeds: [
          { weed: "Tuber mealybug (Pseudococcus virburni), longtailed mealybug (Pseudococcus longispinus)", pestList: ["Tuber Mealybug", "Longtailed Mealybug"], states: ["All"], rate: "40", unit: "mL/100L", notes: "WHP: H 3 weeks. Monitor crops following petal fall. Commence applications at the onset of crawler emergence or when pest numbers reach an economic threshold. To ensure there is sufficient foliage for product uptake do not apply prior to shuck fall. Mealybug: Continue to monitor crops and apply a second application 14 to 28 days after the first application. Aphids: Continue to monitor crops and apply a second application 14 to 21 days after the first application if required. San Jose scale: Continue monitorin..." },
          { weed: "Black cherry aphid (Myzus cerasi), black peach aphid (Brachycaudus persicae), San Jose scale (Quadraspidiotus perniciosus)", pestList: ["Black Cherry Aphid", "Black Peach Aphid", "San Jose Scale"], states: ["All"], rate: "30", unit: "mL/100L", notes: "WHP: H 3 weeks." }
        ]
      },
      {
        crop: "Cotton",
        cropList: ["Cotton"],
        weeds: [
          { weed: "Silverleaf whitefly (Bemisia tabaci)", pestList: ["Silverleaf Whitefly"], states: ["All"], rate: "400", unit: "mL/ha", notes: "WHP: H 3 weeks G Refer to grazing WHP statement below.. Monitor crops and commence applications once local thresholds are reached. Use the higher rate when periods of high pest pressure or rapid crop growth are evident, when longer residual control is desired or when crops are well advanced. Continue to monitor crops and make a subsequent application as necessary. Do not re-apply within 14 days of a previous Movento spray. Do not apply more than 2 applications per crop. Movento may not control silverleaf whitefly adults and eggs, however a decline..." },
          { weed: "Cotton aphid (Aphis gossypii)", pestList: ["Cotton Aphid"], states: ["All"], rate: "300", rateMax: "400", unit: "mL/ha", notes: "WHP: H 3 weeks G Refer to grazing WHP statement below.." },
          { weed: "Cotton mealybug (Phenacoccus solenopsis)", pestList: ["Cotton Mealybug"], states: ["All"], rate: "400", unit: "mL/ha", notes: "WHP: H 3 weeks G Refer to grazing WHP statement below.. Monitor crops and commence applications when adults are observed. Apply two applications 14 days apart. Do not re-apply within 14 days of a previous Movento spray. Do not apply more than 2 applications per crop. Ensure thorough coverage of the target crop - refer \'Application\' section in GENERAL INSTRUCTIONS. *Always add a specified spray adjuvant - refer \'Adjuvant\' section in GENERAL INSTRUCTIONS." }
        ]
      },
      {
        crop: "Peanuts",
        cropList: ["Peanuts"],
        weeds: [
          { weed: "Pineapple mealybug (Dysmicoccus brevipes), leafhoppers (Austroasca viridigrisea & Anzygina spp.) (suppression of low to moderate leafhopper populations only)", pestList: ["Pineapple Mealybug", "Leafhoppers (Suppression Of Low To Moderate Leafhopper Populations Only)"], states: ["All"], rate: "400", unit: "mL/ha", notes: "WHP: H - G 14 days. Monitor crops and commence applications once local pest thresholds are reached. A follow up application may be required at 14-21 days if monitoring indicates it is necessary. Do not re- apply within 14 days of a previous Movento spray. Do not apply more than 2 applications per crop. Ensure thorough coverage of the target crop - refer \'Application\' section in GENERAL INSTRUCTIONS. * Always add a specified spray adjuvant - refer \'Adjuvant\' section in GENERAL INSTRUCTIONS." }
        ]
      }
,

// ═══════════════════════════════════════════════
// ═══ PERMIT USES ═══
// ═══════════════════════════════════════════════

// ── PER84245: Potato, Sweet Potato, Tomato, Capsicum, Chilli, Pepper, Eggplant — Potato Psyllid ──
{
  crop: "Potato — Potato Psyllid (PER84245)",
  cropList: ["Potato"],
  permitNumber: "PER84245",
  weeds: [
    {
      weed: "Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Psyllids", "Potato Psyllid"],
      states: ["All"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Target pests at juvenile stage. Apply by foliar application using calibrated boom sprayer.",
      note: "PERMIT PER84245 (exp. 31/12/2029). Max 3 treatments per crop, min 7 days between. Max 2 consecutive sprays of spirotetramat. Rotate with different MoA group. WHP: 7 days."
    }
  ]
},
{
  crop: "Sweet Potato — Potato Psyllid (PER84245)",
  cropList: ["Sweet Potato"],
  permitNumber: "PER84245",
  weeds: [
    {
      weed: "Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Psyllids", "Potato Psyllid"],
      states: ["All"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Target pests at juvenile stage. Apply by foliar application using calibrated boom sprayer.",
      note: "PERMIT PER84245 (exp. 31/12/2029). Max 3 treatments per crop, min 7 days between. Max 2 consecutive sprays of spirotetramat. Rotate with different MoA group. WHP: 7 days."
    }
  ]
},
{
  crop: "Tomato — Potato Psyllid (PER84245)",
  cropList: ["Tomato"],
  permitNumber: "PER84245",
  weeds: [
    {
      weed: "Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Psyllids", "Potato Psyllid"],
      states: ["All"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Target pests at juvenile stage. Apply by foliar application using calibrated boom sprayer. Field and protected cropping systems.",
      note: "PERMIT PER84245 (exp. 31/12/2029). Max 3 treatments per crop, min 7 days between. Max 2 consecutive sprays of spirotetramat. Rotate with different MoA group. WHP: 1 day."
    }
  ]
},
{
  crop: "Capsicum — Potato Psyllid (PER84245)",
  cropList: ["Capsicum"],
  permitNumber: "PER84245",
  weeds: [
    {
      weed: "Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Psyllids", "Potato Psyllid"],
      states: ["All"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Target pests at juvenile stage. Apply by foliar application using calibrated boom sprayer. Field and protected cropping systems.",
      note: "PERMIT PER84245 (exp. 31/12/2029). Max 3 treatments per crop, min 7 days between. Max 2 consecutive sprays of spirotetramat. Rotate with different MoA group. WHP: 1 day."
    }
  ]
},
{
  crop: "Chilli — Potato Psyllid (PER84245)",
  cropList: ["Chilli"],
  permitNumber: "PER84245",
  weeds: [
    {
      weed: "Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Psyllids", "Potato Psyllid"],
      states: ["All"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Target pests at juvenile stage. Apply by foliar application using calibrated boom sprayer. Field and protected cropping systems.",
      note: "PERMIT PER84245 (exp. 31/12/2029). Max 3 treatments per crop, min 7 days between. Max 2 consecutive sprays of spirotetramat. Rotate with different MoA group. WHP: 1 day."
    }
  ]
},
{
  crop: "Pepper — Potato Psyllid (PER84245)",
  cropList: ["Pepper"],
  permitNumber: "PER84245",
  weeds: [
    {
      weed: "Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Psyllids", "Potato Psyllid"],
      states: ["All"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Target pests at juvenile stage. Apply by foliar application using calibrated boom sprayer. Field and protected cropping systems.",
      note: "PERMIT PER84245 (exp. 31/12/2029). Max 3 treatments per crop, min 7 days between. Max 2 consecutive sprays of spirotetramat. Rotate with different MoA group. WHP: 1 day."
    }
  ]
},
{
  crop: "Eggplant — Potato Psyllid (PER84245)",
  cropList: ["Eggplant"],
  permitNumber: "PER84245",
  weeds: [
    {
      weed: "Potato Psyllid (Bactericera cockerelli)",
      pestList: ["Psyllids", "Potato Psyllid"],
      states: ["All"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Target pests at juvenile stage. Apply by foliar application using calibrated boom sprayer. Field and protected cropping systems.",
      note: "PERMIT PER84245 (exp. 31/12/2029). Max 3 treatments per crop, min 7 days between. Max 2 consecutive sprays of spirotetramat. Rotate with different MoA group. WHP: 1 day."
    }
  ]
},

// ── PER84804: Stone Fruit — Western Flower Thrips ──
{
  crop: "Stone Fruit — Western Flower Thrips (PER84804)",
  cropList: ["Stone Fruit"],
  permitNumber: "PER84804",
  weeds: [
    {
      weed: "Western Flower Thrips (Frankliniella occidentalis)",
      pestList: ["Thrips", "Western Flower Thrips"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "40",
      rateMax: "40",
      unit: "mL/100L",
      stage: "Apply at first signs of WFT infestation using calibrated boom sprayer, airblast sprayer, or similar. Ensure thorough and uniform coverage of all leaf surfaces.",
      note: "PERMIT PER84804 (exp. 31/12/2028). Not highly effective against adults; controls juvenile stages. Max 2 applications per crop, min 14 days between. Observe WFT Insecticide Resistance Management Strategy. WHP: 3 weeks."
    }
  ]
},

// ── PER88359: Banana — Banana Aphid ──
{
  crop: "Banana — Banana Aphid (PER88359)",
  cropList: ["Banana"],
  permitNumber: "PER88359",
  weeds: [
    {
      weed: "Banana Aphid (Pentalonia nigronervosa) - Vector of banana bunchy top virus",
      pestList: ["Aphids", "Banana Aphid"],
      states: ["QLD", "NSW", "NT", "WA"],
      rate: "7.5",
      rateMax: "10",
      unit: "mL/stool",
      stage: "Trunk injection. Inject 15 cm from plant base, off-centre, downward angle, 5-10 cm depth. Apply within 3 months after harvest or nurse-suckering. Treat only followers at least 1.0 m tall.",
      note: "PERMIT PER88359 (exp. 31/07/2028). Inject undiluted or diluted to max 10 mL total volume. Do not treat after bell emergence. Do not inject plant centre. Not required WHP when used as directed."
    }
  ]
},

// ── PER88640: Snow Peas — Leafminers ──
{
  crop: "Snow Peas — Leafminers (PER88640)",
  cropList: ["Snow Peas"],
  permitNumber: "PER88640",
  weeds: [
    {
      weed: "Leafminers (Liriomyza spp., including vegetable leafminer, pea leafminer, American serpentine leafminer)",
      pestList: ["Leafminers", "Vegetable Leafminer"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Apply when leafminers first appear. Field and protected cropping systems. Apply by boomspray. Use max 1000 L/ha dilute spray.",
      note: "PERMIT PER88640 (exp. 28/02/2026). Suppression only. Max 2 applications per crop, min 7 days between. Add Agridex or Hasten adjuvant (0.5-1.0 L/ha). WHP: 3 days."
    }
  ]
},
{
  crop: "Sugar Snap Peas — Leafminers (PER88640)",
  cropList: ["Sugar Snap Peas"],
  permitNumber: "PER88640",
  weeds: [
    {
      weed: "Leafminers (Liriomyza spp., including vegetable leafminer, pea leafminer, American serpentine leafminer)",
      pestList: ["Leafminers", "Vegetable Leafminer"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Apply when leafminers first appear. Field and protected cropping systems. Apply by boomspray. Use max 1000 L/ha dilute spray.",
      note: "PERMIT PER88640 (exp. 28/02/2026). Suppression only. Max 2 applications per crop, min 7 days between. Add Agridex or Hasten adjuvant (0.5-1.0 L/ha). WHP: 3 days."
    }
  ]
},
{
  crop: "Lettuce — Leafminers (PER88640)",
  cropList: ["Lettuce"],
  permitNumber: "PER88640",
  weeds: [
    {
      weed: "Leafminers (Liriomyza spp., including vegetable leafminer, pea leafminer, American serpentine leafminer)",
      pestList: ["Leafminers", "Vegetable Leafminer"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Apply when leafminers first appear. Field and protected cropping systems. Apply by boomspray. Use max 1000 L/ha dilute spray.",
      note: "PERMIT PER88640 (exp. 28/02/2026). Suppression only. Max 3 applications per crop, min 7 days between. Add Agridex or Hasten adjuvant (0.5-1.0 L/ha). WHP: 1 day."
    }
  ]
},
{
  crop: "Parsley — Leafminers (PER88640)",
  cropList: ["Parsley"],
  permitNumber: "PER88640",
  weeds: [
    {
      weed: "Leafminers (Liriomyza spp., including vegetable leafminer, pea leafminer, American serpentine leafminer)",
      pestList: ["Leafminers", "Vegetable Leafminer"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Apply when leafminers first appear. Apply by boomspray. Use max 1000 L/ha dilute spray.",
      note: "PERMIT PER88640 (exp. 28/02/2026). Suppression only. Max 3 applications per crop, min 7 days between. Add Agridex or Hasten adjuvant (0.5-1.0 L/ha). WHP: 3 days."
    }
  ]
},
{
  crop: "Green Beans — Leafminers (PER88640)",
  cropList: ["Green Beans"],
  permitNumber: "PER88640",
  weeds: [
    {
      weed: "Leafminers (Liriomyza spp., including vegetable leafminer, pea leafminer, American serpentine leafminer)",
      pestList: ["Leafminers", "Vegetable Leafminer"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Apply when leafminers first appear. Field cropping systems. Apply by boomspray. Use max 1000 L/ha dilute spray.",
      note: "PERMIT PER88640 (exp. 28/02/2026). Suppression only. Max 2 applications per crop, min 7 days between. Add Agridex or Hasten adjuvant (0.5-1.0 L/ha). WHP: 7 days."
    }
  ]
},
{
  crop: "Celery — Leafminers (PER88640)",
  cropList: ["Celery"],
  permitNumber: "PER88640",
  weeds: [
    {
      weed: "Leafminers (Liriomyza spp., including vegetable leafminer, pea leafminer, American serpentine leafminer)",
      pestList: ["Leafminers", "Vegetable Leafminer"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Apply when leafminers first appear. Field cropping systems. Apply by boomspray. Use max 1000 L/ha dilute spray.",
      note: "PERMIT PER88640 (exp. 28/02/2026). Suppression only. Max 2 applications per crop, min 7 days between. Add Agridex or Hasten adjuvant (0.5-1.0 L/ha). WHP: 3 days."
    }
  ]
},
{
  crop: "Rhubarb — Leafminers (PER88640)",
  cropList: ["Rhubarb"],
  permitNumber: "PER88640",
  weeds: [
    {
      weed: "Leafminers (Liriomyza spp., including vegetable leafminer, pea leafminer, American serpentine leafminer)",
      pestList: ["Leafminers", "Vegetable Leafminer"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Apply when leafminers first appear. Field cropping systems. Apply by boomspray. Use max 1000 L/ha dilute spray.",
      note: "PERMIT PER88640 (exp. 28/02/2026). Suppression only. Max 2 applications per crop, min 7 days between. Add Agridex or Hasten adjuvant (0.5-1.0 L/ha). WHP: 3 days."
    }
  ]
},
{
  crop: "Eggplant — Leafminers (PER88640)",
  cropList: ["Eggplant"],
  permitNumber: "PER88640",
  weeds: [
    {
      weed: "Leafminers (Liriomyza spp., including vegetable leafminer, pea leafminer, American serpentine leafminer)",
      pestList: ["Leafminers", "Vegetable Leafminer"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Apply when leafminers first appear. Field and protected cropping systems. Dilute spraying: 40 mL/100L. Apply by boomspray.",
      note: "PERMIT PER88640 (exp. 28/02/2026). Suppression only. Max 3 applications per crop, min 7 days between. Add Agridex or Hasten adjuvant (0.5-1.0 L/ha). WHP: 1 day."
    }
  ]
},
{
  crop: "Capsicum — Leafminers (PER88640)",
  cropList: ["Capsicum"],
  permitNumber: "PER88640",
  weeds: [
    {
      weed: "Leafminers (Liriomyza spp., including vegetable leafminer, pea leafminer, American serpentine leafminer)",
      pestList: ["Leafminers", "Vegetable Leafminer"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Apply when leafminers first appear. Field and protected cropping systems. Dilute spraying: 40 mL/100L. Apply by boomspray.",
      note: "PERMIT PER88640 (exp. 28/02/2026). Suppression only. Max 3 applications per crop, min 7 days between. Add Agridex or Hasten adjuvant (0.5-1.0 L/ha). WHP: 1 day."
    }
  ]
},
{
  crop: "Chilli — Leafminers (PER88640)",
  cropList: ["Chilli"],
  permitNumber: "PER88640",
  weeds: [
    {
      weed: "Leafminers (Liriomyza spp., including vegetable leafminer, pea leafminer, American serpentine leafminer)",
      pestList: ["Leafminers", "Vegetable Leafminer"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Apply when leafminers first appear. Field and protected cropping systems. Dilute spraying: 40 mL/100L. Apply by boomspray.",
      note: "PERMIT PER88640 (exp. 28/02/2026). Suppression only. Max 3 applications per crop, min 7 days between. Add Agridex or Hasten adjuvant (0.5-1.0 L/ha). WHP: 1 day."
    }
  ]
},
{
  crop: "Tomato — Leafminers (PER88640)",
  cropList: ["Tomato"],
  permitNumber: "PER88640",
  weeds: [
    {
      weed: "Leafminers (Liriomyza spp., including vegetable leafminer, pea leafminer, American serpentine leafminer)",
      pestList: ["Leafminers", "Vegetable Leafminer"],
      states: ["NSW", "QLD", "SA", "NT", "WA", "ACT", "All except VIC"],
      rate: "400",
      rateMax: "400",
      unit: "mL/ha",
      stage: "Apply when leafminers first appear. Field and protected cropping systems. Dilute spraying: 40 mL/100L. Apply by boomspray.",
      note: "PERMIT PER88640 (exp. 28/02/2026). Suppression only. Max 3 applications per crop, min 7 days between. Add Agridex or Hasten adjuvant (0.5-1.0 L/ha). WHP: 1 day."
    }
  ]
},

// ── PER94197: Sandalwood — Mealybugs and Scales ──
{
  crop: "Sandalwood — Longtail Mealybug (PER94197)",
  cropList: ["Sandalwood"],
  permitNumber: "PER94197",
  weeds: [
    {
      weed: "Longtail Mealybug (Pseudococcus longispinus)",
      pestList: ["Mealybugs", "Longtail Mealybug"],
      states: ["NT", "QLD", "WA"],
      rate: "40",
      rateMax: "40",
      unit: "mL/100L",
      stage: "Apply at onset of crawler emergence or when pest threshold reached. Apply by airblast sprayer, oscillating boom, or equivalent. Spray volume 500-1000 L/ha depending on tree density and maturity.",
      note: "PERMIT PER94197 (exp. 30/06/2026). Mixed species plantation forest. Max 2 applications per year, min 21 days between. Do not apply when mealybugs well established. Plus adjuvant as per pome/stone fruit label directions."
    }
  ]
},
{
  crop: "Sandalwood — Breadfruit Mealybug (PER94197)",
  cropList: ["Sandalwood"],
  permitNumber: "PER94197",
  weeds: [
    {
      weed: "Breadfruit Mealybug (Icerya aegyptiaca)",
      pestList: ["Mealybugs", "Breadfruit Mealybug"],
      states: ["NT", "QLD", "WA"],
      rate: "40",
      rateMax: "40",
      unit: "mL/100L",
      stage: "Apply at onset of crawler emergence or when pest threshold reached. Apply by airblast sprayer, oscillating boom, or equivalent. Spray volume 500-1000 L/ha depending on tree density and maturity.",
      note: "PERMIT PER94197 (exp. 30/06/2026). Mixed species plantation forest. Max 2 applications per year, min 21 days between. Do not apply when mealybugs well established. Plus adjuvant as per pome/stone fruit label directions."
    }
  ]
},
{
  crop: "Sandalwood — Seychelles Scale (PER94197)",
  cropList: ["Sandalwood"],
  permitNumber: "PER94197",
  weeds: [
    {
      weed: "Seychelles Scale (Icerya seychellarum)",
      pestList: ["Scale Insects", "Seychelles Scale"],
      states: ["NT", "QLD", "WA"],
      rate: "40",
      rateMax: "40",
      unit: "mL/100L",
      stage: "Apply at onset of crawler emergence or when pest threshold reached. Apply by airblast sprayer, oscillating boom, or equivalent. Spray volume 500-1000 L/ha depending on tree density and maturity.",
      note: "PERMIT PER94197 (exp. 30/06/2026). Mixed species plantation forest. Max 2 applications per year, min 21 days between. Do not apply when mealybugs well established. Plus adjuvant as per pome/stone fruit label directions."
    }
  ]
},
{
  crop: "Sandalwood — White Mango Scale (PER94197)",
  cropList: ["Sandalwood"],
  permitNumber: "PER94197",
  weeds: [
    {
      weed: "White Mango Scale (Aulacaspis tubercularis)",
      pestList: ["Scale Insects", "White Mango Scale"],
      states: ["NT", "QLD", "WA"],
      rate: "40",
      rateMax: "40",
      unit: "mL/100L",
      stage: "Apply at onset of crawler emergence or when pest threshold reached. Apply by airblast sprayer, oscillating boom, or equivalent. Spray volume 500-1000 L/ha depending on tree density and maturity.",
      note: "PERMIT PER94197 (exp. 30/06/2026). Mixed species plantation forest. Max 2 applications per year, min 21 days between. Do not apply when mealybugs well established. Plus adjuvant as per pome/stone fruit label directions."
    }
  ]
},

// ── Basil (label use) ──
{
  crop: "Basil",
  cropList: ["Basil"],
  weeds: [
      { weed: "Green Peach Aphid", pestList: ["Green Peach Aphid"], states: ["All"], rate: "200", unit: "ml/Ha", rateText: "200ml/Ha + Wetter", notes: "WHP: 3 Days. Max 3 applications" }
  ]
}
    ]
};
