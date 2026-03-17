"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const industries = [
    "Real Estate", "Travel & Tourism", "Manufacturing", "Automotive",
    "Sports & Fitness", "Energy & Utilities", "Agriculture & AgriTech", "Construction",
    "Legal & Law Firms", "Media & Publishing", "Event Management", "Beauty & Wellness",
    "Logistics & Warehouse", "E-Commerce", "Healthcare", "Education",
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
};

const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

const IndustriesSection = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section id="industries" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="block text-base font-black tracking-[0.25em] text-[#652b32]/40 mb-6 uppercase">
                        Sectors We Serve
                    </span>

                    <h2 className="services-heading font-heading text-5xl md:text-8xl font-black text-[#652b32] text-balance mb-12 tracking-tighter uppercase leading-[0.9]">
                        Industries <br />
                        <span className="text-[#FACC15]">We Power</span>
                    </h2>

                    <p className="text-lg text-[#652b32]/60 max-w-2xl leading-relaxed font-medium">
                        Targeted email strategies designed for the unique communication patterns of every industry.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {industries.map((ind) => (
                        <motion.div
                            key={ind}
                            variants={item}
                            className="border-b border-r border-border px-6 py-5 cursor-default transition-colors duration-200 flex items-center gap-2"
                            onMouseEnter={() => setHovered(ind)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                color: hovered === ind ? "hsl(var(--primary))" : "hsl(var(--foreground))",
                            }}
                        >
                            {hovered === ind && (
                                <motion.span
                                    className="text-accent font-bold"
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    →
                                </motion.span>
                            )}

                            <span className="text-[10px] uppercase tracking-widest px-3 py-1.5 bg-[#652b32]/5 rounded-full text-[#652b32]/60 font-black">
                                {ind}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default IndustriesSection;