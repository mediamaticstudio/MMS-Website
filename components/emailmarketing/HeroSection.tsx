"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Mail, Send, Users, BarChart } from "lucide-react";

const HeroSection = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    return (
        <section
            className="section-padding pt-32 md:pt-40 min-h-screen flex items-center relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(101,43,50,0.05),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(154,90,42,0.05),transparent_50%)]"
            onMouseMove={handleMouseMove}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="block text-base font-black tracking-[0.25em] text-[#652b32]/40 mb-6 uppercase">
                        Best Email Marketing Service
                    </span>

                    <h1 className="display-heading text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase text-[#652b32]">
                        High-converting <br /> campaigns
                    </h1>

                    <p className="body-text text-lg md:text-xl text-[#652b32]/60 max-w-2xl mt-8 mb-10 leading-relaxed font-medium">
                        One-on-one messaging, automated. Built on a Django-Gmail backbone. We build the list. We segment the data. You see the ROI.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mb-20">
                        <a 
                            href="#cta" 
                            className="bg-[#652b32] text-white px-10 py-5 rounded-[2rem] font-black tracking-[0.1em] hover:bg-[#4d2126] transition-all text-center uppercase text-xs"
                        >
                            Start Your Campaign
                        </a>

                        <a
                            href="#services"
                            className="border-2 border-[#652b32] text-[#652b32] px-10 py-5 rounded-[2rem] font-black tracking-[0.1em] hover:bg-[#652b32] hover:text-white transition-all text-center uppercase text-xs"
                        >
                            Our Services
                        </a>
                    </div>

                    <div className="flex gap-8 mt-12">
                    <div className="flex gap-8 mt-12">
                        {[
                            { value: "42.8%", label: "AVG OPEN RATE" },
                            { value: "500+", label: "CAMPAIGNS SENT" },
                            { value: "13x", label: "AVG ROI" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="font-heading text-2xl md:text-3xl font-black text-[#652b32] tabular-nums">
                                    {stat.value}
                                </p>
                                <p className="text-[10px] uppercase tracking-widest text-[#652b32]/40 font-black mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    className="flex justify-center lg:justify-end"
                    style={{ rotateX, rotateY, perspective: 1200 }}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div 
                        className="card-matte p-8 md:p-10 overflow-hidden max-w-lg w-full flex flex-col gap-8 shadow-2xl relative border border-white/20 bg-white/40 backdrop-blur-xl rounded-[2rem]" 
                        aria-label="best email marketing service campaign strategy dashboard" 
                        role="img"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-2 z-10 relative">
                            <div>
                                <h3 className="text-[#652b32] font-black text-2xl leading-[0.9] tracking-tighter uppercase">Campaign Strategy</h3>
                                <p className="text-sm text-[#652b32]/60 mt-1 font-medium italic">Live Dashboard Overview</p>
                            </div>
                            <div className="bg-[#ccbc29]/20 px-4 py-2 rounded-full text-[#9a5a2a] text-xs font-black uppercase tracking-widest border border-[#cc29]/30">
                                Active
                            </div>
                        </div>

                        {/* Top Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-2 z-10 relative">
                            <div className="bg-muted/80 backdrop-blur-sm p-5 rounded-sm text-left border border-border/50 hover:border-accent/50 transition-colors">
                                <Mail className="text-accent mb-3" size={24} strokeWidth={1.5} />
                                <div className="text-3xl font-bold text-primary mb-1">45.2%</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-black">Open Rate</div>
                            </div>
                            <div className="bg-muted/80 backdrop-blur-sm p-5 rounded-sm text-left border border-border/50 hover:border-primary/50 transition-colors">
                                <Send className="text-primary mb-3" size={24} strokeWidth={1.5} />
                                <div className="text-3xl font-bold text-primary mb-1">12.5%</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-black">Click Rate</div>
                            </div>
                        </div>

                        {/* Journey/Progress Bars */}
                        <div className="space-y-5 mt-2 z-10 relative bg-muted/40 p-5 rounded-sm border border-border/30">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground font-black">
                                        <Users size={16} className="text-primary" /> Active Subscribers
                                    </div>
                                    <div className="font-semibold text-primary">12,450</div>
                                </div>
                                <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden border border-border/50">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: "75%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="bg-primary h-2 rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground font-medium">
                                        <BarChart size={16} className="text-accent" /> Conversion Rate
                                    </div>
                                    <div className="font-semibold text-primary">6.8%</div>
                                </div>
                                <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden border border-border/50">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: "60%" }}
                                        transition={{ duration: 1.5, delay: 0.7 }}
                                        className="bg-accent h-2 rounded-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Faded Background Graph Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-primary/5 opacity-50 pointer-events-none rounded-inherit"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 blur-[60px] rounded-full pointer-events-none"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;