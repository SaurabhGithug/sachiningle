import React from 'react';
import SpotlightCard from '@/components/ui/spotlight-card';
import FadeIn from '@/components/animations/fade-in';

const badges = [
    { title: "100%", label: "Clear Title" },
    { title: "NMRDA", label: "Approved" },
    { title: "15+", label: "Years Legacy" },
    { title: "5000+", label: "Happy Families" }
];

export default function TrustBadges() {
    return (
        <section className="py-24 bg-executive-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
                    {badges.map((badge, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1} duration={0.8} direction="up">
                            <SpotlightCard 
                                className="p-8 text-center h-full flex flex-col justify-center items-center bg-white border-executive-navy/5 shadow-sm hover:shadow-md transition-all duration-500"
                                spotlightColor="rgba(2, 6, 23, 0.05)"
                            >
                                <h3 className="font-display text-4xl lg:text-5xl text-executive-navy mb-3">{badge.title}</h3>
                                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-executive-gray font-semibold">{badge.label}</p>
                            </SpotlightCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
