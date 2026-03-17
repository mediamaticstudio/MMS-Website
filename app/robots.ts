import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/branding-agency-in-houston/"],
            },
        ],
        sitemap: "https://mediamaticstudio.com/sitemap.xml",
    };
}