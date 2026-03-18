import { Metadata } from "next";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
    title: "Our Digital Services in Coimbatore | MediaMatic Studio",
    description: "Explore our wide range of premium digital services in Coimbatore including 2D & 3D animation, content management, web development, designing, and digital marketing.",
    alternates: {
        canonical: "/services/",
    },
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-20">
            <Services />
        </div>
    );
}
