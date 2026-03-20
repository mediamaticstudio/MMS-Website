'use client'

import { useState } from 'react'
import { HelpCircle, Plus, X, Mail } from 'lucide-react'
import styles from '../styles/FAQSection.module.css'

const faqs = [
  {
    q: 'How does the mobile app development process work?',
    a: 'We have a transparent and client-centric process: Discovery & Consultation- Know your vision and aspirations | UI/UX Design – Develop user interfaces | Agile Development – Sprints with publications at intervals | Quality Testing Mass + Computer-Automatized Testing | Deployment-Seamless deployment built-in scalability | Continuous support-continuous upgrades',
  },
  {
    q: 'Why should you partner with us for mobile app development?',
    a: 'We make mobile applications that work on both iOS and Android as well as hybrid apps using the Flutter & React Native framework; all of our apps are designed specifically for the Indian audience.',
  },
  {
    q: 'What is the cost of developing a mobile application?',
    a: 'We have a flexible pricing model for mobile applications that we base upon project type, like fixed, hourly, or dedicated teams. Contact us to know more!',
  },
  {
    q: 'How long will it take for your mobile application to be complete?',
    a: 'The completion time for your mobile application is going to vary depending on the complexity of the project. But the average completion time is approximately 8-16 weeks.',
  },
  {
    q: 'Should my application be launched on iOS and/or Android?',
    a: 'In order to ensure that all your customers can use your products/services, you must have your app available on both iOS and Android devices.',
  },
  {
    q: 'What is the main difference between a native application and a cross-platform one?',
    a: 'Native applications are specifically developed for an individual platform, such as iOS or Android. Cross-platform applications share the same code on both platforms and are therefore able to perform equally on both platforms.',
  },
  {
    q: 'Do you implement AI & ML in application development?',
    a: 'Yes. AI and ML enable organizations to identify appropriate technologies and methods for developing APIs.',
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
              Asked <span style={{ fontSize: "clamp(34px, 4vw, 54px)", color: "#f5c518" }}>Questions</span>
            </h2>
            <p className="sectionSub">
              Can&apos;t find your answer? Reach out to us directly — we
              respond within 24 hours.
            </p>

            {/* <div className={styles.contact}>
              <div className={styles.contactIcon}>
                <Mail size={20} strokeWidth={2} />
              </div>
              <div>
                <strong>hello@mediamatic.in</strong>
                <span>We reply within 24 hours</span>
              </div>
            </div> */}
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
