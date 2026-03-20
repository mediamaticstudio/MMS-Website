"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
    const words = ["Web Apps", "SPAs", "UI/UX", "eCommerce", "Dashboards"];
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
        @keyframes fadeDown { from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)} }
        @keyframes fadeUp   { from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)} }
        @keyframes pulse    { 0%,100%{opacity:.07}50%{opacity:.15} }
        @keyframes floatY   { 0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)} }
        .hero-pri:hover{opacity:.85!important;}
        .hero-out:hover{border-color:#f5c518!important;color:#f5c518!important;}
        .nav-link:hover{color:#f5c518!important;}
      `}</style>

            <section style={{
                background: "#652b32", minHeight: "100vh",
                display: "flex", alignItems: "center",
                padding: "7rem 6vw 5rem", position: "relative", overflow: "hidden",
            }}>
                {/* BG decoration */}
                {[
                    { w: "520px", h: "520px", t: "-90px", r: "-90px", bw: "72px" },
                    { w: "300px", h: "300px", b: "-70px", l: "8%", bw: "55px" },
                    { w: "180px", h: "180px", t: "30%", r: "18%", bw: "30px" },
                ].map((s, k) => (
                    <div key={k} style={{
                        position: "absolute", width: s.w, height: s.h,
                        top: s.t, bottom: s.b, left: s.l, right: s.r,
                        borderRadius: "50%",
                        border: `${s.bw} solid rgba(245,197,24,0.07)`,
                        animation: `pulse ${3.5 + k}s ease-in-out infinite`,
                        animationDelay: `${k * 1.1}s`, pointerEvents: "none",
                    }} />
                ))}
                <div style={{
                    position: "absolute", top: 0, right: "26%",
                    width: "1px", height: "100%",
                    background: "linear-gradient(to bottom,transparent,rgba(245,197,24,0.12),transparent)",
                    transform: "rotate(10deg)", pointerEvents: "none",
                }} />
                {/* Floating React atom icon */}
                <div style={{
                    position: "absolute", right: "6vw", top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "clamp(7rem,14vw,14rem)",
                    opacity: 0.04,
                    animation: "floatY 5s ease-in-out infinite",
                    pointerEvents: "none", userSelect: "none",
                }}>⚛</div>

                <div style={{ maxWidth: "860px", position: "relative", zIndex: 1 }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        background: "rgba(245,197,24,0.11)", border: "1px solid rgba(245,197,24,0.28)",
                        padding: "0.4rem 1rem", marginBottom: "2rem",
                        animation: "fadeDown 0.7s ease forwards",
                    }}>
                        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#f5c518", fontWeight: 700 }}>
                            ⚛️ React JS Website Development Company
                        </span>
                    </div>

                    <h1 style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "clamp(2.8rem,5.8vw,5.2rem)",
                        fontWeight: 900, lineHeight: 1.08, color: "#faf3e0",
                        marginBottom: "1rem",
                        animation: "fadeUp 0.8s ease 0.2s both",
                    }}>
                        Fast, Interactive React JS{" "}
                        <span ref={wordRef} style={{
                            color: "#f5c518", display: "inline-block",
                            transition: "opacity 0.38s ease, transform 0.38s ease",
                        }}>Web Apps</span>
                    </h1>

                    <p style={{
                        color: "rgba(250,243,224,0.72)", fontSize: "1.08rem",
                        lineHeight: 1.8, maxWidth: "640px",
                        marginBottom: "2.8rem", fontWeight: 300,
                        animation: "fadeUp 0.8s ease 0.4s both",
                    }}>
                        React.js has fast, simple, and interactive web experiences, making it a great first choice for creating new digital products or modernising existing ones. At MediaMatic, a React JS development company, we have the expertise in design, development, and business to provide excellent front-end solutions.
                    </p>

                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.6s both" }}>
                        <button className="hero-pri" style={{
                            background: "#f5c518", color: "#652b32", border: "none",
                            padding: "0.9rem 2.2rem", fontWeight: 800, fontSize: "0.95rem",
                            letterSpacing: "0.05em", textTransform: "uppercase",
                            cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.2s",
                        }}>🚀 Start Your Project</button>
                        <button className="hero-out" style={{
                            background: "transparent", color: "#faf3e0",
                            border: "2px solid rgba(250,243,224,0.35)",
                            padding: "0.9rem 2.2rem", fontWeight: 600, fontSize: "0.95rem",
                            letterSpacing: "0.04em", cursor: "pointer",
                            fontFamily: "inherit", transition: "border-color 0.2s,color 0.2s",
                        }}>📂 View Our Work</button>
                    </div>

                    <div style={{ display: "flex", gap: "3rem", marginTop: "4rem", animation: "fadeUp 0.8s ease 0.8s both" }}>
                        {[["500+", "Projects Delivered"], ["10+", "Years Experience"], ["50+", "Industries Served"]].map(([n, l]) => (
                            <div key={l}>
                                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 900, color: "#f5c518" }}>{n}</div>
                                <div style={{ fontSize: "0.78rem", color: "rgba(250,243,224,0.48)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}