"use client";
import {
  ShoppingBag,
  Heart,
  Plane,
  Home,
  Utensils,
  Lightbulb,
  Briefcase,
  Monitor,
} from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "E-Commerce Systems" },
  { icon: Heart, name: "Healthcare & MedTech" },
  { icon: Plane, name: "Travel & Hospitality Apps" },
  { icon: Home, name: "Real Estate Platforms" },
  { icon: Utensils, name: "Food & Restaurant Order Systems" },
  { icon: Lightbulb, name: "SaaS & Education Tech" },
  { icon: Briefcase, name: "FinTech & Professional Services" },
  { icon: Monitor, name: "Entertainment & Media Streaming" },
];

export default function IndustriesSection() {
  return (
    <section
      style={{
        background: "#faf3e0",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 900,
              color: "#652b32",
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-0.025em",
            }}
          >
            Industries We{" "}
            <span
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                fontWeight: 900,
                color: "#652b32",
                lineHeight: 1.1,
                marginBottom: "20px",
                letterSpacing: "-0.025em",
              }}
            >
              Serve
            </span>
          </h2>
          <p
            style={{
              color: "#652b32",
              opacity: 0.7,
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Our UI UX agency design services handle various industries to make
            sure that every business gets a custom user interface and user experience design.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                style={{
                  background: "#fff",
                  padding: "32px",
                  borderRadius: "24px",
                  border: "2px solid rgba(101,43,50,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-5px)";
                  el.style.borderColor = "#652b32";
                  el.style.boxShadow = "0 15px 35px rgba(101,43,50,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "none";
                  el.style.borderColor = "rgba(101,43,50,0.06)";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#652b32",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color="#f5c518" />
                </div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "#652b32",
                    lineHeight: 1.3,
                  }}
                >
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
