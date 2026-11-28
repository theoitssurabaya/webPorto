"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BookOpen, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { certsList } from "@/data/portfolio";

function parseCertMeta(rawTitle) {
  const match = rawTitle.match(/^(.*)\(([^)]+)\)\s*$/);
  if (match) {
    return { name: match[1].trim(), issuer: match[2].trim() };
  }
  return { name: rawTitle, issuer: "Certification" };
}

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const [activeTab, setActiveTab] = useState("technical");
  const [certIndex, setCertIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const totalCerts = certsList.length;
  const currentCert = certsList[certIndex] || certsList[0];
  const { name: certName, issuer: certIssuer } = parseCertMeta(currentCert.title);

  const handlePrevCert = useCallback(() => {
    setCertIndex((prev) => (prev - 1 + totalCerts) % totalCerts);
  }, [totalCerts]);

  const handleNextCert = useCallback(() => {
    setCertIndex((prev) => (prev + 1) % totalCerts);
  }, [totalCerts]);

  useEffect(() => {
    if (activeTab !== "certifications" || isPaused || selectedCert || totalCerts <= 1) {
      return;
    }
    const timer = setInterval(() => {
      setCertIndex((prev) => (prev + 1) % totalCerts);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeTab, isPaused, selectedCert, totalCerts]);

  useEffect(() => {
    if (!selectedCert) return;
    window.lenis?.stop();
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.lenis?.start();
    };
  }, [selectedCert]);

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
                style={{ position: 'relative', display: 'inline-block' }}
            >
                <h2>
                    {t.title}
                </h2>
            </motion.div>

            {/* Tab Selector */}
            <motion.div 
                className="skills-tabs mt-4 mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <button 
                    className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
                    onClick={() => setActiveTab('technical')}
                >
                    {language === 'id' ? 'Keahlian Teknis' : 'Technical Skills'}
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('certifications')}
                >
                    {language === 'id' ? 'Sertifikasi' : 'Certifications'}
                </button>
            </motion.div>

            <AnimatePresence mode="wait">
                {activeTab === 'technical' && (
                    <motion.div 
                        key="technical"
                        className="skills-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="skill-category glass-card">
                            <div className="skill-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            </div>
                            <h3>{t.categories.ai}</h3>
                            <div className="skill-pills-container">
                                <span className="skill-pill-sm">Deep Learning</span>
                                <span className="skill-pill-sm">Computer Vision</span>
                                <span className="skill-pill-sm">TensorFlow</span>
                                <span className="skill-pill-sm">Scikit-Learn</span>
                                <span className="skill-pill-sm">PyTorch</span>
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
                                <span className="skill-pill-sm">PLC & SCADA</span>
                                <span className="skill-pill-sm">Sensors & Actuators</span>
                                <span className="skill-pill-sm">Modbus / MQTT</span>
                                <span className="skill-pill-sm">C / C++</span>
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
                                <span className="skill-pill-sm">JavaScript / TypeScript</span>
                                <span className="skill-pill-sm">React / Next.js</span>
                                <span className="skill-pill-sm">Node.js / FastAPI</span>
                                <span className="skill-pill-sm">Dart (Flutter)</span>
                                <span className="skill-pill-sm">Firebase</span>
                                <span className="skill-pill-sm">RESTful APIs</span>
                                <span className="skill-pill-sm">Git & GitHub</span>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'certifications' && (
                    <motion.div 
                        key="certifications"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                        className="cert-album-wrapper"
                    >
                        <div
                            className="cert-album"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onClick={handleNextCert}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleNextCert();
                                } else if (e.key === "ArrowLeft") {
                                    e.preventDefault();
                                    handlePrevCert();
                                }
                            }}
                            aria-label={language === "id" ? "Balik halaman sertifikat" : "Turn certificate page"}
                        >
                            {/* Book Spine */}
                            <div className="cert-album-spine" aria-hidden="true">
                                <span className="cert-spine-dot"></span>
                                <span className="cert-spine-dot"></span>
                                <span className="cert-spine-dot"></span>
                            </div>

                            <div className="cert-album-content">
                                <div className="cert-album-topbar">
                                    <span className="cert-album-issuer">
                                        <BookOpen size={15} />
                                        <span>{certIssuer}</span>
                                    </span>
                                    <span className="cert-album-page">
                                        {language === "id"
                                            ? `HALAMAN ${certIndex + 1} DARI ${totalCerts}`
                                            : `PAGE ${certIndex + 1} OF ${totalCerts}`}
                                    </span>
                                </div>

                                <div className="cert-album-stage">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={certIndex}
                                            className="cert-album-frame"
                                            initial={{ opacity: 0, rotateY: -12, scale: 0.98 }}
                                            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                                            exit={{ opacity: 0, rotateY: 12, scale: 0.98 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            <Image
                                                src={"/" + currentCert.img}
                                                alt={currentCert.title}
                                                fill
                                                sizes="(max-width: 768px) 92vw, 720px"
                                                style={{ objectFit: "contain" }}
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                <div className="cert-album-bottombar">
                                    <span className="cert-album-title">{certName}</span>
                                    <div className="cert-album-hint-group">
                                        <span className="cert-album-hint">
                                            {language === "id" ? "Klik halaman untuk balik →" : "Click page to flip →"}
                                        </span>
                                        <button
                                            type="button"
                                            className="cert-zoom-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedCert(currentCert);
                                            }}
                                            aria-label={language === "id" ? "Perbesar sertifikat" : "Zoom certificate"}
                                            title={language === "id" ? "Perbesar sertifikat" : "Zoom certificate"}
                                        >
                                            <Maximize2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cert-album-controls">
                            <button
                                type="button"
                                className="cert-control-btn"
                                onClick={handlePrevCert}
                            >
                                <ChevronLeft size={15} />
                                <span>{language === "id" ? "Sebelumnya" : "Previous"}</span>
                            </button>

                            <div className="deck-dots">
                                {certsList.map((cert, idx) => (
                                    <button
                                        key={cert.img}
                                        type="button"
                                        className={`deck-dot ${idx === certIndex ? "active" : ""}`}
                                        onClick={() => setCertIndex(idx)}
                                        aria-label={`Page ${idx + 1}: ${cert.title}`}
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                className="cert-control-btn"
                                onClick={handleNextCert}
                            >
                                <span>{language === "id" ? "Berikutnya" : "Next"}</span>
                                <ChevronRight size={15} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div 
                        className="cert-modal-backdrop"
                        data-lenis-prevent="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px' }}
                    >
                        <div style={{ position: 'relative', width: '100%', maxWidth: '900px', height: '80vh' }} onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={"/" + selectedCert.img}
                                alt={selectedCert.title}
                                fill
                                sizes="900px"
                                style={{ objectFit: 'contain' }}
                            />
                            <button
                                type="button"
                                className="case-study-close"
                                onClick={() => setSelectedCert(null)}
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </section>
  );
}
