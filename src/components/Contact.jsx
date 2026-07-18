"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { toast } from "sonner";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [step, setStep] = useState(0); 
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  const prompts = [
    { key: "name", text: t.messageBox.name + ":" },
    { key: "email", text: t.messageBox.email + ":" },
    { key: "subject", text: t.messageBox.subject + ":" },
    { key: "message", text: t.messageBox.message + ":" }
  ];

  // Auto focus input and scroll to bottom
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history, step, status]);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleTerminalSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() && step < prompts.length) return;

    if (status === "error") {
        if (inputValue.toLowerCase() === 'retry') {
            setHistory(prev => [...prev, { prompt: ">", value: inputValue }]);
            setInputValue("");
            setStep(0);
            setStatus("idle");
            setHistory([]);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }
        return;
    }

    if (step >= prompts.length) return;

    const currentPrompt = prompts[step];

    if (currentPrompt.key === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue.trim())) {
        setHistory([{ system: t.messageBox.invalidEmail }]);
        setInputValue("");
        return;
      }
    }

    const newHistory = []; // Clear history to only show current prompt
    const newFormData = { ...formData, [currentPrompt.key]: inputValue };

    setHistory(newHistory);
    setFormData(newFormData);
    setInputValue("");

    if (step < prompts.length - 1) {
      setStep(step + 1);
    } else {
      // All fields collected, send the email
      setStep(step + 1);
      setStatus("sending");
      setHistory(prev => [...prev, { system: t.messageBox.sending }]);
      
      const payload = new FormData();
      payload.append("name", newFormData.name);
      payload.append("email", newFormData.email);
      payload.append("_subject", newFormData.subject);
      payload.append("message", newFormData.message);
      payload.append("_captcha", "false");

      try {
        const res = await fetch("https://formsubmit.co/ajax/theopinem05@gmail.com", {
          method: "POST",
          headers: { 'Accept': 'application/json' },
          body: payload
        });
        if (!res.ok) throw new Error("Failed to send");
        
        setStatus("success");
        setHistory(prev => [...prev, { system: t.messageBox.successReset }]);
        toast.success(t.messageBox.success);
        
        // Reset after a delay
        setTimeout(() => {
          setHistory([]);
          setStep(0);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setStatus("idle");
        }, 4000);
      } catch (err) {
        setStatus("error");
        setHistory(prev => [...prev, { system: t.messageBox.retryError }]);
        toast.error(t.messageBox.error);
      }
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
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="contact-layout">
                
                {/* Contact Info (Left Side) */}
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                    <div style={{ textAlign: "center", position: "relative" }}>
                        <div className="pixel-envelope" style={{ position: 'absolute', top: '-10px', right: '5%', zIndex: 15 }}></div>
                        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, marginBottom: "16px", color: "var(--text-main)" }}>
                            {t.title}
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
                                <p style={{ fontSize: "16px", fontWeight: "bold", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 4px 0" }}>{t.emailLabel}</p>
                                <a href="mailto:theopinem05@gmail.com" style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-main)", textDecoration: "none", transition: "color 0.3s" }} onMouseOver={e => e.target.style.color = "var(--accent)"} onMouseOut={e => e.target.style.color = "var(--text-main)"}>theopinem05@gmail.com</a>
                            </div>
                        </div>

                        {/* Location */}
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(var(--c-section-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(var(--c-section-rgb), 0.2)", flexShrink: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div>
                                <p style={{ fontSize: "16px", fontWeight: "bold", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 4px 0" }}>{t.locationLabel}</p>
                                <p style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-main)", margin: 0 }}>Surabaya, Indonesia</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(var(--c-section-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(var(--c-section-rgb), 0.2)", flexShrink: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <p style={{ fontSize: "16px", fontWeight: "bold", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "1px", margin: "0 0 4px 0" }}>{t.phoneLabel}</p>
                                <a href="tel:+6282114150363" style={{ fontSize: "18px", fontWeight: "900", color: "var(--text-main)", textDecoration: "none", transition: "color 0.3s" }} onMouseOver={e => e.target.style.color = "var(--accent)"} onMouseOut={e => e.target.style.color = "var(--text-main)"}>+62 821 1415 0363</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Message Box Form (Right Side) - Terminal UI */}
                <div className="terminal-window" onClick={focusInput}>
                    <div className="terminal-header">
                        <div className="terminal-dot red"></div>
                        <div className="terminal-dot yellow"></div>
                        <div className="terminal-dot green"></div>
                        <div className="terminal-title">{t.messageBox.terminalTitle}</div>
                    </div>
                    <div className="terminal-body" ref={bodyRef}>
                        <div className="terminal-system-msg">
                            {t.messageBox.terminalWelcome}
                        </div>
                        
                        {history.map((item, i) => (
                            <div key={i} className="terminal-history-item">
                                {item.system ? (
                                    <div className="terminal-system-msg">{item.system}</div>
                                ) : (
                                    <div className="terminal-line">
                                        <div className="terminal-prompt">
                                            <span className="terminal-prefix">{t.messageBox.terminalPrefix}</span>
                                            <span style={{color: '#fff'}}>{item.prompt}</span>
                                        </div>
                                        <div className="terminal-history-value">{item.value}</div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {status !== "sending" && status !== "success" && (
                            <form onSubmit={handleTerminalSubmit} className="terminal-line">
                                <div className="terminal-prompt">
                                    <span className="terminal-prefix">{t.messageBox.terminalPrefix}</span>
                                    <span style={{color: '#fff'}}>
                                        {status === "error" ? t.messageBox.retryPrompt : prompts[step]?.text}
                                    </span>
                                </div>
                                <div className="terminal-input-wrapper">
                                    <input 
                                        ref={inputRef}
                                        type="text" 
                                        className="terminal-input"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        autoComplete="off"
                                        autoFocus
                                    />
                                </div>
                            </form>
                        )}
                        
                        {(status === "sending" || status === "success") && (
                            <div className="terminal-prompt">
                                <span className="terminal-prefix">{t.messageBox.terminalPrefix}</span>
                                <span className="typewriter-cursor">_</span>
                            </div>
                        )}
                    </div>
                </div>

            </div>
            
            <div className="footer-bottom mt-5" style={{ marginTop: "50px", textAlign: "center", paddingBottom: "20px" }}>
                <p>&copy; 2026 Theo Kawalisa Pinem</p>
            </div>
        </motion.div>
    </section>
  );
}
