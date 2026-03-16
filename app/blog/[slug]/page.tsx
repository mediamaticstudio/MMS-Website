import BlogPostClient from "@/components/blog/BlogPostClient";

interface PageProps {
  params: {
    slug: string;
  };
}

// Tell Next.js what blog pages should be generated
export async function generateStaticParams() {
  return [
    { slug: "seo-tips" },
    { slug: "nextjs-guide" },
    { slug: "web-design" },
    { slug: "digital-marketing" }
  ];
}

export default function BlogPostPage({ params }: PageProps) {
  return <BlogPostClient slug={params.slug} />;
}