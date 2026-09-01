"use client";

import { motion } from "framer-motion";
import { Zap, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "230+",
    label: "Team members led",
    color: "text-blue-800",
  },
  {
    icon: Globe,
    value: "100+",
    label: "Learners taught across 20 countries",
    color: "text-indigo-800",
  },
  {
    icon: Zap,
    value: "~96%",
    label: "Efficiency on EV charger design",
    color: "text-amber-800",
  },
  {
    icon: Award,
    value: "Top 4.89%",
    label: "National Speech & Debate",
    color: "text-emerald-800",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <div>
              <p className="text-[#5a1720] text-sm font-mono mb-2 tracking-widest uppercase">
                About Me
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950">
                Hardware meets intelligence
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m Sphoorthi Gurram, currently pursuing a Bachelor of
              Science in Engineering in the{" "}
              <span className="text-foreground font-medium">
                Honors Program at Texas A&M
              </span>{" "}
              (Class of 2029). I like building things that have to work in the
              real world: power electronics, robots, embedded systems, and the
              software that ties them together.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work has ranged from leading a team designing a{" "}
              <span className="text-cyan-300">
                1 kW bi-directional EV charger
              </span>{" "}
              targeting ~96% efficiency to building YOLO-based computer vision
              pipelines for a humanoid robot. I care about the full stack, from
              circuit schematics and mechanical constraints to code that runs on
              the actual system.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside engineering, I tutor mathematics on Schoolhouse.world and
              have taught{" "}
              <span className="text-foreground font-medium">
                100+ learners across 20 countries
              </span>{" "}
              through sessions, a summer camp, and a 4-week intensive bootcamp.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I also competed nationally in{" "}
              <span className="text-foreground font-medium">
                Speech &amp; Debate
              </span>
              , earned the{" "}
              <span className="text-foreground font-medium">
                National Degree of Distinction
              </span>
              , and placed in the top 4.89% of competitors nationwide.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="mailto:gurramsphoorthi@tamu.edu"
                className="text-sm text-[#5a1720] hover:text-[#7a2430] underline underline-offset-4 transition-colors"
              >
                gurramsphoorthi@tamu.edu
              </a>
              <span className="text-border">·</span>
              <a
                href="https://linkedin.com/in/sphoorthi-gurram"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#5a1720] hover:text-[#7a2430] underline underline-offset-4 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative">
                <div className="w-28 h-28 overflow-hidden border border-border shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/sphoorthi-website/headshot.jpg"
                    alt="Sphoorthi Gurram"
                    className="w-full h-full object-cover scale-125"
                    style={{ objectPosition: "50% 16%" }}
                  />
                </div>
                <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-[#5a1720] border-2 border-background" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-950">
                  Sphoorthi Gurram
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  EE Honors · Texas A&amp;M &apos;29
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-border bg-card p-5 flex flex-col gap-3 shadow-sm hover:border-[#b27a30] transition-colors"
                  >
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                    <div>
                      <div
                        className={`text-2xl font-bold tracking-tight ${stat.color}`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
