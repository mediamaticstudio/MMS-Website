import { Metadata } from "next";
import HeroSection from "@/components/flutter-app-dev/Herosection";
import ServicesSection from "@/components/flutter-app-dev/Servicessection";
import IndustriesSection from "@/components/flutter-app-dev/Industriessection";
import ProcessSection from "@/components/flutter-app-dev/Processsection";
import TechStackSection from "@/components/flutter-app-dev/Techstacksection";
import FAQSection from "@/components/flutter-app-dev/Faqsection";
import CTASection from "@/components/flutter-app-dev/Ctasection";

export const metadata: Metadata = {
    title: "Flutter App Development Company in Coimbatore | MediaMatic Studio",
    description:
        "Best Flutter app development company in Coimbatore. High-quality cross-platform apps for Android & iOS with smooth performance and stunning UI.",
    keywords:
        "Flutter app development company in Coimbatore, cross-platform app developers Coimbatore, Flutter mobile apps, Dart development Coimbatore, MediaMatic Studio",
    alternates: {
        canonical: "/flutter-app-development-company/",
    },
    openGraph: {
        title: "Flutter App Development Company in Coimbatore | MediaMatic Studio",
        description:
            "Best Flutter app development company in Coimbatore. Cross-platform apps for Android & iOS.",
        url: "https://mediamaticstudio.com/flutter-app-development-company/",
        siteName: "MediaMatic Studio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flutter App Development Company in Coimbatore | MediaMatic Studio",
        description: "High-quality cross-platform Flutter apps for Android & iOS in Coimbatore.",
    },
};

export default function Home() {
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