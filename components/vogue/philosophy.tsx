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
        <section ref={sectionRef} id="philosophy" className="py-32 bg-executive-navy text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-executive-blue/20 blur-3xl pointer-events-none"></div>

            <div className="px-8 lg:px-16 grid lg:grid-cols-12 gap-16 relative z-10">
                <div className="lg:col-span-4">
                    <div className="w-full h-[1px] bg-white/20 mb-8"></div>
                    <span className="text-xs font-sans uppercase tracking-[0.2em] text-executive-gray">The Philosophy</span>
                </div>

                <div className="lg:col-span-8">
                    <p className={`font-serif text-4xl lg:text-6xl leading-[1.2] transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        &quot;I don&apos;t just develop land; I build the foundation for future legacies. Every square foot is chosen with the precision of an artist and the foresight of a visionary.&quot;
                    </p>

                    <div className={`grid grid-cols-2 lg:grid-cols-3 gap-12 mt-24 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div>
                            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-executive-gray/70 mb-4">Vision</h4>
                            <p className="font-serif text-2xl text-executive-platinum">Sustainable <br />Growth</p>
                        </div>
                        <div>
                            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-executive-gray/70 mb-4">Standard</h4>
                            <p className="font-serif text-2xl text-executive-platinum">Uncompromised <br />Quality</p>
                        </div>
                        <div>
                            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-executive-gray/70 mb-4">Promise</h4>
                            <p className="font-serif text-2xl text-executive-platinum">Clear <br />Titles</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
