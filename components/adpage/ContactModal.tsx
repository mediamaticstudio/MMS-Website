"use client";
import React, { useState } from "react";
import { C, F } from "@/app/branding-agency-in-houston/Tokens";
import { FormField, PhoneField, TextAreaField } from "@/components/adpage/AdFormElements";
import { sendQuoteRequest } from "@/lib/api";
import { SuccessPopup } from "@/components/SuccessPopup";
import { toast } from "sonner";
import { Loader2, X } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        countryCode: "US",
        dialCode: "+1"
    });
    const [errors, setErrors] = useState<any>({});

    if (!isOpen) return null;

    const handleSubmit = async () => {
        const newErrors: any = {};
        if (!form.name) newErrors.name = "Name is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.phone) newErrors.phone = "Phone is required";
        if (!form.message) newErrors.message = "Please enter a message";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        try {
            await sendQuoteRequest({
                ...form,
                phone: `${form.dialCode}${form.phone}`,
                source: "Ad Page - Modal"
            });
            setSent(true);
        } catch (error: any) {
            toast.error(error.message || "Failed to send request");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(21, 11, 13, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: 20
        }}>
            <div style={{
                background: C.cream,
                width: "100%",
                maxWidth: 500,
                borderRadius: 22,
                padding: "40px",
                position: "relative",
                boxShadow: "0 24px 80px rgba(0,0,0,0.3)"
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: C.burg
                    }}
                >
                    <X size={24} />
                </button>

                <div style={{ marginBottom: 32 }}>
                    <h3 style={{ fontFamily: F.disp, fontSize: 32, fontWeight: 900, color: C.text, marginBottom: 8 }}>
                        Get in Touch
                    </h3>
                    <div style={{ width: 40, height: 4, background: C.yel, borderRadius: 2 }} />
                </div>

                <div style={{ maxHeight: "70vh", overflowY: "auto", paddingRight: 10 }}>
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
                        label="How can we help?"
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
                            transition: "all 0.2s",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            opacity: loading ? 0.7 : 1,
                            cursor: loading ? "not-allowed" : "pointer",
                            marginTop: 10
                        }}
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message →"}
                    </button>
                </div>
            </div>

            <SuccessPopup
                isOpen={sent}
                onClose={() => {
                    setSent(false);
                    onClose();
                }}
                title="Message Sent!"
                message="Thank you for reaching out. We've received your message and will get back to you within 24 hours."
            />
        </div>
    );
};
