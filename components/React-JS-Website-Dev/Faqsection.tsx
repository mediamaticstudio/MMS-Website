"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
    { q: "Why is ReactJS web development beneficial for businesses?", a: "The modular structure of the React library helps in the clear separation of concerns and makes the addition of features simple." },
    { q: "Do you offer custom React web development solutions?", a: "Yes. One of the reasons why we remain ahead of the competition is because of our custom React JS development services, which allow us to build a new web app or add new features to an existing web app." },
    { q: "Can you migrate my website to the ReactJS framework?", a: "Yes. We have assisted many clients in migrating to React and migrating from other stacks such as AngularJS, jQuery, and so forth." },
    { q: "Do you offer support and maintenance for ReactJS?", a: "Yes. We know what's at stake and meet enterprise security needs at every development stage." },
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
                        opacity: vis ? 1 : 0, transition: `opacity 0.6s ease ${i * 0.1}s`,
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
                            maxHeight: open === i ? "300px" : "0px",
                            transition: "max-height 0.4s ease",
                        }}>
                            <div style={{
                                fontSize: "0.93rem", lineHeight: 1.8,
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