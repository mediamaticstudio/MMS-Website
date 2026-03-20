"use client";
import { useEffect, useRef, useState } from "react";

const expertise = [
    { icon: "🎨", title: "React JS UI/UX Design & Development", desc: "Our team of React.js developers works hand-in-hand with UX/UI designers to define the look and feel of web and mobile applications, creating visually appealing user interfaces with user-friendly navigation for the best user experience." },
    { icon: "🧱", title: "Custom React JS Development", desc: "We use React.js's component-based architecture, flexibility, and integration capabilities to build high-performing applications that are fully aligned with your business needs and are built to deliver a fantastic user experience." },
    { icon: "🔄", title: "React JS Migration", desc: "The companies can easily migrate to this JavaScript React framework with the aid of our exclusive ReactJS web development services based on their existing infrastructure and requirements. Our team understands the intricacies of migrating to a new framework and can define processes to ensure the smooth and hurdle-free migration of the companies to the new ReactJS framework." },
    { icon: "🛒", title: "E-commerce Customisation", desc: "Our experienced team of ReactJS developers offers a complete package of services to many clients all over the world. We work with clients from various industries, such as eCommerce, finance, communication, healthcare, retail, education, and many more." },
    { icon: "🛠️", title: "React JS Support & Maintenance", desc: "We have certainly set the bar high in the market competition by offering efficient, flexible, and highly secured web applications. Our experts use advanced development methods and the necessary tools to deliver visually appealing UIs on time without any security breaches." },
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
                        🛠️ What We Build
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    fontWeight: 900, color: "#faf3e0",
                    marginBottom: "0.6rem", lineHeight: 1.15,
                }}>Our Expertise in React JS Website Design & Development</h2>
                <p style={{ fontSize: "0.95rem", color: "rgba(250,243,224,0.58)", maxWidth: "680px", lineHeight: 1.78, marginBottom: "3rem", fontWeight: 300 }}>
                    It is painless for businesses to develop interactive UIs with the help of our web application development company's expertise in high-end web app development solutions.
                </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "2px", background: "rgba(245,197,24,0.12)" }}>
                {expertise.map((item, i) => (
                    <div key={i}
                        onMouseEnter={() => setHov(i)}
                        onMouseLeave={() => setHov(null)}
                        style={{
                            background: hov === i ? "rgba(245,197,24,0.1)" : "#652b32",
                            padding: "2.2rem 2rem",
                            border: "1px solid rgba(245,197,24,0.1)",
                            opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)",
                            transition: `background 0.25s ease, opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                        }}>
                        <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{item.icon}</div>
                        <div style={{
                            fontSize: "0.97rem", fontWeight: 700,
                            color: hov === i ? "#f5c518" : "#faf3e0",
                            marginBottom: "0.6rem", transition: "color 0.25s ease",
                        }}>{item.title}</div>
                        <div style={{ fontSize: "0.87rem", lineHeight: 1.75, color: "rgba(250,243,224,0.55)", fontWeight: 300 }}>{item.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}