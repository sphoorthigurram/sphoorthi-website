export interface SchematicItem {
  type: "image" | "link" | "embed";
  title: string;
  src: string;
  caption?: string;
  rotate?: boolean;
  rotateCCW?: boolean;
  rotateCW?: boolean;
  small?: boolean;
}

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
  schematics?: SchematicItem[];
  links?: { label: string; href: string; external?: boolean; description?: string }[];
}

export const experiencesData: ExperienceData[] = [
  {
    slug: "ev-charger",
    org: "TAMU Think Tank - Team Electra",
    shortOrg: "TAMU Think Tank",
    role: "Technical Lead",
    period: "Aug 2025 - Present",
    location: "College Station, TX",
    category: "Power Electronics",
    color: "text-blue-800",
    bg: "bg-blue-50",
    border: "border-blue-200",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80",
    tagline:
      "Leading design of a 1 kW bi-directional EV charger for the IEEE Future Energy Challenge",
    overview:
      "As Technical Lead of Team Electra, I led a 9-person interdisciplinary team to design and build a 1 kW bi-directional onboard EV charger for the IEEE Future Energy Challenge. The charger targets high efficiency and near-unity power factor using a GaN-based bridgeless totem-pole PFC frontend and a Dual Active Bridge DC-DC stage, with full bidirectional power flow for Vehicle-to-Grid operation.",
    technicalHighlights: [
      {
        label: "Frontend Topology",
        detail:
          "GaN-based bridgeless totem-pole PFC reduces conduction losses while supporting power factor correction at the AC input.",
      },
      {
        label: "DC-DC Stage",
        detail:
          "Dual Active Bridge architecture provides galvanic isolation, soft-switching behavior, and bidirectional power flow.",
      },
      {
        label: "System Debugging",
        detail:
          "Served as primary system debugger across power-stage bring-up, schematic review, PCB constraints, and proposal milestones.",
      },
    ],
    achievements: [
      "Achieved approximately 96% efficiency and approximately 0.99 power factor in the design target",
      "Co-authored the IEEE IFEC 2026 technical proposal",
      "Led a 9-person team across hardware design, PCB layout, simulation, and test phases",
    ],
    tags: ["GaN", "Power Electronics", "Altium Designer", "LTSpice", "DAB", "PFC"],
    schematics: [
      {
        type: "image",
        title: "Full System Topology",
        src: "/sphoorthi-website/ev-charger-topology.png",
        caption:
          "Bi-directional EV charger topology simulated before hardware build.",
      },
      {
        type: "embed",
        title: "IFEC 2026 Technical Proposal",
        src: "/sphoorthi-website/ev-charger-proposal.pdf",
        caption: "IEEE Future Energy Challenge 2026 technical proposal.",
      },
    ],
  },
  {
    slug: "eden-robot",
    org: "Project EDEN",
    shortOrg: "Project EDEN",
    role: "Software Engineer",
    period: "Jan 2026 - Present",
    location: "College Station, TX",
    category: "AI / Robotics",
    color: "text-indigo-800",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    heroImage: "/sphoorthi-website/eden-simulator.png",
    tagline:
      "Engineering the vision pipeline and power architecture for an AI humanoid robot",
    overview:
      "Project EDEN is building an AI-powered humanoid robot with adaptive reasoning capabilities. As a Software Engineer, I work on the computer vision pipeline for real-time human perception, the power distribution architecture for the bipedal platform, and a browser-based 3D simulator used to validate autonomous behaviors before hardware deployment.",
    technicalHighlights: [
      {
        label: "EDEN Simulator",
        detail:
          "Browser-native 3D robot simulator built with Three.js and React Three Fiber for validating autonomy behaviors.",
      },
      {
        label: "Computer Vision",
        detail:
          "YOLO-based detection work for real-time human detection and tracking on edge compute hardware.",
      },
      {
        label: "Power Architecture",
        detail:
          "Power distribution planning for motors, sensors, batteries, and compute boards on the bipedal platform.",
      },
    ],
    achievements: [
      "Built and linked a live browser-native 3D simulator",
      "Implemented ROS-style simulator architecture for decoupled dynamics, sensing, and autonomy modules",
      "Built real-time computer vision pipeline work for human detection",
    ],
    tags: ["Three.js", "React Three Fiber", "ROS 2", "Python", "YOLO", "Computer Vision"],
    links: [
      {
        label: "EDEN Simulator",
        href: "https://eden-robotics.github.io/Eden/sim",
        external: true,
        description: "Live browser-based 3D robot simulator",
      },
      {
        label: "Project EDEN",
        href: "https://eden-robotics.github.io/Eden/",
        external: true,
        description: "Project site and technical context",
      },
    ],
  },
  {
    slug: "wired-auv",
    org: "WIRED AUV Team",
    shortOrg: "WIRED AUV",
    role: "Executive Lead / Electrical Engineer",
    period: "Aug 2025 - Present",
    location: "College Station, TX",
    category: "Robotics",
    color: "text-sky-800",
    bg: "bg-sky-50",
    border: "border-sky-200",
    heroImage: "/sphoorthi-website/wired-auv-pool.jpg",
    tagline:
      "Leading a 60+ member AUV team while redesigning the power architecture and DVL integration",
    overview:
      "WIRED is Texas A&M's competitive Autonomous Underwater Vehicle team for RoboSub. As Executive Lead and Electrical Engineer, I manage a 60+ member organization across electrical, mechanical, software, and business sub-teams while contributing hands-on to the robot's power architecture, DVL integration, PCB work, and field testing.",
    technicalHighlights: [
      {
        label: "Power Architecture",
        detail:
          "Transitioned the power subsystem to regulated rails for DVL, thrusters, and Jetson loads while reducing voltage-drop risk under thruster load.",
      },
      {
        label: "DVL Integration",
        detail:
          "Spearheading Doppler Velocity Log integration for underwater dead-reckoning navigation without GPS.",
      },
      {
        label: "Custom PCBs",
        detail:
          "Designed and revised PCB-level hardware in Altium, including GPIO extension and subsystem support boards.",
      },
      {
        label: "Current Lucid Schematic",
        detail:
          "Maintained a system-level schematic covering thruster-side routing, Jetson-side routing, kill switch, mission switch, power conversion, fuse board, ESC PCB, PWM routing, sensors, and Jetson pins.",
      },
    ],
    achievements: [
      "Executive Lead of a 60+ member organization across electrical, mechanical, software, and business sub-teams",
      "Led boost converter transition for DVL, thrusters, and Jetson rails",
      "Redesigned ESC layout to reduce terminal block failures from wire strain",
      "Spearheading first DVL integration in WIRED team history",
    ],
    tags: ["Altium Designer", "PCB Design", "Python", "Power Electronics", "DVL", "NVIDIA Jetson", "Leadership"],
    schematics: [
      {
        type: "image",
        title: "Current Lucid Electrical Schematic",
        src: "/sphoorthi-website/auv-schematic.jpg",
        caption:
          "Current WIRED AUV schematic covering the thruster side, Jetson side, kill switch, mission switch, power conversion, fuse board, ESC PCB, PWM routing, sensors, and Jetson pins.",
      },
      {
        type: "link",
        title: "Interactive Robot Schematic (Lucidchart)",
        src: "https://lucid.app/lucidspark/942e65dc-3da9-467a-9b67-7f9915968b43/edit?invitationId=inv_42dee7c1-22ce-4595-b453-0952b92954f9&page=0_0#",
        caption:
          "Open the interactive system-level schematic in Lucidchart for the latest WIRED AUV wiring view.",
      },
    ],
  },
  {
    slug: "shine-lab",
    org: "Sunstrike Optics LLC",
    shortOrg: "Sunstrike Optics",
    role: "Engineering Research Intern",
    period: "Feb 2026 - Present",
    location: "College Station, TX",
    category: "Solar Research",
    color: "text-amber-800",
    bg: "bg-amber-50",
    border: "border-amber-200",
    heroImage: "/sphoorthi-website/shine-tracker.png",
    tagline:
      "Testing and debugging solar-tracker prototypes for high-temperature optical concentration research",
    overview:
      "At Sunstrike Optics LLC, I support solar-tracker prototype testing and lab bring-up for high-temperature optical concentration research. My work has included setting up a second prototype, validating thermal readings, checking circuit behavior with a multimeter, cleaning up tracker wiring, preparing stepper motor connections, and documenting debugging progress across controller, encoder, and display tests.",
    technicalHighlights: [
      {
        label: "Prototype Bring-Up",
        detail:
          "Set up and tested solar-tracker prototype hardware, organized wiring, and prepared the system for continued integration work.",
      },
      {
        label: "Thermal Readings",
        detail:
          "Debugged thermal sensor readings, checked connections, validated live temperature changes, and documented outdoor test results.",
      },
      {
        label: "Tracker Wiring",
        detail:
          "Inspected solar-tracker mechanical units, removed old cable harnesses, and prepared encoder and stepper motor wiring for safer integration.",
      },
      {
        label: "Controller Debugging",
        detail:
          "Ran controller power checks, upload tests, display checks, and serial debugging to isolate issues during prototype bring-up.",
      },
    ],
    achievements: [
      "Set up a second solar-tracker prototype and documented testing progress",
      "Validated thermal readings through connection checks, multimeter testing, and observed temperature changes",
      "Cleaned up old tracker wiring and prepared stepper motor and encoder connections",
      "Debugged controller upload, display, and serial communication issues during lab bring-up",
    ],
    tags: ["ESP32", "Arduino IDE", "Thermal Testing", "Circuit Debugging", "Prototype Bring-Up", "Solar Tracking"],
    schematics: [
      {
        type: "image",
        title: "Solar Tracker Prototype",
        src: "/sphoorthi-website/shine-tracker.png",
        caption:
          "Sunstrike Optics tracker prototype used for solar concentration research. Public summary only: setup, wiring cleanup, thermal readings, and circuit debugging.",
      },
    ],
  },
  {
    slug: "prd-lab",
    org: "Peace Resistance & Democracy Lab - UT Dallas",
    shortOrg: "PRD Lab / UT Dallas",
    role: "Research Intern",
    period: "May 2024 - Aug 2024",
    location: "Richardson, TX",
    category: "Research",
    color: "text-emerald-800",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    tagline:
      "Applying data science methods to study democratic resilience and non-violent resistance",
    overview:
      "At the Peace Resistance & Democracy Lab at UT Dallas, I contributed to faculty-led research studying democratic breakdown and non-violent resistance movements. I analyzed historical datasets, built visualizations, and wrote comparative research reports.",
    technicalHighlights: [
      { label: "Data Analysis", detail: "Used R, scikit-learn, and plotly for research data visualization." },
      { label: "Research Writing", detail: "Authored case-study reports on Kyrgyzstan and Uruguay." },
    ],
    achievements: [
      "Produced data visualizations across 50+ countries",
      "Authored comparative country reports for faculty-led research",
    ],
    tags: ["R", "Data Visualization", "scikit-learn", "plotly", "Research Methods"],
  },
  {
    slug: "schoolhouse",
    org: "Schoolhouse World",
    shortOrg: "Schoolhouse.world",
    role: "Mathematics Tutor",
    period: "May 2024 - Aug 2024",
    location: "Virtual / Global",
    category: "Volunteer",
    color: "text-rose-800",
    bg: "bg-rose-50",
    border: "border-rose-200",
    heroImage: "/sphoorthi-website/schoolhouse-feedback.png",
    tagline:
      "Tutoring 100+ learners across 20 countries on a peer-led learning platform",
    overview:
      "As a certified mathematics tutor on Schoolhouse.world, I taught 100+ learners across 20 countries through tutoring sessions, a summer camp, and a four-week math bootcamp.",
    technicalHighlights: [
      { label: "Tutoring Scale", detail: "Taught 100+ learners across 20 countries." },
      { label: "Program Design", detail: "Organized a summer camp and four-week bootcamp with tiered lesson plans." },
    ],
    achievements: [
      "Taught 100+ learners across 20 countries",
      "Earned 194 positive ratings and Top 5% Schoolhouse feedback recognition",
    ],
    tags: ["Mathematics", "Curriculum Design", "Communication", "Mentoring"],
    schematics: [
      {
        type: "image",
        title: "Featured Feedback",
        src: "/sphoorthi-website/schoolhouse-feedback.png",
        caption:
          "Schoolhouse.world certification portfolio feedback from real learners.",
      },
    ],
  },
  {
    slug: "speech-debate",
    org: "National Speech & Debate - Prosper High School",
    shortOrg: "NSDA",
    role: "Competitor / CLA Debate Agent",
    period: "2020 - 2024",
    location: "Prosper, TX / Nationwide",
    category: "Speech & Debate",
    color: "text-red-800",
    bg: "bg-red-50",
    border: "border-red-200",
    heroImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1400&q=80",
    tagline:
      "National Degree of Distinction - top 4.89% of competitors nationwide",
    overview:
      "I competed in Speech & Debate throughout high school at Prosper High School, earning the NSDA National Degree of Distinction. I competed across Lincoln-Douglas, Congressional Debate, and Extemporaneous Speaking, and served as a senior Debate Agent for Civic Leaders of America.",
    technicalHighlights: [
      { label: "Recognition", detail: "Earned the NSDA National Degree of Distinction." },
      { label: "Leadership", detail: "Organized mock-congress conventions and mentored newer competitors." },
    ],
    achievements: [
      "NSDA National Degree of Distinction - top 4.89% nationwide",
      "Competed across LD Debate, Congressional Debate, and Extemporaneous Speaking",
      "Senior Debate Agent at Civic Leaders of America",
    ],
    tags: ["Lincoln-Douglas", "Congressional Debate", "Extemporaneous", "Public Speaking"],
    links: [
      {
        label: "LinkedIn - Competition Highlights",
        href: "https://www.linkedin.com/in/sphoorthi-gurram",
        external: true,
        description: "Posts, articles, and competition updates",
      },
    ],
  },
];
