import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  return (
    <>
      {/* Overlay global: partikel melayang (di belakang konten) */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <FloatingParticles />
      </div>

      <Dock />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
