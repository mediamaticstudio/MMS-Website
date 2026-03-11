"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import {
    FileText,
    Clapperboard,
    MonitorSmartphone,
    Palette,
    Megaphone,
    Globe,
    ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        icon: Clapperboard,
        bgImage: "/assets/Services/cube.webp",
        title: "2D & 3D Animation",
        tagline: "A creative studio that helps you move forward.",
        description: "Transform your business ideas into compelling visual stories with high-quality 2D & 3D animation, explainer videos, and branding videos.",
        features: ["Explainer Videos", "Brand Videos", "Motion Graphics", "VFX"],
        href: "/services/animation/",
    },
    {
        icon: FileText,
        bgImage: "/assets/Services/content.webp",
        title: "Content Management",
        tagline: "Expert content writers delivering high-quality content.",
        description: "SEO-friendly content, web copywriting, engaging social media content, technical writing, and brand-building content that connects with your audience.",
        features: ["Blog Posts", "SEO Articles", "Technical Docs", "Social Media"],
        href: "/services/contentmanagement/",
    },
    {
        icon: MonitorSmartphone,
        bgImage: "/assets/Services/web.webp",
        title: "Website & App Development ",
        tagline: "Your go-to digital partner.",
        description: " Websites that don't just look good but bring in customers. Mobile apps your customers can't stop using.Clean, responsive design.",
        features: ["Mobile Apps", "Websites", "E-Commerce", "Custom Solutions"],
        href: "/services/website-development-agency/",
    },
    {
        icon: Palette,
        bgImage: "/assets/Services/designing.webp",
        title: "Designing",
        tagline: "Design That Tells Your Story.",
        description: "Logos, branding, and marketing visuals crafted to speak directly to your audience. We build visual identities that resonate.",
        features: ["Logo Design", "Branding", "Marketing Visuals", "Social Media"],
        href: "/services/designing/",
    },
    {
        icon: Megaphone,
        bgImage: "/assets/Services/digital-marketing.webp",
        title: "Digital Marketing",
        tagline: "Expand your reach with MediaMatic Studio.",
        description: "SEO, SMO, SEM, SMM expertise. Data-driven digital marketing solutions that increase conversions, engagement, and visibility.",
        features: ["SEO", "Social Media", "Email Marketing", "Google Ads", "Meta Ads"],
        href: "/services/digital-marketing-agency/",
    },
    {
        icon: Globe,
        bgImage: "/assets/Services/cloud-migration.webp",
        title: " VPS Web Hosting Services",
        tagline: "Your trusted hosting partner.",
        description: "Top-notch web hosting and domain services. 24/7 support, 99.9% uptime guarantee, cPanel access, and business email accounts.",
        features: ["Shared Hosting", "Dedicated", "Domain", "Email"],
        href: "/services/webhosting/",
    },
];

export const Services = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const router = useRouter();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(
                ".services-heading",
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    force3D: true,
                    scrollTrigger: {
                        trigger: ".services-heading",
                        start: "top 95%",
                    },
                }
            );

            // Cards stagger animation
            gsap.fromTo(
                ".service-card",
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    force3D: true,
                    scrollTrigger: {
                        trigger: ".services-grid",
                        start: "top 95%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="min-h-screen bg-background py-24 md:py-32 relative overflow-hidden"
        >
            {/* Background pattern */}
            <div
                className="absolute inset-0 opacity-[0.01]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 59px, hsl(var(--foreground)) 59px, hsl(var(--foreground)) 60px)",
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="block text-base font-black tracking-[0.25em] text-[#652b32]/40 mb-6 uppercase">
                        What We Do
                    </span>
                    <h2 className="services-heading font-heading text-5xl md:text-8xl font-black text-[#652b32] text-balance mb-8 tracking-tighter uppercase leading-[0.9]">
                        Our  <br />
                        <span className="text-[#FACC15]">Services</span>
                    </h2>
                    <p className="text-lg text-[#652b32]/60 max-w-2xl mx-auto leading-relaxed font-medium">
                        A complete creative powerhouse for all your branding and digital needs. We turn complex challenges into simple, elegant digital solutions.
                    </p>
                </div>

                <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => router.push(service.href)}
                            className="service-card group relative p-12 rounded-[3.5rem] bg-[#fff8eb] border border-[#652b32]/5 hover:shadow-2xl hover:bg-[#652b32] transition-all duration-500 overflow-hidden cursor-pointer"
                        >
                            {/* Service Background Image - Bottom Right */}
                            <div
                                className="absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none transition-all duration-500 group-hover:opacity-10 group-hover:scale-110"
                                style={{
                                    backgroundImage: `url(${service.bgImage})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'bottom right',
                                }}
                            />

                            <div className="relative z-10">
                                {/* Index */}
                                <span className="absolute top-0 right-0 text-6xl font-black text-[#652b32]/5 group-hover:text-white/5 transition-colors">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* Icon */}
                                <div className="w-16 h-16 mb-10 rounded-2xl bg-[#652b32]/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                                    <service.icon
                                        className="w-7 h-7 text-[#652b32] group-hover:text-[#FACC15] transition-colors"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-black text-[#652b32] mb-3 group-hover:text-white transition-colors font-heading leading-tight uppercase tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-xs text-[#652b32]/40 italic mb-6 group-hover:text-white/40 transition-colors uppercase font-bold tracking-widest">
                                    {service.tagline}
                                </p>

                                {/* Description */}
                                <p className="text-[#652b32]/60 text-sm leading-relaxed mb-8 group-hover:text-white/70 transition-colors font-medium">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {service.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] uppercase tracking-widest px-3 py-1.5 bg-[#652b32]/5 rounded-full text-[#652b32]/60 font-black group-hover:bg-white/10 group-hover:text-white/80 transition-all"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div
                                    className="flex items-center gap-3 text-xs font-black text-[#652b32]/40 group-hover:text-[#FACC15] transition-all uppercase tracking-[0.2em]"
                                >
                                    Explore Service
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
