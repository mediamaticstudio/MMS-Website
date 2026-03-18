import { GitBranch, Search, PenTool, Code2, Shield, UploadCloud, Headphones } from 'lucide-react'
import styles from '../styles/ProcessSection.module.css'

const steps = [
  { icon: <Search size={22} strokeWidth={2} />, num: '01', label: 'Discovery', desc: 'Understand your vision, goals, and requirements' },
  { icon: <PenTool size={22} strokeWidth={2} />, num: '02', label: 'UI/UX Design', desc: 'Beautiful, user-centered interface designs' },
  { icon: <Code2 size={22} strokeWidth={2} />, num: '03', label: 'Development', desc: 'Agile sprints with regular milestone deliveries' },
  { icon: <Shield size={22} strokeWidth={2} />, num: '04', label: 'QA Testing', desc: 'Manual and automated testing for zero-bug delivery' },
  { icon: <UploadCloud size={22} strokeWidth={2} />, num: '05', label: 'Deployment', desc: 'Seamless App Store and Play Store launch' },
  { icon: <Headphones size={22} strokeWidth={2} />, num: '06', label: 'Support', desc: 'Continuous updates, maintenance and scaling' },
]

export default function ProcessSection() {
  return (
    <section className={styles.section} id="process">
      <div className="wrap">
        <div className={styles.header}>
          <span className={styles.tag}>
            <GitBranch size={12} strokeWidth={2.5} />
            How We Work
          </span>
          <h2 className={styles.title}>
            Our Development <span className={styles.pop}>Process</span>
          </h2>
          <p className={styles.sub}>
            A transparent, client-centric workflow from discovery to deployment
            — typically completed in 8–16 weeks.
          </p>
        </div>

        <div className={styles.gridWrap}>
          <div className={styles.line} aria-hidden="true" />
          <div className={styles.grid}>
            {steps.map((s, i) => (
              <div className={styles.step} key={i}>
                <div className={styles.numWrap}>
                  <div className={styles.numInner}>{s.icon}</div>
                  <div className={styles.numTag}>{s.num}</div>
                </div>
                <div className={styles.stepLabel}>{s.label}</div>
                <div className={styles.stepDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
