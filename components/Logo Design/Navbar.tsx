'use client'
import { useState, useEffect } from 'react'
import { Palette, Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-offwhite/90 backdrop-blur-xl shadow-lg shadow-burgundy/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-burgundy rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Palette size={20} className="text-yellow" />
          </div>
          <div>
            <span className="font-display font-bold text-xl text-burgundy-dark block leading-none">
              Mediamatic
            </span>
            <span className="font-body text-xs text-burgundy/60 font-medium tracking-widest uppercase">
              Studio
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body font-medium text-burgundy/70 hover:text-burgundy transition-colors duration-200 text-sm tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="btn-primary text-sm py-3 px-6">
            <Sparkles size={16} className="text-yellow" />
            Start Your Project
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 bg-burgundy/10 rounded-xl flex items-center justify-center text-burgundy hover:bg-burgundy hover:text-offwhite transition-all duration-200"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-offwhite/95 backdrop-blur-xl border-t border-burgundy/10 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body font-medium text-burgundy py-2 border-b border-burgundy/10 flex items-center justify-between"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary justify-center mt-2">
              <Sparkles size={16} className="text-yellow" />
              Start Your Project
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
