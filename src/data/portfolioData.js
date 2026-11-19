/**
 * SAKTHI KAILASH - PORTFOLIO DATA CONFIGURATION
 * All project data, skills, timeline, and social links are centrally configured
 * and easily editable here.
 */

export const personalInfo = {
  name: "Sakthi Kailash",
  role: "Mechatronics Engineering Student",
  institution: "Rathinam Technical Campus",
  focus: "Aspiring Electronics & VLSI Engineer | Embedded Systems Enthusiast",
  tagline: "Engineering Intelligence for a Smarter Tomorrow",
  quote: "Dream Big... Build Bigger...",
  heroHeading: "RATHINAM TECHNICAL CAMPUS // INNOVATE • DESIGN • BUILD",
  heroSubtitle: "Engineering Intelligence for a Smarter Tomorrow",
  heroSubrole: "Mechatronics Engineering Student & Aspiring VLSI & Electronics Engineer",
  location: "India",
  status: "Available for Internships & Core Engineering Projects",
  profileImage: "/profile.jpg",
  bio: [
    "I am a Mechatronics Engineering student at Rathinam Technical Campus passionate about electronics, digital systems, embedded technologies, and VLSI design.",
    "I enjoy transforming innovative ideas into practical engineering solutions through hardware experimentation, programming, and technology-driven problem solving.",
    "My current learning interests include RTL Design, Verilog, Digital Electronics, Embedded Systems, and AI-powered engineering applications."
  ],
  socialLinks: {
    github: "https://github.com/SAKTHIKAILASH-2105?tab=repositories",
    linkedin: "https://www.linkedin.com/in/mr-sakthi-kailash-p-b35982383",
    email: "sakthikailash500@gmail.com",
    resumeUrl: "#resume", // Can link to a PDF file in public folder, e.g. "/resume-sakthi-kailash.pdf"
  }
};

export const aboutHighlights = [
  {
    icon: "Cpu",
    title: "Digital & VLSI Focus",
    description: "Deepening knowledge in combinational/sequential logic, RTL architecture, and Verilog synthesis pipelines."
  },
  {
    icon: "CircuitBoard",
    title: "Embedded Systems",
    description: "Developing with ESP32 microcontrollers, I2S digital audio protocols, and multi-sensor telemetry."
  },
  {
    icon: "Layers",
    title: "Mechatronics Synergy",
    description: "Bridging mechanical system dynamics with intelligent microelectronics, firmware, and signal processing."
  },
  {
    icon: "BrainCircuit",
    title: "Edge Intelligence",
    description: "Exploring adaptive algorithms and lightweight machine learning paradigms integrated into microcontrollers."
  }
];

export const educationData = {
  degree: "Bachelor of Engineering (B.E.) in Mechatronics Engineering",
  institution: "Rathinam Technical Campus",
  period: "2025 – 2029 (Undergraduate)",
  focusAreas: [
    "Basics of CAD Designer (Fusion 360 / SolidWorks)",
    "Digital Electronics & Microcontrollers",
    "Embedded Systems Design",
    "Sensor Interfacing & Actuation",
    "Signals, Systems & Control Engineering",
    "Robotics & Industrial Automation"
  ]
};

