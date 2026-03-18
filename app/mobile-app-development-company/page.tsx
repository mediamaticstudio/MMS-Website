import HeroSection from '@/components/mobile-app-development/components/HeroSection'
import ServicesSection from '@/components/mobile-app-development/components/ServicesSection'
import WhyUsSection from '@/components/mobile-app-development/components/WhyUsSection'
import ProcessSection from '@/components/mobile-app-development/components/ProcessSection'
import IndustriesSection from '@/components/mobile-app-development/components/IndustriesSection'
import TechStackSection from '@/components/mobile-app-development/components/TechStackSection'
import FAQSection from '@/components/mobile-app-development/components/FAQSection'
import CTASection from '@/components/mobile-app-development/components/CTASection'

export const metadata = {
  title: 'Mobile App Development Company In Coimbatore | MediaMatic Studio',
  description:
    'Top mobile app development company in Coimbatore. We build high-performance Android, iOS, and Flutter apps with AI integration. Get a free quote today!',
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
        <CTASection />
      </main>
    </>
  )
}
