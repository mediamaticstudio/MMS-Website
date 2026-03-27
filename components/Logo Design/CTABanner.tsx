'use client'
import { Rocket, ArrowRight, Star } from 'lucide-react'

export default function CTABanner() {
  return (
    <section id="contact" className="py-20 bg-offwhite-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-light/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-light/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-burgundy/10 border border-burgundy/20 text-burgundy font-body font-semibold text-sm px-4 py-2 rounded-full mb-8">
          <Star size={14} className="text-burgundy" />
          Ready to Get Started?
        </div>

        <h2 className="font-display text-4xl md:text-6xl font-black text-burgundy-dark mb-6 leading-tight">
          Let's Build Your Brand
          <span className="block italic">Together.</span>
        </h2>

        <p className="font-body text-burgundy/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Transform your vision into a powerful, memorable logo that sets your business apart from the competition.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@mediamatic.studio"
            className="flex items-center gap-3 bg-burgundy text-offwhite font-body font-bold px-10 py-4 rounded-full hover:bg-burgundy-dark transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-burgundy/30"
          >
            <Rocket size={20} />
            Start Logo Designing
            <ArrowRight size={16} />
          </a>
          <a
            href="#process"
            className="flex items-center gap-3 bg-white/60 text-burgundy-dark border-2 border-burgundy/20 font-body font-bold px-10 py-4 rounded-full hover:bg-white hover:border-burgundy/40 transition-all duration-300 hover:scale-105"
          >
            <Star size={18} className="text-burgundy" />
            See Our Process
          </a>
        </div>
      </div>
    </section>
  )
}
