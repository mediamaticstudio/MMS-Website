"use client";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import HeroSection from "@/components/ui-ux-design/Herosection";
import ServicesSection from "@/components/ui-ux-design/Servicessection";
import ProcessSection from "@/components/ui-ux-design/Processsection";
import TechStackSection from "@/components/ui-ux-design/Techstacksection";
import IndustriesSection from "@/components/ui-ux-design/Industriessection";
import FaqSection from "@/components/ui-ux-design/Faqsection";
import { SEO } from "@/components/SEO";

export default function UIUXDesignAgency() {
  return (
    <main style={{ background: "#faf3e0", minHeight: "100vh" }}>
      <SEO
        title="UI UX Design Agency - Create Stunning User Experiences Today"
        description="Partner with a leading UI UX design agency to transform your digital experience. Let’s design your platform today!"
        keywords="ui ux design agency, professional ui ux design, website ui/ux design, mobile app ui/ux design, ui ux agency design services, strategic design services, mediamaticstudio"
      />
      {/* <Header /> */}
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <TechStackSection />
      <IndustriesSection />
      <FaqSection />
      {/* <Footer /> */}
    </main>
  );
}
