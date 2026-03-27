"use client";
import HeroSection from "@/components/E-Commerce Website Dev/Herosection";
import CTASection from "@/components/E-Commerce Website Dev/Ctasection";
import ServiceSection from "@/components/E-Commerce Website Dev/Servicesection";
import IndustriesSection from "@/components/E-Commerce Website Dev/Industriessection";
import FaqSection from "@/components/E-Commerce Website Dev/Faqsection";

const navLinks: [string, string][] = [
    ["Technologies", "#technologies"],
    ["Integrations", "#integrations"],
    ["Why Us", "#whyus"],
    ["Industries", "#industries"],
    ["FAQ", "#faq"],
];

export default function Home() {
    return (
        <>
            <main>
                <HeroSection />
                <section id="technologies"><CTASection /></section>
                <section id="whyus"><ServiceSection /></section>
                <section id="industries"><IndustriesSection /></section>
                <section id="faq"><FaqSection /></section>
            </main>
        </>
    );
}