'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGSAP = (callback: () => void, deps: any[] = []) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger)
            const ctx = gsap.context(callback)
            return () => ctx.revert()
        }
    }, deps)
}
