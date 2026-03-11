'use client'

import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import { fetchBlogPostBySlug } from "@/lib/api";

interface BlogCardProps {
    post: {
        slug: string;
        title: string;
        excerpt: string;
        featured_image: string;
        category: string;
        publish_date: string;
        read_time: string;
        author: {
            name: string;
            avatar: string;
        };
    };
}

const BlogCard = ({ post }: BlogCardProps) => {
    const queryClient = useQueryClient();

    const prefetchPost = () => {
        queryClient.prefetchQuery({
            queryKey: ["blog-post", post.slug],
            queryFn: () => fetchBlogPostBySlug(post.slug),
            staleTime: 1000 * 60 * 5,
        });
    };

    return (
        <Link
            href={`/blog/${post.slug}/`}
            className="group bg-[#fff8eb] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full rounded-[2.5rem] overflow-hidden border border-[#652b32]/5"
            onMouseEnter={prefetchPost}
        >
            {/* Featured Image */}
            <div className="aspect-[16/9] overflow-hidden relative bg-[#652b32]/5 flex items-center justify-center">
                <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-[#652b32] text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-md border border-[#652b32]/5">
                        {post.category}
                    </span>
                </div>
                <Image
                    src={post.featured_image}
                    alt={post.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-1000 ease-out"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#652b32]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col flex-1">
                {/* Meta Info */}
                <div className="flex items-center gap-6 text-[11px] text-[#652b32]/40 mb-4 font-black uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.publish_date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.read_time}</span>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-black text-[#652b32] mb-4 group-hover:text-[#652b32] transition-colors line-clamp-2 leading-[1.3] tracking-tight uppercase font-heading">
                    {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[#652b32]/60 text-sm mb-8 line-clamp-3 leading-relaxed flex-1 font-medium">
                    {post.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-[#652b32]/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/assets/LOGO-blog.png"
                                alt={post.author.name}
                                fill
                                className="rounded-full object-cover ring-2 ring-[#652b32]/5"
                            />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-tight text-[#652b32]">{post.author.name}</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-[#652b32]/5 flex items-center justify-center group-hover:bg-[#652b32] group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4 text-[#652b32]/40 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
