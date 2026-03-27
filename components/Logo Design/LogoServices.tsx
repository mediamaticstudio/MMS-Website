'use client'
import {
  Hexagon, Layers, Smile, Shield, Type, Image, AlignCenter, ArrowRight, Sparkles
} from 'lucide-react'

const services = [
  {
    icon: Hexagon,
    title: 'Abstract Mark',
    description:
      'A unique line of geometric shapes and visual forms that reflects your brand in a creative way and grants your business a contemporary and adaptable image.',
  },
  {
    icon: Layers,
    title: 'Combination Mark',
    description:
      'A combination of symbols and text forming a balanced brand image that is easy to remember and easy to recognize.',
  },
  {
    icon: Smile,
    title: 'Mascot Logo',
    description:
      'Illustrated characters that provide your brand character and desire to customers, making them perfect for businesses that aim at high customer interest.',
  },
  {
    icon: Shield,
    title: 'Emblem Logo',
    description:
      'Text and symbol combinations in the form of a badge or seal to form a classic and authoritative branding logo for traditional or professional businesses.',
  },
  {
    icon: Type,
    title: 'Letter Mark',
    description:
      'Emphasize initials or shortened names of your company, to provide a simple and business-like identity that works well with long company names.',
  },
  {
    icon: Image,
    title: 'Pictorial Mark',
    description:
      'Familiar symbols or icons that visually identify your brand, making customers have an immediate association with your company.',
  },
  {
    icon: AlignCenter,
    title: 'Word Mark',
    description:
      'Make your brand name more impactful by using innovative typography to ensure that the brand is remembered well with a simple and effective design.',
  },
]

export default function LogoServices() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-[350px] h-[350px] bg-yellow/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-tag mx-auto w-fit">
            <Sparkles size={14} className="text-burgundy" />
            Logo Services
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-burgundy-dark mb-4">
            Most Wanted Logo Design
            <span className="block italic text-gradient">Services from Our Company</span>
          </h2>
          <div className="divider-yellow mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.slice(0, 6).map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white border border-offwhite-dark rounded-3xl p-8 card-hover hover:border-burgundy/20 hover:shadow-2xl hover:shadow-burgundy/8 cursor-pointer"
              >
                <div className="icon-wrap mb-6">
                  <Icon size={26} />
                </div>
                <h3 className="font-display font-bold text-xl text-burgundy-dark mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-burgundy/60 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-burgundy font-body font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mb-12">
          {(() => {
            const lastService = services[6];
            const Icon = lastService.icon;
            return (
              <div className="group bg-white border border-offwhite-dark rounded-3xl p-8 card-hover hover:border-burgundy/20 hover:shadow-2xl hover:shadow-burgundy/8 cursor-pointer max-w-sm w-full">
                <div className="icon-wrap mb-6">
                  <Icon size={26} />
                </div>
                <h3 className="font-display font-bold text-xl text-burgundy-dark mb-3">
                  {lastService.title}
                </h3>
                <p className="font-body text-sm text-burgundy/60 leading-relaxed mb-4">
                  {lastService.description}
                </p>
                <div className="flex items-center gap-2 text-burgundy font-body font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            );
          })()}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#contact" className="btn-primary mx-auto w-fit">
            <Sparkles size={18} className="text-yellow" />
            Get New Logo Design
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
