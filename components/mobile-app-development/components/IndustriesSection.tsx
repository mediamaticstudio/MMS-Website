import { Grid, HeartPulse, ShoppingBag, MapPin, BookOpen, Utensils, Home, Truck, Zap, Film, Plane, Users, Car, Cloud, Landmark } from 'lucide-react'
import styles from '../styles/IndustriesSection.module.css'

const industries = [
  { icon: <HeartPulse size={18} strokeWidth={2} />, name: 'Health & Fitness' },
  { icon: <ShoppingBag size={18} strokeWidth={2} />, name: 'E-Commerce' },
  { icon: <MapPin size={18} strokeWidth={2} />, name: 'Travel & Tourism' },
  { icon: <BookOpen size={18} strokeWidth={2} />, name: 'Education (EdTech)' },
  { icon: <Utensils size={18} strokeWidth={2} />, name: 'Food & Restaurant' },
  { icon: <Home size={18} strokeWidth={2} />, name: 'Real Estate' },
  { icon: <Truck size={18} strokeWidth={2} />, name: 'Logistics & Transport' },
  { icon: <Zap size={18} strokeWidth={2} />, name: 'On-Demand Services' },
  { icon: <Film size={18} strokeWidth={2} />, name: 'Entertainment & Media' },
  { icon: <Plane size={18} strokeWidth={2} />, name: 'Aviation' },
  { icon: <Users size={18} strokeWidth={2} />, name: 'Social Networking' },
  { icon: <Car size={18} strokeWidth={2} />, name: 'Automotive' },
  { icon: <Cloud size={18} strokeWidth={2} />, name: 'SaaS & Business' },
  { icon: <Landmark size={18} strokeWidth={2} />, name: 'Finance & Fintech' },
]

export default function IndustriesSection() {
  return (
    <section className={styles.section} id="industries">
      <div className="wrap">
        <div className={styles.header}>
          <span className="sectionTag">
            <Grid size={12} strokeWidth={2.5} />
            Industries We Serve
          </span>
          <h2 className="sectionTitle">
            Industry-Focused <span className="pop">Solutions</span>
          </h2>
          <p className="sectionSub">
            10+ years of domain expertise across industries — we know your
            market and build apps that solve real problems.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map((ind, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.ico}>{ind.icon}</div>
              <span className={styles.name}>{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
