'use client'

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowLeft,
    FileText,
    ArrowRight,
    CheckCircle2,
    Users,
    SearchCheck,
    PenTool
} from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const features = [
    { name: "SEO-Friendly Content", slug: "seo-content" },
    { name: "Web Copywriting", slug: "copywriting" },
    { name: "Social Media Content", slug: "social-content" },
    { name: "Technical Documentation", slug: "documentation" },
    { name: "Blog Posts & Articles", slug: "blog" },
    { name: "Brand-Building Content", slug: "brand-content" },
];

export function ContentManagementClient() {
    const sectionRef = useRef<HTMLElement>(null);
    const router = useRouter();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-content > *",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power4.out", delay: 0.3 }
            );

            gsap.fromTo(
                ".feature-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: { trigger: ".features-list", start: "top 85%" },
                }
            );

            gsap.fromTo(
                ".content-card",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".content-section", start: "top 90%" },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <main ref={sectionRef}>
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#652b32] text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[150px] animation-delay-2000" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <button
                            onClick={() => router.push("/")}
                            className="inline-flex items-center gap-3 text-white/60 hover:text-yellow-400 mb-12 transition-all font-black uppercase tracking-[0.2em] text-[11px] group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
                        </button>

                        <div className="hero-content max-w-5xl">
                            <div className="inline-flex items-center gap-4 mb-10 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <FileText className="w-6 h-6 text-yellow-400" />
                                <span className="text-[12px] font-black uppercase tracking-[0.3em] text-white/90">Content Strategy</span>
                            </div>

                            <h1 className="font-heading text-5xl md:text-8xl font-black leading-[1.05] mb-10 tracking-tight uppercase">
                                Content <br />
                                <span className="text-yellow-400 italic font-medium lowercase">Management</span>
                            </h1>

                            <p className="text-xl md:text-3xl text-white/70 leading-relaxed max-w-3xl font-medium mb-12">
                                Expert content writers delivering high-quality <span className="text-white border-b-2 border-yellow-400/30">storytelling</span> that converts.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <button
                                    onClick={() => router.push("/get-quote")}
                                    className="inline-flex items-center gap-4 bg-yellow-400 text-[#652b32] px-10 py-5 rounded-full font-black uppercase tracking-[0.15em] text-sm hover:bg-white transition-all active:scale-95 shadow-2xl group"
                                >
                                    Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-40 bg-white content-section">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-24 items-start">
                            <div className="space-y-12">
                                <div className="content-card">
                                    <div className="w-16 h-1 bg-[#652b32] mb-8 rounded-full" />
                                    <h2 className="font-heading text-3xl md:text-5xl font-black text-[#652b32] mb-8 uppercase tracking-tight">Our Mission</h2>
                                    <p className="text-xl md:text-2xl text-[#652b32]/60 leading-relaxed font-bold italic border-l-8 border-yellow-400 pl-10 py-4 mb-8">
                                        "To deliver compelling, high-quality content that drives results through authentic storytelling."
                                    </p>
                                </div>

                                <div className="content-card bg-[#faf3e0] p-12 rounded-[3rem] border border-[#652b32]/5 shadow-xl">
                                    <h3 className="font-heading text-2xl font-black text-[#652b32] mb-6 uppercase tracking-tight">Creative & Customized</h3>
                                    <p className="text-lg text-[#652b32]/70 leading-relaxed mb-8 font-medium">
                                        From blog posts and social media content to SEO articles and technical documentation, we provide tailored solutions for every business need.
                                    </p>
                                    <p className="text-lg text-[#652b32]/70 leading-relaxed font-medium">
                                        At MediaMatic Studio, we emphasize client satisfaction. We connect with our clients to understand their vision, brand voice, and the target audience.
                                    </p>
                                </div>

                                <div className="content-card bg-[#652b32] p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-yellow-400/10 transition-colors duration-700" />
                                    <h3 className="font-heading text-2xl font-black mb-6 uppercase tracking-tight">What We Do</h3>
                                    <div className="space-y-6 text-white/70 font-medium">
                                        <p>At MediaMatic Studio, we specialize in providing the best content writing services tailored to our client's needs. Our team of experienced writers excels in crafting SEO-friendly content.</p>
                                        <p>Whether you're looking for marketing copywriting, technical content, or brand-building content, we've got you covered. We don't just create content; we craft stories.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:sticky lg:top-32 space-y-16">
                                <div>
                                    <h3 className="font-heading text-2xl font-black text-[#652b32] mb-10 uppercase tracking-widest border-b border-[#652b32]/10 pb-4">Core Deliverables</h3>
                                    <div className="features-list grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                        {features.map((feature, i) => (
                                            <div
                                                key={i}
                                                onClick={() => router.push(`/services/contentmanagement/${feature.slug}/`)}
                                                className="feature-item flex items-center gap-5 p-6 bg-white rounded-[2rem] border border-[#652b32]/5 shadow-sm hover:shadow-xl hover:border-yellow-400/30 transition-all group cursor-pointer"
                                            >
                                                <div className="w-12 h-12 rounded-2xl bg-[#652b32]/5 flex items-center justify-center group-hover:bg-[#652b32] transition-colors">
                                                    <CheckCircle2 className="w-6 h-6 text-[#652b32] group-hover:text-yellow-400 transition-colors" />
                                                </div>
                                                <span className="font-black text-[#652b32] uppercase tracking-tight text-sm">{feature.name}</span>
                                                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <h3 className="font-heading text-2xl font-black text-[#652b32] mb-10 uppercase tracking-widest border-b border-[#652b32]/10 pb-4">Why MediaMatic?</h3>
                                    <div className="grid gap-6">
                                        {[
                                            { icon: Users, title: "Expert Team", text: "A dedicated team of writers, editors, and strategists who take pride in producing top-tier content." },
                                            { icon: SearchCheck, title: "Detail Oriented", text: "Every piece is meticulously written and proofread to ensure perfection and alignment." },
                                            { icon: PenTool, title: "Brand Synergy", text: "We understand your voice and audience to deliver content that truly resonates." }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex gap-6 p-8 rounded-[2.5rem] bg-[#faf3e0]/30 border border-[#652b32]/5 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#652b32] transition-colors">
                                                    <item.icon className="w-7 h-7 text-[#652b32] group-hover:text-yellow-400" />
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-[#652b32] uppercase tracking-tight mb-2">{item.title}</h4>
                                                    <p className="text-[#652b32]/60 text-sm font-medium leading-relaxed">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-10">
                                    <button
                                        onClick={() => router.push("/get-quote")}
                                        className="w-full inline-flex items-center justify-center gap-4 bg-[#652b32] text-white px-10 py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 hover:text-[#652b32] transition-all active:scale-95 shadow-2xl group"
                                    >
                                        Discuss Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-40 bg-[#652b32] text-white text-center relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading text-4xl md:text-7xl font-black mb-12 uppercase tracking-tight leading-tight">
                                Scale your brand <br /> with <span className="text-yellow-400">Content</span>
                            </h2>
                            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium italic">
                                Establish a strong presence or extend your digital footprint with customized solutions.
                            </p>
                            <button
                                onClick={() => router.push("/get-quote")}
                                className="inline-flex items-center gap-4 bg-yellow-400 text-[#652b32] px-12 py-6 rounded-full font-black uppercase tracking-[0.15em] text-sm hover:bg-white transition-all active:scale-95 shadow-2xl group"
                            >
                                Consult Our Writers <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
}
