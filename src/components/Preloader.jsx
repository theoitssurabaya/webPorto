"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
    "Hello",       // EN
    "Halo",        // ID
    "Bonjour",     // FR
    "Ciao",        // IT
    "Hola",        // ES
    "こんにちは"     // JP
];

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Lock scroll on mount
        document.body.style.overflow = "hidden";
        if (typeof window !== "undefined") {
            window.history.scrollRestoration = "manual";
            window.scrollTo(0, 0);
        }

        if (index === greetings.length - 1) {
            setTimeout(() => {
                setIsLoading(false);
                setTimeout(() => {
                    document.body.style.overflow = "";
                }, 800); // Wait for AnimatePresence exit
            }, 800); // Stay on the last greeting a bit longer before exiting
            return;
        }

        const timer = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 800 : 200); // cycle at 200ms

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="preloader"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="preloader-content" style={{ flexDirection: 'row', alignItems: 'center', gap: '15px' }}>
                        <motion.span 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{ 
                                display: "inline-block", 
                                width: "12px", 
                                height: "12px", 
                                backgroundColor: "var(--accent)", 
                                borderRadius: "50%" 
                            }}
                        />
                        <div style={{ overflow: "hidden", display: "flex", alignItems: "center" }}>
                            <motion.h1
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                style={{ 
                                    margin: 0, 
                                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                    fontWeight: "500",
                                    color: "var(--text-main)",
                                    letterSpacing: "0.02em"
                                }}
                            >
                                {greetings[index]}
                            </motion.h1>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
