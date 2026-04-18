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
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[340px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={experience.heroImage}
          alt={experience.org}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />

        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/90 hover:text-white bg-background/50 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 transition-all hover:bg-background/70"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="absolute top-6 right-6">
          <span
            className={`text-xs px-3 py-1.5 rounded-full ${experience.bg} ${experience.color} border ${experience.border} font-mono backdrop-blur-sm`}
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
          className="-mt-16 relative z-10 mb-10"
        >
          <p className={`text-xs font-mono ${experience.color} mb-2 tracking-widest uppercase`}>
            {experience.org}
          </p>
          <h1 className="text-3xl md:text-[2.6rem] font-bold tracking-tight text-spektr-cyan-50 mb-4 leading-tight max-w-2xl">
            {experience.tagline}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
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
              <div className={`rounded-xl border ${experience.border} p-5 ${experience.bg}`}>
                <p className="text-foreground/85 leading-relaxed text-[0.95rem]">
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
                <SectionLabel>Schematics & Diagrams</SectionLabel>
                <div className="space-y-5">
                  {experience.schematics.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.32 + i * 0.1 }}
                      className={`rounded-xl border ${experience.border} bg-card overflow-hidden`}
                    >
                      <div className={`px-4 py-3 border-b ${experience.border} flex items-center justify-between gap-3`}>
                        <p className={`text-xs font-mono font-semibold ${experience.color} flex items-center gap-2`}>
                          {s.type === "image"
                            ? <ImageIcon className="w-3.5 h-3.5" />
                            : <ExternalLink className="w-3.5 h-3.5" />}
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

                      {s.type === "image" && (
                        <>
                          <div className={s.rotate ? "flex justify-center bg-white/5 py-4 overflow-hidden" : ""}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={s.src}
                              alt={s.title}
                              className={`object-contain bg-white/5 max-h-[560px] ${s.rotate ? "rotate-90 max-h-[400px] w-auto" : "w-full"}`}
                            />
                          </div>
                          {s.caption && (
                            <p className="text-xs text-muted-foreground px-4 py-3 border-t border-border leading-relaxed">
                              {s.caption}
                            </p>
                          )}
                        </>
                      )}

                      {s.type === "embed" && (
                        <>
                          <iframe
                            src={s.src}
                            title={s.title}
                            className="w-full h-[640px] border-0"
                          />
                          {s.caption && (
                            <p className="text-xs text-muted-foreground px-4 py-3 border-t border-border leading-relaxed">
                              {s.caption}
                            </p>
                          )}
                        </>
                      )}

                      {s.type === "link" && (
                        <div className="p-6 flex flex-col items-center gap-4">
                          <p className="text-sm text-muted-foreground text-center max-w-sm leading-relaxed">
                            {s.caption}
                          </p>
                          <a
                            href={s.src}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border ${experience.border} ${experience.bg} ${experience.color} text-sm font-mono hover:opacity-80 transition-opacity`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open Interactive Schematic
                          </a>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Technical Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              <SectionLabel>Technical Details</SectionLabel>
              <div className="grid sm:grid-cols-2 gap-3">
                {experience.technicalHighlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
                    className={`rounded-xl border ${experience.border} bg-card overflow-hidden flex flex-col`}
                  >
                    <div className={`h-1 w-full ${experience.color} bg-current opacity-60`} />
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <p className={`text-xs font-mono font-semibold ${experience.color} leading-snug`}>
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

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
                    className={`flex gap-3 text-sm leading-relaxed rounded-lg border ${experience.border} bg-card px-4 py-3`}
                  >
                    <span className={`mt-[6px] w-1.5 h-1.5 rounded-full shrink-0 ${experience.color} bg-current`} />
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                <Tag className="w-3.5 h-3.5" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-md ${experience.bg} ${experience.color} border ${experience.border}`}
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
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
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
                      className={`flex items-start gap-3 p-3 rounded-lg border ${experience.border} ${experience.bg} hover:opacity-80 transition-opacity group`}
                    >
                      <ExternalLink className={`w-4 h-4 mt-0.5 shrink-0 ${experience.color}`} />
                      <div className="min-w-0">
                        <p className={`text-sm font-medium ${experience.color} leading-snug`}>
                          {link.label}
                        </p>
                        {link.description && (
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
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
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
      {children}
    </p>
  );
}
