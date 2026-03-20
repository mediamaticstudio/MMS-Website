"use client";
import { useEffect, useRef, useState } from "react";

export default function CTASection() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);

    const anim = (d = 0) => ({
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${d}s, transform 0.7s ease ${d}s`,
    });

    return (
        <section ref={ref} style={{ background: "#faf3e0", padding: "5rem 6vw" }}>
            <div style={anim(0)}>
                <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "0.8rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                        💡 What We Do
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    fontWeight: 900, color: "#652b32",
                    marginBottom: "3rem", lineHeight: 1.15,
                }}>
                    What is WordPress Website Development?
                </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 0 }}>
                {[
                    {
                        icon: "📖", dark: false, title: "What is WordPress Website Development?",
                        body: "The days of HTML websites have been replaced by the age of WordPress websites. Now, companies prefer using the WordPress platform for creating websites, ranging from start-ups to giant companies. You can develop stunning websites with engaging user experiences that go beyond blogging. You can use the WordPress platform to develop your own e-commerce, entertainment, corporate, or other sort of website. You are free to design your website however you want."
                    },
                    {
                        icon: "📈", dark: true, title: "How WordPress Websites Work for Businesses",
                        body: "Are you seeking WordPress service providers to help you expand your business? At MediaMatic, we provide tailored WordPress development solutions that meet your needs and exceed your expectations. We provide e-commerce website creation, WordPress CMS development, and quality and testing services."
                    },
                ].map((item, i) => (
                    <div key={i} style={{
                        padding: "3rem", borderTop: "3px solid #f5c518",
                        background: item.dark ? "#652b32" : "#faf3e0",
                        ...anim(i * 0.18),
                    }}>
                        <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{item.icon}</div>
                        <h3 style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "1.22rem", fontWeight: 700,
                            color: item.dark ? "#faf3e0" : "#652b32",
                            marginBottom: "0.8rem", lineHeight: 1.3,
                        }}>{item.title}</h3>
                        <p style={{
                            fontSize: "0.93rem", lineHeight: 1.78, fontWeight: 300,
                            color: item.dark ? "rgba(250,243,224,0.65)" : "rgba(101,43,50,0.68)",
                        }}>{item.body}</p>
                    </div>
                ))}
            </div>

            {/* CTA bar */}
            <div style={{
                marginTop: "4rem", background: "#652b32",
                padding: "2.5rem 3rem",
                display: "flex", alignItems: "center",
                justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem",
                ...anim(0.5),
            }}>
                <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 900, color: "#faf3e0" }}>
                        Ready to build your WordPress website?
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(250,243,224,0.5)", marginTop: "0.3rem" }}>
                        Let's turn your vision into a high-performing WordPress site.
                    </div>
                </div>
                <button style={{
                    background: "#f5c518", color: "#652b32", border: "none",
                    padding: "0.9rem 2.2rem", fontWeight: 800, fontSize: "0.9rem",
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    cursor: "pointer", fontFamily: "inherit", flexShrink: 0,
                }}>🤝 Let's Collaborate</button>
            </div>
        </section>
    );
}