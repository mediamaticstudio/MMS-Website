"use client";

import { motion } from "framer-motion";
import { 
    Layers, 
    Zap, 
    ShieldCheck, 
    Code2, 
    Smartphone, 
    Globe, 
    Server, 
    Database,
    Cloud,
    Layout,
    ShoppingBag,
    Puzzle
} from "lucide-react";

const technologies = [
    {
        category: "CMS Core",
        icon: Layout,
        items: ["Gutenberg Blocks", "Advanced Custom Fields", "WordPress Multi-site", "Genesis Framework"]
    },
    {
        category: "E-Commerce",
        icon: ShoppingBag,
        items: ["WooCommerce", "Stripe API", "PayPal Express", "WP Inventory"]
    },
    {
        category: "Performance",
        icon: Zap,
        items: ["Cloudflare CDN", "WP Rocket", "Redis Cache", "Image Optimization"]
    },
    {
        category: "Functionality",
        icon: Puzzle,
        items: ["LMS Integrations", "CRM Sync", "REST API", "Gravity Forms"]
    },
    {
        category: "Security",
        icon: ShieldCheck,
        items: ["2-Factor Auth", "SSL Encryption", "Malware Scanning", "Daily Backups"]
    },
    {
        category: "Infrastructure",
        icon: Server,
        items: ["AWS Hosting", "Google Cloud", "DigitalOcean", "Nginx Config"]
    }
];

const Techstacksection = () => {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary text-xs font-black uppercase tracking-[0.4em] mb-4 block">
                            Our Toolkit
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
                            Advanced WordPress <span className="text-primary italic">Ecosystem</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            We use the most robust, high-performance tools within the WordPress landscape to build secure and scalable digital solutions.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={tech.category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <tech.icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{tech.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tech.items.map((item) => (
                                    <span 
                                        key={item}
                                        className="px-4 py-2 rounded-xl bg-muted/30 text-muted-foreground text-xs font-semibold hover:bg-secondary hover:text-white transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Techstacksection;