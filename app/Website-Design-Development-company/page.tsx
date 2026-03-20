import type { Metadata } from "next";
import HeroSection from "@/components/Website-Design-Development/Herosection";
import CTASection from "@/components/Website-Design-Development/Ctasection";
import ServiceSection from "@/components/Website-Design-Development/Servicesection";
import TechStackSection from "@/components/Website-Design-Development/Techstacksection";
import ProcessSection from "@/components/Website-Design-Development/Processsection";
import IndustriesSection from "@/components/Website-Design-Development/Industriessection";
import FaqSection from "@/components/Website-Design-Development/Faqsection";

export const metadata: Metadata = {
    title: "MediaMatic | Website Design & Development Company",
    description: "MediaMatic is a group of website design & development companies that plan and schedule their time to think ahead of the next big design shift.",
    openGraph: {
        title: "MediaMatic | Website Design & Development Company",
        description: "MediaMatic is a group of website design & development companies that plan and schedule their time to think ahead of the next big design shift.",
    },
    twitter: {
        title: "MediaMatic | Website Design & Development Company",
        description: "MediaMatic is a group of website design & development companies that plan and schedule their time to think ahead of the next big design shift.",
    },
};

export default function Home() {
    return (
        <>


            <main>
                <HeroSection />
                <CTASection />
                <ServiceSection />
                <TechStackSection />
                <ProcessSection />
                <IndustriesSection />
                <FaqSection />
            </main>
        </>
    );
}