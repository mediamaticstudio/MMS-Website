"use client";
import { useEffect, useRef, useState } from "react";

const domains = [
    {
        icon: "🎓", name: "Education & e-learning",
        desc: "Our education software developers are experienced enough to design state-of-the-art LMS with built-in features such as online quizzes, reporting, monitoring, evaluation, and self-assessment to allow users to keep track of their learning and development. At the same time, our services for developing education software also focus on a user experience strategy to allow for a clean and minimalist user interface design with easy navigation features. Our approach is how we ensure a remarkable learning experience to make it more fun and productive rather than a burden."
    },
    {
        icon: "🏠", name: "Real Estate",
        desc: "Manage the common challenges of the real estate property era with ease. We at MediaMatic help you with our custom real estate software development services, as we are a real estate software development company that offers the best real estate agent software, software for real estate developers, and more, as we combine the latest technology with real estate knowledge, allowing you to revolutionise your real estate business with the best real estate software development services available in the market, as we offer the best property management software development services, real estate software development, and more."
    },
    {
        icon: "🏭", name: "Manufacturing",
        desc: "Join us on this journey of digital transformation in the world of manufacturing with MediaMatic, your go-to partner for custom software development in manufacturing. We use innovative technology and extensive industry knowledge to deliver solutions that transform your production processes. At MediaMatic, our position as a leading company for manufacturing software development is backed by our commitment to excellence and our understanding of the dynamics of the manufacturing industry."
    },
    {
        icon: "🏥", name: "Healthcare & Pharmacy",
        desc: "As a specialist mobile app development company with over 10 years of experience in healthcare, we develop HIPAA-compliant mHealth apps used by hospitals, clinics, and medical professionals worldwide. Our extensive portfolio of healthcare mobile app development services boasts 60+ successful projects with a flawless HIPAA compliance record."
    },
    {
        icon: "✈️", name: "Tours & Travel",
        desc: "With us, at MediaMatic, you can experience a new definition of travel through our founder's unique philosophy of innovation combined with functionality to change the face of the travel and hospitality industry. As a travel software development services company, we offer highly customised travel software solutions that not only change and empower travel agencies, hospitality majors, tour operators, etc., but also reflect our expertise as a leading travel software development company in India."
    },
    {
        icon: "🏦", name: "Banking & Finance",
        desc: "MediaMatic is a well-known name in providing custom software solutions for banking. Our software developers offer solutions to banking institutions, insurance companies, and even investment companies by providing them with cutting-edge technological developments such as AI, ML, and data analytics. Our bespoke online banking solutions help reduce 10-20% of manual activities, enable faster transactions up to 2-3 times, and provide data insights for better decision-making."
    },
    {
        icon: "🎬", name: "Media & Entertainment",
        desc: "MediaMatic is a premier software development company in India to provide cutting-edge software development solutions to the media and entertainment world. Our software development solutions are result-driven, setting us apart from others in this world. We at MediaMatic provide advanced content streaming software development solutions that guarantee a result for the digital appetite of consumers across the world."
    },
];

export default function IndustriesSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    const [hov, setHov] = useState<number | null>(null);

    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "#faf3e0", padding: "5rem 6vw" }}>
            <div style={{
                opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(22px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
                <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "0.8rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                        🌍 Industries
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    fontWeight: 900, color: "#652b32",
                    marginBottom: "0.6rem", lineHeight: 1.15,
                }}>Business Domains We Serve as an E-Commerce Website Development Company</h2>
                <p style={{ fontSize: "0.97rem", color: "rgba(101,43,50,0.6)", maxWidth: "600px", lineHeight: 1.75, marginBottom: "3rem", fontWeight: 300 }}>
                    Our domain expertise in more than 40 industries enables us to provide personalised technology services tailored to each individual business requirement.
                </p>
            </div>

            <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: "2px", background: "rgba(101,43,50,0.12)",
            }}>
                {domains.map((d, i) => (
                    <div key={i}
                        onMouseEnter={() => setHov(i)}
                        onMouseLeave={() => setHov(null)}
                        style={{
                            background: hov === i ? "#652b32" : "#faf3e0",
                            padding: "2.2rem 2rem", cursor: "default",
                            opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)",
                            transition: `background 0.28s ease, opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`,
                        }}>
                        <div style={{ fontSize: "1.9rem", marginBottom: "0.8rem" }}>{d.icon}</div>
                        <div style={{
                            width: hov === i ? "32px" : "0px", height: "2px",
                            background: "#f5c518", marginBottom: "0.6rem",
                            transition: "width 0.3s ease",
                        }} />
                        <div style={{
                            fontSize: "0.97rem", fontWeight: 700,
                            color: hov === i ? "#f5c518" : "#652b32",
                            marginBottom: "0.5rem", transition: "color 0.28s ease",
                        }}>{d.name}</div>
                        <div style={{
                            fontSize: "0.83rem", lineHeight: 1.72, fontWeight: 300,
                            color: hov === i ? "rgba(250,243,224,0.58)" : "rgba(101,43,50,0.6)",
                            maxHeight: hov === i ? "260px" : "0px", overflow: "hidden",
                            transition: "max-height 0.4s ease, color 0.28s ease",
                        }}>{d.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}