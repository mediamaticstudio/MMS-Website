import { Metadata } from "next";
import { fetchBlogPostBySlug, fetchRecentPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/blog/BlogPostClient";
import StructuredData from "@/components/StructuredData";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const post = await fetchBlogPostBySlug(params.slug).catch(() => null);

    if (!post) {
        return {
            title: "Post Not Found | MediaMatic Studio",
        };
    }

    const title = `${post.title} | Blog | MediaMatic Studio`;
    const description = post.excerpt?.replace(/<[^>]*>/g, "").substring(0, 160) || post.title;

    return {
        title,
        description,
        alternates: {
            canonical: `/blog/${params.slug}/`,
        },
        openGraph: {
            title,
            description,
            images: [{ url: post.featured_image }],
            type: "article",
            publishedTime: post.publish_date_raw,
            authors: [post.author?.name || "MediaMatic Studio"],
            url: `https://mediamaticstudio.com/blog/${params.slug}`,
            siteName: "MediaMatic Studio",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [post.featured_image],
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = params;
    const [post, recentPosts] = await Promise.all([
        fetchBlogPostBySlug(slug).catch(() => null),
        fetchRecentPosts(4).catch(() => []),
    ]);

    if (!post) {
        notFound();
    }

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.featured_image,
        "author": {
            "@type": "Person",
            "name": post.author?.name || "MediaMatic Studio",
            "url": "https://mediamaticstudio.com/about-us"
        },
        "publisher": {
            "@type": "Organization",
            "name": "MediaMatic Studio",
            "logo": {
                "@type": "ImageObject",
                "url": "https://mediamaticstudio.com/logo.png"
            }
        },
        "datePublished": post.publish_date_raw,
        "dateModified": post.date_modified || post.publish_date_raw, // Ensuring modified date is included
        "description": post.excerpt?.replace(/<[^>]*>/g, "").substring(0, 160) || post.title,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://mediamaticstudio.com/blog/${slug}`
        }
    };

    return (
        <>
            <StructuredData data={blogPostingSchema} />
            <BlogPostClient post={post} recentPosts={recentPosts} />
        </>
    );
}
