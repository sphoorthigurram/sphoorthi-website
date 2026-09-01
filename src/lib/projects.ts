export interface SchematicItem {
  type: "image" | "iframe" | "link";
  title: string;
  src: string;
  caption?: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  org: string;
  role: string;
  period: string;
  location: string;
  category: string;
  color: string;
  bg: string;
  border: string;
  cardImage: string;
  heroImage: string;
  tagline: string;
  overview: string;
  technicalHighlights: { label: string; detail: string }[];
  achievements: string[];
  tags: string[];
  schematics?: SchematicItem[];
  links?: { label: string; href: string; external?: boolean }[];
}

export const projectsData: ProjectData[] = [
  {
    slug: "ev-charger",
    title: "1 kW Bi-Directional EV Charger",
    org: "TAMU Think Tank / Team Electra",
    role: "Technical Lead",
    period: "Aug 2025 - Present",
    location: "College Station, TX",
    category: "Power Electronics",
    color: "text-blue-800",
    bg: "bg-blue-50",
    border: "border-blue-200",
    cardImage:
      "https://images.unsplash.com/photo-1593941707882-a5bac6861d12?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    tagline:
      "1 kW bi-directional onboard EV charger targeting high efficiency for the IEEE Future Energy Challenge",
    overview:
      "Led a 9-person team designing a 1 kW bi-directional onboard EV charger for the IEEE Future Energy Challenge. The design uses a GaN-based bridgeless totem-pole PFC frontend and a Dual Active Bridge DC-DC stage, with a stable 400 V DC bus and bidirectional power flow.",
    technicalHighlights: [
      {
        label: "GaN Totem-Pole PFC",
        detail:
          "Selected a bridgeless totem-pole PFC frontend to reduce conduction losses and support near-unity power factor correction.",
      },
      {
        label: "Dual Active Bridge",
        detail:
          "Used DAB architecture for galvanic isolation, bidirectional power flow, and soft-switching behavior.",
      },
      {
        label: "System Role",
        detail:
          "Led schematic, PCB, simulation, debugging, and proposal milestones across the team.",
      },
    ],
    achievements: [
      "Targeted approximately 96% efficiency and approximately 0.99 power factor",
      "Co-authored the IFEC 2026 technical proposal",
      "Led 9-person hardware design and debugging effort",
    ],
    tags: ["GaN", "Power Electronics", "Altium Designer", "LTSpice", "DAB", "PFC"],
    links: [
      {
        label: "View IFEC 2026 Proposal (PDF)",
        href: "/sphoorthi-website/ev-charger-proposal.pdf",
        external: true,
      },
    ],
  },
  {
    slug: "eden",
    title: "Project EDEN - AI Humanoid Robot",
    org: "EDEN Startup / Software Engineer",
    role: "Software Engineer",
    period: "Jan 2026 - Present",
    location: "College Station, TX",
    category: "AI / Robotics",
    color: "text-indigo-800",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    cardImage: "/sphoorthi-website/eden-simulator.png",
    heroImage: "/sphoorthi-website/eden-simulator.png",
    tagline:
      "Engineering the vision pipeline and power architecture for an AI humanoid robot",
    overview:
      "Project EDEN is building an AI-powered humanoid robot with adaptive reasoning capabilities. My work spans computer vision, power architecture, and a browser-native simulator used to develop and validate autonomous behavior.",
    technicalHighlights: [
      {
        label: "EDEN Simulator",
        detail:
          "Browser-native 3D simulator built with Three.js and React Three Fiber.",
      },
      {
        label: "Computer Vision",
        detail:
          "YOLO-based real-time human detection and tracking work for robotic perception.",
      },
      {
        label: "Power Distribution",
        detail:
          "Power architecture planning for motors, sensors, batteries, and compute boards.",
      },
    ],
    achievements: [
      "Built browser-native 3D robot simulator with sensor and autonomy modules",
      "Worked on YOLO-based real-time human detection",
      "Designed power distribution architecture for the bipedal platform",
    ],
    tags: ["Three.js", "React Three Fiber", "ROS 2", "Python", "YOLO", "Computer Vision"],
    links: [
      {
        label: "EDEN Simulator (Live)",
        href: "https://eden-robotics.github.io/Eden/sim",
        external: true,
      },
      {
        label: "Project EDEN",
        href: "https://eden-robotics.github.io/Eden/",
        external: true,
      },
    ],
  },
  {
    slug: "wired-auv",
    title: "Autonomous Underwater Vehicle",
    org: "WIRED AUV Team / Executive Lead",
    role: "Executive Lead / Electrical Engineer",
    period: "Aug 2025 - Present",
    location: "College Station, TX",
    category: "Robotics",
    color: "text-sky-800",
    bg: "bg-sky-50",
    border: "border-sky-200",
    cardImage: "/sphoorthi-website/wired-auv-pool.jpg",
    heroImage: "/sphoorthi-website/wired-auv-pool.jpg",
    tagline:
      'Leading 60+ members on "Swim Shady," a competition AUV with custom PCBs, DVL navigation, and rebuilt power routing',
    overview:
      'WIRED is Texas A&M\'s competitive AUV team. Our robot, "Swim Shady," combines custom PCBs, DVL navigation, Jetson compute, underwater vision, and a rebuilt power architecture. As Executive Lead and Electrical Engineer, I manage a 60+ member organization while contributing hands-on to the electrical system.',
    technicalHighlights: [
      {
        label: "Power Routing",
        detail:
          "Reworked regulated rails for DVL, thrusters, and Jetson loads while reducing voltage-drop risk under load.",
      },
      {
        label: "DVL Navigation",
        detail:
          "Leading DVL integration for underwater dead-reckoning navigation without GPS.",
      },
      {
        label: "Current Lucid Schematic",
        detail:
          "Maintained schematic coverage for thruster-side routing, Jetson-side routing, kill switch, mission switch, ESC PCB, PWM routing, and sensor connections.",
      },
    ],
    achievements: [
      "Executive Lead of a 60+ member organization",
      "Led boost converter transition for DVL, thrusters, and Jetson rails",
      "Redesigned ESC layout to reduce wire strain and terminal block failures",
      "Spearheading first DVL integration in WIRED team history",
    ],
    tags: ["Altium Designer", "PCB Design", "Python", "Power Electronics", "DVL", "NVIDIA Jetson"],
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
];
