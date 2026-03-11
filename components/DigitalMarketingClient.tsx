'use client'

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Megaphone,
    ArrowLeft,
    ArrowRight,
    Sparkles,
    Zap,
    MousePointer2,
    Target,
    BarChart3,
    TrendingUp,
    Loader2,
} from "lucide-react";
import { fetchRecentPosts } from "@/lib/api";
import BlogCard from "@/components/BlogCard";
import StatsCard from "@/components/StatsCard";
import { MarketingAuditDialog } from "@/components/MarketingAuditDialog";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: "/assets/digital/seo.png",
        title: "Search Engine Optimization (SEO)",
        desc: "Our search engine optimization works to enhance your ranking by search engines. We specialize in optimization of keywords, technical optimization, high quality content and backlink. We are a premier digital marketing agency for small business, and we assist small business brands to rise higher in ranking and to draw organic traffic which translates into loyal customers.",
        link: "/search-engine-optimization-company/"
    },
    {
        icon: "/assets/digital/social-media.png",
        title: "Social Media Optimization (SMO)",
        desc: "Our services take your brand to the next level on social networks in the form of optimized profiles, engaging content, and strategies. We are a reputable social media marketing company, so your brand voice will be consistent and credibility, reach, and loyal communities will be formed.",
        link: "/social-media-optimization-company/"
    },
    {
        icon: "/assets/digital/sem.png",
        title: "Search Engine Marketing (SEM)",
        desc: "Our SEM programs are instant visibility on the basis of targeted paid ads. We develop high performing campaigns which optimize on ROI with accurate targeting of the audience. Our digital marketing agency service is ongoing optimization of the performance of the ads to ensure they are better.",
        link: "/search-engine-marketing-company/"
    },
    {
        icon: "/assets/digital/digital-campaign.png",
        title: "Social Media Marketing (SMM)",
        desc: "We create social media campaigns that are data-driven and create awareness and leads. Since we do content production and paid promotion, our strategies enable businesses to compete with the leading marketing agencies without losing brand consistency or audience engagement.",
        link: "/social-media-marketing-company/"
    },
    {
        icon: "/assets/digital/email-marketing.png",
        title: "Email Marketing",
        desc: "Our email marketing plans foster leads and customer loyalty. Our customized campaigns will attract repeat business and relationships. It is also one of the cheapest digital marketing services to grow a small business.",
        link: "/services/digital-marketing/email-marketing/"
    },
    {
        icon: "/assets/digital/logotype.png",
        title: "Google Ads Marketing",
        desc: "We develop very specific Google Ads campaigns to generate quality traffic and sales. The team we work under is dedicated to the research of key words, optimization of ads, and monitoring of performance in order to guarantee the highest returns on any advertising investment.",
        link: "/services/digital-marketing/google-ads/"
    },
];

const whyChooseUs = [
    {
        icon: "/assets/digital/track-back.png",
        title: "Proven Strategies",
        desc: "Our digital marketing firm employs performance-based and tested strategies to deliver quantifiable success. Through the analysis of trends, competitors, and audience behavior, we develop campaigns that help to generate continuous traffic, lead, and conversion to businesses in any industry.",
    },
    {
        icon: "/assets/digital/leadership.png",
        title: "Market Leadership",
        desc: "We assist brands to form authority and good market position. Our creative digital marketing offerings and brand-building strategies promise your business to remain on top of the competition and be perceived as an industry leader.",
    },
    {
        icon: "/assets/digital/training.png",
        title: "Marketing Experts",
        desc: "Our team comprises highly qualified individuals who have specialization in SEO, paid advertising, social media, and content marketing. We also keep abreast with industry trends to introduce contemporary digital marketing agency services that progress real outcomes.",
    },
    {
        icon: "/assets/digital/handshake.png",
        title: "Client-First Approach",
        desc: "We value transparency, communication and quantitative growth. Being a marketing firm that caters to small business and the entrepreneur, we will carefully strategize depending on the objectives of the client so that there are long-term arrangements and eventual success.",
    },
];

const faqs = [
    {
        q: "Why Should Businesses Invest in Digital Marketing?",
        a: "Online marketing enhances visibility, captures targeted customers, and boosts sales online. It provides quantifiable outcomes, improved ROI, and scalable plans in contrast to ordinary marketing tactics.",
    },
    {
        q: "What is Digital Marketing and How Can It Benefit My Business?",
        a: "Digital marketing consists of SEO, social media marketing, paid advertisements, email marketing and content plans. Such approaches assist companies to create leads, enhance brand awareness, and elevate customer interaction.",
    },
    {
        q: "What are the best digital marketing services to use by small businesses?",
        a: "SEO, social media marketing, Google Ads, and email marketing are among the best digital marketing services to use by small businesses. They offer low cost, focused growth initiatives.",
    },
    {
        q: "Why Should I Choose Mediamatic Studio as My Digital Marketing Agency?",
        a: "Mediamatic Studio will provide tailored plans, open reporting, and result-based campaigns. We are highly skilled in the services of the digital marketing agency with a guarantee of growth and increased ROI.",
    },
    {
        q: "How Is Mediamatic Studio Different from Other Digital Marketing Agencies?",
        a: "We blend creativity, information, and strategy and approach the client first. We concentrate on long-term relationships, quantifiable outcomes, and long-term brand development.",
    },
    {
        q: "Can Mediamatic Studio Manage My Complete Digital Marketing Strategy?",
        a: "Yes. We specialize in SEO, paid ads, social media, content and email marketing, which makes us a one-roof digital marketing firm.",
    },
];

