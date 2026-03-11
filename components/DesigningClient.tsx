'use client'

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowLeft,
    Palette,
    ArrowRight,
    CheckCircle2,
    Layers,
    Shapes,
    Paintbrush
} from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const features = [
    { name: "Logo Design", slug: "logo" },
    { name: "Brand Identity", slug: "brand-identity" },
    { name: "Marketing Visuals", slug: "marketing-visuals" },
    { name: "Social Media Graphics", slug: "social-media" },
    { name: "Print Media Design", slug: "print" },
    { name: "Brand Guidelines", slug: "guidelines" },
];

export function DesigningClient() {
    const sectionRef = useRef<HTMLElement>(null);
    const router = useRouter();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-content > *",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1,
                    ease: "power4.out",
                    delay: 0.3
                }
            );

            gsap.fromTo(
                ".content-block",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".content-section",
                        start: "top 90%",
                    },
                }
            );

            gsap.fromTo(
                ".feature-card",
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".features-grid",
                        start: "top 95%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <main ref={sectionRef}>
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#652b32] text-white overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 right-[10%] w-64 h-64 border border-white/10 rounded-full animate-spin-slow opacity-20" />
                        <div className="absolute bottom-20 left-[5%] w-96 h-96 border border-yellow-400/10 rounded-[3rem] rotate-45 opacity-20" />
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
                                <Palette className="w-6 h-6 text-yellow-400" />
                                <span className="text-[12px] font-black uppercase tracking-[0.3em] text-white/90">Creative Excellence</span>
                            </div>

                            <h1 className="font-heading text-5xl md:text-8xl font-black leading-[1.05] mb-10 tracking-tight uppercase">
                                Designing <br />
                                <span className="text-yellow-400 italic font-medium lowercase">Services</span>
                            </h1>

                            <p className="text-xl md:text-3xl text-white/70 leading-relaxed max-w-3xl font-medium mb-12">
                                Design That Tells Your <span className="text-white underline decoration-yellow-400/50 underline-offset-8">Story</span>. Visuals crafted to speak directly to your audience.
                            </p>

                            <button
                                onClick={() => router.push("/get-quote")}
                                className="inline-flex items-center gap-4 bg-yellow-400 text-[#652b32] px-12 py-6 rounded-full font-black uppercase tracking-[0.15em] text-sm hover:bg-white transition-all active:scale-95 shadow-2xl group"
                            >
                                Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-40 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl content-section">
                        <div className="grid lg:grid-cols-2 gap-24">
                            <div className="space-y-16">
                                <div className="content-block">
                                    <p className="text-2xl md:text-4xl text-[#652b32] font-black leading-tight tracking-tight uppercase mb-10">
                                        We create visuals that don't just <span className="text-yellow-600">look good</span>, but communicate your brand's core values.
                                    </p>
                                    <p className="text-lg text-[#652b32]/60 font-medium leading-relaxed">
                                        Our design philosophy is centered around storytelling and audience engagement. We translate complex brand messages into simple, powerful visuals.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {[
                                        { title: "Logo & Branding", desc: "Your face to the world. We build cohesive systems from typography to color palettes.", icon: Shapes, slug: "logo" },
                                        { title: "Marketing Visuals", desc: "Crafting results-driven visuals for social and print advertisements.", icon: Layers, slug: "marketing-visuals" }
                                    ].map((card, i) => (
                                        <div
                                            key={i}
                                            onClick={() => router.push(`/services/designing/${card.slug}/`)}
                                            className="content-block p-12 rounded-[3.5rem] bg-[#fff8eb] border border-[#652b32]/5 shadow-sm hover:shadow-2xl hover:bg-[#652b32] transition-all duration-500 group cursor-pointer"
                                        >
                                            <div className="w-16 h-16 rounded-2xl bg-[#652b32]/5 flex items-center justify-center mb-10 group-hover:bg-[#faf3e0]/10 transition-colors">
                                                <card.icon className="w-8 h-8 text-[#652b32] group-hover:text-[#faf3e0] transition-colors" />
                                            </div>
                                            <h3 className="font-heading text-2xl font-black text-[#652b32] mb-6 group-hover:text-white uppercase tracking-tight leading-tight">{card.title}</h3>
                                            <p className="text-[#652b32]/60 text-base font-medium leading-relaxed group-hover:text-white/80">{card.desc}</p>
                                            <div className="mt-8 flex items-center gap-2 text-[#652b32]/40 group-hover:text-yellow-400 font-black uppercase tracking-widest text-[10px] transition-colors">
                                                Explore <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-20">
                                <div>
                                    <h3 className="font-heading text-2xl font-black text-[#652b32] mb-12 uppercase tracking-widest border-b border-[#652b32]/10 pb-4 flex items-center gap-4">
                                        <Paintbrush className="text-yellow-600" /> Services Lineup
                                    </h3>
                                    <div className="features-grid grid gap-4">
                                        {features.map((item, i) => (
                                            <div
                                                key={i}
                                                onClick={() => router.push(`/services/designing/${item.slug}/`)}
                                                className="feature-card flex items-center gap-6 p-6 bg-white rounded-[2rem] border border-[#652b32]/5 shadow-sm hover:shadow-xl hover:bg-[#652b32] hover:text-white transition-all duration-500 group cursor-pointer"
                                            >
                                                <div className="w-12 h-12 rounded-2xl bg-[#652b32]/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                    <CheckCircle2 className="w-6 h-6 text-[#652b32] group-hover:text-yellow-400 transition-colors" />
                                                </div>
                                                <span className="font-black uppercase tracking-tight text-sm">{item.name}</span>
                                                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="content-block bg-[#652b32] p-12 rounded-[4rem] text-white shadow-2xl">
                                    <h3 className="font-heading text-2xl font-black mb-10 uppercase tracking-tight text-yellow-400">Creative Excellence</h3>
                                    <p className="text-lg text-white/70 font-medium leading-relaxed mb-10">
                                        Our team uses cutting-edge tools and deep understanding of design principles to deliver world-class quality in every project.
                                    </p>
                                    <button
                                        onClick={() => router.push("/get-quote")}
                                        className="w-full inline-flex items-center justify-center gap-4 bg-white text-[#652b32] px-10 py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 transition-all active:scale-95 group"
                                    >
                                        Request A Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-40 bg-[#faf3e0] text-center relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-heading text-4xl md:text-8xl font-black text-[#652b32] mb-12 uppercase tracking-tight leading-tight">
                                Visuals that <br /> <span className="text-yellow-600">Impact</span>
                            </h2>
                            <p className="text-xl text-[#652b32]/60 max-w-3xl mx-auto mb-16 font-bold italic">
                                Ready to transform your brand's visual identity into a powerful storytelling engine?
                            </p>
                            <button
                                onClick={() => router.push("/get-quote")}
                                className="inline-flex items-center gap-5 bg-[#652b32] text-white px-14 py-7 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-600 transition-all active:scale-95 shadow-2xl group"
                            >
                                Hire Our Designers <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
}
