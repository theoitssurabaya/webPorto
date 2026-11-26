"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { toast } from "sonner";
import { Send } from "lucide-react";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText("theopinem05@gmail.com")
        .then(() => {
          toast.success(
            language === "id"
              ? "Email disalin: theopinem05@gmail.com"
              : "Email copied: theopinem05@gmail.com"
          );
        })
        .catch(() => {});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error(
        language === "id"
          ? "Mohon lengkapi semua kolom."
          : "Please fill in all fields."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error(t.messageBox.invalidEmail);
      return;
    }

    setIsSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success(t.messageBox.success);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error(t.messageBox.error);
    } finally {
      setIsSending(false);
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="contact-layout">
          {/* Contact Info (Left Side) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div style={{ textAlign: "left", position: "relative" }}>
              <h2 style={{ fontSize: "clamp(1.85rem, 4vw, 2.75rem)", fontWeight: 800, marginBottom: "14px", color: "var(--text-main)" }}>
                {t.title}
              </h2>
              <p style={{ fontSize: "1.02rem", color: "var(--text-dim)", lineHeight: "1.65", fontWeight: 400 }}>
                {t.emailCardDesc}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {/* Email */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "8px", background: "#141414", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #262626", flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 2px 0" }}>{t.emailLabel}</p>
                  <a
                    href="#contact"
                    onClick={handleCopyEmail}
                    title={language === "id" ? "Klik untuk menyalin email" : "Click to copy email"}
                    style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--text-main)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-main)")}
                  >
                    theopinem05@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "8px", background: "#141414", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #262626", flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 2px 0" }}>{t.locationLabel}</p>
                  <p style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--text-main)", margin: 0 }}>Surabaya, Indonesia</p>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "8px", background: "#141414", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #262626", flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 2px 0" }}>{t.phoneLabel}</p>
                  <a
                    href="tel:+6282114150363"
                    style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--text-main)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-main)")}
                  >
                    +62 821 1415 0363
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Contact Form (Right Side) */}
          <form onSubmit={handleSubmit} className="corporate-form-card">
            <div className="corporate-form-header">
              <h3>{t.messageBox.title}</h3>
              <p>
                {language === "id"
                  ? "Terbuka untuk peluang kerja sama, magang, maupun konsultasi proyek."
                  : "Open to full-time roles, internships, and technical collaboration."}
              </p>
            </div>

            <div className="corporate-form-grid">
              <div className="corporate-field">
                <label htmlFor="contact-name">{t.messageBox.name}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="corporate-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="corporate-field">
                <label htmlFor="contact-email">{t.messageBox.email}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="corporate-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="corporate-field">
              <label htmlFor="contact-subject">{t.messageBox.subject}</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className="corporate-input"
                value={formData.subject}
                onChange={handleChange}
                placeholder={
                  language === "id"
                    ? "Diskusi Proyek / Peluang Karier"
                    : "Project Inquiry / Career Opportunity"
                }
                required
              />
            </div>

            <div className="corporate-field">
              <label htmlFor="contact-message">{t.messageBox.message}</label>
              <textarea
                id="contact-message"
                name="message"
                className="corporate-textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  language === "id"
                    ? "Tuliskan detail pesan Anda..."
                    : "Write your message details..."
                }
                required
              />
            </div>

            <button type="submit" className="corporate-submit-btn" disabled={isSending}>
              <Send size={16} />
              <span>{isSending ? t.messageBox.sending : t.messageBox.submit}</span>
            </button>
          </form>
        </div>

        <div className="footer-bottom mt-5" style={{ marginTop: "50px", textAlign: "center", paddingBottom: "20px", color: "var(--text-dim)", fontSize: "0.9rem" }}>
          <p>&copy; 2026 Theo Kawalisa Pinem</p>
        </div>
      </motion.div>
    </section>
  );
}
