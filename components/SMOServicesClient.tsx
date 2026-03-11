'use client'

import { motion } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    Star,
    Zap,
    ArrowLeft,
    Share2,
    Layout,
    PenTool,
    BarChart3,
    TrendingUp,
    MousePointer2,
    MessageSquare,
    Hash,
    Building2,
    Plane,
    Factory,
    Car,
    Dumbbell,
    Sprout,
    HardHat,
    Scale,
    CalendarDays,
    Truck,
    Mail,
    Globe,
    Monitor,
    Settings
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { RecentBlog } from "@/components/RecentBlog";
import { MarketingAuditDialog } from "@/components/MarketingAuditDialog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { generateBreadcrumbSchema, generateServiceSchema, generateOrganizationSchema, generateFAQSchema } from "@/lib/seo-schemas";
import { SEO } from "@/components/SEO";

const smoIcon = "/assets/digital/social-media.png";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
    }),
};

const HeroSection = ({ onAuditClick }: { onAuditClick: () => void }) => {
    const router = useRouter();
    return (
        <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-[#652b32]">
            <div className="absolute top-16 right-[15%] opacity-20 animate-pulse pointer-events-none">
                <Sparkles size={32} className="text-[#faf3e0]" />
            </div>
            <div className="absolute top-[30%] right-[8%] opacity-15 pointer-events-none">
                <Star size={24} className="text-[#FACC15]" fill="#FACC15" />
            </div>
            <div className="absolute bottom-[20%] right-[12%] opacity-20 pointer-events-none">
                <Share2 size={28} className="text-[#faf3e0]" />
            </div>
            <div className="absolute top-[20%] right-[25%] opacity-10 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="50" stroke="#faf3e0" strokeWidth="1" strokeDasharray="6 6" />
                </svg>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <Link
                    href="/services/digital-marketing-agency/"
                    className="inline-flex items-center gap-2 text-[#faf3e0]/60 hover:text-[#faf3e0] transition-colors font-medium group mb-8 md:mb-12"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Digital Marketing
                </Link>

                <motion.div
                    className="text-left max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full border border-[#faf3e0]/30 bg-[#faf3e0]/10 px-4 py-2 md:px-5 md:py-2.5 mb-6 md:mb-8 font-heading">
                        <Image src={smoIcon} alt="SMO" width={20} height={20} className="object-contain brightness-0 invert" />
                        <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#faf3e0]/90">Social Media Optimization</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#faf3e0] leading-tight mb-6 md:mb-8 font-display"
                    >
                        Expert Social Media Optimization in <span className="text-[#FACC15]">Digital Marketing</span> for Brand Growth
                    </motion.h1>

                    <motion.p variants={fadeUp} className="text-sm md:text-lg text-[#faf3e0]/70 max-w-3xl mb-8 md:mb-10 leading-relaxed text-left">
                        In the current cutthroat digital marketing landscape, social media optimization is vital to raising visibility, interaction and authority over the brand in the long term. Companies that make structured SMO strategy investments see an increase in online recognition and stronger audience connections. Our goal at MediaMaticStudio is to improve credibility and consistency across platforms through performance-driven execution. For companies looking for scalable success, our approach to social media optimization in digital marketing guarantees quantifiable growth, enhanced engagement, and lasting brand positioning.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                        <button
                            onClick={onAuditClick}
                            className="inline-flex items-center justify-center gap-2 bg-[#faf3e0] text-[#652b32] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-white transition-all text-sm md:text-base"
                        >
                            Get Your Free Social Audit <ArrowRight size={18} />
                        </button>
                        <Link
                            href="/contact-us/"
                            className="inline-flex items-center justify-center gap-2 bg-[#FACC15] text-[#652b32] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#FACC15]/90 transition-all text-sm md:text-base"
                        >
                            Contact Us <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const IntroSection = () => (
    <section className="py-16 bg-background overflow-hidden font-body">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#652b32] mb-6 font-display">
                        What is SMO in Digital Marketing and <span className="text-[#FACC15]">Why It Matters</span> for Businesses
                    </h2>
                    <div className="space-y-4 text-[#652b32]/70 leading-relaxed">
                        <p>
                            Social media marketing is the systematic process of making social media visible, credible, and interactive. Unlike paid advertisement, it focuses on performance which is organic based on systematic planning of the content and profile development.
                        </p>
                        <p>
                            The quality of social media optimization services helps businesses to remain relevant on the platform, to engage the audience, and to remain branded. Companies should employ evidence-based approaches in order to be seen in the midst of evolving algorithms and cutthroat markets.
                        </p>
                        <p>
                            Long-term digital growth goals are supported by effective SMO, which guarantees that brand communication is in line with audience intent and builds trust.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-[#652b32] p-8 md:p-12 rounded-3xl text-[#faf3e0] relative shadow-xl"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute -top-6 -right-6 w-16 h-16 md:w-20 md:h-20 bg-[#FACC15] rounded-2xl flex items-center justify-center rotate-12 shadow-lg">
                        <Zap size={40} className="text-[#652b32]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-6 font-display">How it's Social Media Optimization (SMO) Works</h3>
                    <div className="space-y-4 text-sm md:text-base opacity-95 leading-relaxed">
                        <p>
                            Platform analysis, competitor benchmarking, and audience research are the first steps in SMO. We align images for consistency, improve brand messaging, and optimize profiles.
                        </p>
                        <p>
                            Trends and audience preferences are taken into consideration while creating content calendars. We improve discoverability through keyword optimization, performance monitoring, and organized posting schedules.
                        </p>
                        <p>
                            Stronger community ties are created through engagement tactics like direct communication, sharing, and comments. As one of the growth-oriented social media optimization companies, we make sure that every action advances visibility, reach, and quantifiable performance results.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const WhyNeedsSMO = () => (
    <section className="py-16 md:py-24 px-4 bg-[#652b32] text-[#faf3e0]">
        <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="order-2 md:order-1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#faf3e0]/10 aspect-video flex items-center justify-center bg-[#faf3e0]/5 group">
                        <TrendingUp size={120} className="text-[#FACC15] opacity-20 group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#652b32] via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <h3 className="text-xl font-bold mb-2 font-display">Data-Driven Success</h3>
                            <p className="text-sm opacity-80">Execution based on platform performance</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="order-1 md:order-2"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display">
                        Why Your Brand Needs a Strong <span className="text-[#FACC15]">SMO Approach</span>
                    </h2>
                    <div className="space-y-6 text-[#faf3e0]/80 leading-relaxed text-lg">
                        <p>
                            In areas with intense competition, a clear SMO approach increases authority and confidence. Even good content may not reach its target audience without the use of SEO.
                        </p>
                        <p>
                            Your brand must be audience-oriented, positionally consistent, and cleverly improved to remain competitive. Optimized digital media profiles are aligned to platform algorithms and trends.
                        </p>
                        <p>
                            Businesses may increase recognition, foster loyalty, and stay relevant across changing digital platforms by emphasizing data-driven execution and organized planning.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

const ServicesSection = () => (
    <section className="py-16 md:py-24 px-4 bg-secondary/50 font-body">
        <div className="container mx-auto max-w-6xl">
            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-6xl font-black text-[#652b32] mb-8 font-heading leading-tight tracking-tight uppercase">
                    Our Professional <br className="hidden md:block" />
                    <span className="text-[#FACC15]">Social Media Optimization</span> Services
                </h2>
                <div className="text-base md:text-lg text-[#652b32]/60 max-w-4xl mx-auto space-y-4 font-medium">
                    <p>
                        We provide organized professional SMO services to suit business purposes at MediaMaticStudio. Our team will guarantee the improvement of profiles, engagement of the audience, and performance analysis to achieve stable growth.
                    </p>
                    <p>
                        Being a trusted SMO services company, we integrate creativity and analytics to construct quantifiable outcomes.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { icon: Layout, title: "Social Media Profile Optimization", desc: "Our social media profile optimization service optimizes all the bios, descriptions, images, and brand messages to make it a unified brand identity. We make all profiles professional, clear, and strategic. This organised method enhances instatement, faithfulness, and viewer trust on plans." },
                    { icon: PenTool, title: "Content Strategy and Creation", desc: "Our targeted content strategies are designed to meet the business interests and business objectives. Whether it is artistic images or some educational posts, each is helping in the engagement and retention. Our emphasis on consistency and storytelling assists brands to be relevant and create a sustainable digital impression." },
                    { icon: Hash, title: "Hashtag and Keyword Optimization", desc: "Organic visibility is enhanced through strategic hashtag placement and enhanced keywords optimization . Increasing the searchability, we do this through trend research and industry-specific research. Such strategy will bring the content visible before the target audience and therefore more discoverable and and more likely to engage." },
                    { icon: MessageSquare, title: "Community Management and Engagement", desc: "Engagement makes the relationships strong and creates communities of loyal people. We control comments, answer questions and promote discussions to build trust. Successful interaction enhances credibility and maintains a constant interaction." },
                    { icon: BarChart3, title: "Analytics, Reporting, and Improvements", desc: "Growth and strategy refinement can be measured by performance tracking. In-depth reports and insights will help us to define areas of improvement and streamline campaigns. On-going control is a guarantee of quantifiable outcomes and progress which are sustainable." },
                ].map((s, i) => (
                    <motion.div
                        key={s.title}
                        className="p-10 rounded-[3rem] bg-[#fff8eb] border border-[#652b32]/5 hover:shadow-2xl hover:bg-[#652b32] transition-all duration-500 group cursor-pointer"
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#652b32]/5 flex items-center justify-center mb-8 group-hover:bg-[#faf3e0]/10 transition-colors">
                            <s.icon size={28} className="text-[#FACC15] group-hover:text-[#faf3e0]" />
                        </div>
                        <h3 className="text-2xl font-black text-[#652b32] mb-4 font-heading group-hover:text-white leading-tight uppercase tracking-tight">
                            {s.title}
                        </h3>
                        <p className="text-[#652b32]/60 leading-relaxed text-sm group-hover:text-white/80 font-medium">
                            {s.desc}
                        </p>
                    </motion.div>
                ))}

                <motion.div
                    className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#652b32] border-2 border-dashed border-[#faf3e0]/20 hover:border-[#FACC15] transition-all duration-300 group shadow-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    custom={5}
                >
                    <h3 className="text-xl font-bold text-[#faf3e0] mb-6 font-display text-center">
                        Need a Custom Strategy?
                    </h3>
                    <Link
                        href="/contact-us/"
                        className="inline-flex items-center justify-center gap-2 bg-[#FACC15] text-[#652b32] px-8 py-3.5 rounded-full font-bold shadow-xl hover:bg-yellow-400 hover:scale-105 transition-all text-base"
                    >
                        Contact Us <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </div>
    </section>
);

const BenefitsSection = () => (
    <section className="py-16 md:py-24 px-4 bg-background font-body">
        <div className="container mx-auto max-w-6xl">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#652b32] mb-4 font-display">
                    Key <span className="text-[#FACC15]">Benefits</span> of Social Media Optimization (SMO) Services
                </h2>
                <p className="text-lg text-[#652b32]/70 max-w-4xl mx-auto text-center">
                    Strategic SMO promotes visibility, participation and brand authority besides maintaining measurable digital outcomes and increase.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                    { title: "Improved Organic Reach", desc: "Content discoverability is increased with optimized profiles and organized publishing. With the help of algorithm-friendly techniques, businesses will be able to reach bigger audiences without the use of paid ads exclusively." },
                    { title: "Higher Engagement Rates", desc: "Consistent communication and interesting material promote audience involvement. Credibility is strengthened and total online presence is enhanced by more likes, shares, and comments." },
                    { title: "Consistent Brand Presence", desc: "Stable messaging and images provide cross-platform recognition. Positioning and trust are enhanced in highly competitive market places through consistency." },
                    { title: "Increased Website Traffic", desc: "Optimized links and strategic content redirection increase conversion rates by bringing qualified visitors to company websites." },
                    { title: "Better Conversion Opportunities", desc: "Structured engagement funnels facilitate quantifiable lead generation and business expansion by guiding viewers from interaction to inquiry." },
                ].map((item, i) => (
                    <motion.div
                        key={item.title}
                        className="p-6 rounded-2xl bg-[#652b32] text-[#faf3e0] flex flex-col items-center text-center shadow-lg hover:bg-[#faf3e0] hover:text-[#652b32] transition-all duration-300 cursor-default group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <div className="w-10 h-10 rounded-full bg-[#FACC15] text-[#652b32] group-hover:bg-[#652b32] group-hover:text-[#FACC15] flex items-center justify-center font-bold mb-4 transition-colors">
                            {i + 1}
                        </div>
                        <h4 className="font-bold mb-3 text-[10px] md:text-xs uppercase tracking-wider">{item.title}</h4>
                        <p className="text-[10px] opacity-80 leading-relaxed group-hover:opacity-100">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const WhyChooseUs = () => (
    <section className="py-16 md:py-24 px-4 bg-[#faf3e0] font-body">
        <div className="container mx-auto max-w-5xl">
            <motion.div
                className="bg-[#652b32] text-[#faf3e0] p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FACC15]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display text-center">
                        What Makes MediaMaticStudio the <span className="text-[#FACC15]">Right Choice</span>
                    </h2>
                    <div className="text-lg md:text-xl text-[#faf3e0]/80 text-center leading-relaxed max-w-4xl mx-auto space-y-6">
                        <p>
                            MediaMaticStudio is a strategy, creativity, and analytics-driven company that provides the best social media optimization services to growth-driven companies.
                        </p>
                        <p>
                            Optimizing social media for business will provide us with a stable positioning and performance indicators. We also focus on tailored implementation in accordance with business goals unlike generic providers.
                        </p>
                        <p className="font-semibold text-[#faf3e0]">
                            This is in line with our core values of transparency, systematic planning, and ongoing enhancement as one of the reliable social media optimization companies that will empower your brand to succeed with digital success in the long run.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

const IndustriesSection = () => (
    <section className="py-16 md:py-24 px-4 bg-secondary/30 font-body">
        <div className="container mx-auto max-w-6xl">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#652b32] mb-4 font-display">
                    Industries We Serve with <span className="text-[#FACC15]">SMO</span> (Social Media Optimization) Services
                </h2>
                <div className="text-lg text-[#652b32]/70 max-w-4xl mx-auto space-y-4 text-center">
                    <p>
                        Our SMO (Social media optimization) Services are aimed to assist various industries that want to have better engagement and visibility.
                    </p>
                    <p>
                        And we tailor strategies to the behavior of the audience, the trends in the market, and the competition in the industry to guarantee growth.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {[
                    { icon: Building2, title: "Real Estate", desc: "We enhance property visibility and generate qualified inquiries through structured SMO campaigns." },
                    { icon: Plane, title: "Travel & Tourism", desc: "Optimized storytelling and visual strategies increase bookings and seasonal engagement." },
                    { icon: Factory, title: "Manufacturing", desc: "We strengthen B2B presence with professional positioning and targeted content strategies." },
                    { icon: Car, title: "Automotive", desc: "SMO campaigns enhance brand credibility and win the attention of potential buyers." },
                    { icon: Dumbbell, title: "Sports & Fitness", desc: "Constant interaction helps us grow membership and the knowledge of products." },
                    { icon: Zap, title: "Energy & Utilities", desc: "Strategic optimization increases power and develops the trust of the audience." },
                    { icon: Sprout, title: "Agriculture & AgriTech", desc: "We facilitate innovations and spread the businesses with the appropriate audiences in the industry." },
                    { icon: HardHat, title: "Construction", desc: "Targeted campaigns generate project inquiries and strengthen market presence." },
                    { icon: Scale, title: "Legal & Law Firms", desc: "Professional branding improves credibility and client acquisition opportunities." },
                    { icon: Mail, title: "Media & Publishing", desc: "Optimized content strategies increase readership and subscriber growth." },
                    { icon: CalendarDays, title: "Event Management", desc: "We boost event visibility and audience registrations through engagement-focused SMO." },
                    { icon: Sparkles, title: "Beauty & Wellness", desc: "Regular branding and communication with the audience boosts appointments and loyalty." },
                    { icon: Truck, title: "Logistics & Warehouse Management", desc: "SMO strategies that are B2B oriented create good leads and enhance brand recognition." },
                ].map((ind, i) => (
                    <motion.div
                        key={ind.title}
                        className="flex items-start gap-4 p-5 rounded-xl bg-[#fff8eb] border border-[#652b32]/10 hover:shadow-md hover:bg-[#652b32] hover:text-[#faf3e0] hover:border-[#652b32] transition-all duration-300 group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                        <div className="w-10 h-10 rounded-lg bg-[#652b32]/5 flex items-center justify-center shrink-0 group-hover:bg-[#faf3e0]/10 transition-colors">
                            <ind.icon size={20} className="text-[#FACC15] group-hover:text-[#faf3e0]" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-[#652b32] group-hover:text-[#faf3e0] mb-1 font-display">
                                {ind.title}
                            </h3>
                            <p className="text-[#652b32]/70 group-hover:text-[#faf3e0]/80 text-[10px] leading-relaxed">{ind.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const StatsSection = () => (
    <section className="py-16 md:py-20 bg-[#652b32] text-[#faf3e0] font-body">
        <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl md:text-3xl font-bold font-display">
                    Our Current Stats
                </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { value: "2+", label: "Branch Offices" },
                    { value: "118+", label: "Web & App Projects" },
                    { value: "75+", label: "Corporate Video Shoots" },
                    { value: "124+", label: "Digital Marketing" },
                ].map((s, i) => (
                    <motion.div
                        key={s.label}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <div className="text-4xl md:text-5xl font-bold text-[#FACC15] mb-2 font-display">
                            {s.value}
                        </div>
                        <div className="text-[#faf3e0]/80 text-sm font-medium">{s.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const FAQSection = () => (
    <section className="py-16 md:py-24 px-4 bg-background relative overflow-hidden font-body">
        <div className="container mx-auto max-w-3xl relative z-10">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#652b32] mb-4 font-display">
                    Frequently Asked <span className="text-[#FACC15]">Questions</span>
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <Accordion type="single" collapsible className="space-y-3">
                    {[
                        { q: "1. How does an SMO services company support long-term digital growth?", a: "A structured SMO strategy strengthens visibility, builds engagement, and improves brand consistency for sustainable performance." },
                        { q: "2. Why should you hire MediaMaticStudio for social media optimization services?", a: "We provide evidence-based, tailored action plans in accordance with business aims and quantifiable expansion targets." },
                        { q: "3. How do social media optimization companies improve brand visibility and engagement?", a: "They profile optimize, refine content and analytics optimize reach and interaction." },
                        { q: "4. Why should you choose MediaMaticStudio over other social media optimization companies?", a: "We pay attention to transparency, quantifiable results, and individualized performance that leads to the success in the long term." },
                        { q: "5. How does digital media optimization strengthen your overall online marketing strategy?", a: "It integrates the branding, communication, and interaction with the larger digital marketing goals." },
                        { q: "6. What benefits of social media optimization can businesses expect from MediaMaticStudio’s SMO strategy?", a: "The companies achieve better outreach, deepened interaction, increased credibility, and continuous online expansion." },
                    ].map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`faq-${i}`}
                            className="border border-[#652b32]/10 rounded-xl px-6 bg-[#fff8eb] data-[state=open]:shadow-md transition-shadow"
                        >
                            <AccordionTrigger className="text-left font-semibold text-[#652b32] hover:no-underline py-5">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#652b32]/70 leading-relaxed pb-5">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    </section>
);

export function SMOServicesClient() {
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
    const handleAuditClick = () => setIsAuditModalOpen(true);

    const faqs = [
        { q: "1. How does an SMO services company support long-term digital growth?", a: "A structured SMO strategy strengthens visibility, builds engagement, and improves brand consistency for sustainable performance." },
        { q: "2. Why should you hire MediaMaticStudio for social media optimization services?", a: "We provide evidence-based, tailored action plans in accordance with business aims and quantifiable expansion targets." },
        { q: "3. How do social media optimization companies improve brand visibility and engagement?", a: "They profile optimize, refine content and analytics optimize reach and interaction." },
        { q: "4. Why should you choose MediaMaticStudio over other social media optimization companies?", a: "We pay attention to transparency, quantifiable results, and individualized performance that leads to the success in the long term." },
        { q: "5. How does digital media optimization strengthen your overall online marketing strategy?", a: "It integrates the branding, communication, and interaction with the larger digital marketing goals." },
        { q: "6. What benefits of social media optimization can businesses expect from MediaMaticStudio’s SMO strategy?", a: "The companies achieve better outreach, deepened interaction, increased credibility, and continuous online expansion." },
    ];

    return (
        <div className="min-h-screen bg-background font-body">
            <SEO
                title="Social Media Optimization Company - Grow Your Brand"
                description="Work professional social media optimization company to improve engagement, strengthen brand presence and growth. Get started now."
                canonical="/social-media-optimization-company/"
                structuredData={[
                    generateBreadcrumbSchema([
                        { name: "Home", url: "/" },
                        { name: "Services", url: "/services/" },
                        { name: "Digital Marketing", url: "/services/digital-marketing-agency/" },
                        { name: "SMO", url: "/social-media-optimization-company/" }
                    ]),
                    generateServiceSchema({
                        name: "Social Media Optimization (SMO) Services",
                        description: "Professional profile optimization, content strategy, and community management for organic social media growth."
                    }),
                    generateOrganizationSchema(),
                    generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
                ]}
            />
            <HeroSection onAuditClick={handleAuditClick} />
            <IntroSection />
            <WhyNeedsSMO />
            <ServicesSection />
            <BenefitsSection />
            <WhyChooseUs />
            <IndustriesSection />
            <StatsSection />
            <FAQSection />

            <section className="relative overflow-hidden py-16 md:py-24 px-4 bg-[#652b32] text-[#faf3e0] text-center font-body">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
                        Ready to grow your brand on social media? Let’s build a <span className="text-[#FACC15]">stronger online presence together.</span>
                    </h2>
                    <p className="text-lg text-[#faf3e0]/80 mb-10 text-center leading-relaxed">
                        Partner with MediaMaticStudio to implement structured social media optimization services that enhance visibility, engagement, and measurable digital growth.
                    </p>
                    <button
                        onClick={handleAuditClick}
                        className="inline-flex items-center gap-2 bg-[#faf3e0] text-[#652b32] px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-white transition-all text-lg group"
                    >
                        Get Started Now <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            <RecentBlog />

            <MarketingAuditDialog
                isOpen={isAuditModalOpen}
                onOpenChange={setIsAuditModalOpen}
            />
        </div>
    );
}
