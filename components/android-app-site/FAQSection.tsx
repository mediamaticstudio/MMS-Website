"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "How long does it take to build an Android app?",
    a: "Timeline varies based on features and complexity. Simple apps may take a few weeks, while feature-rich applications can take six months or more. We provide a clear estimate during discovery.",
  },
  {
    q: "Do you provide custom Android mobile app development solutions?",
    a: "Yes — we prioritize transparency, clarity, and collaboration throughout the entire custom development process. Every app is built to your specific business requirements.",
  },
  {
    q: "Which industries do you serve for Android app development?",
    a: "We work across 14+ industries including finance, healthcare, retail, eCommerce, logistics, education, entertainment, real estate, gaming, and more.",
  },
  {
    q: "Will you help with app testing, maintenance, and future upgrades?",
    a: "Absolutely. MediaMatic provides ongoing support and maintenance even after your app is published — including bug fixes, feature enhancements, and OS compatibility updates.",
  },
  {
    q: "How do you ensure app performance, security, and scalability?",
    a: "We use multi-factor authentication, secure credential storage following Google's guidelines, and build apps with scalability baked in from the architecture stage.",
  },
  {
    q: "Do you offer post-launch support and Play Store deployment assistance?",
    a: "Yes — we handle the full deployment process and provide post-launch support to keep your app secure, up-to-date, and running optimally.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 px-12" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="grid gap-20" style={{ gridTemplateColumns: "0.9fr 1.1fr" }}>

          {/* ── Left sticky panel ── */}
          <div className="sticky top-10 self-start">
            <div className="section-label section-label-light inline-flex mb-5">
              <span
                className="inline-block w-4 h-0.5 rounded"
                style={{ background: "var(--burgundy)" }}
              />
              Got Questions?
            </div>

            <h2
              className="font-display font-black leading-[1.1] tracking-[-1px] mb-6"
              style={{
                fontSize: "clamp(34px, 3.5vw, 52px)",
                color: "var(--burgundy)",
              }}
            >
              Frequently
              <br />
              <span style={{ color: "var(--gold)" }}>Asked</span>
              <br />
              Questions
            </h2>

            <p
              className="text-[15px] leading-[1.8] mb-9 max-w-[320px]"
              style={{ color: "#6b4045", fontFamily: "var(--font-dm-sans)" }}
            >
              Everything you need to know about working with MediaMatic on your
              Android project.
            </p>

            {/* Contact card */}
            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-xl p-5 transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--burgundy)" }}
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--gold)" }}
              >
                <MessageCircleQuestion
                  size={22}
                  strokeWidth={1.8}
                  color="var(--burgundy)"
                />
              </div>
              <div>
                <div
                  className="text-[14px] font-bold mb-0.5"
                  style={{ color: "var(--cream)" }}
                >
                  Still have questions?
                </div>
                <div
                  className="text-[13px]"
                  style={{
                    color: "rgba(250,243,224,0.65)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Contact us for a free consultation
                </div>
              </div>
            </Link>
          </div>

          {/* ── Right accordion ── */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: open === i ? "var(--burgundy)" : "#fff",
                  border: "2px solid",
                  borderColor:
                    open === i ? "var(--burgundy)" : "rgba(101,43,50,0.1)",
                  boxShadow:
                    open === i ? "0 10px 30px rgba(101,43,50,0.2)" : "none",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center gap-4 text-left px-6 py-[22px] bg-transparent border-none cursor-pointer"
                >
                  <span
                    className="font-display font-bold text-[16px] leading-snug transition-colors duration-300"
                    style={{
                      color:
                        open === i ? "var(--gold)" : "var(--burgundy)",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="w-[34px] h-[34px] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                    style={{
                      background:
                        open === i
                          ? "var(--gold)"
                          : "rgba(101,43,50,0.08)",
                    }}
                  >
                    {open === i ? (
                      <Minus size={16} strokeWidth={2.5} color="var(--burgundy)" />
                    ) : (
                      <Plus size={16} strokeWidth={2.5} color="var(--burgundy)" />
                    )}
                  </div>
                </button>

                {open === i && (
                  <div
                    className="px-6 pb-6 text-[15px] leading-[1.8]"
                    style={{
                      color: "rgba(250,243,224,0.78)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
