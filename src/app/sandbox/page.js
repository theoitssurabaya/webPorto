"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Sandbox() {
  const [activeDemo, setActiveDemo] = useState(0);

  return (
    <div style={{ background: "#050505", color: "#fff", minHeight: "100vh" }}>
      <div style={{ position: "fixed", top: 20, left: 20, zIndex: 100, display: "flex", gap: "10px", background: "rgba(0,0,0,0.5)", padding: "10px", borderRadius: "10px", backdropFilter: "blur(10px)" }}>
        <button onClick={() => setActiveDemo(1)} style={{ padding: "8px 16px", background: activeDemo === 1 ? "#fff" : "#222", color: activeDemo === 1 ? "#000" : "#fff", borderRadius: "8px" }}>1. Horizontal</button>
        <button onClick={() => setActiveDemo(2)} style={{ padding: "8px 16px", background: activeDemo === 2 ? "#fff" : "#222", color: activeDemo === 2 ? "#000" : "#fff", borderRadius: "8px" }}>2. Circle Reveal</button>
        <button onClick={() => setActiveDemo(3)} style={{ padding: "8px 16px", background: activeDemo === 3 ? "#fff" : "#222", color: activeDemo === 3 ? "#000" : "#fff", borderRadius: "8px" }}>3. 3D Zoom</button>
        <button onClick={() => setActiveDemo(4)} style={{ padding: "8px 16px", background: activeDemo === 4 ? "#fff" : "#222", color: activeDemo === 4 ? "#000" : "#fff", borderRadius: "8px" }}>4. Smooth Wipe</button>
        <button onClick={() => setActiveDemo(5)} style={{ padding: "8px 16px", background: activeDemo === 5 ? "#fff" : "#222", color: activeDemo === 5 ? "#000" : "#fff", borderRadius: "8px" }}>5. Blur Reveal</button>
        <Link href="/" style={{ padding: "8px 16px", background: "red", color: "#fff", borderRadius: "8px", textDecoration: "none" }}>Back</Link>
      </div>

      {activeDemo === 0 && (
        <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Pilih Demo di Atas</h1>
        </div>
      )}

      {activeDemo === 1 && <DemoHorizontal />}
      {activeDemo === 2 && <DemoCircleReveal />}
      {activeDemo === 3 && <DemoZoom />}
      {activeDemo === 4 && <DemoSmoothWipe />}
      {activeDemo === 5 && <DemoBlurReveal />}
    </div>
  );
}

function DemoSmoothWipe() {
  return (
    <div style={{ position: "relative" }}>
      <section style={{ height: "100vh", position: "sticky", top: 0, zIndex: 1, background: "#050505", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #333" }}>
        <h1>Sesi 1 (Diam di Tempat)</h1>
      </section>
      <section style={{ height: "100vh", position: "relative", zIndex: 2, background: "#111", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 -20px 40px rgba(0,0,0,0.5)" }}>
        <h1>Sesi 2 (Menyapu Sesi 1 dengan Mulus)</h1>
      </section>
      <section style={{ height: "100vh", position: "relative", zIndex: 3, background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 -20px 40px rgba(0,0,0,0.5)" }}>
        <h1>Sesi 3 (Menyapu Sesi 2)</h1>
      </section>
    </div>
  );
}

const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

function DemoBlurReveal() {

  return (
    <div style={{ background: "#050505" }}>
      <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <FadeIn><h1 style={{ fontSize: "3rem" }}>Sesi 1 (Scroll ke bawah)</h1></FadeIn>
      </section>
      <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <FadeIn><h1 style={{ fontSize: "3rem" }}>Elemen Muncul Sangat Mulus (Blur Reveal)</h1></FadeIn>
      </section>
      <section style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <FadeIn><h1 style={{ fontSize: "3rem" }}>Tanpa Tumpukan, Murni Halus.</h1></FadeIn>
      </section>
    </div>
  );
}

function DemoHorizontal() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section ref={targetRef} style={{ height: "300vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex" }}>
        <motion.div style={{ x, display: "flex", height: "100%", width: "300vw" }}>
          <div style={{ width: "100vw", height: "100%", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #333" }}><h1>Scroll Down -&gt; Konten Bergerak ke Kiri (Apple Style)</h1></div>
          <div style={{ width: "100vw", height: "100%", background: "#222", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #333" }}><h1>Section 2 (Horizontal)</h1></div>
          <div style={{ width: "100vw", height: "100%", background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}><h1>Section 3 (Horizontal)</h1></div>
        </motion.div>
      </div>
    </section>
  );
}

function DemoCircleReveal() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const clipPath = useTransform(scrollYProgress, [0, 1], ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)"]);

  return (
    <div ref={targetRef} style={{ height: "200vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1>Scroll Ke Bawah untuk Membuka Sesi 2</h1>
        
        <motion.div style={{ 
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%", 
          background: "#fff", color: "#000", display: "flex", alignItems: "center", justifyContent: "center",
          clipPath
        }}>
          <h1>Sesi 2 Muncul dari Tengah! (Circle Reveal)</h1>
        </motion.div>
      </div>
    </div>
  );
}

function DemoZoom() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  
  const scale1 = useTransform(scrollYProgress, [0, 0.5], [1, 5]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  const scale2 = useTransform(scrollYProgress, [0.2, 1], [0.5, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <div ref={targetRef} style={{ height: "200vh", position: "relative", perspective: "1000px" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", background: "#050505" }}>
        
        <motion.div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", scale: scale1, opacity: opacity1 }}>
          <h1 style={{ fontSize: "4rem" }}>Anda Terbang Ke Depan</h1>
        </motion.div>

        <motion.div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#222", scale: scale2, opacity: opacity2 }}>
          <h1>Sesi 2 Mendekat dari Kejauhan (3D Zoom)</h1>
        </motion.div>
        
      </div>
    </div>
  );
}
