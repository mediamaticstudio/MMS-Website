"use client";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Zap, CheckCircle } from "lucide-react";
import { MarketingAuditDialog } from "@/components/MarketingAuditDialog";

export default function HeroSection() {
  const floatRef = useRef<HTMLDivElement>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    const el = floatRef.current;
    if (!el) return;
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.008;
      el.style.transform = `translateY(${Math.sin(t) * 10}px)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-bg-glow" />
        <div className="hero-container">
          <div className="service-pill mb-6"><span><TrendingUp size={16} strokeWidth={2} /></span><span>#1 Google Ads Agency for Lead Generation</span></div>
          <h1 className="hero-title">
            Drive <span style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "#f5c518" }}>Quality Leads</span> with
            <br />
            Expert Google Ads Management
          </h1>
          <p className="hero-subtitle">
            Mediamaticstudio helps businesses attract the right audience at the right
            moment — maximizing your ad budget and turning clicks into real business
            prospects.
          </p>
          <div className="hero-cta-group">
            {/* ✅ Opens MarketingAuditDialog */}
            <button className="btn-primary" onClick={() => setIsAuditModalOpen(true)}>
              Grow Your Business with Ads
            </button>
            <a href="#services" className="btn-outline">Explore Our Services</a>
          </div>
          <div className="hero-stats">
            {[
              { val: "500+", label: "Campaigns Managed" },
              { val: "3x", label: "Average ROI" },
              { val: "98%", label: "Client Retention" },
              { val: "10+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <span className="stat-val">{s.val}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div ref={floatRef} className="hero-visual">
          <div className="ads-card">
            <div className="ads-card-header">
              <div className="g-logo">G</div>
              <span>Sponsored</span>
            </div>
            <div className="ads-card-title">Your Business — Top of Google</div>
            <div className="ads-card-url">www.yourbusiness.com</div>
            <div className="ads-card-desc">Reach customers actively searching for your products. Drive leads now.</div>
            <div className="ads-metrics">
              <div className="metric">
                <span className="metric-val">4.8%</span>
                <span className="metric-lbl">CTR</span>
              </div>
              <div className="metric-divider" />
              <div className="metric">
                <span className="metric-val">320</span>
                <span className="metric-lbl">Leads/mo</span>
              </div>
              <div className="metric-divider" />
              <div className="metric">
                <span className="metric-val">↑62%</span>
                <span className="metric-lbl">Conversions</span>
              </div>
            </div>
          </div>
          <div className="service-pill tag-left" style={{ position: "absolute" }}>
            <span><CheckCircle size={14} strokeWidth={2} /></span><span>High-Intent Keywords</span>
          </div>
          <div className="service-pill tag-right" style={{ position: "absolute" }}>
            <span><Zap size={14} strokeWidth={2} /></span><span>Instant Traffic</span>
          </div>
        </div>

        <style jsx>{`
          .hero-section {
            min-height: 100vh;
            background: #652b32;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 7rem 2rem 5rem;
            gap: 4rem;
            flex-wrap: wrap;
            position: relative;
            overflow: hidden;
          }
          .hero-bg-glow {
            position: absolute;
            inset: 0;
            background:
              radial-gradient(ellipse at 15% 60%, rgba(245,197,24,0.1) 0%, transparent 55%),
              radial-gradient(ellipse at 85% 20%, rgba(250,243,224,0.04) 0%, transparent 45%);
            pointer-events: none;
          }
          .hero-container {
            position: relative;
            z-index: 2;
            max-width: 580px;
          }
          .hero-title {
            font-family: var(--font-poppins), sans-serif;
            font-size: clamp(2.8rem, 6vw, 4.5rem);
            font-weight: 800;
            color: #faf3e0;
            line-height: 1.15;
            margin-bottom: 1.5rem;
            animation: fadeDown 0.75s ease both;
          }
          .hero-highlight {
            color: #f5c518;
            font-style: italic;
          }
          .hero-subtitle {
            color: rgba(250,243,224,0.72);
            font-size: 1.05rem;
            line-height: 1.75;
            margin-bottom: 2.5rem;
            animation: fadeDown 0.85s ease both;
          }
          .hero-cta-group {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 3rem;
            animation: fadeDown 0.95s ease both;
          }
          .btn-primary {
            background: #f5c518;
            color: #652b32;
            padding: 0.9rem 2.2rem;
            border-radius: 6px;
            font-weight: 700;
            font-size: 1rem;
            text-decoration: none;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(245,197,24,0.3);
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 32px rgba(245,197,24,0.45);
          }
          .btn-outline {
            border: 2px solid rgba(250,243,224,0.35);
            color: #faf3e0;
            padding: 0.9rem 2.2rem;
            border-radius: 6px;
            font-weight: 600;
            font-size: 1rem;
            text-decoration: none;
            transition: border-color 0.2s, background 0.2s;
          }
          .btn-outline:hover {
            border-color: #f5c518;
            background: rgba(245,197,24,0.07);
          }
          .hero-stats {
            display: flex;
            gap: 2.5rem;
            flex-wrap: wrap;
            animation: fadeDown 1.05s ease both;
          }
          .hero-stat { display: flex; flex-direction: column; }
          .stat-val {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 2rem;
            font-weight: 800;
            color: #f5c518;
            line-height: 1;
          }
          .stat-label {
            font-size: 0.75rem;
            color: rgba(250,243,224,0.55);
            margin-top: 0.3rem;
            text-transform: uppercase;
            letter-spacing: 0.06em;
          }
          .hero-visual {
            position: relative;
            z-index: 2;
            flex-shrink: 0;
          }
          .ads-card {
            width: 300px;
            background: #faf3e0;
            border-radius: 18px;
            padding: 1.75rem;
            box-shadow: 0 40px 80px rgba(0,0,0,0.35), 0 0 0 5px rgba(245,197,24,0.15);
          }
          .ads-card-header {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            margin-bottom: 0.8rem;
          }
          .g-logo {
            width: 28px;
            height: 28px;
            background: #652b32;
            color: #f5c518;
            border-radius: 50%;
            font-weight: 900;
            font-size: 0.85rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ads-card-header span {
            font-size: 0.7rem;
            background: rgba(101,43,50,0.1);
            color: #652b32;
            padding: 0.15rem 0.5rem;
            border-radius: 4px;
            font-weight: 600;
          }
          .ads-card-title {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 1.05rem;
            font-weight: 700;
            color: #652b32;
            margin-bottom: 0.3rem;
          }
          .ads-card-url {
            font-size: 0.75rem;
            color: #388a3d;
            margin-bottom: 0.6rem;
            font-weight: 500;
          }
          .ads-card-desc {
            font-size: 0.82rem;
            color: rgba(101,43,50,0.65);
            line-height: 1.5;
            margin-bottom: 1.2rem;
          }
          .ads-metrics {
            display: flex;
            align-items: center;
            gap: 0;
            background: rgba(101,43,50,0.05);
            border-radius: 10px;
            padding: 0.75rem 0;
          }
          .metric {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.2rem;
          }
          .metric-val {
            font-weight: 800;
            font-size: 1rem;
            color: #652b32;
          }
          .metric-lbl {
            font-size: 0.68rem;
            color: rgba(101,43,50,0.5);
            text-transform: uppercase;
            letter-spacing: 0.04em;
          }
          .metric-divider {
            width: 1px;
            height: 32px;
            background: rgba(101,43,50,0.15);
          }
          .tag-left { bottom: 60px; left: -70px; animation: fadeIn 1.3s ease both; }
          .tag-right { top: 30px; right: -55px; animation: fadeIn 1.5s ease both; }
          @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </section>

      {/* Dialog — same props as SEMServicesClient */}
      <MarketingAuditDialog
        isOpen={isAuditModalOpen}
        onOpenChange={setIsAuditModalOpen}
      />
    </>
  );
}