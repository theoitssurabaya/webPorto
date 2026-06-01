"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress
      const scrollProgress = document.querySelector(".scroll-progress-bar");
      if (scrollProgress) {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = `${scrolled}%`;
      }

      // Active section mapping
      const sections = document.querySelectorAll("section");
      let current = "hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
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
        <div className="logo">THEO<span>.</span></div>
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#hero" className={activeSection === "hero" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Profile</a>
          <a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
          <a href="#education" className={activeSection === "education" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Education</a>
          <a href="#experience" className={activeSection === "experience" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
      </div>
    </nav>
  );
}