export const skillCategories = [
  {
    category: "Electronics",
    description: "Core hardware fundamentals, circuit analysis, and physical interfacing.",
    skills: [
      { name: "Digital Electronics", level: "Core", status: "experienced", badge: "Experienced" },
      { name: "Basic Circuit Design", level: "Core", status: "experienced", badge: "Experienced" },
      { name: "Microcontrollers", level: "Core", status: "experienced", badge: "Experienced" },
      { name: "Sensors and Interfacing", level: "Core", status: "experienced", badge: "Experienced" },
    ]
  },
  {
    category: "Programming",
    description: "Firmware logic, scripting, algorithms, and computational tools.",
    skills: [
      { name: "C Programming", level: "Proficient", status: "experienced", badge: "Proficient" },
      { name: "Python Basics", level: "Intermediate", status: "experienced", badge: "Intermediate" },
      { name: "HTML", level: "Familiar", status: "experienced", badge: "Familiar" },
      { name: "CSS", level: "Familiar", status: "experienced", badge: "Familiar" },
      { name: "JavaScript", level: "Familiar", status: "experienced", badge: "Familiar" },
    ]
  },
  {
    category: "VLSI",
    description: "Digital silicon architectures, hardware description languages, and RTL synthesis.",
    skills: [
      { name: "Digital Logic Design", level: "Core", status: "experienced", badge: "Experienced" },
      { name: "Verilog HDL", level: "In-Progress", status: "learning", badge: "Currently Learning" },
      { name: "RTL Design", level: "In-Progress", status: "learning", badge: "Currently Learning" },
    ]
  },
  {
    category: "Embedded Systems",
    description: "Microcontroller platforms, digital bus protocols, and hardware integration.",
    skills: [
      { name: "ESP32 Architecture", level: "Practical", status: "experienced", badge: "Experienced" },
      { name: "I2S Audio Protocol", level: "Applied", status: "experienced", badge: "Experienced" },
      { name: "Sensor Integration", level: "Practical", status: "experienced", badge: "Experienced" },
    ]
  },
  {
    category: "Tools & CAD",
    description: "3D CAD modeling, generative design, and engineering simulation environments.",
    skills: [
      { name: "Fusion 360", level: "CAD & CAM", status: "experienced", badge: "Experienced" },
      { name: "SolidWorks", level: "3D CAD", status: "experienced", badge: "Experienced" },
      { name: "MATLAB", level: "In-Progress", status: "learning", badge: "Currently Learning" },
    ]
  }
];

