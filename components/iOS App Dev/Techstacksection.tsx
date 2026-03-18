"use client";
import { useState } from "react";

const techCategories = [
    {
        category: "Languages",
        items: [
            { name: "Swift", icon: "🦅" },
            { name: "Kotlin", icon: "🎯" },
            { name: "Objective-C", icon: "🔧" },
            { name: "Dart", icon: "🎪" },
        ],
    },
    {
        category: "Frameworks",
        items: [
            { name: "React Native", icon: "⚛️" },
            { name: "Flutter", icon: "💙" },
            { name: "SwiftUI", icon: "🖌️" },
            { name: "UIKit", icon: "📱" },
        ],
    },
    {
        category: "Backend & Cloud",
        items: [
            { name: "Firebase", icon: "🔥" },
            { name: "AWS", icon: "☁️" },
            { name: "Node.js", icon: "🌿" },
            { name: "GraphQL", icon: "◈" },
        ],
    },
    {
        category: "Tools & CI/CD",
        items: [
            { name: "Xcode", icon: "🔨" },
            { name: "TestFlight", icon: "✈️" },
            { name: "Fastlane", icon: "⚡" },
            { name: "Figma", icon: "🎨" },
        ],
    },
];

export default function TechStackSection() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section style={{
            background: "#faf3e0",
            padding: "110px 32px",
            fontFamily: "'Georgia', serif",
            borderTop: "1px solid rgba(101,43,50,0.1)",
        }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "72px" }}>
                    <span style={{
                        display: "inline-block",
                        background: "#652b32", color: "#f5c518",
                        fontSize: "11px", fontWeight: "700", letterSpacing: "3px",
                        textTransform: "uppercase", padding: "6px 18px", borderRadius: "2px",
                        marginBottom: "20px",
                    }}>Our Tech Stack</span>
                    <h2 style={{
                        fontSize: "clamp(32px, 4.5vw, 54px)",
                        fontWeight: "700", color: "#652b32",
                        margin: "0 0 20px", lineHeight: 1.1,
                    }}>
                        Built With The Best<br /><em>Technologies Available</em>
                    </h2>
                    <p style={{
                        fontSize: "17px", color: "rgba(101,43,50,0.6)",
                        maxWidth: "480px", margin: "0 auto", lineHeight: 1.8,
                    }}>
                        We only use the most trusted, modern technologies to ensure your app is fast, scalable, and future-proof.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
                    {techCategories.map((cat) => (
                        <div key={cat.category} style={{
                            background: "#fff",
                            border: "1.5px solid rgba(101,43,50,0.1)",
                            borderRadius: "12px",
                            overflow: "hidden",
                        }}>
                            <div style={{
                                background: "#652b32",
                                padding: "18px 24px",
                            }}>
                                <span style={{
                                    fontSize: "12px", fontWeight: "700", letterSpacing: "2px",
                                    textTransform: "uppercase", color: "#f5c518",
                                }}>{cat.category}</span>
                            </div>
                            <div style={{ padding: "8px" }}>
                                {cat.items.map((item) => {
                                    const key = `${cat.category}-${item.name}`;
                                    return (
                                        <div key={item.name}
                                            onMouseEnter={() => setHovered(key)}
                                            onMouseLeave={() => setHovered(null)}
                                            style={{
                                                display: "flex", alignItems: "center", gap: "14px",
                                                padding: "14px 18px",
                                                borderRadius: "8px",
                                                background: hovered === key ? "rgba(101,43,50,0.07)" : "transparent",
                                                transition: "background 0.2s",
                                                cursor: "default",
                                            }}
                                        >
                                            <span style={{ fontSize: "24px" }}>{item.icon}</span>
                                            <span style={{
                                                fontSize: "15px", fontWeight: "600",
                                                color: "#652b32",
                                            }}>{item.name}</span>
                                            {hovered === key && (
                                                <svg style={{ marginLeft: "auto", color: "#f5c518" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom band */}
                <div style={{
                    marginTop: "64px",
                    background: "#652b32",
                    borderRadius: "12px",
                    padding: "40px 48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "24px",
                }}>
                    <div>
                        <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#faf3e0", margin: "0 0 8px" }}>
                            Not sure which tech fits your project?
                        </h3>
                        <p style={{ fontSize: "15px", color: "rgba(250,243,224,0.6)", margin: 0 }}>
                            Our architects will recommend the best stack for your requirements and budget.
                        </p>
                    </div>
                    <a href="#contact" style={{
                        background: "#f5c518", color: "#652b32",
                        padding: "14px 32px", fontWeight: "700", fontSize: "14px",
                        letterSpacing: "1px", textDecoration: "none", borderRadius: "4px",
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        whiteSpace: "nowrap",
                        fontFamily: "'Georgia', serif",
                    }}>
                        Get Tech Advice
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}