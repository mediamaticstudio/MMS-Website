import { ShieldCheck, Target, Sliders, BarChart2, MessageSquare, Briefcase, CheckCircle2, Globe2, Star } from 'lucide-react'
import styles from '../styles/WhyUsSection.module.css'

const features = [
  {
    icon: <Target size={22} strokeWidth={2} />,
    title: 'Strategic Approach',
    desc: 'We leverage established frameworks and parallel development processes to enable enterprises to go from idea to execution in a fast manner, keeping pace with market demands.',
  },
  {
    icon: <Sliders size={22} strokeWidth={2} />,
    title: 'Custom-Built Solutions',
    desc: 'Our user interfaces are optimized for screen flexibility and user experience across different mobile devices, ensuring uniformity of enterprise brands.',
  },
  {
    icon: <BarChart2 size={22} strokeWidth={2} />,
    title: 'Performance & Scalability',
    desc: 'Every mobile solution is designed with scalability in mind. We develop flexible systems that scale with increased user counts and integrations.',
  },
  {
    icon: <MessageSquare size={22} strokeWidth={2} />,
    title: 'Transparent Communication',
    desc: 'Using our proven processes and disciplined governance, we create timely, tight project timelines and quality during the mobile development lifecycle.',
  },
  {
    icon: <CheckCircle2 size={22} strokeWidth={2} />,
    title: 'Timely Completion',
    desc: 'We manage the entire mobile solution lifecycle from discovery to post-deployment, providing consistency and speed to market.',
  },
]

const numbers = [
  { icon: <Briefcase size={24} strokeWidth={1.8} />, num: '10+', label: 'Years of Experience', dark: false },
  { icon: <CheckCircle2 size={24} strokeWidth={1.8} />, num: '200+', label: 'Projects Completed', dark: true },
  { icon: <Globe2 size={24} strokeWidth={1.8} />, num: '15+', label: 'Industries Served', dark: true },
  { icon: <Star size={24} strokeWidth={1.8} />, num: '200+', label: 'Global Projects', dark: false },
]

export default function WhyUsSection() {
  return (
    <section className={styles.section} id="why">
      <div className="wrap">
        <div className={styles.inner}>
          {/* LEFT */}
          <div>
            {/* <span className="sectionTag">
              <ShieldCheck size={12} strokeWidth={2.5} />
              Why Choose Us
            </span> */}
            <h2 className="sectionTitle">
              Why Businesses Choose<br />
              <span style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "#f5c518" }}>MediaMatic Studio</span>
            </h2>
            <p className="sectionSub">
              In the present digital age, mobile apps are an integral part of businesses. MediaMatic offers the best mobile app development services for iOS, Android, and hybrid platforms.
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
