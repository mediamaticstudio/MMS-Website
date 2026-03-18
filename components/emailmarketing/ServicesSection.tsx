"use client";

const services = [
    {
        icon: "🎯",
        title: "Audience Research & Goal Alignment",
        desc: "We identify customer behavior, preferences and engagement patterns, aligning every campaign with your core business objectives.",
    },
    {
        icon: "🗺️",
        title: "Email Campaign Strategy & Planning",
        desc: "A systematic roadmap establishing campaign purpose, content themes, frequency, and segmentation approach for long-term engagement.",
    },
    {
        icon: "🎨",
        title: "Email Design & Content Creation",
        desc: "Mobile-friendly templates, catchy subject lines, and quality messaging that represent your brand and inspire action.",
    },
    {
        icon: "⚙️",
        title: "Email Automation & Workflow Setup",
        desc: "Welcome sequences, abandoned cart messages, lead follow-ups, and re-engagement flows — all running without manual effort.",
    },
    {
        icon: "📅",
        title: "Campaign Execution & Smart Scheduling",
        desc: "Emails delivered at optimal times based on audience behavior, maximizing open rates and subscriber engagement.",
    },
    {
        icon: "📊",
        title: "Performance Optimization & Reporting",
        desc: "Continuous analysis of open rates, click-through rates, and conversions to refine messaging and improve overall ROI.",
    },
];

export default function ServicesSection() {
    return (
        <section className="services-section">
            <div className="services-container">
                <div className="section-label">What We Offer</div>
                <h2 className="section-heading">Email Marketing Services & Campaign Types</h2>
                <p className="section-sub">
                    From research and planning to execution and optimization — each campaign is crafted in
                    detail, adjusted to your business objectives.
                </p>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <div className="service-card" key={i}>
                            <div className="service-icon">{s.icon}</div>
                            <h3 className="service-title">{s.title}</h3>
                            <p className="service-desc">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .services-section {
          background: #faf3e0;
          padding: 96px 24px;
        }
        .services-container {
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
          max-width: 600px;
          margin: 0 auto 56px;
          line-height: 1.7;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        .service-card {
          background: #fff;
          border: 1px solid rgba(101,43,50,0.1);
          border-radius: 16px;
          padding: 32px 28px;
          transition: transform 0.25s, box-shadow 0.25s;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: #f5c518;
          border-radius: 4px 0 0 4px;
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(101,43,50,0.12);
        }
        .service-icon {
          font-size: 2rem;
          margin-bottom: 16px;
        }
        .service-title {
          font-family: 'Georgia', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #652b32;
          margin-bottom: 10px;
        }
        .service-desc {
          font-size: 0.93rem;
          color: #5a4040;
          line-height: 1.7;
        }
      `}</style>
        </section>
    );
}