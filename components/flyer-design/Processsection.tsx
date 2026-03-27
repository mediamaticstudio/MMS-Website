"use client";
import { Target, FileText, Palette, Monitor, Send, BarChart2 } from "lucide-react";

const steps = [
  { icon: Target, number: "01", title: "Knowing What You Want to Achieve in Business", description: "We research what you want to accomplish." },
  { icon: FileText, number: "02", title: "Strategic Content Planning", description: "We create powerful content and offerings." },
  { icon: Palette, number: "03", title: "Execution of Creative Designs", description: "Flyers that are attractive and in accordance with your brand." },
  { icon: Monitor, number: "04", title: "Platform Optimization", description: "We design with print and electronic distribution in mind." },
  { icon: Send, number: "05", title: "Distribution Planning", description: "We advise you on how to distribute flyers effectively." },
  { icon: BarChart2, number: "06", title: "Performance Tracking", description: "We measure performance in order to improve future campaigns." },
];

export default function ProcessSection() {
  return (
    <section
      style={{
        background: "#652b32",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(245,197,24,0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
          pointerEvents: "none",
        }}
      />
      {/* Circle decor */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "60px solid rgba(245,197,24,0.08)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#faf3e0",
              color: "#652b32",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            <BarChart2 size={14} />
            How We Work
          </div>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 900,
              color: "#faf3e0",
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-0.025em",
            }}
          >
            Our Proven{" "}
            <span
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                fontWeight: 900,
                color: "#faf3e0",
                lineHeight: 1.1,
                marginBottom: "20px",
                letterSpacing: "-0.025em",
              }}
            >
              Flyer Marketing
            </span>
            <br />
            Strategy for Brand Promotion
          </h2>

          <p
            style={{
              color: "rgba(250,243,224,0.7)",
              fontSize: "1.08rem",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            The flyer marketing plan is planned to provide quantifiable outcomes
            in a step-by-step process.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isYellow = index % 3 === 1;
            return (
              <div
                key={step.number}
                style={{
                  background: "#faf3e0",
                  borderRadius: "20px",
                  padding: "40px 32px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.22s, box-shadow 0.22s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-6px) scale(1.01)";
                  el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Big watermark number */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "16px",
                    fontSize: "7rem",
                    fontWeight: 900,
                    color: isYellow ? "rgba(101,43,50,0.1)" : "rgba(101,43,50,0.07)",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {step.number}
                </div>

                {/* Step badge */}
                <div
                  style={{
                    display: "inline-block",
                    background: isYellow ? "#652b32" : "#652b32",
                    color: "#f5c518",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    padding: "5px 14px",
                    borderRadius: "999px",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                  }}
                >
                  STEP {step.number}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    background: isYellow ? "#652b32" : "#652b32",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: "0 4px 16px rgba(101,43,50,0.25)",
                  }}
                >
                  <Icon size={24} color="#f5c518" />
                </div>

                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "#652b32",
                    marginBottom: "10px",
                    lineHeight: 1.35,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: isYellow ? "rgba(101,43,50,0.75)" : "rgba(101,43,50,0.65)",
                    lineHeight: 1.75,
                    fontWeight: 400,
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div
          style={{
            marginTop: "60px",
            background: "#faf3e0",
            borderRadius: "20px",
            padding: "36px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#652b32",
                marginBottom: "6px",
              }}
            >
              This well organized method will make your flyers a potent marketing product.
            </div>
            <div style={{ color: "rgba(101,43,50,0.65)", fontSize: "0.9rem", fontWeight: 500 }}>
              Trusted by 500+ businesses worldwide.
            </div>
          </div>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#652b32",
              color: "#f5c518",
              padding: "16px 36px",
              borderRadius: "999px",
              fontWeight: 800,
              fontSize: "0.95rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")
            }
          >
            <Target size={17} />
            Promote Your Business with Flyers
          </a>
        </div>
      </div>

      <style>{`
      `}</style>
    </section>
  );
}
