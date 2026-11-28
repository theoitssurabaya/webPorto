"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { Globe } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  // Helper to get true document offset ignoring sticky state
  const getElementY = (target) => {
    const isDesktop = window.innerWidth >= 768;
    const wrapper = target.closest('.stacked-section');
    
    if (isDesktop && wrapper) {
      const sections = Array.from(document.querySelectorAll('.stacked-section'));
      const index = sections.indexOf(wrapper);
      if (index !== -1) {
        return index * window.innerHeight;
      }
    }

    // Fallback for mobile or non-stacked elements
    let y = 0;
    let el = wrapper || target;
    while (el) {
      y += el.offsetTop;
      el = el.offsetParent;
    }
    return y;
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const target = document.getElementById(targetId);
    if (target) {
        const wrapper = target.closest('.stacked-section');
        const scrollTarget = wrapper || target;
        const y = getElementY(scrollTarget);
        
        if (window.lenis) {
            window.lenis.scrollTo(y);
        } else {
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    }
  };

  useEffect(() => {
    const handleScroll = () => {


      // Active section mapping
      const sections = document.querySelectorAll("section[id]");
      let current = "hero";
      sections.forEach((section) => {
        const wrapper = section.closest('.stacked-section');
        const scrollTarget = wrapper || section;
        const sectionTop = getElementY(scrollTarget);
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">THEO</div>
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {[
            { id: "hero", label: t.profile },
            { id: "skills", label: t.skills },
            { id: "education", label: t.education },
            { id: "experience", label: t.experience },
            { id: "projects", label: t.projects },
            { id: "contact", label: t.contact },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={isActive ? "active" : ""}
                style={{ position: "relative" }}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "9999px",
                      background: "rgba(255, 255, 255, 0.1)",
                      zIndex: 0,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>{item.label}</span>
              </a>
            );
          })}
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px' }}>
              <button 
                  type="button"
                  onClick={() => toggleLanguage(language === 'en' ? 'id' : 'en')}
                  aria-label="Toggle Language"
                  style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      border: '1px solid #262626',
                      borderRadius: '8px',
                      backgroundColor: '#141414',
                      color: 'var(--text-main)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono), monospace',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease, border-color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#1f1f1f';
                      e.currentTarget.style.borderColor = '#404040';
                  }}
                  onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#141414';
                      e.currentTarget.style.borderColor = '#262626';
                  }}
              >
                  <Globe size={14} style={{ opacity: 0.8 }} />
                  <span>{language.toUpperCase()}</span>
              </button>
          </div>
        </div>
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={language === 'id' ? 'Buka menu navigasi' : 'Toggle navigation menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav>
  );
}
