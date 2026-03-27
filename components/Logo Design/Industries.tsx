'use client'
import {
  HeartPulse, Landmark, ShoppingCart, Plane, GraduationCap, Truck, Tv2, Home,
  Car, Umbrella, Factory, ArrowRight, Building2
} from 'lucide-react'

const industries = [
  {
    icon: HeartPulse,
    title: 'Healthcare & Medical',
    description:
      'Professional and credible logos conveying care, trust, and medical attention to hospitals, clinics, and healthcare startups.',
  },
  {
    icon: Landmark,
    title: 'Finance & Banking',
    description:
      'Logos reflecting trust, stability and professionalism to enhance the credibility of the brand in the financial market.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Online Retail',
    description:
      'Contemporary and interactive logos contributing to the development of a recognizable brand in online business.',
  },
  {
    icon: Plane,
    title: 'Travel & Tourism',
    description:
      'Creative, captivating logos entailing adventure, exploration, and excitement for tourism companies and travel agencies.',
  },
  {
    icon: GraduationCap,
    title: 'Education & E-Learning',
    description:
      'Motivational logos for educational institutions and online learning websites portraying learning, development, and authority.',
  },
  // {
  //   icon: Truck,
  //   title: 'Logistics & Transportation',
  //   description:
  //     'Logos highlighting speed, efficiency, and reliability to help transportation companies build a powerful professional image.',
  // },
  {
    icon: Tv2,
    title: 'Media & Entertainment',
    description:
      'Visually dynamic logos attracting creativity and audience involvement in media companies, production houses, and entertainment brands.',
  },
  {
    icon: Home,
    title: 'Real Estate & Property',
    description:
      'A combination of modernity and professionalism, assisting property businesses to gain confidence among clients and investors.',
  },
  {
    icon: Car,
    title: 'Automotive & Mobility',
    description:
      'Logos bringing out the theme of performance, innovation, and reliability portraying speed, technology and modern mobility.',
  },
  {
    icon: Umbrella,
    title: 'Insurance & Risk Management',
    description:
      'Insurance logos centered on security, stability, and reliability aiding brands to create high credibility with clients.',
  },
  {
    icon: Factory,
    title: 'Manufacturing & Industrial',
    description:
      'Mighty logos manifesting innovation, reliability and industrial excellence conveying power, accuracy and skill.',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="py-28 bg-offwhite-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-burgundy/15 to-transparent" />
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-tag mx-auto w-fit">
            <Building2 size={14} className="text-burgundy" />
            Industries
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-burgundy-dark mb-4">
            Our Design Expertise Serves
            <span className="block italic text-gradient">Businesses in These Industries</span>
          </h2>
          <div className="divider-yellow mx-auto" />
        </div>

        {/* Grid */}
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-14">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="group bg-white rounded-2xl p-6 border border-offwhite-dark hover:border-burgundy/20 hover:shadow-xl hover:shadow-burgundy/6 transition-all duration-300"
              >
                <div className="icon-wrap mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-body font-bold text-sm text-burgundy-dark mb-2 leading-tight">
                  {industry.title}
                </h3>
                <p className="font-body text-xs text-burgundy/55 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#contact" className="btn-primary">
            <Building2 size={18} className="text-yellow" />
            Design a Logo for My Business
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
