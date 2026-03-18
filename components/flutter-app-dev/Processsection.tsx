"use client";

const steps = [
    {
        num: "01",
        title: "Planning",
        desc: "We begin with an in-depth consultation to understand your business, customers, and objectives — the foundation for architecture and UX.",
        icon: "🗺️",
    },
    {
        num: "02",
        title: "Designing",
        desc: "Our designers craft user interfaces that function well, look great, and provide the best possible user experience.",
        icon: "🎨",
    },
    {
        num: "03",
        title: "Development",
        desc: "Expert developers write clean, efficient, and scalable code to build cross-platform apps that are fast, safe, and top-notch.",
        icon: "💻",
    },
    {
        num: "04",
        title: "Testing, Launch & Support",
        desc: "We test thoroughly, deploy with care, and stay by your side post-launch with proactive maintenance and support.",
        icon: "🚀",
    },
];

export default function ProcessSection() {
    return (
        <section id="process" className="process-section">
            <div className="process-inner">
                <div className="section-label">How We Work</div>
                <h2 className="section-title">
                    Our Development <span>Process</span>
                </h2>
                <p className="section-sub">
                    Precision at every step — clean code, clear communication, on-time delivery.
                </p>
                <div className="process-steps">
                    {steps.map((step, i) => (
                        <div key={i} className="process-step">
                            <div className="step-connector" />
                            <div className="step-left">
                                <div className="step-num">{step.num}</div>
                            </div>
                            <div className="step-right">
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .process-section {
          background: #faf3e0;
          padding: 6rem 2rem;
        }
        .process-inner {
          max-width: 900px;
          margin: 0 auto;
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
          color: rgba(101,43,50,0.65);
          font-size: 1.05rem;
          margin-bottom: 3.5rem;
        }
        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }
        .process-step {
          display: flex;
          gap: 2rem;
          position: relative;
          padding-bottom: 3rem;
        }
        .process-step:last-child {
          padding-bottom: 0;
        }
        .step-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: 64px;
          position: relative;
        }
        .step-left::after {
          content: '';
          position: absolute;
          top: 64px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: calc(100% - 24px);
          background: linear-gradient(to bottom, rgba(101,43,50,0.2), transparent);
        }
        .process-step:last-child .step-left::after {
          display: none;
        }
        .step-num {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #652b32;
          color: #f5c518;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(101,43,50,0.2);
          position: relative;
          z-index: 1;
        }
        .step-right {
          background: #fff;
          border: 1px solid rgba(101,43,50,0.1);
          border-radius: 16px;
          padding: 1.75rem;
          flex: 1;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .step-right:hover {
          transform: translateX(6px);
          box-shadow: 0 12px 32px rgba(101,43,50,0.1);
        }
        .step-icon {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .step-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #652b32;
          margin-bottom: 0.6rem;
        }
        .step-desc {
          color: rgba(101,43,50,0.65);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .step-connector { display: none; }
      `}</style>
        </section>
    );
}