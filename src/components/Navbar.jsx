"use client";
import { useEffect, useState } from "react";
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
          <a href="#hero" className={activeSection === "hero" ? "active" : ""} onClick={(e) => handleNavClick(e, "hero")}>{t.profile}</a>
          <a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={(e) => handleNavClick(e, "skills")}>{t.skills}</a>
          <a href="#education" className={activeSection === "education" ? "active" : ""} onClick={(e) => handleNavClick(e, "education")}>{t.education}</a>
          <a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={(e) => handleNavClick(e, "experience")}>{t.experience}</a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={(e) => handleNavClick(e, "projects")}>{t.projects}</a>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={(e) => handleNavClick(e, "contact")}>{t.contact}</a>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: '10px' }}>
              <button 
                  onClick={() => toggleLanguage(language === 'en' ? 'id' : 'en')}
                  style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      color: 'var(--text-main)',
                      fontSize: '12px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'}
              >
                  <Globe size={14} style={{ opacity: 0.8 }} />
                  <span>{language.toUpperCase()}</span>
              </button>
          </div>
        </div>
        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
      </div>
    </nav>
  );
}
