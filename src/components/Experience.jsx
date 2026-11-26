"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { getExperienceData } from "@/data/portfolio";

export default function Experience() {
    const { language } = useLanguage();
    const t = translations[language].experience;

    const expData = getExperienceData(language);
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = [
        { id: "all", label: language === "id" ? "Semua" : "All" },
        { id: "work", label: language === "id" ? "Pengalaman Kerja" : "Work Experience" },
        { id: "leadership", label: language === "id" ? "Kepemimpinan & Organisasi" : "Leadership & Organizational" },
    ];

    const filteredExp = useMemo(() => {
        if (activeCategory === "all") return expData;
        return expData.filter((item) => item.category === activeCategory);
    }, [activeCategory, expData]);

    const [activeTab, setActiveTab] = useState(expData[0].id);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const currentActiveId = filteredExp.some((e) => e.id === activeTab)
        ? activeTab
        : filteredExp[0]?.id;

    const tabs = filteredExp.map((e) => ({ id: e.id, title: e.tabTitle, subtitle: e.tabSubtitle }));

    const handleCategoryChange = (catId) => {
        setActiveCategory(catId);
        setIsDropdownOpen(false);
        const nextList = catId === "all" ? expData : expData.filter((item) => item.category === catId);
        if (nextList[0]) {
            setActiveTab(nextList[0].id);
        }
    };

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
                <div className="text-center mb-4" style={{ position: "relative" }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {t.title}
                    </motion.h2>
                </div>

                <div className="skills-tabs" style={{ marginBottom: "32px" }}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            type="button"
                            className={`tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                            onClick={() => handleCategoryChange(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
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
                            <span>{tabs.find((tab) => tab.id === currentActiveId)?.title}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                        <div className="selector-tab-indicator"></div>
                        <div className={`selector-tabs ${isDropdownOpen ? "open" : ""}`} data-lenis-prevent="true">
                            {tabs.map((tab) => (
                                <button key={tab.id} className={`selector-tab ${currentActiveId === tab.id ? "active" : ""}`} onClick={() => handleTabClick(tab.id)}>
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
                        {filteredExp.map((exp) => (
                            <div key={exp.id} className={`selector-content ${currentActiveId === exp.id ? "active" : ""}`}>
                                <div className="content-header">
                                    <h3>{exp.tabTitle}</h3>
                                    <span className="timeline-date">{exp.date}</span>
                                </div>
                                <h4 className="org-name">{exp.orgName}</h4>
                                <ul>
                                    {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
                                </ul>
                                {exp.image && (
                                    <div className="timeline-img-wrapper mt-4">
                                        <Image width={800} height={500} src={exp.image} alt={exp.orgName} className="timeline-img" style={exp.imgStyle} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
