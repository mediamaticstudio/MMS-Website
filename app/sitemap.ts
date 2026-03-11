import { MetadataRoute } from "next";
import { fetchAllBlogPostSlugs } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://mediamaticstudio.com";

    // Absolute list of identified static routes from the app directory
    const staticPages = [
        "",
        "/about-us",
        "/contact-us",
        "/get-quote",
        "/blog",
        "/podcast-recording-studio-in-Coimbatore",
        "/search-engine-marketing-company",
        "/search-engine-optimization-company",
        "/social-media-marketing-company",
        "/social-media-optimization-company",
        "/services",
        "/services/animation",
        "/services/contentmanagement",
        "/services/designing",
        "/services/digital-marketing-agency",
        "/services/search-engine-marketing-company",
        "/services/search-engine-optimization-company",
        "/services/social-media-optimization-company",
        "/services/webhosting",
        "/services/website-development-agency",
    ];

    const routes = staticPages.map((page) => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: page === "" ? 1 : 0.8,
    }));

    // Dynamic Blog Posts
    const blogSlugs = await fetchAllBlogPostSlugs().catch(() => []);
    const blogPosts = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...routes, ...blogPosts];
}
