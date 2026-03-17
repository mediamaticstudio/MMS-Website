"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        q: "What are effective email marketing strategies for startups?",
        a: "Startups should focus on building a quality email list, subscriber segmentation, and personalized content. Promotional campaigns, automated welcome emails, and newsletters build brand trust and cultivate leads over time.",
    },
    {
        q: "What is the best email marketing service for a small business?",
        a: "The best service combines strategic planning, creative content, automation and performance monitoring. Working with professionals maximizes campaign effectiveness for engagement and conversions.",
    },
    {
        q: "Is email marketing cost-effective for small businesses?",
        a: "Email marketing is one of the most cost-effective digital marketing methods. It delivers direct, quantifiable results — increased website traffic, lead generation, and customer retention — without heavy upfront investment.",
    },
    {
        q: "How can I use email marketing to grow my online business?",
        a: "Focus on quality content, market segmentation and automation to deliver the right message at the right time. Regular campaigns and performance monitoring help refine strategies for compounding results.",
    },
    {
        q: "How does MediamaticStudio's email marketing service help businesses grow?",
        a: "MediamaticStudio provides strategic planning, creative email design, automation workflows and performance optimization. Our end-to-end solution helps businesses increase engagement, generate leads and build lasting customer relationships.",
    },
];

const FAQSection = () => (
    <section id="faq" className="section-padding py-32 bg-[#faf3e0]/50">
        <div className="max-w-4xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20 text-center"
            >
                <span className="block text-base font-black tracking-[0.25em] text-[#652b32]/40 mb-6 uppercase">
                    Frequently Asked Questions
                </span>

                <h2 className="services-heading font-heading text-5xl md:text-8xl font-black text-[#652b32] text-balance mb-12 tracking-tighter uppercase leading-[0.9]">
                    Got <br />
                    <span className="text-[#FACC15]">Questions?</span>
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white p-6 md:p-10 rounded-[2rem] shadow-2xl border border-white/20"
            >
                <Accordion type="single" collapsible className="w-full space-y-2">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#652b32]/10 last:border-0 px-2">
                            <AccordionTrigger className="text-xl font-black text-[#652b32] group-hover:text-[#FACC15] transition-colors font-heading leading-tight uppercase tracking-tight py-8">
                                {faq.q}
                            </AccordionTrigger>

                            <AccordionContent className="text-[#652b32]/60 text-sm leading-relaxed mb-8 font-medium">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    </section>
);

export default FAQSection;