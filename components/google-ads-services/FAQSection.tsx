"use client";
import { useState } from "react";

const faqs = [
    {
        q: "How does a Google Ads manager improve campaign performance and ROI?",
        a: "A Google Ads manager continuously monitors and optimizes campaigns — adjusting bids, refining targeting, testing ad variations, and reallocating budget to high-performing ads. This data-driven approach reduces wasted spend and maximizes return on every advertising dollar.",
    },
    {
        q: "Why does my business need the best Google Ads agency for online advertising?",
        a: "A top Google Ads agency brings expertise, superior targeting capabilities, and ongoing optimization that businesses cannot achieve in-house. This ensures you reach the right audience, waste less on underperforming ads, and generate more leads and sales.",
    },
    {
        q: "How does a Google advertising agency create an effective Google Ads marketing strategy?",
        a: "The agency analyses your business objectives, audience behaviour, and competitor tactics, then builds a tailored strategy including keyword targeting, compelling ad copy, and continuous optimization to drive measurable results.",
    },
    {
        q: "What is the role of Google Ads Business Manager in campaign management?",
        a: "Google Ads Business Manager assists businesses in structuring advertising accounts, running multiple campaigns simultaneously, and regulating user access — making large-scale campaign management organized and efficient.",
    },
    {
        q: "How can a Google marketing agency help generate more leads and sales?",
        a: "Through targeted campaigns, advanced keyword strategies, and optimized landing pages, a Google marketing agency attracts potential customers at the right moment and converts them into qualified leads or paying customers.",
    },
    {
        q: "What are the main benefits of hiring a Google advertising company?",
        a: "Key benefits include expert campaign management, data-driven optimization, reduced budget wastage, transparent reporting, and a proven methodology focused on delivering measurable leads, sales, and growth.",
    },
    {
        q: "What services does Mediamaticstudio offer for Google Ads management?",
        a: "Mediamaticstudio provides keyword research, campaign setup and management, ad copywriting, landing page optimization, remarketing campaigns, bid management, A/B testing, competitor analysis, and detailed performance reporting.",
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
                        Everything you need to know about our Google Ads management services.
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
                                <div className={`faq-chevron ${open === i ? "rotated" : ""}`}>
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
          background: #faf3e0;
          padding: 6rem 2rem;
        }
        .faq-inner { max-width: 820px; margin: 0 auto; }
        .faq-header { margin-bottom: 3rem; }
        .section-label {
          display: inline-block;
          background: rgba(101,43,50,0.08);
          color: #652b32;
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #652b32;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .section-title span {
          color: #f5c518;
          -webkit-text-stroke: 1px #652b32;
        }
        .section-sub {
          color: rgba(101,43,50,0.6);
          font-size: 1.05rem;
          line-height: 1.65;
        }
        .faq-list { display: flex; flex-direction: column; gap: 0.75rem; }
        .faq-item {
          background: #fff;
          border: 1px solid rgba(101,43,50,0.12);
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .faq-item:hover { border-color: rgba(101,43,50,0.25); }
        .faq-open {
          border-color: rgba(245,197,24,0.5) !important;
          box-shadow: 0 6px 20px rgba(101,43,50,0.07);
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          gap: 1rem;
          font-weight: 600;
          color: #652b32;
          font-size: 0.97rem;
          line-height: 1.5;
        }
        .faq-chevron {
          color: #652b32;
          flex-shrink: 0;
          transition: transform 0.3s;
          opacity: 0.6;
        }
        .faq-chevron.rotated {
          transform: rotate(180deg);
          opacity: 1;
          color: #f5c518;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .faq-open .faq-answer { max-height: 220px; }
        .faq-answer p {
          padding: 0 1.5rem 1.4rem;
          color: rgba(101,43,50,0.65);
          font-size: 0.91rem;
          line-height: 1.7;
        }
      `}</style>
        </section>
    );
}