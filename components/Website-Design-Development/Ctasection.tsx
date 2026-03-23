"use client";
import { useEffect, useRef, useState } from "react";
import { Globe2, TrendingUp } from "lucide-react";

const ctaItems = [
    { icon: Globe2, label: "What is Website Design & Development?", desc: "Web application development consists of creating strong and user-focused web applications that provide website design services like fluid user interactions across many devices. Smart front-end design and sturdy back-end architecture of the web application are likely to boost business productivity and consumer interactions." },
    { icon: TrendingUp, label: "How does a website give success for businesses?", desc: "As a company of website app developers, we specialize in creating dynamic and scalable web applications that are personalized to deliver improved business results for you. From custom portals to interactive eCommerce platforms, our solutions cater to worldwide audiences while meeting your revenue objectives." },
];

export default function CTASection() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "#faf3e0", padding: "5rem 6vw" }}>
            <div style={{ display: "inline-block", borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                    Our Purpose
                </span>
            </div>
            <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 900, color: "#652b32",
                marginBottom: "3rem", lineHeight: 1.15,
                opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
                Why Website Development Matters
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "0" }}>
                {ctaItems.map((item, i) => (
                    <div key={i} style={{
                        padding: "3rem 3rem",
                        background: i === 0 ? "#faf3e0" : "#652b32",
                        borderTop: "3px solid #f5c518",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(30px)",
                        transition: `opacity 0.7s ease ${i * 0.2}s, transform 0.7s ease ${i * 0.2}s`,
                    }}>
                        <div style={{ fontSize: "2.2rem", marginBottom: "1rem", color: i === 0 ? "#652b32" : "#f5c518" }}>
                            <item.icon size={36} strokeWidth={1.5} />
                        </div>
                        <h3 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.25rem", fontWeight: 700,
                            color: i === 0 ? "#652b32" : "#faf3e0",
                            marginBottom: "0.8rem", lineHeight: 1.3,
                        }}>
                            {item.label}
                        </h3>
                        <p style={{
                            fontSize: "0.93rem", lineHeight: 1.78,
                            color: i === 0 ? "rgba(101,43,50,0.68)" : "rgba(250,243,224,0.65)",
                            fontWeight: 300,
                        }}>
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Bottom CTA bar */}
            <div style={{
                marginTop: "4rem",
                background: "#652b32",
                padding: "2.5rem 3rem",
                display: "flex", alignItems: "center",
                justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.7s ease 0.5s",
            }}>
                <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 900, color: "#faf3e0" }}>
                        Ready to build something outstanding?
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(250,243,224,0.55)", marginTop: "0.3rem" }}>
                        Let's turn your idea into a digital reality.
                    </div>
                </div>
                <button style={{
                    background: "#f5c518", color: "#652b32",
                    border: "none", padding: "0.9rem 2.2rem",
                    fontWeight: 800, fontSize: "0.9rem",
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    cursor: "pointer", fontFamily: "inherit",
                    flexShrink: 0, display: "flex", alignItems: "center", gap: "0.5rem",
                }}>
                    Let's Collaborate
                </button>
            </div>
        </section>
    );
}