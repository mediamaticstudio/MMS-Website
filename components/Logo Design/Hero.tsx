'use client'
import { ArrowRight, Sparkles, Star, Zap, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Large decorative circle */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-burgundy/8 to-burgundy/3 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-yellow/10 to-yellow/5 blur-3xl pointer-events-none" />

      {/* Floating dots grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-burgundy/15"
            style={{
              left: `${(i % 6) * 18 + 4}%`,
              top: `${Math.floor(i / 6) * 25 + 10}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            {/* Tag */}
            <div className="section-tag">
              <Sparkles size={14} className="text-[#652b32]" />
              Innovative Logo Design Company
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 text-burgundy">
              Modernize
              <span className="block italic text-gradient">Your Business</span>
              <span className="block">Identity.</span>
            </h1>

            {/* Divider */}
            <div className="divider-yellow" />

            {/* Subtitle */}
            <p className="font-body text-lg text-burgundy/70 leading-relaxed mb-10 max-w-lg">
              Mediamatic Studio is a reliable Logo Design Company that has been involved in assisting companies to create a powerful and recognizable brand. Our professional designers will produce a logo design, which depicts your vision, values and market identity.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                <Zap size={18} className="text-yellow" />
                Start Logo Designing
                <ArrowRight size={16} />
              </a>
              <a href="#process" className="btn-outline">
                <Star size={16} />
                How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-burgundy/10">
              {[
                { number: '500+', label: 'Logos Created' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '12+', label: 'Industries Served' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-black text-3xl text-burgundy">{stat.number}</p>
                  <p className="font-body text-sm text-burgundy/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative hidden lg:block">
            {/* Main Logo Display Card */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central large card */}
              <div className="absolute inset-8 bg-white rounded-[3rem] shadow-2xl shadow-burgundy/20 border border-offwhite-dark flex items-center justify-center overflow-hidden">
                <div className="relative">
                  {/* Logo mockup */}
                  <div className="w-40 h-40 bg-gradient-to-br from-burgundy to-burgundy-dark rounded-3xl flex items-center justify-center shadow-2xl animate-float">
                    <Sparkles size={64} className="text-yellow" />
                  </div>
                  <div className="text-center mt-6">
                    <p className="font-display font-bold text-2xl text-burgundy-dark">Your Brand</p>
                    <p className="font-body text-sm text-burgundy/50 mt-1">Logo Design Concept</p>
                  </div>
                </div>
              </div>

              {/* Floating tag cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-offwhite-dark animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-burgundy rounded-xl flex items-center justify-center">
                  <Award size={18} className="text-yellow" />
                </div>
                <div>
                  <p className="font-body font-bold text-burgundy-dark text-sm">Premium Quality</p>
                  <p className="font-body text-xs text-burgundy/50">Every Design</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-yellow rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-10 h-10 bg-burgundy rounded-xl flex items-center justify-center">
                  <Zap size={18} className="text-yellow" />
                </div>
                <div>
                  <p className="font-body font-bold text-burgundy-dark text-sm">Fast Delivery</p>
                  <p className="font-body text-xs text-burgundy/70">Quick Turnaround</p>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 border border-offwhite-dark animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 bg-yellow/20 rounded-xl flex items-center justify-center mb-2">
                  <Star size={18} className="text-burgundy" />
                </div>
                <p className="font-display font-bold text-2xl text-burgundy">5.0</p>
                <p className="font-body text-xs text-burgundy/50">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-offwhite-dark/30 to-transparent pointer-events-none" />
    </section>
  )
}
