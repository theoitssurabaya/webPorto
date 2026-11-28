"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BookOpen, BrainCircuit, ChevronLeft, ChevronRight, Code2, Cpu, Maximize2, Network, X } from "lucide-react";
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
                    className={`tab-btn tab-btn--motion ${activeTab === 'technical' ? 'active' : ''}`}
                    onClick={() => setActiveTab('technical')}
                >
                    {activeTab === 'technical' && (
                        <motion.span
                            layoutId="skills-tab-pill"
                            className="tab-pill-bg"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                    )}
                    <span className="tab-pill-label">
                        {language === 'id' ? 'Keahlian Teknis' : 'Technical Skills'}
                    </span>
                </button>
                <button 
                    className={`tab-btn tab-btn--motion ${activeTab === 'certifications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('certifications')}
                >
                    {activeTab === 'certifications' && (
                        <motion.span
                            layoutId="skills-tab-pill"
                            className="tab-pill-bg"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                    )}
                    <span className="tab-pill-label">
                        {language === 'id' ? 'Sertifikasi' : 'Certifications'}
                    </span>
                </button>
            </motion.div>

            <AnimatePresence mode="wait">
                {activeTab === 'technical' && (
                    <motion.div 
                        key="technical"
                        className="skills-matrix"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35 }}
                    >
                        {[
                            {
                                num: "01",
                                Icon: Network,
                                title: language === "id" ? "Industrial OT & SCADA" : "Industrial OT & SCADA",
                                desc: language === "id"
                                    ? "Sistem kontrol industri, simulasi PLC, telemetri real-time, dan containerization."
                                    : "Industrial control systems, PLC sandboxes, real-time telemetry, and containerization.",
                                items: ["Omron PLC", "OpenPLC", "Modbus TCP", "Node-RED", "Apache IoTDB", "Docker"],
                            },
                            {
                                num: "02",
                                Icon: Cpu,
                                title: language === "id" ? "Embedded & Edge IoT" : "Embedded & Edge IoT",
                                desc: language === "id"
                                    ? "Pemrograman mikrokontroler, integrasi sensor/aktuator, dan desain rangkaian."
                                    : "Microcontroller firmware, sensor/actuator interfacing, and hardware circuit design.",
                                items: ["ESP32", "ESP-IDF", "Raspberry Pi", "RTOS", "MQTT", "C / C++", "PCB & Wiring"],
                            },
                            {
                                num: "03",
                                Icon: Code2,
                                title: language === "id" ? "Full-Stack & Cloud" : "Full-Stack & Cloud",
                                desc: language === "id"
                                    ? "Pengembangan portal web, REST API, aplikasi mobile, dan basis data terpusat."
                                    : "Web portal engineering, REST APIs, cross-platform mobile apps, and cloud databases.",
                                items: ["React / Next.js", "Node.js", "FastAPI", "Flutter", "PostgreSQL", "Firebase", "Git & GitHub"],
                            },
                            {
                                num: "04",
                                Icon: BrainCircuit,
                                title: language === "id" ? "AI & Machine Learning" : "AI & Machine Learning",
                                desc: language === "id"
                                    ? "Pemodelan prediktif, visi komputer, deep learning, dan integrasi LLM."
                                    : "Predictive modeling, computer vision, deep learning pipelines, and LLM integration.",
                                items: ["Deep Learning", "Computer Vision", "TensorFlow", "PyTorch", "Scikit-Learn", "LLM / Gemini API"],
                            },
                        ].map(({ num, Icon, title, desc, items }, idx) => (
                            <motion.div
                                key={num}
                                className="skill-card-pro spotlight-card"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35, delay: idx * 0.06, ease: "easeOut" }}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
                                    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
                                }}
                            >
                                <div className="skill-card-top">
                                    <div className="skill-card-title-group">
                                        <div className="skill-card-icon-box">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h3>{title}</h3>
                                            <p className="skill-card-desc">{desc}</p>
                                        </div>
                                    </div>
                                    <span className="skill-card-count">
                                        {String(items.length).padStart(2, "0")} TOOLS
                                    </span>
                                </div>
                                <div className="skill-pills-pro">
                                    {items.map((item) => (
                                        <span key={item} className="skill-pill-pro">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
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
