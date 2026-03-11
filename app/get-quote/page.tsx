import { Metadata } from "next";
import { GetQuoteClient } from "@/components/GetQuoteClient";

export const metadata: Metadata = {
    title: "Get a customized Quote | MediaMatic Studio Digital Services",
    description: "Ready to scale your business? Contact MediaMatic Studio for a customized quote on SEO, branding, web development, and digital marketing services today.",
    alternates: {
        canonical: "/get-quote/",
    },
    keywords: ["Get a quote", "digital marketing services quote", "web development pricing", "branding agency contact", "MediaMatic Studio services"],
    openGraph: {
        title: "Get a Customized Quote | MediaMatic Studio",
        description: "Scale your brand with customized digital marketing and branding solutions. Get your free quote today.",
        url: "https://mediamaticstudio.com/get-quote",
    },
};

export default function GetQuotePage() {
    return <GetQuoteClient />;
}
