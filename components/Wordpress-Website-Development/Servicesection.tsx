"use client";
import { useEffect, useRef, useState } from "react";
import { 
    Target, 
    Users, 
    Smartphone, 
    Zap, 
    Wrench, 
    Ruler, 
    Puzzle, 
    BarChart, 
    MessageSquare, 
    MousePointer2, 
    Trophy, 
    CheckCircle 
} from "lucide-react";

function useVisible(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);
    return { ref, vis };
}

const standout = [
    {
        icon: Target, title: "Strategic, Business-Driven WordPress Solutions",
        desc: "Get easy access to highly scalable and performance-oriented CMS solutions developed exactly as you need them. We have a team of creative and expert developers ready to serve you the latest WordPress web design services."
    },
    {
        icon: Users, title: "Expert WordPress Website Design & Development Team",
        desc: "Take your development capabilities to the next level with MediaMatic. With our team of 650+ developers, we can help you create scalable and high-performing WordPress websites that cater to your precise needs."
    },
    {
        icon: Smartphone, title: "User-Centric UI/UX & Responsive Design",
        desc: "We guarantee that your website will look amazing on all screens with our responsive design service. We design websites that optimize for mobile devices, including tablets and desktops."
    },
    {
        icon: Zap, title: "High Performance, Speed & Scalability",
        desc: "Our team of developers uses content management systems (CMS) that help our clients add customized content to the website."
    },
    {
        icon: Wrench, title: "End-to-End WordPress Website Support & Maintenance",
        desc: "We provide full support and maintenance services irrespective of our WordPress website design and development services. We provide hourly packages and free-of-cost packages according to your project requirements."
    },
];

const whyChoose = [
    {
        icon: Ruler, title: "Strategic Approach",
        desc: "A professional web design company specializing in WordPress can assist you in leveraging the client-centric interface, cutting-edge features of customization, and beautiful design options offered by WordPress for your business needs and values."
    },
    {
        icon: Puzzle, title: "Custom-Built Solutions",
        desc: "Our success comes from the fact that we first understand your wants and goals before designing a website that meets your goals and differentiates itself from the rest of the world's websites."
    },
    {
        icon: BarChart, title: "Performance & Scalability",
        desc: "This platform is responsible for powering almost half of the websites globally, including big multinational companies. This audience includes both large multinational corporations and smaller businesses, like local businesses."
    },
    {
        icon: MessageSquare, title: "Transparent Communication",
        desc: "We will provide reliable support for your website going forward. Our experienced team of WordPress developers will be available and ready to assist you at the time you need your site up, so your site is continually consistent and running smoothly."
    },
    {
        icon: MousePointer2, title: "Ease of Use",
        desc: "It is straightforward to use, and the extremely user-friendly CMS platform allows you to customize your site without having to know any programming."
    },
];


export default function ServiceSection() {
    const s1 = useVisible();
    const s2 = useVisible();

    return (
        <>
            {/* STAND OUT */}
            <section style={{ background: "#652b32", padding: "5rem 6vw" }}>
                <div ref={s1.ref}>
                    <div style={{
                        opacity: s1.vis ? 1 : 0, transform: s1.vis ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}>
                        <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "0.8rem" }}>
                            <Trophy size={14} style={{ marginRight: "0.5rem", display: "inline-block", verticalAlign: "middle" }} />
                            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                                Why MediaMatic
                            </span>
                        </div>
                        <h2 style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                            fontWeight: 900, color: "#faf3e0",
                            marginBottom: "0.6rem", lineHeight: 1.15,
                        }}>How We Stand Out Among Other<br />WordPress Website Development Companies</h2>
                        <p style={{ fontSize: "0.97rem", color: "rgba(250,243,224,0.58)", maxWidth: "580px", lineHeight: 1.72, marginBottom: "3rem", fontWeight: 300 }}>
                            Our team at MediaMatic has lots of experience creating e-commerce sites, integrating APIs, building custom themes/plugins, etc. Our website development agencies provide comprehensive WordPress development services tailored to your specific business needs.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "2.5rem 3rem" }}>
                        {standout.map((item, i) => (
                            <div key={i} style={{
                                opacity: s1.vis ? 1 : 0, transform: s1.vis ? "translateY(0)" : "translateY(30px)",
                                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`,
                            }}>
                                <div style={{
                                    fontFamily: "'Playfair Display',serif", fontSize: "2.2rem", fontWeight: 900,
                                    color: "#f5c518", opacity: 0.22, lineHeight: 1, marginBottom: "0.3rem",
                                }}>0{i + 1}</div>
                                <div style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#f5c518" }}>
                                    <item.icon size={28} />
                                </div>
                                <div style={{ fontSize: "0.97rem", fontWeight: 700, color: "#faf3e0", marginBottom: "0.5rem" }}>{item.title}</div>
                                <div style={{ fontSize: "0.88rem", lineHeight: 1.72, color: "rgba(250,243,224,0.55)", fontWeight: 300 }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE */}
            <section style={{ background: "#faf3e0", padding: "5rem 6vw" }}>
                <div ref={s2.ref}>
                    <div style={{
                        opacity: s2.vis ? 1 : 0, transform: s2.vis ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}>
                        <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "0.8rem" }}>
                            <CheckCircle size={14} style={{ marginRight: "0.5rem", display: "inline-block", verticalAlign: "middle" }} />
                            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                                Our Commitment
                            </span>
                        </div>
                        <h2 style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                            fontWeight: 900, color: "#652b32",
                            marginBottom: "3rem", lineHeight: 1.15,
                        }}>Why Choose Our WordPress Website Development Service?</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "2.5rem 3rem" }}>
                        {whyChoose.map((item, i) => (
                            <div key={i} style={{
                                opacity: s2.vis ? 1 : 0, transform: s2.vis ? "translateY(0)" : "translateY(30px)",
                                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`,
                            }}>
                                <div style={{ fontSize: "1.8rem", marginBottom: "0.7rem", color: "#652b32" }}>
                                    <item.icon size={32} />
                                </div>
                                <div style={{ width: "36px", height: "3px", background: "#f5c518", marginBottom: "0.8rem" }} />
                                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#652b32", marginBottom: "0.5rem" }}>{item.title}</div>
                                <div style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "rgba(101,43,50,0.62)", fontWeight: 300 }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}