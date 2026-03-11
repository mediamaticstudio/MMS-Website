'use client'

import { useState, useEffect, useMemo } from "react";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ChevronRight, Link as LinkIcon, Check, Facebook, Linkedin } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { toast } from "sonner";
import styles from "@/app/blog/Blog.module.css";
import BlogSidebar from "@/components/blog/BlogSidebar";
import FAQBrandStyle from "@/components/blog/FAQBrandStyle";
import TableOfContents from "@/components/blog/TableOfContents";
import Image from "next/image";
import Link from "next/link";

const XIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const PinterestIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.736-4.869-4.182 0-6.639 3.112-6.639 6.337 0 1.25.481 2.591 1.081 3.296.119.14.137.264.1.48-.121.5-.395 1.611-.451 1.837-.073.295-.233.354-.537.214-2.007-.932-3.26-3.85-3.26-6.196 0-5.043 3.664-9.678 10.557-9.678 5.545 0 9.86 3.953 9.86 9.227 0 5.503-3.472 9.941-8.291 9.941-1.618 0-3.14-.842-3.662-1.835 0 0-.799 3.033-.996 3.791-.362 1.397-1.344 3.138-1.996 4.359 1.498.463 3.087.712 4.729.712 6.627 0 12.001-5.367 12.001-11.987S18.636 0 12.017 0z" />
    </svg>
);

