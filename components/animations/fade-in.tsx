"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    direction?: Direction;
    delay?: number;
    duration?: number;
    fullWidth?: boolean;
    viewportAmount?: number;
    once?: boolean;
}

function getTransformInitial(direction: Direction): string {
    const distance = 20;
    switch (direction) {
        case "up": return `translateY(${distance}px)`;
        case "down": return `translateY(-${distance}px)`;
        case "left": return `translateX(${distance}px)`;
        case "right": return `translateX(-${distance}px)`;
        case "none": return "none";
    }
}

export default function FadeIn({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 0.8,
    fullWidth = false,
    viewportAmount = 0.05,
    once = true,
}: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(el);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold: viewportAmount }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [viewportAmount, once]);

    return (
        <div
            ref={ref}
            className={`${fullWidth ? "w-full" : "w-auto"} ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translate(0, 0)" : getTransformInitial(direction),
                transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
}

export function StaggerContainer({
    children,
    className = "",
    delay = 0,
    staggerDelay = 0.1,
    viewportAmount = 0.3,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
    viewportAmount?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: viewportAmount }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [viewportAmount]);

    // Pass stagger context via CSS custom properties
    useEffect(() => {
        if (!isVisible || !ref.current) return;
        const children = ref.current.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i] as HTMLElement;
            const childDelay = delay + staggerDelay * i;
            child.style.opacity = "0";
            child.style.transform = "translateY(10px)";
            child.style.transition = `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${childDelay}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${childDelay}s`;
            // Trigger animation on next frame
            requestAnimationFrame(() => {
                child.style.opacity = "1";
                child.style.transform = "translateY(0)";
            });
        }
    }, [isVisible, delay, staggerDelay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
