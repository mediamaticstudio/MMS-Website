"use client";

export default function CTASection() {
    return (
        <section className="cta-section">
            <div className="cta-bg-circle" />
            <div className="cta-container">
                <div className="cta-badge">Ready to Grow?</div>
                <h2 className="cta-heading">
                    Grow with Strategic Email Marketing
                </h2>
                <p className="cta-sub">
                    Grow brand performance and conversions with an outcomes-based email marketing system.
                    Our team works on specific campaigns, automated processes, and data-driven strategies
                    that contribute to achieving the highest ROI and establishing lasting customer relationships.
                </p>
                <div className="cta-actions">
                    <button className="btn-primary">Start Your Campaign</button>
                    <button className="btn-outline">Talk to an Expert</button>
                </div>
                <div className="cta-trust">
                    <span className="trust-item">✓ No long-term contracts</span>
                    <span className="trust-item">✓ Dedicated campaign manager</span>
                    <span className="trust-item">✓ Full performance reporting</span>
                </div>
            </div>

            <style jsx>{`
        .cta-section {
          background: #652b32;
          padding: 100px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-bg-circle {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          border-radius: 50%;
          border: 80px solid rgba(245,197,24,0.07);
          pointer-events: none;
        }
        .cta-bg-circle::after {
          content: "";
          position: absolute;
          inset: 60px;
          border-radius: 50%;
          border: 40px solid rgba(245,197,24,0.05);
        }
        .cta-container {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .cta-badge {
          display: inline-block;
          background: rgba(245,197,24,0.18);
          color: #f5c518;
          border: 1px solid rgba(245,197,24,0.35);
          padding: 8px 20px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .cta-heading {
          font-family: 'Georgia', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #faf3e0;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        .cta-sub {
          font-size: 1.05rem;
          color: rgba(250,243,224,0.72);
          line-height: 1.75;
          margin-bottom: 40px;
        }
        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .btn-primary {
          background: #f5c518;
          color: #652b32;
          border: none;
          padding: 15px 36px;
          font-size: 15px;
          font-weight: 700;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.03em;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(245,197,24,0.4);
        }
        .btn-outline {
          background: transparent;
          color: #faf3e0;
          border: 2px solid rgba(250,243,224,0.4);
          padding: 15px 36px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-outline:hover {
          border-color: #faf3e0;
          background: rgba(250,243,224,0.06);
        }
        .cta-trust {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .trust-item {
          font-size: 0.88rem;
          color: rgba(250,243,224,0.6);
          letter-spacing: 0.02em;
        }
      `}</style>
        </section>
    );
}