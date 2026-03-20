"use client";

import { useEffect, useRef, useState } from "react";
import { X, Send, AlertCircle, ChevronDown, Search, Check, CheckCircle } from "lucide-react";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import { sendContactMail } from "@/services/api";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Country {
    code: string;
    name: string;
    dial_code: string;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

// ── Country list ───────────────────────────────────────────────────────────────
const countries: Country[] = [
    { code: "AF", name: "Afghanistan", dial_code: "+93" },
    { code: "AL", name: "Albania", dial_code: "+355" },
    { code: "DZ", name: "Algeria", dial_code: "+213" },
    { code: "AS", name: "American Samoa", dial_code: "+1" },
    { code: "AD", name: "Andorra", dial_code: "+376" },
    { code: "AO", name: "Angola", dial_code: "+244" },
    { code: "AR", name: "Argentina", dial_code: "+54" },
    { code: "AM", name: "Armenia", dial_code: "+374" },
    { code: "AU", name: "Australia", dial_code: "+61" },
    { code: "AT", name: "Austria", dial_code: "+43" },
    { code: "AZ", name: "Azerbaijan", dial_code: "+994" },
    { code: "BH", name: "Bahrain", dial_code: "+973" },
    { code: "BD", name: "Bangladesh", dial_code: "+880" },
    { code: "BE", name: "Belgium", dial_code: "+32" },
    { code: "BR", name: "Brazil", dial_code: "+55" },
    { code: "BG", name: "Bulgaria", dial_code: "+359" },
    { code: "CA", name: "Canada", dial_code: "+1" },
    { code: "CL", name: "Chile", dial_code: "+56" },
    { code: "CN", name: "China", dial_code: "+86" },
    { code: "CO", name: "Colombia", dial_code: "+57" },
    { code: "HR", name: "Croatia", dial_code: "+385" },
    { code: "CY", name: "Cyprus", dial_code: "+357" },
    { code: "CZ", name: "Czech Republic", dial_code: "+420" },
    { code: "DK", name: "Denmark", dial_code: "+45" },
    { code: "EG", name: "Egypt", dial_code: "+20" },
    { code: "EE", name: "Estonia", dial_code: "+372" },
    { code: "FI", name: "Finland", dial_code: "+358" },
    { code: "FR", name: "France", dial_code: "+33" },
    { code: "DE", name: "Germany", dial_code: "+49" },
    { code: "GH", name: "Ghana", dial_code: "+233" },
    { code: "GR", name: "Greece", dial_code: "+30" },
    { code: "HK", name: "Hong Kong", dial_code: "+852" },
    { code: "HU", name: "Hungary", dial_code: "+36" },
    { code: "IS", name: "Iceland", dial_code: "+354" },
    { code: "IN", name: "India", dial_code: "+91" },
    { code: "ID", name: "Indonesia", dial_code: "+62" },
    { code: "IR", name: "Iran", dial_code: "+98" },
    { code: "IQ", name: "Iraq", dial_code: "+964" },
    { code: "IE", name: "Ireland", dial_code: "+353" },
    { code: "IL", name: "Israel", dial_code: "+972" },
    { code: "IT", name: "Italy", dial_code: "+39" },
    { code: "JP", name: "Japan", dial_code: "+81" },
    { code: "JO", name: "Jordan", dial_code: "+962" },
    { code: "KZ", name: "Kazakhstan", dial_code: "+7" },
    { code: "KE", name: "Kenya", dial_code: "+254" },
    { code: "KR", name: "South Korea", dial_code: "+82" },
    { code: "KW", name: "Kuwait", dial_code: "+965" },
    { code: "LV", name: "Latvia", dial_code: "+371" },
    { code: "LB", name: "Lebanon", dial_code: "+961" },
    { code: "LT", name: "Lithuania", dial_code: "+370" },
    { code: "LU", name: "Luxembourg", dial_code: "+352" },
    { code: "MY", name: "Malaysia", dial_code: "+60" },
    { code: "MV", name: "Maldives", dial_code: "+960" },
    { code: "MT", name: "Malta", dial_code: "+356" },
    { code: "MX", name: "Mexico", dial_code: "+52" },
    { code: "MD", name: "Moldova", dial_code: "+373" },
    { code: "MA", name: "Morocco", dial_code: "+212" },
    { code: "MM", name: "Myanmar", dial_code: "+95" },
    { code: "NP", name: "Nepal", dial_code: "+977" },
    { code: "NL", name: "Netherlands", dial_code: "+31" },
    { code: "NZ", name: "New Zealand", dial_code: "+64" },
    { code: "NG", name: "Nigeria", dial_code: "+234" },
    { code: "NO", name: "Norway", dial_code: "+47" },
    { code: "OM", name: "Oman", dial_code: "+968" },
    { code: "PK", name: "Pakistan", dial_code: "+92" },
    { code: "PA", name: "Panama", dial_code: "+507" },
    { code: "PE", name: "Peru", dial_code: "+51" },
    { code: "PH", name: "Philippines", dial_code: "+63" },
    { code: "PL", name: "Poland", dial_code: "+48" },
    { code: "PT", name: "Portugal", dial_code: "+351" },
    { code: "QA", name: "Qatar", dial_code: "+974" },
    { code: "RO", name: "Romania", dial_code: "+40" },
    { code: "RU", name: "Russia", dial_code: "+7" },
    { code: "SA", name: "Saudi Arabia", dial_code: "+966" },
    { code: "SN", name: "Senegal", dial_code: "+221" },
    { code: "RS", name: "Serbia", dial_code: "+381" },
    { code: "SG", name: "Singapore", dial_code: "+65" },
    { code: "SK", name: "Slovakia", dial_code: "+421" },
    { code: "SI", name: "Slovenia", dial_code: "+386" },
    { code: "ZA", name: "South Africa", dial_code: "+27" },
    { code: "ES", name: "Spain", dial_code: "+34" },
    { code: "LK", name: "Sri Lanka", dial_code: "+94" },
    { code: "SE", name: "Sweden", dial_code: "+46" },
    { code: "CH", name: "Switzerland", dial_code: "+41" },
    { code: "TW", name: "Taiwan", dial_code: "+886" },
    { code: "TH", name: "Thailand", dial_code: "+66" },
    { code: "TR", name: "Turkey", dial_code: "+90" },
    { code: "UA", name: "Ukraine", dial_code: "+380" },
    { code: "AE", name: "United Arab Emirates", dial_code: "+971" },
    { code: "GB", name: "United Kingdom", dial_code: "+44" },
    { code: "US", name: "United States", dial_code: "+1" },
    { code: "UY", name: "Uruguay", dial_code: "+598" },
    { code: "UZ", name: "Uzbekistan", dial_code: "+998" },
    { code: "VE", name: "Venezuela", dial_code: "+58" },
    { code: "VN", name: "Vietnam", dial_code: "+84" },
    { code: "YE", name: "Yemen", dial_code: "+967" },
    { code: "ZM", name: "Zambia", dial_code: "+260" },
    { code: "ZW", name: "Zimbabwe", dial_code: "+263" },
];

// ── Flag emoji helper ──────────────────────────────────────────────────────────
function FlagEmoji({ code }: { code: string }) {
    const flag = code
        .toUpperCase()
        .split("")
        .map((c) => String.fromCodePoint(0x1f1e6 - 65 + c.charCodeAt(0)))
        .join("");
    return <span style={{ fontSize: "17px", lineHeight: 1, display: "inline-block" }}>{flag}</span>;
}

// ── Props ──────────────────────────────────────────────────────────────────────
interface DigitalAuditModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DigitalAuditModal({ isOpen, onClose }: DigitalAuditModalProps) {
    const [formData, setFormData] = useState<FormData>({
        name: "", email: "", phone: "", message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSending, setIsSending] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState<Country>(
        countries.find((c) => c.code === "US")!
    );
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties | null>(null);

    const countryBtnRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const sendBtnRef = useRef<HTMLButtonElement>(null);

    const filteredCountries = countries.filter(
        (c) =>
            c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.dial_code.includes(searchTerm) ||
            c.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Portal dropdown position — same as Contact.tsx
    useEffect(() => {
        const updatePosition = () => {
            if (showCountryDropdown && countryBtnRef.current) {
                const rect = countryBtnRef.current.getBoundingClientRect();
                setDropdownStyle({
                    position: "fixed",
                    top: rect.bottom + 8,
                    left: rect.left,
                    width: Math.max(rect.width, 280),
                    zIndex: 9999,
                });
            }
        };
        updatePosition();
        if (showCountryDropdown) {
            window.addEventListener("scroll", updatePosition, true);
            window.addEventListener("resize", updatePosition);
        }
        return () => {
            window.removeEventListener("scroll", updatePosition, true);
            window.removeEventListener("resize", updatePosition);
        };
    }, [showCountryDropdown]);

    // Click-outside / ESC — same as Contact.tsx
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const isDropdownClick = dropdownRef.current && dropdownRef.current.contains(event.target as Node);
            const isMenuClick = menuRef.current && menuRef.current.contains(event.target as Node);
            if (!isDropdownClick && !isMenuClick) {
                setShowCountryDropdown(false);
                setSearchTerm("");
            }
        };
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                if (showCountryDropdown) { setShowCountryDropdown(false); setSearchTerm(""); }
                else onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [showCountryDropdown, onClose]);

    // Scroll lock
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // Input change — same as Contact.tsx
    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((f) => ({ ...f, [field]: value }));
        if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
    };

    // Phone change — same as Contact.tsx
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 10) value = value.substring(0, 10);
        handleInputChange("phone", value);
    };

    const selectCountry = (country: Country) => {
        setSelectedCountry(country);
        setShowCountryDropdown(false);
        setSearchTerm("");
    };

    // Validation — same as Contact.tsx
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        if (formData.phone.trim() && formData.phone.length !== 10) {
            newErrors.phone = "Phone number must be exactly 10 digits";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Submit — same pattern as Contact.tsx
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please fix the errors before submitting", {
                icon: <AlertCircle className="w-5 h-5" />,
            });
            return;
        }

        setIsSending(true);

        const digitsOnly = formData.phone.replace(/\D/g, "");
        const fullPhoneNumber = selectedCountry.dial_code + digitsOnly;

        try {
            await sendContactMail({
                name: formData.name,
                email: formData.email,
                phone: fullPhoneNumber,
                message: formData.message,
                country_code: selectedCountry.code,
                source: "Free Digital Marketing Audit Modal",
            });

            toast.success("Message sent successfully!", {
                description: "We'll get back to you soon.",
                icon: <CheckCircle className="w-5 h-5" />,
            });

            // Reset & close
            setFormData({ name: "", email: "", phone: "", message: "" });
            setErrors({});
            onClose();

        } catch (error: unknown) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message : "Please try again later";
            toast.error("Something went wrong", { description: errorMessage });
        } finally {
            setIsSending(false);
        }
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setFormData({ name: "", email: "", phone: "", message: "" });
            setErrors({});
        }, 300);
    };

    if (!isOpen) return null;

    // Input className — mirrors Contact.tsx exactly
    const inp = (err?: string) =>
        [
            "w-full px-5 py-3 bg-transparent border-[1.5px] rounded-xl",
            "focus:outline-none transition-all font-medium text-base",
            "placeholder:text-[#652b32]/50 text-[#652b32]",
            err ? "border-red-500" : "border-[#652b32]/20 focus:border-[#652b32]",
        ].join(" ");

    return (
        <>
            <style>{`
        .dam-backdrop {
          position:fixed; inset:0; z-index:9990;
          background:rgba(10,3,5,.68);
          backdrop-filter:blur(7px);
          display:flex; align-items:center; justify-content:center;
          padding:16px;
          animation:damFade .22s ease;
        }
        @keyframes damFade { from{opacity:0} to{opacity:1} }

        .dam-panel {
          background:#ffffff;
          border-radius:22px;
          width:100%; max-width:520px;
          max-height:92vh;
          overflow-y:auto;
          box-shadow:0 28px 80px rgba(101,43,50,.24), 0 0 0 1px rgba(101,43,50,.07);
          animation:damUp .3s cubic-bezier(.34,1.56,.64,1);
          scrollbar-width:thin; scrollbar-color:rgba(101,43,50,.18) transparent;
        }
        @keyframes damUp { from{transform:translateY(22px) scale(.97);opacity:0} to{transform:none;opacity:1} }

        .dam-x {
          position:absolute; top:18px; right:18px;
          width:30px; height:30px; border-radius:50%;
          border:1.5px solid rgba(101,43,50,.15);
          background:rgba(101,43,50,.05);
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; color:#652b32;
          transition:background .18s, transform .22s;
        }
        .dam-x:hover { background:rgba(101,43,50,.13); transform:rotate(90deg) scale(1.1); }

        .dam-lbl {
          display:block;
          font-size:11px; font-weight:700;
          text-transform:uppercase; letter-spacing:.13em;
          color:#652b32; opacity:.8;
          margin-bottom:8px;
        }

        .dam-e {
          display:flex; align-items:center; gap:4px;
          margin-top:6px; font-size:12px; color:#dc2626;
        }

        .dam-hint { margin-top:5px; font-size:11px; color:rgba(101,43,50,.4); }

        /* Country button — matches Contact.tsx */
        .dam-country-btn {
          display:flex; align-items:center; gap:6px;
          padding:12px 14px;
          background:transparent;
          border:1.5px solid rgba(101,43,50,.2);
          border-radius:12px;
          font-size:13px; font-weight:700;
          color:#652b32; cursor:pointer; white-space:nowrap;
          transition:border-color .2s;
          flex-shrink:0;
          font-family:inherit;
          min-width:110px; justify-content:space-between;
        }
        .dam-country-btn:hover,
        .dam-country-btn:focus,
        .dam-country-btn.open { border-color:#652b32; outline:none; }

        /* Portal dropdown — matches Contact.tsx */
        .dam-dd {
          background:#faf3e0;
          border:2px solid rgba(101,43,50,.2);
          border-radius:12px;
          box-shadow:0 10px 40px -10px rgba(101,43,50,.3);
          overflow:hidden;
        }
        .dam-dd-search {
          padding:12px;
          border-bottom:1px solid rgba(101,43,50,.1);
          background:#faf3e0;
          position:sticky; top:0; z-index:10;
          display:flex; align-items:center; gap:8px;
        }
        .dam-dd-input {
          flex:1; border:none; outline:none;
          font-size:13px; color:#652b32;
          background:transparent; font-family:inherit;
          padding:4px 0;
        }
        .dam-dd-input::placeholder { color:rgba(101,43,50,.5); }
        .dam-dd-list { max-height:300px; overflow-y:auto; }
        .dam-dd-item {
          display:flex; align-items:center; gap:14px;
          padding:10px 16px; width:100%;
          background:none; border:none; cursor:pointer;
          text-align:left; font-family:inherit;
          transition:background .14s;
        }
        .dam-dd-item:hover { background:rgba(101,43,50,.05); }
        .dam-dd-item-name { flex:1; font-size:13px; font-weight:700; color:rgba(101,43,50,.8); }
        .dam-dd-item-code { font-size:11px; font-weight:500; color:rgba(101,43,50,.5); }

        /* Submit — matches Contact.tsx send button */
        .dam-submit {
          width:100%; padding:12px 24px;
          background:#652b32; color:#fff;
          border:none; border-radius:12px;
          font-size:13px; font-weight:700;
          letter-spacing:.14em; text-transform:uppercase;
          display:flex; align-items:center; justify-content:center; gap:10px;
          cursor:pointer;
          transition:all .3s;
          font-family:inherit;
          overflow:hidden; position:relative;
        }
        .dam-submit:hover:not(:disabled) { box-shadow:0 8px 28px rgba(101,43,50,.35); }
        .dam-submit:disabled { opacity:.7; cursor:not-allowed; }

        @keyframes spin { to{transform:rotate(360deg)} }
        .dam-spin { animation:spin .8s linear infinite; display:inline-block; }
      `}</style>

            <div
                className="dam-backdrop"
                onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
            >
                <div className="dam-panel" role="dialog" aria-modal aria-labelledby="dam-title">

                    {/* Header */}
                    <div style={{ padding: "28px 28px 0", position: "relative" }}>
                        <button className="dam-x" onClick={handleClose} aria-label="Close modal">
                            <X size={13} />
                        </button>
                        <h2
                            id="dam-title"
                            style={{
                                fontFamily: "'Georgia','Times New Roman',serif",
                                fontSize: "clamp(18px,4vw,22px)",
                                fontWeight: 700,
                                color: "#652b32",
                                textAlign: "center",
                                margin: "0 36px 10px",
                                lineHeight: 1.3,
                            }}
                        >
                            Get Free Consultation

                        </h2>
                        <div style={{
                            width: 40, height: 2.5,
                            background: "linear-gradient(90deg,#652b32,transparent)",
                            borderRadius: 2, margin: "0 auto 22px",
                        }} />
                    </div>

                    {/* Body */}
                    <div style={{ padding: "0 28px 28px" }}>
                        <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                            {/* Name */}
                            <div>
                                <label className="dam-lbl">
                                    Name <span style={{ color: "#652b32", opacity: 1 }}>*</span>
                                </label>
                                <input
                                    className={inp(errors.name)}
                                    type="text"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                />
                                {errors.name && (
                                    <p className="dam-e"><AlertCircle size={12} />{errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="dam-lbl">
                                    Email <span style={{ color: "#652b32", opacity: 1 }}>*</span>
                                </label>
                                <input
                                    className={inp(errors.email)}
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                />
                                {errors.email && (
                                    <p className="dam-e"><AlertCircle size={12} />{errors.email}</p>
                                )}
                            </div>

                            {/* Phone — same structure as Contact.tsx */}
                            <div>
                                <label className="dam-lbl">
                                    Phone Number{" "}
                                    <span style={{ color: "#652b32", opacity: 0.5 }}>(Optional)</span>
                                </label>
                                <div
                                    style={{ display: "flex", flexDirection: "row", gap: 8 }}
                                    ref={dropdownRef}
                                >
                                    {/* Country selector */}
                                    <div style={{ position: "relative", flexShrink: 0 }}>
                                        <button
                                            ref={countryBtnRef}
                                            type="button"
                                            className={`dam-country-btn${showCountryDropdown ? " open" : ""}`}
                                            onClick={() => setShowCountryDropdown((v) => !v)}
                                        >
                                            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                                <FlagEmoji code={selectedCountry.code} />
                                                <span style={{ fontSize: 13, fontWeight: 700 }}>{selectedCountry.dial_code}</span>
                                            </span>
                                            <ChevronDown
                                                size={14}
                                                style={{
                                                    transition: "transform .3s",
                                                    transform: showCountryDropdown ? "rotate(180deg)" : "none",
                                                }}
                                            />
                                        </button>

                                        {/* Portal dropdown */}
                                        {showCountryDropdown &&
                                            dropdownStyle &&
                                            typeof document !== "undefined" &&
                                            createPortal(
                                                <div ref={menuRef} className="dam-dd" style={dropdownStyle} role="listbox">
                                                    <div className="dam-dd-search">
                                                        <Search size={14} color="rgba(101,43,50,.5)" />
                                                        <input
                                                            autoFocus
                                                            className="dam-dd-input"
                                                            placeholder="Search country..."
                                                            value={searchTerm}
                                                            onChange={(e) => setSearchTerm(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="dam-dd-list">
                                                        {filteredCountries.length ? (
                                                            filteredCountries.map((c) => (
                                                                <button
                                                                    key={c.code}
                                                                    type="button"
                                                                    className="dam-dd-item"
                                                                    onClick={() => selectCountry(c)}
                                                                >
                                                                    <div style={{ width: 28, flexShrink: 0 }}>
                                                                        <FlagEmoji code={c.code} />
                                                                    </div>
                                                                    <div className="dam-dd-item-name">{c.name}</div>
                                                                    <div className="dam-dd-item-code">{c.dial_code}</div>
                                                                    {selectedCountry.code === c.code && (
                                                                        <Check size={14} color="#652b32" />
                                                                    )}
                                                                </button>
                                                            ))
                                                        ) : (
                                                            <div style={{ padding: "24px", textAlign: "center", fontSize: 13, opacity: 0.6 }}>
                                                                No countries found
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>,
                                                document.body
                                            )}
                                    </div>

                                    {/* Phone input */}
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <input
                                            className={inp(errors.phone)}
                                            type="tel"
                                            placeholder="Enter 10-digit number"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            maxLength={10}
                                        />
                                    </div>
                                </div>
                                {errors.phone && (
                                    <p className="dam-e"><AlertCircle size={12} />{errors.phone}</p>
                                )}
                                <div className="dam-hint">
                                    {formData.phone
                                        ? `${formData.phone.length}/10 digits — Full: ${selectedCountry.dial_code} ${formData.phone}`
                                        : "Enter phone number (optional)"}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="dam-lbl">
                                    Message <span style={{ color: "#652b32", opacity: 1 }}>*</span>
                                </label>
                                <textarea
                                    className={[
                                        "w-full px-5 py-3 bg-transparent border-[1.5px] rounded-xl",
                                        "focus:outline-none transition-all resize-none font-medium text-base",
                                        "placeholder:text-[#652b32]/50 text-[#652b32]",
                                        errors.message
                                            ? "border-red-500"
                                            : "border-[#652b32]/20 focus:border-[#652b32]",
                                    ].join(" ")}
                                    rows={5}
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={(e) => handleInputChange("message", e.target.value)}
                                />
                                {errors.message && (
                                    <p className="dam-e"><AlertCircle size={12} />{errors.message}</p>
                                )}
                                <div className="dam-hint">
                                    {formData.message ? `${formData.message.length} characters` : "Minimum 10 characters required"}
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                ref={sendBtnRef}
                                type="submit"
                                className="dam-submit"
                                disabled={isSending}
                            >
                                <span className="btn-text">
                                    {isSending ? "Sending..." : "Send Message"}
                                </span>
                                {isSending ? (
                                    <svg className="dam-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                    </svg>
                                ) : (
                                    <Send size={14} className="send-icon" />
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}