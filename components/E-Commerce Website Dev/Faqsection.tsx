"use client";
import { useEffect, useRef, useState } from "react";

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
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "#652b32", padding: "5rem 6vw" }}>
            <div style={{
                opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(22px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
                <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "0.8rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                        ❓ FAQs
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    fontWeight: 900, color: "#faf3e0",
                    marginBottom: "3rem", lineHeight: 1.15,
                }}>Frequently Asked Questions</h2>
            </div>

            <div>
                {faqs.map((item, i) => (
                    <div key={i} style={{
                        borderTop: "1px solid rgba(250,243,224,0.12)",
                        ...(i === faqs.length - 1 ? { borderBottom: "1px solid rgba(250,243,224,0.12)" } : {}),
                        opacity: vis ? 1 : 0,
                        transition: `opacity 0.6s ease ${i * 0.09}s`,
                    }}>
                        <div onClick={() => setOpen(open === i ? null : i)} style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            padding: "1.5rem 0", cursor: "pointer", gap: "1rem",
                        }}>
                            <span style={{ fontSize: "1rem", fontWeight: 600, color: "#faf3e0", lineHeight: 1.4 }}>
                                {item.q}
                            </span>
                            <span style={{
                                width: "28px", height: "28px", flexShrink: 0,
                                background: open === i ? "rgba(250,243,224,0.15)" : "#f5c518",
                                color: open === i ? "#f5c518" : "#652b32",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "1.2rem", fontWeight: 700,
                                transform: open === i ? "rotate(45deg)" : "none",
                                transition: "transform 0.3s ease, background 0.3s ease, color 0.3s ease",
                            }}>+</span>
                        </div>
                        <div style={{
                            overflow: "hidden",
                            maxHeight: open === i ? "320px" : "0px",
                            transition: "max-height 0.4s ease",
                        }}>
                            <div style={{
                                fontSize: "0.93rem", lineHeight: 1.8,
                                color: "rgba(250,243,224,0.6)",
                                paddingBottom: "1.5rem", fontWeight: 300,
                            }}>{item.a}</div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}