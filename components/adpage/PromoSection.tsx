"use client";
import React from "react";
import { C, F, ILL, Eyebrow } from "@/app/branding-agency-in-houston/Tokens";

const FREE_SVCS = [
    "2D & 3D Animation Videos",
    "Content Management",
    "Website & App Development",
    "Designing",
    "Digital Marketing",
    "VPS Web Hosting Service",
];

export default function PromoSection() {
    return (
        <section style={{ background: C.cream, padding: "0 0 64px" }}>
            <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
                <div className="grid-2" style={{ background: `linear-gradient(140deg,${C.burgD} 0%,${C.burg} 100%)`, borderRadius: 22, padding: "52px 44px", alignItems: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", right: -60, top: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(245,197,24,0.07)", pointerEvents: "none" }} />

                    <div>
                        <Eyebrow light>Limited Time Offer</Eyebrow>
                        <h3 style={{ fontFamily: F.disp, fontSize: 36, fontWeight: 900, color: C.wh, lineHeight: 1.2, marginBottom: 10, letterSpacing: -0.5 }}>
                            Launch Your Brand &amp; Get<br />One Service <em style={{ color: C.yel }}>FREE</em>
                        </h3>
                        <p style={{ fontFamily: F.body, fontSize: 15, color: "rgba(255,255,255,0.65)", marginBottom: 16 }}>Start your project today and receive one additional service at no cost.</p>
                        <ul style={{ listStyle: "none" }}>
                            {FREE_SVCS.map(f => (
                                <li key={f} style={{ fontFamily: F.body, fontSize: 13, color: "#faf3e0", marginBottom: 8, display: "flex", alignItems: "center", gap: 10, fontWeight: 700 }}>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill={C.yel}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ flexShrink: 0, textAlign: "center" }}>
                        <img src={ILL.influencer} alt="" style={{ width: 170, marginBottom: 16 }} />
                        <button
                            className="btn-yel"
                            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                            style={{ background: C.yel, color: C.burgD, padding: "14px 28px", borderRadius: 8, fontFamily: F.body, fontWeight: 800, fontSize: 15, display: "block", width: "100%", transition: "all 0.2s", boxShadow: "0 6px 20px rgba(245,197,24,0.4)" }}
                        >
                            Claim Your Free Service
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}