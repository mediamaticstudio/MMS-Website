"use client";

import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ margin: 0, padding: 0, background: "#faf3e0" }}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

/* ─── Header ─────────────────────────────────────────────────────────── */
function Header() {
    const navLinks = [
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Industries", href: "#industries" },
        { label: "Tech Stack", href: "#tech" },
        { label: "FAQ", href: "#faq" },
    ];

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: "rgba(26, 5, 8, 0.92)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(245,197,24,0.12)",
                fontFamily: "'Georgia', serif",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 32px",
                    height: "72px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <a
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        textDecoration: "none",
                    }}
                >
                    <div
                        style={{
                            width: "36px",
                            height: "36px",
                            background: "#f5c518",
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#652b32"
                            strokeWidth="2.5"
                        >
                            <rect x="5" y="2" width="14" height="20" rx="2" />
                            <line x1="12" y1="18" x2="12.01" y2="18" />
                        </svg>
                    </div>
                    <span
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#faf3e0",
                            letterSpacing: "0.5px",
                        }}
                    >
                        Media<span style={{ color: "#f5c518" }}>Matic</span>
                    </span>
                </a>

                {/* Nav links */}
                <nav
                    style={{
                        display: "flex",
                        gap: "36px",
                        alignItems: "center",
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            style={{
                                color: "rgba(250,243,224,0.7)",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: "600",
                                letterSpacing: "0.5px",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                ((e.currentTarget as HTMLAnchorElement).style.color = "#f5c518")
                            }
                            onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.color =
                                "rgba(250,243,224,0.7)")
                            }
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        style={{
                            background: "#f5c518",
                            color: "#652b32",
                            padding: "10px 24px",
                            borderRadius: "4px",
                            fontWeight: "700",
                            fontSize: "14px",
                            textDecoration: "none",
                            letterSpacing: "0.5px",
                            transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")
                        }
                        onMouseLeave={(e) =>
                            ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                        }
                    >
                        Get a Quote
                    </a>
                </nav>
            </div>
        </header>
    );
}

/* ─── Footer ─────────────────────────────────────────────────────────── */
function Footer() {
    const year = new Date().getFullYear();

    const footerLinks = {
        Services: [
            "Custom App Development",
            "UI/UX & Prototyping",
            "iOS QA & Testing",
            "App Maintenance",
            "App Modernization",
            "Mobile Integration",
        ],
        Industries: [
            "Healthcare",
            "Finance",
            "eCommerce",
            "Travel",
            "Education",
            "Real Estate",
        ],
        Company: ["About Us", "Case Studies", "Blog", "Careers", "Contact"],
    };

    return (
        <footer
            style={{
                background: "#1a0508",
                padding: "80px 32px 40px",
                fontFamily: "'Georgia', serif",
                borderTop: "1px solid rgba(245,197,24,0.1)",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* Top grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr 1fr",
                        gap: "48px",
                        marginBottom: "64px",
                    }}
                >
                    {/* Brand column */}
                    <div>
                        <a
                            href="/"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                textDecoration: "none",
                                marginBottom: "20px",
                            }}
                        >
                            <div
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    background: "#f5c518",
                                    borderRadius: "6px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#652b32"
                                    strokeWidth="2.5"
                                >
                                    <rect x="5" y="2" width="14" height="20" rx="2" />
                                    <line x1="12" y1="18" x2="12.01" y2="18" />
                                </svg>
                            </div>
                            <span
                                style={{ fontSize: "20px", fontWeight: "700", color: "#faf3e0" }}
                            >
                                Media<span style={{ color: "#f5c518" }}>Matic</span>
                            </span>
                        </a>

                        <p
                            style={{
                                fontSize: "14px",
                                color: "rgba(250,243,224,0.5)",
                                lineHeight: 1.85,
                                maxWidth: "280px",
                                margin: "0 0 28px",
                            }}
                        >
                            India's trusted iOS app development company — delivering premium
                            Apple ecosystem experiences since 2010.
                        </p>

                        {/* Social links */}
                        <div style={{ display: "flex", gap: "12px" }}>
                            {[
                                {
                                    label: "LinkedIn",
                                    icon: (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    ),
                                },
                                {
                                    label: "Twitter",
                                    icon: (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    ),
                                },
                                {
                                    label: "GitHub",
                                    icon: (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                                        </svg>
                                    ),
                                },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href="#"
                                    aria-label={s.label}
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        border: "1px solid rgba(250,243,224,0.15)",
                                        borderRadius: "6px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgba(250,243,224,0.5)",
                                        textDecoration: "none",
                                        transition: "all 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.color =
                                            "#f5c518";
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                            "#f5c518";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.color =
                                            "rgba(250,243,224,0.5)";
                                        (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                            "rgba(250,243,224,0.15)";
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading}>
                            <h4
                                style={{
                                    fontSize: "12px",
                                    fontWeight: "700",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    color: "#f5c518",
                                    margin: "0 0 20px",
                                }}
                            >
                                {heading}
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {links.map((link) => (
                                    <li key={link} style={{ marginBottom: "10px" }}>
                                        <a
                                            href="#"
                                            style={{
                                                fontSize: "14px",
                                                color: "rgba(250,243,224,0.5)",
                                                textDecoration: "none",
                                                transition: "color 0.2s",
                                            }}
                                            onMouseEnter={(e) =>
                                            ((e.currentTarget as HTMLAnchorElement).style.color =
                                                "#faf3e0")
                                            }
                                            onMouseLeave={(e) =>
                                            ((e.currentTarget as HTMLAnchorElement).style.color =
                                                "rgba(250,243,224,0.5)")
                                            }
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: "1px solid rgba(250,243,224,0.08)",
                        paddingTop: "32px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "16px",
                    }}
                >
                    <p
                        style={{
                            fontSize: "13px",
                            color: "rgba(250,243,224,0.35)",
                            margin: 0,
                        }}
                    >
                        © {year} MediaMatic. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: "28px" }}>
                        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href="#"
                                    style={{
                                        fontSize: "13px",
                                        color: "rgba(250,243,224,0.35)",
                                        textDecoration: "none",
                                        transition: "color 0.2s",
                                    }}
                                    onMouseEnter={(e) =>
                                    ((e.currentTarget as HTMLAnchorElement).style.color =
                                        "#faf3e0")
                                    }
                                    onMouseLeave={(e) =>
                                    ((e.currentTarget as HTMLAnchorElement).style.color =
                                        "rgba(250,243,224,0.35)")
                                    }
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}