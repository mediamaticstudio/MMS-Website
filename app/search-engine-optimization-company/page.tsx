import { Metadata } from "next";
import { SEOServicesClient } from "@/components/SEOServicesClient";

export const metadata: Metadata = {
    title: "Best SEO Services Company in Coimbatore | Experts & Audits",
    description: "Transform your online presence with the best SEO services company in Coimbatore. We offer bespoke SEO strategies to drive higher search rankings and quality lead generation.",
    alternates: {
        canonical: "/search-engine-optimization-company/",
    },
    keywords: ["SEO services Coimbatore", "search engine optimization", "local SEO", "ecommerce SEO", "WordPress SEO", "SEO audit", "MediaMatic Studio"],
    openGraph: {
        title: "SEO Services Company Coimbatore | Search Engine Optimization",
        description: "Rank #1 on Google with MediaMatic Studio's expert SEO strategies. Local, national, and global SEO solutions.",
        url: "https://mediamaticstudio.com/search-engine-optimization-company",
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
