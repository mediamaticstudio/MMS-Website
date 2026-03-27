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
    Sparkles,
    ArrowRight
} from "lucide-react";

const industries = [
    { icon: ShoppingBag, title: "Retail & E-Commerce", desc: "Scalable online apps that increase engagement, optimize orders, and drive revenue." },
    { icon: GraduationCap, title: "Education & E-Learning", desc: "Comprehensive online learning solutions with tracking and engagement tools." },
    { icon: Monitor, title: "SaaS & Digital Platforms", desc: "Cutting-edge, secure systems that connect users and build vibrant communities." },
    { icon: Shield, title: "Insurance", desc: "Digitization services that increase efficiency, lower costs, and improve customer experience." },
    { icon: Building2, title: "Construction & Estate", desc: "Property management, listing solutions, and real-time market analysis." },
    { icon: Car, title: "Automotive", desc: "Custom automobile software solutions designed for efficiency and innovation." },
    { icon: HeartPulse, title: "Healthcare & Pharmacy", desc: "Practice management, EHRs, telemedicine, billing, and insurance verification." },
    { icon: Plane, title: "Tours & Travel", desc: "Strategic technology solutions for hospitality clients with proven methodology." },
    { icon: Landmark, title: "Banking & Finance", desc: "Secure, scalable web apps for trading, online banking, and loan management." },
    { icon: Film, title: "Media & Entertainment", desc: "Streaming, editing, gaming, and cross-platform experiences for digital audiences." },
];

const Industriessection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5"
            aria-label="Industries we serve"
        >
            {/* Skip Link */}
            <a
                href="#industries-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
            >
                Skip to industries content
            </a>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            <div id="industries-content" className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Industries We Serve
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                        Business Domains
                        <span className="text-primary block mt-2">We Serve</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Tailored solutions for diverse industries
                    </p>
                </motion.div>

                {/* Industries Flex Container */}
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
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <industry.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                                </div>

                                {/* Title */}
                                <h3 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                                    {industry.title}
                                </h3>

                                {/* Description - Animated */}
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

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    {/* <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 p-8">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                            Ready to Transform Your Industry Presence?
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Let's discuss how our expertise can help your business thrive in the digital landscape
                        </p>
                        <button
                            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
                            aria-label="Start your project"
                        >
                            Start Your Project
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </button>
                    </div> */}
                </motion.div>

                {/* Accessibility */}
                <div className="sr-only" aria-live="polite" aria-atomic="true">
                    {isInView ? `Industries section loaded with ${industries.length} industries` : "Loading industries section"}
                </div>
            </div>
        </section>
    );
};

export default Industriessection;