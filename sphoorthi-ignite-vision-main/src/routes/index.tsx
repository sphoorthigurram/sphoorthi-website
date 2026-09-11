import { createFileRoute } from "@tanstack/react-router";

import { Toaster } from "@/components/ui/sonner";
import { Nav, Footer } from "@/components/portfolio/site-chrome";
import { Hero, StatsBanner } from "@/components/portfolio/hero";
import { Projects, Gallery } from "@/components/portfolio/projects";
import { Experience, Skills } from "@/components/portfolio/experience";
import { Certifications } from "@/components/portfolio/certifications";
import { About, Contact } from "@/components/portfolio/about-contact";

const title = "Sphoorthi Gurram — Computer Engineering Portfolio";
const description =
  "CPEN Honors student at Texas A&M building autonomous robots, bidirectional EV chargers, and intelligent hardware systems.";
const ogImage = "https://sphoorthigurram.github.io/sphoorthi-website/headshot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <StatsBanner />
        <Projects />
        <Gallery />
        <Experience />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
