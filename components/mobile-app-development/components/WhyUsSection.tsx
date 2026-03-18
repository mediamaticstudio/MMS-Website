import { ShieldCheck, Target, Sliders, BarChart2, MessageSquare, Briefcase, CheckCircle2, Globe2, Star } from 'lucide-react'
import styles from '../styles/WhyUsSection.module.css'

const features = [
  {
    icon: <Target size={22} strokeWidth={2} />,
    title: 'Strategic Approach',
    desc: 'Established frameworks and parallel development processes that move your idea to execution at speed.',
  },
  {
    icon: <Sliders size={22} strokeWidth={2} />,
    title: 'Custom-Built Solutions',
    desc: 'Every UI is optimized for screen flexibility and UX, maintaining brand consistency across all mobile environments.',
  },
  {
    icon: <BarChart2 size={22} strokeWidth={2} />,
    title: 'Performance & Scalability',
    desc: 'Flexible systems designed to grow with your user base, feature sets, and enterprise integrations over time.',
  },
  {
    icon: <MessageSquare size={22} strokeWidth={2} />,
    title: 'Transparent Communication',
    desc: 'Milestone-driven approach with disciplined governance — tight timelines, scope control, and quality throughout.',
  },
]

const numbers = [
  { icon: <Briefcase size={24} strokeWidth={1.8} />, num: '10+', label: 'Years of Experience', dark: false },
  { icon: <CheckCircle2 size={24} strokeWidth={1.8} />, num: '200+', label: 'Projects Delivered', dark: true },
  { icon: <Globe2 size={24} strokeWidth={1.8} />, num: '15+', label: 'Industries Served', dark: true },
  { icon: <Star size={24} strokeWidth={1.8} />, num: '4.9', label: 'Client Trust Score', dark: false },
]

export default function WhyUsSection() {
  return (
    <section className={styles.section} id="why">
      <div className="wrap">
        <div className={styles.inner}>
          {/* LEFT */}
          <div>
            <span className="sectionTag">
              <ShieldCheck size={12} strokeWidth={2.5} />
              Why Choose Us
            </span>
            <h2 className="sectionTitle">
              Why Businesses Trust<br />
              <span className="pop">MediaMatic</span>
            </h2>
            <p className="sectionSub">
              We don&apos;t just build apps — we build products that grow your
              business and stand out in the market.
            </p>

            <div className={styles.features}>
              {features.map((f, i) => (
                <div className={styles.feat} key={i}>
                  <div className={styles.featIcon}>{f.icon}</div>
                  <div>
                    <h4 className={styles.featTitle}>{f.title}</h4>
                    <p className={styles.featDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.numbers}>
            {numbers.map((n, i) => (
              <div className={`${styles.numCard} ${n.dark ? styles.dark : ''}`} key={i}>
                <div className={styles.numIcon}>{n.icon}</div>
                <div className={styles.num}>{n.num}</div>
                <div className={styles.numLbl}>{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
