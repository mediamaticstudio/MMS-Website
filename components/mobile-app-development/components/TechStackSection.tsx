import { Cpu, Code2, Layers, Tablet, Smartphone, Database, Server, Terminal, Cloud, Globe, HardDrive, GitMerge } from 'lucide-react'
import styles from '../styles/TechStackSection.module.css'

const techs = [
  { icon: <Code2 size={18} strokeWidth={2} />, name: 'Flutter', cat: 'Cross-Platform' },
  { icon: <Layers size={18} strokeWidth={2} />, name: 'React Native', cat: 'Cross-Platform' },
  { icon: <Tablet size={18} strokeWidth={2} />, name: 'Swift', cat: 'iOS Native' },
  { icon: <Smartphone size={18} strokeWidth={2} />, name: 'Kotlin', cat: 'Android Native' },
  { icon: <Database size={18} strokeWidth={2} />, name: 'Firebase', cat: 'Backend' },
  { icon: <Server size={18} strokeWidth={2} />, name: 'Node.js', cat: 'Backend' },
  { icon: <Terminal size={18} strokeWidth={2} />, name: 'Python', cat: 'AI / ML' },
  { icon: <Cpu size={18} strokeWidth={2} />, name: 'TensorFlow', cat: 'AI / ML' },
  { icon: <Cloud size={18} strokeWidth={2} />, name: 'AWS', cat: 'Cloud' },
  { icon: <Globe size={18} strokeWidth={2} />, name: 'GCP', cat: 'Cloud' },
  { icon: <HardDrive size={18} strokeWidth={2} />, name: 'PostgreSQL', cat: 'Database' },
  { icon: <GitMerge size={18} strokeWidth={2} />, name: 'GraphQL', cat: 'API' },
]

export default function TechStackSection() {
  return (
    <section className={styles.section} id="tech">
      <div className="wrap">
        <div className={styles.header}>
          <span className="sectionTag">
            <Cpu size={12} strokeWidth={2.5} />
            Technology
          </span>
          <h2 className="sectionTitle">
            Tech Stack We  Work With
          </h2>
          <p className="sectionSub">
            We use the latest, most reliable technologies to build performant,
            scalable, and future-proof mobile applications.
          </p>
        </div>

        <div className={styles.grid}>
          {techs.map((t, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.icon}>{t.icon}</div>
              <div className={styles.name}>{t.name}</div>
              <div className={styles.cat}>{t.cat}</div>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          + Many more tools and frameworks based on your project&apos;s unique requirements
        </p>
      </div>
    </section>
  )
}
