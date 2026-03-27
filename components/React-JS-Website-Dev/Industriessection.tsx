"use client";
import { useEffect, useRef, useState } from "react";

const domains = [
    { icon: "🛍️", name: "Retail & E-Commerce", desc: "Our retail software development services can help enhance the shopping experience of customers through our commitment to UX/UI and high-performance front ends. We can help retail businesses, e-commerce businesses, and startups increase their digital presence with omnichannel platforms and online marketplaces that are easily accessible via the web and mobile devices." },
    { icon: "🎓", name: "Education & e-learning", desc: "We do thorough research and use the latest technology to develop online learning software. We are also providing digital learning tools for the classroom, online courses, and educational apps. The operational cost of our best ReactJS development company is flexible for different worldwide projects." },
    { icon: "☁️", name: "SaaS & Digital Platforms", desc: "We employ React to create intuitive dashboards, interactive reporting solutions, and responsive user interfaces. By focusing on TypeScript and modular code structures, we can provide speedier development solutions for your company." },
    { icon: "🏗️", name: "Construction & Estate", desc: "Some businesses use our services to engage ReactJS developers to create high-performance web applications that support their business processes. We have an experienced staff with extensive knowledge in developing applications such as buying and selling property, realtor apps, property listings, and so on." },
    { icon: "🚗", name: "Automotive", desc: "We revolutionise the management of inventories for transport companies, from warehouse planning to shipment tracking and distribution, with accurate and complete control of processes in real-time." },
    { icon: "🏥", name: "Healthcare & Pharmacy", desc: "We offer web and app development services for the healthcare industry. It offers quality assurance for the development of mobile apps like remote patient monitoring apps, e-prescription software, telemedicine software, electronic health records, etc." },
    { icon: "✈️", name: "Tours & Travel", desc: "Our hospitality and travel software solutions help you optimise internal processes, which in turn results in a better experience for your guests." },
    { icon: "🏦", name: "Banking & Finance", desc: "We specialise in building solutions, such as corporate lending solutions, payment gateway solutions, and smart financial management solutions. Whether you are looking to explore the idea of creating a simple digital payment app or want to take your existing financial app to the next level, we are here to offer our FinTech software development and technical expertise." },
    { icon: "🎬", name: "Media & Entertainment", desc: "We are a skilled React.js development company that offers scalable solutions in the entertainment sector. We design mobile applications to play games, music, short videos, social media, and much more." },
    { icon: "🏭", name: "Digital Manufacturing", desc: "We are a digital manufacturing company that has experience digitising various processes. First, we'll trace the movement of materials through your operation. Once completed, we will develop and design digital solutions for the flow of materials in your operation." },
];

// SVG icon set for each domain (stroke icons, no emoji)
const domainIcons: Record<string, JSX.Element> = {
    "🛍️": (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    ),
    "🎓": (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    ),
    "☁️": (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
    ),
    "🏗️": (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    ),
    "🚗": (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
    ),
    "🏥": (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    ),
    "✈️": (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5 18 1 16 1 14.5 2.5L11 6 2.8 4.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 6.2 7.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </svg>
    ),
    "🏦": (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    ),
    "🎬": (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" /><line x1="17" y1="7" x2="22" y2="7" />
        </svg>
    ),
    "🏭": (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    ),
};

