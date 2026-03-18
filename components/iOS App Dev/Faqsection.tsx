"use client";
import { useState } from "react";

const faqs = [
    {
        q: "How much does it cost to develop an iOS app?",
        a: "We offer fully customized pricing based on your app's scope, complexity, and timeline. We maintain complete transparency so you always know exactly where your investment is going. Book a free consultation for a detailed estimate.",
    },
    {
        q: "How long does it take to build a custom iOS app?",
        a: "A Minimum Viable Product (MVP) typically takes 8–12 weeks. Larger enterprise applications with complex features may require several months. We provide a precise timeline during the planning phase.",
    },
    {
        q: "Do you develop apps for both iPhone and iPad?",
        a: "Yes — we develop fully optimized applications for all iOS devices including iPhone, iPad, and Apple Watch. Every app is crafted to deliver a seamless, native experience across the entire Apple ecosystem.",
    },
    {
        q: "Can you integrate third-party services into iOS apps?",
        a: "Absolutely. We have extensive experience integrating payment gateways, CRMs, analytics platforms, social login, maps, AI APIs, and virtually any third-party service your app requires.",
    },
    {
        q: "Do you offer post-launch support and maintenance?",
        a: "Yes. We offer comprehensive maintenance plans covering performance monitoring, bug fixes, iOS version upgrades, and feature additions to ensure your app stays current and high-performing.",
    },
    {
        q: "Do you provide UI/UX design services for iOS apps?",
        a: "Yes — our designers follow Apple's Human Interface Guidelines while adding unique brand personality. We conduct usability testing at every stage to ensure an intuitive, delightful user experience.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(0);

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
                backgroundImage: "radial-gradient(circle, rgba(245,197,24,0.06) 1.5px, transparent 1.5px)",
                backgroundSize: "30px 30px",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div style={{ textAlign: "center", marginBottom: "72px" }}>
                    <span style={{
                        display: "inline-block",
                        background: "#f5c518", color: "#652b32",
                        fontSize: "11px", fontWeight: "700", letterSpacing: "3px",
                        textTransform: "uppercase", padding: "6px 18px", borderRadius: "2px",
                        marginBottom: "20px",
                    }}>FAQ</span>
                    <h2 style={{
                        fontSize: "clamp(32px, 4.5vw, 54px)",
                        fontWeight: "700", color: "#faf3e0",
                        margin: "0 0 20px", lineHeight: 1.1,
                    }}>
                        Frequently Asked<br /><em style={{ color: "#f5c518" }}>Questions</em>
                    </h2>
                    <p style={{
                        fontSize: "17px", color: "rgba(250,243,224,0.6)",
                        maxWidth: "460px", margin: "0 auto", lineHeight: 1.8,
                    }}>
                        Everything you need to know before starting your iOS project with MediaMatic.
                    </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {faqs.map((faq, i) => (
                        <div key={i}
                            style={{
                                background: open === i ? "#faf3e0" : "rgba(250,243,224,0.06)",
                                border: `1.5px solid ${open === i ? "#f5c518" : "rgba(250,243,224,0.12)"}`,
                                borderRadius: "8px",
                                overflow: "hidden",
                                transition: "all 0.25s ease",
                            }}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                style={{
                                    width: "100%", padding: "24px 28px",
                                    display: "flex", alignItems: "center", justifyContent: "space-between",
                                    background: "none", border: "none", cursor: "pointer",
                                    textAlign: "left", gap: "16px",
                                }}
                            >
                                <span style={{
                                    fontSize: "16px", fontWeight: "700",
                                    color: open === i ? "#652b32" : "#faf3e0",
                                    fontFamily: "'Georgia', serif",
                                    transition: "color 0.25s",
                                }}>{faq.q}</span>
                                <span style={{
                                    width: "32px", height: "32px", flexShrink: 0,
                                    background: open === i ? "#652b32" : "rgba(245,197,24,0.15)",
                                    borderRadius: "50%",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: open === i ? "#f5c518" : "#f5c518",
                                    transition: "all 0.25s",
                                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </span>
                            </button>

                            {open === i && (
                                <div style={{ padding: "0 28px 24px" }}>
                                    <p style={{
                                        fontSize: "15px", color: "rgba(101,43,50,0.8)",
                                        lineHeight: 1.8, margin: 0,
                                        borderTop: "1px solid rgba(101,43,50,0.12)",
                                        paddingTop: "18px",
                                    }}>{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ textAlign: "center", marginTop: "60px" }}>
                    <p style={{ color: "rgba(250,243,224,0.6)", fontSize: "15px", marginBottom: "20px" }}>
                        Still have questions? We're here to help.
                    </p>
                    <a href="#contact" style={{
                        background: "#f5c518", color: "#652b32",
                        padding: "14px 36px", fontWeight: "700", fontSize: "14px",
                        letterSpacing: "1px", textDecoration: "none", borderRadius: "4px",
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        fontFamily: "'Georgia', serif",
                    }}>
                        Talk to an Expert
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}