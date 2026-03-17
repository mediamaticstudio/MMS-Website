import HeroSection from "@/components/adpage/HeroSection";
import AboutSection from "@/components/adpage/AboutSection";
import ServicesSection from "@/components/adpage/ServicesSection";
import PromoSection from "@/components/adpage/PromoSection";
import PortfolioSection from "@/components/adpage/PortfolioSection";
import ContactSection from "@/components/adpage/ContactSection";
import ContactModalWrapper from "@/components/adpage/ContactModalWrapper";
export const metadata = {
    title: "Branding Agency Houston",
    robots: {
        index: false,
        follow: false,
    },
};
export default function AdPage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PromoSection />
            <PortfolioSection />
            <ContactSection />
            <ContactModalWrapper />
        </>
    );
}