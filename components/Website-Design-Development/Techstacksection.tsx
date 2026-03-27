"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Code2,
    Globe,
    Database,
    Palette,
    Layout,
    Server,
    Gauge,
    Sparkles,
    CheckCircle2
} from "lucide-react";

const expertise = [
    {
        icon: Code2,
        title: "Full-Stack Development",
        items: [
            "Custom front-end and back-end web applications",
            "Personalized to meet unique business requirements",
            "Scalable and high-performance solutions"
        ]
    },
    {
        icon: Globe,
        title: "Static Websites",
        items: [
            "Fast, efficient, and cost-effective websites",
            "Suitable for portfolios and small business landing pages",
            "Highly secure and easy to maintain"
        ]
    },
    {
        icon: Database,
        title: "Dynamic Websites",
        items: [
            "Complex, interactive, and database-driven sites",
            "Real-time updates and user interactions",
            "Perfect for portals and large platforms"
        ]
    },
    {
        icon: Palette,
        title: "Custom Website Design",
        items: [
            "Unique UI/UX specifically for your brand",
            "Focus on distinct visual identity",
            "Better conversion and user engagement"
        ]
    },
    {
        icon: Layout,
        title: "WordPress Development",
        items: [
            "Custom themes and efficient plugin integration",
            "Easy-to-use content management systems",
            "SEO-friendly and responsive design"
        ]
    },
    {
        icon: Server,
        title: "Ecommerce Development",
        items: [
            "Secure, high-performing online stores",
            "Seamless payment gateway and order management",
            "Inventory tracking and customer profiles"
        ]
    },
    {
        icon: Gauge,
        title: "React Development",
        items: [
            "Modern, fast, and interactive user interfaces",
            "Component-based architecture for scalability",
            "Seamless performance with single-page application features"
        ]
    }
];

const Techstacksection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5"
            aria-label="Our expertise in website design and development"
        >
            {/* Skip Link */}
            <a
                href="#expertise-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
            >
                Skip to expertise content
            </a>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div id="expertise-content" className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Our Expertise
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                        Expertise in
                        <span className="text-primary block mt-2">Website Design & Development</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Comprehensive solutions tailored to your business needs
                    </p>
                </motion.div>

                {/* Expertise Grid - Minimal Card Design */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-wrap justify-center gap-x-8 gap-y-12"
                >
                    {expertise.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            className="group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>

                            {/* Features List */}
                            <ul className="space-y-2">
                                {item.items.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-col items-center">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6" />
                        <p className="text-muted-foreground mb-4">
                            Ready to bring your vision to life?
                        </p>
                        <button
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300"
                            aria-label="Start your project"
                        >
                            Start Your Project
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </motion.div>

                {/* Accessibility */}
                <div className="sr-only" aria-live="polite" aria-atomic="true">
                    {isInView ? "Expertise section loaded with 7 service categories" : "Loading expertise section"}
                </div>
            </div>
        </section>
    );
};

export default Techstacksection;