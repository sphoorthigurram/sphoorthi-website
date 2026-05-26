const photos = [
  {
    src: "/sphoorthi-website/gallery/ev-charger-presentation-1.jpg",
    alt: "Sphoorthi presenting a bidirectional charger block diagram",
    caption: "Presenting our bidirectional EV charger architecture.",
  },
  {
    src: "/sphoorthi-website/gallery/ev-charger-presentation-2.jpg",
    alt: "Sphoorthi explaining bidirectional charging with a water dam analogy",
    caption: "Explaining bidirectional charging through a grid storage analogy.",
  },
  {
    src: "/sphoorthi-website/gallery/wired-nationals-team.jpg",
    alt: "WIRED Robotics team members headed to nationals",
    caption: "Some of the WIRED Robotics women headed to nationals.",
  },
  {
    src: "/sphoorthi-website/gallery/think-tank-electra-team-1.jpg",
    alt: "Think Tank Electra team standing together after a presentation",
    caption: "Team Electra team photo.",
  },
  {
    src: "/sphoorthi-website/gallery/auv-build-collage.jpg",
    alt: "A collage of AUV electronics work and team build sessions",
    caption: "Build days, wiring, debugging, and pool testing for the AUV.",
  },
  {
    src: "/sphoorthi-website/gallery/ev-charger-first-presentation.jpg",
    alt: "Team Electra presenting the bidirectional EV charger",
    caption: "Team photo from our first EV charger presentation.",
  },
  {
    src: "/sphoorthi-website/gallery/think-tank-electra-team-2.jpg",
    alt: "Think Tank Electra team candid photo",
    caption: "Team Electra team photo.",
  },
];

export default function PhotoCarousel() {
  const carouselPhotos = [...photos, ...photos];

  return (
    <section id="gallery" className="py-20 px-4 overflow-hidden bg-card/30">
      <div className="container mx-auto max-w-5xl mb-10">
        <p className="text-cyan-400 text-sm font-mono mb-2 tracking-widest uppercase">
          Gallery
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-spektr-cyan-50">
          Work in motion
        </h2>
      </div>

      <div className="relative">
        <div className="photo-carousel-track flex w-max gap-5">
          {carouselPhotos.map((photo, index) => (
            <figure
              key={`${photo.src}-${index}`}
              className="gallery-photo relative h-[250px] w-[340px] shrink-0 overflow-hidden rounded-lg border border-border bg-card md:h-[320px] md:w-[460px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery-photo-image h-full w-full object-cover transition duration-500"
                loading="lazy"
              />
              <figcaption className="gallery-photo-caption absolute inset-x-0 bottom-0 translate-y-full bg-background/90 px-4 py-4 text-sm leading-relaxed text-spektr-cyan-50 backdrop-blur-md transition duration-300">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
