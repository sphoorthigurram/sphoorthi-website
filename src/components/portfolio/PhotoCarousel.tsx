"use client";

import { ArrowRight } from "lucide-react";
import { gallery } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";

export function PhotoCarousel() {
  const carouselPhotos = [...gallery, ...gallery];

  return (
    <section className="scroll-mt-24 overflow-hidden border-y border-border bg-card/40 py-20">
      <div className="mx-auto mb-10 max-w-6xl px-5">
        <SectionHeading
          eyebrow="Gallery"
          title="Work in motion"
          description="A continuous reel from the lab, the pool deck, and the presentation floor."
        />
        <Reveal delay={80} className="mt-6">
          <a
            href="#gallery"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View full gallery
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
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
    </section>
  );
}
