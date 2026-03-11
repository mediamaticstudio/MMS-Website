import { Metadata } from "next";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import BlogListContent from "@/components/blog/BlogListContent";

export const metadata: Metadata = {
    title: "Digital Marketing Insights & Trends | MediaMatic Studio Blog",
    description: "Stay ahead of the curve with expert insights on SEO, branding, web development, and social media. Your source for digital marketing knowledge in Coimbatore.",
    alternates: {
        canonical: "/blog/",
    },
    keywords: ["digital marketing blog", "SEO tips", "branding trends", "web development insights", "MediaMatic Studio blog"],
    openGraph: {
        title: "Digital Marketing Insights | MediaMatic Studio Blog",
        description: "Expert advice and latest trends in digital marketing and branding from the MediaMatic Studio team.",
        url: "https://mediamaticstudio.com/blog",
    },
};

export default function BlogList() {
    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf3e0]">
                <Loader2 className="w-12 h-12 text-[#652b32] animate-spin" />
                <p className="text-[#652b32]/60 font-medium mt-4">Loading Blog...</p>
            </div>
        }>
            <BlogListContent />
        </Suspense>
    );
}
