"use client";
import { useEffect, useRef, useState } from "react";
import { Layers, Monitor, Cog, Palette, Layout, ShoppingCart, Atom, Settings } from "lucide-react";

const expertise = [
    { icon: Layers, title: "Full-Stack Development", desc: "Front-end design skill is combined with back-end database skills, as well as API skill sets that use DevOps, all within one integrated environment. Using contemporary stacks and experience, our bespoke web application development firm guarantees that each layer is designed for performance, scalability, and security." },
    { icon: Monitor, title: "Static Websites", desc: "We create professional static websites for small businesses and start-ups that are of top-notch quality and reliable. We create attractive and user-friendly websites. These web pages will amaze your website visitors and generate leads and money for your business. Not only do we create static websites, but we also create dynamic websites with CMS and other top-notch technologies." },
    { icon: Cog, title: "Dynamic Websites", desc: "Dynamic applications are suitable for many types of industries, including education, finance, and gaming. Users will benefit from a unique experience with each instance of access to dynamic applications due to the ability of dynamic applications to generate dynamic content at the time of use. Our applications are able to dynamically generate content." },
    { icon: Palette, title: "Custom Website Design", desc: "Get the benefits of personalized custom web application development services for your organization. Our web consultants use proven methodologies to create a tailored solution for you online." },
    { icon: Layout, title: "WordPress Development", desc: "MediaMatic creates custom WordPress sites and does not employ cookie-cutter themes. The website is consistent with your brand and functions as intended. We'll help you set up all the necessary security, simplify any upgrades that may arise, and provide continued assistance. Your website will expand as your business does." },
    { icon: ShoppingCart, title: "Ecommerce Development", desc: "We can help you create online marketplaces and eCommerce platforms that provide a better user experience and drive more sales. Our eCommerce solutions are not only secure, scalable, and maintainable but also offer features such as payment gateways and product recommendations." },
    { icon: Atom, title: "React Development", desc: "We are not just a company that develops React web applications; we create applications that are custom to your needs. Therefore, the web application needs to be very highly available, performant, and flexible. Our React development team works with your backend, DevOps, and design teams to ensure integration with your development workflow." },
];

export default function TechStackSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState<number | null>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "#652b32", padding: "5rem 6vw" }}>
            <div style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
                <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "1rem" }}>
                    <Settings size={14} style={{ marginRight: "0.5rem", display: "inline-block", verticalAlign: "middle" }} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                        What We Build
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 900, color: "#faf3e0",
                    marginBottom: "0.6rem", lineHeight: 1.15,
                }}>
                    Our Expertise in Website Design & Development
                </h2>
                <p style={{ fontSize: "0.97rem", color: "rgba(250,243,224,0.6)", maxWidth: "680px", lineHeight: 1.75, marginBottom: "3rem", fontWeight: 300 }}>
                    From strategy to discovery, mobile interface, and headless architecture, we fulfill all performance, security, and usability benchmarks. Hire our web app developers to suit user and global demands ranging from AI/ML to progressive web apps that are dynamic and responsive.
                </p>
            </div>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "2px",
                background: "rgba(245,197,24,0.12)",
            }}>
                {expertise.map((item, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                            background: hovered === i ? "rgba(245,197,24,0.1)" : "#652b32",
                            padding: "2.2rem 2rem",
                            border: "1px solid rgba(245,197,24,0.1)",
                            cursor: "default",
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(30px)",
                            transition: `background 0.25s ease, opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                        }}
                    >
                        <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem", color: "#f5c518" }}>
                            {item.icon && <item.icon size={32} />}
                        </div>
                        <div style={{
                            fontSize: "0.97rem", fontWeight: 700,
                            color: hovered === i ? "#f5c518" : "#faf3e0",
                            marginBottom: "0.6rem",
                            transition: "color 0.25s ease",
                        }}>
                            {item.title}
                        </div>
                        <div style={{ fontSize: "0.87rem", lineHeight: 1.72, color: "rgba(250,243,224,0.55)", fontWeight: 300 }}>
                            {item.desc}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}