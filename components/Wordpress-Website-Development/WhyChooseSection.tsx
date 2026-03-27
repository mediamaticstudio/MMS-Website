"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    ShieldCheck,
    Zap,
    TrendingUp,
    HeartHandshake,
    Clock,
    Sparkles,
    ArrowRight,
    Star,
    CheckCircle2,
    Rocket,
    Award,
    Users,
    Target
} from "lucide-react";

const WhyChooseSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const reasons = [
        {
            icon: ShieldCheck,
            title: "Customized Strategy",
            description: "We don't just use templates. We build WordPress solutions that align perfectly with your business goals and user needs.",
            highlight: "Bespoke Development",
            metrics: "99% Goal Alignment",
            color: "blue"
        },
        {
            icon: Zap,
            title: "Performance First",
            description: "Speed is critical for SEO and conversion. Our WordPress sites are optimized for core web vitals and rapid loading times.",
            highlight: "Grade A Speed",
            metrics: "2x Faster Loading",
            color: "orange"
        },
        {
            icon: TrendingUp,
            title: "Scalable Architecture",
            description: "Whether you have 10 products or 10,000, our WordPress and WooCommerce builds are designed to scale smoothly.",
            highlight: "Future-Ready Build",
            metrics: "Enterprise Scale",
            color: "green"
        },
        {
            icon: HeartHandshake,
            title: "Dedicated Support",
            description: "From security patching to performance tuning, we provide ongoing maintenance to keep your WordPress site at its peak.",
            highlight: "24/7 Monitoring",
            metrics: "Proactive Care",
            color: "purple"
        },
        {
            icon: Clock,
            title: "Rapid Deployment",
            description: "Our streamlined development process ensures your WordPress project moves from concept to launch with maximum efficiency.",
            highlight: "Efficient Delivery",
            metrics: "100% On-Time",
            color: "red"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5"
            aria-label="Why choose MediaMatic for WordPress development"
        >
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-wp" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-wp)" />
                </svg>
            </div>

            <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            The MediaMatic Standard
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Why Choose Our
                        <span className="block text-primary mt-2">WordPress Agency</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We transform the world's most versatile CMS into a powerful, high-performance engine for your business growth.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 mb-20">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
                        >
                            <div className="relative bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 group hover:border-primary/30">
                                <div className="mb-6">
                                    <div className="relative w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <reason.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{reason.description}</p>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/5 text-xs font-medium text-primary uppercase">
                                        <CheckCircle2 className="w-3 h-3" /> {reason.highlight}
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/5 text-xs font-medium text-secondary italic">
                                        <Star className="w-3 h-3" /> {reason.metrics}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-3xl blur-2xl opacity-50" aria-hidden="true" />

                    <div className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 backdrop-blur-sm rounded-3xl border-2 border-primary/20 shadow-xl overflow-hidden p-8 md:p-12">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-6 flex-1 text-center lg:text-left">
                                <div className="relative hidden md:block">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                                        <Rocket className="w-10 h-10 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                                        Ready for a WordPress Revolution?
                                    </h3>
                                    <p className="text-muted-foreground text-lg italic">
                                        Partner with specialists who understand the intricate heartbeat of WordPress.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                                <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:scale-105 active:scale-95">
                                    Get Quote Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 rounded-xl border-2 border-primary/20 hover:border-primary/50 text-foreground font-semibold transition-all">
                                    Speak to Specialist
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-primary/10 flex flex-wrap justify-center lg:justify-start gap-4">
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-primary" />
                                <span className="text-xs text-muted-foreground font-medium">Top WordPress Agency 2025</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-primary/20" />
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="text-xs text-muted-foreground font-medium">98% Retention Rate</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-primary/20" />
                            <div className="flex items-center gap-2">
                                <Target className="w-4 h-4 text-primary" />
                                <span className="text-xs text-muted-foreground font-medium">Custom Plugin Experts</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