export default function IndustriesSection() {
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

        .ind-tile {
          position:relative; overflow:hidden; cursor:default;
          transition:background 0.3s ease, transform 0.3s ease;
        }
        .ind-tile:hover { transform:translateY(-5px); }
        .ind-tile-bar {
          position:absolute; bottom:0; left:0; right:0; height:2px;
          background:#f5c518; transform:scaleX(0); transform-origin:left;
          transition:transform 0.4s ease;
        }
        .ind-tile:hover .ind-tile-bar { transform:scaleX(1); }
        .ind-tile-glow {
          position:absolute; inset:0; pointer-events:none; opacity:0;
          background:radial-gradient(ellipse at 30% 20%,rgba(245,197,24,0.08),transparent 65%);
          transition:opacity 0.4s ease;
        }
        .ind-tile:hover .ind-tile-glow { opacity:1; }
        .ind-tile-num {
          position:absolute; bottom:1.2rem; right:1.5rem;
          font-family:'Playfair Display',serif; font-size:4.5rem; font-weight:900; line-height:1;
          pointer-events:none; user-select:none;
          transition:color 0.3s ease;
        }
      `}</style>

            <section ref={ref} style={{
                background: "#652b32", padding: "7rem 6vw",
                fontFamily: "'DM Sans', sans-serif", position: "relative", overflow: "hidden",
            }}>

                {/* Grid bg */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "linear-gradient(rgba(245,197,24,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,197,24,0.04) 1px,transparent 1px)",
                    backgroundSize: "60px 60px",
                }} />

                {/* Header */}
                <div style={{
                    position: "relative",
                    opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(26px)",
                    transition: "opacity 0.85s ease, transform 0.85s ease",
                    marginBottom: "5rem",
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.1rem" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round">
                            <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#f5c518" }}>Industries</span>
                        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,rgba(245,197,24,0.4),transparent)", maxWidth: "120px" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                            fontWeight: 900, color: "#faf3e0",
                            lineHeight: 1.06, letterSpacing: "-0.02em", maxWidth: "560px",
                        }}>Business Domains We Serve as a React JS Website Development Company</h2>
                        <div style={{
                            background: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.18)",
                            padding: "0.7rem 1.4rem", fontSize: "0.78rem",
                            color: "#f5c518", fontWeight: 700, letterSpacing: "0.1em",
                            display: "flex", alignItems: "center", gap: "0.5rem",
                        }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                            {domains.length} INDUSTRIES
                        </div>
                    </div>
                </div>

                {/* Tiles grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "1px",
                    background: "rgba(245,197,24,0.1)",
                }}>
                    {domains.map((d, i) => (
                        <div key={i} className="ind-tile"
                            onMouseEnter={() => setHov(i)}
                            onMouseLeave={() => setHov(null)}
                            style={{
                                background: hov === i ? "rgba(245,197,24,0.08)" : "#652b32",
                                padding: "2.4rem 2rem 3.8rem",
                                opacity: vis ? 1 : 0,
                                transform: vis ? (hov === i ? "translateY(-5px)" : "none") : "translateY(30px)",
                                transition: `background 0.3s ease, transform 0.3s ease, opacity 0.65s ease ${i * 0.055}s`,
                            }}>
                            <div className="ind-tile-glow" />
                            <div className="ind-tile-bar" />

                            {/* SVG icon box */}
                            <div style={{
                                width: "46px", height: "46px",
                                background: hov === i ? "rgba(245,197,24,0.15)" : "rgba(245,197,24,0.08)",
                                color: hov === i ? "#f5c518" : "rgba(250,243,224,0.7)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                marginBottom: "1.2rem",
                                clipPath: "polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,7px 100%,0 calc(100% - 7px))",
                                transition: "background 0.3s ease, color 0.3s ease",
                            }}>
                                {domainIcons[d.icon]}
                            </div>

                            <div style={{
                                fontSize: "0.92rem", fontWeight: 700, lineHeight: 1.32,
                                color: hov === i ? "#f5c518" : "#faf3e0",
                                marginBottom: "0.7rem",
                                transition: "color 0.25s ease",
                            }}>{d.name}</div>

                            <div style={{
                                fontSize: "0.82rem", lineHeight: 1.78, fontWeight: 300,
                                color: "rgba(250,243,224,0.48)",
                                maxHeight: hov === i ? "220px" : "0px",
                                overflow: "hidden", transition: "max-height 0.45s ease",
                            }}>{d.desc}</div>

                            <div className="ind-tile-num" style={{
                                color: hov === i ? "rgba(245,197,24,0.07)" : "rgba(250,243,224,0.04)",
                            }}>{String(i + 1).padStart(2, "0")}</div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    );
}