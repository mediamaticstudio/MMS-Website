"use client";
import { useState } from "react";
import { Search, Settings, PenLine, FlaskConical, BarChart3, Monitor, TrendingUp, Target, DollarSign } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MarketingAuditDialog } from "@/components/MarketingAuditDialog";

const services: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Search,
    title: "Keyword Research & Planning",
    desc: "Identify high-intent search terms used by potential customers, ensuring your ads appear in the most relevant searches to drive conversions.",
  },
  {
    Icon: Settings,
    title: "Google Ads Campaign Setup",
    desc: "Structured ad groups, precise targeting options, budget configurations, and bid setups — built to display your ads to the right audience from day one.",
  },
  {
    Icon: PenLine,
    title: "Ad Copy Creation",
    desc: "Compelling headlines and descriptions that showcase your business value, inspire user action, and make your ads stand out from competitors.",
  },
  {
    Icon: FlaskConical,
    title: "A/B Testing & Ad Optimization",
    desc: "Continuous split testing of ad variations, landing pages, and bidding strategies to maximize click-through rates and reduce cost per conversion.",
  },
  {
    Icon: BarChart3,
    title: "Competitor Campaign Analysis",
    desc: "Analyse rival ads, keywords, and bidding tactics to uncover opportunities and craft campaigns that consistently outperform the competition.",
  },
  {
    Icon: Monitor,
    title: "Landing Page Design & Optimization",
    desc: "Conversion-focused landing pages aligned with ad intent, designed to enhance user experience and turn visitors into qualified leads.",
  },
  {
    Icon: TrendingUp,
    title: "Google Analytics Tracking & Reporting",
    desc: "Full analytics integration to monitor clicks, conversions, and user behaviour — empowering data-driven decisions at every campaign stage.",
  },
  {
    Icon: Target,
    title: "Remarketing & Retargeting Ads",
    desc: "Re-engage visitors who left without converting. Targeted remarketing ads remind them of your offering and bring them back to complete a purchase.",
  },
  {
    Icon: DollarSign,
    title: "Bid Management & Budget Optimization",
    desc: "Strategic bid adjustments and smart budget allocation across high-performing campaigns to deliver maximum ROI on every advertising dollar.",
  },
];

export default function ServicesSection() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <>
      <section id="services" className="services-section">
        <div className="services-inner">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">
            Google Ads Campaign
          </h2>
          <h2>
            <span style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "#f5c518" }}>Services</span>
          </h2>
          <p className="section-sub">
            A data-driven, structured strategy covering every step — from research and
            creation to optimization and reporting.
          </p>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="service-icon"><s.Icon size={28} strokeWidth={1.8} /></div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-arrow">→</div>
              </div>
            ))}
          </div>
          <div className="services-cta">
            {/* ✅ Opens MarketingAuditDialog */}
            <button className="btn-primary" onClick={() => setIsAuditModalOpen(true)}>
              Create Your Google Ads Campaign
            </button>
          </div>
        </div>

        <style jsx>{`
          .services-section {
            background: #faf3e0;
            padding: 6rem 2rem;
          }
          .services-inner { max-width: 1200px; margin: 0 auto; }
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
            color: #652b32;
            position: relative;
            z-index: 1;
          }
          .section-title span::after {
            content: '';
            position: absolute;
            bottom: 8%;
            left: -2px;
            right: -2px;
            height: 28%;
            background: #f5c518;
            opacity: 0.4;
            z-index: -1;
            border-radius: 4px;
          }
          .section-sub {
            color: rgba(101,43,50,0.6);
            font-size: 1.05rem;
            margin-bottom: 3rem;
            max-width: 540px;
            line-height: 1.65;
          }
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.25rem;
            margin-bottom: 3rem;
          }
          .service-card {
            background: #fff;
            border: 1px solid rgba(101,43,50,0.1);
            border-radius: 16px;
            padding: 2rem;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
            animation: fadeUp 0.5s ease both;
          }
          .service-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 3px;
            background: linear-gradient(90deg, #652b32, #f5c518);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.35s;
          }
          .service-card:hover::before { transform: scaleX(1); }
          .service-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 44px rgba(101,43,50,0.1);
          }
          .service-icon { color: #652b32; margin-bottom: 0.9rem; display: block; }
          .service-title {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 1.12rem;
            font-weight: 700;
            color: #652b32;
            margin-bottom: 0.65rem;
          }
          .service-desc {
            color: rgba(101,43,50,0.6);
            font-size: 0.88rem;
            line-height: 1.65;
          }
          .service-arrow {
            position: absolute;
            bottom: 1.25rem;
            right: 1.25rem;
            width: 34px;
            height: 34px;
            background: rgba(245,197,24,0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #652b32;
            font-size: 0.95rem;
            transition: background 0.2s, transform 0.2s;
          }
          .service-card:hover .service-arrow {
            background: #f5c518;
            transform: translateX(3px);
          }
          .services-cta { text-align: center; }
          .btn-primary {
            display: inline-block;
            background: #652b32;
            color: #f5c518;
            padding: 1rem 2.5rem;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1rem;
            text-decoration: none;
            border: none;
            cursor: pointer;
            box-shadow: 0 6px 24px rgba(101,43,50,0.2);
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 36px rgba(101,43,50,0.3);
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(22px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      <MarketingAuditDialog
        isOpen={isAuditModalOpen}
        onOpenChange={setIsAuditModalOpen}
      />
    </>
  );
}