"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    direction?: Direction;
    delay?: number;
    duration?: number;
    fullWidth?: boolean;
    viewportAmount?: number; // 0 to 1
    once?: boolean;
}

export default function FadeIn({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 0.8,
    fullWidth = false,
    viewportAmount = 0.3,
    once = true,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: viewportAmount });

    const getVariants = (): Variants => {
        const distance = 20; // Subtle movement for premium feel

        const variants: Variants = {
            hidden: {
                opacity: 0,
                y: direction === "up" ? distance : direction === "down" ? -distance : 0,
                x: direction === "left" ? distance : direction === "right" ? -distance : 0,
            },
            visible: {
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: [0.16, 1, 0.3, 1], // The "Luxury" easing curve
                },
            },
        };

        return variants;
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            className={`${fullWidth ? "w-full" : "w-auto"} ${className}`}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({
    children,
    className = "",
    delay = 0,
    staggerDelay = 0.1,
    viewportAmount = 0.3,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
    viewportAmount?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: viewportAmount });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: staggerDelay,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
