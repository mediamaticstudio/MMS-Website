"use client";
import React, { useState } from "react";
import { C, F, Eyebrow, YellowBar } from "@/app/branding-agency-in-houston/Tokens";
import { FormField, PhoneField, TextAreaField } from "@/components/adpage/AdFormElements";
import { sendQuoteRequest } from "@/lib/api";
import { SuccessPopup } from "@/components/SuccessPopup";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const STEPS = [
    { n: "01", t: "Brand Discovery", d: "We analyze your business, goals, competitors, and target audience." },
    { n: "02", t: "Strategy", d: "We define your positioning, messaging and visual direction." },
    { n: "03", t: "Design & Identity", d: "We craft logos, visuals and assets representing your personality." },
    { n: "04", t: "Launch & Scale", d: "We launch with structured guidelines for lasting brand consistency." },
];

export default function ContactSection() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        biz: "",
        message: "",
        countryCode: "US",
        dialCode: "+1"
    });
    const [errors, setErrors] = useState<any>({});

    const handleSubmit = async () => {
        const newErrors: any = {};
        if (!form.name) newErrors.name = "Name is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.phone) newErrors.phone = "Phone is required";
        if (!form.message || form.message.length < 10) newErrors.message = "Message must be at least 10 characters";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast.error("Please fill in all required fields");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch("https://mediamaticstudio.com/api/contact/send/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: `${form.dialCode}${form.phone}`,
                    biz: form.biz,
                    message: form.message,
                    source: "Ad Page - Bottom Contact"
                })
            });
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `Error: ${response.statusText}`);
            }
            setSent(true);
            toast.success("Project inquiry sent!");
        } catch (error: any) {
            toast.error(error.message || "Failed to send inquiry");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* ── Testimonials Section ── */}
            <section style={{ background: C.cream, padding: "64px 0", textAlign: "center" }}>
                <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
                    <Eyebrow>Client Reviews</Eyebrow>
                    <YellowBar center />
                    <h2
                        style={{
                            fontFamily: F.disp,
                            fontSize: 46,
                            fontWeight: 900,
                            color: C.text,
                            letterSpacing: -0.8,
                        }}
                    >
                        What Clients Say
                    </h2>

                    {/* ✅ CHANGED: Grid instead of column */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "32px",
                            marginTop: "32px",
                        }}
                    >
                        {[
                            {
                                text: "Mediamatic Studio completely transformed our brand identity and digital presence. Their creative team delivered outstanding results that exceeded every expectation.",
                                author: "CEO, Houston-based Business",
                            },
                            {
                                text: "The strategic approach and technical precision provided have been a game-changer. They didn't just build a site; they architected a digital ecosystem that reflects our vision.",
                                author: "Director, UK-based Tech Firm",
                            },
                            {
                                text: "Partnering with this team was the best decision for our rebranding. Their ability to blend high-end aesthetics with seamless functionality resulted in a professional identity.",
                                author: "Founder, Dubai-based Creative Agency",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    background: C.wh,
                                    border: `1.5px solid ${C.crD}`,
                                    borderRadius: 20,
                                    padding: "32px 28px",
                                    width: "100%",
                                    boxShadow: "0 8px 32px rgba(101,43,50,0.07)",
                                    position: "relative",
                                    textAlign: "center",
                                }}
                            >
                                {/* Background Quote */}
                                <div
                                    style={{
                                        fontFamily: F.disp,
                                        fontSize: 100,
                                        color: `${C.burg}12`,
                                        lineHeight: 0.8,
                                        position: "absolute",
                                        top: 12,
                                        left: 18,
                                        fontWeight: 900,
                                        userSelect: "none",
                                    }}
                                >
                                    "
                                </div>

                                {/* ⭐ Stars */}
                                <div
                                    style={{
                                        color: C.yel,
                                        fontSize: 18,
                                        letterSpacing: 3,
                                        marginBottom: 18,
                                    }}
                                >
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            style={{ display: "inline", marginRight: 2 }}
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill={C.yel}
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Text */}
                                <p
                                    style={{
                                        fontFamily: F.disp,
                                        fontSize: 17,
                                        color: C.text,
                                        lineHeight: 1.7,
                                        fontStyle: "italic",
                                        marginBottom: 20,
                                        position: "relative",
                                        zIndex: 1,
                                    }}
                                >
                                    "{item.text}"
                                </p>

                                {/* Author */}
                                <p
                                    style={{
                                        fontFamily: F.body,
                                        fontSize: 12,
                                        color: C.mut,
                                        fontWeight: 700,
                                        letterSpacing: 0.5,
                                        textTransform: "uppercase",
                                    }}
                                >
                                    — {item.author}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ── Process ── */}
            <section id="process" style={{ background: C.burg, padding: "64px 0" }}>
                <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
                    <div style={{ textAlign: "center", marginBottom: 44 }}>
                        <Eyebrow light>How It Works</Eyebrow>
                        <YellowBar center />
                        <h2 style={{ fontFamily: F.disp, fontSize: 46, fontWeight: 900, color: C.wh, letterSpacing: -0.8 }}>Our Branding Process</h2>
                    </div>
                    <div className="grid-4" style={{ gap: 24 }}>
                        {STEPS.map((st, i) => (
                            <div key={st.n} style={{ textAlign: "center", position: "relative", padding: "0 8px" }}>
                                {i < STEPS.length - 1 && (
                                    <div style={{ position: "absolute", top: 27, left: "calc(50% + 34px)", width: "calc(100% - 68px)", height: 1, background: "rgba(245,197,24,0.3)" }} />
                                )}
                                <div style={{ width: 56, height: 56, background: C.yel, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontFamily: F.disp, fontWeight: 900, fontSize: 18, color: C.burgD, boxShadow: "0 4px 16px rgba(245,197,24,0.35)" }}>
                                    {st.n}
                                </div>
                                <h3 style={{ fontFamily: F.disp, fontSize: 17, fontWeight: 700, color: C.wh, marginBottom: 10 }}>{st.t}</h3>
                                <p style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>{st.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Contact ── */}
            <section id="contact" style={{ background: C.wh, padding: "64px 0" }}>
                <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
                    <div style={{ textAlign: "center", marginBottom: 44 }}>
                        <Eyebrow>Get In Touch</Eyebrow>
                        <YellowBar center />
                        <h2 style={{ fontFamily: F.disp, fontSize: 50, fontWeight: 900, color: C.text, letterSpacing: -1 }}>
                            Start Your Project <em style={{ color: C.burg }}>Today</em>
                        </h2>
                        <p style={{ fontFamily: F.body, fontSize: 17, color: C.mut, maxWidth: 480, margin: "14px auto 0", lineHeight: 1.75 }}>
                            Fill out the form below and our team will contact you within 24 hours.
                        </p>
                    </div>

                    <div className="grid-2" style={{ gap: 56, alignItems: "start" }}>

                        {/* Form */}
                        <div style={{ background: C.cream, border: `1.5px solid ${C.crD}`, borderRadius: 22, padding: "32px 28px", boxShadow: "0 12px 48px rgba(101,43,50,0.08)" }}>
                            <div style={{ paddingBottom: 20, borderBottom: `1.5px solid ${C.crD}`, marginBottom: 24 }}>
                                <p style={{ fontFamily: F.acc, fontSize: 20, color: C.burg, fontWeight: 700, marginBottom: 8 }}>Free Consultation</p>
                                <h3 style={{ fontFamily: F.disp, fontSize: 30, fontWeight: 900, color: C.text, letterSpacing: -0.4, lineHeight: 1.2 }}>
                                    Tell Us About<br />Your Project
                                </h3>
                                <div style={{ width: 40, height: 3, background: C.yel, borderRadius: 2, marginTop: 14 }} />
                            </div>

                            <FormField
                                label="Full Name"
                                required
                                placeholder="John Smith"
                                value={form.name}
                                onChange={(val: string) => {
                                    setForm({ ...form, name: val });
                                    if (errors.name) setErrors({ ...errors, name: "" });
                                }}
                                error={errors.name}
                            />

                            <FormField
                                label="Email Address"
                                required
                                type="email"
                                placeholder="you@company.com"
                                value={form.email}
                                onChange={(val: string) => {
                                    setForm({ ...form, email: val });
                                    if (errors.email) setErrors({ ...errors, email: "" });
                                }}
                                error={errors.email}
                            />

                            <PhoneField
                                label="Phone Number"
                                required
                                value={form.phone}
                                dialCode={form.dialCode}
                                countryCode={form.countryCode}
                                onPhoneChange={(val: string) => {
                                    setForm({ ...form, phone: val });
                                    if (errors.phone) setErrors({ ...errors, phone: "" });
                                }}
                                onCountryChange={(code: string, dial: string) => setForm({ ...form, countryCode: code, dialCode: dial })}
                                error={errors.phone}
                            />

                            <FormField
                                label="Business Name"
                                placeholder="Your company"
                                value={form.biz}
                                onChange={(val: string) => setForm({ ...form, biz: val })}
                            />

                            <TextAreaField
                                label="Message"
                                required
                                placeholder="Tell us about your project..."
                                value={form.message}
                                onChange={(val: string) => {
                                    setForm({ ...form, message: val });
                                    if (errors.message) setErrors({ ...errors, message: "" });
                                }}
                                error={errors.message}
                            />

                            <button
                                type="button"
                                className="btn-burg"
                                disabled={loading}
                                onClick={handleSubmit}
                                style={{
                                    width: "100%",
                                    background: C.burg,
                                    color: C.wh,
                                    padding: "17px",
                                    borderRadius: 10,
                                    fontFamily: F.body,
                                    fontWeight: 800,
                                    fontSize: 16,
                                    letterSpacing: 0.3,
                                    transition: "all 0.2s",
                                    boxShadow: "0 6px 20px rgba(101,43,50,0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 8,
                                    opacity: loading ? 0.7 : 1,
                                    cursor: loading ? "not-allowed" : "pointer"
                                }}
                            >
                                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Get Free Consultation →"}
                            </button>

                            <p style={{ fontFamily: F.body, fontSize: 12, color: C.mut, textAlign: "center", marginTop: 14 }}>
                                No spam · 100% free · We respond within 24 hours
                            </p>
                        </div>

                        {/* Right: Info — no image, icon cards only */}
                        <div style={{ paddingTop: 6 }}>
                            <h3 style={{ fontFamily: F.disp, fontSize: 30, fontWeight: 900, color: C.text, letterSpacing: -0.4, lineHeight: 1.2, marginBottom: 14 }}>
                                Let's Build Something<br /><em style={{ color: C.burg }}>Remarkable Together</em>
                            </h3>
                            <p style={{ fontFamily: F.body, fontSize: 15, color: C.mut, lineHeight: 1.8, marginBottom: 28 }}>
                                Our branding experts are ready to craft a strategy that sets your business apart and drives real growth.
                            </p>

                            {[
                                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.burg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.58 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.13a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.28 16.92z" /></svg>, label: "Call Us", val: "Toll Free · +1 (888) 219-5755" },
                                // { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.burg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, label: "Free Consultation", val: "No commitment required" },
                                // { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.burg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>, label: "Location", val: "Houston, TX — Global clients" },
                            ].map(ci => (
                                <div key={ci.label} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12, background: C.cream, border: `1.5px solid ${C.crD}`, borderRadius: 14, padding: "14px 18px" }}>
                                    <div style={{ width: 46, height: 46, background: `${C.burg}14`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{ci.icon}</div>
                                    <div>
                                        <div style={{ fontFamily: F.body, fontSize: 10, fontWeight: 800, color: C.mut, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 3 }}>{ci.label}</div>
                                        <div style={{ fontFamily: F.body, fontSize: 14, fontWeight: 700, color: C.text }}>{ci.val}</div>
                                    </div>
                                </div>
                            ))}

                            {/* Trust badge */}
                            <div style={{ marginTop: 16, background: C.burg, borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", gap: 14 }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.yel} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                <div>
                                    <div style={{ fontFamily: F.disp, fontSize: 16, fontWeight: 700, color: C.wh }}>100+ Happy Clients</div>
                                    <div style={{ fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 3, fontWeight: 500 }}>Trusted by businesses across Houston &amp; beyond</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SuccessPopup
                isOpen={sent}
                onClose={() => setSent(false)}
                title="Inquiry Received!"
                message="Thank you for reaching out. We've received your project details and a brand strategist will contact you within 24 hours."
            />
        </>
    );
}