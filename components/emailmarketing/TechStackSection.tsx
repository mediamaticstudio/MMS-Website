"use client";

import { motion } from "framer-motion";

const config = [
    { key: "EMAIL_BACKEND", value: '"django.core.mail.backends.smtp.EmailBackend"' },
    { key: "EMAIL_HOST", value: '"smtp.gmail.com"' },
    { key: "EMAIL_PORT", value: "587" },
    { key: "EMAIL_USE_TLS", value: "True" },
    { key: "EMAIL_HOST_USER", value: '"campaigns@yourdomain.com"' },
    { key: "EMAIL_HOST_PASSWORD", value: '"••••••••••••••••"' },
];

const tools = [
    { name: "Gmail", purpose: "Email service provider" },
    { name: "SMTP", purpose: "Protocol for sending emails" },
    { name: "Gmail App Password", purpose: "Secure authentication" },
    { name: "Django Email Backend", purpose: "Email sending integration" },
    { name: "TLS Encryption", purpose: "Secure email communication" },
];

const TechStackSection = () => (
    <section id="stack" className="section-padding blueprint-bg">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <span className="block text-base font-black tracking-[0.25em] text-[#652b32]/40 mb-6 uppercase">
                    Under The Hood
                </span>

                <h2 className="services-heading font-heading text-5xl md:text-8xl font-black text-[#652b32] text-balance mb-12 tracking-tighter uppercase leading-[0.9]">
                    Technical <br />
                    <span className="text-[#FACC15]">Stack</span>
                </h2>

                <p className="text-lg text-[#652b32]/60 max-w-2xl leading-relaxed font-medium">
                    Built on proven infrastructure for reliable, secure email delivery at scale.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Code snippet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="card-matte p-8 font-mono text-sm"
                >
                    <p className="text-muted-foreground mb-4"># settings.py</p>

                    {config.map((c) => (
                        <div key={c.key} className="mb-1">
                            <span className="text-primary">{c.key}</span>
                            <span className="text-muted-foreground"> = </span>
                            <span className="text-accent">{c.value}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Tools table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="card-matte p-0 overflow-hidden"
                >
                    <div className="px-8 py-6 border-b border-border">
                        <h3 className="text-2xl font-black text-[#652b32] group-hover:text-white transition-colors font-heading leading-tight uppercase tracking-tight">
                            Tools & Tech
                        </h3>
                    </div>

                    {tools.map((t, i) => (
                        <div
                            key={t.name}
                            className={`flex items-center justify-between px-8 py-4 ${i < tools.length - 1 ? "border-b border-border" : ""
                                }`}
                        >
                            <span className="text-lg font-black text-[#652b32] group-hover:text-white transition-colors font-heading leading-tight uppercase tracking-tight">
                                {t.name}
                            </span>

                            <span className="body-text text-muted-foreground text-sm">
                                {t.purpose}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    </section>
);

export default TechStackSection;