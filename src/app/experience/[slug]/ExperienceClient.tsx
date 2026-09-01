"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Tag,
  ExternalLink,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import type { ExperienceData } from "@/lib/experiences";

export default function ExperienceClient({
  experience,
}: {
  experience: ExperienceData;
}) {
  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#27211b]">
      {/* Hero */}
      <div className="relative h-[48vh] min-h-[320px] overflow-hidden border-b border-[#d8cfc1] bg-[#eee5d8]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={experience.heroImage}
          alt={experience.org}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f1e8]/5 via-[#f7f1e8]/25 to-[#f7f1e8]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f1e8]/60 via-[#f7f1e8]/15 to-transparent" />

        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 border border-[#cfc4b5] bg-[#fffaf2] px-4 py-2 text-sm text-[#3b332a] shadow-sm transition-all hover:bg-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="absolute top-6 right-6">
          <span
            className={`border border-[#cfc4b5] bg-[#fffaf2] px-3 py-1.5 font-mono text-xs ${experience.color} shadow-sm`}
          >
            {experience.category}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-4xl px-4 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="-mt-12 relative z-10 mb-10 border-b border-[#d8cfc1] bg-[#f7f1e8]/95 pb-8 pt-4"
        >
          <p className={`text-xs font-mono ${experience.color} mb-2 tracking-widest uppercase`}>
            {experience.org}
          </p>
          <h1 className="text-3xl md:text-[2.6rem] font-bold tracking-tight text-[#27211b] mb-4 leading-tight max-w-2xl">
            {experience.tagline}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6e6255]">
            <span className={`font-semibold ${experience.color}`}>{experience.role}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {experience.location}
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="md:col-span-2 space-y-12">

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SectionLabel>Overview</SectionLabel>
              <div className="rounded-lg border border-[#d8cfc1] bg-[#fffaf2] p-5">
                <p className="text-[0.95rem] leading-relaxed text-[#3b332a]">
                  {experience.overview}
                </p>
              </div>
            </motion.div>

            {/* Schematics — shown before technical details */}
            {experience.schematics && experience.schematics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <SectionLabel>Photos & Diagrams</SectionLabel>
                <SchematicsGrid schematics={experience.schematics} experience={experience} />
              </motion.div>
            )}

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
            >
              <SectionLabel>Key Achievements</SectionLabel>
              <ul className="space-y-2.5">
                {experience.achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.38 + i * 0.06 }}
                    className="flex gap-3 rounded-lg border border-[#d8cfc1] bg-[#fffaf2] px-4 py-3 text-sm leading-relaxed"
                  >
                    <span className={`mt-[6px] w-1.5 h-1.5 shrink-0 ${experience.color} bg-current`} />
                    <span className="text-[#3b332a]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technical Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
            >
              <SectionLabel>Technical Details</SectionLabel>
              <div className="grid sm:grid-cols-2 gap-3">
                {experience.technicalHighlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.46 + i * 0.06 }}
                    className="flex flex-col overflow-hidden rounded-lg border border-[#d8cfc1] bg-[#fffaf2]"
                  >
                    <div className={`h-1 w-full ${experience.color} bg-current opacity-60`} />
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <p className={`text-xs font-mono font-semibold ${experience.color} leading-snug`}>
                        {item.label}
                      </p>
                      <p className="text-sm text-[#6e6255] leading-relaxed flex-1">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-lg border border-[#d8cfc1] bg-[#fffaf2] p-5"
            >
              <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6e6255]">
                <Tag className="w-3.5 h-3.5" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-md border border-[#d8cfc1] bg-[#f7f1e8] px-2.5 py-1 text-xs ${experience.color}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Resources — big buttons */}
            {experience.links && experience.links.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="rounded-lg border border-[#d8cfc1] bg-[#fffaf2] p-5"
              >
                <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6e6255]">
                  <FileText className="w-3.5 h-3.5" />
                  Resources
                </h3>
                <div className="space-y-3">
                  {experience.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-start gap-3 rounded-lg border border-[#d8cfc1] bg-[#f7f1e8] p-3 transition-colors hover:bg-white"
                    >
                      <ExternalLink className={`w-4 h-4 mt-0.5 shrink-0 ${experience.color}`} />
                      <div className="min-w-0">
                        <p className={`text-sm font-medium ${experience.color} leading-snug`}>
                          {link.label}
                        </p>
                        {link.description && (
                          <p className="mt-0.5 text-xs leading-snug text-[#6e6255]">
                            {link.description}
                          </p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Link
                href="/#experience"
                className="flex items-center gap-2 text-sm text-[#6e6255] transition-colors hover:text-[#27211b]"
              >
                <ArrowLeft className="w-4 h-4" />
                All experiences
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#6e6255]">
      {children}
    </p>
  );
}

function SchematicsGrid({
  schematics,
  experience,
}: {
  schematics: NonNullable<ExperienceData["schematics"]>;
  experience: ExperienceData;
}) {
  // Group consecutive small items into pairs for side-by-side display
  const groups: Array<{ items: typeof schematics; paired: boolean }> = [];
  let i = 0;
  while (i < schematics.length) {
    const s = schematics[i];
    if (s.small && i + 1 < schematics.length && schematics[i + 1].small) {
      groups.push({ items: [s, schematics[i + 1]], paired: true });
      i += 2;
    } else {
      groups.push({ items: [s], paired: false });
      i += 1;
    }
  }

  return (
    <div className="space-y-5">
      {groups.map((group, gi) =>
        group.paired ? (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.32 + gi * 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {group.items.map((s, si) => (
              <SchematicCard key={si} s={s} experience={experience} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.32 + gi * 0.1 }}
          >
            <SchematicCard s={group.items[0]} experience={experience} />
          </motion.div>
        )
      )}
    </div>
  );
}

function SchematicCard({
  s,
  experience,
}: {
  s: NonNullable<ExperienceData["schematics"]>[number];
  experience: ExperienceData;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-[#d8cfc1] bg-[#fffaf2]">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 border-b border-[#d8cfc1] px-4 py-2.5">
        <p className={`text-xs font-mono font-semibold ${experience.color} flex items-center gap-2`}>
          {s.type === "image" ? (
            <ImageIcon className="w-3.5 h-3.5" />
          ) : (
            <ExternalLink className="w-3.5 h-3.5" />
          )}
          {s.title}
        </p>
        {s.type === "link" && (
          <a
            href={s.src}
            target="_blank"
            rel="noreferrer"
            className={`text-xs font-mono ${experience.color} hover:underline flex items-center gap-1`}
          >
            Open <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Image */}
      {s.type === "image" && (
        <>
          {s.rotateCCW ? (
            /* Landscape container for a portrait image rotated CCW */
            <div className="overflow-hidden bg-[#eee5d8] flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.title}
                style={{ transform: "rotate(-90deg)", width: "75%", height: "auto", maxHeight: "none" }}
              />
            </div>
          ) : s.rotateCW ? (
            /* Landscape container for a portrait image rotated CW */
            <div className="overflow-hidden bg-[#eee5d8] flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.title}
                style={{ transform: "rotate(90deg)", width: "75%", height: "auto", maxHeight: "none" }}
              />
            </div>
          ) : s.small ? (
            /* Small image — crop white space with cover */
            <div className="overflow-hidden bg-white" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.title}
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>
          ) : (
            <div className="bg-[#f7f1e8]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.title}
                className="w-full object-contain max-h-[480px]"
              />
            </div>
          )}
          {s.caption && (
            <p className="border-t border-[#d8cfc1] px-4 py-2.5 text-xs leading-relaxed text-[#6e6255]">
              {s.caption}
            </p>
          )}
        </>
      )}

      {/* Embed (PDF iframe) */}
      {s.type === "embed" && (
        <>
          <iframe
            src={s.src}
            title={s.title}
            className="w-full border-0"
            style={{ height: "640px" }}
          />
          {s.caption && (
            <p className="border-t border-[#d8cfc1] px-4 py-2.5 text-xs leading-relaxed text-[#6e6255]">
              {s.caption}
            </p>
          )}
        </>
      )}

      {/* External link */}
      {s.type === "link" && (
        <div className="p-6 flex flex-col items-center gap-4">
          <p className="max-w-sm text-center text-sm leading-relaxed text-[#6e6255]">
            {s.caption}
          </p>
          <a
            href={s.src}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-lg border border-[#d8cfc1] bg-[#f7f1e8] px-5 py-2.5 font-mono text-sm ${experience.color} transition-colors hover:bg-white`}
          >
            <ExternalLink className="w-4 h-4" />
            Open Interactive Schematic
          </a>
        </div>
      )}
    </div>
  );
}
