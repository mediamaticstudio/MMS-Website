"use client";

import { motion } from "framer-motion";
import { Search, CalendarDays, Palette, Zap, Clock, BarChart3 } from "lucide-react";

const services = [
    {
        icon: Search,
        title: "Audience Research & Goal Alignment",
        desc: "We identify customer behavior, preferences and engagement patterns to align every campaign with your growth plans.",
    },
    {
        icon: CalendarDays,
        title: "Campaign Strategy & Planning",
        desc: "A systematic roadmap establishing campaign purpose, content themes, frequency, and segmentation approach.",
    },
    {
        icon: Palette,
        title: "Email Design & Content Creation",
        desc: "Mobile-friendly designs, catchy subject lines and quality messages that represent your brand with conviction.",
    },
    {
        icon: Zap,
        title: "Email Automation & Workflows",
        desc: "Welcome sequences, abandoned cart messages, lead follow-ups, and re-engagement flows — all automated.",
    },
    {
        icon: Clock,
        title: "Smart Scheduling & Execution",
        desc: "Emails delivered at optimal times based on audience behavior to maximize open rates and engagement.",
    },
    {
        icon: BarChart3,
        title: "Performance Optimization & Reporting",
        desc: "Detailed metrics on open rates, click-through rates, and conversions to continuously refine campaigns.",
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const ServicesSection = () => (
    <section id="services" className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <span className="label-text text-accent flex items-center gap-2 mb-4">
                    <span className="gold-pip" /> What We Offer
                </span>

                <h2 className="display-heading text-3xl md:text-5xl max-w-2xl">
                    Email Marketing Services & Campaign Types
                </h2>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {services.map((s) => (
                    <motion.div key={s.title} variants={item} className="card-matte group relative overflow-hidden">
                        {/* Yellow corner pip */}
                        <div className="absolute top-0 right-0 w-1 h-1 bg-accent" />

                        {/* Hover progress bar */}
                        <motion.div
                            className="absolute top-0 left-0 h-0.5 bg-accent"
                            initial={{ width: "0%" }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.4 }}
                        />

                        <s.icon className="text-primary mb-6" size={28} strokeWidth={1.5} />

                        <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                            {s.title}
                        </h3>

                        <p className="body-text text-muted-foreground text-sm">
                            {s.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default ServicesSection;