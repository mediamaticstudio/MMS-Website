import type { Metadata } from "next";
import { WebHostingClient } from "@/components/WebHostingClient";

// ─── SEO Metadata (replaces <SEO> component) ───────────────────────────────
export const metadata: Metadata = {
    title: "Web Hosting Services in Coimbatore | MediaMatic Studio",
    description: "Reliable and high-performance web hosting services in Coimbatore. Secure your business's online presence with MediaMatic Studio's fast and stable hosting solutions.",
    keywords: "web hosting Coimbatore, high-performance hosting, secure web hosting, business hosting services, MediaMatic Studio",
    alternates: {
        canonical: "/web-hosting/",
    },
    openGraph: {
        title: "Web Hosting Services in Coimbatore | MediaMatic Studio",
        description: "Reliable and high-performance web hosting services in Coimbatore.",
        url: "https://mediamaticstudio.com/web-hosting/",
        siteName: "MediaMatic Studio",
        images: [
            {
                url: "https://mediamaticstudio.com/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
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
            { "@type": "ListItem", position: 3, name: "Web Hosting", item: "https://mediamaticstudio.com/web-hosting/" },
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