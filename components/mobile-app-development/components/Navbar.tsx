'use client'

import Link from 'next/link'
import { PhoneCall } from 'lucide-react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          Media<span>Matic</span>
        </div>
        <ul className={styles.links}>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <Link href="#contact" className={styles.cta}>
          <PhoneCall size={14} strokeWidth={2.5} />
          Get Free Quote
        </Link>
      </div>
    </nav>
  )
}
