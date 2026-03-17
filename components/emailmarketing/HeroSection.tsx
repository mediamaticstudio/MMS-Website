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
            className="section-padding pt-32 md:pt-40 min-h-screen flex items-center"
            onMouseMove={handleMouseMove}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="label-text text-accent mb-4 inline-flex items-center gap-2">
                        <span className="gold-pip" />
                        Best Email Marketing Service
                    </span>

                    <h1 className="display-heading text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                        Best Email Marketing Service for High-Converting Business Campaigns
                    </h1>

                    <p className="body-text text-muted-foreground text-lg md:text-xl max-w-lg mb-8">
                        The Best email marketing service will support the brands to deliver one-on-one messages, automate the communication process and ensure that the customer is interested in the process. A credible email marketing system helps the firm to create targeted advertisements that transform subscribers into regular consumers besides increasing brand awareness.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#cta" className="btn-primary text-center">
                            Start Your Campaign
                        </a>

                        <a
                            href="#services"
                            className="label-text text-primary border border-primary px-8 py-4 rounded-sm hover:bg-primary hover:text-primary-foreground transition-all text-center"
                        >
                            Our Services
                        </a>
                    </div>

                    <div className="flex gap-8 mt-12">
                        {[
                            { value: "42.8%", label: "Avg Open Rate" },
                            { value: "500+", label: "Campaigns Sent" },
                            { value: "13x", label: "Avg ROI" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p className="display-heading text-2xl md:text-3xl text-primary tabular-nums">
                                    {stat.value}
                                </p>
                                <p className="label-text text-muted-foreground mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right */}
                <motion.div
                    className="flex justify-center lg:justify-end"
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div 
                        className="card-matte p-6 md:p-8 overflow-hidden max-w-md w-full flex flex-col gap-6 shadow-2xl relative border-l border-t border-border/50 bg-background/5" 
                        aria-label="best email marketing service campaign strategy dashboard" 
                        role="img"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-2 z-10 relative">
                            <div>
                                <h3 className="text-primary font-sans font-semibold text-xl tracking-tight">Campaign Strategy</h3>
                                <p className="text-sm text-muted-foreground mt-1">Live Dashboard Overview</p>
                            </div>
                            <div className="bg-accent/10 px-3 py-1.5 rounded-sm text-accent text-xs font-bold uppercase tracking-wider border border-accent/20">
                                Active
                            </div>
                        </div>

                        {/* Top Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-2 z-10 relative">
                            <div className="bg-muted/80 backdrop-blur-sm p-5 rounded-sm text-left border border-border/50 hover:border-accent/50 transition-colors">
                                <Mail className="text-accent mb-3" size={24} strokeWidth={1.5} />
                                <div className="text-3xl font-bold text-primary mb-1">45.2%</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Open Rate</div>
                            </div>
                            <div className="bg-muted/80 backdrop-blur-sm p-5 rounded-sm text-left border border-border/50 hover:border-primary/50 transition-colors">
                                <Send className="text-primary mb-3" size={24} strokeWidth={1.5} />
                                <div className="text-3xl font-bold text-primary mb-1">12.5%</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Click Rate</div>
                            </div>
                        </div>

                        {/* Journey/Progress Bars */}
                        <div className="space-y-5 mt-2 z-10 relative bg-muted/40 p-5 rounded-sm border border-border/30">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground font-medium">
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