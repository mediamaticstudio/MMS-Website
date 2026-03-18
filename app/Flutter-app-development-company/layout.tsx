import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "MediaMatic | Flutter App Development Company",
    description:
        "MediaMatic is a leading Flutter app development company building high-performance cross-platform mobile apps for iOS and Android.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}