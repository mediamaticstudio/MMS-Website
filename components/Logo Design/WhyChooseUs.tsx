'use client'
import { Eye, Fingerprint, BarChart2, Clock, ArrowRight, Sparkles } from 'lucide-react'

const reasons = [
  {
    icon: Eye,
    title: 'Creative Vision',
    description:
      'We have designers who come with new ideas and artistic skills to each project. We make basic ideas into effective images that build your stronger branding logo and make your business more noticeable.',
  },
  {
    icon: Fingerprint,
    title: 'Unique Identity',
    description:
      'We are oriented to newness and the brand personality. Each of our logo designs is a unique design so that your brand receives a unique identity that the customers can immediately identify.',
  },
  {
    icon: BarChart2,
    title: 'Strategic Design',
    description:
      'Good logos are constructed using strategy. Our Logo design services offer both creativity and branding research in coming up with logos that attract your target audience and reflect the value of your business.',
  },
  {
    icon: Clock,
    title: 'Lasting Impact',
    description:
      'The designs that we make are designed to be relevant, scalable and attractive in websites, marketing materials, social media and packaging.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-burgundy relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-burgundy-light/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-burgundy-dark/40 blur-3xl pointer-events-none" />

      {/* Yellow accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <div className="section-tag bg-yellow/15 border-yellow/30">
              <Sparkles size={14} className="text-yellow" />
              <span className="text-yellow">Why Choose Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-offwhite leading-tight">
              Why You Should Choose
              <span className="block italic text-yellow">Our Logo Design Company</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start lg:self-auto flex items-center gap-3 bg-yellow text-burgundy-dark font-body font-bold px-8 py-4 rounded-full hover:bg-yellow-light transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-yellow/30 whitespace-nowrap"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-yellow/30 transition-all duration-400 card-hover"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-yellow/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow group-hover:scale-110 transition-all duration-300">
                <reason.icon size={26} className="text-yellow group-hover:text-burgundy-dark transition-colors duration-300" />
              </div>
              <h3 className="font-display font-bold text-xl text-offwhite mb-3">{reason.title}</h3>
              <p className="font-body text-sm text-offwhite/60 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow to-transparent opacity-60" />
    </section>
  )
}
