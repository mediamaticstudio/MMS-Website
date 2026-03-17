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
    <section className="section-padding">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="label-text text-accent flex items-center gap-2 mb-4">
                    <span className="gold-pip" /> Our Process
                </span>

                <h2 className="display-heading text-3xl md:text-5xl max-w-2xl">
                    How Email Marketing Drives Business Performance
                </h2>
            </motion.div>

            <div className="space-y-0">
                {steps.map((s, i) => (
                    <motion.div
                        key={s.num}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="grid grid-cols-12 gap-4 py-8 border-b border-border group"
                    >
                        <div className="col-span-2 md:col-span-1">
                            <span className="display-heading text-2xl text-accent">{s.num}</span>
                        </div>

                        <div className="col-span-10 md:col-span-3">
                            <h3 className="font-sans font-semibold text-primary text-lg group-hover:translate-x-1 transition-transform">
                                {s.title}
                            </h3>
                        </div>

                        <div className="col-span-12 md:col-span-8">
                            <p className="body-text text-muted-foreground">{s.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default ProcessSection;