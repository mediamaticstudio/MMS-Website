"use client";

import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Audience Segmentation", desc: "Identify and segment subscribers based on demographics, behavior and preferences for highly relevant messaging." },
    { num: "02", title: "Strategic Campaign Planning", desc: "Develop a detailed strategy guaranteeing campaign objectives, messaging, and frequency align with goals." },
    { num: "03", title: "Personalized Communication", desc: "Appeal to subscriber interests with individualized emails that establish closer client relationships." },
    { num: "04", title: "Automation for Efficiency", desc: "Welcome mails, product recommendations and follow-ups — all running automatically for continuity." },
    { num: "05", title: "Data Analysis & Optimization", desc: "Analyze campaign outcomes to optimize strategies, increase engagement and maximize ROI." },
];

const ProcessSection = () => (
    <section className="section-padding py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-24 text-center"
            >
                <span className="block text-base font-black tracking-[0.25em] text-[#652b32]/40 mb-6 uppercase">
                    Our Process
                </span>

                <h2 className="services-heading font-heading text-5xl md:text-8xl font-black text-[#652b32] text-balance mb-12 tracking-tighter uppercase leading-[0.9]">
                    Our <br />
                    <span className="text-[#FACC15]">Process</span>
                </h2>
            </motion.div>

            <div className="space-y-6">
                {steps.map((s, i) => (
                    <motion.div
                        key={s.num}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="group bg-[#faf3e0]/30 hover:bg-[#652b32] p-8 md:p-10 rounded-[2rem] transition-all duration-500 border border-border/5 cursor-default flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden"
                    >
                        <div className="flex-shrink-0 relative">
                            <span className="text-5xl md:text-7xl font-black text-[#652b32]/10 group-hover:text-white/10 transition-colors duration-500">
                                {s.num}
                            </span>
                        </div>

                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-2xl font-black text-[#652b32] mb-3 group-hover:text-white transition-colors font-heading leading-tight uppercase tracking-tight">
                                {s.title}
                            </h3>
                            <p className="text-[#652b32]/60 text-sm md:text-base leading-relaxed group-hover:text-white/70 transition-colors font-medium">
                                {s.desc}
                            </p>
                        </div>

                        <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           <div className="w-16 h-16 rounded-full border-2 border-[#ccbc29] flex items-center justify-center">
                               <span className="text-[#ccbc29] text-2xl">→</span>
                           </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default ProcessSection;