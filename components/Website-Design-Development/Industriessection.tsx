"use client";
import { useEffect, useRef, useState } from "react";

const domains = [
    { icon: "🛍️", name: "Retail & E-Commerce", desc: "We create scalable and user-friendly online apps for the eCommerce business that increase customer engagement, optimize order administration, and drive revenue development. Our solutions can adjust to changing market trends and consumer preferences." },
    { icon: "🎓", name: "Education & e-learning", desc: "We provide comprehensive online learning solutions for EdTech organizations, allowing them to enhance their online learning experiences, encouraging users to engage, and supporting users in tracking their resources. Our web applications are intended to fulfill modern educational needs while improving learning results." },
    { icon: "☁️", name: "SaaS & Digital Platforms", desc: "Unleash the power of connection with our cutting-edge services for developing social media apps. We utilize technology to build unique, usable, and fully secure systems that connect users together, provide opportunities for users to connect, and develop vibrant online communities." },
    { icon: "🛡️", name: "Insurance", desc: "Get unique insurance software and rely on our digitization services and expertise to increase organizational efficiency, lower costs, and provide a high-quality experience for your customers." },
    { icon: "🏗️", name: "Construction & Estate", desc: "Our digital solutions for the real estate industry include property management solutions, listing solutions, and real-time market analysis solutions." },
    { icon: "🚗", name: "Automotive", desc: "Our solutions, including custom automobile software solutions and advanced solutions for developing automobile software applications, are designed to help businesses become more efficient and innovative." },
    { icon: "🏥", name: "Healthcare & Pharmacy", desc: "Our offerings in the healthcare industry include a large number of web-based applications for many different areas, including practice management systems, EHRs, telemedicine, billing & insurance verification. We are committed to providing you with a safe, efficient, and seamless eHealthcare experience." },
    { icon: "✈️", name: "Tours & Travel", desc: "The MediaMatic team will provide a strategic plan using a science-based methodology to meet the technology needs of each hospitality client through the highest quality solution available. We held a technical design workshop to develop the first concept for the architecture of the solution." },
    { icon: "🏦", name: "Banking & Finance", desc: "Through the team at MediaMatic, we will develop secure, scalable web-based applications serving FinTech companies in areas like trading platforms, online banking, loan management, etc. Our value-driven solutions enable financial institutions to remain competitive and develop their businesses." },
    { icon: "🎬", name: "Media & Entertainment", desc: "Make an ambitious move to offer people the best user experience possible, such as music and video recommendations, streaming, editing, gaming, etc. Because this application necessitates more natural cross-platform interaction, professionally built solutions will be useful in keeping up with the large-scale digital invasions in this business." },
];

export default function IndustriesSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState<number | null>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "#652b32", padding: "5rem 6vw" }}>
            <div style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
                <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                        🌍 Industries
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 900, color: "#faf3e0",
                    marginBottom: "3rem", lineHeight: 1.15,
                }}>
                    Business Domains We Serve
                </h2>
            </div>

            {/* Grid of domains */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1px",
                background: "rgba(245,197,24,0.18)",
                marginBottom: "1px",
            }}>
                {domains.map((d, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                            background: hovered === i ? "rgba(245,197,24,0.12)" : "#652b32",
                            padding: "2rem 1.8rem",
                            cursor: "default",
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(24px)",
                            transition: `background 0.25s ease, opacity 0.6s ease ${i * 0.06}s, transform 0.6s ease ${i * 0.06}s`,
                        }}
                    >
                        <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{d.icon}</div>
                        <div style={{
                            fontSize: "0.97rem", fontWeight: 700,
                            color: hovered === i ? "#f5c518" : "#faf3e0",
                            marginBottom: "0.5rem",
                            transition: "color 0.25s ease",
                        }}>
                            {d.name}
                        </div>
                        <div style={{
                            fontSize: "0.83rem", lineHeight: 1.68,
                            color: "rgba(250,243,224,0.5)",
                            maxHeight: hovered === i ? "200px" : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.4s ease",
                            fontWeight: 300,
                        }}>
                            {d.desc}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}