"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const [typewriterText, setTypewriterText] = useState("");
  
  useEffect(() => {
    let index = 0;
    setTypewriterText("");
    const interval = setInterval(() => {
      setTypewriterText(t.subtitle.substring(0, index + 1));
      index++;
      if (index >= t.subtitle.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [t.subtitle]);

  return (
    <section id="hero" className="section hero-section centered-hero">
        <div className="hero-bg-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
        </div>
        
        <div className="hero-center-img-wrapper">
            <motion.img 
                src="assets/foto-diri-nobg.png" 
                alt="Theo Pinem" 
                className="hero-center-img" 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
        </div>

        <div className="container">
            <motion.div 
                className="hero-content-overlay" 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <h1 className="hero-title" style={{ color: 'var(--text-main)' }}>
                    {t.title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span style={{ color: 'var(--c-blue)' }}>{t.title.split(' ').slice(-1)}</span>.
                </h1>
                <p className="subtitle hero-subtitle" style={{ minHeight: "60px" }}>
                    <span>{typewriterText}</span><span className="typewriter-cursor">|</span>
                </p>
                <div className="btn-group justify-center">
                    <a href="#projects" className="btn-primary">{t.btnExplore}</a>
                    <a href="CV_Theo Kawalisa Pinem.pdf" download className="btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        {t.btnCV}
                    </a>
                </div>
                <div className="social-links justify-center mt-4">
                    <a href="https://github.com/theoitssurabaya" target="_blank" className="social-icon glass-icon" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/theopinem/" target="_blank" className="social-icon glass-icon" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="mailto:theopinem05@gmail.com" className="social-icon glass-icon email-link" aria-label="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                    <a href="https://www.instagram.com/pinemtheo/" target="_blank" className="social-icon glass-icon" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
