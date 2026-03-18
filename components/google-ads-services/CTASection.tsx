"use client";

export default function CTASection() {
    return (
        <section id="contact" className="cta-section">
            <div className="cta-bg" />
            <div className="cta-inner">
                <div className="cta-badge">📣 Ready to Grow Faster?</div>
                <h2 className="cta-title">
                    Grow Faster with Professional
                    <br />
                    <span>Google Ads Marketing Services</span>
                </h2>
                <p className="cta-sub">
                    Need more leads and more online sales? We help businesses find their
                    targeted audience, optimize campaigns, and achieve growth that can be
                    measured — starting today.
                </p>
                <div className="cta-actions">
                    <a href="mailto:hello@mediamaticstudio.com" className="btn-primary">
                        Start Your Google Ads Campaign
                    </a>
                    <a href="tel:+91XXXXXXXXXX" className="btn-outline">
                        📞 Talk to a Specialist
                    </a>
                </div>
                <div className="cta-chips">
                    {[
                        "Free Campaign Audit",
                        "No Long-Term Lock-In",
                        "Dedicated Account Manager",
                        "Weekly Performance Reports",
                    ].map((chip) => (
                        <div key={chip} className="chip">
                            <span className="chip-check">✓</span>
                            {chip}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .cta-section {
          background: #652b32;
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 70% 80%, rgba(245,197,24,0.08) 0%, transparent 55%),
            radial-gradient(ellipse at 20% 20%, rgba(250,243,224,0.04) 0%, transparent 45%);
          pointer-events: none;
        }
        .cta-inner {
          max-width: 720px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .cta-badge {
          display: inline-block;
          background: rgba(245,197,24,0.15);
          border: 1px solid rgba(245,197,24,0.3);
          color: #f5c518;
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-size: 0.84rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: 0.04em;
        }
        .cta-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 800;
          color: #faf3e0;
          line-height: 1.18;
          margin-bottom: 1.5rem;
        }
        .cta-title span { color: #f5c518; }
        .cta-sub {
          color: rgba(250,243,224,0.68);
          font-size: 1.05rem;
          line-height: 1.72;
          margin-bottom: 2.5rem;
          max-width: 580px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .btn-primary {
          display: inline-block;
          background: #f5c518;
          color: #652b32;
          padding: 1rem 2.4rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(245,197,24,0.25);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(245,197,24,0.4);
        }
        .btn-outline {
          display: inline-block;
          border: 2px solid rgba(250,243,224,0.35);
          color: #faf3e0;
          padding: 1rem 2.4rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-outline:hover {
          border-color: #f5c518;
          background: rgba(245,197,24,0.07);
        }
        .cta-chips {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .chip {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(250,243,224,0.07);
          border: 1px solid rgba(250,243,224,0.12);
          padding: 0.45rem 1rem;
          border-radius: 50px;
          font-size: 0.83rem;
          color: rgba(250,243,224,0.8);
          font-weight: 500;
        }
        .chip-check {
          width: 16px;
          height: 16px;
          background: #f5c518;
          color: #652b32;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 900;
          flex-shrink: 0;
        }
      `}</style>
        </section>
    );
}