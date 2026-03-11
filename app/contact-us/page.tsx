import { Metadata } from "next";
import { GetQuoteClient } from "@/components/GetQuoteClient";

export const metadata: Metadata = {
    title: "Contact Us | MediaMatic Studio Coimbatore",
    description: "Have a project in mind? Contact MediaMatic Studio, the leading digital agency in Coimbatore for SEO, branding, and web development. Let's build something great together.",
    alternates: {
        canonical: "/contact-us/",
    },
    keywords: ["Contact MediaMatic Studio", "digital marketing agency contact", "Coimbatore agency phone number", "hire branding experts Coimbatore"],
    openGraph: {
        title: "Contact MediaMatic Studio | Branding & Digital Marketing",
        description: "Get in touch with the growth experts at MediaMatic Studio. We are ready to help you scale your digital presence.",
        url: "https://mediamaticstudio.com/contact-us",
    },
};

export default function ContactUsPage() {
    return <GetQuoteClient />;
}
