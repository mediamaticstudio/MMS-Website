"use client";
import { useEffect, useRef, useState } from "react";

export default function CTASection() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);

    const a = (d = 0) => ({
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.85s ease ${d}s, transform 0.85s ease ${d}s`,
    });

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes shimmer { 0%{background-position:200% center}100%{background-position:-200% center} }

        .cta-info-card {
          position:relative; overflow:hidden;
          transition:transform 0.35s ease, box-shadow 0.35s ease;
        }
        .cta-info-card:hover { transform:translateY(-5px); box-shadow:0 24px 60px rgba(101,43,50,0.12); }
        .cta-info-card-topline {
          position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#f5c518,rgba(245,197,24,0.3));
        }
        .cta-info-card-watermark {
          position:absolute; bottom:-1rem; right:-1rem;
          font-family:'Playfair Display',serif;
          font-size:7rem; font-weight:900; line-height:1;
          pointer-events:none; user-select:none;
          transition:color 0.35s ease;
        }

        .cta-collab-btn {
          display:inline-flex; align-items:center; gap:0.7rem;
          background:#f5c518; color:#652b32; border:none;
          padding:1.1rem 2.6rem; font-weight:700; font-size:0.8rem;
          letter-spacing:0.14em; text-transform:uppercase;
          cursor:pointer; font-family:'DM Sans',sans-serif;
          position:relative; overflow:hidden; flex-shrink:0;
          clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px));
          transition:transform 0.25s ease, box-shadow 0.25s ease;
        }
        .cta-collab-btn:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(245,197,24,0.4); }
        .cta-collab-btn::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.2) 50%,transparent 70%);
          background-size:200% auto; animation:shimmer 2.5s linear infinite;
        }
      `}</style>

            <section ref={ref} style={{
                background: "#faf3e0",
                padding: "7rem 6vw",
                fontFamily: "'DM Sans', sans-serif",
                position: "relative", overflow: "hidden",
            }}>

                {/* Grid background */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "linear-gradient(rgba(101,43,50,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(101,43,50,0.04) 1px,transparent 1px)",
                    backgroundSize: "52px 52px",
                }} />

                {/* Large decorative background char */}
                <div style={{
                    position: "absolute", right: "-4vw", top: "50%", transform: "translateY(-50%)",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(14rem, 22vw, 22rem)", fontWeight: 900, lineHeight: 1,
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(101,43,50,0.045)",
                    pointerEvents: "none", userSelect: "none", letterSpacing: "-0.05em",
                }}>JS</div>

                {/* Section Header */}
                <div style={{ position: "relative", ...a(0), marginBottom: "4rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.1rem" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round">
                            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#f5c518" }}>
                            What We Do
                        </span>
                        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,rgba(245,197,24,0.4),transparent)", maxWidth: "120px" }} />
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                        fontWeight: 900, color: "#652b32",
                        lineHeight: 1.06, letterSpacing: "-0.02em",
                    }}>React.js Framework Development</h2>
                </div>

                {/* Info cards */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "2px",
                    background: "rgba(101,43,50,0.08)",
                    position: "relative",
                }}>
                    {[
                        {
                            icon: (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                </svg>
                            ),
                            dark: false,
                            title: "What is React.js framework development?",
                            body: "ReactJS is not a programming language; it is a library. It supports architectural features through its extensions, and therefore, it is the best front-end framework available today, particularly because of its component-based architecture, virtual DOM for performance optimisation, and strong community support.",
                        },
                        {
                            icon: (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            ),
                            dark: true,
                            title: "Why Choose the React JS Framework for Your Website?",
                            body: "For creating simple and rapid interactive web applications, businesses can rely completely on the potential of this framework. You can use it for delivering the best ReactJS development services to users of your applications. Our company is the best ReactJS web development company because we have efficient developers who can develop dynamic web applications with less coding. We will create an excellent product and keep your business ideas safe!",
                        },
                    ].map((item, i) => (
                        <div key={i} className="cta-info-card" style={{
                            background: item.dark ? "#652b32" : "#faf3e0",
                            padding: "3.2rem 3rem 4rem",
                            position: "relative",
                            ...a(i * 0.18),
                        }}>
                            <div className="cta-info-card-topline" />

                            {/* Icon box */}
                            <div style={{
                                width: "54px", height: "54px",
                                background: item.dark ? "rgba(245,197,24,0.12)" : "rgba(101,43,50,0.07)",
                                color: item.dark ? "#f5c518" : "#652b32",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                marginBottom: "1.8rem",
                                clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                            }}>{item.icon}</div>

                            {/* Ghost number */}
                            <div className="cta-info-card-watermark" style={{
                                color: item.dark ? "rgba(245,197,24,0.06)" : "rgba(101,43,50,0.05)",
                            }}>0{i + 1}</div>

                            <h3 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.22rem", fontWeight: 700,
                                color: item.dark ? "#faf3e0" : "#652b32",
                                marginBottom: "1.1rem", lineHeight: 1.32, maxWidth: "380px",
                            }}>{item.title}</h3>

                            <p style={{
                                fontSize: "0.91rem", lineHeight: 1.88, fontWeight: 300,
                                color: item.dark ? "rgba(250,243,224,0.58)" : "rgba(101,43,50,0.62)",
                            }}>{item.body}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div style={{
                    marginTop: "5rem",
                    background: "#652b32",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "stretch",
                    overflow: "hidden",
                    position: "relative",
                    ...a(0.55),
                }}>
                    {/* Left accent stripe */}
                    <div style={{
                        position: "absolute", left: 0, top: 0, bottom: 0, width: "5px",
                        background: "linear-gradient(180deg,#f5c518,rgba(245,197,24,0.4))",
                    }} />

                    <div style={{ padding: "3rem 3rem 3rem 4rem" }}>
                        <div style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.7rem", fontWeight: 900, color: "#faf3e0",
                            marginBottom: "0.5rem", lineHeight: 1.2,
                        }}>Ready to build your React JS application?</div>
                        <div style={{ fontSize: "0.88rem", color: "rgba(250,243,224,0.42)", fontFamily: "'DM Sans', sans-serif" }}>
                            Let's turn your vision into a high-performing React product.
                        </div>
                    </div>

                    <div style={{
                        background: "rgba(245,197,24,0.07)",
                        borderLeft: "1px solid rgba(245,197,24,0.14)",
                        display: "flex", alignItems: "center", padding: "2rem 3rem",
                    }}>
                        <button className="cta-collab-btn">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Let's Collaborate
                        </button>
                    </div>
                </div>

            </section>
        </>
    );
}