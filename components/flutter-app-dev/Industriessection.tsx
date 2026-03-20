"use client";
import { HeartPulse, Landmark, ShoppingCart, Plane, GraduationCap, Truck, Film, Home, Fuel, Car, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const industries: { Icon: LucideIcon; title: string; desc: string }[] = [
    { Icon: HeartPulse, title: "Healthcare", desc: "Remote consultations, EHR, and patient engagement apps." },
    { Icon: Landmark, title: "Finance", desc: "Mobile banking, portfolio management, and transaction apps." },
    { Icon: ShoppingCart, title: "eCommerce", desc: "Responsive e-commerce with real-time inventory and payment gateways." },
    { Icon: Plane, title: "Travel", desc: "Seamless booking systems, personalized customer experiences." },
    { Icon: GraduationCap, title: "Education", desc: "Interactive e-learning platforms with quizzes and media content." },
    { Icon: Truck, title: "Logistics", desc: "Fleet management and real-time tracking solutions." },
    { Icon: Film, title: "Entertainment", desc: "Enhance customer engagement and reach across media platforms." },
    { Icon: Home, title: "Real Estate", desc: "Property listings, virtual tours, and client communication tools." },
    { Icon: Plane, title: "Aviation", desc: "DevOps/Agile-powered solutions for aviation software needs." },
    { Icon: Fuel, title: "Oil & Gas", desc: "Asset tracking, inspection, and data sharing applications." },
    { Icon: Car, title: "Automotive", desc: "Digital transformation apps for competitive automotive businesses." },
    { Icon: Factory, title: "Manufacturing", desc: "Real-time dashboards, workflow automation, and performance tracking." },
];

export default function IndustriesSection() {
    return (
        <section id="industries" className="industries-section">
            <div className="ind-inner">
                <div className="ind-header">
                    <div className="section-label">Industries We Serve</div>
                    <h2 className="section-title">
                        Tailored Flutter Solutions <span>Across Sectors</span>
                    </h2>
                    <p className="section-sub">
                        From healthcare to logistics — we build Flutter apps that understand your industry.
                    </p>
                </div>
                <div className="ind-grid">
                    {industries.map((ind, i) => (
                        <div key={i} className="ind-card" style={{ animationDelay: `${i * 0.05}s` }}>
                            <div className="ind-icon"><ind.Icon size={24} strokeWidth={1.8} /></div>
                            <div className="ind-content">
                                <h3 className="ind-title">{ind.title}</h3>
                                <p className="ind-desc">{ind.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .industries-section {
          background: #652b32;
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
        }
        .industries-section::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: rgba(245,197,24,0.06);
        }
        .ind-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .ind-header {
          margin-bottom: 3rem;
        }
        .section-label {
          display: inline-block;
          background: rgba(245,197,24,0.15);
          border: 1px solid rgba(245,197,24,0.3);
          color: #f5c518;
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
          color: #faf3e0;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .section-title span {
          color: #f5c518;
        }
        .section-sub {
          color: rgba(250,243,224,0.65);
          font-size: 1.05rem;
          max-width: 500px;
        }
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }
        .ind-card {
          background: rgba(250,243,224,0.05);
          border: 1px solid rgba(250,243,224,0.1);
          border-radius: 14px;
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
          animation: fadeUp 0.5s ease both;
          cursor: default;
        }
        .ind-card:hover {
          background: rgba(245,197,24,0.08);
          border-color: rgba(245,197,24,0.3);
          transform: translateY(-4px);
        }
        .ind-icon {
          color: #f5c518;
          flex-shrink: 0;
        }
        .ind-content {}
        .ind-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          font-weight: 700;
          color: #f5c518;
          margin-bottom: 0.4rem;
        }
        .ind-desc {
          font-size: 0.85rem;
          color: rgba(250,243,224,0.6);
          line-height: 1.5;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}