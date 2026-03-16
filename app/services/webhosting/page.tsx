import type { Metadata } from "next";
import { WebHostingClient } from "@/components/WebHostingClient";

// ─── SEO Metadata (replaces <SEO> component) ───────────────────────────────
export const metadata: Metadata = {
    title: "Web Hosting Services | MediaMatic Studio",
    description:
        "Top-notch web hosting and domain services with 24/7 support, 99.9% uptime guarantee, cPanel access, and business email accounts. Reliable shared and dedicated hosting solutions.",
    keywords:
        "web hosting, domain registration, shared hosting, dedicated hosting, cPanel, business email, domain transfer, hosting services, MediaMatic Studio",
    alternates: {
        canonical: "/services/webhosting",
    },
    openGraph: {
        title: "Web Hosting Services | MediaMatic Studio",
        description:
            "Top-notch web hosting and domain services with 24/7 support, 99.9% uptime guarantee, cPanel access, and business email accounts.",
        url: "/services/webhosting",
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
            { "@type": "ListItem", position: 3, name: "Web Hosting", item: "https://mediamaticstudio.com/services/webhosting/" },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Web Hosting Services",
        description:
            "Reliable hosting solutions including shared hosting, dedicated servers, domain registration, and business email accounts.",
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

// ─── Page ───────────────────────────────────────────────────────────────────
export default function WebHostingPage() {
    return (
        <>
            {/* Inject structured data into <head> */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <WebHostingClient />
        </>
    );
}