import { Nav, Footer } from "@/components/portfolio/site-chrome";
import { Hero, StatsBanner } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { PhotoCarousel } from "@/components/portfolio/PhotoCarousel";
import { Experience, Skills } from "@/components/portfolio/experience";
import { Certifications } from "@/components/portfolio/certifications";
import { About, Contact } from "@/components/portfolio/about-contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <StatsBanner />
        <PhotoCarousel />
        <Projects />
        <Certifications />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
