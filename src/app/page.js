import dynamic from 'next/dynamic';

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackgroundGifs from "@/components/BackgroundGifs";
import FadeUp from "@/components/FadeUp";

// Lazy load below-the-fold components for performance
const Skills = dynamic(() => import("@/components/Skills"));
const Education = dynamic(() => import("@/components/Education"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />

      {/* Overlay global: partikel melayang (di belakang konten) */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <BackgroundGifs />
      </div>

      <main className="stacked-wrapper">
        <Hero />
        <FadeUp delay={0.2}><Skills /></FadeUp>
        <FadeUp delay={0.2}><Education /></FadeUp>
        <FadeUp delay={0.2}><Experience /></FadeUp>
        <FadeUp delay={0.2}><Projects /></FadeUp>
        <FadeUp delay={0.2}><Contact /></FadeUp>
      </main>
    </>
  );
}

