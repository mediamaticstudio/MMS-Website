'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export const useScrollSpy = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState('home')
    const pathname = usePathname()

    useEffect(() => {
        if (pathname !== '/') return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id)
                })
            },
            { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
        )

        sectionIds.forEach(id => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [pathname, sectionIds])

    return activeSection
}
