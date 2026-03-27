"use client";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import HeroSection from "@/components/ui-ux-design/Herosection";
import ServicesSection from "@/components/ui-ux-design/Servicessection";
import ProcessSection from "@/components/ui-ux-design/Processsection";
import TechStackSection from "@/components/ui-ux-design/Techstacksection";
import IndustriesSection from "@/components/ui-ux-design/Industriessection";
import FaqSection from "@/components/ui-ux-design/Faqsection";
// import SEO from "@/components/SEO";

export default function UIUXDesignAgency() {
  return (
    <main style={{ background: "#faf3e0", minHeight: "100vh" }}>
      {/* <SEO
        title="UI UX Design Agency | Professional UI/UX Design Services"
        description="Mediamaticstudio is a top UI UX design agency providing professional website UI/UX design, mobile app design, and digital experience services to help companies grow."
        keywords="ui ux design agency, professional ui ux design, website ui/ux design, mobile app ui/ux design, ui ux agency design services, strategic design services, mediamaticstudio"
      />
      <Header /> */}
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
