'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route");
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-white px-6">
            <div className="grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2">


                {/* Left Illustration */}
                <div className="flex justify-center">
                    <Image
                        src="/404-illustration.jpg"
                        alt="Not Found Illustration"
                        width={300}
                        height={300}
                        className="w-[260px] md:w-[300px] object-contain"
                    />
                </div>

                {/* Right Content */}
                <div className="text-center md:text-left">
                    <h1 className="text-5xl font-extrabold text-[#652b32] mb-3">
                        Ooops...
                    </h1>

                    <h2 className="text-3xl font-light text-[#652b32] mb-4">
                        Page Not Found
                    </h2>

                    <p className="text-[#652b32]/70 mb-6 max-w-sm">
                        Sorry, the content you're looking for doesn't exist. Either it was
                        removed, or you mistyped the link.
                    </p>

                    {/* Button */}
                    <button
                        onClick={() => router.replace("/")}
                        className="rounded-full bg-[#6b2f2f] px-8 py-3 text-white font-medium shadow-md hover:opacity-90 transition"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
