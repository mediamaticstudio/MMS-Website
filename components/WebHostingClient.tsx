'use client'

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowLeft,
    ArrowRight,
    Server,
    ShieldCheck,
    Zap,
    LifeBuoy,
    CheckCircle2
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    { name: "Shared Web Hosting", slug: "shared" },
    { name: "Dedicated Web Hosting", slug: "dedicated" },
    { name: "Domain Registration", slug: "domain-registration" },
    { name: "Domain Transfer", slug: "domain-transfer" },
    { name: "cPanel Access", slug: "cpanel" },
    { name: "Business Email Accounts", slug: "email" },
];

export function WebHostingClient() {
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
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: { trigger: ".features-list", start: "top 95%" },
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
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#652b32] text-white overflow-hidden text-left">
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none hidden md:block">
                        <div className="flex gap-4 h-full p-10">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="w-1.5 h-full bg-white rounded-full" />
                            ))}
                        </div>
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
                                <Server className="w-6 h-6 text-yellow-400" />
                                <span className="text-[12px] font-black uppercase tracking-[0.3em] text-white/90">Infrastructure</span>
                            </div>

                            <h1 className="font-heading text-5xl md:text-8xl font-black leading-[1.05] mb-10 tracking-tight uppercase">
                                Web <br />
                                <span className="text-yellow-400 italic font-medium lowercase">Hosting</span>
                            </h1>

                            <p className="text-xl md:text-3xl text-white/70 leading-relaxed max-w-3xl font-medium mb-12">
                                Your trusted <span className="text-white border-b-2 border-yellow-400/30">hosting and domain</span> partner for unbeatable uptime.
                            </p>

                            <button
                                onClick={() => router.push("/get-quote")}
                                className="inline-flex items-center gap-4 bg-yellow-400 text-[#652b32] px-12 py-6 rounded-full font-black uppercase tracking-[0.15em] text-sm hover:bg-white transition-all active:scale-95 shadow-2xl group"
                            >
                                Launch Your Site <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-40 bg-white content-section">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-24 items-start">
                            <div className="content-cards space-y-12">
                                <div className="content-card">
                                    <h2 className="font-heading text-4xl md:text-6xl font-black text-[#652b32] mb-10 uppercase tracking-tight">What We <span className="text-yellow-600">Offer</span></h2>
                                    <p className="text-lg text-[#652b32]/60 font-medium leading-relaxed mb-8">
                                        At MediaMatic Studio, we offer top-notch web hosting and domain services to empower entrepreneurs, businesses, and developers alike.
                                    </p>
                                    <p className="text-lg text-[#652b32]/60 font-medium leading-relaxed">
                                        Whether you're launching your first website or growing your digital presence, our solutions cater to every level of complexity.
                                    </p>
                                </div>

                                <div className="content-card bg-[#652b32] p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                                    <h3 className="font-heading text-2xl font-black mb-8 uppercase tracking-tight text-yellow-400">Our Commitment</h3>
                                    <p className="text-xl text-white/80 leading-relaxed font-bold italic border-l-8 border-yellow-400 pl-10 py-4 mb-10">
                                        "Your success is our priority. We handle the infrastructure so you can handle the business."
                                    </p>
                                    <div className="grid grid-cols-2 gap-10">
                                        <div>
                                            <div className="text-5xl font-black text-white mb-2 tracking-tighter">99.9%</div>
                                            <div className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Uptime Guarantee</div>
                                        </div>
                                        <div>
                                            <div className="text-5xl font-black text-white mb-2 tracking-tighter">24/7</div>
                                            <div className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Human Support</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 pt-10">
                                    {[
                                        { title: "Shared Hosting", desc: "Enterprise-grade protection for your data.", icon: ShieldCheck, slug: "shared" },
                                        { title: "Dedicated", desc: "High-performance CPU & SSD storage.", icon: Zap, slug: "dedicated" }
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            onClick={() => router.push(`/services/webhosting/${item.slug}/`)}
                                            className="p-10 rounded-[3rem] bg-[#faf3e0]/50 border border-[#652b32]/5 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer"
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-[#652b32]/5 flex items-center justify-center mb-6 group-hover:bg-[#652b32] transition-colors">
                                                <item.icon className="w-6 h-6 text-[#652b32] group-hover:text-yellow-400" />
                                            </div>
                                            <h4 className="font-black text-[#652b32] uppercase tracking-tight mb-2">{item.title}</h4>
                                            <p className="text-xs text-[#652b32]/60 font-medium">{item.desc}</p>
                                            <div className="mt-6 flex items-center gap-2 text-[#652b32]/40 group-hover:text-[#652b32] font-black uppercase tracking-widest text-[10px] transition-colors">
                                                Learn More <ArrowRight className="w-3.5 h-3.5" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:sticky lg:top-32 space-y-16">
                                <div>
                                    <h3 className="font-heading text-2xl font-black text-[#652b32] mb-12 uppercase tracking-widest border-b border-[#652b32]/10 pb-4">Hosting Solutions</h3>
                                    <div className="features-list grid gap-4">
                                        {features.map((feature, i) => (
                                            <div
                                                key={i}
                                                onClick={() => router.push(`/services/webhosting/${feature.slug}/`)}
                                                className="feature-item flex items-center gap-6 p-6 bg-[#faf3e0] border border-[#652b32]/5 rounded-[2.5rem] hover:bg-[#652b32] hover:text-white hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                                            >
                                                <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center group-hover:bg-white/10 transition-colors shadow-sm">
                                                    <CheckCircle2 className="w-6 h-6 text-[#652b32] group-hover:text-yellow-400 transition-colors" />
                                                </div>
                                                <span className="font-black uppercase tracking-tight text-sm">{feature.name}</span>
                                                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-12 rounded-[3.5rem] bg-white border border-[#652b32]/10 shadow-2xl">
                                    <h3 className="font-heading text-xl font-black text-[#652b32] mb-8 uppercase tracking-tight flex items-center gap-4">
                                        <LifeBuoy className="text-yellow-600 animate-spin-slow" /> Need Help?
                                    </h3>
                                    <p className="text-[#652b32]/60 font-medium mb-10 leading-relaxed">
                                        Our expert support team is ready to assist you with server migration and setup.
                                    </p>
                                    <button
                                        onClick={() => router.push("/get-quote")}
                                        className="w-full inline-flex items-center justify-center gap-4 bg-[#652b32] text-white px-10 py-6 rounded-full font-black uppercase tracking-[0.15em] text-sm hover:bg-yellow-400 hover:text-[#652b32] transition-all active:scale-95 group shadow-xl"
                                    >
                                        Talk to Support <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-40 bg-[#652b32] text-white text-center relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <h2 className="font-heading text-4xl md:text-8xl font-black mb-12 uppercase tracking-tight leading-tight">
                            Always <br /> <span className="text-yellow-400">Online</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium italic">
                            Join thousands of businesses who trust MediaMatic for their digital infrastructure.
                        </p>
                        <button
                            onClick={() => router.push("/get-quote")}
                            className="inline-flex items-center gap-4 bg-yellow-400 text-[#652b32] px-12 py-6 rounded-full font-black uppercase tracking-[0.15em] text-sm hover:bg-white transition-all active:scale-95 shadow-2xl group"
                        >
                            Book Your Domain <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
