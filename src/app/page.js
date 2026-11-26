import dynamic from 'next/dynamic';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <Navbar />

      <main className="stacked-wrapper">
        <Hero />
        <FadeUp delay={0.1}><Skills /></FadeUp>
        <FadeUp delay={0.1}><Education /></FadeUp>
        <FadeUp delay={0.1}><Experience /></FadeUp>
        <FadeUp delay={0.1}><Projects /></FadeUp>
        <FadeUp delay={0.1}><Contact /></FadeUp>
      </main>
    </>
  );
}

