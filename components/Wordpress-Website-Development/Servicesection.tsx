"use client";

import { motion } from "framer-motion";
import { Target, Users, Gauge, Shield, Headphones, Lightbulb } from "lucide-react";

const standOutItems = [
    { icon: Target, title: "Custom WordPress Strategies", desc: "We align your WordPress site with your specific business goals, ensuring every feature serves a purpose in your growth journey." },
    { icon: Users, title: "Elite Theme & Plugin Developers", desc: "Our team consists of WordPress veterans who specialize in writing efficient, secure, and highly-customizable code." },
    { icon: Lightbulb, title: "Advanced UI/UX Customization", desc: "We push beyond the limits of standard themes to create truly immersive user experiences that reflect your brand identity." },
    { icon: Gauge, title: "Optimized Speed & Performance", desc: "We utilize advanced caching, image optimization, and clean coding practices to ensure your WordPress site is lightning fast." },
    { icon: Headphones, title: "Comprehensive Support & Maintenance", desc: "Rest easy with our ongoing maintenance plans that cover security updates, backups, and performance monitoring." },
    { icon: Shield, title: "Hardened Security Protocols", desc: "We implement multi-layered security measures to protect your WordPress site from vulnerabilities and external threats." },
];

const Servicesection = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-primary/5">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 md:mb-10"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-primary text-xs font-medium mb-3 md:mb-4">
                        The MediaMatic Edge
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                        How Our WordPress <span className="text-primary">Stands Out</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                        Why we are the preferred choice for professional WordPress development
                    </p>
                </motion.div>

                <div className="space-y-0">
                    {standOutItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            className="group flex items-start gap-4 py-5 md:py-6 border-b border-border/40 last:border-b-0 hover:pl-3 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-primary/10 group-hover:bg-secondary group-hover:scale-105 flex items-center justify-center transition-all duration-300">
                                <item.icon className="w-5 h-5 text-primary group-hover:text-secondary-foreground transition-colors" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-[10px] font-bold text-secondary tracking-wider uppercase">0{i + 1}</span>
                                    <div className="h-px flex-1 bg-border/30 max-w-[50px]" />
                                </div>
                                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-xl">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicesection;