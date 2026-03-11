'use client'

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Clapperboard, ArrowRight, Sparkles, CheckCircle2, PlayCircle, Layers, Monitor } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const features = [
    { title: "2D & 3D Animation", slug: "2d-3d", icon: Layers, desc: "A timeless art form and depth adding realism using cutting-edge technology." },
    { title: "Explainer Videos", slug: "explainer", icon: PlayCircle, desc: "Simplify complex ideas through engaging visual narratives that capture attention." },
    { title: "Concept Development", slug: "concept", icon: Sparkles, desc: "Creative concepts and professional storyboarding for your video projects." },
    { title: "Script & Production", slug: "scripting", icon: Monitor, desc: "Professional script writing and full production services for animated content." },
];

const comparisonData = [
    { feature: "Dimension", d2: "Flat, two-dimensional", d3: "Depth, three-dimensional" },
    { feature: "Production Time", d2: "Faster and cost-effective", d3: "Longer and resource-intensive" },
    { feature: "Visual Style", d2: "Stylized and simplified", d3: "Realistic and immersive" },
    { feature: "Best For", d2: "Explainers, ads, social media", d3: "Product demos, cinematic content" },
    { feature: "Budget", d2: "Lower budget friendly", d3: "Higher production cost" },
    { feature: "Flexibility", d2: "Easy revisions and updates", d3: "Complex changes require more effort" },
];

const benefits = [
    "Engaging animations that enhance brand storytelling",
    "Timeless creativity of classic 2D animation",
    "Depth and realism with cutting-edge 3D animation",
    "Seamless integration of live-action and digital visuals",
    "Personalized service from skilled animators",
    "Full-service studio handling every project aspect",
    "Unmatched creativity and innovation",
];

export function AnimationClient() {
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans">
            <main ref={sectionRef}>
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#652b32] text-white overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 right-[5%] w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] animate-pulse" />
                        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
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
                                <Clapperboard className="w-6 h-6 text-yellow-400" />
                                <span className="text-[12px] font-black uppercase tracking-[0.3em] text-white/90">Creative Production</span>
                            </div>

                            <h1 className="font-heading text-5xl md:text-8xl font-black leading-[1.05] mb-10 tracking-tight uppercase">
                                2D & 3D <br />
                                <span className="text-yellow-400 italic font-medium lowercase">Animation</span>
                            </h1>

                            <p className="text-xl md:text-3xl text-white/70 leading-relaxed max-w-3xl font-medium mb-12">
                                Transforming complex ideas into <span className="text-white border-b-2 border-yellow-400/30">compelling visual stories</span> that capture hearts and minds.
                            </p>

                            <button
                                onClick={() => router.push("/get-quote")}
                                className="inline-flex items-center gap-4 bg-yellow-400 text-[#652b32] px-12 py-6 rounded-full font-black uppercase tracking-[0.15em] text-sm hover:bg-white transition-all active:scale-95 shadow-2xl group"
                            >
                                Start Your Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-40 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl content-section">
                        <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
                            <div className="space-y-16">
                                <div className="content-block">
                                    <h2 className="font-heading text-3xl md:text-5xl font-black text-[#652b32] mb-8 uppercase tracking-tight">What We Do</h2>
                                    <p className="text-xl text-[#652b32]/60 leading-relaxed font-bold italic border-l-8 border-yellow-400 pl-10 py-4 mb-12">
                                        "We specialize in high-quality animation that translates your business goals into cinematic masterpieces."
                                    </p>
                                    <p className="text-lg text-[#652b32]/70 leading-relaxed font-medium">
                                        Our team of creative professionals specializes in 2D & 3D animation, explainer videos, branding videos, and more. From concept development and storyboarding to final production, we handle everything.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {features.map((f, i) => (
                                        <div
                                            key={i}
                                            onClick={() => router.push(`/services/animation/${f.slug}/`)}
                                            className="p-8 rounded-[2.5rem] bg-[#faf3e0] border border-[#652b32]/5 shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-[#652b32]/5 flex items-center justify-center mb-6 group-hover:bg-[#652b32] transition-colors">
                                                <f.icon className="w-6 h-6 text-[#652b32] group-hover:text-yellow-400 transition-colors" />
                                            </div>
                                            <h4 className="font-black text-[#652b32] uppercase tracking-tight text-lg mb-2">{f.title}</h4>
                                            <p className="text-[#652b32]/60 text-sm font-medium leading-relaxed">{f.desc}</p>
                                            <div className="mt-6 flex items-center gap-2 text-[#652b32]/40 group-hover:text-[#652b32] font-black uppercase tracking-widest text-[10px] transition-colors">
                                                Explore <ArrowRight className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:sticky lg:top-32">
                                <div className="relative p-1 md:p-12 rounded-[4rem] bg-[#652b32] text-white shadow-[0_50px_100px_-20px_rgba(101,43,50,0.4)] overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                                    <h3 className="font-heading text-3xl font-black mb-10 uppercase tracking-tight">Why Animation Works</h3>
                                    <div className="space-y-6">
                                        {benefits.map((benefit, i) => (
                                            <div key={i} className="flex gap-5 group/item">
                                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-yellow-400 transition-colors">
                                                    <CheckCircle2 className="w-4 h-4 text-white group-hover/item:text-[#652b32]" />
                                                </div>
                                                <p className="text-lg text-white/70 font-medium leading-tight group-hover/item:text-white transition-colors">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-40">
                            <div className="text-center mb-20">
                                <h2 className="font-heading text-4xl md:text-7xl font-black text-[#652b32] mb-8 uppercase tracking-tight leading-tight">2D <span className="text-yellow-600">vs</span> 3D</h2>
                                <div className="h-1.5 w-40 bg-yellow-400 mx-auto rounded-full" />
                            </div>

                            <div className="overflow-x-auto rounded-[3.5rem] shadow-2xl border border-[#652b32]/5">
                                <table className="w-full border-collapse bg-white min-w-[800px]">
                                    <thead>
                                        <tr className="bg-[#652b32] text-white">
                                            <th className="py-10 px-12 text-left font-black uppercase tracking-[0.2em] text-xs">Feature</th>
                                            <th className="py-10 px-12 text-left font-black uppercase tracking-[0.2em] text-xs">2D Animation</th>
                                            <th className="py-10 px-12 text-left font-black uppercase tracking-[0.2em] text-xs">3D Animation</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#652b32]/10">
                                        {comparisonData.map((row, i) => (
                                            <tr key={i} className="hover:bg-[#faf3e0]/50 transition-colors group">
                                                <td className="py-8 px-12 font-black text-[#652b32] uppercase tracking-tighter text-sm">{row.feature}</td>
                                                <td className="py-8 px-12 text-[#652b32]/60 font-medium group-hover:text-[#652b32] transition-colors">{row.d2}</td>
                                                <td className="py-8 px-12 text-[#652b32]/60 font-medium group-hover:text-[#652b32] transition-colors">{row.d3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-40 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <button
                                    onClick={() => router.push("/get-quote")}
                                    className="inline-flex items-center gap-5 bg-[#652b32] text-white px-14 py-7 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-600 transition-all active:scale-95 shadow-2xl group"
                                >
                                    Start Your Animation Project <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
