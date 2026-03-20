"use client";
import { useEffect, useRef, useState } from "react";
import { Monitor, Palette, RefreshCw, ShoppingCart, Search, Settings } from "lucide-react";

const expertise = [
    {
        icon: Monitor, title: "WordPress Web Design & Development",
        desc: "Our professional WordPress developer helps brands create fully responsive and personalized websites based on their existing branding and needs. We create unique website layouts and add functionality with custom plugins to create responsive WordPress designs."
    },
    {
        icon: Palette, title: "Theme Customization",
        desc: "Our theme customization service takes your website design to the next level with a unique and professional design that meets your brand requirements. Experienced WordPress developers on our team are available to create custom themes that fit your goals."
    },
    {
        icon: RefreshCw, title: "WordPress Migration",
        desc: "We know that it can be challenging to use or update websites that were created using other technologies, such as static HTML or proprietary content management systems, which often lack the flexibility and user-friendliness of WordPress. We provide straightforward services for migrating to a new WordPress-based site without changing any of your data."
    },
    {
        icon: ShoppingCart, title: "Ecommerce Customization",
        desc: "Create highly functional and scalable e-commerce stores using our WordPress e-commerce development service. Our WordPress website agency assists brands in developing e-commerce stores that allow for the simple management of products and enhance the user experience so that bounce-back rates are reduced, ultimately leading to increased sales and customer retention."
    },
    {
        icon: Search, title: "WordPress SEO",
        desc: "All our WordPress development services go through the SEO checklist, which is a set of guidelines to ensure that the project is fully SEO (Search Engine Optimization) compatible and optimized. We use best practices in optimizing WordPress websites to improve their search engine optimization."
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
        <section ref={ref} style={{ background: "#652b32", padding: "5rem 6vw" }}>
            <div style={{
                opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
                <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "0.8rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                    <Settings size={14} style={{ marginRight: "0.5rem", display: "inline-block", verticalAlign: "middle" }} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                        What We Build
                    </span>
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    fontWeight: 900, color: "#faf3e0",
                    marginBottom: "0.6rem", lineHeight: 1.15,
                }}>Our Expertise in WordPress Website Design & Development</h2>
                <p style={{ fontSize: "0.97rem", color: "rgba(250,243,224,0.58)", maxWidth: "680px", lineHeight: 1.75, marginBottom: "3rem", fontWeight: 300 }}>
                    From strategy to discovery, mobile interface, and headless architecture, we fulfill all performance, security, and usability benchmarks for every WordPress project we undertake.
                </p>
            </div>

            <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: "2px", background: "rgba(245,197,24,0.12)",
            }}>
                {expertise.map((item, i) => (
                    <div key={i}
                        onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
                        style={{
                            background: hov === i ? "rgba(245,197,24,0.1)" : "#652b32",
                            padding: "2.2rem 2rem",
                            border: "1px solid rgba(245,197,24,0.1)",
                            opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)",
                            transition: `background 0.25s ease, opacity 0.6s ease ${i * 0.09}s, transform 0.6s ease ${i * 0.09}s`,
                        }}>
                        <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem", color: "#f5c518" }}>
                            <item.icon size={32} />
                        </div>
                        <div style={{
                            fontSize: "0.97rem", fontWeight: 700,
                            color: hov === i ? "#f5c518" : "#faf3e0",
                            marginBottom: "0.6rem", transition: "color 0.25s ease",
                        }}>{item.title}</div>
                        <div style={{ fontSize: "0.87rem", lineHeight: 1.72, color: "rgba(250,243,224,0.55)", fontWeight: 300 }}>{item.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}