import Link from 'next/link'
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
} from 'lucide-react'
import styles from '../styles/HeroSection.module.css'

export default function HeroSection() {
  return (
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
            Build Next-Gen<br />
            <span className={styles.accent}>Mobile Apps</span>
            <span className={styles.sub}>Powered by AI Technology</span>
          </h1>

          <p className={styles.desc}>
            MediaMatic specializes in cutting-edge mobile, web and software
            solutions for startups and global enterprises — from MVP to
            full-scale deployment.
          </p>

          <div className={styles.pills}>
            <span className={styles.pill}><Smartphone size={14} strokeWidth={2.5} />iOS &amp; Android</span>
            <span className={styles.pill}><Zap size={14} strokeWidth={2.5} />8–16 Week Delivery</span>
            <span className={styles.pill}><Cpu size={14} strokeWidth={2.5} />AI Integrated</span>
            <span className={styles.pill}><ShieldCheck size={14} strokeWidth={2.5} />Post-Launch Support</span>
          </div>

          <div className={styles.btns}>
            <Link href="#contact" className={styles.btnP}>
              <Rocket size={16} strokeWidth={2.5} />
              Get Free Consultation
            </Link>
            <Link href="#services" className={styles.btnS}>
              <Layers size={16} strokeWidth={2.5} />
              Explore Services
            </Link>
          </div>

          {/* STATS BAR */}
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <Briefcase size={18} strokeWidth={2} className={styles.statIcon} />
              <div className={styles.statNum}>10+</div>
              <div className={styles.statLbl}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <CheckCircle size={18} strokeWidth={2} className={styles.statIcon} />
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
            <div className={styles.fIcon}><TrendingUp size={18} strokeWidth={2} /></div>
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
              <div className={styles.vbar}><div className={styles.vbarFill} style={{ width: '75%' }} /></div>
              <div className={styles.vbar}><div className={`${styles.vbarFill} ${styles.vbarAlt}`} style={{ width: '55%' }} /></div>
              <div className={styles.vbarRow}>
                <div className={`${styles.vbarSm} ${styles.vbarSmAc}`} />
                <div className={styles.vbarSm} />
              </div>
              <div className={styles.vbar}><div className={styles.vbarFill} style={{ width: '88%' }} /></div>
            </div>
            <div className={styles.mockBottom}>
              <div className={styles.vbtn}><Play size={14} strokeWidth={2.5} /></div>
              <div className={`${styles.vbtn} ${styles.vbtnOutline}`}><Share2 size={14} strokeWidth={2.5} /></div>
            </div>
          </div>

          {/* Floating badge 2 */}
          <div className={`${styles.vcard} ${styles.float2}`}>
            <div className={styles.fIcon}><Download size={18} strokeWidth={2} /></div>
            <div className={styles.fTxt}>
              <strong>1M+ Downloads</strong>
              <span>Side Hustle, Fatash &amp; more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
