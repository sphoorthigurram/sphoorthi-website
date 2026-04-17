export interface ExperienceData {
  slug: string;
  org: string;
  shortOrg: string;
  role: string;
  period: string;
  location: string;
  category: string;
  color: string;
  bg: string;
  border: string;
  heroImage: string;
  tagline: string;
  overview: string;
  technicalHighlights: { label: string; detail: string }[];
  achievements: string[];
  tags: string[];
  links?: { label: string; href: string; external?: boolean }[];
}

export const experiencesData: ExperienceData[] = [
  {
    slug: "ev-charger",
    org: "TAMU Think Tank — Team Electra",
    shortOrg: "TAMU Think Tank",
    role: "Technical Lead",
    period: "Aug 2025 – Present",
    location: "College Station, TX",
    category: "Power Electronics",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    tagline:
      "Leading design of a 1 kW bi-directional EV charger for the IEEE Future Energy Challenge",
    overview:
      "As Technical Lead of Team Electra, I led a 9-person interdisciplinary team to design and build a 1 kW bi-directional onboard EV charger for the IEEE Future Energy Challenge (IFEC 2026). The charger achieves ~96% peak efficiency and ~0.99 power factor — performance competitive with commercial-grade hardware — while supporting full Vehicle-to-Grid (V2G) power reversal. The project pushed me to own the system at every level: simulation, schematic, PCB, gate driver tuning, and debugging across both AC and DC stages.",
    technicalHighlights: [
      {
        label: "Frontend Topology",
        detail:
          "GaN-based bridgeless totem-pole PFC — eliminates the conventional diode bridge, cutting conduction losses and enabling near-unity power factor correction at the AC input",
      },
      {
        label: "DC-DC Stage",
        detail:
          "Dual Active Bridge (DAB) architecture provides galvanic isolation, soft-switching for minimal switching losses, and bidirectional power flow for V2G operation",
      },
      {
        label: "DC Bus",
        detail:
          "Stable 400 V DC bus — compatible with standard EV battery voltages and grid-tied inverter requirements, enabling future integration with home energy storage",
      },
      {
        label: "Wide-Bandgap Devices",
        detail:
          "GaN transistors selected over Si MOSFETs for lower on-resistance, faster switching, and higher temperature operation — enabling a more compact and efficient design",
      },
      {
        label: "Design Tools",
        detail:
          "Altium Designer for multi-layer PCB layout and design rule checks; LTSpice for circuit simulation and switching waveform validation before hardware build",
      },
      {
        label: "My Role",
        detail:
          "Primary system debugger across both power stages; co-authored the IEEE IFEC 2026 technical proposal; coordinated team across schematic, PCB, and firmware milestones",
      },
    ],
    achievements: [
      "Achieved ~96% efficiency and ~0.99 power factor — on par with commercial onboard EV chargers",
      "Resolved gate driver timing faults and DAB resonance instability as primary system debugger",
      "Co-authored the IEEE IFEC 2026 technical proposal accepted for international competition",
      "Led 9-person team across hardware design, PCB layout, simulation, and test phases",
      "Designed for full bidirectionality — supporting Vehicle-to-Grid (V2G) power export",
    ],
    tags: [
      "GaN",
      "Power Electronics",
      "Altium Designer",
      "LTSpice",
      "DAB Architecture",
      "PFC",
      "PCB Design",
      "Embedded Systems",
    ],
    links: [
      {
        label: "View IFEC 2026 Proposal (PDF)",
        href: "/sphoorthi-website/ev-charger-proposal.pdf",
        external: true,
      },
    ],
  },
  {
    slug: "eden-robot",
    org: "Project EDEN",
    shortOrg: "Project EDEN",
    role: "Software Engineer",
    period: "Jan 2026 – Present",
    location: "College Station, TX",
    category: "AI · Robotics",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    heroImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&q=80",
    tagline:
      "Engineering the vision pipeline and power architecture for an AI humanoid robot startup",
    overview:
      "Project EDEN is building an AI-powered humanoid robot with adaptive reasoning capabilities. As a Software Engineer, I own two of the most critical subsystems: the computer vision pipeline that lets the robot perceive humans in real time, and the power distribution architecture that keeps the bipedal platform operational under dynamic load conditions. The work sits at the intersection of machine learning, embedded systems, and power electronics — the exact combination I'm most interested in.",
    technicalHighlights: [
      {
        label: "Computer Vision Pipeline",
        detail:
          "Trained YOLO-based object detection models in Python for real-time human detection and tracking, optimized for latency on edge compute hardware aboard the robot",
      },
      {
        label: "Power Distribution",
        detail:
          "Designed the full power distribution architecture for the bipedal platform: rail voltages, battery management, load sequencing, and protection circuits for motors, sensors, and compute",
      },
      {
        label: "Low-Latency Interface",
        detail:
          "Optimized the ROS 2 communication layer between vision sensors and motor controllers, reducing sensor-to-actuator latency critical for reactive and stable locomotion",
      },
      {
        label: "Platform Context",
        detail:
          "Bipedal humanoid presents the hardest class of robotics integration challenge — vision, control, and power subsystems must be tightly co-designed for stable operation",
      },
      {
        label: "Stack",
        detail:
          "Python (PyTorch / Ultralytics YOLO), ROS 2, Ubuntu-based embedded compute, custom power regulation hardware",
      },
    ],
    achievements: [
      "Built real-time YOLO human detection pipeline achieving accurate tracking in dynamic, cluttered environments",
      "Designed complete power distribution architecture for all motors, sensors, and compute boards on the bipedal platform",
      "Reduced sensor-to-actuator communication latency through optimized ROS 2 message pipeline",
    ],
    tags: [
      "Python",
      "YOLO",
      "Computer Vision",
      "ROS 2",
      "Power Electronics",
      "Embedded Systems",
      "Deep Learning",
      "PyTorch",
    ],
  },
  {
    slug: "wired-auv",
    org: "WIRED AUV Team",
    shortOrg: "WIRED AUV",
    role: "Executive Lead · Electrical Engineer",
    period: "Aug 2025 – Present",
    location: "College Station, TX",
    category: "Robotics",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    heroImage:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=1400&q=80",
    tagline:
      "Leading a 40+ member AUV team while redesigning the power architecture and DVL integration",
    overview:
      "WIRED (Water-Integrated Robotics Engineering and Design) is Texas A&M's competitive Autonomous Underwater Vehicle team, competing in the international RoboSub competition. As Executive Lead, I manage cross-functional operations across four sub-teams while also contributing hands-on as an electrical engineer — redesigning the full power architecture and spearheading Doppler Velocity Log (DVL) sensor integration for autonomous underwater navigation.",
    technicalHighlights: [
      {
        label: "PCB Redesign",
        detail:
          "Redesigned the full ESC layout and PCB stack in Altium Designer to reduce mechanical wire strain, improve thermal clearance, and enable modular hot-swap stacking — reducing maintenance time at competition",
      },
      {
        label: "Power Architecture",
        detail:
          "Transitioned the power subsystem from buck to boost converters, providing stabilized 24 V and 18 V regulated rails — significantly improving supply regulation under the variable thruster current spikes",
      },
      {
        label: "DVL Integration",
        detail:
          "Leading software and hardware integration of a Doppler Velocity Log — a sonar-based sensor providing precise velocity relative to the seafloor, enabling accurate dead-reckoning navigation without GPS",
      },
      {
        label: "Mechanical Design",
        detail:
          "Used Fusion360 and SolidWorks for waterproof enclosure design, pressure testing, and mounting bracket CAD for new hardware additions",
      },
      {
        label: "Executive Leadership",
        detail:
          "Manage internal operations, cross-team technical milestones, member onboarding, and competition logistics for a 40+ member organization across electrical, mechanical, software, and business teams",
      },
    ],
    achievements: [
      "Lead 40+ member organization across 4 sub-teams with full operational and technical oversight",
      "Redesigned PCB in Altium — reducing wire strain and enabling modular component replacement during competition",
      "Stabilized power rails by transitioning to boost converter architecture, eliminating voltage droops under thruster load",
      "Spearheading DVL integration for accurate dead-reckoning navigation — a first for the WIRED team",
    ],
    tags: [
      "Altium Designer",
      "PCB Design",
      "Fusion360",
      "SolidWorks",
      "Python",
      "Power Electronics",
      "ROS 2",
      "DVL",
      "Leadership",
    ],
  },
  {
    slug: "shine-lab",
    org: "SHINE Lab — Texas A&M",
    shortOrg: "SHINE Lab",
    role: "Student Researcher",
    period: "Feb 2026 – Present",
    location: "College Station, TX",
    category: "Energy Research",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    heroImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80",
    tagline:
      "Developing a Fresnel-lens solar furnace for off-grid high-temperature thermal energy",
    overview:
      "At the SHINE (Solar High-temperature Irradiance and Novel Energy) Lab at Texas A&M, I'm contributing to the development of an off-grid concentrating solar system using Fresnel lenses to focus sunlight into a high-temperature solar furnace. The research targets applications in industrial process heat, materials synthesis, and decentralized renewable energy — domains where photovoltaic panels are fundamentally limited. My work spans microcontroller programming, DAQ system integration, and MATLAB/Simulink modeling of the thermal receiver.",
    technicalHighlights: [
      {
        label: "Concentrating Solar Optics",
        detail:
          "Fresnel lens array focuses direct solar irradiance onto a receiver aperture, achieving high concentration ratios and temperatures without complex parabolic dish mechanics",
      },
      {
        label: "Precision Sun-Tracking",
        detail:
          "Programming microcontrollers and interfacing angular position sensors for two-axis sun-tracking — maximizing daily energy capture and maintaining peak concentration throughout the day",
      },
      {
        label: "Thermal Modeling",
        detail:
          "MATLAB/Simulink models of receiver thermal dynamics, heat flux distribution, and system efficiency under varying insolation conditions — guiding geometry optimization",
      },
      {
        label: "DAQ Integration",
        detail:
          "Interfacing temperature sensors, pyranometers, and power measurement hardware through a multi-channel DAQ system for real-time performance monitoring and data logging",
      },
      {
        label: "Research Objective",
        detail:
          "Validate concentration ratio and thermal efficiency metrics; optimize receiver geometry for maximum energy conversion toward a publishable performance characterization",
      },
    ],
    achievements: [
      "Programmed microcontroller-based two-axis sun-tracking system for maximum solar collection efficiency",
      "Built MATLAB/Simulink thermal receiver model to predict heat flux distribution and guide design optimization",
      "Integrated multi-channel DAQ system monitoring thermal, optical, and electrical performance metrics in real time",
    ],
    tags: [
      "MATLAB",
      "Simulink",
      "Microprocessors",
      "Sensor Integration",
      "Fresnel Optics",
      "DAQ",
      "Embedded Systems",
      "Thermal Systems",
    ],
  },
  {
    slug: "prd-lab",
    org: "Peace Resistance & Democracy Lab — UT Dallas",
    shortOrg: "PRD Lab · UTDallas",
    role: "Research Intern",
    period: "May 2024 – Aug 2024",
    location: "Richardson, TX",
    category: "Research",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    tagline:
      "Applying data science methods to study democratic resilience and non-violent resistance",
    overview:
      "At the Peace Resistance & Democracy Lab at UT Dallas, I contributed to faculty-led research studying the mechanisms of democratic breakdown and non-violent resistance movements. Using computational methods, I analyzed historical datasets across dozens of countries to identify structural patterns correlated with democratic collapse and resilience — providing quantitative support for political science research. This experience sharpened my ability to extract signal from complex datasets and communicate findings through clear data visualizations.",
    technicalHighlights: [
      {
        label: "Data Analysis",
        detail:
          "R programming with scikit-learn and plotly to visualize multi-dimensional trends in non-violent revolution datasets spanning decades and 50+ countries",
      },
      {
        label: "Statistical Methods",
        detail:
          "Regression analysis and clustering to identify structural factors correlated with democratic breakdown, informing the lab's broader quantitative comparative politics study",
      },
      {
        label: "Country Case Studies",
        detail:
          "Authored in-depth research reports on Kyrgyzstan and Uruguay as contrasting cases of democratic backsliding and resilience — contributing to the lab's publication pipeline",
      },
      {
        label: "Visualization Output",
        detail:
          "Produced interactive plotly dashboards and R-based charts mapping patterns across regions, used in lab presentations and the ongoing faculty research manuscript",
      },
    ],
    achievements: [
      "Produced data visualizations mapping non-violent revolution trends across 50+ countries using R and plotly",
      "Authored research reports on Kyrgyzstan and Uruguay as comparative case studies in democratic resilience",
      "Applied statistical clustering to identify shared structural preconditions across democratic breakdown events",
    ],
    tags: [
      "R Programming",
      "Data Visualization",
      "scikit-learn",
      "plotly",
      "Statistical Analysis",
      "Research Methods",
      "Political Science",
    ],
  },
  {
    slug: "schoolhouse",
    org: "Schoolhouse World",
    shortOrg: "Schoolhouse.world",
    role: "Mathematics Tutor",
    period: "May 2024 – Aug 2024",
    location: "Virtual · Global",
    category: "Volunteer",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80",
    tagline:
      "Tutoring 125+ students across 25 countries on the world's largest peer-led learning platform",
    overview:
      "Schoolhouse.world is a free, peer-to-peer tutoring platform co-founded by Sal Khan. As a certified mathematics tutor, I worked with students across 25 countries — an experience that developed my ability to communicate complex concepts clearly under diverse learning styles, design structured curricula from scratch, and lead programs at scale. Beyond 1-on-1 sessions, I organized a summer camp and a 4-week intensive bootcamp, coordinating scheduling, lesson plans, and assessments across time zones.",
    technicalHighlights: [
      {
        label: "Scale",
        detail:
          "125+ students tutored across 25 countries — coordinating scheduling, curriculum, and real-time progress tracking across global time zones",
      },
      {
        label: "Summer Camp",
        detail:
          "Organized and led a structured summer math camp with weekly themed sessions, milestone assessments, and customized practice problem sets",
      },
      {
        label: "4-Week Bootcamp",
        detail:
          "Designed and executed a 4-week intensive bootcamp covering algebra through calculus with tiered difficulty tracks, improving average assessment scores",
      },
      {
        label: "Subjects",
        detail:
          "Algebra, Pre-Calculus, Calculus, and Statistics — adapting explanations to each student's background, pace, and learning style across language and cultural barriers",
      },
    ],
    achievements: [
      "Tutored 125+ students across 25 countries in mathematics from algebra through calculus",
      "Organized a summer math camp with structured weekly curriculum and milestone-based progress tracking",
      "Led a 4-week intensive bootcamp — designing tiered lesson plans that measurably improved student assessment scores",
    ],
    tags: [
      "Mathematics",
      "Curriculum Design",
      "Communication",
      "Cross-Cultural",
      "Leadership",
      "Mentoring",
    ],
  },
];
