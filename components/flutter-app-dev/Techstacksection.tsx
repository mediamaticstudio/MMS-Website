"use client";

const techStack = [
    { name: "Flutter", category: "Framework", color: "#54C5F8" },
    { name: "Dart", category: "Language", color: "#00B4AB" },
    { name: "Firebase", category: "Backend", color: "#FFCA28" },
    { name: "Node.js", category: "Backend", color: "#68A063" },
    { name: "REST APIs", category: "Integration", color: "#652b32" },
    { name: "GraphQL", category: "Integration", color: "#E535AB" },
    { name: "AWS", category: "Cloud", color: "#FF9900" },
    { name: "GCP", category: "Cloud", color: "#4285F4" },
    { name: "PostgreSQL", category: "Database", color: "#336791" },
    { name: "MongoDB", category: "Database", color: "#47A248" },
    { name: "GitHub Actions", category: "DevOps", color: "#2088FF" },
    { name: "Jira", category: "Project Mgmt", color: "#0052CC" },
];

const whyChoose = [
    { title: "Strategic Approach", desc: "Every line of code is written with your growth strategy, KPIs, and monetization in mind." },
    { title: "Custom-Built Solutions", desc: "Fully tailored mobile solutions built from the ground up with scalable Flutter technology." },
    { title: "Performance & Scalability", desc: "Launch on iOS and Android simultaneously with a single codebase — reducing costs and time to market." },
    { title: "Transparent Communication", desc: "Sprint cycles, milestones, and proactive updates throughout the entire app lifecycle." },
    { title: "Timely Delivery", desc: "Adaptable strategy using sprint cycles and defined milestones via Jira or GitHub." },
    { title: "End-to-End Support", desc: "From planning through post-launch — we're with you every step of the journey." },
];

export default function TechStackSection() {
    return (
        <section id="tech" className="tech-section">
            <div className="tech-inner">
                <div className="why-col">
                    <div className="section-label">Why MediaMatic</div>
                    <h2 className="section-title">
                        What Sets Us <span>Apart</span>
                    </h2>
                    <div className="why-list">
                        {whyChoose.map((item, i) => (
                            <div key={i} className="why-item">
                                <div className="why-dot">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8l3.5 3.5L13 5" stroke="#f5c518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="why-title">{item.title}</h4>
                                    <p className="why-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="stack-col">
                    <div className="section-label dark">Tech Stack</div>
                    <h2 className="section-title dark">
                        Tools &amp; <span>Technologies</span>
                    </h2>
                    <div className="stack-grid">
                        {techStack.map((tech, i) => (
                            <div key={i} className="stack-badge" style={{ "--dot-color": tech.color } as React.CSSProperties}>
                                <span className="badge-dot" />
                                <span className="badge-name">{tech.name}</span>
                                <span className="badge-cat">{tech.category}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .tech-section {
          background: #fff;
          padding: 6rem 2rem;
        }
        .tech-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .tech-inner { grid-template-columns: 1fr; gap: 3rem; }
        }
        .section-label {
          display: inline-block;
          background: rgba(101,43,50,0.08);
          color: #652b32;
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .section-label.dark {
          background: #652b32;
          color: #f5c518;
        }
        .section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #652b32;
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        .section-title.dark { color: #652b32; }
        .section-title span { color: #f5c518; -webkit-text-stroke: 1px #652b32; }
        .why-list { display: flex; flex-direction: column; gap: 1.25rem; }
        .why-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .why-dot {
          width: 28px;
          height: 28px;
          background: #652b32;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .why-title {
          font-weight: 700;
          color: #652b32;
          font-size: 0.95rem;
          margin-bottom: 0.2rem;
        }
        .why-desc {
          font-size: 0.85rem;
          color: rgba(101,43,50,0.6);
          line-height: 1.5;
        }
        .stack-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .stack-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #faf3e0;
          border: 1px solid rgba(101,43,50,0.12);
          border-radius: 50px;
          padding: 0.45rem 1rem;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: default;
        }
        .stack-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(101,43,50,0.1);
        }
        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--dot-color);
          flex-shrink: 0;
        }
        .badge-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #652b32;
        }
        .badge-cat {
          font-size: 0.72rem;
          color: rgba(101,43,50,0.5);
          padding: 0.1rem 0.5rem;
          background: rgba(101,43,50,0.06);
          border-radius: 50px;
        }
      `}</style>
        </section>
    );
}