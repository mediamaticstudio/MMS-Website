"use client";
import HeroSection from "@/components/Wordpress-Website-Development/Herosection";
import CTASection from "@/components/Wordpress-Website-Development/Ctasection";
import ServiceSection from "@/components/Wordpress-Website-Development/Servicesection";
import TechStackSection from "@/components/Wordpress-Website-Development/Techstacksection";
import ProcessSection from "@/components/Wordpress-Website-Development/Processsection";
import IndustriesSection from "@/components/Wordpress-Website-Development/Industriessection";
import FaqSection from "@/components/Wordpress-Website-Development/Faqsection";

export default function Home() {
    return (
        <>


            <main>
                <section id="hero"><HeroSection /></section>
                <section id="services"><CTASection /></section>
                <ServiceSection />
                <section id="expertise"><TechStackSection /></section>
                <section id="process"><ProcessSection /></section>
                <section id="industries"><IndustriesSection /></section>
                <section id="faq"><FaqSection /></section>
            </main>
        </>
    );
}