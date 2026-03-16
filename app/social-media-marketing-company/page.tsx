import { Metadata } from "next";
import { SMMServicesClient } from "@/components/SMMServicesClient";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "Best Social Media Marketing Company in Coimbatore | Grow Your Reach",
    description: "Hire an expert social media marketing agency in Coimbatore to boost brand engagement, attract new customers, and accelerate growth. Contact MediaMatic Studio today.",
    alternates: {
        canonical: "/social-media-marketing-company/",
    },
    keywords: ["social media marketing Coimbatore", "SMM agency in Coimbatore", "social media strategy", "influencer marketing services", "Facebook ads Coimbatore", "Instagram marketing", "MediaMatic Studio"],
    openGraph: {
        title: "Best Social Media Marketing Company Coimbatore | Growth-Driven SMM",
        description: "Scale your brands presence on social media with MediaMatic Studio's tailored marketing strategies.",
        url: "https://mediamaticstudio.com/social-media-marketing-company",
    },
};

export default function SMMServicesPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Social Media Marketing",
        "description": "Expert social media marketing services in Coimbatore to boost brand engagement and growth.",
        "provider": {
            "@type": "Organization",
            "name": "MediaMatic Studio",
            "url": "https://mediamaticstudio.com"
        }
    };

    return (
        <>
            <StructuredData data={serviceSchema} />
            <SMMServicesClient />
        </>
    );
}
