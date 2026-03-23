import { mapWPPostToBlogPost } from "./wp-mapper";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://mediamaticstudio.com/api";
const WP_URL = process.env.NEXT_PUBLIC_WP_URL || "https://blog.mediamaticstudio.com/wp-json/wp/v2";

export async function fetchBlogPosts(page: number = 1): Promise<{ posts: any[], totalPages: number }> {
    const fields = [
        "id", "slug", "title", "excerpt", "date", "content",
        "featured_media", "categories", "tags", "_links", "author", "yoast_head_json", "acf"
    ].join(",");

    try {
        const response = await fetch(
            `${WP_URL}/posts?page=${page}&per_page=9&_embed=wp:featuredmedia,wp:term,author&_fields=${fields},_embedded&t=${Date.now()}`,
            { cache: "no-store" }
        );

        if (!response.ok) {
            if (response.status === 403) {
                console.error("403 Forbidden: WordPress REST API is likely blocked by a security plugin or WAF.");
            }
            if (response.status === 404) {
                console.error("404 Not Found: WordPress REST API endpoint not found. Check if Permalinks are set to 'Post name'.");
            }
            throw new Error(`Error fetching blog posts: ${response.status} ${response.statusText}`);
        }

        const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1", 10);
        const posts = await response.json();
        return {
            posts: posts.map(mapWPPostToBlogPost),
            totalPages
        };
    } catch (error: any) {
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
            console.error("CORS Error: The browser blocked the request. Please ensure Access-Control-Allow-Origin is configured on the WordPress server.");
        }
        throw error;
    }
}

export async function fetchRecentPosts(count: number = 4): Promise<any[]> {
    const fields = [
        "id", "slug", "title", "excerpt", "date", "featured_media",
        "categories", "tags", "_links", "author", "yoast_head_json", "acf"
    ].join(",");
    const response = await fetch(
        `${WP_URL}/posts?per_page=${count}&_embed=wp:featuredmedia,wp:term,author&_fields=${fields},_embedded&t=${Date.now()}`,
        { cache: "no-store" }
    );
    if (!response.ok) return [];
    const posts = await response.json();
    return posts.map(mapWPPostToBlogPost);
}

export async function fetchBlogPostBySlug(slug: string): Promise<any> {
    const response = await fetch(
        `${WP_URL}/posts?slug=${slug}&_embed&t=${Date.now()}`,
        { cache: "no-store" }
    );
    if (!response.ok) {
        throw new Error(`Error fetching blog post: ${response.statusText}`);
    }
    const posts = await response.json();
    return posts.length > 0 ? mapWPPostToBlogPost(posts[0]) : null;
}

export async function sendContactMail(data: any): Promise<any> {
    const response = await fetch(`${API_URL}/contact/send/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response.json();
}

export async function sendQuoteRequest(data: any): Promise<any> {
    const response = await fetch(`${API_URL}/contact/send/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...data,
            name: `${data.firstName || ""} ${data.lastName || ""}`.trim(),
            source: data.source || "Get Quote Page"
        }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error: ${response.statusText}`);
    }
    return response.json();
}

export async function sendMarketingAuditRequest(data: any): Promise<any> {
    const response = await fetch(`${API_URL}/contact/marketing-audit/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error: ${response.statusText}`);
    }
    return response.json();
}

export async function sendPodcastBookingRequest(data: any): Promise<any> {
    const response = await fetch(`${API_URL}/contact/podcast-booking/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error: ${response.statusText}`);
    }
    return response.json();
}

export async function fetchAllBlogPostSlugs(): Promise<string[]> {
    const response = await fetch(
        `${WP_URL}/posts?per_page=100&_fields=slug&t=${Date.now()}`,
        { cache: "no-store" }
    );
    if (!response.ok) return [];
    const posts = await response.json();
    return posts.map((post: any) => post.slug);
}
