"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import { Home, Code, GraduationCap, Briefcase, FolderGit2, Mail } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: FolderGit2, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
];

function DockItem({ item, mouseX, isMobile }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Di mobile, ukuran tetap (tidak ada efek magnify)
  const widthSync = useTransform(distance, [-150, 0, 150], isMobile ? [40, 40, 40] : [45, 80, 45]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const ItemWrapper = isMobile ? "div" : Magnetic;

  return (
    <ItemWrapper>
      <motion.a
        href={`#${item.id}`}
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
            width: isMobile ? 40 : width, 
            height: isMobile ? 40 : width,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            backgroundColor: 'rgba(17,24,39,0.8)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: isHovered ? '#60a5fa' : '#9ca3af',
            backdropFilter: 'blur(24px)',
            position: 'relative',
            margin: isMobile ? '0 2px' : '0 4px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            overflow: 'visible',
            textDecoration: 'none',
            transition: 'color 0.2s'
        }}
      >
        <item.icon size={isMobile ? 16 : 22} />
        {/* Tooltip - hanya tampil di desktop */}
        {!isMobile && (
          <span style={{
              position: 'absolute',
              top: '-48px',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.2s',
              backgroundColor: 'rgba(0,0,0,0.8)',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 500,
              color: '#fff',
              border: '1px solid #1f2937',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            {item.label}
          </span>
        )}
      </motion.a>
    </ItemWrapper>
  );
}

export default function Dock() {
  const mouseX = useMotionValue(99999);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      style={{
          position: 'fixed',
          bottom: isMobile ? '12px' : '24px',
          left: '50%',
          zIndex: 100
      }}
    >
      <div 
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(99999)}
        style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: isMobile ? '2px' : '4px',
            padding: isMobile ? '6px' : '8px',
            backgroundColor: 'rgba(17,24,39,0.4)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '36px'
        }}
      >
        {NAV_ITEMS.map((item) => (
          <DockItem key={item.id} item={item} mouseX={mouseX} isMobile={isMobile} />
        ))}
      </div>
    </motion.div>
  );
}
