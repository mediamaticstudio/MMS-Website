import { Metadata } from "next";
import { SMOServicesClient } from "@/components/SMOServicesClient";

export const metadata: Metadata = {
    title: "Expert Social Media Optimization | SMO Services | MediaMatic Studio",
    description: "Raise visibility, interaction and authority with our expert social media optimization services. We provide systematic SMO strategies to help your brand remain competitive.",
    alternates: {
        canonical: "/social-media-optimization-company/",
    },
    keywords: ["social media optimization", "SMO services", "social media branding", "community management", "profile optimization", "MediaMatic Studio"],
};

export default function SMOServicesPage() {
    return <SMOServicesClient />;
}
