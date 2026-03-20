"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
    {
        q: "Why should I choose WordPress for my website?",
        a: "WordPress helps in website design, theme development, plugin development, website maintenance, and optimization. We guarantee that your WordPress website is not only functional but also adapted to your specific business needs."
    },
    {
        q: "How long does it take to develop a WordPress website?",
        a: "The time required to develop a WordPress website depends upon the complexity level of the project. The development time required for creating a WordPress website could range from 2 to 4 weeks if the project is small, such as creating a business website. However, if the project is complex, such as creating an e-commerce website, then the development time could range from 6 to 8 weeks."
    },
    {
        q: "Can you customize a WordPress theme according to my brand?",
        a: "Yes. For completely unique branding and functionality, we design custom WordPress themes from scratch. We can tailor premium WordPress themes to your needs for quick turnaround times and affordable options."
    },
    {
        q: "Will my WordPress website be SEO-friendly?",
        a: "Absolutely. We follow best practices such as optimized images, minimal plugins, caching, CDN integration, and lightweight coding to ensure rapid loading times and improved Core Web Vitals."
    },
    {
        q: "Do you build custom WordPress plugins and features?",
        a: "Yes. Depending on your business needs, we can develop custom plugins or integrate features such as booking systems (tools that allow users to schedule appointments), payment gateways (services that process online payments), membership areas (sections of a website restricted to registered users), CRMs (customer relationship management systems that help manage interactions with customers), and more."
    },
    {
        q: "Can you migrate my existing website to WordPress?",
        a: "Yes, we do offer seamless WordPress migration services, which allow you to migrate your website from another platform. We guarantee the preservation of all your data throughout the migration process."
    },
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
        <section ref={ref} style={{ background: "#faf3e0", padding: "5rem 6vw" }}>
            <div style={{
                opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
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
                    fontWeight: 900, color: "#652b32",
                    marginBottom: "3rem", lineHeight: 1.15,
                }}>Frequently Asked Questions</h2>
            </div>

            <div>
                {faqs.map((item, i) => (
                    <div key={i} style={{
                        borderTop: "1px solid rgba(101,43,50,0.15)",
                        ...(i === faqs.length - 1 ? { borderBottom: "1px solid rgba(101,43,50,0.15)" } : {}),
                        opacity: vis ? 1 : 0, transition: `opacity 0.6s ease ${i * 0.08}s`,
                    }}>
                        <div onClick={() => setOpen(open === i ? null : i)} style={{
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            padding: "1.5rem 0", cursor: "pointer", gap: "1rem",
                        }}>
                            <span style={{ fontSize: "1rem", fontWeight: 600, color: "#652b32", lineHeight: 1.4 }}>{item.q}</span>
                            <span style={{
                                width: "28px", height: "28px", flexShrink: 0,
                                background: open === i ? "#652b32" : "#f5c518",
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
                                fontSize: "0.93rem", lineHeight: 1.78,
                                color: "rgba(101,43,50,0.62)",
                                paddingBottom: "1.5rem", fontWeight: 300,
                            }}>{item.a}</div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}