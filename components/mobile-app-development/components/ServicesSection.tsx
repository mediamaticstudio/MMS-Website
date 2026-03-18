import { Layers, Smartphone, Tablet, Code2, Rocket, Building2, Cpu, ArrowRight } from 'lucide-react'
import styles from '../styles/ServicesSection.module.css'

const services = [
  {
    icon: <Smartphone size={24} strokeWidth={1.8} />,
    title: 'Android App Development',
    desc: 'Feature-rich, scalable Android apps with user-friendly interfaces that dominate the Google Play Store.',
    isNew: true,
  },
  {
    icon: <Tablet size={24} strokeWidth={1.8} />,
    title: 'iOS App Development',
    desc: 'High-security, beautiful iPhone and iPad apps that meet Apple\'s strict guidelines and delight users on every device.',
    isNew: true,
  },
  {
    icon: <Code2 size={24} strokeWidth={1.8} />,
    title: 'Flutter App Development',
    desc: 'High-performance cross-platform apps with seamless UX across Android, iOS, and web from a single codebase.',
    isNew: true,
  },
  {
    icon: <Rocket size={24} strokeWidth={1.8} />,
    title: 'MVP Development',
    desc: 'Go from idea to market fast. We build lean, validated MVPs that test your core assumptions quickly and efficiently.',
    isNew: false,
  },
  {
    icon: <Building2 size={24} strokeWidth={1.8} />,
    title: 'Enterprise Solutions',
    desc: 'Scalable, secure enterprise mobile platforms built to handle complex workflows and massive user bases.',
    isNew: false,
  },
  {
    icon: <Cpu size={24} strokeWidth={1.8} />,
    title: 'AI & ML Integration',
    desc: 'Embed intelligent AI/ML capabilities — recommendations, chatbots, predictive analytics — into your mobile app.',
    isNew: false,
  },
]

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className="wrap">
        <div className={styles.header}>
          <span className="sectionTag">
            <Layers size={12} strokeWidth={2.5} />
            Our Services
          </span>
          <h2 className={`sectionTitle ${styles.title}`}>
            Mobile App Development<br />
            <span className="pop">Services We Offer</span>
          </h2>
          <p className="sectionSub">
            From Android and iOS to cross-platform Flutter apps — crafted for
            your business goals and your users&apos; real needs.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.iconBox}>{s.icon}</div>
              <div className={styles.cardTitle}>
                {s.title}
                {s.isNew && <span className={styles.newBadge}>New</span>}
              </div>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.arrow}>
                <ArrowRight size={14} strokeWidth={2.5} />
                Learn More
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
