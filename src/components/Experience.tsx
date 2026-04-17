"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Bot,
  Waves,
  Sun,
  BookOpen,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const experiences = [
  {
    slug: "ev-charger",
    org: "TAMU Think Tank — Team Electra",
    role: "Technical Lead",
    period: "Aug 2025 – Present",
    location: "College Station, TX",
    category: "Engineering",
    icon: Cpu,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    bullets: [
      "Led a 9-person team to design a 1 kW bi-directional EV charger using GaN-based bridgeless totem-pole PFC and DAB architecture.",
      "Achieved ~96% efficiency, ~0.99 power factor, and a stable 400 V DC bus — on par with commercial designs.",
      "Served as primary system debugger and co-authored the IFEC 2026 technical proposal.",
    ],
  },
  {
    slug: "eden-robot",
    org: "Project EDEN",
    role: "Software Engineer",
    period: "Jan 2026 – Present",
    location: "College Station, TX",
    category: "AI / Robotics",
    icon: Bot,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    bullets: [
      "Engineered and trained YOLO-based computer vision models for real-time human detection on an AI humanoid robot.",
      "Designed the full power distribution architecture for the bipedal platform.",
      "Optimized the ROS 2 communication layer to reduce sensor-to-actuator latency.",
    ],
  },
  {
    slug: "wired-auv",
    org: "WIRED AUV Team",
    role: "Executive Lead · Electrical Engineer",
    period: "Aug 2025 – Present",
    location: "College Station, TX",
    category: "Robotics",
    icon: Waves,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    bullets: [
      "Lead a 40+ member team across electrical, mechanical, software, and business sub-teams.",
      "Redesigned ESC layout and PCB in Altium to reduce wire strain and enable modular stacking.",
      "Transitioned power subsystem to boost converters providing stabilized 24 V / 18 V rails; leading DVL integration.",
    ],
  },
  {
    slug: "shine-lab",
    org: "SHINE Lab — Texas A&M",
    role: "Student Researcher",
    period: "Feb 2026 – Present",
    location: "College Station, TX",
    category: "Research",
    icon: Sun,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    bullets: [
      "Contributing to an off-grid concentrating solar furnace using Fresnel lenses for high-temperature thermal energy.",
      "Programming microcontrollers for precise two-axis sun-tracking and interfacing multi-channel DAQ sensors.",
      "Building MATLAB/Simulink models of receiver thermal dynamics to guide geometry optimization.",
    ],
  },
  {
    slug: "prd-lab",
    org: "Peace Resistance & Democracy Lab — UTDallas",
    role: "Research Intern",
    period: "May 2024 – Aug 2024",
    location: "Richardson, TX",
    category: "Research",
    icon: BookOpen,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    bullets: [
      "Used R, scikit-learn, and plotly to visualize trends in non-violent revolution datasets across 50+ countries.",
      "Authored research reports on Kyrgyzstan and Uruguay supporting a study on democratic breakdown.",
    ],
  },
  {
    slug: "schoolhouse",
    org: "Schoolhouse World",
    role: "Mathematics Tutor",
    period: "May 2024 – Aug 2024",
    location: "Virtual · Global",
    category: "Volunteer",
    icon: GraduationCap,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    bullets: [
      "Tutored 125+ students across 25 countries on the world's largest peer-led tutoring platform.",
      "Organized a summer camp and 4-week math bootcamp, designing tiered lesson plans and tracking student progress.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-mono mb-2 tracking-widest uppercase">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-spektr-cyan-50">
            What I&apos;ve been building
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.org}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="md:pl-16 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1 w-10 h-10 rounded-full border ${exp.border} ${exp.bg} hidden md:flex items-center justify-center`}
                  >
                    <Icon className={`w-4 h-4 ${exp.color}`} />
                  </div>

                  {/* Card — wrapped in Link */}
                  <Link href={`/experience/${exp.slug}`} className="block group">
                    <div
                      className={`rounded-xl border ${exp.border} bg-card p-5 md:p-6 hover:${exp.bg} transition-all duration-300 cursor-pointer`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <Icon
                              className={`w-4 h-4 ${exp.color} md:hidden`}
                            />
                            <h3 className="font-semibold text-foreground text-base">
                              {exp.org}
                            </h3>
                          </div>
                          <p className={`text-sm font-medium ${exp.color}`}>
                            {exp.role}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs text-muted-foreground font-mono">
                            {exp.period}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {exp.location}
                          </p>
                          <span
                            className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${exp.bg} ${exp.color} border ${exp.border}`}
                          >
                            {exp.category}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-1.5 mt-3 mb-4">
                        {exp.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                          >
                            <span
                              className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${exp.color} bg-current`}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`flex items-center gap-1.5 text-xs font-mono ${exp.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                      >
                        View details
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
