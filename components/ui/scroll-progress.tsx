"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if (!barRef.current) return;
                    const scrollTop = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
                    barRef.current.style.transform = `scaleX(${progress})`;
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            ref={barRef}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-executive-blue via-cyan-500 to-executive-navy origin-left z-[100]"
            style={{ transform: "scaleX(0)", willChange: "transform" }}
        />
    );
}
