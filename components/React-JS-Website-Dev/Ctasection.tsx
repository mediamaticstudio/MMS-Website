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

    const a = (d = 0) => ({
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${d}s, transform 0.7s ease ${d}s`,
    });

    return (
        <section ref={ref} style={{ background: "#faf3e0", padding: "5rem 6vw" }}>
            <div style={a(0)}>
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
                    React.js Framework Development
                </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 0 }}>
                {[
                    {
                        icon: "📚", dark: false,
                        title: "What is React.js framework development?",
                        body: "ReactJS is not a programming language; it is a library. It supports architectural features through its extensions, and therefore, it is the best front-end framework available today, particularly because of its component-based architecture, virtual DOM for performance optimisation, and strong community support.",
                    },
                    {
                        icon: "🏆", dark: true,
                        title: "Why Choose the React JS Framework for Your Website?",
                        body: "For creating simple and rapid interactive web applications, businesses can rely completely on the potential of this framework. You can use it for delivering the best ReactJS development services to users of your applications. Our company is the best ReactJS web development company because we have efficient developers who can develop dynamic web applications with less coding. We will create an excellent product and keep your business ideas safe!",
                    },
                ].map((item, i) => (
                    <div key={i} style={{
                        padding: "3rem",
                        borderTop: "3px solid #f5c518",
                        background: item.dark ? "#652b32" : "#faf3e0",
                        ...a(i * 0.18),
                    }}>
                        <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{item.icon}</div>
                        <h3 style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "1.22rem", fontWeight: 700,
                            color: item.dark ? "#faf3e0" : "#652b32",
                            marginBottom: "0.8rem", lineHeight: 1.3,
                        }}>{item.title}</h3>
                        <p style={{
                            fontSize: "0.93rem", lineHeight: 1.8, fontWeight: 300,
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
                ...a(0.5),
            }}>
                <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 900, color: "#faf3e0" }}>
                        Ready to build your React JS application?
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(250,243,224,0.5)", marginTop: "0.3rem" }}>
                        Let's turn your vision into a high-performing React product.
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