import { MetadataRoute } from "next";
import { getAllServices } from "@/lib/services-config";

const BASE_URL = "https://mediamaticstudio.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // ── Static pages ────────────────────────────────────────
    const routes = [
        { path: "",                                       priority: 1.0  },
        { path: "/about-us",                              priority: 0.8  },
        { path: "/android-app-development-company",       priority: 0.9  },
        { path: "/animation-videos-company",              priority: 0.8  },
        { path: "/branding-agency-in-houston",            priority: 0.7  },
        { path: "/contact-us",                            priority: 0.8  },
        { path: "/content-management",                    priority: 0.8  },
        { path: "/designing",                             priority: 0.8  },
        { path: "/digital-marketing-agency",              priority: 0.9  },
        { path: "/email-marketing-company",               priority: 0.8  },
        { path: "/flutter-app-development-company",       priority: 0.9  },
        { path: "/get-quote",                             priority: 0.8  },
        { path: "/google-ads-services",                   priority: 0.8  },
        { path: "/ios-app-development-company",           priority: 0.9  },
        { path: "/mobile-app-development-company",        priority: 0.9  },
        { path: "/podcast-recording-studio-in-Coimbatore", priority: 0.7 },
        { path: "/search-engine-marketing-company",       priority: 0.8  },
        { path: "/search-engine-optimization-company",    priority: 0.9  },
        { path: "/services",                              priority: 0.9  },
        { path: "/social-media-marketing-company",        priority: 0.8  },
        { path: "/social-media-optimization-company",     priority: 0.8  },
        { path: "/web-hosting",                           priority: 0.7  },
        { path: "/website-development-agency",            priority: 0.9  },
        { path: "/blog",                                  priority: 0.8  },
    ];

    const staticPages = routes.map((route) => ({
        url: `${BASE_URL}${route.path}/`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route.priority,
    }));

    // ── Dynamic service sub-pages (/services/[slug]/[sub]/) ─
    const allServices = getAllServices();
    const servicePages: MetadataRoute.Sitemap = [];

    for (const service of allServices) {
        for (const sub of service.subServices) {
            servicePages.push({
                url: `${BASE_URL}/services/${service.slug}/${sub.slug}/`,
                lastModified: new Date(),
                changeFrequency: "monthly" as const,
                priority: 0.6,
            });
        }
    }

    // ── Blog posts (WordPress) ──────────────────────────────
    let blogPages: MetadataRoute.Sitemap = [];

    try {
        const res = await fetch(
            "https://blog.mediamaticstudio.com/wp-json/wp/v2/posts?per_page=100"
        );
        const posts = await res.json();

        blogPages = posts.map((post: any) => ({
            url: `${BASE_URL}/blog/${post.slug}/`,
            lastModified: new Date(post.modified),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }));
    } catch (err) {
        console.error("Blog fetch error:", err);
    }

    return [...staticPages, ...servicePages, ...blogPages];
}