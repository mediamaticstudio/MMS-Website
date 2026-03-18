import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
    getServiceBySlug,
    getSubServiceBySlug,
    getAllServices,
    getAllServiceSlugs
} from "@/lib/services-config";
import {
    generateBreadcrumbSchema,
    generateServiceSchema,
    generateOrganizationSchema
} from "@/lib/seo-schemas";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

interface PageProps {
    params: {
        serviceSlug: string;
        subSlug: string;
    };
}

export async function generateStaticParams() {
    const services = getAllServices();
    const params = [];

    for (const service of services) {
        for (const subService of service.subServices) {
            params.push({
                serviceSlug: service.slug,
                subSlug: subService.slug,
            });
        }
    }

    return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { serviceSlug, subSlug } = params;
    const service = getServiceBySlug(serviceSlug);
    const subService = getSubServiceBySlug(serviceSlug, subSlug);

    if (!service || !subService) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${subService.name} in Coimbatore | ${service.name} | MediaMatic Studio`,
        description: `${subService.description} in Coimbatore from MediaMatic Studio. Professional ${subService.shortName} services tailored for your business growth.`,
        keywords: `${subService.name} Coimbatore, ${subService.shortName} Coimbatore, ${service.name} services Coimbatore, MediaMatic Studio`,
        alternates: {
            canonical: `https://mediamaticstudio.com/services/${serviceSlug}/${subSlug}/`,
        },
        openGraph: {
            title: `${subService.name} in Coimbatore | MediaMatic Studio`,
            description: `${subService.description} in Coimbatore.`,
            url: `https://mediamaticstudio.com/services/${serviceSlug}/${subSlug}/`,
            siteName: "MediaMatic Studio",
            images: [
                {
                    url: "https://mediamaticstudio.com/og-image.png",
                    width: 1200,
                    height: 630,
                },
            ],
            locale: "en_US",
            type: "website",
        },
    };
}

