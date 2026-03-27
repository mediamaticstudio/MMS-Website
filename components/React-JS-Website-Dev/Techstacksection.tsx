"use client";
import { useEffect, useRef, useState } from "react";

const expertise = [
    {
        title: "React JS UI/UX Design & Development",
        desc: "Our team of React.js developers works hand-in-hand with UX/UI designers to define the look and feel of web and mobile applications, creating visually appealing user interfaces with user-friendly navigation for the best user experience.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
            </svg>
        ),
    },
    {
        title: "Custom React JS Development",
        desc: "We use React.js's component-based architecture, flexibility, and integration capabilities to build high-performing applications that are fully aligned with your business needs and are built to deliver a fantastic user experience.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        title: "React JS Migration",
        desc: "The companies can easily migrate to this JavaScript React framework with the aid of our exclusive ReactJS web development services based on their existing infrastructure and requirements. Our team can define processes to ensure smooth migration to the new ReactJS framework.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
            </svg>
        ),
    },
    {
        title: "E-commerce Customisation",
        desc: "Our experienced team of ReactJS developers offers a complete package of services to many clients all over the world. We work with clients from various industries, such as eCommerce, finance, communication, healthcare, retail, education, and many more.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        ),
    },
    {
        title: "React JS Support & Maintenance",
        desc: "We have certainly set the bar high in the market competition by offering efficient, flexible, and highly secured web applications. Our experts use advanced development methods and the necessary tools to deliver visually appealing UIs on time without any security breaches.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
];

export default function TechStackSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    const [hov, setHov] = useState<number | null>(null);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes shimmer { 0%{background-position:200% center}100%{background-position:-200% center} }

        .tech-tile {
          position:relative; overflow:hidden; cursor:default;
          transition:background 0.3s ease, transform 0.35s ease, box-shadow 0.35s ease;
        }
        .tech-tile:hover { transform:translateY(-7px); box-shadow:0 28px 70px rgba(0,0,0,0.25); }

        .tech-tile-topbar {
          position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,#f5c518,rgba(245,197,24,0.2));
          transform:scaleX(0); transform-origin:left;
          transition:transform 0.45s cubic-bezier(0.22,1,0.36,1);
        }
        .tech-tile:hover .tech-tile-topbar { transform:scaleX(1); }

        .tech-tile-glow {
          position:absolute; inset:0; pointer-events:none; opacity:0;
          background:radial-gradient(ellipse at 25% 25%,rgba(245,197,24,0.1),transparent 60%);
          transition:opacity 0.45s ease;
        }
        .tech-tile:hover .tech-tile-glow { opacity:1; }

        .tech-tile-shine {
          position:absolute; inset:0; pointer-events:none; opacity:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.04) 50%,transparent 70%);
          background-size:200% auto;
          transition:opacity 0.3s ease;
        }
        .tech-tile:hover .tech-tile-shine {
          opacity:1;
          animation:shimmer 2s linear infinite;
        }

        .tech-learn-more {
          display:flex; align-items:center; gap:0.5rem;
          margin-top:1.6rem;
          opacity:0; transform:translateX(-8px);
          transition:opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s;
        }
        .tech-tile:hover .tech-learn-more { opacity:1; transform:translateX(0); }
      `}</style>

            <section ref={ref} style={{
                background: "#652b32", padding: "7rem 6vw",
                fontFamily: "'DM Sans', sans-serif", position: "relative", overflow: "hidden",
            }}>

                {/* Grid */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "linear-gradient(rgba(245,197,24,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,197,24,0.04) 1px,transparent 1px)",
                    backgroundSize: "60px 60px",
                }} />

                {/* Watermark */}
                <div style={{
                    position: "absolute", right: "-3rem", bottom: "-4rem",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(10rem, 18vw, 18rem)", fontWeight: 900, lineHeight: 1,
                    color: "transparent", WebkitTextStroke: "1px rgba(245,197,24,0.04)",
                    userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em",
                }}>Build</div>

                {/* Header */}
                <div style={{
                    position: "relative",
                    opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(26px)",
                    transition: "opacity 0.85s ease, transform 0.85s ease",
                    marginBottom: "4.5rem",
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.1rem" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                        <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#f5c518" }}>What We Build</span>
                        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,rgba(245,197,24,0.4),transparent)", maxWidth: "120px" }} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "end" }}>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                            fontWeight: 900, color: "#faf3e0",
                            lineHeight: 1.06, letterSpacing: "-0.02em",
                        }}>Our Expertise in React JS Website Design & Development</h2>
                        <p style={{ fontSize: "0.92rem", color: "rgba(250,243,224,0.42)", lineHeight: 1.85, fontWeight: 300 }}>
                            It is painless for businesses to develop interactive UIs with the help of our web application development company's expertise in high-end web app development solutions.
                        </p>
                    </div>
                </div>

                {/* Cards */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
                    gap: "1px",
                    background: "rgba(245,197,24,0.08)",
                }}>
                    {expertise.map((item, i) => (
                        <div key={i} className="tech-tile"
                            onMouseEnter={() => setHov(i)}
                            onMouseLeave={() => setHov(null)}
                            style={{
                                background: hov === i ? "rgba(245,197,24,0.07)" : "#652b32",
                                padding: "3rem 2.4rem",
                                opacity: vis ? 1 : 0,
                                transform: vis ? (hov === i ? "translateY(-7px)" : "none") : "translateY(34px)",
                                transition: `background 0.3s ease, box-shadow 0.35s ease, transform 0.35s ease, opacity 0.75s ease ${i * 0.12}s`,
                            }}>
                            <div className="tech-tile-topbar" />
                            <div className="tech-tile-glow" />
                            <div className="tech-tile-shine" />

                            {/* Ghost number */}
                            <div style={{
                                position: "absolute", top: "1.6rem", right: "2rem",
                                fontFamily: "'Playfair Display', serif", fontSize: "3.2rem", fontWeight: 900, lineHeight: 1,
                                color: hov === i ? "rgba(245,197,24,0.09)" : "rgba(245,197,24,0.04)",
                                userSelect: "none", pointerEvents: "none",
                                transition: "color 0.3s ease",
                            }}>0{i + 1}</div>

                            {/* Icon */}
                            <div style={{
                                width: "52px", height: "52px",
                                background: hov === i ? "rgba(245,197,24,0.16)" : "rgba(245,197,24,0.09)",
                                color: hov === i ? "#f5c518" : "rgba(250,243,224,0.75)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                marginBottom: "1.6rem",
                                clipPath: "polygon(0 0,calc(100% - 9px) 0,100% 9px,100% 100%,9px 100%,0 calc(100% - 9px))",
                                transition: "background 0.3s ease, color 0.3s ease",
                            }}>{item.icon}</div>

                            <div style={{
                                fontSize: "0.97rem", fontWeight: 700, lineHeight: 1.35,
                                color: hov === i ? "#f5c518" : "#faf3e0",
                                marginBottom: "0.85rem",
                                transition: "color 0.25s ease",
                            }}>{item.title}</div>

                            <div style={{
                                fontSize: "0.87rem", lineHeight: 1.8,
                                color: "rgba(250,243,224,0.46)", fontWeight: 300,
                            }}>{item.desc}</div>

                            <div className="tech-learn-more">
                                <div style={{ height: "1px", width: "18px", background: "#f5c518" }} />
                                <span style={{ fontSize: "0.7rem", color: "#f5c518", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>Learn more</span>
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    );
}