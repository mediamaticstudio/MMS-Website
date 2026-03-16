import { Metadata } from "next";
import { SMOServicesClient } from "@/components/SMOServicesClient";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "Best SMO Services Company in Coimbatore | Profile Optimization",
    description: "Raise visibility, engagement, and authority on social media with our expert SMO services in Coimbatore. We provide data-backed strategies to optimize your brand's profiles.",
    alternates: {
        canonical: "/social-media-optimization-company/",
    },
    keywords: ["SMO services Coimbatore", "social media optimization agency", "profile branding", "community engagement Coimbatore", "organic social growth", "MediaMatic Studio"],
    openGraph: {
        title: "Best SMO Services Company Coimbatore | MediaMatic Studio",
        description: "Maximize your brand's organic reach and influence on social platforms with our expert optimization.",
        url: "https://mediamaticstudio.com/social-media-optimization-company",
    },
};

export default function SMOServicesPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Social Media Optimization (SMO)",
        "description": "Expert social media optimization services in Coimbatore to enhance brand visibility and engagement.",
        "provider": {
            "@type": "Organization",
            "name": "MediaMatic Studio",
            "url": "https://mediamaticstudio.com"
        }
    };

    return (
        <>
            <StructuredData data={serviceSchema} />
            <SMOServicesClient />
        </>
    );
}
