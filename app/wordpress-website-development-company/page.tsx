import type { Metadata } from "next";
import Herosection from "@/components/Wordpress-Website-Development/Herosection";
import AboutSection from "@/components/Wordpress-Website-Development/AboutSection";
import WhyChooseSection from "@/components/Wordpress-Website-Development/WhyChooseSection";
import Servicesection from "@/components/Wordpress-Website-Development/Servicesection";
import Techstacksection from "@/components/Wordpress-Website-Development/Techstacksection";
import Processsection from "@/components/Wordpress-Website-Development/Processsection";
import Industriessection from "@/components/Wordpress-Website-Development/Industriessection";
import Ctasection from "@/components/Wordpress-Website-Development/Ctasection";
import Faqsection from "@/components/Wordpress-Website-Development/Faqsection";

export const metadata: Metadata = {
    title: "MediaMatic | WordPress Website Development Company",
    description: "MediaMatic is a leading WordPress development company providing custom themes, plugins, and scalable eCommerce solutions.",
    openGraph: {
        title: "MediaMatic | WordPress Website Development Company",
        description: "Transform your business with our professional WordPress development services.",
    },
};

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Herosection />
            <AboutSection />
            <WhyChooseSection />
            <Servicesection />
            <Techstacksection />
            <Processsection />
            <Industriessection />
            <Ctasection />
            <Faqsection />
        </main>
    );
}