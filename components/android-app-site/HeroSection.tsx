"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Zap, Globe, Star, Building2, ArrowRight, ChevronDown } from "lucide-react";
import DigitalAuditModal from "@/components/DigitalAuditModal";

const stats = [
  { number: "8+", label: "Years Experience", Icon: Zap },
  { number: "200+", label: "Global Projects", Icon: Globe },
  { number: "98%", label: "Client Satisfaction", Icon: Star },
  { number: "14+", label: "Industries Served", Icon: Building2 },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll<HTMLElement>(".hero-item");
    items?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 130 * i);
    });
  }, []);

  return (
    <>
      <DigitalAuditModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "var(--burgundy)" }}
      >
        {/* ── Background Layers ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 -right-24 w-[650px] h-[650px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(245,197,24,0.14) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-36 -left-36 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%)",
            }}
          />
          {/* Dot grid */}
          <div className="absolute inset-0 dot-grid" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-[1260px] mx-auto w-full px-12 py-24 grid grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div
              className="hero-item inline-flex items-center gap-2.5 rounded px-[18px] py-2 mb-9"
              style={{
                background: "rgba(245,197,24,0.13)",
                border: "1px solid rgba(245,197,24,0.45)",
              }}
            >
              <span
                className="w-[7px] h-[7px] rounded-full animate-dot-pulse"
                style={{ background: "var(--gold)" }}
              />
              <span
                className="text-[11px] tracking-[2.5px] uppercase font-bold"
                style={{ color: "var(--gold)", fontFamily: "var(--font-dm-sans)" }}
              >
                Top Android App Development Co.
              </span>
            </div>

            {/* Heading */}
            <h1
              className="hero-item font-display font-black leading-[1.06] tracking-[-2px] mb-2"
              style={{ fontSize: "clamp(44px, 5.5vw, 74px)", color: "var(--cream)" }}
            >
              Build Android
            </h1>
            <h1
              className="hero-item font-display font-black leading-[1.06] tracking-[-2px] mb-7"
              style={{ fontSize: "clamp(44px, 5.5vw, 74px)", color: "var(--gold)" }}
            >
              Apps That Win.
            </h1>

            {/* Sub-text */}
            <p
              className="hero-item text-lg leading-[1.85] mb-12 max-w-[480px] font-normal"
              style={{ color: "rgba(250,243,224,0.72)", fontFamily: "var(--font-dm-sans)" }}
            >
              MediaMatic crafts cutting-edge Android applications — feature-rich,
              secure, and built for scale with over a decade of expertise.
            </p>

            {/* Buttons */}
            <div className="hero-item flex flex-wrap gap-4">
              {/* ── CTA opens modal ── */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 rounded px-9 py-[17px] text-[15px] font-extrabold transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02]"
                style={{
                  background: "var(--gold)",
                  color: "#3a1518",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Get Free Consultation
                <ArrowRight size={17} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Right — Stat Cards */}
          <div className="hero-item grid grid-cols-2 gap-4">
            {stats.map(({ number, label, Icon }, i) => (
              <div
                key={label}
                className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 cursor-default"
                style={
                  i === 0
                    ? {
                      background:
                        "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                    }
                    : {
                      background: "rgba(250,243,224,0.05)",
                      border: "1px solid rgba(245,197,24,0.2)",
                    }
                }
              >
                <div
                  className="w-11 h-11 rounded-[10px] flex items-center justify-center mx-auto mb-3.5"
                  style={{
                    background:
                      i === 0 ? "rgba(101,43,50,0.12)" : "rgba(245,197,24,0.12)",
                  }}
                >
                  <Icon
                    size={22}
                    strokeWidth={2}
                    color={i === 0 ? "var(--burgundy)" : "var(--gold)"}
                  />
                </div>
                <div
                  className="font-display font-black text-[40px] leading-none mb-2"
                  style={{ color: i === 0 ? "var(--burgundy)" : "var(--gold)" }}
                >
                  {number}
                </div>
                <div
                  className="text-[11.5px] uppercase tracking-[1px] font-semibold"
                  style={{
                    color:
                      i === 0 ? "rgba(101,43,50,0.7)" : "rgba(250,243,224,0.6)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll cue ── */}
        <div className="absolute bottom-8 left-1/2 animate-bounce-scroll flex flex-col items-center gap-1.5">
          <span
            className="text-[10px] tracking-[2.5px] uppercase font-bold"
            style={{ color: "rgba(245,197,24,0.55)" }}
          >
            Scroll
          </span>
          <ChevronDown size={15} color="rgba(245,197,24,0.55)" />
        </div>
      </section>
    </>
  );
}