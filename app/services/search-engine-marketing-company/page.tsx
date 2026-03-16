import { Metadata } from "next";
import { SEMServicesClient } from "@/components/SEMServicesClient";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Best SEM & PPC Agency in Coimbatore | Paid Media Experts",
    description:
        "Scale faster with data-driven search engine marketing. Our SEM experts in Coimbatore help you attract high-intent traffic and deliver measurable ROI through PPC.",
    keywords: [
        "SEM company Coimbatore",
        "PPC advertising experts",
        "Google Ads management",
        "Bing Ads services",
        "paid media marketing",
        "MediaMatic Studio",
    ],
    alternates: {
        canonical: "/search-engine-marketing-company/",
    },
    openGraph: {
        title: "Best SEM & PPC Agency Coimbatore | MediaMatic Studio",
        description:
            "Scale your business with high-performing PPC campaigns. Experts in Search Engine Marketing and Paid Media.",
        url: "https://mediamaticstudio.com/search-engine-marketing-company",
    },
};

// ─── Structured Data ──────────────────────────────────────────────────────────
const structuredData = [
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mediamaticstudio.com/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://mediamaticstudio.com/services/" },
            { "@type": "ListItem", position: 3, name: "Digital Marketing", item: "https://mediamaticstudio.com/services/digital-marketing-agency/" },
            { "@type": "ListItem", position: 4, name: "SEM", item: "https://mediamaticstudio.com/search-engine-marketing-company/" },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Search Engine Marketing (SEM) Services",
        description:
            "Professional PPC, Google Ads, and paid search marketing for immediate online visibility and ROI.",
        provider: {
            "@type": "Organization",
            name: "MediaMatic Studio",
            url: "https://mediamaticstudio.com",
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MediaMatic Studio",
        url: "https://mediamaticstudio.com",
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What results can businesses expect with Search Engine Marketing?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "With SEM, you will receive immediate results for your business, including specialized campaigns that lead to quantifiable success.",
                },
            },
            {
                "@type": "Question",
                name: "Why should you choose MediamaticStudio as your Search Engine Marketing Agency?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Because we have a results-driven strategy where we do research, implementation, and reporting of your outcomes.",
                },
            },
        ],
    },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SEMServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <SEMServicesClient />
        </>
    );
}