"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { projectList } from "@/data/portfolio";
export default function Projects() {
    const { language } = useLanguage();
    const t = translations[language].projects;
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Initialize scroll position to the middle set
        const setInitialScroll = () => {
            if (!carouselRef.current || carouselRef.current.children.length < 10) return;
            const singleSetWidth = carouselRef.current.children[9].offsetLeft - carouselRef.current.children[0].offsetLeft;
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
        let isIntersecting = false;

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

            if (isIntersecting) {
                animationFrameId = requestAnimationFrame(updateScroll);
            }
        };

        const observer = new IntersectionObserver(([entry]) => {
            const wasIntersecting = isIntersecting;
            isIntersecting = entry.isIntersecting;
            if (isIntersecting && !wasIntersecting) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(updateScroll);
            } else if (!isIntersecting) {
                cancelAnimationFrame(animationFrameId);
            }
        }, { threshold: 0.05 });
        observer.observe(carousel);

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
            if (!carousel || carousel.children.length < 10) return;
            const singleSetWidth = carousel.children[9].offsetLeft - carousel.children[0].offsetLeft;

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
            observer.disconnect();
        };
    }, []);

    const extendedList = [...projectList, ...projectList, ...projectList];

    return (
        <section id="projects" className="section projects-section relative">
            <div className="hero-bg-shapes">
                <div className="shape shape-8"></div>
            </div>
            <div className="container relative" style={{ zIndex: 1, maxWidth: "100%", padding: 0 }}>
                <div className="text-center mb-5" style={{ padding: "0 20px", position: "relative" }}>
                    <div className="pixel-sword" style={{ position: 'absolute', top: '5px', left: '20%', zIndex: 15 }}></div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {t.title}
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
                            style={{
                                ...(project.objFit === "contain" && { background: "transparent", borderColor: "transparent", boxShadow: "none" })
                            }}
                        >
                            <Image 
                                src={"/" + project.img} 
                                alt={project.alt} 
                                className="bento-bg" 
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{
                                    ...(project.objPos && { objectPosition: project.objPos }),
                                    ...(project.objFit && { objectFit: project.objFit })
                                }} 
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
