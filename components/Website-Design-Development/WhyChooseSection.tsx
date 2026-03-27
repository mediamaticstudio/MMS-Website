"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    ShieldCheck,
    Zap,
    MessageSquare,
    Clock,
    Sparkles,
    ArrowRight,
    Star,
    TrendingUp,
    CheckCircle2,
    HeartHandshake,
    Rocket,
    Target,
    Award,
    Users
} from "lucide-react";

const WhyChooseSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const reasons = [
        {
            icon: ShieldCheck,
            title: "Strategic Approach",
            description: "We don't just build websites; we build business tools. Every design decision is backed by data and driven by your business goals.",
            highlight: "Data-Driven Decisions",
            metrics: "98% Success Rate",
            color: "blue"
        },
        {
            icon: Zap,
            title: "Custom-Built Solutions",
            description: "No templates, no shortcuts. We create custom web applications tailored to your specific needs, providing you with a unique competitive edge.",
            highlight: "100% Custom Code",
            metrics: "2x Faster Delivery",
            color: "orange"
        },
        {
            icon: TrendingUp,
            title: "Performance & Scalability",
            description: "Our websites are built for speed and growth. As your business expands, your digital platform scales with you seamlessly.",
            highlight: "Lightning Fast",
            metrics: "99.9% Uptime",
            color: "green"
        },
        {
            icon: HeartHandshake,
            title: "Transparent Communication",
            description: "Clear, honest partnerships with direct access to our team and regular updates throughout the development lifecycle.",
            highlight: "Real-time Updates",
            metrics: "24/7 Support",
            color: "purple"
        },
        {
            icon: Clock,
            title: "Timely Completion",
            description: "We respect your time with streamlined processes ensuring your project is delivered on schedule without quality compromises.",
            highlight: "On-Time Delivery",
            metrics: "100% Commitment",
            color: "red"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5"
            aria-label="Why choose MediaMatic for website development"
        >
            {/* Accessibility Skip Link */}
            <a
                href="#why-choose-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
            >
                Skip to why choose us content
            </a>

            {/* Modern Background Design */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div id="why-choose-content" className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Why Businesses Trust Us
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Choose Excellence in
                        <span className="block text-primary mt-2">Website Development</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We combine technical expertise with creative vision to deliver websites that don't just look great but actually perform.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="flex flex-wrap justify-center gap-6 mb-20">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
                        >
                            <div className="relative bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300">
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="relative">
                                        <div className="relative w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                            <reason.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-foreground mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                    {reason.description}
                                </p>

                                {/* Metrics Badges */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/5 text-xs font-medium text-primary">
                                        <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                                        {reason.highlight}
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/5 text-xs font-medium text-secondary-foreground">
                                        <Star className="w-3 h-3" aria-hidden="true" />
                                        {reason.metrics}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Card - Yellow Theme without Pulse */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                >
                    {/* Static Background Glow - No Pulse */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 via-amber-500/20 to-orange-500/30 rounded-3xl blur-2xl" aria-hidden="true" />

                    {/* Main Card */}
                    <div className="relative bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-orange-500/10 backdrop-blur-sm rounded-3xl border-2 border-yellow-500/30 shadow-xl overflow-hidden">
                        {/* Decorative Elements - Static */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32" aria-hidden="true" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-32 -translate-x-32" aria-hidden="true" />

                        {/* Content */}
                        <div className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg overflow-hidden p-6 md:p-8">

                            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                                {/* Left */}
                                <div className="flex items-center gap-4 flex-1 text-center lg:text-left">

                                    <div className="relative hidden md:block">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow">
                                            <Rocket className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                            Ready for a WordPress Revolution?
                                        </h3>
                                        <p className="text-muted-foreground text-sm">
                                            Partner with specialists who understand WordPress deeply.
                                        </p>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">

                                    <button className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition shadow">
                                        Get Quote
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                                    </button>

                                    <button className="px-5 py-2.5 rounded-lg border border-primary/20 hover:border-primary/50 text-sm font-medium transition">
                                        Contact
                                    </button>
                                </div>
                            </div>

                            {/* Bottom Stats */}
                            <div className="mt-6 pt-4 border-t border-primary/10 flex flex-wrap justify-center lg:justify-start gap-3 text-xs">

                                <div className="flex items-center gap-1">
                                    <Award className="w-3.5 h-3.5 text-primary" />
                                    <span className="text-muted-foreground">Top Agency</span>
                                </div>

                                <div className="hidden sm:block w-px h-3 bg-primary/20" />

                                <div className="flex items-center gap-1">
                                    <Users className="w-3.5 h-3.5 text-primary" />
                                    <span className="text-muted-foreground">98% Retention</span>
                                </div>

                                <div className="hidden sm:block w-px h-3 bg-primary/20" />

                                <div className="flex items-center gap-1">
                                    <Target className="w-3.5 h-3.5 text-primary" />
                                    <span className="text-muted-foreground">Plugin Experts</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Accessibility Live Region */}
                <div className="sr-only" aria-live="polite" aria-atomic="true">
                    {isInView ? "Why choose us section loaded with 5 key benefits" : "Loading why choose us section"}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;