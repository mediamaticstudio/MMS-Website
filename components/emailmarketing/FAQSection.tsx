"use client";
import { useState } from "react";

const faqs = [
    {
        q: "What are effective email marketing strategies for startups?",
        a: "Startups should focus on building a quality email list, segmenting subscribers, and personalizing content. Automated welcome emails, promotional campaigns, and consistent newsletters help cultivate leads and build brand trust from day one.",
    },
    {
        q: "What is the best email marketing service for a small business?",
        a: "The ideal service for small businesses combines strategic planning, creative content, automation, and performance monitoring. Partnering with professionals helps maximize campaigns and support engagement and conversions without overstretching internal resources.",
    },
    {
        q: "Is email marketing cost-effective for small businesses?",
        a: "Email marketing offers one of the highest ROI levels among digital channels. It requires relatively low investment and delivers a direct, measurable impact — boosting website traffic, generating leads, and improving customer retention.",
    },
    {
        q: "How can I use email marketing to grow my online business?",
        a: "Focus on quality content, market segmentation, and automation to send the right message at the right time. Regular campaigns paired with performance monitoring allow you to refine strategies and continuously improve results.",
    },
    {
        q: "How does MediamaticStudio's email marketing service help businesses grow?",
        a: "MediamaticStudio provides end-to-end strategic planning, creative email design, automation workflows, and performance optimization. Our holistic approach helps businesses engage better, generate leads, and develop lasting customer relationships.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="section-label">Got Questions?</div>
                <h2 className="section-heading">Frequently Asked Questions</h2>
                <p className="section-sub">
                    Everything you need to know about our email marketing services and how they can help
                    your business grow.
                </p>

                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <div
                            className={`faq-item ${open === i ? "faq-open" : ""}`}
                            key={i}
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <div className="faq-question">
                                <span>{faq.q}</span>
                                <span className="faq-toggle">{open === i ? "−" : "+"}</span>
                            </div>
                            {open === i && (
                                <div className="faq-answer">{faq.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .faq-section {
          background: #faf3e0;
          padding: 96px 24px;
        }
        .faq-container {
          max-width: 780px;
          margin: 0 auto;
        }
        .section-label {
          text-align: center;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #652b32;
          margin-bottom: 12px;
        }
        .section-heading {
          font-family: 'Georgia', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 700;
          color: #652b32;
          text-align: center;
          margin-bottom: 16px;
        }
        .section-sub {
          text-align: center;
          color: #6b4a2a;
          font-size: 1.05rem;
          max-width: 540px;
          margin: 0 auto 56px;
          line-height: 1.7;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          background: #fff;
          border: 1px solid rgba(101,43,50,0.12);
          border-radius: 12px;
          padding: 24px 28px;
          cursor: pointer;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .faq-item:hover,
        .faq-open {
          border-color: #652b32;
          box-shadow: 0 4px 16px rgba(101,43,50,0.1);
        }
        .faq-open {
          border-left: 4px solid #f5c518;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          font-family: 'Georgia', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #652b32;
        }
        .faq-toggle {
          flex-shrink: 0;
          font-size: 1.4rem;
          color: #f5c518;
          line-height: 1;
          margin-top: -2px;
        }
        .faq-answer {
          margin-top: 14px;
          font-size: 0.95rem;
          color: #5a4040;
          line-height: 1.75;
          border-top: 1px solid rgba(101,43,50,0.08);
          padding-top: 14px;
        }
      `}</style>
        </section>
    );
}