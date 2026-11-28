"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const AFFILIATIONS = [
  {
    name: "PLN Nusantara Power Services",
    roleEn: "Full-Stack Web Developer Intern",
    roleId: "Magang Full-Stack Web Developer",
    logo: "/assets/hero/pln-transparent.png",
    width: 326,
    height: 62,
    logoClass: "affiliation-logo-img--wide",
  },
  {
    name: "Protergo Cyber Security",
    roleEn: "OT Engineer Intern",
    roleId: "Magang OT Engineer",
    logo: "/assets/hero/protergo.png",
    width: 240,
    height: 104,
    logoClass: "affiliation-logo-img--protergo",
  },
  {
    name: "B401 Robotics Lab (ITS)",
    roleEn: "Lab & Practicum Assistant",
    roleId: "Asisten Lab & Praktikum",
    logo: "/assets/hero/b401-transparent.png",
    width: 350,
    height: 252,
    logoClass: "affiliation-logo-img--white",
  },
  {
    name: "Coding Camp by DBS",
    roleEn: "AI Engineer Cohort",
    roleId: "Peserta AI Engineer",
    logo: "/assets/hero/codingcamp-hd.png",
    width: 871,
    height: 190,
    logoClass: "affiliation-logo-img--codingcamp",
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
          {AFFILIATIONS.map((item, idx) => {
            const label = `${item.name} — ${language === "id" ? item.roleId : item.roleEn}`;
            return (
              <motion.a
                key={item.name}
                href="#experience"
                aria-label={label}
                title={label}
                className="affiliation-card"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
              >
                <div className="affiliation-logo-box">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className={`affiliation-logo-img ${item.logoClass || ""}`.trim()}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
