"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  ScanLine,
} from "lucide-react";
import { projects, gallery, type Project } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        eyebrow="Featured Work"
        title="Selected projects"
        description="A few builds from Team Electra, WIRED, EDEN, and the lab. Open a card for diagrams, docs, and details."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 90}>
            <button
              type="button"
              onClick={() => setActive(project)}
              className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-500 hover:-translate-y-1 hover:glow-ring"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                  {project.year}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {project.org}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug">{project.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                    >
                      {m.label}: {m.value}
                    </span>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View project
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-lg border border-border bg-background/80 text-muted-foreground hover:text-primary"
            >
              <X className="size-4" />
            </button>
            <div className="relative aspect-[16/8] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={active.image} alt={active.title} className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                {active.org} · {active.role}
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{active.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{active.summary}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {active.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-background p-3">
                    <p className="font-display text-lg font-semibold text-primary">{m.value}</p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-wide text-muted-foreground">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <h4 className="mt-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Engineering highlights
              </h4>
              <ul className="mt-3 space-y-2.5">
                {active.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] text-primary"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {active.diagrams?.length ? (
                <section className="mt-8 border-t border-border pt-7">
                  <div className="flex items-center gap-2">
                    <ScanLine className="size-4 text-primary" />
                    <h4 className="text-sm font-semibold uppercase tracking-widest">
                      Schematics & Diagrams
                    </h4>
                  </div>
                  <div className="mt-4 grid gap-4">
                    {active.diagrams.map((diagram) => (
                      <article key={diagram.image} className="rounded-lg border border-border bg-background p-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={diagram.image}
                          alt={diagram.title}
                          className="max-h-[26rem] w-full rounded-md object-contain"
                        />
                        <div className="px-1 pb-1 pt-4">
                          <h5 className="text-base font-semibold">{diagram.title}</h5>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                            {diagram.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}

              {active.documents?.length ? (
                <section className="mt-8 border-t border-border pt-7">
                  <div className="flex items-center gap-2">
                    <FileText className="size-4 text-primary" />
                    <h4 className="text-sm font-semibold uppercase tracking-widest">
                      Attachments & Documents
                    </h4>
                  </div>
                  <div className="mt-4 grid gap-3">
                    {active.documents.map((document) => (
                      <a
                        key={document.url}
                        href={document.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex min-w-0 gap-3">
                          <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                            <FileText className="size-5" />
                          </span>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h5 className="text-sm font-semibold">{document.title}</h5>
                              <span className="rounded-md border border-primary/30 px-2 py-0.5 font-mono text-[9px] text-primary">
                                {document.format}
                              </span>
                            </div>
                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                              {document.description}
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                          <Download className="size-4" />
                          View PDF
                        </span>
                      </a>
                    ))}
                  </div>
                </section>
              ) : null}

              {active.externalLinks?.length ? (
                <section className="mt-8 border-t border-border pt-7">
                  <div className="flex items-center gap-2">
                    <ExternalLink className="size-4 text-primary" />
                    <h4 className="text-sm font-semibold uppercase tracking-widest">External Links</h4>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {active.externalLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex min-h-20 items-center justify-between gap-3 rounded-lg border border-border bg-background p-4 text-left transition-colors hover:border-primary/40"
                      >
                        <span>
                          <span className="block text-sm font-semibold">{link.label}</span>
                          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                            {link.description}
                          </span>
                        </span>
                        <ExternalLink className="size-4 shrink-0 text-primary" />
                      </a>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const step = (dir: number) =>
    setIndex((prev) => (prev === null ? prev : (prev + dir + gallery.length) % gallery.length));

  return (
    <section id="gallery" className="scroll-mt-24 border-y border-border bg-card py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Work in Motion"
          title="Build days, presentations, and pool tests"
          description="Moments from the lab, the pool deck, and the presentation floor."
        />

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 80} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-xl border border-border"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background/95 to-transparent p-4 text-left text-xs leading-snug text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {index !== null ? (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-background/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setIndex(null)}
            aria-label="Close gallery"
            className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-border bg-card text-muted-foreground hover:text-primary"
          >
            <X className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
            className="absolute left-4 grid size-11 place-items-center rounded-full border border-border bg-card/80 text-muted-foreground hover:text-primary"
          >
            <ChevronLeft className="size-5" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gallery[index]?.src}
            alt={gallery[index]?.caption ?? ""}
            className="max-h-[76vh] w-auto max-w-full rounded-xl border border-border object-contain"
          />
          <p className="mt-4 max-w-md text-center text-sm text-muted-foreground">
            {gallery[index]?.caption}
          </p>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photo"
            className="absolute right-4 grid size-11 place-items-center rounded-full border border-border bg-card/80 text-muted-foreground hover:text-primary"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
