"use client";
import { Palette, Settings, FlaskConical, Wrench, RefreshCw, Plug } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Palette,
    title: "UI/UX & Prototyping",
    desc: "User-friendly, interactive, and visually appealing interfaces using Flutter's rich widget set.",
  },
  {
    Icon: Settings,
    title: "Custom App Development",
    desc: "High-performance Flutter apps from one codebase targeting web, desktop, iOS, and Android.",
  },
  {
    Icon: FlaskConical,
    title: "QA & Testing",
    desc: "Thorough inspection and debugging to ensure minimal errors and peak performance.",
  },
  {
    Icon: Wrench,
    title: "App Maintenance",
    desc: "Ongoing bug fixes, OS upgrades, performance improvements, and new feature additions.",
  },
  {
    Icon: RefreshCw,
    title: "App Modernization",
    desc: "Migrate your Flutter app to the latest version for better security and performance.",
  },
  {
    Icon: Plug,
    title: "API Integration",
    desc: "Seamlessly integrate third-party APIs and services to expand your app's functionality.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-inner">
        <div className="section-label">What We Offer</div>
        <h2 className="section-title">
          Our Flutter Development <span>Services</span>
        </h2>
        <p className="section-sub">
          End-to-end Flutter solutions — from design to deployment and beyond.
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-icon"><s.Icon size={30} strokeWidth={1.8} /></div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              {/* <div className="service-arrow">→</div> */}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          background: #faf3e0;
          padding: 6rem 2rem;
        }
        .services-inner {
          max-width: 1200px;
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
          color: #652b32;
          position: relative;
          z-index: 1;
        }
        .section-title span::after {
          content: '';
          position: absolute;
          bottom: 8%;
          left: -2px;
          right: -2px;
          height: 28%;
          background: #f5c518;
          opacity: 0.4;
          z-index: -1;
          border-radius: 4px;
        }
        .section-sub {
          color: rgba(101,43,50,0.65);
          font-size: 1.05rem;
          margin-bottom: 3rem;
          max-width: 520px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .service-card {
          background: #fff;
          border: 1px solid rgba(101,43,50,0.1);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          animation: fadeUp 0.5s ease both;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #652b32, #f5c518);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }
        .service-card:hover::before { transform: scaleX(1); }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(101,43,50,0.12);
          border-color: rgba(101,43,50,0.2);
        }
        .service-icon {
          color: #652b32;
          margin-bottom: 1rem;
          display: block;
        }
        .service-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #652b32;
          margin-bottom: 0.75rem;
        }
        .service-desc {
          color: rgba(101,43,50,0.65);
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .service-arrow {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          width: 36px;
          height: 36px;
          background: rgba(245,197,24,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #652b32;
          font-size: 1rem;
          transition: background 0.2s, transform 0.2s;
        }
        .service-card:hover .service-arrow {
          background: #f5c518;
          transform: translateX(3px);
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}