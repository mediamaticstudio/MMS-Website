'use client'
import { Palette, Mail, Phone, MapPin, ArrowUpRight, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-burgundy-dark text-offwhite pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-burgundy rounded-2xl flex items-center justify-center shadow-lg">
                <Palette size={22} className="text-yellow" />
              </div>
              <div>
                <p className="font-display font-bold text-xl text-offwhite">Mediamatic</p>
                <p className="font-body text-xs text-offwhite/40 tracking-widest uppercase">Studio</p>
              </div>
            </div>
            <p className="font-body text-offwhite/55 text-sm leading-relaxed max-w-xs mb-8">
              Mediamatic Studio is a reliable Logo Design Company that creates powerful and recognizable brand identities for businesses worldwide.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 bg-offwhite/8 rounded-xl flex items-center justify-center text-offwhite/50 hover:bg-yellow hover:text-burgundy-dark transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-bold text-offwhite mb-6 text-sm tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Services', 'Industries', 'Process', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-body text-sm text-offwhite/50 hover:text-yellow transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-bold text-offwhite mb-6 text-sm tracking-widest uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-yellow mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-offwhite/55">hello@mediamatic.studio</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-yellow mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-offwhite/55">+1 (800) 000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-offwhite/55">Creative Studio, Design District</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-offwhite/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-offwhite/35">
            © {new Date().getFullYear()} Mediamatic Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="font-body text-xs text-offwhite/35 hover:text-offwhite/70 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
