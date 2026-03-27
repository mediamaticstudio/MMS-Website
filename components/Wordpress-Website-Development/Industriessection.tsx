"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    ShoppingBag,
    GraduationCap,
    Monitor,
    Shield,
    Building2,
    Car,
    HeartPulse,
    Plane,
    Landmark,
    Film,
    Sparkles
} from "lucide-react";

const industries = [
    { icon: ShoppingBag, title: "Retail & E-Commerce", desc: "Powerful WooCommerce ecosystems tailored for high-volume sales and seamless user journeys." },
    { icon: GraduationCap, title: "Education & E-Learning", desc: "Custom LMS (Learning Management Systems) built on WordPress to facilitate global knowledge sharing." },
    { icon: Monitor, title: "SaaS & Digital Platforms", desc: "Integrating WordPress as a robust front-facing content engine for complex digital applications." },
    { icon: Shield, title: "Insurance", desc: "Secure, compliant WordPress portals for document management and customer policy interaction." },
    { icon: Building2, title: "Construction & Estate", desc: "Dynamic property listings and portfolio showcases with advanced filtering and search capabilities." },
    { icon: Car, title: "Automotive", desc: "Scalable platforms for inventory management, scheduling, and digital showroom experiences." },
    { icon: HeartPulse, title: "Healthcare & Pharmacy", desc: "HIPAA-aware designs for patient portals, informational hubs, and appointment scheduling." },
    { icon: Plane, title: "Tours & Travel", desc: "Immersive travel blogs and booking engines with high-speed performance for global audiences." },
    { icon: Landmark, title: "Banking & Finance", desc: "Enterprise-grade security and clean interfaces for fintech informational portals and resource hubs." },
    { icon: Film, title: "Media & Entertainment", desc: "High-performance streaming integrations and news portals designed for heavy traffic and engagement." },
];

const Industriessection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5"
            aria-label="WordPress Industries we serve"
        >
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Specialized WordPress Verticals
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground">
                        Industries Accelerating with
                        <span className="text-primary block mt-2">Next-Gen WordPress</span>
                    </h2>
                    <p className="text-lg text-muted-foreground italic">
                        Bespoke WordPress solutions tailored for your unique industry challenges.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.03 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1rem)]"
                        >
                            <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <industry.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                                </div>

                                <h3 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                                    {industry.title}
                                </h3>

                                <div className={`overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                    <p className="text-muted-foreground text-xs leading-relaxed pt-2">
                                        {industry.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industriessection;