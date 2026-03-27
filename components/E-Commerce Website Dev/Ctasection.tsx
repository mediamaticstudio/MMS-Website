"use client";
import { useEffect, useRef, useState } from "react";
import {
    Lightbulb, Globe, Building2, Zap, Mic, Shirt, Cpu, Glasses,
    Package, Users, BarChart3, Truck, Store, Monitor,
    ArrowRight,
} from "lucide-react";

const technologies = [
    {
        icon: Zap, title: "AI-Driven Shopping Experience",
        desc: "With the optimisation of pricing strategies, the automation of customer service, and the personalisation of recommendations, AI is transforming e-commerce businesses. Organisations are able to forecast trends, manage inventory, and create more intelligent shopping experiences through the use of machine learning and analytics."
    },
    {
        icon: Mic, title: "Voice-Enabled Product Search",
        desc: "Provide the ability to have seamless, hands-free shopping experiences through voice commands, which would enhance the convenience and accessibility of the shopping experience."
    },
    {
        icon: Shirt, title: "Digital Fitting Experience",
        desc: "Our in-house developers build the features your shoppers and teams need—product configurators, B2B options, custom checkout, and merchandising tools that make buying (and managing) easier."
    },
    {
        icon: Cpu, title: "IoT-Enabled Smart Connectivity",
        desc: "For online businesses, we offer a networked system via IoT. We enable sensors, devices, and logistics to smoothly connect to your network. This way, we help you leverage its potential to the maximum. With intelligent automation, you can process transactions faster, both B2B and B2C."
    },
    {
        icon: Glasses, title: "eCommerce Solutions for AR & VR",
        desc: "Build trust among your clients on a higher level. Boost your conversion rates and customer loyalty by leveraging connections between AR & VR to allow your customers to interact with your products virtually."
    },
];

const integrations = [
    {
        icon: Package, title: "ERP & Inventory Management Systems",
        desc: "The key to building effective online stores is to provide a seamless shopping experience. We incorporate essential tools to provide an effective shopping experience, enhancing our emphasis on intuitive shopping and an effortless checkout process."
    },
    {
        icon: Users, title: "CRM & Marketing Automation Platforms",
        desc: "We build our CRM solutions to provide businesses with valuable insights about customers, enabling them to provide personalised shopping experiences. We build the solutions to optimise sales campaigns and enhance pipeline management, thereby fostering better customer relations."
    },
    {
        icon: BarChart3, title: "Data Analytics and Business Intelligence",
        desc: "Our analytics and business intelligence solutions enable e-commerce businesses to effectively analyse vital data, which helps them identify key trends associated with their sales. This is crucial in helping businesses identify growth opportunities while enhancing operational efficiencies."
    },
    {
        icon: Truck, title: "Logistics & Shipping API Integrations",
        desc: "We specialised in developing custom logistics software to help you manage your online business more efficiently. Our focus is on delivering the best routes, real-time tracking, and efficient generation of invoices."
    },
    {
        icon: Store, title: "Marketplaces & Multi-Channel Sales Platforms",
        desc: "Our model for building marketplaces revolves around the development of a space that is dynamic, allowing vendors and customers to effectively interact. We have included specific dashboards for the market, catering to a wide range of market players, making it profitable for them."
    },
    {
        icon: Monitor, title: "POS & In-Store System Integrations",
        desc: "Achieve full control of your sales channels with a unified eCommerce POS system integration to eliminate errors resulting from manual processes and improve overall business performance. We design our point-of-sales solutions to adapt to today's retail environment. We design our point-of-sales solutions to be flexible enough to support all forms of payment and to manage sales workflow comprehensively."
    },
];

function useVisible() {
    const ref = useRef<HTMLDivElement>(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.06 });
        if (ref.current) o.observe(ref.current);
        return () => o.disconnect();
    }, []);
    return { ref, vis };
}

