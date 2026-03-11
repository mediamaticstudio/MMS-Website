'use client'

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Monitor, CheckCircle, ArrowRight, Smartphone, Globe, ShoppingCart, Layout, Code2, Zap } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const features = [
    { name: "Mobile App Development", slug: "mobile-app" },
    { name: "Website Development", slug: "website" },
    { name: "E-Commerce Solutions", slug: "ecommerce" },
    { name: "Custom Web Applications", slug: "custom-web" },
    { name: "UI/UX Design", slug: "ui-ux" },
    { name: "Responsive Design", slug: "responsive" },
];

export function WebDevelopmentClient() {
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
                ".feature-item",
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".features-list",
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
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#652b32] text-white overflow-hidden text-left">
                    <div className="absolute inset-x-0 top-0 h-full opacity-5 pointer-events-none select-none overflow-hidden font-mono text-[10px] leading-none whitespace-pre p-20">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div key={i} className="mb-4">
                                {`const app = express(); app.use(cors()); app.get('/api/v1/growth', (req, res) => { return res.json({ success: true, revenue: Infinity }); });`}
                            </div>
                        ))}
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
                                <Code2 className="w-6 h-6 text-yellow-400" />
                                <span className="text-[12px] font-black uppercase tracking-[0.3em] text-white/90">Full Stack Solutions</span>
                            </div>

                            <h1 className="font-heading text-5xl md:text-8xl font-black leading-[1.05] mb-10 tracking-tight uppercase">
                                Web & App <br />
                                <span className="text-yellow-400 italic font-medium lowercase">Development</span>
                            </h1>

                            <p className="text-xl md:text-3xl text-white/70 leading-relaxed max-w-3xl font-medium mb-12">
                                Your one-stop digital partner for <span className="text-white border-b-2 border-yellow-400/30">cutting-edge</span> web and mobile experiences that scale.
                            </p>

                            <button
                                onClick={() => router.push("/get-quote")}
                                className="inline-flex items-center gap-4 bg-yellow-400 text-[#652b32] px-12 py-6 rounded-full font-black uppercase tracking-[0.15em] text-sm hover:bg-white transition-all active:scale-95 shadow-2xl group"
                            >
                                Build Your Future <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-40 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl content-section">
                        <div className="grid lg:grid-cols-2 gap-24 items-start">
                            <div className="space-y-12">
                                <div className="content-block">
                                    <h2 className="font-heading text-4xl md:text-6xl font-black text-[#652b32] mb-10 uppercase tracking-tight">Your Digital <br /> <span className="text-yellow-600">Dream Team</span></h2>
                                    <p className="text-xl text-[#652b32]/60 font-medium leading-relaxed mb-8">
                                        We are not just another tech company — we are your strategic partner helping businesses worldwide build powerful digital products.
                                    </p>
                                    <p className="text-lg text-[#652b32]/60 font-medium leading-relaxed">
                                        Whether you are launching a killer app or a high-performing website, we have your back. From startups to global enterprises, we understand what it takes to succeed online.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-8">
                                    {[
                                        { title: "Mobile Apps", desc: "From food delivery platforms to fitness trackers, we design apps users love.", icon: Smartphone, slug: "mobile-app" },
                                        { title: "Websites", desc: "Clean design, mobile-friendly layouts, and focus on customer conversion.", icon: Globe, slug: "website" },
                                        { title: "E-Commerce", desc: "Scale your store with robust payment integrations and seamless UX.", icon: ShoppingCart, slug: "ecommerce" },
                                        { title: "UI/UX Design", desc: "Visual storytelling through interactive and intuitive user interfaces.", icon: Layout, slug: "ui-ux" }
                                    ].map((card, i) => (
                                        <div
                                            key={i}
                                            onClick={() => router.push(`/services/web-development/${card.slug}/`)}
                                            className="content-block p-12 rounded-[3.5rem] bg-[#fff8eb] border border-[#652b32]/5 hover:shadow-2xl hover:bg-[#652b32] transition-all duration-500 group cursor-pointer"
                                        >
                                            <div className="w-16 h-16 rounded-2xl bg-[#652b32]/5 flex items-center justify-center mb-10 group-hover:bg-[#faf3e0]/10 transition-colors">
                                                <card.icon className="w-8 h-8 text-[#652b32] group-hover:text-yellow-400 transition-colors" />
                                            </div>
                                            <h3 className="font-heading text-2xl font-black text-[#652b32] mb-6 group-hover:text-white uppercase tracking-tight leading-tight">{card.title}</h3>
                                            <p className="text-[#652b32]/60 group-hover:text-white/80 text-base font-medium leading-relaxed">{card.desc}</p>
                                            <div className="mt-8 flex items-center gap-2 text-[#652b32]/40 group-hover:text-yellow-400 font-black uppercase tracking-widest text-[10px] transition-colors">
                                                Learn More <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:sticky lg:top-32 space-y-16">
                                <div>
                                    <h3 className="font-heading text-2xl font-black text-[#652b32] mb-10 uppercase tracking-widest border-b border-[#652b32]/10 pb-4">Core Specifications</h3>
                                    <div className="features-list grid gap-4">
                                        {features.map((item, i) => (
                                            <div
                                                key={i}
                                                onClick={() => router.push(`/services/web-development/${item.slug}/`)}
                                                className="feature-item flex items-center gap-6 p-6 bg-white rounded-[2rem] border border-[#652b32]/5 shadow-sm hover:shadow-xl hover:bg-[#652b32] hover:text-white transition-all duration-500 group cursor-pointer"
                                            >
                                                <div className="w-12 h-12 rounded-2xl bg-[#652b32]/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                    <CheckCircle className="w-6 h-6 text-[#652b32] group-hover:text-yellow-400 transition-colors" />
                                                </div>
                                                <span className="font-black uppercase tracking-tight text-sm">{item.name}</span>
                                                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-12 rounded-[4rem] bg-[#652b32] text-white shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-yellow-400/20 transition-all duration-1000" />
                                    <h3 className="font-heading text-2xl font-black mb-10 uppercase tracking-tight text-yellow-400 flex items-center gap-4">
                                        <Zap className="fill-current" /> Why Choose Us?
                                    </h3>
                                    <p className="text-xl text-white/70 font-medium leading-relaxed mb-10">
                                        Budget-friendly pricing, world-class quality, and a deep understanding of the global digital ecosystem.
                                    </p>
                                    <button
                                        onClick={() => router.push("/get-quote")}
                                        className="w-full inline-flex items-center justify-center gap-4 bg-white text-[#652b32] px-10 py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-400 hover:text-[#652b32] transition-all active:scale-95 group shadow-2xl"
                                    >
                                        Launch Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
                                Code <br /> with <span className="text-yellow-600">Passion</span>
                            </h2>
                            <p className="text-xl text-[#652b32]/60 max-w-3xl mx-auto mb-16 font-bold italic translate-y-[-10px]">
                                Ready to build high-performing digital storefronts that convert visitors into loyal customers?
                            </p>
                            <button
                                onClick={() => router.push("/get-quote")}
                                className="inline-flex items-center gap-5 bg-[#652b32] text-white px-14 py-7 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-yellow-600 transition-all active:scale-95 shadow-2xl group"
                            >
                                Talk to Developers <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
}
