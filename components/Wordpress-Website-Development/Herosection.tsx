"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
    const words = ["Websites", "eCommerce", "Themes", "Plugins"];
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
        @keyframes fadeDown { from { opacity:0; transform:translateY(-16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeUp   { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse    { 0%,100%{opacity:.08} 50%{opacity:.16} }
        .hero-btn-pri:hover { opacity:.85 !important; }
        .hero-btn-out:hover { border-color:#f5c518 !important; color:#f5c518 !important; }
      `}</style>

            <section style={{
                background: "#652b32", minHeight: "100vh",
                display: "flex", alignItems: "center",
                padding: "7rem 6vw 5rem", position: "relative", overflow: "hidden",
            }}>
                {/* BG rings */}
                {[["500px", "500px", "-80px", undefined, undefined, "-80px", "70px"],
                ["280px", "280px", undefined, "-60px", "8%", undefined, "50px"]].map(([w, h, top, bottom, left, right, bw], k) => (
                    <div key={k} style={{
                        position: "absolute", width: w as string, height: h as string,
                        top: top as string, bottom: bottom as string,
                        left: left as string, right: right as string,
                        borderRadius: "50%", border: `${bw} solid rgba(245,197,24,0.07)`,
                        animation: "pulse 4s ease-in-out infinite",
                        animationDelay: `${k * 1.2}s`, pointerEvents: "none",
                    }} />
                ))}
                <div style={{
                    position: "absolute", top: 0, right: "28%", width: "2px", height: "100%",
                    background: "rgba(245,197,24,0.07)", transform: "rotate(12deg)",
                    transformOrigin: "top center", pointerEvents: "none",
                }} />

                <div style={{ maxWidth: "880px", position: "relative", zIndex: 1 }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        background: "rgba(245,197,24,0.11)", border: "1px solid rgba(245,197,24,0.28)",
                        padding: "0.4rem 1rem", marginBottom: "2rem",
                        animation: "fadeDown 0.7s ease forwards",
                    }}>
                        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#f5c518", fontWeight: 700 }}>
                            🌐 WordPress Website Development Company
                        </span>
                    </div>

                    <h1 style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "clamp(2.8rem,5.8vw,5.2rem)",
                        fontWeight: 900, lineHeight: 1.08, color: "#faf3e0",
                        marginBottom: "1rem",
                        animation: "fadeUp 0.8s ease 0.2s both",
                    }}>
                        Building Powerful WordPress{" "}
                        <span ref={wordRef} style={{
                            color: "#f5c518", display: "inline-block",
                            transition: "opacity 0.38s ease, transform 0.38s ease",
                        }}>Websites</span>
                    </h1>

                    <p style={{
                        color: "rgba(250,243,224,0.72)", fontSize: "1.1rem",
                        lineHeight: 1.78, maxWidth: "640px",
                        marginBottom: "2.8rem", fontWeight: 300,
                        animation: "fadeUp 0.8s ease 0.4s both",
                    }}>
                        The days of HTML websites have been replaced by the age of WordPress websites. Now, companies prefer using the WordPress platform for creating websites, ranging from start-ups to giant companies. You can develop stunning websites with engaging user experiences that go beyond blogging. We are a WordPress website development company and have experienced WordPress developers who can create wonderful websites for you.
                    </p>

                    <div style={{
                        display: "flex", gap: "1rem", flexWrap: "wrap",
                        animation: "fadeUp 0.8s ease 0.6s both",
                    }}>
                        <button className="hero-btn-pri" style={{
                            background: "#f5c518", color: "#652b32", border: "none",
                            padding: "0.9rem 2.2rem", fontWeight: 800, fontSize: "0.95rem",
                            letterSpacing: "0.05em", textTransform: "uppercase",
                            cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.2s",
                        }}>🚀 Start Your Project</button>

                    </div>

                    <div style={{
                        display: "flex", gap: "3rem", marginTop: "4rem",
                        animation: "fadeUp 0.8s ease 0.8s both",
                    }}>
                        {[["650+", "WordPress Developers"], ["500+", "Projects Delivered"], ["10+", "Years Experience"]].map(([n, l]) => (
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