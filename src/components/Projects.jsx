"use client";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="section alt-bg relative">
            <div className="hero-bg-shapes">
                <div className="shape shape-8"></div>
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
                        Technical Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Featured Engineering Projects
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
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="assets/fully-autonomous-esp32-robotic-vehicle.jpeg" alt="Fully Autonomous ESP32 Robotic Vehicle" className="bento-bg" />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>Autonomous Robotic Vehicle</h3>
                                <p>An intelligent, self-driving robotic vehicle powered by an ESP32 microcontroller. Engineered for real-time sensor processing, obstacle avoidance, and dynamic pathfinding.</p>
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
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="assets/pzem-anomaly-detector.jpeg" alt="PZEM Anomaly Detector" className="bento-bg" />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>PZEM-Anomaly Detector</h3>
                                <p>IoT-based power monitoring system detecting electrical device anomalies.</p>
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
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="assets/distance-target-game.png" alt="Distance Target Game" className="bento-bg" style={{ objectPosition: "left center" }} />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>Distance Target Game</h3>
                                <p>Real-time distance measuring game with ESP32.</p>
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
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="assets/smart-irrigation.jpeg" alt="Smart Irrigation" className="bento-bg" />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>Smart Irrigation System</h3>
                                <p>Intelligent IoT plant watering.</p>
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
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="assets/smart-dispenser-iot.jpeg" alt="Smart Dispenser IoT" className="bento-bg" />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>Smart Water Distribution System</h3>
                                <p>End-to-end IoT Smart Dispenser built with ESP32 & Flutter.</p>
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
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="assets/bird-shooter-esp32.jpeg" alt="Bird Shooter ESP32" className="bento-bg" />
                        <div className="bento-overlay"></div>
                        <div className="bento-content">

                            <div className="bento-text">
                                <h3>Bird Shooter Game</h3>
                                <p>Interactive arcade LED matrix game.</p>
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
