"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
    { icon: "🗺️", num: "01", title: "Planning", desc: "Our team is leaving no stone unturned to research the market and the audience to determine the best strategies to move forward with, such as their pains, needs, issues, solutions, etc. We carefully select the tech stack that best fits this project. Gradually, we integrate all these bits of information into a comprehensive project plan." },
    { icon: "🎨", num: "02", title: "Designing", desc: "Our designers work with our developers in our pursuit of designing interfaces that not only look beautiful but are also easy to use. Wireframes and prototypes are made to plan user navigation and ease of use. Thereafter, we work toward perfecting it by creating designs that represent your brand and meet all accessibility needs. During this process, we get constant feedback from you so that we can keep making improvements." },
    { icon: "💻", num: "03", title: "Development", desc: "This is where agile helps React developers. Agile helps us break our work into smaller sprints with clear goals and deliverables. We are able to produce high-quality work and make constant progress thanks to this iterative approach. Code reviews by team members and automated tests prevent errors and ensure everything works well and consistently." },
    { icon: "🔬", num: "04", title: "Testing", desc: "We help get your app ready for launch with our smooth and seamless CI/CD pipelines for releases and optimisation of loading speed and responsiveness. Our rigorous security scans and end tests help identify and eliminate vulnerabilities in your app." },
    { icon: "🚀", num: "05", title: "Launch and Support", desc: "We do not stop supporting and upgrading your app even after it is launched. We ensure that everything works well and that the app is stable through constant maintenance and monitoring, debugging, and more. We add more features depending on what people say and what your business needs. We adjust and change the app's architecture to suit more traffic as it grows." },
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
                }}>Our React JS Website Development Process</h2>
                <p style={{ fontSize: "0.95rem", color: "rgba(101,43,50,0.58)", maxWidth: "560px", lineHeight: 1.78, marginBottom: "4rem", fontWeight: 300 }}>
                    Our design process eliminates the guesswork associated with React JS website design and development. Here's how it works.
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
                        <div style={{ fontSize: "0.87rem", lineHeight: 1.75, color: "rgba(101,43,50,0.58)", fontWeight: 300 }}>{step.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}