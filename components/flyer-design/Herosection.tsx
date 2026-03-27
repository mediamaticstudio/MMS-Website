"use client";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      style={{
        background: "#faf3e0",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BIG background text watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "22vw",
          fontWeight: 900,
          color: "rgba(101,43,50,0.05)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        FLYER
      </div>

      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,197,24,0.25) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(101,43,50,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating icons */}
      {[
        { icon: Star, top: "12%", left: "6%", size: 32, color: "#f5c518", delay: "0s" },
        { icon: Sparkles, bottom: "20%", right: "8%", size: 36, color: "#652b32", delay: "1s" },
        { icon: Zap, top: "65%", left: "4%", size: 26, color: "#f5c518", delay: "2s" },
        { icon: Star, top: "25%", right: "14%", size: 20, color: "#652b32", delay: "0.5s" },
      ].map(({ icon: Icon, top, left, right, bottom, size, color, delay }, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top, left, right, bottom,
            color,
            opacity: 0.5,
            animation: `heroFloat 5s ease-in-out infinite`,
            animationDelay: delay,
          }}
        >
          <Icon size={size} fill={color} />
        </div>
      ))}

      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "80px 40px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "72px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* LEFT */}
        <div>
          {/* Pill badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#f5c518",
              color: "#652b32",
              padding: "12px 24px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "48px 0 32px 0",
              boxShadow: "0 4px 16px rgba(245,197,24,0.45)",
            }}
          >
            <Sparkles size={14} />
            Best Flyer Design Company
          </div>

          <h1
            style={{
              fontSize: "clamp(3rem, 5.5vw, 5rem)",
              fontWeight: 900,
              color: "#652b32",
              lineHeight: 1.05,
              marginBottom: "28px",
              letterSpacing: "-0.03em",
            }}
          >
            Business{" "}
            <span
              style={{
                fontSize: "clamp(3rem, 5.5vw, 5rem)",
                fontWeight: 900,
                color: "#652b32",
                lineHeight: 1.05,
                marginBottom: "28px",
                letterSpacing: "-0.03em",
              }}
            >
              Marketing
            </span>
            <br />
            &amp;{" "}
            <span
              style={{
                fontSize: "clamp(3rem, 5.5vw, 5rem)",
                fontWeight: 900,
                color: "#652b32",
                lineHeight: 1.05,
                marginBottom: "28px",
                letterSpacing: "-0.03em",
              }}
            >
              Promotions
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "#652b32",
              lineHeight: 1.8,
              marginBottom: "44px",
              fontWeight: 400,
              maxWidth: "500px",
              opacity: 0.8,
            }}
          >
            The appropriate selection of the flyer design company can have a
            potent impact on your brand in communication with the customers in
            the modern competitive market.
          </p>

          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#652b32",
              color: "#f5c518",
              padding: "18px 44px",
              borderRadius: "999px",
              fontWeight: 800,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: "0 8px 30px rgba(101,43,50,0.3)",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px) scale(1.02)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 40px rgba(101,43,50,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(101,43,50,0.3)";
            }}
          >
            Start Your Flyer Design Now
            <ArrowRight size={20} />
          </a>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "56px",
              paddingTop: "40px",
              borderTop: "2px dashed rgba(101,43,50,0.15)",
            }}
          >
            {[
              { value: "500+", label: "Brands Served" },
              { value: "12+", label: "Industries" },
              { value: "99%", label: "Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 900,
                    color: "#652b32",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "#652b32",
                    opacity: 0.6,
                    marginTop: "6px",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Visual Card */}
        <div style={{ position: "relative" }}>
          {/* Main card */}
          <div
            style={{
              background: "#652b32",
              borderRadius: "32px",
              padding: "52px 44px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(101,43,50,0.3)",
            }}
          >
            {/* Decorative inner ring */}
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                border: "40px solid rgba(245,197,24,0.1)",
              }}
            />

            <div
              style={{
                color: "#f5c518",
                marginBottom: "24px",
              }}
            >
              <Sparkles size={52} />
            </div>

            <div
              style={{
                fontWeight: 900,
                fontSize: "2rem",
                color: "#faf3e0",
                lineHeight: 1.2,
                marginBottom: "16px",
              }}
            >
              Flyers That Convert
            </div>

            <div
              style={{
                color: "rgba(250,243,224,0.7)",
                fontSize: "0.98rem",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}
            >
              Beautiful. Strategic. Results-driven flyer designs for every
              business.
            </div>

            {/* Mini flyer cards */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { bg: "#f5c518", h: 90 },
                { bg: "#faf3e0", h: 75 },
                { bg: "rgba(245,197,24,0.4)", h: 82 },
              ].map((card, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${card.h}px`,
                    background: card.bg,
                    borderRadius: "10px",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating badge — yellow */}
          <div
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "-24px",
              background: "#f5c518",
              borderRadius: "16px",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 8px 28px rgba(245,197,24,0.5)",
            }}
          >
            <Star size={20} fill="#652b32" color="#652b32" />
            <span
              style={{
                fontWeight: 800,
                fontSize: "0.88rem",
                color: "#652b32",
              }}
            >
              5-Star Designs
            </span>
          </div>

          {/* Floating badge 2 */}
          <div
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              background: "#faf3e0",
              border: "2px solid #f5c518",
              borderRadius: "12px",
              padding: "12px 20px",
              boxShadow: "0 6px 24px rgba(101,43,50,0.15)",
            }}
          >
            <div
              style={{
                fontWeight: 900,
                fontSize: "1.2rem",
                color: "#652b32",
                lineHeight: 1,
              }}
            >
              500+
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                color: "#652b32",
                opacity: 0.65,
                fontWeight: 600,
              }}
            >
              Happy Clients
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}
