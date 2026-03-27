"use client";
import { useEffect, useRef } from "react";
import { ShoppingCart, Rocket, FolderOpen, Globe, Store, LayoutGrid, Smartphone } from "lucide-react";

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
        @keyframes ePulse    { 0%,100%{opacity:.04} 50%{opacity:.11} }
        @keyframes eFloat    { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-16px) rotate(3deg)} }
        @keyframes eRotateSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes eLineGrow { from{width:0} to{width:100%} }
        @keyframes eDash { to { stroke-dashoffset: 0; } }
        .ehbtn-pri:hover{ opacity:1!important; transform:translateY(-3px)!important; box-shadow: 0 8px 32px rgba(245,197,24,0.35)!important; }
        .ehbtn-out:hover{ border-color:#f5c518!important; color:#f5c518!important; transform:translateY(-3px)!important; }
        .hero-stat:hover .hero-stat-num { color: #f5c518; }
        .hero-stat { cursor: default; transition: transform 0.3s ease; }
        .hero-stat:hover { transform: translateY(-4px); }
        .hero-stat-num { transition: color 0.3s ease; }
      `}</style>

            <section style={{
                background: "#652b32",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: "7rem 6vw 5rem",
                position: "relative",
                overflow: "hidden",
            }}>
                {/* Background grid pattern */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: `
                        linear-gradient(rgba(245,197,24,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245,197,24,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }} />

                {/* Decorative rings */}
                {[
                    { w: "620px", h: "620px", top: "-130px", right: "-130px", bw: "1px", color: "rgba(245,197,24,0.12)" },
                    { w: "420px", h: "420px", top: "-130px", right: "-130px", bw: "1px", color: "rgba(245,197,24,0.08)" },
                    { w: "340px", h: "340px", bottom: "-100px", left: "3%", bw: "1px", color: "rgba(245,197,24,0.09)" },
                    { w: "180px", h: "180px", bottom: "-100px", left: "3%", bw: "1px", color: "rgba(245,197,24,0.06)" },
                ].map((r, k) => (
                    <div key={k} style={{
                        position: "absolute", width: r.w, height: r.h,
                        top: r.top, bottom: r.bottom, left: r.left, right: r.right,
                        borderRadius: "50%", border: `${r.bw} solid ${r.color}`,
                        animation: `ePulse ${3.5 + k * 0.7}s ease-in-out infinite`,
                        animationDelay: `${k * 0.6}s`, pointerEvents: "none",
                    }} />
                ))}

                {/* Large floating cart icon - replaced with lucide */}
                <div style={{
                    position: "absolute", right: "6vw", top: "50%",
                    transform: "translateY(-50%)",
                    opacity: 0.04,
                    animation: "eFloat 6s ease-in-out infinite",
                    pointerEvents: "none", userSelect: "none",
                    color: "#f5c518",
                }}>
                    <ShoppingCart size={220} strokeWidth={1} />
                </div>

                {/* Vertical accent line */}
                <div style={{
                    position: "absolute", left: "6vw", top: "7rem", bottom: "5rem",
                    width: "1px", background: "rgba(245,197,24,0.12)", pointerEvents: "none",
                }} />

                {/* Floating icon grid - decorative top right */}
                <div style={{
                    position: "absolute", top: "8rem", right: "18vw",
                    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem",
                    opacity: 0.06, pointerEvents: "none",
                }}>
                    {[Globe, Store, LayoutGrid, Smartphone, ShoppingCart, Rocket].map((Icon, k) => (
                        <Icon key={k} size={22} color="#f5c518" strokeWidth={1.5} />
                    ))}
                </div>

                <div style={{ maxWidth: "880px", position: "relative", zIndex: 1 }}>
                    {/* Badge */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "0.6rem",
                        background: "rgba(245,197,24,0.08)",
                        border: "1px solid rgba(245,197,24,0.22)",
                        padding: "0.45rem 1.2rem",
                        marginBottom: "2.2rem",
                        animation: "eFadeDown 0.7s ease forwards",
                    }}>
                        <ShoppingCart size={13} color="#f5c518" strokeWidth={2.5} />
                        <span style={{
                            fontSize: "0.68rem", letterSpacing: "0.16em",
                            textTransform: "uppercase", color: "#f5c518", fontWeight: 700,
                        }}>
                            Top E-Commerce Website Development Company
                        </span>
                    </div>

                    <h1 style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "clamp(2.6rem,5.5vw,5rem)",
                        fontWeight: 900, lineHeight: 1.06, color: "#faf3e0",
                        marginBottom: "1.2rem",
                        animation: "eFadeUp 0.8s ease 0.2s both",
                    }}>
                        Transform Your Business<br />
                        with High-Performance{" "}
                        <span ref={wordRef} style={{
                            color: "#f5c518",
                            display: "inline-block",
                            fontStyle: "italic",
                            transition: "opacity 0.38s ease, transform 0.38s ease",
                        }}>E-Commerce</span>
                    </h1>

                    {/* Animated underline */}
                    <div style={{
                        width: "80px", height: "3px",
                        background: "linear-gradient(90deg, #f5c518, transparent)",
                        marginBottom: "2rem",
                        animation: "eFadeUp 0.8s ease 0.35s both",
                    }} />

                    <p style={{
                        color: "rgba(250,243,224,0.65)",
                        fontSize: "1.05rem",
                        lineHeight: 1.85, maxWidth: "620px",
                        marginBottom: "3rem", fontWeight: 300,
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
                            padding: "1rem 2.4rem", fontWeight: 800, fontSize: "0.88rem",
                            letterSpacing: "0.08em", textTransform: "uppercase",
                            cursor: "pointer", fontFamily: "inherit",
                            display: "flex", alignItems: "center", gap: "0.6rem",
                            transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
                        }}>
                            <Rocket size={16} strokeWidth={2.5} />
                            Start Your Store
                        </button>
                        <button className="ehbtn-out" style={{
                            background: "transparent", color: "#faf3e0",
                            border: "1px solid rgba(250,243,224,0.22)",
                            padding: "1rem 2.4rem", fontWeight: 600, fontSize: "0.88rem",
                            letterSpacing: "0.06em", cursor: "pointer", fontFamily: "inherit",
                            display: "flex", alignItems: "center", gap: "0.6rem",
                            transition: "border-color 0.2s, color 0.2s, transform 0.2s",
                        }}>
                            <FolderOpen size={16} strokeWidth={1.8} />
                            View Our Work
                        </button>
                    </div>

                    {/* Stats */}
                    <div style={{
                        display: "flex", gap: "0",
                        marginTop: "4.5rem", flexWrap: "wrap",
                        animation: "eFadeUp 0.8s ease 0.85s both",
                        borderTop: "1px solid rgba(245,197,24,0.14)",
                        paddingTop: "2.5rem",
                    }}>
                        {[["40+", "Industries Served"], ["60+", "Projects Delivered"], ["10+", "Years Experience"]].map(([n, l], idx) => (
                            <div key={l} className="hero-stat" style={{
                                paddingRight: "3.5rem",
                                borderRight: idx < 2 ? "1px solid rgba(245,197,24,0.12)" : "none",
                                marginRight: idx < 2 ? "3.5rem" : "0",
                            }}>
                                <div className="hero-stat-num" style={{
                                    fontFamily: "'Playfair Display',serif",
                                    fontSize: "2.6rem", fontWeight: 900, color: "#faf3e0",
                                    lineHeight: 1,
                                }}>{n}</div>
                                <div style={{
                                    fontSize: "0.72rem", color: "rgba(250,243,224,0.38)",
                                    letterSpacing: "0.1em", textTransform: "uppercase",
                                    marginTop: "0.35rem", fontWeight: 500,
                                }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}