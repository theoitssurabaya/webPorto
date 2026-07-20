"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { certsList } from "@/data/portfolio";
export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const [activeTab, setActiveTab] = useState("technical"); // "technical" or "certifications"
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastCert = currentPage * 6;
  const indexOfFirstCert = indexOfLastCert - 6;
  const currentCerts = certsList.slice(indexOfFirstCert, indexOfLastCert);
  const totalPages = Math.ceil(certsList.length / 6);

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
                <div className="pixel-floppy" style={{ position: 'absolute', top: '-10px', right: '-30px', zIndex: 15 }}></div>
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
                    Technical Skills
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
                    onClick={() => setActiveTab('certifications')}
                >
                    Certifications
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
                )}

                {activeTab === 'certifications' && (
                    <motion.div 
                        key="certifications"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        style={{ width: "100%" }}
                    >
                        <div className="cert-grid-new">
                            {currentCerts.map((cert, index) => (
                                <div 
                                    key={index}
                                    className="cert-card-new" 
                                    onClick={() => setSelectedCert(cert.img)} 
                                    style={{ cursor: "pointer" }}
                                >
                                    <Image width={600} height={400} src={"/" + cert.img} alt="Certificate" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: cert.objPos || 'center' }} />
                                    <div className="cert-overlay-new">
                                        <span>{cert.title}</span>
                                    </div>
                                </div>
                            ))}
                            {/* Fill empty spots to keep grid height consistent */}
                            {Array.from({ length: Math.max(0, 6 - currentCerts.length) }).map((_, idx) => (
                                <div key={`empty-${idx}`} style={{ visibility: 'hidden', aspectRatio: '4/3' }}></div>
                            ))}
                        </div>
                        
                        {totalPages > 1 && (
                            <div className="pagination" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button 
                                        key={i} 
                                        onClick={() => setCurrentPage(i + 1)}
                                        style={{
                                            width: '40px', 
                                            height: '40px', 
                                            borderRadius: '50%', 
                                            border: 'none', 
                                            background: currentPage === i + 1 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255,255,255,0.1)',
                                            color: currentPage === i + 1 ? '#000' : 'white',
                                            fontWeight: 'bold',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div 
                        className="cert-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}
                    >
                        <motion.img 
                            src={"/" + selectedCert} 
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '10px' }}
                            onClick={(e) => e.stopPropagation()}
                        />

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </section>
  );
}
