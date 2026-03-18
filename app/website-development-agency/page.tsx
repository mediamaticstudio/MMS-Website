import type { Metadata } from "next";
import { WebDevelopmentClient } from "@/components/WebDevelopmentClient";

// ─── SEO Metadata (replaces <SEO> component) ─────────────────────────────────
export const metadata: Metadata = {
    title: "Website Development Agency in Coimbatore | MediaMatic Studio",
    description:
        "MediaMatic Studio is a leading website development agency in Coimbatore. We create high-performance, responsive websites and custom web applications tailored for your business growth.",
    keywords:
        "website development agency in Coimbatore, web development company in Coimbatore, custom website design, responsive web design, MediaMatic Studio",
    alternates: {
        canonical: "/website-development-agency",
    },
    openGraph: {
        title: "Website Development Agency in Coimbatore | MediaMatic Studio",
        description:
            "MediaMatic Studio is a leading website development agency in Coimbatore. We create high-performance, responsive websites and custom web applications tailored for your business growth.",
        url: "/website-development-agency",
    },
};

// ─── Structured Data (replaces generateBreadcrumbSchema / generateServiceSchema / generateOrganizationSchema) ───
const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mediamaticstudio.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://mediamaticstudio.com/services/" },
            { "@type": "ListItem", position: 3, name: "Web Development", item: "https://mediamaticstudio.com/website-development-agency/" },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Web Development Services",
        description:
            "Expert web and mobile app development including custom applications, e-commerce solutions, and responsive design.",
        provider: {
            "@type": "Organization",
            name: "MediaMatic Studio",
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MediaMatic Studio",
        url: "https://mediamaticstudio.com",
    },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WebDevelopmentPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <WebDevelopmentClient />
        </>
    );
}