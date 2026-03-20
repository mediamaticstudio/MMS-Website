"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
    const words = ["Websites", "Mobile Apps", "eCommerce", "Web Apps"];
    const wordRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let i = 0;
        const el = wordRef.current;
        if (!el) return;
        const rotate = () => {
            el.style.opacity = "0";
            el.style.transform = "translateY(12px)";
            setTimeout(() => {
                i = (i + 1) % words.length;
                el.textContent = words[i];
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, 400);
        };
        const timer = setInterval(rotate, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section style={{
            background: "#652b32",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            padding: "7rem 6vw 5rem",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* Decorative circles */}
            <div style={{
                position: "absolute", top: "-80px", right: "-80px",
                width: "500px", height: "500px", borderRadius: "50%",
                border: "70px solid rgba(245,197,24,0.07)", pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: "-60px", left: "8%",
                width: "280px", height: "280px", borderRadius: "50%",
                border: "50px solid rgba(245,197,24,0.05)", pointerEvents: "none",
            }} />
            {/* Diagonal accent line */}
            <div style={{
                position: "absolute", top: 0, right: "25%",
                width: "2px", height: "100%",
                background: "rgba(245,197,24,0.08)", transform: "rotate(12deg)",
                transformOrigin: "top center", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "860px", position: "relative", zIndex: 1 }}>
                <div style={{
                    display: "inline-flex", alignItems: "center", gap: "0.5rem",
                    background: "rgba(245,197,24,0.12)", border: "1px solid rgba(245,197,24,0.3)",
                    padding: "0.4rem 1rem", marginBottom: "2rem",
                    animation: "fadeSlideDown 0.7s ease forwards",
                }}>
                    <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#f5c518", fontWeight: 700 }}>
                        🌐 Website Design & Development Company
                    </span>
                </div>

                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.8rem, 5.8vw, 5.2rem)",
                    fontWeight: 900, lineHeight: 1.08,
                    color: "#faf3e0", marginBottom: "1rem",
                    animation: "fadeSlideUp 0.8s ease 0.2s both",
                }}>
                    We Build Outstanding{" "}
                    <span
                        ref={wordRef}
                        style={{
                            color: "#f5c518",
                            display: "inline-block",
                            transition: "opacity 0.4s ease, transform 0.4s ease",
                        }}
                    >
                        Websites
                    </span>
                </h1>

                <p style={{
                    color: "rgba(250,243,224,0.72)", fontSize: "1.1rem",
                    lineHeight: 1.78, maxWidth: "620px",
                    marginBottom: "2.8rem", fontWeight: 300,
                    animation: "fadeSlideUp 0.8s ease 0.4s both",
                }}>
                    MediaMatic is a group of website design & development companies that plan and schedule their time to think ahead of the next big design shift for your digital brand development. We are a bunch of thinkers, experienced website designers, the best website developers, and techies who are always busy developing outstanding websites, mobile applications, and e-commerce websites. MediaMatic listens to you, adjusts to you, and collaborates with you to create your own unique website design and development.
                </p>

                <div style={{
                    display: "flex", gap: "1rem", flexWrap: "wrap",
                    animation: "fadeSlideUp 0.8s ease 0.6s both",
                }}>
                    <button style={{
                        background: "#f5c518", color: "#652b32",
                        border: "none", padding: "0.9rem 2.2rem",
                        fontWeight: 800, fontSize: "0.95rem",
                        letterSpacing: "0.05em", textTransform: "uppercase",
                        cursor: "pointer", fontFamily: "inherit",
                        transition: "transform 0.2s, opacity 0.2s",
                    }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >
                        🚀 Start Your Project
                    </button>

                </div>

                {/* Stats row */}
                <div style={{
                    display: "flex", gap: "3rem", marginTop: "4rem",
                    animation: "fadeSlideUp 0.8s ease 0.8s both",
                }}>
                    {[["150+", "Projects Delivered"], ["10+", "Years Experience"], ["50+", "Industries Served"]].map(([num, label]) => (
                        <div key={label}>
                            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 900, color: "#f5c518" }}>{num}</div>
                            <div style={{ fontSize: "0.8rem", color: "rgba(250,243,224,0.5)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes fadeSlideDown { from { opacity:0; transform:translateY(-16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeSlideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
        </section>
    );
}