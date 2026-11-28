"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const AFFILIATIONS = [
  {
    name: "PLN Nusantara Power Services",
    roleEn: "Full-Stack Web Developer Intern",
    roleId: "Magang Full-Stack Web Developer",
    logo: "/assets/hero/pln.png",
    width: 120,
    height: 40,
  },
  {
    name: "Protergo Cyber Security",
    roleEn: "OT Engineer Intern",
    roleId: "Magang OT Engineer",
    logo: "/assets/hero/protergo.png",
    width: 120,
    height: 52,
  },
  {
    name: "B401 Robotics Lab (ITS)",
    roleEn: "Lab & Practicum Assistant",
    roleId: "Asisten Lab & Praktikum",
    logo: "/assets/hero/itsb401roboticslab.png",
    width: 80,
    height: 80,
    isSquare: true,
  },
  {
    name: "Coding Camp by DBS",
    roleEn: "AI Engineer Cohort",
    roleId: "Peserta AI Engineer",
    logo: "/assets/hero/codingcamp.png",
    width: 120,
    height: 120,
    isWideCrop: true,
  },
];

export default function Affiliations() {
  const { language } = useLanguage();

  return (
    <section className="affiliations-strip" aria-label={language === "id" ? "Pengalaman & Afiliasi" : "Experience & Affiliations"}>
      <div className="container">
        <p className="affiliations-heading">
          {language === "id" ? "Pengalaman & Afiliasi" : "Experience & Affiliations"}
        </p>
        <div className="affiliations-grid">
          {AFFILIATIONS.map((item, idx) => (
            <motion.a
              key={item.name}
              href="#experience"
              className="affiliation-card spotlight-card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
              }}
            >
              <div className="affiliation-logo-box">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className={`affiliation-logo-img ${item.isSquare ? "affiliation-logo-img--square" : ""} ${item.isWideCrop ? "affiliation-logo-img--wide" : ""}`}
                />
              </div>
              <div className="affiliation-info">
                <span className="affiliation-name">{item.name}</span>
                <span className="affiliation-role">
                  {language === "id" ? item.roleId : item.roleEn}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
