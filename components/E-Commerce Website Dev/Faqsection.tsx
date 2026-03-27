"use client";
import { useEffect, useRef, useState } from "react";
import { HelpCircle, Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
    {
        q: "Why should I choose your company for developing my e-commerce website?",
        a: "MediaMatic is a leading Indian firm that specialises in building personalised, scalable, and user-friendly e-commerce sites."
    },
    {
        q: "Do you provide custom e-commerce website designs based on my brand's needs?",
        a: "Absolutely. From online portals to full-scale e-commerce systems, we offer customised services for e-commerce web development to match the specific demands of your company, from startups to major companies."
    },
    {
        q: "Can you build scalable e-commerce store platforms?",
        a: "Yes. Our e-commerce website design and development is mobile-first, created to satisfy Core Web Vitals, and structured with a clean information architecture and schema, making goods and categories simple to find—and quick to use."
    },
    {
        q: "Will my e-commerce website's design be mobile-friendly and SEO optimised?",
        a: "Yes, we provide services for building e-commerce websites that incorporate SEO and conversion optimisation to increase organic traffic and revenues."
    },
    {
        q: "Can you redesign or upgrade my existing e-commerce store?",
        a: "Yes, our eCommerce web design business specialises in seamless connectivity with your existing systems, such as ERP and CRM technologies, to ensure a smooth and effective process."
    },
    {
        q: "Do you provide ongoing support and maintenance after completion?",
        a: "Yes. We offer maintenance packages that cover security patches, performance monitoring, bug repairs, and the addition of new features over time. eCommerce stores aren't something you can launch and forget about, as things break, platforms push updates, and customers expect your site to keep improving."
    },
];

export default function FaqSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    const [open, setOpen] = useState<number | null>(null);

    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.06 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "#652b32", padding: "6rem 6vw", position: "relative", overflow: "hidden" }}>
            {/* Background pattern */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: `
                    linear-gradient(rgba(245,197,24,0.025) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(245,197,24,0.025) 1px, transparent 1px)
                `,
                backgroundSize: "52px 52px",
            }} />

            {/* Large watermark */}
            <div style={{
                position: "absolute", left: "4vw", bottom: "2rem",
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(6rem, 14vw, 12rem)",
                fontWeight: 900, fontStyle: "italic",
                color: "rgba(245,197,24,0.03)",
                lineHeight: 1,
                pointerEvents: "none", userSelect: "none",
            }}>FAQ</div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "5rem",
                alignItems: "start",
                position: "relative", zIndex: 1,
            }}>
                {/* Left column - sticky label */}
                <div style={{
                    opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(22px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                    position: "sticky", top: "6rem",
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.8rem" }}>
                        <div style={{ width: "3px", height: "18px", background: "#f5c518" }} />
                        <HelpCircle size={13} color="#f5c518" strokeWidth={2.5} />
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f5c518" }}>
                            FAQs
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "clamp(1.8rem,2.8vw,2.4rem)",
                        fontWeight: 900, color: "#faf3e0",
                        lineHeight: 1.12, marginBottom: "1.2rem",
                    }}>Frequently Asked Questions</h2>
                    <p style={{
                        fontSize: "0.88rem", color: "rgba(250,243,224,0.45)",
                        lineHeight: 1.82, fontWeight: 300,
                    }}>
                        Have questions about our e-commerce development services? We've answered the most common ones below.
                    </p>

                    {/* Decorative icon */}
                    <div style={{
                        marginTop: "2.5rem",
                        width: "56px", height: "56px",
                        background: "rgba(245,197,24,0.08)",
                        border: "1px solid rgba(245,197,24,0.16)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <MessageCircle size={24} color="#f5c518" strokeWidth={1.5} />
                    </div>
                </div>

                {/* Right column - accordion */}
                <div>
                    {faqs.map((item, i) => (
                        <div key={i} style={{
                            borderTop: "1px solid rgba(250,243,224,0.1)",
                            ...(i === faqs.length - 1 ? { borderBottom: "1px solid rgba(250,243,224,0.1)" } : {}),
                            opacity: vis ? 1 : 0,
                            transition: `opacity 0.6s ease ${i * 0.09}s`,
                            position: "relative",
                        }}>
                            {/* Active left border indicator */}
                            <div style={{
                                position: "absolute", left: 0, top: 0, bottom: 0,
                                width: "2px",
                                background: open === i ? "#f5c518" : "transparent",
                                transition: "background 0.3s ease",
                            }} />

                            <div
                                onClick={() => setOpen(open === i ? null : i)}
                                style={{
                                    display: "flex", justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "1.8rem 0 1.8rem 1.2rem",
                                    cursor: "pointer", gap: "1.2rem",
                                }}
                            >
                                <span style={{
                                    fontSize: "0.97rem", fontWeight: open === i ? 600 : 500,
                                    color: open === i ? "#faf3e0" : "rgba(250,243,224,0.75)",
                                    lineHeight: 1.45,
                                    transition: "color 0.3s ease, font-weight 0.3s ease",
                                }}>
                                    {item.q}
                                </span>
                                <div style={{
                                    width: "32px", height: "32px",
                                    flexShrink: 0,
                                    background: open === i ? "#f5c518" : "rgba(250,243,224,0.06)",
                                    border: `1px solid ${open === i ? "#f5c518" : "rgba(250,243,224,0.14)"}`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    transition: "background 0.3s ease, border-color 0.3s ease",
                                }}>
                                    {open === i
                                        ? <Minus size={14} color="#652b32" strokeWidth={2.5} />
                                        : <Plus size={14} color="#f5c518" strokeWidth={2.5} />
                                    }
                                </div>
                            </div>

                            <div style={{
                                overflow: "hidden",
                                maxHeight: open === i ? "320px" : "0px",
                                transition: "max-height 0.42s ease",
                            }}>
                                <div style={{
                                    fontSize: "0.9rem", lineHeight: 1.88,
                                    color: "rgba(250,243,224,0.55)",
                                    paddingBottom: "1.8rem",
                                    paddingLeft: "1.2rem",
                                    fontWeight: 300,
                                }}>{item.a}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}