export const projects = [
  {
    id: "project-01",
    number: "01",
    category: "hardware",
    categoryLabel: "Hardware & Embedded Systems",
    title: "AI/ML Adaptive Noise Cancellation System",
    shortDescription: "Developing an intelligent adaptive noise cancellation system designed to suppress complex environmental noise while preserving speech intelligibility.",
    status: "Under Active Development",
    statusType: "active", // active | concept | prototype
    technologies: ["ESP32", "Digital Signal Processing", "AI/ML", "I2S Microphones"],
    highlights: [
      "Real-time dual-microphone acoustic acquisition over I2S digital audio bus.",
      "Investigation of adaptive filtering (LMS/NLMS) coupled with lightweight ML inferencing.",
      "Prioritizing human vocal tract spectral bands while suppressing ambient acoustic disturbances.",
      "Optimized for low-latency edge DSP execution on microcontroller hardware."
    ],
    architecture: "Dual I2S Mic Array → Pre-amplifier & ADC → ESP32 Edge Core → Adaptive Filter / Quantized ML Model → Clean Audio Output Stream",
    githubUrl: "https://github.com/SAKTHIKAILASH-2105/adaptive-noise-cancellation",
    accentColor: "cyan",
    schematicType: "audio-dsp",
    cadImage: "/cad-models/anc-enclosure-solidworks.jpeg"
  },
  {
    id: "project-02",
    number: "02",
    category: "software",
    categoryLabel: "Software & Intelligent Systems",
    title: "PHANTOM – Adaptive RF Sensing System",
    shortDescription: "An adaptive RF sensing software concept designed to identify unfamiliar RF activity, estimate uncertainty, and intelligently prioritize spectrum observations.",
    status: "Design & Architectural Concept",
    statusType: "concept",
    technologies: ["RF Sensing", "Signal Processing", "Data Analysis", "Python"],
    highlights: [
      "Dynamic observation model for wideband electromagnetic spectrum monitoring.",
      "Algorithmic uncertainty quantification to highlight anomalies in crowded frequency spectra.",
      "Python-driven spectral analysis pipeline for raw IQ data processing and feature extraction.",
      "Intelligent scheduling of RF dwell times across prioritized transmission bands."
    ],
    architecture: "RF Antenna Front-End → Downconversion & Sampling → IQ Data Stream → Uncertainty Estimation Engine → Prioritized Spectrum Logging",
    githubUrl: "https://github.com/SAKTHIKAILASH-2105/phantom-rf-sensing",
    accentColor: "blue",
    schematicType: "rf-spectrum"
  },
  {
    id: "project-03",
    number: "03",
    category: "hardware",
    categoryLabel: "Hardware & Embedded Systems",
    title: "DRAGLINE – Smart Guidance System",
    shortDescription: "An in-cab smart guidance concept for dragline operators that monitors obstacles and uneven surfaces.",
    status: "Prototype In Progress",
    statusType: "active",
    technologies: ["ESP32-S3", "Ultrasonic Sensors", "MPU6050", "Embedded Systems"],
    highlights: [
      "Dual spatial awareness telemetry utilizing ultrasonic echo ranging and 6-DOF IMU orientation.",
      "In-cab visual alerts and acoustic cues for excavation hazard mitigation.",
      "Surface tilt and boom incline calculations using complementary filter sensor fusion.",
      "Robust hardware enclosure and vibration-tolerant embedded firmware loop."
    ],
    architecture: "Ultrasonic Array + MPU6050 6-Axis IMU → ESP32-S3 Processing Unit → Complementary Filter Fusion → Operator In-Cab Display / Alert HUD",
    githubUrl: "https://github.com/SAKTHIKAILASH-2105/dragline-smart-guidance",
    accentColor: "emerald",
    schematicType: "sensor-fusion"
  },
  {
    id: "project-04",
    number: "04",
    category: "hardware",
    categoryLabel: "Hardware & Embedded Systems",
    title: "SMARTLOGIX – Smart Cargo Monitoring",
    shortDescription: "A smart cargo monitoring concept integrating sensors, GPS, geofencing, and monitoring features.",
    status: "System Architecture & Concept",
    statusType: "concept",
    technologies: ["IoT", "Sensors", "GPS", "Embedded Systems"],
    highlights: [
      "Multi-parametric environmental tracking: internal temperature, humidity, shock, and tilt.",
      "GPS coordinate telemetry with polygon geofence breach detection logic.",
      "Ultra-low-power sleep states during transit with event-driven interrupt wake-ups.",
      "Data logging buffer with fallback store-and-forward mechanism."
    ],
    architecture: "Environmental Sensors + GPS Receiver → Power-Managed MCU → Geo-boundary Logic → Telemetry Packet Dispatch / Flash Blackbox",
    githubUrl: "https://github.com/SAKTHIKAILASH-2105/smartlogix-cargo-monitor",
    accentColor: "purple",
    schematicType: "iot-telemetry"
  },
  {
    id: "project-05",
    number: "05",
    category: "software",
    categoryLabel: "Software & Intelligent Systems",
    title: "Helpdesk 360",
    shortDescription: "An intelligent automated support & ticketing platform featuring NLP-driven ticket routing, sentiment triage, and real-time SLA telemetry dashboards.",
    status: "Under Active Development",
    statusType: "active",
    technologies: ["React", "Node.js", "Python", "NLP / AI", "PostgreSQL", "REST APIs"],
    highlights: [
      "Automated ticket classification and priority scoring based on linguistic sentiment and query context.",
      "Interactive analytics telemetry showing resolution bottlenecks, team SLA compliance, and dispatch queues.",
      "Modular microservices architecture with robust authentication, role-based controls, and webhook endpoints.",
      "Integrated knowledge-base suggestion engine to accelerate resolution response cycles."
    ],
    architecture: "Inbound Support Query (Web / API) → NLP Intent & Sentiment Parser → Priority Routing Matrix → Agent Telemetry Dashboard & WebSocket Push",
    githubUrl: "https://github.com/SAKTHIKAILASH-2105/helpdesk-360",
    accentColor: "cyan",
    schematicType: "helpdesk-flow"
  },
  {
    id: "project-06",
    number: "06",
    category: "software",
    categoryLabel: "Software & Intelligent Systems",
    title: "SkillPath AI",
    shortDescription: "An AI-powered adaptive learning engine that evaluates technical competencies, detects syllabus gaps, and synthesizes personalized engineering progression trees.",
    status: "Deployed & Active",
    statusType: "active",
    technologies: ["Python", "FastAPI", "React", "Vector Embeddings", "AI/ML", "Tailwind CSS"],
    highlights: [
      "Diagnostic competency mapping assessing student strengths across digital logic, firmware, and software.",
      "Knowledge graph dependency algorithm generating customized step-by-step technical roadmaps.",
      "Semantic vector matching connecting target engineering job profiles with prerequisite milestones.",
      "Interactive node-based visual roadmap tracking progressive competency mastery."
    ],
    architecture: "Candidate Skill Profile → Vector Embeddings & Knowledge Graph → Adaptive Dependency Solver → Interactive Skill Tree Visualizer",
    githubUrl: "https://github.com/SAKTHIKAILASH-2105/SKILL-PATH-",
    liveUrl: "https://skill-path-1-eight.vercel.app/",
    accentColor: "purple",
    schematicType: "skillpath-graph"
  }
];

