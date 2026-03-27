"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/* ================= NAV DATA ================= */

const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About Us", href: "#about", id: "about" },
    { label: "Services", href: "/services/", id: "services", hasDropdown: true, isSubPage: true },
    { label: "Digital Marketing", href: "/digital-marketing-agency/", id: "digital-marketing", hasDropdown: true, isSubPage: true },
    { label: "STUDIO HUB", href: "#", id: "studio", hasDropdown: true },
    { label: "Blog", href: "/blog/", isSubPage: true },
    { label: "Contact Us", href: "/contact-us/", isSubPage: true, id: "contact" },
];

// Top-level service categories (items without sub-menus stay as-is)
const serviceCategories = [
    {
        label: "App Development",
        hasSubMenu: true,
        subLinks: [
            { label: "Mobile App Development", href: "/mobile-app-development-company" },
            { label: "Android App Development", href: "/android-app-development-company" },
            { label: "iOS App Development", href: "/ios-app-development-company" },
            { label: "Flutter App Development", href: "/flutter-app-development-company" },
        ],
    },
    {
        label: "Software Development",
        hasSubMenu: true,
        subLinks: [
            { label: "Website Development", href: "/website-design-development-company/" },
            { label: "WordPress Website Development", href: "/wordpress-website-development-company/" },
            { label: "E-Commerce Development", href: "/ecommerce-website-development-company/" },
            { label: "React JS Website Development", href: "/react-js-development-company/" },
        ],
    },
    {
        label: " Design",
        hasSubMenu: true,
        subLinks: [
            { label: "Logo Design Company", href: "/logo-design-company" },
            { label: "Flyer Design Company", href: "/flyer-design-company" },
            { label: "UI UX Design Agency", href: "/ui-ux-design-agency" },
        ],
    },
    { label: "2D & 3D Animation Videos", href: "/animation-videos-company/", hasSubMenu: false },
    { label: "Content Management", href: "/content-management/", hasSubMenu: false },
    { label: "Designing", href: "/designing/", hasSubMenu: false },
    { label: "VPS Web Hosting Service", href: "/web-hosting/", hasSubMenu: false },
];

// Legacy flat list kept for pathname matching
const serviceLinks = [
    { label: "Website Development", href: "/website-design-development-company" },
    { label: "WordPress Website Development", href: "/wordpress-website-development-company" },
    { label: "E-Commerce Development", href: "/ecommerce-website-development-company" },
    { label: "React JS Website Development", href: "/react-js-development-company" },
    { label: "Mobile App Development", href: "/mobile-app-development-company" },
    { label: "Android App Development", href: "/android-app-development-company" },
    { label: "iOS App Development", href: "/ios-app-development-company" },
    { label: "Flutter App Development", href: "/flutter-app-development-company" },
    { label: "Logo Design Company", href: "/logo-design-company" },
    { label: "Flyer Design Company", href: "/flyer-design-company" },
    { label: "2D & 3D Animation Videos", href: "/animation-videos-company/" },
    { label: "Content Management", href: "/content-management/" },
    { label: "Designing", href: "/designing/" },
    { label: "VPS Web Hosting Service", href: "/web-hosting/" },
];

const digitalMarketingLinks = [
    { label: "Search Engine Optimization (SEO)", href: "/search-engine-optimization-company/" },
    { label: "Social Media Optimization (SMO)", href: "/social-media-optimization-company/" },
    { label: "Social Media Marketing (SMM)", href: "/social-media-marketing-company/" },
    { label: "Search Engine Marketing (SEM)", href: "/search-engine-marketing-company/" },
    { label: "Email Marketing", href: "/email-marketing-company/" },
    { label: "Google Ads Services", href: "/google-ads-services/" },
];


