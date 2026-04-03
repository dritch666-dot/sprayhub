// ─────────────────────────────────────────────────────────
// BASF Termidor® Residual Termiticide and Insecticide — Label Data
// Group 2B (Phenylpyrazole) | Suspension Concentrate (SC)
// Source: BASF_termidor_residual_label.pdf
// APVMA Approval No: 54624/121259
// BASF Australia Ltd
// ─────────────────────────────────────────────────────────
productDatabase['basftermidorresidual'] = {

  // ── Identity ──────────────────────────────────────────────────
  name:             "BASF Termidor® Residual Termiticide and Insecticide",
  company: "BASF",

  category:         "Insecticides",
  activeIngredient: "100 g/L Fipronil",
  group:            "Group 2B (Phenylpyrazole)",
  modeOfAction:     "GABA-gated chloride channel blocker",
  formulation:      "Suspension Concentrate (SC)",
  color:            "#7e22ce",
  apvma:            "54624/121259",
  labelPdf:         "Source labels/BASF_termidor_residual_label.pdf",
  sdsPdf:           "SDS Labels/BASF_Termidor Residual_SDS.pdf",
  signalHeading:    "Caution",

  // ── Classification ──────────────────────────────────────────
  classification: {
    type: "Insecticide",
    target: ["Termites", "Ants", "Cockroaches", "Spiders", "Houseflies"],
    timing: ["Pre-construction", "Post-construction", "Curative"]
  },

  // ── Restraints ──────────────────────────────────────────────
  restraints: [
    "Avoid runoff. DO NOT apply to excessively wet soils, immediately after or during heavy rain.",
    "DO NOT apply at less than label rates.",
    "DO NOT apply to internal surfaces.",
    "TO BE USED BY LICENSED PEST CONTROL OPERATORS ONLY.",
    "DO NOT apply more than 2 Termidor Residual applications per year."
  ],

  // ── Withholding ─────────────────────────────────────────────
  withholding: {
    harvest: "Not applicable — not for use on food crops.",
    grazing: "Not applicable — not for use on pasture or grazing land."
  },

  // ── Use situations ──────────────────────────────────────────
  crops: [

    // ── Subterranean Termites — Pre-Construction ─────────────
    {
      crop: "Subterranean Termites — Pre-Construction",
      cropList: ["Structures", "Buildings"],
      weeds: [
        {
          weed: "Subterranean Termites including Coptotermes acinaciformis, Mastotermes darwiniensis, Schedorhinotermes spp.",
          pestList: ["Subterranean Termites", "Coptotermes", "Mastotermes", "Schedorhinotermes"],
          states: ["All"],
          rate: "600",
          rateMax: "600",
          unit: "mL/100L",
          stage: "Chemical soil treated zones under and around new buildings and structures as per AS3660.1",
          note: "Application by LICENSED PEST CONTROL OPERATORS. Mix 600 mL in 100 L water (0.06% a.i. mix). Apply to form a continuous chemical treated zone (horizontal and vertical or as an external perimeter) around and under the structure. Create a treated zone by a combination of conventional spraying and trenching or an approved reticulation system."
        }
      ]
    },

    // ── Subterranean Termites — Post-Construction ────────────
    {
      crop: "Subterranean Termites — Post-Construction",
      cropList: ["Structures", "Buildings"],
      weeds: [
        {
          weed: "Subterranean Termites including Coptotermes acinaciformis, Mastotermes darwiniensis, Schedorhinotermes spp.",
          pestList: ["Subterranean Termites", "Coptotermes", "Mastotermes", "Schedorhinotermes"],
          states: ["All"],
          rate: "600",
          rateMax: "600",
          unit: "mL/100L",
          stage: "Chemical soil treated zones under and around existing buildings and structures as per AS3660.2",
          note: "Application by LICENSED PEST CONTROL OPERATORS. Mix 600 mL in 100 L water (0.06% a.i. mix). Application of chemical treated zones beneath concrete slabs and paths will require drilling and injection using rodding equipment. Construction practices, soil subsidence, difficult to wet soils and other factors may require the use of non-ionic wetting agents or foam generating equipment."
        }
      ]
    },

    // ── Subterranean Termites — Reticulation Systems ─────────
    {
      crop: "Subterranean Termites — Reticulation Systems",
      cropList: ["Structures", "Buildings"],
      weeds: [
        {
          weed: "Subterranean Termites including Coptotermes acinaciformis, Mastotermes darwiniensis, Schedorhinotermes spp.",
          pestList: ["Subterranean Termites", "Coptotermes", "Mastotermes", "Schedorhinotermes"],
          states: ["All"],
          rate: "600",
          rateMax: "600",
          unit: "mL/100L",
          stage: "Apply via approved reticulation system installed to manufacturer's specifications as per AS3660 series",
          note: "Application by LICENSED PEST CONTROL OPERATORS. The system must be installed according to the manufacturer's specifications and be capable of distributing the termiticide emulsion. Use a minimum delivery volume of 100 L of emulsion per cubic metre of appropriate soil (e.g. evenly compacted sandy loam soil)."
        }
      ]
    },

    // ── Subterranean Termites — Poles and Fence Posts ────────
    {
      crop: "Subterranean Termites — Poles and Fence Posts",
      cropList: ["Poles", "Fence Posts"],
      weeds: [
        {
          weed: "Subterranean Termites including Coptotermes acinaciformis, Mastotermes darwiniensis, Schedorhinotermes spp.",
          pestList: ["Subterranean Termites", "Coptotermes", "Mastotermes", "Schedorhinotermes"],
          states: ["All"],
          rate: "600",
          rateMax: "600",
          unit: "mL/100L",
          stage: "Create a continuous treated zone 450 mm deep and 150 mm wide around the post or pole by trenching and puddle treating the back-fill",
          note: "Application by LICENSED PEST CONTROL OPERATORS. Only posts and poles in contact with soil need to be treated. Use 100 L of prepared spray per cubic metre of soil around the pole or post. For new posts or poles, the bottom of the hole and the back-fill should be treated at installation."
        }
      ]
    },

    // ── Subterranean Termites — Nests in Poles and Trees ─────
    {
      crop: "Subterranean Termites — Nests in Poles and Trees",
      cropList: ["Poles", "Trees"],
      weeds: [
        {
          weed: "Subterranean Termites including Coptotermes acinaciformis, Mastotermes darwiniensis, Schedorhinotermes spp.",
          pestList: ["Subterranean Termites", "Coptotermes", "Mastotermes", "Schedorhinotermes"],
          states: ["All"],
          rate: "600",
          rateMax: "600",
          unit: "mL/100L",
          stage: "Locate the nest by drilling holes into the pole or tree. Flood the nest with prepared spray. Drill holes should be sealed after treatment.",
          note: "Application by LICENSED PEST CONTROL OPERATORS. Ensure the full dimension of the nest is known, particularly the highest extremity. Volume will vary depending on the nest size. To aid distribution, use foam generating equipment in areas of difficult access. Do not treat trees whilst bearing edible fruit or nuts."
        }
      ]
    },

    // ── Subterranean Termites — Wall Cavity Treatment ────────
    {
      crop: "Subterranean Termites — Wall Cavity Treatment",
      cropList: ["Structures", "Buildings"],
      weeds: [
        {
          weed: "Subterranean Termites",
          pestList: ["Subterranean Termites"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "mL/L",
          stage: "Mix with water plus foaming agent to achieve a final foam expansion ratio of 15:1. Locate termite activity by drilling holes into the wall cavity.",
          note: "Foam directly into the termite carton material until saturated. Application to wall cavities behind plasterboard may result in some staining. Only apply to wall cavities where live termites are present. Termidor foaming is not designed and should not be used as a stand-alone treatment. A continuous chemical treatment to the soil as per AS3660.2 should be applied immediately following successful eradication."
        }
      ]
    },

    // ── Nuisance Ants ────────────────────────────────────────
    {
      crop: "Nuisance Ants — External Areas",
      cropList: ["Structures", "Buildings"],
      weeds: [
        {
          weed: "Nuisance Ants including Argentine Ant, Black House Ant, Pedicel Ant, Tapinoma spp., Pharaoh's Ant, Whitefooted Ant (Technomyrmex albipes)",
          pestList: ["Argentine Ant", "Black House Ant", "Pedicel Ant", "Pharaoh's Ant", "Whitefooted Ant"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "mL/L",
          stage: "Treat external surfaces 300 mm up and 300 mm out from where the building or structure touches the ground",
          note: "Apply at the rate of 1 L of prepared suspension per 25 lineal metres. Pay particular attention to potential entry points, such as weep holes, cracks and crevices. Also apply to ant trails and where ants are active away from the nest. Structures may include retaining walls, fences, garden beds, sheds etc."
        }
      ]
    },

    // ── Nesting Ants ─────────────────────────────────────────
    {
      crop: "Nesting Ants — Spot Application",
      cropList: ["Structures", "Buildings"],
      weeds: [
        {
          weed: "Nesting Ants including Funnel Ant, Greenhead Ants (Rhytidoponera spp.), Meat Ants (Iridomyrmex spp.), Red Imported Fire Ant (Solenopsis invicta), Yellow Crazy Ant (Anoplolepis gracilipes)",
          pestList: ["Funnel Ant", "Greenhead Ants", "Meat Ants", "Red Imported Fire Ant", "Yellow Crazy Ant"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "mL/L",
          stage: "Spot application to nests in domestic situations",
          note: "Treat the nest entrance or mound, and where ants are active away from the nest. Apply at the rate of 1 L of prepared suspension per 16 m², or 60 mL per m²."
        }
      ]
    },

    // ── Domestic Cockroaches ─────────────────────────────────
    {
      crop: "Domestic Cockroaches — External Areas",
      cropList: ["Structures", "Buildings"],
      weeds: [
        {
          weed: "Domestic Cockroaches including American (Periplaneta americana), Australian (Periplaneta australasiae), Oriental (Blatella orientalis), Smokybrown (Periplaneta fuliginosa)",
          pestList: ["American Cockroach", "Australian Cockroach", "Oriental Cockroach", "Smokybrown Cockroach"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "mL/L",
          stage: "Treat external surfaces 300 mm up and 300 mm out from where the building or structure touches the ground",
          note: "Apply at the rate of 1 L of prepared suspension per 25 lineal metres. Pay particular attention to potential entry points, such as weep holes, cracks and crevices. Also apply where pest(s) may be active away from the building including retaining walls, fences, garden beds, sheds etc. Apply at the rate of 1 L of prepared suspension per 16 m²."
        }
      ]
    },

    // ── Spiders ──────────────────────────────────────────────
    {
      crop: "Spiders",
      cropList: ["Structures", "Buildings"],
      weeds: [
        {
          weed: "Web-spinning Spiders including Black House Spider (Badumna insignis) and Redback Spider (Latrodectus hasseltti)",
          pestList: ["Black House Spider", "Redback Spider"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "mL/L",
          stage: "Spray spiders, their webbing and areas where spiders may hide",
          note: "Apply at the rate of 1 L of prepared suspension per 16 m²."
        }
      ]
    },

    // ── Other Pests ──────────────────────────────────────────
    {
      crop: "Other Household Pests — Spot Treatment",
      cropList: ["Structures", "Buildings"],
      weeds: [
        {
          weed: "Daddy-long-legs Spiders (Pholcus phalangioides), Millipedes (Julus herperus), Pill Bugs (Armadillidium vulgare), House Crickets (Acheta domesticus), Earwigs (Forficula auricularia)",
          pestList: ["Daddy-long-legs Spiders", "Millipedes", "Pill Bugs", "House Crickets", "Earwigs"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "mL/L",
          stage: "Apply directly onto pests as a spot treatment",
          note: "Apply directly onto spiders, millipedes, pill bugs, house crickets and earwigs as a spot treatment."
        }
      ]
    },

    // ── Houseflies ───────────────────────────────────────────
    {
      crop: "Houseflies — External Areas",
      cropList: ["Structures", "Buildings"],
      weeds: [
        {
          weed: "Houseflies (Musca domestica)",
          pestList: ["Houseflies"],
          states: ["All"],
          rate: "6",
          rateMax: "6",
          unit: "mL/L",
          stage: "Apply to external surfaces where flies are likely to rest",
          note: "Apply at the rate of 1 L of prepared suspension per 16 m²."
        }
      ]
    }
  ]
};
