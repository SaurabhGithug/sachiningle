'use client';

import { useEffect, useRef, useState } from 'react';

export default function VogueTrustBadges() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const badges = [
        { title: "10+", label: "Delivered Layouts" },
        { title: "100%", label: "NMRDA Approved" },
        { title: "100%", label: "Clear 7/12 Titles" },
        { title: "Since 2010", label: "Trusted in Nagpur" }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-white border-y border-black/5">
            <div className="px-8 lg:px-16 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {badges.map((badge, idx) => (
                        <div 
                            key={idx} 
                            className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                            style={{ transitionDelay: `${idx * 200}ms` }}
                        >
                            <h3 className="font-serif text-4xl lg:text-5xl text-vogue-black mb-2">{badge.title}</h3>
                            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">{badge.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
