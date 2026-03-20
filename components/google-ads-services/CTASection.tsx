"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CTASection() {
    const router = useRouter();

    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="pt-20 border-t border-[#652b32]/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#652b32] p-8 md:p-12 rounded-[2rem] text-[#faf3e0]">
                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-black mb-4 font-heading leading-tight tracking-tight text-white">Grow Faster with Professional <span className="text-[#FACC15]">Google Ads Services</span></h2>
                            <p className="text-[#faf3e0]/70 text-lg md:text-xl font-medium">Let's develop strong tactics that will transform clicks into customers and grow your business.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <button
                                onClick={() => router.push("/#contact")}
                                className="inline-flex items-center justify-center gap-2 bg-[#FACC15] text-[#652b32] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1"
                            >
                                Start Your Campaign <ArrowRight size={18} />
                            </button>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all transform hover:-translate-y-1"
                            >
                                All Services
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 mt-12">
                        <span className="text-[#652b32]/40 text-sm font-bold uppercase tracking-widest">✓ Free Campaign Audit</span>
                        <span className="text-[#652b32]/40 text-sm font-bold uppercase tracking-widest">✓ No Long-Term Lock-In</span>
                        <span className="text-[#652b32]/40 text-sm font-bold uppercase tracking-widest">✓ Dedicated Account Manager</span>
                        <span className="text-[#652b32]/40 text-sm font-bold uppercase tracking-widest">✓ Weekly Performance Reports</span>
                    </div>
                </div>
            </div>
        </section>
    );
}