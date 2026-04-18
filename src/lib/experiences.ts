export interface SchematicItem {
  type: "image" | "link" | "embed";
  title: string;
  src: string;
  caption?: string;
  rotate?: boolean;
  rotateCCW?: boolean;
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
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80",
    tagline:
      "Leading design of a 1 kW bi-directional EV charger for the IEEE Future Energy Challenge",
    overview:
      "As Technical Lead of Team Electra, I led a 9-person interdisciplinary team to design and build a 1 kW bi-directional onboard EV charger for the IEEE Future Energy Challenge (IFEC 2026). The charger achieves ~96% peak efficiency and ~0.99 power factor — performance competitive with commercial-grade hardware — while supporting full Vehicle-to-Grid (V2G) power reversal. The project pushed me to own the system at every level: simulation, schematic, PCB, gate driver tuning, and debugging across both AC and DC stages.",
    schematics: [
      {
        type: "image",
        title: "Meet My Team — Team Electra",
        src: "/sphoorthi-website/electra-team.png",
        caption: "Team Electra — 9-person interdisciplinary team competing in the IEEE Future Energy Challenge (IFEC 2026).",
        small: true,
      },
      {
        type: "image",
        title: "Full System Topology — LTSpice Simulation",
        src: "/sphoorthi-website/ev-charger-topology.png",
        caption:
          "Complete bi-directional EV charger topology: GaN-based bridgeless totem-pole PFC frontend (GS66508T, C3M0032120K) feeding a Dual Active Bridge DC-DC stage (IPP65R065C7, IPP65R045C7) with galvanic isolation, L-C filter network, and battery load. Simulated in LTSpice prior to hardware build.",
      },
      {
        type: "embed",
        title: "IFEC 2026 Technical Proposal",
        src: "/sphoorthi-website/ev-charger-proposal.pdf",
        caption: "IEEE Future Energy Challenge 2026 — Team Electra technical proposal.",
      },
      {
        type: "image",
        title: "Behind the Scenes",
        src: "/sphoorthi-website/electra-silly.jpg",
        caption: "End-of-semester celebrations.",
        rotateCCW: true,
      },
    ],
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
          "Custom LIDAR simulation: 270° field of view, 180 rays, 1.30 m minimum range. Produces real-time occupancy point clouds used for mapping, obstacle avoidance, and autonomous navigation — mirroring physical sensor specs.",
      },
      {
        label: "Cognitive Gate — LLM Autonomous Reasoning",
        detail:
          "LLM-based task reasoning module wired into the robot's control loop. Receives sensor state and telemetry, sets high-level goals (e.g. 'explore unexplored area'), generates action sequences, and runs in an autonomous loop. Avg decision latency: 6820 ms, P95: 9603 ms.",
      },
      {
        label: "ROS-Style Topic Bus",
        detail:
          "Internal publish/subscribe topic bus modeled after ROS, enabling decoupled communication between the dynamics engine, LIDAR, cognitive agent, and UI telemetry panels. Active topics include /map (2.0 Hz, 341 msgs) and /odom.",
      },
      {
        label: "Real-Time Telemetry",
        detail:
          "Full telemetry dashboard streams: X/Y position, heading, linear/angular velocity, wheel L/R speeds (rad/s), odometry drift, LIDAR min distance, collision count, bumper stop, total distance traveled, and battery %. 2D occupancy minimap with lethal, inflation, and free zones.",
      },
      {
        label: "Computer Vision Pipeline",
        detail:
          "Trained YOLO-based object detection models in Python for real-time human detection and tracking on edge compute hardware. Optimized for low latency within the ROS 2 sensor-to-actuator loop.",
      },
      {
        label: "Power Distribution Architecture",
        detail:
          "Designed the full power distribution system for the bipedal platform: rail voltages, battery management, load sequencing, and protection circuits for motors, sensors, and compute boards.",
      },
    ],
    achievements: [
      "Built browser-native 3D robot simulator with physics dynamics, LIDAR raycast, and LLM Cognitive Gate",
      "Integrated Cognitive Gate: LLM autonomous reasoning loop with real-time sensor feedback and goal planning",
      "Implemented ROS-style topic bus enabling decoupled sim architecture (dynamics, LIDAR, AI, UI)",
      "Built real-time YOLO human detection pipeline achieving accurate tracking in dynamic environments",
      "Designed complete power distribution architecture for motors, sensors, and compute on the bipedal platform",
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
        label: "EDEN Simulator",
        href: "https://eden-robotics.github.io/Eden/sim",
        external: true,
        description: "Live browser-based 3D robot simulator",
      },
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
    heroImage: "/sphoorthi-website/wired-auv-pool.jpg",
    tagline:
      "Leading a 40+ member AUV team while redesigning the power architecture and DVL integration",
    overview:
      "WIRED (Water-Integrated Robotics Engineering and Design) is Texas A&M's competitive Autonomous Underwater Vehicle team, competing in the international RoboSub competition. As Executive Lead, I manage cross-functional operations across four sub-teams while also contributing hands-on as an electrical engineer — redesigning the full power architecture and spearheading Doppler Velocity Log (DVL) sensor integration for autonomous underwater navigation.",
    technicalHighlights: [
      {
        label: "Compute — NVIDIA Jetson Nano 4GB",
        detail:
          "Main CPU: NVIDIA Jetson Nano 4GB (25.6 GB/s memory bandwidth). Runs Python 3 control code, ZED SDK, Roboflow object detection, and DVL interface. GPIO extension PCB (Samtec SSW-120-02-T-D-RA, 40-pin) designed in Altium for peripheral connectivity.",
      },
      {
        label: "Power Architecture — Boost Converter Transition",
        detail:
          "Replaced legacy buck converters with boost converters providing regulated rails: 24 V (Teledyne DVL), 18 V (T200 thrusters), 16 V (Jetson Nano). Tuned via potentiometers, verified with multimeter. Powered by 2× Turnigy 16000mAh 6S 12C LiPo packs.",
      },
      {
        label: "Propulsion — 8× Blue Robotics T200 Thrusters",
        detail:
          "8× T200 Thrusters (7–26 V, 30 A) controlled via 8× Basic ESCs driven by Adafruit PCA9685 16-ch 12-bit PWM/Servo Driver (I2C). ESC layout redesigned to 1×4 modular with velcro retention to eliminate wire strain and terminal block disconnects.",
      },
      {
        label: "Navigation — Teledyne Marine Wayfinder DVL",
        detail:
          "600 kHz Doppler Velocity Log with ±1.15% bottom-tracking accuracy. Enables dead-reckoning navigation without GPS. PID controller uses DVL distance data for error computation — first DVL integration in WIRED team history.",
      },
      {
        label: "Sensor Suite",
        detail:
          "ZED Mini stereo camera (100 Hz, 0.1–15 m depth) for top vision; Blue Robotics Low-Light HD Camera (Sony IMX322, 1920×1080) for bottom detection; VectorNav VN-100 IMU/AHRS; Bar30 pressure sensor (300 m, 2 mm resolution); Ping2 Sonar (25° beam, 300 m rating).",
      },
      {
        label: "Custom PCBs — Altium Designer",
        detail:
          "Designed: (1) Fuse Board PCB — centralized 10-position fuse distribution; (2) Mission Switch PCB — active-high GPIO trigger for thruster code; (3) Kill Switch — solid-state relay (25 A) disconnecting battery from thrusters; (4) GPIO Extension PCB for 40-pin Jetson header.",
      },
      {
        label: "Vision & ML Pipeline",
        detail:
          "Roboflow Inference object detection for underwater task recognition (gate, slalom, octagon, bin). OpenCV camera pipeline. Competition tasks: Gate, Slalom, Surface in Octagon, Return Home, and Coin Flip.",
      },
      {
        label: "Thermal Management",
        detail:
          "Researched cooling for Jetson Nano inside sealed hull: evaluated Noctua NF-A4x20 5V PWM (NVIDIA-recommended), NF-A4x10 compact, Waveshare Fan-4020-PWM-5V, Seeed ICE Tower (85°C→45°C), and IP67-rated 140mm waterproof fan.",
      },
    ],
    achievements: [
      "Executive Lead of 40+ member organization across electrical, mechanical, software, and business sub-teams",
      "Led boost converter transition: 15V → 24V (DVL), 18V (thrusters), 16V (Jetson) — eliminated voltage droops under thruster load",
      "Redesigned ESC layout to 1×4 modular configuration with velcro retention — eliminated terminal block failures from wire strain",
      "Spearheading first-ever DVL integration for WIRED team — enabling accurate dead-reckoning AUV navigation",
      "Designed GPIO extension PCB in Altium (Samtec SSW-120-02-T-D-RA, 40-pin Jetson header)",
      "Researched and specified Jetson thermal management solution for sealed hull operation",
      "Drove Battery Management System (BMS) research and prototyping for real-time cell monitoring",
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
      "NVIDIA Jetson",
      "Roboflow",
      "OpenCV",
      "Leadership",
    ],
    schematics: [
      {
        type: "image",
        title: "Electrical Wiring Schematic",
        src: "/sphoorthi-website/auv-schematic.jpg",
        caption:
          "Full electrical schematic: Jetson Nano, 8× ESCs, boost converters, fuse board, kill switch, PWM servo driver, battery, and thruster wiring.",
      },
      {
        type: "link",
        title: "Interactive Robot Schematic (Lucidchart)",
        src: "https://lucid.app/lucidspark/942e65dc-3da9-467a-9b67-7f9915968b43/edit?invitationId=inv_42dee7c1-22ce-4595-b453-0952b92954f9&page=0_0#",
        caption:
          "Full system-level schematic showing mechanical, electrical, and sensor integration.",
      },
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
      "Proposing solar-thermal e-waste desoldering using a Fresnel-lens solar furnace at SHINE Lab",
    overview:
      "At the SHINE (Solar Harvesting Innovations for New Ecosystems) Lab at Texas A&M, I'm contributing to an off-grid concentrating solar system that uses a Fresnel lens to focus sunlight into a high-temperature solar furnace. My research proposal targets solar-thermal e-waste desoldering — using precisely concentrated solar heat (reaching 217–250 °C) to cleanly separate electronic components from circuit boards and recover critical minerals. Over 62 million tonnes of e-waste are generated annually with less than 23% formally recycled; solar-thermal processing offers a carbon-neutral, zero-fuel alternative to acid baths and open-air burning.",
    technicalHighlights: [
      {
        label: "Concentrating Solar — System Physics",
        detail:
          "Fresnel lens concentrates Direct Normal Irradiance (DNI) onto a receiver. Geometric concentration factor Cg = Area_in / Area_out. Useful power: P_W = DNI × Area × η. Only direct (not diffuse) sunlight can be focused — requiring accurate dual-axis sun tracking. SHINE uses a 12″ × 12″ Fresnel lens producing small-system (<1 MW) concentrations on par with a solar furnace.",
      },
      {
        label: "E-Waste Desoldering — Proposal",
        detail:
          "Lead-free solders melt at 217–250 °C; FR4 PCB substrate degrades/combusts at 300–400 °C. Precisely controlled solar heat allows clean desoldering within that window — separating valuable ICs, capacitors, and metals without burning the board or releasing toxic fumes. E-waste feedstock is essentially free; solar process heat costs nothing, making experimental iteration very low-cost.",
      },
      {
        label: "Dual-Axis Solar Tracker",
        detail:
          "Dual-axis tracker keeps the Fresnel lens pointed at the sun throughout the day. Built by the ITDE senior design team (Fall 2025 – Spring 2026) using T-slot aluminum frame, belt-drive mechanism, and stepper motors. Electronics controlled via ESP32 (Arduino IDE) with data piped to MATLAB for analysis.",
      },
      {
        label: "Precision Sun-Tracking",
        detail:
          "Programming microcontrollers and interfacing angular position sensors for two-axis sun-tracking — maximizing daily energy capture and maintaining peak concentration throughout the day.",
      },
      {
        label: "Thermal Modeling — MATLAB/Simulink",
        detail:
          "MATLAB/Simulink models of receiver thermal dynamics, heat flux distribution, and system efficiency under varying insolation — used to validate the desoldering temperature window (target: 217–250 °C) and guide receiver geometry optimization.",
      },
      {
        label: "DAQ & Electronics",
        detail:
          "ESP32 microcontroller (Arduino IDE) interfaces with position sensors and drives the dual-axis tracker. MATLAB receives telemetry for logging and analysis. Multi-channel DAQ monitors temperature, pyranometer readings, and power output in real time.",
      },
      {
        label: "Impact & Funding Case",
        detail:
          "62M+ tonnes of e-waste generated annually; <23% formally recycled. 'Circular Electronics' and 'Urban Mining' are top priorities for 2026 sustainability grants. Solar-thermal approach is carbon-neutral with near-zero operating cost — feedstock is free (e-waste) and fuel is free (sun).",
      },
    ],
    achievements: [
      "Authored research proposal for solar-thermal e-waste desoldering — targeting the 217–250 °C solder melt window with Fresnel lens concentration",
      "Established thermal feasibility case: solder melts before FR4 substrate degrades (300–400 °C), enabling clean component separation",
      "Contributed to dual-axis solar tracker development (ESP32/Arduino IDE → MATLAB pipeline)",
      "Built MATLAB/Simulink model to predict heat flux distribution at the receiver and guide geometry optimization",
      "Integrated multi-channel DAQ system monitoring thermal, optical, and power metrics in real time",
    ],
    tags: [
      "MATLAB",
      "Simulink",
      "ESP32",
      "Arduino IDE",
      "Fresnel Optics",
      "Thermal Systems",
      "DAQ",
      "Embedded Systems",
      "Solar-Thermal",
    ],
    schematics: [
      {
        type: "image",
        title: "Dual-Axis Solar Tracker",
        src: "/sphoorthi-website/shine-tracker.png",
        caption:
          "SHINE Lab dual-axis solar tracker prototype — T-slot aluminum frame with belt-drive mechanism and stepper motors. Keeps the 12″×12″ Fresnel lens pointed at the sun for maximum DNI concentration throughout the day.",
      },
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
      "194 positive ratings · Top 5% — 102 'Super Helpful', Friendly, Interactive, Good Explanations",
    ],
    tags: [
      "Mathematics",
      "Curriculum Design",
      "Communication",
      "Cross-Cultural",
      "Leadership",
      "Mentoring",
    ],
    schematics: [
      {
        type: "image",
        title: "Featured Feedback — Schoolhouse.world Certification Portfolio",
        src: "/sphoorthi-website/schoolhouse-feedback.png",
        caption:
          "Official Schoolhouse.world certification portfolio — Featured Feedback page from real learners. 194 positive ratings (Top 5%), 102 'Super Helpful' (Top 5%), 131 learners impacted across 25 countries.",
      },
    ],
  },
  {
    slug: "speech-debate",
    org: "National Speech & Debate Association",
    shortOrg: "NSDA",
    role: "Competitor",
    period: "2020 – 2024",
    location: "Nationwide",
    category: "Speech & Debate",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    heroImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1400&q=80",
    tagline:
      "National Degree of Distinction — top 4.89% of competitors nationwide",
    overview:
      "Competed nationally in Speech & Debate through the National Speech & Debate Association (NSDA), earning the National Degree of Distinction — a recognition awarded to fewer than 5% of competitors nationwide. Debate sharpened skills I use every day in engineering: building arguments from evidence, communicating under pressure, and thinking on my feet. For articles, posts, and competition highlights, see my LinkedIn.",
    technicalHighlights: [
      {
        label: "National Degree of Distinction",
        detail:
          "Earned the NSDA's National Degree of Distinction — placing in the top 4.89% of competitors nationally across multiple event formats and tournament circuits.",
      },
      {
        label: "Skills Transfer to Engineering",
        detail:
          "Debate built rapid synthesis of technical evidence, structured argumentation, and the ability to defend design decisions clearly — skills directly applied when presenting proposals and debugging systems under pressure.",
      },
    ],
    achievements: [
      "National Degree of Distinction — top 4.89% of NSDA competitors nationwide",
      "Competed across multiple event formats in regional and national tournaments",
    ],
    tags: [
      "Public Speaking",
      "Research",
      "Argumentation",
      "Communication",
      "NSDA",
    ],
    links: [
      {
        label: "View on LinkedIn",
        href: "https://www.linkedin.com/in/sphoorthi-gurram",
        external: true,
        description: "Articles, posts, and competition highlights",
      },
    ],
  },
];
