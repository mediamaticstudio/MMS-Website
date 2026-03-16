import { Suspense } from "react";
import { Metadata } from "next";
import BlogListContent from "@/components/blog/BlogListContent";

export const metadata: Metadata = {
    title: "Blog | MediaMatic Studio",
    description:
        "Read the latest insights, tips, and updates from MediaMatic Studio. Explore articles on digital marketing, web development, design, and more.",
};

export default function BlogPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#faf3e0] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-[#652b32]/20 border-t-[#652b32] rounded-full animate-spin" />
            </div>
        }>
            <BlogListContent />
        </Suspense>
    );
}