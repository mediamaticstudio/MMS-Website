"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, TrendingUp, Users, BarChart2, ArrowRight, ChevronDown } from "lucide-react";
import { MarketingAuditDialog } from "@/components/MarketingAuditDialog";

const stats = [
  { number: "98%", label: "Deliverability Rate", Icon: Mail },
  { number: "3.5x", label: "Average ROI", Icon: TrendingUp },
  { number: "500+", label: "Brands Served", Icon: Users },
  { number: "40%", label: "Open Rate Avg", Icon: BarChart2 },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

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
      <section
        ref={heroRef}
        className="hero-section"
      >
        {/* ── Background Layers ── */}
        <div className="hero-bg">
          <div className="hero-bg-blob hero-bg-blob--tr" />
          <div className="hero-bg-blob hero-bg-blob--bl" />
          <div className="hero-bg-dots" />
        </div>

        {/* ── Content ── */}
        <div className="hero-container">
          {/* Left */}
          <div className="hero-left">
            {/* Badge */}
            <div className="hero-item service-pill">
              <span className="service-pill__dot" />
              <span className="service-pill__text">✉ Professional Email Marketing</span>
            </div>

            {/* Heading */}
            <h1 className="hero-item hero-heading">
              Best Email Marketing Service for{" "}
              <span style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "#f5c518" }}>High-Converting</span> Business Campaigns
            </h1>

            {/* Sub-text */}
            <p className="hero-item hero-subtext">
              Email marketing remains one of the most powerful channels of contact with customers,
              feeding leads, and promoting stable business growth. Our data-driven approach ensures
              every campaign delivers measurable ROI.
            </p>

            {/* Buttons */}
            <div className="hero-item hero-actions">
              <button className="btn-primary" onClick={() => setIsAuditModalOpen(true)}>
                Start Your Campaign
                <ArrowRight size={17} strokeWidth={2.5} style={{ display: "inline", marginLeft: 8 }} />
              </button>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>

          {/* Right — Stat Cards */}
          <div className="hero-item hero-right">
            {stats.map(({ number, label, Icon }, i) => (
              <div
                key={label}
                className={`stat-card ${i === 0 ? "stat-card--featured" : ""}`}
              >
                <div className="stat-card__icon-box">
                  <Icon
                    size={22}
                    strokeWidth={2}
                    color={i === 0 ? "#652b32" : "#f5c518"}
                  />
                </div>
                <div className="stat-card__number">{number}</div>
                <div className="stat-card__label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll cue ── */}
        <div className="scroll-cue">
          <span className="scroll-cue__text">Scroll</span>
          <ChevronDown size={15} color="rgba(245,197,24,0.55)" />
        </div>
      </section>

      {/* Dialog — matches the exact prop names used in SEMServicesClient */}
      <MarketingAuditDialog
        isOpen={isAuditModalOpen}
        onOpenChange={setIsAuditModalOpen}
      />

      <style jsx>{`
        /* ── Root ── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background: #652b32;
        }

        /* ── Background ── */
        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-bg-blob {
          position: absolute;
          border-radius: 50%;
        }
        .hero-bg-blob--tr {
          top: -96px;
          right: -96px;
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(245,197,24,0.14) 0%, transparent 70%);
        }
        .hero-bg-blob--bl {
          bottom: -144px;
          left: -144px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%);
        }
        .hero-bg-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(250,243,224,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* ── Layout ── */
        .hero-container {
          position: relative;
          z-index: 10;
          max-width: 1260px;
          margin: 0 auto;
          width: 100%;
          padding: 96px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ── Left ── */
        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* Badge */
        .service-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-radius: 6px;
          padding: 8px 18px;
          margin-bottom: 36px;
          background: rgba(245,197,24,0.13);
          border: 1px solid rgba(245,197,24,0.45);
        }
        .service-pill__dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f5c518;
          animation: pulse 2s infinite;
        }
        .service-pill__text {
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          font-weight: 700;
          color: #f5c518;
        }

        /* Heading */
        .hero-heading {
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 800;
          color: #faf3e0;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 24px;
        }
        .hero-highlight {
          color: #f5c518;
        }

        /* Subtext */
        .hero-subtext {
          font-size: 1.05rem;
          color: rgba(250,243,224,0.72);
          line-height: 1.85;
          max-width: 480px;
          margin-bottom: 48px;
        }

        /* Buttons */
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          background: #f5c518;
          color: #3a1518;
          border: none;
          padding: 16px 36px;
          font-size: 15px;
          font-weight: 800;
          border-radius: 8px;
          cursor: pointer;
          letter-spacing: 0.03em;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 28px rgba(245,197,24,0.38);
        }
        .btn-outline {
          background: transparent;
          color: #faf3e0;
          border: 2px solid rgba(250,243,224,0.28);
          padding: 16px 36px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-outline:hover {
          border-color: #f5c518;
          color: #f5c518;
        }

        /* ── Right — Stat Cards ── */
        .hero-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .stat-card {
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          background: rgba(250,243,224,0.05);
          border: 1px solid rgba(245,197,24,0.2);
          transition: transform 0.3s;
          cursor: default;
        }
        .stat-card:hover {
          transform: translateY(-6px);
        }
        .stat-card--featured {
          background: linear-gradient(135deg, #f5c518 0%, #d4a80e 100%);
          border: none;
        }
        .stat-card__icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }
        .stat-card--featured .stat-card__icon-box {
          background: rgba(101,43,50,0.12);
        }
        .stat-card:not(.stat-card--featured) .stat-card__icon-box {
          background: rgba(245,197,24,0.12);
        }
        .stat-card__number {
          font-size: 40px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-card--featured .stat-card__number {
          color: #652b32;
        }
        .stat-card:not(.stat-card--featured) .stat-card__number {
          color: #f5c518;
        }
        .stat-card__label {
          font-size: 11.5px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
        .stat-card--featured .stat-card__label {
          color: rgba(101,43,50,0.7);
        }
        .stat-card:not(.stat-card--featured) .stat-card__label {
          color: rgba(250,243,224,0.6);
        }

        /* ── Scroll cue ── */
        .scroll-cue {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          animation: bounceScroll 2s infinite;
        }
        .scroll-cue__text {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          font-weight: 700;
          color: rgba(245,197,24,0.55);
        }

        /* ── Keyframes ── */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes bounceScroll {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 80px 24px;
          }
          .hero-left {
            align-items: center;
            text-align: center;
          }
          .hero-subtext {
            text-align: center;
          }
          .hero-actions {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .hero-right {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .stat-card {
            padding: 20px 12px;
          }
        }
      `}</style>
    </>
  );
}