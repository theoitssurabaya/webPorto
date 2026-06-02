"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    try {
      const res = await fetch("https://formsubmit.co/ajax/theopinem05@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section contact-section relative">
        <div className="hero-bg-shapes">
            <div className="shape shape-9"></div>
        </div>
        <motion.div 
            className="container relative" 
            style={{ zIndex: 1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="contact-layout">
                
                {/* Contact Info (Left Side) */}
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                    <div>
                        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginBottom: "16px", textAlign: "left", color: "var(--text-main)" }}>
                            {t.title.split(' ').slice(0, -1).join(' ')}{' '}
                            <span style={{ color: 'var(--c-red)' }}>{t.title.split(' ').slice(-1)}</span>.
                        </h2>
                        <p style={{ fontSize: "1.1rem", color: "var(--text-dim)", lineHeight: "1.6", fontWeight: 500 }}>
                            {t.emailCardDesc}
                        </p>
                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        {/* Email */}
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(var(--c-section-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(var(--c-section-rgb), 0.2)", flexShrink: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                            </div>
                            <div>
                                <p style={{ fontSize: "12px", fontWeight: "bold", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 4px 0" }}>Email</p>
                                <a href="mailto:theopinem05@gmail.com" style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-main)", textDecoration: "none", transition: "color 0.3s" }} onMouseOver={e => e.target.style.color = "var(--accent)"} onMouseOut={e => e.target.style.color = "var(--text-main)"}>theopinem05@gmail.com</a>
                            </div>
                        </div>

                        {/* Location */}
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(var(--c-section-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(var(--c-section-rgb), 0.2)", flexShrink: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div>
                                <p style={{ fontSize: "12px", fontWeight: "bold", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 4px 0" }}>{language === 'id' ? 'Lokasi' : 'Location'}</p>
                                <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-main)", margin: 0 }}>Surabaya, Indonesia</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(var(--c-section-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(var(--c-section-rgb), 0.2)", flexShrink: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <p style={{ fontSize: "12px", fontWeight: "bold", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 4px 0" }}>{language === 'id' ? 'Telepon' : 'Phone'}</p>
                                <a href="tel:+6282114150363" style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-main)", textDecoration: "none", transition: "color 0.3s" }} onMouseOver={e => e.target.style.color = "var(--accent)"} onMouseOut={e => e.target.style.color = "var(--text-main)"}>+62 821 1415 0363</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Message Box Form (Right Side) */}
                <div className="glass-card form-card" style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
                    <h3 style={{ marginBottom: "20px", fontSize: "24px" }}>{t.messageBox.title}</h3>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", flexGrow: 1 }}>
                        <input type="hidden" name="_captcha" value="false" />
                        
                        <div className="input-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder={t.messageBox.name} 
                                required 
                                className="contact-input"
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder={t.messageBox.email} 
                                required 
                                className="contact-input"
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="text" 
                                name="_subject" 
                                placeholder={t.messageBox.subject} 
                                required 
                                className="contact-input"
                            />
                        </div>
                        <div className="input-group" style={{ flexGrow: 1 }}>
                            <textarea 
                                name="message" 
                                placeholder={t.messageBox.message} 
                                required 
                                className="contact-input"
                                style={{ height: "100%", minHeight: "150px", resize: "none" }}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn-primary" 
                            disabled={status === "sending"}
                            style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}
                        >
                            {status === "sending" ? t.messageBox.sending : t.messageBox.submit}
                        </button>

                        {status === "success" && <p style={{ color: "#4ade80", textAlign: "center", marginTop: "10px", fontSize: "14px", fontWeight: "bold" }}>{t.messageBox.success}</p>}
                        {status === "error" && <p style={{ color: "#f87171", textAlign: "center", marginTop: "10px", fontSize: "14px", fontWeight: "bold" }}>{t.messageBox.error}</p>}
                    </form>
                </div>

            </div>
            
            <div className="footer-bottom mt-5" style={{ marginTop: "50px", textAlign: "center", paddingBottom: "20px" }}>
                <p>&copy; 2026 Theo Kawalisa Pinem</p>
            </div>
        </motion.div>
    </section>
  );
}