export default function BlogPostClient({ post, recentPosts }: { post: any, recentPosts: any[] }) {
    const router = useRouter();
    const { scrollYProgress } = useScroll();
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // Check device type
    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    const displayFaqs = post?.faqs || [];

    // Processed content
    const processedContent = useMemo(() => {
        if (!post?.content || typeof document === 'undefined') return post?.content || "";

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = post.content;

        const contentImages = tempDiv.querySelectorAll("img");
        contentImages.forEach(img => {
            img.setAttribute("loading", "lazy");
            img.setAttribute("decoding", "async");
            img.classList.add("transition-all", "duration-500", "hover:scale-[1.02]");
        });

        const headings = tempDiv.querySelectorAll("h2, h3");
        headings.forEach((heading, index) => {
            const text = heading.textContent || "";
            const id = text
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/\s+/g, "-");
            heading.id = id || `heading-${index}`;
        });

        const removeMarkers = ["faq", "frequently asked questions", "table of contents", "in this article"];
        const tocSelectors = [".table-of-contents", ".toc", "[id*='toc']", "div[class*='toc']", ".rank-math-block"];
        tocSelectors.forEach(sel => tempDiv.querySelectorAll(sel).forEach(el => el.remove()));

        const allHeadings = Array.from(tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6'));
        allHeadings.forEach(heading => {
            const text = heading.textContent?.toLowerCase() || "";
            const shouldRemove = removeMarkers.some(marker => text.includes(marker));

            if (shouldRemove) {
                let current: Element | null = heading;
                while (current) {
                    const next: Element | null = current.nextElementSibling;
                    current.remove();
                    current = next;
                }
            }
        });

        return tempDiv.innerHTML;
    }, [post?.content]);

    // Get intro content (first paragraph) and remaining content
    const { introContent, remainingContent } = useMemo(() => {
        if (!processedContent || typeof document === 'undefined') return { introContent: "", remainingContent: processedContent || "" };

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = processedContent;

        const firstParagraph = tempDiv.querySelector('p');
        const introHtml = firstParagraph ? firstParagraph.outerHTML : "";

        if (firstParagraph) {
            firstParagraph.remove();
        }

        return {
            introContent: introHtml,
            remainingContent: tempDiv.innerHTML
        };
    }, [processedContent]);

    // Handle scroll to hash
    useEffect(() => {
        const handleHashClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (target && target.getAttribute('href')?.startsWith('#')) {
                const id = target.getAttribute('href')?.substring(1);
                if (id) {
                    const element = document.getElementById(id);
                    if (element) {
                        e.preventDefault();
                        const offset = 120;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "auto"
                        });
                        window.history.pushState(null, "", `#${id}`);
                    }
                }
            }
        };

        document.addEventListener('click', handleHashClick);
        return () => document.removeEventListener('click', handleHashClick);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [post.slug]);

    const logoBlog = "/assets/LOGO-blog.png";

    return (
        <main className="min-h-screen bg-[#faf3e0] pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-20 font-sans">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#652b32] z-[100] origin-left"
                style={{ scaleX: scrollYProgress }}
            />
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none hidden md:block"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #652b32 1px, transparent 0)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-4 md:mb-6 lg:mb-8 flex items-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1.5 md:gap-2 text-[#652b32]/60 hover:text-[#652b32] transition-colors font-bold uppercase tracking-widest text-[10px] md:text-xs"
                    >
                        <ArrowLeft size={12} className="md:w-3.5 md:h-3.5" /> Back to Blog
                    </Link>
                </div>

                {/* Social Sidebar */}
                {!isMobile && !isTablet && (
                    <div className={styles.socialSidebar}>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#652b32] -rotate-90 origin-center mb-8 whitespace-nowrap opacity-40">
                            Share Story
                        </div>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=https://mediamaticstudio.com/blog/${post.slug}/`} target="_blank" rel="noopener noreferrer" className={styles.socialIconWrapper} title="Share on Facebook">
                            <Facebook size={20} className="text-[#1877f2]" />
                        </a>
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mediamaticstudio.com/blog/${post.slug}/`} target="_blank" rel="noopener noreferrer" className={styles.socialIconWrapper} title="Share on LinkedIn">
                            <Linkedin size={20} className="text-[#0077b5]" />
                        </a>
                        <a href={`https://x.com/intent/tweet?url=https://mediamaticstudio.com/blog/${post.slug}/&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className={styles.socialIconWrapper} title="Share on X">
                            <XIcon />
                        </a>
                        <a href={`https://pinterest.com/pin/create/button/?url=https://mediamaticstudio.com/blog/${post.slug}/&media=${encodeURIComponent(post.featured_image)}&description=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className={styles.socialIconWrapper} title="Share on Pinterest">
                            <div className="text-[#E60023]">
                                <PinterestIcon />
                            </div>
                        </a>
                        <button
                            onClick={() => {
                                const url = `https://mediamaticstudio.com/blog/${post.slug}/`;
                                navigator.clipboard.writeText(url);
                                toast.success("Link copied to clipboard!", {
                                    icon: <Check className="w-4 h-4 text-green-500" />,
                                    duration: 2000,
                                });
                            }}
                            className={styles.socialIconWrapper}
                            title="Copy Link"
                        >
                            <LinkIcon size={20} className="text-[#652b32]" />
                        </button>
                    </div>
                )}

                <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-8">
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-white rounded-[1.5rem] md:rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl shadow-[#652b32]/5 mb-12"
                        >
                            <nav className="flex items-center flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6 lg:mb-8">
                                <Link href="/" className="text-[10px] md:text-xs font-bold text-[#652b32]/50 hover:text-[#652b32] transition-colors uppercase tracking-wider">Home</Link>
                                <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#652b32]/30" />
                                <Link href="/blog" className="text-[10px] md:text-xs font-bold text-[#652b32]/50 hover:text-[#652b32] transition-colors uppercase tracking-wider">Blog</Link>
                                <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#652b32]/30" />
                                <span className="text-[10px] md:text-xs font-bold text-[#652b32] uppercase tracking-wider truncate max-w-[100px] md:max-w-none">{post.category}</span>
                            </nav>

                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#652b32] leading-[1.2] md:leading-[1.1] mb-6 tracking-tight">
                                {post.title}
                            </h1>

                            <div className="flex items-start gap-4 mb-8 pb-8 border-b border-gray-100">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#faf3e0] flex-shrink-0">
                                    <Image src={logoBlog} alt={post.author.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="text-lg font-black text-[#652b32]">By {post.author.name}</div>
                                    <div className="flex items-center gap-4 text-xs font-bold text-[#652b32]/50 uppercase tracking-wider mt-1">
                                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.publish_date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.read_time}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full aspect-video rounded-xl md:rounded-3xl overflow-hidden mb-12 shadow-2xl relative bg-[#652b32]/5">
                                <Image
                                    src={post.featured_image}
                                    alt={post.title}
                                    fill
                                    className="object-contain relative z-10"
                                    priority
                                />
                                <div className="absolute inset-0 w-full h-full">
                                    <Image src={post.featured_image} alt="" fill className="object-cover blur-2xl opacity-10" />
                                </div>
                            </div>

                            {introContent && (
                                <div
                                    className={`${styles.blogContent} mb-8`}
                                    dangerouslySetInnerHTML={{ __html: introContent }}
                                />
                            )}

                            {(isMobile || isTablet) && (
                                <div className="my-8 lg:hidden">
                                    <div className="bg-[#faf3e0] rounded-2xl p-6 border-2 border-[#652b32]/10">
                                        <h3 className="text-lg font-black text-[#652b32] mb-4 flex items-center gap-2">
                                            <span className="w-1 h-5 bg-[#652b32] rounded-full"></span>
                                            In This Article
                                        </h3>
                                        <TableOfContents />
                                    </div>
                                </div>
                            )}

                            {remainingContent && (
                                <div
                                    className={styles.blogContent}
                                    dangerouslySetInnerHTML={{ __html: remainingContent }}
                                />
                            )}

                            {displayFaqs.length > 0 && (
                                <div className="mt-8">
                                    <FAQBrandStyle faqs={displayFaqs} />
                                </div>
                            )}
                        </motion.article>
                    </div>

                    {!isMobile && !isTablet && (
                        <aside className="lg:col-span-4 relative h-full hidden lg:block">
                            <div className="sticky top-28 w-full">
                                <TableOfContents />
                            </div>
                        </aside>
                    )}
                </div>

                <div className="mt-20 space-y-24">
                    <div className="grid lg:grid-cols-12 gap-12 items-start pb-20">
                        <div className="lg:col-span-12">
                            <h3 className="text-2xl font-black text-[#652b32] mb-10">Keep Reading</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {recentPosts.filter((p: any) => p.slug !== post.slug).slice(0, 3).map((p: any) => (
                                    <BlogCard key={p.slug} post={p} />
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-12">
                            <BlogSidebar showRecent={false} variant="ghost" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
