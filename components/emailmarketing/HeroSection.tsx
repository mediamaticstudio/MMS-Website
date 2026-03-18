"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = headingRef.current;
        if (!el) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        setTimeout(() => {
            el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 100);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-bg-pattern" />
            <div className="hero-container">
                <div className="hero-badge">✉ Professional Email Marketing</div>
                <h1 ref={headingRef} className="hero-heading">
                    Best Email Marketing Service for{" "}
                    <span className="hero-highlight">High-Converting</span> Business Campaigns
                </h1>
                <p className="hero-subtext">
                    Email marketing remains one of the most powerful channels of contact with customers,
                    feeding leads, and promoting stable business growth. Our data-driven approach ensures
                    every campaign delivers measurable ROI.
                </p>
                <div className="hero-actions">
                    <button className="btn-primary">Start Your Campaign</button>
                    <button className="btn-outline">Learn More</button>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-num">98%</span>
                        <span className="stat-label">Deliverability Rate</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <span className="stat-num">3.5x</span>
                        <span className="stat-label">Average ROI</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <span className="stat-num">500+</span>
                        <span className="stat-label">Brands Served</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hero-section {
          position: relative;
          background: #652b32;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 80px 24px;
        }
        .hero-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(245,197,24,0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(250,243,224,0.06) 0%, transparent 40%);
          pointer-events: none;
        }
        .hero-bg-pattern::after {
          content: "";
          position: absolute;
          right: -80px;
          top: 50%;
          transform: translateY(-50%);
          width: 520px;
          height: 520px;
          border-radius: 50%;
          border: 60px solid rgba(245,197,24,0.08);
        }
        .hero-container {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(245,197,24,0.18);
          color: #f5c518;
          border: 1px solid rgba(245,197,24,0.35);
          padding: 8px 20px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .hero-heading {
          font-family: 'Georgia', serif;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 700;
          color: #faf3e0;
          line-height: 1.2;
          margin-bottom: 24px;
        }
        .hero-highlight {
          color: #f5c518;
          position: relative;
        }
        .hero-subtext {
          font-size: 1.1rem;
          color: rgba(250,243,224,0.75);
          line-height: 1.75;
          max-width: 640px;
          margin: 0 auto 40px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .btn-primary {
          background: #f5c518;
          color: #652b32;
          border: none;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 700;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.03em;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(245,197,24,0.35);
        }
        .btn-outline {
          background: transparent;
          color: #faf3e0;
          border: 2px solid rgba(250,243,224,0.4);
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-outline:hover {
          border-color: #faf3e0;
          color: #fff;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .stat-num {
          font-family: 'Georgia', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #f5c518;
        }
        .stat-label {
          font-size: 12px;
          color: rgba(250,243,224,0.6);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .stat-divider {
          width: 1px;
          height: 48px;
          background: rgba(250,243,224,0.2);
        }
        @media (max-width: 600px) {
          .stat-divider { display: none; }
          .hero-stats { gap: 24px; }
        }
      `}</style>
        </section>
    );
}