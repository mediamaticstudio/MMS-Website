"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const Ctasection = () => {
    return (
        <section className="relative overflow-hidden bg-primary py-16 md:py-20 lg:py-24">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />

            <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-4 inline-block"
                    >
                        <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-sm">
                            Unlock Your WordPress Potential
                        </span>
                    </motion.div>

                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                        Ready to Build Your{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-secondary italic">
                                WordPress Powerhouse?
                            </span>
                            <span className="absolute bottom-1 left-0 right-0 h-2 bg-secondary/30 rounded-full -z-0 sm:bottom-2 md:h-3" />
                        </span>
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl text-sm text-primary-foreground/80 sm:text-base md:mb-10 md:text-lg">
                        Let's collaborate to create a WordPress experience that not only looks stunning
                        but delivers unrivaled performance and results. Contact us today.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-md transition-all duration-300 hover:bg-secondary/90 hover:shadow-lg sm:px-8 sm:py-3.5 sm:text-base"
                        >
                            Start Your Project
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50 sm:px-8 sm:py-3.5 sm:text-base"
                        >
                            <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                            Schedule a Strategy Call
                        </motion.button>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-8 text-xs text-primary-foreground/50 sm:mt-10 sm:text-sm"
                    >
                        No obligation • Free discovery session • 24h response time
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Ctasection;