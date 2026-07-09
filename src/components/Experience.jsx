"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function Experience() {
    const { language } = useLanguage();
    const t = translations[language].experience;

    const [activeTab, setActiveTab] = useState("exp-0");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const tabs = [
        { id: "exp-0", title: language === 'id' ? "Magang Business Development" : "Business Development Intern", subtitle: "Protergo Cyber Security" },
        { id: "exp-1", title: language === 'id' ? "Peserta AI Engineer" : "AI Engineer Cohort", subtitle: "DBS x Dicoding Coding Camp 2026" },
        { id: "exp-2", title: language === 'id' ? "Kepala Biro Pengembangan" : "Head of Development Bureau", subtitle: "BEM FTEIC" },
        { id: "exp-3", title: language === 'id' ? "Asisten Laboratorium" : "Laboratory Assistant", subtitle: "Robotics Lab (ITS)" },
        { id: "exp-4", title: language === 'id' ? "Staf Ahli Mentor" : "Expert Staff of Mentor", subtitle: "INCLENATION 2025" },
        { id: "exp-5", title: language === 'id' ? "Staf Pengembangan SDM" : "Staff of Student Resource Development", subtitle: "HIMATEKKOM ITS" },
        { id: "exp-6", title: language === 'id' ? "Panitia Pengarah" : "Steering Committee", subtitle: "PKMBK ITS" },
    ];

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
                <div className="text-center mb-5">

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
                        <div className={`selector-content ${activeTab === 'exp-0' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>{language === 'id' ? "Magang Business Development" : "Business Development Intern"}</h3>
                                <span className="timeline-date">{language === 'id' ? "Jun 2026 — Sekarang" : "Jun 2026 — Present"}</span>
                            </div>
                            <h4 className="org-name">Protergo Cyber Security</h4>
                            <ul>
                                <li>{language === 'id' ? "Merancang sandbox SCADA terdistribusi menggunakan OpenPLC dan mikrokontroler." : "Architecting a distributed SCADA sandbox using OpenPLC and microcontrollers."}</li>
                                <li>{language === 'id' ? "Berkolaborasi dengan tim untuk menyediakan infrastruktur uji penetrasi." : "Collaborating with cybersecurity teams to provide infrastructure for penetration testing."}</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <Image width={800} height={500} src="/assets/experience/protergo.jpeg" alt="Protergo Cyber Security" className="timeline-img" />
                            </div>
                        </div>

                        <div className={`selector-content ${activeTab === 'exp-1' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>{language === 'id' ? "Peserta AI Engineer" : "AI Engineer Cohort"}</h3>
                                <span className="timeline-date">{language === 'id' ? "Feb 2026 — Juli 2026" : "Feb 2026 — July 2026"}</span>
                            </div>
                            <h4 className="org-name">Coding Camp by DBS Foundation x Dicoding</h4>
                            <ul>
                                <li>{language === 'id' ? "Mengembangkan model ML dan Deep Learning melalui pelatihan intensif." : "Developing ML and Deep Learning models via intensive training."}</li>
                                <li>{language === 'id' ? "Membangun proyek Capstone AI menggunakan framework Deep Learning." : "Building an AI Capstone project using Deep Learning frameworks."}</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <Image width={800} height={500} src="/assets/experience/ai-engineer-cohort.png" alt="AI Engineer Cohort" className="timeline-img" />
                            </div>
                        </div>

                        <div className={`selector-content ${activeTab === 'exp-2' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>{language === 'id' ? "Kepala Biro Pengembangan" : "Head of Development Bureau"}</h3>
                                <span className="timeline-date">{language === 'id' ? "Feb 2026 — Sekarang" : "Feb 2026 — Present"}</span>
                            </div>
                            <h4 className="org-name">BEM FTEIC</h4>
                            <ul>
                                <li>{language === 'id' ? "Mengawasi dan memimpin tim yang terdiri dari 8 staf." : "Supervising and leading a team consisting of 8 staff members."}</li>
                                <li>{language === 'id' ? "Mengarahkan dan mendampingi program pengembangan mahasiswa untuk mahasiswa baru fakultas." : "Directed and mentored the student development programs for incoming faculty students."}</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <Image width={800} height={500} src="/assets/experience/bem-fteic.jpeg" alt="BEM FTEIC" className="timeline-img" />
                            </div>
                        </div>

                        <div className={`selector-content ${activeTab === 'exp-3' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>{language === 'id' ? "Asisten Laboratorium" : "Laboratory Assistant"}</h3>
                                <span className="timeline-date">{language === 'id' ? "Sep 2025 — Sekarang" : "Sep 2025 — Present"}</span>
                            </div>
                            <h4 className="org-name">Robotics & Intelligent Systems Lab (ITS)</h4>
                            <ul>
                                <li>{language === 'id' ? "Mengelola peralatan dan mengawasi eksperimen mahasiswa." : "Managing equipment and supervising student experiments."}</li>
                                <li>{language === 'id' ? "Mengoordinasikan pengembangan robotika, IoT, dan sistem cerdas." : "Coordinating development for robotics, IoT, and intelligent systems."}</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <Image width={800} height={500} src="/assets/experience/robotics-lab.jpeg" alt="Robotics Lab" className="timeline-img" />
                            </div>
                        </div>

                        <div className={`selector-content ${activeTab === 'exp-4' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>{language === 'id' ? "Staf Ahli Mentor" : "Expert Staff of Mentor"}</h3>
                                <span className="timeline-date">{language === 'id' ? "Jun 2025 — Agu 2025" : "Jun 2025 — Aug 2025"}</span>
                            </div>
                            <h4 className="org-name">BEM FTEIC (INCLENATION 2025)</h4>
                            <ul>
                                <li>{language === 'id' ? "Mengarahkan, memimpin, dan membimbing tim mentor beranggotakan 10 orang." : "Directed, led, and taught a 10-person team of mentors."}</li>
                                <li>{language === 'id' ? "Mengawasi dan memantau mentor saat mereka mendampingi masing-masing 10 mahasiswa baru." : "Supervised and monitored those mentors while they mentor 10 freshmen each."}</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <Image width={800} height={500} src="/assets/experience/inclenation.jpeg" alt="INCLENATION 2025" className="timeline-img" />
                            </div>
                        </div>

                        <div className={`selector-content ${activeTab === 'exp-5' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>{language === 'id' ? "Staf Pengembangan SDM Mahasiswa" : "Staff of Student Resource Development"}</h3>
                                <span className="timeline-date">{language === 'id' ? "Mar 2025 — Des 2025" : "Mar 2025 — Dec 2025"}</span>
                            </div>
                            <h4 className="org-name">Himpunan Mahasiswa Teknik Komputer ITS</h4>
                            <ul>
                                <li>{language === 'id' ? "Turut memimpin acara pengenalan jurusan (sebagai Wakil Ketua)." : "Co-Led a major departmental introductory event (as Vice Head)."}</li>
                                <li>{language === 'id' ? "Memfasilitasi dan mendampingi pelatihan sekitar 120 mahasiswa junior." : "Facilitated and assisted in training around 120 juniors."}</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <Image width={800} height={500} src="/assets/experience/himatekkom-its.jpeg" alt="HIMATEKKOM ITS" className="timeline-img" />
                            </div>
                        </div>

                        <div className={`selector-content ${activeTab === 'exp-6' ? 'active' : ''}`}>
                            <div className="content-header">
                                <h3>{language === 'id' ? "Panitia Pengarah" : "Steering Committee"}</h3>
                                <span className="timeline-date">{language === 'id' ? "Jan 2025 — Feb 2026" : "Jan 2025 — Feb 2026"}</span>
                            </div>
                            <h4 className="org-name">Pembinaan Kerohanian Mahasiswa Baru Kristen ITS 2025</h4>
                            <ul>
                                <li>{language === 'id' ? "Membuat konsep keseluruhan acara bagi mahasiswa baru Kristen." : "Conceptualized the entire program events for incoming christian freshmen."}</li>
                                <li>{language === 'id' ? "Berperan sebagai narahubung utama dengan pembina kerohanian ITS bersama tim beranggotakan 7 orang." : "Acted as the key liaison with the ITS spiritual campus advisor with a 7-person team."}</li>
                            </ul>
                            <div className="timeline-img-wrapper mt-4">
                                <Image width={800} height={500} src="/assets/experience/pkmbk.jpeg" alt="PKMBK ITS" className="timeline-img" />
                            </div>
                        </div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
