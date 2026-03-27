"use client";

import { motion } from "framer-motion";
import { ClipboardList, PenTool, Code2, TestTube2, Rocket, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: ClipboardList,
        title: "Strategic Discovery",
        desc: "We dive deep into your brand's DNA, analyzing market trends and user behavior to architect a roadmap for success.",
        color: "bg-[#652b32]"
    },
    {
        icon: PenTool,
        title: "Visual Identity",
        desc: "Our designers craft immersive, high-fidelity interfaces that balance aesthetic beauty with conversion-focused UX.",
        color: "bg-[#c13d31]"
    },
    {
        icon: Code2,
        title: "Agile Engineering",
        desc: "Clean, performant code meets cutting-edge technology to build a digital engine that powers your business goals.",
        color: "bg-[#652b32]"
    },
    {
        icon: TestTube2,
        title: "Rigorous Testing",
        desc: "A battery of stress tests across all devices and browsers ensures your platform is bulletproof and lightning fast.",
        color: "bg-[#c13d31]"
    },
    {
        icon: Rocket,
        title: "Elite Launch",
        desc: "Beyond deployment—we provide strategic support to ensure your product thrives in the real world from hour one.",
        color: "bg-[#652b32]"
    },
];

const Processsection = () => {
    return (
        <section className="section-padding bg-white relative overflow-hidden py-20 md:py-24">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#652b32 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />

            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
                            Our Methodology
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#652b32] mb-4 leading-tight tracking-tight">
                            The Path to <span className="text-primary font-serif italic">Digital Dominance</span>
                        </h2>
                        <p className="text-[#652b32]/60 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
                            A battle-tested, systematic approach that transforms raw concepts into
                            unrivaled digital experiences.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[90px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#652b32]/10 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="relative flex flex-col items-center lg:items-start group"
                            >
                                {/* Step Indicator */}
                                <div className="mb-8 relative flex justify-center lg:justify-start w-full">
                                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border border-[#652b32]/5 shadow-lg shadow-[#652b32]/5 flex items-center justify-center text-[#652b32] group-hover:bg-[#652b32] group-hover:text-white transition-all duration-500 overflow-hidden">
                                        <step.icon className="w-6 h-6 relative z-10" strokeWidth={1.5} />
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#c13d31] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <div className="absolute -top-3 -right-1 lg:right-auto lg:left-10 z-20 w-6 h-6 rounded-full bg-[#c13d31] text-white text-[10px] font-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        0{i + 1}
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ y: -3 }}
                                    className="p-5 rounded-2xl bg-[#fff8eb]/50 border border-[#652b32]/5 hover:bg-white hover:shadow-xl hover:shadow-[#652b32]/10 transition-all duration-500 w-full"
                                >
                                    <h3 className="text-base font-black text-[#652b32] mb-2 tracking-tight group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-[#652b32]/60 font-medium leading-relaxed mb-4">
                                        {step.desc}
                                    </p>

                                    <div className="flex items-center gap-2 text-primary font-bold text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        Phase {i + 1} Complete <ArrowRight className="w-3 h-3" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Processsection;