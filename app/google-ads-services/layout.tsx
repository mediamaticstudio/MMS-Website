import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Google Ads Agency in Coimbatore | Lead Generation Experts | MediaMatic Studio",
    description:
        "MediaMatic Studio is a professional Google Ads agency in Coimbatore offering expert campaign management, keyword research, and lead generation services for businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=DM+Sans:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}