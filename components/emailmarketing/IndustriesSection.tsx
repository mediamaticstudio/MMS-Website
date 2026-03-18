"use client";

const industries = [
    { icon: "🏠", name: "Real Estate", desc: "Property listings, market analysis, and investment opportunities." },
    { icon: "✈️", name: "Travel & Tourism", desc: "Destinations, seasonal packages, and custom travel offers." },
    { icon: "🏭", name: "Manufacturing", desc: "Product features, market innovations, and distributor ventures." },
    { icon: "🚗", name: "Automotive", desc: "New vehicles, service reminders, and special promotions." },
    { icon: "💪", name: "Sports & Fitness", desc: "Memberships, training courses, and fitness programs." },
    { icon: "⚡", name: "Energy & Utilities", desc: "Services, sustainability efforts, and industry updates." },
    { icon: "🌾", name: "Agriculture & AgriTech", desc: "Tech achievements, innovations, and industry knowledge." },
    { icon: "🏗️", name: "Construction", desc: "Project updates, partnerships, and service offers." },
    { icon: "⚖️", name: "Legal & Law Firms", desc: "Client education, legal updates, and professional credibility." },
    { icon: "📰", name: "Media & Publishing", desc: "Newsletters, content updates, and subscription offers." },
    { icon: "🎪", name: "Event Management", desc: "Event promotion, registration management, and reminders." },
    { icon: "💄", name: "Beauty & Wellness", desc: "Product launches, individual offers, and promotions." },
    { icon: "🚚", name: "Logistics & Warehouse", desc: "Service changes, supply chain info, and partnerships." },
];

export default function IndustriesSection() {
    return (
        <section className="industries-section">
            <div className="industries-container">
                <div className="section-label">Industries We Serve</div>
                <h2 className="section-heading">Email Marketing Across Every Sector</h2>
                <p className="section-sub">
                    Our email marketing services are designed to assist companies in various sectors —
                    building better audience relationships, driving conversions, and enhancing customer loyalty.
                </p>

                <div className="industries-grid">
                    {industries.map((ind, i) => (
                        <div className="industry-card" key={i}>
                            <div className="industry-icon">{ind.icon}</div>
                            <div className="industry-info">
                                <h3 className="industry-name">{ind.name}</h3>
                                <p className="industry-desc">{ind.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .industries-section {
          background: #faf3e0;
          padding: 96px 24px;
        }
        .industries-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-label {
          text-align: center;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #652b32;
          margin-bottom: 12px;
        }
        .section-heading {
          font-family: 'Georgia', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700;
          color: #652b32;
          text-align: center;
          margin-bottom: 16px;
        }
        .section-sub {
          text-align: center;
          color: #6b4a2a;
          font-size: 1.05rem;
          max-width: 620px;
          margin: 0 auto 56px;
          line-height: 1.7;
        }
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
        }
        .industry-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #fff;
          border: 1px solid rgba(101,43,50,0.1);
          border-radius: 14px;
          padding: 22px 20px;
          transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s;
        }
        .industry-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(101,43,50,0.1);
          border-color: #f5c518;
        }
        .industry-icon {
          font-size: 1.6rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .industry-info {
          flex: 1;
        }
        .industry-name {
          font-family: 'Georgia', serif;
          font-size: 0.97rem;
          font-weight: 700;
          color: #652b32;
          margin-bottom: 5px;
        }
        .industry-desc {
          font-size: 0.85rem;
          color: #7a5555;
          line-height: 1.55;
        }
      `}</style>
        </section>
    );
}