export const learningJourney = [
  {
    id: "step-1",
    title: "Digital Electronics",
    category: "Foundation",
    status: "Completed",
    statusType: "completed",
    period: "Phase 1 - Foundational",
    description: "Boolean algebra, combinational logic design, sequential state machines (FSM), Karnaugh maps, and logic gate minimization fundamentals.",
    skillsAcquired: ["Boolean Logic", "K-Maps", "State Machines", "Logic Families"]
  },
  {
    id: "step-2",
    title: "Microcontroller Programming",
    category: "Hardware Interfacing",
    status: "Completed",
    statusType: "completed",
    period: "Phase 2 - Core Implementation",
    description: "Register-level C programming, GPIO manipulation, interrupts (ISR), timers, PWM generation, and hardware communication standards (UART, SPI, I2C).",
    skillsAcquired: ["Embedded C", "Bare-metal Register Control", "UART/SPI/I2C", "Timers & Interrupts"]
  },
  {
    id: "step-3",
    title: "Embedded Systems",
    category: "Firmware & Protocols",
    status: "Completed",
    statusType: "completed",
    period: "Phase 3 - System Integration",
    description: "Developing on ESP32, multi-tasking architectures, sensor integration, peripheral drivers, and high-speed digital audio streaming (I2S).",
    skillsAcquired: ["ESP32 Dual-Core", "I2S Audio Pipeline", "Sensor Fusion", "Power Management"]
  },
  {
    id: "step-4",
    title: "Verilog HDL",
    category: "Hardware Description",
    status: "Ongoing",
    statusType: "ongoing",
    period: "Phase 4 - Active Learning",
    description: "Writing synthesizable hardware descriptions: structural, dataflow, and behavioral modeling. Designing testbenches, simulation verification, and timing diagrams.",
    skillsAcquired: ["Synthesizable Verilog", "Testbench Construction", "EDA Playground / ModelSim", "Non-blocking Assignments"]
  },
  {
    id: "step-5",
    title: "RTL Design",
    category: "Digital Architecture",
    status: "Ongoing",
    statusType: "ongoing",
    period: "Phase 5 - Active Learning",
    description: "Register-Transfer Level architecture principles, datapath vs. control path partitioning, clock domain awareness, synchronous pipelining, and resource sharing.",
    skillsAcquired: ["Datapath Architecture", "Pipelining Techniques", "FSM with Datapath (FSMD)", "Timing Constraints"]
  },
  {
    id: "step-6",
    title: "VLSI Fundamentals",
    category: "Silicon Engineering",
    status: "Planned",
    statusType: "planned",
    period: "Phase 6 - Roadmap Target",
    description: "CMOS transistor physics, ASIC design flows (Synthesis, Floorplanning, Place & Route), Static Timing Analysis (STA), and modern open-source silicon tools.",
    skillsAcquired: ["CMOS Inverter Dynamics", "ASIC Design Flow", "Static Timing Analysis", "Open-Source EDA (OpenLane)"]
  }
];

