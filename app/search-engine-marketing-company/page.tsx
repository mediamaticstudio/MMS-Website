import { Metadata } from "next";
import { SEMServicesClient } from "@/components/SEMServicesClient";

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
    return <SEMServicesClient />;
}
