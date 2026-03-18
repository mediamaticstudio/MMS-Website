"use client";

const industries = [
    { icon: "🏠", title: "Real Estate", desc: "Target buyers and property investors via location and keyword searches." },
    { icon: "✈️", title: "Travel & Tourism", desc: "Reach customers actively searching for vacations, destinations, and bookings." },
    { icon: "🏭", title: "Manufacturing", desc: "Generate B2B leads and reach distributors and buyers globally." },
    { icon: "🚗", title: "Automotive", desc: "Advertise vehicles, auto parts, and repair services to ready-to-buy customers." },
    { icon: "💪", title: "Sports & Fitness", desc: "Interest new members and promote training programs for gyms and fitness brands." },
    { icon: "⚡", title: "Energy & Utilities", desc: "Advertise renewable energy and utility solutions to interested audiences." },
    { icon: "🌾", title: "Agriculture & AgriTech", desc: "Sell equipment, technologies, and agri-solutions to farmers and industrialists." },
    { icon: "🏗️", title: "Construction", desc: "Generate project leads from developers, businesses, and homeowners." },
    { icon: "📰", title: "Media & Publishing", desc: "Promote digital content, subscriptions, and advertising services at scale." },
    { icon: "🎪", title: "Event Management", desc: "Market conferences, weddings, exhibitions, and corporate events." },
    { icon: "💄", title: "Beauty & Wellness", desc: "Reach customers via local and service-related searches for salons and spas." },
    { icon: "🚚", title: "Logistics & Warehousing", desc: "Promote transportation and warehousing services to businesses seeking suppliers." },
];

export default function IndustriesSection() {
    return (
        <section id="industries" className="industries-section">
            <div className="ind-inner">
                <div className="ind-header">
                    <div className="section-label">Industries We Serve</div>
                    <h2 className="section-title">
                        Google Ads for <span>Every Industry</span>
                    </h2>
                    <p className="section-sub">
                        Our Google Ads marketing services help companies across diverse sectors
                        attract their target audience and generate a steady stream of leads.
                    </p>
                </div>
                <div className="ind-grid">
                    {industries.map((ind, i) => (
                        <div key={i} className="ind-card" style={{ animationDelay: `${i * 0.05}s` }}>
                            <div className="ind-icon">{ind.icon}</div>
                            <div>
                                <h3 className="ind-title">{ind.title}</h3>
                                <p className="ind-desc">{ind.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .industries-section {
          background: #faf3e0;
          padding: 6rem 2rem;
        }
        .ind-inner { max-width: 1200px; margin: 0 auto; }
        .ind-header { margin-bottom: 3rem; }
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
          color: #f5c518;
          -webkit-text-stroke: 1px #652b32;
        }
        .section-sub {
          color: rgba(101,43,50,0.6);
          font-size: 1.05rem;
          max-width: 540px;
          line-height: 1.65;
        }
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1rem;
        }
        .ind-card {
          background: #fff;
          border: 1px solid rgba(101,43,50,0.1);
          border-radius: 14px;
          padding: 1.4rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          animation: fadeUp 0.5s ease both;
          cursor: default;
        }
        .ind-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(101,43,50,0.1);
          border-color: rgba(245,197,24,0.4);
        }
        .ind-icon { font-size: 1.75rem; flex-shrink: 0; }
        .ind-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          font-weight: 700;
          color: #652b32;
          margin-bottom: 0.3rem;
        }
        .ind-desc {
          font-size: 0.82rem;
          color: rgba(101,43,50,0.6);
          line-height: 1.5;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}