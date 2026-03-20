import { Grid, HeartPulse, ShoppingBag, MapPin, BookOpen, Utensils, Home, Truck, Zap, Film, Plane, Users, Car, Cloud, Landmark } from 'lucide-react'
import styles from '../styles/IndustriesSection.module.css'

const industries = [
  {
    icon: <HeartPulse size={18} strokeWidth={2} />,
    name: 'Health & Fitness',
    desc: 'We build custom fitness apps and solutions to help users stay fit and transform their fitness journeys.',
  },
  {
    icon: <ShoppingBag size={18} strokeWidth={2} />,
    name: 'E-Commerce',
    desc: 'We build e-commerce solutions that increase conversions and enhance the overall customer experience.',
  },
  {
    icon: <MapPin size={18} strokeWidth={2} />,
    name: 'Travel & Tourism',
    desc: 'MediaMatic provides enhanced navigation and personalized content to improve the overall user experience of both planning and travelling.',
  },
  {
    icon: <BookOpen size={18} strokeWidth={2} />,
    name: 'Education (Ed Tech)',
    desc: 'We build robust education software and applications to facilitate interactive learning and effective management of learning content and student performance.',
  },
  {
    icon: <Utensils size={18} strokeWidth={2} />,
    name: 'Food & Restaurant',
    desc: 'These solutions are designed to improve delivery performance as well as raise revenues and profits for food businesses.',
  },
  {
    icon: <Home size={18} strokeWidth={2} />,
    name: 'Real Estate',
    desc: 'We build real estate listing applications, virtual tours of properties, and powerful agent management apps.',
  },
  {
    icon: <Truck size={18} strokeWidth={2} />,
    name: 'Logistics & Transportation',
    desc: 'We create logistics apps with features such as real-time tracking, route optimization, and efficient delivery management.',
  },
  {
    icon: <Zap size={18} strokeWidth={2} />,
    name: 'On-Demand Services',
    desc: 'We build fully customized on-demand applications tailored to your unique business model and user needs.',
  },
  {
    icon: <Film size={18} strokeWidth={2} />,
    name: 'Entertainment & Media',
    desc: 'We build intuitive, powerful entertainment applications with intelligent automation, compelling new features, and advanced functionality.',
  },
  {
    icon: <Plane size={18} strokeWidth={2} />,
    name: 'Aviation',
    desc: 'We provide aviation software services to enhance operational efficiency, safety management, and customer service.',
  },
  {
    icon: <Users size={18} strokeWidth={2} />,
    name: 'Social Networking',
    desc: 'We create social media platforms that facilitate community building and user engagement through user-friendly interfaces and robust communication tools.',
  },
  {
    icon: <Car size={18} strokeWidth={2} />,
    name: 'Automotive',
    desc: 'Our software enables vehicle monitoring, improved manufacturing processes, and an enhanced customer experience for automotive businesses.',
  },
  {
    icon: <Cloud size={18} strokeWidth={2} />,
    name: 'SaaS & Business Solutions',
    desc: 'We help create secure and scalable cloud-based SaaS applications that your businesses can rely on for growth.',
  },
  {
    icon: <Landmark size={18} strokeWidth={2} />,
    name: 'Finance & Fintech',
    desc: 'We deliver secure, compliant, and high-performance fintech solutions for payments, banking, and financial management.',
  },
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
            Industry-Focused <span style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "#f5c518" }}>Solutions</span>
          </h2>
          <p className="sectionSub">
            With 10+ years of mobile app development experience in industries including consumer goods, finance, healthcare, real estate, delivery and takeaway, and many more.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map((ind, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.ico}>{ind.icon}</div>
              <span className={styles.name}>{ind.name}</span>
              <p className={styles.desc}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}