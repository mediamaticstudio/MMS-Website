'use client'

import { motion } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    Star,
    Zap,
    ArrowLeft,
    Target,
    BarChart3,
    MousePointerClick,
    Rocket,
    Globe,
    Monitor,
    Settings,
    Building2,
    Plane,
    Factory,
    Car,
    Dumbbell,
    CalendarDays
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { RecentBlog } from "@/components/RecentBlog";
import { MarketingAuditDialog } from "@/components/MarketingAuditDialog";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { generateBreadcrumbSchema, generateServiceSchema, generateOrganizationSchema, generateFAQSchema } from "@/lib/seo-schemas";
import { SEO } from "@/components/SEO";

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

export function SEMServicesClient() {
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
    const handleAuditClick = () => setIsAuditModalOpen(true);

    const faqs = [
        { q: "What results can businesses expect with Search Engine Marketing?", a: "With SEM, you will receive immediate results for your business, including specialized campaigns that lead to quantifiable success." },
        { q: "Why should you choose MediamaticStudio as your Search Engine Marketing Agency?", a: "Because we have a results-driven strategy where we do research, implementation, and reporting of your outcomes." },
    ];

    return (
        <div className="min-h-screen bg-background font-sans">
            <SEO
                title="Search Engine Marketing (SEM) Agency - Boost Visibility"
                description="Higher traffic and sales with our search engine marketing agency. We design SEM campaigns that drive immediate results. Contact us now."
                canonical="/search-engine-marketing-company/"
                structuredData={[
                    generateBreadcrumbSchema([
                        { name: "Home", url: "/" },
                        { name: "Services", url: "/services/" },
                        { name: "Digital Marketing", url: "/services/digital-marketing-agency/" },
                        { name: "SEM", url: "/search-engine-marketing-company/" }
                    ]),
                    generateServiceSchema({
                        name: "Search Engine Marketing (SEM) Services",
                        description: "Professional PPC, Google Ads, and paid search marketing for immediate online visibility and ROI."
                    }),
                    generateOrganizationSchema(),
                    generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))
                ]}
            />
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-12 bg-[#652b32] text-[#faf3e0]">
                <div className="absolute top-16 right-[15%] opacity-20 animate-pulse pointer-events-none">
                    <Sparkles size={60} className="text-[#faf3e0]" />
                </div>
                <div className="absolute top-[30%] right-[8%] opacity-15 pointer-events-none">
                    <Star size={40} className="text-[#FACC15]" fill="#FACC15" />
                </div>
                <div className="absolute bottom-16 right-[20%] opacity-10 pointer-events-none">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="50" stroke="#faf3e0" strokeWidth="1" strokeDasharray="8 8" />
                    </svg>
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <Link
                        href="/services/digital-marketing-agency/"
                        className="inline-flex items-center gap-3 text-[#faf3e0]/60 hover:text-[#faf3e0] transition-colors font-black uppercase tracking-[0.2em] text-[11px] group mb-12"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Digital Marketing
                    </Link>

                    <motion.div
                        className="text-left max-w-5xl"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    >
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-4 rounded-full border border-[#faf3e0]/30 bg-[#faf3e0]/10 px-6 py-3 mb-10">
                            <Image src="/assets/digital/sem.png" alt="SEM" width={24} height={24} className="brightness-0 invert" />
                            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#faf3e0]/90">SEM & Paid Media</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#faf3e0] leading-[1.05] mb-10 tracking-tight font-heading"
                        >
                            Search Engine Marketing Companies Specializing in <span className="text-[#FACC15]">PPC & Paid Media</span>
                        </motion.h1>

                        <motion.div variants={fadeUp} className="space-y-8 mb-12 text-lg md:text-2xl text-[#faf3e0]/70 max-w-5xl leading-relaxed font-medium">
                            <p>
                                In the modern ruthless digital world, businesses need to be visible and show quantifiable growth instantly. Leading search engine marketing firms concentrate on performance-driven campaigns that turn intent into income.
                            </p>
                            <div className="bg-[#faf3e0]/5 border-l-8 border-[#FACC15] p-10 rounded-3xl shadow-2xl backdrop-blur-sm">
                                <p className="font-black text-white mb-4 text-2xl uppercase tracking-tight">Scale Faster with Mediamaticstudio</p>
                                <p className="text-white/80 not-italic">Launch data-driven pay per click campaigns that attract high-intent traffic, boost conversions, and deliver measurable ROI. Our efficient campaigns get backed by audience intent mapping and competitive analysis.</p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <button
                                onClick={handleAuditClick}
                                className="inline-flex items-center justify-center gap-4 bg-[#FACC15] text-[#652b32] px-12 py-6 rounded-full font-black uppercase tracking-[0.15em] text-sm shadow-2xl hover:bg-white transition-all active:scale-95 group"
                            >
                                Free SEM Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why SEM Section */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-6xl font-black text-[#652b32] mb-10 font-heading leading-tight tracking-tight uppercase">
                                What Is Search Engine Marketing & How Does It Drive <span className="text-yellow-600">Instant Visibility?</span>
                            </h2>
                            <div className="space-y-6 text-[#652b32]/60 leading-relaxed text-lg font-medium">
                                <p>
                                    Search engine marketing is a paid strategy whereby your brand appears first when consumers are searching related goods or services. Organic SEO takes time which is not the case with paid advertisements where the exposure is immediate.
                                </p>
                                <p>
                                    Well-planned campaign ensures optimized ad copy, compelling landing pages and continuous testing of A/B.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-2 gap-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {[
                                { label: "Immediate Results", icon: Zap },
                                { label: "High Intent Traffic", icon: Target },
                                { label: "Measurable ROI", icon: BarChart3 },
                                { label: "Precision Targeting", icon: MousePointerClick }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="p-10 rounded-[2.5rem] bg-[#652b32] text-white flex flex-col items-center justify-center text-center hover:bg-[#faf3e0] hover:text-[#652b32] transition-all duration-500 group shadow-2xl"
                                    whileHover={{ y: -10 }}
                                >
                                    <item.icon size={48} className="mb-6 text-[#FACC15] group-hover:text-[#652b32] transition-colors" />
                                    <span className="text-xs font-black uppercase tracking-widest leading-tight">{item.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Paid Marketing Support Section */}
            <section className="py-24 md:py-32 px-6 bg-[#652b32] text-[#faf3e0]">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            className="order-2 lg:order-1 relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-video flex items-center justify-center bg-white/5 group">
                                <Rocket size={160} className="text-[#FACC15] opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#652b32] via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-12 left-12">
                                    <h3 className="text-3xl font-black mb-2 font-heading uppercase tracking-tight text-white">Qualified Leads</h3>
                                    <p className="text-lg text-white/60 font-medium tracking-tight">Steady generation for long-term growth</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="order-1 lg:order-2 text-center lg:text-left"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black mb-10 font-heading leading-tight tracking-tight uppercase">
                                How Paid Marketing Supports <span className="text-[#FACC15]">Brand Growth</span>
                            </h2>
                            <div className="space-y-6 text-white/70 leading-relaxed text-lg font-medium">
                                <p>
                                    Along with the qualified leads, strategic paid advertising marketing enhances brand credibility. By targeting specific demographic, interests and search targets, businesses can acquire audiences with the highest likelihood of conversion.
                                </p>
                                <p>
                                    This performance-based approach guarantees that marketing funds are allocated to initiatives that produce genuine engagement and steady lead generation.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 px-6 bg-background">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-[#652b32] mb-8 font-heading leading-tight tracking-tight uppercase">
                            SEM & <span className="text-[#FACC15]">Paid Advertising</span>
                        </h2>
                        <p className="text-base md:text-lg text-[#652b32]/60 max-w-4xl mx-auto leading-relaxed font-medium">
                            Higher traffic and sales with our search engine marketing agency. We design SEM campaigns that drive immediate results.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: MousePointerClick, title: "Pay Per Click (PPC) Advertising", desc: "Our PPC campaigns transform high-intent queries to sales. We carry out competition benchmarking, keyword analysis and continuous bid optimization." },
                            { icon: Globe, title: "Google Ads Management", desc: "We manage the entire Google Ads ecosystem: search, display, shopping and remarketing. Our focus is on systematic targeting and conversion monitoring." },
                            { icon: Monitor, title: "Bing Ads Management", desc: "Our Bing solutions help access untapped populations because there is less competition. We maximize device targeting and ad creatives for profitability." },
                            { icon: Settings, title: "Paid Campaign Management", desc: "Our comprehensive management guarantees that performance and corporate goals are in line. We focus on testing, analytics, and ROI optimization." },
                        ].map((s, i) => (
                            <motion.div
                                key={s.title}
                                className="p-12 rounded-[3.5rem] bg-[#fff8eb] border border-[#652b32]/5 hover:shadow-2xl hover:bg-[#652b32] transition-all duration-500 group cursor-pointer"
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                            >
                                <div className="w-20 h-20 rounded-3xl bg-[#652b32]/5 flex items-center justify-center mb-10 group-hover:bg-[#faf3e0]/10 transition-colors">
                                    <s.icon size={40} className="text-[#FACC15] group-hover:text-[#faf3e0]" />
                                </div>
                                <h3 className="text-3xl font-black text-[#652b32] mb-6 font-heading group-hover:text-white leading-tight uppercase tracking-tight">
                                    {s.title}
                                </h3>
                                <p className="text-[#652b32]/60 leading-relaxed text-lg group-hover:text-white/80 font-medium">
                                    {s.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid Section */}
            <section className="py-24 md:py-32 px-6 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="text-center mb-24"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-[#652b32] mb-10 font-heading leading-tight tracking-tight uppercase">
                            The Role of <span className="text-yellow-600">Paid Media</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "High-Intent Traffic", desc: "Users seeking solutions have better conversion rates. We use geo-targeting and transactional keywords." },
                            { title: "Lead Quality", desc: "Reach serious decision-makers and buyers. A/B testing provides better user experience and results." },
                            { title: "Revenue Growth", desc: "Revenue-focused funnels that boost deal closing by fusing remarketing tactics with performance data." },
                            { title: "Spend Efficiency", desc: "Budget allocation through real-time analysis. We track CTR, CPC and returns continuously." },
                            { title: "Brand Visibility", desc: "Strategic positioning on search results. Regular exposure creates credibility and brand power." },
                            { title: "Data Decisions", desc: "Optimization choices are guided by performance reports, guaranteeing smarter marketing expenditures." },
                            { title: "Scalable Growth", desc: "Paid frameworks designed to scale with expansion. Campaigns modified to fit markets." },
                            { title: "Competitive Edge", desc: "High-value search terms enable businesses to be proactive in crowded industries." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col gap-6 p-10 rounded-[2.5rem] bg-[#faf3e0]/50 border border-[#652b32]/5 hover:bg-[#652b32] hover:text-white transition-all duration-500 group shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="h-1.5 bg-[#652b32] w-16 rounded-full group-hover:bg-yellow-400 group-hover:w-full transition-all duration-500" />
                                <h4 className="font-black text-xl font-heading uppercase tracking-tight leading-tight">{item.title}</h4>
                                <p className="text-[#652b32]/60 group-hover:text-white/70 text-sm leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Strategy Section */}
            <section className="py-24 md:py-32 px-6 bg-[#faf3e0]">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-6xl font-black text-[#652b32] mb-10 font-heading leading-tight tracking-tight uppercase">
                                Measurable Benefits for <span className="text-yellow-600">Scaling</span>
                            </h2>
                            <div className="space-y-8 text-[#652b32]/60 text-xl leading-relaxed font-medium italic">
                                <p>
                                    Adjustments in the campaign are founded on the performance information and it is optimized continuously. The strategy minimizes marketing risks and enhances predictability.
                                </p>
                                <p>
                                    Between better brand awareness and quicker ROI, SEM assists growing companies to take over search engine results.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-[#652b32] p-16 md:p-24 rounded-[4rem] text-[#faf3e0] relative shadow-[0_50px_100px_-20px_rgba(101,43,50,0.4)]"
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FACC15] rounded-[2.5rem] flex items-center justify-center rotate-12 shadow-2xl">
                                <BarChart3 size={60} className="text-[#652b32]" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black mb-10 font-heading uppercase tracking-tight leading-tight">A Results Focused SEM Agency</h3>
                            <div className="space-y-8 text-lg opacity-80 leading-relaxed font-medium">
                                <p>
                                    Mediamaticstudio is a transparency and accountable performance-based SEM agency. Our areas of interest are strategic plan and excellence in execution.
                                </p>
                                <p className="font-black text-white not-italic uppercase tracking-[0.2em] text-xs pt-8 border-t border-white/10">
                                    Maximizing returns through high-level analytics.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-24 md:py-32 px-6 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="text-center mb-24"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-[#652b32] mb-10 font-heading leading-tight tracking-tight uppercase">
                            Industries We <span className="text-yellow-600">Serve</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[
                            { icon: Building2, title: "Real Estate", desc: "Create qualified property inquiries through geo-targeted campaigns." },
                            { icon: Plane, title: "Travel & Tourism", desc: "Capture seasonal demand and increase bookings with paid search." },
                            { icon: Factory, title: "Manufacturing", desc: "Reach B2B buyers and distributors using industry keyword targeting." },
                            { icon: Car, title: "Automotive", desc: "Use localized paid marketing to increase dealership visits." },
                            { icon: Dumbbell, title: "Sports & Fitness", desc: "Use interest-based targeting to boost product sales." },
                            { icon: Zap, title: "Energy & Utilities", desc: "Use strategic paid visibility to establish credibility." },
                            { icon: Building2, title: "Legal & Law Firms", desc: "Attract clients seeking immediate legal assistance." },
                            { icon: CalendarDays, title: "Event Management", desc: "Use marketing funnels to increase ticket sales and registrations." },
                        ].map((ind, i) => (
                            <motion.div
                                key={ind.title}
                                className="flex flex-col gap-8 p-10 rounded-[2.5rem] bg-[#faf3e0]/50 border border-[#652b32]/5 hover:bg-[#652b32] hover:text-white transition-all duration-500 group shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#652b32]/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                    <ind.icon size={28} className="text-[#652b32] group-hover:text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black mb-4 font-heading leading-tight uppercase tracking-tight">
                                        {ind.title}
                                    </h3>
                                    <p className="text-[#652b32]/60 group-hover:text-white/70 text-sm leading-relaxed font-medium">{ind.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 md:py-32 px-6 bg-[#faf3e0]">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-6xl font-black text-[#652b32] font-heading leading-tight tracking-tight uppercase">
                            Frequently Asked <span className="text-yellow-600">Questions</span>
                        </h2>
                    </motion.div>

                    <Accordion type="single" collapsible className="space-y-6">
                        {[
                            { q: "How do SEM companies help businesses grow faster?", a: "They develop paid campaigns that create instant exposure, reach high-intent users and turn traffic into revenue via streamlined bidding." },
                            { q: "What makes Mediamaticstudio different?", a: "Our campaigns are ROI-oriented, we report clearly and focus on absolute business objectives." },
                            { q: "How does PPC deliver faster ROI?", a: "Through transactional keywords, bids optimization and constant improvement in relation to performance data." },
                            { q: "How do you track conversions?", a: "By using conversion tracking tools, analytics dashboards and in-depth performance reports quantifying every metric." },
                            { q: "Why choose Mediamaticstudio?", a: "Our growth, cost, and strategic implementation are highly valued for measurable success." },
                        ].map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`faq-${i}`}
                                className="border border-[#652b32]/5 rounded-[2rem] px-10 bg-white hover:shadow-xl transition-all duration-500"
                            >
                                <AccordionTrigger className="text-left font-black text-[#652b32] hover:no-underline py-8 text-lg font-heading no-underline">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#652b32]/60 leading-relaxed pb-8 text-base font-medium">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 md:py-40 px-6 bg-[#652b32] text-[#faf3e0] text-center">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-4xl md:text-8xl font-black mb-12 font-heading leading-tight tracking-tight uppercase">
                            Ready to <span className="text-[#FACC15]">Scale?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-20 font-medium leading-relaxed italic">
                            Implement data-driven search engine marketing campaigns with Mediamaticstudio to generate quantifiable traffic and scalable revenue.
                        </p>
                        <button
                            onClick={handleAuditClick}
                            className="inline-flex items-center gap-4 bg-[#FACC15] text-[#652b32] px-12 py-6 rounded-full font-black uppercase tracking-[0.15em] text-sm shadow-2xl hover:bg-white transition-all active:scale-95 group"
                        >
                            Request Free Strategy Consult <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
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
