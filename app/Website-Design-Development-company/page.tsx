import type { Metadata } from "next";
import Herosection from "@/components/Website-Design-Development/Herosection";
import AboutSection from "@/components/Website-Design-Development/AboutSection";
import WhyChooseSection from "@/components/Website-Design-Development/WhyChooseSection";
import Servicesection from "@/components/Website-Design-Development/Servicesection";
import Techstacksection from "@/components/Website-Design-Development/Techstacksection";
import Processsection from "@/components/Website-Design-Development/Processsection";
import Industriessection from "@/components/Website-Design-Development/Industriessection";
import Ctasection from "@/components/Website-Design-Development/Ctasection";
import Faqsection from "@/components/Website-Design-Development/Faqsection";

export const metadata: Metadata = {
    title: "MediaMatic | Website Design & Development Company",
    description: "MediaMatic is a group of website design & development companies that plan and schedule their time to think ahead of the next big design shift for your digital brand development.",
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
        <main className="min-h-screen bg-background">
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