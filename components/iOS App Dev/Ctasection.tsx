"use client";

import { useState } from "react";
import DigitalAuditModal from "@/components/DigitalAuditModal";

export default function CTASection() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <DigitalAuditModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <section style={{
                background: "#faf3e0",
                padding: "100px 32px",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Georgia', serif",
            }}>
                {/* Decorative pattern */}
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "radial-gradient(circle, rgba(101,43,50,0.12) 1.5px, transparent 1.5px)",
                    backgroundSize: "28px 28px",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", right: "-100px", top: "-100px",
                    width: "500px", height: "500px", borderRadius: "50%",
                    background: "rgba(101,43,50,0.08)", pointerEvents: "none",
                }} />

                <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                    <span style={{
                        display: "inline-block",
                        background: "#652b32", color: "#faf3e0",
                        fontSize: "11px", fontWeight: "700", letterSpacing: "3px",
                        textTransform: "uppercase", padding: "6px 18px", borderRadius: "2px",
                        marginBottom: "28px",
                    }}>Ready to Launch?</span>

                    <h2 style={{
                        fontSize: "clamp(34px, 5vw, 62px)",
                        fontWeight: "700", color: "#652b32",
                        lineHeight: 1.1, margin: "0 0 24px",
                        fontFamily: "'Georgia', serif",
                    }}>
                        Let's Build Your Next<br />
                        <em>Breakthrough iOS App</em>
                    </h2>

                    <p style={{
                        fontSize: "18px", color: "rgba(101,43,50,0.75)",
                        maxWidth: "560px", margin: "0 auto 48px",
                        lineHeight: 1.75,
                    }}>
                        From MVP to enterprise-scale — our team is ready to transform your idea into a polished, market-ready iOS application.
                    </p>

                    <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                        {/* ── Get Free Consultation opens modal ── */}
                        <button
                            type="button"
                            onClick={() => setModalOpen(true)}
                            style={{
                                background: "#652b32", color: "#f5c518",
                                padding: "18px 44px", fontWeight: "700", fontSize: "15px",
                                letterSpacing: "1px", border: "none", borderRadius: "4px",
                                display: "inline-flex", alignItems: "center", gap: "10px",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                boxShadow: "0 8px 32px rgba(101,43,50,0.3)",
                                fontFamily: "'Georgia', serif",
                                cursor: "pointer",
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)";
                                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 16px 40px rgba(101,43,50,0.4)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(101,43,50,0.3)";
                            }}
                        >
                            Get Free Consultation
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>

                        <a href="tel:+91-000-000-0000" style={{
                            border: "2px solid rgba(101,43,50,0.35)", color: "#652b32",
                            padding: "18px 44px", fontWeight: "600", fontSize: "15px",
                            letterSpacing: "1px", textDecoration: "none", borderRadius: "4px",
                            display: "inline-flex", alignItems: "center", gap: "10px",
                            transition: "border-color 0.2s, background 0.2s",
                            fontFamily: "'Georgia', serif",
                        }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#652b32";
                                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(101,43,50,0.08)";
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(101,43,50,0.35)";
                                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                            </svg>
                            Call Us Now
                        </a>
                    </div>

                    {/* Trust signals */}
                    <div style={{ display: "flex", gap: "40px", justifyContent: "center", marginTop: "60px", flexWrap: "wrap" }}>
                        { [
                        {
                            label: "NDA Protected",
                        icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" />
                            <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                        ),
    },
                        {
                            label: "48hr Kickoff",
                        icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                        ),
    },
                        {
                            label: "100% Transparent",
                        icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5" />
                        </svg>
                        ),
    },
                        {
                            label: "Award Winning",
                        icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="8" r="7" />
                            <path d="M8 21l4-3 4 3" />
                        </svg>
                        ),
    },
                        ].map(({icon, label}) => (
                        <div
                            key={label}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                color: "#652b32",
                                fontSize: "14px",
                                fontWeight: "600",
                            }}
                        >
                            <span style={{ display: "flex", alignItems: "center" }}>
                                {icon}
                            </span>
                            {label}
                        </div>
                        ))
                         }
                    </div>
                </div>
            </section>
        </>
    );
}