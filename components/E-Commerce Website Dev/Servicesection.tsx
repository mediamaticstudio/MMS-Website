"use client";
import { useEffect, useRef, useState } from "react";
import { Ruler, Puzzle, TrendingUp, MessageSquare, Clock, CheckCircle, Handshake } from "lucide-react";

const whyChoose = [
    {
        icon: Ruler, title: "Strategic Approach",
        desc: "Implement Intuitive Designs and Seamless Navigation to Provide a Superior Shopping Experience. Improve customer satisfaction and retention through a more user-friendly interface."
    },
    {
        icon: Puzzle, title: "Custom-Built Solutions",
        desc: "Creating a personalised experience for your clients is our top priority when developing eCommerce websites. We develop logically navigable interfaces that complement your brand."
    },
    {
        icon: TrendingUp, title: "Performance & Scalability",
        desc: "We have designed our eCommerce solutions to grow alongside you. Our systems are scalable to meet the increased traffic and volume of transactions as you continue to pursue new markets or a diverse range of products."
    },
    {
        icon: MessageSquare, title: "Transparent Communication",
        desc: "As your reliable e-commerce development partner, we offer continuous monitoring, maintenance, and technical support services. This entails security updates, performance monitoring, backup management, and the resolution of technical problems, thereby preventing downtime and guaranteeing a stable e-commerce platform. Browse through our comprehensive maintenance packages."
    },
    {
        icon: Clock, title: "Timely Completion",
        desc: "With the e-commerce web development services we offer, you can also enjoy several convenient features, such as currency support, language support, a shopping cart, and calculator facilities. It is even more convenient when you integrate a payment gateway system and shipping facility to ensure that the customers receive their orders safely and securely."
    },
];


export default function ServiceSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
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
                    <CheckCircle size={14} style={{ marginRight: "0.5rem", display: "inline-block", verticalAlign: "middle" }} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                        Our Commitment
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    fontWeight: 900, color: "#faf3e0",
                    marginBottom: "3rem", lineHeight: 1.15,
                }}>Why Choose Our E-Commerce Website Development Service?</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "2.5rem 3rem" }}>
                {whyChoose.map((item, i) => (
                    <div key={i} style={{
                        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)",
                        transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`,
                    }}>
                        <div style={{ fontSize: "1.9rem", marginBottom: "0.7rem", color: "#f5c518" }}>
                            {item.icon && <item.icon size={32} />}
                        </div>
                        <div style={{ width: "36px", height: "3px", background: "#f5c518", marginBottom: "0.8rem" }} />
                        <div style={{ fontSize: "1rem", fontWeight: 700, color: "#faf3e0", marginBottom: "0.5rem" }}>{item.title}</div>
                        <div style={{ fontSize: "0.9rem", lineHeight: 1.78, color: "rgba(250,243,224,0.58)", fontWeight: 300 }}>{item.desc}</div>
                    </div>
                ))}
            </div>

            {/* Inline CTA */}
            <div style={{
                marginTop: "4rem", background: "rgba(245,197,24,0.08)",
                border: "1px solid rgba(245,197,24,0.2)",
                padding: "2.5rem 3rem",
                display: "flex", alignItems: "center",
                justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem",
                opacity: vis ? 1 : 0, transition: "opacity 0.7s ease 0.6s",
            }}>
                <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 900, color: "#faf3e0" }}>
                        Ready to transform your business?
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(250,243,224,0.5)", marginTop: "0.3rem" }}>
                        Let's build a high-performance e-commerce store together.
                    </div>
                </div>
                <button style={{
                    background: "#f5c518", color: "#652b32", border: "none",
                    padding: "0.9rem 2.2rem", fontWeight: 800, fontSize: "0.9rem",
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    cursor: "pointer", fontFamily: "inherit", flexShrink: 0,
                    transition: "opacity 0.2s",
                    display: "flex", alignItems: "center", gap: "0.5rem"
                }}>
                    <Handshake size={18} />
                    Let's Collaborate
                </button>
            </div>
        </section>
    );
}