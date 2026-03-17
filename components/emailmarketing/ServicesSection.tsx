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
    <section id="services" className="section-padding relative overflow-hidden bg-white/30">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20 text-center"
            >
                <span className="block text-base font-black tracking-[0.25em] text-[#652b32]/40 mb-6 uppercase">
                    What We Offer
                </span>

                <h2 className="services-heading font-heading text-5xl md:text-8xl font-black text-[#652b32] text-balance mb-8 tracking-tighter uppercase leading-[0.9]">
                    Email  <br />
                    <span className="text-[#FACC15]">Marketing</span>
                </h2>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {services.map((s) => (
                    <motion.div 
                        key={s.title} 
                        variants={item} 
                        className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/10 group cursor-default relative overflow-hidden"
                    >
                        {/* Hover accent */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#652b32] to-[#9a5a2a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="w-14 h-14 bg-[#652b32]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#652b32] transition-colors duration-500">
                            <s.icon className="text-[#652b32] group-hover:text-white transition-colors duration-500" size={28} strokeWidth={1.5} />
                        </div>

                        <h3 className="text-2xl font-black text-[#652b32] mb-3 group-hover:text-white transition-colors font-heading leading-tight uppercase tracking-tight">
                            {s.title}
                        </h3>

                        <p className="text-[#652b32]/60 text-sm leading-relaxed mb-8 group-hover:text-white/70 transition-colors font-medium">
                            {s.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default ServicesSection;