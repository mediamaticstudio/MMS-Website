"use client";
import { useEffect, useRef, useState } from "react";
import { Target, Users, Smartphone, Zap, Wrench, Ruler, Puzzle, BarChart, MessageSquare, Clock, Trophy, CheckCircle } from "lucide-react";

const standout = [
    { icon: Target, title: "Strategic, Business-Driven Web Solutions", desc: "An effective website will allow your company to draw in potential clientele by providing it with a distinct advantage versus other firms, particularly those that operate in the same industry, which can help increase revenue." },
    { icon: Users, title: "Expert Website Design & Development Team", desc: "We are experts at bringing your web app idea to reality. Our skilled developers have the qualifications and knowledge to make it happen." },
    { icon: Smartphone, title: "User-Centric UI/UX & Responsive Design", desc: "Tailored web development services can assist organizations in creating distinctive designs that set them apart from the competition." },
    { icon: Zap, title: "High Performance, Speed & Scalability", desc: "When a web development agency creates a scalable website for your business, it will continue to grow with it. Developing a well-designed website will enable a business to operate more efficiently in terms of their processes and save them time and resources." },
    { icon: Wrench, title: "End-to-End Website Support & Maintenance", desc: "Because custom websites do not require expensive equipment or software, they are more cost-effective. It is a cost-effective choice for enterprises of any size." },
];

const whyChoose = [
    { icon: Ruler, title: "Strategic Approach", desc: "Using our best custom website design company enables businesses to optimize their work practices, cancel unneeded work patterns, and enhance how effective they are at operating as an enterprise." },
    { icon: Puzzle, title: "Custom-Built Solutions", desc: "You may give your users a more tailored experience based on their behavior, location, or preferences, which is frequently more difficult to accomplish with pre-made themes." },
    { icon: BarChart, title: "Performance & Scalability", desc: "The needs of businesses, and hence their applications, change as they grow. A custom web application can be developed with scalability in mind, allowing for growth in the future and accommodating changing business needs." },
    { icon: MessageSquare, title: "Transparent Communication", desc: "When we begin a website development project, we begin by protecting all of your information. We will not disclose any information about your website or web application development project to anyone without your permission." },
    { icon: Clock, title: "Timely Completion", desc: "We are an established website design agency that utilizes modern technology for developing quality internet applications on time." },
];


function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return (
        <div ref={ref} style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        }}>
            {children}
        </div>
    );
}

export default function ServiceSection() {
    return (
        <>
            {/* STAND OUT */}
            <section style={{ background: "#652b32", padding: "5rem 6vw" }}>
                <AnimatedSection>
                    <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "1rem" }}>
                        <Trophy size={14} style={{ marginRight: "0.5rem", display: "inline-block", verticalAlign: "middle" }} />
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                            Why MediaMatic
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                        fontWeight: 900, color: "#faf3e0",
                        marginBottom: "0.6rem", lineHeight: 1.15,
                    }}>
                        How We Stand Out Among Other<br />Website Development Companies
                    </h2>
                    <p style={{ fontSize: "0.97rem", color: "rgba(250,243,224,0.6)", maxWidth: "580px", lineHeight: 1.7, marginBottom: "3rem" }}>
                        MediaMatic listens to you, adjusts to you, and collaborates with you to create your own unique website design and development.
                    </p>
                </AnimatedSection>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem 3rem" }}>
                    {standout.map((item, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div>
                                <div style={{ fontWeight: 700, letterSpacing: "0.1em", color: "#f5c518", opacity: 0.4, marginBottom: "0.3rem", fontFamily: "'Playfair Display', serif", fontSize: "2.2rem" }}>
                                    0{i + 1}
                                </div>
                                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#f5c518" }}>
                                    {item.icon && <item.icon size={28} />}
                                </div>
                                <div style={{ fontSize: "0.97rem", fontWeight: 700, color: "#faf3e0", marginBottom: "0.5rem" }}>{item.title}</div>
                                <div style={{ fontSize: "0.88rem", lineHeight: 1.72, color: "rgba(250,243,224,0.55)", fontWeight: 300 }}>{item.desc}</div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE */}
            <section style={{ background: "#faf3e0", padding: "5rem 6vw" }}>
                <AnimatedSection>
                    <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "1rem" }}>
                        <CheckCircle size={14} style={{ marginRight: "0.5rem", display: "inline-block", verticalAlign: "middle" }} />
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                            Our Commitment
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                        fontWeight: 900, color: "#652b32",
                        marginBottom: "3rem", lineHeight: 1.15,
                    }}>
                        Why Choose Our Website Development Service?
                    </h2>
                </AnimatedSection>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "2.5rem 3rem" }}>
                    {whyChoose.map((item, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div>
                                <div style={{ fontSize: "1.8rem", marginBottom: "0.7rem", color: "#652b32" }}>
                                    {item.icon && <item.icon size={32} />}
                                </div>
                                <div style={{
                                    width: "36px", height: "3px", background: "#f5c518",
                                    marginBottom: "0.8rem",
                                }} />
                                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#652b32", marginBottom: "0.5rem" }}>{item.title}</div>
                                <div style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "rgba(101,43,50,0.62)", fontWeight: 300 }}>{item.desc}</div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
        </>
    );
}