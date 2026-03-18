"use client";

const steps = [
    {
        num: "01",
        title: "Audience Segmentation",
        desc: "Identify and segment subscribers based on demographics, behavior, and preferences — enabling highly relevant messaging.",
    },
    {
        num: "02",
        title: "Strategic Campaign Planning",
        desc: "Develop a detailed email marketing strategy guaranteeing campaign objectives, message clarity, and optimal frequency.",
    },
    {
        num: "03",
        title: "Individualized Communication",
        desc: "Personalized emails that appeal to subscriber interests and needs, building closer, more meaningful customer relationships.",
    },
    {
        num: "04",
        title: "Automation for Efficiency",
        desc: "Welcome mails, product recommendations, and follow-ups run automatically — ensuring continuity without manual effort.",
    },
    {
        num: "05",
        title: "Data Analysis & Optimization",
        desc: "Campaign outcomes are analyzed and strategies refined to continuously increase engagement and maximize ROI.",
    },
];

export default function ProcessSection() {
    return (
        <section className="process-section">
            <div className="process-bg" />
            <div className="process-container">
                <div className="section-label">How It Works</div>
                <h2 className="section-heading">
                    The Role of Email Marketing Services in Business Performance
                </h2>
                <p className="section-sub">
                    A structured approach that makes every campaign contribute to long-term development
                    and sustainable customer growth.
                </p>

                <div className="steps-wrapper">
                    {steps.map((step, i) => (
                        <div className="step-row" key={i}>
                            <div className="step-num-col">
                                <div className="step-num">{step.num}</div>
                                {i < steps.length - 1 && <div className="step-connector" />}
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .process-section {
          background: #652b32;
          padding: 96px 24px;
          position: relative;
          overflow: hidden;
        }
        .process-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 90% 10%, rgba(245,197,24,0.1) 0%, transparent 55%);
          pointer-events: none;
        }
        .process-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .section-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f5c518;
          margin-bottom: 12px;
          text-align: center;
        }
        .section-heading {
          font-family: 'Georgia', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 700;
          color: #faf3e0;
          text-align: center;
          margin-bottom: 16px;
          line-height: 1.25;
        }
        .section-sub {
          text-align: center;
          color: rgba(250,243,224,0.7);
          font-size: 1.05rem;
          max-width: 560px;
          margin: 0 auto 64px;
          line-height: 1.7;
        }
        .steps-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .step-row {
          display: flex;
          gap: 28px;
          align-items: flex-start;
        }
        .step-num-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        .step-num {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #f5c518;
          color: #652b32;
          font-family: 'Georgia', serif;
          font-size: 1.1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .step-connector {
          width: 2px;
          flex: 1;
          min-height: 40px;
          background: rgba(245,197,24,0.25);
          margin: 6px 0;
        }
        .step-content {
          padding-bottom: 40px;
          padding-top: 12px;
        }
        .step-title {
          font-family: 'Georgia', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #faf3e0;
          margin-bottom: 8px;
        }
        .step-desc {
          font-size: 0.95rem;
          color: rgba(250,243,224,0.7);
          line-height: 1.7;
        }
      `}</style>
        </section>
    );
}