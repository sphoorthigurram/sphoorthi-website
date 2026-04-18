"use client";

import { motion } from "framer-motion";
import { Zap, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "40+",
    label: "Team members led",
    color: "text-cyan-400",
  },
  {
    icon: Globe,
    value: "125+",
    label: "Students tutored across 25 countries",
    color: "text-indigo-400",
  },
  {
    icon: Zap,
    value: "~96%",
    label: "Efficiency on EV charger design",
    color: "text-yellow-400",
  },
  {
    icon: Award,
    value: "Top 4.89%",
    label: "National Speech & Debate",
    color: "text-emerald-400",
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
          {/* Text */}
          <div className="space-y-6">
            <div>
              <p className="text-cyan-400 text-sm font-mono mb-2 tracking-widest uppercase">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-spektr-cyan-50">
                Hardware meets intelligence
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m Sphoorthi Gurram, a first-year Electrical Engineering
              student in the{" "}
              <span className="text-foreground font-medium">
                Honors Program at Texas A&M
              </span>{" "}
              (Class of 2029). I&apos;m passionate about building systems that
              sit at the intersection of power electronics, robotics, and AI.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From leading a 9-person team to design a{" "}
              <span className="text-cyan-300">
                1 kW bi-directional EV charger
              </span>{" "}
              achieving ~96% efficiency, to engineering YOLO-based computer
              vision pipelines for a humanoid robot — I thrive on tackling hard
              problems end-to-end, from circuit schematics to deployment code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside engineering, I tutor mathematics on Schoolhouse.world —
              working with{" "}
              <span className="text-foreground font-medium">
                125+ students across 25 countries
              </span>{" "}
              through sessions, a summer camp, and a 4-week intensive bootcamp.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I also competed nationally in{" "}
              <span className="text-foreground font-medium">
                Speech &amp; Debate
              </span>
              , earning the{" "}
              <span className="text-foreground font-medium">
                National Degree of Distinction
              </span>{" "}
              — a recognition placing me in the top 4.89% of competitors
              nationwide.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="mailto:gurramsphoorthi@tamu.edu"
                className="text-sm text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
              >
                gurramsphoorthi@tamu.edu
              </a>
              <span className="text-border">·</span>
              <a
                href="https://linkedin.com/in/sphoorthi-gurram"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Headshot + Stats */}
          <div className="flex flex-col gap-6">
            {/* Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-cyan-500/40 shadow-lg shadow-cyan-500/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/sphoorthi-website/headshot.jpg"
                    alt="Sphoorthi Gurram"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-cyan-400 border-2 border-background" />
              </div>
            </motion.div>

            {/* Stats grid */}
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
                  className="rounded-xl border border-border bg-card p-5 flex flex-col gap-3 hover:border-cyan-500/30 transition-colors"
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
