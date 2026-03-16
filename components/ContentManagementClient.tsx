"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, FileText, CheckCircle, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const features = [
    "SEO-Friendly Content",
    "Web Copywriting",
    "Social Media Content",
    "Technical Documentation",
    "Blog Posts & Articles",
    "Brand-Building Content",
];

const WHY = [
    { title: "Expert Team", body: "A dedicated team of writers, editors, and strategists who take pride in producing top-tier content." },
    { title: "Attention to Detail", body: "Every piece of content is meticulously written, edited, and proofread to ensure perfection." },
    { title: "Client-Centric Approach", body: "We take the time to understand your brand, voice, and audience to deliver content that truly resonates." },
];

const ContentManagementClient = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
        const ctx = gsap.context(() => {
            gsap.fromTo(".service-hero-content > *",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out", delay: 0.3 });
            gsap.fromTo(".feature-item",
                { x: -30, opacity: 0 },
                {
                    x: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out",
                    scrollTrigger: { trigger: ".features-list", start: "top 95%" }
                });
            gsap.fromTo(".content-block",
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, stagger: 0.2, duration: 0.7, ease: "power3.out",
                    scrollTrigger: { trigger: ".content-blocks", start: "top 95%" }
                });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-background w-full">
            <main ref={sectionRef}>

                {/* ══ HERO ══════════════════════════════════════════════════ */}
                <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
                    {/* Glow blob */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
                            style={{ backgroundColor: "rgba(154,90,42,0.3)" }} />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        {/* Back link — text-primary-foreground works now */}
                        <Link href="/#services"
                            className="flex items-center gap-2 mb-8 font-medium transition-opacity opacity-70 hover:opacity-100 group"
                            style={{ color: "var(--text-light)" }}>
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back
                        </Link>

                        <div className="service-hero-content max-w-4xl">
                            {/* Icon + label */}
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                                    style={{ backgroundColor: "rgba(250,243,224,0.15)" }}>
                                    <FileText className="w-7 h-7" style={{ color: "var(--text-light)" }} />
                                </div>
                                <span className="text-sm uppercase tracking-[0.2em]"
                                    style={{ color: "rgba(250,243,224,0.60)" }}>
                                    Service
                                </span>
                            </div>

                            {/* H1 */}
                            <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-bold mb-6"
                                style={{ color: "var(--text-light)" }}>
                                Content{" "}
                                <span className="italic font-normal"
                                    style={{ color: "rgba(250,243,224,0.70)" }}>
                                    Management
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl leading-relaxed max-w-2xl"
                                style={{ color: "rgba(250,243,224,0.80)" }}>
                                Expert content writers delivering high-quality content writing services.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ══ CONTENT ═══════════════════════════════════════════════ */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                            {/* LEFT */}
                            <div className="content-blocks space-y-8">

                                <div className="content-block">
                                    <h2 className="text-2xl font-bold mb-4 text-foreground">What We Do</h2>
                                    <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                                        At MediaMatic Studio, we specialize in providing the best content writing
                                        services tailored to our client&apos;s needs. Our team of experienced writers
                                        excels in crafting high-quality, SEO-friendly content, web copywriting, and
                                        engaging social media content that will captivate target audience and drive results.
                                    </p>
                                    <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                        Whether you&apos;re looking for marketing copywriting, technical content, blog
                                        posts, or brand-building content, we&apos;ve got you covered. At MediaMatic
                                        Studio, we don&apos;t just create content; we craft stories that connect our
                                        client&apos;s brand with its target audience.
                                    </p>
                                </div>

                                <div className="content-block">
                                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                                        Creative &amp; Customized Content
                                    </h2>
                                    <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                                        From blog posts and social media content to SEO articles and technical
                                        documentation, we provide tailored solutions for every business need.
                                    </p>
                                    <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                                        At MediaMatic Studio, we emphasize client satisfaction as much as possible.
                                        We connect with our clients to understand their vision, brand voice, and the
                                        target audience—the most important factors that will allow us to deliver the
                                        most relatable content. Whether you have just started and want to establish a
                                        strong presence or are an already established brand looking to extend your
                                        digital footprint, we provide customized solutions to meet your specific needs.
                                    </p>
                                </div>

                                <div className="content-block">
                                    <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
                                    <p className="text-lg pl-6 italic border-l-4"
                                        style={{ color: "var(--text-muted)", borderColor: "var(--primary-mid)" }}>
                                        Our mission is simple: to deliver compelling, high-quality content that drives
                                        results. Whether you&apos;re a start-up or an established brand, we help you
                                        communicate your message effectively and convert interest into sales.
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="space-y-12">

                                {/* Services list */}
                                <div>
                                    <h3 className="text-xl font-bold mb-8 text-foreground">Our Services Include</h3>
                                    <div className="features-list space-y-4">
                                        {features.map((feature, i) => (
                                            <div key={i}
                                                className="feature-item flex items-center gap-4 p-4 bg-card rounded-xl border transition-colors shadow-sm hover:border-primary/30"
                                                style={{ borderColor: "var(--border-soft)" }}>
                                                <CheckCircle className="w-5 h-5 flex-shrink-0 text-primary" />
                                                <span className="font-medium text-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Why Choose Us */}
                                <div className="content-block">
                                    <h3 className="text-xl font-bold mb-6 text-foreground">Why Choose Us?</h3>
                                    <div className="space-y-6">
                                        {WHY.map(({ title, body }) => (
                                            <div key={title}
                                                className="bg-card p-5 rounded-xl border shadow-sm"
                                                style={{ borderColor: "var(--border-soft)" }}>
                                                <h4 className="font-semibold text-lg mb-2 text-foreground">{title}</h4>
                                                <p style={{ color: "var(--text-muted)" }}>{body}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <button
                                    onClick={() => {
                                        router.push("/");
                                        setTimeout(() => {
                                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                        }, 150);
                                    }}
                                    className="inline-flex items-center gap-2 bg-primary px-8 py-3 rounded-full font-semibold transition-colors"
                                    style={{ color: "var(--text-light)", boxShadow: "0 10px 20px -10px rgba(101,43,50,0.5)" }}
                                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--btn-hover)")}
                                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "")}>
                                    Get Started <ArrowRight size={18} />
                                </button>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default ContentManagementClient;