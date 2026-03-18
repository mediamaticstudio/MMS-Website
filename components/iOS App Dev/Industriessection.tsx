"use client";
import { useState } from "react";

const industries = [
    { icon: "🏥", name: "Healthcare", desc: "HIPAA-compliant apps for patient care, telemedicine, and health management." },
    { icon: "💳", name: "Finance & Banking", desc: "Secure fintech apps for transactions, compliance, and financial automation." },
    { icon: "🛍️", name: "eCommerce", desc: "High-converting shopping apps with seamless checkout experiences." },
    { icon: "✈️", name: "Travel", desc: "Smart booking, real-time updates, and itinerary management apps." },
    { icon: "💬", name: "Social Networks", desc: "Real-time messaging, content sharing, and community-building platforms." },
    { icon: "📚", name: "Education", desc: "Interactive eLearning apps with engagement tools for students and educators." },
    { icon: "🚛", name: "Logistics", desc: "Fleet tracking, route optimization, and supply chain management solutions." },
    { icon: "🎬", name: "Entertainment", desc: "OTT platforms, streaming apps, and digital content experiences." },
    { icon: "🏠", name: "Real Estate", desc: "AI-driven property apps with virtual tours and predictive analytics." },
    { icon: "✈️", name: "Air Transportation", desc: "Reliable aviation ops and maintenance apps built to safety standards." },
    { icon: "⛽", name: "Oil & Gas", desc: "Rugged mobile solutions for asset monitoring in harsh environments." },
    { icon: "🏭", name: "Manufacturing", desc: "Equipment monitoring, quality control, and supply chain tracking apps." },
];

export default function IndustriesSection() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section style={{
            background: "#652b32",
            padding: "110px 32px",
            fontFamily: "'Georgia', serif",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* Background pattern */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "radial-gradient(circle, rgba(245,197,24,0.07) 1.5px, transparent 1.5px)",
                backgroundSize: "32px 32px",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div style={{ textAlign: "center", marginBottom: "72px" }}>
                    <span style={{
                        display: "inline-block",
                        background: "#f5c518", color: "#652b32",
                        fontSize: "11px", fontWeight: "700", letterSpacing: "3px",
                        textTransform: "uppercase", padding: "6px 18px", borderRadius: "2px",
                        marginBottom: "20px",
                    }}>Industries We Serve</span>
                    <h2 style={{
                        fontSize: "clamp(32px, 4.5vw, 54px)",
                        fontWeight: "700", color: "#faf3e0",
                        margin: "0 0 20px", lineHeight: 1.1,
                    }}>
                        Tailored iOS Solutions<br /><em style={{ color: "#f5c518" }}>Across Every Sector</em>
                    </h2>
                    <p style={{
                        fontSize: "17px", color: "rgba(250,243,224,0.6)",
                        maxWidth: "520px", margin: "0 auto", lineHeight: 1.8,
                    }}>
                        Deep domain expertise across 12+ industries — we speak your business language.
                    </p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "20px",
                }}>
                    {industries.map((ind, i) => (
                        <div key={i}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                background: hovered === i ? "#f5c518" : "rgba(250,243,224,0.05)",
                                border: `1.5px solid ${hovered === i ? "#f5c518" : "rgba(250,243,224,0.12)"}`,
                                borderRadius: "8px",
                                padding: "32px 28px",
                                cursor: "default",
                                transition: "all 0.25s ease",
                                transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
                            }}
                        >
                            <span style={{ fontSize: "36px", display: "block", marginBottom: "16px" }}>{ind.icon}</span>
                            <h3 style={{
                                fontSize: "17px", fontWeight: "700",
                                color: hovered === i ? "#652b32" : "#faf3e0",
                                margin: "0 0 10px", transition: "color 0.25s",
                            }}>{ind.name}</h3>
                            <p style={{
                                fontSize: "14px",
                                color: hovered === i ? "rgba(101,43,50,0.8)" : "rgba(250,243,224,0.55)",
                                lineHeight: 1.7, margin: 0, transition: "color 0.25s",
                            }}>{ind.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}