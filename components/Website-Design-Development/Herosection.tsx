"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Rocket, Headphones } from "lucide-react";

const highlights = [
    { icon: Code2, label: "Full-Stack Dev" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Rocket, label: "Performance" },
    { icon: Headphones, label: "24/7 Support" },
];

const Herosection = () => {
    return (
        <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="max-w-3xl text-left">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                    >
                        Website Design & Development
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-foreground"
                    >
                        We Build Websites That{" "}
                        <span className="text-primary">Drive Growth</span> &{" "}
                        <span className="text-secondary">Results</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
                    >
                        MediaMatic is a group of thinkers, experienced designers, and the
                        best developers who create outstanding websites, mobile applications,
                        and e-commerce platforms tailored to your brand.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap gap-4 justify-start mb-16"
                    >
                        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-4 rounded-xl font-medium transition-colors">
                            Get Started <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary/5 text-base px-8 py-4 rounded-xl font-medium transition-colors">
                            Our Work
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-wrap justify-start gap-3"
                >
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border/60 hover:border-secondary hover:shadow-md transition-all duration-300"
                        >
                            <item.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">{item.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Herosection;