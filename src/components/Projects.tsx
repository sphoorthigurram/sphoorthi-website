"use client";

import { motion } from "framer-motion";
import { Zap, Bot, Waves, Sun, ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    title: "1 kW Bi-Directional EV Charger",
    org: "TAMU Think Tank · Team Electra",
    description:
      "Designed and implemented a high-efficiency onboard EV charger utilizing a GaN-based bridgeless totem-pole PFC frontend and a Dual Active Bridge (DAB) DC-DC stage. Achieved ~96% efficiency and ~0.99 power factor — on par with commercial chargers.",
    highlight: "~96% efficiency · 400 V DC bus",
    tags: ["GaN", "Power Electronics", "Altium", "LTSpice", "DAB Architecture"],
    icon: Zap,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bac6861d12?w=800&q=80",
    proposal: "/sphoorthi-website/ev-charger-proposal.pdf",
  },
  {
    title: "Project EDEN — AI Humanoid Robot",
    org: "EDEN Startup · Software Engineer",
    description:
      "Engineering the software stack for an AI humanoid robot with adaptive reasoning. Trained YOLO-based computer vision models for real-time human detection and tracking, and designed the power distribution architecture for a bipedal platform.",
    highlight: "YOLO CV · Real-time detection",
    tags: ["Python", "YOLO", "Computer Vision", "ROS 2", "Embedded Systems"],
    icon: Bot,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    title: "Autonomous Underwater Vehicle",
    org: "WIRED AUV Team · Executive Lead",
    description:
      "Redesigned the ESC layout and PCB in Altium to reduce wire strain and allow modular stacking. Transitioned the power architecture to boost converters providing stabilized 24 V/18 V rails, and leading DVL sensor integration for autonomous navigation.",
    highlight: "40+ member team · DVL Integration",
    tags: ["Altium", "PCB Design", "CAD", "Python", "Power Electronics"],
    icon: Waves,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    image:
      "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=800&q=80",
  },
  {
    title: "Concentrating Solar Furnace",
    org: "SHINE Lab · Student Researcher",
    description:
      "Collaborating on an off-grid concentrating solar system using Fresnel lenses to generate high-temperature thermal energy. Programming microprocessors for precise sun-tracking and using MATLAB/Simulink to model and test receiver components.",
    highlight: "Off-grid solar · Sun-tracking system",
    tags: ["MATLAB", "Microprocessors", "Sensors", "Fresnel Optics", "DAQ"],
    icon: Sun,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-mono mb-2 tracking-widest uppercase">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-spektr-cyan-50">
            Featured work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group rounded-2xl border ${project.border} bg-card overflow-hidden hover:${project.bg} transition-all duration-300 flex flex-col`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div
                    className={`absolute top-3 left-3 w-9 h-9 rounded-lg ${project.bg} border ${project.border} flex items-center justify-center`}
                  >
                    <Icon className={`w-4 h-4 ${project.color}`} />
                  </div>
                  <span
                    className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full ${project.bg} ${project.color} border ${project.border} font-mono`}
                  >
                    {project.highlight}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <p className={`text-xs font-mono ${project.color} mb-1`}>
                      {project.org}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-0.5 rounded-md ${project.bg} ${project.color} border ${project.border}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {"proposal" in project && project.proposal && (
                    <a
                      href={project.proposal as string}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-mono ${project.color} hover:underline mt-1`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      View proposal
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10 flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          More on{" "}
          <a
            href="https://linkedin.com/in/sphoorthi-gurram"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
          >
            LinkedIn
          </a>
        </motion.p>
      </div>
    </section>
  );
}
