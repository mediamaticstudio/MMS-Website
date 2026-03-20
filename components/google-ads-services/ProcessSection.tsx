"use client";
import { useState } from "react";
import { SearchCheck, KeyRound, Settings, Rocket, BarChart3, ClipboardList } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MarketingAuditDialog } from "@/components/MarketingAuditDialog";

const steps: { num: string; title: string; desc: string; Icon: LucideIcon }[] = [
  {
    num: "01",
    title: "Business Analysis",
    desc: "We examine your business objectives, target market, and competitors to create the correct advertising mix tailored to your goals.",
    Icon: SearchCheck,
  },
  {
    num: "02",
    title: "Keyword Research",
    desc: "High-intent keywords are identified to attract the most appropriate audience actively searching for your products or services.",
    Icon: KeyRound,
  },
  {
    num: "03",
    title: "Campaign Setup",
    desc: "Ads, ad groups, targeting architecture, and budgets are structured and configured for maximum efficiency from the very first day.",
    Icon: Settings,
  },
  {
    num: "04",
    title: "Ad Launch",
    desc: "Campaigns go live and immediately begin generating targeted traffic and qualified leads for your business.",
    Icon: Rocket,
  },
  {
    num: "05",
    title: "Optimization",
    desc: "Continuous measurement and strategic adjustments enhance performance, improve conversion rates, and reduce wasted spend.",
    Icon: BarChart3,
  },
  {
    num: "06",
    title: "Reporting",
    desc: "Regular, transparent reports monitor results and provide actionable insights on campaign effectiveness and ROI.",
    Icon: ClipboardList,
  },
];

export default function ProcessSection() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <>
      <section id="process" className="process-section">
        <div className="process-inner">
          <div className="process-header">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">
              Our Google Ads <span>Implementation Process</span>
            </h2>
            <p className="section-sub">
              A structured, professional approach used by our agency to guarantee
              success at every stage of your campaign.
            </p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div key={i} className="step-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="step-top">
                  <div className="step-num">{step.num}</div>
                  <div className="step-icon"><step.Icon size={26} strokeWidth={1.8} /></div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="process-cta">
            {/* ✅ Opens MarketingAuditDialog */}
            <button className="btn-primary" onClick={() => setIsAuditModalOpen(true)}>
              Launch Your Google Ads Today
            </button>
          </div>
        </div>

        <style jsx>{`
          .process-section {
            background: #652b32;
            padding: 6rem 2rem;
            position: relative;
            overflow: hidden;
          }
          .process-section::before {
            content: '';
            position: absolute;
            top: -150px;
            right: -150px;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: rgba(245,197,24,0.05);
            pointer-events: none;
          }
          .process-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
          .process-header { margin-bottom: 3rem; }
          .section-label {
            display: inline-block;
            background: rgba(245,197,24,0.15);
            border: 1px solid rgba(245,197,24,0.3);
            color: #f5c518;
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
            color: #faf3e0;
            margin-bottom: 1rem;
            line-height: 1.2;
          }
          .section-title span { color: #f5c518; }
          .section-sub {
            color: rgba(250,243,224,0.65);
            font-size: 1.05rem;
            max-width: 520px;
            line-height: 1.65;
          }
          .steps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.25rem;
            margin-bottom: 3rem;
          }
          .step-card {
            background: rgba(250,243,224,0.05);
            border: 1px solid rgba(250,243,224,0.1);
            border-radius: 16px;
            padding: 1.75rem;
            transition: background 0.3s, border-color 0.3s, transform 0.3s;
            animation: fadeUp 0.5s ease both;
            cursor: default;
          }
          .step-card:hover {
            background: rgba(245,197,24,0.08);
            border-color: rgba(245,197,24,0.3);
            transform: translateY(-5px);
          }
          .step-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }
          .step-num {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 2rem;
            font-weight: 800;
            color: #f5c518;
            line-height: 1;
            opacity: 0.6;
          }
          .step-icon { color: #f5c518; }
          .step-title {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 1.15rem;
            font-weight: 700;
            color: #faf3e0;
            margin-bottom: 0.6rem;
          }
          .step-desc {
            color: rgba(250,243,224,0.6);
            font-size: 0.87rem;
            line-height: 1.65;
          }
          .process-cta { text-align: center; }
          .btn-primary {
            display: inline-block;
            background: #f5c518;
            color: #652b32;
            padding: 1rem 2.5rem;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1rem;
            text-decoration: none;
            border: none;
            cursor: pointer;
            box-shadow: 0 6px 24px rgba(245,197,24,0.25);
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 36px rgba(245,197,24,0.4);
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
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