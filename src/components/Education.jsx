"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function Education() {
    const { language } = useLanguage();
    const t = translations[language].education;

    return (
        <section id="education" className="section education-section relative">
            <div className="hero-bg-shapes">
                <div className="shape shape-5"></div>
            </div>
            <div className="container relative" style={{ zIndex: 1 }}>
                <div className="text-center mb-5" style={{ position: "relative" }}>
                    <div className="pixel-book" style={{ position: 'absolute', top: '-10px', left: '5%', zIndex: 15 }}></div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {t.title}
                    </motion.h2>
                </div>

                <div className="timeline horizontal-timeline">
                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <div className="timeline-date">{language === 'id' ? "Jul 2020 – Mei 2023" : "Jul 2020 – May 2023"}</div>
                            <h3>{language === 'id' ? "Ijazah SMA (Ilmu Alam)" : "High School Diploma (Science)"}</h3>
                            <h4 className="org-name">SMAN 2 Kota Tangerang Selatan</h4>
                            <div className="edu-details" style={{ textAlign: "center", flexGrow: 1, marginTop: "15px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                                <span className="edu-pill"><strong>{language === 'id' ? "Nilai:" : "Grade:"}</strong> 88</span>
                                <span className="edu-pill"><strong>{language === 'id' ? "Aktivitas:" : "Activities:"}</strong> {language === 'id' ? "Klub Bulu Tangkis." : "Attended Badminton Club."}</span>
                                <span className="edu-pill">{language === 'id' ? "Peringkat 66 dari 141 siswa jurusan IPA" : "Ranked 66 eligible students of Natural Sciences out of 141"}</span>
                            </div>
                            <div className="timeline-img-wrapper mt-auto">
                                <Image width={800} height={500} src="/assets/education/sma.jpeg" alt="SMAN 2 Tangerang Selatan" className="timeline-img" style={{ objectPosition: "center 25%" }} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <div className="timeline-date">{language === 'id' ? "Agu 2023 – Agu 2027 (Perkiraan)" : "Aug 2023 – Aug 2027 (Expected)"}</div>
                            <h3>{language === 'id' ? "Sarjana Teknik Komputer" : "Bachelor of Computer Engineering"}</h3>
                            <h4 className="org-name">Institut Teknologi Sepuluh Nopember</h4>
                            <div className="edu-details" style={{ textAlign: "center", flexGrow: 1, marginTop: "15px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                                <span className="edu-pill"><strong>{language === 'id' ? "IPK:" : "Grade:"}</strong> 3.51/4.00</span>
                                <span className="edu-pill"><strong>TEFL:</strong> 537</span>
                                <span className="edu-pill"><strong>{language === 'id' ? "Keahlian:" : "Skills:"}</strong> {language === 'id' ? "Bahasa Inggris sebagai Bahasa Kedua (ESL)" : "English as a Second Language (ESL)"}</span>
                            </div>
                            <div className="timeline-img-wrapper mt-auto">
                                <Image width={800} height={500} src="/assets/education/kuliah.jpeg" alt="ITS Campus" className="timeline-img" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
