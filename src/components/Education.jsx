"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { getEducationData } from "@/data/portfolio";
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
                    {getEducationData(language).map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <div className="timeline-date">{edu.date}</div>
                                <h3>{edu.title}</h3>
                                <h4 className="org-name">{edu.orgName}</h4>
                                <div className="edu-details" style={{ textAlign: "center", flexGrow: 1, marginTop: "15px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                                    {edu.pills.map((pill, i) => (
                                        <span key={i} className="edu-pill">
                                            {pill.label && <strong>{pill.label} </strong>}
                                            {pill.value}
                                        </span>
                                    ))}
                                </div>
                                <div className="timeline-img-wrapper mt-auto">
                                    <Image width={800} height={500} src={edu.image} alt={edu.orgName} className="timeline-img" style={edu.imgStyle} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
