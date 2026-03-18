"use client";

const tools = [
    { name: "Mailchimp", category: "ESP", icon: "🐒" },
    { name: "Klaviyo", category: "Automation", icon: "📧" },
    { name: "HubSpot", category: "CRM + Email", icon: "🔗" },
    { name: "ActiveCampaign", category: "Automation", icon: "⚡" },
    { name: "Brevo (Sendinblue)", category: "All-in-One", icon: "📬" },
    { name: "Constant Contact", category: "Small Business", icon: "📮" },
    { name: "ConvertKit", category: "Creators", icon: "✍️" },
    { name: "Campaign Monitor", category: "Design-First", icon: "🎨" },
    { name: "Drip", category: "eCommerce", icon: "🛍️" },
];

const features = [
    { label: "A/B Testing", icon: "🔬" },
    { label: "Dynamic Segmentation", icon: "🗂️" },
    { label: "Behavioral Triggers", icon: "🎯" },
    { label: "Analytics & Reporting", icon: "📈" },
    { label: "GDPR Compliance", icon: "🔒" },
    { label: "Deliverability Monitoring", icon: "📡" },
];

export default function TechStackSection() {
    return (
        <section className="tech-section">
            <div className="tech-bg" />
            <div className="tech-container">
                <div className="section-label">Platforms & Capabilities</div>
                <h2 className="section-heading">Our Email Marketing Tech Stack</h2>
                <p className="section-sub">
                    We work with industry-leading platforms and tools to ensure maximum deliverability,
                    automation power, and performance tracking for every campaign.
                </p>

                <div className="tools-grid">
                    {tools.map((tool, i) => (
                        <div className="tool-card" key={i}>
                            <span className="tool-icon">{tool.icon}</span>
                            <span className="tool-name">{tool.name}</span>
                            <span className="tool-category">{tool.category}</span>
                        </div>
                    ))}
                </div>

                <div className="features-row">
                    {features.map((f, i) => (
                        <div className="feature-pill" key={i}>
                            <span>{f.icon}</span>
                            <span>{f.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .tech-section {
          background: #652b32;
          padding: 96px 24px;
          position: relative;
          overflow: hidden;
        }
        .tech-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 10% 80%, rgba(245,197,24,0.08) 0%, transparent 55%);
          pointer-events: none;
        }
        .tech-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .section-label {
          text-align: center;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f5c518;
          margin-bottom: 12px;
        }
        .section-heading {
          font-family: 'Georgia', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: #faf3e0;
          text-align: center;
          margin-bottom: 16px;
        }
        .section-sub {
          text-align: center;
          color: rgba(250,243,224,0.7);
          font-size: 1.05rem;
          max-width: 580px;
          margin: 0 auto 56px;
          line-height: 1.7;
        }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 40px;
        }
        .tool-card {
          background: rgba(250,243,224,0.06);
          border: 1px solid rgba(250,243,224,0.15);
          border-radius: 14px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
          transition: background 0.22s, border-color 0.22s;
        }
        .tool-card:hover {
          background: rgba(245,197,24,0.1);
          border-color: rgba(245,197,24,0.4);
        }
        .tool-icon {
          font-size: 1.8rem;
        }
        .tool-name {
          font-family: 'Georgia', serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #faf3e0;
        }
        .tool-category {
          font-size: 0.78rem;
          color: #f5c518;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .features-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        .feature-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(245,197,24,0.15);
          border: 1px solid rgba(245,197,24,0.3);
          color: #faf3e0;
          padding: 10px 20px;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 600;
        }
      `}</style>
        </section>
    );
}