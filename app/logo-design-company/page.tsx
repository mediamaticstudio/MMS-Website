import { Metadata } from 'next'
import Hero from '@/components/Logo Design/Hero'
import Process from '@/components/Logo Design/Process'
import WhyChooseUs from '@/components/Logo Design/WhyChooseUs'
import LogoServices from '@/components/Logo Design/LogoServices'
import Industries from '@/components/Logo Design/Industries'
import CTABanner from '@/components/Logo Design/CTABanner'
import FAQ from '@/components/Logo Design/FAQ'

export const metadata: Metadata = {
  title: 'Mediamatic Studio | Innovative Logo Design Company',
  description: 'Mediamatic Studio is a reliable Logo Design Company that creates powerful, recognizable brand identities.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <WhyChooseUs />
      <LogoServices />
      <Industries />
      <CTABanner />
      <FAQ />
    </main>
  )
}
