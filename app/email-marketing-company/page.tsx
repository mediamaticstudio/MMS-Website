import { Metadata } from "next";
import CTASection from "@/components/emailmarketing/CTASection";
import FAQSection from "@/components/emailmarketing/FAQSection";
import IndustriesSection from "@/components/emailmarketing/IndustriesSection";
import ProcessSection from "@/components/emailmarketing/ProcessSection";
import ServicesSection from "@/components/emailmarketing/ServicesSection";
import TechStackSection from "@/components/emailmarketing/TechStackSection";
import HeroSection from "@/components/emailmarketing/HeroSection";

export const metadata: Metadata = {
    title: "Best Email Marketing Company in Coimbatore | MediaMatic Studio",
    description: "MediaMatic Studio is a top-rated email marketing company in Coimbatore. Nurture leads, increase engagement, and drive conversions with our automated campaigns.",
    alternates: {
        canonical: "https://mediamaticstudio.com/email-marketing-company/",
    },
    openGraph: {
        title: "Best Email Marketing Company in Coimbatore | MediaMatic Studio",
        description: "Choose the best email marketing service in Coimbatore to nurture leads, increase engagement, and drive conversions with automated campaigns.",
        url: "https://mediamaticstudio.com/email-marketing-company/",
        siteName: "Mediamatic Studio",
        type: "website",
    },
};

export default function EmailMarketingCompany() {
    return (
        <main>
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