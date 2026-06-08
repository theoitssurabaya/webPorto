"use client";

import { motion } from "framer-motion";

export default function StackedSection({ children, zIndex }) {
    return (
        <section 
            className="stacked-section" 
            style={{ zIndex }}
        >
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
                <motion.div 
                    className="grid-line-h" 
                    style={{ top: 0 }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {children}
            </div>
        </section>
    );
}