export default function SubServicePage({ params }: PageProps) {
    const { serviceSlug, subSlug } = params;
    const service = getServiceBySlug(serviceSlug);
    const subService = getSubServiceBySlug(serviceSlug, subSlug);
    const allServices = getAllServices();

    if (!service || !subService) {
        notFound();
    }

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services/" },
        { name: service.name, url: `/services/${serviceSlug}/` },
        { name: subService.name, url: `/services/${serviceSlug}/${subSlug}/` },
    ];

    const relatedSubServices = service.subServices.filter(
        (sub) => sub.slug !== subSlug
    );

    const jsonLd = [
        generateBreadcrumbSchema(breadcrumbs),
        generateServiceSchema({
            name: subService.name,
            description: subService.longDescription,
        }),
        generateOrganizationSchema(),
    ];

    return (
        <div className="min-h-screen bg-[#faf3e0] font-sans">
            <Script
                id="subservice-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main>
                {/* Premium Hero Section */}
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#652b32] text-white overflow-hidden text-left">
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
                        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[150px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <Link
                            href={`/services/${serviceSlug}/`}
                            className="inline-flex items-center gap-3 text-white/60 hover:text-yellow-400 mb-12 transition-all font-black uppercase tracking-[0.2em] text-[11px] group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to {service.name}
                        </Link>

                        <div className="max-w-5xl">
                            <p className="text-yellow-400 mb-6 font-black uppercase tracking-[0.3em] text-xs">{service.name}</p>
                            <h1 className="font-heading text-5xl md:text-8xl font-black leading-[1.05] mb-10 tracking-tight uppercase">
                                {subService.name.split(' ').slice(0, -1).join(' ')} <br />
                                <span className="text-yellow-400 italic font-medium lowercase">{subService.name.split(' ').pop()}</span>
                            </h1>
                            <p className="text-xl md:text-3xl text-white/70 leading-relaxed max-w-3xl font-medium mb-12">
                                {subService.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="py-24 md:py-40 bg-[#faf3e0]">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid lg:grid-cols-2 gap-24 items-start font-medium">
                            <div>
                                <h2 className="font-heading text-4xl md:text-6xl font-black text-[#652b32] mb-10 uppercase tracking-tight">Experience <span className="text-[#FACC15]">Excellence</span></h2>
                                <p className="text-lg text-[#652b32]/60 leading-relaxed mb-8">
                                    {subService.longDescription}
                                </p>
                            </div>

                            <div className="bg-[#652b32] p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                                <h3 className="font-heading text-2xl font-black mb-8 uppercase tracking-tight text-yellow-400">Why choose us?</h3>
                                <p className="text-xl text-white/80 leading-relaxed font-bold italic border-l-8 border-yellow-400 pl-10 py-4 mb-10">
                                    "We don't just deliver services, we deliver business transformations."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                {subService.benefits && subService.benefits.length > 0 && (
                    <section className="py-24 md:py-40 bg-[#faf3e0]">
                        <div className="container mx-auto px-6 max-w-7xl text-center">
                            <h2 className="font-heading text-4xl md:text-8xl font-black text-[#652b32] mb-24 uppercase tracking-tight leading-tight">
                                Key <br /> <span className="text-[#FACC15]">Benefits</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                {subService.benefits.map((benefit, index) => (
                                    <div key={index} className="flex gap-6 p-8 bg-white/80 border border-[#652b32]/5 rounded-[2.5rem] text-left hover:bg-[#652b32] hover:text-[#faf3e0] transition-all duration-500 group shadow-lg">
                                        <div className="w-12 h-12 rounded-2xl bg-[#652b32]/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                            <CheckCircle className="w-6 h-6 text-[#652b32] group-hover:text-yellow-400 transition-colors" />
                                        </div>
                                        <div className="flex items-center">
                                            <h3 className="font-black uppercase tracking-tight text-sm">{benefit}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Related Services Section */}
                {relatedSubServices.length > 0 && (
                    <section className="py-24 md:py-40 bg-[#faf3e0]">
                        <div className="container mx-auto px-6 max-w-7xl">
                            <h2 className="font-heading text-3xl md:text-5xl font-black text-[#652b32] mb-16 text-center uppercase tracking-tight">
                                Other {service.name}
                            </h2>
                            <div className="grid md:grid-cols-3 gap-10">
                                {relatedSubServices.slice(0, 3).map((related) => (
                                    <Link
                                        key={related.slug}
                                        href={`/services/${serviceSlug}/${related.slug}/`}
                                        className="p-10 rounded-[3rem] bg-[#faf3e0]/30 border border-[#652b32]/5 hover:bg-[#652b32] hover:text-white transition-all duration-500 group flex flex-col justify-between shadow-xl"
                                    >
                                        <div>
                                            <h3 className="font-heading text-2xl font-black mb-4 uppercase tracking-tight">{related.name}</h3>
                                            <p className="text-[#652b32]/60 text-sm font-medium mb-8 group-hover:text-white/70">
                                                {related.description}
                                            </p>
                                        </div>
                                        <span className="text-[#652b32] font-black uppercase tracking-widest text-[10px] flex items-center gap-3 group-hover:text-yellow-400">
                                            Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-24 md:py-40 bg-[#652b32] text-white text-center relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <h2 className="font-heading text-4xl md:text-8xl font-black mb-12 uppercase tracking-tight leading-tight">
                            Ready to <br /> <span className="text-yellow-400">Scale UP?</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium italic">
                            Let's discuss how {subService.shortName} can help grow your business into an industry leader.
                        </p>
                        <Link
                            href="/get-quote/"
                            className="inline-flex items-center gap-5 bg-[#FACC15] text-[#652b32] px-14 py-7 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-[#faf3e0] transition-all active:scale-95 shadow-2xl group"
                        >
                            Get a Free Quote <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>

                {/* Other Main Services */}
                {allServices.length > 0 && (
                    <section className="py-24 md:py-40 bg-[#faf3e0]">
                        <div className="container mx-auto px-6 max-w-7xl">
                            <h2 className="font-heading text-3xl font-black text-[#652b32] mb-16 text-center uppercase tracking-widest">
                                Our Core Expertise
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {allServices.filter(s => s.slug !== serviceSlug).map((svc) => (
                                    <Link
                                        key={svc.slug}
                                        href={`/services/${svc.slug}/`}
                                        className="p-10 bg-white/80 rounded-[3rem] border border-[#652b32]/5 hover:border-[#FACC15] transition-all duration-500 shadow-xl group"
                                    >
                                        <h3 className="font-heading text-xl font-black text-[#652b32] mb-4 uppercase tracking-tight">{svc.name}</h3>
                                        <p className="text-xs text-[#652b32]/60 font-bold">
                                            {svc.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
