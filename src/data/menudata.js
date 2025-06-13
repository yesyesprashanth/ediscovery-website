export const productsMenu = {
  "Laboratory Automation and High Throughput Screening": {
    products: [
      "Lissy Liquid Handling System",
      "Automatic Vial Filler",
      "Blending System for Viscous media",
      "Formulation Design and Development",
      "Pelletising Grinding and Siewing",
      "Pesticide Residue Analysis",
      "Plate Reformation",
      "Polymorphism and Sal Screening",
      "Powder Dispensing",
      "Pre Formulation and Solubility studies",
      "Protein crystallization system",
      "Synthesis: Liquid and Solid phase, Catalyst, Peptides"
    ]
  },
  "Segmentedflow Auto Analysers": {
    products: [
      "Auto Analyser AA500",
      "Auto Analyser QuAAtro39",
      "AQ400 Discrete Analyzer",
      "AQ300 Discrete Analyzer",
      "Block Digester",
      "COMPREHENSIVE SUPPORT"
    ]
  },
  "Automated Multi parameter Analysers": {
    products: [
      "MiniLab BOD Analyzer",
      "MiniLab Multi-Parameter Robot",
      "Robotic pH & Electrical Conductivity",
      "Minlab for Soil Samples"
    ]
  }
};

export const applicationsMenu = {
  "High Throughput Screening": {
    applications: [
      "Lissy Liquid Handling System",
      "Automatic Vial Filler",
      "Blending System for Viscous media",
      "Formulation Design and Development",
      "Pelletising Grinding and Siewing",
      "Pesticide Residue Analysis",
      "Plate Reformation",
      "Polymorphism and Sal Screening",
      "Powder Dispensing",
      "Pre Formulation and Solubility studies",
      "Protein crystallization system",
      "Synthesis: Liquid and Solid phase, Catalyst, Peptides"
    ]
  },
  "Auto Analysers": {
    applications: [
      "Fertilier Analysis",
      "Tobacco Analysis",
      "Plan and Soil Analysis",
      "Water Analysis"
    ]
  }
};

export const productDetails = {
  "Lissy Liquid Handling System": {
    previewContent: {
      image: "/assets/products/zinsser/LISSY.png",
      shortDescription: "Sample preparation automation system with flexible liquid handling capabilities, featuring multiple pipetting probes and comprehensive sample management.",
      keyFeatures: [
        "Multiple pipetting probes",
        "High working speed",
        "Integrated gripper",
        "Sample tracking"
      ]
    },
    fullContent: {
      heading: "LISSY Liquid Handling System",
      paragraph: "Sample preparation for analysis types, sample dissolution, serial dissolution, reformatting steps can be fully automated with our flexible liquid handling system, LISSY. Many applications demand a diversity in pipetting probes in a single run – probes for septum piercing to avoid evaporation, for sample filtration form the top; disposable tips for contamination-free pipetting, for handling corrosive reagents, for ion-free dispensing, spotting of reagents, spraying in defines angles.",
      subHeading: "Specifications",
      list: [
        "Workbench from 90 up to 200 cm",
        "One or two arms",
        "1 to 16 pipetting probes",
        "High working speed",
        "Integrated gripper optional",
        "Variety of pipetting probes",
        "Tracking and visualising samples",
        "pH-Adjustment and Measurement",
        "Capping and De-capping",
        "Viscous media dispensing",
        "Heating/cooling",
        "Stirring"
      ],
      image: "/assets/products/zinsser/LISSY.png"
    }
  },
  "Powder Dispensing": {
    previewContent: {
      image: "/assets/products/zinsser/drug-discovery.jpg",
      shortDescription: "Advanced powder dispensing solutions including REDI, LIPOS platforms and DryPette® handheld system for precise solid material handling.",
      keyFeatures: [
        "Precise powder distribution",
        "Multiple dispensing options",
        "Automated handling",
        "Cross-contamination prevention"
      ]
    },
    fullContent: {
      mainHeading: "Powder Dispensing",
      sets: [
        {
          heading: "REDI & LIPOS Powder & Liquid Handling",
          paragraph: "REDI and LIPOS are automation platforms for the precise distribution of solids such as resins, beads, crystals, salts, nanoparticles, extrudates, seeds, ground plant material, lactose, aerosil, chemical compounds from libraries, etc. For both systems, innovative technologies have been developed to overcome the challenges associated with solid handling due to the properties of individual powders – particle size, particle size distribution, density, electric charge, etc. In addition, further functionality is available with LIPOS which is also equipped with liquid handling, allowing solid dissolution and many other methodologies to be carried out on the same platform with the inclusion of suitable modules.",
          subHeading: "Specification",
          list: [
            "From 0.5/1mg to 1g (with a different technology up to 100g)",
            "Distributions 1 to many or 1 to 1",
            "Free choice of source and destination containers",
            "Gravimetric or volumetric dispensing",
            "Solutions for static or hygroscopic powders",
            "Fixed volume or variable volume dispensing",
            "Optional capping/decapping, vortexing, heating, cooling, etc."
          ],
          image: "/assets/products/zinsser/drug-discovery.jpg"
        },
        {
          heading: "DryPette® Hand Held Manual Powder Dispensing System",
          paragraph: "The DryPette® is a hand held powder pipette that accurately dispenses solids, comprising a dispensing handle and a controller unit. The handles can be easily exchanged. Powder is drawn into the pipette tip in the handle under vacuum, and then expelled under light positive pressure (DryPette® Standard and Dry- Pette® Plus), or light positive pressure with or without positive displacement (DryPette® Varix range).",
          subHeading: "Specification",
          list: [
            "Precise and reproducible\\nDryPette® is precise and reproducible with precision being maintained by the removal of the excess powder from the bottom of the tip after aspiration (50mg +/- 2mg; 150mg +/- 1mg; 1000mg +/- 2.5mg).",
            "No Cross contamination\\nA rapidly exchangeable, low cost, cellulose filter is incorporated in the delivery line of the pipette, to avoid any risk of cross contamination.",
            "Lightweight\\nThe ergonomically designed hand piece allows easy and fatigue free filling of vessels. The hand piece is run from a compact control unit connected via a flexible vacuum pipe.",
            "Flexible\\nMultiple handle sizes can be used with a single DryPette® controller unit to cover a wide dispense weight range, providing an economic, versatile powder dispensing system for your laboratory. Custom designed DryPette® nozzles and PickFix tips can also be supplied to order.",
            "Simple\\nThe pipette is simply operated via a three-position switch (fill – off – dispense) on the hand piece"
          ],
          image: "/assets/products/zinsser/sample-management.jpg"
        }
      ]
    }
  }
};

// Helper function to get all unique product names
export const getAllProducts = () => {
  const products = new Set();
  
  // Add products from productsMenu
  Object.values(productsMenu).forEach(group => {
    group.products.forEach(product => products.add(product));
  });
  
  // Add applications that are actually products
  Object.values(applicationsMenu).forEach(group => {
    group.applications.forEach(app => products.add(app));
  });
  
  return Array.from(products);
};
