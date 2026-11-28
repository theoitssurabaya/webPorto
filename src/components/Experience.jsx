"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

    const currentExp = filteredExp.find((e) => e.id === currentActiveId) || filteredExp[0];

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
                            className={`tab-btn tab-btn--motion ${activeCategory === cat.id ? "active" : ""}`}
                            onClick={() => handleCategoryChange(cat.id)}
                        >
                            {activeCategory === cat.id && (
                                <motion.span
                                    layoutId="exp-filter-pill"
                                    className="tab-pill-bg"
                                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                />
                            )}
                            <span className="tab-pill-label">{cat.label}</span>
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
                        <AnimatePresence mode="wait">
                            {currentExp && (
                                <motion.div
                                    key={currentExp.id}
                                    className="selector-content active"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                >
                                    <div className="content-header">
                                        <h3>{currentExp.tabTitle}</h3>
                                        <span className="timeline-date">{currentExp.date}</span>
                                    </div>
                                    <h4 className="org-name">{currentExp.orgName}</h4>
                                    <ul>
                                        {currentExp.points.map((pt, i) => <li key={i}>{pt}</li>)}
                                    </ul>
                                    {currentExp.image && (
                                        <div className="timeline-img-wrapper mt-4">
                                            <Image width={800} height={500} src={currentExp.image} alt={currentExp.orgName} className="timeline-img" style={currentExp.imgStyle} />
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
