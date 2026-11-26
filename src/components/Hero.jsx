"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { toast } from "sonner";

export default function Hero() {
    const { language } = useLanguage();
    const t = translations[language].hero;

    const handleEmailClick = (e) => {
        e.preventDefault();
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText("theopinem05@gmail.com")
                .then(() => {
                    toast.success(language === "id" ? "Email disalin: theopinem05@gmail.com" : "Email copied: theopinem05@gmail.com");
                })
                .catch(() => {});
        }

        const contactEl = document.getElementById("contact");
        if (contactEl) {
            const target = contactEl.closest(".stacked-section") || contactEl;
            if (window.lenis) {
                window.lenis.scrollTo(target);
            } else {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <section id="hero" className="section hero-section">
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>

            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                <div className="text-center">
                    <motion.div
                        className="hero-center-img-wrapper tooltip-container"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Image
                            src="/assets/hero/foto-diri-clean.png"
                            alt="Theo Pinem"
                            className="hero-center-img"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        style={{ position: "relative", zIndex: 10 }}
                    >
                        <h1 className="hero-title" style={{ position: "relative" }}>
                            {t.title}
                        </h1>
                        <p className="subtitle hero-subtitle" style={{ margin: "0 auto 24px auto", textAlign: "center", maxWidth: "700px" }}>
                            {t.subtitle}
                        </p>

                        <div className="btn-group justify-center">
                            <a href="#projects" className="btn-primary">{t.btnExplore}</a>
                            <a
                                href="https://docs.google.com/document/d/1P2Ba_mgJQDykI40ddohtI2BP3aMW-UyPyubR9Fgw4RM/preview"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                {t.btnCV}
                            </a>
                        </div>

                        <div className="social-links justify-center mt-4">
                            <a href="https://github.com/theoitssurabaya" target="_blank" rel="noopener noreferrer" className="social-icon glass-icon" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/theopinem/" target="_blank" rel="noopener noreferrer" className="social-icon glass-icon" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="#contact" onClick={handleEmailClick} className="social-icon glass-icon email-link" aria-label="Email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </a>
                            <a href="https://www.instagram.com/pinemtheo/" target="_blank" rel="noopener noreferrer" className="social-icon glass-icon" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>

                        <div className="trust-bar">
                            <span className="trust-bar-label">
                                {language === "id" ? "Pengalaman & Afiliasi" : "Experience & Affiliations"}
                            </span>
                            <div className="trust-bar-items">
                                <span className="trust-bar-item">PLN Nusantara Power Services</span>
                                <span className="trust-bar-item">Protergo Cyber Security</span>
                                <span className="trust-bar-item">ITS Robotics Lab</span>
                                <span className="trust-bar-item">DBS × Dicoding</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
