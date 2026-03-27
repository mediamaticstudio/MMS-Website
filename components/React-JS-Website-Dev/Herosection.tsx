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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes fd  { from{opacity:0;transform:translateY(-22px)}to{opacity:1;transform:translateY(0)} }
        @keyframes fu  { from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)} }
        @keyframes fl  { from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:translateX(0)} }
        @keyframes floatAtom { 0%,100%{transform:translateY(-50%) rotate(0deg) scale(1)}50%{transform:translateY(calc(-50% - 18px)) rotate(6deg) scale(1.02)} }
        @keyframes scanH { 0%{transform:translateX(-100%)}100%{transform:translateX(100vw)} }
        @keyframes pulseRing { 0%,100%{opacity:0.04;transform:scale(1)}50%{opacity:0.09;transform:scale(1.04)} }
        @keyframes shimmer { 0%{background-position:200% center}100%{background-position:-200% center} }

        .hero-cta-primary {
          display:inline-flex; align-items:center; gap:0.6rem;
          background:#f5c518; color:#652b32; border:none;
          padding:1rem 2.2rem; font-weight:700; font-size:0.8rem;
          letter-spacing:0.13em; text-transform:uppercase;
          cursor:pointer; font-family:'DM Sans',sans-serif;
          position:relative; overflow:hidden;
          clip-path:polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px));
          transition:transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hero-cta-primary:hover { transform:translateY(-3px); box-shadow:0 12px 40px rgba(245,197,24,0.35); }
        .hero-cta-primary::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);
          background-size:200% auto; animation:shimmer 2.5s linear infinite;
        }

        .hero-cta-secondary {
          display:inline-flex; align-items:center; gap:0.6rem;
          background:transparent; color:#faf3e0;
          border:1px solid rgba(250,243,224,0.22);
          padding:1rem 2.2rem; font-weight:500; font-size:0.8rem;
          letter-spacing:0.13em; text-transform:uppercase;
          cursor:pointer; font-family:'DM Sans',sans-serif;
          transition:border-color 0.25s,color 0.25s,transform 0.25s;
        }
        .hero-cta-secondary:hover { border-color:#f5c518; color:#f5c518; transform:translateY(-3px); }

        .stat-pill { position:relative; padding:1.4rem 0 1.4rem 1.6rem; }
        .stat-pill::before {
          content:''; position:absolute; left:0; top:0; bottom:0; width:2px;
          background:linear-gradient(180deg,#f5c518 0%,rgba(245,197,24,0) 100%);
        }
      `}</style>

            <section style={{
                background: "#652b32",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: "7rem 6vw 5rem",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'DM Sans', sans-serif",
            }}>

                {/* Mesh grid */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "linear-gradient(rgba(245,197,24,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(245,197,24,0.035) 1px,transparent 1px)",
                    backgroundSize: "64px 64px",
                }} />

                {/* Diagonal light beam */}
                <div style={{
                    position: "absolute", top: "-20%", right: "28%",
                    width: "1px", height: "140%",
                    background: "linear-gradient(180deg,transparent,rgba(245,197,24,0.14) 40%,rgba(245,197,24,0.06) 75%,transparent)",
                    transform: "rotate(10deg)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", top: "-20%", right: "46%",
                    width: "1px", height: "140%",
                    background: "linear-gradient(180deg,transparent,rgba(245,197,24,0.06) 50%,transparent)",
                    transform: "rotate(10deg)",
                    pointerEvents: "none",
                }} />

                {/* Scan line */}
                <div style={{
                    position: "absolute", top: 0, height: "1px", width: "240px",
                    background: "linear-gradient(90deg,transparent,rgba(245,197,24,0.3),transparent)",
                    animation: "scanH 6s linear infinite",
                    pointerEvents: "none",
                }} />

                {/* Pulsing rings */}
                {[
                    { w: "560px", h: "560px", t: "-100px", r: "-80px" },
                    { w: "280px", h: "280px", b: "-60px", l: "6%" },
                ].map((s, k) => (
                    <div key={k} style={{
                        position: "absolute", width: s.w, height: s.h,
                        top: s.t, bottom: s.b, left: s.l, right: s.r,
                        borderRadius: "50%",
                        border: "60px solid rgba(245,197,24,0.05)",
                        animation: `pulseRing ${4 + k * 1.5}s ease-in-out infinite`,
                        animationDelay: `${k * 0.8}s`,
                        pointerEvents: "none",
                    }} />
                ))}

                {/* Floating atom */}
                <div style={{
                    position: "absolute", right: "4vw", top: "50%",
                    fontSize: "clamp(10rem,18vw,18rem)",
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(245,197,24,0.07)",
                    animation: "floatAtom 7s ease-in-out infinite",
                    pointerEvents: "none", userSelect: "none",
                    lineHeight: 1,
                }}>⚛</div>

                {/* Corner brackets */}
                {[
                    { top: "2.2rem", left: "2.2rem", bt: "2px solid rgba(245,197,24,0.35)", bl: "2px solid rgba(245,197,24,0.35)" },
                    { top: "2.2rem", right: "2.2rem", bt: "2px solid rgba(245,197,24,0.35)", br: "2px solid rgba(245,197,24,0.35)" },
                    { bottom: "2.2rem", left: "2.2rem", bb: "2px solid rgba(245,197,24,0.35)", bl: "2px solid rgba(245,197,24,0.35)" },
                    { bottom: "2.2rem", right: "2.2rem", bb: "2px solid rgba(245,197,24,0.35)", br: "2px solid rgba(245,197,24,0.35)" },
                ].map((p, k) => (
                    <div key={k} style={{
                        position: "absolute", width: "22px", height: "22px",
                        top: p.top, bottom: p.bottom, left: p.left, right: p.right,
                        borderTop: p.bt, borderLeft: p.bl, borderRight: p.br, borderBottom: p.bb,
                        pointerEvents: "none",
                    }} />
                ))}

                {/* Content */}
                <div style={{ maxWidth: "900px", position: "relative", zIndex: 1 }}>

                    {/* Eyebrow */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem", marginBottom: "2.8rem", animation: "fd 0.7s ease forwards" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2" strokeLinecap="round">
                            <circle cx="12" cy="12" r="10" /><path d="M12 2a10 10 0 0 1 0 20M2 12h20M12 2c-2.8 4-4 7-4 10s1.2 6 4 10" />
                        </svg>
                        <span style={{ fontSize: "0.68rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "#f5c518", fontWeight: 700 }}>
                            React JS Website Development Company
                        </span>
                        <div style={{ width: "24px", height: "1px", background: "rgba(245,197,24,0.4)" }} />
                    </div>

                    {/* H1 */}
                    <h1 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(3.2rem, 6.5vw, 6.2rem)",
                        fontWeight: 900, lineHeight: 1.02, color: "#faf3e0",
                        marginBottom: "1.6rem",
                        animation: "fu 0.9s ease 0.15s both",
                        letterSpacing: "-0.02em",
                    }}>
                        Fast, Interactive<br />
                        React JS{" "}
                        <span style={{ position: "relative", display: "inline-block" }}>
                            <span ref={wordRef} style={{
                                color: "#f5c518", display: "inline-block",
                                transition: "opacity 0.38s ease, transform 0.38s ease",
                                fontStyle: "italic",
                            }}>Web Apps</span>
                            <span style={{
                                position: "absolute", bottom: "-6px", left: 0, right: 0, height: "3px",
                                background: "linear-gradient(90deg,#f5c518,rgba(245,197,24,0.2))",
                            }} />
                        </span>
                    </h1>

                    <p style={{
                        color: "rgba(250,243,224,0.6)", fontSize: "1.02rem",
                        lineHeight: 1.88, maxWidth: "620px",
                        marginBottom: "3.2rem", fontWeight: 300,
                        animation: "fu 0.9s ease 0.3s both",
                    }}>
                        React.js has fast, simple, and interactive web experiences, making it a great first choice for creating new digital products or modernising existing ones. At MediaMatic, a React JS development company, we have the expertise in design, development, and business to provide excellent front-end solutions.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fu 0.9s ease 0.45s both", marginBottom: "5.5rem" }}>
                        <button className="hero-cta-primary">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            Start Your Project
                        </button>
                        <button className="hero-cta-secondary">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                            </svg>
                            View Our Work
                        </button>
                    </div>

                    {/* Stats row */}
                    <div style={{ display: "flex", gap: "0", flexWrap: "wrap", animation: "fu 0.9s ease 0.6s both" }}>
                        {[
                            { n: "500+", l: "Projects Delivered" },
                            { n: "10+", l: "Years Experience" },
                            { n: "50+", l: "Industries Served" },
                        ].map(({ n, l }, k) => (
                            <div key={l} className="stat-pill" style={{ marginRight: "3.5rem" }}>
                                <div style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "2.6rem", fontWeight: 900,
                                    color: "#f5c518", lineHeight: 1, marginBottom: "0.25rem",
                                }}>{n}</div>
                                <div style={{ fontSize: "0.7rem", color: "rgba(250,243,224,0.38)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}