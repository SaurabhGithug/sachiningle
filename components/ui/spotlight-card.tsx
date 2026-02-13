'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
    /** Set to true for a simpler card without the spotlight hover effect */
    minimal?: boolean;
}

export default function SpotlightCard({ 
    children, 
    className = "", 
    spotlightColor = "rgba(201, 169, 110, 0.08)", // Warm gold-tinted glow
    minimal = false,
    ...props 
}: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (minimal || !divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        if (!minimal) setOpacity(1);
    };

    const handleMouseLeave = () => {
        if (!minimal) setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden rounded-xl border border-executive-navy/8 bg-white transition-all duration-500",
                !minimal && "hover:shadow-lg hover:shadow-executive-navy/5",
                className
            )}
            {...props}
        >
            {!minimal && (
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
                    style={{
                        opacity,
                        background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                    }}
                />
            )}
            <div className="relative h-full">{children}</div>
        </div>
    );
}