export const certificationsAndAchievements = {
  nptelCertifications: [
    {
      id: "nptel-01",
      title: "The Joy of Computing using Python",
      organization: "NPTEL / SWAYAM (IIT Madras)",
      topic: "Python Programming, Algorithmic Thinking & Computational Logic",
      status: "Elite / Verified",
      credentialId: "NPTEL26CS84S350504711",
      score: "55% (Assignment: 22.44/25 | Exam: 33/75)",
      credits: "4 Credits Recommended",
      period: "Jan – Apr 2026",
      imageUrl: "/certificates/images/nptel-joy-of-computing.png",
      link: "/certificates/nptel/the-joy-of-computing-using-python.pdf",
      notes: "Foundational programming paradigms, algorithmic problem solving, recursion, computational data structures, and script engineering."
    },
    {
      id: "nptel-02",
      title: "Introduction to Internet of Things",
      organization: "NPTEL / SWAYAM (IIT Kharagpur)",
      topic: "IoT Architectures, Wireless Sensor Networks & Embedded Connectivity",
      status: "Verified Certificate",
      credentialId: "NOC26CS161S463801143",
      instructor: "Prof. Sudip Misra, IIT Kharagpur",
      period: "Jan – Apr 2026 (12 Weeks)",
      credits: "3 Credits Recommended",
      imageUrl: "/certificates/images/nptel-iot.png",
      link: "/certificates/nptel/introduction-to-internet-of-things.pdf",
      notes: "Sensor integration, wireless telemetry protocols (MQTT, CoAP), edge microcontroller interfacing, and cloud IoT communication topologies."
    }
  ],
  linkedinCertifications: [
    {
      id: "li-01",
      title: "AWS Certified Cloud Practitioner (CLF-C02) Cert Prep",
      organization: "LinkedIn Learning",
      topic: "Cloud Architecture, AWS Infrastructure, Security & Compliance",
      status: "Verified",
      date: "May 2026",
      skills: ["Amazon Web Services (AWS)", "Cloud Computing", "Identity & Access Management (IAM)"],
      imageUrl: "/certificates/images/li-aws-cloud-practitioner.png",
      link: "/certificates/linkedin/aws-certified-cloud-practitioner.pdf",
      notes: "Core cloud infrastructure concepts, high availability models, AWS security framework, and cloud cost management."
    },
    {
      id: "li-02",
      title: "AWS Certified Solutions Architect – Associate (SAA-C03) Cert Prep",
      organization: "LinkedIn Learning",
      topic: "Multi-Tier Cloud Architecture, High Availability & Disaster Recovery",
      status: "Verified",
      date: "Sep 2026",
      skills: ["Cloud Architecture", "AWS Solutions", "Resilient Infrastructure"],
      imageUrl: "/certificates/images/li-aws-solutions-architect.png",
      link: "/certificates/linkedin/aws-solutions-architect-associate.pdf",
      notes: "Architecting secure, cost-optimized, decoupled microservice systems with automatic scaling and distributed fault tolerance."
    },
    {
      id: "li-03",
      title: "IoT Foundations: Device Management",
      organization: "LinkedIn Learning",
      topic: "Connected Device Lifecycle, Fleet Telemetry & OTA Provisioning",
      status: "Verified",
      date: "May 2026",
      skills: ["Internet of Things (IoT)", "Device Management", "Firmware OTA Updates"],
      imageUrl: "/certificates/images/li-iot-device-management.png",
      link: "/certificates/linkedin/iot-foundations-device-management.pdf",
      notes: "Lifecycle provisioning, telemetry collection, firmware health monitoring, and remote diagnostics for large-scale embedded fleets."
    },
    {
      id: "li-04",
      title: "IoT Product Security",
      organization: "LinkedIn Learning",
      topic: "Hardware Security, Cryptographic Storage & Threat Mitigation",
      status: "Verified",
      date: "May 2026",
      skills: ["IoT Security", "Embedded Systems", "Cryptographic Protocols"],
      imageUrl: "/certificates/images/li-iot-product-security.png",
      link: "/certificates/linkedin/iot-product-security.pdf",
      notes: "Defending edge electronics from hardware intrusion, implementing secure boot, encrypted bus communication, and zero-trust authentication."
    },
    {
      id: "li-05",
      title: "Building Serverless Applications in AWS",
      organization: "LinkedIn Learning",
      topic: "Event-Driven Serverless Compute & Microservices",
      status: "Verified",
      date: "Sep 2026",
      skills: ["Serverless Computing", "AWS Lambda", "API Gateway", "DynamoDB"],
      imageUrl: "/certificates/images/li-serverless-aws.png",
      link: "/certificates/linkedin/building-serverless-applications-aws.pdf",
      notes: "Designing highly scalable serverless backends utilizing AWS Lambda functions, event triggers, and managed NoSQL persistence."
    },
    {
      id: "li-06",
      title: "AWS Essential Training for Developers",
      organization: "LinkedIn Learning",
      topic: "Cloud Application Development & SDK Deployment",
      status: "Verified",
      date: "May 2026",
      skills: ["AWS Developer Tools", "Cloud APIs", "Containerized Apps"],
      imageUrl: "/certificates/images/li-aws-dev-training.png",
      link: "/certificates/linkedin/aws-essential-training-developers.pdf",
      notes: "Integrating cloud APIs, configuring programmatic access, handling secure credential storage, and deploying application endpoints."
    },
    {
      id: "li-07",
      title: "DevOps Foundations",
      organization: "LinkedIn Learning",
      topic: "Continuous Integration & Continuous Delivery (CI/CD)",
      status: "Verified",
      date: "Sep 2026",
      skills: ["DevOps", "CI/CD Pipelines", "Automated Testing"],
      imageUrl: "/certificates/images/li-devops-foundations.png",
      link: "/certificates/linkedin/devops-foundations.pdf",
      notes: "Automated pipeline configuration, version control workflows, containerized staging, and observability telemetry."
    }
  ],
  workshops: [
    {
      id: "ws-01",
      title: "Hands-on Embedded Systems & IoT Workshop",
      host: "Technical Engineering Symposium",
      focus: "ESP32, Sensor Interfacing, Cloud Telemetry & Firmware Optimization",
      date: "Academic Year 2024",
      highlight: "Constructed sensor telemetry node with real-time interrupt handling."
    },
    {
      id: "ws-02",
      title: "Digital VLSI Design & Simulation Workshop",
      host: "Electronics Department / IEEE Student Chapter",
      focus: "Introduction to Hardware Description Languages, Verilog Simulation & Synthesis",
      date: "Academic Year 2024",
      highlight: "Implemented basic ALU and finite state machines in HDL simulation environment."
    }
  ],
  competitions: [
    {
      id: "comp-01",
      title: "Smart India Hackathon (SIH) Participation",
      category: "Hardware / Software Innovation",
      role: "Mechatronics & Embedded Systems Lead (Team Project)",
      status: "Participation Placeholder",
      details: "Collaborated on engineering solutions for real-world national problem statements, focusing on hardware-software telemetry."
    },
    {
      id: "comp-02",
      title: "Inter-College Technical Symposium & Project Expo",
      category: "Engineering Model Exhibition",
      role: "Hardware Prototyping & Demonstration",
      status: "Project Showcase Placeholder",
      details: "Presented functional prototype demonstrating sensor integration and embedded microcontroller control."
    }
  ]
};

