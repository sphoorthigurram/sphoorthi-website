import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { experiences, skillGroups } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";
import { MediaLightbox } from "./media-lightbox";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <SectionHeading
        eyebrow="Trajectory"
        title="Experience"
        description="Leadership and research roles across power electronics, robotics, and applied research."
      />

      <div className="relative mt-12 pl-6 sm:pl-8">
        <span className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary/70 via-border to-transparent" />
        {experiences.map((exp, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={exp.org} delay={i * 70} className="relative pb-4">
              <span
                className={cn(
                  "absolute -left-6 top-6 size-3 rounded-full border-2 transition-all sm:-left-8",
                  isOpen ? "border-primary bg-primary glow-ring" : "border-border bg-background",
                )}
              />
              <div className="w-full rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-primary/40 sm:p-6">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                      {exp.period}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold">{exp.org}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{exp.role}</p>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="size-3.5" />
                      {exp.location}
                    </p>
                  </div>
                  <ChevronDown
                    className={cn(
                      "mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180 text-primary",
                    )}
                  />
                </button>

                <div
                  className="grid overflow-hidden transition-all duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <ul className="mt-4 space-y-2 border-t border-border pt-4">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {exp.media ? (
                      <div className="mt-5 border-t border-border pt-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                          Supporting portfolio
                        </p>
                        <div className="mt-3 overflow-hidden rounded-lg border border-border bg-background p-3">
                          <MediaLightbox
                            src={exp.media.image}
                            alt={exp.media.title}
                            caption={exp.media.description}
                            className="aspect-[16/9] [&_img]:h-full"
                          />
                          <h4 className="mt-3 text-sm font-semibold">{exp.media.title}</h4>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {exp.media.description}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Skills() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...skillGroups.map((g) => g.name)];
  const shown = filter === "All" ? skillGroups : skillGroups.filter((g) => g.name === filter);

  return (
    <section id="skills" className="scroll-mt-24 border-y border-border bg-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="From board-level design and embedded firmware to perception models and simulation."
        />

        <Reveal className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-semibold transition-all",
                filter === cat
                  ? "border-primary/50 bg-primary/15 text-primary glow-ring"
                  : "border-border bg-background text-muted-foreground hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {shown.map((group, i) => (
            <Reveal key={group.name} delay={i * 80} className="rounded-2xl p-6 panel">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {group.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
