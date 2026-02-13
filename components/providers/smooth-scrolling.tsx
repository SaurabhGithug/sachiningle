"use client";

import { ReactNode, useEffect, useState } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({ children }: { children: ReactNode }) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Only enable smooth scrolling on desktop (768px+)
        const mql = window.matchMedia("(min-width: 768px)");
        setIsDesktop(mql.matches);

        const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mql.addEventListener("change", handleChange);
        return () => mql.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const lenis = new Lenis({
            duration: 1.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [isDesktop]);

    return <>{children}</>;
}
