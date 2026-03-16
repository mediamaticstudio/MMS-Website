import type { Metadata } from "next";
import { WebDevelopmentClient } from "@/components/WebDevelopmentClient";

// ─── SEO Metadata (replaces <SEO> component) ─────────────────────────────────
export const metadata: Metadata = {
    title: "Web & App Development Services | MediaMatic Studio",
    description:
        "Your one-stop digital partner for cutting-edge web and mobile experiences. Expert mobile app development, website development, e-commerce solutions, and custom web applications.",
    keywords:
        "web development, app development, mobile apps, website design, e-commerce, custom web applications, UI/UX design, responsive design, MediaMatic Studio",
    alternates: {
        canonical: "/services/website-development-agency",
    },
    openGraph: {
        title: "Web & App Development Services | MediaMatic Studio",
        description:
            "Your one-stop digital partner for cutting-edge web and mobile experiences. Expert mobile app development, website development, e-commerce solutions, and custom web applications.",
        url: "/services/website-development-agency",
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
            { "@type": "ListItem", position: 3, name: "Web Development", item: "https://mediamaticstudio.com/services/website-development-agency/" },
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