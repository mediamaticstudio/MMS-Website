import {
  Search,
  Map,
  Paintbrush,
  Terminal,
  FlaskConical,
  SendHorizonal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  Icon: LucideIcon;
  number: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    Icon: Search,
    number: "01",
    title: "Discovery",
    desc: "Collection of requirements, device expectations, and usage contexts to lay the right foundation.",
  },
  {
    Icon: Map,
    number: "02",
    title: "Planning",
    desc: "User journeys and data flows are mapped to identify performance and compatibility risks early.",
  },
  {
    Icon: Paintbrush,
    number: "03",
    title: "Design",
    desc: "Interface design accounting for user interaction patterns, screen sizes, and accessibility.",
  },
  {
    Icon: Terminal,
    number: "04",
    title: "Development",
    desc: "Features developed incrementally and reviewed at each stage before moving forward.",
  },
  {
    Icon: FlaskConical,
    number: "05",
    title: "Testing",
    desc: "Rigorous QA on real devices — not just emulators — to ensure production-ready performance.",
  },
  {
    Icon: SendHorizonal,
    number: "06",
    title: "Launch",
    desc: "Deployment to the Play Store with post-launch support, updates, and fixes included.",
  },
];

function StepCard({ step }: { step: Step }) {
  const { Icon, title, desc } = step;
  return (
    <div
      className="rounded-2xl p-7 flex gap-5 items-start"
      style={{
        background: "rgba(250,243,224,0.04)",
        border: "1px solid rgba(245,197,24,0.18)",
      }}
    >
      <div
        className="w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(245,197,24,0.1)" }}
      >
        <Icon size={22} strokeWidth={1.8} color="var(--gold)" />
      </div>
      <div>
        <h3
          className="font-display font-bold text-[18px] mb-2"
          style={{ color: "var(--gold)" }}
        >
          {title}
        </h3>
        <p
          className="text-[14.5px] leading-[1.7]"
          style={{
            color: "rgba(250,243,224,0.65)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section
      className="py-28 px-12 relative overflow-hidden"
      style={{ background: "#652B32" }}
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(245,197,24,0.2), transparent)",
          }}
        />
        <div className="absolute inset-0 dot-grid" />
        <div
          className="absolute top-[20%] -right-52 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label section-label-dark inline-flex mb-5">
            <span
              className="inline-block w-4 h-0.5 rounded"
              style={{ background: "var(--gold)" }}
            />
            How We Work
          </div>
          <h2
            className="font-display font-black leading-[1.1] tracking-[-1px]"
            style={{
              fontSize: "clamp(34px, 4vw, 54px)",
              color: "var(--cream)",
            }}
          >
            Our Development{" "}
            <span style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "var(--gold)" }}>Process</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={step.number}
                className="grid items-center"
                style={{
                  gridTemplateColumns: "1fr 100px 1fr",
                  minHeight: "140px",
                }}
              >
                {/* Left */}
                {isLeft ? (
                  <div className="mr-6">
                    <StepCard step={step} />
                  </div>
                ) : (
                  <div />
                )}

                {/* Center node */}
                <div className="flex flex-col items-center relative z-10">
                  {i > 0 && (
                    <div
                      className="w-0.5 h-7"
                      style={{ background: "rgba(245,197,24,0.2)" }}
                    />
                  )}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--gold)",
                      boxShadow:
                        "0 0 0 6px rgba(245,197,24,0.15), 0 0 30px rgba(245,197,24,0.3)",
                    }}
                  >
                    <span
                      className="text-[13px] font-extrabold"
                      style={{
                        color: "var(--burgundy)",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-0.5 h-7"
                      style={{ background: "rgba(245,197,24,0.2)" }}
                    />
                  )}
                </div>

                {/* Right */}
                {!isLeft ? (
                  <div className="ml-6">
                    <StepCard step={step} />
                  </div>
                ) : (
                  <div />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
