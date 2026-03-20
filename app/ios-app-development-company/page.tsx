import { Metadata } from "next";
import HeroSection from "@/components/iOS App Dev/Herosection";
import ServicesSection from "@/components/iOS App Dev/Servicessection";
import IndustriesSection from "@/components/iOS App Dev/Industriessection";
import ProcessSection from "@/components/iOS App Dev/Processsection";
import TechStackSection from "@/components/iOS App Dev/Techstacksection";
import CTASection from "@/components/iOS App Dev/Ctasection";
import FAQSection from "@/components/iOS App Dev/Faqsection";

export const metadata: Metadata = {
    title: "iOS App Development Company in Coimbatore | MediaMatic Studio",
    description:
        "Premier iOS app development company in Coimbatore. We create premium, secure, and user-friendly iPhone apps tailored to your business needs.",
    keywords:
        "iOS app development company in Coimbatore, iPhone app developers Coimbatore, custom iOS apps, Swift development Coimbatore, MediaMatic Studio",
    alternates: {
        canonical: "/ios-app-development-company/",
    },
    openGraph: {
        title: "iOS App Development Company in Coimbatore | MediaMatic Studio",
        description:
            "Premier iOS app development company in Coimbatore. Premium, secure, and user-friendly iPhone apps.",
        url: "https://mediamaticstudio.com/ios-app-development-company/",
        siteName: "MediaMatic Studio",
    },
    twitter: {
        card: "summary_large_image",
        title: "iOS App Development Company in Coimbatore | MediaMatic Studio",
        description: "Premier iOS app development company creating premium iPhone apps in Coimbatore.",
    },
};

export default function IOSAppDevelopmentPage() {
    return (
        <main style={{ fontFamily: "'Georgia', serif" }}>
            <HeroSection />
            <ServicesSection />
            <ProcessSection />
            <TechStackSection />
            <IndustriesSection />
            <CTASection />
            <FAQSection />
        </main>
    );
}