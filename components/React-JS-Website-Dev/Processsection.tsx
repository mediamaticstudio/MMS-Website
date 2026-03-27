"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
    {
        num: "01", title: "Planning",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
        ),
        desc: "Our team is leaving no stone unturned to research the market and the audience to determine the best strategies to move forward with, such as their pains, needs, issues, solutions, etc. We carefully select the tech stack that best fits this project. Gradually, we integrate all these bits of information into a comprehensive project plan.",
    },
    {
        num: "02", title: "Designing",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
            </svg>
        ),
        desc: "Our designers work with our developers in our pursuit of designing interfaces that not only look beautiful but are also easy to use. Wireframes and prototypes are made to plan user navigation and ease of use. Thereafter, we work toward perfecting it by creating designs that represent your brand and meet all accessibility needs.",
    },
    {
        num: "03", title: "Development",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        desc: "This is where agile helps React developers. Agile helps us break our work into smaller sprints with clear goals and deliverables. We are able to produce high-quality work and make constant progress thanks to this iterative approach. Code reviews by team members and automated tests prevent errors and ensure everything works consistently.",
    },
    {
        num: "04", title: "Testing",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
                <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
                <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
                <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
                <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
                <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
                <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" />
            </svg>
        ),
        desc: "We help get your app ready for launch with our smooth and seamless CI/CD pipelines for releases and optimisation of loading speed and responsiveness. Our rigorous security scans and end tests help identify and eliminate vulnerabilities in your app.",
    },
    {
        num: "05", title: "Launch and Support",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
        desc: "We do not stop supporting and upgrading your app even after it is launched. We ensure that everything works well and that the app is stable through constant maintenance and monitoring, debugging, and more. We add more features depending on what people say and what your business needs.",
    },
];

export default function ProcessSection() {
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

        .proc-card {
          position:relative; overflow:hidden;
          transition:transform 0.3s ease, box-shadow 0.3s ease;
          cursor:default;
        }
        .proc-card:hover { transform:translateY(-6px); box-shadow:0 20px 60px rgba(101,43,50,0.1); }
        .proc-card-fill {
          position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(101,43,50,0.04),transparent);
          opacity:0; transition:opacity 0.35s ease;
        }
        .proc-card:hover .proc-card-fill { opacity:1; }
        .proc-card-accent {
          position:absolute; top:0; left:0; bottom:0; width:3px;
          background:linear-gradient(180deg,#f5c518,rgba(245,197,24,0.1));
          transform:scaleY(0); transform-origin:top;
          transition:transform 0.45s ease;
        }
        .proc-card:hover .proc-card-accent { transform:scaleY(1); }
      `}</style>

            <section ref={ref} style={{
                background: "#faf3e0", padding: "7rem 6vw",
                fontFamily: "'DM Sans', sans-serif", position: "relative", overflow: "hidden",
            }}>

                {/* Dot grid */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(circle,rgba(101,43,50,0.055) 1px,transparent 1px)",
                    backgroundSize: "38px 38px",
                }} />

                {/* Header */}
                <div style={{
                    position: "relative",
                    opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(26px)",
                    transition: "opacity 0.85s ease, transform 0.85s ease",
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.1rem" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round">
                            <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
                        </svg>
                        <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#f5c518" }}>How It Works</span>
                        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,rgba(245,197,24,0.4),transparent)", maxWidth: "120px" }} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "end", marginBottom: "5rem" }}>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                            fontWeight: 900, color: "#652b32",
                            lineHeight: 1.06, letterSpacing: "-0.02em",
                        }}>Our React JS Website Development Process</h2>
                        <p style={{ fontSize: "0.93rem", color: "rgba(101,43,50,0.52)", lineHeight: 1.85, fontWeight: 300 }}>
                            Our design process eliminates the guesswork associated with React JS website design and development. Here's how it works.
                        </p>
                    </div>
                </div>

                {/* Timeline wrapper */}
                <div style={{ position: "relative" }}>
                    {/* Static timeline rail */}
                    <div style={{
                        position: "absolute", top: "0", left: 0, right: 0, height: "2px",
                        background: "rgba(101,43,50,0.07)", pointerEvents: "none",
                    }} />
                    {/* Animated fill */}
                    <div style={{
                        position: "absolute", top: "0", left: 0,
                        height: "2px",
                        width: vis ? "100%" : "0%",
                        background: "linear-gradient(90deg,#f5c518,rgba(245,197,24,0.25))",
                        transition: "width 1.8s cubic-bezier(0.22,1,0.36,1) 0.4s",
                        pointerEvents: "none",
                    }} />

                    {/* Steps */}
                    <div style={{ display: "flex", gap: "0", overflowX: "auto", paddingBottom: "1rem" }}>
                        {steps.map((step, i) => (
                            <div key={i} className="proc-card"
                                onMouseEnter={() => setHov(i)}
                                onMouseLeave={() => setHov(null)}
                                style={{
                                    flex: "1 1 200px", minWidth: "200px",
                                    paddingTop: "3.2rem", paddingRight: "2.2rem", paddingBottom: "1.5rem",
                                    opacity: vis ? 1 : 0,
                                    transform: vis ? "none" : "translateY(36px)",
                                    transition: `opacity 0.75s ease ${i * 0.14}s, transform 0.75s ease ${i * 0.14}s`,
                                }}>
                                <div className="proc-card-fill" />
                                <div className="proc-card-accent" />

                                {/* Node dot on timeline */}
                                <div style={{
                                    position: "absolute", top: "-8px", left: 0,
                                    width: "16px", height: "16px",
                                    background: hov === i ? "#652b32" : "#f5c518",
                                    borderRadius: "50%",
                                    border: "2.5px solid #faf3e0",
                                    boxShadow: `0 0 0 ${hov === i ? 4 : 3}px ${hov === i ? "rgba(101,43,50,0.2)" : "rgba(245,197,24,0.28)"}`,
                                    transition: "all 0.3s ease", zIndex: 1,
                                }} />

                                {/* Ghost number */}
                                <div style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "3.8rem", fontWeight: 900,
                                    color: hov === i ? "rgba(101,43,50,0.09)" : "rgba(101,43,50,0.05)",
                                    lineHeight: 1, marginBottom: "0.2rem",
                                    transition: "color 0.3s ease",
                                }}>{step.num}</div>

                                {/* Icon box */}
                                <div style={{
                                    width: "48px", height: "48px",
                                    background: hov === i ? "#652b32" : "rgba(101,43,50,0.07)",
                                    color: hov === i ? "#f5c518" : "#652b32",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    marginBottom: "1.1rem",
                                    clipPath: "polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,7px 100%,0 calc(100% - 7px))",
                                    transition: "background 0.3s ease, color 0.3s ease",
                                }}>{step.icon}</div>

                                <div style={{
                                    fontFamily: "'Playfair Display', serif", fontSize: "1.08rem", fontWeight: 700,
                                    color: hov === i ? "#652b32" : "rgba(101,43,50,0.82)",
                                    marginBottom: "0.75rem", transition: "color 0.25s ease",
                                }}>{step.title}</div>

                                <div style={{
                                    fontSize: "0.86rem", lineHeight: 1.8,
                                    color: "rgba(101,43,50,0.5)", fontWeight: 300,
                                }}>{step.desc}</div>

                                {/* Connector */}
                                {i < steps.length - 1 && (
                                    <div style={{
                                        position: "absolute", top: 0, right: 0, bottom: 0, width: "1px",
                                        background: "linear-gradient(180deg,rgba(245,197,24,0.3),transparent)",
                                    }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
}