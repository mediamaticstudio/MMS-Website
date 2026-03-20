"use client";
import { useEffect, useRef, useState } from "react";

function useVisible() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);
    return { ref, vis };
}

const standout = [
    { icon: "🎯", title: "Strategic, Business-Driven Framework Solutions", desc: "The unmatched flexibility and excellent features of React JS help the developers to provide the client with a customised app or website. Besides this, our developers are able to understand your business needs effectively to provide you with a world-class product. We have developed many social media apps, web pages, SPAs, etc." },
    { icon: "👨‍💻", title: "Expert React JS Website Design & Development Team", desc: "Our React web development agency's developers are proficient in various technologies and frameworks. Our developers are competent front-end developers and back-end developers. Hence, they provide good user interfaces with good features and functions." },
    { icon: "📱", title: "User-Centric UI/UX & Responsive Design", desc: "Having an impressive website can increase the chances of more traffic to the app up to double. The interactive UI can help in attracting more customers, and React JS can help in developing attractive and customised UI, which is also SEO-friendly. One can hire React.js app developers to increase traffic using an attractive UI." },
    { icon: "⚡", title: "High Performance, Speed & Scalability", desc: "We are one of the best companies with the ideology of delivering quality in a short span, and for the same, our ReactJS developers follow the Agile method of development. Thus, delivering high performance becomes easy, and clients can be sure of the success of their web or app." },
    { icon: "🔧", title: "End-to-End React JS Website Support & Maintenance", desc: "Maintenance & support are the significant services offered by us in web development using React JS. You own the code, and we maintain and support your product after development. It ensures that the product we developed is working properly or not. If not, then we will solve all the bugs in it." },
];

const whyChoose = [
    { icon: "📐", title: "Strategic Approach", desc: "With years of work using React, we have learned and adopted best practices to deliver projects more efficiently. What is more, we are constantly improving our solutions, and we have learned to develop our own tricks to automate React development." },
    { icon: "🧩", title: "Custom-Built Solutions", desc: "Thanks to our expertise, we are able to foresee all the potential problems that may occur in a given industry and tackle them before they get into our development process." },
    { icon: "📊", title: "Performance & Scalability", desc: "You get a fast and responsive UI even with high user interactions and data volume. Most small and mid-size React web applications work fine without special configuration." },
    { icon: "💬", title: "Transparent Communication", desc: "We understand how important your app or website is to you. Hence, we provide you with the actual details of the development process of the product." },
    { icon: "⏱️", title: "Timely Completion", desc: "We are following agile methodology to provide you a quality product within time so that you can start your business sooner." },
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
                            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                                🏆 Why MediaMatic
                            </span>
                        </div>
                        <h2 style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                            fontWeight: 900, color: "#faf3e0",
                            marginBottom: "0.6rem", lineHeight: 1.15,
                        }}>How We Stand Out Among Other<br />React Website Development Companies</h2>
                        <p style={{ fontSize: "0.95rem", color: "rgba(250,243,224,0.56)", maxWidth: "580px", lineHeight: 1.75, marginBottom: "3rem", fontWeight: 300 }}>
                            We have a diversified area of development and offer various ReactJS development services. Find these services in the space below.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "2.5rem 3rem" }}>
                        {standout.map((item, i) => (
                            <div key={i} style={{
                                opacity: s1.vis ? 1 : 0, transform: s1.vis ? "translateY(0)" : "translateY(32px)",
                                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`,
                            }}>
                                <div style={{
                                    fontFamily: "'Playfair Display',serif", fontSize: "2.2rem", fontWeight: 900,
                                    color: "#f5c518", opacity: 0.2, lineHeight: 1, marginBottom: "0.3rem",
                                }}>0{i + 1}</div>
                                <div style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                                <div style={{ fontSize: "0.97rem", fontWeight: 700, color: "#faf3e0", marginBottom: "0.5rem" }}>{item.title}</div>
                                <div style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(250,243,224,0.55)", fontWeight: 300 }}>{item.desc}</div>
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
                            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                                ✅ Our Commitment
                            </span>
                        </div>
                        <h2 style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                            fontWeight: 900, color: "#652b32",
                            marginBottom: "3rem", lineHeight: 1.15,
                        }}>Why Choose Our React Framework Website Development Service?</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: "2.5rem 3rem" }}>
                        {whyChoose.map((item, i) => (
                            <div key={i} style={{
                                opacity: s2.vis ? 1 : 0, transform: s2.vis ? "translateY(0)" : "translateY(32px)",
                                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`,
                            }}>
                                <div style={{ fontSize: "1.8rem", marginBottom: "0.7rem" }}>{item.icon}</div>
                                <div style={{ width: "36px", height: "3px", background: "#f5c518", marginBottom: "0.8rem" }} />
                                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#652b32", marginBottom: "0.5rem" }}>{item.title}</div>
                                <div style={{ fontSize: "0.9rem", lineHeight: 1.78, color: "rgba(101,43,50,0.62)", fontWeight: 300 }}>{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}