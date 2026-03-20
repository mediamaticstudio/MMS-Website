import { Metadata } from "next";
import { SEOServicesClient } from "@/components/SEOServicesClient";

export const metadata: Metadata = {
    title: "Search Engine Optimization (SEO) Company in Coimbatore | MediaMatic Studio",
    description:
        "MediaMatic Studio is the best SEO company in Coimbatore. Boost your organic visibility, rankings, and traffic with our expert SEO strategies and data-driven techniques.",
    keywords:
        "SEO company in Coimbatore, SEO services in Coimbatore, best SEO agency Coimbatore, search engine optimization Coimbatore, MediaMatic Studio",
    alternates: {
        canonical: "/search-engine-optimization-company/",
    },
    openGraph: {
        title: "SEO Company in Coimbatore | MediaMatic Studio",
        description:
            "MediaMatic Studio is the best SEO company in Coimbatore. Boost your organic visibility, rankings, and traffic with our expert SEO strategies.",
        url: "https://mediamaticstudio.com/search-engine-optimization-company/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best SEO Services Company in Coimbatore",
        description: "Expert SEO strategies for higher rankings and visibility.",
    }
};

export default function SEOServicesPage() {
    return <SEOServicesClient />;
}
