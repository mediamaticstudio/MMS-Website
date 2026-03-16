import { Metadata } from "next";
import { PodcastStudioClient } from "@/components/PodcastStudioClient";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
    title: "Best Podcast Recording Studio In Coimbatore | 4K Video & Audio",
    description: "MediaMatic Studio offers the best podcast recording studio in Coimbatore. Featuring 4K video, cinematic lighting, and soundproof acoustics for influencers and brands.",
    alternates: {
        canonical: "/podcast-recording-studio-in-Coimbatore/",
    },
    keywords: ["best podcast studio Coimbatore", "recording studio Coimbatore", "video podcast production", "audio recording studio Coimbatore", "MediaMatic Studio"],
    openGraph: {
        title: "Best Podcast Recording Studio in Coimbatore | MediaMatic Studio",
        description: "Scale your message with professional audio and video podcasting services at our cinematic studio.",
        url: "https://mediamaticstudio.com/podcast-recording-studio-in-Coimbatore",
    },
};

export default function PodcastStudioPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Podcast Recording Studio",
        "description": "Professional podcast recording studio in Coimbatore with 4K video and cinematic lighting.",
        "provider": {
            "@type": "Organization",
            "name": "MediaMatic Studio",
            "url": "https://mediamaticstudio.com"
        }
    };

    return (
        <>
            <StructuredData data={serviceSchema} />
            <PodcastStudioClient />
        </>
    );
}
