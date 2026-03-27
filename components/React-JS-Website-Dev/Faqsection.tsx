"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
    { q: "Why is ReactJS web development beneficial for businesses?", a: "The modular structure of the React library helps in the clear separation of concerns and makes the addition of features simple." },
    { q: "Do you offer custom React web development solutions?", a: "Yes. One of the reasons why we remain ahead of the competition is because of our custom React JS development services, which allow us to build a new web app or add new features to an existing web app." },
    { q: "Can you migrate my website to the ReactJS framework?", a: "Yes. We have assisted many clients in migrating to React and migrating from other stacks such as AngularJS, jQuery, and so forth." },
    { q: "Do you offer support and maintenance for ReactJS?", a: "Yes. We know what's at stake and meet enterprise security needs at every development stage." },
];

export default function FaqSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    const [open, setOpen] = useState<number | null>(null);

    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .faq-item { border-top: 1px solid rgba(101,43,50,0.1); }
        .faq-item:last-child { border-bottom: 1px solid rgba(101,43,50,0.1); }

        .faq-trigger {
          display:flex; justify-content:space-between; align-items:center;
          padding:1.8rem 0.4rem 1.8rem 0; gap:1.5rem; cursor:pointer;
          transition:background 0.2s ease;
        }
        .faq-trigger:hover { background:rgba(101,43,50,0.025); }

        .faq-icon-wrap {
          width:36px; height:36px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          transition:background 0.3s ease, transform 0.4s ease;
          clip-path:polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,7px 100%,0 calc(100% - 7px));
        }

        .faq-answer-inner {
          font-size:0.92rem; line-height:1.88;
          color:rgba(101,43,50,0.58); font-weight:300;
          border-left:2px solid #f5c518; padding-left:1.4rem;
          padding-bottom:2rem; margin-left:2.6rem;
        }

        .faq-sidebar-btn {
          display:flex; align-items:center; justify-content:center; gap:0.6rem;
          background:#f5c518; color:#652b32;
          padding:0.9rem 1.6rem; font-size:0.75rem; font-weight:700;
          letter-spacing:0.13em; text-transform:uppercase;
          cursor:pointer; border:none; font-family:'DM Sans',sans-serif;
          clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));
          transition:transform 0.2s ease, box-shadow 0.2s ease;
        }
        .faq-sidebar-btn:hover { transform:translateY(-2px); box-shadow:0 10px 30px rgba(245,197,24,0.35); }
      `}</style>

            <section ref={ref} style={{
                background: "#faf3e0",
                padding: "7rem 6vw",
                fontFamily: "'DM Sans', sans-serif",
                position: "relative", overflow: "hidden",
            }}>

                {/* Dot grid */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(circle,rgba(101,43,50,0.065) 1px,transparent 1px)",
                    backgroundSize: "34px 34px",
                }} />

                <div style={{ position: "relative" }}>

                    {/* Header */}
                    <div style={{
                        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(26px)",
                        transition: "opacity 0.85s ease, transform 0.85s ease",
                        marginBottom: "4.5rem",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.1rem" }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round">
                                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#f5c518" }}>FAQs</span>
                            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,rgba(245,197,24,0.4),transparent)", maxWidth: "120px" }} />
                        </div>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                            fontWeight: 900, color: "#652b32",
                            lineHeight: 1.06, letterSpacing: "-0.02em",
                        }}>
                            Frequently Asked<br />
                            <span style={{ fontStyle: "italic", color: "rgba(101,43,50,0.6)", fontWeight: 700 }}>Questions</span>
                        </h2>
                    </div>

                    {/* Two-col layout */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr clamp(220px, 26%, 300px)", gap: "5rem", alignItems: "start" }}>

                        {/* FAQ list */}
                        <div>
                            {faqs.map((item, i) => (
                                <div key={i} className="faq-item" style={{
                                    opacity: vis ? 1 : 0,
                                    transition: `opacity 0.7s ease ${i * 0.1}s`,
                                }}>
                                    <div className="faq-trigger" onClick={() => setOpen(open === i ? null : i)}>
                                        <div style={{ display: "flex", gap: "1.1rem", alignItems: "flex-start" }}>
                                            <span style={{
                                                fontFamily: "'Playfair Display', serif", fontSize: "0.82rem", fontWeight: 700,
                                                color: open === i ? "#f5c518" : "rgba(101,43,50,0.22)",
                                                minWidth: "26px", paddingTop: "2px", transition: "color 0.25s",
                                            }}>0{i + 1}</span>
                                            <span style={{
                                                fontSize: "0.98rem", fontWeight: 600, lineHeight: 1.45,
                                                color: open === i ? "#652b32" : "rgba(101,43,50,0.78)",
                                                transition: "color 0.25s",
                                            }}>{item.q}</span>
                                        </div>

                                        <div className="faq-icon-wrap" style={{
                                            background: open === i ? "#652b32" : "#f5c518",
                                            transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                                        }}>
                                            {open === i ? (
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f5c518" strokeWidth="2.5" strokeLinecap="round">
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                </svg>
                                            ) : (
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#652b32" strokeWidth="2.5" strokeLinecap="round">
                                                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>

                                    <div style={{ overflow: "hidden", maxHeight: open === i ? "240px" : "0px", transition: "max-height 0.45s ease" }}>
                                        <div className="faq-answer-inner">{item.a}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sidebar card */}
                        <div style={{
                            opacity: vis ? 1 : 0, transition: "opacity 0.85s ease 0.45s",
                            position: "sticky", top: "8rem",
                        }}>
                            <div style={{
                                background: "#652b32",
                                padding: "2.8rem 2.4rem",
                                position: "relative", overflow: "hidden",
                                clipPath: "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,0 100%)",
                            }}>
                                {/* Accent line */}
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#f5c518" }} />

                                {/* Icon */}
                                <div style={{
                                    width: "48px", height: "48px",
                                    background: "rgba(245,197,24,0.1)", color: "#f5c518",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    marginBottom: "1.5rem",
                                    clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))",
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                </div>

                                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", fontWeight: 900, color: "#f5c518", lineHeight: 1, marginBottom: "0.3rem" }}>10+</div>
                                <div style={{ fontSize: "0.7rem", color: "rgba(250,243,224,0.38)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2rem" }}>Years of React Expertise</div>

                                <div style={{ width: "100%", height: "1px", background: "rgba(245,197,24,0.12)", marginBottom: "1.8rem" }} />

                                <div style={{ fontSize: "0.86rem", lineHeight: 1.78, color: "rgba(250,243,224,0.48)", fontWeight: 300, marginBottom: "2rem" }}>
                                    Still have questions? Our team is here to help you find the right solution.
                                </div>

                                <button className="faq-sidebar-btn">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                    Contact Us
                                </button>

                                {/* Ghost watermark */}
                                <div style={{
                                    position: "absolute", bottom: "-1.5rem", right: "-1rem",
                                    fontFamily: "'Playfair Display', serif", fontSize: "8rem", fontWeight: 900, lineHeight: 1,
                                    color: "rgba(245,197,24,0.04)", userSelect: "none", pointerEvents: "none",
                                }}>?</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}