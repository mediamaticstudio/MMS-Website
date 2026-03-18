import { Metadata } from "next";
import TechStackSection from "@/components/google-ads-services/TechStackSection";
import HeroSection from "@/components/google-ads-services/HeroSection";
import ServicesSection from "@/components/google-ads-services/ServicesSection";
import ProcessSection from "@/components/google-ads-services/ProcessSection";
import IndustriesSection from "@/components/google-ads-services/IndustriesSection";
import FAQSection from "@/components/google-ads-services/FAQSection";
import CTASection from "@/components/google-ads-services/CTASection";

export const metadata: Metadata = {
    title: "Google Ads Agency for Leads & Sales | Start Your Campaign",
    description: "Partner with a trusted Google Ads agency to drive targeted traffic, quality leads, and sales. Launch high-performing ad campaigns today.",
    keywords: ["google ads agency"],
    alternates: {
        canonical: "https://mediamaticstudio.com/google-ads-services/",
    },
    openGraph: {
        title: "Google Ads Agency for Leads & Sales | Start Your Campaign",
        description: "Partner with a trusted Google Ads agency to drive targeted traffic, quality leads, and sales. Launch high-performing ad campaigns today.",
        url: "https://mediamaticstudio.com/google-ads-services/",
        siteName: "Mediamatic Studio",
        type: "website",
    },
};

export default function GoogleAdsPage() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <ServicesSection />
            <ProcessSection />
            <IndustriesSection />
            <TechStackSection />
            <FAQSection />
            <CTASection />
        </main>
    );
}