/* ================= COMPONENT ================= */

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [digitalMarketingOpen, setDigitalMarketingOpen] = useState(false);
    const [studioOpen, setStudioOpen] = useState(false);
    const [activeServiceSubMenu, setActiveServiceSubMenu] = useState<string | null>(null);

    // Mobile accordion states
    const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
    const [mobileDigitalMarketingOpen, setMobileDigitalMarketingOpen] = useState(false);
    const [mobileStudioOpen, setMobileStudioOpen] = useState(false);
    const [mobileAppDevOpen, setMobileAppDevOpen] = useState(false);
    const [mobileSoftwareDevOpen, setMobileSoftwareDevOpen] = useState(false);
    const [mobileLogoDesignOpen, setMobileLogoDesignOpen] = useState(false);
    const [mobileFlyerDesignOpen, setMobileFlyerDesignOpen] = useState(false);

    const [activeSection, setActiveSection] = useState("home");
    const lastScrollY = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const subMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const headerRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
    const pathname = usePathname();
    const isAdPage = pathname?.startsWith("/adpage") || pathname?.includes("branding-agency-in-houston");
    const isScrollSpyPage = pathname === "/" || pathname === "/about-us/";

    /* Header entry animation */
    useEffect(() => {
        gsap.fromTo(
            headerRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", force3D: true }
        );
    }, []);

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const sections = navLinks.filter(link => link.id).map(link => link.id!);

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        const onScroll = () => {
            const currentScrollY = window.scrollY;
            const isHomePage = pathname === "/";

            if (isScrollSpyPage && currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setIsScrolled(currentScrollY > 60 || !isHomePage);
            lastScrollY.current = currentScrollY;
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, [pathname, isScrollSpyPage]);

    /* Mobile menu animation */
    useEffect(() => {
        if (!isOpen || !menuRef.current) return;

        gsap.fromTo(
            menuRef.current,
            { clipPath: "circle(0% at 90% 10%)" },
            { clipPath: "circle(150% at 90% 10%)", duration: 0.6, ease: "power3.out" }
        );

        gsap.fromTo(
            linksRef.current?.children || [],
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.08 }
        );
    }, [isOpen]);

    /* Navigation */
    const handleNavClick = (href: string, isSubPage?: boolean) => {
        setIsOpen(false);
        setMobileServiceOpen(false);
        setMobileStudioOpen(false);
        setServiceOpen(false);
        setStudioOpen(false);
        setActiveServiceSubMenu(null);

        if (href.startsWith("http")) {
            window.open(href, "_blank", "noopener,noreferrer");
            return;
        }

        if (isSubPage && pathname === href) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        if (isSubPage || href.startsWith("/")) {
            router.push(href);
            return;
        }

        if (href === "#") return;

        if (pathname !== "/") {
            router.push("/");
            setTimeout(() => {
                const el = document.querySelector(href);
                if (el) {
                    const offset = 80;
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                } else {
                    setTimeout(() => {
                        const elRetry = document.querySelector(href);
                        if (elRetry) {
                            const offset = 80;
                            const elementPosition = elRetry.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - offset;
                            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                    }, 500);
                }
            }, 500);
            return;
        }

        const el = document.querySelector(href);
        if (el) {
            const offset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    /* ---- Helpers for desktop nested hover ---- */
    const handleServiceMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setServiceOpen(true);
        setDigitalMarketingOpen(false);
        setStudioOpen(false);
    };

    const handleServiceMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setServiceOpen(false);
            setActiveServiceSubMenu(null);
        }, 200);
    };

    const handleSubCategoryEnter = (label: string) => {
        if (subMenuTimeoutRef.current) clearTimeout(subMenuTimeoutRef.current);
        setActiveServiceSubMenu(label);
    };

    const handleSubCategoryLeave = () => {
        subMenuTimeoutRef.current = setTimeout(() => {
            setActiveServiceSubMenu(null);
        }, 150);
    };

    const handleSubMenuEnter = () => {
        if (subMenuTimeoutRef.current) clearTimeout(subMenuTimeoutRef.current);
    };

    const handleSubMenuLeave = () => {
        subMenuTimeoutRef.current = setTimeout(() => {
            setActiveServiceSubMenu(null);
        }, 150);
    };

    return (
        <>
            <header
                ref={headerRef}
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 will-change-transform
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "bg-[#fff8eb] shadow-lg" : "bg-transparent"}`}
            >
                <div className="container mx-auto px-6 text-[#652b32]">
                    <nav className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("#home");
                            }}
                            className="flex items-center flex-shrink-0"
                        >
                            <img
                                src="/assets/lOGO.webp"
                                className="h-10 xl:h-12 transition-transform duration-300 hover:scale-105 drop-shadow-md brightness-110 contrast-125 select-none"
                                alt="MediaMatic Logo"
                                loading="eager"
                                decoding="async"
                            />
                        </a>

                        {/* Desktop Nav */}
                        {!isAdPage && (
                            <div className="hidden xl:flex items-center gap-6 xxl:gap-8">
                                {navLinks.map((link) =>
                                    link.hasDropdown ? (
                                        <div
                                            key={link.label}
                                            className="relative"
                                            onMouseEnter={() => {
                                                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                                                if (link.id === "services") {
                                                    handleServiceMouseEnter();
                                                } else {
                                                    setServiceOpen(false);
                                                    setActiveServiceSubMenu(null);
                                                    setDigitalMarketingOpen(link.id === "digital-marketing");
                                                    setStudioOpen(link.id === "studio");
                                                }
                                            }}
                                            onMouseLeave={() => {
                                                if (link.id === "services") {
                                                    handleServiceMouseLeave();
                                                } else {
                                                    timeoutRef.current = setTimeout(() => {
                                                        setDigitalMarketingOpen(false);
                                                        setStudioOpen(false);
                                                    }, 200);
                                                }
                                            }}
                                        >
                                            <a
                                                href={link.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleNavClick(link.href, (link as any).isSubPage);
                                                }}
                                                className={`flex items-center gap-1 text-[12px] xl:text-[13px] uppercase tracking-wider hover:text-[#652b32] transition whitespace-nowrap relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all ${activeSection === link.id ||
                                                    (link.id === "services" && (
                                                        pathname === "/services/" ||
                                                        serviceLinks.some(s => pathname === s.href)
                                                    )) ||
                                                    (link.id === "digital-marketing" && (
                                                        pathname === "/digital-marketing-agency/" ||
                                                        digitalMarketingLinks.some(s => pathname === s.href)
                                                    )) ||
                                                    (link.id === "studio" && pathname === "/podcast-recording-studio-in-Coimbatore/")
                                                    ? "after:w-full text-[#652b32] font-bold"
                                                    : "after:w-0"
                                                    }`}
                                            >
                                                {link.label} <ChevronDown size={14} />
                                            </a>

                                            {/* ---- SERVICES dropdown with nested sub-menus ---- */}
                                            {link.id === "services" && serviceOpen && (
                                                <div className="absolute top-full mt-3 bg-[#fff8eb] shadow-xl rounded-xl w-64 overflow-visible z-10 border border-[#652b32]/10">
                                                    {serviceCategories.map((cat) =>
                                                        cat.hasSubMenu ? (
                                                            <div
                                                                key={cat.label}
                                                                className="relative group/cat"
                                                                onMouseEnter={() => handleSubCategoryEnter(cat.label)}
                                                                onMouseLeave={handleSubCategoryLeave}
                                                            >
                                                                <div
                                                                    className={`flex items-center justify-between px-5 py-3 text-sm font-semibold cursor-default transition-all duration-200 
                                                                        ${activeServiceSubMenu === cat.label
                                                                            ? "bg-[#652b32] text-[#faf3e0]"
                                                                            : "text-[#652b32] hover:bg-[#652b32]/10"
                                                                        }`}
                                                                >
                                                                    <span>{cat.label}</span>
                                                                    <ChevronRight size={14} className="opacity-60 flex-shrink-0" />
                                                                </div>

                                                                {/* Fly-out sub-menu */}
                                                                {activeServiceSubMenu === cat.label && (
                                                                    <div
                                                                        className="absolute left-full top-0 ml-1 bg-[#fff8eb] shadow-xl rounded-xl w-64 overflow-hidden z-20 border border-[#652b32]/10"
                                                                        onMouseEnter={handleSubMenuEnter}
                                                                        onMouseLeave={handleSubMenuLeave}
                                                                    >
                                                                        {cat.subLinks!.map((s) => (
                                                                            <a
                                                                                key={s.label}
                                                                                href={s.href}
                                                                                onClick={(e) => {
                                                                                    e.preventDefault();
                                                                                    setServiceOpen(false);
                                                                                    setActiveServiceSubMenu(null);
                                                                                    handleNavClick(s.href, true);
                                                                                }}
                                                                                className="block px-5 py-3 text-sm transition-all duration-200 hover:bg-[#652b32] hover:text-[#faf3e0] text-[#652b32]/70 font-medium"
                                                                            >
                                                                                {s.label}
                                                                            </a>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            <a
                                                                key={cat.label}
                                                                href={(cat as any).href}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setServiceOpen(false);
                                                                    handleNavClick((cat as any).href, true);
                                                                }}
                                                                className="block px-5 py-3 text-sm transition-all duration-300 hover:bg-[#652b32] hover:text-[#faf3e0] text-[#652b32]/70 font-medium"
                                                            >
                                                                {cat.label}
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            )}

                                            {/* Digital Marketing dropdown */}
                                            {link.id === "digital-marketing" && digitalMarketingOpen && (
                                                <div className="absolute top-full mt-3 bg-[#fff8eb] shadow-xl rounded-xl w-72 overflow-hidden z-10 border border-[#652b32]/10">
                                                    {digitalMarketingLinks.map((s) => (
                                                        <a
                                                            key={s.label}
                                                            href={s.href}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setDigitalMarketingOpen(false);
                                                                handleNavClick(s.href, true);
                                                            }}
                                                            className="block px-5 py-3 text-sm transition-all duration-300 hover:bg-[#652b32] hover:text-[#faf3e0] text-[#652b32]/70 font-medium"
                                                        >
                                                            {s.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Studio dropdown */}
                                            {link.id === "studio" && studioOpen && (
                                                <div className="absolute top-full mt-3 bg-[#fff8eb] shadow-xl rounded-xl w-72 overflow-hidden z-10 border border-[#652b32]/10">
                                                    <a
                                                        href="/podcast-recording-studio-in-Coimbatore/"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setStudioOpen(false);
                                                            handleNavClick("/podcast-recording-studio-in-Coimbatore/", true);
                                                        }}
                                                        className="block px-5 py-3 text-sm transition-all duration-300 hover:bg-[#652b32] hover:text-[#faf3e0] text-[#652b32]/70 font-medium"
                                                    >
                                                        Coimbatore Branch
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(link.href, (link as any).isSubPage);
                                            }}
                                            className={`relative text-[12px] xl:text-[13px] uppercase tracking-wider whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full ${(link.id && activeSection === link.id) || (!isScrollSpyPage && link.isSubPage && (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)))) ? "after:w-full text-[#652b32] font-bold" : "after:w-0"}`}
                                        >
                                            {link.label}
                                        </a>
                                    )
                                )}

                                {/* GET QUOTE Button */}
                                <a
                                    href="/get-quote/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-4 px-6 xl:px-9 py-3.5 rounded-xl font-black text-[#faf3e0] bg-[#652b32] hover:bg-[#652b32]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 inline-block text-center text-[10px] xl:text-[12px] uppercase tracking-[0.15em] whitespace-nowrap cursor-pointer"
                                >
                                    GET QUOTE
                                </a>

                                {/* PAY NOW Button */}
                                <a
                                    href="https://www.paypal.com/ncp/payment/Q54LAB9Y3BBLS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 xl:ml-4 px-6 xl:px-9 py-3.5 rounded-xl font-black text-[#652b32] bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:scale-105 active:scale-95 inline-block text-center text-[10px] xl:text-[12px] uppercase tracking-[0.15em]"
                                >
                                    PAY NOW
                                </a>
                            </div>
                        )}

                        {isAdPage && (
                            <div className="hidden xl:flex items-center gap-6">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.dispatchEvent(new CustomEvent('open-contact-modal'));
                                    }}
                                    className="px-9 py-3.5 rounded-xl font-black text-[#faf3e0] bg-[#652b32] hover:bg-[#652b32]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 inline-block text-center text-[12px] uppercase tracking-[0.15em] whitespace-nowrap cursor-pointer"
                                >
                                    GET QUOTE
                                </a>
                            </div>
                        )}

                        {/* Mobile Toggle */}
                        {!isAdPage ? (
                            <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2">
                                {isOpen ? <X /> : <Menu />}
                            </button>
                        ) : (
                            <button
                                onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                                className="xl:hidden px-4 py-2 rounded-lg font-black text-[#faf3e0] bg-[#652b32] text-[10px] uppercase tracking-wider"
                            >
                                Get Quote
                            </button>
                        )}
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            {isOpen && (
                <div ref={menuRef} className="fixed inset-0 z-40 bg-primary text-white overflow-y-auto">
                    <div
                        ref={linksRef}
                        className="min-h-full flex flex-col items-center justify-center gap-6 py-20"
                    >
                        {navLinks.map((link) =>
                            link.hasDropdown ? (
                                <div key={link.label} className="text-center w-full px-6">
                                    <div className="flex items-center justify-center gap-4">
                                        <a
                                            href={link.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(link.href, (link as any).isSubPage);
                                            }}
                                            className={`text-2xl transition-all duration-300 ${activeSection === link.id ||
                                                (link.id === "services" && (
                                                    pathname === "/services/" ||
                                                    serviceLinks.some(s => pathname === s.href)
                                                )) ||
                                                (link.id === "digital-marketing" && (
                                                    pathname === "/digital-marketing-agency/" ||
                                                    digitalMarketingLinks.some(s => pathname === s.href)
                                                )) ||
                                                (link.id === "studio" && pathname === "/podcast-recording-studio-in-Coimbatore/")
                                                ? "text-yellow-400 font-bold"
                                                : "opacity-80 hover:opacity-100"
                                                }`}
                                        >
                                            {link.label}
                                        </a>
                                        <button
                                            onClick={() => {
                                                if (link.id === "services") setMobileServiceOpen(!mobileServiceOpen);
                                                else if (link.id === "digital-marketing") setMobileDigitalMarketingOpen(!mobileDigitalMarketingOpen);
                                                else if (link.id === "studio") setMobileStudioOpen(!mobileStudioOpen);
                                            }}
                                            className="p-1 rounded-full bg-white/10"
                                        >
                                            <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${(link.id === "services" ? mobileServiceOpen : link.id === "digital-marketing" ? mobileDigitalMarketingOpen : mobileStudioOpen) ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>

                                    {/* ---- SERVICES mobile accordion with nested categories ---- */}
                                    {link.id === "services" && mobileServiceOpen && (
                                        <div className="mt-4 space-y-2 w-full pl-4 border-l-2 border-white/20">
                                            {serviceCategories.map((cat) =>
                                                cat.hasSubMenu ? (
                                                    <div key={cat.label}>
                                                        <button
                                                            onClick={() => {
                                                                if (cat.label === "App Development") setMobileAppDevOpen(!mobileAppDevOpen);
                                                                else if (cat.label === "Software Development") setMobileSoftwareDevOpen(!mobileSoftwareDevOpen);
                                                                else if (cat.label === " Design") setMobileLogoDesignOpen(!mobileLogoDesignOpen);
                                                            }}
                                                            className="w-full flex items-center justify-between py-3 px-6 rounded-xl text-lg opacity-90 hover:opacity-100 hover:bg-white/10 transition-all duration-300"
                                                        >
                                                            <span>{cat.label}</span>
                                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${(cat.label === "App Development" ? mobileAppDevOpen : cat.label === "Software Development" ? mobileSoftwareDevOpen : mobileLogoDesignOpen) ? 'rotate-180' : ''}`} />
                                                        </button>

                                                        {/* Nested items */}
                                                        {((cat.label === "App Development" && mobileAppDevOpen) ||
                                                            (cat.label === "Software Development" && mobileSoftwareDevOpen) ||
                                                            (cat.label === " Design" && mobileLogoDesignOpen)) && (
                                                                <div className="ml-4 mt-1 space-y-1 border-l-2 border-yellow-400/40">
                                                                    {cat.subLinks!.map((s) => (
                                                                        <a
                                                                            key={s.label}
                                                                            href={s.href}
                                                                            onClick={(e) => {
                                                                                e.preventDefault();
                                                                                handleNavClick(s.href, true);
                                                                            }}
                                                                            className="block py-2.5 px-5 rounded-lg text-base opacity-80 hover:opacity-100 hover:bg-[#652b32] hover:text-[#faf3e0] transition-all duration-300"
                                                                        >
                                                                            {s.label}
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            )}
                                                    </div>
                                                ) : (
                                                    <a
                                                        key={cat.label}
                                                        href={(cat as any).href}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleNavClick((cat as any).href, true);
                                                        }}
                                                        className="block py-3 px-6 rounded-xl text-lg opacity-80 hover:opacity-100 hover:bg-[#652b32] hover:text-[#faf3e0] transition-all duration-300"
                                                    >
                                                        {cat.label}
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    )}

                                    {link.id === "digital-marketing" && mobileDigitalMarketingOpen && (
                                        <div className="mt-4 space-y-2 w-full pl-4 border-l-2 border-white/20">
                                            {digitalMarketingLinks.map((s) => (
                                                <a
                                                    key={s.label}
                                                    href={s.href}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleNavClick(s.href, true);
                                                    }}
                                                    className="block py-3 px-6 rounded-xl text-lg opacity-80 hover:opacity-100 hover:bg-[#652b32] hover:text-[#faf3e0] transition-all duration-300"
                                                >
                                                    {s.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    {link.id === "studio" && mobileStudioOpen && (
                                        <div className="mt-4 space-y-2 w-full">
                                            <a
                                                href="/podcast-recording-studio-in-Coimbatore/"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleNavClick("/podcast-recording-studio-in-Coimbatore/", true);
                                                }}
                                                className="block py-3 px-6 rounded-xl text-lg opacity-80 hover:opacity-100 hover:bg-[#652b32] hover:text-[#faf3e0] transition-all duration-300"
                                            >
                                                Coimbatore Branch
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href, (link as any).isSubPage);
                                    }}
                                    className={`text-2xl transition-all duration-300 ${(link.id && activeSection === link.id) || (!isScrollSpyPage && link.isSubPage && (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)))) ? "text-yellow-400 font-bold" : "opacity-80 hover:opacity-100"}`}
                                >
                                    {link.label}
                                </a>
                            )
                        )}

                        <a
                            href="/get-quote/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 px-10 py-5 rounded-2xl bg-[#652b32] text-[#faf3e0] font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-[#652b32]/90 transition-all active:scale-95 cursor-pointer"
                        >
                            GET QUOTE
                        </a>

                        <a
                            href="https://www.paypal.com/ncp/payment/Q54LAB9Y3BBLS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 px-10 py-5 rounded-2xl bg-yellow-400 text-[#652b32] font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-yellow-300 transition-all active:scale-95"
                        >
                            PAY NOW
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};