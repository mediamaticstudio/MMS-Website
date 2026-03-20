import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import WhyUsSection from './components/WhyUsSection'
import ProcessSection from './components/ProcessSection'
import IndustriesSection from './components/IndustriesSection'
import TechStackSection from './components/TechStackSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'

export const metadata = {
  title: 'Mobile App Development Company | MediaMatic',
  description:
    'Best Mobile App Development Company – MediaMatic specializing in next-generation mobile, web, and software products using AI across iOS, Android and Flutter.',
}

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <Navbar />
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
