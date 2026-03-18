import { Metadata } from "next";
import { DigitalMarketingClient } from "@/components/DigitalMarketingClient";

export const metadata: Metadata = {
    title: "Digital Marketing Agency in Coimbatore | MediaMatic Studio",
    description: "MediaMatic Studio is a results-driven digital marketing agency in Coimbatore specializing in SEO, SMM, and online growth strategies through data-backed marketing.",
    alternates: {
        canonical: "/digital-marketing-agency/",
    },
    keywords: ["digital marketing agency in Coimbatore", "marketing company in Coimbatore", "SEO services Coimbatore", "SMM Coimbatore", "MediaMatic Studio"],
    openGraph: {
        title: "Digital Marketing Agency in Coimbatore | MediaMatic Studio",
        description: "Grow your business with data-driven digital marketing strategies from MediaMatic Studio in Coimbatore.",
        url: "https://mediamaticstudio.com/digital-marketing-agency",
    },
};

export default function DigitalMarketingPage() {
    return <DigitalMarketingClient />;
}