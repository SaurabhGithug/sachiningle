import React from 'react';
import FadeIn from '@/components/animations/fade-in';

const badges = [
    { title: "100%", label: "Clear Title" },
    { title: "NMRDA", label: "Approved" },
    { title: "15+", label: "Years Legacy" },
    { title: "5000+", label: "Happy Families" }
];

export default function TrustBadges() {
    return (
        <section className="py-16 lg:py-24 bg-executive-navy relative overflow-hidden grain-texture">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
                    {badges.map((badge, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1} duration={0.8} direction="up">
                            <div className={`text-center py-8 lg:py-12 ${idx < badges.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}>
                                <h3 className="font-display text-5xl lg:text-7xl text-executive-gold mb-3 tracking-tight">{badge.title}</h3>
                                <p className="font-sans text-[10px] lg:text-xs uppercase tracking-[0.25em] text-white/60 font-medium">{badge.label}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
