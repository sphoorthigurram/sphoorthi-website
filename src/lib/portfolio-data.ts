export type Project = {
  id: string;
  title: string;
  org: string;
  role: string;
  year: string;
  image: string;
  summary: string;
  highlights: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  diagrams?: { title: string; description: string; image: string }[];
  documents?: { title: string; description: string; url: string; format: string }[];
  externalLinks?: { label: string; description: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: "ev-charger",
    title: "1 kW Bi-Directional EV Charger",
    org: "TAMU Think Tank \u00b7 Team Electra",
    role: "Technical Lead",
    year: "2025 \u2014 Present",
    image: "https://sphoorthigurram.github.io/sphoorthi-website/ev-charger-topology.png",
    summary:
      "A grid-interactive 1 kW charger built around GaN switching: a bridgeless totem-pole PFC front end feeding a Dual Active Bridge DC-DC stage, capable of pushing energy back into the grid.",
    highlights: [
      "GaN bridgeless totem-pole PFC front end with near-unity power factor",
      "Dual Active Bridge DC-DC stage for isolated bidirectional power flow",
      "400 V DC bus architecture sized for vehicle-to-grid operation",
      "Full schematic capture and multilayer layout in Altium, validated in LTSpice",
    ],
    stack: ["Altium Designer", "LTSpice", "GaN FETs", "Power Electronics", "MATLAB"],
    metrics: [
      { label: "Efficiency", value: "~96%" },
      { label: "Power Factor", value: "~0.99" },
      { label: "DC Bus", value: "400 V" },
    ],
    diagrams: [
      {
        title: "Full System Topology",
        description: "Power-stage architecture for the complete 1 kW bidirectional / V2X-capable charging system.",
        image: "https://sphoorthigurram.github.io/sphoorthi-website/ev-charger-topology.png",
      },
    ],
    documents: [
      {
        title: "IFEC 2026 Technical Proposal",
        description: "Technical paper covering the system architecture, design choices, and validation plan.",
        url: "https://sphoorthigurram.github.io/sphoorthi-website/ev-charger-proposal.pdf",
        format: "PDF",
      },
    ],
  },
  {
    id: "eden",
    title: "Project EDEN \u2014 AI Humanoid Robot",
    org: "EDEN Startup",
    role: "Software Engineer",
    year: "2026 \u2014 Present",
    image: "https://sphoorthigurram.github.io/sphoorthi-website/eden-simulator.png",
    summary:
      "A humanoid robotics framework with adaptive reasoning, emotional context, and long-term memory \u2014 EDEN can remember you, text you, and link those conversations to your physical face with computer vision. The current sim applies that stack to enforcing lab safety rules.",
    highlights: [
      "Personality and long-term memory so EDEN can recall people and ongoing conversations",
      "Messaging integration that connects text chats to a recognized face via computer vision",
      "Browser-native 3D simulator for perception, navigation, and control experiments",
      "Active use case: lab safety rule enforcement in simulation",
      "LLM cognitive layer plus YOLO vision for scene understanding and intent",
      "Power distribution architecture and ROS 2 hooks for the physical platform",
    ],
    stack: ["Three.js", "React Three Fiber", "ROS 2", "YOLO", "Python", "LLM Integration", "Computer Vision"],
    metrics: [
      { label: "Focus", value: "Memory + CV" },
      { label: "Sim", value: "Lab safety" },
      { label: "Stack", value: "LLM + ROS 2" },
    ],
    diagrams: [
      {
        title: "EDEN 3D Simulator",
        description: "Browser sim used to prototype perception, interaction, and lab-safety enforcement.",
        image: "https://sphoorthigurram.github.io/sphoorthi-website/eden-simulator.png",
      },
    ],
    externalLinks: [
      {
        label: "EDEN Project Site",
        description: "Demos, roadmap, and documentation for the humanoid framework.",
        url: "https://eden-robotics.github.io/Eden/",
      },
      {
        label: "Live EDEN 3D Simulator",
        description: "Open the interactive lab-safety sim in a new tab.",
        url: "https://eden-robotics.github.io/Eden/sim",
      },
      {
        label: "Demos",
        description: "Featured demos on the EDEN site.",
        url: "https://eden-robotics.github.io/Eden/#demos",
      },
    ],
  },
  {
    id: "auv",
    title: 'Autonomous Underwater Vehicle "Swim Shady"',
    org: "WIRED AUV Team",
    role: "Executive Lead & Electrical Engineer",
    year: "2025 \u2014 Present",
    image: "https://sphoorthigurram.github.io/sphoorthi-website/wired-auv-pool.jpg",
    summary:
      "A competition-grade autonomous submarine designed, wired, and pool-tested by a 40+ member team, from custom power boards to Doppler velocity navigation.",
    highlights: [
      "Led a 40+ member multidisciplinary team through design, build, and pool testing",
      "NVIDIA Jetson Nano compute running the autonomy stack onboard",
      "8\u00d7 T200 thrusters for full six-degree-of-freedom maneuvering",
      "Teledyne DVL navigation for precise underwater dead reckoning",
      "Custom Altium PCBs with boost converters supplying 24 V and 18 V rails",
    ],
    stack: ["Altium Designer", "Jetson Nano", "Python", "Sensor Fusion", "Linux"],
    metrics: [
      { label: "Team", value: "40+ members" },
      { label: "Thrusters", value: "8\u00d7 T200" },
      { label: "Rails", value: "24 V / 18 V" },
    ],
    diagrams: [
      {
        title: "Electrical Wiring Schematic",
        description: "System-level wiring and power distribution plan for Swim Shady.",
        image: "https://sphoorthigurram.github.io/sphoorthi-website/auv-schematic.jpg",
      },
    ],
    externalLinks: [
      {
        label: "Open Interactive Schematic (Lucid)",
        description: "Explore the editable system schematic in Lucidspark.",
        url: "https://lucid.app/lucidspark/942e65dc-3da9-467a-9b67-7f9915968b43/edit?invitationId=inv_42dee7c1-22ce-4595-b453-0952b92954f9&page=0_0#",
      },
    ],
  },
  {
    id: "solar-furnace",
    title: "Concentrating Solar Furnace",
    org: "Sunstrike Optics LLC / SHINE Lab",
    role: "Student Researcher",
    year: "2026 \u2014 Present",
    image: "https://sphoorthigurram.github.io/sphoorthi-website/gallery/fresnel-lens-diagram.svg",
    summary:
      "An off-grid Fresnel lens solar concentrator that tracks the sun on two axes and logs its thermal behavior for model validation.",
    highlights: [
      "Off-grid Fresnel lens concentrator for high-temperature thermal capture",
      "Microprocessor-driven two-axis sun tracking for continuous focus",
      "MATLAB / Simulink thermal modeling of concentration and heat loss",
      "Multi-channel DAQ instrumentation for temperature and irradiance logging",
    ],
    stack: ["MATLAB / Simulink", "Microprocessors", "DAQ", "Embedded Systems"],
    metrics: [
      { label: "Tracking", value: "Two-axis" },
      { label: "Optics", value: "Fresnel lens" },
      { label: "Power", value: "Off-grid" },
    ],
    diagrams: [
      {
        title: "Fresnel Lens Concentration",
        description: "Large-aperture Fresnel optics focusing sunlight onto a high-intensity focal spot.",
        image: "https://sphoorthigurram.github.io/sphoorthi-website/gallery/fresnel-lens-diagram.svg",
      },
      {
        title: "Dual-Axis Solar Tracker",
        description: "Tracking assembly for maintaining continuous solar focus on the Fresnel concentrator.",
        image: "https://sphoorthigurram.github.io/sphoorthi-website/shine-tracker.png",
      },
    ],
  },
];

