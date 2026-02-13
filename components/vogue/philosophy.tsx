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
        <section ref={sectionRef} id="philosophy" className="py-16 lg:py-36 bg-executive-navy text-white relative overflow-hidden grain-texture">
            {/* Subtle warm glow */}
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-executive-gold/5 blur-[150px] pointer-events-none"></div>

            <div className="px-6 lg:px-16 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10">
                <div className="lg:col-span-3">
                    <div className="w-12 lg:w-full h-[2px] bg-executive-gold/40 mb-4 lg:mb-8"></div>
                    <span className="text-[10px] lg:text-xs font-sans uppercase tracking-[0.3em] text-executive-gold">The Philosophy</span>
                </div>

                <div className="lg:col-span-9">
                    {/* Decorative quote mark */}
                    <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-30' : 'translate-y-8 opacity-0'}`}>
                        <span className="font-serif text-8xl lg:text-[12rem] text-executive-gold/20 leading-none block -mb-12 lg:-mb-24">&ldquo;</span>
                    </div>
                    
                    <p className={`font-serif text-2xl sm:text-3xl lg:text-6xl xl:text-7xl leading-[1.15] lg:leading-[1.1] transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} tracking-tight`}>
                        I don&apos;t just develop land; I build the foundation for future legacies. Every square foot is chosen with <span className="text-executive-gold italic">precision</span> and <span className="text-executive-gold italic">vision</span>.
                    </p>

                    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 mt-14 lg:mt-28 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="relative pl-6 border-l-2 border-executive-gold/30 shrink-0">
                            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-executive-gold/70 mb-3">Vision</h4>
                            <p className="font-serif text-xl lg:text-2xl text-white/90 leading-tight">Sustainable <br className="hidden lg:block"/>Growth</p>
                        </div>
                        <div className="relative pl-6 border-l-2 border-executive-gold/30 shrink-0">
                            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-executive-gold/70 mb-3">Standard</h4>
                            <p className="font-serif text-xl lg:text-2xl text-white/90 leading-tight">Uncompromised <br className="hidden lg:block"/>Quality</p>
                        </div>
                        <div className="relative pl-6 border-l-2 border-executive-gold/30 shrink-0">
                            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-executive-gold/70 mb-3">Promise</h4>
                            <p className="font-serif text-xl lg:text-2xl text-white/90 leading-tight">Clear <br className="hidden lg:block"/>Titles</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
