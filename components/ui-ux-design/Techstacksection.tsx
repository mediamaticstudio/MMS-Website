"use client";
import { Layers, TrendingUp, Globe, Cpu, Shield, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Comprehensive UI/UX Audit",
    description:
      "We start with a comprehensive UI UX audit where we examine your current digital platform to find friction points, usability problems, and missed opportunities. This then becomes the basis for the redesign of the system with a strategic view.",
    tag: "UX Audit",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Design Strategy",
    description:
      "Our design methodology is based purely on data. We operate with a data driven design strategy where we employ analytics, heatmaps, and user behavior patterns to create designs that enhance interaction, minimize bounce rates, and improve conversions.",
    tag: "Analytics",
  },
  {
    icon: Globe,
    title: "Responsive Design Across Devices",
    description:
      "We design responsive, adaptive experiences that work flawlessly across all devices and screen sizes. Our responsive web design services ensure users enjoy the full experience whether on desktop, tablet, or mobile.",
    tag: "Responsive",
  },
  {
    icon: Cpu,
    title: "Interaction Design & Animations",
    description:
      "We incorporate micro-interactions to bring life to your products through interaction design and animation in an intelligent way. These are smooth transitions, hover effects, and feedback loops that make your product feel more engrossing.",
    tag: "Interactive",
  },
  {
    icon: Shield,
    title: "Design System Development",
    description:
      "We build scalable design systems with reusable components, design tokens, and comprehensive style guides. This ensures brand consistency across all touchpoints and accelerates future development.",
    tag: "Systems",
  },
  {
    icon: Clock,
    title: "Rapid Prototyping & Testing",
    description:
      "Our rapid prototyping process enables quick validation of design concepts through interactive prototypes and user testing — delivering results in days, not weeks.",
    tag: "Fast Delivery",
  },
];

const stats = [
  { icon: Award, value: "500+", label: "Happy Clients" },
  { icon: Layers, value: "2000+", label: "Projects Delivered" },
  { icon: Users, value: "12+", label: "Industries Served" },
  { icon: TrendingUp, value: "99%", label: "Client Satisfaction" },
];

export default function TechstackSection() {
  return (
    <section
      style={{
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Big decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          border: "60px solid rgba(101,43,50,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "50px solid rgba(250,243,224,0.18)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#652b32",
              color: "#f5c518",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            <Award size={14} />
            Why Mediamaticstudio
          </div>

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
            The Approach &amp;{" "}
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
              Expertise
            </span>
            <br />
            Behind Every UI/UX Design
          </h2>

          <p
            style={{
              color: "#652b32",
              opacity: 0.75,
              fontSize: "1.08rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            We are Mediamaticstudio — designing beautiful and conversion-oriented
            digital experiences to improve business performance.
          </p>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "72px",
          }}
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                style={{
                  background: "#652b32",
                  borderRadius: "18px",
                  padding: "32px 24px",
                  textAlign: "center",
                  transition: "transform 0.22s",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.transform = "translateY(0)")
                }
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                  <Icon size={28} color="#f5c518" />
                </div>
                <div
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 900,
                    color: "#f5c518",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    color: "rgba(250,243,224,0.65)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                style={{
                  background: "#faf3e0",
                  borderRadius: "18px",
                  padding: "36px 28px",
                  border: "2px solid rgba(101,43,50,0.08)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.22s, box-shadow 0.22s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 50px rgba(101,43,50,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "18px",
                    right: "18px",
                    background: "rgba(101,43,50,0.08)",
                    color: "#652b32",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    textTransform: "uppercase",
                  }}
                >
                  {f.tag}
                </div>

                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "#652b32",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Icon size={24} color="#f5c518" />
                </div>

                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#652b32",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                    paddingRight: "70px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "rgba(101,43,50,0.7)",
                    lineHeight: 1.78,
                    fontWeight: 400,
                  }}
                >
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
      `}</style>
    </section>
  );
}
