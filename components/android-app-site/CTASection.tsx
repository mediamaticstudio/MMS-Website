"use client";

import Link from "next/link";
import { Trophy, Star, Zap, Building2, ArrowRight, PhoneCall } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const badges: { Icon: LucideIcon; stat: string; label: string }[] = [
  { Icon: Trophy,    stat: "200+", label: "Projects Delivered" },
  { Icon: Star,      stat: "98%",  label: "Client Satisfaction" },
  { Icon: Zap,       stat: "10+",  label: "Years of Expertise" },
  { Icon: Building2, stat: "14+",  label: "Industries Served" },
];

export default function CTASection() {
  return (
    <section className="py-28 px-12" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1260px] mx-auto">

        {/* ── Banner ── */}
        <div
          className="rounded-3xl px-[72px] py-20 relative overflow-hidden grid gap-16 items-center mb-12"
          style={{
            background: "var(--burgundy)",
            gridTemplateColumns: "1fr auto",
          }}
        >
          {/* BG decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full"
              style={{ border: "2px solid rgba(245,197,24,0.12)" }}
            />
            <div
              className="absolute -top-10 -right-10 w-[220px] h-[220px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-16 rounded-full"
              style={{
                left: "40%",
                width: "200px",
                height: "200px",
                border: "1px solid rgba(245,197,24,0.08)",
              }}
            />
            <div
              className="absolute top-0 h-full w-0.5"
              style={{
                left: "35%",
                background:
                  "linear-gradient(180deg, transparent, rgba(245,197,24,0.15), transparent)",
              }}
            />
          </div>

          {/* Left text */}
          <div className="relative z-10">
            <div className="section-label section-label-dark inline-flex mb-6">
              <span
                className="inline-block w-4 h-0.5 rounded"
                style={{ background: "var(--gold)" }}
              />
              Free Consultation
            </div>

            <h2
              className="font-display font-black leading-[1.1] tracking-[-1px] mb-5"
              style={{
                fontSize: "clamp(30px, 3.5vw, 52px)",
                color: "var(--cream)",
              }}
            >
              Ready to Turn Your Vision
              <br />
              Into a{" "}
              <span
                style={{
                  color: "var(--gold)",
                  textShadow: "0 0 40px rgba(245,197,24,0.4)",
                }}
              >
                Powerful App?
              </span>
            </h2>

            <p
              className="text-[17px] leading-[1.8] max-w-[520px]"
              style={{
                color: "rgba(250,243,224,0.72)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Connect with our tech experts for a free consultation on Android
              integration and project strategy. No commitment required.
            </p>
          </div>

          {/* Right CTAs */}
          <div className="flex flex-col gap-3.5 relative z-10 min-w-[220px]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg px-8 py-[18px] text-[15px] font-extrabold transition-all duration-200 hover:-translate-y-1 animate-glow-btn"
              style={{
                background: "var(--gold)",
                color: "#3a1518",
                fontFamily: "var(--font-dm-sans)",
                whiteSpace: "nowrap",
              }}
            >
              Start Your Project
              <ArrowRight size={17} strokeWidth={2.5} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg border-2 px-8 py-[18px] text-[15px] font-semibold transition-all duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              style={{
                borderColor: "rgba(250,243,224,0.25)",
                color: "var(--cream)",
                fontFamily: "var(--font-dm-sans)",
                whiteSpace: "nowrap",
              }}
            >
              <PhoneCall size={16} strokeWidth={2} />
              Talk to an Expert
            </Link>
          </div>
        </div>

        {/* ── Trust badges ── */}
        <div className="grid grid-cols-4 gap-[18px]">
          {badges.map(({ Icon, stat, label }) => (
            <div
              key={label}
              className="rounded-2xl p-8 text-center transition-all duration-300 cursor-default hover:-translate-y-1"
              style={{
                background: "#fff",
                border: "2px solid rgba(101,43,50,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(101,43,50,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(101,43,50,0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-12 h-12 rounded-[10px] flex items-center justify-center mx-auto mb-3.5"
                style={{ background: "rgba(101,43,50,0.07)" }}
              >
                <Icon size={22} strokeWidth={1.8} color="var(--burgundy)" />
              </div>
              <div
                className="font-display font-black text-[36px] leading-none mb-1.5"
                style={{ color: "var(--burgundy)" }}
              >
                {stat}
              </div>
              <div
                className="text-[12px] uppercase tracking-[0.8px] font-semibold"
                style={{ color: "#6b4045", fontFamily: "var(--font-dm-sans)" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