export default function CTASection() {
    const s1 = useVisible();
    const s2 = useVisible();
    const s3 = useVisible();
    const [hovI, setHovI] = useState<number | null>(null);

    return (
        <>
            {/* HOW IT HELPS + WHICH BUSINESSES */}
            <section ref={s1.ref} style={{ background: "#faf3e0", padding: "6rem 6vw", position: "relative", overflow: "hidden" }}>
                {/* Background pattern */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(circle, rgba(101,43,50,0.04) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }} />

                <div style={{
                    opacity: s1.vis ? 1 : 0, transform: s1.vis ? "translateY(0)" : "translateY(22px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                    position: "relative", zIndex: 1,
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.8rem" }}>
                        <div style={{ width: "3px", height: "18px", background: "#f5c518" }} />
                        <Lightbulb size={13} color="#f5c518" strokeWidth={2.5} />
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f5c518" }}>
                            Why eCommerce Matters
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                        fontWeight: 900, color: "#652b32",
                        marginBottom: "3.5rem", lineHeight: 1.12,
                        maxWidth: "680px",
                    }}>How an E-Commerce Website Helps Your Business</h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "2px", position: "relative", zIndex: 1 }}>
                    {[
                        {
                            icon: Globe, dark: false, title: "How does an e-commerce website help businesses?",
                            body: "There is an increase in the number of internet users in India. The majority of consumers first try to purchase any required products online. If you do not have an online presence, you are losing business. If you have a really appealing internet presence and excellent content and product descriptions that suit the customer's requirements, then you might receive a lot of business through the internet."
                        },
                        {
                            icon: Building2, dark: true, title: "Which Types of Businesses Benefit from an E-commerce Website?",
                            body: "MediaMatic enables mid-market and enterprise teams to design, migrate, and optimise complex e-commerce environments through ERP-led connectors, account-specific pricing and workflows, punchouts, and phased replatforming. We are the perfect choice for businesses that require more than just a shop front, including complicated B2B portals and B2C ecosystems, as well as long-term optimisation and support."
                        },
                    ].map((c, i) => (
                        <div key={i} style={{
                            padding: "3.5rem 3rem",
                            borderTop: "3px solid #f5c518",
                            background: c.dark ? "#652b32" : "#faf3e0",
                            position: "relative",
                            overflow: "hidden",
                            opacity: s1.vis ? 1 : 0, transform: s1.vis ? "translateY(0)" : "translateY(28px)",
                            transition: `opacity 0.7s ease ${i * 0.18}s, transform 0.7s ease ${i * 0.18}s`,
                        }}>
                            {/* Corner decoration */}
                            <div style={{
                                position: "absolute", bottom: "-20px", right: "-20px",
                                width: "120px", height: "120px", borderRadius: "50%",
                                border: `1px solid ${c.dark ? "rgba(245,197,24,0.08)" : "rgba(101,43,50,0.06)"}`,
                                pointerEvents: "none",
                            }} />
                            <div style={{
                                width: "48px", height: "48px",
                                background: c.dark ? "rgba(245,197,24,0.1)" : "rgba(101,43,50,0.06)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                marginBottom: "1.5rem",
                            }}>
                                <c.icon size={22} color={c.dark ? "#f5c518" : "#652b32"} strokeWidth={1.8} />
                            </div>
                            <h3 style={{
                                fontFamily: "'Playfair Display',serif", fontSize: "1.25rem", fontWeight: 700,
                                color: c.dark ? "#faf3e0" : "#652b32", marginBottom: "1rem", lineHeight: 1.3,
                            }}>{c.title}</h3>
                            <p style={{
                                fontSize: "0.92rem", lineHeight: 1.85, fontWeight: 300,
                                color: c.dark ? "rgba(250,243,224,0.6)" : "rgba(101,43,50,0.65)",
                            }}>{c.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ADVANCED TECHNOLOGIES */}
            <section ref={s2.ref} style={{ background: "#652b32", padding: "6rem 6vw", position: "relative", overflow: "hidden" }}>
                {/* Background grid */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: `
                        linear-gradient(rgba(245,197,24,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245,197,24,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                }} />

                <div style={{
                    opacity: s2.vis ? 1 : 0, transform: s2.vis ? "translateY(0)" : "translateY(22px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                    position: "relative", zIndex: 1,
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.8rem" }}>
                        <div style={{ width: "3px", height: "18px", background: "#f5c518" }} />
                        <Zap size={13} color="#f5c518" strokeWidth={2.5} />
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f5c518" }}>
                            Advanced Technologies
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                        fontWeight: 900, color: "#faf3e0",
                        marginBottom: "0.8rem", lineHeight: 1.12,
                        maxWidth: "680px",
                    }}>Advanced Technologies Powered to Your E-Commerce Store</h2>
                    <p style={{ fontSize: "0.95rem", color: "rgba(250,243,224,0.5)", maxWidth: "560px", lineHeight: 1.82, marginBottom: "4rem", fontWeight: 300 }}>
                        We power your store with cutting-edge technologies that redefine shopping experiences and drive measurable results.
                    </p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                    gap: "0",
                    borderTop: "1px solid rgba(245,197,24,0.1)",
                    borderLeft: "1px solid rgba(245,197,24,0.1)",
                    position: "relative", zIndex: 1,
                }}>
                    {technologies.map((item, i) => (
                        <div key={i} style={{
                            borderRight: "1px solid rgba(245,197,24,0.1)",
                            borderBottom: "1px solid rgba(245,197,24,0.1)",
                            padding: "2.8rem 2.2rem",
                            position: "relative",
                            opacity: s2.vis ? 1 : 0, transform: s2.vis ? "translateY(0)" : "translateY(30px)",
                            transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s`,
                        }}>
                            <div style={{
                                fontFamily: "'Playfair Display',serif", fontSize: "3rem",
                                fontWeight: 900, color: "#f5c518", opacity: 0.12,
                                lineHeight: 1, marginBottom: "0.4rem",
                                position: "absolute", top: "1.5rem", right: "1.8rem",
                            }}>0{i + 1}</div>
                            <div style={{
                                width: "42px", height: "42px",
                                background: "rgba(245,197,24,0.1)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                marginBottom: "1.2rem",
                            }}>
                                <item.icon size={20} color="#f5c518" strokeWidth={1.8} />
                            </div>
                            <div style={{ width: "28px", height: "2px", background: "#f5c518", marginBottom: "0.9rem", opacity: 0.5 }} />
                            <div style={{ fontSize: "0.97rem", fontWeight: 700, color: "#faf3e0", marginBottom: "0.7rem", lineHeight: 1.35 }}>{item.title}</div>
                            <div style={{ fontSize: "0.86rem", lineHeight: 1.82, color: "rgba(250,243,224,0.5)", fontWeight: 300 }}>{item.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* INTEGRATIONS */}
            <section ref={s3.ref} style={{ background: "#faf3e0", padding: "6rem 6vw", position: "relative", overflow: "hidden" }}>
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(circle, rgba(101,43,50,0.04) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }} />

                <div style={{
                    opacity: s3.vis ? 1 : 0, transform: s3.vis ? "translateY(0)" : "translateY(22px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                    position: "relative", zIndex: 1,
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.8rem" }}>
                        <div style={{ width: "3px", height: "18px", background: "#f5c518" }} />
                        <Monitor size={13} color="#f5c518" strokeWidth={2.5} />
                        <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f5c518" }}>
                            Integrations
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                        fontWeight: 900, color: "#652b32",
                        marginBottom: "0.8rem", lineHeight: 1.12,
                    }}>Integrations Powered by Us</h2>
                    <p style={{ fontSize: "0.95rem", color: "rgba(101,43,50,0.55)", maxWidth: "560px", lineHeight: 1.82, marginBottom: "4rem", fontWeight: 300 }}>
                        Seamlessly connect every tool your business needs — from inventory and CRM to logistics and POS.
                    </p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                    gap: "2px",
                    background: "rgba(101,43,50,0.08)",
                    position: "relative", zIndex: 1,
                }}>
                    {integrations.map((item, i) => (
                        <div key={i}
                            onMouseEnter={() => setHovI(i)}
                            onMouseLeave={() => setHovI(null)}
                            style={{
                                background: hovI === i ? "#652b32" : "#faf3e0",
                                padding: "2.8rem 2.4rem",
                                cursor: "default",
                                position: "relative",
                                overflow: "hidden",
                                opacity: s3.vis ? 1 : 0, transform: s3.vis ? "translateY(0)" : "translateY(28px)",
                                transition: `background 0.35s ease, opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                            }}>
                            <div style={{
                                position: "absolute", top: 0, left: 0, right: 0,
                                height: "2px",
                                background: hovI === i ? "#f5c518" : "transparent",
                                transition: "background 0.35s ease",
                            }} />
                            <div style={{
                                width: "44px", height: "44px",
                                background: hovI === i ? "rgba(245,197,24,0.12)" : "rgba(101,43,50,0.06)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                marginBottom: "1.3rem",
                                transition: "background 0.35s ease",
                            }}>
                                <item.icon size={20} color={hovI === i ? "#f5c518" : "#652b32"} strokeWidth={1.8} style={{ transition: "color 0.35s ease" }} />
                            </div>
                            <div style={{
                                fontSize: "0.97rem", fontWeight: 700,
                                color: hovI === i ? "#f5c518" : "#652b32",
                                marginBottom: "0.6rem",
                                transition: "color 0.35s ease",
                                lineHeight: 1.35,
                            }}>{item.title}</div>
                            <div style={{
                                width: hovI === i ? "36px" : "0px", height: "2px",
                                background: "#f5c518", marginBottom: "0.8rem",
                                transition: "width 0.35s ease",
                            }} />
                            <div style={{
                                fontSize: "0.86rem", lineHeight: 1.82, fontWeight: 300,
                                color: hovI === i ? "rgba(250,243,224,0.58)" : "rgba(101,43,50,0.6)",
                                transition: "color 0.35s ease",
                            }}>{item.desc}</div>
                            <div style={{
                                display: "flex", alignItems: "center", gap: "0.4rem",
                                marginTop: "1.4rem",
                                opacity: hovI === i ? 1 : 0,
                                transform: hovI === i ? "translateX(0)" : "translateX(-8px)",
                                transition: "opacity 0.3s ease, transform 0.3s ease",
                            }}>
                                <span style={{ fontSize: "0.75rem", color: "#f5c518", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Learn more</span>
                                <ArrowRight size={12} color="#f5c518" strokeWidth={2.5} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}