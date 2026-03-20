"use client";
import { useEffect, useRef, useState } from "react";
import DigitalAuditModal from "@/components/DigitalAuditModal";

export default function HeroSection() {
  const floatRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const el = floatRef.current;
    if (!el) return;
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.01;
      el.style.transform = `translateY(${Math.sin(t) * 12}px)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <DigitalAuditModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="hero-section">
        <div className="hero-bg-pattern" />
        <div className="hero-container">

          <h1 className="hero-title">
            Build  <span style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "#f5c518" }}>Beautiful</span> Cross-Platform
            <br />
            Apps with Flutter
          </h1>
          <p className="hero-subtitle">
            MediaMatic crafts high-performance Flutter applications for iOS &amp; Android
            from a single codebase — cutting costs by up to 50% while delivering
            native-level experiences.
          </p>
          <div className="hero-cta-group">
            {/* ── CTA opens modal ── */}
            <button type="button" onClick={() => setModalOpen(true)} className="btn-primary">
              Start Your Project
            </button>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>
          <div className="hero-stats">
            {[
              { val: "150+", label: "Apps Delivered" },
              { val: "50%", label: "Cost Reduction" },
              { val: "6+", label: "Years Experience" },
              { val: "98%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <span className="stat-val">{s.val}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div ref={floatRef} className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="screen-header">
                <div className="screen-dot" />
                <div className="screen-dot" />
                <div className="screen-dot" />
              </div>
              <div className="screen-card" />
              <div className="screen-line w-full" />
              <div className="screen-line w-3/4" />
              <div className="screen-grid">
                <div className="screen-tile tile-yellow" />
                <div className="screen-tile tile-burgundy" />
                <div className="screen-tile tile-sm" />
                <div className="screen-tile tile-sm" />
              </div>
            </div>
          </div>
          <div className="service-pill badge-top" style={{ position: "absolute" }}>
            <span>✓</span><span>Cross-Platform</span>
          </div>
          <div className="service-pill badge-bottom" style={{ position: "absolute" }}>
            <span>⚡</span><span>Fast Delivery</span>
          </div>
        </div>

        <style jsx>{`
          .hero-section {
            min-height: 100vh;
            background: #652b32;
            display: flex;
            align-items: center;
            padding: 6rem 2rem 4rem;
            position: relative;
            overflow: hidden;
            gap: 4rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          .hero-bg-pattern {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at 20% 50%, rgba(245,197,24,0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(250,243,224,0.05) 0%, transparent 40%);
          }
          .hero-container {
            position: relative;
            z-index: 2;
            max-width: 600px;
          }
          .hero-title {
            font-family: var(--font-poppins), sans-serif;
            font-size: clamp(2.8rem, 6vw, 4.5rem);
            font-weight: 800;
            color: #faf3e0;
            line-height: 1.15;
            margin-bottom: 1.5rem;
            animation: fadeSlideDown 0.7s ease forwards;
          }
          .hero-highlight {
            color: #f5c518;
            font-style: italic;
          }
          .hero-subtitle {
            color: rgba(250,243,224,0.75);
            font-size: 1.1rem;
            line-height: 1.7;
            margin-bottom: 2.5rem;
            animation: fadeSlideDown 0.8s ease forwards;
          }
          .hero-cta-group {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            margin-bottom: 3rem;
            animation: fadeSlideDown 0.9s ease forwards;
          }
          .btn-primary {
            background: #f5c518;
            color: #652b32;
            padding: 0.9rem 2.2rem;
            border-radius: 6px;
            font-weight: 700;
            font-size: 1rem;
            text-decoration: none;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 4px 20px rgba(245,197,24,0.3);
            border: none;
            cursor: pointer;
            font-family: inherit;
          }
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(245,197,24,0.45);
          }
          .btn-outline {
            border: 2px solid rgba(250,243,224,0.4);
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
            background: rgba(245,197,24,0.08);
          }
          .hero-stats {
            display: flex;
            gap: 2.5rem;
            flex-wrap: wrap;
            animation: fadeSlideDown 1s ease forwards;
          }
          .hero-stat {
            display: flex;
            flex-direction: column;
          }
          .stat-val {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 2rem;
            font-weight: 800;
            color: #f5c518;
            line-height: 1;
          }
          .stat-label {
            font-size: 0.78rem;
            color: rgba(250,243,224,0.6);
            margin-top: 0.3rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .hero-visual {
            position: relative;
            z-index: 2;
            flex-shrink: 0;
          }
          .phone-mockup {
            width: 220px;
            height: 420px;
            background: #faf3e0;
            border-radius: 36px;
            padding: 20px 16px;
            box-shadow: 0 40px 80px rgba(0,0,0,0.4), 0 0 0 6px rgba(245,197,24,0.2);
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .phone-screen {
            display: flex;
            flex-direction: column;
            gap: 10px;
            height: 100%;
          }
          .screen-header {
            display: flex;
            gap: 5px;
            align-items: center;
            padding-bottom: 6px;
            border-bottom: 1px solid rgba(101,43,50,0.1);
          }
          .screen-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #652b32;
            opacity: 0.3;
          }
          .screen-card {
            height: 80px;
            background: linear-gradient(135deg, #652b32, #8a3d47);
            border-radius: 12px;
          }
          .screen-line {
            height: 10px;
            background: rgba(101,43,50,0.12);
            border-radius: 5px;
          }
          .w-full { width: 100%; }
          .w-3\/4 { width: 75%; }
          .screen-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-top: 4px;
          }
          .screen-tile {
            height: 60px;
            border-radius: 10px;
            background: rgba(101,43,50,0.08);
          }
          .tile-yellow { background: #f5c518; }
          .tile-burgundy { background: #652b32; }
          .tile-sm { height: 40px; }
          .badge-top {
            top: 30px;
            right: -50px;
            animation: fadeIn 1.2s ease forwards;
          }
          .badge-bottom {
            bottom: 60px;
            left: -60px;
            animation: fadeIn 1.4s ease forwards;
          }
          @keyframes fadeSlideDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </section>
    </>
  );
}