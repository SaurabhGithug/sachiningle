'use client';

import { useEffect, useRef } from 'react';

export default function VogueCursor() {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>();
    const mousePos = useRef({ x: 0, y: 0 });
    const outlinePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const dot = cursorDotRef.current;
        const outline = cursorOutlineRef.current;
        if (!dot || !outline) return;

        // Hide default cursor
        document.body.classList.add('custom-cursor');

        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const updatePosition = () => {
            // Smoothly interpolate the outline position (lerp)
            const speed = 0.15;
            outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * speed;
            outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * speed;

            dot.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
            outline.style.transform = `translate3d(${outlinePos.current.x}px, ${outlinePos.current.y}px, 0)`;

            requestRef.current = requestAnimationFrame(updatePosition);
        };

        const onMouseEnterLink = () => {
            outline.classList.add('cursor-hover');
        };

        const onMouseLeaveLink = () => {
            outline.classList.remove('cursor-hover');
        };

        window.addEventListener('mousemove', onMouseMove);
        requestRef.current = requestAnimationFrame(updatePosition);

        const interactiveElements = document.querySelectorAll('a, button');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnterLink);
            el.addEventListener('mouseleave', onMouseLeaveLink);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            document.body.classList.remove('custom-cursor');
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnterLink);
                el.removeEventListener('mouseleave', onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <>
            <style jsx global>{`
                .cursor-dot {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 6px;
                    height: 6px;
                    background-color: #121212;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    margin: -3px 0 0 -3px;
                }
                .cursor-outline {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 40px;
                    height: 40px;
                    border: 1px solid rgba(0, 0, 0, 0.4);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9998;
                    margin: -20px 0 0 -20px;
                    transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
                }
                .cursor-outline.cursor-hover {
                    width: 60px;
                    height: 60px;
                    margin: -30px 0 0 -30px;
                    border-color: #121212;
                    background-color: rgba(18, 18, 18, 0.05);
                }
                @media (max-width: 1024px) {
                    .cursor-dot, .cursor-outline { display: none; }
                }
            `}</style>
            <div ref={cursorDotRef} className="cursor-dot" />
            <div ref={cursorOutlineRef} className="cursor-outline" />
        </>
    );
}
