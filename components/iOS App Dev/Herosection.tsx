"use client";

import { useState, useEffect } from "react";
import DigitalAuditModal from "@/components/DigitalAuditModal";

const words = ["Swift", "Flutter", "React Native", "Kotlin"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <DigitalAuditModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        style={{
          background: "linear-gradient(135deg, #652b32 0%, #3d1219 60%, #1a0508 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Georgia', serif",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          marginTop: "-1px",
          paddingTop: "1px",
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: "420px", height: "420px", borderRadius: "50%",
          border: "2px solid rgba(245,197,24,0.18)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "40px", right: "40px",
          width: "260px", height: "260px", borderRadius: "50%",
          border: "2px solid rgba(245,197,24,0.10)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-60px", left: "-60px",
          width: "300px", height: "300px", borderRadius: "50%",
          background: "rgba(245,197,24,0.05)", pointerEvents: "none",
        }} />

        {/* Dot grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(245,197,24,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 32px",
          position: "relative",
          zIndex: 1,
          width: "100%",
          boxSizing: "border-box",
        }}>
          <h1 style={{
            fontSize: "clamp(3rem, 7vw, 5rem)",
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: "800",
            color: "#faf3e0",
            lineHeight: 1.08,
            margin: "0 0 20px",
            maxWidth: "760px",
          }}>
            We Build iOS Apps<br />
            <span style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "#f5c518" }}>Powered By </span>
            <span style={{
              color: "#f5c518",
              display: "inline-block",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
              fontStyle: "italic",
              fontSize: "clamp(34px, 4vw, 54px)",
            }}>{words[wordIndex]}</span>
          </h1>

          <p style={{
            fontSize: "18px",
            color: "rgba(250,243,224,0.7)",
            maxWidth: "520px",
            lineHeight: 1.75,
            margin: "0 0 48px",
            fontFamily: "'Georgia', serif",
          }}>
            Premium iOS application development services crafted for the Apple ecosystem — connecting your brand with high-spending customers worldwide.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {/* ── CTA opens modal ── */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              style={{
                background: "#f5c518",
                color: "#652b32",
                padding: "16px 38px",
                fontFamily: "'Georgia', serif",
                fontWeight: "700",
                fontSize: "15px",
                letterSpacing: "1px",
                border: "none",
                borderRadius: "4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 6px 28px rgba(245,197,24,0.35)",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 36px rgba(245,197,24,0.5)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 28px rgba(245,197,24,0.35)";
              }}
            >
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <a
              href="#services"
              style={{
                border: "2px solid rgba(250,243,224,0.3)",
                color: "#faf3e0",
                padding: "16px 38px",
                fontFamily: "'Georgia', serif",
                fontWeight: "600",
                fontSize: "15px",
                letterSpacing: "1px",
                textDecoration: "none",
                borderRadius: "4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#f5c518";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,197,24,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(250,243,224,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              Our Services
            </a>
          </div>

          {/* Stats bar */}
          <div style={{
            display: "flex",
            gap: "48px",
            marginTop: "72px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(250,243,224,0.12)",
            flexWrap: "wrap",
          }}>
            {[
              ["200+", "Apps Delivered"],
              ["98%", "Client Satisfaction"],
              ["12+", "Years Experience"],
              ["50+", "Expert Developers"],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  color: "#faf3e0",
                  fontFamily: "'Georgia', serif",
                }}>
                  {num}
                </div>
                <div style={{
                  fontSize: "13px",
                  color: "rgba(250,243,224,0.5)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          html, body { margin: 0 !important; padding: 0 !important; background: #1a0508 !important; }
          main, #__next, #root { margin: 0 !important; padding: 0 !important; background: #1a0508 !important; }
        `}</style>
      </section>
    </>
  );
}