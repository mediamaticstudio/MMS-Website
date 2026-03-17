"use client";
import React from "react";
import { C, F, Eyebrow, YellowBar } from "@/app/branding-agency-in-houston/Tokens";
import Image from "next/image";

const PAIN = [
    { text: "Outdated brand appearance losing you customers", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
    { text: "Competitors looking more professional & trustworthy", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
    { text: "Inconsistent branding across all your platforms", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
    { text: "No clear brand identity to rally around", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
    { text: "Low brand recognition in your market", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
];

// Service icons (SVG) matching the 6 services
const SVC_ICONS = [
    // Brand Strategy
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2" /><line x1="2" y1="12" x2="22" y2="12" /></svg>,
    // Logo Design
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    // Website
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
    // Social Media
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
    // Marketing Creatives
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>,
    // Digital Marketing
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
];

const SERVICES = [
    { title: "Brand Strategy & Identity", desc: "Clear strategies and visual identities that communicate your values and attract the right customers." },
    { title: "Logo Design & Branding", desc: "Memorable logos and visual elements that make your business instantly recognisable." },
    { title: "Website Development", desc: "Modern, responsive websites that convert every visitor into a potential customer." },
    { title: "Social Media Branding", desc: "Engaging visuals that keep your brand consistent across every platform." },
    { title: "Marketing Creatives", desc: "High-quality banners, ads and materials that communicate your message with impact." },
    { title: "Digital Marketing", desc: "Strategic campaigns that increase online visibility and generate real, qualified leads." },
];

export default function AboutSection() {
    return (
        <section id="about" style={{ background: C.wh, padding: "72px 0" }}>
            <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>

                {/* Two-column: pain points left, service icons right */}
                <div className="grid-2" style={{ alignItems: "center", marginBottom: 56 }}>

                    {/* Left: Pain */}
                    <div>
                        <Eyebrow>The Challenge</Eyebrow>
                        <YellowBar />
                        <h2 style={{ fontFamily: F.disp, fontSize: 44, fontWeight: 900, color: C.text, lineHeight: 1.12, marginBottom: 14, letterSpacing: -0.8 }}>
                            Is Your Brand<br /><em style={{ color: C.burg }}>Struggling to Stand Out?</em>
                        </h2>
                        <p style={{ fontFamily: F.body, fontSize: 16, color: C.mut, lineHeight: 1.8, marginBottom: 20 }}>
                            Many businesses lose customers daily because their branding looks outdated or inconsistent. Without a strong identity, competitors win by default.
                        </p>
                        <ul style={{ listStyle: "none" }}>
                            {PAIN.map(p => (
                                <li key={p.text} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12, fontFamily: F.body, fontSize: 15, color: C.text, lineHeight: 1.5, fontWeight: 500 }}>
                                    <span style={{ width: 24, height: 24, borderRadius: "50%", background: `linear-gradient(135deg,${C.burg},${C.burgL})`, display: "flex", alignItems: "center", justifyContent: "center", color: C.wh, flexShrink: 0, marginTop: 1 }}>
                                        {p.icon}
                                    </span>
                                    {p.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Stand out-bro.svg image */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "12px" }}>
                        <Image
                            src="/assets/adimage/Stand out-bro.svg"
                            alt="Stand out illustration"
                            width={500}
                            height={400}
                            style={{ width: "100%", height: "auto", maxWidth: "500px" }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}