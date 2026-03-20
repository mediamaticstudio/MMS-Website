import { Metadata } from "next";
import HeroSection from '@/components/mobile-app-development/components/HeroSection'
import ServicesSection from '@/components/mobile-app-development/components/ServicesSection'
import WhyUsSection from '@/components/mobile-app-development/components/WhyUsSection'
import ProcessSection from '@/components/mobile-app-development/components/ProcessSection'
import IndustriesSection from '@/components/mobile-app-development/components/IndustriesSection'
import TechStackSection from '@/components/mobile-app-development/components/TechStackSection'
import FAQSection from '@/components/mobile-app-development/components/FAQSection'
// import CTASection from '@/components/mobile-app-development/components/CTASection'

export const metadata: Metadata = {
    title: "Mobile App Development Company in Coimbatore | MediaMatic Studio",
    description:
        "Top mobile app development company in Coimbatore. We build high-performance Android, iOS, and Flutter apps with AI integration. Get a free quote today!",
    keywords:
        "mobile app development company in Coimbatore, app developers Coimbatore, Android iOS Flutter apps, custom mobile apps Coimbatore, MediaMatic Studio",
    alternates: {
        canonical: "/mobile-app-development-company/",
    },
    openGraph: {
        title: "Mobile App Development Company in Coimbatore | MediaMatic Studio",
        description:
            "Top mobile app development company in Coimbatore. Android, iOS, and Flutter apps with AI integration.",
        url: "https://mediamaticstudio.com/mobile-app-development-company/",
        siteName: "MediaMatic Studio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development Company in Coimbatore | MediaMatic Studio",
        description: "High-performance Android, iOS, and Flutter apps with AI integration in Coimbatore.",
    },
}

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <IndustriesSection />
        <TechStackSection />
        <FAQSection />
        {/* <CTASection /> */}
      </main>
    </>
  )
}
