"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
    { icon: "🗺️", num: "01", title: "Planning", desc: "We develop the sitemap, navigation, user flows, conversion paths, URL structure, and content strategy to ensure that your site meets your users' intent and performs effectively in search." },
    { icon: "🎨", num: "02", title: "Designing", desc: "Before any design work begins, wireframes are presented for each page. Once we've agreed on a structure, our team creates desktop and mobile-responsive designs. Every decision is driven by your brand and the user experience." },
    { icon: "💻", num: "03", title: "Development", desc: "Our web development business creates websites that load quickly and function properly on all devices. We'll take care of your CMS's technical side by integrating technology & products your company uses, so you won't have any headaches when integrating it into your existing system." },
    { icon: "🔬", num: "04", title: "Testing", desc: "We test your website across all browsers and devices. We test accessibility, load speed, and security, as well as every feature on every page. If we find anything wrong, we will fix it prior to launching it." },
    { icon: "🚀", num: "05", title: "Launch and Support", desc: "When your new website becomes online, we will show your team how to use the CMS and configure your analytics. We also do not disappear after launch. We are constantly upgrading your site as real traffic arrives and we see how people use it." },
];

export default function ProcessSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "#faf3e0", padding: "5rem 6vw" }}>
            <div style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
                <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                        🔄 How It Works
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 900, color: "#652b32",
                    marginBottom: "0.6rem", lineHeight: 1.15,
                }}>
                    Our Website Development Process
                </h2>
                <p style={{ fontSize: "0.97rem", color: "rgba(101,43,50,0.62)", maxWidth: "560px", lineHeight: 1.75, marginBottom: "4rem", fontWeight: 300 }}>
                    Our design process eliminates the guesswork associated with website design and development. Here's how it works.
                </p>
            </div>

            {/* Horizontal step row */}
            <div style={{ display: "flex", gap: "0", overflowX: "auto" }}>
                {steps.map((step, i) => (
                    <div key={i} style={{
                        flex: "1 1 200px",
                        minWidth: "200px",
                        borderTop: "3px solid #f5c518",
                        paddingTop: "2rem",
                        paddingRight: "2rem",
                        paddingBottom: "1rem",
                        position: "relative",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(30px)",
                        transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                    }}>
                        {/* Step dot on timeline */}
                        <div style={{
                            position: "absolute", top: "-9px", left: 0,
                            width: "15px", height: "15px",
                            background: "#f5c518", borderRadius: "50%",
                        }} />
                        <div style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "2.8rem", fontWeight: 900,
                            color: "#652b32", opacity: 0.1, lineHeight: 1,
                            marginBottom: "0.2rem",
                        }}>
                            {step.num}
                        </div>
                        <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{step.icon}</div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#652b32", marginBottom: "0.6rem" }}>
                            {step.title}
                        </div>
                        <div style={{ fontSize: "0.87rem", lineHeight: 1.72, color: "rgba(101,43,50,0.6)", fontWeight: 300 }}>
                            {step.desc}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}