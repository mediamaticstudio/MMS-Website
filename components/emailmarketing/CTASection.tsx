"use client";

import { motion } from "framer-motion";

const CTASection = () => (
    <section id="cta" className="section-padding py-32 px-4">
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gradient-to-br from-[#652b32] to-[#3d1c1c] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(61,28,28,0.4)]"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9a5a2a]/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                    <span className="block text-base font-black tracking-[0.25em] text-white/40 mb-8 uppercase">
                        Ready to Grow?
                    </span>

                    <h2 className="services-heading font-heading text-5xl md:text-8xl font-black text-white text-balance mb-8 tracking-tighter uppercase leading-[0.9]">
                        Precision <br />
                        <span className="text-[#FACC15]">Messaging</span>
                    </h2>

                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        Grow brand performance and conversions with an outcomes-based email marketing system.
                        Our team builds specific campaigns, automated processes, and data-driven strategies
                        for maximum ROI.
                    </p>

                    <a 
                        href="#" 
                        className="bg-[#ccbc29] text-[#652b32] px-14 py-6 rounded-2xl font-black tracking-widest hover:bg-white transition-all text-center uppercase text-sm shadow-[0_4px_20px_rgba(204,188,41,0.4)] hover:shadow-[0_10px_30px_rgba(204,188,41,0.6)] hover:scale-105 active:scale-95 inline-block"
                    >
                        Start Your Campaign Today
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
);

export default CTASection;