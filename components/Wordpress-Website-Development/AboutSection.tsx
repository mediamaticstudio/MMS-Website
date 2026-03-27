"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    CheckCircle2,
    Sparkles,
    Globe,
    Layout,
    Users,
    Rocket,
    ArrowUpRight
} from "lucide-react";

const AboutSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const features = [
        {
            icon: Layout,
            title: "Custom Themes",
            description: "Tailor-made designs that reflect your brand's unique identity",
            color: "primary"
        },
        {
            icon: Globe,
            title: "SEO Friendly",
            description: "Built with search engines in mind to drive organic traffic",
            color: "secondary"
        },
        {
            icon: Users,
            title: "User Focused",
            description: "Intuitive interfaces designed for maximum engagement",
            color: "accent"
        }
    ];

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden font-['Poppins']"
            aria-label="About MediaMatic WordPress Services"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] opacity-30 animate-pulse animation-delay-1000" />

            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-primary tracking-wide">
                                    ELITE WORDPRESS AGENCY
                                </span>
                            </div>
                        </motion.div>

                        {/* Heading */}
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2]">
                                Visionary Design meets{" "}
                                <span className="relative inline-block">
                                    WordPress Mastery
                                    <motion.span
                                        initial={{ width: "0%" }}
                                        animate={isInView ? { width: "100%" } : {}}
                                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                                        className="absolute bottom-2 left-0 h-3 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full -z-0"
                                    />
                                </span>
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.div variants={itemVariants} className="space-y-5">
                            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                                MediaMatic is a collective of WordPress specialists who transform open-source potential into bespoke digital experiences.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                From startup blogs to enterprise-grade eCommerce ecosystems, our developers harness the full power of WordPress to build scalable, secure, and stunning platforms.
                            </p>
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                                <div className="relative bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10 group-hover:border-primary/20 transition-colors">
                                    <p className="text-foreground font-semibold italic leading-relaxed text-lg">
                                        "We don't just build websites; we craft the digital heartbeat of your brand on the world's most popular platform."
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Feature List */}
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative p-3 rounded-xl bg-secondary/30 backdrop-blur-sm border border-secondary/50 group-hover:border-primary/30 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <feature.icon className={`w-5 h-5 text-primary`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-bold text-foreground truncate">
                                                    {feature.title}
                                                </h4>
                                                <p className="text-xs text-muted-foreground line-clamp-2 font-medium">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-6"
                    >
                        {/* Card 1 */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all group-hover:scale-110">
                                            <Rocket className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground flex-1 leading-tight">
                                        Why use WordPress for your Business?
                                    </h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed ml-16 font-medium">
                                    WordPress power over 40% of the internet. It offers unmatched flexibility, robust security features, and a scalable architecture that grows alongside your business ambitions.
                                </p>
                                <div className="mt-4 ml-16 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                                        Learn more <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-gradient-to-br from-secondary/5 via-background to-primary/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-secondary/10 group-hover:border-secondary/30 transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-secondary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-all group-hover:scale-110">
                                            <CheckCircle2 className="w-6 h-6 text-secondary" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground flex-1 leading-tight">
                                        How we elevate WordPress development?
                                    </h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed ml-16 font-medium">
                                    We go beyond off-the-shelf templates. Our specialists write clean, custom code for themes and plugins, ensuring your site is lightweight, lightning-fast, and uniquely yours.
                                </p>
                                <div className="mt-4 ml-16 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:gap-2 transition-all">
                                        Discover how <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            variants={itemVariants}
                            className="pt-4"
                        >
                            <button className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/80 p-[1px] hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                <div className="relative bg-background rounded-xl px-6 py-3 text-center group-hover:bg-transparent transition-colors duration-300">
                                    <span className="text-primary group-hover:text-background font-bold tracking-wide transition-colors duration-300">
                                        ELEVATE YOUR WORDPRESS SITE
                                    </span>
                                </div>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
