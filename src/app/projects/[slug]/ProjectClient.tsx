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
import type { ProjectData } from "@/lib/projects";

export default function ProjectClient({ project }: { project: ProjectData }) {
  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#27211b]">
      {/* Hero */}
      <div className="relative h-[48vh] min-h-[320px] overflow-hidden border-b border-[#d8cfc1] bg-[#eee5d8]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f1e8]/5 via-[#f7f1e8]/25 to-[#f7f1e8]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f1e8]/60 via-[#f7f1e8]/15 to-transparent" />

        <Link
          href="/#projects"
          className="absolute top-6 left-6 flex items-center gap-2 border border-[#cfc4b5] bg-[#fffaf2] px-4 py-2 text-sm text-[#3b332a] shadow-sm transition-all hover:bg-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="absolute top-6 right-6">
          <span
            className={`border border-[#cfc4b5] bg-[#fffaf2] px-3 py-1.5 font-mono text-xs ${project.color} shadow-sm`}
          >
            {project.category}
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
          <p className={`text-xs font-mono ${project.color} mb-2 tracking-widest uppercase`}>
            {project.org}
          </p>
          <h1 className="text-3xl md:text-[2.6rem] font-bold tracking-tight text-[#27211b] mb-4 leading-tight max-w-2xl">
            {project.tagline}
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6e6255]">
            <span className={`font-semibold ${project.color}`}>{project.role}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {project.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
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
              <div className="rounded-lg border border-[#d8cfc1] bg-[#fffaf2] p-5">
                <p className="text-[0.95rem] leading-relaxed text-[#3b332a]">
                  {project.overview}
                </p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <SectionLabel>Key Achievements</SectionLabel>
              <ul className="space-y-3">
                {project.achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                    className="flex gap-3 rounded-lg border border-[#d8cfc1] bg-[#fffaf2] px-4 py-3 text-sm leading-relaxed text-[#3b332a]"
                  >
                    <span className={`mt-[7px] w-1.5 h-1.5 shrink-0 ${project.color} bg-current`} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technical Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
            >
              <SectionLabel>Technical Details</SectionLabel>
              <div className="space-y-3">
                {project.technicalHighlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.28 + i * 0.07 }}
                    className="rounded-lg border border-[#d8cfc1] bg-[#fffaf2] p-4 transition-colors hover:bg-white"
                  >
                    <p className={`text-xs font-mono font-semibold ${project.color} mb-1.5 tracking-wide`}>
                      {item.label}
                    </p>
                    <p className="text-sm text-[#6e6255] leading-relaxed">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Schematics */}
            {project.schematics && project.schematics.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <SectionLabel>Schematics & Diagrams</SectionLabel>
                <div className="space-y-6">
                  {project.schematics.map((schematic, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.32 + i * 0.1 }}
                      className="overflow-hidden rounded-lg border border-[#d8cfc1] bg-[#fffaf2]"
                    >
                      <div className="flex items-center justify-between border-b border-[#d8cfc1] px-4 py-3">
                        <p className={`text-xs font-mono font-semibold ${project.color} tracking-wide`}>
                          {schematic.title}
                        </p>
                        {schematic.type === "link" && (
                          <a
                            href={schematic.src}
                            target="_blank"
                            rel="noreferrer"
                            className={`flex items-center gap-1.5 text-xs ${project.color} hover:underline`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Open
                          </a>
                        )}
                      </div>

                      {schematic.type === "image" && (
                        <div>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={schematic.src}
                            alt={schematic.title}
                            className="w-full object-contain bg-[#f7f1e8] max-h-[600px]"
                          />
                        </div>
                      )}

                      {schematic.type === "link" && (
                        <div className="p-6 flex flex-col items-center gap-4">
                          <p className="max-w-sm text-center text-sm leading-relaxed text-[#6e6255]">
                            {schematic.caption}
                          </p>
                          <a
                            href={schematic.src}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 rounded-lg border border-[#d8cfc1] bg-[#f7f1e8] px-5 py-2.5 font-mono text-sm ${project.color} transition-colors hover:bg-white`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open Interactive Schematic
                          </a>
                        </div>
                      )}

                      {schematic.caption && schematic.type === "image" && (
                        <p className="border-t border-[#d8cfc1] px-4 py-3 text-xs leading-relaxed text-[#6e6255]">
                          {schematic.caption}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
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
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-md border border-[#d8cfc1] bg-[#f7f1e8] px-2.5 py-1 text-xs ${project.color}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Resources */}
            {project.links && project.links.length > 0 && (
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
                <div className="space-y-2.5">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel="noreferrer"
                      className={`flex items-center gap-2 rounded-lg border border-[#d8cfc1] bg-[#f7f1e8] p-3 text-sm ${project.color} transition-colors hover:bg-white`}
                    >
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      {link.label}
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
                href="/#projects"
                className="flex items-center gap-2 text-sm text-[#6e6255] transition-colors hover:text-[#27211b]"
              >
                <ArrowLeft className="w-4 h-4" />
                All projects
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
