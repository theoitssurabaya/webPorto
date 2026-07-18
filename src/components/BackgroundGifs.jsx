"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GIFS = [
  {
    id: "invader",
    frames: [
      "M2 0h1v1h-1z M8 0h1v1h-1z M3 1h1v1h-1z M7 1h1v1h-1z M2 2h7v1h-7z M1 3h2v1h-2z M4 3h3v1h-3z M8 3h2v1h-2z M1 4h9v1h-9z M1 5h1v1h-1z M3 5h1v1h-1z M5 5h1v1h-1z M7 5h1v1h-1z M9 5h1v1h-1z M1 6h9v1h-9z M2 7h1v1h-1z M8 7h1v1h-1z",
      "M2 0h1v1h-1z M8 0h1v1h-1z M1 1h1v1h-1z M3 1h1v1h-1z M7 1h1v1h-1z M9 1h1v1h-1z M1 2h9v1h-9z M1 3h2v1h-2z M4 3h3v1h-3z M8 3h2v1h-2z M1 4h9v1h-9z M2 5h1v1h-1z M8 5h1v1h-1z M1 6h1v1h-1z M9 6h1v1h-1z"
    ],
    width: 11, height: 8,
    x: 15, y: 20, size: 280, duration: 25, driftX: 40, driftY: 20, delay: 0
  },
  {
    id: "ghost",
    frames: [
      "M4 0h6v1h-6z M2 1h10v1h-10z M1 2h12v1h-12z M1 3h12v1h-12z M1 4h2v1h-2z M5 4h4v1h-4z M11 4h2v1h-2z M1 5h2v1h-2z M5 5h4v1h-4z M11 5h2v1h-2z M1 6h12v1h-12z M1 7h12v1h-12z M1 8h12v1h-12z M1 9h12v1h-12z M1 10h12v1h-12z M1 11h2v1h-2z M5 11h4v1h-4z M11 11h2v1h-2z M1 12h2v1h-2z M5 12h4v1h-4z M11 12h2v1h-2z",
      "M4 0h6v1h-6z M2 1h10v1h-10z M1 2h12v1h-12z M1 3h12v1h-12z M1 4h2v1h-2z M5 4h4v1h-4z M11 4h2v1h-2z M1 5h2v1h-2z M5 5h4v1h-4z M11 5h2v1h-2z M1 6h12v1h-12z M1 7h12v1h-12z M1 8h12v1h-12z M1 9h12v1h-12z M1 10h12v1h-12z M3 11h2v1h-2z M9 11h2v1h-2z M3 12h2v1h-2z M9 12h2v1h-2z"
    ],
    width: 14, height: 13,
    x: 65, y: 55, size: 320, duration: 30, driftX: -25, driftY: -15, delay: 5
  },
  {
    id: "heart",
    frames: [
      "M2 0h3v1h-3z M8 0h3v1h-3z M1 1h5v1h-5z M7 1h5v1h-5z M0 2h13v1h-13z M0 3h13v1h-13z M0 4h13v1h-13z M1 5h11v1h-11z M2 6h9v1h-9z M3 7h7v1h-7z M4 8h5v1h-5z M5 9h3v1h-3z M6 10h1v1h-1z",
      "M3 1h2v1h-2z M8 1h2v1h-2z M2 2h4v1h-4z M7 2h4v1h-4z M1 3h11v1h-11z M1 4h11v1h-11z M2 5h9v1h-9z M3 6h7v1h-7z M4 7h5v1h-5z M5 8h3v1h-3z M6 9h1v1h-1z"
    ],
    width: 13, height: 11,
    x: 35, y: 80, size: 200, duration: 20, driftX: 10, driftY: -30, delay: 10
  }
];

export default function BackgroundGifs() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f === 0 ? 1 : 0));
    }, 600); // GIF animation speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none", zIndex: -1 }}>
      {GIFS.map((gif) => (
        <motion.div
          key={gif.id}
          initial={{ opacity: 0 }}
          animate={{
            x: [`${gif.x}vw`, `${gif.x + gif.driftX}vw`, `${gif.x}vw`],
            y: [`${gif.y}vh`, `${gif.y + gif.driftY}vh`, `${gif.y}vh`],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: gif.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: gif.delay,
          }}
          style={{
            position: "absolute",
            width: gif.size,
            height: gif.size * (gif.height / gif.width),
            filter: "blur(0px)",
          }}
        >
          <svg viewBox={`0 0 ${gif.width} ${gif.height}`} fill="white" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
            <path d={gif.frames[frame % gif.frames.length]} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
