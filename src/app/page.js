import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import StackedSection from "@/components/StackedSection";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />

      {/* Overlay global: partikel melayang (di belakang konten) */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>

      </div>

      <main className="stacked-wrapper">
        <StackedSection zIndex={10}>
          <Hero />
        </StackedSection>
        
        <StackedSection zIndex={20}>
          <Skills />
        </StackedSection>
        
        <StackedSection zIndex={30}>
          <Education />
        </StackedSection>
        
        <StackedSection zIndex={40}>
          <Experience />
        </StackedSection>
        
        <StackedSection zIndex={50}>
          <Projects />
        </StackedSection>
        
        <StackedSection zIndex={60}>
          <Contact />
        </StackedSection>
      </main>
    </>
  );
}
