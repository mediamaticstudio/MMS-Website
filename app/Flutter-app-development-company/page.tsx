import HeroSection from "@/components/flutter-app-dev/Herosection";
import ServicesSection from "@/components/flutter-app-dev/Servicessection";
import IndustriesSection from "@/components/flutter-app-dev/Industriessection";
import ProcessSection from "@/components/flutter-app-dev/Processsection";
import TechStackSection from "@/components/flutter-app-dev/Techstacksection";
import FAQSection from "@/components/flutter-app-dev/Faqsection";
import CTASection from "@/components/flutter-app-dev/Ctasection";

export const metadata = {
    title: 'Flutter App Development Company In Coimbatore | MediaMatic Studio',
    description: 'Best Flutter app development company in Coimbatore. High-quality cross-platform apps for Android & iOS with smooth performance and stunning UI.',
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