"use client";
import { useState } from "react";

const steps = [
    {
        num: "01",
        title: "Strategic Planning",
        desc: "We deep-dive into your business goals, research competitors, define buyer personas, and establish measurable KPIs for project success.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Design",
        desc: "We refine requirements, map user journeys, create pixel-perfect mockups, and build clickable prototypes validated with real users.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Development",
        desc: "We select the optimal architecture and tech stack, integrate APIs, and establish a robust CI/CD pipeline for continuous delivery.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "Quality Assurance",
        desc: "Comprehensive testing of all components — functional, performance, security, and UX — across the full range of Apple devices.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
        ),
    },
    {
        num: "05",
        title: "Release & Support",
        desc: "We handle App Store submission end-to-end, then provide ongoing monitoring, bug fixes, and feature updates post-launch.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
];

export default function ProcessSection() {
    const [active, setActive] = useState<number>(0);

    return (
        <section style={{
            background: "#faf3e0",
            padding: "110px 32px",
            fontFamily: "'Georgia', serif",
        }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "72px" }}>
                    <span style={{
                        display: "inline-block",
                        background: "#652b32", color: "#f5c518",
                        fontSize: "11px", fontWeight: "700", letterSpacing: "3px",
                        textTransform: "uppercase", padding: "6px 18px", borderRadius: "2px",
                        marginBottom: "20px",
                    }}>How We Work</span>
                    <h2 style={{
                        fontSize: "clamp(32px, 4.5vw, 54px)",
                        fontWeight: "700", color: "#652b32",
                        margin: "0 0 20px", lineHeight: 1.1,
                    }}>
                        Our iOS App<br /><em>Development Process</em>
                    </h2>
                    <p style={{
                        fontSize: "17px", color: "rgba(101,43,50,0.6)",
                        maxWidth: "480px", margin: "0 auto", lineHeight: 1.8,
                    }}>
                        A battle-tested 5-phase methodology that delivers predictable, high-quality results every time.
                    </p>
                </div>

                {/* Process layout */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
                    {/* Steps list */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {steps.map((step, i) => (
                            <div key={i}
                                onClick={() => setActive(i)}
                                style={{
                                    display: "flex", gap: "20px", alignItems: "flex-start",
                                    padding: "24px 28px", borderRadius: "8px",
                                    background: active === i ? "#652b32" : "transparent",
                                    cursor: "pointer",
                                    transition: "background 0.25s",
                                    borderLeft: `4px solid ${active === i ? "#f5c518" : "transparent"}`,
                                }}
                            >
                                <div style={{
                                    fontSize: "18px", fontWeight: "700",
                                    color: active === i ? "#f5c518" : "rgba(101,43,50,0.35)",
                                    letterSpacing: "2px", minWidth: "28px", paddingTop: "2px",
                                    transition: "color 0.25s",
                                }}>{step.num}</div>
                                <div>
                                    <h3 style={{
                                        fontSize: "17px", fontWeight: "700",
                                        color: active === i ? "#faf3e0" : "#652b32",
                                        margin: "0 0 6px", transition: "color 0.25s",
                                    }}>{step.title}</h3>
                                    {active === i && (
                                        <p style={{
                                            fontSize: "14px",
                                            color: "rgba(250,243,224,0.7)",
                                            lineHeight: 1.75, margin: 0,
                                        }}>{step.desc}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Active step detail */}
                    <div style={{
                        background: "#652b32",
                        borderRadius: "12px",
                        padding: "56px 48px",
                        position: "sticky",
                        top: "32px",
                        boxShadow: "0 24px 64px rgba(101,43,50,0.2)",
                    }}>
                        <div style={{
                            width: "72px", height: "72px",
                            background: "rgba(245,197,24,0.15)",
                            borderRadius: "16px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#f5c518",
                            marginBottom: "32px",
                        }}>
                            {steps[active].icon}
                        </div>
                        <div style={{ fontSize: "48px", fontWeight: "700", color: "rgba(245,197,24,0.2)", marginBottom: "8px" }}>
                            {steps[active].num}
                        </div>
                        <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#faf3e0", margin: "0 0 20px", lineHeight: 1.2 }}>
                            {steps[active].title}
                        </h3>
                        <p style={{ fontSize: "16px", color: "rgba(250,243,224,0.7)", lineHeight: 1.85, margin: 0 }}>
                            {steps[active].desc}
                        </p>

                        {/* Navigation dots */}
                        <div style={{ display: "flex", gap: "8px", marginTop: "48px" }}>
                            {steps.map((_, i) => (
                                <button key={i} onClick={() => setActive(i)} style={{
                                    width: i === active ? "28px" : "8px",
                                    height: "8px",
                                    borderRadius: "4px",
                                    background: i === active ? "#f5c518" : "rgba(250,243,224,0.2)",
                                    border: "none", cursor: "pointer", padding: 0,
                                    transition: "all 0.25s ease",
                                }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}