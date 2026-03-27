"use client";
import {
  Megaphone, Calendar, ShoppingBag, Building2, Share2, Printer,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Custom Promotional Flyer Design",
    description:
      "We design specially tailored marketing fliers that capture your brand name and marketing objectives. All designs are customized to bring out your offers, discounts or campaigns in a very attractive manner.",
  },
  {
    icon: Calendar,
    title: "Business Event Flyer Design",
    description:
      "Our services in designing business event flyers enable you to make seminars, conferences and special events stylish. Our layout designs are catchy and all the necessary information is included in them.",
  },
  {
    icon: ShoppingBag,
    title: "Product Promotion Flyer Design",
    description:
      "Flyers on product promotion will be structured to present your products in the most appealing manner. Our emphasis is to bring out the main qualities, advantages and pictures that can make purchases.",
  },
  {
    icon: Building2,
    title: "Corporate Flyer Design for Brands",
    description:
      "The whole concept of corporate flyer design is consistency and professionalism. We produce flyers to suit your brand requirements but produce effective messages.",
  },
  {
    icon: Share2,
    title: "Social Media Flyer Design for Marketing",
    description:
      "The social media flyer design assists companies in finding their way to interact with audiences. Our designs are visually optimized to attract attention during the scrolling of the designs.",
  },
  {
    icon: Printer,
    title: "Print Ready Flyer Design Services",
    description:
      "Our print ready best flyer design services guarantee that your designs are correctly formatted to be the best regarding quality printing. We prevent the possibility of printing errors.",
  },
];

export default function ServicesSection() {
  return (
    <section
      style={{
        background: "#faf3e0",
        padding: "110px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative stripe top */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "6px",
          background: "repeating-linear-gradient(90deg, #652b32 0px, #652b32 24px, #f5c518 24px, #f5c518 48px)",
        }}
      />

      {/* Diagonal background shape */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-150px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,197,24,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(101,43,50,0.08)",
              color: "#652b32",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "24px",
              border: "1.5px solid rgba(101,43,50,0.15)",
            }}
          >
            <Megaphone size={14} color="#652b32" />
            What We Offer
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
            Creative Flyer Design{" "}
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
              Services
            </span>
            <br />
            for Business Advertising
          </h2>

          <p
            style={{
              color: "#652b32",
              opacity: 0.7,
              fontSize: "1.08rem",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontWeight: 400,
            }}
          >
            Our flyer design services will be designed to suit the various
            requirements of the contemporary companies.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const highlighted = index === 0 || index === 3;
            return (
              <div
                key={service.title}
                style={{
                  background: highlighted ? "#652b32" : "#fff",
                  border: highlighted
                    ? "2px solid #652b32"
                    : "2px solid rgba(101,43,50,0.1)",
                  borderRadius: "20px",
                  padding: "40px 32px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = highlighted
                    ? "0 24px 60px rgba(101,43,50,0.35)"
                    : "0 20px 56px rgba(101,43,50,0.14)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Decorative circle */}
                <div
                  style={{
                    position: "absolute",
                    top: "-30px",
                    right: "-30px",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: highlighted
                      ? "rgba(245,197,24,0.12)"
                      : "rgba(101,43,50,0.05)",
                  }}
                />

                {/* Icon box */}
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    background: highlighted ? "#f5c518" : "#652b32",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    boxShadow: highlighted
                      ? "0 4px 18px rgba(245,197,24,0.5)"
                      : "0 4px 18px rgba(101,43,50,0.25)",
                  }}
                >
                  <Icon size={26} color={highlighted ? "#652b32" : "#f5c518"} />
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: highlighted ? "#f5c518" : "#652b32",
                    marginBottom: "14px",
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: highlighted ? "rgba(250,243,224,0.75)" : "rgba(101,43,50,0.7)",
                    lineHeight: 1.78,
                    fontWeight: 400,
                  }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#652b32",
              color: "#f5c518",
              padding: "18px 48px",
              borderRadius: "999px",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: "0 8px 32px rgba(101,43,50,0.28)",
              transition: "transform 0.22s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")
            }
          >
            <Megaphone size={18} />
            Promote Your Business with Flyers
          </a>
        </div>
      </div>

      <style>{`
      `}</style>
    </section>
  );
}
