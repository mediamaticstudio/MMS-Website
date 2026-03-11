import { Metadata } from "next";
import { SMOServicesClient } from "@/components/SMOServicesClient";

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
    return <SMOServicesClient />;
}
