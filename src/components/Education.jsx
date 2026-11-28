"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { getEducationData } from "@/data/portfolio";

export default function Education() {
    const { language } = useLanguage();
    const t = translations[language].education;

    const stages = useMemo(() => {
        const raw = getEducationData(language);
        // Latest / Higher Education first (01), Secondary Education second (02)
        return [...raw].reverse().map((edu) => ({
            ...edu,
            stageLabel:
                edu.id === "edu-2"
                    ? language === "id"
                        ? "PENDIDIKAN TINGGI"
                        : "HIGHER EDUCATION"
                    : language === "id"
                        ? "PENDIDIKAN MENENGAH"
                        : "SECONDARY EDUCATION",
        }));
    }, [language]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const total = stages.length;
    const current = stages[activeIndex] || stages[0];

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % total);
    }, [total]);

    useEffect(() => {
        if (isPaused || total <= 1) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % total);
        }, 6000);
        return () => clearInterval(timer);
    }, [isPaused, total]);

    return (
        <section id="education" className="section education-section relative">
            <div className="hero-bg-shapes">
                <div className="shape shape-5"></div>
            </div>
            <div className="container relative" style={{ zIndex: 1 }}>
                <div className="text-center mb-5" style={{ position: "relative" }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {t.title}
                    </motion.h2>
                </div>

                <div
                    className="edu-pathway"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Horizontal Stepper Track */}
                    <div className="edu-stepper">
                        <div className="edu-stepper-line" aria-hidden="true"></div>
                        {stages.map((stage, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <button
                                    key={stage.id}
                                    type="button"
                                    className={`edu-step ${isActive ? "active" : ""}`}
                                    onClick={() => setActiveIndex(idx)}
                                >
                                    <span className="edu-step-node">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                    <span className="edu-step-label">{stage.stageLabel}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Controls Row */}
                    <div className="edu-controls-row">
                        <div className="edu-controls-meta">
                            <span className="deck-counter">
                                {language === "id"
                                    ? `TAHAP ${activeIndex + 1} DARI ${total}`
                                    : `STAGE ${activeIndex + 1} OF ${total}`}
                            </span>
                        </div>
                        <div className="edu-controls-arrows">
                            <button
                                type="button"
                                className="deck-nav-btn"
                                onClick={handlePrev}
                                aria-label={language === "id" ? "Tahap sebelumnya" : "Previous stage"}
                            >
                                <ChevronLeft size={17} />
                            </button>
                            <button
                                type="button"
                                className="deck-nav-btn"
                                onClick={handleNext}
                                aria-label={language === "id" ? "Tahap berikutnya" : "Next stage"}
                            >
                                <ChevronRight size={17} />
                            </button>
                        </div>
                    </div>

                    {/* Focused Stage Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current.id}
                            className="edu-pathway-card"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <div className="edu-pathway-body">
                                <div className="edu-pathway-top">
                                    <span className="edu-pathway-badge">
                                        <GraduationCap size={14} />
                                        <span>{current.stageLabel}</span>
                                    </span>
                                    <span className="timeline-date">{current.date}</span>
                                </div>

                                <h3 className="edu-pathway-title">{current.title}</h3>
                                <h4 className="edu-pathway-org">{current.orgName}</h4>

                                <div className="edu-pathway-pills">
                                    {current.pills.map((pill, i) => (
                                        <span key={i} className="edu-pill">
                                            {pill.label && <strong>{pill.label} </strong>}
                                            {pill.value}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="edu-pathway-media">
                                <Image
                                    width={800}
                                    height={520}
                                    src={current.image}
                                    alt={current.orgName}
                                    className="edu-pathway-img"
                                    style={current.imgStyle}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom Dots */}
                    <div className="deck-dots" style={{ justifyContent: "center", marginTop: "20px" }}>
                        {stages.map((stage, idx) => (
                            <button
                                key={stage.id}
                                type="button"
                                className={`deck-dot ${idx === activeIndex ? "active" : ""}`}
                                onClick={() => setActiveIndex(idx)}
                                aria-label={stage.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
