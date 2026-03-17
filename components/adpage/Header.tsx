"use client";
import React, { useState, useEffect } from "react";
import { C, F } from "@/app/branding-agency-in-houston/Tokens";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,

                // ✅ FIXED: Always dark background (no white)
                background: "rgba(44, 18, 21, 0.92)",
                backdropFilter: "blur(12px)",

                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                height: scrolled ? 76 : 100,
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    maxWidth: 1180,
                    margin: "0 auto",
                    padding: "0 28px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* ✅ Logo */}
                <a
                    href="#top"
                    style={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <div
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 8,
                            background: C.yel,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 900,
                            fontFamily: F.disp,
                            color: C.burgD,
                            fontSize: 24,
                        }}
                    >
                        M
                    </div>

                    <span
                        style={{
                            fontFamily: F.disp,
                            fontWeight: 900,
                            fontSize: 22,
                            color: C.wh,
                            letterSpacing: -0.5,
                        }}
                    >
                        Mediamatic<span style={{ color: C.yel }}>.</span>
                    </span>
                </a>

                {/* ✅ ONLY Get Quote Button */}
                <a
                    href="/get-quote/"
                    style={{
                        background: C.yel,
                        color: C.burgD,
                        padding: scrolled ? "8px 18px" : "10px 22px",
                        borderRadius: 6,
                        fontFamily: F.body,
                        fontWeight: 800,
                        fontSize: 13,
                        textDecoration: "none",
                        transition: "all 0.2s",
                        boxShadow: "0 4px 12px rgba(245,197,24,0.3)",
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-1px)";
                        e.currentTarget.style.boxShadow =
                            "0 6px 18px rgba(245,197,24,0.45)";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow =
                            "0 4px 12px rgba(245,197,24,0.3)";
                    }}
                >
                    GET QUOTE
                </a>
            </div>
        </header>
    );
}
