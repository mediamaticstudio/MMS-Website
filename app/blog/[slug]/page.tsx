import BlogPostClient from "@/components/blog/BlogPostClient";
import { fetchBlogPostBySlug } from "@/services/api";

interface PageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch(
    "https://blog.mediamaticstudio.com/wp-json/wp/v2/posts?per_page=100",
    { cache: "force-cache" }
  );

  const posts = await res.json();

  if (!Array.isArray(posts)) return [];

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await fetchBlogPostBySlug(params.slug).catch(() => null);
  return <BlogPostClient slug={params.slug} initialPost={post} />;
}