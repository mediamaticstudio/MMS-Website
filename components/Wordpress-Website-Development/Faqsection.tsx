"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Why should I use WordPress for my business website?",
        answer: "WordPress is the most popular CMS globally due to its versatility, SEO-friendliness, and massive ecosystem of themes and plugins that allow for rapid, scalable development."
    },
    {
        question: "Can you create custom plugins and themes?",
        answer: "Yes, we specialize in high-end, custom WordPress development, building bespoke themes and plugins from scratch rather than relying on bloated pre-made templates."
    },
    {
        question: "Is WordPress secure for enterprise use?",
        answer: "Absolutely. When properly configured with advanced security protocols, regular updates, and high-quality coding practices, WordPress is a highly secure platform used by Fortune 500 companies."
    },
    {
        question: "Will my WordPress site be easy to manage myself?",
        answer: "Yes, one of the primary benefits of WordPress is its intuitive dashboard. We also provide customized Gutenberg blocks and training to make content updates effortless for your team."
    },
    {
        question: "Do you offer maintenance and support after launch?",
        answer: "We offer comprehensive WordPress maintenance plans that include security monitoring, core/plugin updates, regular backups, and performance optimization to keep your site running at its peak."
    }
];

const FaqSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 bg-background overflow-hidden"
        >
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-24"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="text-sm font-semibold text-primary tracking-wider">
                                WordPress FAQs
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground">
                            Common <br />
                            WordPress <br />
                            <span className="text-primary italic">Inquiries</span>
                        </h2>

                        <p className="mt-6 text-muted-foreground max-w-md">
                            Everything you need to know about our elite WordPress development process.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`border-b pb-4 transition-all duration-300 ${activeIndex === index
                                        ? "border-primary"
                                        : "border-border/50 hover:border-primary/40"
                                    }`}
                            >
                                <button
                                    onClick={() =>
                                        setActiveIndex(activeIndex === index ? null : index)
                                    }
                                    className="w-full flex justify-between items-center text-left"
                                >
                                    <span className="text-lg font-medium text-foreground">
                                        {faq.question}
                                    </span>

                                    <div
                                        className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all ${activeIndex === index
                                                ? "bg-primary text-white"
                                                : "bg-transparent"
                                            }`}
                                    >
                                        {activeIndex === index ? (
                                            <Minus className="w-4 h-4" />
                                        ) : (
                                            <Plus className="w-4 h-4" />
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-96 mt-3" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-muted-foreground text-sm leading-relaxed pr-6">
                                        {faq.answer}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;