"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CircuitBoard, Gauge, Waves } from "lucide-react";

const benchNotes = [
  {
    number: "01",
    label: "AUV power rail",
    detail: "Boost-converter transition for DVL, thrusters, and Jetson loads.",
    icon: Waves,
  },
  {
    number: "02",
    label: "EV charger topology",
    detail: "GaN totem-pole PFC feeding a Dual Active Bridge DC-DC stage.",
    icon: CircuitBoard,
  },
  {
    number: "03",
    label: "Solar tracker",
    detail: "ESP32 telemetry and MATLAB analysis for dual-axis tracking.",
    icon: Gauge,
  },
];

const callouts = [
  {
    number: "A",
    label: "DVL integration",
    className: "left-[12%] top-[18%]",
  },
  {
    number: "B",
    label: "Power routing",
    className: "left-[56%] top-[48%]",
  },
  {
    number: "C",
    label: "Pool validation",
    className: "left-[72%] top-[22%]",
  },
];

export default function CurrentBench() {
  return (
    <section className="border-b border-border bg-[#f7f3ea] px-4 py-20">
      <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between gap-10"
        >
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#5a1720]">
              Current bench
            </p>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-[#1e2528] md:text-5xl">
              Work shown as artifacts, not feature cards.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#59605d]">
              A working snapshot of the systems I am building: underwater
              robotics, power electronics, solar tracking, and the debugging
              that connects them.
            </p>
          </div>

          <div className="divide-y divide-[#d8d2c4] border-y border-[#d8d2c4]">
            {benchNotes.map((note) => {
              const Icon = note.icon;
              return (
                <a
                  key={note.number}
                  href="#experience"
                  className="group grid grid-cols-[3rem_1fr_auto] items-start gap-4 py-4"
                >
                  <span className="font-mono text-sm text-[#5a1720]">
                    {note.number}
                  </span>
                  <span>
                    <span className="flex items-center gap-2 font-semibold text-[#1e2528]">
                      <Icon className="h-4 w-4 text-[#4f7f91]" />
                      {note.label}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-[#59605d]">
                      {note.detail}
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1 h-4 w-4 text-[#5a1720] opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className="border border-[#d8d2c4] bg-white p-3 shadow-sm"
        >
          <div className="relative overflow-hidden border border-[#d8d2c4] bg-[#ede6d8]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sphoorthi-website/gallery/auv-build-collage.jpg"
              alt="AUV electronics build sessions, wiring, debugging, and pool testing"
              className="h-[360px] w-full object-cover md:h-[480px]"
            />
            {callouts.map((callout) => (
              <div
                key={callout.number}
                className={`absolute ${callout.className} flex items-center gap-2`}
              >
                <span className="grid h-7 w-7 place-items-center border border-[#5a1720] bg-[#fffaf2] font-mono text-xs font-semibold text-[#5a1720] shadow-sm">
                  {callout.number}
                </span>
                <span className="hidden border border-[#d8d2c4] bg-[#fffaf2] px-2 py-1 font-mono text-xs text-[#1e2528] shadow-sm sm:block">
                  {callout.label}
                </span>
              </div>
            ))}
          </div>
          <figcaption className="mt-3 grid gap-1 border-l-2 border-[#5a1720] pl-3 text-sm text-[#59605d]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5a1720]">
              Field image
            </span>
            Build days, wiring, debugging, and pool testing for the WIRED AUV.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
