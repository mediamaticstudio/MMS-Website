"use client";

const whyUs = [
    {
        icon: "👨‍💻",
        title: "Expert Google Ads Specialists",
        desc: "Experienced professionals who understand user behaviour, trending keywords, and optimization methods that drive results.",
    },
    {
        icon: "🎯",
        title: "Customized Advertising Strategies",
        desc: "Individual strategies crafted around your specific business objectives, industry, and competitive landscape.",
    },
    {
        icon: "🔍",
        title: "Advanced Keyword Research",
        desc: "Sophisticated tools and data analytics used to identify lucrative keywords that attract high-intent traffic.",
    },
    {
        icon: "🔄",
        title: "Continuous Campaign Optimization",
        desc: "Ongoing monitoring and refinement — bids adjusted, targeting fine-tuned, and new ad variations tested for maximum ROI.",
    },
    {
        icon: "📊",
        title: "Transparent Reporting & Insights",
        desc: "Detailed reports covering campaign performance, ad spend, and conversions — so you always know the value you're getting.",
    },
    {
        icon: "💼",
        title: "Focus on Lead Generation & Sales",
        desc: "Every campaign is designed to attract potential customers and convert them into loyal, paying clients.",
    },
];

const benefits = [
    { val: "Expert", label: "Campaign Management" },
    { val: "Data-Driven", label: "Optimization" },
    { val: "Zero", label: "Wasted Budget" },
    { val: "Full", label: "Transparency" },
];

export default function TechStackSection() {
    return (
        <section id="why-us" className="why-section">
            <div className="why-inner">
                <div className="why-left">
                    <div className="section-label">Why Mediamaticstudio</div>
                    <h2 className="section-title">
                        Why Choose Us as Your <span>Google Ads Partner</span>
                    </h2>
                    <p className="section-sub">
                        The right advertising partner can determine the success of your digital
                        marketing. Here's what sets us apart.
                    </p>
                    <div className="benefits-strip">
                        {benefits.map((b, i) => (
                            <div key={i} className="benefit-item">
                                <span className="benefit-val">{b.val}</span>
                                <span className="benefit-lbl">{b.label}</span>
                            </div>
                        ))}
                    </div>
                    <a href="#contact" className="btn-primary">Start Your Google Ads Campaign</a>
                </div>
                <div className="why-right">
                    {whyUs.map((item, i) => (
                        <div key={i} className="why-card" style={{ animationDelay: `${i * 0.08}s` }}>
                            <div className="why-icon">{item.icon}</div>
                            <div>
                                <h3 className="why-title">{item.title}</h3>
                                <p className="why-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .why-section {
          background: #652b32;
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
        }
        .why-section::after {
          content: '';
          position: absolute;
          bottom: -100px;
          left: -100px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: rgba(245,197,24,0.05);
          pointer-events: none;
        }
        .why-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 5rem;
          align-items: start;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 900px) {
          .why-inner { grid-template-columns: 1fr; gap: 3rem; }
        }
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
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          color: #faf3e0;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .section-title span { color: #f5c518; }
        .section-sub {
          color: rgba(250,243,224,0.65);
          font-size: 1rem;
          line-height: 1.65;
          margin-bottom: 2rem;
        }
        .benefits-strip {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .benefit-item {
          background: rgba(250,243,224,0.06);
          border: 1px solid rgba(250,243,224,0.1);
          border-radius: 10px;
          padding: 0.9rem 1rem;
        }
        .benefit-val {
          display: block;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.1rem;
          font-weight: 800;
          color: #f5c518;
          margin-bottom: 0.2rem;
        }
        .benefit-lbl {
          font-size: 0.75rem;
          color: rgba(250,243,224,0.55);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .btn-primary {
          display: inline-block;
          background: #f5c518;
          color: #652b32;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(245,197,24,0.25);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(245,197,24,0.4);
        }
        .why-right {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .why-card {
          background: rgba(250,243,224,0.05);
          border: 1px solid rgba(250,243,224,0.1);
          border-radius: 14px;
          padding: 1.25rem 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          transition: background 0.3s, border-color 0.3s;
          animation: fadeUp 0.5s ease both;
        }
        .why-card:hover {
          background: rgba(245,197,24,0.07);
          border-color: rgba(245,197,24,0.25);
        }
        .why-icon { font-size: 1.5rem; flex-shrink: 0; }
        .why-title {
          font-weight: 700;
          color: #faf3e0;
          font-size: 0.95rem;
          margin-bottom: 0.3rem;
        }
        .why-desc {
          font-size: 0.83rem;
          color: rgba(250,243,224,0.58);
          line-height: 1.55;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}