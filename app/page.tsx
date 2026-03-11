import { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
    title: "MediaMatic Studio | Best Digital Marketing & Branding Agency in Coimbatore",
    description: "Transform your brand with MediaMatic Studio in Coimbatore. We specialize in expert SEO, branding, web development, and digital marketing strategies that drive measurable growth and online success.",
    alternates: {
        canonical: "/",
    },
    keywords: ["digital marketing agency Coimbatore", "best rebranding agency Coimbatore", "SEO services Coimbatore", "web development company Coimbatore", "MediaMatic Studio", "social media strategy", "branding audit"],
    openGraph: {
        title: "MediaMatic Studio | Digital Marketing & Branding Agency Coimbatore",
        description: "Scale your business with high-impact digital marketing, expert SEO, and creative branding from MediaMatic Studio.",
        url: "https://mediamaticstudio.com",
        siteName: "MediaMatic Studio",
    },
};

export default function Home() {
    return <HomePage />;
}
