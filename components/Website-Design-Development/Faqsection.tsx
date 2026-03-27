"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What are the common types of website development?",
        answer:
            "The most common types include static websites, dynamic websites, e-commerce platforms, and CMS-based websites like WordPress.",
    },
    {
        question: "How long does it typically take to develop a custom website?",
        answer:
            "A standard custom website usually takes 4 to 8 weeks depending on complexity, features, and number of pages.",
    },
    {
        question: "Is it essential for my business to have a website?",
        answer:
            "Yes, a website builds credibility, helps customers find you, and allows you to market your services globally.",
    },
    {
        question: "How much does it cost to build a business website?",
        answer:
            "Costs vary based on design, features, and platform. We provide custom pricing based on your requirements.",
    },
    {
        question: "Will my website be mobile-friendly and responsive?",
        answer:
            "Absolutely. We follow a mobile-first approach ensuring perfect performance across all devices.",
    },
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

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-24"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <span className="text-sm font-semibold text-primary tracking-wider">
                                FAQs
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground">
                            Frequently <br />
                            Asked <br />
                            <span className="text-yellow-500">Questions</span>
                        </h2>

                        <p className="mt-6 text-muted-foreground max-w-md">
                            Can't find your answer? Reach out to us directly — we respond
                            within 24 hours.
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE */}
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