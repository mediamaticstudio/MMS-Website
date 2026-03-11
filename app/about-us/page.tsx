import { Metadata } from "next";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { BrandStatement } from "@/components/BrandStatement";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
    title: "About MediaMatic Studio | Brands & Business Growth in Coimbatore",
    description: "MediaMatic Studio is a premier creative branding and digital agency in Coimbatore. Scale your brand with our expert SEO, SMM, and web development services.",
    alternates: {
        canonical: "/about-us/",
    },
    keywords: ["About MediaMatic Studio", "Branding Agency Coimbatore", "Digital Marketing Agency", "Web Development Company"],
    openGraph: {
        title: "About MediaMatic Studio | Digital Marketing & Branding Agency",
        description: "Scale your brand with MediaMatic Studio. Discover our mission and the experts behind our success.",
        url: "https://mediamaticstudio.com/about-us",
    },
};

export default function AboutPage() {
    return (
        <main className="relative overflow-x-hidden pt-20 bg-[#652b32] min-h-screen">
            <About />
            <Services />
            <BrandStatement />
            <Contact />
        </main>
    );
}
