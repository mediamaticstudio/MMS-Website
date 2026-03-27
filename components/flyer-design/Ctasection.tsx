"use client";
import { ArrowRight, Sparkles, Star, CheckCircle, Zap } from "lucide-react";

const highlights = [
  "Custom Flyer Design for Business Promotion",
  "High Quality Flyer Printing Services",
  "Targeted Flyer Distribution Campaigns",
  "Strategic Flyer Marketing Solutions",
];

export default function CtaSection() {
  return (
    <section
      style={{

        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative rings */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: `${i * 340}px`,
            height: `${i * 340}px`,
            border: `2px solid rgba(101,43,50,${0.08 - i * 0.02})`,
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Floating icons */}
      {[
        { icon: Star, top: "12%", left: "8%", size: 36, delay: "0s" },
        { icon: Zap, bottom: "18%", right: "7%", size: 40, delay: "1.5s" },
        { icon: Sparkles, top: "60%", left: "5%", size: 28, delay: "0.8s" },
        { icon: Star, top: "20%", right: "12%", size: 22, delay: "2s" },
      ].map(({ icon: Icon, top, left, right, bottom, size, delay }, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top, left, right, bottom,
            color: "#652b32",
            opacity: 0.25,
            animation: `ctaFloat 5s ease-in-out infinite`,
            animationDelay: delay,
          }}
        >
          <Icon size={size} fill="#652b32" />
        </div>
      ))}

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 40px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
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
            marginBottom: "36px",
          }}
        >
          <Sparkles size={14} />
          Ready to Get Started?
        </div>

        <h2
          style={{
            fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
            fontWeight: 900,
            color: "#652b32",
            lineHeight: 1.08,
            marginBottom: "24px",
            letterSpacing: "-0.03em",
          }}
        >
          Ready to{" "}
          <span
            style={{
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              fontWeight: 900,
              color: "#652b32",
              lineHeight: 1.08,
              marginBottom: "24px",
              letterSpacing: "-0.03em",
            }}
          >
            Elevate
          </span>
          <br />
          Your Business with Flyer Design?
        </h2>

        <p
          style={{
            color: "rgba(101,43,50,0.75)",
            fontSize: "1.12rem",
            lineHeight: 1.8,
            marginBottom: "52px",
            maxWidth: "620px",
            margin: "0 auto 52px",
            fontWeight: 400,
          }}
        >
          Market better through the quality flyer design that will capture
          interest and produce results. Allow Mediamaticstudio to help you make
          impactful designs depending on your business requirements.
        </p>

        {/* Highlights grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "14px",
            maxWidth: "620px",
            margin: "0 auto 52px",
            textAlign: "left",
          }}
        >
          {highlights.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                background: "#faf3e0",
                border: "2px solid rgba(101,43,50,0.1)",
                borderRadius: "12px",
                padding: "16px 18px",
              }}
            >
              <CheckCircle
                size={18}
                color="#652b32"
                style={{ flexShrink: 0, marginTop: "2px" }}
              />
              <span
                style={{
                  color: "#652b32",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  fontWeight: 600,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#652b32",
              color: "#f5c518",
              padding: "20px 52px",
              borderRadius: "999px",
              fontWeight: 800,
              fontSize: "1.05rem",
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: "0 10px 40px rgba(101,43,50,0.35)",
              transition: "transform 0.22s, box-shadow 0.22s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-4px) scale(1.03)";
              el.style.boxShadow = "0 18px 52px rgba(101,43,50,0.45)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "none";
              el.style.boxShadow = "0 10px 40px rgba(101,43,50,0.35)";
            }}
          >
            Get Your Flyer Design Today
            <ArrowRight size={20} />
          </a>

          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#faf3e0",
              color: "#652b32",
              padding: "20px 40px",
              borderRadius: "999px",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              border: "2px solid rgba(101,43,50,0.2)",
              transition: "transform 0.22s, border-color 0.22s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "scale(1.03)";
              el.style.borderColor = "#652b32";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "scale(1)";
              el.style.borderColor = "rgba(101,43,50,0.2)";
            }}
          >
            <Star size={17} color="#652b32" />
            View Our Portfolio
          </a>
        </div>

        {/* Trust notes */}
        <div
          style={{
            marginTop: "52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {["500+ Brands Served", "12+ Industries", "99% Satisfaction"].map((note) => (
            <div
              key={note}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(101,43,50,0.6)",
                fontSize: "0.88rem",
                fontWeight: 600,
              }}
            >
              <CheckCircle size={15} color="#652b32" />
              {note}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ctaFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </section>
  );
}
