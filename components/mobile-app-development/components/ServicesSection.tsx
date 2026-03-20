import { Layers, Smartphone, Tablet, Code2, Rocket, Building2, Cpu, ArrowRight } from 'lucide-react'
import styles from '../styles/ServicesSection.module.css'

const services = [
  {
    icon: <Smartphone size={24} strokeWidth={1.8} />,
    title: 'Android App Development',
    desc: 'Android has the maximum number of active users. Our app development agency provides the best Android mobile app development services to create feature-rich and scalable Android apps with user-friendly interfaces.',
  },
  {
    icon: <Tablet size={24} strokeWidth={1.8} />,
    title: 'iOS App Development',
    desc: 'Target high-value iOS users with high-security, beautiful, and easy-to-use iPhone and iPad applications, designed while meeting Apple\'s strict guidelines.',
  },
  {
    icon: <Code2 size={24} strokeWidth={1.8} />,
    title: 'Flutter App Development',
    desc: 'Develop high-performance and scalable mobile applications that offer smooth performance and a seamless user experience across Android and web platforms.',
  },
  {
    icon: <Rocket size={24} strokeWidth={1.8} />,
    title: 'MVP Development',
    desc: 'Accelerate innovation with AI-led software solutions designed to meet your unique objectives, moving from product strategy to full-scale deployment.',
  },
  {
    icon: <Building2 size={24} strokeWidth={1.8} />,
    title: 'Enterprise Solutions',
    desc: 'Custom-built software solutions that scale with your business’s needs, ensuring secure and user-centric apps for global enterprises.',
  },
  {
    icon: <Cpu size={24} strokeWidth={1.8} />,
    title: 'AI & ML Integration',
    desc: 'MediaMatic specializes in AI-driven software solutions designed to help businesses grow and scale through intelligent automation and powerful features.',
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
            Our Mobile Application<br />
            <span style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "#f5c518" }}>Development Services</span>
          </h2>
          <p className="sectionSub">
            Our app development firm creates and develops high-performance mobile apps that fit your business&apos;s needs and requirements.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.iconBox}>{s.icon}</div>
              <div className={styles.cardTitle}>
                {s.title}
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
