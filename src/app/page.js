import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />

      {/* Overlay global: partikel melayang (di belakang konten) */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>

      </div>

      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
