"use client";
import { useEffect, useRef, useState } from "react";

const domains = [
    {
        icon: "🛍️", name: "Retail & E-Commerce",
        desc: "We develop next-gen, feature-rich, and scalable eCommerce solutions to empower B2B and B2C businesses, effectively reach their customers, and grow their sales figures."
    },
    {
        icon: "🎓", name: "Education & e-learning",
        desc: "Our eLearning solution provides a seamless learning experience for both educators and learners. We can help you overcome your education and eLearning software needs by delivering courses and training programs for your learners using our learning management system (LMS)."
    },
    {
        icon: "☁️", name: "SaaS & Digital Platforms",
        desc: "As a top SaaS marketing agency, we can assist you in bringing in new customers for your SaaS company with a comprehensive plan based on a Monthly Recurring Revenue (MRR) strategy."
    },
    {
        icon: "🏭", name: "Manufacturing",
        desc: "Find out more about how you can boost your manufacturing company's brand value with the help of digital marketing through MediaMatic—one of India's premier industrial marketing agencies. We help manufacturing companies increase their online visibility within their industry and grow their business, resulting in higher customer engagement and increased sales through targeted digital marketing strategies."
    },
    {
        icon: "🏗️", name: "Construction & Development",
        desc: "MediaMatic offers a full-cycle solution to construction and real estate professionals needing cost-effective methods of accomplishing their objectives. Our dedicated staff uses the latest technology and creativity to design and develop web, mobile, and software-based applications that will satisfy our clients' needs."
    },
    {
        icon: "🚗", name: "Automotive & Transportation",
        desc: "We are an automotive-based marketing agency, and so we understand the requirements of successfully doing business in the automotive world. Our experience provides us with the know-how to develop custom-designed web and mobile applications that offer real value to the businesses we work with."
    },
    {
        icon: "🏥", name: "Healthcare & Pharmacy",
        desc: "Transition into digital healthcare and achieve success with the help of our sophisticated software development services. We design software for web, mobile, and medical devices to provide the foundation for next-gen healthcare technologies, including telemedicine platforms, electronic health records, and patient management systems."
    },
    {
        icon: "✈️", name: "Tours & Travel",
        desc: "Enjoy top-notch travel app development solutions that meet your exact needs with our expert teams. At our company, we believe in delivering a fantastic user experience and feature-rich solutions for tours and travel software."
    },
    {
        icon: "🏦", name: "Banking & Finance",
        desc: "Take your banking and finance operations to the next level with state-of-the-art software solutions designed to deliver efficiency and cost-effectiveness while ensuring compliance. At MediaMatic, we provide robust and secure software development services to meet your business needs."
    },
    {
        icon: "🎬", name: "Media & Entertainment",
        desc: "From OTT (over-the-top) platforms to digital SCM, ERP/CRM, and entertainment solutions, we provide end-to-end app development services to startups as well as organizations looking to expand globally. Develop applications that provide content as well as interesting platforms to engage the audience."
    },
];

export default function IndustriesSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    const [hov, setHov] = useState<number | null>(null);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);

    return (
        <section ref={ref} style={{ background: "#652b32", padding: "5rem 6vw" }}>
            <div style={{
                opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
                <div style={{ borderLeft: "3px solid #f5c518", paddingLeft: "1rem", marginBottom: "0.8rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5c518" }}>
                        🌍 Industries
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    fontWeight: 900, color: "#faf3e0",
                    marginBottom: "3rem", lineHeight: 1.15,
                }}>Business Domains We Serve as a WordPress Website Development Company</h2>
            </div>

            <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: "1px", background: "rgba(245,197,24,0.18)",
            }}>
                {domains.map((d, i) => (
                    <div key={i}
                        onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
                        style={{
                            background: hov === i ? "rgba(245,197,24,0.12)" : "#652b32",
                            padding: "2rem 1.8rem", cursor: "default",
                            opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)",
                            transition: `background 0.25s ease, opacity 0.6s ease ${i * 0.06}s, transform 0.6s ease ${i * 0.06}s`,
                        }}>
                        <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{d.icon}</div>
                        <div style={{
                            fontSize: "0.97rem", fontWeight: 700,
                            color: hov === i ? "#f5c518" : "#faf3e0",
                            marginBottom: "0.5rem", transition: "color 0.25s ease",
                        }}>{d.name}</div>
                        <div style={{
                            fontSize: "0.83rem", lineHeight: 1.68,
                            color: "rgba(250,243,224,0.5)", fontWeight: 300,
                            maxHeight: hov === i ? "200px" : "0px",
                            overflow: "hidden",
                            transition: "max-height 0.4s ease",
                        }}>{d.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}