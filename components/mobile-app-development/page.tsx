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
    'MediaMatic builds next-gen iOS, Android & Flutter apps powered by AI. 200+ global projects, 10+ years experience. Get a free consultation today.',
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
