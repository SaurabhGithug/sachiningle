"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);

        const interactiveElements = document.querySelectorAll("a, button, [role='button']");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        // Add class to body to hide default cursor
        document.body.classList.add("custom-cursor");

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
            document.body.classList.remove("custom-cursor");
        };
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out"
                style={{
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
                }}
            />
            <div
                className="fixed top-0 left-0 w-10 h-10 border border-foreground/30 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
                style={{
                    transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isHovering ? 1.5 : 1})`,
                    backgroundColor: isHovering ? "rgba(18, 18, 18, 0.05)" : "transparent",
                }}
            />
        </>
    );
}
