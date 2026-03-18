"use client";

import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ margin: 0, padding: 0, background: "#faf3e0" }}>
            {children}
        </div>
    );
}