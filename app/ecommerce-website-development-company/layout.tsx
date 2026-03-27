import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediaMatic | eCommerce Website Development Company",
  description: "Build high-performance e-commerce websites with a mobile-first approach. We include voice searches, chatbots, and AI personalisation on your site.",
  openGraph: {
    title: "MediaMatic | eCommerce Website Development Company",
    description: "Build high-performance e-commerce websites with a mobile-first approach. We include voice searches, chatbots, and AI personalisation on your site.",
  },
  twitter: {
    title: "MediaMatic | eCommerce Website Development Company",
    description: "Build high-performance e-commerce websites with a mobile-first approach. We include voice searches, chatbots, and AI personalisation on your site.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
