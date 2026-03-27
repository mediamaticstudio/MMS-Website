import HeroSection from "@/components/flyer-design/Herosection";
import TechstackSection from "@/components/flyer-design/Techstacksection";
import ServicesSection from "@/components/flyer-design/Servicessection";
import ProcessSection from "@/components/flyer-design/Processsection";
import IndustriesSection from "@/components/flyer-design/Industriessection";
// import CtaSection from "@/components/flyer-design/Ctasection";
import FaqSection from "@/components/flyer-design/Faqsection";

export default function FlyerDesignPage() {
  return (
    <main>
      <HeroSection />
      <TechstackSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      {/* <CtaSection /> */}
      <FaqSection />
    </main>
  );
}
