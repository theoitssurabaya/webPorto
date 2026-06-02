"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section id="skills" className="section skills-section relative">
        <div className="hero-bg-shapes">
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
        </div>
        <div className="container text-center relative" style={{ zIndex: 1 }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <h2>
                    {t.title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span style={{ color: 'var(--c-pink)' }}>{t.title.split(' ').slice(-1)}</span>.
                </h2>
            </motion.div>
            <motion.div 
                className="skills-grid"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
                <div className="skill-category glass-card">
                    <div className="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <h3>{t.categories.ai}</h3>
                    <div className="skill-pills-container">
                        <span className="skill-pill-sm">Deep Learning</span>
                        <span className="skill-pill-sm">Neural Networks</span>
                        <span className="skill-pill-sm">Computer Vision</span>
                        <span className="skill-pill-sm">TensorFlow</span>
                        <span className="skill-pill-sm">Scikit-Learn</span>
                    </div>
                </div>
                <div className="skill-category glass-card">
                    <div className="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                    </div>
                    <h3>{t.categories.hardware}</h3>
                    <div className="skill-pills-container">
                        <span className="skill-pill-sm">ESP32</span>
                        <span className="skill-pill-sm">ESP-IDF</span>
                        <span className="skill-pill-sm">Raspberry Pi</span>
                        <span className="skill-pill-sm">Sensor Integration</span>
                        <span className="skill-pill-sm">Smart Systems</span>
                        <span className="skill-pill-sm">C++</span>
                        <span className="skill-pill-sm">MicroPython</span>
                        <span className="skill-pill-sm">Electrical Wiring</span>
                    </div>
                </div>
                <div className="skill-category glass-card">
                    <div className="skill-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>
                    <h3>{t.categories.programming}</h3>
                    <div className="skill-pills-container">
                        <span className="skill-pill-sm">Python</span>
                        <span className="skill-pill-sm">JavaScript</span>
                        <span className="skill-pill-sm">Dart (Flutter)</span>
                        <span className="skill-pill-sm">System Architecture</span>
                        <span className="skill-pill-sm">Pygame</span>
                        <span className="skill-pill-sm">RESTful APIs</span>
                    </div>
                </div>
            </motion.div>
            
            <motion.div 
                className="tech-stack-ticker"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <div className="ticker-track">
                    <div className="ticker-group">
                        <span className="tech-pill">C++</span><span className="tech-pill">Python</span><span className="tech-pill">JavaScript</span><span className="tech-pill">Dart</span><span className="tech-pill">TensorFlow</span><span className="tech-pill">Pygame</span><span className="tech-pill">Flutter</span><span className="tech-pill">ESP-IDF</span><span className="tech-pill">Arduino</span>
                        <span className="tech-pill">C++</span><span className="tech-pill">Python</span><span className="tech-pill">JavaScript</span><span className="tech-pill">Dart</span><span className="tech-pill">TensorFlow</span><span className="tech-pill">Pygame</span><span className="tech-pill">Flutter</span><span className="tech-pill">ESP-IDF</span><span className="tech-pill">Arduino</span>
                        <span className="tech-pill">C++</span><span className="tech-pill">Python</span><span className="tech-pill">JavaScript</span><span className="tech-pill">Dart</span><span className="tech-pill">TensorFlow</span><span className="tech-pill">Pygame</span><span className="tech-pill">Flutter</span><span className="tech-pill">ESP-IDF</span><span className="tech-pill">Arduino</span>
                    </div>
                    <div className="ticker-group" aria-hidden="true">
                        <span className="tech-pill">C++</span><span className="tech-pill">Python</span><span className="tech-pill">JavaScript</span><span className="tech-pill">Dart</span><span className="tech-pill">TensorFlow</span><span className="tech-pill">Pygame</span><span className="tech-pill">Flutter</span><span className="tech-pill">ESP-IDF</span><span className="tech-pill">Arduino</span>
                        <span className="tech-pill">C++</span><span className="tech-pill">Python</span><span className="tech-pill">JavaScript</span><span className="tech-pill">Dart</span><span className="tech-pill">TensorFlow</span><span className="tech-pill">Pygame</span><span className="tech-pill">Flutter</span><span className="tech-pill">ESP-IDF</span><span className="tech-pill">Arduino</span>
                        <span className="tech-pill">C++</span><span className="tech-pill">Python</span><span className="tech-pill">JavaScript</span><span className="tech-pill">Dart</span><span className="tech-pill">TensorFlow</span><span className="tech-pill">Pygame</span><span className="tech-pill">Flutter</span><span className="tech-pill">ESP-IDF</span><span className="tech-pill">Arduino</span>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
}
