"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
    const words = ["E-Commerce", "Online Stores", "B2B Portals", "Marketplaces", "Mobile Shops"];
    const wordRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let i = 0;
        const el = wordRef.current;
        if (!el) return;
        const rotate = () => {
            el.style.opacity = "0";
            el.style.transform = "translateY(14px)";
            setTimeout(() => {
                i = (i + 1) % words.length;
                el.textContent = words[i];
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, 380);
        };
        const timer = setInterval(rotate, 2600);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <style>{`
        @keyframes eFadeDown { from{opacity:0;transform:translateY(-18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes eFadeUp   { from{opacity:0;transform:translateY(24px)}  to{opacity:1;transform:translateY(0)} }
        @keyframes ePulse    { 0%,100%{opacity:.06} 50%{opacity:.13} }
        @keyframes eFloat    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes eShimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .ehbtn-pri:hover{ opacity:.84!important; transform:translateY(-2px)!important; }
        .ehbtn-out:hover{ border-color:#f5c518!important; color:#f5c518!important; transform:translateY(-2px)!important; }
      `}</style>

            <section style={{
                background: "#652b32", minHeight: "100vh",
                display: "flex", alignItems: "center",
                padding: "7rem 6vw 5rem", position: "relative", overflow: "hidden",
            }}>
                {/* Decorative rings */}
                {[
                    { w: "600px", h: "600px", top: "-110px", right: "-110px", bw: "90px" },
                    { w: "320px", h: "320px", bottom: "-80px", left: "5%", bw: "60px" },
                    { w: "200px", h: "200px", top: "22%", right: "20%", bw: "35px" },
                ].map((r, k) => (
                    <div key={k} style={{
                        position: "absolute", width: r.w, height: r.h,
                        top: r.top, bottom: r.bottom, left: r.left, right: r.right,
                        borderRadius: "50%", border: `${r.bw} solid rgba(245,197,24,0.07)`,
                        animation: `ePulse ${3.5 + k}s ease-in-out infinite`,
                        animationDelay: `${k * 1.1}s`, pointerEvents: "none",
                    }} />
                ))}
                {/* Diagonal lines */}
                {["26%", "40%"].map((pos, k) => (
                    <div key={k} style={{
                        position: "absolute", top: 0, right: pos,
                        width: "1px", height: "100%",
                        background: "rgba(245,197,24,0.06)",
                        transform: `rotate(${12 + k * 5}deg)`,
                        transformOrigin: "top center", pointerEvents: "none",
                    }} />
                ))}
                {/* Floating cart icon */}
                <div style={{
                    position: "absolute", right: "6vw", top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "clamp(6rem,13vw,12rem)",
                    opacity: 0.05,
                    animation: "eFloat 5s ease-in-out infinite",
                    pointerEvents: "none", userSelect: "none",
                }}>🛒</div>

                <div style={{ maxWidth: "900px", position: "relative", zIndex: 1 }}>
                    {/* Badge */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        background: "rgba(245,197,24,0.11)", border: "1px solid rgba(245,197,24,0.28)",
                        padding: "0.4rem 1.1rem", marginBottom: "2rem",
                        animation: "eFadeDown 0.7s ease forwards",
                    }}>
                        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#f5c518", fontWeight: 700 }}>
                            🛒 Top E-Commerce Website Development Company
                        </span>
                    </div>

                    <h1 style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "clamp(2.6rem,5.5vw,5rem)",
                        fontWeight: 900, lineHeight: 1.07, color: "#faf3e0",
                        marginBottom: "1rem",
                        animation: "eFadeUp 0.8s ease 0.2s both",
                    }}>
                        Transform Your Business with<br />
                        High-Performance{" "}
                        <span ref={wordRef} style={{
                            color: "#f5c518", display: "inline-block",
                            transition: "opacity 0.38s ease, transform 0.38s ease",
                        }}>E-Commerce</span>
                    </h1>

                    <p style={{
                        color: "rgba(250,243,224,0.72)", fontSize: "1.08rem",
                        lineHeight: 1.8, maxWidth: "660px",
                        marginBottom: "2.8rem", fontWeight: 300,
                        animation: "eFadeUp 0.8s ease 0.4s both",
                    }}>
                        We at MediaMatic build high-performance e-commerce websites with a mobile-first approach, which capture the imagination of your customers. We are a leading company for eCommerce website development, and we include voice searches, chatbots, and AI personalisation on your site.
                    </p>

                    <div style={{
                        display: "flex", gap: "1rem", flexWrap: "wrap",
                        animation: "eFadeUp 0.8s ease 0.6s both",
                    }}>
                        <button className="ehbtn-pri" style={{
                            background: "#f5c518", color: "#652b32", border: "none",
                            padding: "0.9rem 2.2rem", fontWeight: 800, fontSize: "0.95rem",
                            letterSpacing: "0.05em", textTransform: "uppercase",
                            cursor: "pointer", fontFamily: "inherit",
                            transition: "opacity 0.2s, transform 0.2s",
                        }}>🚀 Start Your Store</button>
                        <button className="ehbtn-out" style={{
                            background: "transparent", color: "#faf3e0",
                            border: "2px solid rgba(250,243,224,0.32)",
                            padding: "0.9rem 2.2rem", fontWeight: 600, fontSize: "0.95rem",
                            letterSpacing: "0.04em", cursor: "pointer", fontFamily: "inherit",
                            transition: "border-color 0.2s, color 0.2s, transform 0.2s",
                        }}>📂 View Our Work</button>
                    </div>

                    {/* Stats */}
                    <div style={{
                        display: "flex", gap: "3rem", marginTop: "4rem", flexWrap: "wrap",
                        animation: "eFadeUp 0.8s ease 0.85s both",
                    }}>
                        {[["40+", "Industries Served"], ["60+", "Projects Delivered"], ["10+", "Years Experience"]].map(([n, l]) => (
                            <div key={l}>
                                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 900, color: "#f5c518" }}>{n}</div>
                                <div style={{ fontSize: "0.78rem", color: "rgba(250,243,224,0.45)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}