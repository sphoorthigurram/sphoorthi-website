"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Zap, Bot, Waves } from "lucide-react";

const projects = [
  {
    experienceSlug: "ev-charger",
    title: "1 kW Bi-Directional EV Charger",
    org: "TAMU Think Tank / Team Electra",
    description:
      "Designed and implemented a high-efficiency onboard EV charger using a GaN-based bridgeless totem-pole PFC frontend and a Dual Active Bridge DC-DC stage.",
    highlight: "~96% efficiency / 400 V DC bus",
    tags: ["GaN", "Power Electronics", "Altium", "LTSpice", "DAB Architecture"],
    icon: Zap,
    color: "text-blue-800",
    bg: "bg-blue-50",
    border: "border-blue-200",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    experienceSlug: "eden-robot",
    title: "Project EDEN - AI Humanoid Robot",
    org: "EDEN Startup / Software Engineer",
    description:
      "Engineering the software stack for an AI humanoid robot with adaptive reasoning, real-time human detection, and a browser-native 3D simulator.",
    highlight: "3D Sim / Cognitive Gate",
    tags: ["Three.js", "ROS 2", "YOLO", "LLM / Cognitive AI", "Embedded Systems"],
    icon: Bot,
    color: "text-indigo-800",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    image: "/sphoorthi-website/eden-simulator.png",
    links: [
      { label: "Live simulator", href: "https://eden-robotics.github.io/Eden/sim" },
      { label: "Project EDEN", href: "https://eden-robotics.github.io/Eden/" },
    ],
  },
  {
    experienceSlug: "wired-auv",
    title: "Autonomous Underwater Vehicle",
    org: "WIRED AUV Team / Executive Lead",
    description:
      'Leading "Swim Shady," a competition AUV with NVIDIA Jetson Nano, 8x T200 thrusters, Teledyne DVL navigation, and custom Altium PCBs.',
    highlight: "60+ member team / DVL integration",
    tags: ["Altium", "PCB Design", "Python", "Power Electronics", "DVL"],
    icon: Waves,
    color: "text-sky-800",
    bg: "bg-sky-50",
    border: "border-sky-200",
    image: "/sphoorthi-website/wired-auv-pool.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-[#5a1720] text-sm font-mono mb-2 tracking-widest uppercase">
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950">
            Featured work
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <article
                  className={`group flex h-full flex-col overflow-hidden border ${project.border} bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                    <div
                      className={`absolute top-3 left-3 w-9 h-9 ${project.bg} border ${project.border} flex items-center justify-center`}
                    >
                      <Icon className={`w-4 h-4 ${project.color}`} />
                    </div>
                    <span
                      className={`absolute top-3 right-3 text-xs px-2.5 py-1 ${project.bg} ${project.color} border ${project.border} font-mono`}
                    >
                      {project.highlight}
                    </span>
                  </div>

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
                          className={`text-xs px-2 py-0.5 ${project.bg} ${project.color} border ${project.border}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {"links" in project && project.links && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-1.5 border ${project.border} ${project.bg} px-2.5 py-1 text-xs font-mono ${project.color} transition-colors hover:bg-white`}
                          >
                            {link.label}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    )}

                    <Link
                      href={`/experience/${project.experienceSlug}`}
                      className={`flex items-center gap-1.5 text-xs font-mono ${project.color} mt-1 group-hover:gap-2.5 transition-all`}
                    >
                      View details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <ExternalLink className="w-4 h-4" />
          More on{" "}
          <a
            href="https://linkedin.com/in/sphoorthi-gurram"
            target="_blank"
            rel="noreferrer"
            className="text-[#5a1720] hover:text-[#7a2430] underline underline-offset-4"
          >
            LinkedIn
          </a>
        </motion.p>
      </div>
    </section>
  );
}
