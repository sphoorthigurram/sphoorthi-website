"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const proofPoints = [
  ["01", "Power electronics", "Technical Lead, Team Electra"],
  ["02", "Robotics", "Executive Lead, WIRED AUV"],
  ["03", "Research", "SHINE Lab + PRD Lab"],
  ["04", "Teaching", "100+ learners across 20 countries"],
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden border-b border-border bg-background"
    >
      <div className="absolute inset-0 grid-bg opacity-70" />

      <div className="container relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 py-28 lg:grid-cols-[1.35fr_0.65fr] lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <a
            href="#about"
            className="mb-8 inline-flex items-center gap-2 border-b border-[#5a1720] pb-1 text-sm font-medium text-[#5a1720] transition-colors hover:text-[#7a2430]"
          >
            EE Honors / Texas A&M / Class of 2029
            <MoveRight className="h-4 w-4" />
          </a>

          <h1 className="text-5xl font-semibold leading-[0.98] text-slate-950 md:text-7xl lg:text-8xl">
            Sphoorthi Gurram
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-700 md:text-2xl">
            Currently pursuing a Bachelor of Science in Engineering at Texas
            A&M, building robotics, power electronics, and AI systems that have
            to work in the real world.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" className="gap-3 bg-[#5a1720] text-white hover:bg-[#7a2430]" asChild>
              <a href="#projects">
                Explore work <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-3 border-slate-300 bg-white text-slate-950 hover:bg-slate-100" variant="outline" asChild>
              <a href="mailto:gurramsphoorthi@tamu.edu">
                Email <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border-l border-border pl-6 lg:pl-8"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Current record
          </p>
          <div className="mt-6 divide-y divide-border">
            {proofPoints.map(([number, label, detail]) => (
              <a
                key={label}
                href="#experience"
                className="group grid grid-cols-[2.5rem_1fr] gap-4 py-4"
              >
                <span className="font-mono text-sm text-[#5a1720]">{number}</span>
                <span>
                  <span className="block text-base font-semibold text-slate-950 group-hover:text-[#5a1720]">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {detail}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

export { Hero };
