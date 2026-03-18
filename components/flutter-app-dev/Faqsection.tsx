"use client";
import { useState } from "react";

const faqs = [
    {
        q: "What is Flutter app development, and how does it work?",
        a: "Flutter is Google's open-source framework for building natively compiled apps for mobile, web, and desktop from a single codebase using the Dart language. It's ideal for 2D mobile apps running on Android and iOS, as well as web and desktop platforms.",
    },
    {
        q: "Why should I choose Flutter for my mobile app project?",
        a: "Flutter is a perfect choice for mobile applications. Google developed it using modern approaches to create elegant apps for both Android and iOS. Its single codebase reduces development time and costs significantly.",
    },
    {
        q: "Can Flutter apps run on both Android and iOS?",
        a: "Yes! Our Flutter developers can build Android, iOS, web, and desktop apps using the same codebase for consistency and optimal performance across all platforms.",
    },
    {
        q: "How long does it take to build a Flutter app?",
        a: "A simple app may take 4–8 weeks; a feature-rich or enterprise app may take 3–6 months, depending on UI complexity, API integrations, and testing cycles. We streamline this with our custom Flutter development services.",
    },
    {
        q: "Is Flutter suitable for startups and small businesses?",
        a: "Absolutely. We work with companies of all sizes. Whether you're a startup or an established brand, our Flutter development services are customized to your stage and goals.",
    },
    {
        q: "Will my Flutter app be scalable as my business grows?",
        a: "Yes. We build scalable backend architecture and modular code that evolves with your business, ensuring your app handles growth without performance compromises.",
    },
    {
        q: "Do you provide support and maintenance after launch?",
        a: "Yes. We provide tiered post-launch support (L1, L2, L3) that includes timely bug fixes, security patches, OS updates, and performance optimization to keep your app running smoothly.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="faq" className="faq-section">
            <div className="faq-inner">
                <div className="faq-header">
                    <div className="section-label">FAQ</div>
                    <h2 className="section-title">
                        Frequently Asked <span>Questions</span>
                    </h2>
                    <p className="section-sub">
                        Everything you need to know about our Flutter development process.
                    </p>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`faq-item ${open === i ? "faq-open" : ""}`}
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <div className="faq-question">
                                <span>{faq.q}</span>
                                <div className={`faq-icon ${open === i ? "rotated" : ""}`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .faq-section {
          background: #652b32;
          padding: 6rem 2rem;
        }
        .faq-inner {
          max-width: 820px;
          margin: 0 auto;
        }
        .faq-header {
          margin-bottom: 3rem;
        }
        .section-label {
          display: inline-block;
          background: rgba(245,197,24,0.15);
          border: 1px solid rgba(245,197,24,0.3);
          color: #f5c518;
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #faf3e0;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .section-title span { color: #f5c518; }
        .section-sub {
          color: rgba(250,243,224,0.65);
          font-size: 1.05rem;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .faq-item {
          background: rgba(250,243,224,0.06);
          border: 1px solid rgba(250,243,224,0.12);
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s, background 0.3s;
        }
        .faq-item:hover {
          border-color: rgba(245,197,24,0.3);
        }
        .faq-open {
          border-color: rgba(245,197,24,0.4) !important;
          background: rgba(245,197,24,0.05) !important;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          gap: 1rem;
          font-weight: 600;
          color: #faf3e0;
          font-size: 0.98rem;
          line-height: 1.5;
        }
        .faq-icon {
          color: #f5c518;
          flex-shrink: 0;
          transition: transform 0.3s;
        }
        .faq-icon.rotated {
          transform: rotate(180deg);
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.3s;
        }
        .faq-open .faq-answer {
          max-height: 200px;
          padding-bottom: 1.25rem;
        }
        .faq-answer p {
          padding: 0 1.5rem;
          color: rgba(250,243,224,0.7);
          font-size: 0.92rem;
          line-height: 1.7;
        }
      `}</style>
        </section>
    );
}