import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediaMatic | WordPress Website Development Company",
  description: "Create stunning websites with engaging user experiences that go beyond blogging. We are a WordPress website development company with experienced WordPress developers.",
  openGraph: {
    title: "MediaMatic | WordPress Website Development Company",
    description: "Create stunning websites with engaging user experiences that go beyond blogging. We are a WordPress website development company with experienced WordPress developers.",
  },
  twitter: {
    title: "MediaMatic | WordPress Website Development Company",
    description: "Create stunning websites with engaging user experiences that go beyond blogging. We are a WordPress website development company with experienced WordPress developers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
