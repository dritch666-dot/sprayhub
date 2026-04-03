// ─────────────────────────────────────────────────────────
// XenTari® WG BIOLOGICAL INSECTICIDE — Label Data
// Group 11 (Insecticide) | Water Dispersible Granule (WDG)
// Source: Valent_XenTariWG_Label.pdf
// APVMA Approval No: 53435
// Valent BioSciences Corporation / Sumitomo Chemical Australia Pty Ltd
// ─────────────────────────────────────────────────────────
productDatabase['xentariwg'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "XenTari® WG Biological Insecticide",
  company: "Valent",

  category:         "Insecticides",
  activeIngredient: "Bacillus thuringiensis subsp. aizawai, Strain ABTS-1857 fermentation solids and solubles",
  group:            "Group 11 (Biological Insecticide)",
  modeOfAction:     "Microbial — Bt aizawai delta-endotoxin stops caterpillars feeding almost immediately; non-feeding caterpillars may be seen on plant before falling off within 3–4 days",
  formulation:      "Water Dispersible Granule (WDG)",
  color:            "#831843",
  apvma:            "53435",
  labelPdf:         "Source labels/Valent_XenTariWG_Label.pdf",
  sdsPdf:           "SDS Labels/XENTARI_WG_BTA.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Cabbage Moth", "Diamondback Moth", "Cabbage White Butterfly", "Cabbage-Centre Grub",
             "Cabbage Cluster Caterpillar"],
    timing: ["At first sign of infestation", "Before crop damage occurs"]
  },

  // ── Use situations ──────────────────────────────────────────────
  crops: [

    {
      crop: "Cole Crops (Cabbage, Cauliflower, Broccoli, Brussels Sprouts) — Lepidopteran Pests",
      cropList: ["Cole Crops","Cabbage","Cauliflower","Broccoli","Brussels Sprouts"],
      weeds: [
        {
          weed: "Cabbage moth (Diamondback moth, Plutella xylostella), Cabbage white butterfly (Pieris rapae), Cabbage-centre grub (Hellula hydralis), Cabbage cluster caterpillar (Crocidolomia pavonana)",
          pestList: ["Cabbage Moth","Cabbage White Butterfly","Cabbage-Centre Grub","Cabbage Cluster Caterpillar"],
          states: ["All"],
          rate: "50",
          rateMax: "50",
          unit: "g/100L",
          stage: "At first sign of infestation but before crop damage occurs; repeat as required or at regular intervals to ensure plants are adequately protected",
          note: "Minimum 500 g/ha. Use 500 g/ha or 750 g/ha for higher rate. Use the higher rate or shorter interval when conditions favour rapid development of cabbage moth. Add a non-ionic wetting agent. Crop monitoring and early attention to cabbage moth infestations after transplanting is highly recommended. Coverage can be improved using overhead and drop nozzles. Apply before crop damage occurs when pest population is beginning to build and larvae are starting to hatch. DO NOT wait until populations are out of control. Thorough spray coverage is essential as product must be ingested. If rain falls shortly after treatment, re-treatment may be necessary. WHP: not required when used as directed."
        }
      ]
    }

  ],

  // ── Agronomic fields ──────────────────────────────────────────────
  restraints: [
    "DO NOT apply as a tank mix with, or within 2 days of application of alkaline products such as Bordeaux mixtures.",
    "Store below 25°C (air conditioning).",
    "Use spray within 12 hours of mixing."
  ],

  compatibility: {
    compatible:   ["Most insecticides and fungicides."],
    incompatible: ["Alkaline products such as Bordeaux mixtures — do not mix or apply within 2 days."],
    notes:        ["Addition of a non-ionic wetting agent at label rates assists coverage, particularly on waxy surfaces."]
  },

  withholding: {
    harvest: "NOT REQUIRED WHEN USED AS DIRECTED.",
    grazing: "NOT REQUIRED WHEN USED AS DIRECTED."
  },

  surfactant:     "Non-ionic wetting agent required — add at label rates to assist coverage on waxy surfaces. Add to spray mix when adding XenTari WG.",
  sprayerCleanup: "Rinse containers before disposal. Add rinsings to spray tank. DO NOT dispose of undiluted chemicals on-site."

};
