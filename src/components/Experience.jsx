"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
    const [activeTab, setActiveTab] = useState("exp-1");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const tabs = [
        { id: "exp-1", title: "AI Engineer Cohort", subtitle: "DBS x Dicoding" },
        { id: "exp-2", title: "Head of Development Bureau", subtitle: "BEM FTEIC" },
        { id: "exp-3", title: "Laboratory Assistant", subtitle: "Robotics Lab (ITS)" },
        { id: "exp-4", title: "Expert Staff of Mentor", subtitle: "INCLENATION 2025" },
        { id: "exp-5", title: "Staff of Student Development", subtitle: "HIMATEKKOM ITS" },
        { id: "exp-6", title: "Steering Committee", subtitle: "PKMBK ITS" },
    ];

    const handleTabClick = (id) => {
        setActiveTab(id);
        setIsDropdownOpen(false);
    };

    return (
        <section id="experience" className="section relative">
            <div className="hero-bg-shapes">
                <div className="shape shape-6"></div>
                <div className="shape shape-7"></div>
            </div>
            <div className="container relative" style={{ zIndex: 1 }}>
                <div className="text-center mb-5">
                    <motion.span
                        className="section-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Experiences & Certifications
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Work & Organizational Experiences
                    </motion.h2>
                </div>

                <div className="interactive-selector">
                    <motion.div
                        className="selector-tabs-container"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mobile-dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <span>{tabs.find(t => t.id === activeTab)?.title}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                        <div className="selector-tab-indicator"></div>
                        <div className={`selector-tabs ${isDropdownOpen ? 'open' : ''}`}>
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
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={`selector-content ${activeTab === 'exp-1' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>AI Engineer Cohort</h3>
                                <span className="timeline-date">Feb 2026 — Present</span>
                            </div>
                            <h4 className="org-name">Coding Camp by DBS Foundation x Dicoding</h4>
                            <ul>
                                <li>Developing ML and Deep Learning models via intensive training.</li>
                                <li>Building an AI Capstone project using Deep Learning frameworks.</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <img src="assets/ai-engineer-cohort.png" alt="AI Engineer Cohort" className="timeline-img" />
                            </div>
                        </div>

                        <div className={`selector-content ${activeTab === 'exp-2' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>Head of Development Bureau</h3>
                                <span className="timeline-date">Feb 2026 — Present</span>
                            </div>
                            <h4 className="org-name">BEM FTEIC</h4>
                            <ul>
                                <li>Supervising and leading a team consisting of 8 staff members.</li>
                                <li>Directed and mentored the student development programs for incoming faculty students.</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <img src="assets/bem-fteic.jpeg" alt="BEM FTEIC" className="timeline-img" />
                            </div>
                        </div>

                        <div className={`selector-content ${activeTab === 'exp-3' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>Laboratory Assistant</h3>
                                <span className="timeline-date">Sep 2025 — Present</span>
                            </div>
                            <h4 className="org-name">Robotics & Intelligent Systems Lab (ITS)</h4>
                            <ul>
                                <li>Managing equipment and supervising student experiments.</li>
                                <li>Coordinating development for robotics, IoT, and intelligent systems.</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <img src="assets/robotics-lab.jpeg" alt="Robotics Lab" className="timeline-img" />
                            </div>
                        </div>

                        <div className={`selector-content ${activeTab === 'exp-4' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>Expert Staff of Mentor</h3>
                                <span className="timeline-date">Jun 2025 — Aug 2025</span>
                            </div>
                            <h4 className="org-name">BEM FTEIC (INCLENATION 2025)</h4>
                            <ul>
                                <li>Directed, led, and taught a 10-person team of mentors.</li>
                                <li>Supervised and monitored those mentors while they mentor 10 freshmen each.</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <img src="assets/inclenation.jpeg" alt="INCLENATION 2025" className="timeline-img" />
                            </div>
                        </div>

                        <div className={`selector-content ${activeTab === 'exp-5' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>Staff of Student Resource Development</h3>
                                <span className="timeline-date">Mar 2025 — Dec 2025</span>
                            </div>
                            <h4 className="org-name">Himpunan Mahasiswa Teknik Komputer ITS</h4>
                            <ul>
                                <li>Co-Led a major departmental introductory event (as Vice Head).</li>
                                <li>Facilitated and assisted in training around 120 juniors.</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <img src="assets/himatekkom-its.jpeg" alt="HIMATEKKOM ITS" className="timeline-img" />
                            </div>
                        </div>

                        <div className={`selector-content ${activeTab === 'exp-6' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>Steering Committee</h3>
                                <span className="timeline-date">Jan 2025 — Feb 2026</span>
                            </div>
                            <h4 className="org-name">Pembinaan Kerohanian Mahasiswa Baru Kristen ITS 2025</h4>
                            <ul>
                                <li>Conceptualized the entire program events for incoming christian freshmen.</li>
                                <li>Acted as the key liaison with the ITS spiritual campus advisor with a 7-person team.</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <img src="assets/pkmbk.jpeg" alt="PKMBK ITS" className="timeline-img" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="certifications-wrapper mt-5 text-center">
                    <motion.h3
                        className="mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Professional Certifications
                    </motion.h3>
                    <div className="cert-grid">
                        <motion.div
                            className="cert-badge glass-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <span>Membangun Proyek Deep Learning Tingkat Mahir (Dicoding)</span>
                        </motion.div>
                        <motion.div
                            className="cert-badge glass-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <span>Belajar Fundamental Deep Learning (Dicoding)</span>
                        </motion.div>
                        <motion.div
                            className="cert-badge glass-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            <span>Machine Learning untuk Pemula (Dicoding)</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
