import { Nav, Footer } from "@/components/portfolio/site-chrome";
import { Hero, StatsBanner } from "@/components/portfolio/hero";
import { Projects, Gallery } from "@/components/portfolio/projects";
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
        <Projects />
        <Gallery />
        <Experience />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