export const stats = [
  { value: "230+", label: "Team members led", detail: "Across robotics and power electronics orgs" },
  { value: "125+", label: "Students tutored", detail: "Reaching 25 countries" },
  { value: "~96%", label: "EV charger efficiency", detail: "1 kW bidirectional design" },
  {
    value: "Top 4.89%",
    label: "National speech & debate",
    detail: "National Degree of Distinction",
  },
];

export const gallery = [
  {
    src: "https://sphoorthigurram.github.io/sphoorthi-website/gallery/ev-charger-presentation-1.jpg",
    caption: "Presenting our bidirectional EV charger architecture",
  },
  {
    src: "https://sphoorthigurram.github.io/sphoorthi-website/gallery/ev-charger-presentation-2.jpg",
    caption: "Explaining bidirectional charging through a grid storage analogy",
  },
  {
    src: "https://sphoorthigurram.github.io/sphoorthi-website/gallery/wired-nationals-team.jpg",
    caption: "WIRED Robotics team headed to nationals",
  },
  {
    src: "https://sphoorthigurram.github.io/sphoorthi-website/gallery/think-tank-electra-team-1.jpg",
    caption: "Team Electra team photo",
  },
  {
    src: "https://sphoorthigurram.github.io/sphoorthi-website/gallery/auv-build-collage.jpg",
    caption: "Build days, wiring, debugging, and pool testing for the AUV",
  },
  {
    src: "https://sphoorthigurram.github.io/sphoorthi-website/gallery/ev-charger-first-presentation.jpg",
    caption: "First EV charger presentation",
  },
  {
    src: "https://sphoorthigurram.github.io/sphoorthi-website/gallery/think-tank-electra-team-2.jpg",
    caption: "Team Electra group",
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  tags: string[];
  media?: { title: string; description: string; image: string };
};

export const experiences: Experience[] = [
  {
    org: "TAMU Think Tank \u2014 Team Electra",
    role: "Technical Lead",
    period: "Aug 2025 \u2013 Present",
    location: "College Station, TX",
    points: [
      "Lead the electrical design of a 1 kW bi-directional EV charger from topology selection to board bring-up.",
      "Own the GaN totem-pole PFC and Dual Active Bridge stages, reaching ~96% efficiency and ~0.99 power factor.",
      "Coordinate schematic reviews, LTSpice validation, and Altium layout across the technical subteam.",
    ],
    tags: ["Power Electronics", "Altium", "LTSpice"],
  },
  {
    org: "Project EDEN",
    role: "Software Engineer",
    period: "Jan 2026 \u2013 Present",
    location: "College Station, TX",
    points: [
      "Build EDEN's interaction stack: personality, long-term memory, and messaging tied to face recognition via computer vision.",
      "Prototype lab-safety enforcement in the browser 3D simulator with Three.js / React Three Fiber and YOLO perception.",
      "Design power distribution and ROS 2 interfaces toward the physical humanoid platform.",
    ],
    tags: ["Three.js", "ROS 2", "Computer Vision", "LLM"],
  },
  {
    org: "WIRED AUV Team",
    role: "Executive Lead & Electrical Engineer",
    period: "Aug 2025 \u2013 Present",
    location: "College Station, TX",
    points: [
      "Direct a 40+ member team building the autonomous underwater vehicle \u201cSwim Shady\u201d.",
      "Designed custom Altium PCBs with boost converters delivering 24 V and 18 V rails.",
      "Integrated Jetson Nano compute, 8\u00d7 T200 thrusters, and Teledyne DVL navigation.",
    ],
    tags: ["Leadership", "PCB Design", "Sensor Fusion"],
  },
  {
    org: "Sunstrike Optics LLC / SHINE Lab",
    role: "Student Researcher",
    period: "Feb 2026 \u2013 Present",
    location: "College Station, TX",
    points: [
      "Develop an off-grid concentrating solar furnace with microprocessor two-axis sun tracking.",
      "Model thermal performance in MATLAB / Simulink and validate against multi-channel DAQ data.",
    ],
    tags: ["MATLAB", "Research", "Instrumentation"],
  },
  {
    org: "Peace Resistance & Democracy Lab \u2014 UT Dallas",
    role: "Research Intern",
    period: "May 2024 \u2013 Aug 2024",
    location: "Richardson, TX",
    points: [
      "Collected and cleaned conflict and governance datasets supporting ongoing political science research.",
      "Ran statistical analysis in R and summarized findings for lab reviews.",
    ],
    tags: ["R", "Data Analysis"],
  },
  {
    org: "Schoolhouse.world",
    role: "Mathematics Tutor & Bootcamp Organizer",
    period: "May 2024 \u2013 Aug 2024",
    location: "Remote",
    points: [
      "Tutored 125+ students across 25 countries in algebra, precalculus, and calculus.",
      "Organized bootcamp cohorts and coordinated volunteer tutors across time zones.",
    ],
    tags: ["Teaching", "Community"],
    media: {
      title: "Certification & Feedback Portfolio",
      description: "Teaching certifications and learner feedback from Schoolhouse.world.",
      image: "https://sphoorthigurram.github.io/sphoorthi-website/schoolhouse-feedback.png",
    },
  },
];

export const skillGroups = [
  {
    name: "Engineering & Hardware",
    items: [
      "Altium Designer",
      "LTSpice",
      "Fusion360",
      "SolidWorks",
      "AutoCAD",
      "MATLAB / Simulink",
      "PCB Design",
      "Power Electronics",
      "Embedded Systems",
    ],
  },
  {
    name: "Software & Robotics",
    items: [
      "Python",
      "C++",
      "ROS 2",
      "R",
      "Linux (Ubuntu)",
      "Git",
      "PLC Logic",
      "Sensor Fusion",
      "Microprocessors",
    ],
  },
  {
    name: "Data & AI",
    items: [
      "Computer Vision",
      "YOLO",
      "Deep RL",
      "Sim2Real",
      "NumPy / Pandas",
      "Matplotlib",
      "DAQ",
      "LLM Integration",
      "Prompt Engineering",
    ],
  },
  {
    name: "Languages",
    items: ["English", "Spanish", "Telugu", "Hindi"],
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    id: "semiconductor-fabrication",
    title: "Semiconductor Fabrication 101",
    issuer: "Purdue University, UT Austin & Intel Corporation",
    date: "Aug 3, 2026",
    description:
      "Completed the Purdue University, University of Texas at Austin, and Intel Corporation sponsored Semiconductor Fabrication 101 course.",
    image: "https://sphoorthigurram.github.io/sphoorthi-website/semiconductor-fab.jpg",
  },
  {
    id: "wireless-microwave-communications",
    title: "Wireless, Microwave, and Communications Engineering",
    issuer: "SMARTHub \u00b7 Spectrum Sizzle Workshop",
    date: "Jun 14, 2026",
    description:
      "Completed the Spectrum Sizzle Workshop covering spectrum policy, passive systems, communication system design, microwave circuits, and radar technology.",
    image: "https://sphoorthigurram.github.io/sphoorthi-website/wireless%20cert.jpg",
  },
  {
    id: "electronics-foundations-fundamentals",
    title: "Electronics Foundations: Fundamentals",
    issuer: "LinkedIn Learning",
    date: "2026",
    description:
      "Completed Barron Stone's Electronics Foundations course covering voltage, current, resistance, power, circuit basics, multimeters, and real-world power sources.",
    image:
      "https://sphoorthigurram.github.io/sphoorthi-website/CertificateOfCompletion_Electronics%20Foundations%20Fundamentals.pdf",
    url: "https://sphoorthigurram.github.io/sphoorthi-website/CertificateOfCompletion_Electronics%20Foundations%20Fundamentals.pdf",
  },
  {
    id: "fusion360-certified",
    title: "Autodesk Fusion 360 Certified User",
    issuer: "Autodesk",
    date: "May 2025",
    description: "Certified user of Autodesk Fusion 360 for CAD, CAM, and collaborative product design.",
    image: "https://sphoorthigurram.github.io/sphoorthi-website/autodesk%20logo.webp",
    url: "https://www.certiport.com/portal/pages/credentialverification.aspx",
  },
];

export const roles = ["Engineer", "Researcher", "Builder", "Leader", "Innovator"];

export const contact = {
  email: "gurramsphoorthi@gmail.com",
  linkedin: "https://linkedin.com/in/sphoorthi-gurram",
  github: "https://github.com/sphoorthigurram",
  location: "College Station, TX",
};

export const navLinks = [
  { href: "#gallery", label: "Gallery" },
  { href: "#projects", label: "Featured Work" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
