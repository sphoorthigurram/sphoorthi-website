"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";

export function PhotoCarousel() {
  const [showFull, setShowFull] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const carouselPhotos = [...gallery, ...gallery];

  const step = (dir: number) =>
    setLightbox((prev) =>
      prev === null ? prev : (prev + dir + gallery.length) % gallery.length,
    );

  return (
    <section id="gallery" className="scroll-mt-24 overflow-hidden border-y border-border bg-card/40 py-20">
      <div className="mx-auto mb-10 max-w-6xl px-5">
        <SectionHeading
          eyebrow="Gallery"
          title="Work in motion"
          description="A continuous reel from the lab, the pool deck, and the presentation floor."
        />
        <Reveal delay={80} className="mt-6">
          <button
            type="button"
            onClick={() => setShowFull((v) => !v)}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            {showFull ? "Hide full gallery" : "View full gallery"}
            {showFull ? (
              <ChevronUp className="size-4" />
            ) : (
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            )}
          </button>
        </Reveal>
      </div>

      <div className="relative">
        <div className="photo-carousel-track flex w-max gap-5">
          {carouselPhotos.map((photo, index) => (
            <figure
              key={`${photo.src}-${index}`}
              className="gallery-photo relative h-[250px] w-[340px] shrink-0 overflow-hidden rounded-xl border border-border bg-card md:h-[320px] md:w-[460px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.caption}
                className="gallery-photo-image h-full w-full object-cover transition duration-500"
                loading="lazy"
              />
              <figcaption className="gallery-photo-caption absolute inset-x-0 bottom-0 translate-y-full bg-background/90 px-4 py-4 text-sm leading-relaxed text-foreground backdrop-blur-md transition duration-300">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {showFull ? (
        <div className="mx-auto mt-14 max-w-6xl px-5">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold">All photos</h3>
            <button
              type="button"
              onClick={() => setShowFull(false)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ChevronUp className="size-4" />
              Collapse
            </button>
          </div>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-border"
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
            ))}
          </div>
        </div>
      ) : null}

      {lightbox !== null ? (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-background/95 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-border bg-card text-muted-foreground hover:text-primary"
          >
            <X className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous"
            className="absolute left-4 grid size-11 place-items-center rounded-full border border-border bg-card/80 text-muted-foreground hover:text-primary"
          >
            <ChevronLeft className="size-5" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gallery[lightbox]?.src}
            alt={gallery[lightbox]?.caption ?? ""}
            className="max-h-[76vh] w-auto max-w-full rounded-xl border border-border object-contain"
          />
          <p className="mt-4 max-w-md text-center text-sm text-muted-foreground">
            {gallery[lightbox]?.caption}
          </p>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next"
            className="absolute right-4 grid size-11 place-items-center rounded-full border border-border bg-card/80 text-muted-foreground hover:text-primary"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
