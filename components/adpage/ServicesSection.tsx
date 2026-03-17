"use client";
import React from "react";
import { C, F, Eyebrow, YellowBar } from "@/app/branding-agency-in-houston/Tokens";

const SVC_ICONS = [
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2" /><line x1="2" y1="12" x2="22" y2="12" /></svg>,
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>,
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

export default function ServicesSection() {
    return (
        <section id="services" style={{ background: C.cream, padding: "64px 0" }}>
            <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
                <div style={{ textAlign: "center", marginBottom: 44 }}>
                    <Eyebrow>What We Do</Eyebrow>
                    <YellowBar center />
                    <h2 style={{ fontFamily: F.disp, fontSize: 46, fontWeight: 900, color: C.text, letterSpacing: -0.8, marginBottom: 12 }}>
                        Our Branding &amp; Digital Services
                    </h2>
                    <p style={{ fontFamily: F.body, fontSize: 17, color: C.mut, maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                        Complete creative and strategic solutions to help your business grow.
                    </p>
                </div>

                <div className="grid-3" style={{ gap: 24 }}>
                    {SERVICES.map((sv, i) => (
                        <div key={sv.title} className="svc-card" style={{ background: C.wh, border: `1.5px solid ${C.crD}`, borderRadius: 16, padding: "24px 22px", transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s" }}>
                            <div style={{ width: 52, height: 52, background: `linear-gradient(135deg,${C.burg},${C.burgL})`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                                {SVC_ICONS[i]}
                            </div>
                            <h3 style={{ fontFamily: F.disp, fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 10, letterSpacing: -0.2 }}>{sv.title}</h3>
                            <p style={{ fontFamily: F.body, fontSize: 14, color: C.mut, lineHeight: 1.7 }}>{sv.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}