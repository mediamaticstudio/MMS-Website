'use client'
import { ClipboardList, Lightbulb, Paintbrush2, CheckCircle2, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Gather Your Requirements',
    description:
      'We start by learning about your business objectives, market, and company persona. The discovery stage will assist us in designing a logo for your business that conveys your message and is in line with your overall brand strategy.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Present Logo Concepts',
    description:
      'Our design department comes up with various logo design options according to your demands. These ideas present various directions in terms of visuals so that you can experiment with the creative possibilities.',
  },
  {
    icon: Paintbrush2,
    step: '03',
    title: 'Custom Logo Design',
    description:
      'We come up with a unique branding logo that perfectly matches your brand identity. Our designers combine creativity, typography, color psychology, and industry knowledge to create a logo design that presents your business in a professional and impactful manner.',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Refine and Finalize the Design',
    description:
      'When you select an idea, we optimize the information with comments and corrections. We aspire to come up with a professional logo that will satisfy you and work in the digital and print media.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-burgundy/20 to-transparent" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-tag mx-auto w-fit">
            <Paintbrush2 size={14} className="text-burgundy" />
            What We Do
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-burgundy-dark mb-4">
            A Creative Logo Design
            <span className="block italic text-gradient">Company Process</span>
          </h2>
          <div className="divider-yellow mx-auto" />
          <p className="font-body text-burgundy/60 max-w-xl mx-auto leading-relaxed">
            Four simple steps to transform your brand vision into a powerful, memorable logo.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%-1px)] right-[12.5%] h-0.5 bg-gradient-to-r from-burgundy/20 via-yellow/50 to-burgundy/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="group relative">
                  {/* Step number badge */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white border-2 border-burgundy/15 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-burgundy/40 group-hover:shadow-burgundy/10 transition-all duration-300 relative z-10">
                      <Icon size={28} className="text-burgundy group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="absolute -top-3 -right-3 w-7 h-7 bg-yellow rounded-full flex items-center justify-center font-mono text-xs font-bold text-burgundy-dark shadow-md">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-burgundy-dark mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-burgundy/65 leading-relaxed">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={20}
                      className="hidden lg:block absolute -right-4 top-6 text-yellow opacity-60"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
