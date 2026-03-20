"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
    {
        icon: "🗺️", num: "01", title: "Planning",
        desc: "By analyzing our client's requirements, we try to understand their needs, project scope, and other possibilities."
    },
    {
        icon: "🎨", num: "02", title: "Designing",
        desc: "The next step will involve our graphic/web designers starting the development of initial UI (user interface) design ideas, thus giving us an opportunity to assess the appearance of the UI. During the course of our WordPress website development, the client will have the chance to provide input concerning the design of the website."
    },
    {
        icon: "💻", num: "03", title: "Development",
        desc: "Once the UI design is complete, the development team for the web application will begin building out the back end of the website/application, which includes all of the features required by the client. At this point, the project manager will give the client an update on the overall status of the project, as well as provide an update on the status of the WordPress development service."
    },
    {
        icon: "🔬", num: "04", title: "Testing",
        desc: "Once the resource deployment phase is over, the Quality Assurance and testing teams can proceed with their detailed analysis and testing of both the front-end and back-end aspects from the perspective of WordPress development services. The subsequent step is that these teams would perform their detailed analysis of the front-end and back-end aspects."
    },
    {
        icon: "🚀", num: "05", title: "Launch and Support",
        desc: "Once the client approves the results of our team's testing and verification, we deploy the application to the server."
    },
];

export default function ProcessSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
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
                        🔄 How It Works
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    fontWeight: 900, color: "#652b32",
                    marginBottom: "0.6rem", lineHeight: 1.15,
                }}>Our WordPress Website Development Process</h2>
                <p style={{ fontSize: "0.97rem", color: "rgba(101,43,50,0.6)", maxWidth: "560px", lineHeight: 1.75, marginBottom: "4rem", fontWeight: 300 }}>
                    Our design process eliminates the guesswork associated with WordPress website design and development. Here's how it works.
                </p>
            </div>

            {/* Horizontal timeline */}
            <div style={{ display: "flex", gap: 0, overflowX: "auto", paddingBottom: "1rem" }}>
                {steps.map((step, i) => (
                    <div key={i} style={{
                        flex: "1 1 200px", minWidth: "200px",
                        borderTop: "3px solid #f5c518",
                        paddingTop: "2rem", paddingRight: "2rem", paddingBottom: "1rem",
                        position: "relative",
                        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)",
                        transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`,
                    }}>
                        <div style={{
                            position: "absolute", top: "-9px", left: 0,
                            width: "15px", height: "15px",
                            background: "#f5c518", borderRadius: "50%",
                        }} />
                        <div style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "2.8rem", fontWeight: 900,
                            color: "#652b32", opacity: 0.1, lineHeight: 1, marginBottom: "0.2rem",
                        }}>{step.num}</div>
                        <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{step.icon}</div>
                        <div style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "1.1rem", fontWeight: 700,
                            color: "#652b32", marginBottom: "0.6rem",
                        }}>{step.title}</div>
                        <div style={{ fontSize: "0.87rem", lineHeight: 1.72, color: "rgba(101,43,50,0.6)", fontWeight: 300 }}>{step.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}