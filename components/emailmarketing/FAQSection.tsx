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
    <section id="faq" className="section-padding bg-muted">
        <div className="max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <span className="label-text text-accent flex items-center justify-center gap-2 mb-4">
                    <span className="gold-pip" /> Frequently Asked Questions
                </span>

                <h2 className="display-heading text-3xl md:text-5xl">
                    Got Questions?
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-border">
                            <AccordionTrigger className="font-sans font-semibold text-left text-foreground hover:text-primary text-base py-6">
                                {faq.q}
                            </AccordionTrigger>

                            <AccordionContent className="body-text text-muted-foreground pb-6">
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