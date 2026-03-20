"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
    { q: "How long does it take to build a website?", a: "The time it takes to develop a web application varies based on the project's complexity, desired features, and team size. Simple software can take 3-4 months to complete, whereas more complicated applications can take 6-12 months or longer." },
    { q: "Will my website be mobile-friendly and responsive?", a: "Yes! All websites will be designed and built so they work great when viewed using screens that are no more than 2 inches wide!" },
    { q: "Can you redesign my existing website?", a: "Absolutely. We offer legacy system modernization, performance optimization, and redesign services to help your application meet modern user experience (UX) and user interface (UI) standards, as well as current technology stacks." },
    { q: "Do you provide SEO services with website development?", a: "We will develop your website using the finest SEO strategies to enhance its visibility and rating on the SERPs." },
    { q: "Do you offer website maintenance and support after launch?", a: "Yes, we offer continuing support and maintenance services such as regular updates, performance monitoring, bug fixes, and feature additions to guarantee that your web application continues to run well and meets changing business requirements." },
    { q: "Can you build custom features based on my business needs?", a: "Every business is unique, as are its expectations. Exact control, innovative scalability, and cost-effective tailored solutions will provide complete security for your company's objectives and processes. A web app supplier can help you build a solution that is scalable and current, as well as meet the requirements of your organization." },
];

export default function FaqSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState<number | null>(null);

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
                        ❓ FAQs
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 900, color: "#652b32",
                    marginBottom: "3rem", lineHeight: 1.15,
                }}>
                    Frequently Asked Questions
                </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {faqs.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            borderTop: "1px solid rgba(101,43,50,0.15)",
                            ...(i === faqs.length - 1 ? { borderBottom: "1px solid rgba(101,43,50,0.15)" } : {}),
                            opacity: visible ? 1 : 0,
                            transition: `opacity 0.6s ease ${i * 0.08}s`,
                        }}
                    >
                        <div
                            onClick={() => setOpen(open === i ? null : i)}
                            style={{
                                display: "flex", justifyContent: "space-between", alignItems: "center",
                                padding: "1.5rem 0",
                                cursor: "pointer",
                                gap: "1rem",
                            }}
                        >
                            <span style={{ fontSize: "1rem", fontWeight: 600, color: "#652b32", lineHeight: 1.4 }}>
                                {item.q}
                            </span>
                            <span style={{
                                width: "28px", height: "28px", flexShrink: 0,
                                background: open === i ? "#652b32" : "#f5c518",
                                color: open === i ? "#f5c518" : "#652b32",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "1.2rem", fontWeight: 700,
                                transform: open === i ? "rotate(45deg)" : "none",
                                transition: "transform 0.3s ease, background 0.3s ease, color 0.3s ease",
                            }}>
                                +
                            </span>
                        </div>

                        <div style={{
                            overflow: "hidden",
                            maxHeight: open === i ? "300px" : "0px",
                            transition: "max-height 0.4s ease",
                        }}>
                            <div style={{
                                fontSize: "0.93rem", lineHeight: 1.78,
                                color: "rgba(101,43,50,0.62)",
                                paddingBottom: "1.5rem",
                                fontWeight: 300,
                            }}>
                                {item.a}
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}