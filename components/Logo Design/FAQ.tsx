'use client'
import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react'

const faqs = [
  {
    question: 'Can you create a custom logo that truly represents my brand?',
    answer:
      'Yes. We are the specialists that create tailor-made logos depending on your brand worth, industry and target market with an objective of possessing a distinctive and effective identification.',
  },
  {
    question: 'Can I request revisions if I want changes to the logo design?',
    answer:
      'Absolutely. You can make changes to your revision, and you can make the revision until the logo appears just like the one you wanted it to appear like.',
  },
  {
    question: 'Will my logo be suitable for websites, social media, and print materials?',
    answer:
      'Yes. The services of our logo design would offer resizable and versatile files that can be utilized on a webpage, social media, marketing literature, and print applications.',
  },
  {
    question: 'Can you help me if I only have a basic idea for my logo?',
    answer:
      'Of course. You may not have any fancy idea but our designers will take you through the process and produce a logo design which will actualize your idea.',
  },
  {
    question: 'Do you offer logo redesign services for existing businesses?',
    answer:
      'Yes. Another service we offer to businesses is the process of refreshing or modernizing their current logos in such a way that their brand awareness is not lost but rather enhanced by the overall amount of visual appeal.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-yellow/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-2">
            <div className="section-tag">
              <HelpCircle size={14} className="text-burgundy" />
              FAQ
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-burgundy-dark mb-4 leading-tight">
              Got Questions?
              <span className="block italic text-gradient">We've Got Answers.</span>
            </h2>
            <div className="divider-yellow" />
            <p className="font-body text-burgundy/60 leading-relaxed mb-8">
              Everything you need to know about our logo design process. Can't find the answer? Just contact us.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-yellow/15 text-burgundy border border-yellow/30 font-body font-semibold px-6 py-3 rounded-2xl hover:bg-yellow hover:border-yellow transition-all duration-300"
            >
              <MessageSquare size={18} className="text-burgundy" />
              Ask a Question
            </a>
          </div>

          {/* Right */}
          <div className="lg:col-span-3 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'border-burgundy/20 bg-white shadow-xl shadow-burgundy/6'
                    : 'border-offwhite-dark bg-white/60 hover:border-burgundy/15'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span
                    className={`font-body font-semibold text-base leading-tight transition-colors ${
                      openIndex === index ? 'text-burgundy' : 'text-burgundy-dark'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-burgundy text-offwhite rotate-180'
                        : 'bg-burgundy/10 text-burgundy group-hover:bg-burgundy/20'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-burgundy/10 mb-4" />
                    <p className="font-body text-sm text-burgundy/65 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
