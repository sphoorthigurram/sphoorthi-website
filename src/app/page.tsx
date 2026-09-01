import Navbar from "@/components/Navbar";
import { Hero } from "@/components/ui/animated-hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CurrentBench from "@/components/CurrentBench";
import PhotoCarousel from "@/components/PhotoCarousel";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PhotoCarousel />
      <CurrentBench />
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
