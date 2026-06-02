"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function Projects() {
    const { language } = useLanguage();
    const t = translations[language].projects;

    return (
        <section id="projects" className="section projects-section relative">
            <div className="hero-bg-shapes">
                <div className="shape shape-8"></div>
            </div>
            <div className="container relative" style={{ zIndex: 1 }}>
                <div className="text-center mb-5">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {t.title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span style={{ color: 'var(--c-violet)' }}>{t.title.split(' ').slice(-1)}</span>.
                    </motion.h2>
                </div>

                <div className="bento-grid">
                    {/* Project 1 (Large 2x2) */}
                    <motion.a
                        href="https://github.com/theoitssurabaya/Fully-Autonomous-ESP32-Robotic-Vehicle"
                        target="_blank"
                        className="bento-card bento-item-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <img src="assets/fully-autonomous-esp32-robotic-vehicle.jpeg" alt="Fully Autonomous ESP32 Robotic Vehicle" className="bento-bg" />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>{t.proj1.title}</h3>
                                <p>{t.proj1.desc}</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">C++</span><span className="tech-tag">ESP32</span><span className="tech-tag">Robotics</span>
                                </div>
                            </div>
                        </div>
                    </motion.a>

                    {/* Project 2 (Wide 2x1) */}
                    <motion.a
                        href="https://github.com/theoitssurabaya/PZEM-AnomalyDetector"
                        target="_blank"
                        className="bento-card bento-item-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img src="assets/pzem-anomaly-detector.jpeg" alt="PZEM Anomaly Detector" className="bento-bg" />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>{t.proj2.title}</h3>
                                <p>{t.proj2.desc}</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">C++</span><span className="tech-tag">ML</span><span className="tech-tag">ESP32</span>
                                </div>
                            </div>
                        </div>
                    </motion.a>

                    {/* Project 3 (Tall 1x2) */}
                    <motion.a
                        href="https://github.com/theoitssurabaya/distance_target_game_project"
                        target="_blank"
                        className="bento-card bento-item-3"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <img src="assets/distance-target-game.png" alt="Distance Target Game" className="bento-bg" style={{ objectPosition: "left center" }} />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>{t.proj3.title}</h3>
                                <p>{t.proj3.desc}</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">JS</span><span className="tech-tag">ESP32</span><span className="tech-tag">IoT</span>
                                </div>
                            </div>
                        </div>
                    </motion.a>

                    {/* Project 4 (Small 1x1) */}
                    <motion.a
                        href="https://github.com/theoitssurabaya/Soil-Monitoring-Controlled-Irrigation"
                        target="_blank"
                        className="bento-card bento-item-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <img src="assets/smart-irrigation.jpeg" alt="Smart Irrigation" className="bento-bg" />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>{t.proj4.title}</h3>
                                <p>{t.proj4.desc}</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">ESP32</span><span className="tech-tag">ML</span><span className="tech-tag">Raspberry Pi</span>
                                </div>
                            </div>
                        </div>
                    </motion.a>

                    {/* Project 5 (Wide 2x1) */}
                    <motion.a
                        href="https://github.com/theoitssurabaya/Smart-Dispenser-IoT"
                        target="_blank"
                        className="bento-card bento-item-5"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img src="assets/smart-dispenser-iot.jpeg" alt="Smart Dispenser IoT" className="bento-bg" />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>{t.proj5.title}</h3>
                                <p>{t.proj5.desc}</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">Dart/Flutter</span><span className="tech-tag">ESP32</span><span className="tech-tag">IoT</span>
                                </div>
                            </div>
                        </div>
                    </motion.a>

                    {/* Project 6 (Small 1x1) */}
                    <motion.a
                        href="https://github.com/theoitssurabaya/Bird-Shooter-Game-ESP32"
                        target="_blank"
                        className="bento-card bento-item-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <img src="assets/bird-shooter-esp32.jpeg" alt="Bird Shooter ESP32" className="bento-bg" />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>{t.proj6.title}</h3>
                                <p>{t.proj6.desc}</p>
                                <div className="tech-stack">
                                    <span className="tech-tag">C++</span><span className="tech-tag">Hardware</span><span className="tech-tag">ESP32</span>
                                </div>
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
