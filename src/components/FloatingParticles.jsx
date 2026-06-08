"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Path SVG ikon-ikon teknologi (ringan, tanpa library eksternal)
const TECH_ICONS = [
  { 
    name: "Python",
    path: "M12 1.5c-1.53 0-2.94.2-4.13.56C5.58 2.7 5 3.6 5 4.82V7h7v1H4.72C3.15 8 1.82 9.04 1.39 10.8c-.5 2.02-.52 3.28 0 5.39.38 1.57 1.3 2.71 2.72 2.71h1.76v-2.44c0-1.77 1.53-3.34 3.34-3.34h5.58c1.58 0 2.84-1.3 2.84-2.89V4.82c0-1.53-1.3-2.68-2.84-2.99A19 19 0 0 0 12 1.5m-2.79 1.93a1.07 1.07 0 1 1 0 2.14 1.07 1.07 0 0 1 0-2.14M19.28 8v2.37c0 1.85-1.57 3.4-3.34 3.4H10.36c-1.55 0-2.84 1.33-2.84 2.89v5.42c0 1.53 1.33 2.43 2.84 2.89 1.81.55 3.54.65 5.58 0 1.36-.43 2.84-1.3 2.84-2.89V20h-7v-1h9.42c1.57 0 2.16-1.1 2.72-2.71.58-1.67.55-3.27 0-5.39C23.34 9.1 22.18 8 20.61 8zM14.79 20.57a1.07 1.07 0 1 1 0 2.14 1.07 1.07 0 0 1 0-2.14"
  },
  {
    name: "Circuit",
    path: "M7 2v2h1V3h1V2zm4 0v1h2V2zm5 0v1h1v1h1V2zM3 7v1h1v1h1V7zm8 0v2h2V7zm8 0v2h1V7zM3 12v2h1v-2zm8 0v2h2v-2zm8 0v2h1v-2zM2 17v2h2v-1H3v-1zm10 0v1h2v-1zm5 0v1h1v1h1v-2zM7 20v2h2v-1H8v-1zm4 0v2h2v-2z"
  },
  {
    name: "Chip",
    path: "M6 4h12v2h2v2h-2v2h2v2h-2v2h2v2h-2v2H6v-2H4v-2h2v-2H4v-2h2v-2H4V8h2zm2 2v12h8V6zm2 2h4v4h-4z"
  },
  {
    name: "IoT",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  },
  {
    name: "Robot",
    path: "M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.72V7h1a7 7 0 0 1 7 7v1a2 2 0 0 1 0 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 0-4v-1a7 7 0 0 1 7-7h1V5.72c-.6-.34-1-.98-1-1.72a2 2 0 0 1 2-2M9 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
  },
];

const COLORS = [
  "rgba(255, 255, 255, 0.15)", // Light Gray
  "rgba(200, 200, 200, 0.1)", // Medium Gray
  "rgba(150, 150, 150, 0.05)", // Dark Gray
];

// Konfigurasi partikel acak
function generateParticles(count) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      icon: TECH_ICONS[i % TECH_ICONS.length],
      color: COLORS[i % COLORS.length],
      x: Math.random() * 90 + 5,        // 5-95% (menghindari tepi layar)
      y: Math.random() * 90 + 5,
      size: 16 + Math.random() * 14,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * -20,
      driftX: (Math.random() - 0.5) * 20, // Lebih kecil agar tidak keluar layar mobile
      driftY: (Math.random() - 0.5) * 15,
      rotate: Math.random() * 360,
      opacity: 0.06 + Math.random() * 0.1,
    });
  }
  return particles;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Kurangi jumlah partikel di mobile agar performa tetap baik
    const isMobile = window.innerWidth <= 768;
    setParticles(generateParticles(isMobile ? 6 : 14));
  }, []);

  if (particles.length === 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            opacity: 0,
          }}
          animate={{
            x: [`${p.x}vw`, `${p.x + p.driftX}vw`, `${p.x}vw`],
            y: [`${p.y}vh`, `${p.y + p.driftY}vh`, `${p.y}vh`],
            rotate: [p.rotate, p.rotate + 90, p.rotate],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            filter: "blur(0.5px)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill={p.color}
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={p.icon.path} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
