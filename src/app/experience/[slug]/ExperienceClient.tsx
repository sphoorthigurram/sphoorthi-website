"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Tag,
  FileText,
  ExternalLink,
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

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-sm text-white/90 hover:text-white bg-background/50 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 transition-all hover:bg-background/70"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Category badge */}
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
        {/* Header — overlaps hero bottom */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="-mt-16 relative z-10 mb-10"
        >
          <p
            className={`text-xs font-mono ${experience.color} mb-2 tracking-widest uppercase`}
          >
            {experience.org}
          </p>
          <h1 className="text-3xl md:text-[2.6rem] font-bold tracking-tight text-spektr-cyan-50 mb-4 leading-tight max-w-2xl">
            {experience.tagline}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className={`font-semibold ${experience.color}`}>
              {experience.role}
            </span>
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
          <div className="md:col-span-2 space-y-10">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SectionLabel>Overview</SectionLabel>
              <p className="text-foreground/80 leading-relaxed text-[0.95rem]">
                {experience.overview}
              </p>
            </motion.div>

            {/* Technical Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <SectionLabel>Technical Details</SectionLabel>
              <div className="space-y-3">
                {experience.technicalHighlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                    className={`rounded-xl border ${experience.border} bg-card p-4 hover:${experience.bg} transition-colors`}
                  >
                    <p
                      className={`text-xs font-mono font-semibold ${experience.color} mb-1.5 tracking-wide`}
                    >
                      {item.label}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SectionLabel>Key Achievements</SectionLabel>
              <ul className="space-y-3">
                {experience.achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.32 + i * 0.07 }}
                    className="flex gap-3 text-sm text-foreground/80 leading-relaxed"
                  >
                    <span
                      className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${experience.color} bg-current`}
                    />
                    {item}
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

            {/* Resources */}
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
                <div className="space-y-2.5">
                  {experience.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel="noreferrer"
                      className={`flex items-center gap-2 text-sm ${experience.color} hover:underline underline-offset-4 transition-colors`}
                    >
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Back to all experiences */}
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
