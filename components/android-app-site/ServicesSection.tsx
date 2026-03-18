"use client";

import { useState } from "react";
import { Layers, Code2, RefreshCcw, Rocket, ShieldCheck, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  Icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
}

const services: Service[] = [
  {
    Icon: Layers,
    title: "UI/UX & Prototyping",
    desc: "Material Design guidelines for visually appealing, consistent experiences across all Android devices and screen sizes.",
    tag: "Design",
  },
  {
    Icon: Code2,
    title: "Custom App Development",
    desc: "Kotlin-first approach with Java interoperability. Clean architecture, predictable output, and maintainable code.",
    tag: "Engineering",
  },
  {
    Icon: RefreshCcw,
    title: "App Migration Services",
    desc: "Migrate from older frameworks or architectures — including hybrid Android apps — with careful planning.",
    tag: "Migration",
  },
  {
    Icon: Rocket,
    title: "Updates & Enhancement",
    desc: "Feature additions and improvements aligned with the latest Android OS and Google Play Store policies.",
    tag: "Growth",
  },
  {
    Icon: ShieldCheck,
    title: "Ongoing Support & Maintenance",
    desc: "Debug, update, and optimize based on real-world usage patterns. Cloud integration included.",
    tag: "Support",
  },
  {
    Icon: Cloud,
    title: "Cloud Integration",
    desc: "High-end cloud migration solutions to manage your data and maximize the benefits of modern cloud platforms.",
    tag: "Cloud",
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-28 px-12" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1260px] mx-auto">

        {/* ── Header ── */}
        <div className="grid grid-cols-2 gap-10 items-end mb-18">
          <div>
            <div className="section-label section-label-light mb-5">
              <span
                className="inline-block w-4 h-0.5 rounded"
                style={{ background: "var(--burgundy)" }}
              />
              What We Offer
            </div>
            <h2
              className="font-display font-black leading-[1.1] tracking-[-1px]"
              style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "var(--burgundy)" }}
            >
              Android App
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px var(--burgundy)",
                  color: "transparent",
                }}
              >
                Development
              </span>{" "}
              <span style={{ color: "var(--gold)" }}>Services</span>
            </h2>
          </div>
          <p
            className="text-base leading-[1.85] pb-2"
            style={{ color: "#6b4045", fontFamily: "var(--font-dm-sans)" }}
          >
            Best practices in clean architecture, predictable output, and maintainable
            code — from first build to long-term success.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-3 gap-[22px]">
          {services.map(({ Icon, title, desc, tag }, i) => (
            <div
              key={title}
              className="card-spring rounded-2xl p-9 cursor-pointer relative overflow-hidden"
              style={{
                background: hovered === i ? "var(--burgundy)" : "#fff",
                border: "2px solid",
                borderColor:
                  hovered === i ? "var(--burgundy)" : "rgba(101,43,50,0.1)",
                boxShadow:
                  hovered === i
                    ? "0 20px 50px rgba(101,43,50,0.28)"
                    : "0 2px 12px rgba(101,43,50,0.07)",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300"
                style={{
                  background:
                    hovered === i
                      ? "linear-gradient(90deg, var(--gold), rgba(245,197,24,0.3))"
                      : "linear-gradient(90deg, rgba(101,43,50,0.15), transparent)",
                }}
              />

              {/* Icon + Tag row */}
              <div className="flex justify-between items-start mb-6">
                <div
                  className="w-[54px] h-[54px] rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{
                    background:
                      hovered === i
                        ? "rgba(245,197,24,0.15)"
                        : "rgba(101,43,50,0.07)",
                  }}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                    color={hovered === i ? "var(--gold)" : "var(--burgundy)"}
                  />
                </div>
                <span
                  className="text-[10px] font-bold tracking-[1.5px] uppercase rounded px-2.5 py-1 transition-all duration-300"
                  style={{
                    background:
                      hovered === i
                        ? "rgba(245,197,24,0.18)"
                        : "rgba(101,43,50,0.07)",
                    color: hovered === i ? "var(--gold)" : "var(--burgundy)",
                  }}
                >
                  {tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-[19px] leading-snug mb-3 transition-colors duration-300"
                style={{
                  color: hovered === i ? "var(--gold)" : "var(--burgundy)",
                }}
              >
                {title}
              </h3>

              {/* Desc */}
              <p
                className="text-[14.5px] leading-[1.75] mb-6 transition-colors duration-300"
                style={{
                  color:
                    hovered === i ? "rgba(250,243,224,0.75)" : "#6b4045",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {desc}
              </p>

              {/* Learn more */}
              <div
                className="flex items-center gap-2 text-[13px] font-bold tracking-[0.5px] transition-colors duration-300"
                style={{
                  color: hovered === i ? "var(--gold)" : "var(--burgundy)",
                }}
              >
                Learn More
                <span
                  className="inline-block h-px transition-all duration-300"
                  style={{
                    width: hovered === i ? "36px" : "28px",
                    background:
                      hovered === i ? "var(--gold)" : "var(--burgundy)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
