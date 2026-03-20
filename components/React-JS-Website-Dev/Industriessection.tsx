"use client";
import { useEffect, useRef, useState } from "react";

const domains = [
    { icon: "🛍️", name: "Retail & E-Commerce", desc: "Our retail software development services can help enhance the shopping experience of customers through our commitment to UX/UI and high-performance front ends. We can help retail businesses, e-commerce businesses, and startups increase their digital presence with omnichannel platforms and online marketplaces that are easily accessible via the web and mobile devices." },
    { icon: "🎓", name: "Education & e-learning", desc: "We do thorough research and use the latest technology to develop online learning software. We are also providing digital learning tools for the classroom, online courses, and educational apps. The operational cost of our best ReactJS development company is flexible for different worldwide projects." },
    { icon: "☁️", name: "SaaS & Digital Platforms", desc: "We employ React to create intuitive dashboards, interactive reporting solutions, and responsive user interfaces. By focusing on TypeScript and modular code structures, we can provide speedier development solutions for your company." },
    { icon: "🏗️", name: "Construction & Estate", desc: "Some businesses use our services to engage ReactJS developers to create high-performance web applications that support their business processes. We have an experienced staff with extensive knowledge in developing applications such as buying and selling property, realtor apps, property listings, and so on." },
    { icon: "🚗", name: "Automotive", desc: "We revolutionise the management of inventories for transport companies, from warehouse planning to shipment tracking and distribution, with accurate and complete control of processes in real-time." },
    { icon: "🏥", name: "Healthcare & Pharmacy", desc: "We offer web and app development services for the healthcare industry. It offers quality assurance for the development of mobile apps like remote patient monitoring apps, e-prescription software, telemedicine software, electronic health records, etc. In addition to that, we offer support services to eliminate any difficulties in the software once it is live." },
    { icon: "✈️", name: "Tours & Travel", desc: "Our hospitality and travel software solutions help you optimise internal processes, which in turn results in a better experience for your guests." },
    { icon: "🏦", name: "Banking & Finance", desc: "We specialise in building solutions, such as corporate lending solutions, payment gateway solutions, and smart financial management solutions. Whether you are looking to explore the idea of creating a simple digital payment app or want to take your existing financial app to the next level, we are here to offer our FinTech software development and technical expertise." },
    { icon: "🎬", name: "Media & Entertainment", desc: "Developing UI-based applications with complex frameworks like React.js is excellent for your company and provides you with valuable resources that can help develop your business and grow as a result. We are a skilled React.js development company that offers scalable solutions in the entertainment sector. We design mobile applications to play games, music, short videos, social media, and much more." },
    { icon: "🏭", name: "Digital Manufacturing", desc: "We are a digital manufacturing company that has experience digitising various processes. First, we'll trace the movement of materials through your operation. Once completed, we will develop and design digital solutions for the flow of materials in your operation." },
];

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
        <section ref={ref} style={{ background: "#652b32", padding: "5rem 6vw" }}>
            <div style={{
                opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
                <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "0.8rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                        🌍 Industries
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    fontWeight: 900, color: "#faf3e0",
                    marginBottom: "3rem", lineHeight: 1.15,
                }}>Business Domains We Serve as a React JS Website Development Company</h2>
            </div>

            <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: "1px", background: "rgba(245,197,24,0.18)",
            }}>
                {domains.map((d, i) => (
                    <div key={i}
                        onMouseEnter={() => setHov(i)}
                        onMouseLeave={() => setHov(null)}
                        style={{
                            background: hov === i ? "rgba(245,197,24,0.12)" : "#652b32",
                            padding: "2rem 1.8rem", cursor: "default",
                            opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)",
                            transition: `background 0.25s ease, opacity 0.6s ease ${i * 0.06}s, transform 0.6s ease ${i * 0.06}s`,
                        }}>
                        <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{d.icon}</div>
                        <div style={{
                            fontSize: "0.97rem", fontWeight: 700,
                            color: hov === i ? "#f5c518" : "#faf3e0",
                            marginBottom: "0.5rem", transition: "color 0.25s ease",
                        }}>{d.name}</div>
                        <div style={{
                            fontSize: "0.83rem", lineHeight: 1.7,
                            color: "rgba(250,243,224,0.5)", fontWeight: 300,
                            maxHeight: hov === i ? "220px" : "0px",
                            overflow: "hidden", transition: "max-height 0.4s ease",
                        }}>{d.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}