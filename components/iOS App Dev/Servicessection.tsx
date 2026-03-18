"use client";
import { useState } from "react";

const services = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
        title: "Custom App Development",
        desc: "Bespoke iOS applications engineered to your exact specifications — from concept to App Store.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
            </svg>
        ),
        title: "UI/UX & Prototyping",
        desc: "Visually stunning interfaces rooted in Apple Human Interface Guidelines and deep user research.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
        ),
        title: "iOS QA & Testing",
        desc: "Rigorous quality assurance across all Apple devices to ensure a flawless user experience.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
            </svg>
        ),
        title: "App Maintenance",
        desc: "Ongoing support — feature additions, version upgrades, UI refreshes, and performance tuning.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        title: "App Modernization",
        desc: "Migrate Android/hybrid apps to iOS or upgrade legacy Objective-C codebases to modern Swift.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
        ),
        title: "Mobile App Integration",
        desc: "Seamless integration with Apple ecosystem, third-party APIs, and enterprise back-end systems.",
    },
];

export default function ServicesSection() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section style={{
            background: "#faf3e0",
            padding: "110px 32px",
            fontFamily: "'Georgia', serif",
        }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "32px", marginBottom: "72px" }}>
                    <div>
                        <span style={{
                            display: "inline-block",
                            background: "#652b32", color: "#f5c518",
                            fontSize: "11px", fontWeight: "700", letterSpacing: "3px",
                            textTransform: "uppercase", padding: "6px 18px", borderRadius: "2px",
                            marginBottom: "20px",
                        }}>Our Services</span>
                        <h2 style={{
                            fontSize: "clamp(32px, 4.5vw, 54px)",
                            fontWeight: "700", color: "#652b32",
                            margin: 0, lineHeight: 1.1,
                        }}>
                            End-to-End iOS<br />
                            <em>Development Services</em>
                        </h2>
                    </div>
                    <p style={{
                        fontSize: "17px", color: "rgba(101,43,50,0.65)",
                        maxWidth: "380px", lineHeight: 1.8, margin: "auto 0 0",
                    }}>
                        From ideation to post-launch support — every phase of your iOS product lifecycle, handled by specialists.
                    </p>
                </div>

                {/* Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "24px",
                }}>
                    {services.map((s, i) => (
                        <div key={i}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            style={{
                                background: hovered === i ? "#652b32" : "#fff",
                                border: `2px solid ${hovered === i ? "#652b32" : "rgba(101,43,50,0.12)"}`,
                                borderRadius: "8px",
                                padding: "40px 36px",
                                cursor: "default",
                                transition: "all 0.28s ease",
                                transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
                                boxShadow: hovered === i ? "0 20px 48px rgba(101,43,50,0.2)" : "0 2px 12px rgba(101,43,50,0.06)",
                            }}
                        >
                            <div style={{
                                width: "60px", height: "60px",
                                background: hovered === i ? "rgba(245,197,24,0.15)" : "rgba(101,43,50,0.07)",
                                borderRadius: "12px",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                marginBottom: "24px",
                                color: hovered === i ? "#f5c518" : "#652b32",
                                transition: "all 0.28s ease",
                            }}>
                                {s.icon}
                            </div>
                            <h3 style={{
                                fontSize: "19px", fontWeight: "700",
                                color: hovered === i ? "#f5c518" : "#652b32",
                                margin: "0 0 12px", transition: "color 0.28s",
                            }}>{s.title}</h3>
                            <p style={{
                                fontSize: "15px",
                                color: hovered === i ? "rgba(250,243,224,0.75)" : "rgba(101,43,50,0.65)",
                                lineHeight: 1.75, margin: 0, transition: "color 0.28s",
                            }}>{s.desc}</p>

                            <div style={{
                                display: "flex", alignItems: "center", gap: "6px",
                                marginTop: "28px",
                                color: hovered === i ? "#f5c518" : "#652b32",
                                fontSize: "13px", fontWeight: "700", letterSpacing: "1px",
                                textTransform: "uppercase",
                                transition: "color 0.28s",
                            }}>
                                Learn More
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}