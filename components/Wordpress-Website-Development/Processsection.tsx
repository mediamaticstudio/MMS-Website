"use client";

import { motion } from "framer-motion";
import { ClipboardList, PenTool, Code2, TestTube2, Rocket, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: ClipboardList,
        title: "Platform Discovery",
        desc: "We analyze your existing setup or vision to select the optimal WordPress framework and plugin ecosystem for your goals.",
        color: "bg-[#652b32]"
    },
    {
        icon: PenTool,
        title: "Bespoke Design",
        desc: "Our design team crafts custom WordPress layouts that prioritize brand aesthetics without compromising on performance.",
        color: "bg-[#c13d31]"
    },
    {
        icon: Code2,
        title: "Core Engineering",
        desc: "We develop custom themes and integrate essential plugins using clean, standards-compliant WordPress coding practices.",
        color: "bg-[#652b32]"
    },
    {
        icon: TestTube2,
        title: "Quality Assurance",
        desc: "A rigorous performance and security audit ensures your WordPress site is responsive, safe, and lightning fast at launch.",
        color: "bg-[#c13d31]"
    },
    {
        icon: Rocket,
        title: "Deployment & Growth",
        desc: "After a smooth launch, we provide the training and support needed to manage and grow your WordPress content easily.",
        color: "bg-[#652b32]"
    },
];

const Processsection = () => {
    return (
        <section className="section-padding bg-white relative overflow-hidden py-32">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(#652b32 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />

            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-6 block">
                            Our Methodology
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#652b32] mb-8 leading-tight tracking-tight">
                            The Path to <span className="text-primary font-serif italic">WordPress Excellence</span>
                        </h2>
                        <p className="text-[#652b32]/60 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                            A systematic, battle-tested approach that transforms simple installs into elite business tools.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#652b32]/10 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="relative flex flex-col items-center lg:items-start group px-2"
                            >
                                <div className="mb-12 relative flex justify-center lg:justify-start w-full">
                                    <div className="relative z-10 w-20 h-20 rounded-[2rem] bg-white border border-[#652b32]/5 shadow-xl shadow-[#652b32]/5 flex items-center justify-center text-[#652b32] group-hover:bg-[#652b32] group-hover:text-white transition-all duration-500 overflow-hidden">
                                        <step.icon className="w-8 h-8 relative z-10" strokeWidth={1.5} />
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#c13d31] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <div className="absolute -top-4 -right-2 lg:right-auto lg:left-14 z-20 w-8 h-8 rounded-full bg-[#c13d31] text-white text-xs font-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        0{i + 1}
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-8 rounded-[2.5rem] bg-[#fff8eb]/50 border border-[#652b32]/5 hover:bg-white hover:shadow-2xl hover:shadow-[#652b32]/10 transition-all duration-500 w-full"
                                >
                                    <h3 className="text-xl font-black text-[#652b32] mb-4 tracking-tight group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-[#652b32]/60 font-medium leading-relaxed mb-6">
                                        {step.desc}
                                    </p>

                                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
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