"use client";

import { Target, Users2, Clipboard, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const techStack = [
  { category: "Languages",   items: ["Kotlin", "Java", "TypeScript"] },
  { category: "Frameworks",  items: ["Jetpack Compose", "Android SDK", "React Native"] },
  { category: "Architecture",items: ["MVVM", "Clean Arch", "MVI"] },
  { category: "Backend",     items: ["Node.js", "Firebase", "AWS"] },
  { category: "Database",    items: ["Room DB", "SQLite", "MongoDB"] },
  { category: "Tools",       items: ["Android Studio", "Gradle", "Git"] },
];

interface Reason {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const reasons: Reason[] = [
  {
    Icon: Target,
    title: "Strategic Approach",
    desc: "We design with Android's limitations in mind — device variations, background restrictions, and Play Store guidelines from day one.",
  },
  {
    Icon: Users2,
    title: "Team of Professionals",
    desc: "The same people who plan the app build it and implement edits — no handover delays or miscommunication.",
  },
  {
    Icon: Clipboard,
    title: "Clearly Defined Scope",
    desc: "We work with your team to decide initial features vs. deferred ones — so you only pay for what you need.",
  },
  {
    Icon: TrendingUp,
    title: "Performance & Scalability",
    desc: "Apps built to evolve with OS updates, policy changes, and new requirements — future work avoids duplication.",
  },
];

export default function TechStackSection() {
  return (
    <section
      className="py-28 px-12 relative overflow-hidden"
      style={{ background: "var(--burgundy)" }}
    >
      <div className="absolute inset-0 pointer-events-none line-grid" />

      <div className="max-w-[1260px] mx-auto relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-18">
          <div className="section-label section-label-dark inline-flex mb-5">
            <span
              className="inline-block w-4 h-0.5 rounded"
              style={{ background: "var(--gold)" }}
            />
            Our Stack & Strengths
          </div>
          <h2
            className="font-display font-black leading-[1.1] tracking-[-1px]"
            style={{
              fontSize: "clamp(34px, 4vw, 54px)",
              color: "var(--cream)",
            }}
          >
            Tech Stack &{" "}
            <span style={{ color: "var(--gold)" }}>Why Choose Us</span>
          </h2>
        </div>

        {/* ── Tech columns ── */}
        <div className="grid grid-cols-6 gap-3.5 mb-20">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-xl overflow-hidden"
              style={{
                background: "rgba(250,243,224,0.05)",
                border: "1px solid rgba(245,197,24,0.15)",
              }}
            >
              {/* Category header */}
              <div
                className="px-4 py-3 text-center"
                style={{ background: "var(--gold)" }}
              >
                <span
                  className="text-[11px] font-extrabold tracking-[1.5px] uppercase"
                  style={{ color: "var(--burgundy)" }}
                >
                  {group.category}
                </span>
              </div>
              {/* Items */}
              {group.items.map((item, j) => (
                <div
                  key={item}
                  className="px-4 py-[11px] text-[13.5px] font-medium text-center"
                  style={{
                    color: "rgba(250,243,224,0.8)",
                    fontFamily: "var(--font-dm-sans)",
                    borderBottom:
                      j < group.items.length - 1
                        ? "1px solid rgba(245,197,24,0.07)"
                        : "none",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ── Why Choose Us ── */}
        <div className="grid grid-cols-4 gap-[22px]">
          {reasons.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: "rgba(250,243,224,0.05)",
                border: "1px solid rgba(245,197,24,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(245,197,24,0.08)";
                e.currentTarget.style.borderColor = "rgba(245,197,24,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(250,243,224,0.05)";
                e.currentTarget.style.borderColor = "rgba(245,197,24,0.15)";
              }}
            >
              <div
                className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "var(--gold)",
                  boxShadow: "0 6px 20px rgba(245,197,24,0.35)",
                }}
              >
                <Icon size={24} strokeWidth={1.8} color="var(--burgundy)" />
              </div>
              <h3
                className="font-display font-bold text-[17px] mb-2.5"
                style={{ color: "var(--gold)" }}
              >
                {title}
              </h3>
              <p
                className="text-[14px] leading-[1.75]"
                style={{
                  color: "rgba(250,243,224,0.65)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
