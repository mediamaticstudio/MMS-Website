"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import styles from "@/app/blog/Blog.module.css";
import listIcon from "@/public/assets/list.svg";

interface Heading {
    id: string;
    text: string;
    level: number;
}

const TableOfContents = () => {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>("");
    const [isCollapsed, setIsCollapsed] = useState(false);
    const tocRef = useRef<HTMLDivElement>(null);

    const generateHeadingId = (text: string): string => {
        return text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/^-+|-+$/g, "");
    };

    useEffect(() => {
        const article = document.querySelector("article");
        if (!article) return;

        const timer = setTimeout(() => {
            const elements = Array.from(
                article.querySelectorAll("h2, h3, h4")
            ).filter((el) => {
                const text = el.textContent?.toLowerCase() || "";
                return !text.includes("faq") && !text.includes("table of contents");
            });

            const items: Heading[] = elements.map((element, index) => {
                const htmlElement = element as HTMLElement;
                const text = element.textContent || "";
                if (!htmlElement.id) {
                    htmlElement.id = generateHeadingId(text) || `heading-${index}`;
                }
                return {
                    id: htmlElement.id,
                    text,
                    level: parseInt(element.tagName[1]),
                };
            });

            setHeadings(items);

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) setActiveId(entry.target.id);
                    });
                },
                { rootMargin: "-80px 0% -70% 0%", threshold: 0 }
            );

            elements.forEach((el) => observer.observe(el));
            return () => observer.disconnect();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Make TOC sticky — stays fixed while article is in view, unsticks when article ends
    useEffect(() => {
        const toc = tocRef.current;
        if (!toc) return;

        const handleScroll = () => {
            const article = document.querySelector("article");
            if (!article || !toc) return;

            const TOP_OFFSET = 120; // matches top: 120px in CSS
            const articleRect = article.getBoundingClientRect();
            const tocHeight = toc.offsetHeight;
            const scrollY = window.scrollY;

            // Article bottom relative to viewport
            const articleBottom = articleRect.bottom;

            // How far the article top is from the top of the page (absolute)
            const articleAbsTop = articleRect.top + scrollY;

            // Scroll position where TOC should start being fixed
            const fixStart = articleAbsTop - TOP_OFFSET;

            // Scroll position where TOC bottom would hit article bottom
            // Stop fixing when TOC bottom meets article bottom in viewport
            const shouldBeFixed = scrollY >= fixStart && articleBottom > TOP_OFFSET + tocHeight;

            if (shouldBeFixed) {
                toc.style.position = "fixed";
                toc.style.top = `${TOP_OFFSET}px`;
                toc.style.width = `${toc.parentElement?.offsetWidth ?? 320}px`;
                toc.style.zIndex = "20";
            } else {
                toc.style.position = "sticky";
                toc.style.top = `${TOP_OFFSET}px`;
                toc.style.width = "100%";
                toc.style.zIndex = "10";
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [headings]); // re-run when headings are loaded (TOC height is now known)

    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
            const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            setActiveId(id);
        }
    }, []);

    if (headings.length === 0) return null;

    return (
        /* Outer placeholder div — keeps layout space when TOC goes fixed */
        <div style={{ minHeight: tocRef.current?.offsetHeight ?? 0 }}>
            <div ref={tocRef}>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`${styles.tocWrapper} ${isCollapsed ? styles.tocCollapsed : ""}`}
                    style={{ position: "sticky", top: "120px", width: "100%" }}
                >
                    <div className={styles.tocContainer}>
                        {/* Header */}
                        <div className={styles.tocHeader}>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-[#652b32] flex items-center justify-center shadow-lg shadow-[#652b32]/20">
                                    <img src={listIcon} alt="list" className="w-4 h-4 brightness-0 invert" />
                                </div>
                                <div>
                                    <h3 className="text-base font-black" style={{ color: "#652b32" }}>Table of Contents</h3>
                                    <p className="text-xs" style={{ color: "rgba(101,43,50,0.6)" }}>{headings.length} sections</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all hover:scale-105"
                                aria-label={isCollapsed ? "Expand" : "Collapse"}
                            >
                                <ChevronRight
                                    className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? "" : "rotate-180"}`}
                                    style={{ color: "#652b32" }}
                                />
                            </button>
                        </div>

                        {/* Content */}
                        {!isCollapsed && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className={styles.tocContent}
                            >
                                <ul className={styles.tocList}>
                                    {headings.map((heading, index) => {
                                        const indent = (heading.level - 2) * 12;
                                        return (
                                            <motion.li
                                                key={heading.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.03, duration: 0.3 }}
                                                className={`${styles.tocItem} ${styles[`level${heading.level}`]} ${activeId === heading.id ? styles.tocItemActive : ""}`}
                                                style={{ paddingLeft: `${indent}px` }}
                                            >
                                                <a
                                                    href={`#${heading.id}`}
                                                    onClick={(e) => handleClick(e, heading.id)}
                                                    className={`${styles.tocLink} ${activeId === heading.id ? styles.tocLinkActive : ""}`}
                                                    style={{ color: activeId === heading.id ? "#652b32" : "rgba(101,43,50,0.7)" }}
                                                >
                                                    <span className={styles.tocBullet} />
                                                    <span className={styles.tocText}>{heading.text}</span>
                                                    {activeId === heading.id && (
                                                        <motion.span
                                                            layoutId="activeIndicator"
                                                            className={styles.tocActiveIndicator}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 0.2 }}
                                                        />
                                                    )}
                                                </a>
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TableOfContents;