"use client";
import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { projectList } from "@/data/portfolio";

const CATEGORY_TAGS = {
    scada: ["SCADA", "PLC", "Modbus"],
    iot: ["ESP32", "IoT", "Raspberry Pi", "RTOS", "Electrical Wiring"],
    software: ["ML", "Machine Learning", "NLP", "React", "Node.js", "FastAPI", "Flutter", "Firebase", "Python", "Pygame", "Game"],
};

function getProjectCategoryLabel(project) {
    if (project.tags.some((tag) => CATEGORY_TAGS.scada.includes(tag))) return "OT & SCADA";
    if (project.tags.some((tag) => CATEGORY_TAGS.iot.includes(tag))) return "IoT & Embedded";
    return "AI & Software";
}

export default function Projects() {
    const { language } = useLanguage();
    const t = translations[language].projects;
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const [touchStartX, setTouchStartX] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    const categories = [
        { id: "all", label: language === "id" ? "Semua" : "All" },
        { id: "scada", label: "OT & SCADA" },
        { id: "iot", label: "IoT & Embedded" },
        { id: "software", label: "AI & Software" },
    ];

    const filteredProjects = useMemo(() => {
        if (activeCategory === "all") return projectList;
        const targetTags = CATEGORY_TAGS[activeCategory] || [];
        return projectList.filter((project) =>
            project.tags.some((tag) => targetTags.includes(tag))
        );
    }, [activeCategory]);

    const total = filteredProjects.length;
    const safeIndex = total > 0 ? Math.min(activeIndex, total - 1) : 0;

    const handleCategoryChange = (catId) => {
        setActiveCategory(catId);
        setActiveIndex(0);
    };

    const handlePrev = useCallback(() => {
        if (total <= 1) return;
        setActiveIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    const handleNext = useCallback(() => {
        if (total <= 1) return;
        setActiveIndex((prev) => (prev + 1) % total);
    }, [total]);

    useEffect(() => {
        if (total <= 1 || isPaused || selectedProject) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % total);
        }, 4500);
        return () => clearInterval(timer);
    }, [total, isPaused, selectedProject]);

    useEffect(() => {
        if (!selectedProject) return;
        window.lenis?.stop();
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setSelectedProject(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.lenis?.start();
        };
    }, [selectedProject]);

    const getCircularOffset = (index) => {
        if (total <= 1) return 0;
        let diff = index - safeIndex;
        if (total >= 5) {
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;
        }
        return diff;
    };

    return (
        <section id="projects" className="section projects-section relative">
            <div className="hero-bg-shapes">
                <div className="shape shape-8"></div>
            </div>
            <div className="container relative" style={{ zIndex: 1, maxWidth: "100%", padding: "0 16px" }}>
                <div className="text-center mb-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {t.title}
                    </motion.h2>
                </div>

                <div className="skills-tabs" style={{ marginBottom: "28px" }}>
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

                {/* 3D Fanned Card Deck */}
                <div
                    className="deck-stage"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={(e) => {
                        setIsPaused(true);
                        setTouchStartX(e.touches[0].clientX);
                    }}
                    onTouchEnd={(e) => {
                        setIsPaused(false);
                        if (touchStartX === null) return;
                        const delta = e.changedTouches[0].clientX - touchStartX;
                        if (delta > 45) handlePrev();
                        else if (delta < -45) handleNext();
                        setTouchStartX(null);
                    }}
                >
                    {filteredProjects.map((project, index) => {
                        const offset = getCircularOffset(index);
                        const absOffset = Math.abs(offset);
                        if (absOffset > 2) return null;

                        const isCenter = offset === 0;
                        const isContain = project.objFit === "contain";

                        const xShift = offset * 235;
                        const yShift = absOffset * 26;
                        const rotateDeg = offset * 8;
                        const scale = 1 - absOffset * 0.1;
                        const opacity = isCenter ? 1 : absOffset === 1 ? 0.72 : 0.36;
                        const zIndex = 10 - absOffset * 2;

                        return (
                            <motion.div
                                key={project.key}
                                className={`deck-card ${isCenter ? "deck-card--active" : "deck-card--side"}`}
                                initial={false}
                                animate={{
                                    x: xShift,
                                    y: yShift,
                                    rotate: rotateDeg,
                                    scale,
                                    opacity,
                                }}
                                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                                style={{ zIndex }}
                                onClick={() => {
                                    if (!isCenter) {
                                        setActiveIndex(index);
                                    }
                                }}
                            >
                                <div className="deck-card-media">
                                    <span className="deck-card-badge">
                                        {getProjectCategoryLabel(project)}
                                    </span>
                                    <Image
                                        src={"/" + project.img}
                                        alt={project.alt}
                                        fill
                                        sizes="360px"
                                        style={{
                                            objectFit: project.objFit || "cover",
                                            objectPosition: project.objPos || "center center",
                                            ...(isContain && { padding: "14px", background: "#141414" }),
                                        }}
                                    />
                                </div>

                                <div className="deck-card-body">
                                    <h3>{t[project.key].title}</h3>
                                    <p className="deck-card-desc">{t[project.key].desc}</p>

                                    <div className="deck-card-tags">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="deck-card-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="deck-card-actions">
                                        <button
                                            type="button"
                                            className="btn-primary deck-btn-primary"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (isCenter) setSelectedProject(project);
                                                else setActiveIndex(index);
                                            }}
                                        >
                                            <span>{language === "id" ? "Detail Proyek" : "Case Study"}</span>
                                            <ArrowUpRight size={15} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Centered Controls Bar Below Deck */}
                {total > 0 && (
                    <div className="deck-controls">
                        <button
                            type="button"
                            className="deck-nav-btn"
                            onClick={handlePrev}
                            disabled={total <= 1}
                            aria-label={language === "id" ? "Proyek sebelumnya" : "Previous project"}
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div className="deck-status">
                            <span className="deck-counter">
                                {language === "id"
                                    ? `PROYEK ${safeIndex + 1} DARI ${total}`
                                    : `PROJECT ${safeIndex + 1} OF ${total}`}
                            </span>
                            <div className="deck-dots">
                                {filteredProjects.map((proj, idx) => (
                                    <button
                                        key={proj.key}
                                        type="button"
                                        className={`deck-dot ${idx === safeIndex ? "active" : ""}`}
                                        onClick={() => setActiveIndex(idx)}
                                        aria-label={`Go to ${t[proj.key].title}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            className="deck-nav-btn"
                            onClick={handleNext}
                            disabled={total <= 1}
                            aria-label={language === "id" ? "Proyek berikutnya" : "Next project"}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="case-study-backdrop"
                        data-lenis-prevent="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className={`case-study-modal ${selectedProject.objFit === "contain" ? "case-study-modal--split" : ""}`}
                            data-lenis-prevent="true"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="case-study-title"
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 16, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div
                                className="case-study-media"
                                style={selectedProject.objFit === "contain" ? { position: "relative" } : { position: "relative", width: "100%", height: "240px" }}
                            >
                                <Image
                                    src={"/" + selectedProject.img}
                                    alt={selectedProject.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 720px"
                                    style={{
                                        objectFit: selectedProject.objFit || "cover",
                                        objectPosition: selectedProject.objPos || "center center",
                                        ...(selectedProject.objFit === "contain" && { padding: "24px", background: "#141414" }),
                                    }}
                                />
                                <button
                                    type="button"
                                    className="case-study-close"
                                    onClick={() => setSelectedProject(null)}
                                    aria-label={t.caseStudyLabels.close}
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="case-study-body">
                                <h3 id="case-study-title">{t[selectedProject.key].title}</h3>
                                <div className="case-study-tags">
                                    {selectedProject.tags.map((tag) => (
                                        <span key={tag} className="case-study-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="case-study-sections">
                                    <div className="case-study-item">
                                        <span className="case-study-label">{t.caseStudyLabels.problem}</span>
                                        <p>{t[selectedProject.key].problem}</p>
                                    </div>
                                    <div className="case-study-item">
                                        <span className="case-study-label">{t.caseStudyLabels.architecture}</span>
                                        <p>{t[selectedProject.key].architecture}</p>
                                    </div>
                                    <div className="case-study-item">
                                        <span className="case-study-label">{t.caseStudyLabels.impact}</span>
                                        <p>{t[selectedProject.key].impact}</p>
                                    </div>
                                </div>

                                <div className="case-study-actions">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
                                    >
                                        <span>{t.caseStudyLabels.viewGithub}</span>
                                        <ArrowUpRight size={16} />
                                    </a>
                                    <button
                                        type="button"
                                        className="btn-secondary"
                                        onClick={() => setSelectedProject(null)}
                                    >
                                        {t.caseStudyLabels.close}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
