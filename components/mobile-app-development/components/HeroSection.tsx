"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Award,
  Smartphone,
  Zap,
  Cpu,
  ShieldCheck,
  Rocket,
  Layers,
  Briefcase,
  CheckCircle,
  Users,
  Star,
  TrendingUp,
  Download,
  Play,
  Share2,
} from "lucide-react";
import styles from "../styles/HeroSection.module.css";
import DigitalAuditModal from "@/components/mobile-app-development/components/DigitalAuditModal";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ── Modal ───────────────────────────────────────────────── */}
      <DigitalAuditModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <section className={styles.hero}>
        <div className={styles.stripe} aria-hidden="true" />

        <div className={styles.inner}>
          {/* LEFT CONTENT */}
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <Award size={14} strokeWidth={2.5} />
              Best Mobile App Development Company
            </div>

            <h1 className={styles.title}>
              Best Mobile App
              <br />
              <span
                style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "#f5c518" }}
              >
                Development Company
              </span>
            </h1>

            <p className={styles.desc}>
              MediaMatic, a mobile development company, specializes in
              developing next-generation mobile, web, and software products
              using the power of artificial intelligence. It provides
              development services for MVPs as well as for enterprise products
              using cutting-edge technology and working with startups and global
              enterprises.
            </p>

            <p className={styles.subtext}>
              Accelerate innovation with AI-led software solutions designed to
              meet your unique objectives. From product strategy to full-scale
              deployment, we help your business succeed and outperform the
              competition.
            </p>

            <div className={styles.pills}>
              <span className={styles.pill}>
                <Smartphone size={14} strokeWidth={2.5} />
                iOS &amp; Android
              </span>
              <span className={styles.pill}>
                <Zap size={14} strokeWidth={2.5} />
                8–16 Week Delivery
              </span>
              <span className={styles.pill}>
                <Cpu size={14} strokeWidth={2.5} />
                AI Integrated
              </span>
              <span className={styles.pill}>
                <ShieldCheck size={14} strokeWidth={2.5} />
                Post-Launch Support
              </span>
            </div>

            <div className={styles.btns}>
              {/* ── CTA button now opens the modal ── */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className={styles.btnP}
              >
                <Rocket size={16} strokeWidth={2.5} />
                Get Free Consultation
              </button>

              <Link href="#services" className={styles.btnS}>
                <Layers size={16} strokeWidth={2.5} />
                Explore Services
              </Link>
            </div>

            {/* STATS BAR */}
            <div className={styles.statsBar}>
              <div className={styles.statItem}>
                <Briefcase
                  size={18}
                  strokeWidth={2}
                  className={styles.statIcon}
                />
                <div className={styles.statNum}>10+</div>
                <div className={styles.statLbl}>Years Experience</div>
              </div>
              <div className={styles.statItem}>
                <CheckCircle
                  size={18}
                  strokeWidth={2}
                  className={styles.statIcon}
                />
                <div className={styles.statNum}>200+</div>
                <div className={styles.statLbl}>Projects Delivered</div>
              </div>
              <div className={styles.statItem}>
                <Users size={18} strokeWidth={2} className={styles.statIcon} />
                <div className={styles.statNum}>50+</div>
                <div className={styles.statLbl}>Happy Clients</div>
              </div>
              <div className={styles.statItem}>
                <Star size={18} strokeWidth={2} className={styles.statIcon} />
                <div className={styles.statNum}>4.9★</div>
                <div className={styles.statLbl}>Trust Score</div>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className={styles.visual} aria-hidden="true">
            {/* Floating badge 1 */}
            <div className={`${styles.vcard} ${styles.float1}`}>
              <div className={styles.fIcon}>
                <TrendingUp size={18} strokeWidth={2} />
              </div>
              <div className={styles.fTxt}>
                <strong>Growth Rate</strong>
                <span>+340% avg user growth</span>
              </div>
            </div>

            {/* Phone mockup */}
            <div className={`${styles.vcard} ${styles.vcardMain}`}>
              <div className={styles.mockInner}>
                <div className={styles.mockTopbar}>
                  <div className={styles.mockLogoDot}>
                    <Smartphone size={16} strokeWidth={2.5} />
                  </div>
                  <div className={styles.mockStatus}>
                    <div className={styles.statusDot} />
                    Live
                  </div>
                </div>
                <div className={styles.mockAppTitle}>Your App Name</div>
                <div className={styles.mockAppSub}>Built by MediaMatic</div>
                <div className={styles.vbar}>
                  <div className={styles.vbarFill} style={{ width: "75%" }} />
                </div>
                <div className={styles.vbar}>
                  <div
                    className={`${styles.vbarFill} ${styles.vbarAlt}`}
                    style={{ width: "55%" }}
                  />
                </div>
                <div className={styles.vbarRow}>
                  <div className={`${styles.vbarSm} ${styles.vbarSmAc}`} />
                  <div className={styles.vbarSm} />
                </div>
                <div className={styles.vbar}>
                  <div className={styles.vbarFill} style={{ width: "88%" }} />
                </div>
              </div>
              <div className={styles.mockBottom}>
                <div className={styles.vbtn}>
                  <Play size={14} strokeWidth={2.5} />
                </div>
                <div className={`${styles.vbtn} ${styles.vbtnOutline}`}>
                  <Share2 size={14} strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className={`${styles.vcard} ${styles.float2}`}>
              <div className={styles.fIcon}>
                <Download size={18} strokeWidth={2} />
              </div>
              <div className={styles.fTxt}>
                <strong>1M+ Downloads</strong>
                <span>Side Hustle, Fatash &amp; more</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}