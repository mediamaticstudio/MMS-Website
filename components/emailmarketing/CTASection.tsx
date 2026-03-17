"use client";

import { motion } from "framer-motion";

const CTASection = () => (
    <section id="cta" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="label-text text-accent flex items-center justify-center gap-2 mb-6">
                    <span className="gold-pip" /> Ready to Grow?
                </span>

                <h2 className="display-heading text-3xl md:text-5xl lg:text-6xl mb-6">
                    Precision Messaging.<br />Quantifiable Growth.
                </h2>

                <p className="body-text text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                    Grow brand performance and conversions with an outcomes-based email marketing system.
                    Our team builds specific campaigns, automated processes, and data-driven strategies
                    for maximum ROI.
                </p>

                <a href="#" className="btn-primary inline-block">
                    Start Your Campaign Today
                </a>
            </motion.div>
        </div>
    </section>
);

export default CTASection;