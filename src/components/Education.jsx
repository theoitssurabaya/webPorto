"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="edu" className="section alt-bg relative">
        <div className="hero-bg-shapes">
            <div className="shape shape-5"></div>
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
                    Academic Journey
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Education
                </motion.h2>
            </div>
            
            <div className="timeline horizontal-timeline">
                <motion.div 
                    className="timeline-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content glass-card">
                        <div className="timeline-date">Jul 2020 – May 2023</div>
                        <h3>High School Diploma (Science)</h3>
                        <h4 className="org-name">SMAN 2 Kota Tangerang Selatan</h4>
                        <div className="edu-details" style={{ textAlign: "center", flexGrow: 1, marginTop: "15px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                            <span className="edu-pill"><strong>Grade:</strong> 88</span>
                            <span className="edu-pill"><strong>Activities:</strong> Attended Badminton Club.</span>
                            <span className="edu-pill">Ranked 66 eligible students of Natural Sciences out of 141</span>
                        </div>
                        <div className="timeline-img-wrapper mt-auto">
                            <img src="assets/sma.jpeg" alt="SMAN 2 Tangerang Selatan" className="timeline-img" style={{ objectPosition: "center 25%" }} />
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="timeline-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content glass-card">
                        <div className="timeline-date">Aug 2023 – Aug 2027 (Expected)</div>
                        <h3>Bachelor of Computer Engineering</h3>
                        <h4 className="org-name">Institut Teknologi Sepuluh Nopember</h4>
                        <div className="edu-details" style={{ textAlign: "center", flexGrow: 1, marginTop: "15px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                            <span className="edu-pill"><strong>Grade:</strong> 3.51/4.00</span>
                            <span className="edu-pill"><strong>TEFL:</strong> 537</span>
                            <span className="edu-pill"><strong>Skills:</strong> English as a Second Language (ESL)</span>
                        </div>
                        <div className="timeline-img-wrapper mt-auto">
                            <img src="assets/kuliah.jpeg" alt="ITS Campus" className="timeline-img" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
}
