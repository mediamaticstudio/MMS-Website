import Link from 'next/link'
import {
  Rocket,
  CheckCircle,
  PhoneCall,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react'
import styles from '../styles/CTASection.module.css'

const checks = [
  'Free Consultation',
  'Flexible Pricing',
  '8–16 Week Delivery',
  'Post-Launch Support',
]

const contacts = [
  { icon: <Phone size={22} strokeWidth={2} />, label: 'Phone', value: '+91 XX XXXX XXXX' },
  { icon: <Mail size={22} strokeWidth={2} />, label: 'Email', value: 'support@mediamaticstudio.com' },
  { icon: <MapPin size={22} strokeWidth={2} />, label: 'Location', value: 'India — Serving Globally' },
  { icon: <Clock size={22} strokeWidth={2} />, label: 'Response Time', value: 'Within 24 Hours' },
]

export default function CTASection() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        {/* LEFT */}
        <div>
          <span className={styles.tag}>
            <Rocket size={12} strokeWidth={2.5} />
            Get Started Today
          </span>
          <h2 className={styles.title}>
            Ready to Build Your<br />
            <span>Dream Mobile App?</span>
          </h2>
          <p className={styles.sub}>
            Join 200+ businesses that trust MediaMatic to build powerful,
            scalable mobile apps. Let&apos;s bring your vision to life — on
            time, on budget.
          </p>

          <div className={styles.checks}>
            {checks.map((c, i) => (
              <span className={styles.check} key={i}>
                <CheckCircle size={16} strokeWidth={2.5} />
                {c}
              </span>
            ))}
          </div>

          {/* <div className={styles.btns}>
            <Link href="tel:+91XXXXXXXXXX" className={styles.btn1}>
              <PhoneCall size={16} strokeWidth={2.5} />
              Call Us Now
            </Link>
            <Link href="mailto:hello@mediamatic.in" className={styles.btn2}>
              <Mail size={16} strokeWidth={2.5} />
              Send an Email
            </Link>
          </div> */}
        </div>

        {/* RIGHT – contact cards */}
        <div className={styles.cards}>
          {contacts.map((c, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.cardIcon}>{c.icon}</div>
              <div>
                <div className={styles.cardLabel}>{c.label}</div>
                <div className={styles.cardVal}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
