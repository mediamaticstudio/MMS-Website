"use client";
import React, { useState } from "react";
import { C, F } from "@/app/branding-agency-in-houston/Tokens";
import { FormField, PhoneField, TextAreaField } from "@/components/adpage/AdFormElements";
import { sendQuoteRequest } from "@/lib/api";
import { SuccessPopup } from "@/components/SuccessPopup";
import { ContactModal } from "@/components/adpage/ContactModal";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function HeroSection() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
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
        if (!form.message) newErrors.message = "Please enter a message";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast.error("Please fill in all required fields");
            return;
        }

        setLoading(true);
        try {
            await sendQuoteRequest({
                ...form,
                phone: `${form.dialCode}${form.phone}`,
                source: "Ad Page - Hero"
            });
            setSent(true);
            toast.success("Consultation request sent!");
        } catch (error: any) {
            toast.error(error.message || "Failed to send request");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section style={{
            background: `linear-gradient(140deg, ${C.burgD} 0%, ${C.burg} 60%, ${C.burgL} 100%)`,
            padding: "64px 0 88px",
            position: "relative", overflow: "hidden",
            clipPath: "polygon(0 0, 100% 0, 100% 93%, 0 100%)",
        }}>
            <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "rgba(245,197,24,0.06)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 60, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(245,197,24,0.04)", pointerEvents: "none" }} />

            <div className="grid-2" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", alignItems: "center", position: "relative", zIndex: 1 }}>

                {/* Left copy */}
                <div>
                    <div className="fu" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,197,24,0.13)", border: "1px solid rgba(245,197,24,0.3)", borderRadius: 40, padding: "6px 18px", marginBottom: 20 }}>
                        <span style={{ fontFamily: F.acc, fontSize: 16, fontWeight: 700, color: "#faf3e0" }}>★ Branding Agency</span>
                        <span style={{ fontFamily: F.body, fontSize: 11, color: "#faf3e0", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Houston, TX</span>
                    </div>

                    <h1 className="fu fu1" style={{ fontFamily: F.disp, fontSize: 62, fontWeight: 900, color: C.wh, lineHeight: 1.07, margin: "0 0 16px", letterSpacing: -1.5 }}>
                        Build a Brand<br />
                        <em style={{ color: C.yel, fontStyle: "italic" }}>Customers Love</em>
                    </h1>

                    <p className="fu fu2" style={{ fontFamily: F.body, fontSize: 17, color: "rgba(255,255,255,0.72)", lineHeight: 1.75, marginBottom: 24, maxWidth: 480 }}>
                        We help businesses in Houston, Texas grow with strategic branding, creative design, digital marketing, and professional website development.
                    </p>

                    <div className="fu fu2" style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1px dashed #faf3e0", borderRadius: 20, padding: "10px 18px", marginBottom: 28 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.yel} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" />
                            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                        </svg>
                        <span style={{ fontFamily: F.body, fontSize: 13, fontWeight: 800, color: "#faf3e0" }}>Partner With Us &amp; Receive One Service FREE</span>
                    </div>

                    <div className="fu fu3" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
                        <button
                            className="btn-yel"
                            onClick={() => setIsModalOpen(true)}
                            style={{ background: C.yel, color: C.burgD, padding: "15px 32px", borderRadius: 6, fontFamily: F.body, fontWeight: 800, fontSize: 15, transition: "all 0.2s", boxShadow: "0 6px 20px rgba(245,197,24,0.4)", cursor: "pointer" }}
                        >
                            Get Free Brand Consultation
                        </button>
                    </div>

                    <div className="fu fu4" style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                        {[["100+", "Brands Supported"], ["10+", "Years Experience"], ["Global", "Client Reach"]].map(([v, l]) => (
                            <div key={l}>
                                <div style={{ fontFamily: F.disp, fontSize: 30, fontWeight: 900, color: "#faf3e0", lineHeight: 1 }}>{v}</div>
                                <div style={{ fontFamily: F.body, fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div style={{ background: C.cream, border: `1.5px solid ${C.crD}`, borderRadius: 22, padding: "36px 32px", boxShadow: "0 12px 48px rgba(101,43,50,0.08)" }}>
                        {/* Form header */}
                        <div style={{ paddingBottom: 22, borderBottom: `1.5px solid ${C.crD}`, marginBottom: 24 }}>
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
                title="Consultation Requested!"
                message="Thank you for reaching out. We've received your request and will contact you within 24 hours to schedule your free strategy call."
            />

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
