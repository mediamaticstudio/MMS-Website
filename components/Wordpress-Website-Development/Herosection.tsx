"use client";

import { motion } from "framer-motion";
import { ArrowRight, Settings, Layout, Zap, Headphones } from "lucide-react";
import Link from "next/link";

const highlights = [
    { icon: Settings, label: "Custom Plugins" },
    { icon: Layout, label: "Theme Design" },
    { icon: Zap, label: "Speed Optimized" },
    { icon: Headphones, label: "24/7 Support" },
];

const Herosection = () => {
    return (
        <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary/20 blur-3xl opacity-50" />
            <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" />

            <div className="container mx-auto max-w-7xl relative z-10 px-4 md:px-6">
                <div className="max-w-3xl text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        WordPress Website Development
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-8 text-foreground tracking-tight"
                    >
                        Building Powerful <br />
                        <span className="text-primary italic font-serif">WordPress</span>{" "}
                        <span className="text-secondary">Solutions</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium"
                    >
                        The age of WordPress is here. We develop stunning, high-performance
                        WordPress websites, eCommerce platforms, and custom plugins tailored
                        to elevate your digital presence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap gap-4 justify-start mb-16"
                    >
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/20">
                            Start Your Project <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/work" className="inline-flex items-center gap-2 bg-background border-2 border-primary/20 text-foreground hover:border-primary/50 text-base px-8 py-4 rounded-xl font-bold transition-all hover:bg-primary/5">
                            Our Portfolio
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-wrap justify-start gap-3"
                >
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
                        >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <item.icon className="w-4 h-4 text-primary" strokeWidth={2.5} />
                            </div>
                            <span className="text-sm font-bold text-foreground/80">{item.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Herosection;