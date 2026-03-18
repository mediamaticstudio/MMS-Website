import HeroSection from "@/components/android-app-site/HeroSection";
import ServicesSection from "@/components/android-app-site/ServicesSection";
import ProcessSection from "@/components/android-app-site/ProcessSection";
import IndustriesSection from "@/components/android-app-site/IndustriesSection";
import TechStackSection from "@/components/android-app-site/TechStackSection";
import FAQSection from "@/components/android-app-site/FAQSection";
import CTASection from "@/components/android-app-site/CTASection";

export const metadata = {
    title: "Android App Development Company in Coimbatore | MediaMatic Studio",
    description:
        "Top-rated Android app development company in Coimbatore. MediaMatic Studio builds custom, scalable, and high-performance Android applications for global businesses.",
    keywords:
        "android app development company in Coimbatore, android app developers in Coimbatore, custom android apps, mobile app development Coimbatore, MediaMatic Studio",
    alternates: {
        canonical: "/android-app-development-company",
    },
    openGraph: {
        title: "Android App Development Company in Coimbatore | MediaMatic Studio",
        description:
            "Top-rated Android app development company in Coimbatore. MediaMatic Studio builds custom, scalable, and high-performance Android applications for global businesses.",
        url: "/android-app-development-company",
    },
};

export default function AndroidAppDevelopmentPage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <TechStackSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
