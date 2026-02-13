'use client';

import { useEffect, useRef, useState } from 'react';

export default function VoguePhilosophy() {
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

    return (
        <section ref={sectionRef} id="philosophy" className="py-16 lg:py-32 bg-executive-navy text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-executive-blue/10 lg:bg-executive-blue/20 blur-[120px] pointer-events-none"></div>

            <div className="px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 relative z-10">
                <div className="lg:col-span-3">
                    <div className="w-12 lg:w-full h-[1px] bg-white/30 mb-4 lg:mb-8"></div>
                    <span className="text-[10px] lg:text-xs font-sans uppercase tracking-[0.3em] text-executive-gray/80">The Philosophy</span>
                </div>

                <div className="lg:col-span-9">
                    <p className={`font-serif text-2xl sm:text-3xl lg:text-7xl leading-[1.2] lg:leading-[1.1] transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} tracking-tight`}>
                        &quot;I don&apos;t just develop land; I build the foundation for future legacies. Every square foot is chosen with <span className="text-executive-blue italic">precision</span> and <span className="text-executive-platinum italic">vision</span>.&quot;
                    </p>

                    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-12 mt-12 lg:mt-24 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="relative pl-6 border-l border-white/10 shrink-0">
                            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-executive-gray/70 mb-3">Vision</h4>
                            <p className="font-serif text-xl lg:text-2xl text-executive-platinum leading-tight">Sustainable <br className="hidden lg:block"/>Growth</p>
                        </div>
                        <div className="relative pl-6 border-l border-white/10 shrink-0">
                            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-executive-gray/70 mb-3">Standard</h4>
                            <p className="font-serif text-xl lg:text-2xl text-executive-platinum leading-tight">Uncompromised <br className="hidden lg:block"/>Quality</p>
                        </div>
                        <div className="relative pl-6 border-l border-white/10 shrink-0">
                            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-executive-gray/70 mb-3">Promise</h4>
                            <p className="font-serif text-xl lg:text-2xl text-executive-platinum leading-tight">Clear <br className="hidden lg:block"/>Titles</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
