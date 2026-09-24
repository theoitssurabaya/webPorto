"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button");
        
      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isMobile) {
      return null;
  }

  return (
    <>
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          position: "fixed",
          left: 0,
          top: 0,
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: isPointer ? "0 0 20px rgba(255, 255, 255, 0.5)" : "0 0 10px rgba(255, 255, 255, 0.2)",
          backdropFilter: "invert(10%) blur(2px)",
        }}
        animate={{
          scale: isPointer ? 1.8 : 1,
          backgroundColor: isPointer ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.2)"
        }}
        transition={{ duration: 0.15 }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"], input, select, textarea {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
