import { Metadata } from "next";
import { SEMServicesClient } from "@/components/SEMServicesClient";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "Best SEM & PPC Agency in Coimbatore | Paid Media Experts",
    description: "Scale faster with data-driven search engine marketing. Our SEM experts in Coimbatore help you attract high-intent traffic and deliver measurable ROI through PPC.",
    alternates: {
        canonical: "/search-engine-marketing-company/",
    },
    keywords: ["SEM company Coimbatore", "PPC advertising experts", "Google Ads management", "Bing Ads services", "paid media marketing", "MediaMatic Studio"],
    openGraph: {
        title: "Best SEM & PPC Agency Coimbatore | MediaMatic Studio",
        description: "Scale your business with high-performing PPC campaigns. Experts in Search Engine Marketing and Paid Media.",
        url: "https://mediamaticstudio.com/search-engine-marketing-company",
    },
};

export default function SEMServicesPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SEM & PPC Services",
        "description": "Expert search engine marketing and PPC advertising services in Coimbatore.",
        "provider": {
            "@type": "Organization",
            "name": "MediaMatic Studio",
            "url": "https://mediamaticstudio.com"
        }
    };

    return (
        <>
            <StructuredData data={serviceSchema} />
            <SEMServicesClient />
        </>
    );
}
