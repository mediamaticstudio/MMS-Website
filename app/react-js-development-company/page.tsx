"use client";
import HeroSection from "@/components/React-JS-Website-Dev/Herosection";
import CTASection from "@/components/React-JS-Website-Dev/Ctasection";
import ServiceSection from "@/components/React-JS-Website-Dev/Servicesection";
import TechStackSection from "@/components/React-JS-Website-Dev/Techstacksection";
import ProcessSection from "@/components/React-JS-Website-Dev/Processsection";
import IndustriesSection from "@/components/React-JS-Website-Dev/Industriessection";
import FaqSection from "@/components/React-JS-Website-Dev/Faqsection";

export default function Home() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{background:#faf3e0;color:#652b32;font-family:'DM Sans',sans-serif;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
        ::-webkit-scrollbar{width:6px;height:6px;}
        ::-webkit-scrollbar-track{background:#faf3e0;}
        ::-webkit-scrollbar-thumb{background:#652b32;border-radius:3px;}
        ::-webkit-scrollbar-thumb:hover{background:#f5c518;}
      `}</style>



            <main>
                <HeroSection />
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