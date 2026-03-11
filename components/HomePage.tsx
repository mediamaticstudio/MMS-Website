'use client'

import { useEffect, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BrandStatement } from "@/components/BrandStatement";
import { RecentBlog } from "@/components/RecentBlog";
import { Contact } from "@/components/Contact";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SectionLoader = () => (
    <div className="w-full h-40 flex items-center justify-center bg-transparent">
        <div className="w-8 h-8 border-2 border-[#652b32]/20 border-t-[#652b32] rounded-full animate-spin"></div>
    </div>
);

export function HomePage() {
    useEffect(() => {
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="relative overflow-x-hidden">
            <Hero />
            <Suspense fallback={<SectionLoader />}>
                <About />
                <Services />
                <BrandStatement />
                <RecentBlog />
                <Contact />
            </Suspense>
        </div>
    );
}
