"use client";
import {
  Home, Plane, Factory, Car, Dumbbell, Zap, Leaf,
  HardHat, Newspaper, CalendarCheck, Sparkles, Truck,
} from "lucide-react";

const industries = [
  { icon: Home, label: "Real Estate", desc: "We design flyers to the real estate companies to advertise the houses, offerings, and the buyers." },
  { icon: Plane, label: "Travel & Tourism", desc: "Our layouts assist travel agencies to advertise destinations, packages, and offers using appealing layouts." },
  { icon: Factory, label: "Manufacturing", desc: "Professional flyers are designed by us that convey product information and product capabilities." },
  { icon: Car, label: "Automotive", desc: "The design of the automotive flyers is aimed at the demonstration of the vehicles, the offers, and services." },
  { icon: Dumbbell, label: "Sports & Fitness", desc: "We design catchy and vibrant flyers to the gyms, sports clubs, and fitness events." },
  { icon: Zap, label: "Energy & Utilities", desc: "Our flyers facilitate services and campaign awareness of the energy and utility companies." },
  { icon: Leaf, label: "Agriculture & Agri Tech", desc: "We prepare informative flyers to agricultural companies to advertise goods and inventions." },
  { icon: HardHat, label: "Construction", desc: "Construction flyer advertising showcases projects, services and expertise in a professional manner." },
  { icon: Newspaper, label: "Media & Publishing", desc: "Our publications, campaign and promotion flyers are attractively designed." },
  { icon: CalendarCheck, label: "Event Management", desc: "Our event flyers are structured in such a way that they appeal to people and make them attend." },
  { icon: Sparkles, label: "Beauty & Wellness", desc: "We create beautiful salon, spa, and wellness flyers to market the services." },
  { icon: Truck, label: "Logistics & Warehouse", desc: "Our flyers are effective in getting the logistics companies to communicate services and capabilities." },
];

const colorPatterns = [
  { bg: "#faf3e0", iconBg: "#652b32", iconColor: "#f5c518", border: "rgba(101,43,50,0.1)" },
  { bg: "#652b32", iconBg: "#f5c518", iconColor: "#652b32", border: "transparent" },
  { bg: "#f5c518", iconBg: "#652b32", iconColor: "#f5c518", border: "transparent" },
];

export default function IndustriesSection() {
  return (
    <section
      style={{
        background: "#faf3e0",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(101,43,50,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(101,43,50,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
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
              background: "rgba(101,43,50,0.08)",
              color: "#652b32",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "24px",
              border: "1.5px solid rgba(101,43,50,0.12)",
            }}
          >
            <Factory size={14} color="#652b32" />
            Who We Work With
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
            </span>{" "}
            with Flyer Design
          </h2>

          <p
            style={{
              color: "rgba(101,43,50,0.7)",
              fontSize: "1.08rem",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Our flyer designing services are applicable to virtually any
            industry. We realize that each industry is different yet we have
            designed it in a particular way.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18px",
          }}
        >
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            const pattern = colorPatterns[index % 3];
            return (
              <div
                key={ind.label}
                style={{
                  background: pattern.bg,
                  border: `2px solid ${pattern.border}`,
                  borderRadius: "18px",
                  padding: "28px 22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  cursor: "default",
                  transition: "transform 0.22s, box-shadow 0.22s",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-6px) scale(1.01)";
                  el.style.boxShadow = "0 20px 50px rgba(101,43,50,0.18)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "50px",
                    height: "50px",
                    background: pattern.iconBg,
                    opacity: 0.12,
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                  }}
                />

                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: pattern.iconBg,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} color={pattern.iconColor} />
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "0.98rem",
                      fontWeight: 800,
                      color: pattern.bg === "#652b32" ? "#f5c518" : "#652b32",
                      marginBottom: "8px",
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {ind.label}
                  </div>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color:
                        pattern.bg === "#652b32"
                          ? "rgba(250,243,224,0.7)"
                          : "rgba(101,43,50,0.65)",
                      lineHeight: 1.7,
                      fontWeight: 400,
                    }}
                  >
                    {ind.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            marginTop: "72px",
            background: "#652b32",
            borderRadius: "24px",
            padding: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "-80px",
              top: "-80px",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              border: "50px solid rgba(245,197,24,0.1)",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: 900,
                color: "#faf3e0",
                marginBottom: "10px",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Ready to Elevate Your Business with Flyer Design?
            </h3>
            <p style={{ color: "rgba(250,243,224,0.65)", fontSize: "1rem", lineHeight: 1.6 }}>
              Market better through the quality flyer design that will capture interest and produce results.
            </p>
          </div>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#f5c518",
              color: "#652b32",
              padding: "18px 40px",
              borderRadius: "999px",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 6px 24px rgba(245,197,24,0.45)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")
            }
          >
            <Sparkles size={18} color="#652b32" />
            Get Your Flyer Design Today
          </a>
        </div>
      </div>

      <style>{`
      `}</style>
    </section>
  );
}
