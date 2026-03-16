import { Metadata } from "next";
import { DigitalMarketingClient } from "@/components/DigitalMarketingClient";

export const metadata: Metadata = {
    title: "Top Digital Marketing Agency for Brands - Contact Now",
    description: "Partner with a top digital marketing agency that turns clicks into customers and grows traffic, leads, and sales—book a free call now!",
    alternates: {
        canonical: "/services/digital-marketing-agency/",
    },
    keywords: ["digital marketing agency", "marketing agency for small business", "affordable digital marketing", "SEO", "SMM", "SEM", "growth marketing", "Coimbatore digital agency"],
    openGraph: {
        title: "Top Digital Marketing Agency | Mediamatic Studio",
        description: "Grow your business with data-driven digital marketing strategies.",
        url: "https://mediamaticstudio.com/services/digital-marketing-agency",
    },
};

export default function DigitalMarketingPage() {
    return <DigitalMarketingClient />;
}