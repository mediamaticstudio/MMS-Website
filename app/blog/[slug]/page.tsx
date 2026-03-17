import BlogPostClient from "@/components/blog/BlogPostClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch(
    "https://blog.mediamaticstudio.com/wp-json/wp/v2/posts",
    { cache: "force-cache" }
  );

  const posts = await res.json();

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: PageProps) {
  return <BlogPostClient slug={params.slug} />;
}