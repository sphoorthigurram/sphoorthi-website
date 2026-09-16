"use client";

import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Courses and credentials in semiconductor fabrication, wireless systems, and CAD."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 90} as="article">
              <div
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all",
                  "hover:border-primary/30 hover:shadow-[0_0_24px_-8px_rgba(34,211,238,0.12)]",
                )}
              >
                <div className="relative aspect-[4/3] w-full border-b border-border bg-background p-3 sm:p-4">
                  {cert.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="size-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="grid size-full place-items-center">
                      <Award className="size-12 text-primary/80" />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-snug">{cert.title}</h3>
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noreferrer"
                        className="grid size-8 shrink-0 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                        aria-label={`View ${cert.title}`}
                      >
                        <ExternalLink className="size-3.5" />
                      </a>
                    ) : null}
                  </div>

                  <p className="mt-1 text-sm font-medium text-primary">{cert.issuer}</p>
                  {cert.date ? (
                    <p className="mt-0.5 text-xs text-muted-foreground">{cert.date}</p>
                  ) : null}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
