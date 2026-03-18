import HeroSection from "@/components/iOS App Dev/Herosection";
import ServicesSection from "@/components/iOS App Dev/Servicessection";
import IndustriesSection from "@/components/iOS App Dev/Industriessection";
import ProcessSection from "@/components/iOS App Dev/Processsection";
import TechStackSection from "@/components/iOS App Dev/Techstacksection";
import CTASection from "@/components/iOS App Dev/Ctasection";
import FAQSection from "@/components/iOS App Dev/Faqsection";

export const metadata = {
    title: 'iOS App Development Company In Coimbatore | MediaMatic Studio',
    description: 'Premier iOS app development company in Coimbatore. We create premium, secure, and user-friendly iPhone apps tailored to your business needs.',
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