export const cadModels = [
  {
    id: "cad-01",
    title: "3D ANC Electronics Enclosure",
    software: "SolidWorks Design",
    category: "Product & Electronics Enclosure",
    image: "/cad-models/anc-enclosure-solidworks.jpeg",
    description: "Custom protective 3D CAD electronics enclosure designed for the Adaptive Noise Cancellation (ANC / COMM) headset system. Features internal PCB mounting standoffs, removable screw fastening, curved TPU anti-slip retention strap, and embossed hardware identity.",
    views: ["Trimetric", "Front", "Top", "Left Orthographic"],
    tags: ["SolidWorks", "Electronics Enclosure", "ANC Hardware", "Mechanical Assembly"]
  },
  {
    id: "cad-02",
    title: "Circular Flange Bearing Housing",
    software: "Autodesk Fusion 360",
    category: "Mechanical Component Design",
    image: "/cad-models/circular-flange-housing-fusion.png",
    description: "Precision 4-hole circular mounting flange with an elevated central cylindrical bearing hub, designed with rotational symmetry and parametric concentric constraints for industrial shaft mounting.",
    views: ["Isometric", "Top", "Front", "Right Orthographic"],
    tags: ["Fusion 360", "Flange Housing", "Parametric Modeling", "Rotational Symmetry"]
  },
  {
    id: "cad-03",
    title: "Machined Bearing Bracket with Shaft Cradle",
    software: "Autodesk Fusion 360",
    category: "Machine Component Design",
    image: "/cad-models/bearing-cradle-bracket-fusion.png",
    description: "Heavy-duty structural bearing support bracket with a semi-circular shaft cradle, slotted mounting base, and structural triangular gusset rib reinforcement for load-bearing stability.",
    views: ["Isometric", "Front", "Top", "Side Orthographic"],
    tags: ["Fusion 360", "Bearing Bracket", "Rib Gusset", "Shaft Support"]
  },
  {
    id: "cad-04",
    title: "Dual-Bushing Mechanical Guide Link",
    software: "Autodesk Fusion 360",
    category: "Kinematic Linkage Design",
    image: "/cad-models/dual-bushing-guide-fusion.png",
    description: "Offset dual-cylinder mechanical guide bracket featuring parallel cylindrical bushings, central alignment boss, and precision bore tolerances for sliding or pivoting linkage motion.",
    views: ["Isometric", "Front", "Top", "Bottom Orthographic"],
    tags: ["Fusion 360", "Guide Link", "Precision Bushing", "Kinematics"]
  },
  {
    id: "cad-05",
    title: "Cylindrical Clamp & Mounting Arm",
    software: "Autodesk Fusion 360",
    category: "Clamping & Fixture Design",
    image: "/cad-models/cylindrical-clamp-arm-fusion.png",
    description: "Split-collar cylindrical clamp fixture with an integrated cantilever extension arm, slotted clamp relief, and fastener mounting flats for modular robotic positioning.",
    views: ["Isometric", "Top", "Front", "Side Orthographic"],
    tags: ["Fusion 360", "Split Collar", "Clamp Arm", "Fixture Design"]
  },
  {
    id: "cad-06",
    title: "Precision Pivot Joint Bracket",
    software: "Autodesk Fusion 360",
    category: "Structural Linkage",
    image: "/cad-models/pivot-joint-bracket-fusion.png",
    description: "Cantilevered mechanical pivot joint bracket designed with curved clearance relief, single-point pivot aperture, and angular support web for mechatronic articulation.",
    views: ["Top", "Front", "Side", "Bottom Orthographic"],
    tags: ["Fusion 360", "Pivot Bracket", "Multi-view CAD", "Mechanical Link"]
  },
  {
    id: "cad-07",
    title: "Dual-Mount Copper Pivot Eyelet",
    software: "SolidWorks Design",
    category: "Structural Bracket",
    image: "/cad-models/copper-pivot-bracket-solidworks.jpeg",
    description: "Parametric copper mounting bracket modeled with dual-hole base flange, chamfered web stiffener, and elevated perpendicular pivot eyelet boss.",
    views: ["Trimetric", "Front", "Top", "Left Orthographic"],
    tags: ["SolidWorks", "Copper Bracket", "Base Flange", "Eyelet Boss"]
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "CAD Models", href: "#cad-models" },
  { name: "Journey", href: "#journey" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
