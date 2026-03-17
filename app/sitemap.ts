import { MetadataRoute } from "next";

const BASE_URL = "https://mediamaticstudio.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        "",
        "/about-us",
        "/contact-us",
        "/services",
        "/get-quote",
        "/blog",
        "/animation-videos-company",
        "/content-management",
        "/designing",
        "/digital-marketing-agency",
        "/email-marketing-company",
        "/podcast-recording-studio-in-coimbatore",
        "/search-engine-marketing-company",
        "/search-engine-optimization-company",
        "/social-media-marketing-company",
        "/social-media-optimization-company",
        "/web-hosting",
        "/website-development-agency",
    ];

    const staticPages = routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // 🔥 BLOG POSTS (WordPress)
    let blogPages: MetadataRoute.Sitemap = [];

    try {
        const res = await fetch(
            "https://blog.mediamaticstudio.com/wp-json/wp/v2/posts"
        );
        const posts = await res.json();

        blogPages = posts.map((post: any) => ({
            url: `${BASE_URL}/blog/${post.slug}`,
            lastModified: new Date(post.modified),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }));
    } catch (err) {
        console.error("Blog fetch error:", err);
    }

    return [...staticPages, ...blogPages];
}