"use client";
import { useState } from "react";
import DigitalAuditModal from "@/components/DigitalAuditModal";

export default function CTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <DigitalAuditModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section id="contact" className="cta-section">
        <div className="cta-inner">
          <div className="service-pill mb-6"><span>🚀</span><span>Ready to Build?</span></div>
          <h2 className="cta-title">
            Let's Bring Your Flutter App <br />
            <span>Idea to Life</span>
          </h2>
          <p className="cta-sub">
            Whether you're a startup or enterprise, our Flutter team is ready to build
            your next high-performance cross-platform application.
          </p>
          <div className="cta-actions">
            {/* ── CTA opens modal ── */}
            <button type="button" onClick={() => setModalOpen(true)} className="btn-primary">
              Get a Free Consultation
            </button>
            <a href="tel:+91XXXXXXXXXX" className="btn-outline">
              📞 Call Us Today
            </a>
          </div>
          <div className="cta-features">
            {["Free Project Estimate", "48hr Response Time", "NDA on Request", "Agile Development"].map((f) => (
              <div key={f} className="cta-feature">
                <span className="check">✓</span> {f}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .cta-section {
            background: #faf3e0;
            padding: 6rem 2rem;
            position: relative;
            overflow: hidden;
          }
          .cta-section::before {
            content: '';
            position: absolute;
            bottom: -120px;
            right: -120px;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: rgba(101,43,50,0.05);
          }
          .cta-section::after {
            content: '';
            position: absolute;
            top: -80px;
            left: -80px;
            width: 320px;
            height: 320px;
            border-radius: 50%;
            background: rgba(245,197,24,0.07);
          }
          .cta-inner {
            max-width: 700px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 1;
          }
          .cta-title {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: clamp(2.2rem, 5vw, 3.5rem);
            font-weight: 800;
            color: #652b32;
            line-height: 1.15;
            margin-bottom: 1.5rem;
          }
          .cta-title span {
            color: #f5c518;
            -webkit-text-stroke: 1px #652b32;
          }
          .cta-sub {
            color: rgba(101,43,50,0.65);
            font-size: 1.05rem;
            line-height: 1.7;
            margin-bottom: 2.5rem;
          }
          .cta-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 2.5rem;
          }
          .btn-primary {
            background: #652b32;
            color: #f5c518;
            padding: 1rem 2.5rem;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1rem;
            text-decoration: none;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 6px 24px rgba(101,43,50,0.2);
            border: none;
            cursor: pointer;
            font-family: inherit;
          }
          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 36px rgba(101,43,50,0.3);
          }
          .btn-outline {
            border: 2px solid #652b32;
            color: #652b32;
            padding: 1rem 2.5rem;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1rem;
            text-decoration: none;
            transition: background 0.2s;
          }
          .btn-outline:hover {
            background: rgba(101,43,50,0.06);
          }
          .cta-features {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          .cta-feature {
            font-size: 0.88rem;
            color: rgba(101,43,50,0.7);
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.3rem;
          }
          .check {
            color: #652b32;
            font-weight: 900;
            background: #f5c518;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;
          }
        `}</style>
      </section>
    </>
  );
}