import dynamic from 'next/dynamic';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Affiliations from "@/components/Affiliations";
import FadeUp from "@/components/FadeUp";
import ScrollAssist from "@/components/ScrollAssist";

// Lazy load below-the-fold components for performance
const Skills = dynamic(() => import("@/components/Skills"));
const Education = dynamic(() => import("@/components/Education"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <>
      <ScrollAssist />
      <Navbar />

      <main className="stacked-wrapper">
        <Hero />
        <Affiliations />
        <FadeUp delay={0.1}><Skills /></FadeUp>
        <FadeUp delay={0.1}><Education /></FadeUp>
        <FadeUp delay={0.1}><Experience /></FadeUp>
        <FadeUp delay={0.1}><Projects /></FadeUp>
        <FadeUp delay={0.1}><Contact /></FadeUp>
      </main>
    </>
  );
}

