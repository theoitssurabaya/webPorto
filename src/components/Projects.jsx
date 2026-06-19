"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function Projects() {
    const { language } = useLanguage();
    const t = translations[language].projects;
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Initialize scroll position to the middle set
        const setInitialScroll = () => {
            if (!carouselRef.current || carouselRef.current.children.length < 9) return;
            const singleSetWidth = carouselRef.current.children[8].offsetLeft - carouselRef.current.children[0].offsetLeft;
            if (carouselRef.current.scrollLeft === 0) {
                carouselRef.current.scrollLeft = singleSetWidth;
                targetScroll = singleSetWidth;
            }
        };
        setTimeout(setInitialScroll, 100);

        let targetScroll = 0;
        let scrollRemainder = 0;
        let isHovered = false;
        let isWheeling = false;
        let isNativeScrolling = false;
        let wheelTimeout;
        let animationFrameId;

        const updateScroll = () => {
            if (!carouselRef.current) return;

            const currentScroll = carouselRef.current.scrollLeft;
            const diff = targetScroll - currentScroll;

            // 1. Auto-scroll logic
            if (!isHovered && !isWheeling && !isNativeScrolling) {
                carouselRef.current.scrollLeft += 1;
                targetScroll = carouselRef.current.scrollLeft;
                scrollRemainder = 0;
            } 
            // 2. JS Lerp logic (ONLY when using vertical mouse wheel)
            else if (isWheeling) {
                if (Math.abs(diff) > 0.5) {
                    const step = diff * 0.08 + scrollRemainder;
                    const intStep = Math.trunc(step);
                    scrollRemainder = step - intStep;

                    if (intStep !== 0) {
                        carouselRef.current.scrollLeft += intStep;
                    }
                }
            } 
            // 3. Native tracking (Trackpad swipe / Touch swipe)
            else {
                scrollRemainder = 0;
                targetScroll = currentScroll; // Keep target perfectly in sync with native scroll
            }

            animationFrameId = requestAnimationFrame(updateScroll);
        };

        // Start the loop
        animationFrameId = requestAnimationFrame(updateScroll);

        const handleWheel = (e) => {
            // Trackpad horizontal swipe
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                isNativeScrolling = true;
                clearTimeout(wheelTimeout);
                wheelTimeout = setTimeout(() => {
                    isNativeScrolling = false;
                }, 100);
                // Do NOT call e.preventDefault(). Let native trackpad do its magic!
                return;
            }

            // Mouse vertical wheel -> map to horizontal scroll
            if (e.deltaY !== 0) {
                e.preventDefault();
                isWheeling = true;
                clearTimeout(wheelTimeout);
                wheelTimeout = setTimeout(() => {
                    isWheeling = false;
                }, 100);

                // Multiplier increased to 3.5 for comfortable mouse scrolling
                targetScroll += e.deltaY * 3.5;
            }
        };

        const handleScroll = () => {
            if (!carousel || carousel.children.length < 9) return;
            const singleSetWidth = carousel.children[8].offsetLeft - carousel.children[0].offsetLeft;

            if (carousel.scrollLeft <= 0) {
                carousel.scrollLeft += singleSetWidth;
                targetScroll += singleSetWidth;
            } else if (carousel.scrollLeft >= singleSetWidth * 2) {
                carousel.scrollLeft -= singleSetWidth;
                targetScroll -= singleSetWidth;
            }
        };

        const handleMouseEnter = () => isHovered = true;
        const handleMouseLeave = () => {
            isHovered = false;
            targetScroll = carousel.scrollLeft;
            scrollRemainder = 0;
        };

        const handleTouchStart = () => isHovered = true;
        const handleTouchEnd = () => {
            isHovered = false;
            targetScroll = carousel.scrollLeft;
        };

        carousel.addEventListener("wheel", handleWheel, { passive: false });
        carousel.addEventListener("scroll", handleScroll, { passive: true });
        carousel.addEventListener("mouseenter", handleMouseEnter);
        carousel.addEventListener("mouseleave", handleMouseLeave);
        carousel.addEventListener("touchstart", handleTouchStart, { passive: true });
        carousel.addEventListener("touchend", handleTouchEnd, { passive: true });

        return () => {
            carousel.removeEventListener("wheel", handleWheel);
            carousel.removeEventListener("scroll", handleScroll);
            carousel.removeEventListener("mouseenter", handleMouseEnter);
            carousel.removeEventListener("mouseleave", handleMouseLeave);
            carousel.removeEventListener("touchstart", handleTouchStart);
            carousel.removeEventListener("touchend", handleTouchEnd);
            cancelAnimationFrame(animationFrameId);
            clearTimeout(wheelTimeout);
        };
    }, []);

    const projectList = [
        {
            key: "proj1",
            link: "https://github.com/theoitssurabaya/Bird-Shooter-Game-ESP32",
            img: "assets/bird-shooter-esp32.jpeg",
            alt: "Bird Shooter ESP32",
            objPos: "center center",
            tags: ["C++", "Electrical Wiring", "ESP32"]
        },
        {
            key: "proj2",
            link: "https://github.com/theoitssurabaya/PZEM-AnomalyDetector",
            img: "assets/pzem-anomaly-detector.jpeg",
            alt: "PZEM Anomaly Detector",
            tags: ["RTOS", "Machine Learning", "Node-RED"]
        },
        {
            key: "proj4",
            link: "https://github.com/theoitssurabaya/Soil-Monitoring-Controlled-Irrigation",
            img: "assets/smart-irrigation.jpeg",
            alt: "Smart Irrigation",
            tags: ["ESP32", "ML", "Raspberry Pi"]
        },
        {
            key: "proj3",
            link: "https://github.com/theoitssurabaya/distance_target_game_project",
            img: "assets/distance-target-game.png",
            alt: "Distance Target Game",
            objPos: "left center",
            tags: ["Node.js", "ESP32", "IoT"]
        },
        {
            key: "proj6",
            link: "https://github.com/theoitssurabaya/PERISAI",
            img: "assets/PERISAI.png",
            alt: "PERISAI",
            tags: ["React", "Node.js", "FastAPI"]
        },
        {
            key: "proj5",
            link: "https://github.com/theoitssurabaya/Smart-Dispenser-IoT",
            img: "assets/smart-dispenser-iot.jpeg",
            alt: "Smart Dispenser IoT",
            tags: ["Flutter", "ESP32", "IoT"]
        },
        {
            key: "proj7",
            link: "https://github.com/theoitssurabaya/Fully-Autonomous-ESP32-Robotic-Vehicle",
            img: "assets/fully-autonomous-esp32-robotic-vehicle.jpeg",
            alt: "Fully Autonomous ESP32 Robotic Vehicle",
            objPos: "center 60%",
            tags: ["C++", "ESP32", "Electrical Wiring"]
        },
        {
            key: "proj8",
            link: "https://github.com/theoitssurabaya/Wayfinder",
            img: "assets/wayfinder.png",
            alt: "Wayfinder",
            tags: ["React", "Firebase", "NLP"]
        }
    ];

    const extendedList = [...projectList, ...projectList, ...projectList];

    return (
        <section id="projects" className="section projects-section relative">
            <div className="hero-bg-shapes">
                <div className="shape shape-8"></div>
            </div>
            <div className="container relative" style={{ zIndex: 1, maxWidth: "100%", padding: 0 }}>
                <div className="text-center mb-5" style={{ padding: "0 20px" }}>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {t.title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="gradient-text">{t.title.split(' ').slice(-1)}</span>
                    </motion.h2>
                </div>

                <motion.div 
                    className="projects-carousel" 
                    ref={carouselRef} 
                    data-lenis-prevent="true"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {extendedList.map((project, index) => (
                        <a
                            key={`${project.key}-${index}`}
                            href={project.link}
                            target="_blank"
                            className="bento-card carousel-card"
                        >
                            <img 
                                src={project.img} 
                                alt={project.alt} 
                                className="bento-bg" 
                                style={project.objPos ? { objectPosition: project.objPos } : {}} 
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="bento-overlay"></div>
                            <div className="bento-content">
                                <div className="bento-text">
                                    <h3>{t[project.key].title}</h3>
                                    <p>{t[project.key].desc}</p>
                                    <div className="tech-stack">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tech-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
