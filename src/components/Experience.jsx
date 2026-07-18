"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { getExperienceData } from "@/data/portfolio";
export default function Experience() {
    const { language } = useLanguage();
    const t = translations[language].experience;

    const [activeTab, setActiveTab] = useState("exp-0");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const expData = getExperienceData(language);
    const tabs = expData.map(e => ({ id: e.id, title: e.tabTitle, subtitle: e.tabSubtitle }));

    const handleTabClick = (id) => {
        setActiveTab(id);
        setIsDropdownOpen(false);
    };

    return (
        <section id="experience" className="section experience-section relative">
            <div className="hero-bg-shapes">
                <div className="shape shape-6"></div>
                <div className="shape shape-7"></div>
            </div>
            <div className="container relative" style={{ zIndex: 1 }}>
                <div className="text-center mb-5" style={{ position: 'relative' }}>
                    <div className="pixel-coin" style={{ position: 'absolute', top: '-10px', right: '5%', zIndex: 15 }}></div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {t.title}
                    </motion.h2>
                </div>

                <div className="interactive-selector">
                    <motion.div
                        className="selector-tabs-container"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mobile-dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <span>{tabs.find(t => t.id === activeTab)?.title}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                        <div className="selector-tab-indicator"></div>
                        <div className={`selector-tabs ${isDropdownOpen ? 'open' : ''}`} data-lenis-prevent="true">
                            {tabs.map(tab => (
                                <button key={tab.id} className={`selector-tab ${activeTab === tab.id ? 'active' : ''}`} onClick={() => handleTabClick(tab.id)}>
                                    <span className="tab-title">{tab.title}</span>
                                    <span className="tab-subtitle">{tab.subtitle}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="selector-content-area glass-card"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        {expData.map(exp => (
                            <div key={exp.id} className={`selector-content ${activeTab === exp.id ? 'active' : ''}`}>
                                <div className="content-header">
                                    <h3>{exp.tabTitle}</h3>
                                    <span className="timeline-date">{exp.date}</span>
                                </div>
                                <h4 className="org-name">{exp.orgName}</h4>
                                <ul>
                                    {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
                                </ul>
                                <div className="timeline-img-wrapper mt-4">
                                    <Image width={800} height={500} src={exp.image} alt={exp.orgName} className="timeline-img" />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
