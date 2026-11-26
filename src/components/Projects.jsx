"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { projectList } from "@/data/portfolio";

const CATEGORY_TAGS = {
    scada: ["SCADA", "PLC", "Modbus"],
    iot: ["ESP32", "IoT", "Raspberry Pi", "RTOS", "Electrical Wiring"],
    software: ["ML", "Machine Learning", "NLP", "React", "Node.js", "FastAPI", "Flutter", "Firebase", "Python", "Pygame", "Game"],
};

export default function Projects() {
    const { language } = useLanguage();
    const t = translations[language].projects;
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState(null);

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

    return (
        <section id="projects" className="section projects-section relative">
            <div className="hero-bg-shapes">
                <div className="shape shape-8"></div>
            </div>
            <div className="container relative" style={{ zIndex: 1 }}>
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

                <div className="skills-tabs" style={{ marginBottom: "36px" }}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            type="button"
                            className={`tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.button
                            key={project.key}
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="project-card"
                            style={{ textAlign: "left", cursor: "pointer" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                        >
                            <div className="project-card-media" style={{ position: "relative", width: "100%", aspectRatio: "16 / 10" }}>
                                <Image
                                    src={"/" + project.img}
                                    alt={project.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{
                                        objectFit: project.objFit || "cover",
                                        objectPosition: project.objPos || "center center",
                                        ...(project.objFit === "contain" && { padding: "18px", background: "#141414" }),
                                    }}
                                />
                            </div>
                            <div className="project-card-body">
                                <div className="project-card-header">
                                    <h3>{t[project.key].title}</h3>
                                    <ArrowUpRight size={18} className="project-card-arrow" />
                                </div>
                                <p>{t[project.key].desc}</p>
                                <div className="tech-stack" style={{ marginTop: "auto", paddingTop: "12px" }}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tech-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
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
                            className="case-study-modal"
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
                            <div className="case-study-media" style={{ position: "relative", width: "100%", height: "240px" }}>
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
