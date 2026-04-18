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
    org: "TAMU Think Tank · Team Electra",
    role: "Technical Lead",
    period: "Aug 2025 – Present",
    location: "College Station, TX",
    category: "Power Electronics",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    cardImage:
      "https://images.unsplash.com/photo-1593941707882-a5bac6861d12?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    tagline:
      "1 kW bi-directional onboard EV charger achieving ~96% efficiency for the IEEE Future Energy Challenge",
    overview:
      "Led a 9-person team designing a 1 kW bi-directional onboard EV charger for the IEEE Future Energy Challenge (IFEC 2026). The charger achieves ~96% peak efficiency and ~0.99 power factor using a GaN-based bridgeless totem-pole PFC frontend and a Dual Active Bridge (DAB) DC-DC stage. The design supports full Vehicle-to-Grid (V2G) power reversal on a stable 400 V DC bus — performance competitive with commercial-grade hardware.",
    technicalHighlights: [
      {
        label: "Frontend Topology — GaN Totem-Pole PFC",
        detail:
          "GaN-based bridgeless totem-pole PFC eliminates the conventional diode bridge, cutting conduction losses and enabling near-unity power factor correction (~0.99 PF) at the AC input. GaN transistors selected over Si MOSFETs for lower Rds(on), faster switching, and higher temperature operation.",
      },
      {
        label: "DC-DC Stage — Dual Active Bridge (DAB)",
        detail:
          "DAB architecture provides galvanic isolation, soft-switching for minimal switching losses, and bidirectional power flow enabling V2G operation. Resolved gate driver timing faults and resonance instability during bring-up.",
      },
      {
        label: "400 V DC Bus",
        detail:
          "Stable 400 V DC bus compatible with standard EV battery voltages and grid-tied inverter requirements, enabling future integration with home energy storage systems.",
      },
      {
        label: "Design & Simulation Tools",
        detail:
          "Altium Designer for multi-layer PCB layout and DRC; LTSpice for circuit simulation and switching waveform validation before hardware build.",
      },
      {
        label: "My Role",
        detail:
          "Primary system debugger across both power stages. Co-authored the IEEE IFEC 2026 technical proposal. Coordinated team across schematic, PCB, and firmware milestones.",
      },
    ],
    achievements: [
      "~96% efficiency and ~0.99 power factor — on par with commercial onboard EV chargers",
      "Resolved gate driver timing faults and DAB resonance instability as primary system debugger",
      "Co-authored the IEEE IFEC 2026 technical proposal accepted for international competition",
      "Led 9-person team across hardware design, PCB layout, simulation, and test phases",
      "Full bidirectionality — supporting Vehicle-to-Grid (V2G) power export",
    ],
    tags: [
      "GaN",
      "Power Electronics",
      "Altium Designer",
      "LTSpice",
      "DAB Architecture",
      "PFC",
      "PCB Design",
      "V2G",
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
    slug: "eden",
    title: "Project EDEN — AI Humanoid Robot",
    org: "EDEN Startup · Software Engineer",
    role: "Software Engineer",
    period: "Jan 2026 – Present",
    location: "College Station, TX",
    category: "AI · Robotics",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    cardImage: "/sphoorthi-website/eden-simulator.png",
    heroImage: "/sphoorthi-website/eden-simulator.png",
    tagline:
      "Engineering the vision pipeline and power architecture for an AI humanoid robot — with a custom 3D web simulator",
    overview:
      "Project EDEN is building an AI-powered humanoid robot with adaptive reasoning capabilities. As a Software Engineer I own two critical subsystems: the computer vision pipeline enabling real-time human perception, and the power distribution architecture keeping the bipedal platform operational under dynamic loads. The team also built a full-featured browser-based 3D simulator — the EDEN Simulator — to develop and validate autonomous behaviors before hardware deployment.",
    technicalHighlights: [
      {
        label: "EDEN Simulator — 3D Web Platform",
        detail:
          "Browser-native 3D robot simulator built with Three.js and React Three Fiber (R3F). Simulates a TurtleBot3-scale differential-drive robot in a 30 × 20 m procedural environment with real-time physics dynamics (motor τ = 0.14 s). Runs entirely in-browser — no backend required.",
      },
      {
        label: "LIDAR Raycast Engine",
        detail:
          "Custom LIDAR simulation: 270° field of view, 180 rays, 1.30 m minimum range. Produces real-time occupancy point clouds used for mapping, obstacle avoidance, and autonomous navigation — mirroring the sensor specs of physical robot platforms.",
      },
      {
        label: "Cognitive Gate — LLM Autonomous Reasoning",
        detail:
          "Cognitive Gate is an LLM-based task reasoning module wired into the robot's control loop. It receives sensor state and telemetry, sets high-level goals (e.g. 'explore unexplored area'), generates action sequences, and runs in an autonomous loop. Avg decision latency: 6820 ms, P95: 9603 ms.",
      },
      {
        label: "ROS-Style Topic Bus",
        detail:
          "Internal publish/subscribe topic bus modeled after ROS, enabling decoupled communication between the dynamics engine, LIDAR, cognitive agent, and UI telemetry panels. Active topics include /map (2.0 Hz, 341 msgs) and /odom.",
      },
      {
        label: "Real-Time Telemetry & Minimap",
        detail:
          "Full telemetry panel streams: X/Y position, heading, linear/angular velocity, wheel L/R speeds, odometry drift, LIDAR min distance, collision count, bumper stop state, total distance, and battery %. 2D occupancy minimap displays lethal, inflation, and free zones.",
      },
      {
        label: "Computer Vision Pipeline",
        detail:
          "Trained YOLO-based object detection models in Python for real-time human detection and tracking on edge compute hardware aboard the robot. Optimized for low latency within the ROS 2 sensor-to-actuator loop.",
      },
      {
        label: "Power Distribution Architecture",
        detail:
          "Designed the full power distribution architecture for the bipedal platform: rail voltages, battery management, load sequencing, and protection circuits for motors, sensors, and compute boards.",
      },
    ],
    achievements: [
      "Built browser-native 3D robot simulator with physics dynamics, LIDAR raycast, and LLM cognitive agent",
      "Integrated Cognitive Gate: LLM-based autonomous reasoning loop with real-time sensor feedback",
      "Implemented ROS-style topic bus enabling decoupled sim architecture (dynamics, LIDAR, AI, UI)",
      "Built real-time YOLO human detection pipeline achieving accurate tracking in dynamic environments",
      "Designed complete power distribution architecture for motors, sensors, and compute on the bipedal platform",
      "Reduced sensor-to-actuator communication latency through optimized ROS 2 message pipeline",
    ],
    tags: [
      "Three.js",
      "React Three Fiber",
      "ROS 2",
      "Python",
      "YOLO",
      "Computer Vision",
      "LLM / Cognitive AI",
      "Power Electronics",
      "Embedded Systems",
      "PyTorch",
    ],
    links: [
      {
        label: "EDEN Simulator (Live)",
        href: "https://eden-robotics.github.io/Eden/sim",
        external: true,
      },
    ],
  },
  {
    slug: "wired-auv",
    title: "Autonomous Underwater Vehicle",
    org: "WIRED AUV Team · Executive Lead",
    role: "Executive Lead · Electrical Engineer",
    period: "Aug 2025 – Present",
    location: "College Station, TX",
    category: "Robotics",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    cardImage:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=1400&q=80",
    tagline:
      'Leading 40+ members on "Swim Shady" — a competition AUV with custom PCBs, DVL navigation, and a rebuilt power architecture',
    overview:
      'WIRED (Women in Robotics, Engineering, and Development) is Texas A&M\'s competitive AUV team, competing in the international RoboSub competition. Our robot, nicknamed "Swim Shady," is a cylindrical hull AUV featuring a modular internal frame, custom PCBs, Doppler Velocity Log navigation, and a machine-learning vision pipeline. As Executive Lead and Electrical Engineer, I manage operations across four sub-teams while personally redesigning the power architecture and driving DVL sensor integration.',
    technicalHighlights: [
      {
        label: "Compute — NVIDIA Jetson Nano 4GB",
        detail:
          "Main CPU: NVIDIA Jetson Nano 4GB (25.6 GB/s memory bandwidth). Runs Python 3 control code, ZED SDK, Roboflow object detection, and DVL interface. GPIO extension PCB (Samtec SSW-120-02-T-D-RA, 40-pin) designed in Altium for peripheral connectivity.",
      },
      {
        label: "Power Architecture — Boost Converter Transition",
        detail:
          "Replaced legacy buck converters with boost converters providing regulated rails: 24 V (Teledyne DVL), 18 V (T200 thrusters), 16 V (Jetson Nano). Converters tuned via potentiometers and verified with multimeter. Driven by 2× Turnigy 16000mAh 6S 12C LiPo packs (XT90).",
      },
      {
        label: "Propulsion — 8× Blue Robotics T200 Thrusters",
        detail:
          "8× Blue Robotics T200 Thrusters (7–26 V, 30 A) controlled via 8× Blue Robotics Basic ESCs driven by Adafruit PCA9685 16-channel 12-bit PWM/Servo Driver (I2C). ESC layout redesigned to 1×4 modular configuration with velcro retention to eliminate wire strain and terminal block disconnects.",
      },
      {
        label: "Navigation — Teledyne Marine Wayfinder DVL",
        detail:
          "600 kHz Doppler Velocity Log providing bottom-tracking velocity with ±1.15% long-term accuracy. Enables accurate dead-reckoning navigation without GPS. PID controller uses DVL distance data to compute error and drive thruster corrections. First DVL integration in WIRED team history.",
      },
      {
        label: "Sensors Suite",
        detail:
          "ZED Mini stereo depth camera (100 Hz, 0.1–15 m range) for top-facing vision; Blue Robotics Low-Light HD USB Camera (Sony IMX322, 1920×1080) for bottom-facing detection. VectorNav VN-100 IMU/AHRS (3-axis gyros). Blue Robotics Bar30 pressure sensor (300 m depth, 2 mm resolution). Blue Robotics Ping2 Sonar (25° beam, 300 m depth rating).",
      },
      {
        label: "Custom PCBs — Altium Designer",
        detail:
          "Designed and fabricated: (1) Fuse Board PCB — centralized 10-position fuse distribution replacing scattered fuses, rated per subsystem; (2) Mission Switch PCB — active-high configuration triggering thruster code on Jetson GPIO; (3) Kill Switch — solid-state relay (3–32 VDC input, 25 A) disconnecting battery from thrusters; (4) GPIO Extension PCB for 40-pin Jetson header.",
      },
      {
        label: "Vision & ML Pipeline",
        detail:
          "Roboflow Inference object detection model for underwater task recognition (gate, slalom, octagon, bin targets). OpenCV runs camera pipeline. ZED SDK provides stereo depth. Targets: Gate, Slalom, Surface in Octagon, Return Home, and Coin Flip.",
      },
      {
        label: "Mechanical — Modular Hull Design",
        detail:
          "Cylindrical hull with T-slot rails for modular sensor mounting. Internal frame: circular rings acting as shelves with two sliding drawer-style trays. End caps with cable penetrators and camera windows attach directly to internal frame. Blue Robotics SubConn circular series 12-pin waterproof connectors. Marine epoxy sealing.",
      },
      {
        label: "Thermal Management (My Work)",
        detail:
          "Researched and specified cooling solution for Jetson Nano inside sealed hull: evaluated Noctua NF-A4x20 5V PWM (officially NVIDIA-recommended), Noctua NF-A4x10 compact variant, Waveshare Fan-4020-PWM-5V, Seeed ICE Tower (85°C→45°C), and IP67-rated 140mm waterproof fan. Addressed hull overheating under competition conditions.",
      },
    ],
    achievements: [
      "Executive Lead of 40+ member organization across electrical, mechanical, software, and business sub-teams",
      "Led boost converter transition: replaced buck converters with 24V/18V/16V regulated rails for DVL, thrusters, and Jetson",
      "Redesigned ESC layout to 1×4 modular configuration with velcro retention — eliminated terminal block failures from wire strain",
      "Spearheading first-ever DVL integration for WIRED team — enabling accurate dead-reckoning AUV navigation",
      "Designed and implemented GPIO extension PCB in Altium (Samtec SSW-120-02-T-D-RA, 40-pin Jetson header)",
      "Specified and implemented Jetson thermal management solution for sealed hull operation",
      "Drove Battery Management System (BMS) research and prototyping for real-time cell monitoring",
      "Vehicle passed leak testing and buoyancy verification; cleared for pool competition runs",
    ],
    tags: [
      "Altium Designer",
      "PCB Design",
      "Python",
      "Power Electronics",
      "ROS 2",
      "DVL",
      "NVIDIA Jetson",
      "Roboflow",
      "OpenCV",
      "SolidWorks",
      "Fusion360",
      "Leadership",
    ],
    schematics: [
      {
        type: "image",
        title: "Electrical Wiring Schematic",
        src: "/sphoorthi-website/auv-schematic.jpg",
        caption:
          "Full electrical schematic showing Jetson Nano, ESCs, boost converters, fuse board, kill switch, PWM servo driver, battery, and thruster wiring.",
      },
      {
        type: "link",
        title: "Interactive Robot Schematic (Lucidchart)",
        src: "https://lucid.app/lucidspark/942e65dc-3da9-467a-9b67-7f9915968b43/edit?invitationId=inv_42dee7c1-22ce-4595-b453-0952b92954f9&page=0_0#",
        caption:
          "Open the interactive system-level schematic in Lucidchart — shows full robot architecture including mechanical, electrical, and sensor integration.",
      },
    ],
    links: [
      {
        label: "Technical Report 2025–2026 (PDF)",
        href: "/sphoorthi-website/ev-charger-proposal.pdf",
        external: true,
      },
    ],
  },
  {
    slug: "solar-furnace",
    title: "Concentrating Solar Furnace",
    org: "SHINE Lab · Student Researcher",
    role: "Student Researcher",
    period: "Feb 2026 – Present",
    location: "College Station, TX",
    category: "Energy Research",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    cardImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80",
    tagline:
      "Fresnel-lens concentrating solar furnace for off-grid high-temperature thermal energy generation",
    overview:
      "At the SHINE (Solar High-temperature Irradiance and Novel Energy) Lab at Texas A&M, I contribute to development of an off-grid concentrating solar system using Fresnel lenses to focus sunlight into a high-temperature solar furnace. The research targets industrial process heat, materials synthesis, and decentralized renewable energy — domains where photovoltaic panels are fundamentally limited. My work spans microcontroller programming, DAQ system integration, and MATLAB/Simulink modeling of the thermal receiver.",
    technicalHighlights: [
      {
        label: "Concentrating Solar Optics",
        detail:
          "Fresnel lens array focuses direct solar irradiance onto a receiver aperture, achieving high concentration ratios and temperatures without complex parabolic dish mechanics.",
      },
      {
        label: "Precision Sun-Tracking",
        detail:
          "Programmed microcontrollers and interfaced angular position sensors for two-axis sun-tracking — maximizing daily energy capture and maintaining peak concentration throughout the day.",
      },
      {
        label: "Thermal Modeling — MATLAB/Simulink",
        detail:
          "MATLAB/Simulink models of receiver thermal dynamics, heat flux distribution, and system efficiency under varying insolation conditions — guiding geometry optimization toward publishable performance characterization.",
      },
      {
        label: "DAQ Integration",
        detail:
          "Interfacing temperature sensors, pyranometers, and power measurement hardware through a multi-channel DAQ system for real-time performance monitoring and data logging.",
      },
    ],
    achievements: [
      "Programmed microcontroller-based two-axis sun-tracking system for maximum solar collection",
      "Built MATLAB/Simulink thermal receiver model to predict heat flux distribution and guide design optimization",
      "Integrated multi-channel DAQ system monitoring thermal, optical, and electrical performance metrics",
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
];
