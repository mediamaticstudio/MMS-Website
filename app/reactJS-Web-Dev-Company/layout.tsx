import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediaMatic | React JS Website Development Company",
  description: "Fast, simple, and interactive web experiences with React.js. MediaMatic provides excellent front-end solutions for your digital products.",
  openGraph: {
    title: "MediaMatic | React JS Website Development Company",
    description: "Fast, simple, and interactive web experiences with React.js. MediaMatic provides excellent front-end solutions for your digital products.",
  },
  twitter: {
    title: "MediaMatic | React JS Website Development Company",
    description: "Fast, simple, and interactive web experiences with React.js. MediaMatic provides excellent front-end solutions for your digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
