"use client";

import { useEffect, useState } from "react";

export default function MobileOnly({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkMobile = () => {
            // You can fine-tune this width (768 = Tailwind md)
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile === null) return null; // Optional: loading state
    if (!isMobile)
        return (
            <div className="w-full h-screen flex items-center justify-center p-4 text-center">
                <div>
                    <h1 className="text-2xl font-semibold">Mobile Only</h1>
                    <p className="text-muted-foreground mt-2">
                        This app is designed for mobile devices only. Please
                        open it on a phone or resize your browser.
                    </p>
                </div>
            </div>
        );

    return <>{children}</>;
}
