"use client";

import { useState } from "react";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Plane,
  Users,
  GraduationCap,
  Truck,
  Film,
  Home,
  Gamepad2,
  Droplets,
  Car,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Industry {
  Icon: LucideIcon;
  name: string;
  desc: string;
}

const industries: Industry[] = [
  { Icon: HeartPulse, name: "Healthcare", desc: "Automate processes, analyze data, and improve patient satisfaction." },
  { Icon: Landmark, name: "Finance", desc: "Mobile banking apps with the latest fintech technology." },
  { Icon: ShoppingCart, name: "eCommerce", desc: "Custom apps integrated with your commerce infrastructure." },
  { Icon: Plane, name: "Travel", desc: "Hospitality solutions for small and large-scale enterprises." },
  { Icon: Users, name: "Social Media", desc: "Custom social platforms bringing businesses closer to customers." },
  { Icon: GraduationCap, name: "Education", desc: "e-Learning apps with exciting, informative experiences." },
  { Icon: Truck, name: "Logistics", desc: "Custom logistics platforms with tracking and auto-dispatching." },
  { Icon: Film, name: "Entertainment", desc: "Innovative, trend-focused media and entertainment solutions." },
  { Icon: Home, name: "Real Estate", desc: "Flawless property listings, search, and user interfaces." },
  { Icon: Gamepad2, name: "Gaming", desc: "Top-rated gaming platforms for desktop, web, and mobile." },
  { Icon: Droplets, name: "Oil & Gas", desc: "Software solutions for business process automation." },
  { Icon: Car, name: "Automotive", desc: "Superior transport and automotive app solutions." },
];

export default function IndustriesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-28 px-12" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1260px] mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-18">
          <div className="section-label section-label-light inline-flex mb-5">
            <span
              className="inline-block w-4 h-0.5 rounded"
              style={{ background: "var(--burgundy)" }}
            />
            Expertise Across Sectors
          </div>
          <h2
            className="font-display font-black leading-[1.1] tracking-[-1px] mb-4"
            style={{
              fontSize: "clamp(34px, 4vw, 54px)",
              color: "var(--burgundy)",
            }}
          >
            Industries We{" "}
            <span style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "var(--gold)" }}>
              Serve
              <span
                className="absolute -bottom-1.5 left-0 right-0 h-1 rounded"
                style={{ background: "var(--gold)" }}
              />
            </span>
          </h2>
          <p
            className="text-base leading-[1.8] max-w-[480px] mx-auto"
            style={{ color: "#6b4045", fontFamily: "var(--font-dm-sans)" }}
          >
            10+ years of mobile app development across 14+ industries worldwide.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-4 gap-[18px]">
          {industries.map(({ Icon, name, desc }, i) => (
            <div
              key={name}
              className="card-spring rounded-2xl p-7 cursor-pointer relative overflow-hidden"
              style={{
                background: hovered === i ? "var(--burgundy)" : "#fff",
                border: "2px solid",
                borderColor:
                  hovered === i ? "var(--burgundy)" : "rgba(101,43,50,0.09)",
                boxShadow:
                  hovered === i
                    ? "0 16px 40px rgba(101,43,50,0.22)"
                    : "0 2px 8px rgba(101,43,50,0.05)",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Yellow corner on hover */}
              <div
                className="absolute top-0 right-0 transition-all duration-300"
                style={{
                  width: hovered === i ? "50px" : "0",
                  height: hovered === i ? "50px" : "0",
                  background: "var(--gold)",
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                }}
              />

              {/* Icon */}
              <div
                className="w-[50px] h-[50px] rounded-[10px] flex items-center justify-center mb-4 transition-colors duration-300"
                style={{
                  background:
                    hovered === i
                      ? "rgba(245,197,24,0.15)"
                      : "rgba(101,43,50,0.07)",
                }}
              >
                <Icon
                  size={22}
                  strokeWidth={1.8}
                  color={hovered === i ? "var(--gold)" : "var(--burgundy)"}
                />
              </div>

              <h3
                className="font-display font-bold text-[16px] leading-snug mb-2 transition-colors duration-300"
                style={{
                  color: hovered === i ? "var(--gold)" : "var(--burgundy)",
                }}
              >
                {name}
              </h3>
              <p
                className="text-[13px] leading-[1.65] transition-colors duration-300"
                style={{
                  color:
                    hovered === i ? "rgba(250,243,224,0.7)" : "#6b4045",
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

