"use client";
import React, { useState } from "react";
import { C, F, Eyebrow, YellowBar } from "@/app/branding-agency-in-houston/Tokens";
import { FormField, PhoneField } from "@/components/adpage/AdFormElements";
import { sendQuoteRequest } from "@/lib/api";
import { SuccessPopup } from "@/components/SuccessPopup";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const WHY = [
    { text: "Strategic branding approach rooted in research", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
    { text: "Experienced creative design team with proven results", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
    { text: "Fast and reliable project delivery every time", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
    { text: "Affordable solutions for any business size", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
    { text: "Dedicated client support from start to finish", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
];

const SVC_HIGHLIGHTS = [
    { title: "Brand Strategy", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.burg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20" /><line x1="2" y1="12" x2="22" y2="12" /></svg> },
    { title: "Logo Design", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.burg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg> },
    { title: "Web Dev", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.burg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
    { title: "Digital Marketing", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.burg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
];

export default function PortfolioSection() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        countryCode: "US",
        dialCode: "+1"
    });
    const [errors, setErrors] = useState<any>({});

    const handleSubmit = async () => {
        const newErrors: any = {};
        if (!form.name) newErrors.name = "Name is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.phone) newErrors.phone = "Phone is required";
        if (!form.service) newErrors.service = "Please select a service";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast.error("Please fill in all required fields");
            return;
        }

        setLoading(true);
        try {
            await sendQuoteRequest({
                name: form.name,
                email: form.email,
                phone: `${form.dialCode}${form.phone}`,
                service: form.service,
                source: "Ad Page - Why Us Form"
            });
            setSent(true);
            toast.success("Strategy call requested!");
        } catch (error: any) {
            toast.error(error.message || "Failed to send request");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="portfolio" style={{ background: C.wh, padding: "64px 0" }}>
            <div className="grid-2" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", alignItems: "start" }}>

                {/* Left: Why Us */}
                <div>
                    <Eyebrow>Why Choose Us</Eyebrow>
                    <YellowBar />
                    <h2 style={{ fontFamily: F.disp, fontSize: 44, fontWeight: 900, color: C.text, lineHeight: 1.12, marginBottom: 14, letterSpacing: -0.8 }}>
                        Why Businesses Trust<br /><em style={{ color: C.burg }}>Mediamatic Studio</em>
                    </h2>
                    <p style={{ fontFamily: F.body, fontSize: 16, color: C.mut, lineHeight: 1.8, marginBottom: 24 }}>
                        We combine creative design with strategic thinking to build brands that attract customers and stand the test of time.
                    </p>
                    <ul style={{ listStyle: "none", marginBottom: 28 }}>
                        {WHY.map(w => (
                            <li className="why-item" key={w.text} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14, fontFamily: F.body, fontSize: 15, color: C.text, lineHeight: 1.5, fontWeight: 500 }}>
                                <span className="check" style={{ width: 26, height: 26, borderRadius: "50%", background: C.yel, display: "flex", alignItems: "center", justifyContent: "center", color: C.burgD, flexShrink: 0, marginTop: 1, transition: "background 0.2s, color 0.2s" }}>
                                    {w.icon}
                                </span>
                                {w.text}
                            </li>
                        ))}
                    </ul>

                    {/* Service icon strip */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                        {SVC_HIGHLIGHTS.map(s => (
                            <div key={s.title} style={{ background: C.cream, border: `1.5px solid ${C.crD}`, borderRadius: 12, padding: "14px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                                <div style={{ width: 42, height: 42, background: `${C.burg}12`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {s.icon}
                                </div>
                                <span style={{ fontFamily: F.body, fontSize: 11, fontWeight: 700, color: C.text, textAlign: "center", lineHeight: 1.3 }}>{s.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Quick Contact Form */}
                <div>
                    <div style={{ background: C.cream, border: `1.5px solid ${C.crD}`, borderRadius: 22, padding: "36px 32px", boxShadow: "0 12px 48px rgba(101,43,50,0.08)" }}>
                        {/* Form header */}
                        <div style={{ paddingBottom: 20, borderBottom: `1.5px solid ${C.crD}`, marginBottom: 24 }}>
                            <p style={{ fontFamily: F.acc, fontSize: 18, color: C.burg, fontWeight: 700, marginBottom: 6 }}>Free Consultation</p>
                            <h3 style={{ fontFamily: F.disp, fontSize: 26, fontWeight: 900, color: C.text, letterSpacing: -0.4, lineHeight: 1.2 }}>
                                Get a Free Strategy<br />Call With Our Team
                            </h3>
                            <div style={{ width: 36, height: 3, background: C.yel, borderRadius: 2, marginTop: 12 }} />
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

                        <div style={{ marginBottom: 24 }}>
                            <label style={{ display: "block", fontFamily: F.body, fontSize: 13, fontWeight: 600, color: C.burg, marginBottom: 4 }}>
                                Service Interested In <span style={{ color: "red" }}>*</span>
                            </label>
                            <select
                                style={{
                                    width: "100%",
                                    padding: "12px 14px",
                                    background: "#faf3e0",
                                    border: `1.5px solid ${errors.service ? "red" : C.burg + "20"}`,
                                    borderRadius: 10,
                                    fontFamily: F.body,
                                    fontSize: 14,
                                    color: C.burg,
                                    outline: "none"
                                }}
                                value={form.service}
                                onChange={(e) => {
                                    setForm({ ...form, service: e.target.value });
                                    if (errors.service) setErrors({ ...errors, service: "" });
                                }}
                            >
                                <option value="">Select a service…</option>
                                <option>Brand Strategy & Identity</option>
                                <option>Logo Design</option>
                                <option>Website Development</option>
                                <option>Social Media Branding</option>
                                <option>Digital Marketing</option>
                                <option>Full Brand Package</option>
                            </select>
                            {errors.service && <p style={{ color: "red", fontSize: 10, marginTop: 4, fontFamily: F.body }}>{errors.service}</p>}
                        </div>

                        <button
                            type="button"
                            className="btn-burg"
                            disabled={loading}
                            onClick={handleSubmit}
                            style={{
                                width: "100%",
                                background: C.burg,
                                color: C.wh,
                                padding: "16px",
                                borderRadius: 10,
                                fontFamily: F.body,
                                fontWeight: 800,
                                fontSize: 15,
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
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Get Free Strategy Call →"}
                        </button>

                        <p style={{ fontFamily: F.body, fontSize: 12, color: C.mut, textAlign: "center", marginTop: 14 }}>
                            No spam · 100% free · Response within 24 hours
                        </p>
                    </div>
                </div>
            </div>

            <SuccessPopup
                isOpen={sent}
                onClose={() => setSent(false)}
                title="Strategy Requested!"
                message="We've received your request for a strategy call. A brand specialist will call you shortly to discuss your growth goals."
            />
        </section>
    );
}