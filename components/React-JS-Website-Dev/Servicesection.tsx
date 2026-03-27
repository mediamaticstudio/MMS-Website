"use client";
import { useEffect, useRef, useState } from "react";

function useVisible() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);
    return { ref, vis };
}

const standout = [
    {
        title: "Strategic, Business-Driven Framework Solutions",
        desc: "The unmatched flexibility and excellent features of React JS help the developers to provide the client with a customised app or website. Besides this, our developers are able to understand your business needs effectively to provide you with a world-class product. We have developed many social media apps, web pages, SPAs, etc.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
    {
        title: "Expert React JS Website Design & Development Team",
        desc: "Our React web development agency's developers are proficient in various technologies and frameworks. Our developers are competent front-end developers and back-end developers. Hence, they provide good user interfaces with good features and functions.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: "User-Centric UI/UX & Responsive Design",
        desc: "Having an impressive website can increase the chances of more traffic to the app up to double. The interactive UI can help in attracting more customers, and React JS can help in developing attractive and customised UI, which is also SEO-friendly.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
    },
    {
        title: "High Performance, Speed & Scalability",
        desc: "We are one of the best companies with the ideology of delivering quality in a short span, and for the same, our ReactJS developers follow the Agile method of development. Thus, delivering high performance becomes easy, and clients can be sure of the success of their web or app.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
    },
    {
        title: "End-to-End React JS Website Support & Maintenance",
        desc: "Maintenance & support are the significant services offered by us in web development using React JS. You own the code, and we maintain and support your product after development. It ensures that the product we developed is working properly or not.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
];

const whyChoose = [
    {
        title: "Strategic Approach",
        desc: "With years of work using React, we have learned and adopted best practices to deliver projects more efficiently. What is more, we are constantly improving our solutions, and we have learned to develop our own tricks to automate React development.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
            </svg>
        ),
    },
    {
        title: "Custom-Built Solutions",
        desc: "Thanks to our expertise, we are able to foresee all the potential problems that may occur in a given industry and tackle them before they get into our development process.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
        ),
    },
    {
        title: "Performance & Scalability",
        desc: "You get a fast and responsive UI even with high user interactions and data volume. Most small and mid-size React web applications work fine without special configuration.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        title: "Transparent Communication",
        desc: "We understand how important your app or website is to you. Hence, we provide you with the actual details of the development process of the product.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
    {
        title: "Timely Completion",
        desc: "We are following agile methodology to provide you a quality product within time so that you can start your business sooner.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
];

export default function ServiceSection() {
    const s1 = useVisible();
    const s2 = useVisible();

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .standout-item {
          position:relative; padding:2.4rem 2rem;
          border-left:2px solid rgba(245,197,24,0.1);
          transition:border-color 0.3s ease, transform 0.3s ease, background 0.3s ease;
          overflow:hidden;
        }
        .standout-item:hover {
          border-left-color:#f5c518;
          transform:translateX(8px);
          background:rgba(245,197,24,0.04);
        }
        .standout-item-num {
          position:absolute; top:1.8rem; right:2rem;
          font-family:'Playfair Display',serif; font-size:3.2rem; font-weight:900; line-height:1;
          color:rgba(245,197,24,0.07); user-select:none; transition:color 0.3s ease;
        }
        .standout-item:hover .standout-item-num { color:rgba(245,197,24,0.11); }

        .why-tile {
          padding:2.6rem 2.2rem; position:relative; overflow:hidden;
          background:#faf3e0; cursor:default;
          transition:transform 0.3s ease, box-shadow 0.3s ease;
        }
        .why-tile:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(101,43,50,0.09); }
        .why-tile-bar {
          position:absolute; bottom:0; left:0; right:0; height:2px;
          background:#f5c518; transform:scaleX(0); transform-origin:left;
          transition:transform 0.4s ease;
        }
        .why-tile:hover .why-tile-bar { transform:scaleX(1); }
        .why-tile-glow {
          position:absolute; inset:0; pointer-events:none; opacity:0;
          background:radial-gradient(ellipse at 20% 30%,rgba(245,197,24,0.06),transparent 70%);
          transition:opacity 0.4s ease;
        }
        .why-tile:hover .why-tile-glow { opacity:1; }
      `}</style>

            {/* STAND OUT SECTION */}
            <section style={{
                background: "#652b32", padding: "7rem 6vw",
                fontFamily: "'DM Sans', sans-serif", position: "relative", overflow: "hidden",
            }}>
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "linear-gradient(rgba(245,197,24,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,197,24,0.04) 1px,transparent 1px)",
                    backgroundSize: "60px 60px",
                }} />

                {/* Watermark text */}
                <div style={{
                    position: "absolute", right: "-3rem", bottom: "-4rem",
                    fontFamily: "'Playfair Display', serif", fontSize: "16rem", fontWeight: 900, lineHeight: 1,
                    color: "transparent", WebkitTextStroke: "1px rgba(245,197,24,0.04)",
                    userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em",
                }}>Why</div>

                <div ref={s1.ref} style={{ position: "relative" }}>

                    <div style={{
                        opacity: s1.vis ? 1 : 0, transform: s1.vis ? "none" : "translateY(26px)",
                        transition: "opacity 0.85s ease, transform 0.85s ease",
                        marginBottom: "4.5rem",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.1rem" }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round">
                                <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
                            </svg>
                            <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#f5c518" }}>Why MediaMatic</span>
                            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,rgba(245,197,24,0.4),transparent)", maxWidth: "120px" }} />
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "end" }}>
                            <h2 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                                fontWeight: 900, color: "#faf3e0",
                                lineHeight: 1.06, letterSpacing: "-0.02em",
                            }}>How We Stand Out Among Other React Website Development Companies</h2>
                            <p style={{ fontSize: "0.92rem", color: "rgba(250,243,224,0.42)", lineHeight: 1.85, fontWeight: 300 }}>
                                We have a diversified area of development and offer various ReactJS development services. Find these services in the space below.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0" }}>
                        {standout.map((item, i) => (
                            <div key={i} className="standout-item" style={{
                                opacity: s1.vis ? 1 : 0,
                                transform: s1.vis ? "translateX(0)" : "translateX(-24px)",
                                transition: `opacity 0.75s ease ${0.1 + i * 0.1}s, transform 0.75s ease ${0.1 + i * 0.1}s, border-color 0.3s ease, background 0.3s ease`,
                            }}>
                                <div className="standout-item-num">0{i + 1}</div>

                                <div style={{
                                    width: "48px", height: "48px",
                                    background: "rgba(245,197,24,0.1)", color: "#f5c518",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    marginBottom: "1.3rem",
                                    clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))",
                                }}>{item.icon}</div>

                                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#faf3e0", marginBottom: "0.7rem", lineHeight: 1.38 }}>{item.title}</div>
                                <div style={{ fontSize: "0.87rem", lineHeight: 1.8, color: "rgba(250,243,224,0.45)", fontWeight: 300 }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE SECTION */}
            <section style={{
                background: "#faf3e0", padding: "7rem 6vw",
                fontFamily: "'DM Sans', sans-serif", position: "relative", overflow: "hidden",
            }}>
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(circle,rgba(101,43,50,0.055) 1px,transparent 1px)",
                    backgroundSize: "36px 36px",
                }} />

                <div ref={s2.ref} style={{ position: "relative" }}>
                    <div style={{
                        opacity: s2.vis ? 1 : 0, transform: s2.vis ? "none" : "translateY(26px)",
                        transition: "opacity 0.85s ease, transform 0.85s ease",
                        marginBottom: "4.5rem",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.1rem" }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#f5c518" }}>Our Commitment</span>
                            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,rgba(245,197,24,0.4),transparent)", maxWidth: "120px" }} />
                        </div>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                            fontWeight: 900, color: "#652b32",
                            lineHeight: 1.06, letterSpacing: "-0.02em", maxWidth: "640px",
                        }}>Why Choose Our React Framework Website Development Service?</h2>
                    </div>

                    <div style={{
                        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "1px", background: "rgba(101,43,50,0.07)",
                    }}>
                        {whyChoose.map((item, i) => (
                            <div key={i} className="why-tile" style={{
                                opacity: s2.vis ? 1 : 0,
                                transform: s2.vis ? "none" : "translateY(30px)",
                                transition: `opacity 0.75s ease ${0.1 + i * 0.1}s, transform 0.75s ease ${0.1 + i * 0.1}s`,
                            }}>
                                <div className="why-tile-glow" />
                                <div className="why-tile-bar" />

                                {/* Icon box */}
                                <div style={{
                                    width: "48px", height: "48px",
                                    background: "rgba(101,43,50,0.07)", color: "#652b32",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    marginBottom: "1.3rem",
                                    clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))",
                                }}>{item.icon}</div>

                                {/* Yellow dash */}
                                <div style={{ width: "28px", height: "2px", background: "#f5c518", marginBottom: "1rem" }} />
                                <div style={{ fontSize: "0.97rem", fontWeight: 700, color: "#652b32", marginBottom: "0.6rem" }}>{item.title}</div>
                                <div style={{ fontSize: "0.89rem", lineHeight: 1.82, color: "rgba(101,43,50,0.56)", fontWeight: 300 }}>{item.desc}</div>

                                {/* Ghost index */}
                                <div style={{
                                    position: "absolute", bottom: "1rem", right: "1.5rem",
                                    fontFamily: "'Playfair Display', serif", fontSize: "3.2rem", fontWeight: 900,
                                    color: "rgba(101,43,50,0.04)", lineHeight: 1,
                                    userSelect: "none", pointerEvents: "none",
                                }}>0{i + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}