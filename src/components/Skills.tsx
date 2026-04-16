"use client";

import { motion } from "framer-motion";
import { Wrench, Code2, BrainCircuit } from "lucide-react";

const skillCategories = [
  {
    label: "Engineering & Design",
    icon: Wrench,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    skills: [
      "Altium Designer",
      "LTSpice",
      "Fusion360",
      "SolidWorks",
      "CAD / AutoCAD",
      "MATLAB / Simulink",
      "PCB Design",
      "Power Electronics",
      "Embedded Systems",
    ],
  },
  {
    label: "Software & Robotics",
    icon: Code2,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    skills: [
      "Python",
      "C++",
      "ROS 2",
      "R Programming",
      "Linux (Ubuntu)",
      "Git",
      "PLC Logic",
      "Sensor Fusion",
      "Microprocessors",
    ],
  },
  {
    label: "Data & AI",
    icon: BrainCircuit,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    skills: [
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
];

const languages = ["English", "Spanish", "Telugu", "Hindi"];
const certifications = ["Fusion360 Certified"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-mono mb-2 tracking-widest uppercase">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-spektr-cyan-50">
            Tools & technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl border ${cat.border} bg-card p-5 space-y-4`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg ${cat.bg} border ${cat.border} flex items-center justify-center`}
                  >
                    <Icon className={`w-4 h-4 ${cat.color}`} />
                  </div>
                  <h3 className={`font-semibold text-sm ${cat.color}`}>
                    {cat.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2.5 py-1 rounded-md border ${cat.border} ${cat.bg} text-foreground/80`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages + Certs row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="text-sm px-3 py-1 rounded-md bg-secondary text-foreground/80 border border-border"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">
              Certifications
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-sm px-3 py-1 rounded-md bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