const stats = [
    { value: "2+", label: "Branch office " },
    { value: "118+", label: "Web & App Projects" },
    { value: "75+", label: "Corporate Video Shoots" },
    { value: "124+", label: "Digital Marketing" },
];

export function DigitalMarketingClient() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
    const router = useRouter();

    const { data: recentPosts, isLoading } = useQuery({
        queryKey: ["recent-posts-marketing"],
        queryFn: () => fetchRecentPosts(3),
        staleTime: 1000 * 60 * 30,
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-anim > *",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out", delay: 0.3 }
            );

            gsap.fromTo(
                ".service-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".services-grid", start: "top 90%" },
                }
            );

            gsap.fromTo(
                ".why-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".why-grid", start: "top 90%" },
                }
            );

            gsap.fromTo(
                ".cta-block",
                { scale: 0.95, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".cta-block", start: "top 90%" },
                }
            );

            gsap.fromTo(
                ".faq-block",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".faq-block", start: "top 95%" },
                }
            );

            gsap.fromTo(
                ".recent-posts-block",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".recent-posts-block", start: "top 90%" },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen bg-background font-sans">
            <section className="bg-[#652b32] relative overflow-hidden text-[#faf3e0]">
                <div className="absolute top-24 left-6 z-20">
                    <button
                        onClick={() => router.push("/services")}
                        className="inline-flex items-center gap-2 text-[#faf3e0]/60 hover:text-[#faf3e0] transition-colors font-bold uppercase tracking-widest text-xs group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
                    </button>
                </div>

                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                    <div className="absolute -top-10 -right-10 md:top-20 md:right-20 w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#9a5a2a] blur-[80px] md:blur-[120px]" />
                    <div className="absolute -bottom-10 -left-10 md:bottom-10 md:left-10 w-48 h-48 md:w-72 md:h-72 rounded-full bg-[#9a5a2a] blur-[60px] md:blur-[100px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-40 md:pb-24">
                    <div className="hero-anim max-w-4xl text-left">
                        <div className="inline-flex items-center gap-2 bg-[#faf3e0]/10 border border-[#faf3e0]/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-6">
                            <Megaphone className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#faf3e0]" />
                            <span className="text-[#faf3e0] text-[10px] md:text-sm font-bold uppercase tracking-widest">Digital Marketing Agency</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-[#faf3e0] leading-[1.1] mb-6 tracking-tight font-heading">
                            Top Digital Marketing Agency That{" "}
                            <span className="text-[#FACC15]">Generates Traffic</span> and Leads
                        </h1>

                        <p className="text-[#faf3e0]/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-10 font-medium">
                            A data-driven digital marketing agency assists companies to expand quicker, target the appropriate market, and build qualified leads. We are a strategy-driven, creatively-driven, data-driven campaign company focused on achieving measurable success on shows of all sizes at Mediamatic Studio.
                        </p>

                        <button
                            onClick={() => setIsAuditModalOpen(true)}
                            className="inline-flex items-center gap-3 bg-[#faf3e0] text-[#652b32] px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-white transition-all active:scale-95 group"
                        >
                            Get Your Free Digital Marketing Audit
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            <section id="services" className="py-24 md:py-32 bg-background">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-[#652b32] mb-8 font-heading leading-tight tracking-tight uppercase">
                            What Do We Offer to <br className="hidden md:block" />
                            Our <span className="text-[#FACC15]">Clients?</span>
                        </h2>
                        <p className="text-base md:text-lg text-[#652b32]/60 max-w-4xl mx-auto leading-relaxed font-medium">
                            The services of our digital marketing company are aimed at making our company more visible, engaging, and selling. You can utilize our services to either undertake small business or enterprise level campaigns.
                        </p>
                    </div>

                    <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div
                                key={i}
                                onClick={() => s.link && router.push(s.link)}
                                className="service-card p-12 rounded-[3.5rem] bg-[#fff8eb] border border-[#652b32]/5 hover:shadow-2xl hover:bg-[#652b32] transition-all duration-500 group cursor-pointer"
                            >
                                <div className="w-20 h-20 rounded-3xl bg-[#652b32]/5 flex items-center justify-center mb-10 group-hover:bg-[#faf3e0]/10 transition-colors">
                                    <Image src={s.icon} alt={s.title} width={40} height={40} className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all group-hover:brightness-0 group-hover:invert" />
                                </div>
                                <h3 className="text-2xl font-black text-[#652b32] mb-6 font-heading group-hover:text-white leading-tight uppercase tracking-tight">
                                    {s.title}
                                </h3>
                                <p className="text-[#652b32]/60 leading-relaxed text-sm group-hover:text-white/80 font-medium">
                                    {s.desc}
                                </p>
                                {s.link && (
                                    <div className="mt-8 flex items-center gap-2 text-[#652b32]/40 group-hover:text-yellow-400 font-black uppercase tracking-widest text-[10px] transition-colors">
                                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="why-us" className="py-20 md:py-32 bg-white flex justify-center">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#652b32] mb-6 font-heading leading-tight">
                            Why Choose Our Digital Marketing Services
                        </h2>
                        <p className="text-[#652b32]/60 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                            Mediamatic Studio is one of the top marketing agencies to work with as a small business since it provides clear, information-oriented, and growth-driven marketing plans based on the needs of your brand.
                        </p>
                    </div>

                    <div className="why-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseUs.map((item, i) => (
                            <div
                                key={i}
                                className="why-card group bg-[#652b32] rounded-3xl p-8 shadow-xl border border-white/10 hover:border-[#652b32]/20 transition-all duration-500 text-center hover:bg-[#faf3e0] hover:-translate-y-4 hover:scale-[1.02]"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-[#652b32]/10 transition-colors">
                                    <Image src={item.icon} alt={item.title} width={48} height={48} className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all" />
                                </div>
                                <h3 className="text-lg font-black text-white group-hover:text-[#652b32] mb-4 transition-colors font-heading leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed group-hover:text-[#652b32]/80 transition-colors font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-32">
                        <h3 className="text-2xl md:text-4xl font-black text-center mb-16 text-[#652b32] font-heading">
                            Our Current Stats
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((s, i) => (
                                <StatsCard key={s.label} {...s} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-[#faf3e0]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="cta-block bg-[#652b32] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-[#faf3e0] shadow-[0_40px_100px_-20px_rgba(101,43,50,0.4)]">
                        <div className="absolute top-10 left-10 opacity-10 hidden md:block group pointer-events-none animate-float">
                            <Sparkles className="w-20 h-20" />
                        </div>
                        <div className="absolute bottom-10 right-10 opacity-10 hidden md:block group pointer-events-none animate-float" style={{ animationDelay: '1s' }}>
                            <Zap className="w-20 h-20" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black mb-8 font-heading leading-tight tracking-tight">
                                Willing to do Business with the{" "}
                                <span className="text-[#FACC15]">Best Digital Marketing Agency?</span>
                            </h2>
                            <p className="text-[#faf3e0]/80 text-xl max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
                                Collaborate with Mediamatic Studio - the most dedicated digital marketing firm that focuses on growth, visibility, and revenue generation. We should develop strong tactics that will transform clicks into customers and grow your business to a higher level.
                            </p>
                            <button
                                onClick={() => setIsAuditModalOpen(true)}
                                className="inline-flex items-center gap-4 bg-[#FACC15] text-[#652b32] px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-white transition-all active:scale-95 group"
                            >
                                Get Started Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="py-20 md:py-32 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
                    <MousePointer2 className="w-[800px] h-[800px] text-[#652b32]" />
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <div className="faq-block">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-6xl font-black text-[#652b32] font-heading leading-tight">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-6">
                            {faqs.map((faq, i) => (
                                <AccordionItem
                                    key={i}
                                    value={`faq-${i}`}
                                    className="bg-[#faf3e0]/30 rounded-3xl border border-[#652b32]/5 px-8 shadow-sm hover:shadow-md transition-all"
                                >
                                    <AccordionTrigger className="text-left font-black text-[#652b32] hover:text-[#652b32] transition-colors py-8 text-lg font-heading no-underline">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#652b32]/70 leading-relaxed pb-8 text-base font-medium">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-[#faf3e0]">
                <div className="container mx-auto px-6">
                    <div className="recent-posts-block">
                        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                            <div>
                                <h2 className="text-3xl md:text-6xl font-black text-[#652b32] mb-6 uppercase tracking-tight font-heading leading-tight">
                                    Insights & Stories
                                </h2>
                                <p className="text-[#652b32]/60 text-xl font-medium">
                                    The latest from our digital marketing labs
                                </p>
                            </div>
                            <button
                                onClick={() => router.push("/blog")}
                                className="flex items-center gap-3 text-[#652b32] font-black uppercase tracking-widest text-[11px] bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all border border-[#652b32]/5 active:scale-95"
                            >
                                View All Insights <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-32 gap-6">
                                <Loader2 className="w-12 h-12 text-[#652b32] animate-spin opacity-20" />
                                <p className="text-[#652b32]/40 font-black uppercase tracking-[0.2em] text-xs">Opening scrolls...</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {recentPosts?.slice(0, 3).map((post: any) => (
                                    <BlogCard key={post.slug} post={post} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <MarketingAuditDialog
                isOpen={isAuditModalOpen}
                onOpenChange={setIsAuditModalOpen}
            />
        </div>
    );
}
