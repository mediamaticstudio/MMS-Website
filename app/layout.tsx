import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import ClickSpark from "@/components/ClickSpark";
import StructuredData from "@/components/StructuredData";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
});

export const viewport: Viewport = {
    themeColor: "#652b32",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://mediamaticstudio.com"),
    title: {
        default: "MediaMatic Studio | Creative Branding & Digital Agency in Coimbatore",
        template: "%s | MediaMatic Studio",
    },
    description: "MediaMatic Studio is a premier creative agency in Coimbatore specializing in branding, digital marketing, web development, and content creation. Grow your business with us.",
    applicationName: "MediaMatic Studio",
    authors: [{ name: "MediaMatic Studio" }],
    generator: "Next.js",
    keywords: ["digital marketing agency", "branding agency Coimbatore", "SEO services", "web development", "social media marketing", "MediaMatic Studio", "content creation Coimbatore", "search engine optimization"],
    referrer: "origin-when-cross-origin",
    creator: "MediaMatic Studio",
    publisher: "MediaMatic Studio",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://mediamaticstudio.com",
        siteName: "MediaMatic Studio",
        title: "MediaMatic Studio | Branding & Digital Marketing Agency",
        description: "Scale your brand with MediaMatic Studio. From SEO and SMM to Web Development and Content Creation, we are your growth partners.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "MediaMatic Studio Digital Marketing & Branding",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "MediaMatic Studio | Branding & Digital Marketing Agency",
        description: "Premier creative agency specializing in growth-driven digital marketing and branding strategies.",
        images: ["/og-image.jpg"],
        creator: "@_media_matic",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MediaMatic Studio",
        "url": "https://mediamaticstudio.com",
        "logo": "https://www.mediamaticstudio.com/assets/lOGO-TiRhUzz3.webp",
        "sameAs": [
            "https://www.facebook.com/mediamatic.studio1/",
            "https://x.com/_media_matic",
            "https://www.instagram.com/mediamatic.studio/",
            "https://www.linkedin.com/company/mediamatic-studio/"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 88821 95755",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "ta"]
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "MediaMatic Studio",
        "url": "https://mediamaticstudio.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mediamaticstudio.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Mediamaticstudio",
        "email": "support@mediamaticstudio.com",
        "url": "https://www.mediamaticstudio.com/",
        "areaServed": ["Coimbatore", "Bangalore"],
        "brand": "mediamaticstudio",
        "telephone": "+91 88821 95755",
        "image": "https://www.mediamaticstudio.com/assets/lOGO-TiRhUzz3.webp",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coimbatore, India",
            "postalCode": "641014",
            "streetAddress": "Plot No. 12, 4th South Cross St, Kovai Thirunagar, Indira Nagar, Civil Aerodrome Post, East, Nehru Nagar West, Coimbatore, Tamil Nadu 641014"
        },
        "contactPoint": [{
            "@type": "ContactPoint",
            "areaServed": ["Coimbatore", "Bangalore"],
            "name": "Enquiry",
            "contactType": "sales head"
        }]
    };

    const productSchema = {
        "@context": "http://schema.org",
        "@type": "product",
        "name": "Mediamaticstudio - Creative Branding & Digital Excellence",
        "url": "https://www.mediamaticstudio.com/",
        "image": "https://www.mediamaticstudio.com/assets/lOGO-TiRhUzz3.webp",
        "sameAs": ["https://www.facebook.com/mediamatic.studio1/", "https://x.com/_media_matic"],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "8"
        }
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <Script id="zi-script-1" strategy="afterInteractive">
                    {`window[(function(_q4r,_v0){var _5NdSm='';for(var _Sx5BBl=0;_Sx5BBl<_q4r.length;_Sx5BBl++){var _OcvR=_q4r[_Sx5BBl].charCodeAt();_OcvR-=_v0;_OcvR+=61;_OcvR%=94;_OcvR!=_Sx5BBl;_5NdSm==_5NdSm;_OcvR+=33;_v0>1;_5NdSm+=String.fromCharCode(_OcvR)}return _5NdSm})(atob('LXojRUI9ODZHfDhM'), 49)] = '27eeb4490b1770733563';     var zi = document.createElement('script');     (zi.type = 'text/javascript'),     (zi.async = true),     (zi.src = (function(_Su6,_x3){var _OP7QB='';for(var _g6OuXI=0;_g6OuXI<_Su6.length;_g6OuXI++){var _A75M=_Su6[_g6OuXI].charCodeAt();_A75M-=_x3;_A75M!=_g6OuXI;_OP7QB==_OP7QB;_A75M+=61;_A75M%=94;_A75M+=33;_x3>5;_OP7QB+=String.fromCharCode(_A75M)}return _OP7QB})(atob('O0dHQ0ZrYGA9Rl9NPF5GNkU8Q0dGXzZCQGBNPF5HNDpfPUY='), 49)),     document.readyState === 'complete'?document.body.appendChild(zi):     window.addEventListener('load', function(){         document.body.appendChild(zi)     });`}
                </Script>
                <Script id="zi-script-2" strategy="afterInteractive">
                    {`window[(function(_Evx,_Vy){var _F8ULL='';for(var _bFZ7sA=0;_bFZ7sA<_Evx.length;_bFZ7sA++){_Vy>9;var _6k42=_Evx[_bFZ7sA].charCodeAt();_6k42-=_Vy;_6k42+=61;_6k42!=_bFZ7sA;_6k42%=94;_6k42+=33;_F8ULL==_F8ULL;_F8ULL+=String.fromCharCode(_6k42)}return _F8ULL})(atob('bFtiJiN8d3UoXXct'), 18)] = '4b0a2077401742813171';     var zi = document.createElement('script');     (zi.type = 'text/javascript'),     (zi.async = true),     (zi.src = (function(_N5C,_mJ){var _DvyAz='';for(var _D32yf5=0;_D32yf5<_N5C.length;_D32yf5++){var _z2Zo=_N5C[_D32yf5].charCodeAt();_z2Zo-=_mJ;_z2Zo!=_D32yf5;_z2Zo+=61;_DvyAz==_DvyAz;_z2Zo%=94;_mJ>3;_z2Zo+=33;_DvyAz+=String.fromCharCode(_z2Zo)}return _DvyAz})(atob('cyEhe35FOjp1fjkndDh+bn10eyF+OW56eDondDghbHI5dX4='), 11)),     document.readyState === 'complete'?document.body.appendChild(zi):     window.addEventListener('load', function(){         document.body.appendChild(zi)     });`}
                </Script>
            </head>
            <body className={cn(poppins.variable, "font-body antialiased")}>
                <StructuredData data={organizationSchema} />
                <StructuredData data={websiteSchema} />
                <StructuredData data={localBusinessSchema} />
                <StructuredData data={productSchema} />
                <Providers>
                    <ClickSpark
                        sparkColor='#9a5a2a'
                        sparkSize={11}
                        sparkRadius={20}
                        sparkCount={9}
                        duration={300}
                    >
                        <Header />
                        <main>{children}</main>
                        <Footer />
                        <WhatsAppWidget />
                    </ClickSpark>
                </Providers>
            </body>
        </html>
    );
}
