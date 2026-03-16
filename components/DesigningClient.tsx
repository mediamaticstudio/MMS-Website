'use client'

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowLeft,
    Palette,
    ArrowRight,
    CheckCircle2,
    Layers,
    Shapes,
    Paintbrush,
    Sparkles,
    Globe,
    Zap
} from "lucide-react";
import { motion } from "framer-motion";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const features = [
    { name: "Logo Design", slug: "logo", icon: Shapes },
    { name: "Brand Identity", slug: "brand-identity", icon: Sparkles },
    { name: "Marketing Visuals", slug: "marketing-visuals", icon: Layers },
    { name: "Social Media Graphics", slug: "social-media", icon: Globe },
    { name: "Print Media Design", slug: "print", icon: Paintbrush },
    { name: "Brand Guidelines", slug: "guidelines", icon: Zap },
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
                    duration: 1.2,
                    ease: "power4.out",
                    delay: 0.2
                }
            );

            gsap.to(".floating-palette", {
                y: -20,
                rotate: 10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

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
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out",
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
        <div className="min-h-screen bg-[#faf3e0] font-sans selection:bg-[#652b32] selection:text-white">
            <main ref={sectionRef}>
                {/* Hero section with richer background */}
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#652b32] text-white overflow-hidden rounded-b-[4rem] shadow-2xl">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 right-[10%] w-64 h-64 border border-white/10 rounded-full animate-spin-slow opacity-20" />
                        <div className="absolute bottom-20 left-[5%] w-96 h-96 border border-yellow-400/10 rounded-[3rem] rotate-45 opacity-20" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(250,243,224,0.05)_0%,transparent_70%)]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-3 text-white/50 hover:text-yellow-400 mb-12 transition-all font-black uppercase tracking-[0.3em] text-[10px] group bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
                        </Link>

                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="hero-content max-w-4xl lg:flex-1 text-center lg:text-left">
                                <div className="inline-flex items-center gap-4 mb-10 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                    <Palette className="w-5 h-5 text-yellow-400" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">Visual Identity Systems</span>
                                </div>

                                <h1 className="font-heading text-5xl md:text-8xl font-black leading-[0.95] mb-10 tracking-tighter uppercase">
                                    Crafting <br />
                                    <span className="text-yellow-400 italic font-medium lowercase">Masterpieces</span>
                                </h1>

                                <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl font-medium mb-12 mx-auto lg:mx-0">
                                    Your brand isn't just a logo—it's an <span className="text-white font-bold underline decoration-yellow-400/50 underline-offset-8">experience</span>. We build visuals that resonate and endure.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                                    <button
                                        onClick={() => {
                                            router.push("/");
                                            setTimeout(() => {
                                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                            }, 150);
                                        }}
                                        className="inline-flex items-center gap-4 bg-yellow-400 text-[#652b32] px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-all active:scale-95 shadow-[0_20px_50px_rgba(250,204,21,0.3)] group"
                                    >
                                        Consult Designers <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            <div className="hidden lg:flex flex-1 justify-center relative">
                                <div className="floating-palette p-10 bg-white/10 backdrop-blur-3xl rounded-[4rem] border border-white/20 shadow-2xl relative z-20">
                                    <Palette className="w-48 h-48 text-yellow-400 opacity-90" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-400 rounded-full blur-[120px] opacity-20" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-40">
                    <div className="container mx-auto px-6 max-w-7xl content-section">
                        <div className="grid lg:grid-cols-2 gap-24 items-start">
                            <div className="space-y-16">
                                <div className="content-block relative">
                                    <div className="absolute -left-10 top-0 w-2 h-20 bg-yellow-400 rounded-full hidden md:block" />
                                    <p className="text-3xl md:text-5xl text-[#652b32] font-black leading-[1.1] tracking-tight uppercase mb-12">
                                        Visuals that don't just <span className="text-yellow-600 italic">look good</span>, they speak your <span className="bg-[#652b32] text-white px-4 py-1 rounded-2xl">truth</span>.
                                    </p>
                                    <p className="text-xl text-[#652b32]/70 font-medium leading-relaxed max-w-2xl">
                                        Our design philosophy combines artistic intuition with strategic thinking. We don't just draw; we architect your brand's future.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {[
                                        { title: "Bespoke Branding", desc: "Your face to the world. We build cohesive systems from typography to color palettes.", icon: Shapes, slug: "logo" },
                                        { title: "Marketing Assets", desc: "Crafting results-driven visuals for social and print advertisements that convert.", icon: Layers, slug: "marketing-visuals" }
                                    ].map((card, i) => (
                                        <div
                                            key={i}
                                            className="content-block p-12 rounded-[3.5rem] bg-white border border-[#652b32]/5 shadow-xl hover:shadow-2xl hover:bg-[#652b32] transition-all duration-700 group cursor-default"
                                        >
                                            <div className="w-20 h-20 rounded-[2.5rem] bg-[#652b32]/5 flex items-center justify-center mb-10 group-hover:bg-white/10 transition-all duration-700">
                                                <card.icon className="w-10 h-10 text-[#652b32] group-hover:text-yellow-400 transition-colors" />
                                            </div>
                                            <h3 className="font-heading text-3xl font-black text-[#652b32] mb-6 group-hover:text-white uppercase tracking-tight leading-tight">{card.title}</h3>
                                            <p className="text-[#652b32]/70 text-lg font-medium leading-relaxed group-hover:text-white/80 transition-colors">{card.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-20 bg-white/50 backdrop-blur-sm p-10 md:p-14 rounded-[4rem] border border-white/50 shadow-inner">
                                <div>
                                    <h3 className="font-heading text-3xl font-black text-[#652b32] mb-12 uppercase tracking-tight flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-[#652b32] flex items-center justify-center shadow-lg">
                                            <Paintbrush className="text-yellow-400 w-6 h-6" />
                                        </div>
                                        Service Palette
                                    </h3>
                                    <div className="features-grid grid gap-5">
                                        {features.map((item, i) => (
                                            <div
                                                key={i}
                                                className="feature-card flex items-center gap-6 p-8 bg-white rounded-[2.5rem] border border-[#652b32]/5 shadow-sm hover:shadow-2xl hover:bg-[#652b32] hover:text-white transition-all duration-500 group cursor-default"
                                            >
                                                <div className="w-14 h-14 rounded-2xl bg-[#652b32]/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                    <item.icon className="w-7 h-7 text-[#652b32] group-hover:text-yellow-400 transition-colors" />
                                                </div>
                                                <span className="font-black uppercase tracking-tight text-base">{item.name}</span>
                                                <CheckCircle2 className="w-6 h-6 ml-auto text-yellow-600 opacity-20 group-hover:opacity-100 group-hover:text-yellow-400 transition-all" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="content-block bg-[#652b32] p-12 rounded-[3.5rem] text-white shadow-[0_30px_60px_-15px_rgba(101,43,50,0.4)] relative overflow-hidden group">
                                    <div className="relative z-10 font-bold">
                                        <h3 className="font-heading text-3xl font-black mb-8 uppercase tracking-tight text-yellow-400">Creative Supremacy</h3>
                                        <p className="text-xl text-white/70 leading-relaxed mb-12">
                                            Our studio lives at the intersection of imagination and execution. Ready to elevate?
                                        </p>
                                        <button
                                            onClick={() => {
                                                router.push("/");
                                                setTimeout(() => {
                                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                                }, 150);
                                            }}
                                            className="w-full inline-flex items-center justify-center gap-4 bg-white text-[#652b32] px-10 py-7 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-yellow-400 transition-all active:scale-95 group shadow-xl"
                                        >
                                            Consult Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                    <Globe className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12 group-hover:rotate-45 transition-transform duration-[2000ms]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-40 bg-[#652b32] text-center relative overflow-hidden rounded-t-[4rem]">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#faf3e0_0%,transparent_100%)]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="font-heading text-5xl md:text-9xl font-black text-white mb-12 uppercase tracking-tighter leading-[0.9]">
                                Vision into <br /> <span className="text-yellow-400 italic font-medium lowercase">Reality</span>
                            </h2>
                            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                                Join dozens of brands that have transformed their market presence through our strategic design engineering.
                            </p>
                            <button
                                onClick={() => {
                                    router.push("/");
                                    setTimeout(() => {
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                    }, 150);
                                }}
                                className="inline-flex items-center gap-5 bg-yellow-400 text-[#652b32] px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-all active:scale-95 shadow-2xl group"
                            >
                                Start Designing <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
}

