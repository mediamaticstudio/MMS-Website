'use client'

import { useState } from 'react'
import { HelpCircle, Plus, X, Mail } from 'lucide-react'
import styles from '../styles/FAQSection.module.css'

const faqs = [
  {
    q: 'How does the mobile app development process work?',
    a: 'We follow a transparent, client-centric process: Discovery & Consultation → UI/UX Design → Agile Development (sprints) → Quality Testing (manual + automated) → Deployment → Continuous Support and upgrades.',
  },
  {
    q: 'Why should you partner with us for mobile app development?',
    a: 'We build apps for iOS, Android, and hybrid platforms using Flutter & React Native. With 10+ years of experience and 200+ global projects, we deliver performance-driven, AI-integrated solutions designed specifically for your audience.',
  },
  {
    q: 'What is the cost of developing a mobile application?',
    a: 'We offer flexible pricing models — fixed, hourly, or dedicated team — based on project complexity and scope. Contact us for a customized quote tailored to your requirements and budget.',
  },
  {
    q: 'How long will it take to complete my mobile application?',
    a: 'Completion time varies by project complexity. On average, most projects are completed within 8–16 weeks, from initial consultation to App Store / Play Store launch.',
  },
  {
    q: 'Should my app be launched on iOS and/or Android?',
    a: "We recommend launching on both platforms to maximize reach. Our cross-platform expertise means you don't need to compromise on quality or performance on either platform.",
  },
  {
    q: 'What is the difference between a native and cross-platform app?',
    a: 'Native apps are built specifically for iOS or Android using Swift/Kotlin, offering peak performance. Cross-platform apps (Flutter or React Native) share a codebase across both platforms, reducing development time and cost.',
  },
  {
    q: 'Do you implement AI & ML in application development?',
    a: 'Yes! We integrate AI/ML capabilities including recommendation engines, intelligent chatbots, predictive analytics, and image recognition — to make your app smarter and more competitive.',
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section className={styles.section} id="faq">
      <div className="wrap">
        <div className={styles.inner}>
          {/* LEFT */}
          <div className={styles.left}>
            <span className="sectionTag">
              <HelpCircle size={12} strokeWidth={2.5} />
              FAQs
            </span>
            <h2 className="sectionTitle">
              Frequently<br />
              Asked <span className="pop">Questions</span>
            </h2>
            <p className="sectionSub">
              Can&apos;t find your answer? Reach out to us directly — we
              respond within 24 hours.
            </p>

            <div className={styles.contact}>
              <div className={styles.contactIcon}>
                <Mail size={20} strokeWidth={2} />
              </div>
              <div>
                <strong>hello@mediamatic.in</strong>
                <span>We reply within 24 hours</span>
              </div>
            </div>
          </div>

          {/* RIGHT – accordion */}
          <div className={styles.list}>
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`${styles.item} ${openIdx === i ? styles.open : ''}`}
                onClick={() => toggle(i)}
              >
                <div className={styles.question}>
                  <span>{f.q}</span>
                  <div className={styles.toggle}>
                    {openIdx === i
                      ? <X size={14} strokeWidth={2.5} />
                      : <Plus size={14} strokeWidth={2.5} />
                    }
                  </div>
                </div>
                {openIdx === i && (
                  <div className={styles.answer}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
