"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What are flyer design services and how do they work for businesses?",
    answer:
      "Designing flyers entails designing captivating promotional aids that are appealing to the eye, as well as conveying your message. These services incorporate design, content development and optimization of layout to have maximum impact.",
  },
  {
    question: "How does professional flyer design help promote my business effectively?",
    answer:
      "The benefits of professional flyer design is that it will help establish your brand image, capture the interest and send a clear message that will allow you to engage and convert more.",
  },
  {
    question: "Can I get flyer design online for my business promotions?",
    answer:
      "Yes, there are numerous firms that provide flyer designing services over the internet and in this regard, you can work at a distance and get quality designs to suit your requirements.",
  },
  {
    question: "How does a flyer marketing strategy help attract more customers?",
    answer:
      "An effective flyer marketing strategy is based on the appropriate choice of the target audience, the use of powerful messages, and successful distribution to attract more customers.",
  },
  {
    question: "Do flyer design companies also provide flyer printing and distribution services?",
    answer:
      "Yes, there are a lot of flyers design companies who offer services like designing, printing and distributing flyers to complete all marketing requirements.",
  },
  {
    question: "Why choose Mediamaticstudio as the best flyer distribution company for business promotion?",
    answer:
      "Mediamaticstudio is a trustworthy business ally to conduct successful business promotion with a creative design, strategic marketing solutions, and credible distribution services.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      style={{
        background: "#faf3e0",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Stripe bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "6px",
          background: "repeating-linear-gradient(90deg, #652b32 0px, #652b32 24px, #f5c518 24px, #f5c518 48px)",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: "80px", alignItems: "start" }}>
          {/* LEFT */}
          <div style={{ position: "sticky", top: "80px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(101,43,50,0.08)",
                color: "#652b32",
                padding: "10px 20px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "24px",
                border: "1.5px solid rgba(101,43,50,0.12)",
              }}
            >
              <HelpCircle size={14} />
              Got Questions?
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                fontWeight: 900,
                color: "#652b32",
                lineHeight: 1.12,
                marginBottom: "20px",
                letterSpacing: "-0.025em",
              }}
            >
              Frequently{" "}
              <span
                style={{
                  background: "#f5c518",
                  padding: "0 12px",
                  borderRadius: "8px",
                  display: "inline-block",
                }}
              >
                Asked
              </span>
              <br />
              Questions
            </h2>

            <p
              style={{
                color: "rgba(101,43,50,0.7)",
                fontSize: "0.97rem",
                lineHeight: 1.8,
                marginBottom: "36px",
                fontWeight: 400,
              }}
            >
              Everything you need to know about our flyer design services and
              how we can help your business grow.
            </p>

            {/* Contact card */}
            <div
              style={{
                background: "#652b32",
                borderRadius: "18px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  background: "rgba(245,197,24,0.18)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MessageCircle size={22} color="#f5c518" />
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "#faf3e0",
                }}
              >
                Still have questions?
              </div>
              <div style={{ color: "rgba(250,243,224,0.6)", fontSize: "0.86rem", lineHeight: 1.6 }}>
                Our team is ready to help you with any queries.
              </div>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  background: "#f5c518",
                  color: "#652b32",
                  padding: "12px 20px",
                  borderRadius: "999px",
                  fontWeight: 800,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")
                }
              >
                <HelpCircle size={15} color="#652b32" />
                Contact Us
              </a>
            </div>
          </div>

          {/* RIGHT accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    background: isOpen ? "#652b32" : "#fff",
                    border: `2px solid ${isOpen ? "#652b32" : "rgba(101,43,50,0.1)"}`,
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "all 0.25s",
                    boxShadow: isOpen ? "0 10px 40px rgba(101,43,50,0.2)" : "none",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      padding: "22px 28px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <div
                        style={{
                          width: "34px",
                          height: "34px",
                          background: isOpen ? "#f5c518" : "rgba(101,43,50,0.08)",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "background 0.25s",
                        }}
                      >
                        <HelpCircle size={16} color={isOpen ? "#652b32" : "#652b32"} />
                      </div>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: isOpen ? "#faf3e0" : "#652b32",
                          lineHeight: 1.4,
                          letterSpacing: "-0.01em",
                          transition: "color 0.25s",
                        }}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        background: isOpen ? "#f5c518" : "rgba(101,43,50,0.08)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "transform 0.3s, background 0.25s",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <ChevronDown size={16} color={isOpen ? "#652b32" : "#652b32"} />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 28px 26px 76px",
                        color: "rgba(250,243,224,0.8)",
                        fontSize: "0.95rem",
                        lineHeight: 1.78,
                        fontWeight: 400,
                        animation: "faqIn 0.2s ease",
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes faqIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
